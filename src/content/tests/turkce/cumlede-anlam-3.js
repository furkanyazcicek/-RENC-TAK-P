export default [
  {
    id: 'test-cumlede-anlam-3-kolay',
    title: 'Cümlede Anlam 3 (Kolay)',
    description: 'Cümlede Anlam - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-ca-3-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde neden-sonuç (sebep-sonuç) ilişkisi vardır?',
        options: [
          { id: 'A', text: 'Sabahları erken kalkmak insana enerji verir.' },
          { id: 'B', text: 'Sınava girmek üzere evden hızlıca çıktı.' },
          { id: 'C', text: 'Güneş açınca bütün karlar eridi.' },
          { id: 'D', text: 'Sağlıklı kalmak amacıyla spor yapıyor.' },
          { id: 'E', text: 'Oraya gidersen mutlaka bana haber ver.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde karların erimesinin nedeni "güneşin açması"dır. B ve D amaç-sonuç, E koşul-sonuç cümlesidir.'
      },
      {
        id: 'q-ca-3-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi söz konusudur?',
        options: [
          { id: 'A', text: 'Çok okuduğundan kelime dağarcığı oldukça geniştir.' },
          { id: 'B', text: 'Kitap okumak için kütüphaneye gitti.' },
          { id: 'C', text: 'Dışarı çıkarsan kalın giyin.' },
          { id: 'D', text: 'Yağmur yağdığı için maç iptal edildi.' },
          { id: 'E', text: 'Onu gördüğünde çok sevinmişti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kütüphaneye gitme eylemi, "kitap okumak" amacıyla (hedefiyle) yapılmıştır. A ve D neden-sonuç, C koşul-sonuç cümlesidir.'
      },
      {
        id: 'q-ca-3-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde koşul (şart) anlamı vardır?',
        options: [
          { id: 'A', text: 'Çok yoruldu, bu yüzden erken yattı.' },
          { id: 'B', text: 'Sana bu kitabı veririm ama yarın geri getireceksin.' },
          { id: 'C', text: 'Bunu sana vermek üzere hazırladım.' },
          { id: 'D', text: 'Güneş battıktan sonra hava çok soğur.' },
          { id: 'E', text: 'Eskiden bu mahallede herkes birbirini tanırdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kitabı verme eylemi, "yarın geri getirilmesi" koşuluna (şartına) bağlanmıştır. "Ama" bağlacı burada koşul anlamı katmıştır.'
      },
      {
        id: 'q-ca-3-4',
        difficulty: 'easy',
        questionText: '"Ah, gençlik yıllarımda daha çok seyahat etmeliydim!" cümlesinde hakim olan duygu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hayıflanma' },
          { id: 'B', text: 'Özlem' },
          { id: 'C', text: 'Sitem' },
          { id: 'D', text: 'Şaşırma' },
          { id: 'E', text: 'Yakınma' }
        ],
        correctOptionId: 'A',
        explanation: 'Kişinin geçmişte yapmadığı (kaçırdığı) bir fırsat veya eylemden dolayı duyduğu üzüntü "hayıflanma"dır.'
      },
      {
        id: 'q-ca-3-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde karşılaştırma yapılmıştır?',
        options: [
          { id: 'A', text: 'Dün akşam arkadaşlarla sinemaya gittik.' },
          { id: 'B', text: 'Kardeşim, benden daha hızlı koşuyor.' },
          { id: 'C', text: 'Bu konuyu seninle sonra uzun uzun konuşalım.' },
          { id: 'D', text: 'Müzik dinlemek insanı dinlendirir.' },
          { id: 'E', text: 'Yağmur yağınca sokaklar bomboş kaldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kardeş ve konuşan kişi "hızlı koşma" yönünden karşılaştırılmıştır ("daha" sözcüğü ile üstünlük belirtilmiştir).'
      },
      {
        id: 'q-ca-3-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tanımlama" yapılmıştır?',
        options: [
          { id: 'A', text: 'Roman, yaşanmış ya da yaşanması mümkün olayların anlatıldığı edebi türdür.' },
          { id: 'B', text: 'Roman okumayı çok sevdiğini herkes bilir.' },
          { id: 'C', text: 'Bu yazarın son romanı çok satacak gibi görünüyor.' },
          { id: 'D', text: 'Şiir okumak ruhumu dinlendiriyor.' },
          { id: 'E', text: 'Edebiyat, insanı derinden etkileyen bir sanat dalıdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Roman nedir?" sorusuna cevap verilmiş ve romanın tanımı yapılmıştır. (E şıkkı da tanıma benzer ancak daha genel bir yargıdır, A tam bir akademik/edebi tanımdır).'
      },
      {
        id: 'q-ca-3-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "varsayım" anlamı vardır?',
        options: [
          { id: 'A', text: 'Sanıyorum yarın hava daha güzel olacak.' },
          { id: 'B', text: 'Belki bu sene tatilde size katılırız.' },
          { id: 'C', text: 'Diyelim ki uçağı kaçırdın, ne yapacaksın?' },
          { id: 'D', text: 'Keşke biraz daha dikkatli olsaydın.' },
          { id: 'E', text: 'Umarım her şey gönlünce olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Varsayım cümleleri, gerçekleşmemiş bir olayı bir an için gerçekleşmiş gibi düşünmeyi ifade eder. "Diyelim ki" ifadesiyle kurulan C seçeneği varsayım bildirir.'
      },
      {
        id: 'q-ca-3-8',
        difficulty: 'easy',
        questionText: '"Önümüzdeki yaz yeni bir kitap çıkarmayı planlıyorum." cümlesinde hangi anlam özelliği ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Uyarı' },
          { id: 'B', text: 'Tasarı' },
          { id: 'C', text: 'Öneri' },
          { id: 'D', text: 'Tahmin' },
          { id: 'E', text: 'Beklenti' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede kişinin gelecekte yapmayı planladığı bir işten söz edildiği için bu bir "tasarı" (plan) cümlesidir.'
      },
      {
        id: 'q-ca-3-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yakınma" (şikayet) anlamı vardır?',
        options: [
          { id: 'A', text: 'Gençler büyüklerine eskisi kadar saygı göstermiyor artık.' },
          { id: 'B', text: 'Oraya kadar gitmişken beni de görseydin bari.' },
          { id: 'C', text: 'Bu sınavı kazanacağımı hiç sanmıyorum.' },
          { id: 'D', text: 'Belki yarın akşam size uğrayabilirim.' },
          { id: 'E', text: 'Keşke bu konuyu onunla hiç konuşmasaydım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde gençlerin davranışlarından duyulan rahatsızlık, şikayet (yakınma) dile getirilmiştir. B seçeneğinde ise sitem vardır.'
      },
      {
        id: 'q-ca-3-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir "olasılık (ihtimal)" söz konusudur?',
        options: [
          { id: 'A', text: 'Bu sorunu mutlaka çözmeliyiz.' },
          { id: 'B', text: 'Yarın belki yağmur yağabilir.' },
          { id: 'C', text: 'O işi kesinlikle zamanında bitireceğim.' },
          { id: 'D', text: 'Türkiye\'nin üç tarafı denizlerle çevrilidir.' },
          { id: 'E', text: 'Dünya kendi etrafında döner.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "belki" ve "-ebilmek" ifadeleri, olayın gerçekleşme durumunun kesin olmadığını, yani ihtimal (olasılık) dahilinde olduğunu gösterir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-3-orta',
    title: 'Cümlede Anlam 3 (Orta)',
    description: 'Cümlede Anlam - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-ca-3-11',
        difficulty: 'medium',
        questionText: 'I. Çok çalıştı ki sonunda istediği bölümü kazandı.\nII. Sınavı kazanayım diye gecesini gündüzüne kattı.\nIII. Hava soğuk olduğundan dışarı çıkamadık.\nIV. İyi bir lise kazanmak için düzenli çalışıyor.\nYukarıdaki numaralanmış cümlelerden hangileri "neden-sonuç" ilişkisi bildirmektedir?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve III' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'II ve IV' }
        ],
        correctOptionId: 'B',
        explanation: 'I. cümlede bölümü kazanmasının nedeni "çok çalışması"dır (neden-sonuç). III. cümlede dışarı çıkamamanın nedeni "havanın soğuk olması"dır (neden-sonuç). II ve IV ise amaç-sonuç bildirir.'
      },
      {
        id: 'q-ca-3-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "doğrudan anlatım" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Öğretmenimiz yarın sınav yapacağını söyledi.' },
          { id: 'B', text: 'Babam, akşam eve erken gelmemizi tembihledi.' },
          { id: 'C', text: 'Doktor, ilaçlarımı düzenli kullanmamı tavsiye etti.' },
          { id: 'D', text: 'Annem: "Odanı toplamadan dışarı çıkma!" diye kızdı.' },
          { id: 'E', text: 'Arkadaşım sinemaya gitmek istediğini belirtti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde annenin sözü hiçbir değişikliğe uğratılmadan, olduğu gibi ("Odanı toplamadan dışarı çıkma!") aktarılmıştır. Bu duruma doğrudan anlatım denir. Diğer seçenekler dolaylı anlatımdır.'
      },
      {
        id: 'q-ca-3-13',
        difficulty: 'medium',
        questionText: '"Sitem" ve "Yakınma" anlamca birbirine çok karıştırılır. Buna göre aşağıdakilerin hangisinde "sitem" anlamı vardır?',
        options: [
          { id: 'A', text: 'İnsanlar günümüzde birbirine hiç saygı göstermiyor.' },
          { id: 'B', text: 'Bu çocuklar sabahtan akşama kadar gürültü yapıyorlar.' },
          { id: 'C', text: 'O kadar aradım, insan bir kere de telefonu açar.' },
          { id: 'D', text: 'Aşk olsun, Ankara\'ya kadar geldin de bana uğramadın!' },
          { id: 'E', text: 'Her zaman kendi bildiğini okumaktan vazgeçmedi gitti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde kişi, kırgınlığını doğrudan muhatabına ("bana uğramadın" diyerek) yöneltmiştir, bu bir sitemdir.'
      },
      {
        id: 'q-ca-3-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ön yargı (peşin hüküm)" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Eminim bu projeniz de diğerleri gibi fiyaskoyla sonuçlanacak.' },
          { id: 'B', text: 'Bu projenin çok başarılı olacağına inancım tam.' },
          { id: 'C', text: 'Bence dünkü maçın hakemi oldukça taraflıydı.' },
          { id: 'D', text: 'Eskiden bu sokakta çocuklar neşe içinde oynardı.' },
          { id: 'E', text: 'Belki de tüm bu olanlar bir tesadüften ibarettir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Ön yargı, henüz sonuçlanmamış bir olay hakkında önceden verilmiş kesin yargılardır. A seçeneğinde projenin (henüz bitmeden) başarısız olacağı peşin bir hükümle dile getirilmiştir.'
      },
      {
        id: 'q-ca-3-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "küçümseme" söz konusudur?',
        options: [
          { id: 'A', text: 'Bu kadarcık parayla ayı nasıl çıkaracağız?' },
          { id: 'B', text: 'O kadar çalıştın da sadece elli mi aldın?' },
          { id: 'C', text: 'O da güya okuyacak da adam olacak!' },
          { id: 'D', text: 'Böyle büyük bir adam olmak kolay mı sandın?' },
          { id: 'E', text: 'Sınava sadece iki gün çalışarak mı gireceksin?' }
        ],
        correctOptionId: 'C',
        explanation: 'Küçümseme, bir kişiye değer vermeme, onu hafife almadır. C seçeneğinde kişinin okuyup adam olamayacağı, alaycı ve aşağılayıcı bir dille ifade edilerek küçümsenmiştir. (A\'da azımsama vardır).'
      },
      {
        id: 'q-ca-3-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "pişmanlık" anlamı vardır?',
        options: [
          { id: 'A', text: 'Zamanında İngilizceyi daha iyi öğrenseydim şimdi bu zorlukları çekmezdim.' },
          { id: 'B', text: 'Neden beni de yanınızda götürmediniz?' },
          { id: 'C', text: 'Keşke o gün ona o kırıcı sözleri söylemeseydim.' },
          { id: 'D', text: 'Bu kadar duyarsız olunmasına bir türlü anlam veremiyorum.' },
          { id: 'E', text: 'Keşke bu hafta sonu yağmur yağmasa.' }
        ],
        correctOptionId: 'C',
        explanation: 'Pişmanlık, kişinin geçmişte yaptığı bir eylemden duyduğu üzüntüdür (söylemeseydim). A seçeneğinde ise yapmadığı bir şeyden duyulan üzüntü yani hayıflanma vardır.'
      },
      {
        id: 'q-ca-3-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "içerik (konu)" ile ilgili bir yargıya yer verilmemiştir?',
        options: [
          { id: 'A', text: 'Yazar, bu romanında köylünün toprak mücadelesini anlatmış.' },
          { id: 'B', text: 'Eserde, kuşak çatışması son derece çarpıcı bir dille ele alınmış.' },
          { id: 'C', text: 'Şairin son şiirlerinde ölüm korkusu ve yalnızlık temaları hakim.' },
          { id: 'D', text: 'Yazar, yabancı sözcüklerden uzak, duru ve yalın bir anlatım tercih etmiş.' },
          { id: 'E', text: 'Hikaye, göçmen bir ailenin büyük şehirde tutunma çabasını konu alıyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği eserin içeriği (ne anlattığı) ile ilgili değil, üslubu (nasıl anlattığı, dili, yalınlığı) ile ilgili bir yargı içermektedir.'
      },
      {
        id: 'q-ca-3-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin "aşama aşama (gittikçe)" gerçekleştiği anlamı vardır?',
        options: [
          { id: 'A', text: 'İçeri girer girmez etrafa şöyle bir göz gezdirdi.' },
          { id: 'B', text: 'Hastanın durumu günden güne daha da iyiye gidiyor.' },
          { id: 'C', text: 'Ne yapıp edip bu sorunu yarına kadar çözeceğim.' },
          { id: 'D', text: 'Haberi alır almaz hemen yanımıza koştu.' },
          { id: 'E', text: 'Seni bir an için burada görünce çok şaşırdım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "günden güne" ifadesi, durumun birdenbire değil, zaman içinde aşamalı olarak (gittikçe) gerçekleştiğini gösterir.'
      },
      {
        id: 'q-ca-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde öznel (kişisel) bir değerlendirme söz konusu değildir?',
        options: [
          { id: 'A', text: 'İstanbul\'un eşsiz manzarası herkesi büyülemeye yeter.' },
          { id: 'B', text: 'Yazarın son kitabı sürükleyici kurgusuyla dikkat çekiyor.' },
          { id: 'C', text: 'Türkiye\'nin en yüksek dağı Ağrı Dağı\'dır.' },
          { id: 'D', text: 'Kırmızı elbise ona gerçekten çok yakışmış.' },
          { id: 'E', text: 'Şiirin o etkileyici ritmi okuyucuyu alıp götürüyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki ifade ölçülebilir ve kanıtlanabilir, kişiden kişiye değişmeyen nesnel bir yargıdır. Diğer seçeneklerde öznellik vardır.'
      },
      {
        id: 'q-ca-3-20',
        difficulty: 'medium',
        questionText: '"Eleştirmen, eseri incelerken dış etkenlerden sıyrılmalı, taraf tutmadan eserin gerçek değerini ortaya koymalıdır."\nBu cümlede eleştirmenin hangi özelliği taşıması gerektiği vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Yalınlık' },
          { id: 'B', text: 'Özgünlük' },
          { id: 'C', text: 'Tutarlılık' },
          { id: 'D', text: 'Nesnellik' },
          { id: 'E', text: 'Akıcılık' }
        ],
        correctOptionId: 'D',
        explanation: 'Taraf tutmamak, kişisel görüş ve duygulardan (dış etkenlerden) sıyrılmak, "nesnellik" (objektiflik) kavramıyla ifade edilir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-3-zor',
    title: 'Cümlede Anlam 3 (Zor)',
    description: 'Cümlede Anlam - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-ca-3-21',
        difficulty: 'hard',
        questionText: 'I. Yazar, bu romanında devrik cümleler ve alışılmamış bağdaştırmalar kullanarak dili adeta yeniden yaratıyor.\nII. Şairin şiirlerinde imgeler o kadar yoğun ki okuyucu adeta bir duygu ormanında kayboluyor.\nIII. Sanatçı, eserlerinde genellikle doğa tasvirlerine ve köy hayatına yer veriyor.\nIV. Yazar, bu romanında cumhuriyetin ilk yıllarındaki değişimi ele almış.\nYukarıdaki cümlelerin hangilerinde eserin "içeriği (konusu)" ile ilgili bilgi verilmiştir?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve IV' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'II ve III' }
        ],
        correctOptionId: 'D',
        explanation: 'III. cümlede "doğa tasvirleri ve köy hayatı", IV. cümlede "cumhuriyetin ilk yıllarındaki değişim" ifadeleri eserin konusunu (ne anlattığını) yani içeriğini belirtir. I ve II ise üslupla (nasıl anlattığıyla) ilgilidir.'
      },
      {
        id: 'q-ca-3-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "gerçekleşmemiş beklenti" anlamı vardır?',
        options: [
          { id: 'A', text: 'Bu projenin vaktinde bitmeyeceğini ben en başından söylemiştim.' },
          { id: 'B', text: 'Son kitabının bu kadar çok satacağını hepimiz biliyorduk.' },
          { id: 'C', text: 'Onun da bizimle sinemaya geleceğini sanmıştım.' },
          { id: 'D', text: 'O kadar çalıştı ki sonunda üniversiteyi kazandı.' },
          { id: 'E', text: 'Tatilde Bodrum\'a gitmeyi planlıyoruz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde kişi başkasının da sinemaya geleceğini ummuş (beklemiş) ancak bu beklentisi gerçekleşmemiştir. (Sanmıştım sözcüğü beklentinin boşa çıktığını hissettirir).'
      },
      {
        id: 'q-ca-3-23',
        difficulty: 'hard',
        questionText: '"İyi bir roman, okuyucusuna her sayfada ayrı bir dünyanın kapısını aralarken, asıl anahtarı hep son cümlesinde saklar."\nBu cümlede iyi bir romanla ilgili anlatılmak istenen asıl düşünce nedir?',
        options: [
          { id: 'A', text: 'Farklı konuları işleyerek okuyucuyu sıkmamalıdır.' },
          { id: 'B', text: 'Anlatımının sürükleyiciliği sayesinde bir solukta okunmalıdır.' },
          { id: 'C', text: 'Zengin bir içeriğe sahip olup asıl iletisini finalde vermelidir.' },
          { id: 'D', text: 'Sade bir dil kullanarak her kesimden insana hitap etmelidir.' },
          { id: 'E', text: 'Okuyucuyu gerçek dünyadan uzaklaştırıp hayal dünyasına götürmelidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümledeki "her sayfada ayrı bir dünyanın kapısını aralamak" zengin ve çeşitli bir içeriği, "asıl anahtarı son cümlede saklaması" ise romanın asıl mesajını (iletisini, çözümünü) eserin sonunda verdiğini sembolize eder.'
      },
      {
        id: 'q-ca-3-24',
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
        explanation: 'Değerlendirme, bir eser veya durum hakkında olumlu/olumsuz eleştiri bildirmektir. C seçeneğinde romanın üslubu/akıcılığı üzerinden bir değerlendirme yapılmıştır.'
      },
      {
        id: 'q-ca-3-25',
        difficulty: 'hard',
        questionText: '"Bazen susmak, en etkili sözcüklerden bile daha gürültülü bir cevaptır."\nBu cümleden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Tartışmalarda sessiz kalmak her zaman haklı olduğumuzu gösterir.' },
          { id: 'B', text: 'Kelimelerin yetersiz kaldığı durumlarda sessizlik en iyi tepki olabilir.' },
          { id: 'C', text: 'Sessiz insanlar aslında içlerinde büyük fırtınalar koparırlar.' },
          { id: 'D', text: 'Karşımızdakine verilecek en güzel cevap, ona bağırıp çağırmamaktır.' },
          { id: 'E', text: 'Konuşmak her zaman yanlış anlaşılmalara yol açabilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümle, susmanın bazen her türlü sözden, kelimeden daha etkili bir mesaj (cevap) taşıdığını vurgulamaktadır. Bu durum en iyi B seçeneğinde özetlenmiştir.'
      },
      {
        id: 'q-ca-3-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "kanış" (kendi kendini inandırma / kabullenme / avunma) anlamı vardır?',
        options: [
          { id: 'A', text: 'Ne yapsam da onu bu kararından vazgeçiremeyeceğimi biliyorum.' },
          { id: 'B', text: 'Bu projenin başarıya ulaşacağına dair en ufak bir şüphem yok.' },
          { id: 'C', text: 'Keşke biraz daha çalışıp o sınavı da geçebilseydim.' },
          { id: 'D', text: 'Belki de bu işin olmaması bizim için daha hayırlı olmuştur.' },
          { id: 'E', text: 'Yarın hava güzel olursa belki ailecek pikniğe gideriz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde kişinin olumsuz sonuçlanan bir durumu, kendince olumlu bir nedene bağlayarak (hayırlı olmuştur diyerek) kabullenmesi, kendini teselli etmesi durumu vardır.'
      },
      {
        id: 'q-ca-3-27',
        difficulty: 'hard',
        questionText: '"Eleştirmen, sanat eserine vurulan bir kilit değil, eserin gizli kapılarını açan bir anahtardır."\nBu cümlede eleştirinin hangi işlevi vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Sanatçının eksiklerini yüzüne vurarak onu düzeltmesi.' },
          { id: 'B', text: 'Sanatçıları yeni eserler üretmeleri için sınırlandırması.' },
          { id: 'C', text: 'Okuyucuya eserin sadece iyi yönlerini göstererek beğeni kazandırması.' },
          { id: 'D', text: 'Eseri kısıtlamak yerine onun anlaşılamayan yönlerini açığa çıkarması.' },
          { id: 'E', text: 'Eserin maddi değerini artırarak geniş kitlelere ulaştırması.' }
        ],
        correctOptionId: 'D',
        explanation: '"Vurulan kilit değil" sözüyle kısıtlamadığı (özgür bıraktığı), "gizli kapıları açan anahtar" sözüyle de eserin anlaşılamayan, gizli yönlerini okura açtığı vurgulanmaktadır.'
      },
      {
        id: 'q-ca-3-28',
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
        explanation: 'B seçeneğinde köye gidememe koşulu "karın yağması"na, gidememenin nedeni ise "yolların kapanması"na bağlanmıştır. Hem -sa/-se ile koşul, hem de dığı için ile neden-sonuç vardır.'
      },
      {
        id: 'q-ca-3-29',
        difficulty: 'hard',
        questionText: 'I. Ünlü yazar, romanlarında hep kendi çocukluğunu ve yaşadığı sokağı anlatır.\nII. Şairin son kitabındaki şiirler, insanın doğa karşısındaki acizliğini işliyor.\nIII. Yazar, bu eserinde devrik cümleler ve alışılmamış bağdaştırmalar kullanarak dili adeta yeniden yaratıyor.\nIV. Romandaki karakterler oldukça sıradan ama bir o kadar da içimizden insanlar.\nBu cümlelerle ilgili olarak aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'III. cümlede eserin konusu belirtilmiştir.' },
          { id: 'B', text: 'II. cümlede yazarın üslubuna yönelik bir eleştiri yapılmıştır.' },
          { id: 'C', text: 'I. ve II. cümleler eserin içeriği (konusu) hakkında bilgi vermektedir.' },
          { id: 'D', text: 'IV. cümlede eserin sadece dili üzerinde durulmuştur.' },
          { id: 'E', text: 'Bütün cümlelerde öznel bir değerlendirme söz konusudur.' }
        ],
        correctOptionId: 'C',
        explanation: 'I. cümlede romanın "çocukluk ve yaşanan sokağı" anlattığı, II. cümlede "insanın doğa karşısındaki acizliğini" anlattığı söylenmiştir. İkisi de eserlerin "içeriği (konusu)" ile ilgilidir.'
      },
      {
        id: 'q-ca-3-30',
        difficulty: 'hard',
        questionText: '"Yaşadığımız çağa ayak uydurmak, rüzgarın yönüne göre yelken açmak gibidir."\nBu cümlede anlatılmak istenen asıl düşünce aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kişi kendi değerlerini çağın yeniliklerinden üstün tutmalıdır.' },
          { id: 'B', text: 'Zamanın getirdiği yeniliklere uyum sağlamak zorunludur.' },
          { id: 'C', text: 'Rüzgara karşı yelken açanlar her zaman başarılı olurlar.' },
          { id: 'D', text: 'İnsan, değişen koşullara direnmek yerine onlara uyum göstermelidir.' },
          { id: 'E', text: 'Toplumsal değişimler her zaman olumlu sonuçlar doğurmaz.' }
        ],
        correctOptionId: 'D',
        explanation: '"Rüzgarın yönüne göre yelken açmak", şartlara/gelişmelere uyum sağlamayı, direnmek yerine akışa/yöne göre hareket etmeyi (uyum göstermeyi) mecazlı bir dille ifade eder.'
      }
    ]
  }
];
