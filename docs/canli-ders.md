# Canlı Ders Stüdyosu — Mimari ve Kurulum

Öğretmenin kendi öğrencileriyle internet üzerinden birebir özel ders yaptığı
modül. Bu belge; veri modelini, güvenlik sınırlarını, görüşme sağlayıcısı
kararını ve kurulum adımlarını anlatır.

Mevcut sistemin denetim sonucu: [`canli-ders-denetim.md`](canli-ders-denetim.md)

---

## 1) Temel ürün kararı

Bu ekran **jenerik bir toplantı arayüzü değildir.** Canlı derste kahraman
görüntü kutuları değil, öğrencinin üzerinde çalıştığı öğrenme nesnesidir:
tahta, soru, ders notu, PDF, görsel, deneme yanlışı veya atlas.

Bu karar düzene doğrudan yansır:

| Cihaz | Ana alan | Video |
|---|---|---|
| Geniş masaüstü (≥1280 px) | Tahta/materyal — genişliğin ~%80'i | Sağda sabit genişlikli dar şerit (15–17rem) |
| Tablet ve dar masaüstü (<1280 px) | **Tahta odak modu**: tahta tam genişlik | Tahtanın üstünde daraltılabilir kamera yerleşiği |
| Telefon (<768 px) | Tek odak: tahta **veya** materyal **veya** görüntü | Tahtanın altında şerit |

Video şeridinin genişliği bilinçli olarak **sabittir**, yüzde değil: yüzdeyle
verilseydi geniş ekranda videolar büyüyüp tahtayla yarışırdı.

### 1a) Tahta odak modu

Ölçülen sorun: 1024×768 yatay tablette gerçek çizim alanı **728×365 piksel**
kalıyordu — ekranın yalnızca **%34'ü**. Alanı yiyenler sağda 240 px'lik sabit
katılımcı sütunu, 81 px üst şerit, 78 px alt şerit ve kalem ayarları sarıldığı
için 62+80 px'e çıkan iki satırlı araç çubuğuydu. Öğretmen dersi tam olarak bu
ekrandan, kalemle anlatıyor.

Tahta odak modu aynı anda dört şeyi birden yapar:

- sabit katılımcı sütunu **hiç oluşturulmaz** (gizlemek yetmez; DOM'da kalırsa
  yine ölçülür ve genişlik ayırır),
- kamera, tahtanın ölçüsünü değiştirmeyen yüzen bir katmana döner,
- üst ve alt şeritler tek satırlık kompakt hâle iner,
- ikincil araçlar tek bir "Ders araçları" menüsünde toplanır.

Sonuç (aynı ekranda ölçüldü): **998×570 piksel**, ekranın **%72'si** — çizim
yüzeyi alan olarak **%114 büyüdü**.

| Ekran | Önce | Sonra |
|---|---|---|
| 1024×768 (yatay tablet) | 728×365 | **998×570** |
| 768×1024 (dikey tablet) | 726×625 | **742×826** |
| 1440×900 normal görünüm | 1112×523 | **1112×631** |
| 1440×900 tahta odak modu | — | **1414×702** |

Mod, **cihaz tahmin edilerek değil kullanılabilir alana bakılarak** açılır
(`src/lib/liveLesson/boardFocus.js`). Kullanıcı aracısına bakmanın anlamı yok:
iPadOS kendini masaüstü Safari gibi tanıtıyor, Android tabletler telefondan
ayırt edilemiyor. Eşik **1280 px**: altındaki her cihazda varsayılan açık,
üstünde kapalı ve "Tahtayı büyüt" düğmesiyle elle açılır. Çıkış yolu her zaman
görünür: "Normal görünüme dön".

Tercih **cihazda** saklanır (`localStorage`), dersin veri modeline yazılmaz.
Öğretmen modu açtığında öğrenciye ders kanalından **tek bir** bildirim gider ve
öğrencinin ekranı da tahta odaklı hâle gelir; öğrenci sonradan kendi isteğiyle
normal görünüme dönebilir ve kamerayı açabilir.

Mod **tarayıcının gerçek tam ekran desteğine bağlı değildir**; uygulama içi bir
yerleşim değişikliğidir.

### 1b) Kamera yerleşiği

