'use client'

import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useBrand } from '@/lib/brand-context'
import type { VictoryTarget, PowerMove, Task, Commitment } from '@/components/department-page'
import { calculateDepartmentScore } from '@/lib/score-calculations'
import { TimePeriodSelector } from '@/components/time-period-selector'
import { ExecutionStreak } from '@/components/execution-streak'
import { QuarterSelector, type QuarterOption } from '@/components/quarter-selector'
import { AccountabilitySections } from '@/components/accountability-sections'
import { Flame, Target, CheckCircle2, AlertCircle, XCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DepartmentExecutionHeroProps {
  departmentName: string
  victoryTargets: VictoryTarget[]
  powerMoves: PowerMove[]
  calculatedScore?: ReturnType<typeof calculateDepartmentScore>
  selectedPeriod: string
  onPeriodChange: (period: string) => void
  currentWeekStart: Date
  onNavigate: (direction: 'prev' | 'next') => void
  onWeeklyReview: () => void
  onAddPowerMove?: () => void
  onAddTask?: () => void
  onAddCommitment?: () => void
  selectedQuarter: QuarterOption
  onQuarterChange: (quarter: QuarterOption) => void
  coreObjective?: {
    title: string
    description: string
  }
}

export function DepartmentExecutionHero({
  departmentName,
  victoryTargets,
  powerMoves,
  calculatedScore,
  selectedPeriod,
  onPeriodChange,
  currentWeekStart,
  onNavigate,
  onWeeklyReview,
  onAddPowerMove,
  onAddTask,
  onAddCommitment,
  selectedQuarter,
  onQuarterChange,
  coreObjective,
}: DepartmentExecutionHeroProps) {
  const { brandConfig, isReady } = useBrand()
  const [showStreak, setShowStreak] = useState(false)

  const companyWIG = brandConfig?.companyWIG

  const score = useMemo(() => {
    if (calculatedScore) return calculatedScore
    return calculateDepartmentScore(victoryTargets, powerMoves)
  }, [calculatedScore, victoryTargets, powerMoves])

  const powerMoveStats = useMemo(() => {
    const completed = powerMoves.filter((pm) => pm.progress >= pm.targetPerCycle).length
    const total = powerMoves.length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
    return { completed, total, percentage }
  }, [powerMoves])

  const currentStreak = powerMoveStats.percentage >= 70 ? 4 : 0
  const bestStreak = 6
  const weeklyHistory = [45, 52, 68, 72, 78, 85, 72, powerMoveStats.percentage]

  const getQuarterlyTargetData = () => {
    if (selectedQuarter === 'annual') {
      return {
        target: victoryTargets.reduce((sum, vt) => sum + vt.target, 0),
        achieved: victoryTargets.reduce((sum, vt) => sum + vt.achieved, 0),
        greenCount: score.greenCount,
        totalTargets: score.totalTargets,
      }
    }

    const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
    let totalTarget = 0
    let totalAchieved = 0
    let greenCount = 0

    victoryTargets.forEach((vt) => {
      const quarters = (vt as any).quarters || []
      const quarterData = quarters[quarterIndex]
      if (quarterData) {
        totalTarget += quarterData.target
        totalAchieved += quarterData.achieved
        const progress = quarterData.target > 0 ? (quarterData.achieved / quarterData.target) * 100 : 0
        if (progress >= 70) greenCount++
      } else {
        totalTarget += Math.round(vt.target / 4)
        totalAchieved += Math.round(vt.achieved / 4)
        const progress = vt.target > 0 ? (vt.achieved / vt.target) * 100 : 0
        if (progress >= 70) greenCount++
      }
    })

    return {
      target: totalTarget,
      achieved: totalAchieved,
      greenCount,
      totalTargets: victoryTargets.length,
    }
  }

  const quarterData = getQuarterlyTargetData()
  const greenTargets = quarterData.greenCount
  const totalTargets = quarterData.totalTargets

  const getExecutionStatus = (): 'winning' | 'at-risk' | 'losing' => {
    if (powerMoveStats.total === 0) return 'losing'
    if (powerMoveStats.percentage >= 70) return 'winning'
    if (powerMoveStats.percentage >= 50) return 'at-risk'
    return 'losing'
  }

  const executionStatus = getExecutionStatus()

  const getExecutionSentence = () => {
    if (powerMoveStats.percentage >= 70) return 'Execution is on track'
    if (powerMoveStats.percentage >= 50) return 'Execution needs attention'
    return 'Execution is inconsistent'
  }

  // Global status colors - consistent across all departments
  const statusColors = {
    winning: {
      color: '#16A34A', // emerald-600
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      badge: 'WINNING',
      message: 'Weekly execution is strong',
      borderAccent: 'border-t-[#16A34A]',
      icon: CheckCircle2,
    },
    'at-risk': {
      color: '#F59E0B', // amber-500
      bg: 'bg-[#F59E0B]',
      text: 'text-white',
      badge: 'CAUTION',
      message: 'Weekly pace needs improvement',
      borderAccent: 'border-t-[#F59E0B]',
      icon: AlertCircle,
    },
    losing: {
      color: '#DC2626', // red-600
      bg: 'bg-[#DC2626]',
      text: 'text-white',
      badge: 'TRENDING AT RISK',
      message: 'At current weekly pace, long-term victory targets are trending at risk',
      borderAccent: 'border-t-[#DC2626]',
      icon: XCircle,
    },
  }

  const status = statusColors[executionStatus]
  const StatusIcon = status.icon

  if (!isReady || !companyWIG || !score) {
    return (
      <Card className='shadow-sm'>
        {/* TOP: HERO SECTION - Department Title + Weekly Power Moves Score (PROMOTED) */}
        <div className='relative overflow-hidden'>
          {/* Department Header - NOW AT TOP for hero prominence */}
          <div className='px-6 py-5 bg-stone-50 border-b border-stone-200'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-3xl font-black text-stone-900 tracking-tight'>{departmentName}</h2>
                {coreObjective && (
                  <p className='text-sm font-semibold text-stone-600 mt-1'>{coreObjective.title}</p>
                )}
              </div>
            </div>
          </div>

          {/* MAIN SCOREBOARD - Weekly Power Moves + Victory Targets + War Goal */}
          <div className='relative grid grid-cols-3 gap-3 w-full'>
            {/* Arrow 1 - Between Power Moves and Victory Targets */}
            <div className='absolute top-1/2 -translate-y-1/2 pointer-events-none z-20' style={{ left: 'calc(33.33% - 10px)' }}>
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.6 }} />
            </div>

            {/* Arrow 2 - Between Victory Targets and War Goal */}
            <div className='absolute top-1/2 -translate-y-1/2 pointer-events-none z-20' style={{ left: 'calc(66.67% - 10px)' }}>
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.6 }} />
            </div>

            {/* LEFT: WEEKLY POWER MOVES - Loading State */}
            <div className={cn(
              'p-6 flex flex-col items-center justify-center text-center min-h-[280px] bg-[#F8FAFC] border-t-2 rounded-lg',
              status.borderAccent
            )}>
              <div className='space-y-3 w-full animate-pulse'>
                <div className='h-4 bg-stone-300 rounded w-3/4 mx-auto'></div>
                <div className='h-3 bg-stone-200 rounded w-1/2 mx-auto'></div>
                <div className='py-3'>
                  <div className='h-20 bg-stone-300 rounded w-1/2 mx-auto mb-1'></div>
                  <div className='h-6 bg-stone-200 rounded w-1/4 mx-auto'></div>
                </div>
                <div className='h-10 bg-stone-200 rounded w-1/3 mx-auto'></div>
                <div className='mt-3 pt-3 border-t-2 border-stone-200 space-y-2'>
                  <div className='h-6 bg-stone-300 rounded w-1/2 mx-auto'></div>
                  <div className='h-3 bg-stone-200 rounded w-1/3 mx-auto'></div>
                  <div className='h-3 bg-stone-200 rounded w-3/4 mx-auto'></div>
                </div>
              </div>
            </div>

            {/* MIDDLE: DEPARTMENT VICTORY TARGETS - Loading State */}
            <div className='p-6 min-h-[280px] flex flex-col justify-center bg-white rounded-lg border border-stone-200'>
              <div className='space-y-3 w-full animate-pulse'>
                <div className='h-4 bg-stone-300 rounded w-3/4 mx-auto'></div>
                <div className='space-y-2'>
                  <div className='h-3 bg-stone-200 rounded w-full'></div>
                  <div className='h-6 bg-stone-300 rounded w-1/2'></div>
                  <div className='h-2 bg-stone-200 rounded w-full'></div>
                </div>
              </div>
            </div>

            {/* RIGHT: WAR GOAL - Loading State */}
            <div className='p-6 min-h-[280px] flex flex-col justify-between bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg border border-stone-700 shadow-lg'>
              <div className='space-y-2 animate-pulse'>
                <div className='h-3 bg-stone-700 rounded w-1/3'></div>
                <div className='h-6 bg-stone-700 rounded w-1/2 mt-1'></div>
                <div className='h-3 bg-stone-700 rounded w-2/3 mt-2'></div>
              </div>

              <div className='space-y-2 animate-pulse'>
                <div className='flex items-baseline justify-between'>
                  <div className='h-8 bg-stone-700 rounded w-1/3'></div>
                  <div className='h-3 bg-stone-700 rounded w-1/6'></div>
                </div>
                <div className='w-full bg-stone-700 rounded-full h-2.5'></div>
                <div className='h-3 bg-stone-700 rounded w-1/2'></div>
              </div>
            </div>
          </div>
        </div>

        {/* WEEK SELECTOR - MOVED BELOW HERO (NOW SECONDARY) */}
                  <p className='text-2xl font-black text-stone-900 tabular-nums'>
                    {powerMoveStats.completed} <span className='text-stone-400'>/</span> {powerMoveStats.total}
                  </p>
                  <p className='text-xs font-bold text-stone-500 mt-1 uppercase'>Power Moves Complete</p>
                  <p className='text-xs text-stone-400 mt-2 italic font-medium'>
                    Execution contributes to targets
                  </p>
                </div>
              </div>
            </div>

            {/* MIDDLE: DEPARTMENT VICTORY TARGETS */}
            <div className='p-6 min-h-[280px] flex flex-col justify-center bg-white rounded-lg border border-stone-200'>
              <div className='space-y-3 w-full'>
                <p className='text-sm font-black uppercase tracking-[0.15em] text-stone-900 text-center'>Department Victory</p>
                
                {victoryTargets && victoryTargets.length > 0 ? (
                  victoryTargets.slice(0, 1).map((vt) => {
                    const quarters = (vt as any).quarters || []
                    const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
                    const quarterData = quarterIndex >= 0 ? quarters[quarterIndex] : null
                    const achieved = quarterData?.achieved ?? vt.achieved
                    const target = quarterData?.target ?? vt.target
                    const progress = target > 0 ? (achieved / target) * 100 : 0
                    
                    const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                    const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                    return (
                      <div key={vt.id} className='space-y-2'>
                        <div className='flex items-center justify-between gap-2'>
                          <span className='text-xs font-bold text-stone-700'>{vt.name}</span>
                          <span className='text-xs font-bold text-white px-2 py-1 rounded' style={{ backgroundColor: vtStatusColor }}>
                            {vtStatusLabel}
                          </span>
                        </div>
                        <div className='flex items-baseline gap-1'>
                          <p className='text-2xl font-black text-stone-900'>{achieved}</p>
                          <p className='text-sm text-stone-400'>/</p>
                          <p className='text-lg font-bold text-stone-600'>{target}</p>
                        </div>
                        <div className='w-full bg-stone-200 rounded-full h-2'>
                          <div className='h-full rounded-full transition-all' style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: vtStatusColor }} />
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className='text-center py-4 text-stone-400 text-xs'>No targets available</div>
                )}
              </div>
            </div>

            {/* RIGHT: WAR GOAL */}
            <div className='p-6 min-h-[280px] flex flex-col justify-between bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg border border-stone-700 shadow-lg'>
              <div>
                <p className='text-xs font-black uppercase tracking-[0.2em] text-stone-400'>War Goal</p>
                <p className='text-lg font-black text-white mt-1 leading-tight'>Q1 2026</p>
                <p className='text-xs text-stone-300 mt-2 font-medium'>Onboard 50 Clients<br />Across All Departments</p>
              </div>

              <div className='space-y-2'>
                <div className='flex items-baseline justify-between'>
                  <p className='text-3xl font-black text-white'>18</p>
                  <p className='text-xs text-stone-400'>/50</p>
                </div>
                <div className='w-full bg-stone-700 rounded-full h-2.5'>
                  <div className='h-full rounded-full bg-amber-400 transition-all' style={{ width: '36%' }} />
                </div>
                <p className='text-xs text-stone-300 font-semibold'>36% Toward Goal</p>
              </div>
            </div>
          </div>
        </div>

        {/* WEEK SELECTOR - MOVED BELOW HERO (NOW SECONDARY) */}
        <div className='px-6 py-4 border-b border-stone-200 bg-white'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <TimePeriodSelector 
                selectedPeriod={selectedPeriod}
                onPeriodChange={onPeriodChange}
                currentWeekStart={currentWeekStart}
                onNavigate={onNavigate}
              />
              <div className='text-sm font-semibold text-stone-600'>
                {new Date(currentWeekStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} –{' '}
                {new Date(currentWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className='flex gap-2'>
                <Button size='sm' variant='outline' onClick={() => onNavigate('prev')} className='text-xs'>
                  ← Prev
                </Button>
                <Button size='sm' variant='outline' onClick={() => onNavigate('next')} className='text-xs'>
                  Next →
                </Button>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <QuarterSelector value={selectedQuarter} onChange={onQuarterChange} />
              <Button 
                onClick={() => setShowStreak(!showStreak)} 
                size='sm' 
                variant='outline' 
                className='gap-1.5 text-xs h-7 border-stone-300 text-stone-700 hover:bg-stone-50 bg-white'
              >
                <Flame className='h-3.5 w-3.5' />
                {currentStreak > 0 ? `${currentStreak}w` : 'Streak'}
              </Button>

              <Button 
                onClick={onWeeklyReview} 
                size='sm' 
                variant='outline' 
                className='gap-1.5 text-xs h-7 border-stone-300 text-stone-700 hover:bg-stone-50 bg-white'
              >
                <Target className='h-3 w-3' />
                Review
              </Button>
            </div>
          </div>

          {showStreak && (
            <div className='px-5 py-3 border-t border-stone-200 bg-stone-50 mt-3'>
              <ExecutionStreak currentStreak={currentStreak} bestStreak={bestStreak} weeklyHistory={weeklyHistory} />
            </div>
          )}
        </div>
      </Card>
    )
  }

  return (
    <div className='space-y-6'>
      {/* HERO CARD */}
      <Card className='shadow-sm border border-stone-200 rounded-lg overflow-hidden'>
        {/* SCOREBOARD STYLE - Swiss Design with Status Accents */}
        <div className='relative overflow-hidden'>
          {/* Department Header - Neutral with subtle department color accent */}
          <div className='px-6 py-5 bg-stone-50 border-b border-stone-200'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-3xl font-black text-stone-900 tracking-tight'>{departmentName}</h2>
                {coreObjective && (
                  <p className='text-sm font-semibold text-stone-600 mt-1'>{coreObjective.title}</p>
                )}
              </div>
              {/* Progressive time marker - story clock */}
              <div className='text-right'>
                <p className='text-xs font-semibold text-stone-500'>
                  {selectedQuarter === 'annual' ? 'Full Year 2026' : `Quarter: ${selectedQuarter}`}
                </p>
                <p className='text-xs text-stone-400 mt-0.5'>
                  {new Date(currentWeekStart).toLocaleDateString('en-US', { month: 'short' })} · Week {Math.ceil((new Date(currentWeekStart).getDate()) / 7)}
                </p>
              </div>
            </div>
          </div>

          {/* MAIN SCOREBOARD - Two Columns with Vertical Arrow Line Connection */}
          <div className='relative grid grid-cols-2'>
            {/* Vertical Arrow Line - Stacked arrows showing power moves → victory targets */}
            <div className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-10' style={{ width: '24px', gap: '4px' }}>
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.4 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.5 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.6 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.7 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.6 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.5 }} />
              <ArrowRight className='h-5 w-5' style={{ color: status?.color || '#10b981', opacity: 0.4 }} />
            </div>

            {/* LEFT: WEEKLY POWER MOVES - Clean container without border */}
            <div className={cn(
              'p-8 flex flex-col items-center justify-center text-center min-h-[280px] bg-[#F8FAFC] border-t-2',
              status.borderAccent
            )}>
              <div className='space-y-3'>
                <p className='text-base font-black uppercase tracking-[0.15em] text-stone-900'>Weekly Power Moves</p>
                <p className='text-xs font-semibold text-stone-500'>Actions executed this week (Lead Measures)</p>
                
                {/* GIANT SCORE - Status color only on number */}
                <div className='py-4'>
                  <div 
                    className='text-8xl sm:text-9xl font-black tabular-nums leading-none'
                    style={{ color: status.color }}
                  >
                    
                    {powerMoveStats.percentage}
                  </div>
                  <div className='text-2xl font-bold text-stone-400 mt-2'>/100</div>
                </div>

                {/* Status Badge - Only element with status background color */}
                <div className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-sm',
                  status.bg,
                  status.text
                )}>
                  <StatusIcon className='h-5 w-5' />
                  <span className='text-base font-black tracking-wide'>
                    {status.badge}
                  </span>
                </div>

                {/* Power Moves Detail */}
                <div className='mt-4 pt-4 border-t-2 border-stone-200'>
                  <p className='text-3xl font-black text-stone-900 tabular-nums'>
                    {powerMoveStats.completed} <span className='text-stone-400'>/</span> {powerMoveStats.total}
                  </p>
                  <p className='text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider'>Power Moves Complete</p>
                  {/* Time-layer microcopy */}
                  <p className='text-xs text-stone-400 mt-2 italic font-medium'>
                    This week's execution contributes to long-term targets
                  </p>
                  {/* Invisible confidence signal - Apple-like maturity cue */}
                  <p className='text-xs text-stone-300 mt-3 font-medium'>
                    System operating as designed.
                  </p>
                </div>
              </div>
            </div>

            {/* MIDDLE: DEPARTMENT VICTORY TARGETS - Compact */}
            <div className='p-5 min-h-[280px] flex flex-col justify-center bg-white rounded-lg border border-stone-200'>
              <div className='space-y-3'>
                <p className='text-sm font-black uppercase tracking-[0.15em] text-stone-900 text-center'>Department Victory</p>
                
                {victoryTargets.slice(0, 1).map((vt) => {
                  const quarters = (vt as any).quarters || []
                  const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
                  const quarterData = quarterIndex >= 0 ? quarters[quarterIndex] : null
                  const achieved = quarterData?.achieved ?? vt.achieved
                  const target = quarterData?.target ?? vt.target
                  const progress = target > 0 ? (achieved / target) * 100 : 0
                  
                  const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                  const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                  return (
                    <div key={vt.id} className='space-y-2'>
                      <div className='flex items-center justify-between gap-2'>
                        <span className='text-xs font-bold text-stone-700'>{vt.name}</span>
                        <span className='text-xs font-bold text-white px-2 py-1 rounded' style={{ backgroundColor: vtStatusColor }}>
                          {vtStatusLabel}
                        </span>
                      </div>
                      <div className='flex items-baseline gap-1'>
                        <p className='text-2xl font-black text-stone-900'>{achieved}</p>
                        <p className='text-sm text-stone-400'>/</p>
                        <p className='text-lg font-bold text-stone-600'>{target}</p>
                      </div>
                      <div className='w-full bg-stone-200 rounded-full h-2'>
                        <div className='h-full rounded-full transition-all' style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: vtStatusColor }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT: WAR GOAL - Q1 2026 */}
            <div className='p-6 min-h-[280px] flex flex-col justify-between bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg border border-stone-700 shadow-lg'>
              <div>
                <p className='text-xs font-black uppercase tracking-[0.2em] text-stone-400'>War Goal</p>
                <p className='text-lg font-black text-white mt-1 leading-tight'>Q1 2026</p>
                <p className='text-xs text-stone-300 mt-2 font-medium'>Onboard 50 Clients<br />Across All Departments</p>
              </div>

              <div className='space-y-2'>
                <div className='flex items-baseline justify-between'>
                  <p className='text-3xl font-black text-white'>18</p>
                  <p className='text-xs text-stone-400'>/50</p>
                </div>
                <div className='w-full bg-stone-700 rounded-full h-2.5'>
                  <div className='h-full rounded-full bg-amber-400 transition-all' style={{ width: '36%' }} />
                </div>
                <p className='text-xs text-stone-300 font-semibold'>36% Toward Goal</p>
              </div>
            </div>
          </div>
        </div>

        {/* WEEK SELECTOR - MOVED BELOW HERO (NOW SECONDARY) */}
        <div className='px-6 py-4 border-b border-stone-200 bg-white'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <TimePeriodSelector 
                selectedPeriod={selectedPeriod}
                onPeriodChange={onPeriodChange}
                currentWeekStart={currentWeekStart}
                onNavigate={onNavigate}
              />
              <div className='text-sm font-semibold text-stone-600'>
                {new Date(currentWeekStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} –{' '}
                {new Date(currentWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className='flex gap-2'>
                <Button size='sm' variant='outline' onClick={() => onNavigate('prev')} className='text-xs'>
                  ← Prev
                </Button>
                <Button size='sm' variant='outline' onClick={() => onNavigate('next')} className='text-xs'>
                  Next →
                </Button>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <QuarterSelector value={selectedQuarter} onChange={onQuarterChange} />
              <Button 
                onClick={() => setShowStreak(!showStreak)} 
                size='sm' 
                variant='outline' 
                className='gap-1.5 text-xs h-7 border-stone-300 text-stone-700 hover:bg-stone-50 bg-white'
              >
                <Flame className='h-3.5 w-3.5' />
                {currentStreak > 0 ? `${currentStreak}w` : 'Streak'}
              </Button>

              <Button 
                onClick={onWeeklyReview} 
                size='sm' 
                variant='outline' 
                className='gap-1.5 text-xs h-7 border-stone-300 text-stone-700 hover:bg-stone-50 bg-white'
              >
                <Target className='h-3 w-3' />
                Review
              </Button>
            </div>
          </div>

          {showStreak && (
            <div className='px-5 py-3 border-t border-stone-200 bg-stone-50 mt-3'>
              <ExecutionStreak currentStreak={currentStreak} bestStreak={bestStreak} weeklyHistory={weeklyHistory} />
            </div>
          )}
        </div>

        {/* Three-Section Accountability Structure - Power Moves, Tasks, Commitments */}
        <AccountabilitySections 
          powerMoves={powerMoves}
          tasks={[]}
          commitments={[]}
          onAddPowerMove={onAddPowerMove}
          onAddTask={onAddTask}
          onAddCommitment={onAddCommitment}
        />
      </Card>
    </div>
  )
}

// Context metric - Larger for 50+ readability with better visual hierarchy
function ContextMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className='text-center space-y-2'>
      <p className='text-4xl font-black text-stone-950 tabular-nums tracking-tight'>{value}</p>
      <p className='text-xs font-bold uppercase tracking-[0.1em] text-stone-600'>{label}</p>
    </div>
  )
}
