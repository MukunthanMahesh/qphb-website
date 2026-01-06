'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Ticket, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ConferenceHeroSection() {
  return (
    <section className="min-h-[820px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col border-b border-border">
      <motion.div
        className="hidden md:block mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Global Brigades Annual Conference
      </motion.div>

      <div className="flex-1 flex items-center">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row-reverse lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Copy */}
          <div className="w-full max-w-xl lg:w-1/2 space-y-4 md:space-y-6 animate-fadeInUp">
            <h2 className="text-center text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
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

            <div className="mt-6 grid gap-3 text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-2">
                <CalendarDays className="mt-0.5 size-4 text-secondary" />
                <div>
                  <p className="font-semibold">Date</p>
                  <p className="text-foreground/80">January 10, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-secondary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-foreground/80">Wallace Hall (JDUC)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-secondary" />
                <div>
                  <p className="font-semibold">Time</p>
                  <p className="text-foreground/80">11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-2">
                  <Button
                    asChild
                    className="transition-transform duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <Link
                      href="https://www.zeffy.com/en-CA/ticketing/global-brigades-annual-conference"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Ticket className="size-4" aria-hidden="true" />
                      <span>Purchase tickets</span>
                    </Link>
                  </Button>
                  <a
                    href="https://www.zeffy.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/60"
                  >
                    <span className="h-[1px] w-4 bg-foreground/30" />
                    <span>Powered by</span>
                    <Image
                      src="/images/zeffy_logo.webp"
                      alt="Zeffy"
                      width={70}
                      height={18}
                      className="h-5 w-auto"
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
