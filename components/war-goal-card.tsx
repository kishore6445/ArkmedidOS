'use client'

import { Card } from '@/components/ui/card'
import { Target } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WarGoalCardProps {
  companyWIG?: string
  className?: string
}

export function WarGoalCard({ companyWIG, className }: WarGoalCardProps) {
  const warGoalText = 'Onboard 50 Clients Across All Departments'
  const achieved = 0
  const target = 50
  const progress = target > 0 ? (achieved / target) * 100 : 0

  const statusColor = progress >= 70 ? '#16A34A' : progress >= 50 ? '#F59E0B' : '#DC2626'
  const statusBg = progress >= 70 ? 'bg-emerald-100' : progress >= 50 ? 'bg-amber-100' : 'bg-rose-100'
  const statusLabel = progress >= 70 ? 'On Track' : progress >= 50 ? 'At Risk' : 'Behind'

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className='flex-1 p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[280px] bg-white border-2 border-stone-200 rounded-lg'>
        <div className='space-y-3 w-full'>
          {/* Header */}
          <div>
            <p className='text-base font-black uppercase tracking-[0.15em] text-stone-900'>War Goal</p>
            <p className='text-xs font-semibold text-stone-500 mt-1'>Company Mission (Lag Measure)</p>
          </div>

          {/* Main Text */}
          <div className='py-4'>
            <p className='text-lg font-semibold text-stone-900 leading-snug'>
              {warGoalText}
            </p>
          </div>

          {/* Progress Number */}
          <div className='py-3'>
            <div className='text-5xl font-black tabular-nums text-stone-900 leading-none'>
              {achieved}
            </div>
            <div className='text-lg font-bold text-stone-400 mt-2'>/ {target}</div>
          </div>

          {/* Status Badge */}
          <div className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black shadow-sm mx-auto',
            statusBg,
            progress >= 70 ? 'text-emerald-700' : progress >= 50 ? 'text-amber-700' : 'text-rose-700'
          )}>
            <Target className='h-4 w-4' />
            <span>{statusLabel}</span>
          </div>

          {/* Progress Bar */}
          <div className='h-2 rounded-full overflow-hidden bg-stone-200 mt-4'>
            <div
              className='h-full transition-all duration-500'
              style={{
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: statusColor,
              }}
            />
          </div>

          {/* Footer text */}
          <p className='text-xs text-stone-400 mt-4 italic font-medium'>
            Company-wide strategic outcome
          </p>
        </div>
      </div>
    </div>
  )
}
