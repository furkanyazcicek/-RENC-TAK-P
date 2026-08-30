import InteractiveIllustration from './InteractiveIllustration'
import { region } from './primitives'

const REGIONS = [
  {
    key: 'basit',
    zoom: { x: 28, y: 55, scale: 1.55 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/simple-linear-flux.jpg',
      title: 'Basit difüzyon: doğrusal artış',
      alt: 'Derişim farkı iki katına çıktığında aynı zar alanından geçen molekül sayısının da yaklaşık iki katına çıktığını gösteren karşılaştırma.',
      note: 'Basit difüzyonda sabit sayıda kapı yoktur; zarın bütün uygun yüzeyi geçişe açıktır. Derişim farkı büyüdükçe birim zamanda zara çarpıp geçen molekül sayısı orantılı biçimde artar.',
    },
    shape: [
      { x: 20, y: 370, width: 700, height: 570, rx: 55 },
      { type: 'path', d: 'M120 360 L1260 65 L1320 145 L150 390 Z' },
    ],
  },
  {
    key: 'kolaylastirilmis',
    zoom: { x: 74, y: 56, scale: 1.55 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/carrier-saturation.jpg',
      title: 'Taşıyıcıların dolma süreci',
      alt: 'Düşük, orta ve yüksek derişimde aynı sayıdaki taşıyıcı proteinin giderek daha büyük bölümünün dolmasını gösteren üç aşamalı karşılaştırma.',
      note: 'Başta boş taşıyıcı çoktur; eklenen her molekül hızı belirgin artırır. Derişim yükseldikçe boş taşıyıcı azalır, eğrinin yükselişi yavaşlar ve yataya yaklaşır.',
    },
    shape: [
      { x: 720, y: 370, width: 700, height: 570, rx: 55 },
      { type: 'path', d: 'M120 360 C320 150 520 130 1260 130 L1260 225 C560 225 360 240 165 405 Z' },
    ],
  },
  {
    key: 'doygunluk',
    zoom: { x: 78, y: 28, scale: 1.75 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/carrier-number-ceiling.jpg',
      title: 'Taşıma tavanını yükseltmek',
      alt: 'Aynı yüksek derişimde üç taşıyıcılı zar ile altı taşıyıcılı zarın taşıma kapasitesini karşılaştıran açıklayıcı sahne.',
      note: 'Doygunlukta dışarıya daha fazla madde eklemek kuyruğu uzatır ama hızı artırmaz. Tavanı yükselten değişken taşıyıcı sayısıdır: daha çok taşıyıcı, aynı anda daha çok geçiş demektir.',
    },
    shape: [
      { x: 720, y: 370, width: 700, height: 570, rx: 55 },
      { x: 650, y: 80, width: 700, height: 170, rx: 60 },
    ],
  },
]

const MARKERS = [
  { key: 'basit', x: 1285, y: 78 },
  { key: 'kolaylastirilmis', x: 820, y: 185 },
  { key: 'doygunluk', x: 1330, y: 215 },
]

export default function DiffusionRateGraph({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/hucre-zari/diffusion-saturation-v1.jpg"
      srcSet="/lesson-assets/hucre-zari/diffusion-saturation-v1-900.jpg 900w, /lesson-assets/hucre-zari/diffusion-saturation-v1.jpg 1440w"
      alt="Üstte basit ve kolaylaştırılmış difüzyonun hız eğrileri, altta doğrudan geçiş ile sınırlı sayıdaki taşıyıcı proteinleri karşılaştıran deneysel levha."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    >
      <defs>
        <marker id="hz-graph-tip" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
          <path d="M0,0 L0,8 L11,4 z" className="fill-ink/55" />
        </marker>
      </defs>

      <line x1="120" y1="360" x2="120" y2="55" className="stroke-ink/45" strokeWidth="3" markerEnd="url(#hz-graph-tip)" />
      <line x1="120" y1="360" x2="1330" y2="360" className="stroke-ink/45" strokeWidth="3" markerEnd="url(#hz-graph-tip)" />
      <text x="62" y="225" textAnchor="middle" className="fill-ink/65" fontSize="24" fontWeight="850" transform="rotate(-90 62 225)">TAŞIMA HIZI</text>
      <text x="720" y="405" textAnchor="middle" className="fill-ink/65" fontSize="24" fontWeight="850">DERİŞİM FARKI</text>

      <g {...region('basit', activeRegion)}>
        <path d="M120 360 L1260 70" className="fill-none stroke-aqua-700" strokeWidth="8" strokeLinecap="round" />
        <text x="1010" y="92" className="fill-aqua-800" fontSize="28" fontWeight="900">Basit difüzyon</text>
      </g>

      <g {...region('kolaylastirilmis', activeRegion)}>
        <path d="M120 360 C300 170 510 145 1260 145" className="fill-none stroke-brand-700" strokeWidth="8" strokeLinecap="round" />
        <text x="245" y="165" className="fill-brand-800" fontSize="28" fontWeight="900">Kolaylaştırılmış difüzyon</text>
      </g>

      <g {...region('doygunluk', activeRegion)}>
        <line x1="645" y1="145" x2="1280" y2="145" className="stroke-brand-400" strokeWidth="3" strokeDasharray="14 10" />
        <text x="1010" y="210" className="fill-ink/75" fontSize="24" fontWeight="850">taşıyıcılar dolu · tavan</text>
      </g>
    </InteractiveIllustration>
  )
}
