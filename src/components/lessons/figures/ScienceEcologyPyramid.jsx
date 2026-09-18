import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — EKOLOJİ PİRAMİDİ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.6.1.1'in açıklaması: "Ekoloji piramitlerinde enerji aktarımı,
 * vücut büyüklüğü, birey sayısı ve biyolojik birikim vurgulanır."
 * Öğrenci bu dört eğilimi ayrı ayrı ezberlemek yerine TEK bir yön
 * kuralıyla okumalı: piramitte yukarı çıktıkça iki şey azalır, iki şey
 * artar. Şema bu yüzden piramidin yanına dört eğilimi yönleriyle koyar.
 *
 * Program "Parazit besin zincirlerine değinilmez." dediği için şemada
 * parazit yoktur; vücut büyüklüğü eğilimi bu yüzden "genellikle" diye
 * yazılır ve istisna tartışmasına girilmez.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   uretici → birincil → ikincil → ucuncul
 */

const DEFAULT = {
  basamaklar: [
    { ad: 'Üreticiler', ornek: 'Otlar' },
    { ad: '1. basamak tüketiciler', ornek: 'Çekirge (otçul)' },
    { ad: '2. basamak tüketiciler', ornek: 'Kurbağa' },
    { ad: '3. basamak tüketiciler', ornek: 'Yılan' },
  ],
}

export default function ScienceEcologyPyramid({ data, activeRegion }) {
  const basamaklar =
    Array.isArray(data?.basamaklar) && data.basamaklar.length === 4 ? data.basamaklar : DEFAULT.basamaklar
  const anahtarlar = ['uretici', 'birincil', 'ikincil', 'ucuncul']

  const merkez = 392
  const taban = 350
  const tepe = 70
  const yukseklik = (taban - tepe) / 4
  const yariGenislik = (y) => (150 * (y - tepe)) / (taban - tepe)

  const dolgular = ['fill-aqua-100 stroke-aqua-500', 'fill-brand-50 stroke-brand-400', 'fill-brand-100 stroke-brand-400', 'fill-brand-200 stroke-brand-500']

  const egilimler = [
    { metin: ['Enerji miktarı', 'azalır'], yukari: false },
    { metin: ['Birey sayısı', 'azalır'], yukari: false },
    { metin: ['Vücut büyüklüğü', 'genellikle artar'], yukari: true },
    { metin: ['Biyolojik birikim', 'artar'], yukari: true },
  ]

  return (
    <FigureSvg
      viewBox="0 0 760 400"
      title="Ekoloji piramidi"
      desc={
        'Dört basamaklı ekoloji piramidi. En altta üreticiler (otlar), üstünde 1. basamak tüketiciler (çekirge), ' +
        'onun üstünde 2. basamak tüketiciler (kurbağa), en üstte 3. basamak tüketiciler (yılan). ' +
        'Piramitte yukarı çıktıkça enerji miktarı ve birey sayısı azalır; vücut büyüklüğü genellikle artar; biyolojik birikim artar.'
      }
    >
      <ArrowHeads prefix="lgspir" />

      {basamaklar.map((b, i) => {
        const alt = taban - i * yukseklik
        const ust = alt - yukseklik
        const ga = yariGenislik(alt)
        const gu = yariGenislik(ust)
        const ortaY = (alt + ust) / 2
        const noktalar =
          i === 3
            ? `${merkez - ga},${alt} ${merkez + ga},${alt} ${merkez},${ust}`
            : `${merkez - ga},${alt} ${merkez + ga},${alt} ${merkez + gu},${ust} ${merkez - gu},${ust}`
        const solKenar = merkez - (ga + gu) / 2
        return (
          <g key={anahtarlar[i]} {...region(anahtarlar[i], activeRegion)}>
            <polygon points={noktalar} className={dolgular[i]} strokeWidth="1.6" />
            <text x={merkez} y={i === 3 ? ortaY + 12 : ortaY + 5} textAnchor="middle" className="fill-ink/80" fontSize="12.5" fontWeight="700">
              {i + 1}
            </text>
            {/* Soldaki etiket ve kılavuz çizgisi */}
            <line x1="206" y1={ortaY} x2={solKenar - 6} y2={ortaY} className="stroke-ink/20" strokeWidth="1" strokeDasharray="3 3" />
            <text x="24" y={ortaY - 3} className="fill-ink" fontSize="13.5" fontWeight="700">
              {b.ad}
            </text>
            <text x="24" y={ortaY + 15} className="fill-ink/60" fontSize="12.5" fontStyle="italic">
              {b.ornek}
            </text>
          </g>
        )
      })}

      {/* Sağ sütun: yukarı çıktıkça ne olur? */}
      <text x="572" y="86" className="fill-ink/50" fontSize="11.5" fontWeight="700" letterSpacing="0.06em">
        YUKARI ÇIKTIKÇA
      </text>
      {egilimler.map((e, i) => {
        const y = 128 + i * 62
        return (
          <g key={e.metin[0]}>
            <line
              x1="582"
              y1={e.yukari ? y + 20 : y - 14}
              x2="582"
              y2={e.yukari ? y - 12 : y + 18}
              className={e.yukari ? 'stroke-accent-500' : 'stroke-aqua-500'}
              strokeWidth="2.6"
              markerEnd={e.yukari ? 'url(#lgspir-arrow)' : 'url(#lgspir-arrow-aqua)'}
            />
            <text x="600" y={y} className="fill-ink" fontSize="13" fontWeight="650">
              {e.metin[0]}
            </text>
            <text x="600" y={y + 17} className={e.yukari ? 'fill-ink/70' : 'fill-aqua-700'} fontSize="12.5">
              {e.metin[1]}
            </text>
          </g>
        )
      })}

      {/* Enerjinin akış yönü */}
      <text x={merkez} y={taban + 30} textAnchor="middle" className="fill-ink/60" fontSize="12">
        Enerji alttan üste aktarılır; her basamakta bir kısmı harcanır.
      </text>
    </FigureSvg>
  )
}
