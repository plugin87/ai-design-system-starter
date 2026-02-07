'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, XCircle } from 'lucide-react'

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Alert Component</h1>
          <p className="text-lg text-muted-foreground">
            Alert messages with various styles, variants, and states
          </p>
        </div>

        {/* Default Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Alert</CardTitle>
            <CardDescription>Standard alert with title and description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your lib folder and edit them as needed.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Title Only Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Title Only Alert</CardTitle>
            <CardDescription>Alert with only a title, no description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Notice</AlertTitle>
            </Alert>
          </CardContent>
        </Card>

        {/* Destructive Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Destructive Alert</CardTitle>
            <CardDescription>Error/destructive style alert</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please login again to continue.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert Variants</CardTitle>
            <CardDescription>Different alert styles for various use cases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Info Alert */}
            <div>
              <h4 className="font-semibold mb-3">Info Alert</h4>
              <Alert className="border-blue-200 bg-blue-50">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900">Information</AlertTitle>
                <AlertDescription className="text-blue-800">
                  This is an informational alert. Use it to convey important information to users.
                </AlertDescription>
              </Alert>
            </div>

            {/* Success Alert */}
            <div>
              <h4 className="font-semibold mb-3">Success Alert</h4>
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900">Success!</AlertTitle>
                <AlertDescription className="text-green-800">
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>
            </div>

            {/* Warning Alert */}
            <div>
              <h4 className="font-semibold mb-3">Warning Alert</h4>
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-900">Warning</AlertTitle>
                <AlertDescription className="text-yellow-800">
                  This action cannot be undone. Please proceed with caution.
                </AlertDescription>
              </Alert>
            </div>

            {/* Error Alert */}
            <div>
              <h4 className="font-semibold mb-3">Error Alert</h4>
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-900">Error</AlertTitle>
                <AlertDescription className="text-red-800">
                  An error occurred while processing your request. Please try again.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Alert with Long Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert with Extended Content</CardTitle>
            <CardDescription>Alerts can handle longer descriptions and multiple lines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>System Maintenance</AlertTitle>
              <AlertDescription>
                Our servers will be undergoing scheduled maintenance on Saturday, January 25th from 2:00 AM to 4:00 AM UTC.
                During this time, the service may be unavailable. We apologize for any inconvenience this may cause and appreciate your patience.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert with Different Icons</CardTitle>
            <CardDescription>Use different icons to represent alert types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-3">Alert Circle Icon</h4>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Alert</AlertTitle>
                <AlertDescription>Using AlertCircle icon</AlertDescription>
              </Alert>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Info Icon</h4>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>Using Info icon</AlertDescription>
              </Alert>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Check Circle Icon</h4>
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900">Success</AlertTitle>
                <AlertDescription className="text-green-800">Using CheckCircle2 icon</AlertDescription>
              </Alert>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Alert Triangle Icon</h4>
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-900">Warning</AlertTitle>
                <AlertDescription className="text-yellow-800">Using AlertTriangle icon</AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Alert States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert States & Use Cases</CardTitle>
            <CardDescription>Common use cases for alert components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Dismissible Alert */}
            <div>
              <h4 className="font-semibold mb-3">Dismissible Alert</h4>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Update Available</AlertTitle>
                <AlertDescription className="flex items-center justify-between">
                  <span>A new version is available. Refresh to update.</span>
                  <Button variant="outline" size="sm" className="ml-4">
                    Dismiss
                  </Button>
                </AlertDescription>
              </Alert>
            </div>

            {/* Form Error Alert */}
            <div>
              <h4 className="font-semibold mb-3">Form Error Alert</h4>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Validation Error</AlertTitle>
                <AlertDescription>
                  Please check the following fields: Email address, Phone number
                </AlertDescription>
              </Alert>
            </div>

            {/* Confirmation Alert */}
            <div>
              <h4 className="font-semibold mb-3">Confirmation Alert</h4>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Confirm Action</AlertTitle>
                <AlertDescription className="flex items-center justify-between mt-2">
                  <span>Are you sure you want to delete this item?</span>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Usage Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>How to use the Alert component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>
                {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function Demo() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your lib folder
        and edit them as needed.
      </AlertDescription>
    </Alert>
  )
}`}
              </code>
            </pre>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
