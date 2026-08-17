# Dr. Koç — Öğrenci Koçluk Platformu

Bu doküman, kod bilmeseniz bile uygulamayı çalıştırıp yayına almanız için
gereken **her adımı** anlatır. Hiçbir adımı atlamayın, sırayla ilerleyin.

---

## 1) Uygulama Ne Yapıyor? (Mantık)

Uygulamanın iki "kapısı" var:

- **Öğrenci girişi:** Kendi deneme sonuçlarını, konu bazlı başarı grafiklerini
  görür ve çözemediği bir soruyu (metin veya fotoğraf olarak) size gönderir.
- **Öğretmen girişi:** Tüm öğrencilerin listesini görür, herhangi birine
  tıklayıp detaylı analiz yapar, o öğrenciye yeni bir deneme sonucu ekler ve
  gelen soruları "İnceleniyor / Derste Çözülecek / Çözüldü" olarak etiketler.

Veriler bir bulut veritabanında (**Supabase**) saklanır, yani tarayıcıyı
kapatsanız bile veriler kaybolmaz. Supabase; Google/Microsoft hesabınızla
saniyeler içinde açabileceğiniz, kredi kartı istemeyen ücretsiz bir bulut
veritabanı servisidir — bir nevi "hazır sunucu".

**Rol nasıl belirleniyor?** Kayıt olurken kişi "Öğrenci" ya da "Öğretmen"
seçer. Bu bilgi veritabanındaki `profiles` tablosunda saklanır ve uygulama
girişte kişiyi otomatik olarak doğru panele yönlendirir.

### Sağ üstteki isim düğmesi (profil)

Her sayfanın sağ üstünde adınızın yazdığı bir düğme var. Buna tıklayınca
açılan menüden **Profilim** sayfasına ulaşırsınız: ad soyad değiştirme,
şifre değiştirme, bildirim ayarı ve çıkış. Profil, soldaki sekme
listesinde yer almaz — günlük işle karışmaması için yalnızca buradadır.

### Sekmeler

Soldaki menüden (mobilde alttaki çubuk ve "Menü" çekmecesinden) ulaşılan
sayfalar:

| Sekme | Rota | Kim görür | Ne işe yarar |
|---|---|---|---|
| Anasayfa | `/anasayfa` | Öğrenci | Girişte açılan sakin ekran: **sınava kalan süre geri sayımı**, AI Koç önerisi, bekleyen ödev/sorular, **soru + çözüm akışı**, hızlı işlemler ve özet sayılar — **grafik yok** |
| AI Soru Çöz | `/soru-coz` | Öğrenci | Sorunun fotoğrafını yükler, yapay zekâ **dijital tahtada adım adım** çözer; "neden?" / "burada takıldım" sorulabilir, öğrenci kendi çözümünü kontrol ettirebilir |
| Analiz | `/analiz` | Öğrenci | Çalışma süresi, LGS/YKS net gelişimi, ders bazlı ve **konu bazlı** başarı grafiklerinin tamamı |
| Profilim | `/profil` | Hepsi | Ad soyad, şifre, bildirim tercihi ve hesap özeti (sağ üstteki isim düğmesinden açılır) |
| Günlük Çalışma Takibi | `/gunluk-takip` | Öğrenci | Her gün çalışılan konu, süre, doğru/yanlış/boş sayısı girilir ve geçmiş listelenir |
| Ödevler | `/odevler` | İkisi de | Öğretmen ödev atar, öğrenci durumunu (Yapılıyor/Tamamlandı) günceller |
| LGS / YKS / KPSS Denemeleri | `/denemeler` | Öğrenci | Ders bazlı doğru/yanlış/net girişi ve net gelişim grafiği |
| Sorunlu Sorular | `/sorular` | İkisi de | Fotoğraflı soru gönderimi, öğretmenin yazılı/fotoğraflı yanıtı, görsel büyütme ve öğrenci arşivi |
| Ders Notları Kütüphanesi | `/notlar` | İkisi de | Sınav türü → ders → konu → not hiyerarşisinde düzenlenmiş kaynaklar; öğretmen yükler, öğrenci görüntüler |
| Mesajlar | `/mesajlar` | İkisi de | Öğrenci-öğretmen arası birebir, anlık mesajlaşma |

