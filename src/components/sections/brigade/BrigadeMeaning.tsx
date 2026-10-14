"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

function B({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-accent">{children}</strong>
}

const parts: {
  kicker: string
  title: string
  image: string
  alt: string
  position?: string
  body: ReactNode
}[] = [
  {
    kicker: "01",
    title: "Where we operate",
    image: "/images/brigade/group-planning.jpg",
    alt: "Volunteers and a local mason working together on a concrete water storage unit",
    body: (
      <>
        Public Health Brigades work in <B>remote and rural communities</B> in{" "}
        <B>Honduras, Panama, Nicaragua, Guatemala, and Ghana</B>. Many of those
        communities are still without basic health infrastructure, and
        preventable illness is common. Before any building starts, volunteers
        meet community leaders, including the Basic Sanitation Committee that
        looks after local health projects.
      </>
    ),
  },
  {
    kicker: "02",
    title: "What gets built",
    image: "/images/brigade/group-building-honduras.jpg",
    alt: "Volunteers and a staff member laying concrete blocks around a latrine pit",
    body: (
      <>
        Volunteers work with <B>local masons</B> and with the families who will
        use what gets built. The projects follow what that household needs:{" "}
        <B>eco-stoves</B> with a chimney in place of an open indoor fire,{" "}
        <B>latrines and showers</B>,{" "}
        <B>water storage units and drinking-water filters</B>, and sometimes
        concrete floors. Those changes cut smoke in the home and lower the risk
        of waterborne and vector-borne illness, including Chagas disease.
        Families take part in the build, which is how the projects stay in use
        after the group leaves.
      </>
    ),
  },
  {
    kicker: "03",
    title: "Beyond the build",
    image: "/images/brigade/woman-holding-child.JPG",
    alt: "A volunteer hugging a smiling child in a school courtyard",
    position: "object-[center_35%]",
    body: (
      <>
        The days are split between the build and teaching. Volunteers lead{" "}
        <B>workshops on hygiene, handwashing, and sanitation</B> with community
        members and school-aged children. Public Health Brigades also work
        alongside <B>other Global Brigades programs</B>, including Water,
        Engineering, and Medical, so the week connects to community-led work
        that continues after everyone goes home.
      </>
    ),
  },
]

export function BrigadeMeaning() {
  return (
    <section id="what-a-brigade" className="scroll-mt-28 bg-background-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            Public Health Brigades
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-accent sm:text-4xl">
            What is a &lsquo;Brigade&rsquo;?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            A Global Public Health Brigade is a <B>7-10 day</B> service-learning
            trip. University students and local professionals travel to
            under-resourced rural communities to{" "}
            <B>build health-promoting home infrastructure</B> and{" "}
            <B>teach disease prevention</B>.
          </p>
        </motion.div>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {parts.map((part, index) => (
            <motion.article
              key={part.title}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={part.image}
                    alt={part.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className={`object-cover ${part.position ?? ""}`}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-[0.18em] text-primary">
                  {part.kicker}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-accent sm:text-3xl">
                  {part.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/85">
                  {part.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
