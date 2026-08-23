export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Ekolojinin Temel Kavramları',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Belli bir bölgede yaşayan AYNI TÜR canlıların oluşturduğu topluluğa ne ad verilir?',
        options: [
          { id: 'A', text: 'Komünite' },
          { id: 'B', text: 'Popülasyon' },
          { id: 'C', text: 'Ekosistem' },
          { id: 'D', text: 'Biyosfer' },
          { id: 'E', text: 'Habitat' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı türün belli bir alandaki bireyleri popülasyonu oluşturur (Örn: Karadeniz\'deki hamsiler).'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Belli bir alanda birbiriyle etkileşim halinde olan FARKLI TÜRLERİN oluşturduğu canlılar topluluğuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Komünite' },
          { id: 'C', text: 'Tür' },
          { id: 'D', text: 'Cansız çevre' },
          { id: 'E', text: 'Ekosistem' }
        ],
        correctOptionId: 'B',
        explanation: 'Farklı popülasyonların bir araya gelmesiyle (Örn: Ormandaki kuşlar, böcekler, ağaçlar) komünite oluşur.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Komüniteye (canlılar topluluğuna) CANSIZ ÇEVRENİN (toprak, su, iklim) de eklenmesiyle oluşan en geniş sisteme ne denir?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Ekosistem' },
          { id: 'C', text: 'Habitat' },
          { id: 'D', text: 'Tür' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlılar + Cansız Çevre = Ekosistem.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Dünya üzerinde canlıların yaşadığı, okyanusun dibinden atmosferin belli bir yüksekliğine kadar olan tüm alana (Dünyadaki en büyük ekosisteme) ne ad verilir?',
        options: [
          { id: 'A', text: 'Biyosfer (Ekosfer)' },
          { id: 'B', text: 'Komünite' },
          { id: 'C', text: 'Flora' },
          { id: 'D', text: 'Fauna' },
          { id: 'E', text: 'Habitat' }
        ],
        correctOptionId: 'A',
        explanation: 'Biyosfer, dünyadaki tüm ekosistemlerin toplamı, canlı küredir.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Bir canlının doğal olarak yaşayıp üreyebildiği yere (Doğadaki ADRESİNE) ne denir?',
        options: [
          { id: 'A', text: 'Ekolojik Niş' },
          { id: 'B', text: 'Habitat' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Biyokütle' },
          { id: 'E', text: 'Besin zinciri' }
        ],
        correctOptionId: 'B',
        explanation: 'Habitat canlının adresidir, yaşadığı yerdir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Bir canlının ekosistemdeki işlevine (beslenmesi, üremesi, avlanması) yani ekosistemdeki MESLEĞİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Habitat' },
          { id: 'B', text: 'Ekolojik Niş' },
          { id: 'C', text: 'Popülasyon' },
          { id: 'D', text: 'Ekoton' },
          { id: 'E', text: 'Klimaks' }
        ],
        correctOptionId: 'B',
        explanation: 'Niş (Meslek), canlının doğada yaptığı her türlü faaliyetin bütünüdür.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Farklı ekosistemlerin birbiriyle kesiştiği (Örn: Orman ile gölün birleştiği) geçiş bölgelerine ne denir?',
        options: [
          { id: 'A', text: 'Ekoton' },
          { id: 'B', text: 'Habitat' },
          { id: 'C', text: 'Biyosfer' },
          { id: 'D', text: 'Süksesyon' },
          { id: 'E', text: 'Taşıma kapasitesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Ekoton, iki farklı ekosistemin kesişim bölgesidir ve buralarda tür çeşitliliği fazladır.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Canlıların çevresel faktörlere (sıcaklık, tuzluluk vb.) dayanabildiği alt ve üst sınırlar arasındaki aralığa ne ad verilir?',
        options: [
          { id: 'A', text: 'Ekolojik Tolerans (Hoşgörü) aralığı' },
          { id: 'B', text: 'Optimum değer' },
          { id: 'C', text: 'Niş' },
          { id: 'D', text: 'Ekoton' },
          { id: 'E', text: 'Habitat' }
        ],
        correctOptionId: 'A',
        explanation: 'Canlının yaşayabildiği şartların sınırlarına tolerans (hoşgörü) aralığı denir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir ekosistemin CANSIZ (Abiyotik) faktörlerinden biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Işık' },
          { id: 'B', text: 'Sıcaklık' },
          { id: 'C', text: 'Toprak ve mineraller' },
          { id: 'D', text: 'Üreticiler (Bitkiler)' },
          { id: 'E', text: 'Su (Nem)' }
        ],
        correctOptionId: 'D',
        explanation: 'Üreticiler canlıdır (Biyotik faktör). Işık, sıcaklık, su, toprak cansız (abiyotik) faktörlerdir.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Kendi besinini kendi üretebilen canlılara ne ad verilir?',
        options: [
          { id: 'A', text: 'Ototrof (Üretici)' },
          { id: 'B', text: 'Heterotrof (Tüketici)' },
          { id: 'C', text: 'Saprofit (Çürükçül)' },
          { id: 'D', text: 'Parazit' },
          { id: 'E', text: 'Etçil' }
        ],
        correctOptionId: 'A',
        explanation: 'Kendi besinini (organik maddeyi) inorganik maddelerden üretenlere ototrof denir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Besinini dışarıdan hazır alan canlılara ne ad verilir?',
        options: [
          { id: 'A', text: 'Ototrof' },
          { id: 'B', text: 'Heterotrof (Tüketici)' },
          { id: 'C', text: 'Kemosentetik' },
          { id: 'D', text: 'Fotosentetik' },
          { id: 'E', text: 'Üretici' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüketiciler (hayvanlar, mantarlar vb.) heterotroftur.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Ölü canlıları ve organik atıkları parçalayarak inorganik maddelere dönüştüren ve madde döngüsünü sağlayan canlılara ne denir?',
        options: [
          { id: 'A', text: 'Ototroflar' },
          { id: 'B', text: 'Ayrıştırıcılar (Saprofitler/Çürükçüller)' },
          { id: 'C', text: 'Birincil tüketiciler' },
          { id: 'D', text: 'Otçullar' },
          { id: 'E', text: 'Bitkiler' }
        ],
        correctOptionId: 'B',
        explanation: 'Saprofitler, atıkları parçalayarak toprağa inorganik madde kazandırır.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Hem bitkisel (ot) hem de hayvansal (et) besinlerle beslenen canlılara (Örn: İnsan, Ayı) ne denir?',
        options: [
          { id: 'A', text: 'Herbivor (Otçul)' },
          { id: 'B', text: 'Karnivor (Etçil)' },
          { id: 'C', text: 'Omnivor (Hepçil)' },
          { id: 'D', text: 'Saprofit' },
          { id: 'E', text: 'Ototrof' }
        ],
        correctOptionId: 'C',
        explanation: 'Hem et hem ot yiyenlere omnivor (hepçil) denir.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi doğrudan BİR POPÜLASYON örneğidir?',
        options: [
          { id: 'A', text: 'Ormandaki tüm ağaçlar' },
          { id: 'B', text: 'Göldeki balıklar' },
          { id: 'C', text: 'Van Gölü\'ndeki İnci Kefalleri' },
          { id: 'D', text: 'Marmara Denizi\'ndeki canlılar' },
          { id: 'E', text: 'Evimizdeki hayvanlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Popülasyon için tek bir TÜR adı ve belirli bir ALAN belirtilmelidir. "Van Gölündeki (Alan) İnci Kefalleri (Tür)".'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Ekoloji biliminin inceleme alanı hangi seçenekte en doğru ifade edilmiştir?',
        options: [
          { id: 'A', text: 'Sadece uzayı inceler' },
          { id: 'B', text: 'Canlıların birbirleriyle ve cansız çevreleriyle olan ilişkilerini inceler' },
          { id: 'C', text: 'Sadece hücrenin yapısını inceler' },
          { id: 'D', text: 'Sadece hastalıkları inceler' },
          { id: 'E', text: 'Sadece taşları ve toprağı inceler' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekoloji, canlı ile canlı ve canlı ile çevre ilişkilerini araştıran bilim dalıdır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Besin Zinciri ve Enerji Akışı',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Besin zincirinde enerji akışının kaynağı genellikle nedir?',
        options: [
          { id: 'A', text: 'Toprak' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Güneş' },
          { id: 'D', text: 'Ay' },
          { id: 'E', text: 'Rüzgar' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekosistemlerin temel enerji kaynağı güneştir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Besin zincirlerinin her zaman İLK (en alt) basamağında hangi canlılar yer almak zorundadır?',
        options: [
          { id: 'A', text: 'Birincil tüketiciler' },
          { id: 'B', text: 'Etçiller' },
          { id: 'C', text: 'Ayrıştırıcılar' },
          { id: 'D', text: 'Üreticiler (Ototroflar)' },
          { id: 'E', text: 'İkincil tüketiciler' }
        ],
        correctOptionId: 'D',
        explanation: 'Besin zinciri daima güneş enerjisini bağlayan üreticilerle (bitkiler, algler vb.) başlar.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Ot -> Çekirge -> Kurbağa -> Yılan şeklindeki besin zincirinde, ÇEKİRGE hangi tüketici grubundadır?',
        options: [
          { id: 'A', text: 'Birincil (1.) tüketici' },
          { id: 'B', text: 'İkincil (2.) tüketici' },
          { id: 'C', text: 'Üçüncül (3.) tüketici' },
          { id: 'D', text: 'Üretici' },
          { id: 'E', text: 'Ayrıştırıcı' }
        ],
        correctOptionId: 'A',
        explanation: 'Üreticiyi (otu) doğrudan yiyen ilk canlı (çekirge) birincil tüketicidir.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Besin zincirindeki "ok (->)" işareti neyin AKIŞ YÖNÜNÜ gösterir?',
        options: [
          { id: 'A', text: 'Sadece suyun yönünü' },
          { id: 'B', text: 'Enerji ve maddenin aktarım yönünü (Yenenden -> Yiyene doğru)' },
          { id: 'C', text: 'Zamanı' },
          { id: 'D', text: 'Işığın yönünü' },
          { id: 'E', text: 'Popülasyon artışını' }
        ],
        correctOptionId: 'B',
        explanation: 'Ot -> Çekirge oku, enerjinin ottan çekirgeye aktığını gösterir.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Besin piramidinde üreticilerden tüketicilere doğru çıkıldıkça HER BASAMAKTA enerjinin yaklaşık yüzde kaçı BİR ÜST BASAMAĞA aktarılabilir?',
        options: [
          { id: 'A', text: '%1' },
          { id: 'B', text: '%10' },
          { id: 'C', text: '%50' },
          { id: 'D', text: '%90' },
          { id: 'E', text: '%100' }
        ],
        correctOptionId: 'B',
        explanation: 'Her trofik düzey, aldığı enerjinin %90\'ını kullanır (veya ısı olarak kaybeder), sadece %10\'unu bir üst basamağa aktarabilir. Buna %10 kuralı denir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Besin piramidinde enerjinin büyük bir kısmı bir üst basamağa NEDEN aktarılamaz?',
        options: [
          { id: 'A', text: 'Güneş battığı için' },
          { id: 'B', text: 'Canlı kendi yaşamsal faaliyetleri için kullandığı ve bir kısmı da ISI olarak kaybedildiği için' },
          { id: 'C', text: 'Canlılar birbirini sevmediği için' },
          { id: 'D', text: 'Sular donduğu için' },
          { id: 'E', text: 'Saprofitler izin vermediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Enerji solunumla harcanır, bir kısmı da dışkıyla veya ısı olarak kaybedilir.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Bir ekosistemde her basamakta bulunan canlıların TOPLAM CANLI AĞIRLIĞINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Biyokütle (Biyomas)' },
          { id: 'B', text: 'Habitat' },
          { id: 'C', text: 'Tolerans' },
          { id: 'D', text: 'Ekoton' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'A',
        explanation: 'Biyokütle, o basamaktaki tüm canlıların sahip olduğu toplam organik maddedir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Besin piramidinde aşağıdan yukarıya (üreticiden tepe avcıya) DOĞRU çıkıldıkça genellikle aşağıdakilerden hangisi AZALIR?',
        options: [
          { id: 'A', text: 'Canlıların vücut büyüklüğü' },
          { id: 'B', text: 'Aktarılan enerji ve toplam Biyokütle' },
          { id: 'C', text: 'Dokulardaki zehir birikimi' },
          { id: 'D', text: 'Zaman' },
          { id: 'E', text: 'Işık' }
        ],
        correctOptionId: 'B',
        explanation: 'Yukarı çıkıldıkça enerji %10 kuralına göre azalır, bu da daha az biyokütleyi (canlı sayısını) besleyebilir.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'DDT gibi vücuttan atılamayan zehirli maddelerin, besin zinciri boyunca canlıların dokularında giderek DAHA YOĞUN hale gelmesine ne denir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Biyolojik Birikim (Biyolojik büyütme)' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Kemosentez' },
          { id: 'E', text: 'Solunum' }
        ],
        correctOptionId: 'B',
        explanation: 'Zehrin atılamayıp üst basamaklara konsantre olarak aktarılmasına biyolojik birikim denir.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Besin piramidinde dokularında EN FAZLA ZEHİR biriken (biyolojik birikimin en yoğun olduğu) grup genellikle hangisidir?',
        options: [
          { id: 'A', text: 'Üreticiler' },
          { id: 'B', text: 'Birincil tüketiciler' },
          { id: 'C', text: 'Tepe avcıları (Son tüketiciler)' },
          { id: 'D', text: 'Bitkiler' },
          { id: 'E', text: 'Saprofitler' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehir her basamakta arttığı için piramidin en tepesindeki avcılarda en yüksek oranda bulunur.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Ayrıştırıcıların (Saprofitlerin) besin piramidindeki yeri neresidir?',
        options: [
          { id: 'A', text: 'Sadece en alttadırlar' },
          { id: 'B', text: 'Sadece en üsttedirler' },
          { id: 'C', text: 'Piramidin TÜM BASAMAKLARIYLA ilişkilidirler' },
          { id: 'D', text: 'Piramitte yer almazlar' },
          { id: 'E', text: 'Sadece otçulların yanındadırlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Saprofitler her basamaktaki canlının atık ve ölülerini parçaladıkları için tüm basamaklara etki ederler.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Bir besin zincirinde enerjinin SADECE TEK BİR YÖNDE (Güneşten -> Üreticiye -> Tüketiciye) akmasına ve geri dönmemesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Enerji Akışı' },
          { id: 'B', text: 'Madde döngüsü' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Sera etkisi' },
          { id: 'E', text: 'Ötrofikasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Enerji döngü yapmaz, güneşten gelir, ısı olarak çıkar, bu yüzden tek yönlü bir "akış"tır.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Otçul hayvanların beslendiği "Ot" basamağı, beslenme düzeyi (trofik düzey) olarak kaçıncı sıradadır?',
        options: [
          { id: 'A', text: 'Birincil (1.) trofik düzey' },
          { id: 'B', text: 'İkincil (2.) trofik düzey' },
          { id: 'C', text: 'Üçüncül (3.) trofik düzey' },
          { id: 'D', text: 'Son trofik düzey' },
          { id: 'E', text: 'Sıfırıncı düzey' }
        ],
        correctOptionId: 'A',
        explanation: 'Trofik düzey beslenme basamağıdır. 1. düzey daima Üreticilerdir.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Aşağıdaki canlılardan hangisi KESİNLİKLE fotosentez yapar?',
        options: [
          { id: 'A', text: 'Şapkalı Mantar' },
          { id: 'B', text: 'Bakterilerin tamamı' },
          { id: 'C', text: 'İnsan' },
          { id: 'D', text: 'Ağaç (Yeşil bitki)' },
          { id: 'E', text: 'Kurbağa' }
        ],
        correctOptionId: 'D',
        explanation: 'Yeşil bitkiler kloroplastlarıyla fotosentez yapan üreticilerdir.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Besin piramidinde üreticilerden tüketicilere doğru gidildikçe genellikle birey SAYISI nasıl değişir?',
        options: [
          { id: 'A', text: 'Artar' },
          { id: 'B', text: 'Azalır' },
          { id: 'C', text: 'Aynı kalır' },
          { id: 'D', text: 'Önce artar, sonra azalır' },
          { id: 'E', text: 'Sürekli dalgalanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Genellikle ot sayısı çekirgeden, çekirge sayısı kurbağadan, kurbağa sayısı yılandan daha fazladır. Birey sayısı yukarı çıktıkça azalır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Madde Döngüleri',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Karbon, azot, su gibi maddelerin canlı ve cansız çevre (atmosfer, toprak) arasındaki SÜREKLİ dolaşımına ne ad verilir?',
        options: [
          { id: 'A', text: 'Madde Döngüsü' },
          { id: 'B', text: 'Süksesyon' },
          { id: 'C', text: 'Besin zinciri' },
          { id: 'D', text: 'Kemosentez' },
          { id: 'E', text: 'Biyolojik birikim' }
        ],
        correctOptionId: 'A',
        explanation: 'Maddenin ekosistem içindeki dolanımına madde döngüsü denir (Enerji akışından farklıdır).'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Atmosferdeki Karbondioksiti (CO2) alarak KARBON DÖNGÜSÜNÜ başlatan biyolojik olay hangisidir?',
        options: [
          { id: 'A', text: 'Solunum' },
          { id: 'B', text: 'Fotosentez' },
          { id: 'C', text: 'Ayrışma' },
          { id: 'D', text: 'Buharlaşma' },
          { id: 'E', text: 'Donma' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler fotosentez ile havadaki CO2\'yi alıp organik besine (şekere) dönüştürerek karbonu canlı sistemine sokarlar.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Canlıların yapısındaki karbonun YENİDEN ATMOSFERE CO2 olarak dönmesini sağlayan olay hangisidir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Solunum ve Ayrışma' },
          { id: 'C', text: 'Kemosentez' },
          { id: 'D', text: 'Yoğuşma' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Solunum ile organik besin yakılır ve CO2 havaya geri verilir. Ölülerdeki karbonu ise saprofitler havaya salar.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Fosil yakıtların (kömür, petrol) aşırı kullanımı atmosferde hangi gazın hızla ARTMASINA sebep olur?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Karbondioksit (CO2)' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Argon' }
        ],
        correctOptionId: 'C',
        explanation: 'Fosil yakıtlar yer altındaki hapsolmuş karbondur. Yanınca CO2 olarak atmosfere çıkar.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Atmosferin %78\'ini oluşturmasına rağmen BİTKİLERİN DOĞRUDAN KULLANAMADIĞI gaz hangisidir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Karbondioksit' },
          { id: 'C', text: 'Azot (N2) gazı' },
          { id: 'D', text: 'Su buharı' },
          { id: 'E', text: 'Metan' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkiler havadaki serbest azot gazını alamazlar, azotu topraktan tuz (nitrat) olarak alırlar.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Havadaki azot gazını (N2) TOPRAĞA BAĞLAYAN (bitkilerin kullanabileceği forma çeviren) temel canlı grubu kimdir?',
        options: [
          { id: 'A', text: 'Otçullar' },
          { id: 'B', text: 'Azot bağlayıcı BAKTERİLER (Örn: Rhizobium)' },
          { id: 'C', text: 'Kuşlar' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'Virüsler' }
        ],
        correctOptionId: 'B',
        explanation: 'Azot fiksasyonunu (bağlanmasını) topraktaki veya baklagil kökündeki özel bakteriler gerçekleştirir.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Topraktaki amonyağı önce nitrite, sonra bitkilerin kullanabileceği NİTRAT tuzlarına çeviren bakteri faaliyetine ne denir?',
        options: [
          { id: 'A', text: 'Solunum' },
          { id: 'B', text: 'Fotosentez' },
          { id: 'C', text: 'Nitrifikasyon' },
          { id: 'D', text: 'Terleme' },
          { id: 'E', text: 'Yoğuşma' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehirli amonyağın nitrata çevrilmesine Nitrifikasyon denir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Topraktaki nitrat tuzlarının bir kısmının DİĞER BAZI BAKTERİLERCE yeniden AZOT GAZINA çevrilip ATMOSFERE geri verilmesine ne denir?',
        options: [
          { id: 'A', text: 'Nitrifikasyon' },
          { id: 'B', text: 'Denitrifikasyon' },
          { id: 'C', text: 'Fotosentez' },
          { id: 'D', text: 'Çökelme' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Denitrifikasyon, azotu topraktan havaya geri döndürerek döngüyü tamamlar.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Azot elementi canlıların vücudunda en çok HANGİ TEMEL BİLEŞİĞİN yapısına katılır?',
        options: [
          { id: 'A', text: 'Sadece su' },
          { id: 'B', text: 'Yağ (Trigliserit)' },
          { id: 'C', text: 'Protein ve DNA' },
          { id: 'D', text: 'Glikojen' },
          { id: 'E', text: 'Glikoz' }
        ],
        correctOptionId: 'C',
        explanation: 'Azot (N), proteinlerin ve nükleik asitlerin (DNA/RNA) yapısı için zorunludur.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Madde döngülerinde (Karbon, Azot) organik ölü atıkları inorganik (amonyak, CO2 vb.) maddelere YIKARAK DÖNGÜYE SOKAN kilit canlı grubu hangisidir?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Ayrıştırıcılar (Saprofitler)' },
          { id: 'C', text: 'Otçullar' },
          { id: 'D', text: 'Etçiller' },
          { id: 'E', text: 'Virüsler' }
        ],
        correctOptionId: 'B',
        explanation: 'Saprofitler olmazsa tüm ölüler doğada birikir ve madde döngüsü anında durur.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Su döngüsünde yeryüzündeki suların ATMOSFERE GEÇMESİNİ (yukarı çıkmasını) sağlayan temel olaylar nelerdir?',
        options: [
          { id: 'A', text: 'Buharlaşma ve Canlıların Terlemesi' },
          { id: 'B', text: 'Yoğuşma (Yağmur)' },
          { id: 'C', text: 'Donma' },
          { id: 'D', text: 'Fotosentez' },
          { id: 'E', text: 'Nitrifikasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Güneşin ısısıyla sular buharlaşır; bitki ve hayvanlar da terleyerek atmosfere su buharı gönderir.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Azot döngüsünde "Baklagillerin (Fasulye, Bezelye vb.)" kökünde yaşayan Rhizobium bakterilerinin görevi nedir?',
        options: [
          { id: 'A', text: 'Bitkiyi kurutmak' },
          { id: 'B', text: 'Havadaki Serbest Azotu doğrudan bitkinin köküne bağlamak (Mutualizm)' },
          { id: 'C', text: 'Güneş ışığını emmek' },
          { id: 'D', text: 'Bitkiye oksijen vermek' },
          { id: 'E', text: 'Suyu buharlaştırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu bakteriler baklagil ile ortak yaşar ve bitkiye azot gübresi sağlar.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Karbon döngüsünde yer alan YANMA (Ateş, Fabrika bacası) olayı atmosferdeki Karbondioksit miktarını nasıl etkiler?',
        options: [
          { id: 'A', text: 'Azaltır' },
          { id: 'B', text: 'Değiştirmez' },
          { id: 'C', text: 'Artırır' },
          { id: 'D', text: 'Önce azaltır sonra artırır' },
          { id: 'E', text: 'Karbondioksiti Oksijene çevirir' }
        ],
        correctOptionId: 'C',
        explanation: 'Tüm yanma olayları odun veya kömürdeki karbonu oksijenle birleştirip CO2 olarak havaya verir.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Maddenin doğada canlılar ve cansız çevre arasında dolanmasına rağmen, ENERJİNİN döngü yapmamasının SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Enerjinin toprağa girmesi' },
          { id: 'B', text: 'Enerjinin her basamakta ISI OLARAK ekosistemden ÇIKMASI ve yok olmaması ama kullanılamaz hale gelmesi' },
          { id: 'C', text: 'Güneşin her zaman parlaması' },
          { id: 'D', text: 'Canlıların enerjiyi sevmemesi' },
          { id: 'E', text: 'Ayrıştırıcıların enerjiyi yemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Isı enerjisi tekrar besine dönüştürülemez (fotosentezde ısı değil ışık kullanılır). Bu yüzden enerji tek yönlü akar ve çıkar.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Yıldırım ve Şimşek gibi yüksek enerjili doğa olayları hangi döngünün toprağa bağlanmasında rol oynar?',
        options: [
          { id: 'A', text: 'Su döngüsü' },
          { id: 'B', text: 'Karbon döngüsü' },
          { id: 'C', text: 'Azot döngüsü (Havadaki azotu nitrata dönüştürerek yağmurla toprağa indirir)' },
          { id: 'D', text: 'Enerji döngüsü' },
          { id: 'E', text: 'Oksijen döngüsü' }
        ],
        correctOptionId: 'C',
        explanation: 'Yıldırımlar havadaki N2 molekülünü parçalayıp oksijenle birleştirir ve yağmurla toprağa azot gübresi (nitrat) olarak yağmasını sağlar (Abiyotik fiksasyon).'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Popülasyon Dinamiği ve Süksesyon',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Bir popülasyonun (örn: Ormandaki kurtlar) BÜYÜKLÜĞÜNÜ (birey sayısını) ARTIRAN iki temel faktör nedir?',
        options: [
          { id: 'A', text: 'Ölüm ve Dışa göç' },
          { id: 'B', text: 'Doğum ve İçe göç' },
          { id: 'C', text: 'Hastalıklar' },
          { id: 'D', text: 'Avcılar' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Popülasyona yeni bireylerin katılması doğumlarla veya dışarıdan gelen (içe göç) bireylerle olur.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Bir popülasyonun büyüklüğünü AZALTAN faktörler nelerdir?',
        options: [
          { id: 'A', text: 'Doğum' },
          { id: 'B', text: 'İçe göç' },
          { id: 'C', text: 'Ölüm ve Dışa göç' },
          { id: 'D', text: 'Bol besin' },
          { id: 'E', text: 'Uygun iklim' }
        ],
        correctOptionId: 'C',
        explanation: 'Ölümler ve ortamı terk edenler (dışa göç) popülasyonu küçültür.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Belirli bir alanda popülasyonun ulaşabileceği MAKSİMUM BİREY SAYISINA (Çevrenin besleyebileceği en yüksek sınıra) ne ad verilir?',
        options: [
          { id: 'A', text: 'Taşıma Kapasitesi' },
          { id: 'B', text: 'Ekolojik tolerans' },
          { id: 'C', text: 'Biyokütle' },
          { id: 'D', text: 'Habitat' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir kovanın alabileceği su gibi, bir ormanın besleyebileceği maksimum geyik sayısına o ormanın "Taşıma Kapasitesi" denir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Popülasyon büyüdükçe (birey sayısı arttıkça) besin kıtlığı, alan darlığı, hastalık gibi popülasyonun daha fazla büyümesini ZORLAŞTIRAN dış etkenlere ne denir?',
        options: [
          { id: 'A', text: 'Taşıma kapasitesi' },
          { id: 'B', text: 'Çevre Direnci' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Biyolojik birikim' },
          { id: 'E', text: 'Ototrof' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevre direnci, doğanın aşırı büyümeyi frenleme mekanizmasıdır (fren görevi görür).'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Zamanla bir bölgedeki canlı türlerinin yerini, sırasıyla başka canlı türlerinin almasına (Örn: Çıplak kayadan ormana doğru değişim) ekolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Süksesyon (Sıralı Değişim)' },
          { id: 'B', text: 'Tolerans' },
          { id: 'C', text: 'Karbon döngüsü' },
          { id: 'D', text: 'Mutasyon' },
          { id: 'E', text: 'Ekoton' }
        ],
        correctOptionId: 'A',
        explanation: 'Süksesyon, ekosistemdeki bitki (ve hayvan) topluluklarının zamanla birbirinin yerini alarak değişmesidir.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Süksesyon sürecinde, hiç toprağı olmayan bir yere İLK YERLEŞEN (örn: çıplak kayaya tutunan likenler) canlı grubuna ne denir?',
        options: [
          { id: 'A', text: 'Klimaks' },
          { id: 'B', text: 'Ayrıştırıcı' },
          { id: 'C', text: 'Öncü (Pioner) Tür' },
          { id: 'D', text: 'Tepe Avcı' },
          { id: 'E', text: 'Otçul' }
        ],
        correctOptionId: 'C',
        explanation: 'Pioner (Öncü) türler zorlu şartlara dayanıklı olup toprağı hazırlayan ilk gruptur.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Süksesyon sürecinin sonunda ortamın dengeli, kararlı ve SON AŞAMASINA (Örn: Gelişmiş bir orman) ne ad verilir?',
        options: [
          { id: 'A', text: 'Öncü evre' },
          { id: 'B', text: 'Klimaks (Kararlı Topluluk)' },
          { id: 'C', text: 'Popülasyon' },
          { id: 'D', text: 'Biyosfer' },
          { id: 'E', text: 'Habitat' }
        ],
        correctOptionId: 'B',
        explanation: 'Klimaks, süksesyonun ulaştığı en olgun ve dengeli orman/komünite aşamasıdır.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Bir orman yangınından veya ağaç kesiminden sonra (TOPRAK VARKEN) otların çıkıp yeniden ormana dönüşmesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Birincil Süksesyon' },
          { id: 'B', text: 'İkincil Süksesyon' },
          { id: 'C', text: 'Enerji Akışı' },
          { id: 'D', text: 'Denitrifikasyon' },
          { id: 'E', text: 'Mutasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Toprağın tamamen yok olmadığı (yangın vb.) yıkımlardan sonra görülen hızlı yenilenmeye İkincil Süksesyon denir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Bir popülasyonda (Doğum + İçe Göç) sayısı, (Ölüm + Dışa Göç) sayısından BÜYÜK ise popülasyon için ne söylenir?',
        options: [
          { id: 'A', text: 'Popülasyon küçülmektedir' },
          { id: 'B', text: 'Popülasyon sabittir' },
          { id: 'C', text: 'Popülasyon BÜYÜMEKTEDİR (Artmaktadır)' },
          { id: 'D', text: 'Popülasyon yok olmuştur' },
          { id: 'E', text: 'Taşıma kapasitesine ulaşmıştır' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelenler, gidenlerden fazlaysa matematiksel olarak nüfus artar.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Çevre direnci SIFIR olsaydı (sınırsız besin ve alan olsaydı), canlıların üreme potansiyelleriyle oluşturacakları SÜREKLİ artan büyüme eğrisi harf olarak neye benzerdi?',
        options: [
          { id: 'A', text: 'J Tipi büyüme eğrisi' },
          { id: 'B', text: 'S Tipi büyüme eğrisi' },
          { id: 'C', text: 'Düz çizgi' },
          { id: 'D', text: 'Z Tipi' },
          { id: 'E', text: 'Aşağı inen çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Sınırsız ortamda canlılar logaritmik olarak durmaksızın artar (J harfi gibi dikine çıkar).'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Gerçek doğada, canlıların bir süre hızlı artıp sonra ÇEVRE DİRENCİ ile frenlenerek DENGELENDİĞİ büyüme eğrisi hangi harfe benzer?',
        options: [
          { id: 'A', text: 'J Tipi' },
          { id: 'B', text: 'S Tipi (Lojistik Büyüme)' },
          { id: 'C', text: 'Düz çizgi' },
          { id: 'D', text: 'C Tipi' },
          { id: 'E', text: 'O Tipi' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce hızlı artış, sonra yavaşlama ve taşıma kapasitesinde dengeye ulaşma grafiği "S" harfi çizer.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Belli bir dönemde, bir alandaki popülasyon sayısının aniden taşıma kapasitesini AŞIP sonra hızla ölümlerle çökmesine ne denir?',
        options: [
          { id: 'A', text: 'Popülasyon Patlaması ve Çöküş' },
          { id: 'B', text: 'Klimaks' },
          { id: 'C', text: 'Fotosentez' },
          { id: 'D', text: 'Denge' },
          { id: 'E', text: 'Nitrifikasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Özellikle avcıların yokluğunda, geyikler vb. hızla çoğalır (patlama), tüm besini yer bitirir ve açlıktan topluca ölürler (çöküş).'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Popülasyonun yaş piramidi grafiğinde, TABANDAKİ (genç yaş) birey sayısı üsttekilerden çok daha geniş (büyük) ise bu popülasyon hakkında ne söylenir?',
        options: [
          { id: 'A', text: 'Popülasyon hızla büyüyordur (Genişleyen popülasyon)' },
          { id: 'B', text: 'Popülasyon küçülüyordur' },
          { id: 'C', text: 'Popülasyon dengededir' },
          { id: 'D', text: 'Popülasyon yok olmuştur' },
          { id: 'E', text: 'Doğum yoktur' }
        ],
        correctOptionId: 'A',
        explanation: 'Tabanın geniş olması (üreme çağındaki ve altındaki bireylerin çokluğu) nüfusun gelecekte hızla artacağını gösterir.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Taşıma kapasitesine (K) YAKLAŞILDIKÇA (Birey sayısı arttıkça), popülasyonun büyüme HIZI nasıl değişir?',
        options: [
          { id: 'A', text: 'Daha da artar' },
          { id: 'B', text: 'Yavaşlar (Çünkü çevre direnci artmıştır)' },
          { id: 'C', text: 'Sabit kalır' },
          { id: 'D', text: 'Geriye gider' },
          { id: 'E', text: 'Birden sıfırlanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Yer doldukça (rekabet arttıkça) yeni bireylerin hayatta kalma ve üreme ihtimali düşer, büyüme hızı yavaşlar.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Bir gölde ilkbaharda sıcaklık ve ışığın artmasıyla FİTOPLANKTON (alg) sayısının aniden çoğalması, popülasyon dinamiğinde neye örnektir?',
        options: [
          { id: 'A', text: 'Mevsimsel Dalgalanma' },
          { id: 'B', text: 'Birincil Süksesyon' },
          { id: 'C', text: 'Klimaks' },
          { id: 'D', text: 'Dışa göç' },
          { id: 'E', text: 'Çevre direncinin artması' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğadaki bazı kısa ömürlü canlılar mevsimsel uygun koşullarda (bahar) aniden artıp kışın azalırlar.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Temel Ekosistem İlişkileri',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Ekosistemde GÜNEŞ ENERJİSİNİ KİMYASAL ENERJİYE (besine) dönüştürerek diğer tüm canlıların yaşamasını sağlayan İLK BASAMAK canlıları kimlerdir?',
        options: [
          { id: 'A', text: 'Saprofitler' },
          { id: 'B', text: 'Üreticiler (Fotosentetik Ototroflar)' },
          { id: 'C', text: 'Etçiller' },
          { id: 'D', text: 'Otçullar' },
          { id: 'E', text: 'Bakteriler' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş ışığını yakalayıp besin üretenler fotosentetik üreticilerdir (Bitkiler, algler, siyanobakteriler).'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Aşağıdaki ekolojik birimlerden hangisi DİĞERLERİNİ DE İÇİNE ALAN (en geniş) kavramdır?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Komünite' },
          { id: 'C', text: 'Tür' },
          { id: 'D', text: 'Biyosfer' },
          { id: 'E', text: 'Ekosistem' }
        ],
        correctOptionId: 'D',
        explanation: 'Tür < Popülasyon < Komünite < Ekosistem < Biyosfer. Biyosfer dünyadaki tüm ekosistemleri kapsar.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Bir göldeki KURBAĞA sayısı aniden hastalığa yakalanıp sıfırlanırsa (Ölürse), o gölde kurbağa yiyerek beslenen YILANLARIN sayısı KISA VADEDE nasıl değişir?',
        options: [
          { id: 'A', text: 'Hızla artar' },
          { id: 'B', text: 'Sabit kalır' },
          { id: 'C', text: 'Azalır (Besin bulamadıkları için)' },
          { id: 'D', text: 'Hepsi ot yemeye başlar' },
          { id: 'E', text: 'Kurbağaya dönüşürler' }
        ],
        correctOptionId: 'C',
        explanation: 'Av-Avcı ilişkisinde av (kurbağa) yok olursa, avcı (yılan) aç kalır ve sayısı azalır.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Doğada ATIK (ÇÖP) birikmesini ENGELLEYEN, ölüleri parçalayıp toprağa mineral olarak katan canlı grubunun EN YAYGIN iki üyesi kimdir?',
        options: [
          { id: 'A', text: 'Bakteriler ve Mantarlar (Saprofitler)' },
          { id: 'B', text: 'Aslanlar ve Kaplanlar' },
          { id: 'C', text: 'Otlar ve Ağaçlar' },
          { id: 'D', text: 'Kuşlar ve Böcekler' },
          { id: 'E', text: 'İnsanlar ve Kediler' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğanın temizlik işçileri ve geri dönüşümcüleri (saprofitler) genellikle bazı bakteri ve mantar türleridir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Besin zincirinde %10 Kuralına göre, 1000 Joul (Enerji) üreten bir bitkiyi yiyen ÇEKİRGE, bu enerjinin ne kadarını kendi vücudunda DEPOLAYIP bir üst basamağa (kurbağaya) aktarabilir?',
        options: [
          { id: 'A', text: '1000 Joul (Tamamını)' },
          { id: 'B', text: '900 Joul' },
          { id: 'C', text: '100 Joul (Yüzde 10\'unu)' },
          { id: 'D', text: '0 Joul' },
          { id: 'E', text: '1 Joul' }
        ],
        correctOptionId: 'C',
        explanation: '%10 kuralına göre 1000\'in %10\'u olan 100 Joul aktarılır. Kalan 900 Joul çekirgenin kendi solunumu ve ısısı olarak kaybolur.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Bir komünitede en fazla (sayıca veya kütlece) bulunan ve o ortama ADINI VEREN (Örn: Meşe ormanı, Çam ormanı) bitki türüne ne ad verilir?',
        options: [
          { id: 'A', text: 'İstilacı tür' },
          { id: 'B', text: 'Baskın (Dominant) tür' },
          { id: 'C', text: 'Kilit taşı tür' },
          { id: 'D', text: 'Gösterge tür' },
          { id: 'E', text: 'Parazit tür' }
        ],
        correctOptionId: 'B',
        explanation: 'Komünitede en göze batan, kütlece en ağır basan türe Baskın (Dominant) tür denir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Sayıları çok az olsa bile, ekosistemden çıkarıldıklarında tüm besin ağının ÇÖKMESİNE neden olan (Örn: Yellowstone\'daki Kurtlar, Deniz samurları) kritik türlere ne denir?',
        options: [
          { id: 'A', text: 'Kilit Taşı Tür' },
          { id: 'B', text: 'Baskın tür' },
          { id: 'C', text: 'İstilacı tür' },
          { id: 'D', text: 'Endemik tür' },
          { id: 'E', text: 'Saprofit' }
        ],
        correctOptionId: 'A',
        explanation: 'Kilit taşı, bir kemerin tepesindeki taştır; çekilirse tüm sistem (kemer) yıkılır. Bu canlılar doğanın dengesini tek başına sağlar.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Doğal düşmanlarının olmadığı yeni bir ortama insanlar tarafından getirilen ve orada hızla çoğalarak YERLİ TÜRLERİ YOK EDEN türlere (Örn: Avustralya\'daki tavşanlar) ne ad verilir?',
        options: [
          { id: 'A', text: 'İstilacı (Yabancı) Tür' },
          { id: 'B', text: 'Kilit taşı tür' },
          { id: 'C', text: 'Baskın tür' },
          { id: 'D', text: 'Gösterge tür' },
          { id: 'E', text: 'Endemik tür' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğal avcısı olmayan türler gittikleri yeri "istila" eder ve biyoçeşitliliği bitirirler.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Sadece dünyanın ÇOK BELİRLİ (dar) bir bölgesinde yaşayan ve başka hiçbir yerde bulunmayan (Örn: Van Kedisi, Ankara Tiftik Keçisi) türlere ne denir?',
        options: [
          { id: 'A', text: 'Endemik Tür' },
          { id: 'B', text: 'İstilacı tür' },
          { id: 'C', text: 'Kilit taşı tür' },
          { id: 'D', text: 'Ototrof' },
          { id: 'E', text: 'Parazit' }
        ],
        correctOptionId: 'A',
        explanation: 'Endemik tür, o yöreye özgü (yöresel) ve toleransı düşük olan nadir türdür.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Ekolojik sorunların başında gelen "Küresel Isınma" temel olarak HANGİ GAZIN atmosferde normalden çok fazla birikmesi sonucu oluşur?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Karbondioksit (CO2) ve Metan (CH4)' },
          { id: 'C', text: 'Azot' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Hidrojen' }
        ],
        correctOptionId: 'B',
        explanation: 'Sera gazlarının (başta CO2) atmosferi bir battaniye gibi sarıp ısıyı hapsetmesi Küresel Isınmaya (Sera Etkisine) yol açar.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Sulardaki aşırı kirlenme (tarım gübreleri vb. yüzünden) sonucu göldeki ALGLERİN (yosunların) aşırı çoğalıp su yüzeyini kapatarak gölü boğmasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Ötrofikasyon' },
          { id: 'B', text: 'Süksesyon' },
          { id: 'C', text: 'Denitrifikasyon' },
          { id: 'D', text: 'Kemosentez' },
          { id: 'E', text: 'Erozyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Aşırı besin (azot/fosfor) artışıyla gölün alglerce istila edilip yeşile dönmesine Ötrofikasyon denir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Karbon döngüsü ve Oksijen döngüsü birbirinin tersi gibi çalışan İKİ TEMEL BİYOLOJİK OLAYA dayanır. Bu iki olay hangisidir?',
        options: [
          { id: 'A', text: 'Donma ve Buharlaşma' },
          { id: 'B', text: 'Fotosentez ve Solunum' },
          { id: 'C', text: 'Sindirim ve Boşaltım' },
          { id: 'D', text: 'Nitrifikasyon ve Denitrifikasyon' },
          { id: 'E', text: 'Büyüme ve Ölüm' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez CO2 alır O2 verir; Solunum O2 alır CO2 verir. Bu ikisi döngünün motorudur.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Besin piramidinde AŞAĞIDAN YUKARIYA doğru çıkıldıkça Biyolojik Birikim (Zehir) miktarı neden ARTAR?',
        options: [
          { id: 'A', text: 'Çünkü zehir sadece etçillerde üretilir.' },
          { id: 'B', text: 'Çünkü vücuttan atılamayan zehir, her basamaktaki canlının çok sayıda av yemesiyle bir üst canlının vücudunda "TOPLANARAK" aktarılır.' },
          { id: 'C', text: 'Çünkü üstteki canlılar zehri çok sever.' },
          { id: 'D', text: 'Çünkü güneş zehri artırır.' },
          { id: 'E', text: 'Çünkü sular zehirlidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zehir atılamadığı için her basamakta yüzlerce canlı yendikçe onların zehri tek bir avcının vücudunda konsantre olur.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Canlıların (Örn: Çöl tilkisi) yaşadıkları çevreye UYUM SAĞLAMAK (hayatta kalmak) için geliştirdikleri KALITSAL ÖZELLİKLERE (örn: büyük kulaklar) ne ad verilir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Adaptasyon' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Tolerans' },
          { id: 'E', text: 'Rekabet' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevreye kalıtsal uyuma Adaptasyon denir (Kaktüsün dikenli olması vb).'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Bir gölde sadece yüzeyde (ışık alan yerde) yeşil alglerin yaşayabilmesinin temel sebebi hangi ABİYOTİK (cansız) faktörün eksikliğidir?',
        options: [
          { id: 'A', text: 'Işık (Güneş enerjisi)' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Toprak' },
          { id: 'D', text: 'Rüzgar' },
          { id: 'E', text: 'Hava' }
        ],
        correctOptionId: 'A',
        explanation: 'Yeşil algler fotosentez yapmak için ışığa ihtiyaç duyar. Işık suyun derinlerine inemediği için algler sadece yüzeyde yaşar.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Ekolojik Niş ve Rekabet',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Aynı habitatta yaşayan iki farklı kuş türünün, tamamen AYNI böcekle beslenmeye çalışması durumunda aralarında HANGİ İLİŞKİ başlar?',
        options: [
          { id: 'A', text: 'Mutualizm (Yardımlaşma)' },
          { id: 'B', text: 'Türler arası Rekabet' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Kommensalizm' },
          { id: 'E', text: 'Av - Avcı ilişkisi' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekolojik nişleri (yediği besin, kullandığı alan) aynı veya çok benzer olan türler arasında şiddetli "Rekabet" başlar.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Rus biyolog Gause, aynı besin için rekabet eden iki paramesyum türünü aynı tüpe koyduğunda, bir süre sonra sadece birinin hayatta kaldığını, diğerinin yok olduğunu görmüştür. Bu kurala ne ad verilir?',
        options: [
          { id: 'A', text: 'Birlikte Evrim' },
          { id: 'B', text: 'Rekabetçi Dışlanma Prensibi' },
          { id: 'C', text: 'Madde Döngüsü' },
          { id: 'D', text: 'Taşıma Kapasitesi' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'İki türün ekolojik nişi tamamen aynıysa, aynı habitatta birlikte uzun süre yaşayamazlar; zayıf olan elenir (Rekabetçi dışlanma).'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Rekabetten kaçınmak için aynı ağaçta yaşayan kuş türlerinin farklı dallara (biri tepeye, biri gövdeye) yerleşerek farklı böcekleri yemesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Avlanma' },
          { id: 'B', text: 'Kaynak Paylaşımı (Niş Ayrışması)' },
          { id: 'C', text: 'Asalaklık (Parazitizm)' },
          { id: 'D', text: 'Ekoton' },
          { id: 'E', text: 'Biyolojik birikim' }
        ],
        correctOptionId: 'B',
        explanation: 'Türler rekabetin yıkıcı etkisinden kurtulmak için yaşam alanlarını veya besin türlerini bölüşürler (Kaynak paylaşımı).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Aslanın ceylanı kovalayıp yediği bir etkileşimde "Aslan" ve "Ceylan" ekolojik olarak hangi terimlerle adlandırılır?',
        options: [
          { id: 'A', text: 'Aslan: Parazit, Ceylan: Konak' },
          { id: 'B', text: 'Aslan: Avcı, Ceylan: Av' },
          { id: 'C', text: 'Aslan: Üretici, Ceylan: Tüketici' },
          { id: 'D', text: 'Aslan: Çürükçül, Ceylan: Besin' },
          { id: 'E', text: 'Aslan: Otçul, Ceylan: Etçil' }
        ],
        correctOptionId: 'B',
        explanation: 'Besin zincirinde aktif olarak diğer canlıyı yakalayıp öldüren "Avcı (Predatör)", yenilen canlı "Av"dır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Bir komünitedeki TÜR ÇEŞİTLİLİĞİ (Zenginliği) aşağıdakilerden hangisinden en çok OLUMSUZ etkilenir?',
        options: [
          { id: 'A', text: 'Habitatların İnsanlar Tarafından Bölünmesi ve Yıkımı' },
          { id: 'B', text: 'Güneş ışığı' },
          { id: 'C', text: 'Yağmur yağması' },
          { id: 'D', text: 'Bitkilerin fotosentez yapması' },
          { id: 'E', text: 'Saprofitlerin artması' }
        ],
        correctOptionId: 'A',
        explanation: 'Türlerin yok olmasının 1 numaralı sebebi yaşam alanlarının (ormanların vb.) tarla veya şehirlere dönüştürülüp yok edilmesidir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Ekolojide "Gösterge (İndikatör) Tür" kavramı neyi ifade eder?',
        options: [
          { id: 'A', text: 'Çok hızlı koşan tür' },
          { id: 'B', text: 'Çevresel değişimlere (Örn: kirliliğe) TOLERANSI ÇOK DÜŞÜK olan ve o bölgenin temizliği/kirliliği hakkında İLK BİLGİYİ veren tür' },
          { id: 'C', text: 'En zehirli olan tür' },
          { id: 'D', text: 'Sadece ağaçta yaşayan tür' },
          { id: 'E', text: 'En çok çoğalan tür' }
        ],
        correctOptionId: 'B',
        explanation: 'Toleransı dar olan gösterge türler (Örn: Alabalık, sadece çok temiz ve oksijenli suda yaşar), o suyun kalitesini gösterir.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Kilit taşı bir tür olan "Su Samurları" okyanusta deniz kestanelerini yiyerek dengede tutar. Su samurları aşırı avlanırsa DENİZ KESTANELERİ hızla artarak dev yosun (kelp) ormanlarını tamamen yer bitirir. Bu olay ekolojide hangi kavramla açıklanır?',
        options: [
          { id: 'A', text: 'Madde döngüsü' },
          { id: 'B', text: 'Yukarıdan Aşağıya (Top-Down) Kontrol ve Kilit Taşı Tür etkisi' },
          { id: 'C', text: 'Birincil süksesyon' },
          { id: 'D', text: 'Sera etkisi' },
          { id: 'E', text: 'Ötrofikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'En üstteki avcının yok olmasının, zincirin altındaki her şeyi yıkmasına Top-Down (Yukarıdan aşağı) kaskad etkisi denir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Ormanlık alana sonradan getirilen "Yabancı (İstilacı) Türler", yerli türlere göre NEDEN çok daha hızlı çoğalıp alanı kaplarlar?',
        options: [
          { id: 'A', text: 'Fotosentez yapmadıkları için' },
          { id: 'B', text: 'Yeni ortamda DOĞAL AVCILARI VE HASTALIKLARI OLMADIĞI İÇİN çevre direnciyle karşılaşmazlar' },
          { id: 'C', text: 'Sadece insanları yedikleri için' },
          { id: 'D', text: 'Oksijene ihtiyaç duymadıkları için' },
          { id: 'E', text: 'Daha küçük oldukları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kendi memleketinde onu yiyen bir avcısı vardır, ama yeni ortamda avcısı yoktur, bu yüzden nüfusu patlar (J büyüme eğrisi).'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Aynı türe ait bireylerin (Örn: Sürüdeki geyiklerin) eş bulmak veya besin bulmak için kendi aralarında çatışmasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Tür İçi Rekabet' },
          { id: 'B', text: 'Türler Arası Rekabet' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Parazitlik' },
          { id: 'E', text: 'Karbon döngüsü' }
        ],
        correctOptionId: 'A',
        explanation: 'Aynı popülasyonun kendi bireyleri arasındaki kavgaya "Tür İçi", farklı popülasyonlar (kurt vs çakal) arasına "Türler Arası" rekabet denir.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Bir komünitedeki bitki türlerinin ENLEMLERE göre (Ekvatordan kutuplara) ve YÜKSELTİYE göre (Dağ eteklerinden zirveye) GÖSTERDİĞİ DEĞİŞİM (Orman->Çayır->Kar) birbirine çok benzer. Bunun temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Her ikisinde de basıncın aynı kalması' },
          { id: 'B', text: 'Hem kutuplara gidildikçe hem de dağlarda yükseldikçe SICAKLIĞIN BENZER ŞEKİLDE DÜŞMESİ' },
          { id: 'C', text: 'Hayvanların dağlara tırmanması' },
          { id: 'D', text: 'Güneşin her iki durumda da tam tepede olması' },
          { id: 'E', text: 'Toprak yapısının hiç değişmemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitki örtüsünü (Biyomları) belirleyen en önemli faktör Sıcaklıktır (ve yağıştır). Ekvatordan uzaklaşmakla yükseğe çıkmak sıcaklığı düşürdüğü için bitki örtüsü paralellik gösterir.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Besin zincirinde %10 Kuralının GEÇERLİ OLMADIĞI ve oranların çok daha yüksek çıkarak (katlanarak) aktarıldığı istisnai durum hangisidir?',
        options: [
          { id: 'A', text: 'Karbonun aktarımı' },
          { id: 'B', text: 'Enerjinin aktarımı' },
          { id: 'C', text: 'BİYOLOJİK BİRİKİM (DDT, Ağır metaller gibi zehirlerin aktarımı)' },
          { id: 'D', text: 'Suyun aktarımı' },
          { id: 'E', text: 'Oksijenin aktarımı' }
        ],
        correctOptionId: 'C',
        explanation: 'Enerji onda bire düşerek (azalarak) aktarılırken, zehir (biyolojik birikim) onda bir azalmaz, tam tersine her basamakta konsantre olup ARTARAK aktarılır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Bir bölgenin İKLİM KOŞULLARININ bozulması (Örn: Küresel ısınma ile kuraklaşması), o bölgenin TAŞIMA KAPASİTESİNİ nasıl etkiler?',
        options: [
          { id: 'A', text: 'Etkilemez, taşıma kapasitesi genetik bir sabittir' },
          { id: 'B', text: 'Her zaman artırır' },
          { id: 'C', text: 'Taşıma Kapasitesi DİNAMİKTİR; ortam bozulursa DÜŞER ve mevcut popülasyon taşıma kapasitesini aştığı için ölümler başlar.' },
          { id: 'D', text: 'Canlıların daha çok üremesine yol açar' },
          { id: 'E', text: 'Taşıma kapasitesi her zaman sıfırlanır' }
        ],
        correctOptionId: 'C',
        explanation: 'Taşıma kapasitesi "sabit bir sayı" değildir. Yağmur çok yağarsa taşıma kapasitesi artar, kuraklık olursa besin azalır ve kapasite düşer.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Tarımsal ilaçlama yapan bir çiftçinin, sadece tarlasındaki zararlıları değil, aynı zamanda o bölgedeki ARILARI DA öldürmesi sonucunda (Polinasyon Eksikliği) tarımsal verimin düşmesi ekolojide neyi kanıtlar?',
        options: [
          { id: 'A', text: 'İlaçların etkisiz olduğunu' },
          { id: 'B', text: 'Ekosistemdeki türlerin karmaşık bir AĞ şeklinde BİRBİRİNE BAĞLI OLDUĞUNU (Karşılıklı Bağımlılık)' },
          { id: 'C', text: 'Arıların bitkilere zarar verdiğini' },
          { id: 'D', text: 'Tohumların kalitesiz olduğunu' },
          { id: 'E', text: 'Süksesyonun başladığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğada türler birbirine bir kazak örgüsü gibi bağlıdır. Bir ipi (arıyı) çekerseniz, bitki üreyemez, bitkiyi yiyen kuş aç kalır, tüm sistem çözülür.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Ekolojik tolerans (dayanıklılık) eğrisinde, bir canlının EN İYİ GELİŞTİĞİ, en yüksek birey sayısına ulaştığı sıcaklık değerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Minimum sınır' },
          { id: 'B', text: 'Optimum (En uygun) Değer' },
          { id: 'C', text: 'Maksimum sınır' },
          { id: 'D', text: 'Ölüm noktası' },
          { id: 'E', text: 'Sıfır noktası' }
        ],
        correctOptionId: 'B',
        explanation: 'Çan eğrisi şeklindeki tolerans grafiğinin tam tepe noktası (en çok bireyin yaşadığı yer) Optimum (en ideal) koşullardır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Karbon Ayak İzi, bir kişinin ulaşım, ısınma, beslenme gibi faaliyetleri sonucu DOĞRUDAN veya DOLAYLI olarak doğaya saldığı hangi GAZI temsil eder?',
        options: [
          { id: 'A', text: 'Oksijen (O2)' },
          { id: 'B', text: 'Sera gazlarını (özellikle CO2 eşdeğeri)' },
          { id: 'C', text: 'Azot (N2)' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Su buharı' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon ayak izi, doğrudan tüketilen benzin/doğalgaz ile dolaylı tüketilen (bir kıyafetin üretimi için harcanan) tüm sera gazlarının (CO2) toplamıdır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Madde Döngülerinin Detayları',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Topraktaki AMONYAĞI (NH3) oksitleyerek önce Nitrite, sonra Nitrata çeviren ve bu sayede kendi besinini KEMOSENTEZ ile üreten bakterilerin yaptığı olaya ne denir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Denitrifikasyon' },
          { id: 'C', text: 'Nitrifikasyon' },
          { id: 'D', text: 'Solunum' },
          { id: 'E', text: 'Terleme' }
        ],
        correctOptionId: 'C',
        explanation: 'Nitrifikasyon bakterileri, amonyağı nitrata çevirirken açığa çıkan kimyasal enerjiyle (kemosentez) kendi besinlerini üretirler. (Toprağı zenginleştirirler).'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Nitrifikasyon olayı bitkiler için NEDEN çok faydalıdır (Zorunludur)?',
        options: [
          { id: 'A', text: 'Çünkü bitkiler doğrudan amonyak alamaz, Azotu NİTRAT formunda kökleriyle emmek zorundadırlar.' },
          { id: 'B', text: 'Çünkü toprağı soğutur.' },
          { id: 'C', text: 'Çünkü fotosentezi durdurur.' },
          { id: 'D', text: 'Çünkü bitkilere oksijen verir.' },
          { id: 'E', text: 'Çünkü bitkiler amonyağı çok sever.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bitkiler için en iyi azot gübresi Nitrattır. Amonyak ise hem zehirlidir hem de bitkiler tarafından kolay alınamaz.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Toprakta biriken NİTRAT tuzlarını, oksijensiz ortamda AZOT GAZINA (N2) dönüştürerek havaya uçuran (Toprağı fakirleştiren) olaya ne ad verilir?',
        options: [
          { id: 'A', text: 'Denitrifikasyon' },
          { id: 'B', text: 'Nitrifikasyon' },
          { id: 'C', text: 'Biyolojik birikim' },
          { id: 'D', text: 'Ötrofikasyon' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'A',
        explanation: 'De-nitrifikasyon (Nitrifikasyonun tersi), topraktaki faydalı azotu (nitratı) gaza çevirip atmosfere gönderir.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Bir gölün azot ve fosfor gübreleriyle (Kanalizasyon veya tarım ilacı) aşırı kirlenmesi sonucu, YÜZEYDEKİ ALGLERİN (Fitoplankton) aşırı çoğalarak suyu yeşile boyamasına ne denir?',
        options: [
          { id: 'A', text: 'Süksesyon' },
          { id: 'B', text: 'Ötrofikasyon (Alg Patlaması)' },
          { id: 'C', text: 'Buharlaşma' },
          { id: 'D', text: 'Sera etkisi' },
          { id: 'E', text: 'Erozyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Ötrofikasyon, gölün "aşırı beslenerek" yosunlarla boğulması olayıdır.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Ötrofikasyon geçiren bir gölde, BALIKLARIN ÖLMESİNİN TEMEL (En son) SEBEBİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sudaki tuzluluğun artması' },
          { id: 'B', text: 'Göl yüzeyini kapatan alglerin ışığı kesmesiyle dipteki bitkilerin ölmesi ve bunları parçalayan saprofitlerin SUDAKİ OKSİJENİ TAMAMEN TÜKETMESİ' },
          { id: 'C', text: 'Alglerin balıkları ısırması' },
          { id: 'D', text: 'Gölün tamamen kuruması' },
          { id: 'E', text: 'Sıcaklığın çok artması' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüzey algle kapanır -> Işık dibe inmez -> Dip bitkileri ölür -> Ölüleri çürüten bakteriler hızla çoğalır ve sudaki tüm oksijeni emer -> Balıklar boğulur.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Karbon döngüsünde ATMOSFERDEKİ CO2 MİKTARINI AZALTAN (Emen) EN BÜYÜK İKİ DOĞAL KAYNAK hangisidir?',
        options: [
          { id: 'A', text: 'Fabrikalar ve Arabalar' },
          { id: 'B', text: 'Okyanuslar (Fitoplankton fotosentezi + Çözünme) ve Karasal Ormanlar' },
          { id: 'C', text: 'Yanardağlar ve Depremler' },
          { id: 'D', text: 'Mantarlar ve Bakteriler' },
          { id: 'E', text: 'Otçullar ve Etçiller' }
        ],
        correctOptionId: 'B',
        explanation: 'Dünyanın iki büyük "Karbon Yutağı" (Deposu) Okyanuslar ve Ormanlardır. Fotosentezle milyarlarca ton CO2\'yi bağlarlar.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Asit Yağmurlarına (pH\'ın 5\'in altına düşmesine) asıl sebep olan Fabrika ve Egzoz gazları HANGİLERİDİR?',
        options: [
          { id: 'A', text: 'Sadece Oksijen' },
          { id: 'B', text: 'Kükürt dioksit (SO2) ve Azot oksitler (NOx)' },
          { id: 'C', text: 'Ozon' },
          { id: 'D', text: 'Metan' },
          { id: 'E', text: 'Su buharı' }
        ],
        correctOptionId: 'B',
        explanation: 'SO2 ve NOx gazları bulutlardaki suyla birleşince Sülfürik asit ve Nitrik asit oluşturarak yağmurla yere düşer.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Biyosferdeki FOSFOR döngüsünün, Karbon ve Azot döngüsünden EN BELİRGİN FARKI nedir?',
        options: [
          { id: 'A', text: 'Daha hızlı olması' },
          { id: 'B', text: 'Gaz (Atmosfer) fazının OLMAMASI, sadece karalar (kayalar) ve sular arasında dönmesi' },
          { id: 'C', text: 'Canlıların fosfor kullanmaması' },
          { id: 'D', text: 'Sadece denizde olması' },
          { id: 'E', text: 'Güneş enerjisine ihtiyaç duymaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Fosforun gaz formu yoktur, havaya karışmaz. Kayalardan aşınarak suya karışır, canlılara geçer ve çökeltiyle tekrar kayaya döner (Çok yavaştır).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Tarımsal arazilerde aşırı sulama (vahşi sulama) sonucu, suyun buharlaşıp geriye tuzların kalmasına ve TOPRAĞIN ÇORAKLAŞMASINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Ötrofikasyon' },
          { id: 'B', text: 'Erozyon' },
          { id: 'C', text: 'Tuzlanma (Salinizasyon)' },
          { id: 'D', text: 'Sera etkisi' },
          { id: 'E', text: 'Ozon delinmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeraltındaki tuzu yüzeye çeken aşırı sulama, su uçunca tuzu yüzeyde bırakır ve toprağı öldürür.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Ekolojik Ayak İzi kavramı EN BASİT HALİYLE neyi hesaplamaya yarar?',
        options: [
          { id: 'A', text: 'Bir kişinin ayakkabı numarasını' },
          { id: 'B', text: 'Bir kişinin/toplumun tükettiği kaynakları ÜRETMEK ve yarattığı atığı (CO2) TEMİZLEMEK için GEREKEN DOĞAL ALAN (Hektar) miktarını' },
          { id: 'C', text: 'Sadece ormandaki ağaç sayısını' },
          { id: 'D', text: 'Sadece okyanusların derinliğini' },
          { id: 'E', text: 'Kaç kilometre yürüdüğünü' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekolojik ayak izi = Tüketimimizi karşılayacak "Verimli Toprak/Su" alanının matematiksel ölçüsüdür.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Atmosferdeki Ozon (O3) tabakasının TEMEL GÖREVİ (Dünyaya sağladığı fayda) nedir?',
        options: [
          { id: 'A', text: 'Dünyayı ısıtmak' },
          { id: 'B', text: 'Bitkilere oksijen sağlamak' },
          { id: 'C', text: 'Güneşten gelen zararlı MORÖTESİ (Ultraviyole - UV) ışınlarını süzerek (tutarak) cilt kanseri ve mutasyonları engellemek' },
          { id: 'D', text: 'Yağmur yağdırmak' },
          { id: 'E', text: 'Geceyi aydınlatmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Ozon tabakası dünyanın güneş gözlüğüdür, UV radyasyonunu filtreler.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Atmosferin üst katmanlarındaki Ozon tabakasının İNCELMESİNE (Delinmesine) neden olan ve spreylerde/buzdolaplarında eskiden sıkça kullanılan GAZIN ADI nedir?',
        options: [
          { id: 'A', text: 'Karbondioksit (CO2)' },
          { id: 'B', text: 'Kloroflorokarbon (CFC) gazları' },
          { id: 'C', text: 'Metan' },
          { id: 'D', text: 'Azot' },
          { id: 'E', text: 'Oksijen' }
        ],
        correctOptionId: 'B',
        explanation: 'CFC gazları atmosferde parçalanmaz, stratosfere çıkıp ozon moleküllerini parçalar. (Küresel ısınma ile Karıştırılmamalıdır!).'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Ormanlık bir alanın YOL veya BARAJ yapımıyla ortadan ikiye ayrılmasına "Habitat Bölünmesi" denir. Bu durum o ormandaki hayvanları (Örn: Ayı, Kurt) NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Çok sevinirler, yeni yolları kullanırlar' },
          { id: 'B', text: 'Besin bulmaları, eş bulmaları (Gen akışı) ve göç yolları KESİLDİĞİ için popülasyon hızla çöker' },
          { id: 'C', text: 'Hiçbir etkisi olmaz' },
          { id: 'D', text: 'Sadece renkleri değişir' },
          { id: 'E', text: 'Fotosentezleri artar' }
        ],
        correctOptionId: 'B',
        explanation: 'Geniş alana ihtiyaç duyan türler, bölünmüş (fragmente olmuş) küçük habitat adalarında hapiste gibi kalır, akraba evliliği artar ve tür tükenir.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Maddenin doğada atık olarak kalmayıp geri dönüşmesini (Döngüsel Ekonomi mantığını) BİYOLOJİK OLARAK sağlayan doğanın geri dönüşüm işçileri kimlerdir?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Otçullar' },
          { id: 'C', text: 'Saprofitler (Ayrıştırıcı Bakteri ve Mantarlar)' },
          { id: 'D', text: 'Etçiller' },
          { id: 'E', text: 'Kuşlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Saprofitler çöpleri, ölüleri, dışkıları inorganik hammaddeye çevirerek "Sıfır Atık" sistemini işletirler.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Canlıların yapısındaki ENERJİ (Besin) neden Döngü yapamaz (Güneşe geri dönemez)?',
        options: [
          { id: 'A', text: 'Çünkü çok ağırdır' },
          { id: 'B', text: 'Çünkü yaşamsal faaliyetlerde kullanılarak ISI ENERJİSİNE dönüşür ve ısı doğada tekrar besine bağlanamaz, uzaya yayılır' },
          { id: 'C', text: 'Çünkü saprofitler izin vermez' },
          { id: 'D', text: 'Çünkü gece karanlıktır' },
          { id: 'E', text: 'Çünkü enerji sudur' }
        ],
        correctOptionId: 'B',
        explanation: 'Madde (Örn: Karbon) form değiştirse de elementtir, kaybolmaz. Ama enerji, son form olan ISIYA dönüşünce, fotosentezde kullanılamaz hale gelir.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Popülasyon Dinamiği ve Analizi',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bir bakterinin ideal (sınırsız) besi yerinde her 20 dakikada bir bölünerek 1, 2, 4, 8, 16... şeklinde KONTROLSÜZCE ve DURMADAN artmasına ne büyümesi denir?',
        options: [
          { id: 'A', text: 'Lojistik (S tipi) büyüme' },
          { id: 'B', text: 'Üstel (J tipi - Logaritmik) büyüme' },
          { id: 'C', text: 'Negatif büyüme' },
          { id: 'D', text: 'Sıfır büyüme' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Hiçbir çevre direnci (engel) yokken canlılar geometrik diziyle J harfi çizecek şekilde (Üstel/Logaritmik) büyürler.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Lojistik (S Tipi) büyüme grafiğinde popülasyon BÜYÜME HIZININ EN YÜKSEK olduğu evre hangisidir?',
        options: [
          { id: 'A', text: 'Kuruluş (Başlangıç) Evresi' },
          { id: 'B', text: 'Logaritmik (Hızlı) Artış Evresi' },
          { id: 'C', text: 'Negatif (Yavaşlayan) Artış Evresi' },
          { id: 'D', text: 'Denge (Taşıma Kapasitesi) Evresi' },
          { id: 'E', text: 'Ölüm Evresi' }
        ],
        correctOptionId: 'B',
        explanation: 'S eğrisinin en dik (en dik yokuş) olduğu ortadaki evre, büyümenin maksimum olduğu (henüz çevre direncinin çok baskın olmadığı) logaritmik evredir.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'S Tipi (Lojistik) büyüme grafiğinin SON EVRESİ olan "Denge Evresi"nde popülasyon için HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Doğum ve İçe göç DURMUŞTUR' },
          { id: 'B', text: 'Birey sayısı sıfıra inmiştir' },
          { id: 'C', text: 'Birey Sayısı Maksimuma (Taşıma kapasitesine) ulaşmıştır, ancak BÜYÜME HIZI SIFIRDIR (Doğum = Ölüm)' },
          { id: 'D', text: 'Sınırsız besin vardır' },
          { id: 'E', text: 'Avcılar yok olmuştur' }
        ],
        correctOptionId: 'C',
        explanation: 'Denge (K) noktasında birey sayısı tepe noktadadır (Çok kalabalıktır) ama artık yeni birey eklenemez, bir kişi doğarsa bir kişi ölür (Artış Hızı=0).'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Bir ormanda vaşak (avcı) ve tavşan (av) popülasyonları yıllara göre grafiklenmiştir. Grafikte tavşan sayısı artınca, vaşak sayısı da bir süre sonra artmakta; vaşak artınca tavşan azalmakta, tavşan azalınca vaşak da azalmaktadır. Bu ZİKZAKLI grafiğe ne denir?',
        options: [
          { id: 'A', text: 'Süksesyon' },
          { id: 'B', text: 'Av - Avcı Dalgalanması' },
          { id: 'C', text: 'Mutualizm' },
          { id: 'D', text: 'Parazitizm' },
          { id: 'E', text: 'Birincil büyüme' }
        ],
        correctOptionId: 'B',
        explanation: 'Av ve Avcı sayıları birbirine bağlıdır ve peş peşe dalgalanmalar (salınımlar) gösterir.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Tip 1 (İnsan, Memeliler) Hayatta Kalma Eğrisinin EN BELİRGİN özelliği nedir?',
        options: [
          { id: 'A', text: 'Yavruların çoğu doğar doğmaz ölür (Balıklar gibi)' },
          { id: 'B', text: 'Her yaşta ölüm riski aynıdır (Kuşlar gibi)' },
          { id: 'C', text: 'Doğan yavrulara iyi bakılır, yavru ölümü ÇOK DÜŞÜKTÜR, bireylerin çoğu yaşlılığa kadar yaşar' },
          { id: 'D', text: 'Hiç kimse ölmez' },
          { id: 'E', text: 'Sadece 1 yıl yaşarlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Memeliler az yavru yapar, yavrularına sütle/korumayla bakar, bu yüzden genç yaşta ölüm azdır. Ölümler yaşlılıkta (eğrinin sonunda) aniden artar.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Tip 3 (Balık, Kurbağa, Böcek) Hayatta Kalma Eğrisinde NEDEN doğan yavruların %99\'u çok genç yaşta ölür (Eğri başlar başlamaz dibe çakılır)?',
        options: [
          { id: 'A', text: 'Yavru bakımı (koruma) HİÇ OLMADIĞI için milyonlarca yumurta suya bırakılır ve çoğu diğer canlılara yem olur' },
          { id: 'B', text: 'Çok iyi korundukları için' },
          { id: 'C', text: 'Hastalıktan' },
          { id: 'D', text: 'Yaşlılıktan' },
          { id: 'E', text: 'Sadece yazın yaşadıkları için' }
        ],
        correctOptionId: 'A',
        explanation: 'r-stratejistleri (Böcek/Balık) bir kerede binlerce yavru üretir ama arkasına bakmaz. Çoğu ölür, sadece binde biri erginliğe ulaşır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Taşıma Kapasitesi ile Çevre Direnci arasındaki DOĞRUDAN orantı (ilişki) nasıldır?',
        options: [
          { id: 'A', text: 'Hiç ilişkileri yoktur' },
          { id: 'B', text: 'Popülasyon TAŞIMA KAPASİTESİNE yaklaştıkça, ÇEVRE DİRENCİ (besin rekabeti vb.) de ARTAR' },
          { id: 'C', text: 'Çevre direnci artarsa taşıma kapasitesi sonsuz olur' },
          { id: 'D', text: 'İkisi de hep sıfırdır' },
          { id: 'E', text: 'Kapasite arttıkça direnç düşer' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalabalıklaştıkça hastalık yayılması, yer kavgası, açlık (Çevre direnci) artar. Bu direnç büyümeyi durdurur.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Bir ağaçta, biri üst dallardaki yaprakları, diğeri alt dallardaki yaprakları yiyen iki farklı böcek türü YAŞAMAYI BAŞARMIŞTIR. Bu durum neyin göstergesidir?',
        options: [
          { id: 'A', text: 'Rekabetçi dışlanmanın' },
          { id: 'B', text: 'Ekolojik Niş Ayrışmasının (Kaynak Paylaşımının)' },
          { id: 'C', text: 'Mutualizmin' },
          { id: 'D', text: 'Süksesyonun' },
          { id: 'E', text: 'Amensalizmin' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağacı bölüşerek rekabetten kurtulmuşlar, kendi özel yaşam alanlarını (Nişlerini) daraltıp beraber yaşamışlardır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Türkiye nüfus piramidinin TABANI (0-14 yaş grubu) önceki yıllara göre daha DARALMAYA (küçülmeye) başlamışsa, nüfusun geleceği için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Nüfus hızla patlayacaktır' },
          { id: 'B', text: 'Nüfus artış hızı YAVAŞLAMAKTA ve toplum giderek YAŞLANMAKTADIR' },
          { id: 'C', text: 'Herkes ölecektir' },
          { id: 'D', text: 'Ölüm oranı sıfırdır' },
          { id: 'E', text: 'Dışa göç çok fazladır' }
        ],
        correctOptionId: 'B',
        explanation: 'Daralan taban, doğum oranlarının (doğurganlığın) düştüğünü ve gelecekte genç nüfusun azalacağını (yaşlı nüfusun artacağını) gösterir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Ekosistemde gerçekleşen BİRİNCİL SÜKSESYON (Sıfırdan başlama) süreci NEDEN İkincil Süksesyondan (Yangın sonrası) YÜZLERCE YIL DAHA YAVAŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü tohumlar tembeldir' },
          { id: 'B', text: 'Çünkü Birincil Süksesyonda ortamda HİÇ TOPRAK YOKTUR, önce kayaların ufalanıp toprağın OLUŞMASI GEREKİR' },
          { id: 'C', text: 'Çünkü birincil süksesyon sadece kışın olur' },
          { id: 'D', text: 'Çünkü yağmur yağmaz' },
          { id: 'E', text: 'Çünkü avcılar bitkileri yer' }
        ],
        correctOptionId: 'B',
        explanation: 'Toprağın oluşması biyolojik ve fiziksel olarak binlerce yıl sürebilir. İkincilde ise hazır toprak vardır, birkaç yılda otlar çıkar.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir popülasyonda ÇEVRE DİRENCİNİ OLUŞTURAN (Nüfusu baskılayan) faktörlerden biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Besin kıtlığı' },
          { id: 'B', text: 'Salgın hastalıklar' },
          { id: 'C', text: 'Avcı sayısındaki artış' },
          { id: 'D', text: 'Bol Yağış ve İdeal Sıcaklık (Bahar mevsimi)' },
          { id: 'E', text: 'Yaşam alanının daralması' }
        ],
        correctOptionId: 'D',
        explanation: 'Bahar mevsimi (ideal koşullar) direnç değil, tam tersine büyümeyi TEŞVİK EDEN faktörlerdir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Aynı türe ait canlıların, ortamın kaynaklarına göre (Örn: Çöldeki çalılıkların, suyu eşit paylaşmak için birbirinden eşit uzaklıkta büyümesi) GÖSTERDİĞİ DAĞILIM MODELİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Rastgele Dağılım' },
          { id: 'B', text: 'Kümeli Dağılım' },
          { id: 'C', text: 'Düzenli (Tekdüze) Dağılım' },
          { id: 'D', text: 'Karışık Dağılım' },
          { id: 'E', text: 'Sıfır Dağılım' }
        ],
        correctOptionId: 'C',
        explanation: 'Sınırlı kaynak (su) için şiddetli tür içi rekabet (veya kimyasal salgılar), bireylerin aralarına mesafe koyarak Düzenli (eşit aralıklı) dağılmasını sağlar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Doğada EN SIK GÖRÜLEN (Örn: Su başında toplanan filler, ormanda belli bölgelerde çıkan mantarlar, denizdeki hamsi sürüleri) Popülasyon Dağılım Modeli hangisidir?',
        options: [
          { id: 'A', text: 'Düzenli Dağılım' },
          { id: 'B', text: 'Kümeli Dağılım' },
          { id: 'C', text: 'Rastgele Dağılım' },
          { id: 'D', text: 'Tek Çizgi Dağılımı' },
          { id: 'E', text: 'Düzgün Dağılım' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayvanlar sürüler halinde (korunmak için), bitkiler ise toprağın en verimli/sulu olduğu yerlerde "Kümeler" halinde bulunurlar.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Tohumları rüzgarla uçuşarak düşen KARAHİNDİBA (Radika) bitkisinin tarladaki dağılımı, aralarında rekabet olmadan, tohumun düştüğü yerde çıkması şeklindedir. Bu hangi dağılım modelidir?',
        options: [
          { id: 'A', text: 'Kümeli' },
          { id: 'B', text: 'Düzenli' },
          { id: 'C', text: 'Rastgele Dağılım' },
          { id: 'D', text: 'Süksesyon' },
          { id: 'E', text: 'Ekoton' }
        ],
        correctOptionId: 'C',
        explanation: 'Bireyler arasında belirgin bir etkileşim veya rekabet yoksa, tamamen tesadüfi (Rastgele) dağılırlar (Doğada en nadir görülen tiptir).'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Doğal ortamına yabancı olan "İstilacı Türlerin" (Örn: Karadeniz\'e gemi suyuyla gelen Taraklı Medüz) en tehlikeli ekolojik özelliği nedir?',
        options: [
          { id: 'A', text: 'Fotosentez yapmaları' },
          { id: 'B', text: 'Doğal avcıları olmadığı için KONTROLSÜZCE ÇOĞALIP (Taşıma kapasitesini aşıp) o bölgedeki yerli TÜR ÇEŞİTLİLİĞİNİ YOK ETMELERİ' },
          { id: 'C', text: 'Suyu ısıtmaları' },
          { id: 'D', text: 'Hemen ölmeleri' },
          { id: 'E', text: 'İnsanlara zehir saçmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'İstilacı türlerin ekolojik dengedeki rolü "Biyolojik çeşitliliği" (Yerel türleri) hızla yok ederek komüniteyi çökertmeleridir.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Ekosistem Problemleri ve Çözümler',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi doğrudan KÜRESEL ISINMAYI (Sera Etkisini) artıran bir insan faaliyetidir?',
        options: [
          { id: 'A', text: 'Ağaç dikmek' },
          { id: 'B', text: 'Kömür ve Petrol gibi Fosil yakıtları aşırı kullanmak' },
          { id: 'C', text: 'Güneş enerjisi kullanmak' },
          { id: 'D', text: 'Rüzgar türbini kurmak' },
          { id: 'E', text: 'Bisiklete binmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Fosil yakıtlar yandığında çok büyük miktarda CO2 (sera gazı) açığa çıkararak ısıyı hapseder.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Ozon tabakasının incelmesini (delinmesini) önlemek için aşağıdakilerden hangisi yapılmalıdır?',
        options: [
          { id: 'A', text: 'Daha çok sprey sıkılmalıdır' },
          { id: 'B', text: 'CFC (Kloroflorokarbon) içeren gazların kullanımı yasaklanmalıdır' },
          { id: 'C', text: 'Daha çok kömür yakılmalıdır' },
          { id: 'D', text: 'Ormanlar kesilmelidir' },
          { id: 'E', text: 'Güneşlenilmelidir' }
        ],
        correctOptionId: 'B',
        explanation: 'Ozonun tek düşmanı klor ve flor içeren sentetik (CFC) gazlardır.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Bir gölde ötrofikasyonu (alg patlamasını) ENGELLEMEK için alınabilecek en iyi önlem hangisidir?',
        options: [
          { id: 'A', text: 'Göle daha çok balık atmak' },
          { id: 'B', text: 'Tarımsal gübreleri ve evsel atık suları (kanalizasyonu) göle ulaşmadan arıtmak' },
          { id: 'C', text: 'Gölün suyunu ısıtmak' },
          { id: 'D', text: 'Göle asit dökmek' },
          { id: 'E', text: 'Gölü toprakla doldurmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Ötrofikasyonun sebebi "aşırı besin (azot/fosfor)" gelmesidir. Atık sular arıtılırsa göl yeşile dönmez.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Bir tarım zararlısı (Örn: Çekirge) ile mücadele etmek için ZEHİRLİ İLAÇ (Pestisit) kullanmak yerine, o zararlıyı yiyen KUŞLARIN ortamda çoğalmasını sağlamak hangi yöntemdir?',
        options: [
          { id: 'A', text: 'Kimyasal Mücadele' },
          { id: 'B', text: 'Biyolojik Mücadele' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Ötrofikasyon' },
          { id: 'E', text: 'Yapay seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğadaki av-avcı dengesini (başka bir canlıyı) kullanarak zararlıyı yok etmeye "Biyolojik Mücadele" denir, zehirsiz ve doğa dostudur.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Biyolojik çeşitliliği KORUMAK için aşağıdakilerden hangisi YANLIŞ bir uygulamadır?',
        options: [
          { id: 'A', text: 'Milli parklar ve sit alanları oluşturmak' },
          { id: 'B', text: 'Ağaçlandırma yapmak' },
          { id: 'C', text: 'Yabancı (İstilacı) türleri doğal ormanlara bilerek salmak' },
          { id: 'D', text: 'Endemik türleri koruma altına almak' },
          { id: 'E', text: 'Geri dönüşümü teşvik etmek' }
        ],
        correctOptionId: 'C',
        explanation: 'İstilacı türler (yabani otlar, yabancı böcekler) biyoçeşitliliğin en büyük düşmanlarındandır.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Erozyonu (Verimli üst toprağın rüzgar ve suyla taşınmasını) önlemek için EN ETKİLİ yöntem hangisidir?',
        options: [
          { id: 'A', text: 'Tarlaları yokuş aşağı (eğim yönünde) sürmek' },
          { id: 'B', text: 'Ormanları kesmek' },
          { id: 'C', text: 'Bitki örtüsünü korumak, ağaçlandırma ve eğime DİK teraslama (basamak) yapmak' },
          { id: 'D', text: 'Meraları aşırı otlatmak' },
          { id: 'E', text: 'Toprağı betonla kaplamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkilerin kökleri toprağı tutar, yaprakları ise yağmurun hızını keserek toprağın akmasını engeller.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Sürdürülebilir Kalkınma (Gelecek nesillere yaşanabilir bir dünya bırakma) hedefine UYGUN BİR DAVRANIŞTIR?',
        options: [
          { id: 'A', text: 'Tüm ormanları tarla yapmak' },
          { id: 'B', text: 'Plastik poşetleri denize atmak' },
          { id: 'C', text: 'Yenilenebilir (Güneş, Rüzgar) enerji kaynaklarını yaygınlaştırmak' },
          { id: 'D', text: 'Fabrika atıklarını arıtmadan nehre salmak' },
          { id: 'E', text: 'Avlanma yasaklarına uymamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğayı tüketmeyen ve kendi kendini yenileyen enerjiler "Sürdürülebilirdir".'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Suları kirleten "Ağır Metallerin" (Cıva, Kurşun, Kadmiyum) besin zincirindeki en tehlikeli özelliği nedir?',
        options: [
          { id: 'A', text: 'Suya renk vermeleri' },
          { id: 'B', text: 'Canlıların vücudundan dışkı veya idrarla ATILAMAYIP, biyolojik birikimle EN ÜST AVCIYA kadar birikerek gelmesi' },
          { id: 'C', text: 'Balıklara faydalı olması' },
          { id: 'D', text: 'Hemen buharlaşması' },
          { id: 'E', text: 'Bitkileri uzatması' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağır metaller yağ dokuda veya sinir sisteminde depolanır, atılamaz. İnsanlar büyük balık yediğinde en yüksek dozu alırlar.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Biyolojik mücadelede kullanılan "Puğ (Avcı böcek)", tarımdaki "Yaprak Biti" sayısını azaltır. Bu durum neyin örneğidir?',
        options: [
          { id: 'A', text: 'Zehirli ilaç kullanımının' },
          { id: 'B', text: 'Süksesyonun' },
          { id: 'C', text: 'Kilit taşı türün' },
          { id: 'D', text: 'Av-Avcı ilişkisinin tarımda Biyolojik Kontrol olarak kullanılmasının' },
          { id: 'E', text: 'Rekabetin' }
        ],
        correctOptionId: 'D',
        explanation: 'İnsan eliyle predatör (avcı) sayısını artırarak zararlıyı yemesini sağlamak biyolojik kontroldür.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Tarımsal ilaçların (DDT vb.) neden olduğu BİYOLOJİK BİRİKİM en çok hangi canlıyı ÖLDÜRÜR veya KISIRLAŞTIRIR?',
        options: [
          { id: 'A', text: 'Otları' },
          { id: 'B', text: 'Çekirgeleri' },
          { id: 'C', text: 'Kurbağaları' },
          { id: 'D', text: 'Piramidin en tepesindeki (Örn: Kartal, Şahin, İnsan) yırtıcıları' },
          { id: 'E', text: 'Saprofitleri' }
        ],
        correctOptionId: 'D',
        explanation: 'Kartallar gibi tepe avcıları binlerce zehirli balık veya yılan yediği için tüm zehir onda birikir; yumurta kabukları incelir ve türleri tehlikeye girer.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Büyük şehirlerin üzerinde biriken ve solunumu zorlaştıran KİRLİ HAVA TABAKASI (Smog) kışın NEDEN daha yoğun olur?',
        options: [
          { id: 'A', text: 'Sadece soğuk olduğu için' },
          { id: 'B', text: 'Kışın ağaçlar yaprak döktüğü (fotosentez azaldığı) ve evlerde ısınma için DAHA ÇOK KÖMÜR/YAKIT yakıldığı için' },
          { id: 'C', text: 'Kar yağdığı için' },
          { id: 'D', text: 'Kuşlar göç ettiği için' },
          { id: 'E', text: 'Saprofitler uyuduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Isınma kaynaklı karbon salınımı kışın tavan yapar, sıcaklık terselmesiyle de duman şehrin üzerine çöker.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Tatlı su kaynaklarının (Göl, Nehir, Yeraltı suları) tükenmesinde (Susuzluk tehlikesi) AŞAĞIDAKİLERDEN HANGİSİNİN PAYI EN BÜYÜKTÜR?',
        options: [
          { id: 'A', text: 'Evde diş fırçalarken suyu açık bırakmak' },
          { id: 'B', text: 'Kuşların su içmesi' },
          { id: 'C', text: 'Sanayi üretimi ve özellikle Tarımsal (Vahşi) Sulama' },
          { id: 'D', text: 'Suların denize akması' },
          { id: 'E', text: 'Buharlaşmanın artması' }
        ],
        correctOptionId: 'C',
        explanation: 'Bireysel su israfı önemli olsa da, tatlı suyun yaklaşık %70\'i tarımsal sulamada (çoğunlukla da yanlış damlamasız yöntemlerle) harcanır.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir gölde "Ötrofikasyon" başladığının İLK İŞARETİ nedir?',
        options: [
          { id: 'A', text: 'Balıkların aniden artması' },
          { id: 'B', text: 'Suda yeşil renkli alglerin (yosunların) aşırı çoğalıp yüzeyi kaplamaya başlaması' },
          { id: 'C', text: 'Gölün tamamen kuruması' },
          { id: 'D', text: 'Suların donması' },
          { id: 'E', text: 'Kuşların göç etmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Azot/Fosfor kirliliği önce gübre etkisi yapar ve yüzeydeki algleri patlatarak suyu yeşile (veya kızıla) boyar.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Ozon Tabakası ile Küresel Isınma (Sera etkisi) arasındaki FARKlardan biridir?',
        options: [
          { id: 'A', text: 'İkisi de aynı şeydir.' },
          { id: 'B', text: 'Sera etkisi UV ışınları süzer, Ozon dünyayı ısıtır.' },
          { id: 'C', text: 'Sera etkisi (CO2 artışı) dünyanın ortalama sıcaklığını ARTIRIR, Ozon delinmesi (CFC) ise tehlikeli UV ışınlarının içeri GİRMESİNE neden olur.' },
          { id: 'D', text: 'Sera etkisini ağaçlar yapar.' },
          { id: 'E', text: 'Ozon tabakası yerde bulunur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sera etkisi dünyanın "ısıyı atamaması (battaniye)", Ozon delinmesi ise dünyanın "UV ışınlarına karşı kalkanının kırılmasıdır".'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Karbon Ayak İzini AZALTMAK (Doğaya katkı sağlamak) isteyen bir birey HANGİSİNİ YAPMALIDIR?',
        options: [
          { id: 'A', text: 'Her yere kendi özel aracıyla gitmeli' },
          { id: 'B', text: 'Toplu taşıma kullanmalı, gereksiz tüketimden kaçınmalı ve enerji tasarrufu yapmalı' },
          { id: 'C', text: 'Daha çok et tüketmeli' },
          { id: 'D', text: 'Sürekli yeni kıyafetler alıp eskileri çöpe atmalı' },
          { id: 'E', text: 'Kömür sobası kullanmalı' }
        ],
        correctOptionId: 'B',
        explanation: 'Toplu taşıma, yürüyüş, bitkisel ağırlıklı beslenme ve geri dönüşüm bireysel karbon ayak izini en çok düşüren şeylerdir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Madde Döngüsü Yorumlama',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'medium',
        questionText: 'Bir ormanda saprofit (ayrıştırıcı) canlıların tamamı yok olsaydı, AŞAĞIDAKİLERDEN HANGİSİ İLK OLARAK gerçekleşirdi?',
        options: [
          { id: 'A', text: 'Topraktaki inorganik madde (mineral) miktarının hızla azalması ve organik ölü atıkların birikmesi' },
          { id: 'B', text: 'Fotosentez hızının aniden artması' },
          { id: 'C', text: 'Üretici sayısının hızla çoğalması' },
          { id: 'D', text: 'Sadece etçillerin ölmesi' },
          { id: 'E', text: 'Azot fiksasyonunun artması' }
        ],
        correctOptionId: 'A',
        explanation: 'Saprofitler organik atığı inorganiğe (minerale) çevirir. Onlar olmazsa ölüler çürümez (birikir) ve toprak fakirleşir.'
      },
      {
        id: 'q-10-2', difficulty: 'medium',
        questionText: 'Azot döngüsünde görevli; I. Nitrifikasyon bakterileri, II. Denitrifikasyon bakterileri, III. Azot bağlayıcı bakteriler (Rhizobium). Hangileri topraktaki NİTRAT (Kullanılabilir Azot) miktarını ARTIRARAK toprağı zenginleştirir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I ve III' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'C',
        explanation: 'Nitrifikasyon ve Azot fiksasyonu toprağa azot katar (artırır). Denitrifikasyon ise gaz yapıp havaya uçurduğu için toprağı fakirleştirir (azaltır).'
      },
      {
        id: 'q-10-3', difficulty: 'medium',
        questionText: 'Karbon döngüsündeki I. Solunum, II. Fotosentez, III. Yanma olaylarından hangileri atmosferdeki CO2 miktarını AZALTICI yönde etki yapar?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I ve II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez, atmosferden CO2 emer (azaltır). Solunum ve Yanma ise atmosfere CO2 verir (artırır).'
      },
      {
        id: 'q-10-4', difficulty: 'medium',
        questionText: 'Bir göl ekosistemine karışan tarımsal NİTRAT ve FOSFAT gübreleri, aşağıdaki olaylardan hangisini tetikleyerek su altındaki yaşamı BOZAR?',
        options: [
          { id: 'A', text: 'Biyolojik birikimi doğrudan engeller' },
          { id: 'B', text: 'Ötrofikasyona (alg patlamasına) neden olarak suyun dibine ışık ve oksijen gitmesini engeller' },
          { id: 'C', text: 'Süksesyonu başlatarak gölü okyanusa çevirir' },
          { id: 'D', text: 'Balıkların akciğer solunumu yapmasını sağlar' },
          { id: 'E', text: 'Saprofitleri tamamen yok eder' }
        ],
        correctOptionId: 'B',
        explanation: 'Fazla gübre "Ötrofikasyon" demektir. Suyun yüzeyi yosunla kapanır, dip kararır ve oksijensiz kalır.'
      },
      {
        id: 'q-10-5', difficulty: 'medium',
        questionText: 'Azot döngüsünde, bir hayvanın ölüsü ile başlayan süreçte NİTRAT tuzu oluşana kadar gerçekleşen olayların DOĞRU SIRALAMASI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Nitrifikasyon -> Saprofit Faaliyet -> Amonyak oluşumu' },
          { id: 'B', text: 'Saprofit Faaliyet -> Amonyak (NH3) oluşumu -> Nitrifikasyon (Oksitlenme)' },
          { id: 'C', text: 'Denitrifikasyon -> Saprofit Faaliyet -> Nitrifikasyon' },
          { id: 'D', text: 'Fotosentez -> Amonyak -> Nitrifikasyon' },
          { id: 'E', text: 'Amonyak -> Denitrifikasyon -> Saprofit' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce saprofitler ölüyü çürütüp Amonyak (NH3) çıkarır. Sonra Nitrifikasyon bakterileri (Kemosentetikler) amonyağı Nitrata dönüştürür.'
      },
      {
        id: 'q-10-6', difficulty: 'medium',
        questionText: 'Küresel Isınma sonucunda buzulların erimesi ile Okyanuslardaki su seviyesi yükselmektedir. Aynı zamanda okyanusların SICAKLIĞININ artması, Karbon Döngüsünü NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Okyanuslar ısındıkça içlerinde DAHA AZ CO2 çözünür (gazlar sıcakta uçar), bu da atmosferdeki CO2\'yi daha da ARTIRIR.' },
          { id: 'B', text: 'Isınan su daha çok CO2 tutar, ısınma durur.' },
          { id: 'C', text: 'Balıklar daha çok solunum yapıp O2 üretir.' },
          { id: 'D', text: 'Okyanuslar kuruyup karbona dönüşür.' },
          { id: 'E', text: 'Karbon döngüsü tamamen durur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Gazların çözünürlüğü soğukta yüksektir (Soğuk kola asitlidir). Okyanus ısındıkça içindeki Karbondioksiti havaya kusar (Pozitif geribildirim, felaketi hızlandırır).'
      },
      {
        id: 'q-10-7', difficulty: 'medium',
        questionText: 'Denitrifikasyon bakterilerinin faaliyeti çok hızlanmış bir toprakta, bitkilerin GELİŞİMİ nasıl olur?',
        options: [
          { id: 'A', text: 'Çok hızlanır, dev bitkiler oluşur.' },
          { id: 'B', text: 'Yavaşlar, çünkü bitkilerin ihtiyaç duyduğu Nitrat (Azot) gaz halinde havaya uçar ve TOPRAK AZOTÇA FAKİRLEŞİR.' },
          { id: 'C', text: 'Değişmez.' },
          { id: 'D', text: 'Bitkiler etçil olmaya başlar.' },
          { id: 'E', text: 'Kökleri daha derine iner ve karbon arar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Denitrifikasyon azotu havaya kaçırır. Azotsuz toprakta bitki protein ve DNA üretemez, gelişimi durur.'
      },
      {
        id: 'q-10-8', difficulty: 'medium',
        questionText: 'Baklagillerin köklerindeki nodüllerde yaşayan "Rhizobium" bakterileri, bitkiye havadan aldığı azotu (nitrat/amonyum formunda) verirken, bitkiden de hazır besin alır. Bu yaşam şekli nedir?',
        options: [
          { id: 'A', text: 'Parazitizm (Zararlı)' },
          { id: 'B', text: 'Mutualizm (İki taraf da kazanır)' },
          { id: 'C', text: 'Kommensalizm (Biri kazanır, diğeri nötr)' },
          { id: 'D', text: 'Amensalizm' },
          { id: 'E', text: 'Rekabet' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakteri ev (kök) ve yemek bulur, bitki ise en değerli gübreyi (Azot) alır. Kazan-Kazan ilişkisidir (Mutualizm).'
      },
      {
        id: 'q-10-9', difficulty: 'medium',
        questionText: 'İklim krizine bağlı olarak topraktaki suyun tamamen buharlaşıp ÇÖLLEŞME başlaması, Karbon döngüsündeki hangi olayı DOĞRUDAN DURDURARAK CO2 artışını hızlandırır?',
        options: [
          { id: 'A', text: 'Topraktaki bakterilerin solunum yapmasını' },
          { id: 'B', text: 'Bitkilerin FOTOSENTEZ yapmasını' },
          { id: 'C', text: 'Fosil yakıtların yanmasını' },
          { id: 'D', text: 'Hayvanların ölmesini' },
          { id: 'E', text: 'Yanardağ patlamalarını' }
        ],
        correctOptionId: 'B',
        explanation: 'Su biterse bitki kurur. Bitki kurursa (Fotosentez durursa) havadaki CO2\'yi emecek (temizleyecek) kimse kalmaz.'
      },
      {
        id: 'q-10-10', difficulty: 'medium',
        questionText: 'Doğadaki AZOT döngüsünde, yıldırım ve şimşekler (abiyotik fiksasyon) hangi işlevi görür?',
        options: [
          { id: 'A', text: 'Topraktaki azotu havaya uçurur.' },
          { id: 'B', text: 'Havadaki inaktif N2 gazının yüksek enerjiyle Oksijenle birleşmesini ve yağmurla "Nitrat (Gübre)" olarak toprağa inmesini sağlar.' },
          { id: 'C', text: 'Bakterileri öldürür.' },
          { id: 'D', text: 'Bitkilerin fotosentez yapmasını sağlar.' },
          { id: 'E', text: 'Amonyak üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Şimşek çakması gökyüzünde kimyasal bir reaksiyon başlatır, N2 parçalanır ve yere gübre yağar.'
      },
      {
        id: 'q-10-11', difficulty: 'medium',
        questionText: 'Okyanusların asitleşmesi (pH\'ın düşmesi) doğrudan HANGİ GAZIN suda normalden fazla çözünmesiyle ilgilidir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Azot' },
          { id: 'C', text: 'Karbondioksit (CO2 suya girince Karbonik asit oluşturur)' },
          { id: 'D', text: 'Metan' },
          { id: 'E', text: 'Helyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Havadaki aşırı CO2 denize geçer ve Karbonik aside (H2CO3) dönüşür. Bu da deniz kabuklularının (mercanların vb.) eriyip ölmesine yol açar.'
      },
      {
        id: 'q-10-12', difficulty: 'medium',
        questionText: 'Atmosferdeki su buharının ağaçların YAPRAKLARINDAN dışarı atılmasına TERLEME (Transpirasyon) denir. Ormanların kesilmesi Su Döngüsünü NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Sadece gölleri kurutur.' },
          { id: 'B', text: 'Terleme ile atmosfere verilen su azalacağı için o bölgedeki YAĞIŞ MİKTARI DÜŞER ve kuraklık başlar.' },
          { id: 'C', text: 'Daha çok yağmur yağar.' },
          { id: 'D', text: 'Okyanuslar taşar.' },
          { id: 'E', text: 'Yeraltı suları aniden yükselir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ormanlar devasa su pompalarıdır. Köküyle yeraltı suyunu çeker, terlemeyle bulut yapar. Ağaç yoksa yağmur (bulut) da azalır.'
      },
      {
        id: 'q-10-13', difficulty: 'medium',
        questionText: 'Madde döngülerinde (C, N, Su) HİÇBİR CANLININ MÜDAHALESİ OLMADAN, sadece fiziksel/kimyasal olarak gerçekleşebilen döngü hangisidir?',
        options: [
          { id: 'A', text: 'Azot döngüsü (Tamamen)' },
          { id: 'B', text: 'Karbon döngüsü' },
          { id: 'C', text: 'Su döngüsü (Buharlaşma ve Yoğuşma büyük oranda cansız doğa yasalarıyla işler)' },
          { id: 'D', text: 'Fosfor döngüsü' },
          { id: 'E', text: 'Enerji döngüsü' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlıların terlemesi vb. katkı sağlasa da, Su Döngüsünün %90\'ı okyanusların güneşle buharlaşıp, soğuyup yağması ile abiyotik (cansız) olarak yürür.'
      },
      {
        id: 'q-10-14', difficulty: 'medium',
        questionText: 'Bir komünitede Kemosentetik bakterilerin (Örn: Nitrifikasyon bakterileri) ortak özelliği HANGİSİDİR?',
        options: [
          { id: 'A', text: 'Işık enerjisi kullanmaları' },
          { id: 'B', text: 'İnorganik maddeleri oksitleyerek elde ettikleri KİMYASAL enerji ile Karbondioksit özümlemesi (besin üretimi) yapmaları' },
          { id: 'C', text: 'Saprofit olmaları' },
          { id: 'D', text: 'Sadece karanlıkta üremeleri' },
          { id: 'E', text: 'Glikozu oksijensiz solunumla yıkmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemosentetikler güneş (ışık) kullanmaz. İnorganik zehri (Amonyağı) yakar, çıkan ısıyla kendi şekerini yapar. Hepsi Üreticidir (Ototrof).'
      },
      {
        id: 'q-10-15', difficulty: 'medium',
        questionText: 'Böcekçil bitkiler (Örn: Sinek kapan), hem fotosentez yapıp kendi şekerini üretir, hem de böcekleri yakalayıp sindirir. Bu bitkilerin böcek yemesinin TEMEL EKOLOJİK SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'Oksijen bulamamaları' },
          { id: 'B', text: 'Yaşadıkları toprağın AZOT bakımından fakir olması ve protein üretebilmek için azot ihtiyacını böcekten (hayvandan) karşılamaları' },
          { id: 'C', text: 'Güneş ışığını sevmemeleri' },
          { id: 'D', text: 'Enerjilerini tamamen böcekten almaları' },
          { id: 'E', text: 'Böceklerle rekabet etmeleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Bataklıkta (azotsuz toprakta) yaşayan bu bitki, şekerini kendi yapar (Ototrof) ama azotunu (proteinini) böcekten hazır alır (Heterotrof).'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Popülasyon Grafikleri',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Büyüme eğrisi bir süre S TİPİ grafikte ilerleyip Taşıma Kapasitesinde (K) dalgalanan bir fare popülasyonu, aniden K\'nın ÇOK ÜSTÜNE çıkmıştır (Popülasyon patlaması). Bu durumun EN OLASI sebebi nedir?',
        options: [
          { id: 'A', text: 'Farelerde mutasyon olması' },
          { id: 'B', text: 'Ortamdaki TİLKİ, YILAN (Avcı) sayısının insanlar tarafından veya salgın hastalıkla ANİDEN AZALTILMASI' },
          { id: 'C', text: 'Besinlerin aniden tamamen yok olması' },
          { id: 'D', text: 'Fırtına çıkması' },
          { id: 'E', text: 'Su döngüsünün durması' }
        ],
        correctOptionId: 'B',
        explanation: 'Fareyi dengeleyen fren (Çevre direnci/Avcılar) ortadan kalkarsa fareler J tipi patlama yapar.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Bir popülasyonun yaş piramidi VAZO ŞEKLİNDEDİR (Tabandaki gençler dar, ortadaki yetişkinler ve üstteki yaşlılar çok geniş). Bu piramit bize popülasyon hakkında ne söyler?',
        options: [
          { id: 'A', text: 'Nüfus hızla büyümektedir.' },
          { id: 'B', text: 'Doğum oranları çok DÜŞMÜŞ, popülasyon KÜÇÜLMEKTEDİR (Daralan piramit).' },
          { id: 'C', text: 'Doğum ve ölüm tam eşittir.' },
          { id: 'D', text: 'Ortamda çok fazla avcı vardır.' },
          { id: 'E', text: 'Kapasite aşılmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Taban darsa, yeni bebek (gelecek nesil) gelmiyor demektir. Nüfus yaşlıdır ve gerilemektedir (Bazı Avrupa ülkeleri gibi).'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: '(Doğum+İçe Göç) = A, (Ölüm+Dışa Göç) = B olsun. A < B (Gelenler, Gidenlerden az) olan bir popülasyonda zamanla hangi grafiğin çizilmesi beklenir?',
        options: [
          { id: 'A', text: 'Birey sayısının sürekli arttığı bir grafik' },
          { id: 'B', text: 'Birey sayısının AZALDIĞI (Negatif büyüme) bir grafik' },
          { id: 'C', text: 'Tamamen düz (sabit) bir çizgi' },
          { id: 'D', text: 'J harfi şeklinde yukarı fırlayan grafik' },
          { id: 'E', text: 'Önce sabit, sonra artan grafik' }
        ],
        correctOptionId: 'B',
        explanation: 'Ölenler ve göç edenler daha fazlaysa nüfus azalır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Lojistik (S Tipi) büyüme grafiğinde, "Kuruluş Evresi"nde (en başta) büyümenin nispeten YAVAŞ olmasının sebebi nedir?',
        options: [
          { id: 'A', text: 'Ortamda besin olmaması' },
          { id: 'B', text: 'Canlıların çok hastalıklı olması' },
          { id: 'C', text: 'Ortama yeni gelen az sayıdaki bireyin uyum sağlaması, eş bulması ve üreme yaşına gelmesi için ZAMAN GEREKMESİ' },
          { id: 'D', text: 'Avcıların hepsini hemen yemesi' },
          { id: 'E', text: 'Çevre direncinin çok yüksek olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Başlangıçta birey sayısı azdır, üreme hızı düşüktür. Uyum sağlandıktan sonra logaritmik patlama başlar.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Bir göle bırakılan 100 balığın büyüme grafiği "J tipi (Üstel)" ilerlemektedir. Bir süre sonra bu gölde aşağıdakilerden HANGİSİNİN GERÇEKLEŞMESİ KESİNDİR?',
        options: [
          { id: 'A', text: 'Balıkların evrim geçirip kuşa dönüşmesi' },
          { id: 'B', text: 'Sonsuza kadar J tipi büyümeye devam etmesi' },
          { id: 'C', text: 'Birey sayısı arttıkça ÇEVRE DİRENCİNİN (besin kavgası vb.) devreye girerek büyüme hızını YAVAŞLATMASI veya popülasyonu ÇÖKERTMESİ' },
          { id: 'D', text: 'Gölün tamamen donması' },
          { id: 'E', text: 'Suların aniden buharlaşması' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada hiçbir şey sonsuza kadar limitsiz (J tipi) büyüyemez. Er ya da geç kaynak biter ve çevre direnci frenler.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Bir komünitedeki bitki süksesyonu "Çıplak Kaya -> Liken -> Yosun -> Ot -> Çalı -> Ağaç (Orman)" şeklindedir. Süksesyon ilerledikçe (Ormana doğru gidildikçe) aşağıdakilerden hangisi AZALIR?',
        options: [
          { id: 'A', text: 'Biyokütle' },
          { id: 'B', text: 'Tür çeşitliliği' },
          { id: 'C', text: 'Toprak kalınlığı ve kalitesi' },
          { id: 'D', text: 'Ortamın sıcaklık, ışık ve nem değişimlerindeki DALGALANMALAR (Yani kararlılık ARTAR, ani değişimler AZALIR)' },
          { id: 'E', text: 'Hayvan türü sayısı' }
        ],
        correctOptionId: 'D',
        explanation: 'Olgun bir orman (Klimaks), sıcaklığı ve nemi dengede tutar. Çıplak kayadaki gibi gündüz aşırı sıcak, gece aşırı soğuk olmaz (Sert Dalgalanmalar azalır).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Ekolojik ayak izi (İhtiyaç duyulan doğa alanı) > Biyokapasite (Doğanın yenileyebildiği miktar) durumunda olan bir ülke için (Örn: Gelişmiş Sanayi Ülkeleri) ne söylenebilir?',
        options: [
          { id: 'A', text: 'Doğa ile tam uyumludur' },
          { id: 'B', text: 'Doğanın kendisini yenileme hızından DAHA HIZLI kaynak tüketmekte, ekolojik AÇIK vermektedir' },
          { id: 'C', text: 'Sürdürülebilir bir sistem kurmuştur' },
          { id: 'D', text: 'Hiç çevre kirliliği yapmamaktadır' },
          { id: 'E', text: 'Karbon ayak izi sıfırdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüketim (Ayak izi), Üretimi (Biyokapasite) geçmişse o ülke geleceğin kaynaklarını çalıyor (Ekolojik borçlanma yapıyor) demektir.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bir ortamın TAŞIMA KAPASİTESİ (K) düştüğünde, Lojistik büyüme (S eğrisi) grafiğinde Denge Evresi (K çizgisi) nasıl bir hareket gösterir?',
        options: [
          { id: 'A', text: 'Daha da yukarı çıkar.' },
          { id: 'B', text: 'Aşağıya DOĞRU İNER (Daha düşük birey sayısında yataylaşır).' },
          { id: 'C', text: 'Dikey çizgi halini alır.' },
          { id: 'D', text: 'Hiçbir yere kıpırdamaz, K sabittir.' },
          { id: 'E', text: 'Sürekli dalgalanır, çizilmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ortam bozulur besin azalırsa (Kapasite düşerse), eskiden 1000 canlının yatay dengede durduğu K çizgisi, artık 500 canlıda yataylaşır (Aşağı iner).'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Tolerans (Hoşgörü) eğrisi en DAR (İnce uzun çan eğrisi) olan bir tür için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Dünyanın her yerinde yaşayabilir' },
          { id: 'B', text: 'Çevre değişimlerine karşı ÇOK HASSASDIR, kolayca yok olabilir (Örn: Sadece 20-22 derece suda yaşayabilen mercanlar)' },
          { id: 'C', text: 'Her türlü besini yiyebilir' },
          { id: 'D', text: 'En dayanıklı türdür' },
          { id: 'E', text: 'Süksesyonda öncü türdür' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğri darsa (Örn: Sadece dar bir sıcaklık aralığına katlanıyorsa) o canlı nazlıdır, küçük bir iklim değişiminde ölür (Gösterge türler genellikle böyledir).'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Popülasyon Büyüme Hızı (Hız grafiği) ile Birey Sayısı (Miktar grafiği) karıştırılmamalıdır. Lojistik (S) büyümede Birey sayısı Taşıma kapasitesinde MAKSİMUMKEN, Büyüme Hızı kaçtır?',
        options: [
          { id: 'A', text: 'Büyüme Hızı da maksimumdur.' },
          { id: 'B', text: 'Büyüme Hızı SIFIRDIR (Çünkü dengeye ulaşılmış, net artış durmuştur).' },
          { id: 'C', text: 'Hız negatiftir.' },
          { id: 'D', text: 'Hız giderek artıyordur.' },
          { id: 'E', text: 'Hız sadece ilk evrede sıfırdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir araba 100 km hıza ulaşıp o hızda sabit kalıyorsa, "İvme (Hızlanma)" sıfır olur. Birey sayısı tepe noktada sabittir, hızı (yeni birey eklenmesi) durmuştur.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Bir tarlada Yabancı Ot popülasyonuna kimyasal ilaç (Herbisit) sıkılır. İlk yıl otların %99\'u ölür. Ancak ilaçlamaya devam edilmesine rağmen 5 yıl sonra otların sayısı TEKRAR ESKİ HALİNE GELİR. Bu durumun evrimsel ve ekolojik sebebi nedir?',
        options: [
          { id: 'A', text: 'İlacın bozulması' },
          { id: 'B', text: 'Otların ilaca karşı (mutasyonla var olan) DİRENÇLİ genlerinin doğal seçilimle hayatta kalması ve sadece bu dirençli bireylerin çoğalması' },
          { id: 'C', text: 'İlacın otları beslemesi' },
          { id: 'D', text: 'Otların yer değiştirmesi' },
          { id: 'E', text: 'Kuşların tohum getirmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Ölenler elenir, tesadüfen ilaca dirençli doğan %1\'lik kesim sağ kalır ve tüm alanı kaplar. (Antibiyotik direnci mantığı).'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Av-Avcı grafiğinde genellikle Avcı sayısının Av sayısından DAHA AZ olmasının (Piramitte avcının daha üstte olması) temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Avcıların üremeyi sevmemesi' },
          { id: 'B', text: 'Avcıların birbirini yemesi' },
          { id: 'C', text: 'Besin piramidinde yukarı çıkıldıkça ENERJİ KAYBI (%10 Kuralı) yüzünden, az enerjinin ancak daha az sayıda avcıyı besleyebilmesi' },
          { id: 'D', text: 'Avların çok güçlü olması' },
          { id: 'E', text: 'Hastalıkların hep avcıları vurması' }
        ],
        correctOptionId: 'C',
        explanation: '1000 kg ot, 100 kg tavşanı, o da sadece 10 kg tilkiyi yaşatabilir. Enerji daraldıkça canlı sayısı azalmak zorundadır.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Ormandaki ağaçların Kesilmesi -> Bitki köklerinin toprağı tutamaması -> Yağan yağmurun toprağı nehre taşıması (Erozyon) -> Gölün toprakla dolması (Bulanıklaşması). Bu zincirleme olay göldeki FOTOSENTEZİ nasıl etkiler?',
        options: [
          { id: 'A', text: 'Artırır, çünkü toprak gübredir' },
          { id: 'B', text: 'AZALTIR, çünkü bulanık su Güneş Işığının dibe inmesini (ışık geçirgenliğini) ENGELLER' },
          { id: 'C', text: 'Değiştirmez' },
          { id: 'D', text: 'Balıkların fotosentez yapmasını sağlar' },
          { id: 'E', text: 'Oksijeni artırır' }
        ],
        correctOptionId: 'B',
        explanation: 'Erozyonla gelen çamur, suyu bulandırır (ışık geçirgenliğini sıfırlar). Işık yoksa fotosentez de yoktur.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Aynı kayalığa yapışık yaşayan İki Farklı Midye türünden (A ve B), B midyesi ortamdan çıkarıldığında, A midyesinin KENDİ ALANINI GENİŞLETEREK B\'nin yerine de yerleştiği görülmüştür. Bu durum, A midyesi için neyi kanıtlar?',
        options: [
          { id: 'A', text: 'A midyesinin fotosentez yapabildiğini' },
          { id: 'B', text: 'A midyesinin "Gerçek (Temel) Nişi"nin, rekabet varken sıkıştığı "Gerçekleşen Nişi"nden DAHA BÜYÜK olduğunu' },
          { id: 'C', text: 'A midyesinin otçul olduğunu' },
          { id: 'D', text: 'B midyesinin avcı olduğunu' },
          { id: 'E', text: 'İkisinin mutualist olduğunu' }
        ],
        correctOptionId: 'B',
        explanation: 'Türler normalde çok daha geniş alanda yaşayabilir (Temel niş), ancak rekabet onları dar bir alana (Gerçekleşen niş) hapseder. Rakip gidince alanını geri alır.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Bir komünitenin zaman içindeki değişimi (Süksesyon) sırasında, genellikle hangisinde GÖZLE GÖRÜLÜR BİR ARTIŞ beklenmez?',
        options: [
          { id: 'A', text: 'Tür çeşitliliğinde' },
          { id: 'B', text: 'Toplam Biyokütlede' },
          { id: 'C', text: 'Güneşten gelen ENERJİNİN (Isının) DOĞAYA GERİ DÖNÜŞ (Döngü) Hızında' },
          { id: 'D', text: 'Besin ağının karmaşıklığında' },
          { id: 'E', text: 'Toprak kalınlığında' }
        ],
        correctOptionId: 'C',
        explanation: 'Enerji HİÇBİR ZAMAN döngü yapmaz, ısı olarak uzaya gider. Süksesyon ilerlese bile enerji kuralı değişmez.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Besin Ağı ve Enerji Piramidi Senaryoları',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir besin ağında: Ot -> Çekirge -> Örümcek -> Kurbağa -> Yılan -> Kartal zinciri vardır. Tüm canlıların atıklarını ise Mantarlar parçalamaktadır. Bu zincirde 3. Trofik Düzeyde (Beslenme basamağı) HANGİ CANLI bulunur?',
        options: [
          { id: 'A', text: 'Çekirge' },
          { id: 'B', text: 'Örümcek' },
          { id: 'C', text: 'Kurbağa' },
          { id: 'D', text: 'Kartal' },
          { id: 'E', text: 'Mantar' }
        ],
        correctOptionId: 'B',
        explanation: 'Trofik Düzeyler aşağıdan sayılır. 1. Düzey: Ot (Üretici), 2. Düzey: Çekirge (1. Tüketici), 3. Düzey: Örümcek (2. Tüketici).'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Aynı besin ağında (Ot->Çekirge->Örümcek->Kurbağa->Yılan->Kartal) DDT zehri birikiminin DOĞRU SIRALANMASI hangisidir (En azdan En çoğa doğru)?',
        options: [
          { id: 'A', text: 'Kartal < Yılan < Kurbağa < Ot' },
          { id: 'B', text: 'Ot < Çekirge < Kurbağa < Kartal' },
          { id: 'C', text: 'Örümcek < Çekirge < Yılan < Kartal' },
          { id: 'D', text: 'Mantar < Ot < Çekirge < Örümcek' },
          { id: 'E', text: 'Hepsi eşittir' }
        ],
        correctOptionId: 'B',
        explanation: 'Zehir birikimi en az üreticide (ot), en çok tepe avcıdadır (kartal). (Ot < Çekirge < Kurbağa < Kartal).'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Karmaşık bir Besin Ağında "Fare" hem ot yemekte (Birincil Tüketici), hem de böcek yemektedir (İkincil Tüketici). Farenin bu durumuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Ototrof' },
          { id: 'B', text: 'Saprofit' },
          { id: 'C', text: 'Omnivor (Hepçil) ve Farklı Trofik düzeylerde yer alabilme' },
          { id: 'D', text: 'Kilit taşı tür' },
          { id: 'E', text: 'Parazit' }
        ],
        correctOptionId: 'C',
        explanation: 'Fareler hem ot (üretici) yer hem et (böcek) yer. Bu yüzden besin ağında birden fazla seviyede yer alırlar.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Piramidin tabanındaki Üreticiler 100.000 kcal enerjiye sahipse, 4. Trofik düzeydeki bir avcıya (%10 kuralına göre) YAKLAŞIK kaç kcal enerji ulaşır?',
        options: [
          { id: 'A', text: '10.000' },
          { id: 'B', text: '1.000' },
          { id: 'C', text: '100' },
          { id: 'D', text: '10' },
          { id: 'E', text: '1' }
        ],
        correctOptionId: 'C',
        explanation: '1. Düzey: 100.000 -> 2. Düzey: 10.000 -> 3. Düzey: 1.000 -> 4. Düzey: 100 kcal. (Her basamakta 1 sıfır silinir).'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'İnsanların "Et (İnek)" yerine doğrudan "Ot (Tahıl, Sebze)" ile beslenmesi, dünyadaki ekolojik enerji verimliliğini (Enerji Tasarrufunu) NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Olumsuz etkiler, enerji biter.' },
          { id: 'B', text: 'İnsan ÜRETİCİYE ne kadar yakın beslenirse (Alt basamaktan yerse), enerji kaybı o kadar AZ OLUR, daha çok insan doyar.' },
          { id: 'C', text: 'Hiçbir etkisi olmaz.' },
          { id: 'D', text: 'Biyolojik birikimi artırır.' },
          { id: 'E', text: 'Karbon döngüsünü durdurur.' }
        ],
        correctOptionId: 'B',
        explanation: '1000 kg tahıl 10 insanı doyururken, o tahılı inek yiyip et üretirse, enerjinin %90\'ı inekte kaybolacağı için o et ancak 1 insanı doyurur. Alt basamaktan yemek verimlidir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Bir göl ekosistemine ağır bir ZEHİR (Kimyasal atık) dökülürse, ilk hafta içinde TOPLU ÖLÜMLER en çok HANGİ BASAMAKTA görülür?',
        options: [
          { id: 'A', text: 'Yüzeydeki Fitoplanktonlarda (Üreticilerde)' },
          { id: 'B', text: 'Sadece göçmen kuşlarda' },
          { id: 'C', text: 'Biyolojik birikim çok olduğu için SADECE en tepe avcılarda' },
          { id: 'D', text: 'Topraktaki bakterilerde' },
          { id: 'E', text: 'Tüm canlılar eşit ölür' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehir suya az miktarda girse bile, tepe avcılarda ölümcül doza (Biyolojik Birikim) ulaşır. Kural: Zehir en çok tepeyi vurur.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Saprofit mantarların HÜCRE DIŞINA salgıladıkları ve madde döngüsünü sağlayan TEMEL MOLEKÜLLER nelerdir?',
        options: [
          { id: 'A', text: 'Sadece Oksijen' },
          { id: 'B', text: 'Güçlü Sindirim Enzimleri (Hidrolitik enzimler)' },
          { id: 'C', text: 'Hormonlar' },
          { id: 'D', text: 'Antikorlar' },
          { id: 'E', text: 'Klorofil' }
        ],
        correctOptionId: 'B',
        explanation: 'Saprofitler midesi dışarıda olan canlılar gibidir. Enzimi dışarı kusar, atığı çürütür, yapı taşlarını hücre içine emer.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Karanlık (Güneşsiz) derin okyanus diplerinde (Termal Bacalarda) tüm besin ağının ÜRETİCİSİ olan (Güneş olmadan kendi besinini yapan) canlı grubu kimdir?',
        options: [
          { id: 'A', text: 'Algler (Fotosentetikler)' },
          { id: 'B', text: 'Kemosentetik Bakteriler (ve Arkeler)' },
          { id: 'C', text: 'Balinalar' },
          { id: 'D', text: 'Mürekkep balıkları' },
          { id: 'E', text: 'Saprofitler' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık olmayan zifiri karanlık yerlerde besin piramidi kemosentez (kimyasal enerjiyi besine çeviren bakteriler) ile başlar.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Klimaks evresine ulaşmış (Çok olgun, asırlık) bir orman için aşağıdakilerden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Biyokütle çok yüksektir.' },
          { id: 'B', text: 'Tür çeşitliliği fazladır.' },
          { id: 'C', text: 'Besin ağları son derece karmaşıktır.' },
          { id: 'D', text: 'Canlıların NET büyüme hızı (popülasyon artışı) çok yüksektir (Hızla çoğalırlar).' },
          { id: 'E', text: 'Çevre şartlarına karşı çok dirençlidir (Kararlıdır).' }
        ],
        correctOptionId: 'D',
        explanation: 'Klimaks "Denge" demektir. Dengeye ulaşan yerlerde alan dolmuştur (Taşıma kapasitesine ulaşılmıştır), bu yüzden Net büyüme hızı (artış) YAVAŞTIR, ölen kadar yeni doğar.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Bir besin ağında, A canlısı azalınca B artıyor; B artınca C azalıyor; C azalınca D artıyorsa, bu zincirde D\'nin YIRTICISI (Avcısı) muhtemelen HANGİSİDİR?',
        options: [
          { id: 'A', text: 'A' },
          { id: 'B', text: 'B' },
          { id: 'C', text: 'C' },
          { id: 'D', text: 'Kendi kendisinin avcısıdır' },
          { id: 'E', text: 'Hiçbiri avcı değildir' }
        ],
        correctOptionId: 'C',
        explanation: 'C azalınca D rahatlayıp (artıp) çoğaldığına göre, normalde C, D\'yi yiyen avcıdır. Avcısı azalınca Av (D) artar.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Besin zincirinde "Ototrof" teriminin tam kelime anlamı "Kendi Beslenen"dir. O halde "Foto-Ototrof" ile "Kemo-Ototrof" arasındaki TEK FARK nedir?',
        options: [
          { id: 'A', text: 'Kullandıkları Karbon kaynağı (Biri CO2 diğeri Glikoz kullanır)' },
          { id: 'B', text: 'Besin (Organik Madde) üretirken kullandıkları ENERJİ KAYNAĞI (Biri ışık, diğeri kimyasal tepkime ısısı)' },
          { id: 'C', text: 'Ürettikleri besin çeşidi' },
          { id: 'D', text: 'Yaşadıkları gezegen' },
          { id: 'E', text: 'Birinin hayvan diğerinin bitki olması' }
        ],
        correctOptionId: 'B',
        explanation: 'İkisi de inorganikten organik (şeker) üretir, ikisi de Karbon kaynağı olarak CO2 kullanır. Tek fark enerjiyi güneşten mi (Foto) yoksa kimyasal bağdan mı (Kemo) aldıklarıdır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Ormanlık bir alan ile gölün birleştiği "Ekoton" (Geçiş) bölgesi için HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Sadece orman canlıları yaşar.' },
          { id: 'B', text: 'Tür çeşitliliği (Zenginliği) HER İKİ EKOSİSTEMDEN DE DAHA FAZLADIR (Çünkü her ikisinden de tür barındırır).' },
          { id: 'C', text: 'Canlıların tolerans (dayanıklılık) aralığı çok dardır.' },
          { id: 'D', text: 'Rekabet çok azdır.' },
          { id: 'E', text: 'Madde döngüsü durmuştur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sınır (geçiş) bölgelerinde iki tarafın da canlıları (Örn: Hem ağaç kuşları hem bataklık kurbağaları) bulunduğu için Çeşitlilik Maksimum, Rekabet Maksimum, Toleranslı türler çoktur.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Popülasyon yoğunluğunu (Birim alandaki birey sayısını) HESAPLARKEN aşağıdakilerden hangisi doğrudan DİKKATE ALINMAZ?',
        options: [
          { id: 'A', text: 'Doğum oranı' },
          { id: 'B', text: 'Ölüm oranı' },
          { id: 'C', text: 'Bireylerin boy uzunluğu (Fiziksel özelliği)' },
          { id: 'D', text: 'İçe Göçler' },
          { id: 'E', text: 'Yaşanılan Alanın (m2 veya km2) büyüklüğü' }
        ],
        correctOptionId: 'C',
        explanation: 'Yoğunluk hesabı = (Toplam Birey Sayısı) / (Alan)\'dır. Sayıyı değiştiren doğum/ölüm/göç önemlidir, bireyin boyu ekolojik sayısal analize doğrudan girmez.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Azot döngüsünde "Baklagillerin Köklerindeki Nodüller", tarımda NEDEN doğal gübre fabrikası gibi çalışır?',
        options: [
          { id: 'A', text: 'Topraktaki tüm suyu emdikleri için' },
          { id: 'B', text: 'İçlerindeki mutualist Rhizobium bakterileri, Havadaki N2 gazını bağlayıp toprağı AZOT BAKIMINDAN ZENGİNLEŞTİRDİĞİ için (Sunni gübreye ihtiyaç bırakmazlar)' },
          { id: 'C', text: 'Zehirli gaz ürettikleri için' },
          { id: 'D', text: 'Fotosentez yapmadıkları için' },
          { id: 'E', text: 'Böcekleri kaçırdıkları için' }
        ],
        correctOptionId: 'B',
        explanation: 'Çiftçiler toprağı dinlendirmek (doğal azot eklemek) istediklerinde Nadasa bırakmak yerine Baklagil ekerler (Ekim Nöbeti), kökler toprağa azot depolar.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Ekosistemde madde (örn: karbon) "DÖNGÜ" yaparken (Atmosfer->Canlı->Toprak->Atmosfer), ENERJİ neden "AKIŞ" (Tek yönlü) yapar?',
        options: [
          { id: 'A', text: 'Enerji topraktan geldiği için.' },
          { id: 'B', text: 'Madde atomdur (kaybolmaz), ama Enerji iş yaparken (solunumla) ISIYA dönüşerek ekosistemden ÇIKAR, bitkiler havaya yayılan bu ısıyı fotosentezde KULLANAMAZ (Sadece ışık kullanabilirler).' },
          { id: 'C', text: 'Saprofitler enerjiyi yediği için.' },
          { id: 'D', text: 'Güneş her gün doğduğu için.' },
          { id: 'E', text: 'Madde daha ağır olduğu için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fizikte enerjinin korunumu vardır ama biyolojide ısıya dönüşen enerji sisteme "ışık" olarak geri dönemez, uzaya dağılır (Tek yönlü kayıp akışı).'
      }
    ]
  }
]
