"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { animateScroll as scroll } from "react-scroll"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Info,
  CalendarClock,
  Users,
  HeartHandshake,
  Phone,
  HandCoins,
} from "lucide-react"

const DONATE_URL =
  "https://my.globalbrigades.org/university/queen-s-university/brigade/Queen-s-University-Public-Health-Brigade-May-2027-Panama/donate"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === "/") {
      event.preventDefault()
      scroll.scrollToTop({
        duration: 600,
        smooth: "easeInOutQuad",
      })
    }
  }

  const navItems = [
    { label: "OUR STORY", href: "/about", icon: Info },
    { label: "CONFERENCE", href: "/conference", icon: CalendarClock },
    { label: "OUR TEAM", href: "/team", icon: Users },
    { label: "BRIGADE", href: "/brigade", icon: HeartHandshake },
    { label: "CONTACT", href: "/contact", icon: Phone },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      } bg-white transition-shadow`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:h-[110px] md:py-0">

        {/* Logo section */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={handleLogoClick} className="flex items-center">
            <Image
              src="/qphb-brigades-logo.png"
              alt="Queen’s Public Health Brigades logo"
              width={471}
              height={230}
              priority
              className="h-12 w-auto object-contain md:h-[72px] lg:h-[88px]"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center text-[0.8rem] tracking-widest font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`uppercase transition-colors ${
                pathname === item.href
                  ? "text-primary font-extrabold"
                  : "text-accent hover:text-secondary transition-color duration-250 font-bold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost">
            <Link href="/brigade">
              <span className="flex items-center gap-2">
                <HeartHandshake className="size-4" aria-hidden="true" />
                <span>Join a Brigade</span>
              </span>
            </Link>
          </Button>

          <Button asChild variant="default">
            <a href={DONATE_URL} target="_blank" rel="noreferrer">
              <span className="flex items-center gap-2">
                <HandCoins className="size-4" aria-hidden="true" />
                <span>Donate Now</span>
              </span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Toggle menu"
                className="w-12 h-12 text-2xl rounded-full"
              >
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 pt-16">
              {/* Nav Items */}
              <nav className="flex flex-col gap-4 pl-4 text-sm font-bold tracking-[0.18em]">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`uppercase pr-2 py-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors ${
                        pathname === item.href
                          ? "text-primary font-extrabold"
                          : "text-accent hover:text-secondary transition-color duration-250 font-bold"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          className="size-4 text-accent"
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  )
                })}
              </nav>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <Button asChild variant="outline" className="w-[90%]">
                  <Link href="/brigade" onClick={() => setOpen(false)}>
                    <span className="flex items-center justify-center gap-2">
                      <HeartHandshake className="size-4" aria-hidden="true" />
                      <span>Join a Brigade</span>
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="default" className="w-[90%]">
                  <a href={DONATE_URL} target="_blank" rel="noreferrer">
                    <span className="flex items-center justify-center gap-2">
                      <HandCoins className="size-4" aria-hidden="true" />
                      <span>Donate Now</span>
                    </span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
