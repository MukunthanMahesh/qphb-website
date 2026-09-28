import { BrigadeHero } from "./BrigadeHero"
import { BrigadeImpact } from "./BrigadeImpact"
import { BrigadeInterest } from "./BrigadeInterest"
import { BrigadeTrip } from "./BrigadeTrip"

export default function BrigadePage() {
  return (
    <>
      <BrigadeHero />
      <BrigadeTrip />
      <BrigadeImpact />
      <BrigadeInterest />
    </>
  )
}
