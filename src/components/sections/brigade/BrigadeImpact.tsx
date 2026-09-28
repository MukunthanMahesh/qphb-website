"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const stats = [
  { value: "102", label: "attendees at 4 hours of health education" },
  { value: "5", label: "construction days" },
  { value: "27", label: "hours of construction" },
  { value: "1", label: "water storage unit and hand-washing station" },
  { value: "1", label: "public building benefited" },
]

export function BrigadeImpact() {
  return (
    <section className="bg-background-secondary py-16 md:py-24">
      <div className="mx-auto grid max-w-[1408px] items-center gap-10 px-4 lg:max-w-[2000px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            Last brigade
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-accent sm:text-4xl">
            Guatemala, May 2026
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/85 sm:text-base">
            Impact from the public health brigade in Aldea El Refugio.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl font-extrabold tracking-tight text-primary">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-foreground/80">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <Image
            src="/images/brigade/guatemala-impact.jpg"
            alt="Infographic for the May 2026 Public Health Brigade in Guatemala: health education for 102 attendees, 5 construction days, 27 hours of construction, one water storage unit and hand-washing station, and one public building benefited."
            width={818}
            height={1024}
            className="h-auto w-full rounded-[20px] border border-[#e7d3c4] bg-white shadow-[0_18px_40px_rgba(121,80,39,0.08)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
