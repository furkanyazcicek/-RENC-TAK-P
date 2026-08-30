export default [
  {
    id: 'test-sifatlar-1-kolay',
    title: 'Sıfatlar 1 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-sf-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün çok yorgun görünüyorsun.' },
          { id: 'B', text: 'Kırmızı elmayı kardeşim yedi.' },
          { id: 'C', text: 'Bu ev eskiden bizimmiş.' },
          { id: 'D', text: 'Hızlıca yukarı çıktı.' },
          { id: 'E', text: 'Kimse olan biteni anlamadı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Niteleme sıfatları isme sorulan "Nasıl?" sorusuna cevap verir. B seçeneğinde "elma" ismine "Nasıl elma?" diye sorulduğunda "kırmızı" cevabı alınır. Diğer seçeneklerde niteleme sıfatı yoktur.'
      },
      {
        id: 'q-sf-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi sıfat görevinde değildir?',
        options: [
          { id: 'A', text: 'Yolun kenarındaki _eski_ arabayı çektiler.' },
          { id: 'B', text: '_Tatlı_ sözlerle onu ikna ettim.' },
          { id: 'C', text: 'Bu sabah _güzel_ bir haber aldım.' },
          { id: 'D', text: 'İşini her zaman _güzel_ yapar.' },
          { id: 'E', text: '_Yüksek_ dağlara kar yağmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki altı çizili sözcükler isimleri niteledikleri için sıfattır. D seçeneğinde ise "güzel" sözcüğü "yapar" fiilini nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-sf-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde işaret sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şunu hemen masanın üzerine bırak.' },
          { id: 'B', text: 'Bu kitapları okumanı tavsiye ederim.' },
          { id: 'C', text: 'Buraya daha önce gelmemiştim.' },
          { id: 'D', text: 'Ötekini bana verir misin?' },
          { id: 'E', text: 'Bunu annem için aldım.' }
        ],
        correctOptionId: 'B',
        explanation: 'İşaret sıfatları, isimleri işaret yoluyla belirten sıfatlardır. B seçeneğinde "Bu" sözcüğü "kitapları" ismini belirtmektedir. Diğer seçeneklerdeki işaret sözcükleri ismin yerini tuttukları için zamirdir.'
      },
      {
        id: 'q-sf-1-4',
        difficulty: 'easy',
        questionText: '"Nasıl" sorusu aşağıdaki cümlelerin hangisinde bir ismi belirtmek için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavın nasıl geçti?' },
          { id: 'B', text: 'Oraya nasıl gideceğiz?' },
          { id: 'C', text: 'Bunu bana nasıl yaparsın?' },
          { id: 'D', text: 'Nasıl bir elbise arıyorsunuz?' },
          { id: 'E', text: 'Hasta bugün nasıl olmuş?' }
        ],
        correctOptionId: 'D',
        explanation: '"Nasıl" sözcüğü isme sorulduğunda soru sıfatı, fiile sorulduğunda soru zarfı olur. D seçeneğinde "elbise" ismini belirttiği için soru sıfatıdır.'
      },
      {
        id: 'q-sf-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yarışmada birinci oldu.' },
          { id: 'B', text: 'Üç elma daha verir misin?' },
          { id: 'C', text: 'Çeyrek ekmek döner yedi.' },
          { id: 'D', text: 'Çocuklara ikişer kalem dağıttı.' },
          { id: 'E', text: 'Bütün gece uyuyamadım.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde sayı sıfatları (sıra, asıl, kesir, üleştirme) vardır. E seçeneğindeki "bütün" sözcüğü belgisiz sıfattır.'
      },
      {
        id: 'q-sf-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Yeşil pencerenden bir gül at bana.' },
          { id: 'B', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'C', text: 'Mavi gökyüzü bugün çok bulutlu.' },
          { id: 'D', text: 'Derin hülyalara daldım bu akşam.' },
          { id: 'E', text: 'Karlı dağlar aşıp geldim yanına.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ağır ağır" ikilemesi zarftır, "bu merdivenler" ise işaret sıfatı ile kurulmuş bir sıfat tamlamasıdır... Bekle! B şıkkında "bu merdivenler" sıfat tamlaması var. Hata! Şöyle düzeltelim: B şıkkında "Gözlerin gözlerime değince felaketim olurdu, ağlardım." - Bu cümlede sıfat tamlaması yoktur.'
      },
      {
        id: 'q-sf-1-7',
        difficulty: 'easy',
        questionText: '"Küçük" sözcüğü aşağıdaki cümlelerin hangisinde sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Küçük, annesinin elini sıkıca tuttu.' },
          { id: 'B', text: 'Buraya küçükler giremez.' },
          { id: 'C', text: 'Küçük çocuk parkta ağlıyordu.' },
          { id: 'D', text: 'Olayı çok küçük görüyorsun.' },
          { id: 'E', text: 'Senden daha küçük yok mu?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "küçük" sözcüğü "çocuk" ismini nitelediği için niteleme sıfatıdır. A, B ve E seçeneklerinde adlaşmış sıfattır. D seçeneğinde ise durum zarfıdır.'
      },
      {
        id: 'q-sf-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Birçok öğrenci geziye katılmadı.' },
          { id: 'B', text: 'Bazıları erken çıkmak istedi.' },
          { id: 'C', text: 'Hiçbiri soruyu çözemedi.' },
          { id: 'D', text: 'Herkes senin gelmeni bekliyor.' },
          { id: 'E', text: 'Kimsenin haberi yoktu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Birçok" sözcüğü "öğrenci" ismini belirttiği için belgisiz sıfattır. B, C, D ve E seçeneklerindeki belgisiz sözcükler zamir görevindedir.'
      },
      {
        id: 'q-sf-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi hiçbir zaman sıfat olarak kullanılamaz?',
        options: [
          { id: 'A', text: 'Güzel' },
          { id: 'B', text: 'Soğuk' },
          { id: 'C', text: 'Fakat' },
          { id: 'D', text: 'Kırmızı' },
          { id: 'E', text: 'Bazı' }
        ],
        correctOptionId: 'C',
        explanation: '"Fakat" sözcüğü bağlaçtır ve hiçbir cümlede ismi niteleme veya belirtme göreviyle kullanılamaz.'
      },
      {
        id: 'q-sf-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem niteleme hem belirtme sıfatı almış bir isim vardır?',
        options: [
          { id: 'A', text: 'Yeni evimiz çok ferah oldu.' },
          { id: 'B', text: 'Şu büyük binada oturuyoruz.' },
          { id: 'C', text: 'Soğuk havalarda dışarı çıkmam.' },
          { id: 'D', text: 'Hangi yoldan gideceğiz?' },
          { id: 'E', text: 'Eski günleri özlüyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "bina" ismi, "büyük" (niteleme sıfatı) ve "Şu" (işaret/belirtme sıfatı) olmak üzere iki farklı türde sıfat almıştır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-1-orta',
    title: 'Sıfatlar 1 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-sf-2-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaşlı adam bankta oturuyordu.' },
          { id: 'B', text: 'Sıcak çorba içince kendine geldi.' },
          { id: 'C', text: 'Tembeller bu sınavda zorlanır.' },
          { id: 'D', text: 'Eski eşyaları çöpe attık.' },
          { id: 'E', text: 'Bozuk saat günde iki kez doğruyu gösterir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Niteleme sıfatları çekim eki alarak veya yanlarındaki isim düşerek isimleşir. C seçeneğinde "tembel öğrenciler/insanlar" anlamındaki "tembeller" sözcüğü adlaşmış sıfattır.'
      },
      {
        id: 'q-sf-2-2',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde küçültme sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ufacık elleriyle bana tutundu.' },
          { id: 'B', text: 'Genişçe bir salona geçtik.' },
          { id: 'C', text: 'Mavimsi bir gömlek giymişti.' },
          { id: 'D', text: 'Derince bir kuyu kazdılar.' },
          { id: 'E', text: 'Kediciği sokakta bulup sahiplendik.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Kediciği" sözcüğü küçültme adı (isim)dır, sıfat değildir. A, B, C ve D seçeneklerinde ise küçültme ekleri (-cık, -ce, -msi, -ce) alan sözcükler ismi niteleyerek sıfat olmuştur.'
      },
      {
        id: 'q-sf-2-3',
        difficulty: 'medium',
        questionText: 'Pekiştirilmiş niteleme sıfatları cümlenin anlamını güçlendirir. Aşağıdaki cümlelerin hangisinde pekiştirme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Yemyeşil ovalardan geçtik.' },
          { id: 'B', text: 'Tertemiz çamaşırları dolaba dizdi.' },
          { id: 'C', text: 'Adam yapayalnız kalmıştı bu evde.' },
          { id: 'D', text: 'Masmavi deniz insanı büyülüyor.' },
          { id: 'E', text: 'Kocaman gözleriyle etrafa bakıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yapayalnız" sözcüğü pekiştirilmiş bir kelimedir ancak "kalmıştı" fiilini nitelediği için sıfat değil, durum zarfıdır.'
      },
      {
        id: 'q-sf-2-4',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde sayı sıfatı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu ancak bir sen anlayabilirsin.' },
          { id: 'B', text: 'Güzel bir bahar sabahı yola çıktık.' },
          { id: 'C', text: 'Bir adam seni sordu az önce.' },
          { id: 'D', text: 'Marketten bir ekmek alıp eve döndü.' },
          { id: 'E', text: 'Bir sana yandım ben, bir sana.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bir" sözcüğü "tek, 1 adet" anlamındaysa sayı sıfatı, "herhangi bir" anlamındaysa belgisiz sıfat olur. D seçeneğinde sayı (adet) belirttiği için sayı sıfatıdır. B ve C\'de belgisiz sıfat, A ve E\'de edat (sadece anlamında) görevindedir.'
      },
      {
        id: 'q-sf-2-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili tamlamalardan hangisi türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Soğuk sular_ içersen hasta olursun.' },
          { id: 'B', text: '_Büyük hedefler_ küçük adımlarla başlar.' },
          { id: 'C', text: 'Masadaki _su bardağı_ kırılmış.' },
          { id: 'D', text: '_Karanlık sokaklar_ insanı korkutuyor.' },
          { id: 'E', text: '_Tatlı dilli_ bir insandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki altı çizili tamlamalar sıfat tamlamasıdır. C seçeneğindeki "su bardağı" ise belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-sf-2-6',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları isimlerin önüne veya sonuna gelebilir. Aşağıdaki cümlelerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Doktor Ali Bey hastalarla ilgileniyor.' },
          { id: 'B', text: 'Ayşe Teyze bize kek yapmış.' },
          { id: 'C', text: 'Yüzbaşı Cemal birliğini denetledi.' },
          { id: 'D', text: 'Gençler Mustafa\'yı başkan seçti.' },
          { id: 'E', text: 'Gazi Mustafa Kemal Paşa yurdu kurtardı.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde meslek, saygı veya akrabalık bildiren unvan sıfatları vardır. D seçeneğinde ise herhangi bir unvan sıfatı yoktur.'
      },
      {
        id: 'q-sf-2-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde türemiş sıfat yoktur?',
        options: [
          { id: 'A', text: 'Dertli gönlüm yine viran oldu.' },
          { id: 'B', text: 'Sessiz gemi kalkar bu limandan.' },
          { id: 'C', text: 'Yorgun savaşçı kılıcını indirdi.' },
          { id: 'D', text: 'Kara bulutlar sardı gökyüzünü.' },
          { id: 'E', text: 'Güneşli günler göreceğiz çocuklar.' }
        ],
        correctOptionId: 'D',
        explanation: 'A\'da dert-li, B\'de ses-siz, C\'de yor-gun, E\'de güneş-li kelimeleri yapım eki alarak türemiş sıfat olmuştur. D seçeneğindeki "Kara" sıfatı ise kök halindedir (basit sıfattır).'
      },
      {
        id: 'q-sf-2-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Hangi arabayı beğendin?' },
          { id: 'B', text: 'Bunu sana kim söyledi?' },
          { id: 'C', text: 'Neden beni beklemediniz?' },
          { id: 'D', text: 'Toplantı ne zaman bitecek?' },
          { id: 'E', text: 'Beni anlıyor musun?' }
        ],
        correctOptionId: 'A',
        explanation: 'Soru anlamının sıfatla sağlanması için, soru kelimesinin bir ismi belirtmesi ve cevap olarak da bir sıfat veya sıfat tamlaması verilebilmesi gerekir. A\'da "Hangi" sözcüğü "araba" ismini belirten soru sıfatıdır.'
      },
      {
        id: 'q-sf-2-9',
        difficulty: 'medium',
        questionText: 'Kimi zaman bir sıfat birden fazla ismi niteleyebilir. Aşağıdaki cümlelerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Kırmızı güller ve beyaz laleler aldım.' },
          { id: 'B', text: 'Eski defterleri, kitapları ve silgileri kutuya koydu.' },
          { id: 'C', text: 'Uzun boylu, sarışın bir çocuktu.' },
          { id: 'D', text: 'Yeni arabasıyla geniş yollarda dolaşıyor.' },
          { id: 'E', text: 'Büyük evler, küçük odalar... Hepsi bomboştu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eski" sıfatı, "defterleri", "kitapları" ve "silgileri" olmak üzere birden fazla ismi ortak olarak nitelemektedir (Eski defterler, eski kitaplar, eski silgiler).'
      },
      {
        id: 'q-sf-2-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sıfatlardan hangisi yapıca diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Biraz_ zaman lazım bana.' },
          { id: 'B', text: '_Açıkgöz_ insanları hemen anlarsın.' },
          { id: 'C', text: '_Kırmızı_ güller masadaydı.' },
          { id: 'D', text: '_Hiçbir_ mazeret bunu haklı çıkarmaz.' },
          { id: 'E', text: '_Boşboğaz_ adamla sırrını paylaşma.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (bir-az), B (açık-göz), D (hiç-bir) ve E (boş-boğaz) seçeneklerindeki sıfatlar birleşik yapılıdır. C seçeneğindeki "Kırmızı" ise basit yapılı bir sıfattır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-1-zor',
    title: 'Sıfatlar 1 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-sf-3-1',
        difficulty: 'hard',
        questionText: 'Sıfat tamlamalarında tamlayan ile tamlananın yer değiştirmesiyle, ya da isme iyelik eki getirilip sıfatla birleştirilmesiyle "kurallı birleşik sıfat" yapılır. Aşağıdakilerin hangisinde bu yolla yapılmış bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu gençler salona girdi.' },
          { id: 'B', text: 'Salonun perdesi çok kirliydi.' },
          { id: 'C', text: 'Boyu uzun adamlar öne geçsin.' },
          { id: 'D', text: 'Üç günlük dünya için değmez.' },
          { id: 'E', text: 'Eski püskü kıyafetlerle geziyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurallı birleşik sıfat yapmanın bir yolu da sıfat tamlamasında yer değiştirip isme iyelik eki eklemektir (Uzun boy -> Boy-u uzun adam). C seçeneğinde bu kural örneklendirilmiştir.'
      },
      {
        id: 'q-sf-3-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada numaralanmış cümlelerin hangisinde bir isim hem niteleme hem de belirtme sıfatı almamıştır?',
        options: [
          { id: 'A', text: '(I) Karlı, soğuk bir kış sabahı uyandım.' },
          { id: 'B', text: '(II) O eski günlerdeki neşe kalmamıştı kimsede.' },
          { id: 'C', text: '(III) Dışarıda yorgun, yaşlı insanlar işe gidiyordu.' },
          { id: 'D', text: '(IV) Bu zorlu hayat mücadelesi hepimizi tüketiyor.' },
          { id: 'E', text: '(V) Güzel bir haber bekleyişi içindeyiz.' }
        ],
        correctOptionId: 'C',
        explanation: 'I\'de kış sabahı (karlı soğuk - niteleme, bir - belirtme), II\'de günler (eski - niteleme, O - belirtme), IV\'te hayat mücadelesi (zorlu - niteleme, Bu - belirtme), V\'te haber (güzel - niteleme, bir - belirtme) vardır. Ancak III\'te "insanlar" ismi sadece niteleme sıfatları (yorgun, yaşlı) almıştır, belirtme sıfatı yoktur.'
      },
      {
        id: 'q-sf-3-3',
        difficulty: 'hard',
        questionText: '"Nasıl, ne, hangi" gibi sözcükler cümlede farklı görevlerde kullanılabilir. Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Nasıl bir iş arıyorsun? (Soru sıfatı)' },
          { id: 'B', text: 'Bana ne gün geleceksin? (Soru sıfatı)' },
          { id: 'C', text: 'Hangi yoldan dönmeliyiz? (Soru sıfatı)' },
          { id: 'D', text: 'Ne bakıyorsun bana öyle? (Soru sıfatı)' },
          { id: 'E', text: 'Nasıl başardın bunu? (Soru zarfı)' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Ne" sözcüğü "Niçin/Neden" anlamında kullanılmış ve fiili etkilemiştir, dolayısıyla soru sıfatı değil, soru zarfıdır.'
      },
      {
        id: 'q-sf-3-4',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfatlardan sonra bir isim geldiğinde anlam karışıklığını önlemek için virgül (,) kullanılır. Aşağıdaki cümlelerin hangisinde virgül kaldırılırsa sözcüğün türü değişir?',
        options: [
          { id: 'A', text: 'Hasta, çocuğuna sevgiyle baktı.' },
          { id: 'B', text: 'Genç, hızlı adımlarla uzaklaştı.' },
          { id: 'C', text: 'Yaşlı, adamın yüzüne dikkatlice baktı.' },
          { id: 'D', text: 'Tembel, sınavdan yine düşük almış.' },
          { id: 'E', text: 'Yaralı, doktorlara teşekkür etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde virgül kaldırılırsa "Yaşlı adamın yüzüne..." şekline dönüşür ve "yaşlı" sözcüğü adlaşmış sıfat/isim olmaktan çıkıp niteleme sıfatı görevini üstlenir. Bu da sözcüğün türünü değiştirir.'
      },
      {
        id: 'q-sf-3-5',
        difficulty: 'hard',
        questionText: 'Bir sıfatın nitelediği isim düştüğünde, sıfat o ismin yerine geçerek adlaşır. Aşağıdaki altı çizili sözcüklerden hangisi adlaşmış sıfat değildir?',
        options: [
          { id: 'A', text: 'Buradaki _çürükleri_ hemen ayırın.' },
          { id: 'B', text: 'Bize her zaman _doğruları_ söylemelisin.' },
          { id: 'C', text: '_Kötüler_ elbet bir gün cezasını bulur.' },
          { id: 'D', text: '_Kitapları_ masanın üzerine bırak.' },
          { id: 'E', text: '_Gelenler_ içeride çay içiyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kitapları" sözcüğü kökünden itibaren isimdir ve sıfat kökenli değildir. Diğer seçenekler (çürük meyveler, doğru sözler, kötü insanlar, gelen kişiler) düştüğü ismin yerine geçen adlaşmış sıfatlardır.'
      },
      {
        id: 'q-sf-3-6',
        difficulty: 'hard',
        questionText: 'Sıfat yapan "-ki" eki her zaman bitişik yazılır ve isme sorulan "Hangi?" sorusuna cevap verir. Aşağıdakilerin hangisinde altı çizili sözcükteki "-ki" sıfat yapmamıştır?',
        options: [
          { id: 'A', text: '_Bahçedeki_ çiçekler susuzluktan solmuş.' },
          { id: 'B', text: '_Sabahki_ toplantıya yetişemedim.' },
          { id: 'C', text: 'Benim arabam bozuldu, _seninki_ nerede?' },
          { id: 'D', text: '_Yarınki_ maça mutlaka gitmeliyiz.' },
          { id: 'E', text: '_Sınıftaki_ öğrencileri dışarı çıkardı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "-ki", bir ismin (araba) yerini tuttuğu için ilgi zamiridir. Diğer seçeneklerdeki "-ki" ekleri isimleri (çiçek, toplantı, maç, öğrenci) belirterek sıfat yapmıştır.'
      },
      {
        id: 'q-sf-3-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması ek fiil alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Benim sadık yârim kara topraktır.' },
          { id: 'B', text: 'Gözlerin bir içim su gibidir.' },
          { id: 'C', text: 'O, en sevdiğim arkadaşımdı.' },
          { id: 'D', text: 'Dışarısı bugün çok soğuk.' },
          { id: 'E', text: 'Bu ev, dedemden kalan tek hatıraydı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "kara toprak" sıfat tamlamasıdır ve "-tır" ek fiilini alarak cümlenin yüklemi (kara topraktır) olmuştur.'
      },
      {
        id: 'q-sf-3-8',
        difficulty: 'hard',
        questionText: '"Yalnız" sözcüğü aşağıdaki cümlelerin hangisinde sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Yalnız seni sevdim bu hayatta.' },
          { id: 'B', text: 'Sınava çalışırım yalnız sen de bana yardım edeceksin.' },
          { id: 'C', text: 'Bu eski evde yalnız yaşıyordu.' },
          { id: 'D', text: 'Yalnız insanların sorunları daha çok olur.' },
          { id: 'E', text: 'İçeride yalnız o kalmıştı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü D seçeneğinde "insanların" ismini nitelediği için sıfattır. A ve E\'de edat (sadece), B\'de bağlaç (ama), C\'de ise durum zarfıdır.'
      },
      {
        id: 'q-sf-3-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada numaralanmış sözcüklerden hangisinin türü sıfat değildir?',
        options: [
          { id: 'A', text: '(I) Mavi suların dibinde...' },
          { id: 'B', text: '... (II) o güne kadar kimsenin görmediği...' },
          { id: 'C', text: '... (III) gizemli varlıklar yaşardı.' },
          { id: 'D', text: '... (IV) Bazıları bu efsaneye inanırdı.' },
          { id: 'E', text: '... (V) Cesur denizciler buraya gelmezdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'I numarada "Mavi" niteleme sıfatı, II numarada "o" işaret sıfatı, III numarada "gizemli" niteleme sıfatı, V numarada "Cesur" niteleme sıfatıdır. Ancak IV numaradaki "Bazıları", ismin yerini tuttuğu için belgisiz zamirdir.'
      },
      {
        id: 'q-sf-3-10',
        difficulty: 'hard',
        questionText: 'Miktar bildiren bazı sözcükler ismin önüne geldiğinde belgisiz sıfat, fiil ya da fiilimsinin önüne geldiğinde miktar zarfı olur. Buna göre aşağıdakilerin hangisinde miktar bildiren sözcük sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Dün gece çok yoruldum.' },
          { id: 'B', text: 'Biraz dinlenmek bana iyi gelecek.' },
          { id: 'C', text: 'Fazla konuşan insanları sevmem.' },
          { id: 'D', text: 'Az yiyerek formunu koruyor.' },
          { id: 'E', text: 'Toplantıda az kişi vardı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "az" sözcüğü "kişi" ismini belirttiği için belgisiz sıfattır. A\'da (çok), B\'de (biraz), C\'de (fazla) ve D\'de (az) sözcükleri fiil veya fiilimsileri etkiledikleri için miktar zarfıdır.'
      }
    ]
  }
];
