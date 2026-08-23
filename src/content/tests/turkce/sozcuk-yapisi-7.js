export default [
  {
    id: 'test-sozcuk-yapisi-7-kolay',
    title: 'Sözcük Yapısı 7 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-sy-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinin kökü tür bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Dağdaki bütün *ağaçları* kestiler.' },
          { id: 'B', text: 'Eskiden bu mahallede güzel *evler* vardı.' },
          { id: 'C', text: 'Bahçedeki kurumuş *otları* temizledi.' },
          { id: 'D', text: 'Son otobüsü de maalesef *kaçırdı*.' },
          { id: 'E', text: 'Bardağındaki *suyu* yavaşça içti.' }
        ],
        correctOptionId: 'D',
        explanation: 'Ağaç, ev, ot ve su kelimelerinin kökleri isimdir. "Kaçırdı" kelimesinin kökü "kaç-" ise fiil köküdür (kaç-mak).'
      },
      {
        id: 'q-sy-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi hem yapım hem de çekim eki almıştır?',
        options: [
          { id: 'A', text: 'Okullar' },
          { id: 'B', text: 'Evde' },
          { id: 'C', text: 'Bilgiler' },
          { id: 'D', text: 'Geldi' },
          { id: 'E', text: 'Masayı' }
        ],
        correctOptionId: 'C',
        explanation: '"Bilgiler" kelimesi, "bil-" fiil kökünden "-gi" yapım ekini alarak isim olmuş (bil-gi), ardından "-ler" çoğul (çekim) ekini almıştır. Hem yapım hem çekim eki almıştır.'
      },
      {
        id: 'q-sy-7-3',
        difficulty: 'easy',
        questionText: 'Hal (durum) ekleri isimlere gelerek ismin cümlede yüklendiği görevi belirtir. Aşağıdaki altı çizili kelimelerden hangisinde ismin yönelme hal eki (-e, -a) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni aldığı *kitabı* okuyor.' },
          { id: 'B', text: 'Yarın annesiyle *pazara* gidecek.' },
          { id: 'C', text: 'Okuldan gelince *evde* dinlendi.' },
          { id: 'D', text: 'Bütün *eşyaları* kutuya koydu.' },
          { id: 'E', text: 'Dünkü sınavdan çok *soru* çözdü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Pazara" kelimesindeki "-a" eki, ismin yönelme (yaklaşma) hal ekidir (Nereye? Pazara).'
      },
      {
        id: 'q-sy-7-4',
        difficulty: 'easy',
        questionText: 'Bir varlığın kime ait olduğunu gösteren eklere iyelik (aitlik) eki denir. Aşağıdaki altı çizili sözcüklerin hangisinde iyelik eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benim *arabam* çok hızlı gider.' },
          { id: 'B', text: 'Onu dünkü toplantıda *gördüm*.' },
          { id: 'C', text: 'Herkes çok fazla *çalıştı*.' },
          { id: 'D', text: 'Bu akşam sinemaya *gideceğim*.' },
          { id: 'E', text: 'Soruların hepsini ben *çözdüm*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Arabam" kelimesindeki "-m" eki, arabanın kime ait olduğunu (benim) gösteren iyelik ekidir. Diğerlerindeki (-m, -im) ekleri fiile gelmiş kişi ekleridir.'
      },
      {
        id: 'q-sy-7-5',
        difficulty: 'easy',
        questionText: 'Yapım eki alarak yeni bir anlam kazanan ve türü değişebilen kelimelere "türemiş kelime" denir. Aşağıdakilerden hangisi türemiş bir kelime değildir?',
        options: [
          { id: 'A', text: 'Gözlük' },
          { id: 'B', text: 'Kitaplık' },
          { id: 'C', text: 'Sözcük' },
          { id: 'D', text: 'Masalar' },
          { id: 'E', text: 'Simitçi' }
        ],
        correctOptionId: 'D',
        explanation: '"Masalar" kelimesi sadece çoğul eki (-lar) almıştır ve çoğul eki çekim ekidir. Kelime yapım eki almadığı için basit yapılıdır.'
      },
      {
        id: 'q-sy-7-6',
        difficulty: 'easy',
        questionText: 'En az iki kelimenin yeni bir kavramı karşılamak üzere bir araya gelmesiyle oluşan kelimelere birleşik kelime denir. Aşağıdaki kelimelerden hangisi yapıca birleşik kelimedir?',
        options: [
          { id: 'A', text: 'Denizaltı' },
          { id: 'B', text: 'Aydınlık' },
          { id: 'C', text: 'Karanlık' },
          { id: 'D', text: 'Evsizler' },
          { id: 'E', text: 'Gözlemci' }
        ],
        correctOptionId: 'A',
        explanation: '"Denizaltı" kelimesi "deniz" ve "alt" kelimelerinin birleşmesiyle oluşmuştur (birleşik kelime). Diğerleri türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-7-7',
        difficulty: 'easy',
        questionText: 'Yazılışı ve okunuşu aynı ancak anlamları tamamen farklı olan, aralarında anlam bağı bulunmayan köklere sesteş kök denir. Aşağıdakilerin hangisinin kökü sesteş kök olma özelliği gösterir?',
        options: [
          { id: 'A', text: 'Boya' },
          { id: 'B', text: 'Yüz' },
          { id: 'C', text: 'Tat' },
          { id: 'D', text: 'Kitap' },
          { id: 'E', text: 'Kalem' }
        ],
        correctOptionId: 'B',
        explanation: '"Yüz" kelimesi hem sayı, hem surat, hem de yüzmek fiili anlamlarına gelir ve bu anlamlar arasında bağ yoktur (sesteştir). Boya ve tat kökteştir.'
      },
      {
        id: 'q-sy-7-8',
        difficulty: 'easy',
        questionText: 'İsimlere gelerek çoğul anlamı katan "-lar, -ler" eki çekim ekidir. Aşağıdaki altı çizili sözcüklerden hangisinde çoğul eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya gidince bizi *arayacaklar*.' },
          { id: 'B', text: 'Haberi alınca çok *sevindiler*.' },
          { id: 'C', text: 'Dışarıdaki *kediler* çok acıkmış.' },
          { id: 'D', text: 'Bütün gece hiç uyumadan *çalıştılar*.' },
          { id: 'E', text: 'Hemen evlerine *döndüler*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kediler" kelimesinde "-ler" eki isme geldiği için çoğul ekidir. Diğerlerindeki ekler fiillere gelerek işi kimin yaptığını (3. çoğul şahıs) bildirir.'
      },
      {
        id: 'q-sy-7-9',
        difficulty: 'easy',
        questionText: 'İsmin ayrılma (çıkma) hali, eylemin bir yerden ayrıldığını veya başladığını gösterir. Aşağıdaki altı çizili kelimelerin hangisinde ayrılma hali eki (-den/-dan) vardır?',
        options: [
          { id: 'A', text: 'Sabahları erken *kalkar*.' },
          { id: 'B', text: 'Bütün *kitapları* masaya koydu.' },
          { id: 'C', text: 'Bu sabah *evden* çok erken çıktı.' },
          { id: 'D', text: 'Yeni arabasını *sokakta* yıkadı.' },
          { id: 'E', text: 'Dün annesiyle *pazara* gitti.' }
        ],
        correctOptionId: 'C',
        explanation: '"Evden" kelimesindeki "-den" eki, ismin ayrılma (çıkma) hal ekidir.'
      },
      {
        id: 'q-sy-7-10',
        difficulty: 'easy',
        questionText: 'Türkçede isimden isim yapan ekler, eklendiği ismin anlamını değiştirerek yeni bir isim türetir. Aşağıdaki eklerden hangisi bu görevi üstlenir?',
        options: [
          { id: 'A', text: '-lık' },
          { id: 'B', text: '-yor' },
          { id: 'C', text: '-acak' },
          { id: 'D', text: '-dı' },
          { id: 'E', text: '-lar' }
        ],
        correctOptionId: 'A',
        explanation: '"-lık" eki isimden isim yapan bir yapım ekidir (kitap-lık, göz-lük vb.). Diğerleri çekim ekleridir (-yor, -acak, -dı kip ekleri; -lar çoğul ekidir).'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-7-orta',
    title: 'Sözcük Yapısı 7 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-sy-7-11',
        difficulty: 'medium',
        questionText: 'Hem isim hem fiil olarak kullanılabilen ve aralarında anlam ilgisi bulunan köklere ortak (kökteş) kök denir. Aşağıdaki altı çizili kelimelerin hangisinin kökü kökteş köktür?',
        options: [
          { id: 'A', text: 'Bu eski evlerin *boyası* iyice dökülmüş.' },
          { id: 'B', text: 'Sıcak havalarda soğuk *su* içmek zararlıdır.' },
          { id: 'C', text: 'Bahçedeki *güller* yeni açmaya başlamış.' },
          { id: 'D', text: 'Yüzündeki kırışıklıklar *yaşını* ele veriyordu.' },
          { id: 'E', text: 'Geniş bir *yol* bizi kasabaya ulaştırdı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Boya" kelimesi hem bir madde ismi (boya) hem de bir eylem (boyamak) olarak kullanılır ve aralarında anlam bağı vardır. Su sadece isimdir, gül, yaş ve yol kelimeleri ise sesteştir.'
      },
      {
        id: 'q-sy-7-12',
        difficulty: 'medium',
        questionText: 'Yapım ekleri eklendiği sözcüğün türünü değiştirebilir (isimden fiil vb.). Aşağıdaki altı çizili kelimelerin hangisinde altı çizili kelime isimden fiil yapan bir yapım eki almıştır?',
        options: [
          { id: 'A', text: 'Adam *bilgin* biri gibi konuşuyordu.' },
          { id: 'B', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'C', text: 'Onunla yeni bir *başlangıç* yaptık.' },
          { id: 'D', text: 'Bahçede bir saat boyunca *çalıştı*.' },
          { id: 'E', text: 'Bu işte çok iyi bir *kazanç* var.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kötüleşti" kelimesinin kökü isim olan "kötü"dür. "-leş" yapım ekini alarak "kötüleşmek" fiiline dönüşmüştür (isimden fiil). (Bilgin, kazanç, başlangıç fiilden isimdir).'
      },
      {
        id: 'q-sy-7-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük iyelik (aitlik) eki almamıştır?',
        options: [
          { id: 'A', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'B', text: 'Benim *arabam* serviste tamir ediliyor.' },
          { id: 'C', text: 'Evin *kapısı* tamamen bozulmuş.' },
          { id: 'D', text: 'Bizim *okulumuz* çok güzeldir.' },
          { id: 'E', text: 'Yeni aldığı *kazağı* hemen giydi.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kazağı" kelimesindeki "-ı" belirtme hali ekidir (Neyi giydi? Kazağı). Diğer seçeneklerdeki ekler sahiplik (iyelik) bildirir (onun kitabı, benim arabam, evin kapısı, bizim okulumuz).'
      },
      {
        id: 'q-sy-7-14',
        difficulty: 'medium',
        questionText: 'Yapı bakımından kelimeler basit, türemiş ve birleşik olarak üçe ayrılır. Aşağıdaki cümlelerin hangisinde yapıca basit bir kelime yoktur?',
        options: [
          { id: 'A', text: 'Bilgisayarında birçok oyun vardı.' },
          { id: 'B', text: 'Yeni gözlüğünü okulda unutmuş.' },
          { id: 'C', text: 'Büyük ağaçlar hızla devriliyordu.' },
          { id: 'D', text: 'Geleneksel törenler sessizce başladı.' },
          { id: 'E', text: 'Yolculuk boyunca kitap okudu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D şıkkında: Geleneksel (gelmek->gelenek->geleneksel: türemiş), törenler (töre->tören: türemiş), sessizce (ses->sessiz->sessizce: türemiş), başladı (baş->başla: türemiş). Tüm kelimeler türemiştir, basit kelime yoktur.'
      },
      {
        id: 'q-sy-7-15',
        difficulty: 'medium',
        questionText: 'Fiil kök veya gövdelerinden isim türeten eklere fiilden isim yapım eki denir. Aşağıdaki altı çizili sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Büyük bir *korkuyla* yerinden fırladı.' },
          { id: 'B', text: 'Bu olaya herkesin *bakışı* farklıdır.' },
          { id: 'C', text: 'Aralarındaki *saygı* hiç bitmedi.' },
          { id: 'D', text: 'Yolculuk için büyük *hazırlık* yapıyoruz.' },
          { id: 'E', text: 'Yazarın yeni *yazısı* yayımlandı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Korku (kork-maktan), bakış (bak-maktan), saygı (say-maktan), yazı (yaz-maktan) kelimeleri fiilden isim yapan ekler almıştır. "Hazırlık" kelimesi ise isim kökü olan "hazır"dan "-lık" (isimden isim) eki alarak türemiştir.'
      },
      {
        id: 'q-sy-7-16',
        difficulty: 'medium',
        questionText: 'Köküne birden fazla yapım eki almış kelimelere "gövdeden türemiş kelime" denir. Aşağıdaki kelimelerin hangisinde birden fazla yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağaçlık' },
          { id: 'B', text: 'Gözlemci' },
          { id: 'C', text: 'Yorgun' },
          { id: 'D', text: 'Sözcük' },
          { id: 'E', text: 'Kitapçı' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözlemci" kelimesinin kökü göz (isim). Göz-le (isimden fiil), gözle-m (fiilden isim), gözlem-ci (isimden isim) olmak üzere 3 tane yapım eki almıştır. Diğerleri tek yapım eki almıştır.'
      },
      {
        id: 'q-sy-7-17',
        difficulty: 'medium',
        questionText: 'Belirtme hali eki (-ı, -i) ile 3. tekil kişi iyelik eki (-ı, -i) şekilce birbirine benzer. İyelik eki sahiplik bildirirken, belirtme eki eylemden etkilenen nesneyi belirtir. Aşağıdaki altı çizili kelimelerin hangisinde "-ı / -i" eki diğerlerinden farklı bir görevde kullanılmıştır?',
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
        id: 'q-sy-7-18',
        difficulty: 'medium',
        questionText: 'Tamlayan (ilgi) eki (-ın, -in), isim tamlamalarında tamlayana gelerek ona aidiyet ilgisi katar. Aynı ek bazen yapım eki görevi de görebilir (yığın, akın). Aşağıdaki altı çizili kelimelerin hangisinde "-ın/-in" eki yapım eki görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısının* kolu kırılmış.' },
          { id: 'B', text: 'Çocuğun *defterin* arasında resmi var. (Hatalı: Çocuğun defteri)' },
          { id: 'C', text: 'Dağın *tepesinde* karlar erimemiş.' },
          { id: 'D', text: 'Tarlaya büyük bir *yığın* toprak döküldü.' },
          { id: 'E', text: 'Benim *kitabın* yaprakları yırtılmış.' }
        ],
        revised: true
      },
      {
        id: 'q-sy-7-18-revised',
        difficulty: 'medium',
        questionText: 'Tamlayan (ilgi) eki (-ın, -in), isim tamlamalarında tamlayana gelerek aidiyet ilgisi katar. Aynı ek şekilce fiilden isim yapan ekle benzerlik gösterebilir. Aşağıdaki altı çizili kelimelerin hangisinde "-ın/-in" eki yapım eki görevinde kullanılmıştır?',
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
        id: 'q-sy-7-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapısı bakımından birleşik kelime değildir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Çekyat' },
          { id: 'C', text: 'Vazgeçmek' },
          { id: 'D', text: 'Kızılırmak' },
          { id: 'E', text: 'Gecekondu' }
        ],
        correctOptionId: 'A',
        explanation: '"Bilişim" kelimesi "bil-mek" fiilinden türemiş (bil-iş-im) yapıca türemiş bir sözcüktür. Çekyat, vazgeçmek, Kızılırmak ve gecekondu birleşik kelimelerdir.'
      },
      {
        id: 'q-sy-7-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki kip eki (gelecek zaman eki) olarak **kullanılmamıştır**?',
        options: [
          { id: 'A', text: 'Sokaktaki *yakacakları* depoya taşıdılar.' },
          { id: 'B', text: 'Yarın annesiyle memlekete *gidecek*.' },
          { id: 'C', text: 'Herkes bu sorunun cevabını *öğrenecek*.' },
          { id: 'D', text: 'Bizimle gelmekten vazgeçtiğini *söyleyecek*.' },
          { id: 'E', text: 'Bu konuda bizimle *görüşecek*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yakacakları" kelimesindeki "-acak" eki, "yakmak" fiilinden kalıcı bir isim (yakacak-odun/kömür vb.) türeten yapım ekidir. Diğerlerindeki ekler gelecek zaman kip ekleridir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-7-zor',
    title: 'Sözcük Yapısı 7 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-sy-7-21',
        difficulty: 'hard',
        questionText: 'Sıfat-fiil ekleri eklendiği fiili sıfat veya kalıcı isim yaparak türemiş sözcük oluştururken, haber kipleri sadece zaman anlamı katan çekim ekleridir. Buna göre, aşağıdaki altı çizili kelimelerin hangisinde "-ar/-er" eki yapım eki göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, her sabah düzenli olarak *koşar*.' },
          { id: 'B', text: 'Bütün eşyaları kendi başına kutuya *koyar*.' },
          { id: 'C', text: 'Elindeki *çalar* saat çok gürültülüydü.' },
          { id: 'D', text: 'Hafta sonları balık tutmaya *gider*.' },
          { id: 'E', text: 'Bu zor soruları sadece o *çözer*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çalar saat" tamlamasındaki "çalar" kelimesi "-ar" sıfat-fiil ekini almış ve fiilden sıfat (isim) türetmiştir (yapım eki). Diğerlerindeki "-ar/-er" ekleri geniş zaman kipidir.'
      },
      {
        id: 'q-sy-7-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde fiilden fiil yapan bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'B', text: 'Sınavı kazanınca hepimiz çok *sevindik*.' },
          { id: 'C', text: 'Bu yazarın *yazıları* çok okunur.' },
          { id: 'D', text: 'O çok büyük bir *bilgindir*.' },
          { id: 'E', text: 'Ormandaki *yangın* zor söndürüldü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sevindik" kelimesinin kökü "sev-mek" fiilidir. "Sev-mek" fiili "-in" yapım ekini alarak "sevin-mek" fiiline dönüşmüştür. Bu, fiilden fiil yapan ektir. (Kötüleşti isimden fiil, yazı, bilgin, yangın fiilden isim).'
      },
      {
        id: 'q-sy-7-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki birleşik fiillerden hangisi "isim + yardımcı fiil (etmek, olmak)" şeklinde kurulmamıştır?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Gelen teklifleri *reddetti*.' },
          { id: 'C', text: 'Onu gördüğünde çok *şaşakaldı*.' },
          { id: 'D', text: 'Arkadaşına yardım için *telefon etti*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissetti*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Şaşakaldı" fiili "şaş-mak" ve "kal-mak" fiillerinin kurallı birleşik fiil kuralıyla (sürerlik fiili -ekal) birleşmesiyle oluşmuştur. İki fiil birleşmiştir. Diğerleri (fark, ret, telefon, his + etmek) isim ve yardımcı eylemden oluşur.'
      },
      {
        id: 'q-sy-7-24',
        difficulty: 'hard',
        questionText: 'Bazı ekler eklendiği kelimenin kökünde köklü bir ünlü değişimine sebep olabilir. Aşağıdaki kelimelerin hangisinde çekim eki alırken kökte ünlü değişimi (aşınma veya daralma değil) görülmüştür?',
        options: [
          { id: 'A', text: 'Sana' },
          { id: 'B', text: 'Bekliyor' },
          { id: 'C', text: 'Niçin' },
          { id: 'D', text: 'Kaybetti' },
          { id: 'E', text: 'Biliyor' }
        ],
        correctOptionId: 'A',
        explanation: '"Sen" zamiri "-e" yönelme halini aldığında kökteki "e" ünlüsü kalınlaşarak "a" olur ve kelime "sana" şeklini almıştır (kökte ünlü değişimi).'
      },
      {
        id: 'q-sy-7-25',
        difficulty: 'hard',
        questionText: 'Bir sözcükte hem iyelik (aitlik) hem de belirtme durumu (-ı/-i) eki arka arkaya kullanılabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu kullanım vardır?',
        options: [
          { id: 'A', text: 'Kardeşinin *çantasını* sırada unutmuş.' },
          { id: 'B', text: 'Odanın *kapısı* tamamen kırılmış.' },
          { id: 'C', text: 'Elindeki *kitabı* masaya koydu.' },
          { id: 'D', text: 'Yeni aldığı *kazağı* hemen giydi.' },
          { id: 'E', text: 'Benim *kalemim* çok güzel yazıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çantasını" kelimesinde: çanta-sı (3. tekil iyelik) - n (kaynaştırma) - ı (belirtme hal eki) kullanılmıştır. B\'de sadece iyelik, C ve D\'de sadece belirtme, E\'de sadece iyelik vardır.'
      },
      {
        id: 'q-sy-7-26',
        difficulty: 'hard',
        questionText: 'İsimden fiil yapan "-l" veya "-al/-el" ekleri bazen kökün sonundaki "k" ünsüzünün düşmesine yol açar. Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'B', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'C', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'D', text: 'Hastanın yüzü gittikçe *ufaldı*.' },
          { id: 'E', text: 'Ağacın yaprakları sonbaharda *sarardı*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Küçük (küçüldü), alçak (alçaldı), yüksek (yükseldi) ve ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Sarardı" kelimesinin kökü "sarı"dır ve -ar ekini aldığında ünlü aşınması/düşmesi olur, ünsüz düşmesi yoktur.'
      },
      {
        id: 'q-sy-7-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" ekinin görevi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'B', text: 'Bu soruyu dün gece *çözdüm*.' },
          { id: 'C', text: 'Yarın sabah seninle *gelirim*.' },
          { id: 'D', text: 'Son yıllarda enerji *tüketimi* arttı.' },
          { id: 'E', text: 'Ben de onu çok *severim*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Tüketimi" kelimesindeki "-im" eki, "tüketmek" fiilinden isim türeten bir yapım ekidir (fiilden isim). Diğer seçeneklerdeki (-im, -üm vb.) ekler, fiile gelen 1. tekil şahıs (kişi) ekidir.'
      },
      {
        id: 'q-sy-7-28',
        difficulty: 'hard',
        questionText: 'Yapım ekinin türü eklendiği kökün yapısını ve kelimenin son türünü belirler. Aşağıdaki kelimelerden hangisi yapı bakımından basit kelimedir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Tebessüm' },
          { id: 'C', text: 'Başlangıç' },
          { id: 'D', text: 'Yaşantı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'B',
        explanation: '"Tebessüm" kelimesi Arapça kökenli olup, Türkçede herhangi bir yapım ekiyle türetilmemiştir (basit). Bilişim (bilmek), başlangıç (baş), yaşantı (yaşamak), düşünce (düşünmek) kelimeleri ise türemiştir.'
      },
      {
        id: 'q-sy-7-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi isimden isim yapan bir yapım eki almamıştır?',
        options: [
          { id: 'A', text: 'Evin en güzel *odasını* ona verdiler.' },
          { id: 'B', text: 'Büyük bir *kitaplık* aldık.' },
          { id: 'C', text: 'Çok *akıllı* bir çocuktu.' },
          { id: 'D', text: 'Bahçedeki *çiçekçi* dükkanı taşındı.' },
          { id: 'E', text: 'Eskiden o hep *gözlüklü* dolaşırdı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Odasını" kelimesi kök (oda) halinde olup, -sı, -n, -ı çekim eklerini almıştır. Yapım eki almamıştır. (Kitap-lık, akıl-lı, çiçek-çi, göz-lük-lü).'
      },
      {
        id: 'q-sy-7-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler her iki kelimenin de gerçek anlamını koruması, sadece birinin koruması veya ikisinin de yitirmesi şeklinde oluşabilir. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını tamamen yitirmiştir?',
        options: [
          { id: 'A', text: 'Buzdolabı' },
          { id: 'B', text: 'Aslanağzı' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Kuşüzümü' }
        ],
        correctOptionId: 'B',
        explanation: '"Aslanağzı" bir çiçek adıdır ve ne aslan ile ne de ağız ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiş (kalıplaşmış mecaz) ve birleşik kelime oluşmuştur.'
      }
    ]
  }
];