Öğretmen tarafında, bir öğrencinin profiline tıkladığınızda (öğretmen
panelinden) o öğrencinin LGS/YKS denemelerini, ödevlerini, günlük
çalışmalarını ve **konu bazlı gelişim tablosunu** da aynı sayfada görürsünüz.

> **İpucu — konu bazlı analiz için:** Günlük Çalışma Takibi'nde "Konu"
> alanına `Ders - Konu` biçiminde yazarsanız (örn. `Matematik - Türev`,
> `Fizik - Vektörler`), Analiz sayfasındaki "Konu Bazlı Gelişim"
> tablosu ve derslere göre soru dağılımı grafiği bu bilgiyi otomatik
> ayrıştırıp gösterir. Bu biçimde yazmasanız da form yine çalışır, sadece
> o kayıt "Genel" dersi altında görünür.

---

## 2) Dosya Yapısı (Neresi Ne İşe Yarıyor?)

```
ogrenci-takip/
├─ src/
│  ├─ pages/              → Tam sayfalar (Giriş, Öğrenci Paneli, Öğretmen Paneli, Öğrenci Detayı)
│  ├─ components/         → Sayfalarda kullanılan küçük parçalar (grafik, form, kart, liste)
│  ├─ context/             → Kullanıcının "kim olduğu" ve "hangi rolde olduğu" bilgisini tüm
│  │                         uygulamada hatırlayan mekanizma
│  └─ lib/supabaseClient.js → Uygulamanın veritabanına nasıl bağlanacağını söyleyen dosya
├─ supabase/schema.sql     → Veritabanı tablolarını oluşturan hazır kod (aşağıda kullanacağız)
├─ .env.example             → Kendi veritabanı bilgilerinizi gireceğiniz şablon dosya
└─ package.json             → Uygulamanın hangi kütüphanelere ihtiyacı olduğunun listesi
```

Kısaca: **`pages`** = ekranlar, **`components`** = o ekranların içindeki
parçalar, **`supabase/schema.sql`** = veritabanınızın iskeletini kuran dosya.

---

## 3) Kurulum — Adım Adım

### Adım 1: Node.js'i bilgisayarınıza kurun

Node.js, bu tarz uygulamaları çalıştırmak için gereken bir programdır.

