"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const photos = [
  {
    src: "/images/brigade/construction.jpg",
    alt: "Volunteer with a pickaxe during a construction day in Guatemala",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/brigade/kids-group.jpg",
    alt: "Volunteers and children together during the Guatemala brigade",
    className: "aspect-[16/10]",
  },
  {
    src: "/images/brigade/community-kids.jpg",
    alt: "A volunteer with children outside a community building in Guatemala",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/brigade/construction-bucket.jpg",
    alt: "Two volunteers at a construction site in Guatemala",
    className: "aspect-[3/4]",
  },
  {
    src: "/images/brigade/gathering.jpg",
    alt: "A volunteer at a community gathering in Guatemala",
    className: "aspect-[3/4]",
  },
]

export function BrigadeTrip() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-[1408px] items-start gap-10 px-4 lg:max-w-[2000px] lg:grid-cols-[minmax(260px,380px)_1fr] lg:gap-14">
        <motion.div
          className="lg:sticky lg:top-32"
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
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
            <p>
              Panama has made major progress in expanding access to healthcare,
              but rural and Indigenous communities, particularly in the Comarca
              and Darién regions, continue to face significant barriers to care
              due to geography, infrastructure, and limited resources.
            </p>
            <p>
              During the brigade, we will work alongside local communities
              through mobile medical services, Community Health Worker
              initiatives, and sustainable public health projects.
            </p>
          </div>
          <p className="mt-6 text-sm font-semibold text-accent">
            Photos from our May 2026 brigade in Guatemala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-3 sm:gap-4">
              <PhotoFrame {...photos[0]} />
              <PhotoFrame {...photos[1]} />
            </div>
            <div className="grid gap-3 sm:gap-4">
              <PhotoFrame {...photos[2]} />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <PhotoFrame {...photos[3]} />
                <PhotoFrame {...photos[4]} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhotoFrame({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-[20px] ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
    </div>
  )
}
