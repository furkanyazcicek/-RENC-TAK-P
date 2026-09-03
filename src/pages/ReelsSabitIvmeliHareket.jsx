import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import Arac from '../components/fizik/ortak/Arac.jsx'
import '../styles/reels-sabit-ivmeli-atis.css'
import '../styles/reels-sabit-ivmeli-hareket.css'

const TOPLAM_SURE = 77.25
const SES_KAYNAGI = '/audio/reels/sabit-ivmeli-hareket-gold-v5.m4a'
const ORNEK_ZAMANLAR = [0, 1, 2, 3]

const sinirla = (deger, alt = 0, ust = 1) => Math.min(ust, Math.max(alt, deger))
const yumusat = (deger) => {
  const t = sinirla(deger)
  return t * t * (3 - (2 * t))
}
const aralik = (zaman, baslangic, bitis, yumusama = 0.45) => (
  sinirla((zaman - baslangic) / yumusama)
  * sinirla((bitis - zaman) / yumusama)
)

function konumX(saniye) {
  return -340 + (680 * ((saniye / 3) ** 2))
}


function Top({ x = 0, y = 0, opaklik = 1, aktif = false }) {
  return (
    <g transform={`translate(${x} ${y})`} opacity={opaklik}>
      {aktif ? <circle r="65" fill="#A78BFA" opacity="0.12" /> : null}
      <circle r="29" fill="#A78BFA" filter="url(#rihTopGolgesi)" />
      <circle cx="-8" cy="-10" r="7" fill="white" opacity="0.74" />
    </g>
  )
}

function DenklemSatiri({ y, yatay, sol, sag, vurgu = false }) {
  return (
    <g transform={`translate(0 ${y})`}>
      {vurgu ? <rect x="134" y="-47" width="812" height="76" rx="25" fill="#7C3AED" opacity="0.12" /> : null}
      <text x="540" y="7" textAnchor="middle" className="rih-denklem">
        <tspan fill="white">{sol}</tspan>
        <tspan fill={yatay ? '#67E8F9' : '#C4B5FD'}>{sag}</tspan>
      </text>
    </g>
  )
}

function ReelsKapagi() {
  return (
    <svg viewBox="0 0 1080 1920" role="img" aria-label="Atışlarda kullanılan 5t kare formülünün kaynağını anlatan DRKOÇ Reels kapağı">
      <defs>
        <linearGradient id="rihKapakZemin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#090B1A" />
          <stop offset="0.55" stopColor="#11142C" />
          <stop offset="1" stopColor="#080A16" />
        </linearGradient>
        <radialGradient id="rihKapakIsik">
          <stop offset="0" stopColor="#7C3AED" stopOpacity="0.28" />
          <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rihKapakAurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A78BFA" />
          <stop offset="0.52" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      <rect width="1080" height="1920" fill="url(#rihKapakZemin)" />
      <circle cx="540" cy="920" r="690" fill="url(#rihKapakIsik)" />
      <path d="M0 1710 C320 1595 720 1808 1080 1638 V1920 H0Z" fill="#11152C" opacity="0.76" />

      <g>
        <path d="M103 119 148 96l45 23-45 23-45-23Zm13 12v29c0 17 64 17 64 0v-29" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
        <text x="216" y="135" className="ria-marka-adi">DRKOÇ</text>
        <text x="216" y="172" className="ria-marka-seri">FİZİK · GÖREREK ÖĞREN</text>
      </g>
      <rect x="96" y="66" width="888" height="5" rx="3" fill="url(#rihKapakAurora)" />

      <text x="540" y="330" className="rih-kapak-ust" textAnchor="middle">ATIŞLARDA EN ÇOK KARIŞAN NOKTA</text>
      <text x="540" y="445" className="rih-kapak-baslik" textAnchor="middle">5t² aslında</text>
      <text x="540" y="540" className="rih-kapak-baslik" textAnchor="middle">nereden geliyor?</text>

      <g transform="translate(540 930)">
        <circle r="350" fill="#0E142B" stroke="white" strokeOpacity="0.09" strokeWidth="3" />
        <path d="M-286 0 H0" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" />
        <path d="M-38-24 4 0-38 24" fill="none" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 0 V286" stroke="#A78BFA" strokeWidth="10" strokeLinecap="round" />
        <path d="M-24 248 0 292 24 248" fill="none" stroke="#A78BFA" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <circle r="32" fill="white" />
        <Arac x={-225} y={-48} aktif />
        <Top x={0} y={225} aktif />
        <text x="-150" y="-88" className="rih-kapak-yon" textAnchor="middle">YATAY · a</text>
        <text x="54" y="205" className="rih-kapak-yon">DÜŞEY · g</text>
      </g>

      <g transform="translate(152 1340)">
        <rect width="776" height="154" rx="48" fill="#121832" stroke="white" strokeOpacity="0.12" strokeWidth="3" />
        <text x="388" y="94" className="rih-kapak-denklem" textAnchor="middle">
          <tspan fill="white">y = </tspan>
          <tspan fill="#C4B5FD">½·10·t²</tspan>
          <tspan fill="white"> = </tspan>
          <tspan fill="#67E8F9">5t²</tspan>
        </text>
      </g>

      <g transform="translate(221 1580)">
        <rect width="638" height="102" rx="51" fill="url(#rihKapakAurora)" />
        <text x="319" y="65" className="rih-kapak-imza" textAnchor="middle">Yön değişir · fizik değişmez</text>
      </g>
      <text x="540" y="1780" className="ria-bolum" textAnchor="middle">DRKOÇ · SABİT İVME 02</text>
    </svg>
  )
}

