import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"

const FEATURED_EVENT = {
  name: "Global Brigades Annual Summit",
  year: "2025",
  href: "/conference",
  ctaLabel: "View conference details",
  image: {
    src: "/images/undraw_special-event_hv54.svg",
    alt: "Join us for a day of speakers, case competition, and networking opportunities, all in support of the worldwide work of Global Medical and Public Health Brigades. ",
  },
}

export function FeaturedEventSection() {
  return (
    <section className="min-h-[900px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col">
      <div className="mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent">
        Featured event
      </div>

      <div className="flex-1 flex items-center">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Left: Copy */}
          <div className="w-full lg:w-1/2">
            <div className="mt-4 space-y-5">
              <h2 className="text-center text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
                {FEATURED_EVENT.name}{" "}
                <span className="text-primary">{FEATURED_EVENT.year}</span>
              </h2>

              <p className="text-sm leading-relaxed text-foreground/90 sm:text-base text-center md:text-left">
                The 2026 Global Brigades Conference takes place January 10th from 11–6 PM at Wallace Hall. 
                Delegates will spend the day hearing from speakers in global health, exploring real-world challenges,
                and connecting with students who share an interest in international development and community impact.
              </p>

              <p className="text-sm leading-relaxed text-foreground/90 sm:text-base text-center md:text-left">
                The event includes keynote sessions, a catered lunch, a hands-on case competition, and delegate awards.
                Early registrants are entered to win a Princeton Review MCAT textbook, and all attendees have a chance
                at a Morro gift card. Learn more to see the full schedule, speakers, and conference details.        
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <Button asChild>
                <Link href={FEATURED_EVENT.href}>
                  <span className="flex items-center gap-2">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    <span>{FEATURED_EVENT.ctaLabel}</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Large illustration */}
          <div className="flex w-full justify-center lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative h-auto max-w-[360px] sm:max-w-[460px] md:max-w-[560px]">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-tr from-primary/10 via-transparent to-secondary/25" />
              <Image
                src={FEATURED_EVENT.image.src}
                alt={FEATURED_EVENT.image.alt}
                width={640}
                height={640}
                className="relative z-[1] h-auto w-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