Kamera kutuları artık yerleşimin parçası değil, tahtanın tuval kabının içine
basılan mutlak konumlu bir katman (`LessonCameraDock.jsx`):

- açılıp kapanması ve köşe değiştirmesi tahtanın ölçüsünü **değiştirmez**,
- varsayılan olarak **daraltılmıştır**; dokununca küçük bir resim içinde resim
  açılır, tekrar dokununca kapanır,
- dört köşeden birine taşınabilir (tercih cihazda hatırlanır),
- karşı tarafın kamerası kapalıysa veya bağlantı yoksa **büyük boş video kutusu
  yerine** tek satırlık bir durum rozeti kalır,
- tahta odak modunda öğretmenin kendi önizlemesi sürekli gösterilmez; "Tablet —
  anlatım ve tahta" rolünde kendi kamera kutusu hiç kurulmaz.

Eski "yüzen video kutusu" kaldırıldı: dikey tablette 152×86 piksellik o kutu
doğrudan tahtanın sağ üstünü, yani yazılan yeri kapatıyordu ve kapatma yolu
yoktu.

---

## 2) Veri modeli

Göç dosyası: `supabase/migration_live_lessons.sql`

| Tablo | Ne tutar |
|---|---|
| `teacher_students` | Öğretmen–öğrenci sahiplik bağı (pending/active/rejected/removed) |
| `teacher_invites` | Süreli davet bağlantıları — belirtecin **SHA-256 özeti** |
| `teacher_invite_attempts` | Kaba kuvvet sayacı (istemciye kapalı) |
| `lesson_sessions` | Ders oturumu: zaman, durum, gündem, oda kimliği |
| `lesson_private_notes` | **Öğretmene özel notlar** — ayrı tablo, öğrenciye politika yok |
| `lesson_participants` | Katılım, süre, yeniden bağlanma sayısı |
| `lesson_materials` | Derse bağlanan soru/not/PDF/görsel/bağlantı/atlas |
| `lesson_board_pages` | Tahta sayfalarının kalıcı hâli |
| `lesson_summaries` | Ders sonu özeti ve öğrenci geri bildirimi |
| `homeworks.lesson_session_id` | Mevcut ödev tablosuna isteğe bağlı bağ |

### Neden özel not ayrı tabloda?

PostgreSQL'de RLS **satır** bazlıdır, **kolon** gizleyemez. Öğretmenin özel
notu `lesson_sessions` içinde bir kolon olsaydı, o dersi okuma hakkı olan
öğrenci `select *` ile o kolonu da okurdu. Ayrı tabloda ise öğrencinin tek
satır bile görmesine izin veren bir politika yoktur — sızıntı yapısal olarak
imkânsızdır. `scripts/test-live-lessons-rls.mjs` bunu ayrıca test eder.

---

## 3) Güvenlik sınırları

- Öğretmen yalnızca **aktif bağı olan** öğrencilerini görür. Göç, mevcut
  öğretmen–öğrenci çiftlerini `legacy` olarak taşır; bugün görünen hiçbir
  öğrenci kaybolmaz. Göçten sonra kayıt olan öğrenci kendiliğinden görünmez.
- `lesson_participants` tablosuna istemciden **INSERT/UPDATE politikası
  verilmez.** Bütün yazma işlemleri `auth.uid()` kullanan SECURITY DEFINER
  fonksiyonlarından geçer; kullanıcı istek gövdesindeki `user_id` alanını
  değiştirerek başkası adına katılım yazamaz.
- `provider_room_id` her zaman **sunucuda** üretilir (tetikleyici istemcinin
  yazdığı değeri ezer) ve tek başına yetki taşımaz.
- Ders `completed`/`cancelled`/`no_show` olduğunda oda erişimi **sona erer**;
  hem RPC hem de `api/live-lesson/room-token.js` bunu bağımsız kontrol eder.
- Davet belirteci veritabanında **açık metin tutulmaz**, süreli ve iptal
  edilebilir, tek kullanımlıktır.
- Sağlayıcı gizli anahtarı `VITE_` önekiyle **yazılamaz** (Vite onu build
  çıktısına gömer). Bkz. `.env.example`.

Test: `npm run test:live-lessons` (55 senaryo, PGlite üzerinde gerçek
PostgreSQL ile; üretim veritabanına dokunmaz).

