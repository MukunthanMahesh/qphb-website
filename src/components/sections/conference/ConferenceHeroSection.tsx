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
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex h-[calc(100dvh-80px-1rem)] max-w-[1408px] overflow-hidden rounded-[20px] bg-black lg:max-w-[2000px] md:h-[calc(100dvh-112px-1.25rem)]"
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
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/60 to-black/45 md:bg-linear-to-r md:from-black/80 md:via-black/55 md:to-black/20" />

          <div className="relative z-10 flex w-full flex-col items-center p-6 text-center text-white sm:p-10 md:items-stretch md:p-16 md:text-left">
            <Toast dismissible={false} className="mb-6 w-full max-w-2xl border-white/20 bg-white/95 text-foreground md:mx-0">
              Thank you for joining the 2026 Global Brigades Annual Summit. We look forward to seeing you next year! 🎉
            </Toast>

            <div className="flex w-full flex-1 flex-col items-center md:items-stretch">
              <div className="w-full max-w-xl space-y-4 md:space-y-6">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                  Global Brigades Annual Summit
                  <span className="text-secondary"> 2026</span>
                </h2>
                <p className="text-sm text-white/85 sm:text-base">
                  Join us on January 10th for a full-day conference featuring
                  speakers in global health, a hands-on case competition, and time
                  to connect with students who care about health equity and
                  international development.
                </p>
                <p className="text-sm text-white/85 sm:text-base">
                  Hear from this year&apos;s speakers{" "}
                  <span className="font-semibold text-white">Ozma Aziz</span>,{" "}
                  <span className="font-semibold text-white">Phil Bowers</span>, and{" "}
                  <span className="font-semibold text-white">Dr. Jennifer Carpenter</span>{" "}
                  as they share insights on careers in global health, health equity,
                  and community-driven change.
                </p>
              <div className="flex w-full flex-col items-center gap-3 text-sm md:flex-row md:flex-wrap md:items-start md:gap-x-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <CalendarDays className="size-4 shrink-0 text-secondary" />
                    <p>January 10, 2026</p>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <MapPin className="size-4 shrink-0 text-secondary" />
                    <a
                      href={WALLACE_HALL_MAP}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-white/50 hover:text-secondary"
                    >
                      Wallace Hall (JDUC)
                    </a>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Clock className="size-4 shrink-0 text-secondary" />
                    <p>11:00 AM – 6:00 PM</p>
                  </div>
              </div>
              </div>

              <div className="mt-auto flex w-full flex-col items-center gap-4 md:flex-row md:items-start">
                  <div className="flex flex-col items-center gap-3">
                    <Tooltip content="This event has passed" className="cursor-not-allowed">
                      <Button
                        type="button"
                        disabled
                        className="border border-white/45 bg-none bg-white/10 text-white shadow-none backdrop-blur-sm disabled:opacity-100"
                      >
                        <Ticket className="size-4" aria-hidden="true" />
                        <span>Purchase tickets</span>
                      </Button>
                    </Tooltip>
                    <a
                      href="https://www.zeffy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hidden items-center gap-2 text-sm text-white/80 transition-colors hover:text-white md:inline-flex"
                    >
                      <span>Ticketing by</span>
                      <Image
                        src="/images/zeffy_logo.webp"
                        alt="Zeffy"
                        width={72}
                        height={18}
                        className="h-4 w-auto"
                      />
                    </a>
                  </div>

                  <Button asChild variant="ghost" className="text-white hover:text-secondary">
                    <Link href="#schedule" className="flex items-center gap-2">
                      <span>View schedule</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
