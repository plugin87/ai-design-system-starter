'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default function ProgressPage() {
  const [controlledProgress, setControlledProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setControlledProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(false)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAnimating])

  const handleStart = () => {
    setControlledProgress(0)
    setIsAnimating(true)
  }

  const handleReset = () => {
    setIsAnimating(false)
    setControlledProgress(0)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
          <p className="text-muted-foreground mt-2">
            Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
          </p>
        </div>

        {/* Default Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Default Progress</CardTitle>
            <CardDescription>
              A progress bar at its default state with no value set
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress />

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Progress />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Different Values */}
        <Card>
          <CardHeader>
            <CardTitle>Different Values</CardTitle>
            <CardDescription>
              Progress bars at 25%, 50%, and 75% completion
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">25% Complete</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">50% Complete</span>
                  <span className="font-medium">50%</span>
                </div>
                <Progress value={50} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">75% Complete</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} />
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Animated / Controlled Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Animated / Controlled Progress</CardTitle>
            <CardDescription>
              A progress bar controlled with state, animated from 0% to 100% on button click
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{controlledProgress}%</span>
                </div>
                <Progress value={controlledProgress} />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleStart} disabled={isAnimating}>
                  {isAnimating ? 'Running...' : 'Start'}
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`const [progress, setProgress] = useState(0)
const [isAnimating, setIsAnimating] = useState(false)

useEffect(() => {
  if (!isAnimating) return

  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        setIsAnimating(false)
        return 100
      }
      return prev + 2
    })
  }, 50)

  return () => clearInterval(interval)
}, [isAnimating])

<Progress value={progress} />
<Button onClick={() => { setProgress(0); setIsAnimating(true) }}>
  Start
</Button>
<Button variant="outline" onClick={() => { setIsAnimating(false); setProgress(0) }}>
  Reset
</Button>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
