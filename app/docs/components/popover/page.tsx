'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PopoverPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Popover</h1>
          <p className="text-muted-foreground mt-2">
            Displays rich content in a portal, triggered by a button. Built on Radix UI Popover.
          </p>
        </div>

        {/* Basic Popover */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Popover</CardTitle>
            <CardDescription>
              A simple popover with text content triggered by a button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Popover Title</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a basic popover with some descriptive text content. It appears when you click the trigger button.
                  </p>
                </div>
              </PopoverContent>
            </Popover>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Popover Title</h4>
      <p className="text-sm text-muted-foreground">
        This is a basic popover with some descriptive text content.
      </p>
    </div>
  </PopoverContent>
</Popover>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Popover with Form */}
        <Card>
          <CardHeader>
            <CardTitle>Popover with Form</CardTitle>
            <CardDescription>
              A popover containing form fields for inline data entry
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Update Dimensions</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth">Max. width</Label>
                      <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxHeight">Max. height</Label>
                      <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Update Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Popover Placements */}
        <Card>
          <CardHeader>
            <CardTitle>Placement Options</CardTitle>
            <CardDescription>
              Popovers can be positioned on different sides of the trigger using the side and align props
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top" className="w-60">
                  <p className="text-sm">This popover appears above the trigger.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="w-60">
                  <p className="text-sm">This popover appears below the trigger.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left" className="w-60">
                  <p className="text-sm">This popover appears to the left of the trigger.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right" className="w-60">
                  <p className="text-sm">This popover appears to the right of the trigger.</p>
                </PopoverContent>
              </Popover>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top" className="w-60">
    <p className="text-sm">This popover appears above the trigger.</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Right</Button>
  </PopoverTrigger>
  <PopoverContent side="right" className="w-60">
    <p className="text-sm">This popover appears to the right of the trigger.</p>
  </PopoverContent>
</Popover>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
