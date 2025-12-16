'use client'

import { motion } from "framer-motion"

export function ConferenceItinerarySection() {
  return (
    <section id="schedule" className="bg-background py-16 md:py-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent">
            Event itinerary
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-accent">
            How the day is structured
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-foreground/80 sm:text-base">
            Arrive for registration and opening remarks, hear from our three
            speakers, and end the day with a hands-on case competition and
            awards.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-[0px_18px_40px_rgba(15,23,42,0.06)]">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead className="bg-background-secondary/70">
              <tr className="text-left">
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80 sm:px-6">
                  Time
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80 sm:px-6">
                  Session
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  11:00 am
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Delegate check-in &amp; informal networking
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  11:25 am
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Welcome &amp; opening remarks
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  11:30 am
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Talk with <span className="font-semibold">Ozma Aziz</span>
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  12:30 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Lunch &amp; networking
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  1:15 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Talk with <span className="font-semibold">Phil Bowers</span>
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  2:15 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Talk with{" "}
                  <span className="font-semibold">Dr. Jennifer Carpenter</span>
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  3:15 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Case competition briefing &amp; abstract overview
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  3:30 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Team work time on case competition
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  5:00 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Case competition presentations
                </td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-3 align-top text-foreground/80 sm:px-6">
                  6:00 pm
                </td>
                <td className="px-4 py-3 align-top text-foreground sm:px-6">
                  Closing remarks &amp; delegate awards
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
