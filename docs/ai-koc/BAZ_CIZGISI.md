# AI Koç — Faz 0 baz çizgisi

Ölçüm tarihi: 7 Eylül 2026, Europe/Istanbul (+03:00). Kaynak: masaüstündeki yetkili çalışma kopyası; başlangıç Git sürümü `10776b2`. Node `v24.19.0`, npm `11.17.0`; kurulu Supabase/PostgREST istemcisi `2.111.0`.

28 mevcut güvenli test komutu ve üretim derlemesi çalıştırıldı: **29/29 komut başarılı, başarısız komut yok**. Bunlara eklenen yalnız belge klasöründeki sentetik gözlem deneyi de başarılı: toplam **30/30 çalıştırma**. Başarılı komut sayısı, bağımsız kullanıcı senaryosu veya toplam assertion sayısı değildir. Farklı betikler test, içerik kaydı ve denetim sayısını farklı raporladığından tek bir yapay kontrol toplamı verilmedi.

Ürün, API, şema ve canlı öğrenci verisi değiştirilmedi. Var olan içerik/PDF değişiklikleri kullanıcı çalışması olarak korundu. Bu ölçüm mevcut çalışma kopyasını sınar; geçmiş temiz sürümle karşılaştırma değildir. Derleme yalnız yerel `dist/` çıktısı oluşturdu; yayın yapılmadı.

## Gerçek sonuçlar

Tüm komutların çıkış kodu aşağıdadır. Tarih her satırda 2026-09-07; saat Türkiye saatidir. Ham çıktıda tam başlangıç tarihi, komut ve çıkış kodu saklıdır. “0” başarılı süreç demektir; listelenen uyarıları ortadan kaldırmaz.

