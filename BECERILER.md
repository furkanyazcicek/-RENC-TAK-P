# Kurulu Beceriler ve Uzmanlar

Bu dosya, projeye kurulan **beceri** (skill) ve **uzman** (agent) dosyalarının Türkçe
listesidir. Kaynak: [ECC — Everything Claude Code](https://github.com/affaan-m/ECC)
(MIT lisanslı, açık kaynak, sürüm 2.2.0).

**Beceri nedir?** Claude'un belirli bir konuda nasıl çalışacağını anlatan yazılı bir
uzmanlık dosyası. Konuyla ilgili bir iş geldiğinde Claude o dosyayı kendiliğinden okur
ve oradaki kurallara göre çalışır. Sen bir şey yapmak zorunda değilsin.

**Uzman nedir?** Belirli bir konuya odaklanmış ayrı bir yardımcı. Sadece sen istediğinde
devreye girer, kendiliğinden çalışmaz.

Dosyalar İngilizce — bunlar Claude'un kendi iç notları. Seninle konuşma dili her zaman
Türkçe kalır.

---

## Kurulu Beceriler (35)

### Arayüz ve React (sitenin görünen kısmı)

| Beceri | Ne işe yarar |
|---|---|
| `react-patterns` | React bileşenlerini doğru yazma kuralları — hatalı kalıpları önler |
| `react-performance` | Sayfaların hızlı açılması, gereksiz yeniden çizimleri engelleme |
| `react-testing` | React bileşenlerini otomatik test etme |
| `frontend-patterns` | Genel arayüz mimarisi, durum yönetimi, veri çekme kalıpları |
| `vite-patterns` | Projenin derleme aracının (Vite) doğru ayarlanması, hızlandırılması |
| `frontend-a11y` | Erişilebilirlik — ekran okuyucu, klavye kullanımı, renk kontrastı |
| `design-system` | Tasarım tutarlılığı denetimi (`DESIGN_SYSTEM.md` ile birlikte çalışır) |
| `frontend-design-direction` | Arayüzün genel tasarım yönünü belirleme |
| `make-interfaces-feel-better` | Arayüzü "cilalı" hissettiren küçük detaylar — boşluk, gölge, köşe yuvarlaklığı, tıklama alanı |

### Hareket ve animasyon (öğrenci sıkılmasın)

| Beceri | Ne işe yarar |
|---|---|
| `motion-foundations` | Animasyonun temel kuralları: süre, yumuşaklık, telefonda performans |
| `motion-patterns` | Hazır animasyon kalıpları: düğme, açılır pencere, bildirim, sayfa geçişi |
| `motion-ui` | Bütünlüklü hareket sistemi kurma |

### Veritabanı ve sunucu tarafı (Supabase)

| Beceri | Ne işe yarar |
|---|---|
| `postgres-patterns` | Supabase'in altındaki veritabanı için doğru tablo/indeks/güvenlik kuralı tasarımı |
| `database-migrations` | Tablo yapısını **veri kaybetmeden** değiştirme — öğrenci verisi için kritik |
| `api-design` | `api/` klasöründeki uç noktaların düzgün tasarlanması |
| `backend-patterns` | Sunucu tarafı mimarisi |
| `error-handling` | Hataların sessizce yutulmaması, kullanıcıya anlamlı mesaj gösterilmesi |

### Kalite ve güvenlik

| Beceri | Ne işe yarar |
|---|---|
| `safety-guard` | **Geri dönülemez işlemleri engeller** — canlı veritabanında silme/toplu güncelleme koruması |
| `security-review` | Giriş sistemi, kullanıcı verisi, API anahtarları için güvenlik denetimi |
| `verification-loop` | "Bitti" demeden önce derleme + tip + lint + test kontrol zinciri |
| `click-path-audit` | Her düğmeye basıldığında gerçekte ne olduğunu izler — "çalışıyor görünüp çalışmayan" düğmeleri yakalar |
| `production-audit` | Yayına almadan önce "canlıda ne patlar?" denetimi |
| `browser-qa` | Tarayıcıda otomatik görsel test |
| `e2e-testing` | Uçtan uca test (öğrenci girişten çıkışa akışı test etme) |
| `tdd-workflow` | Önce test yazıp sonra kod yazma yöntemi |
| `canary-watch` | Yayınladıktan sonra sitenin gerçekten çalıştığını doğrulama |

### İş akışı

| Beceri | Ne işe yarar |
|---|---|
| `git-workflow` | Yedekleme ve sürüm yönetimi düzeni |
| `deployment-patterns` | Yayına alma, geri alma (rollback), sağlık kontrolü |
| `codebase-onboarding` | Bir kod tabanını hızlıca haritalama |
| `product-lens` | "Bunu neden yapıyoruz?" — kodlamadan önce ürün mantığını sınama |

### Büyüme ve içerik üretimi

| Beceri | Ne işe yarar |
|---|---|
| `seo` | Google'da bulunurluk — platformun organik büyümesi için |
| `manim-video` | Matematik/fen konularını animasyonlu anlatım videosuna çevirme |
| `remotion-video-creation` | React ile programlı video üretimi (ders anlatım videoları) |
| `ui-demo` | Tanıtım / kullanım videosu kaydı |

### Mobil uygulama (yol haritası)

| Beceri | Ne işe yarar |
|---|---|
| `react-native-patterns` | App Store / Google Play adımına gelindiğinde mobil uygulama kalıpları |

---

## Kurulu Uzmanlar (8)

Bunlar **sadece sen istediğinde** çalışır ("kodu bir gözden geçir", "güvenlik denetimi
yap" gibi):

| Uzman | Ne yapar |
|---|---|
| `code-reviewer` | Genel kod kalitesi incelemesi |
| `react-reviewer` | React'e özel inceleme — hook hataları, gereksiz yeniden çizim |
| `database-reviewer` | Supabase/PostgreSQL şema ve sorgu incelemesi |
| `security-reviewer` | Güvenlik açığı taraması |
| `a11y-architect` | Erişilebilirlik denetimi |
| `silent-failure-hunter` | Sessizce yutulan hataları avlar — "neden çalışmıyor?" durumlarının baş sebebi |
| `performance-optimizer` | Yavaşlık teşhisi |
| `react-build-resolver` | Derleme hatalarını çözer |

---

## Kurulmayanlar

ECC'de toplam **286 beceri** ve **68 uzman** var. Kalanı bu projeye uymadığı için
kurulmadı: Java/Kotlin/Rust/Go/Perl/C++ gibi başka programlama dilleri, Kubernetes,
kripto para, sağlık kayıt sistemleri, ev ağı kurulumu, yatırımcı sunumu, sosyal medya
otomasyonu ve benzeri.

İhtiyaç doğarsa tek tek eklenebilir — kaynak repo adresi yukarıda.

---

*Son güncelleme: 23 Ağustos 2026*
