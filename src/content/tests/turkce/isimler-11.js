export default [
  {
    id: 'test-isimler-11-kolay',
    title: 'İsimler 11 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-is-11k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim olan bir millet/boy adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tatil için Japonya\'ya gitmeyi planlıyoruz.' },
          { id: 'B', text: 'Bugün İngiliz edebiyatı üzerine bir sunum yaptım.' },
          { id: 'C', text: 'Sınavda Türkçe soruları oldukça kolaydı.' },
          { id: 'D', text: 'Almanya\'da yaşayan akrabalarımız gelecek.' },
          { id: 'E', text: 'Kedimiz Boncuk bütün gün uyudu.' }
        ],
        correctOptionId: 'B',
        explanation: '"İngiliz" bir millet adı olduğu için özel isimdir.'
      },
      {
        id: 'q-is-11k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi cins (tür) ismi değildir?',
        options: [
          { id: 'A', text: 'Bahçedeki eski _ağaç_ nihayet budandı.' },
          { id: 'B', text: 'Dünkü sınavda _sorular_ oldukça basitti.' },
          { id: 'C', text: 'Köpeğimiz _Tarçın_ eve dönünce çok sevindi.' },
          { id: 'D', text: 'Bu eski _masa_ artık kullanılmıyor.' },
          { id: 'E', text: 'Masadaki _kalem_ yere düştü.' }
        ],
        correctOptionId: 'C',
        explanation: '"Tarçın" burada bir hayvana verilen özel isimdir, dolayısıyla cins ismi değildir.'
      },
      {
        id: 'q-is-11k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Kuşlar' },
          { id: 'B', text: 'Kalemlik' },
          { id: 'C', text: 'Takım' },
          { id: 'D', text: 'Kitap' },
          { id: 'E', text: 'Defterler' }
        ],
        correctOptionId: 'C',
        explanation: '"Takım" biçimce tekil olmasına rağmen birden fazla üyeyi barındırdığı için topluluk ismidir.'
      },
      {
        id: 'q-is-11k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onda hiç bitmeyen bir _sevgi_ vardı.' },
          { id: 'B', text: 'Bu olaydan sonra _korkusu_ daha da arttı.' },
          { id: 'C', text: 'Dışarıdan gelen sert _rüzgar_ kapıyı çarptı.' },
          { id: 'D', text: 'Geleceğe dair _umutları_ tükenmişti.' },
          { id: 'E', text: 'Ona olan _saygısını_ hiçbir zaman yitirmedi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Rüzgar" dokunma duyusuyla algılanabildiği için somut bir isimdir. Diğerleri soyuttur.'
      },
      {
        id: 'q-is-11k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Cesaret' },
          { id: 'B', text: 'Bulut' },
          { id: 'C', text: 'Deniz' },
          { id: 'D', text: 'Yağmur' },
          { id: 'E', text: 'Toprak' }
        ],
        correctOptionId: 'A',
        explanation: '"Cesaret" beş duyu organımızla algılanamayan bir özellik olduğu için soyut isimdir.'
      },
      {
        id: 'q-is-11k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'O her zaman çok _sessizdir_.' },
          { id: 'B', text: 'Bütün _insanlar_ bu konuda hemfikirdi.' },
          { id: 'C', text: 'Kardeşine _hediye_ almış.' },
          { id: 'D', text: 'Bu eski _bina_ yıkılacakmış.' },
          { id: 'E', text: 'Evimize yeni bir _televizyon_ aldık.' }
        ],
        correctOptionId: 'B',
        explanation: '"İnsanlar" kelimesi çokluk eki (-lar) aldığı için çoğul isimdir.'
      },
      {
        id: 'q-is-11k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük yönelme hal ekini (-e/-a) almıştır?',
        options: [
          { id: 'A', text: 'Kitabımı _masada_ unuttum.' },
          { id: 'B', text: 'Bütün _sözlerini_ geri aldı.' },
          { id: 'C', text: 'Akşam hızlıca _eve_ döndü.' },
          { id: 'D', text: 'Onu _okuldan_ ben aldım.' },
          { id: 'E', text: 'Benim _arabam_ bugün bozuldu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ev-e" kelimesindeki -e eki yönelme hal ekidir.'
      },
      {
        id: 'q-is-11k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma (kalma) hal eki (-de/-da) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzü çok solgun görünüyordu.' },
          { id: 'B', text: 'Bunu ona ben söyledim.' },
          { id: 'C', text: 'Sokakta oynayan çocukları izledik.' },
          { id: 'D', text: 'Defterini çantasına koydu.' },
          { id: 'E', text: 'Bugün eve erken döneceğim.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sokak-ta" kelimesindeki -ta eki bulunma hal ekidir.'
      },
      {
        id: 'q-is-11k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Çocuk parkı' },
          { id: 'B', text: 'Bahar yağmuru' },
          { id: 'C', text: 'Masa örtüsü' },
          { id: 'D', text: 'Evin kapısı' },
          { id: 'E', text: 'Güneş ışığı' }
        ],
        correctOptionId: 'D',
        explanation: '"Evin kapısı" tamlamasında hem tamlayan (-in) hem de tamlanan (-ı) ek almıştır.'
      },
      {
        id: 'q-is-11k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Yolun sonu' },
          { id: 'B', text: 'Çocuğun sesi' },
          { id: 'C', text: 'Ağacın dalı' },
          { id: 'D', text: 'Kitabın kapağı' },
          { id: 'E', text: 'Deniz suyu' }
        ],
        correctOptionId: 'E',
        explanation: '"Deniz suyu" tamlamasında tamlayan (deniz) ek almamış, tamlanan (suyu) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-11-orta',
    title: 'İsimler 11 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (101-110)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-is-11m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Sözleri beni çok kırdı.' },
          { id: 'B', text: 'Evin bahçesi güllerle doluydu.' },
          { id: 'C', text: 'Bu güzel kitap benimdir.' },
          { id: 'D', text: 'Defteri masada kalmış.' },
          { id: 'E', text: 'Arabanın lastiği patlamıştı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Benimdir" kelimesi, "benim kitabım(dır)" şeklindeki tamlamanın tamlananının (kitabım) düşmesiyle oluşmuştur.'
      },
      {
        id: 'q-is-11m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) cümleye "sebep, neden" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Okuldan gelince yemeğini yedi.' },
          { id: 'B', text: 'Korkudan ne yapacağını bilemedi.' },
          { id: 'C', text: 'Sabahtan beri seni bekliyorum.' },
          { id: 'D', text: 'Gelenlerden birkaçı ayakta kaldı.' },
          { id: 'E', text: 'Şehirden ayrılalı çok oldu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Korkudan" kelimesindeki -dan eki eylemin sebebini (korktuğu için) bildirmektedir.'
      },
      {
        id: 'q-is-11m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de ayrılma hal eki (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Evden hızlıca ayrılıp otobüse bindi.' },
          { id: 'B', text: 'Gürültüden kimse uyuyamadı.' },
          { id: 'C', text: 'Ondan böyle bir davranış beklemezdim.' },
          { id: 'D', text: 'Sözlerinden hiçbir şey anlamadım.' },
          { id: 'E', text: 'Sorulardan birkaçını boş bırakmış.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sözlerinden" kelimesinde: söz - ler (çoğul) - in (iyelik) - den (ayrılma). Hem iyelik hem ayrılma hal eki almıştır.'
      },
      {
        id: 'q-is-11m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'B', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'C', text: 'Okulun bahçe duvarı yeniden boyanacak.' },
          { id: 'D', text: 'Bahar yağmurları toprağı uyandırdı.' },
          { id: 'E', text: 'Güneş ışığı odanın içini aydınlattı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Okulun bahçe duvarı" üç isimden (okul, bahçe, duvar) oluşan bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-11m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tembeller bu sınavda zorlanacak.' },
          { id: 'B', text: 'Küçük çocuk annesine seslendi.' },
          { id: 'C', text: 'Soğuk havalar yakında başlıyor.' },
          { id: 'D', text: 'Yeni kitapları rafa dizdi.' },
          { id: 'E', text: 'Yaşlı adam bankta dinleniyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Tembeller" kelimesi, "tembel öğrenciler/insanlar" tamlamasında ismin düşmesiyle oluşmuş adlaşmış sıfattır.'
      },
      {
        id: 'q-is-11m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir kelime soyut bir anlama gelecek şekilde (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun parlak bir zekası vardı.' },
          { id: 'B', text: 'Derin bir kuyuya taş attılar.' },
          { id: 'C', text: 'O, hiçbir zaman bu kadar ince düşünceli olmamıştı.' },
          { id: 'D', text: 'Soğuk rüzgar yüzümüze çarpıyordu.' },
          { id: 'E', text: 'Ağacın kalın dallarını budadılar.' }
        ],
        correctOptionId: 'C',
        explanation: '"İnce" sözcüğü somut bir kavramken (kalın karşıtı), cümlede "kibar, düşünceli" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-11m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Köy yollarının bakımsızlığı bizi yordu.' },
          { id: 'B', text: 'Baharın müjdecisi çiçekler etrafı sardı.' },
          { id: 'C', text: 'Yeni kitabın sayfaları mis gibi kokuyordu.' },
          { id: 'D', text: 'Eski ahşap kapının kilidi tamamen bozulmuş.' },
          { id: 'E', text: 'Adamın eski paltosu dikkat çekiyordu.' }
        ],
        correctOptionId: 'E',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski" sözcüğü tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-11m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi isimden isim yapım eki almıştır?',
        options: [
          { id: 'A', text: 'Sevgi' },
          { id: 'B', text: 'Kitaplık' },
          { id: 'C', text: 'Korku' },
          { id: 'D', text: 'Saygı' },
          { id: 'E', text: 'Bilgi' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitaplık" kelimesinde kitap ismine gelen "-lık" eki, yeni bir isim türettiği için isimden isim yapım ekidir. Diğerleri fiilden isimdir.'
      },
      {
        id: 'q-is-11m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde küçültme ismi, cümleye "sevgi, şefkat" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Daracık sokaklardan geçtik.' },
          { id: 'B', text: 'Büyükçe bir ev arıyorlar.' },
          { id: 'C', text: 'Kedicik sütünü içip uyudu.' },
          { id: 'D', text: 'İncecik giyinince çok üşümüş.' },
          { id: 'E', text: 'Genişçe bir bahçesi vardı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kedicik" kelimesindeki -cik eki, cümleye sevgi ve şefkat anlamı katan bir küçültme ismidir.'
      },
      {
        id: 'q-is-11m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gürültüden kimse uyuyamadı.' },
          { id: 'B', text: 'Bütün gece gökyüzünü izledi.' },
          { id: 'C', text: 'Sessizlik odayı bir anda kapladı.' },
          { id: 'D', text: 'Rüzgar sert sert esiyordu.' },
          { id: 'E', text: 'Kuşlar gökyüzünde süzülüyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gürültü" kelimesi yansıma bir ses olan "gür" sesinden türemiş bir isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-11-zor',
    title: 'İsimler 11 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (101-110)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-is-11z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Sesi yankılanır uzaklarda, yalnızlığın.' },
          { id: 'B', text: 'Karanlık gece sokakları kaplamıştı.' },
          { id: 'C', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'D', text: 'Uzak dağların karları yavaş yavaş eriyor.' },
          { id: 'E', text: 'Bir bulut geçer mavi gökyüzünden.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan: "yalnızlığın", Tamlanan: "Sesi". Dizede "Sesi... yalnızlığın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-11z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Baharın ve yazın güzellikleri bir başkadır.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'D', text: 'Romanın kapağı ve sayfaları yırtılmış.' },
          { id: 'E', text: 'Evin geniş bahçesi çok güzeldi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Baharın (tamlayan) ve yazın (tamlayan) güzellikleri (tamlanan)" yapısında birden fazla tamlayan tek bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-11z-3',
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
        id: 'q-is-11z-4',
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
        id: 'q-is-11z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş isim tamlaması cümlenin yüklemi olmuştur?',
        options: [
          { id: 'A', text: 'Bu güzel kitap benimdir.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Onun en büyük amacı buydu.' },
          { id: 'D', text: 'Benim hayallerim hiçbir zaman bitmez.' },
          { id: 'E', text: 'Arabanın lastiği yolda patladı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Benimdir" kelimesi "benim kitabım(dır)" tamlamasında tamlananın (kitabım) düşmesiyle oluşmuş ve ek eylem (-dir) alarak yüklem olmuştur.'
      },
      {
        id: 'q-is-11z-6',
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
        id: 'q-is-11z-7',
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
        explanation: '"Yalnız" sözcüğü bu cümlede "kaldı" fiilinin durumunu belirttiği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-11z-8',
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
        id: 'q-is-11z-9',
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
        id: 'q-is-11z-10',
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
