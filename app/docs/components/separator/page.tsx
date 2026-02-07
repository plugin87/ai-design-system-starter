'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function SeparatorPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Separator</h1>
          <p className="text-muted-foreground mt-2">
            Visually or semantically separates content.
          </p>
        </div>

        {/* Horizontal Separator */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Separator</CardTitle>
            <CardDescription>
              The default orientation for separating stacked content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Tailwind CSS</h4>
              <p className="text-sm text-muted-foreground">
                A utility-first CSS framework.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Next.js</h4>
              <p className="text-sm text-muted-foreground">
                The React framework for the web.
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-1">
  <h4 className="text-sm font-medium">Radix Primitives</h4>
  <p className="text-sm text-muted-foreground">
    An open-source UI component library.
  </p>
</div>
<Separator />
<div className="space-y-1">
  <h4 className="text-sm font-medium">Tailwind CSS</h4>
  <p className="text-sm text-muted-foreground">
    A utility-first CSS framework.
  </p>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Separator */}
        <Card>
          <CardHeader>
            <CardTitle>Vertical Separator</CardTitle>
            <CardDescription>
              Use orientation=&quot;vertical&quot; to separate content side by side
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Separator in Content Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Content Layout</CardTitle>
            <CardDescription>
              Separators used to structure a content layout with text sections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-md">
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium">Profile</h5>
                    <p className="text-xs text-muted-foreground">Update your personal information</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium">Notifications</h5>
                    <p className="text-xs text-muted-foreground">Configure email and push notifications</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium">Security</h5>
                    <p className="text-xs text-muted-foreground">Manage passwords and two-factor auth</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium">Billing</h5>
                    <p className="text-xs text-muted-foreground">Manage your subscription and payment methods</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-1">
  <h4 className="text-lg font-semibold">Settings</h4>
  <p className="text-sm text-muted-foreground">
    Manage your account settings and preferences.
  </p>
</div>
<Separator className="my-4" />
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <h5 className="text-sm font-medium">Profile</h5>
      <p className="text-xs text-muted-foreground">
        Update your personal information
      </p>
    </div>
  </div>
  <Separator />
  <div className="flex items-center justify-between">
    <div>
      <h5 className="text-sm font-medium">Notifications</h5>
      <p className="text-xs text-muted-foreground">
        Configure email and push notifications
      </p>
    </div>
  </div>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
