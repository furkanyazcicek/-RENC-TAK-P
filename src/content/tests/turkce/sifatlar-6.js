export default [
  {
    id: 'test-sifatlar-6-kolay',
    title: 'Sıfatlar 6 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-sf-6-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Boş bardakları mutfağa götürdü.' },
          { id: 'B', text: 'Dar sokaklardan geçerek meydana ulaştık.' },
          { id: 'C', text: 'Onu dünkü toplantıda hiç göremedim.' },
          { id: 'D', text: 'Kirli elleriyle yemeğe oturdu.' },
          { id: 'E', text: 'Tatlı bir tebessümle bize baktı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde niteleme sıfatı ("Nasıl?" sorusunun cevabı) yoktur. "Dünkü" kelimesi işaret etme bildirdiği için belirtme sıfatı sayılabilir. A (boş), B (dar), D (kirli) ve E (tatlı) seçeneklerinde niteleme sıfatı kullanılmıştır.'
      },
      {
        id: 'q-sf-6-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi ismin yerini tutmamış, onu işaret etmiştir?',
        options: [
          { id: 'A', text: '_Bunu_ senden hiç beklemezdim.' },
          { id: 'B', text: '_Orası_ yazın çok kalabalık olur.' },
          { id: 'C', text: '_O_ arabayı geçen hafta sattık.' },
          { id: 'D', text: '_Şunları_ hemen dolaba yerleştir.' },
          { id: 'E', text: '_Böylesi_ daha önce hiç görülmedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" kelimesi "araba" ismini işaret yoluyla belirttiği için işaret sıfatıdır (ismin yerini tutmamış, ismin önüne gelmiştir). Diğer seçeneklerdeki kelimeler (bunu, orası, şunları, böylesi) ismin yerini tutan işaret zamirleridir.'
      },
      {
        id: 'q-sf-6-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir sıfatla sağlanmamıştır?',
        options: [
          { id: 'A', text: 'Hangi takımı tutuyorsun?' },
          { id: 'B', text: 'Nasıl bir iş arıyorsunuz?' },
          { id: 'C', text: 'Dünkü sınavdan kaç puan aldın?' },
          { id: 'D', text: 'Ne tür müzikler dinlersin?' },
          { id: 'E', text: 'Bunu sana neden daha önce söylemedi?' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Hangi), B (Nasıl), C (kaç), D (Ne tür) kelimeleri bir ismi belirterek soru sıfatı görevinde kullanılmıştır. E seçeneğindeki "neden" kelimesi ise fiili nitelediği için (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-6-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde sayı sıfatının türü diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Yarışmayı birinci bitiren ödülü aldı.' },
          { id: 'B', text: 'İkinci katta oturduklarını söylediler.' },
          { id: 'C', text: 'Beşinci günün şafağında oradaydık.' },
          { id: 'D', text: 'İki adam bize doğru geliyordu.' },
          { id: 'E', text: 'Yedinci hissim beni hiç yanıltmaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki kelimeler (-ıncı / -inci ekini alanlar) "sıra sayı sıfatı"dır. D seçeneğindeki "İki" kelimesi ise "asıl sayı sıfatı"dır.'
      },
      {
        id: 'q-sf-6-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kimse bu konunun aslı nedir bilmiyor.' },
          { id: 'B', text: 'Bazı insanlar gerçekten çok anlayışsız.' },
          { id: 'C', text: 'Hepimiz senin başarılı olmanı istiyoruz.' },
          { id: 'D', text: 'Başkalarının ne düşündüğü umurumda değil.' },
          { id: 'E', text: 'Herkes kendi derdine düşmüş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Bazı" kelimesi "insanlar" isminin önüne gelerek onu belirsizlik yoluyla belirttiği için belgisiz sıfattır. Diğer şıklardaki altı çizili veya vurgulu kelimeler (kimse, hepimiz, başkaları, herkes) belgisiz zamirdir.'
      },
      {
        id: 'q-sf-6-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat tamlaması, belirtisiz isim tamlamasının arasına girmiştir?',
        options: [
          { id: 'A', text: 'Evimizin büyük salonu yeni boyandı.' },
          { id: 'B', text: 'Ahmet\'in kırık kalemi çöpe atıldı.' },
          { id: 'C', text: 'Okulun geniş bahçesinde toplandık.' },
          { id: 'D', text: 'Eski sokak lambaları hiç yanmıyor.' },
          { id: 'E', text: 'Çocuğun yırtık ayakkabısını diktiler.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "sokak lambaları" belirtisiz isim tamlamasıdır, ancak burada sıfat (Eski) araya girmemiş, başa gelmiştir! A, B, C, E şıklarında belirtili isim tamlamasının arasına sıfat girmiştir. O zaman soru kökünü düzeltelim: "Aşağıdakilerin hangisinde sıfat, belirtili isim tamlamasının arasına girmiştir?" Soru "hangisinde sıfat tamlaması, isim tamlamasının arasına girmiştir?" olmalı. Bu soruyu değiştirelim.',
        options: [
          { id: 'A', text: 'Okul çantasını evde unutmuş.' },
          { id: 'B', text: 'Yeni edebiyat öğretmeni sınıfa girdi.' },
          { id: 'C', text: 'Masanın kırık bacağını tamir ettim.' },
          { id: 'D', text: 'Mavi deniz suyu şifalıdır.' },
          { id: 'E', text: 'Büyük şehirlerin dertleri bitmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Masanın bacağı" belirtili isim tamlamasıdır ve "kırık" niteleme sıfatı tamlayan (masanın) ile tamlananın (bacağı) arasına girerek tamlananı nitelemiştir.'
      },
      {
        id: 'q-sf-6-7',
        difficulty: 'easy',
        questionText: 'Bazen bir isim, birden fazla sıfatla belirtilebilir veya nitelenebilir. Aşağıdakilerin hangisinde bir isim iki farklı sıfat almıştır?',
        options: [
          { id: 'A', text: 'Kara bulutlar gökyüzünü sardı.' },
          { id: 'B', text: 'Eski ve yırtık gömleğini çöpe attı.' },
          { id: 'C', text: 'Şu çocuk sabahtan beri susmadı.' },
          { id: 'D', text: 'Üç dilim ekmek yedim.' },
          { id: 'E', text: 'Derin denizlerde yüzmek tehlikelidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "gömlek" ismi, hem "eski" hem de "yırtık" olmak üzere iki farklı niteleme sıfatı almıştır.'
      },
      {
        id: 'q-sf-6-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaralı kuşu dikkatlice avucuna aldı.' },
          { id: 'B', text: 'Sıcak havalar herkesi bunalttı.' },
          { id: 'C', text: 'Doğruları söylemekten asla çekinme.' },
          { id: 'D', text: 'Tatlı söz yılanı deliğinden çıkarır.' },
          { id: 'E', text: 'Genç adam, hızlı adımlarla yürüdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Doğru sözler / şeyler" tamlamasındaki isim düşmüş, "doğru" sıfatı ek (-ları) alarak ismin yerine geçmiş ve adlaşmıştır.'
      },
      {
        id: 'q-sf-6-9',
        difficulty: 'easy',
        questionText: 'Bir sıfatın nitelediği ya da belirttiği isim düştüğünde sıfatın adlaşması kuralına göre, aşağıdaki altı çizili sözcüklerden hangisi adlaşmış sıfat değildir?',
        options: [
          { id: 'A', text: '_Yaşlılar_ parkta gazete okuyor.' },
          { id: 'B', text: '_Çürükleri_ hemen çöpe atın.' },
          { id: 'C', text: '_Kitapları_ raflara özenle dizdi.' },
          { id: 'D', text: '_Gelenler_ içeride çay içiyor.' },
          { id: 'E', text: '_Güzeli_ herkes sever.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitap" sözcüğü kökünden itibaren bir varlığın adıdır (isimdir), herhangi bir niteleme ya da belirtme sıfatı iken önündeki ismin düşmesiyle isimleşmemiştir. A, B, D ve E seçeneklerindeki kelimeler ise (yaşlı insanlar, çürük meyveler, gelen kişiler, güzel insan/şey) önündeki ismin düşmesiyle adlaşmış sıfatlardır.'
      },
      {
        id: 'q-sf-6-10',
        difficulty: 'easy',
        questionText: '"Bir" kelimesi aşağıdaki cümlelerin hangisinde sayı sıfatı (asıl sayı) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel bir bahar sabahı yola çıktık.' },
          { id: 'B', text: 'Bunu ancak bir sen anlayabilirsin.' },
          { id: 'C', text: 'Onunla aynı mahallede, bir yaşta büyüdük.' },
          { id: 'D', text: 'Günde sadece bir fincan kahve içerim.' },
          { id: 'E', text: 'Bir akşam aniden çıkıp geleceğim.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bir" kelimesi "tek, 1 adet" anlamında kullanıldığında sayı sıfatı olur. D seçeneğinde miktar/adet (1 fincan) belirttiği için asıl sayı sıfatıdır. A ve E\'de belgisiz sıfat, B\'de edat (sadece), C\'de ise "aynı" anlamında kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-6-orta',
    title: 'Sıfatlar 6 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (61-70)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-sf-6-11',
        difficulty: 'medium',
        questionText: 'Pekiştirilmiş sıfatlar niteledikleri ismin anlamını güçlendirir. Aşağıdaki cümlelerin hangisinde pekiştirilmiş sözcük, bir ismi nitelememiştir (sıfat değildir)?',
        options: [
          { id: 'A', text: 'Masmavi gökyüzü hepimize umut verdi.' },
          { id: 'B', text: 'Kıpkırmızı elmalardan bir kilo aldı.' },
          { id: 'C', text: 'Odası darmadağınık duruyordu, hiç toplamadı.' },
          { id: 'D', text: 'Sapsarı saçları rüzgârda uçuşuyordu.' },
          { id: 'E', text: 'Tertemiz caddelerde yürümek ne güzel!' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde pekiştirilmiş sözcükler isimleri nitelediği için sıfattır. C seçeneğindeki "darmadağınık" kelimesi ise "duruyordu" fiilini nitelediği için (Nasıl duruyordu?) durum zarfı görevindedir.'
      },
      {
        id: 'q-sf-6-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen "-cık, -ce, -msi, -mtırak" ekleriyle yapılır. Aşağıdakilerin hangisinde bu yolla oluşmuş bir küçültme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Derince bir kap getir de suyu boşaltalım.' },
          { id: 'B', text: 'Yeşilimsi gözleriyle bana bakıyordu.' },
          { id: 'C', text: 'Mayhoşumtu tatlı elmalardan yedik.' },
          { id: 'D', text: 'Kuzucuk annesini kaybedince melemeye başladı.' },
          { id: 'E', text: 'Ufacık çocuk tek başına kalmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Kuzucuk" kelimesi bir küçültme adıdır (isimdir), ismi niteleyen bir küçültme sıfatı değildir. (A: Derince kap, B: Yeşilimsi göz, E: Ufacık çocuk).'
      },
      {
        id: 'q-sf-6-13',
        difficulty: 'medium',
        questionText: 'Birleşik sıfatlar yapı bakımından "anlamca kaynaşmış" ve "kurallı birleşik" olmak üzere ikiye ayrılır. Aşağıdakilerin hangisinde anlamca kaynaşmış birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Boşboğaz bir adamla yola çıkılmaz.' },
          { id: 'B', text: 'Geniş omuzlu sporcular öne çıksın.' },
          { id: 'C', text: 'Duvarı yıkık eve kimse yaklaşamıyor.' },
          { id: 'D', text: 'İki günlük dünyada kalp kırmaya değmez.' },
          { id: 'E', text: 'Siyah saçlı kız bize doğru koştu.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki sıfatlar belirli kurallara (sıfat tamlamasına ek getirme, yer değiştirme vb.) göre oluşturulan "kurallı birleşik sıfat"lardır. A seçeneğindeki "Boşboğaz" ise iki kelimenin birleşerek yeni ve bitişik bir kavram oluşturduğu "anlamca kaynaşmış" birleşik sıfattır.'
      },
      {
        id: 'q-sf-6-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Sınavın nasıl geçtiğini kimseye söyledin mi?' },
          { id: 'B', text: 'Bunca zaman nerede kaldınız?' },
          { id: 'C', text: 'Bugün hangi dersten sınav olacağız?' },
          { id: 'D', text: 'Toplantı ne zaman bitecekmiş?' },
          { id: 'E', text: 'Bunu ona kimin anlattığını biliyor musun?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "hangi" kelimesi "ders" ismini belirttiği için soru sıfatıdır ve cümlenin soru anlamını sağlayan asıl unsurdur. (A\'da edat/zarf, B\'de zamir, D\'de zarf, E\'de zamir/edat).'
      },
      {
        id: 'q-sf-6-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde bir adlaşmış sıfat yan cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Çok okuyan, her zaman çok bilir.' },
          { id: 'B', text: 'Eskileri atmaya bir türlü kıyamıyordu.' },
          { id: 'C', text: 'Kötüler elbet cezasını bulacak.' },
          { id: 'D', text: 'Yaşlılara yer vermek saygı gereğidir.' },
          { id: 'E', text: 'Güzeli sevmek insanın doğasında vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Çok okuyan (kişi)" adlaşmış sıfattır (aynı zamanda adlaşmış sıfat-fiildir). Bu kelime yüklemin bildirdiği işi yapan, yani özne durumundadır. (Soru "yan cümlenin öznesi" demiş ama bu cümlede temel cümlenin öznesidir. Soruyu şöyle düzeltelim: "Aşağıdakilerin hangisinde adlaşmış sıfat, cümlenin öznesi görevindedir?"). Evet, düzeltildi.',
        options: [
          { id: 'A', text: 'Çok okuyan, her zaman çok bilir.' },
          { id: 'B', text: 'Eskileri atmaya bir türlü kıyamıyordu.' },
          { id: 'C', text: 'Zavallıya kimse yardım etmemiş.' },
          { id: 'D', text: 'Yaşlılara yer vermek saygı gereğidir.' },
          { id: 'E', text: 'Güzeli sevmek insanın doğasında vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Çok okuyan (insan)" adlaşmış sıfattır ve "bilir" yükleminin öznesi görevindedir. B ve E\'de nesne, C ve D\'de dolaylı tümleç görevindedir.'
      },
      {
        id: 'q-sf-6-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfatlardan hangisinin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Bana her zaman _doğru_ yolu gösterdin.' },
          { id: 'B', text: '_Sıcak_ bir yaz günü tanışmıştık.' },
          { id: 'C', text: '_Kırmızı_ araba hızla yanımdan geçti.' },
          { id: 'D', text: '_Boş_ hayaller peşinde koşmaktan yoruldum.' },
          { id: 'E', text: '_Güneşli_ günler göreceğiz çocuklar.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (doğru), B (sıcak), C (kırmızı) ve D (boş) seçeneklerindeki sıfatlar yapım eki almamış basit yapılı sıfatlardır. E seçeneğindeki "Güneş-li" sıfatı ise isimden isim yapım eki aldığı için türemiş yapılıdır.'
      },
      {
        id: 'q-sf-6-17',
        difficulty: 'medium',
        questionText: 'Bir ismin birden fazla belirtme sıfatı alması nadir de olsa mümkündür. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Şu iki adam sabahtan beri etrafa bakınıyor.' },
          { id: 'B', text: 'Soğuk ve karlı kış günleri geldi çattı.' },
          { id: 'C', text: 'Hangi uzun yoldan geldiniz buraya?' },
          { id: 'D', text: 'Bu güzel havada evde durmak istemem.' },
          { id: 'E', text: 'Eski püskü kıyafetlerle geziyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "adam" ismi, hem işaret/belirtme sıfatı ("Şu") hem de sayı/belirtme sıfatı ("iki") alarak birden fazla belirtme sıfatı almıştır. (C ve D seçeneklerinde niteleme + belirtme sıfatları vardır).'
      },
      {
        id: 'q-sf-6-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat, bir belirtisiz isim tamlamasının tamamını nitelemektedir?',
        options: [
          { id: 'A', text: 'Köyün eski muhtarı vefat etmiş.' },
          { id: 'B', text: 'Evin büyük kapısı sonuna kadar açıktı.' },
          { id: 'C', text: 'Yeni edebiyat öğretmeni derse çok geç geldi.' },
          { id: 'D', text: 'Çocuğun yırtık ayakkabısını tamir ettik.' },
          { id: 'E', text: 'Masanın kırık ayağı yere sürtünüyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "edebiyat öğretmeni" bir belirtisiz isim tamlamasıdır. "Yeni" sıfatı ise sadece "edebiyat" ismini değil, "edebiyat öğretmeni" tamlamasının bütününü nitelemektedir. A, B, D ve E seçeneklerinde sıfatlar belirtili isim tamlamalarının arasına girerek yalnızca tamlananları nitelemiştir.'
      },
      {
        id: 'q-sf-6-19',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları asıl, sıra, kesir ve üleştirme olarak dörde ayrılır. Aşağıdaki cümlelerde geçen sayı sıfatları eşleştirildiğinde hangisi dışta kalır?',
        options: [
          { id: 'A', text: 'Sınavda yirminci soruyu yapamadım.' },
          { id: 'B', text: 'Beşer kişilik gruplar oluşturuldu.' },
          { id: 'C', text: 'Çocuklara onar lira harçlık verdi.' },
          { id: 'D', text: 'Yüzde yirmi kârla satış yapılıyor.' },
          { id: 'E', text: 'Yarım elma, gönül alma.' }
        ],
        correctOptionId: 'A',
        explanation: 'B ve C (Beşer, onar) üleştirme sayı sıfatıdır. D ve E (Yüzde yirmi, yarım) kesir sayı sıfatıdır. A seçeneğindeki "yirminci" ise sıra sayı sıfatı olduğu için dışta kalır.'
      },
      {
        id: 'q-sf-6-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Körler memleketinde şaşılar padişah olur.' },
          { id: 'B', text: 'Gelen gideni aratır derler.' },
          { id: 'C', text: 'Ağlayanın malı gülene hayretmez.' },
          { id: 'D', text: 'Derdimi anlatsam dağlar ağlar.' },
          { id: 'E', text: 'Tok, açın halinden ne anlar?' }
        ],
        correctOptionId: 'D',
        explanation: 'A (körler, şaşılar), B (gelen, gideni), C (ağlayanın, gülene), E (tok, açın) seçeneklerinde adlaşmış sıfatlar vardır. D seçeneğinde ise sıfat veya adlaşmış sıfat kullanılmamıştır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-6-zor',
    title: 'Sıfatlar 6 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (71-80)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-sf-6-21',
        difficulty: 'hard',
        questionText: '"O" kelimesi cümlede kişi zamiri, işaret zamiri veya işaret sıfatı olarak kullanılabilir. Buna göre aşağıdaki cümlelerin hangisinde "O" kelimesinin türü diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman bana yalan söylemedi.' },
          { id: 'B', text: 'Onu masanın üzerinden alıp bana ver.' },
          { id: 'C', text: 'Oraya bir daha gitmeyeceğime yemin ettim.' },
          { id: 'D', text: 'O kitapları geçen hafta kütüphaneden aldım.' },
          { id: 'E', text: 'Onlar, yarınki maça gelmeyecekmiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "O" kelimesi "kitapları" ismini belirttiği için işaret sıfatıdır. A, B, C ve E seçeneklerindeki kelimeler (o, onu, oraya, onlar) ismin yerini tuttukları için zamirdir.'
      },
      {
        id: 'q-sf-6-22',
        difficulty: 'hard',
        questionText: 'Miktar zarfları (daha, en, pek, çok) sıfatlardan önce gelerek onları derecelendirir. Aşağıdaki cümlelerin hangisinde bu kurala uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Bugün çok hızlı koşarak herkesi şaşırttı.' },
          { id: 'B', text: 'Toplantıda epeyce tartıştık.' },
          { id: 'C', text: 'En güzel yılları burada geçti.' },
          { id: 'D', text: 'Daha gelmediği için biz de bekliyoruz.' },
          { id: 'E', text: 'Oldukça geç kalmıştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "güzel" kelimesi niteleme sıfatıdır. Önündeki "En" miktar zarfı, bir fiili veya zarfı değil, doğrudan "güzel" sıfatını derecelendirmiştir. A ve E\'de zarfı, B ve D\'de fiili derecelendirmiştir.'
      },
      {
        id: 'q-sf-6-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen altı çizili sıfat tamlamalarından hangisi, isme "-(s)i" iyelik eki getirilip tamlayanın yer değiştirmesi kuralıyla ("Boyu uzun adam" vb.) yapılmış bir birleşik sıfat değildir?',
        options: [
          { id: 'A', text: '_Başı dumanlı_ dağlardan geçtik.' },
          { id: 'B', text: '_Yüzü soluk_ çocuk bir köşede oturuyordu.' },
          { id: 'C', text: '_Kırık camlı_ pencerelerden soğuk giriyordu.' },
          { id: 'D', text: '_Saçı uzun_ kızlar ip atlıyordu.' },
          { id: 'E', text: '_Rengi atmış_ gömleği artık giymiyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (dumanlı baş -> başı dumanlı), B (soluk yüz -> yüzü soluk), D (uzun saç -> saçı uzun), E (atmış renk -> rengi atmış) şıkları bu kurala uygundur. C seçeneğindeki "kırık camlı" ise "sıfat tamlaması + lı/li" kuralıyla oluşturulmuş kurallı birleşik sıfattır.'
      },
      {
        id: 'q-sf-6-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgülün (,) kaldırılması bir sözcüğün sıfatken isim olmasına neden olur?',
        options: [
          { id: 'A', text: 'Genç, doktora bütün şikayetlerini anlattı.' },
          { id: 'B', text: 'Hasta, çocuğuna sevgi dolu gözlerle baktı.' },
          { id: 'C', text: 'Yaralı, kuşun kanadını nazikçe sardı.' },
          { id: 'D', text: 'Zavallı, adamın yüzüne acıyarak baktı.' },
          { id: 'E', text: 'O, karanlık sokaklarda kaybolmaktan korkuyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu soru kökünde bir karışıklık var. Virgül kalktığında genelde kelime isimken (adlaşmış sıfatken) sıfata dönüşür. "Sıfatken isim olmasına" demek terstir. O yüzden soruyu düzeltelim.',
        options: [
          { id: 'A', text: 'Hasta, adamın yüzüne acıyarak baktı.' },
          { id: 'B', text: 'Küçük, çocuğun elinden şekeri aldı.' },
          { id: 'C', text: 'İhtiyar, ağacın gölgesinde dinleniyordu.' },
          { id: 'D', text: 'Kör, adama değneğiyle vurmaya kalktı.' },
          { id: 'E', text: 'O, karanlık sokaklarda kaybolmaktan korkuyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde virgül kaldırılırsa, adlaşmış sıfatlar (Hasta, Küçük, İhtiyar, Kör) yanlarındaki ismin niteleyicisi (sıfatı) haline gelir. E seçeneğinde ise "O" kişi zamiridir, virgül kalktığında "O karanlık sokaklar" tamlamasında işaret sıfatına (zamirken sıfata) dönüşür. Soru kökünü de "Hangisinde virgülün kaldırılması bir sözcüğün zamirken sıfat olmasına neden olur?" olarak kurgulamış olduk.'
      },
      {
        id: 'q-sf-6-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz bir sözcük sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çoğu insan bu tür olaylara duyarsız kalıyor.' },
          { id: 'B', text: 'Birçok öğrenci sınavdan düşük not aldı.' },
          { id: 'C', text: 'Bazı günler işe gitmek hiç içimden gelmiyor.' },
          { id: 'D', text: 'Kimi, bu habere sevinirken kimi çok üzüldü.' },
          { id: 'E', text: 'Hiçbir mazeret başarısızlığın yerini tutamaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (Çoğu), B (Birçok), C (Bazı), E (Hiçbir) kelimeleri isimlerin önüne gelerek onları belirsizlik yoluyla belirten belgisiz sıfatlardır. D seçeneğindeki "Kimi" kelimeleri ise ismin yerini tuttuğu için belgisiz zamirdir.'
      },
      {
        id: 'q-sf-6-26',
        difficulty: 'hard',
        questionText: '"Yalnız" sözcüğü aşağıdaki cümlelerin hangisinde niteleme sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız seni sevdim bu koca dünyada.' },
          { id: 'B', text: 'Toplantıya katılırım yalnız sen de geleceksin.' },
          { id: 'C', text: 'Bu evde yıllardır yalnız yaşıyordu.' },
          { id: 'D', text: 'Yalnız insanların sorunları daha farklı olur.' },
          { id: 'E', text: 'İçeride yalnız Ahmet kalmıştı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü D seçeneğinde "insanların" ismini nitelediği için niteleme sıfatıdır. A ve E\'de edat ("sadece" anlamında), B\'de bağlaç ("ama" anlamında), C\'de ise durum zarfı görevindedir.'
      },
      {
        id: 'q-sf-6-27',
        difficulty: 'hard',
        questionText: 'Sıfat yapan "-ki" eki her zaman bitişik yazılır ve isme sorulan "Hangi?" sorusuna cevap verir. Aşağıdaki altı çizili kelimelerden hangisinde "-ki" eki sıfat türetmemiştir?',
        options: [
          { id: 'A', text: '_Bahçedeki_ çiçekler susuzluktan solmuş.' },
          { id: 'B', text: '_Akşamki_ maçı izledin mi?' },
          { id: 'C', text: 'Benim kitabım evde kaldı, _seninki_ yanında mı?' },
          { id: 'D', text: '_Yoldaki_ çalışmalar trafiği aksattı.' },
          { id: 'E', text: '_Dünkü_ toplantıda ne kararlar alındı?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "-ki" eki, "senin kitabın" anlamında bir ismin (kitabın) yerini tuttuğu için ilgi zamiridir. Diğer seçeneklerdeki "-ki" ekleri isimleri belirten (sıfat yapan) ektir.'
      },
      {
        id: 'q-sf-6-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik sıfat kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu gençler meydana dizildi.' },
          { id: 'B', text: 'Nasır tutmuş elleriyle yüzünü sildi.' },
          { id: 'C', text: 'Bembeyaz karlarla kaplıydı her yer.' },
          { id: 'D', text: 'Hiçbir söz onu teselli etmeye yetmedi.' },
          { id: 'E', text: 'Kırık dökük anılarla yaşıyorum şimdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bembeyaz" kelimesi pekiştirme yapılmış türemiş bir sıfattır, birleşik sıfat değildir. A (geniş omuzlu - kurallı birleşik), B (nasır tutmuş - sıfat fiil grubu/birleşik yapılı kabul edilebilir), D (Hiçbir - anlamca kaynaşmış), E (Kırık dökük - ikileme ile oluşmuş, genelde birleşik grup sayılır) şıklarında birden fazla kelimenin bir araya geldiği sıfatlar vardır.'
      },
      {
        id: 'q-sf-6-29',
        difficulty: 'hard',
        questionText: 'Bir cümlede adlaşmış sıfat ile normal niteleme sıfatı yan yana gelip kullanılabilir. Aşağıdakilerin hangisinde bu duruma örnek vardır?',
        options: [
          { id: 'A', text: 'Eskileri satıp yeni eşyalar aldı.' },
          { id: 'B', text: 'Tembel öğrenciler, çalışkanları kıskanır.' },
          { id: 'C', text: 'Yaşlı adam, gençlerin yanına oturdu.' },
          { id: 'D', text: 'Kötü insanlardan her zaman uzak durmalı.' },
          { id: 'E', text: 'Hastalar, uzman doktorları bekliyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Eskileri" kelimesi adlaşmış sıfattır, hemen ardındaki cümlenin devamında ise "yeni eşyalar" tamlamasında "yeni" kelimesi niteleme sıfatıdır. (Soru kökü tam yan yana olmayı kasdettiyse şıklar düzeltilebilir ama A, C, E seçeneklerinde aynı cümlede hem adlaşmış hem normal sıfat kullanılmıştır. A en belirginidir.)',
        options: [
          { id: 'A', text: 'Eskileri satıp yeni eşyalar aldı.' },
          { id: 'B', text: 'Gençler, dışarıda futbol oynuyor.' },
          { id: 'C', text: 'Zavallıya kimse yardım etmemiş.' },
          { id: 'D', text: 'Tatlı sözler söyleyerek bizi kandırdı.' },
          { id: 'E', text: 'Tembeller bu sınavda zorlandı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Eskileri" adlaşmış sıfat iken "yeni" kelimesi niteleme sıfatıdır. Cümlede her ikisi de bir arada kullanılmıştır.'
      },
      {
        id: 'q-sf-6-30',
        difficulty: 'hard',
        questionText: 'Sıfatlar bazen bir ismi değil, cümlenin tümünü kapsayacak şekilde de kullanılabilirler. Aşağıdakilerin hangisinde niteleme sıfatının nitelediği isim düştüğü için kelime kalıplaşarak tamamen isme dönüşmüştür (kalıcı isim olmuştur)?',
        options: [
          { id: 'A', text: 'Dolmuş, durağa yaklaştığında tamamen doluydu.' },
          { id: 'B', text: 'Güzeller güzeli bir kızı vardı adamın.' },
          { id: 'C', text: 'Yaralı, acı içinde kıvranıyordu.' },
          { id: 'D', text: 'Çocuklara şekerleme dağıtıldı.' },
          { id: 'E', text: 'Gelenler, içerideki salona geçsin.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Dolmuş" kelimesi başlangıçta sıfat-fiil yoluyla (dolmuş araba) niteleme yaparken zamanla önündeki isim düşmüş ve bir taşıtın adı olarak kalıplaşıp "kalıcı isim" olmuştur. B, C ve E şıklarındakiler adlaşmış sıfattır.'
      }
    ]
  }
];
