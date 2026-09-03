# DRKOÇ Tasarım Sistemi

Bu doküman, DRKOÇ ana ürününün ve bütün etkileşimli eğitim atlaslarının
uygulamaya dönük görsel standardıdır. Arayüzün **neden** böyle göründüğünü,
hangi değerin nereden çağrılacağını ve ortak dilin derslere göre nasıl
uyarlanacağını anlatır.

Ürün yönü:
**Premium eğitim ortamı × sakin kesinlik × öğrenme nesnesi merkezli etkileşim**

Aurora gradyanı mevcut marka mirasıdır; kimliğin tamamı değildir. Ana üründe
ölçülü vurgu olarak kullanılır. Atlaslarda konuya özgü semantik renk ve sahne
dili kullanılabilir. Ürün ailesi; tipografi, boşluk ritmi, kontrol kalitesi,
durum davranışı, erişilebilirlik ve görsel ölçülülük üzerinden birleşir.

DRKOÇ zeki, sofistike, modern, sakin, tutarlı ve yüksek etkileşimli
hissetmelidir. Genel SaaS gösterge paneli, yönetim paneli, Bootstrap şablonu,
rastgele kart koleksiyonu veya jenerik yapay zekâ sitesi gibi görünmemelidir.

> Kısa kural: **Renk, ölçü veya gölge değeri yazmadan önce burada karşılığı
> var mı diye bakın.** Yoksa token ekleyin, satır içine hex yazmayın.

> Atlas kuralı: **Öğrenme nesnesi kahramandır.** Arayüz, öğrencinin anlaması
> gereken nesneye, sürece veya ilişkiye alan açar; onunla yarışmaz.

---

## 1) Katmanlar

```
tailwind.config.js      → token tanımları (renk, tipografi, gölge, animasyon)
src/index.css           → CSS değişkenleri + temel stiller + .card/.input-base gibi kalıplar
src/lib/navigation.js   → gezinme haritası (sidebar, alt çubuk, profil menüsü tek kaynaktan)
src/lib/chartTheme.js   → grafik paleti ve Recharts ortak ayarları
src/components/ui/*     → yeniden kullanılabilir ürün bileşenleri (Button, Card, Modal…)
src/components/*        → uygulamaya özel bileşenler (bunlar ui/ üzerine kurulur)
src/pages/*             → standart ekranlar AppShell + ui/; atlaslar içerik odaklı özel kabuk kullanabilir
src/styles/*-atlasi.css → konuya özgü ve kök sınıf altında kapsamlı atlas sahneleri
src/styles/atlas-ortak.css → yalnızca gerçekten ortak olan atlas kabuk davranışı
```

Bir değişikliğin doğru yeri mümkün olan en ortak katmandır: bir rengi düzeltmek
gerekiyorsa `src/index.css` içindeki değişken, bir düğmenin görünümünü
değiştirmek gerekiyorsa `ui/Button.jsx`.

Atlaslarda konu semantiğini genel ürün belirtecine zorla taşıma. Örneğin vektör,
enerji, molekül türü veya tarihsel katman rengi yalnız o atlasın kapsamlı
değişkeni olabilir. Ortak kontrol davranışı ise atlas dosyaları arasında kopya
değerlerle değil, ortak kabuk veya aynı rol ölçeğiyle kurulmalıdır.

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
| `AppShell` | **Standart ürün iç sayfaları.** Aurora zemin + sidebar + üst şerit + mobil alt gezinme + genişlik + yüklenme durumunu tek yerde çözer. Tam ekran/deneysel atlas kabuğu için zorunlu değildir |
| `AuroraBackground` | Sayfa/hero/panel arka plan ışığı |
| `Sidebar` / `MobileNav` | Gezinme (lg+ sidebar, altında alt çubuk + çekmece). İkisi de `lib/navigation.js`'ten beslenir |
| `PageSection` | Sayfa içi başlıklı bölüm |
| `Card` + `CardHeader/Body/Footer` | Gerçekten bağımsız yüzey isteyen panel, form veya liste grubu; her içerik parçasının varsayılanı değildir |
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