| Komut ve çıktı | Saat | Sonuç / sayı | Çıkış | Mevcut/yeni hata | Dış bağımlılık | Ölçülen kapsam |
|---|---|---|---|---|---|---|
| `node scripts/test-context-curriculum.mjs` — [context-curriculum.log](kanitlar/faz-0/context-curriculum.log) | 10:47:33 | Geçti: 38 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok; sentetik öğrenci | buildFacts → renderContext → araçlar; ön koşullar, plan onayı, hafıza beyaz listesi |
| `node scripts/test-curriculum.mjs` — [curriculum.log](kanitlar/faz-0/curriculum.log) | 10:47:33 | Geçti: 55 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok; saf fonksiyon | Müfredat grafiği, takma adlar, bilinmeyen konu, öğrenme sırası ve plan |
| `npm run test:ai-solve` — [ai-solve.log](kanitlar/faz-0/ai-solve.log) | 10:47:33 | Geçti: 150 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Taklit ağ; mathjs | Tahta, matematiksel doğrulama, konu eşleştirme, yönlendirme, geçmiş, süre sınırı |
| `npm run test:lesson-document` — [lesson-document.log](kanitlar/faz-0/lesson-document.log) | 10:47:33 | Geçti: 25 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Ders belge şeması ve derinlik denetimi |
| `npm run test:lesson-content` — [lesson-content.log](kanitlar/faz-0/lesson-content.log) | 10:47:33 | Geçti: 185 ders; 0 hata; 32 uyarı | 0 | Mevcut ders derinlik uyarıları | Yerel paketli içerik ve varlıklar | Referans/paketli ders içerikleri, 21/21 temel biyoloji konusu |
| `npm run test:lesson-narration` — [lesson-narration.log](kanitlar/faz-0/lesson-narration.log) | 10:47:33 | Geçti: 26 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Taklit ses sağlayıcısı; gerçek çağrı yok | Anlatım, yerel devam konumu, ses API hata ve sağlayıcı davranışı |
| `npm run test:library-curriculum` — [library-curriculum.log](kanitlar/faz-0/library-curriculum.log) | 10:47:33 | Geçti: 4 sınıf; 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Kütüphane hiyerarşisi, rota ve içerik referansları |
| `npm run test:ingilizce` — [ingilizce.log](kanitlar/faz-0/ingilizce.log) | 10:47:33 | Geçti: 18 kontrol grubu; 0 hata/uyarı | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | 36 ders, 104 kelime, 21 modül, 10 not, 45 tespit maddesi, 800 kart; cevap/seviye kuralları |
| `npm run test:almanca` — [almanca.log](kanitlar/faz-0/almanca.log) | 10:47:33 | Geçti: 18 kontrol grubu; 0 hata/uyarı | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | 38 ders, 144 kelime, 21 modül, 10 not, 45 tespit maddesi, 800 kart; cevap/seviye kuralları |
| `npm run test:fransizca` — [fransizca.log](kanitlar/faz-0/fransizca.log) | 10:47:33 | Geçti: 18 kontrol grubu; 0 hata/uyarı | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | 38 ders, 144 kelime, 10 modül, 9 not, 45 tespit maddesi, 800 kart; cevap/seviye kuralları |
| `npm run test:ispanyolca` — [ispanyolca.log](kanitlar/faz-0/ispanyolca.log) | 10:47:34 | Geçti: 18 kontrol grubu; 0 hata/uyarı | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | 38 ders, 144 kelime, 10 modül, 9 not, 45 tespit maddesi, 800 kart; cevap/seviye kuralları |
| `npm run test:matematik-soru-kutuphanesi` — [matematik-soru-kutuphanesi.log](kanitlar/faz-0/matematik-soru-kutuphanesi.log) | 10:47:34 | Geçti: 0 hata; toplam sayı raporlanmıyor | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel JSON varlıklar | Ortak soru akışı şeması ve uç testler |
| `npm run test:felsefe-soru-kutuphanesi` — [felsefe-soru-kutuphanesi.log](kanitlar/faz-0/felsefe-soru-kutuphanesi.log) | 10:47:34 | Geçti: 280 test / 2800 soru; 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel JSON varlıklar | Soru belgeleri ve açıklama/kazanım alanları |
| `npm run test:tarih-soru-kutuphanesi` — [tarih-soru-kutuphanesi.log](kanitlar/faz-0/tarih-soru-kutuphanesi.log) | 10:47:34 | Geçti: 200 test / 2000 soru; 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel JSON varlıklar | Özgün soru, şema, dağılım; her seçenek 400 doğru cevap |
| `node scripts/test-exam-stats.mjs` — [exam-stats.log](kanitlar/faz-0/exam-stats.log) | 10:47:34 | Geçti: 24 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Günlük/branş/genel deneme toplamları, süre ve seri |
| `npm run test:parent-rls` — [parent-rls.log](kanitlar/faz-0/parent-rls.log) | 10:47:34 | Geçti: 53 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | PGlite; geçici bellek PostgreSQL | Veli bağları ve izinleri, rol yükseltme engeli, onaysız erişim; Supabase auth taklit |
| `npm run test:live-lessons` — [live-lessons.log](kanitlar/faz-0/live-lessons.log) | 10:47:34 | Geçti: 55 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | PGlite; geçici bellek PostgreSQL | Öğrenci/öğretmen/veli erişimi, özel notlar, katılım, davet, oda kimliği |
| `npm run test:defter` — [defter.log](kanitlar/faz-0/defter.log) | 10:47:36 | Geçti: 63 test / 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | PGlite ve taklit depo; yerel | Belge, kaydetme tamponu, revizyon çatışması, kullanıcı ayrımı, giriş/çizim, ekler; 63 Node testinin içinde ayrıca defter RLS betiği var |
| `npm run test:ink` — [ink.log](kanitlar/faz-0/ink.log) | 10:47:36 | Geçti: 65 çizgi + 4 önbellek testi / 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | Taklit çizim ortamı | Kalem basıncı, çizim/geometri, önbellek |
| `npm run test:kimya` — [kimya.log](kanitlar/faz-0/kimya.log) | 10:47:36 | Geçti: 681 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Element/formül, Lewis, bağ açıları |
| `npm run test:fizik` — [fizik.log](kanitlar/faz-0/fizik.log) | 10:47:36 | Geçti: 965 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Fizik modelleri, içerik ve yerel ilerleme/rozet kuralları |
| `npm run test:biyoloji` — [biyoloji.log](kanitlar/faz-0/biyoloji.log) | 10:47:36 | Geçti: 382 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel varlıklar | Model motorları, görev tamamlama koşulları, etkileşim sözleşmesi |
| `npm run test:cografya` — [cografya.log](kanitlar/faz-0/cografya.log) | 10:47:36 | Geçti: 73 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel varlıklar | Coğrafya modelleri, müfredat/etkileşim kaydı, görev koşulları |
| `npm run test:tarih` — [tarih.log](kanitlar/faz-0/tarih.log) | 10:47:36 | Geçti: 0 hata; toplam sayı raporlanmıyor | 0 | Başarısızlık yok; ürün değişikliği yok | Yerel veri | Tarih atlası model sözleşmesi; kaynak geometri veya canlı harita doğrulaması değildir |
| `npm run test:tts-cache` — [tts-cache.log](kanitlar/faz-0/tts-cache.log) | 10:47:36 | Geçti: 4 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Ses girdisi/sürümü/kişiselleştirme değişiminde önbellek anahtarı |
| `npm run test:padisah-sesi` — [padisah-sesi.log](kanitlar/faz-0/padisah-sesi.log) | 10:47:37 | Geçti: 8 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Anlatım metni, kayıt sürümü, sessiz mod, zaman çizelgesi |
| `npm run test:anasayfa` — [anasayfa.log](kanitlar/faz-0/anasayfa.log) | 10:47:37 | Geçti: 33.330 izdüşüm; 5 bölüm durağı; 0 hata | 0 | Başarısızlık yok; ürün değişikliği yok | Yok | Kitap ana sayfasının mevcut hareket modeli |
| `npm run bench:test` — [bench-test.log](kanitlar/faz-0/bench-test.log) | 10:47:37 | Geçti: 25 / 0 | 0 | Başarısızlık yok; ürün değişikliği yok | Yok; mathjs | Karşılaştırma aracının doğrulayıcısı; gerçek model kalitesini ölçmez |
| `npm run build` — [build.log](kanitlar/faz-0/build.log) | 10:48:11 | Geçti: 1 / 0; boyut uyarısı var | 0 | Mevcut paket boyutu uyarısı | Kurulu npm bağımlılıkları; Vite yerel yapılandırması | Üretim derlemesi, tembel yüklenen sayfalar, çevrimdışı önbellek paketi |
| `node docs/ai-koc/kanitlar/faz-0/lesson-event-thenable.mjs` — [lesson-event-thenable.log](kanitlar/faz-0/lesson-event-thenable.log) | 10:54:33 | Geçti: 3 / 0; mevcut ürün boşluğu doğrulandı | 0 | Mevcut yazma boşluğu yeniden üretildi; düzeltme yok | Kurulu Supabase; yalnız sentetik istek taklidi | LessonReader void insert ifadesinin istek başlatmaması; await karşılaştırması |

