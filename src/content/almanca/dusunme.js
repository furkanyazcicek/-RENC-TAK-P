/**
 * DRKOÇ — ALMANCA DÜŞÜNME ANTRENMANLARI
 * ==================================================================
 *
 * Bu bölümün amacı kelime ya da kural öğretmek değil; ÇEVİRİ ADIMINI
 * ORTADAN KALDIRMAKTIR.
 *
 * Türkçe konuşan bir öğrenci Almanca konuşurken çoğu zaman şunu yapar:
 * önce Türkçe cümleyi kurar, sonra kelime kelime çevirir, en son fiili
 * yerleştirmeye çalışır. Bu yol üç sorun üretir: yavaştır, yorucudur ve
 * Almancanın kendi cümle sırasına (fiil ikinci, mastar sonda) aykırıdır.
 *
 * Buradaki alıştırmaların ortak özelliği şudur: öğrenciye TÜRKÇE CÜMLE
 * VERİLMEZ. Durum, niyet, tanım ya da sahne verilir; öğrenci doğrudan
 * Almanca üretmek zorunda kalır. Hiçbir görevde "şu cümleyi çevir" komutu
 * yoktur.
 *
 * ALMANCAYA ÖZGÜ EK YÜK: fiilin yeri. Bu yüzden "Parça parça büyütme"
 * antrenmanı burada İngilizcedekinden daha kritiktir — öğrenci cümleyi
 * uzatırken fiili ikinci sırada TUTMAYI öğrenir.
 */

