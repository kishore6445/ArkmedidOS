"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Plus, X } from "lucide-react"

interface DailyReportFormProps {
  onSubmit: (report: any) => void
}

export function DailyReportForm({ onSubmit }: DailyReportFormProps) {
  const [quantitativeGoals, setQuantitativeGoals] = useState([
    { id: "1", name: "Client Discovery Calls", target: 5, completed: 0 },
    { id: "2", name: "Proposals Generated", target: 3, completed: 0 },
  ])

  const [qualitativeNotes, setQualitativeNotes] = useState("")
  const [wins, setWins] = useState([""])
  const [blockers, setBlockers] = useState([""])
  const [tomorrow, setTomorrow] = useState("")

  const handleQuantitativeUpdate = (id: string, completed: number) => {
    setQuantitativeGoals(
      quantitativeGoals.map((g) => (g.id === id ? { ...g, completed } : g))
    )
  }

  const handleWinChange = (index: number, value: string) => {
    const newWins = [...wins]
    newWins[index] = value
    setWins(newWins)
  }

  const handleBlockerChange = (index: number, value: string) => {
    const newBlockers = [...blockers]
    newBlockers[index] = value
    setBlockers(newBlockers)
  }

  const handleAddWin = () => setWins([...wins, ""])
  const handleRemoveWin = (index: number) => setWins(wins.filter((_, i) => i !== index))
  const handleAddBlocker = () => setBlockers([...blockers, ""])
  const handleRemoveBlocker = (index: number) => setBlockers(blockers.filter((_, i) => i !== index))

  const handleSubmit = () => {
    onSubmit({
      quantitativeGoals,
      qualitativeNotes: qualitativeNotes.trim(),
      wins: wins.filter((w) => w.trim()),
      blockers: blockers.filter((b) => b.trim()),
      tomorrow: tomorrow.trim(),
      date: new Date().toISOString(),
    })
  }

  return (
    <form className="space-y-8 max-w-3xl">
      {/* Quantitative Goals */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Quantitative Progress</h3>
        <div className="space-y-3">
          {quantitativeGoals.map((goal) => (
            <div
              key={goal.id}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-4"
            >
              <div className="flex-1">
                <p className="font-semibold text-slate-900 mb-2">{goal.name}</p>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((goal.completed / goal.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-fit">
                <Input
                  type="number"
                  value={goal.completed}
                  onChange={(e) => handleQuantitativeUpdate(goal.id, parseInt(e.target.value) || 0)}
                  className="w-16 text-center font-bold"
                  min="0"
                />
                <span className="text-slate-600 font-semibold">/ {goal.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Qualitative Accomplishments */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">What You Accomplished Today</h3>
        <Textarea
          value={qualitativeNotes}
          onChange={(e) => setQualitativeNotes(e.target.value)}
          placeholder="Describe key accomplishments and progress on qualitative goals..."
          className="resize-none min-h-[100px]"
        />
      </div>

      {/* Wins */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Wins & Highlights</h3>
        <div className="space-y-2">
          {wins.map((win, index) => (
            <div key={index} className="flex gap-2">
              <Textarea
                value={win}
                onChange={(e) => handleWinChange(index, e.target.value)}
                placeholder="e.g., Closed a deal, fixed critical issue, great collaboration..."
                className="resize-none min-h-[50px]"
              />
              {wins.length > 1 && (
                <Button
                  type="button"
                  onClick={() => handleRemoveWin(index)}
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700 self-start"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          type="button"
          onClick={handleAddWin}
          variant="outline"
          size="sm"
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Win
        </Button>
      </div>

      {/* Blockers */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Blockers & Challenges</h3>
        <div className="space-y-2">
          {blockers.map((blocker, index) => (
            <div key={index} className="flex gap-2">
              <Textarea
                value={blocker}
                onChange={(e) => handleBlockerChange(index, e.target.value)}
                placeholder="e.g., Waiting for feedback, unclear requirements, blocked by..."
                className="resize-none min-h-[50px]"
              />
              {blockers.length > 1 && (
                <Button
                  type="button"
                  onClick={() => handleRemoveBlocker(index)}
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700 self-start"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          type="button"
          onClick={handleAddBlocker}
          variant="outline"
          size="sm"
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Blocker
        </Button>
      </div>

      {/* Tomorrow's Focus */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Tomorrow's Focus</h3>
        <Textarea
          value={tomorrow}
          onChange={(e) => setTomorrow(e.target.value)}
          placeholder="What's your priority for tomorrow?"
          className="resize-none min-h-[80px]"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
        size="lg"
      >
        <CheckCircle2 className="h-5 w-5 mr-2" />
        Submit Daily Report
      </Button>
    </form>
  )
}
