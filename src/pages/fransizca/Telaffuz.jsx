import { useEffect, useRef, useState } from 'react'
import {
  AlertTriangle, CheckCircle2, Mic, Repeat2, Square, Trash2,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Alert, Badge, Button, Tabs } from '../../components/ui'
import SesDugmesi, { SesUyarisi } from '../../components/fransizca/SesDugmesi'
import { useSes } from '../../components/fransizca/useFransizca'
import { SESLER, SHADOWING } from '../../content/fransizca'
import { kayitBaslat, kaydiBirak, kayitDesteginiKontrolEt } from '../../lib/fransizca/kayit'

/**
 * Telaffuz laboratuvarı.
 *
 * Türk öğrencilerin zorlandığı seslerin her biri için: nasıl üretildiği,
 * ağız ve dil konumu, örnek kelimeler, anlamı değiştiren karşıtlık
 * çiftleri (minimal pairs), dinle-seç, dinle-tekrar et, cümle içinde
 * uygulama, doğal konuşma örneği, sık yapılan hata ve öğrencinin kendini
 * değerlendireceği somut ölçüt.
 *
 * KAYIT: öğrenci kendi söyleyişini kaydedip örnek sesle karşılaştırır.
 * Kayıt yalnızca tarayıcının belleğinde kalır; hiçbir sunucuya gönderilmez
 * ve sayfa kapanınca silinir.
 *
 * PUAN YOK — BİLİNÇLİ: konuşma tanıma altyapısı bu üründe yoktur. "%87
 * doğru telaffuz" gibi bir puan üretmek, ölçmediğimiz bir şeyi ölçmüş gibi
 * göstermek olurdu. Bunun yerine öğrenciye kendi kaydını değerlendireceği
 * somut bir ölçüt verilir.
 */
export default function Telaffuz() {
  const ses = useSes()
  const sesHazir = ses?.hazir === true
  const [seciliId, setSeciliId] = useState(SESLER[0].id)
  const [gorunum, setGorunum] = useState('sesler')
  const secili = SESLER.find((s) => s.id === seciliId) ?? SESLER[0]

  return (
    <AppShell
      title="Telaffuz laboratuvarı"
      subtitle="Türkçede olmayan sesler, vurgu, ritim ve kendi kaydın"
    >
      <SesUyarisi durum={ses} />

      <Tabs
        items={[
          { value: 'sesler', label: 'Sesler ve ritim', count: SESLER.length },
          { value: 'shadowing', label: 'Gölge okuma', count: SHADOWING.length },
          { value: 'kayit', label: 'Kendi kaydım' },
        ]}
        value={gorunum}
        onChange={setGorunum}
      />

      {gorunum === 'sesler' && (
        <>
          <nav aria-label="Ses seçimi" className="min-w-0 overflow-x-auto hide-scrollbar">
            <div className="flex min-w-max gap-2">
              {SESLER.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSeciliId(s.id)}
                  aria-pressed={s.id === seciliId}
                  className={cn(
                    'focus-ring flex min-h-[3rem] flex-col items-start rounded-input px-3.5 py-2 text-left ring-1 ring-inset transition',
                    s.id === seciliId
                      ? 'bg-brand-500/[0.12] ring-brand-500/28'
                      : 'bg-surface ring-line hover:bg-brand-500/[0.05]'
                  )}
                >
                  <span className="font-display text-sm font-bold text-ink">{s.ipa}</span>
                  <span className="text-2xs text-ink/50">{s.ad}</span>
                </button>
              ))}
            </div>
          </nav>

          <SesDetayi ses={secili} sesHazir={sesHazir} />
        </>
      )}

      {gorunum === 'shadowing' && <Shadowing sesHazir={sesHazir} />}

      {gorunum === 'kayit' && <KayitStudyosu sesHazir={sesHazir} />}
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */

