import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const components = [
  { name: "Accordion", slug: "accordion", description: "Expandable accordion sections" },
  { name: "Alert", slug: "alert", description: "Alert notification component" },
  { name: "Alert Dialog", slug: "alert-dialog", description: "Modal dialog for confirmations" },
  { name: "Aspect Ratio", slug: "aspect-ratio", description: "Content within a desired ratio" },
  { name: "Avatar", slug: "avatar", description: "User avatar component" },
  { name: "Badge", slug: "badge", description: "Label badge component" },
  { name: "Breadcrumb", slug: "breadcrumb", description: "Navigation breadcrumb" },
  { name: "Button", slug: "button", description: "Interactive button component" },
  { name: "Button Group", slug: "button-group", description: "Grouped button container" },
  { name: "Calendar", slug: "calendar", description: "Date picker calendar component" },
  { name: "Card", slug: "card", description: "Container for grouped content" },
  { name: "Carousel", slug: "carousel", description: "Scrollable content carousel" },
  { name: "Checkbox", slug: "checkbox", description: "Checkbox input control" },
  { name: "Collapsible", slug: "collapsible", description: "Expandable/collapsible content" },
  { name: "Command", slug: "command", description: "Command palette component" },
  { name: "Context Menu", slug: "context-menu", description: "Right-click context menu" },
  { name: "Dialog", slug: "dialog", description: "Modal dialog component" },
  { name: "Drawer", slug: "drawer", description: "Slide-out drawer panel" },
  { name: "Dropdown Menu", slug: "dropdown-menu", description: "Dropdown menu component" },
  { name: "Form", slug: "form", description: "Form with validation" },
  { name: "Hover Card", slug: "hover-card", description: "Card shown on hover" },
  { name: "Input", slug: "input", description: "Text input component" },
  { name: "Input OTP", slug: "input-otp", description: "One-time password input" },
  { name: "Label", slug: "label", description: "Form field label" },
  { name: "Menubar", slug: "menubar", description: "Application menubar" },
  { name: "Navigation Menu", slug: "navigation-menu", description: "Site navigation menu" },
  { name: "Pagination", slug: "pagination", description: "Page navigation controls" },
  { name: "Popover", slug: "popover", description: "Floating popover content" },
  { name: "Progress", slug: "progress", description: "Progress bar indicator" },
  { name: "Radio Group", slug: "radio-group", description: "Radio button group" },
  { name: "Scroll Area", slug: "scroll-area", description: "Custom scrollable area" },
  { name: "Select", slug: "select", description: "Select dropdown component" },
  { name: "Separator", slug: "separator", description: "Visual content divider" },
  { name: "Sheet", slug: "sheet", description: "Slide-out panel overlay" },
  { name: "Skeleton", slug: "skeleton", description: "Loading placeholder" },
  { name: "Slider", slug: "slider", description: "Range slider control" },
  { name: "Sonner", slug: "sonner", description: "Toast notification system" },
  { name: "Switch", slug: "switch", description: "Toggle switch control" },
  { name: "Table", slug: "table", description: "Data table component" },
  { name: "Tabs", slug: "tabs", description: "Tabbed content sections" },
  { name: "Textarea", slug: "textarea", description: "Multi-line text input" },
  { name: "Toggle", slug: "toggle", description: "Toggle button component" },
  { name: "Toggle Group", slug: "toggle-group", description: "Grouped toggle buttons" },
  { name: "Tooltip", slug: "tooltip", description: "Informational tooltip" },
]

export default function DocsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Explore the component library. Each component page includes live examples, variants, and usage code.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component) => (
            <Link key={component.slug} href={`/docs/components/${component.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-base">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
