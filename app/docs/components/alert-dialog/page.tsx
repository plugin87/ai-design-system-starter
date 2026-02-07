'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function AlertDialogPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
          <p className="text-muted-foreground mt-2">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>

        {/* Basic Alert Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Alert Dialog</CardTitle>
            <CardDescription>
              Standard alert dialog with title, description, and action buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete
        your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Delete Confirmation */}
        <Card>
          <CardHeader>
            <CardTitle>Delete Confirmation</CardTitle>
            <CardDescription>
              Alert dialog for destructive actions with custom styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Account</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? This action cannot be undone
                    and all your data will be permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Custom Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Actions</CardTitle>
            <CardDescription>
              Alert dialog with custom button text and actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Save Changes</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. Do you want to save them before leaving?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Don't Save</AlertDialogCancel>
                  <AlertDialogAction>Save Changes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Multiple Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Options</CardTitle>
            <CardDescription>
              Alert dialog with three action buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Export Data</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Export Your Data</AlertDialogTitle>
                  <AlertDialogDescription>
                    Choose the format you want to export your data in. This may take a few minutes.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button variant="outline" onClick={() => alert('Exporting as CSV...')}>
                    Export as CSV
                  </Button>
                  <AlertDialogAction onClick={() => alert('Exporting as JSON...')}>
                    Export as JSON
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* With Icon */}
        <Card>
          <CardHeader>
            <CardTitle>With Custom Content</CardTitle>
            <CardDescription>
              Alert dialog with custom content and styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Show Warning</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <AlertDialogTitle>Warning</AlertDialogTitle>
                  </div>
                  <AlertDialogDescription>
                    This action requires additional verification. Please make sure you understand
                    the consequences before proceeding.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go Back</AlertDialogCancel>
                  <AlertDialogAction>I Understand</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Usage Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">When to use:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>To confirm destructive or irreversible actions</li>
                <li>To display critical information that requires immediate attention</li>
                <li>To interrupt the user's workflow for important decisions</li>
              </ul>
            </div>
            <div>
              <strong className="text-foreground">Best practices:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Keep titles short and action-oriented</li>
                <li>Provide clear descriptions of what will happen</li>
                <li>Use descriptive button labels instead of generic "OK" or "Yes"</li>
                <li>Place the primary action on the right</li>
                <li>Use destructive styling for dangerous actions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
