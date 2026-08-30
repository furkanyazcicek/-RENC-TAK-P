/**
 * MEB 2026 Coğrafya Dersi Öğretim Programı izleme modeli.
 *
 * Kaynak: https://mufredat.meb.gov.tr/Dosyalar/2026518151120283-cogd%C3%B6p.pdf
 * Birim sayfaları: https://tymm.meb.gov.tr/ogretim-programlari/cografya-dersi/11…14
 * Erişim / son doğrulama: 2026-08-29
 *
 * `durum: uygulandi` yalnız çalışan bir DRKOÇ etkileşimine bağlanan çıktıyı,
 * `durum: eslendi` ise ürün omurgasında yeri belirlenmiş fakat özgün dikey
 * dilimi henüz tamamlanmamış çıktıyı ifade eder. Bu ayrım arayüzde saklanmaz.
 */

const cikti = (
  id,
  baslik,
  bolge,
  etkilesimId,
  gorselTemsil,
  etkilesim,
  olcmeKaniti,
  surecBilesenleri,
  durum = 'eslendi',
) => ({
  id,
  baslik,
  bolge,
  etkilesimId,
  gorselTemsil,
  etkilesim,
  uygulamaSorusu: `${baslik} için yeni bir mekânsal kanıttan çıkarım yap.`,
  olcmeKaniti,
  surecBilesenleri,
  durum,
  sourceIds: ['meb-cografya-2026'],
})

const birim = ({ sinif, no, ad, saat, alan, kavramsal, okuryazarlik, kavramlar, kanitlar, ciktilar }) => ({
  id: `cog-${sinif}-${no}`,
  sinif,
  no,
  ad,
  saat,
  alanBecerileri: alan,
  kavramsalBeceriler: kavramsal,
  okuryazarlik,
  anahtarKavramlar: kavramlar,
  olcmeOnerileri: kanitlar,
  url: `https://tymm.meb.gov.tr/cografya-dersi/unite/${({
    '9-1': 28, '9-2': 31, '9-3': 34, '9-4': 37, '9-5': 40, '9-6': 42, '9-7': 47,
    '10-1': 56, '10-2': 58, '10-3': 63, '10-4': 81, '10-5': 89, '10-6': 94, '10-7': 98,
    '11-1': 107, '11-2': 110, '11-3': 114, '11-4': 123, '11-5': 253, '11-6': 255, '11-7': 257,
    '12-1': 258, '12-2': 262, '12-3': 272, '12-4': 277, '12-5': 280, '12-6': 283, '12-7': 285,
  })[`${sinif}-${no}`]}`,
  ciktilar,
})

const KANIT = {
  harita: 'Harita okuma/oluşturma görevi ve gerekçeli çıkarım',
  grafik: 'Grafik veya tablo yorumlama görevi ve transfer sorusu',
  sorgu: 'Açık uçlu sorgulama, karar gerekçesi ve öz değerlendirme',
  model: 'Model değişkeniyle deney, kontrol sorusu ve yeni duruma transfer',
  urun: 'Dijital ürün, analitik dereceli puanlama anahtarı ve öz değerlendirme',
}

