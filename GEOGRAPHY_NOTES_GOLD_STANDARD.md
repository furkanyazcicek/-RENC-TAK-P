# DrKoç Coğrafya Notları — Gold Standard

Referans ders: **TYT · Coğrafya · Doğa ve İnsan** (`doga-ve-insan`). Konu sırası `supabase/seed_library_curriculum_v2.sql` içindeki `library_topics.order_index` kaynağından gelir.

## Design grammar

1. Önce mekânsal zihinsel model, sonra kısa açıklama, ardından neden–sonuç ve sınav ayrımı gelir.
2. Mevcut `LessonMasthead`, `LessonDocument`, tipografi, omurga, kenar notu ve tema tokenları korunur. Coğrafya görselleri `lesson-figure` levhasında yaşar.
3. Her görsel bir soruyu cevaplar: **Nerede? Neden orada? Sonucu ne?** Dekoratif görsel eklenmez.
4. Bir bölümün varsayılan ritmi: görsel → kısa açıklama → ilişki/karşılaştırma → aktif durak veya sınav bağı.

## Component grammar

- `cografya-sistem-diyagrami` / `GeoSystemsDiagram`: bir konunun doğal ve beşerî katmanlarını tek bakışta kurmak için.
- `cografya-etkilesimli-harita` / `InteractiveMap`: anlamlı konumları harita bağlamında açmak için. Tam CBS/zoom ihtiyacı yoksa bu hafif SVG çözüm kullanılır.
- `cografya-bolge-karsilastirma` / `RegionCompare`: iki mekân, kesit veya arazi desenini önce görsel olarak ayırmak için.
- Genel `concept_map`, `cause_effect`, `compare`, `teacher_note`, `trap`, `checkpoint`, `worked_example`, `exam`, `quiz` ve `summary` blokları yeniden kullanılır.

Yeni primitive yalnızca mevcut üçlünün anlatamadığı tekrar eden bir görsel ihtiyaç varsa eklenir. Tek derse özel dev bir page component yazılmaz.

## Map grammar

Harita verisi `figure.data.points` içinde tutulur. Minimum nokta sözleşmesi:

```js
{
  id, x, y, region, title,
  summary,        // ne oluyor?
  significance,   // neden burada?
  result,          // sonucu ne?
  examTip          // ayırt ettiren bilgi
}
```

`x` ve `y`, 0–100 normalize yüzde koordinatlarıdır; bileşen güvenli aralığa sıkıştırır. Noktalar JSX içine yazılmaz. Aynı anda tek kart açılır. Marker her zaman gerçek `button`, en az 44 px hedef, `aria-label`, `aria-pressed` ve görünür focus taşır. Hover bilgiye erişmenin tek yolu olamaz.

Harita şematikse bunu harita üzerinde ve figcaption’da açıkça belirt. Sınır veya kesin koordinat iddiası üretme. Öğrenmeye hizmet etmeyen marker ekleme; varsayılan hedef 4–8 noktadır.

## Content grammar

1. `src/content/lessons/cografya/<konu-slug>.js` oluştur.
2. `placement.topic`, müfredat kaynağındaki adla birebir aynı olmalıdır; `order` konu içindeki ders sırasıdır.
3. Metin bloklarında ana fikir önce gelir. Uzun paragraf yerine anlamlı 2–3 paragraf ve hemen yakınında mekânsal karşılık kullanılır.
4. Her vaka için doğal koşul, insan cevabı ve geri etki ayrı yazılır. Tek nedenli/mutlak determinizmden kaçınılır.
5. Dersi `src/content/lessons/index.js` kayıt defterine ekle; figür `kind` değerleri registry’de kayıtlı olmalıdır.
6. `npm run test:lesson-content` ve `npm run build` çalıştır.

## Responsive rules

- Harita masaüstünde harita + yan bilgi paneli, 760 px altında harita + alt kart olur.
- Mobilde yatay kaydırılabilir nokta adları marker’lara ikinci erişim yolu sağlar.
- Marker koordinatları harita kabına göre yüzdeseldir; viewport değişince kopmaz.
- Karşılaştırma iki sütundan tek sütuna iner. Sistem diyagramının dört ana düğümü dokunma hedefini korur.
- Sayfa gövdesi yatay taşmaz; görselin içeriği okunamayacak kadar küçültülmez.
- Hareket yalnızca hafif renk/scale geçişidir ve `prefers-reduced-motion` ile kapanır.

## Do / Don’t

**Do:** gerçek içerik kullan; haritayı açıklama bağlamı yap; olanak ve riski birlikte göster; mobil, klavye, dark theme ve reduced-motion davranışını test et.

**Don’t:** marker’ları component JSX’ine gömme; haritayı dekor olarak kullanma; hover-only bilgi saklama; her paragrafı karta çevirme; yeni renk sistemi veya ağır harita dependency’si ekleme; bir ekran görüntüsü için desktop-only yerleşim yapma.

Kalite kapısı `scripts/test-lesson-content.mjs` içinde pilotun müfredat yerini, gerekli anlatı bloklarını, üç reusable görseli ve bilgi kartlı harita veri sözleşmesini denetler.
