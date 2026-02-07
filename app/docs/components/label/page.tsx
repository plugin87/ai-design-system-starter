'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export default function LabelPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Label</h1>
          <p className="text-muted-foreground mt-2">
            Renders an accessible label associated with controls. Built on top of Radix UI Label.
          </p>
        </div>

        {/* Basic Label */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Label</CardTitle>
            <CardDescription>
              A simple standalone label element
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email address</Label>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Label>Email address</Label>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Label with Input */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Input</CardTitle>
            <CardDescription>
              Labels paired with input fields using htmlFor to associate them
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Enter your username" />
            </div>

            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>

<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="username">Username</Label>
  <Input type="text" id="username" placeholder="Enter your username" />
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Label with Checkbox */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Checkbox</CardTitle>
            <CardDescription>
              Labels associated with checkbox controls for accessible form interactions
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

            <div className="flex items-center space-x-2">
              <Checkbox id="notifications" defaultChecked />
              <Label htmlFor="notifications">Enable email notifications</Label>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="notifications" defaultChecked />
  <Label htmlFor="notifications">Enable email notifications</Label>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Label */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Labels associated with disabled form controls appear visually muted
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="disabled-input" className="text-muted-foreground">Disabled Input</Label>
              <Input type="text" id="disabled-input" placeholder="Cannot type here" disabled />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checkbox" disabled />
              <Label htmlFor="disabled-checkbox" className="text-muted-foreground">
                Disabled checkbox option
              </Label>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="disabled-input" className="text-muted-foreground">
    Disabled Input
  </Label>
  <Input type="text" id="disabled-input" placeholder="Cannot type here" disabled />
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checkbox" disabled />
  <Label htmlFor="disabled-checkbox" className="text-muted-foreground">
    Disabled checkbox option
  </Label>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
