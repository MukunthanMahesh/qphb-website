'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ConferenceSponsorsSection() {
  return (
    <section className="bg-background-secondary py-16 md:py-20 border-t border-border">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent">
          Sponsors and Partners
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-accent">
              Dunin-Deshpande Queen&apos;s Innovation Centre
            </h2>
            <p className="text-sm text-foreground/80 sm:text-base">
              We are grateful to the Dunin-Deshpande Queen&apos;s Innovation
              Centre (DDQIC) for generously sponsoring this year&apos;s
              conference.
            </p>
            <p className="text-sm text-foreground/80 sm:text-base">
              Their mission is to catalyze this potential, developing
              entrepreneurial mindsets and fostering a culture of innovation
              across Queen&apos;s University, the Kingston community, and
              globally. They build changemakers by encouraging and supporting
              entrepreneurial initiatives through startup incubators, workshops,
              programs, courses, and pitch competitions.
            </p>
            <p className="text-sm text-foreground/80 sm:text-base">
              Since 2012, DDQIC has supported Queen&apos;s students, staff,
              faculty, and Kingston community members to develop innovative
              ventures and create meaningful impact.
            </p>
            <p className="pt-2 text-sm text-foreground/80 sm:text-base">
              <Link
                href="https://www.queensu.ca/innovationcentre/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
              >
                <span>Learn more</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/10 blur-md" />
              <Link
                href="https://www.queensu.ca/innovationcentre/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the Dunin-Deshpande Queen's Innovation Centre website"
                className="relative block rounded-3xl border border-border bg-card/80 px-6 py-6 shadow-[0px_18px_40px_rgba(15,23,42,0.06)] hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/images/sponsors_and_partners/Queens-graphic-lockup-dunin-deshpandeinnovationcentre-horz-digital-black.png"
                  alt="Dunin-Deshpande Queen's Innovation Centre logo"
                  width={640}
                  height={200}
                  className="h-40 w-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-accent">
              URNCST Journal
            </h2>
            <p className="text-sm text-foreground/80 sm:text-base">
              The Undergraduate Research in Natural and Clinical Science and
              Technology (URNCST) Journal (pronounced &quot;earnest&quot;) is a
              leading open-access, Scopus-indexed, international peer-reviewed
              journal dedicated to showcasing undergraduate research. URNCST
              publishes abstracts from undergraduate conferences and case
              competitions and supports innovative initiatives in undergraduate
              research education.
            </p>
            <p className="text-sm text-foreground/80 sm:text-base">
              This conference is held in collaboration with the URNCST Journal,
              and the top three abstract submissions will have the opportunity
              to publish their abstracts in journals supported by the mentorship
              of conference judges.
            </p>
            <p className="pt-2 text-sm text-foreground/80 sm:text-base">
              <Link
                href="https://www.urncst.com/index.php/urncst"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
              >
                <span>Learn more</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/10 blur-md" />
              <Link
                href="https://www.urncst.com/index.php/urncst"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the URNCST Journal website"
                className="relative block rounded-3xl border border-border bg-card/80 px-6 py-6 shadow-[0px_18px_40px_rgba(15,23,42,0.06)] hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/images/sponsors_and_partners/URNCST-Journal-Logo.png"
                  alt="URNCST Journal logo"
                  width={640}
                  height={200}
                  className="h-40 w-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
