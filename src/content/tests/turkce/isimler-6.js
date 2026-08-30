export default [
  {
    id: 'test-isimler-6-kolay',
    title: 'İsimler 6 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-is-6k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim olan bir dağ adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tatilimizi Karadeniz sahillerinde geçirdik.' },
          { id: 'B', text: 'Erciyes Dağı bu mevsimde çok soğuk olur.' },
          { id: 'C', text: 'İstanbul Boğazı gemi trafiğine kapatıldı.' },
          { id: 'D', text: 'Güneydoğu Anadolu ovaları oldukça verimlidir.' },
          { id: 'E', text: 'Van Gölü etrafında yürüyüş yaptık.' }
        ],
        correctOptionId: 'B',
        explanation: '"Erciyes Dağı" özel isim olan bir dağ adıdır.'
      },
      {
        id: 'q-is-6k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük tür (cins) ismidir?',
        options: [
          { id: 'A', text: 'Bugün _Ankara_ oldukça rüzgarlıydı.' },
          { id: 'B', text: '_Türkçe_ dersini çok seviyorum.' },
          { id: 'C', text: 'Kardeşim _Ali_ yarın gelecek.' },
          { id: 'D', text: 'Bahçedeki _ağaç_ nihayet çiçek açtı.' },
          { id: 'E', text: '_Türkiye_ haritasını inceledik.' }
        ],
        correctOptionId: 'D',
        explanation: '"Ağaç" kelimesi aynı türden varlıkları karşıladığı için cins (tür) ismidir. Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-6k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Ağaçlar' },
          { id: 'B', text: 'Defter' },
          { id: 'C', text: 'Heyet' },
          { id: 'D', text: 'Kuşlar' },
          { id: 'E', text: 'Masa' }
        ],
        correctOptionId: 'C',
        explanation: '"Heyet" biçimce tekil olmasına rağmen birden fazla kişiden oluşan bir grubu ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-6k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Deste' },
          { id: 'B', text: 'Düzine' },
          { id: 'C', text: 'Bulutlar' },
          { id: 'D', text: 'Meclis' },
          { id: 'E', text: 'Sürü' }
        ],
        correctOptionId: 'C',
        explanation: '"Bulutlar" kelimesi çokluk eki (-lar) aldığı için çoğul isimdir. Diğerleri topluluk ismidir.'
      },
      {
        id: 'q-is-6k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kıskançlık' },
          { id: 'B', text: 'Sevgi' },
          { id: 'C', text: 'Umut' },
          { id: 'D', text: 'Taş' },
          { id: 'E', text: 'Özlem' }
        ],
        correctOptionId: 'D',
        explanation: '"Taş" beş duyu organımızla algılayabildiğimiz somut bir maddedir. Diğerleri soyuttur.'
      },
      {
        id: 'q-is-6k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soyut bir isim yoktur?',
        options: [
          { id: 'A', text: 'İçindeki sevinç yüzünden okunuyordu.' },
          { id: 'B', text: 'Onun bu cesaretine hepimiz hayran kaldık.' },
          { id: 'C', text: 'Masadaki bardağı yavaşça yere bıraktı.' },
          { id: 'D', text: 'Karanlıkta yalnız kalma korkusu yaşıyordu.' },
          { id: 'E', text: 'Bu iyiliğini hiçbir zaman unutmayacağım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Masa", "bardak", "yer" kelimelerinin hepsi somut isimdir, cümlede soyut isim yoktur.'
      },
      {
        id: 'q-is-6k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Okul duvarı' },
          { id: 'B', text: 'Kitabın kapağı' },
          { id: 'C', text: 'Çocuk parkı' },
          { id: 'D', text: 'Güneş ışığı' },
          { id: 'E', text: 'Su bardağı' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitabın kapağı" tamlamasında hem tamlayan (-ın) hem de tamlanan (-ı) ek almıştır, bu yüzden belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-is-6k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ismin yönelme hal ekini (-e/-a) almıştır?',
        options: [
          { id: 'A', text: 'Kitabı _masada_ bıraktı.' },
          { id: 'B', text: 'Onu dün _okuldan_ aldık.' },
          { id: 'C', text: 'Hızlı adımlarla _eve_ yürüdü.' },
          { id: 'D', text: 'Bugün _çok_ yorgunum.' },
          { id: 'E', text: 'Benim _kalemim_ nerede?' }
        ],
        correctOptionId: 'C',
        explanation: '"Ev-e" kelimesindeki -e eki ismin yönelme hal ekidir.'
      },
      {
        id: 'q-is-6k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi küçültme ismidir?',
        options: [
          { id: 'A', text: '_Kedicik_ sütünü içip uyudu.' },
          { id: 'B', text: '_Ufacık_ taşlar ayağına batıyordu.' },
          { id: 'C', text: '_Küçücük_ bir evde yaşıyorlar.' },
          { id: 'D', text: '_Daracık_ bir sokaktan geçtik.' },
          { id: 'E', text: '_İncecik_ giyinince üşüdü.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kedicik" küçültme ismi iken diğer seçeneklerdeki altı çizili kelimeler küçültme sıfatı/zarfıdır.'
      },
      {
        id: 'q-is-6k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtme (yükleme) hal eki (-i/-ı) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Defteri çantasına koydu.' },
          { id: 'B', text: 'Kalemi benim evde kalmış.' },
          { id: 'C', text: 'Onun arabası çok hızlıydı.' },
          { id: 'D', text: 'Gözleri uykusuzluktan kızarmış.' },
          { id: 'E', text: 'Kardeşi yarın İstanbul\'a gidecek.' }
        ],
        correctOptionId: 'A',
        explanation: '"Defteri" kelimesindeki -i eki, "Neyi koydu?" sorusuna cevap verdiği için belirtme hal ekidir. Diğer seçeneklerdeki kelimelerin sonundaki -i/-ı ekleri iyelik ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-6-orta',
    title: 'İsimler 6 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (51-60)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-is-6m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den) cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'B', text: 'Korkudan ne yapacağını bilemedi.' },
          { id: 'C', text: 'Sabahtan seni arayıp duruyorum.' },
          { id: 'D', text: 'Evden çıkmadan önce kapıyı kilitledi.' },
          { id: 'E', text: 'Bunu ondan daha önce duymuştum.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sabahtan" kelimesindeki -tan eki, cümleye "sabah vaktinden beri" (zaman) anlamı katmıştır.'
      },
      {
        id: 'q-is-6m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de bulunma (-de/-da) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Sokakta oynayan çocukları izledi.' },
          { id: 'B', text: 'Elimde kalan son parayı ona verdim.' },
          { id: 'C', text: 'Masada duran kitabı bana uzatır mısın?' },
          { id: 'D', text: 'Bugün okulda çok yoruldum.' },
          { id: 'E', text: 'Evde kimse olmayınca kitap okudu.' }
        ],
        correctOptionId: 'B',
        explanation: '"El-im-de" kelimesinde: el (isim kökü) - im (1. tekil şahıs iyelik eki) - de (bulunma hal eki) bulunmaktadır.'
      },
      {
        id: 'q-is-6m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Çocuğun mavi hırkası kirlenmiş.' },
          { id: 'B', text: 'Bahar aylarının ılık rüzgarı esiyordu.' },
          { id: 'C', text: 'Devlet tiyatrosu biletleri bugün satışa çıktı.' },
          { id: 'D', text: 'Köyün yaşlıları meydanda toplandı.' },
          { id: 'E', text: 'Geniş caddelerin sonu karanlığa çıkıyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Devlet tiyatrosu biletleri" en az üç ismin bir araya gelmesiyle oluşmuş bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-6m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş bir isim tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Gözlerin uzağa dalıp gitmiş.' },
          { id: 'B', text: 'Evleri bizim sokağın sonundaydı.' },
          { id: 'C', text: 'Defteri masanın üzerine bırakmış.' },
          { id: 'D', text: 'Şehrin sokakları ıssızlaşmıştı.' },
          { id: 'E', text: 'Yüzü gülmeyen bir adamdı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D şıkkında "Şehrin sokakları" tamlamasında tamlayan (şehrin) mevcuttur. Diğerlerinde tamlayan (senin, onların, onun, onun) düşmüştür.'
      },
      {
        id: 'q-is-6m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tembeller bu sınavda başarılı olamadı.' },
          { id: 'B', text: 'Küçük çocuklar parkta oyun oynuyordu.' },
          { id: 'C', text: 'Soğuk hava hepimizi hasta etti.' },
          { id: 'D', text: 'Güzel şiirler yazmak yetenek ister.' },
          { id: 'E', text: 'Yaşlı adam bankta oturuyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Tembeller" kelimesi "tembel öğrenciler/insanlar" sıfat tamlamasında ismin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-6m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Baharın müjdecisi çiçekler açtı.' },
          { id: 'B', text: 'Eski ahşap kapının kilidi bozulmuş.' },
          { id: 'C', text: 'Çocuğun yeni aldığı bisikleti çalındı.' },
          { id: 'D', text: 'Kış günleri hep evde otururuz.' },
          { id: 'E', text: 'Yolun sonunda büyük bir ev vardı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çocuğun bisikleti" belirtili isim tamlamasıdır. Araya giren "yeni aldığı" sözcükleri tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-6m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim bulunma hal eki almıştır?',
        options: [
          { id: 'A', text: 'Rüzgarın uğultusu bütün gece sürdü.' },
          { id: 'B', text: 'Şırıltıda uyumak ona iyi geliyordu.' },
          { id: 'C', text: 'Kuşlar ağaçlarda neşeyle ötüyordu.' },
          { id: 'D', text: 'Gürültüden kimse birbirini duyamadı.' },
          { id: 'E', text: 'Patlak lastikle yola devam edemedik.' }
        ],
        correctOptionId: 'B',
        explanation: '"Şırıltı" yansımadan türemiş bir isimdir ve -da bulunma hal ekini almıştır (şırıltı-da).'
      },
      {
        id: 'q-is-6m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir somut isim, soyut bir anlamda (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Taş gibi sert bir yatakta yattı.' },
          { id: 'B', text: 'Onun bu katı kalbi hiçbir şeye yumuşamıyordu.' },
          { id: 'C', text: 'Soğuk suyu içince boğazı ağrıdı.' },
          { id: 'D', text: 'Güneş ışıkları gözünü kamaştırdı.' },
          { id: 'E', text: 'Derin bir kuyuya taş atmışlar.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kalp" kelimesi somut bir organ ismiyken, cümlede "duygu, merhamet" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-6m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı kişi zamiri olan bir isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dağların zirvesi dumanlıydı.' },
          { id: 'B', text: 'Gülün ömrü az olur.' },
          { id: 'C', text: 'Bizim köyün yolları çok bozuktur.' },
          { id: 'D', text: 'Gözlerinin rengi denizden alınmış.' },
          { id: 'E', text: 'Bahar rüzgarı tatlı esiyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bizim köyün yolları" zincirleme isim tamlamasıdır ve ilk tamlayan olan "bizim", kişi zamiridir.'
      },
      {
        id: 'q-is-6m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinde iyelik eki yoktur?',
        options: [
          { id: 'A', text: 'Oraya gittiğimizi _babası_ biliyormuş.' },
          { id: 'B', text: '_Sözleri_ beni derinden etkiledi.' },
          { id: 'C', text: 'Bu eski _defteri_ çöpe atmalısın.' },
          { id: 'D', text: 'Onun _arabası_ yolda kalmış.' },
          { id: 'E', text: 'Kızın _saçları_ rüzgarda dalgalanıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Defteri" kelimesindeki -i eki belirtme hal ekidir (Neyi çöpe atmalısın? Defteri). Diğerleri iyelik eki almıştır.'
      }
    ]
  },
  {
    id: 'test-isimler-6-zor',
    title: 'İsimler 6 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (51-60)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-is-6z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ve tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Akşamı getiren denizdir uzaktan.' },
          { id: 'B', text: 'Sessizliği böler sesi, gece kuşlarının.' },
          { id: 'C', text: 'Karanlık sokaklarda yalnız yürüdüm.' },
          { id: 'D', text: 'Gözlerimde bir damla yaş kaldı.' },
          { id: 'E', text: 'Bir bahar sabahı açtın gönlümde.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tamlayan: "gece kuşlarının", Tamlanan: "sesi". Dizede "Sessizliği böler sesi, gece kuşlarının" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-6z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlanan, tek bir tamlayana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Evin ve arabanın vergisi aynı gün ödendi.' },
          { id: 'B', text: 'Çocuğun kalemi, defteri ve silgisi kayboldu.' },
          { id: 'C', text: 'Dağların, taşların ve denizlerin şarkısını söyledi.' },
          { id: 'D', text: 'Kitabın kapağı ve sayfaları yırtılmış.' },
          { id: 'E', text: 'B şıkkı ve D şıkkı.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında: Çocuğun (tamlayan) kalemi, defteri, silgisi (tamlananlar). D şıkkında: Kitabın (tamlayan) kapağı ve sayfaları (tamlananlar). Dolayısıyla her ikisi de tek tamlayanın birden fazla tamlanana bağlandığı örneklerdir.'
      },
      {
        id: 'q-is-6z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması, cümlede başka bir ismin sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Deniz mavisi gözleriyle etrafa neşe saçıyordu.' },
          { id: 'B', text: 'Kül rengi bulutlar gökyüzünü kapladı.' },
          { id: 'C', text: 'Bahar mevsimi her yeri yeşertti.' },
          { id: 'D', text: 'Eski ahşap kapının kilidi tamamen bozulmuş.' },
          { id: 'E', text: 'A ve B seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'A şıkkında "deniz mavisi", gözleri ismini niteleyen sıfat görevinde; B şıkkında "kül rengi", bulutlar ismini niteleyen sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-6z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den) tamlayan eki (-in) yerine kullanılmıştır?',
        options: [
          { id: 'A', text: 'Korkudan bütün vücudu titriyordu.' },
          { id: 'B', text: 'Öğrencilerden birçoğu sınavı geçememiş.' },
          { id: 'C', text: 'Dışarıdan gelen sesler onu rahatsız etti.' },
          { id: 'D', text: 'Akşamdan hazırlıklarını tamamladı.' },
          { id: 'E', text: 'Eskiciden iki tane sandalye aldık.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencilerden birçoğu" tamlaması "öğrencilerin birçoğu" anlamına gelir. Ayrılma hal eki (-den), tamlayan eki yerine kullanılmıştır.'
      },
      {
        id: 'q-is-6z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması cümlenin belirtili nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Gözleri uykusuzluktan iyice kızarmıştı.' },
          { id: 'B', text: 'Kardeşini okul çıkışında bekledim.' },
          { id: 'C', text: 'Arabanın anahtarı nerede kayboldu?' },
          { id: 'D', text: 'Defteri masanın üzerinde kalmış.' },
          { id: 'E', text: 'Yüzü hiç gülmeyen bir adamdı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kardeşini" kelimesinde tamlayan (senin/onun) düşmüştür. "Kimi bekledim? Kardeşini" sorusuna cevap verdiği için belirtili nesnedir.'
      },
      {
        id: 'q-is-6z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı sıfat almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Büyük ağacın gölgesi serinlik verdi.' },
          { id: 'B', text: 'Şu çocuğun yırtık ayakkabısı yüreğimi burktu.' },
          { id: 'C', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'D', text: 'Yolun karanlık sonu hiç görünmüyordu.' },
          { id: 'E', text: 'B ve C seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "şu çocuk" (tamlayan sıfatı) ve "yırtık ayakkabı" (tamlanan sıfatı). C şıkkında "eski mahalle" (tamlayan sıfatı) ve "dar sokaklar" (tamlanan sıfatı). Her iki şıkta da hem tamlayan hem tamlanan sıfat almıştır.'
      },
      {
        id: 'q-is-6z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ birlikte çözeceğiz.' },
          { id: 'B', text: 'Onun _hayali_ büyük bir ev almaktı.' },
          { id: 'C', text: 'Bütün bu olaylar _yalnız_ senin suçundur.' },
          { id: 'D', text: 'Dışarıda fırtınalı bir _hava_ var.' },
          { id: 'E', text: '_Sessizlik_ her yeri kapladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" kelimesi bu cümlede "sadece" anlamında kullanıldığı için edat görevindedir.'
      },
      {
        id: 'q-is-6z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde küçültme adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'İncecik bir kitap okuyordu.' },
          { id: 'B', text: 'Küçücük bir evde yaşıyorlardı.' },
          { id: 'C', text: 'Yavrucak bütün gün aç kalmış.' },
          { id: 'D', text: 'Ufacık taşlar ayağıma battı.' },
          { id: 'E', text: 'Daracık sokaklardan geçtik.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yavrucak" bir küçültme adıdır. Diğerlerindeki küçültmeli kelimeler sıfat görevindedir.'
      },
      {
        id: 'q-is-6z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması, cümlede zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Bahar mevsimi herkese neşe verir.' },
          { id: 'B', text: 'Yaz ortasında kalın giyinip dışarı çıkmış.' },
          { id: 'C', text: 'Gül bahçesi çok güzel kokuyordu.' },
          { id: 'D', text: 'Yolun sonu karanlık görünüyordu.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yaz ortasında" bir isim tamlamasıdır ve cümlede "Ne zaman?" sorusuna cevap vererek zarf tümleci olmuştur.'
      },
      {
        id: 'q-is-6z-10',
        difficulty: 'hard',
        questionText: 'Bulunma hal eki (-de/-da) bazı kullanımlarda sıfat yapım eki görevini üstlenebilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Gözde bir problem var gibi duruyor.' },
          { id: 'B', text: 'O, okulun en gözde öğrencilerindendi.' },
          { id: 'C', text: 'Sözde, bizimle gelecekti ama gelmedi.' },
          { id: 'D', text: 'Sözde sorunlar yüzünden projemiz gecikti.' },
          { id: 'E', text: 'B ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "gözde öğrenci" sıfat tamlamasıdır. D şıkkında "sözde sorunlar" sıfat tamlamasıdır. Her ikisinde de -de eki yapım eki görevindedir.'
      }
    ]
  }
];
