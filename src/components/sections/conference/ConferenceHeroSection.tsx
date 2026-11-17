'use client'

import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Ticket, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const TICKETS_URL =
  "https://www.zeffy.com/en-CA/ticketing/global-brigades-annual-summit-2"

export function ConferenceHeroSection() {
  return (
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex min-h-[calc(100dvh-80px-1rem)] max-w-[1408px] overflow-hidden rounded-[20px] bg-black lg:max-w-[2000px] md:h-[calc(100dvh-112px-1.25rem)] md:min-h-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/images/jduc.jpg"
            alt="Conference with speakers, delegates, and networking opportunities."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/75" />

          <div className="relative z-10 flex w-full flex-col items-center px-5 pb-8 pt-14 text-center text-white sm:p-10 md:p-16">
            {/* Use this toast to display a message when the conference has passed! */}
            {/* <Toast dismissible={false} className="mb-6 w-full max-w-2xl border-white/20 bg-white/95 text-foreground">
              Thank you for joining the 2026 Global Brigades Annual Summit. We look forward to seeing you next year! 🎉
            </Toast> */}

            <div className="flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-6 md:gap-7">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-7xl">
                Global Brigades Annual Conference
                <span className="text-secondary"> 2027</span>
              </h2>

              <p className="max-w-2xl text-xl leading-relaxed text-white/85 md:text-xl">
                Join us on{" "}
                <span className="whitespace-nowrap font-semibold text-white">
                  <CalendarDays
                    className="mr-1.5 inline size-4 align-[-0.125em] text-secondary"
                    aria-hidden="true"
                  />
                  January 16th, 2027
                </span>{" "}
                for a full-day conference featuring{" "}
                <span className="font-semibold text-white">speakers</span> in
                global health, a hands-on{" "}
                <span className="font-semibold text-white">case competition</span>
                , and an opportunity to{" "}
                <span className="font-semibold text-white">network</span> with
                students and professionals who care about health equity and
                international development.
              </p>

              {/* Hear from this year&apos;s speakers{" "}
              <span className="font-semibold text-white">Ozma Aziz</span>,{" "}
              <span className="font-semibold text-white">Phil Bowers</span>, and{" "}
              <span className="font-semibold text-white">Dr. Jennifer Carpenter</span>{" "}
              as they share insights on careers in global health, health equity,
              and community-driven change. */}

              <div className="flex w-full max-w-md flex-col items-center gap-5 pt-1">
                <div className="mx-auto flex w-full max-w-sm items-stretch justify-center gap-4 sm:gap-8">
                  <div className="flex flex-1 flex-col items-center text-center">
                    <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      $17.50
                    </p>
                    <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
                      General
                    </p>
                  </div>
                  <div
                    className="w-0.5 shrink-0 self-stretch bg-white/60"
                    aria-hidden="true"
                  />
                  <div className="flex flex-1 flex-col items-center text-center">
                    <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      $22.50
                    </p>
                    <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
                      General + Case Comp
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col items-center gap-2">
                  <p className="text-xs text-white/55">
                    Early bird pricing available starting November 23
                  </p>
                  <Button
                    asChild
                    className="w-full border border-white/45 bg-none bg-white/10 px-4 text-xs tracking-[0.08em] text-white shadow-none backdrop-blur-sm hover:bg-white/20 sm:px-8 sm:text-sm sm:tracking-[0.10em]"
                  >
                    <a href={TICKETS_URL} target="_blank" rel="noreferrer">
                      <Ticket className="size-4" aria-hidden="true" />
                      <span>Purchase tickets</span>
                      <span
                        className="mx-0.5 h-4 w-px shrink-0 bg-white/35"
                        aria-hidden="true"
                      />
                      <Image
                        src="/images/zeffy_logo.webp"
                        alt="via Zeffy"
                        width={80}
                        height={20}
                        className="h-4 w-auto sm:h-5"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-auto flex w-full justify-center pt-10 md:pt-8">
              <Button asChild variant="ghost" className="text-white hover:text-secondary">
                <Link href="#schedule" className="flex items-center gap-2">
                  <span>View schedule</span>
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