### Yüzey ve kart hiyerarşisi

Kart varsayılan düzen aracı değildir. Önce boşluk, yakınlık, başlık, hizalama ve
tipografiyle grupla. İçerik bağımsız bir zemin, sınır, seçilebilir bütün veya
katman gerektiriyorsa kart kullan. Kart içinde kart kullanma; iç bölümleri
ayraç, boşluk veya zemin tonu ile ayır.

| Varyant | Görünüm | Ne zaman |
|---|---|---|
| `default` | Düz beyaz yüzey | **Varsayılan.** Kartların çoğu bu olmalı |
| `glass` | Yarı saydam + blur | Aurora zeminin göründüğü yerlerde, sayfa başına birkaç kart |
| `gradient` | Dolu Aurora gradient | Sayfa başına **en fazla bir** kart |
| `outline` | Yalnız çizgi + gömük zemin | İkincil/yardımcı içerik |
| `highlight` | Beyaz yüzey + gradient kenarlık | Dikkat çeken ama gradient kadar baskın olmayan kart |

Hiyerarşi buradan doğar. Hepsi cam olursa hiçbiri öne çıkmaz.

### Yeni bir standart ürün sayfası iskeleti

Bu iskelet panel, kütüphane ve form gibi standart ürün sayfaları içindir.
Atlas, harita, simülasyon, zaman çizelgesi veya 3B sahneye otomatik uygulanmaz.

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

Altyapıda karşılığı bulunanlar — yeni veya özel bileşende çalıştığını yine de doğrulayın:

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
- Her bilgi grubunu karta dönüştürmek veya kart içinde kart kullanmak
- Öğrenme aracını genel bir SaaS paneli iskeletine zorlamak
- Bütün atlaslara sol kenar çubuğu + merkez + sağ panel düzeni dayatmak
- Kontrol panellerini öğrenme nesnesinden daha büyük veya daha yüksek kontrastlı yapmak
- Gereksiz dekoratif blob, blur, gölge, kenarlık ve yuvarlak kap yığmak
- Konuya özgü deney dilini yalnız renk değiştirerek üretmeye çalışmak
- Durum renklerini seri rengi olarak kullanmak
- `alert()` ile geri bildirim vermek — `useToast()` var
- Sayfa iskeletine `transform` / `filter` uygulamak: içindeki
  `position: fixed` öğeler (Modal, Toast, ImageLightbox) ekrana değil o
  öğeye göre konumlanır ve erişilemez hâle gelir

---

## 11) Hiyerarşi standardı

Her önemli ekran veya atlas durumu için dört seviye belirleyin:

| Seviye | Rol | Tipik örnek |
|---|---|---|
| **Birincil** | İlk fark edilecek ve üzerinde çalışılacak şey | Öğrenme nesnesi, ana görev, kritik sonuç |
| **İkincil** | Birincil işi değiştiren veya açıklayan şey | Temel kontrol, ölçüm, kısa bağlamsal açıklama |
| **Üçüncül** | Gerektiğinde çağrılan ayrıntı | Kaynak, gelişmiş ayar, karşılaştırma, açıklama paneli |
| **Yardımcı** | Sistem ve gezinme işlevi | Geri dön, tema, sıfırla, paylaş, yardım |

Hiyerarşiyi şu sırayla çözün:

1. Konum ve kullanılan alan.
2. Ölçek ve tipografi.
3. Boşluk, yakınlık ve hizalama.
4. Kontrast ve renk.
5. Gerekliyse yüzey, kenarlık veya gölge.

Birincil içerik küçük bir kartta kalırken yardımcı kontroller ekranı çevreliyorsa
hiyerarşi ters kurulmuştur. Çok sayıda eşit büyüklükte kutu, öğrencinin neye
bakacağını seçmesini zorlaştırır.

