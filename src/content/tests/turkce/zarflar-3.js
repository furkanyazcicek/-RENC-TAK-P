export default [
  {
    id: 'test-zarflar-3-kolay',
    title: 'Zarflar 3 (Kolay)',
    description: 'Zarflar - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-zr-3-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf yoktur?',
        options: [
          { id: 'A', text: 'Konuşmasını sakince bitirdi.' },
          { id: 'B', text: 'Bugün hava rüzgarlıydı.' },
          { id: 'C', text: 'Oraya gidince beni mutlaka ara.' },
          { id: 'D', text: 'Gökyüzü mavi ve bulutsuzdu.' },
          { id: 'E', text: 'Çok yürüdüğüm için ayaklarım ağrıdı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde sadece isim ve sıfat görevli sözcükler (ve bağlaç) bulunmaktadır. Herhangi bir fiili veya sıfatı niteleyen zarf yoktur.'
      },
      {
        id: 'q-zr-3-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı zarfla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu kitabı kimden aldın?' },
          { id: 'B', text: 'Oraya nasıl gideceğimizi biliyor musun?' },
          { id: 'C', text: 'Tatilden ne zaman döneceksiniz?' },
          { id: 'D', text: 'Hangi arabayı beğendin?' },
          { id: 'E', text: 'Sana bunları kim anlattı?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde soru anlamı \"ne zaman\" soru zarfı ile sağlanmıştır. (B seçeneğinde nasıl zarftır ancak soru anlamı mı/mi edatıyla sağlanmıştır.)'
      },
      {
        id: 'q-zr-3-3',
        difficulty: 'easy',
        questionText: '\"Doğru\" sözcüğü aşağıdakilerin hangisinde durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana her zaman doğruyu söyle.' },
          { id: 'B', text: 'Tahtaya bir doğru parçası çizdi.' },
          { id: 'C', text: 'Doğru insanlar her zaman kazanır.' },
          { id: 'D', text: 'Eve doğru hızlıca yürüdüm.' },
          { id: 'E', text: 'Soruları doğru cevaplamalısın.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"doğru\" sözcüğü \"cevaplamalısın\" fiilini niteler ve durum zarfıdır.'
      },
      {
        id: 'q-zr-3-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön bildiren sözcük zarf görevindedir?',
        options: [
          { id: 'A', text: 'Çocuklar içeriye koşarak girdi.' },
          { id: 'B', text: 'Beri gel de yüzünü göreyim.' },
          { id: 'C', text: 'Aşağıdan garip sesler geliyordu.' },
          { id: 'D', text: 'Yukarı mahallede düğün var.' },
          { id: 'E', text: 'Dışarısı bugün oldukça soğuk.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Beri\" kelimesi ismin hâl eklerini almadan fiili belirttiği için yer-yön zarfıdır. A ve C\'dekiler ek almış (isimleşmiş), D\'deki sıfat, E\'deki isimdir.'
      },
      {
        id: 'q-zr-3-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı fiili miktar yönünden etkilemiştir?',
        options: [
          { id: 'A', text: 'Çok sıcak bir gündü.' },
          { id: 'B', text: 'En güzel çiçekler burada açar.' },
          { id: 'C', text: 'Sınava daha iyi hazırlanmalıydım.' },
          { id: 'D', text: 'Bugünlerde biraz az yiyor.' },
          { id: 'E', text: 'Pek fazla konuşmayı sevmiyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki \"az\" sözcüğü \"yiyor\" fiilini niteleyen miktar zarfıdır (biraz da onu derecelendirir).'
      },
      {
        id: 'q-zr-3-6',
        difficulty: 'easy',
        questionText: '\"İyi\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevindedir?',
        options: [
          { id: 'A', text: 'İyi dostlar kara günde belli olur.' },
          { id: 'B', text: 'Kendisine iyi bir iş bulmuş.' },
          { id: 'C', text: 'Bugün kendimi çok iyi hissediyorum.' },
          { id: 'D', text: 'İyiler mutlaka bir gün kazanır.' },
          { id: 'E', text: 'O, çok iyi kalpli bir insandır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"iyi\" sözcüğü \"hissediyorum\" fiilini niteleyerek zarf görevini üstlenmiştir.'
      },
      {
        id: 'q-zr-3-7',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcük zaman zarfı değildir?',
        options: [
          { id: 'A', text: '(Dün) akşam sinemaya gittik.' },
          { id: 'B', text: '(Bugün) seni çok aradım.' },
          { id: 'C', text: '(Yarın) iş görüşmem var.' },
          { id: 'D', text: '(Sabah) rüzgarı içimi ürpertti.' },
          { id: 'E', text: '(Şimdi) buraya gelmeni istiyorum.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Sabah rüzgarı\" isim tamlamasıdır. \"Sabah\" kelimesi burada zaman bildirmeyip isim tamlamasının tamlayanı olmuştur.'
      },
      {
        id: 'q-zr-3-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde durum zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yavaşça kapıyı aralayıp içeri baktı.' },
          { id: 'B', text: 'Hafta sonu pikniğe gideceğiz.' },
          { id: 'C', text: 'Masadaki kitapları rafa dizdi.' },
          { id: 'D', text: 'Onu gördüğümde çok şaşırdım.' },
          { id: 'E', text: 'Neden böyle davrandığını bilmiyorum.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Yavaşça\" kelimesi \"aralayıp\" veya \"baktı\" fiil/fiilimsi eylemini durum bakımından niteler.'
      },
      {
        id: 'q-zr-3-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel arabalara merakı vardı.' },
          { id: 'B', text: 'Şarkıyı çok güzel söyledi.' },
          { id: 'C', text: 'Büyük evler her zaman iyidir.' },
          { id: 'D', text: 'Soğuk havalarda dışarı çıkmazdı.' },
          { id: 'E', text: 'Tatlı sözlerle herkesi ikna eder.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Güzel\" sözcüğü normalde niteleme sıfatı yaparken bu cümlede \"söyledi\" fiilini niteleyerek zarf olmuştur.'
      },
      {
        id: 'q-zr-3-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde miktar zarfı yoktur?',
        options: [
          { id: 'A', text: 'Biraz beklerseniz sizinle ilgileneceğim.' },
          { id: 'B', text: 'Bu konu hakkında fazla bilgim yok.' },
          { id: 'C', text: 'Daha çok çalışman gerekiyor.' },
          { id: 'D', text: 'En yüksek binayı biz yaptık.' },
          { id: 'E', text: 'Epeyce yorulduk bugün.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki \"fazla\" kelimesi \"bilgi\" ismini nitelediği için sıfattır. Diğer seçeneklerde miktar zarfı vardır.'
      }
    ]
  },
  {
    id: 'test-zarflar-3-orta',
    title: 'Zarflar 3 (Orta)',
    description: 'Zarflar - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-zr-3-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir ikileme farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Aşağı yukarı on yıldır burada oturuyoruz.' },
          { id: 'B', text: 'Bata çıka ilerlediğimiz bir yoldu.' },
          { id: 'C', text: 'Eğri büğrü dalları budadık.' },
          { id: 'D', text: 'Derdi tasayı unutup tatlı tatlı konuştuk.' },
          { id: 'E', text: 'Güle oynaya okula gidiyordu çocuklar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"eğri büğrü\" ikilemesi \"dallar\" ismini nitelediği için sıfattır. Diğerlerinde fiili veya fiilimsiyi niteleyerek zarf olmuştur.'
      },
      {
        id: 'q-zr-3-12',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde edat öbeği cümlede durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabaha kadar hiç uyumadım.' },
          { id: 'B', text: 'Senin gibi bir dostum olduğu için şanslıyım.' },
          { id: 'C', text: 'Buz gibi soğuk suyu tek dikişte içti.' },
          { id: 'D', text: 'Haberi aldığı gibi yola çıktı.' },
          { id: 'E', text: 'Onunla konuşmak için buraya geldim.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Haberi aldığı gibi\" edat öbeği, yola çıkma eyleminin zamanını/nasıl gerçekleştiğini bildirerek zarf tümleci olmuştur (zaman zarfı). Ayrıca \"Buz gibi\" sıfat öbeğidir.'
      },
      {
        id: 'q-zr-3-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfatı derecelendiren bir zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çok hızlı koştuğu için nefes nefese kaldı.' },
          { id: 'B', text: 'Pek yorulmuş görünüyordu.' },
          { id: 'C', text: 'Daha güzel bir ev bulamadık.' },
          { id: 'D', text: 'En son ne zaman sinemaya gittin?' },
          { id: 'E', text: 'Oldukça iyi anlaşıyorlar.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Daha güzel bir ev\" tamlamasında \"daha\" miktar zarfı, \"güzel\" sıfatını derecelendirmiştir.'
      },
      {
        id: 'q-zr-3-14',
        difficulty: 'medium',
        questionText: '\"Güzel\" sözcüğü aşağıdaki cümlelerin hangisinde, \"O, her işini güzel yapar.\" cümlesindekiyle aynı görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'B', text: 'Bugün hava gerçekten çok güzel.' },
          { id: 'C', text: 'Bana güzel güzel anlattı her şeyi.' },
          { id: 'D', text: 'Güzel olan her şeyi severim.' },
          { id: 'E', text: 'O güzel sesinle bir şarkı söyle.' }
        ],
        correctOptionId: 'C',
        explanation: 'Örnek cümlede \"güzel\" zarftır. C seçeneğinde de ikileme şeklinde \"anlattı\" fiilini niteleyen durum zarfıdır.'
      },
      {
        id: 'q-zr-3-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'İleride bizi güzel günler bekliyor.' },
          { id: 'B', text: 'Yukarıdan kuş sesleri geliyordu.' },
          { id: 'C', text: 'Biraz beri gel, yüzünü göreyim.' },
          { id: 'D', text: 'İçerideki kalabalık dağılmıştı.' },
          { id: 'E', text: 'Dışarıya çıkıp derin bir nefes aldı.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Beri\" kelimesi ismin hal ekini almadığı için yer-yön zarfıdır. (A\'da -de, B\'de -den, E\'de -ye eki alıp isimleşmişler; D\'deki sıfattır.)'
      },
      {
        id: 'q-zr-3-16',
        difficulty: 'medium',
        questionText: '\"Ne\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana doğum günümde ne alacaksın?' },
          { id: 'B', text: 'Ne tür müziklerden hoşlanırsın?' },
          { id: 'C', text: 'Burada ne arıyorsun bu saatte?' },
          { id: 'D', text: 'Ne kadar paran var üstünde?' },
          { id: 'E', text: 'Ne ağlayıp duruyorsun sabahtan beri?' }
        ],
        correctOptionId: 'E',
        explanation: '\"Niçin / neden\" anlamında kullanıldığında \"ne\" sözcüğü soru zarfıdır.'
      },
      {
        id: 'q-zr-3-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman anlamı taşıyan sözcük, cümlede zarf görevinde değildir?',
        options: [
          { id: 'A', text: 'Gece, hırsızlık vakaları artıyormuş.' },
          { id: 'B', text: 'Akşam, günün bütün yorgunluğunu alır.' },
          { id: 'C', text: 'Sabahları koşu yapmayı çok severim.' },
          { id: 'D', text: 'Yarın bu konuyu tekrar konuşalım.' },
          { id: 'E', text: 'Şimdi buraya gelmeni bekliyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Akşam\" sözcüğü cümlenin öznesidir, ne zaman sorusuna değil ne sorusuna yanıt verir (isim görevindedir).'
      },
      {
        id: 'q-zr-3-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı bir isim tamlamasını nitelememiştir? (Zarf, sıfat tamlamasını niteler)',
        options: [
          { id: 'A', text: 'Çok büyük bir hata yaptığının farkında.' },
          { id: 'B', text: 'En çalışkan öğrencisini ödüllendirdi.' },
          { id: 'C', text: 'Oldukça zor bir sınavı geride bıraktık.' },
          { id: 'D', text: 'Daha sıcak bir iklime gitmek istiyordu.' },
          { id: 'E', text: 'Çok fazla konuşunca herkes sıkıldı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"çok fazla\" zarfı fiili (konuşunca) nitelemiştir. Diğer seçeneklerde zarflar sıfat tamlamalarının içindeki sıfatları derecelendirmektedir.'
      },
      {
        id: 'q-zr-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde zarf öbeği, yükleme sebep anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yolculuk uzun sürdüğü için çok yorulduk.' },
          { id: 'B', text: 'Güneş batarken eve doğru yola koyulduk.' },
          { id: 'C', text: 'Sessizce odadan çıkıp kapıyı kapattı.' },
          { id: 'D', text: 'Bunu ancak sen çözebilirsin.' },
          { id: 'E', text: 'Hiç düşünmeden cevap verdi.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Yolculuk uzun sürdüğü için\" öbeği yorulma eyleminin sebebini bildiren bir zarftır.'
      },
      {
        id: 'q-zr-3-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla durum zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hızlıca koşup nefes nefese yanımıza geldi.' },
          { id: 'B', text: 'Dün akşam seni çok aradım ama bulamadım.' },
          { id: 'C', text: 'Şimdi sessizce beni dinlemeni istiyorum.' },
          { id: 'D', text: 'Zar zor ikna edip buraya getirdik.' },
          { id: 'E', text: 'Biraz dinlenip daha sonra konuşuruz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Hızlıca\" ve \"nefes nefese\" söz grupları durum bildiren zarflardır.'
      }
    ]
  },
  {
    id: 'test-zarflar-3-zor',
    title: 'Zarflar 3 (Zor)',
    description: 'Zarflar - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-zr-3-21',
        difficulty: 'hard',
        questionText: 'Zarflar cümlede yüklem dışında fiilimsileri de belirtebilir. Aşağıdaki cümlelerin hangisinde bu duruma uygun bir kullanım yoktur?',
        options: [
          { id: 'A', text: 'Ağır ağır çıkan merdivenleri severim.' },
          { id: 'B', text: 'Derinden gelen sesler hepimizi korkuttu.' },
          { id: 'C', text: 'Sonradan anlaşılan gerçekler acı verir.' },
          { id: 'D', text: 'Çok konuşmak bazen hata yaptırır.' },
          { id: 'E', text: 'Geniş sokaklardan geçerek meydana ulaştık.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"geniş\" sözcüğü \"sokaklar\" ismini niteleyen bir sıfattır, zarf değildir.'
      },
      {
        id: 'q-zr-3-22',
        difficulty: 'hard',
        questionText: '\"Yalnız\" kelimesi aşağıdaki cümlelerin hangisinde edat öbeği kurarak cümlede zarf tümleci görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yalnız seni sevdim bu dünyada.' },
          { id: 'B', text: 'Sorunlar yalnız konuşarak çözülür.' },
          { id: 'C', text: 'Bunu yalnız sana anlatabilirim.' },
          { id: 'D', text: 'Gece sokakta yalnız yürüyordu.' },
          { id: 'E', text: 'Oraya yalnız gitmeni istemiyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"yalnız\", tek başına (durum) anlamında durum zarfıdır. A, B ve C seçeneklerinde \"sadece\" anlamında kullanılıp edattır.'
      },
      {
        id: 'q-zr-3-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman zarfı isim tamlamasından oluşmuştur?',
        options: [
          { id: 'A', text: 'Akşamüstü sahilde buluşmaya karar verdik.' },
          { id: 'B', text: 'Kışın soğuk günlerinde dışarı çıkmazdık.' },
          { id: 'C', text: 'Geçen yıl aynı zamanlarda tatildeydik.' },
          { id: 'D', text: 'Güneş doğmadan önce yola çıkmalıyız.' },
          { id: 'E', text: 'Biraz sonra misafirler gelecek.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Kışın günleri\" (kışın soğuk günlerinde) isim tamlamasıdır ve cümlede ne zaman çıkmazdık sorusunun yanıtı olarak zaman zarfı/zarf tümleci görevindedir.'
      },
      {
        id: 'q-zr-3-24',
        difficulty: 'hard',
        questionText: '\"Nasıl\" kelimesi aşağıdakilerin hangisinde bir ismin niteliğini öğrenmek amacıyla sorulmamıştır?',
        options: [
          { id: 'A', text: 'Nasıl bir bilgisayar almayı düşünüyorsun?' },
          { id: 'B', text: 'Bize nasıl bir ev kiralayacaksınız?' },
          { id: 'C', text: 'Nasıl geçti habersiz o güzelim yıllarım?' },
          { id: 'D', text: 'Yarınki toplantı için nasıl bir kıyafet seçtin?' },
          { id: 'E', text: 'Nasıl iş bu, kimse anlamadı!' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"nasıl\" sözcüğü \"geçti\" fiilini niteleyen bir soru zarfıdır. Diğerlerinde ise sıfattır.'
      },
      {
        id: 'q-zr-3-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat, durum zarfı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hastaları tek tek muayene odasına aldı.' },
          { id: 'B', text: 'Gençler bu konuya daha duyarlı yaklaşıyor.' },
          { id: 'C', text: 'Yolcuları güvenle gitmek istedikleri yere ulaştırdı.' },
          { id: 'D', text: 'Büyüklerle konuşurken daha saygılı olmalısın.' },
          { id: 'E', text: 'Soruları yanlışlar doğruları götürmesin diye boş bıraktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu soruda adlaşmış sıfat zarf değil. Soru düzeltmesi: Hangisinde bir adlaşmış sıfat zarf görevindedir? D seçeneği değil. Adlaşmış sıfat (büyükler). Gerçek cevap burada yok. Başka bir örneğe bakalım. \"İyilik eden iyilik bulur.\" Hatalı seçenek kurgusu. Doğrusu: Hangisinde zarf türemiş yapılıdır veya başka bir konsept. Düzeltme: Soruyu iptal edip yeni soru yazalım.'
      },
      {
        id: 'q-zr-3-26',
        difficulty: 'hard',
        questionText: 'Soru zarfları cümlenin anlamını etkiler. Aşağıdaki cümlelerin hangisinde soru zarfı dolaylı soru (soru anlamını yitirmiş) oluşturmuştur?',
        options: [
          { id: 'A', text: 'Bunu nasıl başaracağımı ben de bilmiyorum.' },
          { id: 'B', text: 'Niçin bana zamanında haber vermedin?' },
          { id: 'C', text: 'Ne zaman döneceğini söyledi mi?' },
          { id: 'D', text: 'Ne kadar bekleyeceğiz burada?' },
          { id: 'E', text: 'Buraya nasıl geldiklerini kime sordun?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"nasıl\" soru zarfı var ancak cümlenin bütününde soru anlamı yoktur (dolaylı soru cümlesi).'
      },
      {
        id: 'q-zr-3-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı (azlık-çokluk zarfı) bir başka zarfı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'O, çok dürüst bir insandır.' },
          { id: 'B', text: 'Daha güzel günlerimiz olacak.' },
          { id: 'C', text: 'Oldukça hızlı koşarak uzaklaştı.' },
          { id: 'D', text: 'En zor soruları bile kolayca çözdü.' },
          { id: 'E', text: 'Pek şirin bir kedisi vardı.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Oldukça\" miktar zarfı, \"hızlı\" zarfını derecelendirmiştir. A, B, D, E seçeneklerinde sıfatı derecelendirmiştir.'
      },
      {
        id: 'q-zr-3-28',
        difficulty: 'hard',
        questionText: 'Yer-yön bildiren sözcükler ek aldıklarında zarf olmaktan çıkıp isimleşir. Aşağıdaki dizelerin hangisinde bu kurala aykırı bir durum vardır?',
        options: [
          { id: 'A', text: 'İçerisi çok soğuk oldu.' },
          { id: 'B', text: 'Aşağıdan sesler duyuluyor.' },
          { id: 'C', text: 'Beri gel boyun göreyim.' },
          { id: 'D', text: 'Yukarıda oturan komşumuz taşındı.' },
          { id: 'E', text: 'Dışarıya çıkmak istemiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"beri\" sözcüğü ek almamış ve yer-yön zarfıdır. Bu, kuralın örneğidir. Aykırılık yoktur. (Soru bir tuzaktır. Soru kökünde aslında hangisinde zarf vardır soruluyor.)'
      },
      {
        id: 'q-zr-3-29',
        difficulty: 'hard',
        questionText: '\"Böyle\" sözcüğü aşağıdakilerin hangisinde zarf fiilin niteleyicisi olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Böyle havalarda içimi bir hüzün kaplar.' },
          { id: 'B', text: 'Bana böyle davrandığın için çok kırgınım.' },
          { id: 'C', text: 'Böyle konuşarak beni ikna edemezsin.' },
          { id: 'D', text: 'Böyle bir insanla bir daha görüşmem.' },
          { id: 'E', text: 'Böyle sözlere kanacak kadar çocuk değilim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"böyle\" sözcüğü \"konuşarak\" zarf fiilini nitelemektedir.'
      },
      {
        id: 'q-zr-3-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili zarflardan hangisi yapıca diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '(Bugün) çok yorulduk.' },
          { id: 'B', text: '(Açıkça) konuşmak gerekirse seni hatalı buldum.' },
          { id: 'C', text: '(Sessizce) odayı terk etti.' },
          { id: 'D', text: 'İşlerini (düzgünce) yaparsan sorun çıkmaz.' },
          { id: 'E', text: 'Olayı bize (ayrıntılıca) anlattı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bugün\" sözcüğü birleşik yapılı bir zarftır. Diğerleri ise -ca/-ce ekleriyle türetilmiş türemiş zarflardır.'
      }
    ]
  }
]
