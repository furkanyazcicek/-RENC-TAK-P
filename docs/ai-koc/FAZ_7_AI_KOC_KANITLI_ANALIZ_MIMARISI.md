# Faz 7 AI Koç Kanıtlı Analiz Mimarisi

Tarih: 13 Eylül 2026  
Durum: **Yerel olarak tamamlandı, canlı onay bekliyor**

Bu belge, Faz 6 öğrenci-konu modelini AI Koç'un güvenli ve açıklanabilir
okuma katmanı yapan Faz 7'nin yetkili açıklamasıdır. Faz 7 yeni öğrenci puanı
hesaplamaz, kapalı döngü sonucu yazmaz ve canlı veriye uygulanmaz.

## 1. Sözleşmeler ve veri akışı

Analiz sözleşmesi `ai-coach-analysis@1`, yanıt doğrulama sözleşmesi
`ai-coach-response@1`, sistem istemi `v3-phase7-evidence` sürümündedir. Öğrenci
durumu `student-topic-model@1` ve `student-topic-model-config@1` çıktısından
okunur.

Her mesajda ilk yüklenen bağlam yalnız şunlardan oluşur:

- oturumdaki öğrencinin güvenli hitap adı;
- beyaz listeli onaylı tercihler ile saklama kaynağı/güncellenme tarihi;
- Faz 6 genel görünümünün kısa özeti;
- en çok altı dikkat konusu ve sekiz süreli davranış örüntüsü;
- veri kapsamı, dışlanan/eşleşmeyen kanıt sayısı ve en yeni ölçüm tarihi.

Günlükler, sorular, sohbetler, ödevler, denemeler ve AI Soru Çöz oturumları ilk
bağlam için okunmaz. Konu/tarih/kaynak ihtiyacı deterministik yönlendiriciyle
belirlenir; ayrıntı yalnız ilgili araç çağrısıyla ve sınırlı alanlarla yüklenir.
Eski müfredat/plan bağlamı da ancak mevcut müfredat veya plan aracı gerçekten
çağrıldığında hazırlanır.

## 2. Dar okuma araçları

Sekiz Faz 7 aracı vardır:

| Araç | Verdiği güvenli görünüm |
|---|---|
| `get_student_overview` | Genel projeksiyon, dikkat konuları, örüntüler, onaylı tercihler ve kapsam |
| `get_topic_analysis` | Kanonik konu, ayrı kaynak özetleri, güven/çelişki ve opak kanıt bağları |
| `get_learning_timeline` | En çok 90 gün ve 40 opak olaylık zaman çizelgesi |
| `get_academic_context` | Deneme, ödev, sorunlu soru ve AI Soru Çöz için sınırlı yapılandırılmış alanlar |
| `get_language_progress` | Dört bağımsız dil programında beceri projeksiyonları |
| `get_coaching_history` | Önceki öneri/plan karar kaydı; sonuç değerlendirmesi değil |
| `get_data_coverage` | Kullanılabilirlik, eksik kaynak, dışlama ve karantina görünümü |
| `get_authorized_evidence_detail` | Yalnız oturum öğrencisinin etkin opak kanıt bağının kaynak/tarih/sınıf bilgisi |

Araç şemaları öğrenci kimliği kabul etmez. Kimlik yalnız doğrulanmış sunucu
oturumundan gelir ve her sorgu `student_id` ile yeniden daraltılır. Sonuç sayısı
40, kanıt bağı 24, araç yanıtı 8.000 karakter ile sınırlıdır. Ham cevap, soru,
PDF, mesaj, öğretmen yanıtı, öğrenci notu ve özel yazı döndürülmez. Büyük sonuç
geçersiz kesilmiş JSON yerine `tool_result_size_limit` durum zarfına dönüşür.

## 3. Konu etrafında kaynak birleştirme

AI Koç tek tabloyu başarı gerçeği saymaz. Faz 6'nın kaynak alt özetleri ders
maruziyeti, soru kütüphanesi, AI Soru Çöz yardım/hata sinyali, platform dışı
öğrenci beyanı, deneme, atlas/simülasyon ve dil kaynaklarını konu kimliği
etrafında ayrı tutar. Genel deneme konu kimliği üretmez. Karşılaştırılabilir
kaynaklar çelişiyorsa fark görünür kalır; ortalamayla kapatılmaz. Yardım
sonrası doğru, bağımsız doğruyla aynı ağırlıkta sunulmaz.

