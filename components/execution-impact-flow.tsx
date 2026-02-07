'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ExecutionImpactFlow() {
  const steps = [
    {
      title: 'Power Moves',
      caption: 'Daily & weekly actions (Lead Measures)',
    },
    {
      title: 'Department Victory Targets',
      caption: 'Monthly / Quarterly outcomes (Lag Measures)',
    },
    {
      title: 'War Goal',
      caption: 'WAR GOAL: Onboard 50 Clients Across All Departments',
    },
  ]

  return (
    <Card className="overflow-hidden border border-stone-200 bg-white">
      <div className="p-8 lg:p-10">
        <div className="mb-6">
          <h3 className="text-lg font-black text-stone-900 mb-1">Execution Impact Flow</h3>
          <p className="text-sm font-semibold text-stone-600">
            How daily execution compounds into strategic outcomes
          </p>
        </div>

        {/* Flow Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6 w-full md:w-auto md:flex-1">
              {/* Step Card */}
              <div className="flex-1 md:flex-none text-center">
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-3">
                  <p className="text-base font-bold text-stone-900">{step.title}</p>
                </div>
                <p className="text-xs font-semibold text-stone-600 leading-relaxed">
                  {step.caption}
                </p>
              </div>

              {/* Arrow - Hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center md:w-auto">
                  <ArrowRight className="h-5 w-5 text-stone-400 flex-shrink-0" aria-hidden="true" />
                </div>
              )}

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex items-center justify-center w-full">
                  <ArrowRight className="h-4 w-4 text-stone-400 rotate-90" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Explanation */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <p className="text-center text-sm text-stone-600">
            <span className="font-semibold text-stone-900">Execution compounds upward:</span> Weekly power moves drive monthly targets, which collectively achieve the company-wide war goal.
          </p>
        </div>
      </div>
    </Card>
  )
}
