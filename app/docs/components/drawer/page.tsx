'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function DrawerPage() {
  const [goal, setGoal] = useState(350)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
          <p className="text-muted-foreground mt-2">
            A drawer component that slides in from the edge of the screen, built on top of Vaul.
          </p>
        </div>

        {/* Basic Drawer */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Drawer</CardTitle>
            <CardDescription>
              A simple bottom drawer with a title, description, and footer actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => setGoal(Math.max(200, goal - 10))}
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {goal}
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => setGoal(Math.min(500, goal + 10))}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4 pb-0">
      {/* Content */}
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Drawer with Form Content */}
        <Card>
          <CardHeader>
            <CardTitle>Drawer with Form Content</CardTitle>
            <CardDescription>
              A drawer containing form fields for collecting user input.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button>Create New Task</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>New Task</DrawerTitle>
                    <DrawerDescription>
                      Add a new task to your project board.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="task-title">Title</Label>
                      <Input id="task-title" placeholder="Enter task title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-desc">Description</Label>
                      <Input id="task-desc" placeholder="Enter description" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-assignee">Assignee</Label>
                      <Input id="task-assignee" placeholder="Assign to..." />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Create Task</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Drawer>
  <DrawerTrigger asChild>
    <Button>Create New Task</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>New Task</DrawerTitle>
        <DrawerDescription>Add a new task to your project board.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="task-title">Title</Label>
          <Input id="task-title" placeholder="Enter task title" />
        </div>
        {/* More fields... */}
      </div>
      <DrawerFooter>
        <Button>Create Task</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Drawer */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive Drawer</CardTitle>
            <CardDescription>
              A drawer that can be configured with different directions. On mobile, drawers
              typically slide up from the bottom. This example shows various directional options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Bottom (Default)</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Bottom Drawer</DrawerTitle>
                    <DrawerDescription>
                      This drawer slides up from the bottom of the screen.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Bottom drawers are the default behavior and work great on mobile
                      devices where users can swipe down to dismiss.
                    </p>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <Button variant="outline">Right Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Right Drawer</DrawerTitle>
                    <DrawerDescription>
                      This drawer slides in from the right side.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Right-side drawers are useful for settings panels, detail views,
                      or secondary navigation on larger screens.
                    </p>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button variant="outline">Left Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Left Drawer</DrawerTitle>
                    <DrawerDescription>
                      This drawer slides in from the left side.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Left-side drawers are commonly used for navigation menus
                      and sidebar content on mobile devices.
                    </p>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Bottom drawer (default) */}
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Bottom Drawer</DrawerTitle>
      <DrawerDescription>Slides up from the bottom.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

{/* Right drawer */}
<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">Right</Button>
  </DrawerTrigger>
  <DrawerContent>...</DrawerContent>
</Drawer>

{/* Left drawer */}
<Drawer direction="left">
  <DrawerTrigger asChild>
    <Button variant="outline">Left</Button>
  </DrawerTrigger>
  <DrawerContent>...</DrawerContent>
</Drawer>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
