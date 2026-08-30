# Teknik Uygulama Planı

## Mevcut temel

React + Vite + Tailwind yapısı korunur. Atlas bölgeleri tembel yüklenir; hesap motorları **src/lib/cografya**, veri sözleşmeleri **src/data/cografya**, görsel kapsam stilleri **src/styles/cografya-atlasi.css** altında tutulur.

## Veri katmanları

- **mufredat2026.js:** 28 ünite, 73 çıktı ve öğrenme zinciri.
- **tyt.js:** 23 konu matrisi, 5 soruluk varsayılan ve özgün soru bankası.
- **kaynaklar.js:** kaynak/lisans/belirsizlik kayıt defteri.
- **kapsam.js:** çalışan etkileşim kayıtları ve bölge eşlemesi.
- **ilerleme.js:** yerel tamamlanma, hata defteri ve TYT deneme geçmişi.

## Uygulama sırası

1. Müfredat ve TYT matrisini arayüzde görünür kıl.
2. TYT kampını süre, ipucu, transfer ve kayıtla dikey dilim olarak tamamla.
3. COĞ.9.7.1 için kriter tabanlı şematik bölge oluşturma laboratuvarını ekle.
4. Kaynak statüsü, veri yılı ve sınırlamayı ilgili modülde bağlamsal göster.
5. Sonraki dilimlerde iklim, nüfus ve afet gerçek veri adaptörlerini ayrı ayrı doğrula.

## Performans

- Ağır bölge modülleri tembel yüklenir.
- Büyük harita/veri dosyaları rota düzeyinde ayrılır.
- Hesaplanan diziler memoize edilir; hareket azaltma tercihi korunur.
- Harita ve grafikler düşük güçlü telefonda akıcı kalacak DOM/SVG yoğunluğunda tutulur.

## Yayın kapısı

- **npm run test:cografya**
- **npm run build**
- 1440 px, 768 px ve 375 px görsel denetim
- Klavye, görünür odak, boş/yükleme/hata/devre dışı/seçili durum kontrolü
- Yatay taşma ve dokunma hedefi denetimi

Yayına alma ayrıca istenmedikçe bu çalışmanın kapsamı dışındadır.
