import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 5. ders
 * Kazanım : İTA.8.2.5
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   a) Samsun'a çıkış, Havza Genelgesi, Amasya Genelgesi, Erzurum Kongresi,
 *      Sivas Kongresi ve Amasya Görüşmeleri
 *   b) Hazırlık aşamasındaki sorunlara Mustafa Kemal'in bulduğu çözüm yolları
 *   c) Millî Mücadele Dönemi'nde basının rolü
 *
 * KAPSAM KARARI
 * (a) kronoloji, atlas ve karşılaştırmayla; (b) ayrı bir "sorun → çözüm"
 * derinleşmesiyle; (c) ayrı bir basın derinleşmesiyle karşılandı. Genelge ve
 * kongre metinleri Nutuk'tan (1927, kamu malı; Vikikaynak) BİREBİR alıntılandı.
 * Misakımillî ve Büyük Millet Meclisi sonraki dersin konusudur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 8.
 */

const SLUG = 'lgs-tarih-hazirlik-donemi-genelgeler-kongreler'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 5,
  title: 'Millî Mücadele’nin Hazırlık Dönemi: Samsun’dan Ankara’ya',
  subtitle:
    'On üç ay, birkaç genelge, iki kongre ve bir görüşme: Mustafa Kemal dağınık direnişi tek bir amaç, tek bir çatı ve tek bir ses altında topladı.',
  minutes: 52,
  kazanimlar: ['İTA.8.2.5'],
  kapsamNotu:
    'Genelge ve kongre kararları Nutuk’tan birebir alıntılanmış, günümüz Türkçesiyle açıklanmıştır. Misakımillî ve Büyük Millet Meclisi’nin açılışı bir sonraki dersin konusudur.',
  prerequisites: [
    {
      topic: 'Kuvâ-yı Millîye ve Cemiyetler (önceki ders)',
      why: 'Mustafa Kemal’in Anadolu’da neyi birleştirmeye çalıştığını anlamak için dağınık cemiyetleri ve direnişi bilmek gerekir.',
    },
    {
      topic: 'Mondros ve İşgaller Karşısında Tutumlar',
      why: 'İstanbul hükümetinin tutumunu bilmek, Mustafa Kemal’in neden yeni bir yol aradığını açıklar.',
    },
  ],
  outcomes: [
    'Samsun’dan Ankara’ya kadar olan hazırlık dönemini kronolojik sırayla anlatabileceksin.',
    'Havza ve Amasya genelgelerinin, Erzurum ve Sivas kongrelerinin ve Amasya Görüşmeleri’nin önemini açıklayabileceksin.',
    'Erzurum ve Sivas kongrelerini karşılaştırabileceksin.',
    'Mustafa Kemal’in karşılaştığı sorunları ve bulduğu çözüm yollarını eşleştirebileceksin.',
    'Millî Mücadele’de basının rolünü örneklerle açıklayabileceksin.',
    'Bir genelge ya da kongre kararından çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: '19 Mayıs 1919: Bir başlangıç',
    lead:
      'Mustafa Kemal 19 Mayıs 1919’da Samsun’a çıktığında elinde bir ordu, bir hükümet ya da bir para kaynağı yoktu. Elinde yalnız bir görev belgesi, birkaç arkadaşı ve bir kararlılık vardı.',
    body:
      'Mustafa Kemal Doğu Anadolu’daki bazı askerî birlikleri denetlemek ve bölgede düzeni sağlamak üzere Ordu Müfettişi olarak Samsun’a gönderilmişti. Bu görev ona geniş bir bölgede askerî ve sivil yöneticilerle haberleşme yetkisi veriyordu. Mustafa Kemal bu yetkiyi, dağınık hâldeki direnişi birleştirmek için kullandı.\n\n' +
      'Samsun’dan sonraki on üç ay, Millî Mücadele’nin **hazırlık dönemi**dir. Bu dönemde Mustafa Kemal önce halkı uyandırdı (Havza Genelgesi), sonra mücadelenin gerekçesini, amacını ve yöntemini ilan etti (Amasya Genelgesi). Ardından iki kongreyle kararları milletin temsilcilerine onaylattı (Erzurum ve Sivas), İstanbul hükümetine kendini resmen tanıttı (Amasya Görüşmeleri) ve merkezini Ankara’ya taşıdı. Bu sırada gazeteler ve bir haber ajansı kurarak milletin sesini duyurdu.\n\n' +
      'Program bu kazanımda üç şey ister: Bu adımları tanımak, Mustafa Kemal’in karşılaştığı sorunlara bulduğu çözümleri görmek ve basının rolünü anlamak. Bu ders üçünü de işliyor.',
  },
  concepts: [
    { term: 'Genelge (tamim)', body: 'Bir makamın birden çok kuruma ya da kişiye aynı anda gönderdiği resmî yazı. Mustafa Kemal genelgelerini telgrafla valilere ve komutanlara gönderdi.' },
    { term: 'Kongre', body: 'Belirli bir amaçla farklı yerlerden gelen temsilcilerin toplanıp karar aldığı büyük toplantı.' },
    { term: 'Heyet-i Temsiliye', body: '“Temsil heyeti.” Erzurum Kongresi’nde seçilen, Sivas Kongresi’nde genişletilen ve bütün vatanı temsil eden yürütme kurulu. Başkanı Mustafa Kemal’di.' },
    { term: 'Millî egemenlik', body: 'Ülkeyi yönetme yetkisinin millete ait olması. Amasya Genelgesi’ndeki “Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır” cümlesi bu ilkenin ilk açık ifadelerindendir.' },
    { term: 'Tam bağımsızlık', body: 'Bir devletin siyasi, askerî, ekonomik ve kültürel alanlarda hiçbir yabancı gücün denetimini kabul etmemesi. Manda ve himayenin reddi bu ilkenin gereğidir.' },
    { term: 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti', body: 'Sivas Kongresi’nde bütün millî cemiyetlerin birleştirilmesiyle oluşan ulusal çatı.' },
  ],
  why: {
    question: 'Mustafa Kemal neden hemen savaş başlatmak yerine önce genelgeler yayımlayıp kongreler topladı?',
    body:
      'Çünkü önce milletin desteğini ve meşruiyeti kazanmak gerekiyordu. Mustafa Kemal Samsun’a çıktığında İstanbul hükümeti hâlâ yasal hükümetti ve padişah halk üzerinde büyük bir etkiye sahipti. Halkın bir kısmı olup bitenlerden habersiz, bir kısmı yorgun ve umutsuzdu; cemiyetler dağınıktı; bazı aydınlar mandayı kurtuluş sanıyordu.\n\n' +
      'Böyle bir ortamda tek bir kişinin emriyle başlayan bir direniş, “bir asinin hareketi” gibi gösterilebilirdi. Mustafa Kemal bu yüzden adım adım ilerledi: Halkı mitinglerle harekete geçirdi, kararları milletin seçtiği temsilcilere onaylattı ve millet adına konuşan bir kurul (Heyet-i Temsiliye) oluşturdu. Böylece Millî Mücadele bir kişinin değil, milletin iradesine dayanan bir hareket hâline geldi.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Samsun’dan Ankara’ya (Mayıs 1919–Nisan 1920)',
    lead: 'Her adım bir öncekinin üzerine kuruldu. Tarihleri ezberlemek yerine her adımın bir öncekine neyi eklediğine bak.',
    intro: 'Önce uyandırma, sonra örgütleme, sonra karar alma, sonra tanınma, en son merkez ve ses: Kronolojiyi bu sırayla oku.',
    items: [
      { title: '19 Mayıs 1919 · Samsun', body: 'Mustafa Kemal Ordu Müfettişi olarak Samsun’a çıktı. Millî Mücadele’nin başlangıcı kabul edilir.' },
      { title: '28 Mayıs 1919 · Havza Genelgesi', body: 'Valilere ve komutanlara gönderilen genelgeyle işgalleri protesto eden mitingler düzenlenmesi ve büyük devletlere telgraflar çekilmesi istendi.' },
      { title: '22 Haziran 1919 · Amasya Genelgesi', body: 'Vatanın bütünlüğünün ve milletin bağımsızlığının tehlikede olduğu, milletin bağımsızlığını yine milletin kurtaracağı ilan edildi; Sivas’ta bir kongre toplanmasına karar verildi.' },
      { title: '8/9 Temmuz 1919 · Askerlikten ayrılış', body: 'İstanbul hükümeti Mustafa Kemal’i geri çağırıp görevinden alınca Mustafa Kemal askerlikten istifa etti ve mücadeleyi sivil olarak sürdürdü.' },
      { title: '23 Temmuz–7 Ağustos 1919 · Erzurum Kongresi', body: 'Doğu illerinin temsilcileri toplandı; vatanın bölünmez bütünlüğü, manda ve himayenin reddi kararlaştırıldı; Heyet-i Temsiliye seçildi.' },
      { title: '4–11 Eylül 1919 · Sivas Kongresi', body: 'Yurdun her yerinden temsilciler toplandı; bütün cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti’nde birleşti; Heyet-i Temsiliye bütün vatanı temsil etti.' },
      { title: '14 Eylül 1919 · İrade-i Milliye', body: 'Sivas’ta İrade-i Milliye gazetesi yayımlanmaya başladı. Kongre kararları halka bu gazeteyle duyuruldu.' },
      { title: '1 Ekim 1919 · Damat Ferit Paşa çekildi', body: 'Heyet-i Temsiliye’nin İstanbul ile haberleşmeyi kesmesi üzerine Damat Ferit Paşa hükümeti istifa etti; yerine Ali Rıza Paşa hükümeti kuruldu.' },
      { title: '20–22 Ekim 1919 · Amasya Görüşmeleri', body: 'Heyet-i Temsiliye ile İstanbul hükümeti adına Bahriye Nazırı Salih Paşa görüştü; protokoller imzalandı.' },
      { title: '27 Aralık 1919 · Ankara', body: 'Heyet-i Temsiliye Ankara’ya geldi. Ankara, Millî Mücadele’nin merkezi oldu.' },
      { title: '10 Ocak 1920 · Hâkimiyet-i Milliye', body: 'Ankara’da Hâkimiyet-i Milliye gazetesi yayımlanmaya başladı.' },
      { title: '6 Nisan 1920 · Anadolu Ajansı', body: 'Millî Mücadele’nin haberlerini yurda ve dünyaya duyurmak için Anadolu Ajansı kuruldu.' },
    ],
    takeaway:
      'Dikkat et: Adımların sırası rastgele değildir. Önce halk uyandırıldı, sonra karar alındı, sonra karar milletin temsilcilerine onaylatıldı, en son hükümete kabul ettirildi.',
    body:
      'Kronolojiyi “ilk kez” sorusuyla okumak çok işe yarar. **Havza Genelgesi** ile halk ilk kez işgallere karşı örgütlü biçimde harekete geçirildi. **Amasya Genelgesi** ile Millî Mücadele’nin gerekçesi, amacı ve yöntemi ilk kez açıkça ilan edildi; İstanbul hükümetinin görevini yapamadığı ilk kez resmî bir belgede söylendi. **Erzurum Kongresi** ile manda ve himaye ilk kez reddedildi ve Heyet-i Temsiliye ilk kez kuruldu. **Sivas Kongresi** ile bütün cemiyetler ilk kez birleştirildi ve Heyet-i Temsiliye ilk kez bütün vatanı temsil etti. **Amasya Görüşmeleri** ile İstanbul hükümeti Heyet-i Temsiliye’yi ilk kez resmen muhatap aldı.',
  },
  map: {
    title: 'Şematik atlas: Mustafa Kemal’in hazırlık dönemindeki yolu',
    intro: 'Çizgiler Mustafa Kemal’in yolculuğunun sırasını gösterir. Noktalara dokunarak her durakta ne yapıldığını gör.',
    map_label: 'Şematik gösterim · yol ve uzaklıklar ölçekli değildir',
    layers: [
      { id: 'genelge', label: 'Genelgeler', description: 'Samsun, Havza, Amasya.', active: true },
      { id: 'kongre', label: 'Kongreler', description: 'Erzurum ve Sivas.', active: true },
      { id: 'merkez', label: 'Görüşme ve merkez', description: 'Amasya Görüşmeleri ve Ankara.', active: true },
    ],
    regions: [
      { label: 'KARADENİZ', x: 30, y: 4, tone: 'water' },
      { label: 'ANADOLU', x: 30, y: 70, tone: 'land' },
      { label: 'DOĞU ANADOLU', x: 76, y: 56, tone: 'land' },
    ],
    locations: [
      { id: 'istanbul', label: 'İstanbul', x: 6, y: 18, tone: 'muted', detail: '16 Mayıs 1919’da Mustafa Kemal Bandırma vapuruyla buradan ayrıldı. İstanbul hükümeti hazırlık dönemi boyunca Millî Mücadele’yi engellemeye çalıştı.' },
      { id: 'samsun', label: 'Samsun · 19 Mayıs', x: 46, y: 8, layer: 'genelge', tone: 'brand', detail: 'Mustafa Kemal 19 Mayıs 1919’da Ordu Müfettişi olarak Samsun’a çıktı. Kentte İngiliz askerleri bulunuyordu; bu yüzden kısa süre sonra iç bölgelere geçti.' },
      { id: 'havza', label: 'Havza · 28 Mayıs', x: 40, y: 18, layer: 'genelge', tone: 'brand', detail: 'Mustafa Kemal 25 Mayıs–12 Haziran 1919 arasında Havza’da kaldı. 28 Mayıs’ta işgalleri protesto eden mitingler düzenlenmesini isteyen genelgeyi yayımladı.' },
      { id: 'amasya', label: 'Amasya · 22 Haziran', x: 42, y: 30, layer: 'genelge', tone: 'brand', detail: '21/22 Haziran 1919 gecesi Amasya Genelgesi hazırlandı. Ekim 1919’da Amasya Görüşmeleri de burada yapıldı.' },
      { id: 'sivas', label: 'Sivas · Kongre', x: 54, y: 44, layer: 'kongre', tone: 'accent', detail: '4–11 Eylül 1919’da Sivas Kongresi toplandı. Bütün cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti’nde birleşti. İrade-i Milliye gazetesi burada çıkmaya başladı.' },
      { id: 'erzurum', label: 'Erzurum · Kongre', x: 82, y: 30, layer: 'kongre', tone: 'accent', detail: '23 Temmuz–7 Ağustos 1919’da Erzurum Kongresi toplandı. Vatanın bütünlüğü, manda ve himayenin reddi kararlaştırıldı; Heyet-i Temsiliye seçildi.' },
      { id: 'ankara', label: 'Ankara · 27 Aralık', x: 24, y: 44, layer: 'merkez', tone: 'danger', detail: 'Heyet-i Temsiliye 27 Aralık 1919’da Ankara’ya geldi. Ankara hem İstanbul’a hem batı cephesine yakın, demiryolu ve telgraf bağlantısı olan güvenli bir merkezdi.' },
    ],
    routes: [
      { from: 'istanbul', to: 'samsun', label: 'Bandırma vapuru', tone: 'muted' },
      { from: 'samsun', to: 'havza', label: 'Havza’ya', layer: 'genelge' },
      { from: 'havza', to: 'amasya', label: 'Amasya’ya', layer: 'genelge' },
      { from: 'amasya', to: 'sivas', label: 'Sivas üzerinden', layer: 'kongre', tone: 'accent' },
      { from: 'sivas', to: 'erzurum', label: 'Erzurum’a', layer: 'kongre', tone: 'accent' },
      { from: 'sivas', to: 'ankara', label: 'Ankara’ya · Aralık 1919', layer: 'merkez', tone: 'danger' },
    ],
    insight:
      'Haritadaki yol bir daire çiziyor: Karadeniz kıyısından iç bölgelere, oradan doğuya, sonra yeniden batıya, Ankara’ya. Mustafa Kemal hem işgalcilerden uzak güvenli merkezler aradı hem de bütün bölgeleri harekete katmaya çalıştı. Sonunda batı cephesine ve İstanbul’a yakın olan Ankara’yı merkez seçti.',
    source_note:
      'Duraklar ve tarihler; Nutuk (1927, Vikikaynak metni), MSB “Millî Mücadele Dönemi” sayfası ve TDV İslâm Ansiklopedisi “Anadolu ve Rumeli Müdâfaa-i Hukuk Cemiyeti” maddesi esas alınarak şematikleştirilmiştir. Yol çizgileri yalnızca sırayı gösterir; gerçek güzergâh ve uzaklık bilgisi taşımaz.',
  },
  dataTable: {
    title: 'Hazırlık döneminin adımları: ne oldu, neden önemli?',
    columns: ['Adım', 'Tarih', 'Önemli içerik', 'Önemi'],
    rows: [
      ['Samsun’a çıkış', '19 Mayıs 1919', 'Ordu Müfettişi olarak Anadolu’ya geçiş', 'Millî Mücadele’nin başlangıcı'],
      ['Havza Genelgesi', '28 Mayıs 1919', 'Mitingler, protesto telgrafları; Hristiyan halka karşı saldırı yapılmaması', 'Halk ilk kez örgütlü biçimde harekete geçirildi'],
      ['Amasya Genelgesi', '22 Haziran 1919', 'Vatan ve millet tehlikede; İstanbul görevini yapamıyor; milleti yine millet kurtaracak; Sivas’ta kongre', 'Gerekçe, amaç ve yöntem ilk kez ilan edildi; millî egemenliğin ilk açık ifadesi'],
      ['Askerlikten istifa', '8/9 Temmuz 1919', 'Resmî görevi bırakıp mücadeleye sivil olarak devam', 'Mustafa Kemal’in İstanbul’dan bağımsız hareket etmesi'],
      ['Erzurum Kongresi', '23 Temmuz–7 Ağustos 1919', 'Vatan bir bütündür; manda ve himaye kabul edilemez; Heyet-i Temsiliye', 'Bölgesel toplandı ama ulusal kararlar aldı'],
      ['Sivas Kongresi', '4–11 Eylül 1919', 'Cemiyetler birleşti; manda reddedildi; Heyet-i Temsiliye bütün vatanı temsil etti', 'Ulusal nitelikte ilk kongre'],
      ['Amasya Görüşmeleri', '20–22 Ekim 1919', 'Heyet-i Temsiliye ile İstanbul hükümeti arasında protokoller', 'İstanbul hükümeti Heyet-i Temsiliye’yi resmen muhatap aldı'],
      ['Ankara’ya geliş', '27 Aralık 1919', 'Heyet-i Temsiliye’nin merkezi Ankara oldu', 'Millî Mücadele’nin yeni merkezi'],
    ],
    caption:
      'Tablonun son sütunu her adımın bir öncekine ne eklediğini gösterir. Sorularda “ilk kez” ifadesiyle karşılaşırsan bu sütunu hatırla.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Dağınık direnişten tek bir harekete',
    lead: 'Hazırlık döneminde çözülen asıl sorun, dağınıklıktı. Zincirde bu sorunun nasıl adım adım çözüldüğünü gör.',
    intro: 'İlk halkalar Mustafa Kemal’in karşılaştığı durumu, sonrakiler attığı adımları, son halkalar da bu adımların sonucunu anlatır.',
    steps: [
      { tur: 'sebep', title: 'İşgaller ve İstanbul’un direnmemesi', body: 'Mondros’un ardından işgaller genişliyor, İstanbul hükümeti direnilmemesini istiyordu.' },
      { tur: 'sebep', title: 'Dağınık cemiyetler ve Kuvâ-yı Millîye', body: 'Direniş vardı ama bölgeseldi; ortak bir amaç, önderlik ve karar organı yoktu.' },
      { tur: 'sebep', title: 'Manda ve himaye fikri', body: 'Bazı aydınlar kurtuluşu yabancı bir devletin korumasında arıyordu; bu, direnişin amacını belirsizleştiriyordu.' },
      { tur: 'gelisme', title: 'Genelgeler', body: 'Havza Genelgesi halkı uyandırdı; Amasya Genelgesi mücadelenin gerekçesini, amacını ve yöntemini ilan etti.' },
      { tur: 'gelisme', title: 'Kongreler', body: 'Erzurum ve Sivas kongreleri kararları milletin temsilcilerine onaylattı; manda reddedildi, cemiyetler birleşti, Heyet-i Temsiliye bütün vatanı temsil etti.' },
      { tur: 'gelisme', title: 'Tanınma ve ses', body: 'Amasya Görüşmeleri’yle İstanbul hükümeti Heyet-i Temsiliye’yi muhatap aldı; gazeteler ve Anadolu Ajansı milletin sesini duyurdu.' },
      { tur: 'sonuc', title: 'Tek amaç, tek çatı, tek önderlik', body: 'Millî Mücadele tam bağımsızlık amacı, Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti çatısı ve Heyet-i Temsiliye önderliğinde birleşti.' },
      { tur: 'sonraki-etki', title: 'Misakımillî ve Büyük Millet Meclisi', body: 'Bu hazırlık, 1920’de Misakımillî’nin kabulüne ve Ankara’da Büyük Millet Meclisi’nin açılmasına zemin hazırladı.' },
    ],
    inference:
      'Temel çıkarım: Hazırlık döneminin asıl başarısı bir savaş kazanmak değil, milleti ortak bir amaç ve ortak bir irade etrafında birleştirmektir. Sonraki bütün askerî ve siyasi başarılar bu birliğin üzerine kuruldu.',
    body:
      'İki kongreyi ayırt etmek bu kazanımın en sık karıştırılan noktasıdır. Erzurum Kongresi **toplanış şekli bakımından bölgesel**, aldığı kararlar bakımından ise **ulusal** bir kongredir: Temsilciler yalnız doğu illerinden geldi, ama “vatan bir bütündür” ve “manda ve himaye kabul edilemez” gibi bütün yurdu ilgilendiren kararlar alındı. Sivas Kongresi ise hem toplanış şekli hem de kararları bakımından **ulusal**dır: Temsilciler yurdun her yerinden geldi.\n\n' +
      'Sivas Kongresi’nde Erzurum kararları genişletildi. Nutuk’a göre en önemli değişikliklerden biri şuydu: Erzurum’da Heyet-i Temsiliye yalnız “Doğu Anadolu’nun” temsilcisiyken, Sivas’ta “vatanın heyet-i umumiyesini” yani bütün vatanı temsil eder hâle geldi. Cemiyetin adı da “Şarkî Anadolu” yerine “Anadolu ve Rumeli” oldu.',
  },
  comparison: {
    title: 'Erzurum Kongresi ve Sivas Kongresi',
    columns: ['Erzurum Kongresi', 'Sivas Kongresi'],
    rows: [
      { label: 'Tarih', values: ['23 Temmuz–7 Ağustos 1919', '4–11 Eylül 1919'] },
      { label: 'Katılanlar', values: ['Doğu illerinin temsilcileri', 'Yurdun her yerinden temsilciler'] },
      { label: 'Niteliği', values: ['Toplanış bakımından bölgesel, kararları bakımından ulusal', 'Toplanış ve kararları bakımından ulusal'] },
      { label: 'Önemli kararlar', values: ['Vatan bir bütündür; işgale karşı birlikte savunma; manda ve himaye kabul edilemez; Heyet-i Temsiliye seçildi', 'Erzurum kararları bütün yurda genişletildi; cemiyetler birleşti; manda kesin olarak reddedildi; İrade-i Milliye çıkarıldı'] },
      { label: 'Heyet-i Temsiliye', values: ['Doğu Anadolu’yu temsil ediyordu', 'Bütün vatanı temsil etti; üye sayısı artırıldı'] },
      { label: 'Cemiyetin adı', values: ['Şarkî Anadolu Müdafaa-i Hukuk Cemiyeti', 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'] },
    ],
    insight:
      'Asıl fark şurada: Erzurum’da alınan kararlar bütün yurt için alınmıştı ama onları yalnız doğunun temsilcileri onaylamıştı. Sivas bu kararları bütün yurdun temsilcilerine onaylatarak millî iradenin sesi hâline getirdi.',
  },
  traps: [
    {
      title: 'Erzurum Kongresi’ni tamamen bölgesel sanmak',
      wrong: 'Erzurum Kongresi bölgesel bir kongre olduğu için yalnız Doğu Anadolu ile ilgili kararlar aldı.',
      right: 'Erzurum Kongresi toplanış bakımından bölgeseldi; ama “vatan bir bütündür”, “manda ve himaye kabul edilemez” gibi bütün yurdu ilgilendiren ulusal kararlar aldı.',
      body: 'Soruda “toplanış şekli” mi yoksa “alınan kararlar” mı sorulduğuna dikkat et; cevap buna göre değişir.',
    },
    {
      title: 'Amasya Genelgesi ile Amasya Görüşmeleri’ni karıştırmak',
      wrong: 'Amasya Görüşmeleri’nde “Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır” kararı alındı.',
      right: 'Bu cümle Haziran 1919’daki Amasya Genelgesi’ne aittir. Amasya Görüşmeleri ise Ekim 1919’da Heyet-i Temsiliye ile İstanbul hükümeti arasında yapıldı.',
      body: 'İpucu: Genelge bir “ilan”dır, görüşme bir “pazarlık”tır. Genelge millete, görüşmeler İstanbul hükümetine yönelikti.',
    },
    {
      title: 'Hazırlık döneminde savaş yapıldığını sanmak',
      wrong: 'Hazırlık döneminde Mustafa Kemal düzenli orduyla büyük savaşlar kazandı.',
      right: 'Hazırlık döneminin amacı milleti örgütlemek, amaçları belirlemek ve karar organları kurmaktı. Düzenli ordunun büyük savaşları Büyük Millet Meclisi açıldıktan sonra yapıldı.',
      body: 'Bu dönemde bölgesel çatışmalar Kuvâ-yı Millîye tarafından yürütülüyordu.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Hazırlık döneminin şahsiyetleri',
    lead: 'Mustafa Kemal bu yolu yalnız yürümedi. Yanında duranlar da, karşısında duranlar da vardı.',
    intro: 'Kartlarda her kişinin hazırlık dönemindeki kararını ve bu kararın sonucunu görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal',
        period: 'Mayıs 1919–Nisan 1920',
        position: 'Ordu Müfettişi, sonra Heyet-i Temsiliye Başkanı',
        contribution: 'Genelgelerle halkı harekete geçirdi, kongreleri topladı ve yönetti, İstanbul hükümetiyle görüşmeleri yürüttü, gazeteler ve Anadolu Ajansı’nın kurulmasını sağladı. İstanbul görevinden alınca askerlikten istifa edip mücadeleyi sivil olarak sürdürdü.',
        connections: ['Havza ve Amasya genelgeleri', 'Erzurum ve Sivas kongreleri', 'Amasya Görüşmeleri', 'İrade-i Milliye ve Hâkimiyet-i Milliye'],
        significance: 'Bu dönemde gösterdiği örgütleyicilik, ileri görüşlülük ve kararlılık, Millî Mücadele’nin tek bir önderlik altında birleşmesini sağladı.',
      },
      {
        name: 'Kâzım Karabekir Paşa',
        period: '1919 · 15. Kolordu komutanı (Erzurum)',
        position: 'Doğu’daki en güçlü askerî birliğin komutanı',
        contribution: 'Mustafa Kemal görevden alınıp askerlikten istifa ettiğinde onun yanında kaldı ve kolordusuyla Erzurum Kongresi’nin güvenliğini sağladı.',
        connections: ['Erzurum Kongresi', 'Amasya Genelgesi’ne katılım'],
        significance: 'Resmî görevi olmayan bir önderin arkasında güçlü bir kolordunun durması, hazırlık döneminin en kritik desteklerinden biriydi.',
      },
      {
        name: 'Rauf (Orbay) Bey',
        period: '1919',
        position: 'Eski Bahriye Nazırı; Heyet-i Temsiliye üyesi',
        contribution: 'Amasya Genelgesi’ni imzalayanlar arasındaydı; Erzurum ve Sivas kongrelerine katıldı.',
        connections: ['Amasya Genelgesi', 'Heyet-i Temsiliye'],
        significance: 'Mondros’u imzalayan kişinin Millî Mücadele’ye katılması, bir yıl içinde değişen tutumların simgesidir.',
      },
      {
        name: 'Ali Fuat (Cebesoy) Paşa ve Refet (Bele) Bey',
        period: '1919',
        position: 'Komutanlar',
        contribution: 'Amasya Genelgesi’ni Mustafa Kemal’le birlikte imzaladılar; Anadolu’daki askerî birliklerin Millî Mücadele’ye destek vermesinde rol oynadılar.',
        connections: ['Amasya Genelgesi'],
        significance: 'Genelgenin birden çok komutan tarafından imzalanması, kararın tek bir kişinin değil, bir grup önderin ortak kararı olduğunu gösteriyordu.',
      },
      {
        name: 'Ali Galip',
        period: 'Eylül 1919',
        position: 'İstanbul hükümetinin görevlendirdiği vali',
        contribution: 'İstanbul hükümetinden aldığı talimatla Sivas Kongresi’ni dağıtmaya ve kongre üyelerini tutuklamaya çalıştı; girişimi başarısız oldu.',
        connections: ['Sivas Kongresi’ni engelleme girişimi'],
        significance: 'Bu olay, İstanbul hükümetinin Millî Mücadele’yi engellemeye çalıştığını açıkça gösterdi ve Heyet-i Temsiliye’nin İstanbul ile haberleşmeyi kesmesine yol açan gelişmelerden biri oldu.',
      },
      {
        name: 'Salih Paşa',
        period: 'Ekim 1919 · Bahriye Nazırı',
        position: 'Amasya Görüşmeleri’nde İstanbul hükümetinin temsilcisi',
        contribution: 'Heyet-i Temsiliye ile görüştü ve protokolleri imzaladı.',
        connections: ['Amasya Görüşmeleri'],
        significance: 'Bir hükümet üyesinin Heyet-i Temsiliye ile resmî protokol imzalaması, Heyet-i Temsiliye’nin fiilen tanınması anlamına geliyordu.',
      },
      {
        name: 'Damat Ferit Paşa',
        period: 'Mart–Ekim 1919 · sadrazam',
        position: 'İstanbul hükümetinin başı',
        contribution: 'Millî Mücadele’yi engellemeye çalıştı. Heyet-i Temsiliye’nin haberleşmeyi kesmesi ve Anadolu’daki tepkiler üzerine 1 Ekim 1919’da istifa etti.',
        connections: ['Sivas Kongresi’nin ardından istifa'],
        significance: 'İstifası, Anadolu’daki millî hareketin İstanbul hükümetini etkileyebilecek güce ulaştığının ilk açık göstergesiydi.',
      },
    ],
    takeaway:
      'Mustafa Kemal’in başarısının bir parçası da doğru kişileri doğru zamanda yanına almasıydı. Kâzım Karabekir’in desteği, Rauf, Ali Fuat ve Refet’in imzaları olmasaydı genelgeler ve kongreler bu kadar etkili olamazdı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-sorun-cozum`,
      title: 'Sorun → çözüm: Mustafa Kemal hangi engelleri nasıl aştı?',
      lead: 'Programın açıklaması, hazırlık aşamasında karşılaşılan sorunlara Mustafa Kemal’in bulduğu çözüm yollarına değinilmesini ister. Aşağıdaki tabloyu her satırda “sorun neydi, nasıl çözüldü, bu çözüm onun hakkında ne söylüyor?” diye oku.',
      blocks: [
        {
          id: `${SLUG}-sorun-cozum-tablo`,
          type: 'table',
          interactive: true,
          title: 'Sorunlar ve çözümler',
          columns: ['Sorun', 'Mustafa Kemal’in çözümü', 'Hangi özelliği gösterir?'],
          rows: [
            ['Halk işgallerden habersiz ve hareketsizdi', 'Havza Genelgesi ile mitingler ve protesto telgrafları', 'Halkın gücüne güven, örgütleyicilik'],
            ['İstanbul hükümeti onu geri çağırıp görevinden aldı', 'Askerlikten istifa edip mücadeleyi sivil olarak sürdürdü', 'Kararlılık, fedakârlık'],
            ['Cemiyetler dağınıktı', 'Erzurum ve Sivas kongreleri; Sivas’ta tek çatı altında birleşme', 'Birleştiricilik, ileri görüşlülük'],
            ['Manda ve himaye fikri', 'Kongrelerde tartışılarak reddedilmesi', 'Tam bağımsızlığa bağlılık'],
            ['“İttihatçılık” şüphesi', 'Sivas Kongresi’nde üyelerin İttihatçılığı canlandırmayacaklarına yemin etmesi', 'Güven oluşturma, gerçekçilik'],
            ['İstanbul hükümetinin engelleme girişimleri (Ali Galip olayı)', 'İstanbul ile haberleşmeyi kesme; Damat Ferit hükümetinin düşmesi', 'Kararlılık, siyasi ustalık'],
            ['Heyet-i Temsiliye’nin tanınmaması', 'Amasya Görüşmeleri ile İstanbul hükümetinin muhatap alması', 'Meşruiyete önem verme'],
            ['Milletin sesinin duyurulamaması', 'İrade-i Milliye, Hâkimiyet-i Milliye, Anadolu Ajansı', 'İletişimin gücünü görme'],
          ],
          caption: 'Çözümlerin çoğu savaşla değil; örgütlenme, iletişim ve millî irade ile ilgilidir. Hazırlık döneminin niteliği budur.',
        },
        {
          id: `${SLUG}-sorun-cozum-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Uyandır, açıkla, onaylat, tanıt, duyur”',
          body: 'Havza uyandırdı · Amasya açıkladı · Erzurum ve Sivas onaylattı · Amasya Görüşmeleri tanıttı · gazeteler ve ajans duyurdu.',
        },
      ],
    },
    {
      id: `${SLUG}-basin`,
      title: 'Basının rolü: Millî Mücadele’nin sesi',
      lead: 'Program Millî Mücadele Dönemi’nde basının rolüne kısaca değinilmesini ister. Bir mücadelenin kazanılması için milletin olup biteni bilmesi gerekir.',
      blocks: [
        {
          id: `${SLUG}-basin-anlatim`,
          type: 'prose',
          body:
            'Mustafa Kemal Anadolu’ya geçtiğinde İstanbul’daki gazetelerin bir kısmı İtilaf Devletleri’nin sansürü altındaydı, bir kısmı da Millî Mücadele’ye karşıydı. Anadolu halkı olup biteni çoğu zaman eksik ya da yanlış öğreniyordu. Mustafa Kemal bu yüzden basını mücadelenin bir parçası olarak gördü.\n\n' +
            '**İrade-i Milliye (14 Eylül 1919, Sivas):** Sivas Kongresi’nin hemen ardından çıkarıldı; kongre kararlarını ve Millî Mücadele’nin amaçlarını halka duyurdu. Adı bile mesajdı: “millî irade”.\n\n' +
            '**Hâkimiyet-i Milliye (10 Ocak 1920, Ankara):** Heyet-i Temsiliye Ankara’ya geldikten kısa süre sonra yayımlanmaya başladı. Adı “millî egemenlik” demekti; Mustafa Kemal gazetenin kuruluşunda doğrudan rol oynadı.\n\n' +
            '**Anadolu Ajansı (6 Nisan 1920):** Büyük Millet Meclisi’nin açılmasından on yedi gün önce kuruldu. Görevi Millî Mücadele’nin haberlerini yurdun her yerine ve dünyaya ulaştırmaktı.\n\n' +
            'Bunlara ek olarak Anadolu’nun pek çok şehrinde Millî Mücadele’yi destekleyen yerel gazeteler çıktı. İstanbul’da da Millî Mücadele’yi destekleyen gazeteciler vardı. Basın; halkı bilgilendirdi, moralini yükseltti, düşman propagandasına cevap verdi ve millî birliği güçlendirdi.',
        },
        {
          id: `${SLUG}-basin-tablo`,
          type: 'table',
          interactive: true,
          title: 'Millî Mücadele’nin sesi',
          columns: ['Yayın', 'Tarih ve yer', 'Adının anlamı', 'Görevi'],
          rows: [
            ['İrade-i Milliye', '14 Eylül 1919 · Sivas', 'Millî irade', 'Sivas Kongresi kararlarını ve Millî Mücadele’nin amacını duyurmak'],
            ['Hâkimiyet-i Milliye', '10 Ocak 1920 · Ankara', 'Millî egemenlik', 'Heyet-i Temsiliye’nin ve sonra Meclis’in görüşlerini halka ulaştırmak'],
            ['Anadolu Ajansı', '6 Nisan 1920 · Ankara', '—', 'Haberleri yurda ve dünyaya duyurmak'],
          ],
          caption: 'Yayınların adları, Millî Mücadele’nin dayandığı ilkeleri (millî irade, millî egemenlik) doğrudan ifade eder.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu dönemin belgeleri Nutuk’ta birebir yer alır. Bu bölümde Havza ve Amasya genelgelerinden ve Sivas Kongresi’ndeki manda tartışmasından kısa bölümler okuyacaksın.',
    intro:
      'Genelgeler Osmanlı Türkçesiyle yazılmıştır; önce eski sözcükleri çözmek gerekir. Ardından her belgeye aynı soruları sor: **Kime yazılmış? Ne istiyor? Hangi ilke ilk kez burada görülüyor?**\n\n' +
      'Aşağıdaki üç metin Nutuk’tan birebir alıntıdır; dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Havza Genelgesi’nden',
        kunye: 'Mustafa Kemal’in 28 Mayıs 1919’da valilere, mutasarrıflara ve kolordu komutanlarına gönderdiği genelge. Metin: Nutuk (1927), 2. bölüm; Vikikaynak.',
        nitelik: 'Birebir alıntı. Genelgenin bir bölümüdür.',
        metin:
          'Büyük ve heyecanlı mitingler akdiyle tezâhürât-ı milliyede bulunulması ve bunun tekmil mülhakata da teşmîli ve bütün düvel-i muazzama mümessilleriyle Bâbıâli’ye müessir telgraflar verilmesi ve ecnebî olan yerlerde ecnebilere de tesir yapılmakla beraber tezâhürât-ı milliyede âdâb ve sükûnetin fevkalâde mahfûziyeti ve Hıristiyan halka karşı bir taarruz ve nümâyiş ve husûmet gibi etvâr alınmaması elzemdir.',
        soru: 'Genelge halktan ne istiyor? Hristiyan halka karşı saldırı yapılmaması neden özellikle vurgulanmış olabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tezâhürât-ı milliye”: millî gösteriler. “Mülhakat”: bağlı yerler, ilçeler. “Düvel-i muazzama”: büyük devletler. “Bâbıâli”: İstanbul hükümeti. “Müessir”: etkili. “Sükûnet”: sakinlik. “Elzem”: çok gerekli.' },
          { title: 'İstenenleri ayır', body: 'Büyük mitingler yapılması; ilçelere de yayılması; büyük devletlerin temsilcilerine ve İstanbul hükümetine etkili telgraflar çekilmesi; gösterilerde düzen ve sakinliğin korunması; Hristiyan halka saldırı yapılmaması.' },
          { title: 'Uyarının sebebini düşün', body: 'İtilaf Devletleri işgalleri “Hristiyan halkın güvenliği” gerekçesiyle meşrulaştırmaya çalışıyordu. Bir saldırı, yeni işgallere bahane olabilirdi.' },
        ],
        cevap: 'Genelge; mitingler, protesto telgrafları ve barışçı gösterilerle milletin işgallere karşı sesini duyurmasını ister. Hristiyan halka saldırı yapılmaması vurgusu, İtilaf Devletleri’ne yeni işgaller için bahane verilmemesini amaçlar.',
        cikarim: 'Havza Genelgesi’nin yöntemi barışçıdır: miting, telgraf, düzen. Bu, Mustafa Kemal’in önce milletin sesini dünyaya duyurmayı hedeflediğini gösterir.',
      },
      {
        tur: 'birincil',
        baslik: 'Amasya Genelgesi’nin ilk maddeleri',
        kunye: 'Amasya Genelgesi, 21/22 Haziran 1919 gecesi Amasya’da yaveri Cevat Abbas Bey’e yazdırıldı. Metin: Nutuk (1927), 2. bölüm; Vikikaynak.',
        nitelik: 'Birebir alıntı. Genelgenin ilk üç maddesi ve beşinci maddesi.',
        metin:
          'Vatanın tamamiyeti, milletin istiklâli tehlikededir. Hükümet-i merkeziye deruhde ettiği mes’ûliyetin icâbâtını ifa edememektedir. Bu hal milletimizi mâ’dum tanıttırıyor. Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır. … Anadolu’nun bi’l-vücûh en emin mahalli olan Sivas’ta millî bir kongrenin serian in’ikadı takarrür etmiştir.',
        soru: 'Bu maddelerde Millî Mücadele’nin gerekçesi, amacı ve yöntemi nerede söyleniyor? Hangi madde millî egemenlik düşüncesinin ilk açık ifadesidir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tamamiyet”: bütünlük. “İstiklâl”: bağımsızlık. “Hükümet-i merkeziye”: İstanbul hükümeti. “Mâ’dum”: yok olmuş. “Bi’l-vücûh en emin”: her bakımdan en güvenli. “Serian in’ikadı takarrür etmiştir”: hızla toplanmasına karar verilmiştir.' },
          { title: 'Gerekçeyi bul', body: 'Birinci madde: Vatanın bütünlüğü ve milletin bağımsızlığı tehlikede.' },
          { title: 'Amacı ve yöntemi bul', body: 'Üçüncü madde: Bağımsızlığı yine milletin kararlılığı kurtaracak. Beşinci madde: Bunun için Sivas’ta bir kongre toplanacak.' },
          { title: 'İlkeyi adlandır', body: 'Kurtuluşun padişahtan ya da İstanbul hükümetinden değil, milletin kendi kararından beklenmesi millî egemenlik düşüncesinin ilk açık ifadesidir. İkinci madde ise İstanbul hükümetinin görevini yapamadığını açıkça söyler.' },
        ],
        cevap: 'Gerekçe birinci maddede (vatan ve millet tehlikede), amaç ve yöntem üçüncü ve beşinci maddelerde (milletin iradesiyle kurtuluş; Sivas’ta kongre) yer alır. “Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır” cümlesi millî egemenlik düşüncesinin ilk açık ifadesidir.',
        cikarim: 'Amasya Genelgesi’ni “gerekçe–amaç–yöntem” üçlüsüyle hatırla. Bu üçlü, genelgenin Millî Mücadele’nin programı olarak görülmesinin sebebidir.',
      },
      {
        tur: 'birincil',
        baslik: 'Sivas Kongresi’nde manda tartışması',
        kunye: 'Sivas Kongresi tutanaklarından Nutuk’a aktarılan konuşma; İsmail Fazıl Paşa’nın sözleri. Metin: Nutuk (1927), 2. bölüm; Vikikaynak.',
        nitelik: 'Birebir alıntı. Kongre üyelerinden birinin sözleridir.',
        metin:
          'Kaybedecek vaktimiz yoktur, esasen mesele de basitleşmiştir: Tam istiklâl mi yoksa manda mı kabul edeceğiz? Tespit edeceğimiz karar budur.',
        soru: 'Bu sözler, Sivas Kongresi’nde tartışılan temel meseleyi nasıl özetliyor? Bu tartışmanın kongrede yapılmış olması neyi gösterir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Kongre tutanağından aktarılan bir konuşma: birincil kaynak.' },
          { title: 'Meseleyi bul', body: 'İki seçenek vardı: tam bağımsızlık ya da manda.' },
          { title: 'Tartışmanın varlığını yorumla', body: 'Kongrede manda savunucuları da söz aldı. Bu, kararın tek bir kişi tarafından dayatılmadığını, temsilciler arasında tartışılarak verildiğini gösterir.' },
          { title: 'Sonucu bağla', body: 'Kongre sonunda mandayı reddetti; tam bağımsızlık Millî Mücadele’nin değişmez ilkesi oldu.' },
        ],
        cevap: 'Sözler kongrenin temel meselesini “tam bağımsızlık mı, manda mı?” sorusuna indirger. Tartışmanın kongrede açıkça yapılması, kararın temsilcilerin iradesiyle alındığını ve bu yüzden daha güçlü bir meşruiyet taşıdığını gösterir.',
        cikarim: 'Bir kararın tartışılarak alınmış olması, o kararın zayıflığı değil, gücüdür: Karşı görüşler dinlenmiş ve ikna yoluyla aşılmıştır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Hazırlık dönemi üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Millî Mücadele’nin hazırlık döneminde tek bir büyük savaş yapılmadı; ama bu dönem savaşların kazanılmasını mümkün kılan dönemdir. Mustafa Kemal bu on üç ayda askerî bir önderden çok bir örgütleyici ve bir devlet adamı gibi davrandı.',
        soru: 'Metindeki olgu ve yorumları ayır. Son cümledeki yargıyı hangi olaylarla destekleyebilirsin?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Hazırlık döneminde düzenli ordunun büyük bir savaş yapmaması bir olgudur.' },
          { title: 'Yorumları ayır', body: '“Savaşların kazanılmasını mümkün kılan dönem” ve “bir örgütleyici ve devlet adamı gibi davrandı” yargıları yazarın değerlendirmesidir.' },
          { title: 'Yargıyı destekle', body: 'Genelgeler yayımlaması, kongreleri yönetmesi, Heyet-i Temsiliye’yi kurması, İstanbul hükümetiyle protokol imzalaması ve basın kurması, onun askerî değil siyasi ve örgütsel adımlar attığını gösterir.' },
        ],
        cevap: 'Olgu: Hazırlık döneminde büyük bir savaş yapılmadı. Yorumlar: Bu dönemin savaşları mümkün kıldığı ve Mustafa Kemal’in bir örgütleyici ve devlet adamı gibi davrandığı. Genelgeler, kongreler, Heyet-i Temsiliye, Amasya protokolleri ve basın bu yargıyı destekler.',
        cikarim: 'Bir yargıyı desteklerken tek bir olaya değil, aynı yönü gösteren birden çok olaya dayan.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: '“İlk kez” sorusu',
      prompt:
        'Aşağıdaki gelişmeler ilk kez hangi genelge, kongre ya da görüşmede gerçekleşmiştir?\n\n- a) Manda ve himayenin reddedilmesi\n- b) Millî Mücadele’nin gerekçesinin, amacının ve yönteminin ilan edilmesi\n- c) Bütün millî cemiyetlerin birleştirilmesi\n- d) İstanbul hükümetinin Heyet-i Temsiliye’yi resmen muhatap alması',
      steps: [
        { title: 'a', body: 'Manda ve himaye ilk kez Erzurum Kongresi’nde reddedildi.' },
        { title: 'b', body: 'Gerekçe, amaç ve yöntem ilk kez Amasya Genelgesi’nde ilan edildi.' },
        { title: 'c', body: 'Cemiyetler Sivas Kongresi’nde birleştirildi.' },
        { title: 'd', body: 'İstanbul hükümeti Amasya Görüşmeleri’nde Heyet-i Temsiliye’yi muhatap aldı.' },
      ],
      answer: 'a) Erzurum Kongresi · b) Amasya Genelgesi · c) Sivas Kongresi · d) Amasya Görüşmeleri.',
      takeaway: '“İlk kez” sorularında kronolojiyi düşün: Bir karar sonraki bir toplantıda tekrarlanmış olabilir; ilk nerede alındığını bul.',
    },
    {
      title: 'Sorundan çözüme',
      prompt: 'İstanbul hükümeti Mustafa Kemal’i geri çağırıp görevinden aldığında Mustafa Kemal ne yaptı? Bu karar Millî Mücadele için neden önemliydi?',
      steps: [
        { title: 'Kararı bul', body: 'Askerlikten istifa etti ve mücadeleyi sivil olarak, milletin bir ferdi olarak sürdürdü.' },
        { title: 'Seçenekleri düşün', body: 'İstanbul’a dönebilirdi ya da emre uymayarak “asi bir subay” konumuna düşebilirdi.' },
        { title: 'Önemini açıkla', body: 'İstifa, onun İstanbul hükümetine bağlı bir memur değil, milletin iradesine dayanan bir önder olarak hareket etmesini sağladı; ona karşı “emre itaatsizlik” suçlamasını da boşa çıkardı.' },
      ],
      answer: 'Askerlikten istifa edip mücadeleyi sivil olarak sürdürdü. Bu karar hem kişisel bir fedakârlıktı hem de Millî Mücadele’nin İstanbul’dan bağımsız, milletin iradesine dayanan bir hareket olmasını güçlendirdi.',
      takeaway: 'Bir önderin kararını değerlendirirken önündeki diğer seçenekleri de düşün; kararın değeri, seçeneklerle karşılaştırınca anlaşılır.',
    },
    {
      title: 'İki kongreyi karşılaştır',
      prompt: '“Erzurum Kongresi bölgesel, Sivas Kongresi ulusaldır.” Bu yargı tam olarak doğru mudur? Açıkla.',
      steps: [
        { title: 'Toplanış şeklini düşün', body: 'Erzurum’a yalnız doğu illerinden temsilciler geldi; Sivas’a her yerden. Bu bakımdan yargı doğrudur.' },
        { title: 'Kararları düşün', body: 'Erzurum’da alınan “vatan bir bütündür”, “manda kabul edilemez” gibi kararlar bütün yurdu ilgilendiriyordu; yani kararlar ulusaldı.' },
        { title: 'Sonuca var', body: 'Yargı eksiktir: Erzurum toplanış bakımından bölgesel, kararlar bakımından ulusaldır.' },
      ],
      answer: 'Tam doğru değildir. Erzurum Kongresi toplanış bakımından bölgesel ama kararları bakımından ulusaldır; Sivas Kongresi ise her iki bakımdan da ulusaldır.',
      takeaway: 'Genellemeleri “hangi bakımdan?” sorusuyla sına; bir olay bir bakımdan bölgesel, başka bir bakımdan ulusal olabilir.',
    },
  ],
  questionClue: {
    concept: 'Soruda genelgeyi ve kongreyi nasıl tanırım?',
    statement: 'Soru bir karar ya da bir cümle verip hangi genelge ya da kongreye ait olduğunu sorabilir.',
    clues: [
      '“Miting”, “protesto telgrafı”, “Hristiyan halka saldırılmaması” → Havza Genelgesi',
      '“Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır”, “Sivas’ta kongre” → Amasya Genelgesi',
      '“Manda ve himaye ilk kez reddedildi”, “doğu illeri”, “Heyet-i Temsiliye kuruldu” → Erzurum Kongresi',
      '“Cemiyetler birleşti”, “Anadolu ve Rumeli”, “İrade-i Milliye” → Sivas Kongresi',
      '“Salih Paşa”, “protokol”, “İstanbul hükümetinin muhatap alması” → Amasya Görüşmeleri',
    ],
    reasoning: 'Önce ipucu sözcüğü bul, sonra “ilk kez” sorusu mu yoksa “hangi toplantı” sorusu mu sorulduğuna dikkat et. Bazı kararlar birden çok toplantıda tekrarlanmıştır.',
    boundary: 'Dikkat: Misakımillî ve Büyük Millet Meclisi’nin açılması hazırlık döneminin sonucudur ama ayrı bir kazanımdır (İTA.8.2.6).',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir genelge maddesi, bir kongre kararı, bir harita ya da bir sorun–çözüm eşleştirmesi verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Bir kararın hangi genelge ya da kongreye ait olduğunu bulma',
      '“İlk kez” sorularını çözme',
      'Erzurum ve Sivas kongrelerini karşılaştırma',
      'Sorun ile çözümü eşleştirme',
      'Basın organlarını görevleriyle eşleştirme',
      'Genelge metninden ilke çıkarma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Amasya Genelgesi’nde kongre için temsilcilerin gizlice yola çıkması neden istenmiş olabilir?',
      hint: 'İstanbul hükümetinin ve İtilaf Devletleri’nin tutumunu düşün.',
      answer: 'İstanbul hükümeti ve İtilaf Devletleri Millî Mücadele’yi engellemeye çalışıyordu; temsilcilerin yolda tutuklanması ya da engellenmesi mümkündü. Gizlilik, kongrenin toplanabilmesi için bir güvenlik önlemiydi.',
    },
    {
      prompt: 'Heyet-i Temsiliye’nin merkezinin Ankara’ya taşınmasının sebepleri neler olabilir?',
      answer: 'Ankara batı cephesine ve İstanbul’a Sivas’tan daha yakındı; demiryolu ve telgraf bağlantısı vardı; işgal altındaki bölgelerden yeterince uzak ve güvenliydi. Bu özellikler Ankara’yı Millî Mücadele’yi yönetmek için uygun bir merkez yaptı.',
    },
    {
      prompt: 'Millî Mücadele’nin gazetelerine “İrade-i Milliye” ve “Hâkimiyet-i Milliye” adlarının verilmesi neyi gösterir?',
      answer: 'Adlar, Millî Mücadele’nin dayandığı ilkeleri doğrudan ifade eder: millî irade ve millî egemenlik. Böylece gazeteler yalnız haber vermekle kalmadı, mücadelenin ilkelerini de halka benimsetmeye çalıştı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.5 bir “analiz eder” kazanımıdır: öğrenciden Mustafa Kemal’in hazırlık dönemindeki çalışmalarını parçalarına ayırmasını ve aralarındaki ilişkileri görmesini ister. Programın açıklaması genelgeleri, kongreleri, Amasya Görüşmeleri’ni, sorun–çözüm ilişkisini ve basının rolünü kapsar. Bu kazanıma dayanan bir soru bir karar metni verip hangi toplantıya ait olduğunu ya da hangi ilkeyi yansıttığını sorabilir.',
    measures: [
      'Genelge ve kongreleri kararlarından tanıma',
      '“İlk kez” gerçekleşen gelişmeleri belirleme',
      'Erzurum ve Sivas kongrelerini karşılaştırma',
      'Sorunları çözümlerle eşleştirme',
      'Basının rolünü açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Amasya Genelgesi',
    passage:
      'Amasya Genelgesi’nin bazı maddeleri şunlardır: “Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.” “İstanbul hükümeti üzerine aldığı sorumluluğun gereğini yerine getirememektedir.” “Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.” “Anadolu’nun her bakımdan en güvenli yeri olan Sivas’ta hemen millî bir kongre toplanacaktır.”',
    question: 'Bu maddelerle ilgili aşağıdakilerden hangisi söylenemez?',
    options: [
      { text: 'Millî Mücadele’nin gerekçesi açıklanmıştır.', explanation: 'Söylenebilir. “Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir” maddesi mücadelenin gerekçesidir.' },
      { text: 'Millî egemenlik düşüncesine yer verilmiştir.', explanation: 'Söylenebilir. Bağımsızlığın milletin kararıyla kurtarılacağının söylenmesi millî egemenlik düşüncesidir.' },
      { text: 'İstanbul hükümetine güvenilmediği belirtilmiştir.', explanation: 'Söylenebilir. Hükümetin sorumluluğunu yerine getiremediği açıkça ifade edilmiştir.' },
      { text: 'Manda ve himaye kesin olarak reddedilmiştir.', explanation: 'Söylenemez. Verilen maddelerde manda ya da himayeden söz edilmez. Manda ve himaye ilk kez Erzurum Kongresi’nde reddedilmiştir.' },
    ],
    answer_index: 3,
    stem_analysis: 'Soru kökü “söylenemez” diyor: metinde karşılığı olmayan seçeneği arıyorsun. Üç seçenek maddelerle doğrudan desteklenirken biri başka bir toplantının kararını genelgeye yüklüyor.',
    critical_point: 'Dördüncü seçenek bilgi olarak doğru bir kararı (manda ve himayenin reddi) yanlış belgeye yükler. “Söylenemez” sorularında doğru bilgi taşıyan ama metinde olmayan seçenek en sık tuzaktır; seçenekleri bilgine göre değil, metne göre değerlendir.',
    takeaway: '“Bu maddelere göre” diyen sorularda tarih bilgin değil, metin hakemdir.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Hazırlık dönemi',
    range: '19 Mayıs 1919–Nisan 1920',
    body:
      'Mustafa Kemal 19 Mayıs 1919’da Samsun’a çıktı. Havza Genelgesi ile halkı mitinglere ve protestolara çağırdı; Amasya Genelgesi ile vatanın ve milletin tehlikede olduğunu, İstanbul hükümetinin görevini yapamadığını ve milletin bağımsızlığını yine milletin kurtaracağını ilan etti. İstanbul onu görevinden alınca askerlikten istifa etti. Erzurum Kongresi vatanın bütünlüğünü ve manda ile himayenin reddini kararlaştırdı; Sivas Kongresi bütün cemiyetleri birleştirdi ve Heyet-i Temsiliye’yi bütün vatanın temsilcisi yaptı. Damat Ferit hükümeti düştü; Amasya Görüşmeleri’nde İstanbul hükümeti Heyet-i Temsiliye’yi muhatap aldı. Heyet-i Temsiliye Aralık 1919’da Ankara’ya geldi; İrade-i Milliye, Hâkimiyet-i Milliye ve Anadolu Ajansı milletin sesini duyurdu.',
    turning_points: [
      '19 Mayıs 1919 · Samsun',
      '28 Mayıs 1919 · Havza Genelgesi',
      '22 Haziran 1919 · Amasya Genelgesi',
      '23 Temmuz–7 Ağustos 1919 · Erzurum Kongresi',
      '4–11 Eylül 1919 · Sivas Kongresi',
      '20–22 Ekim 1919 · Amasya Görüşmeleri',
      '27 Aralık 1919 · Heyet-i Temsiliye Ankara’da',
    ],
  },
  summary: [
    '**Havza Genelgesi (28 Mayıs 1919):** mitingler, protesto telgrafları; Hristiyan halka saldırı yapılmaması. → Halk harekete geçti.',
    '**Amasya Genelgesi (22 Haziran 1919):** vatan ve millet tehlikede; İstanbul görevini yapamıyor; milleti yine millet kurtaracak; Sivas’ta kongre. → Gerekçe, amaç, yöntem; millî egemenliğin ilk açık ifadesi.',
    '**Erzurum Kongresi (23 Temmuz–7 Ağustos 1919):** toplanış bölgesel, kararlar ulusal; vatan bir bütündür; manda ve himaye ilk kez reddedildi; Heyet-i Temsiliye kuruldu.',
    '**Sivas Kongresi (4–11 Eylül 1919):** ulusal; cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti’nde birleşti; manda kesin reddedildi; İrade-i Milliye.',
    '**Amasya Görüşmeleri (20–22 Ekim 1919):** Salih Paşa ile protokoller; İstanbul hükümeti Heyet-i Temsiliye’yi muhatap aldı.',
    '**Sorun → çözüm:** görevden alınma → istifa; dağınıklık → kongreler; manda → red; engelleme → haberleşmeyi kesme; ses → basın.',
    '**Basın:** İrade-i Milliye (Sivas, 1919), Hâkimiyet-i Milliye (Ankara, 1920), Anadolu Ajansı (6 Nisan 1920).',
  ],
  quizzes: [
    {
      question: 'Manda ve himaye ilk kez hangi toplantıda reddedilmiştir?',
      options: ['Amasya Görüşmeleri', 'Erzurum Kongresi', 'Havza Genelgesi', 'Amasya Genelgesi'],
      answer_index: 1,
      explanation: 'Manda ve himaye ilk kez Erzurum Kongresi’nde reddedildi; Sivas Kongresi bu kararı kesinleştirdi. Havza ve Amasya genelgelerinde manda meselesine yer verilmez.',
    },
    {
      question: '“Milletin istiklâlini yine milletin azim ve kararı kurtaracaktır.” ifadesi hangi belgede yer alır?',
      options: ['Havza Genelgesi', 'Amasya Genelgesi', 'Erzurum Kongresi beyannamesi', 'Amasya Görüşmeleri protokolü'],
      answer_index: 1,
      explanation: 'Bu ifade 22 Haziran 1919 tarihli Amasya Genelgesi’nin üçüncü maddesidir ve millî egemenlik düşüncesinin ilk açık ifadesi kabul edilir.',
    },
    {
      question: 'Bütün millî cemiyetlerin “Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti” adı altında birleştirildiği toplantı hangisidir?',
      options: ['Erzurum Kongresi', 'Sivas Kongresi', 'Balıkesir Kongresi', 'Alaşehir Kongresi'],
      answer_index: 1,
      explanation: 'Cemiyetler Sivas Kongresi’nde birleştirildi. Erzurum’da cemiyetin adı “Şarkî Anadolu Müdafaa-i Hukuk Cemiyeti” idi; Balıkesir ve Alaşehir bölgesel Kuvâ-yı Millîye kongreleriydi.',
    },
    {
      question: 'Aşağıdakilerden hangisi Millî Mücadele Dönemi’nde basının rolüne örnek olarak gösterilebilir?',
      options: ['Kongre kararlarının İrade-i Milliye gazetesiyle halka duyurulması', 'Mondros Ateşkes Antlaşması’nın imzalanması', 'Heyet-i Temsiliye’nin Ankara’ya gelmesi', 'Mustafa Kemal’in askerlikten istifa etmesi'],
      answer_index: 0,
      explanation: 'İrade-i Milliye, Sivas Kongresi kararlarını ve Millî Mücadele’nin amaçlarını halka duyurmak için çıkarıldı; bu, basının rolünün doğrudan örneğidir. Diğer seçenekler basınla ilgili değildir.',
    },
  ],
  next: ['Misakımillî ve Büyük Millet Meclisi’nin Açılışı', 'Sevr Antlaşması ve Tepkiler'],
})

export default lesson
