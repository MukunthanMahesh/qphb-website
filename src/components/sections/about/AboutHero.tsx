'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Sparkles } from "lucide-react"

export function AboutHero() {
  return (
  <section className="min-h-[750px] bg-background-secondary pt-10 pb-14 md:pt-16 md:pb-20 flex flex-col border-b border-border">
      {/* Small Header Tag */}
      <motion.div
        className="hidden md:block mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Who We Are
      </motion.div>

      <div className="flex-1 flex items-center">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row lg:items-stretch lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Copy (Your Content) */}
          <div className="w-full max-w-xl lg:w-1/2 space-y-4 md:space-y-6 animate-fadeInUp">
            <h2 className="text-center text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
              Queens Public Health Brigade
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

            {/* Buttons Area (Using your provided design) */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-2">
                  <Button
                    asChild
                    className="bg-accent hover:opacity-90 transition-transform duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <Link href="/team">
                      <span>Join the Team</span>
                    </Link>
                  </Button>
                </div>

                <Button asChild variant="ghost" className="text-accent">
                  <Link href="/contact" className="flex items-center gap-2">
                    <span>Our Info</span>
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