function ReelsSahnesi({ zaman }) {
  const girisBir = aralik(zaman, 0, 4.35, 0.55)
  const girisIki = aralik(zaman, 4.15, 8.3, 0.5)
  const kopru = aralik(zaman, 8.15, 15.65, 0.65)
  const yataySahne = aralik(zaman, 15.35, 33.25, 0.7)
  const hareketSuresi = sinirla((zaman - 16.1) / 5.4) * 3
  const hareketX = konumX(hareketSuresi)
  const izler = sinirla((zaman - 17.2) / 3.4)
  const denklemler = aralik(zaman, 16.0, 42.35, 0.7)
  const neden = aralik(zaman, 18.2, 23.0, 0.6)
  const donusum = yumusat((zaman - 22.75) / 9.0)
  const aci = donusum * 90
  const duseySahne = aralik(zaman, 31.45, 50.65, 0.75)
  const dikeyDegerler = yumusat((zaman - 32.2) / 1.2)
  const turetim = aralik(zaman, 41.75, 71.35, 0.75)
  const turetimGenel = turetim * sinirla((zaman - 42.2) / 0.6)
  const turetimDegerler = turetim * sinirla((zaman - 44.0) / 0.65)
  const turetimYerineKoy = turetim * sinirla((zaman - 50.35) / 0.65)
  const turetimSonuc = turetim * sinirla((zaman - 55.15) / 0.65)
  const ornek = aralik(zaman, 58.15, 65.2, 0.6)
  const ozelDurum = aralik(zaman, 64.95, 71.35, 0.6)
  const denklemListesi = denklemler * (1 - yumusat((zaman - 41.45) / 0.75))
  const kapanis = aralik(zaman, 70.65, 77.4, 0.42)
  const sloganIlk = yumusat((zaman - 70.86) / 0.34)
  const sloganIkinci = yumusat((zaman - 71.94) / 0.38)
  const sloganNefes = yumusat((zaman - 73.02) / 0.52)
  const logoGiris = yumusat((zaman - 73.92) / 0.72)
  const logoCizim = yumusat((zaman - 74.18) / 0.88)
  const logoMetin = yumusat((zaman - 74.82) / 0.52)
  const logoHale = yumusat((zaman - 73.72) / 1.18)
  const icerikSolmasi = 1 - yumusat((zaman - 70.85) / 0.6)
  const ilerleme = sinirla(zaman / TOPLAM_SURE)
  const yatayDenklem = donusum < 0.55

  return (
    <svg viewBox="0 0 1080 1920" role="img" aria-label="Yatay sabit ivmeli araç hareketindeki denklemlerin düşey serbest düşmede de aynı kaldığını gösteren animasyon">
      <defs>
        <linearGradient id="rihZemin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#090B1A" />
          <stop offset="0.52" stopColor="#11142C" />
          <stop offset="1" stopColor="#080A16" />
        </linearGradient>
        <radialGradient id="rihMorIsik">
          <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.22" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rihMaviIsik">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.16" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rihAurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A78BFA" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="rihTopGolgesi" x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="13" stdDeviation="14" floodColor="#000" floodOpacity="0.42" />
        </filter>
      </defs>

      <rect width="1080" height="1920" fill="url(#rihZemin)" />
      <circle cx="120" cy="430" r="460" fill="url(#rihMorIsik)" />
      <circle cx="980" cy="1020" r="520" fill="url(#rihMaviIsik)" />
      <path d="M0 1690 C310 1585 670 1810 1080 1645 V1920 H0Z" fill="#11152C" opacity="0.68" />

      <g>
        <path d="M103 119 148 96l45 23-45 23-45-23Zm13 12v29c0 17 64 17 64 0v-29" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
        <text x="216" y="135" className="ria-marka-adi">DRKOÇ</text>
        <text x="216" y="172" className="ria-marka-seri">FİZİK · GÖREREK ÖĞREN</text>
      </g>
      <rect x="96" y="66" width="888" height="5" rx="3" fill="white" opacity="0.12" />
      <rect x="96" y="66" width={888 * ilerleme} height="5" rx="3" fill="url(#rihAurora)" />

      <g opacity={girisBir * icerikSolmasi}>
        <text x="540" y="310" className="ria-kanca-kucuk" textAnchor="middle">YATAYDA SABİT İVMELİ HAREKET</text>
        <text x="540" y="410" className="ria-kanca" textAnchor="middle">Soruyu</text>
        <text x="540" y="492" className="ria-kanca" textAnchor="middle">çözebiliyorsun.</text>
      </g>

      <g opacity={girisIki * icerikSolmasi}>
        <text x="540" y="310" className="ria-kanca-kucuk" textAnchor="middle">KONU ATIŞLARA GELİNCE</text>
        <text x="540" y="410" className="ria-kanca" textAnchor="middle">Formüller</text>
        <text x="540" y="492" className="ria-kanca" textAnchor="middle">karışıyor mu?</text>
      </g>

      <g opacity={kopru * icerikSolmasi}>
        <text x="540" y="310" className="ria-kanca-kucuk" textAnchor="middle">ASLINDA YENİ BİR HAREKET DEĞİL</text>
        <text x="540" y="410" className="rih-sahne-basligi" textAnchor="middle">Yalnızca yön</text>
        <text x="540" y="482" className="rih-sahne-basligi" textAnchor="middle">değişiyor.</text>
      </g>

      <g opacity={icerikSolmasi}>
        <g opacity={yataySahne * (1 - yumusat((zaman - 22.2) / 1.2))}>
          <text x="540" y="302" className="ria-kanca-kucuk" textAnchor="middle">YATAYDA SABİT İVMELİ HAREKET</text>
          <text x="540" y="382" className="rih-sahne-basligi" textAnchor="middle">Eşit sürede açılan aralıklar</text>
        </g>

        <g transform={`translate(540 860) rotate(${aci})`} opacity={Math.max(yataySahne, duseySahne, kopru * 0.85) * (1 - turetim)}>
          <line x1="-390" y1="48" x2="390" y2="48" stroke="white" strokeOpacity="0.28" strokeWidth="5" />
          <line x1="-390" y1="66" x2="390" y2="66" stroke="white" strokeOpacity="0.09" strokeWidth="28" />
          {Array.from({ length: 13 }, (_, index) => (
            <line key={index} x1={-360 + index * 60} y1="55" x2={-330 + index * 60} y2="55" stroke="white" strokeOpacity="0.2" strokeWidth="4" />
          ))}

          {ORNEK_ZAMANLAR.map((saniye, index) => {
            const gorunur = sinirla((izler * 4) - index)
            const x = konumX(saniye)
            const arabaOpaklik = (1 - donusum) * gorunur
            const topOpaklik = donusum * gorunur
            const yatayDeger = saniye ** 2
            const duseyDeger = 5 * (saniye ** 2)
            const etiketX = -98 * donusum
            const etiketY = -90 * (1 - donusum)
            const degerX = 102 * donusum
            const degerY = (112 * (1 - donusum)) + (10 * donusum)
            return (
              <g key={saniye} transform={`translate(${x} 0)`} opacity={gorunur}>
                <Arac opaklik={arabaOpaklik} />
                <Top opaklik={topOpaklik} />
                <g transform={`rotate(${-aci})`}>
                  <rect x={etiketX - 55} y={etiketY - 26} width="110" height="52" rx="26" fill="#161B37" stroke="white" strokeOpacity="0.12" />
                  <text x={etiketX} y={etiketY + 9} className="rih-zaman" textAnchor="middle">{saniye} s</text>
                  <text x={degerX} y={degerY} className="rih-konum" textAnchor="middle" opacity={1 - dikeyDegerler}>{yatayDeger} m</text>
                  <text x={degerX} y={degerY} className="rih-konum mor" textAnchor="middle" opacity={dikeyDegerler}>{duseyDeger} m</text>
                </g>
              </g>
            )
          })}

          <g opacity={(1 - donusum) * sinirla((zaman - 3.2) / 0.5)}>
            <Arac x={hareketX} aktif />
          </g>
        </g>

        <g opacity={yataySahne * sinirla((zaman - 4.2) / 0.6) * (1 - donusum)}>
          <path d="M700 710 H890" stroke="#22D3EE" strokeWidth="7" strokeLinecap="round" />
          <path d="M866 692 894 710 866 728" fill="none" stroke="#22D3EE" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="795" y="680" className="rih-ivme" textAnchor="middle">a = 2 m/s²</text>
          <text x="540" y="1090" className="rih-oruntu" textAnchor="middle">Aralıklar: 1 m → 3 m → 5 m</text>
          <text x="540" y="1138" className="rih-oruntu-alt" textAnchor="middle">Çünkü hız her saniye aynı miktarda artıyor.</text>
        </g>

        <g opacity={sinirla((zaman - 22.45) / 0.65) * sinirla((33.1 - zaman) / 0.7)}>
          <text x="540" y="310" className="ria-kanca-kucuk" textAnchor="middle">YÖN DEĞİŞİYOR</text>
          <text x="540" y="398" className="rih-sahne-basligi" textAnchor="middle">Denklemin yapısı aynı kalıyor</text>
          <g transform="translate(540 1155)">
            <rect x="-254" y="-48" width="508" height="96" rx="48" fill="#151A35" stroke="white" strokeOpacity="0.12" />
            <text x="0" y="13" className="rih-donusum" textAnchor="middle">
              <tspan fill="#67E8F9" opacity={0.35 + (0.65 * (1 - donusum))}>x  ·  a</tspan>
              <tspan fill="white" opacity={0.78}>  →  </tspan>
              <tspan fill="#C4B5FD" opacity={0.35 + (0.65 * donusum)}>y  ·  g</tspan>
            </text>
          </g>
        </g>

        <g opacity={duseySahne * (1 - turetim)}>
          <text x="540" y="302" className="ria-kanca-kucuk" textAnchor="middle">DÜŞEYDE SABİT İVMELİ HAREKET</text>
          <text x="540" y="382" className="rih-sahne-basligi" textAnchor="middle">Serbest düşme</text>
          <text x="540" y="452" className="rih-oruntu dusey" textAnchor="middle">Aynı zaman örüntüsü · farklı ölçek</text>
          <path d="M790 575 V765" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" />
          <path d="M772 741 790 770 808 741" fill="none" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="826" y="670" className="rih-ivme mor">g ≈ 10 m/s²</text>
        </g>

        <g opacity={denklemListesi}>
          <rect x="106" y="1300" width="868" height="292" rx="42" fill="#11162E" stroke="white" strokeOpacity="0.1" />
          <text x="160" y="1355" className="rih-denklem-etiketi">{yatayDenklem ? 'a SABİT OLDUĞU İÇİN' : 'g SABİT OLDUĞU İÇİN'}</text>
          {yatayDenklem ? (
            <>
              <DenklemSatiri y={1415} yatay sol="v = v₀ + " sag="at" />
              <DenklemSatiri y={1488} yatay sol="Δx = v₀t + ½" sag="at²" vurgu />
              <DenklemSatiri y={1561} yatay sol="v² = v₀² + 2" sag="aΔx" />
            </>
          ) : (
            <>
              <DenklemSatiri y={1415} sol="v = v₀ + " sag="gt" />
              <DenklemSatiri y={1488} sol="Δy = v₀t + ½" sag="gt²" vurgu />
              <DenklemSatiri y={1561} sol="v² = v₀² + 2" sag="gΔy" />
            </>
          )}
        </g>

        <g opacity={neden}>
          <rect x="285" y="1690" width="510" height="80" rx="40" fill="#18203A" stroke="#34D399" strokeOpacity="0.28" />
          <circle cx="337" cy="1730" r="10" fill="#34D399" />
          <text x="565" y="1743" className="rih-neden" textAnchor="middle">Formülün şartı: ivmenin sabit olması</text>
        </g>

        <g opacity={duseySahne * sinirla((zaman - 20) / 0.55) * (1 - turetim)}>
          <text x="108" y="1720" className="ria-varsayim">Aşağı yön pozitif seçilmiştir: a = +g.</text>
          <text x="108" y="1762" className="ria-varsayim">Yukarı yönü pozitif seçersen a = −g olur.</text>
        </g>

        <g opacity={turetim * (1 - ornek) * (1 - ozelDurum)}>
          <text x="540" y="302" className="ria-kanca-kucuk" textAnchor="middle">45 METRENİN İÇİNİ AÇALIM</text>
          <text x="540" y="395" className="rih-sahne-basligi" textAnchor="middle">Peki 5t² nereden?</text>
          <text x="540" y="458" className="rih-turetim-alt" textAnchor="middle">Sabit ivmeli konum denkleminden.</text>

          <rect x="106" y="535" width="868" height="1010" rx="46" fill="#10152D" stroke="white" strokeOpacity="0.11" />

          <g opacity={turetimGenel}>
            <text x="160" y="604" className="rih-denklem-etiketi">GENEL DÜŞEY KONUM DENKLEMİ</text>
            <text x="540" y="700" className="rih-turetim-denklem" textAnchor="middle">
              <tspan fill="white">Δy = </tspan>
              <tspan fill="#67E8F9">v₀y·t</tspan>
              <tspan fill="white"> + ½</tspan>
              <tspan fill="#C4B5FD">g·t²</tspan>
            </text>
            <line x1="158" y1="752" x2="922" y2="752" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
          </g>

          <g opacity={turetimDegerler}>
            <text x="160" y="817" className="rih-denklem-etiketi">v₀y = 0 OLAN DURUMLARDA</text>
            <g transform="translate(154 852)">
              <rect width="340" height="94" rx="30" fill="#151B36" stroke="#22D3EE" strokeOpacity="0.25" />
              <text x="170" y="59" className="rih-turetim-deger" textAnchor="middle">v₀y = 0</text>
            </g>
            <g transform="translate(526 852)">
              <rect width="400" height="94" rx="30" fill="#151B36" stroke="#A78BFA" strokeOpacity="0.25" />
              <text x="200" y="59" className="rih-turetim-deger mor" textAnchor="middle">g = 10 m/s²</text>
            </g>
          </g>

          <g opacity={turetimYerineKoy}>
            <path d="M540 978 V1035" stroke="white" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
            <path d="M524 1018 540 1042 556 1018" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="540" y="1116" className="rih-turetim-yerine" textAnchor="middle">
              <tspan fill="white">Δy = </tspan>
              <tspan fill="#67E8F9">0·t</tspan>
              <tspan fill="white"> + ½·</tspan>
              <tspan fill="#C4B5FD">10</tspan>
              <tspan fill="white">·t²</tspan>
            </text>
          </g>

          <g opacity={turetimSonuc}>
            <rect x="190" y="1178" width="700" height="154" rx="48" fill="#7C3AED" opacity="0.15" />
            <rect x="190" y="1178" width="700" height="154" rx="48" fill="none" stroke="#A78BFA" strokeOpacity="0.38" strokeWidth="3" />
            <text x="540" y="1280" className="rih-turetim-sonuc" textAnchor="middle">Δy = 5t²</text>
            <g transform="translate(307 1368)">
              <rect width="466" height="72" rx="36" fill="#17203A" stroke="#34D399" strokeOpacity="0.26" />
              <circle cx="48" cy="36" r="9" fill="#34D399" />
              <text x="259" y="46" className="rih-turetim-rozet" textAnchor="middle">Ayrı formül değil · özel durum</text>
            </g>
          </g>

          <g opacity={turetimSonuc}>
            <text x="540" y="1490" className="rih-turetim-not" textAnchor="middle">Düşey veya eğik atışta v₀y ≠ 0 ise</text>
            <text x="540" y="1532" className="rih-turetim-not" textAnchor="middle">v₀y·t terimi denklemde kalır.</text>
            <text x="540" y="1580" className="rih-turetim-kapsam" textAnchor="middle">v₀y=0: serbest düşme ve yatay atışın düşey bileşeni</text>
          </g>
        </g>

        <g opacity={ornek}>
          <text x="540" y="302" className="ria-kanca-kucuk" textAnchor="middle">FORMÜLÜ ŞİMDİ KULLANALIM</text>
          <text x="540" y="395" className="rih-sahne-basligi" textAnchor="middle">3 saniyede ne kadar düşer?</text>
          <rect x="106" y="535" width="868" height="1010" rx="46" fill="#10152D" stroke="white" strokeOpacity="0.11" />
          <Top x={540} y={700} aktif />
          <path d="M540 770 V1060" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 18" />
          <path d="M516 1026 540 1066 564 1026" fill="none" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(655 790)">
            <rect width="224" height="78" rx="39" fill="#161B37" stroke="white" strokeOpacity="0.12" />
            <text x="112" y="50" className="rih-baglanti-ust" textAnchor="middle">t = 3 s</text>
          </g>
          <text x="540" y="1180" className="rih-turetim-yerine" textAnchor="middle">y = 5 · 3²</text>
          <rect x="190" y="1240" width="700" height="154" rx="48" fill="#7C3AED" opacity="0.15" />
          <rect x="190" y="1240" width="700" height="154" rx="48" fill="none" stroke="#A78BFA" strokeOpacity="0.38" strokeWidth="3" />
          <text x="540" y="1342" className="rih-turetim-sonuc" textAnchor="middle">y = 45 m</text>
          <text x="540" y="1478" className="rih-turetim-kapsam" textAnchor="middle">5 · 3² = 45</text>
        </g>

        <g opacity={ozelDurum}>
          <text x="540" y="302" className="ria-kanca-kucuk" textAnchor="middle">EZBERLENECEK YENİ BİR FORMÜL DEĞİL</text>
          <text x="540" y="395" className="rih-sahne-basligi" textAnchor="middle">Genel denklemin</text>
          <text x="540" y="462" className="rih-sahne-basligi" textAnchor="middle">özel durumu.</text>
          <rect x="106" y="565" width="868" height="880" rx="46" fill="#10152D" stroke="white" strokeOpacity="0.11" />
          <text x="540" y="760" className="rih-turetim-sonuc" textAnchor="middle">y = 5t²</text>
          <g transform="translate(307 840)">
            <rect width="466" height="72" rx="36" fill="#17203A" stroke="#34D399" strokeOpacity="0.26" />
            <circle cx="48" cy="36" r="9" fill="#34D399" />
            <text x="259" y="46" className="rih-turetim-rozet" textAnchor="middle">v₀y = 0 olduğu durumda</text>
          </g>
          <line x1="210" y1="1000" x2="870" y2="1000" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
          <text x="540" y="1112" className="rih-turetim-not" textAnchor="middle">Kaynak yine aynı genel denklem:</text>
          <text x="540" y="1200" className="rih-turetim-denklem" textAnchor="middle">
            <tspan fill="white">y = </tspan>
            <tspan fill="#67E8F9">v₀y·t</tspan>
            <tspan fill="white"> + ½</tspan>
            <tspan fill="#C4B5FD">g·t²</tspan>
          </text>
          <text x="540" y="1352" className="rih-turetim-kapsam" textAnchor="middle">Formülü değil, koşulu tanı.</text>
        </g>
      </g>

      <g opacity={kapanis * (1 - logoGiris)}>
        <circle cx="540" cy="870" r="560" fill="url(#rihMorIsik)" opacity={0.45 + (0.28 * sloganNefes)} />
        <text x="540" y="300" className="ria-kapanis-ust" textAnchor="middle">SABİT İVMELİ HAREKET</text>

        <g
          opacity={0.88 - (0.28 * sloganIkinci)}
          transform={`translate(540 910) scale(${1 - (0.13 * sloganIkinci)})`}
        >
          <path d="M0 0 H280" stroke="#22D3EE" strokeWidth="9" strokeLinecap="round" />
          <path d="M246-22 286 0 246 22" fill="none" stroke="#22D3EE" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 0 V300" stroke="#A78BFA" strokeWidth="9" strokeLinecap="round" />
          <path d="M-22 266 0 306 22 266" fill="none" stroke="#A78BFA" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="0" cy="0" r="30" fill="white" />
          <text x="305" y="10" className="rih-yon-etiketi">YATAY</text>
          <text x="42" y="286" className="rih-yon-etiketi">DÜŞEY</text>
        </g>

        <g opacity={sloganIlk} transform={`translate(0 ${22 - (22 * sloganIlk)})`}>
          <text x="540" y="445" className="rih-kapanis-ilk" textAnchor="middle">Yön değişti.</text>
        </g>
        <g
          opacity={sloganIkinci}
          transform={`translate(540 0) scale(${0.95 + (0.05 * sloganIkinci)}) translate(-540 0)`}
        >
          <text x="540" y="565" className="rih-kapanis-vurgu" textAnchor="middle" fill="url(#rihAurora)">Fizik değişmedi.</text>
          <path
            d={`M${540 - (238 * sloganIkinci)} 616 H${540 + (238 * sloganIkinci)}`}
            stroke="url(#rihAurora)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
        <g opacity={sloganNefes * (1 - logoGiris)}>
          <circle cx="540" cy="910" r="38" fill="white" />
          <text x="540" y="1328" className="rih-kapanis-oz" textAnchor="middle">Yatayda a sabit  ·  Düşeyde g ≈ 10 m/s²</text>
        </g>
      </g>

      <g opacity={kapanis * logoGiris} transform={`translate(540 860) scale(${0.84 + (0.16 * logoGiris)})`}>
        <circle r={250 + (120 * logoHale)} fill="url(#rihMorIsik)" opacity="0.95" />
        <circle r={154 + (126 * logoHale)} fill="none" stroke="url(#rihAurora)" strokeOpacity={0.22 * (1 - logoGiris) + 0.1} strokeWidth="5" />
        <circle r={122 + (168 * logoHale)} fill="none" stroke="white" strokeOpacity={0.1 * (1 - logoHale)} strokeWidth="3" />
        <circle r="214" fill="#11162E" stroke="white" strokeOpacity={0.08 + (0.12 * logoGiris)} strokeWidth="3" />
        <circle r={160 + (18 * logoGiris)} fill="none" stroke="url(#rihAurora)" strokeOpacity="0.28" strokeWidth="3" />
        <g transform="translate(0 -42)">
          <path
            d="M-122-38 0-100 122-38 0 24-122-38Z"
            fill="none"
            stroke="white"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - logoCizim}
          />
          <path
            d="M-86 2 V80 C-86 128 86 128 86 80 V2"
            fill="none"
            stroke="white"
            strokeWidth="18"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - logoCizim}
          />
        </g>
        <g opacity={logoMetin} transform={`translate(0 ${22 - (12 * logoMetin)})`}>
          <text x="0" y="250" className="rih-logo-final" textAnchor="middle">DRKOÇ</text>
          <text x="0" y="302" className="rih-logo-final-alt" textAnchor="middle">FİZİK · GÖREREK ÖĞREN</text>
        </g>
      </g>

      <text x="972" y="1782" className="ria-bolum" textAnchor="end">02 / SABİT İVME</text>
    </svg>
  )
}

