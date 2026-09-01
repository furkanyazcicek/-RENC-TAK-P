import { useMemo, useState } from 'react'
import { ArrowRight, Check, CircleAlert, FileText, Info, PenLine, Sparkles } from 'lucide-react'
import { cn } from '../../../lib/cn'
import { yazmaGeriBildirim } from '../../../lib/ingilizce/cevap'
import { Button, Textarea } from '../../ui'

/**
 * YazmaGorevi — boş bir metin kutusu DEĞİLDİR.
 *
 * Öğrenci altı aşamadan geçer: görevi anla → örneği incele → kalıpları gör
 * → fikir üret → taslak yaz → geri bildirim al → düzelt → son sürüm.
 * Son ekranda ilk sürümle son sürüm YAN YANA gösterilir; öğrenci kendi
 * ilerlemesini görür.
 *
 * GERİ BİLDİRİM SINIRI — bilinçli: sistem metni yeniden yazmaz ve
 * "8/10" gibi bir puan üretmez. Yalnız SAYILABİLİR göstergeleri raporlar
 * (uzunluk, hedef yapıların kullanımı, bağlaç, tekrar eden kelime, Türkçe
 * düşünme izleri). İçerik kalitesi, özgünlük ve üslup gibi ölçülemeyen
 * başlıklar öğrencinin kendi işaretleyeceği kontrol listesine bırakılır.
 */

const TONLAR = {
  success: { kap: 'bg-success-500/[0.08] ring-success-500/20', Ikon: Check, ikon: 'text-success-700' },
  warning: { kap: 'bg-warning-500/[0.08] ring-warning-500/20', Ikon: CircleAlert, ikon: 'text-warning-700' },
  info: { kap: 'bg-info-500/[0.07] ring-info-500/20', Ikon: Info, ikon: 'text-info-700' },
}

