import { lazy, Suspense } from 'react'
import { PageLoader } from '../components/ui'

// Yayındaki kitap deneyimi ana sayfanın tek ve kesin sürümüdür.
// Ayrı paket, oturumuyla doğrudan panele giden kullanıcılara tanıtım
// sayfasının kodunu indirmez.
const LandingExperience = lazy(() => import('./LandingPageEnhanced'))

export default function LandingPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <LandingExperience />
    </Suspense>
  )
}
