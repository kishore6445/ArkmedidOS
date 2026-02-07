"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type PersonalTarget = {
  id: string
  employeeId: string
  employeeName: string
  quarter: "Q1" | "Q2" | "Q3" | "Q4"
  victoryTargetId: string
  victoryTargetName: string
  targetValue: number
  currentValue: number
  status: "On Track" | "At Risk" | "Behind"
  createdAt: string
}

type VictoryTarget = {
  id: string
  name: string
  department: string
}

export function PersonalVictoryTargetManagement() {
  const [personalTargets, setPersonalTargets] = useState<PersonalTarget[]>([
    {
      id: "1",
      employeeId: "emp-001",
      employeeName: "Anantha Kumar",
      quarter: "Q1",
      victoryTargetId: "vt-1",
      victoryTargetName: "Recruit 100 resources",
      targetValue: 25,
      currentValue: 10,
      status: "At Risk",
      createdAt: "2026-01-15",
    },
    {
      id: "2",
      employeeId: "emp-002",
      employeeName: "Ravi Anan",
      quarter: "Q1",
      victoryTargetId: "vt-2",
      victoryTargetName: "Generate 100 leads",
      targetValue: 30,
      currentValue: 28,
      status: "On Track",
      createdAt: "2026-01-15",
    },
    {
      id: "3",
      employeeId: "emp-001",
      employeeName: "Anantha Kumar",
      quarter: "Q2",
      victoryTargetId: "vt-1",
      victoryTargetName: "Recruit 100 resources",
      targetValue: 25,
      currentValue: 0,
      status: "Behind",
      createdAt: "2026-01-15",
    },
  ])

  const [victoryTargets, setVictoryTargets] = useState<VictoryTarget[]>([
    { id: "vt-1", name: "Recruit 100 resources", department: "Marketing" },
    { id: "vt-2", name: "Generate 100 leads", department: "Sales" },
    { id: "vt-3", name: "Close 50 deals", department: "Sales" },
  ])

  const [selectedQuarter, setSelectedQuarter] = useState("Q1")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEmployee, setSelectedEmployee] = useState("")
  const [error, setError] = useState("")

  const filteredTargets = personalTargets.filter((target) => {
    const matchesQuarter = target.quarter === selectedQuarter
    const matchesSearch =
      target.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      target.victoryTargetName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesQuarter && matchesSearch
  })

  // Get unique employees
  const employees = Array.from(new Set(personalTargets.map((t) => t.employeeId)))
    .map((id) => personalTargets.find((t) => t.employeeId === id))
    .filter((t) => t !== undefined) as PersonalTarget[]

  const handleAddTarget = () => {
    if (!selectedEmployee) {
      setError("Please select an employee first")
      return
    }

    // Check if employee already has 2 targets for this quarter
    const employeeTargetsThisQuarter = personalTargets.filter(
      (t) => t.employeeId === selectedEmployee && t.quarter === selectedQuarter
    )

    if (employeeTargetsThisQuarter.length >= 2) {
      setError(`${employeeTargetsThisQuarter[0]?.employeeName || "This employee"} already has 2 targets for ${selectedQuarter}`)
      setTimeout(() => setError(""), 3000)
      return
    }

    const employeeName = personalTargets.find((t) => t.employeeId === selectedEmployee)?.employeeName || "New Employee"

    const newTarget: PersonalTarget = {
      id: `pt-${Date.now()}`,
      employeeId: selectedEmployee,
      employeeName,
      quarter: selectedQuarter as "Q1" | "Q2" | "Q3" | "Q4",
      victoryTargetId: "",
      victoryTargetName: "Select Victory Target",
      targetValue: 0,
      currentValue: 0,
      status: "Behind",
      createdAt: new Date().toISOString().split("T")[0],
    }
    setPersonalTargets([...personalTargets, newTarget])
    setSelectedEmployee("")
    setError("")
  }

  const handleDeleteTarget = (id: string) => {
    setPersonalTargets(personalTargets.filter((t) => t.id !== id))
  }

  const handleUpdateTarget = (id: string, updates: Partial<PersonalTarget>) => {
    setPersonalTargets(personalTargets.map((t) => (t.id === id ? { ...t, ...updates } : t)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-800"
      case "At Risk":
        return "bg-amber-100 text-amber-800"
      case "Behind":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressPercentage = (current: number, target: number) => {
    if (target === 0) return 0
    return Math.round((current / target) * 100)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Personal Victory Targets</h1>
          <p className="text-gray-600">
            Assign quarterly targets to individuals linked to company Victory Targets. Each employee's Power Moves roll
            up to these targets.
          </p>
        </div>
        <Button onClick={handleAddTarget} className="bg-blue-600 hover:bg-blue-700 gap-2">
          <Plus className="w-4 h-4" />
          Add Personal Target
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          {(["Q1", "Q2", "Q3", "Q4"] as const).map((quarter) => (
            <Button
              key={quarter}
              variant={selectedQuarter === quarter ? "default" : "outline"}
              onClick={() => setSelectedQuarter(quarter)}
              className={selectedQuarter === quarter ? "bg-blue-600" : ""}
            >
              {quarter}
            </Button>
          ))}
        </div>
        <Input
          placeholder="Search employee or target..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
      </div>

      {/* Employee Selection and Add Target */}
      <div className="border rounded-lg p-4 bg-blue-50">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Employee to Add Target</label>
            <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
              <SelectTrigger>
                <SelectValue placeholder="Choose an employee" />
              </SelectTrigger>
              <SelectContent>
                {employees.map((emp) => (
                  <SelectItem key={emp.employeeId} value={emp.employeeId}>
                    {emp.employeeName} ({personalTargets.filter((t) => t.employeeId === emp.employeeId && t.quarter === selectedQuarter).length}/2 targets for {selectedQuarter})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleAddTarget} className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Plus className="w-4 h-4" />
            Add Target
          </Button>
        </div>
        {error && <p className="text-red-600 text-sm mt-2 font-semibold">{error}</p>}
        <p className="text-xs text-gray-600 mt-2">Each employee can have up to 2 targets per quarter</p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Employee</TableHead>
              <TableHead>Victory Target</TableHead>
              <TableHead className="text-right">Target</TableHead>
              <TableHead className="text-right">Current</TableHead>
              <TableHead className="text-right">Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTargets.map((target) => (
              <TableRow key={target.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{target.employeeName}</TableCell>
                <TableCell>
                  <div className="max-w-xs">
                    <p className="font-medium text-sm">{target.victoryTargetName}</p>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono font-semibold">{target.targetValue}</TableCell>
                <TableCell className="text-right font-mono">{target.currentValue}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${getProgressPercentage(target.currentValue, target.targetValue)}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 w-10 text-right">
                      {getProgressPercentage(target.currentValue, target.targetValue)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(target.status)}>{target.status}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => {
                          const newValue = prompt("Enter current value:", target.currentValue.toString())
                          if (newValue) {
                            const parsedValue = parseInt(newValue)
                            let status: "On Track" | "At Risk" | "Behind" = "Behind"
                            const progress = (parsedValue / target.targetValue) * 100
                            if (progress >= 70) status = "On Track"
                            else if (progress >= 50) status = "At Risk"

                            handleUpdateTarget(target.id, {
                              currentValue: parsedValue,
                              status,
                            })
                          }
                        }}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Update Value
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteTarget(target.id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredTargets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No personal targets for {selectedQuarter}. Create one to get started.</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="border rounded-lg p-6 bg-green-50">
          <p className="text-sm text-green-700 font-semibold mb-2">On Track</p>
          <p className="text-3xl font-bold text-green-900">
            {filteredTargets.filter((t) => t.status === "On Track").length}
          </p>
        </div>
        <div className="border rounded-lg p-6 bg-amber-50">
          <p className="text-sm text-amber-700 font-semibold mb-2">At Risk</p>
          <p className="text-3xl font-bold text-amber-900">
            {filteredTargets.filter((t) => t.status === "At Risk").length}
          </p>
        </div>
        <div className="border rounded-lg p-6 bg-red-50">
          <p className="text-sm text-red-700 font-semibold mb-2">Behind</p>
          <p className="text-3xl font-bold text-red-900">
            {filteredTargets.filter((t) => t.status === "Behind").length}
          </p>
        </div>
      </div>
    </div>
  )
}
