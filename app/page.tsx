import { HeroSection } from "@/components/hero-section"
import { AboutHarezmi } from "@/components/about-harezmi"
import { EducationModel } from "@/components/education-model"
import { FiveFoundations } from "@/components/five-foundations"
import { ApplicationCalendar } from "@/components/application-calendar"
import { TeamSection } from "@/components/team-section"
import { Navigation } from "@/components/navigation"
import { PartnersSection } from "@/components/partners-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutHarezmi />
        <EducationModel />
        <FiveFoundations />
        <ApplicationCalendar />
        <TeamSection />
        <PartnersSection />
      </main>
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Harezmi Eğitim Modeli. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
