import type { Metadata } from "next"
import BrigadePage from "@/components/sections/brigade/BrigadePage"

export const metadata: Metadata = {
  title: "Panama 2027 Brigade | Queen’s Public Health Brigades",
  description:
    "Join Queen’s Public Health Brigades on our 2027 Public Health Brigade to Panama, May 2 to May 8, 2027, with Global Brigades.",
}

export default function Page() {
  return <BrigadePage />
}
