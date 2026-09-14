# Faz 9 — Gizlilik ve Saklama Politikası Taslağı

> **ÜRÜN SAHİBİ VE HUKUK İNCELEMESİ ZORUNLUDUR.** Bu dosya hukuki görüş, yürürlükte bir gizlilik bildirimi veya yayınlanabilir nihai metin değildir. Faz 10 pilotundan önce ürün sahibi; geçerli mevzuat, öğrenci yaşı, veli/öğrenci bilgilendirmesi ve operasyon kapasitesi açısından incelemelidir.

## Amaç ve veri minimizasyonu

DRKOÇ öğrenme ağı yalnız eğitimsel karar için gerekli sınırlı ölçüm ve yaşam döngüsü bilgisini kullanır. Ham sayfa tıklaması, tam soru veya PDF metni, soru/ödev görseli, ses kaydı, özel mesaj, öğretmenin özel notu ve serbest yazı öğrenme kanıtına kopyalanmaz. “İçeriği açtı” sinyali başarı veya ustalık sayılmaz. Bir kaynağa açıklama bağı gerekiyorsa ham içerik yerine öğrenci kapsamlı opak belirteç kullanılır.

AI Koç; sağlık, ruhsal durum, kişilik, aile yapısı, tanı veya benzeri hassas nitelik çıkarmamalıdır. Sürümlü davranış örüntüleri yalnız dar eğitim davranışını, açık kanıt sayısını, son doğrulama zamanını ve geçerlilik sonunu taşıyabilir; teşhis değildir.

## Saklama sınıfları — inceleme taslağı

| Veri sınıfı | Önerilen süre | Silme yolu | Otomatik silme |
|---|---|---|---|
| Öğrenme kanıtı | Hesap açıkken; kaynak düzeltme/silme yaşam döngüsüne bağlı | Kaynak tombstone/düzeltme veya hesap cascade | Hayır; ürün sahibi/hukuk kararı bekler |
| Türetilmiş projeksiyon | 90 gün | Yeniden hesaplama veya hesap cascade | Hayır |
| Açık onaylı AI Koç hafızası | Öğrenci unutturana veya hesap silinene kadar | `forget_student_memory` veya hesap cascade | Öğrenci eylemi dışında hayır |
| Koçluk eylem makbuzu | 90 gün | Özel zamanlanmış temizlik veya hesap cascade | Hayır |
| Kişisel içeriksiz operasyon metriği | 30 gün | Toplu özet temizliği | Hayır |
| Gölge karşılaştırma metadatası | 7 gün | Özel zamanlanmış temizlik | Hayır |

Bu süreler ürün/operasyon taslağıdır. Onay olmadan canlı zamanlanmış silme görevi kurulmaz. Akademik kayıtların yasal veya sözleşmesel saklama gereksinimi varsa ürün sahibi süreleri değiştirmeli ve bunu kullanıcı metnine yansıtmalıdır.

## Öğrenci hakları ve ürün yolları

- Öğrenci kendi kayıtlarını, dil ilerlemesini, koçluk görevlerini ve açık onaylı hafızasını yalnız kendi oturumuyla görür.
- Öğrenci kaynağı düzelttiğinde veya sildiğinde kanıt append-only düzeltme/tombstone ile izlenebilir kalır; etkin görünüm eski sonucu kullanmaz.
- Açık onaylı tercihler görüntülenebilir ve öğrenci tarafından tek tek unutturulabilir.
- Dışa aktarım yalnız oturumdaki öğrenciye bağlı kanıt, projeksiyon, hafıza, görev/sonuç, dil ilerlemesi ve itirazları anlamlı gruplar halinde verir. Gizli anahtar, erişim tokenı, ham görsel/ses ve başka öğrencinin verisi dahil edilmez.
- Hesap silme; profil üzerinden olaylara, projeksiyonlara, açıklama bağlarına, dil durumuna, AI Koç hafızası/görev/sonuçlarına ve öğrenciye özel rollout kaydına ulaşır. Faz 9 bunu gerçek yerel PostgreSQL üzerinde sentetik hesapla doğrular.
- Silinmiş kaynak içeriği projeksiyonda ham kopya olarak yaşamaz; türev yeniden hesaplanır veya hesapla birlikte silinir.

## Önerilen kullanıcı açıklaması — yayımlanmadan önce inceleme

AI Koç önerilerini çalışma ve ölçüm kayıtlarından üretir. Bir içeriği açman tek başına “öğrendin” anlamına gelmez. Tam soru, özel mesaj, ses veya kişisel not içeriğin öğrenme puanı üretmek için kopyalanmaz. Kayıtlarını düzeltebilir, açıkça kaydettiğin tercihleri unutturabilir ve hesabına bağlı öğrenme verilerinin dışa aktarımını isteyebilirsin. Hesabını sildiğinde hesabına bağlı öğrenme olayları, türetilmiş durumlar ve koçluk kayıtları da silme zincirine girer.

Bu metin ürün sahibi ve hukuk incelemesi tamamlanmadan `/gizlilik` sayfasına veya canlı ürüne eklenmemelidir.