## 12) Boşluk, yoğunluk ve oran

Tailwind'in 4 px tabanlı ölçeğini kullanın. Yeni keyfî değer üretmeden önce
mevcut ölçeğin optik olarak yeterli olup olmadığını kontrol edin.

- Aynı mikro grubun öğeleri çoğunlukla 4–8 px aralıkla bağlanır.
- Bir kontrol grubu veya kart içi bölümler çoğunlukla 12–20 px aralıkla ayrılır.
- Bağımsız sayfa bölümleri çoğunlukla 24–48 px nefes ister.
- Başlık ile açıklaması, açıklama ile sonraki bölüm arasından daha yakın olmalıdır.
- Değişen sayılar `tabular-nums` kullanır; güncellenirken yerleşim zıplamaz.
- Türkçe başlık ve düğmeler için sabit tek satır yüksekliği varsaymayın. Metin
  sarılmalı, kısalmalı veya dar ekranda simge + erişilebilir ada dönüşmelidir.

Atlaslarda oranı öğrenme nesnesinden başlatın. Kontroller genişliğin çoğunu
kaplıyorsa kalıcı görünmeleri gerekip gerekmediğini yeniden değerlendirin.

## 13) Kontroller, paneller ve gezinme

### Kontroller

- Temel dokunma alanı en az 40×40 px, dokunma ağırlıklı ana eylemlerde tercihen
  44×44 px'tir.
- Simge düğmesi görünür ipucu veya erişilebilir ad taşır.
- Birincil eylem sayısı aynı bağlamda mümkünse birdir. İkincil eylemler sakin
  yüzey veya hayalet varyant kullanır.
- Seçim denetimi seçili durumunu yalnız renkle değil dolgu, işaret, konum veya
  metinle de bildirir.
- Sürgü, zaman çizelgesi ve sürükleme alanı anlık değeri ve sınırları gösterir.
- Tehlikeli sıfırlama/silme işlemi yanlış dokunmaya karşı korunur; ancak sürekli
  kırmızı bir görsel alarm olarak sahneyi domine etmez.

### Paneller

Panel; içerik gerçekten ayrı bir çalışma alanı, denetçi, seçim listesi veya
geçici bağlam gerektiriyorsa kullanılır. Her olası ayarı sürekli açık tutmayın.
Bağlamsal denetçi, açılır ayrıntı, çekmece, alt sayfa ve aşamalı açılımı
değerlendirin.

### Gezinme

- Standart ürün sayfaları `AppShell` ve `src/lib/navigation.js` kaynağını kullanır.
- Atlas içinde gezinme, konu haritası, bölüm listesi, rota, arama veya zaman
  çizelgesi olabilir. İçeriğin yapısını yansıtmayan genel menü eklemeyin.
- Öğrenci atlasın içinde sıkışmamalı; platforma veya kütüphaneye dönüş her cihazda
  erişilebilir olmalıdır.
- Tarayıcı geri/ileri davranışı ve paylaşılabilir URL parametreleri görünür atlas
  durumuyla senkron kalmalıdır.

## 14) Etkileşim durumları

İlgili durumları tasarım, uygulama ve QA sırasında açıkça kontrol edin:

| Durum | Görsel/işitsel beklenti |
|---|---|
| Hover | Tıklanabilirliği destekler; tek bilgi kanalı değildir |
| Klavye odağı | Yüksek görünürlükte, kesilmeyen odak halkası |
| Basılı/aktif | Kısa dokunsal geri bildirim; yerleşim sıçraması yok |
| Seçili | Kalıcı ve renk dışı bir işaret |
| Yükleniyor | Ne hazırlandığını söyleyen sakin durum; sahte ilerleme yok |
| Devre dışı | Neden kullanılamadığını bağlam gerektiğinde açıklar |
| Hata | Sorunu, etkisini ve sonraki adımı Türkçe anlatır |
| Boş | Kullanıcıyı anlamlı ilk eyleme yönlendirir |
| Sürükleniyor | Tutulan nesne, hedef ve geçersiz alan okunur |
| Yakınlaştırılıyor | Ölçek/konum kaybını önleyen bağlam korunur |
| Oynatılıyor | Oynat/duraklat, zaman, hız ve bitiş durumu görünür |

