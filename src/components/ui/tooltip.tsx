import * as React from "react"

import { cn } from "@/lib/utils"

type TooltipProps = {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
  side?: "top" | "bottom"
}

export function Tooltip({
  content,
  children,
  className,
  side = "top",
}: TooltipProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center group",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-foreground/95 px-3 py-2 text-xs font-medium text-background shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150",
          side === "top" &&
            "bottom-full mb-2 left-1/2 -translate-x-1/2",
          side === "bottom" &&
            "top-full mt-2 left-1/2 -translate-x-1/2"
        )}
      >
        {content}
      </span>
    </span>
  )
}
