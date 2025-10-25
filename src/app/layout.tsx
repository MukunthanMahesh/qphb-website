import "@/app/globals.css"
import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"

export const metadata = {
  title: "Queen’s Public Health Brigades",
  description: "Conference, competition, and community in public health.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