## Geçen testlerin gizlemediği mevcut sorunlar

- **Ders olayları:** `src/components/lessons/LessonReader.jsx:112` ve `:169`, `.insert()` sonucunu yalnız `void` ile bırakıyor. Kurulu PostgREST istemcisinde istek `then` tüketilince başlıyor. [Sentetik deney](kanitlar/faz-0/lesson-event-thenable.mjs), mevcut biçimde sıfır; `await` biçiminde bir taklit çağrı ölçtü. Gerçek ağ/sunucu kaydı sıfır. Bu nedenle “ders olay tablosu var” ile “ders olayı yazılıyor” ayrı gerçeklerdir. Mevcut ders testleri bu yazma zincirini kapsamıyor.
- **İçerik derinliği:** 185 ders denetiminde 32 ders uyarı aldı; komut 0 ile bitti. Bunlar bu görevde yaratılmadı/düzeltilmedi. İlgili derslerin adları ve eksik katmanlar [içerik günlüğünde](kanitlar/faz-0/lesson-content.log).
- **Derleme boyutu:** Vite 500 kB üstü paket uyarısı verdi. Ana paket 17.163,15 kB (sıkıştırılmış 4.791,90 kB); dört dil paketi yaklaşık 865–941 kB; çevrimdışı önbellek 231 girdi / 37.172,09 KiB. Derleme 25 saniye sürdü. Bu sayılar gerçek cihaz performansı ölçümü değildir.
- **Canlı testin mevcut zayıflığı:** `scripts/test-ai-coach.mjs` onay öncesi yazma kontrolünde önce/sonra farkı ölçmüyor; `check(..., true)` kullanıyor. Bu betiğin bir gün başarılı çalışması bile tek başına yazma onayı güvenliğinin kanıtı sayılamaz.

