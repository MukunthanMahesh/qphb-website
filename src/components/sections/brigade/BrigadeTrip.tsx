"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function BrigadeTrip({ photos }: { photos: string[] }) {
  return (
    <section id="about-the-trip" className="scroll-mt-28 bg-background py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[minmax(260px,380px)_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            A little about the trip
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-accent sm:text-4xl">
            Working alongside communities
          </h2>
          <div className="mt-5 space-y-4 text-justify text-base leading-relaxed text-foreground/85 hyphens-auto" lang="en">
            <p>
              Panama has made major progress in expanding access to healthcare,
              but rural and Indigenous communities, particularly in the{" "}
              <strong className="font-bold text-accent">
                Comarca and Darién regions
              </strong>
              , continue to face significant barriers to care due to geography,
              infrastructure, and limited resources.
            </p>
            <p>
              During the brigade, we will work alongside local communities
              through{" "}
              <strong className="font-bold text-accent">
                mobile medical services, Community Health Worker initiatives,
                and sustainable public health projects.
              </strong>
            </p>
          </div>
          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent/50">
            Photos from previous brigades
          </p>
        </motion.div>

        <PhotoReel photos={photos} />
      </div>
    </section>
  )
}

function PhotoReel({ photos }: { photos: string[] }) {
  if (!photos?.length) return null

  // Deal photos into two columns so every file in the folder is used.
  const left = photos.filter((_, index) => index % 2 === 0)
  const right = photos.filter((_, index) => index % 2 === 1)
  const padded = (column: string[]) =>
    column.length >= 3 ? column : [...column, ...photos].slice(0, 3)

  return (
    <div className="relative h-[480px] overflow-hidden sm:h-[540px] lg:h-[580px]">
      <div className="grid h-full grid-cols-2 gap-3">
        <RisingColumn photos={padded(left)} duration={`${Math.max(30, left.length * 9)}s`} />
        <RisingColumn photos={padded(right)} duration={`${Math.max(36, right.length * 11)}s`} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  )
}

function RisingColumn({ photos, duration }: { photos: string[]; duration: string }) {
  const loop = [...photos, ...photos]

  return (
    <div className="overflow-hidden">
      <div
        className="brigade-rise flex flex-col"
        style={{ ["--brigade-duration" as string]: duration }}
      >
        {loop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative mb-3 aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[20px]"
          >
            <Image
              src={src}
              alt={index < photos.length ? "Photo from a previous brigade" : ""}
              fill
              sizes="(min-width: 1024px) 28vw, 45vw"
              className="object-cover"
              aria-hidden={index >= photos.length}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
