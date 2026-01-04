'use client'

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const MESSAGE_MAX_LENGTH = 1000

const INQUIRY_OPTIONS = [
  "General",
  "Conference",
  "Brigades",
  "Sponsorship",
  "Other",
] as const

type InquiryOption = (typeof INQUIRY_OPTIONS)[number]

interface ContactFormProps {
  selectedInquiry: InquiryOption
  onInquiryChange: (value: InquiryOption) => void
  message: string
  onMessageChange: (value: string) => void
  variant?: "overlay" | "standalone"
}

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryOption>("General")
  const [message, setMessage] = useState("")

  return (
    <section className="min-h-[790px] bg-background">
      <div className="w-full px-4">
        <motion.div
          className="relative mx-auto flex min-h-[640px] md:min-h-[670px] 2xl:min-h-[810px] max-w-[1408px] lg:max-w-[2000px] overflow-hidden rounded-[28px] bg-black"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/queens-university-sunset.jpg"
              alt="Queen's campus space where QPHB hosts events"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/40" />
          </div>

          <div className="relative z-10 flex w-full flex-col justify-between gap-10 p-6 sm:p-10 md:flex-row md:gap-12 md:p-14">
            {/* Left content: headline + info */}
            <div className="flex flex-1 flex-col justify-between text-white">
              <div className="max-w-xl space-y-4 md:space-y-6">
                <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.25em] text-secondary">
                  Contact QPHB
                </p>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                  You have questions,
                  <br />
                  we have answers.
                </h1>
                <p className="text-sm text-white/80 sm:text-base">
                  Whether you&apos;re curious about our annual conference, joining a brigade,
                  collaborating on events, or supporting our work, our team is here to help.
                </p>
              </div>

              <div className="mt-10 grid gap-8 text-sm md:mt-16 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Location
                  </p>
                  <p className="text-sm text-white">
                    Queen&apos;s University
                    <br />
                    Kingston, Ontario
                    <br />
                    Canada
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Social Media
                  </p>
                  <div className="space-y-1 text-sm">
                    <a
                      href="https://www.instagram.com/queensphb"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/90 underline-offset-4 hover:text-secondary hover:underline"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Email
                  </p>
                  <a
                    href="mailto:queenspublichealthbrigade@gmail.com
"
                    className="text-sm text-white/90 underline-offset-4 hover:text-secondary hover:underline"
                  >
                    queenspublichealthbrigade@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right content: form card (desktop/tablet) */}
            <div className="hidden md:block">
              <ContactForm
                selectedInquiry={selectedInquiry}
                onInquiryChange={setSelectedInquiry}
                message={message}
                onMessageChange={setMessage}
                variant="overlay"
              />
            </div>
          </div>
        </motion.div>

        {/* Standalone form on mobile, below hero */}
        <div className="mt-8 md:hidden">
          <ContactForm
            selectedInquiry={selectedInquiry}
            onInquiryChange={setSelectedInquiry}
            message={message}
            onMessageChange={setMessage}
            variant="standalone"
          />
        </div>
      </div>
    </section>
  )
}

