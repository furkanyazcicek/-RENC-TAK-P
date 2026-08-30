# DRKOÇ TYT Matematik içerik sistemi

Bu klasör, araştırma ve yayın yönetimi belgelerini tutar. Öğrenciye yayımlanan tek kaynak ise uygulamanın mevcut sözleşmesine uygun olarak `src/content/lessons/matematik/` altındaki JavaScript dersleridir. Böylece konu anlatımı, önizleme, şema denetimi ve veritabanı tohumu aynı içerikten beslenir.

## Tamamlanan kapsam

- 17 TYT Matematik konusu
- 10 TYT Geometri konusu
- Her derste 7 pedagojik bölüm
- Hazır bulunuşluk, kavram, neden, formül/koşul, Seviye 1-5 işlem örnekleri, örneğe bağlı taktik, karar ağacı, hata analizi, gizli çözümlü alıştırma, özgün ÖSYM tarzı simülasyon ve öz değerlendirme
- Her konuda matematiğe sıfırdan başlayan öğrenci için başlangıç örneği ve güçlü öğrenci için beş basamaklı rehberli seçici örnek
- 2018-2026 resmî TYT kitapçıklarına bağlı 360 satırlık telifsiz soru metadata envanteri
- Güncel MEB programı ve 2026 YKS Kılavuzu eşlemesi

## Dosya rehberi

| Yol | İşlev |
|---|---|
| `arastirma/kaynakca.md` | Resmî kaynaklar, bağlantılar, erişim ve araştırma günlüğü |
| `arastirma/mufredat-haritasi.md` | Konu, ön koşul, beceri, süre ve öncelik haritası |
| `arastirma/soru-siniflandirmasi.csv` | 2018-2026 için 360 soru metadata kaydı; soru metni içermez |
| `arastirma/soru-envanteri-uret.py` | Resmî PDFlerden metadata envanterini yeniden üretir |
| `arastirma/osym-soru-analizi.md` | Toplu ölçme-değerlendirme bulguları |
| `arastirma/yillara-gore-dagilim.md` | Baskın konu frekansları ve yorum sınırları |
| `plan/` | Öğrenme sırası, kazanım matrisi, yazım standardı ve ilerleme |
| `soru-bankasi/` | Ders içi bankanın kullanım ilkesi ve karma özgün uygulama |
| `cevaplar-ve-cozumler/` | Karma uygulamanın gerekçeli çözümü |
| `tekrar-notlari/` | Hızlı tekrar ve hata günlüğü araçları |
| `kalite/` | Şema, kapsam ve matematik kalite raporu |

## Yayın ve doğrulama

```bash
node scripts/test-lesson-content.mjs
node scripts/seed-lessons.mjs --dry
```

Gerçek veritabanı yazımı bu çalışma kapsamında yapılmaz. Kuru çalıştırma, yerleşim adlarının mevcut müfredat ağacıyla eşleştiğini doğrular.

## Telif ve kaynak politikası

Geçmiş ÖSYM sorularının metinleri, şekilleri ve seçenekleri projede yeniden yayımlanmaz. Soru envanteri yalnız baskın beceri, temsil, akıl yürütme, hata noktası ve editöryal süre/zorluk tahmini taşır. Derslerdeki bütün sorular sıfırdan yazılmış ve “ÖSYM tarzında özgün örnek” olarak etiketlenmiştir.
