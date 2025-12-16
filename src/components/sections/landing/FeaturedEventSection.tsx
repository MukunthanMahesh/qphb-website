'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"
import { motion } from "framer-motion"

const FEATURED_EVENT = {
  name: "Global Brigades Annual Summit",
  year: "2025",
  href: "/conference",
  ctaLabel: "View conference details",
  image: {
    src: "/images/jduc.jpg",
    alt: "Join us for a day of speakers, case competition, and networking opportunities, all in support of the worldwide work of Global Medical and Public Health Brigades. ",
  },
}

export function FeaturedEventSection() {
  return (
    <section className="min-h-[900px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col">
      <motion.div
        className="mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Featured event
      </motion.div>

      <div className="flex-1 flex items-center">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
            <motion.div
              className="relative h-auto max-w-[360px] sm:max-w-[460px] md:max-w-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-sm sm:-left-8 sm:-top-8 sm:h-28 sm:w-28" />
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-secondary/25 blur-sm sm:-right-10 sm:-bottom-10 sm:h-32 sm:w-32" />
              <Image
                src={FEATURED_EVENT.image.src}
                alt={FEATURED_EVENT.image.alt}
                width={640}
                height={640}
                className="relative z-[1] h-auto w-full object-contain drop-shadow-xl rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
