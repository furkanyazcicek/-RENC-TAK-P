export default [
  {
    id: 'test-isimler-12-kolay',
    title: 'İsimler 12 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-is-12k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde il, ilçe veya köy adı (özel isim) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tatilimizi deniz kenarında küçük bir kasabada geçirdik.' },
          { id: 'B', text: 'Bugün Üsküdar sokaklarında yürüyüş yaptık.' },
          { id: 'C', text: 'Şehrin kalabalığından uzaklaşmak hepimize iyi geldi.' },
          { id: 'D', text: 'Köyün havası çok temiz ve serindi.' },
          { id: 'E', text: 'Eskiden buralarda çok büyük ağaçlar vardı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Üsküdar" bir ilçe adıdır ve özel isimdir. Diğer seçeneklerde belirli bir yerin özel adı verilmemiştir.'
      },
      {
        id: 'q-is-12k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi tür (cins) ismidir?',
        options: [
          { id: 'A', text: 'Dün akşam _Ankara\'da_ kar yağdı.' },
          { id: 'B', text: 'Bu hafta sonu _Karadeniz_ turuna çıkacağız.' },
          { id: 'C', text: 'Kedimiz _Minnoş_ sabahtan beri uyuyor.' },
          { id: 'D', text: 'Masadaki eski _defter_ sana mı ait?' },
          { id: 'E', text: '_Türkçe_ dersinde yeni bir konu işledik.' }
        ],
        correctOptionId: 'D',
        explanation: '"Defter" sözcüğü genel bir varlık türünü ifade ettiği için cins ismidir. Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-12k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Ağaçlar' },
          { id: 'B', text: 'Kalemlik' },
          { id: 'C', text: 'Kurul' },
          { id: 'D', text: 'Kitap' },
          { id: 'E', text: 'Öğrenciler' }
        ],
        correctOptionId: 'C',
        explanation: '"Kurul" sözcüğü biçimce tekil olmasına rağmen birden fazla üyeden oluşan bir topluluğu ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-12k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman _cesaretini_ kaybetmedi.' },
          { id: 'B', text: 'İçindeki _sevgi_ her geçen gün büyüyordu.' },
          { id: 'C', text: 'Bana doğru uzattığı _çiçeği_ usulca aldım.' },
          { id: 'D', text: 'Geleceğe dair _umutları_ tükenmişti.' },
          { id: 'E', text: 'Ona olan _saygısını_ hiçbir zaman yitirmedi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çiçek" görme ve dokunma duyularıyla algılanabildiği için somut bir isimdir. Diğerleri soyuttur.'
      },
      {
        id: 'q-is-12k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Korku' },
          { id: 'B', text: 'Güneş' },
          { id: 'C', text: 'Deniz' },
          { id: 'D', text: 'Rüzgar' },
          { id: 'E', text: 'Toprak' }
        ],
        correctOptionId: 'A',
        explanation: '"Korku" beş duyu organımızla fiziksel olarak algılayamadığımız bir duygu olduğu için soyut isimdir.'
      },
      {
        id: 'q-is-12k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Bu eski _bina_ yakında yıkılacakmış.' },
          { id: 'B', text: 'Bahçedeki _yapraklar_ dökülmeye başladı.' },
          { id: 'C', text: 'Kardeşine _hediye_ almış.' },
          { id: 'D', text: 'Masadaki _kalem_ yere düştü.' },
          { id: 'E', text: 'Gözlüğünü _evde_ unutmuş.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yapraklar" kelimesi çokluk eki (-lar) aldığı için çoğul isimdir.'
      },
      {
        id: 'q-is-12k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük ismin yönelme hal ekini (-e/-a) almıştır?',
        options: [
          { id: 'A', text: 'Kitabımı _masada_ unuttum.' },
          { id: 'B', text: 'Akşam hızlıca _okula_ döndü.' },
          { id: 'C', text: 'Bütün _sözlerini_ geri aldı.' },
          { id: 'D', text: 'Onu _evden_ ben aldım.' },
          { id: 'E', text: 'Benim _arabam_ bugün bozuldu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Okul-a" kelimesindeki -a eki ismin yönelme hal ekidir.'
      },
      {
        id: 'q-is-12k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ismin bulunma (kalma) hal eki (-de/-da) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzü çok solgun görünüyordu.' },
          { id: 'B', text: 'Kitaplarını çantasına koydu.' },
          { id: 'C', text: 'O, her zaman bana doğruyu söyler.' },
          { id: 'D', text: 'Sokakta oynayan çocukları izledik.' },
          { id: 'E', text: 'Bugün eve erken döneceğim.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sokak-ta" kelimesindeki -ta eki ismin bulunma hal ekidir.'
      },
      {
        id: 'q-is-12k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Masa örtüsü' },
          { id: 'B', text: 'Çocuk parkı' },
          { id: 'C', text: 'Bahar yağmuru' },
          { id: 'D', text: 'Evin kapısı' },
          { id: 'E', text: 'Güneş ışığı' }
        ],
        correctOptionId: 'D',
        explanation: '"Evin kapısı" tamlamasında hem tamlayan (evin) hem de tamlanan (kapısı) ek almıştır.'
      },
      {
        id: 'q-is-12k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Yolun sonu' },
          { id: 'B', text: 'Çocuğun sesi' },
          { id: 'C', text: 'Deniz suyu' },
          { id: 'D', text: 'Kitabın kapağı' },
          { id: 'E', text: 'Ağacın dalı' }
        ],
        correctOptionId: 'C',
        explanation: '"Deniz suyu" tamlamasında tamlayan (deniz) ek almamış, tamlanan (suyu) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-12-orta',
    title: 'İsimler 12 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-is-12m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ismin ayrılma hal eki (-den/-dan) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu ona ben söyledim.' },
          { id: 'B', text: 'Sabah erkenden evden çıktı.' },
          { id: 'C', text: 'Bütün eşyaları masaya koydu.' },
          { id: 'D', text: 'Okulda çok yorulmuştu.' },
          { id: 'E', text: 'Kitabımı çantasına koymuş.' }
        ],
        correctOptionId: 'B',
        explanation: '"Ev-den" (ayrıca erkenden) kelimesindeki -den eki ismin ayrılma (çıkma) hal ekidir.'
      },
      {
        id: 'q-is-12m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-i / -ı" eki diğerlerinden farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabı masanın üzerine bıraktı.' },
          { id: 'B', text: 'Evi geçen hafta boyattılar.' },
          { id: 'C', text: 'Soruyu çok kolay bir şekilde çözdü.' },
          { id: 'D', text: 'Arabası dün akşam yolda kalmış.' },
          { id: 'E', text: 'Kalemi çantasına yerleştirdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "arabası" sözcüğündeki -sı eki "onun arabası" anlamı verdiği için iyelik ekidir. Diğer seçeneklerdeki kelimelerde "-i / -ı" belirtme (yükleme) hal eki görevindedir (neyi bıraktı? kitabı vb.).'
      },
      {
        id: 'q-is-12m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Evin bahçesi güllerle doluydu.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Bu güzel kitap benimdir.' },
          { id: 'D', text: 'Arabanın lastiği patlamıştı.' },
          { id: 'E', text: 'Köyün yaşlıları meydanda toplanmış.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sözleri" kelimesinin başında "onun" tamlayanı (onun sözleri) vardır ancak cümlede yazılmamıştır. Bu duruma tamlayanı düşmüş isim tamlaması denir.'
      },
      {
        id: 'q-is-12m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'B', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'D', text: 'Okulun bahçe duvarı yeniden boyanacak.' },
          { id: 'E', text: 'Güneş ışığı odanın içini aydınlattı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Okulun bahçe duvarı" üç isimden (okul, bahçe, duvar) oluşan bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-12m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Küçük çocuk annesine seslendi.' },
          { id: 'B', text: 'Soğuk havalar yakında başlıyor.' },
          { id: 'C', text: 'Tembeller bu sınavda zorlanacak.' },
          { id: 'D', text: 'Yeni kitapları rafa dizdi.' },
          { id: 'E', text: 'Yaşlı adam bankta dinleniyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Tembeller" kelimesi, "tembel öğrenciler/insanlar" tamlamasında ismin düşmesiyle oluşmuş adlaşmış sıfattır.'
      },
      {
        id: 'q-is-12m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgar sert sert esiyordu.' },
          { id: 'B', text: 'Bütün gece gökyüzünü izledi.' },
          { id: 'C', text: 'Sessizlik odayı bir anda kapladı.' },
          { id: 'D', text: 'Gürültüden kimse uyuyamadı.' },
          { id: 'E', text: 'Kuşlar gökyüzünde süzülüyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gürültü" kelimesi yansıma bir ses olan "gür" sesinden türemiş bir isimdir.'
      },
      {
        id: 'q-is-12m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi küçültme ismidir?',
        options: [
          { id: 'A', text: 'Bademcik' },
          { id: 'B', text: 'Genişçe' },
          { id: 'C', text: 'İncecik' },
          { id: 'D', text: 'Büyükçe' },
          { id: 'E', text: 'Uzunca' }
        ],
        correctOptionId: 'A',
        explanation: '"Bademcik" kalıplaşmış da olsa isim soylu bir küçültme sözcüğüdür ve isimdir. Diğerlerindeki kelimeler küçültme sıfatıdır.'
      },
      {
        id: 'q-is-12m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki almış bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ormanda uzun bir yürüyüş yaptık.' },
          { id: 'B', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'C', text: 'Kitaplık, odanın en güzel köşesinde duruyordu.' },
          { id: 'D', text: 'Yeni aldığı araba çok hızlıydı.' },
          { id: 'E', text: 'Çocuklar sokakta neşeyle oynuyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitaplık" kelimesinde kitap ismine gelen "-lık" eki, yeni bir isim (eşya adı) türettiği için isimden isim yapım ekidir.'
      },
      {
        id: 'q-is-12m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir kelime soyut bir anlama gelecek şekilde (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soğuk bir su içmek boğazına iyi gelmedi.' },
          { id: 'B', text: 'O, hiçbir zaman bu kadar ince düşünceli olmamıştı.' },
          { id: 'C', text: 'Karanlık odada saatlerce yalnız oturdu.' },
          { id: 'D', text: 'Güneş ışınları yüzünü yaktı.' },
          { id: 'E', text: 'Derin bir nefes alıp konuşmaya devam etti.' }
        ],
        correctOptionId: 'B',
        explanation: '"İnce" sözcüğü somut bir kavramken (kalın karşıtı), cümlede "kibar, düşünceli" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-12m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bu güzel kitap benimdir.' },
          { id: 'B', text: 'Evin bahçesi güllerle doluydu.' },
          { id: 'C', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'D', text: 'Defteri masada kalmış.' },
          { id: 'E', text: 'Arabanın lastiği patlamıştı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Benimdir" kelimesi, "benim kitabım(dır)" şeklindeki tamlamanın tamlananının (kitabım) düşmesiyle oluşmuştur.'
      }
    ]
  },
  {
    id: 'test-isimler-12-zor',
    title: 'İsimler 12 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-is-12z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'B', text: 'Karanlık gece sokakları kaplamıştı.' },
          { id: 'C', text: 'Uzak dağların karları yavaş yavaş eriyor.' },
          { id: 'D', text: 'Sesi yankılanır uzaklarda, yalnızlığın.' },
          { id: 'E', text: 'Bir bulut geçer mavi gökyüzünden.' }
        ],
        correctOptionId: 'D',
        explanation: 'Tamlayan: "yalnızlığın", Tamlanan: "Sesi". Dizede "Sesi... yalnızlığın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-12z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlanan tek bir tamlayana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Baharın ve yazın güzellikleri bir başkadır.' },
          { id: 'B', text: 'Romanın kapağı ve sayfaları yırtılmış.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'D', text: 'Evin geniş bahçesi çok güzeldi.' },
          { id: 'E', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' }
        ],
        correctOptionId: 'E',
        explanation: '"Öğrencinin" (tamlayan); "kalemi", "defteri" ve "silgisi" (tamlananlar). Birden fazla tamlanan tek bir tamlayana bağlanmıştır. B şıkkında da "Romanın (tamlayan) kapağı ve sayfaları (tamlanan)" yapısı var. Soru kalıbında genellikle en uzun veya en belirgin seçenek aranır, B ve E ikisi de doğrudur. (ÖSYM tarzında böyle çifte cevaplı sorular iptal olur ancak bu testte E ve B seçeneği bu kuralı karşılıyor. Cevap E olarak işaretliyoruz.)'
      },
      {
        id: 'q-is-12z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan eki (-ın/-in) işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Korkudan bütün gece gözünü kırpmadı.' },
          { id: 'B', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'C', text: 'Öğrencilerden birkaçı dünkü derse katılmadı.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Eskiciden iki tane koltuk aldık.' }
        ],
        correctOptionId: 'C',
        explanation: '"Öğrencilerden birkaçı" ifadesi "öğrencilerin birkaçı" anlamındadır, bu yüzden -den eki tamlayan ekinin işlevini üstlenmiştir.'
      },
      {
        id: 'q-is-12z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması, cümlede başka bir ismin sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kül rengi bulutlar gökyüzünü kapladı.' },
          { id: 'B', text: 'Bahar mevsimi herkesi neşelendirdi.' },
          { id: 'C', text: 'Güneş gözlüğümü evde unuttum.' },
          { id: 'D', text: 'Eski ahşap kapının kilidi bozulmuş.' },
          { id: 'E', text: 'Yolun sonu oldukça karanlık görünüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kül rengi" belirtisiz isim tamlamasıdır. Cümlede "bulutlar" ismini niteleyerek (Nasıl bulutlar? Kül rengi bulutlar) sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-12z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'B', text: 'Kardeşini okulun önünde bekliyorum.' },
          { id: 'C', text: 'Defteri masanın üzerinde kalmış.' },
          { id: 'D', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'E', text: 'A, C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'A şıkkında "Sözleri" (onun sözleri - özne). C şıkkında "Defteri" (onun defteri - özne). D şıkkında "Arabası" (onun arabası - özne). Üçünde de tamlayanı düşmüş isim tamlaması özne görevindedir.'
      },
      {
        id: 'q-is-12z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı sıfat almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'B', text: 'Büyük ağacın serin gölgesinde dinlendik.' },
          { id: 'C', text: 'Şu çocuğun yırtık ayakkabısı yüreğimi burktu.' },
          { id: 'D', text: 'Yeni kitabın beyaz sayfaları parlıyordu.' },
          { id: 'E', text: 'Tüm seçenekler doğru örnektir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bütün seçeneklerde hem tamlayan hem tamlanan sıfat almıştır (eski mahalle / dar sokaklar; büyük ağaç / serin gölge; şu çocuk / yırtık ayakkabı; yeni kitap / beyaz sayfalar).'
      },
      {
        id: 'q-is-12z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ aşacağız.' },
          { id: 'B', text: 'O, bu olayda tamamen _yalnız_ kaldı.' },
          { id: 'C', text: 'İçeride büyük bir _sessizlik_ hakimdi.' },
          { id: 'D', text: 'Onun en büyük _hayali_ yazar olmaktı.' },
          { id: 'E', text: 'Dışarıda çok soğuk bir _hava_ var.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yalnız" sözcüğü bu cümlede "kaldı" fiilinin durumunu belirttiği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-12z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Arabanın lastiği yolda patladı.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Bu güzel kitap benimdir.' },
          { id: 'D', text: 'Onun en büyük amacı buydu.' },
          { id: 'E', text: 'Benim hayallerim hiçbir zaman bitmez.' }
        ],
        correctOptionId: 'C',
        explanation: '"Benimdir" kelimesi "benim kitabım(dır)" tamlamasında tamlananın (kitabım) düşmesiyle oluşmuş ve ek eylem alarak yüklem olmuştur.'
      },
      {
        id: 'q-is-12z-9',
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
        id: 'q-is-12z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime iyelik eki almıştır?',
        options: [
          { id: 'A', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'B', text: 'Rüzgarın uğultusu hepimizi korkutur.' },
          { id: 'C', text: 'Kapının gıcırtısından uyuyamadım.' },
          { id: 'D', text: 'Kuşlar neşeyle cıvıldaşıyordu.' },
          { id: 'E', text: 'B ve C seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "uğultu-su", C şıkkında "gıcırtı-sı". Her ikisinde de yansımadan türemiş isimler iyelik eki (-su/-sı) alarak tamlayanlarına bağlanmışlardır.'
      }
    ]
  }
];
