export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Sözcükte ve Söz Öbeklerinde Anlam - Kolay',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', 
        difficulty: 'easy',
        questionText: '"Sıcak" sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Fırından yeni çıkmış sıcak ekmekleri masaya koydu.' },
          { id: 'B', text: 'Bizi kapıda çok sıcak bir gülümsemeyle karşıladı.' },
          { id: 'C', text: 'Bugün hava o kadar sıcak ki dışarı çıkılmıyor.' },
          { id: 'D', text: 'Çorba çok sıcak olduğu için dilini yaktı.' },
          { id: 'E', text: 'Yazın sıcak günlerinde denize girmeyi çok severdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde "sıcak" kelimesi ısı ile ilgili gerçek anlamıyla kullanılmıştır. B seçeneğinde ise "içten, samimi" anlamında kullanılarak mecaz anlam kazanmıştır.'
      },
      {
        id: 'q-1-2', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde terim anlamlı bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dün akşam izlediğimiz film çok heyecanlıydı.' },
          { id: 'B', text: 'Hakem, oyuncuya sert bir faul yaptığı için kırmızı kart gösterdi.' },
          { id: 'C', text: 'Bahçedeki çiçekleri her sabah düzenli olarak sular.' },
          { id: 'D', text: 'Yeni aldığı kitapları okumak için sabırsızlanıyordu.' },
          { id: 'E', text: 'Pazardan taze meyve ve sebze almayı unutma.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "faul" ve "kırmızı kart" sözcükleri spor (futbol vb.) alanına ait terimlerdir.'
      },
      {
        id: 'q-1-3', 
        difficulty: 'easy',
        questionText: '"Tatlı" sözcüğü aşağıdaki cümlelerin hangisinde "hoşa giden, sevimli" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yemekten sonra sütlü bir tatlı yedik.' },
          { id: 'B', text: 'Kahvesine iki şeker atınca kahve çok tatlı olmuş.' },
          { id: 'C', text: 'Beşiğinde uyuyan tatlı bir bebek vardı.' },
          { id: 'D', text: 'Bu elmalar beklediğimden çok daha tatlı çıktı.' },
          { id: 'E', text: 'Şerbeti fazla kaçtığı için bu baklava çok tatlı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde "tatlı" kelimesi tat alma duyusuyla ilgili gerçek anlamında kullanılmıştır. C seçeneğinde ise bebek için "hoşa giden, sevimli" anlamında kullanılmıştır.'
      },
      {
        id: 'q-1-4', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi sesteş (eş sesli) değildir?',
        options: [
          { id: 'A', text: 'Yazın bu "kır" evinde bol bol dinleneceğiz.' },
          { id: 'B', text: 'Bu soruyu çözmek için yeni bir "yol" bulmalıyız.' },
          { id: 'C', text: 'Rüzgar çok sert esince ağacın "dal"ı kırıldı.' },
          { id: 'D', text: 'Arkadaşım bana doğum günümde güzel bir "kitap" aldı.' },
          { id: 'E', text: 'Yüzüme bakıp her şeye rağmen "gül" diyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A\'da "kır", B\'de "yol", C\'de "dal", E\'de "gül" sesteş sözcüklerdir. Ancak D seçeneğindeki "kitap" sözcüğünün eş seslisi yoktur.'
      },
      {
        id: 'q-1-5', 
        difficulty: 'easy',
        questionText: '"Geniş" sözcüğü aşağıdaki cümlelerin hangisinde "zaman bakımından acele etmeyen, rahat" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Salondaki geniş koltuğa uzanıp televizyon izledi.' },
          { id: 'B', text: 'Arabayı park etmek için çok geniş bir alan bulduk.' },
          { id: 'C', text: 'O kadar geniş bir insan ki hiçbir şeyi kafasına takmıyor.' },
          { id: 'D', text: 'Evin bahçesi düşündüğümüzden çok daha genişmiş.' },
          { id: 'E', text: 'Kitaplarını koymak için geniş bir dolap satın aldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde "geniş" kelimesi fiziksel olarak kapladığı alan bağlamında (dar karşıtı) kullanılmıştır. C seçeneğinde ise kişinin yapısıyla, vurdumduymaz veya rahat olmasıyla ilgili kullanılmıştır.'
      },
      {
        id: 'q-1-6', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerde geçen ikilemelerden hangisi zıt anlamlı sözcüklerden oluşmuştur?',
        options: [
          { id: 'A', text: 'Bu konuyu seninle enine boyuna konuşmalıyız.' },
          { id: 'B', text: 'Merdivenleri ağır ağır çıkarak eve ulaştı.' },
          { id: 'C', text: 'Sınavı geçince eş dost herkesi arayıp haber verdi.' },
          { id: 'D', text: 'Gece gündüz demeden sınavlarına hazırlanıyordu.' },
          { id: 'E', text: 'Yalan yanlış sözlerle herkesin kafasını karıştırdı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gece" ve "gündüz" kelimeleri birbirinin zıttıdır.'
      },
      {
        id: 'q-1-7', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "baş" sözcüğü temel (ilk) anlamıyla kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dağın başında küçük, sevimli bir ev vardı.' },
          { id: 'B', text: 'Çocuğun başı ağrıdığı için erkenden uyudu.' },
          { id: 'C', text: 'Sokağın başında bekle, birazdan geliyorum.' },
          { id: 'D', text: 'Bu işin başında kimin olduğunu öğrenmemiz gerek.' },
          { id: 'E', text: 'Ayın başında maaşlar yatınca borçlarımı ödeyeceğim.' }
        ],
        correctOptionId: 'B',
        explanation: 'A\'da (tepe), C\'de (başlangıç noktası), D\'de (yönetici), E\'de (zaman dilimi başlangıcı) yan anlamda kullanılmıştır. B seçeneğinde ise insan organı olan "baş/kafa" anlamında (temel anlam) kullanılmıştır.'
      },
      {
        id: 'q-1-8', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "gözden düşmek" deyiminin anlamı doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni gelen çalışan çok başarılı olunca eski müdür gözden düştü. (Değerini, itibarını kaybetmek)' },
          { id: 'B', text: 'Havalar soğuyunca o da gözden düştü. (Hasta olmak)' },
          { id: 'C', text: 'Arkadaşının anlattıklarına inanamayınca gözden düştü. (Şaşırmak)' },
          { id: 'D', text: 'Uykusu gelince kitap okurken gözden düştü. (Uyuyakalmak)' },
          { id: 'E', text: 'Uzun süre onu göremeyince gözden düştü. (Özlemek)' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözden düşmek" deyimi, bir kişinin veya şeyin değerini, başkalarının ona verdiği önemi kaybetmesi demektir. Bu anlam sadece A seçeneğinde doğru verilmiştir.'
      },
      {
        id: 'q-1-9', 
        difficulty: 'easy',
        questionText: '"Kuru" sözcüğü aşağıdaki cümlelerin hangisinde nitel anlamlı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çamaşırlar güneşin altında çok çabuk kurudu.' },
          { id: 'B', text: 'Yemeğin yanına taze kuru soğan doğradı.' },
          { id: 'C', text: 'Bana anlattığı kuru bahanelere artık inanmıyorum.' },
          { id: 'D', text: 'Kuru yapraklar rüzgarda etrafa savruluyordu.' },
          { id: 'E', text: 'Çayını yanında biraz kuru yemişle birlikte içti.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D, E seçeneklerinde ölçülebilir, somut, fiziksel bir kuruluk vardır (nicel veya gerçek anlam). C seçeneğinde "kuru bahane", içi boş, anlamsız, inandırıcılığı olmayan anlamındadır ve nitel bir özelliktir (mecaz).'
      },
      {
        id: 'q-1-10', 
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir isim soyut anlam kazanmıştır? (Soyutlama)',
        options: [
          { id: 'A', text: 'Masanın üzerindeki kitapları rafa özenle dizdi.' },
          { id: 'B', text: 'Onun bu kadar taş kalpli olduğunu hiç düşünmemiştim.' },
          { id: 'C', text: 'Bahar gelince ağaçlar yeniden yeşermeye başladı.' },
          { id: 'D', text: 'Havadaki bulutlar yağmurun habercisi gibiydi.' },
          { id: 'E', text: 'Sokak lambasının ışığı odayı hafifçe aydınlatıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "taş" kelimesi normalde somut bir kavramken, "taş kalpli" ifadesinde "acımasız, merhametsiz" anlamında kullanılarak soyut bir anlam kazanmıştır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Sözcükte ve Söz Öbeklerinde Anlam - Orta',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde yansımadan türemiş bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Dere boyunda şırıltılarla akar sular.' },
          { id: 'B', text: 'Gök gürültüsüyle sarsıldı bütün camlar.' },
          { id: 'C', text: 'Ormanda bir çıtırtı duyup irkildim.' },
          { id: 'D', text: 'Işıl ışıl parlıyordu gökyüzündeki yıldızlar.' },
          { id: 'E', text: 'Kuşların cıvıltısı sabahın habercisidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (şırıltı), B (gürültü), C (çıtırtı), E (cıvıltı) sözcükleri doğadaki seslerin taklidi olan yansıma sözcüklerdir. D seçeneğindeki "ışıl ışıl" ise yansıma değildir, görme duyusuyla ilgilidir.'
      },
      {
        id: 'q-2-2',
        difficulty: 'medium',
        questionText: '"Bir sözcüğün benzetme amacı güdülmeden, başka bir sözcük yerine kullanılmasına mecazımürsel (ad aktarması) denir." Buna göre, aşağıdaki cümlelerin hangisinde mecazımürsel vardır?',
        options: [
          { id: 'A', text: 'Bugün gökyüzü çok bulutlu, yağmur yağabilir.' },
          { id: 'B', text: 'Soba yanınca bütün ev sıcacık oldu.' },
          { id: 'C', text: 'Masadaki eski kitapları raflara dizdim.' },
          { id: 'D', text: 'Bahar gelince ağaçlar çiçek açtı.' },
          { id: 'E', text: 'Kardeşim odasında oyuncaklarıyla oynuyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Soba yanınca" ifadesinde yanan sobanın kendisi değil, içindeki odun veya kömürdür. İç-dış ilişkisiyle ad aktarması yapılmıştır.'
      },
      {
        id: 'q-2-3',
        difficulty: 'medium',
        questionText: '"Çekmek" sözcüğü aşağıdaki cümlelerin hangisinde "bir durumu, zorluğu veya üzüntüyü yaşamak, katlanmak" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kasanın kapağını kendine doğru hızla çekti.' },
          { id: 'B', text: 'Bankadan yüklü miktarda kredi çekti.' },
          { id: 'C', text: 'Yıllardır bu hastalığın acısını çekiyor.' },
          { id: 'D', text: 'Arabayı yolun kenarına çekti ve bekledi.' },
          { id: 'E', text: 'Fotoğraf makinesini alıp manzarayı çekti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "acı çekmek", bir zorluğa veya üzüntüye katlanmak anlamında kullanılmıştır.'
      },
      {
        id: 'q-2-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi anlam genişlemesine uğramıştır?',
        options: [
          { id: 'A', text: 'Bu işin "yolunu" bulmadan pes etmeyeceğim.' },
          { id: 'B', text: 'Pazardan aldığım "elma" çok tatlıymış.' },
          { id: 'C', text: 'Kuşlar ağacın "dalına" yuva yapmış.' },
          { id: 'D', text: 'Odanın "kapısı" aniden rüzgarla kapandı.' },
          { id: 'E', text: 'Sabah erken kalkıp "su" içti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yol" kelimesi başlangıçta sadece fiziksel bir güzergah anlamındayken, zamanla yöntem, usul, çare gibi soyut anlamlar kazanarak anlam genişlemesine uğramıştır.'
      },
      {
        id: 'q-2-5',
        difficulty: 'medium',
        questionText: '"Kırmak" sözcüğü aşağıdakilerin hangisinde "fiyatı veya değeri düşürmek" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgar sert esince pencerenin camını kırdı.' },
          { id: 'B', text: 'Onun bu kaba sözleri kalbimi çok kırdı.' },
          { id: 'C', text: 'Arabasının direksiyonunu aniden sağa kırdı.' },
          { id: 'D', text: 'Pazarlık yaparak arabanın fiyatını bayağı kırdı.' },
          { id: 'E', text: 'Kışın soğuğu bu yıl erkenden kırıldı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "fiyatı kırmak" ifadesi, pazarlık yoluyla ücreti aşağı çekmek, indirim yaptırmak anlamında kullanılmıştır.'
      },
      {
        id: 'q-2-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yakınma (şikâyet)" anlamı taşıyan bir söz öbeği vardır?',
        options: [
          { id: 'A', text: 'Yıllardır bu şirkette gece gündüz çalışıyorum.' },
          { id: 'B', text: 'O kadar söylememe rağmen odasını hiç toplamıyor.' },
          { id: 'C', text: 'Yarın sabah erkenden yola çıkmayı planlıyoruz.' },
          { id: 'D', text: 'Bu yemeği senin için özel olarak hazırladım.' },
          { id: 'E', text: 'Eski günleri hatırladıkça gözleri doluyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kişinin söz dinlememesi ve dağınıklığından dolayı bir durumdan rahatsızlık duyulup şikayet (yakınma) edilmektedir.'
      },
      {
        id: 'q-2-7',
        difficulty: 'medium',
        questionText: '"Boş" sözcüğü aşağıdaki cümlelerin hangisinde "bilgisiz, yeteneksiz" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Elindeki boş bardağı masaya bıraktı.' },
          { id: 'B', text: 'Bugün bütün günüm boş, seninle görüşebiliriz.' },
          { id: 'C', text: 'Bana boş vaatlerle gelme, icraat göster.' },
          { id: 'D', text: 'O aslında çok boş bir adam, anlattıklarına aldanma.' },
          { id: 'E', text: 'Bu ev aylardır boş duruyor, kiracı bulamadılar.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "boş bir adam" tabiriyle, kişinin donanımsız, bilgisiz veya yeteneksiz olduğu mecazi bir dille ifade edilmiştir.'
      },
      {
        id: 'q-2-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "duyular arası aktarma" yapılmıştır?',
        options: [
          { id: 'A', text: 'Baharın gelmesiyle etrafı mis gibi bir koku sardı.' },
          { id: 'B', text: 'Adamın sert bakışları karşısında hepimiz ürperdik.' },
          { id: 'C', text: 'Acı bir fren sesiyle irkilip arkamıza baktık.' },
          { id: 'D', text: 'Masanın üzerindeki taze ekmekler çok lezzetli görünüyordu.' },
          { id: 'E', text: 'Rüzgarın uğultusu gece boyunca kulaklarımızdan gitmedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde tat alma duyusuna ait olan "acı" sözcüğü, işitme duyusuna ait olan "ses" kelimesine aktarılarak duyular arası aktarım yapılmıştır.'
      },
      {
        id: 'q-2-9',
        difficulty: 'medium',
        questionText: '"İnce" sözcüğü aşağıdaki cümlelerin hangisinde "düşünceli, zarif" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Havalar soğudu, üzerine daha ince bir şeyler almalısın.' },
          { id: 'B', text: 'İnce bir dilim pasta alıp kahvesinin yanına oturdu.' },
          { id: 'C', text: 'Gerçekten çok ince bir insansın, beni hep düşünüyorsun.' },
          { id: 'D', text: 'Kitabın sayfaları o kadar ince ki çevirirken yırtılıyor.' },
          { id: 'E', text: 'İnce hesaplar yaparak bu işin içinden sıyrılmaya çalışıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ince insan" ifadesi, nezaket sahibi, düşünceli ve zarif kişi anlamında mecaz olarak kullanılmıştır.'
      },
      {
        id: 'q-2-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki deyimlerden hangisi "bir işin gizli, karanlık yönlerini sezmek" anlamındadır?',
        options: [
          { id: 'A', text: 'Gözden kaçırmak' },
          { id: 'B', text: 'Kokusu çıkmak' },
          { id: 'C', text: 'İşin içinde bit yeniği olmak' },
          { id: 'D', text: 'Kulağına küpe olmak' },
          { id: 'E', text: 'Göz yummak' }
        ],
        correctOptionId: 'C',
        explanation: '"İşin içinde bit yeniği olmak" (ya da bit yeniği aramak), görünüşte düzgün olan bir durumun ardında gizli, kuşkulu ve olumsuz bir yön bulunduğunu sezmek anlamına gelir.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Sözcükte ve Söz Öbeklerinde Anlam - Zor',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1',
        difficulty: 'hard',
        questionText: '"Somutlama, soyut bir kavramın somut sözcüklerle, benzetmelerle görünür hale getirilmesidir." Buna göre aşağıdaki cümlelerin hangisinde somutlama yoktur?',
        options: [
          { id: 'A', text: 'Umut, karanlık gecede parlayan cılız bir yıldızdır.' },
          { id: 'B', text: 'Aklındaki şüphe kurtları beynini kemirip duruyordu.' },
          { id: 'C', text: 'Cesaret, engellerin üzerine atılan keskin bir kılıçtır.' },
          { id: 'D', text: 'Sevgi, her kalpte yeşermeyi bekleyen narin bir çiçektir.' },
          { id: 'E', text: 'Bugün gökyüzünde kara bulutlar toplanmaya başlamıştı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde soyut kavramlar (umut, şüphe, cesaret, sevgi) somut nesnelere benzetilerek somutlanmıştır. E seçeneğinde ise tamamen gerçek ve somut olan bulutlardan bahsedilmektedir.'
      },
      {
        id: 'q-3-2',
        difficulty: 'hard',
        questionText: '"Kinaye, bir sözcüğün hem gerçek hem de mecaz anlamını düşündürecek şekilde kullanılması, ancak asıl kastedilenin mecaz anlam olmasıdır." Aşağıdaki dizelerin hangisinde kinaye vardır?',
        options: [
          { id: 'A', text: 'Güneş ufuktan şimdi nazlı nazlı doğuyor.' },
          { id: 'B', text: 'Şu karşıki dağda kar var duman yok.' },
          { id: 'C', text: 'Bulamadım dünyada gönüle mekan, nerede bir gül bitse etrafı diken.' },
          { id: 'D', text: 'Rüzgarın kanatlarında uzaklara uçmak isterdim.' },
          { id: 'E', text: 'Mavi bir denizin ortasında yalnız bir gemiyim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gülün etrafında diken olması" ifadesi, hem gerçek anlamda böyledir (gerçek) hem de "her güzel şeyin bir zorluğu, sıkıntısı vardır" anlamını taşır (mecaz). Kastedilen mecaz anlam olduğu için kinayedir.'
      },
      {
        id: 'q-3-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dolaylama" (bir tek sözcükle ifade edilebilen bir kavramı, birden çok sözcükle ifade etme) örneği kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Derya kuzuları bunlar, taze taze geldi!' },
          { id: 'B', text: 'Yavru Vatan\'da yeni turizm projeleri hayata geçiriliyor.' },
          { id: 'C', text: 'Ormanlar kralı, kafesinin demirleri ardından hüzünle bakıyordu.' },
          { id: 'D', text: 'Meşin yuvarlak ağlarla buluştu ve stadyum yıkıldı.' },
          { id: 'E', text: 'Güneş yüzünü göstermeden yola çıkmaya karar verdik.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Balık -> Derya kuzusu), B (Kıbrıs -> Yavru Vatan), C (Aslan -> Ormanlar kralı), D (Futbol topu -> Meşin yuvarlak) seçeneklerinde dolaylama vardır. E seçeneğinde böyle bir kullanım yoktur.'
      },
      {
        id: 'q-3-4',
        difficulty: 'hard',
        questionText: '"Teşhis (Kişileştirme), insana ait özelliklerin insan dışındaki varlıklara verilmesidir." Aşağıdakilerin hangisinde hem teşhis hem de intak (konuşturma) sanatı bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dağlar başını duman almış, hüzünle bakıyor yollara.' },
          { id: 'B', text: 'Kuşlar sevinçle uçuşurken, rüzgar şarkılar mırıldanıyordu.' },
          { id: 'C', text: 'Bülbül güle küsmüş, "Artık sana şakımam!" diyordu.' },
          { id: 'D', text: 'Güneş bulutların ardından gülümsedi usulca.' },
          { id: 'E', text: 'Yaşlı çınar ağacı, dallarıyla rüzgara meydan okuyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde bülbülün küsmesi "teşhis (kişileştirme)", bülbülün "Artık sana şakımam!" demesi ise "intak (konuşturma)" sanatıdır. İkisi bir aradadır.'
      },
      {
        id: 'q-3-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili deyimlerden hangisinin açıklaması yanlış verilmiştir?',
        options: [
          { id: 'A', text: 'Ağzı kulaklarına varmak: Çok sevinmek.' },
          { id: 'B', text: 'Küplere binmek: Çok sinirlenmek, öfkelenmek.' },
          { id: 'C', text: 'Burnundan kıl aldırmamak: Kendisine hiç söz söyletmemek, çok kibirli olmak.' },
          { id: 'D', text: 'Gözü yollarda kalmak: Çok uyumak, yorgun düşmek.' },
          { id: 'E', text: 'Etekleri zil çalmak: Çok sevinmek, heyecanlanmak.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gözü yollarda kalmak", birini büyük bir özlemle ve sabırsızlıkla beklemek anlamına gelir. "Çok uyumak" ile hiçbir ilgisi yoktur.'
      },
      {
        id: 'q-3-6',
        difficulty: 'hard',
        questionText: '"Düşmek" sözcüğü aşağıdaki cümlelerin hangisinde "payına ayrılmak, hissesine isabet etmek" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Meyveden kopan elma, usulca toprağa düştü.' },
          { id: 'B', text: 'Miras dağıtılınca bana köydeki küçük tarla düştü.' },
          { id: 'C', text: 'Havalar soğuyunca bu bölgeye erken kar düşer.' },
          { id: 'D', text: 'Onun bu sözlerinden sonra gözümden tamamen düştün.' },
          { id: 'E', text: 'Yorgunluktan yürürken birden yere düştü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde mirastan kendisine ayrılan pay anlamında kullanılmıştır.'
      },
      {
        id: 'q-3-7',
        difficulty: 'hard',
        questionText: '"Sarmak" sözcüğü aşağıdakilerin hangisinde "hoşuna gitmek, zevk vermek" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hediye paketini renkli bir kağıtla özenle sardı.' },
          { id: 'B', text: 'Askerler sabah erkenden kalenin etrafını sardı.' },
          { id: 'C', text: 'Bu yeni dizi beni hiç sarmadı, izlemeyi bıraktım.' },
          { id: 'D', text: 'Yaralı kolunu temiz bir bezle sıkıca sardı.' },
          { id: 'E', text: 'Soğuk rüzgar bütün vücudunu sarmıştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "beni sarmadı" ifadesi, dizinin kişiye zevk vermediği, hoşuna gitmediği ve ilgisini çekmediği anlamında mecaz olarak kullanılmıştır.'
      },
      {
        id: 'q-3-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde güzel adlandırma (kötü, çirkin veya korkutucu bir şeyi daha kibar sözcüklerle ifade etme) örneği yoktur?',
        options: [
          { id: 'A', text: 'Dedem geçen yıl ince hastalığa yakalanıp vefat etti.' },
          { id: 'B', text: 'Onu son yolculuğuna uğurlamak için herkes oradaydı.' },
          { id: 'C', text: 'Evin tek oğlunu da askere uğurladılar.' },
          { id: 'D', text: 'Görme engelli vatandaşlar için yeni yollar yapıldı.' },
          { id: 'E', text: 'Büyükbabam hakkın rahmetine kavuştu.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (verem -> ince hastalık), B (ölüm -> son yolculuk), D (kör -> görme engelli), E (ölüm -> hakkın rahmetine kavuşmak) seçeneklerinde güzel adlandırma vardır. C seçeneğinde böyle bir kullanım yoktur.'
      },
      {
        id: 'q-3-9',
        difficulty: 'hard',
        questionText: '"Almak" sözcüğü aşağıdaki cümlelerin hangisinde "kavramak, anlamak" anlamında kullanılmıştır?',
        options: [
          { id: 'A', text: 'Pazardan iki kilo taze domates aldı.' },
          { id: 'B', text: 'Bu küçük araba yedi kişiyi birden almaz.' },
          { id: 'C', text: 'Benim aklım bu karmaşık hesapları bir türlü almıyor.' },
          { id: 'D', text: 'Saçlarını kestirmek için berberden randevu aldı.' },
          { id: 'E', text: 'Soğuk havada dışarı çıkınca hemen şifayı kapmış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "aklım almıyor" ifadesi, konuyu anlayamamak, kavrayamamak, mantığa oturtamamak anlamında kullanılmıştır.'
      },
      {
        id: 'q-3-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisinin ilettiği mesaj diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Zahmetsiz rahmet olmaz.' },
          { id: 'B', text: 'Yazın başı pişenin, kışın aşı pişer.' },
          { id: 'C', text: 'Emek olmadan yemek olmaz.' },
          { id: 'D', text: 'Ağlamayan çocuğa meme vermezler.' },
          { id: 'E', text: 'Bağa bak üzüm olsun, yemeye yüzün olsun.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki atasözleri bir başarı veya kazanç elde etmek için emek harcamak, çaba göstermek gerektiği (çalışmanın önemi) üzerinedir. D seçeneği ise kişinin hakkını veya ihtiyacını sesini çıkararak, talep ederek alabileceğini ifade eder.'
      }
    ]
  }
]
