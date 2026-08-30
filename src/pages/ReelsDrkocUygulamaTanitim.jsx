import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import '../styles/reels-drkoc-uygulama-tanitim.css'

const TOPLAM_SURE = 63

const sinirla = (deger, alt = 0, ust = 1) => Math.min(ust, Math.max(alt, deger))
const yumusat = (deger) => {
  const t = sinirla(deger)
  return t * t * (3 - (2 * t))
}
const aralik = (zaman, baslangic, bitis, yumusama = 0.5) => (
  sinirla((zaman - baslangic) / yumusama)
  * sinirla((bitis - zaman) / yumusama)
)

function Marka({ alt = 'ÖĞRENME DÖNGÜSÜ' }) {
  return (
    <g transform="translate(72 92)">
      <path
        d="M0 28 34 10l34 18-34 18L0 28Zm10 10v22c0 14 48 14 48 0V38"
        fill="none"
        stroke="var(--rdt-beyaz)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="88" y="35" className="rdt-marka">DRKOÇ</text>
      <text x="88" y="67" className="rdt-marka-alt">{alt}</text>
    </g>
  )
}

function OrtakZemin({ zaman, bolum }) {
  const ilerleme = sinirla(zaman / TOPLAM_SURE)
  return (
    <>
      <defs>
        <linearGradient id="rdtZemin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--rdt-gece)" />
          <stop offset="0.54" stopColor="var(--rdt-lacivert)" />
          <stop offset="1" stopColor="var(--rdt-gece-koyu)" />
        </linearGradient>
        <radialGradient id="rdtIsikMor">
          <stop offset="0" stopColor="var(--rdt-mor)" stopOpacity="0.24" />
          <stop offset="1" stopColor="var(--rdt-mor)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rdtIsikCam">
          <stop offset="0" stopColor="var(--rdt-cam)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--rdt-cam)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rdtAurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--rdt-mor-acik)" />
          <stop offset="0.5" stopColor="var(--rdt-mor)" />
          <stop offset="1" stopColor="var(--rdt-cam)" />
        </linearGradient>
        <filter id="rdtGolgesi" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="22" stdDeviation="28" floodColor="var(--rdt-gece-koyu)" floodOpacity="0.42" />
        </filter>
      </defs>
      <rect width="1080" height="1920" fill="url(#rdtZemin)" />
      <circle cx="190" cy="560" r="520" fill="url(#rdtIsikMor)" />
      <circle cx="930" cy="1190" r="580" fill="url(#rdtIsikCam)" />
      <path d="M0 1700 C310 1594 720 1798 1080 1650 V1920 H0Z" fill="var(--rdt-lacivert-acik)" opacity="0.52" />
      <rect x="72" y="52" width="936" height="4" rx="2" fill="var(--rdt-beyaz)" opacity="0.12" />
      <rect x="72" y="52" width={936 * ilerleme} height="4" rx="2" fill="url(#rdtAurora)" />
      <Marka />
      <text x="1008" y="1796" className="rdt-bolum" textAnchor="end">{bolum}</text>
    </>
  )
}

function YolCizgisi({ d, ilerleme = 1, opaklik = 1 }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="url(#rdtAurora)"
      strokeWidth="8"
      strokeLinecap="round"
      pathLength="1"
      strokeDasharray="1"
      strokeDashoffset={1 - sinirla(ilerleme)}
      opacity={opaklik}
    />
  )
}

