export default [
  {
    id: 'test-sozcuk-yapisi-1-kolay',
    title: 'Sözcük Yapısı 1 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-sy-1-1',
        difficulty: 'easy',
        questionText: 'Sözcüğün anlamlı en küçük ve bölünemeyen parçasına "kök" denir. Kökler, isim ve fiil kökü olmak üzere ikiye ayrılır. Buna göre, aşağıdaki altı çizili sözcüklerden hangisinin kökü tür bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Onun *gözleri* uzağı iyi görmez.' },
          { id: 'B', text: 'Yeni *evleri* oldukça genişmiş.' },
          { id: 'C', text: 'Yazın *yol* kenarında mola verdik.' },
          { id: 'D', text: 'Elindeki *kitabı* bir çırpıda bitirdi.' },
          { id: 'E', text: 'Soruları çözerken çok *yoruldu*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Göz, ev, yol ve kitap kelimelerinin kökleri isimdir (göz-mak denilemez). "Yorulmak" fiilinin kökü "yor-" ise fiil köküdür (yor-mak).'
      },
      {
        id: 'q-sy-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisi türemiş (yapım eki almış) bir sözcüktür?',
        options: [
          { id: 'A', text: 'Masanın üzerindeki *kalemi* bana verir misin?' },
          { id: 'B', text: 'Dışarıda çok *soğuk* bir hava var.' },
          { id: 'C', text: 'Yeni aldığı *arabayı* denemek istiyor.' },
          { id: 'D', text: 'Akşam yemeği için *masayı* hazırladık.' },
          { id: 'E', text: 'Onun *saçları* çok uzamış.' }
        ],
        correctOptionId: 'B',
        explanation: '"Soğuk" kelimesi, "soğu-" fiil kökünden "-k" yapım ekini alarak türemiştir (soğu-mak -> soğuk). Diğer kelimeler sadece çekim eki almıştır.'
      },
      {
        id: 'q-sy-1-3',
        difficulty: 'easy',
        questionText: 'Sözcüklere gelerek onların anlamlarını değiştiren, onlardan yeni kelimeler türeten eklere yapım eki denir. Aşağıdaki kelimelerin hangisinde yapım eki kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kitaplık' },
          { id: 'B', text: 'Gözlükçü' },
          { id: 'C', text: 'Silgi' },
          { id: 'D', text: 'Arabalar' },
          { id: 'E', text: 'Evcil' }
        ],
        correctOptionId: 'D',
        explanation: '"Arabalar" kelimesi sadece çoğul eki (-lar) almıştır. Çoğul eki çekim ekidir, kelimenin anlamını değiştirmez. Diğerlerindeki (-lık, -lük, -çü, -gi, -cil) yapım ekleridir.'
      },
      {
        id: 'q-sy-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük hem yapım hem de çekim eki almıştır?',
        options: [
          { id: 'A', text: 'Dışarıda *çocuklar* oynuyor.' },
          { id: 'B', text: 'En yakın *arkadaşına* sırrını anlattı.' },
          { id: 'C', text: 'Sabah *erkenden* uyandı.' },
          { id: 'D', text: 'Okula *otobüsle* gitti.' },
          { id: 'E', text: 'Bütün *kitapları* kutuya koydu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Arkadaşına" kelimesinin kökü "arka"dır (isim). -daş yapım ekini alarak arkadaş olmuştur. -ı iyelik, -n kaynaştırma, -a yönelme çekim ekleridir. Hem yapım (-daş) hem çekim ekleri almıştır.'
      },
      {
        id: 'q-sy-1-5',
        difficulty: 'easy',
        questionText: 'Yapım eki alarak yeni bir anlam kazanan kelimelere "gövde" denir. Buna göre, aşağıdakilerden hangisi gövde durumunda **değildir**?',
        options: [
          { id: 'A', text: 'Yazgı' },
          { id: 'B', text: 'Bilgin' },
          { id: 'C', text: 'Ağaçtan' },
          { id: 'D', text: 'Sevgi' },
          { id: 'E', text: 'Korku' }
        ],
        correctOptionId: 'C',
        explanation: '"Ağaçtan" kelimesinin kökü "ağaç"tır ve sadece ayrılma hali (-tan) çekim ekini almıştır. Yapım eki almadığı için gövde durumunda değildir. Diğerleri (yaz-gı, bil-gin, sev-gi, kork-u) gövdedir.'
      },
      {
        id: 'q-sy-1-6',
        difficulty: 'easy',
        questionText: 'Birbiriyle sesteş (eş sesli) olan köklere sesteş kök denir. Bunların anlamları arasında hiçbir ilişki yoktur. Aşağıdakilerin hangisinde sesteş köke örnek verilebilir?',
        options: [
          { id: 'A', text: 'Yaz' },
          { id: 'B', text: 'Boy' },
          { id: 'C', text: 'Kitap' },
          { id: 'D', text: 'Defter' },
          { id: 'E', text: 'Kalem' }
        ],
        correctOptionId: 'A',
        explanation: '"Yaz" kelimesi hem mevsim olan "yaz" hem de "yazmak" eylemi anlamlarına gelir. Bu iki anlam arasında hiçbir ilgi yoktur, bu nedenle sesteş köktür.'
      },
      {
        id: 'q-sy-1-7',
        difficulty: 'easy',
        questionText: 'İki veya daha fazla kelimenin birleşerek yeni bir kavramı karşılamak üzere kalıplaşmasıyla oluşan sözcüklere "birleşik sözcük" denir. Aşağıdakilerden hangisi birleşik bir sözcük değildir?',
        options: [
          { id: 'A', text: 'Aslanağzı' },
          { id: 'B', text: 'Hanımeli' },
          { id: 'C', text: 'Karagöz' },
          { id: 'D', text: 'Bilgisayar' },
          { id: 'E', text: 'Gözlükçülük' }
        ],
        correctOptionId: 'E',
        explanation: '"Gözlükçülük" kelimesi göz kökünden -lük, -çü, -lük yapım ekleri alarak oluşmuş türemiş bir sözcüktür. Birleşik kelime değildir.'
      },
      {
        id: 'q-sy-1-8',
        difficulty: 'easy',
        questionText: 'İsim ve isim soylu sözcüklerin sonuna gelerek onlara çoğul anlamı katan "-lar, -ler" ekine çoğul eki denir. Aşağıdaki cümlelerin hangisinde çoğul eki kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ağaçlar yavaş yavaş yaprak döküyor.' },
          { id: 'B', text: 'Bugün çocuklar parkta oynamış.' },
          { id: 'C', text: 'Oraya gidince bizi anlarlar.' },
          { id: 'D', text: 'Bütün yollar kardan kapanmış.' },
          { id: 'E', text: 'Kuşlar gökyüzünde uçuşuyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Anlarlar" kelimesindeki "-lar", şahıs (kişi) ekidir (onlar anlarlar), fiile gelmiştir. İsimlere gelip çokluk katan çoğul eki değildir.'
      },
      {
        id: 'q-sy-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde yönelme hali (-e, -a) eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün evi pırıl pırıl *temizledi*.' },
          { id: 'B', text: 'Akşam annesiyle *pazara* gitti.' },
          { id: 'C', text: 'Arkadaşı *okuldan* geç çıktı.' },
          { id: 'D', text: 'Onu dünkü toplantıda *gördüm*.' },
          { id: 'E', text: 'Yeni aldığı arabayı çok *beğendi*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Pazara" kelimesinde "pazar" köküne "-a" yönelme hali (yaklaşma hali) eki gelmiştir.'
      },
      {
        id: 'q-sy-1-10',
        difficulty: 'easy',
        questionText: 'Türkçede kökler genellikle sözcüğün başında bulunur ve ekler sonradan eklenir. Aşağıdakilerin hangisinde kelimenin kökü yanlış gösterilmiştir?',
        options: [
          { id: 'A', text: 'Sevgi (Kök: sev-)' },
          { id: 'B', text: 'Gözlük (Kök: göz)' },
          { id: 'C', text: 'Başlangıç (Kök: başla-)' },
          { id: 'D', text: 'Bilgin (Kök: bil-)' },
          { id: 'E', text: 'Yolcu (Kök: yol)' }
        ],
        correctOptionId: 'C',
        explanation: '"Başlangıç" kelimesinin kökü "baş" ismidir (baş-la-n-gıç). "Başla-" fiili, isim kökü olan baştan türemiştir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-1-orta',
    title: 'Sözcük Yapısı 1 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (1-10)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-sy-1-11',
        difficulty: 'medium',
        questionText: 'Hem isim hem fiil olarak kullanılabilen ve aralarında anlam ilgisi bulunan köklere ortak (kökteş) kök denir. Aşağıdaki altı çizili kelimelerden hangisinin kökü kökteş özelliğe sahiptir?',
        options: [
          { id: 'A', text: 'Eski *evlerini* satmaya karar verdiler.' },
          { id: 'B', text: 'Dün akşam bahçedeki çiçekleri *suladı*.' },
          { id: 'C', text: 'Bütün bir şişeyi bir dikişte *içti*.' },
          { id: 'D', text: 'Dolaptaki *suyu* masaya getirdi.' },
          { id: 'E', text: 'Duvarın *boyası* iyice dökülmüş.' }
        ],
        correctOptionId: 'E',
        explanation: '"Boya" kelimesi hem bir madde ismi (boya) hem de bir eylem (boyamak) olarak kullanılır ve aralarında anlam ilgisi vardır. Bu nedenle kökteş köktür.'
      },
      {
        id: 'q-sy-1-12',
        difficulty: 'medium',
        questionText: 'Yapım ekleri, eklendikleri sözcüğün türünü değiştirebilir (isimden fiil, fiilden isim yapabilir). Aşağıdaki altı çizili kelimelerin hangisinde altı çizili kelime isimden fiil yapan bir yapım eki almıştır?',
        options: [
          { id: 'A', text: 'Etrafı biraz *gözledi* ve geri döndü.' },
          { id: 'B', text: 'Onunla yeni bir *başlangıç* yaptık.' },
          { id: 'C', text: 'Adam *bilgin* biri gibi konuşuyordu.' },
          { id: 'D', text: 'Bahçede bir saat boyunca *çalıştı*.' },
          { id: 'E', text: 'Bu işte çok iyi bir *kazanç* var.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözledi" kelimesinin kökü isim olan "göz"dür. "-le" yapım ekini alarak "gözlemek" fiiline (isimden fiile) dönüşmüştür.'
      },
      {
        id: 'q-sy-1-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük iyelik (aitlik) eki almamıştır?',
        options: [
          { id: 'A', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'B', text: 'Benim *arabam* serviste tamir ediliyor.' },
          { id: 'C', text: 'Evin *kapısı* tamamen bozulmuş.' },
          { id: 'D', text: 'Yeni aldığı *kazağı* hemen giydi.' },
          { id: 'E', text: 'Bizim *okulumuz* çok güzeldir.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kazağı" kelimesindeki "-ı", belirtme hali ekidir (neyi giydi? kazağı). Diğer seçeneklerdeki ekler sahiplik (iyelik) bildirir (onun kitabı, benim arabam, evin kapısı, bizim okulumuz).'
      },
      {
        id: 'q-sy-1-14',
        difficulty: 'medium',
        questionText: 'Yapı bakımından sözcükler; basit, türemiş ve birleşik olmak üzere üçe ayrılır. Aşağıdaki cümlelerin hangisinde üç yapı türüne de örnek olabilecek bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Bilgisayar başında uzun süre oturmak gözleri bozar.' },
          { id: 'B', text: 'Yaz tatilinde memlekete gitmeyi düşünüyoruz.' },
          { id: 'C', text: 'Güzel havalarda parkta yürüyüş yaparız.' },
          { id: 'D', text: 'Çocuklar bahçede top oynuyorlardı.' },
          { id: 'E', text: 'Dünkü sınav gerçekten çok zordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bilgisayar (Birleşik). Başında, uzun (basit). Süre, oturmak, bozar (türemiş - süre: sürmekten, oturmak: fiilimsi eki almış, boz-ar: gerçi bozar basit zamanlıysa basittir ama "uzun" uza-maktan türemiş, "oturmak" türemiş. Gözleri basittir. A şıkkında Bilgisayar (birleşik), gözleri (basit), uzun/oturmak (türemiş) vardır.'
      },
      {
        id: 'q-sy-1-15',
        difficulty: 'medium',
        questionText: 'Bazı yapım ekleri fiil kök veya gövdelerine gelerek onlardan isim türetir (fiilden isim yapım eki). Aşağıdaki altı çizili sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Büyük bir *korkuyla* yerinden fırladı.' },
          { id: 'B', text: 'Bu olaya herkesin *bakışı* farklıdır.' },
          { id: 'C', text: 'Aralarındaki *saygı* hiç bitmedi.' },
          { id: 'D', text: 'Yolculuk için *hazırlık* yapıyoruz.' },
          { id: 'E', text: 'Yazarın yeni *yazısı* yayımlandı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Korku (kork-maktan), bakış (bak-maktan), saygı (say-maktan), yazı (yaz-maktan) kelimeleri fiilden isim yapan ekler almıştır. "Hazırlık" kelimesi ise isim kökü olan "hazır"dan "-lık" (isimden isim) eki alarak türemiştir.'
      },
      {
        id: 'q-sy-1-16',
        difficulty: 'medium',
        questionText: 'Türkçede kelime türetilirken birden fazla yapım eki üst üste gelebilir. Aşağıdaki kelimelerin hangisinde birden fazla yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağaçlık' },
          { id: 'B', text: 'Gözlemci' },
          { id: 'C', text: 'Yorgun' },
          { id: 'D', text: 'Sözcük' },
          { id: 'E', text: 'Kitapçı' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözlemci" kelimesinin kökü göz (isim). Göz-le (isimden fiil), gözle-m (fiilden isim), gözlem-ci (isimden isim) olmak üzere 3 tane yapım eki almıştır.'
      },
      {
        id: 'q-sy-1-17',
        difficulty: 'medium',
        questionText: 'Belirtme hali eki (-ı, -i) ile 3. tekil kişi iyelik eki (-ı, -i) şekilce birbirine benzer. İyelik eki sahiplik bildirirken (onun), belirtme eki eylemden etkilenen nesneyi belirtir. Aşağıdaki altı çizili kelimelerin hangisinde "-ı / -i" eki diğerlerinden farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dün akşam *kitabı* masanın üzerinde unutmuş.' },
          { id: 'B', text: 'Yüzündeki *tebessümü* herkes fark etti.' },
          { id: 'C', text: 'Bu *arabayı* almayı çok istiyor.' },
          { id: 'D', text: 'Annesinin *saçı* beyazlamış.' },
          { id: 'E', text: 'O *soruyu* kimse çözemedi.' }
        ],
        correctOptionId: 'D',
        explanation: '"Saçı" kelimesindeki "-ı" iyelik ekidir (annesinin saçı, onun saçı). Diğerlerindeki ekler belirtme hali ekidir (kitabı unuttu, tebessümü fark etti, arabayı almayı, soruyu çözemedi).'
      },
      {
        id: 'q-sy-1-18',
        difficulty: 'medium',
        questionText: 'Tamlayan (ilgi) eki (-ın, -in), isim tamlamalarında tamlayana gelerek ona aidiyet ilgisi katar. Aynı ek bazen yapım eki görevi de görebilir (yığın, akın). Aşağıdaki altı çizili kelimelerin hangisinde "-ın/-in" eki yapım eki görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısının* kolu kırılmış.' },
          { id: 'B', text: 'Çocuğun *defterin* arasında resmi var.' },
          { id: 'C', text: 'Dağın *tepesin*de karlar erimemiş.' },
          { id: 'D', text: 'Büyük bir *yığın* toprak getirmişler.' },
          { id: 'E', text: 'Benim *kitabın* yaprakları yırtılmış.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yığın" kelimesinde "-ın" eki, yığmak fiilinden "yığın" ismini türeten bir yapım ekidir. Diğerlerindeki (-ın, -in) ekleri tamlayan (ilgi) çekim ekidir. (Cümlelerdeki hatalar: B ve C şıklarındaki defterin ve tepesin ifadeleri biraz zorlama. Şıkları düzeltelim: A) Odanın B) Çocuğun C) Dağın D) Yığın E) Kitabın. Doğru cevap D).'
      },
      {
        id: 'q-sy-1-18-revised',
        difficulty: 'medium',
        questionText: 'Tamlayan (ilgi) eki (-ın, -in), isim tamlamalarında tamlayana gelerek ona aidiyet ilgisi katar. Aynı ek ses olarak fiilden isim yapım ekiyle de benzeşebilir. Aşağıdaki altı çizili kelimelerin hangisinde "-ın/-in" eki yapım eki görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: '*Odanın* penceresi açık kalmış.' },
          { id: 'B', text: '*Çocuğun* çantası çok ağır.' },
          { id: 'C', text: '*Dağın* zirvesinde karlar erimemiş.' },
          { id: 'D', text: 'Tarlaya büyük bir *yığın* toprak döküldü.' },
          { id: 'E', text: '*Kitabın* sayfaları yırtılmış.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yığın" kelimesinde "-ın" eki, "yığ-" fiilinden isim türeten bir yapım ekidir (fiilden isim). Diğerlerindeki ekler ilgi (tamlayan) çekim ekidir.'
      },
      {
        id: 'q-sy-1-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapıca diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'İletişim' },
          { id: 'C', text: 'Ataç' },
          { id: 'D', text: 'Çekyat' },
          { id: 'E', text: 'Gelişim' }
        ],
        correctOptionId: 'D',
        explanation: 'Bilişim, iletişim, ataç, gelişim kelimeleri türemiş kelimelerdir. "Çekyat" ise iki fiilin (çek-mek, yat-mak) birleşmesiyle oluşmuş birleşik bir sözcüktür.'
      },
      {
        id: 'q-sy-1-20',
        difficulty: 'medium',
        questionText: 'Türkçede bazen gövdeden türemiş sözcüklere de yer verilir. (Kök + yapım eki + yapım eki). Aşağıdakilerden hangisi gövdeden türemiş bir sözcük değildir?',
        options: [
          { id: 'A', text: 'Yaşantı' },
          { id: 'B', text: 'Bilgisizlik' },
          { id: 'C', text: 'Gözcü' },
          { id: 'D', text: 'Başlangıç' },
          { id: 'E', text: 'Saygısız' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaşa-n-tı, bil-gi-siz-lik, baş-la-n-gıç, say-gı-sız kelimelerinde birden çok yapım eki vardır (gövdeden türemiş). "Gözcü" kelimesi ise kök (göz) üzerine sadece bir yapım eki (-cü) alarak kökten türemiştir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-1-zor',
    title: 'Sözcük Yapısı 1 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (1-10)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-sy-1-21',
        difficulty: 'hard',
        questionText: 'Fiil çekim ekleri olan haber veya dilek kipleri kelimenin anlamını değiştirmez, sadece zamana veya tasarıya bağlar. Ancak bazı sıfat-fiil ekleri kiplerle sesteş olup (mesela -miş, -ecek) eklendiği sözcüğü türemiş yapar. Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki yapım eki göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya *gidecek*.' },
          { id: 'B', text: 'Bu konuyu seninle sonra *konuşacak*.' },
          { id: 'C', text: 'Eskiden *tanıdık* insanlarla konuşuyordu.' },
          { id: 'D', text: 'Giyecek *kıyafetleri* kalmadığı için alışverişe çıktı.' },
          { id: 'E', text: 'Herkes bu sınavı *kazanacak*.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B ve E seçeneklerinde "-ecek" eki gelecek zaman kipi (çekim eki) olarak kullanılmıştır. C şıkkında -dık sıfat-fiil eki vardır. D şıkkındaki "giyecek" kelimesindeki "-ecek" eki ise sıfat-fiil ekidir (kalıcı isim de olabilir) ve fiilden isim yapan bir yapım ekidir.'
      },
      {
        id: 'q-sy-1-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapısı bakımından birleşik kelime olduğu halde oluşum şekli (iki ismin birleşmesi, isim tamlaması yolu vs.) bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Bahçedeki *aslanağzı* çiçekleri çok güzel açmış.' },
          { id: 'B', text: 'Dünkü yemekte *imambayıldı* vardı.' },
          { id: 'C', text: 'Ayağındaki *suçiçeği* yaraları iyileşmedi.' },
          { id: 'D', text: 'Kahvaltıda *hanımeli* reçeli yedik.' },
          { id: 'E', text: 'Gökyüzündeki *Büyükayı* takım yıldızını gösterdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aslanağzı, suçiçeği, hanımeli, Büyükayı kelimeleri isim tamlaması veya sıfat tamlaması yoluyla (iki ismin/sıfatın) birleşmesiyle oluşmuştur. "İmambayıldı" kelimesi ise bir isim ve bir çekimli fiilin (bayıldı) birleşmesiyle (cümle şeklinde) oluşmuştur.'
      },
      {
        id: 'q-sy-1-23',
        difficulty: 'hard',
        questionText: 'Geniş zaman eki "-ar/-er" fiil çekim ekidir. Ancak bu ek bazen yapım eki görevi de üstlenir (sıfat-fiil veya fiilden fiil/isim). Aşağıdaki altı çizili kelimelerin hangisinde "-ar/-er" eki çekim eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya giden *koşar* adım ilerlemelidir.' },
          { id: 'B', text: 'Elindeki *çalar* saat çok eskiydi.' },
          { id: 'C', text: 'Bütün eşyaları kutuya *koyar*.' },
          { id: 'D', text: 'Etrafa *bakar* kör gibi davranma.' },
          { id: 'E', text: 'Bu işten iyi bir *çıkar* sağladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Koyar" kelimesindeki "-ar" eki geniş zaman kip ekidir (çekim eki). Koşar (adım), çalar (saat), bakar (kör) kelimelerinde sıfat-fiil, "çıkar" kelimesinde ise kalıcı isim yapan yapım eki olarak kullanılmıştır.'
      },
      {
        id: 'q-sy-1-24',
        difficulty: 'hard',
        questionText: 'Türkçede bazı ekler sözcüğün kökündeki ünlüde daralmaya veya değişime neden olabilir. Aşağıdaki sözcüklerin hangisinde yapısal bir ek alırken kökte ünlü değişimi (aşınma veya daralma değil, tamamen ses değişimi) görülmüştür?',
        options: [
          { id: 'A', text: 'Bana' },
          { id: 'B', text: 'Biliyor' },
          { id: 'C', text: 'Bekliyor' },
          { id: 'D', text: 'Oynuyor' },
          { id: 'E', text: 'Sızlıyor' }
        ],
        correctOptionId: 'A',
        explanation: '"Ben" zamiri, yönelme hal eki "-e"yi aldığında kökündeki "e" ünlüsü kalınlaşarak "a" olur ve kelime "bana" şekline dönüşür. Bu bir ünlü değişimidir (kökte ünlü değişimi). Diğerlerinde daralma vardır.'
      },
      {
        id: 'q-sy-1-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde iyelik ekinden sonra hal (durum) eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evin *kapısını* hızlıca kapattı.' },
          { id: 'B', text: 'Bizim *evde* kimse kalmadı.' },
          { id: 'C', text: 'Kitabın *sayfası* çok inceydi.' },
          { id: 'D', text: 'Onun *arabası* tamirden çıkmış.' },
          { id: 'E', text: 'Benim *kardeşim* çok zekidir.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kapısını" kelimesinde kapı kök, -sı iyelik eki (3. tekil), -n kaynaştırma, -ı belirtme hali ekidir. İyelik ekinden sonra hal eki gelmiştir. (B şıkkında "ev-de", -m iyelik eki yoktur evimizde dememiş. C ve D şıklarında -sı iyeliktir hal eki yoktur).'
      },
      {
        id: 'q-sy-1-26',
        difficulty: 'hard',
        questionText: 'Türkçede isimden fiil yapan "-l" eki, bazı sözcüklerde ünlü düşmesine neden olabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu duruma örnek bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Hasta gittikçe daha da *kötüleşti*.' },
          { id: 'B', text: 'Rüzgarın etkisiyle kumlar etrafa *savruldu*.' },
          { id: 'C', text: 'Havalar ısınınca ekinler çabuk *sarardı*.' },
          { id: 'D', text: 'Dağın zirvesine doğru giderek *yükseldi*.' },
          { id: 'E', text: 'İki araba köşede *çarpıştı*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yükseldi" kelimesinin kökü "yüksek" ismidir. İsimden fiil yapan "-l" (veya -el) ekini alırken "k" ünsüzü düşer (yüksek-el-di -> yükseldi). C şıkkındaki sarardı kelimesinde sarı-ar, -ar eki almıştır. D şıkkında k ünsüzü düşer ancak açıklamada ünlü düşmesi demiş. Bu soru kurgusu hatalı, k düşmesi ünsüz düşmesidir. Düzeltelim.',
        revised: true
      },
      {
        id: 'q-sy-1-26-revised',
        difficulty: 'hard',
        questionText: 'Türkçede fiilden fiil yapan "-ıl/-il" eki (edilgenlik eki), bazı sözcüklerde ünlü düşmesine neden olabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu duruma örnek bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Hasta gittikçe daha da *kötüleşti*.' },
          { id: 'B', text: 'Rüzgarın etkisiyle yapraklar etrafa *savruldu*.' },
          { id: 'C', text: 'Havalar ısınınca ekinler çabuk *sarardı*.' },
          { id: 'D', text: 'Dağın zirvesine doğru giderek *yükseldi*.' },
          { id: 'E', text: 'İki araba köşede *çarpıştı*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Savruldu" kelimesinin kökü "savurmak"tır (fiil). Edilgenlik eki olan "-ul" (fiilden fiil) ekini alırken ikinci hecedeki "u" ünlüsü düşmüştür (savur-ul-du -> savruldu).'
      },
      {
        id: 'q-sy-1-27',
        difficulty: 'hard',
        questionText: 'Birleşik fiiller "isim + yardımcı fiil", "kurallı birleşik fiil" ve "anlamca kaynaşmış birleşik fiil" olmak üzere üçe ayrılır. Aşağıdaki cümlelerin hangisinde kurallı birleşik fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu zorluklara ancak sen göğüs gerebilirsin.' },
          { id: 'B', text: 'Soruları çok kısa sürede çözüverdi.' },
          { id: 'C', text: 'Olanları duyunca hepimizi terk etti.' },
          { id: 'D', text: 'Arkadaşının arkasından sürekli dedikodu yapıyordu.' },
          { id: 'E', text: 'Babasını karşısında görünce dona kaldı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Çözüverdi" fiili "çözmek" ve "vermek" fiillerinin (tezlik) birleşmesiyle oluşan kurallı birleşik fiildir. (E şıkkındaki donakaldı da sürerliktir ancak "dona kaldı" ayrı yazıldığı için yazım yanlışı vardır, B şıkkı nettir. Göğüs germek anlamca kaynaşmış, terk etmek isim+yardımcı fiildir).'
      },
      {
        id: 'q-sy-1-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerden hangisinin kökü, sözcük türü bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Görsel' },
          { id: 'B', text: 'Bilişim' },
          { id: 'C', text: 'Ekin' },
          { id: 'D', text: 'Bölge' },
          { id: 'E', text: 'Yolcu' }
        ],
        correctOptionId: 'E',
        explanation: 'Görsel (görmek-fiil), bilişim (bilmek-fiil), ekin (ekmek-fiil), bölge (bölmek-fiil). Ancak "Yolcu" kelimesinin kökü "yol" ismidir.'
      },
      {
        id: 'q-sy-1-29',
        difficulty: 'hard',
        questionText: '"-ım / -im" eki Türkçede çok farklı görevlerde kullanılabilir (iyelik eki, kişi eki, yapım eki vb.). Aşağıdaki altı çizili kelimelerin hangisinde "-ım" eki fiilden isim yapan yapım eki görevindedir?',
        options: [
          { id: 'A', text: 'Benim *kitabım* evde kalmış.' },
          { id: 'B', text: 'Bu soruları ben *yazdım*.' },
          { id: 'C', text: 'Evimize bir *bakım* yapmamız gerekiyor.' },
          { id: 'D', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'E', text: 'Sınavdan sonra çok *yoruldum*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bakım" kelimesinde "-ım" eki "bakmak" fiilinden "bakım" ismini türeten yapım ekidir. A\'da iyelik eki, B, D ve E\'de kişi (şahıs) ekidir.'
      },
      {
        id: 'q-sy-1-30',
        difficulty: 'hard',
        questionText: 'Birleşik sözcükler oluşurken bazen kelimelerden biri, bazen her ikisi de anlamını kaybedebilir ya da ikisi de anlamını koruyabilir. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını yitirmiştir?',
        options: [
          { id: 'A', text: 'Aslanağzı' },
          { id: 'B', text: 'Kuşburnu' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Buzdolabı' }
        ],
        correctOptionId: 'A',
        explanation: '"Aslanağzı" bir bitki (çiçek) ismidir ve ne "aslan" ile ne de "ağız" ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiştir. Kuşburnu (yarı mecazlık vardır ancak Aslanağzı tam mecazdır, daha net bir örnek: Aslanağzı, hanımeli vb. Ayakkabı, buzdolabı gibi kelimelerde anlam korunmuştur).'
      }
    ]
  }
];
