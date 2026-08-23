export default [
  {
    id: 'test-ebu-1-kolay',
    title: 'Edat Bağlaç Ünlem 1 (Kolay)',
    description: 'Edat Bağlaç Ünlem - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-ebu-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ile" sözcüğü bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okula otobüs ile gidiyor.' },
          { id: 'B', text: 'Bu işi sevgi ile yapmalısın.' },
          { id: 'C', text: 'Kalemi ile silgisini masada unutmuş.' },
          { id: 'D', text: 'Yazılarını eski bir daktilo ile yazardı.' },
          { id: 'E', text: 'Kardeşi ile sinemaya gitmek için anlaştı.' }
        ],
        correctOptionId: 'C',
        explanation: '"İle" sözcüğü yerine "ve" getirilebiliyorsa bağlaç, getirilemiyorsa edattır. C seçeneğinde "Kalemi ve silgisini..." denebildiği için bağlaçtır.'
      },
      {
        id: 'q-ebu-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava çok güzel.' },
          { id: 'B', text: 'Yarın sabah erkenden kalkacağım.' },
          { id: 'C', text: 'Eyvah, cüzdanımı evde unutmuşum!' },
          { id: 'D', text: 'Kitap okumayı çok seviyor.' },
          { id: 'E', text: 'Dışarıda hafif bir yağmur var.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Eyvah" sözcüğü bir duygu (korku, telaş) bildirdiği için ünlem görevindedir.'
      },
      {
        id: 'q-ebu-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "için" edatı, cümleye neden-sonuç (sebep) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu hediyeyi senin için aldım.' },
          { id: 'B', text: 'Yarınki toplantı için hazırlık yapıyor.' },
          { id: 'C', text: 'Çok çalıştığı için sınavdan yüksek not aldı.' },
          { id: 'D', text: 'Sizin için her zaman iyi şeyler söylerdi.' },
          { id: 'E', text: 'Tatil için plan yapmaya başladık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çok çalıştığı için" ifadesi, yüksek not almasının nedenini bildirmektedir.'
      },
      {
        id: 'q-ebu-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcük bağlaç değildir?',
        options: [
          { id: 'A', text: 'Hem çalışıyor hem okuyor.' },
          { id: 'B', text: 'Ne aradı ne sordu.' },
          { id: 'C', text: 'Gelecektim ancak işim çıktı.' },
          { id: 'D', text: 'Senin kadar çalışkan birini görmedim.' },
          { id: 'E', text: 'Çalıştı fakat başaramadı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "kadar" sözcüğü benzerlik/ölçü ilgisi kuran bir edattır, bağlaç değildir.'
      },
      {
        id: 'q-ebu-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşamki maçı kim kazandı?' },
          { id: 'B', text: 'Bendeki kitapları sana verebilirim.' },
          { id: 'C', text: 'Yarınki toplantıya katılacak mısın?' },
          { id: 'D', text: 'O kadar yorgundu ki hemen uyudu.' },
          { id: 'E', text: 'Masadaki bardakları mutfağa götür.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ki" ayrı yazılmıştır ve iki yargıyı birbirine bağlayan bağlaç görevindedir. Diğerleri sıfat yapan yapım eki olan "-ki"dir.'
      },
      {
        id: 'q-ebu-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerde geçen edatlardan hangisi cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sabaha karşı eve döndüler.' },
          { id: 'B', text: 'Buz gibi suyu bir dikişte içti.' },
          { id: 'C', text: 'Bana göre bu iş burada bitti.' },
          { id: 'D', text: 'Mektubu yazdığı gibi gönderdi.' },
          { id: 'E', text: 'Senin için her şeyi yaparım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "karşı" edatı "sabaha karşı" şeklinde kullanılarak cümleye zaman anlamı katmıştır.'
      },
      {
        id: 'q-ebu-1-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ve" bağlacı nesneleri bağlamıştır?',
        options: [
          { id: 'A', text: 'Ali ve Ayşe yarın bize gelecek.' },
          { id: 'B', text: 'Kitabını ve defterini çantasına koydu.' },
          { id: 'C', text: 'İçeri girdi ve yerine oturdu.' },
          { id: 'D', text: 'Hızlı ve dikkatli yürümelisin.' },
          { id: 'E', text: 'Kırmızı ve mavi kalemleri severim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kitabını ve defterini" belirtili nesnelerdir, "ve" bağlacı nesneleri bağlamıştır.'
      },
      {
        id: 'q-ebu-1-8',
        difficulty: 'easy',
        questionText: '"Gibi" edatı aşağıdaki cümlelerin hangisine benzetme anlamı katmamıştır?',
        options: [
          { id: 'A', text: 'Pamuk gibi elleri vardı.' },
          { id: 'B', text: 'Aslan gibi bir askerdi.' },
          { id: 'C', text: 'Zaman su gibi akıp geçiyor.' },
          { id: 'D', text: 'İşi bitirdiği gibi dışarı fırladı.' },
          { id: 'E', text: 'Cennet gibi bir vatanımız var.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gibi" edatı benzetme değil, "hemen, o anda, tezlik" anlamı katmıştır.'
      },
      {
        id: 'q-ebu-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde seslenme bildiren bir ünlem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Vah vah, zavallı adam!' },
          { id: 'B', text: 'Hey, buraya gelin!' },
          { id: 'C', text: 'Aman, ne yaparsa yapsın!' },
          { id: 'D', text: 'Tüh, otobüsü kaçırdık!' },
          { id: 'E', text: 'Oh, be dünya varmış!' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Hey" ünlemi, birilerine seslenmek, dikkat çekmek amacıyla kullanılmıştır.'
      },
      {
        id: 'q-ebu-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "da/de" bağlacı cümleye "eşitlik, gibilik" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sen de benim gibi çalışmalısın.' },
          { id: 'B', text: 'Oraya gittim de onu göremedim.' },
          { id: 'C', text: 'Çalıştı da başardı.' },
          { id: 'D', text: 'Büyüyecek de adam olacak.' },
          { id: 'E', text: 'Kitabı okudum da pek anlamadım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "de" bağlacı, başkaları çalışıyor, sen de onlar gibi olmalısın (eşitlik/katılma) anlamı katmıştır.'
      }
    ]
  },
  {
    id: 'test-ebu-1-orta',
    title: 'Edat Bağlaç Ünlem 1 (Orta)',
    description: 'Edat Bağlaç Ünlem - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-ebu-1-11',
        difficulty: 'medium',
        questionText: '"Yalnız" sözcüğü aşağıdaki cümlelerin hangisinde bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu zor günlerinde hep yalnızdı.' },
          { id: 'B', text: 'Seni anlıyorum yalnız elimden bir şey gelmiyor.' },
          { id: 'C', text: 'İhtiyar adam koca evde yalnız yaşıyordu.' },
          { id: 'D', text: 'Bu problemi yalnız sen çözebilirsin.' },
          { id: 'E', text: 'Yalnız insanların sorunları daha farklıdır.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yalnız" sözcüğü "ama, fakat" anlamında kullanılırsa bağlaçtır. B seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-1-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem, bir cümleden oluşmuştur?',
        options: [
          { id: 'A', text: 'Eyvah, geç kaldık!' },
          { id: 'B', text: 'Yandım Allah!' },
          { id: 'C', text: 'Allah kahretsin!' },
          { id: 'D', text: 'Ah, eski günler!' },
          { id: 'E', text: 'Aferin sana!' }
        ],
        correctOptionId: 'C',
        explanation: '"Allah kahretsin!" ifadesi çekimli bir eylem içerdiği için cümle biçiminde bir ünlemdir (duygu aktarır).'
      },
      {
        id: 'q-ebu-1-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde edat veya bağlaç kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Gözlerin bir pınar gibi serin.' },
          { id: 'B', text: 'Seni gördüm ve tutuldum.' },
          { id: 'C', text: 'Bir akşam vakti geldin ansızın.' },
          { id: 'D', text: 'Ne doğan güne hükmüm geçer ne halden anlayan bulunur.' },
          { id: 'E', text: 'Benim için ne ağla ne sızla.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde edat veya bağlaç yoktur. Diğerlerinde "gibi", "ve", "ne...ne", "için" vardır.'
      },
      {
        id: 'q-ebu-1-14',
        difficulty: 'medium',
        questionText: '"İle" sözcüğü hangisinde ötekilerden farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bıçak ile ekmeği kesti.' },
          { id: 'B', text: 'Otobüs ile gelecekmiş.' },
          { id: 'C', text: 'Arkadaşı ile ders çalıştı.' },
          { id: 'D', text: 'Şiir ile roman en sevdiği türlerdir.' },
          { id: 'E', text: 'Hüzün ile karışık bir mutluluktu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde "ile" edat görevindedir. D seçeneğinde ise "ve" anlamında kullanıldığı için bağlaçtır.'
      },
      {
        id: 'q-ebu-1-15',
        difficulty: 'medium',
        questionText: '"Doğru" sözcüğü hangisinde edat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bize her zaman doğruyu söyle.' },
          { id: 'B', text: 'Tahtaya uzun bir doğru çizdi.' },
          { id: 'C', text: 'Doğru insanlar her zaman kazanır.' },
          { id: 'D', text: 'Olayı doğru anlattığına emin misin?' },
          { id: 'E', text: 'Akşama doğru hava iyice soğudu.' }
        ],
        correctOptionId: 'E',
        explanation: '"Doğru" sözcüğü "-e doğru" şeklinde yön bildirdiğinde edattır. E seçeneğinde edattır.'
      },
      {
        id: 'q-ebu-1-16',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcüklerin türü sırasıyla doğru verilmiştir?\nI. *Ancak* sen anlarsın beni.\nII. Gelirim *ancak* fazla kalamam.',
        options: [
          { id: 'A', text: 'Bağlaç - Edat' },
          { id: 'B', text: 'Edat - Bağlaç' },
          { id: 'C', text: 'Zarf - Bağlaç' },
          { id: 'D', text: 'Edat - Zarf' },
          { id: 'E', text: 'Bağlaç - Zarf' }
        ],
        correctOptionId: 'B',
        explanation: '"Ancak" sözcüğü "sadece" anlamındaysa edat, "fakat, ama" anlamındaysa bağlaçtır. I. edat, II. bağlaçtır.'
      },
      {
        id: 'q-ebu-1-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" soru edatı cümleye pekiştirme anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın sen de mi geliyorsun?' },
          { id: 'B', text: 'Güzel mi güzel bir evi vardı.' },
          { id: 'C', text: 'Bu akşam dışarı çıkalım mı?' },
          { id: 'D', text: 'Beni arayan Ali miydi?' },
          { id: 'E', text: 'Yağmur yağdı mı işler zorlaşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde ikilemenin arasına giren "mi", "çok güzel" anlamı vererek pekiştirme yapmıştır.'
      },
      {
        id: 'q-ebu-1-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlemden sonraki cümlenin ilk harfi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Ah! Ne güzel bir gün.' },
          { id: 'B', text: 'Eyvah! Anahtarımı içeride unuttum.' },
          { id: 'C', text: 'Hey! buraya baksana.' },
          { id: 'D', text: 'Aman! Boş ver bunları.' },
          { id: 'E', text: 'Tüh! Yine kaçırdık.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ünlem işaretinden (!) sonra başlayan cümle büyük harfle başlamalıdır. C seçeneğinde "buraya" kelimesi küçük harfle başlamıştır.'
      },
      {
        id: 'q-ebu-1-19',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde edat görevindedir?',
        options: [
          { id: 'A', text: 'Bana bir elma verir misin?' },
          { id: 'B', text: 'Onu sadece bir kez gördüm.' },
          { id: 'C', text: 'Seninle bir daha görüşmek istemiyor.' },
          { id: 'D', text: 'Bu işi bir sen başarabilirsin.' },
          { id: 'E', text: 'Bir gün mutlaka dönecek.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bir" sözcüğü "sadece, tek" anlamında kullanıldığında edattır. D seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-1-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı cümleye "neden-sonuç" ilgisi katmıştır?',
        options: [
          { id: 'A', text: 'Anladım ki bu iş böyle olmayacak.' },
          { id: 'B', text: 'Çok çalışmış ki yüksek puan almış.' },
          { id: 'C', text: 'Öyle güzel ki anlatamam.' },
          { id: 'D', text: 'Bir şey biliyor ki konuşuyor.' },
          { id: 'E', text: 'Dışarı çık ki hava alasın.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Bir şey bildiği için konuşuyor" anlamı vardır, "ki" bağlacı sebep-sonuç ilgisi kurmuştur.'
      }
    ]
  },
  {
    id: 'test-ebu-1-zor',
    title: 'Edat Bağlaç Ünlem 1 (Zor)',
    description: 'Edat Bağlaç Ünlem - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-ebu-1-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, cümlenin ögelerinden birini ortak kılmıştır?',
        options: [
          { id: 'A', text: 'Ne kendi etti rahat ne âleme verdi huzur.' },
          { id: 'B', text: 'Hem suçlu hem de güçlü görünüyor.' },
          { id: 'C', text: 'Kitabı aldı ve hemen okumaya başladı.' },
          { id: 'D', text: 'O da bizimle gelecekti ama vazgeçti.' },
          { id: 'E', text: 'Ne sen beni unut ne de ben seni.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ve" bağlacı iki cümleyi bağlamıştır, ikinci cümledeki "okumaya başladı" eylemini yapan gizli özne "o", ilk cümlenin öznesiyle ortaktır. (O, kitabı aldı ve o, okumaya başladı).'
      },
      {
        id: 'q-ebu-1-22',
        difficulty: 'hard',
        questionText: '"Karşı" sözcüğü hangisinde ötekilerden farklı bir sözcük türündedir?',
        options: [
          { id: 'A', text: 'Denize karşı oturup çayımızı yudumladık.' },
          { id: 'B', text: 'Karşı binada yeni bir yangın çıkmış.' },
          { id: 'C', text: 'Sabaha karşı yola çıkmayı planlıyoruz.' },
          { id: 'D', text: 'Bana karşı olan tutumu hiç hoş değildi.' },
          { id: 'E', text: 'Gerçeklere karşı gözlerimizi kapatamayız.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D, E seçeneklerinde "karşı" edattır (-e karşı). B seçeneğinde ise "Karşı bina" tamlamasında sıfat görevindedir.'
      },
      {
        id: 'q-ebu-1-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Ahlar vahlar içinde bir ömür geçirdi.' },
          { id: 'B', text: 'Zavallının ahı tuttu.' },
          { id: 'C', text: 'Eyvah, yine her şeyi berbat ettik!' },
          { id: 'D', text: 'Vah vah, ne kadar da üzücü bir durum.' },
          { id: 'E', text: 'Amanın, burada neler olmuş!' }
        ],
        correctOptionId: 'B',
        explanation: '"Ah" sözcüğü normalde ünlemdir ancak isim çekim eki (-ı) alarak isimleşmiş ve "Zavallının ahı" tamlaması içinde özne görevinde kullanılmıştır.'
      },
      {
        id: 'q-ebu-1-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem edat hem de bağlaç kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bir deli rüzgâr eser sabaha karşı\nVe sen gelirsin aklıma.' },
          { id: 'B', text: 'Gözlerin gözlerime değince\nFelaketim olurdu ağlardım.' },
          { id: 'C', text: 'Sokaktayım, kimsesiz bir sokak ortasında\nYürüyorum, arkama bakmadan yürüyorum.' },
          { id: 'D', text: 'Ne hasta bekler sabahı,\nNe taze ölüyü mezar.' },
          { id: 'E', text: 'Gibi geldi bana sen\nÇok uzaklardan.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-e karşı" edat, "ve" ise bağlaçtır.'
      },
      {
        id: 'q-ebu-1-25',
        difficulty: 'hard',
        questionText: '"Başka" sözcüğü aşağıdakilerin hangisinde edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Başka insanlarla konuşmayı pek sevmezdi.' },
          { id: 'B', text: 'Burada her şey başka, herkes başka.' },
          { id: 'C', text: 'Senden başka kimseye güvenmiyorum.' },
          { id: 'D', text: 'Bu olayın başka bir boyutu daha var.' },
          { id: 'E', text: 'Bunu ondan başkası bilemez.' }
        ],
        correctOptionId: 'C',
        explanation: '"Başka" sözcüğü "-den başka" şeklinde kullanıldığında edat olur. C seçeneğinde edattır. A ve D\'de sıfat, B\'de yüklem(isim/zarf), E\'de isimleşmiş edat-zamir türevi ancak "başka-sı" iyelik eki aldığından adlaşmıştır.'
      },
      {
        id: 'q-ebu-1-26',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde altı çizili ek edat (ilgeç) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senin*le* bir ömür geçer.' },
          { id: 'B', text: 'Oda*da* kimse kalmamıştı.' },
          { id: 'C', text: 'Ev*den* çıkarken beni ara.' },
          { id: 'D', text: 'Gözleri*ni* benden ayırmadı.' },
          { id: 'E', text: 'Çocuk*lar* bahçede oynuyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "-le" eki "ile" edatının ekleşmiş biçimidir ve "ve" anlamı vermediği için edattır.'
      },
      {
        id: 'q-ebu-1-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı pekiştirme amacıyla kullanılmıştır?',
        options: [
          { id: 'A', text: 'Baktım ki kimse yok, geri döndüm.' },
          { id: 'B', text: 'O kadar güzel ki gözlerimi alamadım.' },
          { id: 'C', text: 'Bir şey biliyor ki konuşuyor.' },
          { id: 'D', text: 'Öyle korkmuş ki beti benzi atmış.' },
          { id: 'E', text: 'Sen ki benim en iyi arkadaşımsın...' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde öznenin üzerine gelen "ki" bağlacı, özneyi kuvvetlendirmek, pekiştirmek amacıyla kullanılmıştır.'
      },
      {
        id: 'q-ebu-1-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Göre - Edat' },
          { id: 'B', text: 'Çünkü - Bağlaç' },
          { id: 'C', text: 'Sanki - Edat' },
          { id: 'D', text: 'Kadar - Edat' },
          { id: 'E', text: 'Meğer - Edat' }
        ],
        correctOptionId: 'E',
        explanation: '"Meğer" sözcüğü bağlaç veya zarf olarak kullanılır, edat değildir.'
      },
      {
        id: 'q-ebu-1-29',
        difficulty: 'hard',
        questionText: '"İçin" edatı aşağıdaki cümlelerin hangisine "hakkında" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Vatan için canlarını feda ettiler.' },
          { id: 'B', text: 'Senin için çok dürüst biri diyorlar.' },
          { id: 'C', text: 'Hasta olduğu için gelemedi.' },
          { id: 'D', text: 'Bu ayakkabıyı senin için aldım.' },
          { id: 'E', text: 'Sınavı kazanmak için çok çalışıyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "senin için" ifadesi, "senin hakkında" anlamında kullanılmıştır.'
      },
      {
        id: 'q-ebu-1-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, sıfat tamlamalarını birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Güzel günler ve mutlu yarınlar bizi bekliyor.' },
          { id: 'B', text: 'Evleri ve arabaları satıp savdı.' },
          { id: 'C', text: 'Hem annesini hem babasını çok özlemişti.' },
          { id: 'D', text: 'Ya bu deveyi güdersin ya bu diyardan gidersin.' },
          { id: 'E', text: 'Uzun ve yorucu bir yolculuktan sonra geldiler.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Güzel günler" ve "mutlu yarınlar" sıfat tamlamalarıdır ve "ve" bağlacı bu iki sıfat tamlamasını bağlamıştır. E seçeneğinde ise iki sıfatı (uzun, yorucu) birbirine bağlamıştır, tamlamaları değil.'
      }
    ]
  }
];