function Kanca({ zaman }) {
  const opaklik = aralik(zaman, 0, 4.2, 0.55)
  const birlesme = yumusat((zaman - 1.2) / 1.55)
  const ikinci = yumusat((zaman - 1.65) / 0.5)
  const parcaOpakligi = 0.82 * (1 - yumusat((zaman - 2.15) / 0.7))
  return (
    <g opacity={opaklik}>
      <text x="540" y="318" className="rdt-ust" textAnchor="middle">ÇALIŞIYORSUN</text>
      <text x="540" y="410" className="rdt-kanca" textAnchor="middle">Cevabı bulmak yetmez.</text>
      <text x="540" y="498" className="rdt-kanca-vurgu" textAnchor="middle" opacity={ikinci}>
        Sonraki adımı da bilmelisin.
      </text>

      <g opacity={parcaOpakligi}>
        <g transform={`translate(${96 + (280 * birlesme)} ${720 + (180 * birlesme)}) rotate(${-8 + (8 * birlesme)})`}>
          <rect width="300" height="226" rx="34" fill="var(--rdt-yuzey)" />
          <text x="30" y="48" className="rdt-kart-etiket">SORU FOTOĞRAFI</text>
          <text x="30" y="108" className="rdt-formul-koyu">v = v₀ + at</text>
          <path d="M30 150 H258 M30 178 H210" stroke="var(--rdt-murekkep)" strokeOpacity="0.14" strokeWidth="12" strokeLinecap="round" />
        </g>
        <g transform={`translate(${684 - (286 * birlesme)} ${690 + (210 * birlesme)}) rotate(${7 - (7 * birlesme)})`}>
          <rect width="300" height="232" rx="34" fill="var(--rdt-yuzey)" />
          <text x="30" y="48" className="rdt-kart-etiket">GELİŞİM</text>
          <path d="M34 178 98 138 152 154 216 82 266 62" fill="none" stroke="var(--rdt-mor)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="266" cy="62" r="12" fill="var(--rdt-cam)" />
        </g>
        <g transform={`translate(${126 + (250 * birlesme)} ${1212 - (236 * birlesme)}) rotate(${6 - (6 * birlesme)})`}>
          <rect width="286" height="212" rx="34" fill="var(--rdt-yuzey)" />
          <text x="28" y="48" className="rdt-kart-etiket">DERS NOTU</text>
          <rect x="28" y="78" width="230" height="22" rx="11" fill="var(--rdt-mor)" opacity="0.15" />
          <path d="M28 132 H246 M28 166 H198" stroke="var(--rdt-murekkep)" strokeOpacity="0.14" strokeWidth="12" strokeLinecap="round" />
        </g>
        <g transform={`translate(${692 - (296 * birlesme)} ${1220 - (244 * birlesme)}) rotate(${-6 + (6 * birlesme)})`}>
          <rect width="284" height="214" rx="34" fill="var(--rdt-yuzey)" />
          <text x="28" y="48" className="rdt-kart-etiket">BU HAFTA</text>
          <circle cx="54" cy="98" r="12" fill="var(--rdt-cam)" />
          <path d="M82 98 H246 M82 144 H224 M82 182 H194" stroke="var(--rdt-murekkep)" strokeOpacity="0.15" strokeWidth="12" strokeLinecap="round" />
        </g>
      </g>

      <g opacity={yumusat((zaman - 2.2) / 0.55)}>
        <rect x="370" y="825" width="340" height="430" rx="66" fill="var(--rdt-yuzey-koyu)" stroke="var(--rdt-beyaz)" strokeOpacity="0.12" strokeWidth="3" />
        <rect x="410" y="872" width="260" height="16" rx="8" fill="var(--rdt-beyaz)" opacity="0.12" />
        <YolCizgisi d="M452 1052 C500 990 586 990 634 1052 C590 1116 500 1116 452 1052" ilerleme={yumusat((zaman - 2.35) / 0.72)} />
        <circle cx="452" cy="1052" r="16" fill="var(--rdt-mor-acik)" />
        <circle cx="540" cy="1024" r="16" fill="var(--rdt-cam)" />
        <circle cx="634" cy="1052" r="16" fill="var(--rdt-mor-acik)" />
        <text x="540" y="1178" className="rdt-telefon-oz" textAnchor="middle">TEK ÖĞRENME YOLU</text>
      </g>
    </g>
  )
}

