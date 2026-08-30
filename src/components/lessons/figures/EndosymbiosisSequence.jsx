import InteractiveIllustration from './InteractiveIllustration'
import { ArrowHeads } from './primitives'

const REGIONS = [
  {
    key: 'yutulma',
    zoom: { x: 17, y: 50, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/endo-engulf.jpg',
      title: 'Yutulma',
      alt: 'Öncül ökaryot hücre zarının aerob bakteriyi sindirmeden çevreleyerek içine almasının yakın görünümü.',
    },
    shape: { x: 0, y: 0, width: 505, height: 1024 },
  },
  {
    key: 'ortak-yasam',
    zoom: { x: 50, y: 50, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/endo-symbiosis.jpg',
      title: 'Ortak yaşam',
      alt: 'Hücre içinde korunan aerob bakterinin konak hücreye enerji sağlamasını gösteren ortak yaşam yakın görünümü.',
    },
    shape: { x: 515, y: 0, width: 505, height: 1024 },
  },
  {
    key: 'organel',
    zoom: { x: 83, y: 50, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/endo-organel.jpg',
      title: 'Organalleşme',
      alt: 'Çift zarlı mitokondri, kendi halkasal DNA’sı ve çekirdeğe tarihsel gen aktarımını gösteren yakın görünüm.',
    },
    shape: { x: 1030, y: 0, width: 506, height: 1024 },
  },
]

const MARKERS = [
  { key: 'yutulma', x: 88, y: 88 },
  { key: 'ortak-yasam', x: 604, y: 88 },
  { key: 'organel', x: 1120, y: 88 },
]

export default function EndosymbiosisSequence({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/mitokondri/endosimbiyoz-v2.jpg"
      srcSet="/lesson-assets/mitokondri/endosimbiyoz-v2-900.jpg 900w, /lesson-assets/mitokondri/endosimbiyoz-v2.jpg 1440w"
      alt="Bir bakterinin öncül hücre tarafından sarılması, sindirilmeden hücre içinde yaşaması ve çift zarlı mitokondriye dönüşmesini gösteren üç aşamalı bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    >
      <ArrowHeads prefix="endo-ill" />
      <text x="150" y="92" className="fill-ink/75" fontSize="27" fontWeight="850" letterSpacing="2">YUTULMA</text>
      <text x="665" y="92" className="fill-ink/75" fontSize="27" fontWeight="850" letterSpacing="2">ORTAK YAŞAM</text>
      <text x="1180" y="92" className="fill-ink/75" fontSize="27" fontWeight="850" letterSpacing="2">ORGANELLEŞME</text>
      <path d="M470 485 H548" className="fill-none stroke-brand-600" strokeWidth="5" markerEnd="url(#endo-ill-arrow-brand)" />
      <path d="M990 485 H1068" className="fill-none stroke-brand-600" strokeWidth="5" markerEnd="url(#endo-ill-arrow-brand)" />
    </InteractiveIllustration>
  )
}
