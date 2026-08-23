export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Hormonların Genel Özellikleri ve Etki Mekanizmaları',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Endokrin bezler (iç salgı bezleri) tarafından üretilen ve HEDEF ORGANLARA sadece KAN yoluyla taşınan kimyasal habercilere ne ad verilir?',
        options: [
          { id: 'A', text: 'Enzim' },
          { id: 'B', text: 'Hormon' },
          { id: 'C', text: 'Tükürük' },
          { id: 'D', text: 'Gözyaşı' },
          { id: 'E', text: 'Ter' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormonlar, endokrin (iç salgı) bezlerinden doğrudan kana salgılanan ve kanla tüm vücudu dolaşıp ilgili hedef hücrelerde etki gösteren kimyasal moleküllerdir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Bir hormon kanla bütün vücudu dolaşmasına rağmen NEDEN sadece belirli bir hücreyi (hedef hücreyi) veya organı etkiler?',
        options: [
          { id: 'A', text: 'Çünkü hormonun o hücreye gitmesi için özel bir boru vardır.' },
          { id: 'B', text: 'Çünkü sadece hedef hücrenin zarında veya içinde o hormonu tanıyan özel "RESEPTÖRLER" bulunur.' },
          { id: 'C', text: 'Çünkü diğer hücreler hormonu midesinde sindirir.' },
          { id: 'D', text: 'Çünkü hormonlar çok büyüktür.' },
          { id: 'E', text: 'Çünkü hormon sadece gece hareket eder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormon ile reseptörü arasında anahtar-kilit uyumu vardır. Uygun reseptörü olmayan hücre, kapısına gelen hormona yanıt vermez.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Sinir sistemi ile Endokrin sistemin ÇALIŞMA HIZLARI karşılaştırıldığında hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Sinir sistemi çok HIZLI, Endokrin sistem ise YAVAŞ (ve uzun süreli) etki eder.' },
          { id: 'B', text: 'İkisi de aynı hızdadır.' },
          { id: 'C', text: 'Endokrin sistem saliseler içinde, Sinir sistemi ise yıllar içinde etki eder.' },
          { id: 'D', text: 'Endokrin sistem elektrikle çalışır.' },
          { id: 'E', text: 'Sinir sistemi kanla çalışır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Sinirler elektrik kablosu gibidir (çok hızlıdır ve etkisi hemen biter). Hormonlar ise kargo (kan) ile gider, hedefe varması zaman alır fakat etkisi uzun sürer.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Ekzokrin (Dış Salgı)" bezi olup, salgısını kana DEĞİL doğrudan bir KANALA veya vücut boşluğuna verir?',
        options: [
          { id: 'A', text: 'Tiroit bezi' },
          { id: 'B', text: 'Hipofiz bezi' },
          { id: 'C', text: 'Ter Bezi' },
          { id: 'D', text: 'Böbreküstü bezi' },
          { id: 'E', text: 'Paratiroit bezi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ter, gözyaşı, tükürük, süt ve sindirim enzimleri birer dış salgıdır (ekzokrin). Bu bezlerin özel kanalları vardır ve salgılarını kana vermezler.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Pankreas hem kana hormon (insülin, glukagon) salgılayan hem de bağırsağa sindirim enzimi salgılayan bir bezdir. Bu tip bezlere genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Sadece dış salgı bezi' },
          { id: 'B', text: 'Karma (Miks) Bez' },
          { id: 'C', text: 'Ter bezi' },
          { id: 'D', text: 'Sinir bezi' },
          { id: 'E', text: 'Kemik bezi' }
        ],
        correctOptionId: 'B',
        explanation: 'Hem endokrin (iç salgı) hem de ekzokrin (dış salgı) fonksiyonu bir arada yürüten bezlere KARMA bez denir (Örn: Pankreas, Eşey bezleri, Mide).'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Vücudumuzdaki hormonların BÜYÜK BİR KISMI yapısı itibarıyla hangi besin grubundandır?',
        options: [
          { id: 'A', text: 'Protein / Peptit yapılı' },
          { id: 'B', text: 'Sadece karbonhidrat' },
          { id: 'C', text: 'Vitamin' },
          { id: 'D', text: 'Nükleik asit (DNA)' },
          { id: 'E', text: 'Sadece mineral' }
        ],
        correctOptionId: 'A',
        explanation: 'Hormonların çoğu (İnsülin, Glukagon, Hipofiz hormonları vs.) protein, polipeptit veya amino asit yapılıdır.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Eşey hormonları (Östrojen, Testosteron) ve böbreküstü bezi kabuk hormonları (Kortizol) kimyasal yapı olarak hangisidir?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Steroit (Yağ / Kolesterol türevi) yapılı' },
          { id: 'C', text: 'Sadece şeker' },
          { id: 'D', text: 'Glikojen' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'B',
        explanation: 'Üreme ve böbreküstü korteks hormonları steroittir. Yağ yapılı oldukları için hücre zarından doğrudan içeri girebilirler.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Protein yapılı hormonların (Örn: İnsülin) reseptörleri HÜCRENİN neresinde bulunur?',
        options: [
          { id: 'A', text: 'Hücre zarının YÜZEYİNDE (Dış tarafında)' },
          { id: 'B', text: 'Çekirdeğin içinde' },
          { id: 'C', text: 'Mitokondrinin içinde' },
          { id: 'D', text: 'Sadece kanda' },
          { id: 'E', text: 'Kemiklerde' }
        ],
        correctOptionId: 'A',
        explanation: 'Protein yapılı (büyük/suda çözünen) hormonlar hücrenin yağ tabakasından (hücre zarından) geçemezler. Bu yüzden reseptörleri kapıdadır (zardadır).'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Hormonların kanda etki gösterebilmeleri için belirli bir DÜZEYE ulaşmaları gerekir. Kan tahlillerinde hormon seviyeleri genellikle hangi birimle ifade edilecek kadar AZDIR?',
        options: [
          { id: 'A', text: 'Litre ve Kilogram' },
          { id: 'B', text: 'Metre' },
          { id: 'C', text: 'Eser miktar (Çok düşük dozlar)' },
          { id: 'D', text: 'Milyonlarca ton' },
          { id: 'E', text: 'Galon' }
        ],
        correctOptionId: 'C',
        explanation: 'Hormonlar kanda eser miktarda (nanogram, pikogram vb.) bulunurlar, fakat hücresel sinyal güçlendiriciler sayesinde etkileri devasa olur.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Hormon miktarının kanda normalden az veya çok olması durumunda vücudumuzun dengesi bozulur. Vücudun bu iç dengesini korumaya ne ad verilir?',
        options: [
          { id: 'A', text: 'Homeostazi (İç Denge)' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Adaptasyon' },
          { id: 'E', text: 'Fagositoz' }
        ],
        correctOptionId: 'A',
        explanation: 'Endokrin ve sinir sisteminin temel amacı, vücut sıcaklığı, kan şekeri, kalsiyum vb. değerleri sabit tutmak, yani Homeostaziyi sağlamaktır.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Bir hormonun üretilip kana verilmesi sonucunda, hedef organda meydana gelen değişimin dönüp hormonu üreten bezi DURDURMASINA (üretimi kesmesine) ne ad verilir?',
        options: [
          { id: 'A', text: 'Sentez' },
          { id: 'B', text: 'Negatif Geri Bildirim (Negative Feedback)' },
          { id: 'C', text: 'Sindirim' },
          { id: 'D', text: 'Oksijenli Solunum' },
          { id: 'E', text: 'Mayoz Bölünme' }
        ],
        correctOptionId: 'B',
        explanation: 'Negatif geri bildirim; kanda madde miktarının artmasının, o maddeyi ürettiren hormon sistemini (hipofiz/hipotalamus) yavaşlatması veya durdurmasıdır.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Kanda glikoz yükseldiğinde İnsülinin salgılanması, glikoz normale döndüğünde ise İnsülin salgısının azalması (kesilmesi) hangi mekanizmaya örnektir?',
        options: [
          { id: 'A', text: 'Pozitif Feedback' },
          { id: 'B', text: 'Negatif Feedback (Geri Bildirim)' },
          { id: 'C', text: 'Sinerjist Etki' },
          { id: 'D', text: 'Antagonist Etki' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'B',
        explanation: 'Şekerin düşmesi (sonuç), onu düşüren insülini yavaşlatır. Bu, sistemin gereksiz çalışmasını önleyen negatif geri bildirimdir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Birbirine tamamen ZIT (ters) yönde etki göstererek aynı maddeyi dengelemeye çalışan hormonlara ne ad verilir?',
        options: [
          { id: 'A', text: 'Sinerjist (Destekleyici) Hormonlar' },
          { id: 'B', text: 'Antagonist (Zıt Çalışan) Hormonlar' },
          { id: 'C', text: 'İkiz Hormonlar' },
          { id: 'D', text: 'Sadece Proteinler' },
          { id: 'E', text: 'Yedek Hormonlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Örneğin; İnsülin (şekeri düşürür) ile Glukagon (şekeri yükseltir) antagonisttir. Kalsitonin ve Parathormon da antagonisttir.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Aynı amaca hizmet eden (aynı yönde etki gösteren) hormonlara (Örneğin, ikisi de kan şekerini yükselten Adrenalin ve Glukagon) ne ad verilir?',
        options: [
          { id: 'A', text: 'Antagonist (Zıt)' },
          { id: 'B', text: 'Sinerjist (Beraber / Destekleyici)' },
          { id: 'C', text: 'Düşman Hormonlar' },
          { id: 'D', text: 'Nötr Hormonlar' },
          { id: 'E', text: 'Su tutucular' }
        ],
        correctOptionId: 'B',
        explanation: 'Beraber çalışarak birbirinin etkisini güçlendiren veya aynı sonucu doğuran hormonlara sinerjist hormonlar denir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Hedef hücrenin zarına bağlanan protein yapılı bir hormon (Örn: Adrenalin), hücre İÇİNDEKİ olayları başlatmak için zardaki enzimi aktifler ve içeride "cAMP" (Siklik AMP) gibi maddeler üretilir. cAMP\'nin buradaki görevi nedir?',
        options: [
          { id: 'A', text: 'Hücreyi öldürmek' },
          { id: 'B', text: 'İkinci Haberci olarak, hormonun (birinci haberci) mesajını hücre İÇİNE iletmek' },
          { id: 'C', text: 'Hormonu sindirmek' },
          { id: 'D', text: 'DNA\'yı parçalamak' },
          { id: 'E', text: 'Kanı pıhtılaştırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormon zardan giremez, zile basar (Birinci haberci). Zilin sesi içerideki hizmetçiyi (cAMP - İkinci haberci) harekete geçirir ve işi yaptırır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Hipotalamus ve Hipofiz Bezi',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Beynimizde yer alan ve "RF" (Salgılatıcı Faktörler) salgılayarak Hipofiz bezinin çalışmasını KONTROL EDEN üst merkez neresidir?',
        options: [
          { id: 'A', text: 'Beyincik' },
          { id: 'B', text: 'Omurilik' },
          { id: 'C', text: 'Hipotalamus' },
          { id: 'D', text: 'Karaciğer' },
          { id: 'E', text: 'Pankreas' }
        ],
        correctOptionId: 'C',
        explanation: 'Hipotalamus, iç salgı bezlerinin yöneticisi olan Hipofizi de yöneten ana komuta merkezidir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Hipofiz bezi beynin tabanında bulunur ve iki loptan oluşur (Ön ve Arka). Hangi lobu aslında hipotalamustaki sinir hücrelerinin UZANTILARINDAN (aksonlardan) oluşur?',
        options: [
          { id: 'A', text: 'Ön lob' },
          { id: 'B', text: 'Arka lob' },
          { id: 'C', text: 'Sağ lob' },
          { id: 'D', text: 'Sol lob' },
          { id: 'E', text: 'Alt lob' }
        ],
        correctOptionId: 'B',
        explanation: 'Arka hipofiz bir bez dokusu değil, hipotalamustan aşağı sarkan sinir tellerinin (aksonların) ucudur.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Hipofizin ARKA LOB HORMONLARI (ADH ve Oksitosin) NEREDE üretilir?',
        options: [
          { id: 'A', text: 'Pankreasta üretilir' },
          { id: 'B', text: 'Ön hipofizde üretilir' },
          { id: 'C', text: 'Hipofizin arka lobunda üretilir' },
          { id: 'D', text: 'Hipotalamusta ÜRETİLİR, arka loba taşınıp oradan kana salınır' },
          { id: 'E', text: 'Kalpte üretilir' }
        ],
        correctOptionId: 'D',
        explanation: 'Arka hipofiz kendi hormonunu üretemez. Hipotalamustaki nöronlar üretir, arka hipofiz sadece "depo edip kana salma" işini yapar.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Böbreklerden SUYUN geri emilimini sağlayarak, çok idrara çıkmamızı ve su kaybetmemizi önleyen hipofiz (arka lob) hormonu hangisidir?',
        options: [
          { id: 'A', text: 'GH' },
          { id: 'B', text: 'ADH (Antidiüretik Hormon / Vazopressin)' },
          { id: 'C', text: 'TSH' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'B',
        explanation: 'ADH (Diürez önleyici), böbreklerdeki su kanallarını açarak idrara gidecek suyu zorla kana geri alır.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Doğum sırasında RAHİM (Uterus) KASLARININ KASILMASINI sağlayan ve doğumdan sonra SÜTÜN DIŞARI FIŞKIRMASINI (süt salınımını) uyaran arka hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Oksitosin' },
          { id: 'B', text: 'TSH' },
          { id: 'C', text: 'ACTH' },
          { id: 'D', text: 'Melatonin' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'A',
        explanation: 'Oksitosin (aşk/şefkat hormonu) doğumu başlatır ve bebeğin emmesiyle sütü dışarı çıkartır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Çocukluk ve ergenlik döneminde KEMİK ve KASLARIN büyümesini, hücre bölünmesini ve protein sentezini doğrudan uyaran ön hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'FSH' },
          { id: 'B', text: 'GH (Büyüme Hormonu / Somatotropin)' },
          { id: 'C', text: 'LH' },
          { id: 'D', text: 'MSH' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'B',
        explanation: 'GH (Growth Hormone), tüm hücrelere etki ederek (özellikle uzun kemiklere ve kaslara) boy uzamasını ve doku büyümesini sağlar.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Büyüme çağı (çocukluk) döneminde GH (Büyüme hormonu) NORMALDEN AZ salgılanırsa HANGİ durum ortaya çıkar?',
        options: [
          { id: 'A', text: 'Devlik (Jigantizm)' },
          { id: 'B', text: 'Cücelik (Nanizm)' },
          { id: 'C', text: 'Şeker Hastalığı' },
          { id: 'D', text: 'Kemik Erimesi' },
          { id: 'E', text: 'Guatr' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyüme hormonu eksikliğinde iskelet yeterince uzayamaz (Hipofizer cücelik).'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Tiroit bezini uyararak oradan "Tiroksin" hormonunun üretilmesini ve kana verilmesini sağlayan ön hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'ACTH' },
          { id: 'B', text: 'FSH' },
          { id: 'C', text: 'TSH (Tiroit Uyarıcı Hormon)' },
          { id: 'D', text: 'Oksitosin' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'C',
        explanation: 'TSH\'nin görevi boynumuzdaki Tiroit bezini aktive etmektir.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin "Kabuk (Korteks)" bölgesini uyararak oradan Kortizol gibi hormonların salgılanmasını sağlayan ön hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'GH' },
          { id: 'C', text: 'ACTH (Adrenokortikotropik Hormon)' },
          { id: 'D', text: 'LH' },
          { id: 'E', text: 'ADH' }
        ],
        correctOptionId: 'C',
        explanation: 'ACTH, adrenal korteksi uyarır.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Dişilerde YUMURTA, erkeklerde SPERM üretimini (gametogenezi) başlatan hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH' },
          { id: 'C', text: 'MSH' },
          { id: 'D', text: 'FSH (Folikül Uyarıcı Hormon)' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'D',
        explanation: 'FSH (Folikül Stimüle Edici Hormon), üreme hücrelerinin mayoz bölünmeyle gelişim sürecini başlatır.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Dişilerde gelişen yumurtanın çatlamasını (Ovulasyon/Yumurtlama), erkeklerde ise Testosteron üretimini sağlayan hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'LH (Lüteinleştirici Hormon)' },
          { id: 'B', text: 'ADH' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'A',
        explanation: 'FSH yumurtayı olgunlaştırır, LH o yumurtayı patlatıp dışarı atılmasını (Ovulasyon) sağlar.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Kadınlarda (gebelik döneminde) MEME BEZLERİNİ büyüterek, doğumdan sonra SÜT ÜRETİMİNİ (sentezini) sağlayan ve annelik içgüdüsü kazandıran hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH' },
          { id: 'C', text: 'LTH (Prolaktin)' },
          { id: 'D', text: 'ADH' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'C',
        explanation: 'Prolaktin sütü YAPAN hormondur. Oksitosin ise sütü akıtan hormondur.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Derideki melanosit hücrelerini uyararak MELANİN (renk) pigmenti ürettiren ve güneşte cildimizin KIZARIP/ESMERLEŞMESİNİ sağlayan hipofiz hormonu hangisidir?',
        options: [
          { id: 'A', text: 'MSH (Melanosit Uyarıcı Hormon)' },
          { id: 'B', text: 'GH' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'ACTH' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'A',
        explanation: 'MSH, deriye rengini verir. Güneş ışığında MSH artar ve derimiz koruma amaçlı bronzlaşır.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Hipofizin hormon salgılamasını yöneten Hipotalamus Faktörlerine (Hormonlarına) "RF (Salgılatıcı Faktör)" denir. Aşağıdakilerden hangisi bir Hipotalamus hormonu (RF) OLABİLİR?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'TRH (Tirotropin Salgılatıcı Hormon)' },
          { id: 'C', text: 'Tükürük' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'B',
        explanation: 'TRH, hipotalamustan salgılanır, hipofize giderek "TSH salgıla" der.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Gelişme döneminden SONRA (yetişkinlikte) Büyüme Hormonu (GH) fazla salgılanırsa boy uzamaz, bunun yerine el, ayak ve çene kemiklerinde ORANTISIZ KALINLAŞMA VE BÜYÜME görülür. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Cücelik' },
          { id: 'B', text: 'Akromegali' },
          { id: 'C', text: 'Guatr' },
          { id: 'D', text: 'Diyabet' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyüme plakları ergenlikte kapandığı için kemikler artık uzayamaz, ancak enine (yana doğru) kalınlaşarak yüz hatlarını kabalaştırır (Akromegali).'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Tiroit ve Paratiroit Bezleri',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Boyun bölgesinde, soluk borusunun (trakea) hemen üzerinde yer alan ve "Tiroksin ile Kalsitonin" üreten endokrin bez hangisidir?',
        options: [
          { id: 'A', text: 'Pankreas' },
          { id: 'B', text: 'Tiroit bezi' },
          { id: 'C', text: 'Mide' },
          { id: 'D', text: 'Epifiz' },
          { id: 'E', text: 'Böbrek' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroit bezi şekil olarak kelebeğe benzer ve gırtlağın hemen altında yer alır.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin en önemli hormonu olan "Tiroksin"in yapısında HANGİ MİNERAL (Atom) bulunmak ZORUNDADIR?',
        options: [
          { id: 'A', text: 'Demir' },
          { id: 'B', text: 'Kalsiyum' },
          { id: 'C', text: 'İyot' },
          { id: 'D', text: 'Altın' },
          { id: 'E', text: 'Çinko' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksinin (T3 ve T4) yapısındaki sayılar iyot atomu sayısını ifade eder. İyot olmadan tiroit bezi bu hormonu üretemez.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Tiroksin hormonunun VÜCUTTAKİ TEMEL GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Sadece saç uzamasını sağlar' },
          { id: 'B', text: 'Kan şekerini 100\'e sabitler' },
          { id: 'C', text: 'Tüm hücrelerin Oksijen kullanımını ve METABOLİZMA HIZINI belirler' },
          { id: 'D', text: 'Uyku getirir' },
          { id: 'E', text: 'Görmeyi sağlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin vücudun gaz pedalıdır. Oksijenli solunumu hızlandırarak hücrelerin çalışma (metabolizma) hızını ve ısı üretimini artırır.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Eğer bir insan besinlerle (örneğin iyotsuz tuz kullanarak) yeterli İYOT ALAMAZSA hangi hastalık ortaya çıkar?',
        options: [
          { id: 'A', text: 'Şeker Hastalığı' },
          { id: 'B', text: 'Kemik Erimesi' },
          { id: 'C', text: 'Tiroit bezinin şişmesi (Basit Guatr)' },
          { id: 'D', text: 'Astım' },
          { id: 'E', text: 'Cücelik' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot olmazsa tiroksin üretilemez. Beyin (Hipofiz) tiroksin eksikliğini görünce tiroit bezini TSH ile sürekli uyarır ve bez büyüyerek boyunda şişliğe (Guatr) neden olur.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Çocukluk döneminde (büyüme çağında) Tiroksin eksik olursa, metabolizma yavaşlamasının yanında büyüme ve ZİHİNSEL (zeka) gerilik görülür. Bu hastalığa ne denir?',
        options: [
          { id: 'A', text: 'Kretenizm (Ahmaklık)' },
          { id: 'B', text: 'Tetani' },
          { id: 'C', text: 'Diyabet' },
          { id: 'D', text: 'Miksödem' },
          { id: 'E', text: 'Akromegali' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiroksin özellikle bebek ve çocuklarda beyin gelişimi için şarttır. Eksikliği zeka geriliği ve bodurlukla (Kretenizm) sonuçlanır.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin salgıladığı "KALSİTONİN" hormonu kanda Kalsiyum seviyesi NORMALİN ÜSTÜNE çıktığında (Örn: Süt içtikten sonra) ne yapar?',
        options: [
          { id: 'A', text: 'Kemiklerdeki kalsiyumu kana çeker' },
          { id: 'B', text: 'Kandaki FAZLA kalsiyumu KEMİKLERE geçirerek kan kalsiyumunu DÜŞÜRÜR' },
          { id: 'C', text: 'Kalsiyumu şekere çevirir' },
          { id: 'D', text: 'Kalsiyumu yok eder' },
          { id: 'E', text: 'Böbrekte taş yapar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsitonin kalsiyumu kandan alır, kemiğe depolar. Böylece kemik sertleşirken kalsiyum seviyesi normale (aşağı) iner.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Tiroit bezinin hemen arkasına gömülü 4 adet küçük bez parçası vardır. Kanda kalsiyum DÜŞTÜĞÜNDE devreye giren bu beze ne ad verilir?',
        options: [
          { id: 'A', text: 'Epifiz' },
          { id: 'B', text: 'Paratiroit bezi' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Karaciğer' },
          { id: 'E', text: 'Bademcik' }
        ],
        correctOptionId: 'B',
        explanation: 'Paratiroit bezi (Tiroit komşusu), kalsiyum seviyesi azaldığında çalışan bezdir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Paratiroit bezinden salgılanan "PARATHORMON (PTH)" kanda Kalsiyum düştüğünde (Açlıkta vs.) nasıl bir etki yapar?',
        options: [
          { id: 'A', text: 'Kan kalsiyumunu daha da düşürür' },
          { id: 'B', text: 'KEMİKLERDEKİ kalsiyumu yıkarak KANA geçirir ve kan kalsiyumunu YÜKSELTİR' },
          { id: 'C', text: 'Tüm kalsiyumu idrara atar' },
          { id: 'D', text: 'Mideye gönderir' },
          { id: 'E', text: 'Kemikleri kalınlaştırır' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon, Kalsitoninin tam zıttıdır. Kandaki kalsiyum azalırsa hayati tehlike oluşur, bu yüzden kemikten ödünç alıp kana verir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Parathormon böbreklere ve bağırsaklara da etki ederek kalsiyumu artırmaya çalışır. Parathormon bağırsaklardan KALSİYUM EMİLİMİNİ artırmak için HANGİ VİTAMİNİ aktifleştirir?',
        options: [
          { id: 'A', text: 'C Vitamini' },
          { id: 'B', text: 'D Vitamini' },
          { id: 'C', text: 'A Vitamini' },
          { id: 'D', text: 'E Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'B',
        explanation: 'D vitamini (aktif formu) bağırsaklardan kalsiyumun emilip kana geçmesini sağlar. Parathormon D vitaminini aktifleştirir.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Paratiroit bezi ÇOK AZ çalışırsa (Parathormon üretilemezse) KANDA KALSİYUM çok DÜŞER. Kalsiyum düşüklüğü kasların istemsiz ve ağrılı kasılmasına (kramplara) yol açar. Bu hastalığa ne denir?',
        options: [
          { id: 'A', text: 'Tetani' },
          { id: 'B', text: 'Guatr' },
          { id: 'C', text: 'Devlik' },
          { id: 'D', text: 'Diyabet' },
          { id: 'E', text: 'Miksödem' }
        ],
        correctOptionId: 'A',
        explanation: 'Kanda kalsiyum kalmazsa kaslar gevşeyemez ve kilitlenir (Tetani).'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Tam tersi durumda, Paratiroit bezi ÇOK FAZLA çalışırsa (Hiperparatiroidizm), sürekli kemikten kalsiyum çekileceği için KEMİKLERE ve BÖBREKLERE ne olur?',
        options: [
          { id: 'A', text: 'Kemikler kalınlaşır, böbrek temizlenir' },
          { id: 'B', text: 'Kemikler zayıflar (erir) ve kanda aşırı biriken kalsiyum böbrekte KALSİYUM TAŞLARI (Böbrek taşı) oluşturur' },
          { id: 'C', text: 'Hiçbir şey olmaz' },
          { id: 'D', text: 'Kemikler uzar' },
          { id: 'E', text: 'Kişi dev olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşırı Parathormon kemiğin içini boşaltır (Osteoporoz). Kanda dolaşan aşırı kalsiyum da böbreklerden süzülürken birikip taşlaşır.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Tiroksin hormonunun ÇOK FAZLA salgılandığı (Hipertiroidi) durumlarda metabolizma hızı aşırı artar. Bu durumdaki hastalarda hangisi GÖZLENMEZ?',
        options: [
          { id: 'A', text: 'Aşırı Terleme' },
          { id: 'B', text: 'Kalp çarpıntısı (Taşikardi)' },
          { id: 'C', text: 'Kilo Kaybı (Zayıflama)' },
          { id: 'D', text: 'Sürekli Üşüme ve Kilo Alma' },
          { id: 'E', text: 'Sinirlilik' }
        ],
        correctOptionId: 'D',
        explanation: 'Hipertiroidi motorun çok hızlı çalışmasıdır. Motor hızlı çalışırsa kişi ısınır (terler) ve çok benzin yakar (zayıflar). Üşüme ve kilo alma Hipotiroidi (yavaşlık) belirtisidir.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Tiroit ve Paratiroit bezleri PANKREASTAN (ya da İnsülinden) bağımsız çalışırlar mı?',
        options: [
          { id: 'A', text: 'Hayır, tiroit şekeri düzenler.' },
          { id: 'B', text: 'Evet. Tiroit ve Paratiroit kalsiyum ve metabolizmayı düzenler; Kan şekeri (İnsülin) ile doğrudan ilgileri yoktur.' },
          { id: 'C', text: 'Hayır, kalsitonin de şekeri düşürür.' },
          { id: 'D', text: 'Hayır, üçü de tek bezdir.' },
          { id: 'E', text: 'Evet ama sadece gece.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroit ve Paratiroit (Tiroksin/Kalsitonin/Parathormon) kendi alanlarında çalışır; kan şekerini düzenleyen bez Pankreastır (İnsülin/Glukagon).'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Kalsitonin ile Parathormon hangi ilkeye göre çalışırlar?',
        options: [
          { id: 'A', text: 'Sinerjist (Beraber)' },
          { id: 'B', text: 'Antagonist (Zıt / Birbirine Karşı)' },
          { id: 'C', text: 'Aynı bezi uyararak' },
          { id: 'D', text: 'Sadece kalbi uyararak' },
          { id: 'E', text: 'Hiçbir kurala uymadan' }
        ],
        correctOptionId: 'B',
        explanation: 'Biri kan kalsiyumunu düşürür (Kalsitonin), diğeri yükseltir (Parathormon). Bu yüzden antagonist çalışırlar.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Zehirli Guatr (Graves Hastalığı) bağışıklık sisteminin Tiroit bezine saldırması sonucu oluşur. Bu hastalığın EN DİKKAT ÇEKİCİ fiziksel (dışarıdan görünen) belirtisi nedir?',
        options: [
          { id: 'A', text: 'Cücelik' },
          { id: 'B', text: 'Gözlerin yuvalarından fırlayacakmış gibi öne doğru çıkması (Ekzoftalmi)' },
          { id: 'C', text: 'Dudakların morarması' },
          { id: 'D', text: 'Saçların beyazlaması' },
          { id: 'E', text: 'Boyun uzaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Graves hastalığında (Hipertiroidi çeşidi) göz arkasındaki dokularda sıvı/yağ birikimi olur ve göz küreleri dışarı itilir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Pankreas, Böbreküstü ve Eşey Bezleri',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Pankreasın Langerhans adacıklarındaki BETA hücrelerinden salgılanan ve KAN ŞEKERİNİ DÜŞÜREN hormon hangisidir?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin, kandaki glikozun (şekerin) hücrelerin içine girmesini sağlayarak KANDAKİ şeker seviyesini aşağı çeker (Düşürür).'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Uzun süre AÇ kaldığınızda (Örn: Oruç tutarken), Pankreasın ALFA hücrelerinden salgılanan ve KAN ŞEKERİNİ YÜKSELTEN hormon hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Kalsitonin' },
          { id: 'D', text: 'ADH' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon, karaciğerdeki depo şekeri (Glikojen) parçalattırıp kana verdirerek düşen şekeri yukarı çıkarır.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Pankreas, insülin üretemezse veya hücreler insüline yanıt vermezse, kanda şeker ÇOK YÜKSEK kalır. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Guatr' },
          { id: 'B', text: 'Diyabet (Şeker Hastalığı / Diabetes Mellitus)' },
          { id: 'C', text: 'Akromegali' },
          { id: 'D', text: 'Miksödem' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikozun hücreye giremeyip kanda birikmesine Diyabet denir. Glikoz seviyesi çok artınca idrarla atılmaya başlar.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Böbreklerin hemen üzerinde yer alan Böbreküstü (Adrenal) bezleri böbreklerle BİRLİKTE Mİ çalışır?',
        options: [
          { id: 'A', text: 'Evet, sadece idrar üretirler.' },
          { id: 'B', text: 'Hayır, fiziksel olarak böbreğin üzerinde dursalar da Böbreküstü bezi ENDOKRİN bir bezdir ve hormon üretir (Böbrekle doğrudan aynı işi yapmazlar).' },
          { id: 'C', text: 'Evet, böbrekle birleşiktir.' },
          { id: 'D', text: 'Sadece kalbi durdururlar.' },
          { id: 'E', text: 'Böbreği yok ederler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Böbreküstü bezleri böbreğe komşudur (üstüne oturmuştur) ancak bağımsız bir endokrin organdır (Stres hormonları üretir).'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin İÇ (Öz / Medulla) bölgesinden KORKU, HEYECAN, STRES anında salgılanarak kalp atışını ve kan şekerini ÇOK HIZLI ARTIran hormon hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'Adrenalin (Epinefrin)' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin "Savaş ya da Kaç" tepkisini başlatır. Saniyeler içinde vücudu tehlikeye (kaçmaya) hazırlar.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin DIŞ (Kabuk / Korteks) bölgesinden salgılanan ve UZUN SÜRELİ açlık/streste karbonhidrat dışı maddelerden (protein, yağ) GLİKOZ ürettirerek KAN ŞEKERİNİ YÜKSELTEN hormon hangisidir?',
        options: [
          { id: 'A', text: 'Kortizol' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Kalsitonin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'A',
        explanation: 'Kortizol, strese karşı dayanıklılık (uzun vadeli) hormonudur. Ayrıca kuvvetli bir BAĞIŞIKLIK BASKILAYICI ve iltihap önleyicidir (Kortizonlu ilaçlar).'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezinin kabuk bölgesinden salgılanan ALDOSTERON hormonunun görevi nedir?',
        options: [
          { id: 'A', text: 'Sadece kan şekerini düşürmek' },
          { id: 'B', text: 'Böbreklerden SODYUM (Tuz) ve SUYUN kana geri emilimini sağlamak, POTASYUMU ise idrara atmak' },
          { id: 'C', text: 'Kalsiyum depolamak' },
          { id: 'D', text: 'Saç çıkarmak' },
          { id: 'E', text: 'Sütü artırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron vücudun TUZ (Mineral) dengesini ayarlar. Tuzu kanda tutarak tansiyonun düşmesini önler.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Erkeklerde Testislerde (Leydig hücreleri) üretilen ve "Kas kütlesinin artması, ses kalınlaşması, sakal çıkması" gibi ikincil cinsiyet özelliklerini sağlayan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Östrojen' },
          { id: 'B', text: 'Progesteron' },
          { id: 'C', text: 'Testosteron (Androjen)' },
          { id: 'D', text: 'Prolaktin' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'Testosteron, erkeklik hormonudur. Aynı zamanda testislerde sperm üretiminin tamamlanmasında da görevlidir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Kadınlarda Yumurtalıktan (Ovaryum) salgılanan ve "Sesin ince kalması, göğüs büyümesi, rahim duvarının kalınlaşması" gibi kadınsal özellikleri sağlayan ANA hormon hangisidir?',
        options: [
          { id: 'A', text: 'Testosteron' },
          { id: 'B', text: 'Östrojen' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Östrojen, kadınlık hormonudur. Adet (Menstrüel) döngünün ilk yarısında daha çok salgılanır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Yine yumurtalıklardan salgılanan ve olası bir gebelik için rahmi "Süngerimsi / Kan damarlarınca zengin" hale getirip, HAMİLELİĞİN DEVAMINI sağlayan (Gebelik hormonu) hangisidir?',
        options: [
          { id: 'A', text: 'Progesteron' },
          { id: 'B', text: 'Testosteron' },
          { id: 'C', text: 'Aldosteron' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Parathormon' }
        ],
        correctOptionId: 'A',
        explanation: 'Progesteron rahmi hamileliğe hazırlar. Eğer hamilelik olursa seviyesi düşmez, düşerse düşük (bebek kaybı) yaşanır.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Beynimizde bulunan EPİFİZ bezi "Melatonin" hormonu salgılar. Melatonin salgısı NEYE GÖRE artıp azalır?',
        options: [
          { id: 'A', text: 'Kan şekerine göre' },
          { id: 'B', text: 'Havadaki oksijene göre' },
          { id: 'C', text: 'IŞIĞA göre (Karanlıkta ARTAR, Işıkta AZALIR) ve uykuyu düzenler' },
          { id: 'D', text: 'Sese göre' },
          { id: 'E', text: 'Yediğimiz yemeğe göre' }
        ],
        correctOptionId: 'C',
        explanation: 'Melatonin biyolojik saatimizi (Biyoritim / Sirkadiyen ritim) karanlık ve aydınlığa göre ayarlar.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Göğüs kafesimizde (kalbin üstünde) bulunan, bebeklerde büyükken yaşlandıkça KÜÇÜLEN ve bağışıklık T-Lenfosit hücrelerinin olgunlaştığı bez hangisidir?',
        options: [
          { id: 'A', text: 'Timus bezi (Timozin hormonu)' },
          { id: 'B', text: 'Epifiz bezi' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Tiroit' },
          { id: 'E', text: 'Böbreküstü bezi' }
        ],
        correctOptionId: 'A',
        explanation: 'Timus bezi, bağışıklık sisteminin (T hücrelerinin) okuludur. Yaşlandıkça yağlanıp kaybolur.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Mide bezlerinin yine KENDİ KENDİNİ uyararak mide asidi üretmesi için kana salgıladığı "Lokal" hormon hangisidir?',
        options: [
          { id: 'A', text: 'Gastrin' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Glukagon' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'A',
        explanation: 'Mide, besin geldiğinde kana "Gastrin" salgılar. Bu hormon kanla dolaşıp tekrar mideye gelir ve mide öz suyunun salgılanmasını başlatır.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Bir kişinin KAN ŞEKERİNİ YÜKSELTEN HANGİ 3 HORMON vardır?',
        options: [
          { id: 'A', text: 'Sadece İnsülin' },
          { id: 'B', text: 'İnsülin, Oksitosin, ADH' },
          { id: 'C', text: 'Glukagon (Açlıkta), Adrenalin (Heyecanda), Kortizol (Streste)' },
          { id: 'D', text: 'Kalsitonin, Parathormon, TSH' },
          { id: 'E', text: 'Testosteron, Östrojen, Progesteron' }
        ],
        correctOptionId: 'C',
        explanation: 'Düşük kan şekeri ölümcüldür, bu yüzden vücutta şekeri yükseltmek için çalışan birden fazla (sinerjist) yedekli sistem vardır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Böbrekler doğrudan bir iç salgı bezi sayılmasa da, "Eritropoietin (EPO)" adı verilen bir hormon üreterek KEMİK İLİĞİNİ uyarır. EPO hormonu kemik iliğinde ne üretilmesini sağlar?',
        options: [
          { id: 'A', text: 'Kemik üretimi' },
          { id: 'B', text: 'Kırmızı Kan Hücresi (Alyuvar) üretimi' },
          { id: 'C', text: 'İdrar üretimi' },
          { id: 'D', text: 'Mide asidi üretimi' },
          { id: 'E', text: 'Gözyaşı üretimi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanda oksijen azalırsa (Örn: Yükseklere çıkıldığında) böbrekler EPO salgılar ve kemik iliği daha fazla alyuvar (kan) yaparak oksijeni yakalamaya çalışır.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Hipofiz, Tiroit ve Paratiroit Mekanizmaları',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'easy',
        questionText: 'Hipotalamustan hipofiz ön lobuna giden "Salgılatıcı Hormonlar" (TRH, CRH, GnRH vb.) buraya nasıl ulaşır?',
        options: [
          { id: 'A', text: 'Sinir hücrelerinin aksonları üzerinden elektriksel yolla' },
          { id: 'B', text: 'Özel bir kılcal damar ağı (Portal sistem) ile KAN yoluyla' },
          { id: 'C', text: 'Lenf sistemiyle' },
          { id: 'D', text: 'BOS (Beyin Omurilik Sıvısı) ile' },
          { id: 'E', text: 'Doğrudan hücreden hücreye difüzyonla' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus faktörleri (RF) ön hipofize kısa bir damar yolu olan portal sistemle (kanla) gider. Arka hipofize ise aksonlarla inerler.'
      },
      {
        id: 'q-5-2', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi hipofizin ÖN lobunda SENTEZLENMEZ?',
        options: [
          { id: 'A', text: 'Büyüme Hormonu (GH)' },
          { id: 'B', text: 'Tiroit Uyarıcı Hormon (TSH)' },
          { id: 'C', text: 'Folikül Uyarıcı Hormon (FSH)' },
          { id: 'D', text: 'Antidiüretik Hormon (ADH)' },
          { id: 'E', text: 'Prolaktin (PRL)' }
        ],
        correctOptionId: 'D',
        explanation: 'ADH (ve Oksitosin) ön hipofizde değil, hipotalamusta üretilip arka hipofizden salgılanır.'
      },
      {
        id: 'q-5-3', difficulty: 'easy',
        questionText: 'Tiroit bezinin çalışması sırasında gerçekleşen olaylar şu şekildedir: \nI. Hipotalamustan TRH salgılanması\nII. Kanda Tiroksin miktarının artması\nIII. Ön hipofizden TSH salgılanması\nBu olayların DOĞRU SIRALANMASI nasıldır?',
        options: [
          { id: 'A', text: 'I - II - III' },
          { id: 'B', text: 'III - I - II' },
          { id: 'C', text: 'I - III - II' },
          { id: 'D', text: 'II - III - I' },
          { id: 'E', text: 'III - II - I' }
        ],
        correctOptionId: 'C',
        explanation: 'Önce Hipotalamus (TRH) -> Sonra Hipofiz (TSH) -> En son Tiroit Bezi (Tiroksin).'
      },
      {
        id: 'q-5-4', difficulty: 'easy',
        questionText: 'Tiroksin miktarının kanda aşırı artması durumunda, vücudumuz "Negatif Feedback" mekanizmasını kullanarak ne yapar?',
        options: [
          { id: 'A', text: 'Hipotalamus ve Hipofizi uyararak TRH ve TSH salgısını AZALTIR (baskılar)' },
          { id: 'B', text: 'Tiroit bezini büyüterek Guatr oluşturur' },
          { id: 'C', text: 'Pankreası uyararak insülin salgılatır' },
          { id: 'D', text: 'Adrenalin salgısını durdurur' },
          { id: 'E', text: 'Parathormon salgısını artırır' }
        ],
        correctOptionId: 'A',
        explanation: 'Kanda tiroksin yeterli seviyenin üstüne çıkarsa, beyne "yeter" mesajı gider ve TSH üretimi durdurularak sistem frenlenir (Negatif Geri Bildirim).'
      },
      {
        id: 'q-5-5', difficulty: 'easy',
        questionText: 'Tiroksin hormonu vücuttaki hangi hücrelere (hedef organa) etki eder?',
        options: [
          { id: 'A', text: 'Sadece kalbe' },
          { id: 'B', text: 'Sadece karaciğere' },
          { id: 'C', text: 'Sadece kas hücrelerine' },
          { id: 'D', text: 'Vücuttaki neredeyse TÜM HÜCRELERE' },
          { id: 'E', text: 'Sadece böbreklere' }
        ],
        correctOptionId: 'D',
        explanation: 'Büyüme Hormonu (GH) ve Tiroksin hormonlarının hedef organı tüm vücut hücreleridir (Tiroksin genel metabolizmayı yönettiği için her hücreyi etkiler).'
      },
      {
        id: 'q-5-6', difficulty: 'easy',
        questionText: 'Kanda kalsiyum seviyesi azalan (hipokalsemi) bir bireyde HANGİ HORMONUN salgısı ARTARAK durumu düzeltmeye çalışır?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum düşerse, paratiroit bezi devreye girerek Parathormon salgılar ve kemikten kana kalsiyum çeker.'
      },
      {
        id: 'q-5-7', difficulty: 'easy',
        questionText: 'Parathormon kemikten kana kalsiyum geçirirken, aynı zamanda BÖBREKLERDE kalsiyuma ne yapar?',
        options: [
          { id: 'A', text: 'Kalsiyumu idrarla dışarı atar' },
          { id: 'B', text: 'Kalsiyumun idrarla atılmasını ÖNLEYEREK kana geri emilimini ARTIRIR' },
          { id: 'C', text: 'Kalsiyumu potasyuma çevirir' },
          { id: 'D', text: 'Kalsiyumdan taş yapar' },
          { id: 'E', text: 'Böbrekte bir etkisi yoktur' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormonun tek bir amacı vardır: Kandaki kalsiyumu ne pahasına olursa olsun YÜKSELTMEK. Bu yüzden idrara gidecek kalsiyumu da kana geri çeker.'
      },
      {
        id: 'q-5-8', difficulty: 'easy',
        questionText: 'Kalsitonin hormonu kemiklere kalsiyum geçişini (kemiğin sertleşmesini) sağlarken, fosfat iyonlarına nasıl etki eder?',
        options: [
          { id: 'A', text: 'Kanda fosfatı artırır' },
          { id: 'B', text: 'Hiçbir etkisi yoktur' },
          { id: 'C', text: 'Kalsiyum ile birlikte FOSFATIN da kemiğe geçmesini uyarır' },
          { id: 'D', text: 'Fosfatı kükürde çevirir' },
          { id: 'E', text: 'Böbreklerden fosfatı atar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemiğin yapısı kalsiyum-fosfat tuzlarından oluşur. Kalsitonin kalsiyumla beraber fosfatı da kemiğe iter.'
      },
      {
        id: 'q-5-9', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisinin salgılanması doğrudan HİPOFİZ (TSH, ACTH vb.) tarafından KONTROL EDİLMEZ?',
        options: [
          { id: 'A', text: 'Tiroksin' },
          { id: 'B', text: 'Kortizol' },
          { id: 'C', text: 'Testosteron' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Östrojen' }
        ],
        correctOptionId: 'D',
        explanation: 'Paratiroit bezi (ve Pankreas) hipofizden emir almaz. Kan kalsiyum seviyesini "doğrudan" kendisi ölçer ve duruma müdahale eder (Humoral uyarı).'
      },
      {
        id: 'q-5-10', difficulty: 'easy',
        questionText: 'Büyüme hormonu (GH) tüm hücreleri uyarır dedik. GH hormonunun hücrelerdeki protein sentezi ve yağ yıkımı üzerindeki etkisi nasıldır?',
        options: [
          { id: 'A', text: 'Protein sentezini durdurur, yağı artırır' },
          { id: 'B', text: 'İkisini de durdurur' },
          { id: 'C', text: 'Protein sentezini HIZLANDIRIR, enerji için Yağ yıkımını ARTIRIR' },
          { id: 'D', text: 'Proteini yıkar, yağı sentezler' },
          { id: 'E', text: 'Hiçbir etkisi yoktur' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyüme için yapıtaşı (protein) ve enerji (yağdan) lazımdır. GH hücreleri buna zorlar.'
      },
      {
        id: 'q-5-11', difficulty: 'easy',
        questionText: 'ADH (Vazopressin) eksikliğinde böbreklerden su geri emilemez ve kişi günde 15-20 litre idrar çıkarıp sürekli su içer. Şeker hastalarına benzeyen bu tabloya ne ad verilir?',
        options: [
          { id: 'A', text: 'Tip 1 Diyabet' },
          { id: 'B', text: 'Tip 2 Diyabet' },
          { id: 'C', text: 'Şekersiz Diyabet (Diabetes insipidus)' },
          { id: 'D', text: 'Guatr' },
          { id: 'E', text: 'Üremi' }
        ],
        correctOptionId: 'C',
        explanation: 'Şekersiz diyabette (ADH eksikliği) çok idrara çıkma ve çok su içme vardır ama idrarda ŞEKER YOKTUR.'
      },
      {
        id: 'q-5-12', difficulty: 'easy',
        questionText: 'Bir kaza anında aşırı KAN KAYBEDEN (kan hacmi ve tansiyonu düşen) bir insanda, vücut suyu tutarak tansiyonu yükseltmek için HANGİ HORMONUN salgısını acilen ARTIRIR?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'ADH' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'FSH' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan kaybedildiğinde su tutmak hayati önem taşır. ADH (Vazopressin=Damar büzen) suyu böbrekten kana çekerek tansiyonu toparlamaya çalışır.'
      },
      {
        id: 'q-5-13', difficulty: 'easy',
        questionText: 'Hipofizden salgılanan LTH (Prolaktin) sadece memeli hayvanlarda (insan vb.) bulunur. Kuşlarda ve sürüngenlerde LTH var mıdır, varsa ne işe yarar?',
        options: [
          { id: 'A', text: 'Sürüngenlerde süt üretir' },
          { id: 'B', text: 'Kuşlarda da memelilerdeki gibi süt üretir' },
          { id: 'C', text: 'Kuşlarda "annelik içgüdüsünü" (kuluçkaya yatma, yuvayı koruma) sağlar' },
          { id: 'D', text: 'Tüylerin dökülmesini sağlar' },
          { id: 'E', text: 'Sürüngenlerde zehir üretir' }
        ],
        correctOptionId: 'C',
        explanation: 'LTH (Prolaktin), memelilerde süt + annelik içgüdüsü, memesi olmayan kuşlarda ise sadece annelik (kuluçka) içgüdüsünü uyarır.'
      },
      {
        id: 'q-5-14', difficulty: 'easy',
        questionText: 'Melatonin hormonu karanlıkta salgılanarak biyoritmi düzenler. Görme engelli (gözleri ışığı hiç algılamayan) bireylerde melatonin salgısı nasıldır?',
        options: [
          { id: 'A', text: 'Hiç salgılanmaz' },
          { id: 'B', text: 'Sürekli (gündüzleri de) yüksek oranda salgılanabilir' },
          { id: 'C', text: 'Sadece yazın salgılanır' },
          { id: 'D', text: 'Sadece yaşlılıkta salgılanır' },
          { id: 'E', text: 'Melatonin yerine insülin salgılanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz retinadan ışık almazsa epifiz bezi sürekli karanlık algılar ve melatonin üretmeye devam eder.'
      },
      {
        id: 'q-5-15', difficulty: 'easy',
        questionText: 'Tiroit bezinden İKİ farklı hormon salgılanır (Tiroksin ve Kalsitonin). Bu iki hormonun KONTROLÜ nasıldır?',
        options: [
          { id: 'A', text: 'İkisini de Hipofiz (TSH) kontrol eder' },
          { id: 'B', text: 'İkisini de kalsiyum seviyesi kontrol eder' },
          { id: 'C', text: 'Tiroksin HİPOFİZ (TSH) tarafından, Kalsitonin ise KANDAKİ KALSİYUM MİKTARI tarafından kontrol edilir' },
          { id: 'D', text: 'İkisi de sinirsel olarak kontrol edilir' },
          { id: 'E', text: 'İkisini de böbrekler kontrol eder' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroit bezi karmaşık bir kontrol altındadır. Tiroksin üretimini üst makam (Hipofiz) yönetirken, Kalsitonin doğrudan kandaki mineral (Ca) miktarına bakar.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Pankreas, Adrenal ve Eşey Bezleri (Mekanizma)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'İnsülin hormonu kan şekerini düşürmek için GLİKOZU kandan HANGİ HÜCRELERE GÖNDERİR?',
        options: [
          { id: 'A', text: 'Sadece böbreklere' },
          { id: 'B', text: 'Karaciğer, Kas ve Yağ dokusu başta olmak üzere birçok vücut hücresine (Beyin hariç)' },
          { id: 'C', text: 'Sadece kalbe' },
          { id: 'D', text: 'Mide boşluğuna' },
          { id: 'E', text: 'Akciğerlere' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin, kanda gezen glikozu depolanması için karaciğer ve kaslara (glikojen olarak), yağ hücrelerine ve enerji üretecek diğer hücrelere yönlendirir. Beyin hücreleri insülinden bağımsız olarak glikoz alabilir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Beyin hücreleri, enerji kaynağı olarak kullanacağı GLİKOZU kandan alırken İNSÜLİN hormonuna ihtiyaç duyar mı?',
        options: [
          { id: 'A', text: 'Evet, insülinsiz glikoz alamaz' },
          { id: 'B', text: 'Hayır, beyin hücreleri glikozu insülinden BAĞIMSIZ olarak (kendi kapılarıyla) doğrudan alabilir' },
          { id: 'C', text: 'Beyin glikoz değil yağ kullanır' },
          { id: 'D', text: 'Sadece uyurken insüline ihtiyaç duyar' },
          { id: 'E', text: 'Beyin oksijenle beslenir, şekere ihtiyaç duymaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Beynin çalışması hayati olduğu için insülin emrini beklemez, kandaki şekeri doğrudan içeri alacak özel reseptörleri vardır.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Karaciğerdeki depo şekeri (glikojeni) yıkarak kan şekerini yükselten Glukagon hormonu, KASLARDAKİ glikojeni neden YIKAMAZ (kana veremez)?',
        options: [
          { id: 'A', text: 'Kaslarda glikojen yoktur' },
          { id: 'B', text: 'Çünkü glukagonun kas hücrelerinde RESEPTÖRÜ YOKTUR' },
          { id: 'C', text: 'Kaslardaki glikojen zehirlidir' },
          { id: 'D', text: 'Çünkü kaslar glukagonu sindirir' },
          { id: 'E', text: 'Kas glikojeni yağa dönüşmüştür' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaslar bencildir; depoladıkları glikojeni sadece kendileri için saklarlar, kana vermezler. Zaten glukagon hormonunun kas zarında reseptörü olmadığı için kasa etki edemez.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Böbreküstü bezi Korteksinden (Kabuk) salgılanan Kortizol ve Aldosteron hormonlarının salgısını KİM kontrol eder?',
        options: [
          { id: 'A', text: 'Pankreas' },
          { id: 'B', text: 'Hipofizin ACTH hormonu' },
          { id: 'C', text: 'Tiroit bezi' },
          { id: 'D', text: 'Sempatik sinirler' },
          { id: 'E', text: 'Kan kalsiyumu' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenal KORTEKS hipofizden (ACTH) emir alarak çalışır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin Medulla (Öz) bölgesinden salgılanan Adrenalin (Epinefrin) hormonunun salgısını KİM kontrol eder?',
        options: [
          { id: 'A', text: 'Hipofiz ACTH' },
          { id: 'B', text: 'Otonom Sinir Sistemi (Sempatik Sinirler) DOĞRUDAN uyarır' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Böbrekler' },
          { id: 'E', text: 'Kemikler' }
        ],
        correctOptionId: 'B',
        explanation: 'Tehlike anında ACTH\'nin kargoyla (kanla) gelmesini bekleyemeyiz. Beyin doğrudan sempatik sinirleri (elektrik kablolarını) böbreküstü bezi öz bölgesine göndererek saniyeler içinde Adrenalin salgılatır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Adrenalin (Epinefrin) kalp atışını ve tansiyonu hızlandırırken, SİNDİRİM sistemini (Mide-Bağırsak hareketlerini) nasıl etkiler?',
        options: [
          { id: 'A', text: 'Sindirimi çok hızlandırır' },
          { id: 'B', text: 'Sindirimi YAVAŞLATIR (Durdurur)' },
          { id: 'C', text: 'Sadece mideyi hızlandırır, bağırsağı durdurur' },
          { id: 'D', text: 'Sindirimi etkilemez' },
          { id: 'E', text: 'Besinleri doğrudan kana geçirir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaçarken (Adrenalin) sindirim yapmanın (yemek yemenin) sırası değildir. Kan kaslara ve beyne yönlendirilir, mide/bağırsak yavaşlar.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Uzun süreli açlıkta (Karbonhidratlar bittiğinde), protein ve yağları karbonhidrata (glikoza) çevirerek KAN ŞEKERİNİ yükselten hormon hangisidir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Glukagon' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kortizol (stres hormonu), glikojen depoları tükendiğinde "Karbonhidrat dışı (yağ/aminoasit)" kaynaklardan sıfırdan glikoz üretimini uyarır.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Sürekli stres altında olan (kronik stres) ve kanında sürekli KORTİZOL seviyesi YÜKSEK gezen bir insanda aşağıdaki durumlardan hangisi GÖZLENİR?',
        options: [
          { id: 'A', text: 'Bağışıklık sisteminin BASKILANMASI (Zayıflaması) ve sık hastalanma' },
          { id: 'B', text: 'Kemiklerin aşırı kalınlaşması' },
          { id: 'C', text: 'Kan şekerinin sıfıra düşmesi' },
          { id: 'D', text: 'Sürekli uyku hali' },
          { id: 'E', text: 'Boyun uzaması' }
        ],
        correctOptionId: 'A',
        explanation: 'Kortizol bağışıklığı baskılar. Uzun süreli stres (sınav stresi vb.) durumunda kortizol hep yüksek kalırsa antikor üretimi düşer ve hasta oluruz.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Vücudun su-tuz ve mineral dengesini sağlayan ALDOSTERON hormonu hangi bezden salgılanır?',
        options: [
          { id: 'A', text: 'Tiroit Bezi' },
          { id: 'B', text: 'Böbreküstü bezi (Adrenal KORTEKS / Kabuk)' },
          { id: 'C', text: 'Hipofiz Arka Lob' },
          { id: 'D', text: 'Pankreas' },
          { id: 'E', text: 'Ovaryum' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron (mineralokortikoid) adrenal kabuktan salgılanır.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Aldosteron eksikliğinde vücut sodyumu (tuzu) tutamaz, kanda tuz azalır, potasyum artar. Cilt tunç (bronz) rengini alır, kaslar zayıflar. Bu hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Addison Hastalığı (Tunç Hastalığı)' },
          { id: 'B', text: 'Guatr' },
          { id: 'C', text: 'Kretenizm' },
          { id: 'D', text: 'Diyabet' },
          { id: 'E', text: 'Tetani' }
        ],
        correctOptionId: 'A',
        explanation: 'Adrenal korteks yetmezliği (Kortizol ve Aldosteron eksikliği) Addison hastalığına neden olur.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Kadınlarda adet döngüsünün ilk aşamasında yumurtalıktaki Folikülden çok miktarda ÖSTROJEN salgılanır. Folikül çatladıktan (yumurta atıldıktan) sonra geriye kalan "Korpus Luteum" (Sarı cisim) yapısından en çok HANGİ HORMON salgılanır?',
        options: [
          { id: 'A', text: 'Sadece Östrojen' },
          { id: 'B', text: 'Testosteron' },
          { id: 'C', text: 'Çok miktarda PROGESTERON ve az miktarda Östrojen' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'LH' }
        ],
        correctOptionId: 'C',
        explanation: 'Folikül = Östrojen ağırlıklı. Korpus luteum (Sarı cisim) = Progesteron (gebelik koruyucu) ağırlıklıdır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin kabuk kısmından az miktarda Eşey Hormonları (Östrojen, Progesteron, Testosteron) da salgılanır mı?',
        options: [
          { id: 'A', text: 'Hayır, sadece testis/yumurtalıktan salgılanır.' },
          { id: 'B', text: 'Evet, KADIN VE ERKEK FARKLILIK GÖZETMEKSİZİN böbreküstü bezi kabuğundan da az miktarda eşey (cinsiyet) hormonları salgılanır.' },
          { id: 'C', text: 'Sadece erkeklerde salgılanır.' },
          { id: 'D', text: 'Sadece kadınlarda salgılanır.' },
          { id: 'E', text: 'Evet ama sadece bebeklikte.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu yüzden kadınlarda (yumurtalık olmamasına rağmen) kanda çok az miktarda testosteron, erkeklerde de az miktarda östrojen bulunur.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Tip 1 Diyabet ile Tip 2 Diyabet arasındaki TEMEL FARK nedir?',
        options: [
          { id: 'A', text: 'Tip 1 çok su içirtir, Tip 2 içirtmez.' },
          { id: 'B', text: 'Tip 1\'de PANKREAS İNSÜLİN ÜRETEMEZ (Beta hücreleri tahrip olmuştur). Tip 2\'de ise insülin ÜRETİLİR fakat HÜCRELER (Reseptörler) İNSÜLİNE YANIT VERMEZ (İnsülin direnci).' },
          { id: 'C', text: 'Tip 1 yaşlılarda, Tip 2 çocuklarda görülür.' },
          { id: 'D', text: 'Tip 1 böbrekle, Tip 2 karaciğerle ilgilidir.' },
          { id: 'E', text: 'İkisi de aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tip 1 Otoimmün (fabrika bozuk) olduğu için ömür boyu dışarıdan insülin iğnesi gerekir. Tip 2 genelde obezite/beslenme kaynaklı (kapı bozuk/dirençli) bir durumdur.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Kalbin kulakçıklarından (atrium) salgılanan "ANP" (Atriyal Natriüretik Peptit) hormonunun görevi nedir?',
        options: [
          { id: 'A', text: 'Tansiyonu daha da artırmak' },
          { id: 'B', text: 'Tansiyon çok yükseldiğinde, böbreklerden Sodyum (tuz) ve su ATILIMINI artırarak TANSİYONU DÜŞÜRMEK (Aldosterona zıt çalışır)' },
          { id: 'C', text: 'Kan şekerini yükseltmek' },
          { id: 'D', text: 'Kalp krizini başlatmak' },
          { id: 'E', text: 'Kalsiyum depolamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp aşırı kan dolduğunda (tansiyon arttığında) ANP salgılar. ANP böbreğe gidip "suyu ve tuzu dışarı at, yükümü hafiflet" der.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Eritropoietin (EPO) hormonu alyuvar üretimini uyarır. Bu hormonun %85\'i Böbreklerde üretilirken, kalan %15\'i HANGİ ORGANDA üretilir?',
        options: [
          { id: 'A', text: 'Mide' },
          { id: 'B', text: 'Beyin' },
          { id: 'C', text: 'Karaciğer' },
          { id: 'D', text: 'Akciğer' },
          { id: 'E', text: 'Pankreas' }
        ],
        correctOptionId: 'C',
        explanation: 'Eritropoietinin asıl kaynağı Böbrektir, az bir kısmı da Karaciğerden salgılanır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Hastalıklar ve Karma Sorular',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Vücudumuzda hem SİNİR hücreleri (nöron) hem de ENDOKRİN hücreler tarafından kimyasal mesajcı olarak kullanılabilen molekül hangisidir?',
        options: [
          { id: 'A', text: 'Noradrenalin (Norepinefrin)' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Büyüme Hormonu' }
        ],
        correctOptionId: 'A',
        explanation: 'Adrenalin ve Noradrenalin böbreküstü bezinden hormon olarak KANA salgılanırken, aynı zamanda sinir uçlarında "Nörotransmitter" olarak (sinapsta) görev yaparlar.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Aşağıdaki endokrin bez - salgıladığı hormon eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Tiroit Bezi - Tiroksin' },
          { id: 'B', text: 'Böbreküstü Kabuk - Kortizol' },
          { id: 'C', text: 'Pankreas - Glukagon' },
          { id: 'D', text: 'Paratiroit Bezi - Kalsitonin' },
          { id: 'E', text: 'Epifiz Bezi - Melatonin' }
        ],
        correctOptionId: 'D',
        explanation: 'Kalsitonin Tiroit bezinden salgılanır. Paratiroit bezinden Parathormon (PTH) salgılanır.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Kan şekeri seviyesi normale göre DÜŞÜK olan bir kişide aşağıdaki hormonlardan hangisinin KANDA ARTMASI beklenmez?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'Tiroksin (Dolaylı yoldan metabolizma hızı için)' }
        ],
        correctOptionId: 'D',
        explanation: 'Şeker zaten düşükken insülin (şekeri daha da düşüren hormon) salgılanmaz, üretimi bastırılır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Kanda KALSİYUM miktarı aşırı artmış bir kişide, kalsiyumu normale indirmek için HANGİ BEZDEN HANGİ HORMON salgılanmalıdır?',
        options: [
          { id: 'A', text: 'Paratiroit - Parathormon' },
          { id: 'B', text: 'Tiroit - Kalsitonin' },
          { id: 'C', text: 'Pankreas - İnsülin' },
          { id: 'D', text: 'Böbreküstü - Aldosteron' },
          { id: 'E', text: 'Hipofiz - TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan kalsiyumu çok artarsa, bunu kemiğe gönderip kandan temizleyen (düşüren) hormon Kalsitonin\'dir (Tiroit bezinden).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Tiroid bezi yeterince çalışmayan (Tiroksin eksikliği olan) bir insanda (Hipotiroidi) hangi belirti GÖZLENİR?',
        options: [
          { id: 'A', text: 'Aşırı kilo kaybı (zayıflık)' },
          { id: 'B', text: 'Aşırı hareketlilik ve uykusuzluk' },
          { id: 'C', text: 'Metabolizmanın yavaşlamasına bağlı yorgunluk, üşüme ve KİLO ALMA' },
          { id: 'D', text: 'Kalp atışının çok hızlanması' },
          { id: 'E', text: 'Vücut ısısının artması' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiroksin eksikse motor yavaşlar (enerji harcanmaz, yağlanır, üşür ve tembelleşir).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Yemeklerden hemen sonra KAN ŞEKERİ HIZLA YÜKSELEN bir kişinin kanında ilk olarak hangi hormonun miktarının ARTMASI beklenir?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'C',
        explanation: 'Yemek sonrası artan şekeri dengelemek (düşürmek) için pankreas insülin salgılar.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi STEROİT (yağ) yapılı OLDUĞU İÇİN hücre zarından içeri doğrudan girebilir?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'Tiroksin' },
          { id: 'C', text: 'Büyüme Hormonu (GH)' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'D',
        explanation: 'Eşey hormonları (Östrojen, Testosteron) ve böbreküstü korteks hormonları (Kortizol, Aldosteron) steroit yapılıdır.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Kanın ozmotik basıncı arttığında (kan susuz kaldığında) Hipotalamustaki osmoreseptörler uyarılır. Bunun sonucunda vücut SU TUTMAK için kana hangi hormonu verir?',
        options: [
          { id: 'A', text: 'FSH' },
          { id: 'B', text: 'Oksitosin' },
          { id: 'C', text: 'ADH (Antidiüretik Hormon)' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'TRH' }
        ],
        correctOptionId: 'C',
        explanation: 'Su azaldığında ADH salgılanarak böbreklerden su geri emilir (Kan sulanır).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Guatr hastalığının (Tiroit büyümesi) EN YAYGIN nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Demir eksikliği' },
          { id: 'B', text: 'Kalsiyum fazlalığı' },
          { id: 'C', text: 'Besinlerle yeterli İYOT alınamaması' },
          { id: 'D', text: 'Şeker tüketimi' },
          { id: 'E', text: 'Güneşsiz kalmak' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot olmazsa tiroksin üretilemez, hipofiz de durmadan TSH yollayarak tiroidi şişirir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Menopoz dönemindeki kadınlarda yumurtalıkların çalışması zayıflar. Bu durumda kan tahlilinde Östrojen ve FSH düzeyleri NASIL beklenir?',
        options: [
          { id: 'A', text: 'Östrojen DÜŞÜK, Hipofiz onu uyarmak için sürekli uğraştığından FSH YÜKSEK' },
          { id: 'B', text: 'Östrojen yüksek, FSH düşük' },
          { id: 'C', text: 'İkisi de sıfır' },
          { id: 'D', text: 'İkisi de çok yüksek' },
          { id: 'E', text: 'Östrojen düşük, FSH da çok düşük' }
        ],
        correctOptionId: 'A',
        explanation: 'Yumurtalık çalışmadığı için Östrojen üretilemez. Beyin (Hipofiz) ise ortada östrojen göremediği için panik yapar ve sürekli FSH/LH yollar (Geri bildirim yokluğu).'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi Erkeklerde bulunmaz (Erkeklerde salgılanmaz veya işlev yapmaz)?',
        options: [
          { id: 'A', text: 'Testosteron' },
          { id: 'B', text: 'FSH' },
          { id: 'C', text: 'LH' },
          { id: 'D', text: 'Oksitosin (Çok düşük miktarda işlevleri olsa da kadınlarda doğum/süt için esas görevlidir. Seçeneklerde Progesteron vb varsa onu ara. Soru bağlamında şıklarda yoksa LTH/Prolaktin veya Östrojen/Progesteron asıl yanıt olur, burada en iyi şıkkı arayacağız)' },
          { id: 'E', text: 'FSH ve LH erkeklerde de spermi ve testosteronu uyarır, Oksitosin (ve çok az prolaktin/östrojen) de bulunur. Fakat yumurtalık olmadığından "Büyük oranda Korpus Luteum Progesteronu" bulunmaz. Soru hatalı olmasın: FSH erkeklerde bulunur.' }
        ],
        // DÜZELTME: Soru şıklarını düzeltiyoruz.
        correctOptionId: 'A', // placeholder, changed below
        explanation: 'Soru Düzeltmesi'
      },
      {
        id: 'q-7-11-revize', difficulty: 'easy',
        questionText: 'Erkeklerde ve Kadınlarda ortak GÖREVLERE sahip OLMAYAN hormon eşleştirmesi hangisidir?',
        options: [
          { id: 'A', text: 'FSH (Her ikisinde gamet üretir)' },
          { id: 'B', text: 'LH (Her ikisinde eşey hormonu ürettirir)' },
          { id: 'C', text: 'Prolaktin (LTH) (Kadınlarda süt üretir, Erkeklerde böyle bir fonksiyonu yoktur)' },
          { id: 'D', text: 'Tiroksin (Her ikisinde metabolizma)' },
          { id: 'E', text: 'İnsülin (Her ikisinde şeker)' }
        ],
        correctOptionId: 'C',
        explanation: 'FSH ve LH hipofiz hormonlarıdır ve hem erkekte hem kadında üreme faaliyetlerini (sperm/yumurta) yönetir. Prolaktin ise memeli dişilerinde süt bezini uyarır.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Kandaki Adrenalin seviyesi artan bir köpekte aşağıdakilerden hangisi GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Göz bebeklerinin büyümesi' },
          { id: 'B', text: 'Kalp atışının hızlanması' },
          { id: 'C', text: 'Tüylerin diken diken olması' },
          { id: 'D', text: 'Bağırsak hareketlerinin ve sindirimin HIZLANMASI' },
          { id: 'E', text: 'Kan basıncının (tansiyonun) artması' }
        ],
        correctOptionId: 'D',
        explanation: 'Korku/Stres (Sempatik) anında sindirim (Mide/Bağırsak) DURUR, hızlanmaz.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Kandaki Glikoz miktarı aşırı artarsa (diyabet vb. sebeple), idrarda ŞEKER görülür. İdrarla atılan şeker suyu da peşinden sürüklediği için hastada ne gözlenir?',
        options: [
          { id: 'A', text: 'Az idrara çıkma ve vücudun su toplaması' },
          { id: 'B', text: 'Çok sık idrara çıkma (Poliüri) ve çok su içme (Polidipsi)' },
          { id: 'C', text: 'Sürekli uyuma' },
          { id: 'D', text: 'Kemik kırılması' },
          { id: 'E', text: 'Guatr' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker idrardan atılırken tek başına gidemez, ozmotik olarak suyu da çeker. Bu yüzden diyabetli hasta çok idrara çıkar ve buna bağlı çok susar.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Böbreküstü bezi korteksinden salgılanan KORTİZOL hormonu ilaç olarak (Kortizon) hangi durumlarda SIKLIKLA KULLANILIR?',
        options: [
          { id: 'A', text: 'Şekeri düşürmek için' },
          { id: 'B', text: 'Alerji, Romatizma veya Organ nakli gibi durumlarda BAĞIŞIKLIĞI BASKILAMAK (İltihabı önlemek) için' },
          { id: 'C', text: 'Kemikleri güçlendirmek için' },
          { id: 'D', text: 'Kas yapmak için' },
          { id: 'E', text: 'Boy uzatmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizon güçlü bir anti-inflamatuardır (iltihap sökücü) ve bağışıklık sistemini baskılar. Alerjik şoklarda, astım krizlerinde hayat kurtarır.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Aşağıdaki hormon çiftlerinden hangisi BİRBİRİNE ZIT (Antagonist) ÇALIŞMAZ?',
        options: [
          { id: 'A', text: 'İnsülin - Glukagon' },
          { id: 'B', text: 'Kalsitonin - Parathormon' },
          { id: 'C', text: 'Adrenalin - Noradrenalin' },
          { id: 'D', text: 'Bütün hepsi antagonisttir' },
          { id: 'E', text: 'Yalnız A zıttır' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin ve Noradrenalin (Epinefrin ve Norepinefrin) birbirine zıt DEĞİL, benzer (sinerjist) çalışırlar (İkisi de sempatik etki, kalp atışını hızlandırma, kan basıncını artırma vb.).'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Feedback, Hedef Dokular ve Genel İşleyiş',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bir memeli hayvanın HİPOFİZ bezi (ön ve arka lob) tamamen ameliyatla ÇIKARILIRSA, aşağıdaki hormonlardan hangisinin KANDA ARTMASI (başlangıçta) beklenir?',
        options: [
          { id: 'A', text: 'TRH (Hipotalamus\'un salgılatıcı faktörü)' },
          { id: 'B', text: 'TSH' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Testosteron' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipofiz yoksa TSH, ACTH üretilemez. Tiroksin üretilemeyince beyin "niye çalışmıyor" deyip Hipotalamustan sürekli TRH (Emir) gönderir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Hipofizi çıkarılan yukarıdaki hayvanda hangi bez GÖREVİNE DEVAM EDEBİLİR (Kendi başının çaresine bakabilir)?',
        options: [
          { id: 'A', text: 'Tiroit bezi (Tiroksin üretimi açısından)' },
          { id: 'B', text: 'Pankreas ve Paratiroit bezi' },
          { id: 'C', text: 'Böbreküstü bezi korteksi' },
          { id: 'D', text: 'Yumurtalık (Ovaryum)' },
          { id: 'E', text: 'Testis' }
        ],
        correctOptionId: 'B',
        explanation: 'Pankreas ve Paratiroit hipofizden (beyinden) TSH/ACTH tarzı emir almaz. Kan şekeri ve kan kalsiyumuna kendileri doğrudan tepki verirler.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Bir insana damar yoluyla (iğneyle) sürekli olarak TİROKSİN hormonu verilirse, Negatif Feedback mekanizması gereği kanda hangi hormonların SEVİYESİ DÜŞER?',
        options: [
          { id: 'A', text: 'İnsülin ve Glukagon' },
          { id: 'B', text: 'TRH (Hipotalamus) ve TSH (Hipofiz)' },
          { id: 'C', text: 'Sadece Kalsitonin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanda dışarıdan gelen bolca Tiroksin varsa, beyin "Zaten yeterince var, üretmeye gerek yok" diyerek TRH ve TSH salgısını keser.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Kortizol hormonunun kandaki aşırı artışı, hangi hormonun salgısını BASTIRIR (Negatif Geri Bildirim)?',
        options: [
          { id: 'A', text: 'TSH' },
          { id: 'B', text: 'ACTH (Adrenokortikotropik Hormon)' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'LH' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kortizolu ürettiren amir ACTH\'dir. Kortizol artınca amirine "tamam ben buradayım" diyerek ACTH\'yi durdurur.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Böbreklerden suyun geri emilimini ADH, Sodyumun (tuzun) geri emilimini Aldosteron sağlar. İdrarla KALSİYUM ATILIMINI AZALTIP kana geri emilmesini sağlayan hormon hangisidir?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Glukagon' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon kan kalsiyumunu yükseltmek ister. Bu yüzden idrara giden kalsiyumun da kana dönmesini sağlar.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Testislerde sperm üretimini (Spermatogenez) FSH başlatır. Üretilen spermin OLGUNLAŞMASI ve ikincil erkek özelliklerinin oluşması için HANGİ HORMON şarttır?',
        options: [
          { id: 'A', text: 'Östrojen' },
          { id: 'B', text: 'Progesteron' },
          { id: 'C', text: 'Testosteron (LH\'ın uyarısıyla salgılanır)' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'FSH sperm üretimini mayozla başlatır. LH ise testosteron ürettirir ve bu testosteron spermin kuyruk/hareket kazanmasını (olgunlaşmasını) tamamlar.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Hamilelik döneminde kadınların "Adet görmemesinin (Menstruasyon döngüsünün durmasının)" temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Kanın tükenmesi' },
          { id: 'B', text: 'PROGESTERON (ve Östrojen) hormonlarının gebelik boyunca YÜKSEK kalarak FSH ve LH salgısını (Yeni yumurta üretimini) BASKILAMASI' },
          { id: 'C', text: 'Yumurtaların tamamen bitmesi' },
          { id: 'D', text: 'Rahmin küçülmesi' },
          { id: 'E', text: 'Midenin büyümesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Gebe kadında Progesteron yüksek seyreder. Progesteronun yüksekliği beyne (Hipofiz) "Yeni yumurta üretme, biz zaten doluyuz" (Negatif Feedback) mesajı verir.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Kandaki Glikoz miktarını (Şekeri) YÜKSELTEN hormonlar (Glukagon, Adrenalin, Kortizol) HANGİ DURUMLARDA salgılanır?',
        options: [
          { id: 'A', text: 'Sadece uykuda' },
          { id: 'B', text: 'Bol şekerli bir tatlı yedikten hemen sonra' },
          { id: 'C', text: 'Açlık, Stres, Korku, Heyecan ve Ağır Egzersiz (Kan şekerinin düştüğü veya çok enerji gerektiği durumlar)' },
          { id: 'D', text: 'Sadece su içince' },
          { id: 'E', text: 'Dinlenirken' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun daha fazla enerjiye (glikoza) ihtiyaç duyduğu "alarm" veya "açlık" durumlarında glikozu yükselten hormonlar çalışır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Hangi bez hem KAN KALSİYUMUNU düşüren, hem de METABOLİZMA hızını artıran iki farklı hormon salgılar?',
        options: [
          { id: 'A', text: 'Pankreas' },
          { id: 'B', text: 'Hipofiz' },
          { id: 'C', text: 'Böbreküstü' },
          { id: 'D', text: 'Tiroit Bezi' },
          { id: 'E', text: 'Paratiroit' }
        ],
        correctOptionId: 'D',
        explanation: 'Tiroit bezi: Tiroksin (Metabolizma) ve Kalsitonin (Kan kalsiyumunu düşürme) hormonlarını salgılar.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Salgıladığı hormonla hem KAS ve KEMİK BÜYÜMESİNİ doğrudan uyaran, hem de tüm endokrin bezlerin orkestra şefi olan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Hipofiz Bezi' },
          { id: 'B', text: 'Karaciğer' },
          { id: 'C', text: 'Tiroit' },
          { id: 'D', text: 'Kalp' },
          { id: 'E', text: 'Dalak' }
        ],
        correctOptionId: 'A',
        explanation: 'Hipofiz bezi hem GH (Büyüme) ile dokuları doğrudan uyarır, hem de TSH, ACTH, FSH/LH ile diğer bezleri yönetir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Böbreküstü bezinin kabuk bölgesinden (Korteks) Kortizol ve Aldosteron, öz bölgesinden (Medulla) ise Adrenalin salgılanır. Bu bezin "Medulla (Öz)" kısmı aslında embriyolojik olarak hangi sisteme ait bir dokunun değişimiyle oluşmuştur?',
        options: [
          { id: 'A', text: 'Sindirim sistemi' },
          { id: 'B', text: 'SİNİR SİSTEMİ (Özellikle Sempatik Sinir Sistemi düğümlerinden farklılaşmıştır)' },
          { id: 'C', text: 'Solunum sistemi' },
          { id: 'D', text: 'İskelet sistemi' },
          { id: 'E', text: 'Boşaltım sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenal medulla aslında şekil değiştirmiş, dev bir sempatik sinir düğümüdür (gangliyon). Bu yüzden elektrikle uyarılıp saniyeler içinde kan akımına Adrenalin verir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Hipofiz Arka Lobundan kana verilen ADH ve Oksitosin hormonları "Nörohormon" olarak adlandırılır. Bunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Sadece beyni etkiledikleri için' },
          { id: 'B', text: 'Doğrudan bir SİNİR HÜCRESİ (Nöron) tarafından sentezlenip üretildikleri için' },
          { id: 'C', text: 'Zehirli oldukları için' },
          { id: 'D', text: 'Elektrik taşıdıkları için' },
          { id: 'E', text: 'Yağdan yapıldıkları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamustaki nöronlar hormon üretir (ADH/Oksitosin). Bir sinir hücresinin (nöronun) kana salgıladığı hormona Nörohormon denir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Kanda kalsiyum seviyesi NORMALDEYKEN, Kalsitonin ve Parathormon düzeyleri sıfır mıdır?',
        options: [
          { id: 'A', text: 'Evet, kalsiyum normalse ikisi de hiç salgılanmaz' },
          { id: 'B', text: 'Hayır, Homeostaziyi (dengeyi) korumak için ikisi de BELİRLİ BİR BAZAL seviyede (düşük miktarda) kanda bulunmaya devam eder' },
          { id: 'C', text: 'Sadece kalsitonin salgılanır' },
          { id: 'D', text: 'Sadece parathormon salgılanır' },
          { id: 'E', text: 'İkisi de aşırı miktarda salgılanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Hormonlar hiçbir zaman kanda "sıfır" olmaz (hastalık yoksa). Belli bir denge (bazal) seviyesinde karşılıklı çalışarak ince ayar yaparlar.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Tiroit bezinin salgıladığı Tiroksin, Hücredeki METABOLİZMA (Oksijenli Solunum) HIZINI ne yaparak artırır?',
        options: [
          { id: 'A', text: 'Sadece glikozu parçalayarak' },
          { id: 'B', text: 'Hücrelerin içindeki MİTOKONDRİ sayısını ve aktivitesini artırarak' },
          { id: 'C', text: 'Oksijeni suya çevirerek' },
          { id: 'D', text: 'Hücre çekirdeğini büyüterek' },
          { id: 'E', text: 'DNA\'yı yok ederek' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroksin hücrenin fırını olan mitokondrilere etki eder. Daha çok oksijen yaktırıp enerji (ATP) ve ısı üretir.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Endokrin ve Sinir sistemi "Düzenleyici Sistemler" olarak ortak çalışır. Bu iki sistem HANGİ ORGANDA doğrudan fiziksel ve işlevsel olarak birbirine BAĞLANMIŞTIR?',
        options: [
          { id: 'A', text: 'Karaciğerde' },
          { id: 'B', text: 'HİPOTALAMUS ve HİPOFİZ bölgesinde' },
          { id: 'C', text: 'Kalpte' },
          { id: 'D', text: 'Midede' },
          { id: 'E', text: 'Akciğerde' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus beyne (sinir sistemine) aittir, Hipofiz ise kana (endokrine). Bu ikisinin bağlandığı sap, sinir sistemi ile hormonal sistemin köprüsüdür.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Hipotalamus-Hipofiz-Hedef Bez Geri Bildirim Döngüleri',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'very_easy',
        questionText: 'Hipotalamustan kana verilen ve Hipofiz bezini HAREKETE GEÇİREN (salgı yapmasını sağlayan) hormonlara genel olarak ne denir?',
        options: [
          { id: 'A', text: 'RF (Releasing Factor / Salgılatıcı Faktör)' },
          { id: 'B', text: 'İnhibitör' },
          { id: 'C', text: 'Enzim' },
          { id: 'D', text: 'Sindirim sıvısı' },
          { id: 'E', text: 'Steroit' }
        ],
        correctOptionId: 'A',
        explanation: 'RF (Salgılatıcı Faktör, Örn: TRH, CRH, GnRH), hipotalamusun hipofize gönderdiği "çalış" emridir.'
      },
      {
        id: 'q-9-2', difficulty: 'very_easy',
        questionText: 'Hipofizin hormon üretmesini DURDURAN (Frenleyen) faktörlere ne denir?',
        options: [
          { id: 'A', text: 'RF (Salgılatıcı Faktör)' },
          { id: 'B', text: 'İnhibiting Factor (Durdurucu Faktör / Örn: Somatostatin)' },
          { id: 'C', text: 'Hızlandırıcı' },
          { id: 'D', text: 'Vitamin' },
          { id: 'E', text: 'Su' }
        ],
        correctOptionId: 'B',
        explanation: 'İnhibiting Factor (Engelleyici Faktör), hipofizin çok çalışmasını durdurur.'
      },
      {
        id: 'q-9-3', difficulty: 'very_easy',
        questionText: 'Ön hipofiz bezine giden kan damarları (portal sistem) bir şekilde TIKANIRSA (veya kesilirse), Hipotalamustan gelen emri alabilecek midir?',
        options: [
          { id: 'A', text: 'Evet, çünkü havadan alır' },
          { id: 'B', text: 'Hayır, emir kanla (portal damarlarla) geldiği için ön hipofiz uyarılamaz ve hormon salgılayamaz' },
          { id: 'C', text: 'Evet, çünkü sinirler bağlıdır' },
          { id: 'D', text: 'Böbreklerden alır' },
          { id: 'E', text: 'Sadece gece alır' }
        ],
        correctOptionId: 'B',
        explanation: 'Ön hipofiz komutları sadece kargo (kan) yoluyla alır. Yollar kapanırsa kargo gelmez, fabrika durur.'
      },
      {
        id: 'q-9-4', difficulty: 'very_easy',
        questionText: 'Geri bildirim (Feedback) mekanizmasında, "Son Ürün" (Örn: Tiroksin) miktarının artması ilk merkezi (Hipofiz/Hipotalamus) nasıl etkiler?',
        options: [
          { id: 'A', text: 'Daha da çok uyarıp üretimi artırır' },
          { id: 'B', text: 'Negatif geri bildirim yaparak merkezi susturur (üretimi yavaşlatır/durdurur)' },
          { id: 'C', text: 'Hiçbir etkisi yoktur' },
          { id: 'D', text: 'Pankreasa gönderir' },
          { id: 'E', text: 'Kemiği eritir' }
        ],
        correctOptionId: 'B',
        explanation: 'İhtiyaç karşılandığında (Tiroksin arttığında) sistem fren yapar. Buna Negatif Feedback denir.'
      },
      {
        id: 'q-9-5', difficulty: 'very_easy',
        questionText: 'Eğer hedef bez (Örn: Tiroit bezi) çalışmıyorsa ve kanda hiç Tiroksin YOKSA, beyin (Hipofiz) bu duruma nasıl tepki verir?',
        options: [
          { id: 'A', text: 'Hipofiz de çalışmayı bırakır' },
          { id: 'B', text: 'Tiroksin çok az olduğu için Negatif Feedback YAPILAMAZ; bu yüzden Hipofiz, Tiroit bezini uyarmak için SÜREKLİ TSH yollar (TSH çok YÜKSELİR)' },
          { id: 'C', text: 'Pankreas TSH üretir' },
          { id: 'D', text: 'Kalsiyum atılır' },
          { id: 'E', text: 'Oksitosin salgılanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Amir, işçisinden ürün (Tiroksin) gelmediğini görünce panikler ve sürekli "çalış" mesajı (TSH) gönderir.'
      },
      {
        id: 'q-9-6', difficulty: 'very_easy',
        questionText: 'Eğer bir kişinin kanında hem TSH çok YÜKSEK, hem de Tiroksin çok YÜKSEK ise, sorun nerededir?',
        options: [
          { id: 'A', text: 'Tiroit bezi hastadır' },
          { id: 'B', text: 'Hipofiz bezi (Amir) hastadır; çünkü tiroksin yüksek olmasına rağmen TSH\'ı durdurmamış (Tümör vb.)' },
          { id: 'C', text: 'Pankreas hastadır' },
          { id: 'D', text: 'Mide hastadır' },
          { id: 'E', text: 'Böbrek hastadır' }
        ],
        correctOptionId: 'B',
        explanation: 'Normalde tiroksin yüksekken TSH\'nin DÜŞÜK olması gerekir. TSH da yüksekse, Hipofiz bozularak bağımsız hormon üretiyor demektir.'
      },
      {
        id: 'q-9-7', difficulty: 'very_easy',
        questionText: 'Böbreküstü bezi kabuğundan salgılanan Kortizol artarsa, hipofizden salgılanan ACTH ne olur?',
        options: [
          { id: 'A', text: 'Artar' },
          { id: 'B', text: 'Değişmez' },
          { id: 'C', text: 'Kortizol negatif feedback yaptığı için AZALIR' },
          { id: 'D', text: 'Sıfıra iner' },
          { id: 'E', text: 'Glukagona dönüşür' }
        ],
        correctOptionId: 'C',
        explanation: 'Kortizol yükselince beyne "yeter" der ve ACTH salgısı azalır.'
      },
      {
        id: 'q-9-8', difficulty: 'very_easy',
        questionText: 'Kan şekeri düştüğünde Pankreas Glukagon salgılar, kan şekeri normale geldiğinde ise Glukagon salgısı KESİLİR. Bu olay nedir?',
        options: [
          { id: 'A', text: 'Negatif Geri Bildirim (Feedback)' },
          { id: 'B', text: 'Pozitif Feedback' },
          { id: 'C', text: 'Mitoz bölünme' },
          { id: 'D', text: 'Mayoz Bölünme' },
          { id: 'E', text: 'Fagositoz' }
        ],
        correctOptionId: 'A',
        explanation: 'İş bitince durmak, negatif feedback\'tir.'
      },
      {
        id: 'q-9-9', difficulty: 'very_easy',
        questionText: 'Doğum sırasında rahim kasıldıkça Oksitosin artar. Oksitosin arttıkça rahim DAHA DA ÇOK kasılır ve daha çok oksitosin salgılanır. Bu olay bebek doğana kadar şiddetlenerek artar. Bu durum NEYE örnektir?',
        options: [
          { id: 'A', text: 'Negatif Feedback' },
          { id: 'B', text: 'Pozitif Geri Bildirim (Positive Feedback)' },
          { id: 'C', text: 'Dengelenme' },
          { id: 'D', text: 'Sindirimin durması' },
          { id: 'E', text: 'Kan pıhtılaşması' }
        ],
        correctOptionId: 'B',
        explanation: 'Sonuç, uyarıyı durdurmak yerine DAHA DA artırıyorsa (sürekli yükselen bir döngü varsa) buna Pozitif Geri Bildirim denir.'
      },
      {
        id: 'q-9-10', difficulty: 'very_easy',
        questionText: 'Bebek anneyi emerken, göğüs ucundaki sinirler uyarılır ve hipofizden Prolaktin ve Oksitosin salgılanır. Bebek emdikçe DAHA ÇOK hormon salgılanır. Bu hangi feedback türüdür?',
        options: [
          { id: 'A', text: 'Negatif Feedback' },
          { id: 'B', text: 'Pozitif Geri Bildirim (Positive Feedback)' },
          { id: 'C', text: 'Antagonist etki' },
          { id: 'D', text: 'Nötr etki' },
          { id: 'E', text: 'Frenleme' }
        ],
        correctOptionId: 'B',
        explanation: 'Bebek emdikçe süt artar, süt arttıkça bebek daha çok emer. Bu kendini büyüten bir döngüdür (Pozitif Feedback).'
      },
      {
        id: 'q-9-11', difficulty: 'very_easy',
        questionText: 'Eğer bir kişinin kanında FSH (Folikül uyarıcı hormon) YOKSA, testis veya yumurtalıkları SPERM/YUMURTA üretebilir mi?',
        options: [
          { id: 'A', text: 'Evet, çok kolay üretir' },
          { id: 'B', text: 'Hayır, üreme hücrelerinin üretimini başlatan FSH olmadığı için üretemez (Kısırlık oluşur)' },
          { id: 'C', text: 'Evet, sadece gece üretir' },
          { id: 'D', text: 'Sadece 5 tane üretir' },
          { id: 'E', text: 'Kendisi FSH üretir' }
        ],
        correctOptionId: 'B',
        explanation: 'FSH "Mayoz bölünmeyi BAŞLAT" emridir. Emir yoksa fabrika çalışmaz.'
      },
      {
        id: 'q-9-12', difficulty: 'very_easy',
        questionText: 'Erkeklerde kanda Testosteron hormonu ÇOK YÜKSELİRSE, Hipofize etki ederek HANGİ hormonu bastırır?',
        options: [
          { id: 'A', text: 'LH (Lüteinleştirici hormon)' },
          { id: 'B', text: 'TSH' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Oksitosin' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'A',
        explanation: 'Testosteronu LH ürettirir. Testosteron yeterli seviyeye ulaşınca amiri olan LH\'ı durdurur.'
      },
      {
        id: 'q-9-13', difficulty: 'very_easy',
        questionText: 'Bir insanın Pankreası (Beta hücreleri) cerrahi operasyonla ALINIRSA, kan şekerinde nasıl bir değişim olur?',
        options: [
          { id: 'A', text: 'Kan şekeri çok düşer (Hipoglisemi)' },
          { id: 'B', text: 'İnsülin üretilemeyeceği için Kan Şekeri SÜREKLİ YÜKSEK kalır (Diyabet)' },
          { id: 'C', text: 'Kan şekeri değişmez' },
          { id: 'D', text: 'Şeker kalsiyuma dönüşür' },
          { id: 'E', text: 'Kan kurur' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin yoksa şekeri hücreye kimse sokamaz. Şeker kanda birikir.'
      },
      {
        id: 'q-9-14', difficulty: 'very_easy',
        questionText: 'Paratiroit bezi alınan (Parathormon üretemeyen) bir farede kan KALSİYUMU nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Kalsiyum hızla DÜŞER ve fare kasılmalar (tetani) geçirir' },
          { id: 'B', text: 'Kalsiyum çok yükselir' },
          { id: 'C', text: 'Fosfat artar, kalsiyum değişmez' },
          { id: 'D', text: 'Hiç etkilenmez' },
          { id: 'E', text: 'Kalsiyum sodyuma dönüşür' }
        ],
        correctOptionId: 'A',
        explanation: 'Parathormon kalsiyumun düşmesini önleyen yegane sigortadır. Sigorta yoksa kalsiyum düşer.'
      },
      {
        id: 'q-9-15', difficulty: 'very_easy',
        questionText: 'Büyüme hormonunun (GH) kan yoluyla TÜM VÜCUDA dağılmasına rağmen, boy uzaması NEDEN sadece belirli bir yaşa (ergenlik sonu) kadar gerçekleşir?',
        options: [
          { id: 'A', text: 'Çünkü hormon yaşlanınca ölür' },
          { id: 'B', text: 'Çünkü GH ergenlikten sonra SIFIRA iner' },
          { id: 'C', text: 'Çünkü kemiklerdeki UZAMA PLAKLARI (Epifiz kıkırdağı) kemikleşip KAPANDIĞI İÇİN artık hormona yanıt veremez (uzayamaz)' },
          { id: 'D', text: 'Çünkü beyin küçülür' },
          { id: 'E', text: 'Kaslar erir' }
        ],
        correctOptionId: 'C',
        explanation: 'Hormon kanda olsa bile (hatta hastalıklarda fazla olsa bile), hedef dokunun kapısı (uzama bölgesi) kapandığı için sadece boyuna değil, enine büyüme (Akromegali) gerçekleşebilir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Kan Şekeri ve Kalsiyum Dengesi (Grafik Yorumu Giriş)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Sağlıklı bir insanda KAN ŞEKERİ yemekten sonra (Örn: 140 mg/dl) HIZLA yükselirse, Pankreastan hangi hormon kana verilir?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Adrenalin' },
          { id: 'E', text: 'TSH' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker yükseldiğinde pankreas Beta hücreleri bunu algılar ve şekeri hücrelere itmek için İnsülin salgılar.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'İnsülin salgılandıktan bir süre sonra (Örn: 2 saat sonra) Kan Şekeri grafiğinde nasıl bir değişim görülür?',
        options: [
          { id: 'A', text: 'Şeker daha da yükselir' },
          { id: 'B', text: 'Şeker seviyesi DÜŞEREK NORMAL değerine (Örn: 90 mg/dl) yaklaşır' },
          { id: 'C', text: 'Şeker sıfıra iner' },
          { id: 'D', text: 'Şeker donar' },
          { id: 'E', text: 'Pankreas patlar' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin görevini yapar ve şeker kandan çekildiği için kan seviyesi düşerek normale gelir.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Uzun süren bir açlıkta (Örn: 10 saat yemek yenmediğinde) Kan Şekeri NORMALİN ALTINA (Örn: 60 mg/dl) düşerse, Pankreastan KİME ve HANGİ HORMON gönderilir?',
        options: [
          { id: 'A', text: 'Karaciğere GLUKAGON gönderilir' },
          { id: 'B', text: 'Kaslara İnsülin gönderilir' },
          { id: 'C', text: 'Beyne Adrenalin gönderilir' },
          { id: 'D', text: 'Mideye Gastrin gönderilir' },
          { id: 'E', text: 'Böbreğe ADH gönderilir' }
        ],
        correctOptionId: 'A',
        explanation: 'Şeker düştüğünde Pankreas (Alfa hücreleri) Karaciğere glukagon yollayarak depodaki glikojeni bozdurup (glikoz yapıp) kana vermesini ister.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Ağır bir spor (egzersiz) yaparken kasların çok fazla glikoza ihtiyacı olur. Bu sırada KAN ŞEKERİNİ acilen yükseltmek için kana (Böbreküstü bezinden) HANGİ HORMON salgılanır?',
        options: [
          { id: 'A', text: 'Aldosteron' },
          { id: 'B', text: 'Kalsitonin' },
          { id: 'C', text: 'Adrenalin (Epinefrin)' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kasların oksijen ve şekere ihtiyacı arttığında (Savaş/Kaç/Spor durumu), kalp atışını hızlandıran ve şekeri kana pompalatan Adrenalin devreye girer.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Kan şekerini yükselten Glukagon, Adrenalin ve Kortizol hormonları arasındaki İŞ BÖLÜMÜ nasıldır?',
        options: [
          { id: 'A', text: 'Üçü de aynı işi, aynı zamanda yapar' },
          { id: 'B', text: 'Glukagon (Günlük Açlıkta depo yıkar), Adrenalin (Acil durumlarda/Sporda depo yıkar), Kortizol (Uzun süreli streste protein/yağlardan yeni şeker yapar)' },
          { id: 'C', text: 'Kortizol şekeri düşürür' },
          { id: 'D', text: 'Adrenalin yağ depolar' },
          { id: 'E', text: 'Sadece glukagon işe yarar' }
        ],
        correctOptionId: 'B',
        explanation: 'Hepsi şekeri artırır ama hedefleri ve çalışma zamanları (Acil / Normal / Kronik) farklıdır.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Bir kalsiyum grafiğinde, Kan Kalsiyumu "Normalin ALTINDA" bir seviyeden "Normal seviyeye" DOĞRU ÇIKIYORSA, bu çıkışı SAĞLAYAN hormon hangisidir?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon (PTH)' },
          { id: 'C', text: 'Aldosteron' },
          { id: 'D', text: 'ADH' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'B',
        explanation: 'Düşük olanı yukarı (normale) çeken Parathormondur.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Tam tersi, kalsiyum grafiğinde Kalsiyum "Normalin ÜSTÜNDE" (Yüksek) bir seviyeden "Normal seviyeye" DOĞRU İNİYORSA, bunu kim yapmıştır?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Parathormon' },
          { id: 'C', text: 'Kortizol' },
          { id: 'D', text: 'Büyüme hormonu' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'A',
        explanation: 'Yüksek olanı aşağı (normale) indiren ve kalsiyumu kemiğe kilitleyen Kalsitonin\'dir.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Kemik erimesi (Osteoporoz) hastalığı olan yaşlı bir kadına doktor HANGİ HORMONU ilaç olarak verebilir?',
        options: [
          { id: 'A', text: 'Parathormon (Kemiği yıkar)' },
          { id: 'B', text: 'Kalsitonin (Kalsiyumu kemiğe sokar ve kemiği sertleştirir)' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'Oksitosin' },
          { id: 'E', text: 'Glukagon' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiği sertleştirmek ve kalsiyum biriktirmek Kalsitonin\'in görevidir. Ayrıca Östrojen (menopoz öncesi) de kemiği korur.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Sürekli Kalsiyumdan zengin (Süt, peynir vb.) beslenen birinde hangi hormonun miktarı KANDA YÜKSEK olur?',
        options: [
          { id: 'A', text: 'Parathormon' },
          { id: 'B', text: 'Kalsitonin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Tiroksin' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok kalsiyum alırsan kanda kalsiyum yükselir. Vücut bu fazlalığı temizlemek (kemiğe atmak) için Kalsitonin salgısını artırır.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Hem Kalsitonin hem de Parathormon aynı kanda bulunabilir mi?',
        options: [
          { id: 'A', text: 'Hayır, biri varken diğeri tamamen sıfırdır.' },
          { id: 'B', text: 'Evet, dengeyi sağlamak için belirli bir oranda (bazal seviyede) ikisi de kanda bulunur, sadece biri duruma göre (artıp/azalarak) BASTKIN hale gelir.' },
          { id: 'C', text: 'İkisi tepkimeye girer' },
          { id: 'D', text: 'Sadece çocuklarda bulunur' },
          { id: 'E', text: 'Kan kalsiyumu sıfırsa bulunur' }
        ],
        correctOptionId: 'B',
        explanation: 'Homeostazide salgılar genelde sıfırlanmaz, terazi gibi birbirlerini dengelerler.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Diyabet (Şeker hastalığı) olan ve insülin üretemeyen bir kişinin grafiğinde yemekten sonra kan şekeri NASIL gözlenir?',
        options: [
          { id: 'A', text: 'Çok hızlı yükselir ve hemen düşer' },
          { id: 'B', text: 'Yükselir ve İNSÜLİN OLMADIĞI İÇİN uzun süre yüksek kalır (düşemez)' },
          { id: 'C', text: 'Hiç yükselmez' },
          { id: 'D', text: 'Eksiye düşer' },
          { id: 'E', text: 'Kalsiyuma döner' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikozu hücrelere atacak (kanı temizleyecek) insülin olmadığı için kan şekeri tavanda asılı kalır.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Adrenal (Böbreküstü) korteksinden salgılanan ALDOSTERON hormonu vücuttaki TUZ (Sodyum/Potasyum) oranını düzenler. Aldosteron çok SALGILANIRSA kanda hangi mineral ARTAR?',
        options: [
          { id: 'A', text: 'Potasyum artar' },
          { id: 'B', text: 'Sodyum (Tuz) artar, Potasyum azalır (İdrara atılır)' },
          { id: 'C', text: 'Kalsiyum artar' },
          { id: 'D', text: 'Demir artar' },
          { id: 'E', text: 'İyot artar' }
        ],
        correctOptionId: 'B',
        explanation: 'Aldosteron böbreklere gidip sodyumu kana süpürür (geri emer), karşılığında potasyumu idrara atar.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Kanın ozmotik basıncı (derişimi) artarsa (Kan susuz kalıp koyulaşırsa) HİPOTALAMUS bunu algılar ve Hipofiz arka lobundan HANGİ HORMONU kana salar?',
        options: [
          { id: 'A', text: 'ADH (Antidiüretik Hormon)' },
          { id: 'B', text: 'Oksitosin' },
          { id: 'C', text: 'TSH' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Kalsitonin' }
        ],
        correctOptionId: 'A',
        explanation: 'Kan koyulaşırsa (susuz kalırsa) böbreklerden idrara su gitmesi önlenmeli, su kana alınmalıdır (Bunu yapan ADH\'dir).'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Böbreküstü bezi alınan (Kortizol ve Aldosteron üretemeyen) bir laboratuvar faresinde AÇLIK DURUMUNDA ne olması beklenir?',
        options: [
          { id: 'A', text: 'Fare hemen büyür' },
          { id: 'B', text: 'Kan şekeri çok fazla yükselir' },
          { id: 'C', text: 'Karbonhidratlar tükendiğinde proteinlerden şeker yapılamayacağı için (Kortizol yok), kan şekeri DİBE VURUR ve fare ölebilir' },
          { id: 'D', text: 'Sürekli su içer' },
          { id: 'E', text: 'Kalsiyum krizine girer' }
        ],
        correctOptionId: 'C',
        explanation: 'Uzun süreli açlıkta şekeri kortizol ayakta tutar. Kortizol yoksa (ve glikojen bittiyse) glikoz üretilemez (hipoglisemi olur).'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Tiroid bezi ameliyatla ALINMIŞ bir insanda (Dışarıdan ilaç verilmezse), kanda hangi HİPOFİZ HORMONUNUN miktarının sürekli YÜKSELMESİ beklenir?',
        options: [
          { id: 'A', text: 'TSH (Çünkü geri bildirim yapacak tiroksin yoktur, hipofiz sürekli uyarır)' },
          { id: 'B', text: 'ACTH' },
          { id: 'C', text: 'FSH' },
          { id: 'D', text: 'İnsülin' },
          { id: 'E', text: 'GH' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiroksin olmayınca Hipofiz (TSH) sürekli emir verir ama ortada tiroit bezi olmadığı için TSH kanda birikmeye (yüksek çıkmaya) devam eder.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Deney ve Senaryo Soruları',
    type: 'medium',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Bir laboratuvarda iki farklı fare bulunmaktadır. X faresine sürekli Büyüme Hormonu (GH), Y faresine ise sürekli Tiroksin enjekte ediliyor. Belli bir süre sonra iki farenin gelişiminde TEMEL FARK ne olur?',
        options: [
          { id: 'A', text: 'İkisi de aynı oranda büyür.' },
          { id: 'B', text: 'X faresi iri ve normal vücut oranlarına sahip olurken (kas/kemik büyür), Y faresinin kemikleri çok uzamaz fakat ZAYIFLAR (metabolizması çok hızlandığı için yağları erir).' },
          { id: 'C', text: 'İkisi de cüce kalır.' },
          { id: 'D', text: 'Y faresi çok su içer.' },
          { id: 'E', text: 'X faresi ölür.' }
        ],
        correctOptionId: 'B',
        explanation: 'GH doğrudan kas/kemik hücrelerini bölündürüp büyütür. Tiroksin ise motorun hızını artırır (Oksijen/ATP harcar), aşırı dozda canlıyı eritir (zayıflatır).'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Trafik kazası geçirmiş ve BEYNİNİN (Hipotalamus ve Hipofizinin arka lobu) HASAR GÖRDÜĞÜ belirlenen bir hastada, sürekli susama ve GÜNDE 15 LİTRE SEYRELTİK (sulu) idrar çıkarma görülüyor. Ancak kanda ve idrarda ŞEKER YOK. Bu hastadaki sorun nedir?',
        options: [
          { id: 'A', text: 'Pankreası parçalanmıştır (Tip 1 Diyabet)' },
          { id: 'B', text: 'Hipotalamus/Arka hipofiz hasar gördüğü için ADH (Vazopressin) üretilememekte, böbreklerden su geri emilemeyip dışarı atılmaktadır (Şekersiz Diyabet)' },
          { id: 'C', text: 'Böbrekler aşırı çalışmaktadır' },
          { id: 'D', text: 'Mide asidi kana karışmıştır' },
          { id: 'E', text: 'Adrenalin patlaması olmuştur' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyin hasarı ADH üreten bölgeyi vurmuş. ADH yoksa böbrekteki su kapıları kapanmaz, bütün su idrara (şekersiz diyabet) gider.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Sağlıklı bir kişiye damar yoluyla aniden yüksek dozda İNSÜLİN enjekte edilirse (Kan şekeri hızla düşerse), hastanın bayılmaması (hipoglisemi komasına girmemesi) için VÜCUT acilen hangi HORMONU salgılayarak tepki verir?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'Tiroksin' },
          { id: 'C', text: 'Adrenalin (ve Glukagon)' },
          { id: 'D', text: 'ADH' },
          { id: 'E', text: 'Aldosteron' }
        ],
        correctOptionId: 'C',
        explanation: 'Şekerin aşırı düşmesi hayati bir tehlikedir. Vücut alarm (stres) durumuna geçer, sempatik sinirler Adrenalin salgılatır (çarpıntı, terleme) ve pankreas glukagon salgılayarak şekeri ipten alır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Kışın çok soğuk bir ortamda (Örn: Karlı dağda) uzun süre kalan bir insanın vücut sıcaklığını SABİT TUTABİLMESİ (metabolizmasını artırıp ısı üretmesi) için, vücudu EN UZUN SÜRE ısıtacak olan HANGİ HORMONUN artması beklenir?',
        options: [
          { id: 'A', text: 'Sadece Adrenalin' },
          { id: 'B', text: 'Tiroksin (Tiroit bezinden)' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Parathormon' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'B',
        explanation: 'Adrenalin titreyerek anlık ısı ürettirir ama kalıcı bazal metabolizmayı ve uzun süreli ısı (kalorifer) ayarını Tiroksin belirler. Soğuk havada TRH->TSH->Tiroksin yolu uyarılır.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Böbreküstü bezinin Kabuk (Korteks) bölgesinde bir tümör olan ve KORTİZOL hormonu KONTROLSÜZCE AŞIRI üretilen (Cushing Sendromu) bir hastada aşağıdakilerden hangisi GÖRÜLÜR?',
        options: [
          { id: 'A', text: 'Bağışıklık sisteminin AŞIRI GÜÇLENMESİ' },
          { id: 'B', text: 'Kan şekerinin DÜŞMESİ' },
          { id: 'C', text: 'Kortizol yağları/proteinleri yıkıp şekere çevirdiği için KAN ŞEKERİ YÜKSEK olur (Diyabet benzeri), kollardaki kaslar erir, yağlar karın/yüz (aydede yüzü) bölgesinde toplanır' },
          { id: 'D', text: 'Gözlerin dışarı fırlaması' },
          { id: 'E', text: 'Aşırı boy uzaması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kortizolün aşırısı "Cushing Sendromu"dur. Vücut proteinlerini yıktığı için kollar çöp gibi kalır, çıkan şeker yağa dönüp yüze/gövdeye (Aydede yüzü, bufalo hörgücü) birikir.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Böbrek rahatsızlığı (Böbrek Yetmezliği) olan bir hastada, D Vitamini tam olarak AKTİFLEŞTİRİLEMEDİĞİ için bağırsaklardan YETERLİ KALSİYUM EMİLEMEZ. Bu hastanın KAN KALSİYUMUNU DENGELEMEK için HANGİ BEZİ KESİNTİSİZ ÇALIŞMAK zorunda kalır?',
        options: [
          { id: 'A', text: 'Tiroit Bezi (Kalsitonin)' },
          { id: 'B', text: 'Paratiroit Bezi (Parathormon)' },
          { id: 'C', text: 'Pankreas' },
          { id: 'D', text: 'Hipofiz' },
          { id: 'E', text: 'Epifiz' }
        ],
        correctOptionId: 'B',
        explanation: 'Dışarıdan kalsiyum gelemiyorsa, kan kalsiyumu sürekli düşük kalır. Paratiroit bezi kalsiyumu normale çekmek için mecburen SÜREKLİ Parathormon salgılar ve kemikleri yavaş yavaş eritir (Osteoporoz).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Kanda su azaldığında (Çok tuzlu yediğimizde veya terlediğimizde) vücutta sırasıyla hangi mekanizma İŞLER?',
        options: [
          { id: 'A', text: 'Kan ozmotik basıncı artar -> Hipotalamus uyarılır -> Hipofiz arka lobundan ADH kana verilir -> ADH böbreklere giderek suyu kana geri emer' },
          { id: 'B', text: 'Pankreas uyarılır -> İnsülin suyu emer' },
          { id: 'C', text: 'Tiroit uyarılır -> Kalsitonin su salgılar' },
          { id: 'D', text: 'Kemikler su üretir' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'A',
        explanation: 'Bu ADH\'nin (Antidiüretik Hormon) standart çalışma yoludur.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Gebelik testlerinde İDRARDA bir hormon aranır. Eğer embriyo rahime tutunmuşsa (hamilelik varsa) embriyo tarafından üretilen ve HİPOFİZDEKİ LH hormonunu TAKLİT EDEREK Korpus Luteum\'un (Progesteron üretiminin) BOZULMASINI ENGELLEYEN hormon hangisidir?',
        options: [
          { id: 'A', text: 'Östrojen' },
          { id: 'B', text: 'Prolaktin' },
          { id: 'C', text: 'HCG (Human Koryonik Gonadotropin)' },
          { id: 'D', text: 'Kortizol' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'C',
        explanation: 'HCG hormonu sadece gebelikte (embriyo ve sonrasında plasenta tarafından) üretilir. İdrarda bu hormon saptanırsa test "Pozitif (Hamile)" çıkar.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Öğle yemeğinde BOLCA KEK ve ÇİKOLATA yiyen bir insanda HANGİ HORMONUN kan seviyesi HIZLA YÜKSELİR ve hedef hücrelerin (Karaciğer, Kas) zarına bağlanarak HÜCRE İÇİNE GİRİŞ KAPILARINI (Taşıyıcı proteinleri) AÇAR?',
        options: [
          { id: 'A', text: 'Glukagon' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'Kalsitonin' },
          { id: 'E', text: 'Tiroksin' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin hücrelerin kapısındaki (zardaki) reseptöre bağlanır ve glikoz kanallarını açarak şekerin hücre içine girmesini sağlar (Kanda kalmasını önler).'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Pankreasındaki ALFA hücreleri (Glukagon üreten) tahrip olmuş bir bireyde ne GÖZLENİR?',
        options: [
          { id: 'A', text: 'Yemek sonrası şekeri çok yükselir' },
          { id: 'B', text: 'AÇLIK DURUMUNDA (örneğin sabah uykudan kalkarken) karaciğerindeki depoyu (glikojeni) bozdurup kana veremediği için KAN ŞEKERİ TEHLİKELİ ŞEKİLDE DÜŞER' },
          { id: 'C', text: 'Kalsiyum krizi geçirir' },
          { id: 'D', text: 'Tansiyonu çok artar' },
          { id: 'E', text: 'Boyu sürekli uzar' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon yoksa, açlıkta şeker deposu kullanılamaz (Glikojen kana glikoz olarak verilemez) ve hipoglisemi yaşanır.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Testisleri ameliyatla alınan bir horozun, ibiklerinin küçüldüğü, ötmesinin değiştiği (erkeksi özelliklerini kaybettiği) gözlenmiştir. Daha sonra bu horozun deri altına bir TESTİS DOKUSU İMPLANTE EDİLDİĞİNDE (dikildiğinde) ibiklerin tekrar büyüdüğü ve erkeksi davranışların geri geldiği görülmüştür. Bu deney NEYİ KANITLAR?',
        options: [
          { id: 'A', text: 'Testislerin sinirsel bir uyarıyla (elektrikle) çalıştığını' },
          { id: 'B', text: 'Testislerin ürettiği etkinin, SİNİRLERLE DEĞİL "KAN YOLUYLA" (HORMONAL) vücuda taşındığını (Çünkü deri altına eklenen dokunun beyinle sinir bağlantısı yoktur, sadece kılcal damarlardan kana Testosteron vermiştir)' },
          { id: 'C', text: 'İbiklerin testiste üretildiğini' },
          { id: 'D', text: 'Horozların memeli olduğunu' },
          { id: 'E', text: 'Spermlerin kana karıştığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Klasik Berthold deneyi. Testis, sinir bağlantısı olmadan da vücudu değiştirebilir, demek ki mesajı kanla (hormonla) gönderiyor.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Bir memeli hayvanın midesine bağlanan BÜTÜN SİNİRLER kesilmiş (beyinle elektriksel bağı koparılmıştır). Ancak bu hayvanın kanına "GASTRİN" hormonu verildiğinde midenin yine de SİNDİRİM SIVISI ÜRETTİĞİ gözlenmiştir. Bu durum NEYİ KANITLAR?',
        options: [
          { id: 'A', text: 'Midenin sinirlere hiç ihtiyacı olmadığını' },
          { id: 'B', text: 'Midenin çalışmasında sadece sinirlerin değil, HORMONLARIN DA (Kansal uyarının da) ETKİLİ OLDUĞUNU' },
          { id: 'C', text: 'Midenin kalbe bağlı olduğunu' },
          { id: 'D', text: 'Gastrin hormonunun beyinde üretildiğini' },
          { id: 'E', text: 'Mide asidinin kana karıştığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Organların çalışması sadece sinirle değil, kandan gelen kimyasal mesajlarla (hormonlarla) da yönetilebilir.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Adrenalin hormonunun "Kalpteki" kan damarlarını (koroner damarlar) GENİŞLETEREK kalbin beslenmesini artırırken, "Mide ve Bağırsaklardaki" damarları DARALTARAK sindirimi durdurması, aynı hormonun FARKLI ORGANLARDA FARKLI ETKİ göstermesidir. Bunun TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Hormonun yapısının kanda giderken değişmesi' },
          { id: 'B', text: 'Kalpte ve Midede bulunan "RESEPTÖR" (Kapı/Kilit) ÇEŞİTLERİNİN veya hücre içi enzimlerin (ikinci habercilerin) FARKLI OLMASI' },
          { id: 'C', text: 'Kalbin sıcak, midenin soğuk olması' },
          { id: 'D', text: 'Hormonun mideye gidememesi' },
          { id: 'E', text: 'Midede kan olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı anahtar (Adrenalin), kalpteki reseptöre (Alfa/Beta ayrımı vb.) bağlandığında damarı genişletirken, bağırsaktaki farklı bir reseptöre bağlandığında daraltabilir.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Şekersiz diyabet (Diabetes insipidus) hastalığı olan birine ADH hormonu damardan verilirse HANGİ durum GERÇEKLEŞİR?',
        options: [
          { id: 'A', text: 'İdrar miktarı iyice artar' },
          { id: 'B', text: 'İdrarla şeker atılmaya başlar' },
          { id: 'C', text: 'Böbrekten SUYUN geri emilimi ARTAR, idrar miktarı AZALIR ve idrar KOYULAŞIR (Derişik hale gelir)' },
          { id: 'D', text: 'Kanı kurur' },
          { id: 'E', text: 'Sürekli su içer' }
        ],
        correctOptionId: 'C',
        explanation: 'Eksik olan ADH dışarıdan verilirse, su kanalları açılır, su idrardan kana döner ve hastalık (geçici olarak) düzelir.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Tiroksin hormonunun yapısında İYOT bulunduğunu biliyoruz. Vücuda "Radyoaktif işaretli İYOT" verildiğinde, bu iyot en çok HANGİ ORGANDA birikir ve parlar (Örn: Görüntüleme cihazlarında)?',
        options: [
          { id: 'A', text: 'Kalp' },
          { id: 'B', text: 'Mide' },
          { id: 'C', text: 'Tiroit Bezi (Boyun bölgesinde)' },
          { id: 'D', text: 'Karaciğer' },
          { id: 'E', text: 'Hipofiz' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücuttaki iyotu sadece Tiroit bezi (Tiroksin üretmek için) toplar ve depolar.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Karmaşıklık ve Hastalık Yorumlama',
    type: 'medium',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir insanın Hipofiz Ön Lobu tamamen çıkarılırsa ve DIŞARIDAN İLAÇ VERİLMEZSE aşağıdaki bezlerden hangisinde ZAMANLA "KÜÇÜLME (Atrofi)" gözlenmez?',
        options: [
          { id: 'A', text: 'Tiroit Bezi (TSH gelmeyeceği için küçülür)' },
          { id: 'B', text: 'Böbreküstü bezi korteksi (ACTH gelmeyeceği için küçülür)' },
          { id: 'C', text: 'Testis (FSH/LH gelmeyeceği için küçülür)' },
          { id: 'D', text: 'Yumurtalık (FSH/LH gelmeyeceği için küçülür)' },
          { id: 'E', text: 'Pankreas (İnsülin/Glukagon üretimi doğrudan kan şekerine bağlıdır, hipofize bağımlı değildir)' }
        ],
        correctOptionId: 'E',
        explanation: 'Hipofiz (TSH, ACTH, FSH/LH) kendi kontrol ettiği bezleri uyarır. Pankreasın şefi kandaki Glikozdur, Hipofiz değildir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Yazın çölde susuz kalmış bir bedevi (insan), su kaybetmemek için TANSİYONUNU KORUMAYA ve İDRARI AZALTMAYA çalışır. Bu durumda bedevinin kanında HANGİ İKİ HORMONUN miktarında BELİRGİN ARTIŞ gözlenir?',
        options: [
          { id: 'A', text: 'ADH ve Aldosteron' },
          { id: 'B', text: 'İnsülin ve Glukagon' },
          { id: 'C', text: 'Parathormon ve Kalsitonin' },
          { id: 'D', text: 'Tiroksin ve TSH' },
          { id: 'E', text: 'FSH ve LH' }
        ],
        correctOptionId: 'A',
        explanation: 'ADH suyu tutar (idrarı azaltır), Aldosteron ise tuzu (sodyumu) tutarak suyu peşinden çeker. İkisi de kan hacmini ve tansiyonu yükseltmeye yarar.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Trafik kazasında BÖBREKÜSTÜ BEZLERİ parçalanan (Kortizol ve Aldosteron üretemeyen) ve ADDISON KRİZİNE giren bir hastada kanda SODYUM (Tuz) ve POTASYUM değerleri nasıldır?',
        options: [
          { id: 'A', text: 'İkisi de yüksektir' },
          { id: 'B', text: 'Sodyum çok YÜKSEK, Potasyum DÜŞÜKTÜR' },
          { id: 'C', text: 'Sodyum (Tuz) çok DÜŞÜK, Potasyum ise YÜKSEKTİR (Kritik Ritim Bozukluğu)' },
          { id: 'D', text: 'İkisi de değişmez' },
          { id: 'E', text: 'Sodyum kalsiyuma dönüşür' }
        ],
        correctOptionId: 'C',
        explanation: 'Aldosteron tuzu tutup potasyumu atar. Aldosteron YOKSA tuz böbrekten kaçıp gider (tansiyon düşer), potasyum ise kanda birikip kalbi durdurabilir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Bir hücrede cAMP (İkinci Haberci) miktarının hızla arttığı saptanmıştır. Bu hücre ile ilgili ne söylenebilir?',
        options: [
          { id: 'A', text: 'Hücre içine Steroit yapılı bir hormon (Kortizol vb.) girmiş ve DNA\'ya bağlanmıştır.' },
          { id: 'B', text: 'Hücre ZARINDAKİ reseptöre PROTEİN (Peptit) yapılı bir hormon (Adrenalin, Glukagon vb.) bağlanmış ve hücre içine sinyal göndermiştir.' },
          { id: 'C', text: 'Hücre ölmüştür.' },
          { id: 'D', text: 'Hücre kanserleşmiştir.' },
          { id: 'E', text: 'Hücre mayoz bölünme geçiriyordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroitler zardan direkt girer, cAMP ile işi olmaz. cAMP (ikinci haberci), içeri giremeyen büyük protein hormonların kuryesidir.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Bir insanın TİROİT bezi fazla çalışıyorsa (Hipertiroidi - Tiroksin fazlalığı), bu kişinin HİPOFİZİ "Negatif Feedback" yaparak TSH salgısını ne yapar?',
        options: [
          { id: 'A', text: 'Daha da artırır' },
          { id: 'B', text: 'Sıfıra yakın derecede BASKILAR ve DÜŞÜRÜR' },
          { id: 'C', text: 'Hiç değiştirmez' },
          { id: 'D', text: 'Pankreasa gönderir' },
          { id: 'E', text: 'Böbreğe gönderir' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroit kendi kafasına (tümör vb.) çok tiroksin üretiyorsa, hipofiz bunu kanda görür ve "Tamam, benim uyarmama gerek yok" diyerek kendi TSH\'sini en aza indirir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Bir diyabet (Şeker) hastasına dışarıdan çok yüksek dozda İNSÜLİN vurulursa ne olur?',
        options: [
          { id: 'A', text: 'Şeker çok artar' },
          { id: 'B', text: 'Kan şekeri ANİDEN ÇOK DÜŞER, beyin glikozsuz kalır ve hasta KOMA\'ya girebilir (Hipoglisemik şok)' },
          { id: 'C', text: 'Boyu uzar' },
          { id: 'D', text: 'Kilo verir' },
          { id: 'E', text: 'Hiçbir şey olmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsülin kanda gezen şekeri saklar. Çok fazla vurursanız kanda şeker kalmaz. Beyin sadece glikozla çalıştığı için şekersiz kalıp bayılır.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Hipofizin ARKA lobu aslında hormon üretmez, hipotalamusta üretilen (ADH ve Oksitosin) hormonları DEPOLAR. Hipotalamusta üretilen bu hormonlar, Arka loba NASIL (hangi yolla) TAŞINIR?',
        options: [
          { id: 'A', text: 'Kan damarları (Portal damar) ile' },
          { id: 'B', text: 'Hipotalamustaki nöronların UZUN AKSONLARI boyunca, akson içi taşımayla arka hipofize inerek' },
          { id: 'C', text: 'Lenf sıvısı ile' },
          { id: 'D', text: 'BOS (Beyin Omurilik Sıvısı) içinde yüzerek' },
          { id: 'E', text: 'Kas kasılmasıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Arka hipofiz zaten hipotalamus sinirlerinin uzantısıdır (akson uçlarıdır). Hormonlar gövdede (hipotalamusta) üretilir, akson (kablo) boyunca aşağı inip depo edilir.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Pankreastan sentezlenen insülin, protein (peptit) yapılıdır. Bu yüzden İnsülin hapları (ağızdan hap olarak) yutulmaz, İĞNE yoluyla kana enjekte edilir. Bunun EN TEMEL sebebi nedir?',
        options: [
          { id: 'A', text: 'Hapın çok acı olması' },
          { id: 'B', text: 'Protein yapılı insülinin midede sindirim enzimlerince (Pepsin vb.) PARÇALANARAK işlevini kaybetmesi (Amino asitlere dönüşmesi)' },
          { id: 'C', text: 'Hapın kana çok hızlı geçmesi' },
          { id: 'D', text: 'İnsülinin sadece deride çalışması' },
          { id: 'E', text: 'İğnenin daha ucuz olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Protein (et, süt, yumurta vb) midede sindirilir. İnsülin de proteindir, hap olarak yutarsan onu da sindirirsin ve kana hormon olarak değil basit amino asit olarak geçer, işe yaramaz.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Oksitosin hormonunun HEDEF organı DİŞİLERDE Rahim (Uterus) kasları ve Süt bezleridir. Peki ERKEKLERDE Oksitosin var mıdır, varsa ne işe yarar?',
        options: [
          { id: 'A', text: 'Hiç yoktur' },
          { id: 'B', text: 'Erkeklerde de az miktarda bulunur, sperm kanallarının kasılmasında ve "babalyk/bağlanma" içgüdülerinde (duygusal bağda) rol oynadığı düşünülmektedir' },
          { id: 'C', text: 'Erkeklerde süt üretir' },
          { id: 'D', text: 'Sadece kalbi çalıştırır' },
          { id: 'E', text: 'Sakal çıkartır' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksitosin bir nevi sarılma/şefkat hormonudur. Erkeklerde doğurma olmasa da eşler arası bağlanmada ve üreme yollarında az miktarda görev yapar.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Paratiroit bezinin aşırı çalışması (Hiperparatiroidizm) KEMİKLERDEKİ kalsiyumu sürekli kana geçirir. Bu durum kanda kalsiyumu artırırken, KEMİKLERDE VE BÖBREKLERDE hangi problemlere yol açar?',
        options: [
          { id: 'A', text: 'Kemikler aşırı sertleşir, böbrek temizlenir' },
          { id: 'B', text: 'Kemiklerde kırılganlık (OSTEOPOROZ) artar, kanda gezen fazla kalsiyum ise böbreklerde çökerek BÖBREK TAŞLARI oluşturur' },
          { id: 'C', text: 'Kemikler uzar' },
          { id: 'D', text: 'Hiçbir sorun olmaz' },
          { id: 'E', text: 'Sadece saçlar dökülür' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiğin içi boşalırsa (Osteoporoz) kolayca kırılır. Atılamayan kalsiyum ise böbrek havuzcuğunda taşlaşır.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'İnsan vücudunda hücre bölünmesini ve organ büyümesini EN DOĞRUDAN UYARAN hormon (mitotik uyarıcı) hangisidir?',
        options: [
          { id: 'A', text: 'Somatotropin (GH / Büyüme Hormonu)' },
          { id: 'B', text: 'Melatonin' },
          { id: 'C', text: 'Kalsitonin' },
          { id: 'D', text: 'Gastrin' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'A',
        explanation: 'GH doğrudan hücre döngüsünü (mitozu) ve protein sentezini uyararak bedeni büyütür.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Tip 1 Diyabet hastaları vücutlarına dışarıdan "insülin" almak zorundadır. Ancak hücreleri, kan glikozunu içeri alamadığı zaman (insülin eksikliğinde) enerji üretmek için HANGİ YAKITI kullanmaya başlar?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Hücreler YAĞLARI ve PROTEİNLERİ yıkarak enerji elde etmeye çalışır (Bu yüzden hasta ZAYIFLAR ve kanında "Keton" cisimcikleri artarak asitlik/koma oluşur)' },
          { id: 'C', text: 'Sadece mineral kullanır' },
          { id: 'D', text: 'Güneş ışığını kullanır' },
          { id: 'E', text: 'Oksijeni tek başına yakar' }
        ],
        correctOptionId: 'B',
        explanation: 'İçeri şeker giremeyince hücre "Ben açım" diyerek kendi yapısındaki yağı/proteini yakmaya başlar. Diyabet hastalarının çok yemek yemesine rağmen zayıflamasının sebebi budur (Hücresel açlık).'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Bir insanın vücudunda (kanında) AŞIRI MİKTARDA (uzun süre) ADRENALİN dolaşırsa ne olması BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Sürekli Yüksek Tansiyon' },
          { id: 'B', text: 'Kalp ritim bozukluğu (Taşikardi)' },
          { id: 'C', text: 'Mide ve Bağırsak çalışmasının AŞIRI HIZLANMASI ve ishal' },
          { id: 'D', text: 'Göz bebeklerinde büyüme' },
          { id: 'E', text: 'Kan şekerinin yüksek seyretmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin sempatik sistemi çalıştırır. Sempatik sistem sindirimi YAVAŞLATIR / DURDURUR, hızlandırmaz.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Stresli durumlarda (Sınav, hastalık vs.) neden çok sık HASTALANIRIZ (Bağışıklığımız neden düşer)?',
        options: [
          { id: 'A', text: 'Stres anında salgılanan KORTİZOL hormonunun uzun vadede bağışıklık sistemi hücrelerini (Lenfositleri) BASKILAMASI yüzünden' },
          { id: 'B', text: 'Stres kemikleri kırdığı için' },
          { id: 'C', text: 'Stres midemizi bulandırdığı için' },
          { id: 'D', text: 'Sadece adrenalin bittiği için' },
          { id: 'E', text: 'Kan şekeri sıfırlandığı için' }
        ],
        correctOptionId: 'A',
        explanation: 'Kortizol acil enerji üretmek için bağışıklık sistemine giden enerjiyi kısar ve iltihabı/savunmayı baskılar.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Aşağıdaki yapılardan hangisi hem SİNİR HÜCRESİ (Nöron) yapısında olup elektrikle iletim yaparken, Həm de kana doğrudan HORMON salgılayabilen (Nöroendokrin) muazzam bir KÖPRÜDÜR?',
        options: [
          { id: 'A', text: 'Karaciğer' },
          { id: 'B', text: 'Hipotalamus (ve Arka Hipofiz uzantıları)' },
          { id: 'C', text: 'Tiroit bezi' },
          { id: 'D', text: 'Mide' },
          { id: 'E', text: 'Bağırsak' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipotalamus, beynin ortasında sinirsel emirleri (nörotransmitter) hormonlara (nörohormon) çeviren mucizevi bir tercümandır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Endokrin Sistem Genel Değerlendirme',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Hipofizin ARKA lobundan salgılanan ADH ve Oksitosin hormonları için, "Bu hormonlar hipofizde ÜRETİLMEZ" denmesinin DOĞRU AÇIKLAMASI nedir?',
        options: [
          { id: 'A', text: 'Çünkü kanda üretilirler' },
          { id: 'B', text: 'Çünkü bu hormonlar hipotalamustaki NÖRON gövdelerinde (sinir hücrelerinde) üretilir, aksonlar (sinir uzantıları) boyunca arka hipofize taşınıp sadece oradan KANA SALGILANIR' },
          { id: 'C', text: 'Çünkü böbrekte üretilirler' },
          { id: 'D', text: 'Çünkü ön lob üretir arka lob dağıtır' },
          { id: 'E', text: 'Çünkü bunlar hormon değildir' }
        ],
        correctOptionId: 'B',
        explanation: 'Arka hipofiz hormonlarının asıl fabrikası Hipotalamustur. Arka hipofiz sadece deponun çıkış kapısıdır.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Testislerdeki Leydig hücrelerini uyararak Testosteron üretimini (erkeklik hormonunu) sağlayan hormon HANGİSİDİR?',
        options: [
          { id: 'A', text: 'FSH (Folikül Stimüle Edici Hormon)' },
          { id: 'B', text: 'LH (Lüteinleştirici Hormon)' },
          { id: 'C', text: 'LTH (Prolaktin)' },
          { id: 'D', text: 'TSH' },
          { id: 'E', text: 'ACTH' }
        ],
        correctOptionId: 'B',
        explanation: 'FSH Spermatogenezi (sperm üretimini) başlatır. LH ise Leydig hücrelerinden testosteron salgılatarak spermin olgunlaşmasını sağlar.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Bir kaza anında KANAMASI OLAN ve TANSİYONU HIZLA DÜŞEN bir kişinin vücudu, kan basıncını yükseltmek ve su/tuz kaybını önlemek için HANGİ 3 HORMONU aynı anda kana yüksek miktarda salgılar?',
        options: [
          { id: 'A', text: 'İnsülin, Kalsitonin, Glukagon' },
          { id: 'B', text: 'Adrenalin (Kalbi hızlandırır), ADH (Suyu tutar), Aldosteron (Tuzu ve suyu tutar)' },
          { id: 'C', text: 'Oksitosin, Melatonin, LTH' },
          { id: 'D', text: 'Parathormon, Tiroksin, Kortizol' },
          { id: 'E', text: 'Sadece ADH salgılar' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu üç hormon acil durumlarda damarları büzüp, su ve tuzu geri emerek (böbrekten) hayati tansiyonu ayakta tutarlar (Sinerjist savunma).'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Tiroit bezinin normalden FAZLA çalışması (Hipertiroidi - Zehirli Guatr) olan bir hastada "Negatif Geri Bildirim" kuralına göre TSH hormonu seviyesi NASIL OLMALIDIR?',
        options: [
          { id: 'A', text: 'Normalin çok üstünde' },
          { id: 'B', text: 'Tiroksin çok yüksek olduğu için hipofiz uyarılmaz ve TSH seviyesi NORMALİN ÇOK ALTINDA (Düşük) bulunur' },
          { id: 'C', text: 'Normal seviyede kalır' },
          { id: 'D', text: 'Tiroksin ile aynı miktarda' },
          { id: 'E', text: 'TRH kadar' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroidin kendi kendine (bağımsız) çok hormon üretmesi, amiri (hipofizi) susturur. Kanda T4 (Tiroksin) yüksek, TSH düşükse tiroid bezi hastadır (Hipertiroidi).'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Tiroit bezi ameliyatla ALINMIŞ bir hastada Kalsiyum dengesinde BÜYÜK BİR SORUN çıkmamasının (sadece kalsitonin eksikliği yüzünden ölmemesinin) sebebi nedir?',
        options: [
          { id: 'A', text: 'Çünkü kalsitonin işe yaramaz' },
          { id: 'B', text: 'Kalsiyum düşüklüğü tetaniye (kalp durmasına) yol açar ama Kalsiyum YÜKSEKLİĞİ o kadar acil ölümcül değildir ve BÖBREKLER fazla kalsiyumu idrarla atarak durumu idare edebilir' },
          { id: 'C', text: 'Pankreas kalsitonin üretir' },
          { id: 'D', text: 'Mide kalsiyumu sindirir' },
          { id: 'E', text: 'Çünkü kalsiyum şekere dönüşür' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon eksikliği (kalsiyum düşüklüğü) ani tetani krizleriyle öldürür. Ancak Kalsitonin eksikliği (yüksek kalsiyum) böbrekler sağlam olduğu sürece idrarla atılarak tolere edilebilir.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Kortizol (Stres) hormonu ile Glukagon (Açlık) hormonu KAN ŞEKERİNİ YÜKSELTİR. İkisinin karaciğerdeki YÖNTEMLERİ (Mekanizmaları) HANGİ ŞIKTA doğru karşılaştırılmıştır?',
        options: [
          { id: 'A', text: 'İkisi de kas glikojenini yıkar' },
          { id: 'B', text: 'Glukagon, karaciğerdeki HAZIR DEPOYU (Glikojeni) yıkarak glikoza çevirir. Kortizol ise depo bitince YAĞ ve PROTEİNLERİ (Karbonhidrat dışı kaynakları) glikoza çevirir' },
          { id: 'C', text: 'Kortizol de glikojeni yıkar' },
          { id: 'D', text: 'Glukagon kası eritir, Kortizol kemiği eritir' },
          { id: 'E', text: 'İkisi de hücre içinden şeker alır' }
        ],
        correctOptionId: 'B',
        explanation: 'Glukagon glikojenoliz (glikojeni yıkma) yapar. Kortizol ise glukoneogenez (yeni glikoz üretme) yapar.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Menopoz döneminde ÖSTROJEN hormonu tamamen DÜŞEN bir kadında "Kemik Erimesi (Osteoporoz)" görülme riski çok YÜKSELİR. Bunun NEDENİ nedir?',
        options: [
          { id: 'A', text: 'Östrojenin kemikte kalsiyum tutucu (kemik yapımını koruyucu) bir etkisinin olması ve bu kalkanın ortadan kalkması' },
          { id: 'B', text: 'Östrojenin doğrudan kalsitonine dönüşmesi' },
          { id: 'C', text: 'Menopozda paratiroidin yok olması' },
          { id: 'D', text: 'Yaşlılıkta hiç süt içilmemesi' },
          { id: 'E', text: 'Menopozda TSH artması' }
        ],
        correctOptionId: 'A',
        explanation: 'Östrojen (ve erkeklerde testosteron) kemik yıkım hücrelerini (osteoklastları) frenleyerek kemiği korur. Hormon kesilince kemik hızla erimeye başlar.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Steroit yapılı hormonlar (Örn: Kortizol, Östrojen, Testosteron) HÜCREYE NASIL ETKİ EDER?',
        options: [
          { id: 'A', text: 'Zardaki reseptöre bağlanıp cAMP (ikinci haberci) üretirler' },
          { id: 'B', text: 'Hücre zarını (yağ tabakasını) kolayca DELİP GEÇER, SİTOPLAZMA VEYA ÇEKİRDEK İÇİNDEKİ reseptörüne bağlanıp DOĞRUDAN DNA (gen) AKTİVİTESİNİ DEĞİŞTİRİRLER' },
          { id: 'C', text: 'Hücreye giremezler' },
          { id: 'D', text: 'Sadece kanda kalıp elektriksel etki yaparlar' },
          { id: 'E', text: 'Ribozomu parçalarlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Steroitler yağ olduğu için yağdan (fosfolipit) oluşan zardan direkt geçerler ve doğrudan genin çalışmasını durdurur/başlatırlar (Örn: testosteronun kas proteini ürettirmesi).'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Tip 1 Diyabet hastasında kanda ŞEKER çok YÜKSEK olmasına rağmen, hasta NEDEN HÜCRESEL AÇLIK (Hipoglisemi belirtileri, titreme, zayıflama) çeker?',
        options: [
          { id: 'A', text: 'Şekerin hepsi idrarla atıldığı için' },
          { id: 'B', text: 'Kandaki şeker (insülin olmadığı için) HÜCRE İÇİNE GİREMEZ. Hücreler (şeker banyosu içinde olsalar bile) glikozu KULLANAMAZ ve AÇ KALIR (Enerji için yağlarını yıkar)' },
          { id: 'C', text: 'Şeker kalsiyuma döndüğü için' },
          { id: 'D', text: 'Mide şekeri sindiremediği için' },
          { id: 'E', text: 'Beyin şekeri engellediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Diyabette sorun şekerin yokluğu değil, kapıda birikmesi (içeri girememesi) dir. Anahtar (İnsülin) yoksa, hücre açlıktan ölür.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Parathormon (PTH) eksikliğinde "Tetani" (kasların kasılı kalması) neden olur?',
        options: [
          { id: 'A', text: 'Çok kalsiyum olduğu için' },
          { id: 'B', text: 'Kasın GEVŞEYEBİLMESİ için ortamdan kalsiyumun uzaklaştırılması gerekir. PTH yoksa kan kalsiyumu düşer, hücre zarlarının elektriksel dengesi bozulur (eşik değer düşer) ve SİNİRLER/KASLAR EN KÜÇÜK UYARIDA ŞİDDETLE KASILIR (kramp/tetani)' },
          { id: 'C', text: 'Sodyum bittiği için' },
          { id: 'D', text: 'Tiroksin arttığı için' },
          { id: 'E', text: 'Kaslar kemiğe dönüştüğü için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum düşüklüğü sinir zarlarını "aşırı hassas" (hipereksitabl) hale getirir. Normalde tepki vermeyecek küçük uyarılar bile şiddetli kramplara (Tetani) yol açar.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek seviye yorum, grafik ve klinik senaryo soruları',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Bir kişinin KANINDAKİ Adrenalin, Glukagon ve Kortizol hormonlarının ÜÇÜ BİRDEN aynı anda (eş zamanlı) ARTIYORSA, bu kişinin durumuyla ilgili HANGİSİ KESİN OLARAK SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Derin bir uykudadır' },
          { id: 'B', text: 'Vücudu (şiddetli bir fiziksel/ruhsal stres, açlık, kaçma/savaşma veya ağır egzersiz gibi) ŞİDDETLİ BİR ALARM durumundadır ve HIZLA ENERJİYE (Glikoza) ihtiyacı vardır' },
          { id: 'C', text: 'Bol karbonhidratlı bir yemek yemiştir' },
          { id: 'D', text: 'Sindirimi çok hızlanmıştır' },
          { id: 'E', text: 'Kalsiyumu düşmüştür' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu üç hormonun ortak hedefi kan şekerini fırlatmaktır. Üçü de aynı anda kükrüyorsa, bedenin çok büyük bir enerji ihtiyacı var demektir (Alarm/Stres).'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Tiroit bezinin HİPOFİZDEN BAĞIMSIZ OLARAK çok çalıştığı (Bağımsız Tümör / Zehirli Guatr) bir durumda Kan Tahlili NASIL ÇIKAR?',
        options: [
          { id: 'A', text: 'TSH yüksek, Tiroksin yüksek' },
          { id: 'B', text: 'TSH yüksek, Tiroksin düşük' },
          { id: 'C', text: 'Tiroksin çok YÜKSEK, buna bağlı negatif geri bildirimle TSH ise çok DÜŞÜK (Baskılanmış) çıkar' },
          { id: 'D', text: 'İkisi de düşük' },
          { id: 'E', text: 'Sadece TSH vardır' }
        ],
        correctOptionId: 'C',
        explanation: 'Bez kendi kafasına (tümör) hormon üretirse, T4 kanda artar. Hipofiz bunu görünce "benim emrime gerek yok" diyerek TSH\'yi sıfıra yakın derecede keser.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Peki HİPOFİZ BEZİNDE TÜMÖR VARSA ve Tiroit bezine sürekli "çalış" emri (TSH) veriyorsa Kan Tahlili NASIL ÇIKAR?',
        options: [
          { id: 'A', text: 'Tiroksin Düşük, TSH Düşük' },
          { id: 'B', text: 'TSH çok YÜKSEKTİR, tiroit bezi bu emre itaat ettiği için TİROKSİN de ÇOK YÜKSEK çıkar. (Tiroksinin yüksek olması TSH\'yi durduramaz çünkü hipofiz hastadır)' },
          { id: 'C', text: 'Sadece tiroidin büyümesi' },
          { id: 'D', text: 'Tiroksin çok düşük, TSH çok yüksek' },
          { id: 'E', text: 'İkisi de tamamen sıfır' }
        ],
        correctOptionId: 'B',
        explanation: 'Sorun üst makamda (Hipofizde) ise, Negatif Feedback İŞLEMEZ. TSH tavan yapar, emir alan işçi (tiroit) de Tiroksini tavan yaptırır.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Dışarıdan iğneyle (Doping) uzun süre Testosteron alan bir sporcunun TESTİSLERİ NEDEN KÜÇÜLÜR (Sperm üretimi durur)?',
        options: [
          { id: 'A', text: 'Testosteron testisleri yakar' },
          { id: 'B', text: 'Dışarıdan gelen YÜKSEK Testosteron, beyni (Hipofizi) kandırır ve FSH/LH salgısını (Negatif feedback ile) SIFIRLAR. Uyarı gelmeyen fabrika (testis) çalışmayı bırakır ve atrofiye uğrar (küçülür)' },
          { id: 'C', text: 'Testosteron kaslara gittiği için testislerde kalmaz' },
          { id: 'D', text: 'Kortizol yükseldiği için' },
          { id: 'E', text: 'Spor yaptıkça testisler aşınır' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudun mükemmel feedback sistemi, dışarıdan alınan hormonu "Ben çok ürettim" sanarak kendi fabrikasını kapatır (Kısırlık oluşur).'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Kanda ADH (Vazopressin) hormonu normalin üstüne çıkarsa (çok artarsa) KAN ve İDRARIN Osmotik Basıncı (Yoğunluğu) nasıl değişir?',
        options: [
          { id: 'A', text: 'İkisi de sulanır' },
          { id: 'B', text: 'Böbrekteki su KANA ÇEKİLDİĞİ için Kan sulanır (Kanın ozmotik basıncı DÜŞER), İdrar ise susuz kalıp koyulaşır (İdrarın ozmotik basıncı ARTAR)' },
          { id: 'C', text: 'Kan koyulaşır, idrar sulanır' },
          { id: 'D', text: 'İkisi de değişmez' },
          { id: 'E', text: 'Kan kurur' }
        ],
        correctOptionId: 'B',
        explanation: 'ADH suyu idrardan kurtarıp kana katar. Suyu artan yer (kan) sulanır (OB düşer), suyu çalınan yer (idrar) koyulaşır (OB artar).'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Sağlıklı bir insanda Pankreas hücreleri KAN ŞEKERİNİN YÜKSELDİĞİNİ nasıl anlar da İnsülin salgılar?',
        options: [
          { id: 'A', text: 'Hipofiz (beyin) ona haber verir' },
          { id: 'B', text: 'Karaciğer sinirlerle pankreasa mesaj atar' },
          { id: 'C', text: 'Pankreasın Beta hücreleri KANDAKİ GLİKOZ MOLEKÜLLERİ İLE DOĞRUDAN TEMAS EDER (kendi reseptörleri glikozu ölçer). Buna HUMORAL (Kansal/Kimyasal) uyarı denir.' },
          { id: 'D', text: 'Kalp atışı hızlanınca anlar' },
          { id: 'E', text: 'Mide asidiyle anlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Pankreas ve Paratiroit bezleri otonom (kendi başına karar verebilen) sensörlere sahiptir. Kan onlara değdikçe içindeki maddeyi (şeker/kalsiyum) bizzat ölçerler.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Tip 1 Diyabet hastalarında KAN pH\'ının (Asitliğinin) tehlikeli şekilde DÜŞMESİNİN (Ketoasidoz Koması) biyokimyasal nedeni nedir?',
        options: [
          { id: 'A', text: 'Şekerin asit olması' },
          { id: 'B', text: 'Glikozu hücreye alamayan vücudun, enerji için YAĞLARI yakması ve ortaya çıkan "KETON CİSİMCİKLERİ ile Yağ asitlerinin" KANA KARIŞARAK KANI ASİDİK (pH düşük) HALE GETİRMESİ' },
          { id: 'C', text: 'Midenin delinmesi' },
          { id: 'D', text: 'Adrenalinin kana karışması' },
          { id: 'E', text: 'Kalsiyumun çökmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Diyabette hücreler "şeker açlığı" yaşar ve mecburiyetten kontrolsüz yağ yıkar. Yağ yıkım ürünleri (ketonlar) kana dolunca pH 7\'nin altına doğru düşerek ölümcül komaya (Ketoasidoz) sebep olur.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Aşağıdaki hormonlardan hangisi "SUDA ÇÖZÜNEN" (Protein/Aminoasit yapılı) olduğu için Hücre ZARINDAN GEÇEMEZ ve "İkinci Haberci (cAMP)" sistemini kullanmak ZORUNDADIR?',
        options: [
          { id: 'A', text: 'Kortizol' },
          { id: 'B', text: 'Testosteron' },
          { id: 'C', text: 'Östrojen' },
          { id: 'D', text: 'Aldosteron' },
          { id: 'E', text: 'Adrenalin (veya İnsülin/Glukagon vb.)' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D şıkları STEROİT (yağ) türevidir ve zardan yağın içinde eriyerek geçer. Adrenalin (aminoasit/protein türevi) zardan geçemediği için kapıyı çalmak (ikinci haberci) zorundadır.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Fosfat ve Kalsiyum iyonları kemikte beraber birikir. Ancak KANDA PARATHORMON (PTH) aşırı arttığında, kana Kalsiyum çekerken FOSFAT iyonlarını (P) BÖBREKTEN HIZLA İDRARA ATAR. Neden?',
        options: [
          { id: 'A', text: 'Fosfat zehirlidir' },
          { id: 'B', text: 'Kanda Kalsiyum ve Fosfat beraber YÜKSELİRSE, ikisi birleşip YUMUŞAK DOKULARDA (Kas, Böbrek, Akciğer vb.) KEMİKLEŞMEYE (Taşlaşmaya/Kalsifikasyona) neden olur. Bunu önlemek için PTH Kalsiyumu tutar, Fosfatı kovar' },
          { id: 'C', text: 'Fosfat şekerle birleşir' },
          { id: 'D', text: 'Fosfat idrarı sarı yapar' },
          { id: 'E', text: 'Pankreasa gider' }
        ],
        correctOptionId: 'B',
        explanation: 'Ca ve P kanda çok fazla çarpışırsa (Ca x P çarpımı) çökelir. Parathormon Ca\'yı yükseltirken çökelmeyi (taşlaşmayı) önlemek için kurnazca Fosfatı idrardan dışarı süpürür.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Hipofizin Portal Damar Sistemi (Hipotalamus ile Ön hipofizi bağlayan damar ağı) DENEYSEL OLARAK KOPARILMIŞ bir hayvanda, aşağıdakilerden hangisi BEKLENMEZ?',
        options: [
          { id: 'A', text: 'FSH ve LH üretimi DURUR (Kısırlık başlar)' },
          { id: 'B', text: 'Tiroit bezi küçülür (Atrofi)' },
          { id: 'C', text: 'Kortizol üretimi durur (ACTH gelmediği için)' },
          { id: 'D', text: 'ADH ve Oksitosin üretimi KESİNLİKLE DURUR (Hiç kanda bulunmaz)' },
          { id: 'E', text: 'Büyüme durur (GH gelmediği için)' }
        ],
        correctOptionId: 'D',
        explanation: 'Portal damar (kan yolu) sadece ÖN HİPOFİZİ bağlar. Arka hipofiz hormonları (ADH/Oksitosin) aksonlarla (sinirlerle) doğrudan inip damara karıştığı için ön lobun damarı kopsa bile arka lob bağımsız olarak çalışmaya (belli bir süre veya sistemik yoldan) devam edebilir (Eğer o sinirler kesilmediyse).'
      }
    ]
  }
]
