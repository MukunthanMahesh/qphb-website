"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const INTEREST_FORM = "https://forms.gle/gnctfoax1NyW9FAo9"

export function BrigadeHero() {
  return (
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex min-h-[calc(100dvh-80px-1rem)] max-w-[1408px] overflow-hidden rounded-[20px] border border-[#e7d3c4] bg-white shadow-[0_18px_40px_rgba(121,80,39,0.08)] lg:max-w-[2000px] md:h-[calc(100dvh-112px-1.25rem)] md:min-h-[calc(100dvh-112px-1.25rem)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative h-[42vw] max-h-[280px] min-h-[190px] shrink-0 sm:max-h-[340px] md:h-auto md:max-h-none md:min-h-0 md:w-[46%]">
              <Image
                src="/images/brigade/group-arch.jpg"
                alt="Brigade volunteers standing under a yellow arch in Guatemala"
                fill
                priority
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover object-[center_62%] md:object-center"
              />
              <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white backdrop-blur-sm md:bottom-5 md:left-5">
                Guatemala · May 2026
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center px-6 py-6 text-center sm:px-10 md:items-start md:px-12 md:py-14 md:text-left lg:px-16">
              <div className="w-full max-w-xl space-y-4 md:space-y-5">
                <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-primary">
                  2027 Public Health Brigade
                </p>
                <h1 className="text-3xl font-extrabold leading-[1.05] text-accent sm:text-4xl lg:text-5xl">
                  Queen&apos;s Public Health Brigades is going to Panama
                </h1>
                <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                  Interested in global health, community outreach, or getting
                  hands-on experience working with communities abroad? Come
                  join us on our 2027 Public Health Brigade to Panama with
                  Global Brigades.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="rounded-full bg-background-secondary px-3 py-1.5 text-sm font-semibold text-accent">
                    May 2 to May 8, 2027
                  </span>
                  <span className="rounded-full bg-background-secondary px-3 py-1.5 text-sm font-semibold text-accent">
                    Panama
                  </span>
                </div>
              </div>

              <div className="mt-auto flex w-full flex-col items-center gap-3 pt-8 md:flex-row md:items-center">
                <Button asChild>
                  <a href={INTEREST_FORM} target="_blank" rel="noreferrer">
                    Interest form
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
