'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AboutStory() {
  return (
    <section className="min-h-[600px] bg-background-secondary py-16 md:py-24 flex flex-col border-b border-border overflow-hidden">

      <motion.div
        className="mx-auto text-center text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent mb-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.div>

      <div className="w-full">
        <motion.div
         
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-12 lg:flex-row-reverse lg:items-center lg:gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
      
          <div className="w-full max-w-xl lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-accent text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Why We Started
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base">
              <p>
                Queens Public Health Brigade is a network of passionate students, young 
                professionals, and community partners working together to tackle the world's 
                most pressing health challenges.
              </p>
              <p>
                From campus classrooms to rural clinics, we design and support initiatives 
                that put communities first and create long-term impact, not short-term fixes.
              </p>
            </div>
          </div>

      
          <div className="flex w-full justify-center lg:w-1/2">
            <motion.div
              className="relative w-full max-w-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
       
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-xl sm:h-28 sm:w-28" />
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-secondary/25 blur-xl sm:h-32 sm:w-32" />
              
              <div className="relative z-[1] aspect-video w-full rounded-xl border-2 border-dashed border-accent/20 bg-white flex flex-col items-center justify-center text-center p-6 shadow-xl transition-transform duration-500 hover:-translate-y-1">
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