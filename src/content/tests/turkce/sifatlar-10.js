export default [
  {
    id: 'test-sifatlar-10-kolay',
    title: 'Sıfatlar 10 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-sf-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili kelime niteleme sıfatı değildir?',
        options: [
          { id: 'A', text: '_Sıcak_ bir yaz akşamında tanışmıştık.' },
          { id: 'B', text: '_Büyük_ hayaller peşinden koşuyordu.' },
          { id: 'C', text: '_Yorgun_ savaşçılar dinlenmeye çekildi.' },
          { id: 'D', text: '_Şu_ çocuğu bir yerden gözüm ısırıyor.' },
          { id: 'E', text: '_Tatlı_ bir gülümsemeyle bana baktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Şu" kelimesi, ismin durumunu değil, işaret yoluyla yerini bildirdiği için niteleme sıfatı değil, işaret sıfatıdır. Diğer seçeneklerdeki kelimeler niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda hiç göremedim.' },
          { id: 'B', text: 'Ötekini bana uzatır mısın?' },
          { id: 'C', text: 'Bunu hemen dolaba yerleştirmelisin.' },
          { id: 'D', text: 'Şuradan dönersen evi bulursun.' },
          { id: 'E', text: 'Bu araba senin mi?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Bu" kelimesi "araba" ismini işaret ettiği için işaret sıfatıdır. A, B, C ve D seçeneklerindeki kelimeler ismin yerini tuttukları için zamirdir.'
      },
      {
        id: 'q-sf-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı farklı bir türde kelimeyle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Hangi yoldan gitmemizi tavsiye edersin?' },
          { id: 'B', text: 'Kaç gün sonra buralardan ayrılacaksınız?' },
          { id: 'C', text: 'Nasıl bir bilgisayar almak istiyorsun?' },
          { id: 'D', text: 'Bunca zaman neden beni aramadın?' },
          { id: 'E', text: 'Ne tür müzikler dinlemekten hoşlanırsın?' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki soru kelimeleri (Hangi, Kaç, Nasıl, Ne tür) isimleri belirterek soru sıfatı görevinde kullanılmıştır. D seçeneğindeki "neden" kelimesi ise fiili nitelediği için (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'İlk yarışmacı parkuru başarıyla tamamladı.' },
          { id: 'B', text: 'Beşer kişilik takımlar oluşturduk.' },
          { id: 'C', text: 'Her öğrenciye bir miktar kalem verdik.' },
          { id: 'D', text: 'Üçüncü sıradaki ev bizimkisi.' },
          { id: 'E', text: 'Yüzde on kâr marjıyla çalışıyoruz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde sayı bildiren bir sıfat yoktur; "Her" ve "bir miktar" belgisiz sıfatlardır. A (İlk=sıra sayı), B (Beşer=üleştirme), D (Üçüncü=sıra), E (Yüzde on=kesir) seçeneklerinde sayı sıfatları kullanılmıştır.'
      },
      {
        id: 'q-sf-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kimsenin bu olan bitenden haberi yok.' },
          { id: 'B', text: 'Bütün sokaklar bayraklarla donatıldı.' },
          { id: 'C', text: 'Hiçbiri sana inanmıyor, boşuna uğraşma.' },
          { id: 'D', text: 'Herkes kendi işini en iyi şekilde yapmalı.' },
          { id: 'E', text: 'Bazıları bu durumu hiç ciddiye almadı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bütün" kelimesi "sokaklar" ismini belirterek belgisiz sıfat görevinde kullanılmıştır. Diğer seçeneklerdeki kelimeler (Kimsenin, Hiçbiri, Herkes, Bazıları) belgisiz zamirdir.'
      },
      {
        id: 'q-sf-10-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim birden çok sıfatla nitelenmiştir?',
        options: [
          { id: 'A', text: 'Dar ve karanlık sokaklarda kaybolduk.' },
          { id: 'B', text: 'Taze simit kokusu mahalleyi sardı.' },
          { id: 'C', text: 'Şu büyük binanın arkasında bekle.' },
          { id: 'D', text: 'Sarı gülleri annesine hediye etti.' },
          { id: 'E', text: 'Eski günleri yâd edip hüzünlendi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "sokaklar" ismi hem "dar" hem de "karanlık" niteleme sıfatlarıyla, yani birden çok sıfatla nitelenmiştir.'
      },
      {
        id: 'q-sf-10-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili tamlamalardan hangisi sıfat tamlaması değildir?',
        options: [
          { id: 'A', text: '_Sıcak hava_ hepimizi bunalttı.' },
          { id: 'B', text: '_Mavi gökyüzü_ insana huzur verir.' },
          { id: 'C', text: '_Evin kapısı_ sonuna kadar açıktı.' },
          { id: 'D', text: '_Yeni okul_ müdürü çok disiplinli.' },
          { id: 'E', text: '_Tatlı söz_ yılanı deliğinden çıkarır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Evin kapısı" tamlaması iki isimden oluşan bir "belirtili isim tamlaması"dır, sıfat tamlaması değildir.'
      },
      {
        id: 'q-sf-10-8',
        difficulty: 'easy',
        questionText: '"İyi" kelimesi aşağıdaki cümlelerin hangisinde sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınava her zaman çok iyi çalışırdı.' },
          { id: 'B', text: 'İyiler elbet bir gün kazanır.' },
          { id: 'C', text: 'Bizi burada iyi karşıladılar.' },
          { id: 'D', text: 'Aramızdaki bağ artık çok iyi.' },
          { id: 'E', text: 'İyi dost zor günlerde belli olur.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "İyi" kelimesi "dost" ismini nitelediği için sıfattır. A ve C\'de zarf, B\'de adlaşmış sıfat, D\'de isim/yüklem görevindedir.'
      },
      {
        id: 'q-sf-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat vardır?',
        options: [
          { id: 'A', text: 'Kötü insanlar her yerde karşımıza çıkabilir.' },
          { id: 'B', text: 'Yaşlı adam karşıdan karşıya geçerken zorlandı.' },
          { id: 'C', text: 'Suskunlara pek fazla sır verilmez derler.' },
          { id: 'D', text: 'Tembel öğrencileri hiç sevmezdi.' },
          { id: 'E', text: 'Geniş evleri temizlemek çok vakit alır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Suskunlara" kelimesi, önündeki ismin (insanlara vb.) düşmesiyle oluşmuş bir adlaşmış sıfattır.'
      },
      {
        id: 'q-sf-10-10',
        difficulty: 'easy',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde "herhangi bir" anlamında belgisiz sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Burada sadece bir hafta kalacağız.' },
          { id: 'B', text: 'Onunla bir yaşta büyüdük biz.' },
          { id: 'C', text: 'Akşam yemeğinde bir dilim ekmek yedim.' },
          { id: 'D', text: 'Bir gün mutlaka bu şehirden ayrılacağım.' },
          { id: 'E', text: 'Bunu ancak bir sen anlarsın.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Bir gün" tamlamasındaki "Bir" kelimesi adet (1) anlamı değil, belirsiz bir zamanı ("herhangi bir") kastettiği için belgisiz sıfattır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-10-orta',
    title: 'Sıfatlar 10 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (101-110)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-sf-10-11',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları anlamı güçlendirir. Aşağıdaki kelimelerden hangisi pekiştirilmiş bir sıfat olduğu halde cümlede ismi niteleme görevinde (sıfat) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kıpkırmızı elmalardan bir kilo tarttı.' },
          { id: 'B', text: 'Odadaki eşyaları darmadağınık bırakmıştı.' },
          { id: 'C', text: 'Masmavi gökyüzü insana umut veriyor.' },
          { id: 'D', text: 'Tertemiz çarşafları dolaba yerleştirdi.' },
          { id: 'E', text: 'Bembeyaz karlar etrafı sarmıştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "darmadağınık" kelimesi pekiştirilmiştir ancak "bırakmıştı" fiilini nitelediği için cümlede durum zarfı görevinde kullanılmıştır.'
      },
      {
        id: 'q-sf-10-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen "-cık, -ce, -msi, -mtırak" ekleriyle yapılır. Aşağıdakilerin hangisinde bu yolla oluşmuş bir küçültme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Daracık sokaklardan geçerek meydana ulaştık.' },
          { id: 'B', text: 'Büyükçe bir salonda bütün aile toplanmıştı.' },
          { id: 'C', text: 'Mavimsi gözleriyle bana bakıyordu.' },
          { id: 'D', text: 'Kuzucuk annesini kaybedince ağlamaya başladı.' },
          { id: 'E', text: 'Sarımtırak yapraklar sonbaharı müjdeliyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Kuzucuk" kelimesi küçültme eki almış olsa da bir ismi nitelemez, doğrudan bir hayvanın küçüklüğünü bildiren "küçültme adı (isim)" görevindedir.'
      },
      {
        id: 'q-sf-10-13',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları özel adlara gelerek onların unvanını, saygınlığını veya mesleğini belirtir. Aşağıdakilerin hangisinde altı çizili kelime unvan sıfatı değildir?',
        options: [
          { id: 'A', text: 'Mahallemizin bakkalı _Hasan Amca_ vefat etti.' },
          { id: 'B', text: '_Ayşe Teyze_ bize nefis bir kek yapmış.' },
          { id: 'C', text: '_Mimar Sinan_ çok değerli eserler bırakmıştır.' },
          { id: 'D', text: 'Bugün _benim amcam_ Ankara\'dan geliyor.' },
          { id: 'E', text: '_Doktor Ali Bey_ hastaları muayene ediyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki akrabalık veya meslek bildiren sözcükler özel isimlerle birlikte kalıplaşarak unvan sıfatı olmuşlardır. D seçeneğindeki "amcam" ise gerçek akrabalık bildiren normal bir isimdir.'
      },
      {
        id: 'q-sf-10-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili kelimelerden hangisi yapısı bakımından farklıdır?',
        options: [
          { id: 'A', text: 'O, çok _saygılı_ bir öğrencidir.' },
          { id: 'B', text: '_Sıcak_ çaylarımızı yudumlayarak sohbet ettik.' },
          { id: 'C', text: 'Gözlerindeki _solgun_ bakış beni üzdü.' },
          { id: 'D', text: '_Renkli_ kalemlerle güzel bir resim çizdi.' },
          { id: 'E', text: '_Kırık_ camları değiştirmesi için usta çağırdık.' }
        ],
        correctOptionId: 'B',
        explanation: 'A (saygı-lı), C (sol-gun), D (renk-li) ve E (kır-ık) seçeneklerindeki sıfatlar yapım eki alarak oluşmuş türemiş sıfatlardır. B seçeneğindeki "Sıcak" kelimesi ise yapım eki almamıştır, basit sıfattır.'
      },
      {
        id: 'q-sf-10-15',
        difficulty: 'medium',
        questionText: 'Soru anlamı cümlede çeşitli kelimelerle sağlanabilir. Aşağıdakilerin hangisinde soru anlamı soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bunca zamandır neden beni aramadın?' },
          { id: 'B', text: 'Bunu ona hangi yüzle söyleyeceksin?' },
          { id: 'C', text: 'Toplantının ne zaman biteceğini biliyor musun?' },
          { id: 'D', text: 'Sen de benimle gelecek misin?' },
          { id: 'E', text: 'Bu güzel hediyeyi kimden aldın?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "hangi" kelimesi "yüz" ismini belirttiği için soru sıfatıdır ve cümlenin soru anlamını sağlayan kelimedir.'
      },
      {
        id: 'q-sf-10-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat yan cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Gelenler, salondaki yerlerine otursun.' },
          { id: 'B', text: 'Eskileri eskiciye satıp yerine yenilerini aldı.' },
          { id: 'C', text: 'Kötüler bu dünyada her zaman kazanmaz.' },
          { id: 'D', text: 'İyiler elbet bir gün ödüllendirilir.' },
          { id: 'E', text: 'Güzeli sevmek insanın doğasında vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gelen (kişiler)" anlamındaki "Gelenler" adlaşmış sıfattır ve "otursun" yükleminin öznesi görevindedir (Yine temel cümlenin öznesi oldu, bu soru tipini cümlenin öznesi diye düzelterek çözeceğiz. A, C ve D şıkları da özne. O halde "Hangisinde adlaşmış sıfat nesne görevindedir?" olarak değiştirelim).',
        options: [
          { id: 'A', text: 'Gelenler, salondaki yerlerine otursun.' },
          { id: 'B', text: 'Eskileri satıp yerine yenilerini aldı.' },
          { id: 'C', text: 'Kötüler bu dünyada her zaman kazanmaz.' },
          { id: 'D', text: 'İyiler elbet bir gün ödüllendirilir.' },
          { id: 'E', text: 'Tembeller bu yarışta çok geride kaldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Eskileri" ve "yenilerini" adlaşmış sıfatları, belirtme hal eki (-i) alarak cümlenin belirtili nesnesi görevinde kullanılmışlardır. Diğer şıklardakiler özne görevindedir.'
      },
      {
        id: 'q-sf-10-17',
        difficulty: 'medium',
        questionText: 'Bazen sıfatlar belirtisiz isim tamlamasının önüne gelerek tamlamanın tamamını niteler. Aşağıdakilerin hangisinde böyle bir durum vardır?',
        options: [
          { id: 'A', text: 'Evin geniş salonunda hep birlikte oturduk.' },
          { id: 'B', text: 'Masanın kırık bacağını zorlukla tamir ettik.' },
          { id: 'C', text: 'Odanın açık penceresinden içeri soğuk giriyordu.' },
          { id: 'D', text: 'Eski köy yolları nihayet asfaltlanıyor.' },
          { id: 'E', text: 'Çocuğun yırtık ayakkabısını diktiler.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "köy yolları" belirtisiz isim tamlamasıdır. "Eski" sıfatı bu tamlamanın tamamını (köy yollarını) nitelemektedir. A, B, C ve E seçeneklerinde ise belirtili isim tamlamalarının arasına girerek yalnızca tamlananı niteleyen sıfatlar vardır.'
      },
      {
        id: 'q-sf-10-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki tamlamalardan hangisi, sözcük türleri bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Kırmızı elma' },
          { id: 'B', text: 'Büyük deniz' },
          { id: 'C', text: 'Yolcu gemisi' },
          { id: 'D', text: 'Soğuk hava' },
          { id: 'E', text: 'Tatlı söz' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki tamlamalar, ismi niteleyen sözcüklerden oluştukları için "sıfat tamlaması"dır. C seçeneğindeki "Yolcu gemisi" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      },
      {
        id: 'q-sf-10-19',
        difficulty: 'medium',
        questionText: 'Birleşik sıfatlar "kurallı" ve "anlamca kaynaşmış" olarak ikiye ayrılır. Aşağıdakilerin hangisinde anlamca kaynaşmış bir birleşik sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu gençler öne çıksın.' },
          { id: 'B', text: 'Kırmızı kaplı defterini evde unutmuş.' },
          { id: 'C', text: 'Başı dumanlı dağlar bize engel oldu.' },
          { id: 'D', text: 'Vatansever insanlar ülkeyi kalkındırır.' },
          { id: 'E', text: 'Üç günlük dünyada birbirimizi kırmayalım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Vatansever" kelimesi, "vatan" (isim) ve "sever" (fiil) kelimelerinin anlamca kaynaşarak bitişik yazılmasıyla oluşmuş birleşik sıfattır. Diğer şıklardakiler ise kurallı birleşik sıfatlardır.'
      },
      {
        id: 'q-sf-10-20',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları dört gruba ayrılır: asıl, sıra, kesir, üleştirme. Aşağıdaki cümlelerde geçen sayı sıfatlarından hangisi türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Yarışmada birinci olan öğrenciyi tebrik ettik.' },
          { id: 'B', text: 'Toplantı üçüncü katta yapılacakmış.' },
          { id: 'C', text: 'Sıradaki beşinci adam bize doğru geliyordu.' },
          { id: 'D', text: 'Çocuklara onar lira harçlık dağıttı.' },
          { id: 'E', text: 'Yedinci hissim beni hiçbir zaman yanıltmaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki kelimeler ismin sırasını bildiren "sıra sayı sıfatı"dır. D seçeneğindeki "onar" kelimesi ise paylaştırma bildiren "üleştirme sayı sıfatı"dır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-10-zor',
    title: 'Sıfatlar 10 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (111-120)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-sf-10-21',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü cümlede zamir, sıfat veya zarf olabilir. Aşağıdakilerin hangisinde "ne" sözcüğü zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün marketten ne aldığını sana söyledi mi?' },
          { id: 'B', text: 'Ne tür filmler izlemeyi seversin?' },
          { id: 'C', text: 'Ne bağırıp duruyorsun sabahtan beri?' },
          { id: 'D', text: 'Bana ne gün döneceğini tam olarak söylemedi.' },
          { id: 'E', text: 'Oraya gidip de ne yapacaksınız?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Ne" kelimesi "Niçin / Neden" anlamında kullanılmış ve "bağırıp duruyorsun" fiilini/fiilimsi grubunu nitelediği için soru zarfı görevindedir. B ve D\'de soru sıfatı, A ve E\'de soru zamiri görevindedir.'
      },
      {
        id: 'q-sf-10-22',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfattan sonra bir isim geldiğinde virgül kullanılmazsa sözcük adlaşmış sıfat olmaktan çıkıp niteleme sıfatına dönüşebilir. Aşağıdaki cümlelerin hangisinde virgülün (,) kaldırılması böyle bir değişime yol açar?',
        options: [
          { id: 'A', text: 'Hasta, hemşireye dönerek bir bardak su istedi.' },
          { id: 'B', text: 'Ali, yarın akşam uçakla İstanbul\'a dönecekmiş.' },
          { id: 'C', text: 'İyiler, bu hayatta elbet bir gün kazanır.' },
          { id: 'D', text: 'Tembeller, bu sınavı geçemeyeceklerini biliyorlardı.' },
          { id: 'E', text: 'Bugün, hava dünden daha serin olacakmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Hasta" kelimesi adlaşmış sıfattır. Virgül kaldırılırsa "Hasta hemşireye..." şeklinde bir sıfat tamlaması oluşur ve "Hasta" kelimesi "hemşire" isminin niteleme sıfatı haline gelerek hem türü hem de anlamı değiştirir.'
      },
      {
        id: 'q-sf-10-23',
        difficulty: 'hard',
        questionText: 'Miktar zarfları niteleme sıfatlarının önüne gelerek onları derecelendirir. Aşağıdakilerin hangisinde miktar zarfı, bir sıfatı değil başka bir zarfı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Oldukça zor bir sınavı geride bıraktık.' },
          { id: 'B', text: 'En güzel şiirleri her zaman o yazar.' },
          { id: 'C', text: 'Pek konuşkan bir adam olmadığını biliyordum.' },
          { id: 'D', text: 'Çok hızlı koşarak yanımızdan geçti gitti.' },
          { id: 'E', text: 'Daha büyük bir arabaya ihtiyacı varmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "hızlı" kelimesi "koşarak" fiilimsisini nitelediği için zarftır. Başındaki "Çok" kelimesi ise sıfatı değil, "hızlı" zarfını derecelendiren bir miktar zarfıdır. Diğer seçeneklerde miktar zarfları (Oldukça, En, Pek, Daha) doğrudan sıfatları derecelendirmiştir.'
      },
      {
        id: 'q-sf-10-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki sıfat türetme görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benim bilgisayarım arızalandı, seninki çalışıyor mu?' },
          { id: 'B', text: 'Odanın rengi, salonunkinden çok daha güzelmiş.' },
          { id: 'C', text: 'O kadar yorulmuştum ki hemen uykuya daldım.' },
          { id: 'D', text: 'Sabahki kazada neyse ki yaralanan olmamış.' },
          { id: 'E', text: 'Evdekiler bu akşam bize misafirliğe gelecek.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "-ki" eki "sabah" zarfına/ismine gelerek onu "kaza" ismini belirten bir sıfata (Sabahki kaza) çevirmiştir. A ve B\'de ilgi zamiri, C\'de bağlaç, E\'de adlaşmış sıfat/zamir görevindedir.'
      },
      {
        id: 'q-sf-10-25',
        difficulty: 'hard',
        questionText: 'Kurallı birleşik sıfatlar, bir sıfat tamlamasının yer değiştirmesi ve isme "-(s)i" iyelik eki getirilmesi yoluyla oluşturulabilir. Aşağıdakilerin hangisinde bu yolla oluşturulmuş bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu sporcular öne çıksın.' },
          { id: 'B', text: 'Kırmızı kaplı defteri masanın üzerinde unutmuş.' },
          { id: 'C', text: 'Üç günlük dünyada birbirimizi üzmeyelim.' },
          { id: 'D', text: 'Başı dumanlı dağlar bize engel oldu.' },
          { id: 'E', text: 'İri yapılı bir adam kapıda bizi bekliyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "dumanlı baş" sıfat tamlaması yer değiştirip isme iyelik eki (baş-ı dumanlı) getirilmiş ve "dağlar" ismini niteleyen kurallı birleşik sıfat oluşturulmuştur. Diğer şıklar "sıfat tamlaması + lı/li/lık/lik" kuralıyla yapılmıştır.'
      },
      {
        id: 'q-sf-10-26',
        difficulty: 'hard',
        questionText: 'Bir cümlede aynı isim tamlaması hem niteleme hem de belirtme sıfatı tarafından nitelenebilir. Aşağıdakilerin hangisinde bu kullanıma bir örnek vardır?',
        options: [
          { id: 'A', text: 'Eski köy yolları nihayet asfaltlanıyor.' },
          { id: 'B', text: 'Odasının açık penceresinden içeri soğuk giriyordu.' },
          { id: 'C', text: 'Şu büyük evin bahçesinde yıllarca oyun oynadık.' },
          { id: 'D', text: 'Adamın yırtık paltosu içimizi burktu.' },
          { id: 'E', text: 'Yeni edebiyat öğretmeni derse bugün başlayacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "evin bahçesi" isim tamlamasıdır ancak sorudaki kastedilen isim "ev"dir; "ev" ismi hem "Şu" (işaret/belirtme) hem de "büyük" (niteleme) sıfatı alarak iki tür sıfatla nitelenmiş/belirtilmiştir.'
      },
      {
        id: 'q-sf-10-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat ek fiil (-idi, -imiş, -ise, -dir) alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Bugün hava dünden daha soğuktu.' },
          { id: 'B', text: 'Benim en sevdiğim mevsim her zaman ilkbahardır.' },
          { id: 'C', text: 'O zamanlar ben sınıfın en çalışkanıydım.' },
          { id: 'D', text: 'Bu araba sandığımdan daha hızlıymış.' },
          { id: 'E', text: 'Benim sadık yârim kara topraktır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çalışkanıydım" kelimesi "çalışkan (öğrenci)" anlamında bir adlaşmış sıfattır ve ek eylem (-idim) alarak yüklem görevini üstlenmiştir.'
      },
      {
        id: 'q-sf-10-28',
        difficulty: 'hard',
        questionText: 'Sıfat-fiiller de bir isim gibi kullanılabilir ve önlerindeki isim düşünce adlaşmış sıfat olurlar. Aşağıdakilerin hangisinde adlaşmamış bir sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Veren eli herkes öper derler.' },
          { id: 'B', text: 'Gelen gideni her zaman aratır.' },
          { id: 'C', text: 'Çok okuyan mı çok gezen mi daha iyi bilir?' },
          { id: 'D', text: 'Ağlayanın malı gülene hayretmez.' },
          { id: 'E', text: 'Bilenle bilmeyen bir olur mu hiç?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-en" sıfat-fiil ekini alan "Veren" kelimesi, yanındaki "eli" ismini nitelemiştir (Veren el) ve adlaşmamış, doğrudan sıfat görevinde kalmıştır. Diğer seçeneklerdeki sıfat-fiiller (gelen, gideni, okuyan, gezen, ağlayanın, gülene, bilen, bilmeyen) önlerindeki ismin düşmesiyle adlaşmış sıfat(-fiil) olmuşlardır.'
      },
      {
        id: 'q-sf-10-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "o" kelimesi farklı bir türde kullanılmıştır?',
        options: [
          { id: 'A', text: 'O adamı bir daha bu mahallede görmek istemiyorum.' },
          { id: 'B', text: 'O, hiçbir zaman bana verdiği sözden dönmedi.' },
          { id: 'C', text: 'O kitabı yarın bana mutlaka getirmelisin.' },
          { id: 'D', text: 'O günlerde hepimiz çok zorluk çektik.' },
          { id: 'E', text: 'O köye bir daha yolum düşer mi bilmiyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "O" kelimesi bir kişinin isminin yerini tuttuğu için kişi zamiri görevindedir. Diğer seçeneklerde ise isimleri (adam, kitap, gün, köy) belirttiği için işaret sıfatıdır.'
      },
      {
        id: 'q-sf-10-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfat tamlamalarından hangisi, yapısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Soğuk kış_ günleri nihayet geride kaldı.' },
          { id: 'B', text: '_Büyük ev_ hayaliyle yıllarca para biriktirdi.' },
          { id: 'C', text: '_Kırık dökük_ sandalyelerde oturmaktan yorulduk.' },
          { id: 'D', text: '_Yeni araba_ kokusu herkesin hoşuna gider.' },
          { id: 'E', text: '_Boş sokaklar_ geceleyin insanı ürkütüyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (soğuk), B (büyük), D (yeni), E (boş) seçeneklerindeki sıfatlar basit yapıdadır. C seçeneğindeki "Kırık dökük" ise iki kelimeden (ikileme) oluşan birleşik (veya grubu oluşturan) türemiş yapılı bir sıfat tamlamasıdır. Farklı olan C seçeneğidir.'
      }
    ]
  }
];
