# Codex Uygulama İstemi — Faz 0: Gerçek Envanter ve Temel Ölçüm

## Görevin

AI Koç birleşik veri ağı programının Faz 0'ını baştan sona tamamla. Bu fazda yeni ürün davranışı veya canlı veritabanı değişikliği yapma. Amaç, sonraki fazların yanlış varsayım üzerine kurulmasını engelleyen eksiksiz ve kanıtlı bir mevcut durum haritası oluşturmaktır.

## Başlamadan önce

Şu dosyaların tamamını oku:

- AGENTS.md
- CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- README.md
- package.json

Çalışma alanının durumunu incele. Kullanıcının ilgisiz değişikliklerini geri alma, biçimlendirme veya taşıma. Alt klasörlerde ek AGENTS.md varsa kapsamına göre uygula.

## İncelenecek alanlar

Yalnız bilinen dosyalara bakıp durma. Öğrenciye açık bütün rotaları ve bunların kullandığı veri depolarını çıkar.

En az şunları incele:

- src/App.jsx içindeki öğrenci rotaları ve tembel yüklenen sayfalar;
- src/pages ve src/components altındaki ders, soru, test, deneme, günlük takip, ödev, sorunlu soru, dil, atlas, simülasyon, canlı ders, defter ve AI ekranları;
- src/lib altındaki ilerleme, konu eşleştirme, müfredat, kişiselleştirme ve veri yazma katmanları;
- api/ai-coach, api/ai-solve ve api/_lib;
- supabase altındaki bütün ilgili şema, geçiş ve başlangıç kurulum dosyaları;
- tarayıcı yerel deposu, oturum deposu, yalnız rota durumu veya yalnız bileşen durumu kullanan ilerleme verileri;
- dosyaya gömülü ve veritabanından gelen ders/soru içerikleri arasındaki farklar;
- mevcut testler ve değerlendirme araçları.

## Kaynak matrisi

docs/ai-koc/VERI_KAYNAKLARI_MATRISI.md dosyasını oluştur. Her öğrenci öğrenme yüzeyi için en az şu sütunları doldur:

- modül ve kullanıcı rotası;
- kaynak sahibi;
- yetkili veri kaynağı;
- veri nerede tutuluyor;
- kullanıcı kimliğine bağlı mı;
- sabit kaynak kayıt kimliği var mı;
- ders/konu/kazanım kimliği var mı;
- hangi anlamlı olaylar üretiliyor;
- hangi sonuç ölçülüyor;
- olay düzenlenebilir veya silinebilir mi;
- tekrar gönderim çift kayıt üretir mi;
- mevcut RLS/yetki durumu;
- AI Koç bugün okuyabiliyor mu;
- kanıt gücü;
- önemli boşluk;
- hedef faz;
- “bağlanacak”, “öğrenme sinyali değil” veya “karar gerekli” sonucu.

Bir modül eğitim açısından anlamlı veri üretmiyorsa nedenini yaz. Sessizce listeden çıkarma.

## Mevcut durum raporu

docs/ai-koc/MEVCUT_DURUM_ENVANTERI.md dosyasını oluştur. Şunları kanıtlayan dosya yolları ve ilgili davranışlarla yaz:

- AI Koç'un bugün okuduğu bütün tablolar ve veri sınırları;
- mevcut prompt, araçlar, yazma onayı, sohbet geçmişi, hız sınırı ve kimlik güvenliği;
- var olan müfredat grafiği ve konu eşleştirme temeli;
- yapılandırılmış, paketli ve PDF derslerin farklı kayıt davranışları;
- soru kütüphanesinde sonuçların nerede hesaplanıp nerede kaybolduğu veya saklandığı;
- student_question_set_attempts tablosunun gerçek kullanım durumu;
- dört dilde ilerlemenin gerçek depolama ve kullanıcı ayrımı;
- atlas ve simülasyon ilerleme depoları;
- günlük kayıt, genel deneme, branş denemesi, ödev, sorunlu soru ve öğretmen yanıtlarının kapsamı;
- AI Soru Çöz oturum, yardım, geri bildirim, inceleme ve konu eşleştirme verileri;
- düzenleme ve silme durumunda bugünkü AI Koç bağlamının davranışı;
- cihazlar arası devamlılık;
- eksik şema ile çalışan kurulumlarda davranış;
- gizlilik politikasının mevcut ürünle uyumu.

Eski belgelerdeki iddiaları koddan doğrulamadan gerçek kabul etme.

## Veri akışları

docs/ai-koc/VERI_AKISLARI.md dosyasında her kaynak için şu zinciri göster:

