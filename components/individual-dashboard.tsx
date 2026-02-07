"use client"
import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown, ArrowRight, ArrowDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useUser } from "@/lib/user-context"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

type TimePeriod = "today" | "this-week" | "this-month" | "this-quarter"

type IndividualDashboardProps = {
  isAdmin: boolean
  currentUserName?: string
  currentUserId?: string
}

export function IndividualDashboard({
  isAdmin,
  currentUserName = "",
  currentUserId = "",
}: IndividualDashboardProps) {
  const { currentUser, isLoading: isUserLoading } = useUser()
  const [tasks, setTasks] = useState([])
  const [commitments, setCommitments] = useState([])
  const [powerMoves, setPowerMoves] = useState<any[]>([])
  const [victoryTargets, setVictoryTargets] = useState<any[]>([])
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [isTrackingLoading, setIsTrackingLoading] = useState(true)
  const [supportingWorkOpen, setSupportingWorkOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("today")
  const [linkedPowerMove, setLinkedPowerMove] = useState<string | null>(null) // Declare linkedPowerMove variable

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const toggleCommitment = (id: string) => {
    setCommitments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, completed: !c.completed, status: !c.completed ? "Completed" : "In Progress" } : c,
      ),
    )
  }

  useEffect(() => {
    let isActive = true

    const load = async () => {
      try {
        setIsLoadingData(true)
        const [pmResponse, vtResponse] = await Promise.all([
          fetch("/api/admin/power-moves", { cache: "no-store" }),
          fetch("/api/admin/victory-targets", { cache: "no-store" }),
        ])

        const pmResult = await pmResponse.json().catch(() => ({}))
        const vtResult = await vtResponse.json().catch(() => ({}))

        if (!isActive) return

        setPowerMoves(Array.isArray(pmResult.powerMoves) ? pmResult.powerMoves : [])
        setVictoryTargets(Array.isArray(vtResult.targets) ? vtResult.targets : [])
      } catch {
        if (!isActive) return
        setPowerMoves([])
        setVictoryTargets([])
      } finally {
        if (isActive) setIsLoadingData(false)
      }
    }

    load()

    return () => {
      isActive = false
    }
  }, [])

  const getPowerMoveOwnerId = (powerMove: any) => powerMove.owner_id ?? powerMove.ownerId ?? ""
  const getPowerMoveOwnerName = (powerMove: any) => powerMove.owner ?? powerMove.ownerName ?? ""

  const getVictoryTargetOwnerId = (target: any) => target.owner_id ?? target.ownerId ?? ""
  const getVictoryTargetOwnerName = (target: any) => target.owner ?? target.ownerName ?? ""

  const effectiveUserId = currentUser?.id || currentUserId
  const effectiveUserName = currentUser?.name || currentUserName

  const displayName = currentUser?.name || currentUserName || "—"
  const displayRole = currentUser?.role || (isAdmin ? "Admin" : "Member")
  const displayBrands = currentUser?.assignments
    ? new Set(currentUser.assignments.map((assignment) => assignment.brand)).size
    : 0
  const displayAvatar = currentUser?.avatar || ""
  const displayStreak = 0

  const myPowerMoves = isAdmin
    ? powerMoves
    : effectiveUserId || effectiveUserName
      ? powerMoves.filter((pm: any) => {
          if (effectiveUserId) {
            return getPowerMoveOwnerId(pm) === effectiveUserId
          }
          return getPowerMoveOwnerName(pm) === effectiveUserName
        })
      : []

  const myVictoryTargets = isAdmin
    ? victoryTargets
    : effectiveUserId || effectiveUserName
      ? victoryTargets.filter((vt: any) => {
          if (effectiveUserId) {
            return getVictoryTargetOwnerId(vt) === effectiveUserId
          }
          return getVictoryTargetOwnerName(vt) === effectiveUserName
        })
      : []

  const getTargetActualForPeriod = (pm: any, period: TimePeriod) => {
    switch (period) {
      case "today":
        return {
          target: pm.dailyTarget ?? pm.weeklyTarget ?? 0,
          actual: pm.dailyActual ?? 0,
        }
      case "this-week":
        return { target: pm.weeklyTarget ?? 0, actual: pm.weeklyActual ?? 0 }
      case "this-month":
        return { target: pm.monthlyTarget ?? 0, actual: pm.monthlyActual ?? 0 }
      case "this-quarter":
        return { target: pm.quarterlyTarget ?? 0, actual: pm.quarterlyActual ?? 0 }
    }
    return { target: 0, actual: 0 }
  }

  const getActualFieldForPeriod = (pm: any, period: TimePeriod) => {
    switch (period) {
      case "today":
        return "dailyActual"
      case "this-week":
        return "weeklyActual"
      case "this-month":
        return "monthlyActual"
      case "this-quarter":
        return "quarterlyActual"
    }
    return "weeklyActual"
  }

  const getTargetFieldForPeriod = (period: TimePeriod) => {
    switch (period) {
      case "today":
        return "dailyTarget"
      case "this-week":
        return "weeklyTarget"
      case "this-month":
        return "monthlyTarget"
      case "this-quarter":
        return "quarterlyTarget"
    }
    return "weeklyTarget"
  }

  const powerMoveIds = useMemo(
    () => powerMoves.map((pm) => pm.id).filter(Boolean).join(","),
    [powerMoves],
  )

  useEffect(() => {
    if (!powerMoveIds) {
      setIsTrackingLoading(false)
      return
    }

    const controller = new AbortController()
    let isActive = true

    setIsTrackingLoading(true)

    const loadTracking = async () => {
      try {
        const response = await fetch(
          `/api/power-move-tracking?period=${encodeURIComponent(selectedPeriod)}&powerMoveIds=${encodeURIComponent(
            powerMoveIds,
          )}`,
          { signal: controller.signal },
        )
        const result = await response.json().catch(() => ({}))

        if (!response.ok || !Array.isArray(result.tracking)) return

        const trackingMap = new Map<string, { actual: number; target: number }>(
          result.tracking.map((row: any) => [row.power_move_id, row]),
        )

        setPowerMoves((prev) =>
          prev.map((pm) => {
            const tracked = trackingMap.get(pm.id)
            if (!tracked) return pm
            const actualField = getActualFieldForPeriod(pm, selectedPeriod)
            const targetField = getTargetFieldForPeriod(selectedPeriod)
            return {
              ...pm,
              [actualField]: tracked.actual,
              [targetField]: tracked.target ?? pm[targetField],
            }
          }),
        )
      } catch {
        // Ignore tracking failures
      } finally {
        if (isActive) setIsTrackingLoading(false)
      }
    }

    loadTracking()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [selectedPeriod, powerMoveIds])

  const periodData = myPowerMoves.reduce(
    (acc, pm) => {
      const { target, actual } = getTargetActualForPeriod(pm, selectedPeriod)
      if (!target) return acc
      const safeActual = Math.max(actual || 0, 0)
      return {
        completed: acc.completed + Math.min(safeActual, target),
        total: acc.total + target,
        target: acc.target + target,
      }
    },
    { completed: 0, total: 0, target: 0 },
  )

  const executionPercentage = periodData.total > 0 ? Math.round((periodData.completed / periodData.total) * 100) : 0

  const handleCompletePowerMove = async (id: string) => {
    let trackingPayload: { powerMoveId: string; period: TimePeriod; target: number; actual: number; completedById?: string } | null = null

    setPowerMoves((prev) =>
      prev.map((pm) => {
        if (pm.id !== id) return pm
        const { target, actual } = getTargetActualForPeriod(pm, selectedPeriod)
        const actualField = getActualFieldForPeriod(pm, selectedPeriod)
        const nextActual = Math.min((actual || 0) + 1, target)
        trackingPayload = {
          powerMoveId: pm.id,
          period: selectedPeriod,
          target,
          actual: nextActual,
          completedById: effectiveUserId || undefined,
        }
        return { ...pm, [actualField]: nextActual }
      }),
    )

    if (!trackingPayload || trackingPayload.target <= 0) return

    try {
      await fetch("/api/power-move-tracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trackingPayload),
      })

      if (trackingPayload.period === "today") {
        await fetch("/api/power-move-tracking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...trackingPayload,
            period: "this-week",
          }),
        })
      }
    } catch {
      // Ignore tracking failures to avoid blocking UI
    }
  }

  const getPeriodLabel = (period: TimePeriod) => {
    switch (period) {
      case "today":
        return "Today"
      case "this-week":
        return "This Week"
      case "this-month":
        return "This Month"
      case "this-quarter":
        return "This Quarter"
    }
  }

  const getScoreLabel = (period: TimePeriod) => {
    switch (period) {
      case "today":
        return "DAILY SCORE"
      case "this-week":
        return "WEEKLY SCORE"
      case "this-month":
        return "MONTHLY SCORE"
      case "this-quarter":
        return "QUARTERLY SCORE"
    }
  }

  const getExecutionStatus = () => {
    if (executionPercentage >= 70) return "on-standard"
    if (executionPercentage >= 50) return "caution"
    return "needs-help"
  }

  const executionStatus = getExecutionStatus()

  const getHeroStyling = () => {
    if (executionStatus === "on-standard") {
      return {
        bgGradient: "from-emerald-50 via-emerald-100/80 to-emerald-50",
        borderColor: "border-emerald-200",
        accentColor: "border-l-emerald-500",
        textColor: "text-emerald-900",
        subtextColor: "text-emerald-700",
        scoreCircleBg: "bg-emerald-500",
        scoreCircleText: "text-white",
        headline: "Personal execution is on standard.",
        statusBadge: { label: "On Standard", bg: "bg-emerald-100 text-emerald-800" },
      }
    }
    if (executionStatus === "caution") {
      return {
        bgGradient: "from-amber-50 via-amber-100/80 to-amber-50",
        borderColor: "border-amber-200",
        accentColor: "border-l-amber-500",
        textColor: "text-amber-900",
        subtextColor: "text-amber-700",
        scoreCircleBg: "bg-amber-500",
        scoreCircleText: "text-white",
        headline: "Personal execution requires attention.",
        statusBadge: { label: "Caution", bg: "bg-amber-100 text-amber-800" },
      }
    }
    return {
      bgGradient: "from-rose-50 via-rose-100/80 to-rose-50",
      borderColor: "border-rose-200",
      accentColor: "border-l-rose-500",
      textColor: "text-rose-900",
      subtextColor: "text-rose-700",
      scoreCircleBg: "bg-rose-500",
      scoreCircleText: "text-white",
      headline: "Personal execution requires immediate focus.",
      statusBadge: { label: "Needs Help", bg: "bg-rose-100 text-rose-800" },
    }
  }

  const heroStyle = getHeroStyling()

  // PATCH 1: Calculate if all today's power moves are completed for closure state
  const todayPowerMoves = myPowerMoves.filter((pm) => {
    const { target } = getTargetActualForPeriod(pm, "today")
    return target > 0
  })
  const todayCompletedCount = todayPowerMoves.filter((pm) => {
    const { actual, target } = getTargetActualForPeriod(pm, "today")
    return actual >= target
  }).length
  const isTodayComplete = todayCompletedCount === todayPowerMoves.length && todayPowerMoves.length > 0

  // Status logic for scoreboard
  const getStatus = () => {
    if (executionPercentage >= 70) return { color: '#16A34A', bg: 'bg-emerald-100', text: 'text-emerald-800', badge: 'WINNING', borderAccent: 'border-emerald-500' }
    if (executionPercentage >= 50) return { color: '#F59E0B', bg: 'bg-amber-100', text: 'text-amber-800', badge: 'AT RISK', borderAccent: 'border-amber-500' }
    return { color: '#DC2626', bg: 'bg-rose-100', text: 'text-rose-800', badge: 'BEHIND', borderAccent: 'border-rose-500' }
  }
  const status = getStatus()

  // Mock victory targets linked to user's power moves
  const linkedVictoryTargets = myVictoryTargets.slice(0, 2).map((vt) => {
    const progress = vt.target ? Math.round((vt.achieved / vt.target) * 100) : 0
    return {
      id: vt.id,
      title: vt.title,
      progress,
      brand: vt.brandId || "",
    }
  })

  if (isLoadingData || isUserLoading || isTrackingLoading) {
    return (
      <div className="flex items-center justify-center min-h-[420px]">
        <p className="text-sm text-stone-500">Loading dashboard data...</p>
      </div>
    )
  }

  return (
    <section className='px-4 sm:px-6 lg:px-8 pb-8 space-y-6' aria-labelledby='personal-dashboard-heading'>
      {/* HERO CARD - Department-style scoreboard with individual identity */}
      <Card className='shadow-sm border border-stone-200 rounded-lg overflow-hidden'>
        {/* SCOREBOARD HEADER - Individual Identity with Photo */}
        <div className='px-6 py-5 bg-stone-50 border-b border-stone-200'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              {/* Individual Photo - Key differentiator from department */}
              <div className='relative flex-shrink-0'>
                <div className='h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-muted'>
                  <Image
                    src={displayAvatar || '/placeholder.svg'}
                    alt={displayName}
                    width={64}
                    height={64}
                    className='h-full w-full object-cover'
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement?.classList.add('flex', 'items-center', 'justify-center')
                    }}
                  />
                </div>
                <div className='absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-black rounded-full h-6 w-6 flex items-center justify-center shadow-sm border border-white'>
                  {displayStreak}
                </div>
              </div>
              <div>
                <h2 className='text-3xl font-black text-stone-900 tracking-tight'>{displayName}</h2>
                <p className='text-sm font-semibold text-stone-600 mt-1'>
                  {displayRole} · {displayBrands} Brands
                </p>
              </div>
            </div>
            {/* Time period selector */}
            <div className='flex items-center gap-3'>
              <Select value={selectedPeriod} onValueChange={(v) => setSelectedPeriod(v as TimePeriod)}>
                <SelectTrigger className='w-36 bg-white'>
                  <Calendar className='h-4 w-4 mr-2 text-muted-foreground' />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='today'>Today</SelectItem>
                  <SelectItem value='this-week'>This Week</SelectItem>
                  <SelectItem value='this-month'>This Month</SelectItem>
                  <SelectItem value='this-quarter'>This Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* MAIN SCOREBOARD - Three Columns with Enhanced Flow */}
        <div className='relative hidden lg:flex lg:items-stretch lg:gap-0 p-6 bg-stone-50'>
          {/* Step 1 Badge */}
          <div className='absolute left-20 top-2 z-10 bg-amber-400 text-amber-900 font-black px-3 py-1 rounded-full text-xs'>STEP 1</div>

          {/* LEFT: DAILY POWER MOVES - Amber Theme */}
          <div className={cn(
            'flex flex-col items-center justify-center text-center flex-1 min-h-[300px] bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-t-4 border-b-4 border-amber-400 border-r-2 border-r-amber-200 rounded-l-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300',
            status.borderAccent
          )}>
            <div className='space-y-3 w-full'>
              <p className='text-base font-black uppercase tracking-[0.15em] text-amber-900'>
                {selectedPeriod === 'today' ? 'Daily' : selectedPeriod === 'this-week' ? 'Weekly' : selectedPeriod === 'this-month' ? 'Monthly' : 'Quarterly'} Power Moves
              </p>
              <div className='h-0.5 w-10 bg-amber-300 mx-auto rounded-full'></div>
              <p className='text-xs font-semibold text-amber-700 mt-1'>Your personal execution score (Lead Measures)</p>
              
              {/* GIANT SCORE */}
              <div className='py-5'>
                <div 
                  className='text-8xl font-black tabular-nums leading-none'
                  style={{ color: status.color }}
                >
                  {executionPercentage}
                </div>
                <div className='text-xl font-bold text-amber-400 mt-3'>/100</div>
              </div>

              {/* Status Badge */}
              <div className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-md text-sm font-black',
                status.bg,
                status.text
              )}>
                <span>{status.badge}</span>
              </div>

              {/* Power Moves Detail */}
              <div className='mt-5 pt-5 border-t-2 border-amber-200 space-y-2'>
                <p className='text-3xl font-black text-amber-900 tabular-nums'>
                  {periodData.completed} <span className='text-amber-300'>/</span> {periodData.total}
                </p>
                <p className='text-xs font-bold text-amber-700 uppercase tracking-wider'>Power Move Actions Complete</p>
                {selectedPeriod === 'today' && periodData.total - periodData.completed > 0 && (
                  <p className='text-xs text-amber-600 mt-2 font-semibold'>
                    {periodData.total - periodData.completed} remaining today
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Flow Indicator 1 */}
          <div className='flex flex-col items-center justify-center px-6 bg-stone-50 relative'>
            <div className='absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-stone-300 to-blue-300'></div>
            <div className='relative z-10 flex flex-col items-center gap-2'>
              <ArrowRight className='h-8 w-8 text-amber-500 font-bold' aria-hidden="true" />
              <span className='text-xs font-black text-amber-700 whitespace-nowrap'>DRIVES</span>
            </div>
          </div>

          {/* Step 2 Badge */}
          <div className='absolute left-1/2 -translate-x-1/2 top-2 z-10 bg-blue-400 text-blue-900 font-black px-3 py-1 rounded-full text-xs'>STEP 2</div>

          {/* MIDDLE: LINKED VICTORY TARGETS - Blue Theme */}
          <div className='flex flex-col items-center justify-center text-center flex-1 min-h-[300px] bg-gradient-to-br from-blue-50 to-cyan-50 border-l-2 border-l-blue-200 border-t-4 border-b-4 border-blue-400 border-r-2 border-r-blue-200 p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='space-y-3 w-full'>
              <div className='space-y-1'>
                <p className='text-base font-black uppercase tracking-[0.15em] text-blue-900'>Linked Victory Targets</p>
                <div className='h-0.5 w-10 bg-blue-300 mx-auto rounded-full'></div>
              </div>
              <p className='text-xs font-semibold text-blue-700 mt-1'>Results your Power Moves contribute to (Lag Measures)</p>

              {/* Victory Target Cards */}
              <div className='space-y-2 flex-1 min-h-[80px]'>
                {linkedVictoryTargets.length === 0 ? (
                  <div className='border border-dashed border-blue-300 rounded-lg p-4 text-center text-sm text-blue-600'>
                    No linked targets yet.
                  </div>
                ) : (
                  linkedVictoryTargets.map((vt, index) => {
                    const progress = vt.progress
                    const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                    const vtStatusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
                    const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                    return (
                      <div key={vt.id} className='bg-blue-100 border border-blue-300 rounded-lg p-2 text-left hover:bg-blue-200 hover:shadow-md transition-all duration-200'>
                        <div className='flex items-start justify-between gap-2 mb-1'>
                          <p className='text-xs font-bold text-blue-900 flex-1'>{vt.title}</p>
                          <span className={cn('text-xs font-black px-2 py-0.5 rounded-full text-white', vtStatusBg)}>
                            {vtStatusLabel}
                          </span>
                        </div>
                        <div className='h-1.5 rounded-full overflow-hidden bg-blue-200'>
                          <div 
                            className='h-full transition-all duration-500' 
                            style={{ 
                              width: `${Math.min(progress, 100)}%`,
                              backgroundColor: vtStatusColor
                            }}
                          />
                        </div>
                        <p className='text-xs text-blue-700 mt-1 font-semibold'>{progress}% complete</p>
                      </div>
                    )
                  })
                )}
              </div>

              {/* Summary */}
              <div className='mt-3 pt-3 border-t border-blue-200'>
                <p className='text-xs text-blue-600 italic'>Your execution contributes to victory targets.</p>
              </div>
            </div>
          </div>

          {/* Flow Indicator 2 */}
          <div className='flex flex-col items-center justify-center px-6 bg-stone-50 relative'>
            <div className='absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-stone-300 to-purple-300'></div>
            <div className='relative z-10 flex flex-col items-center gap-2'>
              <ArrowRight className='h-8 w-8 text-blue-500 font-bold' aria-hidden="true" />
              <span className='text-xs font-black text-blue-700 whitespace-nowrap'>ACHIEVES</span>
            </div>
          </div>

          {/* Step 3 Badge */}
          <div className='absolute right-20 top-2 z-10 bg-purple-400 text-purple-900 font-black px-3 py-1 rounded-full text-xs'>STEP 3</div>

          {/* RIGHT: PERSONAL WAR GOAL - Purple Theme */}
          <div className='flex flex-col items-center justify-center text-center flex-1 min-h-[300px] bg-gradient-to-br from-purple-50 to-violet-50 border-l-2 border-l-purple-200 border-t-4 border-b-4 border-purple-400 border-r-4 border-r-purple-400 rounded-r-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='space-y-3 w-full'>
              <div className='space-y-1'>
                <p className='text-base font-black uppercase tracking-[0.15em] text-purple-900'>Personal War Goal</p>
                <div className='h-0.5 w-10 bg-purple-300 mx-auto rounded-full'></div>
              </div>
              <p className='text-xs font-semibold text-purple-700 mt-1'>Your strategic personal outcome (Lag Measure)</p>

              {/* Personal Goal Display */}
              <div className='py-5'>
                {myVictoryTargets.length > 0 ? (
                  <>
                    <div className='text-lg font-bold text-purple-900 mb-4 leading-snug'>
                      {myVictoryTargets[0]?.title || 'No goal set'}
                    </div>
                    <div className='flex items-baseline justify-center gap-1 mb-3'>
                      <div className='text-5xl font-black text-purple-900 tabular-nums'>
                        {myVictoryTargets[0]?.achieved || 0}
                      </div>
                      <div className='text-lg font-bold text-purple-400'>/ {myVictoryTargets[0]?.target || 0}</div>
                    </div>
                    {/* Goal Progress */}
                    <div className='mb-3'>
                      {myVictoryTargets[0] && (() => {
                        const progress = myVictoryTargets[0].target ? Math.round((myVictoryTargets[0].achieved / myVictoryTargets[0].target) * 100) : 0
                        const goalStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                        const goalStatusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
                        const goalStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'
                        
                        return (
                          <>
                            <div className='h-2 rounded-full overflow-hidden bg-purple-200 mb-2'>
                              <div 
                                className='h-full transition-all duration-500' 
                                style={{ 
                                  width: `${Math.min(progress, 100)}%`,
                                  backgroundColor: goalStatusColor
                                }}
                              />
                            </div>
                            <div className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black', goalStatusBg)}>
                              <span>{goalStatusLabel}</span>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  </>
                ) : (
                  <div className='text-center py-6'>
                    <p className='text-sm text-purple-600 font-semibold'>No personal goal configured yet</p>
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className='mt-3 pt-3 border-t border-purple-200'>
                <p className='text-xs text-purple-600 italic'>Your personal strategic outcome.</p>
              </div>
            </div>
          </div>
        
        {/* MOBILE SCOREBOARD - Three Stacked Cards */}
        <div className='lg:hidden space-y-4 p-6 bg-stone-50'>
          {/* Step 1 Badge */}
          <div className='flex justify-center mb-2'>
            <span className='bg-amber-400 text-amber-900 font-black px-3 py-1 rounded-full text-xs'>STEP 1: Lead Measures</span>
          </div>

          {/* Card 1 - Amber Theme */}
          <div className={cn(
            'flex flex-col items-center justify-center text-center bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-t-4 border-b-4 border-amber-400 border-r-2 border-r-amber-200 rounded-lg p-7 shadow-md hover:shadow-lg transition-shadow duration-300',
            status.borderAccent
          )}>
            <div className='space-y-3 w-full'>
              <p className='text-base font-black uppercase tracking-[0.15em] text-amber-900'>
                {selectedPeriod === 'today' ? 'Daily' : selectedPeriod === 'this-week' ? 'Weekly' : selectedPeriod === 'this-month' ? 'Monthly' : 'Quarterly'} Power Moves
              </p>
              <div className='h-0.5 w-10 bg-amber-300 mx-auto rounded-full'></div>
              <p className='text-xs font-semibold text-amber-700'>Your personal execution score (Lead Measures)</p>
              <div className='py-5'>
                <div 
                  className='text-8xl font-black tabular-nums leading-none'
                  style={{ color: status.color }}
                >
                  {executionPercentage}
                </div>
                <div className='text-xl font-bold text-amber-400 mt-3'>/100</div>
              </div>
              <div className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg shadow-md text-sm font-black',
                status.bg,
                status.text
              )}>
                <span>{status.badge}</span>
              </div>
              <div className='mt-5 pt-5 border-t-2 border-amber-200 space-y-2'>
                <p className='text-3xl font-black text-amber-900 tabular-nums'>
                  {periodData.completed} <span className='text-amber-300'>/</span> {periodData.total}
                </p>
                <p className='text-xs font-bold text-amber-700 mt-1 uppercase tracking-wider'>Power Moves Complete</p>
              </div>
            </div>
          </div>

          {/* Flow Indicator */}
          <div className='flex flex-col items-center gap-2 py-2'>
            <ArrowDown className='h-6 w-6 text-amber-500 font-bold' aria-hidden="true" />
            <span className='text-xs font-black text-amber-700'>DRIVES</span>
          </div>

          {/* Step 2 Badge */}
          <div className='flex justify-center mb-2'>
            <span className='bg-blue-400 text-blue-900 font-black px-3 py-1 rounded-full text-xs'>STEP 2: Lag Measures</span>
          </div>

          {/* Card 2 - Blue Theme */}
          <div className='bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-t-4 border-b-4 border-blue-400 border-r-2 border-r-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='space-y-3'>
              <p className='text-base font-black uppercase tracking-[0.15em] text-blue-900'>Linked Victory Targets</p>
              <div className='h-0.5 w-10 bg-blue-300 mx-auto rounded-full'></div>
              <p className='text-xs font-semibold text-blue-700 mt-1'>Results your Power Moves contribute to (Lag Measures)</p>
              <div className='space-y-2'>
                {linkedVictoryTargets.length === 0 ? (
                  <div className='border border-dashed border-blue-300 rounded-lg p-4 text-center text-sm text-blue-600'>
                    No linked targets yet.
                  </div>
                ) : (
                  linkedVictoryTargets.map((vt) => {
                    const progress = vt.progress
                    const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                    const vtStatusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
                    const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                    return (
                      <div key={vt.id} className='bg-blue-100 border border-blue-300 rounded-lg p-3 text-left hover:bg-blue-200 hover:shadow-md transition-all duration-200'>
                        <div className='flex items-start justify-between gap-2 mb-2'>
                          <p className='text-xs font-bold text-blue-900 flex-1'>{vt.title}</p>
                          <span className={cn('text-xs font-black px-2 py-0.5 rounded-full text-white', vtStatusBg)}>
                            {vtStatusLabel}
                          </span>
                        </div>
                        <div className='h-1.5 rounded-full overflow-hidden bg-blue-200'>
                          <div 
                            className='h-full transition-all duration-500' 
                            style={{ 
                              width: `${Math.min(progress, 100)}%`,
                              backgroundColor: vtStatusColor
                            }}
                          />
                        </div>
                        <p className='text-xs text-blue-700 mt-1 font-semibold'>{progress}% complete</p>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>

          {/* Flow Indicator */}
          <div className='flex flex-col items-center gap-2 py-2'>
            <ArrowDown className='h-6 w-6 text-blue-500 font-bold' aria-hidden="true" />
            <span className='text-xs font-black text-blue-700'>ACHIEVES</span>
          </div>

          {/* Step 3 Badge */}
          <div className='flex justify-center mb-2'>
            <span className='bg-purple-400 text-purple-900 font-black px-3 py-1 rounded-full text-xs'>STEP 3: Personal Goal</span>
          </div>

          {/* Card 3 - Purple Theme */}
          <div className='bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-t-4 border-b-4 border-purple-400 border-r-2 border-r-purple-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='space-y-3 text-center'>
              <p className='text-base font-black uppercase tracking-[0.15em] text-purple-900'>Personal War Goal</p>
              <div className='h-0.5 w-10 bg-purple-300 mx-auto rounded-full'></div>
              <p className='text-xs font-semibold text-purple-700'>Your strategic personal outcome (Lag Measure)</p>
              
              {myVictoryTargets.length > 0 ? (
                <>
                  <div className='text-lg font-bold text-purple-900 mb-4 leading-snug'>
                    {myVictoryTargets[0]?.title || 'No goal set'}
                  </div>
                  <div className='flex items-baseline justify-center gap-1 mb-3'>
                    <div className='text-5xl font-black text-purple-900 tabular-nums'>
                      {myVictoryTargets[0]?.achieved || 0}
                    </div>
                    <div className='text-lg font-bold text-purple-400'>/ {myVictoryTargets[0]?.target || 0}</div>
                  </div>
                  {myVictoryTargets[0] && (() => {
                    const progress = myVictoryTargets[0].target ? Math.round((myVictoryTargets[0].achieved / myVictoryTargets[0].target) * 100) : 0
                    const goalStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                    const goalStatusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
                    const goalStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'
                    
                    return (
                      <div className='mb-3'>
                        <div className='h-2 rounded-full overflow-hidden bg-purple-200 mb-2'>
                          <div 
                            className='h-full transition-all duration-500' 
                            style={{ 
                              width: `${Math.min(progress, 100)}%`,
                              backgroundColor: goalStatusColor
                            }}
                          />
                        </div>
                        <div className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black', goalStatusBg)}>
                          <span>{goalStatusLabel}</span>
                        </div>
                      </div>
                    )
                  })()}
                </>
              ) : (
                <div className='text-center py-6'>
                  <p className='text-sm text-purple-600 font-semibold'>No personal goal configured yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Company Goal Context - Moved below scoreboard */}
      <div className='text-xs font-semibold text-stone-500 px-2'>
        <span className='font-semibold text-stone-600'>Company Goal (Context):</span> Not set yet
        <span className='text-stone-400 mx-2'>·</span> Your execution feeds your department's weekly score
      </div>

      {/* Section Legend - Same as Department */}
      <div className='grid grid-cols-3 gap-4 text-xs text-stone-500'>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#16A34A' }} />
          <div>
            <p className='font-semibold text-stone-700'>Power Moves</p>
            <p className='text-stone-500'>Recurring actions executed daily, weekly, or monthly</p>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#F59E0B' }} />
          <div>
            <p className='font-semibold text-stone-700'>Tasks</p>
            <p className='text-stone-500'>One-time activities completed once per period</p>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#DC2626' }} />
          <div>
            <p className='font-semibold text-stone-700'>Commitments</p>
            <p className='text-stone-500'>Team promises mentioned in weekly calls</p>
          </div>
        </div>
      </div>
      <div className='text-xs font-semibold text-stone-500 px-2'>
        <span className='font-semibold text-stone-600'>Company Goal (Context):</span> Not set yet
        <span className='text-stone-400 mx-2'>·</span> Your execution feeds your department's weekly score
      </div>

      {/* Section Legend - Same as Department */}
      <div className='grid grid-cols-3 gap-4 text-xs text-stone-500'>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#16A34A' }} />
          <div>
            <p className='font-semibold text-stone-700'>Power Moves</p>
            <p className='text-stone-500'>Recurring actions executed daily, weekly, or monthly</p>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#F59E0B' }} />
          <div>
            <p className='font-semibold text-stone-700'>Tasks</p>
            <p className='text-stone-500'>One-time activities completed once per period</p>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <div className='w-2 h-2 rounded-full mt-1' style={{ backgroundColor: '#DC2626' }} />
          <div>
            <p className='font-semibold text-stone-700'>Commitments</p>
            <p className='text-stone-500'>Team promises mentioned in weekly calls</p>
          </div>
        </div>
      </div>

      {/* Period Progress Divider */}
      <div className='py-4 px-6 bg-stone-50 border-t-2 border-b border-stone-200 rounded-lg'>
        <div className='flex items-center justify-between'>
          <p className='text-xs font-black uppercase tracking-[0.2em] text-stone-600'>
            {selectedPeriod === 'today' ? "Today's" : selectedPeriod === 'this-week' ? 'This Week\'s' : selectedPeriod === 'this-month' ? 'This Month\'s' : 'This Quarter\'s'} Execution
          </p>
          <p className='text-xs font-semibold text-stone-500'>
            {periodData.completed} of {periodData.total} power move actions · {periodData.total - periodData.completed} remaining
          </p>
        </div>
      </div>

      {/* Power Moves Section - Department Style */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#16A34A' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Power Moves (Lead Measures)</p>
            <span className='text-xs font-semibold text-stone-500'>Recurring Actions_test</span>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-stone-200 bg-stone-50'>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Power Move</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Priority</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Cadence</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>Progress</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>Action</th>
              </tr>
            </thead>
            <tbody>
              {myPowerMoves.length === 0 ? (
                <tr>
                  <td colSpan={6} className='px-6 py-8 text-center text-sm text-stone-500'>
                    No power moves yet for this period.
                  </td>
                </tr>
              ) : (
                myPowerMoves.map((pm, index) => {
                  const isPrimary = index < 2
                  const { target, actual } = getTargetActualForPeriod(pm, selectedPeriod)
                  const percentage = target > 0 ? Math.round((actual / target) * 100) : 0
                  const executionStatus = percentage >= 100 ? 'Completed' : percentage > 0 ? 'In Progress' : 'Not Started'
                  const cycleCount = Math.max(0, Math.floor(target || 0))
                  const visibleCycles = Math.min(cycleCount, 30)
                  const overflowCycles = Math.max(0, cycleCount - visibleCycles)
                  const completedCycles = Math.min(Math.max(0, actual || 0), cycleCount)

                  return (
                    <tr key={pm.id} className='border-b border-stone-200 hover:bg-stone-50'>
                      <td className='px-6 py-4'>
                        <p className='text-sm font-bold text-stone-900'>{pm.name}</p>
                        <p className='text-xs text-stone-500 mt-0.5'>{pm.brand}</p>
                      </td>
                      <td className='px-6 py-4'>
                        <span className={cn(
                          'inline-flex text-xs font-bold px-2 py-1 rounded',
                          isPrimary 
                            ? 'bg-amber-50 text-amber-700' 
                            : 'text-stone-500'
                        )}>
                          {isPrimary ? 'Primary' : 'Supporting'}
                        </span>
                      </td>
                      <td className='px-6 py-4 text-xs font-semibold text-stone-600'>
                        {pm.frequency}
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center gap-3'>
                          <div className='flex-1 max-w-xs'>
                            <div className='flex flex-wrap items-center gap-1 text-stone-400'>
                              {cycleCount === 0 ? (
                                <span className='text-xs text-stone-400'>—</span>
                              ) : (
                                <>
                                  {Array.from({ length: visibleCycles }).map((_, idx) => (
                                    <span
                                      key={idx}
                                      className={cn(
                                        'text-base leading-none font-black',
                                        idx < completedCycles ? 'text-emerald-600' : 'text-stone-500'
                                      )}
                                    >
                                      -
                                    </span>
                                  ))}
                                  {overflowCycles > 0 && (
                                    <span className='text-xs text-stone-500'>+{overflowCycles}</span>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                          <span className='text-xs font-bold text-stone-600 w-12 text-right'>
                            {actual}/{target}
                          </span>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-center'>
                        <span className={cn(
                          'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold',
                          executionStatus === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                          executionStatus === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                          'bg-stone-200 text-stone-700'
                        )}>
                          {executionStatus}
                        </span>
                      </td>
                      <td className='px-6 py-4 text-center'>
                        <Button
                          size='sm'
                          disabled={actual >= target}
                          onClick={() => handleCompletePowerMove(pm.id)}
                          className={cn(
                            'text-xs font-bold',
                            actual >= target
                              ? 'bg-stone-200 text-stone-500 cursor-not-allowed'
                              : 'bg-[#16A34A] hover:bg-[#15803d] text-white'
                          )}
                        >
                          {actual >= target ? 'Done' : 'Complete'}
                        </Button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tasks Section - Department Style */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#F59E0B' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Tasks</p>
            <span className='text-xs font-semibold text-stone-500'>One-Time Activities</span>
          </div>
        </div>

        <div className='divide-y divide-stone-200'>
          {tasks.length === 0 ? (
            <p className='px-6 py-4 text-sm text-stone-500'>No tasks for this period</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className='px-6 py-4 flex items-center gap-4 hover:bg-stone-50'>
                <Checkbox 
                  checked={task.completed} 
                  onCheckedChange={() => toggleTask(task.id)} 
                  className='h-5 w-5' 
                />
                <div className='flex-1'>
                  <p className={cn('text-sm font-bold text-stone-900', task.completed && 'line-through text-stone-400')}>
                    {task.title}
                  </p>
                </div>
                <Badge variant='outline' className='text-xs font-semibold'>
                  {task.brand}
                </Badge>
                <span className={cn(
                  'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold',
                  task.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-200 text-stone-700'
                )}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Commitments Section - Department Style */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#DC2626' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Commitments</p>
            <span className='text-xs font-semibold text-stone-500'>Team Promises</span>
          </div>
        </div>

        <div className='divide-y divide-stone-200'>
          {commitments.length === 0 ? (
            <p className='px-6 py-4 text-sm text-stone-500'>No commitments for this period</p>
          ) : (
            commitments.map((commitment) => (
              <div key={commitment.id} className='px-6 py-4 flex items-center gap-4 hover:bg-stone-50'>
                <Checkbox 
                  checked={commitment.completed} 
                  onCheckedChange={() => toggleCommitment(commitment.id)} 
                  className='h-5 w-5' 
                />
                <div className='flex-1'>
                  <p className={cn('text-sm font-bold text-stone-900', commitment.completed && 'line-through text-stone-400')}>
                    {commitment.title}
                  </p>
                </div>
                <Badge variant='outline' className='text-xs font-semibold'>
                  {commitment.brand}
                </Badge>
                <span className={cn(
                  'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold',
                  commitment.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-200 text-stone-700'
                )}>
                  {commitment.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
