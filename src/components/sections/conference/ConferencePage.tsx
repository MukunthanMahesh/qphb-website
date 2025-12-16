import { ConferenceHeroSection } from "./ConferenceHeroSection"
import { ConferenceItinerarySection } from "./ConferenceItinerarySection"

export default function ConferencePage() {
  return (
    <main className="bg-background">
      <ConferenceHeroSection />
      <ConferenceItinerarySection />
    </main>
  )
}
