"use client"

import { useState } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DailyReportForm } from "@/components/daily-report-form"
import { DailyReportCard } from "@/components/daily-report-card"
import { Plus, Calendar } from "lucide-react"

export default function DailyReportPage() {
  const [showForm, setShowForm] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  // Mock data - replace with actual data fetching
  const mockReports = [
    {
      id: "1",
      user: {
        name: "Sarah Mitchell",
        initials: "SM",
        department: "Marketing",
        brand: "Warrior Systems",
      },
      date: selectedDate,
      powerMoves: [
        { name: "Client Discovery Calls", completed: 5, target: 5 },
        { name: "Story Scripts Written", completed: 2, target: 3 },
      ],
      wins: [
        "Closed 2 new client contracts worth $50K",
        "Completed marketing campaign strategy for Q1",
        "Team collaboration session was highly productive",
      ],
      blockers: ["Waiting on legal approval for new contract template"],
      learnings:
        "Discovered that shorter discovery calls (20 min) are more effective than 45 min sessions. Clients appreciate the focused approach.",
      tomorrow: [
        "Follow up with 3 pending proposals",
        "Review and approve team content calendar",
        "Schedule Q1 planning meeting with leadership",
      ],
    },
    {
      id: "2",
      user: {
        name: "John Doe",
        initials: "JD",
        department: "Sales",
        brand: "Story Marketing",
      },
      date: selectedDate,
      powerMoves: [
        { name: "Demo Presentations", completed: 4, target: 5 },
        { name: "Follow-up Calls", completed: 10, target: 10 },
      ],
      wins: ["Successfully demoed to Fortune 500 prospect", "Achieved 100% follow-up completion rate"],
      blockers: ["Technical issue with demo environment", "Prospect delayed decision to next quarter"],
      learnings: "Live demos with real data convert 40% better than generic presentations.",
      tomorrow: [
        "Fix demo environment issues",
        "Prepare proposal for Fortune 500 prospect",
        "Team pipeline review meeting",
      ],
    },
  ]

  const handleSubmitReport = (report: any) => {
    console.log("[v0] Submitted report:", report)
    setShowForm(false)
    // TODO: Save to database
  }

  return (
    <PageTransition>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <Breadcrumbs />

        {/* Simple Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 mb-1">Daily Report</h1>
          <p className="text-slate-600">Track your daily execution and power moves</p>
        </div>

        {/* Date Selector - Simple and Clear */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full max-w-xs px-4 py-3 border-2 border-slate-300 rounded-lg text-base font-semibold"
            />
          </div>
          <div className="pt-6">
            <Button 
              onClick={() => setShowForm(!showForm)} 
              size="lg" 
              className={showForm ? "bg-slate-400 hover:bg-slate-500" : "bg-orange-500 hover:bg-orange-600"}
            >
              {showForm ? "Cancel" : "New Report"}
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
          <p className="text-sm font-bold text-orange-900">Your daily reports feed Mission 50. Every execution counts toward your 50% salary increase.</p>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="mb-8 bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-2">What Did You Execute Today?</h2>
            <p className="text-slate-600 mb-6">Log your power moves, accomplishments, wins, blockers, and tomorrow's priorities.</p>
            <DailyReportForm onSubmit={handleSubmitReport} />
          </div>
        )}

        {/* Reports */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Reports for {new Date(selectedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</h2>
            <span className="text-sm text-slate-600">{mockReports.length} submitted</span>
          </div>

          {mockReports.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
              <Calendar className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">No reports submitted yet for this date</p>
            </div>
          ) : (
            <div className="space-y-4">
              {mockReports.map((report) => (
                <DailyReportCard key={report.id} report={report} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
