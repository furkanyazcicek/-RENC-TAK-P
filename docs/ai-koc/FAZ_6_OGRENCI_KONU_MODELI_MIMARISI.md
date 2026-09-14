# Faz 6 Öğrenci-Konu Modeli Mimarisi

Tarih: 13 Eylül 2026  
Durum: **Yerel olarak tamamlandı, canlı onay bekliyor**

Bu belge, Faz 3–5'in ortak kanıt ağına bağladığı öğrenme kayıtlarından
deterministik öğrenci durumu üreten Faz 6 modelinin yetkili açıklamasıdır.
Faz 6 AI Koç'a yeni okuma aracı vermez, koçluk kararı üretmez ve canlı
veriye uygulanmaz.

## 1. Girdi, çıktı ve çözünürlük

Tek girdi Faz 2'nin append-only `learning_evidence_records` defteridir. Snapshot,
correction ve tombstone kuralları uygulanır; kopyalar, geçersiz kimlikler ve
operasyonel kayıtlar akademik sonuca katılmaz. Çıktılar şu kapsamlarda ayrı
satırlardır:

- genel öğrenci görünümü;
- okul/sınav/dil gibi bağımsız öğrenme programı;
- ders;
- kanonik konu;
- konuya bağlı kazanım varsa kazanım.

Bağımsız dil programı okul dersi İngilizcesiyle birleştirilmez. Konu dağılımı
olmayan genel deneme, konu puanı üretmez. Birden çok konu içeren genel veya ders
özetinde tek bir doğruluk ortalaması yerine kaynak alt özetleri korunur.

## 2. Ayrı tutulan boyutlar

Her satır tek bir başarı puanına indirgenmez. `dimensions` içinde maruz kalma,
çalışma hacmi, performans, yardım bağımlılığı, kalıcılık, akıcılık,
zorlanma, tutarlılık, plan uyumu, güncellik ve veri kapsamı/güven ayrıdır.

- Yalnız ders/PDF açma maruz kalmadır; performans değildir.
- Planı “tamamlandı” diye işaretleme beyandır; akademik başarı değildir.
- Öğrenci beyanı ile doğrudan ölçüm ayrı tutulur.
- Yalnız `active_measurement` kökenli süre akıcılığa girer. Bu veri yoksa
  akıcılık `unknown` kalır.
- Aynı girişimdeki soru ve toplam kaydı bağımsız iki örnek sayılmaz.
- Çözüm/ipucu kullanılmış doğru cevap bağımsız doğruyla aynı ağırlıkta
  değildir.

## 3. Sürümlü formül ve eşikler

Yetkili yapılandırma `student-topic-model-config@1`, model
`student-topic-model@1`, konu sözleşmesi `curriculum-identity@1` sürümüdür.
Bütün katsayılar `src/lib/learning/studentModel/config.js` içinde tek ve
immutable yapıda tutulur.

Doğrudan performans için:

`zaman_ağırlığı = 1 / (1 + yaş_gün / 60)`

`ağırlıklı_doğruluk = Σ(doğru × zorluk × zaman × yardım) / Σ(işaretli × zorluk × zaman)`

| Değer | Katsayı / eşik |
|---|---:|
| Kolay / orta / zor / bilinmeyen zorluk | 0,80 / 1,00 / 1,15 / 0,90 |
| Yardım sonrası doğru | 0,55 |
| Desteğe ihtiyaç / gelişiyor / güvenli / güçlü | `<0,50` / `<0,70` / `<0,85` / `≥0,85` |
| Düşük güven alt sınırı | 5 doğrudan soru |
| Orta güven | 12 soru, 2 bağımsız girişim, 2 ayrı gün |
| Yüksek güven | 30 soru, 3 girişim, 3 gün, 2 doğrudan kaynak |

Beşten az doğrudan soru `insufficient` kalır; bu nedenle tek soruda yüzde 100
doğru “öğrendi” sonucuna dönüşmez. Zorlukların çoğu bilinmiyorsa veya
kaynak çelişkisi varsa yüksek güven bir basamak düşer. Kanıt sınıfı destek
ağırlıkları doğrudan ölçümden maruz kalmaya doğru 1,00; 0,65; 0,45;
0,30; 0,20 ve 0,10'dur; bu değerler kapsam göstergesini besler, farklı anlamdaki
kaynakları tek performans ortalamasına zorlamaz.

