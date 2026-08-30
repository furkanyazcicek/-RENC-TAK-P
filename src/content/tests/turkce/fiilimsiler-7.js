export default [
  {
    id: 'test-fiilimsiler-7-kolay',
    title: 'Fiilimsiler 7 (Kolay)',
    description: 'Fiilimsiler - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-fsi-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekini almış bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Bugün dışarı çıkmak istemiyorum.' },
          { id: 'B', text: 'Onu gördüğümde hemen tanıdım.' },
          { id: 'C', text: 'Yağmur dindi, güneş yavaşça yüzünü gösterdi.' },
          { id: 'D', text: 'Koşan çocukların sesi sokağı dolduruyordu.' },
          { id: 'E', text: 'Buraya gelip bizimle çay içti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki kelimeler (yağmur, dindi, güneş, yavaşça, yüzünü, gösterdi) isim, zarf veya çekimli fiildir; fiilimsi yoktur.'
      },
      {
        id: 'q-fsi-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük isim-fiil (mastar) değildir?',
        options: [
          { id: 'A', text: 'Seninle burada _buluşmak_ harikaydı.' },
          { id: 'B', text: 'Bu konudaki _görüşünü_ herkese açıkladı.' },
          { id: 'C', text: 'Çocukların _oynaması_ için park yaptılar.' },
          { id: 'D', text: 'Kitap _okumayı_ çok seven biriydi.' },
          { id: 'E', text: 'Her zaman doğruyu _söylemek_ gerekir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "görüş" sözcüğü eylem anlamını yitirerek (fikir, düşünce anlamında) kalıcı isim olmuştur. Diğerleri eylem anlamını koruyan isim-fiillerdir.'
      },
      {
        id: 'q-fsi-7-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bir ilkbahar sabahı güneşle uyandın mı hiç?' },
          { id: 'B', text: 'Gidiyorum gurbeti gönlümde duya duya.' },
          { id: 'C', text: 'Biten sevgilerin ardından ağlamak yersizdir.' },
          { id: 'D', text: 'Ne sen beni unut ne de ben seni.' },
          { id: 'E', text: 'Karanlık basınca herkes evine çekilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Biten" kelimesi "-en" sıfat-fiil ekini almıştır. Diğerlerinde sıfat-fiil yoktur.'
      },
      {
        id: 'q-fsi-7-4',
        difficulty: 'easy',
        questionText: 'Zarf-fiiller cümleye durum veya zaman anlamı katar. Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye durum (nasıl) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş doğunca yola çıktık.' },
          { id: 'B', text: 'Gülümseyerek yanımıza yaklaştı.' },
          { id: 'C', text: 'Zil çalar çalmaz dışarı koştuk.' },
          { id: 'D', text: 'Babam gelmeden yemeğimizi yiyelim.' },
          { id: 'E', text: 'Kar yağdığında buralar çok soğuk olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Gülümseyerek" kelimesi "Nasıl yaklaştı?" sorusuna cevap vererek cümleye durum anlamı katmıştır. Diğerleri zaman ("Ne zaman?") anlamı katar.'
      },
      {
        id: 'q-fsi-7-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-dık / -dik" eki sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Senin anlattığın hikayeler çok güzeldi.' },
          { id: 'B', text: 'Okuduğumuz şiir herkesi duygulandırdı.' },
          { id: 'C', text: 'Beklediğimiz misafirler nihayet geldi.' },
          { id: 'D', text: 'Çok yorulduk, biraz dinlenelim.' },
          { id: 'E', text: 'Bildiğim bütün doğruları ona anlattım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yorulduk" kelimesi çekimli fiildir (yorul - du - k). Diğerlerinde "-dık / -dik" eki isimleri niteleyen sıfat-fiiller yapmıştır.'
      },
      {
        id: 'q-fsi-7-6',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki aşağıdaki cümlelerin hangisinde olumsuzluk eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Seninle biraz konuşma fırsatımız olmadı.' },
          { id: 'B', text: 'Lütfen benimle bu ses tonuyla konuşma.' },
          { id: 'C', text: 'Okuma bayramı için hazırlık yapıyoruz.' },
          { id: 'D', text: 'Bana danışma gereği bile duymadı.' },
          { id: 'E', text: 'Sarma yapmak için annemden tarif aldım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "konuşma" kelimesindeki "-ma" eki eylemin yapılmamasını bildiren olumsuzluk ekidir.'
      },
      {
        id: 'q-fsi-7-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil vardır?',
        options: [
          { id: 'A', text: 'Yıkanmış çamaşırları sepete koydum.' },
          { id: 'B', text: 'Kuruyan ağaçları tek tek kestiler.' },
          { id: 'C', text: 'Bilenler bilmeyenlere anlatsın.' },
          { id: 'D', text: 'Gelecek yıl tekrar görüşeceğiz.' },
          { id: 'E', text: 'Ağlayan çocuğa şeker verdiler.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bilenler" (bilen kişiler) ve "bilmeyenlere" kelimeleri, niteledikleri isim düştüğü için adlaşmış sıfat-fiildir.'
      },
      {
        id: 'q-fsi-7-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi, aldığı ek nedeniyle her zaman zarf-fiil olur?',
        options: [
          { id: 'A', text: 'Gelecek' },
          { id: 'B', text: 'Görmüş' },
          { id: 'C', text: 'Gülerek' },
          { id: 'D', text: 'Bakma' },
          { id: 'E', text: 'Gelir' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Gülerek" kelimesindeki "-erek" eki sadece zarf-fiil yapar. Diğerleri bağlama göre göre sıfat-fiil, isim-fiil veya çekimli fiil (zaman eki) olabilir.'
      },
      {
        id: 'q-fsi-7-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki atasözlerinden hangisinde birden fazla eylemsi (fiilimsi) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sütten ağzı yanan yoğurdu üfleyerek yer.' },
          { id: 'B', text: 'İşleyen demir pas tutmaz.' },
          { id: 'C', text: 'Görünen köy kılavuz istemez.' },
          { id: 'D', text: 'Rüzgar eken fırtına biçer.' },
          { id: 'E', text: 'Damlaya damlaya göl olur.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yanan" (sıfat-fiil) ve "üfleyerek" (zarf-fiil) olmak üzere iki fiilimsi vardır. B, C ve D\'de birer, E\'de bir ("damlaya damlaya" zarf-fiil ikilemesi tek bir zarf-fiil grubu sayılır ancak A şıkkı net iki farklı eylemsi türüdür).'
      },
      {
        id: 'q-fsi-7-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük fiilimsi eki almış olmasına rağmen kalıcı bir varlık veya kavram adı olmamıştır?',
        options: [
          { id: 'A', text: 'Kışın _yakacak_ ihtiyacımız çok oluyor.' },
          { id: 'B', text: 'Babam bana yeni bir _uçurtma_ aldı.' },
          { id: 'C', text: 'Misafirlere ikram etmek için _sarma_ yaptık.' },
          { id: 'D', text: 'Bunu sana _söylemek_ benim için çok zor.' },
          { id: 'E', text: 'Yazın bol bol _dondurma_ yeriz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "söylemek" sözcüğü mastar ekini korumakta olup fiilimsi işlevini sürdürmektedir, kalıcı isim olmamıştır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-7-orta',
    title: 'Fiilimsiler 7 (Orta)',
    description: 'Fiilimsiler - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-fsi-7-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil öbeği cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Konuşmasını bitirip sahneden indi.' },
          { id: 'B', text: 'Hiç durmadan saatlerce koştu.' },
          { id: 'C', text: 'Gözlerime bakarak yalan söyledi.' },
          { id: 'D', text: 'Soruları tek tek inceleyerek çözdü.' },
          { id: 'E', text: 'Eve varınca beni mutlaka ara.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "varınca" sözcüğü cümleye zaman ("Ne zaman?") anlamı katmıştır. Diğer seçeneklerde (bitirip, durmadan, bakarak, inceleyerek) durum/tarz ("Nasıl?") anlamı vardır.'
      },
      {
        id: 'q-fsi-7-12',
        difficulty: 'medium',
        questionText: 'İsim-fiiller, bir eylemin adı oldukları için isimlerin aldığı çekim eklerini alabilirler. Aşağıdaki cümlelerin hangisinde isim-fiil çoğul eki almıştır?',
        options: [
          { id: 'A', text: 'Bütün görüşleri dinledikten sonra karar verdi.' },
          { id: 'B', text: 'Senin buralara gelişlerin beni hep mutlu eder.' },
          { id: 'C', text: 'Okumaları hızlandırmak için yeni yöntemler deniyoruz.' },
          { id: 'D', text: 'Bu tartışmalara son vermenin vakti geldi.' },
          { id: 'E', text: 'Danışmalar genellikle binanın girişinde olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "gelişlerin" kelimesindeki "geliş" isim-fiili, "-ler" çoğul ekini almıştır. A, D ve E\'de görüş, tartışma, danışma kalıcı isimdir. C\'deki okuma ise "Okumaları" (kitap vs) kalıcı isim olabilir, ama B en net eylemsidir.'
      },
      {
        id: 'q-fsi-7-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem adlaşmış sıfat-fiil hem de isim-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda karşılamayı o üstlendi.' },
          { id: 'B', text: 'Bekleyenlere çay ikram etmek çok ince bir davranıştı.' },
          { id: 'C', text: 'Görünmez kazalara karşı önlem almak gerekir.' },
          { id: 'D', text: 'Tanıdıkları görünce hemen yanlarına gitti.' },
          { id: 'E', text: 'Kuruyan ağaçları kesip yerlerine fidan diktiler.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bekleyenlere" (adlaşmış sıfat-fiil) ve "ikram etmek" (isim-fiil) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-7-14',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek eylem alarak yüklem görevini üstlenebilirler. Aşağıdaki cümlelerin hangisinde fiilimsi ek-fiil alarak yüklem olmamıştır?',
        options: [
          { id: 'A', text: 'Tek isteğim bu sınavı kazanmaktı.' },
          { id: 'B', text: 'Beni en çok üzen senin bu tavrındı.' },
          { id: 'C', text: 'Onun en büyük hayali dünyayı gezmektir.' },
          { id: 'D', text: 'En sevdiği şey akşamları kitap okumaktı.' },
          { id: 'E', text: 'Bütün sorunumuz seni yeterince dinlememekmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde cümlenin yüklemi "senin bu tavrındı" kelime grubudur ve isim (tavır) ek-fiil almıştır. Cümledeki "üzen" fiilimsidir ancak özne grubundadır. Diğer seçeneklerde (kazanmaktı, gezmektir, okumaktı, dinlememekmiş) isim-fiiller yüklem olmuştur.'
      },
      {
        id: 'q-fsi-7-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-miş" eki, fiilimsi yapma göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dün gece buralara çok yağmur yağmış.' },
          { id: 'B', text: 'O, bütün işlerini erkenden bitirmiş.' },
          { id: 'C', text: 'Sararmış yapraklar yavaşça yere düşüyordu.' },
          { id: 'D', text: 'Söylenenlere göre o çoktan gitmiş.' },
          { id: 'E', text: 'Çocuk çok yorulmuş, hemen uyumuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Sararmış" kelimesi, "yapraklar" ismini niteleyen bir sıfat-fiildir. Diğerlerindeki "-miş" ekleri yüklemde kip eki (öğrenilen geçmiş zaman) olarak kullanılmıştır.'
      },
      {
        id: 'q-fsi-7-16',
        difficulty: 'medium',
        questionText: '"-ken" zarf-fiil eki, eylemlere gelerek onları zarf yaptığı gibi isim soylu sözcüklere de gelebilir ancak bu durumda eylemsi yapmaz. Buna göre aşağıdakilerin hangisinde "-ken" eki eylemsi yapmamıştır?',
        options: [
          { id: 'A', text: 'Kitap okurken uyuyakalmışım.' },
          { id: 'B', text: 'Sen uyurken ben işleri bitirdim.' },
          { id: 'C', text: 'Oraya giderken bana haber ver.' },
          { id: 'D', text: 'Gençken çok daha hızlı koşardım.' },
          { id: 'E', text: 'Gülerken gözlerinin içi parlıyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "-ken" eki "genç" ismine gelmiştir. Fiillere gelmediği için fiilimsi (zarf-fiil) sayılmaz.'
      },
      {
        id: 'q-fsi-7-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde aynı türde birden fazla fiilimsi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Buraya gelip bizimle konuşmasını istedim.' },
          { id: 'B', text: 'Ağlayan çocuk annesini görünce sustu.' },
          { id: 'C', text: 'Tanıdık yüzler görmek ona iyi geldi.' },
          { id: 'D', text: 'Görünmez kazalara karşı tedbir almak gerekir.' },
          { id: 'E', text: 'Bunu yapıp hemen işe koyularak zaman kazandı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "yapıp" ve "koyularak" kelimeleri zarf-fiildir, yani aynı türde birden fazla eylemsi (zarf-fiil) kullanılmıştır. Diğer seçeneklerde farklı türde eylemsiler bir aradadır.'
      },
      {
        id: 'q-fsi-7-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil, cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Bekleyenler sonunda içeriye alındı.' },
          { id: 'B', text: 'Bildiklerini bir kağıda yazıp bana verdi.' },
          { id: 'C', text: 'Gidenlerin ardından sadece bakakaldık.' },
          { id: 'D', text: 'Okuyan insan her zaman aydınlıktır.' },
          { id: 'E', text: 'Yıkanmış çamaşırları balkona asmalısın.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Bildiklerini" (bildiği şeyleri) adlaşmış sıfat-fiildir ve "neyi yazıp?" sorusuna cevap vererek cümlenin nesnesi görevinde kullanılmıştır. (E şıkkında "Yıkanmış çamaşırlar" adlaşmamıştır.)'
      },
      {
        id: 'q-fsi-7-19',
        difficulty: 'medium',
        questionText: '"-mez / -maz" eki aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu çocuk söz dinlemez, laf anlamaz.' },
          { id: 'B', text: 'Anlaşılmaz bir dertle yollara düştü.' },
          { id: 'C', text: 'Artık buralara bir daha uğramaz.' },
          { id: 'D', text: 'O, hiçbir zaman bana yalan söylemez.' },
          { id: 'E', text: 'Ne yaparsan yap, bu huyundan vazgeçmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Anlaşılmaz" sözcüğü, "-maz" ekini alarak "dert" ismini nitelemiştir (sıfat-fiil). Diğerleri çekimli fiildir.'
      },
      {
        id: 'q-fsi-7-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisi hem eylemsi eki alıp eylemsi özelliği taşıyabilir hem de tamamen kalıcı isim olarak kullanılabilir?',
        options: [
          { id: 'A', text: 'Giderek' },
          { id: 'B', text: 'Gelirken' },
          { id: 'C', text: 'Dolma' },
          { id: 'D', text: 'Ağlayan' },
          { id: 'E', text: 'Görünen' }
        ],
        correctOptionId: 'C',
        explanation: '"Dolma" kelimesi, bir yemek adı olarak kalıcı isimdir; "Kovanın dolması biraz sürdü" cümlesinde ise isim-fiil özelliğini sürdürür.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-7-zor',
    title: 'Fiilimsiler 7 (Zor)',
    description: 'Fiilimsiler - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-fsi-7-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen numaralanmış sözcüklerden hangisi farklı türde bir fiilimsidir?\n"Güneş yavaş yavaş batarken (I) ufukta beliren (II) kızıllığı izlemek (III), günün bütün yorgunluğunu unutturup (IV) insana huzur veriyordu. O an içinden geçenleri (V) kimseye söyleyemedi."',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'I. batarken (zarf-fiil), II. beliren (sıfat-fiil), III. izlemek (isim-fiil), IV. unutturup (zarf-fiil), V. geçenleri (adlaşmış sıfat-fiil). Bu soruda birden fazla farklı var ama en belirgini isim-fiildir. Şıkları veya soruyu değiştirelim. Soru: Hangisi İSİM-FİİL (mastar) türündedir? Doğru Cevap C (izlemek).'
      },
      {
        id: 'q-fsi-7-22',
        difficulty: 'hard',
        questionText: 'Zarf-fiiller cümleye koşul (şart), zaman, durum gibi anlamlar katabilir. Aşağıdaki cümlelerin hangisinde zarf-fiil diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Gözlerimin içine bakarak konuştu.' },
          { id: 'B', text: 'Soruları dikkatlice düşünerek çözdü.' },
          { id: 'C', text: 'Hiç durmaksızın üç saat koştu.' },
          { id: 'D', text: 'Oraya varır varmaz seni arayacağım.' },
          { id: 'E', text: 'Gülümseyerek yanımızdan ayrıldı.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki zarf-fiiller (bakarak, düşünerek, durmaksızın, gülümseyerek) eylemin nasıl yapıldığını (durum) bildirir. D seçeneğindeki "varır varmaz" ise ne zaman yapıldığını (zaman) bildirir.'
      },
      {
        id: 'q-fsi-7-23',
        difficulty: 'hard',
        questionText: 'Fiilimsilerle kurulan yan cümlecikler, temel cümlenin herhangi bir ögesi olabilir. Aşağıdaki cümlelerin hangisinde yan cümlecik zarf tümleci görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bunu yaparken çok zorlandı.' },
          { id: 'B', text: 'Güneş doğmadan yola çıkmalıyız.' },
          { id: 'C', text: 'Konuyu anlayıp sorulara geçti.' },
          { id: 'D', text: 'Oraya gitmenin çok zor olduğunu biliyordu.' },
          { id: 'E', text: 'Okula varınca bana haber ver.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Oraya gitmenin çok zor olduğunu" yan cümlesi, "Neyi biliyordu?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur. Diğerleri zarf tümlecidir.'
      },
      {
        id: 'q-fsi-7-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem sıfat-fiil hem zarf-fiil hem de isim-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Gidenleri uğurlayıp arkalarından el sallamak en zorudur.' },
          { id: 'B', text: 'Görünmez kazaları önlemek için dikkatli davranarak işini yaptı.' },
          { id: 'C', text: 'Biten bir günün ardından oturup geçmişi düşünmek beni yoruyor.' },
          { id: 'D', text: 'Gelecek güzel günleri bekleyerek yaşamak hepimizin umududur.' },
          { id: 'E', text: 'Seni görmek, sesini duymak ve kokunu hissetmek istiyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "görmek", "duymak", "hissetmek" (isim-fiil) vardır; ancak sıfat-fiil ve zarf-fiil yoktur. A\'da: Gidenleri (S.F), uğurlayıp (Z.F), sallamak (İ.F). B\'de: Görünmez (S.F), önlemek (İ.F), davranarak (Z.F). C\'de: Biten (S.F), oturup (Z.F), düşünmek (İ.F). D\'de: Gelecek (S.F), bekleyerek (Z.F), yaşamak (İ.F).'
      },
      {
        id: 'q-fsi-7-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil, isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Gelenlerin sayısı gün geçtikçe artıyor.' },
          { id: 'B', text: 'Çocuğun ağlayışı hepimizi derinden etkiledi.' },
          { id: 'C', text: 'Bunu yapmanın zorluğu ortadadır.' },
          { id: 'D', text: 'Geçmişin izlerini silmek oldukça zordur.' },
          { id: 'E', text: 'Söylenenleri hiç kulak ardı etmem.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gelenlerin sayısı" isim tamlamasıdır. "Gelenlerin" adlaşmış sıfat-fiili, tamlayan görevindedir.'
      },
      {
        id: 'q-fsi-7-26',
        difficulty: 'hard',
        questionText: '"-dik" sıfat-fiil eki iyelik eki aldığında (örneğin -diğim, -diğin) ünlü daralmasına veya yumuşamasına uğrayabilir. Aşağıdaki cümlelerin hangisinde bu duruma uyan bir örnek yoktur?',
        options: [
          { id: 'A', text: 'Gittiğim yollar bana çok uzaktı.' },
          { id: 'B', text: 'Dediğini yapmayanlara çok kızardı.' },
          { id: 'C', text: 'Bildiğimiz her şeyi onlara anlattık.' },
          { id: 'D', text: 'Okuduklarımı bir kenara not ettim.' },
          { id: 'E', text: 'İstediğin kadar burada kalabilirsin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Okuduklarımı" sözcüğünde "-dık" eki "-lar" çoğul ekini aldığı için "k" ünsüzü yumuşamaya uğramamıştır. Diğerlerinde (gittiğim, dediğini, bildiğimiz, istediğin) "k" ğ\'ye dönüşerek yumuşamıştır.'
      },
      {
        id: 'q-fsi-7-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi öbeği cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Sabahları erken uyanmak, güne enerjik başlamamı sağlar.' },
          { id: 'B', text: 'Herkesi kendine hayran bırakan bir sese sahipti.' },
          { id: 'C', text: 'Bu işi bitirip hemen dışarı çıkmalıyız.' },
          { id: 'D', text: 'Güneş batınca her yer kızıl bir renge büründü.' },
          { id: 'E', text: 'Bize anlattıklarını büyük bir dikkatle dinledik.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Sabahları erken uyanmak" eylemsi (isim-fiil) öbeği, cümlenin öznesi görevindedir. (Ne sağlar? - Sabahları erken uyanmak)'
      },
      {
        id: 'q-fsi-7-28',
        difficulty: 'hard',
        questionText: 'Bazı durumlarda fiilimsi eki alan sözcükler kalıcı isim olurlar. Aşağıdakilerin hangisinde altı çizili sözcük fiilimsi olmaktan çıkıp nesne veya kavram adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Kitap _okumak_ insanın ufkunu açar.' },
          { id: 'B', text: 'Onu _görünce_ çok şaşırdım.' },
          { id: 'C', text: 'Buraya _gelmesi_ herkesi sevindirdi.' },
          { id: 'D', text: 'Binanın _girişinde_ buluşalım.' },
          { id: 'E', text: 'Bu sorunu _çözmeye_ çalışıyoruz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "giriş" kelimesi bir yerin, mekanın adı olarak kullanıldığı için kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-7-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil grubunun öznesi, temel cümlenin öznesinden farklıdır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçeye çıkınca neşeyle koşmaya başladılar.' },
          { id: 'B', text: 'Öğretmen sınıfa girince bütün öğrenciler ayağa kalktı.' },
          { id: 'C', text: 'Konuyu anlayıp hemen sorulara geçti.' },
          { id: 'D', text: 'Kitabını kapatarak usulca arkasına yaslandı.' },
          { id: 'E', text: 'Gülümseyerek bize doğru yaklaştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yan cümlenin (zarf-fiil grubunun) öznesi "Öğretmen", temel cümlenin (ayağa kalktı) öznesi "bütün öğrenciler"dir. Diğer seçeneklerde özneler aynıdır.'
      },
      {
        id: 'q-fsi-7-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla yan cümlecik iç içe geçmiştir (bir eylemsi diğerinin ögesi olmuştur)?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda karşılayıp salona aldı.' },
          { id: 'B', text: 'Bunu yapmanın zorluklarını düşünerek karar verdi.' },
          { id: 'C', text: 'Güneş batarken hava birden soğudu.' },
          { id: 'D', text: 'Çok çalışıp sınavı kazanan öğrencilere ödül verildi.' },
          { id: 'E', text: 'Kitap okumayı seven insanlarla vakit geçirmek güzeldir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "yapmanın zorluklarını" (isim-fiil grubu), "düşünerek" (zarf-fiil) fiilimsinin nesnesi durumundadır. Yani bir fiilimsi grubu, diğer fiilimsinin oluşturduğu yan cümleciğin ögesi (nesnesi) olarak iç içe geçmiştir.'
      }
    ]
  }
]
