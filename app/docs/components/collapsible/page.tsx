'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Collapsible</h1>
          <p className="text-muted-foreground mt-2">
            An interactive component which expands and collapses a panel. Built on Radix UI Collapsible.
          </p>
        </div>

        {/* Basic Collapsible */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Collapsible</CardTitle>
            <CardDescription>
              A simple collapsible section with a trigger button to toggle visibility.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-[350px] space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [isOpen, setIsOpen] = useState(false)

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      @peduarte starred 3 repositories
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Collapsible List */}
        <Card>
          <CardHeader>
            <CardTitle>Collapsible List</CardTitle>
            <CardDescription>
              A collapsible section containing a list of items, useful for FAQ or settings panels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-[400px] space-y-3">
              <Collapsible
                open={isListOpen}
                onOpenChange={setIsListOpen}
              >
                <div className="flex items-center justify-between rounded-md border px-4 py-2">
                  <span className="text-sm font-medium">Project Dependencies (4)</span>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle dependencies</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <div className="mt-2 space-y-1">
                    {[
                      { name: 'react', version: '^18.2.0' },
                      { name: 'next', version: '^14.0.0' },
                      { name: 'tailwindcss', version: '^3.4.0' },
                      { name: 'typescript', version: '^5.3.0' },
                    ].map((dep) => (
                      <div
                        key={dep.name}
                        className="flex items-center justify-between rounded-md border px-4 py-2 text-sm"
                      >
                        <span className="font-mono">{dep.name}</span>
                        <span className="text-muted-foreground">{dep.version}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="flex items-center justify-between rounded-md border px-4 py-2">
                  <span className="text-sm font-medium">Dev Dependencies (2)</span>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle dev dependencies</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <div className="mt-2 space-y-1">
                    {[
                      { name: 'eslint', version: '^8.56.0' },
                      { name: 'prettier', version: '^3.2.0' },
                    ].map((dep) => (
                      <div
                        key={dep.name}
                        className="flex items-center justify-between rounded-md border px-4 py-2 text-sm"
                      >
                        <span className="font-mono">{dep.name}</span>
                        <span className="text-muted-foreground">{dep.version}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Collapsible open={isListOpen} onOpenChange={setIsListOpen}>
  <div className="flex items-center justify-between rounded-md border px-4 py-2">
    <span className="text-sm font-medium">Project Dependencies (4)</span>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent>
    <div className="mt-2 space-y-1">
      {dependencies.map((dep) => (
        <div key={dep.name} className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
          <span className="font-mono">{dep.name}</span>
          <span className="text-muted-foreground">{dep.version}</span>
        </div>
      ))}
    </div>
  </CollapsibleContent>
</Collapsible>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Default Open */}
        <Card>
          <CardHeader>
            <CardTitle>Default Open</CardTitle>
            <CardDescription>
              A collapsible section that starts in the open state using defaultOpen.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Collapsible defaultOpen className="w-[350px] space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  System Information
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 text-sm">
                  <span className="font-medium">OS:</span> macOS Sonoma
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  <span className="font-medium">Node:</span> v20.10.0
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  <span className="font-medium">Package Manager:</span> pnpm 8.14.0
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Collapsible defaultOpen className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">System Information</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">
      <span className="font-medium">OS:</span> macOS Sonoma
    </div>
    ...
  </CollapsibleContent>
</Collapsible>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
