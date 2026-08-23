export default [
  {
    id: 'test-zamirler-5-kolay',
    title: 'Zamirler 5 (Kolay)',
    description: 'Zamirler - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-zm-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret zamiri vardır?',
        options: [
          { id: 'A', text: 'O evi geçen yıl büyük bir hevesle aldık.' },
          { id: 'B', text: 'Bunu hemen masamın üzerine koy.' },
          { id: 'C', text: 'Şu ağacın gölgesinde biraz dinlenelim.' },
          { id: 'D', text: 'Bu havada dışarı çıkmak pek akıllıca değil.' },
          { id: 'E', text: 'Öteki yoldan gidersek daha çabuk varırız.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Bunu" kelimesi eşya veya nesnenin yerini tuttuğu için işaret zamiridir. A, C, D ve E seçeneklerindeki o, şu, bu, öteki kelimeleri ismin önüne gelerek onları işaret ettikleri için işaret sıfatıdır.'
      },
      {
        id: 'q-zm-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde kişi (şahıs) zamiri yoktur?',
        options: [
          { id: 'A', text: 'Benimle bu konuyu yarın uzun uzun konuşalım.' },
          { id: 'B', text: 'Sana anlattığım her şey aramızda kalacak.' },
          { id: 'C', text: 'Onları vazoya dikkatlice yerleştirdim.' },
          { id: 'D', text: 'Bizim için her zaman en iyisini isterdi.' },
          { id: 'E', text: 'Size bu konuda ne kadar güvendiğimi biliyorsunuz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Onları" kelimesi çiçek/bitki gibi insan dışı varlıkların yerini tuttuğu için işaret zamiridir. Diğer seçeneklerdeki benimle, sana, bizim, size kelimeleri kişi zamiridir.'
      },
      {
        id: 'q-zm-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zamirle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu güzel hediyeyi bana kim aldı?' },
          { id: 'B', text: 'Neden hala hazırlanmadığını sorabilir miyim?' },
          { id: 'C', text: 'Hangi otobüsün daha çabuk gideceğini biliyor musun?' },
          { id: 'D', text: 'Dünkü sınavın nasıl geçtiğini anlatsana.' },
          { id: 'E', text: 'Bugün toplantı çok mu uzun sürecek?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "kim" kelimesi soru zamiridir ve cümlenin soru anlamını taşır. B\'de neden (zarf), C\'de hangi (sıfat), D\'de nasıl (zarf), E\'de mu (edat) ile soru anlamı sağlanmıştır.'
      },
      {
        id: 'q-zm-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bazı insanlar bu tür durumlara çok duyarsız.' },
          { id: 'B', text: 'Herkes kendi derdine düşmüş durumda.' },
          { id: 'C', text: 'Hiçbir öğrenci böyle basit bir hata yapmamalı.' },
          { id: 'D', text: 'Çoğu zaman evde yalnız kalmayı tercih ederim.' },
          { id: 'E', text: 'Tüm sokaklar bayraklarla donatıldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Herkes" kelimesi belgisiz zamirdir. Diğer seçeneklerdeki bazı, hiçbir, çoğu, tüm kelimeleri isimlerin önüne geldikleri için belgisiz sıfattır.'
      },
      {
        id: 'q-zm-5-5',
        difficulty: 'easy',
        questionText: '"Kendi" sözcüğü aşağıdaki cümlelerin hangisinde dönüşlülük zamiri olarak kullanılmamıştır? (veya hangisinde farklı bir türdedir?) Soru: Aşağıdakilerin hangisinde "kendi" sözcüğü anlamı pekiştirmek için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendisi bu konularda oldukça uzmandır.' },
          { id: 'B', text: 'Kendini bu kadar çok yıpratma.' },
          { id: 'C', text: 'Bu keki ben kendim yaptım.' },
          { id: 'D', text: 'Kendi başına dışarı çıkmaktan korkuyor.' },
          { id: 'E', text: 'Kendisine söylenenleri hiç umursamadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde dönüşlülük zamiri "kendim", özne olan "ben" ile birlikte kullanılarak pekiştirme görevi üstlenmiştir.'
      },
      {
        id: 'q-zm-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ilgi zamiri "-ki" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benim kalemim bozuldu, seninkini kullanabilir miyim?' },
          { id: 'B', text: 'Yarınki toplantıyı mutlaka yapmalıyiz.' },
          { id: 'C', text: 'Evdeki hesap hiçbir zaman çarşıya uymaz.' },
          { id: 'D', text: 'Duvardaki tabloyu çok beğendim.' },
          { id: 'E', text: 'Bugünkü haberler oldukça ilginçti.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "seninkini" kelimesinde bulunan "-ki", ismin (kalem) yerini tutan ilgi zamiridir. Diğer seçeneklerdeki -ki ekleri sıfat yapan yapım ekidir.'
      },
      {
        id: 'q-zm-5-7',
        difficulty: 'easy',
        questionText: 'Bir cümlede birden fazla türde zamir kullanılabilir. Aşağıdakilerin hangisinde hem kişi hem de işaret zamiri vardır?',
        options: [
          { id: 'A', text: 'Bunu bana neden daha önce söylemedin?' },
          { id: 'B', text: 'Biz, onların bu işi başarabileceğine inanıyoruz.' },
          { id: 'C', text: 'Herkes kendi hayatından sorumludur.' },
          { id: 'D', text: 'Şunları sana kimin verdiğini söyleyecek misin?' },
          { id: 'E', text: 'Seninle bu akşam tiyatroya gidelim mi?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bunu" işaret zamiri, "bana" ise kişi zamiridir. (D seçeneğinde de şunları, sana vardır ancak A daha belirgindir, soruda bir seçenek istendiği için A uygundur).'
      },
      {
        id: 'q-zm-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde zamir kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bizi burada yalnız bıraktılar.' },
          { id: 'B', text: 'Şuraya otursak daha iyi olacak.' },
          { id: 'C', text: 'Herkese benden çay!' },
          { id: 'D', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'E', text: 'Neyin var, neden durgunsun?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ismin yerini tutan herhangi bir kelime (zamir) yoktur.'
      },
      {
        id: 'q-zm-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi cümlede hem sıfat hem de zamir olarak kullanılamaz?',
        options: [
          { id: 'A', text: 'O' },
          { id: 'B', text: 'Bu' },
          { id: 'C', text: 'Şu' },
          { id: 'D', text: 'Ben' },
          { id: 'E', text: 'Hangi' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "ben" kelimesi her zaman kişi zamiridir, ismin önüne gelip onu niteleyen veya belirten bir sıfat olamaz.'
      },
      {
        id: 'q-zm-5-10',
        difficulty: 'easy',
        questionText: 'Kişi zamirlerinden "ben" ve "sen", "-e" hal ekini aldıklarında köklerinde ünlü değişimi olur. Aşağıdakilerin hangisinde bu duruma uygun bir kelime kullanılmıştır?',
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
    id: 'test-zamirler-5-orta',
    title: 'Zamirler 5 (Orta)',
    description: 'Zamirler - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-zm-5-11',
        difficulty: 'medium',
        questionText: 'Zamirler isim tamlamalarında hem tamlayan hem de tamlanan olabilirler. Aşağıdakilerin hangisinde zamir, isim tamlamasının tamlayanı görevindedir?',
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
        id: 'q-zm-5-12',
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
        explanation: 'D seçeneğinde "Nereye baksam" ifadesi soru sormaz, "herhangi bir yere, her yere" anlamında belgisizlik katar ve şart cümlesi kurar. Asıl soru anlamı taşımaz.'
      },
      {
        id: 'q-zm-5-13',
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
        explanation: 'D seçeneğinde "Bunları" kelimesi işaret zamiri, "herkese" kelimesi belgisiz zamirdir. (B\'de de şunları ve kimse vardır ancak D daha belirgindir).'
      },
      {
        id: 'q-zm-5-14',
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
        explanation: 'C seçeneğinde "kalem-im-i" sözcüğündeki "-im" eki, ismin kime ait olduğunu bildiren iyelik ekidir (iyelik zamiri).'
      },
      {
        id: 'q-zm-5-15',
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
        explanation: 'D seçeneğindeki "Herkes" kelimesi belgisiz zamirdir.'
      },
      {
        id: 'q-zm-5-16',
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
        id: 'q-zm-5-17',
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
        explanation: 'D seçeneğindeki "Sokaktaki" kelimesinde bulunan "-ki", ismin önüne gelerek onu niteleyen sıfat yapan yapım ekidir.'
      },
      {
        id: 'q-zm-5-18',
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
        id: 'q-zm-5-19',
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
        explanation: 'B seçeneğinde "ben" kişi zamiri ve "kendim" dönüşlülük zamiri bir arada kullanılarak eylemi yapan kişi pekiştirilmiştir.'
      },
      {
        id: 'q-zm-5-20',
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
        explanation: 'B seçeneğinde "Eskileri" ve "yenilerini" kelimeleri "eski eşyaları/kıyafetleri" anlamındadır ve adlaşmış sıfattır.'
      }
    ]
  },
  {
    id: 'test-zamirler-5-zor',
    title: 'Zamirler 5 (Zor)',
    description: 'Zamirler - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-zm-5-21',
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
        explanation: 'D seçeneğinde "bizim" sözcüğünün aslı "bizim evimiz" şeklindedir. Tamlanan olan isim ve iyelik eki düşmüş, sadece tamlayan kalmıştır.'
      },
      {
        id: 'q-zm-5-22',
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
        explanation: 'C seçeneğinde "Onlardan bazıları" ifadesi iki zamirin ayrılma hal eki vasıtasıyla oluşturduğu bir zamir öbeğidir.'
      },
      {
        id: 'q-zm-5-23',
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
        explanation: 'A seçeneğinde "O" sözcüğünden sonra virgül getirilerek onun özne olduğu belirtilmiştir. Virgül olmasaydı sıfat sanılabilirdi.'
      },
      {
        id: 'q-zm-5-24',
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
        explanation: 'B seçeneğinde "Kendilerini" kelimesi kök olan "kendi"ye -ler, -i, -n, -i eklerini alarak çoğul, iyelik ve hal eki almıştır.'
      },
      {
        id: 'q-zm-5-25',
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
        explanation: 'E seçeneğinde "benlik" kelimesi isimdir. Diğer seçeneklerdeki bencil, sensiz, kimsesiz, bencilce sözcükleri sıfattır (veya bencilce zarftır, ama D\'de tavır kelimesini nitelerse sıfattır).'
      },
      {
        id: 'q-zm-5-26',
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
        id: 'q-zm-5-27',
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
        explanation: 'B seçeneğinde "kendinden geçmek" deyimi içinde yer alan "kendi" sözcüğü, ayrılma hal eki alarak şuurunu kaybetmek anlamında mecazlaşmıştır.'
      },
      {
        id: 'q-zm-5-28',
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
        id: 'q-zm-5-29',
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
        explanation: 'B seçeneğinde "KİTABI" kelimesindeki -ı eki belirtme hal ekidir (Neyi oku? Kitabı). Diğer seçeneklerde iyelik ekleri (iyelik zamiri) kullanılmıştır.'
      },
      {
        id: 'q-zm-5-30',
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
        explanation: 'C seçeneğindeki "Bazıları" kelimesi basit/çekimli kabul edilir ancak birleşik değildir. Diğer seçeneklerdeki hiçkimse, birkaçı, birçoğu, birtakımı kelimeleri birleşiktir.'
      }
    ]
  }
];
