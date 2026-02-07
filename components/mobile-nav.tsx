"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/sidebar-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden sticky top-0 z-40 border-b border-sidebar-border bg-sidebar px-4 py-3">
      <div className="flex items-center gap-3">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <SheetTitle className="px-6 pt-6 pb-4 text-lg font-semibold">
              Shadcn UI
            </SheetTitle>
            <ScrollArea className="h-[calc(100vh-80px)] px-4 pb-6">
              <SidebarNav onLinkClick={() => setOpen(false)} />
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <Link href="/docs" className="text-sm font-semibold">
          Docs
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
