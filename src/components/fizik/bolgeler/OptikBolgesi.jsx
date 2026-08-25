import { useCallback, useMemo, useRef, useState } from 'react'
import {
  Anahtar, Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, VektorOku,
} from '../ortak/index.js'
import {
  ORTAMLAR, RENK_INDISLERI, aydinlanma, duzlemAyna, filtredenGecen, golgeHesabi,
  goruntuBoyu, goruntuKonumu, isikKarisimi, kirilma, kureselAynaOdagi,
  ortamdaIsikHizi, prizmaAyrismasi, sinirAcisi,
} from '../../../lib/fizik/optik.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620
const SY = 340

/* ═══════════ Deney 1: Gölge Tezgâhı ═══════════ */

function GolgeTezgahi() {
  const [kaynakBoyu, setKaynakBoyu] = useState(0)
  const [engelBoyu, setEngelBoyu] = useState(0.4)
  const [kaynakEngel, setKaynakEngel] = useState(1.5)
  const [engelPerde, setEngelPerde] = useState(2)
  const [isikSiddeti, setIsikSiddeti] = useState(100)

  const sonuc = golgeHesabi({ kaynakBoyu, engelBoyu, kaynakEngelUzakligi: kaynakEngel, engelPerdeUzakligi: engelPerde })
  const perdeAydinlanmasi = aydinlanma(isikSiddeti, kaynakEngel + engelPerde)

  const toplamMesafe = kaynakEngel + engelPerde
  const px = (m) => 50 + (m / toplamMesafe) * (SG - 130)
  const py = (boy) => SY / 2 - boy * 60
  const engelX = px(kaynakEngel)
  const perdeX = px(toplamMesafe)

  // Kaynağın uç noktalarından engel kenarlarına giden ışınlar
  const kaynakUst = py(kaynakBoyu / 2)
  const kaynakAlt = py(-kaynakBoyu / 2)
  const engelUst = py(engelBoyu / 2)
  const engelAlt = py(-engelBoyu / 2)

  /** Işını kaynaktan engel kenarına, oradan perdeye uzatır. */
  const isinUzat = (bx, by, ex, ey) => {
    const oran = (perdeX - bx) / (ex - bx)
    return { x: perdeX, y: by + (ey - by) * oran }
  }

  const p1 = isinUzat(50, kaynakUst, engelX, engelUst)
  const p2 = isinUzat(50, kaynakAlt, engelX, engelUst)
  const p3 = isinUzat(50, kaynakUst, engelX, engelAlt)
  const p4 = isinUzat(50, kaynakAlt, engelX, engelAlt)

  const tamGolgeUst = Math.max(p1.y, p2.y)
  const tamGolgeAlt = Math.min(p3.y, p4.y)
  const yariUst = Math.min(p1.y, p2.y)
  const yariAlt = Math.max(p3.y, p4.y)

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={`Gölge deneyi. ${sonuc?.aciklama ?? ''} Tam gölge boyu ${sayiBicimle(sonuc?.tamGolgeBoyu ?? 0, 2)} metre.`}>
            {/* Işınlar */}
            {[[kaynakUst, engelUst, p1], [kaynakAlt, engelUst, p2], [kaynakUst, engelAlt, p3], [kaynakAlt, engelAlt, p4]].map(([by, ey, p], i) => (
              <line key={i} x1="50" y1={by} x2={p.x} y2={p.y}
                stroke="rgb(var(--fa-enerji))" strokeWidth="1.2" opacity="0.5" strokeDasharray="4 3" />
            ))}

            {/* Perde üzerinde bölgeler */}
            <g>
              <rect x={perdeX} y={Math.min(yariUst, yariAlt)} width="14"
                height={Math.abs(yariAlt - yariUst)} fill="rgb(var(--fa-metin-3))" opacity="0.4" />
              {sonuc?.tamGolgeVarMi ? (
                <rect x={perdeX} y={Math.min(tamGolgeUst, tamGolgeAlt)} width="14"
                  height={Math.abs(tamGolgeAlt - tamGolgeUst)} fill="rgb(var(--fa-zemin))" />
              ) : null}
              <line x1={perdeX} x2={perdeX} y1="24" y2={SY - 40} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="3" />
              <text x={perdeX + 20} y="36" fontSize="10.5" fill="rgb(var(--fa-metin-3))">perde</text>
              {sonuc?.tamGolgeVarMi ? (
                <text x={perdeX + 20} y={(tamGolgeUst + tamGolgeAlt) / 2} fontSize="10.5" fontWeight="700" fill="rgb(var(--fa-metin))">
                  tam gölge
                </text>
              ) : null}
              {kaynakBoyu > 0.001 ? (
                <text x={perdeX + 20} y={yariUst + 12} fontSize="10.5" fill="rgb(var(--fa-metin-3))">yarı gölge</text>
              ) : null}
            </g>

            {/* Kaynak */}
            {kaynakBoyu < 0.001 ? (
              <circle cx="50" cy={SY / 2} r="7" fill="rgb(var(--fa-enerji))" />
            ) : (
              <rect x="44" y={kaynakUst} width="12" height={Math.abs(kaynakAlt - kaynakUst)} rx="4" fill="rgb(var(--fa-enerji))" />
            )}
            <text x="50" y={SY - 20} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-enerji))">
              {kaynakBoyu < 0.001 ? 'nokta kaynak' : `kaynak ${sayiBicimle(kaynakBoyu, 2)} m`}
            </text>

            {/* Engel */}
            <rect x={engelX - 6} y={engelUst} width="12" height={Math.abs(engelAlt - engelUst)} rx="2" fill="rgb(var(--fa-cizgi-guclu))" />
            <text x={engelX} y={SY - 20} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">engel</text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${sonuc?.tamGolgeVarMi ? 'olumlu' : 'uyari'}`}>
              Tam gölge: {sayiBicimle(sonuc?.tamGolgeBoyu ?? 0, 2)} m
            </span>
            {kaynakBoyu > 0.001 ? (
              <span className="fa-rozet">Yarı gölge genişliği: {sayiBicimle(sonuc?.yariGolgeGenisligi ?? 0, 2)} m</span>
            ) : <span className="fa-rozet">Nokta kaynak — yarı gölge yok</span>}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Tam gölge boyu', deger: sonuc?.tamGolgeBoyu ?? 0, birim: 'm', vurgulu: true },
              { ad: 'Yarı gölge dış boyu', deger: sonuc?.yariGolgeDisBoyu ?? 0, birim: 'm' },
              { ad: 'Yarı gölge genişliği', deger: sonuc?.yariGolgeGenisligi ?? 0, birim: 'm' },
              { ad: 'Perdedeki aydınlanma', deger: perdeAydinlanmasi ?? 0, birim: 'lx', tur: 'enerji', basamak: 2 },
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Not tur="bilgi" baslik="Ne oluyor?">{sonuc?.aciklama}</Not>
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Uzaklığa göre aydınlanma (ters kare yasası)"
            xEtiket="Uzaklık (m)" yEtiket="Aydınlanma (lx)"
            seriler={[{
              ad: 'E = I/d²', renk: 'rgb(var(--fa-enerji))', birim: 'lx',
              veri: Array.from({ length: 60 }, (_, i) => {
                const d = 0.3 + i * 0.15
                return { x: d, y: aydinlanma(isikSiddeti, d) ?? 0 }
              }),
            }]}
            imlecX={toplamMesafe}
            yukseklik={175}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Uzaklık iki katına çıkınca aydınlanma <strong>dörtte bire</strong> iner. Aynı ışık dört kat geniş
            bir alana yayıldığı için. Coulomb kuvveti ve yer çekimi de aynı kurala uyar.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Kaynağın boyu" deger={kaynakBoyu} onChange={setKaynakBoyu} alt={0} ust={1.2} adim={0.02} birim="m" basamak={2}
            ipucu="0 = nokta kaynak. Büyüttükçe yarı gölge genişler, tam gölge daralır." />
          <Kaydirici etiket="Engel boyu" deger={engelBoyu} onChange={setEngelBoyu} alt={0.1} ust={1.5} adim={0.05} birim="m" basamak={2} />
          <Kaydirici etiket="Kaynak–engel uzaklığı" deger={kaynakEngel} onChange={setKaynakEngel} alt={0.4} ust={4} adim={0.1} birim="m" basamak={1} />
          <Kaydirici etiket="Engel–perde uzaklığı" deger={engelPerde} onChange={setEngelPerde} alt={0.4} ust={5} adim={0.1} birim="m" basamak={1} />
          <Kaydirici etiket="Işık şiddeti" deger={isikSiddeti} onChange={setIsikSiddeti} alt={10} ust={500} adim={10} birim="cd" basamak={0} />
        </div>

        <Not tur="bilgi" baslik="Güneş ve Ay tutulması">
          Güneş bir nokta kaynak değildir; bu yüzden Ay’ın gölgesinde hem tam gölge hem yarı gölge oluşur.
          Tam gölgenin düştüğü dar şeritte <strong>tam güneş tutulması</strong>, yarı gölgede
          <strong> parçalı tutulma</strong> görülür. Kaynak boyunu büyütüp tam gölgenin nasıl daraldığını izle.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Kırılma ve Tam Yansıma ═══════════ */

