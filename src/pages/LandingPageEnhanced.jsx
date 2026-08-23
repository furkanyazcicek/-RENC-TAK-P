import AboutSection from '../components/landing/AboutSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import LiveDataSection from '../components/landing/LiveDataSection'
import ShowcaseSection from '../components/landing/ShowcaseSection'
import { InteractiveVisualShowcase, NotesShowcase } from '../components/landing/product/LearningJourney'
import QuestionDemoSection from '../components/landing/product/QuestionDemoSection'
import {
  ClosingCTA,
  ContactSection,
  HeroSection,
  LandingFooter,
  LandingNavbar,
  StatsStrip,
} from './LandingPageLegacy'

/**
 * Mevcut ana sayfa bileşenlerinin tamamını koruyan geliştirilmiş sürüm.
 * Yeni ürün deneyimleri, eski hikâye akışını silmeden araya eklenir.
 */
export default function LandingPageEnhanced() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <LandingNavbar />
      <main>
        <HeroSection />
        <StatsStrip />

        {/* Yeni ürün vitrini: yalnızca tarayıcı içi tanıtım durumu kullanır. */}
        <NotesShowcase />
        <InteractiveVisualShowcase />
        <QuestionDemoSection />

        {/* Önceki ana sayfanın bütün ana bölümleri aynen korunur. */}
        <HowItWorksSection />
        <ShowcaseSection />
        <LiveDataSection />
        <AboutSection />
        <ClosingCTA />
        <ContactSection />
      </main>
      <LandingFooter />
    </div>
  )
}
