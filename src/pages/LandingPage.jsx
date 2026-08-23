import { lazy, Suspense } from 'react'
import { PageLoader } from '../components/ui'

// Üç deneyim birbirinden ayrıdır. Varsayılan sürüm eski ana sayfanın bütün
// bileşenlerini korur ve yeni ürün tanıtımlarını bunların arasına ekler.
// VITE_LANDING_VERSION=legacy ile saf eski, =product ile alternatif ürün
// lansmanı kod değişmeden açılabilir.
const landingVersion = import.meta.env.VITE_LANDING_VERSION
const LandingExperience = lazy(() => {
  if (landingVersion === 'legacy') return import('./LandingPageLegacy')
  if (landingVersion === 'product') return import('./LandingPageProduct')
  return import('./LandingPageEnhanced')
})

export default function LandingPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <LandingExperience />
    </Suspense>
  )
}
