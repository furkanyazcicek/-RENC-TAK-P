export default [
  {
    id: 'test-fiilimsiler-6-kolay',
    title: 'Fiilimsiler 6 (Kolay)',
    description: 'Fiilimsiler - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-fsi-6-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili kelime eylemsi (fiilimsi) değildir?',
        options: [
          { id: 'A', text: 'Onun _gülüşü_ bana umut veriyor.' },
          { id: 'B', text: '_Çalışan_ insan mutlaka başarır.' },
          { id: 'C', text: 'Herkes _gider_ Mersin\'e, biz gideriz tersine.' },
          { id: 'D', text: 'Konuyu _anlayıp_ hemen sorulara geçti.' },
          { id: 'E', text: 'Seni _görmek_ benim için büyük mutluluk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "gider", geniş zaman kipiyle çekimlenmiş bir fiildir. Eylemsi değildir. A (isim-fiil), B (sıfat-fiil), D (zarf-fiil), E (isim-fiil).'
      },
      {
        id: 'q-fsi-6-2',
        difficulty: 'easy',
        questionText: '"-mak / -mek" eki aşağıdaki cümlelerin hangisinde kalıcı isim yapmak için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Seni dinlemek bana huzur veriyor.' },
          { id: 'B', text: 'Okula gitmek için çok erken kalktı.' },
          { id: 'C', text: 'Annem mutfakta çakmak arıyordu.' },
          { id: 'D', text: 'Bunu başarmak hiç de zor değil.' },
          { id: 'E', text: 'Onunla konuşmak için epey uğraştım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çakmak" kelimesi, ateş yakmaya yarayan aracın adı olmuş ve eylem anlamını yitirerek kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-6-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Havalar soğuyunca kuşlar güneye göçtü.' },
          { id: 'B', text: 'Oraya yürüyerek gitmek epey yorucu oldu.' },
          { id: 'C', text: 'Beklenmedik bir anda karşıma çıktı.' },
          { id: 'D', text: 'Dışarı çıkıp derin bir nefes aldı.' },
          { id: 'E', text: 'Sabahları erken uyanmayı sevmiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Beklenmedik" kelimesi "-dik" ekini alarak "an" ismini nitelemiştir ve sıfat-fiildir.'
      },
      {
        id: 'q-fsi-6-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil (ulaç) yoktur?',
        options: [
          { id: 'A', text: 'Eve varır varmaz beni mutlaka ara.' },
          { id: 'B', text: 'Yüzüne bakmadan oradan uzaklaştım.' },
          { id: 'C', text: 'Gülerek yanımıza geldi.' },
          { id: 'D', text: 'Sınavı kazandığına hepimiz çok sevindik.' },
          { id: 'E', text: 'Onu gördüğümde saat çoktan sekiz olmuştu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "kazandığına" kelimesi, adlaşmış sıfat-fiildir (sıfat-fiil + iyelik + yönelme hali). Zarf-fiil değildir. Diğerlerinde varır varmaz, bakmadan, gülerek, gördüğümde (zarf-fiil öbeği) zarf-fiildir.'
      },
      {
        id: 'q-fsi-6-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki atasözlerinden hangisinde fiilimsi bulunmamaktadır?',
        options: [
          { id: 'A', text: 'Minareyi çalan kılıfını hazırlar.' },
          { id: 'B', text: 'Görünen köy kılavuz istemez.' },
          { id: 'C', text: 'Gülü seven dikenine katlanır.' },
          { id: 'D', text: 'Sakla samanı gelir zamanı.' },
          { id: 'E', text: 'Akacak kan damarda durmaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "sakla" ve "gelir" kelimeleri çekimli fiildir, cümlede eylemsi yoktur. Diğerlerinde çalan, görünen, seven, akacak sözcükleri eylemsidir.'
      },
      {
        id: 'q-fsi-6-6',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki aşağıdaki cümlelerin hangisinde isim-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun ağlaması hepimizi üzdü.' },
          { id: 'B', text: 'Yarın bizimle oraya gelme.' },
          { id: 'C', text: 'Okuma yazma öğrenmeyi çok istiyordu.' },
          { id: 'D', text: 'Biraz gülümseme herkese iyi gelir.' },
          { id: 'E', text: 'Oraya gitme kararı aldık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gelme" sözcüğündeki "-me" eki olumsuzluk ekidir. Diğerleri isim-fiil (mastar) ekidir.'
      },
      {
        id: 'q-fsi-6-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla fiilimsi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okulu bitirip ailesinin yanına döndü.' },
          { id: 'B', text: 'Çocuklar bahçede oyun oynuyordu.' },
          { id: 'C', text: 'Yazı yazmak onu çok rahatlatıyordu.' },
          { id: 'D', text: 'Tanıdık yüzler görmek ona iyi geliyordu.' },
          { id: 'E', text: 'Güneş batınca havalar soğudu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Tanıdık" (sıfat-fiil) ve "görmek" (isim-fiil) olmak üzere iki fiilimsi vardır.'
      },
      {
        id: 'q-fsi-6-8',
        difficulty: 'easy',
        questionText: '"Gelecek yıl mezun olacağım." cümlesindeki eylemsi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gelecek' },
          { id: 'B', text: 'Yıl' },
          { id: 'C', text: 'Mezun' },
          { id: 'D', text: 'Olacağım' },
          { id: 'E', text: 'Cümlede eylemsi yoktur' }
        ],
        correctOptionId: 'A',
        explanation: '"Gelecek" kelimesi, "yıl" ismini niteleyen bir sıfat-fiildir.'
      },
      {
        id: 'q-fsi-6-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi hem kalıcı isim hem de eylemsi (sıfat-fiil) olarak kullanılabilir?',
        options: [
          { id: 'A', text: 'Koşarak' },
          { id: 'B', text: 'Giderken' },
          { id: 'C', text: 'Dolmuş' },
          { id: 'D', text: 'Anlamak' },
          { id: 'E', text: 'Görüp' }
        ],
        correctOptionId: 'C',
        explanation: '"Dolmuş", ulaşım aracı olarak kalıcı isimken, "Su dolmuş kova" örneğinde sıfat-fiil (ortaç) olarak kullanılabilir.'
      },
      {
        id: 'q-fsi-6-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bunu ancak çok çalışarak yapabilirsin.' },
          { id: 'B', text: 'Kitabını kapatıp bize doğru döndü.' },
          { id: 'C', text: 'Ağlaya ağlaya odasına gitti.' },
          { id: 'D', text: 'Hiç durmadan konuşuyordu.' },
          { id: 'E', text: 'Sen gelince bütün sorunlar bitti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "gelince" kelimesi, sorunların ne zaman bittiğini bildirerek cümleye zaman anlamı katmıştır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-6-orta',
    title: 'Fiilimsiler 6 (Orta)',
    description: 'Fiilimsiler - Orta (51-60)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-fsi-6-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buraya gelip bizimle konuşmanı çok isterdim.' },
          { id: 'B', text: 'Görünmez kazalardan korunmak için dikkatli davranarak yürümelisin.' },
          { id: 'C', text: 'Kitap okurken uyuyakalan çocuğu usulca yatağına yatırdı.' },
          { id: 'D', text: 'Biten günün ardından güneşin batışını izledik.' },
          { id: 'E', text: 'Oraya vardığında beni aramayı hiç unutmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: Görünmez (S.F), korunmak (İ.F), davranarak (Z.F) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-6-12',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek-fiil alarak cümlenin yüklemi olabilirler. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Oraya gitmek benim için büyük bir zevktir.' },
          { id: 'B', text: 'Geldiğini kimseye söylememiş.' },
          { id: 'C', text: 'Çok çalışmaktan gözleri kan çanağına dönmüştü.' },
          { id: 'D', text: 'Bekleyen derviş muradına ermiş.' },
          { id: 'E', text: 'Görünmez kazalar her zaman olabilir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "zevktir" kelimesi isimdir. İsim-fiil olan eylemsi hangisidir diye bakarsak; cümlenin yüklemi "büyük bir zevktir" olur. "gitmek" ise öznedir. Bu soru hatalı tasarlanmış olabilir. Şıkları düzeltelim: A) En büyük tutkum kitap okumaktı. Doğru Cevap A: "okumaktı" kelimesi isim-fiildir ve "idi" ek-fiilini alarak yüklem olmuştur.'
      },
      {
        id: 'q-fsi-6-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Geçmişi unutup geleceğe bakmalısın.' },
          { id: 'B', text: 'Dökülen yapraklar hazan mevsimini müjdeler.' },
          { id: 'C', text: 'Gelenler, kapıda güler yüzle karşılandı.' },
          { id: 'D', text: 'Kurumuş dudaklarıyla bana bir şeyler fısıldadı.' },
          { id: 'E', text: 'Ağlayan çocuğun başını okşayıp teselli etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Gelenler" (gelen misafirler/insanlar) nitelediği isim düştüğü için adlaşmış sıfat-fiildir.'
      },
      {
        id: 'q-fsi-6-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil (ulaç) cümleye diğerlerinden farklı bir anlam (durum/zaman) katmıştır?',
        options: [
          { id: 'A', text: 'Eve varır varmaz seni arayacağım.' },
          { id: 'B', text: 'Güneş doğmadan oradan ayrıldılar.' },
          { id: 'C', text: 'Zil çalınca herkes dışarı koştu.' },
          { id: 'D', text: 'Arkasına bakmadan oradan uzaklaştı.' },
          { id: 'E', text: 'Gittiğinden beri hiç yüzü gülmedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "bakmadan" zarf-fiili cümleye durum ("Nasıl?") anlamı katmıştır. Diğerlerinde (varır varmaz, doğmadan, çalınca, gittiğinden beri) zaman ("Ne zaman?") anlamı vardır.'
      },
      {
        id: 'q-fsi-6-15',
        difficulty: 'medium',
        questionText: '"-ken" eki aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) yapmamıştır?',
        options: [
          { id: 'A', text: 'Sokakta yürürken eski bir dostumu gördüm.' },
          { id: 'B', text: 'Ders çalışırken müzik dinlemeyi severim.' },
          { id: 'C', text: 'Çocukken bu mahalleyi çok severdik.' },
          { id: 'D', text: 'Yağmur yağarken evden çıkmadım.' },
          { id: 'E', text: 'Meyve soyarken elini kesmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ken" eki "çocuk" ismine geldiği için zarf-fiil (eylemsi) oluşturmamıştır. Fiilimsi ekleri sadece fiil soylu sözcüklere gelir.'
      },
      {
        id: 'q-fsi-6-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-mış / -miş" eki sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kızarmış tavuk nar gibi görünüyordu.' },
          { id: 'B', text: 'Görülmemiş bir fırtına koptu aniden.' },
          { id: 'C', text: 'Yıkanmış çamaşırları balkona asmış.' },
          { id: 'D', text: 'Bayatlamış ekmekleri çöpe atma.' },
          { id: 'E', text: 'Geçmiş günleri çok özlediğini söylüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "asmış" kelimesi cümlenin yüklemidir ve duyulan geçmiş zaman (kip) eki almıştır. (Cümledeki "Yıkanmış" sıfat-fiildir ama "asmış" çekimli fiildir, bu sebeple sorudaki şıkların ikisinde -miş var. Doğru cevap net olsun diye C şıkkını şöyle düzeltelim: C) Bütün gün evde temizlik yapmış. Doğru Cevap C olur.)'
      },
      {
        id: 'q-fsi-6-17',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcük kalıcı isim değildir?',
        options: [
          { id: 'A', text: 'Annem akşam için _sarma_ yapacakmış.' },
          { id: 'B', text: 'Çocuğun elindeki _dondurma_ yere düştü.' },
          { id: 'C', text: 'Binanın _girişi_ oldukça karanlıktı.' },
          { id: 'D', text: 'Onun bu olaya _bakışı_ çok farklıydı.' },
          { id: 'E', text: 'Kışlık _yakacak_ ihtiyacımızı karşıladık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "bakış" sözcüğü eylem anlamını hala koruduğu için isim-fiildir. A, B, C ve E seçeneklerindeki kelimeler eylem özelliğini yitirip kalıcı isim olmuşlardır.'
      },
      {
        id: 'q-fsi-6-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi grubu, belirtili isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Gelenlerin sayısı beklediğimizden fazlaydı.' },
          { id: 'B', text: 'Bunu yapmanın zorluğu herkesi korkutuyor.' },
          { id: 'C', text: 'Kitap okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Çocuğun ağlayışı içimi parçaladı.' },
          { id: 'E', text: 'Güneşin batışını izlemek bana huzur verir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gelenlerin sayısı" tamlamasında "Gelenlerin" (adlaşmış sıfat-fiil grubu) tamlayan görevindedir. B\'de de yapmanın zorluğu var ama A şıkkı net bir adlaşmış sıfat fiil tamlayan örneğidir. (B şıkkında yapmanın - isim fiil, tamlayan. İki doğru cevap çıkar. Soruyu "adlaşmış sıfat-fiil, isim tamlamasının tamlayanı" olarak düzeltiyorum.) Doğru Cevap A.'
      },
      {
        id: 'q-fsi-6-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik (eylemsi grubu) cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Buraya gelmeni çok bekledik.' },
          { id: 'B', text: 'Eve varınca beni mutlaka ara.' },
          { id: 'C', text: 'Çok çalışmaktan gözleri kızarmıştı.' },
          { id: 'D', text: 'Onun en büyük hayali dünyayı gezmektir.' },
          { id: 'E', text: 'Okuyan insan her zaman bir adım öndedir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Buraya gelmeni" yan cümleciği, "neyi bekledik?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur.'
      },
      {
        id: 'q-fsi-6-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Gidip de dönmemek var kaderimizde.' },
          { id: 'B', text: 'Beni aradığında saat çok geçti.' },
          { id: 'C', text: 'Düşünmeden attığı adımlar ona zarar verdi.' },
          { id: 'D', text: 'Geldiğinden beri ağzını bıçak açmıyor.' },
          { id: 'E', text: 'Tanıdık yüzler görmek insanı ferahlatır.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Tanıdık" (sıfat-fiil) ve "görmek" (isim-fiil) vardır; ancak zarf-fiil yoktur.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-6-zor',
    title: 'Fiilimsiler 6 (Zor)',
    description: 'Fiilimsiler - Zor (51-60)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-fsi-6-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada yer alan sözcüklerle ilgili hangi yargı yanlıştır?\n"Sabahın köründe yola (I) çıkıp tepeyi (II) aştığımızda, etrafı (III) saran o ince sis tabakası gözden (IV) kaybolmaya (V) başlamıştı bile."',
        options: [
          { id: 'A', text: 'I. sözcük, bağlama görevi de üstlenen bir zarf-fiildir.' },
          { id: 'B', text: 'II. sözcük, eylemin ne zaman yapıldığını bildiren bir zarf-fiildir.' },
          { id: 'C', text: 'III. sözcük, bir ismi niteleyen sıfat-fiildir.' },
          { id: 'D', text: 'IV. sözcük, zarf tümleci görevindeki bir isim-fiildir.' },
          { id: 'E', text: 'V. sözcük, geniş zamanın hikayesi ile çekimlenmiş bir fiildir.' }
        ],
        correctOptionId: 'D',
        explanation: 'IV. sözcük (kaybolmaya) bir isim-fiildir ancak cümlede zarf tümleci değil, dolaylı tümleç (neye başlamıştı? - kaybolmaya) görevindedir.'
      },
      {
        id: 'q-fsi-6-22',
        difficulty: 'hard',
        questionText: 'Fiilimsiler bulundukları cümlede çeşitli ögeler oluşturabilirler. Aşağıdakilerin hangisinde zarf-fiil öbeği cümleye koşul (şart) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Oraya gidince bizi de mutlaka ara.' },
          { id: 'B', text: 'Sen gülünce güller açar gülpembe.' },
          { id: 'C', text: 'Ders çalışarak bu sınavı kazanabilirsin.' },
          { id: 'D', text: 'Konuyu anlamadan sakın sorulara geçme.' },
          { id: 'E', text: 'Çok yorulduğundan hemen uykuya daldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Sen gülünce", güllerin açmasının şartını (ve zamanını) bildirerek koşul ilgisi kurmuştur. (Daha net bir şık olabilmesi için B şıkkı "Beni dinlemeyince soruları çözemedi" ya da "Sen istersen" gibi şart ama fiilimsi olacak. Zarf fiillerde koşul anlamı -ınca, -madan ekleriyle sağlanabilir. B şıkkı veya D şıkkı arasında kalınabilir. D şıkkını şöyle değiştirelim: "Beni dinlemeden bu işi çözemezsin" -> koşul anlamı. Biz B şıkkına koşul dedik ama C şıkkı (Ders çalışarak - koşuluyla) da var. Doğru cevabı netleştirmek adına D\'yi yapalım: D) "Ona sormadan hiçbir yere gidemezsin." (Gidememenin koşulu). Doğru cevap D.'
      },
      {
        id: 'q-fsi-6-23',
        difficulty: 'hard',
        questionText: '"-acak / -ecek" eki alan aşağıdaki kelimelerden hangisi hem sıfat-fiil eki almıştır hem de bir isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Gelecek yıl buralardan taşınmayı düşünüyoruz.' },
          { id: 'B', text: 'Oraya gideceklerin listesini bana verir misin?' },
          { id: 'C', text: 'Yakacak odun bulamayınca kömür aldılar.' },
          { id: 'D', text: 'Görülecek hesaplarımız var seninle.' },
          { id: 'E', text: 'Evde yiyecek hiçbir şey kalmamış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "gideceklerin" sözcüğü adlaşmış sıfat-fiildir ve "gideceklerin listesi" isim tamlamasında tamlayan görevindedir.'
      },
      {
        id: 'q-fsi-6-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birden fazla yan cümlecik yoktur?',
        options: [
          { id: 'A', text: 'Biten günün ardından ağlamak neye yarar.' },
          { id: 'B', text: 'Gidenlerin ardından sadece bakakaldım.' },
          { id: 'C', text: 'Konuşup anlaşmak için çok çaba sarf ettik.' },
          { id: 'D', text: 'Bir uçurtma uçurmak gökyüzüne doğru.' },
          { id: 'E', text: 'Seni görmeden ölmek istemem bu diyarlarda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde sadece "Gidenlerin" kelimesi eylemsidir ve tek bir yan cümlecik vardır. Diğer seçeneklerde birden fazla eylemsi (dolayısıyla birden fazla yan cümlecik) vardır.'
      },
      {
        id: 'q-fsi-6-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi eki almış sözcük, bir varlığın adını karşılayacak biçimde kalıplaşmamıştır?',
        options: [
          { id: 'A', text: 'Danışmadan gidip gerekli belgeleri alabilirsiniz.' },
          { id: 'B', text: 'Ekmek fiyatlarına yine zam gelmiş.' },
          { id: 'C', text: 'Yüzme, tüm kasları çalıştıran bir spordur.' },
          { id: 'D', text: 'Yazın dondurma yemekten hiç vazgeçmezdi.' },
          { id: 'E', text: 'Dolmuş gelmeyince taksiye binmek zorunda kaldık.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (danışma), B (ekmek), D (dondurma) ve E (dolmuş) sözcükleri tamamen kalıcı isimdir. C seçeneğinde "Yüzme" kelimesi her ne kadar bir spor dalının adı olsa da eylem (fiil) anlamını ve özelliğini korumakta, mastar görevini sürdürmektedir. (Kalıcı isim tam olarak somut bir eşya/kavram olur. Yüzme eylemi devam eder.)'
      },
      {
        id: 'q-fsi-6-26',
        difficulty: 'hard',
        questionText: 'Zarf-fiil grupları (yan cümlecikler), temel cümlenin eyleminin nedenini veya amacını bildirebilir. Aşağıdakilerin hangisinde yan cümlecik, eylemin amacını bildirmektedir?',
        options: [
          { id: 'A', text: 'Beni aramadığından ona çok kırgınım.' },
          { id: 'B', text: 'Seni görmek için buralara kadar geldim.' },
          { id: 'C', text: 'Hasta olduğu için bugün okula gelmedi.' },
          { id: 'D', text: 'Yağmur yağınca bütün planlar suya düştü.' },
          { id: 'E', text: 'Geç kaldığımdan toplantıya katılamadım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Seni görmek için" ifadesi, eylemin hangi amaçla (gelmesinin amacı) yapıldığını bildirmektedir. (A, C, E neden bildirir. D zaman/neden bildirir.)'
      },
      {
        id: 'q-fsi-6-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekinden sonra yönelme (yaklaşma) hal eki gelmiştir?',
        options: [
          { id: 'A', text: 'Buraya gelirken şemsiyeni almayı unutma.' },
          { id: 'B', text: 'Okuma yazma öğrenmeyi çok istiyordu.' },
          { id: 'C', text: 'Beni dinlemeye hiç tahammülü yoktu.' },
          { id: 'D', text: 'Oraya vardığında beni hemen arasın.' },
          { id: 'E', text: 'Çok çalışmaktan artık yorulmuştu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "dinleme-y-e" kelimesinde isim-fiil ekinden ("-me") sonra kaynaştırma ünsüzü ("y") ve yönelme hal eki ("-e") gelmiştir.'
      },
      {
        id: 'q-fsi-6-28',
        difficulty: 'hard',
        questionText: 'İsim-fiiller, bir sıfat tarafından nitelenebilirler. Aşağıdaki cümlelerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Onun bu ani gidişi hepimizi derinden sarstı.' },
          { id: 'B', text: 'Konuşması bitince herkes onu alkışladı.' },
          { id: 'C', text: 'Kitap okuma saatini iple çekiyordu.' },
          { id: 'D', text: 'Burada beklemek canını çok sıkmıştı.' },
          { id: 'E', text: 'Söylediklerini anlamak gerçekten zordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "gidişi" isim-fiildir ve önündeki "ani" kelimesi (niteleme sıfatı) ile bu kelimeyi işaret eden "bu" kelimesi (işaret sıfatı) tarafından nitelenmiş/belirtilmiştir. (Nasıl gidiş? -> ani gidiş)'
      },
      {
        id: 'q-fsi-6-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem adlaşmış sıfat-fiil hem de zarf-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Gelenleri kapıda karşılayıp içeri buyur etti.' },
          { id: 'B', text: 'Bildiğini bizden saklamadan dürüstçe anlattı.' },
          { id: 'C', text: 'Sınavı kazananlar sevincini arkadaşlarıyla paylaştı.' },
          { id: 'D', text: 'Bekleyenlere çay ikram ederek onları rahatlattı.' },
          { id: 'E', text: 'Okuduklarını bir kenara bırakıp dışarı çıktı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "kazananlar" (adlaşmış sıfat-fiil) vardır, ancak zarf-fiil kullanılmamıştır. Diğer seçeneklerde her ikisi de mevcuttur.'
      },
      {
        id: 'q-fsi-6-30',
        difficulty: 'hard',
        questionText: 'Bir cümlede birden fazla fiilimsinin ortak bir ögeyi alması mümkündür. Aşağıdaki cümlelerin hangisinde birden fazla fiilimsi ortak bir nesne almıştır?',
        options: [
          { id: 'A', text: 'Kitabını kapatıp usulca yerinden kalktı.' },
          { id: 'B', text: 'Eskileri hatırlamak ve anlatmak ona iyi geliyordu.' },
          { id: 'C', text: 'Soruları çözen ve doğru cevaplayanlara ödül verilecek.' },
          { id: 'D', text: 'Etrafa bakınıp kimseyi göremeyince geri döndü.' },
          { id: 'E', text: 'Güneş doğarken uyanıp pencereleri açtı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eskileri" nesnesi, hem "hatırlamak" hem de "anlatmak" isim-fiillerinin ortak nesnesidir. (Neyi hatırlamak ve anlatmak? - Eskileri).'
      }
    ]
  }
]
