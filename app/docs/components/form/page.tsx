'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function FormPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Form</h1>
          <p className="text-muted-foreground mt-2">
            Building forms with shadcn/ui components. These examples use simple HTML forms
            with Input, Label, Select, and Button components.
          </p>
        </div>

        {/* Simple Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
            <CardDescription>
              A simple login form with email and password fields.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<form className="space-y-4 max-w-sm">
  <div className="space-y-2">
    <Label htmlFor="login-email">Email</Label>
    <Input id="login-email" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="login-password">Password</Label>
    <Input id="login-password" type="password" placeholder="Enter your password" />
  </div>
  <Button type="submit" className="w-full">Sign In</Button>
</form>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
            <CardDescription>
              A registration form with multiple fields organized in a grid layout.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <Input id="reg-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-username">Username</Label>
                <Input id="reg-username" placeholder="johndoe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Password</Label>
                  <Input id="reg-password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-confirm">Confirm Password</Label>
                  <Input id="reg-confirm" type="password" placeholder="Confirm password" />
                </div>
              </div>
              <div className="flex gap-4">
                <Button type="submit">Create Account</Button>
                <Button type="reset" variant="outline">Reset</Button>
              </div>
            </form>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<form className="space-y-4 max-w-lg">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="first-name">First Name</Label>
      <Input id="first-name" placeholder="John" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="last-name">Last Name</Label>
      <Input id="last-name" placeholder="Doe" />
    </div>
  </div>
  <div className="space-y-2">
    <Label htmlFor="reg-email">Email</Label>
    <Input id="reg-email" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="reg-username">Username</Label>
    <Input id="reg-username" placeholder="johndoe" />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="reg-password">Password</Label>
      <Input id="reg-password" type="password" placeholder="Create a password" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="reg-confirm">Confirm Password</Label>
      <Input id="reg-confirm" type="password" placeholder="Confirm password" />
    </div>
  </div>
  <div className="flex gap-4">
    <Button type="submit">Create Account</Button>
    <Button type="reset" variant="outline">Reset</Button>
  </div>
</form>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Form with Select */}
        <Card>
          <CardHeader>
            <CardTitle>Form with Select</CardTitle>
            <CardDescription>
              A form combining text inputs with a select dropdown for structured data entry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="My awesome project" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="remix">Remix</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="gatsby">Gatsby</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="go">Go</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief project description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="visibility">Visibility</Label>
                <Select>
                  <SelectTrigger id="visibility">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="internal">Internal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Create Project</Button>
            </form>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<form className="space-y-4 max-w-lg">
  <div className="space-y-2">
    <Label htmlFor="project-name">Project Name</Label>
    <Input id="project-name" placeholder="My awesome project" />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="language">Language</Label>
      <Select>
        <SelectTrigger id="language">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
  <Button type="submit">Create Project</Button>
</form>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
