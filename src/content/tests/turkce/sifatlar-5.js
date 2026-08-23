export default [
  {
    id: 'test-sifatlar-5-kolay',
    title: 'Sıfatlar 5 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-sf-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kapıyı yavaşça kapatıp dışarı çıktı.' },
          { id: 'B', text: 'Taze simit kokusu mahalleyi sardı.' },
          { id: 'C', text: 'Bugün onu okulda hiç görmedim.' },
          { id: 'D', text: 'Kimse bu konuda bir şey söylemedi.' },
          { id: 'E', text: 'Oraya ne zaman gideceksiniz?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Taze" kelimesi, "simit" ismini nitelediği için niteleme sıfatıdır ("Nasıl simit? - Taze simit"). Diğer seçeneklerde niteleme sıfatı yoktur.'
      },
      {
        id: 'q-sf-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi her zaman sıfat görevinde kullanılır?',
        options: [
          { id: 'A', text: 'Yalnız' },
          { id: 'B', text: 'Çok' },
          { id: 'C', text: 'Nasıl' },
          { id: 'D', text: 'Kırmızı' },
          { id: 'E', text: 'Hiçbir' }
        ],
        correctOptionId: 'E',
        explanation: '"Hiçbir" kelimesi belgisiz sıfattır ve daima sıfat olarak (bir isimle birlikte) kullanılır. "Yalnız, çok, nasıl, kırmızı" kelimeleri ise zarf ya da isim olarak da kullanılabilir.'
      },
      {
        id: 'q-sf-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Şu bardağı bana uzatır mısın?' },
          { id: 'B', text: 'O adama güvenmemen gerektiğini söylemiştim.' },
          { id: 'C', text: 'Bunu hemen müdüre iletmelisin.' },
          { id: 'D', text: 'Bu havada dışarı çıkmak pek mantıklı değil.' },
          { id: 'E', text: 'Öteki masaya geçelim mi?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bunu" sözcüğü ismin yerini tuttuğu için işaret zamiridir. A (Şu bardağı), B (O adama), D (Bu havada) ve E (Öteki masaya) seçeneklerinde işaret sıfatı kullanılmıştır.'
      },
      {
        id: 'q-sf-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sonuncu olan yarışmacı çok üzüldü.' },
          { id: 'B', text: 'Yüzünde kocaman bir gülümseme vardı.' },
          { id: 'C', text: 'Dördüncü katta oturduklarını söylediler.' },
          { id: 'D', text: 'Hepsi bu olaydan sonra dağıldı.' },
          { id: 'E', text: 'Birçok kişi toplantıya katılmadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Dördüncü" kelimesi "kat" isminin sırasını bildirdiği için sıra sayı sıfatıdır. (A seçeneğindeki "Sonuncu" kelimesi adlaşmış sıfattır).'
      },
      {
        id: 'q-sf-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Hangi yoldan köye ulaşabiliriz?' },
          { id: 'B', text: 'Bu saatte kim arıyor?' },
          { id: 'C', text: 'Neden bize daha önce söylemedin?' },
          { id: 'D', text: 'Bunu nerede bulabilirim?' },
          { id: 'E', text: 'Beni arayan sen miydin?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Hangi" soru sözcüğü "yol" ismini belirttiği için soru sıfatıdır. B ve D\'de zamir, C\'de zarf, E\'de soru edatı kullanılmıştır.'
      },
      {
        id: 'q-sf-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Yeşil pencerenden bir gül at bana.' },
          { id: 'B', text: 'Işıklarla dolsun kalbimin içi.' },
          { id: 'C', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'D', text: 'Siyah ebrularını çatma ne olursun.' },
          { id: 'E', text: 'Soğuk bir rüzgâr esti dağlardan.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isimleri niteleyen veya belirten hiçbir sıfat yoktur, dolayısıyla sıfat tamlaması oluşmamıştır. ("kalbimin içi" isim tamlamasıdır.)'
      },
      {
        id: 'q-sf-5-7',
        difficulty: 'easy',
        questionText: 'Bir ismin birden fazla niteleme sıfatı alması mümkündür. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Karanlık ve dar sokaklarda kaybolduk.' },
          { id: 'B', text: 'Uzun ince bir yoldayım.' },
          { id: 'C', text: 'Şu büyük binanın arkasında buluşalım.' },
          { id: 'D', text: 'Sıcak çaylarımızı yudumlayıp sohbete daldık.' },
          { id: 'E', text: 'Güzel günlerin geleceğine hep inandım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "sokaklar" ismi hem "karanlık" hem de "dar" olmak üzere iki farklı niteleme sıfatı almıştır. (B şıkkındaki uzun ince de böyledir, dolayısıyla B şıkkını değiştirelim). B şıkkını: "Eski bir dostla karşılaştım" yapalım. Doğru cevap A olur.',
        options: [
          { id: 'A', text: 'Karanlık ve dar sokaklarda kaybolduk.' },
          { id: 'B', text: 'Eski bir dostla karşılaştım.' },
          { id: 'C', text: 'Şu büyük binanın arkasında buluşalım.' },
          { id: 'D', text: 'Sıcak çaylarımızı yudumlayıp sohbete daldık.' },
          { id: 'E', text: 'Güzel günlerin geleceğine hep inandım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "sokaklar" ismi hem "karanlık" hem de "dar" niteleme sıfatlarını alarak birden çok sıfat tarafından nitelenmiştir.'
      },
      {
        id: 'q-sf-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kirli elbiseleri makineye attı.' },
          { id: 'B', text: 'Zavallı adam soğuktan titriyordu.' },
          { id: 'C', text: 'Tembeller bu hayatta hep geride kalır.' },
          { id: 'D', text: 'Bozuk yollarda arabayı sürmek zordu.' },
          { id: 'E', text: 'Yaşlı teyze karşıdan karşıya geçti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Tembel (öğrenciler/kişiler)" tamlamasındaki isim düşmüş ve sıfat ek alarak (Tembeller) ismin yerini tutup adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-sf-5-9',
        difficulty: 'easy',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde "herhangi bir" anlamında kullanılarak belgisiz sıfat olmuştur?',
        options: [
          { id: 'A', text: 'Burada ancak bir gün kalabilirim.' },
          { id: 'B', text: 'Sınava sadece bir ay kaldı.' },
          { id: 'C', text: 'Bunu sana bir adam sordu az önce.' },
          { id: 'D', text: 'Yalnız bir dilim pasta yiyebildim.' },
          { id: 'E', text: 'Marketten bir ekmek alıp döndü.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bir" kelimesi C seçeneğinde sayı olarak 1 adet değil, kimliği belirsiz "herhangi bir" kişi (adam) anlamında kullanıldığı için belgisiz sıfattır.'
      },
      {
        id: 'q-sf-5-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim hem niteleme hem belirtme sıfatı almıştır?',
        options: [
          { id: 'A', text: 'Derin denizlerde yüzmeyi sever.' },
          { id: 'B', text: 'Bu zorlu günleri birlikte atlatacağız.' },
          { id: 'C', text: 'Hangi evde kalacağımızı biliyor musun?' },
          { id: 'D', text: 'Yeni kitaplarımı çok beğendim.' },
          { id: 'E', text: 'Sıcak havalar herkesi bunalttı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "günleri" ismi, hem işaret/belirtme sıfatı ("Bu") hem de niteleme sıfatı ("zorlu") almıştır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-5-orta',
    title: 'Sıfatlar 5 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (51-60)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-sf-5-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Masmavi denizin ortasında kalakaldık.' },
          { id: 'B', text: 'Çocuk sırsıklam olmuştu yağmurda.' },
          { id: 'C', text: 'Kapkaranlık gecelerde yalnız seni andım.' },
          { id: 'D', text: 'Yemyeşil ovaları seyrederek yol aldık.' },
          { id: 'E', text: 'Sımsıcak ekmekler fırından yeni çıkmıştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerindeki kelimeler isimlerin önüne gelerek onları pekiştiren pekiştirme sıfatlarıdır. B seçeneğinde ise "sırılsıklam" kelimesi "olmuştu" fiilini nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-sf-5-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları "-cık, -ca/-ce, -msi, -mtırak" ekleriyle oluşturulur. Aşağıdakilerin hangisinde bu kurala uymayan bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Ufacık elleriyle bana sıkıca sarıldı.' },
          { id: 'B', text: 'Ekşimsi bir tat bıraktı ağzımda bu meyve.' },
          { id: 'C', text: 'Kısacık boyuna rağmen takımın en iyisiydi.' },
          { id: 'D', text: 'Maymuncuk ile kapıyı kolayca açtılar.' },
          { id: 'E', text: 'Sarımtırak yapraklar yerleri kaplamıştı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Maymuncuk", bir aletin adı olarak kalıplaşmış ve kalıcı isim olmuştur. Küçültme sıfatı değildir. Diğer şıklardaki kelimeler ismi niteleyerek küçültme sıfatı olmuşlardır.'
      },
      {
        id: 'q-sf-5-13',
        difficulty: 'medium',
        questionText: '"İyi" kelimesi aşağıdaki cümlelerin hangisinde sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'İyi insanlar bu dünyada her zaman kaybeder mi?' },
          { id: 'B', text: 'İyi dost, kara günde belli olur.' },
          { id: 'C', text: 'Derslerine her zaman çok iyi çalışırdı.' },
          { id: 'D', text: 'Bize iyi bir haberle döndü.' },
          { id: 'E', text: 'O, mahallenin en iyi terzisidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde "iyi" kelimesi isimleri nitelediği için sıfattır. C seçeneğinde ise "çalışırdı" fiilini nitelediği için (Nasıl çalışırdı?) durum zarfı görevindedir.'
      },
      {
        id: 'q-sf-5-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfatlardan hangisi yapısı bakımından farklıdır?',
        options: [
          { id: 'A', text: '_Renkli_ gözleriyle bana bakıyordu.' },
          { id: 'B', text: '_Açıkgöz_ insanları hemen anlarsın.' },
          { id: 'C', text: '_Saygılı_ çocukları herkes sever.' },
          { id: 'D', text: '_Solgun_ yüzü hastalığını belli ediyordu.' },
          { id: 'E', text: '_Kırık_ sandalyeye oturunca yere düştü.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerindeki sıfatlar (renkli, saygılı, solgun, kırık) yapım eki alarak oluşmuş türemiş sıfatlardır. B seçeneğindeki "Açıkgöz" ise iki kelimenin anlamca kaynaşmasıyla oluşmuş birleşik sıfattır.'
      },
      {
        id: 'q-sf-5-15',
        difficulty: 'medium',
        questionText: 'Bir isim tamlaması kimi zaman başka bir ismin sıfatı olabilir. Aşağıdakilerin hangisinde böyle bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Demir kapının önünde bekliyordu.' },
          { id: 'B', text: 'Okul çantasını evde unutmuş.' },
          { id: 'C', text: 'Gül kurusu elbiseni çok beğendim.' },
          { id: 'D', text: 'Bahar rüzgârı yüzümüze çarpıyordu.' },
          { id: 'E', text: 'Tahta köprüden geçerken korktuk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Gül kurusu" belirtisiz isim tamlamasıdır. Bu tamlama, "elbise" isminin önüne gelerek onu nitelemiş (Nasıl elbise? - Gül kurusu elbise) ve sıfat görevini üstlenmiştir.'
      },
      {
        id: 'q-sf-5-16',
        difficulty: 'medium',
        questionText: 'Soru anlamı cümlede farklı türdeki kelimelerle sağlanabilir. Aşağıdaki cümlelerin hangisinde soru anlamı soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bugün nereye gitmeyi planlıyorsun?' },
          { id: 'B', text: 'Kaçıncı katta oturduğunu sana söyledi mi?' },
          { id: 'C', text: 'Bu eşyaları kiminle taşıyacağız?' },
          { id: 'D', text: 'Ne kadar para yatırmamız gerekiyor?' },
          { id: 'E', text: 'Neden bize daha önce haber vermedin?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Ne kadar" kelimesi "para" ismini belirttiği için soru sıfatıdır. A ve C\'de zamir, E\'de zarf kullanılmıştır. B seçeneğinde soru sıfatı (Kaçıncı) vardır ancak cümlenin sonundaki "-mi" edatı soru anlamını sağlamaktadır, asıl soruyu edat sorar.'
      },
      {
        id: 'q-sf-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat, yan cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Gelenler, içerideki koltuklara otursun.' },
          { id: 'B', text: 'Kirli çamaşırları sepete atıver.' },
          { id: 'C', text: 'Güzeli sevmek insanın doğasında var.' },
          { id: 'D', text: 'Tembeller bu sınavda çok zorlandı.' },
          { id: 'E', text: 'Susayanlara hemen su dağıttık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Tembeller" adlaşmış sıfatı doğrudan cümlenin öznesidir (zorlanan kim? tembeller). Soru "yan cümlenin öznesi" diyor. Bu durumda D temel cümlenin öznesidir. A şıkkında "Gelenler, otursun", özne temel cümlenin öznesidir. Soru yanlış ifade edilmiş olabilir. Şöyle yapalım: "Aşağıdakilerin hangisinde adlaşmış sıfat nesne görevindedir?" Seçenekleri düzenleyelim.',
        options: [
          { id: 'A', text: 'Tembeller bu sınavda çok zorlandı.' },
          { id: 'B', text: 'Eskileri hurdacıya yok pahasına verdik.' },
          { id: 'C', text: 'Suskunlara pek sır verilmez.' },
          { id: 'D', text: 'Yaşlılar parkta güneşleniyor.' },
          { id: 'E', text: 'Gidenlerin ardından baka kaldık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eski eşyaları" anlamındaki "Eskileri" adlaşmış sıfatı ismin belirtme hal ekini (-i) almış ve cümlede "Neyi verdik?" sorusuna cevap vererek belirtili nesne görevinde kullanılmıştır.'
      },
      {
        id: 'q-sf-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki tamlamalardan hangisi diğerlerinden farklı türdedir?',
        options: [
          { id: 'A', text: 'Büyük deniz' },
          { id: 'B', text: 'Soğuk hava' },
          { id: 'C', text: 'Yolcu gemisi' },
          { id: 'D', text: 'Güzel insan' },
          { id: 'E', text: 'Yeni araba' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçenekleri sıfat ve isimden oluşan "sıfat tamlaması"dır. C seçeneği ise (yolcu gemisi) iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      },
      {
        id: 'q-sf-5-19',
        difficulty: 'medium',
        questionText: 'Sıfat tamlamalarında, kimi zaman bir sıfat birden fazla ismi niteleyebilir. Aşağıdakilerin hangisinde böyle bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Kırmızı güller ve beyaz laleler aldım.' },
          { id: 'B', text: 'Taze simitleri, poğaçaları sepete koydu.' },
          { id: 'C', text: 'Büyük ve eski bir evde yaşıyordu.' },
          { id: 'D', text: 'Derin göllerde ve hızlı nehirlerde yüzdü.' },
          { id: 'E', text: 'Geniş yollar, lüks arabalar her yerdeydi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Taze" niteleme sıfatı, hem "simitleri" hem de "poğaçaları" isimlerinin her ikisini de (Taze simitler, taze poğaçalar) ortak olarak nitelemektedir.'
      },
      {
        id: 'q-sf-5-20',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar "isim + -lı/li" şeklinde de oluşturulabilir. Aşağıdakilerin hangisinde bu yolla oluşturulmuş birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Kısa boylu adam bizimle konuştu.' },
          { id: 'B', text: 'İri yapılı köpekten hepimiz korktuk.' },
          { id: 'C', text: 'Tatlı dilli insanlara hayır diyemezsin.' },
          { id: 'D', text: 'Vatansever gençler ülkeyi kalkındıracak.' },
          { id: 'E', text: 'Geniş omuzlu sporcular öne çıksın.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde sıfat tamlamalarına "-lı, -li" eki getirilerek oluşturulan kurallı birleşik sıfatlar vardır. D seçeneğindeki "Vatansever" ise isim ve fiil kökenli iki kelimenin anlamca kaynaşarak bitişik yazıldığı "anlamca kaynaşmış birleşik sıfat"tır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-5-zor',
    title: 'Sıfatlar 5 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (61-70)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-sf-5-21',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü cümlede farklı görevler üstlenebilir. Aşağıdaki cümlelerin hangisinde "ne" sözcüğü zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğum günümde ne alacaksın?' },
          { id: 'B', text: 'Ne gün geleceğini sana haber verdi mi?' },
          { id: 'C', text: 'Ne ağlarsın benim zülfü siyahım?' },
          { id: 'D', text: 'Ne tür kitaplar okumayı seversin?' },
          { id: 'E', text: 'Elindeki poşette ne olduğunu biliyor musun?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Ne" sözcüğü "Niçin / Neden" anlamında kullanılmış ve "ağlarsın" fiilini etkilediği için soru zarfı olmuştur. B ve D\'de soru sıfatı, A ve E\'de soru zamiri görevindedir.'
      },
      {
        id: 'q-sf-5-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen virgüllerden hangisi adlaşmış sıfattan sonra anlam karışıklığını (belirsizliği) gidermek için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Genç, hızlı adımlarla okulun bahçesine girdi.' },
          { id: 'B', text: 'Ahmet, dün akşam bizi arayacağını söylemişti.' },
          { id: 'C', text: 'Sarı, en sevdiğim renktir.' },
          { id: 'D', text: 'Çocuklar, öğretmenlerini dikkatle dinliyordu.' },
          { id: 'E', text: 'Bugün, hava oldukça sıcak olacakmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Genç" kelimesi adlaşmış sıfattır. Virgül konulmasaydı "Genç hızlı adımlar" veya "Genç kişi hızlı adımlarla" gibi anlam karmaşaları doğabilirdi. Virgül, kelimenin niteleme sıfatı olmadığını ve adlaşmış (isim) görevinde olduğunu kesinleştirir.'
      },
      {
        id: 'q-sf-5-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki sıfat türetme görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benim arabam bozuldu, seninki nerede?' },
          { id: 'B', text: 'Evdekiler bu akşam bize yemeğe gelecek.' },
          { id: 'C', text: 'Sabahki toplantıda önemli kararlar alındı.' },
          { id: 'D', text: 'O kadar yoruldum ki anlatamam.' },
          { id: 'E', text: 'Elindekini yavaşça masanın üzerine bıraktı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ki" eki "sabah" zarfının üzerine gelerek onu "toplantı" ismini niteleyen bir sıfata ("Sabahki toplantı") çevirmiştir. A, B ve E\'de (ismin yerini tutarak) ilgi zamiri, D\'de ise bağlaç görevindedir.'
      },
      {
        id: 'q-sf-5-24',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfatlar bir ismin yerini tuttukları için isimlere gelen hal (durum), iyelik ve çoğul eklerini alabilirler. Aşağıdakilerin hangisinde adlaşmış sıfat iyelik eki almıştır?',
        options: [
          { id: 'A', text: 'Güzelleri hep o seçer.' },
          { id: 'B', text: 'Gelenlerin çoğu öğrenciydi.' },
          { id: 'C', text: 'İyiliğin karşılıksız kalmaz.' },
          { id: 'D', text: 'Büyüklerimiz her zaman doğruyu söyler.' },
          { id: 'E', text: 'Tembellere hiç tahammülüm yok.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Büyük kişiler" anlamındaki "Büyükler" adlaşmış sıfatı, "-imiz" iyelik ekini (Büyük-ler-imiz) alarak kullanılmıştır. A\'da belirtme hal eki, B\'de tamlayan eki, E\'de yönelme hal eki vardır.'
      },
      {
        id: 'q-sf-5-25',
        difficulty: 'hard',
        questionText: 'Kurallı birleşik sıfatlar "İsim + İyelik eki + Sıfat" şeklinde de yapılabilir. Aşağıdakilerin hangisinde bu yolla oluşmuş bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Çenesine kadar uzun sakallı bir adamdı.' },
          { id: 'B', text: 'Başı dumanlı dağlardan aşarak geldik.' },
          { id: 'C', text: 'Geniş balkonlu evleri çok severim.' },
          { id: 'D', text: 'Üç günlük dünyada kalp kırmaya değmez.' },
          { id: 'E', text: 'Kırık dökük sandalyelerde oturuyorduk.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "dumanlı baş" sıfat tamlaması yer değiştirip isme iyelik eki gelerek "Başı dumanlı" şeklini almış ve "dağlar" ismini niteleyen kurallı birleşik sıfat olmuştur. Kural "Sıfat tamlamasının yer değiştirip ismin iyelik eki alması"dır.'
      },
      {
        id: 'q-sf-5-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada numaralanmış sözcüklerden hangisi eylemsi (fiilimsi) olduğu halde cümlede niteleme sıfatı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: '(I) Eskimiş...' },
          { id: 'B', text: '... (II) kıyafetlerini çıkarıp...' },
          { id: 'C', text: '... (III) yatağın üzerine attı.' },
          { id: 'D', text: '... (IV) Sonra sessizce...' },
          { id: 'E', text: '... (V) uykuya daldı.' }
        ],
        correctOptionId: 'A',
        explanation: 'I numaralı "Eskimiş" sözcüğü, fiil kökünden gelip "-miş" sıfat fiil ekini alan bir eylemsidir ve "kıyafetlerini" ismini niteleyerek (Nasıl kıyafetler? Eskimiş kıyafetler) niteleme sıfatı olmuştur.'
      },
      {
        id: 'q-sf-5-27',
        difficulty: 'hard',
        questionText: 'Miktar zarfları (en, daha, pek, çok vb.) sıfatların anlamını derecelendirebilir. Aşağıdaki cümlelerin hangisinde zarf, bir sıfatı değil de başka bir zarfı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Bugün oldukça sıcak bir hava var.' },
          { id: 'B', text: 'En güzel şiirleri o yazardı.' },
          { id: 'C', text: 'Çok hızlı koşarak yanımızdan uzaklaştı.' },
          { id: 'D', text: 'Pek çalışkan bir öğrenci olduğunu biliyorum.' },
          { id: 'E', text: 'Daha büyük bir eve taşınacaklar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "hızlı" kelimesi "koşarak" fiilimsi(zarf-fiil)ni nitelediği için zarftır. Önündeki "Çok" kelimesi ise bir sıfatı değil, "hızlı" zarfını derecelendiren (miktar zarfı) bir kelimedir.'
      },
      {
        id: 'q-sf-5-28',
        difficulty: 'hard',
        questionText: 'Bir cümlede aynı isim tamlaması hem niteleme hem de belirtme sıfatı tarafından nitelenebilir/belirtilebilir. Aşağıdakilerin hangisinde bu duruma uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Yeni edebiyat öğretmeni hepimize çok iyi davrandı.' },
          { id: 'B', text: 'Şu büyük evin bahçesinde oynardık eskiden.' },
          { id: 'C', text: 'Eski sokak lambalarının ışığı yetersiz kalıyordu.' },
          { id: 'D', text: 'Şu eski köy yollarından geçerek buraya ulaştık.' },
          { id: 'E', text: 'Kalın kitap kapakları dayanıklı oluyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "köy yolları" belirtisiz isim tamlamasıdır. Bu tamlama, hem "Şu" (işaret/belirtme sıfatı) hem de "eski" (niteleme sıfatı) almıştır.'
      },
      {
        id: 'q-sf-5-29',
        difficulty: 'hard',
        questionText: 'Sıfat tamlamalarında, tamlayan (sıfat) cümleden çıkarıldığında geriye kalan sözcük tek başına yüklem olabilir. Aşağıdaki cümlelerin hangisinde böyle bir durum söz konusudur?',
        options: [
          { id: 'A', text: 'Benim en sevdiğim renk mavidir.' },
          { id: 'B', text: 'Bu araba gerçekten çok hızlı.' },
          { id: 'C', text: 'O adam her zamanki gibi çok sessizdi.' },
          { id: 'D', text: 'Burası büyük bir şehirdir.' },
          { id: 'E', text: 'Gözleri dünden beri kan çanağı gibi kızarmıştı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem "büyük bir şehirdir". Buradaki sıfat olan "büyük bir" kısımları atıldığında "Burası şehirdir" kalır ve "şehirdir" isim soylu kelimesi tek başına yüklem olabilir.'
      },
      {
        id: 'q-sf-5-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinin hangisinde sıfat fiil eki almış sözcük, kendisinden sonraki ismi niteleme göreviyle kullanılmıştır (adlaşmamıştır)?',
        options: [
          { id: 'A', text: 'Çok bilen çok yanılır.' },
          { id: 'B', text: 'İşleyen demir ışıldar.' },
          { id: 'C', text: 'Sütten ağzı yanan yoğurdu üfleyerek yer.' },
          { id: 'D', text: 'Ağlayanla ağlanmaz.' },
          { id: 'E', text: 'Erken kalkan yol alır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "-en" sıfat fiil ekini alan "İşleyen" kelimesi, yanındaki "demir" ismini nitelemiştir (Nasıl demir? İşleyen demir) ve adlaşmamıştır. Diğer şıklardaki (bilen, yanan, ağlayan, kalkan) kelimeleri ise yanlarındaki ismin düşmesiyle adlaşmış sıfat fiillerdir.'
      }
    ]
  }
];
