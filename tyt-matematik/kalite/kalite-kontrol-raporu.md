# TYT Matematik kalite kontrol raporu

Tarih: 26 Ağustos 2026

## Ürün özeti

| Ölçü | Sonuç |
|---|---:|
| Yayınlanabilir ders | 27 |
| Matematik / Geometri | 17 / 10 |
| Toplam ders sözcüğü | 42.221 |
| İçerik bloğu | 890 |
| Çözümlü örnek | 149 |
| Görünür çözüm basamağı | 389 |
| Seviye 5 rehberli seçici örnek | 27 |
| Gizli çözümlü konu alıştırması | 120 |
| Özgün ÖSYM tarzı simülasyon | 27 |
| Toplam ders içi özgün soru | 147 |
| Hata/çeldirici bloğu | 82 |
| Hazır bulunuşluk ve öz değerlendirme kontrolü | 108 |
| Geçmiş sınav metadata kaydı | 360 |
| Ayrı karma tekrar sorusu | 23 |

## Otomatik kontroller

| Kontrol | Komut | Sonuç |
|---|---|---|
| Matematik alt kümesi şema + derinlik | özel Node denetimi | 27/27; 0 hata, 0 uyarı, en düşük 100/100 |
| Bütün ders kayıt defteri | `node scripts/test-lesson-content.mjs` | 185 ders; 0 hata |
| Müfredat rota ve referansları | `npm run test:library-curriculum` | Başarılı |
| Kuru ders yüklemesi | `node scripts/seed-lessons.mjs --dry` | 185 ders doğrulandı; veritabanına yazılmadı |
| Üretim derlemesi | `npm run build` | Başarılı; 3262 modül |
| Soru envanteri | `soru-envanteri-uret.py` | 9×40 = 360 satır; 359 geçerli + 1 iptal |

Proje genelindeki içerik testinde matematik dışındaki eski derslerden 32 derinlik uyarısı raporlanmıştır. TYT Matematik/Geometri alt kümesinde derinlik uyarısı yoktur.

Üretim derlemesinde hata yoktur. Mevcut projeden gelen iki uyarı sürmektedir: bir PostCSS eklentisinin `from` seçeneği ve 500 kB üzerindeki paket parçaları. Bunlar bu içerik çalışmasının doğruluğunu veya derlenmesini engellememiştir.

## Matematik editörü kontrolü

Kontrol turunda:

- bütün derslerin seçili seçenekleri çözüm açıklamasıyla birlikte listelendi;
- üç yanlış `answer_index` düzeltildi;
- benzerlik sorusunda aynı değeri veren ikinci seçenek değiştirildi;
- bir LaTeX `\frac` yazım hatası düzeltildi;
- küme parantezlerinin kaçış karakterleri standartlaştırıldı;
- sonuç kontrolleri, birimler ve yasak değerler gözden geçirildi.

26 Ağustos işlem odaklı revizyonunda:

- tekrarlanan bölüm girişleri kısaltıldı; bölüm yönlendirmeleri 10.647 sözcükten 3.465 sözcüğe indirildi;
- her dersteki örnekler `Seviye 1 · Sıfırdan` ile `Seviye 5 · Rehberli seçici` arasında etiketlendi;
- 27 konuya birbirinden farklı, beş görünür çözüm basamaklı karma örnek eklendi;
- örnek çıkarımları `Bu örneğin taktiği`, `Başka soruya aktar` ve `Dikkat sınırı` biçiminde çözüme bağlandı;
- genel kelime eşiği yerine matematiğe özgü örnek, işlem basamağı ve bağımsız soru kalite kapısı tanımlandı;
- 120 bağımsız alıştırma ile 27 özgün simülasyon korundu.

## Kaynak ve telif kontrolü

- 2018-2026 için dokuz resmî ÖSYM kitapçığı işlendi.
- Güncel 2026 YKS Kılavuzu ve 2026 MEB matematik programları kaynakçada bağlantılıdır.
- Resmî soru metni, şekli ve seçenekleri proje çıktısına alınmadı.
- Her özgün simülasyon “gerçek ÖSYM sorusu değildir” ifadesini taşır.
- ÖSYM'nin yayımlamadığı konu dağılımı resmî veri gibi sunulmadı.
- Gözlem, eğilim, pedagojik öneri ve tahmin sınırı ayrı etiketlendi.

## Bilinen sınırlar

1. `soru-siniflandirmasi.csv` içindeki 136 satır düşük tasnif güvenindedir. Bunlar bütünüyle sınıflandırılmıştır ancak PDF formül/şekil katmanı eksikliği nedeniyle sonraki iki editörlü görsel kontrol için işaretlenmiştir.
2. Zorluk ve süre değerleri öğrenci örnekleminden elde edilmiş psikometrik ölçüler değil editöryal tahminlerdir.
3. Geometri dersleri kavram haritası ve karar ağacı taşır; özel dinamik geometri bileşenleri sonraki sürüm kapsamındadır.
4. Gerçek veritabanı yazımı yapılmamıştır; kullanıcı onayı olmadan dış yayınlama gerçekleştirilmemiştir.

## Yayın kararı

Yerel içerik, şema, rota, kuru yükleme ve üretim derlemesi açısından yayıma hazırdır. Canlı veritabanına yükleme ayrı ve geri dönüş etkisi olan bir işlem olduğundan bu çalışma yalnız kuru doğrulamada bırakılmıştır.
