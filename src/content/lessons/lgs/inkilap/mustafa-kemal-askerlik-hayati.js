import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.1 Bir Kahraman Doğuyor · 3. ders
 * Kazanım : İTA.8.1.4
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   a) Birinci Dünya Savaşı öncesinde yaptığı görev ve hizmetler üzerinde durulur.
 *   b) 31 Mart Olayı, Trablusgarp Savaşı, Balkan Savaşları'na kısaca değinilir.
 *
 * KAPSAM KARARI
 * Ders 1905–1914 arasını kapsar; Birinci Dünya Savaşı'ndaki görevler
 * (Çanakkale vb.) İTA.8.2.2'nin konusudur ve burada yalnız köprü olarak
 * anılır. Üç olay "kısaca değinilir" sınırına uygun olarak Mustafa
 * Kemal'in görevi ve kişilik özellikleri ekseninde işlenir.
 *
 * DOĞRULAMA NOTU
 * Kaynaklar arasında farklı verilen ayrıntılar (Vatan ve Hürriyet'in
 * kuruluş yılı, Balkan Savaşı'ndaki görev unvanı, Edirne'ye giriş günü)
 * genel ifadeyle yazıldı. Uşi Antlaşması'nın 2. maddesi TTK'nin yayımladığı
 * resmî metinden sadeleştirildi. Kayıt: LGS_KAYNAK_KAYDI.md §7.
 */