export default function ReelsSabitIvmeliHareket() {
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
  const [sesHatasi, setSesHatasi] = useState(false)
  const sesRef = useRef(null)

  useEffect(() => {
    if (!oynuyor) return undefined
    let kare
    const sesleEsitle = () => {
      const ses = sesRef.current
      if (ses) setZaman(sinirla(ses.currentTime, 0, TOPLAM_SURE))
      kare = requestAnimationFrame(sesleEsitle)
    }
    kare = requestAnimationFrame(sesleEsitle)
    return () => cancelAnimationFrame(kare)
  }, [oynuyor])

  useEffect(() => {
    if (!renderModu) return undefined
    const kareyiGuncelle = () => setZaman(sinirla(Number(window.location.hash.slice(1)) || 0, 0, TOPLAM_SURE))
    window.addEventListener('hashchange', kareyiGuncelle)
    return () => window.removeEventListener('hashchange', kareyiGuncelle)
  }, [renderModu])

  const zamanAyarla = (deger) => {
    const yeni = Number(deger)
    setZaman(yeni)
    if (sesRef.current) sesRef.current.currentTime = yeni
  }
  const oynatDuraklat = async () => {
    const ses = sesRef.current
    if (!ses) return
    if (oynuyor) {
      ses.pause()
      setOynuyor(false)
      return
    }
    if (zaman >= TOPLAM_SURE - 0.1) {
      ses.currentTime = 0
      setZaman(0)
    }
    try {
      setSesHatasi(false)
      await ses.play()
      setOynuyor(true)
    } catch {
      setSesHatasi(true)
      setOynuyor(false)
    }
  }
  const bastan = async () => {
    const ses = sesRef.current
    if (!ses) return
    ses.currentTime = 0
    setZaman(0)
    try {
      setSesHatasi(false)
      await ses.play()
      setOynuyor(true)
    } catch {
      setSesHatasi(true)
      setOynuyor(false)
    }
  }

  return (
    <main className={`ria-onizleme ${temiz ? 'ria-temiz' : ''} ${renderModu ? 'ria-render' : ''}`}>
      {!kapak ? (
        <audio
          ref={sesRef}
          src={SES_KAYNAGI}
          preload="auto"
          loop={dongu}
          onPlay={() => setOynuyor(true)}
          onPause={() => setOynuyor(false)}
          onEnded={() => {
            setZaman(TOPLAM_SURE)
            setOynuyor(false)
          }}
          onError={() => setSesHatasi(true)}
        />
      ) : null}
      <div className="ria-cerceve">{kapak ? <ReelsKapagi /> : <ReelsSahnesi zaman={zaman} />}</div>
      {!temiz && !kapak ? (
        <div className="ria-kontroller" aria-label="Sabit ivmeli hareket Reels önizleme kontrolleri">
          <button type="button" onClick={bastan} aria-label="Baştan oynat"><RotateCcw size={19} /></button>
          <button type="button" className="ria-oynat" onClick={oynatDuraklat} aria-label={oynuyor ? 'Duraklat' : 'Oynat'}>
            {oynuyor ? <Pause size={21} /> : <Play size={21} />}
          </button>
          <input type="range" min="0" max={TOPLAM_SURE} step="0.05" value={zaman} onChange={(olay) => zamanAyarla(olay.target.value)} aria-label="Animasyon zamanı" />
          <span aria-live="polite">{sesHatasi ? 'Ses yüklenemedi' : `${zaman.toFixed(1)} / ${TOPLAM_SURE.toFixed(1)} sn`}</span>
        </div>
      ) : null}
    </main>
  )
}
