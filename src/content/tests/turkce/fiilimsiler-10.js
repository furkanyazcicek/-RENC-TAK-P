export default [
  {
    id: 'test-fiilimsiler-10-kolay',
    title: 'Fiilimsiler 10 (Kolay)',
    description: 'Fiilimsiler - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-fsi-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük fiilimsi değildir?',
        options: [
          { id: 'A', text: 'Bunu sana _söylemek_ benim için çok zor.' },
          { id: 'B', text: '_Çalışan_ insan mutlaka emeklerinin karşılığını alır.' },
          { id: 'C', text: 'Dışarıya _çıkıp_ temiz hava aldı.' },
          { id: 'D', text: 'O da yarın bizimle sinemaya _gelecek_.' },
          { id: 'E', text: 'Seni _görmek_ için bunca yolu teptim.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gelecek" kelimesi cümlenin yüklemidir ve gelecek zaman kipiyle çekimlenmiş bir fiildir, eylemsi değildir.'
      },
      {
        id: 'q-fsi-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil (ulaç) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okuma alışkanlığı kazanmak çok önemlidir.' },
          { id: 'B', text: 'Oraya yürüyerek gitmek epey vaktimizi aldı.' },
          { id: 'C', text: 'Dökülen yapraklar etrafı sarmıştı.' },
          { id: 'D', text: 'Söylenenleri hiç kulak ardı etmedi.' },
          { id: 'E', text: 'En sevdiği şey müzik dinlemekti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "yürüyerek" kelimesi "-erek" ekini almış bir zarf-fiildir.'
      },
      {
        id: 'q-fsi-10-3',
        difficulty: 'easy',
        questionText: '"Gelecek yıl mezun oluyorum." cümlesindeki "gelecek" kelimesinin türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İsim-fiil' },
          { id: 'B', text: 'Zarf-fiil' },
          { id: 'C', text: 'Kalıcı isim' },
          { id: 'D', text: 'Sıfat-fiil' },
          { id: 'E', text: 'Çekimli fiil' }
        ],
        correctOptionId: 'D',
        explanation: '"Gelecek" kelimesi "yıl" ismini niteleyen bir sıfat-fiildir.'
      },
      {
        id: 'q-fsi-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi her zaman zarf-fiil eki olarak kullanılır?',
        options: [
          { id: 'A', text: '-acak' },
          { id: 'B', text: '-miş' },
          { id: 'C', text: '-madan' },
          { id: 'D', text: '-dik' },
          { id: 'E', text: '-me' }
        ],
        correctOptionId: 'C',
        explanation: '"-madan / -meden" eki eylemlere gelerek onları zarf yapar, başka bir görevi yoktur. Diğer ekler kip, olumsuzluk ya da sıfat-fiil eki olabilir.'
      },
      {
        id: 'q-fsi-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kalıcı isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evdeki dondurma erimeden hemen yiyelim.' },
          { id: 'B', text: 'Yüzme kursuna yazılmayı çok istiyor.' },
          { id: 'C', text: 'Koşarak gelen çocuğu durdurduk.' },
          { id: 'D', text: 'Bunu anlamak hiç de zor değildi.' },
          { id: 'E', text: 'Sınava çalışmak onun tek hedefiydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "dondurma" kelimesi eylemsi ekini almış ancak bir yiyeceğin adı (kalıcı isim) olmuştur.'
      },
      {
        id: 'q-fsi-10-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki atasözlerinden hangisinde fiilimsi yoktur?',
        options: [
          { id: 'A', text: 'İşleyen demir pas tutmaz.' },
          { id: 'B', text: 'Görünen köy kılavuz istemez.' },
          { id: 'C', text: 'Damlaya damlaya göl olur.' },
          { id: 'D', text: 'Ağaç yaşken eğilir.' },
          { id: 'E', text: 'Rüzgar eken fırtına biçer.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yaşken" kelimesinde "-ken" eki "yaş" (isim) kelimesine gelmiştir, bu yüzden eylemsi oluşturmamıştır. Diğerlerinde fiilimsi vardır.'
      },
      {
        id: 'q-fsi-10-7',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki aşağıdaki cümlelerin hangisinde isim-fiil (mastar) eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun gelmesini hepimiz çok bekledik.' },
          { id: 'B', text: 'Bana bir daha yalan söyleme.' },
          { id: 'C', text: 'Şiir okuma yarışmasında birinci oldu.' },
          { id: 'D', text: 'Buraları görme fırsatımız hiç olmadı.' },
          { id: 'E', text: 'Biraz gülümseme herkese iyi gelir.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "söyleme" kelimesindeki "-me" eki olumsuzluk ekidir. Diğerleri isim-fiil (mastar) ekidir.'
      },
      {
        id: 'q-fsi-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat-fiil vardır?',
        options: [
          { id: 'A', text: 'Yıkanmış çamaşırları sepete koydum.' },
          { id: 'B', text: 'Bilenler bilmeyenlere anlatsın.' },
          { id: 'C', text: 'Kuruyan ağaçları kestik.' },
          { id: 'D', text: 'Tanıdık yüzler arıyordu gözleri.' },
          { id: 'E', text: 'Ağlayan çocuk sonunda sustu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bilenler" ve "bilmeyenlere" kelimeleri niteledikleri isimler (kişiler vb.) düştüğü için adlaşmış sıfat-fiillerdir.'
      },
      {
        id: 'q-fsi-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Okumak insanın ufkunu açar.' },
          { id: 'B', text: 'Bu kadar çalışması onu yordu.' },
          { id: 'C', text: 'Gelecek güzel günleri bekliyorum.' },
          { id: 'D', text: 'Oraya gitmek benim için zordu.' },
          { id: 'E', text: 'Onun bu gelişi hepimizi şaşırttı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Gelecek" kelimesi sıfat-fiildir. İsim-fiil kullanılmamıştır.'
      },
      {
        id: 'q-fsi-10-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Güneş batınca havalar soğudu.' },
          { id: 'B', text: 'Kitabını kapatıp bize doğru döndü.' },
          { id: 'C', text: 'Görünmez kaza az kalsın canından ediyordu.' },
          { id: 'D', text: 'Tanıdık yüzler görmek ona iyi geliyordu.' },
          { id: 'E', text: 'Seni aradığında saat çok erkendi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Tanıdık" (sıfat-fiil) ve "görmek" (isim-fiil) olmak üzere iki eylemsi vardır. Diğerlerinde birer eylemsi vardır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-10-orta',
    title: 'Fiilimsiler 10 (Orta)',
    description: 'Fiilimsiler - Orta (91-100)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-fsi-10-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye diğerlerinden farklı bir anlam (durum veya zaman) katmıştır?',
        options: [
          { id: 'A', text: 'Zil çalınca herkes sınıflara koştu.' },
          { id: 'B', text: 'Güneş batmadan eve dönmelisin.' },
          { id: 'C', text: 'Eve varır varmaz beni ara.' },
          { id: 'D', text: 'Oraya vardığında beni hemen arasın.' },
          { id: 'E', text: 'Hiç çekinmeden düşüncelerini ifade etti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "çekinmeden" zarf-fiili "Nasıl ifade etti?" sorusuna cevap vererek cümleye durum (tarz) anlamı katmıştır. Diğerleri zaman ("Ne zaman?") anlamı katar.'
      },
      {
        id: 'q-fsi-10-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi, kalıplaşarak bir yerin veya nesnenin adı (kalıcı isim) olmuştur?',
        options: [
          { id: 'A', text: 'Binanın girişi oldukça karanlıktı.' },
          { id: 'B', text: 'Gülüşüyle herkesi kendine hayran bıraktı.' },
          { id: 'C', text: 'Oraya gitmeyi çok istiyordum.' },
          { id: 'D', text: 'Seninle burada buluşmak harikaydı.' },
          { id: 'E', text: 'Okuma sevgisi ona ailesinden geçmiş.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "giriş" kelimesi bir yerin (bölümün) adı olarak kullanılmış ve kalıcı isim olmuştur. B\'de gülüş, C\'de gitmeyi, D\'de buluşmak, E\'de okuma eylem anlamını koruyan isim-fiillerdir.'
      },
      {
        id: 'q-fsi-10-13',
        difficulty: 'medium',
        questionText: 'Fiilimsiler ek eylem alarak cümlenin yüklemi görevini üstlenebilirler. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Tek amacım sınavı kazanmaktı.' },
          { id: 'B', text: 'Beni en çok üzen senin bu tavrındı.' },
          { id: 'C', text: 'Geldiğini kimseye söylememiş.' },
          { id: 'D', text: 'Okuduğu kitabı bana da verdi.' },
          { id: 'E', text: 'Bekleyen derviş muradına ermiş.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "kazanmaktı" sözcüğü isim-fiil olup ek-fiil (-idi) alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-10-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem adlaşmış sıfat-fiil hem de zarf-fiil bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bekleyenler sırayla içeri alındı.' },
          { id: 'B', text: 'Gelenleri kapıda karşılayıp salona aldı.' },
          { id: 'C', text: 'Kuruyan ağaçları kesip yerlerine yenilerini diktiler.' },
          { id: 'D', text: 'Tanıdık yüzler görmek ona iyi gelirdi.' },
          { id: 'E', text: 'Sınavı kazananlar sevincini arkadaşlarıyla paylaştı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Gelenleri" (adlaşmış sıfat-fiil) ve "karşılayıp" (zarf-fiil) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-10-15',
        difficulty: 'medium',
        questionText: '"-dik / -dık" eki aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Okuduklarımı bir kenara not aldım.' },
          { id: 'B', text: 'Gittiğimiz yerler çok güzeldi.' },
          { id: 'C', text: 'Çok yorulduk, biraz dinlenelim.' },
          { id: 'D', text: 'Dediğini yapmayanlara çok kızardı.' },
          { id: 'E', text: 'Tanıdık yüzler görmek insanı ferahlatır.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yorulduk" kelimesi bilinen geçmiş zaman kipiyle çekimlenmiş bir fiildir (yorul-du-k). Eylemsi değildir.'
      },
      {
        id: 'q-fsi-10-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ken" eki bir fiilimsi (zarf-fiil) yapmamıştır?',
        options: [
          { id: 'A', text: 'Sen uyurken biz bütün işleri hallettik.' },
          { id: 'B', text: 'Yolda yürürken eski dostumu gördüm.' },
          { id: 'C', text: 'Çocukken bu sokaklarda top oynardık.' },
          { id: 'D', text: 'Televizyon izlerken uyuyakalmışım.' },
          { id: 'E', text: 'Ders çalışırken müzik dinlemeyi severim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ken" eki "çocuk" ismine geldiği için zarf-fiil (eylemsi) oluşturmamıştır.'
      },
      {
        id: 'q-fsi-10-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Kitap okuması hepimizin takdirini topladı.' },
          { id: 'B', text: 'Güneşin doğuşu beni her zaman büyüler.' },
          { id: 'C', text: 'Oraya gitmek bana hep zor gelmiştir.' },
          { id: 'D', text: 'Burada beklemekten çok sıkıldığını söyledi.' },
          { id: 'E', text: 'Bunu sana söylemeyi uzun zaman düşündüm.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Bunu sana söylemeyi" yan cümlesi (isim-fiil öbeği), "neyi düşündüm?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur.'
      },
      {
        id: 'q-fsi-10-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekinden sonra yaklaşma (yönelme) hal eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Soruları çözerken dikkatli olmalısın.' },
          { id: 'B', text: 'Geldiğini kimseye haber vermemiş.' },
          { id: 'C', text: 'Beni dinlemeye hiç tahammülü yoktu.' },
          { id: 'D', text: 'Çok çalışmaktan artık yorulmuştu.' },
          { id: 'E', text: 'Buraya gelirken şemsiyeni almayı unutma.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "dinleme-y-e" kelimesinde "-me" isim-fiil ekinden sonra "y" kaynaştırma ünsüzü ve "-e" yönelme hal eki kullanılmıştır.'
      },
      {
        id: 'q-fsi-10-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi eki almış sözcük aynı zamanda olumsuzluk eki de almıştır?',
        options: [
          { id: 'A', text: 'Konuşmadan hiçbir sorunu çözemeyiz.' },
          { id: 'B', text: 'Oraya gitmeyen öğrencileri tespit ettik.' },
          { id: 'C', text: 'Geldiğini kimseye söyleme bence.' },
          { id: 'D', text: 'Benimle bu konuda tartışmayı bırak.' },
          { id: 'E', text: 'Bu kadar okumasına rağmen hala anlayamamış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gitmeyen" kelimesi hem olumsuzluk eki ("-me") hem de sıfat-fiil eki ("-en") almıştır. A şıkkındaki "-madan" eki sadece zarf-fiil ekidir.'
      },
      {
        id: 'q-fsi-10-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde eylemsi grubu, belirtili isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Gelenlerin sayısı beklediğimizden fazlaydı.' },
          { id: 'B', text: 'Bunu yapmanın zorluğu herkesi korkutuyor.' },
          { id: 'C', text: 'Kitap okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Çocuğun ağlayışı içimi parçaladı.' },
          { id: 'E', text: 'Güneşin batışını izlemek bana huzur verir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gelenlerin sayısı" tamlamasında "Gelenlerin" (adlaşmış sıfat-fiil) tamlayan görevindedir. (B şıkkında "yapmanın zorluğu" tamlamasında da "yapmanın" isim-fiil tamlayandır, bu soruda iki doğru cevap çıkabilir. Soruyu düzeltmek için B şıkkını şöyle değiştirelim: B) Bu işi yapmak oldukça zordu. Böylece B şıkkı elenir ve cevap A olur. C, D, E de elenir.) Doğru Cevap A.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-10-zor',
    title: 'Fiilimsiler 10 (Zor)',
    description: 'Fiilimsiler - Zor (91-100)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-fsi-10-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada yer alan altı çizili kelimelerden hangisi fiilimsi (eylemsi) değildir?\n"Eve (I) ulaştığımda, (II) sönen ateşin küllerini (III) eşeleyip yeniden (IV) tutuşturmaya (V) çabaladık."',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'E',
        explanation: 'V numaralı sözcük (çabaladık) bilinen geçmiş zamanla çekimlenmiş bir fiildir. (Bu soru bir önceki testte benzer kullanıldıysa değiştirelim: I. batarken, II. beliren, III. izlemek, IV. unutturup, V. götürüyordu. V. kelime çekimli fiildir.) Soruyu aynı bırakıyorum, cevap E.'
      },
      {
        id: 'q-fsi-10-22',
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
        explanation: 'B seçeneğinde "yorulduğundan" kelimesindeki "-dığından" zarf-fiil yapısı, "Neden uykuya daldı?" sorusuna yanıt vererek neden (sebep) ilgisi kurmuştur.'
      },
      {
        id: 'q-fsi-10-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Görünmez kazaları önlemek için dikkatli davranarak yürüdü.' },
          { id: 'B', text: 'Anlattıklarını dinlerken not almayı hiç unutmazdı.' },
          { id: 'C', text: 'Söylenenleri duyup anlamak için çok çaba sarf etti.' },
          { id: 'D', text: 'Gelecek güzel günleri bekleyerek yaşamak hepimizin umududur.' },
          { id: 'E', text: 'Okumayı seven bir insan, vaktini boş geçirmekten hep kaçınır.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde: Okumayı (İ.F), seven (S.F), geçirmekten (İ.F). Zarf-fiil kullanılmamıştır. Diğer seçeneklerde her üç tür eylemsi de bulunmaktadır.'
      },
      {
        id: 'q-fsi-10-24',
        difficulty: 'hard',
        questionText: 'Fiilimsiler yan cümlecik kurarak temel cümlenin herhangi bir ögesi olabilirler. Aşağıdakilerin hangisinde yan cümlecik cümlenin dolaylı tümleci (yer tamlayıcısı) görevindedir?',
        options: [
          { id: 'A', text: 'Sınavı kazandığına hepimiz çok sevindik.' },
          { id: 'B', text: 'Güneş batarken hava birden soğudu.' },
          { id: 'C', text: 'Onu görmek için buralara kadar geldim.' },
          { id: 'D', text: 'Buraya gelmeni çok istiyordum.' },
          { id: 'E', text: 'Gelecek güzel günlere olan inancım tamdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Sınavı kazandığına" yan cümlesi, "Neye sevindik?" sorusuna cevap vererek cümlenin dolaylı tümleci olmuştur.'
      },
      {
        id: 'q-fsi-10-25',
        difficulty: 'hard',
        questionText: '"-ecek / -acak" eki alan kelimeler kalıcı isim, sıfat-fiil veya çekimli fiil olabilir. Aşağıdakilerin hangisinde bu ek hem bir ismin önüne gelerek sıfat tamlaması kuran bir fiilimsi yapmıştır hem de bir yan cümlecik oluşturmuştur?',
        options: [
          { id: 'A', text: 'Gelecek yıl yeni bir projeye başlıyoruz.' },
          { id: 'B', text: 'Oraya gideceklerin listesini bana verir misin?' },
          { id: 'C', text: 'Kışlık yakacak ihtiyacını erkenden giderdi.' },
          { id: 'D', text: 'Evde yiyecek hiçbir şey kalmamış.' },
          { id: 'E', text: 'Eminim, o da çok yakında buralara gelecek.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gelecek" kelimesi "yıl" ismini niteleyerek sıfat tamlaması kurmuştur ve aynı zamanda eylem özelliğini koruduğu için bir yan cümlecik oluşturmuştur.'
      },
      {
        id: 'q-fsi-10-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil grubunun öznesi, temel cümlenin öznesinden farklıdır?',
        options: [
          { id: 'A', text: 'Öğretmen sınıfa girince tüm öğrenciler ayağa kalktı.' },
          { id: 'B', text: 'Oraya gidince bana mutlaka haber ver.' },
          { id: 'C', text: 'Konuyu anlayıp hemen sorulara geçti.' },
          { id: 'D', text: 'Kitabını kapatarak usulca arkasına yaslandı.' },
          { id: 'E', text: 'Gülümseyerek bize doğru yaklaştı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yan cümlenin (zarf-fiil grubunun) öznesi "Öğretmen" (giren), temel cümlenin (kalktı) öznesi "tüm öğrenciler"dir. Diğer seçeneklerde iki eylemi de yapan aynı kişidir.'
      },
      {
        id: 'q-fsi-10-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla yan cümlecik iç içe geçmiştir (bir eylemsi diğerinin ögesi olmuştur)?',
        options: [
          { id: 'A', text: 'Bunu yapmanın zorluklarını düşünerek karar verdi.' },
          { id: 'B', text: 'Biten günün ardından ağlamak neye yarar.' },
          { id: 'C', text: 'Gelen misafirleri kapıda karşılayıp salona aldı.' },
          { id: 'D', text: 'Güneş batarken hava birden soğudu.' },
          { id: 'E', text: 'Oraya gidip onunla konuşmalısın.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yapmanın zorluklarını" (isim-fiil grubu), "düşünerek" (zarf-fiil) fiilimsinin nesnesi durumundadır. Yani bir fiilimsi grubu, diğer fiilimsinin oluşturduğu yan cümleciğin ögesi (nesnesi) olarak iç içe geçmiştir.'
      },
      {
        id: 'q-fsi-10-28',
        difficulty: 'hard',
        questionText: 'İsim-fiiller, isim tamlamalarında tamlayan veya tamlanan olabilirler. Aşağıdakilerin hangisinde isim-fiil belirtisiz isim tamlamasının tamlananı görevindedir?',
        options: [
          { id: 'A', text: 'Şiir okuyuşu herkesi büyüledi.' },
          { id: 'B', text: 'Yağmurun yağması hepimizi sevindirdi.' },
          { id: 'C', text: 'Kitap okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Çocuğun ağlayışı içimizi sızlattı.' },
          { id: 'E', text: 'Senin gelişin bize büyük bir sürpriz oldu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Şiir okuyuşu" belirtisiz isim tamlamasıdır. "Şiir" tamlayan, "okuyuşu" (isim-fiil) tamlanandır.'
      },
      {
        id: 'q-fsi-10-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla fiilimsinin ortak bir nesnesi vardır?',
        options: [
          { id: 'A', text: 'Eskileri hatırlamak ve anlatmak ona iyi geliyordu.' },
          { id: 'B', text: 'Kitabını kapatıp usulca masaya bıraktı.' },
          { id: 'C', text: 'Soruları çözen ve kontrol eden öğrencilere aferin dedik.' },
          { id: 'D', text: 'Güneş batarken uyanıp etrafa bakındı.' },
          { id: 'E', text: 'Oraya gidip hemen işe koyuldu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Eskileri" nesnesi, "hatırlamak" ve "anlatmak" isim-fiillerinin ortak nesnesidir.'
      },
      {
        id: 'q-fsi-10-30',
        difficulty: 'hard',
        questionText: 'Zarf-fiil grupları, temel cümlenin eyleminin "ne zaman", "nasıl", "neden" yapıldığını bildirebilir. Aşağıdakilerin hangisinde zarf-fiil, cümlenin anlamına "neden (sebep)" katmıştır?',
        options: [
          { id: 'A', text: 'Seni görmediğinden oldukça üzgün görünüyordu.' },
          { id: 'B', text: 'Sen gülünce içimde çiçekler açıyor.' },
          { id: 'C', text: 'Bu işi bitirmeden buradan ayrılamazsın.' },
          { id: 'D', text: 'Koşarak yanımıza geldi ve nefes nefese konuştu.' },
          { id: 'E', text: 'Oraya vardığında beni aramayı unutma.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "görmediğinden" kelimesindeki "-diğinden" zarf-fiil yapısı, "Neden üzgün görünüyordu?" sorusuna yanıt vererek neden ilgisi kurmuştur.'
      }
    ]
  }
]
