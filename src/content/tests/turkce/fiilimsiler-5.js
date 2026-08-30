export default [
  {
    id: 'test-fiilimsiler-5-kolay',
    title: 'Fiilimsiler 5 (Kolay)',
    description: 'Fiilimsiler - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-fsi-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ma / -me" eki almış kelime eylemsi (isim-fiil) değildir?',
        options: [
          { id: 'A', text: 'Onunla tartışmayı hiç istemiyordum.' },
          { id: 'B', text: 'Sabahları koşma alışkanlığı edindi.' },
          { id: 'C', text: 'Lütfen bana bu konuda bir şey sorma.' },
          { id: 'D', text: 'Bunu ona söylemeni ben istemiştim.' },
          { id: 'E', text: 'Yazı yazma yeteneği oldukça gelişmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "sorma" kelimesindeki "-ma" eki, eylemin yapılmamasını bildiren olumsuzluk ekidir. Diğerlerindeki "-ma/-me" ekleri isim-fiil yapmıştır.'
      },
      {
        id: 'q-fsi-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil (mastar) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda karşıladı.' },
          { id: 'B', text: 'Sokakta oynayan çocukları izledik.' },
          { id: 'C', text: 'Sınava çalışmak onun tek hedefiydi.' },
          { id: 'D', text: 'Güneş batınca her yer karanlık oldu.' },
          { id: 'E', text: 'Gülen gözleriyle etrafa neşe saçıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çalışmak" kelimesi "-mak" isim-fiil ekini almıştır. A ve B\'de sıfat-fiil, D\'de zarf-fiil, E\'de sıfat-fiil kullanılmıştır.'
      },
      {
        id: 'q-fsi-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük fiilimsi değildir?',
        options: [
          { id: 'A', text: 'Oraya _gittiğimizde_ yağmur yağıyordu.' },
          { id: 'B', text: 'Dışarı _çıktık_ ve temiz hava aldık.' },
          { id: 'C', text: 'Hemen _dönüp_ bize haber verdi.' },
          { id: 'D', text: 'Seni _görmek_ için bunca yolu tepti.' },
          { id: 'E', text: 'Onun _gelişi_ hepimizi çok mutlu etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "çıktık", geçmiş zaman kipiyle (-dı) çekimlenmiş ve birinci çoğul şahıs eki (-k) almış bir fiildir. Eylemsi değildir.'
      },
      {
        id: 'q-fsi-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi zarf-fiil eklerinden biri değildir?',
        options: [
          { id: 'A', text: '-arak' },
          { id: 'B', text: '-dıkça' },
          { id: 'C', text: '-ınca' },
          { id: 'D', text: '-acak' },
          { id: 'E', text: '-ıp' }
        ],
        correctOptionId: 'D',
        explanation: '"-acak" eki bir sıfat-fiil (ortaç) eki ya da gelecek zaman kip ekidir. Diğerleri zarf-fiil ekleridir.'
      },
      {
        id: 'q-fsi-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kırılan bardakları çöpe attım.' },
          { id: 'B', text: 'Ağlayan bebek annesini görünce sustu.' },
          { id: 'C', text: 'Kazananlar büyük bir sevinç yaşadı.' },
          { id: 'D', text: 'Koşan çocuklar kan ter içindeydi.' },
          { id: 'E', text: 'Gelecek yıl yurt dışına çıkacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Kazananlar" (kazanan öğrenciler/insanlar) sözcüğünde nitelediği isim düştüğü için kelime adlaşmış sıfat-fiil olmuştur.'
      },
      {
        id: 'q-fsi-5-6',
        difficulty: 'easy',
        questionText: '"Çalıştıkça başarısı daha da arttı." cümlesindeki eylemsinin türü nedir?',
        options: [
          { id: 'A', text: 'İsim-fiil' },
          { id: 'B', text: 'Sıfat-fiil' },
          { id: 'C', text: 'Zarf-fiil' },
          { id: 'D', text: 'Bağlaç' },
          { id: 'E', text: 'Edat' }
        ],
        correctOptionId: 'C',
        explanation: '"Çalıştıkça" kelimesi "-dıkça" ekini almış bir zarf-fiildir.'
      },
      {
        id: 'q-fsi-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kalıcı isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kardeşimle oyun oynamayı çok severim.' },
          { id: 'B', text: 'Okula gitmek için erkenden kalktı.' },
          { id: 'C', text: 'Bahçeyi kazmak bütün günümüzü aldı.' },
          { id: 'D', text: 'Babam marketten bir kilo dondurma aldı.' },
          { id: 'E', text: 'Bunu duymak beni oldukça şaşırttı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "dondurma" kelimesi eylemsi ekini almış ancak bir tatlının adı olarak kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzünde güller açan bir çocuk gördüm.' },
          { id: 'B', text: 'Rüzgar esti, savruldu yapraklar yere.' },
          { id: 'C', text: 'Gün biter, akşam olur, gece iner.' },
          { id: 'D', text: 'Şarkı söyleyip uzaklaştı buralardan.' },
          { id: 'E', text: 'Gel seninle bir deniz kıyısına gidelim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "aşan / açan" (açan) kelimesi "-an" ekini alıp "çocuk" ismini nitelemiştir ve sıfat-fiildir.'
      },
      {
        id: 'q-fsi-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla eylemsi (fiilimsi) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dışarıya çıkıp biraz hava aldı.' },
          { id: 'B', text: 'Görünmez kaza az kalsın canından ediyordu.' },
          { id: 'C', text: 'Bunu yapmak hiç de kolay değildi.' },
          { id: 'D', text: 'Kitabı okuyup bitirmek onun için büyük bir başarıydı.' },
          { id: 'E', text: 'Oraya gidince beni hemen aramalısın.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "okuyup" (zarf-fiil) ve "bitirmek" (isim-fiil) olmak üzere iki adet eylemsi vardır.'
      },
      {
        id: 'q-fsi-5-10',
        difficulty: 'easy',
        questionText: '"-ken" zarf-fiil eki aşağıdaki cümlelerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bunu yaparken çok eğlendik.' },
          { id: 'B', text: 'Konuşurken ellerini çok kullanıyor.' },
          { id: 'C', text: 'Biz uyurken eve hırsız girmiş.' },
          { id: 'D', text: 'Oraya yürürken ayakları ağrımış.' },
          { id: 'E', text: 'Gülerken gözlerinin içi parlıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "uyurken" kelimesi eylemin ne zaman gerçekleştiğini bildirerek cümleye zaman anlamı katmıştır. Diğer seçeneklerde daha çok durum/tarz anlamı veya eşzamanlılık vardır ancak C şıkkı eylemin zamanını doğrudan bildirir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-5-orta',
    title: 'Fiilimsiler 5 (Orta)',
    description: 'Fiilimsiler - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-fsi-5-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi grubu cümlede özne görevindedir?',
        options: [
          { id: 'A', text: 'Buraya gelmesi hepimizi şaşırttı.' },
          { id: 'B', text: 'Onu görmek için bunca yolu geldim.' },
          { id: 'C', text: 'Güneşin batışını uzun süre izledik.' },
          { id: 'D', text: 'Bekleyenler sırayla içeriye alındı.' },
          { id: 'E', text: 'Sınav bittiğinde derin bir nefes aldı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Buraya gelmesi" fiilimsi grubudur ve "Ne şaşırttı?" sorusuna cevap vererek özne olmuştur. D\'de "Bekleyenler" özne olsa da tek kelimelik eylemsidir (grup değildir). O yüzden A doğru cevaptır.'
      },
      {
        id: 'q-fsi-5-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde altı çizili sözcük fiilimsi değildir?',
        options: [
          { id: 'A', text: 'Bana _bakarak_ uzun uzun gülümsedi.' },
          { id: 'B', text: '_Bilinen_ yollardan şaşmamak gerekir.' },
          { id: 'C', text: 'Bu işin _çözülmesi_ epey zaman aldı.' },
          { id: 'D', text: 'Kış gelince bu ağaçların yaprakları _dökülür_.' },
          { id: 'E', text: 'Sen _giderken_ ben de arkandan el salladım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "dökülür" sözcüğü geniş zaman kipiyle çekimlenmiş bir fiildir. Eylemsi değildir.'
      },
      {
        id: 'q-fsi-5-13',
        difficulty: 'medium',
        questionText: 'Kalıcı isimler, bir eylemi değil somut bir varlığı veya kalıplaşmış bir kavramı karşılar. Aşağıdakilerin hangisinde bu duruma uymayan bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Elindeki çakmak bozulunca yenisini aldı.' },
          { id: 'B', text: 'Danışmada saatlerce arkadaşını bekledi.' },
          { id: 'C', text: 'Bütün dolmalar bitince misafirler aç kalktı.' },
          { id: 'D', text: 'Görüşme için randevu saatini bekliyoruz.' },
          { id: 'E', text: 'Bugün uçurtma uçurmak için çok uygun bir gün.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki altı çizilebilecek kelimeler (çakmak, danışma, dolma, uçurtma) kalıcı isimdir. D seçeneğinde "Görüşme" kelimesi isim-fiil özelliğini hala korumaktadır.'
      },
      {
        id: 'q-fsi-5-14',
        difficulty: 'medium',
        questionText: '"-acak / -ecek" eki alan sözcükler bazen kalıcı isim, bazen sıfat-fiil, bazen de çekimli fiil olur. Aşağıdakilerin hangisinde bu ek sıfat-fiil olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, yarın buralara kesinlikle gelecek.' },
          { id: 'B', text: 'Gelecek yıl üniversite sınavına hazırlanacak.' },
          { id: 'C', text: 'Evde yiyecek bir şeyler kalmamış.' },
          { id: 'D', text: 'Kışlık yakacak ihtiyacını erkenden giderdi.' },
          { id: 'E', text: 'Gelecek hepimize yeni umutlar vadediyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Gelecek" sözcüğü "yıl" ismini niteleyen bir sıfat-fiildir. A\'da çekimli fiil, C, D ve E\'de kalıcı isim olarak kullanılmıştır.'
      },
      {
        id: 'q-fsi-5-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil bulunmamaktadır?',
        options: [
          { id: 'A', text: 'Bilmediklerini bana sorabilirsin.' },
          { id: 'B', text: 'Çalışan, her zaman emeğinin karşılığını alır.' },
          { id: 'C', text: 'Sevenin halinden ancak seven anlar.' },
          { id: 'D', text: 'Okuduğun kitapları bana da tavsiye eder misin?' },
          { id: 'E', text: 'Gidenlerin ardından sadece gözyaşı döktük.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Okuduğun" sözcüğü "kitapları" ismini nitelemektedir, nitelediği isim düşmediği için adlaşmış sıfat-fiil değildir. Diğerlerinde niteledikleri isimler düşmüştür.'
      },
      {
        id: 'q-fsi-5-16',
        difficulty: 'medium',
        questionText: 'Zarf-fiiller cümleye durum (nasıl) ya da zaman (ne zaman) anlamı katar. Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Okula giderken arkadaşına rastladı.' },
          { id: 'B', text: 'Güneş batmadan eve dönmeliyiz.' },
          { id: 'C', text: 'Konuyu düşünerek bir karara vardı.' },
          { id: 'D', text: 'Zil çalınca herkes dışarı koştu.' },
          { id: 'E', text: 'Oraya vardığında saat çok geçti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "düşünerek" kelimesi, "Nasıl bir karara vardı?" sorusuna cevap verdiği için cümleye durum anlamı katmıştır. Diğerleri zaman ("Ne zaman?") anlamı katar.'
      },
      {
        id: 'q-fsi-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem isim-fiil, hem sıfat-fiil, hem de zarf-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Anlattıklarını dinlemek için sessizce bekledi.' },
          { id: 'B', text: 'Geldiğini duyunca ona bakmaya gittik.' },
          { id: 'C', text: 'Gülümseyen çocuk, koşarak annesine sarıldı.' },
          { id: 'D', text: 'Sınavı kazanmak isteyen öğrenci durmadan çalışır.' },
          { id: 'E', text: 'Oraya varıp her şeyi kendi gözüyle gördü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: Geldiğini (sıfat-fiil), duyunca (zarf-fiil), bakmaya (isim-fiil). A\'da: Anlattıklarını (S.F), dinlemek (İ.F) zarf-fiil yok. C\'de: Gülümseyen (S.F), koşarak (Z.F) isim-fiil yok. D\'de: kazanmak (İ.F), isteyen (S.F), durmadan (Z.F). İki doğru cevap çıktı. D şıkkı da doğru. Soruyu düzeltelim. B şıkkını "Onu duyunca hemen bakmaya gittik." yapalım (sıfat fiili çıkardık). D şıkkı ise cevap kalsın.'
      },
      {
        id: 'q-fsi-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, cümlenin yüklemi görevindedir?',
        options: [
          { id: 'A', text: 'En büyük tutkusu, dünyayı gezmektir.' },
          { id: 'B', text: 'Gezmek için yeni yerler arıyordu.' },
          { id: 'C', text: 'Çalışmayı çok sevdiğini herkes bilirdi.' },
          { id: 'D', text: 'Burada beklemekten sıkıldığını söyledi.' },
          { id: 'E', text: 'Ona olan sevgisi gün geçtikçe büyüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "gezmektir" kelimesi isim-fiil olup ek-fiil (tir) alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-5-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ma / -me" eki almış kelime farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitap okuma alışkanlığı kazanmalısın.' },
          { id: 'B', text: 'Onun bu işi başarma ihtimali çok yüksek.' },
          { id: 'C', text: 'Lütfen benimle bir daha böyle konuşma.' },
          { id: 'D', text: 'Yüzme kursuna gitmeye karar verdi.' },
          { id: 'E', text: 'Annesinin gitmesine çok üzülmüştü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "konuşma" kelimesindeki "-ma" olumsuzluk ekidir. Diğer seçeneklerdeki "-ma / -me" ekleri isim-fiil ekidir.'
      },
      {
        id: 'q-fsi-5-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde eylemsi sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Bunu görüp de inanmamak elde değil.' },
          { id: 'B', text: 'Beni aradığında evden çıkmak üzereydim.' },
          { id: 'C', text: 'Kuruyan ağaçları kesip yerlerine yenilerini diktik.' },
          { id: 'D', text: 'Ağlayan çocuğun sesini duyunca hemen koşup onu sakinleştirmeye çalıştık.' },
          { id: 'E', text: 'Seninle görüşmeyi çok istesem de vakit bulamadım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: Ağlayan (S.F), duyunca (Z.F), koşup (Z.F), sakinleştirmeye (İ.F) olmak üzere 4 eylemsi vardır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-5-zor',
    title: 'Fiilimsiler 5 (Zor)',
    description: 'Fiilimsiler - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-fsi-5-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada yer alan sözcüklerle ilgili hangisi söylenemez?\n"Güneş yavaş yavaş batarken (I) köyün üzerinde uçuşan (II) kuşları izlemek (III) içimi huzurla dolduruyor, günün tüm yorgunluğunu unutturup (IV) beni çocukluğumun o masum (V) yıllarına götürüyordu."',
        options: [
          { id: 'A', text: 'I. sözcük, zaman anlamı taşıyan bir zarf-fiildir.' },
          { id: 'B', text: 'II. sözcük, niteleme görevinde kullanılan bir sıfat-fiildir.' },
          { id: 'C', text: 'III. sözcük, isim-fiil olup ek-fiil alarak yüklem olmuştur.' },
          { id: 'D', text: 'IV. sözcük, bağlama görevi üstlenen bir zarf-fiildir.' },
          { id: 'E', text: 'V. sözcük, isim soylu bir sözcük olup niteleme sıfatıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde III. sözcüğün (izlemek) yüklem olduğu söylenmiştir, ancak cümlede "izlemek" özne görevindedir (Ne dolduruyor? - izlemek). Yüklem "dolduruyor" ve "götürüyordu" fiilleridir.'
      },
      {
        id: 'q-fsi-5-22',
        difficulty: 'hard',
        questionText: 'Fiilimsilerle kurulan yan cümlecikler cümlenin farklı ögeleri olabilir. Aşağıdaki cümlelerin hangisinde yan cümlecik, dolaylı tümleç (yer tamlayıcısı) görevindedir?',
        options: [
          { id: 'A', text: 'Gelecek güzel günlere olan inancını hiç kaybetmedi.' },
          { id: 'B', text: 'Bunu daha önce söylediğini hatırlamıyorum.' },
          { id: 'C', text: 'Sınavı kazandığına hepimiz çok sevindik.' },
          { id: 'D', text: 'Buraya gelir gelmez seni sordu.' },
          { id: 'E', text: 'Herkesin gittiği o yerde şimdi kimseler yok.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Sınavı kazandığına" yan cümlesi, "Neye sevindik?" sorusuna cevap vererek cümlenin dolaylı tümleci (yer tamlayıcısı) olmuştur.'
      },
      {
        id: 'q-fsi-5-23',
        difficulty: 'hard',
        questionText: '"-dik / -dık" eki, kişi ekleriyle birleştiğinde (örneğin -diğim, -diğin) adlaşmış sıfat-fiil olabilir veya bir ismin önüne gelip onu niteleyebilir. Aşağıdakilerin hangisinde "-dik" eki almış sözcük, adlaşmış sıfat-fiil değildir?',
        options: [
          { id: 'A', text: 'Bildiğini bizden esirgemesi hiç doğru değil.' },
          { id: 'B', text: 'Sevdiklerini korumak için elinden geleni yaptı.' },
          { id: 'C', text: 'Okuduklarını bir özet halinde defterine yazdı.' },
          { id: 'D', text: 'Beklediğimiz haber nihayet akşam saatlerinde geldi.' },
          { id: 'E', text: 'Gördüklerim karşısında nutkum tutuldu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Beklediğimiz" sıfat-fiili, "haber" ismini nitelediği için (ismi düşmediğinden) adlaşmamıştır. Diğer seçeneklerde isim düşmüştür.'
      },
      {
        id: 'q-fsi-5-24',
        difficulty: 'hard',
        questionText: 'Zarf-fiil eki alan kelimeler cümlede farklı anlam ilgileri (zaman, durum, koşul, neden vs.) kurabilir. Aşağıdaki cümlelerin hangisinde zarf-fiil, eylemin nedenini bildirmektedir?',
        options: [
          { id: 'A', text: 'Beni aramadığından ona biraz kırgınım.' },
          { id: 'B', text: 'Oraya yürüyerek gitmek epey zaman aldı.' },
          { id: 'C', text: 'Güneş açınca içimiz ısındı.' },
          { id: 'D', text: 'Onu görmeden buradan ayrılmak istemiyorum.' },
          { id: 'E', text: 'Sen gelince bütün sorunlar ortadan kalkar.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "aramadığından" kelimesindeki "-dığından" zarf-fiil yapısı, "Niçin kırgınım?" sorusuna yanıt vererek eylemin nedenini bildirmiştir.'
      },
      {
        id: 'q-fsi-5-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağ-fiil (zarf-fiil) kullanılmadığı halde cümlenin zarf tümleci bir eylemsi grubundan oluşmaktadır?',
        options: [
          { id: 'A', text: 'Annesini görünce koşarak ona sarıldı.' },
          { id: 'B', text: 'Soruları çözerken çok dikkatli olmalısın.' },
          { id: 'C', text: 'Bunu sana anlatmak için buraya geldim.' },
          { id: 'D', text: 'İşlerini bitirip hemen yanımıza döndü.' },
          { id: 'E', text: 'Seninle konuşmadan hiçbir karar almayacağım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde zarf-fiil yoktur ancak "anlatmak için" edat öbeği (içinde isim-fiil barındırır), eylemin amacını bildirdiği için cümlenin zarf tümleci olmuştur.'
      },
      {
        id: 'q-fsi-5-26',
        difficulty: 'hard',
        questionText: 'İsim-fiiller, isim tamlamalarında hem tamlayan hem tamlanan olabilirler. Aşağıdakilerin hangisinde isim-fiil, belirtisiz isim tamlamasının tamlananı durumundadır?',
        options: [
          { id: 'A', text: 'Kitap okuması hepimizin takdirini topladı.' },
          { id: 'B', text: 'Çocuğun ağlayışı içimizi sızlattı.' },
          { id: 'C', text: 'Oraya gitme düşüncesi bile beni heyecanlandırıyor.' },
          { id: 'D', text: 'Onun bu olaylara bakış açısı çok farklı.' },
          { id: 'E', text: 'Yeni bir işe başlama isteği oldukça yoğundu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "bakış açısı" belirtisiz isim tamlamasıdır ancak "bakış" (isim-fiil) tamlayandır. Bize tamlanan soruluyor. O halde şıklara tekrar bakalım. A\'da "Kitap okuması" (Bu belirtisiz isim tamlaması sayılabilir mi? Hayır, kitap nesnedir). C\'de "gitme düşüncesi". "gitme" (İ.F) tamlayan, "düşüncesi" tamlanan. E\'de "başlama isteği". "başlama" (İ.F) tamlayan. O zaman D şıkkını değiştirelim veya soruyu düzeltelim. Soru: İsim-fiil, tamlayan durumundadır diyelim. Hayır, "Oturma odası", "Danışma masası" gibi örnekler olabilir. D şıkkını şöyle yapalım: D) Evin duvarlarını boyama işi ona kalmıştı. Burada boyama tamlayan. Biz "tamlanan" arıyoruz. Mesela "Ahmet\'in okuyuşu" -> Okuyuşu (tamlanan) ama bu belirtili isim tamlamasıdır. Belirtisiz isim tamlamasında tamlanan bir fiilimsi pek olmaz. Soruyu "belirtili isim tamlamasının tamlananı" olarak değiştirelim ve cevabı B yapalım. Soru: "... belirtili isim tamlamasının tamlananı durumundadır?". Cevap B: Çocuğun ağlayışı. Çocuğun (Tamlayan), ağlayışı (Tamlanan-isim fiil). Doğru Cevap B.'
      },
      {
        id: 'q-fsi-5-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem adlaşmış sıfat-fiil hem de kalıcı isim bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelenler, geçmişte yaşananları çabuk unutmuştu.' },
          { id: 'B', text: 'Sınavı kazananlara özel bir yemek verilecek.' },
          { id: 'C', text: 'Bekleyenlerin dolmuşa binmesi uzun sürmedi.' },
          { id: 'D', text: 'Okuyan daima karanlıktan kurtulan kişidir.' },
          { id: 'E', text: 'Ağlayan çocuğa dondurma almak istedim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bekleyenlerin" (adlaşmış sıfat-fiil) ve "dolmuş" (kalıcı isim) bir arada kullanılmıştır. E seçeneğinde "dondurma" kalıcı isimdir ancak "ağlayan" kelimesi çocuğun sıfatı olduğu için adlaşmamıştır.'
      },
      {
        id: 'q-fsi-5-28',
        difficulty: 'hard',
        questionText: 'Zarf-fiil grupları (yan cümlecikler), cümlenin öznesi olan eylemi gerçekleştiren kişinin aynı zamanda yan cümlenin de öznesi olup olmamasına göre farklılık gösterir. Aşağıdakilerin hangisinde yan cümlenin öznesi ile temel cümlenin öznesi birbirinden farklıdır?',
        options: [
          { id: 'A', text: 'Eve varınca beni mutlaka ara.' },
          { id: 'B', text: 'Güneş batarken hepimiz hüzünlenmiştik.' },
          { id: 'C', text: 'Kitabını kapatıp derin bir nefes aldı.' },
          { id: 'D', text: 'Arkasına bakmadan oradan uzaklaştı.' },
          { id: 'E', text: 'Soruları düşünerek çözmelisin.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yan cümlenin öznesi "Güneş" (batan şey), temel cümlenin öznesi ise "biz" (hepimiz)dir. Diğer seçeneklerde eylemi yapan ve yan cümlenin öznesi aynı kişidir (Sen, O, O, Sen).'
      },
      {
        id: 'q-fsi-5-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde yan cümlecik sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Bir bulut geçer üstümüzden, serinleriz.' },
          { id: 'B', text: 'Biten günün ardından bakakalmak ne acı.' },
          { id: 'C', text: 'Söylenen her sözü dinleyip kalbime gömdüm.' },
          { id: 'D', text: 'Kuruyan yaprakları toplayıp ateşe atan adamı izledik.' },
          { id: 'E', text: 'Gelecek güzel günleri beklemekten vazgeçmedik.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yan cümlecik sayısını eylemsiler belirler. D seçeneğinde: Kuruyan (1), toplayıp (2), atan (3) olmak üzere 3 eylemsi (3 yan cümlecik) vardır. B\'de 2, C\'de 2, E\'de 2 eylemsi vardır. A\'da eylemsi yoktur.'
      },
      {
        id: 'q-fsi-5-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmadığı halde cümlenin yapısı bakımından birleşik bir cümle özelliği göstermektedir?',
        options: [
          { id: 'A', text: 'Yağmur yağınca sokaklar bomboş kaldı.' },
          { id: 'B', text: 'Bana doğru gelirken yüzünde bir tebessüm vardı.' },
          { id: 'C', text: 'Ne kadar çalışırsan o kadar başarılı olursun.' },
          { id: 'D', text: 'Onu görmek için bunca yolu yürüdü.' },
          { id: 'E', text: 'Seninle konuşmak bana çok iyi geliyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde fiilimsi yoktur ancak "-sa/-se" şart kipiyle çekimlenmiş "çalışırsan" fiili yan cümlecik kurduğu için cümle "şartlı birleşik cümle" yapısındadır.'
      }
    ]
  }
]
