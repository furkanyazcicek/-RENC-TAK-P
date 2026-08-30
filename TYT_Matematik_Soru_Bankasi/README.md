# TYT Matematik Soru Bankası

Bu dizin, konu başına **50 test × 10 soru = 500 özgün soru** hedefiyle yürütülen yayın projesidir. Her soru beş seçenekli, tek doğru cevaplı ve ayrıntılı çözümlü olarak hazırlanır.

## Yayın hedefi

- 32 editöryal konu birimi
- 16.000 soru
- 1.600 test
- Test 1–25: Temel Düzey
- Test 26–40: Gelişim ve Pekiştirme Düzeyi
- Test 41–50: İleri ve Yeni Nesil Düzey

Bu sayılar yalnız üretim hedefidir. Gerçekleşen ve doğrulanan sayılar için [`master_progress_report.md`](master_progress_report.md) esas alınır.

## Kapsam ilkesi

ÖSYM, TYT'de 40 soruluk **Temel Matematik Testi** bulunduğunu resmî olarak belirtir; konu bazında bağlayıcı bir liste veya matematik–geometri kotası yayımlamaz. Bu nedenle bu bankadaki konu birimleri:

1. güncel MEB ortaokul ve ortaöğretim matematik programları,
2. programların kademeli uygulanması nedeniyle geçiş döneminde yürürlükte kalan önceki kazanımlar,
3. ÖSYM'nin resmî ÖSS, YGS ve TYT kitapçıklarında gözlenen temel yeterlikler

birlikte değerlendirilerek oluşturulmuş **editöryal kapsam haritasıdır**. Ayrıntılı yöntem ve sınırlar [`00_curriculum_and_research/official_scope_and_method.md`](00_curriculum_and_research/official_scope_and_method.md) dosyasındadır.

## Dizin yapısı

- `00_curriculum_and_research/`: resmî kaynaklar, kapsam, müfredat haritası, tarihsel soru analizi ve üretim planı
- `NN_konu_adi/`: konu analizi, soru testleri, çözümler, cevap anahtarları, görseller ve kalite raporu
- `scripts/`: otomatik biçim, sayım, anahtar ve dosya denetimleri
- `master_topic_index.md`: 32 konunun ana dizini
- `master_progress_report.md`: yalnız gerçekten üretilen ve doğrulanan içeriğin ilerleme kaydı

## Doğrulama

```bash
node scripts/validate_bank.mjs
```

Otomatik denetim; soru/seçenek sayısı, çözüm ve anahtar uyumu, zorunlu çözüm alanları, görsel dosya varlığı ve metinsel benzerlik uyarılarını kontrol eder. Matematiksel doğruluk ayrıca editöryal çözüm kontrolünden geçirilir; otomatik denetimin tek başına matematiksel ispat yerine geçmediği kalite raporlarında açıkça belirtilir.

## Telif ilkesi

Geçmiş ÖSYM soruları yalnız beceri, temsil ve ölçme yaklaşımını incelemek için kullanılır. Bu projede resmî soru metni, şekli veya seçenekleri yeniden yayımlanmaz; sorular sıfırdan yazılır.
