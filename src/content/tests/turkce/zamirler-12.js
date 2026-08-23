export default [
  {
    id: 'test-zamirler-12-kolay',
    title: 'Zamirler 12 (Kolay)',
    description: 'Zamirler - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-zm-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'O araba gerçekten çok hızlıydı.' },
          { id: 'B', text: 'Bu ev bize çok küçük geliyor artık.' },
          { id: 'C', text: 'Öteki yoldan gidersen daha erken ulaşırsın.' },
          { id: 'D', text: 'Şu çocuk sana sesleniyor galiba.' },
          { id: 'E', text: 'Onları buraya dikkatlice yerleştirmelisin.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Onları" kelimesi eşya veya nesnenin (çiçek, kitap vs.) yerini tuttuğu için işaret zamiridir. Diğer seçeneklerdeki o, bu, öteki, şu kelimeleri ismin önüne gelerek onları işaret ettikleri için işaret sıfatıdır.'
      },
      {
        id: 'q-zm-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde kişi (şahıs) zamiri yoktur?',
        options: [
          { id: 'A', text: 'Benimle gelirsen sana her şeyi anlatırım.' },
          { id: 'B', text: 'Şunları da poşete dikkatlice koyuver.' },
          { id: 'C', text: 'Bizden daha şanslı olduklarını düşünüyorlar.' },
          { id: 'D', text: 'Bana doğruyu söylemediğini artık biliyorum.' },
          { id: 'E', text: 'Seninle aynı fikirde olduğumu bilmelisin.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Şunları" kelimesi işaret zamiridir, kişi zamiri değildir. Diğer seçeneklerdeki benimle/sana, bizden, bana, seninle kelimeleri kişi zamiridir.'
      },
      {
        id: 'q-zm-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru zamiri vardır?',
        options: [
          { id: 'A', text: 'Bu güzel hediyeyi sana kim aldı?' },
          { id: 'B', text: 'Hangi arabayı almayı planlıyorsunuz?' },
          { id: 'C', text: 'Nasıl bir iş aradığını bana söyler misin?' },
          { id: 'D', text: 'Toplantıya neden bu kadar geç kaldın?' },
          { id: 'E', text: 'Dışarı çıkarken şemsiyeni aldın mı?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "kim" kelimesi soru zamiridir. B\'de hangi (sıfat), C\'de nasıl (sıfat), D\'de neden (zarf), E\'de mı (edat) vardır.'
      },
      {
        id: 'q-zm-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Her öğrenci kendi sırasını temizlemeli.' },
          { id: 'B', text: 'Herkes kendi işini en iyi şekilde yapsın.' },
          { id: 'C', text: 'Hiçbir insan bu kadar zorluk çekmemeli.' },
          { id: 'D', text: 'Bazı günler evden hiç çıkmak istemem.' },
          { id: 'E', text: 'Bütün sokaklar bayraklarla süslendi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Herkes" kelimesi belgisiz zamirdir. Diğer seçeneklerdeki her, hiçbir, bazı, bütün kelimeleri belgisiz sıfattır.'
      },
      {
        id: 'q-zm-12-5',
        difficulty: 'easy',
        questionText: '"Kendi" sözcüğü aşağıdaki cümlelerin hangisinde pekiştirme göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendisi bu şirketin en başarılı müdürüdür.' },
          { id: 'B', text: 'Kendini bu kadar yormanın bir anlamı yok.' },
          { id: 'C', text: 'Bu yemeği ben kendim senin için hazırladım.' },
          { id: 'D', text: 'Oraya kendi başına gitmekten çok korkuyor.' },
          { id: 'E', text: 'Kendisine verilen görevi layıkıyla yerine getirdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde dönüşlülük zamiri "kendim", özne olan "ben" ile birlikte kullanılarak anlamı pekiştirmiştir.'
      },
      {
        id: 'q-zm-12-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ilgi zamiri "-ki" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Masadaki kitapları hemen topla.' },
          { id: 'B', text: 'Dünkü yağmur bütün çiçekleri soldurdu.' },
          { id: 'C', text: 'Bugünkü haberler oldukça ilginçti.' },
          { id: 'D', text: 'Yüzündeki tebessüm her şeyi anlatıyordu.' },
          { id: 'E', text: 'Benim silgim kayboldu, seninkini alabilir miyim?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "seninkini" kelimesinde bulunan "-ki", ismin (silginin) yerini tutan ilgi zamiridir. Diğer seçeneklerdeki -ki ekleri sıfat yapan yapım ekidir.'
      },
      {
        id: 'q-zm-12-7',
        difficulty: 'easy',
        questionText: '"Onlar" kelimesi aşağıdaki cümlelerin hangisinde işaret zamiri görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onlar yarın sabah yola çıkacaklarmış.' },
          { id: 'B', text: 'Bizimle tatile gelemeyeceklerini onlar söyledi.' },
          { id: 'C', text: 'Onları vazoya değil, doğrudan bahçeye ek.' },
          { id: 'D', text: 'Bu zor günlerde en çok onlar bize destek oldu.' },
          { id: 'E', text: 'Onlar bu şirketin en değerli çalışanlarıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Onları" kelimesi bitki veya çiçek gibi insan dışı varlıkların yerini tuttuğu için işaret zamiridir. Diğer seçeneklerde insanları karşıladığı için kişi zamiridir.'
      },
      {
        id: 'q-zm-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla zamir vardır?',
        options: [
          { id: 'A', text: 'Bunu bana neden daha önce söylemedin?' },
          { id: 'B', text: 'Bu işin böyle sonuçlanacağını herkes biliyordu.' },
          { id: 'C', text: 'Şu çocuk sabahtan beri durmadan ağlıyor.' },
          { id: 'D', text: 'Onun bu söylediklerine kimse inanmak istemedi.' },
          { id: 'E', text: 'Oraya gitmek için çok erken kalkmalıyız.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bunu" (işaret zamiri) ve "bana" (kişi zamiri) olmak üzere iki farklı zamir bir arada kullanılmıştır.'
      },
      {
        id: 'q-zm-12-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi ismin yerini tutarak zamir görevinde kullanılamaz?',
        options: [
          { id: 'A', text: 'Bana' },
          { id: 'B', text: 'Herkes' },
          { id: 'C', text: 'Şunu' },
          { id: 'D', text: 'Ancak' },
          { id: 'E', text: 'Kim' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "ancak" kelimesi bağlaç veya edattır. Hiçbir zaman ismin yerini tutup zamir olamaz.'
      },
      {
        id: 'q-zm-12-10',
        difficulty: 'easy',
        questionText: 'Kişi zamirlerinden "ben" ve "sen", "-e" hal ekini aldıklarında köklerinde ünlü değişimi olur. Aşağıdakilerin hangisinde bu kuralın bir örneği yoktur?',
        options: [
          { id: 'A', text: 'Bana doğruyu söylemediğini biliyorum.' },
          { id: 'B', text: 'Bize her zaman destek olan kişi sendin.' },
          { id: 'C', text: 'Sana anlattığım her şey aramızda kalacak.' },
          { id: 'D', text: 'Bana sormadan hiçbir işe kalkışma.' },
          { id: 'E', text: 'Sana bu konuda sonuna kadar güveniyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "biz" zamiri -e hal eki almış (bize) ancak kökünde bir ünlü değişimi olmamıştır. Sadece "ben" ve "sen" zamirlerinde (bana, sana) ünlü değişimi olur.'
      }
    ]
  },
  {
    id: 'test-zamirler-12-orta',
    title: 'Zamirler 12 (Orta)',
    description: 'Zamirler - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-zm-12-11',
        difficulty: 'medium',
        questionText: 'Zamirler de isimler gibi isim tamlamalarında tamlayan veya tamlanan olabilir. Aşağıdakilerin hangisinde zamir, isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Öğrencilerin birkaçı derse geç kaldı.' },
          { id: 'B', text: 'Soruların hepsi oldukça kolay görünüyordu.' },
          { id: 'C', text: 'Onun düşünceleri bizim için çok değerlidir.' },
          { id: 'D', text: 'Çocuklardan hangisi bu soruyu çözebilir?' },
          { id: 'E', text: 'Adamın kimsesi yokmuş gibi yalnızdı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Onun düşünceleri" isim tamlamasında "Onun" (kişi zamiri) tamlayan görevindedir. Diğer seçeneklerde zamirler (birkaçı, hepsi, hangisi, kimsesi) tamlanan görevindedir.'
      },
      {
        id: 'q-zm-12-12',
        difficulty: 'medium',
        questionText: '"Ne" kelimesi kullanıldığı yere göre farklı kelime türlerinde olabilir. Aşağıdaki cümlelerin hangisinde "ne" kelimesi soru zamiri olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne bakıyorsun bana öyle tuhaf tuhaf?' },
          { id: 'B', text: 'Bu güzel pastayı yapmak için ne malzemeler kullandın?' },
          { id: 'C', text: 'Senin ne gün geleceğini kimse bilmiyor.' },
          { id: 'D', text: 'Bana pazardan gelirken ne aldın?' },
          { id: 'E', text: 'Ne ağlarsın benim zülfü siyahım?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ne" kelimesi ismin (meyve, sebze vs.) yerini soru yoluyla tuttuğu için soru zamiridir. A ve E\'de soru zarfı, B ve C\'de ise soru sıfatı olarak kullanılmıştır.'
      },
      {
        id: 'q-zm-12-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem işaret hem de belgisiz zamir bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu bana kimin söylediğini hatırlamıyorum.' },
          { id: 'B', text: 'Bunları alıp herkese tek tek dağıtacaksın.' },
          { id: 'C', text: 'Herkes kendi işini en iyi şekilde yapmalı.' },
          { id: 'D', text: 'Onlar yarın memleketten döneceklermiş.' },
          { id: 'E', text: 'Şunları oraya dikkatlice bırak.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bunları" kelimesi işaret zamiri, "herkese" kelimesi belgisiz zamirdir. İkisi bir arada kullanılmıştır.'
      },
      {
        id: 'q-zm-12-14',
        difficulty: 'medium',
        questionText: 'İyelik ekleri (iyelik zamirleri), ismin kime veya neye ait olduğunu bildirir. Aşağıdaki altı çizili kelimelerin hangisinde iyelik zamiri kullanılmıştır? (Kelime büyük harfle yazılmıştır)',
        options: [
          { id: 'A', text: 'BİZİM buraların havası çok temizdir.' },
          { id: 'B', text: 'SENİN fikirlerin her zaman çok değerli.' },
          { id: 'C', text: 'Bugün KALEMİMİ evde unutmuşum.' },
          { id: 'D', text: 'KİMSENİN bu olaydan haberi yoktu.' },
          { id: 'E', text: 'BANA bunu daha önce söylemeliydin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "kalem-im-i" sözcüğündeki "-im" eki, ismin kime ait olduğunu bildiren iyelik ekidir (iyelik zamiri). Diğer seçeneklerdeki kelimelerde iyelik eki yoktur.'
      },
      {
        id: 'q-zm-12-15',
        difficulty: 'medium',
        questionText: 'Bir zamir, ek fiil (ek eylem) alarak cümlede yüklem olabilir. Aşağıdakilerin hangisinde zamir yüklem olmamıştır?',
        options: [
          { id: 'A', text: 'Bu hayatta en güvendiğim kişi sensin.' },
          { id: 'B', text: 'Bütün bu olayların tek sorumlusu bendim.' },
          { id: 'C', text: 'Dün akşam arayan kişi oydu.' },
          { id: 'D', text: 'Şu an masanın üzerinde duran kitap benimkidir.' },
          { id: 'E', text: 'Bizi burada saatlerce bekleten şey trafikti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde yüklem "trafikti" sözcüğüdür ve isimdir. Diğer seçeneklerde sensin, bendim, oydu, benimkidir sözcükleri zamirdir ve yüklem olmuşlardır.'
      },
      {
        id: 'q-zm-12-16',
        difficulty: 'medium',
        questionText: '"Ki" ekinin kullanıldığı aşağıdaki cümlelerin hangisinde "ki" ilgi zamiri değildir?',
        options: [
          { id: 'A', text: 'Benim projem seninkinden daha iyi oldu.' },
          { id: 'B', text: 'Sokaktaki çocukların sesleri buraya kadar geliyor.' },
          { id: 'C', text: 'Onun saati bozulmuş, benimkini kullanacak.' },
          { id: 'D', text: 'Bizim okulun bahçesi sizinkinden daha büyük.' },
          { id: 'E', text: 'Senin arabanı sattık, şimdi onunkiyle idare ediyoruz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Sokaktaki" kelimesinde bulunan "-ki", ismin önüne gelerek onu niteleyen sıfat yapan yapım ekidir. Diğerlerindeki -ki ekleri ismin yerini tutan ilgi zamiridir.'
      },
      {
        id: 'q-zm-12-17',
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
        id: 'q-zm-12-18',
        difficulty: 'medium',
        questionText: 'Dönüşlülük zamiri "kendi", kişi zamiriyle birlikte kullanılarak pekiştirme yapabilir. Aşağıdakilerin hangisinde bu kullanıma örnek vardır?',
        options: [
          { id: 'A', text: 'Kendini bu kadar üzmemelisin.' },
          { id: 'B', text: 'Çocuk artık kendi başına yemek yiyebiliyor.' },
          { id: 'C', text: 'Bu resmi ben kendim çizdim.' },
          { id: 'D', text: 'Kendisine söylenenleri hiç umursamadı.' },
          { id: 'E', text: 'Adam kendi kendine konuşarak yürüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ben" kişi zamiri ve "kendim" dönüşlülük zamiri bir arada kullanılarak eylemi yapan kişi pekiştirilmiştir.'
      },
      {
        id: 'q-zm-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde adlaşmış sıfat, işaret zamirine çok benzer bir yapıda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şunları da poşete koyar mısın?' },
          { id: 'B', text: 'Bunu sana kimin söylediğini merak ediyorum.' },
          { id: 'C', text: 'Onları vazoya dikkatlice yerleştirdim.' },
          { id: 'D', text: 'Oraya ulaşmak için epey yol yürüdük.' },
          { id: 'E', text: 'Eskileri atıp yenilerini almanın zamanı geldi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Eskileri" ve "yenilerini" kelimeleri "eski eşyaları/kıyafetleri" anlamındadır ve adlaşmış sıfattır.'
      },
      {
        id: 'q-zm-12-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Beni de beraber götürün gittiğiniz yere.' },
          { id: 'B', text: 'Bütün sokaklar bana çıkıyor bu şehirde.' },
          { id: 'C', text: 'Kimsesiz çocukların gözyaşlarıdır bu yağan.' },
          { id: 'D', text: 'Hangi yola sapsam karşıma sen çıkıyorsun.' },
          { id: 'E', text: 'Herkes kendi derdine düşmüş, kimin umurunda.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Herkes" kelimesi belgisiz zamirdir.'
      }
    ]
  },
  {
    id: 'test-zamirler-12-zor',
    title: 'Zamirler 12 (Zor)',
    description: 'Zamirler - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-zm-12-21',
        difficulty: 'hard',
        questionText: 'Kişi zamirleri ile isim tamlaması kurulduğunda tamlanan eki (iyelik eki) düşebilir. Aşağıdakilerin hangisinde bu kurala uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Benim defterim evde kalmış.' },
          { id: 'B', text: 'Senin fikirlerine her zaman saygı duyarım.' },
          { id: 'C', text: 'Bu ev bizim, diyerek övünüyordu.' },
          { id: 'D', text: 'Bizim okul sizinkinden daha uzakta.' },
          { id: 'E', text: 'Onun düşünceleri bizimkilerle uyuşmuyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bizim" sözcüğünün aslı "bizim evimiz" şeklindedir. Tamlanan (evimiz) ve iyelik eki düşmüş, sadece tamlayan eki almış kişi zamiri (biz-im) kalmıştır.'
      },
      {
        id: 'q-zm-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir öbeği kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendi kendine konuşarak yolda yürüyordu.' },
          { id: 'B', text: 'Öğrencilerden birkaçı bu durumu kabullenemedi.' },
          { id: 'C', text: 'Herkes kendi derdine düşmüş, kimin umurunda.' },
          { id: 'D', text: 'Kimsenin gözünün yaşına bakmadan ilerledi.' },
          { id: 'E', text: 'Onlardan bazıları yarınki sınava girmeyecekmiş.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Onlardan bazıları" ifadesi iki zamirin (kişi zamiri "onlar" ve belgisiz zamir "bazıları") ayrılma hal eki vasıtasıyla oluşturduğu bir zamir öbeğidir.'
      },
      {
        id: 'q-zm-12-23',
        difficulty: 'hard',
        questionText: '"O" sözcüğü kullanıldığı yere göre kişi zamiri, işaret zamiri veya işaret sıfatı olabilir. Aşağıdakilerin hangisinde "o" sözcüğü sıfat tamlamasının tamlayanı gibi görünmesine rağmen aslında zamirdir?',
        options: [
          { id: 'A', text: 'O eski günleri hatırladıkça gözlerim dolar.' },
          { id: 'B', text: 'O adamı daha önce de burada görmüştüm.' },
          { id: 'C', text: 'Ben onu hiçbir zaman böyle düşünmemiştim.' },
          { id: 'D', text: 'O, masanın üzerindeki kırmızı kitabı aldı.' },
          { id: 'E', text: 'O karanlık gecede yolumuzu kaybetmiştik.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "O" sözcüğünden sonra virgül getirilerek onun özne (kişi zamiri) olduğu belirtilmiştir. Virgül olmasaydı sıfat sanılabilirdi.'
      },
      {
        id: 'q-zm-12-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem hal eki, hem iyelik eki hem de çoğul eki almış bir zamir vardır?',
        options: [
          { id: 'A', text: 'İçimizden biri bu gece yola çıkacak.' },
          { id: 'B', text: 'Bizimkiler yine akşam yemeğine geç kaldı.' },
          { id: 'C', text: 'Bazıları bu durumu hiç umursamıyordu.' },
          { id: 'D', text: 'Kendilerini çok zeki sanan insanlar yanılırlar.' },
          { id: 'E', text: 'Kimsenin kimseye güveni kalmamış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Kendilerini" kelimesi kök olan "kendi"ye -ler (çoğul), -i (iyelik), -n (kaynaştırma), -i (belirtme hal eki) alarak tüm bu ekleri barındırmaktadır.'
      },
      {
        id: 'q-zm-12-25',
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
        explanation: 'E seçeneğinde "benlik" kelimesi isimdir. Diğer seçeneklerdeki bencil, sensiz, kimsesiz, bencilce sözcükleri sıfattır.'
      },
      {
        id: 'q-zm-12-26',
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
        id: 'q-zm-12-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde dönüşlülük zamiri ("kendi") hal eki aldığı için anlamı değişerek deyimleşmiş veya isimleşmiştir?',
        options: [
          { id: 'A', text: 'Bunu kendisi de biliyordu ama itiraf edemiyordu.' },
          { id: 'B', text: 'Kendi evimde bile rahat edemiyorum.' },
          { id: 'C', text: 'Tüm bu işleri kendi başına halletmiş.' },
          { id: 'D', text: 'Kendime yeni bir bilgisayar almayı düşünüyorum.' },
          { id: 'E', text: 'Kendinden geçmiş bir halde sokakta yatıyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "kendinden geçmek" deyimi içinde yer alan "kendi" sözcüğü, ayrılma hal eki alarak şuurunu kaybetmek anlamında mecazlaşmıştır.'
      },
      {
        id: 'q-zm-12-28',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü kullanıldığı yere göre farklı sözcük türlerinde olabilir. Aşağıdaki cümlelerin hangisinde "ne" sözcüğü farklı bir türde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senin ne dediğini inanki anlamıyorum.' },
          { id: 'B', text: 'Ne bakıyorsun bana öyle tuhaf tuhaf?' },
          { id: 'C', text: 'Bana pazardan ne aldın?' },
          { id: 'D', text: 'Bugün toplantıda ne konuştunuz?' },
          { id: 'E', text: 'Çocuklardan ne istediklerini hala çözemedim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Ne" kelimesi "neden, niçin" anlamında kullanıldığı için soru zarfıdır. Diğer seçeneklerde ismin yerini tuttuğu için soru zamiridir.'
      },
      {
        id: 'q-zm-12-29',
        difficulty: 'hard',
        questionText: 'İyelik zamiri (iyelik eki) ile hal eki (belirtme hal eki -i) birbirine sıkça karıştırılır. Aşağıdakilerin hangisinde altı çizili sözcükte sadece belirtme hal eki (-i) kullanılmıştır? (Altı çizili kısım büyük harfle yazılmıştır)',
        options: [
          { id: 'A', text: 'Onun KİTABI bende kalmış.' },
          { id: 'B', text: 'Çocuğun KALEMİ masadan düştü.' },
          { id: 'C', text: 'KİTABI okuduktan sonra yerine bırak.' },
          { id: 'D', text: 'Arabanın LASTİĞİ yolda patladı.' },
          { id: 'E', text: 'Evin KAPISI açık unutulmuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "KİTABI" kelimesindeki -ı eki belirtme hal ekidir (Neyi oku? Kitabı). Diğer seçeneklerde iyelik ekleri (iyelik zamiri) kullanılmıştır.'
      },
      {
        id: 'q-zm-12-30',
        difficulty: 'hard',
        questionText: 'Zamirler yapılarına göre basit, türemiş ve birleşik olabilir. Buna göre aşağıdakilerin hangisinde birleşik yapılı bir zamir yoktur?',
        options: [
          { id: 'A', text: 'Hiçkimse bu konuda ona yardımcı olamadı.' },
          { id: 'B', text: 'Öğrencilerin birkaçı derse geç kaldı.' },
          { id: 'C', text: 'Birçoğu sınava girmekten vazgeçti.' },
          { id: 'D', text: 'Birtakımı oylamaya katılmaktan vazgeçti.' },
          { id: 'E', text: 'Bazıları bu durumu kendi lehine çevirdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Bazıları" kelimesi basit/çekimli kabul edilir ancak birleşik değildir. Diğer seçeneklerdeki hiçkimse, birkaçı, birçoğu, birtakımı kelimeleri birleşiktir.'
      }
    ]
  }
];
