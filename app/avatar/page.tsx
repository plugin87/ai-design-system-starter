'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AvatarPage() {
  // Figma component exports
  const figmaImages = {
    title: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8c92cf8-8d8d-4c24-98ca-be480ef2fed2',
    circle: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f79e9deb-866a-4f63-b598-44147afd420f',
    square: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94e91b1e-e3aa-4488-96fe-a2d0f019dd1c',
    group: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29b24862-bdc3-46fd-a7f2-2c3333e64a12',
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header from Figma */}
        <div className="mb-12">
          <div className="relative w-full h-auto mb-8">
            <Image
              src={figmaImages.title}
              alt="Avatar Component Title"
              width={600}
              height={150}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Circle Avatar Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Circle Avatar</CardTitle>
            <CardDescription>Circular avatar component with image</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaImages.circle}
                alt="Circle Avatar"
                width={600}
                height={300}
                className="w-full h-auto max-w-md"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Component Details:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Circular shape with full rounded corners (100%)</li>
                <li>Image fill with FILL scale mode</li>
                <li>1:1 aspect ratio (square dimensions)</li>
                <li>Scalable to various sizes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Square Avatar Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Square Avatar</CardTitle>
            <CardDescription>Square avatar component with rounded corners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaImages.square}
                alt="Square Avatar"
                width={600}
                height={300}
                className="w-full h-auto max-w-md"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Component Details:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Square shape with subtle rounded corners</li>
                <li>Similar image handling as Circle variant</li>
                <li>Maintains aspect ratio</li>
                <li>Flexible sizing options</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Group Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Multiple avatars grouped together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaImages.group}
                alt="Avatar Group"
                width={600}
                height={300}
                className="w-full h-auto max-w-md"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Component Details:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Multiple avatars with overlap effect</li>
                <li>Negative margin spacing</li>
                <li>Borders around each avatar for separation</li>
                <li>Commonly used for team members or collaborators</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Design Specifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Specifications</CardTitle>
            <CardDescription>Avatar component design tokens and properties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm mb-3">Component Types</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-sm">Circle Avatar</p>
                  <p className="text-xs text-muted-foreground mt-1">Primary avatar component with full rounded corners</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-sm">Square Avatar</p>
                  <p className="text-xs text-muted-foreground mt-1">Alternative variant with subtle rounded corners</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-sm">Avatar Group</p>
                  <p className="text-xs text-muted-foreground mt-1">Container for multiple overlapping avatars</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Key Properties</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Base Size</p>
                  <p className="text-sm font-medium mt-1">40px × 40px</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Scale Mode</p>
                  <p className="text-sm font-medium mt-1">FILL (maintains aspect ratio)</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Aspect Ratio</p>
                  <p className="text-sm font-medium mt-1">1:1 (square)</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Corner Radius</p>
                  <p className="text-sm font-medium mt-1">Variable (100% or subtle rounded)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Design Tokens</h4>
              <div className="bg-muted p-3 rounded text-xs space-y-1 font-mono">
                <p>Corner Radius Variable: VariableID:90:559</p>
                <p>Layout: Scalable (FIXED sizing with SCALE constraints)</p>
                <p>Component IDs:</p>
                <p className="pl-4">• Circle: 455:365</p>
                <p className="pl-4">• Square: 455:364</p>
                <p className="pl-4">• Group: 455:363</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
            <CardDescription>How to use the Avatar component in shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Installation</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>npx shadcn-ui@latest add avatar</code>
              </pre>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Basic Usage (Circle Avatar)</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function CircleAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://..." alt="User" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  )
}`}</code>
              </pre>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Square Avatar Variant</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`<Avatar className="rounded-md">
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback className="rounded-md">UN</AvatarFallback>
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
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Design System Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design System Reference</CardTitle>
            <CardDescription>Figma design system details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="font-medium">File Name:</p>
              <p className="text-muted-foreground">shadcn/ui components with variables & Tailwind classes</p>
            </div>
            <div>
              <p className="font-medium">Frame ID:</p>
              <p className="text-muted-foreground">73:3473 (Avatar)</p>
            </div>
            <div>
              <p className="font-medium">Component Variants:</p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Circle (455:365) - Primary variant</li>
                <li>Square (455:364) - Rounded square variant</li>
                <li>Avatar_group (455:363) - Group container</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Design System Features:</p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Design tokens with CSS variables</li>
                <li>Tailwind CSS compatible</li>
                <li>Responsive scaling constraints</li>
                <li>Flexible sizing and positioning</li>
              </ul>
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
