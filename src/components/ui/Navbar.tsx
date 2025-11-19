"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Conference", href: "/conference" },
    { label: "Team", href: "/team" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-primary hover:text-accent transition-colors"
        >
          QPHB
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-accent ${
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Toggle navigation"
              >
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-2 py-1 text-sm transition-colors ${
                      pathname === item.href
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
