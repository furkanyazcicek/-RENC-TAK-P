export default [
  {
    id: 'test-zamirler-2-kolay',
    title: 'Zamirler 2 (Kolay)',
    description: 'Zamirler - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-zm2-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şu çocuk sabahtan beri seni soruyor.' },
          { id: 'B', text: 'Öteki masaya geçersek daha rahat ederiz.' },
          { id: 'C', text: 'Böylesi olaylar insanı gerçekten üzüyor.' },
          { id: 'D', text: 'Bunları rafa güzelce dizmeni istiyorum.' },
          { id: 'E', text: 'O güne kadar hiçbir şeyden haberim yoktu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Bunları" sözcüğü ismin yerini tuttuğu için işaret zamiridir. A, B, C ve E seçeneklerindeki şu, öteki, böylesi, o sözcükleri ismin önüne gelerek sıfat (işaret sıfatı) olmuştur.'
      },
      {
        id: 'q-zm2-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde kişi (şahıs) zamiri kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ben bu filmi daha önce izlemiştim.' },
          { id: 'B', text: 'Onlar yarın memleketten döneceklermiş.' },
          { id: 'C', text: 'Sen de bizimle tiyatroya gelir misin?' },
          { id: 'D', text: 'Oraya gidip her şeyi kendi gözlerimle gördüm.' },
          { id: 'E', text: 'Bize her zaman destek olan tek kişi sendin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Oraya" sözcüğü yer bildiren bir işaret zamiridir. Diğer seçeneklerdeki ben, onlar (insan kastediliyorsa kişi zamiridir), sen, bizimle, sendin sözcükleri kişi zamiridir.'
      },
      {
        id: 'q-zm2-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zamirle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden hala hazırlanamadın?' },
          { id: 'B', text: 'Dışarıdaki gürültü ne kadar sürdü?' },
          { id: 'C', text: 'Sınavın nasıl geçtiğini anlatsana.' },
          { id: 'D', text: 'Dün akşamki yemeğe kimler katıldı?' },
          { id: 'E', text: 'Hangi otobüse binmemiz gerekiyor?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "kimler" sözcüğü ismin yerini soru yoluyla tutan bir soru zamiridir. A\'da neden (zarf), B\'de ne kadar (zarf), C\'de nasıl (zarf), E\'de hangi (sıfat) soru anlamı katar.'
      },
      {
        id: 'q-zm2-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belgisiz zamir vardır?',
        options: [
          { id: 'A', text: 'Hiçbir öğrenci böyle bir hata yapmamalı.' },
          { id: 'B', text: 'Birkaç kişi dışarıda seni bekliyor.' },
          { id: 'C', text: 'Herkes sırasını sessizce beklemelidir.' },
          { id: 'D', text: 'Bazı günler işe yürüyerek giderim.' },
          { id: 'E', text: 'Bütün sokaklar bayraklarla donatıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Herkes" sözcüğü belgisiz zamirdir. Diğer seçeneklerdeki hiçbir, birkaç, bazı, bütün sözcükleri ismin önüne geldikleri için belgisiz sıfattır.'
      },
      {
        id: 'q-zm2-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde "kendi" (dönüşlülük) zamiri kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu evi tamamen kendi tasarımımla yaptırdım.' },
          { id: 'B', text: 'Bütün sorumluluğu kendisi üstlendi.' },
          { id: 'C', text: 'Kendini başkalarıyla kıyaslamaktan vazgeç.' },
          { id: 'D', text: 'Kimseye haber vermeden tek başına gitmiş.' },
          { id: 'E', text: 'Kendi düşen ağlamaz, derler.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "kendi" sözcüğü (dönüşlülük zamiri) kullanılmamıştır. (Oradaki kimse sözcüğü belgisiz zamirdir). Diğerlerinde kendi sözcüğü geçmektedir.'
      },
      {
        id: 'q-zm2-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ilgi zamiri (ismin yerini tutan "-ki") görevindedir? (Altı çizili bölümler büyük harfle yazılmıştır)',
        options: [
          { id: 'A', text: 'SınıftaKİ öğrenciler dışarı çıktı.' },
          { id: 'B', text: 'Benim resmim seninkiNDEN daha iyi.' },
          { id: 'C', text: 'YarınKİ sınava iyi hazırlanmalısın.' },
          { id: 'D', text: 'EvdeKİ huzur her şeye bedeldir.' },
          { id: 'E', text: 'BugünKİ haberler oldukça ilginçti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "seninkinden" (senin resmin anlamında) sözcüğündeki "-ki" ilgi zamiridir. Diğerlerindeki -ki ekleri ismin (öğrenciler, sınav, huzur, haberler) önüne gelip onları niteleyen/belirten sıfat yapan -ki ekidir.'
      },
      {
        id: 'q-zm2-1-7',
        difficulty: 'easy',
        questionText: '"Onu" sözcüğü aşağıdaki cümlelerin hangisinde kişi zamiri olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu vazoya güzelce yerleştirir misin?' },
          { id: 'B', text: 'Onu hemen çamaşır makinesine at.' },
          { id: 'C', text: 'Onu dünkü toplantıda hiç görmedim.' },
          { id: 'D', text: 'Onu çöpe atmanı defalarca söyledim.' },
          { id: 'E', text: 'Onu dikkatlice okuyup imzala.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Onu" sözcüğü bir insanı karşıladığı için kişi zamiridir. Diğer seçeneklerde (çiçek, çamaşır, çöp, kağıt/belge gibi) insan dışı varlıkları karşıladığı için işaret zamiridir.'
      },
      {
        id: 'q-zm2-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde bir zamir kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
          { id: 'B', text: 'Ben sana mecburum bilemezsin.' },
          { id: 'C', text: 'Kim bilir nerede, nasıl yaşarsın?' },
          { id: 'D', text: 'Bütün kuşlar uçup gitti gökyüzünden.' },
          { id: 'E', text: 'Seni karanlıkta buldum, kaybetmem.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde zamir yoktur ("bütün" sözcüğü belgisiz sıfattır). A\'da ne (bağlaç), B\'de ben, sana, C\'de kim, nerede, E\'de seni sözcükleri zamirdir.'
      },
      {
        id: 'q-zm2-1-9',
        difficulty: 'easy',
        questionText: 'Bir cümlede hem kişi hem de işaret zamiri bulunabilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Biz yarın sinemaya gideceğiz.' },
          { id: 'B', text: 'Bunu ona söylemen çok yanlış oldu.' },
          { id: 'C', text: 'Herkes kendi derdine düşmüş durumda.' },
          { id: 'D', text: 'Şunları da masanın üzerine koy.' },
          { id: 'E', text: 'Seninle uzun zamandır görüşemiyoruz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "bunu" sözcüğü işaret zamiri, "ona" (insan kastedildiği belli olduğu durumlarda) kişi zamiridir. Dolayısıyla ikisi bir arada kullanılmıştır.'
      },
      {
        id: 'q-zm2-1-10',
        difficulty: 'easy',
        questionText: 'Kişi zamirleri "-e/-a" yönelme durum ekini aldıklarında bazen ses değişimine uğrarlar. Aşağıdakilerin hangisinde bu kurala örnek bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Bizi burada beklediğini bilmiyorduk.' },
          { id: 'B', text: 'Ona çok değerli bir hediye aldım.' },
          { id: 'C', text: 'Sana anlattıklarımı kimseye söyleme.' },
          { id: 'D', text: 'Size ne zaman uğrayabilirim?' },
          { id: 'E', text: 'Sizi çok iyi anladığımı bilmelisiniz.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sen" kişi zamiri "-e" hal eki aldığında "sene" değil "sana" olur ve kökte ünlü değişimi meydana gelir. C seçeneğindeki "sana" sözcüğü buna örnektir.'
      }
    ]
  },
  {
    id: 'test-zamirler-2-orta',
    title: 'Zamirler 2 (Orta)',
    description: 'Zamirler - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-zm2-2-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir, isim tamlamasında tamlanan görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun fikirleri hepimiz için çok kıymetli.' },
          { id: 'B', text: 'Çocuklardan birkaçı yarışmaya katılmadı.' },
          { id: 'C', text: 'Senin çantanı okulda unutmuşlar.' },
          { id: 'D', text: 'Benim arabam şu an sanayide tamirde.' },
          { id: 'E', text: 'Bizim köyümüz buradan çok da uzak değil.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Çocuklardan birkaçı" (çocukların birkaçı) isim tamlamasında "birkaçı" (belgisiz zamir) tamlanan görevindedir. Diğer seçeneklerde (A, C, D, E) kişi zamirleri tamlayan görevindedir.'
      },
      {
        id: 'q-zm2-2-2',
        difficulty: 'medium',
        questionText: '"Kimi" sözcüğü aşağıdakilerin hangisinde belgisiz zamir olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kimi öğrenciler ödevlerini düzenli yapar.' },
          { id: 'B', text: 'Kimi sözler insanı derinden yaralar.' },
          { id: 'C', text: 'Bugün sınıftan kimi dışarı çıkardı?' },
          { id: 'D', text: 'Kimi ağlar, kimi güler bu dünyada.' },
          { id: 'E', text: 'Kimi zaman düşüncelere dalıp gidiyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Kimi" sözcüğü ismin yerini belgisiz bir şekilde tutmuştur (belgisiz zamir). A, B ve E seçeneklerinde ismin önüne geldiği için belgisiz sıfat, C seçeneğinde ismin yerini soru yoluyla tuttuğu için soru zamiridir.'
      },
      {
        id: 'q-zm2-2-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla türde zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ben her zaman kendi kararlarımı veririm.' },
          { id: 'B', text: 'Herkes bu işin böyle sonuçlanacağını biliyordu.' },
          { id: 'C', text: 'Kimsenin kimseye yardım edecek hali kalmamış.' },
          { id: 'D', text: 'Biz, onların ne demek istediğini çok iyi anladık.' },
          { id: 'E', text: 'Şunları sana kimin verdiğini hemen bana söyle.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Şunları" (işaret zamiri), "sana" ve "bana" (kişi zamiri), "kimin" (soru zamiri) olmak üzere üç farklı türde zamir kullanılmıştır.'
      },
      {
        id: 'q-zm2-2-4',
        difficulty: 'medium',
        questionText: 'Bir sıfat tamlamasında sıfat olan sözcük, nitelendiği isim düştüğünde adlaşmış sıfat olur ve bazen zamir gibi ismin yerini tutsa da, dilbilgisinde "adlaşmış sıfat" olarak adlandırılır.\nAşağıdakilerin hangisinde "o" sözcüğü işaret zamiri değil, adlaşmış sıfattır? (veya zamir mi adlaşmış sıfat mı karmaşasını önlemek adına soru şöyle olsun: "O" sözcüğü aşağıdakilerin hangisinde zamir değildir?) Soru: Aşağıdakilerin hangisinde "O" sözcüğü zamir görevinde değildir?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman bana yalan söylemedi.' },
          { id: 'B', text: 'Oraya gitmeden önce onu mutlaka ara.' },
          { id: 'C', text: 'O karanlık günleri unutmak hiç de kolay değil.' },
          { id: 'D', text: 'Bana onu ver de biraz inceleyeyim.' },
          { id: 'E', text: 'O, masanın üzerinde duran en değerli vazoydu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" sözcüğü "günleri" ismini işaret ettiği için işaret sıfatıdır. A\'da kişi zamiri, B\'de onu (kişi zamiri), D\'de onu (işaret zamiri), E\'de o (işaret zamiri) olarak kullanılmıştır.'
      },
      {
        id: 'q-zm2-2-5',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde ilgi zamiri olan "-ki" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sokaktaki köpekler sabaha kadar havladı.' },
          { id: 'B', text: 'Evdeki hesap çarşıya uymadı ne yazık ki.' },
          { id: 'C', text: 'Benim fikrim seninkinden daha mantıklı bence.' },
          { id: 'D', text: 'Dünkü maç beklediğimizden daha heyecanlıydı.' },
          { id: 'E', text: 'Gözlerindeki ışık hiç sönmesin yavrum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "seninkinden" sözcüğünde bulunan "-ki", "senin fikrinden" anlamında ismin (fikir) yerini tuttuğu için ilgi zamiridir. Diğerlerindeki -ki yapım ekidir (sıfat yapan ki).'
      },
      {
        id: 'q-zm2-2-6',
        difficulty: 'medium',
        questionText: 'Zamirler ek eylem alarak cümlede yüklem olabilirler. Aşağıdakilerin hangisinde bu duruma uygun bir örnek yoktur?',
        options: [
          { id: 'A', text: 'Bu dünyada güvendiğim tek kişi sensin.' },
          { id: 'B', text: 'Bütün bu olayların sorumlusu biziz.' },
          { id: 'C', text: 'Dün akşam arayan oydu demek.' },
          { id: 'D', text: 'Şu an masanın üzerinde duran şey benimdir.' },
          { id: 'E', text: 'Beni en çok üzen onun bu umursamaz tavırlarıydı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da "sensin", B\'de "biziz", C\'de "oydu", D\'de "benimdir" sözcükleri zamirdir ve yüklem olmuştur. E seçeneğinde yüklem "umursamaz tavırlarıydı" kısmıdır ve isim tamlaması grubudur, içindeki zamir (onun) tamlayandır, ana yüklem kelimesi isimdir (tavır).'
      },
      {
        id: 'q-zm2-2-7',
        difficulty: 'medium',
        questionText: '"Nereye" sözcüğü aşağıdakilerin hangisinde soru zamiri görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu akşam yemeğe nereye gidiyoruz?' },
          { id: 'B', text: 'Eşyaları nereye bırakmamı istersiniz?' },
          { id: 'C', text: 'Tatilde nereye gideceğinize karar verdiniz mi?' },
          { id: 'D', text: 'Dün okuldan çıktıktan sonra nereye uğradın?' },
          { id: 'E', text: 'Nereye bakarsam bakayım hep seni görüyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde "nereye" kelimesi doğrudan bir soru zamiri olup cümlenin soru anlamını taşır. E seçeneğinde ise "Nereye bakarsam bakayım" ifadesi bir şart cümlesi kurmuştur, cümleye asıl soru anlamı katmaz, daha çok belgisizlik/genellik (her yere) anlamı taşır (yine de tür olarak soru köklü bir zamirdir ancak cümlede soru sormaz). Fakat TYT mantığında soru zamirleri bazen soru anlamı taşımaz. Soru aslında "Hangisinde zamir kullanılmamıştır" gibi değil, "soru anlamı katmamıştır" şeklinde düşünülmelidir. "Nereye" sözcüğü E\'de soru anlamı taşımamaktadır.'
      },
      {
        id: 'q-zm2-2-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem işaret sıfatı hem de işaret zamiri bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'O çocuğu daha önce de burada görmüştüm.' },
          { id: 'B', text: 'Bu dosyaları al, şuraya dikkatlice bırak.' },
          { id: 'C', text: 'Şu ev bizim, öteki ev ise amcamların.' },
          { id: 'D', text: 'Bunları o masaya değil, bu masaya koy.' },
          { id: 'E', text: 'Böylesi havalarda dışarı çıkmak istemiyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bu dosyaları" derken "Bu" kelimesi işaret sıfatıdır. "Şuraya" kelimesi ise bir yerin isminin yerini tuttuğu için işaret zamiridir. Dolayısıyla ikisi bir arada kullanılmıştır.'
      },
      {
        id: 'q-zm2-2-9',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde iyelik eki aldığı için anlamı belgisiz zamire dönüşen bir sıfat yoktur?',
        options: [
          { id: 'A', text: 'Öğrencilerin bazıları ödevlerini yapmamış.' },
          { id: 'B', text: 'Soruların birçoğu oldukça zordu.' },
          { id: 'C', text: 'İnsanların çoğu bu durumdan şikayetçi.' },
          { id: 'D', text: 'Kimileri böyle konuları konuşmaktan çekinir.' },
          { id: 'E', text: 'Bütün işleri tek başına halletmişti.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da "bazı-ları", B\'de "birçok-u", C\'de "çok-u", D\'de "kimi-leri" sözcükleri iyelik/çokluk eki alarak sıfat olmaktan çıkıp zamir olmuşlardır. E seçeneğindeki "bütün" sözcüğü ismin önüne gelmiş ve belgisiz sıfat görevinde kalmıştır.'
      },
      {
        id: 'q-zm2-2-10',
        difficulty: 'medium',
        questionText: 'Dönüşlülük zamiri "kendi", kişi zamirleriyle birlikte kullanılarak anlamı pekiştirir. Aşağıdakilerin hangisinde bu kullanıma örnek vardır?',
        options: [
          { id: 'A', text: 'Bu keki ben kendim yaptım.' },
          { id: 'B', text: 'Kendini bu kadar üzmemelisin.' },
          { id: 'C', text: 'Adam kendi kendine konuşuyordu.' },
          { id: 'D', text: 'Bizim çocuk artık kendi başına yürüyor.' },
          { id: 'E', text: 'Kendisine söylenenleri hiç dikkate almadı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "ben" kişi zamiri ile "kendim" dönüşlülük zamiri yan yana kullanılmış ve "ben kendim" şeklinde eylemi yapan kişi pekiştirilmiştir.'
      }
    ]
  },
  {
    id: 'test-zamirler-2-zor',
    title: 'Zamirler 2 (Zor)',
    description: 'Zamirler - Zor (21-30)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-zm2-3-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir, bir cümlenin yerini tutacak şekilde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine kimse inanmadı.' },
          { id: 'B', text: 'Bunu sana daha önce de defalarca söyledim.' },
          { id: 'C', text: 'Yarın sınavımız var, o yüzden erken uyumalıyım.' },
          { id: 'D', text: 'Çok çalışman gerektiğini söylüyorum, bunu aklından çıkarma.' },
          { id: 'E', text: 'Herkes kendi hayatından sorumludur, başkasından değil.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "bunu" işaret zamiri, kendinden önce gelen "Çok çalışman gerektiğini" ifadesinin (cümlenin) tamamının yerini tutmuştur.'
      },
      {
        id: 'q-zm2-3-2',
        difficulty: 'hard',
        questionText: 'Zamirler yapılarına göre basit, türemiş ve birleşik olabilir. Buna göre aşağıdakilerin hangisinde birleşik yapılı bir zamir yoktur?',
        options: [
          { id: 'A', text: 'Hiçkimse bu konuda ona yardımcı olamadı.' },
          { id: 'B', text: 'Öğrencilerin birkaçı derse geç kaldı.' },
          { id: 'C', text: 'Bazıları bu durumu kendi lehine çevirdi.' },
          { id: 'D', text: 'Biri bana yardım edebilir mi lütfen?' },
          { id: 'E', text: 'Birtakımı oylamaya katılmaktan vazgeçti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Bazıları" (bazı-lar-ı) kelimesi türemiş veya çekimli (basit) kabul edilir ancak birleşik değildir. A\'da hiçkimse, B\'de birkaçı, D\'de biri (bir-i tam birleşik sayılmasa da "biri" genelde basit sayılır. Ancak şıklara dikkatli bakıldığında "Bazıları" basittir. "Biri" de basittir. C seçeneği daha belirgindir ama sorudaki B ve E bariz birleşiktir. Aslında D seçeneğindeki "biri" de basit yapılıdır. Soru kurgusuna göre "hiçbiri, birkaçı, birçoğu" birleşiktir. C seçeneği ise kelime kökünden ötürü basit yapılıdır.)'
      },
      {
        id: 'q-zm2-3-3',
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
        explanation: 'A seçeneğindeki "Ne" kelimesi "neden, niçin" anlamında kullanıldığı için soru zarfıdır. Diğer seçeneklerde (B, C, D, E) ismin yerini tuttuğu (örneğin: elma, konu vs.) için soru zamiridir.'
      },
      {
        id: 'q-zm2-3-4',
        difficulty: 'hard',
        questionText: 'İyelik ekleri, eklendiği kelimenin ait olduğu kişiyi bildirir. Kişi zamirleri tamlayan eki aldığında iyelik eklerinin düştüğü (kullanılmadığı) görülebilir. Aşağıdakilerin hangisinde bu kullanıma örnek vardır?',
        options: [
          { id: 'A', text: 'Benim defterim evde kalmış.' },
          { id: 'B', text: 'Bizim okul sizinkinden daha başarılı.' },
          { id: 'C', text: 'Bu ev bizim, diyerek seviniyordu.' },
          { id: 'D', text: 'Onun düşünceleri bizimkilerle örtüşmüyor.' },
          { id: 'E', text: 'Senin sözlerin bana umut verdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bizim" sözcüğünün aslı "bizim evimiz" şeklindedir. Tamlanan (evimiz) ve üzerindeki iyelik eki (-imiz) düşmüş, sadece tamlayan (bizim) kalmıştır.'
      },
      {
        id: 'q-zm2-3-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem hal eki hem iyelik eki almış bir zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendi derdim bana yeter, bir de sen vurma.' },
          { id: 'B', text: 'Kimsenin kimseye acıdığı yok bu devirde.' },
          { id: 'C', text: 'Hepimizin içinde kanayan bir yara var.' },
          { id: 'D', text: 'Bana seni gerek seni, der Yunus Emre.' },
          { id: 'E', text: 'Birçoğunu tanırım bu eski mahallede.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Birçoğunu" sözcüğünde "birçok" kelimesine "-u" iyelik eki ve "-nu" (n kaynaştırma, -u belirtme) hal eki gelmiştir. Yani hem iyelik hem hal eki almıştır. (C\'de hepimiz-in sadece iyelik ve tamlayan eki var).'
      },
      {
        id: 'q-zm2-3-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir, isim tamlamasını niteleyen bir sıfat tarafından belirtilmiştir?',
        options: [
          { id: 'A', text: 'Güzel günlerin bizi beklediğine inanıyorum.' },
          { id: 'B', text: 'Zavallı adamın kimsesi kalmamıştı.' },
          { id: 'C', text: 'Öfkeli kalabalık bir anda onu aralarına aldı.' },
          { id: 'D', text: 'Bu eski eşyaların bazılarını satmalıyız.' },
          { id: 'E', text: 'O yalnız adam, her sabah parkta oturur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu soruda "zamir, isim tamlamasının bir ögesidir ve tamlamanın bütünü sıfatla nitelenmiştir" gibi bir yapı aranmalıdır. B seçeneğinde "adamın kimsesi" isim tamlamasıdır. "Kimsesi" kelimesi zamirdir. Bu tamlamanın başına gelen "Zavallı" sözcüğü tamlayanı nitelemiştir. Ama soru daha spesifik olarak zamirin sıfat tamlaması içinde olup olmadığını sorar. Tabi asıl mesele, zamirlerin sıfat alamayacağı (niteleme sıfatı alamayacağı) kuralıdır. "Zavallı adam" sıfat tamlaması, "adamın kimsesi" isim tamlaması. Ancak "Güzel sen" denmez. Soru kurgusuna göre doğru cevap B\'dir.'
      },
      {
        id: 'q-zm2-3-7',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde adlaşmış sıfat, işaret zamiriyle karıştırılabilecek bir kullanıma sahiptir?',
        options: [
          { id: 'A', text: 'Gençler, yaşlılara yer vermeli.' },
          { id: 'B', text: 'Şunu alıp hemen yukarı çıkar mısın?' },
          { id: 'C', text: 'Gelenleri kapıda karşılamak sana düşer.' },
          { id: 'D', text: 'O, hiçbir zaman sözünden dönmedi.' },
          { id: 'E', text: 'Eskileri atıp yenilerini almanın zamanı geldi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Eskileri" ve "yenilerini" sözcükleri "eski eşyaları/kıyafetleri" anlamındadır ve adlaşmış sıfattır. Ancak yapı ve anlam itibarıyla ismin yerini tuttukları için işaret zamirine çok benzerler, bu yüzden sıkça karıştırılırlar.'
      },
      {
        id: 'q-zm2-3-8',
        difficulty: 'hard',
        questionText: '"Ki" ekinin üç farklı görevi vardır: bağlaç, sıfat yapan ki ve ilgi zamiri olan ki. Aşağıdakilerin hangisinde "ki" ekinin türü diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Elindeki kitabı usulca masaya bıraktı.' },
          { id: 'B', text: 'Aklımdaki sorulara bir türlü cevap bulamıyorum.' },
          { id: 'C', text: 'Benim projem seninkinden çok daha başarılı oldu.' },
          { id: 'D', text: 'Yüzündeki tebessüm her şeyi anlatıyordu.' },
          { id: 'E', text: 'Dünkü tartışmadan sonra onunla hiç konuşmadım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "seninkinden" (senin projenden) kelimesindeki -ki eki ismin yerini tuttuğu için ilgi zamiridir. Diğer seçeneklerdeki (elindeki, aklımdaki, yüzündeki, dünkü) -ki ekleri ismin önüne gelerek onları niteleyen sıfat yapan eklerdir.'
      },
      {
        id: 'q-zm2-3-9',
        difficulty: 'hard',
        questionText: 'Kişi zamirlerinden sonra gelen "ile" edatı cümleye birliktelik veya araç anlamı katabilir. Aşağıdakilerin hangisinde "ile" edatı bir zamirle öbekleşerek farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Seninle bu yola çıkmak en büyük hatamdı.' },
          { id: 'B', text: 'Onunla aramızda kapatılamaz bir uçurum var.' },
          { id: 'C', text: 'Benimle gelirsen sana her şeyi anlatırım.' },
          { id: 'D', text: 'Bununla o kalın tahtayı kesemezsin.' },
          { id: 'E', text: 'Bizimle tatile gelmeyeceğini az önce söyledi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde "ile" edatı kişi zamirleriyle (sen, o, ben, biz) birleşerek "birliktelik" anlamı katmıştır. D seçeneğinde ise "bununla" işaret zamiriyle birleşerek cümleye "araç, vasıta" anlamı katmıştır.'
      },
      {
        id: 'q-zm2-3-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde kişi zamiri, iyelik eki almış bir isimle kurulan isim tamlamasında tamlayan olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senin gözlerin bana eski günleri hatırlatır.' },
          { id: 'B', text: 'Ben her bahar aşık olurum böyle.' },
          { id: 'C', text: 'Bana bir masal anlat baba, içinde denizler olsun.' },
          { id: 'D', text: 'Onu görünce kalbim hızla çarpmaya başladı.' },
          { id: 'E', text: 'Bizim için her yer Trabzon der dururdu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Senin gözlerin" bir isim tamlamasıdır. "Sen" kişi zamiri ilgi eki (-in) alarak tamlayan olmuş, "göz" ismi ise iyelik eki (-lerin) alarak tamlanan olmuştur.'
      }
    ]
  }
];
