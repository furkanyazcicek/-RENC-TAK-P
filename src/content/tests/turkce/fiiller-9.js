export default [
  {
    id: 'test-fiiller-9-kolay',
    title: 'Fiiller 9 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-fl-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi 1. çoğul şahıs (biz) ekiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bugünlerde seni hiç göremiyorum.' },
          { id: 'B', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'C', text: 'Soruları çözerken daha dikkatli olmalısın.' },
          { id: 'D', text: 'Lütfen, içeride biraz daha sessiz olun.' },
          { id: 'E', text: 'Onu dünkü toplantıda gördüklerini söylediler.' }
        ],
        correctOptionId: 'B',
        explanation: '1. çoğul şahıs zamiri "biz"dir. "Çıkacağız" (biz çıkacağız) eylemi 1. çoğul şahıs eki (-ız) almıştır.'
      },
      {
        id: 'q-fl-9-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiil, duyulan (öğrenilen) geçmiş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Babası her zaman çok anlayışlı davranır.' },
          { id: 'B', text: 'Odanı bugün mutlaka topla.' },
          { id: 'C', text: 'Dünkü sınav oldukça zor geçmiş.' },
          { id: 'D', text: 'Şu an mutfakta annesine yardım ediyor.' },
          { id: 'E', text: 'Bunu ona sen söylemelisin.' }
        ],
        correctOptionId: 'C',
        explanation: 'Duyulan (öğrenilen) geçmiş zaman eki "-mış / -miş"tir. C seçeneğindeki "geçmiş" fiili bu kiple çekimlenmiştir.'
      },
      {
        id: 'q-fl-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "durum" fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni aldığı arabayı çok beğendi.' },
          { id: 'B', text: 'Bütün gece hiç durmadan ağladı.' },
          { id: 'C', text: 'Evin bütün pencerelerini sildik.' },
          { id: 'D', text: 'Bardağı yere düşürüp kırdı.' },
          { id: 'E', text: 'Çocuk bahçedeki çiçekleri kopardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Durum fiilleri nesne almaz. "Ağladı" eylemi nesne (neyi, kimi) alamadığı için durum fiilidir. Diğer eylemler (beğendi, sildik, kırdı, kopardı) iş fiilidir.'
      },
      {
        id: 'q-fl-9-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi "oluş" bildirmektedir?',
        options: [
          { id: 'A', text: 'Bakmak' },
          { id: 'B', text: 'Kırmak' },
          { id: 'C', text: 'Görmek' },
          { id: 'D', text: 'Çürümek' },
          { id: 'E', text: 'Sevmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Oluş fiilleri zamanla kendiliğinden olan değişimleri anlatır. "Çürümek" eylemi öznenin iradesi dışında zamanla olan bir değişimi (oluş) ifade eder.'
      },
      {
        id: 'q-fl-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi şart kipi ile çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Geleceksin' },
          { id: 'B', text: 'Gelmelisin' },
          { id: 'C', text: 'Gelirse' },
          { id: 'D', text: 'Gelsen' },
          { id: 'E', text: 'Gelişin' }
        ],
        correctOptionId: 'D',
        explanation: 'Şart kipi eki "-se / -sa"dır. "Gel-se-n" eylemi şart kipiyle çekimlenmiştir. (C şıkkı geniş zamanın şartıdır, D şıkkı ise doğrudan şart kipidir).'
      },
      {
        id: 'q-fl-9-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde emir kipiyle çekimlenmiş bir eylem yoktur?',
        options: [
          { id: 'A', text: 'Hemen burayı terk et!' },
          { id: 'B', text: 'Lütfen, içeride sessiz olunuz.' },
          { id: 'C', text: 'O da bizimle birlikte gelsin.' },
          { id: 'D', text: 'Yarınki sınava mutlaka çalışmalıyız.' },
          { id: 'E', text: 'Odanı temizlemeden dışarı çıkma.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "çalışmalıyız" eylemi gereklilik kipiyle (-malı) çekimlenmiştir. A (terk et), B (olunuz), C (gelsin), E (çıkma) emir kipidir.'
      },
      {
        id: 'q-fl-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yansıma bir kökten türemiş fiildir?',
        options: [
          { id: 'A', text: 'Başlamak' },
          { id: 'B', text: 'Kanatmak' },
          { id: 'C', text: 'Gürlemek' },
          { id: 'D', text: 'Oynamak' },
          { id: 'E', text: 'Yaşamak' }
        ],
        correctOptionId: 'C',
        explanation: '"Gürlemek" eyleminin kökü doğadaki seslerin taklidi olan "gür" (yansıma) köküdür. Yansıma köke "-le" yapım eki gelerek eylem türetilmiştir.'
      },
      {
        id: 'q-fl-9-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün soruları kısa sürede çözdü.' },
          { id: 'B', text: 'O, okulun en hızlı koşucusuydu.' },
          { id: 'C', text: 'Hızlıca eşyalarını toplayıp dışarı çıktı.' },
          { id: 'D', text: 'Bardağı yere düşürüp parçalara ayırdı.' },
          { id: 'E', text: 'Ona olan borcunu sonunda ödedi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim soylu "koşucusu" kelimesi ek fiil (-y-du) alarak "koşucusuydu" şeklinde yüklem olmuştur.'
      },
      {
        id: 'q-fl-9-9',
        difficulty: 'easy',
        questionText: '"Yaz-" eyleminin gelecek zaman 2. tekil şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Yazıyorum' },
          { id: 'B', text: 'Yazacaksın' },
          { id: 'C', text: 'Yazdın' },
          { id: 'D', text: 'Yazacağız' },
          { id: 'E', text: 'Yazmışsın' }
        ],
        correctOptionId: 'B',
        explanation: 'Gelecek zaman eki "-acak", 2. tekil şahıs (sen) eki "-sın"dır. "Yaz-acak-sın" doğru çekimdir.'
      },
      {
        id: 'q-fl-9-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin olumsuz soru biçimi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu yaparken hiç mi utanmadın?' },
          { id: 'B', text: 'Sen de bizimle gelmeyecek misin?' },
          { id: 'C', text: 'Neden bize daha önce haber vermedin?' },
          { id: 'D', text: 'Onu dünkü toplantıda hiç görmedim.' },
          { id: 'E', text: 'Yarın erkenden yola çıkacak mıyız?' }
        ],
        correctOptionId: 'B',
        explanation: 'Olumsuz soru biçimi, olumsuzluk eki (-ma/-me) ve soru ekinin (mı/mi) bir arada kullanılmasıyla oluşur. "Gel-me-yecek mi-sin?" bu duruma uyar. (A seçeneğinde mi soru edatı utanmadın fiilinden ayrı ve farklı bir ögeyi sorguluyor gibi görünse de B en net kurallı dizilimdir).'
      }
    ]
  },
  {
    id: 'test-fiiller-9-orta',
    title: 'Fiiller 9 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-fl-9-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması vardır?',
        options: [
          { id: 'A', text: 'Keloğlan ormanda dolaşırken bir peri görür.' },
          { id: 'B', text: 'Her yaz tatilini memleketinde geçirir.' },
          { id: 'C', text: 'Dünkü olanları bana bir bir anlattı.' },
          { id: 'D', text: 'Allah\'ım, sen bize merhamet et!' },
          { id: 'E', text: 'Yarın sabah ilk uçakla buraya geliyor.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde cümlenin anlamı "yarın" (gelecek zaman) iken eylem "-yor" şimdiki zaman kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-9-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde şimdiki zamanın rivayetiyle çekimlenmiş bir eylem vardır?',
        options: [
          { id: 'A', text: 'Daha önceden buralara hiç gelmemişti.' },
          { id: 'B', text: 'Çocukken saatlerce sokakta oynardık.' },
          { id: 'C', text: 'Bütün bu olayları o planlıyormuş.' },
          { id: 'D', text: 'Bunu yapacağını daha önce söylemeliydi.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecekti.' }
        ],
        correctOptionId: 'C',
        explanation: 'Şimdiki zaman kipi (-yor) ve ek fiilin rivayeti (-muş) ekinin birleşmesiyle "planlı-yor-muş" fiili şimdiki zamanın rivayetini oluşturur.'
      },
      {
        id: 'q-fl-9-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tezlik fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu ağır çuvalı tek başıma taşıyabilirim.' },
          { id: 'B', text: 'Kapıyı açınca karşımda onu görüverdim.' },
          { id: 'C', text: 'Siz önden gide durun, biz hemen geliyoruz.' },
          { id: 'D', text: 'Ayağı takılınca merdivenlerden düşeyazdı.' },
          { id: 'E', text: 'Beni aramadığını farz edelim.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tezlik fiili eyleme "-iver" getirilerek yapılır ve eylemin çabucak ya da ansızın yapıldığını bildirir. "Görüverdim" eylemi tezlik fiilidir.'
      },
      {
        id: 'q-fl-9-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "sürerlik eylemi" kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çocuk, televizyonun karşısında uyuyakalmış.' },
          { id: 'B', text: 'Bu hikaye yıllardır dilden dile anlatılagelir.' },
          { id: 'C', text: 'Sen buraları toplayadur, ben çayları getireyim.' },
          { id: 'D', text: 'Onun bu söylediklerine sadece bakakaldım.' },
          { id: 'E', text: 'Eşyaları hızlıca arabaya yükleyiverdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'Sürerlik eylemi -ekalmak, -egelmek, -edurmak ile kurulur (A, B, C, D seçenekleri). E seçeneğindeki "yükleyiverdi" ise tezlik eylemidir.'
      },
      {
        id: 'q-fl-9-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu ağır kutuyu tek başıma kaldırmam.' },
          { id: 'B', text: 'Bugünlerde beni hiç aramıyorsun.' },
          { id: 'C', text: 'Söylenenlerin hiçbirini anlayamadım.' },
          { id: 'D', text: 'Onu dünkü toplantıda hiç görmedim.' },
          { id: 'E', text: 'Yarınki sınava ne yazık ki girmeyecek.' }
        ],
        correctOptionId: 'C',
        explanation: '"Anlayamadım" (anla-y-a-ma-dı-m) eylemi, "anlayabildim" yeterlik fiilinin olumsuzudur. Diğer seçenekler (kaldırmam, aramıyorsun, görmedim, girmeyecek) basit olumsuzdur.'
      },
      {
        id: 'q-fl-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olmak" sözcüğü yardımcı eylem olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine hepimiz çok üzüldük, kahrolduk.' },
          { id: 'B', text: 'Son günlerde işler yüzünden çok yorgun oldu.' },
          { id: 'C', text: 'Karanlık basmadan önce her yer sessiz oldu.' },
          { id: 'D', text: 'Ailesi onay vermeyince nişanları iptal oldu.' },
          { id: 'E', text: 'Akşam üzeri bahçede büyük bir gürültü oldu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "oldu" eylemi "meydana geldi, koptu" anlamında asıl fiil olarak kullanılmıştır. Diğer seçeneklerde isimlerle birleşerek yardımcı eylem görevi üstlenmiştir.'
      },
      {
        id: 'q-fl-9-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde anlamca kaynaşmış (deyimleşmiş) birleşik eylem vardır?',
        options: [
          { id: 'A', text: 'Bütün bu olanlardan sonra ona hak verdim.' },
          { id: 'B', text: 'Uzaklardan bir tren düdüğü duyuldu.' },
          { id: 'C', text: 'Sonbahar rüzgarı ağaçların yapraklarını döküyor.' },
          { id: 'D', text: 'Bunu duyunca etekleri zil çaldı.' },
          { id: 'E', text: 'Kuşlar neşeyle gökyüzüne doğru uçtu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "etekleri zil çalmak" çok sevinmek anlamında bir deyimdir ve anlamca kaynaşmış birleşik eylemdir.'
      },
      {
        id: 'q-fl-9-18',
        difficulty: 'medium',
        questionText: 'Ek fiil isim soylu kelimelere gelerek onları cümlede yüklem yapar. Aşağıdakilerin hangisinde ek fiil bu görevde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O zamanlar bu okulun en başarılı öğrencisiydi.' },
          { id: 'B', text: 'Bütün bu sorunların kaynağı bu eski evmiş.' },
          { id: 'C', text: 'Dünkü sınav soruları oldukça zordu.' },
          { id: 'D', text: 'Bunu ona daha önceden söylemeliymiş.' },
          { id: 'E', text: 'Onun en sevdiği ders her zaman tarihti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ek fiil (-miş) basit zamanlı eyleme (söyle-meli-miş) gelerek onu birleşik zamanlı eylem (gerekliliğin rivayeti) yapmıştır. Diğerlerinde isimleri yüklem yapmıştır.'
      },
      {
        id: 'q-fl-9-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde altı çizili kelimelerden hangisi yapısı bakımından birleşik bir eylemdir?',
        options: [
          { id: 'A', text: 'Eşyaları arabanın bagajına *yerleştirdi*.' },
          { id: 'B', text: 'Olanları duyunca o da benim gibi *kahroldu*.' },
          { id: 'C', text: 'Çocuklar bahçede saatlerce *koşuşturdu*.' },
          { id: 'D', text: 'Sonbaharda bütün ağaçların yaprakları *sarardı*.' },
          { id: 'E', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kahroldu" kelimesi kahır ve olmak kelimelerinin birleşmesiyle oluşan birleşik eylemdir. Diğerleri (A, C, D) türemiş, E ise basit eylemdir.'
      },
      {
        id: 'q-fl-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiilin şartı (-se, -sa) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Keşke sen de benimle birlikte gelsen.' },
          { id: 'B', text: 'Derslerini zamanında yaparsan başarılı olursun.' },
          { id: 'C', text: 'Hava bugün dünden daha sıcaksa denize girelim.' },
          { id: 'D', text: 'Onu gördüğünde mutlaka selam söyle.' },
          { id: 'E', text: 'Zamanında gelirsen maçı kaçırmayız.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ek fiilin şartı isim veya isim soylu kelimelere gelir. C seçeneğinde "sıcak" ismine gelerek (sıcak-sa) ek fiilin şartı oluşturulmuştur. B ve E\'de eylemlere eklenerek birleşik zamanlı eylem yapmıştır. A\'da ise şart kipidir.'
      }
    ]
  },
  {
    id: 'test-fiiller-9-zor',
    title: 'Fiiller 9 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-fl-9-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması yoktur?',
        options: [
          { id: 'A', text: 'Haftaya sınav sonuçları açıklanıyor.' },
          { id: 'B', text: 'Atatürk, 19 Mayıs\'ta Samsun\'a çıkar.' },
          { id: 'C', text: 'Akşamları yatmadan önce mutlaka kitap okuyorum.' },
          { id: 'D', text: 'Allah\'ım, lütfen bize yardım et!' },
          { id: 'E', text: 'Sabah erken kalkıp hemen işe gider.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "sabah erken kalkıp" (her sabah) ifadesi geniş zamanı işaret eder ve fiil de geniş zamanla (gider) çekimlenmiştir. A (şimdiki zaman, gelecek anlamı), B (geniş zaman, geçmiş anlamı), C (şimdiki zaman, geniş zaman anlamı), D (emir kipi, istek anlamı) kayma örneğidir.'
      },
      {
        id: 'q-fl-9-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zaman eki olan 3. tekil şahıs "-dır / -dir" bazen cümlede kullanılmaz (düşer). Aşağıdaki cümlelerin hangisinde ek fiil düşmüştür?',
        options: [
          { id: 'A', text: 'Benim en iyi arkadaşım sensin.' },
          { id: 'B', text: 'Bugün dışarıda çok tatlı bir esinti var.' },
          { id: 'C', text: 'O, mahallenin en çalışkan genciydi.' },
          { id: 'D', text: 'Sınavın bu kadar zor olacağını beklemiyordum.' },
          { id: 'E', text: 'Hava dünden beri oldukça soğuktu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim cümlesinin yüklemi "var" sözcüğüdür. Normalde "vardır" olması gerekirken "-dır" ek fiili düşmüştür.'
      },
      {
        id: 'q-fl-9-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ek eylem", görev bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Eğer erken gelirsen seninle dışarı çıkarız.' },
          { id: 'B', text: 'Zamanında çok çalışsaydın böyle olmazdı.' },
          { id: 'C', text: 'Bütün bu sorunların kaynağı onun dikkatsizliğiydi.' },
          { id: 'D', text: 'Eskiden bu sokakta çocuklar top oynardı.' },
          { id: 'E', text: 'Bunu önceden biliyormuş ama bize söylememiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde ek eylem basit zamanlı eylemlere gelerek onları birleşik zamanlı eylem yapmıştır. C seçeneğinde ise isim soylu kelimeye (dikkatsizlik) gelerek onu yüklem yapmıştır.'
      },
      {
        id: 'q-fl-9-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili fiillerden hangisi yeterlik fiilinin geniş zaman olumsuzu biçiminde çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Söylenenlerin hiçbirini *anlayamadım*.' },
          { id: 'B', text: 'Bu ağır masayı tek başına *kaldıramazsın*.' },
          { id: 'C', text: 'Oraya bu saatte asla *gitmeyiz*.' },
          { id: 'D', text: 'Ne kadar uğraşsa da kapıyı *açamadı*.' },
          { id: 'E', text: 'Bu konuda ona asla *inanmıyorum*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kaldıramazsın" eylemi "kaldırabilirsin" yeterlik fiilinin geniş zaman olumsuzudur. A ve D geçmiş zaman olumsuzu, C ve E ise basit olumsuzdur.'
      },
      {
        id: 'q-fl-9-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik zamanlı eylem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gün biter, akşam olur, karanlıklar çöker' },
          { id: 'B', text: 'Kandilli yüzerken uykularda / Mehtabı sürükledik sularda' },
          { id: 'C', text: 'Sana dertlerimi anlatsam / Belki beni biraz anlardın' },
          { id: 'D', text: 'Gökyüzü mavi, deniz mavi / Bekliyorum o güzel günleri' },
          { id: 'E', text: 'Yüzümü güneşe çevirdim, içimi ısıtsın diye' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "anlardın" (anla-r-dı-n) eylemi geniş zaman (-r) ve hikaye ek fiili (-dı) alarak birleşik zamanlı olmuştur. Diğerleri basit zamanlıdır.'
      },
      {
        id: 'q-fl-9-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili eylemin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Çocuk korkusundan ne yapacağını bilemeyip *donakaldı*.' },
          { id: 'B', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' },
          { id: 'C', text: 'Bu zor soruyu sadece öğretmen *çözebilir*.' },
          { id: 'D', text: 'Ayağı kayınca merdivenlerden *düşeyazdı*.' },
          { id: 'E', text: 'Dışarı çıkmadan önce bulaşıkları *yıkayıverdi*.' }
        ],
        correctOptionId: 'B',
        explanation: 'A (sürerlik), C (yeterlik), D (yaklaşma) ve E (tezlik) kurallı birleşik fiillerdir. B seçeneğindeki "geldi" ise basit yapılı eylemdir.'
      },
      {
        id: 'q-fl-9-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem basit zamanlı hem birleşik zamanlı eylem bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağıyordu, biz de eve doğru koştuk.' },
          { id: 'B', text: 'Ölmek kaderde var, bize ürküntü vermiyor' },
          { id: 'C', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış' },
          { id: 'D', text: 'Gökyüzünün başka rengi de varmış' },
          { id: 'E', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "fark ettim" ve "boğar" basit zamanlı eylemler, "yakarmış" ise birleşik zamanlı eylemdir.'
      },
      {
        id: 'q-fl-9-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil, eyleme "gerçekleşmemiş beklenti" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'O zamanlar çok iyi anlaşırlarmış.' },
          { id: 'B', text: 'Sınavı kazanırsan sana araba alacağım.' },
          { id: 'C', text: 'Eskiden buralarda çok güzel ağaçlar vardı.' },
          { id: 'D', text: 'Yarın akşam birlikte yemeğe çıkacaktık.' },
          { id: 'E', text: 'Bütün bu olanları o planlamış olmalı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Gelecek zamanın hikayesi (-acaktı / -ecekti), niyet edilen veya beklenen eylemin gerçekleşmediği anlamını taşır. "Çıkacaktık" gerçekleşmemiş beklentidir.'
      },
      {
        id: 'q-fl-9-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ek eylem almış bir fiilimsi (eylemsi)dir?',
        options: [
          { id: 'A', text: 'Senin bu yaptığın düpedüz *haksızlıktır*.' },
          { id: 'B', text: 'Onun en büyük hayali dünyayı *gezmekti*.' },
          { id: 'C', text: 'Gelen misafirleri kapıda büyük bir nezaketle *karşıladı*.' },
          { id: 'D', text: 'Bütün gün sokaklarda dolaşmaktan iyice *yorulmuştu*.' },
          { id: 'E', text: 'O, bizim mahallenin en eski *esnafıydı*.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim-fiil olan "gezmek" sözcüğü ek fiilin hikayesini (-ti) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-9-30',
        difficulty: 'hard',
        questionText: 'Birleşik fiillerden "anlamca kaynaşmış" olanlar genellikle deyimleşmiş yapılardır. Aşağıdaki cümlelerin hangisinde deyimleşmiş birleşik fiil yoktur?',
        options: [
          { id: 'A', text: 'Olanları duyunca herkes küplere bindi.' },
          { id: 'B', text: 'Bu işin altından kalkamayacağını anlayınca ipe un serdi.' },
          { id: 'C', text: 'Son günlerde davranışlarıyla iyice göze battı.' },
          { id: 'D', text: 'Bütün işleri tek başına sabahtan akşama kadar halletti.' },
          { id: 'E', text: 'O, yıllarca bu şirkette çalışıp dirsek çürüttü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "halletti" yardımcı eylemle kurulan birleşik fiildir. Diğerleri (küplere binmek, ipe un sermek, göze batmak, dirsek çürütmek) anlamca kaynaşmış (deyimleşmiş) birleşik fiillerdir.'
      }
    ]
  }
];
