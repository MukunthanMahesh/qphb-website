"use client"

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

interface NameCardProps {
  name: string
  role: string
  program: string
  imagesrc: string
  index?: number
}

export function NameCard({
  name,
  role,
  program,
  imagesrc,
  index = 0,
}: NameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLParagraphElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)
  const [nameSizeClass, setNameSizeClass] = useState("text-sm sm:text-base")

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)")
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  // Shrink name if it wraps onto multiple lines at the default size
  useLayoutEffect(() => {
    const el = nameRef.current
    if (!el) return

    const styles = getComputedStyle(el)
    const lineHeight = parseFloat(styles.lineHeight) || 24
    const lines = el.scrollHeight / lineHeight

    if (lines > 2.2) {
      setNameSizeClass("text-xs leading-snug")
    } else if (lines > 1.2) {
      setNameSizeClass("text-xs sm:text-sm leading-snug")
    } else {
      setNameSizeClass("text-sm sm:text-base leading-relaxed")
    }
  }, [name])

  // Entering from below: tip back → center: flat → scrolled above: tip forward/down
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [37, 0, -37])
  const useTilt = isDesktop === true && !prefersReducedMotion
  const useFade = isDesktop === false || !!prefersReducedMotion

  return (
    <div ref={cardRef} className="md:[perspective:1200px]">
      <motion.div
        className="h-auto w-65 rounded-2xl border border-white/10 p-0.5 shadow-[0_24px_60px_rgba(121,80,39,0.18)] backdrop-blur bg-[conic-gradient(at_center,_orange_0%,_#fff7ee_25%,_orange_50%,_#fff7ee_75%,_orange_100%)]"
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
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: useFade ? index * 0.06 : 0,
        }}
      >
        <div className="h-full w-full rounded-2xl border border-black/10 bg-white pt-6 pb-3">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-[#FFD8C3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagesrc}
              alt={`${name} headshot`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-3">
            <p
              ref={nameRef}
              className={`font-normal text-foreground text-center ${nameSizeClass}`}
            >
              {name}
            </p>

            <p className="font-bold text-sm leading-relaxed text-[#C76604] sm:text-base text-center">
              {role}
            </p>

            <p className="font-normal text-sm text-muted-foreground text-center">
              {program}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
