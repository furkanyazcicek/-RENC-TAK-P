import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Printer } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button, EmptyState, Tabs } from '../../components/ui'
import { notBul } from '../../content/ingilizce'
import '../../styles/ingilizce-yazdir.css'

/**
 * Yazdırılabilir ders notu / çalışma kâğıdı.
 *
 * Bu sayfa AppShell kullanmaz: yazdırılacak bir belgenin etrafında
 * kenar çubuğu, üst şerit ve alt gezinme olmaz. Ekrandaki kontroller
 * `.en-yazdir-gizle` sınıfıyla işaretlenir ve yazdırırken kaybolur.
 *
 * İKİ SÜRÜM:
 *   Öğrenci  — cevap anahtarı yok, not alanları boş
 *   Öğretmen — cevap anahtarı ve öğretim notu ayrı sayfada
 *
 * PDF üretimi tarayıcının kendi yazdırma penceresinden yapılır
 * (Yazdır → Hedef: PDF olarak kaydet). Böylece metin gerçek metin kalır,
 * Türkçe karakterler eksiksiz çıkar ve ağır bir PDF kütüphanesi
 * eklenmez. Gerekçesi: src/styles/ingilizce-yazdir.css başındaki not.
 */
export default function Yazdir() {
  const { notId } = useParams()
  const not = notBul(notId)
  const [surum, setSurum] = useState('ogrenci')

  useEffect(() => {
    if (not) document.title = `${not.baslik} — DrKoç İngilizce`
    return () => { document.title = 'DrKoç' }
  }, [not])

  if (!not) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <EmptyState
          title="Not bulunamadı"
          description="Bu çalışma kâğıdı kaldırılmış ya da adresi değişmiş olabilir."
          action={<Button as={Link} to="/ingilizce/kutuphane">Kütüphaneye dön</Button>}
        />
      </div>
    )
  }

  const ogretmenMi = surum === 'ogretmen'

  return (
    <div className="min-h-screen bg-paper py-6 px-4 sm:px-6">
      {/* Ekran kontrolleri — yazdırırken kaybolur */}
      <div className="en-yazdir-gizle mx-auto mb-5 flex max-w-[190mm] flex-wrap items-center gap-3">
        <Button as={Link} to="/ingilizce/kutuphane" variant="ghost" size="sm" icon={ArrowLeft}>
          Kütüphane
        </Button>
        <Tabs
          items={[
            { value: 'ogrenci', label: 'Öğrenci sürümü' },
            { value: 'ogretmen', label: 'Öğretmen sürümü' },
          ]}
          value={surum}
          onChange={setSurum}
        />
        <Button onClick={() => window.print()} icon={Printer} className="ml-auto">
          Yazdır / PDF olarak kaydet
        </Button>
      </div>

      <p className="en-yazdir-gizle mx-auto mb-5 max-w-[190mm] rounded-card bg-info-500/[0.06] px-4 py-3 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-info-500/15">
        {ogretmenMi
          ? 'Öğretmen sürümünde cevap anahtarı ve öğretim notu var; ikisi de ayrı bir sayfada başlar, öğrenciye vermeden önce koparabilirsin.'
          : 'Öğrenci sürümünde cevap anahtarı yoktur. "Yazdır" düğmesine bastığında açılan pencerede hedefi "PDF olarak kaydet" seçersen gerçek, metin tabanlı bir PDF elde edersin.'}
      </p>

      {/* Belgenin kendisi */}
      <article className={cn('en-yazdir', ogretmenMi && 'en-yazdir--ogretmen')}>
        <header className="en-yazdir__ust">
          <div>
            <span className="en-yazdir__marka">Dr. Koç · İngilizce</span>
            <h1>{not.baslik}</h1>
            <p className="en-yazdir__altbaslik">{not.altBaslik}</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '9pt', color: 'rgb(var(--c-ink) / 0.55)' }}>
            <p style={{ margin: 0, fontWeight: 700 }}>
              {ogretmenMi ? 'ÖĞRETMEN SÜRÜMÜ' : 'ÖĞRENCİ SÜRÜMÜ'}
            </p>
            <p style={{ margin: '2pt 0 0' }}>Ad soyad: ______________________</p>
            <p style={{ margin: '2pt 0 0' }}>Tarih: ____ / ____ / ________</p>
          </div>
        </header>

        {not.bolumler.map((bolum, i) => (
          <Bolum key={i} bolum={bolum} />
        ))}

        {ogretmenMi && (
          <section className="en-cevap-anahtari">
            <h2>Cevap anahtarı</h2>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '12%' }}>Soru</th>
                  <th style={{ width: '38%' }}>Cevap</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                {not.cevapAnahtari.map((c, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700 }}>{c.soru}</td>
                    <td className="en-ingilizce">{c.cevap}</td>
                    <td>{c.aciklama ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {not.ogretmenNotu && (
              <div className="en-kutu en-kutu--dusunme">
                <span className="en-etiket">Öğretim notu</span>
                <p style={{ margin: 0 }}>{not.ogretmenNotu}</p>
              </div>
            )}
          </section>
        )}

        <footer className="en-altbilgi">
          <span>Dr. Koç · {not.seviye} · {not.baslik}</span>
          <span>drkoc.com.tr</span>
        </footer>
      </article>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Bolum({ bolum }) {
  switch (bolum.tur) {
    case 'hedef':
      return (
        <section>
          <h2>Bu kâğıdın hedefi</h2>
          <ul>
            {bolum.maddeler.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </section>
      )

    case 'ozet':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <ul>{bolum.maddeler.map((m) => <li key={m}>{m}</li>)}</ul>
        </section>
      )

    case 'kural':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <p>{bolum.metin}</p>
          {bolum.maddeler?.length > 0 && (
            <ul>{bolum.maddeler.map((m) => <li key={m} className="en-ingilizce">{m}</li>)}</ul>
          )}
        </section>
      )

    case 'tablo':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <table>
            <thead>
              <tr>{bolum.basliklar.map((b) => <th key={b}>{b}</th>)}</tr>
            </thead>
            <tbody>
              {bolum.satirlar.map((satir, i) => (
                <tr key={i}>
                  {satir.map((h, j) => (
                    <td key={j} className={j === 0 ? 'en-ingilizce' : undefined}>{h}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )

    case 'ornek':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          {bolum.satirlar.map((s) => (
            <p key={s.en}>
              <span className="en-ingilizce">{s.en}</span>
              {s.tr && <span style={{ color: 'rgb(var(--c-ink) / 0.6)' }}> — {s.tr}</span>}
            </p>
          ))}
        </section>
      )

    case 'kelime':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <table>
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Kelime</th>
                <th style={{ width: '30%' }}>Okunuş (IPA)</th>
                <th>Türkçe</th>
              </tr>
            </thead>
            <tbody>
              {bolum.kelimeler.map((k) => (
                <tr key={k.en}>
                  <td className="en-ingilizce">{k.en}</td>
                  <td>{k.ipa}</td>
                  <td>{k.tr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )

    case 'telaffuz':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <ul>{bolum.maddeler.map((m) => <li key={m}>{m}</li>)}</ul>
        </section>
      )

    case 'hata':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          {bolum.satirlar.map((s) => (
            <div key={s.yanlis} className="en-kutu en-kutu--hata">
              <p style={{ margin: 0 }}>
                <strong>Yanlış: </strong><span className="en-ingilizce">{s.yanlis}</span>
              </p>
              <p style={{ margin: '2pt 0 0' }}>
                <strong>Doğru: </strong><span className="en-ingilizce">{s.dogru}</span>
              </p>
              <p style={{ margin: '2pt 0 0', color: 'rgb(var(--c-ink) / 0.65)' }}>{s.neden}</p>
            </div>
          ))}
        </section>
      )

    case 'dusunme':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <div className="en-kutu en-kutu--dusunme">
            <ul style={{ margin: 0 }}>
              {bolum.maddeler.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </section>
      )

    case 'alistirma':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <p style={{ color: 'rgb(var(--c-ink) / 0.65)' }}>{bolum.yonerge}</p>
          {bolum.sorular.map((s) => (
            <div key={s.no} className="en-soru">
              <span className="en-soru__no">{s.no}.</span>
              <span className="en-soru__govde">
                <span className="en-ingilizce">{s.metin}</span>
                {Array.from({ length: s.satir ?? 0 }, (_, i) => (
                  <span key={i} className="en-satir" style={{ display: 'block' }} />
                ))}
              </span>
            </div>
          ))}
        </section>
      )

    case 'notAlani':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          {Array.from({ length: bolum.satir }, (_, i) => (
            <span key={i} className="en-satir" style={{ display: 'block' }} />
          ))}
        </section>
      )

    case 'kontrol':
      return (
        <section>
          <h2>{bolum.baslik}</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {bolum.maddeler.map((m) => (
              <li key={m}>
                <span className="en-kutucuk" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </section>
      )

    default:
      return null
  }
}
