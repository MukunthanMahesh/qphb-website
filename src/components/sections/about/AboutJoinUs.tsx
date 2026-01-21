'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutJoinUs() {
  return (
    <section className="w-full bg-white pt-16 pb-0 flex justify-center px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-accent rounded-[2.5rem] w-full max-w-6xl py-16 px-8 text-center shadow-xl flex flex-col items-center justify-center gap-10 border border-orange-200/20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
          Ready to change the <br /> 
          world with us?
        </h2>

        <div className="flex flex-col items-center gap-4">
            <Link href="/join">
            <Button 
                size="lg" 
                className="bg-white hover:bg-orange-50 text-accent font-extrabold text-xl px-14 py-8 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
                APPLY FOR MEMBERSHIP
            </Button>
            </Link>
            
            <p className="text-white/80 text-[11.5px] uppercase tracking-[0.3em] font-bold mt-2">
            Queens Public Health Brigade • 2026
            </p>
        </div>
      </motion.div>
    </section>
  )
}