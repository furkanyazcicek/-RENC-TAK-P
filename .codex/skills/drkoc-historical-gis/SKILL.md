---
name: drkoc-historical-gis
description: "DRKOÇ tarih atlasında siyasi/idari sınır, GeoJSON, MultiPolygon, kaynak geometrisi, kıyı hizalama, sadeleştirme ve GIS doğrulaması yap. Tarihsel harita geometrisi eklenirken veya değiştirilirken kullan; salt UI cilası ya da yalnız metin araştırması için kullanma."
---

# DRKOÇ Historical GIS

Önce `AGENTS.md`, `.codex/skills/drkoc-atlas-designer/SKILL.md` ve
`docs/tarih-atlasi-veri-sozlesmesi.md` dosyalarını oku. Aktif render yolunu
izleyerek hangi GeoJSON’un gerçekten kullanıldığını doğrula; prototip ile üretim
verisini karıştırma.

## Değişmez sınır

LLM tarihsel sınır koordinatı icat etmez. Metinsel tariften, bellekteki haritadan
veya ekrandaki georeferanssız görselden köşe listesi üretme. Bir sınır köşesini
yalnız kaynak vektörden veya belgeli, deterministik GIS dönüşümünden al.

Kaynaklı raster sayısallaştırılacaksa kontrol noktaları, projeksiyon, kaynak
sayfası/katmanı, tarih kapsamı ve editör incelemesi saklanmalıdır. Bu bağ yoksa
çıktıyı `quarantined` tut; üretime kaydetme.

## Kaynak sınıfları

- `external-vector`: lisanslı ve sürümü belirli vektör veri.
- `georeferenced-digitization`: kontrol noktalarıyla bağlı raster/harita sayısallaştırması.
- `derived`: kaynak geometriye uygulanan kırpma, kesişim, birleştirme, kıyı maskesi,
  projeksiyon veya ölçülü sadeleştirme.
- `modelled`: Voronoi, erişim alanı veya benzeri açık öğretim modeli; sınır kanıtı
  gibi sunulmaz.
- `manual-unreferenced`: karantina; yayınlanamaz.

## Çalışma biçimi

1. Kullanılan tarih, coğrafi kapsam, hedef zoom ve gereken doğruluk düzeyini belirle.
2. Mevcut kaynağın bu ölçeğe uygun olup olmadığını incele; kıtasal veriyi yerel
   sınır hassasiyeti gibi sunma.
3. Kaynak kimliği, URL, lisans, kaynak yılı/sürümü ve ham dosya özetini kaydet.
4. Dönüşümü betikle tekrarlanabilir yap. Üretilmiş GeoJSON’u elle düzeltme;
   düzeltmeyi kaynak katmanında veya belgeli override’da tut.
5. `Polygon`/`MultiPolygon`, kapalı halkalar, WGS84 aralığı, boş geometri,
   beklenmeyen üst üste binme/boşluk, etiket konumu ve zaman aralığını doğrula.
6. Kıyı hizalamanın yalnız kıyıyı düzelttiğini; iç siyasi sınırı doğrulamadığını belirt.
7. `npm run atlas:veri-dogrula`, görsel bölge karşılaştırması ve proje derlemesini çalıştır.

Belirsizlik tarihsel olgunun parçasıdır. Kaynaklar ayrışıyorsa tek kesin çizgi
yerine alternatif geometri, belirsizlik bandı veya açık tahminî stil öner.
