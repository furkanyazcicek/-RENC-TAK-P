# Üretim ve kalite planı

## Konu başına zorunlu yapı

Her konu klasöründe aşağıdakiler bulunur:

- `topic_analysis.md`
- `test_01_questions.md` … `test_50_questions.md`
- `test_01_solutions.md` … `test_50_solutions.md`
- `answer_keys.md`
- `visuals/`
- `quality_report.md`

## Test düzeyleri

| Testler | Düzey | Tasarım amacı |
|---|---|---|
| 01–25 | Temel | kavramı tanıma, temel işlem, yaygın soru aileleri ve yanılgıları öğretme |
| 26–40 | Gelişim ve Pekiştirme | hız, çok adımlı yorum, aynı konu içindeki kazanımları birleştirme |
| 41–50 | İleri ve Yeni Nesil | uzun okuma, gerçek yaşam, tablo-grafik-şekil, gereksiz bilgiyi ayıklama ve strateji kurma |

## Konu içi ilerleme

- İlk beş test: tanım ve temsil güvenliği.
- Test 6–15: temel soru ailelerinin tamamı.
- Test 16–25: temel düzey karma ve hata önleme.
- Test 26–30: iki kazanımlı orta düzey.
- Test 31–35: yabancı sunum ve hız.
- Test 36–40: üst-orta, çok adımlı pekiştirme.
- Test 41–45: veri, tablo, şema ve uzun bağlam.
- Test 46–50: görsel ve çok temsilli ileri sentez.

## Cevap dağılımı

Konu tamamında A–E seçeneklerinin her biri için hedef 100 doğru cevaptır. Tek testte mekanik bir sıra zorunlu değildir; on testlik bloklarda belirgin yığılma bulunmamalıdır. Dağılım, doğru cevabı belirlemek için değil, soru tamamlandıktan sonra seçeneklerin yeniden sıralanmasıyla dengelenir.

## Görsel planı

- Temel düzeyde yalnız öğretici ve gerekli olduğunda görsel kullanılır.
- Gelişim düzeyinde en az 15 soruda tablo, sayı doğrusu, grafik veya düzenek hedeflenir.
- İleri düzeyde en az 40 soruda görsel/veri temsili hedeflenir; bazı sorular birden fazla temsil içerebilir.
- Geometri konularında görsel oranı doğal olarak daha yüksektir.
- Her görsel düzenlenebilir SVG olarak hazırlanır; soru verisiyle bire bir eşleşir.

## Soru kimliği ve biçim

Soru kimliği `KNN-TSS-QXX` biçimindedir:

- `KNN`: konu sıra numarası,
- `TSS`: test sıra numarası,
- `QXX`: test içindeki soru numarası.

Her çözüm şu alanları taşır:

- doğru cevap,
- kazanım,
- adım adım çözüm,
- doğru seçeneğin kısa gerekçesi,
- yararlıysa güçlü çeldirici notu.

## Kalite kapıları

1. Yapısal denetim: 10 soru, 5 seçenek, 10 çözüm ve anahtar eşleşmesi.
2. Matematik denetimi: hesap, koşul, tek doğru ve seçenek kontrolü.
3. Dil denetimi: doğal Türkçe, gereksiz belirsizlik ve gizli varsayım kontrolü.
4. Benzerlik denetimi: aynı iskeletin yalnız sayı/ad değiştirerek yinelenmesini engelleme.
5. Görsel denetim: dosya varlığı, okunabilirlik ve veri uyumu.
6. Düzey denetimi: test numarasıyla amaçlanan zorluk uyumu.

Bir konu yalnız 50 testi ve 500 sorusu mevcutsa, bütün kapılardan geçiyorsa ve `quality_report.md` bunu doğruluyorsa tamamlanmış sayılır.

## Ekran deneyimi standardı

Öğrenci önizlemesinde seçenekler işaretlenebilir ve test sonucu kontrol edilebilir olmalıdır. İç soru kimlikleri ile Markdown matematik ayraçları gösterilmez. Ayrıntılı ve kalıcı kurallar `interface_and_preview_standard.md` dosyasında tutulur; gelecekteki testler bu standardı otomatik olarak devralır.
