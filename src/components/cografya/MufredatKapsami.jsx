import { useMemo, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Circle, Layers3, Route } from 'lucide-react'
import { ETKILESIM_REGISTRY } from '../../data/cografya/kapsam.js'
import { MEB_COGRAFYA_2026, MUFREDAT_OZETI } from '../../data/cografya/mufredat2026.js'
import { TYT_KAPSAM_MATRISI } from '../../data/cografya/tyt.js'

const SINIFLAR = [9, 10, 11, 12]

function TytMatrisi({ onSec }) {
  return (
    <div className="ca-tyt-matris">
      <header>
        <div>
          <span>ÖSYM deseni · özgün DRKOÇ içeriği</span>
          <h2>23 konu, tek kanıt dili</h2>
        </div>
        <button type="button" onClick={() => onSec({ bolge: 'kamp', id: null })}>
          5 soruluk kampı aç <ArrowUpRight aria-hidden="true" />
        </button>
      </header>
      <p className="ca-matris-notu">2026 TYT’de coğrafya 5 soruyla temsil edilir. ÖSYM soru metinleri kopyalanmaz; harita, grafik, tablo ve mekânsal çıkarım becerileri özgün sorularla ölçülür.</p>
      <div className="ca-tyt-matris-liste">
        {TYT_KAPSAM_MATRISI.map((konu, index) => (
          <article key={konu.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{konu.baslik}</strong>
              <small>{konu.mebCiktiId} · {konu.kanit}</small>
            </div>
            <em data-oncelik={konu.oncelik}>{konu.oncelik}</em>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function MufredatKapsami({ kapsam, ilerleme, onSec }) {
  const [sinif, setSinif] = useState(9)
  const uniteler = useMemo(
    () => MEB_COGRAFYA_2026.filter((unite) => unite.sinif === sinif),
    [sinif],
  )
  const sinifCiktiSayisi = uniteler.reduce((toplam, unite) => toplam + unite.ciktilar.length, 0)
  const tamamlanan = Object.keys(ilerleme.tamamlananlar).length

  if (kapsam === 'tyt') {
    return (
      <section className="ca-mufredat">
        <div className="ca-sayfa-bas">
          <span>TYT kapsamı</span>
          <h1>Konuyu değil, soru içindeki kanıtı tanı.</h1>
          <p>Her konu bir MEB çıktısına, görsel kanıta ve özgün soru desenine bağlıdır.</p>
        </div>
        <TytMatrisi onSec={onSec} />
      </section>
    )
  }

  return (
    <section className="ca-mufredat">
      <div className="ca-sayfa-bas">
        <span>2026 TYMM · resmî program matrisi</span>
        <h1>73 öğrenme çıktısı, ölçülebilir bir atlas rotası.</h1>
        <p>Her çıktı; görsel temsil, etkileşim, uygulama sorusu ve ölçme kanıtıyla izlenir.</p>
      </div>

      <div className="ca-mufredat-ozet" aria-label="Müfredat özeti">
        <div><strong>{MUFREDAT_OZETI.ciktiSayisi}</strong><span>öğrenme çıktısı</span></div>
        <div><strong>{MUFREDAT_OZETI.uniteSayisi}</strong><span>resmî ünite</span></div>
        <div><strong>{MUFREDAT_OZETI.uygulananCiktiSayisi}</strong><span>çalışan etkileşime bağlı</span></div>
        <div><strong>{tamamlanan}</strong><span>tamamladığın durak</span></div>
      </div>

      <div className="ca-sinif-sekmesi" role="tablist" aria-label="Sınıf düzeyi">
        {SINIFLAR.map((deger) => (
          <button
            type="button"
            role="tab"
            key={deger}
            aria-selected={sinif === deger}
            onClick={() => setSinif(deger)}
          >
            <strong>{deger}. sınıf</strong>
            <small>{MEB_COGRAFYA_2026.filter((u) => u.sinif === deger).reduce((t, u) => t + u.ciktilar.length, 0)} çıktı</small>
          </button>
        ))}
      </div>

      <div className="ca-mufredat-yil-bas">
        <div>
          <span>{sinif}. sınıf</span>
          <h2>7 ortak ünite · {sinifCiktiSayisi} öğrenme çıktısı</h2>
        </div>
        <p><i /> Çalışıyor <i /> Eşlendi</p>
      </div>

      <div className="ca-mufredat-uniteler">
        {uniteler.map((unite, index) => (
          <details key={unite.id} open={index === 0}>
            <summary>
              <span>{String(unite.no).padStart(2, '0')}</span>
              <div>
                <small>{unite.saat} ders saati · {unite.ciktilar.length} çıktı</small>
                <h2>{unite.ad}</h2>
              </div>
              <em>Üniteyi aç</em>
            </summary>
            <div className="ca-unite-kunye">
              <p><strong>Alan becerileri</strong>{unite.alanBecerileri.join(' · ') || 'Programda ayrıca belirtilmemiş'}</p>
              <p><strong>Okuryazarlık</strong>{unite.okuryazarlik.join(' · ') || 'Programda ayrıca belirtilmemiş'}</p>
              <a href={unite.url} target="_blank" rel="noreferrer">Resmî ünite sayfası <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="ca-cikti-listesi">
              {unite.ciktilar.map((ciktiKaydi) => {
                const etkilesim = ETKILESIM_REGISTRY[ciktiKaydi.etkilesimId]
                const bitti = Boolean(ilerleme.tamamlananlar[ciktiKaydi.etkilesimId])
                const calisiyor = ciktiKaydi.durum === 'uygulandi' && etkilesim
                return (
                  <article key={ciktiKaydi.id}>
                    <div className="ca-cikti-durum">
                      {bitti ? <CheckCircle2 aria-hidden="true" /> : <Circle aria-hidden="true" />}
                      <span data-durum={calisiyor ? 'uygulandi' : 'eslendi'}>{calisiyor ? 'Çalışıyor' : 'Eşlendi'}</span>
                    </div>
                    <div className="ca-cikti-icerik">
                      <small>{ciktiKaydi.id}</small>
                      <h3>{ciktiKaydi.baslik}</h3>
                      <div className="ca-cikti-zincir">
                        <span><Layers3 aria-hidden="true" /><b>Görsel</b>{ciktiKaydi.gorselTemsil}</span>
                        <span><Route aria-hidden="true" /><b>Etkileşim</b>{ciktiKaydi.etkilesim}</span>
                      </div>
                      <p><strong>Ölçme kanıtı</strong>{ciktiKaydi.olcmeKaniti}</p>
                    </div>
                    {calisiyor ? (
                      <button type="button" onClick={() => onSec({ bolge: ciktiKaydi.bolge, id: ciktiKaydi.etkilesimId })}>
                        Etkileşimi aç <ArrowUpRight aria-hidden="true" />
                      </button>
                    ) : <span className="ca-cikti-plan">Dikey dilim planında</span>}
                  </article>
                )
              })}
            </div>
          </details>
        ))}
      </div>
      <footer className="ca-mufredat-kaynak">
        Kaynak: T.C. Millî Eğitim Bakanlığı, 2026 Coğrafya Dersi Öğretim Programı · Son doğrulama {MUFREDAT_OZETI.sonDogrulama}
      </footer>
    </section>
  )
}