Kısa ve önceki dönem 21'er günlük penceredir; her pencerede en az 5 soru ve
0,15 değişim trend için gerekir. Kalıcılık en az 7 gün aralı iki ölçümle
değerlendirilir. İlk sonuç en az 0,75, sonuç en çok 0,55 ve düşüş en az
0,20 ise unutma riski oluşur. Güncellik 14/60/180 gün eşikleriyle
`current/aging/stale/old` sınıflarına ayrılır; eski kanıt silinmez.

## 4. Güven, çelişki ve açıklanabilirlik

Her sonuç durum, güven, doğrudan/beyan/dolaylı sayıları, kaynak çeşitliliği,
en eski/yeni tarih, dışlanan/eşleşmeyen sayı, çelişki, model/konu/config
sürümü ve hesap zamanını taşır. Karşılaştırılabilir iki kaynak arasında en
az 0,25 doğruluk farkı çelişkiyi görünür kılar; ortalamayla saklamaz.

`explainProjectionClaim` konu, tarih aralığı, kaynaklar, bağımsız doğrudan
kanıt sayısı, yardım etkisi, dışlama nedenleri ve güven gerekçelerini döndürür.
Kanıt bağları yalnız opak `drkoc-ref:v1` konumu taşır; soru, cevap, görsel,
öğretmen mesajı veya serbest yazı projeksiyona kopyalanmaz.

## 5. Dört katmanlı hafıza

1. **Onaylı tercihler:** Mevcut `ai_student_memory` beyaz listesidir; öğrenci
   açıkça söyler ve onaylar.
2. **Türetilmiş durum:** `student_learning_projection_rows`; yalnız kanıttan
   yeniden hesaplanır, öğrenci veya LLM puan yazamaz.
3. **Davranış örüntüsü:** `student_behavior_patterns`; sürümlü kural,
   en az üç örnek, destekleyen/çürüten referans, güven ve 30 gün geçerlilik
   taşır. Kişilik etiketi veya psikolojik teşhis yoktur.
4. **Koçluk karar geçmişi:** `student_coaching_decision_history` yalnız
   ilişki sözleşmesidir. Öneri–onay–uygulama–sonuç döngüsü Faz 8'e aittir.

Öğrenci türetilmiş puanı keyfî değiştiremez. Kaynak kaydının düzeltme
yolunu kullanabilir veya serbest metin taşımayan bir itiraz nedeni bırakabilir;
itiraz puanı değiştirmez.

## 6. Replay, saklama ve sorgu yolları

Faz 2 generation/cursor/processing altyapısı kullanılır. Her etkilenen
öğrencinin etkin geçmişi yeniden kurulur; yeni nesil tam yazılıp checksum
hesaplanmadan etkinleşmez. Artımlı sonuç ile tam replay otomatik
karşılaştırılabilir. Model sürümü değişirse `requiresStudentTopicModelReplay`
yeniden hesaplamayı zorunlu kılar; `compareStudentTopicModelProjections`
önce/sonra checksum ve satır sayısını verir. Bozuk bir öğrenci diğerini
durdurmaz; cursor yalnız başarıda ilerler.

Destek, trend, tekrar, program ve opak kanıt sorguları için ayrı indeksler vardır.
Gerçek `EXPLAIN` planları destek, trend ve tekrar indekslerini kullandı. Böylece
her sohbet mesajında bütün kanıt geçmişi yeniden hesaplanmak zorunda değildir.

## 7. Yerel kabul sonucu ve sınırlar

- [Makine kabul kaydı](kanitlar/faz-6/faz-6-kabul-sonucu.json): 7 bölüm,
  107 doğrulama, 9/9 kapı.
- [Zorunlu komut kaydı](kanitlar/faz-6/regresyon-komutlari.json): 11/11.
- [Altın senaryolar](kanitlar/faz-6/faz-6-altin-senaryolar.json): 13/13.
- [Performans](kanitlar/faz-6/faz-6-performans-sonucu.json): 10.000 sentetik
  kanıt, 50 konu, 5.000 ms bütçe içinde.
- [Migration özeti](kanitlar/faz-6/migration-sema-ozeti.json) ve
  [yetki matrisi](kanitlar/faz-6/guvenlik-yetki-matrisi.json): ilk/ikinci
  uygulama, rollback, FORCE RLS, başka öğrenci izolasyonu ve doğrudan puan
  yazma yasağı geçti.

PGlite tek bağlantıyı seri işlediği için gerçek çok bağlantılı PostgreSQL
yarışı ve canlı kapasite iddiası Faz 9'a bırakıldı. Canlı migration, gerçek
öğrenci verisi/backfill, ücretli model, deploy ve push yapılmadı. Faz 7 AI Koç
tüketimi ile Faz 8 kapalı döngü uygulanmadı.
