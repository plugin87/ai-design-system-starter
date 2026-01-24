'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Avatar</h1>
          <p className="text-lg text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>

        {/* Circle Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Circle</CardTitle>
            <CardDescription>Circular avatar component</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center py-8">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        {/* Square Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Square</CardTitle>
            <CardDescription>Square avatar component with rounded corners</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center py-8">
            <Avatar className="rounded-md h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="rounded-md">CN</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        {/* Avatar Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Multiple avatars grouped together</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center py-8">
            <div className="flex -space-x-4">
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 2" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 3" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Avatar in different sizes</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center gap-8 py-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">Small (32px)</p>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">Medium (40px)</p>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">Large (48px)</p>
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Fallback */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fallback</CardTitle>
            <CardDescription>Avatar fallback when image fails to load</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center gap-4 py-8">
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.png" />
              <AvatarFallback>XY</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
            <CardDescription>How to use Avatar component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Basic Circle Avatar</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="..." alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Square Avatar</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`<Avatar className="rounded-md">
  <AvatarImage src="..." alt="User" />
  <AvatarFallback className="rounded-md">SQ</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Avatar Group</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline">
            <a href="/components">← Back to Components</a>
          </Button>
          <Button asChild>
            <a href="/">→ Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
