# Ücretsiz Koç Rehberi — 12 Ekim 2026 kararı

> 18 Ekim 2026: Bu belgenin önceki yöntem/durum kayıtları tarihseldir. Güncel ücretsiz birleşik Koç için [çalışma yöntemi](FAZ_10_UCRETSIZ_CALISMA_YONTEMI.md) ve [faz durumu](FAZ_DURUMU.md) geçerlidir. Eski bekleyen kontroller geçmiş gibi işaretlenmemiştir.

## Kullanıcı kararı ve ürün sınırı

Ürün sahibi, Faz 10 canlı geçişini bu sürüm için atlayıp ek ücret oluşturmayan bir DRKOÇ koçluk deneyimi istedi. Bu karar Faz 10'un şema, geri doldurma, gölge, pilot ve nihai kabul kapılarını geçmiş saymaz. Tam birleşik AI Koç hedefi `AI_KOC_URUN_HAFIZASI.md` içinde değişmeden durur; bu sürüm onun ücretsiz ve sınırlı bir alternatifidir.

## Uygulanan ücretsiz yol

- `/ai-koc` öğrenci ekranı, geliştirme önizlemesi dışında, kayıt temelli çalışma rehberini açar.
- Ana sayfadaki Koç kartı da aynı rehber sonucunu okur; eski özetle farklı öneri göstermez. Karttan rehbere geçiş telefon ve masaüstü önizlemesinde doğrulandı. Eski sohbet yalnız geliştirme amaçlı, açıkça seçilen eski ekran önizlemesinde görünür.
- Rehber yalnız mevcut günlük çalışma, genel deneme, ödev ve eski plan kayıtlarını, gerekli dar alanlarla okur; serbest not veya öğretmen yanıtı çekmez. Kimlik doğrulanmış oturumdan alınır; sorgular öğrenci kimliği ve veritabanı satır yetkisiyle sınırlıdır.
- Bugünün odağı, haftalık çalışma kaydı, en az 10 bildirilen soru içeren konu sinyali, son genel deneme ve ödev durumu gösterilir. Süre ve öz bildirilen isabet ustalık gibi sunulmaz; veri eksikse kişisel çıkarım gösterilmez.
- Ücretli sohbet sunucuda kapalıdır. Rehber OpenAI veya başka model API'si çağırmaz. Yeni tablo, migration, backfill veya gerçek öğrenci verisi yazısı yoktur.
- Rehber serbest metin sohbeti, tüm modüllerin birleşik analizi, dört dilin bulut ilerlemesi veya otomatik kapalı döngü görev doğrulaması yaptığını iddia etmez.

## Yerel kanıt ve yayın durumu

- `npm run test:ucretsiz-koc`: 13/13 sentetik doğrulama geçti; oturum kimliği, dar okuma, eksik/kesilmiş veri, öneri önceliği ve ücretli sohbet kilidi dâhil.
- `npm run test:ai-koc-faz-10:legacy-compatibility`: 21/21 sentetik doğrulama geçti.
- Faz 8 çekirdek koşusu 19/19 senaryo, 9/9 kapı ve 94 doğrulamayla geçti.
- Ardından Faz 8 tam toplayıcısı 16/16 komut, 19/19 senaryo ve 9/9 kapıyla yeniden geçti; tarihi tam kabul kaydı yarım bırakılmadı.
- Canlı Supabase'e yalnız `limit=0` şema sorgusu yapıldı: rehberin dört mevcut kaynak tablosu ve seçtiği kolonlar 4/4 HTTP 200 döndü. Öğrenci satırı okunmadı ve canlı yazma yapılmadı.
- `npm run test:academic-client`: 19/19 test geçti; `npm run test:anasayfa` geçti; `npm run build` geçti.
- Ek `npm run test:ai-koc-faz-7:all` koşusu 14/14 komut, 137 çekirdek doğrulama ve 11/11 Faz 7 kapısıyla geçti. İlk çekirdek koşu, Eylül'e sabitlenmiş sentetik akademik kayıtların hareketli 30 günlük pencerenin dışına düşmesiyle durmuştu; yalnız örnek tarihleri koşu gününe göre üretilecek biçimde düzeltildi, kabul ölçütü düşürülmedi.
- Geliştirme önizlemesi [390×844 telefonda](kanitlar/faz-10/ucretsiz-koc-telefon.jpg) ve [1440×900 masaüstünde](kanitlar/faz-10/ucretsiz-koc-masaustu.jpg) incelendi; yatay taşma yok. Bu yalnız sentetik görsel kanıttır, gerçek öğrenci uçtan uca doğrulaması değildir.
- Canlı Supabase'te öğrenci satırı, model API'si, deploy ve push kullanılmadı. `npm run yayin:dogrula`, çalışma ağacındaki ilgisiz içerik/ürün değişiklikleri dâhil kaydedilmemiş dosyalar nedeniyle durdu. Bu dosyalar otomatik kaydedilip yayımlanmadı. Temiz `main` ve bu zorunlu kapı geçmeden genel erişim iddia edilemez.
- Üretimdeki eski sohbet uç noktasına oturumsuz, boş bir istek 401 döndü; yereldeki yeni ücret kilidi aynı isteği 503 ile reddeder. Bu fark, ücretsiz sürümün henüz canlıya çıkmadığını gösterir; gerçek öğrenci sohbeti veya model çağrısı yapılmadı.

## Açık sınır

Bu ücretsiz rehber yeni model kullanım ücreti doğurmaz; mevcut barındırma/veritabanı planının genel kapasite sınırlarını sınırsız ücretsiz trafik garantisi olarak yorumlamaz. Tam AI Koç/Faz 10 durumu **Devam ediyor** olarak kalır.
