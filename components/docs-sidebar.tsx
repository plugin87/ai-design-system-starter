import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/sidebar-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function DocsSidebar() {
  return (
    <aside className="hidden md:block w-[240px] shrink-0 border-r border-sidebar-border bg-sidebar sticky top-0 h-screen">
      <div className="px-4 py-6 flex items-center justify-between">
        <h2 className="px-3 text-lg font-semibold tracking-tight text-sidebar-foreground">
          Shadcn UI
        </h2>
        <ModeToggle />
      </div>
      <ScrollArea className="h-[calc(100vh-88px)] px-4 pb-6">
        <SidebarNav />
      </ScrollArea>
    </aside>
  )
}