export default function YazmaGorevi({ alistirma, baslangicTaslak = '', onTamamla }) {
  const [adim, setAdim] = useState(0)
  const [taslak, setTaslak] = useState(baslangicTaslak)
  const [ilkSurum, setIlkSurum] = useState('')
  const [sonSurum, setSonSurum] = useState('')
  const [fikirler, setFikirler] = useState('')

  const geriBildirim = useMemo(
    () => (ilkSurum ? yazmaGeriBildirim(ilkSurum, alistirma) : null),
    [ilkSurum, alistirma]
  )
  const sonGeriBildirim = useMemo(
    () => (sonSurum ? yazmaGeriBildirim(sonSurum, alistirma) : null),
    [sonSurum, alistirma]
  )

  const asamalar = alistirma.asamalar ?? []
  const toplamAdim = 5

  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
      <header className="mb-5">
        <p className="flex items-center gap-2 text-2xs font-bold uppercase tracking-[0.14em] text-brand-700">
          <PenLine className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
          Yazma görevi
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">
          {alistirma.gorev}
        </h3>
        <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: toplamAdim }, (_, i) => (
            <span
              key={i}
              className={cn(
                'h-1.5 flex-1 rounded-full transition',
                i <= adim ? 'bg-aurora-line' : 'bg-surface-sunken'
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-ink/50">
          Adım {adim + 1} / {toplamAdim}
        </p>
      </header>

      {/* Adım 0 — Görevi anla + örneği incele + kalıplar */}
      {adim === 0 && (
        <div className="grid gap-4">
          {asamalar[0] && (
            <Kutu baslik={asamalar[0].ad} metin={asamalar[0].aciklama} />
          )}
          {alistirma.ornekMetin && (
            <div className="rounded-input bg-surface-sunken px-4 py-4 ring-1 ring-inset ring-line">
              <p className="flex items-center gap-2 text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Örnek metin
              </p>
              <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-relaxed text-ink" lang="en">
                {alistirma.ornekMetin}
              </p>
            </div>
          )}
          {alistirma.kaliplar?.length > 0 && (
            <div>
              <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">
                Kullanabileceğin kalıplar
              </p>
              <ul className="mt-2 grid gap-1.5">
                {alistirma.kaliplar.map((k) => (
                  <li
                    key={k}
                    className="rounded-md bg-aqua-500/[0.08] px-3 py-2 text-sm text-ink ring-1 ring-inset ring-aqua-500/15"
                    lang="en"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Ileri onClick={() => setAdim(1)}>Fikir üretmeye geç</Ileri>
        </div>
      )}

      {/* Adım 1 — Fikir üret */}
      {adim === 1 && (
        <div className="grid gap-4">
          <Kutu
            baslik="Fikir üret"
            metin={asamalar[2]?.aciklama ?? 'Yazacaklarını önce madde madde not al. Bu notlar değerlendirilmez; yalnız senin için.'}
          />
          <Textarea
            value={fikirler}
            onChange={(e) => setFikirler(e.target.value)}
            rows={5}
            placeholder={'İsim: …\nYaş: …\nŞehir: …\nOkul / ders: …\nBir kişi: …'}
            aria-label="Fikir notların"
          />
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setAdim(0)}>Geri</Button>
            <Ileri onClick={() => setAdim(2)}>Taslağı yazmaya geç</Ileri>
          </div>
        </div>
      )}

      {/* Adım 2 — Taslak */}
      {adim === 2 && (
        <div className="grid gap-4">
          <Kutu
            baslik="Taslağını yaz"
            metin="Şimdilik hataya takılma. Önce hepsini yaz; düzeltmeyi birazdan birlikte yapacağız."
          />
          {fikirler.trim() && (
            <div className="rounded-input bg-surface-sunken px-3.5 py-3">
              <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">Notların</p>
              <p className="mt-1 whitespace-pre-line text-sm text-ink/70">{fikirler}</p>
            </div>
          )}
          <Textarea
            value={taslak}
            onChange={(e) => setTaslak(e.target.value)}
            rows={9}
            lang="en"
            placeholder="Write your text in English…"
            aria-label="Taslak metnin"
          />
          <p className="text-xs text-ink/50 tabular">
            {kelimeSay(taslak)} kelime
            {alistirma.enAzKelime ? ` · hedef en az ${alistirma.enAzKelime}` : ''}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setAdim(1)}>Geri</Button>
            <Ileri
              onClick={() => { setIlkSurum(taslak); setSonSurum(taslak); setAdim(3) }}
              disabled={!taslak.trim()}
            >
              Geri bildirim al
            </Ileri>
          </div>
        </div>
      )}

      {/* Adım 3 — Geri bildirim ve düzeltme */}
      {adim === 3 && geriBildirim && (
        <div className="grid gap-4">
          <Kutu
            baslik="Geri bildirim"
            metin="Aşağıdakiler metninde SAYILABİLEN şeylerdir. Metnini senin yerine düzeltmiyoruz — nereye bakacağını söylüyoruz."
          />
          <Bulgular geriBildirim={geriBildirim} />

          <div>
            <p className="text-sm font-semibold text-ink">Metnini düzelt</p>
            <Textarea
              value={sonSurum}
              onChange={(e) => setSonSurum(e.target.value)}
              rows={9}
              lang="en"
              aria-label="Düzeltilmiş metnin"
              className="mt-2"
            />
            <p className="mt-1 text-xs text-ink/50 tabular">{kelimeSay(sonSurum)} kelime</p>
          </div>

          {alistirma.olcut?.length > 0 && (
            <div className="rounded-input bg-surface-sunken px-4 py-4 ring-1 ring-inset ring-line">
              <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">
                Kendin kontrol et — bunları sistem ölçemez
              </p>
              <ul className="mt-2 grid gap-1.5">
                {alistirma.olcut.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setAdim(2)}>Taslağa dön</Button>
            <Ileri onClick={() => setAdim(4)} disabled={!sonSurum.trim()}>
              Son sürümü karşılaştır
            </Ileri>
          </div>
        </div>
      )}

      {/* Adım 4 — Karşılaştırma */}
      {adim === 4 && (
        <div className="grid gap-4">
          <Kutu
            baslik="İlk sürüm ve son sürüm"
            metin="Aradaki fark senin bu derste öğrendiğin şeydir."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SurumKutusu baslik="İlk sürüm" metin={ilkSurum} sayac={geriBildirim} />
            <SurumKutusu baslik="Son sürüm" metin={sonSurum} sayac={sonGeriBildirim} vurgulu />
          </div>
          {sonGeriBildirim && <Bulgular geriBildirim={sonGeriBildirim} baslik="Son sürümün göstergeleri" />}
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setAdim(3)}>Düzeltmeye dön</Button>
            <Button
              icon={Sparkles}
              onClick={() => onTamamla?.({
                ilkSurum,
                sonSurum,
                gelisme: (sonGeriBildirim?.bulgular.filter((b) => b.tone === 'success').length ?? 0)
                  - (geriBildirim?.bulgular.filter((b) => b.tone === 'success').length ?? 0),
              })}
            >
              Görevi tamamla
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Kutu({ baslik, metin }) {
  return (
    <div className="rounded-input bg-brand-500/[0.06] px-4 py-3 ring-1 ring-inset ring-brand-500/12">
      <p className="text-sm font-bold text-ink">{baslik}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/70">{metin}</p>
    </div>
  )
}

function Ileri({ children, ...props }) {
  return <Button iconRight={ArrowRight} {...props}>{children}</Button>
}

function Bulgular({ geriBildirim, baslik }) {
  return (
    <div className="grid gap-2">
      {baslik && (
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">{baslik}</p>
      )}
      {geriBildirim.bulgular.map((b, i) => {
        const ton = TONLAR[b.tone] ?? TONLAR.info
        const { Ikon } = ton
        return (
          <div key={i} className={cn('flex items-start gap-3 rounded-input px-4 py-3 ring-1 ring-inset', ton.kap)}>
            <Ikon className={cn('mt-0.5 h-4 w-4 shrink-0', ton.ikon)} strokeWidth={2.4} aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{b.baslik}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/70">{b.metin}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function SurumKutusu({ baslik, metin, sayac, vurgulu = false }) {
  return (
    <div
      className={cn(
        'rounded-input px-4 py-3 ring-1 ring-inset',
        vurgulu ? 'bg-success-500/[0.06] ring-success-500/20' : 'bg-surface-sunken ring-line'
      )}
    >
      <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">{baslik}</p>
      <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink" lang="en">{metin}</p>
      {sayac && (
        <p className="mt-2 text-xs text-ink/50 tabular">
          {sayac.kelimeSayisi} kelime · {sayac.cumleSayisi} cümle
        </p>
      )}
    </div>
  )
}

function kelimeSay(metin) {
  return String(metin ?? '').trim() ? String(metin).trim().split(/\s+/).length : 0
}
