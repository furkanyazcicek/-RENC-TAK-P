# Dr. Koç — Aurora Gradient Design System

Bu doküman, arayüzün **neden** böyle göründüğünü ve yeni bir ekran eklerken
neyi nereden çağıracağınızı anlatır. Amaç: her sayfanın kendi stilini
uydurması yerine tek bir görsel dili paylaşması.

Görsel kimlik:
**Aurora Gradient × Premium SaaS × Subtle Glass × Bento**

> Kısa kural: **Renk, ölçü veya gölge değeri yazmadan önce burada karşılığı
> var mı diye bakın.** Yoksa token ekleyin, satır içine hex yazmayın.

---

## 1) Katmanlar

```
tailwind.config.js      → token tanımları (renk, tipografi, gölge, animasyon)
src/index.css           → CSS değişkenleri + temel stiller + .card/.input-base gibi kalıplar
src/lib/navigation.js   → gezinme haritası (sidebar, alt çubuk, profil menüsü tek kaynaktan)
src/lib/chartTheme.js   → grafik paleti ve Recharts ortak ayarları
src/components/ui/*     → yeniden kullanılabilir bileşenler (Button, Card, Modal…)
src/components/*        → uygulamaya özel bileşenler (bunlar ui/ üzerine kurulur)
src/pages/*             → ekranlar (bunlar AppShell + ui/ üzerine kurulur)
```

Bir değişikliğin doğru yeri hep en üst katmandır: bir rengi düzeltmek
gerekiyorsa `src/index.css` içindeki değişken, bir düğmenin görünümünü
değiştirmek gerekiyorsa `ui/Button.jsx`.

---

## 2) Renk

Renkler `src/index.css` içinde **RGB kanal listesi** olarak tutulur
(`--c-brand-500: 139 92 246;`). Bu biçim sayesinde Tailwind saydamlık
varyantlarını üretebilir: `text-ink/60`, `bg-brand-500/10`.

### Semantik roller

| Grup | Rol | Kullanım |
|---|---|---|
| `brand-50 … 950` | **mor / violet** | Birincil aksiyon, aktif durum, vurgu |
| `info-*` | **mavi** | Bilgi |
| `aqua-*` | **camgöbeği** | İlerleme, tamamlanma |
| `accent-*` | **pembe** | Öne çıkarma, ödül, rozet |
| `success` / `warning` / `danger` | — | Yalnızca **durum** bildirimi |
| `ink` | Metin | Hiyerarşi saydamlıkla kurulur: `text-ink` → `/70` → `/60` |
| `paper` | Sayfa zemini | |
| `surface`, `surface-muted`, `surface-sunken` | Kart / ikincil / gömük yüzeyler | |
| `line`, `line-strong` | Kenarlıklar | |
| `aurora-purple/violet/blue/cyan/pink` | Yalnızca **dekoratif** gradient/blob durakları | |

Eski `good` / `warn` / `bad` isimleri `success-500` / `warning-500` /
`danger-500` takma adı olarak korunuyor, mevcut kodlar kırılmaz.

**Metin rengi kuralı:** metin her zaman ink tonlarını giyer; renk, metnin
yanındaki nokta/rozet/ikon tarafından taşınır. Böylece kontrast garanti olur.

**Saydam renk kuralı:** dolu pastel zemin (`bg-brand-50`) yerine saydam
renk + ince halka (`bg-brand-500/10 ring-1 ring-inset ring-brand-500/15`)
tercih edilir. Saydam yüzey, altındaki Aurora zeminini geçirdiği için
sayfayla bütünleşir ve koyu temada da kendiliğinden doğru davranır.

### Koyu tema
`.dark` seçicisi altında tüm `--c-*` değerleri yeniden tanımlıdır; hiçbir
bileşen dosyasına dokunmak gerekmez. Devreye almak için `<html>` üzerine
`dark` sınıfı eklemek yeterli. (Şu an arayüzde bir tema anahtarı yok —
altyapı hazır, tetikleyici eklenmedi.)

---

## 3) Gradient — nerede kullanılır, nerede kullanılmaz

Gradient bu sistemde bir **vurgu aracıdır**. Her yere konursa hiçbir yeri
vurgulamaz. Yalnızca şu yerlerde görünür:

- Hero başlığının vurgu kelimesi (`.text-aurora`)
- Birincil CTA / `Button variant="primary"`
- Aktif gezinme öğesi (yumuşak `bg-aurora-soft`)
- İlerleme göstergeleri (`ProgressBar tone="aurora"`)
- Kart üstündeki ince şerit (`.top-aurora-line`, `bg-aurora-line`)
- Sayfa başına **en fazla bir** dolu gradient panel (`DashboardHero`,
  landing kapanış CTA'sı)

Kullanılmaz: gövde metni, form alanı, tablo satırı, ikincil düğme,
rozetlerin çoğu.

**Kontrast notu:** `--g-aurora` durakları (#7C3AED → #5B4BE6 → #2563EB)
beyaz metinle en az 4.5:1 verecek şekilde seçildi. Parlak cyan yalnızca
dekoratif katmanlarda (blob, glow) yer alır — üzerine asla metin konmaz.

---

## 4) Aurora arka planı

`AuroraBackground` bileşeni sayfaların arkasındaki ışık atmosferini basar.

```jsx
<AuroraBackground />                 // tüm sayfa (fixed, çok hafif)
<AuroraBackground variant="hero" />  // hero bölümü (absolute, belirgin)
<AuroraBackground variant="panel" /> // tek bir kartın içi
```

Üç kural:

1. Katman `z-0`, içerik `relative z-10`. Negatif z-index'e alınırsa üst
   öğenin blok arka planı blob'ları örter (boyama sırası).
2. Sarmalayıcıda `overflow-hidden` — blob'lar ekran dışına taşacak kadar
   büyüktür, kırpılmazsa yatay kaydırma doğar.
3. Yalnızca `transform` ve `opacity` animasyonu; blur statiktir. Mobilde
   (`max-width: 640px`) animasyon tamamen kapalı, blur düşürülmüş.

Süreler 28–40sn. "Arka planda bir ışık atmosferi var" hissi hedeflenir,
"web sitesi neonla yanıyor" hissi değil.

---

## 5) Tipografi

- **Inter Tight** (`font-display`) → başlıklar, metrik değerleri
- **Inter** (`font-body`) → gövde metni, form alanları
- Sayısal veriler `tabular` sınıfıyla hizalanır (tablolar otomatik alır)
- `text-2xs` (11px) → etiket/üst başlık; `text-xs` → yardımcı metin

Gradient metin yalnızca hero başlıkları ve `StatCounter` rakamlarında
kullanılır (`.text-aurora`). Okunabilirliği bozacak yerde kullanılmaz.

---

## 6) Ölçü sistemi

| Token | Değer | Nerede |
|---|---|---|
| `rounded-btn` | 12px | Düğmeler |
| `rounded-input` | 14px | Form alanları, küçük kutular |
| `rounded-card` | 20px | Kartlar |
| `rounded-panel` | 28px | Büyük paneller, modal, hero kutuları |

Gölgeler katmanlı ve yumuşaktır (`shadow-card` → `shadow-card-hover` →
`shadow-elevated` → `shadow-overlay`). Ağır gölge yok: kart havada uçmaz,
yüzeyin üzerinde durur. `shadow-aurora` yalnızca birincil aksiyon ve
gradient panellerde.

Animasyon süreleri 150–300ms; yalnızca Aurora arka planı daha yavaştır.

---

## 7) Bileşenler

Tek noktadan içe aktarın:

```jsx
import { Button, Card, GlassCard, Field, Input, Badge, EmptyState } from '../components/ui'
```

| Bileşen | Ne zaman |
|---|---|
| `AppShell` | **Her iç sayfa.** Aurora zemin + sidebar + üst şerit + mobil alt gezinme + genişlik + yüklenme durumunu tek yerde çözer |
| `AuroraBackground` | Sayfa/hero/panel arka plan ışığı |
| `Sidebar` / `MobileNav` | Gezinme (lg+ sidebar, altında alt çubuk + çekmece). İkisi de `lib/navigation.js`'ten beslenir |
| `PageSection` | Sayfa içi başlıklı bölüm |
| `Card` + `CardHeader/Body/Footer` | Her panel, form, liste kutusu |
| `GlassCard` / `GradientCard` / `OutlineCard` / `HighlightCard` | Kart hiyerarşisinin diğer kademeleri (aşağıya bakın) |
| `Button` / `IconButton` | Tüm aksiyonlar. `variant`: primary / secondary / glass / subtle / ghost / danger / success / link |
| `Field` + `Input` / `Textarea` / `Select` | Tüm form alanları (etiket, ipucu, hata tek düzende) |
| `Badge` | Durum ve etiketler. `tone="aurora"` yalnızca Premium/Yeni gibi tekil vurgular için |
| `StatusBadge` | Ödev/soru durumları (renk eşlemesi tek yerde) |
| `Alert` | Form geri bildirimi, bilgilendirme |
| `useToast()` | Kısa süreli, engellemeyen bildirim (`alert()` yerine) |
| `Modal` | Diyaloglar. Escape, odak tuzağı ve mobilde alttan açılma hazır |
| `Table` + `THead/TBody/TH/TR/TD` | Tablolar (yatay kaydırma ve başlık stili dahil) |
| `EmptyState` | **"Henüz veri yok" durumları** — düz gri yazı yerine bunu kullanın |
| `Skeleton` ailesi | Veri gelirken iskelet gösterimi |
| `Spinner` / `PageLoader` | Yükleniyor göstergeleri |
| `StatCard` / `MetricTile` | Panel üstü metrik kartları |
| `Tabs` | Sekme/filtre şeritleri |
| `Avatar` | İsimden baş harf + sabit Aurora gradienti üretir |
| `ProgressBar` | Tamamlama/hedef oranları |
| `Logo` | Marka işareti + kelime markası |

### Kart hiyerarşisi — her kartı cam yapmayın

| Varyant | Görünüm | Ne zaman |
|---|---|---|
| `default` | Düz beyaz yüzey | **Varsayılan.** Kartların çoğu bu olmalı |
| `glass` | Yarı saydam + blur | Aurora zeminin göründüğü yerlerde, sayfa başına birkaç kart |
| `gradient` | Dolu Aurora gradient | Sayfa başına **en fazla bir** kart |
| `outline` | Yalnız çizgi + gömük zemin | İkincil/yardımcı içerik |
| `highlight` | Beyaz yüzey + gradient kenarlık | Dikkat çeken ama gradient kadar baskın olmayan kart |

Hiyerarşi buradan doğar. Hepsi cam olursa hiçbiri öne çıkmaz.

### Yeni bir sayfa iskeleti

```jsx
import { AppShell, PageSection, Card, CardBody, EmptyState } from '../components/ui'

export default function Ornek() {
  return (
    <AppShell title="Başlık" subtitle="Alt başlık" loading={loading}>
      <PageSection title="Bölüm" description="Kısa açıklama">
        {items.length ? <Card><CardBody>…</CardBody></Card>
                      : <EmptyState icon={Inbox} title="Henüz kayıt yok" />}
      </PageSection>
    </AppShell>
  )
}
```

---

## 8) Grafikler

Tüm Recharts grafikleri `src/lib/chartTheme.js` dosyasından beslenir.
Grafik dosyalarına **hex kodu yazmayın**:

```jsx
import { gridProps, xAxisProps, yAxisProps, tooltipProps, barProps, seriesColor } from '../lib/chartTheme'
```

Aurora ailesinin kendisi seri paleti olarak kullanılamaz — komşu duraklar
birbirine çok yakındır. Seri paleti Aurora'nın uçlarından örneklenir ve
araya iki bağımsız hue girer:

```
mor → camgöbeği → pembe → mavi → yeşil → amber
```

Kurallar:
- Sıra sabittir ve **döngüsel olarak tekrar edilmez** — 7+ seri gerekiyorsa
  "Diğer" altında toplayın ya da grafiği ikiye bölün.
- Tek grafikte iki farklı Y ekseni **kullanılmaz**.
- Renk seriye (derse) bağlıdır, sıralamaya değil — filtre değişince
  kalan serilerin rengi değişmemeli (`colorForKey` bunu sağlar).
- Durum renkleri (`STATUS`) seri rengi olarak kullanılmaz.

---

## 9) Erişilebilirlik ve mobil

Altyapıya gömülü olanlar — ayrıca uğraşmanız gerekmez:

- Klavye odağı her yerde görünür (`:focus-visible` global halka)
- `prefers-reduced-motion` açıksa animasyonlar kapanır (Aurora dahil)
- İkincil metinler en az `text-ink/60` — beyaz üzerinde ~4.8:1
- Form alanları mobilde 16px'ten küçük olmadığı için iOS otomatik zoom yapmaz
- `Modal` odağı içeride tutar, Escape ile kapanır, mobilde alttan açılır
- Masaüstünde sidebar, mobilde alt gezinme çubuğu + çekmece
- `pt-safe-top` / `pb-safe-bottom` çentikli ekranlarda içeriği korur
- İkon-only düğmelerde `label` zorunlu (`IconButton`), ekran okuyucuya isim verir

### Yatay taşma tuzağı

Kartlar `min-w-0` taşır. Sebebi: bir ızgara/esnek öğesinin varsayılan asgari
genişliği içeriğinin min-content genişliğidir; içinde `min-w-[560px]` bir
tablo olan kart, sütununu zorla genişletip sayfayı yatay kaydırır ve
`overflow-x-auto` devreye giremez. Tablo/grafik içeren **her** ızgara
öğesinde bu bildirim olmalı.

---

## 10) Ne yapmayın

- Satır içi hex renk (`#7C3AED`) — token kullanın
- Sayfa iskeletini elle yazmak (`min-h-screen bg-paper` + Navbar) — `AppShell` var
- Boş liste için `<p className="text-ink/60">Kayıt yok</p>` — `EmptyState` var
- Yeni gölge/köşe değeri uydurmak — `shadow-card`, `rounded-card` var
- Gradienti her elemente uygulamak (bkz. bölüm 3)
- Her kartı cam yapmak (bkz. kart hiyerarşisi)
- Durum renklerini seri rengi olarak kullanmak
- `alert()` ile geri bildirim vermek — `useToast()` var
- Sayfa iskeletine `transform` / `filter` uygulamak: içindeki
  `position: fixed` öğeler (Modal, Toast, ImageLightbox) ekrana değil o
  öğeye göre konumlanır ve erişilemez hâle gelir
