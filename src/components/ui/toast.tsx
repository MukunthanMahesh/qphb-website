"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

type ToastProps = {
  children: React.ReactNode
  className?: string
}

export function Toast({ children, className }: ToastProps) {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "mb-6 flex overflow-hidden rounded-2xl border border-border bg-white text-sm text-foreground shadow-[0px_12px_30px_rgba(121,80,39,0.08)] sm:text-base",
            className
          )}
        >
          <div className="w-1 shrink-0 bg-primary" aria-hidden="true" />
          <div className="flex flex-1 items-start justify-between gap-4 px-4 py-3 sm:items-center sm:px-5">
            <p className="font-medium leading-snug">{children}</p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss notification"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
