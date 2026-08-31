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
| Masaüstü | Tahta/materyal — genişliğin ~%80'i | Sağda sabit genişlikli dar şerit (15–17rem) |
| Tablet | Tahta tam genişlik | Sahnenin köşesinde yüzen küçük kutu |
| Telefon | Tek odak: tahta **veya** materyal **veya** görüntü | Tahtanın altında şerit |

Video şeridinin genişliği bilinçli olarak **sabittir**, yüzde değil: yüzdeyle
verilseydi geniş ekranda videolar büyüyüp tahtayla yarışırdı.

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

## 5) Tahta

`src/lib/solutionCanvas.js` içindeki mevcut vektör çizim motoru yeniden
yazılmadı; canlı ders tahtası onun üzerine kuruldu
(`src/lib/liveLesson/board/model.js`). Motorun getirdikleri: basınca duyarlı
kalem, fosforlu, çizgi silgisi, nokta seyreltme, yakınlaştırmadan bağımsız
koordinat uzayı. Canlı dersin eklediği: çok sayfa, metin, şekil, görsel ve
çok kullanıcı.

> `src/components/aiSolve/Whiteboard.jsx` **kullanılmadı.** O bileşen yapay
> zekânın ürettiği çözüm adımlarını *gösteren* bir oynatıcıdır; kullanıcı
> oraya çizemez. İkisini karıştırmak bu işin en olası hatasıydı.

### Eşitleme sınırı

| Kanal | Ne taşır | Sıklık |
|---|---|---|
| Realtime **broadcast** | Çizilmekte olan çizginin YENİ noktaları, biten çizgi, nesne farkı (ekle/sil), sohbet, materyal odağı | ≈12/sn (yalnız delta) |
| **Veritabanı** | Tamamlanmış sayfa içeriği | Sayfa başına ≈4 sn'de bir, yalnız değiştiyse |

Her pointer hareketi veritabanına yazılmaz; tüm sayfa da yayınlanmaz. Bir
çizgi 200 nokta içerebilir ve tam sayfa yayını kanal sınırını aşardı.

Tahta çizerken React state'i güncellenmez: sayfa verisi `pagesRef` içinde
yaşar, çizim doğrudan canvas'a yapılır. Aksi hâlde her noktada bütün stüdyo
(video kutuları, kontroller, paneller) yeniden render edilirdi.

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
