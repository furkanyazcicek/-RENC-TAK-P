# Tarih Atlası kaynak ve lisans raporu

**İnceleme tarihi:** 27 Ağustos 2026  
**Amaç:** Tarihsel geometrinin kanıt ve yeniden kullanım zincirini üretimden önce denetlemek.

## Üretim kararı

| Kaynak | Kapsam | Lisans | Karar |
|---|---|---|---|
| Historical Basemaps | Seçili yıllarda küresel siyasî polygon | GPL-3.0 | Genel, düşük güvenli kaynak görüntüsü olarak üretimde; yerel kesinlik iddiası yok |
| Natural Earth 1:50m Land | Modern kara/kıyı | Public domain | Yalnız kıyı maskesi ve nötr kara tabanı |
| Wikidata | Nokta koordinatları | CC0 | Kurumsal/akademik tarih kaynağıyla çapraz kontrol edilerek olay/yer noktası |
| UNESCO Orkhon Valley | Orhun miras alanı ve bağlamı | CC-BY-SA 3.0 IGO | Orhun peyzajı/merkez bağlamı; kağanlık sınırı değil |
| TDV İslâm Ansiklopedisi | Olay, tarih ve siyasî bağlam | Telifli başvuru | Metin/harita kopyalanmadan bibliyografik kanıt |
| TBMM | 1923 anayasal olay bağlamı | Resmî başvuru | Olgusal kanıt bağlantısı; sınır geometrisi değil |
| CShapes 2.0 | 1886–2019 devlet sınırları | CC-BY-NC-SA 4.0 | Ticari kullanım durumu belirsiz olduğu için aday; üretimde değil |
| Pleiades | Antik yerler | CC-BY 3.0 | Antik yer katmanı adayı; genel siyasî sınır kaynağı değil |
| OpenHistoricalMap | Feature bazında tarihli vektör | Değişken/karma | Her feature'ın `license` ve `source` kaydı ayrı incelenmeden üretimde değil |

Makinece okunabilir tam kayıt: `src/data/tarihAtlasi/research/source-catalog.json`.

## Uygulanan güvenlik kuralları

1. LLM metinden koordinat veya sınır poligonu üretmez.
2. `reference-only`, `restricted` veya `mixed` lisanslı kaynak doğrudan üretim geometrisi olamaz.
3. Bir noktanın koordinat kaynağı, olayın tarihsel anlamını tek başına kanıtlamaz; tarih kaynağı ayrıca bağlanır.
4. Modern kıyı maskesi tarihsel siyasî sınır kanıtı olarak gösterilmez.
5. Kaynak yılı seçili yıldan farklıysa fark arayüzde görünür; geometri interpolasyonu yapılmaz.
6. Tahminî idarî çizgi ve rota, veri alanında ve arayüzde model olarak işaretlenir.

## Yeniden kullanım uyarıları

- GPL-3.0 türevlerinin dağıtım yükümlülükleri yayın sürecinde korunmalıdır.
- CC-BY-SA 3.0 IGO içeriklerinde atıf ve aynı lisans koşulları izlenmelidir.
- CShapes, ticari kullanımı yasaklayan NC maddesi nedeniyle ürünün hukukî kullanım biçimi açıklığa kavuşmadan eklenmemelidir.
- Kurumsal ve akademik başvuru metinleri veri paketine kopyalanmaz; yalnız kısa özgün özet ve bağlantı tutulur.

Bu rapor hukuk görüşü değildir; yayın öncesi lisans sorumlusu tarafından son kontrol gerekir.