Tahtanın dikey sayfa akışı ve tahta odak modu için: `npm run test:tahta-akisi`
(62 senaryo; sayfa yerleşimi, koordinat dönüşümü, sınırlar, ivme ve odak modu
varsayılanları — gerçek cihaz gerekmez).

---

## 4) Görüşme sağlayıcısı — LiveKit

Ham WebRTC sıfırdan yazılmadı: NAT geçişi, TURN sunucusu, yeniden bağlanma,
cihaz uyumluluğu ve bağlantı kalitesi kendi başına bir üründür. Kullanıcı
**LiveKit**'i seçti ve entegrasyon tamamlandı.

| Katman | Dosya | Ne yapar |
|---|---|---|
| Sözleşme | `src/lib/liveLesson/rtc/provider.js` | Sağlayıcıdan bağımsız arayüz; ekranlar yalnız bunu tanır |
| LiveKit | `src/lib/liveLesson/rtc/livekit.js` | Gerçek görüşme; SDK'yı `import()` ile GEÇ yükler |
| Yerel önizleme | `src/lib/liveLesson/rtc/localPreview.js` | LiveKit yapılandırılmadığında devreye girer |
| Belirteç | `api/live-lesson/room-token.js` | Oda izninin ÜRETİLDİĞİ tek yer |

### Güvenlik sınırı

- Gizli anahtar (`LIVEKIT_API_SECRET`) yalnızca sunucuda okunur; `VITE_`
  önekiyle **yazılamaz** — Vite onu build çıktısına gömerdi.
- Belirteç isteyen kişinin gerçekten dersin tarafı olduğu **veritabanına
  sorularak** doğrulanır. İstemcinin gönderdiği rol veya kimlik dikkate
  alınmaz; sorgu kullanıcının kendi yetkisiyle çalışır, RLS ikinci kez
  bağımsız olarak sınırlar.
- Belirtecin `identity` alanı daima sunucudaki kullanıcı numarasıdır,
  görünen ad da veritabanından okunur — kimse başkasının adıyla giremez.
- Belirteç kısa ömürlüdür (1 saat). Ders bittiğinde/iptal edildiğinde
  belirteç **hiç üretilmez**; bağlantıyı saklayıp sonra girmek mümkün değil.
- Odayı yönetme yetkisi (`roomAdmin`) yalnız öğretmende.

### Paket boyutu

`livekit-client` yaklaşık 582 KB (gzip 152 KB). Statik içe aktarılsaydı
canlı ders paketine girer ve dersi hiç açmayan kullanıcı da indirirdi. Bu
yüzden SDK **oda gerçekten hazırlanırken** `import()` ile yüklenir; ana
uygulama paketinde tek satırı yoktur.

### Yapılandırılmadığında ne olur

`VITE_LIVEKIT_URL` tanımlı değilse ürün "Yerel önizleme" moduna düşer:
kamera/mikrofon testi, ortak tahta, materyaller, mesajlar ve katılım kaydı
çalışır; karşı tarafın görüntüsü ve sesi aktarılmaz. Arayüz bunu gizlemez,
açıkça yazar. Sahte katılımcı veya sahte bağlantı durumu üretilmez.

## 4b) Cihaz rolü — aynı derse iki cihazdan girmek

Öğretmen tabletten kalemle anlatıp telefonunu/bilgisayarını kamera olarak
kullanabiliyor. Bu iki cihazın işi farklı olduğu için rol **tahmin
edilmez, sorulur** (`src/lib/liveLesson/deviceRole.js`):

| Rol | Mikrofon | Kamera | Ses çıkışı |
|---|---|---|---|
| Tek cihazdan (varsayılan) | açık | açık | açık |
| Tablet — anlatım ve tahta | açık | kapalı | açık |
| Telefon/bilgisayar — kamera | **kapalı** | açık | **kapalı** |

Seçim bekleme odasında yapılır, cihazda hatırlanır ve ders sırasında
cihaz çekmecesinden değiştirilebilir.

### Kamera ve mikrofon izni

