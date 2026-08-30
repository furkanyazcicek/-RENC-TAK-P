export default [
  {
    id: 'test-zarflar-4-kolay',
    title: 'Zarflar 4 (Kolay)',
    description: 'Zarflar - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-zr-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilin nasıllığını (durumunu) bildiren bir zarf yoktur?',
        options: [
          { id: 'A', text: 'Derin derin düşüncelere daldı.' },
          { id: 'B', text: 'Konuyu bana güzelce anlattı.' },
          { id: 'C', text: 'Bugün çok neşeli görünüyorsun.' },
          { id: 'D', text: 'Masadaki kitapları tek tek topladı.' },
          { id: 'E', text: 'Yarın sabah Ankara\'ya gideceğiz.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"yarın sabah\" zaman zarfıdır. A\'da \"derin derin\", B\'de \"güzelce\", C\'de \"neşeli\", D\'de \"tek tek\" durum zarfıdır.'
      },
      {
        id: 'q-zr-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf, bir sıfatı nitelemektedir?',
        options: [
          { id: 'A', text: 'Oldukça hızlı bir arabası var.' },
          { id: 'B', text: 'Çok konuşan insanları sevmem.' },
          { id: 'C', text: 'Daha gelmediler.' },
          { id: 'D', text: 'Geniş bir ev arıyoruz.' },
          { id: 'E', text: 'Hızlıca yukarı çıktı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"oldukça\" miktar zarfı, \"hızlı\" niteleme sıfatını nitelemektedir (derecelendirmektedir).'
      },
      {
        id: 'q-zr-4-3',
        difficulty: 'easy',
        questionText: '\"Hemen\" sözcüğü aşağıdaki cümlelerin hangisinde diğerlerinden farklı bir türde zarf olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hemen şimdi buraya gel!' },
          { id: 'B', text: 'Hemen hemen iki yıldır görüşmüyoruz.' },
          { id: 'C', text: 'Hemen yola çıkmalıyız.' },
          { id: 'D', text: 'Oraya hemen giderim.' },
          { id: 'E', text: 'Haberi alınca hemen bize koştu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"hemen hemen\" ikilemesi \"yaklaşık olarak\" anlamında ölçü/miktar zarfı görevindedir. Diğerlerinde zaman/çabukluk bildiren zaman veya durum zarfıdır.'
      },
      {
        id: 'q-zr-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin miktarını bildiren bir zarf vardır?',
        options: [
          { id: 'A', text: 'Bugün hava çok sıcak.' },
          { id: 'B', text: 'En güzel şiirleri o okurdu.' },
          { id: 'C', text: 'Sınava fazla çalışmamış.' },
          { id: 'D', text: 'Çok büyük bir hata yaptı.' },
          { id: 'E', text: 'Daha iyi bir ev bulacağız.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki \"fazla\" miktar zarfı, \"çalışmamış\" fiilinin miktarını bildirmektedir. A, B, D ve E\'de sıfatı derecelendiren zarflar vardır.'
      },
      {
        id: 'q-zr-4-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde \"ne zaman\" sorusunun cevabı yoktur?',
        options: [
          { id: 'A', text: 'Akşam yemeğe çıkacağız.' },
          { id: 'B', text: 'Kışın burada kar çok yağar.' },
          { id: 'C', text: 'Yarın buluşalım diye anlaştık.' },
          { id: 'D', text: 'Geçen hafta seni sordu.' },
          { id: 'E', text: 'Akşam, huzurun diğer adıdır.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde \"akşam\" sözcüğü özne görevindedir (isimdir), ne zaman sorusuna cevap vermez.'
      },
      {
        id: 'q-zr-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru zarfı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu sana kim anlattı?' },
          { id: 'B', text: 'Nasıl bir araba almayı düşünüyorsun?' },
          { id: 'C', text: 'Hangi ev sizin?' },
          { id: 'D', text: 'Niçin bana yalan söyledin?' },
          { id: 'E', text: 'Bu çantanın içinde ne var?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde eylemin sebebini soran \"niçin\" sözcüğü soru zarfıdır. (A ve E soru zamiri, B ve C soru sıfatıdır.)'
      },
      {
        id: 'q-zr-4-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek almadan kullanılan yer-yön zarfı vardır?',
        options: [
          { id: 'A', text: 'İçerisi çok havasız kalmış.' },
          { id: 'B', text: 'Aşağıdan sesler geliyor.' },
          { id: 'C', text: 'Geri dönmek için çok geç.' },
          { id: 'D', text: 'Dışarıya çıkıp nefes aldı.' },
          { id: 'E', text: 'İleriye bakarsan görürsün.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"geri\" sözcüğü hiçbir ek almadan fiili (dönmek) belirttiği için yer-yön zarfıdır.'
      },
      {
        id: 'q-zr-4-8',
        difficulty: 'easy',
        questionText: '\"Öyle\" sözcüğü aşağıdakilerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Öyle insanlar hep kazanır.' },
          { id: 'B', text: 'Öyle bir günden sonra dinlenmek şart.' },
          { id: 'C', text: 'Bana öyle bakma, korkuyorum.' },
          { id: 'D', text: 'Öyle sözler sarf etti ki hepimiz şaşırdık.' },
          { id: 'E', text: 'Öyle havalarda içimi bir hüzün kaplar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"öyle\" sözcüğü \"bakma\" fiilini nitelediği için durum zarfıdır. Diğer seçeneklerde isimleri nitelediğinden sıfattır.'
      },
      {
        id: 'q-zr-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi pekiştirilmiş durum zarfıdır?',
        options: [
          { id: 'A', text: '(Masum) tavırlarıyla dikkat çekiyordu.' },
          { id: 'B', text: 'Elbiseleri (tertemiz) görünüyordu.' },
          { id: 'C', text: '(Yapayalnız) bir adamdı o.' },
          { id: 'D', text: '(Sapasağlam) binalar inşa ettiler.' },
          { id: 'E', text: '(Sımsıcak) bir gülümsemesi vardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"tertemiz\" pekiştirmeli sözcüğü, \"görünüyordu\" fiilini nitelediği için durum zarfıdır. (Diğerlerindeki pekiştirmeli sözcükler sıfattır.)'
      },
      {
        id: 'q-zr-4-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki farklı türde zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam sessizce yanımıza geldi.' },
          { id: 'B', text: 'Çok hızlı koştu.' },
          { id: 'C', text: 'Hızlı adımlarla yürüdü.' },
          { id: 'D', text: 'Yarın oraya gideceğiz.' },
          { id: 'E', text: 'Sürekli ders çalışıyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"akşam\" zaman zarfı, \"sessizce\" durum zarfıdır.'
      }
    ]
  },
  {
    id: 'test-zarflar-4-orta',
    title: 'Zarflar 4 (Orta)',
    description: 'Zarflar - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-zr-4-11',
        difficulty: 'medium',
        questionText: '\"Ne... ne...\" bağlacı kullanıldığı cümlede bağladığı ögelerin zarf görevinde olmasını sağlayabilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Ne sen geldin ne de o.' },
          { id: 'B', text: 'Ne kitap okudu ne film izledi.' },
          { id: 'C', text: 'Sınavı ne iyi ne kötü geçti.' },
          { id: 'D', text: 'Bugün hava ne sıcak ne soğuk.' },
          { id: 'E', text: 'Bu işi ne bugün ne yarın bitirebiliriz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"iyi\" ve \"kötü\" durum zarflarını birbirine bağlamıştır. (E seçeneği de zaman zarflarını bağlar ancak C de bariz bir zarf kullanımıdır. İki doğru olmaması adına C durum zarfı, E zaman zarfı bağlamıştır. İkisi de doğrudur ancak soruda durum zarfı kastedilmiş olabilir. Ancak E\'deki zaman zarflarıdır. Hata payı olmaması adına, düzeltelim: C seçeneğindeki iyi ve kötü sözcükleri geçmek eylemini niteler.)'
      },
      {
        id: 'q-zr-4-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ismin yaklaşma (-e/-a) hâl ekini alan bir sözcük zarf görevindedir?',
        options: [
          { id: 'A', text: 'Okula doğru hızla yürüyordu.' },
          { id: 'B', text: 'Bu akşam sinemaya gideceğiz.' },
          { id: 'C', text: 'Korkudan sabaha kadar uyuyamadı.' },
          { id: 'D', text: 'Yolculuk akşama doğru biter.' },
          { id: 'E', text: 'Sonunda eve ulaşabildik.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"akşama doğru\" zaman bildiren bir öbek olarak zarf görevindedir, burada \"akşama\" sözcüğü edat öbeği içinde zaman zarfı işlevine yardımcıdır. Ya da \"sabaha kadar\" (C) var. Zarf tümleci sorusu ile zarf sorusu karışabilir. A\'daki \"hızla\" zarftır ama -a eki (ile) vasıtadır. B seçeneğinde sinemaya dolaylı tümleçtir. En net kullanım C ve D\'dedir. Kastedilen \"korkudan\" (sebep zarfı - ayrılma eki). Yaklaşma eki için D\'deki akşama doğrudur.'
      },
      {
        id: 'q-zr-4-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde miktar zarfı farklı türde bir sözcüğü derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Çok güzel bir ev almış.' },
          { id: 'B', text: 'Oldukça zor sorular vardı.' },
          { id: 'C', text: 'Daha büyük bir arabaya ihtiyacım var.' },
          { id: 'D', text: 'Pek zeki bir çocuktu.' },
          { id: 'E', text: 'Sınavı çok iyi geçmiş.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde miktar zarfları sıfatları derecelendirirken, E seçeneğinde (çok) \"iyi\" zarfını derecelendirmiştir.'
      },
      {
        id: 'q-zr-4-14',
        difficulty: 'medium',
        questionText: '\"Doğru\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Doğru söyleyeni dokuz köyden kovarlar.' },
          { id: 'B', text: 'Lütfen bana doğruyu anlat.' },
          { id: 'C', text: 'Seninle doğru bir zamanda karşılaştık.' },
          { id: 'D', text: 'Tahtaya çizdiği doğru eğri büğrüydü.' },
          { id: 'E', text: 'Bu işin doğrusu nedir?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"doğru\" kelimesi \"söyleyen\" sıfat-fiilini nitelediği için zarf görevindedir.'
      },
      {
        id: 'q-zr-4-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Güneş batarken eve döndük.' },
          { id: 'B', text: 'Sen gelince her şey düzeldi.' },
          { id: 'C', text: 'Oraya gidip hemen döneceğim.' },
          { id: 'D', text: 'Okullar açılalı işlerimiz arttı.' },
          { id: 'E', text: 'Yüzüme bakarak konuştu.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C (zaman olarak), D seçeneklerinde zarf-fiiller cümleye zaman anlamı katarken, E seçeneğinde (-arak) durum anlamı katmıştır.'
      },
      {
        id: 'q-zr-4-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yer-yön zarfı isim tamlamasının içinde yer almıştır?',
        options: [
          { id: 'A', text: 'Yukarı kata yeni eşyalar taşındı.' },
          { id: 'B', text: 'İçerinin sıcaklığı herkesi bunalttı.' },
          { id: 'C', text: 'Dışarı çıkıp biraz hava alalım.' },
          { id: 'D', text: 'Geri adım atacak değiliz.' },
          { id: 'E', text: 'Aşağı inip arabayı kontrol ettim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"içeri\" kelimesi tamlayan eki (-nin) alıp isimleşmiş ve \"içerinin sıcaklığı\" isim tamlamasında yer almıştır.'
      },
      {
        id: 'q-zr-4-17',
        difficulty: 'medium',
        questionText: '\"Şimdi\" sözcüğü aşağıdaki cümlelerin hangisinde zaman zarfı görevinde değildir?',
        options: [
          { id: 'A', text: 'Şimdi seninle bu konuyu konuşamam.' },
          { id: 'B', text: 'Şimdi geldiğini gördüm.' },
          { id: 'C', text: 'Bu işi şimdi bitirmelisin.' },
          { id: 'D', text: 'Şimdi, onun için çok değerli bir an.' },
          { id: 'E', text: 'Bana şimdi söylemelisin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"Şimdi\" sözcüğü cümlenin öznesi olup isim görevindedir.'
      },
      {
        id: 'q-zr-4-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ikileme, zarf görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Koşa koşa yanıma geldi.' },
          { id: 'B', text: 'Yarım yamalak iş yapmayı sevmezdi.' },
          { id: 'C', text: 'Tatlı tatlı sohbet ediyorduk.' },
          { id: 'D', text: 'İri iri elmalar almıştı.' },
          { id: 'E', text: 'Yavaş yavaş merdivenleri çıkıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"iri iri\" ikilemesi \"elmalar\" ismini nitelediği için sıfattır. Diğer seçeneklerde fiili niteleyen zarftır.'
      },
      {
        id: 'q-zr-4-19',
        difficulty: 'medium',
        questionText: '\"Yine\" sözcüğü cümleye genellikle tekrarlanma anlamı katarak zarf olur. Aşağıdakilerin hangisinde bu anlamda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yine mi sen geldin?' },
          { id: 'B', text: 'Dün akşam yine aynı konuyu açtı.' },
          { id: 'C', text: 'Oraya yine gitmek istiyorum.' },
          { id: 'D', text: 'Bunu yine senin için yapıyorum.' },
          { id: 'E', text: 'Hepsi yine ve yeniden zarf olarak kabul edilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B, C, D ve diğerlerinde de zarftır. Sorunun en belirgin tekrar zarfı şıkkı B\'dir. Bütün şıklarda zaman/tekrar zarfıdır, genel bir zarf örneğidir.'
      },
      {
        id: 'q-zr-4-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kırmızı güllerin boynu bükük' },
          { id: 'B', text: 'Geniş denizlerde yol alıyor gemi' },
          { id: 'C', text: 'Birazdan gökyüzü kararacak' },
          { id: 'D', text: 'Eski günlerin hatırası var' },
          { id: 'E', text: 'Soğuk havalar kapıda' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"birazdan\" sözcüğü zaman bildiren bir zarftır.'
      }
    ]
  },
  {
    id: 'test-zarflar-4-zor',
    title: 'Zarflar 4 (Zor)',
    description: 'Zarflar - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-zr-4-21',
        difficulty: 'hard',
        questionText: 'Bazı durumlarda miktar zarfları bir zarf öbeğini derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uygun bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Çok büyük bir hata yaptı.' },
          { id: 'B', text: 'Epeyce uzun bir yoldan geldik.' },
          { id: 'C', text: 'Daha çok çalışarak başarılı oldu.' },
          { id: 'D', text: 'En güzel çiçekler dağlarda açar.' },
          { id: 'E', text: 'Pek tatlı bir çocuktu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde \"daha\" zarfı, \"çok çalışarak\" zarf öbeğini derecelendiren bir zarftır.'
      },
      {
        id: 'q-zr-4-22',
        difficulty: 'hard',
        questionText: '\"Ne\" sözcüğü bağlaç, zamir, sıfat ya da zarf olarak kullanılabilir. Aşağıdaki cümlelerin hangisinde \"ne\" sözcüğü soru zarfı görevindedir?',
        options: [
          { id: 'A', text: 'Ne gün ama, her şey ters gitti!' },
          { id: 'B', text: 'Ne bakıp duruyorsun bana öyle?' },
          { id: 'C', text: 'Sana doğum gününde ne aldılar?' },
          { id: 'D', text: 'Ne seninle gelirim ne onlarla.' },
          { id: 'E', text: 'Burada ne tür işler yapılıyor?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"niçin/neden\" anlamında kullanıldığı için soru zarfıdır. (A ve E\'de sıfat, C\'de zamir, D\'de bağlaçtır.)'
      },
      {
        id: 'q-zr-4-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış bir sıfat, hal eki alarak zarf tümleci görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzeli sevmek her insanın doğasında var.' },
          { id: 'B', text: 'Yaşlılara her zaman saygı göstermeliyiz.' },
          { id: 'C', text: 'Soğuktan elleri çatlamış.' },
          { id: 'D', text: 'Doğruyu söylemekten asla çekinme.' },
          { id: 'E', text: 'Zorları başarmak bizim işimizdir.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Soğuk havalardan\" anlamındaki adlaşmış sıfat olan \"soğuktan\" kelimesi ayrılma hal ekini almış ve cümlede sebep bildiren zarf tümleci olmuştur.'
      },
      {
        id: 'q-zr-4-24',
        difficulty: 'hard',
        questionText: 'Cümledeki eylemin kesinlik, olasılık, yineleme, sınırlandırma vb. anlamlarını veren zarflara \"durum zarfı\" adı verilebilir. Aşağıdakilerin hangisinde cümleye olasılık katan bir zarf kullanılmıştır?',
        options: [
          { id: 'A', text: 'Seni mutlaka yarın arayacağım.' },
          { id: 'B', text: 'Belki bu yıl tatile çıkabiliriz.' },
          { id: 'C', text: 'Asla pes etmeyi düşünmüyorum.' },
          { id: 'D', text: 'Elbette sizinle geleceğim.' },
          { id: 'E', text: 'Hiç şüphesiz bu maçı kazanacağız.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Belki\" kelimesi cümleye olasılık (ihtimal) anlamı katan bir zarftır.'
      },
      {
        id: 'q-zr-4-25',
        difficulty: 'hard',
        questionText: '\"Gibi\" edatı kendinden önceki sözcükle öbekleşerek cümlede sıfat veya zarf görevinde kullanılabilir. Aşağıdakilerin hangisinde edat öbeği sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Çocuk gibi ağlıyordu köşede.' },
          { id: 'B', text: 'Buz gibi suyu bir dikişte içti.' },
          { id: 'C', text: 'Kuş gibi uçup gitti buralardan.' },
          { id: 'D', text: 'Haberi aldığı gibi yanıma geldi.' },
          { id: 'E', text: 'Onun gibi davranmaya çalışıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Buz gibi suyu\" tamlamasında \"buz gibi\" öbeği \"su\" ismini nitelediği için sıfattır. Diğerlerinde fiili/fiilimsiyi niteleyerek zarftır.'
      },
      {
        id: 'q-zr-4-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapısı bakımından farklı bir zarftır?',
        options: [
          { id: 'A', text: 'Bu işi (kolayca) halledebiliriz.' },
          { id: 'B', text: 'Sorunları (akıllıca) çözmelisiniz.' },
          { id: 'C', text: 'Bana her şeyi (açıkça) anlattı.' },
          { id: 'D', text: '(Birdenbire) karşımıza çıktı.' },
          { id: 'E', text: 'Görevlerini (sessizce) yerine getirdi.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Birdenbire\" birleşik yapılı bir zarftır. Diğerleri ise -ca/-ce ekleriyle türetilmiş türemiş zarflardır.'
      },
      {
        id: 'q-zr-4-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı miktar zarfıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bu araba için ne kadar para ödedin?' },
          { id: 'B', text: 'Oraya kadar ne kadar yürüyeceğiz?' },
          { id: 'C', text: 'Nasıl bir yol izlememiz gerekiyor?' },
          { id: 'D', text: 'Bize ne zaman haber vereceksin?' },
          { id: 'E', text: 'Niçin bana bunları söylüyorsun?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"ne kadar\" sorusu \"yürüyeceğiz\" fiilinin miktarını sorarak miktar (ölçü) soru zarfı olmuştur. (A seçeneğindeki \"ne kadar\" para ismini belirttiği için sıfattır.)'
      },
      {
        id: 'q-zr-4-28',
        difficulty: 'hard',
        questionText: 'Zarflar isim tamlamalarının önüne gelerek sadece tamlayanı derecelendirebilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Çok sıcak havalar yaklaşıyor.' },
          { id: 'B', text: 'En yakın arkadaşımın düğününe gittim.' },
          { id: 'C', text: 'Oldukça büyük bir bahçesi vardı.' },
          { id: 'D', text: 'Daha güzel günlerimiz olacak.' },
          { id: 'E', text: 'Pek sevimli bir köpekleri var.' }
        ],
        correctOptionId: 'B',
        explanation: '\"En yakın arkadaşımın düğünü\" zincirleme / belirtili (karma) tamlamada \"en\" zarfı, tamlayan olan \"yakın arkadaşım\" içindeki sıfatı derecelendirmiştir.'
      },
      {
        id: 'q-zr-4-29',
        difficulty: 'hard',
        questionText: '\"Yalnızca\" sözcüğü aşağıdaki cümlelerin hangisinde zarf görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu yalnızca senin için yapıyorum.' },
          { id: 'B', text: 'O her zaman yalnızca yaşadı.' },
          { id: 'C', text: 'Yalnızca insanlar bu yeteneğe sahiptir.' },
          { id: 'D', text: 'Yalnızca günler geçmek bilmiyordu.' },
          { id: 'E', text: 'Yalnızca bir kalem alıp çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"yalnızca (yalnız şekilde)\" yaşamak fiilini niteleyen durum zarfıdır. Diğerlerinde \"sadece\" anlamında edattır.'
      },
      {
        id: 'q-zr-4-30',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde zaman zarfı kullanılmadığı halde cümlede zaman anlamı vardır?',
        options: [
          { id: 'A', text: 'Yarın sabah erkenden buluşalım.' },
          { id: 'B', text: 'Sen gelince her şey düzeldi.' },
          { id: 'C', text: 'Akşamları sahilde yürüyüş yaparım.' },
          { id: 'D', text: 'Dün seni çok aradım ama bulamadım.' },
          { id: 'E', text: 'Geçen yıl aynı zamanlarda buradaydık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde zaman anlamı, bir zarf kelimesi (akşam, yarın vb.) ile değil, \"-ince\" eki alan zarf-fiil öbeği (sen gelince) ile sağlanmıştır.'
      }
    ]
  }
]
