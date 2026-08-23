export default [
  {
    id: 'test-zarflar-10-kolay',
    title: 'Zarflar 10 (Kolay)',
    description: 'Zarflar - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-zr-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı (belirteci) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bugün hava oldukça güneşliydi.' },
          { id: 'B', text: 'Yarın arkadaşlarla toplanacağız.' },
          { id: 'C', text: 'Geçen hafta seni çok aradım.' },
          { id: 'D', text: 'Oraya nasıl gideceğimizi bilmiyorum.' },
          { id: 'E', text: 'Akşam yemeğini dışarıda yedik.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde zaman zarfı yoktur, \"nasıl\" soru zarfı kullanılmıştır. A\'da bugün, B\'de yarın, C\'de geçen hafta, E\'de akşam zaman zarflarıdır.'
      },
      {
        id: 'q-zr-10-2',
        difficulty: 'easy',
        questionText: '\"Çok\" sözcüğü aşağıdakilerin hangisinde miktar zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çok insan bu konuda hatalı düşünüyor.' },
          { id: 'B', text: 'Bugün çok para harcadım.' },
          { id: 'C', text: 'Oda çok dağınık görünüyor.' },
          { id: 'D', text: 'Oraya çok kitap götürdük.' },
          { id: 'E', text: 'Çok eşya taşımaktan yoruldum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"çok\" sözcüğü \"dağınık\" adlaşmış sıfatını / yüklemi derecelendiren miktar zarfıdır. Diğer seçeneklerde isimleri nitelediğinden belgisiz sıfattır.'
      },
      {
        id: 'q-zr-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Aşağıya inip bir bardak su aldı.' },
          { id: 'B', text: 'İlerisi oldukça aydınlık görünüyor.' },
          { id: 'C', text: 'Lütfen biraz içeri girin.' },
          { id: 'D', text: 'Dışarıda fırtına koptu.' },
          { id: 'E', text: 'Yukarıdan gürültüler geliyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"içeri\" kelimesi ismin hâl ekini almadan eylemi (girin) belirttiği için yer-yön zarfıdır. A, B, D ve E seçeneklerinde ek alarak isimleşmiştir.'
      },
      {
        id: 'q-zr-10-4',
        difficulty: 'easy',
        questionText: '\"Hemen\" sözcüğü aşağıdakilerin hangisinde zaman zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hemen yanıbaşımda duruyordu.' },
          { id: 'B', text: 'Oraya hemen gideceğim.' },
          { id: 'C', text: 'Hemen hemen on yıldır tanışıyoruz.' },
          { id: 'D', text: 'Okul hemen şu tepenin arkasında.' },
          { id: 'E', text: 'Evleri hemen yolun kenarındaydı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"hemen\" sözcüğü çabukluk (zaman) bildirerek zaman zarfı olmuştur. C\'de miktar/olasılık, A, D ve E\'de yer pekiştirmesi görevindedir.'
      },
      {
        id: 'q-zr-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Kiminle tiyatroya gideceksiniz?' },
          { id: 'B', text: 'Bu evrakları nereden aldın?' },
          { id: 'C', text: 'Niçin bana kızgın görünüyorsun?' },
          { id: 'D', text: 'Hangi takımı tutuyorsun?' },
          { id: 'E', text: 'Bu kitabı sana kim tavsiye etti?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"niçin\" sözcüğü eylemin sebebini soran bir soru zarfıdır. A, B, E zamir; D ise sıfattır.'
      },
      {
        id: 'q-zr-10-6',
        difficulty: 'easy',
        questionText: '\"Doğru\" sözcüğü aşağıdakilerin hangisinde durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Doğru bir karar verdiğini düşünüyorum.' },
          { id: 'B', text: 'Her zaman doğruyu söylemelisin.' },
          { id: 'C', text: 'Okula doğru yürürken yağmura yakalandık.' },
          { id: 'D', text: 'Bu soruları doğru çözmüşsün.' },
          { id: 'E', text: 'Doğru insanlar her zaman kazanır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"doğru\" sözcüğü \"çözmüşsün\" eylemini nitelediği için durum zarfıdır. A ve E\'de sıfat, B\'de isim, C\'de edat (doğru) görevindedir.'
      },
      {
        id: 'q-zr-10-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirilmiş bir kelime durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Masmavi denize baka baka uyuduk.' },
          { id: 'B', text: 'Odasını tertemiz yapmış.' },
          { id: 'C', text: 'Kıpkırmızı güller aldı bana.' },
          { id: 'D', text: 'Bembeyaz karlar her tarafı kapladı.' },
          { id: 'E', text: 'Sımsıcak bir ekmek alıp eve döndüm.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"tertemiz\" kelimesi \"yapmış\" fiilini nitelediği için durum zarfıdır. Diğer seçeneklerde sıfattır.'
      },
      {
        id: 'q-zr-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin miktarını bildiren bir zarf yoktur?',
        options: [
          { id: 'A', text: 'Sınava fazla çalışmamış.' },
          { id: 'B', text: 'Bugünlerde biraz yorgunum.' },
          { id: 'C', text: 'Beni çok iyi anladığını biliyorum.' },
          { id: 'D', text: 'Seni yarın tekrar arayacağım.' },
          { id: 'E', text: 'Bu yemekten az yemelisin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yarın\" (zaman) ve \"tekrar\" (durum/zaman) zarfları vardır, miktar zarfı yoktur. Diğer seçeneklerde miktar zarfı vardır (fazla, biraz, çok, az).'
      },
      {
        id: 'q-zr-10-9',
        difficulty: 'easy',
        questionText: '\"Yavaş\" kelimesi aşağıdakilerin hangisinde durum zarfı olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yavaş konuşursan seni anlayabilirim.' },
          { id: 'B', text: 'Arabayı yavaş kullanıyor.' },
          { id: 'C', text: 'Merdivenleri yavaş çıkmalısın.' },
          { id: 'D', text: 'Kapıyı çok yavaş araladı.' },
          { id: 'E', text: 'O her zaman yavaş bir insandı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"yavaş\" kelimesi \"insan\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-10-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava çok güzel.' },
          { id: 'B', text: 'Oraya yarın gideceğim.' },
          { id: 'C', text: 'Dün akşam sessizce odasına çekildi.' },
          { id: 'D', text: 'Hızlıca yerinden kalktı.' },
          { id: 'E', text: 'Bunu nasıl çözdüğünü anlatır mısın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"dün akşam\" (zaman zarfı) ve \"sessizce\" (durum zarfı) olmak üzere birden fazla zarf kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-zarflar-10-orta',
    title: 'Zarflar 10 (Orta)',
    description: 'Zarflar - Orta (91-100)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-zr-10-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat öbeği zaman zarfı (zarf tümleci) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun için bu kadar uğraşıyorum.' },
          { id: 'B', text: 'Güneş batana kadar dışarıda oynadık.' },
          { id: 'C', text: 'Buz gibi su içince hastalandı.' },
          { id: 'D', text: 'Eve doğru yürürken onu gördüm.' },
          { id: 'E', text: 'Aslan gibi adam bir anda yaşlandı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Güneş batana kadar\" edat öbeği eylemin (oynadık) zamanını (ne zamana kadar) bildiren bir zaman zarfıdır.'
      },
      {
        id: 'q-zr-10-12',
        difficulty: 'medium',
        questionText: '\"Ne\" sözcüğü aşağıdakilerin hangisinde miktar zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğum günümde ne alacaksın?' },
          { id: 'B', text: 'Ne tür müziklerden hoşlanırsın?' },
          { id: 'C', text: 'Ne ağlayıp sızlanıyorsun sabahtan beri?' },
          { id: 'D', text: 'Ne güzel bir elbise giymişsin!' },
          { id: 'E', text: 'Bu araba için ne kadar para ödedin?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"ne\" sözcüğü \"ne kadar (çok)\" anlamında kullanılmış olup \"güzel\" sıfatını derecelendiren miktar zarfıdır.'
      },
      {
        id: 'q-zr-10-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı, yüklemin bildirdiği işin ne kadar süreceğini (süresini) bildirmektedir?',
        options: [
          { id: 'A', text: 'Akşamleyin hep beraber toplanacağız.' },
          { id: 'B', text: 'Yarın bu konuyu tekrar görüşeceğiz.' },
          { id: 'C', text: 'Üç saat boyunca hiç durmadan çalıştık.' },
          { id: 'D', text: 'Az önce seni birisi sordu.' },
          { id: 'E', text: 'Şimdi seninle gelemem.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Üç saat boyunca\" zarfı, eylemin (çalıştık) \"ne kadar sürdüğünü\" (süresini) belirtmektedir.'
      },
      {
        id: 'q-zr-10-14',
        difficulty: 'medium',
        questionText: '\"Yalnız\" kelimesi aşağıdakilerin hangisinde zarf fiil öbeğini niteleyen bir zarftır?',
        options: [
          { id: 'A', text: 'Yalnız insanların sorunları her zaman büyüktür.' },
          { id: 'B', text: 'Sokakta yalnız yürürken eski bir arkadaşımı gördüm.' },
          { id: 'C', text: 'Bunu yalnız seninle çözebiliriz.' },
          { id: 'D', text: 'O büyük evde yıllarca yalnız kaldı.' },
          { id: 'E', text: 'Yalnızlık Allah\'a mahsustur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"yalnız\" sözcüğü \"yürürken\" zarf-fiilini niteleyen durum zarfıdır.'
      },
      {
        id: 'q-zr-10-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yönelme eki (-e, -a) almış sözcük cümlede zarf (zarf tümleci) görevindedir?',
        options: [
          { id: 'A', text: 'Okula gitmek için çok erken uyandı.' },
          { id: 'B', text: 'Yarına kadar bu projeyi teslim etmeliyim.' },
          { id: 'C', text: 'Denize girmeyi hiçbir zaman sevmedi.' },
          { id: 'D', text: 'Dışarıya çıkarken mutlaka montunu al.' },
          { id: 'E', text: 'Bana doğruyu söylemediğini biliyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Yarına (kadar)\" sözcüğü yönelme eki alarak cümleye zaman anlamı katmıştır (zaman zarfı / zarf tümleci). Diğer seçeneklerde isim veya dolaylı tümleç görevlerindedir.'
      },
      {
        id: 'q-zr-10-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı farklı bir sözcük türünü derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Oldukça zor bir gün geçirdik.' },
          { id: 'B', text: 'Daha güzel bir ev bulamadık.' },
          { id: 'C', text: 'Çok büyük bir hata yaptık.' },
          { id: 'D', text: 'Pek sevimli bir köpeği vardı.' },
          { id: 'E', text: 'Çok hızlı koşarak herkesi şaşırttı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde miktar zarfları sıfatları derecelendirirken, E seçeneğinde \"çalışarak/koşarak\" zarf-fiilini (veya hızlı zarfını) derecelendirmiştir.'
      },
      {
        id: 'q-zr-10-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Güneş doğarken yola çıktık.' },
          { id: 'B', text: 'Seni görünce çok sevindim.' },
          { id: 'C', text: 'Kar yağınca her yer bembeyaz oldu.' },
          { id: 'D', text: 'Okullar açılalı işlerimiz yoğunlaştı.' },
          { id: 'E', text: 'Sessizce durup etrafı izledik.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde zarf-fiil öbeği cümleye zaman (ne zaman) anlamı katarken, E seçeneğinde \"durup\" eylemin durumunu (nasıl) belirtmektedir.'
      },
      {
        id: 'q-zr-10-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme durum zarfı görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Koşa koşa yanıma geldi.' },
          { id: 'B', text: 'Derin derin nefes alarak rahatladı.' },
          { id: 'C', text: 'Konuyu bana uzun uzun anlattı.' },
          { id: 'D', text: 'Yalan yanlış bilgilerle bizi oyaladı.' },
          { id: 'E', text: 'Bata çıka ilerliyorduk karlı yollarda.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yalan yanlış\" ikilemesi \"bilgiler\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-10-19',
        difficulty: 'medium',
        questionText: 'Yer-yön bildiren sözcükler ek aldıklarında zarf olmaktan çıkarlar. Aşağıdakilerin hangisinde yer-yön zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Aşağı mahallede bir toplantı yapılacak.' },
          { id: 'B', text: 'İlerisi oldukça karanlık görünüyor.' },
          { id: 'C', text: 'Dışarısı bugün çok soğuk.' },
          { id: 'D', text: 'Lütfen biraz geri çekilir misiniz?' },
          { id: 'E', text: 'Yukarıdan gürültüler geliyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"geri\" sözcüğü hiçbir ek almadan fiili (çekilir misiniz) belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-10-20',
        difficulty: 'medium',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Böyle havalarda dışarı çıkmam.' },
          { id: 'B', text: 'Bana böyle davrandığın için çok kırgınım.' },
          { id: 'C', text: 'Böyle bir insanla bir daha görüşmem.' },
          { id: 'D', text: 'Böyle sözlere artık tahammülüm kalmadı.' },
          { id: 'E', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"böyle\" kelimesi \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğer seçeneklerde isimleri nitelediği için sıfattır.'
      }
    ]
  },
  {
    id: 'test-zarflar-10-zor',
    title: 'Zarflar 10 (Zor)',
    description: 'Zarflar - Zor (91-100)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-zr-10-21',
        difficulty: 'hard',
        questionText: 'Zarflar bazen cümlenin bütününü niteleyebilir veya cümleye olasılık, kesinlik gibi anlamlar katabilir. Aşağıdakilerin hangisinde cümleye kesinlik katan bir zarf vardır?',
        options: [
          { id: 'A', text: 'Belki yarın size uğrarım.' },
          { id: 'B', text: 'Sanırım bu işin sonu iyi bitmeyecek.' },
          { id: 'C', text: 'Seni mutlaka o toplantıda görmek istiyorum.' },
          { id: 'D', text: 'Galiba hepimiz aynı hatayı yapıyoruz.' },
          { id: 'E', text: 'Umarım her şey yolunda gider.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki \"mutlaka\" kelimesi cümleye kesinlik anlamı katan bir durum (kesinlik) zarfıdır. A, B ve D seçeneklerinde olasılık (ihtimal) zarfı vardır.'
      },
      {
        id: 'q-zr-10-22',
        difficulty: 'hard',
        questionText: 'Soru anlamı sağlayan sözcükler cümlede soru zarfı olabilir. Aşağıdaki cümlelerin hangisinde soru zarfı dolaylı soru cümlesi içinde yer almıştır?',
        options: [
          { id: 'A', text: 'Niçin bana zamanında haber vermedin?' },
          { id: 'B', text: 'Oraya nasıl gideceğini hiç kimse bilmiyor.' },
          { id: 'C', text: 'Sınavın ne zaman yapılacağını öğrendin mi?' },
          { id: 'D', text: 'Bu işi ne kadar sürede bitirirsin?' },
          { id: 'E', text: 'Bunu sana kimin anlattığını söyler misin?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"nasıl\" soru zarfı vardır ancak cümle soru cümlesi değildir, soru dolaylı yoldan aktarılmıştır.'
      },
      {
        id: 'q-zr-10-23',
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
        id: 'q-zr-10-24',
        difficulty: 'hard',
        questionText: '\"Kadar\" edatı öbekleşerek cümlede zarf veya sıfat görevinde kullanılabilir. Aşağıdakilerin hangisinde \"kadar\" öbeği zaman zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Sabaha kadar hiç durmadan ders çalıştı.' },
          { id: 'B', text: 'Cennet kadar güzel bir vatanımız var.' },
          { id: 'C', text: 'Onun kadar hızlı koşanını görmedim.' },
          { id: 'D', text: 'Buz kadar soğuk suyla yıkandı.' },
          { id: 'E', text: 'Dev kadar adam karşımıza dikildi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"sabaha kadar\" öbeği eylemin ne zamana kadar (süresini) yapıldığını bildiren zaman zarfı görevindedir. Diğer seçeneklerde sıfat öbeğidir.'
      },
      {
        id: 'q-zr-10-25',
        difficulty: 'hard',
        questionText: 'Sıfatlar adlaşırken niteledikleri isim düşer. Aşağıdakilerin hangisinde adlaşmış sıfat, zarf öbeği içinde (zarf tümleci göreviyle) kullanılmıştır?',
        options: [
          { id: 'A', text: 'İyiler her zaman kazanır.' },
          { id: 'B', text: 'Soğuklardan elleri çatlamıştı.' },
          { id: 'C', text: 'Eskileri satıp yeni eşyalar aldık.' },
          { id: 'D', text: 'Zorları başarmak bizim işimizdir.' },
          { id: 'E', text: 'Gelenleri kapıda tek tek karşıladık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"soğuklardan\" (soğuk havalardan) adlaşmış sıfattır ve ayrılma hal eki (-dan) alarak eylemin sebebini (niçin çatlamıştı) bildiren sebep zarfı (zarf tümleci) olmuştur.'
      },
      {
        id: 'q-zr-10-26',
        difficulty: 'hard',
        questionText: 'Zarflar çekim eki aldıklarında tür değiştirip isimleşirler. Aşağıdaki altı çizili sözcüklerden hangisi çekim eki almasına rağmen zarf görevini sürdürmektedir?',
        options: [
          { id: 'A', text: '(İçerisi) bugün çok sıcak olmuş.' },
          { id: 'B', text: 'Bunu (sonradan) sen de anlayacaksın.' },
          { id: 'C', text: '(Aşağıya) inip bir etrafa bakındı.' },
          { id: 'D', text: '(İleriden) sağa dönmeniz gerekiyor.' },
          { id: 'E', text: '(Yukarıdan) garip sesler duyuluyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"sonra\" kelimesi -dan ayrılma hal eki almış olmasına rağmen (sonradan) cümlede zaman/durum zarfı görevini sürdürmektedir.'
      },
      {
        id: 'q-zr-10-27',
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
        id: 'q-zr-10-28',
        difficulty: 'hard',
        questionText: 'Bir cümlede birden fazla zarf yan yana gelerek birbirini derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Çok hızlı koşarak herkesi geçti.' },
          { id: 'B', text: 'Dün akşam eve geç geldim.' },
          { id: 'C', text: 'Sessizce ve usulca odadan çıktı.' },
          { id: 'D', text: 'Yarın sabah erkenden yola çıkacağız.' },
          { id: 'E', text: 'Oldukça zorlu bir görev bizi bekliyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"çok\" miktar zarfı, \"hızlı\" zarfını derecelendirmiştir.'
      },
      {
        id: 'q-zr-10-29',
        difficulty: 'hard',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf fiili niteleyen bir durum zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Böyle sözlere artık tahammülüm kalmadı.' },
          { id: 'B', text: 'Böyle havalarda dışarı çıkmam.' },
          { id: 'C', text: 'Böyle bir insanla bir daha görüşmem.' },
          { id: 'D', text: 'Bana böyle davrandığın için çok üzgünüm.' },
          { id: 'E', text: 'Böyle fırsatlar insanın eline her zaman geçmez.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"böyle\" kelimesi \"davrandığın\" (fiilimsi) sözcüğünü niteleyerek durum zarfı olmuştur. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-10-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir zarftır?',
        options: [
          { id: 'A', text: '(Dün) seni çok aradım.' },
          { id: 'B', text: '(Birdenbire) karşımıza çıktı.' },
          { id: 'C', text: 'İşlerini (düzgünce) halletti.' },
          { id: 'D', text: 'O (hemen) yanıma geldi.' },
          { id: 'E', text: 'Bunu (yarın) konuşalım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"düzgünce\" kelimesi \"düzgün\" isminden yapım eki (-ce) alarak türetilmiş bir zarftır. (Dün, hemen, yarın basit; birdenbire birleşik yapılıdır.)'
      }
    ]
  }
]
