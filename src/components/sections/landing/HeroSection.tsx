'use client'

import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { HeartHandshake } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex h-[calc(100dvh-80px-1rem)] md:h-[calc(100dvh-112px-1.25rem)] max-w-[1408px] lg:max-w-[2000px] overflow-hidden rounded-[20px] bg-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/public-health-brigades-home-2025.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 flex w-full flex-col justify-between bg-linear-to-b from-black/65 via-black/50 to-black/40 p-6 text-center text-white sm:p-10 md:bg-linear-to-r md:from-black/70 md:via-black/45 md:to-black/10 md:p-16 md:text-left">
            <motion.div
              className="mx-auto max-w-xl space-y-4 text-white md:mx-0 md:space-y-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-secondary">
                Queen’s Public Health Brigades
              </p>
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                The largest student-led movement for global health equity.
              </h1>
              <p className="text-sm md:text-base text-white/85">
                A student-led community advancing health equity through our
                annual conference, communty events, and global brigades.
              </p>
            </motion.div>

            <motion.div
              className="mt-auto flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Tooltip content="Coming Soon!" side="top">
                <Button
                  type="button"
                  disabled
                  className="border border-white/45 bg-none bg-white/10 text-white shadow-none backdrop-blur-sm disabled:opacity-100"
                >
                  <span className="flex items-center gap-2">
                    <HeartHandshake className="size-4" aria-hidden="true" />
                    <span>Join a Brigade</span>
                  </span>
                </Button>
              </Tooltip>
              <Button variant="ghost" className="text-white hover:text-secondary">
                Get Involved @ Queen&apos;s
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
