'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { BellRing, Check } from 'lucide-react'

export default function CardPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Card</h1>
          <p className="text-muted-foreground mt-2">
            Displays a card with header, content, and footer. Used to group related content and actions.
          </p>
        </div>

        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with a header and content area.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is the card content area. You can place any content here including text,
                  images, forms, or other components.
                </p>
              </CardContent>
            </Card>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content area.</p>
  </CardContent>
</Card>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Card with Footer */}
        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>
              A card that includes a footer area with action buttons.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Project Update</CardTitle>
                <CardDescription>Review the latest changes to the project.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  3 new commits have been pushed to the main branch. Review and approve the changes
                  before deploying.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Dismiss</Button>
                <Button>Review</Button>
              </CardFooter>
            </Card>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Project Update</CardTitle>
    <CardDescription>Review the latest changes.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>3 new commits have been pushed...</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Dismiss</Button>
    <Button>Review</Button>
  </CardFooter>
</Card>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Card with Form Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Card with Form Layout</CardTitle>
            <CardDescription>
              Cards are commonly used to wrap form inputs with a clear call to action.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>Deploy your new project in one click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Input id="framework" placeholder="e.g. Next.js, Remix" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Framework</Label>
          <Input id="framework" placeholder="e.g. Next.js, Remix" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Notification Card */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Card</CardTitle>
            <CardDescription>
              A card styled as a notification with icon, content, and action.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="w-[380px]">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <BellRing className="h-5 w-5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                </div>
                <div>
                  {[
                    { title: 'Your call has been confirmed.', time: '1 hour ago' },
                    { title: 'You have a new message!', time: '1 hour ago' },
                    { title: 'Your subscription is expiring soon!', time: '2 hours ago' },
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
              </CardFooter>
            </Card>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Card className="w-[380px]">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <BellRing className="h-5 w-5" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">Push Notifications</p>
        <p className="text-sm text-muted-foreground">
          Send notifications to device.
        </p>
      </div>
    </div>
    {notifications.map((notification, index) => (
      <div key={index} className="grid grid-cols-[25px_1fr] items-start pb-4">
        <span className="flex h-2 w-2 rounded-full bg-sky-500" />
        <div className="space-y-1">
          <p className="text-sm font-medium">{notification.title}</p>
          <p className="text-sm text-muted-foreground">{notification.time}</p>
        </div>
      </div>
    ))}
  </CardContent>
  <CardFooter>
    <Button className="w-full">
      <Check className="mr-2 h-4 w-4" /> Mark all as read
    </Button>
  </CardFooter>
</Card>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
