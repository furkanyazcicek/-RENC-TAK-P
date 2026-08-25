import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import {
  Anahtar, Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, VektorOku,
} from '../ortak/index.js'
import {
  SIVILAR, barometre, geminBatmasi, hidrolikPres, kaldirmaKuvveti,
  katiBasinci, sividaBasinc, sividakiDurum, tabanKuvveti, yukseklikteBasinc,
} from '../../../lib/fizik/basinc.js'
import { MADDELER } from '../../../lib/fizik/madde.js'
import { G_MUFREDAT } from '../../../lib/fizik/hareket.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620

/* ═══════════ Deney 1: Basınç Tezgâhı ═══════════ */

const KAP_SEKILLERI = {
  silindir: { ad: 'Düz silindir', ustGen: 1, altGen: 1 },
  koni: { ad: 'Ters koni (üstü geniş)', ustGen: 1.6, altGen: 0.5 },
  huni: { ad: 'Huni (altı geniş)', ustGen: 0.5, altGen: 1.6 },
  dar: { ad: 'İnce boru', ustGen: 0.3, altGen: 0.3 },
}

function BasincTezgahi() {
  const [mod, setMod] = useState('sivi')
  // Katı basıncı
  const [kutle, setKutle] = useState(60)
  const [temasAlaniCm2, setTemasAlaniCm2] = useState(300)
  // Sıvı basıncı
  const [sivikod, setSivikod] = useState('su')
  const [derinlik, setDerinlik] = useState(1.5)
  const [kapSekli, setKapSekli] = useState('silindir')
  const [tabanAlaniCm2, setTabanAlaniCm2] = useState(200)

  const g = G_MUFREDAT
  const alan = temasAlaniCm2 / 1e4
  const agirlikKuvveti = kutle * g
  const pKati = katiBasinci(agirlikKuvveti, alan)

  const sivi = SIVILAR[sivikod]
  const pSivi = sividaBasinc(derinlik, sivi.ozkutle, g)
  const tabanAlani = tabanAlaniCm2 / 1e4
  const fTaban = tabanKuvveti(derinlik, sivi.ozkutle, tabanAlani, g)

  const derinlikNoktalari = useMemo(() => Array.from({ length: 41 }, (_, i) => {
    const h = (derinlik * 1.4 * i) / 40
    return { x: h, y: sividaBasinc(h, sivi.ozkutle, g) / 1000 }
  }), [derinlik, sivi.ozkutle])

  const sekil = KAP_SEKILLERI[kapSekli]

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          {mod === 'kati' ? (
            <svg viewBox={`0 0 ${SG} 300`} role="img" aria-label={`Katı basıncı. ${sayiBicimle(pKati, 0)} paskal.`}>
              <line x1="30" x2={SG - 30} y1="230" y2="230" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />
              {(() => {
                const gen = Math.max(24, Math.min(320, temasAlaniCm2 * 0.85))
                const yuk = Math.max(40, 12000 / gen)
                const x = SG / 2 - gen / 2
                const y = 230 - yuk
                const yogunluk = Math.min(1, pKati / 60000)
                return (
                  <>
                    <rect x={x} y={y} width={gen} height={yuk} rx="4"
                      fill="rgb(var(--fa-vurgu) / 0.35)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.8" />
                    <text x={SG / 2} y={y + yuk / 2 + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-metin))">
                      {sayiBicimle(kutle, 0)} kg
                    </text>
                    {/* Basınç okları: alan küçüldükçe sıklaşır ve kızarır */}
                    {Array.from({ length: Math.max(3, Math.round(gen / 26)) }, (_, i, dizi) => {
                      const ok = x + (gen / (dizi.length + 1)) * (i + 1)
                      return (
                        <VektorOku key={i} x1={ok} y1={232} x2={ok} y2={232 + 16 + yogunluk * 22}
                          renk={`color-mix(in srgb, rgb(var(--fa-hata)) ${yogunluk * 100}%, rgb(var(--fa-olcum)))`}
                          kalinlik={1.6 + yogunluk * 1.6} />
                      )
                    })}
                    <text x={SG / 2} y="292" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-olcum))">
                      P = {sayiBicimle(pKati / 1000, 2)} kPa
                    </text>
                    <text x={SG / 2} y={y - 12} textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-3))">
                      Temas alanı: {sayiBicimle(temasAlaniCm2, 0)} cm²
                    </text>
                  </>
                )
              })()}
            </svg>
          ) : (
            <svg viewBox={`0 0 ${SG} 320`} role="img" aria-label={`Sıvı basıncı. ${sayiBicimle(derinlik, 1)} metre derinlikte ${sayiBicimle(pSivi / 1000, 2)} kilopaskal.`}>
              {(() => {
                const merkezX = SG / 2 - 60
                const tabanY = 270
                const yuk = Math.min(200, derinlik * 90)
                const ustY = tabanY - yuk
                const temelGen = 110
                const ustGen = temelGen * sekil.ustGen
                const altGen = temelGen * sekil.altGen
                return (
                  <>
                    {/* Kap */}
                    <polygon
                      points={`${merkezX - ustGen / 2},${ustY} ${merkezX + ustGen / 2},${ustY} ${merkezX + altGen / 2},${tabanY} ${merkezX - altGen / 2},${tabanY}`}
                      fill={sivi.renk} opacity="0.3" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2"
                    />
                    <line x1={merkezX - ustGen / 2} x2={merkezX + ustGen / 2} y1={ustY} y2={ustY} stroke={sivi.renk} strokeWidth="2.5" />

                    {/* Derinlik ölçüsü */}
                    <line x1={merkezX + Math.max(ustGen, altGen) / 2 + 20} x2={merkezX + Math.max(ustGen, altGen) / 2 + 20}
                      y1={ustY} y2={tabanY} stroke="rgb(var(--fa-olcum))" strokeWidth="1.5" />
                    <text x={merkezX + Math.max(ustGen, altGen) / 2 + 28} y={(ustY + tabanY) / 2} fontSize="11.5"
                      fill="rgb(var(--fa-olcum))" fontWeight="700">
                      h = {sayiBicimle(derinlik, 2)} m
                    </text>

                    {/* Basınç vektörleri: derinlik arttıkça uzar; her yöne eşit */}
                    {[0.25, 0.55, 0.85].map((oran) => {
                      const y = ustY + yuk * oran
                      const h = derinlik * oran
                      const boy = 8 + (sividaBasinc(h, sivi.ozkutle, g) / 30000) * 28
                      const genBurada = ustGen + (altGen - ustGen) * oran
                      return (
                        <g key={oran}>
                          <VektorOku x1={merkezX - genBurada / 2 + 3} y1={y} x2={merkezX - genBurada / 2 + 3 - boy} y2={y} renk="rgb(var(--fa-vektor))" kalinlik={1.8} />
                          <VektorOku x1={merkezX + genBurada / 2 - 3} y1={y} x2={merkezX + genBurada / 2 - 3 + boy} y2={y} renk="rgb(var(--fa-vektor))" kalinlik={1.8} />
                          <VektorOku x1={merkezX} y1={y} x2={merkezX} y2={y + boy} renk="rgb(var(--fa-vektor))" kalinlik={1.8} />
                          <text x={merkezX + 8} y={y - 4} fontSize="9.5" fill="rgb(var(--fa-metin-3))">
                            {sayiBicimle(sividaBasinc(h, sivi.ozkutle, g) / 1000, 1)} kPa
                          </text>
                        </g>
                      )
                    })}

                    {/* Karşılaştırma kabı: aynı derinlik, farklı şekil */}
                    <g opacity="0.9">
                      <polygon
                        points={`${SG - 130},${ustY} ${SG - 60},${ustY} ${SG - 70},${tabanY} ${SG - 120},${tabanY}`}
                        fill={sivi.renk} opacity="0.3" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2"
                      />
                      <line x1={SG - 130} x2={SG - 60} y1={ustY} y2={ustY} stroke={sivi.renk} strokeWidth="2.5" />
                      <text x={SG - 95} y={tabanY + 18} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-olcum))" fontWeight="700">
                        {sayiBicimle(pSivi / 1000, 2)} kPa
                      </text>
                      <text x={SG - 95} y={ustY - 10} textAnchor="middle" fontSize="10" fill="rgb(var(--fa-metin-3))">
                        farklı kap
                      </text>
                    </g>

                    <text x={merkezX} y={tabanY + 18} textAnchor="middle" fontSize="11.5" fill="rgb(var(--fa-olcum))" fontWeight="700">
                      {sayiBicimle(pSivi / 1000, 2)} kPa
                    </text>
                    <text x={SG / 2} y="312" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
                      İki kabın şekli farklı, taban basınçları AYNI
                    </text>
                  </>
                )
              })()}
            </svg>
          )}

          <div className="fa-sahne-rozet">
            {mod === 'kati' ? (
              <>
                <span className="fa-rozet olcum">P = {sayiBicimle(pKati / 1000, 2)} kPa</span>
                <span className="fa-rozet">F = {sayiBicimle(agirlikKuvveti, 0)} N</span>
              </>
            ) : (
              <>
                <span className="fa-rozet olcum">P = {sayiBicimle(pSivi / 1000, 2)} kPa</span>
                <span className="fa-rozet vektor">Tabana kuvvet: {sayiBicimle(fTaban, 0)} N</span>
              </>
            )}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          {mod === 'kati' ? (
            <OlcumPanosu olcumler={[
              { ad: 'Ağırlık F', deger: agirlikKuvveti, birim: 'N', tur: 'vektor' },
              { ad: 'Temas alanı A', deger: alan, birim: 'm²', tur: 'notr', basamak: 4 },
              { ad: 'Basınç P = F/A', deger: pKati / 1000, birim: 'kPa', vurgulu: true },
              { ad: 'Atmosfer basıncına oranı', deger: pKati / 101325, birim: 'atm', tur: 'notr', basamak: 3 },
            ]} />
          ) : (
            <OlcumPanosu olcumler={[
              { ad: 'Derinlik h', deger: derinlik, birim: 'm', tur: 'notr' },
              { ad: 'Sıvı özkütlesi d', deger: sivi.ozkutle, birim: 'kg/m³', tur: 'notr', basamak: 0 },
              { ad: 'Basınç P = h·d·g', deger: pSivi / 1000, birim: 'kPa', vurgulu: true },
              { ad: 'Tabana etkiyen kuvvet', deger: fTaban, birim: 'N', tur: 'vektor', basamak: 0 },
              { ad: 'Atmosfer dâhil toplam', deger: (pSivi + 101325) / 1000, birim: 'kPa' },
            ]} />
          )}
        </div>

        {mod === 'sivi' ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <Grafik
              baslik="Derinlik – Basınç: doğrusal ve kaba bağımsız"
              xEtiket="Derinlik (m)" yEtiket="Basınç (kPa)"
              seriler={[{ ad: sivi.ad, renk: sivi.renk, birim: 'kPa', veri: derinlikNoktalari }]}
              imlecX={derinlik}
              yukseklik={175}
            />
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
              Grafik bir <strong>doğru</strong>dur: basınç derinlikle doğru orantılıdır ve eğimi d·g’dir.
              Kap şeklini değiştir — grafik hiç değişmez. Değişen tek şey <strong>tabana etkiyen kuvvettir</strong>
              {' '}(F = P·A), çünkü taban alanı değişir. Basınç ile kuvveti karıştırmamak gerekir.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Basınç türü" deger={mod} onChange={setMod}
            secenekler={[{ kod: 'kati', ad: 'Katı basıncı' }, { kod: 'sivi', ad: 'Sıvı basıncı' }]} />
          {mod === 'kati' ? (
            <>
              <Kaydirici etiket="Cismin kütlesi" deger={kutle} onChange={setKutle} alt={1} ust={200} adim={1} birim="kg" basamak={0} />
              <Kaydirici etiket="Temas alanı" deger={temasAlaniCm2} onChange={setTemasAlaniCm2} alt={0.5} ust={800} adim={0.5} birim="cm²" basamak={1}
                ipucu="Alanı yarıya indir: basınç iki katına çıkar. Kayak ile kar arasındaki fark bu." />
            </>
          ) : (
            <>
              <Liste etiket="Sıvı" deger={sivikod} onChange={setSivikod}
                secenekler={Object.entries(SIVILAR).map(([kod, s]) => ({ kod, ad: `${s.ad} (${s.ozkutle})` }))} />
              <Kaydirici etiket="Derinlik" deger={derinlik} onChange={setDerinlik} alt={0.05} ust={5} adim={0.05} birim="m" basamak={2} />
              <Liste etiket="Kap şekli" deger={kapSekli} onChange={setKapSekli}
                secenekler={Object.entries(KAP_SEKILLERI).map(([kod, k]) => ({ kod, ad: k.ad }))} />
              <Kaydirici etiket="Taban alanı" deger={tabanAlaniCm2} onChange={setTabanAlaniCm2} alt={10} ust={2000} adim={10} birim="cm²" basamak={0}
                ipucu="Basıncı DEĞİŞTİRMEZ; yalnızca tabana etkiyen toplam kuvveti değiştirir." />
            </>
          )}
        </div>

        {mod === 'kati' ? (
          <Not tur="bilgi" baslik="Aynı ağırlık, farklı basınç">
            {sayiBicimle(kutle, 0)} kg’lık cisim {sayiBicimle(temasAlaniCm2, 0)} cm²’ye basınca
            {' '}{sayiBicimle(pKati / 1000, 1)} kPa basınç yapıyor. Alanı 10 cm²’ye indirirsen basınç
            {' '}{sayiBicimle(katiBasinci(agirlikKuvveti, 0.001) / 1000, 0)} kPa olur — aynı ağırlık, yüzlerce kat
            basınç. Çivinin sivri, deve tabanının geniş olması bu ilkenin iki farklı çözümüdür.
          </Not>
        ) : (
          <Not tur="uyari" baslik="Hidrostatik paradoks">
            İki kabın şekli ve içindeki su miktarı farklı ama <strong>taban basınçları aynı</strong>.
            Sıvı basıncı yalnızca derinliğe, özkütleye ve g’ye bağlıdır. Kabın genişliği, dar boru olması
            veya toplam su miktarı formüle hiç girmez. Buna hidrostatik paradoks denir.
          </Not>
        )}

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Atmosfer basıncı</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Yer</th><th style={{ textAlign: 'right' }}>Basınç (kPa)</th></tr></thead>
              <tbody>
                {[['Deniz seviyesi', 0], ['Uludağ (2500 m)', 2500], ['Ağrı Dağı (5137 m)', 5137], ['Everest (8849 m)', 8849]].map(([ad, r]) => (
                  <tr key={ad}><td>{ad}</td><td className="sayi">{sayiBicimle(yukseklikteBasinc(r) / 1000, 1)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            Cıva barometresinde bu basınç {sayiBicimle(barometre({}).yukseklik * 100, 1)} cm’lik sütuna karşılık
            gelir. Aynı basıncı su ile ölçmek isteseydik {sayiBicimle(barometre({ sivinOzkutlesi: 1000 }).yukseklik, 1)} m
            boyunda bir boru gerekirdi.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Hidrolik Pres ═══════════ */

function HidrolikPres() {
  const [kucukCapCm, setKucukCapCm] = useState(4)
  const [buyukCapCm, setBuyukCapCm] = useState(30)
  const [girisKuvveti, setGirisKuvveti] = useState(200)
  const [girisYolu, setGirisYolu] = useState(0.4)

  const kucukAlan = Math.PI * (kucukCapCm / 200) ** 2
  const buyukAlan = Math.PI * (buyukCapCm / 200) ** 2
  const sonuc = hidrolikPres({ kucukAlan, buyukAlan, girisKuvveti, girisYolu })

  const HG = 600
  const HY = 300
  const kucukGen = Math.max(14, kucukCapCm * 4)
  const buyukGen = Math.max(20, buyukCapCm * 4)

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${HG} ${HY}`} role="img" aria-label={`Hidrolik pres. Giriş ${sayiBicimle(girisKuvveti, 0)} newton, çıkış ${sayiBicimle(sonuc?.cikisKuvveti ?? 0, 0)} newton.`}>
            {/* Sıvı gövdesi */}
            <path
              d={`M 90 200 L 90 250 L ${HG - 90} 250 L ${HG - 90} 170 L ${HG - 90 + buyukGen / 2} 170
                  L ${HG - 90 + buyukGen / 2} 250 L ${HG - 60} 250 L ${HG - 60} 268 L 60 268 L 60 250 Z`}
              fill="rgb(var(--fa-vurgu))" opacity="0.22"
            />
            <rect x="60" y="248" width={HG - 120} height="22" fill="rgb(var(--fa-vurgu))" opacity="0.3" />

            {/* Küçük piston silindiri */}
            <rect x={110 - kucukGen / 2} y="120" width={kucukGen} height="132" fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <rect x={110 - kucukGen / 2 + 2} y={172 + girisYolu * 70} width={kucukGen - 4} height="12" rx="2" fill="rgb(var(--fa-vektor))" />
            <VektorOku x1="110" y1={150 + girisYolu * 70} x2="110" y2={170 + girisYolu * 70} renk="rgb(var(--fa-vektor))" kalinlik={3} etiket={`${sayiBicimle(girisKuvveti, 0)} N`} />
            <text x="110" y="112" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
              A₁ = {sayiBicimle(kucukAlan * 1e4, 1)} cm²
            </text>

            {/* Büyük piston silindiri */}
            <rect x={HG - 150 - buyukGen / 2} y="70" width={buyukGen} height="182" fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <rect x={HG - 150 - buyukGen / 2 + 2} y={150 - (sonuc?.cikisYolu ?? 0) * 70} width={buyukGen - 4} height="14" rx="2" fill="rgb(var(--fa-olcum))" />
            <VektorOku x1={HG - 150} y1={148 - (sonuc?.cikisYolu ?? 0) * 70} x2={HG - 150} y2={110 - (sonuc?.cikisYolu ?? 0) * 70}
              renk="rgb(var(--fa-olcum))" kalinlik={3.4} etiket={`${sayiBicimle(sonuc?.cikisKuvveti ?? 0, 0)} N`} />
            <text x={HG - 150} y="62" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
              A₂ = {sayiBicimle(buyukAlan * 1e4, 1)} cm²
            </text>

            {/* Basınç her yerde aynı */}
            {[170, 220, 300, 380, 450].map((x) => (
              <text key={x} x={x} y="264" textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-vurgu-2))" fontWeight="600">
                {sayiBicimle((sonuc?.basinc ?? 0) / 1000, 0)} kPa
              </text>
            ))}
            <text x={HG / 2} y="290" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
              Basınç sıvının HER noktasında aynıdır (Pascal ilkesi)
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">Kuvvet kazancı: {sayiBicimle(sonuc?.kuvvetKazanci ?? 0, 1)}×</span>
            <span className="fa-rozet enerji">İş: {sayiBicimle(sonuc?.girisIsi ?? 0, 1)} J → {sayiBicimle(sonuc?.cikisIsi ?? 0, 1)} J</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Basınç (her yerde)', deger: (sonuc?.basinc ?? 0) / 1000, birim: 'kPa', vurgulu: true },
              { ad: 'Çıkış kuvveti F₂', deger: sonuc?.cikisKuvveti ?? 0, birim: 'N', tur: 'vektor', basamak: 0 },
              { ad: 'Kuvvet kazancı', deger: sonuc?.kuvvetKazanci ?? 0, birim: '×', tur: 'notr' },
              { ad: 'Giriş yolu h₁', deger: girisYolu * 100, birim: 'cm', tur: 'notr' },
              { ad: 'Çıkış yolu h₂', deger: (sonuc?.cikisYolu ?? 0) * 100, birim: 'cm', tur: 'notr', basamak: 2 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Kuvvet kazandın — peki enerji?</div>
          <div className="fa-izgara iki">
            <div style={{ padding: 12, borderRadius: 10, background: 'rgb(var(--fa-vektor) / 0.1)', border: '1px solid rgb(var(--fa-vektor) / 0.3)' }}>
              <div style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))' }}>Küçük piston</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, marginTop: 5, lineHeight: 1.7 }}>
                F₁ = {sayiBicimle(girisKuvveti, 0)} N<br />
                h₁ = {sayiBicimle(girisYolu, 3)} m<br />
                W₁ = <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(sonuc?.girisIsi ?? 0, 3)} J</b>
              </div>
            </div>
            <div style={{ padding: 12, borderRadius: 10, background: 'rgb(var(--fa-olcum) / 0.1)', border: '1px solid rgb(var(--fa-olcum) / 0.3)' }}>
              <div style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))' }}>Büyük piston</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, marginTop: 5, lineHeight: 1.7 }}>
                F₂ = {sayiBicimle(sonuc?.cikisKuvveti ?? 0, 0)} N<br />
                h₂ = {sayiBicimle(sonuc?.cikisYolu ?? 0, 5)} m<br />
                W₂ = <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(sonuc?.cikisIsi ?? 0, 3)} J</b>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <Not tur="olumlu" baslik="İki iş de eşit">
              Kuvvet {sayiBicimle(sonuc?.kuvvetKazanci ?? 0, 1)} kat büyüdü ama yol tam o kadar kısaldı.
              Yapılan iş her iki tarafta aynı: enerji korunuyor. Hidrolik pres bir <strong>kuvvet
              çoğaltıcıdır</strong>, enerji çoğaltıcı değil. Bedava enerji üreten hiçbir düzenek yoktur.
            </Not>
          </div>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Küçük piston çapı" deger={kucukCapCm} onChange={setKucukCapCm} alt={1} ust={20} adim={0.5} birim="cm" basamak={1} />
          <Kaydirici etiket="Büyük piston çapı" deger={buyukCapCm} onChange={setBuyukCapCm} alt={2} ust={80} adim={1} birim="cm" basamak={0}
            ipucu="Çap iki katına çıkarsa ALAN dört katına çıkar; kazanç da dört kat artar." />
          <Kaydirici etiket="Uygulanan kuvvet F₁" deger={girisKuvveti} onChange={setGirisKuvveti} alt={10} ust={1000} adim={10} birim="N" basamak={0} />
          <Kaydirici etiket="Küçük pistonun indiği yol" deger={girisYolu} onChange={setGirisYolu} alt={0.05} ust={1} adim={0.05} birim="m" basamak={2} />
        </div>

        <Not tur="bilgi" baslik="Oto lifti nasıl kaldırıyor?">
          Bir servis lifti 1500 kg’lık aracı (15 000 N) kaldırır. Küçük pistona yalnızca
          {' '}{sayiBicimle(15000 / (sonuc?.kuvvetKazanci || 1), 0)} N uygulamak yeterli — ama küçük pistonu
          defalarca pompalamak gerekir. Kazanılan kuvvetin bedeli, harcanan yoldur.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Arşimet Havuzu ═══════════ */

function ArsimetHavuzu() {
  const [maddeKod, setMaddeKod] = useState('tahta')
  const [sivikod, setSivikod] = useState('su')
  const [hacimCm3, setHacimCm3] = useState(500)
  const [gemiModu, setGemiModu] = useState(false)
  const [yukKg, setYukKg] = useState(2000)

  const g = G_MUFREDAT
  const madde = MADDELER[maddeKod]
  const sivi = SIVILAR[sivikod]
  const hacim = hacimCm3 / 1e6
  const kutle = madde.ozkutle * hacim

  const durum = sividakiDurum({ cismikutlesi: kutle, cisimHacmi: hacim, sivinOzkutlesi: sivi.ozkutle })

  // Gemi modu: gövde tabanı 200 m², boş kütle 5000 kg
  const gemi = geminBatmasi({ gemiKutlesi: 5000, yukKutlesi: yukKg, tabanAlani: 200, sivinOzkutlesi: sivi.ozkutle })

  const AG = 600
  const AY = 320
  const suUst = 110
  const suAlt = 280

  const kenar = Math.min(110, Math.cbrt(hacimCm3) * 6)
  const batan = durum.batanOran

  const kuvvetOlcek = Math.min(0.9, 60 / Math.max(durum.agirlik, 1))

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${AG} ${AY}`} role="img" aria-label={gemiModu
            ? `Gemi ${sayiBicimle(gemi?.batmaDerinligi ?? 0, 2)} metre batıyor.`
            : `${madde.ad} ${sivi.ad} içinde ${durum.durum === 'yuzer' ? 'yüzüyor' : durum.durum === 'askida' ? 'askıda kalıyor' : 'batıyor'}.`}
          >
            {/* Havuz */}
            <rect x="30" y={suUst} width={AG - 60} height={suAlt - suUst} fill={sivi.renk} opacity="0.28" />
            <line x1="30" x2={AG - 30} y1={suUst} y2={suUst} stroke={sivi.renk} strokeWidth="2.5" />
            <line x1="30" x2={AG - 30} y1={suAlt} y2={suAlt} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="3" />

            {gemiModu ? (
              (() => {
                const derinlikPx = Math.min(suAlt - suUst - 10, (gemi?.batmaDerinligi ?? 0) * 22)
                const gemiGen = 220
                const gemiYuk = 90
                const ustY = suUst - (gemiYuk - derinlikPx)
                return (
                  <>
                    <path
                      d={`M ${AG / 2 - gemiGen / 2} ${ustY} L ${AG / 2 + gemiGen / 2} ${ustY}
                          L ${AG / 2 + gemiGen / 2 - 24} ${ustY + gemiYuk} L ${AG / 2 - gemiGen / 2 + 24} ${ustY + gemiYuk} Z`}
                      fill="rgb(var(--fa-vurgu) / 0.4)" stroke="rgb(var(--fa-vurgu))" strokeWidth="2"
                    />
                    {/* Su hattı işareti */}
                    <line x1={AG / 2 - gemiGen / 2 - 16} x2={AG / 2 + gemiGen / 2 + 16} y1={suUst} y2={suUst}
                      stroke="rgb(var(--fa-uyari))" strokeWidth="2" strokeDasharray="6 3" />
                    <text x={AG / 2 + gemiGen / 2 + 22} y={suUst + 4} fontSize="10.5" fill="rgb(var(--fa-uyari))">su hattı</text>
                    <text x={AG / 2} y={ustY - 12} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin))">
                      Yük: {sayiBicimle(yukKg / 1000, 1)} ton
                    </text>
                    <text x={AG / 2} y={suAlt + 22} textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-olcum))">
                      Batma derinliği: {sayiBicimle(gemi?.batmaDerinligi ?? 0, 3)} m
                    </text>
                  </>
                )
              })()
            ) : (
              (() => {
                const cx = AG / 2 - kenar / 2
                const ustY = durum.durum === 'batar'
                  ? suAlt - kenar - 4
                  : suUst - kenar * (1 - batan)
                return (
                  <>
                    {/* Taşan sıvı hacmi göstergesi */}
                    <rect x={cx} y={ustY} width={kenar} height={kenar} rx="4"
                      fill={madde.renk} opacity="0.9" stroke="rgb(var(--fa-metin))" strokeWidth="1.5" />
                    {/* Batan kısmı vurgula */}
                    <rect x={cx} y={Math.max(ustY, suUst)} width={kenar}
                      height={Math.max(0, Math.min(ustY + kenar, suAlt) - Math.max(ustY, suUst))}
                      fill={sivi.renk} opacity="0.28" />

                    {/* Kuvvet vektörleri */}
                    <VektorOku x1={cx + kenar / 2} y1={ustY + kenar / 2}
                      x2={cx + kenar / 2} y2={ustY + kenar / 2 + durum.agirlik * kuvvetOlcek}
                      renk="rgb(var(--fa-hata))" kalinlik={3} etiket="G" />
                    <VektorOku x1={cx + kenar / 2} y1={ustY + kenar / 2}
                      x2={cx + kenar / 2} y2={ustY + kenar / 2 - durum.kaldirmaKuvveti * kuvvetOlcek}
                      renk="rgb(var(--fa-olcum))" kalinlik={3} etiket="F_k" />

                    <text x={cx + kenar / 2} y={ustY - 14} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin))">
                      {madde.ad}
                    </text>
                  </>
                )
              })()
            )}

            <text x={AG - 36} y={suAlt - 8} textAnchor="end" fontSize="11" fill="rgb(var(--fa-metin-2))">
              {sivi.ad} · {sivi.ozkutle} kg/m³
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            {gemiModu ? (
              <span className="fa-rozet olcum">Batan hacim: {sayiBicimle(gemi?.batanHacim ?? 0, 1)} m³</span>
            ) : (
              <>
                <span className={`fa-rozet ${durum.durum === 'batar' ? 'hata' : durum.durum === 'askida' ? 'uyari' : 'olumlu'}`}>
                  {durum.durum === 'yuzer' ? 'Yüzüyor' : durum.durum === 'askida' ? 'Askıda' : 'Batıyor'}
                </span>
                <span className="fa-rozet olcum">Batan: %{sayiBicimle(batan * 100, 1)}</span>
                <span className="fa-rozet vektor">F_k = {sayiBicimle(durum.kaldirmaKuvveti, 1)} N</span>
              </>
            )}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          {gemiModu ? (
            <OlcumPanosu olcumler={[
              { ad: 'Gemi + yük kütlesi', deger: (gemi?.toplamKutle ?? 0) / 1000, birim: 'ton', tur: 'notr', basamak: 2 },
              { ad: 'Batan hacim', deger: gemi?.batanHacim ?? 0, birim: 'm³', vurgulu: true },
              { ad: 'Batma derinliği', deger: gemi?.batmaDerinligi ?? 0, birim: 'm', basamak: 3 },
              { ad: 'Kaldırma kuvveti', deger: kaldirmaKuvveti(sivi.ozkutle, gemi?.batanHacim ?? 0, g) / 1000, birim: 'kN', tur: 'vektor', basamak: 1 },
            ]} />
          ) : (
            <OlcumPanosu olcumler={[
              { ad: 'Cismin özkütlesi', deger: durum.cisminOzkutlesi, birim: 'kg/m³', tur: 'notr', basamak: 0 },
              { ad: 'Ağırlık G', deger: durum.agirlik, birim: 'N', tur: 'vektor' },
              { ad: 'Kaldırma kuvveti F_k', deger: durum.kaldirmaKuvveti, birim: 'N', vurgulu: true },
              { ad: 'Batan hacim', deger: durum.batanHacim * 1e6, birim: 'cm³', tur: 'notr', basamak: 0 },
              { ad: 'Görünen ağırlık', deger: durum.gorunenAgirlik, birim: 'N' },
            ]} />
          )}
        </div>

        {!gemiModu ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <Grafik
              baslik="Sıvı özkütlesine göre batan hacim oranı"
              xEtiket="Sıvı özkütlesi (kg/m³)" yEtiket="Batan oran (%)"
              seriler={[{
                ad: madde.ad, renk: madde.renk, birim: '%',
                veri: Array.from({ length: 60 }, (_, i) => {
                  const d = 600 + i * 240
                  const s = sividakiDurum({ cismikutlesi: kutle, cisimHacmi: hacim, sivinOzkutlesi: d })
                  return { x: d, y: s.batanOran * 100 }
                }),
              }]}
              imlecX={sivi.ozkutle}
              yukseklik={175}
            />
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
              Sıvı yoğunlaştıkça cisim daha az batıyor. Eğri %100’de düzleşiyor: cisim tamamen battıktan
              sonra daha fazla batamaz, kaldırma kuvveti de artık artmaz.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Anahtar etiket="Gemi modu" acik={gemiModu} onChange={setGemiModu}
            ipucu="Aynı ilke, gerçek ölçekte: gemi yük aldıkça ne kadar batar?" />
          {gemiModu ? (
            <Kaydirici etiket="Yük" deger={yukKg} onChange={setYukKg} alt={0} ust={50000} adim={500} birim="kg" basamak={0} />
          ) : (
            <>
              <Liste etiket="Cisim" deger={maddeKod} onChange={setMaddeKod}
                secenekler={Object.entries(MADDELER).map(([kod, m]) => ({ kod, ad: `${m.ad} (${m.ozkutle})` }))} />
              <Kaydirici etiket="Cismin hacmi" deger={hacimCm3} onChange={setHacimCm3} alt={50} ust={2000} adim={50} birim="cm³" basamak={0} />
            </>
          )}
          <Liste etiket="Sıvı" deger={sivikod} onChange={setSivikod}
            secenekler={Object.entries(SIVILAR).map(([kod, s]) => ({ kod, ad: `${s.ad} (${s.ozkutle})` }))} />
        </div>

        {!gemiModu ? (
          <Not tur={durum.durum === 'batar' ? 'uyari' : 'olumlu'} baslik="Kaldırma kuvvetinde kütle yok">
            F_k = d_sıvı · V_batan · g. Formülde <strong>cismin özkütlesi hiç geçmiyor</strong> — yalnızca
            batan hacim ve sıvının özkütlesi var. Cismin özkütlesi sadece <em>ne kadarının batacağını</em>
            {' '}belirler. Şu an batan oran {sayiBicimle(batan, 3)} = {sayiBicimle(durum.cisminOzkutlesi, 0)} / {sivi.ozkutle}.
          </Not>
        ) : (
          <Not tur="bilgi" baslik="Gemiler neden batmaz?">
            Çelik suyun sekiz katı yoğundur ama gemi içi büyük ölçüde boştur. Geminin <strong>ortalama</strong>
            {' '}özkütlesi sudan küçük olduğu sürece yüzer. Yük arttıkça daha derine oturur ve daha çok su
            taşırır; kaldırma kuvveti de tam o kadar büyür. Kritik nokta, su hattının güverteyi geçtiği andır.
          </Not>
        )}

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Kuvvet dengesi</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgb(var(--fa-hata))' }}>
              <ArrowDown size={15} /> Ağırlık: {sayiBicimle(gemiModu ? (gemi?.toplamKutle ?? 0) * g / 1000 : durum.agirlik, 1)} {gemiModu ? 'kN' : 'N'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgb(var(--fa-olcum))' }}>
              <ArrowUp size={15} /> Kaldırma: {sayiBicimle(gemiModu ? kaldirmaKuvveti(sivi.ozkutle, gemi?.batanHacim ?? 0, g) / 1000 : durum.kaldirmaKuvveti, 1)} {gemiModu ? 'kN' : 'N'}
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            {gemiModu || durum.durum !== 'batar'
              ? 'Yüzen cisimde bu iki kuvvet birbirine tam eşittir; cisim bu yüzden hareketsiz durur.'
              : `Ağırlık kaldırma kuvvetinden büyük olduğu için cisim ${sayiBicimle(Math.abs(durum.netIvme), 2)} m/s² ivmeyle batar.`}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'basinc-tezgahi', ad: 'Basınç Tezgâhı', Bilesen: BasincTezgahi },
  { kod: 'hidrolik-pres', ad: 'Hidrolik Pres', Bilesen: HidrolikPres },
  { kod: 'arsimet-havuzu', ad: 'Arşimet Havuzu', Bilesen: ArsimetHavuzu },
]

export default function BasincBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="basinc" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
