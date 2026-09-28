"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const INTEREST_FORM = "https://forms.gle/gnctfoax1NyW9FAo9"

export function BrigadeInterest() {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <motion.div
        className="mx-auto grid max-w-[1408px] overflow-hidden rounded-[20px] bg-accent text-white lg:max-w-[2000px] md:grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative min-h-[280px] sm:min-h-[360px]">
          <Image
            src="/images/brigade/group-night.jpg"
            alt="The brigade group together at night in Guatemala"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 md:py-16">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-secondary">
            Want to come?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Fill out the interest form
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            If you&apos;re interested in joining us, fill out the interest form.
            We&apos;ll reach out with more information about the application
            process, fundraising, upcoming info sessions, and everything you
            need to know about the brigade.
          </p>

          <div className="mt-8">
            <Button asChild>
              <a href={INTEREST_FORM} target="_blank" rel="noreferrer">
                Interest form
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
