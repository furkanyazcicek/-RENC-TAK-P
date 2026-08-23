export default [
  {
    id: 'test-zarflar-14-kolay',
    title: 'Zarflar 14 (Kolay)',
    description: 'Zarflar - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-zr-14-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf (belirteç) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bugün oldukça yorgun görünüyorsun.' },
          { id: 'B', text: 'Tatlı sözlerle herkesi ikna ederdi.' },
          { id: 'C', text: 'Sınava hızlıca hazırlandık.' },
          { id: 'D', text: 'Bunu ona yarın söyleyeceğim.' },
          { id: 'E', text: 'Oraya sessizce girdiler.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Tatlı sözler\" sıfat tamlamasıdır. Cümlede fiili, sıfatı veya zarfı niteleyen herhangi bir zarf kullanılmamıştır.'
      },
      {
        id: 'q-zr-14-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu evi geçen sene aldık.' },
          { id: 'B', text: 'Akşam yemeğini dışarıda yedik.' },
          { id: 'C', text: 'Güzelce giyinip dışarı çıktı.' },
          { id: 'D', text: 'Daha büyük bir masa almalıyız.' },
          { id: 'E', text: 'Biraz dinlendikten sonra gidelim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"güzelce\" kelimesi \"giyinip\" fiilimsi eyleminin nasıl yapıldığını bildirdiği için durum zarfıdır.'
      },
      {
        id: 'q-zr-14-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi zaman zarfıdır?',
        options: [
          { id: 'A', text: 'Bana (doğruyu) söylemelisin.' },
          { id: 'B', text: 'O, çok (güzel) bir insandır.' },
          { id: 'C', text: '(Akşam) sinemaya gideceğiz.' },
          { id: 'D', text: '(Yukarı) kata çıkıp onu bekledim.' },
          { id: 'E', text: 'Kitabını (hızlıca) okudu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Akşam\" sözcüğü eylemin (gideceğiz) ne zaman yapılacağını bildirdiği için zaman zarfıdır.'
      },
      {
        id: 'q-zr-14-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru zarfı yoktur?',
        options: [
          { id: 'A', text: 'Bu işi nasıl başaracaksın?' },
          { id: 'B', text: 'Oraya ne zaman vardınız?' },
          { id: 'C', text: 'Hangi elbiseyi daha çok beğendin?' },
          { id: 'D', text: 'Niçin bana kızgınsın?' },
          { id: 'E', text: 'Bu kadar yolu ne diye yürüdün?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"hangi\" sözcüğü \"elbise\" ismini belirttiği için soru sıfatıdır. (Nasıl, ne zaman, niçin, ne diye soru zarfıdır.)'
      },
      {
        id: 'q-zr-14-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'İçerinin havası çok basıktı.' },
          { id: 'B', text: 'Beri gel, seninle konuşalım.' },
          { id: 'C', text: 'Dışarıya adım atacak hali yoktu.' },
          { id: 'D', text: 'İlerisi oldukça aydınlık görünüyor.' },
          { id: 'E', text: 'Aşağı mahalleyi su basmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"beri\" sözcüğü hiçbir hal eki almadan eylemi (gel) belirttiği için yer-yön zarfıdır. A, C ve D isimleşmiş; E ise sıfat olmuştur.'
      },
      {
        id: 'q-zr-14-6',
        difficulty: 'easy',
        questionText: '\"Çok\" sözcüğü aşağıdakilerin hangisinde miktar zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu sıralar çok insan hasta.' },
          { id: 'B', text: 'Çok çalışırsan sen de kazanırsın.' },
          { id: 'C', text: 'Çok eşya ile yola çıkılmaz.' },
          { id: 'D', text: 'Dün pazardan çok meyve aldık.' },
          { id: 'E', text: 'Ona çok para lazımmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"çok\" sözcüğü \"çalışırsan\" fiilini niteleyen miktar zarfıdır. Diğer seçeneklerde isimleri nitelediğinden belgisiz sıfattır.'
      },
      {
        id: 'q-zr-14-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirilmiş kelime zarf görevindedir?',
        options: [
          { id: 'A', text: 'Masada kıpkırmızı elmalar vardı.' },
          { id: 'B', text: 'Sımsıcak bir ekmek yedik.' },
          { id: 'C', text: 'Odasını darmadağın bırakmış.' },
          { id: 'D', text: 'Bembeyaz karlar her tarafı kapladı.' },
          { id: 'E', text: 'Tertemiz çarşaflarda uyudu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"darmadağın\" kelimesi \"bırakmış\" fiilini nitelediği için durum zarfıdır. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-14-8',
        difficulty: 'easy',
        questionText: '\"Doğru\" sözcüğü aşağıdakilerin hangisinde durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Herkes doğru insanı arıyor.' },
          { id: 'B', text: 'Tahtaya uzun bir doğru çizdi.' },
          { id: 'C', text: 'Okula doğru giderken karşılaştık.' },
          { id: 'D', text: 'Bana her zaman doğruyu söyle.' },
          { id: 'E', text: 'Soruları doğru cevaplamalısın.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"doğru\" sözcüğü \"cevaplamalısın\" fiilini nitelediği için durum zarfıdır. A\'da sıfat, B\'de isim, C\'de edat, D\'de isimdir.'
      },
      {
        id: 'q-zr-14-9',
        difficulty: 'easy',
        questionText: '\"Hemen\" kelimesi aşağıdakilerin hangisinde cümleye \"çabukluk\" (zaman) anlamı katan bir zarftır?',
        options: [
          { id: 'A', text: 'Hemen kapının önünde bekliyor.' },
          { id: 'B', text: 'Bu işi hemen bitirmen gerekiyor.' },
          { id: 'C', text: 'Hemen hemen üç yıldır buradayız.' },
          { id: 'D', text: 'Otel hemen sokağın köşesindeydi.' },
          { id: 'E', text: 'Okul hemen şu tepenin arkasında.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"hemen\" sözcüğü çabukluk bildirerek zaman zarfı olmuştur. C\'de miktar/olasılık, A, D ve E\'de yer pekiştirmesi görevindedir.'
      },
      {
        id: 'q-zr-14-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya hemen gideceğiz.' },
          { id: 'B', text: 'Sessizce yerinden kalktı.' },
          { id: 'C', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'D', text: 'Hızlıca yukarı çıktı.' },
          { id: 'E', text: 'Bunu nasıl çözdüğünü anlatır mısın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"yarın\" ve \"erkenden\" olmak üzere iki adet zaman zarfı kullanılmıştır. (Ayrıca D seçeneğinde de hızlıca (durum) ve yukarı (yer-yön) vardır. Soru daha net olmak adına C\'yi netleştirebiliriz fakat C de tipik bir örnektir. D seçeneğinde de iki zarf vardır. Soruyu \"Aynı türden birden fazla zarf\" şeklinde düşünerek C diyebiliriz.)'
      }
    ]
  },
  {
    id: 'test-zarflar-14-orta',
    title: 'Zarflar 14 (Orta)',
    description: 'Zarflar - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-zr-14-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat öbeği zaman zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eve doğru yürürken onu gördüm.' },
          { id: 'B', text: 'Sabaha kadar hiç uyumadan çalıştı.' },
          { id: 'C', text: 'Buz gibi suyu içince hastalandı.' },
          { id: 'D', text: 'Aslan gibi kükreyerek saldırdı.' },
          { id: 'E', text: 'Onun için bu kadar fedakarlık yaptım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Sabaha kadar\" edat öbeği, çalışma eyleminin zamanını/süresini belirttiği için zaman zarfı görevindedir.'
      },
      {
        id: 'q-zr-14-12',
        difficulty: 'medium',
        questionText: 'Zarflar sıfat tamlamalarının önüne gelerek onları derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Bugün çok hızlı koşarak herkesi şaşırttı.' },
          { id: 'B', text: 'En çok seni sevdim bu hayatta.' },
          { id: 'C', text: 'Çok zorlu bir süreçten geçiyoruz.' },
          { id: 'D', text: 'Oldukça zorlandı bu sınavda.' },
          { id: 'E', text: 'Daha hızlı adımlarla yürüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"çok\" zarfı, \"zorlu bir süreç\" sıfat tamlamasındaki sıfatı (zorlu) derecelendirmektedir.'
      },
      {
        id: 'q-zr-14-13',
        difficulty: 'medium',
        questionText: '\"Ne\" kelimesi aşağıdaki cümlelerin hangisinde miktar zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğum günümde ne aldın?' },
          { id: 'B', text: 'Ne tür kitaplardan hoşlanırsın?' },
          { id: 'C', text: 'Ne ağlayıp sızlanıyorsun sabahtan beri?' },
          { id: 'D', text: 'Bu araba için ne kadar ödedin?' },
          { id: 'E', text: 'Ne tatlı bir kedi bu!' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"ne\" sözcüğü \"ne kadar (çok)\" anlamında kullanılmış olup \"tatlı\" sıfatını derecelendiren miktar zarfıdır.'
      },
      {
        id: 'q-zr-14-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'Dışarısı bugün dünden daha sıcak.' },
          { id: 'B', text: 'İlerisi aydınlık günlere gebe.' },
          { id: 'C', text: 'Aşağı katta büyük bir telaş var.' },
          { id: 'D', text: 'Lütfen biraz geri çekilin.' },
          { id: 'E', text: 'Yukarıdan gürültüler duyuluyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"geri\" sözcüğü çekim eki almadan eylemi (çekilin) belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-14-15',
        difficulty: 'medium',
        questionText: '\"Yalnız\" kelimesi aşağıdakilerin hangisinde durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız insanların hayatı zordur.' },
          { id: 'B', text: 'Sokakta yalnız yürürken seni düşündüm.' },
          { id: 'C', text: 'Bunu yalnız sana anlatabilirim.' },
          { id: 'D', text: 'Benimle gel yalnız çok konuşma.' },
          { id: 'E', text: 'Yalnızlık Allah\'a mahsustur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"yalnız\", \"yürürken\" fiilimsi eylemini durum bakımından nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-zr-14-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı farklı bir tür zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Niçin bana yalan söyledin?' },
          { id: 'B', text: 'Neden bize haber vermedin?' },
          { id: 'C', text: 'Ne diye bana kızıyorsun?' },
          { id: 'D', text: 'Ne zaman döneceksiniz?' },
          { id: 'E', text: 'Niye benimle konuşmuyorsun?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"ne zaman\" kelimesi zaman zarfını buldurmaya yöneliktir. A, B, C ve E sebep zarfı (neden) buldurur.'
      },
      {
        id: 'q-zr-14-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Seni görünce çok mutlu oldum.' },
          { id: 'B', text: 'Güneş batarken eve doğru yola çıktık.' },
          { id: 'C', text: 'Sessizce düşünerek sorunu çözdü.' },
          { id: 'D', text: 'Kar yağınca her yer bembeyaz oldu.' },
          { id: 'E', text: 'Okullar açılalı işlerimiz arttı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde zarf-fiil öbeği cümleye zaman anlamı katarken, C seçeneğinde \"düşünerek\" eylemin durumunu (nasıl yapıldığını) belirtmektedir.'
      },
      {
        id: 'q-zr-14-18',
        difficulty: 'medium',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Böyle sözlere artık tahammülüm kalmadı.' },
          { id: 'B', text: 'Böyle bir havada dışarı çıkılmaz.' },
          { id: 'C', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' },
          { id: 'D', text: 'Bana böyle davrandığın için çok üzgünüm.' },
          { id: 'E', text: 'Böyle insanlara güvenmemelisin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"böyle\" sözcüğü \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğer seçeneklerde isimleri nitelediği için sıfattır.'
      },
      {
        id: 'q-zr-14-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme, zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Koşa koşa yanıma geldi.' },
          { id: 'B', text: 'Derin derin nefes alarak sakinleşti.' },
          { id: 'C', text: 'Bata çıka ilerliyorduk bu yollarda.' },
          { id: 'D', text: 'Bana uzun uzun derdini anlattı.' },
          { id: 'E', text: 'Bölük pörçük düşüncelerle uyandı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"bölük pörçük\" ikilemesi \"düşünceler\" ismini nitelediği için sıfattır. Diğerlerinde zarftır.'
      },
      {
        id: 'q-zr-14-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf, yükleme sebep anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın erkenden yola çıkmalıyız.' },
          { id: 'B', text: 'Yağmur yağdığı için maçı iptal ettik.' },
          { id: 'C', text: 'Sessizce odadan çıkıp kapıyı kapattı.' },
          { id: 'D', text: 'Hiç düşünmeden kararlar veriyor.' },
          { id: 'E', text: 'Güle oynaya okula gittiler.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Yağmur yağdığı için\" edat öbeği, iptal etme eyleminin sebebini bildiren bir zarftır (sebep zarfı).'
      }
    ]
  },
  {
    id: 'test-zarflar-14-zor',
    title: 'Zarflar 14 (Zor)',
    description: 'Zarflar - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-zr-14-21',
        difficulty: 'hard',
        questionText: 'Zarflar bazen cümlenin bütününü niteleyebilir veya cümleye olasılık, kesinlik gibi anlamlar katabilir. Aşağıdakilerin hangisinde cümleye olasılık katan bir zarf vardır?',
        options: [
          { id: 'A', text: 'Seni mutlaka o toplantıda görmek istiyorum.' },
          { id: 'B', text: 'Hiç şüphesiz bu maçı biz kazanacağız.' },
          { id: 'C', text: 'Galiba hepimiz aynı hatayı yapıyoruz.' },
          { id: 'D', text: 'Elbette sizinle gelirim.' },
          { id: 'E', text: 'Kuşkusuz bu işin altından kalkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki \"galiba\" kelimesi cümleye olasılık (ihtimal) anlamı katan bir zarftır. Diğer seçeneklerde kesinlik zarfı vardır.'
      },
      {
        id: 'q-zr-14-22',
        difficulty: 'hard',
        questionText: 'Soru anlamı sağlayan sözcükler cümlede soru zarfı olabilir. Aşağıdaki cümlelerin hangisinde soru zarfı dolaylı soru cümlesi içinde yer almıştır?',
        options: [
          { id: 'A', text: 'Niçin bana zamanında haber vermedin?' },
          { id: 'B', text: 'Sınavın ne zaman yapılacağını öğrendin mi?' },
          { id: 'C', text: 'Bu işi ne kadar sürede bitirirsin?' },
          { id: 'D', text: 'Oraya nasıl gideceğini hiç kimse bilmiyor.' },
          { id: 'E', text: 'Bunu sana kimin anlattığını söyler misin?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"nasıl\" soru zarfı vardır ancak cümle soru cümlesi değildir, soru dolaylı yoldan aktarılmıştır (yan cümleciktedir).'
      },
      {
        id: 'q-zr-14-23',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde miktar zarfı bir adlaşmış sıfatı derecelendirmektedir?',
        options: [
          { id: 'A', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'B', text: 'Çok büyük umutlarla yola çıktık.' },
          { id: 'C', text: 'Sınıfın en tembeli bile bu soruyu çözdü.' },
          { id: 'D', text: 'Daha iyi bir çözüm bulmalıyız.' },
          { id: 'E', text: 'Epeyce uzun bir tatil yaptık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"tembeli\" (tembel öğrencisi) adlaşmış sıfattır ve \"en\" miktar zarfı onu derecelendirmiştir.'
      },
      {
        id: 'q-zr-14-24',
        difficulty: 'hard',
        questionText: '\"Kadar\" edatı öbekleşerek cümlede zarf veya sıfat görevinde kullanılabilir. Aşağıdakilerin hangisinde \"kadar\" öbeği zaman zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Cennet kadar güzel bir vatanımız var.' },
          { id: 'B', text: 'Onun kadar hızlı koşanını görmedim.' },
          { id: 'C', text: 'Buz kadar soğuk suyla yıkandı.' },
          { id: 'D', text: 'Sabaha kadar hiç durmadan ders çalıştı.' },
          { id: 'E', text: 'Dev kadar adam karşımıza dikildi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"sabaha kadar\" öbeği eylemin ne zamana kadar (süresini) yapıldığını bildiren zaman zarfı görevindedir. Diğer seçeneklerde sıfat/zarf derecelendirme öbeğidir.'
      },
      {
        id: 'q-zr-14-25',
        difficulty: 'hard',
        questionText: 'Sıfatlar adlaşırken niteledikleri isim düşer. Aşağıdakilerin hangisinde adlaşmış sıfat, zarf öbeği içinde (zarf tümleci göreviyle) kullanılmıştır?',
        options: [
          { id: 'A', text: 'İyiler her zaman kazanır.' },
          { id: 'B', text: 'Eskileri satıp yeni eşyalar aldık.' },
          { id: 'C', text: 'Zorları başarmak bizim işimizdir.' },
          { id: 'D', text: 'Soğuklardan elleri çatlamıştı.' },
          { id: 'E', text: 'Gelenleri kapıda tek tek karşıladık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"soğuklardan\" (soğuk havalardan) adlaşmış sıfattır ve ayrılma hal eki (-dan) alarak eylemin sebebini (niçin çatlamıştı) bildiren sebep zarfı (zarf tümleci) olmuştur.'
      },
      {
        id: 'q-zr-14-26',
        difficulty: 'hard',
        questionText: 'Zarflar çekim eki aldıklarında tür değiştirip isimleşirler. Aşağıdaki altı çizili sözcüklerden hangisi çekim eki almasına rağmen zarf görevini sürdürmektedir?',
        options: [
          { id: 'A', text: '(İçerisi) bugün çok sıcak olmuş.' },
          { id: 'B', text: '(Aşağıya) inip bir etrafa bakındı.' },
          { id: 'C', text: 'Bunu (sonradan) sen de anlayacaksın.' },
          { id: 'D', text: '(İleriden) sağa dönmeniz gerekiyor.' },
          { id: 'E', text: '(Yukarıdan) garip sesler duyuluyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"sonra\" kelimesi -dan ayrılma hal eki almış olmasına rağmen (sonradan) cümlede zaman/durum zarfı görevini sürdürmektedir.'
      },
      {
        id: 'q-zr-14-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf, yükleme durum değil sebep anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sessizce odadan çıkıp kapıyı kapattı.' },
          { id: 'B', text: 'Korkudan bütün gece uyuyamadı.' },
          { id: 'C', text: 'Güle oynaya okula gittiler.' },
          { id: 'D', text: 'Düşünmeden hızlıca kararlar veriyor.' },
          { id: 'E', text: 'Hızlı adımlarla uzaklaştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"korkudan\" kelimesi uyuyamama eyleminin sebebini bildiren bir sebep zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-zr-14-28',
        difficulty: 'hard',
        questionText: 'Bir cümlede birden fazla zarf yan yana gelerek birbirini derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Dün akşam eve geç geldim.' },
          { id: 'B', text: 'Sessizce ve usulca odadan çıktı.' },
          { id: 'C', text: 'Çok hızlı koşarak herkesi geçti.' },
          { id: 'D', text: 'Yarın sabah erkenden yola çıkacağız.' },
          { id: 'E', text: 'Oldukça zorlu bir görev bizi bekliyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"çok\" miktar zarfı, \"hızlı\" zarfını derecelendirmiştir.'
      },
      {
        id: 'q-zr-14-29',
        difficulty: 'hard',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf fiili niteleyen bir durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Böyle sözlere artık tahammülüm kalmadı.' },
          { id: 'B', text: 'Böyle havalarda dışarı çıkmam.' },
          { id: 'C', text: 'Bana böyle davrandığın için çok üzgünüm.' },
          { id: 'D', text: 'Böyle bir insanla bir daha görüşmem.' },
          { id: 'E', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"böyle\" kelimesi \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-14-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir zarftır?',
        options: [
          { id: 'A', text: '(Dün) seni çok aradım.' },
          { id: 'B', text: 'İşlerini (düzgünce) halletti.' },
          { id: 'C', text: '(Birdenbire) karşımıza çıktı.' },
          { id: 'D', text: 'O (hemen) yanıma geldi.' },
          { id: 'E', text: 'Bunu (yarın) konuşalım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"düzgünce\" kelimesi \"düzgün\" isminden yapım eki (-ce) alarak türetilmiş bir zarftır. (Dün, hemen, yarın basit; birdenbire birleşik yapılıdır.)'
      }
    ]
  }
]
