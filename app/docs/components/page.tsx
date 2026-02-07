'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'

export default function ComponentsPage() {
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('option-one')
  const [switchValue, setSwitchValue] = useState(false)
  const [selectValue, setSelectValue] = useState('apple')
  const [sliderValue, setSliderValue] = useState([50])
  const [progress, setProgress] = useState(65)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Component Showcase</h1>
          <p className="text-lg text-muted-foreground">
            Interactive preview of all shadcn/ui components
          </p>
        </div>

        {/* Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Various button styles and sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </CardContent>
        </Card>

        {/* Input & Textarea */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input & Textarea</CardTitle>
            <CardDescription>Text input components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="input">Standard Input</Label>
              <Input id="input" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="textarea">Textarea</Label>
              <Textarea id="textarea" placeholder="Enter multiple lines..." rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled Input</Label>
              <Input id="input-disabled" placeholder="Disabled..." disabled />
            </div>
          </CardContent>
        </Card>

        {/* Checkbox, Radio, Switch */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>Checkbox, Radio Group, and Switch</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold">Checkbox</h4>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="checkbox"
                  checked={checkboxValue}
                  onCheckedChange={(checked) => setCheckboxValue(checked === true)}
                />
                <Label htmlFor="checkbox" className="font-normal cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Checked: {checkboxValue ? 'Yes' : 'No'}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Radio Group</h4>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-normal cursor-pointer">
                    Option 1
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-normal cursor-pointer">
                    Option 2
                  </Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">
                Selected: {radioValue}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Switch</h4>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switch"
                  checked={switchValue}
                  onCheckedChange={setSwitchValue}
                />
                <Label htmlFor="switch" className="font-normal cursor-pointer">
                  Enable notifications
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Status: {switchValue ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select</CardTitle>
            <CardDescription>Dropdown select component</CardDescription>
          </CardHeader>
          <CardContent className="max-w-sm">
            <Select value={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {selectValue}
            </p>
          </CardContent>
        </Card>

        {/* Slider */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Slider</CardTitle>
            <CardDescription>Range slider control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Value: {sliderValue[0]}</p>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>Progress bar indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Progress: {progress}%</p>
              <Progress value={progress} className="w-full" />
            </div>
            <Button onClick={() => setProgress(Math.min(100, progress + 10))}>
              Increase
            </Button>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Tabbed content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-muted-foreground">This is tab 1 content</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-muted-foreground">This is tab 2 content</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-muted-foreground">This is tab 3 content</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Expandable accordion sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                <AccordionContent>
                  shadcn/ui is a collection of beautiful, accessible React components built with Tailwind CSS and Radix UI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I use these components?</AccordionTrigger>
                <AccordionContent>
                  Simply import the components from @/components/ui and use them in your React applications. They are fully customizable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the components?</AccordionTrigger>
                <AccordionContent>
                  Yes! All components are built with Tailwind CSS and can be easily customized to match your design system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert</CardTitle>
            <CardDescription>Alert notification components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This is an info alert. You can use it to display important information.
              </AlertDescription>
            </Alert>
            <Alert variant="default" className="border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                This is a success alert. Operation completed successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This is a destructive alert. Use for errors and warnings.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Badge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Label badge components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>Card container components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border">
                  <CardHeader>
                    <CardTitle className="text-base">Card {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is example card content {i}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline">
            <a href="/docs/components/accordion">→ Accordion</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/alert">→ Alert</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/alert-dialog">→ Alert Dialog</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/aspect-ratio">→ Aspect Ratio</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/avatar">→ Avatar</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/badge">→ Badge</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/breadcrumb">→ Breadcrumb</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/button">→ Button</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/components/button-group">→ Button Group</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