function SoruCoz({ zaman }) {
  const opaklik = aralik(zaman, 3.5, 14.7, 0.65)
  const yukle = yumusat((zaman - 4.15) / 0.75)
  const tani = yumusat((zaman - 6.15) / 0.7)
  const adimIki = yumusat((zaman - 8.3) / 0.55)
  const adimUc = yumusat((zaman - 9.55) / 0.55)
  const takip = yumusat((zaman - 11.35) / 0.65)
  const aktar = yumusat((zaman - 12.75) / 0.6)
  return (
    <g opacity={opaklik}>
      <text x="540" y="306" className="rdt-ust" textAnchor="middle">AI SORU ÇÖZ</text>
      <text x="540" y="390" className="rdt-baslik" textAnchor="middle">Bir sorudan, eksiğine.</text>
      <g filter="url(#rdtGolgesi)">
        <rect x="76" y="460" width="928" height="1070" rx="58" fill="var(--rdt-yuzey)" />
      </g>
      <g opacity={yukle}>
        <rect x="132" y="528" width="816" height="252" rx="36" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <rect x="166" y="558" width="188" height="42" rx="21" fill="var(--rdt-mor)" opacity="0.11" />
        <text x="260" y="587" className="rdt-kucuk-vurgu" textAnchor="middle">DEMO SORU</text>
        <text x="166" y="653" className="rdt-soru">Durgun bir araç 3 m/s² ivmeyle</text>
        <text x="166" y="700" className="rdt-soru">4 saniye hızlanıyor. Son hızı?</text>
        <path d="M166 740 H914" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <circle cx="900" cy="552" r={18 + (8 * sinirla((zaman - 4.15) / 0.5))} fill="none" stroke="var(--rdt-cam)" strokeWidth="5" opacity={1 - sinirla((zaman - 4.15) / 0.8)} />
      </g>

      <g opacity={tani}>
        <rect x="132" y="812" width="816" height="92" rx="28" fill="var(--rdt-mor)" opacity="0.08" />
        <circle cx="174" cy="858" r="12" fill="var(--rdt-cam)" />
        <text x="204" y="850" className="rdt-kart-etiket">KONU TANINDI</text>
        <text x="204" y="882" className="rdt-konu">Fizik · Hareket</text>
        <rect x="794" y="833" width="112" height="48" rx="24" fill="var(--rdt-yuzey)" stroke="var(--rdt-mor)" strokeOpacity="0.28" strokeWidth="2" />
        <text x="850" y="865" className="rdt-rozet" textAnchor="middle">ORTA</text>
      </g>

      <g opacity={tani}>
        <text x="132" y="972" className="rdt-kart-etiket">TAHTADA ADIM ADIM</text>
        <g transform="translate(132 1002)">
          <rect width="816" height="322" rx="34" fill="var(--rdt-tahta)" />
          <text x="42" y="72" className="rdt-tahta-metin">1. v = v₀ + a·t</text>
          <text x="42" y="144" className="rdt-tahta-metin" opacity={adimIki}>2. v = 0 + 3·4</text>
          <rect x="28" y="174" width="760" height="104" rx="24" fill="var(--rdt-mor)" opacity={0.13 * adimUc} />
          <text x="42" y="245" className="rdt-tahta-sonuc" opacity={adimUc}>3. v = 12 m/s</text>
        </g>
      </g>

      <g opacity={takip}>
        <rect x="132" y="1362" width="204" height="74" rx="26" fill="var(--rdt-yuzey)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <text x="234" y="1409" className="rdt-etkilesim" textAnchor="middle">Neden?</text>
        <rect x="354" y="1362" width="310" height="74" rx="26" fill="var(--rdt-yuzey)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <text x="509" y="1409" className="rdt-etkilesim" textAnchor="middle">Burada takıldım</text>
        <g opacity={aktar}>
          <circle cx="700" cy="1399" r="12" fill="var(--rdt-cam)" />
          <text x="726" y="1390" className="rdt-kart-etiket">GELİŞİME EKLENDİ</text>
          <text x="726" y="1422" className="rdt-konu">Fizik · Hareket</text>
        </g>
      </g>
      <text x="540" y="1622" className="rdt-sahne-oz" textAnchor="middle" opacity={takip}>Takıldığın adımı sor.</text>
    </g>
  )
}

