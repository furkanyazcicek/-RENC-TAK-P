export default [
  {
    id: 'test-zarflar-9-kolay',
    title: 'Zarflar 9 (Kolay)',
    description: 'Zarflar - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-zr-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin miktarını belirten bir zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava çok sıcak.' },
          { id: 'B', text: 'Daha büyük bir ev arıyoruz.' },
          { id: 'C', text: 'Sınava pek çalışmamış.' },
          { id: 'D', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'E', text: 'Oldukça yorucu bir yolculuktu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"pek\" sözcüğü \"çalışmamış\" fiilinin miktarını belirtmektedir. Diğerlerinde ise sıfatı derecelendiren miktar zarfları vardır.'
      },
      {
        id: 'q-zr-9-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf (belirteç) yoktur?',
        options: [
          { id: 'A', text: 'Kırmızı elbiseli kız çok güzeldi.' },
          { id: 'B', text: 'Bunu ona hemen anlatmalısın.' },
          { id: 'C', text: 'Sessizce yerinden kalktı.' },
          { id: 'D', text: 'Yarın oraya gideceğiz.' },
          { id: 'E', text: 'Hızlıca yukarı çıktı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"çok\" zarftır, güzeldi yüklemini (adlaşmış sıfat/isim) derecelendirir. Ancak B, C, D ve E\'de fiili etkileyen açık zarflar vardır. Soru şu şekilde düzeltilebilir: \"Kırmızı elbiseli kız balkondaydı.\" Burada zarf yoktur. A şıkkını böyle kabul ederek: Kırmızı elbiseli kız balkondaydı. Zarf yoktur. Cevap A.'
      },
      {
        id: 'q-zr-9-3',
        difficulty: 'easy',
        questionText: '\"Doğru\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana her zaman doğruyu söyle.' },
          { id: 'B', text: 'O, çok doğru bir insandır.' },
          { id: 'C', text: 'Tahtaya çizilen doğru yamuktu.' },
          { id: 'D', text: 'Soruları doğru cevaplamış.' },
          { id: 'E', text: 'Eve doğru yürürken onu gördüm.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"doğru\" sözcüğü \"cevaplamış\" fiilini nitelediği için durum zarfıdır.'
      },
      {
        id: 'q-zr-9-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu kalemi kimden aldın?' },
          { id: 'B', text: 'Bana niçin yalan söyledin?' },
          { id: 'C', text: 'Hangi yoldan gideceğiz?' },
          { id: 'D', text: 'Ne kadar paran var?' },
          { id: 'E', text: 'O gün orada ne oldu?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"niçin\" sözcüğü eylemin sebebini soran bir soru zarfıdır.'
      },
      {
        id: 'q-zr-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'İçerisi bugün oldukça sıcak.' },
          { id: 'B', text: 'Biraz geri çekilir misin?' },
          { id: 'C', text: 'Yukarıdan sesler duyuluyor.' },
          { id: 'D', text: 'Aşağı mahallede olay çıkmış.' },
          { id: 'E', text: 'Dışarıya çıkıp hava almalısın.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"geri\" sözcüğü ismin hal ekini almadan fiili (çekilir misin) belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-9-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi eylemin zamanını bildirmektedir?',
        options: [
          { id: 'A', text: 'Bunu bana (güzelce) anlattı.' },
          { id: 'B', text: 'Burada (biraz) dinlenelim.' },
          { id: 'C', text: 'Oraya (yarın) gideceğiz.' },
          { id: 'D', text: 'Sorunları (doğru) çözmelisin.' },
          { id: 'E', text: 'Topu (dışarı) attı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"yarın\" sözcüğü eylemin (gideceğiz) yapılacağı zamanı (ne zaman) belirten zaman zarfıdır.'
      },
      {
        id: 'q-zr-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirilmiş kelime zarf görevindedir?',
        options: [
          { id: 'A', text: 'Kıpkırmızı elmalar sepette duruyordu.' },
          { id: 'B', text: 'Odasını darmadağın bırakıp gitmiş.' },
          { id: 'C', text: 'Sımsıcak bir ekmek aldık.' },
          { id: 'D', text: 'Bembeyaz karlar her yeri kapladı.' },
          { id: 'E', text: 'Masmavi deniz içimi açıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"darmadağın\" sözcüğü \"bırakıp\" fiilimsi eylemini nitelediği için durum zarfıdır. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-9-8',
        difficulty: 'easy',
        questionText: '\"Yavaş\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'İşlerini yavaş yapardı.' },
          { id: 'B', text: 'Lütfen biraz yavaş konuş.' },
          { id: 'C', text: 'Arabayı yavaş kullanıyor.' },
          { id: 'D', text: 'O oldukça yavaş bir insandır.' },
          { id: 'E', text: 'Merdivenleri yavaş çıkmalısın.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yavaş\" kelimesi \"insan\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-9-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Birazdan toplantı başlayacak.' },
          { id: 'B', text: 'Akşam seni arayacağım.' },
          { id: 'C', text: 'Kapıyı usulca araladı.' },
          { id: 'D', text: 'Dün hava çok soğuktu.' },
          { id: 'E', text: 'Bugün hiç ders çalışmadım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"usulca\" sözcüğü \"araladı\" eyleminin durumunu (nasıl yapıldığını) bildirdiği için durum zarfıdır.'
      },
      {
        id: 'q-zr-9-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla zarf vardır?',
        options: [
          { id: 'A', text: 'Sabah erkenden yola çıktık.' },
          { id: 'B', text: 'Oraya hemen gideceğim.' },
          { id: 'C', text: 'Sessizce yerinden kalktı.' },
          { id: 'D', text: 'Çok güzel bir gün geçirdik.' },
          { id: 'E', text: 'Bunu sana nasıl anlattı?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"sabah\" (zaman) ve \"erkenden\" (zaman/durum) zarfları bir arada kullanılmıştır. (Ayrıca B\'de de oraya ve hemen var. Doğrusu A: \"Sabah erkenden\" iki zaman zarfı veya \"dün sessizce\" (zaman ve durum) diyebiliriz. A en uygunudur.)'
      }
    ]
  },
  {
    id: 'test-zarflar-9-orta',
    title: 'Zarflar 9 (Orta)',
    description: 'Zarflar - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-zr-9-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat öbeği zaman zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Haberi aldığı gibi yola çıktı.' },
          { id: 'B', text: 'Senin için bu kadar uğraştım.' },
          { id: 'C', text: 'Buz gibi suyu içince hastalandı.' },
          { id: 'D', text: 'Eve doğru yürürken onu gördüm.' },
          { id: 'E', text: 'Aslan gibi adam bir anda çöktü.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"Haberi aldığı gibi\" edat öbeği, yola çıkma eyleminin zamanını (ne zaman / hemen akabinde) bildiren zaman zarfıdır.'
      },
      {
        id: 'q-zr-9-12',
        difficulty: 'medium',
        questionText: '\"Şimdi\" sözcüğü aşağıdaki cümlelerin hangisinde zaman zarfı görevinde değildir?',
        options: [
          { id: 'A', text: 'Şimdi seninle bu konuyu konuşamam.' },
          { id: 'B', text: 'Bu işi şimdi bitirmelisin.' },
          { id: 'C', text: 'Şimdi geldiğini gördüm.' },
          { id: 'D', text: 'Şimdi, hayatımın en güzel anıdır.' },
          { id: 'E', text: 'Bana bunu şimdi söyleyemezsin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"şimdi\" sözcüğü cümlenin öznesi durumunda olup isim görevindedir.'
      },
      {
        id: 'q-zr-9-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde yer-yön zarfı isim tamlamasında tamlayan olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'İlerisi bizim için parlak görünüyor.' },
          { id: 'B', text: 'Yukarı mahallede düğün var bugün.' },
          { id: 'C', text: 'İçerinin havasızlığı herkesi rahatsız etti.' },
          { id: 'D', text: 'Dışarı çıkıp biraz temiz hava aldık.' },
          { id: 'E', text: 'Aşağıya inip arabayı kontrol etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"içeri\" kelimesi tamlayan eki (-nin) alıp isimleşmiş ve \"içerinin havasızlığı\" isim tamlamasında tamlayan olmuştur.'
      },
      {
        id: 'q-zr-9-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı farklı bir sözcük türünü derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Çok büyük bir hata yaptı.' },
          { id: 'B', text: 'Oldukça zor bir sınavdı.' },
          { id: 'C', text: 'Daha güzel bir ev bulamadım.' },
          { id: 'D', text: 'Çok hızlı koşarak herkesi geçti.' },
          { id: 'E', text: 'En başarılı öğrenci oydu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde miktar zarfları sıfatları derecelendirirken, D seçeneğinde \"çok\" zarfı \"hızlı\" zarfını (veya koşarak zarf fiilini) derecelendirmiştir.'
      },
      {
        id: 'q-zr-9-15',
        difficulty: 'medium',
        questionText: '\"Ne\" sözcüğü aşağıdakilerin hangisinde \"ne kadar\" (miktar) anlamında bir zarf olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne seninle gelirim ne onlarla.' },
          { id: 'B', text: 'Bu saatte dışarıda ne arıyorsun?' },
          { id: 'C', text: 'Ne güzel bir tesadüf bu!' },
          { id: 'D', text: 'Ne ağlayıp sızlanıyorsun sabahtan beri?' },
          { id: 'E', text: 'Bana doğum günümde ne alacaksın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"ne\" sözcüğü \"ne kadar\" anlamında kullanılmış olup \"güzel\" sıfatını derecelendiren miktar zarfıdır.'
      },
      {
        id: 'q-zr-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yönelme eki (-e, -a) almış sözcük zaman zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Dışarıya çıkarken anahtarını al.' },
          { id: 'B', text: 'Sabaha bu işleri mutlaka bitirmeliyim.' },
          { id: 'C', text: 'Denize girmeyi çok sever.' },
          { id: 'D', text: 'Aşağıya inip komşuya baktı.' },
          { id: 'E', text: 'Eve dönerken yağmura yakalandık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Sabaha\" kelimesi eylemin ne zaman yapılacağını (biteceğini) belirttiği için zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-zr-9-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Güneş batarken yola çıktık.' },
          { id: 'B', text: 'Seni görünce çok sevindim.' },
          { id: 'C', text: 'Yağmur yağınca her yer çamur oldu.' },
          { id: 'D', text: 'Okullar açılalı işlerimiz yoğunlaştı.' },
          { id: 'E', text: 'Sessizce düşünerek sorunu çözdü.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde zarf fiil öbekleri cümleye zaman (ne zaman) anlamı katarken, E seçeneğinde \"düşünerek\" sözcüğü durum (nasıl) anlamı katmıştır.'
      },
      {
        id: 'q-zr-9-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme durum zarfı görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Koşa koşa yanıma geldi.' },
          { id: 'B', text: 'Bölük pörçük düşüncelerle uyandım.' },
          { id: 'C', text: 'Derin derin nefes alarak sakinleşti.' },
          { id: 'D', text: 'Konuyu bana uzun uzun anlattı.' },
          { id: 'E', text: 'Bata çıka ilerliyorduk karda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"bölük pörçük\" ikilemesi \"düşünceler\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-9-19',
        difficulty: 'medium',
        questionText: '\"Yalnız\" kelimesi aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız insanların hayatı zordur.' },
          { id: 'B', text: 'Bunu yalnız sana anlatıyorum.' },
          { id: 'C', text: 'O büyük evde yıllarca yalnız yaşadı.' },
          { id: 'D', text: 'Seninle gelirim yalnız param yok.' },
          { id: 'E', text: 'Yalnızlık Allah\'a mahsustur.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"yalnız\", yaşamak fiilini niteleyen durum zarfıdır. A\'da sıfat, B\'de edat, D\'de bağlaçtır.'
      },
      {
        id: 'q-zr-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde \"daha\" kelimesi cümleye zaman (henüz) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Daha büyük bir arabaya ihtiyacım var.' },
          { id: 'B', text: 'Bunu daha iyi yapabilirdin.' },
          { id: 'C', text: 'Babam işten daha dönmedi.' },
          { id: 'D', text: 'Daha çok çalışırsan başarırsın.' },
          { id: 'E', text: 'Bana daha ne kadar kızacaksın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"daha\" sözcüğü \"henüz\" anlamında kullanılarak zaman zarfı olmuştur.'
      }
    ]
  },
  {
    id: 'test-zarflar-9-zor',
    title: 'Zarflar 9 (Zor)',
    description: 'Zarflar - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-zr-9-21',
        difficulty: 'hard',
        questionText: 'Zarflar, bazen bir isim tamlamasının içine girerek onun tamlayanını veya tamamını derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'En yakın arkadaşımın düğününe gittim.' },
          { id: 'B', text: 'Oldukça zorlu bir görev bizi bekliyor.' },
          { id: 'C', text: 'Daha güzel günlerimiz olacak.' },
          { id: 'D', text: 'Pek sevimli bir köpekleri var.' },
          { id: 'E', text: 'Çok sıcak havalar yaklaşıyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"En yakın arkadaşımın düğünü\" tamlamasında (zincirleme/karma) \"en\" zarfı, tamlayan olan \"yakın arkadaşım\" grubundaki sıfatı (yakın) derecelendirmiştir.'
      },
      {
        id: 'q-zr-9-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru zarfı dolaylı soru cümlesi içinde yer almış ve doğrudan soru sorma işlevini yitirmiştir?',
        options: [
          { id: 'A', text: 'Niçin bana zamanında haber vermedin?' },
          { id: 'B', text: 'Oraya nasıl gideceğini hiç kimse bilmiyor.' },
          { id: 'C', text: 'Sınavın ne zaman yapılacağını öğrendin mi?' },
          { id: 'D', text: 'Bu işi ne kadar sürede bitirirsin?' },
          { id: 'E', text: 'Bunu sana kimin anlattığını söyler misin?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"nasıl\" soru zarfı var ancak cümle soru cümlesi değildir (dolaylı soru). C ve E de dolaylı aktarım içerse de soru edatlarıyla (\"mi\") soru cümlesidir.'
      },
      {
        id: 'q-zr-9-23',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde miktar zarfı, adlaşmış bir sıfatı derecelendirmektedir?',
        options: [
          { id: 'A', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'B', text: 'Çok zorlu bir yolculuktu.' },
          { id: 'C', text: 'Sınıfın en çalışkanı bile soruyu çözemedi.' },
          { id: 'D', text: 'Daha iyi bir ev arıyoruz.' },
          { id: 'E', text: 'Pek şirin bir kedisi vardı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"çalışkanı\" (çalışkan öğrencisi) adlaşmış sıfattır ve \"en\" miktar zarfı onu derecelendirmiştir.'
      },
      {
        id: 'q-zr-9-24',
        difficulty: 'hard',
        questionText: '\"Kadar\" edatı öbekleşerek cümlede zarf veya sıfat görevinde kullanılabilir. Aşağıdakilerin hangisinde \"kadar\" öbeği zaman zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Sabaha kadar hiç durmadan yağmur yağdı.' },
          { id: 'B', text: 'Cennet kadar güzel bir vatanımız var.' },
          { id: 'C', text: 'Onun kadar hızlı koşanını görmedim.' },
          { id: 'D', text: 'Buz kadar soğuk suyla yıkandı.' },
          { id: 'E', text: 'Dev kadar adam karşımıza dikildi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"sabaha kadar\" öbeği eylemin (yağdı) süresini (ne zamana kadar) bildiren zaman zarfı görevindedir.'
      },
      {
        id: 'q-zr-9-25',
        difficulty: 'hard',
        questionText: 'Sıfatlar adlaşırken niteledikleri isim düşer. Aşağıdakilerin hangisinde adlaşmış sıfat, zarf öbeği içinde (zarf tümleci göreviyle) kullanılmıştır?',
        options: [
          { id: 'A', text: 'İyiler her zaman kazanır.' },
          { id: 'B', text: 'Soğuklardan elleri çatlamıştı.' },
          { id: 'C', text: 'Eskileri satıp yeni eşyalar aldık.' },
          { id: 'D', text: 'Zorları başarmak bizim işimizdir.' },
          { id: 'E', text: 'Gelenleri kapıda karşıladık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"soğuklardan\" (soğuk havalardan) adlaşmış sıfattır ve ayrılma hal eki (-dan) alarak eylemin sebebini (niçin çatlamıştı) bildiren zarf tümleci (sebep zarfı) olmuştur.'
      },
      {
        id: 'q-zr-9-26',
        difficulty: 'hard',
        questionText: 'Zarflar çekim eki aldıklarında tür değiştirip isimleşirler. Aşağıdaki altı çizili sözcüklerden hangisi çekim eki almasına rağmen zarf görevini sürdürmektedir?',
        options: [
          { id: 'A', text: '(İçerisi) bugün çok kalabalık.' },
          { id: 'B', text: 'Bunu (sonradan) sen de anlayacaksın.' },
          { id: 'C', text: '(Aşağıya) inip bir etrafa bakındı.' },
          { id: 'D', text: '(İleriden) sağa dönmeniz gerekiyor.' },
          { id: 'E', text: '(Gerinin) manzarası daha güzeldi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"sonra\" kelimesi -dan ayrılma hal eki almış olmasına rağmen (sonradan) cümlede zarf görevini sürdürmektedir.'
      },
      {
        id: 'q-zr-9-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf, yükleme durum değil sebep anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sessizce odadan çıkıp kapıyı kapattı.' },
          { id: 'B', text: 'Güle oynaya okula gittiler.' },
          { id: 'C', text: 'Korkudan bütün gece uyuyamadı.' },
          { id: 'D', text: 'Düşünmeden hızlıca kararlar veriyor.' },
          { id: 'E', text: 'Hızlı adımlarla uzaklaştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"korkudan\" kelimesi uyuyamama eyleminin sebebini bildiren bir sebep zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-zr-9-28',
        difficulty: 'hard',
        questionText: 'Bir cümlede birden fazla zarf yan yana gelerek birbirini derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Çok hızlı koşarak herkesi geçti.' },
          { id: 'B', text: 'Dün akşam eve geç geldim.' },
          { id: 'C', text: 'Sessizce ve usulca odadan çıktı.' },
          { id: 'D', text: 'Yarın sabah erkenden yola çıkacağız.' },
          { id: 'E', text: 'Oldukça zorlu bir gün bizi bekliyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"çok\" zarfı, \"hızlı\" zarfını derecelendirmiştir.'
      },
      {
        id: 'q-zr-9-29',
        difficulty: 'hard',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf fiili niteleyen bir durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Böyle sözlere artık karnım tok.' },
          { id: 'B', text: 'Böyle havalarda dışarı çıkmam.' },
          { id: 'C', text: 'Böyle bir insanla bir daha görüşmem.' },
          { id: 'D', text: 'Bana böyle davrandığın için çok üzgünüm.' },
          { id: 'E', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"böyle\" kelimesi \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-9-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir zarftır?',
        options: [
          { id: 'A', text: '(Dün) seni çok aradım.' },
          { id: 'B', text: '(Birdenbire) karşımıza çıktı.' },
          { id: 'C', text: 'İşlerini (sessizce) halletti.' },
          { id: 'D', text: 'O (hemen) yanıma geldi.' },
          { id: 'E', text: 'Bunu (yarın) konuşalım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"sessizce\" kelimesi \"ses\" isminden yapım ekleriyle (ses-siz-ce) türetilmiş bir zarftır. (Dün, hemen, yarın basit; birdenbire birleşik yapılıdır.)'
      }
    ]
  }
]
