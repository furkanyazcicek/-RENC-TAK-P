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

## 4) Görüşme sağlayıcısı — KULLANICI KARARI BEKLİYOR

Ham WebRTC sıfırdan yazılmadı. NAT geçişi, TURN sunucusu, yeniden bağlanma,
cihaz uyumluluğu, ekran paylaşımı ve bağlantı kalitesi kendi başına bir
üründür; bunun için olgun bir sağlayıcı gerekir. Sağlayıcı seçimi **ücretli
servis kararıdır ve kullanıcıya aittir.**

O karar verilene kadar mimari hazır:

- `src/lib/liveLesson/rtc/provider.js` — sağlayıcıdan bağımsız sözleşme
  (`prepareRoom`, `joinRoom`, `leaveRoom`, `toggleMicrophone`, `toggleCamera`,
  `startScreenShare`, `stopScreenShare`, `switchCamera`, `getDevices`,
  `selectMicrophone`, `selectCamera`, `getConnectionState`, `getParticipants`,
  `reconnect`)
- `src/lib/liveLesson/rtc/localPreview.js` — tarayıcı API'siyle çalışan
  "Yerel önizleme" sağlayıcısı
- `api/live-lesson/room-token.js` — belirteç üretiminin **tek** yeri;
  sağlayıcı tanımlı değilken `provider_not_configured` döner

**Şu an gerçekten çalışan:** kamera/mikrofon izinleri ve önizleme, cihaz
seçimi, mikrofon seviye ölçümü, ekran paylaşımı (yerel), ortak tahta,
materyaller, ders içi mesajlaşma, katılım/süre kaydı, ders sonu özeti.

**Şu an çalışmayan:** karşı tarafın görüntüsü ve sesi. Arayüz bunu gizlemez;
"Yerel önizleme" etiketiyle açıkça söyler. Sahte katılımcı, sahte video veya
sahte bağlantı durumu üretilmez.

### Sağlayıcı seçenekleri (karar notu)

| Sağlayıcı | Ücretsiz kota | Sonrası | Not |
|---|---|---|---|
| LiveKit Cloud | ~50 GB/ay bant genişliği | Kullanım başına | Açık kaynak sunucu; istenirse kendi sunucunda barındırılır |
| Daily.co | ~10.000 katılımcı-dakika/ay | Dakika başına | En hızlı entegrasyon, hazır arayüz bileşenleri |
| 100ms | ~10.000 dakika/ay | Dakika başına | Eğitim odaklı özellikler |

Birebir ders için aylık kullanım tahmini: 1 öğretmen × 5 öğrenci × haftada
2 ders × 60 dk ≈ **2.400 katılımcı-dakika/ay** — üçünün de ücretsiz
kotasının içinde kalır. Karar verildiğinde yapılacak tek iş:
`REGISTRY` içine bir sağlayıcı dosyası eklemek ve `room-token.js` içindeki
belirteç üretimini doldurmak. **Ekranların hiçbiri değişmez.**

---

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
4. (İsteğe bağlı) Görüşme sağlayıcısı seçildiğinde `.env` değişkenlerini
   ekle ve `room-token.js` içindeki belirteç üretimini doldur.

---

## 8) Bilinçli olarak sonraki aşamaya bırakılanlar

- **Gerçek tekrarlı ders serisi.** Şu an "haftalık tekrar" seçildiğinde
  BAĞIMSIZ dersler oluşuyor; her düzenleme yalnız o dersi etkiliyor. Seri
  kaydı tutulsaydı "yalnız bu ders / bu ve sonrakiler / bütün seri" üçlü
  seçimi gerekirdi ve yanlış seçilen bir seçenek öğrencinin takvimini
  sessizce siler. Kural tek ve tahmin edilebilir tutuldu.
- **Kalıcı video/ses kaydı.** Varsayılan olarak kapalı; açık izin olmadan
  kayıt başlatılmaz. Sağlayıcı seçildikten sonra değerlendirilebilir.
- **Grup dersi**, ders paketi satışı, otomatik transkript.
- **Öğrencinin tahtayı düzenleme yetkisinin öğretmence kısıtlanması**
  (şu an ders açıkken iki taraf da yazabilir).
