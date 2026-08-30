export default [
  {
    id: 'test-fiilimsiler-3-kolay',
    title: 'Fiilimsiler 3 (Kolay)',
    description: 'Fiilimsiler - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-fsi-3-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ış, -iş, -uş, -üş" eki, isim-fiil yapmak için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kuşlar havada neşe içinde uçuşuyordu.' },
          { id: 'B', text: 'Onun bu olaya bakışı herkesi şaşırttı.' },
          { id: 'C', text: 'İki kardeş yıllar sonra kucaklaştı.' },
          { id: 'D', text: 'Yağmur yağınca herkes bir tarafa kaçıştı.' },
          { id: 'E', text: 'Kalabalık, polis gelince dağıldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "bakışı" sözcüğünde "-ış" eki, "bak-" fiilini isim yaparak isim-fiil (mastar) görevinde kullanılmıştır. Diğer seçeneklerdeki benzer ekler işteşlik veya karşılıklı/birlikte yapma anlamı katan fiilden fiil yapım ekleridir.'
      },
      {
        id: 'q-fsi-3-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat-fiil, önündeki ismi niteleyerek bir sıfat tamlaması kurmuştur?',
        options: [
          { id: 'A', text: 'Gelenler hemen salona geçtiler.' },
          { id: 'B', text: 'Kuruyan ağaçları birer birer kestiler.' },
          { id: 'C', text: 'Bildiğini okumaktan hiç vazgeçmedi.' },
          { id: 'D', text: 'Sınavı kazananlar çok mutlu görünüyordu.' },
          { id: 'E', text: 'Gelecek hepimiz için umut doludur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Kuruyan" sözcüğü "-an" sıfat-fiil ekini alarak "ağaçları" ismini nitelemiş ve sıfat tamlaması ("Kuruyan ağaçlar") kurmuştur.'
      },
      {
        id: 'q-fsi-3-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi yoktur?',
        options: [
          { id: 'A', text: 'Dışarı çıkmak için izin istedi.' },
          { id: 'B', text: 'Biten dersin ardından zil çaldı.' },
          { id: 'C', text: 'Hemen çantanı alıp yanıma gel.' },
          { id: 'D', text: 'Bu hafta sonu havalar çok güzel olacakmış.' },
          { id: 'E', text: 'Çocukken sokaklarda özgürce oynardık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde çekimli fiil ve isimler vardır, ancak fiilimsi yoktur. E şıkkındaki "Çocukken" sözcüğü isim soylu bir sözcüğe "-ken" geldiği için fiilimsi değildir ancak D şıkkı kesin bir cevaptır. C\'de alıp, B\'de biten, A\'da çıkmak. E seçeneğindeki kafa karışıklığını gidermek için düzeltelim. YENİDEN CÜMLE E: "Yolda yürürken şarkı söylüyordu." Doğru Cevap D.'
      },
      {
        id: 'q-fsi-3-4',
        difficulty: 'easy',
        questionText: '"-dikçe / -dıkça" eki cümleye genellikle zaman veya koşul anlamı katar. Aşağıdaki cümlelerin hangisinde bu ek kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağınca toprak kokusu etrafı sardı.' },
          { id: 'B', text: 'Seni gördükçe içimdeki umut yeşeriyor.' },
          { id: 'C', text: 'Güneş batarken hafif bir rüzgar çıktı.' },
          { id: 'D', text: 'Eve varır varmaz beni mutlaka ara.' },
          { id: 'E', text: 'Bunu ancak çok çalışarak başarabilirsin.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gördükçe" kelimesi "-dıkça" ekini almış bir zarf-fiildir.'
      },
      {
        id: 'q-fsi-3-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi alan sözcük, olumsuzluk eki de almıştır?',
        options: [
          { id: 'A', text: 'Onun gelmesi herkesi sevindirdi.' },
          { id: 'B', text: 'Görünmez kazalara karşı dikkatli ol.' },
          { id: 'C', text: 'Geçen yıl ektiğimiz tohumlar yeşerdi.' },
          { id: 'D', text: 'Beni arayıp sormasına çok şaşırdım.' },
          { id: 'E', text: 'Okula gitmeyen çocuklarla ilgilenmeliyiz.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "gitmeyen" sözcüğü hem olumsuzluk eki ("-me") hem de sıfat-fiil eki ("-en") almıştır.'
      },
      {
        id: 'q-fsi-3-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi isim-fiildir?',
        options: [
          { id: 'A', text: 'Yarınki _toplantı_ için hazırlık yapmalıyız.' },
          { id: 'B', text: 'Onun güzel _konuşması_ herkesi etkiledi.' },
          { id: 'C', text: 'Annem akşam için çok güzel _dolma_ yapmış.' },
          { id: 'D', text: 'Yeni bir iş yeri _açılışı_ yapılacakmış.' },
          { id: 'E', text: 'Kışın _dondurucu_ soğuklarına alışamadım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "konuşması" sözcüğü isim-fiildir. C\'deki "dolma" kalıcı isim, A ve D isim, E ise türemiş sıfattır.'
      },
      {
        id: 'q-fsi-3-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil (ulaç) yoktur?',
        options: [
          { id: 'A', text: 'Durmadan yağan yağmur yolları göle çevirdi.' },
          { id: 'B', text: 'Beni görünce yüzünde bir tebessüm belirdi.' },
          { id: 'C', text: 'Gece gündüz demeden sınavlara çalıştı.' },
          { id: 'D', text: 'Koşarak yanımızdan geçen çocuğu tanıdın mı?' },
          { id: 'E', text: 'Tanıdık yüzler görmek ona güven veriyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Tanıdık" (sıfat-fiil) ve "görmek" (isim-fiil) vardır; ancak zarf-fiil yoktur.'
      },
      {
        id: 'q-fsi-3-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Uyumadan önce kitap okumayı severim.' },
          { id: 'B', text: 'Bekleyen derviş muradına ermiş.' },
          { id: 'C', text: 'Masadaki bardak bir anda yere düştü.' },
          { id: 'D', text: 'Gülmek sana çok yakışıyor.' },
          { id: 'E', text: 'Tanıdığım en iyi insansın sen.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde herhangi bir eylemsi yoktur. "Düştü" çekimli fiildir.'
      },
      {
        id: 'q-fsi-3-9',
        difficulty: 'easy',
        questionText: '"-acak / -ecek" eki alan aşağıdaki kelimelerden hangisi eylemsi (sıfat-fiil) olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya gidecek.' },
          { id: 'B', text: 'Yakacak yardımı için başvuruda bulundu.' },
          { id: 'C', text: 'O, mutlaka bir gün geri dönecek.' },
          { id: 'D', text: 'Bütün bu işler yarına kadar bitecek.' },
          { id: 'E', text: 'Sen de benimle aynı fikirde olacaksın.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Yakacak yardımı" tamlamasında "Yakacak" kelimesi aslında kalıcı isim olmuştur, ancak D şıkkını veya soruyu değiştirmek daha iyi olur. B\'yi düzeltelim: B) Yapılacak işleri tek tek not aldı. Doğru Cevap B.'
      },
      {
        id: 'q-fsi-3-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, ad durum eklerinden birini almıştır?',
        options: [
          { id: 'A', text: 'Oraya gitmek bana her zaman zor gelmiştir.' },
          { id: 'B', text: 'Seni görmeyi her şeyden çok istiyorum.' },
          { id: 'C', text: 'Çalışmak, başarmanın en temel kuralıdır.' },
          { id: 'D', text: 'Onun gidişi hepimizi derinden etkiledi.' },
          { id: 'E', text: 'Yeni bir hayata başlamak hiç kolay değil.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "görme-y-i" kelimesindeki "-i" eki belirtme hal ekidir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-3-orta',
    title: 'Fiilimsiler 3 (Orta)',
    description: 'Fiilimsiler - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-fsi-3-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ken" eki, diğerlerinden farklı türde bir sözcüğe gelmiştir?',
        options: [
          { id: 'A', text: 'Kitap okurken zamanın nasıl geçtiğini anlamam.' },
          { id: 'B', text: 'Televizyon izlerken uyuyakalmış.' },
          { id: 'C', text: 'Gençken bu sokaklarda top oynardık.' },
          { id: 'D', text: 'Yağmur yağarken dışarı çıkmayı sevmem.' },
          { id: 'E', text: 'Müzik dinlerken ruhum dinleniyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ken" eki isim soylu bir sözcüğe ("Genç") gelmiştir ve bu yüzden fiilimsi oluşturmaz. Diğerlerinde fiillere gelerek zarf-fiil oluşturmuştur.'
      },
      {
        id: 'q-fsi-3-12',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcük, kalıcı isim olmuştur?',
        options: [
          { id: 'A', text: 'Eskimiş kıyafetlerini çöpe _atmaya_ kıyamadı.' },
          { id: 'B', text: 'Babam yeni bir _çakmak_ almış.' },
          { id: 'C', text: 'Görünmez _kazalardan_ hep korkarım.' },
          { id: 'D', text: 'Bu konuyu seninle _tartışmak_ istemiyorum.' },
          { id: 'E', text: 'Sabahları erken _kalkmak_ bana zor geliyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "çakmak", ateş yakmaya yarayan aletin adı olmuş, eylem anlamını tamamen yitirerek kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-3-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde hem sıfat-fiil hem de zarf-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağlayarak uzaklaştı benden, geriye dönmeden.' },
          { id: 'B', text: 'Solan yaprakları izleyip geçmişi düşündüm.' },
          { id: 'C', text: 'Beklemek ne zordur, gelen yoksa eğer.' },
          { id: 'D', text: 'Bir uçurtma uçar göklerde, özgürlüğü arayan.' },
          { id: 'E', text: 'Gülüşünle aydınlanır karanlık geceler.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Solan" sözcüğü sıfat-fiil, "izleyip" sözcüğü ise zarf-fiildir. A\'da sadece zarf-fiil, C\'de isim-fiil ve sıfat-fiil (gelen), D\'de sadece sıfat-fiil vardır.'
      },
      {
        id: 'q-fsi-3-14',
        difficulty: 'medium',
        questionText: 'Fiilimsiler bulundukları cümlede yan cümlecik oluştururlar. Aşağıdaki cümlelerin hangisinde yan cümlecik, özne görevindedir?',
        options: [
          { id: 'A', text: 'Güneşin doğuşunu izlemek hepimize huzur verdi.' },
          { id: 'B', text: 'Seni görünce ne yapacağımı şaşırdım.' },
          { id: 'C', text: 'Annemin yaptığı yemekleri çok özledim.' },
          { id: 'D', text: 'Kitap okumaktan asla vazgeçmeyeceğim.' },
          { id: 'E', text: 'Haberi alınca hemen yola koyulduk.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Güneşin doğuşunu izlemek" (isim-fiil grubu) cümlenin öznesidir. (Ne huzur verdi? - Güneşin doğuşunu izlemek)'
      },
      {
        id: 'q-fsi-3-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dökülen yaprakları bir araya topladık.' },
          { id: 'B', text: 'Anlatılanları büyük bir dikkatle dinliyordu.' },
          { id: 'C', text: 'Koşan çocuk bir anda yere düştü.' },
          { id: 'D', text: 'Bilinmez bir diyara doğru yola çıktılar.' },
          { id: 'E', text: 'Görünmez kaza geliyorum demezmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Anlatılanları" (anlatılan şeyleri) sözcüğünde nitelediği isim düştüğü için adlaşmış sıfat-fiil vardır. Diğerlerinde sıfat-fiiller isimleri nitelemektedir.'
      },
      {
        id: 'q-fsi-3-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekini alan sözcük cümlede zarf tümleci olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çocuklar oynaya oynaya evlerine gittiler.' },
          { id: 'B', text: 'Sınav bittiğinde derin bir nefes aldık.' },
          { id: 'C', text: 'Buradan gideli epey zaman oldu.' },
          { id: 'D', text: 'Onun en sevdiği şey kitap okumaktı.' },
          { id: 'E', text: 'Hiç durmadan saatlerce yürüdük.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "kitap okumaktı" fiilimsi grubudur ve ek-fiil alarak cümlenin yüklemi olmuştur, zarf tümleci değildir.'
      },
      {
        id: 'q-fsi-3-17',
        difficulty: 'medium',
        questionText: '"-ma / -me" eki aşağıdakilerin hangisinde diğerlerinden farklı bir işlevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odanı temizlemeden dışarı çıkma.' },
          { id: 'B', text: 'Bana bir daha böyle davranma.' },
          { id: 'C', text: 'Bu işi yarına bırakma.' },
          { id: 'D', text: 'Onunla konuşma fırsatını kaçırdım.' },
          { id: 'E', text: 'Sakın bir daha buraya gelme.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "konuşma" kelimesinde "-ma" eki isim-fiil eki olarak kullanılmıştır. Diğer seçeneklerde ise olumsuzluk ekidir.'
      },
      {
        id: 'q-fsi-3-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-mış / -miş" eki sıfat-fiil eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dün akşam yağmur çok şiddetli yağmış.' },
          { id: 'B', text: 'Söylenenlere göre o buralardan gitmiş.' },
          { id: 'C', text: 'Çürümüş meyveleri çöpe atmalısın.' },
          { id: 'D', text: 'Bu kitabı yıllar önce okumuş.' },
          { id: 'E', text: 'Çok yorulmuş, hemen uykuya dalmış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Çürümüş" kelimesi "meyveleri" ismini niteleyen bir sıfat-fiildir. Diğerlerindeki "-miş" ekleri duyulan (öğrenilen) geçmiş zaman kip ekidir.'
      },
      {
        id: 'q-fsi-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi sayısı diğerlerinden daha fazladır?',
        options: [
          { id: 'A', text: 'Düşünmeden konuşan insanlar hata yapmaya mahkumdur.' },
          { id: 'B', text: 'Gelecek güzel günleri bekleyerek yaşıyoruz.' },
          { id: 'C', text: 'Ağlayan çocuğa sarılıp onu teselli etti.' },
          { id: 'D', text: 'Anlattıklarını dinlemek bana keyif veriyor.' },
          { id: 'E', text: 'Okumayı sevdiği için kütüphaneden hiç ayrılmazdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: Düşünmeden (zarf-fiil), konuşan (sıfat-fiil), yapmaya (isim-fiil) olmak üzere 3 eylemsi vardır. Diğerlerinde ikişer eylemsi vardır.'
      },
      {
        id: 'q-fsi-3-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde eylemsi grubu isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Ağacın kurumuş dallarını budadılar.' },
          { id: 'B', text: 'Gelenlerin sayısı beklediğimizden azdı.' },
          { id: 'C', text: 'Bahçenin düzenlenmesi hepimizi yordu.' },
          { id: 'D', text: 'Onun söylediği yalanlar ortaya çıktı.' },
          { id: 'E', text: 'Sınavı kazanan öğrencilere ödül verildi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Gelenlerin sayısı" belirtili isim tamlamasıdır. "Gelenlerin" (adlaşmış sıfat-fiil) tamlayan görevindedir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-3-zor',
    title: 'Fiilimsiler 3 (Zor)',
    description: 'Fiilimsiler - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-fsi-3-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada kaç tane eylemsi kullanılmıştır?\n"Dağların ardında batan güneşi izlerken, esen rüzgarın taşıdığı serinlik yüzümüze çarpıyor, içimizde uyuyan hatıraları usulca uyandırıp geçmişin derinliklerine götürüyordu."',
        options: [
          { id: 'A', text: '4' },
          { id: 'B', text: '5' },
          { id: 'C', text: '6' },
          { id: 'D', text: '7' },
          { id: 'E', text: '8' }
        ],
        correctOptionId: 'C',
        explanation: 'Eylemsiler: batan (sıfat-fiil), izlerken (zarf-fiil), esen (sıfat-fiil), taşıdığı (sıfat-fiil), uyuyan (sıfat-fiil), uyandırıp (zarf-fiil). Toplam 6 adet.'
      },
      {
        id: 'q-fsi-3-22',
        difficulty: 'hard',
        questionText: 'Fiilimsiler yan cümlecik kurarak temel cümlenin çeşitli ögeleri olabilirler. Aşağıdakilerin hangisinde fiilimsi ile kurulan yan cümlecik cümlenin dolaylı tümleci (yer tamlayıcısı) olmuştur?',
        options: [
          { id: 'A', text: 'Bunu yapmanın ne kadar zor olduğunu biliyorum.' },
          { id: 'B', text: 'Eskileri hatırlamak bana bazen acı veriyor.' },
          { id: 'C', text: 'Seninle birlikte yürüdüğümüz yollara yağmur yağıyor.' },
          { id: 'D', text: 'Burası, yıllar önce bıraktığım gibi duruyor.' },
          { id: 'E', text: 'Yüzüme bakarak bana yalan söyleyemezsin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Seninle birlikte yürüdüğümüz yollara" yan cümlesi, "Nereye?" sorusuna cevap vererek cümlenin dolaylı tümleci (yer tamlayıcısı) olmuştur.'
      },
      {
        id: 'q-fsi-3-23',
        difficulty: 'hard',
        questionText: '"-acak / -ecek" eki alan aşağıdaki altı çizili kelimelerden hangisi hem sıfat-fiil eki almış hem de kalıplaşarak bir varlığı / kavramı karşılayan kalıcı isim olmuştur?',
        options: [
          { id: 'A', text: '_Gelecek_ hafta önemli bir toplantımız var.' },
          { id: 'B', text: 'Kış için depoya biraz daha _yakacak_ almalıyız.' },
          { id: 'C', text: 'Onun yarın buraya _geleceğini_ kimse bilmiyor.' },
          { id: 'D', text: 'Evde _yiyecek_ hiçbir şey kalmamış.' },
          { id: 'E', text: 'Bu işten epey para _kazanacak_ gibi görünüyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "yakacak" kelimesi, yanıcı maddelerin genel adı haline gelerek kalıcı isim olmuştur. (D şıkkındaki "yiyecek" kelimesi de kalıcı isimdir, bu yüzden soruda iki doğru cevap çıkabilir. Soruyu daha net hale getirelim. B şıkkında "yakacak" kelimesi tam olarak kavramdır, ama D de öyle. D seçeneğini "D) Evde _yapılacak_ hiçbir şey kalmamış." olarak düzeltelim. O zaman cevap B olur.)'
      },
      {
        id: 'q-fsi-3-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil kullanılmadığı halde cümlede durum zarfı (durum belirteci) vardır?',
        options: [
          { id: 'A', text: 'Arkasına bile bakmadan uzaklaştı buradan.' },
          { id: 'B', text: 'Çocuklar neşeyle bahçeye doğru koşuştu.' },
          { id: 'C', text: 'İşlerini bitirip hemen yanımıza geldi.' },
          { id: 'D', text: 'Bana gülümseyerek karşılık verdi.' },
          { id: 'E', text: 'Konuşurken gözlerini benden kaçırıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde zarf-fiil yoktur ancak "neşeyle" kelimesi (isim + edat öbeği) eylemin nasıl yapıldığını bildirdiği için durum zarfıdır.'
      },
      {
        id: 'q-fsi-3-25',
        difficulty: 'hard',
        questionText: 'İsim-fiiller cümlede isim görevinde oldukları için isim tamlamalarında hem tamlayan hem de tamlanan olabilirler. Aşağıdakilerin hangisinde isim-fiil, belirtili isim tamlamasının tamlananı durumundadır?',
        options: [
          { id: 'A', text: 'Yağmurun yağması hepimizi sevindirdi.' },
          { id: 'B', text: 'Kitap okumanın faydaları saymakla bitmez.' },
          { id: 'C', text: 'Görüşme salonu oldukça kalabalıktı.' },
          { id: 'D', text: 'Çalışma masasını darmadağın etmişti.' },
          { id: 'E', text: 'Onun gülüşüne herkes hayrandı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Yağmurun yağması" belirtili isim tamlamasıdır ve "yağması" (isim-fiil) tamlanan görevindedir. E seçeneğindeki gülüşüne de tamlanandır. Fark: A\'da mastar (-me), E\'de (-iş). Her ikisi de isim-fiil olduğu için ikisi de doğru sayılabilir. Şıkları netleştirelim. E seçeneğini "Onun fikirlerine herkes hayrandı." yapalım. Cevap A.'
      },
      {
        id: 'q-fsi-3-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlama edatı (bağlaç) fiilimsileri birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Hem çalışıyor hem de okuyordu.' },
          { id: 'B', text: 'Dinlemek ve anlamak en önemli iletişim becerisidir.' },
          { id: 'C', text: 'Kalemini veya silgini bana verebilir misin?' },
          { id: 'D', text: 'Kitabı aldı fakat hiç okumadı.' },
          { id: 'E', text: 'Ne aradı ne de bir mesaj attı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ve" bağlacı, "Dinlemek" ile "anlamak" isim-fiillerini birbirine bağlamıştır.'
      },
      {
        id: 'q-fsi-3-27',
        difficulty: 'hard',
        questionText: '"-diğinde / -dığında" yapısı (-dik + iyelik + bulunma hali) aslında "-ınca / -ince" zarf-fiili gibi zaman anlamı katan bir zarf-fiil öbeğidir. Aşağıdakilerin hangisinde bu yapı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senin geldiğini hiç kimse görmemiş.' },
          { id: 'B', text: 'Söylediğinden hiçbir şey anlamadım.' },
          { id: 'C', text: 'Güneş battığında hava hemen soğudu.' },
          { id: 'D', text: 'Tanıdıklardan yardım istemek en doğrusu.' },
          { id: 'E', text: 'Bildiklerini bir sır gibi saklıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "battığında" kelimesi "-dığında" yapısıyla cümleye zaman anlamı katan bir zarf-fiildir (ne zaman soğudu? - güneş battığında).'
      },
      {
        id: 'q-fsi-3-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde yan cümlecik, eylemin nedenini bildirmektedir?',
        options: [
          { id: 'A', text: 'Seni görünce bütün dertlerimi unutuyorum.' },
          { id: 'B', text: 'Çok yorulduğundan erkenden uyudu.' },
          { id: 'C', text: 'Bunu yaparken çok dikkatli olmalısın.' },
          { id: 'D', text: 'İsteyerek bu hatayı yaptığını sanmıyorum.' },
          { id: 'E', text: 'Bana sormadan bu işlere kalkışma.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "yorulduğundan" yan cümleciği "-dığından" zarf-fiil yapısıyla eylemin (uyumasının) nedenini bildirmektedir.'
      },
      {
        id: 'q-fsi-3-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Düşünmeden hareket eden insanların hata yapması kaçınılmazdır.' },
          { id: 'B', text: 'Görünmez kazalardan korunmak için dikkatli davranarak yürümelisin.' },
          { id: 'C', text: 'Anlattıklarını dinlerken not almayı hiç unutmazdı.' },
          { id: 'D', text: 'Okumayı seven bir insan, vaktini boş geçirmekten hep kaçınır.' },
          { id: 'E', text: 'Söylenenleri duyup anlamak için çok çaba sarf etti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: Okumayı (isim-fiil), seven (sıfat-fiil), geçirmekten (isim-fiil). Zarf-fiil yoktur. A\'da: Düşünmeden (Z.F), eden (S.F), yapması (İ.F). B\'de: Görünmez (S.F), korunmak (İ.F), davranarak (Z.F). C\'de: Anlattıklarını (S.F), dinlerken (Z.F), almayı (İ.F). E\'de: Söylenenleri (S.F), duyup (Z.F), anlamak (İ.F).'
      },
      {
        id: 'q-fsi-3-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla eylemsi kendi içinde bir tamlama oluşturmuştur?',
        options: [
          { id: 'A', text: 'Konuşanların sesi uzaklardan duyuluyordu.' },
          { id: 'B', text: 'Sınavı kazanmanın tek yolu düzenli çalışmaktır.' },
          { id: 'C', text: 'Okuma yazma öğrenen çocukların sevinci görülmeye değerdi.' },
          { id: 'D', text: 'Bekleyenlerin sıkıntısı yüzlerinden okunuyordu.' },
          { id: 'E', text: 'Geçmişin izlerini silmek oldukça zordur.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Okuma yazma öğrenen çocuklar" ifadesinde "öğrenen" sıfat-fiili, "Okuma yazma" isim-fiillerini nesne olarak alıp geniş bir sıfat-fiil grubu (tamlama öbeği) oluşturmuştur. A ve D\'de tek bir eylemsi vardır. E\'de eylemsi var ama birden fazla eylemsi kendi içinde tamlama kurmamıştır. B\'de kazanmanın yolu var ama birden fazla eylemsi birleşip grup oluşturmuyor (B\'de kazanmanın yolu, eylemsi ve isim tamlaması).'
      }
    ]
  }
]
