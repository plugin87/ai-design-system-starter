'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const artworks = [
  { title: 'Sunset Over Mountains', artist: 'Jane Doe', year: '2023' },
  { title: 'Urban Skyline', artist: 'John Smith', year: '2022' },
  { title: 'Ocean Breeze', artist: 'Emily Clark', year: '2024' },
  { title: 'Forest Canopy', artist: 'Michael Brown', year: '2021' },
  { title: 'Desert Bloom', artist: 'Sarah Wilson', year: '2023' },
  { title: 'Starry Night Remix', artist: 'Alex Turner', year: '2024' },
  { title: 'City Lights', artist: 'Olivia Martinez', year: '2022' },
  { title: 'Autumn Leaves', artist: 'David Lee', year: '2023' },
]

export default function ScrollAreaPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Scroll Area</h1>
          <p className="text-muted-foreground mt-2">
            Augments native scroll functionality for custom, cross-browser styling.
          </p>
        </div>

        {/* Vertical Scroll Area */}
        <Card>
          <CardHeader>
            <CardTitle>Vertical Scroll Area</CardTitle>
            <CardDescription>
              A scrollable list of tags with a fixed height container
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
)

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Horizontal Scroll Area */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Scroll Area</CardTitle>
            <CardDescription>
              A horizontally scrollable area displaying artwork cards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                  <div key={artwork.title} className="w-[150px] shrink-0 space-y-1">
                    <div className="h-[200px] w-[150px] rounded-md bg-muted flex items-center justify-center">
                      <span className="text-xs text-muted-foreground text-center px-2">
                        {artwork.title}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <h3 className="font-medium leading-none truncate">{artwork.title}</h3>
                      <p className="text-xs text-muted-foreground">{artwork.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {artworks.map((artwork) => (
      <div key={artwork.title} className="w-[150px] shrink-0 space-y-1">
        <div className="h-[200px] w-[150px] rounded-md bg-muted" />
        <h3 className="font-medium leading-none">{artwork.title}</h3>
        <p className="text-xs text-muted-foreground">{artwork.artist}</p>
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Scroll Area with Both Axes */}
        <Card>
          <CardHeader>
            <CardTitle>Constrained Container</CardTitle>
            <CardDescription>
              A scroll area with both fixed width and height for dense content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Changelog</h4>
                <p className="text-sm text-muted-foreground">
                  Version 1.0 - Initial release with core components including Button,
                  Card, Dialog, and Form elements. Full accessibility support with
                  ARIA attributes and keyboard navigation.
                </p>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Version 1.1 - Added new components: ScrollArea, Select, Sheet,
                  Skeleton, and Slider. Improved theming system with CSS custom
                  properties and dark mode support.
                </p>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Version 1.2 - Performance improvements across all components.
                  Added animation support with Tailwind CSS transitions. New
                  Sonner toast integration for notifications.
                </p>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Version 1.3 - Complete documentation overhaul with live demos.
                  Added responsive design utilities and mobile-first components.
                  Bug fixes and stability improvements.
                </p>
              </div>
            </ScrollArea>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="space-y-4">
    <h4 className="text-sm font-medium">Changelog</h4>
    <p className="text-sm text-muted-foreground">
      Version 1.0 - Initial release...
    </p>
    <Separator />
    <p className="text-sm text-muted-foreground">
      Version 1.1 - Added new components...
    </p>
  </div>
</ScrollArea>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
