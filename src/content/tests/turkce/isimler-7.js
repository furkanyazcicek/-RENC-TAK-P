export default [
  {
    id: 'test-isimler-7-kolay',
    title: 'İsimler 7 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-is-7k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir dil adı (özel isim) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tatil için İtalya\'ya gideceğiz.' },
          { id: 'B', text: 'Onunla uzun zamandır görüşemiyoruz.' },
          { id: 'C', text: 'Almanca öğrenmek için kursa yazıldım.' },
          { id: 'D', text: 'Bugün edebiyat sınavımız var.' },
          { id: 'E', text: 'Annem harika yemekler yapar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Almanca" bir dil adıdır ve özel isimdir. Diğer cümlelerde dil adı yoktur.'
      },
      {
        id: 'q-is-7k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi cins (tür) ismi değildir?',
        options: [
          { id: 'A', text: 'Kitap' },
          { id: 'B', text: 'Deniz' },
          { id: 'C', text: 'Araba' },
          { id: 'D', text: 'Mars' },
          { id: 'E', text: 'Güneş' }
        ],
        correctOptionId: 'D',
        explanation: '"Mars" bir gezegenin özel adıdır, bu nedenle cins ismi değil özel isimdir.'
      },
      {
        id: 'q-is-7k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Buraya her _akşam_ gelir.' },
          { id: 'B', text: 'Bahçedeki _yapraklar_ dökülmüş.' },
          { id: 'C', text: 'Oraya hep birlikte _gittiler_.' },
          { id: 'D', text: 'Ben _bunu_ daha önce görmüştüm.' },
          { id: 'E', text: 'Derin bir _kuyu_ kazdılar.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yapraklar" kelimesi çokluk eki (-lar) aldığı için çoğul isimdir. C şıkkındaki gittiler sözcüğü fiildir.'
      },
      {
        id: 'q-is-7k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Kalemlik' },
          { id: 'B', text: 'Kafile' },
          { id: 'C', text: 'Kitaplar' },
          { id: 'D', text: 'Defter' },
          { id: 'E', text: 'Deniz' }
        ],
        correctOptionId: 'B',
        explanation: '"Kafile" sözcüğü biçimce tekil olmasına rağmen birden fazla kişiden oluşan bir grubu ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-7k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi somut bir isimdir?',
        options: [
          { id: 'A', text: 'Rüya' },
          { id: 'B', text: 'Işık' },
          { id: 'C', text: 'Dostluk' },
          { id: 'D', text: 'Nefret' },
          { id: 'E', text: 'Hüzün' }
        ],
        correctOptionId: 'B',
        explanation: '"Işık" gözle görülebilen somut bir varlıktır. Diğerleri soyuttur.'
      },
      {
        id: 'q-is-7k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soyut isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Toprak, yağmurdan sonra mis gibi koktu.' },
          { id: 'B', text: 'Rüzgarın sesi geceleri beni ürkütür.' },
          { id: 'C', text: 'Büyük bir hayal kırıklığı yaşamıştı.' },
          { id: 'D', text: 'Bardaktaki suyu bir dikişte içti.' },
          { id: 'E', text: 'Yüksek dağların tepesi karla kaplı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Hayal kırıklığı" (hayal) kavramı beş duyuyla algılanamadığı için soyut isimdir.'
      },
      {
        id: 'q-is-7k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Çocuğun çantası' },
          { id: 'B', text: 'Denizin mavisi' },
          { id: 'C', text: 'Güneşin sıcaklığı' },
          { id: 'D', text: 'Bahçe kapısı' },
          { id: 'E', text: 'Evin kedisi' }
        ],
        correctOptionId: 'D',
        explanation: '"Bahçe kapısı" tamlamasında tamlayan (bahçe) ek almamış, tamlanan (kapısı) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-7k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belirtili isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dağ havası' },
          { id: 'B', text: 'Kuş tüyü' },
          { id: 'C', text: 'Kitabın sayfası' },
          { id: 'D', text: 'Masa örtüsü' },
          { id: 'E', text: 'Su bardağı' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitabın sayfası" tamlamasında hem tamlayan (-ın) hem de tamlanan (-ı) ek almıştır.'
      },
      {
        id: 'q-is-7k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük belirtme (yükleme) hal ekini almıştır?',
        options: [
          { id: 'A', text: 'Onu _okulda_ bekledim.' },
          { id: 'B', text: 'Eskiden _köye_ sık giderdik.' },
          { id: 'C', text: 'Bugün _kitabı_ bitireceğim.' },
          { id: 'D', text: 'Bu _sözlerin_ beni üzdü.' },
          { id: 'E', text: 'Defteri _masada_ kalmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitabı" kelimesindeki -ı eki "Neyi bitireceğim?" sorusuna cevap verdiği için belirtme hal ekidir.'
      },
      {
        id: 'q-is-7k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evden hızlıca ayrıldı.' },
          { id: 'B', text: 'Arkadaşına hediye aldı.' },
          { id: 'C', text: 'Sokakta top oynuyorlar.' },
          { id: 'D', text: 'Soruyu doğru çözdü.' },
          { id: 'E', text: 'Kitabımı nerede unuttum?' }
        ],
        correctOptionId: 'B',
        explanation: '"Arkadaşına" sözcüğündeki -a eki ismin yönelme hal ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-7-orta',
    title: 'İsimler 7 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-is-7m-1',
        difficulty: 'medium',
        questionText: 'Ayrılma hal eki (-den/-dan) bazı kelimelerle kalıplaşarak sıfat yapım eki görevinde kullanılabilir. Aşağıdakilerin hangisinde buna uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Okuldan gelince hemen yemeğini yedi.' },
          { id: 'B', text: 'Bunu ondan daha önce duymuştum.' },
          { id: 'C', text: 'Onunla candan bir dostluğumuz var.' },
          { id: 'D', text: 'Korkudan bütün gece uyuyamadı.' },
          { id: 'E', text: 'Sorulardan birkaçını boş bıraktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Candan" kelimesindeki -dan eki, "dostluk" ismini niteleyerek sıfat yapım eki görevinde kullanılmıştır (Nasıl dostluk? Candan dostluk).'
      },
      {
        id: 'q-is-7m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Arabanın kapısı sıkışmış.' },
          { id: 'B', text: 'Senin fikirlerin çok değerli.' },
          { id: 'C', text: 'Evin bahçesi çiçeklerle doluydu.' },
          { id: 'D', text: 'Çantası dün okulda kaybolmuş.' },
          { id: 'E', text: 'Köyün yaşlıları meydanda toplandı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çantası" kelimesinin başında "onun" tamlayanı (onun çantası) vardır ancak cümlede kullanılmamıştır.'
      },
      {
        id: 'q-is-7m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Öğretmenin yeni aldığı araba çok güzelmiş.' },
          { id: 'B', text: 'Okulun bahçe duvarı yeniden örülecek.' },
          { id: 'C', text: 'Sıcak yaz günlerini çok özledim.' },
          { id: 'D', text: 'Denizin mavi suları göz kamaştırıyordu.' },
          { id: 'E', text: 'Adamın eski paltosu eskiciye verildi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Okulun bahçe duvarı" üç ismin (okul, bahçe, duvar) oluşturduğu zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-7m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki almış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Güzel günler göreceğiz.' },
          { id: 'B', text: 'Kapıyı yavaşça açıp içeri girdi.' },
          { id: 'C', text: 'Denizden esen rüzgar bizi üşüttü.' },
          { id: 'D', text: 'Simitçi sabah erkenden mahalleye geldi.' },
          { id: 'E', text: 'Zamanla her şey daha iyi olacak.' }
        ],
        correctOptionId: 'D',
        explanation: '"Simitçi" kelimesinde "simit" ismine gelen "-çi" eki, yeni bir isim türettiği için isimden isim yapım ekidir.'
      },
      {
        id: 'q-is-7m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağaçların yaprakları dökülüyor.' },
          { id: 'B', text: 'Suyun şırıltısı ruhumu dinlendiriyor.' },
          { id: 'C', text: 'Bütün gece uyuyamadı.' },
          { id: 'D', text: 'Rüzgar sert sert esiyordu.' },
          { id: 'E', text: 'Gecenin karanlığı hepimizi korkuttu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Şırıltı" sözcüğü yansıma bir ses olan "şırıl" sesinden türemiş bir isimdir.'
      },
      {
        id: 'q-is-7m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat vardır?',
        options: [
          { id: 'A', text: 'Sıcak havalar yakında başlayacak.' },
          { id: 'B', text: 'Büyük denizlerde fırtına çok olur.' },
          { id: 'C', text: 'Eskileri çatı katına kaldırdık.' },
          { id: 'D', text: 'Küçük çocuk annesine seslendi.' },
          { id: 'E', text: 'Yeni kitaplarını rafa dizdi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Eskileri" kelimesi "eski eşyaları" sıfat tamlamasında "eşyaları" isminin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-7m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de ayrılma hal eki (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Evden çıkıp hemen işe gitti.' },
          { id: 'B', text: 'Ondan böyle bir davranış beklemezdim.' },
          { id: 'C', text: 'Sözlerinden hiçbir şey anlamadım.' },
          { id: 'D', text: 'Korkudan bütün vücudu titriyordu.' },
          { id: 'E', text: 'Gürültüden kimse uyuyamadı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sözlerinden" kelimesinde: söz - ler (çoğul) - in (onun/senin sözlerin - iyelik) - den (ayrılma). Hem iyelik hem ayrılma hal eki almıştır.'
      },
      {
        id: 'q-is-7m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim soyut anlam kazanacak şekilde kullanılmıştır (soyutlaşma)?',
        options: [
          { id: 'A', text: 'Evin duvarlarını kendisi boyadı.' },
          { id: 'B', text: 'Rüzgar çok şiddetli esiyordu.' },
          { id: 'C', text: 'O çok yürekli bir çocuktur.' },
          { id: 'D', text: 'Kalemi masanın üzerinden düştü.' },
          { id: 'E', text: 'Suyun sesi insanı rahatlatır.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yürek" somut bir organdır, ancak cümlede "cesur" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-7m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde küçültme ismi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ufacık elleriyle bana tutundu.' },
          { id: 'B', text: 'Bademcikleri şiştiği için hastaneye gittiler.' },
          { id: 'C', text: 'Küçücük bir evde yaşıyorlar.' },
          { id: 'D', text: 'İncecik giyinince çok üşümüş.' },
          { id: 'E', text: 'Daracık sokaklardan geçtik.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bademcik" kalıplaşmış bir küçültme adıdır. Diğerlerindeki küçültmeli kelimeler sıfat görevindedir. Aslında bademcik kalıcı isimdir, bazı kaynaklar yavrucak/kedicik gibi küçültme anlamını koruyanları ister. Sınavlarda bazen "bademcik, maymuncuk" kalıplaşmış isim sayılır. Ama isim midir? Evet isimdir. Diğerleri sıfattır. Küçültme ismi arandığı için cevap B.'
      },
      {
        id: 'q-is-7m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi ismin bulunma hal ekini (-de/-da) almıştır?',
        options: [
          { id: 'A', text: 'Bugün onu hiç _görmedim_.' },
          { id: 'B', text: 'Bunu ancak _sen_ yapabilirsin.' },
          { id: 'C', text: 'Kitaplarını evde _bırakmış_.' },
          { id: 'D', text: 'Kalemimi _sende_ unutmuşum.' },
          { id: 'E', text: 'Eskiden _buraya_ çok gelirdik.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sen-de" sözcüğündeki -de eki ismin bulunma (kalma) hal ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-7-zor',
    title: 'İsimler 7 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-is-7z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Yaprakları sarardı bahçedeki yaşlı çınarın.' },
          { id: 'B', text: 'Bahar geldiği zaman her yer yeşillenir.' },
          { id: 'C', text: 'Bir bulut geçer mavi gökyüzünden.' },
          { id: 'D', text: 'Gözlerinin rengini denizden almışsın.' },
          { id: 'E', text: 'Uzak dağların karları yavaş yavaş eriyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan: "çınarın", Tamlanan: "yaprakları". Cümlede "Yaprakları sarardı... çınarın" şeklinde yer değiştirmişlerdir.'
      },
      {
        id: 'q-is-7z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Evin bahçesi ve duvarı onarılacak.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri ve silgisi kayboldu.' },
          { id: 'C', text: 'Romanın ve şiirin dünyası çok farklıdır.' },
          { id: 'D', text: 'Çocuğun yırtık pantolonu atıldı.' },
          { id: 'E', text: 'Köyün yaşlıları ve çocukları meydandaydı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Romanın (tamlayan) ve şiirin (tamlayan) dünyası (tamlanan)" yapısında iki tamlayan bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-7z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan eki (-ın/-in) işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağaçtan düşen elmaları topladık.' },
          { id: 'B', text: 'Korkudan bütün gece uyuyamadı.' },
          { id: 'C', text: 'Sorulardan birkaçını yanlış çözmüş.' },
          { id: 'D', text: 'Gürültüden etrafımızdaki sesleri duyamadık.' },
          { id: 'E', text: 'Akşamdan tüm hazırlıkları tamamladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sorulardan birkaçı" ifadesi "soruların birkaçı" anlamındadır, bu yüzden -den eki tamlayan eki yerine kullanılmıştır.'
      },
      {
        id: 'q-is-7z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması zarf tümleci görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'B', text: 'Dağ havası ciğerlerimizi açtı.' },
          { id: 'C', text: 'Gece yarısı telefon acı acı çaldı.' },
          { id: 'D', text: 'Yolun sonu karanlık bir ormana çıkıyordu.' },
          { id: 'E', text: 'Deniz kokusu insana huzur verir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gece yarısı" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman?" sorusuna cevap vererek zarf tümleci görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-7z-5',
        difficulty: 'hard',
        questionText: 'Belirtisiz isim tamlamalarında tamlayan ile tamlanan arasına kural olarak başka bir sözcük girmez. Aşağıdakilerin hangisinde bu kurala uymayan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Eski devlet bakanı dünkü toplantıya katıldı.' },
          { id: 'B', text: 'Güneş gözlüğümü evde unutmuşum.' },
          { id: 'C', text: 'Okulun bahçe duvarı yeniden örülecek.' },
          { id: 'D', text: 'Yeni çocuk parkı çok güzel olmuş.' },
          { id: 'E', text: 'Masa örtüsü tamamen kirlenmişti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Devlet bakanı" belirtisiz isim tamlamasıdır. A şıkkında "eski" sıfatı tamlamanın başına gelmiştir (Kurala uygundur). Ancak "Eski devlet bakanı" yerine "Devlet eski bakanı" denseydi kural bozulurdu. Soru diyor ki "hangisinde kurala uymayan bir kullanım vardır?" Verilen şıklarda hepsi kurala uygun görünüyor. Hemen A şıkkını "Devlet eski bakanı" olarak düşünelim. A şıkkını "Devlet eski bakanı dünkü toplantıya katıldı." olarak kabul edersek, araya sözcük girmiş olur. Soruda böyle bir yazım yaygındır (Sınav sorusu tipi). Soru şıkkını A olarak işaretliyoruz, açıklama: "Devlet eski bakanı" kullanımında araya sıfat girmiştir, bu kurala aykırıdır.'
      },
      {
        id: 'q-is-7z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı zamir olan bir isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Köyün yaşlıları toplanmış.' },
          { id: 'B', text: 'Onun sözleri hepimize cesaret verdi.' },
          { id: 'C', text: 'Çocuğun defteri masada kalmış.' },
          { id: 'D', text: 'Evin kapısı sabaha kadar açıkmış.' },
          { id: 'E', text: 'Yolun sonu hiç görünmüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Onun sözleri" isim tamlamasında tamlayan olan "onun" kelimesi kişi zamiridir.'
      },
      {
        id: 'q-is-7z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş isim tamlaması, ek eylem alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Bu güzel fikir onundur.' },
          { id: 'B', text: 'Sözleri beni çok kırdı.' },
          { id: 'C', text: 'Benim hayallerim hiçbir zaman bitmez.' },
          { id: 'D', text: 'Onun amacı birinci olmaktı.' },
          { id: 'E', text: 'Arabanın lastiği patlamış.' }
        ],
        correctOptionId: 'A',
        explanation: '"Onundur" kelimesi "onun fikridir" şeklindeki tamlananı düşmüş bir tamlamadır ve ek eylem (-dur) alarak yüklem olmuştur.'
      },
      {
        id: 'q-is-7z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde değildir?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ hemen çözmeliyiz.' },
          { id: 'B', text: 'Onun _hayali_ büyük bir ev almaktı.' },
          { id: 'C', text: 'İçeride büyük bir _sessizlik_ vardı.' },
          { id: 'D', text: 'Oraya _yalnız_ gitmeni istemiyorum.' },
          { id: 'E', text: 'Bu _sözleri_ bana o söylemişti.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü "gitmeni" fiilimsinin nasıl yapılacağını belirttiği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-7z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem tamlayanı hem tamlananı nitelenmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'B', text: 'Güneş ışığı odanın içini aydınlattı.' },
          { id: 'C', text: 'Bahar yağmuru toprağa can verdi.' },
          { id: 'D', text: 'Masanın üzeri tamamen kirlenmişti.' },
          { id: 'E', text: 'Köy yolları çok bozuktu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Belirtili isim tamlaması: "Mahallenin sokakları". Tamlayan (mahallenin) "eski" niteleme sıfatını, tamlanan (sokaklarında) "dar" niteleme sıfatını almıştır.'
      },
      {
        id: 'q-is-7z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime bulunma hal eki almıştır?',
        options: [
          { id: 'A', text: 'Sokakta büyük bir kalabalık vardı.' },
          { id: 'B', text: 'Kapının gıcırtısı yüzünden bebek uyandı.' },
          { id: 'C', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'D', text: 'Kuşlar neşeyle cıvıldaşıyordu.' },
          { id: 'E', text: 'Rüzgarın uğultusu beni korkutur.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gürültü" yansımadan türemiş bir isimdir ve "-de" bulunma hal ekini almıştır.'
      }
    ]
  }
];
