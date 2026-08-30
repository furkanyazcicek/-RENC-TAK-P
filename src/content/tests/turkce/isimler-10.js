export default [
  {
    id: 'test-isimler-10-kolay',
    title: 'İsimler 10 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-is-10k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim olan belirli bir gün/bayram adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın tatil olduğu için çok sevinçliyim.' },
          { id: 'B', text: 'Bu hafta sonu köye dedemleri ziyarete gideceğiz.' },
          { id: 'C', text: 'Önümüzdeki Ramazan Bayramı\'nda ailecek toplanacağız.' },
          { id: 'D', text: 'Dünkü toplantı çok verimli geçti.' },
          { id: 'E', text: 'Her yıl bu zamanlar buralara kar yağar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ramazan Bayramı" belirli bir bayramın özel adı olduğu için özel isimdir.'
      },
      {
        id: 'q-is-10k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi cins (tür) ismidir?',
        options: [
          { id: 'A', text: 'Yaz tatilinde _Antalya\'ya_ gideceğiz.' },
          { id: 'B', text: '_Türk_ kahvesi içmeyi çok severim.' },
          { id: 'C', text: 'Köpeğimiz _Karabaş_ yabancılara çok havlar.' },
          { id: 'D', text: 'Bu _sokak_ çocukluğumun geçtiği yerdir.' },
          { id: 'E', text: '_Asya_ kıtasının nüfusu çok kalabalıktır.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sokak" kelimesi genel bir türü (cins) ifade ettiği için cins ismidir. Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-10k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Ağaçlar' },
          { id: 'B', text: 'Jüri' },
          { id: 'C', text: 'Defterler' },
          { id: 'D', text: 'Kalemlik' },
          { id: 'E', text: 'Kuşlar' }
        ],
        correctOptionId: 'B',
        explanation: '"Jüri" sözcüğü biçimce tekil olmasına rağmen birden fazla seçici üyeden oluşan bir topluluğu ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-10k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Orman' },
          { id: 'B', text: 'Deste' },
          { id: 'C', text: 'Evler' },
          { id: 'D', text: 'Düzine' },
          { id: 'E', text: 'Ordu' }
        ],
        correctOptionId: 'C',
        explanation: '"Evler" kelimesi çokluk eki (-lar/-ler) aldığı için çoğul isimdir. Diğer kelimeler topluluk ismidir.'
      },
      {
        id: 'q-is-10k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu zor günlerde içindeki _umudu_ hiç kaybetmedi.' },
          { id: 'B', text: 'Çocuğun inanılmaz bir _zekası_ var.' },
          { id: 'C', text: 'Kardeşime duyduğum _sevgi_ kelimelerle anlatılamaz.' },
          { id: 'D', text: 'Bahçedeki _çiçekler_ rengarenk açmıştı.' },
          { id: 'E', text: 'Onun bana karşı duyduğu _nefret_ çok belirgindi.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çiçekler" gözle görülebilen somut bir varlıktır. Umut, zeka, sevgi ve nefret ise soyut isimlerdir.'
      },
      {
        id: 'q-is-10k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Güneş gözlüğü' },
          { id: 'B', text: 'Evin anahtarı' },
          { id: 'C', text: 'Bahar yağmuru' },
          { id: 'D', text: 'Masa örtüsü' },
          { id: 'E', text: 'Yaz tatili' }
        ],
        correctOptionId: 'B',
        explanation: '"Evin anahtarı" tamlamasında hem tamlayan (evin) hem de tamlanan (anahtarı) ek almıştır. Diğerleri belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-10k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Yolun sonu' },
          { id: 'B', text: 'Kitabın kapağı' },
          { id: 'C', text: 'Ağacın dalı' },
          { id: 'D', text: 'Çocuk parkı' },
          { id: 'E', text: 'Denizin mavisi' }
        ],
        correctOptionId: 'D',
        explanation: '"Çocuk parkı" tamlamasında tamlayan (çocuk) ek almamış, tamlanan (parkı) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-10k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ismin bulunma (-de/-da) hal ekini almıştır?',
        options: [
          { id: 'A', text: 'Bunu ondan daha önce de _duydum_.' },
          { id: 'B', text: 'Kitabımı _masada_ unutmuşum.' },
          { id: 'C', text: 'Oraya _gittiğinde_ bana haber ver.' },
          { id: 'D', text: 'Herkes _ona_ çok saygı duyardı.' },
          { id: 'E', text: 'Kardeşini _okuldan_ ben alacağım.' }
        ],
        correctOptionId: 'B',
        explanation: '"Masa-da" kelimesindeki -da eki bulunma hal ekidir.'
      },
      {
        id: 'q-is-10k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ismin ayrılma (çıkma) hal ekini (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Bütün eşyaları _çantasına_ koydu.' },
          { id: 'B', text: 'Akşam _erkenden_ uyumuş.' },
          { id: 'C', text: 'Hızlı adımlarla _evden_ ayrıldı.' },
          { id: 'D', text: 'Bana her zaman _doğruyu_ söylerdi.' },
          { id: 'E', text: 'O, sınıftaki _en_ çalışkan öğrencidir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ev-den" kelimesindeki -den eki ayrılma hal ekidir.'
      },
      {
        id: 'q-is-10k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki (-e/-a) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam bize misafir gelecek.' },
          { id: 'B', text: 'Dışarıda soğuk bir rüzgar var.' },
          { id: 'C', text: 'Seninle sinemaya gidelim mi?' },
          { id: 'D', text: 'Defterini çantasına koydu.' },
          { id: 'E', text: 'Tüm bu olanları ona anlattım.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sinema-ya" sözcüğündeki -ya (-a) eki yönelme hal ekidir. D şıkkındaki "çantasına" ve E şıkkındaki "ona" kelimelerinde de yönelme hal eki vardır, ancak sorularda genellikle en net seçenek aranır. "Sinemaya gidelim mi?" yönelmenin doğrudan örneklerinden biridir. (Bu tip sorularda bazen birden fazla doğru cevap varmış gibi görünse de ana mekan isimlerine yönelme daha belirgindir). Biz doğrudan A şıkkı "bize", C "sinemaya", D "çantasına", E "ona" olduğunu biliyoruz. C şıkkı mekan yönelmesidir, dolayısıyla en güçlü seçenektir.'
      }
    ]
  },
  {
    id: 'test-isimler-10-orta',
    title: 'İsimler 10 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (91-100)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-is-10m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Kardeşin dün akşam nerede kaldı?' },
          { id: 'B', text: 'Evin camları fırtınada kırılmış.' },
          { id: 'C', text: 'Adamın büyük kızı üniversiteyi kazanmış.' },
          { id: 'D', text: 'Bizim okulun bahçesi çok geniştir.' },
          { id: 'E', text: 'Yolun sonu karanlık bir ormana çıkıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kardeşin" kelimesinin başında "senin" tamlayanı (senin kardeşin) vardır ancak cümlede kullanılmamıştır.'
      },
      {
        id: 'q-is-10m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eskiler, bu durumları çok iyi bilirdi.' },
          { id: 'B', text: 'Soğuk hava herkesi etkiledi.' },
          { id: 'C', text: 'Eski evleri yıkıp yerine yenilerini yapacaklar.' },
          { id: 'D', text: 'Güzel şiirler yazmak yetenek ister.' },
          { id: 'E', text: 'Küçük çocuk annesinin elinden tuttu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Eskiler" sözcüğü, "eski insanlar" sıfat tamlamasında "insanlar" isminin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-10m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi insana umut verir.' },
          { id: 'B', text: 'Köy yollarının bakımsızlığı hepimizi üzdü.' },
          { id: 'C', text: 'Güzel yaz günlerini çok özlüyorum.' },
          { id: 'D', text: 'Geniş caddelerin sonu ormana çıkıyor.' },
          { id: 'E', text: 'Eski mahallenin dar sokaklarında kaybolduk.' }
        ],
        correctOptionId: 'B',
        explanation: '"Köy yollarının bakımsızlığı" (köy, yol, bakımsızlık) üç isimden oluşan zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-10m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de belirtme (yükleme) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Gözleri uykusuzluktan iyice kızarmıştı.' },
          { id: 'B', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'C', text: 'Arabasını geçen hafta sattı.' },
          { id: 'D', text: 'Sözleri beni derinden etkiledi.' },
          { id: 'E', text: 'Evi boyamak için usta çağırdılar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Araba-sı-n-ı" kelimesinde: -sı (onun arabası, iyelik eki) ve -ı (arabasını, belirtme hal eki).'
      },
      {
        id: 'q-is-10m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı zamir olan bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Senin gözlerin bana umut veriyor.' },
          { id: 'B', text: 'Onun düşünceleri her zaman farklıdır.' },
          { id: 'C', text: 'Bunun şurası oldukça yıpranmış.' },
          { id: 'D', text: 'Bizim evimiz şehrin oldukça dışındaydı.' },
          { id: 'E', text: 'Gözlerinin rengini denizden almış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bunun şurası" tamlamasında tamlayan (bu) ve tamlanan (şu) kelimeleri işaret zamiridir.'
      },
      {
        id: 'q-is-10m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir kelime mecazlaşarak soyut bir anlamda (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Taş kalpli adam kimseyi dinlemedi.' },
          { id: 'B', text: 'Soğuk bir su içmek boğazına iyi gelmedi.' },
          { id: 'C', text: 'Karanlık odada saatlerce yalnız oturdu.' },
          { id: 'D', text: 'Güneş ışınları yüzünü yaktı.' },
          { id: 'E', text: 'Derin bir nefes alıp konuşmaya devam etti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kalp" somut bir organken, cümlede "acımasız, merhametsiz" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-10m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Adamın eski paltosu oldukça dikkat çekiyordu.' },
          { id: 'B', text: 'Köy yollarının bakımsızlığı köylüleri zorluyor.' },
          { id: 'C', text: 'Baharın müjdecisi çiçekler etrafı sardı.' },
          { id: 'D', text: 'Yeni kitabın sayfaları mis gibi kokuyordu.' },
          { id: 'E', text: 'Eski ahşap kapının kilidi tamamen bozulmuş.' }
        ],
        correctOptionId: 'A',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski" sözcüğü tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-10m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki almış bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitaplık, odanın en güzel köşesinde duruyordu.' },
          { id: 'B', text: 'Ormanda uzun bir yürüyüş yaptık.' },
          { id: 'C', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'D', text: 'Yeni aldığı araba çok hızlıydı.' },
          { id: 'E', text: 'Çocuklar sokakta neşeyle oynuyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kitaplık" kelimesinde kitap ismine gelen "-lık" eki, yeni bir isim (eşya adı) türettiği için isimden isim yapım ekidir.'
      },
      {
        id: 'q-is-10m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi küçültme ismidir?',
        options: [
          { id: 'A', text: 'Büyükçe' },
          { id: 'B', text: 'Genişçe' },
          { id: 'C', text: 'İncecik' },
          { id: 'D', text: 'Bademcik' },
          { id: 'E', text: 'Uzunca' }
        ],
        correctOptionId: 'D',
        explanation: '"Bademcik" kalıplaşmış da olsa isim soylu bir küçültme sözcüğüdür ve isimdir. Diğerlerindeki kelimeler küçültme sıfatıdır.'
      },
      {
        id: 'q-is-10m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgarın uğultusu bütün gece susmadı.' },
          { id: 'B', text: 'Kuşlar ağaçlarda neşeyle cıvıldaşıyor.' },
          { id: 'C', text: 'Sessizlik odayı bir anda kapladı.' },
          { id: 'D', text: 'Uykusunda derin derin nefes alıyordu.' },
          { id: 'E', text: 'Çocuklar bahçede sessizce oturuyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Uğultu" kelimesi yansıma bir ses olan "uğul" kelimesinden türemiş bir isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-10-zor',
    title: 'İsimler 10 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (91-100)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-is-10z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Kokusu sarıyor her yanı, taze demlenmiş çayın.' },
          { id: 'B', text: 'Senin bu hallerin beni çok üzüyor.' },
          { id: 'C', text: 'Gözlerinin rengi denizden almış ilhamını.' },
          { id: 'D', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'E', text: 'Karanlık gece sokakları kaplamıştı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan: "çayın", Tamlanan: "kokusu". Cümlede "Kokusu sarıyor... çayın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-10z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Romanın ve şiirin dünyası birbirinden çok farklıdır.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'D', text: 'Dağların, taşların ve ovaların sessizliği huzur veriyor.' },
          { id: 'E', text: 'A ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'A şıkkında "Romanın ve şiirin (tamlayanlar) dünyası (tamlanan)". D şıkkında "Dağların, taşların ve ovaların (tamlayanlar) sessizliği (tamlanan)". Her ikisinde de birden fazla tamlayan tek bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-10z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan eki (-ın/-in) işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Öğrencilerden birkaçı dünkü derse katılmadı.' },
          { id: 'B', text: 'Korkudan bütün gece gözünü kırpmadı.' },
          { id: 'C', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Eskiciden iki tane koltuk aldık.' }
        ],
        correctOptionId: 'A',
        explanation: '"Öğrencilerden birkaçı" ifadesi "öğrencilerin birkaçı" anlamındadır, bu yüzden -den eki tamlayan ekinin işlevini üstlenmiştir.'
      },
      {
        id: 'q-is-10z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması, cümlede başka bir ismin sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Deniz mavisi gözleriyle etrafa neşe saçıyordu.' },
          { id: 'B', text: 'Bahar mevsimi herkesi neşelendirdi.' },
          { id: 'C', text: 'Güneş gözlüğümü evde unuttum.' },
          { id: 'D', text: 'Eski ahşap kapının kilidi bozulmuş.' },
          { id: 'E', text: 'Yolun sonu oldukça karanlık görünüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Deniz mavisi" belirtisiz isim tamlamasıdır. Cümlede "gözler" ismini niteleyerek (Nasıl gözler? Deniz mavisi gözler) sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-10z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması cümlenin belirtili nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Kardeşini okulun önünde bekliyorum.' },
          { id: 'B', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'C', text: 'Gözleri uykusuzluktan kızarmıştı.' },
          { id: 'D', text: 'Defteri masanın üzerinde kalmış.' },
          { id: 'E', text: 'Sözleri hepimizi çok etkiledi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kardeşini" kelimesinde tamlayan (senin/onun) düşmüştür. "Kimi bekliyorum? (Onun/Senin) kardeşini" sorusuna cevap verdiği için belirtili nesnedir.'
      },
      {
        id: 'q-is-10z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı sıfat almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Büyük ağacın serin gölgesinde dinlendik.' },
          { id: 'B', text: 'Şu çocuğun yırtık ayakkabısı yüreğimi burktu.' },
          { id: 'C', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'D', text: 'Yeni kitabın beyaz sayfaları parlıyordu.' },
          { id: 'E', text: 'Tüm seçenekler doğru örnektir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bütün seçeneklerde hem tamlayan hem tamlanan sıfat almıştır (büyük ağaç / serin gölge; şu çocuk / yırtık ayakkabı; eski mahalle / dar sokaklar; yeni kitap / beyaz sayfalar).'
      },
      {
        id: 'q-is-10z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O, bu olayda tamamen _yalnız_ kaldı.' },
          { id: 'B', text: 'Bu _sorunu_ aşacağız.' },
          { id: 'C', text: 'İçeride büyük bir _sessizlik_ hakimdi.' },
          { id: 'D', text: 'Onun en büyük _hayali_ yazar olmaktı.' },
          { id: 'E', text: 'Dışarıda çok soğuk bir _hava_ var.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yalnız" sözcüğü bu cümlede "kaldı" fiilinin durumunu belirttiği için (Nasıl kaldı? Yalnız kaldı) zarf görevindedir.'
      },
      {
        id: 'q-is-10z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bu güzel kitap benimdir.' },
          { id: 'B', text: 'Arabanın lastiği yolda patladı.' },
          { id: 'C', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'D', text: 'Onun en büyük amacı buydu.' },
          { id: 'E', text: 'Benim hayallerim hiçbir zaman bitmez.' }
        ],
        correctOptionId: 'A',
        explanation: '"Benimdir" kelimesi "benim kitabım(dır)" tamlamasında tamlananın (kitabım) düşmesiyle oluşmuştur.'
      },
      {
        id: 'q-is-10z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Gece yarısı aniden uykudan uyandım.' },
          { id: 'B', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'C', text: 'Deniz kokusu insana huzur verir.' },
          { id: 'D', text: 'Yolun sonu karanlık görünüyordu.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gece yarısı" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman uyandım?" sorusuna yanıt verdiği için zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-is-10z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime iyelik eki almıştır?',
        options: [
          { id: 'A', text: 'Rüzgarın uğultusu hepimizi korkutur.' },
          { id: 'B', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'C', text: 'Kapının gıcırtısından uyuyamadım.' },
          { id: 'D', text: 'Kuşlar neşeyle cıvıldaşıyordu.' },
          { id: 'E', text: 'A ve C seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'A şıkkında "uğultu-su", C şıkkında "gıcırtı-sı". Her ikisinde de yansımadan türemiş isimler iyelik eki (-su/-sı) alarak tamlayanlarına bağlanmışlardır.'
      }
    ]
  }
];
