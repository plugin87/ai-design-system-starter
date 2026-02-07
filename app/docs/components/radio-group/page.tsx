'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function RadioGroupPage() {
  const [selectedFruit, setSelectedFruit] = useState('apple')
  const [selectedPlan, setSelectedPlan] = useState('free')

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Radio Group</h1>
          <p className="text-muted-foreground mt-2">
            A set of checkable buttons where only one can be checked at a time. Built on Radix UI Radio Group.
          </p>
        </div>

        {/* Basic Radio Group */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Radio Group</CardTitle>
            <CardDescription>
              A simple radio group without labels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="basic-one" />
                <span className="text-sm">Option One</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="basic-two" />
                <span className="text-sm">Option Two</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="basic-three" />
                <span className="text-sm">Option Three</span>
              </div>
            </RadioGroup>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="basic-one" />
    <span className="text-sm">Option One</span>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="basic-two" />
    <span className="text-sm">Option Two</span>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="basic-three" />
    <span className="text-sm">Option Three</span>
  </div>
</RadioGroup>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* With Labels */}
        <Card>
          <CardHeader>
            <CardTitle>With Labels</CardTitle>
            <CardDescription>
              Radio group items paired with accessible Label components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Value */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Value</CardTitle>
            <CardDescription>
              A radio group with controlled state, displaying the selected value in real time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={selectedFruit} onValueChange={setSelectedFruit}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="apple" id="fruit-apple" />
                <Label htmlFor="fruit-apple">Apple</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="banana" id="fruit-banana" />
                <Label htmlFor="fruit-banana">Banana</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="orange" id="fruit-orange" />
                <Label htmlFor="fruit-orange">Orange</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="grape" id="fruit-grape" />
                <Label htmlFor="fruit-grape">Grape</Label>
              </div>
            </RadioGroup>

            <p className="text-sm text-muted-foreground">
              Selected fruit: <span className="font-medium text-foreground">{selectedFruit}</span>
            </p>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [selectedFruit, setSelectedFruit] = useState('apple')

<RadioGroup value={selectedFruit} onValueChange={setSelectedFruit}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="apple" id="fruit-apple" />
    <Label htmlFor="fruit-apple">Apple</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="banana" id="fruit-banana" />
    <Label htmlFor="fruit-banana">Banana</Label>
  </div>
</RadioGroup>

<p>Selected fruit: {selectedFruit}</p>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Radio group items can be individually disabled or the entire group can be disabled
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3">Individual items disabled</h4>
                <RadioGroup defaultValue="enabled-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enabled-one" id="dis-one" />
                    <Label htmlFor="dis-one">Enabled Option</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disabled-item" id="dis-two" disabled />
                    <Label htmlFor="dis-two" className="text-muted-foreground">Disabled Option</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enabled-two" id="dis-three" />
                    <Label htmlFor="dis-three">Another Enabled Option</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Entire group disabled</h4>
                <RadioGroup defaultValue="item-a" disabled>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="item-a" id="all-dis-a" />
                    <Label htmlFor="all-dis-a" className="text-muted-foreground">Option A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="item-b" id="all-dis-b" />
                    <Label htmlFor="all-dis-b" className="text-muted-foreground">Option B</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="item-c" id="all-dis-c" />
                    <Label htmlFor="all-dis-c" className="text-muted-foreground">Option C</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Individual item disabled */}
<RadioGroupItem value="disabled-item" id="dis-two" disabled />
<Label htmlFor="dis-two" className="text-muted-foreground">
  Disabled Option
</Label>

{/* Entire group disabled */}
<RadioGroup defaultValue="item-a" disabled>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="item-a" id="all-dis-a" />
    <Label htmlFor="all-dis-a" className="text-muted-foreground">Option A</Label>
  </div>
</RadioGroup>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Horizontal Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Layout</CardTitle>
            <CardDescription>
              Radio group items arranged horizontally using flex layout
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="plan-free" />
                <Label htmlFor="plan-free">Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Pro</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enterprise" id="plan-enterprise" />
                <Label htmlFor="plan-enterprise">Enterprise</Label>
              </div>
            </RadioGroup>

            <p className="text-sm text-muted-foreground">
              Selected plan: <span className="font-medium text-foreground">{selectedPlan}</span>
            </p>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<RadioGroup
  value={selectedPlan}
  onValueChange={setSelectedPlan}
  className="flex gap-6"
>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="free" id="plan-free" />
    <Label htmlFor="plan-free">Free</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="pro" id="plan-pro" />
    <Label htmlFor="plan-pro">Pro</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="enterprise" id="plan-enterprise" />
    <Label htmlFor="plan-enterprise">Enterprise</Label>
  </div>
</RadioGroup>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