Bekleme odası açıldığında kamera ve mikrofon kendiliğinden çalışmaz.
Kullanıcı önce hangi cihazların kullanılacağını görür; **Kamera ve
mikrofonu etkinleştir** düğmesine bastığında tarayıcının zorunlu izin
penceresi açılır. Site bu izni atlayamaz. Kullanıcı izinlerden yalnızca
birini verirse ders diğer çalışan cihazla devam edebilir ve engellenen cihaz
için tarayıcıya uygun düzeltme yönergesi gösterilir. Doğrudan stüdyo
adresine gidilirse de izin istemek yerine bekleme odasına yönlendirilir.

### Ses çıkışı neden kapatılıyor

Yankıyı önlemenin tek kesin yolu bu. Kamera cihazının hoparlörü açık
kalırsa tabletin sesi oradan çıkar, tabletin mikrofonuna geri girer ve
çığlık gibi bir geri besleme oluşur. Yalnız mikrofonu kapatmak yetmez.

### LiveKit kimlik çakışması

LiveKit, odaya **aynı kimlikle** ikinci bir bağlantı geldiğinde
ilkini atar (`DUPLICATE_IDENTITY`). Bu yüzden belirteçteki kimlik
`<kullaniciNo>#<baglantiEki>` biçimindedir; son ek sunucuda üretilir.
Yetkilendirme bundan etkilenmez — odaya girme hakkı veritabanı
kontrolünden gelir, kimlik dizesinden değil. İstemci karşı tarafı `#`
öncesindeki numaradan eşleştirir ve karşı taraf iki cihazdan bağlıysa
**kamerası açık olanı** gösterir.

### Dosya yükleme sınırı

İstemci sınırı `MAX_UPLOAD_MB` (`src/lib/liveLesson/materialSources.js`),
şu an **50 MB**. Bu, Supabase Ücretsiz planının dosya başına üst sınırıyla
hizalıdır; daha yükseğe çekmek istemcide işe yaramaz, sunucu 413 döner.

Daha büyük dosya gerekirse iki şey birden yapılmalı:

1. Kovanın kendi sınırını yükselt (SQL Editor):
   `update storage.buckets set file_size_limit = 104857600 where id = 'question-images';`
2. `MAX_UPLOAD_MB` değerini aynı sayıya çek.

Planın global sınırı bunların ikisini de ezer; Ücretsiz planda 50 MB'ın
üstüne çıkılamaz.

## 5) Tahta

`src/lib/solutionCanvas.js` içindeki mevcut vektör çizim motoru yeniden
yazılmadı; canlı ders tahtası onun üzerine kuruldu
(`src/lib/liveLesson/board/model.js`). Motorun getirdikleri: basınca duyarlı
kalem, fosforlu, nokta seyreltme ve yakınlaştırmadan bağımsız
koordinat uzayı. Canlı dersin eklediği: çok sayfa, metin, şekil, görsel ve
çok kullanıcı. Tablet kullanımında kalem çizime, parmak kaydırma ve
iki parmakla yakınlaştırmaya ayrılır. Basınç yumuşatma, parça/çizgi
silgisi, serbest lasso seçimi, seçimi taşıma-kopyalama-silme ve tahtadan
doğrudan PDF açma desteklenir. PDF sayfaları silinemeyen zemin olarak kalır;
notlar ayrı vektör katmanında tutulur.

> `src/components/aiSolve/Whiteboard.jsx` **kullanılmadı.** O bileşen yapay
> zekânın ürettiği çözüm adımlarını *gösteren* bir oynatıcıdır; kullanıcı
> oraya çizemez. İkisini karıştırmak bu işin en olası hatasıydı.

### Eşitleme sınırı

| Kanal | Ne taşır | Sıklık |
|---|---|---|
| Realtime **broadcast** | Çizilmekte olan çizginin YENİ noktaları, biten çizgi, nesne farkı (ekle/sil/güncelle), sohbet, materyal odağı | ≈12/sn (yalnız delta) |
| **Veritabanı** | Tamamlanmış sayfa içeriği | Sayfa başına ≈4 sn'de bir, yalnız değiştiyse |

Her pointer hareketi veritabanına yazılmaz; tüm sayfa da yayınlanmaz. Bir
çizgi 200 nokta içerebilir ve tam sayfa yayını kanal sınırını aşardı.