Kullanıcının metnindeki kayıtlı konu adı yalnız doğrulanmış başlangıç özeti veya
müfredat defterinden deterministik olarak çözülür. Tek bir sonuç yoksa durum
`ambiguous` ya da `unresolved` kalır; rastgele konu seçilmez.

## 4. Yanıt ve iddia doğrulama kapısı

Sistem istemi gerçek, çıkarım, öneri ve belirsizliğin anlamını ayrı tanımlar.
Yanıt öğrenciye gönderilmeden önce tamamı sunucuda kontrol edilir. Kapı en az
şunları reddeder:

- kanıt paketinde olmayan yüzde, tarih ve soru/net/süre sayısı;
- konu kimliği ile kanonik başlık uyuşmazlığı;
- düşük güveni kesinlik veya kişilik etiketi gibi sunma;
- eksik kapsamı “bütün kaynaklar” diye anlatma;
- başka öğrenciye ait veya bilinmeyen opak referans;
- dışlanmış, tombstone edilmiş ya da etkin olmayan kanıta dayanma;
- onay bekleyen öneriyi yapılmış/kaydedilmiş çalışma gibi anlatma;
- iç sistem istemi, araç şeması veya gizli anahtar ayrıntısı sızdırma.

Doğrulama geçmezse şüpheli cevap ve eylem kartları öğrenciye gönderilmez;
veri yokluğu, servis erişilemezliği veya doğrulama reddi için kısa ve sakin
geri dönüş kullanılır. `available`, `empty`, `not_found`, `degraded`,
`unavailable` ve `forbidden` birbirinden ayrıdır.

## 5. Hafıza ve güvenlik sınırı

Onaylı tercih, Faz 6 türetilmiş durum, süreli davranış örüntüsü ve koçluk karar
geçmişi ayrı kalır. Serbest not/hassas anahtar başlangıç bağlamına girmez.
Öğrencinin “unut” isteği `forget_student_memory` ile yalnız onay kartı üretir;
silme ancak mevcut eylem uç noktasında açık onaydan sonra, aynı öğrenci ve
beyaz listeli anahtarlarla yapılır.

Kaynak metinleri ve eski sohbet özeti/mesajları güvenilmeyen veri etiketiyle
taşınır; sistem rolüne yükseltilmez. Kaynak metninden araç adı/parametresi veya
SQL üretilemez. Modelin genel SQL ya da `service_role` erişimi yoktur.

## 6. Gözlem ve performans

`ai-coach-observation@1` yalnız araç sayısı/gecikmesi, hata sayısı, kaynak ve
kanıt bağı sayısı, doğrulama reddi, token kullanımı ve bağlam karakter sayısını
tutar. Ham öğrenci mesajı ve ham kaynak içeriği ölçüme kopyalanmaz.

Sentetik kabul koşusunda başlangıç bağlamı 3.868 karakterdir. 10.000 sentetik
kanıt paketinin iddia defteri son koşuda 8,382 ms'de kurulmuştur; bu yerel ölçümdür ve canlı
SLA iddiası değildir. Sabit yedi değerlendirme sorusu başlangıçtaki 1 geçti,
1 kısmi, 5 başarısız düzeyinden finalde 7/7'ye çıkmıştır.

## 7. Yerel kabul ve faz sınırı

- [Nihai kabul](kanitlar/faz-7/faz-7-kabul-sonucu.json): 8 bölüm,
  137 doğrulama, 11/11 kapı.
- [Başlangıç değerlendirmesi](kanitlar/faz-7/faz-7-baslangic-degerlendirmesi.json)
  ve [final karşılaştırması](kanitlar/faz-7/faz-7-degerlendirme-sonucu.json):
  sabit yedi soru, +6 mutlak geçiş iyileşmesi.
- [Zorunlu komutlar](kanitlar/faz-7/regresyon-komutlari.json): Faz 1–7,
  müfredat, soru ilerlemesi, AI Koç, AI Soru Çöz, ana sayfa ve production build
  dâhil 14/14.
- [Yetki matrisi](kanitlar/faz-7/guvenlik-yetki-matrisi.json): oturum kimliği,
  kullanıcılar arası ret, veri sınırı, ham içerik yasağı ve onaylı yazı geçti.

Faz 7 için migration yoktur; Faz 2–6 migration dosyaları değişmemiştir. Canlı
Supabase, gerçek öğrenci/yedek, gerçek backfill, ücretli model, deploy ve Git
push kullanılmadı. Öneri–onay–uygulama–sonuç ilişkisini otomatik değerlendiren
kapalı döngü bilinçli olarak Faz 8'e bırakılmıştır.