function SesDetayi({ ses, sesHazir }) {
  return (
    <>
      <section className="rounded-card bg-brand-500/[0.06] p-5 ring-1 ring-inset ring-brand-500/15 sm:p-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="font-display text-3xl font-bold text-ink">{ses.ipa}</h1>
          <Badge tone="brand">{ses.ad}</Badge>
          <Badge tone={ses.zorluk === 'zor' ? 'warning' : 'neutral'} size="sm">
            {ses.zorluk === 'zor' ? 'Zor' : 'Orta'}
          </Badge>
          {!ses.turkcedeVarMi && (
            <Badge tone="accent" size="sm">Türkçede yok</Badge>
          )}
        </div>

        <div className="mt-4 grid gap-3">
          <Kutu baslik="Nasıl üretilir?" metin={ses.nasilUretilir} />
          <Kutu baslik="Ağız ve dil konumu" metin={ses.agizKonumu} />
        </div>
      </section>

      {/* IPA'ya korkutmadan giriş */}
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">Bu köşeli parantezler ne?</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
          <strong className="font-semibold text-ink">/θ/</strong> gibi işaretler IPA denen ses
          alfabesinden gelir. Ezberlemene gerek yok — Fransızca yazıldığı gibi okunmadığı için, bir
          kelimenin nasıl SÖYLENDİĞİNİ göstermenin tek kesin yolu bu. Sözlükte bir kelimenin yanında
          bunları gördüğünde "bu kelime böyle okunuyor" diye oku, yeter.
        </p>
      </section>

      {/* Örnek kelimeler */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Örnek kelimeler — dinle ve tekrar et
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {ses.kelimeler.map((k) => (
            <span key={k} className="inline-flex items-center gap-1.5 rounded-input bg-surface px-3 py-2 ring-1 ring-inset ring-line">
              <span className="text-[0.95rem] font-medium text-ink" lang="fr">{k}</span>
              <SesDugmesi metin={k} hazir={sesHazir} boyut="sm" yavasSecenegi />
            </span>
          ))}
        </div>
      </section>

      {/* Karşıtlık çiftleri */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="font-display text-base font-bold text-ink">{ses.karsitlik.baslik}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Bu çiftler yalnız tek bir sesle ayrılır. Farkı üretemezsen kelime başka bir kelimeye
          dönüşür — bu yüzden en önemli çalışma budur.
        </p>
        <div className="mt-3 grid gap-2.5">
          {ses.karsitlik.ciftler.map((c) => (
            <div key={`${c.a}-${c.b}`} className="rounded-input bg-surface-muted px-4 py-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5">
                  <span className="font-display text-base font-bold text-ink" lang="fr">{c.a}</span>
                  <SesDugmesi metin={c.a.split(' ')[0]} hazir={sesHazir} boyut="sm" />
                </span>
                <span className="text-ink/30" aria-hidden="true">↔</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="font-display text-base font-bold text-ink" lang="fr">{c.b}</span>
                  <SesDugmesi metin={c.b.split(' ')[0]} hazir={sesHazir} boyut="sm" />
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{c.not}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cümle ve doğal konuşma */}
      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
          <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">Cümle içinde</p>
          <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink" lang="fr">{ses.cumle}</p>
          <SesDugmesi metin={ses.cumle} hazir={sesHazir} boyut="sm" yavasSecenegi className="mt-2.5" />
        </div>
        <div className="rounded-card bg-aqua-500/[0.07] p-5 ring-1 ring-inset ring-aqua-500/18">
          <p className="text-2xs font-bold uppercase tracking-[0.12em] text-aqua-700">Doğal konuşmada</p>
          <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink" lang="fr">{ses.dogalKonusma}</p>
          <SesDugmesi metin={ses.dogalKonusma} hazir={sesHazir} boyut="sm" className="mt-2.5" />
        </div>
      </section>

      {/* Hata ve öz değerlendirme */}
      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-card bg-warning-500/[0.07] p-5 ring-1 ring-inset ring-warning-500/20">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <AlertTriangle className="h-4 w-4 text-warning-700" strokeWidth={2.2} aria-hidden="true" />
            Sık yapılan hata
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{ses.sikHata}</p>
        </div>
        <div className="rounded-card bg-success-500/[0.07] p-5 ring-1 ring-inset ring-success-500/20">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <CheckCircle2 className="h-4 w-4 text-success-700" strokeWidth={2.2} aria-hidden="true" />
            Kendini nasıl kontrol edersin?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{ses.olcut}</p>
        </div>
      </section>

      <KayitStudyosu sesHazir={sesHazir} hedefMetin={ses.cumle} baslik={`"${ses.ipa}" sesini kendi sesinle dene`} />
    </>
  )
}

function Kutu({ baslik, metin }) {
  return (
    <div className="rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line">
      <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">{baslik}</p>
      <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/75">{metin}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Shadowing({ sesHazir }) {
  return (
    <>
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">Gölge okuma (shadowing) nedir?</h2>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/70">
          Sesi dinlerken, bir iki kelime geriden aynı anda konuşursun. Amaç kelimeleri değil,
          <strong className="font-semibold text-ink"> ritmi ve tonlamayı</strong> taklit etmektir.
          Telaffuz için tek başına en etkili çalışmadır çünkü ağzını doğru hareketleri yaparken
          eğitir. Günde 3 dakika yeter.
        </p>
        <ol className="mt-3 grid gap-1.5">
          {[
            'Önce bir kez sadece dinle.',
            'İkinci dinlemede sesle birlikte, yarım saniye geriden konuş.',
            'Kelimeleri anlamaya çalışma; sesin inip çıkışını taklit et.',
            'Üçüncü turda kendi kaydını al ve örnekle karşılaştır.',
          ].map((m, i) => (
            <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/70">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/12 text-2xs font-bold text-brand-700">
                {i + 1}
              </span>
              {m}
            </li>
          ))}
        </ol>
      </section>

      {SHADOWING.map((p) => (
        <section key={p.id} className="rounded-card border border-line bg-surface p-5 shadow-card">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base font-bold text-ink">{p.baslik}</h3>
            <Badge tone="brand" size="sm">{p.seviye}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink/55">Odak: {p.odak}</p>
          <div className="mt-3 grid gap-2">
            {p.satirlar.map((s) => (
              <div key={s} className="flex flex-wrap items-center gap-2.5 rounded-input bg-surface-muted px-3.5 py-2.5">
                <p className="min-w-0 flex-1 text-[0.98rem] leading-relaxed text-ink" lang="fr">{s}</p>
                <SesDugmesi metin={s} hazir={sesHazir} boyut="sm" yavasSecenegi />
              </div>
            ))}
          </div>
          <div className="mt-3">
            <SesDugmesi
              metin={p.satirlar.join(' ')}
              hazir={sesHazir}
              etiket="Tamamını dinle"
              yavasSecenegi
            />
          </div>
        </section>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */

function KayitStudyosu({ sesHazir, hedefMetin, baslik = 'Kendi kaydın' }) {
  const [durum, setDurum] = useState('bos')
  const [kayitAdresi, setKayitAdresi] = useState(null)
  const [hata, setHata] = useState(null)
  const oturumRef = useRef(null)
  const desteklenirMi = kayitDesteginiKontrolEt()

  useEffect(() => () => {
    oturumRef.current?.iptal?.()
    kaydiBirak(kayitAdresi)
  }, [kayitAdresi])

  const basla = async () => {
    setHata(null)
    try {
      oturumRef.current = await kayitBaslat()
      setDurum('kaydediyor')
    } catch (e) {
      setHata(e.message)
      setDurum('bos')
    }
  }

  const durdur = async () => {
    try {
      const sonuc = await oturumRef.current.durdur()
      kaydiBirak(kayitAdresi)
      setKayitAdresi(sonuc.url)
      setDurum('hazir')
    } catch {
      setHata('Kayıt tamamlanamadı. Tekrar dener misin?')
      setDurum('bos')
    }
  }

  const sil = () => {
    kaydiBirak(kayitAdresi)
    setKayitAdresi(null)
    setDurum('bos')
  }

  if (!desteklenirMi) {
    return (
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">{baslik}</h2>
        <Alert tone="warning" className="mt-3">
          Bu tarayıcı ses kaydını desteklemiyor. Telaffuz çalışmalarını dinleyip tekrar ederek
          yapabilirsin; kendi kaydını almak için güncel bir tarayıcı gerekiyor.
        </Alert>
      </section>
    )
  }

  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
        <Mic className="h-4 w-4 text-accent-600" strokeWidth={2.2} aria-hidden="true" />
        {baslik}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
        Kendi sesini duymadan hatanı fark edemezsin. Kaydın{' '}
        <strong className="font-semibold text-ink">yalnızca bu tarayıcıda kalır</strong>; hiçbir
        yere gönderilmez, sayfayı kapattığında silinir.
      </p>

      {hedefMetin && (
        <div className="mt-3 flex flex-wrap items-center gap-2.5 rounded-input bg-surface-muted px-4 py-3">
          <p className="min-w-0 flex-1 text-[0.98rem] leading-relaxed text-ink" lang="fr">{hedefMetin}</p>
          <SesDugmesi metin={hedefMetin} hazir={sesHazir} boyut="sm" etiket="Örnek" yavasSecenegi />
        </div>
      )}

      {hata && <Alert tone="warning" className="mt-3">{hata}</Alert>}

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        {durum !== 'kaydediyor' ? (
          <Button onClick={basla} icon={Mic} variant={kayitAdresi ? 'secondary' : 'primary'}>
            {kayitAdresi ? 'Yeniden kaydet' : 'Kaydet'}
          </Button>
        ) : (
          <Button onClick={durdur} icon={Square} variant="danger">
            Durdur
          </Button>
        )}

        {durum === 'kaydediyor' && (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-danger-600" role="status">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-danger-500" aria-hidden="true" />
            Kaydediliyor…
          </span>
        )}

        {kayitAdresi && durum !== 'kaydediyor' && (
          <>
            {/* Tarayıcının kendi oynatıcısı: klavye ve ekran okuyucu desteği hazır gelir. */}
            <audio controls src={kayitAdresi} className="h-10 min-w-[12rem] max-w-full">
              Tarayıcın ses oynatmayı desteklemiyor.
            </audio>
            <Button onClick={sil} variant="ghost" icon={Trash2} size="sm">Sil</Button>
          </>
        )}
      </div>

      {kayitAdresi && (
        <div className="mt-4 rounded-input bg-surface-muted px-4 py-3.5">
          <p className="flex items-center gap-2 text-sm font-bold text-ink">
            <Repeat2 className="h-4 w-4 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
            Kendini değerlendir
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            Önce örneği, sonra kendi kaydını dinle. Sistem sana puan vermiyor — çünkü konuşma tanıma
            altyapısı yok ve olmayan bir ölçümü varmış gibi göstermek istemiyoruz. Şunlara kendin bak:
          </p>
          <ul className="mt-2 grid gap-1.5">
            {[
              'Vurgulu hece aynı yerde mi?',
              'Cümlenin sonu yükseliyor mu, iniyor mu — örnekle aynı mı?',
              'Kelimelerin arasına Türkçedeki gibi eşit boşluk koydun mu?',
              'Kelime sonundaki ünsüzden sonra ünlü ekledin mi (spring → sipring)?',
              'Uzun ünlüleri gerçekten uzun tuttun mu (sheep ≠ ship)?',
            ].map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/45" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hedefMetin && (
        <p className="mt-3 text-xs leading-relaxed text-ink/45">
          İpucu: bir ses kartındaki cümleyi açtığında bu kayıt aracı o cümleyle birlikte gelir ve
          örnek sesle yan yana karşılaştırabilirsin.
        </p>
      )}
    </section>
  )
}
