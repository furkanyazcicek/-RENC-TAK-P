# Faz 10 — Kontrollü Pilot ve Geri Dönüş Planı

> 18 Ekim 2026: Bu belgenin önceki yöntem/durum kayıtları tarihseldir. Güncel ücretsiz birleşik Koç için [çalışma yöntemi](FAZ_10_UCRETSIZ_CALISMA_YONTEMI.md) ve [faz durumu](FAZ_DURUMU.md) geçerlidir. Eski bekleyen kontroller geçmiş gibi işaretlenmemiştir.

Durum: **Yalnız plan. Pilot başlatılmadı; gerçek öğrenci alınmadı.**

## 11 Ekim 2026 — hızlandırılmış genel açılış kararı

Ürün sahibi Faz 10 koşullarının esnetilmesini ve ilk hedefin yalnız kendi hesapları değil, **tüm öğrencilere hızlı açılış** olmasını istedi. Bu karar aşağıdaki tarihsel `2 + 3 + 7 gün` takvimini **sabit bekleme süresi olarak** değiştirir; gerçek gözlem, örnek ve güvenlik kapılarını geçmiş saymaz. Nihai ürün hedefi ve veri yetki sınırı değişmez.

Hızlandırılmış sıra, her basamak gerçekten ölçüldüğünde ilerler:

1. Aynı gün en az 24 ayrı sentetik senaryoyu gerçek değerlendiriciyle çalıştır; sonuçlar önceden `true` doldurulmuş kayıtlar olamaz. Faz 9 kritik kalite eşikleri ve bütün güvenlik testleri geçmelidir.
2. Ürün sahibine ait kimliği kesin belirlenmiş en az bir test hesabında, önce yalnız okuma/analizle uçtan uca akışı ve geri dönüşü dene. İnsan incelemesi için en az 12 gerçek Koç çıktısını, kaynak dayanağı ve yanlış sayı/konu açısından kaydet. Hesap sahibi seçilmeden herhangi bir gerçek hesaba bayrak açma.
3. Ayrı bilgilendirilmiş en çok 20 öğrencilik sınırlı grupta en az bir tam günlük kullanım döngüsünü ve en az 12 gerçek Koç çıktısını ölç. Yeterli kullanım yoksa takvim doldu diye geçme; kritik güvenlik/mahremiyet olayı, veri farkı, çift sayım ve onaysız yazma sıfır olmalıdır. Önce analiz, sonra yalnız kabul kanıtıyla öneri; görev yazma ayrı kapıda kalır.
4. Genel açılışı tek seferde değil, küçük grup/yüzde → geniş grup → tüm öğrenciler sırasıyla yap. Her basamakta aşağıdaki durdurma eşiklerini ve gerçek maliyet/gecikme bütçesini yeniden denetle. Ölçüm oluşmayan basamak geçilmez.

Takvim yerine kanıtla ilerlemek, yedek/geri kazanım, doğru canlı hedef, migration ve RLS (satır düzeyi erişim) doğrulaması, gizlilik-bilgilendirme incelemesi, ücret sınırı, temiz `main` yayın kapısı veya geri dönüş tatbikatını esnetmez. OpenAI üzerinden çalışan Koç sohbeti kullanım başına ücret doğurabildiği için mevcut “ek ücret yok” kısıtıyla uyumlu açık bir harcama sınırı doğrulanmadan tüm öğrencilere açılmaz. Bu karar tek başına ücretli çağrı, canlı yazma veya yayın yetkisi değildir; önceki açık canlı işlem yetkisi güvenlik kapılarına bağlı kalır.

Aşağıdaki `2 + 3 + 7 gün` sırası tarihsel başlangıç planı olarak korunur. Hızlandırılmış yolda yukarıdaki örnek ve bir günlük gerçek kullanım koşulları onun yerine geçer; genel kabulün diğer sayısal eşikleri aynen geçerlidir. Faz 10 ancak gerçek koşu sonuçlarıyla tamamlandı sayılabilir.

## Başlatma ön koşulları

Pilot ancak Faz 9’un 9/9 kabul kapısı, bütün zorunlu runner komutları, üretim derlemesi ve bağımlılık taraması geçtiğinde değerlendirilebilir. Ayrıca ürün sahibinin açık yazılı onayı, canlı migration planı, gizlilik/saklama metni incelemesi, seçilmiş test hesabı listesi ve geri dönüş sorumlusu gerekir. Bu koşullardan biri yoksa özellik bayrakları kapalı kalır.

## Kademeli sıra

