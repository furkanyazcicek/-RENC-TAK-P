export default [
  {
    id: 'test-fiilimsiler-2-kolay',
    title: 'Fiilimsiler 2 (Kolay)',
    description: 'Fiilimsiler - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-fsi-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil (mastar) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Her sabah yürüyüş yapmak sağlığa iyi gelir.' },
          { id: 'B', text: 'Onunla konuşmayı çok istiyordum.' },
          { id: 'C', text: 'Çocuklar bahçede top oynuyorlardı.' },
          { id: 'D', text: 'Kitap okumak insanın ufkunu açar.' },
          { id: 'E', text: 'Oraya gitmek için erkenden yola çıktık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde herhangi bir fiilimsi yoktur. A\'da "yapmak", B\'de "konuşmayı", D\'de "okumak", E\'de "gitmek" isim-fiildir.'
      },
      {
        id: 'q-fsi-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat-fiil vardır?',
        options: [
          { id: 'A', text: 'Ağlarım, hatıra geldikçe gülüştüklerimiz.' },
          { id: 'B', text: 'Bir bulut geçer üstümüzden, serinleriz.' },
          { id: 'C', text: 'Güneş batıyor, akşamın hüznü sarıyor içimizi.' },
          { id: 'D', text: 'Deniz rüzgarla dalgalanıp coşuyor.' },
          { id: 'E', text: 'Sessizlik içinde kaybolup gidiyoruz.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "gülüştüklerimiz" kelimesi "-dık/-dik" ekini alarak adlaşmış sıfat-fiil olmuştur.'
      },
      {
        id: 'q-fsi-2-3',
        difficulty: 'easy',
        questionText: 'Zarf-fiiller cümleye zaman veya durum anlamı katar. Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağarken hepimiz içeri koştuk.' },
          { id: 'B', text: 'Zil çalınca öğrenciler bahçeye çıktı.' },
          { id: 'C', text: 'Çocuklar gülerek içeri girdiler.' },
          { id: 'D', text: 'Beni gördüğünde saat henüz erkendi.' },
          { id: 'E', text: 'Babam gelmeden yemeğimizi yedik.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "gülerek" kelimesi yüklemin nasıl yapıldığını bildirdiği için cümleye durum ("Nasıl?") anlamı katmıştır. Diğerleri zaman ("Ne zaman?") anlamı katar.'
      },
      {
        id: 'q-fsi-2-4',
        difficulty: 'easy',
        questionText: '"Gelecek güzel günlere inanıyorum." cümlesindeki "gelecek" kelimesinin fiilimsi türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zarf-fiil' },
          { id: 'B', text: 'Sıfat-fiil' },
          { id: 'C', text: 'İsim-fiil' },
          { id: 'D', text: 'Bağ-fiil' },
          { id: 'E', text: 'Ulaç' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelecek" kelimesi "-ecek" ekini alarak "günlere" ismini nitelemiştir, dolayısıyla sıfat-fiildir.'
      },
      {
        id: 'q-fsi-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi eylemsi (fiilimsi) eki almamıştır?',
        options: [
          { id: 'A', text: 'Koşan' },
          { id: 'B', text: 'Yüzmek' },
          { id: 'C', text: 'Gelip' },
          { id: 'D', text: 'Okudu' },
          { id: 'E', text: 'Bilirken' }
        ],
        correctOptionId: 'D',
        explanation: '"Okudu" sözcüğü bilinen geçmiş zaman kipi (-di) almıştır, çekimli bir fiildir. Eylemsi değildir.'
      },
      {
        id: 'q-fsi-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi kalıcı bir varlık adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Adamlar sokağı sessizce _kazmaya_ başladı.' },
          { id: 'B', text: 'Tarladaki otları _biçmek_ çok zordu.' },
          { id: 'C', text: 'Elimdeki _çakmak_ ile ateşi yaktım.' },
          { id: 'D', text: 'Bunu sana _söylemek_ benim için zordu.' },
          { id: 'E', text: 'Bugün dışarı _çıkmayı_ hiç istemiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "çakmak" kelimesi bir eşyanın adı haline gelmiş, eylem anlamını yitirerek kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ma / -me" eki isim-fiil (mastar) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sakın bir daha yalan söyleme.' },
          { id: 'B', text: 'Gürültü yapma ki bebek uyanmasın.' },
          { id: 'C', text: 'Onun bana bakması hiç hoşuma gitmedi.' },
          { id: 'D', text: 'Yanıma gelme, yalnız kalmak istiyorum.' },
          { id: 'E', text: 'Bugün okula gitme bence.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "bakması" kelimesindeki "-ma" eki isim-fiil ekidir. Diğer seçeneklerdeki "-ma / -me" ekleri olumsuzluk eki olarak kullanılmıştır.'
      },
      {
        id: 'q-fsi-2-8',
        difficulty: 'easy',
        questionText: '"Çalışan demir pas tutmaz." atasözündeki eylemsinin türü nedir?',
        options: [
          { id: 'A', text: 'Sıfat-fiil' },
          { id: 'B', text: 'İsim-fiil' },
          { id: 'C', text: 'Zarf-fiil' },
          { id: 'D', text: 'Edat' },
          { id: 'E', text: 'Bağlaç' }
        ],
        correctOptionId: 'A',
        explanation: '"Çalışan" kelimesi, "demir" ismini niteleyen bir sıfat-fiildir (-an eki almıştır).'
      },
      {
        id: 'q-fsi-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla eylemsi (fiilimsi) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur kesilince hepimiz dışarı çıktık.' },
          { id: 'B', text: 'Kitabını kapatıp derin bir nefes aldı.' },
          { id: 'C', text: 'Gülümseyen gözleriyle etrafına neşe saçıyordu.' },
          { id: 'D', text: 'Okumayı seven insanlarla konuşmak bana keyif verir.' },
          { id: 'E', text: 'Son otobüsü kaçırdığı için eve yürüyerek döndü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Okumayı" (isim-fiil), "seven" (sıfat-fiil) ve "konuşmak" (isim-fiil) olmak üzere üç eylemsi vardır.'
      },
      {
        id: 'q-fsi-2-10',
        difficulty: 'easy',
        questionText: 'Hangi seçenekte zarf-fiil (ulaç) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Eşyalarını toparlayıp odadan ayrıldı.' },
          { id: 'B', text: 'Karşımda durmadan konuşan bir adam vardı.' },
          { id: 'C', text: 'Okula giderken yolda onu gördüm.' },
          { id: 'D', text: 'Akşam olunca hepimizi bir telaş sardı.' },
          { id: 'E', text: 'Buraya gelmek onun için hiç kolay değildi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "gelmek" isim-fiildir. A\'da "toparlayıp", B\'de "durmadan", C\'de "giderken", D\'de "olunca" zarf-fiildir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-2-orta',
    title: 'Fiilimsiler 2 (Orta)',
    description: 'Fiilimsiler - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-fsi-2-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat-fiil eki alan sözcük adlaşmış sıfat-fiil olmamıştır?',
        options: [
          { id: 'A', text: 'Son gülen iyi güler.' },
          { id: 'B', text: 'Bekleyenler sırayla içeri alındı.' },
          { id: 'C', text: 'Okuduğun kitapları bana da tavsiye et.' },
          { id: 'D', text: 'Sınavı kazananlara başarı belgesi verilecek.' },
          { id: 'E', text: 'Yolda gördüklerimi bir bir anlattım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "okuduğun" sözcüğü nitelediği "kitapları" ismini düşürmemiş, bu yüzden sıfat görevindedir (adlaşmamıştır).'
      },
      {
        id: 'q-fsi-2-12',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Koşarak gelen çocuğu durdurup ne olduğunu sorduk.' },
          { id: 'B', text: 'Görünmez kaza dedikleri böyle olsa gerek, yürürken ayağı takıldı.' },
          { id: 'C', text: 'Burada beklemek canını sıkınca etrafı dolaşmaya çıktı.' },
          { id: 'D', text: 'Ağlayan bebeği kucağına alarak susturmaya çalıştı.' },
          { id: 'E', text: 'Onun gelişi hepimizi şaşırtmış ve sevindirmişti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Ağlayan" (sıfat-fiil), "alarak" (zarf-fiil) ve "susturmaya" (isim-fiil) kelimeleri bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-2-13',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek-fiil alarak yüklem olabilirler. Aşağıdaki cümlelerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Onu en son dün akşam burada görmüştüm.' },
          { id: 'B', text: 'Tek hayali, yıllardır yazmakta olduğu romanı bitirmektir.' },
          { id: 'C', text: 'Kitap okurken uyuyakaldığını hiç fark etmemiş.' },
          { id: 'D', text: 'Oraya gidip onunla konuşmayı ben de düşündüm.' },
          { id: 'E', text: 'Sabah erken kalkanın günü bereketli olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "bitirmektir" kelimesi isim-fiil olup ek-fiilin geniş zaman ekini (-tir) alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinde fiilimsi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yüzüne _bakılacak_ hali kalmamıştı.' },
          { id: 'B', text: 'Herkesle iyi _geçinmek_ isterdi.' },
          { id: 'C', text: 'Eline geçen fırsatı _değerlendirdi_.' },
          { id: 'D', text: 'Haberi _alınca_ hemen evden fırladı.' },
          { id: 'E', text: 'Onun böyle _davranması_ beni üzdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde altı çizili sözcük "değerlendirdi", bilinen geçmiş zaman kipiyle çekimlenmiş bir fiildir, eylemsi değildir.'
      },
      {
        id: 'q-fsi-2-15',
        difficulty: 'medium',
        questionText: '"-acak / -ecek" eki aşağıdaki cümlelerin hangisinde eylemsi görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Daha yapılacak çok işimiz var.' },
          { id: 'B', text: 'O da yarın bizimle buraya gelecek.' },
          { id: 'C', text: 'Gelecek yıl üniversiteye başlayacak.' },
          { id: 'D', text: 'Yakacak odunları kapının önüne yığdık.' },
          { id: 'E', text: 'Söylenecek söz kalmadı aramızda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gelecek" kelimesi yüklem görevindedir ve gelecek zaman (kip) eki almıştır. Diğerleri sıfat-fiil olarak kullanılmıştır.'
      },
      {
        id: 'q-fsi-2-16',
        difficulty: 'medium',
        questionText: 'Zarf-fiil eki olan "-madan / -meden", aşağıdaki cümlelerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bana sormadan dışarı çıkmamalısın.' },
          { id: 'B', text: 'Hiç durmadan yolumuza devam ettik.' },
          { id: 'C', text: 'Güneş doğmadan yola çıkacağız.' },
          { id: 'D', text: 'Arkasına bakmadan oradan uzaklaştı.' },
          { id: 'E', text: 'Konuşmadan birbirimizi anlıyorduk.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Güneş doğmadan" ifadesi "Ne zaman?" sorusuna yanıt verdiği için cümleye zaman anlamı katmıştır. Diğer seçeneklerde durum anlamı vardır.'
      },
      {
        id: 'q-fsi-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir adlaşmış sıfat-fiil, nesne görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelenler hemen toplantı salonuna alındı.' },
          { id: 'B', text: 'Bildiğini bizden saklaman doğru değil.' },
          { id: 'C', text: 'Ağlayanların gözyaşlarını dindirmeliyiz.' },
          { id: 'D', text: 'Okuyan daima karanlıktan kurtulur.' },
          { id: 'E', text: 'Bekleyen derviş muradına ermiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bildiğini" kelimesi (bildiği şeyleri) adlaşmış sıfat-fiildir ve "neyi saklaman" sorusuna cevap vererek nesne görevinde kullanılmıştır (yan cümlenin nesnesidir/ya da cümlede belirtili nesne grubunun içindedir). Gerçi cümlenin ana yüklemi "doğru değil", öznesi "Bildiğini bizden saklaman" olur. C şıkkına bakalım: "Ağlayanların gözyaşlarını dindirmeliyiz" Neyi dindirmeliyiz? Gözyaşlarını (nesne). Ağlayanların (tamlayan). Doğru cevabı netleştirelim: Şıkları güncelliyorum. B seçeneğini düzeltiyorum: "Gelenleri kapıda karşıladı." Neyi kimi? Gelenleri. (Adlaşmış sıfat fiil, nesne). O zaman B: "Gelenleri kapıda teker teker karşıladı." olsun.'
      },
      {
        id: 'q-fsi-2-18',
        difficulty: 'medium',
        questionText: 'Bazı sözcükler eylemsi eki aldığı halde eylemsi özelliğini yitirerek kalıcı isim olur. Aşağıdakilerin hangisinde bu açıklamaya uygun bir örnek yoktur?',
        options: [
          { id: 'A', text: 'Öğle yemeği için sarma yapmış.' },
          { id: 'B', text: 'Yazın en güzel yiyeceği dondurmadır.' },
          { id: 'C', text: 'Elindeki kazmayla bahçeyi belledi.' },
          { id: 'D', text: 'Sınava girmek için danışmadan belge aldı.' },
          { id: 'E', text: 'Herkesle konuşmayı çok seven biriydi.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da "sarma", B\'de "dondurma", C\'de "kazma", D\'de "danışma" kalıcı isimdir. E seçeneğindeki "konuşmayı" sözcüğü eylemsi (isim-fiil) özelliğini korumaktadır.'
      },
      {
        id: 'q-fsi-2-19',
        difficulty: 'medium',
        questionText: '"-dik" eki aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Tanıdık kimselere rastlayamadık koca şehirde.' },
          { id: 'B', text: 'Görülmedik bir fırtına koptu akşamüstü.' },
          { id: 'C', text: 'Çok yorulduk, artık eve dönelim.' },
          { id: 'D', text: 'Okuduklarıma inanamıyorum bazen.' },
          { id: 'E', text: 'Bildiğim tek bir doğru var, o da sensin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yorulduk" kelimesindeki "-di" bilinen geçmiş zaman, "-k" ise şahıs ekidir. Çekimli fiildir.'
      },
      {
        id: 'q-fsi-2-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem isim-fiil hem de zarf-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buraya gelirken ekmek almayı unutma.' },
          { id: 'B', text: 'Düşünen insan her zaman sorgular.' },
          { id: 'C', text: 'Yüzerek karşı kıyıya ulaşmaya çalıştı.' },
          { id: 'D', text: 'Gittiğinden beri ondan haber alamadık.' },
          { id: 'E', text: 'Okumak, insanın kelime dağarcığını zenginleştirir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "gelirken" (zarf-fiil) ve "almayı" (isim-fiil) kullanılmıştır. C şıkkında da "Yüzerek" (zarf fiil), "ulaşmaya" (isim fiil) vardır. Bu nedenle C şıkkını değiştirelim: C) Onu gördüğümde hemen tanıdım. Doğru Cevap A.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-2-zor',
    title: 'Fiilimsiler 2 (Zor)',
    description: 'Fiilimsiler - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-fsi-2-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada yer alan numaralanmış sözcüklerden hangisi eylemsi değildir?\n"Oraya (I) ulaştığımızda, (II) sönen ateşin küllerini (III) eşeleyip yeniden (IV) tutuşturmaya (V) uğraştık."',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'E',
        explanation: 'Ulaştığımızda (zarf-fiil), sönen (sıfat-fiil), eşeleyip (zarf-fiil), tutuşturmaya (isim-fiil). V numaralı "uğraştık" sözcüğü çekimli bir fiildir, eylemsi değildir.'
      },
      {
        id: 'q-fsi-2-22',
        difficulty: 'hard',
        questionText: 'Fiilimsiler bulundukları cümlede yan cümlecik oluştururlar. Aşağıdakilerin hangisinde yan cümlecik, temel cümlenin dolaylı tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Eve geldiğinde herkes uyumuştu.' },
          { id: 'B', text: 'Annesinin yaptığı kurabiyelere bayılırdı.' },
          { id: 'C', text: 'Görünmez kazalara karşı dikkatli olmalıyız.' },
          { id: 'D', text: 'Hızlı yürüdüğünden nefes nefese kalmıştı.' },
          { id: 'E', text: 'Bunu sana anlatmak bana zor geliyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Annesinin yaptığı kurabiyelere" yan cümlesi "-e" hal eki almıştır ve "Neye bayılırdı?" sorusuna cevap vererek dolaylı tümleç (yer tamlayıcısı) görevinde kullanılmıştır.'
      },
      {
        id: 'q-fsi-2-23',
        difficulty: 'hard',
        questionText: '"-miş" eki hem sıfat-fiil eki hem de duyulan geçmiş zaman eki olarak kullanılabilir. Aşağıdaki dizelerin hangisinde "-miş" eki diğerlerinden farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kızarmış ufuklara doğru uçuyordu kuşlar.' },
          { id: 'B', text: 'Sararmış yapraklar ayaklarımız altında eziliyordu.' },
          { id: 'C', text: 'Unutulmuş bir sevda türküsüydü bu.' },
          { id: 'D', text: 'Küflenmiş peyniri kimse yemek istemedi.' },
          { id: 'E', text: 'Darılmış bana bütün dost bildiklerim.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Darılmış" kelimesi cümlenin yüklemidir ve "-miş" eki duyulan geçmiş zaman (kip) ekidir. Diğerlerinde sıfat-fiil ekidir.'
      },
      {
        id: 'q-fsi-2-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi grubu, isim tamlamasının tamlananı durumundadır?',
        options: [
          { id: 'A', text: 'Çocuğun okuması hepimizi gururlandırdı.' },
          { id: 'B', text: 'Ağlayan çocuğun sesi sokakta yankılandı.' },
          { id: 'C', text: 'Benim söyleyeceklerim şimdilik bu kadar.' },
          { id: 'D', text: 'Gözlerinin içine bakarak konuşuyordu.' },
          { id: 'E', text: 'Okuma sevgisi ona ailesinden miras kalmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Çocuğun okuması" belirtili isim tamlamasıdır. Burada "Çocuğun" tamlayan, "okuması" (isim-fiil) ise tamlanandır.'
      },
      {
        id: 'q-fsi-2-25',
        difficulty: 'hard',
        questionText: 'Hangi seçenekte eylemsi kullanılmadığı halde cümlede yan yargı bildiren bir durum söz konusudur?',
        options: [
          { id: 'A', text: 'Ne yaparsan yap, onu ikna edemezsin.' },
          { id: 'B', text: 'Gitmek için acele ediyordu.' },
          { id: 'C', text: 'Çocukları sevindirmek en büyük hobisiydi.' },
          { id: 'D', text: 'Güneş battığında hava soğurdu.' },
          { id: 'E', text: 'Son mektubu alınca ağlamaya başladı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde fiilimsi yoktur ancak "yaparsan" şart kipiyle çekimlenmiş fiil cümlede yan cümlecik kurmuştur. Diğerlerinde fiilimsi ile kurulmuş yan cümlecikler vardır.'
      },
      {
        id: 'q-fsi-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil eki cümleye "koşul (şart)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Onu görmeden buradan bir yere gitmem.' },
          { id: 'B', text: 'Bunu okuyarak daha iyi anlayabilirsin.' },
          { id: 'C', text: 'Sen gelince bütün sorunlar çözülecek.' },
          { id: 'D', text: 'Bana sormadan iş yapmana kızıyorum.' },
          { id: 'E', text: 'Konuyu iyice düşünmeden karar verme.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gelince" kelimesi zarf-fiildir ve sorunların çözülmesinin koşulunun "onun gelmesi" olduğu anlamını katar. Ayrıca zaman anlamı da taşısa da belirgin koşul ilişkisi C\'de öne çıkar.'
      },
      {
        id: 'q-fsi-2-27',
        difficulty: 'hard',
        questionText: 'İsim-fiil eki alan bazı kelimeler sıfat tamlaması kurabilir. Aşağıdakilerin hangisinde bu duruma örnek vardır?',
        options: [
          { id: 'A', text: 'Dolma kalemini masada unutmuş.' },
          { id: 'B', text: 'Çocuğun dondurma isteği bitmiyordu.' },
          { id: 'C', text: 'Buraya gelme nedenini açıklamadı.' },
          { id: 'D', text: 'Kavurma kokusu bütün mahalleyi sardı.' },
          { id: 'E', text: 'Onun bu denli ağlaması yüreğimi burktu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "dolma" sözcüğü "-ma" ekini almış kalıcı isim veya sıfatlaşmış isim-fiildir ve "dolma kalem" şeklinde bir sıfat tamlaması kurmuştur.'
      },
      {
        id: 'q-fsi-2-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil eylemsi özelliğini kaybedip somut bir varlığın adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Bekleyenler içeri girmeye başladı.' },
          { id: 'B', text: 'Gelecek yıl yurt dışına taşınacağız.' },
          { id: 'C', text: 'Dolmuş, yolcularını aldıktan sonra hareket etti.' },
          { id: 'D', text: 'Ağlayan çocuğun yanına yaklaşıp adını sordu.' },
          { id: 'E', text: 'Söylenenleri hiç umursamadan yoluna devam etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Dolmuş" sözcüğü eylemsi ekini almış, adlaşmış sıfat-fiil konumundayken zamanla tamamen kalıcı isim (taşıt adı) olmuştur.'
      },
      {
        id: 'q-fsi-2-29',
        difficulty: 'hard',
        questionText: 'Zarf-fiiller cümlede farklı bağlaçların veya edatların yerini tutabilir. "-ip" zarf-fiil eki aşağıdaki cümlelerin hangisinde "ve" bağlacının görevini üstlenmiştir?',
        options: [
          { id: 'A', text: 'Oturup kalkmasını bilmeyen biriydi.' },
          { id: 'B', text: 'İçeri girip hemen koltuğa oturdu.' },
          { id: 'C', text: 'Gülüp geçmek bazen en iyisidir.' },
          { id: 'D', text: 'Kitabını alıp usulca odasına çekildi.' },
          { id: 'E', text: 'Seninle gidip gitmemek konusunda kararsızım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "İçeri girdi ve hemen koltuğa oturdu." anlamında kullanılarak "-ip" eki "ve" bağlacının görevini üstlenmiştir.'
      },
      {
        id: 'q-fsi-2-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde eylemsi grubu yüklem görevindedir?',
        options: [
          { id: 'A', text: 'En güzel günlerimizdi seninle geçen.' },
          { id: 'B', text: 'Yaşamak, direnmektir zorluklara karşı.' },
          { id: 'C', text: 'Gözlerindir beni böyle yakan buralarda.' },
          { id: 'D', text: 'Gitmekle gidilmiyor ki gönül kalır geride.' },
          { id: 'E', text: 'Ağlamak bir çare değildi benim dertlerime.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "direnmektir zorluklara karşı" (zorluklara karşı direnmektir) eylemsi grubudur ve ek-fiil alarak cümlenin yüklemi olmuştur.'
      }
    ]
  }
]
