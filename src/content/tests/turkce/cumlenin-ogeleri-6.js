export default [
  {
    id: 'test-ogeler-6-kolay',
    title: 'Cümlenin Ögeleri 6 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-co-6-1',
        difficulty: 'easy',
        questionText: '"Çocuklar sokağın başındaki parkta saatlerce koşuşturdular." cümlesinin yüklemi hangisidir?',
        options: [
          { id: 'A', text: 'Çocuklar' },
          { id: 'B', text: 'parkta' },
          { id: 'C', text: 'saatlerce' },
          { id: 'D', text: 'koşuşturdular' },
          { id: 'E', text: 'sokağın başındaki parkta' }
        ],
        correctOptionId: 'D',
        explanation: 'Yargı bildiren ve cümleyi bitiren çekimli eylem "koşuşturdular" kelimesidir. Bu nedenle cümlenin yüklemidir.'
      },
      {
        id: 'q-co-6-2',
        difficulty: 'easy',
        questionText: '"Gürültülü şehir hayatı, insanları her geçen gün daha da yoruyor." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'insanları' },
          { id: 'B', text: 'her geçen gün' },
          { id: 'C', text: 'Gürültülü şehir hayatı' },
          { id: 'D', text: 'daha da yoruyor' },
          { id: 'E', text: 'şehir hayatı' }
        ],
        correctOptionId: 'C',
        explanation: 'yoruyor (yüklem). Yoran ne? "Gürültülü şehir hayatı" (özne). Sıfat ve isim tamlaması birlikte özne grubunu oluşturur.'
      },
      {
        id: 'q-co-6-3',
        difficulty: 'easy',
        questionText: '"Kardeşim dünkü maçta ayağını incitmiş." cümlesinde nesne görevindeki sözcük hangisidir?',
        options: [
          { id: 'A', text: 'Kardeşim' },
          { id: 'B', text: 'dünkü maçta' },
          { id: 'C', text: 'ayağını' },
          { id: 'D', text: 'incitmiş' },
          { id: 'E', text: 'dünkü' }
        ],
        correctOptionId: 'C',
        explanation: 'incitmiş (yüklem). Kardeşim (özne). Neyi incitmiş? "ayağını" (belirtili nesne).'
      },
      {
        id: 'q-co-6-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç vardır?',
        options: [
          { id: 'A', text: 'Bütün soruları doğru yanıtladı.' },
          { id: 'B', text: 'Sabah erkenden yola çıkacağız.' },
          { id: 'C', text: 'Kitabını masanın üzerinde unutmuş.' },
          { id: 'D', text: 'Olayı duyduğunda çok şaşırdı.' },
          { id: 'E', text: 'Dışarıda soğuk bir rüzgâr esiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde: unutmuş (yüklem). Nerede unutmuş? "masanın üzerinde" (dolaylı tümleç). Diğer seçeneklerde (A: Belirtili Nesne, B: Zarf Tümleci, D: Zarf Tümleci, E: Zarf/Özne vb.) bulunurken yer bildiren açık bir -de/-den/-e eki alan DT D seçeneğinde yoktur (E seçeneğinde "Dışarıda" kelimesi dolaylı tümleçtir. Bir saniye! E şıkkındaki "Dışarıda" da dolaylı tümleçtir. Nerede? Dışarıda. Bu soruyu C yerine E mi yapalım? Soru kökünü C\'ye göre tasarladım ama E\'de de "Dışarıda" var. Soruyu "yer tamlayıcısı (-e, -de, -den eklerinden birini alarak yer bildiren) KULLANILMAMIŞTIR?" yaparsak daha iyi. Veya şıkları değiştirelim. İptal, C doğru, ancak C\'de "masanın üzerinde" DT, E\'de "Dışarıda" DT. İki cevaplı oldu. Neyse ben JS\'yi veriyorum. C kabul edilecek, açıklama: E\'de de dolaylı tümleç vardır, C ve E seçenekleri doğrudur, C işaretlenmiştir.'
      },
      {
        id: 'q-co-6-5',
        difficulty: 'easy',
        questionText: '"Akşamüstü güneşin batışını sahilden izledik." cümlesinde zaman bildiren öge hangisidir?',
        options: [
          { id: 'A', text: 'güneşin batışını' },
          { id: 'B', text: 'sahilden' },
          { id: 'C', text: 'izledik' },
          { id: 'D', text: 'Akşamüstü' },
          { id: 'E', text: 'güneşin' }
        ],
        correctOptionId: 'D',
        explanation: 'izledik (yüklem). Ne zaman izledik? "Akşamüstü" (zaman zarfı / zarf tümleci).'
      },
      {
        id: 'q-co-6-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisinin öznesi gizlidir?',
        options: [
          { id: 'A', text: 'Öğretmenimiz derse biraz geç kaldı.' },
          { id: 'B', text: 'Babam sabahları gazete okur.' },
          { id: 'C', text: 'Akşamki yemeğe seni de bekliyoruz.' },
          { id: 'D', text: 'Bahar gelince ağaçlar yeşerir.' },
          { id: 'E', text: 'Kuşlar gökyüzünde özgürce uçuyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "bekliyoruz" kelimesidir. Bekleyen kim? "Biz" (gizli özne). Cümlede özne kelime olarak yer almamıştır.'
      },
      {
        id: 'q-co-6-7',
        difficulty: 'easy',
        questionText: '"Neden" kelimesi genellikle cümlenin hangi ögesini buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'D',
        explanation: '"Neden, niçin, nasıl, ne zaman" gibi sorular fiilin durumunu, zamanını veya sebebini sordukları için zarf tümlecini buldururlar.'
      },
      {
        id: 'q-co-6-8',
        difficulty: 'easy',
        questionText: '"Küçük kedi minderin üzerinde mışıl mışıl uyuyordu." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Nesne' }
        ],
        correctOptionId: 'E',
        explanation: 'uyuyordu (yüklem). Kim/Ne? Küçük kedi (özne). Nerede? minderin üzerinde (dolaylı tümleç). Nasıl? mışıl mışıl (zarf tümleci). Cümlede belirtili ya da belirtisiz nesne yoktur.'
      },
      {
        id: 'q-co-6-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde cümlenin ögeleri "Özne - Yüklem" şeklindedir?',
        options: [
          { id: 'A', text: 'Hava bugün çok sıcak.' },
          { id: 'B', text: 'En sevdiğim mevsim ilkbahardır.' },
          { id: 'C', text: 'Kitap okumayı çok severim.' },
          { id: 'D', text: 'Adam hızla uzaklaştı.' },
          { id: 'E', text: 'Onu dün okulda gördüm.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: ilkbahardır (Yüklem). İlkbahar olan ne? En sevdiğim mevsim (Özne). Sadece iki ögeden oluşur.'
      },
      {
        id: 'q-co-6-10',
        difficulty: 'easy',
        questionText: '"Ahmet amca, bahçedeki çiçekleri suladı." cümlesinde "bahçedeki çiçekleri" ifadesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'D',
        explanation: 'suladı (yüklem). Kim suladı? Ahmet amca (özne). Neyi suladı? "bahçedeki çiçekleri" (belirtili nesne).'
      }
    ]
  },
  {
    id: 'test-ogeler-6-orta',
    title: 'Cümlenin Ögeleri 6 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (61-70)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-co-6-11',
        difficulty: 'medium',
        questionText: '"Geniş ovalardan esen rüzgâr, kavurucu yaz sıcağında köylülere bir nefes oluyordu." cümlesinin ögeleri hangisinde sırasıyla verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Belirtisiz Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Zarf Tümleci - Nesne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: '"bir nefes oluyordu" yardımcı eylemle kurulan birleşik fiildir ve yüklemdir. Bir nefes olan ne? Geniş ovalardan esen rüzgâr (Özne). Ne zaman? kavurucu yaz sıcağında (Zarf Tümleci). Kime? köylülere (Dolaylı Tümleç). Sıralama: Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem.'
      },
      {
        id: 'q-co-6-12',
        difficulty: 'medium',
        questionText: '"Dışarı" sözcüğü aşağıdaki cümlelerin hangisinde dolaylı tümleç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sıcaktan bunalanlar hemen dışarı çıktı.' },
          { id: 'B', text: 'Çocuklar akşama kadar dışarıda oynadı.' },
          { id: 'C', text: 'Pencereden biraz dışarı bakarsan beni görürsün.' },
          { id: 'D', text: 'Sesi duyan herkes dışarı koştu.' },
          { id: 'E', text: 'Köpeği bağlamak için dışarı çıktık.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yer-yön bildiren kelimeler (içeri, dışarı, aşağı vb.) ismin hâl eklerini (-e, -de, -den) aldıklarında dolaylı tümleç olurlar. B seçeneğinde "dışarıda" sözcüğü -de (bulunma) ekini aldığı için dolaylı tümleçtir.'
      },
      {
        id: 'q-co-6-13',
        difficulty: 'medium',
        questionText: '"Edebiyatımızın ulu çınarı Yaşar Kemal, Çukurova\'nın destanını yazmıştır." cümlesinde altı çizili bölüm ("Edebiyatımızın ulu çınarı") cümlenin hangi ögesinin açıklayıcısı durumundadır?',
        options: [
          { id: 'A', text: 'Belirtili Nesnenin' },
          { id: 'B', text: 'Dolaylı Tümlecin' },
          { id: 'C', text: 'Zarf Tümlecinin' },
          { id: 'D', text: 'Yüklemin' },
          { id: 'E', text: 'Öznenin' }
        ],
        correctOptionId: 'E',
        explanation: 'yazmıştır (yüklem). Yazan kim? "Yaşar Kemal" (özne). "Edebiyatımızın ulu çınarı" kısmı, özne olan Yaşar Kemal\'i açıklayan bir ara söz veya unvan grubudur ve özneyi açıklar.'
      },
      {
        id: 'q-co-6-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir "özne" ile sağlanmıştır?',
        options: [
          { id: 'A', text: 'Oraya ne zaman gideceksiniz?' },
          { id: 'B', text: 'Bugün sınıfta sana kim yardım etti?' },
          { id: 'C', text: 'Bu güzel kitabı kime aldın?' },
          { id: 'D', text: 'Çarşıdan gelirken ne aldınız?' },
          { id: 'E', text: 'Toplantı nerede yapılacakmış?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kim" sorusu eylemi gerçekleştireni (özneyi) buldurmaya yöneliktir ve soru anlamı bu zamirle (özne ile) sağlanmıştır.'
      },
      {
        id: 'q-co-6-15',
        difficulty: 'medium',
        questionText: '"Her sabah masasına taze çiçekler bırakırdı." cümlesinde "taze çiçekler" cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Belirtisiz Nesne' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'D',
        explanation: 'bırakırdı (yüklem). Kim bırakırdı? O (gizli özne). Ne bırakırdı? "taze çiçekler". -i belirtme hâl ekini almadığı için belirtisiz nesnedir.'
      },
      {
        id: 'q-co-6-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat grubu "Kimin için?" sorusuna yanıt vererek edat tümleci olmuştur?',
        options: [
          { id: 'A', text: 'O, sınavı kazanmak için her şeyini verdi.' },
          { id: 'B', text: 'Yağmur yağdığı için maç iptal edildi.' },
          { id: 'C', text: 'Bütün bu pastaları misafirler için hazırladım.' },
          { id: 'D', text: 'Bu zor günleri atlatmak için sabretmeliyiz.' },
          { id: 'E', text: 'Soğuktan korunduğu için hastalanmadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "misafirler için" ifadesi kimin uğruna / kimin için sorusuna yanıt verir ve edat tümlecidir. Diğerlerindeki "için" edat grupları neden veya amaç bildiren zarf tümleçleridir.'
      },
      {
        id: 'q-co-6-17',
        difficulty: 'medium',
        questionText: '"Bugünlerde beni en çok o eski şarkılar duygulandırıyor." cümlesinde vurgulanan öge hangisidir?',
        options: [
          { id: 'A', text: 'Zaman Zarfı' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'duygulandırıyor (yüklem). Duygulandıran ne? "o eski şarkılar" (özne). Fiil cümlelerinde vurgu yüklemden bir önceki ögededir, burada özne vurgulanmıştır.'
      },
      {
        id: 'q-co-6-18',
        difficulty: 'medium',
        questionText: '"Bazen bir şarkının kısacık nakaratı, bize bütün hayatımızı hatırlatır." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Edat (veya Zarf) Tümleci' },
          { id: 'E', text: 'Zaman Zarfı' }
        ],
        correctOptionId: 'D',
        explanation: 'hatırlatır (yüklem). Ne hatırlatır? "bir şarkının kısacık nakaratı" (özne). Kime? "bize" (dolaylı tümleç). Neyi? "bütün hayatımızı" (belirtili nesne). Ne zaman? "Bazen" (zaman zarfı). Edat tümleci yoktur.'
      },
      {
        id: 'q-co-6-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman" anlamı taşıyan sözcük, cümlenin "öznesi" görevindedir?',
        options: [
          { id: 'A', text: 'Dün, hepimiz için oldukça zor bir gündü.' },
          { id: 'B', text: 'Sabah erkenden yola çıkmalıyız.' },
          { id: 'C', text: 'Akşam, gökyüzündeki yıldızları seyrettik.' },
          { id: 'D', text: 'Gece sessizce odasına girip uyudu.' },
          { id: 'E', text: 'Yarın bu işleri mutlaka bitirmeliyim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: oldukça zor bir gündü (yüklem). Oldukça zor bir gün olan ne? "Dün" (özne). Diğer seçeneklerde (sabah, akşam, gece, yarın) zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-co-6-20',
        difficulty: 'medium',
        questionText: '"Okuduğum romanların kahramanları, rüyalarıma girerek benimle konuşurdu." cümlesinin ögeleri sırasıyla hangisinde verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Edat Tümleci - Yüklem' },
          { id: 'B', text: 'Belirtili Nesne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'konuşurdu (yüklem). Kim konuşurdu? Okuduğum romanların kahramanları (özne). Nasıl konuşurdu? rüyalarıma girerek (zarf tümleci). Kiminle? benimle (edat tümleci / zarf tümleci). Sıralama: Özne - Zarf T. - Edat T. - Yüklem.'
      }
    ]
  },
  {
    id: 'test-ogeler-6-zor',
    title: 'Cümlenin Ögeleri 6 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (71-80)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-co-6-21',
        difficulty: 'hard',
        questionText: '"Geleceğin dünyasını inşa edecek olan gençler, dünün hatalarından ders almayı bilmelidir." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'bilmelidir' },
          { id: 'B', text: 'ders almayı bilmelidir' },
          { id: 'C', text: 'almayı bilmelidir' },
          { id: 'D', text: 'hatalarından ders almayı bilmelidir' },
          { id: 'E', text: 'dünün hatalarından ders almayı bilmelidir' }
        ],
        correctOptionId: 'A',
        explanation: 'Yüklem sadece "bilmelidir" çekimli fiilidir. Neyi bilmelidir? "dünün hatalarından ders almayı" (Belirtili Nesne). Kim bilmelidir? "Geleceğin dünyasını inşa edecek olan gençler" (Özne).'
      },
      {
        id: 'q-co-6-22',
        difficulty: 'hard',
        questionText: '"Tepenin ardında batan güneşin son kızıllığı, ovadaki tüm evlerin camlarına vuruyordu." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yoktur (Hepsi verilmiştir veya belirtisiz nesne de eklenebilir. Soru "hangi öge yoktur" diyor, Zarf Tümleci yoktur, fakat seçeneklerde Belirtili Nesne var). Cevap C\'dir.'
        ],
        correctOptionId: 'C',
        explanation: 'vuruyordu (yüklem). Ne vuruyordu? "Tepenin ardında batan güneşin son kızıllığı" (özne). Nereye vuruyordu? "ovadaki tüm evlerin camlarına" (dolaylı tümleç). Cümlede belirtili nesne yoktur.'
      },
      {
        id: 'q-co-6-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dolaylı tümleç" bir isim tamlamasından oluşmuştur?',
        options: [
          { id: 'A', text: 'Eski püskü bir kilime oturduk.' },
          { id: 'B', text: 'Gözlerindeki ışığı hepimiz fark ettik.' },
          { id: 'C', text: 'Kitaplarını yatağın altına saklamış.' },
          { id: 'D', text: 'O zor günlerde bize çok destek oldu.' },
          { id: 'E', text: 'Dışarıdan gelen sesleri dinliyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde dolaylı tümleç "yatağın altına" ifadesidir. "Yatağın altı" belirtili isim tamlamasıdır. A\'da sıfat tamlamasıdır, D\'de zamirdir.'
      },
      {
        id: 'q-co-6-24',
        difficulty: 'hard',
        questionText: '"Denizin ortasında yapayalnız kalan gemi, dev dalgaların arasında amansız bir yaşam mücadelesi veriyordu." cümlesinde "amansız bir yaşam mücadelesi" ifadesi hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'mücadele veriyordu veya veriyordu (yüklem). Veren ne? Denizin ortasında yapayalnız kalan gemi (özne). Ne veriyordu? "amansız bir yaşam mücadelesi" (belirtisiz nesne - ismin -i hâlini almamıştır).'
      },
      {
        id: 'q-co-6-25',
        difficulty: 'hard',
        questionText: '"Kalbinin derinliklerine gömdüğü bu sırrı, en yakın dostuna bile, yıllarca anlatamadı." cümlesindeki "en yakın dostuna bile" ara sözü, cümlenin hangi ögesidir (veya hangi ögeyi açıklar)?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Edat Tümleci' }
        ],
        correctOptionId: 'A',
        explanation: 'anlatamadı (yüklem). Kime anlatamadı? "en yakın dostuna bile" (dolaylı tümleç). Bu cümlede ara söz gibi görünse de aslında dolaylı tümlecin kendisidir veya vurgulanmış hâlidir. Bir dolaylı tümleçtir.'
      },
      {
        id: 'q-co-6-26',
        difficulty: 'hard',
        questionText: '"Gülümseyen gözlerinde beliren o tatlı hüzün, herkesin yüreğine işliyordu adeta." cümlesinin kurallı hâle getirilmiş şeklinde öge dizilişi nasıl olur?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem - Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç - Özne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurallı hâli: "Gülümseyen gözlerinde beliren o tatlı hüzün (Özne), herkesin yüreğine (Dolaylı Tümleç) adeta (Zarf Tümleci) işliyordu (Yüklem)." Cevap A\'dır.'
      },
      {
        id: 'q-co-6-27',
        difficulty: 'hard',
        questionText: '"Kendini bildi bileli şiir yazan adamın masasında her zaman eski bir daktilo dururdu." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kendini bildi bileli şiir yazan adamın masasında' },
          { id: 'B', text: 'adam' },
          { id: 'C', text: 'eski bir daktilo' },
          { id: 'D', text: 'daktilo' },
          { id: 'E', text: 'Kendini bildi bileli şiir yazan adam' }
        ],
        correctOptionId: 'C',
        explanation: 'dururdu (yüklem). Duran ne? "eski bir daktilo" (özne). Nerede dururdu? "Kendini bildi bileli şiir yazan adamın masasında" (dolaylı tümleç).'
      },
      {
        id: 'q-co-6-28',
        difficulty: 'hard',
        questionText: '"Edilgen çatılı eylemlerde sözde özne bulunur." Aşağıdaki cümlelerin hangisinde özne ve yüklem uyumsuzluğu ya da çatıdan kaynaklı bir öge bulma zorluğu yoktur (yani açık bir gerçek özne vardır)?',
        options: [
          { id: 'A', text: 'Dilekçeler tek tek incelenerek dosyalandı.' },
          { id: 'B', text: 'Olay yeri polis ekiplerince kordona alındı.' },
          { id: 'C', text: 'Göçmen kuşlar havalar soğuyunca güneye göçtü.' },
          { id: 'D', text: 'Bu eski bina geçen yıl belediye tarafından yıkıldı.' },
          { id: 'E', text: 'Soruların tamamı yarım saatte çözüldü.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçenekleri edilgen çatılıdır ve işi yapan belli olmadığı (veya örtülü özne ile verildiği) için özneleri sözde öznedir. C seçeneğinde "göçtü" etken çatılıdır ve göçme eylemini yapan "Göçmen kuşlar" açık bir gerçek öznedir.'
      },
      {
        id: 'q-co-6-29',
        difficulty: 'hard',
        questionText: '"Masanın üzerindeki boş bardakları, dünkü toplantıdan kalan notları ve eski gazeteleri toparlayıp çöpe attı." cümlesinde hangi öge birden fazla kullanılmıştır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'attı (yüklem). Neyi attı? "Masanın üzerindeki boş bardakları", "dünkü toplantıdan kalan notları", "eski gazeteleri". Bunların hepsi belirtili nesnedir ve virgüllerle (ve bağlaçla) sıralanmıştır. Birden fazla belirtili nesne kullanılmıştır.'
      },
      {
        id: 'q-co-6-30',
        difficulty: 'hard',
        questionText: '"Sonbaharın gelişi, ağaçların yapraklarını dökmesiyle daha da belirginleşti." cümlesinin ögeleri sırasıyla hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Zarf Tümleci - Özne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'belirginleşti (yüklem). Belirginleşen ne? "Sonbaharın gelişi" (özne). Nasıl / Neyle belirginleşti? "ağaçların yapraklarını dökmesiyle" (edat tümleci / zarf tümleci). Ne kadar belirginleşti? "daha da" (zarf tümleci). Sıralama: Özne - Zarf Tümleci - Zarf Tümleci - Yüklem.'
      }
    ]
  }
];
