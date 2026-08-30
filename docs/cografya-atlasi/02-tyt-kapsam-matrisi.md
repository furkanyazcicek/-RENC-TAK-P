# TYT Coğrafya Kapsam Matrisi

Son doğrulama: 29 Ağustos 2026

ÖSYM’nin 2026 TYT kitapçığında Sosyal Bilimler testi içinde coğrafya 6–10. sorularla temsil edilir; kampın varsayılanı bu nedenle **5 sorudur**. ÖSYM soru metinleri teliflidir ve atlas içinde kopyalanmaz. Sorular DRKOÇ tarafından özgün yazılır; yalnız beceri desenleri kaynak alınır.

| Öncelik | Konular |
|---|---|
| Yüksek | Koordinat/yerel saat; harita/ölçek; izohips; atmosfer; rüzgâr–nem–yağış; iklim grafikleri; dış kuvvetler; nüfus dağılışı/yoğunluk; nüfus piramitleri; göç; ekonomik faaliyetler; maden–enerji–sanayi; ulaşım–ticaret–turizm; afet/risk |
| Orta | Dünya’nın şekli/hareketleri; iç kuvvetler; sular/havzalar; toprak/bitki/biyom; yerleşme; tarım; bölgeler/ülkeler; çevre/sürdürülebilirlik |
| Düşük | Coğrafyanın bölümleri ve coğrafi bakış |

Tam 23 konu kaydı **src/data/cografya/tyt.js** içinde MEB çıktı kimliği, kanıt türü ve özgün soru deseniyle tutulur.

## Soru oturumu sözleşmesi

- Varsayılan soru sayısı: 5; kod düzeyinde yapılandırılabilir.
- Varsayılan süre: 300 saniye; süreli/süresiz seçilebilir.
- Her soruda: konu, düzey, MEB çıktısı, ipucu, kanıt açıklaması ve hedef yanılgı bulunur.
- Yanlış yanıttan sonra cevap ezberletilmez; ayrı bir benzer transfer sorusu açılır.
- Deneme özeti tarih, süre modu, tamamlanan soru, doğru ve yanlış sayısıyla yerel ilerlemeye kaydedilir.

