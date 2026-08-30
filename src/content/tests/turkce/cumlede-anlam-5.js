export default [
  {
    id: 'test-cumlede-anlam-5-kolay',
    title: 'Cümlede Anlam 5 (Kolay)',
    description: 'Cümlede Anlam - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-ca-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde neden-sonuç (sebep-sonuç) ilişkisi vardır?',
        options: [
          { id: 'A', text: 'Tatilde dinlenmek için sahil kasabasına gitti.' },
          { id: 'B', text: 'Kar yağdığından yollar trafiğe kapandı.' },
          { id: 'C', text: 'Bu akşam sinemaya gidersek çok eğleniriz.' },
          { id: 'D', text: 'Sınavı kazanmak amacıyla gece gündüz çalıştı.' },
          { id: 'E', text: 'Oraya kadar gitmişken bizi de ziyaret et.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yolların kapanmasının sebebi "kar yağması"dır. A ve D seçenekleri amaç-sonuç, C seçeneği ise koşul-sonuç cümlesidir.'
      },
      {
        id: 'q-ca-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi söz konusudur?',
        options: [
          { id: 'A', text: 'Çok yorulduğu için koltukta uyuyakaldı.' },
          { id: 'B', text: 'Bunu yaparsan beni gerçekten çok mutlu edersin.' },
          { id: 'C', text: 'İlaçlarını almak üzere eczaneye kadar yürüdü.' },
          { id: 'D', text: 'Güneş battıktan sonra hava epey serinledi.' },
          { id: 'E', text: 'Yağmur yağdığından her yer çamur oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eczaneye yürüme eylemi "ilaçlarını almak" amacıyla (hedefiyle) yapılmıştır. A ve E neden-sonuç, B koşul-sonuç cümlesidir.'
      },
      {
        id: 'q-ca-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde koşul (şart) anlamı vardır?',
        options: [
          { id: 'A', text: 'Hava soğursa dışarı çıkmaktan vazgeçeriz.' },
          { id: 'B', text: 'Seni görmek için buralara kadar geldim.' },
          { id: 'C', text: 'Sınavdan düşük aldığı için çok üzgündü.' },
          { id: 'D', text: 'Kilo vermek maksadıyla diyet yapıyor.' },
          { id: 'E', text: 'Bunu sana vermek üzere hazırladım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde dışarı çıkmaktan vazgeçme durumu, "havanın soğuması" koşuluna bağlanmıştır. "-sa, -se" eki şart anlamı katmıştır.'
      },
      {
        id: 'q-ca-5-4',
        difficulty: 'easy',
        questionText: '"Keşke bu kitabı daha önce okusaydım!" cümlesinde hakim olan duygu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özlem' },
          { id: 'B', text: 'Sitem' },
          { id: 'C', text: 'Hayıflanma' },
          { id: 'D', text: 'Küçümseme' },
          { id: 'E', text: 'Şaşırma' }
        ],
        correctOptionId: 'C',
        explanation: 'Kişinin geçmişte yapmadığı bir eylemden dolayı (kitabı daha önce okumamaktan) duyduğu üzüntü "hayıflanma"dır.'
      },
      {
        id: 'q-ca-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde karşılaştırma yapılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava dünkünden çok daha sıcak.' },
          { id: 'B', text: 'Müzik dinlemek insanı dinlendirir.' },
          { id: 'C', text: 'Dün akşam arkadaşlarla tiyatroya gittik.' },
          { id: 'D', text: 'Bu konuyu seninle sonra detaylı konuşalım.' },
          { id: 'E', text: 'Yağmur yağınca sokaklar bomboş kaldı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde bugünün havası ile dünün havası "sıcaklık" yönünden karşılaştırılmıştır.'
      },
      {
        id: 'q-ca-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tanımlama" yapılmıştır?',
        options: [
          { id: 'A', text: 'Şiir okumak ruhumu dinlendiriyor.' },
          { id: 'B', text: 'O yazarın hikayeleri oldukça akıcı ve sürükleyicidir.' },
          { id: 'C', text: 'Bu yazarın son romanı çok satacak gibi görünüyor.' },
          { id: 'D', text: 'Tiyatro, insanı insana insanla anlatan bir sanattır.' },
          { id: 'E', text: 'Edebiyat, insanı derinden etkileyen bir alandır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Tiyatro nedir?" sorusuna cevap verilmiş ve tiyatronun tanımı yapılmıştır.'
      },
      {
        id: 'q-ca-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "varsayım" anlamı vardır?',
        options: [
          { id: 'A', text: 'Keşke biraz daha dikkatli davransaydın.' },
          { id: 'B', text: 'Sanıyorum o da yakında buraya taşınacak.' },
          { id: 'C', text: 'Farz edelim ki bu yıl kış çok sert geçti, ne yaparız?' },
          { id: 'D', text: 'Umarım her şey gönlünce olur.' },
          { id: 'E', text: 'Belki bu sene tatilde size katılırız.' }
        ],
        correctOptionId: 'C',
        explanation: 'Varsayım cümleleri, gerçekleşmemiş bir olayı bir an için gerçekleşmiş gibi düşünmeyi ifade eder. "Farz edelim ki" ifadesiyle kurulan C seçeneği varsayım bildirir.'
      },
      {
        id: 'q-ca-5-8',
        difficulty: 'easy',
        questionText: '"Gelecek yaz için yeni bir araba almayı planlıyorum." cümlesinde hangi anlam özelliği ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Tasarı (Plan)' },
          { id: 'B', text: 'Tahmin' },
          { id: 'C', text: 'Beklenti' },
          { id: 'D', text: 'Öneri' },
          { id: 'E', text: 'Uyarı' }
        ],
        correctOptionId: 'A',
        explanation: 'Cümlede kişinin gelecekte yapmayı planladığı (tasarladığı) bir işten söz edildiği için bu bir "tasarı" cümlesidir.'
      },
      {
        id: 'q-ca-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yakınma" (şikayet) anlamı vardır?',
        options: [
          { id: 'A', text: 'Belki yarın akşam size uğrayabilirim.' },
          { id: 'B', text: 'Bu sınavı kazanacağımı hiç sanmıyorum.' },
          { id: 'C', text: 'Keşke bu konuyu onunla hiç konuşmasaydım.' },
          { id: 'D', text: 'Bugün hava gerçekten çok güzel ve güneşli.' },
          { id: 'E', text: 'Şu bilgisayarın başında bu kadar saat oturmasına dayanamıyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde bir kişinin bilgisayar başında fazla zaman geçirmesinden duyulan rahatsızlık, şikayet (yakınma) dile getirilmiştir.'
      },
      {
        id: 'q-ca-5-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir "olasılık (ihtimal)" söz konusudur?',
        options: [
          { id: 'A', text: 'O işi kesinlikle zamanında bitireceğim.' },
          { id: 'B', text: 'Bu sorunu mutlaka çözmeliyiz.' },
          { id: 'C', text: 'Türkiye\'nin başkenti Ankara\'dır.' },
          { id: 'D', text: 'Bu akşam belki arkadaşlarımla sinemaya gideriz.' },
          { id: 'E', text: 'Dünya kendi etrafında döner.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "belki" sözcüğü, eylemin gerçekleşme durumunun kesin olmadığını, ihtimal dahilinde olduğunu gösterir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-5-orta',
    title: 'Cümlede Anlam 5 (Orta)',
    description: 'Cümlede Anlam - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-ca-5-11',
        difficulty: 'medium',
        questionText: 'I. Seni göreyim diye ta buralara kadar geldim.\nII. Araba bozulduğu için toplantıya geç kaldık.\nIII. Hava soğuk olduğundan herkes kalın giyinmişti.\nIV. İyi bir gelecek kurmak amacıyla gece gündüz çalışıyor.\nYukarıdaki numaralanmış cümlelerden hangileri "neden-sonuç" ilişkisi bildirmektedir?',
        options: [
          { id: 'A', text: 'I ve IV' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve III' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'II ve IV' }
        ],
        correctOptionId: 'C',
        explanation: 'II. cümlede gecikmenin nedeni "arabanın bozulması", III. cümlede kalın giyinmenin nedeni "havanın soğuk olması"dır (neden-sonuç). I ve IV ise amaç-sonuç bildirir.'
      },
      {
        id: 'q-ca-5-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "doğrudan anlatım" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Atatürk: "Yurtta sulh, cihanda sulh." demiştir.' },
          { id: 'B', text: 'Babam, akşam eve erken gelmemizi söyledi.' },
          { id: 'C', text: 'Annem yemeğimi yemeden kalkmamamı tembihledi.' },
          { id: 'D', text: 'Öğretmenimiz, yarın sözlü yapacağını söyledi.' },
          { id: 'E', text: 'Arkadaşım bu kitabın hayatını değiştirdiğini belirtti.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde Atatürk\'ün sözü hiçbir değişikliğe uğratılmadan, olduğu gibi ("Yurtta sulh, cihanda sulh.") aktarılmıştır. Bu duruma doğrudan anlatım denir. Diğerleri dolaylı anlatımdır.'
      },
      {
        id: 'q-ca-5-13',
        difficulty: 'medium',
        questionText: '"Sitem" ve "Yakınma" anlamca birbirine çok karıştırılır. Buna göre aşağıdakilerin hangisinde "sitem" anlamı vardır?',
        options: [
          { id: 'A', text: 'İnsanlar günümüzde birbirine hiç saygı göstermiyor.' },
          { id: 'B', text: 'Bu çocuklar sabahtan akşama kadar gürültü yapıyorlar.' },
          { id: 'C', text: 'O kadar söyledim ama sözümü dinleyen kim!' },
          { id: 'D', text: 'O kadar zaman geçti, insan bir kere olsun arayıp sorar.' },
          { id: 'E', text: 'Senin bu umursamaz tavırlarına artık katlanamıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde kişi, aranıp sorulmadığı için duyduğu kırgınlığı dile getirerek muhatabına (veya doğrudan yüzüne söylenebilecek bir yapıda) sitem etmektedir. (E şıkkında daha çok bir tepki/isyan vardır).'
      },
      {
        id: 'q-ca-5-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ön yargı (peşin hüküm)" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Bu kitabın çok başarılı olacağına inancım tam.' },
          { id: 'B', text: 'Göreceksin, bu takım bu sene de şampiyon olamayacak.' },
          { id: 'C', text: 'Bence dünkü maçın hakemi oldukça taraflıydı.' },
          { id: 'D', text: 'Belki de tüm bu olanlar bir tesadüften ibarettir.' },
          { id: 'E', text: 'Eskiden bu sokakta çocuklar neşe içinde oynardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ön yargı, henüz sonuçlanmamış bir olay hakkında önceden verilmiş kesin yargılardır. B seçeneğinde takımın şampiyon olamayacağı konusunda peşin hüküm (ön yargı) verilmiştir.'
      },
      {
        id: 'q-ca-5-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "küçümseme" söz konusudur?',
        options: [
          { id: 'A', text: 'Bunca işi tek başına yapabileceğini mi sanıyorsun?' },
          { id: 'B', text: 'Dört saatlik çalışma için sadece bu kadarcık mı ücret aldın?' },
          { id: 'C', text: 'Bu çocuk güya üniversiteyi kazanıp da bizi kurtaracak!' },
          { id: 'D', text: 'Böyle büyük bir adam olmak kolay mı sandın?' },
          { id: 'E', text: 'Senin gibi birinin bu soruyu çözememesi normal.' }
        ],
        correctOptionId: 'C',
        explanation: 'Küçümseme, bir kişiyi, niteliği değerce düşük görmektir. C seçeneğinde çocuğun üniversiteyi kazanamayacağı alaycı bir dille ifade edilerek küçümsenmiştir. (B şıkkında ise azımsama vardır).'
      },
      {
        id: 'q-ca-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "pişmanlık" anlamı vardır?',
        options: [
          { id: 'A', text: 'Keşke zamanında ben de sizinle birlikte o kampa katılsaydım.' },
          { id: 'B', text: 'Neden beni de yanınızda götürmediniz?' },
          { id: 'C', text: 'Bu kadar duyarsız olunmasına bir türlü anlam veremiyorum.' },
          { id: 'D', text: 'Keşke o karlı havada yola hiç çıkmasaydık.' },
          { id: 'E', text: 'Keşke bu hafta sonu yağmur yağmasa.' }
        ],
        correctOptionId: 'D',
        explanation: 'Pişmanlık, geçmişte yapılmış olan bir eylemden dolayı duyulan üzüntüdür (yola çıkmasaydık). A seçeneğinde (katılsaydım) ise yapılmamış bir şeyden duyulan üzüntü yani hayıflanma vardır.'
      },
      {
        id: 'q-ca-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "üslup (biçem)" ile ilgili bir yargıya yer verilmemiştir?',
        options: [
          { id: 'A', text: 'Yazar, yabancı sözcüklerden uzak, duru bir anlatım tercih etmiş.' },
          { id: 'B', text: 'Eserde kelimeler özenle seçilmiş, akıcı bir dil kullanılmış.' },
          { id: 'C', text: 'Sanatçı, kısa ve etkileyici cümlelerle okuru kendine bağlıyor.' },
          { id: 'D', text: 'Hikaye, göçmen bir ailenin büyük şehirde tutunma çabasını konu alıyor.' },
          { id: 'E', text: 'Yazarın betimlemelerindeki şiirsel dil hemen göze çarpıyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği eserin konusu (ne anlattığı, içeriği) ile ilgilidir. Diğer seçenekler yazarın dili, anlatımı yani üslubu (nasıl anlattığı) ile ilgilidir.'
      },
      {
        id: 'q-ca-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin "aşamalı bir durum (gittikçe, yavaş yavaş)" bildirdiği söylenebilir?',
        options: [
          { id: 'A', text: 'Birdenbire gökyüzünü kaplayan kara bulutlar yağmurun habercisiydi.' },
          { id: 'B', text: 'Fidanımız aydan aya boy atıp büyüyordu.' },
          { id: 'C', text: 'Dışarı çıkar çıkmaz onu karşımda gördüm.' },
          { id: 'D', text: 'Haberi alır almaz hemen yanımıza koştu.' },
          { id: 'E', text: 'Seni bir an için burada görünce çok şaşırdım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "aydan aya" ifadesi eylemin aniden değil, aşamalı olarak (gittikçe) gerçekleştiğini gösterir.'
      },
      {
        id: 'q-ca-5-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde öznel (kişisel) bir değerlendirme söz konusu değildir?',
        options: [
          { id: 'A', text: 'İstanbul\'un eşsiz manzarası herkesi büyülemeye yeter.' },
          { id: 'B', text: 'Yazarın son kitabı sürükleyici kurgusuyla dikkat çekiyor.' },
          { id: 'C', text: 'Şiirin o etkileyici ritmi okuyucuyu alıp götürüyor.' },
          { id: 'D', text: 'Kırmızı elbise ona gerçekten çok yakışmış.' },
          { id: 'E', text: 'Film, yirminci yüzyılın başlarındaki olayları konu alıyor.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki ifade kanıtlanabilir, kişiden kişiye değişmeyen nesnel bir yargıdır. Diğer seçeneklerde (eşsiz, sürükleyici, çok yakışmış, etkileyici) öznellik vardır.'
      },
      {
        id: 'q-ca-5-20',
        difficulty: 'medium',
        questionText: '"Eleştirmen, eseri incelerken kendi duygu ve düşüncelerinden arınmalı, sadece metne odaklanmalıdır."\nBu cümlede eleştirmenin hangi özelliği taşıması gerektiği vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Tutarlılık' },
          { id: 'B', text: 'Özgünlük' },
          { id: 'C', text: 'Nesnellik' },
          { id: 'D', text: 'Yalınlık' },
          { id: 'E', text: 'Akıcılık' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendi duygu ve düşüncelerinden (öznellikten) arınmak ve tarafsız olmak, "nesnellik" (objektiflik) kavramıyla ifade edilir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-5-zor',
    title: 'Cümlede Anlam 5 (Zor)',
    description: 'Cümlede Anlam - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-ca-5-21',
        difficulty: 'hard',
        questionText: 'I. Yazar, bu romanında devrik cümleler ve alışılmamış bağdaştırmalar kullanarak dili adeta yeniden yaratıyor.\nII. Şairin şiirlerinde imgeler o kadar yoğun ki okuyucu adeta bir duygu ormanında kayboluyor.\nIII. Eserlerinde Anadolu insanının çektiği çileleri ve yoksulluğu çok güzel anlatmış.\nIV. Yazar, son kitabında yabancılaşan modern insanın dramını ele alıyor.\nYukarıdaki cümlelerin hangilerinde eserin "içeriği (konusu)" ile ilgili bilgi verilmiştir?',
        options: [
          { id: 'A', text: 'III ve IV' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve IV' },
          { id: 'D', text: 'I ve II' },
          { id: 'E', text: 'II ve III' }
        ],
        correctOptionId: 'A',
        explanation: 'III. cümlede "Anadolu insanının çektiği çileler", IV. cümlede "modern insanın dramı" ifadeleri eserin konusunu (ne anlattığını) yani içeriğini belirtir. I ve II ise üslupla (nasıl anlattığıyla) ilgilidir.'
      },
      {
        id: 'q-ca-5-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "gerçekleşmemiş beklenti" anlamı vardır?',
        options: [
          { id: 'A', text: 'O kadar çalıştı ki sonunda üniversiteyi kazandı.' },
          { id: 'B', text: 'Son kitabının bu kadar çok satacağını hepimiz biliyorduk.' },
          { id: 'C', text: 'Bu projenin vaktinde bitmeyeceğini ben en başından söylemiştim.' },
          { id: 'D', text: 'Tatilde Bodrum\'a gitmeyi planlıyoruz.' },
          { id: 'E', text: 'Sınav sonuçlarının bugün açıklanacağını umuyordum.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde kişi sınav sonuçlarının bugün açıklanmasını beklemiş ancak bu beklentisi (bugün) gerçekleşmemiştir. (Umuyordum sözcüğü beklentinin boşa çıktığını hissettirir).'
      },
      {
        id: 'q-ca-5-23',
        difficulty: 'hard',
        questionText: '"Sanatçı, eserini yaratırken topluma ayna tutmakla kalmamalı, o aynanın arkasındaki sırları da göstermelidir."\nBu cümlede sanatçıdan beklenen asıl tutum aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Toplumsal sorunları nesnel bir dille yansıtması.' },
          { id: 'B', text: 'Görünenin ötesine geçerek derin anlamları ortaya çıkarması.' },
          { id: 'C', text: 'Halkın anlayabileceği sade bir dil kullanması.' },
          { id: 'D', text: 'Eserlerinde kendi duygularını gizlemeye çalışması.' },
          { id: 'E', text: 'Toplumun aksayan yönlerini eleştirerek çözümler sunması.' }
        ],
        correctOptionId: 'B',
        explanation: '"Aynanın arkasındaki sırları da göstermelidir" ifadesi, sadece görüneni (yüzeysel olanı) değil, görünenin ötesindeki derin anlamları, gizli gerçekleri (sırları) de ortaya çıkarması gerektiğini vurgular.'
      },
      {
        id: 'q-ca-5-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "değerlendirme" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Yazar son kitabını tam üç yılda tamamladığını söylüyor.' },
          { id: 'B', text: 'Dünkü toplantıda şirketin geleceğine dair önemli kararlar alındı.' },
          { id: 'C', text: 'Romanın ilk bölümlerindeki akıcılık ne yazık ki son bölümlerde kaybolmuş.' },
          { id: 'D', text: 'Bu hafta sonu sinemaya gitmek için arkadaşlarla sözleştik.' },
          { id: 'E', text: 'Kar yağışının yarından itibaren etkisini azaltması bekleniyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Değerlendirme, bir eser veya durum hakkında olumlu/olumsuz bir eleştiri ve görüş bildirmektir. C seçeneğinde romanın akıcılığı (üslubu) üzerinden bir değerlendirme yapılmıştır.'
      },
      {
        id: 'q-ca-5-25',
        difficulty: 'hard',
        questionText: '"İnsanlar kelimelerle köprüler de kurabilir, duvarlar da örebilir."\nBu cümleden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kelimelerin gücü, insanların iletişimindeki başarıyı belirler.' },
          { id: 'B', text: 'İletişimde kullanılan dil, insanları birleştirebileceği gibi ayırabilir de.' },
          { id: 'C', text: 'Sessiz kalmak çoğu zaman yanlış kelimeler kullanmaktan daha iyidir.' },
          { id: 'D', text: 'Kelimelerle inşa edilen bağlar, duvarlardan daha sağlamdır.' },
          { id: 'E', text: 'İnsanlar arasındaki en büyük engeller iletişimsizlikten kaynaklanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümledeki "köprüler kurmak" insanları birleştirmeyi, "duvarlar örmek" ise araya mesafe koyup insanları ayırmayı sembolize eder. Bu ikisini sağlayan şey dildir (kelimeler).'
      },
      {
        id: 'q-ca-5-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "kanış" (kendi kendini inandırma / avunma) anlamı vardır?',
        options: [
          { id: 'A', text: 'Ne yapsam da onu bu kararından vazgeçiremeyeceğimi biliyorum.' },
          { id: 'B', text: 'Belki de bu işin olmaması bizim için daha hayırlı olmuştur.' },
          { id: 'C', text: 'Bu projenin başarıya ulaşacağına dair en ufak bir şüphem yok.' },
          { id: 'D', text: 'Keşke biraz daha çalışıp o sınavı da geçebilseydim.' },
          { id: 'E', text: 'Yarın hava güzel olursa belki ailecek pikniğe gideriz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kişinin olumsuz sonuçlanan bir durumu, kendince olumlu bir nedene bağlayarak (hayırlı olmuştur diyerek) kabullenmesi, kendini teselli etmesi durumu vardır.'
      },
      {
        id: 'q-ca-5-27',
        difficulty: 'hard',
        questionText: '"Eleştiri, sanat eserine vurulan bir kilit değil, eserin gizli kapılarını açan bir anahtardır."\nBu cümlede eleştirinin hangi işlevi vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Sanatçının eksiklerini yüzüne vurarak onu düzeltmesi.' },
          { id: 'B', text: 'Eseri kısıtlamak yerine onun anlaşılamayan yönlerini açığa çıkarması.' },
          { id: 'C', text: 'Okuyucuya eserin sadece iyi yönlerini göstererek beğeni kazandırması.' },
          { id: 'D', text: 'Sanatçıları yeni eserler üretmeleri için sınırlandırması.' },
          { id: 'E', text: 'Eserin maddi değerini artırarak geniş kitlelere ulaştırması.' }
        ],
        correctOptionId: 'B',
        explanation: '"Vurulan kilit değil" sözüyle eseri kısıtlamadığı, "gizli kapıları açan anahtar" sözüyle de eserin keşfedilmeyi bekleyen, anlaşılmayan derinliklerini (kapılarını) okura açtığı vurgulanmaktadır.'
      },
      {
        id: 'q-ca-5-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem "koşul" hem de "neden-sonuç" ilgisi bir arada verilmiştir?',
        options: [
          { id: 'A', text: 'Çok çalışırsan sınavı kesinlikle kazanırsın.' },
          { id: 'B', text: 'Eğer kar yağarsa yollar kapandığı için köye gidemeyiz.' },
          { id: 'C', text: 'Sınavı kazandı diye ona güzel bir hediye aldık.' },
          { id: 'D', text: 'Yarın hava güzel olursa pikniğe gitmek için plan yaptık.' },
          { id: 'E', text: 'Oraya gidersen onu benim yerime de öp.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde köye gidememe koşulu "karın yağması"na, gidememenin nedeni ise "yolların kapanması"na bağlanmıştır. Hem koşul (-sa), hem neden-sonuç (-dığı için) vardır.'
      },
      {
        id: 'q-ca-5-29',
        difficulty: 'hard',
        questionText: 'I. Ünlü yazar, romanlarında hep kendi çocukluğunu ve yaşadığı sokağı anlatır.\nII. Şairin son kitabındaki şiirler, insanın doğa karşısındaki acizliğini işliyor.\nIII. Yazar, bu eserinde devrik cümleler ve alışılmamış bağdaştırmalar kullanarak dili adeta yeniden yaratıyor.\nIV. Romandaki karakterler oldukça sıradan ama bir o kadar da içimizden insanlar.\nBu cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'I. cümlede yazarın eserlerinin içeriğiyle ilgili bilgi verilmiştir.' },
          { id: 'B', text: 'II. cümlede eserin konusu belirtilmiştir.' },
          { id: 'C', text: 'III. cümlede yazarın üslubuna yönelik bir eleştiri / tespit yapılmıştır.' },
          { id: 'D', text: 'IV. cümlede karakterlerin psikolojik analizlerine ağırlık verildiği vurgulanmıştır.' },
          { id: 'E', text: 'I ve II numaralı cümleler içerik cümlesidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'IV. cümlede karakterlerin içimizden, sıradan insanlar olduğu söylenmiştir ancak "psikolojik analizlere ağırlık verildiği" gibi bir bilgi yer almamaktadır.'
      },
      {
        id: 'q-ca-5-30',
        difficulty: 'hard',
        questionText: '"Yaşadığımız çağa ayak uydurmak, rüzgarın yönüne göre yelken açmak gibidir."\nBu cümlede anlatılmak istenen asıl düşünce aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zamanın getirdiği yeniliklere uyum sağlamak zorunludur.' },
          { id: 'B', text: 'İnsan, değişen koşullara direnmek yerine onlara uyum göstermelidir.' },
          { id: 'C', text: 'Rüzgara karşı yelken açanlar her zaman başarılı olurlar.' },
          { id: 'D', text: 'Kişi kendi değerlerini çağın yeniliklerinden üstün tutmalıdır.' },
          { id: 'E', text: 'Toplumsal değişimler her zaman olumlu sonuçlar doğurmaz.' }
        ],
        correctOptionId: 'B',
        explanation: '"Rüzgarın yönüne göre yelken açmak", şartlara/gelişmelere uyum sağlamayı, direnmek yerine akışa/yöne göre hareket etmeyi (uyum göstermeyi) mecazlı bir dille ifade eder.'
      }
    ]
  }
];