Tahta çizerken React state'i güncellenmez: sayfa verisi `pagesRef` içinde
yaşar, çizim doğrudan canvas'a yapılır. Aksi hâlde her noktada bütün stüdyo
(video kutuları, kontroller, paneller) yeniden render edilirdi. Aynı kural
**kaydırma** için de geçerlidir: görünüm `viewRef` içinde yaşar, yakınlaştırma
yüzdesi ancak gerçekten değiştiğinde state'e yazılır.

### 5a) Dikey sayfa akışı

Tahta artık tek tek değiştirilen slaytlar değil, yukarıdan aşağıya ilerleyen
bir **belge**. Boş sayfalar ve PDF sayfaları aynı akışta alt alta dizilir
(`src/lib/liveLesson/board/pageFlow.js`).

Üç koordinat uzayı vardır ve karıştırılmamalıdır:

| Uzay | Nedir |
|---|---|
| sayfa | Bir sayfanın kendi içindeki (x, y). Çizim verisi burada saklanır, veri tabanına giden budur. |
| belge | Bütün sayfaların alt alta dizildiği uzay. Sayfa n'in belge y'si `box.y`. |
| ekran | belge × ölçek + (tx, ty) |

Kurallar:

- **Sayfa oranı bozulmaz.** Genişlik sabit (1600), yükseklik PDF'in gerçek
  en-boy oranından gelir. "Dikey format", sayfaların dikey bir akışta
  ilerlemesidir; hepsini aynı dikey ölçüye çevirmek değildir.
- **Çizim, bakılan sayfaya değil dokunulan sayfaya yazılır.** Ekranda iki sayfa
  birden görünebilir; "etkin sayfa" ekranda en çok yer kaplayan sayfadır ve
  yalnız göstergeyi, geri alı ve temizlemeyi ilgilendirir.
- **Süren bir çizgi sayfa değiştirmez.** Kalem sayfa sınırını aşarsa çizgi kendi
  sayfasının uzayında ölçülmeye devam eder; koordinat komşu sayfanın sıfırına
  dönüp ekranda zıplamaz.
- **Bütün belge tek dev Canvas'a çizilmez.** Tuval ekran kadardır; yalnız görünür
  (artı bir ekran payı) sayfalar boyanır. 40 sayfalık bir PDF'te fark budur.
- **Kaydırma gerçek ivmeyle sürer.** `scroll-behavior: smooth` bu işi görmez; o
  yalnız programatik geçişi yumuşatır, parmağın hızını taşımaz. Son hareketlerin
  hızı ölçülür, bırakınca sönümlenerek devam eder ve belge sınırında durur.
- **Ana gezinme yönü dikeydir.** Normal ölçekte belge yatayda ortalanır ve yatay
  hareket kilitlidir — eğik parmak sayfayı yana savuramaz. Yakınlaştırılmış bir
  PDF sayfasında belge ekrandan genişler ve yatay konumlandırma kendiliğinden
  açılır.
- **Yeni sayfa akışın altına eklenir** ve ekran oraya kaydırılır. Önceki/sonraki
  düğmeleri erişilebilir alternatif olarak durur; bastırıldığında ilgili sayfaya
  kontrollü biçimde kaydırır.
- `prefers-reduced-motion` açıkken ivme hiç başlamaz, programatik geçiş anlıktır.

Girdi kuralları değişmedi:

| Durum | Tek parmak | İki parmak | Kalem |
|---|---|---|---|
| Varsayılan | sayfayı kaydırır | yakınlaştırır / konumlandırır | çizer |
| "Parmakla çiz" açık | çizer | yakınlaştırır / konumlandırır | çizer |

Kural kullanıcıya kalem ayarları panelinde tek cümleyle yazılı olarak gösterilir.
iPad ve Apple Pencil için mevcut doğrudan Touch Events yolu, avuç reddi ve
basınç davranışı korunmuştur; dikey akış bu motorun üstüne kuruldu.

