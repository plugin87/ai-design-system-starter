'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Plus, HelpCircle, Info } from 'lucide-react'

export default function TooltipPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
          <p className="text-muted-foreground mt-2">
            A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        {/* Basic Tooltip */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Tooltip</CardTitle>
            <CardDescription>
              Hover over the button to see the tooltip
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Icon Button Tooltip */}
        <Card>
          <CardHeader>
            <CardTitle>Icon Button</CardTitle>
            <CardDescription>
              Tooltips are especially useful for icon-only buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add new item</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Get help</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More information</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Placement */}
        <Card>
          <CardHeader>
            <CardTitle>Placement</CardTitle>
            <CardDescription>
              Tooltips can be placed on different sides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Tooltip on top</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Tooltip on right</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Tooltip on left</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <div className="rounded-lg border p-4 bg-muted/50 mt-4">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Delay */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Delay</CardTitle>
            <CardDescription>
              Control the delay before the tooltip appears
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider delayDuration={0}>
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">No delay</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Appears instantly</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <div className="rounded-lg border p-4 bg-muted/50 mt-4">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">No delay</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Appears instantly</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
