'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AvatarPage() {
  // Figma design components - Direct exports from Figma design system
  const figmaDesigns = {
    circle: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f79e9deb-866a-4f63-b598-44147afd420f',
    square: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94e91b1e-e3aa-4488-96fe-a2d0f019dd1c',
    group: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29b24862-bdc3-46fd-a7f2-2c3333e64a12',
    full: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6073a2dc-e0b2-4ed7-bc0f-8d554a300706',
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Avatar Component</h1>
          <p className="text-lg text-muted-foreground">
            User avatars from shadcn/ui design system - Figma design reference
          </p>
        </div>

        {/* Full Design Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Overview</CardTitle>
            <CardDescription>Complete Avatar component design from Figma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto">
              <Image
                src={figmaDesigns.full}
                alt="Avatar Component Design Overview"
                width={1200}
                height={800}
                priority
                className="w-full h-auto rounded-lg border border-border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Circle Avatar Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Circle Avatar</CardTitle>
            <CardDescription>Circular avatar with image - Primary component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaDesigns.circle}
                alt="Circle Avatar Component"
                width={400}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Circular avatar component with rounded corners (radius: 100%). Supports image fill with proper aspect ratio constraints.
            </p>
          </CardContent>
        </Card>

        {/* Square Avatar Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Square Avatar</CardTitle>
            <CardDescription>Square avatar with rounded corners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaDesigns.square}
                alt="Square Avatar Component"
                width={400}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Square avatar component with slightly rounded corners. Maintains aspect ratio for all image sizes.
            </p>
          </CardContent>
        </Card>

        {/* Avatar Group Component */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Multiple avatars grouped together with overlap</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto flex justify-center p-8 bg-muted rounded-lg">
              <Image
                src={figmaDesigns.group}
                alt="Avatar Group Component"
                width={400}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Avatar group component showing multiple avatars stacked with negative margin spacing. Commonly used for displaying team members or user collaborators.
            </p>
          </CardContent>
        </Card>

        {/* Component Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Component Features</CardTitle>
            <CardDescription>Key characteristics and properties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Avatar Types</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Circle Avatar - Full rounded corners</li>
                <li>Square Avatar - Subtle rounded corners</li>
                <li>Avatar Group - Multiple stacked avatars</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Image Handling</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Supports image fills with FILL scale mode</li>
                <li>Maintains aspect ratio (1:1)</li>
                <li>Automatic fallback to initials when image unavailable</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Sizing</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Base size: 40px × 40px</li>
                <li>Scalable to various sizes via CSS</li>
                <li>Responsive constraints</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Group Spacing</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Negative margin for overlap effect</li>
                <li>Border around each avatar for separation</li>
                <li>Optional count badge for additional members</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Usage Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation Example</CardTitle>
            <CardDescription>How to use the Avatar component in your application</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>
{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Single Avatar
<Avatar>
  <AvatarImage src="..." alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>

// Avatar Group
<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
</div>

// Square Avatar
<Avatar className="rounded-md">
  <AvatarImage src="..." />
  <AvatarFallback className="rounded-md">SQ</AvatarFallback>
</Avatar>`}
              </code>
            </pre>
          </CardContent>
        </Card>

        {/* Design System Reference */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design System Reference</CardTitle>
            <CardDescription>Figma design source and tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-medium">File:</p>
              <p className="text-muted-foreground">shadcn/ui components with variables & Tailwind classes</p>
            </div>
            <div>
              <p className="font-medium">Components:</p>
              <p className="text-muted-foreground">Circle (455:365) • Square (455:364) • Avatar Group (455:363)</p>
            </div>
            <div>
              <p className="font-medium">Design Tokens:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-1">
                <li>Corner Radius Variable ID: VariableID:90:559</li>
                <li>Layout: Scalable (FIXED sizing with SCALE constraints)</li>
                <li>Aspect Ratio: 460x460 (square)</li>
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
