'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react'

export default function CommandPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Command</h1>
          <p className="text-muted-foreground mt-2">
            A fast, composable, unstyled command menu for React. Built on top of cmdk.
          </p>
        </div>

        {/* Basic Command */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Command</CardTitle>
            <CardDescription>
              An inline command palette with a search input and a list of commands.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Groups and Separators */}
        <Card>
          <CardHeader>
            <CardTitle>With Groups and Separators</CardTitle>
            <CardDescription>
              Organize commands into multiple groups separated by dividers, with keyboard shortcuts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>Ctrl+P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>Ctrl+B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>Ctrl+S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      ...
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>Ctrl+P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>Ctrl+B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>Ctrl+S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Command Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Command Dialog</CardTitle>
            <CardDescription>
              A command palette presented in a dialog overlay, triggered by a button or keyboard shortcut.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm text-muted-foreground">
                Click the button below to open the command dialog.
              </p>
              <Button variant="outline" onClick={() => setOpen(true)}>
                Open Command Palette
              </Button>
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>Ctrl+P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>Ctrl+B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>Ctrl+S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [open, setOpen] = useState(false)

<Button variant="outline" onClick={() => setOpen(true)}>
  Open Command Palette
</Button>

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      ...
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>Ctrl+P</CommandShortcut>
      </CommandItem>
      ...
    </CommandGroup>
  </CommandList>
</CommandDialog>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
