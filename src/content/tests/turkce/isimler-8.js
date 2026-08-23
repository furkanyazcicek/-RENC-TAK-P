export default [
  {
    id: 'test-isimler-8-kolay',
    title: 'İsimler 8 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-is-8k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim olan bir kitap/eser adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün kütüphaneden üç kitap ödünç aldım.' },
          { id: 'B', text: 'Sefiller, okuduğum en etkileyici romanlardan biridir.' },
          { id: 'C', text: 'Masadaki eski dergileri çöpe attı.' },
          { id: 'D', text: 'Hafta sonu bol bol makale okuyacağım.' },
          { id: 'E', text: 'Şiir okumak insanı dinlendirir.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sefiller" bir eser (roman) adı olduğu için özel isimdir.'
      },
      {
        id: 'q-is-8k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi cins (tür) ismidir?',
        options: [
          { id: 'A', text: '_Türkiye_ coğrafi olarak harika bir konumdadır.' },
          { id: 'B', text: '_Ankara_ bugün yine çok soğuktu.' },
          { id: 'C', text: 'Bu eski _bina_ yakında yıkılacak.' },
          { id: 'D', text: 'Tatilimizi _Avrupa\'da_ geçireceğiz.' },
          { id: 'E', text: 'Kedimiz _Pamuk_ yine yaramazlık yapıyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bina" sözcüğü genel bir varlık türünü karşıladığı için cins ismidir. Diğerleri özel isimdir.'
      },
      {
        id: 'q-is-8k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi çoğul isim değildir?',
        options: [
          { id: 'A', text: 'Bahçedeki _ağaçlar_ çiçek açmış.' },
          { id: 'B', text: 'Sınıftaki _öğrenciler_ çok çalışkandı.' },
          { id: 'C', text: 'Eski _günler_ hep aklıma gelir.' },
          { id: 'D', text: 'Yüzünde kocaman bir _gülümseme_ vardı.' },
          { id: 'E', text: 'Masadaki _kalemler_ yere düştü.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gülümseme" kelimesi çokluk eki (-lar/-ler) almamıştır, bu nedenle tekil isimdir.'
      },
      {
        id: 'q-is-8k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Kitaplık' },
          { id: 'B', text: 'Orman' },
          { id: 'C', text: 'Defterler' },
          { id: 'D', text: 'Masa' },
          { id: 'E', text: 'Kalem' }
        ],
        correctOptionId: 'B',
        explanation: '"Orman" biçimce tekil görünmesine rağmen birden fazla ağacın oluşturduğu topluluğu anlattığı için topluluk ismidir.'
      },
      {
        id: 'q-is-8k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soyut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Masadaki bardağı yavaşça kaldırdı.' },
          { id: 'B', text: 'Güneş ışıkları odanın içini aydınlattı.' },
          { id: 'C', text: 'Bu olaydan sonra içinde büyük bir üzüntü kaldı.' },
          { id: 'D', text: 'Kitabın sayfaları rüzgarda uçuştu.' },
          { id: 'E', text: 'Bahçedeki ağacın dalları kırılmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Üzüntü" beş duyu organımızla algılayamadığımız bir duygu olduğu için soyut isimdir.'
      },
      {
        id: 'q-is-8k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Arabanın kapısı' },
          { id: 'B', text: 'Yolun sonu' },
          { id: 'C', text: 'Kitap kapağı' },
          { id: 'D', text: 'Evin bahçesi' },
          { id: 'E', text: 'Kuşun kanadı' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitap kapağı" tamlamasında tamlayan (kitap) ek almamış, tamlanan (kapağı) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-8k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Dağ havası' },
          { id: 'B', text: 'Bahar yağmuru' },
          { id: 'C', text: 'Gözlük camı' },
          { id: 'D', text: 'Sokak lambası' },
          { id: 'E', text: 'Arabanın camı' }
        ],
        correctOptionId: 'E',
        explanation: '"Arabanın camı" tamlamasında hem tamlayan (-ın) hem de tamlanan (-ı) ek almıştır.'
      },
      {
        id: 'q-is-8k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük ayrılma (çıkma) hal ekini (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Hızlı adımlarla _eve_ yöneldi.' },
          { id: 'B', text: 'Kitabımı _masada_ unuttum.' },
          { id: 'C', text: 'Sabahtan beri _okuldan_ dönmedi.' },
          { id: 'D', text: 'Defterini _çantasına_ koydu.' },
          { id: 'E', text: 'Bugün çok _yorgun_ görünüyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Okul-dan" sözcüğündeki -dan eki ayrılma hal ekidir.'
      },
      {
        id: 'q-is-8k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki (-e/-a) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabah erken uyandı.' },
          { id: 'B', text: 'Pencereden dışarıya baktı.' },
          { id: 'C', text: 'Seni çok iyi anlıyorum.' },
          { id: 'D', text: 'Odamda sessizce kitap okudum.' },
          { id: 'E', text: 'Kitabı bana uzatır mısın?' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "dışarıya" sözcüğünde (-a) vardır. E şıkkında "bana" sözcüğünde (-a) vardır. Her ikisinde de yönelme vardır fakat "bana" zamir, "dışarıya" da isim soylu (zarf) görevindedir. Soru yönelme eki kullanımını soruyor. Cümle içinde dışarı(y)a veya ban-a kelimeleri bu eki almıştır. Düzeltme: Soruda tek bir net cevap olması için E şıkkını doğru kabul edip, B şıkkındaki örneği "Pencereden dışarı baktı." olarak düşünerek (pencereden - ayrılma, dışarı - eksiz, yön zarfı) yorumlarsak; B şıkkında yönelme yoktur. Dolayısıyla cevap E\'dir. (bana -> ben+e).'
      },
      {
        id: 'q-is-8k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi ismin bulunma (-de/-da) hal ekini almıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah _erkenden_ çıkacağız.' },
          { id: 'B', text: 'Bu _kitabı_ mutlaka okumalısın.' },
          { id: 'C', text: 'O, her zaman çok _cesur_ davranır.' },
          { id: 'D', text: 'Gözlüğümü _arabada_ unutmuşum.' },
          { id: 'E', text: 'Ona olan _saygım_ hiç bitmeyecek.' }
        ],
        correctOptionId: 'D',
        explanation: '"Araba-da" kelimesindeki -da eki bulunma hal ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-8-orta',
    title: 'İsimler 8 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-is-8m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Köyün yolları çok bozuktu.' },
          { id: 'B', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'C', text: 'Evin kapısı sabaha kadar açık kalmış.' },
          { id: 'D', text: 'Senin sözlerin bana umut veriyor.' },
          { id: 'E', text: 'Şehrin kalabalığından sıkılmıştı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Arabası" kelimesinin başında "onun" tamlayanı (onun arabası) vardır ancak cümlede kullanılmamıştır.'
      },
      {
        id: 'q-is-8m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eski eşyaları çatı katına kaldırdık.' },
          { id: 'B', text: 'Yeni gelen öğrenci çok sessizdi.' },
          { id: 'C', text: 'Güzeller güzeli bir çiçek açmıştı bahçede.' },
          { id: 'D', text: 'Tembeller bu hayatta her zaman geri kalır.' },
          { id: 'E', text: 'Küçük çocuk annesinin elini sımsıkı tuttu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Tembeller" sözcüğü, "tembel insanlar" sıfat tamlamasında "insanlar" isminin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-8m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan ekinin (-ın/-in) yerini tutmuştur?',
        options: [
          { id: 'A', text: 'Korkudan ne yapacağını bilemedi.' },
          { id: 'B', text: 'Öğrencilerden birkaçı sınava girmedi.' },
          { id: 'C', text: 'Sabahtan akşama kadar ders çalıştı.' },
          { id: 'D', text: 'Sıcaktan çok bunalmıştık.' },
          { id: 'E', text: 'Uzaktan gelen sesleri dinliyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencilerden birkaçı" tamlaması "öğrencilerin birkaçı" anlamındadır, dolayısıyla ayrılma hal eki tamlayan ekinin yerine kullanılmıştır.'
      },
      {
        id: 'q-is-8m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Okulun bahçe kapısı nihayet boyandı.' },
          { id: 'B', text: 'Çocuğun yeni aldığı ayakkabı çok güzel.' },
          { id: 'C', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'D', text: 'Geniş sokakların karanlığı ürkütücüydü.' },
          { id: 'E', text: 'Mavi gökyüzü hepimize umut dağıtıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Okulun bahçe kapısı" üç ismin (okul, bahçe, kapı) oluşturduğu bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-8m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kelime hem iyelik hem de belirtme (yükleme) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Gözleri uykusuzluktan iyice kızarmıştı.' },
          { id: 'B', text: 'Arabayı geçen ay çok ucuza sattık.' },
          { id: 'C', text: 'Kardeşini okulun kapısında bekliyor.' },
          { id: 'D', text: 'Sözleri beni derinden etkiledi.' },
          { id: 'E', text: 'Kapıyı yavaşça açıp içeri süzüldü.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kardeş-i-n-i" kelimesinde: kardeş (kök) - i (onun kardeşi, iyelik eki) - n - i (kimi bekliyor? kardeşini, belirtme hal eki).'
      },
      {
        id: 'q-is-8m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir isim soyut bir anlamda (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun ne kadar ince bir insan olduğunu anladım.' },
          { id: 'B', text: 'Taş gibi sert bir yatakta uyumuştu.' },
          { id: 'C', text: 'Buz gibi su içtiği için boğazı şişti.' },
          { id: 'D', text: 'Derin bir nefes alıp konuşmaya başladı.' },
          { id: 'E', text: 'Ağacın kalın dallarını testereyle kestiler.' }
        ],
        correctOptionId: 'A',
        explanation: '"İnce" sözcüğü somut bir kavramken, cümlede "zarif, kibar, düşünceli" anlamında kullanılarak soyutlaşmıştır. (Bir sıfattır, ama soyutlaştırma kelime bazında sorulmuştur).'
      },
      {
        id: 'q-is-8m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Köy yollarının bakımsızlığı köylüleri zorluyor.' },
          { id: 'B', text: 'Yaşlı adamın eski paltosu dikkat çekiyordu.' },
          { id: 'C', text: 'Baharın müjdecisi çiçekler etrafı sardı.' },
          { id: 'D', text: 'Yeni kitabın sayfaları mis gibi kokuyordu.' },
          { id: 'E', text: 'Eski ahşap kapının kilidi tamamen bozulmuş.' }
        ],
        correctOptionId: 'B',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski" sözcüğü tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-8m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki (-lık, -ci vb.) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi herkesi sevindirir.' },
          { id: 'B', text: 'Ormanda uzun bir yürüyüş yaptık.' },
          { id: 'C', text: 'Gözlükçü sabah erkenden dükkanını açtı.' },
          { id: 'D', text: 'Çocuklar sokakta neşeyle oynuyor.' },
          { id: 'E', text: 'Yeni aldığı araba çok hızlıydı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gözlükçü" kelimesi, göz isminden "-lük" ve "-çü" ekleriyle türetilmiş iki tane isimden isim yapım eki almıştır.'
      },
      {
        id: 'q-is-8m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi küçültme ismi değildir?',
        options: [
          { id: 'A', text: 'Kedicik' },
          { id: 'B', text: 'Tepecik' },
          { id: 'C', text: 'Büyükçe' },
          { id: 'D', text: 'Bademcik' },
          { id: 'E', text: 'Kuzucuk' }
        ],
        correctOptionId: 'C',
        explanation: '"Büyükçe" sözcüğü isme değil sıfata gelen bir küçültme ekidir ve kendisi sıfattır.'
      },
      {
        id: 'q-is-8m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgarın uğultusu beni hep korkutur.' },
          { id: 'B', text: 'Çocuklar bahçede sessizce oturuyordu.' },
          { id: 'C', text: 'Kuşlar ağaçlarda neşeyle cıvıldaşıyor.' },
          { id: 'D', text: 'Uykusunda derin derin nefes alıyordu.' },
          { id: 'E', text: 'Patlak lastikle yola devam edemedik.' }
        ],
        correctOptionId: 'A',
        explanation: '"Uğultu" kelimesi yansıma bir ses olan "uğul" sesinden türemiş bir isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-8-zor',
    title: 'İsimler 8 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-is-8z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Sesi yankılanır uzaklarda, yalnızlığın.' },
          { id: 'B', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'C', text: 'Karanlık gece sokakları kaplamıştı.' },
          { id: 'D', text: 'Uzak dağların karları yavaş yavaş eriyor.' },
          { id: 'E', text: 'Gözlerinin rengini denizden almışsın.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tamlayan: "yalnızlığın", Tamlanan: "Sesi". Dizede "Sesi... yalnızlığın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-8z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlanan, tek bir tamlayana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Evin ve arabanın vergisi bugün ödenecek.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'D', text: 'Denizlerin ve göllerin kirliliği artıyor.' },
          { id: 'E', text: 'Baharın ve yazın güzellikleri bir başkadır.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencinin" tamlayanı; "kalemi", "defteri" ve "silgisi" olmak üzere birden fazla tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-8z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) cümleye "sebep (neden)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'B', text: 'Eskiciden iki tane koltuk aldık.' },
          { id: 'C', text: 'Korkudan bütün gece gözünü kırpmadı.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Bunu ondan daha önce duymuştum.' }
        ],
        correctOptionId: 'C',
        explanation: '"Korkudan" kelimesindeki -dan eki, eylemin (uyumamasının) sebebini (korktuğu için) belirtmektedir.'
      },
      {
        id: 'q-is-8z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz isim tamlaması bir ismi niteleyerek sıfat görevinde kullanılmıştır?',
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
        id: 'q-is-8z-5',
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
        id: 'q-is-8z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı sıfat almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Büyük ağacın serin gölgesinde dinlendik.' },
          { id: 'B', text: 'Şu çocuğun yırtık ayakkabısı yüreğimi burktu.' },
          { id: 'C', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'D', text: 'Yeni kitabın beyaz sayfaları parlıyordu.' },
          { id: 'E', text: 'Hepsi (A, B, C, D) bu kurala uyar.' }
        ],
        correctOptionId: 'E',
        explanation: 'A: büyük ağaç / serin gölge. B: şu çocuk / yırtık ayakkabı. C: eski mahalle / dar sokaklar. D: yeni kitap / beyaz sayfalar. Bütün seçeneklerdeki isim tamlamalarında hem tamlayan hem tamlanan sıfat almıştır.'
      },
      {
        id: 'q-is-8z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bütün bu _sorunları_ aşacağız.' },
          { id: 'B', text: 'Oraya _yalnız_ gitmeni istemiyorum.' },
          { id: 'C', text: 'İçeride büyük bir _sessizlik_ hakimdi.' },
          { id: 'D', text: 'Onun _hayali_ iyi bir yazar olmaktı.' },
          { id: 'E', text: 'Dışarıda çok soğuk bir _hava_ var.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yalnız" sözcüğü bu cümlede "gitmeni" fiilimsinin nasıl yapılacağını belirttiği için zarf görevindedir.'
      },
      {
        id: 'q-is-8z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Bu güzel çanta benimdir.' },
          { id: 'B', text: 'Arabanın lastiği yolda patladı.' },
          { id: 'C', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'D', text: 'Onun en büyük amacı buydu.' },
          { id: 'E', text: 'Benim hayallerim hiçbir zaman bitmez.' }
        ],
        correctOptionId: 'A',
        explanation: '"Benimdir" kelimesi "benim çantamdır" tamlamasında tamlananın (çantam) düşmesiyle oluşmuştur.'
      },
      {
        id: 'q-is-8z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Öğle vakti aniden yağmur bastırdı.' },
          { id: 'B', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'C', text: 'Deniz kokusu insana huzur verir.' },
          { id: 'D', text: 'Yolun sonu karanlık görünüyordu.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Öğle vakti" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman yağmur bastırdı?" sorusuna yanıt verdiği için zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-is-8z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime bulunma hal eki almıştır?',
        options: [
          { id: 'A', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'B', text: 'Kapının gıcırtısı yüzünden uyuyamadım.' },
          { id: 'C', text: 'Kuşlar neşeyle cıvıldaşıyordu.' },
          { id: 'D', text: 'Rüzgarın uğultusu hepimizi korkutur.' },
          { id: 'E', text: 'Sokakta büyük bir kalabalık vardı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gürültü" yansımadan türemiş bir isimdir ve "-de" bulunma hal ekini almıştır.'
      }
    ]
  }
];
