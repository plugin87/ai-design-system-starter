'use client'

import { Toggle } from '@/components/ui/toggle'
import { Bold, Italic, Underline } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TogglePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Toggle</h1>
          <p className="text-muted-foreground mt-2">
            A two-state button that can be either on or off.
          </p>
        </div>

        {/* Default Toggle */}
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>
              A basic toggle with an icon.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Toggle with Text */}
        <Card>
          <CardHeader>
            <CardTitle>With Text</CardTitle>
            <CardDescription>
              A toggle that includes both an icon and text label.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
                Italic
              </Toggle>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
  Italic
</Toggle>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Outline Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Outline</CardTitle>
            <CardDescription>
              A toggle using the outline variant with a visible border.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle variant="outline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Toggle variant="outline" aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>
              A toggle in the disabled state, preventing user interaction.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle aria-label="Toggle bold" disabled>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle italic" disabled>
                <Italic className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Toggle aria-label="Toggle bold" disabled>
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle variant="outline" aria-label="Toggle italic" disabled>
  <Italic className="h-4 w-4" />
</Toggle>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Available toggle sizes: small, default, and large.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle size="sm" aria-label="Toggle bold small">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="default" aria-label="Toggle bold default">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Toggle bold large">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Toggle size="sm" aria-label="Toggle bold small">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle size="default" aria-label="Toggle bold default">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle size="lg" aria-label="Toggle bold large">
  <Bold className="h-4 w-4" />
</Toggle>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
