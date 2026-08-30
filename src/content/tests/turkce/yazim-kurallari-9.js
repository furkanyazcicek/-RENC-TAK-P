export default [
  {
    id: 'test-yazim-kurallari-9-kolay',
    title: 'Yazım Kuralları 9 (Kolay)',
    description: 'Yazım Kuralları - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-yk-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Yarın amcamlar bizi ziyarete gelecek.' },
          { id: 'B', text: 'Okulun bahçesinde Vali bey bir konuşma yaptı.' },
          { id: 'C', text: 'Kedim Pamuk dünden beri yemeğini yemiyor.' },
          { id: 'D', text: 'Teyzem her yaz Ayvalık\'a tatile gider.' },
          { id: 'E', text: 'Geçen hafta Türk Dil Kurumu\'nu ziyaret ettik.' }
        ],
        correctOptionId: 'B',
        explanation: 'Saygı bildiren sözler (bey, hanım, efendi vb.) özel ismin veya makamın yanında kullanıldığında büyük harfle başlar. "Vali Bey" şeklinde yazılmalıdır.'
      },
      {
        id: 'q-yk-9-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Anladım ki bu iş tek başına yapılmayacak.' },
          { id: 'B', text: 'Dolaptaki elmalardan birkaçını yemiş.' },
          { id: 'C', text: 'Eminimki o da bizimle gelmek isterdi.' },
          { id: 'D', text: 'Şemsiyemi evde unuttum, seninki yanındaysa paylaşalım.' },
          { id: 'E', text: 'Bugünkü gazete haberlerini okudun mu?' }
        ],
        correctOptionId: 'C',
        explanation: '"Eminim ki" cümlesindeki "ki" bağlaçtır ve ayrı yazılması gerekir. Bitişik yazılması yanlıştır.'
      },
      {
        id: 'q-yk-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de / da"nın yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Toplantıya Ahmet de katılacakmış.' },
          { id: 'B', text: 'Bunu yaparken hiçte zorlanmadığını söyledi.' },
          { id: 'C', text: 'Kitabımı okulda unutmuşum.' },
          { id: 'D', text: 'Dışarıda çok soğuk bir hava var.' },
          { id: 'E', text: 'Sen de bizimle bu projede yer almalısın.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlaç olan "de / da" ayrı yazılır ve hiçbir zaman "te / ta" şekline dönüşmez. "hiç de" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-9-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı doğrudur?',
        options: [
          { id: 'A', text: 'Herkez' },
          { id: 'B', text: 'Pekçok' },
          { id: 'C', text: 'Hiç bir' },
          { id: 'D', text: 'Birtakım sorunlar' },
          { id: 'E', text: 'Bügün' }
        ],
        correctOptionId: 'D',
        explanation: '"Birtakım" kelimesi "bazı" anlamında kullanıldığında bitişik yazılır (Birtakım sorunlar). Diğerleri: herkes, pek çok, hiçbir, bugün.'
      },
      {
        id: 'q-yk-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde tarihlerin yazımıyla ilgili bir hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Atatürk 10 Kasım 1938\'de vefat etti.' },
          { id: 'B', text: 'Bu yıl okullar 9 eylül pazartesi günü açılacak.' },
          { id: 'C', text: 'Her sene temmuz ayında memlekete gideriz.' },
          { id: 'D', text: 'Kardeşim 2015 yılında doğdu.' },
          { id: 'E', text: 'Sınavımız 15 Mayıs\'ta yapılacakmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'Belirli bir tarih bildiren ay ve gün adları büyük harfle başlar. "9 Eylül Pazartesi" şeklinde E ve P büyük olmalıdır.'
      },
      {
        id: 'q-yk-9-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Ablamın nişanı haftaya yapılacak.' },
          { id: 'B', text: 'Bana doğum günümde harika bir süpriz yaptı.' },
          { id: 'C', text: 'Marketten taze ekmek alıp eve döndüm.' },
          { id: 'D', text: 'Bugün gökyüzü bulutsuz ve masmaviydi.' },
          { id: 'E', text: 'Karşısına çıkan her zorluğu aşmayı başardı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Süpriz" kelimesinin doğru yazılışı "sürpriz" şeklindedir (r harfi ile).'
      },
      {
        id: 'q-yk-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınavdan seksen beş puan aldım.' },
          { id: 'B', text: 'Otobüsümüz saat 16.00\'da hareket edecek.' },
          { id: 'C', text: 'Çocuklara 4\'er tane oyuncak hediye edildi.' },
          { id: 'D', text: 'Kardeşim yarışmada 2. sırayı aldı.' },
          { id: 'E', text: 'Bu yıl otuz üç yaşına girecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Üleştirme sayıları rakamla değil yazıyla (harfle) belirtilir. "dörder" şeklinde olmalıydı.'
      },
      {
        id: 'q-yk-9-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru ekinin ("mi") yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Bunu tek başına yapabiliyor musun?' },
          { id: 'B', text: 'Sen de bizimle sinemaya gelecekmisin?' },
          { id: 'C', text: 'Güneş açtı mı içimi bir sevinç kaplar.' },
          { id: 'D', text: 'Daha önce hiç böyle bir şey duymuş muydun?' },
          { id: 'E', text: 'Güzel mi güzel bir hikaye anlattı bize.' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru eki (veya zaman/koşul anlamı katan) "mi / mı" eki her zaman ayrı yazılır. "gelecek misin?" şeklinde ayrı olmalıydı.'
      },
      {
        id: 'q-yk-9-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Eşofman' },
          { id: 'B', text: 'Şoför' },
          { id: 'C', text: 'Kirpik' },
          { id: 'D', text: 'Makina' },
          { id: 'E', text: 'Kibrit' }
        ],
        correctOptionId: 'D',
        explanation: 'Kelimenin doğru yazımı "makine" şeklindedir (a harfiyle değil e harfiyle yazılır).'
      },
      {
        id: 'q-yk-9-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kısaltmaların yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'TDK\'nun yeni imla kılavuzunu almalıyım.' },
          { id: 'B', text: 'THY\'nin sefer saatlerinde değişiklik yapıldı.' },
          { id: 'C', text: 'TBMM\'nin yeni dönemi bugün açıldı.' },
          { id: 'D', text: 'MEB\'in belirlediği takvime göre hareket edeceğiz.' },
          { id: 'E', text: 'ODTÜ\'den mezun olmak onun en büyük hayaliydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Büyük harflerle yapılan kısaltmalara getirilen ekler, kısaltmanın son harfinin okunuşuna göre gelir. "K" harfi "ke" diye okunduğu için "TDK\'nin" olmalıdır.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-9-orta',
    title: 'Yazım Kuralları 9 (Orta)',
    description: 'Yazım Kuralları - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-yk-9-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Eski eşyaları sokağa terk ettik.' },
          { id: 'B', text: 'Hatasını farkedince hemen benden özür diledi.' },
          { id: 'C', text: 'Bu büyük haksızlığı kabul edemem.' },
          { id: 'D', text: 'Olayı amirine hemen arz edeceğini söyledi.' },
          { id: 'E', text: 'Bu soğuk havalarda dışarı çıkarsan hasta olursun.' }
        ],
        correctOptionId: 'B',
        explanation: '"Fark etmek" fiilinde herhangi bir ses düşmesi veya türemesi olmadığı için ayrı yazılması gerekir. "fark edince" olmalıydı.'
      },
      {
        id: 'q-yk-9-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Öğrenciler okula <u>akın akın</u> geliyordu.' },
          { id: 'B', text: 'Bütün sorunları <u>başbaşa</u> konuşup hallettiler.' },
          { id: 'C', text: 'Toplantıda art <u>arda</u> yeni fikirler sunuldu.' },
          { id: 'D', text: 'Kardeşiyle <u>yan yana</u> oturmayı çok sever.' },
          { id: 'E', text: 'Yolda <u>el ele</u> tutuşmuş iki çocuk gördüm.' }
        ],
        correctOptionId: 'B',
        explanation: 'İkilemeler daima ayrı yazılır. "baş başa" şeklinde ayrı yazılması gerekir.'
      },
      {
        id: 'q-yk-9-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Tatilde Karadeniz kıyılarını gezeceğiz.' },
          { id: 'B', text: 'Okula gelen Müfettiş Ali bey sınıfları gezdi.' },
          { id: 'C', text: 'Erzurum\'da Palandöken Dağı yine bembeyaz oldu.' },
          { id: 'D', text: 'Almanca öğrenmek için kursa yazıldım.' },
          { id: 'E', text: 'Taksim Meydanı\'nda büyük bir konser düzenlendi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi adlarından sonra gelen unvan ve saygı sözleri büyük harfle başlar. "Ali Bey" şeklinde B harfi büyük olmalıdır.'
      },
      {
        id: 'q-yk-9-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Laboratuvar' },
          { id: 'B', text: 'Motosiklet' },
          { id: 'C', text: 'Kravat' },
          { id: 'D', text: 'Orijinal' },
          { id: 'E', text: 'Zatürree' }
        ],
        correctOptionId: 'E',
        explanation: 'Kelimenin güncel doğru yazımı "Zatürre" şeklindedir.'
      },
      {
        id: 'q-yk-9-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'İllaki bu elbisenin aynısını alacağım diye tutturdu.' },
          { id: 'B', text: 'Bugün ki toplantıya mutlaka zamanında katılmalısın.' },
          { id: 'C', text: 'Bizimki yine ortalıklarda görünmüyor.' },
          { id: 'D', text: 'Mademki gelmeyecektin, bunu en başından söylemeliydin.' },
          { id: 'E', text: 'Oysaki biz ona ne kadar çok güvenmiştik.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zaman bildiren sözcüklere eklenen "-ki" yapım ekidir ve bitişik yazılır (kü şeklinde de uyuma girebilir). "Bugünkü" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işaretinin (\') kullanımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Ankara\'nın kışları çok sert ve ayaz geçer.' },
          { id: 'B', text: 'Avrupa Birliği\'ne yeni ülkeler katılacakmış.' },
          { id: 'C', text: 'Türkçe\'nin kurallarını öğrenmek oldukça zevklidir.' },
          { id: 'D', text: 'Samsun\'a 1919\'da çıkarak milli mücadeleyi başlattı.' },
          { id: 'E', text: 'Atatürk\'ün Söylev\'i her zaman rehberimiz olmalıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen yapım ekleri ve bunlardan sonra gelen çekim ekleri kesme ile ayrılmaz. "Türkçenin" şeklinde kesmesiz olmalıdır.'
      },
      {
        id: 'q-yk-9-17',
        difficulty: 'medium',
        questionText: 'Yön adlarının yazımıyla ilgili aşağıdaki cümlelerin hangisinde yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Güneydoğu Anadolu, yazın oldukça sıcaktır.' },
          { id: 'B', text: 'Rüzgar bugün kuzeybatıdan çok şiddetli esecekmiş.' },
          { id: 'C', text: 'Evin Kuzey cephesi kışın hiç güneş almıyor.' },
          { id: 'D', text: 'Uzak Doğu kültürü beni her zaman derinden etkilemiştir.' },
          { id: 'E', text: 'Türkiye\'nin doğusu dağlık bir yapıya sahiptir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yön adları, özel ismin ardından geldiklerinde veya tek başlarına kullanıldıklarında küçük harfle başlar. "Evin kuzey cephesi" şeklinde küçük k ile yazılmalıydı.'
      },
      {
        id: 'q-yk-9-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki birleşik sözcüklerden hangisi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Hafta sonu' },
          { id: 'B', text: 'Gözyaşı' },
          { id: 'C', text: 'Gökyüzü' },
          { id: 'D', text: 'Haftaiçi' },
          { id: 'E', text: 'Yeryüzü' }
        ],
        correctOptionId: 'D',
        explanation: '"İç, dış, sıra" kelimeleriyle oluşturulan birleşik kelimeler ve "hafta sonu, hafta içi" gibi zaman bildiren kelimeler ayrı yazılır. "Hafta içi" ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-9-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" ekinin yazımında yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Yarın akşam bize sen de gelir misin?' },
          { id: 'B', text: 'Bahar geldimi her taraf yeşile bürünür.' },
          { id: 'C', text: 'Bu haberi ondan daha önce duymuş muydun?' },
          { id: 'D', text: 'Güzel mi güzel bir köy evi kiraladık.' },
          { id: 'E', text: 'Sözlerimi gerçekten ciddiye alıyor musun?' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru eki veya zaman/koşul anlamı katan "mi", her zaman kendinden önceki kelimeden ayrı yazılır. "geldi mi" şeklinde ayrı olmalıydı.'
      },
      {
        id: 'q-yk-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımıyla ilgili bir kural hatası vardır?',
        options: [
          { id: 'A', text: 'Kitabın iki yüz ellinci sayfasında kaldım.' },
          { id: 'B', text: 'Babam borç olarak tam beşyüz bin lira ödedi.' },
          { id: 'C', text: 'Maçın 45. dakikasında kırmızı kart çıktı.' },
          { id: 'D', text: 'Çocuklara üçer elma paylaştırdı.' },
          { id: 'E', text: 'Toplantı saat 15.30\'da konferans salonunda olacak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sayılar yazıyla yazıldığında (çek, senet gibi ticari evraklar hariç) her kelime ayrı yazılır. "beş yüz bin" şeklinde ayrı yazılmalıydı.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-9-zor',
    title: 'Yazım Kuralları 9 (Zor)',
    description: 'Yazım Kuralları - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-yk-9-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik fiillerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Tüm zorluklara rağmen ona yardım edeceğini hissetti.' },
          { id: 'B', text: 'Verilen karara itiraz etmeyip durumu kabullendi.' },
          { id: 'C', text: 'Kendisine söylenen yalanları nihayet farketti.' },
          { id: 'D', text: 'Görevi bırakıp istifa edeceğini amirine arz etti.' },
          { id: 'E', text: 'Haklı olduğu davada sonuna kadar mücadele etti.' }
        ],
        correctOptionId: 'C',
        explanation: '"Fark etmek" fiilinde ses düşmesi veya türemesi olmadığı için ayrı yazılması gerekir: "fark etti".'
      },
      {
        id: 'q-yk-9-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Şehrin <u>kuzeydoğu</u> yönünde yeni bir sanayi bölgesi kuruldu.' },
          { id: 'B', text: 'Çocuklar <u>birden bire</u> karşıma çıkınca çok korktum.' },
          { id: 'C', text: 'Geniş bir <u>iş birliği</u> ağı sayesinde proje başarıyla tamamlandı.' },
          { id: 'D', text: 'Kitabın <u>ön sözü</u> yazarın asıl niyetini anlatıyor.' },
          { id: 'E', text: 'Trafik kurallarını <u>hiçe sayan</u> sürücülere ceza yazıldı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Birdenbire" kelimesi anlamca kaynaşmış birleşik bir kelime olduğu için daima bitişik yazılır.'
      },
      {
        id: 'q-yk-9-23',
        difficulty: 'hard',
        questionText: 'Yer, millet ve kişi adlarıyla kurulan birleşik kelimelerde sadece özel adlar büyük harfle başlar. Aşağıdakilerin hangisinde bu kurala uyulmamıştır?',
        options: [
          { id: 'A', text: 'Evimizin bahçesine bir de Ankara kedisi sahiplendik.' },
          { id: 'B', text: 'Misafirlerimize yemekten sonra Türk Kahvesi ikram ettik.' },
          { id: 'C', text: 'Yemekte bol baharatlı bir Hint kumaşı motifi gördüm.' },
          { id: 'D', text: 'Usta gelirken yanında İngiliz anahtarını da getirmiş.' },
          { id: 'E', text: 'Tatildeyken meşhur Maraş dondurmasından bolca yedik.' }
        ],
        correctOptionId: 'B',
        explanation: '"Türk kahvesi" şeklinde "kahvesi" kelimesinin "k"si küçük yazılmalıdır. Sadece özel ad (Türk) büyük yazılır.'
      },
      {
        id: 'q-yk-9-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Ne yazık ki bu sene beklenen yağmurlar yağmadı.' },
          { id: 'B', text: 'İnanıyorumki o da bir gün hatalarını anlayacaktır.' },
          { id: 'C', text: 'Oysaki biz ona ne kadar çok güvenmiş, inanmıştık.' },
          { id: 'D', text: 'Yarınki sınav için hepimiz çok sıkı çalışıyoruz.' },
          { id: 'E', text: 'Seninki yine mazeret uydurup toplantıya gelmedi.' }
        ],
        correctOptionId: 'B',
        explanation: '"İnanıyorum ki" cümlesindeki "ki" bağlaçtır ve her zaman ayrı yazılır.'
      },
      {
        id: 'q-yk-9-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?',
        options: [
          { id: 'A', text: 'Birtakım insanlar kuralları hiçe sayarak başkalarını tehlikeye atıyor.' },
          { id: 'B', text: 'Hiç kimse bu ani karara bir anlam veremedi de sormak ta istemedi.' },
          { id: 'C', text: 'Hafta içi hergün düzenli olarak kütüphaneye gidip çalışıyor.' },
          { id: 'D', text: 'Birçoğu bu projenin başarıyla sonuçlanmıyacağını düşünüyordu.' },
          { id: 'E', text: 'Sen de bizimle gelirsen çok eylenceli vakit geçiririz.' }
        ],
        correctOptionId: 'A',
        explanation: 'A şıkkında "Birtakım" kelimesi belgisizlik anlamı taşıdığı için doğru bitişik yazılmıştır. B\'de "sormak da" olmalı. C\'de "her gün" ayrı olmalı. D\'de "sonuçlanmayacağını" olmalı (daralma olmaz). E\'de "eğlenceli" olmalı.'
      },
      {
        id: 'q-yk-9-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde büyük harflerin kullanımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Yeni tasarı yarın sabah <u>Bakanlar Kurulu\'nda</u> görüşülecek.' },
          { id: 'B', text: 'Kışın <u>Doğu Anadolu\'nun</u> yüksek kesimlerine kar yağar.' },
          { id: 'C', text: 'Dilekçesini <u>Kaymakam</u> Bey bizzat okudu ve onayladı.' },
          { id: 'D', text: 'Toplantıda <u>Müdürümüzün</u> yaptığı konuşma herkesi etkiledi.' },
          { id: 'E', text: 'Gezimizde <u>Tuz Gölü\'nün</u> eşsiz manzarasını fotoğrafladık.' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel bir kurumu ya da makamı açıkça kastetmeyen genel isim veya unvan kullanımları (cümle içinde) küçük harfle başlar. Özel bir ismi temsil etmeyen "müdürümüzün" kelimesi küçük harfle başlamalıydı.'
      },
      {
        id: 'q-yk-9-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Şirketimizin kuruluşunun yirmi beşinci yılını kutluyoruz.' },
          { id: 'B', text: 'Çocuklara ikişer kitap hediye ederek onları sevindirdi.' },
          { id: 'C', text: 'Maaşına yüzde onbeş oranında zam yapıldığını öğrendi.' },
          { id: 'D', text: 'Kızım bu sene okulda 8\'inci sınıfa geçti.' },
          { id: 'E', text: 'Toplantı saat tam 14.30\'da yönetim odasında başlayacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sayılar harflerle yazıldığında, birleşik yazılması gereken ticari evraklar dışında her kelime ayrı yazılır. "on beş" şeklinde ayrı yazılmalıydı.'
      },
      {
        id: 'q-yk-9-28',
        difficulty: 'hard',
        questionText: 'Tarihi olay, çağ ve dönem adları büyük harfle başlar. Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Türk milleti Kurtuluş Savaşı\'nda büyük bir destan yazmıştır.' },
          { id: 'B', text: 'Tanzimat Dönemi, Türk edebiyatı için bir dönüm noktasıdır.' },
          { id: 'C', text: 'İnsanlar Eski çağda avcılık ve toplayıcılıkla geçinirdi.' },
          { id: 'D', text: 'Lale Devri\'nde eğlence ve yenileşme hareketleri ön plandadır.' },
          { id: 'E', text: 'Avrupa, Rönesans Dönemi ile karanlıktan aydınlığa çıkmıştır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihi çağ adlarının tüm kelimeleri büyük harfle başlar. "Eski Çağ\'da" şeklinde Ç harfi de büyük yazılmalıdır.'
      },
      {
        id: 'q-yk-9-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de/da" bağlacının yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Senin bu konudaki fikrini de merak ediyorum.' },
          { id: 'B', text: 'Sınavı kazansa da kazanmasa da onu destekleyeceğiz.' },
          { id: 'C', text: 'O kadar yorgundum ki dinlenmeye vaktim de olmadı.' },
          { id: 'D', text: 'Eşyaları taşıdık ta belim koptu diyebilirim.' },
          { id: 'E', text: 'Durumu ona anlattık ama pek de oralı olmadı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bağlaç olan "de/da" ayrı yazılır ve asla ünsüz sertleşmesine (te/ta) uğramaz. "taşıdık da" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-9-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı TDK kurallarına göre yanlıştır?',
        options: [
          { id: 'A', text: 'Art arda' },
          { id: 'B', text: 'Baş başa' },
          { id: 'C', text: 'Yan yana' },
          { id: 'D', text: 'Git gide' },
          { id: 'E', text: 'Günden güne' }
        ],
        correctOptionId: 'D',
        explanation: '"Gitgide" kelimesi anlamca kaynaşmış bir zarf olduğu için TDK kuralına göre bitişik yazılır.'
      }
    ]
  }
];
