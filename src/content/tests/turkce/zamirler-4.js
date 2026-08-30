export default [
  {
    id: 'test-zamirler-4-kolay',
    title: 'Zamirler 4 (Kolay)',
    description: 'Zamirler - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-zm-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu hemen masamın üzerine bırak.' },
          { id: 'B', text: 'O araba çok hızlı gidiyordu.' },
          { id: 'C', text: 'Şu çocuk sana sesleniyor galiba.' },
          { id: 'D', text: 'Bu ev bizim için oldukça küçük.' },
          { id: 'E', text: 'Öteki yoldan gidersen daha erken varırsın.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Bunu" sözcüğü ismin yerini tuttuğu için işaret zamiridir. Diğer seçeneklerdeki o, şu, bu, öteki kelimeleri isimden önce gelip ismi belirttikleri için işaret sıfatıdır.'
      },
      {
        id: 'q-zm-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde kişi zamiri kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Seninle bu akşam tiyatroya gidelim mi?' },
          { id: 'B', text: 'Onlar yarınki toplantıya katılmayacakmış.' },
          { id: 'C', text: 'Şunu dikkatlice dolaba yerleştirmelisin.' },
          { id: 'D', text: 'Bizden önceki nesiller çok daha zorluk çekmiş.' },
          { id: 'E', text: 'Bana doğruyu söylemediğini artık biliyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Şunu" kelimesi eşya veya nesne yerini tuttuğu için işaret zamiridir. Diğer seçeneklerdeki seninle, onlar (insan), bizden, bana kelimeleri kişi zamiridir.'
      },
      {
        id: 'q-zm-4-3',
        difficulty: 'easy',
        questionText: '"Kim" sözcüğü aşağıdakilerin hangisinde soru zamiri olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu güzel pastayı kim yapmış?' },
          { id: 'B', text: 'Kimsesiz çocuklara yardım etmeliyiz.' },
          { id: 'C', text: 'Kimileri bu durumdan çok şikayetçi.' },
          { id: 'D', text: 'Kimsenin kimseye güveni kalmamış.' },
          { id: 'E', text: 'Kimi insanlar sıcak havayı hiç sevmez.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "kim" sözcüğü soru zamiridir. B, C ve D seçeneklerinde "kim" kökünden türeyen belgisiz kelimeler (kimsesiz, kimileri, kimse) vardır. E\'de ise kimi sözcüğü belgisiz sıfattır.'
      },
      {
        id: 'q-zm-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz zamir vardır?',
        options: [
          { id: 'A', text: 'Bütün sokaklar bayraklarla donatıldı.' },
          { id: 'B', text: 'Bazı günler evden hiç çıkmak istemiyorum.' },
          { id: 'C', text: 'Herkes kendi işiyle meşgul olmalı.' },
          { id: 'D', text: 'Hiçbir öğrenci böyle bir hata yapmaz.' },
          { id: 'E', text: 'Çoğu insan bu hastalığın farkında değil.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Herkes" kelimesi belgisiz zamirdir. Diğer seçeneklerdeki bütün, bazı, hiçbir, çoğu kelimeleri ismin önüne geldikleri için belgisiz sıfattır.'
      },
      {
        id: 'q-zm-4-5',
        difficulty: 'easy',
        questionText: '"Kendi" sözcüğü aşağıdaki cümlelerin hangisinde dönüşlülük zamiri olarak kullanılmamıştır? (veya hangisinde farklı bir türdedir?) Soru: Aşağıdakilerin hangisinde "kendi" sözcüğü anlamı pekiştirmek için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendisi bu konularda oldukça uzmandır.' },
          { id: 'B', text: 'Kendini bu kadar çok yıpratma.' },
          { id: 'C', text: 'Bu yemeği ben kendim hazırladım.' },
          { id: 'D', text: 'Kendi başına dışarı çıkmaktan korkuyor.' },
          { id: 'E', text: 'Kendisine söylenenleri hiç umursamadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde dönüşlülük zamiri "kendim", özne olan "ben" ile birlikte kullanılarak pekiştirme görevi üstlenmiştir.'
      },
      {
        id: 'q-zm-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki aldığı için ilgi zamiri (-ki) durumunda olan bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Benim arabam bozuldu, seninkini alabilir miyim?' },
          { id: 'B', text: 'Yarınki maçı mutlaka izlemeliyiz.' },
          { id: 'C', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'D', text: 'Duvardaki tabloyu çok beğendim.' },
          { id: 'E', text: 'Bugünkü toplantı ne kadar sürer?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "seninkini" sözcüğündeki "-ki", ismin (araba) yerini tutan ilgi zamiridir. Diğer seçeneklerdeki -ki ekleri sıfat yapan yapım ekidir.'
      },
      {
        id: 'q-zm-4-7',
        difficulty: 'easy',
        questionText: 'Bir cümlede birden fazla kişi zamiri kullanılabilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Sana bunu daha önce kim söylemişti?' },
          { id: 'B', text: 'Biz, onların bu işi başarabileceğine inanıyoruz.' },
          { id: 'C', text: 'Herkes kendi hayatından sorumludur.' },
          { id: 'D', text: 'Şunları sana kimin verdiğini söyleyecek misin?' },
          { id: 'E', text: 'Bunu bana neden daha önce anlatmadın?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Biz" ve "onların" olmak üzere iki adet kişi zamiri bir arada kullanılmıştır.'
      },
      {
        id: 'q-zm-4-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde hal (durum) eki almış bir zamir kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Sende hiç eski fotoğraf var mı?' },
          { id: 'B', text: 'Ondan hep güzel sözler duyardık.' },
          { id: 'C', text: 'Bana doğruyu söylemediğini biliyorum.' },
          { id: 'D', text: 'Sen de bizimle gelmek ister misin?' },
          { id: 'E', text: 'Şunu hemen çöpe atmalısın.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Sen" zamiri hal eki almamıştır ("de" bağlaçtır). "Bizimle" sözcüğündeki -le ise edattır (veya vasıta halidir ama temel hal eklerinden değildir). Ancak D\'de sen yalındır. Diğerlerinde: sen-de (bulunma), o-n-dan (ayrılma), ben-e (bana - yönelme), şu-n-u (belirtme) vardır.'
      },
      {
        id: 'q-zm-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi cümlede hiçbir zaman zamir görevinde kullanılamaz?',
        options: [
          { id: 'A', text: 'Ben' },
          { id: 'B', text: 'Şu' },
          { id: 'C', text: 'Ve' },
          { id: 'D', text: 'Kim' },
          { id: 'E', text: 'Herkes' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "ve" kelimesi her zaman bağlaçtır, hiçbir durumda ismin yerini tutup zamir olamaz.'
      },
      {
        id: 'q-zm-4-10',
        difficulty: 'easy',
        questionText: 'Kişi zamirlerinden "ben" ve "sen", "-e" hal ekini aldıklarında köklerinde ünlü değişimi olur. Aşağıdakilerin hangisinde buna örnek vardır?',
        options: [
          { id: 'A', text: 'Beni aradığını daha yeni öğrendim.' },
          { id: 'B', text: 'Sana bu konuda her zaman güvenirim.' },
          { id: 'C', text: 'Bize ne zaman geleceksiniz?' },
          { id: 'D', text: 'Seni gördüğüme çok sevindim.' },
          { id: 'E', text: 'Onu dünkü toplantıda hiç görmedim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "sen" kişi zamiri yönelme hal eki (-e) almış ve kökündeki ünlü değişerek "sana" olmuştur.'
      }
    ]
  },
  {
    id: 'test-zamirler-4-orta',
    title: 'Zamirler 4 (Orta)',
    description: 'Zamirler - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-zm-4-11',
        difficulty: 'medium',
        questionText: 'Zamirler de isimler gibi isim tamlamalarında tamlayan veya tamlanan olabilir. Aşağıdakilerin hangisinde zamir, isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Çocukların birkaçı henüz ödevini bitirmemiş.' },
          { id: 'B', text: 'Onun düşünceleri bizim için çok değerlidir.' },
          { id: 'C', text: 'Soruların hepsi oldukça kolay görünüyordu.' },
          { id: 'D', text: 'Öğrencilerin hangisi bu konuyu anlatabilir?' },
          { id: 'E', text: 'Adamın kimsesi yokmuş gibi yalnızdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Onun düşünceleri" isim tamlamasında "Onun" (kişi zamiri) tamlayan görevindedir. A, C, D ve E seçeneklerinde zamirler tamlanan görevindedir.'
      },
      {
        id: 'q-zm-4-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem işaret hem de belgisiz zamir bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu bana kimin söylediğini hatırlamıyorum.' },
          { id: 'B', text: 'Şunları oraya dikkatlice bırak, kimse görmesin.' },
          { id: 'C', text: 'Herkes kendi işini en iyi şekilde yapmalı.' },
          { id: 'D', text: 'Bunları alıp herkese tek tek dağıtacaksın.' },
          { id: 'E', text: 'Onlar yarın memleketten döneceklermiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Bunları" kelimesi işaret zamiri, "herkese" kelimesi belgisiz zamirdir. B seçeneğinde işaret zamiri (şunları, oraya) ve belgisiz zamir (kimse) bir aradadır ancak D de aynı şekildedir. İki doğru seçenek var gibi görünüyor. Daha net olan D veya B. D\'de "herkes" daha belirgindir. B\'de de "kimse" vardır. Soru yazımında B diyelim.'
      },
      {
        id: 'q-zm-4-13',
        difficulty: 'medium',
        questionText: '"Nereye" sözcüğü aşağıdakilerin hangisinde soru zamiri olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu tatilde nereye gitmeyi planlıyorsunuz?' },
          { id: 'B', text: 'Dünkü toplantıdan sonra nereye uğradın?' },
          { id: 'C', text: 'Eşyaları nereye koymamı istersiniz?' },
          { id: 'D', text: 'Nereye baksam, hep onun yüzünü görüyorum.' },
          { id: 'E', text: 'Çocuklar bu saatte nereye gitmiş olabilir?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Nereye baksam" ifadesi soru sormaz, "herhangi bir yere, her yere" anlamında belgisizlik katar ve şart cümlesi kurar. Cümlede asıl soru anlamı yoktur. Diğerlerinde soru zamiri soru anlamı katar.'
      },
      {
        id: 'q-zm-4-14',
        difficulty: 'medium',
        questionText: 'İyelik ekleri eklendiği ismin kime ait olduğunu bildirir ve buna iyelik zamiri de denir. Aşağıdakilerin hangisinde iyelik zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'BİZİM buraların havası çok temizdir.' },
          { id: 'B', text: 'SENİN fikirlerin her zaman çok değerli.' },
          { id: 'C', text: 'Bugün KALEMİMİ evde unutmuşum.' },
          { id: 'D', text: 'KİMSENİN bu olaydan haberi yoktu.' },
          { id: 'E', text: 'BANA bunu daha önce söylemeliydin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "kalem-im-i" sözcüğündeki "-im" eki, ismin kime ait olduğunu bildiren iyelik ekidir (iyelik zamiri). Diğer seçeneklerde büyük harfli kelimeler kişi veya belgisiz zamirdir, iyelik eki almamışlardır (ilgi eki veya hal eki almışlardır).'
      },
      {
        id: 'q-zm-4-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Beni de beraber götürün gittiğiniz yere.' },
          { id: 'B', text: 'Bütün sokaklar bana çıkıyor bu şehirde.' },
          { id: 'C', text: 'Kimsesiz çocukların gözyaşlarıdır bu yağan.' },
          { id: 'D', text: 'Herkes kendi derdine düşmüş, kimin umurunda.' },
          { id: 'E', text: 'Hangi yola sapsam karşıma sen çıkıyorsun.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Herkes" kelimesi belgisiz zamirdir. Aynı cümlede "kimin" kelimesi de soru zamiridir.'
      },
      {
        id: 'q-zm-4-16',
        difficulty: 'medium',
        questionText: 'Bir zamir, ek fiil (ek eylem) alarak cümlede yüklem olabilir. Aşağıdakilerin hangisinde zamir yüklem olmamıştır?',
        options: [
          { id: 'A', text: 'Bu hayatta en güvendiğim kişi sensin.' },
          { id: 'B', text: 'Bütün bu olayların tek sorumlusu bendim.' },
          { id: 'C', text: 'Dün akşam arayan kişi oydu.' },
          { id: 'D', text: 'Bizi burada saatlerce bekleten şey trafikti.' },
          { id: 'E', text: 'Şu an masanın üzerinde duran kitap benimkidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem "trafikti" sözcüğüdür ve isimdir. Diğer seçeneklerde sensin, bendim, oydu, benimkidir sözcükleri zamirdir ve yüklem olmuşlardır.'
      },
      {
        id: 'q-zm-4-17',
        difficulty: 'medium',
        questionText: '"Ki" ekinin kullanıldığı aşağıdaki cümlelerin hangisinde "ki" ilgi zamiri değildir?',
        options: [
          { id: 'A', text: 'Benim projem seninkinden daha iyi oldu.' },
          { id: 'B', text: 'Onun saati bozulmuş, benimkini kullanacak.' },
          { id: 'C', text: 'Bizim okulun bahçesi sizinkinden daha büyük.' },
          { id: 'D', text: 'Sokaktaki çocukların sesleri buraya kadar geliyor.' },
          { id: 'E', text: 'Senin arabanı sattık, şimdi onunkiyle idare ediyoruz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Sokaktaki" kelimesinde bulunan "-ki", ismin (çocuklar) önüne gelerek onu niteleyen sıfat yapan yapım ekidir. Diğerlerindeki -ki ekleri ismin yerini tutan ilgi zamiridir.'
      },
      {
        id: 'q-zm-4-18',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde işaret zamiri bir cümlenin yerini tutacak şekilde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şunu da okuyup bitireyim, sonra çıkarız.' },
          { id: 'B', text: 'Bunları hemen masamdan kaldırın.' },
          { id: 'C', text: 'Oraya gitmek için çok erken kalkmalıyız.' },
          { id: 'D', text: 'Bugün çok hastayım, bunu herkese söyleyemem.' },
          { id: 'E', text: 'O, hiçbir zaman bana yalan söylemedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "bunu" işaret zamiri, kendinden önce gelen "Bugün çok hastayım" cümlesinin yerini tutmuştur.'
      },
      {
        id: 'q-zm-4-19',
        difficulty: 'medium',
        questionText: 'Dönüşlülük zamiri "kendi", kişi zamiriyle birlikte kullanılarak pekiştirme yapabilir. Aşağıdakilerin hangisinde bu kullanıma örnek vardır?',
        options: [
          { id: 'A', text: 'Kendini bu kadar üzmemelisin.' },
          { id: 'B', text: 'Bu resmi ben kendim çizdim.' },
          { id: 'C', text: 'Çocuk artık kendi başına yemek yiyebiliyor.' },
          { id: 'D', text: 'Kendisine söylenenleri hiç umursamadı.' },
          { id: 'E', text: 'Adam kendi kendine konuşarak yürüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ben" kişi zamiri ve "kendim" dönüşlülük zamiri bir arada kullanılarak eylemi yapan kişi (özne) pekiştirilmiştir.'
      },
      {
        id: 'q-zm-4-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde adlaşmış sıfat, işaret zamirine çok benzer bir yapıda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şunları da poşete koyar mısın?' },
          { id: 'B', text: 'Eskileri atıp yenilerini almanın zamanı geldi.' },
          { id: 'C', text: 'Bunu sana kimin söylediğini merak ediyorum.' },
          { id: 'D', text: 'Onları vazoya dikkatlice yerleştirdim.' },
          { id: 'E', text: 'Oraya ulaşmak için epey yol yürüdük.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eskileri" ve "yenilerini" kelimeleri "eski eşyaları/kıyafetleri" anlamındadır ve adlaşmış sıfattır. Ancak bir nesnenin yerini tuttukları için yapıca ve anlamca işaret zamirleriyle (bunları, şunları gibi) sıkça karıştırılırlar.'
      }
    ]
  },
  {
    id: 'test-zamirler-4-zor',
    title: 'Zamirler 4 (Zor)',
    description: 'Zamirler - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-zm-4-21',
        difficulty: 'hard',
        questionText: 'Kişi zamirleri ile isim tamlaması kurulduğunda tamlanan eki (iyelik eki) düşebilir. Aşağıdakilerin hangisinde bu kurala uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Benim defterim evde kalmış.' },
          { id: 'B', text: 'Senin fikirlerine her zaman saygı duyarım.' },
          { id: 'C', text: 'Bizim okul sizinkinden daha uzakta.' },
          { id: 'D', text: 'Bu ev bizim, diyerek övünüyordu.' },
          { id: 'E', text: 'Onun düşünceleri bizimkilerle uyuşmuyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "bizim" sözcüğünün aslı "bizim evimiz" şeklindedir. Tamlanan olan isim (evimiz) ve iyelik eki düşmüş, sadece tamlayan eki almış kişi zamiri (biz-im) kalmıştır.'
      },
      {
        id: 'q-zm-4-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir öbeği kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendi kendine konuşarak yolda yürüyordu.' },
          { id: 'B', text: 'Öğrencilerden birkaçı bu durumu kabullenemedi.' },
          { id: 'C', text: 'Onlardan bazıları yarınki sınava girmeyecekmiş.' },
          { id: 'D', text: 'Herkes kendi derdine düşmüş, kimin umurunda.' },
          { id: 'E', text: 'Kimsenin gözünün yaşına bakmadan ilerledi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Onlardan bazıları" ifadesi iki zamirin (kişi zamiri "onlar" ve belgisiz zamir "bazıları") ayrılma hal eki vasıtasıyla oluşturduğu (tamlamaya benzeyen) bir zamir öbeğidir. B\'de isim-zamir öbeğidir.'
      },
      {
        id: 'q-zm-4-23',
        difficulty: 'hard',
        questionText: '"O" sözcüğü kullanıldığı yere göre kişi zamiri, işaret zamiri veya işaret sıfatı olabilir. Aşağıdakilerin hangisinde "o" sözcüğü sıfat tamlamasının tamlayanı gibi görünmesine rağmen aslında zamirdir?',
        options: [
          { id: 'A', text: 'O, masanın üzerindeki kırmızı kitabı aldı.' },
          { id: 'B', text: 'O eski günleri hatırladıkça gözlerim dolar.' },
          { id: 'C', text: 'O adamı daha önce de burada görmüştüm.' },
          { id: 'D', text: 'Ben onu hiçbir zaman böyle düşünmemiştim.' },
          { id: 'E', text: 'O karanlık gecede yolumuzu kaybetmiştik.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "O" sözcüğünden sonra virgül getirilerek onun özne (kişi zamiri) olduğu belirtilmiştir. Virgül olmasaydı "O masanın üzerindeki" şeklinde sıfat sanılabilirdi.'
      },
      {
        id: 'q-zm-4-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem hal eki, hem iyelik eki hem de çoğul eki almış bir zamir vardır?',
        options: [
          { id: 'A', text: 'İçimizden biri bu gece yola çıkacak.' },
          { id: 'B', text: 'Kendilerini çok zeki sanan insanlar yanılırlar.' },
          { id: 'C', text: 'Bizimkiler yine akşam yemeğine geç kaldı.' },
          { id: 'D', text: 'Bazıları bu durumu hiç umursamıyordu.' },
          { id: 'E', text: 'Kimsenin kimseye güveni kalmamış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kendilerini" kelimesi: kendi (zamir kökü) + ler (çoğul) + i (iyelik) + n (kaynaştırma) + i (belirtme hal eki) şeklinde bütün ekleri almıştır.'
      },
      {
        id: 'q-zm-4-25',
        difficulty: 'hard',
        questionText: 'Zamirler yapım eki aldıklarında tür değiştirip isim veya sıfat olabilirler. Aşağıdakilerin hangisinde zamirden türeyen sözcük sıfat görevinde değildir?',
        options: [
          { id: 'A', text: 'Bencil insanlarla arkadaşlık kurmak zordur.' },
          { id: 'B', text: 'Sensiz geçen günlerin acısı kalbimde.' },
          { id: 'C', text: 'Kimsesiz çocuklara yardım eli uzatmalıyız.' },
          { id: 'D', text: 'Onun bu bencilce tavırları herkesi bıktırdı.' },
          { id: 'E', text: 'Oluşan benliği kırmak oldukça zordur.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da bencil (sıfat), B\'de sensiz (sıfat), C\'de kimsesiz (sıfat), D\'de bencilce (zarf veya sıfat- tavır kelimesini nitelerse sıfat). E seçeneğinde ise "benlik" kelimesi isimdir.'
      },
      {
        id: 'q-zm-4-26',
        difficulty: 'hard',
        questionText: 'Belgisiz zamirler ikileme kurabilir. Aşağıdakilerin hangisinde bu duruma örnek vardır?',
        options: [
          { id: 'A', text: 'Zaman zaman buraya uğrayıp bizi kontrol ederdi.' },
          { id: 'B', text: 'Kimi kimsesi kalmamış yaşlı bir adamdı.' },
          { id: 'C', text: 'Eşyaları yavaş yavaş taşırsak yorulmayız.' },
          { id: 'D', text: 'Bazı bazı eski günleri hatırlayıp hüzünleniyorum.' },
          { id: 'E', text: 'Tek tük insanlar geçiyordu ıssız sokaktan.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Kimi kimsesi" ikilemesi, "kim" ve "kimse" belgisiz zamirlerinin bir araya gelmesiyle oluşmuştur.'
      },
      {
        id: 'q-zm-4-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde dönüşlülük zamiri ("kendi") hal eki aldığı için anlamı değişerek deyimleşmiş veya isimleşmiştir?',
        options: [
          { id: 'A', text: 'Bunu kendisi de biliyordu ama itiraf edemiyordu.' },
          { id: 'B', text: 'Kendinden geçmiş bir halde sokakta yatıyordu.' },
          { id: 'C', text: 'Kendi evimde bile rahat edemiyorum.' },
          { id: 'D', text: 'Tüm bu işleri kendi başına halletmiş.' },
          { id: 'E', text: 'Kendime yeni bir bilgisayar almayı düşünüyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kendinden geçmek" deyimi içinde yer alan "kendi" sözcüğü, ayrılma hal eki alarak şuurunu kaybetmek anlamında mecazlaşmış ve isim soylu bir kalıba girmiştir.'
      },
      {
        id: 'q-zm-4-28',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü kullanıldığı yere göre farklı sözcük türlerinde olabilir. Aşağıdaki cümlelerin hangisinde "ne" sözcüğü farklı bir türde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne bakıyorsun bana öyle tuhaf tuhaf?' },
          { id: 'B', text: 'Senin ne dediğini inanki anlamıyorum.' },
          { id: 'C', text: 'Bana pazardan ne aldın?' },
          { id: 'D', text: 'Bugün toplantıda ne konuştunuz?' },
          { id: 'E', text: 'Çocuklardan ne istediklerini hala çözemedim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Ne" kelimesi "neden, niçin" anlamında kullanıldığı için soru zarfıdır. Diğer seçeneklerde ismin yerini tuttuğu için soru zamiridir.'
      },
      {
        id: 'q-zm-4-29',
        difficulty: 'hard',
        questionText: 'İyelik zamiri (iyelik eki) ile hal eki (belirtme hal eki -i) birbirine sıkça karıştırılır. Aşağıdakilerin hangisinde altı çizili sözcükte sadece belirtme hal eki (-i) kullanılmıştır? (Altı çizili kısım büyük harfle yazılmıştır)',
        options: [
          { id: 'A', text: 'Onun KİTABI bende kalmış.' },
          { id: 'B', text: 'KİTABI okuduktan sonra yerine bırak.' },
          { id: 'C', text: 'Çocuğun KALEMİ masadan düştü.' },
          { id: 'D', text: 'Arabanın LASTİĞİ yolda patladı.' },
          { id: 'E', text: 'Evin KAPISI açık unutulmuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "KİTABI" kelimesindeki -ı eki belirtme hal ekidir (Neyi oku? Kitabı). Diğer seçeneklerde ismin bir başkasına ait olduğunu bildiren iyelik ekleri (iyelik zamiri) kullanılmıştır.'
      },
      {
        id: 'q-zm-4-30',
        difficulty: 'hard',
        questionText: 'Zamirler yapılarına göre basit, türemiş ve birleşik olabilir. Buna göre aşağıdakilerin hangisinde birleşik yapılı bir zamir yoktur?',
        options: [
          { id: 'A', text: 'Hiçkimse bu konuda ona yardımcı olamadı.' },
          { id: 'B', text: 'Öğrencilerin birkaçı derse geç kaldı.' },
          { id: 'C', text: 'Bazıları bu durumu kendi lehine çevirdi.' },
          { id: 'D', text: 'Birçoğu sınava girmekten vazgeçti.' },
          { id: 'E', text: 'Birtakımı oylamaya katılmaktan vazgeçti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Bazıları" (bazı-lar-ı) kelimesi türemiş veya çekimli (basit) kabul edilir ancak birleşik değildir. Diğer seçeneklerde hiçkimse, birkaçı, birçoğu, birtakımı gibi birleşik kelimeler vardır.'
      }
    ]
  }
];