function Analiz({ zaman }) {
  const opaklik = aralik(zaman, 14.05, 25.5, 0.68)
  const metrik = yumusat((zaman - 14.75) / 0.8)
  const cizgi = yumusat((zaman - 17.1) / 2.25)
  const konu = yumusat((zaman - 21.0) / 0.7)
  return (
    <g opacity={opaklik}>
      <text x="540" y="300" className="rdt-ust" textAnchor="middle">ANALİZ</text>
      <text x="540" y="384" className="rdt-baslik" textAnchor="middle">Çalışman görünür olur.</text>
      <rect x="62" y="450" width="956" height="1095" rx="58" fill="var(--rdt-yuzey)" filter="url(#rdtGolgesi)" />
      <g opacity={metrik}>
        <g transform="translate(112 520)">
          <rect width="266" height="196" rx="34" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
          <text x="28" y="50" className="rdt-kart-etiket">BU HAFTA ÇALIŞMA</text>
          <text x="28" y="122" className="rdt-metrik">8 sa 20 dk</text>
          <text x="28" y="164" className="rdt-artis">↑ 1 sa 10 dk</text>
        </g>
        <g transform="translate(407 520)">
          <rect width="266" height="196" rx="34" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
          <text x="28" y="50" className="rdt-kart-etiket">BU HAFTA ÇÖZÜLEN</text>
          <text x="28" y="122" className="rdt-metrik">426</text>
          <text x="28" y="164" className="rdt-yardimci">soru</text>
        </g>
        <g transform="translate(702 520)">
          <rect width="266" height="196" rx="34" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
          <text x="28" y="50" className="rdt-kart-etiket">SON TYT NETİ</text>
          <text x="28" y="122" className="rdt-metrik">74,5</text>
          <text x="28" y="164" className="rdt-artis">↑ 3,25 net</text>
        </g>
      </g>

      <g transform="translate(112 764)">
        <text x="0" y="0" className="rdt-kart-baslik">Son 14 günün çalışma süresi</text>
        <text x="790" y="0" className="rdt-kart-etiket" textAnchor="end">SAAT</text>
        <path d="M0 358 H790 M0 246 H790 M0 134 H790" stroke="var(--rdt-cizgi)" strokeWidth="2" />
        <path
          d="M12 326 C96 280 148 300 212 238 S332 250 392 188 S508 218 568 138 S688 158 778 70"
          fill="none"
          stroke="var(--rdt-mor)"
          strokeWidth="12"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - cizgi}
        />
        <circle cx="778" cy="70" r="16" fill="var(--rdt-cam)" opacity={cizgi} />
        <rect x="652" y="6" width="138" height="50" rx="25" fill="var(--rdt-mor)" opacity={0.12 * cizgi} />
        <text x="721" y="39" className="rdt-rozet" textAnchor="middle" opacity={cizgi}>8 sa 20 dk</text>
      </g>

      <g transform="translate(112 1240)" opacity={konu}>
        <rect width="856" height="224" rx="36" fill="var(--rdt-mor)" opacity="0.08" />
        <circle cx="58" cy="60" r="14" fill="var(--rdt-cam)" />
        <text x="90" y="51" className="rdt-kart-etiket">DERS → KONU → GELİŞİM</text>
        <text x="90" y="98" className="rdt-konu-buyuk">Fizik · Hareket</text>
        <rect x="90" y="132" width="610" height="20" rx="10" fill="var(--rdt-cizgi)" />
        <rect x="90" y="132" width="329" height="20" rx="10" fill="url(#rdtAurora)" />
        <text x="764" y="159" className="rdt-yuzde" textAnchor="middle">%54</text>
        <text x="90" y="194" className="rdt-yardimci">Öncelikli tekrar alanı</text>
      </g>
      <text x="540" y="1634" className="rdt-sahne-oz" textAnchor="middle" opacity={konu}>Sadece sonuç değil, değişim.</text>
    </g>
  )
}

function AiKoc({ zaman }) {
  const opaklik = aralik(zaman, 24.9, 36.5, 0.68)
  const soru = yumusat((zaman - 25.55) / 0.7)
  const bag = yumusat((zaman - 27.3) / 0.85)
  const yanit = yumusat((zaman - 28.55) / 0.85)
  const plan = yumusat((zaman - 31.1) / 0.75)
  return (
    <g opacity={opaklik}>
      <text x="540" y="300" className="rdt-ust" textAnchor="middle">AI KOÇ</text>
      <text x="540" y="384" className="rdt-baslik rdt-baslik-uzun" textAnchor="middle">Herkese aynı program değil.</text>
      <rect x="76" y="450" width="928" height="1090" rx="58" fill="var(--rdt-yuzey)" filter="url(#rdtGolgesi)" />
      <g opacity={soru}>
        <rect x="350" y="548" width="570" height="116" rx="38" fill="var(--rdt-mor)" />
        <text x="392" y="620" className="rdt-sohbet-kullanici">Bu hafta neye ağırlık vermeliyim?</text>
      </g>
      <g opacity={bag}>
        <rect x="150" y="708" width="640" height="76" rx="30" fill="var(--rdt-mor)" opacity="0.08" />
        <circle cx="190" cy="746" r="12" fill="var(--rdt-cam)" />
        <text x="220" y="738" className="rdt-kart-etiket">ANALİZDEN GELEN SİNYAL</text>
        <text x="220" y="770" className="rdt-konu">Fizik · Hareket · %54</text>
        <YolCizgisi d="M812 746 H906" ilerleme={bag} />
      </g>
      <g opacity={yanit}>
        <circle cx="166" cy="876" r="42" fill="url(#rdtAurora)" />
        <path d="M145 875 166 864l21 11-21 11-21-11Zm7 8v13c0 8 28 8 28 0v-13" fill="none" stroke="var(--rdt-beyaz)" strokeWidth="4" />
        <rect x="226" y="826" width="692" height="498" rx="40" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <text x="272" y="900" className="rdt-koc-metin">Fizikte hareket konularında</text>
        <text x="272" y="948" className="rdt-koc-metin">doğruluğun düşmüş.</text>
        <text x="272" y="1016" className="rdt-yardimci-buyuk">Bu hafta küçük ve ölçülebilir başlayalım:</text>
        <g opacity={plan}>
          <circle cx="292" cy="1092" r="13" fill="var(--rdt-mor)" />
          <text x="324" y="1104" className="rdt-plan">2 kısa konu tekrarı</text>
          <circle cx="292" cy="1172" r="13" fill="var(--rdt-cam)" />
          <text x="324" y="1184" className="rdt-plan">3 orta seviye soru seti</text>
          <rect x="272" y="1230" width="592" height="58" rx="29" fill="var(--rdt-mor)" opacity="0.1" />
          <text x="568" y="1268" className="rdt-kucuk-vurgu" textAnchor="middle">PLAN → UYGULA → YENİDEN ÖLÇ</text>
        </g>
      </g>
      <text x="540" y="1630" className="rdt-sahne-oz" textAnchor="middle" opacity={plan}>Verine göre sıradaki adım.</text>
    </g>
  )
}

