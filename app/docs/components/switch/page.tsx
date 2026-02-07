'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SwitchPage() {
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)
  const [security, setSecurity] = useState(true)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Switch</h1>
          <p className="text-muted-foreground mt-2">
            A control that allows the user to toggle between checked and not checked.
          </p>
        </div>

        {/* Basic Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Switch</CardTitle>
            <CardDescription>
              A simple switch without any label.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="basic-switch" />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Switch id="basic-switch" />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Switch with Label */}
        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>
              Switch paired with a label for better accessibility and usability.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" checked={airplaneMode} onCheckedChange={setAirplaneMode} />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled State</CardTitle>
            <CardDescription>
              A controlled switch that displays its current state.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
              <Label htmlFor="notifications">Enable Notifications</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Notifications are currently: <span className="font-medium text-foreground">{notifications ? 'Enabled' : 'Disabled'}</span>
            </p>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [notifications, setNotifications] = useState(true)

<Switch
  id="notifications"
  checked={notifications}
  onCheckedChange={setNotifications}
/>
<Label htmlFor="notifications">Enable Notifications</Label>
<p>Notifications are currently: {notifications ? 'Enabled' : 'Disabled'}</p>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>
              A switch in the disabled state, preventing user interaction.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled (off)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-on" disabled checked />
                <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled (on)</Label>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Switch id="disabled-off" disabled />
<Switch id="disabled-on" disabled checked />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>
              Multiple switches used together in a settings form.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="form-notifications" className="text-base">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your device.
                  </p>
                </div>
                <Switch
                  id="form-notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="form-marketing" className="text-base">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and features.
                  </p>
                </div>
                <Switch
                  id="form-marketing"
                  checked={marketing}
                  onCheckedChange={setMarketing}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="form-security" className="text-base">Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts about your account security.
                  </p>
                </div>
                <Switch
                  id="form-security"
                  checked={security}
                  onCheckedChange={setSecurity}
                />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label htmlFor="notifications" className="text-base">
      Push Notifications
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive push notifications on your device.
    </p>
  </div>
  <Switch
    id="notifications"
    checked={notifications}
    onCheckedChange={setNotifications}
  />
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