## Çalıştırılmayanlar ve gereken koşullar

| Komut/alan | Durum ve nedeni | Gereken koşul / ölçülmeyen kapsam |
|---|---|---|
| `node scripts/test-ai-coach.mjs …` | Çalıştırılmadı; gerçek öğrenci hesabı, canlı veri ve gerçek model çağrısı kullanıyor, sohbet/kullanım kaydı oluşturabilir | Açık yetki ve ayrılmış sentetik test hesabı/ortamı; canlı uçtan uca sohbet ve kayıt doğrulanmadı |
| `node scripts/eval-ai-coach.mjs` | Çalıştırılmadı; sentetik öğrenci kullansa da ortamdan veya `.env.local` dosyasından anahtar alarak OpenAI çağrısı yapıyor | Model çağrısı için yetki/bütçe; cevap kalitesi, sayısal sadakat ve maliyet ölçülmedi |
| `npm run bench`, `npm run bench:smoke`, `node scripts/bench-ayt.mjs` | Çalıştırılmadı; gerçek sağlayıcı çağrıları yapabilen değerlendirmeler | Yetkili maliyet sınırı ve sabit değerlendirme kümesi |
| `npm run diagnose:solve` | Çalıştırılmadı; teşhis betiği canlı sağlayıcı bağlantısı gerektirebilir | Ayrı kontrollü inceleme; başlangıç yerel testinin yerine geçmez |
| `npm run seed:lessons`, diğer seed / migration / ses üretim / atlas üretim komutları | Çalıştırılmadı; veri/varlık yazan üretim veya kurulum işlemleri | Faz 0 kapsamı dışı |
| `npm run yayin:dogrula` | Çalıştırılmadı; yayın istenmedi. İçindeki ana sayfa testi ve üretim derlemesi ayrı geçti | Temiz main ve onaylı yayın işi; bu rapor yayın kapısı yerine geçmez |
| Canlı Supabase şeması ve bütün tabloların gerçek RLS durumu | Canlıya bağlanılmadı. Yalnız depodaki SQL ve PGlite kapsamı incelendi | Onaylı salt okuma canlı şema dökümü ve ayrılmış hesaplar; “SQL var” = “canlıya uygulandı” değildir |
| Masaüstü/mobil ve iki cihazla kimlikli uçtan uca öğrenme akışları | Bu komut setinin kapsamı değil | Matrisin kod bulguları ve ayrı tarayıcı gözlemleriyle birlikte okunmalı; dört dil testi bulut senkronizasyonunu doğrulamaz |

## Tekrar üretme ve kapsam sınırı

Komutlar `package.json` ve `scripts/test-*.mjs` kaynakları incelenerek seçildi. AI Koç bağlam/müfredat testleri npm kısayolu olmadığı için doğrudan Node ile çalıştırıldı. AI Soru Çöz ve ses testleri gerçek ağ yerine istek taklidi kullanıyor; veli/canlı ders/defter RLS testleri bellekte geçici PostgreSQL kuruyor. Hiçbir anahtar değeri rapora alınmadı.

Tam süreç metaverisi: [test-sonuclari.json](kanitlar/faz-0/test-sonuclari.json), [build-sonucu.json](kanitlar/faz-0/build-sonucu.json), [lesson-event-sonucu.json](kanitlar/faz-0/lesson-event-sonucu.json).

Bu baz çizgisi mevcut davranışın yerel başlangıç kanıtıdır. Yeni ortak öğrenme ağı, düzeltme/silme yayılımı, bütün kaynakların AI Koç tarafından okunması ve cihazlar arası dil devamlılığı henüz uygulanmış veya doğrulanmış sayılmaz.
