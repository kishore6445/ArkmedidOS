"use client"

import { useMission } from "@/lib/mission-context"
import { cn } from "@/lib/utils"

export function MissionBar() {
  const { mission, getProgress } = useMission()
  const progress = getProgress()

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 sm:px-8 lg:px-12 py-4 border-b border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Mission Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="h-9 w-9 rounded-full bg-orange-500 flex items-center justify-center text-lg font-black">
                🎯
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-0.5">
                {mission.name}
              </p>
              <p className="text-sm font-semibold text-white truncate">
                {mission.description}
              </p>
            </div>
          </div>

          {/* Progress Display - Right aligned */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Metric */}
            <div className="text-right">
              <div className="text-xl font-black text-white">
                {mission.totalAchieved}
                <span className="text-slate-400 text-sm mx-1">/</span>
                <span className="text-sm font-semibold text-slate-300">{mission.totalTarget}</span>
              </div>
              <p className="text-xs text-slate-400 font-bold mt-0.5">
                {Math.round(progress)}% Complete
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-40 h-2 bg-slate-700 rounded-full overflow-hidden flex-shrink-0">
              <div
                className={cn(
                  "h-full transition-all duration-500 rounded-full",
                  progress >= 70 ? "bg-green-500" :
                  progress >= 50 ? "bg-amber-500" :
                  "bg-red-500"
                )}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
