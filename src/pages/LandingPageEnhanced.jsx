import { BookOpenCheck, MousePointerClick, Sparkles } from 'lucide-react'
import { useState } from 'react'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import LiveDataSection from '../components/landing/LiveDataSection'
import ShowcaseSection from '../components/landing/ShowcaseSection'
import { InteractiveVisualShowcase, NotesShowcase } from '../components/landing/product/LearningJourney'
import QuestionDemoSection from '../components/landing/product/QuestionDemoSection'
import DepthScene from '../components/landing/product/DepthScene'
import LandingInfoDialogs from '../components/landing/product/LandingInfoDialogs'
import {
  ClosingCTA,
  HeroSection,
  LandingFooter,
  LandingNavbar,
  StatsStrip,
} from './LandingPageLegacy'
import '../styles/homepage-depth.css'

/**
 * Mevcut ana sayfa bileşenlerinin tamamını koruyan geliştirilmiş sürüm.
 * Yeni ürün deneyimleri, eski hikâye akışını silmeden araya eklenir.
 */
export default function LandingPageEnhanced() {
  const [activeDialog, setActiveDialog] = useState(null)

  return (
    <div className="homepage-depth min-h-screen overflow-x-hidden bg-paper">
      <LandingNavbar
        onAbout={() => setActiveDialog('about')}
        onContact={() => setActiveDialog('contact')}
      />
      <main>
        <DepthScene
          variant="hero"
          pointer
          intensity={1}
          foreground={(
            <>
              <span className="depth-float depth-float--hero-top">
                <MousePointerClick aria-hidden="true" />
                Dokun, ayrıntıyı keşfet
              </span>
              <span className="depth-float depth-float--hero-bottom">
                <Sparkles aria-hidden="true" />
                Not · Görsel · Soru
              </span>
            </>
          )}
        >
          <HeroSection />
        </DepthScene>
        <StatsStrip />

        {/* Yeni ürün vitrini: yalnızca tarayıcı içi tanıtım durumu kullanır. */}
        <DepthScene
          variant="notes"
          intensity={0.72}
          foreground={(
            <span className="depth-float depth-float--note">
              <BookOpenCheck aria-hidden="true" />
              Vurgu → görsel → kısa kontrol
            </span>
          )}
        >
          <NotesShowcase />
        </DepthScene>
        <DepthScene variant="interactive" intensity={0.58}>
          <InteractiveVisualShowcase />
        </DepthScene>
        <DepthScene variant="questions" intensity={0.48}>
          <QuestionDemoSection />
        </DepthScene>

        {/* Önceki ana sayfanın bütün ana bölümleri aynen korunur. */}
        <HowItWorksSection />
        <ShowcaseSection />
        <LiveDataSection />
        <ClosingCTA />
      </main>
      <LandingFooter />
      <LandingInfoDialogs activeDialog={activeDialog} onClose={() => setActiveDialog(null)} />
    </div>
  )
}
