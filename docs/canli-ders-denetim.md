# Canlı Ders Stüdyosu — Mevcut Sistem Denetimi

Bu not, Canlı Ders Stüdyosu geliştirilmeden önce yapılan kod ve veri modeli
denetiminin sonucudur. Uygulama kararlarının gerekçesi burada durur.

Tarih: 31 Ağustos 2026

---

## 1) Öğretmen paneli hangi veriyi çekiyor?

`src/pages/TeacherDashboard.jsx` üç sorgu yapıyor:

| Sorgu | Filtre | Sonuç |
|---|---|---|
| `profiles` | `role = 'student'` | **Sistemdeki TÜM öğrenciler** |
| `daily_logs` | filtre yok | **Tüm öğrencilerin çalışma kaydı** |
| `questions` | filtre yok | **Tüm öğrencilerin soruları** |

Sorgularda öğretmen–öğrenci ilişkisi yok; çünkü veri modelinde böyle bir
ilişki yok.

## 2) Öğretmenler tüm öğrencileri görebiliyor mu?

**Evet.** Hem istemci sorgusu hem RLS politikası bunu açıkça izin veriyor.
`supabase/migration_parent_verification.sql` içindeki profil politikası:

```
or public.is_teacher()
```

`is_teacher()` yalnızca "bu kişi öğretmen mi" sorusunu sorar, "bu öğrencinin
öğretmeni mi" sorusunu değil.

## 3) Öğretmen–öğrenci sahiplik ilişkisi var mı?

**Hayır.** `profiles.student_id` yalnızca veli bağı için kullanılmış, o da
`parent_links` tablosuna taşınmış ve kullanım dışı bırakılmış.
`homeworks.teacher_id` yalnızca "kim atadı" bilgisidir, yetki taşımaz.

## 4) RLS öğretmeni kendi öğrencisiyle sınırlıyor mu?

**Hayır.** Aşağıdaki tabloların hepsinde öğretmen kuralı
`exists (select 1 from profiles where id = auth.uid() and role = 'teacher')`
biçiminde, yani ilişkiden bağımsız:

- `profiles` (SELECT)
- `daily_logs` (SELECT)
- `exams` (SELECT / INSERT / UPDATE)
- `questions` (SELECT / UPDATE)
- `homeworks` (SELECT / INSERT / UPDATE / DELETE)
- `mock_exams`, `mock_exam_subjects` (SELECT)

## 5) Mesajlar ve ödevler ilişkiye göre korunuyor mu?

- **Mesajlar:** Kısmen korunuyor. Politika `sender_id`/`receiver_id`
  eşleşmesine bakıyor, bu doğru. Ancak öğretmen tüm öğrenci profillerini
  listeleyebildiği için istediği öğrenciye mesaj başlatabiliyor.
- **Ödevler:** Korunmuyor. Herhangi bir öğretmen herhangi bir öğrenciye ödev
  atayabiliyor, silebiliyor.

## 6) Hangi tahta bileşenleri yeniden kullanılabilir?

