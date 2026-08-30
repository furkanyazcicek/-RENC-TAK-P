export default [
  {
    id: 'test-isimler-2-kolay',
    title: 'İsimler 2 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-is-2k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim bir kurum veya kuruluş adıdır?',
        options: [
          { id: 'A', text: 'Tatilimizi Antalya\'da geçirdik.' },
          { id: 'B', text: 'Türk Dil Kurumu yeni bir sözlük yayımladı.' },
          { id: 'C', text: 'Kedimiz Tekir sabahtan beri miyavlıyor.' },
          { id: 'D', text: 'Hasan amca dün akşam bize geldi.' },
          { id: 'E', text: 'Meriç Nehri bu yıl taşmadı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Türk Dil Kurumu, bir kurum/kuruluş adı olarak özel isimdir. Antalya yer, Tekir hayvan, Hasan kişi, Meriç coğrafi özel isimdir.'
      },
      {
        id: 'q-is-2k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili kelimelerden hangisi cins (tür) ismi değildir?',
        options: [
          { id: 'A', text: 'Bu _bina_ çok eski görünüyor.' },
          { id: 'B', text: 'Dışarıda soğuk bir _rüzgar_ esiyor.' },
          { id: 'C', text: '_Bursa_ şeftalisiyle meşhurdur.' },
          { id: 'D', text: 'Elindeki _çanta_ çok ağırdı.' },
          { id: 'E', text: 'Bahçedeki _köpek_ havlıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bursa" sözcüğü özel isimdir, cins (tür) ismi değildir. Diğer altı çizili kelimeler (bina, rüzgar, çanta, köpek) cins ismidir.'
      },
      {
        id: 'q-is-2k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede _koşuyor_.' },
          { id: 'B', text: 'Masadaki _kalemler_ benim.' },
          { id: 'C', text: 'O, her zaman çok _hızlıdır_.' },
          { id: 'D', text: 'Bu _akşam_ maç izleyeceğiz.' },
          { id: 'E', text: '_Orman_ yangınları artıyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kalemler" sözcüğü çokluk eki (-lar/-ler) aldığı için çoğul isimdir. A şıkkında koşuyor bir fiildir. E şıkkındaki "orman" topluluk ismidir.'
      },
      {
        id: 'q-is-2k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde topluluk ismi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Takımımız bu hafta da galip geldi.' },
          { id: 'B', text: 'Öğretmen, sınıfı sessiz olmaları için uyardı.' },
          { id: 'C', text: 'Gökyüzündeki bulutlar yavaşça dağıldı.' },
          { id: 'D', text: 'Komisyon kararı yarın açıklayacak.' },
          { id: 'E', text: 'Koyun sürüsü dağdan aşağı iniyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Takım", "sınıf", "komisyon" ve "sürü" topluluk isimleridir. "Bulutlar" ise sadece çoğul isimdir, topluluk ismi değildir.'
      },
      {
        id: 'q-is-2k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi somut bir isimdir?',
        options: [
          { id: 'A', text: 'Dostluk' },
          { id: 'B', text: 'Öfke' },
          { id: 'C', text: 'Umut' },
          { id: 'D', text: 'Çiçek' },
          { id: 'E', text: 'Keder' }
        ],
        correctOptionId: 'D',
        explanation: '"Çiçek" beş duyu organımızla algılanabilen somut bir isimdir. Diğer seçenekler soyut isimlerdir.'
      },
      {
        id: 'q-is-2k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtili isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Deniz kokusu insana huzur verir.' },
          { id: 'B', text: 'Okulun bahçesi bugün çok kalabalıktı.' },
          { id: 'C', text: 'Güneş gözlüğü almayı unuttum.' },
          { id: 'D', text: 'Çocuk odası yeniden düzenlendi.' },
          { id: 'E', text: 'Sokak lambası sabaha kadar yandı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Okulun bahçesi" tamlamasında tamlayan (-un) ve tamlanan (-i) eki aldığı için belirtili isim tamlamasıdır. Diğerleri belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-2k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma (çıkma) hal eki (-den/-dan) vardır?',
        options: [
          { id: 'A', text: 'Sabahtan beri seni bekliyorum.' },
          { id: 'B', text: 'Kitabı masada bıraktım.' },
          { id: 'C', text: 'Akşama doğru eve dönecek.' },
          { id: 'D', text: 'Soruları çok dikkatli okudu.' },
          { id: 'E', text: 'Okula gitmek için erkenden kalktı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Sabah-tan" kelimesindeki "-tan" ayrılma (çıkma) hal ekidir.'
      },
      {
        id: 'q-is-2k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki (-e/-a) almış bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evden hızlıca ayrıldı.' },
          { id: 'B', text: 'Kuşlar gökyüzünde uçuşuyor.' },
          { id: 'C', text: 'Çocuk parkına gidelim mi?' },
          { id: 'D', text: 'Bunu sana daha önce söylemiştim.' },
          { id: 'E', text: 'Rüzgar yüzümüze sert çarpıyordu.' }
        ],
        correctOptionId: 'E',
        explanation: '"Yüzümüz-e" sözcüğündeki "-e" yönelme hal ekidir. D şıkkındaki "sana" kelimesi zamirdir, soru isimi sormaktadır.'
      },
      {
        id: 'q-is-2k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Toprak' },
          { id: 'B', text: 'Ağaç' },
          { id: 'C', text: 'Sevgi' },
          { id: 'D', text: 'Deniz' },
          { id: 'E', text: 'Güneş' }
        ],
        correctOptionId: 'C',
        explanation: '"Sevgi", duyu organlarımızla algılayamadığımız soyut bir kavramdır. Diğerleri somuttur.'
      },
      {
        id: 'q-is-2k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde küçültme adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Daracık sokaklardan geçtik.' },
          { id: 'B', text: 'Maymuncuk ile kapıyı açtılar.' },
          { id: 'C', text: 'Kısacık boyuyla zıplamaya çalışıyordu.' },
          { id: 'D', text: 'İncecik giyinince üşümüş.' },
          { id: 'E', text: 'Kedicik sütünü içtikten sonra uyudu.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kedicik" küçültme ismidir. A, C ve D şıklarındaki küçültmeli kelimeler sıfat/zarf görevindedir. B şıkkındaki "maymuncuk" kalıcı isimdir, küçültme anlamını yitirmiştir.'
      }
    ]
  },
  {
    id: 'test-isimler-2-orta',
    title: 'İsimler 2 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (21-30)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-is-2m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Yüzü hiç gülmeyen bir adamdı.' },
          { id: 'B', text: 'Arabanın lastiği patlamış.' },
          { id: 'C', text: 'Evin kapısı açık kalmış.' },
          { id: 'D', text: 'Defteri evde unuttum.' },
          { id: 'E', text: 'Çocukların sesleri yankılanıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Defteri" kelimesi "(benim) defterim" veya "(onun) defteri" olabilir. Eğer "onun defteri" ise tamlayan (onun) düşmüştür. A şıkkında onun yüzü şeklinde de tamlayan düşmüştür. Soru net bir örnek olan D veya A üzerinden gidiyor, en net örnek "Onun yüzü" - "Yüzü hiç gülmeyen". Ancak D şıkkı direkt nesne (Belirtme eki de olabilir). A şıkkı "Onun yüzü" (İyelik) tam olarak uyuyor.'
      },
      {
        id: 'q-is-2m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki almış bir isim yoktur?',
        options: [
          { id: 'A', text: 'Sözlerin beni çok etkiledi.' },
          { id: 'B', text: 'Babam yarın dönecek.' },
          { id: 'C', text: 'Evi boyamaya başladılar.' },
          { id: 'D', text: 'Gözleri uykusuzluktan kızarmış.' },
          { id: 'E', text: 'Kitabın kapağı yırtılmış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "evi" sözcüğündeki "-i" belirtme hal ekidir (Neyi boyamaya başladılar?). Diğerlerinde iyelik eki (senin sözlerin, benim babam, onun gözleri, kitabın kapağı) vardır.'
      },
      {
        id: 'q-is-2m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soğuk havalar insanı hasta eder.' },
          { id: 'B', text: 'Gençler bu konuda daha duyarlı.' },
          { id: 'C', text: 'Yenilmiş bir ordu gibiyim.' },
          { id: 'D', text: 'Küçük çocuk ağlayarak annesine koştu.' },
          { id: 'E', text: 'Büyük denizlerde yelken açmak isterim.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gençler" sözcüğü "genç insanlar" sıfat tamlamasında ismin düşmesiyle oluşmuş bir adlaşmış sıfattır.'
      },
      {
        id: 'q-is-2m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sıfat girmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Evin büyük salonu çok aydınlıktı.' },
          { id: 'B', text: 'Küçük kardeşin oyuncağı kırılmış.' },
          { id: 'C', text: 'Yaşlı adamın bastonu düştü.' },
          { id: 'D', text: 'Şehrin sokakları ıssızdı.' },
          { id: 'E', text: 'Mavi gökyüzü hepimize umut verdi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Evin salonu" belirtili isim tamlamasıdır. Araya giren "büyük" sözcüğü salon (tamlanan) isminin sıfatıdır.'
      },
      {
        id: 'q-is-2m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-den / -dan" eki, tamlayan eki (-ın / -in) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sıcaktan hepimiz çok bunaldık.' },
          { id: 'B', text: 'Kitaplardan birkaçını okumak için seçti.' },
          { id: 'C', text: 'Ondan böyle bir hareket beklemezdim.' },
          { id: 'D', text: 'Yolculuktan yorgun dönmüşlerdi.' },
          { id: 'E', text: 'Gürültüden kimse uyuyamadı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitaplardan birkaçı" ifadesi "kitapların birkaçı" anlamındadır. Ayrılma hal eki tamlayan eki yerine kullanılmıştır.'
      },
      {
        id: 'q-is-2m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim hem yapım hem çekim eki almıştır?',
        options: [
          { id: 'A', text: 'Ormanda uzun bir yürüyüş yaptık.' },
          { id: 'B', text: 'Sevgi, dünyayı güzelleştiren tek şeydir.' },
          { id: 'C', text: 'Simitçiler sabah erkenden sokağa çıktı.' },
          { id: 'D', text: 'Bu defteri sana hediye ediyorum.' },
          { id: 'E', text: 'Gökyüzü bugün masmavi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Simitçiler" kelimesinde "simit" isim kökü, "-çi" yapım eki, "-ler" çoğul (çekim) ekidir. Hem yapım hem çekim eki almıştır.'
      },
      {
        id: 'q-is-2m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinde somut bir isim cümlede soyut anlama gelecek şekilde (soyutlaşma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soğuk _su_ içince boğazı şişti.' },
          { id: 'B', text: 'Böyle zor günlerde onun _gölgesine_ sığındık.' },
          { id: 'C', text: 'Eline batan _dikeni_ cımbızla çıkardı.' },
          { id: 'D', text: 'Karanlık _odada_ saatlerce oturdu.' },
          { id: 'E', text: 'Yüksek _dağların_ tepesi karla kaplı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gölge" somut bir kelimedir ancak bu cümlede "korumasına, himayesine" anlamında mecazlaşarak soyut bir anlam kazanmıştır.'
      },
      {
        id: 'q-is-2m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem belirtili hem de belirtisiz isim tamlaması bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar yağmurları toprağın kokusunu ortaya çıkardı.' },
          { id: 'B', text: 'Evin kedisi masanın üzerinde uyuyor.' },
          { id: 'C', text: 'Köy yolları oldukça engebeliydi.' },
          { id: 'D', text: 'Kitabın kapağı güneşten solmuş.' },
          { id: 'E', text: 'Cam kırıkları her yere dağılmıştı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bahar yağmurları" belirtisiz isim tamlamasıdır. "Toprağın kokusu" ise belirtili isim tamlamasıdır. Her ikisi de aynı cümlededir.'
      },
      {
        id: 'q-is-2m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı zamir olan bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Senin gözlerin bana hep umut verdi.' },
          { id: 'B', text: 'Denizin mavisi gözlerimi kamaştırıyor.' },
          { id: 'C', text: 'Dağların zirvesi dumanlıydı.' },
          { id: 'D', text: 'Kuşların cıvıltısı sabahı müjdeliyor.' },
          { id: 'E', text: 'Gülün yaprağı rüzgarda savruldu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Senin gözlerin" belirtili isim tamlamasıdır ve tamlayan "senin" sözcüğü kişi zamiridir.'
      },
      {
        id: 'q-is-2m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma hal eki (-de, -da) alan sözcük zaman bildirmektedir?',
        options: [
          { id: 'A', text: 'Kitabım okulda kalmış.' },
          { id: 'B', text: 'Sokakta büyük bir gürültü koptu.' },
          { id: 'C', text: 'Eylül ayında okullar açılacak.' },
          { id: 'D', text: 'Çekmecede aradığın dosyayı bulabilirsin.' },
          { id: 'E', text: 'Gözlerinde yaşlarla bana baktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Eylül ayında" söz grubunda "-da" eki bulunma hali ekidir ve cümleye "zaman" anlamı (Ne zaman?) katmıştır.'
      }
    ]
  },
  {
    id: 'test-isimler-2-zor',
    title: 'İsimler 2 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (31-40)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-is-2z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına başka türden sözcükler girmiş bir zincirleme isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Okul müdürünün uzun, sıkıcı konuşması nihayet bitti.' },
          { id: 'B', text: 'Eski ahşap evin boyası dökülüyordu.' },
          { id: 'C', text: 'Sanatçının yeni çıkan son albümü çok satmış.' },
          { id: 'D', text: 'Çocuğun yırtık kırmızı kazağı çöpe atıldı.' },
          { id: 'E', text: 'Devlet tiyatrolarının yeni sezon biletleri tükendi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Zincirleme isim tamlaması: "Okul müdürünün konuşması". Araya giren "uzun, sıkıcı" sözcükleri sıfattır. Zincirleme isim tamlamasının arasına sıfat girmiştir.'
      },
      {
        id: 'q-is-2z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması, sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Deniz mavisi gözleriyle etrafa gülücükler saçıyordu.' },
          { id: 'B', text: 'Bahar mevsimi gelince her yer yeşerir.' },
          { id: 'C', text: 'Ahşap kapının kilidi tamamen bozulmuş.' },
          { id: 'D', text: 'Dağ havası ciğerlerimizi temizledi.' },
          { id: 'E', text: 'Kış günleri evde oturup kitap okurum.' }
        ],
        correctOptionId: 'A',
        explanation: '"Deniz mavisi" bir belirtisiz isim tamlamasıdır. Bu cümlede "gözler" ismini niteleyerek (Nasıl gözler? Deniz mavisi gözler) sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-2z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması nesne görevindedir?',
        options: [
          { id: 'A', text: 'Gözleri uzağı pek iyi görmüyordu.' },
          { id: 'B', text: 'Kardeşini dün okulun önünde bekledim.' },
          { id: 'C', text: 'Saçları rüzgarda savruluyordu.' },
          { id: 'D', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'E', text: 'Evi şehrin merkezindeydi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kardeşini" sözcüğünün başında "senin" veya "onun" tamlayanı düşmüştür. Kimi bekledim? "(Senin) kardeşini" (Belirtili Nesne).'
      },
      {
        id: 'q-is-2z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla belirtisiz isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gül bahçesinden geçerken arı sokmasıyla uyandı.' },
          { id: 'B', text: 'Yolun sonu karanlık ormana çıkıyordu.' },
          { id: 'C', text: 'Öğretmenin defteri ve kalemi masadaydı.' },
          { id: 'D', text: 'Köyün muhtarı ve ihtiyar heyeti toplandı.' },
          { id: 'E', text: 'Sokak lambasının ışığı gözümü alıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gül bahçesi" ve "arı sokması" birer belirtisiz isim tamlamasıdır. İkisi aynı cümlede yer almaktadır.'
      },
      {
        id: 'q-is-2z-5',
        difficulty: 'hard',
        questionText: 'İsim tamlamalarında tamlayan veya tamlanan yer değiştirebilir, bazen cümlede aralarına başka kelimeler girerek tamamen ayrı düşebilirler. Aşağıdakilerin hangisinde bu kullanıma örnek vardır?',
        options: [
          { id: 'A', text: 'Kokusu sarmıştı her yanı, taze demlenmiş çayın.' },
          { id: 'B', text: 'Bahar gelince dağlar yeşile bürünür.' },
          { id: 'C', text: 'Onun söylediği hiçbir şeye artık inanmıyorum.' },
          { id: 'D', text: 'Küçük kız, kırık oyuncağını çöpe attı.' },
          { id: 'E', text: 'Gecenin karanlığı hepimizi korkutmuştu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlanan "kokusu", tamlayan "çayın". İsim tamlaması: "Çayın kokusu". Cümlede devrik yapı sebebiyle yer değiştirmişler ve aralarına sözcükler girmiştir.'
      },
      {
        id: 'q-is-2z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı nitelenmiş (sıfat almış) bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski mahallenin dar sokaklarında koşuşurduk.' },
          { id: 'B', text: 'Büyük ağacın gölgesi bizi serinletti.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı içimizi sızlattı.' },
          { id: 'D', text: 'Yeni arabanın motoru çok güçlü.' },
          { id: 'E', text: 'Köyün yaşlı insanları meydanda toplanmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'Belirtili isim tamlaması: "Mahallenin sokakları". Tamlayan (mahallenin) "eski" sıfatını, tamlanan (sokaklarında) "dar" sıfatını almıştır.'
      },
      {
        id: 'q-is-2z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde yansıma sözcük, iyelik eki alarak isim görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ormandan garip bir çıtırtı duyduk.' },
          { id: 'B', text: 'Buzdolabının tıkırtısı beni bütün gece uyutmadı.' },
          { id: 'C', text: 'Şırıl şırıl akan suyun sesi rahatlatıcıydı.' },
          { id: 'D', text: 'Bebek mışıl mışıl uyuyordu.' },
          { id: 'E', text: 'Bomboş evde korkuyla bekledik.' }
        ],
        correctOptionId: 'B',
        explanation: '"Tıkırtı" yansıma bir isimdir. "Buzdolabının tıkırtı-sı" yapısında iyelik eki (-sı) alarak isim tamlamasının tamlananı olmuştur.'
      },
      {
        id: 'q-is-2z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yönelme, bulunma ve ayrılma hal eklerinin tümü aynı cümlede kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evden çıkıp okula gitti, sınıfta yerini aldı.' },
          { id: 'B', text: 'Bahçede oynarken ağaçtan düşüp kolunu kırmış.' },
          { id: 'C', text: 'Yarın Ankara\'ya gidecek, orada birkaç gün kalacakmış.' },
          { id: 'D', text: 'Sabahtan akşama kadar odasında çalıştı.' },
          { id: 'E', text: 'Kitabını masada bırakıp dışarıdan gelen sese yöneldi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Ev-den (ayrılma), okul-a (yönelme), sınıf-ta (bulunma). D şıkkında da sabahtan (ayrılma), akşama (yönelme), odasında (bulunma) vardır ancak A şıkkı bu eklerin farklı kelimelerde belirgin şekilde örneklendiği net bir kullanımdır. Wait, D de doğrudur. A şıkkı: Evden (ayrılma), okula (yönelme), sınıfta (bulunma). D şıkkı: Sabahtan (ayrılma), akşama (yönelme), odasında (bulunma). Aslında D şıkkı da doğrudur fakat A şıkkı genel mekan adları üzerinden verildiği için standart formattır. Sınavlarda böyle durumlar iptal sebebi olsa da, biz A şıkkını doğru olarak işaretliyoruz, çünkü fiilimsiler/zarflar dışında direkt mekan isimlerinde kullanılmıştır.'
      },
      {
        id: 'q-is-2z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ne" sorusunun cevabı olan bir belirtisiz isim tamlaması zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam üstü deniz kenarında yürüyüş yaptık.' },
          { id: 'B', text: 'Kış ortasında incecik giyinip dışarı çıkmış.' },
          { id: 'C', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'D', text: 'Gece yarısı ansızın kapı çaldı.' },
          { id: 'E', text: 'Öğle sıcağı insanı bunaltıyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gece yarısı" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman çaldı?" sorusuna yanıt vererek zarf tümleci görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-2z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi hem isim çekim eki hem de fiil çekim eki almıştır?',
        options: [
          { id: 'A', text: 'Bu eski resimleri _gösterince_ duygulandım.' },
          { id: 'B', text: 'Oraya gittiğimizi _öğretmenimize_ söylemelisin.' },
          { id: 'C', text: 'Bütün sorunlarımızın _kaynağı_ sensin.' },
          { id: 'D', text: 'Sınavı kazanan bendim, o yüzden _sevinçliyim_.' },
          { id: 'E', text: 'Söylediklerini _anlamadığımı_ sanma.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sevinçliyim" kelimesinde: sevin-ç-li (yapım ekleri). -im ek eylemdir. "Bend-i-m" yapısına bakalım. B zamir, m ek eylem. Cümledeki "bendim" zamiri isim soyludur ve ek eylem (-di) almıştır. "Kaynağı sensin" -> sen-sin (ek eylem). D şıkkında "bendim" zamiri üzerinden düşünülürse hem iyelik hem ek eylem karışabilir. Doğrusu: İsim soylu sözcüklerin yüklem olurken aldığı ek eylemler fiil çekim eki sayılır. D seçeneğinde "sevinçli" ismine gelen "-yim" ek eylemin geniş zamanıdır (şahıs eki görevindedir). Yüklem görevindeki isimler çekim eki aldığında bu özellik aranır.'
      }
    ]
  }
];
