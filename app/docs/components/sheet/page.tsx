'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

export default function SheetPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Sheet</h1>
          <p className="text-muted-foreground mt-2">
            Extends the Dialog component to display content that complements the main content of the screen. Slides in from the edge of the screen.
          </p>
        </div>

        {/* Sheet from Each Side */}
        <Card>
          <CardHeader>
            <CardTitle>Side Variants</CardTitle>
            <CardDescription>
              Sheets can slide in from any edge of the screen: top, right, bottom, or left
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="capitalize">{side}</Button>
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>
                      <SheetTitle>Sheet from {side}</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the {side} edge of the screen.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Sheet content goes here. You can put any content inside a sheet.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              ))}
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

{SHEET_SIDES.map((side) => (
  <Sheet key={side}>
    <SheetTrigger asChild>
      <Button variant="outline">{side}</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Sheet from {side}</SheetTitle>
        <SheetDescription>
          This sheet slides in from the {side} edge.
        </SheetDescription>
      </SheetHeader>
      <div className="p-4">
        <p>Sheet content goes here.</p>
      </div>
    </SheetContent>
  </Sheet>
))}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Sheet with Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet with Form</CardTitle>
            <CardDescription>
              A sheet containing a form with input fields, commonly used for editing profile details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Edit Profile</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you are done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 p-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" defaultValue="john@example.com" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Sheet>
  <SheetTrigger asChild>
    <Button>Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="John Doe" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" defaultValue="@johndoe" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <SheetClose asChild>
        <Button>Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Default Right Sheet */}
        <Card>
          <CardHeader>
            <CardTitle>Default Sheet</CardTitle>
            <CardDescription>
              A basic right-side sheet with simple text content (the default side is right)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>
                    You have 3 unread messages.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 p-4">
                  <div className="rounded-lg border p-3 space-y-1">
                    <p className="text-sm font-medium">New deployment</p>
                    <p className="text-xs text-muted-foreground">Your project was deployed successfully.</p>
                  </div>
                  <div className="rounded-lg border p-3 space-y-1">
                    <p className="text-sm font-medium">New comment</p>
                    <p className="text-xs text-muted-foreground">Someone commented on your pull request.</p>
                  </div>
                  <div className="rounded-lg border p-3 space-y-1">
                    <p className="text-sm font-medium">Subscription renewed</p>
                    <p className="text-xs text-muted-foreground">Your Pro subscription has been renewed.</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
      <SheetDescription>
        You have 3 unread messages.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 p-4">
      {/* Content cards */}
    </div>
  </SheetContent>
</Sheet>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
