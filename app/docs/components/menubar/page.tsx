'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from '@/components/ui/menubar'

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Menubar</h1>
          <p className="text-muted-foreground mt-2">
            A visually persistent menu common in desktop applications. Provides quick access to a consistent set of commands.
          </p>
        </div>

        {/* Basic Menubar */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Menubar</CardTitle>
            <CardDescription>
              A simple menubar with File, Edit, and View menus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Toggle Fullscreen</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Menubar with Shortcuts */}
        <Card>
          <CardHeader>
            <CardTitle>With Keyboard Shortcuts</CardTitle>
            <CardDescription>
              Menu items displaying associated keyboard shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>Ctrl+N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    New Incognito Window
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Share <MenubarShortcut>Ctrl+Shift+S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut <MenubarShortcut>Ctrl+X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Select All <MenubarShortcut>Ctrl+A</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Zoom In <MenubarShortcut>Ctrl++</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Zoom Out <MenubarShortcut>Ctrl+-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Toggle Fullscreen <MenubarShortcut>F11</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Hide Sidebar <MenubarShortcut>Ctrl+B</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<MenubarItem>
  New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
</MenubarItem>
<MenubarItem disabled>
  New Incognito Window
</MenubarItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Menubar with Checkbox, Radio, and Sub Menus */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox, Radio Items, and Submenus</CardTitle>
            <CardDescription>
              Menubar with checkbox items, radio groups, and nested submenus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>Ctrl+N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email Link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem
                    checked={showBookmarks}
                    onCheckedChange={setShowBookmarks}
                  >
                    Show Bookmarks <MenubarShortcut>Ctrl+Shift+B</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showFullUrls}
                    onCheckedChange={setShowFullUrls}
                  >
                    Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Reload <MenubarShortcut>Ctrl+R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Force Reload <MenubarShortcut>Ctrl+Shift+R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Toggle Fullscreen</MenubarItem>
                  <MenubarItem>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value={person} onValueChange={setPerson}>
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <p className="text-sm text-muted-foreground">
              Bookmarks: {showBookmarks ? 'Visible' : 'Hidden'} | Full URLs: {showFullUrls ? 'Visible' : 'Hidden'} | Profile: {person}
            </p>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarSub>
      <MenubarSubTrigger>Share</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>Email Link</MenubarItem>
        <MenubarItem>Messages</MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
  </MenubarContent>
</MenubarMenu>

<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
      Show Bookmarks
    </MenubarCheckboxItem>
  </MenubarContent>
</MenubarMenu>

<MenubarMenu>
  <MenubarTrigger>Profiles</MenubarTrigger>
  <MenubarContent>
    <MenubarRadioGroup value={person} onValueChange={setPerson}>
      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
      <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
    </MenubarRadioGroup>
  </MenubarContent>
</MenubarMenu>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
