import "@/app/globals.css"
import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"
import type { Metadata } from "next"
import { Source_Sans_3 } from "next/font/google"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Queen’s Public Health Brigades",
  description:
    "Official website of Queen’s Public Health Brigades — promoting public health awareness through our annual conference and case competition.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Queen’s Public Health Brigades",
    description:
      "Join the QPHB conference and case competition to connect with leaders in global health.",
    url: "https://qphb.ca",
    siteName: "Queen’s Public Health Brigades",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "QPHB Conference 2025",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="pt-[80px] md:pt-[112px] min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-110px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
