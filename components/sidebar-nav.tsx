"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsNav } from "@/lib/docs-nav"

interface SidebarNavProps {
  onLinkClick?: () => void
}

export function SidebarNav({ onLinkClick }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      {docsNav.map((section) => (
        <div key={section.title}>
          <h4 className="mb-2 px-3 text-sm font-semibold tracking-tight text-sidebar-foreground/70">
            {section.title}
          </h4>
          <div className="space-y-1">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}
