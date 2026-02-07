'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  MoreHorizontal,
  Search,
  AudioLines,
  ChevronDown,
  Bot,
  VolumeOff,
  Check,
  TriangleAlert,
  UserRoundX,
  Upload,
  Copy,
  Trash,
} from 'lucide-react'

export default function ButtonGroupPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Button Group</h1>
          <p className="text-muted-foreground mt-2">
            A container that groups related buttons together with consistent styling.
          </p>
        </div>

        {/* Button Group - Toolbar */}
        <Card>
          <CardHeader>
            <CardTitle>Button Group</CardTitle>
            <CardDescription>
              Toolbar-style button group with mixed content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="inline-flex items-center rounded-md border">
              <Button variant="ghost" size="icon" className="rounded-none rounded-l-md border-r">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="rounded-none border-r">Archive</Button>
              <Button variant="ghost" className="rounded-none border-r">Report</Button>
              <Button variant="ghost" className="rounded-none">Snooze</Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="inline-flex items-center rounded-md border">
  <Button variant="ghost" size="icon" className="rounded-none rounded-l-md border-r">
    <ArrowLeft className="h-4 w-4" />
  </Button>
  <Button variant="ghost" className="rounded-none border-r">Archive</Button>
  <Button variant="ghost" className="rounded-none border-r">Report</Button>
  <Button variant="ghost" className="rounded-none">Snooze</Button>
  <Separator orientation="vertical" className="h-6" />
  <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
    <MoreHorizontal className="h-4 w-4" />
  </Button>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Orientation (Vertical) */}
        <Card>
          <CardHeader>
            <CardTitle>Orientation</CardTitle>
            <CardDescription>
              Vertical button group for increment/decrement controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="inline-flex flex-col rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none rounded-t-md border-b h-8 w-8"
                  onClick={() => setCount(c => c + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none rounded-b-md h-8 w-8"
                  onClick={() => setCount(c => c - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">Count: {count}</span>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Button groups in small, default, and large sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {([
              { size: 'sm' as const, label: 'Small' },
              { size: 'default' as const, label: 'Default' },
              { size: 'lg' as const, label: 'Large' },
            ]).map(({ size, label }) => (
              <div key={size}>
                <p className="text-sm text-muted-foreground mb-2">{label}</p>
                <div className="inline-flex items-center rounded-md border">
                  <Button variant="ghost" size={size} className="rounded-none rounded-l-md border-r">
                    {label}
                  </Button>
                  <Button variant="ghost" size={size} className="rounded-none border-r">
                    Button
                  </Button>
                  <Button variant="ghost" size={size} className="rounded-none border-r">
                    Group
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Nested */}
        <Card>
          <CardHeader>
            <CardTitle>Nested</CardTitle>
            <CardDescription>
              Nested button groups with pagination-style controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-md border">
                <Button variant="ghost" className="rounded-none rounded-l-md border-r">1</Button>
                <Button variant="ghost" className="rounded-none border-r">2</Button>
                <Button variant="ghost" className="rounded-none border-r">3</Button>
                <Button variant="ghost" className="rounded-none border-r">4</Button>
                <Button variant="ghost" className="rounded-none rounded-r-md">5</Button>
              </div>
              <div className="inline-flex items-center rounded-md border">
                <Button variant="ghost" size="icon" className="rounded-none rounded-l-md border-r">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Separator */}
        <Card>
          <CardHeader>
            <CardTitle>Separator</CardTitle>
            <CardDescription>
              Button group with visual separator between items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center rounded-md border">
              <Button variant="ghost" className="rounded-none rounded-l-md">Copy</Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" className="rounded-none rounded-r-md">Paste</Button>
            </div>
          </CardContent>
        </Card>

        {/* Split Button */}
        <Card>
          <CardHeader>
            <CardTitle>Split</CardTitle>
            <CardDescription>
              Split button with primary action and secondary trigger
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center rounded-md border">
              <Button variant="ghost" className="rounded-none rounded-l-md">Button</Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Input */}
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>
              Search input with attached button
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center max-w-sm">
              <Input
                placeholder="Search..."
                className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="outline" size="icon" className="rounded-l-none shrink-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Input Group */}
        <Card>
          <CardHeader>
            <CardTitle>Input Group</CardTitle>
            <CardDescription>
              Input with buttons on both sides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center max-w-md w-full">
              <Button variant="outline" size="icon" className="rounded-r-none shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Send a message..."
                className="rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="outline" size="icon" className="rounded-l-none shrink-0">
                <AudioLines className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dropdown Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu</CardTitle>
            <CardDescription>
              Button group with dropdown menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center rounded-md border">
              <Button variant="ghost" className="rounded-none rounded-l-md">Follow</Button>
              <Separator orientation="vertical" className="h-6" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <VolumeOff className="h-4 w-4" />
                    Mute Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Check className="h-4 w-4" />
                    Mark as Read
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TriangleAlert className="h-4 w-4" />
                    Report Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserRoundX className="h-4 w-4" />
                    Block User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Upload className="h-4 w-4" />
                    Share Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="h-4 w-4" />
                    Copy Conversation
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="h-4 w-4" />
                    Delete Conversation
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Select */}
        <Card>
          <CardHeader>
            <CardTitle>Select</CardTitle>
            <CardDescription>
              Button group with currency select input
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center rounded-md border">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-none rounded-l-md gap-1 font-normal">
                    $
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <span className="w-6">$</span> US Dollar
                    <Check className="h-4 w-4 ml-auto" />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="w-6">&euro;</span> Euro
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="w-6">&pound;</span> British Pound
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input
                defaultValue="10.00"
                className="rounded-none border-y-0 border-r-0 w-24 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" className="rounded-none rounded-r-md border-l">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popover */}
        <Card>
          <CardHeader>
            <CardTitle>Popover</CardTitle>
            <CardDescription>
              Button group with popover content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex items-center rounded-md border">
              <Button variant="ghost" className="rounded-none rounded-l-md gap-2">
                <Bot className="h-4 w-4" />
                Copilot
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">Agent Tasks</h4>
                    <div className="space-y-3">
                      <textarea
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring min-h-[80px] resize-none"
                        placeholder="Describe your task in natural language."
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Start a new task with Copilot</p>
                        <p className="text-xs text-muted-foreground">
                          Describe your task in natural language. Copilot will work in the background and open a pull request for your review.
                        </p>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
