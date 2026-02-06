'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

type PowerMove = {
  id: string
  title: string
  brandId?: string
  department?: string
  owner?: string
  weeklyTarget?: number
  weeklyActual?: number
  linkedVictoryTargetTitle?: string
}

type VictoryTarget = {
  id: string
  title: string
  target: number
  achieved: number
  brandId: string
  department?: string
}

type DepartmentMapping = {
  id: string
  name: string
  color: string
  borderColor: string
  bgColor: string
  textColor: string
}

const departmentMap: Record<string, DepartmentMapping> = {
  'warrior-systems': {
    id: 'warrior-systems',
    name: 'Warrior Systems',
    color: 'blue',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
  },
  'story-marketing': {
    id: 'story-marketing',
    name: 'Story Marketing',
    color: 'purple',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-900',
  },
  'metagurukul': {
    id: 'metagurukul',
    name: 'MetaGurukul',
    color: 'amber',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-900',
  },
}

interface WarGoalHierarchyProps {
  powerMoves: PowerMove[]
  victoryTargets: VictoryTarget[]
  warGoal?: {
    title: string
    target: number
    achieved: number
  }
  isAdmin?: boolean
}

export function WarGoalHierarchy({
  powerMoves,
  victoryTargets,
  warGoal = { title: 'Onboard 50 clients across three brands', target: 50, achieved: 0 },
  isAdmin = false,
}: WarGoalHierarchyProps) {
  const [expandedDept, setExpandedDept] = useState<string | null>(null)

  // Group power moves by department
  const powerMovesByDept = useMemo(() => {
    const grouped: Record<string, PowerMove[]> = {}
    
    Object.keys(departmentMap).forEach(deptId => {
      grouped[deptId] = powerMoves.filter(
        pm => pm.brandId === deptId || pm.department === departmentMap[deptId].name
      )
    })
    
    return grouped
  }, [powerMoves])

  // Group victory targets by department
  const victoryTargetsByDept = useMemo(() => {
    const grouped: Record<string, VictoryTarget[]> = {}
    
    Object.keys(departmentMap).forEach(deptId => {
      grouped[deptId] = victoryTargets.filter(
        vt => vt.brandId === deptId || vt.department === departmentMap[deptId].name
      )
    })
    
    return grouped
  }, [victoryTargets])

  return (
    <div className="space-y-8">
      {/* STICKY WAR GOAL */}
      <div className="sticky top-0 z-50 bg-white rounded-lg border border-slate-200 shadow-md p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-slate-900" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">War Goal 2026</p>
              <h2 className="text-2xl font-black text-slate-900">{warGoal.title}</h2>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600 font-semibold">{warGoal.achieved} / {warGoal.target}</p>
            <div className="w-32 h-2 bg-slate-100 rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all"
                style={{ width: `${Math.min((warGoal.achieved / warGoal.target) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* DEPARTMENT VICTORY TARGETS */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4">Department Victory Targets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(departmentMap).map(([deptId, deptInfo]) => {
            const targets = victoryTargetsByDept[deptId] || []
            const totalTarget = targets.reduce((sum, t) => sum + t.target, 0)
            const totalAchieved = targets.reduce((sum, t) => sum + t.achieved, 0)
            const progress = totalTarget > 0 ? Math.round((totalAchieved / totalTarget) * 100) : 0

            return (
              <Card key={deptId} className={cn('p-4 border-l-4', deptInfo.borderColor, deptInfo.bgColor)}>
                <p className={cn('text-xs font-black uppercase tracking-wider mb-2', deptInfo.textColor)}>
                  {deptInfo.name}
                </p>
                <p className="text-3xl font-black text-slate-900 mb-1">{totalAchieved} / {totalTarget}</p>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                  <div
                    className={cn('h-full transition-all', {
                      'bg-blue-500': deptInfo.color === 'blue',
                      'bg-purple-500': deptInfo.color === 'purple',
                      'bg-amber-500': deptInfo.color === 'amber',
                    })}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs font-semibold text-slate-600">{progress}% Complete</p>
              </Card>
            )
          })}
        </div>
      </div>

      {/* POWER MOVES BY DEPARTMENT - Progressive Disclosure */}
      <div className="space-y-6">
        <h3 className="text-lg font-black text-slate-900">Power Moves by Department</h3>
        
        {Object.entries(departmentMap).map(([deptId, deptInfo]) => {
          const moves = powerMovesByDept[deptId] || []
          const isExpanded = expandedDept === deptId
          const visibleMoves = isExpanded ? moves : moves.slice(0, 3)
          const hiddenCount = moves.length - 3

          if (moves.length === 0) return null

          return (
            <div key={deptId} className="space-y-3">
              <div className={cn('rounded-lg border-l-4 p-4', deptInfo.borderColor, deptInfo.bgColor)}>
                <h4 className={cn('text-base font-black mb-3', deptInfo.textColor)}>
                  {deptInfo.name}
                </h4>

                <div className="space-y-2">
                  {visibleMoves.map((pm) => (
                    <div
                      key={pm.id}
                      className={cn(
                        'flex items-start gap-3 p-3 bg-white rounded border-l-2 hover:shadow-sm transition-all',
                        deptInfo.borderColor
                      )}
                    >
                      <div className={cn('w-2 h-2 rounded-full mt-1.5 flex-shrink-0', {
                        'bg-blue-500': deptInfo.color === 'blue',
                        'bg-purple-500': deptInfo.color === 'purple',
                        'bg-amber-500': deptInfo.color === 'amber',
                      })} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{pm.title}</p>
                        <p className="text-xs text-slate-600 mt-0.5">Owner: {pm.owner || 'Unassigned'}</p>
                        {pm.linkedVictoryTargetTitle && (
                          <p className="text-xs text-slate-500 mt-1">Links to: {pm.linkedVictoryTargetTitle}</p>
                        )}
                      </div>
                      {pm.weeklyTarget && (
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-black text-slate-900">
                            {pm.weeklyActual || 0}/{pm.weeklyTarget}
                          </p>
                          <p className="text-xs text-slate-500">Weekly</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {hiddenCount > 0 && (
                  <button
                    onClick={() => setExpandedDept(isExpanded ? null : deptId)}
                    className="mt-3 w-full flex items-center justify-center gap-2 p-2 text-sm font-semibold text-slate-700 hover:bg-white rounded transition-colors"
                  >
                    {isExpanded ? 'Show less' : `Show ${hiddenCount} more power moves`}
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
                    />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