export const ANTRENMANLAR = [
  {
    id: 'ant-durum-a1',
    seviye: 'A1',
    ad: 'Durumdan ifadeye',
    aciklama: 'Bir sahne göreceksin. Türkçe cümle yok. O anda Almanca ne söylenir, onu yaz.',
    neden:
      'Türkçe cümle olmadığında beyin çeviri yapamaz; doğrudan duruma uygun kalıbı aramak zorunda kalır. Almanca düşünmenin ilk basamağı budur.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-d-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Otobüste birinin ayağına bastın.',
        kabul: ['Entschuldigung', 'Entschuldigung!', 'Tut mir leid', 'Es tut mir leid', 'Oh, Entschuldigung'],
        ornekCevap: 'Entschuldigung! / Das tut mir leid.',
      },
      {
        id: 'ant-d-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Bir mağazadasın. Bir tişörtün fiyatını öğrenmek istiyorsun.',
        kabul: [
          'Was kostet das', 'Wie viel kostet das', 'Was kostet das T-Shirt',
          'Wie viel kostet das T-Shirt', 'Was kostet es',
        ],
        ornekCevap: 'Was kostet das?',
        tuzaklar: [
          {
            kod: 'preis-ist-was',
            desen: /was\s+ist\s+der\s+preis/i,
            baslik: 'Anlaşılır ama doğal değil',
            aciklama: '"Was ist der Preis?" dilbilgisel olarak yanlış değildir ama günlük konuşmada neredeyse hiç duyulmaz. Türkçedeki "fiyatı ne" kalıbının birebir aktarımıdır.',
            dogru: 'Was kostet das?',
            mikro: { yonerge: 'Bir ayakkabının fiyatını sor.', kabul: ['Was kostet das', 'Wie viel kostet das', 'Was kosten die Schuhe'] },
          },
        ],
      },
      {
        id: 'ant-d-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Öğretmen bir şey söyledi ama duyamadın.',
        kabul: [
          'Wie bitte', 'Wie bitte?', 'Können Sie das bitte wiederholen',
          'Kannst du das bitte wiederholen', 'Entschuldigung, wie bitte',
          'Noch einmal, bitte', 'Können Sie das bitte noch einmal sagen',
        ],
        ornekCevap: 'Wie bitte? Können Sie das bitte wiederholen?',
        tuzaklar: [
          {
            kod: 'was-kaba',
            desen: /^was\?*$/i,
            baslik: '"Was?" tek başına kaba durur',
            aciklama: 'Türkçede "Ne?" demek sıradanken, Almancada tek kelimelik "Was?" sert ve kaba algılanır. Nazik biçimi "Wie bitte?"dir.',
            dogru: 'Wie bitte?',
            mikro: { yonerge: 'Duymadığını nazikçe belirt.', kabul: ['Wie bitte'] },
          },
        ],
      },
      {
        id: 'ant-d-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Arkadaşın sana bir hediye verdi. Çok beğendin.',
        kabul: [
          'Vielen Dank', 'Danke schön', 'Vielen Dank, das ist toll',
          'Danke, das gefällt mir sehr', 'Das gefällt mir sehr', 'Vielen Dank!',
        ],
        ornekCevap: 'Vielen Dank! Das gefällt mir sehr.',
      },
      {
        id: 'ant-d-5',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'DURUM → İFADE',
        durum: 'Yeni bir sınıfa girdin ve yanındaki boş sandalyeye oturmak istiyorsun.',
        kabul: [
          'Ist dieser Platz frei', 'Entschuldigung, ist dieser Platz frei',
          'Ist hier frei', 'Darf ich hier sitzen', 'Kann ich hier sitzen',
          'Entschuldigung, ist hier frei',
        ],
        ornekCevap: 'Entschuldigung, ist dieser Platz frei?',
      },
    ],
  },
  {
    id: 'ant-niyet-a1',
    seviye: 'A1',
    ad: 'Niyetten kalıba',
    aciklama: 'Ne YAPMAK istediğini söyleyeceğim. Sen o işi yapan Almanca kalıbı seç.',
    neden:
      'Dil kelime değil İŞLEV taşır. "Rica etmek", "izin istemek", "reddetmek" ayrı kalıplardır. İşlevi tanıyan öğrenci, kelime bilmediğinde bile iletişimi sürdürür.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-n-1',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'Bu işi hangi kalıp yapar?',
        soru: 'Öğretmeninden nazikçe yardım istemek istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Können Sie mir bitte helfen?' },
          { id: 'b', metin: 'Sie helfen mir.' },
          { id: 'c', metin: 'Ich will Hilfe.' },
          { id: 'd', metin: 'Hilf mir!' },
        ],
        dogruId: 'a',
        secenekNotu: {
          b: 'Bu bir bildirim cümlesi, rica değil. Fiil ikinci sırada ama soru yok.',
          c: '"Ich will" Almancada oldukça sert durur; çocuk dili gibi algılanır.',
          d: 'Emir kipi ve "du" biçimi — öğretmene karşı fazla samimi ve emredici.',
        },
        aciklama: 'Nazik rica "Können Sie…?" ile kurulur ve "bitte" nezaketi tamamlar.',
      },
      {
        id: 'ant-n-2',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Bu işi hangi kalıp yapar?',
        soru: 'Bir teklifi kibarca reddetmek istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Nein.' },
          { id: 'b', metin: 'Nein, danke. Sehr nett von dir.' },
          { id: 'c', metin: 'Ich will nicht.' },
          { id: 'd', metin: 'Das ist schlecht.' },
        ],
        dogruId: 'b',
        secenekNotu: {
          a: 'Tek kelimelik "Nein" Almancada da sert durur.',
          c: 'Doğrudan ve kaba; istememe sebebi yumuşatılmamış.',
          d: 'Teklifi eleştirmiş olursun, reddetmiş değil.',
        },
        aciklama: 'Almancada red, teşekkürle yumuşatılır: "Nein, danke."',
      },
      {
        id: 'ant-n-3',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Bu işi hangi kalıp yapar?',
        soru: 'Bir kelimenin Almancasını sormak istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Wie sagt man das auf Deutsch?' },
          { id: 'b', metin: 'Was ist das Deutsch?' },
          { id: 'c', metin: 'Wie heißt Deutsch?' },
          { id: 'd', metin: 'Sag mir Deutsch.' },
        ],
        dogruId: 'a',
        secenekNotu: {
          b: 'Kelime kelime çeviri izi taşıyor; Almancada böyle bir kalıp yok.',
          c: 'Anlamsız: "Almanca ne ad taşıyor?" demiş oluyorsun.',
          d: 'Emir kipi ve eksik yapı.',
        },
        aciklama: 'Kalıbı olduğu gibi ezberle: "Wie sagt man … auf Deutsch?"',
      },
      {
        id: 'ant-n-4',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Bu işi hangi kalıp yapar?',
        soru: 'Bir şeyi yapmak için izin istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Darf ich das Fenster öffnen?' },
          { id: 'b', metin: 'Kann ich das Fenster öffnen?' },
          { id: 'c', metin: 'Ich öffne das Fenster.' },
          { id: 'd', metin: 'Muss ich das Fenster öffnen?' },
        ],
        dogruId: 'a',
        secenekNotu: {
          b: 'Günlük dilde kabul edilir ama asıl anlamı "yapabilir miyim (gücüm yeter mi)"dir. İzin için "dürfen" daha doğrudur.',
          c: 'İzin istemiyorsun, bildiriyorsun.',
          d: '"Zorunda mıyım" demiş olursun — tam tersi anlam.',
        },
        aciklama: 'İzin "dürfen" ile istenir; yetenek "können" ile sorulur. Türkçede ikisi de "-ebilir miyim" olduğu için karışır.',
      },
    ],
  },
  {
    id: 'ant-tanim-a1',
    seviye: 'A1',
    ad: 'Tanımdan kelimeye',
    aciklama: 'Almanca bir tanım vereceğim. Türkçe karşılık YOK. Tanıma uyan kelimeyi yaz.',
    neden:
      'Kelimeyi Türkçe karşılığıyla değil, ANLAMIYLA eşleştirmek kalıcı öğrenmenin temelidir. Bu, sözlüğü Almanca-Almanca kullanmanın ilk adımıdır.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-t-1',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'Der Ort, wo Schüler lernen. Man geht dorthin am Morgen.',
        ilkHarf: 'S',
        kabul: ['Schule', 'die Schule'],
        ornekCevap: 'die Schule',
      },
      {
        id: 'ant-t-2',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'Ein Tier mit vier Beinen. Es lebt oft im Haus und es bellt.',
        ilkHarf: 'H',
        kabul: ['Hund', 'der Hund', 'ein Hund'],
        ornekCevap: 'der Hund',
      },
      {
        id: 'ant-t-3',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'Man trinkt es. Es ist klar und hat keine Farbe. Der Mensch braucht es jeden Tag.',
        ilkHarf: 'W',
        kabul: ['Wasser', 'das Wasser'],
        ornekCevap: 'das Wasser',
      },
      {
        id: 'ant-t-4',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'Der Ort, wo Züge ankommen und abfahren. Man kauft dort Fahrkarten.',
        ilkHarf: 'B',
        kabul: ['Bahnhof', 'der Bahnhof'],
        ornekCevap: 'der Bahnhof',
      },
      {
        id: 'ant-t-5',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'zor',
        yonerge: 'TANIM → KELİME',
        tanim: 'Das Papier im Restaurant. Darauf steht, wie viel man bezahlen muss.',
        ilkHarf: 'R',
        kabul: ['Rechnung', 'die Rechnung'],
        ornekCevap: 'die Rechnung',
      },
    ],
  },
  {
    id: 'ant-dogallastirma-a2',
    seviye: 'A2',
    ad: 'Doğallaştırma',
    aciklama: 'Aşağıdaki cümleler DOĞRU ama yapay. Hangisi doğal Almanca, onu seç.',
    neden:
      'Dilbilgisi doğru olan her cümle doğal değildir. Ana dili Almanca olan biri aynı şeyi başka türlü söyler. Bu farkı görmek, "kitap Almancası"ndan çıkmanın yoludur.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-dg-1',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Futbol oynamayı sevdiğini söylüyorsun.',
        secenekler: [
          { id: 'a', metin: 'Ich liebe Fußball zu spielen.', dogal: false, neden: 'Türkçedeki "oynamayı severim" kalıbının birebir aktarımı. Almancada "lieben" insanlar için kullanılır ve bu yapı kurulmaz.' },
          { id: 'b', metin: 'Ich spiele gern Fußball.', dogal: true, neden: 'Almancanın kendi yolu: eylemi sevmek fiile eklenen "gern" ile anlatılır.' },
        ],
      },
      {
        id: 'ant-dg-2',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Üşüdüğünü söylüyorsun.',
        secenekler: [
          { id: 'a', metin: 'Ich bin kalt.', dogal: false, neden: 'Bu cümle "ben soğuk bir insanım" demektir. Türkçedeki "üşüyorum"un birebir çevirisi burada anlamı değiştirir.' },
          { id: 'b', metin: 'Mir ist kalt.', dogal: true, neden: 'Duygu ve beden hâlleri Almancada Dativ ile taşınır: mir ist kalt / warm / schlecht.' },
        ],
      },
      {
        id: 'ant-dg-3',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Birinin adını soruyorsun.',
        secenekler: [
          { id: 'a', metin: 'Was ist dein Name?', dogal: false, neden: 'Dilbilgisi doğru ama kitabidir; günlük konuşmada nadiren duyulur. Türkçedeki "Adın ne?" kalıbının izini taşır.' },
          { id: 'b', metin: 'Wie heißt du?', dogal: true, neden: 'Almancanın doğal sorusu fiille kurulur. Resmî biçimi "Wie heißen Sie?"dir.' },
        ],
      },
      {
        id: 'ant-dg-4',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Bir karar verdiğini söylüyorsun.',
        secenekler: [
          { id: 'a', metin: 'Ich mache eine Entscheidung.', dogal: false, neden: 'Türkçedeki "karar yapmak/vermek" kalıbından geliyor. Almancada "machen" bu işi yapmaz.' },
          { id: 'b', metin: 'Ich treffe eine Entscheidung.', dogal: true, neden: 'Almancada karar "treffen" fiiliyle alınır. Fiil-isim ikilileri kalıp olarak öğrenilir.' },
        ],
      },
      {
        id: 'ant-dg-5',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Bir soru sormak istediğini belirtiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Ich möchte eine Frage machen.', dogal: false, neden: '"Soru yapmak" Türkçeden gelen bir kalıptır.' },
          { id: 'b', metin: 'Ich möchte eine Frage stellen.', dogal: true, neden: 'Almancada soru "stellen" ile sorulur — kelime doğru, eşdizim de doğru olmalı.' },
        ],
      },
    ],
  },
  {
    id: 'ant-genisletme-a1',
    seviye: 'A1',
    ad: 'Parça parça büyütme',
    aciklama: 'Kısa bir cümleyle başla, her adımda bir bilgi ekle. Fiili her seferinde İKİNCİ sırada tut.',
    neden:
      'Almancada uzun cümle kurmanın zorluğu kelime değil, YERLEŞTİRMEDİR. Cümleyi adım adım büyütmek, fiilin yerini bozmadan bilgi eklemeyi öğretir. Bu, Almanca konuşurken donmayı bitiren tek alıştırmadır.',
    sure: 7,
    alistirmalar: [
      {
        id: 'ant-g-1',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'kolay',
        yonerge: 'Cümleyi adım adım büyüt.',
        adimlar: [
          { yonerge: 'Okula gittiğini yaz.', kabul: ['Ich gehe zur Schule', 'Ich gehe in die Schule'] },
          { yonerge: 'Şimdi "her gün" ekle (zaman, yerden ÖNCE).', kabul: ['Ich gehe jeden Tag zur Schule', 'Ich gehe jeden Tag in die Schule'] },
          { yonerge: 'Şimdi cümleyi "Jeden Tag" ile başlat (fiili ikinci sırada tut!).', kabul: ['Jeden Tag gehe ich zur Schule', 'Jeden Tag gehe ich in die Schule'] },
        ],
        aciklama: 'Zaman ifadesi başa geçince özne fiilin ARKASINA düşer. Fiil her hâlükârda ikinci sıradadır.',
      },
      {
        id: 'ant-g-2',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'orta',
        yonerge: 'Cümleyi adım adım büyüt.',
        adimlar: [
          { yonerge: 'Almanca öğrendiğini yaz.', kabul: ['Ich lerne Deutsch'] },
          { yonerge: '"iki yıldır" ekle.', kabul: ['Ich lerne seit zwei Jahren Deutsch', 'Ich lerne Deutsch seit zwei Jahren'] },
          { yonerge: 'Şimdi "çünkü hoşuma gidiyor" ekle (weil ile — fiil sona!).', kabul: [
            'Ich lerne seit zwei Jahren Deutsch, weil es mir gefällt',
            'Ich lerne seit zwei Jahren Deutsch weil es mir gefällt',
            'Ich lerne Deutsch seit zwei Jahren, weil es mir gefällt',
          ] },
        ],
        aciklama: 'Ana cümlede fiil ikinci, YAN cümlede sondadır. Almancanın iki ayrı sırası burada yan yana görünür.',
      },
      {
        id: 'ant-g-3',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'zor',
        yonerge: 'Cümleyi adım adım büyüt.',
        adimlar: [
          { yonerge: 'Kalktığını yaz (aufstehen — fiili ayır!).', kabul: ['Ich stehe auf'] },
          { yonerge: '"saat yedide" ekle.', kabul: ['Ich stehe um sieben Uhr auf', 'Ich stehe um 7 Uhr auf'] },
          { yonerge: 'Şimdi "hafta içi" ile başlat.', kabul: [
            'Unter der Woche stehe ich um sieben Uhr auf',
            'Unter der Woche stehe ich um 7 Uhr auf',
            'In der Woche stehe ich um sieben Uhr auf',
          ] },
        ],
        aciklama: 'Ayrılabilen fiilde ön ek cümlenin sonunda kalır; araya giren her yeni bilgi ikisinin ARASINA girer. Buna cümle çerçevesi (Satzklammer) denir.',
      },
    ],
  },
  {
    id: 'ant-hizli-a1',
    seviye: 'A1',
    ad: 'Hızlı tepki',
    aciklama: 'Soruyu okur okumaz cevap ver. Düşünme, çevirme — kalıptan git.',
    neden:
      'Gerçek konuşmada cümle kurmak için üç saniyen var. Hızlı tepki alıştırması, en sık sorulan soruların cevabını otomatikleştirir; böylece beynin asıl işe — anlama — odaklanır.',
    sure: 4,
    alistirmalar: [
      {
        id: 'ant-h-1',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'Hemen cevapla.',
        soru: 'Wie geht es dir?',
        kabul: ['Gut danke', 'Gut, danke', 'Mir geht es gut', 'Es geht', 'Danke gut', 'Sehr gut danke', 'Nicht so gut'],
        ornekCevap: 'Danke, gut. Und dir?',
      },
      {
        id: 'ant-h-2',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'Hemen cevapla.',
        soru: 'Woher kommst du?',
        kabul: ['Ich komme aus der Türkei', 'Aus der Türkei', 'Ich komme aus', 'Ich komme aus der Tuerkei'],
        ornekCevap: 'Ich komme aus der Türkei.',
      },
      {
        id: 'ant-h-3',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hemen cevapla.',
        soru: 'Was machst du gern in deiner Freizeit?',
        kabul: ['Ich spiele gern', 'Ich lese gern', 'Ich höre gern Musik', 'Ich treffe gern meine Freunde', 'Ich mache gern Sport'],
        ornekCevap: 'Ich spiele gern Fußball und ich höre gern Musik.',
      },
      {
        id: 'ant-h-4',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hemen cevapla.',
        soru: 'Warum lernst du Deutsch?',
        kabul: ['Weil ich', 'Ich lerne Deutsch, weil', 'Ich lerne Deutsch weil', 'Für die Schule', 'Für meine Zukunft'],
        ornekCevap: 'Ich lerne Deutsch, weil ich in Deutschland studieren möchte.',
        tuzaklar: [
          {
            kod: 'weil-fiil-yeri',
            desen: /weil\s+(ich|er|sie|es|wir)\s+(bin|ist|habe|hat|will|kann|möchte|moechte|lerne)\b/i,
            baslik: 'weil cümlesinde fiil sonda değil',
            aciklama: 'weil bağlacından sonra çekimli fiil cümlenin SONUNA gider. Türkçede yüklem zaten sonda olduğu için bu kural sana yakındır — ama ana cümlenin sırası araya karışıyor.',
            dogru: 'Ich lerne Deutsch, weil ich in Deutschland studieren möchte.',
            mikro: { yonerge: '"Yorgun olduğum için evde kalıyorum." cümlesini weil ile yaz.', kabul: ['Ich bleibe zu Hause, weil ich müde bin', 'Ich bleibe zu Hause weil ich müde bin'] },
          },
        ],
      },
    ],
  },
  {
    id: 'ant-sahne-a2',
    seviye: 'A2',
    ad: 'Sahne betimleme',
    aciklama: 'Bir sahne anlatacağım. Gördüklerini BASİT Almancayla anlat. Zor kelime arama.',
    neden:
      'Bilmediğin kelimeyi aramak konuşmayı durdurur. Bildiğin kelimelerle anlatmak ise akıcılığı korur. Bu beceriye "başka yoldan söyleme" denir ve gerçek dil kullanımının belkemiğidir.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-s-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'SAHNE → EN AZ İKİ CÜMLE',
        durum: 'Bir parkta iki çocuk top oynuyor, bir kadın bankta oturup kitap okuyor.',
        kabul: ['Zwei Kinder spielen', 'Im Park spielen', 'Die Kinder spielen', 'Eine Frau liest'],
        ornekCevap: 'Im Park spielen zwei Kinder Fußball. Eine Frau sitzt auf einer Bank und liest ein Buch.',
        yaklasimNotu: 'Sahne betimlerken "Es gibt…" ve "Ich sehe…" kalıpları işini kolaylaştırır.',
      },
      {
        id: 'ant-s-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'SAHNE → EN AZ İKİ CÜMLE',
        durum: 'Bir markette kasada uzun bir kuyruk var. Yaşlı bir adam poşetlerini taşımakta zorlanıyor.',
        kabul: ['Im Supermarkt', 'An der Kasse', 'Ein alter Mann', 'Viele Menschen warten'],
        ornekCevap: 'Im Supermarkt warten viele Menschen an der Kasse. Ein alter Mann trägt schwere Taschen und braucht Hilfe.',
        yaklasimNotu: 'Kelimeyi bilmiyorsan tarif et: "Tüte" bilmiyorsan "die Tasche" de. İletişim durmasın.',
      },
    ],
  },
]

