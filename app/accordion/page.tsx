'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Accordion Component</h1>
          <p className="text-lg text-muted-foreground">
            Expandable accordion sections with multiple states and variations
          </p>
        </div>

        {/* Single Selection Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Single Selection Accordion</CardTitle>
            <CardDescription>Only one item can be open at a time</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that you can customize.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It uses smooth CSS transitions for open/close animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Multiple Selection Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Selection Accordion</CardTitle>
            <CardDescription>Multiple items can be open simultaneously</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
              <AccordionItem value="item-1">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Fully accessible with ARIA attributes</li>
                    <li>Smooth animations and transitions</li>
                    <li>Customizable styling with Tailwind CSS</li>
                    <li>Multiple selection support</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Installation</AccordionTrigger>
                <AccordionContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>npx shadcn-ui@latest add accordion</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Usage</AccordionTrigger>
                <AccordionContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                      {`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Demo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content here
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
                    </code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Accordion with Custom Styling */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accordion with Badges</CardTitle>
            <CardDescription>Accordion items with additional visual elements</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span>Getting Started</span>
                    <Badge className="ml-auto">New</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Welcome to the getting started guide. Learn the basics of using this component.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span>Advanced Usage</span>
                    <Badge variant="secondary" className="ml-auto">Intermediate</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Explore advanced features and customization options for power users.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span>API Reference</span>
                    <Badge variant="outline" className="ml-auto">Reference</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Complete API documentation with examples and best practices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* FAQ Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>FAQ Example</CardTitle>
            <CardDescription>Common questions and answers in accordion format</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                <AccordionContent>
                  shadcn/ui is a collection of re-usable components built on top of Radix UI and Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How do I install components?</AccordionTrigger>
                <AccordionContent>
                  You can install components using the CLI command: npx shadcn-ui@latest add [component-name]
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I customize the components?</AccordionTrigger>
                <AccordionContent>
                  Yes! All components are built with Tailwind CSS and can be fully customized to match your design system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Are components accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. All components follow WAI-ARIA design patterns and include proper ARIA attributes for accessibility.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Accordion States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accordion States</CardTitle>
            <CardDescription>Visual demonstration of default and open states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h4 className="font-semibold mb-4">Closed State (Default)</h4>
              <Accordion type="single" collapsible>
                <AccordionItem value="demo-1">
                  <AccordionTrigger>Click to expand this item</AccordionTrigger>
                  <AccordionContent>
                    This is the content that appears when you expand the accordion item.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Open State</h4>
              <Accordion type="single" collapsible defaultValue="demo-2">
                <AccordionItem value="demo-2">
                  <AccordionTrigger>This item is expanded</AccordionTrigger>
                  <AccordionContent>
                    This shows how the accordion looks when an item is open. The content is fully visible and the trigger icon is rotated.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="flex gap-4 justify-center">
          <Button asChild variant="outline">
            <a href="/components">← Back to Components</a>
          </Button>
          <Button asChild>
            <a href="/">→ Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
