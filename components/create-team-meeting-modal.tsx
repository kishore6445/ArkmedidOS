"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface MOMInput {
  id: string
  owner: string
  commitment: string
  dueDate: string
}

interface CreateTeamMeetingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  departmentName?: string
  teamMembers?: Array<{ id: string; name: string }>
  onSave?: (meetingData: any) => void
}

export function CreateTeamMeetingModal({
  open,
  onOpenChange,
  departmentName = "Department",
  teamMembers = [],
  onSave,
}: CreateTeamMeetingModalProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [hasChanges, setHasChanges] = useState(false)
  const dateInputRef = useRef<HTMLInputElement>(null)

  // Form state
  const [meetingDate, setMeetingDate] = useState("")
  const [attendees, setAttendees] = useState<string[]>([])
  const [attendeeInput, setAttendeeInput] = useState("")
  const [moms, setMoms] = useState<MOMInput[]>([
    { id: "1", owner: "", commitment: "", dueDate: "" },
  ])
  const [notes, setNotes] = useState("")

  const validateField = (field: string, value: any) => {
    const newErrors = { ...errors }

    switch (field) {
      case "meetingDate":
        if (!value) {
          newErrors.meetingDate = "Meeting date is required"
        } else {
          delete newErrors.meetingDate
        }
        break
      case "attendees":
        if (!value || value.length === 0) {
          newErrors.attendees = "At least one attendee is required"
        } else {
          delete newErrors.attendees
        }
        break
    }

    setErrors(newErrors)
  }

  const handleAddAttendee = () => {
    if (attendeeInput.trim() && !attendees.includes(attendeeInput)) {
      setAttendees([...attendees, attendeeInput])
      setAttendeeInput("")
      setHasChanges(true)
    }
  }

  const handleRemoveAttendee = (attendee: string) => {
    setAttendees(attendees.filter((a) => a !== attendee))
    setHasChanges(true)
  }

  const handleAddMOM = () => {
    setMoms([
      ...moms,
      { id: Date.now().toString(), owner: "", commitment: "", dueDate: "" },
    ])
    setHasChanges(true)
  }

  const handleRemoveMOM = (id: string) => {
    if (moms.length > 1) {
      setMoms(moms.filter((m) => m.id !== id))
      setHasChanges(true)
    }
  }

  const handleMOMChange = (id: string, field: string, value: string) => {
    setMoms(
      moms.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    )
    setHasChanges(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}

    if (!meetingDate) {
      newErrors.meetingDate = "Meeting date is required"
    }
    if (attendees.length === 0) {
      newErrors.attendees = "At least one attendee is required"
    }

    // Validate MOMs
    const hasValidMOM = moms.some(
      (m) => m.owner.trim() && m.commitment.trim() && m.dueDate
    )
    if (!hasValidMOM) {
      newErrors.moms = "Add at least one commitment (MOM)"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      const meetingData = {
        date: meetingDate,
        attendees,
        attendeeCount: attendees.length,
        moms: moms.filter((m) => m.owner.trim() && m.commitment.trim()),
        notes,
      }

      toast({
        title: "Success!",
        description: `Meeting created for ${departmentName}`,
      })

      if (onSave) {
        onSave(meetingData)
      }

      // Reset form
      setMeetingDate("")
      setAttendees([])
      setAttendeeInput("")
      setMoms([{ id: "1", owner: "", commitment: "", dueDate: "" }])
      setNotes("")
      setErrors({})
      setHasChanges(false)
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create meeting. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && hasChanges) {
      const confirm = window.confirm("You have unsaved changes. Are you sure you want to close?")
      if (!confirm) return
    }
    onOpenChange(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Team Meeting</DialogTitle>
          <DialogDescription>
            Record meeting notes and commitments (MOMs) for {departmentName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Meeting Date */}
          <div className="space-y-2">
            <Label htmlFor="meeting-date" className="text-sm font-bold">
              Meeting Date <span className="text-red-500">*</span>
            </Label>
            <Input
              ref={dateInputRef}
              id="meeting-date"
              type="date"
              value={meetingDate}
              onChange={(e) => {
                setMeetingDate(e.target.value)
                validateField("meetingDate", e.target.value)
                setHasChanges(true)
              }}
              className={cn(
                errors.meetingDate && "border-red-500"
              )}
            />
            {errors.meetingDate && (
              <p className="text-xs text-red-500">{errors.meetingDate}</p>
            )}
          </div>

          {/* Attendees */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">
              Attendees <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="Enter attendee name"
                value={attendeeInput}
                onChange={(e) => setAttendeeInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddAttendee()
                  }
                }}
              />
              <Button
                type="button"
                onClick={handleAddAttendee}
                variant="outline"
                className="px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {attendees.map((attendee) => (
                <div
                  key={attendee}
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {attendee}
                  <button
                    type="button"
                    onClick={() => handleRemoveAttendee(attendee)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {errors.attendees && (
              <p className="text-xs text-red-500">{errors.attendees}</p>
            )}
          </div>

          {/* Commitments (MOMs) */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">
              Commitments (MOMs) <span className="text-red-500">*</span>
            </Label>
            <p className="text-xs text-slate-500 mb-3">Who committed to what by when?</p>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {moms.map((mom) => (
                <div key={mom.id} className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label className="text-xs font-semibold mb-1 block">Owner</Label>
                      <Input
                        placeholder="Person responsible"
                        value={mom.owner}
                        onChange={(e) =>
                          handleMOMChange(mom.id, "owner", e.target.value)
                        }
                        className="text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label className="text-xs font-semibold mb-1 block">Commitment</Label>
                      <Input
                        placeholder="What must be done?"
                        value={mom.commitment}
                        onChange={(e) =>
                          handleMOMChange(mom.id, "commitment", e.target.value)
                        }
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-end gap-3">
                    <div className="flex-1">
                      <Label className="text-xs font-semibold mb-1 block">Due Date</Label>
                      <Input
                        type="date"
                        value={mom.dueDate}
                        onChange={(e) =>
                          handleMOMChange(mom.id, "dueDate", e.target.value)
                        }
                        className="text-sm"
                      />
                    </div>
                    {moms.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => handleRemoveMOM(mom.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="button"
              onClick={handleAddMOM}
              variant="outline"
              className="w-full text-blue-600 border-blue-300 hover:bg-blue-50"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Commitment
            </Button>

            {errors.moms && (
              <p className="text-xs text-red-500">{errors.moms}</p>
            )}
          </div>

          {/* Meeting Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-bold">
              Meeting Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Key discussion points, decisions, etc."
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value)
                setHasChanges(true)
              }}
              className="min-h-24"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Meeting"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
