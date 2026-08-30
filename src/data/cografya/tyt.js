/**
 * DRKOÇ özgün TYT Coğrafya kampı.
 *
 * ÖSYM soruları teliflidir; burada soru metni kopyalanmaz. Banka yalnız
 * resmî kitapçıklarda gözlenen beceri desenlerini (harita, grafik, tablo,
 * mekânsal çıkarım ve neden–sonuç) özgün senaryolarla ölçer.
 */

export const TYT_AYARLARI = {
  soruSayisi: 5,
  sureSaniye: 300,
  zamanliBaslangic: true,
  kaynakIdleri: ['osym-2026-tyt', 'meb-cografya-2026'],
}

export const TYT_KAPSAM_MATRISI = [
  ['tyt-01', 'Coğrafyanın bölümleri ve coğrafi bakış', 'COĞ.9.1.1', 'düşük', 'Kavram ağı'],
  ['tyt-02', 'Dünya’nın şekli ve hareketleri', 'COĞ.9.2.2', 'orta', 'Dünya–Güneş modeli'],
  ['tyt-03', 'Koordinat ve yerel saat', 'COĞ.9.2.2', 'yüksek', 'Koordinat ağı'],
  ['tyt-04', 'Harita bilgisi ve ölçek', 'COĞ.9.2.1', 'yüksek', 'Ölçek laboratuvarı'],
  ['tyt-05', 'İzohips ve topografik profil', 'COĞ.9.2.1', 'yüksek', 'Profil kesiti'],
  ['tyt-06', 'Atmosfer, sıcaklık ve basınç', 'COĞ.9.3.2', 'yüksek', 'Süreç modeli'],
  ['tyt-07', 'Rüzgâr, nem ve yağış', 'COĞ.9.3.2', 'yüksek', 'Değişken laboratuvarı'],
  ['tyt-08', 'İklim tipleri ve grafikleri', 'COĞ.9.3.3', 'yüksek', 'Klimograf'],
  ['tyt-09', 'İç kuvvetler ve levha hareketleri', 'COĞ.10.3.1', 'orta', 'Jeolojik kesit'],
  ['tyt-10', 'Dış kuvvetler ve yer şekilleri', 'COĞ.10.3.2', 'yüksek', 'Süreç–şekil karşılaştırması'],
  ['tyt-11', 'Akarsular, göller ve havzalar', 'COĞ.10.3.3', 'orta', 'Havza modeli'],
  ['tyt-12', 'Toprak, bitki ve biyomlar', 'COĞ.10.3.4', 'orta', 'Profil ve dağılış haritası'],
  ['tyt-13', 'Nüfus dağılışı ve yoğunluk', 'COĞ.9.4.2', 'yüksek', 'Tematik harita'],
  ['tyt-14', 'Nüfus piramitleri', 'COĞ.9.4.3', 'yüksek', 'Etkileşimli piramit'],
  ['tyt-15', 'Göçler ve sonuçları', 'COĞ.9.4.2', 'yüksek', 'Akış haritası'],
  ['tyt-16', 'Yerleşme, doku ve fonksiyon', 'COĞ.10.4.1', 'orta', 'Yer seçimi modeli'],
  ['tyt-17', 'Ekonomik faaliyetler', 'COĞ.9.5.1', 'yüksek', 'Değer zinciri'],
  ['tyt-18', 'Tarım, hayvancılık ve ormancılık', 'COĞ.11.5.1', 'orta', 'Üretim koşulları katmanı'],
  ['tyt-19', 'Maden, enerji ve sanayi', 'COĞ.11.5.2', 'yüksek', 'Kuruluş yeri ağı'],
  ['tyt-20', 'Ulaşım, ticaret ve turizm', 'COĞ.11.5.3', 'yüksek', 'Erişilebilirlik ağı'],
  ['tyt-21', 'Bölgeler ve ülkeler', 'COĞ.9.7.1', 'orta', 'Kriter tabanlı bölge modeli'],
  ['tyt-22', 'Doğal afetler ve risk', 'COĞ.9.6.1', 'yüksek', 'Risk bileşenleri'],
  ['tyt-23', 'Çevre ve sürdürülebilirlik', 'COĞ.10.6.1', 'orta', 'Karar karşılaştırması'],
].map(([id, baslik, mebCiktiId, oncelik, kanit]) => ({
  id,
  baslik,
  mebCiktiId,
  oncelik,
  kanit,
  soruDeseni: 'Özgün harita/grafik/tablo veya mekânsal karar sorusu',
}))

const transfer = (soru, secenekler, cevap, aciklama) => ({ soru, secenekler, cevap, aciklama })

