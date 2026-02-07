'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export default function NavigationMenuPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Navigation Menu</h1>
          <p className="text-muted-foreground mt-2">
            A collection of links for navigating websites. Supports dropdown content panels with rich layouts.
          </p>
        </div>

        {/* Basic Navigation Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Navigation Menu</CardTitle>
            <CardDescription>
              A navigation menu with dropdown sections containing links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Introduction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn the basics and get up and running quickly.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Installation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Step-by-step guide to install dependencies.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Typography</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Styles for headings, paragraphs, lists, and more.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Primitives</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Unstyled, accessible components for building UIs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Alert Dialog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user for confirmation.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Hover Card</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Preview content available behind a link on hover.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Progress</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Displays an indicator of task completion progress.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Tooltip</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A popup that displays information on hover or focus.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
          <li>
            <NavigationMenuLink asChild>
              <a className="block select-none space-y-1 rounded-md p-3 ..." href="#">
                <div className="text-sm font-medium leading-none">Introduction</div>
                <p className="text-sm text-muted-foreground">
                  Learn the basics and get up and running quickly.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Menu with Featured Section */}
        <Card>
          <CardHeader>
            <CardTitle>With Featured Section</CardTitle>
            <CardDescription>
              A navigation menu dropdown with a highlighted featured item alongside links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Re-usable Components</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Pre-built components to speed up development.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Themes</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Hand-picked themes for your next project.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Examples</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore complete application examples.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Read our latest articles and tutorials.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Community</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join the community and get involved.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<NavigationMenuItem>
  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-3 p-6 lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 ..." href="#">
            <div className="text-lg font-medium">shadcn/ui</div>
            <p className="text-sm text-muted-foreground">
              Beautifully designed components...
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      {/* Additional links... */}
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

{/* Simple link without dropdown */}
<NavigationMenuItem>
  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
    Pricing
  </NavigationMenuLink>
</NavigationMenuItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
