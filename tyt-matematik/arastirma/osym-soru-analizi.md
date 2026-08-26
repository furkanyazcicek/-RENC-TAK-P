# 2018-2026 ÖSYM TYT Temel Matematik soru analizi

## Kapsam ve kanıt düzeyi

**Resmî bilgi:** 2026-YKS Kılavuzu, TYT Temel Matematik Testi'nin 40 sorudan oluştuğunu belirtir. ÖSYM, matematik ve geometri için ayrı resmî kota veya konu bazlı dağılım tablosu yayımlamaz.

**İncelenen veri:** 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 ve 2026 resmî TYT temel soru kitapçıklarındaki toplam 360 soru. 2019 kitapçığındaki 7. Temel Matematik sorusu ÖSYM kararıyla iptal edilmiştir; sunum ve beceri analizi için envanterde `iptal` durumuyla tutulmuş, geçerli sonuç yorumunda ayrı değerlendirilmiştir.

**Editöryal sınıflandırma:** Her soruya toplamı 40'ta tutmak için bir baskın konu etiketi verilmiştir. Bu etiket, sorunun yalnız o konuyu kullandığı anlamına gelmez. Resmî soru metni, şekli veya seçenekleri hiçbir çıktı dosyasına kopyalanmamıştır.

## Soru düzeyi envanter

`soru-siniflandirmasi.csv` dosyasında her yıl için 40, toplam 360 kayıt vardır. Alanlar şunlardır:

- sınav yılı, soru numarası ve geçerlilik durumu
- resmî PDF bağlantısı
- ana konu, alt konu, kazanım/beceri
- bağlam, sunum biçimi ve temsil
- doğrudan bilgi/yorum ayrımı
- işlem, okuma ve modelleme yükü
- akıl yürütme, konu birleştirme ve gerekli çözüm adımları
- alternatif yöntem, çeldirici/hata noktası ve kritik ayrım
- editöryal zorluk, süre ve tasnif güveni
- yerel kaynak parmak izi

Envanterin 59 satırı yüksek, 165 satırı orta, 136 satırı düşük tasnif güvenindedir. Düşük güven, özellikle formül veya şeklin PDF metin katmanına eksik düştüğü ve baskın etiketin yıllık görsel frekans denetimiyle tamamlandığı kayıtları gösterir. Bu alan psikometrik güçlük ölçüsü değildir; sonraki çift editör denetimi için kalite işaretidir.

## Toplu bulgular

### 1. Test, konu hatırlamadan çok temsil dönüştürür

**Gözlem:** 360 kaydın 336'sında sözel metin, 90'ında şekil, 14'ünde tablo ve 13'ünde grafik vardır; bir soru birden fazla temsil taşıyabildiği için bu sayılar toplanmaz. 120 soru çok temsilli olarak işaretlenmiştir.

**Eğilim:** Soru kökü çoğu zaman konu adını söylemez. Öğrenciden bir günlük durumu denklem/oran tablosuna, şekli açı-uzunluk ilişkisine veya tabloyu sayısal karşılaştırmaya çevirmesi beklenir.

**Pedagojik öneri:** Konu çalışmasında yalnız formül sorusu çözmek yeterli değildir. Her derste aynı kavramın sözel, tablo, şekil ve cebir temsilleri arasında geçiş yaptırılmalıdır.

### 2. Problem ailesi ana taşıyıcıdır

**Gözlem:** Baskın konu sınıflandırmasında 2018-2026 boyunca 108 problem kaydı vardır. Sayı, kesir, yaş, yüzde, kâr-zarar, karışım, iş, hareket, takvim, yerleşim ve rutin olmayan düzenekler aynı üst ailede buluşur.

**Eğilim:** İşlem çoğu kez dört işlem veya birinci derece denklem düzeyindedir; seçicilik, niceliği doğru adlandırma, birimleri eşitleme, süreçte sabit kalan büyüklüğü bulma ve birden çok koşulu eksiksiz taşımadan gelir.

**Pedagojik öneri:** Problem öğretimi alt tür formülü ezberletmemeli. DRKOÇ sırası `verilen–istenen–birim → temsil → değişmez ilişki → çözüm → bağlama dönüş` olmalıdır.

### 3. Okuma yükü işlem yükünden bağımsızdır

**Gözlem:** Metadata göstergesinde 290 soru orta/yüksek okuma yükü, 192 soru orta işlem yükü taşır. Uzun soru her zaman ağır işlem; kısa soru da her zaman düşük akıl yürütme demek değildir.