function KirilmaTezgahi() {
  const [ust, setUst] = useState('hava')
  const [alt, setAlt] = useState('cam')
  const [gelmeAcisi, setGelmeAcisi] = useState(35)
  const [normalGoster, setNormalGoster] = useState(true)
  const [prizmaModu, setPrizmaModu] = useState(false)

  const n1 = ORTAMLAR[ust].n
  const n2 = ORTAMLAR[alt].n
  const sonuc = kirilma({ gelmeAcisi, n1, n2 })
  const sinir = sinirAcisi(n1, n2)

  const merkez = { x: SG / 2, y: SY / 2 }
  const R = 150
  const rad = (d) => (d * Math.PI) / 180

  // Gelen ışın normalin solundan gelir
  const gelenX = merkez.x - Math.sin(rad(gelmeAcisi)) * R
  const gelenY = merkez.y - Math.cos(rad(gelmeAcisi)) * R
  // Yansıyan ışın: aynı açıyla sağa
  const yansiyanX = merkez.x + Math.sin(rad(gelmeAcisi)) * R
  const yansiyanY = merkez.y - Math.cos(rad(gelmeAcisi)) * R
  // Kırılan ışın
  const kirilanAcisi = sonuc.kirilmaAcisi ?? 0
  const kirilanX = merkez.x + Math.sin(rad(kirilanAcisi)) * R
  const kirilanY = merkez.y + Math.cos(rad(kirilanAcisi)) * R

  const prizma = useMemo(() => (prizmaModu ? prizmaAyrismasi({ gelmeAcisi, prizmaAcisi: 60 }) : []), [prizmaModu, gelmeAcisi])

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          {!prizmaModu ? (
            <svg viewBox={`0 0 ${SG} ${SY}`} role="img"
              aria-label={`Kırılma deneyi. ${sonuc.aciklama}`}>
              {/* Ortamlar */}
              <rect x="0" y="0" width={SG} height={SY / 2} fill={ORTAMLAR[ust].renk} opacity="0.25" />
              <rect x="0" y={SY / 2} width={SG} height={SY / 2} fill={ORTAMLAR[alt].renk} opacity="0.3" />
              <line x1="0" x2={SG} y1={SY / 2} y2={SY / 2} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <text x="14" y="24" fontSize="11.5" fill="rgb(var(--fa-metin-2))" fontWeight="600">
                {ORTAMLAR[ust].ad} · n = {n1}
              </text>
              <text x="14" y={SY - 14} fontSize="11.5" fill="rgb(var(--fa-metin-2))" fontWeight="600">
                {ORTAMLAR[alt].ad} · n = {n2}
              </text>

              {/* Normal */}
              {normalGoster ? (
                <line x1={merkez.x} x2={merkez.x} y1={merkez.y - R - 10} y2={merkez.y + R + 10}
                  stroke="rgb(var(--fa-metin-3))" strokeWidth="1.4" strokeDasharray="6 4" />
              ) : null}
              <text x={merkez.x + 6} y={merkez.y - R - 2} fontSize="10" fill="rgb(var(--fa-metin-3))">normal</text>

              {/* Gelen ışın */}
              <VektorOku x1={gelenX} y1={gelenY} x2={merkez.x} y2={merkez.y} renk="rgb(var(--fa-enerji))" kalinlik={2.8} />
              <text x={gelenX - 8} y={gelenY - 6} fontSize="11" fontWeight="700" fill="rgb(var(--fa-enerji))">gelen</text>

              {/* Yansıyan ışın */}
              <VektorOku x1={merkez.x} y1={merkez.y} x2={yansiyanX} y2={yansiyanY}
                renk="rgb(var(--fa-uyari))" kalinlik={sonuc.tamYansima ? 3.2 : 1.8}
                opaklik={sonuc.tamYansima ? 1 : 0.5} />
              <text x={yansiyanX + 6} y={yansiyanY - 6} fontSize="11" fontWeight="700" fill="rgb(var(--fa-uyari))">
                yansıyan{sonuc.tamYansima ? ' (tamamı)' : ''}
              </text>

              {/* Kırılan ışın */}
              {!sonuc.tamYansima ? (
                <>
                  <VektorOku x1={merkez.x} y1={merkez.y} x2={kirilanX} y2={kirilanY} renk="rgb(var(--fa-olcum))" kalinlik={2.8} />
                  <text x={kirilanX + 6} y={kirilanY + 14} fontSize="11" fontWeight="700" fill="rgb(var(--fa-olcum))">kırılan</text>
                </>
              ) : null}

              {/* Açı yayları */}
              <path d={`M ${merkez.x} ${merkez.y - 46} A 46 46 0 0 0 ${merkez.x - Math.sin(rad(gelmeAcisi)) * 46} ${merkez.y - Math.cos(rad(gelmeAcisi)) * 46}`}
                fill="none" stroke="rgb(var(--fa-enerji))" strokeWidth="1.4" />
              <text x={merkez.x - Math.sin(rad(gelmeAcisi / 2)) * 62} y={merkez.y - Math.cos(rad(gelmeAcisi / 2)) * 62}
                textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-enerji))">
                {sayiBicimle(gelmeAcisi, 0)}°
              </text>
              {!sonuc.tamYansima ? (
                <>
                  <path d={`M ${merkez.x} ${merkez.y + 46} A 46 46 0 0 0 ${merkez.x + Math.sin(rad(kirilanAcisi)) * 46} ${merkez.y + Math.cos(rad(kirilanAcisi)) * 46}`}
                    fill="none" stroke="rgb(var(--fa-olcum))" strokeWidth="1.4" />
                  <text x={merkez.x + Math.sin(rad(kirilanAcisi / 2)) * 62} y={merkez.y + Math.cos(rad(kirilanAcisi / 2)) * 62}
                    textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-olcum))">
                    {sayiBicimle(kirilanAcisi, 1)}°
                  </text>
                </>
              ) : null}
            </svg>
          ) : (
            <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label="Prizmada beyaz ışığın renklere ayrışması.">
              {/* Prizma üçgeni */}
              <polygon points={`${SG / 2},70 ${SG / 2 - 78},210 ${SG / 2 + 78},210`}
                fill="rgb(var(--fa-olcum) / 0.14)" stroke="rgb(var(--fa-olcum))" strokeWidth="2" />
              {/* Gelen beyaz ışık */}
              <VektorOku x1="60" y1="150" x2={SG / 2 - 44} y2="150" renk="#ffffff" kalinlik={3.4} />
              <text x="60" y="138" fontSize="11" fill="rgb(var(--fa-metin-2))">beyaz ışık</text>

              {/* Ayrışan renkler */}
              {prizma.filter((r) => r.cikabildi).map((r, i) => {
                const sapma = r.sapma ?? 0
                const bx = SG / 2 + 46
                const by = 152
                const uzunluk = 170
                const ac = rad(sapma * 0.55)
                return (
                  <g key={r.ad}>
                    <line x1={bx} y1={by} x2={bx + Math.cos(ac) * uzunluk} y2={by + Math.sin(ac) * uzunluk}
                      stroke={r.renk} strokeWidth="3" strokeLinecap="round" />
                    <text x={bx + Math.cos(ac) * (uzunluk + 14)} y={by + Math.sin(ac) * (uzunluk + 14) + 4}
                      fontSize="10" fill={r.renk} fontWeight="700">{r.ad}</text>
                  </g>
                )
              })}
              <text x={SG / 2} y={SY - 12} textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
                Mor en çok, kırmızı en az sapar — çünkü kırıcılık indisleri farklıdır
              </text>
            </svg>
          )}

          <div className="fa-sahne-rozet">
            {!prizmaModu ? (
              <>
                <span className={`fa-rozet ${sonuc.tamYansima ? 'hata' : 'olcum'}`}>
                  {sonuc.tamYansima ? 'TAM YANSIMA' : `Kırılma açısı: ${sayiBicimle(kirilanAcisi, 1)}°`}
                </span>
                {sinir !== null ? <span className="fa-rozet uyari">Sınır açısı: {sayiBicimle(sinir, 1)}°</span> : null}
              </>
            ) : (
              <span className="fa-rozet olcum">Kırmızı–mor sapma farkı: {sayiBicimle((prizma[6]?.sapma ?? 0) - (prizma[0]?.sapma ?? 0), 2)}°</span>
            )}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Gelme açısı', deger: gelmeAcisi, birim: '°', tur: 'notr', basamak: 0 },
              { ad: 'Kırılma açısı', deger: sonuc.tamYansima ? '—' : kirilanAcisi, birim: '°', vurgulu: true, basamak: 2 },
              { ad: 'Sınır açısı', deger: sinir === null ? '—' : sinir, birim: '°', basamak: 2 },
              { ad: `${ORTAMLAR[ust].ad}'da ışık hızı`, deger: ortamdaIsikHizi(n1) / 1e6, birim: '×10⁶ m/s', tur: 'notr' },
              { ad: `${ORTAMLAR[alt].ad}'da ışık hızı`, deger: ortamdaIsikHizi(n2) / 1e6, birim: '×10⁶ m/s', tur: 'notr' },
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Not tur={sonuc.tamYansima ? 'uyari' : 'bilgi'} baslik={sonuc.tamYansima ? 'Işık geçemedi' : 'Ne oluyor?'}>
            {sonuc.aciklama}
            {sonuc.tamYansima ? ' Fiber optik kablolar tam olarak bunu kullanır: ışık cam lifin içinde defalarca tam yansıyarak kilometrelerce ilerler, dışarı hiç kaçmaz.' : ''}
          </Not>
        </div>

        {sinir !== null ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <Grafik
              baslik="Gelme açısına göre kırılma açısı"
              xEtiket="Gelme açısı (°)" yEtiket="Kırılma açısı (°)"
              seriler={[{
                ad: 'Kırılma açısı', renk: 'rgb(var(--fa-olcum))', birim: '°',
                veri: Array.from({ length: 90 }, (_, i) => {
                  const k = kirilma({ gelmeAcisi: i, n1, n2 })
                  return { x: i, y: k.tamYansima ? 90 : k.kirilmaAcisi }
                }),
              }]}
              imlecX={gelmeAcisi}
              yukseklik={175}
            />
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
              Eğri {sayiBicimle(sinir, 1)}° civarında 90°’ye ulaşıp orada kalıyor. Bu açıdan sonra kırılan ışın
              yoktur; ışığın tamamı yansır.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Anahtar etiket="Prizma modu (renklere ayrışma)" acik={prizmaModu} onChange={setPrizmaModu} />
          {!prizmaModu ? (
            <>
              <Liste etiket="Üstteki ortam" deger={ust} onChange={setUst}
                secenekler={Object.entries(ORTAMLAR).map(([kod, o]) => ({ kod, ad: `${o.ad} (n=${o.n})` }))} />
              <Liste etiket="Alttaki ortam" deger={alt} onChange={setAlt}
                secenekler={Object.entries(ORTAMLAR).map(([kod, o]) => ({ kod, ad: `${o.ad} (n=${o.n})` }))} />
            </>
          ) : null}
          <Kaydirici etiket="Gelme açısı" deger={gelmeAcisi} onChange={setGelmeAcisi} alt={0} ust={89} adim={1} birim="°" basamak={0}
            ipucu="Açılar daima NORMALE göre ölçülür, yüzeye göre değil." />
          {!prizmaModu ? (
            <Anahtar etiket="Normali göster" acik={normalGoster} onChange={setNormalGoster} />
          ) : null}
        </div>

        {prizmaModu ? (
          <div className="fa-kart dar">
            <div className="fa-ust-etiket">Renklerin kırıcılık indisleri</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Renk</th><th style={{ textAlign: 'right' }}>n</th><th style={{ textAlign: 'right' }}>Sapma (°)</th></tr></thead>
                <tbody>
                  {prizma.map((r) => (
                    <tr key={r.ad}>
                      <td><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 3, background: r.renk, marginRight: 6 }} />{r.ad}</td>
                      <td className="sayi">{r.nCam}</td>
                      <td className="sayi">{r.cikabildi ? sayiBicimle(r.sapma, 2) : 'çıkamadı'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Not tur="bilgi" baslik="Havuz neden sığ görünür?">
            Sudan çıkan ışınlar normalden uzaklaşarak kırılır. Gözümüz ışınları hep düz geldi kabul ettiği
            için tabanı olduğundan yukarıda görür. Üst ortamı “Su”, alttakini “Hava” seçip kırılan ışının
            nasıl saptığına bak.
          </Not>
        )}
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Mercek ve Ayna ═══════════ */

const OPTIK_ELEMANLAR = {
  cukurAyna: { ad: 'Çukur ayna', tur: 'ayna', toplayici: true },
  tumsekAyna: { ad: 'Tümsek ayna', tur: 'ayna', toplayici: false },
  duzlemAyna: { ad: 'Düzlem ayna', tur: 'duzlem', toplayici: false },
  inceKenar: { ad: 'İnce kenarlı mercek', tur: 'mercek', toplayici: true },
  kalinKenar: { ad: 'Kalın kenarlı mercek', tur: 'mercek', toplayici: false },
}

function MercekTezgahi() {
  const [elemanKod, setElemanKod] = useState('inceKenar')
  const [odakBuyuklugu, setOdakBuyuklugu] = useState(8)
  const [cisimUzakligi, setCisimUzakligi] = useState(24)
  const [cisimBoyu, setCisimBoyu] = useState(4)
  const svgRef = useRef(null)
  const surukluyor = useRef(false)

  const eleman = OPTIK_ELEMANLAR[elemanKod]
  const odak = eleman.tur === 'duzlem'
    ? Infinity
    : (eleman.tur === 'ayna'
      ? kureselAynaOdagi(odakBuyuklugu * 2, eleman.toplayici ? 'cukur' : 'tumsek')
      : (eleman.toplayici ? odakBuyuklugu : -odakBuyuklugu))

  const sonuc = eleman.tur === 'duzlem'
    ? duzlemAyna(cisimUzakligi)
    : goruntuKonumu({ odak, cisimUzakligi })

  const gBoyu = goruntuBoyu(cisimBoyu, sonuc?.buyutme ?? 1)

  /* Çizim ölçeği */
  const OLCEK = 6.4
  const eksenY = SY / 2
  const merkezX = eleman.tur === 'ayna' || eleman.tur === 'duzlem' ? SG - 110 : SG / 2 + 30
  const cisimX = merkezX - cisimUzakligi * OLCEK
  const goruntuX = eleman.tur === 'mercek'
    ? merkezX + (sonuc?.goruntuUzakligi ?? 0) * OLCEK
    : merkezX - (sonuc?.goruntuUzakligi ?? 0) * OLCEK

  const konumaCevir = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return null
    const kutu = svg.getBoundingClientRect()
    const x = ((e.clientX - kutu.left) / kutu.width) * SG
    return (merkezX - x) / OLCEK
  }, [merkezX])

  const suruklerken = (e) => {
    if (!surukluyor.current) return
    const d = konumaCevir(e)
    if (d === null) return
    setCisimUzakligi(Math.max(2, Math.min(60, d)))
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne surukle"
          onPointerMove={suruklerken}
          onPointerUp={() => { surukluyor.current = false }}
          onPointerCancel={() => { surukluyor.current = false }}
        >
          <svg ref={svgRef} viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={`${eleman.ad}. Görüntü ${sonuc?.tur === 'gercek' ? 'gerçek' : 'sanal'}, ${sonuc?.yon === 'duz' ? 'düz' : 'ters'}, ${sonuc?.boyut === 'buyuk' ? 'büyük' : sonuc?.boyut === 'kucuk' ? 'küçük' : 'cisimle aynı boyda'}.`}>
            {/* Ana eksen */}
            <line x1="10" x2={SG - 10} y1={eksenY} y2={eksenY} stroke="rgb(var(--fa-cizgi))" strokeWidth="1.2" strokeDasharray="6 4" />

            {/* Optik eleman */}
            {eleman.tur === 'mercek' ? (
              <g>
                <path
                  d={eleman.toplayici
                    ? `M ${merkezX} ${eksenY - 78} Q ${merkezX + 18} ${eksenY} ${merkezX} ${eksenY + 78} Q ${merkezX - 18} ${eksenY} ${merkezX} ${eksenY - 78}`
                    : `M ${merkezX - 13} ${eksenY - 78} Q ${merkezX + 3} ${eksenY} ${merkezX - 13} ${eksenY + 78} L ${merkezX + 13} ${eksenY + 78} Q ${merkezX - 3} ${eksenY} ${merkezX + 13} ${eksenY - 78} Z`}
                  fill="rgb(var(--fa-olcum) / 0.25)" stroke="rgb(var(--fa-olcum))" strokeWidth="2"
                />
              </g>
            ) : eleman.tur === 'duzlem' ? (
              <g>
                <line x1={merkezX} x2={merkezX} y1={eksenY - 90} y2={eksenY + 90} stroke="rgb(var(--fa-olcum))" strokeWidth="3" />
                {Array.from({ length: 10 }, (_, i) => (
                  <line key={i} x1={merkezX} y1={eksenY - 86 + i * 19} x2={merkezX + 12} y2={eksenY - 96 + i * 19}
                    stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.6" />
                ))}
              </g>
            ) : (
              <path
                d={eleman.toplayici
                  ? `M ${merkezX + 22} ${eksenY - 84} Q ${merkezX - 16} ${eksenY} ${merkezX + 22} ${eksenY + 84}`
                  : `M ${merkezX - 22} ${eksenY - 84} Q ${merkezX + 16} ${eksenY} ${merkezX - 22} ${eksenY + 84}`}
                fill="none" stroke="rgb(var(--fa-olcum))" strokeWidth="3.4"
              />
            )}

            {/* Odak noktaları */}
            {eleman.tur !== 'duzlem' ? [1, -1].map((yon) => {
              const fx = eleman.tur === 'mercek'
                ? merkezX + yon * Math.abs(odak) * OLCEK
                : merkezX - yon * Math.abs(odak) * OLCEK
              return (
                <g key={yon}>
                  <circle cx={fx} cy={eksenY} r="3.5" fill="rgb(var(--fa-mor))" />
                  <text x={fx} y={eksenY + 18} textAnchor="middle" fontSize="10" fill="rgb(var(--fa-mor))">F</text>
                </g>
              )
            }) : null}

            {/* Cisim */}
            <g
              onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); surukluyor.current = true }}
              style={{ cursor: 'grab' }}
              tabIndex={0} role="button" aria-label="Cismi sürükle veya ok tuşlarıyla oynat"
              onKeyDown={(e) => {
                const k = { ArrowLeft: 1, ArrowRight: -1 }[e.key]
                if (!k) return
                e.preventDefault()
                setCisimUzakligi((d) => Math.max(2, Math.min(60, d + k * (e.shiftKey ? 4 : 1))))
              }}
            >
              <VektorOku x1={cisimX} y1={eksenY} x2={cisimX} y2={eksenY - cisimBoyu * OLCEK}
                renk="rgb(var(--fa-vurgu))" kalinlik={3.4} etiket="cisim" />
              <circle cx={cisimX} cy={eksenY - cisimBoyu * OLCEK} r="10" fill="transparent" />
            </g>

            {/* Ana ışınlar */}
            {eleman.tur !== 'duzlem' && sonuc && !sonuc.sonsuz ? (() => {
              const cisimUst = eksenY - cisimBoyu * OLCEK
              const goruntuUst = eksenY - gBoyu * OLCEK
              const gercek = sonuc.gercekMi
              return (
                <g>
                  {/* 1) Eksene paralel gelen ışın odaktan geçer */}
                  <line x1={cisimX} y1={cisimUst} x2={merkezX} y2={cisimUst} stroke="rgb(var(--fa-enerji))" strokeWidth="1.6" opacity="0.85" />
                  <line x1={merkezX} y1={cisimUst}
                    x2={gercek ? goruntuX : merkezX + (eleman.tur === 'mercek' ? 160 : -160)}
                    y2={gercek ? goruntuUst : cisimUst + ((goruntuUst - cisimUst) / (goruntuX - merkezX || 1)) * (eleman.tur === 'mercek' ? 160 : -160)}
                    stroke="rgb(var(--fa-enerji))" strokeWidth="1.6" opacity="0.85" />
                  {/* Sanal görüntüde uzantı kesikli */}
                  {!gercek ? (
                    <line x1={merkezX} y1={cisimUst} x2={goruntuX} y2={goruntuUst}
                      stroke="rgb(var(--fa-enerji))" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.7" />
                  ) : null}
                  {/* 2) Merkezden geçen ışın doğrultusunu değiştirmez */}
                  <line x1={cisimX} y1={cisimUst} x2={goruntuX} y2={goruntuUst}
                    stroke="rgb(var(--fa-uyari))" strokeWidth="1.6"
                    strokeDasharray={gercek ? undefined : '5 4'} opacity="0.8" />
                </g>
              )
            })() : null}

            {/* Düzlem aynada simetrik görüntü */}
            {eleman.tur === 'duzlem' ? (
              <>
                <line x1={cisimX} y1={eksenY - cisimBoyu * OLCEK} x2={merkezX} y2={eksenY - cisimBoyu * OLCEK}
                  stroke="rgb(var(--fa-enerji))" strokeWidth="1.6" opacity="0.8" />
                <line x1={merkezX} y1={eksenY - cisimBoyu * OLCEK} x2={merkezX + (merkezX - cisimX)} y2={eksenY - cisimBoyu * OLCEK}
                  stroke="rgb(var(--fa-enerji))" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.6" />
              </>
            ) : null}

            {/* Görüntü */}
            {sonuc && !sonuc.sonsuz ? (
              <g opacity={sonuc.tur === 'sanal' || sonuc.gercekMi === false ? 0.7 : 1}>
                <VektorOku
                  x1={eleman.tur === 'duzlem' ? merkezX + (merkezX - cisimX) : goruntuX}
                  y1={eksenY}
                  x2={eleman.tur === 'duzlem' ? merkezX + (merkezX - cisimX) : goruntuX}
                  y2={eksenY - (eleman.tur === 'duzlem' ? cisimBoyu : gBoyu) * OLCEK}
                  renk={sonuc.tur === 'gercek' ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-hata))'}
                  kalinlik={3.2}
                  kesikli={sonuc.tur !== 'gercek'}
                  etiket={sonuc.tur === 'gercek' ? 'gerçek görüntü' : 'sanal görüntü'}
                />
              </g>
            ) : (
              <text x={SG / 2} y={eksenY - 100} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="rgb(var(--fa-uyari))">
                Cisim tam odakta: ışınlar paralel çıkar, görüntü oluşmaz
              </text>
            )}
          </svg>

          <div className="fa-sahne-rozet">
            {sonuc && !sonuc.sonsuz ? (
              <>
                <span className={`fa-rozet ${(eleman.tur === 'duzlem' ? 'sanal' : sonuc.tur) === 'gercek' ? 'olumlu' : 'hata'}`}>
                  {eleman.tur === 'duzlem' ? 'Sanal' : sonuc.tur === 'gercek' ? 'Gerçek' : 'Sanal'}
                </span>
                <span className="fa-rozet">{(eleman.tur === 'duzlem' ? 'duz' : sonuc.yon) === 'duz' ? 'Düz' : 'Ters'}</span>
                <span className="fa-rozet olcum">
                  {eleman.tur === 'duzlem' ? 'Eşit boyda' : sonuc.boyut === 'buyuk' ? 'Büyük' : sonuc.boyut === 'kucuk' ? 'Küçük' : 'Eşit'}
                </span>
              </>
            ) : <span className="fa-rozet uyari">Görüntü oluşmuyor</span>}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Cisim uzaklığı d₀', deger: cisimUzakligi, birim: 'cm', tur: 'notr' },
              { ad: 'Odak uzaklığı f', deger: eleman.tur === 'duzlem' ? '∞' : odak, birim: 'cm', tur: 'notr' },
              { ad: 'Görüntü uzaklığı dᵢ', deger: sonuc?.sonsuz ? '∞' : (eleman.tur === 'duzlem' ? -cisimUzakligi : sonuc?.goruntuUzakligi ?? 0), birim: 'cm', vurgulu: true },
              { ad: 'Büyütme m', deger: sonuc?.sonsuz ? '∞' : (eleman.tur === 'duzlem' ? 1 : sonuc?.buyutme ?? 0), birim: '×' },
              { ad: 'Görüntü boyu', deger: eleman.tur === 'duzlem' ? cisimBoyu : Math.abs(gBoyu), birim: 'cm' },
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Not tur={sonuc && (eleman.tur === 'duzlem' || sonuc.tur === 'sanal') ? 'uyari' : 'bilgi'}
            baslik={eleman.tur === 'duzlem' ? 'Düzlem ayna' : sonuc?.tur === 'sanal' ? 'Sanal görüntü' : 'Gerçek görüntü'}>
            {eleman.tur === 'duzlem' ? duzlemAyna(cisimUzakligi).aciklama
              : sonuc?.sonsuz ? 'Cisim tam odak noktasındayken yansıyan/kırılan ışınlar birbirine paralel çıkar; hiçbir yerde kesişmedikleri için görüntü oluşmaz. Cismi biraz kaydır.'
                : sonuc?.tur === 'sanal'
                  ? 'Işınlar bu noktada gerçekten kesişmiyor; yalnızca uzantıları kesişiyor. Bu yüzden buraya perde koysan hiçbir şey görünmez. Çizimde kesikli çizgiler tam olarak bunu anlatıyor: oraya ışık hiç gitmiyor.'
                  : 'Işınlar burada gerçekten kesişiyor. Bu noktaya bir perde koysan görüntü perdeye düşer. Gerçek görüntü daima terstir.'}
          </Not>
        </div>

        {eleman.tur !== 'duzlem' ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">Cisim nerede olursa görüntü nasıl olur?</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Cisim konumu</th><th>Görüntü türü</th><th>Yön</th><th>Boyut</th></tr></thead>
                <tbody>
                  {[
                    ['2f\'den uzakta', 2.5], ['tam 2f\'de', 2], ['f ile 2f arasında', 1.5],
                    ['tam f\'de', 1], ['f\'den yakında', 0.5],
                  ].map(([ad, kat]) => {
                    const d = Math.abs(odak) * kat
                    const s = goruntuKonumu({ odak, cisimUzakligi: d })
                    const aktif = Math.abs(cisimUzakligi - d) < Math.abs(odak) * 0.22
                    return (
                      <tr key={ad} style={aktif ? { background: 'rgb(var(--fa-vurgu) / 0.12)' } : undefined}>
                        <td>{ad}</td>
                        <td>{s?.sonsuz ? 'Oluşmaz' : s?.tur === 'gercek' ? 'Gerçek' : 'Sanal'}</td>
                        <td>{s?.sonsuz ? '—' : s?.yon === 'duz' ? 'Düz' : 'Ters'}</td>
                        <td>{s?.sonsuz ? '—' : s?.boyut === 'buyuk' ? 'Büyük' : s?.boyut === 'kucuk' ? 'Küçük' : 'Eşit'}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste etiket="Optik eleman" deger={elemanKod} onChange={setElemanKod}
            secenekler={Object.entries(OPTIK_ELEMANLAR).map(([kod, e]) => ({ kod, ad: e.ad }))} />
          {eleman.tur !== 'duzlem' ? (
            <Kaydirici etiket="Odak uzaklığı |f|" deger={odakBuyuklugu} onChange={setOdakBuyuklugu} alt={3} ust={20} adim={0.5} birim="cm" basamak={1} />
          ) : null}
          <Kaydirici etiket="Cisim uzaklığı d₀" deger={cisimUzakligi} onChange={setCisimUzakligi} alt={2} ust={60} adim={0.5} birim="cm" basamak={1}
            ipucu="Cismi doğrudan sahnede de sürükleyebilirsin." />
          <Kaydirici etiket="Cisim boyu" deger={cisimBoyu} onChange={setCisimBoyu} alt={1} ust={9} adim={0.5} birim="cm" basamak={1} />
        </div>

        {!eleman.toplayici && eleman.tur !== 'duzlem' ? (
          <Not tur="bilgi" baslik="Dağıtıcılar hep aynı görüntüyü verir">
            Tümsek ayna ve kalın kenarlı mercek, cisim nerede olursa olsun <strong>daima düz, küçük ve sanal</strong>
            {' '}görüntü verir. Bu yüzden araç yan aynalarında ve güvenlik aynalarında kullanılırlar: geniş açı
            gösterirler ama cisimleri küçültürler. “Cisimler göründüğünden daha yakındır” uyarısı bu yüzdendir.
          </Not>
        ) : null}

        <Not tur="uyari" baslik="Kesikli çizgilerin anlamı">
          Çizimde <strong>kesikli</strong> çizilen her şey ışının gerçekte gitmediği yoldur — ışın uzantısıdır.
          Sanal görüntü de kesikli çizilir çünkü orada gerçek ışık yoktur. Perdeye düşürebildiğin tek görüntü
          düz çizgilerle çizilen gerçek görüntüdür.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 4: Renk Tezgâhı ═══════════ */

function RenkTezgahi() {
  const [kirmizi, setKirmizi] = useState(true)
  const [yesil, setYesil] = useState(true)
  const [mavi, setMavi] = useState(false)
  const [filtre, setFiltre] = useState('seffaf')
  const [ikinciFiltre, setIkinciFiltre] = useState('seffaf')

  const karisim = isikKarisimi({ kirmizi, yesil, mavi })
  const gelenler = [kirmizi && 'kirmizi', yesil && 'yesil', mavi && 'mavi'].filter(Boolean)
  const ilkGecen = filtredenGecen({ gelenRenkler: gelenler, filtreRengi: filtre })
  const sonGecen = filtredenGecen({ gelenRenkler: ilkGecen.gecen, filtreRengi: ikinciFiltre })

  const FILTRELER = [
    { kod: 'seffaf', ad: 'Filtresiz' }, { kod: 'kirmizi', ad: 'Kırmızı' },
    { kod: 'yesil', ad: 'Yeşil' }, { kod: 'mavi', ad: 'Mavi' },
    { kod: 'sari', ad: 'Sarı' }, { kod: 'macenta', ad: 'Macenta' }, { kod: 'camgobegi', ad: 'Camgöbeği' },
  ]

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 300`} role="img"
            aria-label={`Renk deneyi. Karışım rengi ${karisim.ad}. Filtrelerden sonra ${sonGecen.sonuc.ad}.`}>
            {/* Üç ışık kaynağı */}
            {[
              { renk: '#ff0000', acik: kirmizi, x: 90, ad: 'Kırmızı' },
              { renk: '#00ff00', acik: yesil, x: 90, ad: 'Yeşil' },
              { renk: '#0000ff', acik: mavi, x: 90, ad: 'Mavi' },
            ].map((k, i) => (
              <g key={k.ad}>
                <circle cx={k.x} cy={70 + i * 80} r="20" fill={k.acik ? k.renk : 'rgb(var(--fa-yuzey-3))'}
                  stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5" opacity={k.acik ? 0.9 : 0.4} />
                <text x={k.x - 34} y={75 + i * 80} textAnchor="end" fontSize="11" fill="rgb(var(--fa-metin-2))">{k.ad}</text>
                {k.acik ? (
                  <line x1={k.x + 22} y1={70 + i * 80} x2="230" y2="150" stroke={k.renk} strokeWidth="3" opacity="0.55" />
                ) : null}
              </g>
            ))}

            {/* Karışım noktası */}
            <circle cx="250" cy="150" r="30" fill={karisim.hex} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <text x="250" y="200" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin-2))">
              {karisim.ad}
            </text>

            {/* Filtreler */}
            {[
              { kod: filtre, x: 340, ad: '1. filtre', gecen: ilkGecen },
              { kod: ikinciFiltre, x: 430, ad: '2. filtre', gecen: sonGecen },
            ].map((f) => {
              const filtreRenk = { seffaf: 'none', kirmizi: '#ff0000', yesil: '#00ff00', mavi: '#0000ff', sari: '#ffff00', macenta: '#ff00ff', camgobegi: '#00ffff' }[f.kod]
              return (
                <g key={f.ad}>
                  <rect x={f.x} y="90" width="18" height="120" rx="3"
                    fill={filtreRenk === 'none' ? 'rgb(var(--fa-yuzey-3))' : filtreRenk}
                    opacity={filtreRenk === 'none' ? 0.3 : 0.55}
                    stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5" />
                  <text x={f.x + 9} y="84" textAnchor="middle" fontSize="10" fill="rgb(var(--fa-metin-3))">{f.ad}</text>
                  <line x1={f.x + 18} y1="150" x2={f.x + 88} y2="150" stroke={f.gecen.sonuc.hex} strokeWidth="4"
                    opacity={f.gecen.sonuc.hex === '#000000' ? 0.15 : 0.9} />
                </g>
              )
            })}

            {/* Perde */}
            <rect x="520" y="90" width="60" height="120" rx="4" fill={sonGecen.sonuc.hex}
              stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <text x="550" y="228" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin-2))">
              {sonGecen.sonuc.ad}
            </text>
            <text x="550" y="82" textAnchor="middle" fontSize="10" fill="rgb(var(--fa-metin-3))">perde</text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet">Karışım: {karisim.ad}</span>
            <span className={`fa-rozet ${sonGecen.sonuc.hex === '#000000' ? 'hata' : 'olumlu'}`}>
              Perdede: {sonGecen.sonuc.ad}
            </span>
          </div>
        </div>

        <div className="fa-izgara iki" style={{ marginTop: 12 }}>
          <div className="fa-kart">
            <div className="fa-ust-etiket">Toplamsal karışım (ışık)</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Işıklar</th><th>Sonuç</th></tr></thead>
                <tbody>
                  {[
                    [{ kirmizi: 1, yesil: 1, mavi: 0 }, 'Kırmızı + Yeşil'],
                    [{ kirmizi: 1, yesil: 0, mavi: 1 }, 'Kırmızı + Mavi'],
                    [{ kirmizi: 0, yesil: 1, mavi: 1 }, 'Yeşil + Mavi'],
                    [{ kirmizi: 1, yesil: 1, mavi: 1 }, 'Üçü birden'],
                  ].map(([k, ad]) => {
                    const s = isikKarisimi(k)
                    return (
                      <tr key={ad}>
                        <td>{ad}</td>
                        <td>
                          <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 3, background: s.hex, marginRight: 6, border: '1px solid rgb(var(--fa-cizgi))' }} />
                          {s.ad}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
              Işıkta renkler <strong>eklenir</strong>. Üçü birlikte beyaz verir. Ekranındaki her renk bu üç
              ışığın farklı oranlarından oluşur.
            </p>
          </div>

          <div className="fa-kart">
            <div className="fa-ust-etiket">Çıkarımsal (filtre / boya)</div>
            <p style={{ fontSize: 13, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.6 }}>
              Filtre renk <strong>eklemez</strong>, soğurur. Kendi rengini geçirir, kalanını tutar.
              {ilkGecen.sogurulan.length > 0 ? (
                <> Şu an 1. filtre <strong>{ilkGecen.sogurulan.join(', ')}</strong> ışığını soğuruyor.</>
              ) : null}
              {sonGecen.sonuc.hex === '#000000' && gelenler.length > 0 ? (
                <> Sonuçta perdeye hiçbir ışık ulaşmadı: <strong>siyah</strong>. Siyah bir renk değil,
                {' '}ışığın yokluğudur.</>
              ) : null}
            </p>
            <div className="fa-tablo-sarmal" style={{ marginTop: 10 }}>
              <table className="fa-tablo">
                <thead><tr><th>Aşama</th><th>Geçen renkler</th></tr></thead>
                <tbody>
                  <tr><td>Kaynaktan çıkan</td><td>{gelenler.length ? gelenler.join(', ') : 'hiçbiri'}</td></tr>
                  <tr><td>1. filtreden sonra</td><td>{ilkGecen.gecen.length ? ilkGecen.gecen.join(', ') : 'hiçbiri'}</td></tr>
                  <tr><td>2. filtreden sonra</td><td>{sonGecen.gecen.length ? sonGecen.gecen.join(', ') : 'hiçbiri'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Işık kaynakları</div>
          <Anahtar etiket="Kırmızı ışık" acik={kirmizi} onChange={setKirmizi} />
          <Anahtar etiket="Yeşil ışık" acik={yesil} onChange={setYesil} />
          <Anahtar etiket="Mavi ışık" acik={mavi} onChange={setMavi} />
        </div>

        <div className="fa-kart dar">
          <Liste etiket="1. filtre" deger={filtre} onChange={setFiltre} secenekler={FILTRELER} />
          <Liste etiket="2. filtre" deger={ikinciFiltre} onChange={setIkinciFiltre} secenekler={FILTRELER} />
        </div>

        <Not tur="bilgi" baslik="Kırmızı elma neden kırmızı?">
          Elma kendi ışık üretmez. Beyaz ışık üzerine düştüğünde <strong>kırmızı dışındaki</strong> tüm renkleri
          soğurur, kırmızıyı yansıtır. Bu yüzden kırmızı görünür. Aynı elmayı yalnızca mavi ışıkla aydınlatırsan
          yansıtacak kırmızı ışık bulamaz ve <strong>siyah</strong> görünür. Sadece maviyi açıp kırmızı filtre
          seçerek bunu dene.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'golge-tezgahi', ad: 'Gölge Tezgâhı', Bilesen: GolgeTezgahi },
  { kod: 'kirilma-tezgahi', ad: 'Kırılma ve Tam Yansıma', Bilesen: KirilmaTezgahi },
  { kod: 'mercek-tezgahi', ad: 'Mercek ve Ayna', Bilesen: MercekTezgahi },
  { kod: 'renk-tezgahi', ad: 'Renk Tezgâhı', Bilesen: RenkTezgahi },
]

export default function OptikBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="optik" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
