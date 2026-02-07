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
import { WarGoalCard } from '@/components/war-goal-card'
import { ArrowRight, ArrowDown, Flame, Target, CheckCircle, AlertCircle, XCircle } from 'lucide-react'
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
      icon: CheckCircle,
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

          {/* MAIN SCOREBOARD - Weekly Power Moves + Victory Targets */}
          <div className='relative grid grid-cols-2'>
            {/* Silent Structural Divider - 1px neutral grey line */}
            <div className='absolute top-0 bottom-0 left-1/2 w-px bg-stone-200 -translate-x-1/2' />

            {/* LEFT: WEEKLY POWER MOVES - Structured container */}
            <div className={cn(
              'p-8 flex flex-col items-center justify-center text-center min-h-[280px] bg-[#F8FAFC] border-t-2',
              status.borderAccent
            )}>
              <div className='space-y-3'>
                <p className='text-base font-black uppercase tracking-[0.15em] text-stone-900'>Weekly Power Moves</p>
                <p className='text-xs font-semibold text-stone-500'>Actions executed this week (Lead Measures_TEST)</p>
                
                {/* GIANT SCORE - Status color only on number */}
                <div className='py-4'>
                  <div 
                    className='text-8xl sm:text-9xl font-black tabular-nums leading-none'
                    style={{ color: status.color }}
                  >
                    {powerMoveStats.percentage}
                  </div>
                  <div className='text-2xl font-bold text-stone-400 mt-2'>/100000</div>
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

            {/* RIGHT: DEPARTMENT VICTORY TARGETS - Rounded container */}
            <div className='p-6 min-h-[280px] flex flex-col justify-center bg-white rounded-r-lg'>
              <div className='space-y-4'>
                <div className='text-center mb-4'>
                  <p className='text-base font-black uppercase tracking-[0.15em] text-stone-900'>Department Victory Targets</p>
                  <p className='text-xs font-semibold text-stone-500 mt-1'>Results measured monthly / quarterly (Lag Measures)</p>
                  {/* Compounding story - not instant results */}
                  <p className='text-xs text-stone-400 mt-1.5 italic font-medium'>
                    Weekly execution compounds into monthly & quarterly victory
                  </p>
                  <p className='text-xs text-stone-500 font-semibold mt-2'>Every individual's Power Moves roll up here.</p>
                </div>

                {/* Victory Target Cards */}
                <div className='space-y-3'>
                  {victoryTargets.slice(0, 2).map((vt, index) => {
                    const quarters = (vt as any).quarters || []
                    const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
                    const quarterData = quarterIndex >= 0 ? quarters[quarterIndex] : null
                    const achieved = quarterData?.achieved ?? vt.achieved
                    const target = quarterData?.target ?? vt.target
                    const progress = target > 0 ? (achieved / target) * 100 : 0
                    
                    // Status-based colors matching global status colors
                    const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                    const vtStatusBg = progress >= 70 ? 'bg-[#16A34A]' : progress >= 50 ? 'bg-[#F59E0B]' : 'bg-[#DC2626]'
                    const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'
                    
                    // Trend hint based on progress
                    const trendHint = progress >= 75 ? 'On pace' : progress >= 50 ? 'Stable' : 'Needs momentum'
                    const isPrimaryTarget = index === 0

                    return (
                      <div key={vt.id} className={cn(
                        'bg-white border-2 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow',
                        isPrimaryTarget ? 'border-stone-300' : 'border-stone-200'
                      )}>
                        <div className='flex items-start justify-between gap-2 mb-3'>
                          <div className='flex-1'>
                            <p className='text-sm font-bold text-stone-900 flex-1 leading-tight'>{(vt as any).title || vt.name}</p>
                            {isPrimaryTarget && (
                              <p className='text-xs font-semibold text-stone-400 mt-1'>Primary</p>
                            )}
                          </div>
                          <span className={cn('text-xs font-black px-2.5 py-1 rounded-full text-white shadow-sm', vtStatusBg)}>
                            {vtStatusLabel}
                          </span>
                        </div>
                        <div className='flex items-baseline gap-1 mb-3'>
                          <span className='text-3xl font-black text-stone-900 tabular-nums'>{achieved}</span>
                          <span className='text-lg text-stone-400 font-medium'>/</span>
                          <span className='text-2xl font-black text-stone-600'>{target}</span>
                          <span className='text-sm font-semibold text-stone-500 ml-2'>({Math.round(progress)}%)</span>
                        </div>
                        {/* Progress Bar - color tied to performance threshold, more prominent */}
                        <div className='h-3 rounded-full overflow-hidden bg-stone-200 mb-2'>
                          <div 
                            className='h-full transition-all duration-500' 
                            style={{ 
                              width: `${Math.min(progress, 100)}%`,
                              backgroundColor: vtStatusColor
                            }}
                          />
                        </div>
                        {/* Trend Hint */}
                        <p className='text-xs font-semibold text-stone-500'>{trendHint}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Summary at bottom */}
                <div className='mt-4 pt-4 border-t-2 border-stone-200 text-center'>
                  <div className='flex items-baseline justify-center gap-2'>
                    <span 
                      className='text-4xl font-black tabular-nums'
                      style={{ 
                        color: greenTargets === totalTargets ? '#16A34A' :
                               greenTargets >= totalTargets * 0.7 ? '#16A34A' :
                               greenTargets >= totalTargets * 0.5 ? '#F59E0B' : '#DC2626'
                      }}
                    >
                      {greenTargets}
                    </span>
                    <span className='text-2xl font-bold text-stone-400'>/</span>
                    <span className='text-3xl font-black text-stone-600'>{totalTargets}</span>
                  </div>
                  <p className='text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider'>Targets On Track</p>
                  {/* Forward-Looking Closure */}
                  <p className='text-xs text-stone-400 mt-3 italic font-medium'>
                    Sustain weekly execution to lock monthly victory.
                  </p>
                </div>
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

          {/* MAIN SCOREBOARD - Visual Hierarchy with Section Differentiation */}
          <div className='relative overflow-hidden'>
            {/* Desktop 3-Card Grid - Enhanced Visual Hierarchy */}
            <div className='hidden lg:flex lg:items-stretch lg:gap-0 p-6 bg-stone-50'>
              {/* Step 1 Badge */}
              <div className='absolute left-20 top-2 z-10 bg-amber-400 text-amber-900 font-black px-3 py-1 rounded-full text-xs'>STEP 1 – Execution Discipline</div>

              {/* Column 1: WEEKLY POWER MOVES - AMBER Theme */}
              <div className={cn(
                'flex flex-col items-start justify-between flex-1 min-h-[340px] bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-t-4 border-b-4 border-amber-400 border-r-2 border-r-amber-200 rounded-l-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300',
                status.borderAccent
              )}>
                <div className='w-full space-y-2'>
                  {/* Section Label */}
                  <p className='text-xs font-black uppercase tracking-widest text-amber-700'>Weekly Power Moves</p>
                  <p className='text-xs font-semibold text-amber-600'>Actions executed this week</p>
                </div>

                {/* HERO METRIC - Dramatically Larger */}
                <div className='w-full text-center'>
                  <div className='flex flex-col items-center'>
                    <div 
                      className='text-9xl font-black tabular-nums leading-none drop-shadow-sm'
                      style={{ color: status.color }}
                    >
                      {powerMoveStats.percentage}
                    </div>
                    <div className='text-2xl font-bold mt-3 uppercase tracking-widest' style={{ color: status.color }}>
                      {status.badge}
                    </div>
                    <p className='text-sm font-black text-amber-600 mt-4'>
                      {powerMoveStats.completed} / {powerMoveStats.total} complete
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 Badge */}
              <div className='absolute left-1/2 -translate-x-1/2 top-2 z-10 bg-blue-400 text-blue-900 font-black px-3 py-1 rounded-full text-xs'>STEP 2 – Team Outcomes</div>

              {/* Column 2: DEPARTMENT VICTORY TARGETS - BLUE Theme */}
              <div className='flex flex-col items-start justify-between flex-1 min-h-[340px] bg-gradient-to-br from-blue-50 to-cyan-50 border-l-2 border-l-blue-200 border-t-4 border-b-4 border-blue-400 border-r-2 border-r-blue-200 p-8 overflow-y-auto shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className='w-full space-y-2'>
                  {/* Section Label */}
                  <p className='text-xs font-black uppercase tracking-widest text-blue-700'>Department Victory Targets</p>
                  <p className='text-xs font-semibold text-blue-600'>Results measured monthly / quarterly</p>
                  <p className='text-xs text-blue-600 font-semibold mt-2'>Every individual's Power Moves roll up here.</p>
                </div>

                {/* Victory Target Cards - Compact */}
                {victoryTargets.length === 0 ? (
                  <div className='w-full flex items-center justify-center min-h-[100px]'>
                    <div className='text-center space-y-2'>
                      <p className='text-xs text-blue-600 font-semibold'>No victory targets set</p>
                      <p className='text-xs text-blue-500 italic'>Configure targets from the admin panel</p>
                    </div>
                  </div>
                ) : (
                  <div className='w-full space-y-2 flex-1 min-h-[100px]'>
                    {victoryTargets.slice(0, 2).map((vt, index) => {
                      const quarters = (vt as any).quarters || []
                      const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
                      const quarterData = quarterIndex >= 0 ? quarters[quarterIndex] : null
                      const achieved = quarterData?.achieved ?? vt.achieved
                      const target = quarterData?.target ?? vt.target
                      const progress = target > 0 ? (achieved / target) * 100 : 0
                      
                      const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                      const StatusIcon = progress >= 70 ? CheckCircle : progress >= 50 ? AlertCircle : XCircle
                      const statusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                      return (
                        <div key={vt.id} className='bg-blue-100 border border-blue-300 rounded-lg p-3 text-left hover:bg-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer'>
                          <p className='text-xs font-bold text-blue-900 flex-1 mb-2'>{(vt as any).title || vt.name}</p>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-2xl font-black tabular-nums' style={{ color: vtStatusColor }}>{achieved}</span>
                            <span className='text-xs font-bold text-blue-600'>/</span>
                            <span className='text-lg font-black text-blue-700'>{target}</span>
                          </div>
                          <div className='h-1.5 rounded-full overflow-hidden bg-blue-200 mb-2'>
                            <div 
                              className='h-full transition-all duration-500' 
                              style={{ 
                                width: `${Math.min(progress, 100)}%`,
                                backgroundColor: vtStatusColor
                              }}
                            />
                          </div>
                          <div className='flex items-center gap-1'>
                            <StatusIcon className='h-3 w-3' style={{ color: vtStatusColor }} />
                            <p className='text-xs font-bold uppercase tracking-widest' style={{ color: vtStatusColor }}>{statusLabel}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Summary Metric */}
                <div className='w-full text-center'>
                  <p className='text-xs font-semibold text-blue-600 mb-2'>Targets on Track</p>
                  <div className='flex items-baseline gap-1 justify-center'>
                    <span className='text-9xl font-black text-blue-900 tabular-nums leading-none'>
                      {victoryTargets.filter(vt => {
                        const achieved = vt.achieved ?? 0
                        const target = vt.target ?? 0
                        const progress = target > 0 ? (achieved / target) * 100 : 0
                        return progress >= 70
                      }).length}
                    </span>
                    <span className='text-3xl text-blue-400 font-bold'>/{victoryTargets.length}</span>
                  </div>
                </div>
              </div>

              {/* Step 3 Badge */}
              <div className='absolute right-20 top-2 z-10 bg-purple-400 text-purple-900 font-black px-3 py-1 rounded-full text-xs'>STEP 3 – Company Mission</div>

              {/* Column 3: WAR GOAL - PURPLE Theme */}
              <div className='flex flex-col items-start justify-between flex-1 min-h-[340px] bg-gradient-to-br from-purple-50 to-violet-50 border-l-2 border-l-purple-200 border-t-4 border-b-4 border-purple-400 border-r-4 border-r-purple-400 rounded-r-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className='w-full space-y-2'>
                  {/* Section Label */}
                  <p className='text-xs font-black uppercase tracking-widest text-purple-700'>Company Mission</p>
                  <p className='text-xs font-semibold text-purple-600'>Strategic company outcome</p>
                </div>

                {/* HERO METRIC - Dramatically Larger */}
                <div className='w-full text-center'>
                  <div className='flex flex-col items-center'>
                    <div className='text-6xl font-black text-purple-900 tabular-nums leading-none'>
                      {companyWIG?.achieved ?? 0}
                    </div>
                    <div className='text-2xl font-bold text-purple-400 mt-1'>
                      / {companyWIG?.target ?? 0}
                    </div>
                    <p className='text-xs font-bold text-purple-700 mt-4 uppercase tracking-widest'>
                      {companyWIG?.achieved && companyWIG?.target ? 
                        Math.round((companyWIG.achieved / companyWIG.target) * 100) : 0}% Complete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Stack */}
            <div className='lg:hidden space-y-4 p-6 bg-stone-50'>
              {/* Step 1 Badge */}
              <div className='flex justify-center mb-2'>
                <span className='bg-amber-400 text-amber-900 font-black px-3 py-1 rounded-full text-xs'>STEP 1 – Execution Discipline</span>
              </div>

              {/* Card 1 - Amber Theme */}
              <div className={cn(
                'flex flex-col items-center justify-center text-center bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-t-4 border-b-4 border-amber-400 border-r-2 border-r-amber-200 rounded-lg p-7 shadow-md hover:shadow-lg transition-shadow duration-300',
                status.borderAccent
              )}>
                <div className='space-y-4 w-full'>
                  <div className='space-y-1'>
                    <p className='text-lg font-black uppercase tracking-[0.2em] text-amber-900'>Weekly Power Moves</p>
                    <div className='h-0.5 w-12 bg-amber-300 mx-auto rounded-full'></div>
                  </div>
                  <p className='text-xs font-semibold text-amber-700'>Actions executed this week (Lead Measures)</p>
                  <div className='py-5'>
                    <div 
                      className='text-8xl font-black tabular-nums leading-none drop-shadow-sm'
                      style={{ color: status.color }}
                    >
                      {powerMoveStats.percentage}
                    </div>
                    <div className='text-xl font-bold text-amber-400 mt-3'>/100</div>
                  </div>
                  <div className={cn(
                    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg shadow-md text-sm font-black',
                    status.bg,
                    status.text
                  )}>
                    <StatusIcon className='h-5 w-5' />
                    <span>{status.badge}</span>
                  </div>
                  <div className='mt-5 pt-5 border-t-2 border-amber-200 space-y-2'>
                    <p className='text-3xl font-black text-amber-900 tabular-nums'>
                      {powerMoveStats.completed} <span className='text-amber-300'>/</span> {powerMoveStats.total}
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
                <span className='bg-blue-400 text-blue-900 font-black px-3 py-1 rounded-full text-xs'>STEP 2 – Team Outcomes</span>
              </div>

              {/* Card 2 - Blue Theme */}
              <div className='bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-t-4 border-b-4 border-blue-400 border-r-2 border-r-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className='space-y-3'>
                  <div className='space-y-1'>
                    <p className='text-base font-black uppercase tracking-[0.15em] text-blue-900'>Department Victory Targets</p>
                    <div className='h-0.5 w-10 bg-blue-300 mx-auto rounded-full'></div>
                  </div>
                  <p className='text-xs font-semibold text-blue-700 mt-1'>Results measured monthly / quarterly (Lag Measures)</p>
                  <div className='space-y-2'>
                    {victoryTargets.slice(0, 2).map((vt, index) => {
                      const quarters = (vt as any).quarters || []
                      const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(selectedQuarter)
                      const quarterData = quarterIndex >= 0 ? quarters[quarterIndex] : null
                      const achieved = quarterData?.achieved ?? vt.achieved
                      const target = quarterData?.target ?? vt.target
                      const progress = target > 0 ? (achieved / target) * 100 : 0
                      
                      const vtStatusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
                      const vtStatusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
                      const vtStatusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

                      return (
                        <div key={vt.id} className='bg-blue-100 border border-blue-300 rounded-lg p-3 text-left hover:bg-blue-200 hover:shadow-md transition-all duration-200'>
                          <div className='flex items-start justify-between gap-2 mb-2'>
                            <p className='text-xs font-bold text-blue-900 flex-1'>{(vt as any).title || vt.name}</p>
                            <span className={cn('text-xs font-black px-2 py-0.5 rounded-full text-white', vtStatusBg)}>
                              {vtStatusLabel}
                            </span>
                          </div>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-xl font-black text-blue-900 tabular-nums'>{achieved}</span>
                            <span className='text-sm text-blue-500'>/</span>
                            <span className='text-lg font-black text-blue-700'>{target}</span>
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
                        </div>
                      )
                    })}
                  </div>
                  <div className='mt-4 pt-4 border-t border-blue-200'>
                    <div className='flex items-baseline justify-center gap-1 mb-1'>
                      <span 
                        className='text-2xl font-black tabular-nums text-blue-900'
                      >
                        {greenTargets}
                      </span>
                      <span className='text-lg font-bold text-blue-400'>/</span>
                      <span className='text-xl font-black text-blue-700'>{totalTargets}</span>
                    </div>
                    <p className='text-xs font-bold text-blue-700 uppercase tracking-wider'>Targets On Track</p>
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
                <span className='bg-purple-400 text-purple-900 font-black px-3 py-1 rounded-full text-xs'>STEP 3 – Company Mission</span>
              </div>

              {/* Card 3 - Purple Theme */}
              <WarGoalCard companyWIG={companyWIG} equalHeight={true} minHeight='auto' />
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
