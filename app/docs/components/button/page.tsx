'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, GitCompare, Loader2 } from 'lucide-react'

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Button</h1>
          <p className="text-muted-foreground mt-2">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              All available button variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Button>Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Icon Button */}
        <Card>
          <CardHeader>
            <CardTitle>Icon</CardTitle>
            <CardDescription>
              Button with icon only
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Button variant="outline" size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Icon */}
        <Card>
          <CardHeader>
            <CardTitle>With Icon</CardTitle>
            <CardDescription>
              Button with icon and text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button>
                <GitCompare className="h-4 w-4" />
                New Branch
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Button>
  <GitCompare className="h-4 w-4" />
  New Branch
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Loading */}
        <Card>
          <CardHeader>
            <CardTitle>Loading</CardTitle>
            <CardDescription>
              Button with loading spinner state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button onClick={handleLoading} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  'Click me'
                )}
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Please wait
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Available button sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* All Combinations */}
        <Card>
          <CardHeader>
            <CardTitle>All Combinations</CardTitle>
            <CardDescription>
              Grid of all variant and state combinations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-medium text-muted-foreground">Variant</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Default</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Disabled</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">With Icon</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    { variant: 'default', label: 'Primary' },
                    { variant: 'secondary', label: 'Secondary' },
                    { variant: 'destructive', label: 'Destructive' },
                    { variant: 'outline', label: 'Outline' },
                    { variant: 'ghost', label: 'Ghost' },
                    { variant: 'link', label: 'Link' },
                  ] as const).map(({ variant, label }) => (
                    <tr key={variant} className="border-b last:border-0">
                      <td className="py-3 pr-4 font-medium">{label}</td>
                      <td className="py-3 px-4">
                        <Button variant={variant}>{label}</Button>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant={variant} disabled>{label}</Button>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant={variant}>
                          <GitCompare className="h-4 w-4" />
                          {label}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
