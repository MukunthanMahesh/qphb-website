import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { HeartHandshake } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[790px] bg-background">
      <div className="w-full px-4">
        <div className="relative mx-auto flex h-[740px] md:h-[670px] 2xl:h-[810px] max-w-[1408px] lg:max-w-[2000px] overflow-hidden rounded-[20px] bg-black">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/public-health-brigades-home-2025.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 flex w-full flex-col justify-between bg-linear-to-r from-black/70 via-black/45 to-black/10 p-6 sm:p-10 md:p-16">
            <div className="max-w-xl space-y-4 md:space-y-6 text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
                Queen’s Public Health Brigades
              </p>
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                The largest student-led movement for global health equity.
              </h1>
              <p className="text-sm md:text-base text-white/85">
                A student-led community advancing health equity through our
                annual conference, communty events, and global brigades.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Tooltip content="Coming Soon!" side="top">
                <Button variant="default" disabled>
                  <span className="flex items-center gap-2">
                    <HeartHandshake className="size-4" aria-hidden="true" />
                    <span>Join a Brigade</span>
                  </span>
                </Button>
              </Tooltip>
              <Button variant="ghost">
                Get Involved At Queen&apos;s
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
