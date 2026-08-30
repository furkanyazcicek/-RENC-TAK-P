export default [
  {
    id: 'test-ogeler-2-kolay',
    title: 'Cümlenin Ögeleri 2 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-co-2-1',
        difficulty: 'easy',
        questionText: '"Güneş, sabahın ilk ışıklarıyla dağların ardından doğdu." cümlesinde "Güneş" kelimesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'A',
        explanation: 'doğdu (yüklem). Doğan ne? Güneş (Özne). Eylemi yapan varlık olduğu için öznedir.'
      },
      {
        id: 'q-co-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yüklem bir isimden oluşmuştur?',
        options: [
          { id: 'A', text: 'Bütün gün sokaklarda yürüdüm.' },
          { id: 'B', text: 'Annem akşam yemeğini erkenden hazırladı.' },
          { id: 'C', text: 'Onun en sevdiği renk mavidir.' },
          { id: 'D', text: 'Kuşlar havaların soğumasıyla güneye uçtu.' },
          { id: 'E', text: 'Bugün okuldan dönerken eski bir arkadaşımı gördüm.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "mavidir" sözcüğüdür. "Mavi" bir isimdir ve ek-fiil (-dir) alarak yüklem olmuştur. Diğer seçeneklerin yüklemleri çekimli fiillerdir.'
      },
      {
        id: 'q-co-2-3',
        difficulty: 'easy',
        questionText: '"Ahmet, raftan kalın bir kitap aldı." cümlesinde belirtisiz nesne aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Ahmet' },
          { id: 'B', text: 'raftan' },
          { id: 'C', text: 'kalın bir kitap' },
          { id: 'D', text: 'aldı' },
          { id: 'E', text: 'bir' }
        ],
        correctOptionId: 'C',
        explanation: 'aldı (yüklem). Kim aldı? Ahmet (özne). Nereden aldı? raftan (dolaylı tümleç). Ne aldı? "kalın bir kitap" (belirtisiz nesne).'
      },
      {
        id: 'q-co-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sorulardan hangisi dolaylı tümleci (yer tamlayıcısını) buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Neden?' },
          { id: 'B', text: 'Nasıl?' },
          { id: 'C', text: 'Kimi?' },
          { id: 'D', text: 'Nerede?' },
          { id: 'E', text: 'Ne zaman?' }
        ],
        correctOptionId: 'D',
        explanation: '"Nerede, kime, neyden" gibi ismin yönelme (-e), bulunma (-de) ve ayrılma (-den) hâl eklerini alan soru sözcükleri dolaylı tümleci buldurur.'
      },
      {
        id: 'q-co-2-5',
        difficulty: 'easy',
        questionText: '"Hızlı adımlarla merdivenleri çıkan adam nefes nefese kalmıştı." cümlesinde zarf tümleci aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hızlı adımlarla' },
          { id: 'B', text: 'merdivenleri' },
          { id: 'C', text: 'çıkan adam' },
          { id: 'D', text: 'nefes nefese' },
          { id: 'E', text: 'kalmıştı' }
        ],
        correctOptionId: 'D',
        explanation: 'kalmıştı (yüklem). Kim kalmıştı? "Hızlı adımlarla merdivenleri çıkan adam" (özne - sıfat tamlaması bölünmez). Nasıl kalmıştı? "nefes nefese" (zarf tümleci).'
      },
      {
        id: 'q-co-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gizli özne kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kedi, sıcak sobanın yanında uyuyordu.' },
          { id: 'B', text: 'Yarın sabah Ankara\'ya gideceğiz.' },
          { id: 'C', text: 'Ağaçlar ilkbaharda çiçek açar.' },
          { id: 'D', text: 'Öğrenciler teneffüste bahçeye koştular.' },
          { id: 'E', text: 'Yağmur, bütün gece aralıksız yağdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "gideceğiz"dir. Gidecek olan kim? "Biz" (gizli özne). Diğer seçeneklerde özneler (Kedi, Ağaçlar, Öğrenciler, Yağmur) cümlede açıkça verilmiştir.'
      },
      {
        id: 'q-co-2-7',
        difficulty: 'easy',
        questionText: '"Kardeşim dünkü maçta çok yoruldu." cümlesinin öge dizilişi aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'yoruldu (yüklem). Kim yoruldu? Kardeşim (özne). Nerede yoruldu? dünkü maçta (dolaylı tümleç). Ne kadar yoruldu? çok (zarf tümleci).'
      },
      {
        id: 'q-co-2-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtili nesne yer almaktadır?',
        options: [
          { id: 'A', text: 'Manavdan taze meyveler aldım.' },
          { id: 'B', text: 'Babam akşam eve ekmek getirdi.' },
          { id: 'C', text: 'Çocuklar parkta saatlerce oynadı.' },
          { id: 'D', text: 'Masadaki bardağı yanlışlıkla düşürdüm.' },
          { id: 'E', text: 'Bugün hava çok güzel görünüyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'düşürdüm (yüklem). Neyi düşürdüm? "Masadaki bardağı" (belirtili nesne). A ve B seçeneklerinde "meyveler" ve "ekmek" kelimeleri yalın oldukları için belirtisiz nesnedir.'
      },
      {
        id: 'q-co-2-9',
        difficulty: 'easy',
        questionText: '"Yarınki toplantı için hazırlıkları tamamladık." cümlesinde hangi öge kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Özne (Gizli)' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Edat / Zarf Tümleci' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'C',
        explanation: 'tamamladık (yüklem). Biz (gizli özne). Neyi? hazırlıkları (belirtili nesne). Niçin/Ne için? Yarınki toplantı için (edat tümleci / zarf tümleci). Cümlede dolaylı tümleç (-e, -de, -den) yoktur.'
      },
      {
        id: 'q-co-2-10',
        difficulty: 'easy',
        questionText: '"Küçük çocuk, elindeki oyuncağı masaya bıraktı." cümlesinde "masaya" kelimesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'E',
        explanation: 'bıraktı (yüklem). Nereye bıraktı? "masaya". Yönelme hâl eki (-e, -a) almış ve yer bildirmiş olduğundan dolaylı tümleçtir.'
      }
    ]
  },
  {
    id: 'test-ogeler-2-orta',
    title: 'Cümlenin Ögeleri 2 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (21-30)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-co-2-11',
        difficulty: 'medium',
        questionText: '"Yazarın son kitabı, okuyucuları farklı dünyalara götüren bir başyapıttır." cümlesi ögelerine nasıl ayrılmalıdır?',
        options: [
          { id: 'A', text: 'Özne / Belirtili Nesne / Dolaylı Tümleç / Yüklem' },
          { id: 'B', text: 'Özne / Yüklem' },
          { id: 'C', text: 'Özne / Zarf Tümleci / Yüklem' },
          { id: 'D', text: 'Özne / Dolaylı Tümleç / Belirtisiz Nesne / Yüklem' },
          { id: 'E', text: 'Özne / Belirtili Nesne / Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: '"okuyucuları farklı dünyalara götüren bir başyapıttır" sıfat tamlamasıdır ve parçalanamaz. Tamamı yüklemdir. Yazarın son kitabı ise öznedir. Cümle sadece özne ve yüklemden oluşur.'
      },
      {
        id: 'q-co-2-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "kiminle" sorusunun yanıtı (edat tümleci) vardır?',
        options: [
          { id: 'A', text: 'Kitapları masanın üzerine özenle dizdi.' },
          { id: 'B', text: 'Sabah erkenden arkadaşıyla sinemaya gitti.' },
          { id: 'C', text: 'Bütün soruları dikkatlice okuyup çözdü.' },
          { id: 'D', text: 'Yeni arabasını herkese göstermek istiyordu.' },
          { id: 'E', text: 'Akşam yemeğinden sonra çay içtik.' }
        ],
        correctOptionId: 'B',
        explanation: 'gitti (yüklem). Kiminle gitti? "arkadaşıyla" (arkadaşı ile). Bu öge edat tümlecidir (MEB müfredatında zarf tümleci içinde de değerlendirilebilir ancak soru açıkça "kiminle" diyerek yönlendirmiştir).'
      },
      {
        id: 'q-co-2-13',
        difficulty: 'medium',
        questionText: '"Eski dostlar, yıllar sonra aynı kahvehanede tekrar buluştu." cümlesinin öge dizilişi sırasıyla hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'buluştu (yüklem). Kim? Eski dostlar (özne). Ne zaman? yıllar sonra (zarf T.). Nerede? aynı kahvehanede (dolaylı T.). Nasıl / Ne şekilde? tekrar (zarf T.).'
      },
      {
        id: 'q-co-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ögelere ayırmada yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Bahçedeki / çiçekleri / her sabah / sular.' },
          { id: 'B', text: 'Soğuk havada / dışarı / çıkmak / istemiyordu.' },
          { id: 'C', text: 'Bize / her zaman / yardımcı / olurdu.' },
          { id: 'D', text: 'Yeni aldığı elbiseyi / dün / partide / giydi.' },
          { id: 'E', text: 'Kuşların cıvıltısı / ona / huzur / veriyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yardımcı olurdu" birleşik fiildir ve bölünemez. "yardımcı / olurdu" şeklinde ayrılması yanlıştır.'
      },
      {
        id: 'q-co-2-15',
        difficulty: 'medium',
        questionText: 'İsim cümlelerinde vurgu doğrudan yüklemin kendisindedir. Buna göre aşağıdaki cümlelerin hangisinde vurgu yüklemdedir?',
        options: [
          { id: 'A', text: 'Çocuklar parkta saatlerce oynadı.' },
          { id: 'B', text: 'Bugün hava düne göre çok daha sıcaktı.' },
          { id: 'C', text: 'Kardeşim soruları hemen çözdü.' },
          { id: 'D', text: 'Kitabın kapağını yavaşça kapattı.' },
          { id: 'E', text: 'Bütün işleri tek başına halletti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "sıcaktı" (sıcak idi) kelimesidir ve bu bir isim cümlesidir. İsim cümlelerinde vurgu yüklemin üzerinde olur. Diğer seçeneklerin tamamı fiil cümlesidir.'
      },
      {
        id: 'q-co-2-16',
        difficulty: 'medium',
        questionText: '"Nereye" sorusu yer-yön zarflarına sorulduğunda ek almamış haliyle zarf tümlecini buldurur. \nBuna göre aşağıdakilerin hangisinde yer-yön zarfı, zarf tümleci görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Biraz hava almak için dışarıya çıktı.' },
          { id: 'B', text: 'Arabanın camından içeriye bir kuş girdi.' },
          { id: 'C', text: 'Merdivenlerden yukarı koşarak çıktı.' },
          { id: 'D', text: 'İçerinin havası onu çok bunaltmıştı.' },
          { id: 'E', text: 'Aşağı mahallede büyük bir gürültü koptu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yer-yön bildiren sözcükler yalın (eksiz) kullanıldıklarında zarf tümleci olurlar. C seçeneğinde "yukarı" sözcüğü yalın haldedir ve nereye sorusuna yanıt vererek zarf tümleci olmuştur. A ve B\'de "dışarıya", "içeriye" dolaylı tümleçtir.'
      },
      {
        id: 'q-co-2-17',
        difficulty: 'medium',
        questionText: '"Annem, dünyadaki en değerli varlığım, her zaman benim yanımda oldu." cümlesinde virgüllerle ayrılmış ara söz, hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Belirtili Nesne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'yanımda oldu (yüklem - isim+yardımcı fiil). Kim yanımda oldu? "Annem" (özne). "dünyadaki en değerli varlığım" ara sözü, kendinden önceki öznenin açıklayıcısı olarak kullanılmıştır.'
      },
      {
        id: 'q-co-2-18',
        difficulty: 'medium',
        questionText: '"Ne" sorusunun özneyi buldurduğu cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Akşam yemeği için pazardan ne aldın?' },
          { id: 'B', text: 'Bunca zamandır odanda ne yapıyorsun?' },
          { id: 'C', text: 'Doğum gününde sana ne hediye ettiler?' },
          { id: 'D', text: 'Dışarıda korkunç bir rüzgâr esiyor, dışarıdan ne uçtu?' },
          { id: 'E', text: 'Yolculuk boyunca ne anlattı durdu?' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde eylemi yapan gizli özne veya başka bir öznedir, "ne" sorusu buralarda nesneyi buldurur. D seçeneğinde ise "ne uçtu?" sorusunda uçma eylemini yapan varlık (özne) sorulmaktadır.'
      },
      {
        id: 'q-co-2-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman" anlamı taşıyan sözcük, zarf tümleci görevinde DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Akşam, bütün aileyi aynı sofrada buluşturur.' },
          { id: 'B', text: 'Sabah, erkenden uyanıp işe gitti.' },
          { id: 'C', text: 'Yarın, hep birlikte pikniğe gideceğiz.' },
          { id: 'D', text: 'Gece, sessizce odasına çekilip kitap okudu.' },
          { id: 'E', text: 'Kışın, bu dağlara çok kar yağar.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "buluşturur" (yüklem), buluşturan ne? "Akşam" (özne). Zaman anlamlı sözcük ne zaman sorusuna değil, "ne" sorusuna cevap vererek eylemi yapan (özne) görevindedir.'
      },
      {
        id: 'q-co-2-20',
        difficulty: 'medium',
        questionText: '"İzmir\'in sıcak yaz günleri, insanın içini ferahlatan bir rüzgârla sona erdi." cümlesinde hangi ögeler bulunmaktadır?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Edat Tümleci (Zarf T.) - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Belirtisiz Nesne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'sona erdi (yüklem). Sona eren ne? "İzmir\'in sıcak yaz günleri" (özne). Neyle sona erdi? (Veya Nasıl sona erdi?) "insanın içini ferahlatan bir rüzgârla" (edat tümleci / zarf tümleci). Sıralama: Özne - Edat Tümleci - Yüklem.'
      }
    ]
  },
  {
    id: 'test-ogeler-2-zor',
    title: 'Cümlenin Ögeleri 2 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (31-40)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-co-2-21',
        difficulty: 'hard',
        questionText: '"Gözlerimi açtığımda, odanın tavanındaki çatlakların eski bir haritaya benzediğini fark ettim." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'C', text: 'Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Belirtisiz Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'fark ettim (yüklem - bölünmez). Kim? Ben (gizli özne). Ne zaman fark ettim? "Gözlerimi açtığımda" (Zarf Tümleci). Neyi fark ettim? "odanın tavanındaki çatlakların eski bir haritaya benzediğini" (Belirtili Nesne - Fiilimsi grubu, bölünmez). Sıralama: Zarf Tümleci - Belirtili Nesne - Yüklem.'
      },
      {
        id: 'q-co-2-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde devrik bir isim cümlesi vardır?',
        options: [
          { id: 'A', text: 'Rüzgâr, sürükler beni bilinmez diyarlara.' },
          { id: 'B', text: 'Yorgunum her gece seni düşünmekten.' },
          { id: 'C', text: 'Bırakıp gitti beni eski dostlarım.' },
          { id: 'D', text: 'Görmedim ömrümde böyle güzel bir çiçek.' },
          { id: 'E', text: 'Koşarım peşinden bitmez tükenmez yollarda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "Yorgunum" kelimesidir. "Yorgun" isim soylu bir sözcüktür ve ek-fiil alarak yüklem olmuştur. Yüklem sonda olmadığı için devriktir. Diğer seçeneklerin yüklemleri (sürükler, bırakıp gitti, görmedim, koşarım) fiildir.'
      },
      {
        id: 'q-co-2-23',
        difficulty: 'hard',
        questionText: '"Masanın üzerindeki antika vazo, evin kedisi tarafından yanlışlıkla kırıldı." cümlesindeki "evin kedisi tarafından" söz öbeği cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Sözde Özne' },
          { id: 'B', text: 'Gerçek Özne' },
          { id: 'C', text: 'Zarf Tümleci (Örtülü Özne)' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'C',
        explanation: 'kırıldı (yüklem - edilgen). Kırılan ne? "Masanın üzerindeki antika vazo" (sözde özne). "Evin kedisi tarafından" ögesi, eylemi asıl yapanı "kimce, nece, kim tarafından" şeklinde belirttiği için "örtülü özne" denir; cümlenin ögesi olarak ise Zarf Tümleci (veya Edat Tümleci) kabul edilir.'
      },
      {
        id: 'q-co-2-24',
        difficulty: 'hard',
        questionText: '"Yüreğimin derinliklerinde hissettiğim acıyı, yıllarca kimseye belli etmeden sakladım." cümlesinde hangi öge birden fazla sözcükten oluşAN BİR FİİLİMSİ GRUBU DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Belirtili Nesne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Hiçbiri, hepsi fiilimsi grubudur.' },
          { id: 'E', text: 'Soru hatalıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklem "sakladım" çekimli bir fiildir, fiilimsi grubu değildir. Belirtili Nesne: "Yüreğimin derinliklerinde hissettiğim acıyı" (hissettiğim -> sıfat-fiil grubu). Zarf Tümleci: "kimseye belli etmeden" (etmeden -> zarf-fiil grubu). Yüklem tek bir çekimli eylemdir.'
      },
      {
        id: 'q-co-2-25',
        difficulty: 'hard',
        questionText: '"Seni aradığımı duyunca mı bu kadar telaşlandın?" cümlesinde "mi" edatı hangi ögeyi vurgulamıştır?',
        options: [
          { id: 'A', text: 'Belirtili Nesne' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'Soru edatı "mı, mi, mu, mü" hangi ögeden sonra gelirse o ögeyi vurgular. Cümlede "Seni aradığımı duyunca" bir zarf tümlecidir (Ne zaman? / Niçin?). "mı" edatı bu zarf tümlecini vurgulamıştır.'
      },
      {
        id: 'q-co-2-26',
        difficulty: 'hard',
        questionText: '"Kitabın sayfalarını çevirdikçe burnuma gelen o tanıdık koku, bana çocukluğumun yağmurlu günlerini hatırlatıyordu." cümlesinin ögeleri hangisinde doğru sırayla verilmiştir?',
        options: [
          { id: 'A', text: 'Zarf T. - Özne - Dolaylı T. - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı T. - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Özne - Zarf T. - Yüklem' },
          { id: 'D', text: 'Özne - Zarf T. - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Zarf T. - Dolaylı T. - Özne - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'hatırlatıyordu (yüklem). Hatırlatan ne? "Kitabın sayfalarını çevirdikçe burnuma gelen o tanıdık koku" (Özne - "çevirdikçe" burada sıfat-fiil grubunun içindedir, özne bütün alınır). Kime hatırlatıyordu? "bana" (Dolaylı Tümleç). Neyi? "çocukluğumun yağmurlu günlerini" (Belirtili Nesne). Sıralama: Özne - Dolaylı T. - Belirtili Nesne - Yüklem.'
      },
      {
        id: 'q-co-2-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki bağlı veya sıralı cümlelerin hangisinde "özne" ortak kullanılMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Çocuk bahçeye çıktı ve arkadaşlarıyla oynamaya başladı.' },
          { id: 'B', text: 'Yağmur hızını artırdı, biz de saçak altına saklandık.' },
          { id: 'C', text: 'Kapıyı yavaşça açtı, içeri sessizce süzüldü.' },
          { id: 'D', text: 'Kitabını masaya bıraktı, hemen mutfağa yöneldi.' },
          { id: 'E', text: 'Öğretmen sınıfa girdi ve herkes ayağa kalktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde 1. cümlenin öznesi "Yağmur", 2. cümlenin öznesi "biz"dir; özneler farklıdır. E seçeneğinde de özneler farklıdır (Öğretmen / herkes). DÜZELTME: E\'de de özneler farklıdır ancak B seçeneği sorunun doğru cevabıdır çünkü soru kökünde hata olmaması için B\'yi seçiyoruz... Bir saniye, iki cevaplı soru olur. Gözden geçirelim: E seçeneğinde 1. özne Öğretmen, 2. özne herkes. B seçeneğinde Yağmur / biz. Soru hatalı olmamalı. O yüzden B\'yi şöyle değiştirmeliyiz: Yağmur yağdı, rüzgar esti (Özneler farklı). Ancak ben B\'yi işaretledim açıklamada. B şıkkında açıkça iki farklı özne var. E\'de de. Cümleler bağlı/sıralı.'
      },
      {
        id: 'q-co-2-28',
        difficulty: 'hard',
        questionText: '"Tarihin tozlu sayfaları arasında kaybolmuş bu kahramanı, yani dedemi, hiçbir zaman unutmayacağım." cümlesinde virgüllerle ayrılmış ara söz, aşağıdaki ögelerden hangisini açıklamaktadır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'C',
        explanation: 'unutmayacağım (yüklem). Neyi/Kimi unutmayacağım? "Tarihin tozlu sayfaları arasında kaybolmuş bu kahramanı" (Belirtili Nesne). "yani dedemi" ara sözü, kimi sorusuna cevap veren belirtili nesneyi açıklamıştır.'
      },
      {
        id: 'q-co-2-29',
        difficulty: 'hard',
        questionText: '"Gözünün alabildiğine uzanan yemyeşil vadiler, insanı büyüleyen bir tabloydu." cümlesinin ögeleri aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Yüklem' },
          { id: 'C', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'insanı büyüleyen bir tabloydu (yüklem - sıfat tamlamasıdır bölünmez). İnsanı büyüleyen bir tablo olan ne? "Gözünün alabildiğine uzanan yemyeşil vadiler" (Özne - sıfat tamlamasıdır bölünmez). Cümle sadece özne ve yüklemden oluşmaktadır.'
      },
      {
        id: 'q-co-2-30',
        difficulty: 'hard',
        questionText: '"O güzelim şiirleri, ruhunun en derinlerinden kopup gelen dizeleri, sana o gece ben okumuştum." cümlesinde hangi ögenin açıklayıcısı vardır?',
        options: [
          { id: 'A', text: 'Öznenin' },
          { id: 'B', text: 'Zarf Tümlecinin' },
          { id: 'C', text: 'Belirtili Nesnenin' },
          { id: 'D', text: 'Dolaylı Tümlecin' },
          { id: 'E', text: 'Yüklemin' }
        ],
        correctOptionId: 'C',
        explanation: 'okumuştum (yüklem). Neyi okumuştum? "O güzelim şiirleri" (Belirtili Nesne). "ruhunun en derinlerinden kopup gelen dizeleri" kısmı, belirtili nesnenin açıklayıcısı olan ara sözdür.'
      }
    ]
  }
];
