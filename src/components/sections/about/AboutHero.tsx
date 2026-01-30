'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[850x] bg-background-secondary py-12 md:py-20 border-b border-border overflow-hidden flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full">
 
        <motion.div
          className="hidden md:block text-center text-xs font-extrabold uppercase tracking-[0.25em] text-accent mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.div>

        <motion.div

          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
    
          <div className="w-full max-w-xl lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-accent leading-[1.1] tracking-tight">
              Queens Public Health Brigade
            </h1>

            <div className="space-y-4 text-slate-600 text-base md:text-lg">
              <p>
                Queens Public Health Brigade is a network of passionate students, young 
                professionals, and community partners working together to tackle the world's 
                most pressing health challenges.
              </p>
              <p>
                From campus classrooms to rural clinics, we design and support initiatives 
                that put communities first and create long-term impact.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild className="bg-accent hover:opacity-90 px-8 py-6 text-base">
                <Link href="/team">Join the Team</Link>
              </Button>

              <Button asChild variant="ghost" className="text-accent hover:bg-accent/5">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Our Info</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>


          <div className="flex w-full justify-center lg:w-1/2">
            <motion.div
              className="relative w-full max-w-[500px] aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
          
              <div className="absolute -inset-10 bg-accent/5 blur-3xl rounded-full" />

              <Image
                src="/images/undraw_people_ka7y.svg"
                alt="Community illustration"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}