const SLUG = 'lgs-tarih-mustafa-kemal-askerlik-hayati'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Bir Kahraman Doğuyor',
  order: 3,
  title: 'Mustafa Kemal’in Askerlik Hayatı: Şam’dan Sofya’ya',
  subtitle:
    'Birinci Dünya Savaşı’ndan önceki dokuz yıl, bir kurmay yüzbaşıyı isyan bastıran, çölde direniş örgütleyen ve yabancı bir başkentte ordu gözlemleyen bir subaya dönüştürdü.',
  minutes: 44,
  kazanimlar: ['İTA.8.1.4'],
  kapsamNotu:
    'Ders 1905–1914 arasındaki görevleri kapsar; Birinci Dünya Savaşı’ndaki görevler cepheler dersinde işlenir. 31 Mart Olayı, Trablusgarp ve Balkan Savaşları programın istediği gibi kısaca, Mustafa Kemal’in görevi ve kişilik özellikleri ekseninde ele alınır.',
  prerequisites: [
    {
      topic: 'Mustafa Kemal’in Yetişmesi (önceki ders)',
      why: 'Kurmay yüzbaşı olarak mezun olana kadar kazandığı özellikleri bilmek, askerlik hayatındaki davranışlarını yorumlamayı kolaylaştırır.',
    },
    {
      topic: '20. Yüzyıl Başında Osmanlı Devleti',
      why: 'II. Meşrutiyet’in ilanını ve Osmanlı’nın toprak kayıplarını bilmek, 31 Mart Olayı’nı ve savaşları bağlamına oturtmak için gerekir.',
    },
  ],
  outcomes: [
    'Mustafa Kemal’in 1905–1914 arasındaki görevlerini kronolojik sırayla söyleyebileceksin.',
    '31 Mart Olayı, Trablusgarp Savaşı ve Balkan Savaşları’nın sebep ve sonuçlarını kısaca açıklayabileceksin.',
    'Bu olaylardaki görevlerini kişilik özellikleriyle ilişkilendirebileceksin.',
    'Ordu ile siyasetin ayrılması konusundaki görüşünü ve önemini açıklayabileceksin.',
    'Bir antlaşma maddesinden çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Bir kurmay yüzbaşı göreve başlıyor',
    lead:
      'Ocak 1905. Mustafa Kemal Harp Akademisi’ni kurmay yüzbaşı olarak bitirdi. Önünde, Osmanlı Devleti’nin en çalkantılı on yılı vardı.',
    body:
      'Mustafa Kemal’in Birinci Dünya Savaşı’ndan önceki askerlik hayatı dokuz yıl kadar sürdü. Bu kısa sürede imparatorluğun dört bir yanında görev yaptı: Şam’da, Makedonya’da, İstanbul’da, Trablusgarp çöllerinde, Gelibolu’da ve Sofya’da. Bu yıllar Osmanlı için de çok zordu: II. Meşrutiyet ilan edildi, bir yıl sonra 31 Mart Olayı yaşandı, İtalya Trablusgarp’a saldırdı ve Balkan Savaşları’nda Rumeli’nin büyük bölümü kaybedildi.\n\n' +
      'Program bu kazanım için senden şunu ister: Mustafa Kemal’in askerlik hayatındaki olayları onun **kişilik özellikleri** ile ilişkilendir. Yani yalnızca “nerede görev yaptı?” sorusunu değil, “orada ne yaptı ve bu davranış onun hakkında ne söylüyor?” sorusunu da cevaplayacaksın.\n\n' +
      'Önceki derste bir kuralı öğrenmiştin: Kanıt neyi destekliyorsa o kadarını söyle. Bu derste de aynı kural geçerli. Mustafa Kemal’in Trablusgarp’a gönüllü gitmesi fedakârlığı gösterir; ama “Trablusgarp’ı tek başına savundu” demek kanıtın ötesine geçer.',
  },
  concepts: [
    {
      term: 'Kurmay subay',
      body: 'Ordunun harekât planlarını hazırlayan, komutana yardımcı olan ve birlikleri yöneten eğitimli subay. Kurmay başkanı, bir birliğin kurmaylarını yöneten subaydır.',
    },
    {
      term: 'Ataşemiliter',
      body: 'Bir devletin başka bir ülkedeki elçiliğinde görev yapan askerî temsilcisi. O ülkenin ordusunu izler, iki ordu arasındaki ilişkileri yürütür.',
    },
    {
      term: 'İttihat ve Terakki Cemiyeti',
      body: 'II. Meşrutiyet’in ilanında etkili olan, sonra yönetimde güçlenen siyasi örgüt. Pek çok subay bu cemiyetin üyesiydi; ordunun siyasetle iç içe geçmesi bu yüzden tartışma konusu oldu.',
    },
    {
      term: 'İsyan ve ayaklanma',
      body: 'Yönetime ya da yasal düzene karşı silahlı veya topluca başkaldırı. 31 Mart Olayı, II. Meşrutiyet düzenine karşı İstanbul’da çıkan bir ayaklanmadır.',
    },
    {
      term: 'Rütbe',
      body: 'Askerî hiyerarşideki derece. Bu derste geçenler küçükten büyüğe: yüzbaşı, kolağası, binbaşı, yarbay. Mustafa Kemal bu dokuz yılda yüzbaşılıktan yarbaylığa yükseldi.',
    },
  ],
  why: {
    question: 'Bu dokuz yıl neden önemli?',
    body:
      'Çünkü Mustafa Kemal Birinci Dünya Savaşı’na ve ardından Millî Mücadele’ye bu yıllarda kazandığı deneyimle girdi. Farklı cephelerde savaştı, isyan bastırmaya katıldı, yerel halkı örgütledi, bir antlaşmanın nasıl imzalandığını ve bir şehrin nasıl kaybedildiğini gördü, yabancı bir ordunun nasıl çalıştığını izledi.\n\n' +
      'Bu deneyimleri iki soruyla oku. Birincisi: Bu olay Osmanlı Devleti için ne anlama geliyordu? İkincisi: Mustafa Kemal bu olayda nasıl davrandı ve bu davranış onun hangi özelliğini gösterir? İkinci soru programın asıl istediğidir; ama birinci soruyu cevaplamadan ikincisi havada kalır.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Kurmay yüzbaşıdan yarbaya (1905–1914)',
    lead: 'Her satırda bir görev ya da bir olay var. Görevlerin nasıl büyüdüğüne ve olayların nasıl birbirini tetiklediğine dikkat et.',
    intro: 'Dokuz yılda Mustafa Kemal’in rütbesi yüzbaşılıktan yarbaylığa, sorumluluğu bir alayın stajyer kurmaylığından bir başkentteki askerî temsilciliğe yükseldi.',
    items: [
      { title: '1905 · Şam, 5. Ordu', body: 'Kurmay yüzbaşı olarak ilk görevine başladı. Şam’da arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu.' },
      { title: '1907 · Makedonya, 3. Ordu', body: 'Makedonya’daki 3. Ordu’ya atandı. Meşrutiyet taraftarlarının güçlü olduğu bu bölgede siyasi gelişmeleri yakından izledi.' },
      { title: '1908 · II. Meşrutiyet; ilk askerî kitap', body: 'Meşrutiyet ilan edildi. Mustafa Kemal aynı yıl bir Alman generalin askerî eğitim kitabını Türkçeye çevirdi.' },
      { title: '1909 · 31 Mart Olayı ve Hareket Ordusu', body: 'İstanbul’da Meşrutiyet’e karşı ayaklanma çıktı. Selanik’ten gelen Hareket Ordusu’nda kurmay başkanı olarak görev aldı; ordunun adını o koydu. Ayaklanma bastırıldı, II. Abdülhamid tahttan indirildi.' },
      { title: '1909 · İttihat ve Terakki Kongresi', body: 'Selanik’te toplanan kongrede ordunun siyasetten çekilmesini önerdi. Cemiyetin önde gelenleri bu öneriyi benimsemedi.' },
      { title: '1911 · İtalya Trablusgarp’a saldırdı', body: 'Mustafa Kemal gönüllü olarak ve gizlice Trablusgarp’a geçti. Tobruk ve Derne çevresinde yerli halkı örgütleyerek İtalyanlara karşı savaştı; savaş sırasında binbaşılığa yükseldi.' },
      { title: '1912 · Uşi Antlaşması; Balkan Savaşı', body: 'Balkan Savaşı başlayınca Osmanlı, İtalya ile Uşi Antlaşması’nı imzalayıp Trablusgarp’tan çekildi. Mustafa Kemal dönüş yolunda doğduğu şehir Selanik’in kaybedildiğini öğrendi.' },
      { title: '1913 · Gelibolu ve Edirne', body: 'Gelibolu Yarımadası’ndaki Bolayır’da kurmay olarak görev yaptı. II. Balkan Savaşı’nda Edirne’nin geri alınması harekâtında yer aldı.' },
      { title: '1913 · Sofya ataşemiliterliği', body: '27 Ekim 1913’te Sofya’ya askerî ataşe olarak atandı. Bulgar ordusunu ve Bulgaristan’daki siyasi hayatı yakından izledi.' },
      { title: '1914 · Yarbay', body: 'Sofya’daki görevi sırasında yarbaylığa yükseldi. Aynı yıl Birinci Dünya Savaşı başladı; Mustafa Kemal’in bir sonraki büyük görevi bu savaşta olacaktı.' },
    ],
    takeaway:
      'Dikkat et: Görev yerleri imparatorluğun en sorunlu bölgeleridir. Mustafa Kemal Osmanlı’nın sorunlarını kitaplardan değil, bizzat içinden gördü.',
    body:
      'Kronolojide iki tür satır var. Birincisi **görev satırları**: Şam, Makedonya, Sofya. Bunlar Mustafa Kemal’in yükselen sorumluluğunu gösterir. İkincisi **olay satırları**: 31 Mart, Trablusgarp, Balkan Savaşları. Bunlar Osmanlı’nın yaşadığı krizlerdir ve program bunlara kısaca değinilmesini ister.\n\n' +
      'İki tür satırın kesiştiği yerler, Mustafa Kemal’in kişiliğini en iyi gösteren anlardır: bir ayaklanmanın bastırılmasında kurmay başkanlığı, çölde gönüllü savaş, kaybedilen bir şehrin ardından yeni bir cephe. Bu dersin tablosunda her kesişmeyi bir kişilik özelliğiyle eşleştireceksin.',
  },
  map: {
    title: 'Şematik atlas: Birinci Dünya Savaşı’ndan önceki görev yerleri',
    intro: 'Katmanları aç ve kapat. Barış dönemindeki görevleri, savaş cephelerini ve diplomatik görevi ayrı ayrı gör. Noktaya dokununca orada ne yaptığını okursun.',
    map_label: 'Şematik gösterim · sınırlar ve uzaklıklar ölçekli değildir',
    layers: [
      { id: 'gorev', label: 'Görev yerleri', description: 'Şam, Makedonya (Manastır–Selanik) ve İstanbul.', active: true },
      { id: 'savas', label: 'Savaş cepheleri', description: 'Trablusgarp (Tobruk, Derne) ve Balkan Savaşları (Bolayır, Edirne).', active: true },
      { id: 'diplomasi', label: 'Diplomatik görev', description: 'Sofya ataşemiliterliği.', active: false },
    ],
    regions: [
      { label: 'BALKANLAR', x: 22, y: 10, tone: 'land' },
      { label: 'EGE DENİZİ', x: 36, y: 60, tone: 'water' },
      { label: 'KARADENİZ', x: 70, y: 14, tone: 'water' },
      { label: 'ANADOLU', x: 76, y: 46, tone: 'land' },
      { label: 'AKDENİZ', x: 70, y: 70, tone: 'water' },
      { label: 'TRABLUSGARP', x: 28, y: 94, tone: 'land' },
    ],
    locations: [
      { id: 'sam', label: 'Şam · 1905', x: 88, y: 76, layer: 'gorev', tone: 'brand', detail: 'İlk görev yeri. 5. Ordu’da kurmay yüzbaşı olarak staj yaptı ve arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu.' },
      { id: 'manastir', label: 'Manastır · 1907', x: 14, y: 34, layer: 'gorev', tone: 'brand', detail: '3. Ordu’ya atandı. Makedonya, Meşrutiyet taraftarlarının ve İttihat ve Terakki’nin güçlü olduğu bölgeydi.' },
      { id: 'selanik', label: 'Selanik · 1909', x: 22, y: 50, layer: 'gorev', tone: 'brand', detail: 'Hareket Ordusu buradan yola çıktı. Aynı yıl İttihat ve Terakki kongresi burada toplandı ve Mustafa Kemal ordunun siyasetten çekilmesini önerdi.' },
      { id: 'istanbul', label: 'İstanbul · 1909', x: 60, y: 34, layer: 'gorev', tone: 'brand', detail: '31 Mart Olayı’nın çıktığı şehir. Hareket Ordusu ayaklanmayı bastırdı; II. Abdülhamid tahttan indirildi.' },
      { id: 'derne', label: 'Derne', x: 42, y: 84, layer: 'savas', tone: 'danger', detail: 'Trablusgarp Savaşı’nda Mustafa Kemal’in görev yaptığı bölgelerden biri. Yerli halkla birlikte İtalyanlara karşı direniş örgütlendi.' },
      { id: 'tobruk', label: 'Tobruk', x: 56, y: 88, layer: 'savas', tone: 'danger', detail: 'Mustafa Kemal Trablusgarp’ta Tobruk çevresinde de görev yaptı. Düzenli ordu gönderilemeyen bölgede gönüllü subaylar ve yerli halk birlikte savaştı.' },
      { id: 'bolayir', label: 'Bolayır · 1913', x: 46, y: 42, layer: 'savas', tone: 'danger', detail: 'Gelibolu Yarımadası’nın dar boynu. Balkan Savaşı’nda Mustafa Kemal burada kurmay olarak görev yaptı. Yarımada iki yıl sonra Çanakkale Savaşları’na sahne olacaktı.' },
      { id: 'edirne', label: 'Edirne · 1913', x: 46, y: 24, layer: 'savas', tone: 'danger', detail: 'I. Balkan Savaşı’nda kaybedildi, II. Balkan Savaşı’nda geri alındı. Mustafa Kemal bu harekâtta görev aldı.' },
      { id: 'sofya', label: 'Sofya · 1913', x: 30, y: 16, layer: 'diplomasi', tone: 'accent', detail: 'Askerî ataşe olarak görev yaptı. Bulgar ordusunu ve Bulgaristan’daki siyasi hayatı yakından izledi, oradaki Türklerle ilgilendi. Görevi sırasında yarbaylığa yükseldi.' },
    ],
    routes: [
      { from: 'selanik', to: 'istanbul', label: 'Hareket Ordusu · 1909', layer: 'gorev' },
      { from: 'istanbul', to: 'derne', label: 'Gönüllü ve gizlice Trablusgarp’a · 1911', layer: 'savas', tone: 'danger' },
      { from: 'derne', to: 'tobruk', label: 'Trablusgarp cephesi', layer: 'savas', tone: 'danger' },
      { from: 'bolayir', to: 'edirne', label: 'II. Balkan Savaşı · 1913', layer: 'savas', tone: 'danger' },
    ],
    insight:
      'Haritaya bakınca bir şey dikkat çeker: Mustafa Kemal’in savaştığı iki cephe de Osmanlı’nın toprak kaybettiği yerlerdir. Trablusgarp tamamen, Rumeli büyük ölçüde kaybedildi. Bu yenilgiler onun kuşağı için “bir daha toprak kaybetmemek” kaygısını derinleştirdi.',
    source_note:
      'Görev yerleri ve yıllar; MSB “Atatürk Kronolojisi” ve “Askerî Görevleri” sayfaları, MEB Özel Eğitim ve Rehberlik Hizmetleri GM “Mustafa Kemal’in Hayatı” yayını, TDV İslâm Ansiklopedisi “Trablusgarp Savaşı” ve Atatürk Ansiklopedisi “Balkan Savaşı’nda Atatürk” maddeleri esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; sınır ya da cephe hattı göstermez.',
  },
  dataTable: {
    title: 'Görevden kişiliğe: ne yaptı, bu neyi gösterir?',
    columns: ['Yıl ve yer', 'Görev ya da olay', 'Ne yaptı?', 'İlişkilendirilen özellik'],
    rows: [
      ['1905 · Şam', 'İlk görev', 'Arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu.', 'Örgütleyicilik, vatanseverlik'],
      ['1908 · Makedonya', 'Askerî eğitim', 'Bir Alman generalin askerî eğitim kitabını çevirdi.', 'Çalışkanlık, bilgiye önem, çok yönlülük'],
      ['1909 · İstanbul', '31 Mart Olayı', 'Hareket Ordusu’nda kurmay başkanı oldu; ordunun adını koydu.', 'Meşrutiyete bağlılık, kararlılık, sorumluluk alma'],
      ['1909 · Selanik', 'İttihat ve Terakki kongresi', 'Ordunun siyasetten çekilmesini önerdi; önde gelenler kabul etmese de görüşünü açıkça söyledi.', 'İleri görüşlülük, ilkelilik, cesaret'],
      ['1911–1912 · Trablusgarp', 'İtalya’ya karşı savaş', 'Gönüllü olarak gitti; yerli halkı örgütleyerek direniş kurdu.', 'Fedakârlık, liderlik, örgütleyicilik'],
      ['1913 · Bolayır–Edirne', 'Balkan Savaşları', 'Kurmay olarak görev yaptı; Edirne’nin geri alınması harekâtında yer aldı.', 'Stratejik düşünme, kararlılık'],
      ['1913–1914 · Sofya', 'Ataşemiliterlik', 'Bulgar ordusunu ve siyasi hayatını izledi; Bulgaristan’daki Türklerle ilgilendi.', 'Gözlemcilik, diplomatik yetenek, millî sorumluluk'],
    ],
    caption:
      'Son sütun bir yorumdur ve tek başına kesin değildir. Bir özellik, birden fazla olayda tekrar görüldüğünde daha güçlü bir çıkarım olur: örneğin örgütleyicilik hem Şam’da hem Trablusgarp’ta görülür.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Mustafa Kemal Birinci Dünya Savaşı’na hangi birikimle girdi?',
    lead: 'Onun 1915’teki başarısını tek bir yeteneğe bağlama. Dokuz yılın birikimini adım adım izle.',
    intro: 'Zincirdeki sebepler birbirinden bağımsız değildir: Osmanlı’nın savaşları, Mustafa Kemal’in eğitimi ve dönemin siyasi ortamı birlikte etki etti.',
    steps: [
      { tur: 'sebep', title: 'Osmanlı’nın art arda savaşları', body: 'Trablusgarp ve Balkan Savaşları, genç subaylara gerçek savaş deneyimi kazandırdı; aynı zamanda büyük toprak kayıplarını gösterdi.' },
      { tur: 'sebep', title: 'Kurmay eğitimi ve sahada görev', body: 'Harp Akademisi’nde öğrendiği planlama bilgisini farklı birliklerde ve bölgelerde uygulama fırsatı buldu.' },
      { tur: 'sebep', title: 'Çalkantılı siyasi ortam', body: 'II. Meşrutiyet, 31 Mart Olayı ve İttihat ve Terakki’nin orduya etkisi, ordu ile siyaset ilişkisini sorgulamasına yol açtı.' },
      { tur: 'gelisme', title: 'Farklı görevlerde deneyim', body: 'Hareket Ordusu’nda kurmay başkanlığı, Trablusgarp’ta yerel halkla direniş, Balkan Savaşı’nda kolordu kurmaylığı, Sofya’da diplomasi.' },
      { tur: 'gelisme', title: 'Açıkça savunulan ilkeler', body: 'Ordunun siyasetten ayrılması gibi görüşleri, çoğunluk kabul etmese de dile getirdi.' },
      { tur: 'sonuc', title: 'Güçlenen kişilik ve yetenekler', body: 'Liderlik, örgütleyicilik, fedakârlık, stratejik düşünme, ileri görüşlülük ve gözlemcilik.' },
      { tur: 'sonraki-etki', title: 'Çanakkale ve sonrası', body: 'Bu birikimle Birinci Dünya Savaşı’nda Çanakkale’de görev alacak, Trablusgarp’ta gördüğü halkla birlikte direnme deneyimi Millî Mücadele yıllarında yeniden önem kazanacaktı.' },
    ],
    inference:
      'Zincirden çıkan ders: Bir liderin başarısı bir anda ortaya çıkmaz. Mustafa Kemal’in sonraki yıllardaki başarısını açıklarken bu dokuz yıllık görev ve deneyimleri de hesaba kat.',
    body:
      'Program bu kazanımda üç olaya **kısaca** değinilmesini ister. Her birini üç cümleyle özetleyebilmelisin.\n\n' +
      '**31 Mart Olayı (1909):** II. Meşrutiyet’in ilanından bir yıl sonra İstanbul’da Meşrutiyet düzenine ve İttihat ve Terakki’ye karşı bir ayaklanma çıktı; ayaklananlar hükümetin istifası ve şeriat istediler. Makedonya ve Trakya’daki birliklerden oluşturulan, Selanik’ten yola çıkan Hareket Ordusu İstanbul’a gelerek ayaklanmayı bastırdı. Sonunda II. Abdülhamid tahttan indirildi, yerine V. Mehmed Reşad geçti.\n\n' +
      '**Trablusgarp Savaşı (1911–1912):** Sömürge arayan İtalya, Osmanlı’nın Kuzey Afrika’daki toprağı Trablusgarp’a saldırdı. Deniz yolu İtalyan donanmasının denetiminde olduğu için Osmanlı düzenli ordu gönderemedi; gönüllü subaylar bölgeye gizlice geçerek yerli halkla birlikte savaştı. Balkan Savaşı başlayınca Osmanlı, 1912’de Uşi Antlaşması’nı imzalayarak Trablusgarp’tan çekildi.\n\n' +
      '**Balkan Savaşları (1912–1913):** Bulgaristan, Sırbistan, Yunanistan ve Karadağ, Osmanlı’nın Trablusgarp’la uğraşmasını fırsat bilerek saldırdı. I. Balkan Savaşı’nda Selanik dâhil Rumeli’nin büyük bölümü kaybedildi. Balkan devletleri kendi aralarında savaşa tutuşunca II. Balkan Savaşı’nda Edirne geri alındı.',
  },
  comparison: {
    title: 'Üç olay, üç görev: 31 Mart, Trablusgarp, Balkan',
    columns: ['31 Mart Olayı (1909)', 'Trablusgarp Savaşı (1911–1912)', 'Balkan Savaşları (1912–1913)'],
    rows: [
      { label: 'Kime karşı?', values: ['İstanbul’da Meşrutiyet’e karşı ayaklananlara', 'İtalya’ya', 'Bulgaristan, Sırbistan, Yunanistan ve Karadağ’a'] },
      { label: 'Mustafa Kemal’in görevi', values: ['Hareket Ordusu’nda kurmay başkanı; ordunun adını koydu', 'Gönüllü gitti; Tobruk ve Derne çevresinde yerli halkı örgütledi', 'Bolayır’da kurmay; Edirne’nin geri alınması harekâtında görevli'] },
      { label: 'Olayın sonucu', values: ['Ayaklanma bastırıldı; II. Abdülhamid tahttan indirildi', 'Uşi Antlaşması ile Trablusgarp İtalya’ya bırakıldı', 'Rumeli’nin büyük bölümü kaybedildi; Edirne geri alındı'] },
      { label: 'Öne çıkan özellik', values: ['Meşrutiyete bağlılık, sorumluluk alma', 'Fedakârlık, liderlik, örgütleyicilik', 'Stratejik düşünme, kararlılık'] },
    ],
    insight:
      'Üç olayı “iç tehdit – sömürgeci saldırı – komşu devletlerin saldırısı” diye ayırabilirsin. Mustafa Kemal üçünde de farklı bir rol üstlendi; bu da onun farklı koşullara uyum sağlayabildiğini gösterir.',
  },
  traps: [
    {
      title: '31 Mart Olayı’nı Meşrutiyet’in ilanıyla karıştırmak',
      wrong: '31 Mart Olayı, Meşrutiyet’i ilan ettirmek için çıkarılan bir ayaklanmadır.',
      right: 'Tersine: 31 Mart Olayı, II. Meşrutiyet’in ilanından sonra Meşrutiyet düzenine karşı çıkan bir ayaklanmadır. Hareket Ordusu ayaklanmayı bastırarak Meşrutiyet’i korudu.',
      body: 'Sıra ipucu: Önce 1908’de Meşrutiyet ilan edildi, sonra 1909’da ona karşı ayaklanma çıktı, en son Hareket Ordusu ayaklanmayı bastırdı.',
    },
    {
      title: 'Trablusgarp’a düzenli ordu gönderildiğini sanmak',
      wrong: 'Osmanlı, Trablusgarp’ı savunmak için büyük bir ordu gönderdi; Mustafa Kemal de bu ordunun komutanıydı.',
      right: 'Deniz yolu İtalyan donanmasının denetimindeydi. Mustafa Kemal gibi gönüllü subaylar bölgeye gizlice geçti ve yerli halkla birlikte direniş örgütledi.',
      body: 'Bu ayrım önemlidir: Trablusgarp’taki başarı büyük bir ordunun değil, az sayıda subayın halkı örgütlemesinin sonucudur. Sorularda “yerli halkı örgütledi” ifadesi Trablusgarp’ı işaret eder.',
    },
    {
      title: 'Olayların sırasını karıştırmak',
      wrong: 'Balkan Savaşları, Trablusgarp Savaşı’ndan önce başladı.',
      right: 'Trablusgarp Savaşı 1911’de başladı. Balkan devletleri 1912’de Osmanlı’nın bu savaşla meşgul olmasını fırsat bilerek saldırdı; Osmanlı da Balkan cephesine odaklanmak için Uşi Antlaşması’nı imzaladı.',
      body: 'Sebep–sonuç sırası kronolojiyi kurtarır: Trablusgarp, Balkan Savaşı’nın sebeplerinden biridir; Balkan Savaşı da Uşi Antlaşması’nın imzalanmasını hızlandırmıştır.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Olaylardaki şahsiyetler',
    lead: 'Mustafa Kemal bu yıllarda tek başına hareket etmedi. Kararlarını, karşısında ya da yanında duran kişilerle birlikte düşün.',
    intro: 'Kartı açınca kişinin hangi olayda ne karar verdiğini ve bunun Mustafa Kemal’in yolunu nasıl etkilediğini görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal',
        period: '1905–1914 · yüzbaşıdan yarbaya',
        position: 'Kurmay subay; Hareket Ordusu kurmay başkanı; Sofya ataşemiliteri',
        contribution: 'Dokuz yılda Şam, Makedonya, İstanbul, Trablusgarp, Gelibolu ve Sofya’da görev yaptı. Her görevde yeni bir sorumluluk aldı: cemiyet kurdu, ordunun adını koydu, gönüllü savaşa gitti, yabancı bir orduyu gözlemledi.',
        connections: ['Vatan ve Hürriyet Cemiyeti', 'Hareket Ordusu', 'Trablusgarp', 'Balkan Savaşları', 'Sofya ataşemiliterliği'],
        significance: 'Bu dönemdeki görevler, onun Çanakkale’de ve Millî Mücadele’de ortaya koyacağı liderliğin hazırlık yıllarıdır.',
      },
      {
        name: 'Sultan II. Abdülhamid',
        period: '1876–1909 · padişah',
        position: '31 Mart Olayı’ndan sonra tahttan indirilen padişah',
        contribution: '1908’de Meşrutiyet’i yeniden ilan etmek zorunda kaldı. 31 Mart Olayı bastırıldıktan sonra meclis kararıyla tahttan indirildi.',
        connections: ['II. Meşrutiyet (1908)', '31 Mart Olayı (1909)'],
        significance: 'Tahttan indirilmesi, meclisin padişahı değiştirebildiği yeni bir dönemin işaretiydi.',
      },
      {
        name: 'Mahmud Şevket Paşa',
        period: '1909 · Hareket Ordusu komutanı',
        position: 'Hareket Ordusu’nun komutanı',
        contribution: 'Makedonya ve Trakya’daki birliklerden oluşan Hareket Ordusu’nun komutasını üstlendi ve ayaklanmanın bastırılmasını yönetti.',
        connections: ['31 Mart Olayı', 'Hareket Ordusu'],
        significance: 'Mustafa Kemal bu olayda onun ordusunda kurmay olarak görev yaptı; bir ordunun büyük bir şehre nasıl yönetilerek girdiğini gördü.',
      },
      {
        name: 'Sultan V. Mehmed Reşad',
        period: '1909 · tahta çıktı',
        position: 'II. Abdülhamid’in yerine geçen padişah',
        contribution: 'II. Abdülhamid’in tahttan indirilmesiyle padişah oldu. Onun döneminde yönetimde İttihat ve Terakki’nin etkisi arttı.',
        connections: ['31 Mart Olayı’nın sonucu'],
        significance: 'Padişah değişikliği, Mustafa Kemal’in ordunun siyasetle ilişkisini sorgulamasına zemin olan ortamı gösterir.',
      },
      {
        name: 'İttihat ve Terakki’nin önde gelenleri',
        period: '1909 · Selanik kongresi',
        position: 'Cemiyetin yöneticileri',
        contribution: 'Mustafa Kemal’in kongrede ordunun siyasetten çekilmesi yönündeki önerisini benimsemediler.',
        connections: ['İttihat ve Terakki Kongresi (1909)'],
        significance: 'Bu görüş ayrılığından sonra Mustafa Kemal cemiyetin yönetiminden uzak durdu ve askerlik görevine yoğunlaştı.',
      },
      {
        name: 'Enver Bey',
        period: '1911–1913',
        position: 'Subay; Trablusgarp ve Balkan Savaşları’nda görev aldı',
        contribution: 'Trablusgarp’ta gönüllü subaylar arasında yer aldı. II. Balkan Savaşı’nda Edirne’ye ilerleyen kuvvetlerin başında bulundu.',
        connections: ['Trablusgarp Savaşı', 'Edirne’nin geri alınması (1913)'],
        significance: 'Aynı olaylarda görev yapan iki subayın, Mustafa Kemal ile Enver Bey’in, sonraki yıllarda farklı yollar izleyeceğini ilerideki derslerde göreceksin.',
      },
    ],
    takeaway:
      'Mustafa Kemal’i yanındaki ve karşısındaki kişilerle birlikte düşün: Aynı olaylarda aynı rütbedeki subaylar farklı kararlar verdi. Onu diğerlerinden ayıran, kararları ve bu kararların arkasındaki gerekçelerdi.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-ordu-siyaset`,
      title: 'Ordu ve siyaset: 1909 önerisi neden önemli?',
      lead: 'Mustafa Kemal’in bu yıllardaki en dikkat çekici kararlarından biri bir savaşta değil, bir kongrede verildi.',
      blocks: [
        {
          id: `${SLUG}-ordu-siyaset-anlatim`,
          type: 'prose',
          body:
            'II. Meşrutiyet’in ilanından sonra pek çok subay İttihat ve Terakki Cemiyeti’nin üyesiydi ve siyasetin içindeydi. 31 Mart Olayı’nı bastıran da bir orduydu. Böylece ordu ile siyaset birbirine iyice karıştı.\n\n' +
            'Mustafa Kemal 1909’da Selanik’te toplanan İttihat ve Terakki kongresinde bu duruma karşı çıktı. Önerisi açıktı: Askerlikte kalmak isteyen subaylar siyasetten çekilmeli, siyasetle uğraşmak isteyenler ise ordudan ayrılmalıydı. Ona göre ordunun görevi vatanı korumaktı; siyasete karışan bir ordu hem savaşa hazırlığını kaybeder hem de ülkede bölünmeye yol açardı.\n\n' +
            'Cemiyetin önde gelenleri bu öneriyi benimsemedi. Mustafa Kemal görüşünü değiştirmedi; cemiyetin yönetiminden uzaklaşarak askerlik görevine yoğunlaştı.\n\n' +
            'Bu olayı neden önemsiyoruz? Çünkü Mustafa Kemal’in kişiliği hakkında iki şey söyler. Birincisi **ileri görüşlülük**: Ordunun siyasete karışmasının doğuracağı sorunları erkenden gördü. İkincisi **ilkelilik ve cesaret**: Güçlü kişilerin karşısında da görüşünü açıkça söyledi. Ordunun siyasetten uzak durması gerektiği düşüncesini ileriki yıllarda da savundu.',
        },
        {
          id: `${SLUG}-ordu-siyaset-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Ya asker ya siyasetçi”',
          body: '1909 önerisini tek cümleyle hatırla: Bir subay ya askerlik yapmalı ya siyaset; ikisini birden yapmamalı.',
        },
        {
          id: `${SLUG}-ordu-siyaset-yanilgi`,
          type: 'trap',
          title: 'Öneriyi “siyasete ilgisizlik” sanmak',
          wrong: 'Mustafa Kemal siyasetle hiç ilgilenmiyordu; bu yüzden ordunun siyasetten çekilmesini istedi.',
          right: 'Mustafa Kemal siyasetle yakından ilgileniyordu; kongreye katılması da bunu gösterir. İstediği, subayların askerlik ile siyaset arasında bir seçim yapmasıydı.',
          body: 'Bir kişinin bir şeyin ayrı tutulmasını istemesi, o şeye ilgisiz olduğu anlamına gelmez. Sorularda “siyasetle ilgilenmezdi” seçeneği bu yüzden aşırı çıkarımdır.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste bir antlaşma maddesi okuyacaksın. Antlaşmalar tarihçinin en değerli birincil kaynaklarındandır; ama maddenin ne dediği kadar maddenin nasıl uygulandığı da önemlidir.',
    intro:
      'Antlaşma okurken üç soru sor: **Taraflar ne üstlendi? Yükümlülüklerin sırası nasıl? Uygulamada ne oldu?** Özellikle sıra önemlidir: “Önce biri yapacak, sonra öteki” diye yazılmış bir madde, ilk adımı atmayan tarafa ikinci adımı erteleme fırsatı verebilir.\n\n' +
      'Aşağıdaki birinci metin Uşi Antlaşması’nın bir maddesinin sadeleştirmesidir; ikinci metin bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Uşi Antlaşması, 2. madde',
        kunye: 'İtalya ile Uşi Barış Antlaşması, 18 Ekim 1912. Metin: Türk Tarih Kurumu’nun yayımladığı antlaşma metinleri (Düstur’dan).',
        nitelik: 'DRKOÇ sadeleştirmesi. Maddenin Osmanlı Türkçesi metni günümüz Türkçesine aktarılmıştır; birebir alıntı değildir.',
        metin:
          'Antlaşma imzalanır imzalanmaz Osmanlı hükümeti Trablusgarp ile Bingazi’den, İtalya hükümeti de Ege Denizi’nde işgal ettiği adalardan kendi subaylarını, askerlerini ve sivil memurlarını geri çağıracaktır. Adaların İtalya tarafından fiilen boşaltılması, Trablusgarp ile Bingazi’nin Osmanlı tarafından boşaltılmasından sonra gerçekleşecektir.',
        soru: 'Bu maddeye göre iki tarafın yükümlülüklerinin sırası nasıldır? Bu sıra ileride nasıl bir sorun doğurmuş olabilir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'İki devletin imzaladığı antlaşmanın kendi maddesidir: birincil kaynak.' },
          { title: 'Tarafların yükümlülüklerini ayır', body: 'Osmanlı: Trablusgarp ve Bingazi’den askerlerini ve memurlarını çekecek. İtalya: işgal ettiği adalardan çekilecek.' },
          { title: 'Sırayı bul', body: 'İtalya’nın adaları boşaltması, Osmanlı’nın Trablusgarp’ı boşaltmasından SONRA gerçekleşecek. Yani ikinci adım birinci adıma bağlanmış.' },
          { title: 'Uygulamayla karşılaştır', body: 'İtalya, bölgede Osmanlı askerlerinin tamamen çekilmediğini ileri sürerek On İki Ada’yı boşaltmadı. Maddedeki sıra, İtalya’ya bu gerekçeyi kullanma imkânı verdi.' },
        ],
        cevap: 'Madde önce Osmanlı’nın Trablusgarp’tan çekilmesini, sonra İtalya’nın adalardan çekilmesini öngörür. Bu sıra, İtalya’nın “Osmanlı çekilmedi” gerekçesiyle adaları boşaltmamasına imkân verdi; On İki Ada bu yüzden İtalya’nın elinde kaldı.',
        cikarim: 'Bir antlaşma maddesinden çıkarım yaparken yükümlülüklerin sırasına bak. Sıra, kimin daha güçlü konumda olduğunu çoğu zaman açıkça gösterir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Trablusgarp deneyimi üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Trablusgarp’ta düzenli ordu gönderilemeyen bir bölgede, az sayıda gönüllü subay yerli halkı örgütleyerek İtalyanlara karşı direniş kurdu. Mustafa Kemal Tobruk ve Derne çevresinde görev yaptı. Bu deneyim, düzenli birliklerin yetersiz kaldığı durumlarda halkın gücüne dayanmanın önemini göstermişti; benzer bir yol yıllar sonra Anadolu’da da izlenecekti.',
        soru: 'Metindeki olguları ve yorumu ayır. Son cümledeki yorumu desteklemek için hangi olayları hatırlarsın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirmedir: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Düzenli ordu gönderilemedi; gönüllü subaylar yerli halkı örgütledi; Mustafa Kemal Tobruk ve Derne çevresinde görev yaptı.' },
          { title: 'Yorumu ayır', body: '“Halkın gücüne dayanmanın önemini göstermişti” ve “benzer bir yol Anadolu’da da izlenecekti” ifadeleri yazarın kurduğu ilişkidir.' },
          { title: 'Yorumu kanıtla sına', body: 'Millî Mücadele’nin başında da düzenli ordu yoktu; halkın kurduğu Kuvâ-yı Millîye birlikleri direnişi başlattı. Bu bilgi yorumu destekler; ama iki olayın koşulları aynı değildir.' },
        ],
        cevap: 'Olgular: gönüllü subayların yerli halkı örgütlemesi ve Mustafa Kemal’in görev yerleri. Yorum: bu deneyimin halka dayanmanın önemini gösterdiği ve Anadolu’da benzer bir yol izlendiği. Kuvâ-yı Millîye’nin direnişi başlatması bu yorumu destekler.',
        cikarim: 'İkincil kaynakların en değerli yanı olaylar arasında bağ kurmasıdır; en zayıf yanı da budur. Kurulan bağı başka kanıtlarla sınamadan kabul etme.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Olaydan kişilik özelliğine',
      prompt:
        'İtalya 1911’de Trablusgarp’a saldırdığında deniz yolu İtalyan donanmasının denetimindeydi. Mustafa Kemal, zor ve tehlikeli bir yolculuğu göze alarak gönüllü olarak bölgeye geçti ve yerli halkı örgütleyerek savaştı. Bu davranış onun hangi kişilik özelliklerini gösterir?',
      steps: [
        { title: 'Ne yaptığına bak', body: 'Gönüllü gitti, tehlikeyi göze aldı, halkı örgütledi.' },
        { title: 'Her eylemi özelliğe çevir', body: 'Gönüllü gitmek → fedakârlık ve vatanseverlik; tehlikeyi göze almak → cesaret; halkı örgütlemek → liderlik ve örgütleyicilik.' },
        { title: 'Aşırı çıkarımı ele', body: '“Trablusgarp’ı tek başına savundu” ya da “Savaşı kazandı” yargıları yanlıştır; Trablusgarp Uşi Antlaşması ile kaybedildi.' },
      ],
      answer: 'Fedakârlık, vatanseverlik, cesaret, liderlik ve örgütleyicilik.',
      takeaway: 'Bir savaşın kaybedilmesi, o savaştaki bir kişinin gösterdiği özellikleri ortadan kaldırmaz. Kişilik sorusu sonucu değil, davranışı sorar.',
    },
    {
      title: 'Kronolojiyi sebep–sonuçla kur',
      prompt:
        'Şu olayları kronolojik sıraya koy ve aralarındaki sebep–sonuç ilişkisini açıkla:\n\n- I. Uşi Antlaşması’nın imzalanması\n- II. II. Meşrutiyet’in ilanı\n- III. 31 Mart Olayı\n- IV. Balkan Savaşı’nın başlaması',
      steps: [
        { title: 'Yılları yerleştir', body: 'II. Meşrutiyet 1908 → 31 Mart Olayı 1909 → Balkan Savaşı Ekim 1912 → Uşi Antlaşması Ekim 1912 (Balkan Savaşı başladıktan birkaç gün sonra).' },
        { title: 'Sırayı yaz', body: 'II → III → IV → I.' },
        { title: 'Bağı kur', body: 'Meşrutiyet’e tepki 31 Mart Olayı’nı doğurdu. Osmanlı’nın Trablusgarp’la uğraşması Balkan devletlerine fırsat verdi. Balkan Savaşı başlayınca Osmanlı Trablusgarp’tan çekilmek için Uşi’yi imzaladı.' },
      ],
      answer: 'Sıra II → III → IV → I’dir. Balkan Savaşı’nın başlaması Uşi Antlaşması’nın imzalanmasını hızlandırmıştır.',
      takeaway: 'Aynı yıl içindeki olaylarda sırayı ay bilgisiyle değil, sebep–sonuç ilişkisiyle hatırla.',
    },
    {
      title: 'Bir görev, birden fazla özellik',
      prompt:
        'Mustafa Kemal Sofya’da askerî ataşeyken Bulgar ordusunu ve Bulgaristan’daki siyasi hayatı yakından izledi, orada yaşayan Türklerle ilgilendi. Bu bilgi onun hangi özelliklerini gösterir? Bu görev ileride ona nasıl yararlı olmuş olabilir?',
      steps: [
        { title: 'Davranışları ayır', body: 'Yabancı orduyu izlemek, siyasi hayatı izlemek, Türklerle ilgilenmek.' },
        { title: 'Özelliğe çevir', body: 'Gözlemcilik ve öğrenmeye açıklık; diplomatik yetenek; millî sorumluluk duygusu.' },
        { title: 'Olası yararını düşün', body: 'Başka bir ülkenin ordusunu ve devlet düzenini tanımak, ileride hem askerî hem siyasi kararlarında karşılaştırma yapmasını kolaylaştırmış olabilir.' },
      ],
      answer: 'Gözlemcilik, diplomatik yetenek ve millî sorumluluk. Bu deneyim, ileride farklı devlet ve ordu yapılarını karşılaştırabilmesine katkı sağlamış olabilir.',
      takeaway: '“Olabilir” ile “kesindir” arasındaki farkı koru: Bir deneyimin ileriye etkisi hakkında konuşurken ihtimal dili kullan.',
    },
  ],
  questionClue: {
    concept: 'Soruda olayı nasıl tanırım?',
    statement: 'Soru olayın adını vermeden bir durum anlatıp Mustafa Kemal’in hangi görevinden söz edildiğini ya da hangi özelliğinin öne çıktığını sorabilir.',
    clues: [
      '“Meşrutiyet’e karşı ayaklanma”, “Selanik’ten gelen ordu” → 31 Mart Olayı, Hareket Ordusu',
      '“Gönüllü”, “gizlice”, “yerli halkı örgütledi”, “Tobruk, Derne” → Trablusgarp Savaşı',
      '“Bolayır”, “Edirne’nin geri alınması” → Balkan Savaşları',
      '“Askerî ataşe”, “Bulgar ordusu” → Sofya görevi',
      '“Subaylar ya asker ya siyasetçi olmalı” → 1909 İttihat ve Terakki kongresi',
    ],
    reasoning: 'Önce olayı tanı, sonra Mustafa Kemal’in o olaydaki davranışını bul, en son davranışı bir kişilik özelliğine çevir. Üç adımı atlamadan yaparsan çeldiricilere takılmazsın.',
    boundary: 'Dikkat: Çanakkale, Anafartalar ve 19. Tümen gibi ifadeler Birinci Dünya Savaşı’na aittir; bu kazanımın “Birinci Dünya Savaşı öncesi” sınırının dışındadır.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir görev listesi, kısa bir biyografi paragrafı, bir harita ya da bir antlaşma maddesi verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Bir görevden kişilik özelliği çıkarma',
      'Olayları kronolojik sıraya koyma',
      'Olayı ipuçlarından tanıma (31 Mart, Trablusgarp, Balkan)',
      'Görev yerlerini haritada eşleştirme',
      'Antlaşma maddesinden çıkarım yapma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Hareket Ordusu’nun 31 Mart Olayı’nı bastırması, II. Meşrutiyet açısından ne anlama geliyordu?',
      hint: 'Ayaklananlar neye karşıydı?',
      answer: 'Ayaklananlar Meşrutiyet düzenine karşıydı. Hareket Ordusu ayaklanmayı bastırarak Meşrutiyet’i korudu; ardından II. Abdülhamid tahttan indirildi. Yani olay, Meşrutiyet’in bir tehdidi atlatması anlamına geliyordu.',
    },
    {
      prompt: 'Mustafa Kemal’in 1909 kongresindeki önerisi kabul edilmedi. Bu durum, onun önerisinin yanlış olduğunu mu gösterir?',
      hint: 'Bir önerinin kabul edilmemesi ile doğru ya da yanlış olması aynı şey mi?',
      answer: 'Hayır. Bir önerinin kabul edilmemesi, onu değerlendirenlerin o gün başka türlü düşündüğünü gösterir; önerinin doğru ya da yanlış olduğunu tek başına göstermez. Ordunun siyasete karışmasının doğurduğu sorunlar sonraki yıllarda tartışılmaya devam etti.',
    },
    {
      prompt: 'Selanik’in 1912’de kaybedilmesi Mustafa Kemal için neden kişisel bir kayıptı?',
      answer: 'Selanik onun doğup büyüdüğü şehirdi; ailesinin yaşadığı, okula başladığı yerdi. Bu kayıp, vatan toprağının kaybedilmesinin onun için soyut bir bilgi değil, kişisel bir acı olduğunu gösterir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.1.4 bir “ilişkilendirir” kazanımıdır: öğrenciden Mustafa Kemal’in askerlik hayatındaki olay ve olguları onun kişilik özellikleriyle bağlamasını ister. Programın açıklaması Birinci Dünya Savaşı öncesindeki görevleri ve 31 Mart, Trablusgarp ve Balkan Savaşları’nı öne çıkarır. Bu kazanıma dayanan bir soru bir görev ya da olay anlatıp hangi özelliğin öne çıktığını sorabilir.',
    measures: [
      'Birinci Dünya Savaşı öncesindeki görevleri kronolojik sıraya koyma',
      '31 Mart Olayı, Trablusgarp ve Balkan Savaşları’nı kısaca açıklama',
      'Bir görevdeki davranışı kişilik özelliğiyle ilişkilendirme',
      'Ordu–siyaset ayrımı görüşünü açıklama',
      'Aşırı çıkarımı ayırt etme',
    ],
  },
  simulation: {
    title: 'Mini LGS: 1909 kongresi',
    passage:
      'Mustafa Kemal 1909’da Selanik’te toplanan İttihat ve Terakki kongresinde, askerlikte kalmak isteyen subayların siyasetten çekilmesini, siyasetle uğraşmak isteyenlerin ise ordudan ayrılmasını önerdi. Cemiyetin önde gelenleri bu öneriyi benimsemedi. Mustafa Kemal bundan sonra cemiyetin yönetiminden uzak durarak askerlik görevine yoğunlaştı.',
    question: 'Bu bilgilere göre Mustafa Kemal hakkında aşağıdakilerden hangisi söylenebilir?',
    options: [
      { text: 'Düşüncesini, cemiyetin önde gelenleri benimsemese de açıkça dile getirmiştir.', explanation: 'Doğru. Önerisini kongrede açıkça sundu; kabul edilmemesine rağmen görüşünden vazgeçmedi. Bu, ilkeli ve cesur bir tutumu gösterir.' },
      { text: 'İttihat ve Terakki Cemiyeti’nin kurucusudur.', explanation: 'Metinde böyle bir bilgi yoktur. Kongreye katılması, cemiyeti kurduğunu göstermez.' },
      { text: 'Siyasetle hiçbir zaman ilgilenmemiştir.', explanation: 'Metin tam tersini düşündürür: Bir siyasi kongreye katılıp öneri sundu. İstediği subayların bir seçim yapmasıydı, siyasete ilgisizlik değil.' },
      { text: 'Önerisi kongrede kabul edilerek hemen uygulanmıştır.', explanation: 'Metin önerinin benimsenmediğini açıkça söylüyor; bu seçenek metinle çelişir.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. Metinde üç bilgi var: öneri, önerinin reddedilmesi ve Mustafa Kemal’in sonraki tutumu. Doğru seçenek bu üçüyle de uyumlu olandır.',
    critical_point: 'Üçüncü seçenek güçlü bir çeldiricidir: Ordunun siyasetten çekilmesini istemek, siyasete ilgisizlik gibi görünebilir. Ama kongreye katılmak ve öneri sunmak zaten siyasi bir davranıştır.',
    takeaway: 'Metinle çelişen seçenekleri önce ele; sonra metinde olmayan bilgiyi ekleyen seçenekleri ele. Kalan seçenek doğrudur.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Savaşlarla geçen dokuz yıl',
    range: '1905–1914',
    body:
      'Mustafa Kemal kurmay yüzbaşı olarak Şam’da başladığı askerlik hayatında dokuz yılda yarbaylığa yükseldi. Şam’da cemiyet kurdu, Makedonya’da Meşrutiyet ortamını yaşadı, 31 Mart Olayı’nda Hareket Ordusu’nda kurmay başkanı oldu ve 1909’da ordunun siyasetten çekilmesini önerdi. Trablusgarp’a gönüllü giderek yerli halkla birlikte savaştı; Balkan Savaşları’nda Bolayır’da ve Edirne harekâtında görev aldı; Sofya’da askerî ataşe olarak yabancı bir orduyu ve devleti gözlemledi. Bu yıllar onun liderlik, örgütleyicilik, fedakârlık ve ileri görüşlülük özelliklerinin sınandığı yıllardı.',
    turning_points: [
      '1905 · Şam, ilk görev',
      '1909 · 31 Mart Olayı, Hareket Ordusu',
      '1909 · Ordu siyasetten çekilmeli önerisi',
      '1911 · Trablusgarp’a gönüllü gidiş',
      '1912 · Uşi Antlaşması; Selanik’in kaybı',
      '1913 · Edirne’nin geri alınması; Sofya ataşemiliterliği',
      '1914 · Yarbay',
    ],
  },
  summary: [
    '**Görev sırası:** Şam (1905) → Makedonya (1907) → Hareket Ordusu (1909) → Trablusgarp (1911–1912) → Bolayır ve Edirne (1913) → Sofya (1913–1914).',
    '**31 Mart Olayı (1909):** Meşrutiyet’e karşı ayaklanma. Hareket Ordusu bastırdı; Mustafa Kemal kurmay başkanıydı ve ordunun adını koydu. II. Abdülhamid tahttan indirildi.',
    '**1909 kongresi:** Ordunun siyasetten çekilmesini önerdi; kabul edilmedi. → İleri görüşlülük, ilkelilik.',
    '**Trablusgarp (1911–1912):** Gönüllü ve gizlice gitti; Tobruk ve Derne çevresinde yerli halkı örgütledi; binbaşı oldu. Uşi Antlaşması ile bölge kaybedildi. → Fedakârlık, liderlik.',
    '**Balkan Savaşları (1912–1913):** Selanik kaybedildi; Mustafa Kemal Bolayır’da kurmay oldu, Edirne’nin geri alınması harekâtında görev aldı.',
    '**Sofya (1913–1914):** Askerî ataşe; yarbay oldu. → Gözlemcilik, diplomatik yetenek.',
    'Bir özellik birden çok olayda görülüyorsa çıkarım güçlenir; tek bir olaydan kesin yargıya varma.',
  ],
  quizzes: [
    {
      question: 'Mustafa Kemal’in 31 Mart Olayı’ndaki görevi nedir?',
      options: ['Ayaklanmayı başlatan birliğin komutanı', 'Hareket Ordusu’nda kurmay başkanı', 'Sofya’da askerî ataşe', 'Trablusgarp’ta gönüllü subay'],
      answer_index: 1,
      explanation: '31 Mart Olayı’nı bastırmak için Selanik’ten gelen Hareket Ordusu’nda kurmay başkanı olarak görev aldı ve ordunun adını koydu. Trablusgarp ve Sofya görevleri daha sonraki yıllara aittir.',
    },
    {
      question: 'Aşağıdakilerden hangisi Mustafa Kemal’in Trablusgarp Savaşı’ndaki davranışıyla en doğrudan ilişkilendirilebilecek özelliktir?',
      options: ['Fedakârlık', 'Gözlemcilik', 'Diplomatik yetenek', 'Ordunun siyasetten ayrılmasını savunma'],
      answer_index: 0,
      explanation: 'Deniz yolu kapalıyken gönüllü olarak ve gizlice Trablusgarp’a gitmesi fedakârlığı gösterir. Gözlemcilik ve diplomatik yetenek Sofya görevinde, ordu–siyaset görüşü 1909 kongresinde öne çıkar.',
    },
    {
      question: 'Osmanlı Devleti’nin Uşi Antlaşması’nı imzalamasını hızlandıran gelişme hangisidir?',
      options: ['31 Mart Olayı’nın çıkması', 'Balkan Savaşı’nın başlaması', 'II. Meşrutiyet’in ilanı', 'Mustafa Kemal’in Sofya’ya atanması'],
      answer_index: 1,
      explanation: 'Balkan devletleri 1912’de saldırınca Osmanlı iki cephede birden savaşmamak için İtalya ile Uşi Antlaşması’nı imzaladı. Diğer seçenekler ya daha önceki yıllara ya da daha sonraki bir göreve aittir.',
    },
    {
      question: 'Mustafa Kemal’in 1909’daki “subaylar ya askerlikte kalmalı ya siyasete geçmeli” önerisi en çok hangi özelliğini gösterir?',
      options: ['İleri görüşlülük', 'Sanata ilgi', 'Dil öğrenme isteği', 'Matematikteki başarısı'],
      answer_index: 0,
      explanation: 'Ordunun siyasete karışmasının doğuracağı sorunları erkenden görmesi ileri görüşlülüğü gösterir. Diğer seçenekler bu olayla ilgili değildir.',
    },
  ],
  next: ['I. Dünya Savaşı: Sebepler ve Bloklaşma', 'I. Dünya Savaşı’nda Osmanlı Cepheleri'],
})

export default lesson