/**
 * İÇ SES GÖREVLERİ — uygulama dışında, gün içinde yapılacak çalışmalar.
 *
 * Bunlar puanlanmaz ve kontrol edilmez; amaç öğrencinin iç sesinin bir
 * kısmını Almancaya taşımaktır. Ekran bunları hatırlatıcı olarak sunar.
 */
export const IC_SES_GOREVLERI = [
  {
    id: 'ic-1',
    seviye: 'A1',
    baslik: 'Beş nesne ve artikelleri',
    gorev: 'Bulunduğun odaya bak. Gördüğün beş nesneyi ARTİKELİYLE birlikte içinden söyle: "der Tisch, das Fenster, die Tür…". Bilmediğin varsa not al, sonra bak.',
    sure: '2 dakika',
    neden: 'Almancada nesneyi artikelsiz adlandırmak yarım öğrenmedir. Artikeli kelimeyle birlikte söylemek, ikisini tek parça hâline getirir.',
  },
  {
    id: 'ic-2',
    seviye: 'A1',
    baslik: 'Sabah anlatımı',
    gorev: 'Sabah kalktığından beri yaptığın üç şeyi Almanca içinden anlat: "Ich bin aufgestanden. Ich habe gefrühstückt. Ich bin zur Schule gegangen."',
    sure: '2 dakika',
    neden: 'Kendi gününü anlatmak ezberlenmiş cümle değil gerçek üretimdir. Ayrıca haben/sein seçimini bağlamda çalıştırır.',
  },
  {
    id: 'ic-3',
    seviye: 'A1',
    baslik: 'Saat kontrolü',
    gorev: 'Gün içinde saate her baktığında saati Almanca içinden söyle: "Es ist Viertel nach drei."',
    sure: 'Gün boyu',
    neden: 'Saat söylemek A1\'in en çok geçen ama en çok unutulan becerisidir. Günde on kez tekrarlanınca kendiliğinden yerleşir.',
  },
  {
    id: 'ic-4',
    seviye: 'A2',
    baslik: 'Yorum cümlesi',
    gorev: 'Gün içinde bir şey hoşuna gittiğinde ya da gitmediğinde tepkini Almanca düşün: "Das war super." / "Das gefällt mir nicht."',
    sure: 'Gün boyu',
    neden: 'Duygusal tepkiler en otomatik cümlelerdir. Onları Almancaya çevirmek, iç sesin bir kısmını Almancaya taşır.',
  },
  {
    id: 'ic-5',
    seviye: 'A2',
    baslik: 'Fiil ikinci antrenmanı',
    gorev: 'Yolda yürürken üç cümle kur ve hepsini bir zaman ifadesiyle BAŞLAT: "Heute gehe ich…", "Morgen treffe ich…", "Am Wochenende spiele ich…"',
    sure: '3 dakika',
    neden: 'Fiilin ikinci sırada kalması Almancanın en kritik kuralıdır ve yalnızca tekrarla otomatikleşir. Bu görev tam olarak o kuralı hedefler.',
  },
  {
    id: 'ic-6',
    seviye: 'A2',
    baslik: 'Sessiz anlatım',
    gorev: 'İzlediğin bir videoyu ya da okuduğun bir haberi üç cümleyle Almanca özetle — sesli değil, içinden.',
    sure: '3 dakika',
    neden: 'Özetlemek, anladığını kendi cümlelerine dönüştürmektir; çevirmekten farklıdır ve daha kalıcıdır.',
  },
]
