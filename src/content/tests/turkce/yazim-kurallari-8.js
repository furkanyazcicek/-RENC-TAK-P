export default [
  {
    id: 'test-yazim-kurallari-8-kolay',
    title: 'Yazım Kuralları 8 (Kolay)',
    description: 'Yazım Kuralları - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-yk-8-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Arkadaşım Ege Üniversitesi Tıp Fakültesini kazandı.' },
          { id: 'B', text: 'Bugün kedimiz tekir sütünü içmedi.' },
          { id: 'C', text: 'Dayım her sabah Milliyet gazetesi okur.' },
          { id: 'D', text: 'Doktor Ali Bey hastalarıyla çok ilgileniyor.' },
          { id: 'E', text: 'Anadolu\'nun doğusunda kışlar çok sert geçer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayvanlara verilen özel adlar büyük harfle başlar. "Tekir" kelimesinin T\'si büyük olmalıdır.'
      },
      {
        id: 'q-yk-8-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki"nin yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'O kadar yorulmuştu ki koltukta uyuyakaldı.' },
          { id: 'B', text: 'Duydum ki buralardan ayrılacakmışsın.' },
          { id: 'C', text: 'Sınıfta ki öğrenciler sessizce öğretmeni bekliyordu.' },
          { id: 'D', text: 'Benim kitabım evde kaldı, seninki nerede?' },
          { id: 'E', text: 'Bugünkü sınav sandığımdan daha kolaydı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bulunma bildiren "-de/-da" ekinden sonra gelen "ki" daima bitişik yazılır (sıfat yapan ki). "Sınıftaki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-8-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de / da"nın yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Toplantıda çok önemli konular ele alındı.' },
          { id: 'B', text: 'Sen de bizimle bu projede yer almalısın.' },
          { id: 'C', text: 'Kardeşim ev de tek başına kalmaktan korkar.' },
          { id: 'D', text: 'Bunu ona da söylemeliyiz.' },
          { id: 'E', text: 'Dışarıda lapa lapa kar yağıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bulunma durum eki olan "-de / -da" isme bitişik yazılır. "evde" şeklinde bitişik yazılmalıydı.'
      },
      {
        id: 'q-yk-8-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı doğrudur?',
        options: [
          { id: 'A', text: 'Herkez' },
          { id: 'B', text: 'Herhangi' },
          { id: 'C', text: 'Bir çok' },
          { id: 'D', text: 'Hergün' },
          { id: 'E', text: 'Hiç bir' }
        ],
        correctOptionId: 'B',
        explanation: '"Herhangi" kelimesi bitişik yazılır ve yazımı doğrudur. (Diğerleri: herkes, birçok, her gün, hiçbir).'
      },
      {
        id: 'q-yk-8-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde tarihlerin yazımıyla ilgili bir hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Mustafa Kemal, 19 Mayıs 1919\'da Samsun\'a çıktı.' },
          { id: 'B', text: 'Okulumuz 10 eylül 2024\'te açılacak.' },
          { id: 'C', text: 'Her yıl haziran ayında tatile çıkarız.' },
          { id: 'D', text: 'Kardeşim 2008 yılında dünyaya geldi.' },
          { id: 'E', text: 'Toplantımız 15 Ekim Salı günü yapılacak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Belirli bir tarihi (rakamla) bildiren ay ve gün adları büyük harfle başlar. "10 Eylül" şeklinde E büyük olmalıdır.'
      },
      {
        id: 'q-yk-8-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Arkadaşım bana çok güzel bir kitap hediye etti.' },
          { id: 'B', text: 'Babamın bana yaptığı süpriz beni çok mutlu etti.' },
          { id: 'C', text: 'Dünkü olaydan sonra kimseyle tek kelime konuşmadı.' },
          { id: 'D', text: 'Karanlıkta yalnız yürümekten çok korkardı.' },
          { id: 'E', text: 'Yanlış anlaşıldığı için herkesten özür diledi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Süpriz" kelimesinin doğru yazılışı "sürpriz" şeklindedir (r harfi ile).'
      },
      {
        id: 'q-yk-8-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınava giren otuz beş öğrenci başarılı oldu.' },
          { id: 'B', text: 'Otobüsümüz saat 14.30\'da hareket edecek.' },
          { id: 'C', text: 'Öğrenciler 2\'şer 2\'şer sıraya girdi.' },
          { id: 'D', text: 'Yarışmada 1. sırayı alan sporcu altın madalya kazandı.' },
          { id: 'E', text: 'Bugün elli yaşına bastığını söyledi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Üleştirme sayıları rakamla değil yazıyla (harfle) belirtilir. "ikişer ikişer" şeklinde olmalıydı.'
      },
      {
        id: 'q-yk-8-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru ekinin ("mi") yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Bunu yaparken hiç zorlanmıyor musun?' },
          { id: 'B', text: 'Sen de bizimle parka gelecek misin?' },
          { id: 'C', text: 'Zil çaldımı herkes dışarı koşar.' },
          { id: 'D', text: 'Bu kitabı daha önce okumuş muydun?' },
          { id: 'E', text: 'Soğuk mu soğuk bir günde yola çıktık.' }
        ],
        correctOptionId: 'C',
        explanation: 'Zaman/koşul veya soru anlamı katan "mi / mı" eki her zaman ayrı yazılır. "çaldı mı" şeklinde ayrı olmalıydı.'
      },
      {
        id: 'q-yk-8-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Şoför' },
          { id: 'B', text: 'Makine' },
          { id: 'C', text: 'Kibrit' },
          { id: 'D', text: 'Yalnış' },
          { id: 'E', text: 'Kirpik' }
        ],
        correctOptionId: 'D',
        explanation: 'Kelimenin doğru yazımı "yanlış" şeklindedir (yanılmaktan gelir).'
      },
      {
        id: 'q-yk-8-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kısaltmaların yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'TBMM\'nin yeni dönemi törenle başladı.' },
          { id: 'B', text: 'THY\'nın yeni sefer saatleri açıklandı.' },
          { id: 'C', text: 'TDK\'nin güncel sözlüğünü satın aldım.' },
          { id: 'D', text: 'MEB\'in açıkladığı takvimi inceledik.' },
          { id: 'E', text: 'ODTÜ\'den mezun olmak en büyük hayaliydi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük harflerle yapılan kısaltmalara getirilen ekler, son harfin okunuşuna göre gelir. "Y" harfi "ye" diye okunduğu için "THY\'nin" olmalıdır.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-8-orta',
    title: 'Yazım Kuralları 8 (Orta)',
    description: 'Yazım Kuralları - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-yk-8-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınavı kazandığını duyunca dünyalar onun oldu.' },
          { id: 'B', text: 'Bana yapılan bu büyük haksızlığı kabul edemem.' },
          { id: 'C', text: 'Hatasını farkedince hemen gelip özür diledi.' },
          { id: 'D', text: 'Kayıp eşyalarını bulmak için tüm evi aradı.' },
          { id: 'E', text: 'Arabayı yanlış yere park ettiği için ceza yedi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Fark etmek" birleşik fiilinde herhangi bir ses düşmesi veya türemesi olmadığı için ayrı yazılması gerekir. "fark edince" olmalıydı.'
      },
      {
        id: 'q-yk-8-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Olanları bana <u>açık açık</u> anlattı.' },
          { id: 'B', text: 'Bu zorlukları <u>baş başa</u> vererek aşacağız.' },
          { id: 'C', text: 'Toplantıda art <u>arda</u> pek çok konu konuşuldu.' },
          { id: 'D', text: 'Eşyaları <u>yanyana</u> dizmeyi çok seviyor.' },
          { id: 'E', text: 'Karanlıkta <u>el ele</u> tutuşarak ilerlediler.' }
        ],
        correctOptionId: 'D',
        explanation: 'İkilemeler daima ayrı yazılır. "yan yana" şeklinde ayrı yazılması gerekir.'
      },
      {
        id: 'q-yk-8-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Bu yıl tatile Akdeniz kıyılarına gideceğiz.' },
          { id: 'B', text: 'Toplantıda Avukat Ayşe hanım söz aldı.' },
          { id: 'C', text: 'Erzurum\'da Palandöken Dağı\'na kar yağmış.' },
          { id: 'D', text: 'İngilizce öğrenmek için yurt dışına çıkacak.' },
          { id: 'E', text: 'Taksim Meydanı\'nda büyük bir kalabalık vardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi isimlerinden sonra gelen unvan, saygı sözleri ve lakaplar büyük harfle başlar. "Ayşe Hanım" şeklinde büyük H ile yazılmalıdır.'
      },
      {
        id: 'q-yk-8-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Motosiklet' },
          { id: 'B', text: 'Laboratuvar' },
          { id: 'C', text: 'Orijinal' },
          { id: 'D', text: 'Kravat' },
          { id: 'E', text: 'Stajer' }
        ],
        correctOptionId: 'E',
        explanation: 'Sözcüğün doğru yazımı "Stajyer" şeklindedir (y harfi ile).'
      },
      {
        id: 'q-yk-8-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Oysaki biz ona ne kadar çok yardım etmiştik.' },
          { id: 'B', text: 'Yarın ki toplantıya mutlaka katılmalısın.' },
          { id: 'C', text: 'Seninki yine ortalıklarda hiç görünmüyor.' },
          { id: 'D', text: 'Mademki gelmeyecektin, bunu daha önce söylemeliydin.' },
          { id: 'E', text: 'Öyle hızlı konuştu ki kimse ne dediğini anlamadı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zaman bildiren sözcüklere eklenen "-ki" yapım ekidir ve bitişik yazılır. "Yarınki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-8-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işaretinin (\') kullanımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'İstanbul\'un kışları da oldukça soğuk geçer.' },
          { id: 'B', text: 'Atatürk\'ün Nutuk\'u her gencin başucu kitabıdır.' },
          { id: 'C', text: 'Türkçe\'mizin kurallarını öğrenmek çok önemlidir.' },
          { id: 'D', text: '1919\'da Samsun\'a çıkarak milli mücadeleyi başlattı.' },
          { id: 'E', text: 'TBMM\'nin yeni kararları dün akşam açıklandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen yapım ekleri ve bunlardan sonra gelen çekim ekleri kesme ile ayrılmaz. "Türkçemizin" şeklinde kesmesiz olmalıdır.'
      },
      {
        id: 'q-yk-8-17',
        difficulty: 'medium',
        questionText: 'Yön adlarının yazımıyla ilgili aşağıdaki cümlelerin hangisinde yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Güneydoğu Anadolu, yazın ülkemizin en sıcak bölgesidir.' },
          { id: 'B', text: 'Rüzgar bugün Kuzeybatıdan çok sert esiyor.' },
          { id: 'C', text: 'Evin kuzey cephesi kışın hiç güneş almıyor.' },
          { id: 'D', text: 'Uzak Doğu kültürü beni her zaman etkilemiştir.' },
          { id: 'E', text: 'Türkiye\'nin doğusu genellikle dağlık bir yapıya sahiptir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yön adları tek başlarına kullanıldıklarında veya özel ismin ardından geldiklerinde küçük harfle başlar. "kuzeybatıdan" şeklinde küçük k ile yazılmalıydı.'
      },
      {
        id: 'q-yk-8-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki birleşik sözcüklerden hangisi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Gökyüzü' },
          { id: 'B', text: 'Yeryüzü' },
          { id: 'C', text: 'Haftaiçi' },
          { id: 'D', text: 'Gözyaşı' },
          { id: 'E', text: 'Kuzeydoğu' }
        ],
        correctOptionId: 'C',
        explanation: '"İç, dış, sıra" kelimeleriyle oluşturulan birleşik kelimeler ayrı yazılır. "Hafta içi" şeklinde ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-8-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" ekinin yazımında yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Bu akşam bize sen de katılır mısın?' },
          { id: 'B', text: 'Bahar geldimi her yer cıvıl cıvıl olur.' },
          { id: 'C', text: 'O kitabı daha önce okumuş muydun?' },
          { id: 'D', text: 'Güzel mi güzel bir bahçesi vardı evlerinin.' },
          { id: 'E', text: 'Beni gerçekten dinliyor musun?' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru eki (veya zaman/koşul anlamı katan) "mi", her zaman kendinden önceki kelimeden ayrı yazılır. "geldi mi" şeklinde ayrı olmalıydı.'
      },
      {
        id: 'q-yk-8-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımıyla ilgili bir kural hatası vardır?',
        options: [
          { id: 'A', text: 'Kitabın yüz ellinci sayfasında kaldım.' },
          { id: 'B', text: 'Şirket tam üç yüz bin lira zarar etmiş.' },
          { id: 'C', text: 'Maçın 45\'inci dakikasında kırmızı kart çıktı.' },
          { id: 'D', text: 'Çocuklara 5\'er şeker dağıttı.' },
          { id: 'E', text: 'Toplantı saat 14.30\'da başlayacak.' }
        ],
        correctOptionId: 'D',
        explanation: 'Üleştirme sayıları rakamla değil yazıyla (harfle) yazılır. "beşer" şeklinde yazılmalıydı.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-8-zor',
    title: 'Yazım Kuralları 8 (Zor)',
    description: 'Yazım Kuralları - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-yk-8-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de / da"nın yazımıyla ilgili bir yanlışlık söz konusudur?',
        options: [
          { id: 'A', text: 'Bütün bu olanları ona da açıkça anlatmalısın.' },
          { id: 'B', text: 'Karanlıkta göz gözü görmüyordu da biz zor ilerledik.' },
          { id: 'C', text: 'Böyle davranırsan inan ki hiçte hoş karşılanmazsın.' },
          { id: 'D', text: 'O kitap bende değil, muhtemelen okulda unuttum.' },
          { id: 'E', text: 'Senin de bizimle aynı fikirde olmana sevindim.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlaç olan "de/da" hiçbir zaman ünsüz benzeşmesine uğrayarak "te/ta" şekline dönüşmez. "hiç de" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-8-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Bu olaylar karşısında hep <u>soğukkanlı</u> davranmayı başardı.' },
          { id: 'B', text: 'Gök bilimciler yeni bir <u>kara delik</u> keşfetti.' },
          { id: 'C', text: 'Hafta sonu arkadaşlarıyla <u>doğa üstü</u> olayları anlatan bir film izlediler.' },
          { id: 'D', text: 'Yeni <u>huzurevi</u> binasının inşaatı hızla devam ediyor.' },
          { id: 'E', text: 'Kitabın <u>ön söz</u> bölümü yazarın asıl niyetini açıklıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Alt, üst ve üzeri kelimelerinin sona gelmesiyle oluşan ve somut olarak yer bildirmeyen kelimeler bitişik yazılır. "Doğaüstü" şeklinde bitişik yazılmalıdır.'
      },
      {
        id: 'q-yk-8-23',
        difficulty: 'hard',
        questionText: 'Tarihi olay, çağ ve dönem adları büyük harfle başlar. Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'İlk Çağ\'da birçok önemli medeniyet kurulmuştur.' },
          { id: 'B', text: 'Lale Devri\'nde kültürel yeniliklere ağırlık verilmiştir.' },
          { id: 'C', text: 'Fransız ihtilali, tüm dünyayı derinden etkilemiştir.' },
          { id: 'D', text: 'Cilalı Taş Devri\'nde yerleşik hayata geçilmiştir.' },
          { id: 'E', text: 'Milli Mücadele Dönemi, Türk tarihinin kırılma noktasıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihi olay adlarının her kelimesi büyük harfle başlar. "Fransız İhtilali" şeklinde İ harfi de büyük olmalıydı.'
      },
      {
        id: 'q-yk-8-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki"nin yazımı ile ilgili yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Belki de tüm yaşananlar sadece bir tesadüftü.' },
          { id: 'B', text: 'Bizim ki yine geç saatlere kadar uyumamış.' },
          { id: 'C', text: 'Şemsiyeni al ki yağmurda ıslanmayasın.' },
          { id: 'D', text: 'Dünkü sınav beklediğimden çok daha kolaydı.' },
          { id: 'E', text: 'Mademki gelmeyecektin, bunu en başından söylemeliydin.' }
        ],
        correctOptionId: 'B',
        explanation: 'İlgi zamiri olan "-ki", bir ismin yerini tuttuğunda (Bizim çocuğumuz/arkadaşımız yerine bizimki) kendinden önceki sözcüğe bitişik yazılır. "Bizimki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-8-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili ifadenin yazımı doğrudur?',
        options: [
          { id: 'A', text: 'Misafirlerimize bol köpüklü <u>Türk Kahvesi</u> ikram ettik.' },
          { id: 'B', text: 'Çocuklar sokakta <u>Maraş Dondurması</u> yiyerek yürüyorlardı.' },
          { id: 'C', text: 'Yeni doğan yavrular safkan bir <u>Van Kedisiydi</u>.' },
          { id: 'D', text: 'Akşam yemeğinde <u>Antep fıstığı</u> kullanmış.' },
          { id: 'E', text: 'Bahçesindeki <u>Japon Gülü</u> çok güzel çiçek açmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yer, millet ve kişi adlarıyla kurulan birleşik kelimelerde sadece özel adlar büyük harfle başlar. "Antep fıstığı" yazımı doğrudur (diğerleri küçük olmalı: Türk kahvesi, Maraş dondurması, Van kedisi, Japon gülü).'
      },
      {
        id: 'q-yk-8-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Bu hafta sonu Abant Gölü\'nün eşsiz doğasında kamp yapacağız.' },
          { id: 'B', text: 'Avukat Ayşe Hanım, yarınki duruşma için çok yoğun çalışıyor.' },
          { id: 'C', text: 'Ülkemizin Güney Doğu bölgesinde yazlar çok sıcak ve kurak geçer.' },
          { id: 'D', text: 'Yeni atanan okul müdürümüz Hasan Bey herkesle tanıştı.' },
          { id: 'E', text: 'Atatürk\'ün Söylev\'i, her Türk gencinin okuması gereken bir yapıttır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ara yönler her zaman bitişik yazılır. "Güneydoğu" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-8-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Yüzüncü yıl etkinlikleri büyük bir coşkuyla kutlandı.' },
          { id: 'B', text: 'Oyunda hepimiz üçer taş alarak sıramızı bekledik.' },
          { id: 'C', text: 'Oğlum bu yıl altıncı sınıfa geçti.' },
          { id: 'D', text: 'İhaleye tam oniki farklı şirket katıldı.' },
          { id: 'E', text: 'Saat 15.30\'da toplantı odasında buluşacağız.' }
        ],
        correctOptionId: 'D',
        explanation: 'Sayılar harflerle yazıldığında her kelime ayrı yazılır. "on iki" şeklinde ayrı yazılmalıydı.'
      },
      {
        id: 'q-yk-8-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı TDK kurallarına göre doğrudur?',
        options: [
          { id: 'A', text: 'Zattürre' },
          { id: 'B', text: 'Ateşböceği' },
          { id: 'C', text: 'Kareografi' },
          { id: 'D', text: 'Farkediyor' },
          { id: 'E', text: 'Sürpriz' }
        ],
        correctOptionId: 'E',
        explanation: '"Sürpriz" kelimesinin yazımı doğrudur. A: Zatürre, B: Ateş böceği (ayrı), C: Koreografi, D: Fark ediyor (ayrı yazılır).'
      },
      {
        id: 'q-yk-8-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'O gece evin içinde uyurgezer gibi dolaşmış.' },
          { id: 'B', text: 'Bu eski konak, mirasçılar tarafından terkedilmiş.' },
          { id: 'C', text: 'Huzurevinde yaşayan yaşlıları ziyaret ettik.' },
          { id: 'D', text: 'Onun bu ani kararı hepimizi şaşkına çevirdi.' },
          { id: 'E', text: 'Gökkuşağının renkleri yağmurdan sonra çok belirgindi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yardımcı eylemlerle kurulan birleşik fiillerde ses düşmesi veya türemesi yoksa ayrı yazılır. "terk edilmiş" şeklinde ayrı olmalıydı.'
      },
      {
        id: 'q-yk-8-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Yüzbaşı Hasan, cephede kahramanca mücadele etti.' },
          { id: 'B', text: 'Ahmet çavuş, askerlerine her zaman iyi davranırdı.' },
          { id: 'C', text: 'Gazi Mustafa Kemal Atatürk, milletimizin önderidir.' },
          { id: 'D', text: 'Toplantıda Mimar Sinan\'ın eserleri detaylıca incelendi.' },
          { id: 'E', text: 'Yarın Prof. Dr. İlber Ortaylı konferans verecek.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi isimlerinden önce ve sonra gelen unvanlar, saygı sözleri ve rütbeler büyük harfle başlar. "Ahmet Çavuş" şeklinde Ç büyük olmalıdır.'
      }
    ]
  }
];
