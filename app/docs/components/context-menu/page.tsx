'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Context Menu</h1>
          <p className="text-muted-foreground mt-2">
            Displays a menu to the user on right-click, providing additional actions relevant to the context. Built on Radix UI Context Menu.
          </p>
        </div>

        {/* Basic Context Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Context Menu</CardTitle>
            <CardDescription>
              Right-click the area below to open a context menu with simple actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Forward
                  <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload
                  <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Save As...
                  <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Print...</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Forward
      <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Reload
      <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Save As...</ContextMenuItem>
    <ContextMenuItem>Print...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Sub-menus */}
        <Card>
          <CardHeader>
            <CardTitle>With Sub-menus</CardTitle>
            <CardDescription>
              Context menus can contain nested sub-menus for organizing grouped actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Forward
                  <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Save Page As...</ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Email Link</ContextMenuItem>
                    <ContextMenuItem>Messages</ContextMenuItem>
                    <ContextMenuItem>AirDrop</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  View Page Source
                  <ContextMenuShortcut>Ctrl+U</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Email Link</ContextMenuItem>
        <ContextMenuItem>Messages</ContextMenuItem>
        <ContextMenuItem>AirDrop</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>View Page Source</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Checkbox and Radio Items */}
        <Card>
          <CardHeader>
            <CardTitle>With Checkbox and Radio Items</CardTitle>
            <CardDescription>
              Context menus support checkbox items for toggleable options and radio groups for single-select choices.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Forward
                  <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Appearance</ContextMenuLabel>
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Show Bookmarks Bar
                  <ContextMenuShortcut>Ctrl+B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>People</ContextMenuLabel>
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    Colm Tuite
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>

            <div className="text-sm text-muted-foreground">
              <p>Show Bookmarks: <code className="rounded bg-muted px-1 py-0.5">{String(showBookmarks)}</code></p>
              <p>Show Full URLs: <code className="rounded bg-muted px-1 py-0.5">{String(showFullUrls)}</code></p>
              <p>Selected person: <code className="rounded bg-muted px-1 py-0.5">{person}</code></p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [showBookmarks, setShowBookmarks] = useState(true)
const [showFullUrls, setShowFullUrls] = useState(false)
const [person, setPerson] = useState('pedro')

<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>Appearance</ContextMenuLabel>
    <ContextMenuCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks Bar
      <ContextMenuShortcut>Ctrl+B</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showFullUrls}
      onCheckedChange={setShowFullUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>People</ContextMenuLabel>
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuRadioItem value="pedro">
        Pedro Duarte
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">
        Colm Tuite
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
