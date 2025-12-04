import Image from "next/image"

const IMPACT_ITEMS = [
  {
    title: "Fundraising",
    description:
      "Fueling Public Health Brigades projects at Queen's and abroad through year-round campaigns.",
    image: {
      src: "/images/undraw_wallet_diag.svg",
      alt: "Illustration of fundraising and donations",
    },
  },
  {
    title: "Awareness & Education",
    description:
      "Hosting the annual Public Health Conference to equip students with skills to take action.",
    image: {
      src: "/images/undraw_sharing-knowledge_2jx3.svg",
      alt: "Illustration of presenting and sharing knowledge",
    },
  },
  {
    title: "Community Events",
    description:
      "Partnering with Kingston nonprofits to bring health equity conversations into our local community.",
    image: {
      src: "/images/undraw_special-event_hv54.svg",
      alt: "Illustration of community gathering",
    },
  },
  {
    title: "Global Connection",
    description:
      "Part of the Global Brigades network with 190+ chapters working across Latin America and West Africa.",
    image: {
      src: "/images/undraw_global-team_8jok.svg",
      alt: "Illustration of global collaboration",
    },
  },
]

export function ImpactSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent">
            How we create impact
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-foreground/80 sm:text-base">
            Each initiative is student-led and designed to connect global health insight with
            action. Explore how our teams turn conferences, events, and travel brigades into
            measurable change.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2">
          {IMPACT_ITEMS.map(({ title, description, image }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-border/40 bg-card shadow-[0px_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-60 overflow-hidden bg-background-secondary">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-secondary/15" />
              </div>

              <div className="flex flex-1 flex-col gap-3 px-8 py-8">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.4em] text-accent/80">
                  {title}
                </span>
                <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