Eşitleme: öğretmenin **etkin sayfası değiştiğinde** öğrenciye sınırlı sıklıkta
(en fazla ~400 ms'de bir) sayfa odağı bildirilir. Sürekli kaydırma konumu ve
yakınlaştırma **yayınlanmaz**; öğrencinin kendi yakınlaştırması ezilmez.
Görünmeyen bir sayfaya karşı taraftan gelen çizim kaybolmaz, o sayfa görünür
olduğunda doğru yerde çizilir.

### 5b) Araç çubuğu: tek satır, ayrıntılar istendiğinde

Kalem ayarlarının oluşturduğu **kalıcı ikinci satır kaldırıldı**. Çubuk her
zaman tek satırdır; seçili aracın ayrıntıları yalnız istendiğinde, tahtanın
üstünde yüzen bir panelde açılır. Panel mutlak konumludur: açılıp kapanması
tahtanın ölçüsünü değiştirmez, sayfa konumunu zıplatmaz.

Panel iki yoldan açılır: seçili araca **tekrar** dokunarak ya da yanındaki
**sabit** ayarlar düğmesine basarak. Düğmenin yeri sabittir; araç değiştikçe
çubuk yana kaymaz. Panel dışarı dokunma ve Escape ile kapanır, kapanınca odak
onu açan düğmeye döner. Dışarı dokunma olayı engellenmediği için kalemin ilk
darbesi kaybolmaz — panel kapanır, çizgi normal başlar.

Sayfa sayısı ve sayfa geçişleri ana çubuğa taşındı; tahtanın altındaki ayrı
sayfa şeridi kaldırıldı. Seyrek kullanılan şekil, PDF, yakınlaştırma ve
"sayfayı temizle" tek bir açılır araç alanına alındı. Kalem, fosforlu, silgi,
geri al ve ileri al tek dokunuşla erişilebilir kaldı.

---

## 6) Rotalar

| Rota | Rol | Ekran |
|---|---|---|
| `/ogretmen/canli-dersler` | öğretmen | Ders takvimi + davet yönetimi |
| `/ogretmen/canli-dersler/yeni` | öğretmen | Ders planlama |
| `/ogretmen/canli-dersler/:id/duzenle` | öğretmen | Ders düzenleme + materyaller |
| `/canli-dersler` | öğrenci | Ders takvimi |
| `/canli-ders/:id` | ikisi | Bekleme odası |
| `/canli-ders/:id/studyo` | ikisi | Canlı Ders Stüdyosu |
| `/canli-ders/:id/ozet` | ikisi | Ders sonu özeti |
| `/davet/ogretmen/:token` | herkese açık | Davet kabul ekranı |

Bütün canlı ders sayfaları `React.lazy` ile ayrı pakete alındı; dersi hiç
kullanmayan öğrenci bu kodu indirmez. Ana uygulama paketi bu özellikle
yaklaşık 5 KB büyüdü.

---

## 7) Kurulum adımları

1. **Göçü uygula** (öğretmen erişimini daraltır, mevcut bağları korur):
   ```
   node scripts/run-migration.mjs supabase/migration_live_lessons.sql
   ```
2. Doğrula:
   ```
   npm run test:live-lessons
   ```
3. Öğretmen panelinden **Öğrenci Davet Et** → bağlantıyı öğrenciye gönder.
4. LiveKit Cloud'da proje aç (https://cloud.livekit.io) ve **Settings →
   Keys** altından üç değeri al.
5. Vercel > Settings > Environment Variables altına ekle:
   `VITE_LIVEKIT_URL`, `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`.
   Sonra yeniden yayına al — `VITE_` önekli değişken build sırasında gömülür,
   var olan dağıtım kendiliğinden güncellenmez.

---

## 8) Bilinçli olarak sonraki aşamaya bırakılanlar

- **Gerçek tekrarlı ders serisi.** Şu an "haftalık tekrar" seçildiğinde
  BAĞIMSIZ dersler oluşuyor; her düzenleme yalnız o dersi etkiliyor. Seri
  kaydı tutulsaydı "yalnız bu ders / bu ve sonrakiler / bütün seri" üçlü
  seçimi gerekirdi ve yanlış seçilen bir seçenek öğrencinin takvimini
  sessizce siler. Kural tek ve tahmin edilebilir tutuldu.
- **Kalıcı video/ses kaydı.** Varsayılan olarak kapalı; açık izin olmadan
  kayıt başlatılmaz. LiveKit Egress ile eklenebilir, ilk sürüme alınmadı.
- **Grup dersi**, ders paketi satışı, otomatik transkript.
- **Öğrencinin tahtayı düzenleme yetkisinin öğretmence kısıtlanması**
  (şu an ders açıkken iki taraf da yazabilir).
