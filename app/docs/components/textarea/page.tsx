'use client'

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TextareaPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
          <p className="text-muted-foreground mt-2">
            Displays a form textarea or a component that looks like a textarea.
          </p>
        </div>

        {/* Default */}
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>
              A basic textarea with placeholder text.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="Type your message here." />

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Textarea placeholder="Type your message here." />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Label */}
        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>
              A textarea paired with a label for form accessibility.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>
              A textarea in the disabled state, preventing user input.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="This textarea is disabled." disabled />

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Textarea placeholder="This textarea is disabled." disabled />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Text */}
        <Card>
          <CardHeader>
            <CardTitle>With Text</CardTitle>
            <CardDescription>
              A textarea with a helper text description below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message-with-text">Your Message</Label>
              <Textarea id="message-with-text" placeholder="Type your message here." />
              <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Button */}
        <Card>
          <CardHeader>
            <CardTitle>With Button</CardTitle>
            <CardDescription>
              A textarea with a submit button, useful for comment or message forms.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message-submit">Your Message</Label>
              <Textarea id="message-submit" placeholder="Type your message here." />
              <Button>Send message</Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="space-y-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
  <Button>Send message</Button>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