Animasyon 150–300 ms kontrol geçişleri için mevcut ölçeği kullanır. Bilimsel veya
mekânsal süreç animasyonu gerçek kavram süresiyle birebir olmak zorunda değildir;
ölçeklendirme yapılıyorsa öğrenciye yanlış zaman algısı vermemelidir.

## 15) Atlas deney türü seçimi

Atlas tasarımından önce ders, düzey, öğrenme hedefi, birincil öğrenme nesnesi,
ana kullanıcı eylemi, neden-sonuç, mekânsal gereksinim, bilgi yoğunluğu ve keşif
modeli belirlenir.

| Öğrenme ihtiyacı | Uygun başlangıç düzenleri | Kaçınılacak refleks |
|---|---|---|
| Parametre → sonuç | Simülasyon çalışma alanı, alt/bağlamsal kontroller | Her değişkeni kalıcı yan panele yığmak |
| Mekânsal konum/katman | Tam ekran harita veya 3B sahne, açılır katmanlar | Haritayı küçük karta hapsetmek |
| Zaman içinde değişim | Zaman çizelgesi + sahne/harita, oynatma | Olayları yalnız kart listesi yapmak |
| İki model arasındaki fark | Bölünmüş karşılaştırma, senkron kontroller | Ayrı sayfalarda hafızaya dayalı karşılaştırma |
| Yapı–işlev ilişkisi | Katmanlı diyagram, mercek, kesit | Uzun statik açıklama |
| Matematiksel ilişki | Grafik + ifade + doğrudan manipülasyon | Sonucu yalnız sayı olarak göstermek |
| İnşa ve kısıt | Geniş tuval, bağlamsal araçlar, ölçüm | Sabit form ve “hesapla” düğmesine indirgemek |
| Yanlış kavrama düzeltme | Tahmin → dene → gözle → açıkla → aktar | İlk anda bütün cevabı göstermek |

Bu tablo başlangıç noktasıdır. İçerik başka bir deney modeli gerektiriyorsa onu
seçin. Ürün tutarlılığı, bütün atlasların aynı kabuğa sahip olması demek değildir.

## 16) Derslere göre uyarlama

Konuya özgü tasarım, dekoratif tema değil öğrenme semantiğidir:

- **Fizik:** deney, hareket, kuvvet, dalga, alan ve ölçüm. Vektör, enerji ve
  ölçüm renkleri anlam taşır; sahneyle grafik aynı zamanı paylaşır.
- **Kimya:** atom, molekül, bağ, orbital, tanecik ve tepkime. Makro gözlem ile
  mikro model arasındaki geçiş açık olmalıdır.
- **Biyoloji:** hücre, canlı, sistem, süreç ve ölçek. Yapı, işlev ve sistemler
  arası etkileşim birlikte görünür.
- **Anatomi:** organ, komşuluk, yön, katman, kesit ve 3B mekân. İzole etme,
  döndürme ve görünürlük kontrolleri sahneye yakın olmalıdır.
- **Matematik:** grafik, fonksiyon, değişken, dönüşüm ve problem. Sembolik,
  sayısal ve görsel temsiller senkron güncellenir.
- **Geometri:** şekil, inşa, ölçü, dönüşüm ve değişmezler. Doğrudan sürükleme
  hangi kısıtın korunduğunu gösterir.
- **Coğrafya:** harita, arazi, ölçek, katman, dağılış ve ilişki. Seçim ile kanıt
  arasındaki coğrafi bağ kaybolmaz.