function Kutuphane({ zaman }) {
  const opaklik = aralik(zaman, 35.9, 48.3, 0.68)
  const yollar = yumusat((zaman - 36.6) / 0.7)
  const konu = yumusat((zaman - 38.6) / 0.75)
  const hareket = yumusat((zaman - 41.0) / 1.9)
  const serit = yumusat((zaman - 44.0) / 0.7)
  return (
    <g opacity={opaklik}>
      <text x="540" y="300" className="rdt-ust" textAnchor="middle">DERS KÜTÜPHANESİ</text>
      <text x="540" y="384" className="rdt-baslik" textAnchor="middle">Başka bir yere gitmezsin.</text>
      <rect x="54" y="446" width="972" height="1100" rx="58" fill="var(--rdt-yuzey)" filter="url(#rdtGolgesi)" />
      <g opacity={yollar}>
        <rect x="110" y="516" width="402" height="112" rx="34" fill="var(--rdt-mor)" opacity="0.11" />
        <text x="150" y="566" className="rdt-kart-etiket">ANA YOL</text>
        <text x="150" y="604" className="rdt-kutuphane-baslik">Konu Kütüphanesi</text>
        <rect x="536" y="516" width="402" height="112" rx="34" fill="var(--rdt-cam)" opacity="0.1" />
        <text x="576" y="566" className="rdt-kart-etiket">PEKİŞTİRME</text>
        <text x="576" y="604" className="rdt-kutuphane-baslik">Soru Kütüphanesi</text>
      </g>
      <g opacity={konu}>
        <text x="110" y="704" className="rdt-kart-etiket">TYT  /  FİZİK  /  HAREKET</text>
        <text x="110" y="770" className="rdt-konu-enbuyuk">Sabit İvmeli Hareket</text>
        <rect x="110" y="818" width="828" height="478" rx="42" fill="var(--rdt-tahta)" />
        <path d="M170 1184 H876" stroke="var(--rdt-beyaz)" strokeOpacity="0.14" strokeWidth="6" strokeLinecap="round" />
        <path d="M202 1070 C330 1020 472 1044 600 932 S790 904 866 856" fill="none" stroke="var(--rdt-cam)" strokeWidth="8" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - hareket} />
        {[0, 1, 2, 3].map((i) => {
          const gorunur = sinirla((hareket * 4) - i)
          const x = 214 + (i * 202)
          const y = 1128 - (i * i * 26)
          return (
            <g key={i} opacity={gorunur}>
              <circle cx={x} cy={y} r="24" fill={i === 3 ? 'var(--rdt-cam)' : 'var(--rdt-mor-acik)'} />
              <text x={x} y="1238" className="rdt-zaman" textAnchor="middle">{i} s</text>
            </g>
          )
        })}
        <text x="166" y="884" className="rdt-tahta-etiket">ETKİLEŞİMLİ GÖRSEL</text>
        <text x="166" y="936" className="rdt-tahta-baslik">Hareketi değiştir, grafiği birlikte izle.</text>
      </g>
      <g transform="translate(110 1344)" opacity={serit}>
        <rect width="254" height="106" rx="30" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <text x="127" y="64" className="rdt-serit" textAnchor="middle">Konu anlatımı</text>
        <rect x="286" width="254" height="106" rx="30" fill="var(--rdt-kagit)" stroke="var(--rdt-cizgi)" strokeWidth="3" />
        <text x="413" y="64" className="rdt-serit" textAnchor="middle">Görsel ders</text>
        <rect x="572" width="256" height="106" rx="30" fill="var(--rdt-mor)" opacity="0.11" />
        <text x="700" y="64" className="rdt-serit-vurgu" textAnchor="middle">Etkileşimli atlas</text>
      </g>
      <text x="540" y="1632" className="rdt-sahne-oz" textAnchor="middle" opacity={serit}>İçerik, önerinin devamı olur.</text>
    </g>
  )
}

