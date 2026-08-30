export default [
  {
    id: 'test-fiilimsiler-11-kolay',
    title: 'Fiilimsiler 11 (Kolay)',
    description: 'Fiilimsiler - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-fsi-11-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük fiilimsi değildir?',
        options: [
          { id: 'A', text: 'Onu _görünce_ ne yapacağımı şaşırdım.' },
          { id: 'B', text: 'Buraya _gelip_ bizimle oturmasını istedim.' },
          { id: 'C', text: 'Sana bunları _anlatmak_ benim için çok zor.' },
          { id: 'D', text: 'Sınav bittiğinde hemen yanıma _geldi_.' },
          { id: 'E', text: '_Çalışan_ insan mutlaka emeklerinin karşılığını alır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "geldi" kelimesi bilinen geçmiş zaman kipiyle (-di) çekimlenmiş bir fiildir, eylemsi değildir.'
      },
      {
        id: 'q-fsi-11-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi her zaman zarf-fiil (ulaç) eki olarak kullanılır?',
        options: [
          { id: 'A', text: '-acak' },
          { id: 'B', text: '-mış' },
          { id: 'C', text: '-dıkça' },
          { id: 'D', text: '-dik' },
          { id: 'E', text: '-ma' }
        ],
        correctOptionId: 'C',
        explanation: '"-dıkça / -dikçe" eki eylemlere gelerek onları sadece zarf-fiil yapar. Diğer ekler (kip, sıfat-fiil, olumsuzluk) farklı görevlerde de kullanılabilir.'
      },
      {
        id: 'q-fsi-11-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kalıcı isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Elindeki çakmakla oynamaması gerektiğini söyledim.' },
          { id: 'B', text: 'Koşarak gelen çocuğu hemen durdurduk.' },
          { id: 'C', text: 'Oraya gitmek benim için hiç de zor değildi.' },
          { id: 'D', text: 'Sınava çalışmak onun en büyük hedefiydi.' },
          { id: 'E', text: 'Yüzme kursuna yazılmayı çok istiyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "çakmak" kelimesi ateş yakmaya yarayan bir aletin adı olmuş, eylem anlamını yitirip kalıcı isim olmuştur.'
      },
      {
        id: 'q-fsi-11-4',
        difficulty: 'easy',
        questionText: '"Gelecek hafta yeni bir projeye başlıyoruz." cümlesindeki "gelecek" kelimesinin türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zarf-fiil' },
          { id: 'B', text: 'Sıfat-fiil' },
          { id: 'C', text: 'İsim-fiil' },
          { id: 'D', text: 'Kalıcı isim' },
          { id: 'E', text: 'Çekimli fiil' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelecek" kelimesi "hafta" ismini niteleyen bir sıfat-fiildir (-ecek ekini almıştır).'
      },
      {
        id: 'q-fsi-11-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye diğerlerinden farklı bir anlam katmıştır?',
        options: [
          { id: 'A', text: 'Oraya yürüyerek gitmek epey vaktimizi aldı.' },
          { id: 'B', text: 'Güneş batarken ufuk kızıla boyandı.' },
          { id: 'C', text: 'Zil çalınca çocuklar bahçeye koştu.' },
          { id: 'D', text: 'Eve varır varmaz beni mutlaka ara.' },
          { id: 'E', text: 'Sınav bittiğinde derin bir nefes aldık.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "yürüyerek" zarf-fiili cümleye durum (tarz) anlamı katmıştır. Diğerlerinde (batarken, çalınca, varır varmaz, bittiğinde) zaman anlamı vardır.'
      },
      {
        id: 'q-fsi-11-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil (mastar) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dökülen yapraklar yolları kaplamıştı.' },
          { id: 'B', text: 'Tanıdık yüzler arıyordu gözleri.' },
          { id: 'C', text: 'Biten sevgilerin ardından yas tutulmaz.' },
          { id: 'D', text: 'Okuma alışkanlığı kazanmak çok önemlidir.' },
          { id: 'E', text: 'Ağlayan çocuk sonunda sustu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Okuma" ve "kazanmak" kelimeleri isim-fiildir. Diğerlerinde sıfat-fiil kullanılmıştır.'
      },
      {
        id: 'q-fsi-11-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki atasözlerinden hangisinde fiilimsi yoktur?',
        options: [
          { id: 'A', text: 'İşleyen demir ışıldar.' },
          { id: 'B', text: 'Görünen köy kılavuz istemez.' },
          { id: 'C', text: 'Rüzgar eken fırtına biçer.' },
          { id: 'D', text: 'Damlaya damlaya göl olur.' },
          { id: 'E', text: 'Akıl yaşta değil baştadır.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde fiil veya eylemsi yoktur, tamamen isim soylu kelimelerden oluşmuştur. Diğerlerinde işleyen, görünen, eken, damlaya kelimeleri eylemsidir.'
      },
      {
        id: 'q-fsi-11-8',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki aşağıdaki cümlelerin hangisinde olumsuzluk eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun gelmesini hepimiz çok bekledik.' },
          { id: 'B', text: 'Şiir okuma yarışmasında birinci oldu.' },
          { id: 'C', text: 'Benimle bir daha yalan konuşma.' },
          { id: 'D', text: 'Buraları görme fırsatımız hiç olmadı.' },
          { id: 'E', text: 'Biraz gülümseme herkese iyi gelir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "konuşma" kelimesindeki "-ma" eki, eylemin yapılmamasını bildiren olumsuzluk ekidir.'
      },
      {
        id: 'q-fsi-11-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil vardır?',
        options: [
          { id: 'A', text: 'Yıkanmış çamaşırları sepete koydum.' },
          { id: 'B', text: 'Kuruyan ağaçları tek tek kestiler.' },
          { id: 'C', text: 'Okuduğu kitapları arkadaşlarına tavsiye etti.' },
          { id: 'D', text: 'Bilenler bilmeyenlere anlatsın.' },
          { id: 'E', text: 'Ağlayan çocuğa şeker verdiler.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Bilenler" ve "bilmeyenlere" kelimeleri niteledikleri isimler (kişiler vb.) düştüğü için adlaşmış sıfat-fiillerdir.'
      },
      {
        id: 'q-fsi-11-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Güneş batınca havalar soğudu.' },
          { id: 'B', text: 'Kitabını kapatıp bize doğru döndü.' },
          { id: 'C', text: 'Tanıdık yüzler görmek ona iyi geliyordu.' },
          { id: 'D', text: 'Görünmez kaza az kalsın canından ediyordu.' },
          { id: 'E', text: 'Seni aradığında saat çok erkendi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Tanıdık" (sıfat-fiil) ve "görmek" (isim-fiil) olmak üzere iki eylemsi vardır. Diğerlerinde birer eylemsi vardır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-11-orta',
    title: 'Fiilimsiler 11 (Orta)',
    description: 'Fiilimsiler - Orta (101-110)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-fsi-11-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye durum (nasıl) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Oraya vardığında beni hemen arasın.' },
          { id: 'B', text: 'Güneş batmadan eve dönmelisin.' },
          { id: 'C', text: 'Hiç çekinmeden düşüncelerini ifade etti.' },
          { id: 'D', text: 'Zil çalınca herkes sınıflara koştu.' },
          { id: 'E', text: 'Eve varır varmaz beni ara.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "çekinmeden" zarf-fiili "Nasıl ifade etti?" sorusuna cevap vererek cümleye durum (tarz) anlamı katmıştır. Diğerleri zaman ("Ne zaman?") anlamı katar.'
      },
      {
        id: 'q-fsi-11-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Güneşin doğuşu beni her zaman büyüler.' },
          { id: 'B', text: 'Oraya gitmek bana hep zor gelmiştir.' },
          { id: 'C', text: 'Burada beklemekten çok sıkıldığını söyledi.' },
          { id: 'D', text: 'Bunu sana söylemeyi uzun zaman düşündüm.' },
          { id: 'E', text: 'Kitap okuması hepimizin takdirini topladı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Bunu sana söylemeyi" yan cümlesi (isim-fiil öbeği), "neyi düşündüm?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur.'
      },
      {
        id: 'q-fsi-11-13',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek eylem alarak cümlenin yüklemi görevini üstlenebilirler. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Beni en çok üzen senin bu tavrındı.' },
          { id: 'B', text: 'Tek amacım sınavı kazanmaktı.' },
          { id: 'C', text: 'Okuduğu kitabı bana da verdi.' },
          { id: 'D', text: 'Bekleyen derviş muradına ermiş.' },
          { id: 'E', text: 'Geldiğini kimseye söylememiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kazanmaktı" sözcüğü isim-fiil olup ek-fiil (-idi) alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-11-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ken" eki bir fiilimsi (zarf-fiil) yapmamıştır?',
        options: [
          { id: 'A', text: 'Çocukken bu sokaklarda top oynardık.' },
          { id: 'B', text: 'Yolda yürürken eski dostumu gördüm.' },
          { id: 'C', text: 'Sen uyurken biz bütün işleri hallettik.' },
          { id: 'D', text: 'Televizyon izlerken uyuyakalmışım.' },
          { id: 'E', text: 'Ders çalışırken müzik dinlemeyi severim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-ken" eki "çocuk" ismine geldiği için zarf-fiil (eylemsi) oluşturmamıştır.'
      },
      {
        id: 'q-fsi-11-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem adlaşmış sıfat-fiil hem de zarf-fiil bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bekleyenler sırayla içeri alındı.' },
          { id: 'B', text: 'Sınavı kazananlar sevincini arkadaşlarıyla paylaştı.' },
          { id: 'C', text: 'Kuruyan ağaçları kesip yerlerine yenilerini diktiler.' },
          { id: 'D', text: 'Tanıdık yüzler görmek ona iyi gelirdi.' },
          { id: 'E', text: 'Gelenleri kapıda karşılayıp salona aldı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Gelenleri" (adlaşmış sıfat-fiil) ve "karşılayıp" (zarf-fiil) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-11-16',
        difficulty: 'medium',
        questionText: '"-dik / -dık" eki aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çok yorulduk, biraz dinlenelim.' },
          { id: 'B', text: 'Okuduklarımı bir kenara not aldım.' },
          { id: 'C', text: 'Gittiğimiz yerler çok güzeldi.' },
          { id: 'D', text: 'Dediğini yapmayanlara çok kızardı.' },
          { id: 'E', text: 'Tanıdık yüzler görmek insanı ferahlatır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yorulduk" kelimesi bilinen geçmiş zaman kipiyle çekimlenmiş bir fiildir (yorul-du-k). Eylemsi değildir.'
      },
      {
        id: 'q-fsi-11-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi, kalıplaşarak bir yerin veya nesnenin adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Oraya gitmeyi çok istiyordum.' },
          { id: 'B', text: 'Gülüşüyle herkesi kendine hayran bıraktı.' },
          { id: 'C', text: 'Binanın girişi oldukça karanlıktı.' },
          { id: 'D', text: 'Seninle burada buluşmak harikaydı.' },
          { id: 'E', text: 'Okuma sevgisi ona ailesinden geçmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "giriş" kelimesi bir yerin (bölümün) adı olarak kullanılmış ve kalıcı isim olmuştur. B\'de gülüş, C\'de gitmeyi, D\'de buluşmak, E\'de okuma eylem anlamını koruyan isim-fiillerdir.'
      },
      {
        id: 'q-fsi-11-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekinden sonra yaklaşma (yönelme) hal eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Geldiğini kimseye haber vermemiş.' },
          { id: 'B', text: 'Soruları çözerken dikkatli olmalısın.' },
          { id: 'C', text: 'Buraya gelirken şemsiyeni almayı unutma.' },
          { id: 'D', text: 'Çok çalışmaktan artık yorulmuştu.' },
          { id: 'E', text: 'Beni dinlemeye hiç tahammülü yoktu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "dinleme-y-e" kelimesinde "-me" isim-fiil ekinden sonra "y" kaynaştırma ünsüzü ve "-e" yönelme hal eki kullanılmıştır.'
      },
      {
        id: 'q-fsi-11-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi eki almış sözcük aynı zamanda olumsuzluk eki de almıştır?',
        options: [
          { id: 'A', text: 'Geldiğini kimseye söyleme bence.' },
          { id: 'B', text: 'Konuşmadan hiçbir sorunu çözemeyiz.' },
          { id: 'C', text: 'Oraya gitmeyen öğrencileri tespit ettik.' },
          { id: 'D', text: 'Benimle bu konuda tartışmayı bırak.' },
          { id: 'E', text: 'Bu kadar okumasına rağmen hala anlayamamış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "gitmeyen" kelimesi hem olumsuzluk eki ("-me") hem de sıfat-fiil eki ("-en") almıştır.'
      },
      {
        id: 'q-fsi-11-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde eylemsi grubu, belirtili isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Bunu yapmak herkesi korkutuyor.' },
          { id: 'B', text: 'Gelenlerin sayısı beklediğimizden fazlaydı.' },
          { id: 'C', text: 'Kitap okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Çocuğun ağlayışı içimi parçaladı.' },
          { id: 'E', text: 'Güneşin batışını izlemek bana huzur verir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Gelenlerin sayısı" tamlamasında "Gelenlerin" (adlaşmış sıfat-fiil) tamlayan görevindedir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-11-zor',
    title: 'Fiilimsiler 11 (Zor)',
    description: 'Fiilimsiler - Zor (101-110)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-fsi-11-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada yer alan altı çizili kelimelerden hangisi fiilimsi (eylemsi) değildir?\n"Oraya (I) vardığımda, (II) sönen ateşin küllerini (III) eşeleyip yeniden (IV) tutuşturmaya (V) çabaladık."',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'E',
        explanation: 'V numaralı sözcük (çabaladık) bilinen geçmiş zamanla çekimlenmiş bir fiildir.'
      },
      {
        id: 'q-fsi-11-22',
        difficulty: 'hard',
        questionText: 'Zarf-fiiller cümleye koşul, zaman, neden veya durum gibi anlamlar katabilir. Aşağıdaki cümlelerin hangisinde zarf-fiil, eylemin nedenini bildirmektedir?',
        options: [
          { id: 'A', text: 'Gözlerime bakarak bana yalan söyledi.' },
          { id: 'B', text: 'Çok yorulduğundan erkenden uykuya daldı.' },
          { id: 'C', text: 'Oraya varınca beni mutlaka ara.' },
          { id: 'D', text: 'Sen gülünce bütün dünya güzelleşir.' },
          { id: 'E', text: 'Hiç durmaksızın üç saat boyunca koştu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "yorulduğundan" kelimesindeki "-dığından" zarf-fiil yapısı, "Neden uykuya daldı?" sorusuna yanıt vererek neden ilgisi kurmuştur.'
      },
      {
        id: 'q-fsi-11-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Okumayı seven bir insan, vaktini boş geçirmekten hep kaçınır.' },
          { id: 'B', text: 'Görünmez kazaları önlemek için dikkatli davranarak yürüdü.' },
          { id: 'C', text: 'Anlattıklarını dinlerken not almayı hiç unutmazdı.' },
          { id: 'D', text: 'Söylenenleri duyup anlamak için çok çaba sarf etti.' },
          { id: 'E', text: 'Gelecek güzel günleri bekleyerek yaşamak hepimizin umududur.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: Okumayı (İ.F), seven (S.F), geçirmekten (İ.F). Zarf-fiil kullanılmamıştır.'
      },
      {
        id: 'q-fsi-11-24',
        difficulty: 'hard',
        questionText: 'Fiilimsiler yan cümlecik kurarak temel cümlenin herhangi bir ögesi olabilirler. Aşağıdakilerin hangisinde yan cümlecik cümlenin dolaylı tümleci (yer tamlayıcısı) görevindedir?',
        options: [
          { id: 'A', text: 'Güneş batarken hava birden soğudu.' },
          { id: 'B', text: 'Sınavı kazandığına hepimiz çok sevindik.' },
          { id: 'C', text: 'Onu görmek için buralara kadar geldim.' },
          { id: 'D', text: 'Buraya gelmeni çok istiyordum.' },
          { id: 'E', text: 'Gelecek güzel günlere olan inancım tamdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Sınavı kazandığına" yan cümlesi, "Neye sevindik?" sorusuna cevap vererek cümlenin dolaylı tümleci olmuştur.'
      },
      {
        id: 'q-fsi-11-25',
        difficulty: 'hard',
        questionText: '"-ecek / -acak" eki alan kelimeler kalıcı isim, sıfat-fiil veya çekimli fiil olabilir. Aşağıdakilerin hangisinde bu ek hem bir ismin önüne gelerek sıfat tamlaması kuran bir fiilimsi yapmıştır hem de bir yan cümlecik oluşturmuştur?',
        options: [
          { id: 'A', text: 'Oraya gideceklerin listesini bana verir misin?' },
          { id: 'B', text: 'Kışlık yakacak ihtiyacını erkenden giderdi.' },
          { id: 'C', text: 'Gelecek yıl yeni bir projeye başlıyoruz.' },
          { id: 'D', text: 'Evde yiyecek hiçbir şey kalmamış.' },
          { id: 'E', text: 'Eminim, o da çok yakında buralara gelecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Gelecek" kelimesi "yıl" ismini niteleyerek sıfat tamlaması kurmuştur ve aynı zamanda eylem özelliğini koruduğu için bir yan cümlecik oluşturmuştur.'
      },
      {
        id: 'q-fsi-11-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil grubunun öznesi, temel cümlenin öznesinden farklıdır?',
        options: [
          { id: 'A', text: 'Oraya gidince bana mutlaka haber ver.' },
          { id: 'B', text: 'Konuyu anlayıp hemen sorulara geçti.' },
          { id: 'C', text: 'Öğretmen sınıfa girince tüm öğrenciler ayağa kalktı.' },
          { id: 'D', text: 'Kitabını kapatarak usulca arkasına yaslandı.' },
          { id: 'E', text: 'Gülümseyerek bize doğru yaklaştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yan cümlenin (zarf-fiil grubunun) öznesi "Öğretmen" (giren), temel cümlenin (kalktı) öznesi "tüm öğrenciler"dir.'
      },
      {
        id: 'q-fsi-11-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla yan cümlecik iç içe geçmiştir (bir eylemsi diğerinin ögesi olmuştur)?',
        options: [
          { id: 'A', text: 'Biten günün ardından ağlamak neye yarar.' },
          { id: 'B', text: 'Gelen misafirleri kapıda karşılayıp salona aldı.' },
          { id: 'C', text: 'Bunu yapmanın zorluklarını düşünerek karar verdi.' },
          { id: 'D', text: 'Güneş batarken hava birden soğudu.' },
          { id: 'E', text: 'Oraya gidip onunla konuşmalısın.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yapmanın zorluklarını" (isim-fiil grubu), "düşünerek" (zarf-fiil) fiilimsinin nesnesi durumundadır.'
      },
      {
        id: 'q-fsi-11-28',
        difficulty: 'hard',
        questionText: 'İsim-fiiller, isim tamlamalarında tamlayan veya tamlanan olabilirler. Aşağıdakilerin hangisinde isim-fiil belirtisiz isim tamlamasının tamlananı görevindedir?',
        options: [
          { id: 'A', text: 'Yağmurun yağması hepimizi sevindirdi.' },
          { id: 'B', text: 'Şiir okuyuşu herkesi büyüledi.' },
          { id: 'C', text: 'Kitap okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Çocuğun ağlayışı içimizi sızlattı.' },
          { id: 'E', text: 'Senin gelişin bize büyük bir sürpriz oldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Şiir okuyuşu" belirtisiz isim tamlamasıdır. "Şiir" tamlayan, "okuyuşu" (isim-fiil) tamlanandır.'
      },
      {
        id: 'q-fsi-11-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla fiilimsinin ortak bir nesnesi vardır?',
        options: [
          { id: 'A', text: 'Kitabını kapatıp usulca masaya bıraktı.' },
          { id: 'B', text: 'Eskileri hatırlamak ve anlatmak ona iyi geliyordu.' },
          { id: 'C', text: 'Soruları çözen ve kontrol eden öğrencilere aferin dedik.' },
          { id: 'D', text: 'Güneş batarken uyanıp etrafa bakındı.' },
          { id: 'E', text: 'Oraya gidip hemen işe koyuldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eskileri" nesnesi, "hatırlamak" ve "anlatmak" isim-fiillerinin ortak nesnesidir.'
      },
      {
        id: 'q-fsi-11-30',
        difficulty: 'hard',
        questionText: 'Zarf-fiil grupları, temel cümlenin eyleminin "ne zaman", "nasıl", "neden" yapıldığını bildirebilir. Aşağıdakilerin hangisinde zarf-fiil, cümlenin anlamına "neden (sebep)" katmıştır?',
        options: [
          { id: 'A', text: 'Sen gülünce içimde çiçekler açıyor.' },
          { id: 'B', text: 'Seni görmediğinden oldukça üzgün görünüyordu.' },
          { id: 'C', text: 'Bu işi bitirmeden buradan ayrılamazsın.' },
          { id: 'D', text: 'Koşarak yanımıza geldi ve nefes nefese konuştu.' },
          { id: 'E', text: 'Oraya vardığında beni aramayı unutma.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "görmediğinden" kelimesindeki "-diğinden" zarf-fiil yapısı, "Neden üzgün görünüyordu?" sorusuna yanıt vererek neden ilgisi kurmuştur.'
      }
    ]
  }
]
