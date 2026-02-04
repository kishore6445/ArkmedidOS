'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import type { PowerMove, Task, Commitment } from '@/components/department-page'

interface AccountabilitySectionsProps {
  powerMoves: PowerMove[]
  tasks?: Task[]
  commitments?: Commitment[]
  onAddPowerMove?: () => void
  onAddTask?: () => void
  onAddCommitment?: () => void
}

export function AccountabilitySections({
  powerMoves,
  tasks = [],
  commitments = [],
  onAddPowerMove,
  onAddTask,
  onAddCommitment,
}: AccountabilitySectionsProps) {
  const [completedCount, setCompletedCount] = useState<Record<string, number>>({})

  // Calculate week progress (assume 7-day week, show days remaining)
  const today = new Date()
  const dayOfWeek = today.getDay()
  const daysRemaining = 7 - dayOfWeek
  const daysCompleted = dayOfWeek

  const handleCompleteClick = (pmId: string, frequency: number) => {
    setCompletedCount((prev) => ({
      ...prev,
      [pmId]: Math.min((prev[pmId] || 0) + 1, frequency),
    }))
  }

  const getCompletionPercentage = (pmId: string, frequency: number) => {
    const count = completedCount[pmId] || 0
    return frequency > 0 ? (count / frequency) * 100 : 0
  }

  // Derive execution status from percentage
  const getExecutionStatus = (percentage: number) => {
    if (percentage === 0) return 'Not Started'
    if (percentage >= 100) return 'Completed'
    return 'In Progress'
  }

  return (
    <div className='space-y-6 mt-8'>
      {/* Section Descriptions - Calm Legend */}
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

      {/* DIVIDER: This Week's Execution */}
      <div className='py-4 px-6 bg-stone-50 border-t-2 border-b border-stone-200 rounded-lg'>
        <div className='flex items-center justify-between'>
          <p className='text-xs font-black uppercase tracking-[0.2em] text-stone-600'>ution</p>
          <p className='text-xs font-semibold text-stone-500'>
            {daysCompleted} of 7 days · {daysRemaining} remaining
          </p>
        </div>
      </div>

      {/* Power Moves Section */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#16A34A' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Power Moves (Lead Measures)</p>
            <span className='text-xs font-semibold text-stone-500'>Recurring Actions</span>
          </div>
          <Button size='sm' onClick={onAddPowerMove} className='bg-green-600 hover:bg-green-700 text-white text-xs font-bold'>
            + Add Power Move
          </Button>
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
              {powerMoves.map((pm, index) => {
                // Priority: first 2 are primary, rest supporting
                const isPrimary = index < 2
                
                // Safely parse frequency - handle various formats
                let frequency = 1
                if (pm.frequency) {
                  const freqStr = typeof pm.frequency === 'string' ? pm.frequency : String(pm.frequency)
                  const parsed = parseInt(freqStr.split('/')[0] || '1')
                  frequency = isNaN(parsed) ? 1 : parsed
                }
                
                const completed = completedCount[pm.id] || 0
                const percentage = getCompletionPercentage(pm.id, frequency)
                const safePercentage = isNaN(percentage) ? 0 : percentage
                const executionStatus = getExecutionStatus(safePercentage)

                return (
                  <tr key={pm.id} className='border-b border-stone-200 hover:bg-stone-50'>
                    <td className='px-6 py-4'>
                      <p className='text-sm font-bold text-stone-900'>{pm.name}</p>
                    </td>
                    <td className='px-6 py-4'>
                      <span className={cn(
                        'inline-flex text-xs font-bold px-2 py-1 rounded',
                        isPrimary 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'text-stone-500'
                      )}>
                        {isPrimary ? '⭐ Primary' : '◦ Supporting'}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-xs font-semibold text-stone-600'>
                      {pm.frequency || '1/week'}
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <div className='flex-1 max-w-xs'>
                          <div className='h-2 bg-stone-200 rounded-full overflow-hidden'>
                            <div
                              className='h-full transition-all duration-300'
                              style={{
                                width: `${safePercentage}%`,
                                backgroundColor:
                                  safePercentage >= 100 ? '#16A34A' : safePercentage >= 50 ? '#F59E0B' : '#DC2626',
                              }}
                            />
                          </div>
                        </div>
                        <span className='text-xs font-bold text-stone-600 w-12 text-right'>
                          {Math.round(safePercentage)}%
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
                        onClick={() => handleCompleteClick(pm.id, frequency)}
                        disabled={completed >= frequency}
                        className={cn(
                          'text-xs font-bold',
                          completed >= frequency
                            ? 'bg-stone-200 text-stone-500 cursor-not-allowed'
                            : 'bg-[#16A34A] hover:bg-[#15803d] text-white'
                        )}
                      >
                        {completed >= frequency ? '✓ Done' : 'Complete_test'}
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tasks Section */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#F59E0B' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Tasks (One-Time Actions)</p>
            <span className='text-xs font-semibold text-stone-500'>Discrete Deliverables</span>
          </div>
          <Button size='sm' onClick={onAddTask} className='bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold'>
            + Add Task
          </Button>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-stone-200 bg-stone-50'>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Task</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Owner</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>Last Week Status</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>This Week Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task.id} className='border-b border-stone-200 hover:bg-stone-50'>
                    <td className='px-6 py-4 text-sm font-bold text-stone-900'>{task.name}</td>
                    <td className='px-6 py-4 text-xs font-semibold text-stone-600'>{task.owner || '-'}</td>
                    <td className='px-6 py-4 text-center'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-200 text-stone-700'>
                        {task.status || 'Pending'}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-600'>
                        Not Started
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className='px-6 py-8 text-center text-sm text-stone-500'>
                    No tasks added yet_test
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Commitments Section */}
      <div className='bg-white border border-stone-200 rounded-lg overflow-hidden'>
        <div className='px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: '#DC2626' }} />
            <p className='text-sm font-black uppercase tracking-[0.1em] text-stone-900'>Commitments (Team Promises)</p>
            <span className='text-xs font-semibold text-stone-500'>From Weekly Calls</span>
          </div>
          <Button size='sm' onClick={onAddCommitment} className='bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold'>
            + Add Commitment
          </Button>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-stone-200 bg-stone-50'>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Commitment</th>
                <th className='px-6 py-3 text-left text-xs font-bold text-stone-600 uppercase tracking-wider'>Owner</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>Last Week</th>
                <th className='px-6 py-3 text-center text-xs font-bold text-stone-600 uppercase tracking-wider'>This Week</th>
              </tr>
            </thead>
            <tbody>
              {commitments.length > 0 ? (
                commitments.map((commitment) => (
                  <tr key={commitment.id} className='border-b border-stone-200 hover:bg-stone-50'>
                    <td className='px-6 py-4 text-sm font-bold text-stone-900'>{commitment.name}</td>
                    <td className='px-6 py-4 text-xs font-semibold text-stone-600'>{commitment.owner || '-'}</td>
                    <td className='px-6 py-4 text-center'>
                      <input type='checkbox' className='w-4 h-4 rounded border-stone-300' defaultChecked={commitment.completed} />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <input type='checkbox' className='w-4 h-4 rounded border-stone-300' />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className='px-6 py-8 text-center text-sm text-stone-500'>
                    No commitments added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
