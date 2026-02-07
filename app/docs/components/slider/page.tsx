'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

export default function SliderPage() {
  const [value, setValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Slider</h1>
          <p className="text-muted-foreground mt-2">
            An input where the user selects a value from within a given range.
          </p>
        </div>

        {/* Default Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Default Slider</CardTitle>
            <CardDescription>
              A basic slider with default settings (0 to 100)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Slider defaultValue={[50]} max={100} step={1} />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Slider with Value Display */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Slider</CardTitle>
            <CardDescription>
              A controlled slider that displays the current value using useState
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full max-w-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Volume</span>
                <span className="text-sm font-medium">{value[0]}%</span>
              </div>
              <Slider
                value={value}
                onValueChange={setValue}
                max={100}
                step={1}
              />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [value, setValue] = useState([50])

<div className="flex items-center justify-between">
  <span className="text-sm text-muted-foreground">Volume</span>
  <span className="text-sm font-medium">{value[0]}%</span>
</div>
<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Different Ranges */}
        <Card>
          <CardHeader>
            <CardTitle>Different Ranges</CardTitle>
            <CardDescription>
              Sliders configured with various min, max, and step values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6 max-w-sm">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default (0 - 100, step 1)</p>
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Temperature (-10 to 50, step 1)</p>
                <Slider defaultValue={[22]} min={-10} max={50} step={1} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Large steps (0 - 100, step 10)</p>
                <Slider defaultValue={[50]} max={100} step={10} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Fine control (0 - 1, step 0.01)</p>
                <Slider defaultValue={[0.5]} max={1} step={0.01} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Range slider</p>
                  <p className="text-sm font-medium">{rangeValue[0]} - {rangeValue[1]}</p>
                </div>
                <Slider
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  max={100}
                  step={1}
                />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`{/* Default range */}
<Slider defaultValue={[33]} max={100} step={1} />

{/* Custom min/max */}
<Slider defaultValue={[22]} min={-10} max={50} step={1} />

{/* Large steps */}
<Slider defaultValue={[50]} max={100} step={10} />

{/* Fine control */}
<Slider defaultValue={[0.5]} max={1} step={0.01} />

{/* Range slider with two thumbs */}
const [rangeValue, setRangeValue] = useState([25, 75])

<Slider
  value={rangeValue}
  onValueChange={setRangeValue}
  max={100}
  step={1}
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled Slider</CardTitle>
            <CardDescription>
              A slider in its disabled state, preventing user interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} step={1} disabled />
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Slider defaultValue={[50]} max={100} step={1} disabled />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
