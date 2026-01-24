'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AvatarPage() {
  // Figma Avatar Components - SVG exports from Figma source
  const figmaImages = {
    title: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8c92cf8-8d8d-4c24-98ca-be480ef2fed2',
    circle: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82d58430-9b3c-4cc9-bc58-a7a0a8de508e',
    square: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80602b85-3aaf-41a1-9ebd-95c931e8978c',
    group: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bf0f5fa-3f4d-4fb5-96ef-8c2abbf24057',
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Avatar Component</h1>
          <p className="text-lg text-muted-foreground">
            Figma Design System - Avatar Components
          </p>
        </div>

        {/* Title Frame from Figma */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex justify-center items-center">
              <img
                src={figmaImages.title}
                alt="Avatar Title from Figma"
                style={{ maxHeight: '120px', width: 'auto' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Circle Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Circle Avatar</CardTitle>
            <CardDescription>Circular avatar component from Figma design</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center py-8 bg-muted rounded-lg">
              <img
                src={figmaImages.circle}
                alt="Circle Avatar"
                style={{ height: '32px', width: 'auto' }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Specifications:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Full rounded corners (100% border radius)</li>
                <li>Image fill with FILL scale mode</li>
                <li>1:1 aspect ratio (32x32px base size)</li>
                <li>Scalable to any size maintaining proportions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Square Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Square Avatar</CardTitle>
            <CardDescription>Square avatar component with rounded corners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center py-8 bg-muted rounded-lg">
              <img
                src={figmaImages.square}
                alt="Square Avatar"
                style={{ height: '32px', width: 'auto' }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Specifications:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Square shape with subtle rounded corners</li>
                <li>Similar image handling as Circle variant</li>
                <li>1:1 aspect ratio (32x32px base size)</li>
                <li>Maintains aspect ratio for all image sizes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Multiple avatars grouped together with overlap</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center py-8 bg-muted rounded-lg">
              <img
                src={figmaImages.group}
                alt="Avatar Group"
                style={{ height: '32px', width: 'auto' }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Specifications:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Multiple avatars with negative margin spacing</li>
                <li>Borders around each avatar for separation</li>
                <li>Overlapping layout for visual hierarchy</li>
                <li>Commonly used for team members or collaborators</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Design Specifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Specifications</CardTitle>
            <CardDescription>Technical details and design tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm mb-3">Component Variants</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Circle</strong> (455:365) - Primary avatar with 100% border radius</li>
                <li>• <strong>Square</strong> (455:364) - Rounded square variant</li>
                <li>• <strong>Avatar Group</strong> (455:363) - Container for overlapping avatars</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Key Properties</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Base Size</p>
                  <p className="font-medium">40px × 40px</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Scale Mode</p>
                  <p className="font-medium">FILL</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Aspect Ratio</p>
                  <p className="font-medium">1:1</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Corner Radius</p>
                  <p className="font-medium">Variable</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Design Tokens</h4>
              <div className="bg-muted p-3 rounded text-xs space-y-1 font-mono">
                <p>Frame ID: 73:3473</p>
                <p>Corner Radius Variable: VariableID:90:559</p>
                <p>Layout: FIXED sizing, SCALE constraints</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
            <CardDescription>How to use Avatar components in shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Basic Usage</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Square Variant</p>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                <code>{`<Avatar className="rounded-md">
  <AvatarImage src="..." alt="User" />
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
