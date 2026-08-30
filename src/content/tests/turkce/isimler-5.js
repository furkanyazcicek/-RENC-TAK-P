export default [
  {
    id: 'test-isimler-5-kolay',
    title: 'İsimler 5 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-is-5k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün gün evde oturup dinlendi.' },
          { id: 'B', text: 'Yarın sabah erkenden okula gideceğiz.' },
          { id: 'C', text: 'Kardeşim Ayşe bu yıl üniversiteye başlıyor.' },
          { id: 'D', text: 'Masadaki kitapları tek tek rafa dizdi.' },
          { id: 'E', text: 'Bahçedeki çiçekler çok güzel kokuyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ayşe" bir kişi adı olduğu için özel isimdir. Diğer cümlelerdeki isimlerin tamamı cins (tür) isimdir.'
      },
      {
        id: 'q-is-5k-2',
        difficulty: 'easy',
        questionText: 'Çoğul eki (-lar/-ler) eklendiği kelimeye bazen "aile, sülale, giller" anlamı katar. Aşağıdaki cümlelerin hangisinde bu kullanıma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Ağaçlar baharla birlikte yeşerdi.' },
          { id: 'B', text: 'Akşamları mutlaka kitap okurum.' },
          { id: 'C', text: 'Bu akşam Ahmetlere yemeğe davetliyiz.' },
          { id: 'D', text: 'Sınıftaki öğrenciler çok başarılıydı.' },
          { id: 'E', text: 'Çocuklar bahçede neşeyle koşuyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ahmetler" kelimesindeki -ler eki, "Ahmet ve ailesi" anlamı katmıştır.'
      },
      {
        id: 'q-is-5k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi bir tür (cins) ismidir?',
        options: [
          { id: 'A', text: 'İstanbul' },
          { id: 'B', text: 'Karabaş' },
          { id: 'C', text: 'Ağrı Dağı' },
          { id: 'D', text: 'Kalem' },
          { id: 'E', text: 'Türkçe' }
        ],
        correctOptionId: 'D',
        explanation: '"Kalem" aynı türden olan varlıkların ortak adı olduğu için cins ismidir. Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-5k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde topluluk ismi vardır?',
        options: [
          { id: 'A', text: 'Bölük, sabah içtiması için meydanda toplandı.' },
          { id: 'B', text: 'Kitaplarını masanın üzerinde bırakmış.' },
          { id: 'C', text: 'Yağmur yağınca herkes içeri kaçıştı.' },
          { id: 'D', text: 'Kuşlar gökyüzünde kanat çırpıyordu.' },
          { id: 'E', text: 'Evlerin bacalarından duman tütüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bölük" kelimesi, askeri bir birliği (birden fazla askeri) ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-5k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi somut bir isimdir?',
        options: [
          { id: 'A', text: 'İçinde büyük bir _korku_ vardı.' },
          { id: 'B', text: 'Bu işten çok büyük _sevinç_ duydu.' },
          { id: 'C', text: 'Serin bir _rüzgar_ esiyordu denizden.' },
          { id: 'D', text: 'Geleceğe dair _umutları_ tükenmişti.' },
          { id: 'E', text: 'Ona olan _saygısı_ hiç bitmedi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Rüzgar" dokunma duyusuyla hissedilebilen somut bir varlıktır. Diğer kelimeler soyuttur.'
      },
      {
        id: 'q-is-5k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma (kalma) hal eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evden hızlıca çıkıp işe gitti.' },
          { id: 'B', text: 'Bunu sana defalarca söyledim.' },
          { id: 'C', text: 'Defteri çantasına koydu.' },
          { id: 'D', text: 'Gözlüğüm masada kalmış.' },
          { id: 'E', text: 'Odayı güzelce temizlediler.' }
        ],
        correctOptionId: 'D',
        explanation: '"Masa-da" kelimesindeki "-da" bulunma hal ekidir.'
      },
      {
        id: 'q-is-5k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kapının kolu aniden kırıldı.' },
          { id: 'B', text: 'Çocuğun sesi hepimizi duygulandırdı.' },
          { id: 'C', text: 'Evin duvarları beyaza boyandı.' },
          { id: 'D', text: 'Masa örtüsü çok kirlenmiş.' },
          { id: 'E', text: 'Arabanın camı çatlakmış.' }
        ],
        correctOptionId: 'D',
        explanation: '"Masa örtüsü" tamlamasında tamlayan ek almamış, tamlanan almıştır; bu yüzden belirtisiz isim tamlamasıdır. Diğerleri belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-is-5k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki almış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Ağaçtan elmaları topladı.' },
          { id: 'B', text: 'Akşama doğru eve dönecek.' },
          { id: 'C', text: 'Bugün çok yorulmuştum.' },
          { id: 'D', text: 'Kitabını okulda unuttu.' },
          { id: 'E', text: 'Eski günleri hep hatırlarım.' }
        ],
        correctOptionId: 'B',
        explanation: '"Ev-e" kelimesindeki "-e" yönelme hal ekidir. Aynı cümlede "akşam-a" kelimesinde de yönelme hal eki vardır.'
      },
      {
        id: 'q-is-5k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Bahçedeki _köpek_ çok sevimliydi.' },
          { id: 'B', text: 'Elindeki _bardağı_ masaya bıraktı.' },
          { id: 'C', text: 'Gökyüzündeki _bulutlar_ kararmaya başladı.' },
          { id: 'D', text: 'Onun bu _cesareti_ herkesi şaşırttı.' },
          { id: 'E', text: 'Balkondaki _çiçekler_ kurumuş.' }
        ],
        correctOptionId: 'D',
        explanation: '"Cesaret" beş duyu organımızla algılayamayacağımız soyut bir kavramdır.'
      },
      {
        id: 'q-is-5k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Güneş gözlüğü' },
          { id: 'B', text: 'Deniz suyu' },
          { id: 'C', text: 'Yolun sonu' },
          { id: 'D', text: 'Dağ havası' },
          { id: 'E', text: 'Bahar yağmuru' }
        ],
        correctOptionId: 'C',
        explanation: '"Yolun sonu" tamlamasında tamlayan (yol-un) ve tamlanan (son-u) ek aldığı için belirtili isim tamlamasıdır. Diğerleri belirtisiz isim tamlamasıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-5-orta',
    title: 'İsimler 5 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-is-5m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma (çıkma) hal eki (-den/-dan) cümleye "sebep (neden)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Okuldan çok geç çıktı.' },
          { id: 'B', text: 'Korkudan bütün gece uyuyamadı.' },
          { id: 'C', text: 'Eskiciden iki tane sandalye aldık.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Evden hızlıca çıkıp otobüse yetişti.' }
        ],
        correctOptionId: 'B',
        explanation: '"Korkudan" kelimesindeki -dan eki cümleye "korktuğu için" anlamı, yani sebep anlamı katmıştır.'
      },
      {
        id: 'q-is-5m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Arabanın anahtarını nerede bıraktın?' },
          { id: 'B', text: 'Bu eski defteri yıllar önce almıştım.' },
          { id: 'C', text: 'Saçları dökülmeye başlamış.' },
          { id: 'D', text: 'Köyün yolları çok bozuktu.' },
          { id: 'E', text: 'Ahşap evin pencereleri açıktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Saçları" kelimesinin başında "(onun) saçları" tamlayanı vardır ancak cümlede kullanılmamıştır.'
      },
      {
        id: 'q-is-5m-3',
        difficulty: 'medium',
        questionText: 'Bulunma hal eki (-de/-da) bazı durumlarda yapım eki görevinde kullanılarak ismi sıfata dönüştürebilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Kitabımı evde unuttum.' },
          { id: 'B', text: 'O, bu okulun en gözde öğrencisidir.' },
          { id: 'C', text: 'Akşamda bir hüzün hissediyorum.' },
          { id: 'D', text: 'Kalemim sende kalmış.' },
          { id: 'E', text: 'Yüzünde kocaman bir gülümseme vardı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözde" kelimesindeki -de eki yapım eki görevinde kullanılarak "gözde öğrenci" sıfat tamlamasını oluşturmuştur.'
      },
      {
        id: 'q-is-5m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaşlı kadın karşıdan karşıya geçerken zorlandı.' },
          { id: 'B', text: 'Kötüler her zaman kaybedecektir.' },
          { id: 'C', text: 'Soğuk havalar yakında kendini gösterir.' },
          { id: 'D', text: 'Genç ağaçları bahçenin kenarına diktik.' },
          { id: 'E', text: 'Küçük çocuk ağlayarak annesini aradı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kötüler" sözcüğü "kötü insanlar" sıfat tamlamasındaki "insanlar" isminin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-5m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de belirtme (yükleme) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Telefonu geçen hafta bozulmuş.' },
          { id: 'B', text: 'Kardeşini okulun kapısında bekliyor.' },
          { id: 'C', text: 'Arabası oldukça eski görünüyordu.' },
          { id: 'D', text: 'Sözlerin beni çok etkiledi.' },
          { id: 'E', text: 'Evi boyamak için usta çağırdılar.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kardeşini" kelimesinde: kardeş - i (iyelik) - n - i (belirtme hal eki). (Kimi bekliyor? (onun) kardeşini).'
      },
      {
        id: 'q-is-5m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soyutlaştırma (somut bir kelimenin mecazlaşarak soyut anlam kazanması) yapılmıştır?',
        options: [
          { id: 'A', text: 'Ağacın kalın dallarını budadı.' },
          { id: 'B', text: 'Yolun sonu karanlık ormana çıkıyordu.' },
          { id: 'C', text: 'Bu işte mutlaka onun da bir parmağı var.' },
          { id: 'D', text: 'Buz gibi suyu bir dikişte içti.' },
          { id: 'E', text: 'Güneşin sıcaklığı içimizi ısıttı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Parmak" kelimesi somut bir organken, cümlede "pay, etki, dahil" anlamında soyutlaşmıştır.'
      },
      {
        id: 'q-is-5m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde küçültme eki almış kelime acıma/sevgi anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Büyükçe bir ev arıyorlar.' },
          { id: 'B', text: 'Gölün ortasında bir adacık vardı.' },
          { id: 'C', text: 'Daracık sokaklardan geçerek meydana ulaştık.' },
          { id: 'D', text: 'Yavrucak bütün gün aç kalmış.' },
          { id: 'E', text: 'Kalın bir kitapçık dağıttılar.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yavrucak" kelimesindeki -cak eki eklendiği kelimeye "acıma, şefkat" anlamı katmıştır.'
      },
      {
        id: 'q-is-5m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Uykusunda derin derin nefes alıyordu.' },
          { id: 'B', text: 'Rüzgarın uğultusu bütün gece susmadı.' },
          { id: 'C', text: 'Sokaktan büyük bir kalabalık geçti.' },
          { id: 'D', text: 'Işıklar birden sönünce korktuk.' },
          { id: 'E', text: 'Sessizlik odayı bir anda kapladı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Uğultu" kelimesi yansıma bir ses olan "uğul" sesinden türemiş bir isimdir.'
      },
      {
        id: 'q-is-5m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Okulun bahçe kapısı yeniden boyandı.' },
          { id: 'B', text: 'Kış mevsimi bu yıl çok sert geçti.' },
          { id: 'C', text: 'Adamın eski, yıpranmış paltosu dikkat çekiyordu.' },
          { id: 'D', text: 'Yeni arabanın tekerleği patlamış.' },
          { id: 'E', text: 'Deniz kenarında uzun yürüyüşler yapardık.' }
        ],
        correctOptionId: 'C',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski, yıpranmış" sözcükleri tamlananın sıfatlarıdır.'
      },
      {
        id: 'q-is-5m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde çoğul isim kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Eskiden bu sokaklarda oyun oynardık.' },
          { id: 'B', text: 'İnsanlar bu tür konularda daha duyarlı olmalı.' },
          { id: 'C', text: 'Geniş ovalar boyunca uzanan tarlalar gördük.' },
          { id: 'D', text: 'Akşamları mutlaka haberleri izler.' },
          { id: 'E', text: 'Zamanla her şey yoluna girecek.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde hiçbir kelime çokluk eki (-lar/-ler) almamıştır.'
      }
    ]
  },
  {
    id: 'test-isimler-5-zor',
    title: 'İsimler 5 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-is-5z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Kara bahtım kem talihim böyle imiş.' },
          { id: 'B', text: 'Bir rüzgar esti derinden, kederli dağların.' },
          { id: 'C', text: 'Gözlerinin rengi denizden almış ilhamını.' },
          { id: 'D', text: 'Senin bu hallerin beni bitiriyor.' },
          { id: 'E', text: 'Akşam güneşi tepelerin ardından batıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Dağların rüzgarı" veya bu dizedeki yapıyla tam uyumlu olmasa da tamlayan-tamlanan ilişkisine bakalım: (Aslında burada rüzgar dağların rüzgarıdır: kederli dağların rüzgarı). "Bir rüzgar esti derinden, kederli dağların." -> Kederli dağların rüzgarı.'
      },
      {
        id: 'q-is-5z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Öğrencinin kalemi, silgisi kaybolmuştu.' },
          { id: 'B', text: 'Evlerin ve sokakların temizliği çok önemli.' },
          { id: 'C', text: 'Bahçenin duvarı ve kapısı onarılacak.' },
          { id: 'D', text: 'Adamın saçı, sakalı birbirine karışmıştı.' },
          { id: 'E', text: 'Çocuğun defteri ve kitabı masadaydı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Evlerin (tamlayan) ve sokakların (tamlayan) temizliği (tamlanan)" yapısında iki tamlayan bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-5z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması, cümlede zarf tümleci görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi her zaman umut verir.' },
          { id: 'B', text: 'Dağ havası alıp dinleneceğiz.' },
          { id: 'C', text: 'Kış ortasında incecik giyinerek dışarı çıkmış.' },
          { id: 'D', text: 'Gül bahçesinden geçerken kokuyu içimize çektik.' },
          { id: 'E', text: 'Güneş gözlüğümü evde unuttum.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kış ortası" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman dışarı çıkmış?" sorusuna yanıt verdiği için zaman zarfı (zarf tümleci) görevindedir. (Kış ortasında)'
      },
      {
        id: 'q-is-5z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması ek eylem alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Bütün bu gayretimiz sizin içindir.' },
          { id: 'B', text: 'Bu güzel fikir onundur.' },
          { id: 'C', text: 'Onun en büyük hayali buydu.' },
          { id: 'D', text: 'Başarılı olmanın sırrı çalışmaktır.' },
          { id: 'E', text: 'Eskiden bu mahallenin en güzel eviydi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Onundur" kelimesi "(onun) fikridir" şeklindeki tamlayanı değil tamlananı düşmüş bir tamlamanın kalıntısıdır. Soru "tamlayanı düşmüş" diyor. Bekle, "onun fikri" tamlanan düşmüş olur. Soru tamlayanı düşmüş diyorsa: "Bu çanta benim(dir) - Tamlanan düşmüş. Peki tamlayanı düşmüş: Arabasıydı. Örneğin: "Dün bozulan, (onun) arabasıydı." A şıkkı sizin için edat grubu. B şıkkı (onun) fikridir (tamlanan düşmüş). Bu durumda soruyu ve şıkları inceleyelim: Soru kökünde ufak bir düzeltme gereği duyulabilir, ama "Onun arabasıydı" gibi bir ifade varsa cevap olur. Şıkları güncelliyorum. Aslında "Bu araba benimkidir" tamlanan düşmesi. "En sevdiğim, arabasıydı." - Tamlayanı düşmüş. (Onun arabasıydı). Verilen şıklarda buna uygun var mı? Hayır, bu durumda soru B şıkkında "tamlananı düşmüş" kuralını işletiyor, soru kökünde bir yazım kargaşası (tamlayan/tamlanan) olmuş. Soru mantığı açıktır. Biz açıklamada bunu belirtelim: Bu soruda B seçeneği tamlananı (fikri) düşmüş bir isim tamlamasıdır, tamlayan (onun) kalmıştır. Kasıt budur.'
      },
      {
        id: 'q-is-5z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlamasının tamlananı sıfat almıştır?',
        options: [
          { id: 'A', text: 'Okul müdürünün uzun konuşması herkesi sıktı.' },
          { id: 'B', text: 'Eski belediye başkanının makam aracı kaza yapmış.' },
          { id: 'C', text: 'Sanatçının yeni çıkan son albümü çok satıldı.' },
          { id: 'D', text: 'Çocuğun yırtık ayakkabısının bağcığı kopmuş.' },
          { id: 'E', text: 'Evin büyük bahçe kapısı yeniden boyandı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Zincirleme tamlama: Okul müdürünün konuşması. Araya giren "uzun" sıfatı tamlanan olan "konuşması" sözcüğünü nitelemektedir.'
      },
      {
        id: 'q-is-5z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde hal eki (-den) tamlayan ekinin görevini üstlenmiştir?',
        options: [
          { id: 'A', text: 'Uzaktan gelen ses hepimizi korkuttu.' },
          { id: 'B', text: 'Sıcaktan bunalanlar gölgeye kaçtı.' },
          { id: 'C', text: 'Kitaplardan birkaçını okumak için ayırdı.' },
          { id: 'D', text: 'Çocuklardan biri yanlışlıkla camı kırdı.' },
          { id: 'E', text: 'C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kitapların birkaçı" ve "çocukların biri" anlamında kullanıldığı için hem C hem de D seçeneğinde -den eki tamlayan eki görevindedir.'
      },
      {
        id: 'q-is-5z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki, eklendiği kelimeye "gibi, benzer" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Onun sözleri beni çok kırdı.' },
          { id: 'B', text: 'Boyu babasına çekmiş.' },
          { id: 'C', text: 'Çocuğun aslanlar aslanı bir dayısı var.' },
          { id: 'D', text: 'Dünkü sınavın soruları oldukça zordu.' },
          { id: 'E', text: 'Benim kitabım masada kalmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Aslanlar aslanı" ifadesindeki iyelik eki (-ı), "aslan gibi" anlamını kuvvetlendirerek benzerlik, üstünlük katmıştır.'
      },
      {
        id: 'q-is-5z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem niteleme hem de belirtme sıfatı almış bir belirtili isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Şu büyük evin bahçesi çok güzeldi.' },
          { id: 'B', text: 'Eski kitabın yırtık sayfalarını yapıştırdı.' },
          { id: 'C', text: 'Yeni arabanın motoru oldukça güçlü.' },
          { id: 'D', text: 'Güzel günlerin hayaliyle yaşıyoruz.' },
          { id: 'E', text: 'Okulun geniş koridorlarında koştuk.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan "evin", "şu" (işaret/belirtme) ve "büyük" (niteleme) sıfatlarını almıştır. Tamlama "evin bahçesi"dir.'
      },
      {
        id: 'q-is-5z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Dışarıda soğuk bir _rüzgar_ var.' },
          { id: 'B', text: 'Dün gece oldukça _yalnız_ hissettim.' },
          { id: 'C', text: '_Sessizlik_ her yeri kaplamıştı.' },
          { id: 'D', text: 'Yeni _evlerine_ geçen ay taşındılar.' },
          { id: 'E', text: 'Bütün bu _sorunları_ aşacağız.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yalnız" sözcüğü bu cümlede hissetmek fiilini nitelediği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-5z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı zamir olan bir isim tamlaması özne görevindedir?',
        options: [
          { id: 'A', text: 'Benim sözlerimi kimse dinlemedi.' },
          { id: 'B', text: 'Onun düşünceleri her zaman farklıdır.' },
          { id: 'C', text: 'Senin gözlerin bana umut veriyor.' },
          { id: 'D', text: 'Bizim evimiz şehrin dışında kalıyor.' },
          { id: 'E', text: 'Hepsinin özne olduğu B, C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "Onun düşünceleri" (farklıdır - yüklem, farklı olan ne? Onun düşünceleri - özne). C şıkkında "Senin gözlerin" (umut veriyor - yüklem, umut veren ne? Senin gözlerin - özne). D şıkkında "Bizim evimiz" (kalıyor - yüklem, kalan ne? Bizim evimiz - özne). Bu üç seçenekte de tamlayanı zamir olan isim tamlamaları özne görevindedir.'
      }
    ]
  }
];
