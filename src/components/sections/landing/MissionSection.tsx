'use client'

import Image from "next/image"
import { HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="min-h-[900px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col">
      {/* Section Title */}
      <motion.div
        className="mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        What we do
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 md:gap-12 lg:flex-row lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Globe collage */}
          <div className="flex w-full justify-center lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative h-auto max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              <Image
                src="/images/qphb-globe.png"
                alt="Collage of Public Health Brigades work across the globe"
                width={640}
                height={900}
                className="h-auto w-full object-contain filter drop-shadow-accent drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="w-full max-w-xl lg:w-1/2">
            <div className="mt-4 space-y-5">
              <h2 className="text-center text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
                Empower communities,
                <br />
                build{" "}
                <span className="text-primary">lasting change</span>.
              </h2>

              <p className="text-sm leading-relaxed text-foreground sm:text-base text-center md:text-left">
                At Queen’s we are part of the Public Health Brigades — a local and
                international movement of university students working to improve
                health conditions in the developing world.
              </p>

              <p className="text-sm leading-relaxed text-foreground sm:text-base text-center md:text-left">
                We support public health through fundraising, awareness, and
                community engagement. Our members organize initiatives to fund
                health projects, host conferences to spark dialogue on global
                health issues, and partner with local organizations to promote
                sustainable impact within our community.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <Tooltip content="Registration has closed for the year">
                <Button variant="default" disabled>
                  <span className="flex items-center gap-2">
                    <HeartHandshake className="size-4" aria-hidden="true" />
                    <span>Join us</span>
                  </span>
                </Button>
              </Tooltip>
              <Button variant="ghost" className="sm:ml-4">
                Learn more →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
