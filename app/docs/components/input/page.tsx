'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function InputPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Input</h1>
          <p className="text-muted-foreground mt-2">
            Displays a form input field or a component that looks like an input field.
          </p>
        </div>

        {/* Default Input */}
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>
              The default input field with placeholder text.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-sm">
              <Input placeholder="Type something..." />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Input placeholder="Type something..." />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Input with Label */}
        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>
              An input field paired with a label for accessibility.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-sm space-y-2">
              <Label htmlFor="email-label">Email</Label>
              <Input id="email-label" type="email" placeholder="you@example.com" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Input */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>
              An input field in its disabled state.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-sm space-y-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input id="disabled-input" disabled placeholder="This input is disabled" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Input disabled placeholder="This input is disabled" />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Input with Button */}
        <Card>
          <CardHeader>
            <CardTitle>With Button</CardTitle>
            <CardDescription>
              An input field combined with a button for actions like search or subscribe.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex max-w-sm items-center gap-2">
              <Input type="email" placeholder="Email address" />
              <Button type="submit">Subscribe</Button>
            </div>

            <div className="flex max-w-sm items-center gap-2">
              <Input type="text" placeholder="Search..." />
              <Button type="submit" variant="secondary">Search</Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex items-center gap-2">
  <Input type="email" placeholder="Email address" />
  <Button type="submit">Subscribe</Button>
</div>

<div className="flex items-center gap-2">
  <Input type="text" placeholder="Search..." />
  <Button type="submit" variant="secondary">Search</Button>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* File Input */}
        <Card>
          <CardHeader>
            <CardTitle>File Input</CardTitle>
            <CardDescription>
              An input configured for file uploads.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-sm space-y-2">
              <Label htmlFor="file-upload">Upload File</Label>
              <Input id="file-upload" type="file" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-2">
  <Label htmlFor="file-upload">Upload File</Label>
  <Input id="file-upload" type="file" />
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Different Types */}
        <Card>
          <CardHeader>
            <CardTitle>Different Types</CardTitle>
            <CardDescription>
              Input fields configured for various data types including email, password, and number.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="type-email">Email</Label>
                <Input id="type-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-password">Password</Label>
                <Input id="type-password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-number">Number</Label>
                <Input id="type-number" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-tel">Phone</Label>
                <Input id="type-tel" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-url">URL</Label>
                <Input id="type-url" type="url" placeholder="https://example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-date">Date</Label>
                <Input id="type-date" type="date" />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="0" />
<Input type="tel" placeholder="+1 (555) 000-0000" />
<Input type="url" placeholder="https://example.com" />
<Input type="date" />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
