"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamHero() {
    return (    
        <section className="relative bg-background pt-[10px] flex flex-col overflow-hidden">
            <motion.div
                className="pointer-events-none absolute top-0 h-full left-[-250px] w-1/2 overflow-hidden z-0"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Image
                src="/images/orange_globe.svg"    
                alt="globe graphic"
                fill
                className="object-cover object-right opacity-100"
                />
            </motion.div>
            <motion.div
                className="pointer-events-none absolute right-[-250px] top-0 h-full w-1/2 overflow-hidden z-0"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                <Image
                src="/images/orange_globe.svg"
                alt="globe graphic"
                fill
                className="object-cover object-left opacity-100"
                />
            </motion.div>
            <div className="text-center z-10 pb-0">
                <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                >
                <h1 className="text-[3rem] font-extrabold uppercase tracking-[0.25em] text-accent text-center">
                    <span>MEET&nbsp;</span>

                    {/* Make OUR definitely visible */}
                    <span className="relative inline-block stroke-text text-accent">
                    OUR&nbsp;
                    </span>

                    <span className="relative inline-block">
                     TEAM<span className="absolute left-0 right-0 -bottom-2 h-2 rounded-full bg-black/20 blur-sm" />
                    </span>
                </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="mt-0 mb-0 flex justify-center"
                    >
                    <Image
                        src="/images/QPHB_Illustration_Teams.svg"
                        alt="Team illustration graphic"
                        width={1000}
                        height={1000}
                        className="object-contain"
                        priority 
                    />
                </motion.div>
            </div>
        </section>
    )
}