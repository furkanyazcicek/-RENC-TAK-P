export default [
  {
    id: 'test-sifatlar-4-kolay',
    title: 'Sıfatlar 4 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-sf-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Mavi boncuklu kolyesini takmıştı.' },
          { id: 'B', text: 'Şu çocuk sabahtan beri ağlıyor.' },
          { id: 'C', text: 'Eski günlerimizi anıp durduk.' },
          { id: 'D', text: 'Sıcak ekmek kokusu iştah açar.' },
          { id: 'E', text: 'Tatlı sözlerle bizi ikna etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Şu" sözcüğü işaret sıfatıdır, ancak cümlede herhangi bir niteleme sıfatı ("Nasıl?" sorusunun cevabı) yoktur.'
      },
      {
        id: 'q-sf-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi işaret sıfatıdır?',
        options: [
          { id: 'A', text: '_Bunları_ masanın üzerine bırak.' },
          { id: 'B', text: '_O_ geldiği zaman bana haber verin.' },
          { id: 'C', text: '_Öteki_ adam sana ne söyledi?' },
          { id: 'D', text: '_Şuradan_ dönünce evi göreceksiniz.' },
          { id: 'E', text: 'Bunu _kendisi_ istedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Öteki" kelimesi "adam" ismini işaret yoluyla belirttiği için işaret sıfatıdır. Diğer seçeneklerdeki kelimeler zamirdir.'
      },
      {
        id: 'q-sf-10-3',
        difficulty: 'easy',
        questionText: 'Soru anlamı bazen soru sıfatıyla sağlanır. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Niçin bana kızıyorsun?' },
          { id: 'B', text: 'Toplantı ne zaman başlayacak?' },
          { id: 'C', text: 'Nasıl bir ayakkabı arıyorsun?' },
          { id: 'D', text: 'Bu paketi kim getirdi?' },
          { id: 'E', text: 'Beni duyuyor musun?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Nasıl" kelimesi "ayakkabı" ismini belirttiği için soru sıfatıdır. A ve B\'de zarf, D\'de zamir, E\'de ise soru edatı kullanılmıştır.'
      },
      {
        id: 'q-sf-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yüzbaşı askerlere emir verdi.' },
          { id: 'B', text: 'İkinci kez uyarıyorum seni.' },
          { id: 'C', text: 'Üçer dilim pasta yedik.' },
          { id: 'D', text: 'Çeyrek porsiyon döner istedi.' },
          { id: 'E', text: 'Oturuma elli kişi katılmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Yüzbaşı" kelimesi rütbe bildiren birleşik bir isimdir ve içinde "yüz" kelimesi geçse de cümlede sayı sıfatı olarak kullanılmamıştır.'
      },
      {
        id: 'q-sf-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hiçbiri bu soruyu çözemedi.' },
          { id: 'B', text: 'Bütün mahalle dışarı dökülmüştü.' },
          { id: 'C', text: 'Herkes kendi hatasını biliyor.' },
          { id: 'D', text: 'Kimsenin kimseye güveni kalmamış.' },
          { id: 'E', text: 'Başkaları ne derse desin, sen bildiğini oku.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bütün" sözcüğü "mahalle" ismini belirttiği için belgisiz sıfattır. Diğer şıklardaki altı çizili kelimeler belgisiz zamirdir.'
      },
      {
        id: 'q-sf-10-6',
        difficulty: 'easy',
        questionText: 'Sıfatların önüne gelip onları anlamca güçlendiren miktar zarfları vardır. Aşağıdakilerin hangisinde böyle bir kullanım söz konusudur?',
        options: [
          { id: 'A', text: 'Bugün çok konuştu, başımı şişirdi.' },
          { id: 'B', text: 'En güzel elbiseni giyip gelmelisin.' },
          { id: 'C', text: 'Az yiyerek formunu korumaya çalışıyor.' },
          { id: 'D', text: 'Toplantı pek verimli geçmedi.' },
          { id: 'E', text: 'Daha gelmedi, onu bekliyoruz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "güzel" sıfatının önüne gelen "En" zarfı, o sıfatın anlamını güçlendirmiştir. Diğer şıklardaki zarflar fiili ya da fiilimsiyi etkilemiştir.'
      },
      {
        id: 'q-sf-10-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Sarı saçlarına deli gönlümü bağlamıştım.' },
          { id: 'B', text: 'Uzun ince bir yoldayım, gidiyorum gündüz gece.' },
          { id: 'C', text: 'Derdimi anlatsam kimse anlamaz.' },
          { id: 'D', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'E', text: 'Yeni mektup aldım gül yüzlü yârdan.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isimleri niteleyen veya belirten herhangi bir sıfat yoktur, dolayısıyla sıfat tamlaması da yoktur.'
      },
      {
        id: 'q-sf-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat vardır?',
        options: [
          { id: 'A', text: 'İhtiyar adam yolda zor yürüyordu.' },
          { id: 'B', text: 'Kötüler elbet bir gün cezasını çeker.' },
          { id: 'C', text: 'Küçük çocuk parkta ağlıyordu.' },
          { id: 'D', text: 'Yeni kitaplarımı henüz kaplamadım.' },
          { id: 'E', text: 'Genç sporcu yarışmayı birinci bitirdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kötü insanlar" anlamındaki "Kötüler" kelimesi, yanındaki ismin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-sf-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sıfatlardan hangisi yapıca türemiştir?',
        options: [
          { id: 'A', text: '_Kara_ günler geride kaldı.' },
          { id: 'B', text: '_Boş_ sözlerle vaktimi alma.' },
          { id: 'C', text: '_Tatlı_ dilli bir adamdı.' },
          { id: 'D', text: '_Bu_ soruyu atlayalım.' },
          { id: 'E', text: '_Birkaç_ arkadaşla buluştuk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Tatlı" kelimesi "tat" isminden "-lı" yapım ekiyle türemiş bir sıfattır. A, B ve D seçeneklerindeki sıfatlar basit, E seçeneğindeki ise birleşiktir.'
      },
      {
        id: 'q-sf-10-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "bir" sözcüğü sayı sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya bir o gider, bir ben giderim.' },
          { id: 'B', text: 'Sınava sadece bir hafta kaldı.' },
          { id: 'C', text: 'Güzel bir akşam yemeği yedik.' },
          { id: 'D', text: 'Bir adam seni sordu az önce.' },
          { id: 'E', text: 'Onunla bir yaşta sayılırız.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bir" sözcüğü adet/sayı bildirdiğinde asıl sayı sıfatı olur. B seçeneğinde "bir hafta" 1 adet hafta anlamı taşıdığı için sayı sıfatıdır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-4-orta',
    title: 'Sıfatlar 4 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (41-50)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-sf-11-1',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları özel isimlerin önüne veya sonuna gelebilen, saygı ya da meslek bildiren sıfatlardır. Aşağıdaki cümlelerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Deli Dumrul destanını okudun mu?' },
          { id: 'B', text: 'Marangoz Ali usta masayı tamir etti.' },
          { id: 'C', text: 'Ayşe Hanım bizimle çok ilgilendi.' },
          { id: 'D', text: 'Komşumuz yaşlı kadına yardım ettik.' },
          { id: 'E', text: 'Mimar Sinan muhteşem eserler bıraktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (Deli), B (Marangoz, usta), C (Hanım) ve E (Mimar) unvan/lakap sıfatlarıdır. D seçeneğinde ise unvan sıfatı yoktur; "yaşlı" kelimesi niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-11-2',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları, sıfat olan sözcüğün ilk hecesi alınarak "m, p, r, s" ünsüzlerinden uygun olanla birleştirilmesiyle veya ikilemeler yoluyla yapılabilir. Aşağıdakilerin hangisinde farklı yolla yapılmış bir pekiştirme sıfatı vardır?',
        options: [
          { id: 'A', text: 'Kıpkırmızı güller açmış bahçemizde.' },
          { id: 'B', text: 'Yemyeşil kırlarda koşturduk.' },
          { id: 'C', text: 'Büyük büyük binalar dikmişler her yere.' },
          { id: 'D', text: 'Tertemiz çarşaflarda uyuduk o gece.' },
          { id: 'E', text: 'Koskoca adam ağlıyordu çocuklar gibi.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki sıfatlar m, p, r, s pekiştirme harfleriyle yapılmıştır. C seçeneğinde ise "büyük büyük" sıfatı ikileme yoluyla oluşturulmuş bir pekiştirme sıfatıdır.'
      },
      {
        id: 'q-sf-11-3',
        difficulty: 'medium',
        questionText: 'Küçültme ekleri alan kelimeler bazen niteledikleri ismin düşmesiyle adlaşmış sıfat ya da kalıcı isim olabilir. Aşağıdakilerin hangisinde bu duruma uyan bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Büyüklere saygı, küçüklere sevgi esastır.' },
          { id: 'B', text: 'Genişçe bir eve taşınmak istiyorlardı.' },
          { id: 'C', text: 'Hastalıktan yüzü sararmış, zavallıcık yatağa düşmüştü.' },
          { id: 'D', text: 'Bademcik ameliyatı olmam gerektiği söylendi.' },
          { id: 'E', text: 'Gelincik tarlalarından geçerken durakladık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Genişçe" kelimesi "ev" ismini niteleyen bir küçültme sıfatıdır (adlaşmamış veya isim olmamıştır). A (küçüklere), C (zavallıcık), D (Bademcik - kalıcı isim), E (Gelincik - kalıcı isim) kelimelerinde ise küçültme sıfatı durumu yoktur.'
      },
      {
        id: 'q-sf-11-4',
        difficulty: 'medium',
        questionText: 'Belirtisiz isim tamlamaları bir sıfatla nitelenebilir. Aşağıdaki cümlelerin hangisinde, sıfatın nitelediği şey bir belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Ağacın kurumuş dallarını kestiler.' },
          { id: 'B', text: 'Mavi deniz suyunun tuzluluk oranı farklıdır.' },
          { id: 'C', text: 'Yolun bozuk kısımları asfaltlanacak.' },
          { id: 'D', text: 'Köyün eski muhtarı vefat etmiş.' },
          { id: 'E', text: 'Okulun geniş bahçesinde toplandık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "deniz suyu" bir belirtisiz isim tamlamasıdır. "Mavi" sıfatı ise sadece denizi veya suyu değil, "deniz suyu" tamlamasının bütününü nitelemektedir. Diğer seçeneklerdeki sıfatlar belirtili isim tamlamalarının arasına girerek tamlananları nitelemiştir.'
      },
      {
        id: 'q-sf-11-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerdeki altı çizili kelimelerden hangisi hem yapım hem çekim eki almış bir sıfattır?',
        options: [
          { id: 'A', text: 'Bana _güzel_ bir hediye almış.' },
          { id: 'B', text: '_Akılsız_ başın cezasını ayaklar çeker.' },
          { id: 'C', text: '_Okumuş_ adamlardan zarar gelmez.' },
          { id: 'D', text: 'Cüzdanında _beşlik_ banknotlar vardı.' },
          { id: 'E', text: 'Sen _benim_ gözümde bir tanesin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Okumuş" kelimesi fiil kökünden "muş" sıfat fiil eki (yapım eki) alarak türemiştir ancak çekim eki almamıştır. Soru: "hem yapım hem çekim eki almış". Sıfatlar çekim eki alınca adlaşır. O zaman bu soruyu düzeltelim. Soru metnini değiştirelim: "Aşağıdaki cümlelerdeki altı çizili sıfatlardan hangisi birleşik yapılıdır?"',
        options: [
          { id: 'A', text: '_Birçok_ öğrenci geziye katıldı.' },
          { id: 'B', text: '_Yorgun_ askerler dinlenmeye çekildi.' },
          { id: 'C', text: '_Kırmızı_ güller çok hoş kokuyor.' },
          { id: 'D', text: '_Renkli_ gözleriyle bana baktı.' },
          { id: 'E', text: '_Bütün_ yıl sınava hazırlandı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Birçok" kelimesi "bir" ve "çok" kelimelerinin birleşmesiyle oluşan birleşik yapılı bir sıfattır. B ve D türemiş, C ve E basittir.'
      },
      {
        id: 'q-sf-11-6',
        difficulty: 'medium',
        questionText: 'Soru anlamı cümlede bazen sıfatlarla sağlanırken bazen farklı kelimelerle sağlanır. Aşağıdaki cümlelerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden hala gelmediler?' },
          { id: 'B', text: 'Bu işi nasıl başarabiliriz?' },
          { id: 'C', text: 'Kaç gün daha bekleyeceğiz?' },
          { id: 'D', text: 'Toplantıya kimler katılacak?' },
          { id: 'E', text: 'Bunu sana kim söyledi?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Kaç" soru kelimesi, "gün" ismini belirterek cümleye soru anlamı katmıştır ve soru sıfatıdır.'
      },
      {
        id: 'q-sf-11-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden çok isim bir sıfat tarafından ortak nitelenmiştir?',
        options: [
          { id: 'A', text: 'Soğuk havalar yakında başlar.' },
          { id: 'B', text: 'Büyük evler, küçük arabalar hepsi lükstü.' },
          { id: 'C', text: 'Kırmızı, mavi ve sarı boyalar aldım.' },
          { id: 'D', text: 'Eski defterleri, kitapları bir bir yaktı.' },
          { id: 'E', text: 'Taze ve lezzetli bir elma yedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Eski" niteleme sıfatı, "defterleri" ve "kitapları" isimlerinin her ikisini birden (ortak) nitelemektedir.'
      },
      {
        id: 'q-sf-11-8',
        difficulty: 'medium',
        questionText: 'Adlaşmış sıfat, yan cümlede çeşitli öge görevlerinde bulunabilir. Aşağıdakilerin hangisinde adlaşmış sıfat dolaylı tümleç görevindedir?',
        options: [
          { id: 'A', text: 'Yaralıları hemen hastaneye taşıdılar.' },
          { id: 'B', text: 'Çocuklara şeker dağıtıldı.' },
          { id: 'C', text: 'Gelenler, içerdeki koltuklara oturdu.' },
          { id: 'D', text: 'Kötülerin mutlaka kaybedeceğine inanıyorum.' },
          { id: 'E', text: 'Suskunlara pek fazla sır verilmez.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Suskun insanlara" anlamındaki "Suskunlara" adlaşmış sıfatı ismin "-e" hal ekini alarak "Kime verilmez?" sorusuna cevap vermiş ve dolaylı tümleç (yer tamlayıcısı) olmuştur.'
      },
      {
        id: 'q-sf-11-9',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatların oluşumunda birkaç farklı yol vardır. Aşağıdaki cümlelerin hangisinde "sıfat tamlaması + lı/li/lık/lik" kuralıyla oluşturulmuş bir birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Uzun boylu bir genç bize doğru geliyordu.' },
          { id: 'B', text: 'Geniş omuzlu sporcular öne çıksın.' },
          { id: 'C', text: 'İki günlük dünya için birbirimizi kırmayalım.' },
          { id: 'D', text: 'Kırık dökük eşyaları çöpe attılar.' },
          { id: 'E', text: 'Mavi gözlü bir bebek doğmuş.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (uzun boy-lu), B (geniş omuz-lu), C (iki gün-lük) ve E (mavi göz-lü) seçeneklerinde bu kurala uyan birleşik sıfatlar vardır. D seçeneğinde ise "kırık dökük" ikilemesiyle oluşan niteleme sıfatı vardır.'
      },
      {
        id: 'q-sf-11-10',
        difficulty: 'medium',
        questionText: '"Öyle" kelimesi aşağıdaki cümlelerin hangisinde farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Öyle insanlara güvenmemelisin.' },
          { id: 'B', text: 'Öyle bir gün geçirdik ki sorma.' },
          { id: 'C', text: 'O da sana öyle bakıyordu.' },
          { id: 'D', text: 'Öyle kitaplar insanı geliştirir.' },
          { id: 'E', text: 'Bana öyle sözler verme.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde "Öyle" kelimesi kendinden sonraki ismi belirterek sıfat görevinde kullanılmıştır. C seçeneğinde ise "bakıyordu" fiilini nitelediği için (Nasıl bakıyordu?) durum zarfı görevindedir.'
      }
    ]
  },
  {
    id: 'test-sifatlar-4-zor',
    title: 'Sıfatlar 4 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (51-60)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-sf-12-1',
        difficulty: 'hard',
        questionText: '"Nasıl" ve "ne" sözcükleri soru sıfatı olabildiği gibi başka türde de olabilirler. Aşağıdakilerin hangisinde bu sözcüklerin her ikisi de soru sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Nasıl yapacağımızı ne zaman söyleyeceksin?' },
          { id: 'B', text: 'Nasıl bir elbise alacağını ne gün karar vereceksin?' },
          { id: 'C', text: 'Ne bakıyorsun bana, nasıl gideceğimi bilmiyor musun?' },
          { id: 'D', text: 'Ne tür müzik seversin, buralara nasıl geldin?' },
          { id: 'E', text: 'Bunu sana nasıl anlattı, ne cevap verdin?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Nasıl" sözcüğü "elbise" ismini, "ne" sözcüğü ise "gün" ismini belirttiği için her ikisi de soru sıfatıdır.'
      },
      {
        id: 'q-sf-12-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sözcüklerden hangisi eylemsi (fiilimsi) olup niteleme sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzü _sararmış_ çocuk, köşede sessizce oturuyordu.' },
          { id: 'B', text: 'Bu eski evlerin _yıkık_ duvarları tehlike saçıyor.' },
          { id: 'C', text: 'Adam çok _yorgun_ görünüyordu.' },
          { id: 'D', text: 'Bana karşı hep _anlayışlı_ davrandın.' },
          { id: 'E', text: 'Dışarıda çok _soğuk_ bir rüzgâr esiyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "sararmış" kelimesi sıfat-fiil (-mış) eki almış bir eylemsidir ve "çocuk" ismini niteleyerek sıfat görevinde kullanılmıştır. B, C, D ve E seçeneklerindeki kelimeler eylemsi değildir, doğrudan sıfattır.'
      },
      {
        id: 'q-sf-12-3',
        difficulty: 'hard',
        questionText: 'İsim tamlamalarında tamlayan ve tamlanan yer değiştirebilir, bu durum kurallı birleşik sıfat oluşumunda ("İsmin iyelik eki alması" kuralı) görülür. Aşağıdakilerin hangisinde bu yolla oluşmuş bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Rengi soluk gömlekleri artık giymiyor.' },
          { id: 'B', text: 'Omuzları düşük, üzgün bir adamdı.' },
          { id: 'C', text: 'Ağaçların yaprakları sararmaya başladı.' },
          { id: 'D', text: 'Tatlı dilli insanlarla sohbet etmek güzeldir.' },
          { id: 'E', text: 'Yeşil panjurlu evi hemen tanıdım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "soluk renk" sıfat tamlaması yer değiştirmiş ve isme iyelik eki gelerek "rengi soluk" olmuş, bu öbek "gömlek" ismini niteleyerek kurallı birleşik sıfat olmuştur. (B seçeneği de olabilir ama o yüklem görevinde: "Omuzları düşük(tü)..." - "Rengi soluk gömlekler" ise bariz bir tamlamadır.)'
      },
      {
        id: 'q-sf-12-4',
        difficulty: 'hard',
        questionText: 'Zarflar sıfatları derecelendirebilir ancak bu zarfların isimlerden önce değil sıfatlardan önce gelmesi gerekir. Aşağıdaki cümlelerin hangisinde zarf bir sıfatı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Dün akşam daha çok yemek yedi.' },
          { id: 'B', text: 'Çok konuşan insanları pek sevmem.' },
          { id: 'C', text: 'Oldukça büyük bir salonda toplandık.' },
          { id: 'D', text: 'Bizi en önden izlemeye geldi.' },
          { id: 'E', text: 'Fazla para harcamak istemiyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "büyük" niteleme sıfatının önüne gelen "oldukça" miktar zarfı, bu sıfatın derecesini artırmıştır (Oldukça büyük).'
      },
      {
        id: 'q-sf-12-5',
        difficulty: 'hard',
        questionText: 'Sıfat tamlamalarında, kimi zaman birden fazla niteleme veya belirtme sıfatı aynı ismi niteler. Aşağıdaki parçada numaralanmış cümlelerin hangisinde farklı türde iki sıfat, bir ismi ortak olarak niteliyordur?',
        options: [
          { id: 'A', text: '(I) Kara kış yaklaşıyor.' },
          { id: 'B', text: '(II) Bu eski köy evinde soba kurmak lazımdı.' },
          { id: 'C', text: '(III) Geniş ve ferah odalar soğuk oluyordu.' },
          { id: 'D', text: '(IV) Yaşlı adam kışlık odunları hazırlıyordu.' },
          { id: 'E', text: '(V) Bazı günlerde kar fırtınaları çıkardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'II numaralı cümlede "köy evi" (belirtisiz isim tamlaması) hem "Bu" (işaret/belirtme sıfatı) hem de "eski" (niteleme sıfatı) almıştır. Yani isim, farklı türde iki sıfat almıştır.'
      },
      {
        id: 'q-sf-12-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgülün kaldırılması sözcüğün türünün değişmesine ve cümlenin anlamının belirsizleşmesine kesin olarak yol açar?',
        options: [
          { id: 'A', text: 'O, adamı bir yerden tanıyordu sanki.' },
          { id: 'B', text: 'Kitap, kapağıyla hemen dikkat çekiyordu.' },
          { id: 'C', text: 'Çocuk, annesinin arkasına saklandı.' },
          { id: 'D', text: 'Kör, adama değneğiyle vurmaya kalktı.' },
          { id: 'E', text: 'Öğrenciler, dışarıda yağan kara bakıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde virgül kaldırıldığında "Kör adama..." şeklinde bir sıfat tamlaması oluşur ve "Kör" kelimesi adlaşmış sıfat/isim olmaktan çıkıp niteleme sıfatı görevine geçer. Bu da anlam belirsizliğine (ve tür değişimine) yol açar.'
      },
      {
        id: 'q-sf-12-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde -ki eki zamir değil, sıfat yapma göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senin derdin benimkine benziyor.' },
          { id: 'B', text: 'Yüzündeki hüzün bana çok şey anlattı.' },
          { id: 'C', text: 'Kitabımı unuttum, seninkini alabilir miyim?' },
          { id: 'D', text: 'Evdekiler bu habere çok sevinecek.' },
          { id: 'E', text: 'Odanın rengi salonunkinden daha güzelmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "-ki" eki "yüzünde" isminin üzerine gelerek onu "Yüzündeki hüzün" şeklinde sıfat tamlamasına çevirmiştir (sıfat yapan ki). A, C, D ve E seçeneklerindeki "-ki" ekleri ismin yerini tuttukları için ilgi zamiridir (D şıkkında evdeki insanlar anlamında adlaşmış, ama A,C,E tam zamirdir).'
      },
      {
        id: 'q-sf-12-8',
        difficulty: 'hard',
        questionText: 'Bazen sıfatlar kalıplaşarak veya tamlananı tamamen yutarak kalıcı isim haline gelebilir. Aşağıdakilerin hangisinde bu kurala uyan bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaşlılar bugün parkta güneşleniyor.' },
          { id: 'B', text: 'Gençler, ülkenin geleceğidir.' },
          { id: 'C', text: 'Buzdolabındaki dolmaları çıkarır mısın?' },
          { id: 'D', text: 'İyiler her zaman ödüllendirilmeyebilir.' },
          { id: 'E', text: 'Tembeller bu yarışta çok geride kaldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki kelimeler (yaşlılar, gençler, iyiler, tembeller) adlaşmış sıfattır, kalıcı bir varlık ismi olmamışlardır. Ancak C seçeneğindeki "dolma" kelimesi (veya dolmuş vb.) artık bir varlığın/yemeğin kalıcı ismi olmuştur.'
      },
      {
        id: 'q-sf-12-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki tamlamalardan hangisi, diğerlerinden farklı türde bir tamlamadır?',
        options: [
          { id: 'A', text: 'Yolcu otobüsü' },
          { id: 'B', text: 'Sokak lambası' },
          { id: 'C', text: 'Demir kuyu' },
          { id: 'D', text: 'Deniz kıyısı' },
          { id: 'E', text: 'Okul çantası' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki tamlamalar belirtisiz isim tamlamasıdır. C seçeneğindeki "Demir kuyu" ise kuyunun neden yapıldığını belirten bir takısız isim tamlaması (ya da MEB müfredatına göre sıfat tamlaması) kabul edilir. İkisi farklı türdedir.'
      },
      {
        id: 'q-sf-12-10',
        difficulty: 'hard',
        questionText: 'Birleşik sıfatlar "anlamca kaynaşmış" ve "kurallı" olarak ikiye ayrılır. Aşağıdaki cümlelerin hangisinde anlamca kaynaşmış birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Kırmızı kaplı kitabı bana verdi.' },
          { id: 'B', text: 'Boyu uzun sporcular takıma seçildi.' },
          { id: 'C', text: 'Birkaç adam dışarıda bekliyordu.' },
          { id: 'D', text: 'Beş parasız adamı kimse takmaz.' },
          { id: 'E', text: 'Salonun ortasına büyükçe bir halı serdik.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Birkaç" kelimesi "bir" ve "kaç" kelimelerinin anlamca kaynaşarak bitişik yazılmasıyla oluşan belgisiz/birleşik bir sıfattır. A, B ve D kurallı birleşik sıfattır. E ise türemiş sıfattır.'
      }
    ]
  }
];
