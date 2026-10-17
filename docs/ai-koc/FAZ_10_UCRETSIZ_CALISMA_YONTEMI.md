# Faz 10 — ek model ücreti olmadan çalışma yöntemi

18 Ekim 2026 tarihli devam yetkisiyle uygulanan teknik yöntemdir. Ürün hafızasındaki birleşik öğrenme, kaynak doğruluğu, öğrenci sınırı ve onaylı görev hedefleri korunur.

## Çalışma ve ücret sınırı

Koç, mevcut Supabase ve barındırma üzerinde çalışır. Öğrencinin kendi güncel kayıtlarını Faz 6 öğrenci modelinde birleştirir; Türkçe istekten sınırlı koçluk niyetini seçip doğrulanmış verilerle yanıt üretir. Bir dil modeli sağlayıcısına istek göndermez. Serbest genel bilgi sohbeti veya ders sorusu çözen bir üretici model olduğunu iddia etmez. Ücretli sohbet yolu kodda kapalı kalır; sağlayıcı anahtarı bulunması bu kapıyı açamaz.

Eski akademik kayıtlar her okumada kendi yetkili tablolarından dönüştürülür. Böylece toplu öğrenci kaydı değişikliği, zorunlu geriye doldurma veya sürekli çalışan ayrı bir sunucu gerekmez. Yeni ders, soru, dil ve atlas sonuçları mevcut kaynak sözleşmelerinden kanıt defterine gelir. Yerel dil geçmişi yalnız öğrencinin kendi cihazında, mevcut açık aktarım akışıyla hesaba bağlanır.

Konu analizi kanıt türlerini ayırır; eksik, eski ve çelişkili veriyi belirtir. Hedef sınav, sınav tarihi ve günlük kapasite yalnız öğrenci onayından sonra değişir. Görev önerileri önizlenir; onaydan sonra yeni kaynak sonuçları göreve bağlanır. Doğrulanmış çalışma, ustalık anlamına gelmez.

Ücretsiz sonuç karşılaştırması, aynı konu ve aynı kaynak grubunda önceki 30 gün ile görevden sonraki doğrudan soru sonuçlarını kullanır. Her iki tarafta en az 10 işaretlenmiş soru gerekir. Yetersiz veya karşılaştırılamayan ölçümde sonuç değerlendirilemez olarak kalır. İyileşme bir neden-sonuç iddiası değildir. Kaynak düzeltme/silme zinciri güncel hesabı ve görev durumunu yeniden belirler; eski sonuç önbelleği geçersizleşir.

## Geçiş sınırı ve kanıtın anlamı

Önceki `UCRETSIZ_KOC_REHBERI_KARARI.md` yalnız dört kaynağı okuyan sınırlı rehberi anlatır ve bu uygulamanın nihai kabulü değildir. Bu yöntem onun yerine birleşik Koç'u kullanır. Eski LLM pilotunun token bütçesi, model yanıt örneklemi ve ücretli tam platform klonu bu motorun çalışması için gerekli değildir; bu kontroller yapılmış gibi işaretlenmez. İnsan kullanımıyla uzun dönem eğitim etkisi ayrıca gözlenir; teknik kabul böyle bir etkiyi kanıtlamaz.

Geri kazanım, güncel **uygulama public şeması** üzerinden ücretsiz yerel PostgreSQL'de sınanır. Auth kimlik ve Storage şema sözleşmeleri yerelde taklit edilir; gerçek parola, Storage dosyası veya fiziksel Supabase geri yüklemesi yapılmış sayılmaz. Geçiş mevcut Auth/Storage verisini yeniden yazmaz. Ana kaynak kayıtları silinmez veya toplu değiştirilmez.

Canlı geçişten önce bu yedekle migration zinciri, RLS, kaynak RPC'leri ve kapalı döngü sınanır. Geçiş küçük işlemler hâlinde uygulanır; süre ve kilit sınırında hata atomik olarak geri alınır. Başarılı ek şemayı veri silerek geri almak yerine Koç/yazma bayrakları kapatılır ve ileri düzeltme kullanılır. Ücretli kaynak, servis veya proje açılmaz.

Yerel yayımlanmamış ders/soru değişiklikleri bu işin kapsamı değildir. Yayın manifesti yalnız seçilen kod durumundan yeniden üretilir; bu iş için içerik sahibinin ilgisiz ders onayı verilmiş gibi kayıt oluşturulmaz.

## Kabul kaydı

Gerçek sonuçların tek yeri `kanitlar/faz-10/` altındaki yeni ücretsiz motor kabul kaydıdır. Yerel test, gerçek verinin yerel kopyası, canlı SQL ve yayımlanmış HTTP gözlemi ayrı belirtilir. Ücretli model çağrısı sıfır olmalıdır. Tamamlanma, canlı geçiş ve yayın gözlemi olmadan ilan edilmez.
