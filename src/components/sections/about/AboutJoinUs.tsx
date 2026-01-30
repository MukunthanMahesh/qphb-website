'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutJoinUs() {
  return (

    <section className="pt-20 pb-6 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-accent rounded-[2rem] py-14 px-6 md:px-16 text-center shadow-lg border border-white/10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight relative z-10">
            Ready to change the <br className="hidden md:block" /> world with us?
          </h2>

          <div className="mt-8 flex flex-col items-center gap-6 relative z-10">
            <Button
              asChild
              size="lg"
              className="bg-white text-accent hover:bg-slate-50 font-extrabold text-lg px-12 py-7 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
              <Link href="/join">Apply for Membership</Link>
            </Button>

            <p className="text-white/80 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold mt-2">
              Queens Public Health Brigade • 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}