function ContactForm({
  selectedInquiry,
  onInquiryChange,
  message,
  onMessageChange,
  variant = "overlay",
}: ContactFormProps) {
  const cardBase =
    "w-full max-w-md rounded-[26px] bg-card/95 p-6 text-left backdrop-blur-lg sm:p-7"
  const cardVariantClasses =
    variant === "overlay"
      ? "mt-4 self-center md:mt-0 shadow-[0_24px_60px_rgba(15,23,42,0.6)]"
      : "mx-auto shadow-[0_14px_30px_rgba(15,23,42,0.18)]"

  const motionProps =
    variant === "overlay"
      ? { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } }
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

  return (
    <motion.div
      className={`${cardBase} ${cardVariantClasses}`}
      {...motionProps}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <h2 className="text-lg font-semibold text-accent">Tell us what you need</h2>
      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
        Our team is ready to help with questions about events, brigades, or getting involved.
      </p>

      <form
        className="mt-6 space-y-5"
        onSubmit={(event) => {
          event.preventDefault()
          const form = event.currentTarget as HTMLFormElement
          const formData = new FormData(form)

          const firstName = formData.get("firstName") || ""
          const lastName = formData.get("lastName") || ""
          const country = formData.get("country") || ""
          const phone = formData.get("phone") || ""
          const email = formData.get("email") || ""

          const subject = encodeURIComponent(
            `QPHB Website Contact – ${selectedInquiry}`
          )
          const bodyLines = [
            "Website contact form submission from qphb.ca",
            "",
            "------------------------------",
            "Contact details",
            "------------------------------",
            `Name: ${firstName} ${lastName}`,
            country ? `Country: ${country}` : "",
            phone ? `Phone: ${phone}` : "",
            `Email: ${email}`,
            `Type of inquiry: ${selectedInquiry}`,
            "",
            "",
            "------------------------------",
            "Message",
            "------------------------------",
            message,
            "",
            "--",
          ]

          const body = encodeURIComponent(
            bodyLines.filter((line) => line !== "").join("\n")
          )
          window.location.href = `mailto:queensphb@gmail.com?subject=${subject}&body=${body}`
        }}
      >
        {/* Name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="relative">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder=" "
                maxLength={50}
                className="peer w-full rounded-full border border-input bg-background px-4 pb-2.5 pt-5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              />
              <label
                htmlFor="firstName"
                className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-accent/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-accent"
              >
                First name
              </label>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="relative">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder=" "
                maxLength={50}
                className="peer w-full rounded-full border border-input bg-background px-4 pb-2.5 pt-5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              />
              <label
                htmlFor="lastName"
                className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-accent/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-accent"
              >
                Last name
              </label>
            </div>
          </div>
        </div>

        {/* Country / Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="relative">
              <input
                id="country"
                name="country"
                type="text"
                placeholder=" "
                maxLength={56}
                className="peer w-full rounded-full border border-input bg-background px-4 pb-2.5 pt-5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              />
              <label
                htmlFor="country"
                className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-accent/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-accent"
              >
                Country
              </label>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder=" "
                maxLength={32}
                className="peer w-full rounded-full border border-input bg-background px-4 pb-2.5 pt-5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              />
              <label
                htmlFor="phone"
                className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-accent/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-accent"
              >
                Phone (optional)
              </label>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder=" "
              maxLength={100}
              className="peer w-full rounded-full border border-input bg-background px-4 pb-2.5 pt-5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-accent/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-accent"
            >
              Email address
            </label>
          </div>
        </div>

        {/* Type of inquiry pills */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">
            Type of inquiry
          </p>
          <div className="flex flex-wrap gap-2">
            {INQUIRY_OPTIONS.map((option) => {
              const isActive = option === selectedInquiry
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onInquiryChange(option)}
                  className={[
                    "rounded-full border px-4 py-1.5 text-xs font-medium transition",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-foreground hover:border-primary/60 hover:bg-primary/5",
                  ].join(" ")}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder=" "
              value={message}
              onChange={(event) => onMessageChange(event.target.value)}
              maxLength={MESSAGE_MAX_LENGTH}
              className="peer w-full resize-y rounded-3xl border border-input bg-background px-4 pb-3 pt-7 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 min-h-[140px] max-h-[260px]"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-3 text-[11px] font-medium text-muted-foreground transition-colors peer-focus:text-accent"
            >
              Message
            </label>
          </div>
          <div className="mt-1 flex justify-end text-[11px] text-muted-foreground">
            {message.length} / {MESSAGE_MAX_LENGTH} characters
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="default"
          className="mt-2 w-full rounded-full"
        >
          Submit
        </Button>
      </form>
    </motion.div>
  )
}
