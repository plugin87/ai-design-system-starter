'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Skeleton</h1>
          <p className="text-muted-foreground mt-2">
            Use to show a placeholder while content is loading.
          </p>
        </div>

        {/* Basic Skeleton Shapes */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Shapes</CardTitle>
            <CardDescription>
              Skeleton elements in various shapes and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Circle</p>
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Rectangle</p>
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Square</p>
                <Skeleton className="h-20 w-20" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Full width</p>
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Circle */}
<Skeleton className="h-12 w-12 rounded-full" />

{/* Rectangle */}
<Skeleton className="h-4 w-[250px]" />

{/* Square */}
<Skeleton className="h-20 w-20" />

{/* Full width */}
<Skeleton className="h-4 w-full" />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Card Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>Card Skeleton</CardTitle>
            <CardDescription>
              A skeleton layout mimicking a card with image, title, and description
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-[250px] rounded-lg border p-4 space-y-3">
                  <Skeleton className="h-[125px] w-full rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="w-[250px] rounded-lg border p-4 space-y-3">
  <Skeleton className="h-[125px] w-full rounded-lg" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Profile Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Skeleton</CardTitle>
            <CardDescription>
              A skeleton layout for a user profile with avatar, name, and bio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-[180px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Small profile */}
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>

{/* Larger profile */}
<div className="flex items-center space-x-4">
  <Skeleton className="h-16 w-16 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-5 w-[180px]" />
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* List Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>List Skeleton</CardTitle>
            <CardDescription>
              A skeleton layout for a list of items with icons and text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/5" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                  <Skeleton className="h-8 w-16 rounded" />
                </div>
              ))}
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{Array.from({ length: 5 }).map((_, i) => (
  <div key={i} className="flex items-center space-x-4">
    <Skeleton className="h-10 w-10 rounded" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-3/5" />
      <Skeleton className="h-3 w-4/5" />
    </div>
    <Skeleton className="h-8 w-16 rounded" />
  </div>
))}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
