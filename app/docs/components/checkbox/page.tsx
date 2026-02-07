'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  const [items, setItems] = useState({
    recents: false,
    home: false,
    applications: true,
    desktop: false,
  })

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
          <p className="text-muted-foreground mt-2">
            A control that allows the user to toggle between checked and not checked. Built on Radix UI Checkbox.
          </p>
        </div>

        {/* Basic Checkbox */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Checkbox</CardTitle>
            <CardDescription>
              A standalone checkbox without any label.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Checkbox id="basic" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Checkbox id="basic" />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox with Label */}
        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>
              A checkbox paired with a label for better accessibility and click area.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled State */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled State</CardTitle>
            <CardDescription>
              A checkbox with controlled checked state managed via React useState.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="controlled"
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
              />
              <Label htmlFor="controlled">
                {checked ? 'Checked' : 'Unchecked'} (click to toggle)
              </Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Current state: <code className="rounded bg-muted px-1 py-0.5">{String(checked)}</code>
            </p>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [checked, setChecked] = useState(false)

<Checkbox
  id="controlled"
  checked={checked}
  onCheckedChange={(value) => setChecked(value === true)}
/>
<Label htmlFor="controlled">
  {checked ? 'Checked' : 'Unchecked'}
</Label>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>
              Checkboxes can be disabled to prevent user interaction.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-unchecked" disabled />
                <Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled checked />
                <Label htmlFor="disabled-checked">Disabled checked</Label>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Checkbox id="disabled-unchecked" disabled />
<Label htmlFor="disabled-unchecked">Disabled unchecked</Label>

<Checkbox id="disabled-checked" disabled checked />
<Label htmlFor="disabled-checked">Disabled checked</Label>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox Group */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox Group</CardTitle>
            <CardDescription>
              A group of related checkboxes for multi-select scenarios.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Sidebar items to display:</p>
              <div className="flex flex-col gap-3">
                {Object.entries(items).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={`group-${key}`}
                      checked={value}
                      onCheckedChange={(checked) =>
                        setItems((prev) => ({ ...prev, [key]: checked === true }))
                      }
                    />
                    <Label htmlFor={`group-${key}`} className="capitalize">
                      {key}
                    </Label>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Selected: {Object.entries(items).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [items, setItems] = useState({
  recents: false,
  home: false,
  applications: true,
  desktop: false,
})

{Object.entries(items).map(([key, value]) => (
  <div key={key} className="flex items-center space-x-2">
    <Checkbox
      id={\`group-\${key}\`}
      checked={value}
      onCheckedChange={(checked) =>
        setItems((prev) => ({ ...prev, [key]: checked === true }))
      }
    />
    <Label htmlFor={\`group-\${key}\`} className="capitalize">
      {key}
    </Label>
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