function SoruSeti({ zaman }) {
  const opaklik = aralik(zaman, 47.8, 56.0, 0.62)
  const set = yumusat((zaman - 48.3) / 0.65)
  const yanit = yumusat((zaman - 50.25) / 0.7)
  const sonuc = yumusat((zaman - 52.0) / 0.7)
  const dongu = yumusat((zaman - 53.5) / 0.7)
  return (
    <g opacity={opaklik}>
      <text x="540" y="300" className="rdt-ust" textAnchor="middle">SORU KÜTÜPHANESİ</text>
      <text x="540" y="384" className="rdt-baslik" textAnchor="middle">Pekiştir. Yeniden ölç.</text>
      <rect x="66" y="450" width="948" height="1034" rx="58" fill="var(--rdt-yuzey)" filter="url(#rdtGolgesi)" />
      <g opacity={set}>
        <text x="124" y="526" className="rdt-kart-etiket">TYT  /  FİZİK  /  HAREKET</text>
        <rect x="124" y="566" width="832" height="172" rx="36" fill="var(--rdt-mor)" opacity="0.09" />
        <text x="168" y="626" className="rdt-kart-etiket">SORU SETİ</text>
        <text x="168" y="684" className="rdt-set-baslik">Hareket Kavrama 01</text>
        <rect x="784" y="612" width="124" height="52" rx="26" fill="var(--rdt-yuzey)" stroke="var(--rdt-mor)" strokeOpacity="0.28" strokeWidth="2" />
        <text x="846" y="646" className="rdt-rozet" textAnchor="middle">ORTA</text>
        <text x="846" y="704" className="rdt-yardimci" textAnchor="middle">12 soru</text>
      </g>
      <g opacity={yanit}>
        <text x="124" y="832" className="rdt-soru">Bir araç 4 saniyede 12 m/s hıza</text>
        <text x="124" y="878" className="rdt-soru">ulaşıyorsa ivmesi kaç m/s²'dir?</text>
        {['2', '3', '4', '6'].map((deger, i) => (
          <g key={deger} transform={`translate(${124 + ((i % 2) * 422)} ${930 + (Math.floor(i / 2) * 110)})`}>
            <rect width="388" height="82" rx="26" fill={i === 1 ? 'var(--rdt-mor)' : 'var(--rdt-kagit)'} stroke={i === 1 ? 'var(--rdt-mor)' : 'var(--rdt-cizgi)'} strokeWidth="3" />
            <text x="194" y="53" className={i === 1 ? 'rdt-secenek-aktif' : 'rdt-secenek'} textAnchor="middle">{deger} m/s²</text>
          </g>
        ))}
      </g>
      <g opacity={sonuc}>
        <rect x="124" y="1198" width="832" height="196" rx="38" fill="var(--rdt-cam)" opacity="0.1" />
        <text x="168" y="1260" className="rdt-kart-etiket">KISA SONUÇ</text>
        <text x="168" y="1330" className="rdt-sonuc">9 doğru · 2 yanlış · 1 boş</text>
        <text x="866" y="1328" className="rdt-sonuc-yuzde" textAnchor="end">%75</text>
      </g>
      <g opacity={dongu}>
        <YolCizgisi d="M182 1588 H898" ilerleme={dongu} />
        {['ÖĞREN', 'ÇÖZ', 'ÖLÇ', 'YENİDEN PLANLA'].map((etiket, i) => {
          const x = [182, 408, 626, 898][i]
          return (
            <g key={etiket}>
              <circle cx={x} cy="1588" r="20" fill={i % 2 ? 'var(--rdt-cam)' : 'var(--rdt-mor-acik)'} />
              <text x={x} y="1648" className="rdt-dongu" textAnchor="middle">{etiket}</text>
            </g>
          )
        })}
      </g>
    </g>
  )
}

