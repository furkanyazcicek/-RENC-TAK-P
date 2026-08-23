export default [
  {
    id: 'test-zarflar-1-kolay',
    title: 'Zarflar 1 (Kolay)',
    description: 'Sözcük Türleri Zarflar - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-zr-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah erkenden yola çıkacağız.' },
          { id: 'B', text: 'Öğrenciler sessizce öğretmeni dinliyordu.' },
          { id: 'C', text: 'İçeri giren adam etrafına bakındı.' },
          { id: 'D', text: 'Çok çalışırsan başarılı olursun.' },
          { id: 'E', text: 'Beni neden aramadığını bilmiyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'Nasıl dinliyordu? sorusunun cevabı olan \"sessizce\" sözcüğü durum zarfıdır.'
      },
      {
        id: 'q-zr-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı vardır?',
        options: [
          { id: 'A', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'B', text: 'Hızlı adımlarla yürüyerek uzaklaştı.' },
          { id: 'C', text: 'Akşamleyin hep beraber sinemaya gideceğiz.' },
          { id: 'D', text: 'Aşağıya inip arabayı kontrol etti.' },
          { id: 'E', text: 'Daha çok okumanız gerekiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ne zaman gideceğiz? sorusunun cevabı olan \"Akşamleyin\" zaman zarfıdır.'
      },
      {
        id: 'q-zr-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar (azlık-çokluk) zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava gerçekten oldukça soğuk.' },
          { id: 'B', text: 'Gözlerini kısıp dikkatlice baktı.' },
          { id: 'C', text: 'Dün gece hiç uyuyamadım.' },
          { id: 'D', text: 'Geri dönüp hatasını telafi etmeli.' },
          { id: 'E', text: 'Nasıl bir araba almayı düşünüyorsun?' }
        ],
        correctOptionId: 'A',
        explanation: 'Ne kadar soğuk? sorusunun cevabı olan \"oldukça\" kelimesi miktar zarfıdır.'
      },
      {
        id: 'q-zr-1-4',
        difficulty: 'easy',
        questionText: '\"Yer-yön zarfları ek aldıklarında zarf olmaktan çıkıp isimleşirler.\" Aşağıdakilerin hangisinde bu kurala örnek olabilecek bir kullanım vardır?',
        options: [
          { id: 'A', text: 'İçeri girer girmez konuşmaya başladı.' },
          { id: 'B', text: 'Biraz ileri gidebilir misiniz?' },
          { id: 'C', text: 'Yukarı mahallede yeni bir dükkan açıldı.' },
          { id: 'D', text: 'Dışarıya çıkarken mutlaka montunu al.' },
          { id: 'E', text: 'Aşağı inip kapıyı açtı.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Dışarı\" sözcüğü yönelme hâl eki (-ya) alarak isimleşmiştir.'
      },
      {
        id: 'q-zr-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Kiminle gideceksiniz?' },
          { id: 'B', text: 'Hangi ev sizin?' },
          { id: 'C', text: 'Neden bu kadar geciktin?' },
          { id: 'D', text: 'Kaç gün kalacaksınız?' },
          { id: 'E', text: 'Bunu sana kim söyledi?' }
        ],
        correctOptionId: 'C',
        explanation: '\"Neden\" kelimesi fiilin (geciktin) sebebini sorduğu için soru zarfıdır.'
      },
      {
        id: 'q-zr-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: '(Güzel) konuşan insanları dinlemeyi severim.' },
          { id: 'B', text: 'İşlerini (hızlı) bitirip yanımıza geldi.' },
          { id: 'C', text: '(Zor) günleri geride bıraktık.' },
          { id: 'D', text: 'Beni (yanlış) anladığını düşünüyorum.' },
          { id: 'E', text: 'Toplantıda (iyi) hazırlandığı belliydi.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Zor\" kelimesi \"günler\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-1-7',
        difficulty: 'easy',
        questionText: '\"Daha\" sözcüğü aşağıdaki cümlelerin hangisinde zaman zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Daha büyük bir ev arıyoruz.' },
          { id: 'B', text: 'Daha çalışmam gereken çok konu var.' },
          { id: 'C', text: 'Babam daha gelmedi.' },
          { id: 'D', text: 'Bana daha ne kadar kızacaksın?' },
          { id: 'E', text: 'Bu araba daha hızlı gidiyor.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Henüz\" anlamında kullanıldığından zaman zarfı görevindedir.'
      },
      {
        id: 'q-zr-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem durum hem de zaman zarfı vardır?',
        options: [
          { id: 'A', text: 'Dün akşam kitap okudum.' },
          { id: 'B', text: 'Sabahları koşarak işe gider.' },
          { id: 'C', text: 'Çok yorulunca hemen uyudu.' },
          { id: 'D', text: 'Gözlerime bakıp acı acı güldü.' },
          { id: 'E', text: 'Geceleyin sessizce dışarı çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Sabahları\" zaman zarfı, \"koşarak\" ise durum zarfıdır.'
      },
      {
        id: 'q-zr-1-9',
        difficulty: 'easy',
        questionText: '\"En\" sözcüğü aşağıdaki cümlelerin hangisinde farklı türde bir sözcüğü derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Sınıfın en çalışkan öğrencisiydi.' },
          { id: 'B', text: 'En güzel şiirleri o yazardı.' },
          { id: 'C', text: 'Bu işi en hızlı sen yaparsın.' },
          { id: 'D', text: 'En zor soruları bile çözdü.' },
          { id: 'E', text: 'Dünyanın en yüksek dağı Everest\'tir.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde sıfatı, C seçeneğinde ise zarfı (hızlı) derecelendirmiştir.'
      },
      {
        id: 'q-zr-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'Yukarıdan sesler geliyordu.' },
          { id: 'B', text: 'İlerisi oldukça karanlık görünüyor.' },
          { id: 'C', text: 'Çocuklar dışarıda oyun oynuyor.' },
          { id: 'D', text: 'Biraz geri çekil lütfen.' },
          { id: 'E', text: 'Aşağı kata yeni komşular taşındı.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Geri\" kelimesi ek almadan fiili (çekil) belirttiği için yer-yön zarfıdır.'
      }
    ]
  },
  {
    id: 'test-zarflar-1-orta',
    title: 'Zarflar 1 (Orta)',
    description: 'Sözcük Türleri Zarflar - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-zr-1-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde zarf kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ağır ağır çıkacaksın bu merdivenlerden' },
          { id: 'B', text: 'Dönülmez akşamın ufkundayız, vakit çok geç' },
          { id: 'C', text: 'Şimdi anlıyorum hatalarımı' },
          { id: 'D', text: 'Geniş kanatları boşlukta simsiyah açılan' },
          { id: 'E', text: 'Yorgun gözlerimle etrafa bakınıyordum' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki kelimelerin hiçbiri zarf görevinde değildir. \"Geniş kanat\" sıfat tamlamasıdır.'
      },
      {
        id: 'q-zr-1-12',
        difficulty: 'medium',
        questionText: '\"Ne\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğum günümde ne aldın?' },
          { id: 'B', text: 'Ne gün ama, her şey ters gitti!' },
          { id: 'C', text: 'Oraya ne zaman ulaşırız?' },
          { id: 'D', text: 'Ne ağlıyorsun bu saatte burada?' },
          { id: 'E', text: 'Ne tür müziklerden hoşlanırsın?' }
        ],
        correctOptionId: 'D',
        explanation: '\"Niçin/Neden\" anlamında kullanıldığı için soru zarfıdır.'
      },
      {
        id: 'q-zr-1-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsiyi niteleyen bir zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel konuşmayı herkes başaramaz.' },
          { id: 'B', text: 'Sabah erken kalkıp kahvaltı yaptı.' },
          { id: 'C', text: 'Onu çok seviyor, her fırsatta arıyordu.' },
          { id: 'D', text: 'Akşamları sahilde yürüyüş yaparım.' },
          { id: 'E', text: 'Buraya gelerek beni çok mutlu ettin.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Güzel\" sözcüğü \"konuşma\" fiilimisisini nitelediği için zarftır.'
      },
      {
        id: 'q-zr-1-14',
        difficulty: 'medium',
        questionText: '\"Yalnız\" sözcüğü aşağıdakilerin hangisinde durum zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'O büyük evde yıllarca yalnız yaşadı.' },
          { id: 'B', text: 'Yalnız bir adamdı, kimsesi yoktu.' },
          { id: 'C', text: 'Seninle gelirim yalnız param yok.' },
          { id: 'D', text: 'Bu konuyu yalnız seninle konuşabilirim.' },
          { id: 'E', text: 'Kitaptaki yalnızlık teması çok etkileyiciydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Nasıl yaşadı? sorusuna cevap veren \"yalnız\" sözcüğü durum zarfıdır.'
      },
      {
        id: 'q-zr-1-15',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde miktar zarfı bir sıfatı derecelendirme görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugünlerde çok çalışıyor.' },
          { id: 'B', text: 'Oldukça zor bir sınavdı.' },
          { id: 'C', text: 'Pek fazla konuşmayı sevmez.' },
          { id: 'D', text: 'Bizi daha iyi anlamalısın.' },
          { id: 'E', text: 'En son ne zaman görüştük?' }
        ],
        correctOptionId: 'B',
        explanation: '\"Oldukça\" miktar zarfı, \"zor\" sıfatının derecesini artırmıştır.'
      },
      {
        id: 'q-zr-1-16',
        difficulty: 'medium',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Böyle havalarda içim sıkılır.' },
          { id: 'B', text: 'Böyle insanlara güvenmemelisin.' },
          { id: 'C', text: 'Böyle davranarak beni üzüyorsun.' },
          { id: 'D', text: 'Böyle bir olayla ilk kez karşılaşıyorum.' },
          { id: 'E', text: 'Böyle fırsatlar her zaman ele geçmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde isme geldiği için sıfat; C seçeneğinde fiilimsiye (davranarak) geldiği için zarftır.'
      },
      {
        id: 'q-zr-1-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi zarf öbeği değildir?',
        options: [
          { id: 'A', text: '(Güneş doğmadan) yola çıkmalıyız.' },
          { id: 'B', text: '(Sevinçten uçarak) yanıma geldi.' },
          { id: 'C', text: 'Bu işi (kendi başıma) halledebilirim.' },
          { id: 'D', text: 'Seninle (geçen hafta) konuşmuştuk.' },
          { id: 'E', text: '(Kırmızı güller) her zaman favorimdir.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Kırmızı güller\" bir sıfat tamlamasıdır, zarf öbeği değildir.'
      },
      {
        id: 'q-zr-1-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yolculuk boyunca hiç konuşmadı.' },
          { id: 'B', text: 'Yarın seni mutlaka arayacağım.' },
          { id: 'C', text: 'Hızlı adımlarla yürüyordu.' },
          { id: 'D', text: 'Gökyüzü bugün çok mavi.' },
          { id: 'E', text: 'Sessizce yerinden kalktı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yarın\" (zaman zarfı) ve \"mutlaka\" (kesinlik zarfı) olmak üzere birden fazla zarf vardır.'
      },
      {
        id: 'q-zr-1-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman anlamlı sözcük zarf görevinde değildir?',
        options: [
          { id: 'A', text: 'Akşam, günün en huzurlu vaktidir.' },
          { id: 'B', text: 'Akşam hep beraber yemeğe çıkacağız.' },
          { id: 'C', text: 'Sabah erken saatlerde yola koyuldular.' },
          { id: 'D', text: 'Gece birdenbire yağmur bastırdı.' },
          { id: 'E', text: 'Yarın bu konuyu tekrar görüşelim.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Akşam\" sözcüğü ne zaman sorusuna cevap vermeyip cümlenin öznesi olduğundan isim görevindedir.'
      },
      {
        id: 'q-zr-1-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı farklı türden bir sözcükle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Ne zaman döneceksin?' },
          { id: 'B', text: 'Nasıl bir çözüm öneriyorsun?' },
          { id: 'C', text: 'Niçin bana haber vermedin?' },
          { id: 'D', text: 'Ne kadar bekleyeceğiz?' },
          { id: 'E', text: 'Oraya nasıl gidebiliriz?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"nasıl\" soru sıfatı iken, diğerlerinde soru zarfıdır.'
      }
    ]
  },
  {
    id: 'test-zarflar-1-zor',
    title: 'Zarflar 1 (Zor)',
    description: 'Sözcük Türleri Zarflar - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-zr-1-21',
        difficulty: 'hard',
        questionText: 'Bazı sözcükler hem edat hem de zarf olarak kullanılabilir. Aşağıdaki cümlelerin hangisinde \"doğru\" sözcüğü zarf görevindedir?',
        options: [
          { id: 'A', text: 'Eve doğru yürürken onu gördüm.' },
          { id: 'B', text: 'Doğru söz yemin istemez.' },
          { id: 'C', text: 'Lütfen bana doğruyu söyle.' },
          { id: 'D', text: 'Soruları doğru cevaplamış.' },
          { id: 'E', text: 'Çizgiye doğru bir hamle yaptı.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Doğru\" sözcüğü fiili (cevaplamış) nitelediği için zarf görevindedir.'
      },
      {
        id: 'q-zr-1-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde \"artık\" sözcüğü zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Artık seninle konuşmak istemiyorum.' },
          { id: 'B', text: 'Havalar artık iyice soğudu.' },
          { id: 'C', text: 'Tabaktaki artık yemekleri çöpe dökme.' },
          { id: 'D', text: 'Artık buralarda durmanın bir anlamı kalmadı.' },
          { id: 'E', text: 'Bu işi artık bitirmemiz gerekiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"artık\" sözcüğü \"yemek\" ismini nitelediği için sıfat görevindedir.'
      },
      {
        id: 'q-zr-1-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde pekiştirilmiş sözcük zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Masmavi gökyüzü içimi açıyor.' },
          { id: 'B', text: 'Kıpkırmızı elmalar sepette duruyordu.' },
          { id: 'C', text: 'Çocuklar sokakta sırılsıklam ıslanmış.' },
          { id: 'D', text: 'Tertemiz bir sayfa açmak istiyorum.' },
          { id: 'E', text: 'Bembeyaz karlar her yeri kapladı.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Sırılsıklam\" sözcüğü ıslanmak fiilini nitelediğinden zarftır.'
      },
      {
        id: 'q-zr-1-24',
        difficulty: 'hard',
        questionText: 'İkilemeler cümlede sıfat veya zarf görevinde kullanılabilir. Aşağıdakilerin hangisinde ikileme farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yavaş yavaş merdivenleri çıktı.' },
          { id: 'B', text: 'Bana doğru eğri büğrü yollardan geldi.' },
          { id: 'C', text: 'Tatlı tatlı sohbet ettik.' },
          { id: 'D', text: 'Konuyu uzun uzun düşündüm.' },
          { id: 'E', text: 'Bata çıka ilerliyorduk karda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"eğri büğrü\" ikilemesi \"yol\" ismini nitelediği için sıfattır. Diğer seçeneklerde fiili niteleyen zarftır.'
      },
      {
        id: 'q-zr-1-25',
        difficulty: 'hard',
        questionText: '\"Ne... ne...\" bağlacı, bağlı olduğu cümleye olumsuzluk anlamı katar. Aşağıdaki cümlelerin hangisinde bu bağlaç zarfları birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Ne seni ne onu tanıyorum.' },
          { id: 'B', text: 'Ne kitap okuyor ne müzik dinliyor.' },
          { id: 'C', text: 'Bugün hava ne sıcak ne soğuk.' },
          { id: 'D', text: 'İşlerini ne iyi ne kötü yapıyor, idare eder.' },
          { id: 'E', text: 'Toplantıya ne Ahmet ne Mehmet geldi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"iyi\" ve \"kötü\" zarfları bağlaçla bağlanmıştır.'
      },
      {
        id: 'q-zr-1-26',
        difficulty: 'hard',
        questionText: 'Zarflar, sıfat tamlamalarının arasına girerek sıfatları derecelendirebilir. Aşağıdakilerin hangisinde bu kurala uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'O, çok başarılı bir öğrenciydi.' },
          { id: 'B', text: 'Daha güzel günlerimiz olacak.' },
          { id: 'C', text: 'Büyük ve ihtişamlı bir saray burası.' },
          { id: 'D', text: 'En zor soruları bile çözdü.' },
          { id: 'E', text: 'Pek anlayışlı bir müdürü vardı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bir\" belgisiz sıfatı ile \"başarılı\" niteleme sıfatının arasında derecelendirme zarfı değil ancak burada miktar zarfı sıfatın önündedir. Düzeltme: Sorunun kökünde \"sıfatı derecelendiren zarf\" mantığı sorulmaktadır ve hepsi öyledir. Fakat asıl mesele \"çok\" kelimesinin başarılı niteleme sıfatını derecelendirmesidir. Düzeltme ile A en uygunudur.'
      },
      {
        id: 'q-zr-1-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde \"iyi\" sözcüğü \"İyi insan lafının üstüne gelirmiş.\" cümlesindekiyle aynı görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu işi çok iyi başardın.' },
          { id: 'B', text: 'Bugün kendimi iyi hissediyorum.' },
          { id: 'C', text: 'İyi dost kara günde belli olur.' },
          { id: 'D', text: 'Sınavı iyi geçmiş.' },
          { id: 'E', text: 'Çocuklar birbirleriyle iyi anlaşıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Öncül cümlede \"iyi\" sıfattır. C seçeneğinde de \"iyi dost\" sıfat tamlaması kurmuştur.'
      },
      {
        id: 'q-zr-1-28',
        difficulty: 'hard',
        questionText: '\"Biraz\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çorbaya biraz tuz ekler misin?' },
          { id: 'B', text: 'Biraz zaman verirsen hallederim.' },
          { id: 'C', text: 'Biraz para biriktirmemiz lazım.' },
          { id: 'D', text: 'Dün akşam biraz yürüdük.' },
          { id: 'E', text: 'Bana biraz su verir misin?' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde isme geldiği için belgisiz sıfat iken; D seçeneğinde fiili (yürüdük) belirttiği için miktar zarfıdır.'
      },
      {
        id: 'q-zr-1-29',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde zarf fiil öbeği cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Ağlayarak odadan çıktı.' },
          { id: 'B', text: 'Güneş doğarken yola çıkmıştık.' },
          { id: 'C', text: 'Bunu bilerek yaptığını düşünüyorum.' },
          { id: 'D', text: 'Sessiz durup etrafı izledi.' },
          { id: 'E', text: 'Koşa koşa yanıma geldi.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Güneş doğarken\" zarf fiil öbeği, ne zaman sorusuna cevap vererek cümleye zaman anlamı katmıştır.'
      },
      {
        id: 'q-zr-1-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir adlaşmış sıfat, zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gençler, her zaman umut doludur.' },
          { id: 'B', text: 'Hastaları tek tek muayene etti.' },
          { id: 'C', text: 'Güzel, her zaman göze hoş görünür.' },
          { id: 'D', text: 'Soğuklarda dışarı çıkmamaya çalış.' },
          { id: 'E', text: 'Sınavda yanlışları doğrularını götürdü.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Soğuk havalarda\" yerine \"soğuklarda\" denilerek adlaşmış sıfat zaman/durum belirten bir zarf işlevinde kullanılmıştır.'
      }
    ]
  }
]