- **Astronomi:** gök cismi, yörünge, ölçek, zaman ve bakış noktası. Gerçek dışı
  ölçek sıkıştırması açıkça belirtilir.
- **Tarih:** zaman, harita, kişi, olay, neden-sonuç ve kaynak. Zaman seçimi ile
  mekânsal katmanlar birbirini günceller.
- **Yer bilimleri:** katman, kesit, döngü ve uzun zaman ölçeği. Görünmeyen süreç
  kontrollü kesit ve aşamalı animasyonla açıklanır.

Yeni bir ders için önce öğrencinin zihninde kurulması gereken modeli belirleyin;
sonra bu bölümdeki mantıkla ona özgü deney dilini çıkarın.

## 17) Görselleştirme teknolojileri

Depodaki mevcut tercihleri ve sınırları koruyun:

- React 18 + Vite ana çalışma yapısıdır.
- Tailwind ve `src/index.css` genel ürün stil katmanıdır.
- Atlasa özgü stiller kök sınıf altında kapsamlı CSS dosyalarında tutulur.
- SVG, fizik/kimya/biyoloji/coğrafya deneylerinde sınırlı sayıda etkileşimli
  öğe için mevcut güçlü varsayımdır.
- MapLibre, tarih atlasındaki kaydırma/yakınlaştırma, katman ve tarih süzgeci için kullanılır.
- Tarih atlasındaki siyasî dolgular `src/lib/tarihAtlasi/siyasiRenkler.js`
  paletinden gelir. `ton` tematik aileyi, paketleyicinin ürettiği
  `renkIndeksi` ise ortak sınırlı yapıları ayıran sunum rengini belirler;
  ülke bazında satır içi renk eklenmez.
- Recharts ve `src/lib/chartTheme.js`, standart ürün grafiklerinin ortak yoludur.
- Canvas çizim yoğunluğu gerektirdiğinde uygundur; erişilebilir kontrol ve sonuç
  katmanı ayrıca sağlanmalıdır.
- WebGL veya yeni 3B kütüphane yalnızca gerçek derinlik, kesit, döndürme veya
  sahne yoğunluğu öğrenme hedefi için gerekliyse eklenir; görsel süs için değil.

Yüksek frekanslı simülasyonlarda gereksiz React yeniden çizimini, dev SVG DOM'unu,
sürekli yerleşim ölçümünü, görünmeyen sahnede çalışan kare döngüsünü, pahalı blur ve
filtreleri, büyük başlangıç paketlerini sınırlayın. Konu modüllerini mevcut atlaslar
gibi gerektiğinde tembel yükleyin.

## 18) Responsive atlas davranışı

Atlası masaüstünden telefona orantılı küçültmeyin:

- **Masaüstü:** geniş öğrenme sahnesi ve aynı anda görünen temel bağlam.
- **Tablet:** katlanabilir denetçi, sadeleştirilmiş araçlar, sahne çevresi veya alt
  kontrol şeridi.
- **Telefon:** tek odak modu, çekmece/alt sayfa, büyük dokunma hedefleri ve az
  kalıcı arayüz kromu.

Temel öğrenme eylemi her boyutta yapılabilmelidir. Hover'a bağımlı açıklama
kullanmayın. Harita/sahne sürükleme ile sayfa kaydırma çatışmasını çözün. Alt
gezinmede güvenli alanı, sanal klavyeyi, yatay taşmayı ve cihaz yönünü kontrol edin.

Önerilen görsel QA boyutları, göreve göre uyarlanmak üzere 375 px telefon,
768 px tablet ve 1440 px masaüstüdür. Bunlar sabit destek matrisi değil, yaygın
kırılmaları yakalayan kontrol noktalarıdır.

## 19) Eğitimsel erişilebilirlik

Genel WCAG ilkelerine ek olarak:

