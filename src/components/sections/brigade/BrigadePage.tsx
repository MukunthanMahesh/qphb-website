import { BrigadeHero } from "./BrigadeHero"
import { BrigadeInterest } from "./BrigadeInterest"
import { BrigadeMeaning } from "./BrigadeMeaning"
// import { BrigadeSample } from "./BrigadeSample" // hidden for now
import { BrigadeTrip } from "./BrigadeTrip"
import fs from "fs"
import path from "path"

function previousBrigadePhotos() {
  const directory = path.join(process.cwd(), "public/images/brigade/previous")
  return fs
    .readdirSync(directory)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/brigade/previous/${file}`)
}

// Each quick-fact tile picks up a photo from public/images/brigade/panama
// whose filename contains one of these words.
const panamaPhotoMatchers: Record<string, RegExp> = {
  rural: /rural-panama|indigenous|population/i,
  ages: /between|ages/i,
  disparities: /disparit|urban/i,
  landscape: /landscape|canal|coast/i,
}

function panamaCircleImages() {
  const directory = path.join(process.cwd(), "public/images/brigade/panama")
  const files = fs.readdirSync(directory).filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
  return Object.fromEntries(
    Object.entries(panamaPhotoMatchers).map(([key, pattern]) => {
      const match = files.find((file) => pattern.test(file))
      return [key, match ? `/images/brigade/panama/${match}` : ""]
    })
  )
}

export default function BrigadePage() {
  return (
    <>
      <BrigadeHero images={panamaCircleImages()} />
      <BrigadeTrip photos={previousBrigadePhotos()} />
      <BrigadeMeaning />
      {/* <BrigadeSample /> */}
      <BrigadeInterest />
    </>
  )
}
