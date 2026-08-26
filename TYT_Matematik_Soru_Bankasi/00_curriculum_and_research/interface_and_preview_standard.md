# Ekran ve önizleme standardı

> Kalıcı proje kararı · Son güncelleme: 26 Ağustos 2026

Bu kurallar yeni test ve konuların tamamında korunur.

## Yayın görünümünde gösterilmeyecek unsurlar

- Markdown matematik ayraçları (`$` ve `$$`) öğrenciye görünmez.
- `K01-T05-Q10` benzeri iç soru kimlikleri öğrenciye görünmez; yalnız kaynak ve kalite denetiminde tutulur.
- HTML karakter kalıntıları (`&lt;` veya `lt;` gibi) matematik ifadesi içinde görünmez.
- Kaynak ve denetim metadata alanları soru kartına taşınmaz.

## Matematik gösterimi

- Satır içi ve blok matematik KaTeX ile işlenir.
- `<`, `>`, `≤`, `≥`, kesir, kök ve üs gösterimleri görsel katmanda ayrıca kontrol edilir.
- Küçükten büyüğe sıralama sorularında bütün seçenekler görsel matematik katmanından doğrulanır.
- Soru kökü, seçenek ve çözüm aynı matematik verisini kullanır.

## Öğrenci etkileşimi

- Her soru seçeneği ekrandan tıklanabilir ve işaretlenebilir olmalıdır.
- Bir soruda aynı anda yalnız bir seçenek seçilebilir.
- Testler arasında geçildiğinde işaretlemeler oturum boyunca korunur.
- “İşaretleri Temizle” işlemi yalnız açık testin cevaplarını sıfırlar.
- “Testi Kontrol Et” işlemi doğru, yanlış ve boş soruları kart üzerinde gösterir.
- Yanlış veya boş soruda doğru seçenek belirtilir.
- Sonuç panelinde doğru, yanlış, boş, dört yanlışın bir doğruyu götürdüğü net ve 100 üzerinden ham başarı gösterilir.

## Gelecek testlerin otomatik katılımı

Önizleme, tamamlanan testleri `answer_keys.md` içindeki geçerli test satırlarından bulur. Yeni test; soru dosyası, çözüm dosyası ve cevap anahtarı satırı eklendiğinde ayrıca arayüz kodu değiştirilmeden test sekmelerine katılır.

## Görsel kalite kapısı

Her yeni beş testlik blokta:

1. soru ve çözüm görünümleri açılır,
2. görünür dolar işareti ve iç soru kimliği aranır,
3. sıralama/eşitsizlik seçenekleri görsel matematik katmanında okunur,
4. örnek bir doğru, yanlış ve boş cevapla sonuç hesabı sınanır,
5. tarayıcı konsolunda hata olmadığı doğrulanır.