function Kapanis({ zaman }) {
  const opaklik = aralik(zaman, 55.1, 63.1, 0.45)
  const sistem = yumusat((zaman - 55.25) / 0.55)
  const sloganBir = yumusat((zaman - 56.4) / 0.45)
  const sloganIki = yumusat((zaman - 58.55) / 0.45)
  const sloganCikis = 1 - yumusat((zaman - 60.25) / 0.38)
  const logo = yumusat((zaman - 60.75) / 0.7)
  const logoCizim = yumusat((zaman - 60.9) / 0.9)
  return (
    <g opacity={opaklik}>
      <g opacity={sloganCikis}>
        <text x="540" y="398" className="rdt-ust" textAnchor="middle" opacity={sistem}>TEK BİR ÇALIŞMA SİSTEMİ</text>
        <text x="540" y="512" className="rdt-kapanis-ilk" textAnchor="middle" opacity={sloganBir}>Çalışman dağınık değil.</text>
        <text x="540" y="614" className="rdt-kapanis-vurgu" textAnchor="middle" opacity={sloganIki}>Yolun artık görünür.</text>
        <g opacity={sistem}>
          <YolCizgisi d="M132 942 C230 830 334 1050 430 942 S626 834 724 942 S872 1034 948 942" ilerleme={sistem} />
          {[
            ['SORU', 132, 942],
            ['ANALİZ', 332, 942],
            ['KOÇ', 532, 942],
            ['DERS', 732, 942],
            ['TEST', 948, 942],
          ].map(([etiket, x, y], i) => (
            <g key={etiket}>
              <circle cx={x} cy={y} r="26" fill={i === 4 ? 'var(--rdt-cam)' : 'var(--rdt-mor-acik)'} />
              <text x={x} y={y + 78} className="rdt-dongu" textAnchor="middle">{etiket}</text>
            </g>
          ))}
        </g>
      </g>

      <g transform={`translate(540 ${980 - (26 * logo)})`} opacity={logo}>
        <circle r={198 + (24 * logo)} fill="none" stroke="var(--rdt-mor)" strokeOpacity="0.2" strokeWidth="3" />
        <circle r={154 + (16 * logo)} fill="none" stroke="var(--rdt-cam)" strokeOpacity="0.22" strokeWidth="3" />
        <path
          d="M-102 0 0-54 102 0 0 54-102 0Zm30 32v72c0 44 144 44 144 0V32"
          fill="none"
          stroke="var(--rdt-beyaz)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - logoCizim}
        />
        <text x="0" y="290" className="rdt-logo" textAnchor="middle">DRKOÇ</text>
        <text x="0" y="346" className="rdt-logo-alt" textAnchor="middle">GÖREREK ÖĞREN · VERİNLE İLERLE</text>
      </g>
    </g>
  )
}

function ReelsSahnesi({ zaman }) {
  const bolum = zaman < 3.6
    ? 'BAŞLANGIÇ'
    : zaman < 14.2
      ? 'SORU'
      : zaman < 25
        ? 'ANALİZ'
        : zaman < 36
          ? 'KOÇ'
          : zaman < 48
            ? 'DERS'
            : zaman < 55.5
              ? 'TEST'
              : 'ÖĞRENME DÖNGÜSÜ'
  return (
    <svg viewBox="0 0 1080 1920" role="img" aria-label="DRKOÇ uygulamasının soru çözümünden kişisel çalışma planına uzanan öğrenme döngüsünü anlatan ürün tanıtım Reels'i">
      <OrtakZemin zaman={zaman} bolum={bolum} />
      <Kanca zaman={zaman} />
      <SoruCoz zaman={zaman} />
      <Analiz zaman={zaman} />
      <AiKoc zaman={zaman} />
      <Kutuphane zaman={zaman} />
      <SoruSeti zaman={zaman} />
      <Kapanis zaman={zaman} />
    </svg>
  )
}

function ReelsKapagi() {
  return (
    <svg viewBox="0 0 1080 1920" role="img" aria-label="Çalışıyorsun, peki doğru yere mi başlıklı DRKOÇ ürün tanıtım Reels kapağı">
      <OrtakZemin zaman={TOPLAM_SURE} bolum="UYGULAMA TANITIMI" />
      <text x="540" y="340" className="rdt-kapak-ust" textAnchor="middle">SORU ÇÖZÜMÜNDEN KİŞİSEL ÇALIŞMA PLANINA</text>
      <text x="540" y="458" className="rdt-kapak-baslik" textAnchor="middle">Çalışıyorsun.</text>
      <text x="540" y="552" className="rdt-kapak-baslik-vurgu" textAnchor="middle">Peki doğru yere mi?</text>
      <g transform="translate(540 1010)">
        <circle r="400" fill="var(--rdt-yuzey-koyu)" stroke="var(--rdt-beyaz)" strokeOpacity="0.1" strokeWidth="3" />
        <YolCizgisi d="M-300 40 C-198-170-70-170 0 24 S186 228 304 16" />
        <g transform="translate(-300 40)">
          <rect x="-112" y="-88" width="224" height="176" rx="34" fill="var(--rdt-yuzey)" />
          <text x="0" y="-34" className="rdt-kapak-kart" textAnchor="middle">SORU</text>
          <text x="0" y="28" className="rdt-kapak-formul" textAnchor="middle">v = v₀ + at</text>
        </g>
        <g transform="translate(0 24)">
          <circle r="100" fill="var(--rdt-mor)" />
          <path d="M-54 18-18-18 18 4 58-46" fill="none" stroke="var(--rdt-beyaz)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="58" cy="-46" r="12" fill="var(--rdt-cam)" />
        </g>
        <g transform="translate(304 16)">
          <rect x="-118" y="-92" width="236" height="184" rx="34" fill="var(--rdt-yuzey)" />
          <text x="0" y="-36" className="rdt-kapak-kart" textAnchor="middle">PLAN</text>
          <circle cx="-64" cy="16" r="10" fill="var(--rdt-cam)" />
          <path d="M-38 16 H72 M-38 54 H54" stroke="var(--rdt-murekkep)" strokeOpacity="0.22" strokeWidth="12" strokeLinecap="round" />
        </g>
        <text x="0" y="284" className="rdt-kapak-dongu" textAnchor="middle">SORU → ANALİZ → KİŞİSEL PLAN</text>
      </g>
      <rect x="206" y="1544" width="668" height="94" rx="47" fill="var(--rdt-mor)" opacity="0.12" />
      <text x="540" y="1604" className="rdt-kapak-alt" textAnchor="middle">Yolun artık görünür.</text>
    </svg>
  )
}

