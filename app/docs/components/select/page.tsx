'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function SelectPage() {
  const [fruit, setFruit] = useState('')

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Select</h1>
          <p className="text-muted-foreground mt-2">
            Displays a list of options for the user to pick from, triggered by a button.
          </p>
        </div>

        {/* Basic Select */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Select</CardTitle>
            <CardDescription>
              A simple select with a list of options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Select with Groups */}
        <Card>
          <CardHeader>
            <CardTitle>With Groups</CardTitle>
            <CardDescription>
              Select items organized into labeled groups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                  <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      ...
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      ...
    </SelectGroup>
  </SelectContent>
</Select>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Select with Label */}
        <Card>
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>
              Select paired with a form label for accessibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework" className="w-[180px]">
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="gatsby">Gatsby</SelectItem>
                  <SelectItem value="nuxt">Nuxt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework" className="w-[180px]">
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="remix">Remix</SelectItem>
      <SelectItem value="astro">Astro</SelectItem>
    </SelectContent>
  </Select>
</div>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Select and individual items can be disabled
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-start gap-4">
              <div className="space-y-1.5">
                <p className="text-sm text-muted-foreground">Disabled select</p>
                <Select disabled>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Disabled" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option">Option</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <p className="text-sm text-muted-foreground">Disabled items</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise" disabled>Enterprise (Coming soon)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Disabled select */}
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  ...
</Select>

{/* Disabled item */}
<SelectItem value="enterprise" disabled>
  Enterprise (Coming soon)
</SelectItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Value */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Value</CardTitle>
            <CardDescription>
              Select with controlled state using useState to track the selected value
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Select value={fruit} onValueChange={setFruit}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pick a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Selected value: <span className="font-medium text-foreground">{fruit || 'none'}</span>
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [fruit, setFruit] = useState('')

<Select value={fruit} onValueChange={setFruit}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
  </SelectContent>
</Select>

<p>Selected value: {fruit || 'none'}</p>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
