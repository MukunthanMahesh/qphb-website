"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const days = [
  {
    day: "Day 1",
    title: "Travel day",
    body: "After you arrive, you travel to your lodging and meet the in-country team you will work with all week. The day is for settling in and meeting the other volunteers. The week starts from collaboration, cultural respect, and a shared commitment to health equity.",
  },
  {
    day: "Day 2",
    title: "Community visit",
    body: "You travel to a partner community for a tour and an introduction to the Basic Sanitation Committee, so you can understand what the community needs. After the visit, you and the staff draft a school handwashing plan from what you learned about the community and the school where the public health project will happen.",
  },
  {
    day: "Days 3–6",
    title: "Construction",
    body: "Each day, you work with local professionals and community members on the public health project.",
  },
  {
    day: "Day 6",
    title: "Farewell",
    body: "After lunch on the last day with community partners, you present the school handwashing plan, along with any other deliverables and workshops from the project. Then you say goodbye.",
  },
  {
    day: "Day 7",
    title: "Travel day",
    body: "One last breakfast with the team, then the airport. You head home after a week of service and learning, with new perspectives on health equity.",
  },
]

export function BrigadeSample() {
  const [active, setActive] = useState(0)
  const selected = days[active]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            Sample brigade
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-accent sm:text-4xl">
            What a trip can look like
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            One way the days can run, from arrival through the ride back to
            the airport. Farewell is the afternoon of the last construction
            day. Select a day to read it.
          </p>
        </motion.div>

        <ol className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {days.map((item, index) => {
            const isActive = index === active
            return (
              <li key={`${item.day}-${item.title}`} className="min-w-[8.5rem] flex-1">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  className="flex w-full flex-col items-start gap-3 text-left"
                >
                  <span className="flex w-full items-center">
                    <span
                      className={`size-3 shrink-0 rounded-full border-2 ${
                        isActive
                          ? "border-primary bg-primary"
                          : "border-[#c4a48a] bg-background"
                      }`}
                    />
                    <span
                      className={`h-px flex-1 ${
                        index === days.length - 1 ? "bg-transparent" : "bg-[#e7d3c4]"
                      }`}
                    />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-primary">
                      {item.day}
                    </span>
                    <span
                      className={`mt-1 block text-base font-extrabold ${
                        isActive ? "text-accent" : "text-accent/70"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <div className="mt-6 rounded-[20px] bg-background-secondary p-6 md:p-8" aria-live="polite">
          <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-primary">
            {selected.day}
          </p>
          <h3 className="mt-1 text-2xl font-extrabold text-accent">{selected.title}</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">
            {selected.body}
          </p>
        </div>
      </div>
    </section>
  )
}
