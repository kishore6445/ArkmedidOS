"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

interface DailyReportFormProps {
  onSubmit: (report: any) => void
}

export function DailyReportForm({ onSubmit }: DailyReportFormProps) {
  const [dailyReport, setDailyReport] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!dailyReport.trim()) {
      alert("Please write your daily report")
      return
    }

    setIsSubmitting(true)
    try {
      onSubmit({
        report: dailyReport.trim(),
        date: new Date().toISOString(),
      })
      setDailyReport("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6 max-w-3xl">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-3">
            What did you execute today? What moved the needle?
          </label>
          <p className="text-sm text-slate-600 mb-4">
            Write naturally about your day. Include quantitative progress (e.g., "5 of 5 calls completed, 2 proposals sent") 
            and qualitative accomplishments. Share wins, blockers, and what matters for tomorrow.
          </p>
        </div>
        
        <Textarea
          value={dailyReport}
          onChange={(e) => setDailyReport(e.target.value)}
          placeholder="Example: Completed 5 client discovery calls today (on track). Closed one proposal worth $50K. Blocked waiting on design team feedback. Tomorrow: Follow up on 3 pending deals and start Q2 planning."
          className="resize-none min-h-[200px] text-base p-4"
        />

        <div className="text-xs text-slate-500 space-y-1">
          <p>Include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Quantitative progress (numbers, targets, completed items)</li>
            <li>Qualitative accomplishments (observations, improvements, learnings)</li>
            <li>Wins and highlights</li>
            <li>Blockers or challenges</li>
            <li>Tomorrow's focus or priorities</li>
          </ul>
        </div>
      </div>

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
    </form>
  )
}
