import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ModeToggle } from '@/components/mode-toggle'

const components = [
  { name: 'Button', description: 'Interactive button component' },
  { name: 'Card', description: 'Container component for grouped content' },
  { name: 'Badge', description: 'Label component' },
  { name: 'Alert', description: 'Alert notification component' },
  { name: 'Accordion', description: 'Expandable accordion component' },
  { name: 'Breadcrumb', description: 'Navigation breadcrumb component' },
  { name: 'Avatar', description: 'User avatar component' },
  { name: 'Checkbox', description: 'Checkbox input component' },
  { name: 'Radio Group', description: 'Radio button group component' },
  { name: 'Switch', description: 'Toggle switch component' },
  { name: 'Dialog', description: 'Modal dialog component' },
  { name: 'Dropdown Menu', description: 'Dropdown menu component' },
  { name: 'Popover', description: 'Popover tooltip component' },
  { name: 'Tooltip', description: 'Tooltip component' },
  { name: 'Form', description: 'Form builder component' },
  { name: 'Input', description: 'Text input component' },
  { name: 'Select', description: 'Select dropdown component' },
  { name: 'Tabs', description: 'Tabbed content component' },
  { name: 'Slider', description: 'Range slider component' },
  { name: 'Progress', description: 'Progress bar component' },
  { name: 'Pagination', description: 'Pagination component' },
  { name: 'Table', description: 'Data table component' },
  { name: 'Carousel', description: 'Image carousel component' },
  { name: 'Calendar', description: 'Date picker calendar' },
  { name: 'Skeleton', description: 'Loading skeleton' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            shadcn/ui Starter Kit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-ready Next.js starter kit with shadcn/ui components, design tokens, and Tailwind CSS configured.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Latest Next.js with App Router and Server Components
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                44+ beautifully designed, customizable components
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Design System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete design tokens and Tailwind configuration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Components Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Available Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component) => (
              <Card key={component.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Project Structure</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <code className="bg-muted px-2 py-1 rounded">/app</code> - Next.js App Router pages</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/components</code> - shadcn/ui components</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/lib</code> - Utilities and helpers</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/hooks</code> - Custom React hooks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Design Tokens</h4>
              <p className="text-sm text-muted-foreground">
                Access design tokens from <code className="bg-muted px-2 py-1 rounded">lib/design-tokens.ts</code>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Available Hooks</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <code className="bg-muted px-2 py-1 rounded">useMobile()</code> - Detect mobile screen</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useDebounce()</code> - Debounce values</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useLocalStorage()</code> - localStorage sync</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useClipboard()</code> - Copy to clipboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Ready to build something amazing?</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/docs">Browse Documentation</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                shadcn/ui Docs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