export default function ReelsDrkocUygulamaTanitim() {
  const arama = useMemo(() => new URLSearchParams(window.location.search), [])
  const sabitZaman = arama.get('time')
  const renderModu = arama.get('render') === '1'
  const temiz = arama.get('clean') === '1'
  const dongu = arama.get('loop') === '1'
  const kapak = arama.get('cover') === '1'
  const [zaman, setZaman] = useState(() => {
    const hashZamani = renderModu ? Number(window.location.hash.slice(1)) : 0
    return sinirla(Number(sabitZaman) || hashZamani || 0, 0, TOPLAM_SURE)
  })
  const [oynuyor, setOynuyor] = useState(false)
  const baslangicRef = useRef(0)
  const kareRef = useRef(null)

  useEffect(() => {
    if (!oynuyor || renderModu || kapak) return undefined
    const guncelle = (simdi) => {
      const gecen = (simdi - baslangicRef.current) / 1000
      if (gecen >= TOPLAM_SURE) {
        if (dongu) {
          baslangicRef.current = simdi
          setZaman(0)
          kareRef.current = requestAnimationFrame(guncelle)
        } else {
          setZaman(TOPLAM_SURE)
          setOynuyor(false)
        }
        return
      }
      setZaman(gecen)
      kareRef.current = requestAnimationFrame(guncelle)
    }
    kareRef.current = requestAnimationFrame(guncelle)
    return () => cancelAnimationFrame(kareRef.current)
  }, [dongu, kapak, oynuyor, renderModu])

  useEffect(() => {
    if (!renderModu) return undefined
    const kareyiGuncelle = () => setZaman(sinirla(Number(window.location.hash.slice(1)) || 0, 0, TOPLAM_SURE))
    window.addEventListener('hashchange', kareyiGuncelle)
    return () => window.removeEventListener('hashchange', kareyiGuncelle)
  }, [renderModu])

  const zamanAyarla = (deger) => {
    const yeni = Number(deger)
    setZaman(yeni)
    baslangicRef.current = performance.now() - (yeni * 1000)
  }
  const oynatDuraklat = () => {
    if (oynuyor) {
      setOynuyor(false)
      return
    }
    const baslangicZamani = zaman >= TOPLAM_SURE - 0.05 ? 0 : zaman
    if (baslangicZamani === 0) setZaman(0)
    baslangicRef.current = performance.now() - (baslangicZamani * 1000)
    setOynuyor(true)
  }
  const bastan = () => {
    setZaman(0)
    baslangicRef.current = performance.now()
    setOynuyor(true)
  }

  return (
    <main className={`rdt-onizleme ${temiz ? 'rdt-temiz' : ''} ${renderModu ? 'rdt-render' : ''}`}>
      <div className="rdt-cerceve">{kapak ? <ReelsKapagi /> : <ReelsSahnesi zaman={zaman} />}</div>
      {!temiz && !kapak ? (
        <div className="rdt-kontroller" aria-label="DRKOÇ uygulama tanıtımı Reels önizleme kontrolleri">
          <button type="button" onClick={bastan} aria-label="Baştan oynat"><RotateCcw size={19} /></button>
          <button type="button" className="rdt-oynat" onClick={oynatDuraklat} aria-label={oynuyor ? 'Duraklat' : 'Oynat'}>
            {oynuyor ? <Pause size={21} /> : <Play size={21} />}
          </button>
          <input type="range" min="0" max={TOPLAM_SURE} step="0.05" value={zaman} onChange={(olay) => zamanAyarla(olay.target.value)} aria-label="Animasyon zamanı" />
          <span aria-live="polite">{zaman.toFixed(1)} / {TOPLAM_SURE.toFixed(1)} sn</span>
        </div>
      ) : null}
    </main>
  )
}