- Karmaşık sahnenin güncel sonucunu kısa metin veya ölçümle de sunun.
- Renk kodunu şekil, desen, etiket veya konumla destekleyin.
- Temel sürükleme eylemine klavye veya eşdeğer denetim sağlayın.
- Açılan denetçi/çekmece odağı yönetir ve kapanınca başlatana geri verir.
- Sahne açıklaması durum değiştikçe anlamlı biçimde güncellenir; her animasyon
  karesini ekran okuyucuya duyurmayın.
- Ölçek, model varsayımı, veri belirsizliği ve tarihsel/bilimsel kaynak sınırı
  öğrenme için önemliyse görünür olmalıdır.
- Görsel güzellik, kavram doğruluğu veya okunabilirlik pahasına kurulmaz.

## 20) Görsel geliştirme ve kabul

Önemli ön yüz veya atlas görevinde, ortam desteklediğinde:

1. İlgili uygulamayı çalıştırın ve gerçek rotayı açın.
2. Değişiklik öncesi render'i inceleyin; en büyük hiyerarşi, oran, etkileşim ve
   eğitimsel netlik sorunlarını belirleyin.
3. Yapıyı ve hiyerarşiyi uygulayın.
4. Yeniden yükleyin; ana kullanıcı/öğrenme eylemini gerçekten yapın.
5. Render'i hedefle karşılaştırın; jenerik, kalabalık, oransız veya tesadüfi
   görünen alanları düzeltin.
6. Gerektiğinde görsel inceltme, etkileşim ve responsive/erişilebilirlik
   geçişleri yapın.
7. Derleme ve ilgili testlere ek olarak son ekranı tekrar görsel olarak kabul edin.

Kaynak kod incelemesi, TypeScript/derleme başarısı ve testler gereklidir; ancak
görsel kabulün yerine geçmez. Tarayıcı veya ekran görüntüsü aracı yoksa bu
sınırlamayı raporlayın ve görsel sonucu doğrulanmış gibi sunmayın.

Son kabulte şu soruların yanıtı olumlu olmalıdır:

- İlk bakışta doğru nesne veya görev öne çıkıyor mu?
- Kontroller keşfedilebilir ama geri planda mı?
- Neden-sonuç ve durum değişimi okunuyor mu?
- Türkçe metinler taşmadan ve hiyerarşiyi bozmadan yerleşiyor mu?
- Mobil deney gerçekten kullanılabilir mi?
- Klavye, odak, kontrast, dokunma ve azaltılmış hareket korunuyor mu?
- Ekran DRKOÇ ailesine ait ama konuya özgü mü?
- Gereksiz kart, cam, gradyan, kenarlık, gölge ve dekorasyon ayıklandı mı?

## 21) Ana sayfa kitap sahnesi

Kullanıcının onayladığı fotoğraf referansı için `editorial-home--book` kapsamında
ayrı malzeme belirteçleri kullanılır: `--book-desk` (9 15 25), `--book-cloth`
(24 37 56), `--book-paper` (245 240 230), `--book-print` (32 43 58),
`--book-muted` (105 111 112), `--book-rule` (205 200 187). Bunlar genel ürünün
tema belirteçlerini değiştirmez. Georgia (`--book-serif`) yalnız kitap içi
basılı başlıklarda ve bu ana sayfanın editoryal başlıklarında kullanılır;
kontroller ve ürün içeriği Inter ailesinde kalır.

Cilt dokusu `public/images/landing/book-cloth-navy.jpg` dosyasıdır; ağır 3B
bağımlılık olmadan Canvas üzerinde eğrilen sayfalara içerik basılır. Geometri
dekoratiftir. Öğrenme araçları semantik React/HTML olarak korunur. Analiz ve
günlük plan örnekleri gerçek öğrenci verisi veya başarı vaadi gibi sunulmaz.
Kaydırma yakalanmaz; bölümler düğmeyle de gezilir ve deneyime geçiş odağı taşır.
Azaltılmış hareket tercihinde uzun kaydırma ve sayfa animasyonu kaldırılır.

