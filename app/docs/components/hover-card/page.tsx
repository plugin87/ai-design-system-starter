'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function HoverCardPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Hover Card</h1>
          <p className="text-muted-foreground mt-2">
            A card that appears when hovering over a trigger element, useful for previewing
            content without navigating away.
          </p>
        </div>

        {/* Basic Hover Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Hover Card</CardTitle>
            <CardDescription>
              A simple hover card that shows additional information on hover.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Next.js</h4>
                    <p className="text-sm text-muted-foreground">
                      The React Framework for the Web. Used by some of the
                      world&apos;s largest companies, Next.js enables you to create
                      high-quality web applications with the power of React components.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        TypeScript
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated December 2024
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0">@shadcn</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">shadcn/ui</h4>
                    <p className="text-sm text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS. Open source and fully customizable.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        JavaScript
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated January 2025
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link" className="px-0">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Next.js</h4>
      <p className="text-sm text-muted-foreground">
        The React Framework for the Web.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Hover Card with Avatar and User Info */}
        <Card>
          <CardHeader>
            <CardTitle>Hover Card with Avatar and User Info</CardTitle>
            <CardDescription>
              A richer hover card displaying user profile information with an avatar,
              bio, and metadata.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@vercel</h4>
                      <p className="text-sm text-muted-foreground">
                        Develop. Preview. Ship. Creators of Next.js.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined December 2015
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm text-muted-foreground">
                        Building things for the web. Creator of shadcn/ui
                        and Taxonomy.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined March 2019
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">John Doe</span>
                    </div>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Full-stack developer passionate about React, TypeScript,
                        and building great user experiences.
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <span className="text-xs text-muted-foreground">
                          42 followers
                        </span>
                        <span className="text-xs text-muted-foreground">
                          18 following
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link" className="px-0 h-auto">
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@vercel</h4>
        <p className="text-sm text-muted-foreground">
          Develop. Preview. Ship. Creators of Next.js.
        </p>
        <div className="flex items-center pt-2">
          <span className="text-xs text-muted-foreground">
            Joined December 2015
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
