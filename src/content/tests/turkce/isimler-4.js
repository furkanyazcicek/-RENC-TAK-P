export default [
  {
    id: 'test-isimler-4-kolay',
    title: 'İsimler 4 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-is-4k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bugün Orhan ile buluşacağım.' },
          { id: 'B', text: 'Kedimiz Karabaş çok uysaldır.' },
          { id: 'C', text: 'Hafta sonu dedemlerin köyüne gideceğiz.' },
          { id: 'D', text: 'Ankara, Türkiye\'nin başkentidir.' },
          { id: 'E', text: 'Türkçe sınavından yüksek not aldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde herhangi bir özel isim yoktur. Orhan (kişi), Karabaş (hayvan), Ankara (şehir), Türkiye (ülke) ve Türkçe (dil) özel isimlerdir.'
      },
      {
        id: 'q-is-4k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili kelime çoğul isim değildir?',
        options: [
          { id: 'A', text: 'Ağaçtaki _elmalar_ çok lezzetliydi.' },
          { id: 'B', text: 'Dünkü sınavdaki _sorular_ oldukça basitti.' },
          { id: 'C', text: 'Bu eski _eşyalar_ artık kullanılmıyor.' },
          { id: 'D', text: 'Yolun sonuna kadar _koştular_.' },
          { id: 'E', text: 'Bahar gelince _çiçekler_ açtı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Koştular" sözcüğü fiildir. -lar eki fiillere geldiğinde şahıs eki (3. çoğul şahıs) görevindedir, çoğul eki değildir.'
      },
      {
        id: 'q-is-4k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde topluluk ismi vardır?',
        options: [
          { id: 'A', text: 'Orman müdürlüğü fidan dağıttı.' },
          { id: 'B', text: 'Çocuklar bahçede top oynuyor.' },
          { id: 'C', text: 'Kuşlar güneye doğru göç etti.' },
          { id: 'D', text: 'Sınıf, yarın müzeye gidecek.' },
          { id: 'E', text: 'Ağaçların yaprakları dökülüyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sınıf" sözcüğü burada "öğrenciler" anlamında (ad aktarması) kullanılarak çoğulluk bildirdiği için topluluk ismidir.'
      },
      {
        id: 'q-is-4k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soyut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Cam' },
          { id: 'B', text: 'Kalem' },
          { id: 'C', text: 'Dostluk' },
          { id: 'D', text: 'Masa' },
          { id: 'E', text: 'Defter' }
        ],
        correctOptionId: 'C',
        explanation: '"Dostluk" beş duyu organıyla algılanamayan, zihinsel olarak kavranan soyut bir isimdir.'
      },
      {
        id: 'q-is-4k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki almış bir isim yoktur?',
        options: [
          { id: 'A', text: 'Kalemim nerede?' },
          { id: 'B', text: 'Defterini bana verir misin?' },
          { id: 'C', text: 'Arabayı çok hızlı kullanıyor.' },
          { id: 'D', text: 'Gözlerin ne kadar güzel.' },
          { id: 'E', text: 'Sözleri beni derinden yaraladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arabayı" sözcüğündeki -ı eki belirtme (yükleme) hal ekidir, iyelik eki almamıştır.'
      },
      {
        id: 'q-is-4k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun ayakkabısı yırtılmış.' },
          { id: 'B', text: 'Güneş gözlüğü almalıyım.' },
          { id: 'C', text: 'Evin bahçesinde oturduk.' },
          { id: 'D', text: 'Ahmet\'in kalemi kaybolmuş.' },
          { id: 'E', text: 'Kapının kolu kırıldı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Güneş gözlüğü" belirtisiz isim tamlamasıdır, çünkü tamlayan (Güneş) ek almamış, tamlanan (gözlüğü) iyelik eki almıştır.'
      },
      {
        id: 'q-is-4k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde ismin ayrılma (çıkma) hali (-den/-dan) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabah erkenden yola çıktık.' },
          { id: 'B', text: 'Kitabı masada unuttum.' },
          { id: 'C', text: 'Okula gitmek istemiyordu.' },
          { id: 'D', text: 'Seni çok iyi anlıyorum.' },
          { id: 'E', text: 'Defteri çantasına koydu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Erkenden" sözcüğündeki -den eki ismin ayrılma hal ekidir.'
      },
      {
        id: 'q-is-4k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma (kalma) hal eki (-de/-da) yer bildirmektedir?',
        options: [
          { id: 'A', text: 'Sokakta oynayan çocukları izledim.' },
          { id: 'B', text: 'Eylül ayında tatile çıkacağız.' },
          { id: 'C', text: 'İlkbaharda her yer yeşillenir.' },
          { id: 'D', text: 'Akşamda bir hüzün vardır.' },
          { id: 'E', text: 'Saat ikide buluşalım.' }
        ],
        correctOptionId: 'A',
        explanation: '"Sokakta" sözcüğündeki -ta eki mekan (yer) bildirmektedir. Diğer seçeneklerdeki -da/-de ekleri genellikle zaman anlamı katmıştır.'
      },
      {
        id: 'q-is-4k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde küçültme adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'İncecik bir dal kırıldı.' },
          { id: 'B', text: 'Ufacık elleriyle bana sarıldı.' },
          { id: 'C', text: 'Kuzucuk annesini arıyordu.' },
          { id: 'D', text: 'Daracık sokaklardan geçtik.' },
          { id: 'E', text: 'Küçücük bir evde yaşıyorlar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kuzucuk" isimdir ve -cuk küçültme ekini almıştır. A, B, D ve E seçeneklerindeki küçültmeli sözcükler sıfat görevindedir.'
      },
      {
        id: 'q-is-4k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde bir somut isim ile soyut isim bir arada verilmiştir?',
        options: [
          { id: 'A', text: 'Taş - Toprak' },
          { id: 'B', text: 'Su - Hava' },
          { id: 'C', text: 'Rüya - Hayal' },
          { id: 'D', text: 'Masa - Sevgi' },
          { id: 'E', text: 'Korku - Heyecan' }
        ],
        correctOptionId: 'D',
        explanation: '"Masa" somut, "Sevgi" ise soyut bir isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-4-orta',
    title: 'İsimler 4 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-is-4m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Çocuğun ayakkabısı çamur olmuştu.' },
          { id: 'B', text: 'Senin sözlerin bana güven veriyor.' },
          { id: 'C', text: 'Dünkü sınavı çok zordu.' },
          { id: 'D', text: 'Evin önünde büyük bir ağaç var.' },
          { id: 'E', text: 'Köyün havası çok temizdir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sınavı" kelimesinde "(onun) sınavı" şeklinde tamlayan olan "onun" düşmüştür.'
      },
      {
        id: 'q-is-4m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlananı sıfat almış belirtili isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel günlerin özlemi içimizde büyüyor.' },
          { id: 'B', text: 'Denizin mavi sularında yüzmek isterdim.' },
          { id: 'C', text: 'Eski evin duvarları yıkılmak üzereydi.' },
          { id: 'D', text: 'Geniş sokakların karanlığı ürkütücüydü.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Denizin suları" belirtili isim tamlamasıdır. Araya giren "mavi" kelimesi tamlananın (suların) sıfatıdır.'
      },
      {
        id: 'q-is-4m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-den / -dan" eki, belirtili isim tamlamasındaki "-ın / -in" ekinin yerini tutmuştur?',
        options: [
          { id: 'A', text: 'Sorulardan birkaçını yanlış çözmüş.' },
          { id: 'B', text: 'Korkudan ne yapacağını bilemedi.' },
          { id: 'C', text: 'Sabah erkenden yola koyulduk.' },
          { id: 'D', text: 'Gürültüden kimse uyuyamadı.' },
          { id: 'E', text: 'Evden çıkıp okula doğru yürüdü.' }
        ],
        correctOptionId: 'A',
        explanation: '"Sorulardan birkaçı" ifadesi "soruların birkaçı" anlamındadır, dolayısıyla ayrılma hal eki tamlayan ekinin yerini almıştır.'
      },
      {
        id: 'q-is-4m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir kelime soyut anlamda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sıcak çayı yudumlarken gazetesini okudu.' },
          { id: 'B', text: 'Soğuk bir su içmek iyi geldi.' },
          { id: 'C', text: 'Taş gibi sert bir ekmek yedik.' },
          { id: 'D', text: 'O, çok ince düşünceli bir insandır.' },
          { id: 'E', text: 'Güneş ışınları odayı aydınlattı.' }
        ],
        correctOptionId: 'D',
        explanation: '"İnce" sözcüğü somut bir kavramken (kalın karşıtı), burada "zarif, kibar, düşünceli" anlamlarında kullanılarak soyutlaşmıştır. (Ancak bu bir sıfattır, soruda kelime demiştir. Ekin -lık falan olması gerekmez.)'
      },
      {
        id: 'q-is-4m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Küçük çocuklar parkta oyun oynuyordu.' },
          { id: 'B', text: 'İhtiyarlara otobüste yer vermeliyiz.' },
          { id: 'C', text: 'Güzel havalar hepimizi neşelendirdi.' },
          { id: 'D', text: 'Eski eşyaları çatı katına kaldırdı.' },
          { id: 'E', text: 'Yeni kitaplar raflardaki yerini aldı.' }
        ],
        correctOptionId: 'B',
        explanation: '"İhtiyarlara" kelimesi "ihtiyar insanlara" sıfat tamlamasında ismin (insanlara) düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-4m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtme (yükleme) ve iyelik eki birlikte kullanılmıştır?',
        options: [
          { id: 'A', text: 'Arabayı geçen gün sattık.' },
          { id: 'B', text: 'Onun defterini masada buldum.' },
          { id: 'C', text: 'Kapıyı usulca açıp içeri girdi.' },
          { id: 'D', text: 'Gözlerin çok uzaklara dalıyor.' },
          { id: 'E', text: 'Sözleri hala kulaklarımda çınlıyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Defter-i-n-i" kelimesindeki ilk -i iyelik eki, son -i ise belirtme (yükleme) hal ekidir.'
      },
      {
        id: 'q-is-4m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eski Türkçe kelimeleri araştırıyor.' },
          { id: 'B', text: 'Evin büyük bahçe kapısı açık kalmış.' },
          { id: 'C', text: 'Okulun bahçe duvarı yeniden örülecek.' },
          { id: 'D', text: 'Güzel yaz günlerini çok özledim.' },
          { id: 'E', text: 'Çocukların renkli oyuncakları etrafa dağılmıştı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Okulun bahçe duvarı" üç ismin (okul, bahçe, duvar) oluşturduğu bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-4m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı zamir olan bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Kuşların cıvıltısı sabahı müjdeliyor.' },
          { id: 'B', text: 'Denizin dalgaları kıyıya çarpıyordu.' },
          { id: 'C', text: 'Bizim köyümüz yemyeşil vadilerin arasındadır.' },
          { id: 'D', text: 'Bahar rüzgarı tatlı tatlı esiyor.' },
          { id: 'E', text: 'Dağların zirvesinde kar hiç erimez.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bizim köyümüz" isim tamlamasında tamlayan olan "bizim" sözcüğü kişi zamiridir.'
      },
      {
        id: 'q-is-4m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki eklendiği kelimeye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Akşama misafirlerimiz gelecek.' },
          { id: 'B', text: 'Sokaktan gürültüler geliyordu.' },
          { id: 'C', text: 'Okula gitmek için evden çıktı.' },
          { id: 'D', text: 'Bu hediyeyi sana aldım.' },
          { id: 'E', text: 'İçeriye kimsenin girmesine izin vermedi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Akşama" kelimesindeki -a yönelme hal eki, cümleye "akşam vaktinde" anlamı (zaman anlamı) katmıştır.'
      },
      {
        id: 'q-is-4m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem somut hem de soyut isimler bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuk, bahçedeki ağacın altında oynuyordu.' },
          { id: 'B', text: 'Masadaki kitapları tek tek rafa dizdi.' },
          { id: 'C', text: 'Güzel haberi alınca sevinci yüzünden okunuyordu.' },
          { id: 'D', text: 'Bütün gün sahilde yürüyüp deniz kabuğu topladık.' },
          { id: 'E', text: 'Güneş ışınları odayı ısıtmaya başlamıştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bu cümlede "haber, yüz" somut, "sevinç" ise soyut isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-4-zor',
    title: 'İsimler 4 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-is-4z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ve tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Sesi duyuldu uzaktan, yalnızlığın.' },
          { id: 'B', text: 'Kara bulutlar kapladı gökyüzünü aniden.' },
          { id: 'C', text: 'Eski zaman sevdaları kalmadı artık.' },
          { id: 'D', text: 'Rüzgarın uğultusu ürpertiyor içimi.' },
          { id: 'E', text: 'Bir bahar sabahı çıkıp gidelim buralardan.' }
        ],
        correctOptionId: 'A',
        explanation: 'Belirtili isim tamlaması: "yalnızlığın sesi". Cümlede "Sesi duyuldu uzaktan, yalnızlığın" şeklinde tamlanan ve tamlayan yer değiştirmiştir.'
      },
      {
        id: 'q-is-4z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir tamlayan, birden fazla tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Evin ve arabanın vergisi dün ödendi.' },
          { id: 'B', text: 'Öğrencinin defteri ve kalemi masadaydı.' },
          { id: 'C', text: 'Denizlerin ve göllerin kirliliği endişe verici.' },
          { id: 'D', text: 'Baharın ve yazın güzellikleri anlatılmaz.' },
          { id: 'E', text: 'Çocuğun yırtık ve eski kazağı çöpe atıldı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencinin (tamlayan) defteri (tamlanan) ve kalemi (tamlanan)" yapısında bir tamlayan, birden fazla tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-4z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim tamlaması bir ismi niteleyerek sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buz mavisi gözleriyle etrafa gülücükler saçtı.' },
          { id: 'B', text: 'Eski ahşap kapı büyük bir gürültüyle kapandı.' },
          { id: 'C', text: 'Okulun geniş bahçesinde maç yaptık.' },
          { id: 'D', text: 'Dağların zirvesindeki karlar erimeye başladı.' },
          { id: 'E', text: 'Yolun sonu karanlık ve ıssız görünüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Buz mavisi" belirtisiz isim tamlamasıdır ve cümlede "gözler" ismini niteleyerek sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-4z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime isim görevindedir?',
        options: [
          { id: 'A', text: 'Gürül gürül akan şelale hepimizi büyüledi.' },
          { id: 'B', text: 'Kapının gıcırtısı yüzünden bebek uyandı.' },
          { id: 'C', text: 'Patlak tekerleği değiştirmek uzun sürdü.' },
          { id: 'D', text: 'Kuşlar ağaç dallarında neşeyle ötüşüyordu.' },
          { id: 'E', text: 'Çocuklar bahçede mışıl mışıl uyudu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gıcırtı" kelimesi yansıma bir sesten (gıcır) türemiş isimdir. A şıkkında gürül gürül zarftır, E şıkkında mışıl mışıl zarftır.'
      },
      {
        id: 'q-is-4z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde zincirleme isim tamlamasının arasına sıfat girmiştir?',
        options: [
          { id: 'A', text: 'Sanatçının yeni çıkan şiir kitabı çok satıldı.' },
          { id: 'B', text: 'Ahşap evin kırık pencereleri değiştirilecek.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı içimizi sızlattı.' },
          { id: 'D', text: 'Belediye başkanının eski makam arabası bozuldu.' },
          { id: 'E', text: 'Köy yollarının bitmek bilmeyen çilesi konuşuldu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Belediye başkanının makam arabası" zincirleme isim tamlamasıdır. Araya giren "eski" kelimesi makam arabasının sıfatıdır.'
      },
      {
        id: 'q-is-4z-6',
        difficulty: 'hard',
        questionText: 'İsim tamlamalarında bazen tamlayan cümlede yer almaz. Bu tür kullanımlar bazen anlam belirsizliğine yol açabilir. Aşağıdaki cümlelerin hangisinde böyle bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Kardeşini dün parkta oynarken gördüm.' },
          { id: 'B', text: 'Onun söylediği yalanlara artık kimse inanmıyor.' },
          { id: 'C', text: 'Evin kapısı sabaha kadar açık kalmış.' },
          { id: 'D', text: 'Benim kitabım masanın üzerinde kalmış.' },
          { id: 'E', text: 'Yüzü çok solgun görünüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kardeşini" kelimesinde tamlayanın "Senin" mi yoksa "Onun" mu olduğu belli değildir (Senin kardeşini / Onun kardeşini). Bu yüzden anlam belirsizliği vardır.'
      },
      {
        id: 'q-is-4z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem niteleme hem de belirtme sıfatı almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Şu büyük evin bahçesi çok güzeldi.' },
          { id: 'B', text: 'Eski şehrin dar sokaklarında kaybolduk.' },
          { id: 'C', text: 'Bu arabanın yeni motoru oldukça güçlü.' },
          { id: 'D', text: 'Güzel yaz günlerinin keyfi başkadır.' },
          { id: 'E', text: 'Şu çocuğun yırtık kazağını kim dikecek?' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan (evin), "şu" (belirtme) ve "büyük" (niteleme) sıfatlarını birlikte almıştır. Tamlama "evin bahçesi"dir.'
      },
      {
        id: 'q-is-4z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi hem isim çekim eki hem de isimden isim yapım eki almıştır?',
        options: [
          { id: 'A', text: 'Kitapları _kitaplıkta_ özenle diziliydi.' },
          { id: 'B', text: 'Ormanda uzun bir _yürüyüş_ yaptık.' },
          { id: 'C', text: 'Bugün _sevinçten_ havalara uçuyorum.' },
          { id: 'D', text: 'O, çok _bilgili_ bir öğretmendir.' },
          { id: 'E', text: 'Son sınavda oldukça _başarılı_ oldu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kitaplıkta" kelimesi: kitap (isim kökü) + lık (isimden isim yapım eki) + ta (bulunma hal eki, isim çekim eki) almıştır.'
      },
      {
        id: 'q-is-4z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ne" sorusuna cevap veren belirtisiz isim tamlaması nesne görevindedir?',
        options: [
          { id: 'A', text: 'Pazardan iki kilo elma aldık.' },
          { id: 'B', text: 'Yeni bir güneş gözlüğü beğendim.' },
          { id: 'C', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'D', text: 'Gece yarısı telefon çaldı.' },
          { id: 'E', text: 'Masa örtüsü yıkandıktan sonra serildi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Güneş gözlüğü" belirtisiz isim tamlamasıdır. "Ne beğendim?" sorusuna cevap verir ve cümlede belirtisiz nesne görevindedir.'
      },
      {
        id: 'q-is-4z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı düşmüş isim tamlaması ek eylem alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Bütün bu gördüklerin bir rüyaymış.' },
          { id: 'B', text: 'En büyük korkum yalnız kalmaktı.' },
          { id: 'C', text: 'Bu güzel kitap benimdir.' },
          { id: 'D', text: 'Onun asıl hedefi birinci olmaktı.' },
          { id: 'E', text: 'Söylediklerin tamamen yalandı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Benimdir" kelimesi "benim kitabım" tamlamasında tamlananın düşmesiyle oluşmuş ve ek eylem (-dir) alarak yüklem olmuştur.'
      }
    ]
  }
];