Kitabın üstünden süzülen loş ışık `--book-light-warm` (211 197 171), iki
yandaki zayıf dolgu ışığı `--book-light-cool` (133 160 191) ile tanımlanır.
Bu ışıklar yalnız kitap sahnesinde, statik ve düşük saydamlıklı radyal
gradyanlardır; kâğıt açıldığında yoğunluk azalır. Etkileşimleri engellemez,
yeni bir animasyon veya pahalı bulanıklık filtresi eklemez.

### Kitap içindeki tarih haritası önizlemesi

Tarih sekmesi, dekoratif zaman çizelgesi yerine atlasın mevcut v3 siyasi
paketlerini ve MapLibre sunum katmanlarını kullanır. Harita tüm sahne genişliğini
alır; yıl seçimi ve kaynak yılı haritanın hemen altında bulunur. Seçili yıl ile
kaynak yılı farklıysa fark ve kesinlik uyarısı açıkça yazılır. Yeni tarihsel
geometri üretilmez. Kaynak atıfları ve kıtasal ölçek sınırlaması görünür kalır.

Önizleme yalnız Tarih sekmesinde yüklenir. Telefonda daha geniş bir coğrafi
kadraj kullanılır; harita kaydırması iki parmakla, yakınlaştırma en az 44 px
düğmelerle yapılır. Sayfanın olağan kaydırması yakalanmaz. Tam atlas bağlantısı
seçili yılı taşır. Ağ/harita hatasında yeniden deneme sunulur; önceki yılın
haritası yeni yılın kesin görünümü gibi gösterilmez. Stiller yalnız
`.history-preview` kapsamında tutulur.

### Diğer atlasların ana sayfa önizlemeleri

Her ders ayrı ve gerektiğinde yüklenen bir deneydir. `.atlas-sample` kâğıt,
başlık, kontrol ve ölçüm ritmini paylaşır; sahne biçimini ortaklaştırmaz.
Fizik, hareket atlasının analitik hesaplarını ve zaman döngüsünü, uygulamanın
ortak araç çizimiyle kullanır. Otomatik başlamaz; sahne görünmez olduğunda
durur. Telefon kadrajı ayrıca düzenlenir; araç görünür alanın dışına taşmaz.

Kimya 118 elementin gerçek 18 sütunlu cetvel yerleşimini, atlasın element
hücrelerini ve Bohr gösterimini kullanır. Telefonlarda cetvel yatay kayar,
element düğmeleri küçültülmez; seçili elementin özeti cetvelin dışında da
görünür. Coğrafya, mevcut kurgusal havzanın görselini, öğretim katmanlarını
ve hesaplama modelini kullanır; indeksler ölçülmüş gerçek arazi verisi gibi
sunulmaz. Biyoloji aynı hücre karşılaştırma bileşenini, ilerleme kaydı ve sınav
kabuğu olmadan açar. Tam atlas bağlantıları ilgili bölüme yönlendirir.

Biyoloji ve coğrafya önizlemeleri aynı kâğıt, mor seçim vurgusu, 44 px
kontrol ve serif açıklama hiyerarşisini paylaşır. Biyolojinin hücre çizimi,
fizikteki koyu mürekkep sahnesi üzerinde ince, konuya özgü renklerle sunulur;
tam atlasın yeşil tema kabuğu ana sayfaya taşınmaz. Hücre modeli ve seçim
mantığı ortak bileşende kalır, önizleme yalnız sunumunu değiştirir.

Coğrafyanın kurgusal havza görseli kırpılmaz; katman ve nokta hizası korunur.
Nokta işaretlerinin görünen dairesi 30 px, dokunma hedefi 44 px'tir; aynı
bölgeler adlandırılmış düğmelerle de seçilir. İnce katman lejantı ve bağlamsal
açıklama sahneye eşlik eder. Dar ekranda hücre açıklaması ve havza kontrolleri
sahnenin altına geçer; değişkenler ve sonuçlar aynı sırada okunur.
