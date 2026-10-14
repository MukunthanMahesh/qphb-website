"use client"

import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Droplets,
  Flame,
  HeartPulse,
  Mountain,
  Percent,
  Users,
  Warehouse,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const INTEREST_FORM = "https://forms.gle/gnctfoax1NyW9FAo9"
const actionButtonClass = "w-fit justify-center px-6 has-[>svg]:px-6"

// Tile photos come from public/images/brigade/panama (matched by filename in BrigadePage).
// `back` is the full text shown when a card flips. Figures in the extra
// sentences were checked against: Panama 2023 census / MINSA (Indigenous share),
// World Bank (where Indigenous people live), UNICEF + MINSA (health workers),
// Panama Canal Authority + Britannica (canal).
const facts = [
  {
    key: "rural",
    title: "Population",
    value: "4.5M",
    label: "Population",
    back: (
      <>
        Panama has about <b>4.5 million</b> people. <b>17.2%</b> identify as
        Indigenous (2023 census), and about <b>two in three</b> of them live in
        comarcas (Indigenous territories) or other rural areas.
      </>
    ),
    icon: Users,
    tone: "from-accent to-[#5c3d1e]",
  },
  {
    key: "ages",
    title: "Age",
    value: "77%",
    label: "Ages 15–64",
    back: (
      <>
        <b>77%</b> of the population is between the ages of <b>15 and 64</b>.
      </>
    ),
    icon: Percent,
    tone: "from-[#C76604] to-[#8a4503]",
  },
  {
    key: "disparities",
    title: "Healthcare",
    value: "",
    label: "Healthcare Gap",
    back: (
      <>
        There are significant healthcare disparities between urban and rural
        Panama. The Ngäbe-Buglé comarca has about{" "}
        <b>3.3 health professionals per 10,000 people</b>, compared with{" "}
        <b>33.3</b> nationally.
      </>
    ),
    icon: HeartPulse,
    tone: "from-primary to-[#C76604]",
  },
  {
    key: "landscape",
    title: "Landscape",
    value: "",
    label: "Landscape",
    back: (
      <>
        Panama is known for the Panama Canal (about <b>80 km</b> long, open
        since <b>1914</b>), its Caribbean coastlines, and vibrant Indigenous
        cultures, with <b>seven</b> Indigenous peoples across the country.
      </>
    ),
    icon: Mountain,
    tone: "from-[#8a5a2e] to-accent",
  },
]

type Fact = (typeof facts)[number]

