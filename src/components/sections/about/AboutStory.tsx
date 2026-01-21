'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Sparkles } from "lucide-react"

export function AboutStory() {
 return (
    <section className="min-h-[600px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col border-b border-border">
      {/* Small Header Tag */}
      <motion.div
        className="hidden md:block mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Our Story
      </motion.div>

      <div className="flex-1 flex items-center">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row-reverse lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Copy (Your Content) */}
          <div className="w-full max-w-xl lg:w-1/2 space-y-4 md:space-y-6 animate-fadeInUp">
            <h2 className="text-center text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
              Why We Started
            </h2>
            <p className="max-w-xl text-sm text-foreground/85 sm:text-base">
              Queens Public Health Brigade is a network of passionate students, young 
              professionals, and community partners working together to tackle the world's 
              most pressing health challenges.
            </p>
            <p className="max-w-xl text-sm text-foreground/85 sm:text-base">
              From campus classrooms to rural clinics, we design and support initiatives 
              that put communities first and create long-term impact, not short-term fixes.
            </p>
          </div>

          {/* Right: Illustration (Your Placeholder) */}
          <div className="flex w-full justify-center lg:w-1/2 mt-8 lg:mt-0 items-center">
            <motion.div
              className="relative h-auto w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {/* Decorative Glowing Orbs from original code */}
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-sm sm:-left-8 sm:-top-8 sm:h-28 sm:w-28" />
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-secondary/25 blur-sm sm:-right-10 sm:-bottom-10 sm:h-32 sm:w-32" />
              
              {/* Your Placeholder Box styled to fit the layout */}
              <div className="relative z-[1] aspect-video w-full rounded-xl border-2 border-dashed border-accent/20 bg-white flex flex-col items-center justify-center text-center p-6 shadow-xl transition-transform duration-500 ease-out hover:-translate-y-1">
                <p className="text-accent/60 font-bold text-xs tracking-widest uppercase">
                  Image Placeholder
                </p>
                <p className="text-slate-400 font-medium italic text-sm mt-1">
                  *Group pic of QPHB*
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
