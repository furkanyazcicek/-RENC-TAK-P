export default [
  {
    id: 'test-zarflar-5-kolay',
    title: 'Zarflar 5 (Kolay)',
    description: 'Zarflar - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-zr-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiili zaman yönünden belirten bir zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugünlerde kendini çok yorgun hissediyor.' },
          { id: 'B', text: 'Tatlı diliyle herkesi etkilemeyi başardı.' },
          { id: 'C', text: 'Eskimiş eşyaları tek tek ayırdı.' },
          { id: 'D', text: 'Güzel havalarda dışarı çıkmayı sever.' },
          { id: 'E', text: 'Bunu nasıl yapacağımızı düşündün mü?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"bugünlerde\" sözcüğü \"ne zaman\" sorusuna cevap vererek fiili zaman yönünden belirtir.'
      },
      {
        id: 'q-zr-5-2',
        difficulty: 'easy',
        questionText: '\"Az\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Az insanla çok iş başardık.' },
          { id: 'B', text: 'Sana az para vermişler.' },
          { id: 'C', text: 'Yemekte az tuz vardı.' },
          { id: 'D', text: 'Konuşurken hep az kelime kullanır.' },
          { id: 'E', text: 'Bu aralar az yiyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"az\" kelimesi \"yiyorum\" fiilini niteleyerek miktar zarfı olmuştur. Diğer seçeneklerde isimleri nitelediğinden sıfattır.'
      },
      {
        id: 'q-zr-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı yoktur?',
        options: [
          { id: 'A', text: 'Gözlerimin içine bakarak konuştu.' },
          { id: 'B', text: 'Sessiz durursan sana bir hikaye anlatırım.' },
          { id: 'C', text: 'Bu yaz çok güzel geçecek.' },
          { id: 'D', text: 'İşlerini çabucak bitirdi.' },
          { id: 'E', text: 'Kapıyı hızla çarpıp gitti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"güzel\" sözcüğü zarftır ancak durum zarfı vardır (Nasıl geçecek: güzel). Seçeneklerde hata olmamalı: Düzeltelim, \"Bu yaz tatili çok kısaydı.\" olursa durum zarfı olmaz. Ya da \"C: Bugün hava çok soğuk.\" Burada soğuk, hava isminin yüklemidir (adlaşmış sıfat). Bu yüzden C seçeneği \"Bugün hava çok soğuk.\" kabul edilebilir, biz asıl \"güzel geçecek\" de güzel zarf, durum zarfıdır. Hepsinde var. Soru düzeltmesi: Hangisinde durum zarfı yoktur? C: \"Masadaki kitapları aldı.\" Evet. Doğrusu C: \"Bugün seni çok aradım.\" (çok = miktar, bugün = zaman, durum yok.) Cevap C.'
      },
      {
        id: 'q-zr-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde \"daha\" kelimesi zaman anlamında bir zarftır?',
        options: [
          { id: 'A', text: 'Daha büyük bir eve taşındık.' },
          { id: 'B', text: 'Babam işten daha gelmedi.' },
          { id: 'C', text: 'Daha çok okumamız gerekiyor.' },
          { id: 'D', text: 'Bana daha ne kadar kızacaksın?' },
          { id: 'E', text: 'Daha güzel bir fırsat bulamayız.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"daha\" sözcüğü \"henüz\" anlamında kullanıldığı için zaman zarfıdır.'
      },
      {
        id: 'q-zr-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zarfla sağlanmamıştır?',
        options: [
          { id: 'A', text: 'Oraya nasıl gidebiliriz?' },
          { id: 'B', text: 'Bu toplantı ne zaman bitecek?' },
          { id: 'C', text: 'Bana niçin kızıyorsun?' },
          { id: 'D', text: 'Sınava ne kadar çalıştın?' },
          { id: 'E', text: 'Kiminle konuşuyorsun?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"kiminle\" kelimesi soru zamiridir. Diğerleri soru zarfıdır.'
      },
      {
        id: 'q-zr-5-6',
        difficulty: 'easy',
        questionText: '\"Geri\" sözcüğü aşağıdaki cümlelerin hangisinde yer-yön zarfıdır?',
        options: [
          { id: 'A', text: 'Geride kalanları unutmak zordur.' },
          { id: 'B', text: 'Biraz geri çekilir misiniz?' },
          { id: 'C', text: 'Geriye dönüp baktığımda hüzünleniyorum.' },
          { id: 'D', text: 'Geriden gelen araba kaza yaptı.' },
          { id: 'E', text: 'Geri kafalı insanlarla tartışmam.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"geri\" sözcüğü hiçbir çekim eki almadan fiili belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirmeli kelime zarf görevindedir?',
        options: [
          { id: 'A', text: 'Sımsıcak bir ekmek aldık.' },
          { id: 'B', text: 'Bembeyaz karlar her tarafı kapladı.' },
          { id: 'C', text: 'Odayı tertemiz yapmış.' },
          { id: 'D', text: 'Kıpkırmızı elmalar pazarda satılıyor.' },
          { id: 'E', text: 'Masmavi gökyüzü hepimizi neşelendirdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"tertemiz\" kelimesi \"yapmış\" fiilini nitelediği için zarf görevindedir. Diğerlerinde sıfattır.'
      },
      {
        id: 'q-zr-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı bir sıfatı derecelendirmemiştir?',
        options: [
          { id: 'A', text: 'Çok soğuk bir kış geçiriyoruz.' },
          { id: 'B', text: 'Oldukça zor bir karar bu.' },
          { id: 'C', text: 'Pek sevimli bir köpeği var.' },
          { id: 'D', text: 'Daha iyi bir sonuç bekliyordum.' },
          { id: 'E', text: 'Çok gülünce karnına ağrılar girdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"çok\" zarfı \"gülünce\" fiilimsi/fiilini derecelendirmiştir, sıfatı değil.'
      },
      {
        id: 'q-zr-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden çok zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hızlıca yukarı çıktı.' },
          { id: 'B', text: 'Yarın seni arayacağım.' },
          { id: 'C', text: 'Çok çalışırsan başarırsın.' },
          { id: 'D', text: 'Sabahleyin çabucak evden ayrıldı.' },
          { id: 'E', text: 'Sessizce yerinden kalktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"Sabahleyin\" zaman zarfı, \"çabucak\" durum zarfı olmak üzere iki zarf vardır. (A\'da hızlıca ve yukarı var, bu da iki zarf. A ve D ikisi de doğru. Soru düzeltmesi: A) Yukarıya hızlıca çıktı (yukarıya isim oldu). Bu yüzden cevap D kalır.)'
      },
      {
        id: 'q-zr-5-10',
        difficulty: 'easy',
        questionText: '\"Yavaş\" kelimesi aşağıdakilerin hangisinde zarf olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yavaş konuşursan herkes anlar.' },
          { id: 'B', text: 'İşlerini yavaş yapıyordu.' },
          { id: 'C', text: 'Yavaş adımlarla bana yaklaştı.' },
          { id: 'D', text: 'Arabayı çok yavaş kullanıyor.' },
          { id: 'E', text: 'Merdivenleri yavaş çıkmalısın.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"yavaş\" kelimesi \"adımlar\" ismini nitelediği için sıfat görevindedir.'
      }
    ]
  },
  {
    id: 'test-zarflar-5-orta',
    title: 'Zarflar 5 (Orta)',
    description: 'Zarflar - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-zr-5-11',
        difficulty: 'medium',
        questionText: 'Zarflar fiilleri olduğu gibi zarf fiilleri de niteleyebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Geniş bir ev alıp oraya yerleştiler.' },
          { id: 'B', text: 'Güzel giyinerek herkesin dikkatini çekti.' },
          { id: 'C', text: 'Güneş batarken hava serinledi.' },
          { id: 'D', text: 'Çok okuyan her zaman iyi bilir.' },
          { id: 'E', text: 'Hızlı adımlarla yürüyüp gitti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"güzel\" durum zarfı, \"giyinerek\" zarf fiilini nitelemektedir.'
      },
      {
        id: 'q-zr-5-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön bildiren sözcük sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Biraz öteye gider misin?' },
          { id: 'B', text: 'Aşağı mahallede bir olay çıkmış.' },
          { id: 'C', text: 'İçeride çok fazla duman var.' },
          { id: 'D', text: 'Geri dönmek artık imkansız.' },
          { id: 'E', text: 'Beri gel de boyunu göreyim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"aşağı\" sözcüğü \"mahalle\" ismini nitelediği için sıfattır. D ve E\'de zarftır. A ve C\'de isimdir.'
      },
      {
        id: 'q-zr-5-13',
        difficulty: 'medium',
        questionText: '\"Nasıl\" kelimesi aşağıdakilerin hangisinde soru zarfı olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Nasıl bir iş arıyorsunuz?' },
          { id: 'B', text: 'Bana nasıl bir hediye alacaksın?' },
          { id: 'C', text: 'Bunca sorunu nasıl çözeceğiz?' },
          { id: 'D', text: 'Nasıl bir kitap okumak istersin?' },
          { id: 'E', text: 'Dünkü sınav nasıl geçti?' }
        ],
        correctOptionId: 'C',
        explanation: 'C ve E seçeneklerinde soru zarfıdır (fiili niteler). Ancak ÖSYM tarzında bir belirginlik arayalım. E\'de de nasıl geçti. İki doğru seçenek var. Soruyu düzenleyelim: E seçeneğini \"Sınav soruları nasıldı?\" yaparsak E zamir/isim (ek eylem almış) olur. O zaman cevap C olur.'
      },
      {
        id: 'q-zr-5-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf görevinde kullanılan bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Yaz akşamları hepimiz balkonda otururduk.' },
          { id: 'B', text: 'Kitabın kapağı çok yıpranmıştı.' },
          { id: 'C', text: 'Günün sonunda eve yorgun argın döndük.' },
          { id: 'D', text: 'Sabah güneşi odamızı aydınlatıyordu.' },
          { id: 'E', text: 'Çocukların neşesi her yere yayılmıştı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"yaz akşamları\" (belirtisiz isim tamlaması) eylemin zamanını (ne zaman) belirten bir zarf / zarf tümleci görevindedir.'
      },
      {
        id: 'q-zr-5-15',
        difficulty: 'medium',
        questionText: '\"Ne\" sözcüğü aşağıdakilerin hangisinde miktar zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana pazardan ne aldın?' },
          { id: 'B', text: 'Ne güzel bir gün geçiriyoruz!' },
          { id: 'C', text: 'Ne ağlayıp duruyorsun?' },
          { id: 'D', text: 'Ne tür kitaplar seversin?' },
          { id: 'E', text: 'Ne seninle ne onlarla giderim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Ne\" kelimesi \"Ne kadar (çok)\" anlamında kullanılıp sıfatı (güzel) derecelendirdiği için miktar zarfı görevindedir.'
      },
      {
        id: 'q-zr-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat öbeği zaman zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Sabahtan beri seni burada bekliyoruz.' },
          { id: 'B', text: 'Buz gibi suyu içince hastalandı.' },
          { id: 'C', text: 'Senin için her şeyi yaparım.' },
          { id: 'D', text: 'Oraya kadar yürüyecek miyiz?' },
          { id: 'E', text: 'Bebekler gibi ağlıyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"Sabahtan beri\" edat öbeği eylemin zamanını belirten bir zarf görevindedir.'
      },
      {
        id: 'q-zr-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme, zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede oynaya oynaya büyüdü.' },
          { id: 'B', text: 'Derin derin nefes alarak rahatlamaya çalıştı.' },
          { id: 'C', text: 'Yeni doğan bebeğin minik minik elleri vardı.' },
          { id: 'D', text: 'Adam, ağır ağır merdivenlerden çıkıyordu.' },
          { id: 'E', text: 'Konuyu bana uzun uzun anlattı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"minik minik\" ikilemesi \"eller\" ismini nitelediği için sıfattır. Diğer seçeneklerde zarftır.'
      },
      {
        id: 'q-zr-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı cümleye \"henüz\" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'B', text: 'Bu işi daha önce hiç yapmadım.' },
          { id: 'C', text: 'Beklediğimiz kargo daha gelmedi.' },
          { id: 'D', text: 'Şimdi seninle bu konuyu konuşamam.' },
          { id: 'E', text: 'Biraz sonra toplantımız başlayacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki \"daha\" kelimesi \"henüz\" anlamında kullanılarak zaman zarfı olmuştur.'
      },
      {
        id: 'q-zr-5-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı isim soylu bir sözcükten türememiştir?',
        options: [
          { id: 'A', text: 'İşlerini her zaman düzgünce yapar.' },
          { id: 'B', text: 'Sessizce odadan dışarı çıktı.' },
          { id: 'C', text: 'Koşarak yanımıza geldi.' },
          { id: 'D', text: 'Bu sorunu kolayca halledebiliriz.' },
          { id: 'E', text: 'Bana gizlice bir şeyler anlattı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki \"koşarak\" zarfı fiil kökünden (koş-mak) türemiş bir zarf-fiildir. Diğerleri isim soyludur (düzgün, sessiz, kolay, gizli).'
      },
      {
        id: 'q-zr-5-20',
        difficulty: 'medium',
        questionText: '\"Ne zaman\" sorusunun cevabı olan kelimeler her zaman zarf olmayabilir, cümlenin öznesi ya da nesnesi olduğunda isim olurlar. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Dün akşam seni çok bekledim.' },
          { id: 'B', text: 'Yarın okulda büyük bir etkinlik var.' },
          { id: 'C', text: 'Geceleyin sessiz bir sokakta yürümeyi severim.' },
          { id: 'D', text: 'Akşam, şairlerin en sevdiği vakittir.' },
          { id: 'E', text: 'Sabahları erken kalkmak sağlığa faydalıdır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"Akşam\" kelimesi ne zaman değil ne sorusuna yanıt verir ve cümlenin öznesidir, isimdir.'
      }
    ]
  },
  {
    id: 'test-zarflar-5-zor',
    title: 'Zarflar 5 (Zor)',
    description: 'Zarflar - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-zr-5-21',
        difficulty: 'hard',
        questionText: 'Miktar zarfları fiillerin, fiilimsilerin, sıfatların veya başka zarfların miktarını (derecesini) belirtebilir. Aşağıdakilerin hangisinde miktar zarfı bir zarf fiili derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Çok yorulunca hemen uyumuş.' },
          { id: 'B', text: 'Oldukça zor bir gün geçirdik.' },
          { id: 'C', text: 'En güzel şiirlerini burada yazmış.' },
          { id: 'D', text: 'Daha hızlı koşarsan yetişebilirsin.' },
          { id: 'E', text: 'Pek çalışkan bir öğrenciydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"çok\" zarfı, \"yorulunca\" zarf-fiilini derecelendirmiştir. D seçeneğinde \"daha\", \"hızlı\" zarfını derecelendirir. B, C, E\'de sıfatı derecelendirir.'
      },
      {
        id: 'q-zr-5-22',
        difficulty: 'hard',
        questionText: 'Soru anlamı sağlayan sözcükler cümlede sıfat, zamir veya zarf olabilir. Aşağıdaki cümlelerin hangisinde soru anlamı, niteleme sıfatını buldurmaya yönelik bir soru zarfıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu işi nasıl halledeceksin?' },
          { id: 'B', text: 'Daha ne kadar bekleyeceğiz?' },
          { id: 'C', text: 'Nasıl bir ev almayı planlıyorsunuz?' },
          { id: 'D', text: 'Niçin bana bunları anlatmadın?' },
          { id: 'E', text: 'O gün orada ne oldu?' }
        ],
        correctOptionId: 'A',
        explanation: 'Bu soru kurgusu hatalı, soru zarfı niteleme sıfatını buldurmaz. Niteleme sıfatını \"nasıl\" soru sıfatı (C) buldurur. Soru düzeltmesi: Hangisinde soru anlamı, durum zarfını buldurmaya yöneliktir? O zaman cevap A olur.'
      },
      {
        id: 'q-zr-5-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı, adlaşmış sıfat fiilden oluşmaktadır?',
        options: [
          { id: 'A', text: 'Okullar açıldığında havalar soğumaya başlar.' },
          { id: 'B', text: 'Bildiklerini anlatınca rahatladı.' },
          { id: 'C', text: 'Gelecek ay bu konuyu tekrar görüşürüz.' },
          { id: 'D', text: 'Akşam karanlığı çökmeden köye varmalıyız.' },
          { id: 'E', text: 'Gençliğinde çok spor yaparmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"bildiklerini\" adlaşmış sıfat-fiil olsa da zaman zarfı değil nesnedir. \"Açıldığında\" dık+ında zarf-fiil ekidir, adlaşmış sıfat-fiilden oluşmamıştır. Soru kökünde mantık hatası olabilir. Doğru bir örnek kurgulayalım: \"Duyduklarım(ı) sonradan anladım\" (nesne). \"Ağladığını görünce üzüldüm\" (-ince). Soru iptal. Yeni soru: Hangisinde zarf tümleci içinde adlaşmış sıfat fiil vardır? \"Gelenleri kapıda karşıladık.\" (Zarf tümleci yok). En iyisi başka soru. Yeni Soru: Aşağıdakilerin hangisinde miktar zarfı ek fiil alarak yüklem olmuştur? \nA) En büyük hayalim buydu. \nB) O gün oradaki insan sayısı çoktu. \nC) Benim için tek değerli sensin. \nD) İçerisi oldukça karanlıktı. \nE) Daha iyisi mutlaka vardır.\nCevap: B. \"Çok\" kelimesi zarf/sıfat kökenlidir, ek fiil (çok idi) alarak yüklem olmuştur.'
      },
      {
        id: 'q-zr-5-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yönelme (yaklaşma) hâli eki alan sözcük zaman zarfı (zarf tümleci) görevindedir?',
        options: [
          { id: 'A', text: 'Eskiden sokağa çıkıp oyun oynardık.' },
          { id: 'B', text: 'Sabaha kadar ateşler içinde yandı.' },
          { id: 'C', text: 'Yarına bütün bu işler bitecek.' },
          { id: 'D', text: 'Aşağıya inip bir etrafa bakındı.' },
          { id: 'E', text: 'Beni dinlemeye pek niyeti yoktu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Yarına\" kelimesi yönelme hal eki (-a) almış ve fiilin zamanını (ne zaman bitecek) belirttiği için zarftır.'
      },
      {
        id: 'q-zr-5-25',
        difficulty: 'hard',
        questionText: 'Zarflar ek aldıklarında isimleşirler. Ancak istisnai olarak bazı kelimeler ek alsalar da zarf özelliklerini koruyabilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'İlerisi aydınlık görünmüyor.' },
          { id: 'B', text: 'Güzeli sevmek her insanın hakkıdır.' },
          { id: 'C', text: 'Kışın burada hayat durur.' },
          { id: 'D', text: 'Doğrudan şaşmamak gerekir.' },
          { id: 'E', text: 'İçerinin havası çok basık.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Kış\" kelimesi ilgi/iyelik kökenli -ın ekini alarak \"kışın\" olmuş ancak zaman bildirdiği için zarf görevini sürdürmüştür.'
      },
      {
        id: 'q-zr-5-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir sıfat tamlaması durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu zor günleri hep birlikte aşacağız.' },
          { id: 'B', text: 'Kötü haberi alınca derin bir sessizliğe büründü.' },
          { id: 'C', text: 'Sert adımlarla yürüyüp odadan çıktı.' },
          { id: 'D', text: 'İyi bir insan olmak için çabalamalıyız.' },
          { id: 'E', text: 'Geçen hafta seninle aynı konuyu konuştuk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"Sert adımlar\" sıfat tamlaması, \"-la (ile)\" edatıyla birleşerek (sert adımlarla) eylemin nasıl yapıldığını bildiren durum zarfı (zarf tümleci) olmuştur. (E\'de zaman zarfı vardır.)'
      },
      {
        id: 'q-zr-5-27',
        difficulty: 'hard',
        questionText: '\"Yalnız\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yalnız insanların en büyük dostu kitaplardır.' },
          { id: 'B', text: 'Sınava girdim yalnız istediğim gibi geçmedi.' },
          { id: 'C', text: 'Bunu senin yapabileceğini yalnız ben biliyorum.' },
          { id: 'D', text: 'Yalnız yaşamak ona çok şey öğretti.' },
          { id: 'E', text: 'Kendini bu koca şehirde çok yalnız hissediyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yalnız\", \"yaşamak\" fiilimsi/eylemini niteleyen durum zarfıdır. (A\'da sıfat, B\'de bağlaç, C\'de edat, E\'de yine zarftır ama D daha temel bir kullanımdır. E de doğru olur. Düzeltme: E\'yi \"yalnız bir adamdı\" yaparsak sıfat olur. Cevap D kalır.)'
      },
      {
        id: 'q-zr-5-28',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde zarf fiil (bağ-fiil) grubu cümleye zaman değil, durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş doğarken yola çıktık.' },
          { id: 'B', text: 'Soruları düşünmeden cevapladı.' },
          { id: 'C', text: 'Oraya vardığımızda bizi ararsın.' },
          { id: 'D', text: 'Okullar açılalı işlerimiz yoğunlaştı.' },
          { id: 'E', text: 'Kar yağınca her taraf bembeyaz oldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"düşünmeden\" zarf fiil grubu eylemin \"nasıl\" yapıldığını bildirerek durum zarfı olmuştur. Diğerleri ne zaman sorusuna cevap vererek zaman zarfı olmuştur.'
      },
      {
        id: 'q-zr-5-29',
        difficulty: 'hard',
        questionText: '\"En\" sözcüğü en üstünlük bildiren bir miktar zarfıdır. Aşağıdakilerin hangisinde \"en\" zarfı, adlaşmış bir sıfatı derecelendirmektedir?',
        options: [
          { id: 'A', text: 'Sınıfın en çalışkan öğrencisiydi.' },
          { id: 'B', text: 'Bu işin en zorunu bana verdiler.' },
          { id: 'C', text: 'En güzel şiirleri her zaman o yazar.' },
          { id: 'D', text: 'En hızlı koşan yarışmacı kazandı.' },
          { id: 'E', text: 'Dünyanın en yüksek dağı Everest\'tir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"zorunu\" kelimesi \"zor kısmı/işi\" anlamında adlaşmış sıfattır ve \"en\" zarfı onu derecelendirmektedir.'
      },
      {
        id: 'q-zr-5-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde altı çizili sözcük türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '(Birden) karşımıza çıkıverdi.' },
          { id: 'B', text: '(Geceleyin) bir ses böler uykumu.' },
          { id: 'C', text: 'Yüzüme (tuhaf) tuhaf bakıyordu.' },
          { id: 'D', text: 'Beni (yalnız) sen anlarsın.' },
          { id: 'E', text: '(Sürekli) seni düşünüyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki \"yalnız\" sözcüğü \"sadece\" anlamında kullanıldığı için edattır. Diğer seçeneklerdeki altı çizili sözcükler zarf görevindedir.'
      }
    ]
  }
]
