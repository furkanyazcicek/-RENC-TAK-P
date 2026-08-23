export default [
  {
    id: 'test-ogeler-4-kolay',
    title: 'Cümlenin Ögeleri 4 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-co-4-1',
        difficulty: 'easy',
        questionText: '"Bahçıvan, bahçedeki kuru dalları makasla kesti." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bahçıvan' },
          { id: 'B', text: 'makasla' },
          { id: 'C', text: 'kuru dalları' },
          { id: 'D', text: 'kesti' },
          { id: 'E', text: 'makasla kesti' }
        ],
        correctOptionId: 'D',
        explanation: 'Yargı bildiren kelime "kesti" eylemidir ve cümlenin yüklemidir. "makasla" kelimesi araç (edat/zarf) tümlecidir.'
      },
      {
        id: 'q-co-4-2',
        difficulty: 'easy',
        questionText: '"Kedi sütünü bitirdikten sonra koltukta uyuyakaldı." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kedi' },
          { id: 'B', text: 'sütünü' },
          { id: 'C', text: 'koltukta' },
          { id: 'D', text: 'O (gizli özne)' },
          { id: 'E', text: 'uyuyakaldı' }
        ],
        correctOptionId: 'A',
        explanation: 'uyuyakaldı (yüklem). Uyuyakalan kim/ne? "Kedi" (özne). Eylemi yapan açıkça belirtilmiştir.'
      },
      {
        id: 'q-co-4-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtisiz nesne kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evi baştan aşağı temizledim.' },
          { id: 'B', text: 'Ali dünkü maçı izleyememiş.' },
          { id: 'C', text: 'Annem pazardan taze soğan almış.' },
          { id: 'D', text: 'Bu güzel şarkıyı hepimiz biliyoruz.' },
          { id: 'E', text: 'Soruları çok hızlı çözdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'almış (yüklem). Ne almış? "taze soğan" (belirtisiz nesne). Diğer seçeneklerde (evi, maçı, şarkıyı, soruları) ismin belirtme (-i) hâlini alan belirtili nesneler vardır.'
      },
      {
        id: 'q-co-4-4',
        difficulty: 'easy',
        questionText: '"Bütün aile bayramda köyde toplandı." cümlesindeki "köyde" sözcüğü hangi öge görevindedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Edat Tümleci' }
        ],
        correctOptionId: 'C',
        explanation: 'toplandı (yüklem). Nerede toplandı? "köyde" (Bulunma hâl eki aldığı ve yer bildirdiği için dolaylı tümleçtir).'
      },
      {
        id: 'q-co-4-5',
        difficulty: 'easy',
        questionText: '"Küçük kız annesine sıkıca sarıldı." cümlesinde zarf tümleci olan kelime aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Küçük kız' },
          { id: 'B', text: 'annesine' },
          { id: 'C', text: 'sıkıca' },
          { id: 'D', text: 'sarıldı' },
          { id: 'E', text: 'Küçük' }
        ],
        correctOptionId: 'C',
        explanation: 'sarıldı (yüklem). Nasıl sarıldı? "sıkıca" (zarf tümleci).'
      },
      {
        id: 'q-co-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gizli özne vardır?',
        options: [
          { id: 'A', text: 'Babam erkenden işe gitti.' },
          { id: 'B', text: 'Yağmur sabaha kadar durmadı.' },
          { id: 'C', text: 'Seninle sinemaya gelmek istiyorum.' },
          { id: 'D', text: 'Çocuklar sokakta seksek oynuyor.' },
          { id: 'E', text: 'Bu kitap gerçekten çok sürükleyici.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "istiyorum" kelimesidir. İsteyen kim? "Ben" (gizli özne). Cümlede "ben" kelimesi yazılmamıştır. Diğerlerinde özneler açıktır (Babam, Yağmur, Çocuklar, Bu kitap).'
      },
      {
        id: 'q-co-4-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sorulardan hangisi dolaylı tümleci bulmaya yönelik DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Nereye?' },
          { id: 'B', text: 'Nerede?' },
          { id: 'C', text: 'Nereden?' },
          { id: 'D', text: 'Nasıl?' },
          { id: 'E', text: 'Kime?' }
        ],
        correctOptionId: 'D',
        explanation: '"Nasıl" sorusu fiile sorulduğunda durum zarfını (zarf tümlecini) buldurur. Diğerleri (-e, -de, -den ekleri alanlar) dolaylı tümleci buldurur.'
      },
      {
        id: 'q-co-4-8',
        difficulty: 'easy',
        questionText: '"Göçmen kuşlar havalar soğuyunca güneye gider." cümlesinin öge sıralanışı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem - Özne' },
          { id: 'E', text: 'Özne - Belirtisiz Nesne - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'gider (yüklem). Kim/Ne gider? Göçmen kuşlar (özne). Ne zaman? havalar soğuyunca (zarf T.). Nereye? güneye (dolaylı T.). Sıralama: Özne - Zarf T. - Dolaylı T. - Yüklem.'
      },
      {
        id: 'q-co-4-9',
        difficulty: 'easy',
        questionText: '"Çekmecedeki eski resimleri tek tek inceledi." cümlesinde hangi öge YER ALMAMAKTADIR?',
        options: [
          { id: 'A', text: 'Gizli Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'E',
        explanation: 'inceledi (yüklem). O (gizli özne). Neyi? Çekmecedeki eski resimleri (belirtili nesne). Nasıl? tek tek (zarf tümleci). Dolaylı tümleç yoktur.'
      },
      {
        id: 'q-co-4-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi isim cümlesidir?',
        options: [
          { id: 'A', text: 'Ağacın altındaki gölgede biraz dinlendik.' },
          { id: 'B', text: 'Onun en büyük hayali dünya turuna çıkmaktı.' },
          { id: 'C', text: 'Rüzgâr şiddetini giderek artırıyordu.' },
          { id: 'D', text: 'Arkadaşım sınav kağıdını erkenden verdi.' },
          { id: 'E', text: 'Masadaki çay bardağı yere düştü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki yüklem "çıkmaktı" kelimesidir. Fiilimsiler (isim-fiil olan çıkmak) ek-fiil alarak yüklem olduklarında isim cümlesi oluştururlar. Diğerleri çekimli fiildir.'
      }
    ]
  },
  {
    id: 'test-ogeler-4-orta',
    title: 'Cümlenin Ögeleri 4 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (41-50)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-co-4-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ögelere ayırma işlemi doğru yapılmıştır?',
        options: [
          { id: 'A', text: 'Annem / pazar çantalarını / mutfağa / bıraktı.' },
          { id: 'B', text: 'Evin / bahçesindeki otları / tek tek / temizledi.' },
          { id: 'C', text: 'Her zaman / doğru / söyleyenleri / takdir / ederim.' },
          { id: 'D', text: 'Yeni / aldığımız televizyon / çok / güzel / gösteriyor.' },
          { id: 'E', text: 'Babam / hafta sonları / bizi / pikniğe götürürdü.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: Annem (Özne) / pazar çantalarını (Belirtili Nesne) / mutfağa (Dolaylı T.) / bıraktı (Yüklem). B\'de isim tamlaması (Evin bahçesindeki otları) parçalanmış. C\'de "takdir ederim" bölünmüş. D\'de "Yeni aldığımız televizyon" sıfat tamlamasıdır, bölünmüş. E\'de "pikniğe götürürdü" ayrılmış veya tümleşik hata yapılmış.'
      },
      {
        id: 'q-co-4-12',
        difficulty: 'medium',
        questionText: '"Nereye" sorusu farklı durumlarda farklı ögeleri buldurabilir.\nAşağıdaki cümlelerin hangisinde "nereye" sorusunun cevabı zarf tümlecidir?',
        options: [
          { id: 'A', text: 'Sesleri duyunca hemen aşağı indi.' },
          { id: 'B', text: 'Hafta sonu arkadaşlarla Ankara\'ya gideceğiz.' },
          { id: 'C', text: 'Kutuları çatıya çıkardık.' },
          { id: 'D', text: 'Hava soğuk, biraz içeriye girelim.' },
          { id: 'E', text: 'Kitabı masaya bırakıver.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yer-yön zarfları (aşağı, yukarı, içeri vb.) yalın hâlde bulunduklarında zarf tümleci olurlar. A seçeneğinde "aşağı" kelimesi hâl eki almamıştır ve zarf tümlecidir. B, C, D ve E\'de -e yönelme hâl eki aldıkları için dolaylı tümleçtirler.'
      },
      {
        id: 'q-co-4-13',
        difficulty: 'medium',
        questionText: '"İzmir, doğduğum ve büyüdüğüm şehir, benim için vazgeçilmez bir tutkudur." cümlesinde ara söz cümlenin hangi ögesini açıklamaktadır?',
        options: [
          { id: 'A', text: 'Özneyi' },
          { id: 'B', text: 'Nesneyi' },
          { id: 'C', text: 'Dolaylı Tümleci' },
          { id: 'D', text: 'Zarf Tümlecini' },
          { id: 'E', text: 'Yüklemi' }
        ],
        correctOptionId: 'A',
        explanation: 'benim için vazgeçilmez bir tutkudur (yüklem). Benim için vazgeçilmez bir tutku olan ne? "İzmir" (özne). İki virgül arasındaki "doğduğum ve büyüdüğüm şehir" ifadesi İzmir\'i yani özneyi açıklar.'
      },
      {
        id: 'q-co-4-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir nesneyle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu saate kadar nerede kaldın?' },
          { id: 'B', text: 'Dünkü sınavda sana kimi sordular?' },
          { id: 'C', text: 'Okula ne zaman başlayacaksın?' },
          { id: 'D', text: 'Bunu bana kim anlatacak?' },
          { id: 'E', text: 'Tatilde ailenizle nereye gidiyorsunuz?' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru sözcüğü eylemin hangi ögesini bulduruyorsa, soru anlamı o ögeyle sağlanmış demektir. B seçeneğindeki "kimi" sorusu ismin -i hâlini almıştır ve belirtili nesneyi buldurur.'
      },
      {
        id: 'q-co-4-15',
        difficulty: 'medium',
        questionText: 'Fiil cümlelerinde vurgu yüklemden bir önceki ögededir.\nBuna göre "Dün annem bana kitap aldı." cümlesinde vurgulanan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Zaman Zarfı' },
          { id: 'D', text: 'Belirtisiz Nesne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'aldı (yüklem). Ne aldı? "kitap" (belirtisiz nesne). Yüklemden hemen önce "kitap" kelimesi bulunduğu için vurgulanan öge belirtisiz nesnedir.'
      },
      {
        id: 'q-co-4-16',
        difficulty: 'medium',
        questionText: '"Ne" sorusu hem özneyi hem de belirtisiz nesneyi buldurabilir.\nBuna göre aşağıdaki cümlelerin hangisinde "ne" sorusu özneyi buldurur?',
        options: [
          { id: 'A', text: 'Manavdan gelirken ne aldın?' },
          { id: 'B', text: 'Bunca zamandır orada ne bekliyorsun?' },
          { id: 'C', text: 'Çocuğun eline ne battı?' },
          { id: 'D', text: 'Yolculuk için yanına ne alacaksın?' },
          { id: 'E', text: 'Bütün akşam mutfakta ne pişirdin?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde batan şey "ne"dir, yani eylemi gerçekleştirendir (özne). Diğer seçeneklerin tümünde gizli veya açık başka bir özne vardır (sen), bu yüzden onlardaki "ne" nesneyi buldurur.'
      },
      {
        id: 'q-co-4-17',
        difficulty: 'medium',
        questionText: '"Küçük kardeşim, o sevimli yaramaz, dün dedemin gözlüğünü kırmış." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Ara Söz - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'kırmış (Y). Kim kırmış? Küçük kardeşim (Ö). "o sevimli yaramaz" (öznenin açıklayıcısı olan ara söz). Ne zaman? dün (ZT). Neyi kırmış? dedemin gözlüğünü (BN). Öge sıralaması sorularında ara sözler genellikle ait oldukları ögeyle birlikte veya "Ara Söz" olarak arada gösterilebilir. En doğru sıralama C seçeneğindedir.'
      },
      {
        id: 'q-co-4-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "için" edatıyla kurulan grup farklı bir öge görevindedir?',
        options: [
          { id: 'A', text: 'Sınavı kazanmak için çok çalıştı.' },
          { id: 'B', text: 'Bütün bunları senin için yaptık.' },
          { id: 'C', text: 'Hasta olduğu için okula gelmedi.' },
          { id: 'D', text: 'Güneş battığı için hava aniden soğudu.' },
          { id: 'E', text: 'Trafiğe takıldığım için toplantıya geciktim.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde "için" edat grupları neden veya amaç bildirerek "Niçin?" sorusuna yanıt verir ve Zarf Tümleci olur. B seçeneğinde ise "senin için" kimin uğruna anlamı katarak "Kimin için?" sorusuna cevap verir ve Edat Tümleci kabul edilir.'
      },
      {
        id: 'q-co-4-19',
        difficulty: 'medium',
        questionText: '"Misafirleri kapıda karşılayıp salona kadar onlara eşlik etti." cümlesinde aşağıdaki ögelerden hangisi birden fazla DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç' },
          { id: 'B', text: 'Gizli Özne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Belirtili Nesne' }
        ],
        correctOptionId: 'A',
        explanation: 'eşlik etti (yüklem). Kim? O (gizli özne - bir tane). Nereye kadar? "salona kadar" (edat/zarf T.). Kime? "onlara" (dolaylı tümleç). Nasıl? "Misafirleri kapıda karşılayıp" (zarf tümleci). Burada dolaylı tümleç sadece "onlara" sözcüğüdür (bir tane). Zarf tümleci 2 adettir. Soru kökü biraz karmaşık olabilir ancak dolaylı tümleç 1 adettir.'
      },
      {
        id: 'q-co-4-20',
        difficulty: 'medium',
        questionText: 'Bir cümlede "mi" soru edatı hangi ögeden sonra gelirse vurgu o ögeye kayar.\n"Dün akşam kütüphanede kitabı sen mi unuttun?" cümlesinde vurgulanan öge hangisidir?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Özne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'Cümlede "mi" edatı "sen" kelimesinden sonra gelmiştir. "Sen" kelimesi cümlenin öznesi olduğundan vurgulanan öge öznedir.'
      }
    ]
  },
  {
    id: 'test-ogeler-4-zor',
    title: 'Cümlenin Ögeleri 4 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (51-60)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-co-4-21',
        difficulty: 'hard',
        questionText: '"Eski bir dostun yüzündeki sıcak tebessüm, insanın yıllar boyu biriktirdiği kederleri silebilir." cümlesinde hangi öge, bir isim tamlamasından oluşmamıştır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Özne ve Nesne' },
          { id: 'E', text: 'Hepsi isim tamlamasıdır' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklem "silebilir" çekimli fiildir, dolayısıyla isim tamlaması değildir. Özne "Eski bir dostun yüzündeki sıcak tebessüm", Nesne "insanın yıllar boyu biriktirdiği kederleri". Bunlar sıfat ve isim tamlamalarının iç içe girdiği kelime gruplarıdır.'
      },
      {
        id: 'q-co-4-22',
        difficulty: 'hard',
        questionText: '"Yağmur damlalarının cama vuran ritmik sesi, uykusu kaçan yaşlı adamı geçmişe götürdü." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'götürdü (Yüklem). Götüren ne? "Yağmur damlalarının cama vuran ritmik sesi" (Özne). Kimi götürdü? "uykusu kaçan yaşlı adamı" (Belirtili Nesne). Nereye götürdü? "geçmişe" (Dolaylı Tümleç). Sıralama: Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem.'
      },
      {
        id: 'q-co-4-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sıralı cümlelerin hangisinde öge ortaklığı yoktur?',
        options: [
          { id: 'A', text: 'Kitabını masaya bıraktı, hemen uyudu.' },
          { id: 'B', text: 'Rüzgâr şiddetle esti, ağaçların dalları kırıldı.' },
          { id: 'C', text: 'Çocuklar bahçeye çıktı, neşeyle oynadı.' },
          { id: 'D', text: 'Ahmet ödevini bitirdi, çantasını hazırladı.' },
          { id: 'E', text: 'Kapıyı kilitledi, anahtarı cebine koydu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde birinci cümlenin öznesi "Rüzgâr", ikinci cümlenin öznesi "ağaçların dalları"dır; hiçbir ortak öge (özne, nesne, yer tamlayıcısı vb.) bulunmamaktadır. A, C, D ve E seçeneklerinde özneler ortaktır.'
      },
      {
        id: 'q-co-4-24',
        difficulty: 'hard',
        questionText: '"Sonbaharın sararttığı yapraklar, rüzgârın şiddetiyle dallarından birer birer koptu." cümlesinde aşağıdaki ögelerden hangisi birden fazladır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'koptu (y). Kopan ne? Sonbaharın sararttığı yapraklar (Ö). Nasıl / Neyin etkisiyle? rüzgârın şiddetiyle (ZT / Edat T.). Nereden? dallarından (DT). Nasıl? birer birer (ZT). Cümlede iki adet zarf tümleci ("rüzgârın şiddetiyle" ve "birer birer") kullanılmıştır.'
      },
      {
        id: 'q-co-4-25',
        difficulty: 'hard',
        questionText: '"Öğrencilerin büyük bir kısmı, zorluk derecesi yüksek bu soruları çözerken ter döktü." cümlesinde hangi ögeler bulunmaktadır?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'ter döktü (yüklem - deyim). Ter döken kim? Öğrencilerin büyük bir kısmı (özne). Ne zaman? zorluk derecesi yüksek bu soruları çözerken (zarf tümleci - fiilimsi grubu bölünmez). Sıralama: Özne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-4-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne bir fiilimsi (eylemsi) grubudur?',
        options: [
          { id: 'A', text: 'Bütün soruları eksiksiz çözdüğünü söyledi.' },
          { id: 'B', text: 'Yarın erkenden yola çıkmayı planlıyoruz.' },
          { id: 'C', text: 'Eski arkadaşlarıyla buluşmak ona iyi gelmişti.' },
          { id: 'D', text: 'Anlatılan masallara hepimiz inanmıştık.' },
          { id: 'E', text: 'Hem A hem B seçeneği' }
        ],
        correctOptionId: 'E',
        explanation: 'A seçeneğinde "Bütün soruları eksiksiz çözdüğünü" (sıfat-fiil grubu nesnedir). B seçeneğinde "Yarın erkenden yola çıkmayı" (isim-fiil grubu nesnedir). C\'de buluşmak öznedir. D\'de masallara dolaylı tümleçtir. Dolayısıyla cevap E\'dir.'
      },
      {
        id: 'q-co-4-27',
        difficulty: 'hard',
        questionText: '"Şair, ilk şiir kitabında memleketinin el değmemiş doğasını büyük bir ustalıkla tasvir etmiş." cümlesinde vurgulanan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'tasvir etmiş (yüklem). Yüklemden hemen önce gelen öge "büyük bir ustalıkla" (nasıl sorusunun cevabı) bir zarf tümlecidir (veya edat tümlecidir). Dolayısıyla vurgulanan öge zarf tümlecidir.'
      },
      {
        id: 'q-co-4-28',
        difficulty: 'hard',
        questionText: '"Edilgen eylemlerin yüklem olduğu cümlelerde işi yapan (gerçek özne) cümlenin içinde \'...tarafından\' veya \'-ca, -ce\' ekleriyle bulunabilir. Buna örtülü özne denir ve cümlenin ögesi olarak Zarf Tümleci kabul edilir."\nBuna göre aşağıdaki cümlelerin hangisinde örtülü özne vardır?',
        options: [
          { id: 'A', text: 'Sorular öğrenciler tarafından dikkatlice okundu.' },
          { id: 'B', text: 'Yağmur yağınca herkes saçak altlarına kaçıştı.' },
          { id: 'C', text: 'Bahçedeki kurumuş yapraklar rüzgârla savruldu.' },
          { id: 'D', text: 'Çocuk, annesine sarılıp ağlamaya başladı.' },
          { id: 'E', text: 'Yeni açılan mağaza çok güzel süslenmişti.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "okundu" edilgen bir yüklemdir. Eylemi aslında yapanlar "öğrenciler"dir ve bu "öğrenciler tarafından" şeklinde belirtilmiştir. Bu bir örtülü öznedir.'
      },
      {
        id: 'q-co-4-29',
        difficulty: 'hard',
        questionText: '"Hayatta en çok korktuğu şey, sevdiklerini bir bir kaybetmekti." cümlesinin ögeleri hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Yüklem' },
          { id: 'C', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'D', text: 'Özne - Yüklem' },
          { id: 'E', text: 'Özne - Belirtisiz Nesne - Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'sevdiklerini bir bir kaybetmekti (yüklem - isim-fiil grubu). Sevdiklerini bir bir kaybetmek olan ne? "Hayatta en çok korktuğu şey" (özne - sıfat tamlaması grubu). Cümle iki ögeden, özne ve yüklemden oluşmuştur.'
      },
      {
        id: 'q-co-4-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde öge sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Düşüyorum karanlık sokakların ortasına.' },
          { id: 'B', text: 'Ansızın bir rüzgâr çarptı yüzüme.' },
          { id: 'C', text: 'Bütün anılar birer birer silindi aklımdan.' },
          { id: 'D', text: 'Söyledi bana en güzel yalanları.' },
          { id: 'E', text: 'Bekliyorum seni köşe başında sabaha kadar sessizce.' }
        ],
        correctOptionId: 'E',
        explanation: 'A: Düşüyorum(Y) nereye? karanlık sokakların ortasına(DT) (2 öge). B: Ansızın(ZT) bir rüzgâr(Ö) çarptı(Y) yüzüme(DT) (4 öge). C: Bütün anılar(Ö) birer birer(ZT) silindi(Y) aklımdan(DT) (4 öge). D: Söyledi(Y) kime? bana(DT) neyi? en güzel yalanları(BN) (3 öge). E: Bekliyorum(Y) kimi? seni(BN) nerede? köşe başında(DT) ne zamana kadar? sabaha kadar(ZT) nasıl? sessizce(ZT). (5 öge). E seçeneğinde öge sayısı en fazladır.'
      }
    ]
  }
];
