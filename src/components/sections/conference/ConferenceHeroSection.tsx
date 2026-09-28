'use client'

import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import { Tooltip } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Ticket, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const WALLACE_HALL_MAP =
  "https://map.queensu.ca/?id=1955#!m/1219265?share"

export function ConferenceHeroSection() {
  return (
    <section className="bg-background pt-6 pb-14 md:pt-8 md:pb-20 flex flex-col border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-6">
        <Toast>
          Thank you for joining the 2026 Global Brigades Annual Summit. We look forward to seeing you next year! 🎉
        </Toast>
      </div>

      <div>
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row-reverse lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Copy */}
          <div className="w-full max-w-xl lg:w-1/2 space-y-4 md:space-y-6 animate-fadeInUp">
            <h2 className="text-center text-accent text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight md:text-left">
              Global Brigades Annual Summit
              <span className="text-primary"> 2026</span>
            </h2>
            <p className="max-w-xl text-sm text-foreground/85 sm:text-base">
              Join us on January 10th for a full-day conference featuring
              speakers in global health, a hands-on case competition, and time
              to connect with students who care about health equity and
              international development.
            </p>
            <p className="max-w-xl text-sm text-foreground/85 sm:text-base">
              Hear from this year&apos;s speakers{" "}
              <span className="font-semibold">Ozma Aziz</span>,{" "}
              <span className="font-semibold">Phil Bowers</span>, and{" "}
              <span className="font-semibold">Dr. Jennifer Carpenter</span> as
              they share insights on careers in global health, health equity,
              and community-driven change.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <CalendarDays className="size-4 shrink-0 text-secondary" />
                <p>January 10, 2026</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <MapPin className="size-4 shrink-0 text-secondary" />
                <a
                  href={WALLACE_HALL_MAP}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-foreground/60 hover:text-primary"
                >
                  Wallace Hall (JDUC)
                </a>
              </div>
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Clock className="size-4 shrink-0 text-secondary" />
                <p>11:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center gap-3">
                <Tooltip content="This event has passed" className="cursor-not-allowed">
                  <Button
                    type="button"
                    disabled
                    className="transition-transform duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <Ticket className="size-4" aria-hidden="true" />
                    <span>Purchase tickets</span>
                  </Button>
                </Tooltip>
                <a
                  href="https://www.zeffy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-foreground/60 transition-colors hover:text-foreground"
                >
                  <span>Ticketing by</span>
                  <Image
                    src="/images/zeffy_logo.webp"
                    alt="Zeffy"
                    width={64}
                    height={16}
                    className="h-3.5 w-auto"
                  />
                </a>
              </div>

              <Button asChild variant="ghost">
                <Link href="#schedule" className="flex items-center gap-2">
                  <span>View schedule</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex w-full justify-center lg:w-1/2 mt-8 lg:mt-0 items-center">
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
                src="/images/jduc.jpg"
                alt="Conference with speakers, delegates, and networking opportunities."
                width={640}
                height={640}
                className="relative z-[1] h-auto w-full object-contain drop-shadow-xl transition-transform duration-500 ease-out hover:-translate-y-1 rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