1. **Sentetik hesaplar — 2 gün, en az 24 profil.** Bütün kaynaklar gölgede çalışır; gerçek kullanıcıya görünmez. Kaynak/kanıt farkı sıfır, kritik kalite yüzde 100 olmalıdır.
2. **Ürün sahibinin açıkça seçtiği test hesapları — 3 gün, 3–5 hesap.** Önce yalnız okuma/analiz; yazma kill switch kapalı. Ürün sahibi her gün örnekleri ve gizlilik açıklamasını inceler.
3. **Sınırlı pilot — 7 gün, en fazla 20 açıkça seçilmiş öğrenci.** Ayrı bilgilendirme ve uygun onay tamamlanır. Kaynaklar sırayla açılır; bütün kaynaklar aynı gün açılmaz.

Kaynak açılış sırası: günlük çalışma ve denemeler; ödev/sorunlu soru; ders ve soru kütüphanesi; AI Soru Çöz; dört dil; atlas/simülasyon; AI Koç öneri ve sonuç döngüsü. Tarihsel planda her sıra için en az bir tam günlük sağlıklı ölçüm aranırdı. Hızlandırılmış yolda bu sabit süre yerine her kaynak için gerçek olay, uzlaştırma, yetki ve geri dönüş kanıtı aranır; yeterli örnek varsa birkaç kaynak aynı gün ilerleyebilir. Hiçbir kaynak yalnız takvim kısaldı diye sessizce atlanmaz.

## Test hesabı teknik sınırı

AI Koç sohbet/eylem kapısı için pilot kimlikleri yalnız sunucu ortamındaki `AI_COACH_PILOT_STUDENT_IDS` listesine yazılır; istemci, sohbet isteği veya Git kanıtına gerçek kimlik eklenmez. Liste boşsa, bozuksa, yinelenen kimlik içeriyorsa veya 20 hesabı aşıyorsa sohbet/eylem pilotu açılmaz. Liste mevcutken analiz yüzdesi ya da grup etiketi liste dışındaki öğrenciye erişim veremez; pilot modu ayrıca kapatılamaz. `AI_COACH_ANALYSIS_MODE=enabled` olmadan analiz, `AI_COACH_WRITES_ENABLED=true` ve aynı öğrenci için analiz erişimi birlikte olmadan yazma açılamaz. Yüzdesel genel açılış ayrıca `AI_COACH_GENERAL_RELEASE_ENABLED=true` ister.

Sunucu karar modülü aynı listeyle kaynak olayı ve projeksiyon kararını da seçili hesaplarla sınırlar. Veritabanında bunun yanında `learning_private.learning_feature_flags` küresel `source_events`, `projection`, `coach_analysis` ve `coach_writes` kayıtları kapalı kalır; yalnız seçilmiş hesapların `learning_private.learning_student_feature_flags` satırları kaynak ve aşamaya göre açılabilir. Kaynak olay tetikleyicisi veritabanındaki öğrenci bayrağını gerçekten kontrol eder. Projeksiyon yürütücüsünün bu kararı canlıda uyguladığı henüz kanıtlanmadı; yürütücü/bayrak entegrasyonu doğrulanmadan projeksiyon açılmaz. Sunucu ve veritabanı kapıları ayrı ayrı doğrulanmadan hiçbir gerçek hesaba gölge veya görünür sonuç açılmaz. Hızlandırılmış yolda ürün sahibinin kimliği kesin belirlenmiş en az bir test hesabı seçilene, gizlilik incelemesi ve diğer canlı ön koşullar geçene kadar ortam veya veritabanı bayrakları uygulanmaz. [Sentetik sunucu karar sınırı kanıtı](kanitlar/faz-10/faz-10-test-hesabi-acilis-siniri.json) canlı hesap seçimi, veritabanı bayrağı uygulaması veya pilot başlatma kanıtı değildir.

Yeni sohbet, eylem ve özet yolu ayrıca yalnız oturumdaki öğrencinin kararını döndüren `learning_coach_own_rollout` RPC'sini ister. Faz 10'a eklenen [dar migration](../../supabase/migration_learning_coach_pilot_gate.sql), Faz 9 özel bayrak şemasından sonra uygulanır; eski migration dosyaları değişmez. `coach_analysis` yalnız öğrenci kapsamlı `enabled` bayrakla açılır. Yeni yazılar için ayrı `coach_writes` öğrenci bayrağı da gerekir. RPC yoksa, hata verirse veya geniş kaynak/küresel bayrak açılsa bile yeni Koç kapalı kalır; `safe_fallback` açıksa eski Koç devam eder. [27 yerel sentetik doğrulama](kanitlar/faz-10/faz-10-koc-veritabani-kapisi.json) PGlite ile gerçek PostgreSQL yetki davranışını kapsar; canlı PostgREST/RLS veya pilot açılışının kanıtı değildir.

