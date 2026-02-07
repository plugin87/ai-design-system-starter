'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Slash } from 'lucide-react'

export default function BreadcrumbPage_() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Breadcrumb</h1>
          <p className="text-muted-foreground mt-2">
            Displays the path to the current resource using a hierarchy of links.
          </p>
        </div>

        {/* Link Component (Default) */}
        <Card>
          <CardHeader>
            <CardTitle>Link Component</CardTitle>
            <CardDescription>
              Standard breadcrumb with chevron-right separator
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Custom Separator */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Separator</CardTitle>
            <CardDescription>
              Breadcrumb with slash separator instead of chevron
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<BreadcrumbSeparator>
  <Slash className="h-4 w-4" />
</BreadcrumbSeparator>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Dropdown */}
        <Card>
          <CardHeader>
            <CardTitle>Dropdown</CardTitle>
            <CardDescription>
              Breadcrumb item with dropdown menu for sub-navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors">
                      Components
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
      Components
      <ChevronDown className="h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Collapsed */}
        <Card>
          <CardHeader>
            <CardTitle>Collapsed</CardTitle>
            <CardDescription>
              Breadcrumb with ellipsis to collapse intermediate items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Responsive */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive</CardTitle>
            <CardDescription>
              Breadcrumb with collapsed items and a dropdown for hidden paths
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Building Your Application</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Data Fetching</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Caching and Revalidating</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <BreadcrumbEllipsis className="h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Building Your Application</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
