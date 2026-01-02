import { ConferenceHeroSection } from "./ConferenceHeroSection"
import { ConferenceItinerarySection } from "./ConferenceItinerarySection"
import { ConferenceSponsorsSection } from "./ConferenceSponsorsSection"

export default function ConferencePage() {
  return (
    <main className="bg-background">
      <ConferenceHeroSection />
      <ConferenceItinerarySection />
      <ConferenceSponsorsSection />
    </main>
  )
}
