"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { CheckCircle2, TrendingUp } from "lucide-react"

interface DailyReportFormProps {
  onSubmit: (report: any) => void
}

export function DailyReportForm({ onSubmit }: DailyReportFormProps) {
  // Mock user's power moves - replace with actual data
  const userPowerMoves = [
    { id: 1, name: "Client Discovery Calls", target: 5, completed: 0 },
    { id: 2, name: "Story Scripts Written", target: 3, completed: 0 },
  ]

  const [powerMovesCompleted, setPowerMovesCompleted] = useState(
    userPowerMoves.reduce((acc, pm) => ({ ...acc, [pm.id]: 0 }), {})
  )
  const [accomplishments, setAccomplishments] = useState("")
  const [wins, setWins] = useState("")
  const [blockers, setBlockers] = useState("")
  const [tomorrow, setTomorrow] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePowerMoveChange = (id: number, value: number) => {
    setPowerMovesCompleted((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(value, userPowerMoves.find((pm) => pm.id === id)?.target || 0)),
    }))
  }

  const handleSubmit = async () => {
    const hasContent = accomplishments.trim() || Object.values(powerMovesCompleted).some((v) => v > 0)
    
    if (!hasContent) {
      alert("Please log at least some daily performance data")
      return
    }

    setIsSubmitting(true)
    try {
      onSubmit({
        powerMovesCompleted,
        accomplishments: accomplishments.trim(),
        wins: wins.trim(),
        blockers: blockers.trim(),
        tomorrow: tomorrow.trim(),
        date: new Date().toISOString(),
      })
      // Reset form
      setPowerMovesCompleted(userPowerMoves.reduce((acc, pm) => ({ ...acc, [pm.id]: 0 }), {}))
      setAccomplishments("")
      setWins("")
      setBlockers("")
      setTomorrow("")
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalPowerMoveCompleted = Object.values(powerMovesCompleted).reduce((a, b) => a + b, 0)
  const totalPowerMoveTarget = userPowerMoves.reduce((acc, pm) => acc + pm.target, 0)
  const powerMovePercentage = totalPowerMoveTarget > 0 ? Math.round((totalPowerMoveCompleted / totalPowerMoveTarget) * 100) : 0

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Power Moves Section */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h3 className="font-bold text-slate-900">Your Power Moves Today</h3>
        </div>
        
        <div className="space-y-4">
          {userPowerMoves.map((pm) => (
            <div key={pm.id} className="bg-white rounded-lg p-4 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-slate-900">{pm.name}</label>
                <span className="text-sm text-slate-600">{powerMovesCompleted[pm.id] || 0}/{pm.target}</span>
              </div>
              <input
                type="range"
                min="0"
                max={pm.target}
                value={powerMovesCompleted[pm.id] || 0}
                onChange={(e) => handlePowerMoveChange(pm.id, parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-full cursor-pointer"
              />
              <div className="flex gap-2 mt-2">
                <Input
                  type="number"
                  min="0"
                  max={pm.target}
                  value={powerMovesCompleted[pm.id] || 0}
                  onChange={(e) => handlePowerMoveChange(pm.id, parseInt(e.target.value) || 0)}
                  className="w-20 text-center"
                />
                <span className="text-sm text-slate-600 flex items-center">out of {pm.target}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 rounded p-3 text-sm font-semibold text-blue-900">
          Overall Progress: {totalPowerMoveCompleted}/{totalPowerMoveTarget} ({powerMovePercentage}%)
        </div>
      </div>

      {/* Accomplishments */}
      <div className="space-y-2">
        <label className="block font-bold text-slate-900">
          What did you accomplish today?
        </label>
        <p className="text-sm text-slate-600">
          Describe qualitative accomplishments, improvements, learnings, and progress notes.
        </p>
        <Textarea
          value={accomplishments}
          onChange={(e) => setAccomplishments(e.target.value)}
          placeholder="E.g., Completed client onboarding process, identified efficiency improvements in team workflow, learned new analytics framework..."
          className="resize-none min-h-[100px] text-base p-4"
        />
      </div>

      {/* Wins */}
      <div className="space-y-2">
        <label className="block font-bold text-slate-900">
          Wins & Highlights
        </label>
        <p className="text-sm text-slate-600">
          What went well today? Any breakthroughs or notable successes?
        </p>
        <Textarea
          value={wins}
          onChange={(e) => setWins(e.target.value)}
          placeholder="E.g., Closed $50K proposal, team collaboration was excellent, positive client feedback..."
          className="resize-none min-h-[80px] text-base p-4"
        />
      </div>

      {/* Blockers */}
      <div className="space-y-2">
        <label className="block font-bold text-slate-900">
          Blockers & Challenges
        </label>
        <p className="text-sm text-slate-600">
          What obstacles or challenges did you face?
        </p>
        <Textarea
          value={blockers}
          onChange={(e) => setBlockers(e.target.value)}
          placeholder="E.g., Waiting on design feedback, need approval from leadership, resource constraints..."
          className="resize-none min-h-[80px] text-base p-4"
        />
      </div>

      {/* Tomorrow */}
      <div className="space-y-2">
        <label className="block font-bold text-slate-900">
          Tomorrow's Focus & Priorities
        </label>
        <p className="text-sm text-slate-600">
          What are your top priorities for tomorrow?
        </p>
        <Textarea
          value={tomorrow}
          onChange={(e) => setTomorrow(e.target.value)}
          placeholder="E.g., Follow up on 3 pending proposals, start Q2 planning, finalize contract..."
          className="resize-none min-h-[80px] text-base p-4"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
        size="lg"
      >
        <CheckCircle2 className="h-5 w-5 mr-2" />
        {isSubmitting ? "Submitting..." : "Submit Daily Report"}
      </Button>
    </div>
  )
}
