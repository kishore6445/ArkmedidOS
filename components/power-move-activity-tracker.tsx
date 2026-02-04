"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface PowerMoveActivityTrackerProps {
  powerMoveId: string
  powerMoveName: string
  activityCompleted?: boolean
  weeklyTarget?: number
  weeklyActual?: number
  onToggle?: (completed: boolean) => void
}

export function PowerMoveActivityTracker({
  powerMoveId,
  powerMoveName,
  activityCompleted = false,
  weeklyTarget,
  weeklyActual = 0,
  onToggle,
}: PowerMoveActivityTrackerProps) {
  const [isCompleted, setIsCompleted] = useState(activityCompleted)
  const { toast } = useToast()

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newState = !isCompleted
    setIsCompleted(newState)

    // TODO: Save to backend
    console.log("[v0] Toggling Power Move activity:", powerMoveId, newState)

    toast({
      title: newState ? "Lead Measure Completed!" : "Lead Measure Unchecked",
      description: newState ? `Great work executing ${powerMoveName}` : `${powerMoveName} marked as incomplete`,
    })

    onToggle?.(newState)
  }

  return (
    <div className="space-y-2">
      {weeklyTarget && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">This Week's Activity</span>
          <Badge variant={weeklyActual >= weeklyTarget ? "default" : "secondary"} className="text-xs">
            {weeklyActual}/{weeklyTarget}
          </Badge>
        </div>
      )}
      <Button
        variant={isCompleted ? "default" : "outline"}
        size="sm"
        onClick={handleToggle}
        className={cn("w-full gap-2", isCompleted && "bg-green-600 hover:bg-green-700")}
      >
        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
        {isCompleted ? "Activity Done This Week" : "Mark Activity Complete"}
      </Button>
    </div>
  )
}