export const TYT_SORU_BANKASI = [
  {
    id: 'tyt-koordinat-01', konuId: 'tyt-03', tur: 'Koordinat', duzey: 'orta', mebCiktiIds: ['COĞ.9.2.2'],
    soru: '30° Doğu boylamındaki merkezde yerel saat 12.00 iken 45° Doğu boylamındaki merkezin yerel saati kaçtır?',
    secenekler: ['11.00', '12.00', '13.00', '15.00'], cevap: 2,
    ipucu: 'Her 15° boylam farkı 60 dakikadır; doğuya gidildikçe yerel saat ilerler.',
    aciklama: 'Merkezler arasında 15° fark vardır. Doğudaki merkez bir saat ileride olduğu için saat 13.00 olur.',
    yanilgi: 'Boylam farkını saat farkına dönüştürürken yönü ters kullanmak.',
    transfer: transfer('60° Batı’da saat 08.00 iken 30° Batı’da saat kaçtır?', ['06.00', '08.00', '10.00', '12.00'], 2, '30° doğuya gidildiği için saat iki saat ilerler.'),
  },
  {
    id: 'tyt-olcek-01', konuId: 'tyt-04', tur: 'Ölçek', duzey: 'orta', mebCiktiIds: ['COĞ.9.2.1'],
    soru: '1/500.000 ölçekli bir haritada 4 cm ölçülen yolun gerçek uzunluğu kaç kilometredir?',
    secenekler: ['2', '20', '200', '2.000'], cevap: 1,
    ipucu: 'Harita uzunluğunu ölçeğin paydasıyla çarpıp santimetreyi kilometreye dönüştür.',
    aciklama: '4 × 500.000 = 2.000.000 cm, yani 20 km’dir.',
    yanilgi: 'Santimetre–kilometre dönüşümünde sıfırları yanlış sadeleştirmek.',
    transfer: transfer('1/250.000 ölçekli haritada 8 cm olan uzaklık gerçekte kaç km’dir?', ['2', '20', '32', '200'], 1, '8 × 250.000 cm = 20 km.'),
  },
  {
    id: 'tyt-iklim-01', konuId: 'tyt-08', tur: 'Grafik okuma', duzey: 'orta', mebCiktiIds: ['COĞ.9.3.3'],
    soru: 'Bir merkezin aylık sıcaklıkları ocakta en yüksek, temmuzda en düşüktür. Yalnız bu veriden yapılabilecek en güçlü çıkarım hangisidir?',
    secenekler: ['Güney Yarım Küre’de olabilir', 'Başlangıç meridyeni üzerindedir', 'Kesinlikle kıyıdadır', 'Muson iklimi görülür'], cevap: 0,
    ipucu: 'Sıcaklık tepesinin yılın hangi yarısına düştüğüne bak; veri olmayan özelliği kesinleştirme.',
    aciklama: 'Mevsimlerin yıllık sırası Güney Yarım Küre olasılığını destekler. Boylam, denizellik ve iklim tipi için yeterli kanıt yoktur.',
    yanilgi: 'Tek bir grafik deseninden konum veya iklim tipini kesinleştirmek.',
    transfer: transfer('Haziran–ağustosta sıcaklıkların en yüksek olduğu merkez için hangi ifade daha güvenlidir?', ['Kuzey Yarım Küre’de olabilir', 'Kesinlikle 40° Kuzey’dedir', 'Kesinlikle karasaldır', 'Boylamı 30° Doğu’dur'], 0, 'Yıllık sıcaklık tepesinin yaz ortasına düşmesi Kuzey Yarım Küre olasılığını destekler.'),
  },
  {
    id: 'tyt-nufus-01', konuId: 'tyt-13', tur: 'Tablo okuma', duzey: 'orta', mebCiktiIds: ['COĞ.9.4.2'],
    soru: 'Nüfusu 600.000, toplam alanı 6.000 km² ve tarım alanı 1.000 km² olan yerde hangi yoğunluk daha büyüktür?',
    secenekler: ['Aritmetik yoğunluk', 'Fizyolojik yoğunluk', 'İkisi eşittir', 'Nüfus artışı bilinmeden bulunamaz'], cevap: 1,
    ipucu: 'Pay aynıyken daha küçük paydaya bölünen değer daha büyüktür.',
    aciklama: 'Fizyolojik yoğunluk nüfusu tarım alanına böler; tarım alanı toplam alandan küçük olduğu için sonuç daha büyüktür.',
    yanilgi: 'Yoğunluk türlerinin paydalarını birbirine karıştırmak.',
    transfer: transfer('Tarım alanı azalırken nüfus değişmezse hangisi kesinlikle artar?', ['Aritmetik yoğunluk', 'Fizyolojik yoğunluk', 'Toplam yüz ölçümü', 'Mutlak konum'], 1, 'Nüfus daha küçük tarım alanına bölündüğünden fizyolojik yoğunluk artar.'),
  },
  {
    id: 'tyt-afet-01', konuId: 'tyt-22', tur: 'Vaka analizi', duzey: 'orta', mebCiktiIds: ['COĞ.9.6.1'],
    soru: 'Aynı deprem tehlike düzeyindeki iki kentten hangisinin afet riski daha düşüktür?',
    secenekler: ['Kırılgan yapıları ve hazırlıksız nüfusu olan', 'Dayanıklı yapı, düşük maruziyet ve güçlü hazırlığı olan', 'Yalnız nüfusu daha yoğun olan', 'Yalnız denize uzak olan'], cevap: 1,
    ipucu: 'Tehlike ile risk aynı şey değildir; maruziyet, kırılganlık ve hazırlığı birlikte düşün.',
    aciklama: 'Tehlike eşitken dayanıklılık ve hazırlık artıp maruziyet azaldığında beklenen kayıp, dolayısıyla risk düşer.',
    yanilgi: 'Tehlike haritasını doğrudan risk haritası gibi okumak.',
    transfer: transfer('Sel tehlikesi değişmezken aşağıdakilerden hangisi riski azaltır?', ['Taşkın ovasında yapılaşmayı artırmak', 'Erken uyarı ve tahliye planını güçlendirmek', 'Geçirimsiz yüzeyi artırmak', 'Dere yatağını daraltmak'], 1, 'Hazırlık kapasitesinin artması risk bileşenlerinden birini azaltır.'),
  },
  {
    id: 'tyt-ekonomi-01', konuId: 'tyt-17', tur: 'Mekânsal karar', duzey: 'orta', mebCiktiIds: ['COĞ.9.5.1'],
    soru: 'Çabuk bozulan bir tarım ürününü işleyen tesis için aşağıdaki kuruluş yeri kanıtlarından hangisi en güçlüdür?',
    secenekler: ['Hammaddeye yakınlık', 'Kutup dairesine yakınlık', 'Yalnız nüfus yoğunluğu', 'Saat dilimi'], cevap: 0,
    ipucu: 'Taşıma süresinin ürün kaybına etkisini düşün.',
    aciklama: 'Bozulma ve taşıma kaybı, ilk işlemenin hammadde kaynağına yakın kurulmasını avantajlı kılar.',
    yanilgi: 'Her sanayi kolunda pazarın tek belirleyici olduğunu varsaymak.',
    transfer: transfer('Hacimli ve düşük değerli bir ham maddeyi işleyen tesis için hangi konum daha uygundur?', ['Hammadde kaynağına yakın', 'Her koşulda merkezî iş alanı', 'Yalnız yüksek rakım', 'Yalnız ekvator çevresi'], 0, 'Taşıma maliyeti yüksek ham maddede kaynağa yakınlık önem kazanır.'),
  },
  {
    id: 'tyt-izohips-01', konuId: 'tyt-05', tur: 'Profil okuma', duzey: 'zor', mebCiktiIds: ['COĞ.9.2.1'],
    soru: 'Aynı izohips haritasında çizgilerin birbirine en çok yaklaştığı kesim için hangi çıkarım yapılır?',
    secenekler: ['Eğim fazladır', 'Yükselti kesinlikle sıfırdır', 'Akarsu kesinlikle yoktur', 'Kuzeye bakar'], cevap: 0,
    ipucu: 'Aynı yatay uzaklıkta daha çok yükselti basamağı geçildiğinde yüzey nasıl değişir?',
    aciklama: 'İzohipslerin sıklaşması kısa yatay mesafede daha büyük yükselti farkı, yani daha fazla eğim gösterir.',
    yanilgi: 'Çizgi sıklığını doğrudan yükselti değeri sanmak.',
    transfer: transfer('İzohipslerin seyrekleştiği bir yamaç için hangisi beklenir?', ['Daha az eğim', 'Kesinlikle daha çok yükselti', 'Daha kısa yatay mesafe', 'Boylamın değişmesi'], 0, 'Seyrek izohipsler yükselti değişiminin daha uzun yatay mesafeye yayıldığını gösterir.'),
  },
  {
    id: 'tyt-bolge-01', konuId: 'tyt-21', tur: 'Bölge analizi', duzey: 'zor', mebCiktiIds: ['COĞ.9.7.1'],
    soru: 'Aynı ülkenin iklim bölgeleri ile bir büyük kentin günlük ulaşım bölgesinin sınırlarının farklı olmasının temel nedeni nedir?',
    secenekler: ['Bölge ölçütlerinin farklı olması', 'Enlemin her gün değişmesi', 'Haritaların yön göstermemesi', 'Nüfusun sıfır olması'], cevap: 0,
    ipucu: 'Şekilsel ve işlevsel bölgelerin hangi kanıta göre kurulduğunu karşılaştır.',
    aciklama: 'İklim bölgesi benzer özelliklere, ulaşım bölgesi ise hareket ve bağlantı ilişkilerine göre belirlenir; bu nedenle sınırları çakışmak zorunda değildir.',
    yanilgi: 'Bütün bölge sınırlarını değişmez idarî sınırlar sanmak.',
    transfer: transfer('Bir hastanenin hizmet alanı en çok hangi veriyle belirlenir?', ['Ulaşım süresi ve hasta akışı', 'Yalnız yükselti rengi', 'Başlangıç meridyeni', 'Güneş ışınlarının açısı'], 0, 'Hizmet alanı işlevsel bir bölgedir; erişim ve akış ilişkileri belirleyicidir.'),
  },
]

export const tytSorulariniSec = (sayi = TYT_AYARLARI.soruSayisi) => (
  TYT_SORU_BANKASI.slice(0, Math.max(1, Math.min(sayi, TYT_SORU_BANKASI.length)))
)
