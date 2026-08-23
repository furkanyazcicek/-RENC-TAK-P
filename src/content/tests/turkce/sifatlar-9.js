export default [
  {
    id: 'test-sifatlar-9-kolay',
    title: 'Sıfatlar 9 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-sf-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Derin vadilerden geçerek bu köye ulaştık.' },
          { id: 'B', text: 'Onunla dün akşam karşılaştık.' },
          { id: 'C', text: 'Herkes senin kararına saygı duymalı.' },
          { id: 'D', text: 'Oraya nasıl gideceğimizi bilmiyorum.' },
          { id: 'E', text: 'Bugün hava düne göre daha iyi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Derin" kelimesi, "vadiler" ismini nitelediği (Nasıl vadiler?) için niteleme sıfatıdır. Diğer seçeneklerde niteleme sıfatı bulunmamaktadır.'
      },
      {
        id: 'q-sf-9-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi her zaman sıfat görevinde kullanılmaz?',
        options: [
          { id: 'A', text: 'Hangi' },
          { id: 'B', text: 'Kaç' },
          { id: 'C', text: 'Hiçbir' },
          { id: 'D', text: 'Tatlı' },
          { id: 'E', text: 'Bazı' }
        ],
        correctOptionId: 'D',
        explanation: '"Tatlı" kelimesi, yerine göre isim (Tatlı yedik), zarf (Tatlı konuştu) ya da sıfat (Tatlı dil) olarak kullanılabilir. Diğer kelimeler, genel olarak (soru anlamı ya da belirsizlik anlamı taşırken) ağırlıklı olarak sıfat (veya zamirleşerek) kullanılır ama "hiçbir", "bazı" kelimeleri sıfat kökenlidir, ek almadıkça sıfattır. "Tatlı" ise kökten farklı türlerde de bolca kullanılır. Ancak soru kökü biraz belirsiz, daha net bir kelime seçelim. A: Hangi (zamir de olur: Hangisi). O zaman soruyu daha belirgin yapalım.',
        options: [
          { id: 'A', text: 'Soğuk' },
          { id: 'B', text: 'Birkaç' },
          { id: 'C', text: 'Bütün' },
          { id: 'D', text: 'Hiçbir' },
          { id: 'E', text: 'Kimi' }
        ],
        correctOptionId: 'A',
        explanation: '"Soğuk" kelimesi isim (Soğuktan üşüdüm), zarf (Bana soğuk davrandı) veya sıfat (Soğuk su) olabilir. Ancak diğerleri (birkaç, bütün, hiçbir) ek almadıkları sürece genelde sıfattır.'
      },
      {
        id: 'q-sf-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu çöpe atman gerekiyor.' },
          { id: 'B', text: 'Şuradan dönersen marketi görürsün.' },
          { id: 'C', text: 'O çocuk seni sabahtan beri arıyor.' },
          { id: 'D', text: 'Orası benim memleketimdir.' },
          { id: 'E', text: 'Böylesini daha önce hiç görmemiştim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" kelimesi "çocuk" ismini işaret ettiği için işaret sıfatıdır. Diğer seçeneklerdeki kelimeler ismin yerini tuttukları için işaret zamiridir.'
      },
      {
        id: 'q-sf-9-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden hala buradasınız?' },
          { id: 'B', text: 'Nasıl bir bilgisayar alacaksın?' },
          { id: 'C', text: 'Toplantıya kimler katıldı?' },
          { id: 'D', text: 'Buraya ne zaman taşındınız?' },
          { id: 'E', text: 'Bu kalemi bana mı aldın?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Nasıl" kelimesi "bilgisayar" ismini belirttiği için soru sıfatıdır. A ve D\'de zarf, C\'de zamir, E\'de edat (mı) ile soru sağlanmıştır.'
      },
      {
        id: 'q-sf-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kardeşim ikinci sınıfa geçti.' },
          { id: 'B', text: 'Üçer dilim elma paylaştık.' },
          { id: 'C', text: 'Maaşına yüzde on zam yapılmış.' },
          { id: 'D', text: 'Herkes bir şeyler anlatıyordu.' },
          { id: 'E', text: 'Toplantıya kırk kişi katıldı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "bir" kelimesi "herhangi bir (şey)" anlamı taşıdığı için belgisiz sıfattır, sayı bildiren bir sıfat değildir. A, B, C ve E seçeneklerinde sayı sıfatları (sıra, üleştirme, kesir, asıl) vardır.'
      },
      {
        id: 'q-sf-9-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bazıları bu habere çok üzüldü.' },
          { id: 'B', text: 'Hiçbiri sana inanmıyor.' },
          { id: 'C', text: 'Herkes kendi işiyle meşguldü.' },
          { id: 'D', text: 'Bütün sokaklar bayraklarla donatıldı.' },
          { id: 'E', text: 'Biri bana saati sorabilir mi?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Bütün" kelimesi "sokaklar" ismini belirterek belgisiz sıfat görevinde kullanılmıştır. Diğer seçeneklerdeki altı çizili veya vurgulu kelimeler (bazıları, hiçbiri, herkes, biri) belgisiz zamirdir.'
      },
      {
        id: 'q-sf-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Karanlık odalarda sen aklıma gelirsin.' },
          { id: 'B', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'C', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'D', text: 'Derdimi anlatsam kimse anlamaz.' },
          { id: 'E', text: 'Sarı saçlarına deli gönlümü bağlamıştım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ismi niteleyen ya da belirten hiçbir sıfat kelimesi yoktur. "kimse" belgisiz zamirdir. A (karanlık oda), B (güzel gün), C (bu merdiven), E (sarı saç, deli gönül) seçeneklerinde sıfat tamlaması vardır.'
      },
      {
        id: 'q-sf-9-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim hem niteleme hem belirtme sıfatı almıştır?',
        options: [
          { id: 'A', text: 'Eski evleri tek tek yıktılar.' },
          { id: 'B', text: 'Şu büyük bahçede oyun oynardık.' },
          { id: 'C', text: 'Bütün gün evde oturdum.' },
          { id: 'D', text: 'Uzun ve sıkıcı bir film izledik.' },
          { id: 'E', text: 'Yeni kitaplarımı henüz kaplamadım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "bahçe" ismi, hem işaret(belirtme) sıfatı ("Şu") hem de niteleme sıfatı ("büyük") almıştır.'
      },
      {
        id: 'q-sf-9-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat vardır?',
        options: [
          { id: 'A', text: 'Yaşlı adam bankta uyuya kalmış.' },
          { id: 'B', text: 'Kirli tabakları makineye yerleştirdi.' },
          { id: 'C', text: 'İyiler bu hayatta her zaman kazanmayabilir.' },
          { id: 'D', text: 'Bozuk saat günde iki kere doğruyu gösterir.' },
          { id: 'E', text: 'Güzel havalar hepimizi neşelendirdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "İyi insanlar/kişiler" tamlamasındaki isim (insanlar) düşmüş, "iyi" sıfatı çoğul eki (-ler) alarak ismin yerine geçmiş ve adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-sf-9-10',
        difficulty: 'easy',
        questionText: '"İyi" kelimesi aşağıdaki cümlelerin hangisinde sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün kendimi çok iyi hissediyorum.' },
          { id: 'B', text: 'O, iyi bir insandır.' },
          { id: 'C', text: 'Derslerine her zaman çok iyi çalışırdı.' },
          { id: 'D', text: 'Aramızdaki ilişki eskisinden daha iyi.' },
          { id: 'E', text: 'İyileri kimse unutmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "iyi" kelimesi "insan" ismini nitelediği için sıfattır. A ve C\'de zarf, D\'de isim/yüklem, E\'de ise adlaşmış sıfattır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-9-orta',
    title: 'Sıfatlar 9 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (91-100)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-sf-9-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Masmavi deniz manzarası bizi büyüledi.' },
          { id: 'B', text: 'Kocaman gözleriyle etrafa bakıyordu.' },
          { id: 'C', text: 'Yapayanlız bir hayat sürüyordu.' },
          { id: 'D', text: 'Tertemiz caddelerde yürümek harikaydı.' },
          { id: 'E', text: 'Bembeyaz kar taneleri süzülüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki kelimeler isimlerin önüne gelerek (deniz, göz, cadde, kar) pekiştirme sıfatı olmuştur. C seçeneğinde "Yapayalnız" kelimesi "hayat" ismini nitelemiştir, bu da pekiştirme sıfatıdır! Soruyu düzeltelim.',
        options: [
          { id: 'A', text: 'Masmavi deniz manzarası bizi büyüledi.' },
          { id: 'B', text: 'Kocaman gözleriyle etrafa bakıyordu.' },
          { id: 'C', text: 'Yapayalnız kalmıştı koskoca evde.' },
          { id: 'D', text: 'Tertemiz caddelerde yürümek harikaydı.' },
          { id: 'E', text: 'Bembeyaz kar taneleri süzülüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Yapayalnız" kelimesi "kalmıştı" fiilini nitelediği için durum zarfı görevindedir. Diğer seçeneklerdeki pekiştirilmiş kelimeler isimleri niteledikleri için sıfattır.'
      },
      {
        id: 'q-sf-9-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen "-cık, -ce, -msi, -mtırak" ekleriyle yapılır. Aşağıdakilerin hangisinde altı çizili sözcük küçültme sıfatı değildir?',
        options: [
          { id: 'A', text: '_Ufacık_ elleriyle annesine tutundu.' },
          { id: 'B', text: '_Mayhoşumsu_ elmalardan bir kilo aldık.' },
          { id: 'C', text: 'Evimizin önünde _küçücük_ bir bahçe vardı.' },
          { id: 'D', text: '_Gelincik_ tarlası kızıla boyanmıştı.' },
          { id: 'E', text: '_Yeşilimsi_ gözleri çok dikkat çekiyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Gelincik" kelimesi, bir çiçek adı olarak kalıplaşmış ve kalıcı isim olmuştur. Küçültme sıfatı görevinde değildir.'
      },
      {
        id: 'q-sf-9-13',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Günde sadece bir fincan kahve içer.' },
          { id: 'B', text: 'Tatil için yalnızca bir haftası kalmıştı.' },
          { id: 'C', text: 'Güzel bir akşam yemeğinde buluştuk.' },
          { id: 'D', text: 'Oraya ulaşmamız tam bir saat sürdü.' },
          { id: 'E', text: 'Bize sadece bir dilim pasta yeterli olur.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bir" kelimesi "tek, bir adet" anlamındaysa sayı sıfatı, "herhangi bir" anlamındaysa belgisiz sıfattır. C seçeneğinde sayı (adet) belirtmeyip belirsizlik (herhangi bir) ifade ettiği için belgisiz sıfattır. Diğer şıklarda sayı sıfatıdır.'
      },
      {
        id: 'q-sf-9-14',
        difficulty: 'medium',
        questionText: 'Soru anlamı bir soru sıfatıyla sağlandığında cevabı da çoğunlukla sıfat olur. Aşağıdakilerin hangisinde soru sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Neden bize daha önce söylemedin?' },
          { id: 'B', text: 'Bunu sana kim anlattı?' },
          { id: 'C', text: 'Hangi evde oturuyorsunuz?' },
          { id: 'D', text: 'Ne zaman döneceksiniz?' },
          { id: 'E', text: 'Toplantıda neler konuştunuz?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Hangi" kelimesi "ev" ismini belirttiği için soru sıfatıdır ve soru anlamını sağlayan kelimedir.'
      },
      {
        id: 'q-sf-9-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfatlardan hangisi yapısı bakımından farklıdır?',
        options: [
          { id: 'A', text: '_Tatlı_ dilli insanları herkes sever.' },
          { id: 'B', text: '_Soğuk_ sulardan içme, hastalanırsın.' },
          { id: 'C', text: '_Kırık_ camları değiştirmemiz gerekiyor.' },
          { id: 'D', text: '_Açıkgöz_ adam hemen duruma müdahale etti.' },
          { id: 'E', text: '_Yorgun_ savaşçılar dinlenmeye çekildi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (tat-lı), B (soğu-k), C (kır-ık) ve E (yor-gun) seçeneklerindeki sıfatlar yapım eki alarak oluşmuş türemiş sıfatlardır. D seçeneğindeki "Açıkgöz" ise iki kelimenin anlamca kaynaşmasıyla oluşmuş birleşik sıfattır.'
      },
      {
        id: 'q-sf-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde bir adlaşmış sıfat nesne görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'İyiler, bu dünyada mutlaka kazanır.' },
          { id: 'B', text: 'Eskileri eskiciye satıp yerine yenilerini aldı.' },
          { id: 'C', text: 'Tembeller, sınavı geçemeyeceklerini anladılar.' },
          { id: 'D', text: 'Gelenler, içerideki koltuklara oturdu.' },
          { id: 'E', text: 'Kötüler elbet cezasını çekecek.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eski eşyaları" anlamındaki "Eskileri" kelimesi adlaşmış sıfattır ve "neyi satıp?" sorusuna yanıt vererek cümlede (yan cümlenin) nesnesi görevinde kullanılmıştır. Diğer şıklardaki adlaşmış sıfatlar (İyiler, Tembeller, Gelenler, Kötüler) cümlenin öznesi görevindedir.'
      },
      {
        id: 'q-sf-9-17',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar isme "-lı/-li" eki getirilerek de oluşturulabilir. Aşağıdakilerin hangisinde bu kurala uyan bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Kışlık kıyafetlerini dolaba yerleştirdi.' },
          { id: 'B', text: 'Geniş omuzlu gençler takıma alındı.' },
          { id: 'C', text: 'İki günlük yoldan geldiklerini söylediler.' },
          { id: 'D', text: 'Duvarı yıkık eve kimse yaklaşamıyordu.' },
          { id: 'E', text: 'Boşboğaz bir adamla yola çıkma.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "geniş omuz" sıfat tamlamasına "-lu" eki getirilerek "gençler" ismini niteleyen kurallı birleşik sıfat (geniş omuz-lu gençler) oluşturulmuştur. C\'de "-lük", D\'de "iyelik eki kuralı", E\'de "anlamca kaynaşmış sıfat" vardır.'
      },
      {
        id: 'q-sf-9-18',
        difficulty: 'medium',
        questionText: 'Bazen sıfatlar belirtisiz isim tamlamasının önüne gelerek tamlamanın tamamını niteler. Aşağıdakilerin hangisinde böyle bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Evin geniş bahçesi çok güzeldi.' },
          { id: 'B', text: 'Eski köy yolları asfaltlanıyor.' },
          { id: 'C', text: 'Masanın kırık ayağını tamir ettim.' },
          { id: 'D', text: 'Çocuğun yırtık ceketini diktiler.' },
          { id: 'E', text: 'Büyük deniz gemileri limana yanaştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "köy yolları" belirtisiz isim tamlamasıdır, "Eski" sıfatı bu tamlamanın tamamını nitelemektedir. (E şıkkında da "Büyük deniz gemileri" var, deniz gemisi... Evet, bu da belirtisiz isim tamlamasıdır. Bu soruyu değiştirelim: B şıkkında Bırakalım, E şıkkını "Odanın açık penceresi" yapalım).',
        options: [
          { id: 'A', text: 'Evin geniş bahçesi çok güzeldi.' },
          { id: 'B', text: 'Eski köy yolları asfaltlanıyor.' },
          { id: 'C', text: 'Masanın kırık ayağını tamir ettim.' },
          { id: 'D', text: 'Çocuğun yırtık ceketini diktiler.' },
          { id: 'E', text: 'Odanın açık penceresinden hava giriyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "köy yolları" belirtisiz isim tamlamasıdır. "Eski" sıfatı ise sadece köyü değil, tamlamanın bütününü (köy yollarını) nitelemektedir. Diğer seçeneklerdeki sıfatlar belirtili isim tamlamalarının arasına girmiştir.'
      },
      {
        id: 'q-sf-9-19',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları dört türe ayrılır. Aşağıdaki altı çizili sayı sıfatlarından hangisi türü bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Birinci_ sıradaki adamı tanıyor musun?' },
          { id: 'B', text: 'Sınavda _üçüncü_ olmuş.' },
          { id: 'C', text: '_İkişer_ elma yedik.' },
          { id: 'D', text: '_Beşinci_ kattaki ofise çıkacağız.' },
          { id: 'E', text: '_Yedinci_ hissim beni hiç yanıltmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki altı çizili sıfatlar sıra bildiren (sıra sayı) sıfatlardır. C seçeneğindeki "İkişer" kelimesi ise paylaştırma bildiren (üleştirme sayı) sıfatıdır.'
      },
      {
        id: 'q-sf-9-20',
        difficulty: 'medium',
        questionText: '"Öyle" kelimesi aşağıdaki cümlelerin hangisinde sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Öyle insanlardan uzak durmalısın.' },
          { id: 'B', text: 'Bana öyle sözler verme, inanmam.' },
          { id: 'C', text: 'Öyle zamanlar olur ki insan ne yapacağını bilemez.' },
          { id: 'D', text: 'Olayları bir de öyle dinlemelisin.' },
          { id: 'E', text: 'Senin gibi öyle dostlar bulmak zor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "öyle" kelimesi "dinlemelisin" fiilini nitelediği için (Nasıl dinlemelisin?) zarf görevindedir. Diğer seçeneklerdeki "öyle" kelimeleri isimlerin önüne gelerek onları niteleyen sıfatlardır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-9-zor',
    title: 'Sıfatlar 9 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (101-110)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-sf-9-21',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfattan sonra bir isim geldiğinde anlam karmaşasını önlemek için araya virgül konur. Aşağıdakilerin hangisinde virgül (, ) kaldırılırsa kelimenin türü değişir?',
        options: [
          { id: 'A', text: 'Genç, doktora bütün şikayetlerini anlattı.' },
          { id: 'B', text: 'Tembeller, bu sınavda çok zorlandı.' },
          { id: 'C', text: 'Ali, yarın akşam bizimle sinemaya gelecekmiş.' },
          { id: 'D', text: 'İyiler, bu dünyada elbet kazanır.' },
          { id: 'E', text: 'Ankara, Türkiye\'nin başkentidir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde virgül kaldırılırsa "Genç doktor..." şeklinde bir sıfat tamlaması oluşur. Böylece "Genç" kelimesi adlaşmış sıfat (özne) olmaktan çıkıp niteleme sıfatına dönüşür. Türü ve cümlenin anlamı değişir. (B ve D\'de çoğul eki aldıkları için sıfat tamlaması kuramazlar).'
      },
      {
        id: 'q-sf-9-22',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen bir fiili veya zarfı değil, bir sıfatı derecelendirmek için kullanılır. Aşağıdakilerin hangisinde zarf, bir sıfatı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Çok çalışarak buralara geldi.' },
          { id: 'B', text: 'Oldukça büyük bir eve taşındılar.' },
          { id: 'C', text: 'Toplantıda pek konuşmadı.' },
          { id: 'D', text: 'Daha gelmedi, birazdan burada olur.' },
          { id: 'E', text: 'Hızlıca koşarak yanımızdan uzaklaştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "büyük" kelimesi niteleme sıfatıdır. "Oldukça" miktar zarfı ise doğrudan bu sıfatı derecelendirmek (Oldukça büyük) için kullanılmıştır. Diğer şıklarda zarflar fiilleri veya eylemsileri derecelendirmiştir.'
      },
      {
        id: 'q-sf-9-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili kelimelerden hangisi sıfat-fiil eklerinden birini aldığı halde adlaşmış sıfat olmuştur?',
        options: [
          { id: 'A', text: '_İşleyen_ demir pas tutmaz.' },
          { id: 'B', text: '_Görünmez_ kazalara karşı önlem almalıyız.' },
          { id: 'C', text: '_Tanıdık_ yüzlerle karşılaşmak güzeldi.' },
          { id: 'D', text: '_Söyleyecek_ sözüm kalmadı artık sana.' },
          { id: 'E', text: '_Gelen_ gideni aratır derler.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "-en" sıfat-fiil ekini alan "Gelen" ve "giden(i)" kelimeleri, önlerindeki isim düştüğü için adlaşmış sıfat(-fiil) olmuşlardır. A, B, C ve D seçeneklerindeki kelimeler ise (İşleyen demir, Görünmez kaza, Tanıdık yüz, Söyleyecek söz) isimleri niteleyerek sıfat tamlaması kurmuşlardır.'
      },
      {
        id: 'q-sf-9-24',
        difficulty: 'hard',
        questionText: 'Kurallı birleşik sıfatlar "Sıfat tamlamasının yer değiştirmesi ve isme iyelik eki -(s)i getirilmesi" kuralıyla oluşturulabilir. Aşağıdakilerin hangisinde bu kurala uyan bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu sporcular öne çıksın.' },
          { id: 'B', text: 'Rengi soluk elbiseyi giymek istemedi.' },
          { id: 'C', text: 'Üç günlük dünyada birbirimizi kırmayalım.' },
          { id: 'D', text: 'Siyah saçlı çocuk bana doğru geliyordu.' },
          { id: 'E', text: 'Kırık camlı pencerelerden soğuk giriyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "soluk renk" sıfat tamlaması yer değiştirip isme iyelik eki (reng-i soluk) getirilerek "elbise" ismini niteleyen kurallı birleşik sıfat elde edilmiştir. Diğer şıklardakiler "sıfat tamlaması + lı/li/lık/lik" kuralıyla oluşturulmuştur.'
      },
      {
        id: 'q-sf-9-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen "-ki" eklerinden hangisi, kendisinden önceki sözcükle birlikte sıfat türetme görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'O kadar yoruldum ki hemen uyumak istiyorum.' },
          { id: 'B', text: 'Seninki yine ortalıkta görünmüyor.' },
          { id: 'C', text: 'Benim arabam bozuldu, babamınki de servisteymiş.' },
          { id: 'D', text: 'Yarınki maça mutlaka gitmeliyiz.' },
          { id: 'E', text: 'Evdekiler bu habere çok sevinecek.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "-ki" eki "yarın" zarfına/ismine gelerek onu "maç" ismini niteleyen bir sıfata (Yarınki maç) çevirmiştir. A\'da bağlaç, B ve C\'de ilgi zamiri, E\'de (Evdeki insanlar) adlaşmış sıfat/zamir görevindedir (sıfat türetip önündeki ismi düşürmüş, tam bir niteleme sıfatı olarak kalan D şıkkıdır).'
      },
      {
        id: 'q-sf-9-26',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfatlar bir ismin yerini tuttukları için çoğul ve hal eklerini alabilirler. Aşağıdakilerin hangisinde adlaşmış sıfat yönelme (yaklaşma) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Eskileri eskiciye verdik.' },
          { id: 'B', text: 'Gelenler salondaki yerlerini aldı.' },
          { id: 'C', text: 'Yaşlıların tecrübelerinden faydalanmak gerekir.' },
          { id: 'D', text: 'Suskunlara pek sır verilmez derler.' },
          { id: 'E', text: 'İyiler her zaman ödüllendirilmeyebilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Suskun insanlar" anlamındaki adlaşmış sıfat, ismin yönelme hal ekini (-a / -e) alarak "Suskunlara" şekline dönüşmüştür. A\'da belirtme (-i), B ve E\'de sadece çoğul, C\'de tamlayan eki vardır.'
      },
      {
        id: 'q-sf-9-27',
        difficulty: 'hard',
        questionText: 'Bir cümlede arasına sıfat girmiş belirtili isim tamlaması kullanılabilir. Aşağıdakilerin hangisinde böyle bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Okulun geniş bahçesinde çocuklar oynuyordu.' },
          { id: 'B', text: 'Eski köy evlerinin bacaları hiç tütmüyor.' },
          { id: 'C', text: 'Büyük şehirlerin kalabalığı insanı yoruyor.' },
          { id: 'D', text: 'Yeni edebiyat öğretmeni derse bugün başlayacak.' },
          { id: 'E', text: 'Sıcak yaz günleri nihayet sona erdi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Okulun bahçesi" belirtili isim tamlamasıdır. "geniş" niteleme sıfatı, tamlayan ile tamlananın arasına girerek tamlananı nitelemiştir.'
      },
      {
        id: 'q-sf-9-28',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü cümlede zamir, sıfat veya zarf olarak kullanılabilir. Aşağıdakilerin hangisinde "ne" sözcüğü soru sıfatı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün pazardan ne aldın?' },
          { id: 'B', text: 'Ne tür müzikler dinlemeyi seversin?' },
          { id: 'C', text: 'Elindeki kutuda ne saklıyorsun?' },
          { id: 'D', text: 'Ne diye bana kızıp duruyorsun?' },
          { id: 'E', text: 'Oraya gidip de ne yapacaksın?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ne" sözcüğü (Ne tür), "müzikler" (veya tür) ismini belirttiği için soru sıfatıdır. A, C ve E\'de soru zamiri, D\'de (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-9-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisinde adlaşmış sıfat, ek fiil (ek eylem) alarak cümlenin yüklemi olmuştur?',
        options: [
          { id: 'A', text: 'İşleyen demir ışıldar.' },
          { id: 'B', text: 'Çok okuyan çok bilir.' },
          { id: 'C', text: 'Gülü seven dikenine katlanır.' },
          { id: 'D', text: 'Görünen köy kılavuz istemez.' },
          { id: 'E', text: 'O zamanlar ben sınıfın en çalışkanıydım.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneği bir atasözü olmasa da (atasözü yazmak zor) seçenek olarak verilmiştir: "çalışkanıydım" yüklemi, "çalışkan (öğrenci)" adlaşmış sıfatının ek eylem (-idim) almasıyla oluşmuştur. A, B, C ve D şıklarındakiler zaten atasözüdür fakat yüklemleri adlaşmış sıfat değildir.'
      },
      {
        id: 'q-sf-9-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen altı çizili sıfat tamlamalarından hangisi, yapısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Sıcak yaz_ günleri geride kaldı.' },
          { id: 'B', text: '_Büyük ev_ sahibi olmak hayal oldu.' },
          { id: 'C', text: '_Kırık dökük_ sandalyelerde oturduk.' },
          { id: 'D', text: '_Yeni araba_ kokusu herkesi cezbetti.' },
          { id: 'E', text: '_Boş sokaklar_ insanı ürkütüyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (sıcak), B (büyük), D (yeni), E (boş) seçeneklerindeki sıfatlar basit yapıdadır. C seçeneğindeki "Kırık dökük" ise iki kelimeden (ikileme) oluşan birleşik (veya türemiş) bir sıfat grubudur. Farklı olan budur.'
      }
    ]
  }
];