| Dosya | Ne yapıyor | Canlı derste kullanım |
|---|---|---|
| `src/lib/solutionCanvas.js` | Vektör çizim motoru: kalem/fosforlu, basınç, çizgi silgisi, seyreltme, serileştirme, düzleştirilmiş dışa aktarma. React'ten bağımsız. | **Doğrudan kullanılabilir** — canlı ders tahtasının temeli budur. |
| `src/components/solve/SolveBoard.jsx` | Tam ekran tek sayfalık tahta; soru görseline bağlı, otomatik kaydı `questions` tablosuna yazıyor. Avuç reddi, pinch-zoom, iki katmanlı canvas. | Doğrudan kullanılamaz (tek sayfa, tek soru, tek kullanıcı, `questions`'a bağlı). Ancak **çizim/olay yönetimi kalıpları** birebir örnek alındı. |
| `src/components/aiSolve/Whiteboard.jsx` | Yapay zekânın ürettiği çözüm adımlarını **gösteren** DOM/KaTeX bileşeni. Kullanıcı çizemez. | **Kullanılamaz.** Bu bir çözüm oynatıcısıdır, ortak tahta değildir. |
| `src/lib/whiteboard/*` | AI çözüm adımlarının veri modeli ve derleyicisi. | Kullanılamaz (aynı sebep). |

Karar: `solutionCanvas.js` motoru korunur ve **çok sayfa + metin + şekil +
görsel + çok kullanıcı** yetenekleri `src/lib/liveLesson/board/` altında,
motoru değiştirmeden üstüne eklenir.

## 7) Mevcut tahta kullanıcı çizimine uygun mu?

`SolveBoard` evet, `aiSolve/Whiteboard` hayır. İkisinin karıştırılması bu
işin en olası hatasıydı; ayrı ayrı incelendi.

## 8) Supabase Realtime nerede kullanılıyor?

Tek yerde: `src/components/ChatThread.jsx`, `postgres_changes` ile `messages`
tablosunu dinliyor. `supabase_realtime` yayınına yalnızca `messages` tablosu
eklenmiş.

Sonuç: Canlı derste **postgres_changes kullanılmayacak.** Her kalem hareketi
için veritabanına yazmak hem yavaş hem pahalı. Bunun yerine aynı Realtime
altyapısının **broadcast + presence** kanalları kullanılır; veritabanına
yalnızca tamamlanmış çizim grupları, sınırlı sıklıkta yazılır.

## 9) Mobil gezinmeye canlı ders nasıl eklenir?

`src/components/ui/MobileNav.jsx` alt çubukta yalnızca ilk **4** `primary`
öğeyi gösteriyor, kalanı "Menü" çekmecesine düşüyor. Öğretmenin dört primary
öğesi dolu (Öğrencilerim, Ödevler, Sorular, Mesajlar).

Karar: "Canlı Dersler" **çekmeceye** eklenir, alt çubuktaki mevcut dört öğe
değiştirilmez. Yaklaşan/aktif ders olduğunda katılım eylemi öğretmen ve
öğrenci ana ekranının en üstünde görünür — menüde aramak gerekmez.

## 10) Mevcut rota korumaları

`src/App.jsx` içindeki `ProtectedRoute` bileşeni `allow` ile rol kısıtlar:

- `allow="teacher"` → `/ogretmen`, `/ogretmen/ogrenci/:studentId`
- `allow="student"` → `/anasayfa`, `/analiz`, `/denemeler`, `/gunluk-takip`,
  `/ai-koc`, `/soru-coz`
- `allow="parent"` → `/veli`
- Rol belirtilmeyenler her giriş yapmış kullanıcıya açık

Rol uymuyorsa `homePathForRole(role)` ile kendi ana sayfasına atılır.

---

## Bulunan güvenlik açıkları (bu iş kapsamında kapatılanlar)

| # | Açık | Çözüm |
|---|---|---|
| G1 | Öğretmen tüm öğrencilerin profilini, çalışma kaydını, denemesini, sorusunu ve ödevini okuyabiliyor | `teacher_students` sahiplik tablosu + `is_active_teacher_of()` ile tüm ilgili politikaların daraltılması |
| G2 | Öğretmen tanımadığı öğrenciye ödev atayabiliyor / silebiliyor | Aynı fonksiyonla `homeworks` INSERT/UPDATE/DELETE politikaları daraltıldı |
| G3 | Ders odasına yetkisiz katılım riski | `lesson_participants` yazımı yalnızca `auth.uid()` kullanan SECURITY DEFINER fonksiyonlarından geçer; istemciye INSERT/UPDATE politikası verilmez |
| G4 | Öğretmenin özel notunun öğrenciye sızması | Not **ayrı tabloda** (`lesson_private_notes`) tutulur. RLS satır bazlıdır, kolon gizleyemez; aynı satırda tutulsaydı öğrenci `select *` ile okurdu |
| G5 | Tahmin edilebilir oda adı | `provider_room_id` 32 karakterlik rastgele değer olarak sunucuda üretilir ve yalnızca katılımcılar okuyabilir |
| G6 | Davet bağlantısının kalıcı olması | Davet belirteci veritabanında **açık metin tutulmaz**, SHA-256 özeti tutulur; süreli ve iptal edilebilir |

## Korunacak çalışan davranışlar

- Öğrenci analiz sayfaları, günlük takip, denemeler, ödevler, sorular
- Mesajlaşma ve ekleri (imzalı URL akışı dahil)
- Ders kütüphanesi, yapılandırılmış ders notları, konu testleri
- AI Koç ve AI Soru Çözüm (yalnızca öğrenci rolü, sunucu tarafı kontrolü dahil)
- Veli doğrulama sistemi ve veli paneli erişimi
- Anasayfada grafik bulunmaması kararı