function FactCard({ fact, image }: { fact: Fact; image?: string }) {
  const [flipped, setFlipped] = useState(false)

  // Hover flips the card on devices with a mouse; touch devices tap to flip.
  const toggleOnTouch = () => {
    if (window.matchMedia("(hover: none)").matches) setFlipped((value) => !value)
  }

  return (
    <div
      tabIndex={0}
      onClick={toggleOnTouch}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          setFlipped((value) => !value)
        }
      }}
      className="group min-h-[14rem] cursor-default rounded-2xl outline-none [perspective:1000px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div
        className={`relative h-full min-h-[14rem] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] motion-reduce:duration-0 group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front: just a short, bold hint of what the card is about */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-white [backface-visibility:hidden] ${fact.tone}`}
        >
          {image ? (
            <>
              <Image src={image} alt="" fill sizes="(min-width: 1280px) 160px, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            </>
          ) : null}
          <span className="relative z-10 flex size-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <fact.icon className="size-[1.1rem]" aria-hidden="true" />
          </span>
          <div className="relative z-10">
            {fact.value ? (
              <p className="text-4xl font-extrabold leading-none">{fact.value}</p>
            ) : null}
            <p className="mt-1.5 text-base font-extrabold leading-tight">{fact.label}</p>
          </div>
        </div>

        {/* Back: the full text, with the key statistics in bold */}
        <div
          className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${fact.tone}`}
        >
          <div className="absolute inset-0 bg-black/25" />
          <p className="relative z-10 text-sm font-extrabold uppercase tracking-[0.08em] text-secondary">
            {fact.title}
          </p>
          <p className="relative z-10 mt-2 text-[0.76rem] leading-snug text-white/85 [&_b]:font-extrabold [&_b]:text-white">
            {fact.back}
          </p>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    label: "Eco-stoves",
    icon: Flame,
    detail:
      "Replaces open indoor fires with vented chimneys to prevent chronic respiratory illnesses and reduce wood consumption.",
  },
  {
    label: "Sanitary latrines",
    icon: Warehouse,
    detail:
      "Provides hygienic waste disposal systems to prevent soil contamination and waterborne parasites across households.",
  },
  {
    label: "Water & filters",
    icon: Droplets,
    detail:
      "Installs household water storage units and bio-sand filters to ensure consistent access to clean drinking water.",
  },
]

export function BrigadeHero({ images }: { images: Record<string, string> }) {
  return (
    <section className="bg-background pb-4 md:pb-5">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex min-h-[calc(100dvh-80px-1rem)] max-w-[1408px] overflow-hidden rounded-[20px] border border-[#e7d3c4] bg-background-secondary shadow-[0_18px_40px_rgba(121,80,39,0.08)] lg:max-w-[2000px] md:min-h-[calc(100dvh-112px-1.25rem)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex w-full flex-1 flex-col md:flex-row">
            <div className="relative h-[42vw] max-h-[280px] min-h-[190px] shrink-0 sm:max-h-[340px] md:h-auto md:max-h-none md:min-h-0 md:w-[44%]">
              <Image
                src="/images/brigade/group-arch.jpg"
                alt="Brigade volunteers standing under a yellow arch in Guatemala"
                fill
                priority
                sizes="(min-width: 768px) 44vw, 100vw"
                className="object-cover object-[center_62%] md:object-center"
              />
              <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white backdrop-blur-sm md:bottom-5 md:left-5">
                Guatemala · May 2026
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center px-6 py-6 text-center sm:px-10 md:items-start md:px-10 md:py-10 md:text-left lg:px-12">
              <div className="w-full max-w-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
                  <Image
                    src="/images/brigade/panama-flag.svg"
                    alt="Flag of Panama"
                    width={900}
                    height={600}
                    className="h-5 w-auto rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_2px_6px_rgba(121,80,39,0.2)]"
                  />
                  <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.18em] text-primary">
                    2027 Public Health Brigade
                  </p>
                </div>
                <h1 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-accent sm:text-4xl">
                  QPHB is going to <span className="text-primary">Panama</span>
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 sm:text-base">
                  Interested in global health, community outreach, or getting
                  hands-on experience working with communities abroad? Come
                  join{" "}
                  <strong className="font-bold text-accent">
                    Queen&apos;s Public Health Brigades
                  </strong>{" "}
                  on our 2027 Public Health Brigade to{" "}
                  <strong className="font-bold text-accent">Panama</strong> with
                  Global Brigades.
                </p>

                <div className="pt-2 text-left">
                  <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent/60 md:text-left">
                    Quick Facts about Panama
                    <span className="ml-2 hidden font-medium normal-case tracking-normal text-accent/50 [@media(hover:hover)]:inline">
                      (hover to flip)
                    </span>
                    <span className="ml-2 hidden font-medium normal-case tracking-normal text-accent/50 [@media(hover:none)]:inline">
                      (tap to flip)
                    </span>
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {facts.map((fact) => (
                      <FactCard key={fact.key} fact={fact} image={images[fact.key] || undefined} />
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-left">
                  <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent/60 md:text-left">
                    Projects we might work on
                    <span className="ml-2 hidden font-medium normal-case tracking-normal text-accent/50 [@media(hover:hover)]:inline">
                      (hover for details)
                    </span>
                  </p>
                  <ul className="mt-3 flex flex-wrap justify-center gap-x-7 gap-y-3 md:justify-start">
                    {projects.map((project) => (
                      <li key={project.label}>
                        <Tooltip
                          content={project.detail}
                          contentClassName="w-60 whitespace-normal text-left leading-snug"
                          className="cursor-default"
                        >
                          <span className="flex items-center gap-2 text-sm font-semibold text-accent">
                            <project.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="border-b-2 border-dotted border-primary/70 pb-0.5">
                              {project.label}
                            </span>
                          </span>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-left">
                  <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent/60 md:text-left">
                    Trip dates
                  </p>
                  <p className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-accent md:justify-start">
                    <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    May 2 to May 8, 2027
                  </p>
                </div>
              </div>

              <div className="mt-auto flex w-full flex-col items-center gap-2 pt-6 sm:flex-row md:justify-start">
                <Button asChild className={actionButtonClass}>
                  <a href={INTEREST_FORM} target="_blank" rel="noreferrer">
                    I&apos;m interested
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="px-4 has-[>svg]:px-4">
                  <a href="#about-the-trip">
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
