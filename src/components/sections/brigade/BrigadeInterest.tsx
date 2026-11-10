"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const INTEREST_FORM = "https://forms.gle/gnctfoax1NyW9FAo9"
const actionButtonClass = "w-fit justify-center px-6 has-[>svg]:px-6"

export function BrigadeInterest() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  // null until mount so we never start at opacity 0 on desktop (see useTilt race below).
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)")
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  // Progress 0 -> card just entering the viewport; 1 -> card centered on screen.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  })

  // Positive rotateX tips the top of the card away (tilted backward).
  const rotateX = useTransform(scrollYProgress, [0, 1], [37, 0])
  // Scroll tilt only from the Tailwind `md` breakpoint up (not phones).
  const useTilt = isDesktop === true && !prefersReducedMotion
  // Fade-up only once we know we're on a small screen (or reduced motion).
  const useFade = isDesktop === false || !!prefersReducedMotion

  return (
    <section
      ref={sectionRef}
      className="bg-background px-6 pb-0 pt-16 md:px-10 md:pt-24 md:[perspective:1200px]"
    >
      <motion.div
        className="mx-auto grid max-w-6xl overflow-hidden rounded-[20px] bg-accent text-white shadow-[0_24px_60px_rgba(121,80,39,0.18)] md:grid-cols-2"
        style={
          useTilt
            ? {
                rotateX,
                transformPerspective: 1200,
                transformOrigin: "center center",
                opacity: 1,
              }
            : undefined
        }
        initial={useFade ? { opacity: 0, y: 24 } : false}
        whileInView={useFade ? { opacity: 1, y: 0 } : undefined}
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
            Join us at Panama
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
            <Button asChild className={actionButtonClass}>
              <a href={INTEREST_FORM} target="_blank" rel="noreferrer">
                I&apos;m interested
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">Have questions? Reach out to us!</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/queenspublichealthbrigades/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/90 transition-colors hover:text-secondary"
                  >
                    <InstagramIcon className="size-5 shrink-0 text-secondary" />
                    <span>@queenspublichealthbrigades</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:queenspublichealthbrigade@gmail.com"
                    className="flex items-center gap-3 text-white/90 transition-colors hover:text-secondary"
                  >
                    <Mail className="size-5 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="break-all">queenspublichealthbrigade@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <a
              href={INTEREST_FORM}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit shrink-0 flex-col items-center gap-2"
            >
              <Image
                src="/images/brigade/panama-2027-qr.png"
                alt="QR code for the Panama 2027 interest form"
                width={140}
                height={140}
                className="size-32 rounded-lg bg-white sm:size-36"
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-secondary">
                Scan for the form
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}
