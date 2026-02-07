import { DocsSidebar } from "@/components/docs-sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <MobileNav />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
