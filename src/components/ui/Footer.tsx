import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 border-none bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center md:flex-1 md:justify-start">
          <Image
            src="/qphb_logo.png"
            alt="Queen’s Public Health Brigades logo"
            width={160}
            height={50}
            className="h-auto w-[140px] sm:w-[160px] object-contain"
          />
        </div>

        <p className="font-medium text-center text-[11px] tracking-[0.18em] uppercase text-accent md:flex-2 md:text-center">
          © {new Date().getFullYear()} Queen’s Public Health Brigades.
        </p>

        <div className="flex items-center gap-5 text-[11px] tracking-[0.18em] uppercase md:flex-1 md:justify-end">
          <a
            href="mailto:qphb@queensu.ca"
            className="font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/queenspublichealthbrigades/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QPHB on Instagram"
            className="text-accent hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