1. [nodejs.org](https://nodejs.org) adresine gidin.
2. "LTS" yazan yeşil butona tıklayıp indirin.
3. İndirilen dosyayı çalıştırıp hep "İleri/Next" diyerek kurun.

### Adım 2: Ücretsiz bir Supabase hesabı açın

1. [supabase.com](https://supabase.com) adresine gidin, **"Start your project"**
   deyip GitHub veya e-posta ile ücretsiz hesap açın.
2. Giriş yaptıktan sonra **"New Project"** butonuna basın.
3. Bir proje adı yazın (örn. `ogrenci-takip`), güçlü bir veritabanı şifresi
   belirleyin (bir yere not edin) ve size en yakın bölgeyi (Region) seçin.
4. **"Create new project"** deyip yaklaşık 1-2 dakika bekleyin, projeniz
   hazırlanacak.

### Adım 3: Veritabanı tablolarını oluşturun

1. Supabase panelinde sol menüden **"SQL Editor"**e tıklayın.
2. **"New query"** deyin.
3. Bu projede size verdiğim `supabase/schema.sql` dosyasını açın, içindeki
   **tüm metni kopyalayıp** buraya yapıştırın.
4. Sağ alttaki **"Run"** butonuna basın. "Success" yazısını görmelisiniz.

Bu işlem; öğrenciler, deneme sonuçları ve sorular için gereken tabloları,
ayrıca soru fotoğraflarının yükleneceği depolama alanını otomatik kurar.

> **Günlük çalışma takibi modülünü kullanacaksanız:** `daily_logs`
> tablosunu zaten kendiniz oluşturduysanız, `supabase/migration_daily_logs.sql`
> dosyasının tamamını da aynı şekilde SQL Editor'e yapıştırıp çalıştırın.
> Bu dosya, tabloya güvenlik kurallarını (öğrenci sadece kendi kaydını
> görür/ekler, öğretmen tüm kayıtları görür) ekler.

> **Ödevler, LGS/YKS Denemeleri, Mesajlaşma ve Soru Yanıtlama
> modüllerini kullanacaksanız:** `supabase/migration_v2.sql` dosyasının
> tamamını da aynı şekilde SQL Editor'e yapıştırıp çalıştırın. Bu dosya:
> - `homeworks` (ödevler), `mock_exams` + `mock_exam_subjects` (LGS/YKS
>   denemeleri) ve `messages` (mesajlaşma) tablolarını sıfırdan oluşturur,
> - `questions` tablosuna öğretmenin yazılı yanıt yazabilmesi için tek bir
>   `teacher_reply` kolonu ekler,
> - mesajların anlık gelebilmesi için Supabase Realtime'ı açar.
>
> Mevcut `exams`, `daily_logs` ve `profiles` tablolarınıza **hiçbir
> şekilde dokunulmaz** — LGS/YKS denemeleri bilerek ayrı bir tabloda
> (`mock_exams`) tutulur, böylece "Yeni Deneme Sonucu Ekle" özelliğiniz
> eskisi gibi çalışmaya devam eder.

> **KPSS deneme türünü kullanacaksanız:** `supabase/migration_kpss.sql`
> dosyasını da aynı şekilde çalıştırın. Bu, deneme türü listesine
> `KPSS`'yi ekler; mevcut LGS/TYT/AYT denemeleriniz etkilenmez.

> **Öğretmenin fotoğraflı yanıt verebilmesi için:**
> `supabase/migration_reply_image.sql` dosyasını da çalıştırın. Bu,
> `questions` tablosuna tek bir kolon ekler — **yeni bir Storage bucket
> açmanıza gerek yoktur**, öğrenci sorularının fotoğrafları için zaten
> kurmuş olduğunuz `question-images` bucket'ı öğretmenin yanıt fotoğrafı
> için de otomatik olarak kullanılır.

> **Anasayfadaki sınav geri sayımını kullanacaksanız (ZORUNLU):**
> `supabase/migration_student_exam_profile.sql` dosyasını çalıştırın.
> Bu, `profiles` tablosuna öğrencinin sınıfı, hedef sınavı ve sınav yılı
> için kolonlar ekler. Çalıştırmadan önce geri sayım hiç görünmez;
> öğrenci sınav bilgisini kaydetmeye çalışırsa uygulama hata vermek
> yerine bu dosyayı çalıştırmanız gerektiğini yazar.
>
> Çalıştırdıktan sonra:
> * **Yeni öğrenciler** sınıf/sınav bilgisini kayıt formunda verir.
> * **Mevcut öğrenciler** Anasayfa'da çıkan tek seferlik anket kartını
>   doldurur. Öğretmen, Mesajlar sekmesindeki "Sınav bilgisi anketi"
>   kutusundan bilgisi eksik olan tüm öğrencilere tek tıkla hatırlatma
>   mesajı gönderebilir (mesaj gönderilmeden önce önizlenip düzenlenebilir).
> * Sınav tarihi girilmezse uygulama son yılların takvimine göre
>   **tahmini** bir tarih kullanır ve bunu geri sayımın altında açıkça
>   belirtir. ÖSYM kesin tarihi açıkladığında öğrenci Profil sayfasından
>   gerçek tarihi girer.

> **Veli panelini kullanacaksanız (ZORUNLU, sırayla 2 dosya):**
> 1. `supabase/migration_parent_verification.sql`
> 2. `supabase/migration_parent_verification_cleanup.sql`
>
> İkincisi atlanamaz. Canlı veritabanında bu depodaki hiçbir dosyada
> bulunmayan, zamanla panelden elle eklenmiş politikalar vardı
> (örneğin `profiles` üzerinde adı "Kullanıcılar kendi profillerini
> görebilir" olan ama koşulu düpedüz `true` olan bir politika).
> PostgreSQL aynı komut için birden fazla permissive politikayı
> **VEYA**'lar — biri bile "true" derse satır görünür. Yani eskiler
> düşürülmeden yeni ve dar politikalar hiçbir işe yaramaz.
> Bu göç olmadan **veli paneli boş görünür** — `parent` rolüne hiçbir
> tabloda okuma izni yoktur, sorgular hata vermeden boş döner ve panel
> "doğru isim, sıfır metrik" tablosu çizer.
>
> Göç şunları yapar:
> * `parent_links` tablosunu açar — veli–öğrenci ilişkisinin tek kaynağı.
>   Mevcut `profiles.student_id` bağları **kaybolmadan** 'active' olarak
>   taşınır; hiçbir veli erişimini yitirmez.
> * Veliye, YALNIZCA öğrencinin onayladığı bağlar için okuma izni verir
>   (`daily_logs`, `mock_exams`, `mock_exam_subjects`, `homeworks`,
>   `exams`). Mesajlar, sorunlu sorular ve AI Koç sohbeti veliye kapalıdır.
> * `profiles` politikalarını sıkılaştırır: tablo artık giriş yapmamış
>   ziyaretçilere kapalıdır ve kullanıcı kendi `role`/`student_id`
>   kolonunu değiştiremez.
>
> ⚠ Göçten sonra **kayıt ekranından öğretmen hesabı açılamaz** (rol
> yükseltme açığıydı). Yeni öğretmen için:
> `update profiles set role = 'teacher' where id = '<uuid>';`
>
> Uygulamadan önce göçü çalıştırın: göç eski arayüzle de uyumludur, ama
> yeni arayüz göç olmadan bağlantı kuramaz. Göçün doğruluğunu üretime
> dokunmadan sınamak için: `npm run test:parent-rls`

> **Ders Notları Kütüphanesi'ni kullanacaksanız (sırayla 2 dosya):**
> 1. `supabase/migration_library.sql` — 3 yeni tablo (`library_subjects`,
>    `library_topics`, `library_notes`), gerekli izinler (RLS) ve dosya
>    yüklemek için yeni bir Storage bucket (`library-files`, herkese
>    açık okuma / sadece öğretmen yazma) oluşturur.
> 2. `supabase/seed_library_curriculum.sql` — LGS, TYT, AYT ve KPSS için
>    Matematik ve Geometri derslerinin güncel konu başlıklarını otomatik
>    olarak ekler, böylece hiyerarşiyi elle girmenize gerek kalmaz.
>    **Bu dosyayı sadece bir kez çalıştırın** — tekrar çalıştırırsanız
>    konular mükerrer eklenir. Konu listesi yaygın kabul gören standart
>    bir kırılımdır; kurumunuzun kaynağıyla tam örtüşmüyorsa öğretmen
>    panelinden düzenleyebilir/silebilirsiniz.
>
> **AI Soru Çözüm Merkezi'ni kullanacaksanız (`/soru-coz`):**
> `supabase/migration_ai_solve.sql` dosyasını çalıştırın. Bu dosya
> **2 yeni tablo** ekler (`ai_solution_sessions` = çözülen her sorunun
> kaydı, `ai_solution_events` = "neden?" / "takıldım" etkileşimleri) ve
> ikisine de RLS kurar: bir öğrenci yalnızca kendi çözümlerini görür.
>
> **Mevcut hiçbir tabloya dokunulmaz.** Yeni Storage kovası da açılmaz —
> soru fotoğrafları zaten kurulu olan `question-images` kovasına,
> `ai-solve/<kullanıcı-id>/` klasörü altına yazılır. Hız sınırı sayacı
> için de yeni tablo yok; AI Koç'un kullandığı `ai_usage_events` tablosu
> `kind = 'solve'` değeriyle paylaşılıyor.
>
> Göçü çalıştırmasanız uygulama çökmez ama soru çözümleri kaydedilemez;
> bu durumda "Neden?" ve çözüm geçmişi çalışmaz.
>
> Ayrıca **`GEMINI_API_KEY` ortam değişkeni zorunludur** (aşağıdaki
> "AI Soru Çözüm Merkezi" bölümüne bakın). Anahtar tanımlı değilse sayfa
> açılır ama çözüm isteği "henüz yapılandırılmamış" mesajıyla döner.

> Kurulumdan sonra öğretmen `/notlar` sayfasında bir konuya girip
> "Bu Konuya Not Ekle" ile yazılı not ve/veya PDF/görsel yükleyebilir;
> öğrenci aynı sayfada sınav türü → ders → konu şeklinde gezinip
> notları görüntüleyebilir.

### Adım 4: Bağlantı bilgilerinizi alın

1. Supabase panelinde sol menüden **⚙️ Project Settings → API**'ye gidin.
2. **"Project URL"** ve **"anon public"** anahtarını göreceksiniz — bunlar
   uygulamanızın veritabanınızı bulmasını sağlayan "adres" ve "şifre" gibidir.

### Adım 5: Projeyi bilgisayarınızda açın

1. İndirdiğiniz proje klasörünü bir yere çıkarın (örn. Masaüstü).
2. Klasörün içinde, terminal/komut satırı açın (Windows'ta klasöre girip adres
   çubuğuna `cmd` yazıp Enter'a basmanız yeterli; Mac'te klasöre sağ tık →
   "Yeni Terminal Sekmesi").
3. Şu komutu yazıp Enter'a basın — bu, uygulamanın ihtiyaç duyduğu tüm
   parçaları indirir:
   ```
   npm install
   ```
4. `.env.example` dosyasının adını `.env` olarak değiştirin (kopyasını
   oluşturup yeniden adlandırabilirsiniz). İçini açın ve Adım 4'te aldığınız
   bilgilerle şu şekilde doldurun:
   ```
   VITE_SUPABASE_URL=https://sizin-projeniz.supabase.co
   VITE_SUPABASE_ANON_KEY=sizin-anon-anahtarınız
   ```
5. Uygulamayı bilgisayarınızda çalıştırmak için:
   ```
   npm run dev
   ```
6. Terminalde çıkan `http://localhost:5173` adresini tarayıcınızda açın.
   Uygulamanızı görüyor olmalısınız! 🎉

### Adım 6: İlk hesaplarınızı oluşturun

1. Açılan sayfada **"Kayıt Ol"**a tıklayın, kendinizi **"Öğretmen"** olarak
   kaydedin.
2. Sonra bir öğrenci için tekrar kayıt olun (ya da öğrencilerinizden kendi
   kayıtlarını yapmalarını isteyin), rol olarak **"Öğrenci"**yi seçin.

   > Not: Supabase varsayılan olarak kayıt sırasında e-posta doğrulaması
   > ister. Test aşamasında bunu kapatmak isterseniz: Supabase panelinde
   > **Authentication → Providers → Email** bölümüne girip
   > **"Confirm email"** seçeneğini kapatabilirsiniz.

3. Öğretmen hesabıyla giriş yapıp öğrencinizin profiline tıklayın ve
   **"Yeni Deneme Sonucu Ekle"** formuyla ilk konu/puan kayıtlarını girin.
   Bu kayıtlar öğrencinin panelindeki grafiklerde otomatik görünecektir.

---

## 4) Uygulamayı Yayına Almak (Deploy) — Adım Adım

Yayına almak, uygulamanızın herkesin erişebileceği bir internet adresine
(örneğin `sinifim.vercel.app`) taşınması demektir. Bunun için ücretsiz
**Vercel** servisini kullanacağız.

### Adım 1: Projeyi GitHub'a yükleyin

1. [github.com](https://github.com) adresinde ücretsiz bir hesap açın (yoksa).
2. Sağ üstteki **"+"** ikonuna basıp **"New repository"** seçin, bir isim
   verin (örn. `ogrenci-takip`) ve **"Create repository"**ye basın.
3. Açılan sayfadaki talimatları takip ederek proje klasörünüzü GitHub'a
   yükleyin. En kolay yol: [GitHub Desktop](https://desktop.github.com)
   programını indirip kurmak, sonra "Add local repository" ile proje
   klasörünüzü seçip **"Publish repository"**ye basmak.

   > `.env` dosyanız `.gitignore` sayesinde otomatik olarak GitHub'a
   > yüklenmez — bu, veritabanı şifrelerinizin güvende kalması içindir.

### Adım 2: Vercel'e bağlayın

1. [vercel.com](https://vercel.com) adresine gidin, **GitHub hesabınızla**
   giriş yapın.
2. **"Add New" → "Project"**e tıklayın.
3. Az önce yüklediğiniz `ogrenci-takip` deposunu seçip **"Import"** deyin.
4. Açılan ayarlar ekranında **"Environment Variables"** bölümüne, `.env`
   dosyanızdaki iki satırı tek tek ekleyin:
   - `VITE_SUPABASE_URL` → kendi proje URL'niz
   - `VITE_SUPABASE_ANON_KEY` → kendi anon anahtarınız
5. **"Deploy"** butonuna basın ve 1-2 dakika bekleyin.
6. İşlem bitince Vercel size `https://ogrenci-takip-xxxx.vercel.app` gibi bir
   adres verecek — işte uygulamanız artık canlı ve herkes tarafından
   (kendi kullanıcı adı/şifresiyle giriş yaparak) erişilebilir durumda!

Bundan sonra projede bir değişiklik yapıp GitHub'a her yüklediğinizde,
Vercel siteyi otomatik olarak güncelleyecektir.

---

## 4.5) AI Soru Çözüm Merkezi — Kurulum

Bu modül Google Gemini kullanır (AI Koç'tan **bağımsızdır**; o OpenAI
kullanır, ikisi birbirini etkilemez).

### Adım 1: Gemini API anahtarı alın

1. [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
   adresine Google hesabınızla girin.
2. **"Create API key"** deyip anahtarı kopyalayın.

### Adım 2: Anahtarı Vercel'e girin

Vercel'de **Project Settings → Environment Variables** altına ekleyin:

```
GEMINI_API_KEY = (aldığınız anahtar)
```

> ⚠️ Değişken adının başına **`VITE_` YAZMAYIN**. Vite yalnızca `VITE_`
> önekli değişkenleri tarayıcıya gömer; öneki eklerseniz anahtarınız
> siteyi açan herkes tarafından görülebilir hale gelir.

### Adım 3: Veritabanı göçünü çalıştırın

`supabase/migration_ai_solve.sql` dosyasını SQL Editor'e yapıştırıp
çalıştırın (yukarıdaki nota bakın).

### Kullanılan modeller

Kod içinde **hiçbir yerde model adı yazılı değildir**. Değiştirmek için
yalnızca şu iki değişkeni güncellemeniz yeterli:

```
GEMINI_FAST_MODEL = gemini-3.6-flash          (varsayılan)
GEMINI_PRO_MODEL  = gemini-3.1-pro-preview    (varsayılan)
```

Sistem her soruyu pahalı modele göndermez: önce ucuz modelle sorunun
konusu ve zorluğu belirlenir, kolay sorular orada çözülür, zor sorular
ve **düşük güvenli cevaplar** güçlü modele yükseltilir. Cevabı
doğrulanamayan soruda sistem **uydurmaz**, "bu soruyu güvenilir şekilde
çözemiyorum" der.

> ⚠️ Model kimlikleri zamanla değişir. Çözüm istekleri sürekli hata
> veriyorsa Google'ın güncel model listesinden kontrol edip yukarıdaki
> iki değişkeni güncelleyin.

Diğer tüm ayarlar (hız sınırı, zaman aşımı, fiyat, yönlendirme eşikleri)
`.env.example` dosyasında açıklandı; hiçbiri zorunlu değildir.

### Öğrenci başına maliyeti nasıl görürüm?

Her çözüm `ai_solution_sessions` tablosuna model, token sayısı, süre ve
tahmini maliyetle birlikte yazılır:

```sql
select
  count(*)                as soru,
  round(sum(cost_usd), 4) as toplam_usd,
  round(avg(cost_usd), 6) as soru_basi_usd,
  count(*) filter (where model_role = 'pro') as pro_kullanimi
from ai_solution_sessions
where created_at > now() - interval '30 days';
```

> ⚠️ `cost_usd` **tahmindir**: `api/_lib/solve/config.js` içindeki birim
> fiyatlar doğrulanmamış varsayılanlardır. Gerçek fatura için Google'ın
> fiyat sayfasından doğrulayıp `SOLVE_PRICE_*` değişkenleriyle ezin.

### Yerel testler

```
npm run test:ai-solve
```

Ağ, veritabanı ve API anahtarı gerektirmez; tahta güvenlik
doğrulayıcısını, matematiksel doğrulama motorunu ve model yönlendirme
kurallarını sınar.

---

## 5) Sık Sorulan Sorular

**"npm install" hata verdi, ne yapmalıyım?**
Node.js'in doğru kurulduğundan emin olun (terminale `node -v` yazıp Enter'a
basınca bir sürüm numarası görmelisiniz). Görmüyorsanız Adım 1'i tekrarlayın.

**Grafikler boş görünüyor.**
Henüz o öğrenciye ait deneme sonucu girilmemiş demektir. Öğretmen panelinden
öğrencinin profiline girip "Yeni Deneme Sonucu Ekle" formunu kullanın.

**Fotoğraf yükleme çalışmıyor.**
`supabase/schema.sql` dosyasını SQL Editor'de tam olarak çalıştırdığınızdan
emin olun — depolama alanı (bucket) bu adımda oluşturuluyor.

**Daha fazla konu/ders eklemek istiyorum.**
"Yeni Deneme Sonucu Ekle" formundaki konu kutusuna dilediğiniz konuyu
serbestçe yazabilirsiniz; listedeki öneriler sadece kolaylık içindir.

**Branş Denemesi Ekle / net grafiği çalışmıyor.**
`supabase/migration_branch_exam_upgrade.sql` dosyasını çalıştırmanız
gerekiyor — bu, `exams` tablosuna tarih/doğru/yanlış/boş/net kolonlarını
ekler ve öğrencinin kendi branş denemesini girebilmesine izin verir.

**AI Soru Çöz "henüz yapılandırılmamış" diyor.**
`GEMINI_API_KEY` ortam değişkeni tanımlı değil ya da geçersiz. Vercel'de
**Project Settings → Environment Variables** altına ekleyip projeyi
yeniden yayınlayın (**Redeploy**). Değişken eklemek tek başına yetmez,
yeniden yayınlamak gerekir.

**AI Soru Çöz "çözüm kaydedilemedi" diyor / geçmiş boş görünüyor.**
`supabase/migration_ai_solve.sql` çalıştırılmamış demektir.

**Çözüm çıkmıyor, "soruyu net okuyamadım" diyor.**
Bu bir hata değil, bilinçli bir davranış: sistem okuyamadığı soruda
çözüm uydurmaz. Fotoğrafı düz açıyla, aydınlık ortamda ve sorunun
tamamı (şıklar dahil) kadraja girecek şekilde çekin. Tek karede birden
fazla soru varsa yalnızca çözdürmek istediğinizi kırpın.

**Sorunlu soru bildirimi gelmiyor / SQL hatası veriyor.**
`supabase/migration_push_notifications.sql` dosyasını yeniden çalıştırın
(içindeki `notify_new_question` fonksiyonu güncellendi) — `<PROJECT_REF>`
ve `<WEBHOOK_SECRET>` yer tutucularını kendi değerlerinizle değiştirmeyi
unutmayın.
