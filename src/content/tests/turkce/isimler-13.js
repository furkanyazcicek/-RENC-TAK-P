export default [
  {
    id: 'test-isimler-13-kolay',
    title: 'İsimler 13 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (121-130)',
    type: 'comprehension',
    order: 37,
    questions: [
      {
        id: 'q-is-13k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mahalle, cadde veya sokak adı (özel isim) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eskiden bu dar sokaklarda oyun oynardık.' },
          { id: 'B', text: 'Yeni taşındığımız mahalle oldukça sakin.' },
          { id: 'C', text: 'Arkadaşımla İstiklal Caddesi\'nde buluşacağız.' },
          { id: 'D', text: 'Şehrin en geniş caddesi burasıydı.' },
          { id: 'E', text: 'Bizim sokağın köşesindeki bakkal kapandı.' }
        ],
        correctOptionId: 'C',
        explanation: '"İstiklal Caddesi" belirli bir caddenin özel adı olduğu için özel isimdir. Diğerlerindeki mahalle, cadde, sokak sözcükleri cins ismidir.'
      },
      {
        id: 'q-is-13k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi cins (tür) ismidir?',
        options: [
          { id: 'A', text: 'Tatilimizi _Marmaris\'te_ geçireceğiz.' },
          { id: 'B', text: '_Japonca_ öğrenmek oldukça zormuş.' },
          { id: 'C', text: 'Kedimiz _Tekir_ sabahtan beri miyavlıyor.' },
          { id: 'D', text: 'Dünkü sınavda _sorular_ çok zordu.' },
          { id: 'E', text: 'O, _Avrupa_ tarihi üzerine çalışıyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sorular" kelimesi cins ismidir (soru). Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-13k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Askerler' },
          { id: 'B', text: 'Millet' },
          { id: 'C', text: 'Kitap' },
          { id: 'D', text: 'Kalemlik' },
          { id: 'E', text: 'Ormanlar' }
        ],
        correctOptionId: 'B',
        explanation: '"Millet" sözcüğü biçimce tekil olmasına rağmen aynı topraklarda yaşayan insan topluluğunu ifade ettiği için topluluk ismidir.'
      },
      {
        id: 'q-is-13k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Meclis' },
          { id: 'B', text: 'Sürü' },
          { id: 'C', text: 'Ağaçlar' },
          { id: 'D', text: 'Kafile' },
          { id: 'E', text: 'Bölük' }
        ],
        correctOptionId: 'C',
        explanation: '"Ağaçlar" kelimesi çokluk eki (-lar) aldığı için çoğul isimdir. Diğerleri topluluk ismidir.'
      },
      {
        id: 'q-is-13k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde somut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kardeşine karşı büyük bir _sevgi_ besliyordu.' },
          { id: 'B', text: 'İçindeki _korku_ onu yiyip bitiriyordu.' },
          { id: 'C', text: 'Yeni aldığı _bilgisayar_ bozulmuş.' },
          { id: 'D', text: 'Geleceğe dair bütün _umutları_ tükenmişti.' },
          { id: 'E', text: 'Onun bu inanılmaz _zekasına_ hayranım.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bilgisayar" gözle görülebilen somut bir nesnedir. Sevgi, korku, umut ve zeka soyuttur.'
      },
      {
        id: 'q-is-13k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Öfke' },
          { id: 'B', text: 'Bulut' },
          { id: 'C', text: 'Güneş' },
          { id: 'D', text: 'Yağmur' },
          { id: 'E', text: 'Toprak' }
        ],
        correctOptionId: 'A',
        explanation: '"Öfke" beş duyu organımızla algılanamayan bir duygu olduğu için soyut isimdir.'
      },
      {
        id: 'q-is-13k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ismin yönelme hal ekini (-e/-a) almış bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Kitabı okulda unuttum.' },
          { id: 'B', text: 'Bugün onu hiç görmedim.' },
          { id: 'C', text: 'Akşam hızlıca eve yürüdü.' },
          { id: 'D', text: 'Onu evden ben aldım.' },
          { id: 'E', text: 'Benim arabam bugün bozuldu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ev-e" kelimesindeki -e eki yönelme hal ekidir.'
      },
      {
        id: 'q-is-13k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma (çıkma) hal eki (-den/-dan) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eskiden bu sokaklarda oynardık.' },
          { id: 'B', text: 'Hızlıca okula doğru yürüdü.' },
          { id: 'C', text: 'Kitabını masada unutmuş.' },
          { id: 'D', text: 'O, her zaman bana doğruyu söyler.' },
          { id: 'E', text: 'Dünkü toplantı çok sıkıcıydı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Eski-den" kelimesindeki -den eki ayrılma hal ekidir (zaman anlamı katsa da yapıca ayrılma ekidir).'
      },
      {
        id: 'q-is-13k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Gözlük camı' },
          { id: 'B', text: 'Masa örtüsü' },
          { id: 'C', text: 'Bahar yağmuru' },
          { id: 'D', text: 'Çocuğun ayakkabısı' },
          { id: 'E', text: 'Dağ havası' }
        ],
        correctOptionId: 'D',
        explanation: '"Çocuğun ayakkabısı" tamlamasında hem tamlayan (-un) hem de tamlanan (-sı) ek almıştır.'
      },
      {
        id: 'q-is-13k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Deniz suyu' },
          { id: 'B', text: 'Arabanın kapısı' },
          { id: 'C', text: 'Evin bahçesi' },
          { id: 'D', text: 'Kitabın sayfası' },
          { id: 'E', text: 'Ağacın dalı' }
        ],
        correctOptionId: 'A',
        explanation: '"Deniz suyu" tamlamasında tamlayan (deniz) ek almamış, tamlanan (suyu) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-13-orta',
    title: 'İsimler 13 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (121-130)',
    type: 'comprehension',
    order: 38,
    questions: [
      {
        id: 'q-is-13m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Evin camları fırtınada kırılmış.' },
          { id: 'B', text: 'Köyün havası çok temiz ve serindir.' },
          { id: 'C', text: 'Kardeşin dün akşam seni aradı.' },
          { id: 'D', text: 'Adamın büyük kızı üniversiteyi kazanmış.' },
          { id: 'E', text: 'Bizim okulun bahçesi çok geniştir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kardeşin" kelimesinin başında "senin" tamlayanı (senin kardeşin) vardır ancak cümlede kullanılmamıştır.'
      },
      {
        id: 'q-is-13m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan eki (-ın/-in) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okuldan çok yorgun döndü.' },
          { id: 'B', text: 'Korkudan sabaha kadar uyuyamadı.' },
          { id: 'C', text: 'Sorulardan birkaçını yanlış okumuş.' },
          { id: 'D', text: 'Eskiciden güzel bir vazo aldık.' },
          { id: 'E', text: 'Şehirden ayrılalı çok uzun zaman oldu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sorulardan birkaçı" ifadesi "soruların birkaçı" anlamındadır, dolayısıyla ayrılma hal eki tamlayan ekinin yerine kullanılmıştır.'
      },
      {
        id: 'q-is-13m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun yeni aldığı oyuncak kırıldı.' },
          { id: 'B', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'C', text: 'Geniş caddelerin sonu karanlık.' },
          { id: 'D', text: 'Belediye başkanının makam odası yenilendi.' },
          { id: 'E', text: 'Eski mahallenin dar sokaklarında kaybolduk.' }
        ],
        correctOptionId: 'D',
        explanation: '"Belediye başkanının makam odası" üç ismin (belediye, başkan, makam, oda) oluşturduğu bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-13m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soğuk havalar yakında bastırır.' },
          { id: 'B', text: 'Güzeller güzeli bir prenses varmış.' },
          { id: 'C', text: 'Büyük ağaçların gölgesinde oturduk.' },
          { id: 'D', text: 'Küçük çocuk annesine sıkıca sarıldı.' },
          { id: 'E', text: 'Yeni elbiselerini çok beğendi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Güzeller" sözcüğü "güzel kızlar/insanlar" sıfat tamlamasında ismin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-13m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de yönelme hal eki almıştır?',
        options: [
          { id: 'A', text: 'Çocuğu dün parkta gördüm.' },
          { id: 'B', text: 'Onun fikirlerine her zaman saygı duyarım.' },
          { id: 'C', text: 'Evi boyamak için usta çağırdılar.' },
          { id: 'D', text: 'Sözleri beni derinden etkiledi.' },
          { id: 'E', text: 'O, hiçbir zaman yalan söylemezdi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Fikir-ler-i-n-e" kelimesinde: fikir - ler - i (onun fikirleri, iyelik eki) - n - e (yönelme hal eki).'
      },
      {
        id: 'q-is-13m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgar sert sert esiyordu.' },
          { id: 'B', text: 'Bütün gece gökyüzünü izledi.' },
          { id: 'C', text: 'Sessizlik odayı bir anda kapladı.' },
          { id: 'D', text: 'Uykusunda derin derin nefes alıyordu.' },
          { id: 'E', text: 'Kapının gıcırtısı yüzünden uyuyamadım.' }
        ],
        correctOptionId: 'E',
        explanation: '"Gıcırtı" kelimesi yansıma bir ses olan "gıcır" kelimesinden türemiş bir isimdir.'
      },
      {
        id: 'q-is-13m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi isimden isim yapım eki almıştır?',
        options: [
          { id: 'A', text: 'Korku' },
          { id: 'B', text: 'Sevgi' },
          { id: 'C', text: 'Kitaplık' },
          { id: 'D', text: 'Saygı' },
          { id: 'E', text: 'Bilgi' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitaplık" kelimesinde kitap ismine gelen "-lık" eki, yeni bir isim türettiği için isimden isim yapım ekidir. Diğerleri fiilden isimdir.'
      },
      {
        id: 'q-is-13m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir kelime soyut bir anlama gelecek şekilde (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soğuk bir su içmek boğazına iyi gelmedi.' },
          { id: 'B', text: 'Güneş ışınları yüzünü yaktı.' },
          { id: 'C', text: 'Derin bir nefes alıp konuşmaya devam etti.' },
          { id: 'D', text: 'Bu korumacı gölgeden kurtulmak istiyordu.' },
          { id: 'E', text: 'Ağacın kalın dallarını testereyle kestiler.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gölge" kelimesi somut bir kavramken, cümlede "etki, himaye" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-13m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi küçültme ismidir?',
        options: [
          { id: 'A', text: '_Büyükçe_ bir eve taşındılar.' },
          { id: 'B', text: '_Küçücük_ bir odada yaşıyorlar.' },
          { id: 'C', text: 'Boğazındaki _bademcikler_ çok şişmişti.' },
          { id: 'D', text: '_İncecik_ giyinince çok üşüdü.' },
          { id: 'E', text: '_Daracık_ sokaklardan geçtik.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bademcik" kalıplaşmış da olsa isim soylu bir küçültme sözcüğüdür ve isimdir. Diğerlerindeki kelimeler küçültme sıfatıdır.'
      },
      {
        id: 'q-is-13m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Baharın müjdecisi çiçekler etrafı sardı.' },
          { id: 'B', text: 'Köy yollarının bakımsızlığı köylüleri zorluyor.' },
          { id: 'C', text: 'Adamın eski paltosu oldukça dikkat çekiyordu.' },
          { id: 'D', text: 'Yeni kitabın sayfaları mis gibi kokuyordu.' },
          { id: 'E', text: 'Eski ahşap kapının kilidi tamamen bozulmuş.' }
        ],
        correctOptionId: 'C',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski" sözcüğü tamlananın sıfatıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-13-zor',
    title: 'İsimler 13 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (121-130)',
    type: 'comprehension',
    order: 39,
    questions: [
      {
        id: 'q-is-13z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'B', text: 'Senin bu hallerin beni çok üzüyor.' },
          { id: 'C', text: 'Gözlerinin rengi denizden almış ilhamını.' },
          { id: 'D', text: 'Karanlık gece sokakları kaplamıştı.' },
          { id: 'E', text: 'Kokusu sarıyor her yanı, taze demlenmiş çayın.' }
        ],
        correctOptionId: 'E',
        explanation: 'Tamlayan: "çayın", Tamlanan: "kokusu". Cümlede "Kokusu sarıyor... çayın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-13z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' },
          { id: 'B', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'C', text: 'Romanın ve şiirin dünyası birbirinden çok farklıdır.' },
          { id: 'D', text: 'Dağların, taşların ve ovaların sessizliği huzur veriyor.' },
          { id: 'E', text: 'C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'C şıkkında "Romanın ve şiirin (tamlayanlar) dünyası (tamlanan)". D şıkkında "Dağların, taşların ve ovaların (tamlayanlar) sessizliği (tamlanan)". Her ikisinde de birden fazla tamlayan tek bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-13z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Kardeşini okulun önünde bekliyorum.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Defteri masanın üzerinde kalmış.' },
          { id: 'D', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'E', text: 'B, C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "Sözleri" (onun sözleri - özne). C şıkkında "Defteri" (onun defteri - özne). D şıkkında "Arabası" (onun arabası - özne). Üçünde de tamlayanı düşmüş isim tamlaması özne görevindedir.'
      },
      {
        id: 'q-is-13z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması, cümlede başka bir ismin sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi herkesi neşelendirdi.' },
          { id: 'B', text: 'Eski ahşap kapının kilidi bozulmuş.' },
          { id: 'C', text: 'Deniz mavisi gözleriyle etrafa neşe saçıyordu.' },
          { id: 'D', text: 'Güneş gözlüğümü evde unuttum.' },
          { id: 'E', text: 'Yolun sonu oldukça karanlık görünüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Deniz mavisi" belirtisiz isim tamlamasıdır. Cümlede "gözler" ismini niteleyerek (Nasıl gözler? Deniz mavisi gözler) sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-13z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Arabanın lastiği yolda patladı.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Onun en büyük amacı buydu.' },
          { id: 'D', text: 'Bu güzel kitap benimdir.' },
          { id: 'E', text: 'Benim hayallerim hiçbir zaman bitmez.' }
        ],
        correctOptionId: 'D',
        explanation: '"Benimdir" kelimesi "benim kitabım(dır)" tamlamasında tamlananın (kitabım) düşmesiyle oluşmuş ve ek eylem (-dir) alarak yüklem olmuştur.'
      },
      {
        id: 'q-is-13z-6',
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
        id: 'q-is-13z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ aşacağız.' },
          { id: 'B', text: 'İçeride büyük bir _sessizlik_ hakimdi.' },
          { id: 'C', text: 'Dışarıda çok soğuk bir _hava_ var.' },
          { id: 'D', text: 'Onun en büyük _hayali_ yazar olmaktı.' },
          { id: 'E', text: 'O, bu olayda tamamen _yalnız_ kaldı.' }
        ],
        correctOptionId: 'E',
        explanation: '"Yalnız" sözcüğü bu cümlede "kaldı" fiilinin durumunu belirttiği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-13z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) cümleye "neden, sebep" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Öğrencilerden birkaçı dünkü derse katılmadı.' },
          { id: 'B', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'C', text: 'Korkudan bütün gece gözünü kırpmadı.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Eskiciden iki tane koltuk aldık.' }
        ],
        correctOptionId: 'C',
        explanation: '"Korkudan" kelimesindeki -dan eki eylemin sebebini (korktuğu için) bildirmektedir.'
      },
      {
        id: 'q-is-13z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'B', text: 'Gece yarısı aniden uykudan uyandım.' },
          { id: 'C', text: 'Deniz kokusu insana huzur verir.' },
          { id: 'D', text: 'Yolun sonu karanlık görünüyordu.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gece yarısı" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman uyandım?" sorusuna yanıt verdiği için zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-is-13z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime belirtme (yükleme) hal ekini almıştır?',
        options: [
          { id: 'A', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'B', text: 'Rüzgarın uğultusu hepimizi korkutur.' },
          { id: 'C', text: 'Kapının gıcırtısından uyuyamadım.' },
          { id: 'D', text: 'Makinelerin tıkırtısını odasından duyuyordu.' },
          { id: 'E', text: 'Kuşlar neşeyle cıvıldaşıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Tıkırtısını" kelimesinde tıkır (yansıma) + tı + sı + n + ı (belirtme hal eki). Neyi duyuyordu? Tıkırtısını.'
      }
    ]
  }
];
