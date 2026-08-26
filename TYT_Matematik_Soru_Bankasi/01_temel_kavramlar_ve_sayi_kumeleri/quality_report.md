# Konu 01 — Kalite raporu

> Son güncelleme: 26 Ağustos 2026  
> Konu durumu: **Tamamlandı — sıkı denetimden geçti**

## Test 01–50 denetimi

| Kontrol | Sonuç | Kanıt/not |
|---|---|---|
| Her testte tam 10 soru | Geçti | Otomatik sayım: 50 test / 500 soru |
| Her soruda A–E beş seçenek | Geçti | Seçenek etiketleri tam ve tekil |
| Her testte tam 10 çözüm | Geçti | Otomatik sayım: 500 çözüm |
| Çözümde doğru cevap ve kazanım | Geçti | Zorunlu alanlar mevcut |
| Anahtar–çözüm uyumu | Geçti | 500/500 eşleşme |
| Tek doğru seçenek | Geçti | Matematiksel editör kontrolü yapıldı |
| Hesap ve muhakeme doğruluğu | Geçti | Sorular bağımsız çözülerek seçeneklerle karşılaştırıldı |
| Eksik bilgi/gizli varsayım | Geçti | Doğal sayıdaki 0 tartışmasını gerektiren seçenek kullanılmadı |
| Görsel referansı | Geçti | Test 41, 43 ve 47 için 3 düzenlenebilir SVG mevcut |
| Aynı/çok benzer soru | Geçti | 500 soru arasında otomatik kök karşılaştırması: 0 hata, 0 uyarı |
| Düzey uyumu | Geçti | 01–25 temel, 26–40 gelişim, 41–50 ileri/yeni nesil |
| Müfredat uyumu | Geçti | MAT.9.1.3–4 ve temel ön koşullar |

## Test 01–50 cevap dağılımı

| A | B | C | D | E |
|---:|---:|---:|---:|---:|
| 100 | 100 | 100 | 100 | 100 |

## Konu düzeyi zorunlu sayım

| Kontrol | Hedef | Mevcut | Durum |
|---|---:|---:|---|
| Test | 50 | 50 | Geçti |
| Soru | 500 | 500 | Geçti |
| Temel soru | 250 | 250 | Geçti |
| Gelişim sorusu | 150 | 150 | Geçti |
| İleri/yeni nesil soru | 100 | 100 | Geçti |

Konu düzeyindeki bütün zorunlu sayımlar ve denetimler geçmiştir.

## Otomatik denetimin sınırı

Doğrulama betiği yapı, sayım, anahtar eşleşmesi, zorunlu alan, dosya varlığı ve metinsel benzerlik kontrollerini yapar. Bir matematik sorusunun tek doğru cevabını sembolik olarak ispatlamaz; bu nedenle matematiksel editör kontrolü ayrıca kaydedilmiştir.

## Son kalite kapısı

`node scripts/validate_bank.mjs --strict` komutu 50 test, 500 soru ve 500 çözüm için 0 hata, 0 uyarı vermiştir. Öğrenci önizlemesinde 50 test sekmesi, matematik gösterimi, SVG görseller, şık işaretleme ve sonuç denetimi ayrıca sınanmıştır.
