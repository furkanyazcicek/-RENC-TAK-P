import { useMemo, useState } from 'react'
import {
  Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
} from '../ortak/index.js'
import {
  KOPMA_GERILMELERI, MADDELER, YUZEY_GERILIMLERI, dayaniklilik,
  kilcalYukselme, ozkutle, ozkutleGrafigi,
} from '../../../lib/fizik/madde.js'
import { SIVILAR, sividakiDurum } from '../../../lib/fizik/basinc.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/* ═══════════ Deney 1: Özkütle Tezgâhı ═══════════ */

/**
 * Kütle ve hacim ayrı ayrı değiştirilir; oranın (özkütle) neden sabit
 * kaldığı grafikte görülür. Grafiğin eğimi doğrudan özkütledir.
 */
function OzkutleTezgahi() {
  const [maddeKod, setMaddeKod] = useState('aluminyum')
  const [hacimCm3, setHacimCm3] = useState(200)
  const [sivilKod, setSivilKod] = useState('su')

  const madde = MADDELER[maddeKod]
  const hacim = hacimCm3 / 1e6 // cm³ → m³
  const kutle = madde.ozkutle * hacim
  const d = ozkutle(kutle, hacim)

  const sivi = SIVILAR[sivilKod]
  const durum = sividakiDurum({ cismikutlesi: kutle, cisimHacmi: hacim, sivinOzkutlesi: sivi.ozkutle })

  // Karşılaştırma için üç maddenin kütle–hacim doğrusu
  const seriler = useMemo(() => ['mantar', maddeKod, 'demir']
    .filter((k, i, a) => a.indexOf(k) === i)
    .map((k) => ({
      ad: MADDELER[k].ad,
      renk: MADDELER[k].renk,
      birim: 'kg',
      veri: ozkutleGrafigi(MADDELER[k].ozkutle, 0.0005, 30).map((n) => ({ x: n.hacim * 1e6, y: n.kutle })),
    })), [maddeKod])

  const KAP_G = 560
  const KAP_Y = 300
  const kapIc = { x: 150, y: 60, g: 260, y2: 200 }
  // Cismi kübe benzeterek ölçekle: hacim arttıkça kenar uzunluğu artar.
  const kenar = Math.cbrt(hacimCm3) * 5.5
  const batanOran = durum.batanOran
  const suSeviyesi = kapIc.y + 55

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${KAP_G} ${KAP_Y}`} role="img" aria-label={`${madde.ad} cismi ${sivi.ad} içinde ${durum.durum === 'yuzer' ? 'yüzüyor' : durum.durum === 'askida' ? 'askıda kalıyor' : 'batıyor'}.`}>
            {/* Terazi */}
            <g>
              <rect x="24" y="200" width="96" height="10" rx="3" fill="rgb(var(--fa-cizgi-guclu))" />
              <rect x="30" y={200 - kenar} width={kenar} height={kenar} rx="3"
                fill={madde.renk} opacity="0.85" stroke="rgb(var(--fa-metin))" strokeWidth="1" />
              <text x="72" y="228" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))" fontWeight="600">Terazi</text>
              <text x="72" y="244" textAnchor="middle" fontSize="12.5" fill="rgb(var(--fa-olcum))" fontWeight="700">
                {sayiBicimle(kutle * 1000, 1)} g
              </text>
            </g>

            {/* Sıvı kabı */}
            <rect x={kapIc.x} y={kapIc.y} width={kapIc.g} height={kapIc.y2 - kapIc.y + 60} rx="6"
              fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <rect x={kapIc.x + 2} y={suSeviyesi} width={kapIc.g - 4} height={kapIc.y2 - suSeviyesi + 58}
              fill={sivi.renk} opacity="0.32" />
            <line x1={kapIc.x} x2={kapIc.x + kapIc.g} y1={suSeviyesi} y2={suSeviyesi}
              stroke={sivi.renk} strokeWidth="2" />

            {/* Cisim sıvı içinde: batan kısım su çizgisinin altında */}
            {(() => {
              const cx = kapIc.x + kapIc.g / 2 - kenar / 2
              const ust = durum.durum === 'batar'
                ? kapIc.y2 + 58 - kenar - 4
                : suSeviyesi - kenar * (1 - batanOran)
              return (
                <>
                  <rect x={cx} y={ust} width={kenar} height={kenar} rx="3"
                    fill={madde.renk} opacity="0.9" stroke="rgb(var(--fa-metin))" strokeWidth="1" />
                  <text x={cx + kenar / 2} y={ust - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-metin))">
                    {madde.ad}
                  </text>
                </>
              )
            })()}

            <text x={kapIc.x + kapIc.g / 2} y={KAP_Y - 12} textAnchor="middle" fontSize="11.5" fill="rgb(var(--fa-metin-2))">
              {sivi.ad} (d = {sivi.ozkutle} kg/m³)
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">d = {sayiBicimle(d, 0)} kg/m³</span>
            <span className={`fa-rozet ${durum.durum === 'batar' ? 'hata' : 'olumlu'}`}>
              {durum.durum === 'yuzer' ? `Yüzüyor — %${sayiBicimle(batanOran * 100, 0)}'i batık` : durum.durum === 'askida' ? 'Askıda kalıyor' : 'Batıyor'}
            </span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Hacim', deger: hacimCm3, birim: 'cm³', tur: 'notr', basamak: 0 },
              { ad: 'Kütle', deger: kutle * 1000, birim: 'g', tur: 'notr', basamak: 1 },
              { ad: 'Özkütle', deger: d, birim: 'kg/m³', vurgulu: true, basamak: 0 },
              { ad: 'Özkütle', deger: d / 1000, birim: 'g/cm³', basamak: 3 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Kütle – Hacim: doğrunun eğimi özkütledir"
            xEtiket="Hacim (cm³)"
            yEtiket="Kütle (kg)"
            seriler={seriler}
            imlecX={hacimCm3}
            yukseklik={190}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            Her madde kendi eğimli doğrusunu çizer. Doğru ne kadar dikse özkütle o kadar büyüktür.
            Hacim değiştikçe nokta doğru üzerinde kayar ama <strong>doğrunun eğimi değişmez</strong> —
            özkütlenin ayırt edici özellik olması budur.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste
            etiket="Madde"
            deger={maddeKod}
            onChange={setMaddeKod}
            secenekler={Object.entries(MADDELER).map(([kod, m]) => ({ kod, ad: `${m.ad} (${m.ozkutle} kg/m³)` }))}
          />
          <Kaydirici
            etiket="Hacim"
            deger={hacimCm3} onChange={setHacimCm3}
            alt={10} ust={1000} adim={5} birim="cm³" basamak={0}
            ipucu="Hacmi değiştir: kütle de değişiyor ama oranları sabit kalıyor."
          />
          <Liste
            etiket="Sıvı"
            deger={sivilKod}
            onChange={setSivilKod}
            secenekler={Object.entries(SIVILAR).map(([kod, s]) => ({ kod, ad: `${s.ad} (${s.ozkutle} kg/m³)` }))}
          />
        </div>

        <Not tur={durum.durum === 'batar' ? 'uyari' : 'olumlu'} baslik={`Neden ${durum.durum === 'yuzer' ? 'yüzüyor' : durum.durum === 'askida' ? 'askıda kalıyor' : 'batıyor'}?`}>
          Cismin özkütlesi <strong>{sayiBicimle(d, 0)} kg/m³</strong>, sıvınınki{' '}
          <strong>{sivi.ozkutle} kg/m³</strong>.{' '}
          {durum.durum === 'yuzer'
            ? `Cisim daha az yoğun olduğu için yüzer ve hacminin ${sayiBicimle(batanOran * 100, 1)}%'i batar. Bu oran tam olarak ${sayiBicimle(d, 0)}/${sivi.ozkutle} oranına eşittir.`
            : durum.durum === 'askida'
              ? 'İkisi eşit olduğu için cisim ne batar ne yüzer; sıvının içinde askıda kalır.'
              : 'Cisim daha yoğun olduğu için batar. Batarken bile kaldırma kuvveti etkir; bu yüzden su içinde daha hafif hissedilir.'}
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Yüzey Gerilimi ve Kılcallık ═══════════ */

function YuzeyVeKilcallik() {
  const [sivikod, setSivikod] = useState('su')
  const [yaricapMm, setYaricapMm] = useState(0.4)
  const [temasAcisi, setTemasAcisi] = useState(20)

  const sivi = YUZEY_GERILIMLERI[sivikod]
  const yaricap = yaricapMm / 1000
  const sonuc = kilcalYukselme({
    yuzeyGerilimi: sivi.gerilim,
    temasAcisiDerece: temasAcisi,
    ozkutleDegeri: sivi.ozkutle,
    yaricap,
  })

  // Üç farklı yarıçapta karşılaştırma — ters orantı görsel olarak açık olsun
  const borular = [yaricapMm * 2, yaricapMm, yaricapMm / 2].map((r) => ({
    yaricapMm: r,
    yukselme: kilcalYukselme({
      yuzeyGerilimi: sivi.gerilim, temasAcisiDerece: temasAcisi,
      ozkutleDegeri: sivi.ozkutle, yaricap: r / 1000,
    }).yukselme,
  }))

  const SG = 560
  const SY = 340
  const kapY = 250
  const enBuyukYukselme = Math.max(...borular.map((b) => Math.abs(b.yukselme)), 0.01)
  const olcek = 150 / enBuyukYukselme

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={`Kılcallık deneyi. ${sivi.ad} ${sonuc.yon === 'yukselir' ? 'yükseliyor' : 'alçalıyor'}.`}>
            {/* Kap */}
            <rect x="40" y={kapY} width={SG - 80} height="60" fill={sivi.renk} opacity="0.3" />
            <line x1="40" x2={SG - 40} y1={kapY} y2={kapY} stroke={sivi.renk} strokeWidth="2.5" />
            <rect x="36" y={kapY - 4} width={SG - 72} height="68" rx="4" fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />

            {/* Üç kılcal boru */}
            {borular.map((b, i) => {
              const cx = 150 + i * 130
              const gen = Math.max(6, b.yaricapMm * 22)
              const h = b.yukselme * olcek
              const sviTepe = kapY - h
              return (
                <g key={i}>
                  {/* Boru duvarları */}
                  <line x1={cx - gen / 2} x2={cx - gen / 2} y1={50} y2={kapY + 40} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.8" />
                  <line x1={cx + gen / 2} x2={cx + gen / 2} y1={50} y2={kapY + 40} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.8" />
                  {/* Borudaki sıvı */}
                  <rect x={cx - gen / 2 + 1} y={Math.min(sviTepe, kapY)} width={gen - 2}
                    height={Math.abs(h) + (h > 0 ? 40 : 40 - Math.abs(h))} fill={sivi.renk} opacity="0.55" />
                  {/* Menisk: içbükey (su) ya da dışbükey (cıva) */}
                  <path
                    d={temasAcisi < 90
                      ? `M ${cx - gen / 2 + 1} ${sviTepe} Q ${cx} ${sviTepe + gen * 0.45} ${cx + gen / 2 - 1} ${sviTepe}`
                      : `M ${cx - gen / 2 + 1} ${sviTepe} Q ${cx} ${sviTepe - gen * 0.45} ${cx + gen / 2 - 1} ${sviTepe}`}
                    fill={sivi.renk} opacity="0.75"
                  />
                  <text x={cx} y={40} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
                    r = {sayiBicimle(b.yaricapMm, 2)} mm
                  </text>
                  <text x={cx} y={SY - 14} textAnchor="middle" fontSize="11.5" fontWeight="700"
                    fill={h >= 0 ? 'rgb(var(--fa-olcum))' : 'rgb(var(--fa-hata))'}>
                    {sayiBicimle(b.yukselme * 1000, 1)} mm
                  </text>
                </g>
              )
            })}
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${sonuc.yon === 'yukselir' ? 'olumlu' : 'hata'}`}>
              {sonuc.yon === 'yukselir' ? 'Yükseliyor' : sonuc.yon === 'alcalir' ? 'Alçalıyor' : 'Değişmiyor'}
            </span>
            <span className="fa-rozet">{sonuc.baskinKuvvet === 'adezyon' ? 'Adezyon baskın' : sonuc.baskinKuvvet === 'kohezyon' ? 'Kohezyon baskın' : 'Eşit'}</span>
            <span className="fa-rozet olcum">{sonuc.menisk === 'ickbukey' ? 'İçbükey menisk' : sonuc.menisk === 'disbukey' ? 'Dışbükey menisk' : 'Düz yüzey'}</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Yükselme', deger: sonuc.yukselme * 1000, birim: 'mm', vurgulu: true, basamak: 2 },
              { ad: 'Yüzey gerilimi', deger: sivi.gerilim, birim: 'N/m', basamak: 4 },
              { ad: 'Temas açısı', deger: temasAcisi, birim: '°', tur: 'notr', basamak: 0 },
              { ad: 'Boru yarıçapı', deger: yaricapMm, birim: 'mm', tur: 'notr', basamak: 2 },
            ]}
          />
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste
            etiket="Sıvı"
            deger={sivikod}
            onChange={(k) => { setSivikod(k); setTemasAcisi(YUZEY_GERILIMLERI[k].temasAcisi) }}
            secenekler={Object.entries(YUZEY_GERILIMLERI).map(([kod, s]) => ({ kod, ad: s.ad }))}
          />
          <Kaydirici
            etiket="Boru yarıçapı"
            deger={yaricapMm} onChange={setYaricapMm}
            alt={0.05} ust={2} adim={0.05} birim="mm" basamak={2}
            ipucu="Boru inceldikçe yükselme artar — ters orantı."
          />
          <Kaydirici
            etiket="Temas açısı"
            deger={temasAcisi} onChange={setTemasAcisi}
            alt={0} ust={160} adim={1} birim="°" basamak={0}
            ipucu="90°'nin altı: adezyon baskın, sıvı yükselir. Üstü: kohezyon baskın, alçalır."
          />
        </div>

        <Not tur="bilgi" baslik="Adezyon mu, kohezyon mu?">
          <strong>Kohezyon</strong> aynı cins moleküllerin birbirini çekmesi, <strong>adezyon</strong> farklı
          cins moleküllerin çekmesidir. Su camda yükselir çünkü su–cam çekimi daha güçlüdür; cıva alçalır
          çünkü cıva–cıva çekimi baskındır.
        </Not>

        <Not tur="uyari" baslik="Sabun neden temizler?">
          Sabun suyun yüzey gerilimini {sayiBicimle(YUZEY_GERILIMLERI.su.gerilim, 4)} N/m’den{' '}
          {sayiBicimle(YUZEY_GERILIMLERI.sabunluSu.gerilim, 4)} N/m’ye düşürür. Gerilim azalınca su, kumaş
          liflerinin arasına ve kirin altına sızabilir. Listeden “Sabunlu su”yu seçip yükselmenin nasıl
          düştüğünü gör.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Dayanıklılık ═══════════ */

function DayaniklilikTesti() {
  const [malzeme, setMalzeme] = useState('celik')
  const [capMm, setCapMm] = useState(4)
  const [kuvvetN, setKuvvetN] = useState(2000)

  const kopmaGerilmesi = KOPMA_GERILMELERI[malzeme].deger
  const kesit = Math.PI * (capMm / 2000) ** 2
  const sonuc = dayaniklilik({ kuvvet: kuvvetN, kesitAlani: kesit, kopmaGerilmesi })

  const doluluk = Math.min(1, sonuc.gerilme / kopmaGerilmesi)
  const SG = 560
  const SY = 250
  const ipGen = Math.max(4, capMm * 4)

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={sonuc.koptu ? 'Malzeme koptu.' : `Malzeme dayanıyor. Güvenlik payı ${sayiBicimle(sonuc.guvenlikPayi, 2)} kat.`}>
            <rect x="0" y="20" width={SG} height="14" fill="rgb(var(--fa-cizgi-guclu))" opacity="0.6" />
            {sonuc.koptu ? (
              <>
                <line x1={SG / 2} x2={SG / 2} y1="34" y2="105" stroke={KOPMA_GERILMELERI[malzeme].deger > 1e8 ? '#94a3b8' : '#b45309'} strokeWidth={ipGen} strokeLinecap="round" />
                <line x1={SG / 2} x2={SG / 2 + 14} y1="130" y2="190" stroke={KOPMA_GERILMELERI[malzeme].deger > 1e8 ? '#94a3b8' : '#b45309'} strokeWidth={ipGen} strokeLinecap="round" />
                <text x={SG / 2 + 60} y="120" fontSize="14" fontWeight="700" fill="rgb(var(--fa-hata))">KOPTU</text>
                <rect x={SG / 2 - 34} y="190" width="68" height="42" rx="5" fill="rgb(var(--fa-hata) / 0.3)" stroke="rgb(var(--fa-hata))" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1={SG / 2} x2={SG / 2} y1="34" y2="176" stroke={KOPMA_GERILMELERI[malzeme].deger > 1e8 ? '#94a3b8' : '#b45309'} strokeWidth={ipGen} strokeLinecap="round" />
                <rect x={SG / 2 - 34} y="176" width="68" height="42" rx="5" fill="rgb(var(--fa-vurgu) / 0.3)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.5" />
              </>
            )}
            <text x={SG / 2} y="204" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-metin))">
              {sayiBicimle(kuvvetN, 0)} N
            </text>

            {/* Gerilme göstergesi */}
            <rect x="40" y={SY - 24} width={SG - 80} height="12" rx="6" fill="rgb(var(--fa-yuzey-3))" />
            <rect x="40" y={SY - 24} width={(SG - 80) * doluluk} height="12" rx="6"
              fill={doluluk > 0.85 ? 'rgb(var(--fa-hata))' : doluluk > 0.6 ? 'rgb(var(--fa-uyari))' : 'rgb(var(--fa-olumlu))'} />
            <text x="40" y={SY - 30} fontSize="10" fill="rgb(var(--fa-metin-3))">Kopma sınırının %{sayiBicimle(doluluk * 100, 0)}'i</text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${sonuc.koptu ? 'hata' : 'olumlu'}`}>
              {sonuc.koptu ? 'Koptu' : `Güvenlik payı ${sayiBicimle(sonuc.guvenlikPayi, 2)}×`}
            </span>
            <span className="fa-rozet olcum">σ = {sayiBicimle(sonuc.gerilme / 1e6, 1)} MPa</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Kesit alanı', deger: kesit * 1e6, birim: 'mm²', tur: 'notr', basamak: 2 },
              { ad: 'Gerilme σ', deger: sonuc.gerilme / 1e6, birim: 'MPa', vurgulu: true, basamak: 1 },
              { ad: 'Kopma gerilmesi', deger: kopmaGerilmesi / 1e6, birim: 'MPa', tur: 'notr', basamak: 0 },
              { ad: 'Taşıyabileceği en büyük kuvvet', deger: sonuc.maksKuvvet, birim: 'N', basamak: 0 },
            ]}
          />
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste
            etiket="Malzeme"
            deger={malzeme} onChange={setMalzeme}
            secenekler={Object.entries(KOPMA_GERILMELERI).map(([kod, m]) => ({ kod, ad: `${m.ad} (${m.deger / 1e6} MPa)` }))}
          />
          <Kaydirici
            etiket="Çubuk çapı"
            deger={capMm} onChange={setCapMm}
            alt={1} ust={20} adim={0.5} birim="mm" basamak={1}
            ipucu="Çap iki katına çıkarsa kesit alanı DÖRT katına çıkar; gerilme dörtte bire iner."
          />
          <Kaydirici
            etiket="Asılan kuvvet"
            deger={kuvvetN} onChange={setKuvvetN}
            alt={100} ust={60000} adim={100} birim="N" basamak={0}
          />
        </div>

        <Not tur={sonuc.koptu ? 'hata' : 'bilgi'} baslik={sonuc.koptu ? 'Neden koptu?' : 'Dayanıklılık neye bağlı?'}>
          {sonuc.koptu
            ? `Birim alana düşen kuvvet (${sayiBicimle(sonuc.gerilme / 1e6, 1)} MPa), malzemenin dayanabileceği sınırı (${kopmaGerilmesi / 1e6} MPa) aştı. Ya kuvveti azalt ya çapı büyüt.`
            : 'Kopmayı belirleyen uygulanan kuvvet değil, birim alana düşen kuvvettir (gerilme). Bu yüzden aynı kuvvet altında kalın çubuk dayanır, ince çubuk kopar.'}
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'ozkutle-tezgahi', ad: 'Özkütle Tezgâhı', Bilesen: OzkutleTezgahi },
  { kod: 'yuzey-kilcallik', ad: 'Yüzey Gerilimi ve Kılcallık', Bilesen: YuzeyVeKilcallik },
  { kod: 'dayaniklilik', ad: 'Dayanıklılık Testi', Bilesen: DayaniklilikTesti },
]

export default function MaddeBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="madde" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
