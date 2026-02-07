'use client'

import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SonnerPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Sonner</h1>
          <p className="text-muted-foreground mt-2">
            An opinionated toast component for React, powered by Sonner.
          </p>
        </div>

        {/* Note about Toaster */}
        <Card>
          <CardHeader>
            <CardTitle>Setup</CardTitle>
            <CardDescription>
              Important: The Toaster component must be added to your root layout for toasts to appear
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Add to your root layout (app/layout.tsx):</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Basic Toast */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Toast</CardTitle>
            <CardDescription>
              A simple toast notification with a message
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() => toast('Event has been created')}
            >
              Show Toast
            </Button>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`import { toast } from 'sonner'

<Button onClick={() => toast('Event has been created')}>
  Show Toast
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Success Toast */}
        <Card>
          <CardHeader>
            <CardTitle>Success Toast</CardTitle>
            <CardDescription>
              A toast indicating a successful operation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() => toast.success('Changes saved successfully')}
            >
              Show Success
            </Button>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`toast.success('Changes saved successfully')`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Error Toast */}
        <Card>
          <CardHeader>
            <CardTitle>Error Toast</CardTitle>
            <CardDescription>
              A toast indicating an error occurred
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() => toast.error('Something went wrong')}
            >
              Show Error
            </Button>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`toast.error('Something went wrong')`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Toast with Description */}
        <Card>
          <CardHeader>
            <CardTitle>Toast with Description</CardTitle>
            <CardDescription>
              A toast with both a title and a longer description
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() =>
                toast('Event has been created', {
                  description: 'Sunday, December 03, 2024 at 9:00 AM',
                })
              }
            >
              Show with Description
            </Button>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`toast('Event has been created', {
  description: 'Sunday, December 03, 2024 at 9:00 AM',
})`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Toast with Action */}
        <Card>
          <CardHeader>
            <CardTitle>Toast with Action</CardTitle>
            <CardDescription>
              A toast with an action button for user interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() =>
                toast('File has been deleted', {
                  description: 'The file "report.pdf" was moved to trash.',
                  action: {
                    label: 'Undo',
                    onClick: () => toast.success('File restored'),
                  },
                })
              }
            >
              Show with Action
            </Button>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`toast('File has been deleted', {
  description: 'The file "report.pdf" was moved to trash.',
  action: {
    label: 'Undo',
    onClick: () => toast.success('File restored'),
  },
})`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* All Toast Types */}
        <Card>
          <CardHeader>
            <CardTitle>All Toast Types</CardTitle>
            <CardDescription>
              Overview of all available toast variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" onClick={() => toast('Default toast message')}>
                Default
              </Button>
              <Button variant="outline" onClick={() => toast.success('Operation completed')}>
                Success
              </Button>
              <Button variant="outline" onClick={() => toast.error('An error occurred')}>
                Error
              </Button>
              <Button variant="outline" onClick={() => toast.warning('Please review your input')}>
                Warning
              </Button>
              <Button variant="outline" onClick={() => toast.info('New update available')}>
                Info
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 2000)),
                    {
                      loading: 'Loading...',
                      success: 'Data loaded successfully',
                      error: 'Failed to load data',
                    }
                  )
                }}
              >
                Promise
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`toast('Default toast message')
toast.success('Operation completed')
toast.error('An error occurred')
toast.warning('Please review your input')
toast.info('New update available')

toast.promise(fetchData(), {
  loading: 'Loading...',
  success: 'Data loaded successfully',
  error: 'Failed to load data',
})`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