Pilot dışındaki hesaplarda `safe_fallback` açıkken mevcut Koç sohbeti eski öğrenci özeti, eski istem ve 12 eski araçla devam eder. Eski dört onaylı eylem çalışabilir; yeni görev eylemleri bu yolda reddedilir. Seçili test hesabında yeni analiz açık ama yazma kapalıysa eski ve yeni Koç eylemleri birlikte kapalıdır. Yeni görev/projeksiyon özeti pilot dışı hesaba sorgulanmaz veya gösterilmez; eski öneri korunur. Eski şemada günlük eylemi yalnız kaynak-özel RPC'nin bulunmadığı doğrulanınca önceki öğrenci-kapsamlı tablo yoluna düşer; Faz 4 şeması uygulanınca aynı eylem kaynak-özel RPC kullanır. Önceden kaydedilmiş eski onay kartları için tekrar denemede çift kayıt riski tarihsel eski davranışın açık sınırlamasıdır; gerçek hesapta ölçülmeden güvenli kabul edilmez. [21 sentetik uyumluluk kontrolü](kanitlar/faz-10/faz-10-eski-koc-uyumluluk.json) gerçek model/öğrenci uçtan uca kanıtı değildir. Acil durumda eski Koç yazıları da durdurulacaksa `AI_COACH_SAFE_FALLBACK_ENABLED=false` ile yeni analiz/yazma bayrakları birlikte kapatılır.

## Günlük kontrol listesi

Yerel nesil etkinleştirme, toplu tekrar seçimi ve artımlı işleme yolları Faz 9 kararını öğrenci bazında sorgular: [38 sentetik doğrulamada](kanitlar/faz-10/faz-10-projeksiyon-gorunurlugu.json) yalnız seçilen hesabın sonucu görünür ve işlenebilir kaldı; liste dışı ve gölge kipin görünürlük sınırı korundu. Bayrak tamamen kapalıyken ne öğrenci modeli ne tanısal projeksiyon boş nesil oluşturdu; pilot dışı hesabın açıkça istenen tanısal tekrar işlemi nesil, artımlı işleyici veya imleç açılmadan reddedildi. Öğrenciye özel geri dönüş yordamı bayrağı kapatıp önceden görünür model/örüntü satırlarını tek işlemde gizledi. [İki kilit sırasının gerçek çoklu bağlantılı yerel PostgreSQL provası](kanitlar/faz-10/faz-10-projeksiyon-yaris.json) da geçti. Bu testler üretim yürütücüsünün gerçek iş planını, canlı platform yetkilerini veya pilot geri dönüşünü kanıtlamaz; canlı projeksiyon açılmadan ayrıca doğrulanır.

[Yerel işletim provası](kanitlar/faz-10/faz-10-projeksiyon-isletim-provasi.json) seçilmiş hesapları önce yalnız okur; uygulama kipine geçilirse aynı sonucu yeniden üretir ve kısmi başarısızlıkta etkilenen hesapları öğrenciye özel geri dönüş yordamıyla kapatır. 32 kontrol geçti: yazma/geri dönüş sentetik bellekte, kuru karşılaştırma gerçek yerel PostgreSQL'de sınandı. [Yerel PostgreSQL kuru-prova komutu](../../scripts/phase-10-projection-dry-run.mjs) yalnız `localhost`/`127.0.0.1`/`::1` hedefini kabul eder, bağlantıyı salt okunur açar, sunucunun bildirdiği adresi de denetler ve öğrenci kimliği/ham model satırı basmaz. Canlı çalışma komutu, zamanlayıcı veya gerçek pilot çalıştırması henüz yoktur; bunlar ayrıca doğrulanmadan gölge faz başlatılmaz.

[Gerçek PostgreSQL üzerinde sentetik uygulama/geri dönüş provası](kanitlar/faz-10/faz-10-projeksiyon-pg-uygulama.json) 10 kontrolle geçti: kuru ve yazılan checksumlar eşleşti; ikinci hesapta zorlanan hata hem o hesabı hem önceki seçili hesabı kapatıp görünür projeksiyon satırlarını gizledi. Faz 2/Faz 6 migrationları ve Faz 9 öğrenci bayrağı bölümü kullanıldı; tam canlı zincir ve gerçek öğrenci verisi üzerinde işlem yapılmadı.

- Kaynak başına son başarılı olay yaşı ve reddetme nedeni.
- Kuyruk büyüklüğü, en eski bekleyen olay ve projeksiyon yaşı.
- Alan kaydı/kanıt uzlaştırma farkı; karantina ve tekrar oranı.
- AI araç hata/zaman aşımı, iddia reddi, p50/p95 yanıt gecikmesi ve tahmini mesaj maliyeti.
- Kırık görev hedefi ve dil aktarım hata oranı.
- En az iki sentetik kalite senaryosunun yeniden koşusu.
- Pilot hesabından yalnız izinli, içeriksiz operasyon özeti; alarm gövdesinde öğrenci metni yok.
- Açılan kaynak, rollout sürümü, olay sözleşmesi ve model sürümü kaydı.

