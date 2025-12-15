import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react"

export default function ConferencePage() {
  return (
    <main className="bg-background">
      {/* Hero / Overview */}
      <section className="min-h-[820px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col border-b border-border">
        <div className="mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent">
          Global Brigades Annual Conference
        </div>

        <div className="flex-1 flex items-center">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row-reverse lg:items-stretch lg:gap-16">
            {/* Left: Copy */}
            <div className="w-full max-w-xl lg:w-1/2 space-y-4 md:space-y-6 animate-fadeInUp">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Conference &amp; Case Competition
              </p>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                2026 Global Brigades Conference
              </h1>
              <p className="max-w-xl text-sm text-foreground/85 sm:text-base">
                Join us on January 10th for a full-day conference featuring
                speakers in global health, a hands-on case competition, and time
                to connect with students who care about health equity and
                international development.
              </p>

              <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
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

              <div className="mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-1">
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
                      <span>Buy tickets on Zeffy</span>
                    </Link>
                  </Button>
                  <span className="mt-1 inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/60">
                    <span className="h-[1px] w-4 bg-foreground/30" />
                    Powered by{" "}
                    <a
                      href="https://www.zeffy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary hover:underline underline-offset-4"
                    >
                      Zeffy
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="flex w-full justify-center lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative h-auto max-w-[360px] sm:max-w-[460px] md:max-w-[560px] animate-fadeInUp">
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-tr from-primary/10 via-transparent to-secondary/25" />
                <Image
                  src="/images/undraw_special-event_hv54.svg"
                  alt="Conference with speakers, delegates, and networking opportunities."
                  width={640}
                  height={640}
                  className="relative z-[1] h-auto w-full object-contain drop-shadow-xl transition-transform duration-500 ease-out hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
