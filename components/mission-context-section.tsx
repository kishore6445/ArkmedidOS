"use client"

import { useMission } from "@/lib/mission-context"
import { CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface MissionContextSectionProps {
  type: 'individual' | 'department'
  brandName?: string
  departmentName?: string
}

export function MissionContextSection({
  type,
  brandName,
  departmentName,
}: MissionContextSectionProps) {
  const { mission, getBrandContribution } = useMission()

  if (type === 'individual' && brandName) {
    const contribution = getBrandContribution(brandName)
    if (!contribution) return null

    const progress = (contribution.achieved / contribution.target) * 100

    return (
      <div className='px-6 sm:px-8 lg:px-12 py-6 bg-slate-50 border-b border-slate-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='text-xs font-bold uppercase tracking-wide text-slate-600'>Contributing to</span>
            <span className='text-sm font-black text-slate-900'>{mission.name}</span>
            <span className='text-xs text-slate-500'>•</span>
            <span className='text-sm text-slate-600 font-semibold'>{brandName}</span>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <p className='text-sm font-bold text-slate-900'>
                {contribution.achieved} of {contribution.target} clients{' '}
                <span className='text-slate-500 font-normal'>onboarded</span>
              </p>
            </div>
            <div className='flex-1 max-w-xs h-2 bg-slate-300 rounded-full overflow-hidden'>
              <div
                className={cn(
                  'h-full transition-all duration-500 rounded-full',
                  progress >= 70 ? 'bg-green-500' :
                  progress >= 50 ? 'bg-amber-500' :
                  'bg-red-500'
                )}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className='flex items-center gap-2 flex-shrink-0'>
              {progress >= 70 ? <CheckCircle className='h-4 w-4 text-green-600' /> :
               progress >= 50 ? <AlertCircle className='h-4 w-4 text-amber-600' /> :
               <AlertCircle className='h-4 w-4 text-red-600' />}
              <span className='text-xs font-bold'>
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'department') {
    return (
      <div className='px-6 sm:px-8 lg:px-12 py-6 bg-slate-50 border-b border-slate-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-4'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='text-xs font-bold uppercase tracking-wide text-slate-600'>{departmentName}'s role in</span>
              <span className='text-sm font-black text-slate-900'>{mission.name}</span>
            </div>
          </div>

          {/* Brand Breakdown */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {mission.brandBreakdown.map((brand) => {
              const progress = (brand.achieved / brand.target) * 100
              return (
                <div key={brand.name} className='bg-white rounded-lg p-4 border border-slate-200'>
                  <p className='text-xs font-bold text-slate-600 mb-2 truncate'>{brand.name}</p>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-lg font-black text-slate-900'>{brand.achieved}</span>
                    <span className='text-xs text-slate-500'>/ {brand.target}</span>
                  </div>
                  <div className='h-1 bg-slate-200 rounded-full overflow-hidden'>
                    <div
                      className='h-full transition-all duration-500 rounded-full'
                      style={{
                        width: `${Math.min(progress, 100)}%`,
                        backgroundColor: brand.color,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Overall Progress */}
          <div className='mt-4 pt-4 border-t border-slate-200 flex items-center justify-between'>
            <span className='text-xs font-bold uppercase text-slate-600'>Overall Company Mission</span>
            <div className='flex items-center gap-3'>
              <span className='text-lg font-black text-slate-900'>
                {mission.totalAchieved}/{mission.totalTarget}
              </span>
              <div className='w-24 h-2 bg-slate-300 rounded-full overflow-hidden'>
                <div
                  className={cn(
                    'h-full transition-all duration-500 rounded-full',
                    ((mission.totalAchieved / mission.totalTarget) * 100) >= 70 ? 'bg-green-500' :
                    ((mission.totalAchieved / mission.totalTarget) * 100) >= 50 ? 'bg-amber-500' :
                    'bg-red-500'
                  )}
                  style={{ width: `${Math.min((mission.totalAchieved / mission.totalTarget) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
