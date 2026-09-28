"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamHero() {
  return (
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex h-[calc(100dvh-80px-1rem)] max-w-[1408px] overflow-hidden rounded-[20px] border border-[#e7d3c4] bg-white shadow-[0_18px_40px_rgba(121,80,39,0.08)] lg:max-w-[2000px] md:h-[calc(100dvh-112px-1.25rem)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="pointer-events-none absolute top-0 left-[-18%] z-0 h-full w-1/2 overflow-hidden"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/images/orange_globe.svg"
              alt=""
              fill
              className="object-cover object-right"
            />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute top-0 right-[-18%] z-0 h-full w-1/2 overflow-hidden"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/images/orange_globe.svg"
              alt=""
              fill
              className="object-cover object-left"
            />
          </motion.div>

          <div className="relative z-10 flex h-full min-h-0 w-full flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:px-10 md:px-16">
            <motion.h1
              className="shrink-0 text-4xl font-extrabold uppercase tracking-[0.16em] text-accent sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Meet&nbsp;Our&nbsp;Team
            </motion.h1>

            <motion.div
              className="flex min-h-0 w-full flex-1 items-center justify-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <Image
                src="/images/QPHB_Illustration_Teams.svg"
                alt="Team illustration graphic"
                width={1000}
                height={1000}
                priority
                className="h-full max-h-full w-auto max-w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
