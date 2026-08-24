export default [
  {
    id: 'test-cumle-turleri-9-kolay',
    title: 'Cümle Türleri 9 (Kolay)',
    description: 'Cümle Türleri - Kolay (241-250)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-ct-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yükleminin türüne göre bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Bahar gelince ağaçlar çiçek açtı.' },
          { id: 'B', text: 'Kitabın son sayfasını heyecanla okudum.' },
          { id: 'C', text: 'Onun en büyük hayali iyi bir doktor olmaktı.' },
          { id: 'D', text: 'Dışarıdaki gürültüden dolayı uyuyamadık.' },
          { id: 'E', text: 'Bütün gün evde oturup televizyon izledi.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (açtı), B (okudum), D (uyuyamadık), E (izledi) fiil cümleleridir. C seçeneğinde yüklem "doktor olmaktı" (isim-fiil grubu) fiilimsiyle kurulduğu için isim cümlesi kabul edilir (fiilimsiler ek eylem alarak isim cümlesi kurar).'
      },
      {
        id: 'q-ct-9-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisi yükleminin türüne göre bir fiil (eylem) cümlesidir?',
        options: [
          { id: 'A', text: 'Bugün hava düne göre oldukça soğuk.' },
          { id: 'B', text: 'Odamdaki masanın üzeri çok dağınıktı.' },
          { id: 'C', text: 'Söylediği sözler gerçekten çok anlamlıydı.' },
          { id: 'D', text: 'Akşam yemeğinden sonra biraz yürüyüş yaptık.' },
          { id: 'E', text: 'Benim en sevdiğim mevsim ilkbahardır.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (soğuk), B (dağınıktı), C (anlamlıydı), E (ilkbahardır) yüklemleri isim soylu sözcüklerdir. D seçeneğindeki "yaptık" eylemi çekimli bir fiil olduğundan fiil cümlesidir.'
      },
      {
        id: 'q-ct-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yükleminin yerine (öge dizilişine) göre kurallı bir cümledir?',
        options: [
          { id: 'A', text: 'Görmedim ömrümde böyle güzel bir manzara.' },
          { id: 'B', text: 'Birazdan kalkacak bizi bekleyen otobüs.' },
          { id: 'C', text: 'Sessizce dinledik yaşlı adamın anlattıklarını.' },
          { id: 'D', text: 'Çocuklar bahçede neşeyle oyun oynuyordu.' },
          { id: 'E', text: 'Geç fark ettim taşın ne kadar sert olduğunu.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kurallı cümlelerde yüklem sonda bulunur. D şıkkında yüklem (oynuyordu) sondadır. Diğer seçeneklerde yüklemler (görmedim, kalkacak, dinledik, fark ettim) cümlenin sonunda değildir (devrik cümledir).'
      },
      {
        id: 'q-ct-9-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisi devrik bir cümledir?',
        options: [
          { id: 'A', text: 'Her sabah erkenden kalkıp yürüyüş yapar.' },
          { id: 'B', text: 'Bu eski evde yıllarca tek başına yaşadı.' },
          { id: 'C', text: 'Biliyorum senin ne kadar fedakar olduğunu.' },
          { id: 'D', text: 'Kardeşim üniversiteyi geçen yıl kazandı.' },
          { id: 'E', text: 'Gökyüzündeki bulutlar yavaşça dağılıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem olan "Biliyorum" kelimesi cümlenin başında yer almaktadır, bu nedenle cümle devriktir. Diğerlerinde yüklemler sondadır.'
      },
      {
        id: 'q-ct-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi eksiltili bir cümledir?',
        options: [
          { id: 'A', text: 'Odanın bir köşesinde eski bir koltuk...' },
          { id: 'B', text: 'Hava kararmadan hemen eve dönmelisin.' },
          { id: 'C', text: 'Gözlerimi açtığımda güneş çoktan doğmuştu.' },
          { id: 'D', text: 'Bu yolda yürümek gerçekten çok zormuş.' },
          { id: 'E', text: 'Rüzgarın sesi gecenin sessizliğini bozuyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Eksiltili cümle, yüklemi yazılmamış/söylenmemiş olan cümledir. A seçeneğinde cümlenin yüklemi (vardı, duruyordu vb.) verilmediği için cümle eksiltilidir.'
      },
      {
        id: 'q-ct-9-6',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi anlamına göre olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bu güzel haberi duyunca çok sevindi.' },
          { id: 'B', text: 'Yarın sabah erkenden yola çıkıyoruz.' },
          { id: 'C', text: 'Kütüphanede aradığım kitabı bir türlü bulamadım.' },
          { id: 'D', text: 'Sınav sonuçları nihayet açıklandı.' },
          { id: 'E', text: 'Bütün soruları dikkatlice okuyup çözdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylemin (bulma eyleminin) gerçekleşmediği ifade edildiği için cümle anlamca (ve biçimce) olumsuzdur.'
      },
      {
        id: 'q-ct-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumsuz olduğu halde anlamca olumludur?',
        options: [
          { id: 'A', text: 'Seni bu konuda haksız bulmuyor değilim.' },
          { id: 'B', text: 'Bu havada dışarı çıkmak akıl işi değil.' },
          { id: 'C', text: 'Onun sözlerine artık hiç güvenmiyorum.' },
          { id: 'D', text: 'Ne aradı ne de bir mesaj attı.' },
          { id: 'E', text: 'Bu yemek gerçekten hiç güzel olmamış.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bulmuyor değilim" ifadesi biçimce olumsuz ekler (-ma/me ve değil) taşır, ancak cümlenin taşıdığı anlam "seni haklı buluyorum" yani olumludur. Çift olumsuzluk olumlu bir anlam doğurmuştur.'
      },
      {
        id: 'q-ct-9-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisi biçimce olumlu, anlamca olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bu kadar ağır bir yükü ben nasıl taşırım!' },
          { id: 'B', text: 'Dışarıda çok güzel bir bahar havası var.' },
          { id: 'C', text: 'Seni aramamı beklemiyordun herhalde.' },
          { id: 'D', text: 'O, hiçbir zaman yalan söylemez.' },
          { id: 'E', text: 'Bugün ne kitap okudu ne de ders çalıştı.' }
        ],
        correctOptionId: 'E',
        explanation: '"Ne... ne..." bağlacı olumlu fiillerle kullanılarak cümleye "hiçbirini yapmadı" anlamı (olumsuzluk) katar. Cümle biçimce olumlu (çalıştı, okudu), anlamca olumsuzdur.'
      },
      {
        id: 'q-ct-9-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisi gerçek bir soru cümlesidir?',
        options: [
          { id: 'A', text: 'Bu havada hiç dışarı çıkılır mı?' },
          { id: 'B', text: 'Toplantının saat kaçta başlayacağını kim söyledi?' },
          { id: 'C', text: 'Böyle güzel bir teklif reddedilir mi hiç!' },
          { id: 'D', text: 'Sana bu konuda yalan söyler miyim?' },
          { id: 'E', text: 'Benim bu olanlardan haberim mi var sanki!' }
        ],
        correctOptionId: 'B',
        explanation: 'Gerçek soru cümleleri cevap gerektiren cümlelerdir. B seçeneğinde "kim söyledi?" sorusu gerçek bir cevap bekler. Diğerleri ise cevap beklemeyen, duyguyu veya pekiştirmeyi amaçlayan sözde soru cümleleridir.'
      },
      {
        id: 'q-ct-9-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi bir ünlem cümlesi değildir?',
        options: [
          { id: 'A', text: 'Eyvah, cüzdanımı evde unutmuşum!' },
          { id: 'B', text: 'Hey, oradaki çocuklar biraz sessiz olun!' },
          { id: 'C', text: 'Yazıklar olsun sana verdiğim emeklere!' },
          { id: 'D', text: 'Dışarı çıkarken yanına şemsiyeni de al.' },
          { id: 'E', text: 'Ah, nerede o eski güzel günler!' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçenekleri korku, uyarı, sitem ve özlem gibi duyguları ifade eden ünlem cümleleridir. D seçeneği ise sıradan bir haber/istek cümlesidir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-9-orta',
    title: 'Cümle Türleri 9 (Orta)',
    description: 'Cümle Türleri - Orta (251-260)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-ct-9-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi yapısına göre basit bir cümledir?',
        options: [
          { id: 'A', text: 'Güneşin doğuşunu izlemek hepimize huzur verdi.' },
          { id: 'B', text: 'Rüzgar sert esiyor, ağaçların dalları kırılıyordu.' },
          { id: 'C', text: 'Akşam yemeğinden sonra koyu bir sohbete daldık.' },
          { id: 'D', text: 'Okula gitmediğini bana neden söylemedin?' },
          { id: 'E', text: 'Soruları çözerken oldukça zorlanmıştım.' }
        ],
        correctOptionId: 'C',
        explanation: 'Basit cümle, içinde tek bir yargı (yüklem) bulunan ve fiilimsi, şart kipi gibi yan cümlecik kuran ögeler barındırmayan cümledir. C seçeneğinde sadece "daldık" yargısı vardır. A\'da "izlemek", D\'de "gitmediğini", E\'de "çözerken" fiilimsileri olduğu için girişik birleşik; B ise sıralı cümledir.'
      },
      {
        id: 'q-ct-9-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından girişik birleşik bir cümledir?',
        options: [
          { id: 'A', text: 'Kitabını masada unuttuğu için geri döndü.' },
          { id: 'B', text: 'Sabah erken uyandı ve hemen yola çıktı.' },
          { id: 'C', text: 'Sınav bitti, öğrenciler sınıftan çıktı.' },
          { id: 'D', text: 'Dışarıya çıkarsan kalın bir şeyler giy.' },
          { id: 'E', text: 'Bugün kütüphaneye gideceğim, dedi.' }
        ],
        correctOptionId: 'A',
        explanation: 'İçinde fiilimsi (eylemsi) bulunan cümlelere girişik birleşik cümle denir. A şıkkında "unuttuğu" kelimesi sıfat-fiildir. B (bağlı), C (sıralı), D (şartlı birleşik), E (iç içe birleşik) cümlelerdir.'
      },
      {
        id: 'q-ct-9-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Gözyaşlarını silerek bana doğru yaklaştı.' },
          { id: 'B', text: 'Çok çalıştı ama istediği başarıyı yakalayamadı.' },
          { id: 'C', text: 'Güneş battı, ufukta kızıl bir renk belirdi.' },
          { id: 'D', text: 'Hava soğuk olduğu için dışarı çıkmadık.' },
          { id: 'E', text: 'Ders çalışırken müzik dinlemeyi sever.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sıralı cümle, birden fazla yüklemi olan ve birbirine virgül veya noktalı virgülle bağlanan cümlelerdir. C şıkkında "Güneş battı" ve "ufukta kızıl bir renk belirdi" cümleleri virgülle sıralanmıştır. B şıkkı bağlı, diğerleri ise girişik birleşiktir.'
      },
      {
        id: 'q-ct-9-14',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisi bağlı bir cümledir?',
        options: [
          { id: 'A', text: 'Ali ile Ayşe sinemaya gitmek için anlaştılar.' },
          { id: 'B', text: 'Kitabı aldım fakat okumaya fırsat bulamadım.' },
          { id: 'C', text: 'Gülerek yanıma geldi, elindeki çiçeği uzattı.' },
          { id: 'D', text: 'Çocuklar bahçede oynuyor, anneleri onları izliyordu.' },
          { id: 'E', text: 'İçeri girmesiyle dışarı çıkması bir oldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlı cümle, en az iki cümlenin birbirine bağlaçla bağlanmasıyla oluşur. B şıkkında "Kitabı aldım" ile "okumaya fırsat bulamadım" cümleleri "fakat" bağlacıyla bağlanmıştır. A şıkkında bağlaç (ile) cümleleri değil, özneleri bağlamıştır; bu yüzden cümle basittir.'
      },
      {
        id: 'q-ct-9-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "şartlı birleşik" cümledir?',
        options: [
          { id: 'A', text: 'Yüzü gülüyordu, belli ki iyi bir haber almış.' },
          { id: 'B', text: 'Bunu yaparsan herkes sana çok güvenir.' },
          { id: 'C', text: 'Bana "Yarın görüşürüz." deyip gitti.' },
          { id: 'D', text: 'Kitabımı nerede bıraktığımı hatırlamıyorum.' },
          { id: 'E', text: 'Soruları çözen öğrencileri tebrik etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'Şartlı birleşik cümleler "-se/-sa" şart kipiyle kurulan yan cümleciğin temel cümleye bağlanmasıyla oluşur. "Bunu yaparsan" kısmı yan cümleciktir ve şartlı birleşik cümle kurmuştur.'
      },
      {
        id: 'q-ct-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi kurallı, olumlu bir fiil cümlesidir?',
        options: [
          { id: 'A', text: 'Onun söylediklerine hiç kulak asmadım.' },
          { id: 'B', text: 'Görmeliydin o gün oradaki kalabalığı.' },
          { id: 'C', text: 'Yeni aldığı araba gerçekten çok güzeldi.' },
          { id: 'D', text: 'Yaşlı kadın ağır adımlarla merdivenleri çıkıyordu.' },
          { id: 'E', text: 'Dışarıda çok şiddetli bir yağmur var.' }
        ],
        correctOptionId: 'D',
        explanation: 'D şıkkında yüklem sonda olduğu için kurallı, eylem gerçekleştiği için olumlu, "çıkmak" fiili olduğu için fiil cümlesidir. A olumsuzdur, B devriktir, C ve E isim cümlesidir.'
      },
      {
        id: 'q-ct-9-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "bağımlı sıralı" bir cümledir?',
        options: [
          { id: 'A', text: 'Rüzgar şiddetlendi, deniz iyice dalgalandı.' },
          { id: 'B', text: 'Adam kapıyı açtı, hızlıca içeri girdi.' },
          { id: 'C', text: 'Zil çaldı, öğrenciler sınıflara koştu.' },
          { id: 'D', text: 'Bahar geldi, her yer yeşillendi.' },
          { id: 'E', text: 'Çocuk ağlıyor, anne onu teselli ediyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağımlı sıralı cümlelerde en az bir öge (özne, nesne vb.) ortak kullanılır. B şıkkında "Adam kapıyı açtı" ve "(Adam) hızlıca içeri girdi" cümlelerinin öznesi (Adam) ortaktır.'
      },
      {
        id: 'q-ct-9-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından iç içe birleşik cümledir?',
        options: [
          { id: 'A', text: 'Yarın erkenden yola çıkalım, dedi.' },
          { id: 'B', text: 'Güneş battı mı her yeri sessizlik kaplar.' },
          { id: 'C', text: 'Duydum ki buralardan ayrılacakmışsın.' },
          { id: 'D', text: 'Yüzündeki tebessüm hiç eksik olmuyordu.' },
          { id: 'E', text: 'Sınavı kazandığını duyunca dünyalar onun oldu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir cümlenin içinde başka bir cümlenin (genellikle doğrudan alıntıların) öge olarak (çoğunlukla nesne) yer almasına iç içe birleşik cümle denir. "Yarın erkenden yola çıkalım" cümlesi temel cümlenin (dedi) nesnesidir.'
      },
      {
        id: 'q-ct-9-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi "ki\'li (ilgi) birleşik cümle"dir?',
        options: [
          { id: 'A', text: 'Öyle yorulmuşum ki gözümü açamıyorum.' },
          { id: 'B', text: 'Elindeki ki ekiyle ilgili soruları çöz.' },
          { id: 'C', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'D', text: 'Kardeşim ki her zaman yanımda olmuştur.' },
          { id: 'E', text: 'Sen ki bu işlerin en iyisisin, yaparsın.' }
        ],
        correctOptionId: 'A',
        explanation: '"Ki" bağlacı, temel cümle ile yan cümleyi birbirine bağlayarak ki\'li birleşik cümle kurar. "Öyle yorulmuşum ki" kısmı yan cümleciktir.'
      },
      {
        id: 'q-ct-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısına göre diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Sessizce odasına çekilip kitap okudu.' },
          { id: 'B', text: 'Söylenenleri hiç umursamadan yoluna devam etti.' },
          { id: 'C', text: 'Gözlerindeki ışık yavaş yavaş sönüyordu.' },
          { id: 'D', text: 'Eve dönerken eski bir arkadaşına rastlamış.' },
          { id: 'E', text: 'Yaşadıklarını anlatırken sesi titriyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (çekilip), B (umursamadan), D (dönerken), E (anlatırken) fiilimsi içerdiği için girişik birleşik cümledir. C seçeneğinde fiilimsi yoktur, tek bir yargı bildirdiği için yapısına göre basit cümledir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-9-zor',
    title: 'Cümle Türleri 9 (Zor)',
    description: 'Cümle Türleri - Zor (261-270)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-ct-9-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi biçimce ve anlamca olumsuz, devrik bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Hiçbir zaman pes etmedi zorluklar karşısında.' },
          { id: 'B', text: 'Yoktu aslında bu işin daha kolay bir yolu.' },
          { id: 'C', text: 'Kimseye haber vermeden gitmiş buralardan.' },
          { id: 'D', text: 'Bu anlattıkların hiç de mantıklı değil bence.' },
          { id: 'E', text: 'Bunu sana yapacak kadar vicdansız değilim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B şıkkında yüklem "Yoktu". "Yok" isim soyludur, olumsuzdur ve cümlenin başında/ortasında yer aldığı için devriktir. D ve E kurallıdır (yüklemler sonda).'
      },
      {
        id: 'q-ct-9-22',
        difficulty: 'hard',
        questionText: 'Girişik birleşik cümlelerde yan cümlecik temel cümlenin herhangi bir ögesi olabilir. Buna göre aşağıdaki cümlelerin hangisinde yan cümlecik nesne görevindedir?',
        options: [
          { id: 'A', text: 'Çok okuyan öğrenci, sınavda daha başarılı olur.' },
          { id: 'B', text: 'Babasının geldiğini görünce hızla ayağa kalktı.' },
          { id: 'C', text: 'Sana söylediklerimi bir an bile aklından çıkarma.' },
          { id: 'D', text: 'Eve gitmek için durakta otobüs bekliyoruz.' },
          { id: 'E', text: 'Yüzmek, insanı en çok rahatlatan sporlardan biridir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yan cümlecik fiilimsiyle kurulan kısımdır. C seçeneğinde "söylediklerimi" (adlaşmış sıfat-fiil grubu) yan cümleciktir ve "Neyi aklından çıkarma?" sorusuna cevap verdiği için belirtili nesne görevindedir.'
      },
      {
        id: 'q-ct-9-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi bağımsız sıralı cümledir? (Öge ortaklığı olmayan sıralı cümle)',
        options: [
          { id: 'A', text: 'Kitabı dün aldı, sabaha kadar okudu.' },
          { id: 'B', text: 'Rüzgar durdu, yağmur yavaş yavaş şiddetini artırdı.' },
          { id: 'C', text: 'Çocukları salona aldı, onlara güzel masallar anlattı.' },
          { id: 'D', text: 'İhtiyar adam yoruldu, bir banka oturdu.' },
          { id: 'E', text: 'Odayı temizledi, eşyaları güzelce yerleştirdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B şıkkında 1. cümlenin öznesi "Rüzgar", 2. cümlenin öznesi "yağmur"dur. Hiçbir öge ortak kullanılmamıştır (bağımsız sıralı). Diğer şıklarda özneler veya nesneler ortaktır.'
      },
      {
        id: 'q-ct-9-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç kullanılmasına rağmen cümle yapısına göre "bağlı cümle" değildir?',
        options: [
          { id: 'A', text: 'Çok çalıştı ancak başarılı olamadı.' },
          { id: 'B', text: 'Hem kitap okuyor hem de müzik dinliyor.' },
          { id: 'C', text: 'Sınava çalıştı ve yüksek bir not aldı.' },
          { id: 'D', text: 'Şiirleri ve romanları edebiyatımızda çok sevilir.' },
          { id: 'E', text: 'Erken kalktı fakat işe yetişemedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bağlı cümle olabilmesi için bağlacın cümleleri (yargıları/yüklemleri) birbirine bağlaması gerekir. D şıkkında "ve" bağlacı sadece iki kelimeyi (şiirleri ve romanları) yani özneleri birbirine bağlamıştır, ortada tek yüklem olduğu için bu cümle basittir.'
      },
      {
        id: 'q-ct-9-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi "kurallı, olumlu, isim cümlesi" özellikleri taşıyan bir girişik birleşik cümledir?',
        options: [
          { id: 'A', text: 'Benim en sevdiğim mevsim ilkbahardır.' },
          { id: 'B', text: 'Bunu başarmak hiç de kolay değildi.' },
          { id: 'C', text: 'Yüzündeki tebessüm herkese huzur veriyordu.' },
          { id: 'D', text: 'Oraya gitmeyi çok istiyordum aslında.' },
          { id: 'E', text: 'Herkesin düşüncesine saygı göstermek gerekir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A şıkkı: "ilkbahardır" (isim cümlesi, kurallı, olumlu). "sevdiğim" (sıfat-fiil) olduğu için girişik birleşiktir. B olumsuzdur, C ve D fiil cümlesidir, E fiil cümlesidir (gerek-mek/gerekmek/gerekir -> fiildir).'
      },
      {
        id: 'q-ct-9-26',
        difficulty: 'hard',
        questionText: 'I. Rüzgarın şiddetini artırmasıyla gemiler limana sığındı. \nII. Yağmur yağıyordu, sokaklar tamamen boşalmıştı.\nIII. Bu kitabı okursan ufkumun genişlediğini göreceksin.\nNumaralanmış cümlelerin yapıları aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Birleşik - Bağlı - Sıralı' },
          { id: 'B', text: 'Basit - Sıralı - Birleşik' },
          { id: 'C', text: 'Birleşik - Sıralı - Birleşik' },
          { id: 'D', text: 'Sıralı - Basit - Sıralı' },
          { id: 'E', text: 'Birleşik - Sıralı - Basit' }
        ],
        correctOptionId: 'C',
        explanation: 'I. cümlede fiilimsi (artırmasıyla) olduğu için girişik birleşik. II. cümle iki yargı virgülle bağlandığı için sıralı. III. cümlede hem şart eki (okursan) hem fiilimsi (genişlediğini) var, birleşiktir.'
      },
      {
        id: 'q-ct-9-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde temel cümlenin nesnesi, bir cümleden oluşmaktadır?',
        options: [
          { id: 'A', text: 'Bahar gelince kırlar rengarenk çiçeklerle dolar.' },
          { id: 'B', text: 'Bana yarın toplantının iptal edildiğini söyledi.' },
          { id: 'C', text: 'Eğitim, insanı geliştiren en önemli araçtır.' },
          { id: 'D', text: 'Sana, hiçbir zaman pes etmemelisin, diyorum.' },
          { id: 'E', text: 'Çok okuduğunu, kendini çok iyi yetiştirdiğini biliyoruz.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu durum iç içe birleşik cümlelerde görülür. D seçeneğinde "hiçbir zaman pes etmemelisin" tam bir cümledir ve "diyorum" temel cümlesinin belirtisiz nesnesi görevindedir (Ne diyorum?). B ve E şıklarındaki nesneler fiilimsilerle kurulmuş kelime gruplarıdır (cümle formunda yargı taşımazlar).'
      },
      {
        id: 'q-ct-9-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç ortaklığı olan bağımlı sıralı bir cümle vardır?',
        options: [
          { id: 'A', text: 'Çocuk odasından çıktı, koşarak salona gitti.' },
          { id: 'B', text: 'Ağaca yavaşça tırmandı, en üstteki elmaları kopardı.' },
          { id: 'C', text: 'Masaya güzel bir örtü serdi, tabakları özenle yerleştirdi.' },
          { id: 'D', text: 'Gözlüğünü çıkardı, masanın üzerine bıraktı.' },
          { id: 'E', text: 'Kitabı aldı, sabaha kadar büyük bir ilgiyle okudu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C şıkkında "Masaya" kelimesi her iki yüklem için de ortaktır (Nereye serdi? Masaya / Nereye yerleştirdi? Masaya). Dolaylı tümleç ortak kullanılmıştır.'
      },
      {
        id: 'q-ct-9-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Meğer bütün bunlar bir yalanmış. (Basit isim cümlesi)' },
          { id: 'B', text: 'O gelmeden ben buradan ayrılmam. (Girişik birleşik fiil cümlesi)' },
          { id: 'C', text: 'Ne aradı ne sordu. (Bağlı, anlamca olumsuz cümle)' },
          { id: 'D', text: 'Hava kararır kabarmaz eve döndü. (Şartlı birleşik cümle)' },
          { id: 'E', text: 'Kapıyı açtım ve içeri girdim. (Bağlı fiil cümlesi)' }
        ],
        correctOptionId: 'D',
        explanation: 'D şıkkında "kararır kararmaz" zarf-fiildir, bu nedenle cümle girişik birleşik cümledir. Şartlı birleşik cümleler "-se/-sa" kipiyle kurulur.'
      },
      {
        id: 'q-ct-9-30',
        difficulty: 'hard',
        questionText: 'Seni ne kadar sevdiğimi, senin için neler yapabileceğimi gün gelir anlarsın ama iş işten geçmiş olur.\nBu cümle ile ilgili aşağıdakilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Bağlı bir cümledir.' },
          { id: 'B', text: 'Yan cümlecikler nesne görevindedir.' },
          { id: 'C', text: 'Kurallı fiil cümlelerinden oluşmuştur.' },
          { id: 'D', text: 'Biçimce ve anlamca olumludur.' },
          { id: 'E', text: 'Birden fazla bağımsız sıralı cümle kullanılmıştır.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle "ama" bağlacıyla bağlanmış iki temel yargıdan (anlarsın / geçmiş olur) oluştuğu için "bağlı cümle"dir. Sıralı cümle (virgül/noktalı virgülle bağlanan) yapısı yoktur. Bu nedenle E seçeneği yanlıştır.'
      }
    ]
  }
];
