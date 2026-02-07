'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CircleCheck } from 'lucide-react'

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
          <p className="text-muted-foreground mt-2">
            Displays a badge or a component that looks like a badge.
          </p>
        </div>

        {/* Badge Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Badge comes in four standard variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Badge with Icon */}
        <Card>
          <CardHeader>
            <CardTitle>With Icon</CardTitle>
            <CardDescription>
              Badge with an icon for additional context
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <CircleCheck className="h-3 w-3" />
                Verified
              </Badge>
              <Badge className="gap-1">
                <CircleCheck className="h-3 w-3" />
                Active
              </Badge>
              <Badge variant="destructive" className="gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                Error
              </Badge>
              <Badge variant="outline" className="gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                Info
              </Badge>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Badge variant="secondary" className="gap-1">
  <CircleCheck className="h-3 w-3" />
  Verified
</Badge>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Number Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Number Badges</CardTitle>
            <CardDescription>
              Compact badges for displaying counts and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                8
              </Badge>
              <Badge variant="destructive" className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                99
              </Badge>
              <Badge variant="secondary" className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                20+
              </Badge>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Badge className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
  8
</Badge>
<Badge variant="destructive" className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
  99
</Badge>
<Badge variant="secondary" className="h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
  20+
</Badge>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              Common use cases for badges in UI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Notification count on button */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Notification count</p>
              <div className="flex items-center gap-6">
                <div className="relative inline-flex">
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                  </Button>
                  <Badge className="absolute -top-2 -right-2 h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                    3
                  </Badge>
                </div>
                <div className="relative inline-flex">
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </Button>
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                    12
                  </Badge>
                </div>
              </div>
            </div>

            {/* Status badges */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Status indicators</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <span className="text-sm">Payment</span>
                  <Badge className="gap-1">
                    <CircleCheck className="h-3 w-3" />
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <span className="text-sm">Shipping</span>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <span className="text-sm">Refund</span>
                  <Badge variant="destructive">Failed</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <span className="text-sm">Subscription</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
