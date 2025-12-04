import { HeroSection } from "./HeroSection"
import { ImpactSection } from "./ImpactSection"
import { MissionSection } from "./MissionSection"
import { FeaturedEventSection } from "./FeaturedEventSection"

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <FeaturedEventSection />
    </>
  )
}