**Kritik ayrım:** Çözüm süresi yalnız metin uzunluğuyla tahmin edilemez. Şekil tarama, seçenek karşılaştırma, olasılık durumlarını eksiksiz sayma ve geometrik yardımcı çizgi de bilişsel süre üretir.

**Pedagojik öneri:** Süre çalışmasında öğrencinin yalnız toplam saniyesi değil, `okuma / model kurma / işlem / kontrol` kırılımı tutulmalıdır.

### 4. Geometri şekilden kesin bilgi seçmeyi ölçer

**Gözlem:** 90 geometri kaydının baskın dağılımında açılar-üçgenler 33, dörtgenler 24, çokgenler 9, katı cisimler 17, analitik geometri 4 ve çember-daire 3 kez görünür.

**Eğilim:** Doğrudan teorem adını sormak yerine katlama, yerleştirme, merdiven, pencere, yol, kap veya açınım gibi bir düzenekte teorem seçtirilir. Şekil ölçekli olmadığından görünüşe dayalı varsayım güçlü bir çeldiricidir.

**Pedagojik öneri:** Her geometri çözümünde `verilen işaretler`, `çıkarılan kesin ilişkiler` ve `yardımcı çizginin amacı` ayrı yazılmalıdır.

### 5. Seyrek doğrudan etiket, önemsiz konu anlamına gelmez

**Gözlem:** Çarpanlara ayırma, polinom, çember ve analitik geometri bağımsız baskın etiket olarak seyrektir.

**Kritik ayrım:** Bu başlıkların becerileri başka sorular içinde araç olarak kullanılabilir. Örneğin çarpan yapısı denklemde, analitik uzaklık geometride, oran ise problem ve benzerlikte görünür.

**Pedagojik öneri:** Çalışma önceliği yalnız frekansa değil ön koşul ve transfer değerine göre belirlenmelidir.

## Tekrarlanan soru mimarileri

| Mimari | Ölçülen esas beceri | Sık çeldirici | Güvenli refleks |
|---|---|---|---|
| Yeni tanımlanmış işlem/özellik | Tanımı örneğe eksiksiz uygulama | Alışılmış işlemi sürdürme | Tanımı sembol yerine cümleyle yeniden yaz |
| Çok koşullu sayı/rakam | Kesişim kümesini daraltma | Bir koşulu sonradan unutma | Her koşul için ayrı onay kutusu |
| Tablo veya grafik + metin | Temsiller arası veri eşleme | Eksen/birim/toplamı atlama | Başlık–eksen–birim–bütün kontrolü |
| Günlük yaşam problemi | Nicelik ve değişmez ilişki | Metindeki her sayıyı kullanma | Nicelik-birim tablosu kur |
| Düzenek/örüntü | Kuralı küçük örnekten genelleme | İlk birkaç adıma bakıp acele genelleme | Döngü, değişim ve sınır durumunu ayır |
| Şekil/geometri | Zorunlu teoremi seçme | Görsel ölçü varsayımı | Yalnız işaretli bilgiyi kesin kabul et |
| Seçim/olasılık | Durumları bir kez ve eksiksiz sayma | Sıra/tekrar/tümleyen hatası | Sıra–tekrar–yasak sorularını önce cevapla |

## Zorluk ve süre etiketlerinin sınırı

Envanterdeki süre ve zorluk değerleri öğrenci performansından elde edilmiş resmî istatistik değildir. Metin/temsil sayısı, işlem adımı ve modelleme ihtiyacından türetilen editöryal tahmindir. Gerçek güçlük; öğrencinin ön bilgisi, okuma hızı ve seçtiği yönteme göre değişir.

## Geleceğe ilişkin sınır

**Kesin tahmin yapılamaz:** Dokuz yıllık frekans, gelecek TYT'de hangi konudan kaç soru geleceğini garanti etmez. Sistem bu nedenle bütün güncel kapsamı öğretir; geçmiş veriyi yalnız örnek seçimi, temsil çeşitliliği ve çalışma önceliği için kullanır.

## Yeniden üretim

Çalışma alanındaki resmî PDFler kullanılarak envanter şu komutla yeniden üretilebilir:

```bash
/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 \
  tyt-matematik/arastirma/soru-envanteri-uret.py
```

Kaynak URLleri ve erişim notları `kaynakca.md` dosyasındadır.

