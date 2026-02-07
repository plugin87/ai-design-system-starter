'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
  ])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground mt-2">
            A date field component that allows users to enter and edit date values. Built on top of React Day Picker.
          </p>
        </div>

        {/* Single Date Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Single Date Selection</CardTitle>
            <CardDescription>
              Select a single date from the calendar. The selected date is highlighted.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <p className="text-sm text-muted-foreground">
                Selected date: {date ? date.toLocaleDateString() : 'None'}
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Date Range Display */}
        <Card>
          <CardHeader>
            <CardTitle>Date Range Display</CardTitle>
            <CardDescription>
              Display the calendar with a controlled selected date and formatted output.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="rounded-md border p-3 text-sm">
                <p><span className="font-medium">Selected:</span> {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected'}</p>
                <p><span className="font-medium">ISO format:</span> {date ? date.toISOString().split('T')[0] : 'N/A'}</p>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>
<p>
  Selected: {date?.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</p>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Calendar</CardTitle>
            <CardDescription>
              A calendar with fully controlled selected state and disabled past dates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
                className="rounded-md border"
              />
              <p className="text-sm text-muted-foreground">
                Past dates are disabled. Selected: {date ? date.toLocaleDateString() : 'None'}
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={{ before: new Date() }}
  className="rounded-md border"
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Months */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Months</CardTitle>
            <CardDescription>
              Display multiple months side by side for a broader date view.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                className="rounded-md border"
              />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
  className="rounded-md border"
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