## Kritik durdurma eşikleri

Aşağıdakilerden biri oluşursa yeni olaylar ilgili kaynakta kapatılır, AI Koç yazma anahtarı kapatılır ve gerekirse analiz eski güvenli davranışa döner:

- herhangi bir çapraz kullanıcı okuma/yazma veya gizli anahtar sızıntısı;
- veri uzlaştırma farkının sıfırdan farklı olması;
- veri kaybı, aynı kanıtın iki kez sayılması veya silinen sonucun yaşamaya devam etmesi;
- kritik kalite/güvenlik senaryosunda yüzde 100’ün altı;
- karantina oranı > %1 veya olay reddi > %2;
- projeksiyon yaşı > 15 dakika ya da kuyruk gecikmesi > 5 dakika;
- AI araç hata oranı > %2 veya iddia doğrulama reddi > %1;
- kırık hedef oranı > %0,5 veya dil aktarım hatası > %2;
- AI Koç toplam yanıt p95 > 60 saniye ya da mesaj maliyeti p95 > 0,01 ABD doları;
- öğrenciye iki koç yanıtının birlikte görünmesi veya gölge çıktının ham içerikle saklanması.

## Geri dönüş sorumluluğu ve adımları

Birincil karar sahibi ürün sahibidir; teknik uygulama sahibi öğrenme platformu sorumlusudur. Güvenlik/mahremiyet olayında güvenlik sorumlusu durdurma kararını tek başına başlatabilir.

1. `AI_COACH_WRITES_ENABLED=false` ile bütün koçluk yazılarını durdur.
2. Sorun analizdeyse `AI_COACH_ANALYSIS_MODE=disabled`; kaynakta ise ilgili `LEARNING_SOURCE_EVENT_OVERRIDES` değerini kapat.
3. Projeksiyonu `shadow` veya `disabled` moda al; son doğrulanmış tüketici görünür nesli koru.
4. Kuyruğu silme. Yeni denemeleri durdur, cursor ve idempotency makbuzlarını koru.
5. Kişisel içerik olmadan etkilenen kaynak, zaman aralığı, sözleşme/model/rollout sürümü ve sayım farkını kaydet.
6. Sentetik replay ile kök nedeni doğrula; düzeltmeden sonra tam/artımlı checksum eşitliğini yeniden çalıştır.
7. Ürün sahibinin açık onayı olmadan kaynağı veya yazmayı yeniden açma.

## Öğrenci geri bildirimi

Pilot geri bildirimi serbest kişisel metin toplamaya zorlamaz. Önce `yararlı / yararlı değil / emin değilim` ve sınırlı neden kodları kullanılır. İsteğe bağlı serbest metin ayrı bilgilendirme ve saklama kararı olmadan öğrenme kanıtına kopyalanmaz. Yanlış eşleme bildirimi puanı doğrudan değiştirmez; inceleme ve yeniden hesaplama talebi oluşturur.

## Genel kullanıma geçiş kapıları

- Sınırlı pilotta kritik güvenlik/mahremiyet olayı: 0. Hızlandırılmış yolda en az bir tam günlük gerçek kullanım döngüsü ve en az 12 incelenmiş gerçek Koç çıktısı gerekir; kullanım yetersizse süre dolması geçiş nedeni değildir.
- Her gün ve toplamda uzlaştırma farkı: 0; veri kaybı/çift sayım: 0.
- Kritik kalite metrikleri: %100; açıklık/uygulanabilirlik: en az %90.
- On iki örnek ürün sahibi/insan incelemesi tamamlanmış ve kritik itiraz yok.
- Olay reddi ≤ %2, karantina ≤ %1, dil aktarım hatası ≤ %2.
- Projeksiyon yaşı p95 ≤ 15 dakika, kuyruk gecikmesi p95 ≤ 5 dakika.
- AI araç hata oranı ≤ %2, kırık hedef ≤ %0,5.
- Toplam yanıt p95 ≤ 60 saniye ve tahmini mesaj maliyeti p95 ≤ 0,01 ABD doları.
- Gizlilik/saklama metni onaylanmış; hesap silme ve dışa aktarım pilot hesabında yeniden doğrulanmış.
- Ürün sahibinden genel kullanım için ayrı açık onay alınmış.

Bu plan kendiliğinden pilot veya yayın yetkisi oluşturmaz. Canlı migration ve rollout adımları yalnız tek yetkili masaüstü kopyasında, temiz `main` dalında ve ayrıca verilmiş yayın onayıyla uygulanır.