öğrenci eylemi → arayüz işleyicisi → yazma fonksiyonu/API → tablo veya yerel depo → AI Koç bağlamı/araç → öğrenciye çıkan sonuç.

Zincirin koptuğu yeri açıkça işaretle.

## Başlangıç kabul senaryoları

docs/ai-koc/KABUL_SENARYOLARI.md dosyasını oluştur. En az şu sentetik öğrencileri tanımla:

1. Hiç verisi olmayan öğrenci.
2. Aynı konuyu ders, soru kütüphanesi, AI Soru Çöz ve dış çalışmayla çalışan öğrenci.
3. Çok çalışan fakat az soru çözen öğrenci.
4. Ders açmış ancak ölçüm yapmamış öğrenci.
5. Tek soruda başarılı, kanıtı yetersiz öğrenci.
6. Aynı konuda çelişkili kaynakları olan öğrenci.
7. Farklı sınav türlerinde denemeleri olan öğrenci.
8. Konusu eşleşmeyen kayıtları olan öğrenci.
9. Planının çoğunu uygulamayan öğrenci.
10. Dört dilin birinde başka cihazda devam eden öğrenci.
11. Düzeltilmiş veya silinmiş eski kaydı olan öğrenci.
12. Başka öğrencinin kaydına erişmeye çalışan kullanıcı.

Her senaryo için beklenen gerçekler, izin verilen çıkarımlar, yasak çıkarımlar ve beklenen öneri türünü yaz.

## Temel ölçüm ve testler

Mevcut test komutlarını incele ve ilgilileri çalıştır:

- AI Koç bağlam ve araç testleri;
- müfredat ve konu eşleştirme testleri;
- AI Soru Çöz testleri;
- ders belgesi ve kütüphane testleri;
- dört dil testi;
- üretim derlemesi.

Gerçek API anahtarı veya canlı öğrenci verisi gerektiren değerlendirmeleri kontrolsüz çalıştırma. Çalıştırılamayan testi “geçti” sayma; nedeni ve gereken koşulu kaydet.

docs/ai-koc/BAZ_CIZGISI.md dosyasında:

- komut;
- tarih;
- sonuç;
- başarısızlığın mevcut mu yeni mi olduğu;
- dış bağımlılık;
- ölçülen kapsam

bilgilerini tut.

## Mimari karar başlangıcı

docs/ai-koc/MIMARI_KARARLAR.md dosyasını oluştur. Bu fazda çözüm seçmek yerine doğrulanmış karar sorularını kaydet:

- mevcut alan tabloları ile ortak olay ağı arasındaki yetkili kaynak ilişkisi;
- sabit konu kimliği;
- paketli içerik kimliği;
- çift yazmayı engelleme yöntemi;
- düzeltme ve silme modeli;
- yerel dil/atlas verisinin buluta geçişi;
- geriye doldurma;
- düşük güçlü ve yüksek güçlü kanıt ayrımı;
- öğrenciye açıklanabilir kaynak gösterimi;
- veri saklama ve silme.

Her karar için mevcut seçenekler, depo kanıtı, risk ve hangi fazda kesinleşeceğini yaz.

## Kabul kapıları

Fazı ancak şu koşulların tamamında bitir:

- src/App.jsx içindeki her öğrenci rotası kaynak matrisinde karşılık buluyor;
- bütün yerel depolama anahtarları ve sunucu tabloları sahip oldukları modülle eşleşiyor;
- AI Koç'un bugün okuduğu ve okumadığı kaynaklar kanıtlı biçimde ayrılmış;
- konu eşleştirme temeli “yok” diye yanlış raporlanmamış;
- dört dil ayrı ayrı incelenmiş;
- paketli/veritabanı/PDF ders ve soru yolları ayrı incelenmiş;
- düzenleme, silme, tekrar gönderme ve cihaz değişimi boşlukları kaydedilmiş;
- başlangıç testleri gerçek sonuçlarıyla belgelenmiş;
- kabul senaryoları sonraki fazların test girdisi olacak kadar somut;
- yeni ürün kodu, canlı şema veya canlı veri değişikliği yapılmamış.

## Faz sonu

FAZ_DURUMU.md içinde Faz 0 satırını ve ayrıntı bölümünü gerçek kanıtlarla güncelle. Bir eksik kalırsa “Devam ediyor” veya gerçekten ilerlenemiyorsa “Bloke” yaz; “Tamamlandı” yazma.

Son yanıtında kısa biçimde:

- oluşturulan envanter dosyalarını;
- en kritik doğrulanmış boşlukları;
- çalışan ve çalışmayan testleri;
- Faz 1'e geçilip geçilemeyeceğini

bildir.