export const MEB_COGRAFYA_2026 = [
  birim({ sinif: 9, no: 1, ad: 'Coğrafyanın Doğası', saat: 6, alan: ['SBAB7.11 Mekânsal çözümleme'], kavramsal: ['KB2.4 Çözümleme', 'KB2.6 Bilgi toplama'], okuryazarlik: ['OB1 Bilgi', 'OB4 Görsel'], kavramlar: ['coğrafi bakış', 'fiziki coğrafya', 'beşerî coğrafya', 'atmosfer', 'hidrosfer', 'litosfer', 'biyosfer', 'kriyosfer'], kanitlar: ['Zihin haritası', 'Frayer diyagramı', 'Gazete haberi'], ciktilar: [
    cikti('COĞ.9.1.1', 'Coğrafya biliminin konusu ve bölümlerini çözümleyebilme', 'sistemler', 'sistem-katmanlari', 'Kavram ağı ve Dünya sistemleri kesiti', 'Doğal/beşerî bileşenleri sınıflandırma', KANIT.model, ['bileşenleri belirler', 'ilişkileri belirler'], 'uygulandi'),
    cikti('COĞ.9.1.2', 'Örnek olay, olgu veya konu üzerinden mekânsal düşünme ile coğrafya öğrenmenin önemini çözümleyebilme', 'sistemler', 'sistem-katmanlari', 'Katmanlı neden–sonuç haritası', 'Olayı mekânsal kanıtlarla çözümleme', KANIT.sorgu, ['olayı belirler', 'coğrafya öğrenmenin önemiyle ilişkilendirir'], 'uygulandi'),
    cikti('COĞ.9.1.3', 'Coğrafya biliminin gelişimi hakkında bilgi toplayabilme', 'sistemler', 'sistem-katmanlari', 'Bilim insanları zaman çizelgesi', 'Kaynak güvenilirliğini karşılaştırma', KANIT.urun, ['araç belirler', 'bilgiye ulaşır', 'doğrular', 'kaydeder']),
  ] }),
  birim({ sinif: 9, no: 2, ad: 'Mekânsal Bilgi Teknolojileri', saat: 16, alan: ['SBAB10 Harita'], kavramsal: ['KB2.4 Çözümleme', 'KB2.13 Yapılandırma'], okuryazarlik: ['OB1 Bilgi', 'OB2 Dijital', 'OB4 Görsel'], kavramlar: ['harita', 'ölçek', 'projeksiyon', 'izohips', 'koordinat', 'yerel saat', 'CBS', 'uzaktan algılama'], kanitlar: ['Çalışma yaprağı', 'Harita üretme görevi'], ciktilar: [
    cikti('COĞ.9.2.1', 'Harita uygulamaları yapabilme', 'harita-bilgisi', 'olcek-laboratuvari', 'Ölçek, izohips ve profil yüzeyi', 'Harita okuma, ölçme ve oluşturma', KANIT.harita, ['okur', 'çözümler', 'çıkarım yapar', 'harita oluşturur'], 'uygulandi'),
    cikti('COĞ.9.2.2', 'Türkiye’nin konum özelliklerini algılayabilme', 'konum', 'koordinat-saati', 'Koordinat ağı ve Türkiye konum katmanları', 'Koordinat/yerel saat manipülasyonu', KANIT.model, ['özellikleri belirler', 'görselleştirir', 'özetler'], 'uygulandi'),
    cikti('COĞ.9.2.3', 'Mekânsal bilgi teknolojilerini oluşturan bileşenleri çözümleyebilme', 'harita-bilgisi', 'olcek-laboratuvari', 'CBS katman ve veri akışı diyagramı', 'Veri–donanım–yöntem eşleştirme', KANIT.harita, ['bileşenleri belirler', 'ilişkileri belirler']),
  ] }),
  birim({ sinif: 9, no: 3, ad: 'Doğal Sistemler ve Süreçler', saat: 26, alan: ['SBAB4 Değişim ve süreklilik', 'SBAB11 Grafik/diyagram'], kavramsal: ['KB2.4 Çözümleme', 'KB2.11 Gözleme dayalı tahmin'], okuryazarlik: ['OB2 Dijital', 'OB4 Görsel', 'OB7 Veri', 'OB8 Sürdürülebilirlik'], kavramlar: ['hava olayı', 'iklim sistemi', 'sıcaklık', 'basınç', 'rüzgâr', 'nem', 'yağış', 'iklim değişikliği'], kanitlar: ['İklim grafiği', 'Bilgi görseli', 'Öğrenme günlüğü'], ciktilar: [
    cikti('COĞ.9.3.1', 'Hava olaylarının günlük hayata etkisini gözleme dayalı tahmin edebilme', 'iklim', 'atmosfer-laboratuvari', 'Hava değişkenleri laboratuvarı', 'Veriyi değiştirip günlük etki tahmini', KANIT.model, ['ilişkilendirir', 'çıkarım yapar', 'yargıda bulunur'], 'uygulandi'),
    cikti('COĞ.9.3.2', 'İklim sisteminin bileşen ve değişkenlerini çözümleyebilme', 'iklim', 'atmosfer-laboratuvari', 'Basınç–rüzgâr–nem süreç modeli', 'Senkron değişken manipülasyonu', KANIT.model, ['bileşenleri belirler', 'ilişkileri belirler'], 'uygulandi'),
    cikti('COĞ.9.3.3', 'Türkiye ve dünyadaki farklı iklim türlerine sahip yerlerin iklim verilerini kullanarak tablo, grafik, şekil ve/veya diyagram hazırlayabilme', 'iklim', 'iklim-grafigi', 'Klimograf ve karşılaştırmalı seri', 'İstasyon seçme ve grafiği yorumlama', KANIT.grafik, ['amaç belirler', 'araç belirler', 'veri toplar', 'sınıflandırır', 'görselleştirir', 'kullanır'], 'uygulandi'),
    cikti('COĞ.9.3.4', 'İklim sistemi ve sürecinde meydana gelen değişiklikleri algılayabilme', 'iklim', 'iklim-grafigi', 'Senaryo karşılaştırmalı iklim grafiği', 'Önce/sonra desenini yorumlama', KANIT.grafik, ['karşılaştırır', 'sıralar', 'neden-sonuç yorumlar', 'sentezler', 'öngörür']),
  ] }),
  birim({ sinif: 9, no: 4, ad: 'Beşerî Sistemler ve Süreçler', saat: 14, alan: ['SBAB8 Coğrafi sorgulama', 'SBAB10 Harita', 'SBAB11 Grafik/diyagram'], kavramsal: [], okuryazarlik: ['OB1 Bilgi', 'OB4 Görsel', 'OB7 Veri'], kavramlar: ['nüfus dağılışı', 'göç', 'nüfus piramidi', 'demografik dönüşüm', 'bağımlı nüfus'], kanitlar: ['Nüfus grafiği', 'Harita çıkarımı', 'Karşılaştırma'], ciktilar: [
    cikti('COĞ.9.4.1', 'Nüfusun zaman içerisindeki değişimini tablo ve grafikler aracılığı ile yorumlayabilme', 'nufus', 'nufus-piramidi', 'Nüfus zaman serisi ve piramit', 'Veri serilerini karşılaştırma', KANIT.grafik, ['anlamlandırır', 'ilişkileri çözümler', 'sonuç çıkarır', 'karşılaştırır'], 'uygulandi'),
    cikti('COĞ.9.4.2', 'Dünya ve Türkiye’deki nüfusun dağılışı ve hareketlerini etkileyen faktörler hakkında haritalar üzerinden çıkarımda bulunabilme', 'nufus', 'yogunluk-laboratuvari', 'Yoğunluk ve göç katmanları', 'Paydayı/katmanı değiştirerek çıkarım', KANIT.harita, ['haritaları ilişkilendirir', 'çıkarım yapar'], 'uygulandi'),
    cikti('COĞ.9.4.3', 'Türkiye ve farklı ülkelerin nüfus piramitlerinden yararlanarak demografik dönüşüm sürecini yorumlayabilme', 'nufus', 'nufus-piramidi', 'Nüfus piramidi stüdyosu', 'Yaş paylarını değiştirip hizmet kararı verme', KANIT.model, ['anlamlandırır', 'çözümler', 'sonuç çıkarır', 'karşılaştırır'], 'uygulandi'),
  ] }),
  birim({ sinif: 9, no: 5, ad: 'Ekonomik Faaliyetler ve Etkileri', saat: 4, alan: ['SBAB8 Coğrafi sorgulama'], kavramsal: [], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['üretim', 'dağıtım', 'tüketim', 'hammadde', 'iş gücü', 'sermaye', 'teknoloji'], kanitlar: ['KWL', 'Mekânsal diyagram'], ciktilar: [
    cikti('COĞ.9.5.1', 'Doğal ve beşerî faktörlerin ekonomik faaliyetlere etkilerini sorgulayabilme', 'ekonomi', 'kurulus-yeri', 'Kuruluş yeri ve değer zinciri ağı', 'Ağırlıklı yer seçimi kararı', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır'], 'uygulandi'),
  ] }),
  birim({ sinif: 9, no: 6, ad: 'Afetler ve Sürdürülebilir Çevre', saat: 8, alan: ['SBAB11 Grafik/diyagram'], kavramsal: ['KB2.4 Çözümleme', 'KB2.5 Sınıflandırma'], okuryazarlik: ['OB1 Bilgi', 'OB2 Dijital', 'OB4 Görsel'], kavramlar: ['tehlike', 'risk', 'maruziyet', 'afet', 'erken uyarı', 'bütüncül afet yönetimi'], kanitlar: ['Yapılandırılmış grid', 'Afet senaryosu'], ciktilar: [
    cikti('COĞ.9.6.1', 'Tehlike, risk ve afet kavramlarını çözümleyebilme', 'afet', 'risk-katmanlari', 'Tehlike–maruziyet–kırılganlık katmanları', 'Risk bileşenlerini değiştirip karşılaştırma', KANIT.model, ['özellikleri belirler', 'ilişkileri belirler'], 'uygulandi'),
    cikti('COĞ.9.6.2', 'Afetleri sınıflandırabilme', 'afet', 'risk-katmanlari', 'Afet türleri sınıflandırma yüzeyi', 'Oluşum kaynağına göre eşleştirme', KANIT.sorgu, ['belirler', 'ayrıştırır', 'tasnif eder', 'etiketler'], 'uygulandi'),
    cikti('COĞ.9.6.3', 'Bütüncül afet yönetimi uygulamalarını tablo, grafik, şekil ve/veya diyagramlar aracılığıyla yorumlayabilme', 'afet', 'afet-dongusu', 'Afet yönetimi zaman döngüsü', 'Aşamaları senaryoya yerleştirme', KANIT.grafik, ['anlamlandırır', 'çözümler', 'sonuç çıkarır', 'karşılaştırır'], 'uygulandi'),
  ] }),
  birim({ sinif: 9, no: 7, ad: 'Bölgeler, Ülkeler ve Küresel Bağlantılar', saat: 4, alan: ['SBAB7.6 Bölge belirleme', 'SBAB7.7 Hiyerarşi', 'SBAB7.8 Geçiş', 'SBAB7.10 Desen'], kavramsal: [], okuryazarlik: ['OB2 Dijital'], kavramlar: ['bölge', 'bölge sınırı', 'işlevsel bölge', 'şekilsel bölge'], kanitlar: ['Bölge çizme görevi', 'Karşılaştırma'], ciktilar: [
    cikti('COĞ.9.7.1', 'Bölgelerin belirlenmesinde kullanılan kriterlere göre bölge hakkında çıkarım yapabilme', 'sistemler', 'bolge-olustur', 'Kriter katmanlı hücre haritası', 'Aynı alanı farklı ölçütlerle bölgeleme', KANIT.harita, ['varsayımda bulunur', 'örüntüleri listeler', 'karşılaştırır', 'önerme sunar', 'değerlendirir'], 'uygulandi'),
  ] }),

  birim({ sinif: 10, no: 1, ad: 'Coğrafyanın Doğası', saat: 4, alan: ['SBAB7 Mekânsal düşünme'], kavramsal: [], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['konum', 'zaman', 'mekân', 'hareket', 'dağılış', 'değişim'], kanitlar: ['Kısa rapor', 'Açık uçlu soru'], ciktilar: [
    cikti('COĞ.10.1.1', 'Örnek olay, olgu ve/veya mekânı coğrafyanın temel kavramları ile ilişkilendirebilme', 'sistemler', 'sistem-katmanlari', 'Çok katmanlı örnek olay haritası', 'Konum–bağlantı–etki sorgusu', KANIT.sorgu, ['konumu algılar', 'koşulları tanımlar', 'bağlantıları çözümler', 'etkiyi sorgular'], 'uygulandi'),
  ] }),
  birim({ sinif: 10, no: 2, ad: 'Mekânsal Bilgi Teknolojileri', saat: 6, alan: ['SBAB10.4 Harita oluşturma'], kavramsal: ['KB2.3 Özetleme'], okuryazarlik: ['OB2 Dijital', 'OB4 Görsel', 'OB7 Veri'], kavramlar: ['CBS', 'uzaktan algılama', 'vektör veri', 'altlık harita'], kanitlar: ['CBS kullanım özeti', 'Altlık harita üretimi'], ciktilar: [
    cikti('COĞ.10.2.1', 'Örnek uygulamalar üzerinden CBS ve uzaktan algılamanın kullanım alanlarını özetleyebilme', 'harita-bilgisi', 'olcek-laboratuvari', 'CBS kullanım alanları katman ağı', 'Uygulamaları amaçlarına göre sınıflandırma', KANIT.harita, ['çözümler', 'sınıflandırır', 'yorumlar']),
    cikti('COĞ.10.2.2', 'Mekânsal bilgi teknolojilerini kullanarak altlık haritalar üzerinde mekânsal veriler oluşturabilme', 'harita-bilgisi', 'olcek-laboratuvari', 'Altlık ve vektör veri tuvali', 'Nokta/çizgi/alan verisi ekleme', KANIT.urun, ['amaç belirler', 'araç kullanır', 'veri toplar', 'tür belirler', 'işler', 'kullanır', 'yeniden kullanır']),
  ] }),
  birim({ sinif: 10, no: 3, ad: 'Doğal Sistemler ve Süreçler', saat: 18, alan: ['SBAB8 Coğrafi sorgulama', 'SBAB9 Saha çalışması'], kavramsal: ['KB2.4 Çözümleme', 'KB2.13 Yapılandırma'], okuryazarlik: ['OB2 Dijital', 'OB4 Görsel'], kavramlar: ['levha', 'fay', 'deprem', 'volkanizma', 'kayaç döngüsü', 'aşınım', 'birikim'], kanitlar: ['Sanal saha raporu', 'Süreç modeli'], ciktilar: [
    cikti('COĞ.10.3.1', 'Yerkürenin tektonik yapısını çözümleyebilme', 'yerkure', 'levha-surecleri', 'Levha sınırı kesiti', 'Levha hareketini değiştirip sonucu gözleme', KANIT.model, ['süreçleri belirler', 'yer şekilleriyle ilişkilendirir'], 'uygulandi'),
    cikti('COĞ.10.3.2', 'Yeryüzü şekillerinin oluşumunda etkili olan aşınma ve çözünme süreçleri ile iklim ve kayaç özellikleri arasındaki ilişkileri yapılandırabilme', 'yerkure', 'dis-kuvvetler', 'Kayaç–iklim–aşınma süreç modeli', 'Kayaç ve iklim değişkenlerini karşılaştırma', KANIT.model, ['neden-sonuç kurar', 'bilgileri bütünleştirir'], 'uygulandi'),
    cikti('COĞ.10.3.3', 'Yeryüzü şekillerinin oluşumunu aşınım ve birikim süreçleri açısından çözümleyebilme', 'yerkure', 'dis-kuvvetler', 'Havza süreç animasyonu', 'Akış enerjisi ve birikimi manipüle etme', KANIT.model, ['şekilleri belirler', 'süreçle ilişkilendirir'], 'uygulandi'),
    cikti('COĞ.10.3.4', 'Yeryüzü şekillerinin oluşumunda doğal süreçlerin etkilerini saha/sanal saha çalışmalarıyla araştırabilme', 'yerkure', 'dis-kuvvetler', 'Sanal arazi kesiti ve kanıt noktaları', 'Saha kanıtı seçme ve profil çıkarma', KANIT.urun, ['hazırlık yapar', 'uygular', 'bilgi toplar', 'çözümler', 'tahmin eder', 'raporlar'], 'uygulandi'),
    cikti('COĞ.10.3.5', 'Yakın çevresindeki yeryüzü şekilleri ile beşerî faaliyetler arasındaki etkileşimi sorgulayabilme', 'yerlesme', 'yer-secimi', 'Arazi–yerleşme karar katmanları', 'Kuruluş yeri senaryosu', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır'], 'uygulandi'),
  ] }),
  birim({ sinif: 10, no: 4, ad: 'Beşerî Sistemler ve Süreçler', saat: 8, alan: ['SBAB8 Coğrafi sorgulama'], kavramsal: ['KB2.5 Sınıflandırma'], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['yerleşme yeri', 'sit', 'situasyon', 'kır', 'şehir', 'işlev'], kanitlar: ['Yer seçimi oyunu', 'Fonksiyon sınıflandırma'], ciktilar: [
    cikti('COĞ.10.4.1', 'Yerleşme yeri seçiminde ve yerleşmelerin gelişiminde etkili olan coğrafi faktörleri sorgulayabilme', 'yerlesme', 'yer-secimi', 'Kuruluş yeri karar haritası', 'Etken ağırlıklarını değiştirerek yer seçme', KANIT.model, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır'], 'uygulandi'),
    cikti('COĞ.10.4.2', 'Türkiye ve dünyadaki yerleşmeleri fonksiyonlarına göre sınıflandırabilme', 'yerlesme', 'kent-agi', 'Kent işlev ve etki ağı', 'İşlevleri kanıtlarıyla sınıflandırma', KANIT.sorgu, ['değişkenleri belirler', 'ayrıştırır', 'tasnif eder', 'etiketler'], 'uygulandi'),
  ] }),
  birim({ sinif: 10, no: 5, ad: 'Ekonomik Faaliyetler ve Etkileri', saat: 10, alan: ['SBAB11 Grafik/diyagram'], kavramsal: ['KB2.5 Sınıflandırma'], okuryazarlik: ['OB3 Finansal', 'OB4 Görsel', 'OB7 Veri'], kavramlar: ['ekonomik sektör', 'GSYİH', 'GSMH', 'gelişmişlik', 'istihdam'], kanitlar: ['Sektör grafiği', 'Bilgi görseli'], ciktilar: [
    cikti('COĞ.10.5.1', 'Ekonomik faaliyetleri sektörlere göre sınıflandırabilme', 'ekonomi', 'kurulus-yeri', 'Üretim–dağıtım–tüketim ağı', 'Faaliyetleri sektörlere ayırma', KANIT.sorgu, ['ölçüt belirler', 'ayırır', 'tasnif eder', 'etiketler'], 'uygulandi'),
    cikti('COĞ.10.5.2', 'Ekonomik sektörlerin dağılımını gösteren tablo, grafik, şekil ve/veya diyagramlar üzerinden farklı gelişmişlik seviyesine sahip ülkeleri karşılaştırabilme', 'ekonomi', 'ulasim-enerji', 'Sektörel dağılım karşılaştırma grafiği', 'Ülke verilerini eş zamanlı karşılaştırma', KANIT.grafik, ['anlamlandırır', 'çözümler', 'sonuç çıkarır', 'karşılaştırır']),
    cikti('COĞ.10.5.3', 'Ekonomik sektörlerin Türkiye ekonomisindeki yeri ve önemini gösteren tablo, grafik, şekil ve/veya diyagram hazırlayabilme', 'ekonomi', 'kurulus-yeri', 'Türkiye sektör grafiği stüdyosu', 'Veri seçip uygun grafik oluşturma', KANIT.urun, ['amaç belirler', 'araç belirler', 'veri toplar', 'sınıflandırır', 'görselleştirir', 'kullanır']),
  ] }),
  birim({ sinif: 10, no: 6, ad: 'Afetler ve Sürdürülebilir Çevre', saat: 10, alan: ['SBAB8 Coğrafi sorgulama'], kavramsal: ['KB3.1 Karar verme'], okuryazarlik: ['OB1 Bilgi', 'OB2 Dijital', 'OB4 Görsel', 'OB6 Vatandaşlık'], kavramlar: ['afet direnci', 'hazırlık', 'zarar azaltma', 'erken uyarı'], kanitlar: ['İyi uygulama incelemesi', 'Dirençli şehir tasarımı'], ciktilar: [
    cikti('COĞ.10.6.1', 'Afetlerle mücadelede iyi uygulama örneklerini sorgulayabilme', 'afet', 'afet-dongusu', 'Afet yönetimi örnek olay kartları', 'Uygulamaları kanıtlarıyla karşılaştırma', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır'], 'uygulandi'),
    cikti('COĞ.10.6.2', 'Afete dirençli yaşam alanlarının coğrafi koşullarını çözümleyebilme', 'afet', 'risk-katmanlari', 'Risk ve arazi kullanımı katmanları', 'Maruziyet/kırılganlık karşılaştırma', KANIT.model, ['koşulları tanımlar', 'mekânsal ilişkileri çözümler'], 'uygulandi'),
    cikti('COĞ.10.6.3', 'Mekânın özelliklerine göre afetlerden korunma uygulamalarına karar verebilme', 'afet', 'afet-dongusu', 'Afet kararı simülasyonu', 'Alternatif üretip sonuçları tartma', KANIT.sorgu, ['amaç belirler', 'bilgi toplar', 'seçenek üretir', 'çıkarım yapar', 'seçer', 'yansıtır'], 'uygulandi'),
  ] }),
  birim({ sinif: 10, no: 7, ad: 'Bölgeler, Ülkeler ve Küresel Bağlantılar', saat: 6, alan: ['SBAB7.9 Mekânsal analoji'], kavramsal: [], okuryazarlik: ['OB5 Kültür'], kavramlar: ['Türkistan', 'Türk dünyası', 'kültür ocağı', 'kültürel miras'], kanitlar: ['Kültürel mekân haritası', 'Kamu spotu'], ciktilar: [
    cikti('COĞ.10.7.1', 'Türk dünyasının ortak kültürel özellikleri hakkında analojik çıkarım yapabilme', 'sistemler', 'bolge-olustur', 'Kültürel özellik katmanları', 'Benzerlik ölçütüyle bölge kurma', KANIT.harita, ['alanları gözlemler', 'özellikleri tespit eder', 'çıkarım yapar']),
  ] }),

  birim({ sinif: 11, no: 1, ad: 'Coğrafyanın Doğası', saat: 6, alan: [], kavramsal: ['KB2.13 Yapılandırma'], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['mekânsal sorun', 'bilimsel yaklaşım', 'dağılış', 'bağlantı'], kanitlar: ['Bilimsel çalışma raporu'], ciktilar: [
    cikti('COĞ.11.1.1', 'Mekânsal sorunların çözümünde coğrafya biliminin katkılarını yapılandırabilme', 'sistemler', 'sistem-katmanlari', 'Mekânsal sorun neden ağı', 'Çözüm önerisini katmanlarla sınama', KANIT.sorgu, ['nedensel ilişkiler kurar', 'bilgileri bütünleştirir']),
  ] }),
  birim({ sinif: 11, no: 2, ad: 'Mekânsal Bilgi Teknolojileri', saat: 12, alan: ['SBAB10 Harita'], kavramsal: [], okuryazarlik: ['OB2 Dijital', 'OB4 Görsel', 'OB7 Veri'], kavramlar: ['web CBS', 'katman', 'öz nitelik', 'sorgulama', 'yaşayan atlas'], kanitlar: ['Web CBS haritası'], ciktilar: [
    cikti('COĞ.11.2.1', 'Web tabanlı CBS aracılığı ile harita uygulamaları yapabilme', 'harita-bilgisi', 'olcek-laboratuvari', 'Web-CBS çalışma alanı', 'Katman açma, sorgulama ve harita üretme', KANIT.urun, ['okur', 'çözümler', 'çıkarım yapar', 'oluşturur']),
  ] }),
  birim({ sinif: 11, no: 3, ad: 'Doğal Sistemler ve Süreçler', saat: 16, alan: ['SBAB8 Coğrafi sorgulama'], kavramsal: ['KB2.5 Sınıflandırma'], okuryazarlik: ['OB1 Bilgi', 'OB8 Sürdürülebilirlik'], kavramlar: ['su kaynağı', 'sınıraşan sular', 'deniz yetki alanı', 'Mavi Vatan', 'su yönetimi'], kanitlar: ['Su kaynakları sınıflandırması', 'Su yönetimi raporu'], ciktilar: [
    cikti('COĞ.11.3.1', 'Yeryüzündeki su kaynaklarını sınıflandırabilme', 'yasam-kusaklari', 'havza-rejimi', 'Havza ve su türleri diyagramı', 'Su kaynaklarını ölçütle sınıflandırma', KANIT.sorgu, ['ölçüt belirler', 'ayrıştırır', 'tasnif eder', 'etiketler'], 'uygulandi'),
    cikti('COĞ.11.3.2', 'Türkiye’deki su kaynaklarının çevresel, ekonomik, politik ve sosyokültürel etkilerini sorgulayabilme', 'yasam-kusaklari', 'havza-rejimi', 'Havza kullanım katmanları', 'Su bütçesi ve paydaş kararı', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
  ] }),
  birim({ sinif: 11, no: 4, ad: 'Beşerî Sistemler ve Süreçler', saat: 12, alan: ['SBAB7 Mekânsal düşünme'], kavramsal: [], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['mekânsal organizasyon', 'hiyerarşi', 'etki alanı', 'desen'], kanitlar: ['Yerleşme organizasyonu analizi'], ciktilar: [
    cikti('COĞ.11.4.1', 'Türkiye ve dünyadaki yerleşmelerin mekânsal organizasyonunu çözümleyebilme', 'yerlesme', 'kent-agi', 'Kent ağı ve hiyerarşi görünümü', 'Desen, bağlantı ve geçiş karşılaştırma', KANIT.harita, ['deseni algılar', 'koşulları tanımlar', 'bölge belirler', 'geçiş çıkarımı yapar', 'bağlantı ve hiyerarşiyi çözümler', 'karşılaştırır'], 'uygulandi'),
    cikti('COĞ.11.4.2', 'Türkiye ve dünyadaki yerleşmelerin etki alanını sorgulayabilme', 'yerlesme', 'kent-agi', 'Şehir etki alanı ağı', 'Etki alanını ölçekle karşılaştırma', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'çıkarım yapar'], 'uygulandi'),
  ] }),
  birim({ sinif: 11, no: 5, ad: 'Ekonomik Faaliyetler ve Etkileri', saat: 30, alan: ['SBAB8 Coğrafi sorgulama', 'SBAB11 Grafik/diyagram'], kavramsal: [], okuryazarlik: ['OB1 Bilgi', 'OB2 Dijital', 'OB7 Veri', 'OB8 Sürdürülebilirlik'], kavramlar: ['gıda güvencesi', 'sürdürülebilir tarım', 'kritik maden', 'enerji karması', 'sanayi'], kanitlar: ['Ülke karşılaştırması', 'Enerji senaryosu'], ciktilar: [
    cikti('COĞ.11.5.1', 'Tarımsal faaliyetleri gıda güvencesi açısından sorgulayabilme', 'ekonomi', 'kurulus-yeri', 'Tarım–su–pazar akışı', 'Gıda güvencesi karar senaryosu', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
    cikti('COĞ.11.5.2', 'Dünya ve Türkiye’deki tarım uygulamalarını sürdürülebilirlik ölçütlerine göre değerlendirebilme', 'ekonomi', 'kurulus-yeri', 'Tarım uygulaması karşılaştırma grafiği', 'Ölçüt ağırlıklarıyla değerlendirme', KANIT.grafik, ['ölçüte ulaşır', 'özellik tespit eder', 'karşılaştırır', 'yargıda bulunur']),
    cikti('COĞ.11.5.3', 'Dünya ve Türkiye’de bulunan stratejik-kritik madenlerin ülke ekonomileri ve ülkeler arası ilişkilerdeki yerine yönelik çıkarım yapabilme', 'ekonomi', 'ulasim-enerji', 'Maden–sanayi–ticaret ağı', 'Katman ve akış karşılaştırma', KANIT.harita, ['varsayım kurar', 'eğilimi inceler', 'karşılaştırır', 'önerme sunar', 'değerlendirir']),
    cikti('COĞ.11.5.4', 'Dünya ve Türkiye’deki enerji kaynaklarının kullanımında meydana gelen değişim ve sürekliliği algılayabilme', 'ekonomi', 'ulasim-enerji', 'Enerji karması zaman serisi', 'Enerji karması senaryosu oluşturma', KANIT.grafik, ['karşılaştırır', 'sıralar', 'yorumlar', 'sentezler', 'öngörür']),
    cikti('COĞ.11.5.5', 'Sanayi faaliyetlerinin mekânsal etkilerini sorgulayabilme', 'ekonomi', 'kurulus-yeri', 'Sanayi etki ve kuruluş yeri katmanları', 'Yer seçimi ve dışsallık kararı', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'çıkarım yapar']),
  ] }),
  birim({ sinif: 11, no: 6, ad: 'Afetler ve Sürdürülebilir Çevre', saat: 18, alan: ['SBAB11 Grafik/diyagram'], kavramsal: ['KB2.5 Sınıflandırma', 'KB3.1 Karar verme'], okuryazarlik: ['OB1 Bilgi', 'OB8 Sürdürülebilirlik'], kavramlar: ['gezegen sınırı', 'iklim uyumu', 'su stresi', 'su ayak izi'], kanitlar: ['Gezegen sınırı içeriği', 'İklim stratejisi tartışması'], ciktilar: [
    cikti('COĞ.11.6.1', 'Gezegen sınırının zorlanması sonucu oluşan çevre sorunlarına yönelik içerik oluşturabilme', 'afet', 'risk-katmanlari', 'Gezegen sınırı gösterge yüzeyi', 'Sınır ve beşerî etkiyi eşleştirme', KANIT.urun, ['bileşenleri belirler', 'ilişki kurar', 'içerik oluşturur']),
    cikti('COĞ.11.6.2', 'Küresel iklim değişikliğinin etkilerini azaltma ve iklim değişikliğine uyum sağlamaya yönelik stratejileri tartışabilme', 'afet', 'afet-dongusu', 'Azaltım–uyum karar matrisi', 'Stratejileri gerekçeleriyle tartışma', KANIT.sorgu, ['temellendirir', 'tutarsızlığı tespit eder', 'kabul eder veya çürütür']),
    cikti('COĞ.11.6.3', 'Türkiye’de bulunan su kaynaklarının sürdürülebilir kullanımını sorgulayabilme', 'yasam-kusaklari', 'havza-rejimi', 'Su bütçesi ve stres göstergeleri', 'Kullanım senaryosu karşılaştırma', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
  ] }),
  birim({ sinif: 11, no: 7, ad: 'Bölgeler, Ülkeler ve Küresel Bağlantılar', saat: 36, alan: ['SBAB7 Mekânsal düşünme', 'SBAB11 Grafik/diyagram'], kavramsal: ['KB2.3 Özetleme'], okuryazarlik: ['OB1 Bilgi', 'OB4 Görsel', 'OB5 Kültür', 'OB7 Veri'], kavramlar: ['kültürel hinterland', 'tarım', 'sanayi', 'madencilik', 'enerji'], kanitlar: ['Ülke karşılaştırma çalışma alanı'], ciktilar: [
    cikti('COĞ.11.7.1', 'Türkiye ile Türkiye’nin kültürel açıdan güçlü ve köklü bağlara sahip olduğu yerler arasındaki etkileşimi sorgulayabilme', 'sistemler', 'bolge-olustur', 'Kültürel bağlantı ve etki ağı', 'Ölçüt temelli hinterland oluşturma', KANIT.harita, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'çıkarım yapar']),
    cikti('COĞ.11.7.2', 'Örnek bir ülkenin tarımsal üretim özelliklerini coğrafi açıdan özetleyebilme', 'ekonomi', 'kurulus-yeri', 'Ülke tarım profili', 'Veriyi çözümleyip özetleme', KANIT.grafik, ['çözümler', 'sınıflandırır', 'yorumlar']),
    cikti('COĞ.11.7.3', 'Örnek ülkelerin sanayileşme süreçlerini coğrafi açıdan karşılaştırabilme', 'ekonomi', 'kurulus-yeri', 'Sanayileşme zaman serisi', 'Ülke süreçlerini karşılaştırma', KANIT.grafik, ['özellik tanımlar', 'benzerlikleri listeler', 'farklılıkları listeler']),
    cikti('COĞ.11.7.4', 'Örnek bir ülkede yürütülen madencilik faaliyetleriyle ilgili tablo, grafik, şekil ve/veya diyagram hazırlayabilme', 'ekonomi', 'ulasim-enerji', 'Madencilik veri stüdyosu', 'Veri seçme ve grafik üretme', KANIT.urun, ['amaç belirler', 'araç belirler', 'veri toplar', 'sınıflandırır', 'görselleştirir', 'kullanır']),
    cikti('COĞ.11.7.5', 'Örnek ülkelerin enerji kaynaklarını coğrafi açıdan karşılaştırabilme', 'ekonomi', 'ulasim-enerji', 'Enerji karması karşılaştırması', 'Kaynak dağılımını karşılaştırma', KANIT.grafik, ['özellik tanımlar', 'benzerlikleri listeler', 'farklılıkları listeler']),
  ] }),

  birim({ sinif: 12, no: 1, ad: 'Coğrafyanın Doğası', saat: 6, alan: ['SBAB4.3 Kanıta dayalı öngörü'], kavramsal: [], okuryazarlik: ['OB1 Bilgi'], kavramlar: ['coğrafi kanıt', 'yapay zekâ', 'nesnelerin interneti', 'yeşil dönüşüm', 'geleceğin meslekleri'], kanitlar: ['Gelecek senaryosu ürünü'], ciktilar: [
    cikti('COĞ.12.1.1', 'Geleceğin dünyasında coğrafya biliminin etkilerine ilişkin öngörüde bulunabilme', 'sistemler', 'sistem-katmanlari', 'Gelecek coğrafyası senaryo ağı', 'Kanıtla gelecek senaryosu kurma', KANIT.urun, ['kanıt ve deneyimi ilişkilendirir', 'çıkarım yapar']),
  ] }),
  birim({ sinif: 12, no: 2, ad: 'Mekânsal Bilgi Teknolojileri', saat: 12, alan: ['SBAB10 Harita'], kavramsal: [], okuryazarlik: ['OB2 Dijital', 'OB4 Görsel', 'OB7 Veri'], kavramlar: ['tematik harita', 'veri aralığı', 'sembol', 'çakıştırma', 'dijital hikâye haritası'], kanitlar: ['Tematik harita üretimi'], ciktilar: [
    cikti('COĞ.12.2.1', 'Web tabanlı CBS ile oluşturulan tematik haritaları kullanarak uygulamalar yapabilme', 'harita-bilgisi', 'olcek-laboratuvari', 'Tematik harita üretim laboratuvarı', 'Semboloji ve katman çakıştırma', KANIT.urun, ['okur', 'çözümler', 'çıkarım yapar', 'oluşturur']),
  ] }),
  birim({ sinif: 12, no: 3, ad: 'Doğal Sistemler ve Süreçler', saat: 16, alan: ['SBAB8 Coğrafi sorgulama', 'SBAB9 Saha çalışması'], kavramsal: ['KB2.13 Yapılandırma'], okuryazarlik: ['OB1 Bilgi', 'OB4 Görsel'], kavramlar: ['toprak', 'ana kaya', 'endemik', 'relikt', 'bitki örtüsü', 'biyoçeşitlilik'], kanitlar: ['Toprak profili', 'Bitki haritası çıkarımı'], ciktilar: [
    cikti('COĞ.12.3.1', 'Toprak oluşum sürecini toprak türleri açısından yapılandırabilme', 'yasam-kusaklari', 'toprak-biyom', 'Toprak profili kesiti', 'Oluşum etkenlerini değiştirip profili gözleme', KANIT.model, ['ilişki kurar', 'bilgileri bütünleştirir'], 'uygulandi'),
    cikti('COĞ.12.3.2', 'Türkiye’de toprak kullanımının etkilerini sorgulayabilme', 'yasam-kusaklari', 'toprak-biyom', 'Toprak kullanımı katmanları', 'Kullanım senaryosu kararı', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
    cikti('COĞ.12.3.3', 'Coğrafi faktörlerin dünya ve Türkiye’deki bitki örtüsünün çeşitliliği ve dağılışı üzerindeki etkisi hakkında haritalardan çıkarım yapabilme', 'yasam-kusaklari', 'toprak-biyom', 'Bitki örtüsü ve yükselti transekti', 'İklim/topoğrafya katmanlarını karşılaştırma', KANIT.harita, ['haritaları karşılaştırır', 'çıkarım yapar'], 'uygulandi'),
  ] }),
  birim({ sinif: 12, no: 4, ad: 'Beşerî Sistemler ve Süreçler', saat: 16, alan: ['SBAB7 Mekânsal düşünme', 'SBAB8 Coğrafi sorgulama'], kavramsal: [], okuryazarlik: ['OB1 Bilgi', 'OB5 Kültür', 'OB8 Sürdürülebilirlik'], kavramlar: ['kültür', 'mekân', 'jeokültür', 'kültürel peyzaj', 'sürdürülebilirlik'], kanitlar: ['Kültürel peyzaj karşılaştırması'], ciktilar: [
    cikti('COĞ.12.4.1', 'Kültür-mekân etkileşimini coğrafi açıdan sorgulayabilme', 'yerlesme', 'kent-agi', 'Kültürel peyzaj katmanları', 'Kültürel unsur–mekân ilişkisi sorgusu', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'sonuç çıkarır']),
    cikti('COĞ.12.4.2', 'Kültürel peyzajı sürdürülebilirlik açısından karşılaştırabilme', 'yerlesme', 'kent-agi', 'Bölünmüş kültürel peyzaj görünümü', 'Sürdürülebilirlik ölçütüyle karşılaştırma', KANIT.grafik, ['koşul ve ölçüt tanımlar', 'benzerlikleri listeler', 'farklılıkları listeler']),
  ] }),
  birim({ sinif: 12, no: 5, ad: 'Ekonomik Faaliyetler ve Etkileri', saat: 22, alan: ['SBAB4 Değişim ve süreklilik', 'SBAB8 Coğrafi sorgulama'], kavramsal: [], okuryazarlik: ['OB1 Bilgi', 'OB2 Dijital', 'OB4 Görsel'], kavramlar: ['ulaşım sistemi', 'küresel ticaret', 'transit ticaret', 'turizm', 'doğal ve kültürel miras'], kanitlar: ['Ticaret akışı', 'Turizm etki senaryosu'], ciktilar: [
    cikti('COĞ.12.5.1', 'Dünya ve Türkiye’deki ulaşım sistemlerinin gelişim sürecinde meydana gelen değişim ve sürekliliği algılayabilme', 'ekonomi', 'ulasim-enerji', 'Ulaşım ağı zaman katmanları', 'Ağ gelişimini karşılaştırıp öngörme', KANIT.harita, ['karşılaştırır', 'sıralar', 'yorumlar', 'sentezler', 'öngörür']),
    cikti('COĞ.12.5.2', 'Küresel ticaretin mekânsal bağlantılarını çözümleyebilme', 'ekonomi', 'ulasim-enerji', 'Küresel ticaret akış haritası', 'Merkez ve koridor bağlantısı kurma', KANIT.harita, ['merkezleri belirler', 'bağlantıları belirler']),
    cikti('COĞ.12.5.3', 'Turizm faaliyetlerinin dünya ve Türkiye’deki sosyal, kültürel, ekonomik, politik ve çevresel etkilerini sorgulayabilme', 'ekonomi', 'ulasim-enerji', 'Turizm etki karar matrisi', 'Taşıma kapasitesi senaryosu', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
  ] }),
  birim({ sinif: 12, no: 6, ad: 'Afetler ve Sürdürülebilir Çevre', saat: 28, alan: ['SBAB10 Harita', 'SBAB11 Grafik/diyagram'], kavramsal: ['KB3.2 Problem çözme'], okuryazarlik: ['OB1 Bilgi', 'OB4 Görsel', 'OB8 Sürdürülebilirlik', 'OB9 Sanat'], kavramlar: ['sürdürülebilir toprak', 'bitki topluluğu', 'çevre politikası', 'uluslararası anlaşma', 'doğal ve kültürel miras'], kanitlar: ['Çevre politikası karşılaştırması', 'Çözüm önerisi'], ciktilar: [
    cikti('COĞ.12.6.1', 'Türkiye’de toprağın sürdürülebilir kullanımını sorgulayabilme', 'yasam-kusaklari', 'toprak-biyom', 'Toprak kullanım senaryosu', 'Arazi kullanımı karar laboratuvarı', KANIT.sorgu, ['soru sorar', 'bilgi toplar', 'düzenler', 'çözümler', 'paylaşır']),
    cikti('COĞ.12.6.2', 'Türkiye’deki bitki topluluklarında görülen değişim ve sürekliliği algılayabilme', 'yasam-kusaklari', 'toprak-biyom', 'Bitki topluluğu zaman transekti', 'Geçmiş/bugün karşılaştırma', KANIT.grafik, ['karşılaştırır', 'sıralar', 'yorumlar', 'sentezler', 'öngörür']),
    cikti('COĞ.12.6.3', 'Türkiye ve farklı gelişmişlik seviyesine sahip ülkelerde çevre sorunlarının önlenmesi amacıyla hazırlanan politika ve uygulamaları karşılaştırabilme', 'afet', 'afet-dongusu', 'Çevre politikası karşılaştırma matrisi', 'Ülke uygulamalarını ölçütle karşılaştırma', KANIT.sorgu, ['belirler', 'benzerlikleri listeler', 'farklılıkları listeler']),
    cikti('COĞ.12.6.4', 'Doğal çevrenin korunması amacıyla yapılan organizasyon ve anlaşmaların etkisine ilişkin bilgi toplayabilme', 'afet', 'afet-dongusu', 'Anlaşma–hedef–etki ağı', 'Kaynak doğrulama görevi', KANIT.urun, ['araç belirler', 'bilgi toplar', 'doğrular', 'kaydeder']),
    cikti('COĞ.12.6.5', 'Dünya veya Türkiye’den örnek bir çevre sorununa yönelik çözüm önerisi geliştirebilme', 'afet', 'risk-katmanlari', 'Çevre sorunu neden ağı', 'Alternatif çözüm üretip değerlendirme', KANIT.sorgu, ['nedenleri yapılandırır', 'özetler', 'tahmin eder', 'akıl yürütür', 'değerlendirir']),
  ] }),
  birim({ sinif: 12, no: 7, ad: 'Bölgeler, Ülkeler ve Küresel Bağlantılar', saat: 34, alan: ['SBAB7.4 Mekânları karşılaştırma'], kavramsal: ['KB2.18 Tartışma', 'KB2.20 Sentezleme'], okuryazarlik: ['OB1 Bilgi', 'OB7 Veri'], kavramlar: ['uluslararası anlaşmazlık', 'uluslararası birliktelik', 'ulaşım', 'ticaret', 'turizm'], kanitlar: ['Ülke karşılaştırma çalışma alanı'], ciktilar: [
    cikti('COĞ.12.7.1', 'Uluslararası birlikteliklerin anlaşmazlıklara sunduğu çözümleri tartışabilme', 'sistemler', 'bolge-olustur', 'Uluslararası bağlantı ağı', 'Çözüm seçeneklerini kanıtla tartışma', KANIT.sorgu, ['temellendirir', 'tutarsızlığı tespit eder', 'kabul eder veya çürütür']),
    cikti('COĞ.12.7.2', 'Örnek ülkelerin ulaşım sistemlerini karşılaştırabilme', 'ekonomi', 'ulasim-enerji', 'Ulaşım ağı karşılaştırması', 'Ağ özelliklerini karşılaştırma', KANIT.harita, ['özellik tanımlar', 'benzerlikleri listeler', 'farklılıkları listeler']),
    cikti('COĞ.12.7.3', 'Örnek bir ülkeyi ticari faaliyetleri açısından sentezleyebilme', 'ekonomi', 'ulasim-enerji', 'Ticaret profili ve akış ağı', 'Veriden özgün ülke profili kurma', KANIT.urun, ['faaliyetleri belirler', 'ilişki kurar', 'ürün oluşturur']),
    cikti('COĞ.12.7.4', 'Örnek ülkelerin turizm faaliyetlerini karşılaştırabilme', 'ekonomi', 'ulasim-enerji', 'Turizm etki karşılaştırması', 'Ülke turizm desenlerini karşılaştırma', KANIT.grafik, ['özellik tanımlar', 'benzerlikleri listeler', 'farklılıkları listeler']),
  ] }),
]

export const MEB_CIKTILARI = MEB_COGRAFYA_2026.flatMap((unite) => unite.ciktilar.map((c) => ({ ...c, uniteId: unite.id, uniteAdi: unite.ad, sinif: unite.sinif })))
export const mebSiniflari = [9, 10, 11, 12]
export const sinifUniteleri = (sinif) => MEB_COGRAFYA_2026.filter((unite) => unite.sinif === Number(sinif))
export const ciktiBul = (id) => MEB_CIKTILARI.find((kayit) => kayit.id === id) ?? null

export const MUFREDAT_OZETI = {
  sinifSayisi: mebSiniflari.length,
  uniteSayisi: MEB_COGRAFYA_2026.length,
  ciktiSayisi: MEB_CIKTILARI.length,
  uygulananCiktiSayisi: MEB_CIKTILARI.filter((c) => c.durum === 'uygulandi').length,
  sonDogrulama: '2026-08-29',
}
