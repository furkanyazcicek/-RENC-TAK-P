export default [
  {
    id: 'test-ogeler-1-kolay',
    title: 'Cümlenin Ögeleri 1 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-co-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yüklem yanlış gösterilmiştir?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede neşeyle (oynuyor).' },
          { id: 'B', text: 'Dün akşam izlediğimiz film çok (güzeldi).' },
          { id: 'C', text: 'Sınav sonuçları nihayet (belli oldu).' },
          { id: 'D', text: 'Eski arkadaşını görünce (mutlu) oldu.' },
          { id: 'E', text: 'Bu kitabın yazarını yakından (tanıyorum).' }
        ],
        correctOptionId: 'D',
        explanation: '"Mutlu olmak" yardımcı eylemle kurulan birleşik bir fiildir ve bölünemez. Yüklem "mutlu oldu" şeklinde bir bütün olarak alınmalıdır.'
      },
      {
        id: 'q-co-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne, bir sözcük grubundan oluşmuştur?',
        options: [
          { id: 'A', text: 'Ahmet, yarın sabah erkenden yola çıkacak.' },
          { id: 'B', text: 'Yaşlı kadın, merdivenleri yavaşça çıktı.' },
          { id: 'C', text: 'Kar, bütün gece hiç durmadan yağdı.' },
          { id: 'D', text: 'Kuşlar, güneye doğru göç etmeye başladı.' },
          { id: 'E', text: 'Ben, bu konuyu daha önce hiç düşünmemiştim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde özne "Yaşlı kadın"dır ve sıfat tamlaması şeklinde bir sözcük grubundan oluşmuştur. Diğer seçeneklerde özneler tek sözcüktür (Ahmet, Kar, Kuşlar, Ben).'
      },
      {
        id: 'q-co-1-3',
        difficulty: 'easy',
        questionText: '"Babam, doğum günümde bana kırmızı bir bisiklet aldı." cümlesinde aşağıdaki ögelerden hangisi yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtisiz Nesne' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'aldı (yüklem), kim aldı? Babam (özne), ne zaman aldı? doğum günümde (zarf tümleci), kime aldı? bana (dolaylı tümleç), ne aldı? kırmızı bir bisiklet (belirtisiz nesne). Cümlede belirtili nesne yoktur.'
      },
      {
        id: 'q-co-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtili nesne kullanılmıştır?',
        options: [
          { id: 'A', text: 'Adam pazardan elma, armut ve üzüm almış.' },
          { id: 'B', text: 'Bugün okulda yeni bir konu öğrendik.' },
          { id: 'C', text: 'Öğretmenimiz dünkü sınavın sonuçlarını açıkladı.' },
          { id: 'D', text: 'Dışarıda çok şiddetli bir rüzgâr esiyor.' },
          { id: 'E', text: 'Kardeşim sabahtan beri kitap okuyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "neyi açıkladı?" sorusunun cevabı olan "dünkü sınavın sonuçlarını" belirtili nesnedir. A, B ve E seçeneklerinde belirtisiz nesne vardır.'
      },
      {
        id: 'q-co-1-5',
        difficulty: 'easy',
        questionText: '"Uzun zamandır beklediğimiz misafirler nihayet geldi." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'geldi (Yüklem), kim geldi? Uzun zamandır beklediğimiz misafirler (Özne), ne zaman/nasıl geldi? nihayet (Zarf Tümleci). Sıralama: Özne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi sadece temel ögelerden (özne ve yüklem) oluşmuştur?',
        options: [
          { id: 'A', text: 'Güneş, dağların ardından yavaşça yükseliyordu.' },
          { id: 'B', text: 'Bu eski konak, mahallenin en güzel yapısıydı.' },
          { id: 'C', text: 'Çocuklar parkta akşama kadar oynadılar.' },
          { id: 'D', text: 'Kitabın son sayfasını heyecanla çevirdi.' },
          { id: 'E', text: 'Yarın sabah Ankara\'ya gideceğiz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "mahallenin en güzel yapısıydı" yüklem, "Bu eski konak" öznedir. Cümle sadece özne ve yüklemden oluşmuştur.'
      },
      {
        id: 'q-co-1-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sorulardan hangisi özneyi buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Dün seni arayan kimdi?' },
          { id: 'B', text: 'Bu hediyeyi sana kim aldı?' },
          { id: 'C', text: 'Toplantı nerede yapılacakmış?' },
          { id: 'D', text: 'Onu en son ne zaman gördün?' },
          { id: 'E', text: 'Masadaki kitabı kime vereceksin?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kim" sorusu eylemi yapanı, yani özneyi buldurmaya yöneliktir. A seçeneğinde soru sözcüğü ek-fiil alarak yüklem olmuştur.'
      },
      {
        id: 'q-co-1-8',
        difficulty: 'easy',
        questionText: '"Gözleri bozulduğu için ön sıraya oturdu." cümlesinde zarf tümleci hangi sorunun cevabıdır?',
        options: [
          { id: 'A', text: 'Nasıl?' },
          { id: 'B', text: 'Ne zaman?' },
          { id: 'C', text: 'Nereye?' },
          { id: 'D', text: 'Niçin?' },
          { id: 'E', text: 'Ne kadar?' }
        ],
        correctOptionId: 'D',
        explanation: 'oturdu (yüklem). Niçin oturdu? "Gözleri bozulduğu için" (zarf tümleci). Soru "niçin"dir.'
      },
      {
        id: 'q-co-1-9',
        difficulty: 'easy',
        questionText: '"Baharın gelişiyle doğa yeşile büründü." cümlesinde "yeşile" kelimesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'büründü (yüklem). Neye büründü? yeşile. Yönelme hâl eki (-e) aldığı ve "neye" sorusuna cevap verdiği için dolaylı tümleçtir (yer tamlayıcısı).'
      },
      {
        id: 'q-co-1-10',
        difficulty: 'easy',
        questionText: 'Türkçe cümle yapısında ögelerin kurallı dizilişi genellikle nasıldır?',
        options: [
          { id: 'A', text: 'Yüklem - Özne - Tümleçler' },
          { id: 'B', text: 'Özne - Tümleçler - Yüklem' },
          { id: 'C', text: 'Tümleçler - Özne - Yüklem' },
          { id: 'D', text: 'Özne - Yüklem - Tümleçler' },
          { id: 'E', text: 'Yüklem - Tümleçler - Özne' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurallı bir Türkçe cümlede temel diziliş Özne - Tümleçler (Nesne, Zarf T., Dolaylı T.) - Yüklem şeklindedir.'
      }
    ]
  },
  {
    id: 'test-ogeler-1-orta',
    title: 'Cümlenin Ögeleri 1 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-co-1-11',
        difficulty: 'medium',
        questionText: '"Kapının önündeki yaşlı çınar ağacı, yıllara meydan okurcasına dimdik ayakta duruyordu." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'yaşlı çınar ağacı' },
          { id: 'B', text: 'çınar ağacı' },
          { id: 'C', text: 'Kapının önündeki yaşlı çınar ağacı' },
          { id: 'D', text: 'Kapının önündeki' },
          { id: 'E', text: 'ağacı' }
        ],
        correctOptionId: 'C',
        explanation: 'ayakta duruyordu (yüklem). Ayakta duran kim/ne? "Kapının önündeki yaşlı çınar ağacı". Tamlamalar bölünemez, bu yüzden tamamı öznedir.'
      },
      {
        id: 'q-co-1-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ögelere ayırmada yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Köyün / muhtarı / herkesin derdini / dinlerdi.' },
          { id: 'B', text: 'Bugün / kütüphanede / yeni bir kitap / buldum.' },
          { id: 'C', text: 'Gözlerindeki / ışıltı / bana / umut / veriyordu.' },
          { id: 'D', text: 'Babam / bizi / sinemaya / götüreceğini / söyledi.' },
          { id: 'E', text: 'Eski / defterleri / karıştırdıkça / hüzünleniyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "umut veriyordu" birleşik fiildir ve anlamca kaynaşmış olduğu için yüklem bütün alınmalıdır (umut veriyordu). Öge ayrımı "Gözlerindeki ışıltı / bana / umut veriyordu." olmalıydı.'
      },
      {
        id: 'q-co-1-13',
        difficulty: 'medium',
        questionText: '"İçeri girer girmez hepimizi sevgiyle selamladı." cümlesiyle ilgili aşağıdakilerden hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Öznesi gizli öznedir.' },
          { id: 'B', text: 'Belirtili nesne kullanılmıştır.' },
          { id: 'C', text: 'Birden fazla zarf tümleci vardır.' },
          { id: 'D', text: 'Dolaylı tümleç vardır.' },
          { id: 'E', text: 'Yüklem türemiş bir fiildir.' }
        ],
        correctOptionId: 'D',
        explanation: 'selamladı (yüklem). Kim? O (gizli özne - A doğru). Neyi/Kimi? hepimizi (belirtili nesne - B doğru). Ne zaman? İçeri girer girmez (zarf T.), Nasıl? sevgiyle (zarf T. - C doğru). Cümlede dolaylı tümleç yoktur.'
      },
      {
        id: 'q-co-1-14',
        difficulty: 'medium',
        questionText: 'Türkçede vurgu genellikle yüklemden önceki ögededir. \nBuna göre aşağıdaki cümlelerin hangisinde "zaman" kavramı vurgulanmıştır?',
        options: [
          { id: 'A', text: 'Dün akşam eski fotoğraflara uzun uzun baktık.' },
          { id: 'B', text: 'Eski fotoğraflara uzun uzun dün akşam baktık.' },
          { id: 'C', text: 'Uzun uzun baktık dün akşam eski fotoğraflara.' },
          { id: 'D', text: 'Dün akşam uzun uzun eski fotoğraflara baktık.' },
          { id: 'E', text: 'Eski fotoğraflara dün akşam uzun uzun baktık.' }
        ],
        correctOptionId: 'B',
        explanation: 'Vurgulanan öge fiil cümlesinde yüklemden hemen öncekidir. Zaman vurgulanmak isteniyorsa, zaman zarfı yüklemin hemen önünde olmalıdır. B seçeneğinde "dün akşam" (zarf tümleci/zaman) yüklemden önce gelmiştir.'
      },
      {
        id: 'q-co-1-15',
        difficulty: 'medium',
        questionText: '"Ne" sorusu hem özneyi hem de belirtisiz nesneyi buldurabilir.\nBuna göre aşağıdaki cümlelerin hangisinde "ne" sorusunun cevabı öznedir?',
        options: [
          { id: 'A', text: 'Manavdan elma, armut ve muz aldık.' },
          { id: 'B', text: 'Çocuk sabahtan beri şiir okuyor.' },
          { id: 'C', text: 'Ağacın dalından büyük bir elma düştü.' },
          { id: 'D', text: 'Doğum gününde arkadaşına kitap hediye etti.' },
          { id: 'E', text: 'Dün akşam televizyonda güzel bir film izledim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde düşen ne? sorusunun cevabı "büyük bir elma"dır ve eylemi yapan olduğu için öznedir. Diğer seçeneklerde (biz ne aldık, çocuk ne okuyor vb.) eylemi yapan başkasıdır (gizli veya gerçek özne) ve "ne" sorusu belirtisiz nesneyi buldurur.'
      },
      {
        id: 'q-co-1-16',
        difficulty: 'medium',
        questionText: '"Ankara\'nın soğuk kış günlerinde, sıcacık bir çay içmek insana huzur verir." cümlesinin ögeleri sırasıyla hangisinde verilmiştir?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Belirtili Nesne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Dolaylı Tümleç - Belirtisiz Nesne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'huzur verir (yüklem). Huzur veren ne? sıcacık bir çay içmek (özne). Kime? insana (dolaylı tümleç). Ne zaman? Ankara\'nın soğuk kış günlerinde (zarf tümleci). Sıralama: ZT - Özne - DT - Yüklem.'
      },
      {
        id: 'q-co-1-17',
        difficulty: 'medium',
        questionText: '"Dışarıya" ve "dışarı" kelimeleri cümlede farklı ögeler olabilir.\nAşağıdakilerin hangisinde "dışarı" sözcüğü dolaylı tümleç görevindedir?',
        options: [
          { id: 'A', text: 'Hava soğuk olduğu için dışarı çıkmadık.' },
          { id: 'B', text: 'Sesi duyan herkes merakla dışarı koştu.' },
          { id: 'C', text: 'Lütfen çöpleri dışarı bırakın.' },
          { id: 'D', text: 'İçerisi çok havasızdı, biraz dışarıya çıkalım.' },
          { id: 'E', text: 'Dışarı bakınca kar yağdığını gördüm.' }
        ],
        correctOptionId: 'D',
        explanation: 'İçeri, dışarı, aşağı, yukarı gibi yer-yön bildiren sözcükler yalın hâlde olduklarında zarf tümleci; ismin yönelme hâl ekini (-a/-e) aldıklarında dolaylı tümleç olurlar. D seçeneğinde "dışarıya" kelimesi hâl eki aldığı için dolaylı tümleçtir.'
      },
      {
        id: 'q-co-1-18',
        difficulty: 'medium',
        questionText: '"Romanın kahramanı, olayların akışına kendini kaptırarak bütün şehri dolaştı." cümlesinde aşağıdaki sorulardan hangisinin cevabı yoktur?',
        options: [
          { id: 'A', text: 'Kim?' },
          { id: 'B', text: 'Neyi?' },
          { id: 'C', text: 'Nasıl?' },
          { id: 'D', text: 'Nereye?' },
          { id: 'E', text: 'Ne zaman?' }
        ],
        correctOptionId: 'E',
        explanation: 'dolaştı (yüklem). Kim dolaştı? Romanın kahramanı (Özne - Kim). Nereyi (veya Neyi)? bütün şehri (Belirtili Nesne - Neyi). Nasıl? olayların akışına kendini kaptırarak (Zarf T. - Nasıl). Ne zaman sorusunun cevabı cümlede yoktur.'
      },
      {
        id: 'q-co-1-19',
        difficulty: 'medium',
        questionText: '"Ahmet amca, mahallemizin en sevilen esnafı, dün sabah dükkânını kapatmış." cümlesinde ara söz hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'kapatmış (yüklem). Kapatan kim? Ahmet amca (özne). İki virgül arasındaki "mahallemizin en sevilen esnafı" bölümü Ahmet amcayı (özneyi) açıklamaktadır.'
      },
      {
        id: 'q-co-1-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zamirle sağlanmış ve bu zamir cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Bu güzel şiiri sana kim okudu?' },
          { id: 'B', text: 'Tatil için nereye gitmeyi planlıyorsunuz?' },
          { id: 'C', text: 'Bunca zamandır beni neden aramadın?' },
          { id: 'D', text: 'Marketten bize ne alacaksın?' },
          { id: 'E', text: 'Nasıl bir evde yaşamak istersin?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde soru "kim" zamiriyle sağlanmıştır ve eylemi (okudu) kimin yaptığını sorduğu için cümlede özne görevindedir. D seçeneğindeki "ne" zamiri ise nesne görevindedir.'
      }
    ]
  },
  {
    id: 'test-ogeler-1-zor',
    title: 'Cümlenin Ögeleri 1 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-co-1-21',
        difficulty: 'hard',
        questionText: '"Sanatçının, uzun yıllar süren sessizliğinin ardından yayımladığı bu eser, eleştirmenler tarafından tam not aldı." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Belirtisiz Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Belirtisiz Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'tam not aldı (yüklem - deyimleşmiş, ayrılmaz - veya aldı yüklem, tam not nesne). Ne aldı? tam not (belirtisiz nesne). Tam not alan ne? "Sanatçının... yayımladığı bu eser" (Özne). Kim tarafından? "eleştirmenler tarafından" (Zarf tümleci). O halde diziliş Özne - Zarf T. - Belirtisiz Nesne - Yüklem. D seçeneğidir.'
      },
      {
        id: 'q-co-1-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde cümlenin hiçbir ögesi olmayan (cümle dışı unsur) bir sözcük veya söz öbeği kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabahın erken saatlerinde yola çıktık.' },
          { id: 'B', text: 'Annesinin sözlerini dikkatle dinledi.' },
          { id: 'C', text: 'Arkadaşlar, lütfen sessiz olur musunuz?' },
          { id: 'D', text: 'Kitabın sonunu bir türlü tahmin edemedim.' },
          { id: 'E', text: 'Rüzgârın uğultusu gece boyunca devam etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Arkadaşlar" sözcüğü bir hitaptır. Hitaplar, bağlaçlar ve ünlemler cümlede herhangi bir öge görevi üstlenmezler, bunlara "cümle dışı unsur" (CDU) denir.'
      },
      {
        id: 'q-co-1-23',
        difficulty: 'hard',
        questionText: '"Edilgen çatılı fiillerin yüklem olduğu cümlelerde, eylemden etkilenen varlık özne görevini üstlenir ve buna sözde özne denir."\nBuna göre aşağıdakilerin hangisinde sözde özne vardır?',
        options: [
          { id: 'A', text: 'Bütün sokaklar festival için rengârenk süslendi.' },
          { id: 'B', text: 'Çocuk, annesine sarılmak için koştu.' },
          { id: 'C', text: 'Yağmur yağınca herkes saçak altlarına saklandı.' },
          { id: 'D', text: 'Rüzgâr şiddetini artırınca ağaçlar sallandı.' },
          { id: 'E', text: 'Öğrenciler, sınav sonuçlarını büyük bir heyecanla bekliyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem "süslendi"dir (süslemekten süslenmek, edilgen). Süslenen ne? "Bütün sokaklar". Sokaklar kendi kendine süslenemez, birileri tarafından süslenmiştir. Eylemden etkilenen ögedir, dolayısıyla sözde öznedir.'
      },
      {
        id: 'q-co-1-24',
        difficulty: 'hard',
        questionText: '"Derin bir nefes alıp masadaki kâğıtları yavaşça çantasına yerleştirdi." cümlesindeki fiilimsilerin (eylemsilerin) oluşturduğu yan cümlecik, temel cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Edat Tümleci' }
        ],
        correctOptionId: 'D',
        explanation: 'yerleştirdi (yüklem). Nasıl yerleştirdi? "Derin bir nefes alıp" (zarf-fiil grubu). Zarf-fiiller cümlede zarf tümleci görevinde bulunur. Yan cümlecik zarf tümlecidir.'
      },
      {
        id: 'q-co-1-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde öge dizilişi "Belirtili Nesne - Yüklem - Özne" şeklindedir?',
        options: [
          { id: 'A', text: 'Sardın etrafımı görünmez bir ağla.' },
          { id: 'B', text: 'Gördüm deniz dedikleri bin başlı ejderi.' },
          { id: 'C', text: 'Bekliyor bizi aydınlık yarınlar.' },
          { id: 'D', text: 'Terk etti beni vefasız gençliğim.' },
          { id: 'E', text: 'Söyledi bana en güzel yalanları.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: "Terk etti" (Yüklem). Kimi terk etti? "beni" (Belirtili Nesne). Kim terk etti? "vefasız gençliğim" (Özne). Diziliş: Nesne - Yüklem - Özne.'
      },
      {
        id: 'q-co-1-26',
        difficulty: 'hard',
        questionText: '"İnsanlığın yüzyıllar boyunca biriktirdiği tüm kültürel miras, teknolojik gelişmelerin gölgesinde kalmamalıdır." cümlesinin ögeleri aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Belirtisiz Nesne - Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: '"kalmamalıdır" Yüklem; Nerede kalmamalıdır? "teknolojik gelişmelerin gölgesinde" Dolaylı Tümleç. Ne kalmamalıdır? "İnsanlığın yüzyıllar boyunca biriktirdiği tüm kültürel miras" Özne. Sıralama: Özne - Dolaylı Tümleç - Yüklem.'
      },
      {
        id: 'q-co-1-27',
        difficulty: 'hard',
        questionText: '"Sabahları evden çıkmadan önce mutlaka bir fincan kahve içerdi." cümlesinde vurgulanan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zaman Zarfı' },
          { id: 'B', text: 'Durum Zarfı' },
          { id: 'C', text: 'Belirtisiz Nesne' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Özne' }
        ],
        correctOptionId: 'C',
        explanation: 'içerdi (yüklem). Ne içerdi? "bir fincan kahve" (belirtisiz nesne). Fiil cümlesinde vurgu yüklemden bir önceki ögededir. Yüklemden hemen önce belirtisiz nesne yer aldığı için vurgulanan öge odur.'
      },
      {
        id: 'q-co-1-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, nesneleri bağlama göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hem kitap okuyor hem de müzik dinliyordu.' },
          { id: 'B', text: 'Beni aradı ama konuyu tam anlatmadı.' },
          { id: 'C', text: 'Ahmet ve Mehmet yarınki maça gelecekmiş.' },
          { id: 'D', text: 'Masadaki dosyaları veya çekmecedeki evrakları bana getir.' },
          { id: 'E', text: 'Ne dünü hatırlıyordu ne bugünü yaşıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "veya" bağlacı, "Masadaki dosyaları" ile "çekmecedeki evrakları" (belirtili nesneler) ögelerini birbirine bağlamıştır.'
      },
      {
        id: 'q-co-1-29',
        difficulty: 'hard',
        questionText: '"Gençliğinin en güzel yıllarını geçirdiği bu şirin kasabaya, hayallerinin başladığı yere, gözyaşlarıyla veda etti." cümlesinde altı çizili veya iki virgül arasındaki bölüm hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Dolaylı Tümlecin' },
          { id: 'B', text: 'Öznenin' },
          { id: 'C', text: 'Belirtili Nesnenin' },
          { id: 'D', text: 'Zarf Tümlecinin' },
          { id: 'E', text: 'Yüklemin' }
        ],
        correctOptionId: 'A',
        explanation: 'veda etti (yüklem). Nereye veda etti? "Gençliğinin en güzel yıllarını geçirdiği bu şirin kasabaya" (Dolaylı Tümleç). "hayallerinin başladığı yere" ara sözü, kendinden önceki dolaylı tümlecin açıklayıcısı olarak kullanılmıştır.'
      },
      {
        id: 'q-co-1-30',
        difficulty: 'hard',
        questionText: '"Bir yazarın asıl başarısı, anlattığı hikâyenin okurun ruhunda derin izler bırakabilmesinde gizlidir." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'gizlidir' },
          { id: 'B', text: 'bırakabilmesinde gizlidir' },
          { id: 'C', text: 'derin izler bırakabilmesinde gizlidir' },
          { id: 'D', text: 'okurun ruhunda derin izler bırakabilmesinde gizlidir' },
          { id: 'E', text: 'anlattığı hikâyenin okurun ruhunda derin izler bırakabilmesinde gizlidir' }
        ],
        correctOptionId: 'A',
        explanation: 'Yüklem "gizlidir" sözcüğüdür (isimdir). Gizli olan ne? Bir yazarın asıl başarısı (Özne). Nerede gizlidir? anlattığı hikâyenin okurun ruhunda derin izler bırakabilmesinde (Dolaylı Tümleç). Sadece "gizlidir" sözcüğü yüklemdir.'
      }
    ]
  }
];
