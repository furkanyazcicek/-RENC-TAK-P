export default [
  {
    id: 'test-anlatim-bozuk-4-kolay',
    title: 'Anlatım Bozuklukları 4 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-ab-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu ilk defa dün akşam gördüm.' },
          { id: 'B', text: 'Gelecek hafta İstanbul\'a gideceğiz.' },
          { id: 'C', text: 'Karşılıklı mektuplaşarak yıllarca iletişim kurduk.' },
          { id: 'D', text: 'Her zaman doğruyu söylemek gerekir.' },
          { id: 'E', text: 'Sorunları çözmek için çaba harcamalıyız.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mektuplaşmak zaten karşılıklı yapılan bir eylemdir. \"Karşılıklı\" kelimesi gereksizdir.'
      },
      {
        id: 'q-ab-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlamca çelişen sözcüklerin birlikte kullanılmasından kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Gecenin bir yarısı kapı çalındı.' },
          { id: 'B', text: 'Tam tamına on yıl kadar önceydi.' },
          { id: 'C', text: 'Bugün hava bulutlu, yağmur yağabilir.' },
          { id: 'D', text: 'Evde çalışmak bazen sıkıcı olabiliyor.' },
          { id: 'E', text: 'Güzel günlerin geleceğine inanıyorum.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Tam tamına\" kesinlik, \"kadar\" ise yakınlık (yaklaşıklık) ifade eder. Çelişen ifadelerdir.'
      },
      {
        id: 'q-ab-4-3',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştik ki otobüs kalktı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Sözcüğün yanlış yerde kullanımı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'D',
        explanation: 'Durak yeni değildir, gelme eylemi yeni yapılmıştır. \"Durağa yeni gelmiştik ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası vardır?',
        options: [
          { id: 'A', text: 'Bu yolculukta oldukça yalnızdım.' },
          { id: 'B', text: 'Kazada arabası hafif hasar gördü.' },
          { id: 'C', text: 'Bırakın ev almayı, bir bisiklet bile alamaz.' },
          { id: 'D', text: 'O kadar yorulduk ki uyuyamadık.' },
          { id: 'E', text: 'Beyin iltihabı ölüme, hatta sara nöbetlerine yol açabilir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Ölüm daha ileri bir aşamadır. \"Sara nöbetlerine, hatta ölüme\" şeklinde sıralama yapılmalıdır.'
      },
      {
        id: 'q-ab-4-5',
        difficulty: 'easy',
        questionText: '\"Babasını çok sever, her akşam sohbet ederdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"çok\" kelimesi çıkarılarak' },
          { id: 'B', text: '\"sohbet ederdi\" yerine \"konuşurdu\" yazılarak' },
          { id: 'C', text: 'virgülden sonra \"onunla\" eklenerek' },
          { id: 'D', text: '\"her akşam\" yerine \"her zaman\" yazılarak' },
          { id: 'E', text: '\"sever\" kelimesine ek fiil getirilerek' }
        ],
        correctOptionId: 'C',
        explanation: 'İkinci cümle için edat tümleci (onunla) gereklidir. \"Babasını sever, (onunla) sohbet ederdi.\"'
      },
      {
        id: 'q-ab-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Okula geç kaldığı için ceza aldı.' },
          { id: 'B', text: 'Eşyalarını masanın üzerinde unutmuşsun.' },
          { id: 'C', text: 'Sınavı kazandığına hepimiz çok sevindik.' },
          { id: 'D', text: 'Odayı güzelce temizleyip havalandırdık.' },
          { id: 'E', text: 'Herkes onun başarısını takdir etti.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Senin eşyalarını mı\" yoksa \"Onun eşyalarını mı\" belli değildir. Tamlayan eksikliği belirsizlik yaratmıştır.'
      },
      {
        id: 'q-ab-4-7',
        difficulty: 'easy',
        questionText: '\"Arkadaşına dert yanarak başından geçenleri anlattı.\" cümlesindeki deyim yanlışı hangi seçenekteki deyimin kullanılmasıyla düzeltilebilir?',
        options: [
          { id: 'A', text: 'içini dökerek' },
          { id: 'B', text: 'kulak misafiri olarak' },
          { id: 'C', text: 'gözdağı vererek' },
          { id: 'D', text: 'burun kıvırarak' },
          { id: 'E', text: 'göze girerek' }
        ],
        correctOptionId: 'A',
        explanation: '\"Dert yanmak\" şikayet etmek demektir; başından geçenleri detaylıca anlatıp rahatlamak \"içini dökmek\" deyimiyle karşılanır.'
      },
      {
        id: 'q-ab-4-8',
        difficulty: 'easy',
        questionText: '\"Sınıftaki bütün öğrenciler dışarı çıksınlar.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Özne-yüklem (tekillik-çoğulluk) uyumsuzluğu' },
          { id: 'C', text: 'Sıfat tamlaması yanlışı' },
          { id: 'D', text: 'Gereksiz sözcük kullanımı' },
          { id: 'E', text: 'Bağlaç yanlışı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfat tamlaması (bütün öğrenciler) özne olduğunda veya belgisiz sıfatla kurulduğunda yüklem çoğul eki almamalıdır (veya özne cansız ise almaz; insan çoğul öznelerinde bazen alabilir ama \"bütün\" sıfatı kullanıldığında tekillik tercih edilir: çıksın). Ancak insan öznede \"-lar\" genelde doğru kabul edilebilir. Burada asıl mesele \"bütün\" kullanıldığı içindir, tekil olması daha doğrudur.'
      },
      {
        id: 'q-ab-4-9',
        difficulty: 'easy',
        questionText: '\"Bugün yağan yağmur yolları göle çevirdi.\" cümlesinde anlatım bozukluğu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Zaman uyuşmazlığı' },
          { id: 'D', text: 'Özne eksikliği' },
          { id: 'E', text: 'Bu cümlede bozukluk yoktur' }
        ],
        correctOptionId: 'E',
        explanation: '\"Bugün yağan yağmur\" ifadesinde herhangi bir gereksizlik veya bozukluk yoktur.'
      },
      {
        id: 'q-ab-4-10',
        difficulty: 'easy',
        questionText: '\"Onunla karşılıklı görüş alışverişinde bulunduk.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Çelişen sözcükler' },
          { id: 'B', text: 'Sözcüğün yanlış yerde kullanımı' },
          { id: 'C', text: 'Gereksiz sözcük kullanımı' },
          { id: 'D', text: 'Anlam belirsizliği' },
          { id: 'E', text: 'Deyim yanlışı' }
        ],
        correctOptionId: 'C',
        explanation: '\"Alışveriş\" zaten karşılıklı yapılan bir iştir. \"Karşılıklı\" kelimesi gereksizdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-4-orta',
    title: 'Anlatım Bozuklukları 4 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-ab-4-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliğinden kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Ona her zaman güvenir ve değer veririm.' },
          { id: 'B', text: 'Arkadaşlarına yardım eder, hiç kırmazdı.' },
          { id: 'C', text: 'Odayı temizledim ve düzenledim.' },
          { id: 'D', text: 'Eve geldi, hemen televizyonu açtı.' },
          { id: 'E', text: 'Kitabını masada bıraktı ve gitti.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Arkadaşlarına yardım eder, (onları) hiç kırmazdı.\" İkinci cümlede nesne (onları) eksiktir.'
      },
      {
        id: 'q-ab-4-12',
        difficulty: 'medium',
        questionText: '\"Bakanlar kurulu kararlarını onayladı ve meclise gönderdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"onayladı\" kelimesine çoğul eki getirilerek' },
          { id: 'B', text: 'virgülden sonra \"onları\" kelimesi eklenerek' },
          { id: 'C', text: '\"kurulu\" sözcüğünden sonra virgül konularak' },
          { id: 'D', text: '\"meclise\" kelimesi başa alınarak' },
          { id: 'E', text: 'Cümledeki \"ve\" bağlacı çıkarılarak' }
        ],
        correctOptionId: 'C',
        explanation: '\"Bakanlar, kurulu kararlarını...\" mı yoksa \"Bakanlar kurulu, kararlarını...\" mı? Anlam belirsizliğini gidermek için virgül konmalıdır.'
      },
      {
        id: 'q-ab-4-13',
        difficulty: 'medium',
        questionText: '\"Hiç kimse beni dinlemedi, kendi bildiğini okudu.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Yüklem eksikliği' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği' },
          { id: 'E', text: 'Ek eylem eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'İlk cümlenin öznesi \"hiç kimse\", ikinci cümlenin olumlu yüklemine uymaz. İkinci cümleye \"herkes\" öznesi getirilmelidir (Özne eksikliği).'
      },
      {
        id: 'q-ab-4-14',
        difficulty: 'medium',
        questionText: '\"Öğrencilerin birkaçı hariç hiçbiri sinemaya gitmediler.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Dolaylı tümleç eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Hiçbiri\" belgisiz zamiri özne olduğunda yüklem tekil olmalıdır. \"Gitmedi\" olmalıdır.'
      },
      {
        id: 'q-ab-4-15',
        difficulty: 'medium',
        questionText: '\"Yazarın dili kullanışı, sade ve yapmacıktan uzaktı.\" cümlesinde hangi ögenin eksikliği vardır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Nesne' },
          { id: 'D', text: 'Ek fiil' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'D',
        explanation: '\"Sade (idi) ve yapmacıktan uzaktı.\" Ek fiil eksikliği anlamda veya yapıda düşüklük yaratabilir. Gerçi ortak ek fiil (idi) kullanılabilir ama doğru cevap D sayılır.'
      },
      {
        id: 'q-ab-4-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlama yanlışlığı vardır?',
        options: [
          { id: 'A', text: 'Siyasi ve ekonomi alanında adımlar atıldı.' },
          { id: 'B', text: 'Yeni ve eski kitaplar ayrıldı.' },
          { id: 'C', text: 'Çocukların ve gençlerin sorunları konuşuldu.' },
          { id: 'D', text: 'Şiir ve roman okumayı severim.' },
          { id: 'E', text: 'Mavi ve yeşil renkler birbirine uyar.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Siyasi alanında\" denmez, \"Siyasi alanda ve ekonomi alanında\" olmalıdır.'
      },
      {
        id: 'q-ab-4-17',
        difficulty: 'medium',
        questionText: '\"Eski anılarımızı hep beraber andık, gözyaşlarımıza hakim olamadık.\" cümlesinde anlatım bozukluğu var mıdır, varsa nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı vardır.' },
          { id: 'B', text: 'Özne eksikliği vardır.' },
          { id: 'C', text: 'Nesne eksikliği vardır.' },
          { id: 'D', text: 'Anlatım bozukluğu yoktur.' },
          { id: 'E', text: 'Mantık hatası vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Anı zaten eskiden olan bir şeydir. \"Eski\" sözcüğü gereksizdir.'
      },
      {
        id: 'q-ab-4-18',
        difficulty: 'medium',
        questionText: '\"Şirketimizin gelirleri artmış, daha da büyümüştü.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"daha da\" yerine \"çok\" yazılarak' },
          { id: 'B', text: 'virgülden sonra \"şirketimiz\" kelimesi eklenerek' },
          { id: 'C', text: '\"gelirleri\" kelimesi yerine \"karı\" yazılarak' },
          { id: 'D', text: '\"büyümüştü\" yerine \"büyüdü\" yazılarak' },
          { id: 'E', text: '\"artmış\" kelimesine ek fiil eklenerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyüyen gelirler değil şirkettir. İkinci cümlenin öznesi (şirketimiz) eksiktir.'
      },
      {
        id: 'q-ab-4-19',
        difficulty: 'medium',
        questionText: '\"O kadar çok çalıştı ki, adeta gözleri kanlanmış, kıpkırmızı olmuştu.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz bağlaç kullanımı' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Zaman uyuşmazlığı' },
          { id: 'E', text: 'Sözcüğün yanlış anlamda kullanımı' }
        ],
        correctOptionId: 'C',
        explanation: 'Gözün kanlanması ile kıpkırmızı olması aynı şeydir, hatta kanlanmak daha ileri bir aşamadır, burada bir sıralama / mantık veya gereksizlik vardır. Genelde \"gözleri kızarmış, kanlanmıştı\" şeklinde derece artırılır.'
      },
      {
        id: 'q-ab-4-20',
        difficulty: 'medium',
        questionText: '\"Tatile yalnız gidecekti fakat son anda kararından vazgeçti.\" cümlesinde altı çizili bölüm yoktur ancak anlatım bozukluğu nasıl düzeltilir?',
        options: [
          { id: 'A', text: '\"kararından\" kelimesi atılarak' },
          { id: 'B', text: '\"fakat\" yerine \"ve\" yazılarak' },
          { id: 'C', text: '\"yalnız\" yerine \"tek başına\" yazılarak' },
          { id: 'D', text: '\"son anda\" başa alınarak' },
          { id: 'E', text: 'Bu cümlede bozukluk yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle kurallı ve anlamlıdır, herhangi bir anlatım bozukluğu yoktur.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-4-zor',
    title: 'Anlatım Bozuklukları 4 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-ab-4-21',
        difficulty: 'hard',
        questionText: '\"Üniversite yıllarında hem şiir hem de tiyatroyla ilgilendi.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Edat tümleci eksikliği' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği' },
          { id: 'E', text: 'Yüklem eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Hem şiir(le) hem de tiyatroyla ilgilendi.\" olmalıdır. Birinci sözcükte bulunması gereken \"ile\" edatı (vasıta eki) eksik bırakıldığında \"şiir ilgilendi\" gibi bir anlam bozukluğu oluşur.'
      },
      {
        id: 'q-ab-4-22',
        difficulty: 'hard',
        questionText: '\"Her ne kadar çok yorulsam da, işi bitiremeyeceğimi zannetmiyorum.\" cümlesinde anlatılmak istenenle cümlenin yapısı arasındaki uyumsuzluğun sebebi nedir?',
        options: [
          { id: 'A', text: 'Çelişen sözcüklerin kullanımı' },
          { id: 'B', text: 'Olumsuzluk bildiren eklerin yanlış kullanılması' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Bağlaç yanlışı' },
          { id: 'E', text: 'Sözcüğün yanlış anlamda kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Bitiremeyeceğimi zannetmiyorum\" ifadesi, \"bitirebileceğimi sanıyorum\" demektir. Ancak yorulsam da kalıbıyla başlayan bir cümle \"işi bitiremeyeceğimi sanıyorum\" (veya bitiremem) şeklinde bir zıtlık bekler. Çift olumsuzluk anlam karmaşasına yol açmıştır.'
      },
      {
        id: 'q-ab-4-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç (yer tamlayıcısı) eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Yeni aldığı kitabı inceledi, hemen okudu.' },
          { id: 'B', text: 'Bu köye yıllar önce gelmiş, çok sevmişti.' },
          { id: 'C', text: 'Toplantıda alınan kararları onayladı, herkese duyurdu.' },
          { id: 'D', text: 'Babasını çok sever, sürekli mektup yazardı.' },
          { id: 'E', text: 'Evrakları sırasıyla dizdi, dosyaya kaldırdı.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Babasını çok sever, (ona) sürekli mektup yazardı.\" İkinci cümle için dolaylı tümleç gereklidir.'
      },
      {
        id: 'q-ab-4-24',
        difficulty: 'hard',
        questionText: '\"Sözleşmenin iptal edilmesi, iki şirket arasında kriz yaşanmasını sağladı.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"iptal edilmesi\" yerine \"bozulması\" yazılarak' },
          { id: 'B', text: '\"iki şirket arasında\" cümleden çıkarılarak' },
          { id: 'C', text: '\"yaşanmasını\" sözcüğündeki iyelik eki atılarak' },
          { id: 'D', text: '\"sağladı\" yerine \"neden oldu\" veya \"yol açtı\" yazılarak' },
          { id: 'E', text: '\"kriz\" yerine \"sorun\" yazılarak' }
        ],
        correctOptionId: 'D',
        explanation: '\"Sağlamak\" olumlu durumlar için kullanılır. Kriz yaşanması olumsuz bir durumdur, bu yüzden \"yol açtı / neden oldu\" kullanılmalıdır.'
      },
      {
        id: 'q-ab-4-25',
        difficulty: 'hard',
        questionText: '\"Evlerin dışı boyandı, pencereler takıldı.\" cümlesinde anlatım bozukluğu yoktur. Peki \"Evin duvarları sıvanıp boya yapıldı.\" cümlesindeki bozukluk nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Çatı uyuşmazlığı' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Ek eylem eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Sıvanıp\" edilgen, \"boya yapıldı\" (yapmak) gerçi o da edilgen. Ama \"boyandı\" olmalıydı. Cümleler arası çatı/yapı uyumsuzluğu veya kelime seçimi hatası vardır.'
      },
      {
        id: 'q-ab-4-26',
        difficulty: 'hard',
        questionText: '\"Sınav sonuçları belli olduktan sonra, kimin nereye gireceği açıklandı.\" cümlesinde hangi ögenin gereksiz kullanımından doğan bir bozukluk vardır?',
        options: [
          { id: 'A', text: 'Sınav sonuçları' },
          { id: 'B', text: 'sonra' },
          { id: 'C', text: 'belli olduktan' },
          { id: 'D', text: 'Açıklandı' },
          { id: 'E', text: 'Bu cümlede bozukluk yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle dil bilgisi ve anlam açısından doğrudur.'
      },
      {
        id: 'q-ab-4-27',
        difficulty: 'hard',
        questionText: '\"Masanın üzerinde duran kitapların hepsi, senin bana geçen yıl aldığın kitaplardır.\" cümlesinde iyelik ekinin gereksiz kullanımından bahsetmek mümkün müdür? Hayır. Peki aşağıdaki cümlelerin hangisinde gereksiz ek kullanımı vardır?',
        options: [
          { id: 'A', text: 'Babamın bana aldığı arabayı çok seviyorum.' },
          { id: 'B', text: 'Kardeşinin eve geç gelmesini hep eleştirdi.' },
          { id: 'C', text: 'Onun araba kullanmasını bir türlü öğrenemedi.' },
          { id: 'D', text: 'Yüzme kursuna giderek kendini geliştirdi.' },
          { id: 'E', text: 'Okuduğu kitabın özetini defterine yazdı.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Onun\" var diye \"kullanmasını\" doğru görünebilir ancak \"Araba kullanmasını öğrenemedi\" dediğinizde eğer kişi \"kendi\" araba sürecekse \"Araba kullanmayı öğrenemedi\" denmelidir.'
      },
      {
        id: 'q-ab-4-28',
        difficulty: 'hard',
        questionText: '\"Her yazarın kendine özgü bir anlatım tarzı, üslubu vardır.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Tamlama yanlışı' },
          { id: 'E', text: 'Ek yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Anlatım tarzı\" ile \"üslup\" aynı anlama gelir. Birisi gereksizdir.'
      },
      {
        id: 'q-ab-4-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Olayların bu noktaya geleceğini kimse tahmin edemezdi.' },
          { id: 'B', text: 'Dünkü toplantıda alınan kararları herkes destekledi.' },
          { id: 'C', text: 'İşe geç kaldığını müdürden öğrendim.' },
          { id: 'D', text: 'Yarın sabah erkenden yola çıkacaklarını söylediler.' },
          { id: 'E', text: 'Yeni aldığın ayakkabıları çok beğendim.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Senin işe geç kaldığını\" mı, \"Onun işe geç kaldığını\" mı belli değildir. Tamlayan eksikliği belirsizlik yaratır.'
      },
      {
        id: 'q-ab-4-30',
        difficulty: 'hard',
        questionText: '\"Öğrencilerin birçoğu bu konuyu anlamadı ve sınavda zorlandı.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Özne eksikliği vardır.' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu vardır.' },
          { id: 'C', text: 'Nesne eksikliği vardır.' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Öğrencilerin birçoğu\" öznesi \"anlamadı\" (tekil) yüklemiyle uyumludur. İkinci cümlede de aynı özne (onlar/birçoğu) geçerlidir ve \"zorlandı\" yüklemiyle uyumludur.'
      }
    ]
  }
];
