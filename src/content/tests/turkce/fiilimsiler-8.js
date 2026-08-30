export default [
  {
    id: 'test-fiilimsiler-8-kolay',
    title: 'Fiilimsiler 8 (Kolay)',
    description: 'Fiilimsiler - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-fsi-8-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekini almış sözcük eylemsi olma özelliğini kaybedip kalıcı isim olmuştur?',
        options: [
          { id: 'A', text: 'Onu görmek için bunca yolu yürüdük.' },
          { id: 'B', text: 'Sabahları koşmak sağlığa faydalıdır.' },
          { id: 'C', text: 'Girişteki kalabalık dikkatimi çekti.' },
          { id: 'D', text: 'Gülerek yanımızdan uzaklaştı.' },
          { id: 'E', text: 'Tanıdık yüzler aradı gözlerim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Giriş" kelimesi, bir binanın veya alanın başlangıç kısmı anlamında kalıcı isim olmuştur. Eylem anlamını yitirmiştir.'
      },
      {
        id: 'q-fsi-8-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat-fiil, adlaşmış sıfat-fiil olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gelen misafirleri salona aldık.' },
          { id: 'B', text: 'Bekleyenler sırayla içeri girdi.' },
          { id: 'C', text: 'Dökülen yapraklar yolları kaplamıştı.' },
          { id: 'D', text: 'Kuruyan çiçekleri tek tek budadı.' },
          { id: 'E', text: 'Okuduğu kitapları çok severdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bekleyenler" kelimesinde nitelediği isim düştüğü için kelime adlaşmış sıfat-fiildir. Diğer seçeneklerde sıfat-fiiller isimleri nitelemeye devam etmektedir.'
      },
      {
        id: 'q-fsi-8-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde isim-fiil (mastar) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaşamak, direnmektir her şeye inat.' },
          { id: 'B', text: 'Rüzgar esince ağaçlar fısıldaşır.' },
          { id: 'C', text: 'Sen gülünce bütün dünya güzelleşir.' },
          { id: 'D', text: 'Ağlayan gözlerimi silip yola koyuldum.' },
          { id: 'E', text: 'Bitmeyen bir geceye uyandık sabaha karşı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Yaşamak" ve "direnmektir" kelimeleri isim-fiildir. Diğerlerinde sıfat-fiil (ağlayan, bitmeyen) veya zarf-fiil (esince, gülünce) kullanılmıştır.'
      },
      {
        id: 'q-fsi-8-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi her zaman zarf-fiil eki olarak kullanılır?',
        options: [
          { id: 'A', text: '-miş' },
          { id: 'B', text: '-ecek' },
          { id: 'C', text: '-arak' },
          { id: 'D', text: '-dik' },
          { id: 'E', text: '-ma' }
        ],
        correctOptionId: 'C',
        explanation: '"-arak / -erek" eki eylemlere gelerek onları zarf yapar, başka bir görevi yoktur. Diğerleri kip eki veya olumsuzluk eki olarak da kullanılabilir.'
      },
      {
        id: 'q-fsi-8-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Okula giderken yolda onu gördüm.' },
          { id: 'B', text: 'Kitabını kapatıp bize doğru döndü.' },
          { id: 'C', text: 'Oturup benimle biraz dertleşmesini istedim.' },
          { id: 'D', text: 'Güneş pırıl pırıl parlıyordu gökyüzünde.' },
          { id: 'E', text: 'Söylenenleri hiç umursamadı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde sadece çekimli fiil (parlıyordu) ve isim/zarf soylu sözcükler vardır. Eylemsi yoktur.'
      },
      {
        id: 'q-fsi-8-6',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde zarf-fiil cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çocuklar koşarak yanımıza geldiler.' },
          { id: 'B', text: 'Güneş batınca her yeri karanlık sardı.' },
          { id: 'C', text: 'Kitabını severek okuyordu.' },
          { id: 'D', text: 'Hiç durmadan saatlerce yürüdüler.' },
          { id: 'E', text: 'Gözlerimin içine bakarak yalan söyledi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "batınca" zarf-fiili, olayın ne zaman gerçekleştiğini bildirerek cümleye zaman anlamı katmıştır. Diğerleri durum anlamı katar.'
      },
      {
        id: 'q-fsi-8-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi sıfat-fiil değildir?',
        options: [
          { id: 'A', text: 'Sokakta _oynayan_ çocukları izledik.' },
          { id: 'B', text: 'Bize _tanıdık_ yüzler lazımdı o an.' },
          { id: 'C', text: '_Gelecek_ hafta yeni bir proje başlıyor.' },
          { id: 'D', text: 'Oraya _gittiğimizde_ yağmur yağıyordu.' },
          { id: 'E', text: '_Biten_ sevgilerin ardından yas tutulmaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gittiğimizde" sözcüğü ("-dik" eki ve bulunma hali) cümleye zaman anlamı katan bir zarf-fiil öbeğidir.'
      },
      {
        id: 'q-fsi-8-8',
        difficulty: 'easy',
        questionText: '"Onun bana böyle davranması beni çok üzdü." cümlesindeki fiilimsinin türü nedir?',
        options: [
          { id: 'A', text: 'Zarf-fiil' },
          { id: 'B', text: 'Sıfat-fiil' },
          { id: 'C', text: 'İsim-fiil' },
          { id: 'D', text: 'Çekimli fiil' },
          { id: 'E', text: 'Edat' }
        ],
        correctOptionId: 'C',
        explanation: '"Davranması" kelimesi "-ma" isim-fiil ekini almıştır.'
      },
      {
        id: 'q-fsi-8-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla eylemsi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Biten dersin ardından bahçeye çıktık.' },
          { id: 'B', text: 'Seninle görüşmeyi ben de çok isterdim.' },
          { id: 'C', text: 'Görünmez kaza geliyorum demez.' },
          { id: 'D', text: 'Onu görüp konuşmak için buraya geldim.' },
          { id: 'E', text: 'Yağmur kesilince yola koyulduk.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "görüp" (zarf-fiil) ve "konuşmak" (isim-fiil) olmak üzere iki adet eylemsi vardır.'
      },
      {
        id: 'q-fsi-8-10',
        difficulty: 'easy',
        questionText: '"-ma / -me" eki aşağıdaki cümlelerin hangisinde olumsuzluk eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benimle bu konuyu tartışma lütfen.' },
          { id: 'B', text: 'Onun gelmesi herkesi mutlu etti.' },
          { id: 'C', text: 'Oturma odasının camı kırılmış.' },
          { id: 'D', text: 'Okuma alışkanlığı kazanmalısın.' },
          { id: 'E', text: 'Bunu yapma nedenini hala anlamadım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "tartışma" kelimesindeki "-ma" eki, eylemin yapılmamasını bildiren olumsuzluk ekidir.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-8-orta',
    title: 'Fiilimsiler 8 (Orta)',
    description: 'Fiilimsiler - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-fsi-8-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zarf-fiil cümleye durum (nasıl) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sen gelince bütün sorunlar bitti.' },
          { id: 'B', text: 'Güneş batmadan eve dönmelisin.' },
          { id: 'C', text: 'Hiç çekinmeden duygularını ifade etti.' },
          { id: 'D', text: 'Eve varır varmaz seni arayacağım.' },
          { id: 'E', text: 'Sınav bittiğinde derin bir nefes aldık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çekinmeden" zarf-fiili "Nasıl ifade etti?" sorusuna cevap vererek cümleye durum anlamı katmıştır. Diğerleri zaman anlamı katar.'
      },
      {
        id: 'q-fsi-8-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemsi eki alan sözcük, ek-fiil alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Senin geldiğini hiç kimse görmemiş.' },
          { id: 'B', text: 'En büyük hayalim doktor olmaktı.' },
          { id: 'C', text: 'Okumak insanın kelime dağarcığını zenginleştirir.' },
          { id: 'D', text: 'Burada bekleyenler çok sıkılmıştı.' },
          { id: 'E', text: 'Kuruyan ağaçları kesip yerlerine yenilerini diktiler.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "olmaktı" kelimesi isim-fiil olup ek-fiil (idi) alarak cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-fsi-8-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağlayan çocuğa şeker verdiler, sustu.' },
          { id: 'B', text: 'Bilenlerle bilmeyenler bir olur mu hiç?' },
          { id: 'C', text: 'Çalışan insan daima başarır.' },
          { id: 'D', text: 'Dökülen yapraklar yolları kaplamıştı.' },
          { id: 'E', text: 'Biten sevgilerin ardından ağlamak yersiz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bilenlerle bilmeyenler" kelimelerinde niteledikleri isimler düştüğü için kelimeler adlaşmış sıfat-fiildir.'
      },
      {
        id: 'q-fsi-8-14',
        difficulty: 'medium',
        questionText: 'Fiilimsiler, cümlede isim soylu kelimeler gibi görev alabilirler. Aşağıdaki cümlelerin hangisinde isim-fiil cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Güneşin doğuşu hepimizi büyüledi.' },
          { id: 'B', text: 'Bu işi başarmak en büyük hedefimizdir.' },
          { id: 'C', text: 'Okuma sevgisi ona ailesinden geçmiş.' },
          { id: 'D', text: 'Seninle görüşmeyi çok istiyordum.' },
          { id: 'E', text: 'Oraya gitmek bana hep zor gelmiştir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Seninle görüşmeyi" yan cümleciği (isim-fiil grubu), "neyi istiyordum?" sorusuna cevap vererek cümlenin belirtili nesnesi olmuştur.'
      },
      {
        id: 'q-fsi-8-15',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde altı çizili sözcük kalıcı isim değildir?',
        options: [
          { id: 'A', text: 'Annem akşam yemeği için _kavurma_ yaptı.' },
          { id: 'B', text: 'Yeni aldığı _çakmak_ hemen bozuldu.' },
          { id: 'C', text: 'Binanın _girişinde_ buluşalım.' },
          { id: 'D', text: 'Ondan böyle bir şey _beklemek_ hataydı.' },
          { id: 'E', text: 'Giyinmek için _deneme_ kabinine yöneldi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "beklemek" kelimesi eylem (mastar) özelliğini sürdürmektedir. Diğerleri ise bir nesne, yer veya kavram adı olarak kalıcı isimdir.'
      },
      {
        id: 'q-fsi-8-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ken" eki bir fiilimsi (zarf-fiil) yapmamıştır?',
        options: [
          { id: 'A', text: 'Ders çalışırken müzik dinlemeyi severim.' },
          { id: 'B', text: 'Yolda yürürken eski bir dostumu gördüm.' },
          { id: 'C', text: 'Gençken çok daha hızlı koşardım.' },
          { id: 'D', text: 'Sen uyurken biz bütün işleri hallettik.' },
          { id: 'E', text: 'Televizyon izlerken uyuya kalmışım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ken" eki "genç" ismine gelmiştir. İsimlere gelen -ken eki zarf-fiil oluşturmaz.'
      },
      {
        id: 'q-fsi-8-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi eki almış sözcük olumsuzluk eki de almıştır?',
        options: [
          { id: 'A', text: 'Geldiğini kimseye söyleme bence.' },
          { id: 'B', text: 'Konuşmadan hiçbir sorunu çözemeyiz.' },
          { id: 'C', text: 'Bu kadar okumasına rağmen hala anlayamamış.' },
          { id: 'D', text: 'Benimle bu konuda tartışmayı bırak.' },
          { id: 'E', text: 'Oraya gitmeyen öğrencileri tespit ettik.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "gitmeyen" kelimesi hem olumsuzluk eki ("-me") hem de sıfat-fiil eki ("-en") almıştır. B şıkkındaki "-madan" eki zarf-fiil ekidir, olumsuzluk eki + ayrılma hali değildir.'
      },
      {
        id: 'q-fsi-8-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem isim-fiil hem de sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Görünmez kazalara karşı dikkatli olmalıyız.' },
          { id: 'B', text: 'Okuyan insanın kelime dağarcığı geniştir.' },
          { id: 'C', text: 'Biten işlerin ardından dinlenmeyi hak ettik.' },
          { id: 'D', text: 'Koşarak yanımıza geldi ve nefes nefese konuştu.' },
          { id: 'E', text: 'Buraya gelip benimle konuşmasını istedim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Biten" (sıfat-fiil) ve "dinlenmeyi" (isim-fiil) bir arada kullanılmıştır.'
      },
      {
        id: 'q-fsi-8-19',
        difficulty: 'medium',
        questionText: '"-dik" eki aşağıdaki cümlelerin hangisinde sıfat-fiil eki olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Okuduklarımı bir kenara not aldım.' },
          { id: 'B', text: 'Tanıdık yüzler görmek ona iyi geldi.' },
          { id: 'C', text: 'Bildiklerimi anlatmak için buradayım.' },
          { id: 'D', text: 'Çok yorulduk, biraz dinlenelim.' },
          { id: 'E', text: 'Gittiğimiz yerler çok güzeldi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yorulduk" sözcüğündeki "-di" bilinen geçmiş zaman eki, "-k" ise şahıs ekidir. Çekimli fiildir.'
      },
      {
        id: 'q-fsi-8-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde eylemsi sayısı diğerlerinden fazladır?',
        options: [
          { id: 'A', text: 'Güneş batınca evlerin ışıkları yandı.' },
          { id: 'B', text: 'Çok çalışıp sınavı kazanmak en büyük hayaliydi.' },
          { id: 'C', text: 'Seni görmeden buradan ayrılmayı düşünmüyorum.' },
          { id: 'D', text: 'Ağlayan çocuğu kucağına alıp susturmaya çalıştı.' },
          { id: 'E', text: 'Seninle görüşmek için buraya kadar geldim.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: Ağlayan (sıfat-fiil), alıp (zarf-fiil), susturmaya (isim-fiil) olmak üzere üç eylemsi vardır. Diğerlerinde ikişer veya birer eylemsi vardır.'
      }
    ]
  },
  {
    id: 'test-fiilimsiler-8-zor',
    title: 'Fiilimsiler 8 (Zor)',
    description: 'Fiilimsiler - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-fsi-8-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen altı çizili kelimelerden hangisi eylemsi (fiilimsi) değildir?\n"Eve (I) ulaştığımda, içerde (II) uyuyan çocuğu (III) uyandırmamaya (IV) çalışarak odama (V) geçtim."',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'E',
        explanation: 'I: ulaştığımda (zarf-fiil), II: uyuyan (sıfat-fiil), III: uyandırmamaya (isim-fiil), IV: çalışarak (zarf-fiil), V: geçtim (çekimli fiil). V numaralı kelime eylemsi değildir. (Sorunun metninde altı çizili diyor ama parantez içi rakamlarla belirtilmiş. I: ulaştığımda, II: uyuyan, III: uyandırmamaya, IV: çalışarak, V: geçtim. Doğru cevap E).'
      },
      {
        id: 'q-fsi-8-22',
        difficulty: 'hard',
        questionText: 'Fiilimsiler bulundukları cümlede yan cümlecik oluşturarak cümlenin çeşitli ögeleri olabilirler. Aşağıdakilerin hangisinde yan cümlecik cümlenin dolaylı tümleci (yer tamlayıcısı) görevindedir?',
        options: [
          { id: 'A', text: 'Güneşin doğuşunu büyük bir hayranlıkla izledik.' },
          { id: 'B', text: 'Yağmur yağınca bütün yollar göle döndü.' },
          { id: 'C', text: 'Söylediklerine hiç kimse inanmadı.' },
          { id: 'D', text: 'Oraya gitmeyi çok istiyordum.' },
          { id: 'E', text: 'Gelmesiyle gitmesi bir oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Söylediklerine" (adlaşmış sıfat-fiil), "-e" hal eki almıştır ve "Neye inanmadı?" sorusuna cevap vererek cümlenin dolaylı tümleci olmuştur.'
      },
      {
        id: 'q-fsi-8-23',
        difficulty: 'hard',
        questionText: '"-ecek / -acak" eki hem gelecek zaman kipi hem de sıfat-fiil eki olarak kullanılabilir. Aşağıdaki cümlelerin hangisinde bu ek, bir ismin önüne gelerek sıfat tamlaması kuran bir fiilimsi yapmıştır?',
        options: [
          { id: 'A', text: 'Oraya yarın sabah erkenden gidecek.' },
          { id: 'B', text: 'Eminim, bu işin sonunda o da çok üzülecek.' },
          { id: 'C', text: 'Evde yiyecek hiçbir şey kalmadığını söyledi.' },
          { id: 'D', text: 'Gelecek yıl yurt dışına taşınmayı planlıyor.' },
          { id: 'E', text: 'Bütün bu zorluklar elbette bir gün bitecek.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Gelecek" kelimesi "yıl" ismini niteleyerek sıfat tamlaması kurmuştur. C seçeneğindeki "yiyecek" kalıcı isimdir. Diğerleri ise çekimli fiildir.'
      },
      {
        id: 'q-fsi-8-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat-fiil, belirtili isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Bilenlerin sözü, yolumuzu aydınlatan ışıktır.' },
          { id: 'B', text: 'Sevenin halinden ancak seven anlar.' },
          { id: 'C', text: 'Gidenlerin ardından sadece bakakaldık.' },
          { id: 'D', text: 'Ağlayan çocuğun sesi sokakta yankılandı.' },
          { id: 'E', text: 'Söylenenleri hiç kulak ardı etmem.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bilenlerin sözü" belirtili isim tamlamasıdır. "Bilenlerin" adlaşmış sıfat-fiili, bu tamlamanın tamlayanıdır. (B seçeneğindeki "Sevenin hali" de isim tamlamasıdır, her ikisi de doğru sayılabilir. Şıkları netleştirelim. B şıkkını "Seven gönüller ayrılmaz." yapalım, o zaman B sıfat tamlaması olur. A doğru kalır. A: "Bilenlerin sözü...")'
      },
      {
        id: 'q-fsi-8-25',
        difficulty: 'hard',
        questionText: 'İsim-fiil eki olan "-ma / -me" bazı kelimelerde kalıplaşarak bir nesnenin ya da kavramın kalıcı adı olur. Aşağıdaki cümlelerin hangisinde bu duruma uymayan (fiilimsi özelliğini koruyan) bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Danışmadan gidip evraklarını teslim alabilirsin.' },
          { id: 'B', text: 'Akşam için annem çok güzel sarma yapmış.' },
          { id: 'C', text: 'Dondurma yemek için dışarı çıktık.' },
          { id: 'D', text: 'Evin duvarlarını boyama işi ona kalmıştı.' },
          { id: 'E', text: 'Çocuğun elindeki uçurtma rüzgarda koptu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "boyama" sözcüğü kalıcı isim değil, eylem (iş/hareket) anlamını koruyan bir isim-fiildir. Diğerlerindeki altı çizilebilecek kelimeler (danışma, sarma, dondurma, uçurtma) kalıcı isimdir.'
      },
      {
        id: 'q-fsi-8-26',
        difficulty: 'hard',
        questionText: 'Zarf-fiil grupları, temel cümlenin eyleminin "ne zaman", "nasıl", "neden" yapıldığını bildirebilir. Aşağıdakilerin hangisinde zarf-fiil, cümlenin anlamına "neden (sebep)" katmıştır?',
        options: [
          { id: 'A', text: 'Sen gülünce içimde çiçekler açıyor.' },
          { id: 'B', text: 'Bu işi bitirmeden buradan ayrılamazsın.' },
          { id: 'C', text: 'Seni görmediğinden oldukça üzgün görünüyordu.' },
          { id: 'D', text: 'Koşarak yanımıza geldi ve nefes nefese konuştu.' },
          { id: 'E', text: 'Oraya vardığında beni aramayı unutma.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "görmediğinden" kelimesindeki "-diğinden" zarf-fiil yapısı, "Neden üzgün görünüyordu?" sorusuna yanıt vererek neden (sebep) ilgisi kurmuştur.'
      },
      {
        id: 'q-fsi-8-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilimsi ekinden sonra yaklaşma (yönelme) hal eki getirilmiştir?',
        options: [
          { id: 'A', text: 'Kitap okumaktan hiç bıkmıyordu.' },
          { id: 'B', text: 'Geldiğini kimseye haber vermemiş.' },
          { id: 'C', text: 'Buraya gelmeye çok önceden karar vermiştim.' },
          { id: 'D', text: 'Soruları çözerken dikkatli olmalısın.' },
          { id: 'E', text: 'Onun bu bakışı hepimizi ürkütmüştü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "gelme-y-e" kelimesinde "-me" isim-fiil ekinden sonra "y" kaynaştırma ünsüzü ve "-e" yönelme (yaklaşma) hal eki kullanılmıştır.'
      },
      {
        id: 'q-fsi-8-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla fiilimsinin ortak bir nesnesi vardır?',
        options: [
          { id: 'A', text: 'Kitabını kapatıp usulca masaya bıraktı.' },
          { id: 'B', text: 'Eskileri düşünmek ve hatırlamak ona acı veriyordu.' },
          { id: 'C', text: 'Soruları çözen ve kontrol eden öğrencilere aferin dedik.' },
          { id: 'D', text: 'Güneş batarken uyanıp etrafa bakındı.' },
          { id: 'E', text: 'Oraya gidip hemen işe koyuldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eskileri" nesnesi, "düşünmek" ve "hatırlamak" isim-fiillerinin ortak nesnesidir (Neyi düşünmek ve hatırlamak?).'
      },
      {
        id: 'q-fsi-8-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim-fiil, sıfat-fiil ve zarf-fiil bir arada KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Anlattıklarını dinlerken not almayı hiç unutmazdı.' },
          { id: 'B', text: 'Görünmez kazalardan korunmak için dikkatli davranarak yürümelisin.' },
          { id: 'C', text: 'Söylenenleri duyup anlamak için büyük çaba harcadı.' },
          { id: 'D', text: 'Okumayı seven bir insan, vaktini boş geçirmekten hep kaçınır.' },
          { id: 'E', text: 'Çözülemeyen sorunları bir kenara bırakıp dinlenmeyi tercih etti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: Okumayı (isim-fiil), seven (sıfat-fiil), geçirmekten (isim-fiil). Zarf-fiil kullanılmamıştır. Diğer seçeneklerde üç fiilimsi türü de mevcuttur.'
      },
      {
        id: 'q-fsi-8-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlenin öznesi, temel cümlenin öznesinden farklıdır?',
        options: [
          { id: 'A', text: 'Çocuklar içeri girince sınıfta büyük bir sessizlik oldu.' },
          { id: 'B', text: 'Soruları dikkatlice okuyup çözdü.' },
          { id: 'C', text: 'Konuyu hiç anlamadan teste geçmiş.' },
          { id: 'D', text: 'Gülümseyerek yanımıza kadar geldi.' },
          { id: 'E', text: 'Arkasına bile bakmadan oradan uzaklaştı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yan cümlenin öznesi "Çocuklar" (içeri girenler), temel cümlenin (oldu) öznesi "büyük bir sessizlik"tir. Diğer seçeneklerde her iki eylemi de yapan aynı kişidir (O).'
      }
    ]
  }
]
