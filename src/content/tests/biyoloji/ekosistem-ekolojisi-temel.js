export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Ekolojik Kavramlar ve Organizasyon',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Ekoloji biliminin İNCELEDİĞİ temel konu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Canlıların hücre yapısı' },
          { id: 'B', text: 'Canlıların genetik dizilimi' },
          { id: 'C', text: 'Canlıların birbirleriyle ve cansız çevreleriyle olan ilişkileri' },
          { id: 'D', text: 'Sadece bitkilerin fotosentez hızı' },
          { id: 'E', text: 'Gezegenlerin güneş sistemindeki yerleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekoloji, canlıların (biyotik) hem diğer canlılarla hem de cansız (abiyotik) çevreyle etkileşimini inceleyen bilim dalıdır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Belirli bir alanda yaşayan "AYNI TÜR" bireylerin oluşturduğu topluluğa ne ad verilir?',
        options: [
          { id: 'A', text: 'Ekosistem' },
          { id: 'B', text: 'Popülasyon' },
          { id: 'C', text: 'Komünite' },
          { id: 'D', text: 'Biyosfer' },
          { id: 'E', text: 'Biyom' }
        ],
        correctOptionId: 'B',
        explanation: 'Popülasyon, sınırları belli bir alanda yaşayan, aynı türden (örneğin sadece Karadeniz\'deki hamsiler) bireylerin toplamıdır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Bir ormanda yaşayan çam ağaçları, sincaplar, kuşlar ve mantarların "HEPSİNİN BİRDEN" (farklı türler) oluşturduğu canlılar topluluğuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Komünite' },
          { id: 'C', text: 'Biyosfer' },
          { id: 'D', text: 'Habitat' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'B',
        explanation: 'Farklı türlere ait popülasyonların bir araya gelerek oluşturduğu SADECE CANLILARDAN oluşan topluluğa Komünite denir.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Komünite (canlılar) ve onların yaşadığı Cansız Çevrenin (toprak, su, hava, güneş) BİRLİKTE oluşturduğu bütüne ne ad verilir?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Ekosistem' },
          { id: 'C', text: 'Niş' },
          { id: 'D', text: 'Flora' },
          { id: 'E', text: 'Fauna' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekosistem = Canlılar (Komünite) + Cansız Çevre (Abiyotik faktörler) demektir. Örneğin bir göl ekosistemi suyu ve balıkları birlikte kapsar.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Dünya üzerinde canlıların yaşadığı EN BÜYÜK ekosisteme (okyanus diplerinden atmosferin alt katmanlarına kadar) ne denir?',
        options: [
          { id: 'A', text: 'Popülasyon' },
          { id: 'B', text: 'Biyosfer (Ekosfer)' },
          { id: 'C', text: 'Habitat' },
          { id: 'D', text: 'Ekotom' },
          { id: 'E', text: 'Mikroklima' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyosfer, Dünya gezegeni üzerindeki canlılığın bulunduğu tüm alanları (su, kara, hava) kapsayan en üst düzey organizasyondur.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Bir canlının doğada arandığında en kolay bulunabileceği yere, yani DOĞAL ADRESİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Ekosistem' },
          { id: 'B', text: 'Habitat' },
          { id: 'C', text: 'Popülasyon' },
          { id: 'D', text: 'Niş' },
          { id: 'E', text: 'Biyom' }
        ],
        correctOptionId: 'B',
        explanation: 'Habitat, bir türün doğada büyüdüğü, ürediği ve yaşayabildiği fiziksel alandır (Canlının adresidir).'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Bir canlının ekosistemde beslenmek, üremek, saklanmak gibi YAPTIĞI İŞLERİN TAMAMINA (ekolojik mesleğine) ne denir?',
        options: [
          { id: 'A', text: 'Ekolojik Niş' },
          { id: 'B', text: 'Habitat' },
          { id: 'C', text: 'Popülasyon' },
          { id: 'D', text: 'Komünite' },
          { id: 'E', text: 'Biyosfer' }
        ],
        correctOptionId: 'A',
        explanation: 'Habitat canlının adresi, Ekolojik Niş ise oradaki işidir (ne yediği, kime yem olduğu, çevreye etkisi vb).'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Ekolojik organizasyon basamaklarının KÜÇÜKTEN BÜYÜĞE DOĞRU sıralanışı hangi seçenekte doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Biyosfer - Ekosistem - Komünite - Popülasyon - Organizma' },
          { id: 'B', text: 'Organizma - Popülasyon - Komünite - Ekosistem - Biyosfer' },
          { id: 'C', text: 'Popülasyon - Organizma - Ekosistem - Biyosfer - Komünite' },
          { id: 'D', text: 'Ekosistem - Popülasyon - Biyosfer - Organizma - Komünite' },
          { id: 'E', text: 'Komünite - Ekosistem - Organizma - Popülasyon - Biyosfer' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıralama: Tek Birey (Organizma) -> Aynı Tür Topluluğu (Popülasyon) -> Tüm Canlılar (Komünite) -> Canlı+Cansız Çevre (Ekosistem) -> Tüm Dünya (Biyosfer).'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir ekosistemin CANSIZ (Abiyotik) faktörlerinden BİRİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Işık' },
          { id: 'B', text: 'Sıcaklık' },
          { id: 'C', text: 'Toprak ve Mineraller' },
          { id: 'D', text: 'Tüketiciler (Hayvanlar)' },
          { id: 'E', text: 'Su (Nem)' }
        ],
        correctOptionId: 'D',
        explanation: 'Tüketiciler, üreticiler ve ayrıştırıcılar ekosistemin canlı (biyotik) unsurlarıdır. Işık, su, sıcaklık gibi faktörler cansızdır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Kendi besinini kendi üretebilen (örneğin fotosentez yapan bitkiler) canlılara ekolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Tüketiciler (Heterotroflar)' },
          { id: 'B', text: 'Üreticiler (Ototroflar)' },
          { id: 'C', text: 'Ayrıştırıcılar (Saprofitler)' },
          { id: 'D', text: 'Etçiller (Karnivorlar)' },
          { id: 'E', text: 'Hepçiller (Omnivorlar)' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş enerjisini veya kimyasal enerjiyi kullanarak inorganik maddelerden organik besin üreten canlılara Ototrof (Üretici) denir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Kendi besinini üretemeyip, dışarıdan hazır olarak alan canlılara genel olarak ne denir?',
        options: [
          { id: 'A', text: 'Üreticiler (Ototroflar)' },
          { id: 'B', text: 'Tüketiciler (Heterotroflar)' },
          { id: 'C', text: 'Fotosentetikler' },
          { id: 'D', text: 'Siyanobakteriler' },
          { id: 'E', text: 'Bitkiler' }
        ],
        correctOptionId: 'B',
        explanation: 'Besinini başka canlıları yiyerek sağlayan hayvanlar, mantarlar ve birçok bakteri Heterotrof (Tüketici) grubundadır.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Sadece bitkilerle (otlarla) beslenen tüketicilere verilen isim hangisidir?',
        options: [
          { id: 'A', text: 'Otçullar (Herbivorlar)' },
          { id: 'B', text: 'Etçiller (Karnivorlar)' },
          { id: 'C', text: 'Hepçiller (Omnivorlar)' },
          { id: 'D', text: 'Ayrıştırıcılar' },
          { id: 'E', text: 'Üreticiler' }
        ],
        correctOptionId: 'A',
        explanation: 'Koyun, inek, geyik gibi bitkisel kaynaklı beslenen hayvanlara herbivor (otçul) denir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Ölü bitki ve hayvan kalıntılarını (organik atıkları) parçalayarak inorganik maddelere dönüştüren ve madde döngüsünü sağlayan canlılara ne denir?',
        options: [
          { id: 'A', text: 'Otçullar' },
          { id: 'B', text: 'Üreticiler' },
          { id: 'C', text: 'Ayrıştırıcılar (Saprofitler / Çürükçüller)' },
          { id: 'D', text: 'Birincil tüketiciler' },
          { id: 'E', text: 'Güneş' }
        ],
        correctOptionId: 'C',
        explanation: 'Mantar ve bazı bakteriler çürükçül yaşar. Doğanın temizlikçileridir ve organik atıkları tekrar doğaya (toprağa inorganik olarak) kazandırırlar.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'İki farklı ekosistemin kesiştiği (örneğin orman ile gölün birleştiği bataklık) geçiş bölgelerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Biyosfer' },
          { id: 'B', text: 'Ekotom' },
          { id: 'C', text: 'Ekotip' },
          { id: 'D', text: 'Ekotoksin' },
          { id: 'E', text: 'Ekoloji' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekotom (veya Ekoton), komüniteler arası geçiş bölgeleridir. Tür çeşitliliğinin genelde çok yüksek olduğu yerlerdir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Bir ekosistemde BİYOLOJİK (Canlı) ögelerden hangisi Güneş ışığını doğrudan kullanarak ekosisteme enerji sokar?',
        options: [
          { id: 'A', text: 'Mantarlar' },
          { id: 'B', text: 'Hayvanlar' },
          { id: 'C', text: 'Üreticiler (Fotosentetik bitki, alg, siyanobakteri)' },
          { id: 'D', text: 'Saprofitler' },
          { id: 'E', text: 'Virüsler' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekosisteme dışarıdan gelen güneş enerjisini kullanılabilir besin enerjisine çeviren tek grup fotosentez yapan üreticilerdir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Enerji Akışı, Besin Zinciri ve Madde Döngüleri',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Canlıların birbirini yiyerek enerjinin birinden diğerine aktarıldığı sıralı düzene ne ad verilir?',
        options: [
          { id: 'A', text: 'Madde döngüsü' },
          { id: 'B', text: 'Besin Zinciri' },
          { id: 'C', text: 'Süksesyon' },
          { id: 'D', text: 'Simbiyoz' },
          { id: 'E', text: 'Evrim' }
        ],
        correctOptionId: 'B',
        explanation: 'Ot -> Çekirge -> Kurbağa -> Yılan gibi beslenme sırasına Besin Zinciri denir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Besin zincirinde oklar daima neyi gösterir? (Örn: Çimen → Çekirge)',
        options: [
          { id: 'A', text: 'Kimin kime yardım ettiğini' },
          { id: 'B', text: 'Kimin daha güçlü olduğunu' },
          { id: 'C', text: 'Besin ve Enerjinin HANGİ YÖNE doğru aktarıldığını (Yenenden yiyene)' },
          { id: 'D', text: 'Büyüklük sırasını' },
          { id: 'E', text: 'Kimin daha uzun yaşadığını' }
        ],
        correctOptionId: 'C',
        explanation: 'Ok her zaman enerjinin akış yönünü, yani yenilen canlıdan onu yiyen canlıya (tüketiciye) doğru gider.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Karasal bir besin zinciri DAİMA HANGİ CANLI GRUBU ile başlar?',
        options: [
          { id: 'A', text: 'Etçiller' },
          { id: 'B', text: 'Otçullar' },
          { id: 'C', text: 'Üreticiler (Fotosentetikler / Bitkiler)' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'Çürükçüller' }
        ],
        correctOptionId: 'C',
        explanation: 'Besin zincirinin en alt (başlangıç) basamağı her zaman güneşten enerjiyi alan üreticiler (ot, ağaç, alg) olmak zorundadır.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Bir besin piramidinde üreticilerden tüketicilere doğru gidildikçe HER BASAMAKTA enerjinin yaklaşık olarak yüzde kaçı bir üst basamağa aktarılabilir?',
        options: [
          { id: 'A', text: '%100\'ü' },
          { id: 'B', text: '%50\'si' },
          { id: 'C', text: 'Sadece %10\'u' },
          { id: 'D', text: 'Hiçbiri' },
          { id: 'E', text: '%90\'ı' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlı aldığı enerjinin çoğunu (%90) yaşamsal faaliyetlerde kullanır ve ısı olarak kaybeder. Yalnızca %10\'u vücuduna katılır ve kendisini yiyen bir sonraki canlıya aktarılır.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir besin zincirinde EN ÜST BASAMAKTA (Tepe Tüketici) yer alan canlıların özelliklerindendir?',
        options: [
          { id: 'A', text: 'Kendi besinini kendi üretmeleri' },
          { id: 'B', text: 'En çok enerjiyi alan canlı olmaları' },
          { id: 'C', text: 'Biyolojik birikimin (Zehirli madde miktarının) vücutlarında EN FAZLA olması' },
          { id: 'D', text: 'Doğada sayılarının (Birey sayısının) en fazla olması' },
          { id: 'E', text: 'Sadece otla beslenmeleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Besin piramidinde yukarı çıkıldıkça enerji azalırken, atılamayan zehirli maddeler (örneğin tarım ilaçları, ağır metaller) birikerek artar (Biyolojik Birikim).'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Ekosistemde madde ve enerjinin hareketi karşılaştırıldığında en temel FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de döngüseldir.' },
          { id: 'B', text: 'İkisi de tek yönlüdür.' },
          { id: 'C', text: 'Madde doğada DÖNGÜ YAPARAK tekrar kullanılır, Enerji ise TEK YÖNLÜ akar ve sonunda ısı olarak uzaya yayılır (Döngü yapmaz).' },
          { id: 'D', text: 'Enerji döngü yapar, madde tek yönlüdür.' },
          { id: 'E', text: 'Sadece bitkiler maddeyi kullanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada aynı karbon, aynı su milyarlarca yıldır döner (Madde Döngüsü). Ancak güneş enerjisi besin zincirinden geçerken ısıya dönüşür ve tekrar güneşe dönmez (Tek Yönlü Enerji Akışı).'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Karbon döngüsünde, atmosferdeki Karbondioksit (CO2) gazını ALARAK (Tüketerek) onu besin zincirine KANATAN olay hangisidir?',
        options: [
          { id: 'A', text: 'Hücresel Solunum' },
          { id: 'B', text: 'Yanma (Orman yangını)' },
          { id: 'C', text: 'Çürüme (Ayrışma)' },
          { id: 'D', text: 'Fotosentez' },
          { id: 'E', text: 'Volkanik patlama' }
        ],
        correctOptionId: 'D',
        explanation: 'Atmosferdeki CO2\'yi bağlayıp (azaltıp) organik madde yapan en temel olay Fotosentezdir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Aşağıdaki olaylardan hangisi atmosfere Karbondioksit (CO2) VERMEZ?',
        options: [
          { id: 'A', text: 'Hayvanların oksijenli solunumu' },
          { id: 'B', text: 'Orman yangınları' },
          { id: 'C', text: 'Bitkilerin fotosentez yapması' },
          { id: 'D', text: 'Kömür ve petrolün (Fosil yakıtların) yakılması' },
          { id: 'E', text: 'Ayrıştırıcıların ölüleri çürütmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez CO2 gazını Tüketir (Üretmez). Diğer bütün şıklar CO2 üretip atmosfere verir.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Atmosferin %78\'i Azot (N2) gazı olmasına rağmen hayvanlar ve bitkiler bunu doğrudan havadan alamazlar. Havadaki serbest azotu toprağa "BAĞLAYAN" canlılar kimlerdir?',
        options: [
          { id: 'A', text: 'Aslanlar' },
          { id: 'B', text: 'Çam ağaçları' },
          { id: 'C', text: 'Azot bağlayıcı bakteriler (Örn: Baklagillerin kökündeki Rhizobium)' },
          { id: 'D', text: 'Mantar' },
          { id: 'E', text: 'İnsanlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Azot gazı çok kararlı bir moleküldür, sadece şimşek/yıldırım gibi doğa olayları veya Azot Bağlayıcı Bakteriler tarafından kırılarak toprağa nitrat olarak bağlanabilir.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Azot döngüsünde "Ölü organizmalardaki ve atıklardaki" proteinleri (organik maddeleri) parçalayarak AMONYAĞA (NH3) dönüştüren canlı grubu hangisidir?',
        options: [
          { id: 'A', text: 'Üreticiler' },
          { id: 'B', text: 'Ayrıştırıcılar (Çürükçül bakteri ve mantarlar)' },
          { id: 'C', text: 'Azot bağlayıcılar' },
          { id: 'D', text: 'Otçullar' },
          { id: 'E', text: 'Etçiller' }
        ],
        correctOptionId: 'B',
        explanation: 'Çürümeyi gerçekleştiren ayrıştırıcılar, proteini amonyağa (kötü kokulu) çevirir (Pütrifikasyon).'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Oluşan zehirli amonyağın (NH3), bitkilerin kullanabileceği Nitrat (NO3) tuzlarına dönüştürülmesi işlemine ne ad verilir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Nitrifikasyon' },
          { id: 'C', text: 'Denitrifikasyon' },
          { id: 'D', text: 'Solunum' },
          { id: 'E', text: 'Ototrof' }
        ],
        correctOptionId: 'B',
        explanation: 'Amonyağın özel nitrifikasyon bakterilerince (kemosentez ile) nitrit ve nitrata dönüştürülmesine Nitrifikasyon denir. Bu sayede bitkiler gübre elde eder.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Topraktaki fazla Nitratın, bazı bakteriler tarafından tekrar Azot gazına (N2) dönüştürülerek ATMOSFERE VERİLMESİ olayına ne denir?',
        options: [
          { id: 'A', text: 'Nitrifikasyon' },
          { id: 'B', text: 'Denitrifikasyon' },
          { id: 'C', text: 'Amonyaklaşma' },
          { id: 'D', text: 'Özümleme' },
          { id: 'E', text: 'Çürüme' }
        ],
        correctOptionId: 'B',
        explanation: 'Nitratı (Topraktaki) Azot gazına (Havaya) dönüştüren olaya (Tersi işlem olduğu için) DE-Nitrifikasyon denir.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Besin piramidinin her basamağında bulunabilen, her canlının atığı veya ölüsüyle beslenen canlı grubu piramitte YAN TARAFA çizilir. Bunlar kimdir?',
        options: [
          { id: 'A', text: 'Birincil tüketiciler' },
          { id: 'B', text: 'Üreticiler' },
          { id: 'C', text: 'Ayrıştırıcılar (Saprofitler)' },
          { id: 'D', text: 'İkincil tüketiciler' },
          { id: 'E', text: 'Siyanobakteriler' }
        ],
        correctOptionId: 'C',
        explanation: 'Ayrıştırıcılar, bitkiyi de otçulu da etçili de öldüğünde parçaladıkları için piramidin her katmanıyla (yan taraftan) ilişkilidirler.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Bir canlı diğer bir canlıyı yerken (Örn: Aslan antilobu yerken), yediği canlının içindeki HANGİ MADDEYİ hücrelerine alarak ENERJİ İHTİYACINI karşılar?',
        options: [
          { id: 'A', text: 'Sadece su' },
          { id: 'B', text: 'Karbonhidrat, Yağ ve Protein (Organik besinler)' },
          { id: 'C', text: 'Sadece Kalsiyum' },
          { id: 'D', text: 'Sadece oksijen' },
          { id: 'E', text: 'Toprak' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlılar birbirlerini yiyerek yapı taşlarındaki organik molekülleri ve bu moleküllerin kimyasal bağlarındaki enerjiyi alırlar.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Su döngüsünün temel aşamaları hangi ikilidir?',
        options: [
          { id: 'A', text: 'Fotosentez ve Solunum' },
          { id: 'B', text: 'Buharlaşma/Terleme (Atmosfere çıkış) ve Yağış (Yere dönüş)' },
          { id: 'C', text: 'Nitrifikasyon ve Denitrifikasyon' },
          { id: 'D', text: 'Çürüme ve Yanma' },
          { id: 'E', text: 'Aşınma ve Çökelme' }
        ],
        correctOptionId: 'B',
        explanation: 'Su güneşle buharlaşır (canlılardan terlemeyle çıkar) atmosfere karışır, soğuyup yoğuşunca yağmur/kar olarak yeryüzüne döner.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Popülasyon Dinamikleri ve Süksesyon',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Bir popülasyonun (örneğin bir ormandaki tavşanların) birey SAYISININ ARTMASINA neden olan FAKTÖRLER hangileridir?',
        options: [
          { id: 'A', text: 'Ölüm ve Dışa Göç' },
          { id: 'B', text: 'Doğum ve İçe Göç' },
          { id: 'C', text: 'Hastalık ve Avcılar' },
          { id: 'D', text: 'Doğum ve Ölüm' },
          { id: 'E', text: 'İçe Göç ve Dışa Göç' }
        ],
        correctOptionId: 'B',
        explanation: 'Popülasyonu büyüten iki temel faktör yeni yavruların doğması (Doğum) ve dışarıdan yeni bireylerin katılmasıdır (İçe Göç).'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Bir habitatın belirli çevre koşullarında destekleyebileceği (barındırabileceği) MAKSİMUM birey sayısına ne ad verilir?',
        options: [
          { id: 'A', text: 'Taşıma Kapasitesi' },
          { id: 'B', text: 'Çevre Direnci' },
          { id: 'C', text: 'Biyolojik Birikim' },
          { id: 'D', text: 'Ekosistem' },
          { id: 'E', text: 'Habitat sınırı' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir alanın besin, su ve alan kısıtlamalarına göre yaşatabileceği en fazla birey sayısına Taşıma Kapasitesi denir.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Popülasyon büyüdükçe (birey sayısı arttıkça), besin azalması, hastalıkların yayılması ve avcıların artması gibi olumsuzluklar başlar. Popülasyon büyümesini durduran bu engellerin tümüne ne ad verilir?',
        options: [
          { id: 'A', text: 'Süksesyon' },
          { id: 'B', text: 'Biyolojik çeşitlilik' },
          { id: 'C', text: 'Çevre Direnci' },
          { id: 'D', text: 'Taşıma Kapasitesi' },
          { id: 'E', text: 'Mutualizm' }
        ],
        correctOptionId: 'C',
        explanation: 'Çevre direnci, popülasyonun sınırsız büyümesini engelleyen her türlü faktördür (Besin kıtlığı, alan darlığı, hastalık, rekabet vb).'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Doğada hiçbir popülasyon sonsuza kadar BÜYÜYEMEZ. Bunun EN TEMEL NEDENİ nedir?',
        options: [
          { id: 'A', text: 'Canlıların çok kısa ömürlü olması' },
          { id: 'B', text: 'Doğadaki kaynakların (besin, alan, su) SINIRLI OLMASI' },
          { id: 'C', text: 'Üremenin yasak olması' },
          { id: 'D', text: 'Güneşin yetersiz olması' },
          { id: 'E', text: 'Tüm hayvanların birbirini sevmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer kaynaklar sınırsız olsaydı, örneğin bakteriler birkaç günde Dünya\'yı kaplardı. Kaynak kısıtlaması, büyümeyi sınırlayan temel dayanaktır.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Bir bölgedeki komünitenin (örneğin yangın sonrası ormanın) zaman içinde SIRASIYLA (Ot → Çalı → Ağaç şeklinde) değişerek yeni türlerin eski türlerin yerini alması olayına ne denir?',
        options: [
          { id: 'A', text: 'Evrim' },
          { id: 'B', text: 'Madde Döngüsü' },
          { id: 'C', text: 'Süksesyon (Sıralı Değişim)' },
          { id: 'D', text: 'Mutasyon' },
          { id: 'E', text: 'Rekabet' }
        ],
        correctOptionId: 'C',
        explanation: 'Bozulmuş veya yeni oluşmuş bir alanda canlı topluluklarının zamanla birbirinin yerini almasına Süksesyon (ardıllık) denir.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Buzulların eridiği kayalık bir bölgede, ORTADA HİÇ TOPRAK YOKKEN ilk kez canlıların (Likenlerin) gelip toprağı oluşturmasıyla başlayan süksesyona ne ad verilir?',
        options: [
          { id: 'A', text: 'İkincil Süksesyon' },
          { id: 'B', text: 'Birincil (Primer) Süksesyon' },
          { id: 'C', text: 'Çevre Direnci' },
          { id: 'D', text: 'Klimaks' },
          { id: 'E', text: 'Denitrifikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer ortamda TOPRAK BİLE YOKSA (Lav akıntısı, buzul çekilmesi) ve yaşam sıfırdan başlıyorsa bu Birincil Süksesyondur.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Bir orman yangını veya tarla açılması sonucunda CANLILAR YOK OLSA BİLE, TOPRAĞIN YAPISININ KORUNDUĞU ve yaşamın hızlıca tekrar başladığı süksesyon türü hangisidir?',
        options: [
          { id: 'A', text: 'Birincil Süksesyon' },
          { id: 'B', text: 'İkincil (Sekonder) Süksesyon' },
          { id: 'C', text: 'Klimaks' },
          { id: 'D', text: 'Endemik' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'B',
        explanation: 'Toprak halihazırda varsa ve sadece üzerindeki yaşam bozulmuşsa (Yangın, sel, tarla), tohumlar ve kökler topraktan hızlıca fırlar. Buna İkincil Süksesyon denir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Süksesyon sürecinin sonunda, ortamın iklim ve toprak şartlarına EN UYGUN ve KARARLI (dengeli) komünite oluşur. Bu son ve kararlı evreye ne denir?',
        options: [
          { id: 'A', text: 'Klimaks' },
          { id: 'B', text: 'Saprofit' },
          { id: 'C', text: 'Pioner (Öncü)' },
          { id: 'D', text: 'Popülasyon' },
          { id: 'E', text: 'Biyom' }
        ],
        correctOptionId: 'A',
        explanation: 'Süksesyonun ulaştığı, değişimlerin yavaşladığı olgun orman (veya bozkır) haline Klimaks (doruk/kararlı hal) denir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Popülasyon dinamiklerinde (Büyüme Formülü); (Doğumlar + İçe Göçler) TOPLAMI, (Ölümler + Dışa Göçler) TOPLAMINA EŞİTSE popülasyonun durumu nasıldır?',
        options: [
          { id: 'A', text: 'Hızla büyüyordur' },
          { id: 'B', text: 'Yok oluyordur' },
          { id: 'C', text: 'Dengededir (Birey sayısı değişmez)' },
          { id: 'D', text: 'Mutasyona uğramıştır' },
          { id: 'E', text: 'Genişliyordur' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelen birey sayısı (Doğan+İçe göçen) = Giden birey sayısı (Ölen+Dışa göçen) ise sayı sabit kalır, denge (sıfır büyüme) vardır.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'S-tipi büyüme eğrisinde, popülasyon TAŞIMA KAPASİTESİNE yaklaştıkça büyüme hızı NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Sürekli hızlanır' },
          { id: 'B', text: 'Hiç değişmez' },
          { id: 'C', text: 'Önce hızlanır, sonra çevre direnci arttığı için YAVAŞLAR ve dengeye ulaşır' },
          { id: 'D', text: 'Birden sıfıra düşer ve hepsi ölür' },
          { id: 'E', text: 'Negatif olur' }
        ],
        correctOptionId: 'C',
        explanation: 'S tipi büyümede (Lojistik Büyüme) başlangıçta besin çoktur hızlı büyür. Kapasiteye yaklaştıkça besin azalır, hız düşer ve dengeye oturur.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'J-tipi (Üstel) büyüme eğrisinde ne DİKKAT ÇEKİCİDİR?',
        options: [
          { id: 'A', text: 'Dengeli olması' },
          { id: 'B', text: 'Sürekli azalması' },
          { id: 'C', text: 'Çevre direnci (engel) yokmuş gibi ÇOK HIZLI çoğalma olması ve kapasiteye ulaşmadan dengeye girmemesi' },
          { id: 'D', text: 'Sadece yaşlıların çoğalması' },
          { id: 'E', text: 'Sadece mantarlarda görülmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'J tipi büyüme, böceklerin istilası veya bakterilerin çoğalması gibi sınırsız besin bulduklarında yaptıkları "patlama" şeklindeki büyümedir.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Popülasyon" örneğidir?',
        options: [
          { id: 'A', text: 'Karadeniz\'deki Balıklar' },
          { id: 'B', text: 'Ormandaki Kuşlar' },
          { id: 'C', text: 'Toros Dağları\'ndaki Kızılçam Ağaçları' },
          { id: 'D', text: 'Göletteki Kurbağalar ve Sinekler' },
          { id: 'E', text: 'Sahradaki Sürüngenler' }
        ],
        correctOptionId: 'C',
        explanation: 'Popülasyon tanımı "Belli yer + AYNI TÜR" demektir. "Balıklar" veya "Kuşlar" geneldir (birçok türü kapsar). "Kızılçam ağacı (Pinus brutia)" ise tek bir türdür.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Bir komünitede, popülasyon yoğunluğunu etkileyen FİZİKSEL (Abiyotik) bir etken aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Avcı sayısı' },
          { id: 'B', text: 'Salgın hastalıklar' },
          { id: 'C', text: 'Rekabet edilen türler' },
          { id: 'D', text: 'İklim şartları (Sıcaklık ve Yağış)' },
          { id: 'E', text: 'Parazitler' }
        ],
        correctOptionId: 'D',
        explanation: 'Avcı, hastalık, parazit, rekabet biyotik (canlı) etkenlerdir. İklim (sıcaklık/yağış) ise cansız (fiziksel/abiyotik) etkendir.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Av - Avcı ilişkisinde (Örn: Vaşak ve Tavşan), tavşan sayısı ÇOK ARTARSA bir süre sonra Vaşak sayısı NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Vaşaklar azalır.' },
          { id: 'B', text: 'Vaşakların sayısı da besin bollaştığı için ARTAR.' },
          { id: 'C', text: 'Vaşaklar tavşan yemeyi bırakır.' },
          { id: 'D', text: 'Vaşaklar otçul olur.' },
          { id: 'E', text: 'Hiçbir değişim olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Av (tavşan) artarsa, onu yiyen avcı (vaşak) için yiyecek bollaşır, vaşaklar daha iyi beslenir ve ürer, sayıları artar. Sonra çok vaşak, tavşanları aşırı avlayıp azaltır (Dalgalanma).'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Bir popülasyonda YENİ DOĞAN ve GENÇ bireylerin sayısı, yaşlı bireylerden çok daha FAZLAYSA (Piramidin tabanı genişse), bu popülasyonun geleceği hakkında ne söylenebilir?',
        options: [
          { id: 'A', text: 'Yok olmaya mahkumdur.' },
          { id: 'B', text: 'Küçülen bir popülasyondur.' },
          { id: 'C', text: 'BÜYÜYEN (Gelişen) bir popülasyondur.' },
          { id: 'D', text: 'Dengede bir popülasyondur.' },
          { id: 'E', text: 'Çevre direnci sıfırdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tabanı (genç yaş grubu) geniş olan yaş piramitleri, yakın zamanda bu gençlerin üreme çağına girip nüfusu daha da artıracağını, yani büyüyen bir popülasyonu gösterir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Çevre Sorunları ve Sürdürülebilirlik',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Fosil yakıtların (kömür, petrol, doğalgaz) aşırı yakılması sonucu atmosferde CO2 ve Metan gazlarının artarak Güneş ışınlarını tutmasına (Dünyayı ısıtmasına) ne ad verilir?',
        options: [
          { id: 'A', text: 'Asit yağmurları' },
          { id: 'B', text: 'Sera Etkisi ve Küresel Isınma' },
          { id: 'C', text: 'Ötrofikasyon' },
          { id: 'D', text: 'Süksesyon' },
          { id: 'E', text: 'Erozyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Sera gazları (CO2, metan) atmosferde bir battaniye gibi davranarak dünyadan yansıyan ısıyı tutar ve yerkürenin ısınmasına neden olur.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Tarım ilaçları (DDT gibi) veya ağır metallerin (Cıva, Kurşun) besin zincirinde üst basamaklara çıkıldıkça DOKULARDA GİDEREK DAHA FAZLA BİRİKMESİ olayına ne denir?',
        options: [
          { id: 'A', text: 'Sera etkisi' },
          { id: 'B', text: 'Karbon ayak izi' },
          { id: 'C', text: 'Biyolojik Birikim (Biyomagnifikasyon)' },
          { id: 'D', text: 'Asit yağmuru' },
          { id: 'E', text: 'Denitrifikasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehirli maddeler suda çözünmez ve yağ dokusunda birikir. Her canlı, kendinden önceki canlıyı bolca yediği için zehri kendi vücudunda katlayarak biriktirir (Özellikle en üst tüketici aslan veya insanda çok olur).'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Evsel atık sularının ve azotlu-fosforlu tarım gübrelerinin göllere karışması sonucu, SUDAN FAYDALANAN ALGLERİN AŞIRI ÇOĞALARAK gölün yüzeyini yeşile boyaması olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Küresel Isınma' },
          { id: 'B', text: 'Ötrofikasyon' },
          { id: 'C', text: 'Erozyon' },
          { id: 'D', text: 'Ozon delinmesi' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Besin kirliliği (fosfor/azot) su yüzeyinde alg patlamasına (Ötrofikasyon) neden olur. Bu durum ışığı keser, alttaki bitkileri öldürür ve sudaki oksijeni bitirerek balık ölümlerine yol açar.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Bireylerin veya toplumların tüketimleri ve atıkları için İHTİYAÇ DUYDUKLARI DOĞA PARÇASINA (toprak ve su alanına) verilen isim hangisidir?',
        options: [
          { id: 'A', text: 'Sera gazı' },
          { id: 'B', text: 'Biyosfer' },
          { id: 'C', text: 'Ekolojik Ayak İzi' },
          { id: 'D', text: 'Karbon döngüsü' },
          { id: 'E', text: 'Ozon tabakası' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir insanın yaşamak, tüketmek ve ürettiği atığı temizlemek için ihtiyaç duyduğu biyolojik olarak verimli toplam alana Ekolojik Ayak İzi denir.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Bir ülkenin Ekolojik Ayak İzi, o ülkenin Biyokapasitesinden (doğanın kendini yenileme kapasitesinden) BÜYÜKSE bu durum neyi ifade eder?',
        options: [
          { id: 'A', text: 'Ülkenin doğayla uyum içinde yaşadığını' },
          { id: 'B', text: 'Sürdürülemez bir durum olduğunu (Doğayı kapasitesinden hızlı tükettiklerini)' },
          { id: 'C', text: 'Ormanların çok iyi korunduğunu' },
          { id: 'D', text: 'Hiç çevre sorunu olmadığını' },
          { id: 'E', text: 'Karbon ayak izinin sıfır olduğunu' }
        ],
        correctOptionId: 'B',
        explanation: 'Ayak izi (tüketim) > Biyokapasite (üretim) ise ekolojik açık var demektir, doğa yoksullaşmaktadır ve sürdürülemezdir.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Sanayi tesislerinden ve araç egzozlarından çıkan Kükürt Dioksit (SO2) ve Azot Oksit (NOx) gazlarının atmosferdeki su buharıyla birleşerek YERYÜZÜNE DÜŞMESİ olayına ne denir?',
        options: [
          { id: 'A', text: 'Asit Yağmurları' },
          { id: 'B', text: 'Kar yağışı' },
          { id: 'C', text: 'Sera etkisi' },
          { id: 'D', text: 'Ötrofikasyon' },
          { id: 'E', text: 'Su döngüsü' }
        ],
        correctOptionId: 'A',
        explanation: 'Bu gazlar su ile birleşince Sülfürik asit ve Nitrik aside dönüşerek Asit Yağmurları şeklinde ormanlara ve göllere zarar verir.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi "Sürdürülebilirlik" ilkesine UYGUN BİR DAVRANIŞTIR?',
        options: [
          { id: 'A', text: 'Sürekli tek kullanımlık plastik şişe almak' },
          { id: 'B', text: 'Ormanları tamamen kesip tarla yapmak' },
          { id: 'C', text: 'Atıkları kaynağında azaltmak, yeniden kullanmak ve geri dönüştürmek' },
          { id: 'D', text: 'Evsel atıkları doğrudan göle bağlamak' },
          { id: 'E', text: 'Fosil yakıt tüketimini artırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Sürdürülebilirlik; doğanın kaynaklarını, gelecek nesillere de bırakacak şekilde dikkatli ve döngüsel kullanmaktır.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Atmosferin üst katmanlarındaki OZON TABAKASININ en önemli faydası nedir?',
        options: [
          { id: 'A', text: 'Dünyayı ısıtmak' },
          { id: 'B', text: 'Oksijen üretmek' },
          { id: 'C', text: 'Güneşten gelen ZARARLI MORÖTESİ (UV) ışınları süzerek canlıları DNA hasarından korumak' },
          { id: 'D', text: 'Yağmur yağmasını sağlamak' },
          { id: 'E', text: 'Karbonu toprağa bağlamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Ozon (O3) tabakası bir güneş gözlüğü gibi davranarak radyasyonu süzer (Fakat sera gazlarıyla karıştırılmamalıdır, farklı konulardır).'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Endemik Tür kelimesinin ekolojideki karşılığı nedir?',
        options: [
          { id: 'A', text: 'Her yerde yaşayan tür' },
          { id: 'B', text: 'Sadece BİR BÖLGEYE ÖZGÜ, dünyanın başka hiçbir yerinde doğal olarak bulunmayan tür (Örn: Kangal köpeği, İnci kefali)' },
          { id: 'C', text: 'Soyu tükenmiş tür' },
          { id: 'D', text: 'Tarım zararlısı tür' },
          { id: 'E', text: 'Dışarıdan getirilmiş tür' }
        ],
        correctOptionId: 'B',
        explanation: 'Endemik türler dar yayılışlıdır ve koruma açısından çok kritiklerdir. Çünkü o bölgeden silinirlerse dünyadan silinirler.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Sadece birey bazında değil, Dünya genelinde Karbon Ayak İzini AZALTMAK İÇİN yapılabilecek EN BÜYÜK YAKLAŞIM hangisidir?',
        options: [
          { id: 'A', text: 'Daha çok kömür yakmak' },
          { id: 'B', text: 'Yenilenebilir enerji (Güneş, Rüzgar vb.) kaynaklarına geçiş yapmak' },
          { id: 'C', text: 'Tüm ormanları kesmek' },
          { id: 'D', text: 'Toplu taşıma yerine tek başına araba kullanmak' },
          { id: 'E', text: 'Fabrika bacalarına filtre takMAMAK' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon ayak izinin temel kaynağı fosil yakıtlardır. Yenilenebilir (temiz) enerji kullanımı bu sorunu temelden çözer.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Bir ülkenin doğal kaynaklarını, ormanlarını, madenlerini aşırı bir şekilde, DOĞANIN YENİLENME HIZINI BEKLEMEDEN Tüketmesine ne denir?',
        options: [
          { id: 'A', text: 'Sürdürülebilirlik' },
          { id: 'B', text: 'Erozyon kontrolü' },
          { id: 'C', text: 'Aşırı Tüketim (Kaynak sömürüsü)' },
          { id: 'D', text: 'Yeşil enerji' },
          { id: 'E', text: 'Biyolojik mücadele' }
        ],
        correctOptionId: 'C',
        explanation: 'Yenilenebilir kaynaklar bile (ormancılık, balıkçılık) üreme/yenilenme hızından daha hızlı hasat edilirse (aşırı tüketim) sistem çöker.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Zararlı böceklerle (örneğin yaprak bitleriyle) mücadele etmek için, TARIM İLACI (Kimyasal) SIKMAK YERİNE, o böceği yiyen UĞURBÖCEKLERİNİ tarlaya bırakmak yöntemine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kimyasal kirlilik' },
          { id: 'B', text: 'Sera etkisi' },
          { id: 'C', text: 'Biyolojik Mücadele' },
          { id: 'D', text: 'Yapay seçilim' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Zararlıyı yok etmek için doğanın kendi av-avcı ilişkisini kullanmaya (kimyasal olmadan) Biyolojik Mücadele denir. Sürdürülebilirdir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Doğal florada veya faunada (kendi halinde ormanda) SULAMA YA DA GÜBRELEME YAPILMAMASINA RAĞMEN bitkilerin gelişmeye devam edebilmesinin TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Bitkilerin cansız olması' },
          { id: 'B', text: 'Ayrıştırıcıların sürekli MADDE DÖNGÜSÜ sağlayarak toprağı (gübreyi) yenilemesi' },
          { id: 'C', text: 'Ormanların ilaçlanması' },
          { id: 'D', text: 'Taşların yenmesi' },
          { id: 'E', text: 'Hiçbirinin suya ihtiyacı olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal ekosistemler kapalı sistemlerdir. Ölüler çürür (ayrıştırıcılar sayesinde), inorganik maddeye döner, bitki bunu gübre olarak kullanır (Madde döngüsü).'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Atık yönetiminde "Öncelik (Hiyerarşi) Piramidine" göre EN İYİ (En Çevreci) adım hangisidir?',
        options: [
          { id: 'A', text: 'Oluşan atığı toprağa gömmek (Bertaraf)' },
          { id: 'B', text: 'Atığı yakarak enerji üretmek' },
          { id: 'C', text: 'Geri dönüşüm yapmak' },
          { id: 'D', text: 'ATIK OLUŞUMUNU BAŞTAN ÖNLEMEK (Kaynağında Azaltmak)' },
          { id: 'E', text: 'Çöpleri denize dökmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Geri dönüşüm iyidir fakat enerji harcatır. En iyisi o atığın, ambalajın veya ürünün hiç üretilmemesi (gereksiz tüketimin durdurulması) yani Önlemedir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Sulak alanların (Bataklıklar ve Göller) ekosistemdeki en kritik GÖREVİ (Hizmeti) nedir?',
        options: [
          { id: 'A', text: 'Otopark yapılmak için kurutulmak' },
          { id: 'B', text: 'Çok sayıda türe barınak olması, suyu filtreleyerek temizlemesi ve yeraltı sularını beslemesi (Doğanın böbrekleri)' },
          { id: 'C', text: 'Sadece sivrisinek üretmek' },
          { id: 'D', text: 'Sera gazı emisyonunu artırmak' },
          { id: 'E', text: 'Çölleşmeyi hızlandırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Sulak alanlar "Doğanın böbrekleri" gibidir. Taşkınları önler, suyu temizler ve olağanüstü zengin bir biyolojik çeşitliliğe ev sahipliği yapar.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Temel Döngüler ve İlişkiler',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Ekosistemde GÜNEŞ ENERJİSİNİ KİMYASAL ENERJİYE çeviren canlı grubuna ne denir?',
        options: [
          { id: 'A', text: 'Otçullar' },
          { id: 'B', text: 'Üreticiler (Fotosentetik canlılar)' },
          { id: 'C', text: 'Ayrıştırıcılar' },
          { id: 'D', text: 'Etçiller' },
          { id: 'E', text: 'Hepçiller' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler, algler ve bazı bakteriler fotosentez ile güneş enerjisini besin içindeki kimyasal bağ enerjisine çevirir.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Doğadaki (Atmosferdeki) oksijenin EN BÜYÜK KAYNAĞI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hayvanların solunumu' },
          { id: 'B', text: 'Kayaların aşınması' },
          { id: 'C', text: 'Üreticilerin (Bitki ve alglerin) fotosentez yapması' },
          { id: 'D', text: 'Mantarların çürümesi' },
          { id: 'E', text: 'Rüzgarlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez sırasında üreticiler (özellikle okyanuslardaki algler ve karadaki bitkiler) yan ürün olarak atmosfere oksijen verir.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Besin zincirinde "Bitki → Fare → Yılan → Kartal" sırası vardır. Bu zincirde 2. Tüketici (İkincil tüketici) kimdir?',
        options: [
          { id: 'A', text: 'Bitki' },
          { id: 'B', text: 'Fare' },
          { id: 'C', text: 'Yılan' },
          { id: 'D', text: 'Kartal' },
          { id: 'E', text: 'Güneş' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitki=Üretici. Fare=1.Tüketici (Otçul). Yılan=2.Tüketici (Fareyi yiyen etçil). Kartal=3.Tüketici.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Birbiriyle iç içe geçmiş, karmaşıklaşmış BİRDEN FAZLA besin zincirinin oluşturduğu sisteme ne ad verilir?',
        options: [
          { id: 'A', text: 'Besin Ağı' },
          { id: 'B', text: 'Besin Piramidi' },
          { id: 'C', text: 'Madde Döngüsü' },
          { id: 'D', text: 'Popülasyon' },
          { id: 'E', text: 'Habitat' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğada canlılar tek bir şey yemez veya tek bir canlıya yem olmaz. Zincirlerin bu şekilde örümcek ağı gibi birbirine girmesine Besin Ağı denir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Enerji piramidinde en fazla ENERJİ ve BİYOKÜTLE (Toplam canlı kütlesi) hangi basamakta bulunur?',
        options: [
          { id: 'A', text: 'En üstteki avcılarda (Kartal, Aslan vb.)' },
          { id: 'B', text: 'İkincil tüketicilerde' },
          { id: 'C', text: 'EN ALT TABAKADAKİ Üreticilerde (Bitkiler, algler vb.)' },
          { id: 'D', text: 'Sadece ayrıştırıcılarda' },
          { id: 'E', text: 'Parazitlerde' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada en büyük canlı kütlesi ve en büyük enerji tabanı üreticilere (ormanlar, otlar, algler) aittir. Yukarı çıkıldıkça hem enerji hem toplam kütle (Biyokütle) genelde azalır.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Ekosistemde karbon döngüsünün iki ANA MOTORU (karşıt tepkimeler) hangi hücresel olaylardır?',
        options: [
          { id: 'A', text: 'Süksesyon ve Rekabet' },
          { id: 'B', text: 'Fotosentez (Tüketir) ve Solunum (Üretir)' },
          { id: 'C', text: 'Buharlaşma ve Yoğuşma' },
          { id: 'D', text: 'Yıldırım ve Şimşek' },
          { id: 'E', text: 'Erozyon ve Heyelan' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez atmosferden CO2\'yi emer (Besin yapar), Solunum ise besini yakarak atmosfere geri CO2 verir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Aşağıdaki canlılardan hangisi İNORGANİK maddeleri (su ve karbondioksit) ORGANİK maddeye (şekere) çevirebilir?',
        options: [
          { id: 'A', text: 'Mantarlar' },
          { id: 'B', text: 'Aslanlar' },
          { id: 'C', text: 'Bitkiler' },
          { id: 'D', text: 'Şapkalı mantarlar' },
          { id: 'E', text: 'Kurbağalar' }
        ],
        correctOptionId: 'C',
        explanation: 'İnorganikten organik besin sentezleme işi sadece üreticilere (Ototroflara) aittir (Bitkiler, siyanobakteriler, algler vb).'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Biyolojik birikim (zehir birikimi) besin piramidinde AŞAĞIDAN YUKARIYA DOĞRU çıkıldıkça nasıl değişir?',
        options: [
          { id: 'A', text: 'Sürekli AZALIR' },
          { id: 'B', text: 'Değişmez' },
          { id: 'C', text: 'Sürekli ARTAR' },
          { id: 'D', text: 'Önce azalır sonra artar' },
          { id: 'E', text: 'Tamamen sıfırlanır' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehir (örn: DDT) canlıda parçalanamaz. Küçük balığı yiyen büyük balık, ondaki tüm zehri alır. Büyük balığı yiyen kuş da tüm balıklardaki zehri biriktirir (Gittikçe artar).'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Besin piramidinde üreticilerden başlayıp son tüketiciye kadar her bir beslenme basamağına ne ad verilir?',
        options: [
          { id: 'A', text: 'Trofik Düzey (Beslenme Basamağı)' },
          { id: 'B', text: 'Popülasyon' },
          { id: 'C', text: 'Biyom' },
          { id: 'D', text: 'Habitat' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'A',
        explanation: 'Üreticiler 1. trofik düzey, otçullar 2. trofik düzey, etçiller 3. trofik düzeydir. "Trofik" = Beslenme demektir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Su döngüsünde yeraltı sularının oluşmasını sağlayan ana olay nedir?',
        options: [
          { id: 'A', text: 'Suların ısınması' },
          { id: 'B', text: 'Yağan yağmurun veya karın topraktan sızarak (süzülerek) aşağıya inmesi' },
          { id: 'C', text: 'Güneşin doğması' },
          { id: 'D', text: 'Terleme' },
          { id: 'E', text: 'Fotosentez' }
        ],
        correctOptionId: 'B',
        explanation: 'Su döngüsünde yağış toprağa düşer, sızarak (filtrasyon) yeraltı akiferlerini (sularını) besler.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Ozon tabakasının İNCELMESİNE (delinmesine) yol açan ana faktör (kimyasal) nedir?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Oksijen' },
          { id: 'C', text: 'CFC (Kloroflorokarbon) gazları (Eski tip spreyler ve soğutuculardan çıkan)' },
          { id: 'D', text: 'Su buharı' },
          { id: 'E', text: 'Azot gazı' }
        ],
        correctOptionId: 'C',
        explanation: 'Kloroflorokarbon (CFC) gazları, atmosferin üst katmanlarına çıkarak Ozon (O3) moleküllerini parçalayan ve tabakayı incelten temel kimyasallardır.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Tarımsal arazilerde aynı bitkinin yıllarca üst üste ekilmesi (Monokültür) toprakta ne gibi bir olumsuzluğa yol açar?',
        options: [
          { id: 'A', text: 'Toprağın daha da zenginleşmesine' },
          { id: 'B', text: 'Topraktaki belirli BİR MİNERALİN (örneğin sadece azotun) hızla tükenmesine ve toprağın fakirleşmesine' },
          { id: 'C', text: 'Ürünün kalitesinin sürekli artmasına' },
          { id: 'D', text: 'Bitkilerin daha çok fotosentez yapmasına' },
          { id: 'E', text: 'Toprakta suyun artmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli aynı bitkiyi ekmek (nöbetleşe ekim yapmamak), bitkinin sürekli aynı besini (minerali) çekmesine neden olur ve toprak o madde yönünden çoraklaşır.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Karbon döngüsü sırasında, yeraltında milyonlarca yıl kalmış ORGANİK kalıntıların ÇOK UZUN SÜRE SONRA atmosfere DÖNMESİ nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'Fotosentezle' },
          { id: 'B', text: 'Kömür, petrol, doğalgaz gibi FOSİL YAKITLARIN insan tarafından çıkarılıp YAKILMASIYLA (Yanma tepkimesiyle)' },
          { id: 'C', text: 'Solunumla' },
          { id: 'D', text: 'Çürümeyle' },
          { id: 'E', text: 'Terlemeyle' }
        ],
        correctOptionId: 'B',
        explanation: 'Fosil yakıtlar, döngü dışına çıkıp yeraltına kitlenmiş karbon depolarıdır. İnsanlar bunları yaktığında milyonlarca yıllık karbon bir anda havaya CO2 olarak verilir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Bir komünitede sayıca çok az olmalarına rağmen, EKOSİSTEMİN DENGESİ İÇİN HAYATİ ÖNEM taşıyan (çıkarıldıklarında tüm sistemin çöktüğü) türlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Kilit Taşı (Kilit) Türler' },
          { id: 'B', text: 'İstilacı Türler' },
          { id: 'C', text: 'Göçmen Türler' },
          { id: 'D', text: 'Parazitler' },
          { id: 'E', text: 'Mantarlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Tıpkı bir kemerin ortasındaki "Kilit Taşı" gibi, doğada (örneğin deniz samuru) bu türler ekosistemin mimarıdır. Yok olurlarsa komünite dağılır.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Farklı bir ekosistemden İNSAN ELİYLE getirilip yeni bir yere bırakılan, doğal avcısı olmadığı için HIZLA ÇOĞALIP yerli türleri yok eden (Örn: Balon balığı) türlere ne denir?',
        options: [
          { id: 'A', text: 'Endemik Tür' },
          { id: 'B', text: 'Kilit Taşı Tür' },
          { id: 'C', text: 'İstilacı (Yabancı) Tür' },
          { id: 'D', text: 'Pioner Tür' },
          { id: 'E', text: 'Avcı Tür' }
        ],
        correctOptionId: 'C',
        explanation: 'İstilacı türler (Alien/Invasive species), doğal düşmanlarının olmadığı yeni ortamlara girdiklerinde kontrolsüzce çoğalarak ekosistemi mahvederler.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Ekolojik Organizasyon ve Madde Döngüleri',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Bir ormandaki (A) Baykuş popülasyonu ile (B) Meşe ağacı popülasyonu, AYNI HABİTATI paylaşmaktadır. Bu iki popülasyon BİRLİKTE neyi oluşturur?',
        options: [
          { id: 'A', text: 'Aynı Türü' },
          { id: 'B', text: 'Ekosistemi' },
          { id: 'C', text: 'Komüniteyi' },
          { id: 'D', text: 'Biyomu' },
          { id: 'E', text: 'Süksesyonu' }
        ],
        correctOptionId: 'C',
        explanation: 'Farklı türlerin (Baykuş ve Meşe) popülasyonlarının bir araya gelmesiyle oluşan topluluğa Komünite denir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Biyotik ve abiyotik faktörlerin karşılıklı ilişkisini inceleyen bir araştırmacı asıl olarak AŞAĞIDAKİLERDEN HANGİSİNİ çalışıyordur?',
        options: [
          { id: 'A', text: 'Sadece Biyosfer' },
          { id: 'B', text: 'Ekosistem (Komünite + Abiyotik Çevre)' },
          { id: 'C', text: 'Sadece Popülasyon' },
          { id: 'D', text: 'Sadece Flora' },
          { id: 'E', text: 'Sadece Biyotik Etkenler' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlıların (biyotik) cansız çevreleriyle (abiyotik) etkileşimini içeren en temel ekolojik birim Ekosistemdir.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Işık (Güneş enerjisi) ekosistemlerde üreticiler tarafından yakalanır. Bu enerjinin GİDEREK AZALARAK bir üst trofik düzeye aktarılmasının TEMEL FİZİKSEL YASASI nedir?',
        options: [
          { id: 'A', text: 'Yerçekimi Kanunu' },
          { id: 'B', text: 'Termodinamiğin Kuralları (Enerjinin büyük kısmının her dönüşümde ISIL ENERJİ olarak kaybedilmesi)' },
          { id: 'C', text: 'Kütlenin Korunumu' },
          { id: 'D', text: 'Eylemsizlik Prensibi' },
          { id: 'E', text: 'Mendel Kalıtımı' }
        ],
        correctOptionId: 'B',
        explanation: 'Hiçbir enerji dönüşümü %100 verimli değildir. Canlı yediği besinin enerjisini iş yaparken kullanır ve ısınarak (ısı enerjisi olarak) ortama verir (%10 Kuralı).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Azot Döngüsünde GÖREV YAPAN "Nitrifikasyon Bakterileri" oksijeni kullanarak amonyağı oksitler ve kendilerine BESİN ÜRETİRLER. Bu canlıların BESLENME TİPİ nedir?',
        options: [
          { id: 'A', text: 'Fotosentetik Ototrof' },
          { id: 'B', text: 'Saprofit (Çürükçül)' },
          { id: 'C', text: 'Kemosentetik Ototrof (Kemo-ototrof)' },
          { id: 'D', text: 'Holozoik (Katı beslenen)' },
          { id: 'E', text: 'Parazit' }
        ],
        correctOptionId: 'C',
        explanation: 'Nitrifikasyon bakterileri (Nitrit ve Nitrat bakterileri) güneş ışığı yerine "İnorganik maddelerin oksidasyonundan" doğan enerjiyi kullanarak besin üretir (Kemosentez).'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Bir göl ekosistemine FABRİKALARDAN (veya lağımdan) AĞIR METALLER (Örn: Kurşun, Cıva) karışırsa, bu göldeki HANGİ CANLI grubunun DOKULARINDA en yüksek derişimde (yoğunlukta) ağır metal birikir?',
        options: [
          { id: 'A', text: 'Su (Cansız olduğu için)' },
          { id: 'B', text: 'Üreticiler (Algler)' },
          { id: 'C', text: 'Otçul balıklar' },
          { id: 'D', text: 'Besin zincirinin en tepesindeki BÜYÜK YIRTICI balıklar (veya o balığı yiyen balıkçıl kuşlar)' },
          { id: 'E', text: 'Sadece ayrıştırıcılar' }
        ],
        correctOptionId: 'D',
        explanation: 'Ağır metaller yağ dokuda kalır ve atılamaz. Bu yüzden en çok yiyen (en üstteki) yırtıcıda konsantrasyonu en yüksek değere ulaşır (Biyolojik birikim).'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Doğadaki karbonun (CO2) denizlerde bağlandığı BÜYÜK DEPO neresidir?',
        options: [
          { id: 'A', text: 'Kömür yatakları' },
          { id: 'B', text: 'Kireç taşı (Kalsiyum Karbonat) tortuları ve Suda çözünmüş Bikarbonat iyonları' },
          { id: 'C', text: 'Plastik atıklar' },
          { id: 'D', text: 'Ozon tabakası' },
          { id: 'E', text: 'Bulutlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Okyanuslar dünyanın en büyük karbon lavabosudur (yutağıdır). CO2 suda çözünür ve ayrıca midye, mercan gibi canlıların kabuklarında kireçtaşına (CaCO3) dönüşür.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Aşağıdaki kavramlardan hangisi bir türün ekosistemdeki "FONKSİYONEL (İşlevsel) ROLÜNÜ" en iyi tanımlar?',
        options: [
          { id: 'A', text: 'Habitat' },
          { id: 'B', text: 'Biyokütle' },
          { id: 'C', text: 'Ekolojik Niş' },
          { id: 'D', text: 'Taşıma kapasitesi' },
          { id: 'E', text: 'Ekotom' }
        ],
        correctOptionId: 'C',
        explanation: 'Niş; canlının ne yediği, kime av olduğu, su kullanım oranı, gölge yapması vb. tüm ekolojik "işlerini" kapsar.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Bitkiler azot ihtiyacını genellikle topraktan NİTRAT (NO3-) şeklinde karşılarlar. Bitki bu nitratı alıp hücresinde HANGİ ORGANİK MOLEKÜLLERİ sentezler?',
        options: [
          { id: 'A', text: 'Sadece Yağ (Lipit)' },
          { id: 'B', text: 'Sadece Glikoz (Şeker)' },
          { id: 'C', text: 'Amino asitler (Proteinler), Nükleotidler (DNA/RNA) ve Vitaminler' },
          { id: 'D', text: 'Kalsiyum kristalleri' },
          { id: 'E', text: 'Sadece Selüloz' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbonhidrat ve yağlarda C, H, O vardır. Azot (N); Proteinlerin (amino asit), nükleik asitlerin (DNA/RNA) ve ATP\'nin yapısı için ZORUNLUDUR.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Orman ekosisteminde (Karada) besin piramidinin İKİNCİ TROFİK DÜZEYİNDE (Basamağında) kimler bulunur?',
        options: [
          { id: 'A', text: 'Otlar ve ağaçlar (Üreticiler)' },
          { id: 'B', text: 'Birincil Tüketiciler (Otçullar / Herbivorlar)' },
          { id: 'C', text: 'İkincil Tüketiciler (Etçiller)' },
          { id: 'D', text: 'Üçüncül Tüketiciler (Yırtıcılar)' },
          { id: 'E', text: 'Saprofitler' }
        ],
        correctOptionId: 'B',
        explanation: '1. Düzey: Üreticiler. 2. Düzey: Onları yiyen Otçullar (Birincil tüketici). Tüketici sırası ile Trofik Düzey sırası BİR KAYAR (Dikkat!).'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi MADDE DÖNGÜLERİNİN sürdürülebilmesi için ekosistemde ZORUNLU OLAN BİYOLOJİK bir gruptur?',
        options: [
          { id: 'A', text: 'Aslanlar (Tepe Avcı)' },
          { id: 'B', text: 'Ayrıştırıcılar (Çürükçüller / Saprofitler)' },
          { id: 'C', text: 'Otçullar (Birincil Tüketici)' },
          { id: 'D', text: 'Kemirgenler' },
          { id: 'E', text: 'Kuşlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekosistemde otçul veya etçil olmazsa sistem bir süre dengesizleşse de çalışabilir. Ancak "Üreticiler" ve "Ayrıştırıcılar" (Ölüyü inorganiğe çevirenler) olmazsa Madde Döngüsü KİLİTLENİR ve yaşam biter.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Ekosistemlerde Karbon Döngüsünü İNSANIN EN ÇOK BOZDUĞU Olay nedir?',
        options: [
          { id: 'A', text: 'Oksijenli solunum yapması' },
          { id: 'B', text: 'Ağaç dikmesi' },
          { id: 'C', text: 'Kömür ve Petrol (Fosil Yakıtlar) yakarak atmosfere çok kısa sürede muazzam CO2 pompalaması' },
          { id: 'D', text: 'Nefes tutması' },
          { id: 'E', text: 'Kireçtaşı kırması' }
        ],
        correctOptionId: 'C',
        explanation: 'Milyonlarca yılda toprak altına hapsolmuş Karbonu (Fosil yakıt), insanlar 100 yıl gibi (evrimsel açıdan saniyelik) çok kısa bir sürede yakarak doğanın dengesini (Sera Etkisi) bozmuştur.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Şimşek ve Yıldırım gibi çok yüksek enerjili doğa olaylarının, Azot (N2) Döngüsündeki görevi nedir?',
        options: [
          { id: 'A', text: 'Azotu yakıp yok etmek' },
          { id: 'B', text: 'Topraktaki azotu havaya uçurmak (Denitrifikasyon)' },
          { id: 'C', text: 'Havadaki bağları çok güçlü (N≡N) olan Azot gazını parçalayarak, suyla birleştirip toprağa "NİTRAT/NİTRİT" Olarak düşmesini (Abiyotik Fiksasyon) sağlamak' },
          { id: 'D', text: 'Amonyak oluşturmak' },
          { id: 'E', text: 'Bitkileri çarpmak' }
        ],
        correctOptionId: 'C',
        explanation: 'N2 gazındaki üçlü bağı kırmak zordur. Şimşek çaktığında enerji bu bağı kırar, yağmurla birleşen azot toprağa gübre (nitrat) olarak iner.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Denitrifikasyon bakterilerinin (Topraktaki nitratı havaya Azot gazı olarak veren bakteriler) ekolojik açıdan ÖNEMİ nedir?',
        options: [
          { id: 'A', text: 'Toprağı çok verimli yapması' },
          { id: 'B', text: 'Atmosferdeki %78\'lik AZOT GAZI miktarının SABİT KALMASINI (tükenmemesini) sağlaması' },
          { id: 'C', text: 'Oksijen üretmesi' },
          { id: 'D', text: 'Besin zincirini başlatması' },
          { id: 'E', text: 'Karbondioksiti emmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Herkes toprağa azot bağlasaydı, havadaki azot biterdi. Döngünün tamamlanıp havadaki deponun sabit kalması Denitrifikasyon ile olur.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Bir komünitede iki tür arasında AYNI KAYNAK (Besin veya Alan) için yaşanan çekişmeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Av-Avcı ilişkisi' },
          { id: 'B', text: 'Simbiyoz' },
          { id: 'C', text: 'Rekabet (Kompitisyon)' },
          { id: 'D', text: 'Süksesyon' },
          { id: 'E', text: 'Amensalizm' }
        ],
        correctOptionId: 'C',
        explanation: 'Aynı nişe sahip (aynı yemeği yiyen) iki tür bir araya geldiğinde kaçınılmaz olarak Rekabet başlar (Rekabetçi dışlanma ilkesi).'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Biyomlar (Büyük ekosistem tipleri; Çöl, Tundra, Tropikal Yağmur Ormanı vb.) Yeryüzünde GENELLİKLE NEYE GÖRE kuşaklar halinde dağılış gösterir?',
        options: [
          { id: 'A', text: 'Toprağın rengine göre' },
          { id: 'B', text: 'Hayvanların isteklerine göre' },
          { id: 'C', text: 'Enlem, İklim (Sıcaklık ve Yağış Ortalamaları) şartlarına göre' },
          { id: 'D', text: 'İnsanların sınır çizmesine göre' },
          { id: 'E', text: 'Güneşin büyüklüğüne göre' }
        ],
        correctOptionId: 'C',
        explanation: 'İklim (sıcaklık ve yağış) bitki örtüsünü belirler. Bitki örtüsü de biyomun ana karakteridir. Bu yüzden Ekvator\'dan Kutuplara doğru iklim değiştikçe Biyomlar da değişir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Popülasyon Dinamikleri',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Bir popülasyonun (S) büyüme eğrisinde, bireylerin ortama YENİ GİRDİĞİ ve alışmaya çalıştığı İLK EVREYE (Büyümenin henüz çok yavaş olduğu evre) ne ad verilir?',
        options: [
          { id: 'A', text: 'Logaritmik artış evresi' },
          { id: 'B', text: 'Negatif artış evresi' },
          { id: 'C', text: 'Kuruluş (Hazırlık / Lag) Evresi' },
          { id: 'D', text: 'Denge evresi' },
          { id: 'E', text: 'Çöküş evresi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir ortama yeni giren tür, önce besin bulmalı ve uyum sağlamalıdır. Birey sayısı az olduğundan üreme yavaştır. Buna Hazırlık (Kuruluş) evresi denir.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'S-Tipi (Lojistik) Büyüme Eğrisinde, ortam şartlarının en uygun olduğu, birey sayısının HIZLA KATLANARAK arttığı (eğrinin dikleştiği) evre hangisidir?',
        options: [
          { id: 'A', text: 'Kuruluş Evresi' },
          { id: 'B', text: 'Logaritmik (Üstel) Artış Evresi' },
          { id: 'C', text: 'Denge Evresi' },
          { id: 'D', text: 'Azalan Artış Evresi' },
          { id: 'E', text: 'Yok oluş evresi' }
        ],
        correctOptionId: 'B',
        explanation: 'Birey sayısı belli bir eşiği geçtiğinde (ve besin bolsa) üreme patlama yapar. Her birey yavru verdiğinde sayı 2-4-8-16 diye logaritmik katlanır.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Popülasyon Taşma Kapasitesine (K) YAKLAŞTIĞINDA birey sayısı artmaya DEVAM EDERKEN, "BÜYÜME HIZI" neden AZALIR (Negatif artış evresi)?',
        options: [
          { id: 'A', text: 'Herkes aniden öldüğü için' },
          { id: 'B', text: 'Doğumlar azalıp, ölümler arttığı için Çevre Direncinin (besin kıtlığı vb.) kendini göstermesi sebebiyle net büyüme hızı FREN YAPAR' },
          { id: 'C', text: 'Süksesyon bittiği için' },
          { id: 'D', text: 'İklime uyum sağlayamadıkları için' },
          { id: 'E', text: 'Hava soğuduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Mekan daralıp besin azalınca rekabet başlar. Ölüm hızı artar, doğum hızı düşer. Nüfus hala artsa da, ARTIŞ "HIZI" (ivmesi) düşer.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'S-tipi eğrinin EN SONUNDA Popülasyonun Taşıma Kapasitesi etrafında hafif dalgalanmalar yaparak KALDIĞI evreye ne denir?',
        options: [
          { id: 'A', text: 'Logaritmik evre' },
          { id: 'B', text: 'Hazırlık evresi' },
          { id: 'C', text: 'Denge Evresi' },
          { id: 'D', text: 'Çöküş evresi' },
          { id: 'E', text: 'Süksesyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Taşıma kapasitesine ulaşan popülasyonda Doğum ≈ Ölüm olur. Nüfus kapasite çizgisi etrafında minik dalgalanmalarla (Denge) sürer.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Çevre Direnci (Besin kıtlığı, alan darlığı, zehir birikimi vb.) popülasyon yoğunluğu ARTTIKÇA mı daha çok etki eder, AZALDIKÇA mı?',
        options: [
          { id: 'A', text: 'Azaldıkça daha çok etki eder.' },
          { id: 'B', text: 'Yoğunluğa bağlı değildir.' },
          { id: 'C', text: 'Popülasyon Yoğunluğu ARTTIKÇA etki (baskı) daha da şiddetlenir (Yoğunluğa bağlı faktörler).' },
          { id: 'D', text: 'Sadece gündüzleri etki eder.' },
          { id: 'E', text: 'Ters orantılıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir adada 10 tavşan varken besin kıtlığı yoktur (çevre direnci az). 10.000 tavşan olunca salgın hastalık ve besin kıtlığı (çevre direnci) çok şiddetli hale gelir.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Orman yangını, Deprem, Sel, Sert bir Kış gibi Abiyotik faktörler popülasyonu aniden öldürebilir. Bu gibi felaketlerin popülasyona etkisi "Yoğunlukla" İLİŞKİLİ MİDİR?',
        options: [
          { id: 'A', text: 'Evet, sadece çok kalabalıklarsa ölürler.' },
          { id: 'B', text: 'Hayır, bu tür faktörler "Yoğunluktan Bağımsız" faktörlerdir (Tavşan sayısı 10 da olsa 10 bin de olsa orman yanarsa hepsi ölür).' },
          { id: 'C', text: 'Evet, yangın yoğunluk arttıkça çıkar.' },
          { id: 'D', text: 'Yangın biyotik bir faktördür.' },
          { id: 'E', text: 'Sadece denge evresinde etki eder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hastalık, rekabet = Yoğunluğa bağlı (kalabalıkla artan) çevre dirençleridir. İklim olayları ve afetler = Yoğunluktan BAĞIMSIZ faktörlerdir.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'İnsan popülasyonunda veya büyük memelilerde "Hayatta Kalma Eğrisi" nasıldır? (Tip 1 Eğrisi)',
        options: [
          { id: 'A', text: 'Doğan binlerce yavrunun çoğu hemen ölür, çok azı yaşlanır (Balık/Böcek gibi)' },
          { id: 'B', text: 'Doğan yavruların ölüm oranı çok düşüktür (Anne bakımı vardır), bireylerin ÇOĞU YAŞLILIK DÖNEMİNE (Maksimum ömre) KADAR yaşar, sonra hızla ölür.' },
          { id: 'C', text: 'Ölüm oranı her yaşta sabittir (Kuşlar gibi).' },
          { id: 'D', text: 'Yavrular anneyi yer.' },
          { id: 'E', text: 'İnsanlar hiç ölmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gelişmiş memelilerde az yavru olur ama yavru bakımı vardır. Bebek ölümü düşüktür (Tip 1 Hayatta kalma eğrisi).'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Balıklar, İstiridyeler ve Böcekler genelde milyonlarca yumurta yapar ancak hiçbirine bakmazlar. Çoğu yavru daha ilk günlerde yem olur (Tip 3 Eğrisi). Bu canlıların "Stratejisi" nedir?',
        options: [
          { id: 'A', text: 'Az yavru, çok bakım (K Stratejisi)' },
          { id: 'B', text: 'Çok sayıda yavru üreterek İÇLERİNDEN BİRKAÇ TANESİNİN ŞANS ESERİ hayatta kalmasını sağlamak (r-Stratejisi)' },
          { id: 'C', text: 'Hiç ürememek' },
          { id: 'D', text: 'Yavruları korumak' },
          { id: 'E', text: 'Yavruları emzirmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Buna nicelik (sayı) stratejisi denir. Bakım sıfırdır, yatırım sadece çok sayıdadır. (r-seçilimli türler).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Bir ülkenin yaş piramidinde "0-14" yaş grubundaki birey sayısı DİĞER TÜM GRUPLARDAN çok daha fazlaysa (Üçgen Piramit), bu ülke nüfusu için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Gelişmiş, yaşlı ve daralan bir nüfustur.' },
          { id: 'B', text: 'Dengeli (Sıfır büyüme) nüfustur.' },
          { id: 'C', text: 'Gelişmekte olan, doğum oranının YÜKSEK OLDUĞU ve HIZLA BÜYÜYEN bir nüfustur.' },
          { id: 'D', text: 'Doğum hızı ölüm hızından azdır.' },
          { id: 'E', text: 'Sadece yaşlılar yaşamaktadır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tabanı geniş üçgen şeklindeki yaş piramitleri, çok sayıda çocuğun doğduğunu ve gelecekte nüfusun patlayacağını (hızla artacağını) gösterir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Ekolojide "Dağılım Modelleri" üçe ayrılır: Kümeli, Düzenli, Rastgele. KURTLARIN sürüler halinde avlanması, BALIKLARIN dev sürüler oluşturması HANGİ DAĞILIM tipine örnektir?',
        options: [
          { id: 'A', text: 'Düzenli Dağılım' },
          { id: 'B', text: 'Rastgele (Tesadüfi) Dağılım' },
          { id: 'C', text: 'Kümeli Dağılım (Sosyal veya Besine odaklı)' },
          { id: 'D', text: 'Doğrusal Dağılım' },
          { id: 'E', text: 'Dairesel Dağılım' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada en sık görülen (insanlar dahil) dağılımdır. Bireyler korunmak, avlanmak veya su kaynağı etrafında bir araya gelmek için "kümeler" (sürüler) oluştururlar.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Kral penguenler yuvalarını KURARKEN birbirlerini gagalayarak HERKESİN ARASINDA EŞİT (STANDART) BİR MESAFE bırakırlar. Bu ne tür bir Dağılım Modelidir?',
        options: [
          { id: 'A', text: 'Kümeli' },
          { id: 'B', text: 'Düzenli (Tekdüze / Üniform) Dağılım (Sert alan savunması sonucu)' },
          { id: 'C', text: 'Rastgele' },
          { id: 'D', text: 'Zikzaklı' },
          { id: 'E', text: 'Karmakarışık' }
        ],
        correctOptionId: 'B',
        explanation: 'Bireyler arasında çok sert rekabet veya "alan (bölge) savunması" varsa, herkes diğerinden eşit mesafede uzak durur. Düzenli dağılım ortaya çıkar.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Rüzgarla taşınan Karahindiba tohumları, nereye düşerse orada filizlenir. Bireyler birbirlerini NE ÇEKER NE DE İTERLER. Bu hangi dağılım tipidir?',
        options: [
          { id: 'A', text: 'Rastgele (Tesadüfi) Dağılım' },
          { id: 'B', text: 'Kümeli Dağılım' },
          { id: 'C', text: 'Düzenli Dağılım' },
          { id: 'D', text: 'Piramit Dağılımı' },
          { id: 'E', text: 'Yatay Dağılım' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğada en az görülenidir. Bireyler arasında etkileşim yoktur, toprak her yerde aynı kalitededir, tohum rüzgarla nereye düşerse orada (rastgele) büyür.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Doğada iki FARKLI TÜRÜN (Örn: Paramesyum aurelia ile Paramesyum caudatum) AYNI KABA (Aynı nişe) koyulduğunda, birinin diğerini rekabette yenip yok etmesi İLKESİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Doğal Seçilim' },
          { id: 'B', text: 'Rekabetçi Dışlanma (Gause İlkesi)' },
          { id: 'C', text: 'Simbiyoz' },
          { id: 'D', text: 'Taşıma kapasitesi' },
          { id: 'E', text: 'Kaynak paylaşımı' }
        ],
        correctOptionId: 'B',
        explanation: 'İki türün ekolojik nişi (işi ve besini) tamamen aynıysa, aynı ortamda sonsuza kadar yaşayamazlar. Biri mutlaka diğerini eler (Dışlar).'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Rekabeti azaltmak (beraber yaşayabilmek) için türlerin AĞACIN FARKLI DALLARINDA beslenmeyi tercih etmesi veya BİRİNİN GÜNDÜZ DİĞERİNİN GECE avlanması stratejisine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kaynak Paylaşımı (Niş Bölünmesi)' },
          { id: 'B', text: 'Parazitlik' },
          { id: 'C', text: 'Dışlanma' },
          { id: 'D', text: 'Mutualizm' },
          { id: 'E', text: 'Amensalizm' }
        ],
        correctOptionId: 'A',
        explanation: 'Türler yok olmamak için alışkanlıklarını biraz değiştirirler (Kimi gündüz avlanır, kimi ağacın üst yapraklarını yer). Bu "Kaynak Paylaşımı" türlerin beraber yaşamasını sağlar (Karakter Kayması).'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Parazit ile Avcı arasındaki EN BELİRGİN FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynı şeydir.' },
          { id: 'B', text: 'Avcı avını ANINDA ÖLDÜRÜP yer. Parazit ise KONAĞININ ÜZERİNDE YAŞAR, ondan beslenir ama onu HEMEN ÖLDÜRMEK İSTEMEZ (Ölürse kendi evi yok olur).' },
          { id: 'C', text: 'Parazitler her zaman daha büyüktür.' },
          { id: 'D', text: 'Avcılar bitki yer.' },
          { id: 'E', text: 'Parazitler fayda sağlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Avcı (Aslan) avını saniyeler içinde öldürür. Parazit (Kene/Tenya) konağına yerleşir, sömürür ama yaşatarak sömürmeyi (uzun süre) tercih eder.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Besin Ağları, Biyomlar ve Sürdürülebilirlik',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bir ormanda, Çam Ağaçları ile Meşe Ağaçları topraktaki SU ve MİNERALLERİ almak için birbirleriyle nasıl bir etkileşime girerler?',
        options: [
          { id: 'A', text: 'Av - Avcı' },
          { id: 'B', text: 'Türler Arası (İntersesifik) Rekabet' },
          { id: 'C', text: 'Tür İçi Rekabet' },
          { id: 'D', text: 'Simbiyoz' },
          { id: 'E', text: 'Parazitlik' }
        ],
        correctOptionId: 'B',
        explanation: 'İki FARKLI TÜR (Çam ve Meşe) aynı kaynak (su/ışık) için kapışıyorsa bu Türler Arası Rekabettir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Bir tarladaki AYNI TÜR buğday bitkilerinin topraktaki suyu almak için birbirleriyle kapışması ne tür bir etkileşimdir?',
        options: [
          { id: 'A', text: 'Türler Arası Rekabet' },
          { id: 'B', text: 'Tür İçi (İntraspesifik) Rekabet' },
          { id: 'C', text: 'Avlanma' },
          { id: 'D', text: 'Yamyamlık' },
          { id: 'E', text: 'Mutualizm' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı türden bireylerin (Buğday-Buğday veya Aslan-Aslan) eş, besin veya alan için çatışması Tür İçi Rekabettir ve her zaman EN ŞİDDETLİ olandır (Çünkü nişleri %100 aynıdır).'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Biyomlar (Büyük Ekosistemler) Karasal ve Su Sucul Biyomlar olmak üzere ayrılır. SUCUL BİYOMLARIN (Deniz ve Göller) dünyada EN BÜYÜK (Küresel) etkiyi yapma SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'İçlerinde balık olması' },
          { id: 'B', text: 'Dünya yüzeyinin %70\'ini (Çok büyük bir kısmını) kaplamaları ve İKLİMLERİ (buharlaşma ve ısı tutma ile) KONTROL ETMELERİ' },
          { id: 'C', text: 'Çok tuzlu olmaları' },
          { id: 'D', text: 'Ağaç yetişmemesi' },
          { id: 'E', text: 'Tatlı su barındırmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Okyanuslar devasa ısı depolarıdır ve algler sayesinde en büyük oksijen/karbon yutağıdır. Küresel iklimi ve yaşamı sucul biyomlar dengeler.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Karasal biyomların isimlendirilmesinde TEMEL ALINAN KRİTER nedir? (Örn: Çöl, İğne Yapraklı Orman, Otlak)',
        options: [
          { id: 'A', text: 'Baskın Bitki Örtüsü' },
          { id: 'B', text: 'Oradaki hayvan sayısı' },
          { id: 'C', text: 'Toprağın rengi' },
          { id: 'D', text: 'İnsan nüfusu' },
          { id: 'E', text: 'Güneşin açısı' }
        ],
        correctOptionId: 'A',
        explanation: 'Karasal ekosistemler (biyomlar) her zaman oraya hakim olan, manzarayı oluşturan Baskın (Klimaks) Bitki Örtüsü (Orman, Çöl, Çayır) ile isimlendirilir.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Biyolojik çeşitliliğin (Tür zenginliğinin) DÜNYA ÜZERİNDE EN YÜKSEK OLDUĞU Karasal Biyom hangisidir?',
        options: [
          { id: 'A', text: 'Tundra (Buzullar)' },
          { id: 'B', text: 'Çöl' },
          { id: 'C', text: 'Tropikal Yağmur Ormanları' },
          { id: 'D', text: 'Tayga (İğne yapraklı ormanlar)' },
          { id: 'E', text: 'Ilıman Çayırlar (Bozkır)' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekvator çevresindeki Tropikal Ormanlar, hem sıcaklığın hem suyun yıl boyu ideal olması sebebiyle devasa bir fotosentez ve canlılık (Tüm türlerin %50\'si) barındırır.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Ekolojik sorunlarda kullanılan "Karbon Ayak İzi" ile "Su Ayak İzi" kavramları neden FARKLI HESAPLANIR?',
        options: [
          { id: 'A', text: 'Sadece su temizdir.' },
          { id: 'B', text: 'Biri doğrudan CO2 emisyonunu (Enerji/Ulaşım), Diğeri ise bir malı (Örn: 1 kg pamuk veya et) üretmek için harcanan GÖRÜNMEZ SUYU (Sanal su) ölçer.' },
          { id: 'C', text: 'Karbon sadece kömürde vardır.' },
          { id: 'D', text: 'İkisi de aynı anlama gelir.' },
          { id: 'E', text: 'Karbon ayak izi sadece bitkiler içindir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon ayak izi iklim değişikliğini, Su ayak izi (Mavi, Yeşil, Gri su) ise tatlı su kaynaklarımızın tüketimini gösterir. Bir tişört üretmek için (pamuğun sulanması vb.) 2700 litre su harcanır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Sera Etkisinin DÜNYA İÇİN doğal haliyle (Sanayi devriminden önce) ASLINDA GEREKLİ BİR ŞEY OLMASININ nedeni nedir?',
        options: [
          { id: 'A', text: 'Bitkileri zehirlemesi' },
          { id: 'B', text: 'Dünyayı tamamen buz tutmaktan kurtararak, YAŞANABİLİR BİR ORTALAMA SICAKLIKTA (+15°C) tutması' },
          { id: 'C', text: 'Suyu kaynatması' },
          { id: 'D', text: 'Ozon tabakasını delmesi' },
          { id: 'E', text: 'Güneş patlamalarını durdurması' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal sera etkisi olmasaydı (atmosfer ısıyı hiç tutmasaydı) Dünya -18°C donmuş bir gezegen olurdu. Sorun, insanların aşırı CO2 ile bu battaniyeyi "çok kalınlaştırmasıdır" (Küresel Isınma).'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Erozyon (Toprağın su ve rüzgarla taşınması) DOĞAL BİR OLAYDIR. Fakat bunu hızlandıran ve "Afete" dönüştüren İNSAN KAYNAKLI en büyük hata nedir?',
        options: [
          { id: 'A', text: 'Çok bina yapmak' },
          { id: 'B', text: 'Güneş paneli kurmak' },
          { id: 'C', text: 'Ormanları, bitki örtüsünü TAHRİP EDEREK (Keserek) toprağın kökler tarafından tutulmasını ENGELLEMEK' },
          { id: 'D', text: 'Baraj yapmak' },
          { id: 'E', text: 'Tarlalara ilaç sıkmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkilerin kökleri toprağı sünger ve ağ gibi tutar. Ormanı keser veya çayırı aşırı otlatırsanız çıplak kalan toprak ilk yağmurda kayar (Erozyon).'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Enerji Akışında %10 kuralına göre; Üreticilerde 10.000 kalori enerji varsa, Üçüncül Tüketiciye (4. Basamağa: Örn Yılan) YAKLAŞIK NE KADAR ENERJİ ULAŞIR?',
        options: [
          { id: 'A', text: '10.000 kalori' },
          { id: 'B', text: '1000 kalori' },
          { id: 'C', text: '10 kalori' },
          { id: 'D', text: '0 kalori' },
          { id: 'E', text: '100.000 kalori' }
        ],
        correctOptionId: 'C',
        explanation: 'Üretici (1.Basamak)=10.000 -> 1.Tüketici (2.B)=1.000 -> 2.Tüketici (3.B)=100 -> 3.Tüketici (Yılan / 4.Basamak)= 10 kalori. (Her adımda bir sıfır silinir, 1/10 kalır).'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Madde döngülerindeki "Rezervuarlar (Depolar)" vardır. AZOT DÖNGÜSÜNÜN en büyük deposu NERESİDİR?',
        options: [
          { id: 'A', text: 'Okyanuslar' },
          { id: 'B', text: 'Yeraltı kayaları' },
          { id: 'C', text: 'Atmosfer (Hava)' },
          { id: 'D', text: 'Canlıların vücudu' },
          { id: 'E', text: 'Ormanlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbonun deposu Denizler (veya kayaçlar), Suyun deposu Okyanuslar, AZOTUN DEPOSU ise %78 oranla ATMOSFER (Gaz hali) dir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Ormanların (ağaçların) dünyadaki KARBON dengesi üzerindeki temel görevi Yutağı (Sink) olmasıdır. Bu ne anlama gelir?',
        options: [
          { id: 'A', text: 'Karbonu havaya pompalarlar' },
          { id: 'B', text: 'Karbonu hiç kullanmazlar' },
          { id: 'C', text: 'Havadaki fazla CO2\'yi FOTOSENTEZLE alır ve ODUN/YAPRAK (Biyokütle) olarak uzun yıllar KENDİ İÇİNDE SAKLARLAR (Hapsederler)' },
          { id: 'D', text: 'Karbonu topraktan çekerler' },
          { id: 'E', text: 'Suyu karbona çevirirler' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir ağacın kütlesinin yarısı Karbondur. Ağaçlar havadan çektikleri gazı katı maddeye (oduna) çevirerek atmosferi temizleyen dev depolardır (Karbon Yutağı).'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Ekosistemde AYRIŞTIRICILARIN (Saprofitlerin) yok olması durumunda ilk yaşanacak KİLİTLENME ne olurdu?',
        options: [
          { id: 'A', text: 'Güneş enerjisi gelmezdi' },
          { id: 'B', text: 'Ölü canlılar çürümez, yeryüzü cesetlerle dolar ve bitkiler ihtiyaç duydukları MİNERALİ/GÜBREYİ bulamadıkları için fotosentez dururdu' },
          { id: 'C', text: 'Sular kururdu' },
          { id: 'D', text: 'Oksijen anında biterdi' },
          { id: 'E', text: 'Dünya donardı' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğanın çöp öğütücüleri olan ayrıştırıcılar durursa, madde (azot, karbon, kalsiyum vb.) ölü bedende hapis kalır, toprağa dönemez (Madde Döngüsü Kırılır).'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'İklim değişikliğini (Küresel ısınmayı) önlemeye yönelik ULUSLARARASI EN ÖNEMLİ (ve en bilindik) ANTLAŞMALAR hangi seçenekte bir aradadır?',
        options: [
          { id: 'A', text: 'Lozan ve Montrö' },
          { id: 'B', text: 'Kyoto Protokolü ve Paris İklim Anlaşması' },
          { id: 'C', text: 'Cenevre Sözleşmesi' },
          { id: 'D', text: 'NATO Antlaşması' },
          { id: 'E', text: 'Biyolojik Çeşitlilik Sözleşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kyoto (1997) ve Paris (2015) antlaşmaları, ülkelerin Karbon Emisyonlarını azaltmalarını hedefleyen, iklim değişikliği ile mücadelenin temel küresel belgeleridir.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Bir komünitede iki türün "Birlikte Evrimi (Co-evolution)" ne anlama gelir?',
        options: [
          { id: 'A', text: 'İkisinin aynı türe dönüşmesi' },
          { id: 'B', text: 'Sürekli etkileşimde olan iki türün (Örn: Çiçek ve onu tozlaştıran Arı, veya Çita ve Ceylan) BİRBİRLERİNE UYUM SAĞLAYARAK karşılıklı özellik geliştirmeleridir' },
          { id: 'C', text: 'İkisinin de aynı anda yok olması' },
          { id: 'D', text: 'Birinin diğerini tamamen yemesi' },
          { id: 'E', text: 'Aralarında hiçbir ilişki olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Ceylan hızlandıkça onu avlamak isteyen Çita da hızlanmak (veya aç kalmak) zorundadır. Bu "silahlanma yarışı" veya Çiçek/Böcek "karşılıklı uyumu" birlikte evrimdir.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Karbon döngüsü açısından okyanuslardaki FİTOPLANKTONLARIN (mikroskobik algler) ormanlara (ağaçlara) göre AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Çok büyük olmaları' },
          { id: 'B', text: 'Köklerinin derin olması' },
          { id: 'C', text: 'Sayılarının devasa olması, çok hızlı çoğalmaları ve DÜNYA FOTOSENTEZİNİN (ve oksijen üretiminin) %50\'sinden fazlasını tek başlarına yapmaları' },
          { id: 'D', text: 'Hiç su tüketmemeleri' },
          { id: 'E', text: 'Toprağa ihtiyaç duymaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Fitoplanktonlar miniktir ama okyanusların yüzeyini kaplarlar. Ormanlardan bile daha fazla oksijen üretir ve çok daha fazla Karbon (CO2) emerler.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Biyolojik Çeşitlilik ve Kirlilik Türleri',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Ekolojik Ayak İzini KÜÇÜLTMEK (doğaya daha az zarar vermek) isteyen bir birey aşağıdaki davranışlardan hangisini YAPMAMALIDIR?',
        options: [
          { id: 'A', text: 'Toplu taşıma kullanmak' },
          { id: 'B', text: 'Yerel ve mevsiminde üretilmiş gıdalar tüketmek' },
          { id: 'C', text: 'İhtiyacı olmayan eşyaları satın alarak AŞIRI TÜKETİM yapmak' },
          { id: 'D', text: 'Geri dönüştürülebilir ambalajları ayırmak' },
          { id: 'E', text: 'Evdeki ısı yalıtımını artırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Ayak izi tüketimle doğrudan ilgilidir. Gereksiz alınan her ürünün üretimi, lojistiği ve çöpe atılması için enerji (karbon) harcanır.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Karbon Ayak İzi, bir kişinin veya ülkenin doğrudan ve dolaylı olarak atmosfere saldığı hangi GAZI temsil eder?',
        options: [
          { id: 'A', text: 'Sadece Oksijen' },
          { id: 'B', text: 'Sera gazlarını (özellikle Karbondioksit - CO2)' },
          { id: 'C', text: 'Azot gazı' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Ozon' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon ayak izi, enerji tüketimi sonucu atmosfere bırakılan sera gazlarının (özellikle CO2 ve Metan) toplam eşdeğer miktarıdır.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Biyolojik çeşitliliğin (Tür zenginliğinin) yüksek olduğu bir ekosistem, zayıf (az tür barındıran) bir ekosisteme göre NEDEN DAHA GÜÇLÜDÜR?',
        options: [
          { id: 'A', text: 'Sadece daha güzel göründüğü için' },
          { id: 'B', text: 'Tür sayısı fazla olan ekosistemler, bir hastalık veya afet anında daha dirençlidir, bir tür yok olsa da diğerleri sistemi ayakta tutar (Denge ve Direnç)' },
          { id: 'C', text: 'Çok tür olduğu için çabuk çöker' },
          { id: 'D', text: 'Hiçbir canlı ölmediği için' },
          { id: 'E', text: 'Ozon tabakasını kalınlaştırdığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Çeşitlilik (Biyoçeşitlilik) ekosistemin sigortasıdır. Ağ karmaşıksa bir bağın kopması sistemi çökertmez. Monokültür (tek tip) ise çok kırılgandır.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Asit Yağmurlarının ormanlar ve göller üzerindeki en temel YIKICI ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'Suları dondurması' },
          { id: 'B', text: 'Topraktaki ve sudaki pH dengesini düşürerek zehirli metalleri (Alüminyum vb.) çözmesi ve bitki köklerini, balık solungaçlarını yakması' },
          { id: 'C', text: 'Bölgeyi çöle çevirmesi' },
          { id: 'D', text: 'Havayı temizlemesi' },
          { id: 'E', text: 'Ozon delmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Asit yağmuru toprağın kimyasını bozar. Hem bitki besin alamaz hale gelir hem de alüminyum gibi zehirler çözünerek göllere karışıp balıkları öldürür.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Evsel lağım sularının doğrudan akarsulara (nehirlere) verilmesi sonucu, nehirdeki OKSİJEN MİKTARI neden HIZLA DÜŞER?',
        options: [
          { id: 'A', text: 'Lağım sularındaki organik atıkları parçalayan Ayrıştırıcı (Saprofit) bakteriler AŞIRI ÇOĞALARAK sudaki oksijeni sonuna kadar tüketir' },
          { id: 'B', text: 'Oksijen kendiliğinden uçar' },
          { id: 'C', text: 'Balıklar çok nefes alır' },
          { id: 'D', text: 'Su çok ısınır' },
          { id: 'E', text: 'Güneş ışığı gelmez' }
        ],
        correctOptionId: 'A',
        explanation: 'Atık suda çok fazla organik madde (dışkı/besin) vardır. Bunu yiyen bakteriler patlama yapar, solunumları yüzünden sudaki oksijen (BOD) hızla biter.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Atmosferdeki sera gazları (CO2, Metan, Su Buharı) Yerküre etrafında bir kalkan oluşturarak NEYİ TUTAR ve dünyanın ısınmasına yol açar?',
        options: [
          { id: 'A', text: 'Güneşten gelen UV (Morötesi) ışınları' },
          { id: 'B', text: 'Dünyadan uzaya yansımaya çalışan UZUN DALGA BOYLUK KIZILÖTESİ (Isı) IŞINLARI' },
          { id: 'C', text: 'Oksijeni' },
          { id: 'D', text: 'Bulutları' },
          { id: 'E', text: 'Göktaşlarını' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş ışığı kısa dalgadır, seradan girer, yeri ısıtır. Yerden uzaya yansıyan ısı ise uzun dalgadır, sera gazlarına çarpar ve geri dönüp dünyayı ısıtır (Sera Etkisi).'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Bir ormanın YOK EDİLMESİ (Ağaçların kesilmesi) YEREL İKLİMİ nasıl etkiler?',
        options: [
          { id: 'A', text: 'İklim hiç değişmez' },
          { id: 'B', text: 'Yağışlar artar' },
          { id: 'C', text: 'Terleme (Transpirasyon) azalacağı için hava KURAKLAŞIR, nem düşer ve sıcaklık farkları artar' },
          { id: 'D', text: 'Kar yağışı artar' },
          { id: 'E', text: 'Her zaman sis olur' }
        ],
        correctOptionId: 'C',
        explanation: 'Ağaçlar yeraltından çektikleri tonlarca suyu yapraklarından buharlaştırarak (terleme) havaya nem katar (su döngüsü). Ağaç yoksa nem biter, çölleşme başlar.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Tarım arazilerinde aşırı SULAMA yapıldığında, su buharlaşıp uçar ancak içindeki MİNERALLER (tuzlar) toprakta kalır. Bu durum zamanla neye yol açar?',
        options: [
          { id: 'A', text: 'Toprağın Çoraklaşmasına (Tuzlanmasına) ve verimsizleşmesine' },
          { id: 'B', text: 'Toprağın çok zenginleşmesine' },
          { id: 'C', text: 'Bataklık oluşumuna' },
          { id: 'D', text: 'Sera etkisine' },
          { id: 'E', text: 'Ozon delinmesine' }
        ],
        correctOptionId: 'A',
        explanation: 'Bilinçsiz vahşi sulama, yeraltındaki tuzları yüzeye çeker. Su uçunca tuz kalır (Tuzlanma). Toprak çoraklaşır ve bitki yaşayamaz.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi doğrudan bir "SU KİRLİLİĞİ" göstergesidir?',
        options: [
          { id: 'A', text: 'Sudaki oksijenin (O2) bol olması' },
          { id: 'B', text: 'Sudaki balık çeşitliliğinin artması' },
          { id: 'C', text: 'Suda Koliform (Dışkı kaynaklı) bakterilerin ve Ağır metallerin bulunması' },
          { id: 'D', text: 'Suyun berrak olması' },
          { id: 'E', text: 'Dipteki kumun görünmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'E. coli gibi koliform bakteriler suya lağım karıştığının en net kanıtıdır. Ağır metaller ise sanayi kirliliğini gösterir.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Karbon döngüsü sürecinde atmosferdeki CO2 seviyesini DÜŞÜREN en etkili DOĞAL SÜREÇ hangisidir?',
        options: [
          { id: 'A', text: 'Yanardağ Patlamaları' },
          { id: 'B', text: 'Okyanuslardaki fitoplanktonların FOTOSENTEZ yapması' },
          { id: 'C', text: 'Orman yangınları' },
          { id: 'D', text: 'Kömür oluşumu' },
          { id: 'E', text: 'Toprağın aşınması' }
        ],
        correctOptionId: 'B',
        explanation: 'Dünyadaki karbonu en hızlı emen şey biyolojik pompadır. Fitoplanktonlar devasa oranlarda CO2 çekerek fotosentez yapar.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Azot döngüsünde BİTKİLER (ve dolayısıyla otçullar) azotu EN KOLAY HANGİ FORMDA (şekilde) alıp kullanabilirler?',
        options: [
          { id: 'A', text: 'Havadan doğrudan N2 (Azot gazı) olarak' },
          { id: 'B', text: 'Topraktaki Nitrat (NO3-) tuzları olarak' },
          { id: 'C', text: 'Protein olarak' },
          { id: 'D', text: 'Zehirli Amonyak (NH3) olarak' },
          { id: 'E', text: 'Karbondioksit (CO2) olarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler (çok az istisna dışında) havadaki gazı kullanamaz. Suda çözünmüş NO3- (Nitrat) formunda köklerinden emerler.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Pestisit (Tarım ilacı) kullanımının ekosisteme verdiğin EN BÜYÜK UZUN VADELİ zarar nedir?',
        options: [
          { id: 'A', text: 'Sadece zararlı böceği öldürmesi' },
          { id: 'B', text: 'Bitkileri anında kurutması' },
          { id: 'C', text: 'Suda çözünmeyip yağda birikmesi sonucu Biyolojik Birikim yaparak Besin Zincirinin TEPE NOKTASINDAKİ canlıları (kuşları, insanları) zehirlemesi' },
          { id: 'D', text: 'Hemen uçup gitmesi' },
          { id: 'E', text: 'Toprağı çok ısıtması' }
        ],
        correctOptionId: 'C',
        explanation: 'DDT gibi ilaçlar doğada kolay parçalanmaz (Kalıcı Organik Kirleticiler). Besin zinciri boyunca katlanarak aktarılır ve üst tüketicilerin üreme sistemini / DNA\'sını bozar.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Ormanlık bir alanın ortasından Otoyol geçirmek (Habitat Bölünmesi), o ormanda yaşayan BÜYÜK MEMELİLERİ (Örn: Ayı, Geyik) NEDEN çok olumsuz etkiler?',
        options: [
          { id: 'A', text: 'Yolda araba çarptığı için değil, Geniş yaşam alanları (Habitatları) BÖLÜNDÜĞÜ İÇİN besin bulmaları, göç etmeleri ve eş bulmaları engellenir (Gen akışı kesilir)' },
          { id: 'B', text: 'Sadece gürültüden rahatsız olurlar' },
          { id: 'C', text: 'Ağaçlar kurur' },
          { id: 'D', text: 'Orman yanar' },
          { id: 'E', text: 'Oksijen biter' }
        ],
        correctOptionId: 'A',
        explanation: 'Bölünmüş (Fragmente olmuş) habitatlar, özellikle büyük alana ihtiyaç duyan yırtıcılar için hapishane gibidir. Adalar arası geçiş yapılamadığı için türler içi üreme (akraba çiftleşmesi) başlar ve popülasyon çöker.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Küresel Isınmanın Okyanuslar üzerindeki EN BÜYÜK İKİ ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'Balıkların büyümesi ve tuzun azalması' },
          { id: 'B', text: 'Okyanus sularının Isınması/Genleşmesi ve Buzulların erimesiyle DENİZ SEVİYESİNİN YÜKSELMESİ (Ayrıca fazla CO2 yüzünden suların Asitlenmesi)' },
          { id: 'C', text: 'Suların çekilmesi ve okyanusların kuruması' },
          { id: 'D', text: 'Mercanların çok iyi büyümesi' },
          { id: 'E', text: 'Rüzgarların tamamen durması' }
        ],
        correctOptionId: 'B',
        explanation: 'Isınan su hacimce genleşir. Eriyen buzullar suları yükseltir (kıyı şehirleri tehdidi). Ayrıca havadan çok CO2 emen denizler asitlenir, bu da kireçli mercanları eritir (Mercan Ağarması).'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Atık yönetiminde "Geri Dönüşüm (Recycle)" ile "Yeniden Kullanım (Reuse)" arasındaki TEMEL FARK nedir?',
        options: [
          { id: 'A', text: 'Fark yoktur, ikisi de aynıdır' },
          { id: 'B', text: 'Geri dönüşüm atığı çöpe atmaktır' },
          { id: 'C', text: 'Yeniden kullanım ürünü HİÇ İŞLEMDEN GEÇİRMEDEN tekrar kullanmaktır (örn: cam şişeye su doldurmak). Geri dönüşüm ise ürünü ERİTİP/PARÇALAYIP yeni ham madde yapmaktır (enerji harcanır)' },
          { id: 'D', text: 'Geri dönüşüm daha az enerji harcar' },
          { id: 'E', text: 'Sadece plastikler yeniden kullanılır' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeniden kullanım hiyerarşide daha ÜSTTE yer alır çünkü hiç enerji harcamazsınız (Kavanozu saksı yapmak gibi). Geri dönüşümde camı toplayıp fabrikada bin derece fırında eritirsiniz.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Biyomlar ve Ekolojik Kavramlar',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Ekosistemde İKİNCİL (Sekonder) Tüketici grubunda yer alan bir canlı DAİMA ne ile beslenmek zorundadır?',
        options: [
          { id: 'A', text: 'Sadece bitkilerle' },
          { id: 'B', text: 'Birincil Tüketicilerle (Otçullarla)' },
          { id: 'C', text: 'Ayrıştırıcılarla' },
          { id: 'D', text: 'Üreticilerle' },
          { id: 'E', text: 'Sadece diğer etçillerle' }
        ],
        correctOptionId: 'B',
        explanation: 'Besin zinciri: Üretici -> 1.Tüketici (Otçul) -> 2.Tüketici (Etçil). 2. tüketici olan bir canlı (örn: kurbağa), 1. tüketiciyi (örn: çekirge) yer.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Saprofitler (Çürükçül Bakteri ve Mantarlar) besinlerini nasıl elde ederler?',
        options: [
          { id: 'A', text: 'Fotosentez yaparak' },
          { id: 'B', text: 'Sindirim enzimlerini HÜCRE DIŞINA (ölü atığın üzerine) salgılayıp, parçaladıkları monomerleri (küçük yapıtaşlarını) emerek' },
          { id: 'C', text: 'Avlarını kovalayıp yakalayarak' },
          { id: 'D', text: 'Kemosentez yaparak' },
          { id: 'E', text: 'Güneşlenerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Saprofitler hücre dışı sindirim ustalarıdır. Enzimi dışarı döker, çürütür ve sıvı olarak geri çekerler.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Popülasyonun yaş dağılımı piramidinde, ÜREME SONRASI yaşlı bireylerin sayısı, Genç bireylerden ÇOK DAHA FAZLA ise (Ters Piramit), bu popülasyon neye doğru gidiyordur?',
        options: [
          { id: 'A', text: 'Hızlı büyümeye' },
          { id: 'B', text: 'Dengeye' },
          { id: 'C', text: 'Küçülmeye (Azalmaya) ve gerilemeye' },
          { id: 'D', text: 'Kapasiteyi aşmaya' },
          { id: 'E', text: 'Süksesyona' }
        ],
        correctOptionId: 'C',
        explanation: 'Tabanı çok dar, üstü (yaşlılar) genişse; gelecekte üreyecek genç yok demektir. Nüfus yaşlanmış ve daralan bir nüfustur.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Böcekçil Bitkiler (Örn: Sinek kapan) hem fotosentez yapıp şekerini üretir, hem de azot fakiri topraklarda yaşadığı için böcek yakalayıp sindirir. Bu bitkilerin BESLENME TİPİ nedir?',
        options: [
          { id: 'A', text: 'Sadece Ototrof' },
          { id: 'B', text: 'Sadece Heterotrof' },
          { id: 'C', text: 'Hem Ototrof Hem Heterotrof' },
          { id: 'D', text: 'Çürükçül (Saprofit)' },
          { id: 'E', text: 'Kemo-ototrof' }
        ],
        correctOptionId: 'C',
        explanation: 'Işıkla CO2\'yi bağlayıp besin (şeker) üretir (Ototrof). Böceği yiyerek dışarıdan hazır azotlu besin alır (Heterotrof). Bu yüzden mikso-trof gruptadırlar.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Ekolojide "Baskın Tür" (Dominant Tür) kavramı neyi ifade eder?',
        options: [
          { id: 'A', text: 'En zehirli olan türü' },
          { id: 'B', text: 'En hızlı koşan türü' },
          { id: 'C', text: 'Komünitede SAYICA veya BİYOKÜTLECE EN FAZLA OLAN, bulunduğu ortama damgasını vuran türü (Örn: Karadeniz ormanlarındaki Ladin)' },
          { id: 'D', text: 'Sadece avcıları' },
          { id: 'E', text: 'Parazitleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Ormana baktığınızda en çok gördüğünüz, ortama adını veren ve madde döngüsünde kütlece en büyük paya sahip türe Baskın Tür denir (Kilit taşı ile karıştırılmamalıdır).'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Deniz ve Göl ekosistemlerinde canlıların ÇOĞUNLUĞU suyun YÜZEYİNE YAKIN yerlerde yaşar. Derinlere inildikçe canlılık NEDEN HIZLA AZALIR?',
        options: [
          { id: 'A', text: 'Sadece su basıncından dolayı' },
          { id: 'B', text: 'IŞIK, suyun ancak belli bir derinliğine kadar ulaşabildiği için FOTOSENTEZ SADECE YÜZEYDE yapılabilir (Besin sadece üsttedir)' },
          { id: 'C', text: 'Derinlerin çok sıcak olması' },
          { id: 'D', text: 'Tuzluluğun artması' },
          { id: 'E', text: 'Derinlerde dalga olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün ekosistemlerin temel şartı ışık ve fotosentezdir (fotik zon). Işık bittiği yerde (afotik zon) üretim biter, canlılık hızla düşer (sadece çökenleri yiyenler kalır).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Çölde yaşayan bitki ve hayvanlarda GÖRÜLEN en temel ADAPTASYONLAR (uyumlar) genellikle hangi amaca yöneliktir?',
        options: [
          { id: 'A', text: 'Sürekli üremeye' },
          { id: 'B', text: 'Isınmaya' },
          { id: 'C', text: 'Su Kaybını MİNİMUMA İNDİRMEYE (Terlemeyi azaltma, suyu depolama, gece aktif olma)' },
          { id: 'D', text: 'Aşırı fotosentez yapmaya' },
          { id: 'E', text: 'Sürekli uçmaya' }
        ],
        correctOptionId: 'C',
        explanation: 'Çölde su kısıtlıdır. Kaktüslerin yapraklarının dikene dönüşmesi (terlemeyi kesmek), hayvanların kalın derili ve gececi olması tamamen Suyu Korumak (Su Ayak izini daraltmak) içindir.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Bir orman yangınından sonra (İkincil Süksesyon) alanda SIRASIYLA (Öncüden Klimaksa) hangi bitki grupları baskın hale gelir?',
        options: [
          { id: 'A', text: 'Önce Ağaçlar, Sonra Çalılar, Sonra Otlar' },
          { id: 'B', text: 'Önce Yıllık Otlar -> Çok Yıllık Otlar -> Çalılar -> Orman (Ağaçlar)' },
          { id: 'C', text: 'Önce mantarlar, Sonra Hayvanlar' },
          { id: 'D', text: 'Sadece Likenler' },
          { id: 'E', text: 'Sadece ağaçlar çıkar' }
        ],
        correctOptionId: 'B',
        explanation: 'Yangın sonrası toprak verimlidir. Önce rüzgarla gelen tohumlardan hızlı büyüyen otsu bitkiler çıkar, onları çalılar izler. Yıllar sonra uzun ömürlü ve gölge yapan ağaçlar alanı kapatır (Klimaks).'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Küresel çapta İklim krizine (Isınmaya) yol açan SERA GAZLARININ en çok salındığı İNSAN FAALİYETİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Elektrik üretimi, Sanayi ve Ulaşım için FOSİL YAKIT (Kömür, Petrol) KULLANILMASI' },
          { id: 'B', text: 'Evlerde televizyon izlenmesi' },
          { id: 'C', text: 'Tarımda ilaç kullanılması' },
          { id: 'D', text: 'Nükleer enerji kullanımı' },
          { id: 'E', text: 'Okyanusların kirlenmesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Fosil yakıtların yanması sonucu atmosfere yılda milyarlarca ton CO2 bırakılır. Isınmanın bir numaralı sebebi enerji ve ulaşımdaki fosil yakıtlardır.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Bazı bakteriler NO3- (Nitrat) tuzunu parçalayarak havadaki N2 (Azot gazına) çevirir. Bu olaya "Denitrifikasyon" denir. Bu işlem toprak açısından ne anlama gelir?',
        options: [
          { id: 'A', text: 'Toprağın gübresinin ARTMASINA' },
          { id: 'B', text: 'Toprağın AZOTÇUK FAKİRLEŞMESİNE (Gübresinin havaya uçmasına)' },
          { id: 'C', text: 'Toprağın kirlenmesine' },
          { id: 'D', text: 'Toprağın sulanmasına' },
          { id: 'E', text: 'Asitlenmeye' }
        ],
        correctOptionId: 'B',
        explanation: 'Çiftçi toprağa azot atsın (Nitrifikasyon) diye uğraşırken, Denitrifikasyon bakterileri o gübreyi (nitratı) gaz yapıp havaya kaçırır. Toprak açısından azot kaybıdır.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Ötrofikasyon (Göllerin alglerle yeşile boyanıp boğulması) sorununun TEMEL KAYNAĞI genellikle nedir?',
        options: [
          { id: 'A', text: 'Göle asit yağmuru yağması' },
          { id: 'B', text: 'Tarımsal Gübrelerin (Azot ve Fosfor) yağmur sularıyla yıkanarak veya arıtılmamış kanalizasyonun GÖLE KARIŞMASI' },
          { id: 'C', text: 'Göle petrol dökülmesi' },
          { id: 'D', text: 'Göle plastik atılması' },
          { id: 'E', text: 'Balıkların çok yemek yemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Fosfor ve Azot bitkiler (ve algler) için besindir. İnsan kaynaklı aşırı besin göle girince, algler kontrolden çıkarak gölün yüzeyini kapatır.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Dünya üzerinde Ekolojik Toleransı (Dayanıklılık aralığı) EN YÜKSEK (en geniş şartlarda yaşayabilen) canlı türü örneğin hangisidir?',
        options: [
          { id: 'A', text: 'Panda (Sadece bambu yer)' },
          { id: 'B', text: 'Kutup Ayısı (Sadece buzullarda yaşar)' },
          { id: 'C', text: 'Karasinek, Fare veya İnsan (Hemen her kıtada, her sıcaklıkta ve her besinle yaşayabilir)' },
          { id: 'D', text: 'Koala' },
          { id: 'E', text: 'Orkide' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekolojik toleransı (Geniş niş) yüksek olan türler, farklı iklim ve besinlere uyum sağlar. Dar toleranslı türler (Endemikler, Pandalar) ise çevresel değişimde hemen yok olurlar.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Bir komünitenin (Örn: Ormanın) dayanıklılığını (Kararlılığını) sağlayan en önemli faktör nedir?',
        options: [
          { id: 'A', text: 'Sadece bir türün çok baskın olması' },
          { id: 'B', text: 'Tür Çeşitliliğinin (Biyoçeşitliliğin) YÜKSEK olması ve karmaşık besin ağlarına sahip olması' },
          { id: 'C', text: 'Hiç avcı olmaması' },
          { id: 'D', text: 'Havanın hep aynı kalması' },
          { id: 'E', text: 'Parazitlerin olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Karmaşık besin ağı (çok seçenek) varsa, bir tür hastalıktan ölse bile, avcılar diğer alternatif avlara yönelerek hayatta kalır. Sistem çökmez.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Endemik türlerin (sadece belli bir yörede yaşayan türlerin) KORUNMA önceliğinin ÇOK YÜKSEK olmasının sebebi nedir?',
        options: [
          { id: 'A', text: 'Çok güzel olmaları' },
          { id: 'B', text: 'Çok hızlı çoğalmaları' },
          { id: 'C', text: 'Toleranslarının çok dar olması ve Kendi yaşam alanları dışında DÜNYANIN HİÇBİR YERİNDE bulunmadıkları için nesillerinin tükenmeye çok yatkın olması' },
          { id: 'D', text: 'İnsanlara saldırmaları' },
          { id: 'E', text: 'Ekonomik değerlerinin çok olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Endemik tür (Örn: Ankara tiftik keçisi, Van kedisi, Ters Lale) sadece oraya aittir. O habitat yok olursa tür evrenden silinir.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Biyosferdeki Bütün Enerjinin ve Canlılığın TEK KAYNAĞI ve BAŞLANGICI nihai olarak nedir?',
        options: [
          { id: 'A', text: 'Okyanuslar' },
          { id: 'B', text: 'Toprak' },
          { id: 'C', text: 'GÜNEŞ (Güneş enerjisi)' },
          { id: 'D', text: 'Petrol' },
          { id: 'E', text: 'Karbondioksit' }
        ],
        correctOptionId: 'C',
        explanation: 'Okyanusların dip volkanları gibi çok küçük kemosentetik alanlar hariç, dünya üzerindeki besin zincirlerinin %99\'unu başlatan tek enerji kaynağı Güneş\'tir.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Analiz ve Grafik Yorumlama (Orta Düzey)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Bir gölde üç farklı tür balık yaşamaktadır. A türü gölün dibindeki böceklerle, B türü suyun ortasındaki planktonlarla, C türü ise yüzeydeki böceklerle beslenmektedir. Bu durum ekolojide hangi kavrama en iyi örnektir?',
        options: [
          { id: 'A', text: 'Türler arası rekabetin maksimuma çıkmasına' },
          { id: 'B', text: 'Kaynak Paylaşımı (Niş Ayrışması)' },
          { id: 'C', text: 'Biyolojik birikime' },
          { id: 'D', text: 'Kilit taşı tür etkisine' },
          { id: 'E', text: 'Birincil süksesyona' }
        ],
        correctOptionId: 'B',
        explanation: 'Türler aynı gölde yaşasalar da, farklı derinliklerde farklı besinleri seçerek "rekabetten kaçınmış" ve kaynakları bölüşmüşlerdir (Kaynak Paylaşımı).'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Bir orman ekosistemine Kükürt Dioksit (SO2) emisyonları artmıştır. Zamanla ormandaki bazı ağaç türlerinin yaprakları dökülmüş ve toprak verimsizleşmiştir. Bu olayın DOĞRUDAN sebebi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Ozon tabakasının incelmesi' },
          { id: 'B', text: 'Sera etkisinin artması' },
          { id: 'C', text: 'SO2 gazının Asit Yağmuruna (Sülfürik asit) dönüşerek toprağın pH dengesini düşürmesi' },
          { id: 'D', text: 'Ötrofikasyon' },
          { id: 'E', text: 'Karbon ayak izinin azalması' }
        ],
        correctOptionId: 'C',
        explanation: 'SO2 ve NOx gazları asit yağmurunun doğrudan sorumlusudur. Asit yağmuru da yaprakları yakar ve topraktaki faydalı mineralleri yıkayıp zehirli mineralleri (Al) serbest bırakır.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: '[Grafik: Zamanla (t) X popülasyonu hızla artmış, bir K noktasına çarpıp etrafında dalgalanmaya başlamıştır]. Bu "Lojistik (S Tipi)" eğride, popülasyon K noktasına ULAŞTIĞINDA aşağıdakilerden hangisinin gerçekleşmiş olması BEKLENİR?',
        options: [
          { id: 'A', text: 'Çevre direncinin sıfır olması' },
          { id: 'B', text: 'Doğum oranının ve ölüm oranının yaklaşık olarak EŞİTLENMESİ (Dengeye ulaşması)' },
          { id: 'C', text: 'Sınırsız besin olması' },
          { id: 'D', text: 'Tüm popülasyonun yok olması' },
          { id: 'E', text: 'Avcıların tamamen bitmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Taşıma kapasitesine (K) ulaşıldığında, çevre direnci (besin/alan kıtlığı) maksimum olur, bu yüzden ölüm hızı artarak doğum hızını yakalar ve büyüme sıfırlanır (Denge).'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Bir tarlada Yılan popülasyonu aşırı avlanma sonucu aniden YOK EDİLMİŞTİR. Bu tarladaki Besin Zinciri (Ot -> Fare -> Yılan -> Şahin) olduğuna göre, bu olayın KISA VADELİ ilk sonucu ne olur?',
        options: [
          { id: 'A', text: 'Şahinler hemen ot yemeye başlar' },
          { id: 'B', text: 'Farelerin üzerindeki avcı baskısı kalktığı için Fare sayısı HIZLA ARTAR, bu da Otların tükenmesine yol açar' },
          { id: 'C', text: 'Otlar daha hızlı büyür' },
          { id: 'D', text: 'Fareler de hemen ölür' },
          { id: 'E', text: 'Sistem hiç etkilenmez' }
        ],
        correctOptionId: 'B',
        explanation: 'Yılan yok olunca, yılanın yediği "Fare" kontrolden çıkar. Fare artınca, farenin yediği "Ot" yok olur. Bu zincirleme (Top-down) etkiyi gösterir.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Aynı habitatı paylaşan İKİ FARKLI türün (Tür A ve Tür B) grafiğinde; Tür A arttıkça, Tür B azalmakta, bir süre sonra Tür B tamamen ortamdan SİLİNMEKTEDİR. Bu etkileşim tipi nedir?',
        options: [
          { id: 'A', text: 'Av - Avcı' },
          { id: 'B', text: 'Mutualizm' },
          { id: 'C', text: 'Türler Arası Rekabet (ve Rekabetçi Dışlanma)' },
          { id: 'D', text: 'Amensalizm' },
          { id: 'E', text: 'Parazitizm' }
        ],
        correctOptionId: 'C',
        explanation: 'İki türden biri tamamen yok oluyorsa, aynı kaynak için savaşmışlar (Rekabet) ve güçlü olan (Tür A) zayıf olanı "Dışlamıştır" (Gause İlkesi).'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: '[Tablo Analizi] Zehir birikimi: K türünde 0.05 mg, L türünde 1.2 mg, M türünde 0.001 mg, N türünde 15 mg. Bu dört tür AYNI besin zincirinde olduğuna göre, Yırtıcı (Tepe Avcı) ve Üretici sırasıyla kimdir?',
        options: [
          { id: 'A', text: 'Yırtıcı K, Üretici L' },
          { id: 'B', text: 'Yırtıcı M, Üretici N' },
          { id: 'C', text: 'Yırtıcı N, Üretici M' },
          { id: 'D', text: 'Yırtıcı L, Üretici K' },
          { id: 'E', text: 'Yırtıcı N, Üretici L' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojik birikim (zehir) Üreticide EN AZ, Tepe Avcıda EN FAZLADIR. En az zehir M (0.001) = Üretici. En çok zehir N (15) = Tepe Avcı.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Böcek ilacı (DDT) sıklıkla kullanılan bir tarlanın etrafındaki kuşların ÜREYEMEDİKLERİ (yumurta kabuklarının ince olduğu) gözleniyor. Oysa kuşlar doğrudan ilaçlanmamıştır. Kuşların bu duruma gelmesinin temel sebebi Ekolojik olarak nasıl açıklanır?',
        options: [
          { id: 'A', text: 'Kuşlar tarladaki ilaçtan rahatsız olup uçmuşlardır' },
          { id: 'B', text: 'DDT\'nin Besin Ağında Biyolojik Birikim yoluyla (Böcek -> Fare/Kertenkele -> Kuş) kuşlara kadar ulaşıp dokularda toksik seviyeye gelmesi' },
          { id: 'C', text: 'Kuşların mutasyona uğraması' },
          { id: 'D', text: 'Küresel ısınma' },
          { id: 'E', text: 'Ozon delinmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Pestisitler kalıcıdır (KOK). Her basamakta zehir derişimi artar. En son noktadaki yırtıcı kuşlarda hormonal dengeyi bozarak yumurta kabuğunu inceltir ve üremeyi durdurur (Biyomagnifikasyon).'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Ekosistemde gerçekleşen Karbon Döngüsü denklemleri:\nI. CO2 + H2O → Organik besin + O2\nII. Organik besin + O2 → CO2 + H2O\nBuna göre I ve II numaralı olaylar ve bunları YAPAN canlılar hangi seçenekte tam doğrudur?',
        options: [
          { id: 'A', text: 'I. Solunum (Sadece Hayvanlar), II. Fotosentez (Sadece Bitkiler)' },
          { id: 'B', text: 'I. Fotosentez (Ototroflar), II. Oksijenli Solunum (Hem Ototroflar hem Heterotroflar)' },
          { id: 'C', text: 'I. Kemosentez, II. Solunum' },
          { id: 'D', text: 'I. Ayrışma, II. Yanma' },
          { id: 'E', text: 'I. Solunum, II. Yanma' }
        ],
        correctOptionId: 'B',
        explanation: 'I. denklem Fotosentezdir (Sadece üreticiler yapar). II. denklem Oksijenli solunumdur (Bitkiler de kendi besinini yakmak için 7/24 solunum yapar, sadece hayvanlar değil!).'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Nitrifikasyon ve Denitrifikasyon olaylarının EKOSİSTEMDEKİ İŞLEVİ dikkate alındığında, bu iki olayın zıtlaştığı (karşıt) TEMEL YÖN nedir?',
        options: [
          { id: 'A', text: 'Biri gündüz diğeri gece gerçekleşir' },
          { id: 'B', text: 'Biri suyu artırır, diğeri azaltır' },
          { id: 'C', text: 'Nitrifikasyon topraktaki kullanılabilir azotu ARTIRIP bitkilere sunarken, Denitrifikasyon topraktaki azotu AZALTIP atmosfere gaz (N2) olarak geri verir' },
          { id: 'D', text: 'Biri karbon döngüsünde, diğeri azot döngüsündedir' },
          { id: 'E', text: 'İkisi de aynı canlı tarafından yapılır' }
        ],
        correctOptionId: 'C',
        explanation: 'Nitrifikasyon = Toprağı gübreler (Amonyak -> Nitrat). Denitrifikasyon = Topraktaki gübreyi uçarır (Nitrat -> Gaz Azot). Biri toprağı, diğeri atmosferi zenginleştirir.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Bir gölde aniden suyun yeşile döndüğü (Alg patlaması), ışık geçirgenliğinin bittiği ve balıkların öldüğü (Ötrofikasyon) saptanmıştır. Bu gölün SU ANALİZİNDE hangi maddelerin ANORMAL YÜKSEK çıkması beklenir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Azot (Nitrat) ve Fosfor (Fosfat) tuzları' },
          { id: 'C', text: 'Ağır Metaller (Cıva, Kurşun)' },
          { id: 'D', text: 'CFC gazları' },
          { id: 'E', text: 'Kalsiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Alg patlamasının tek sebebi göle deterjanlardan, lağımdan veya tarımdan aşırı "Besin (Gübre)" yani Fosfat ve Nitrat gelmesidir. Algler gübreyi bulur bulmaz çılgınca çoğalır.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Tarım arazisindeki zararlılarla mücadele etmek için Kimyasal İlaç (Pestisit) yerine, ortamın DOĞAL AVCILARINI koruma veya tarlaya avcı böcek salma (Biyolojik Mücadele) yönteminin UZUN VADELİ EN BÜYÜK AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Zararlıları bir gecede yok etmesi' },
          { id: 'B', text: 'Hiçbir maliyeti olmaması' },
          { id: 'C', text: 'Sürdürülebilir olması, kimyasal kirlilik yaratmaması ve zararlıların bağışıklık (direnç) kazanmasını engellemesi' },
          { id: 'D', text: 'Sadece tek bir üründe işe yaraması' },
          { id: 'E', text: 'Sera etkisini azaltması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kimyasal ilaç sıkarsanız böcekler 3-4 yılda direnç kazanır (doğal seçilim), ilaç işe yaramaz ve toprak zehirlenir. Avcı kullanmak (örneğin uğur böceği) direnç geliştirilemez ve toprağı zehirlemez.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: '[Süksesyon Senaryosu] Bir volkan patlamış ve adayı tamamen lavla örtmüştür. 100 yıl sonra adada orman oluşmuştur. Bu süreçte TOPRAK OLUŞUMUNU başlatan ve Likenlerden MEYDANA GELEN İLK CANLI GRUBUNA ne ad verilir?',
        options: [
          { id: 'A', text: 'Klimaks' },
          { id: 'B', text: 'Saprofitler' },
          { id: 'C', text: 'Öncü (Pioner) Türler' },
          { id: 'D', text: 'Avcılar' },
          { id: 'E', text: 'Herbivorlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Çıplak kayada hayata ilk tutunabilen, kayayı asitleriyle eritip ilk toprak kırıntılarını oluşturan dayanıklı gruba Öncü (Pioner) tür denir (Genelde Likenler).'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Ekosistemde enerji akışının her basamakta %10 aktarıldığı kuralı düşünüldüğünde, AŞAĞIDAKİ TÜR DİYETLERDEN (Beslenme Alışkanlığı) hangisi, Bir ÜLKENİN Ekolojik (Karbon/Su) Ayak İzini DAHA KÜÇÜK YAPAR?',
        options: [
          { id: 'A', text: 'Bireylerin çoğunlukla Et (Sığır eti) ağırlıklı beslenmesi' },
          { id: 'B', text: 'Bireylerin doğrudan Bitkisel (Sebze, tahıl) ağırlıklı beslenmesi' },
          { id: 'C', text: 'Sadece okyanus balığı yenmesi' },
          { id: 'D', text: 'Et ve Süt ürünlerinin eşit tüketilmesi' },
          { id: 'E', text: 'İşlenmiş gıda tüketilmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir insan doğrudan bitkiyi yerse (2. trofik düzey) enerjiyi daha verimli alır. Ama insan sığırı (sığır bitkiyi) yerse, sığır %90 enerjiyi harcadığı için aynı kaloriyi almak adına 10 kat fazla bitki alanı (tarla/su) harcanmış olur. (Besin zinciri kısaldıkça verim artar).'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Ozon tabakasının incelmesi ile Küresel Isınma (Sera etkisi) HALK ARASINDA KARIŞTIRILIR. Bu iki olayın AYRIMINI DOĞRU YAPAN seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Ozon tabakasını CO2 deler, Küresel ısınmayı CFC gazı yapar.' },
          { id: 'B', text: 'Ozon tabakasının incelmesi Morötesi (UV) radyasyonun artıp cilt kanserine yol açmasıdır. Küresel Isınma ise CO2\'nin Isı ışınlarını tutup yerküreyi ısıtmasıdır.' },
          { id: 'C', text: 'İkisi de tamamen aynı şeydir.' },
          { id: 'D', text: 'Ozon delinirse dünya soğur, Sera etkisinde dünya ısınır.' },
          { id: 'E', text: 'Ozon delinmesi asit yağmuruna sebep olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ozon deliği (CFC gazları yüzünden) radyasyon problemidir (Kanser, Mutasyon). Sera Etkisi (CO2 yüzünden) ise İklim Değişikliği ve Isınma problemidir. Mekanizmaları farklıdır.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Bir milli parkta koruma altına alınan geyiklerin sayısı ilk yıllarda (avcılar engellendiği için) HIZLA ARTMIŞ (J eğrisi), fakat 10 yıl sonra nüfus ANİDEN ÇÖKMÜŞ (toplu ölümler) yaşanmıştır. Ekolojik dengede İNSANIN YANLIŞ MÜDAHALESİ ne olmuştur?',
        options: [
          { id: 'A', text: 'Parka daha çok ağaç dikilmiştir' },
          { id: 'B', text: 'Tepe Avcıların (Kurtların vb.) sistemden çıkarılması, Geyiklerin Taşıma Kapasitesini hızla aşıp bitki örtüsünü tamamen bitirmelerine ve açlıktan ölmelerine neden olmuştur.' },
          { id: 'C', text: 'Geyikler evrim geçirmiştir' },
          { id: 'D', text: 'Sera etkisi olmuştur' },
          { id: 'E', text: 'Geyikler dışarı göç etmiştir' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğada avcı, av popülasyonunu dengede (Taşıma kapasitesinin altında) tutar. Avcı kalkarsa nüfus patlar, otlakları tüketir, ekosistem çöker ve geyikler açlıktan topluca ölür.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Sentez ve Karşılaştırma (Orta Düzey)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Madde döngülerinde (Su, Karbon, Azot) ORTAK OLAN EN TEMEL ÖZELLİK aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hepsinde gaz fazının (Atmosferin) olması' },
          { id: 'B', text: 'Hepsinde bakterilerin zorunlu olması' },
          { id: 'C', text: 'Dünya ekosistemi içinde kapalı bir sistem olmaları (Yani maddenin uzaya gitmeyip veya dışarıdan gelmeyip, canlı ve cansız çevre arasında SÜREKLİ YER DEĞİŞTİRMESİ)' },
          { id: 'D', text: 'Sadece gündüz gerçekleşmeleri' },
          { id: 'E', text: 'Hepsinde enerjinin korunması' }
        ],
        correctOptionId: 'C',
        explanation: 'Madde döngüsünün mantığı maddenin miktarının kabaca sabit olması ve form değiştirerek (İnorganik <-> Organik) sistemde dönmesidir. (Fosfor döngüsünde gaz/atmosfer fazı yoktur).'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'I. Birincil Tüketiciler, II. Üreticiler, III. İkincil Tüketiciler, IV. Ayrıştırıcılar. Güneşten gelen enerjinin CANLILARA GİRİŞ VE ÇIKIŞ (her basamakta aktarım) SIRASI hangi seçenekte doğru verilmiştir?',
        options: [
          { id: 'A', text: 'I - II - III - IV' },
          { id: 'B', text: 'II - I - III - IV (Ancak IV her basamağa müdahale eder)' },
          { id: 'C', text: 'IV - III - I - II' },
          { id: 'D', text: 'II - III - I - IV' },
          { id: 'E', text: 'III - II - I - IV' }
        ],
        correctOptionId: 'B',
        explanation: 'Enerji Üreticiden (II) girer. Otçul (I) üreticiyi, Etçil (III) otçulu yer. Ayrıştırıcılar (IV) ise tüm bu basamaklardaki ölü/atıklardan enerji alır.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Bir göldeki Fitoplankton (Ototrof Alg) sayısının ANİDEN VE KALICI olarak AZALMASI durumunda (Örn: kirlilik zehirlenmesi), göldeki tüm ekosistemin ÇÖKMESİNİN asıl sebebi nedir?',
        options: [
          { id: 'A', text: 'Gölün suyunun çekilmesi' },
          { id: 'B', text: 'Suyun asitlenmesi' },
          { id: 'C', text: 'Besin Zincirinin TABANI (Üretici enerjisi) koptuğu için üstteki hiçbir canlının (Zooplankton, Balık, Kuş) enerji (besin) ve oksijen bulamaması' },
          { id: 'D', text: 'Güneşin göle artık girmemesi' },
          { id: 'E', text: 'Tuzluluğun artması' }
        ],
        correctOptionId: 'C',
        explanation: 'Üreticiler ekosistemin "motorudur". Motor durursa, zincirdeki enerji akışı ve oksijen üretimi durur, sistem toptan çöker (Bottom-up etki).'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Karbon ayak izini "Doğrudan" ve "Dolaylı" olarak ikiye ayırırsak, aşağıdaki eylemlerden hangisi DOLAYLI karbon ayak izine bir örnektir?',
        options: [
          { id: 'A', text: 'Kişisel otomobilde benzin yakmak' },
          { id: 'B', text: 'Evde doğalgaz sobasını açmak' },
          { id: 'C', text: 'Çin\'de üretilen bir telefonu satın almak (Üretimi ve nakliyesi sırasında başkası tarafından senin için yakılan yakıt)' },
          { id: 'D', text: 'Bahçede odun ateşi yakmak' },
          { id: 'E', text: 'Uçağa binmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğrudan iz, kendi yaktığınız (egzozunuz, kombiniz) yakıttır. Dolaylı iz ise, satın aldığınız kıyafet, telefon veya gıdanın tarladan masanıza gelene kadar harcattığı tüm enerjidir.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Yaz mevsiminde ormanlarda görülen (veya son yıllarda artan) BÜYÜK ÇAPLI YANGINLAR Karbon Döngüsünü nasıl bir kısır döngüye (Pozitif Geri Besleme) sokar?',
        options: [
          { id: 'A', text: 'Ağaçlar yanınca bol oksijen üretilir.' },
          { id: 'B', text: 'Yangınlar havaya muazzam CO2 verir -> Sera etkisi artar -> Hava daha çok ısınır ve kurur -> Bu da DAHA ÇOK YANGIN çıkmasına sebep olur.' },
          { id: 'C', text: 'Yangın ormanı büyütür.' },
          { id: 'D', text: 'Yanma tepkimesi karbonu yok eder.' },
          { id: 'E', text: 'Ateş suyu buharlaştırdığı için yağmur yağdırır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu bir Pozitif (Kendini besleyen) Geri Bildirimdir. Isınma -> Yangın -> Daha Çok CO2 -> Daha Çok Isınma -> Daha Çok Yangın şeklinde kilitlenir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Kemosentez yapan bakterilerin Fotosentez yapan bitkilerden EN TEMEL FARKLI yanı (Ekolojik işlevi açısından) nedir?',
        options: [
          { id: 'A', text: 'Kemosentetiklerin Karbondioksit kullanmaması' },
          { id: 'B', text: 'Fotosentetiklerin su kullanmaması' },
          { id: 'C', text: 'Kemosentetiklerin ENERJİ KAYNAĞI olarak Işık yerine İnorganik Maddelerin Oksidasyonunu kullanmaları ve bu nedenle GÜNEŞ IŞIĞI GİRMEYEN okyanus diplerinde bile BESİN ZİNCİRİ başlatabilmeleri' },
          { id: 'D', text: 'Kemosentetiklerin ayrıştırıcı olması' },
          { id: 'E', text: 'Fotosentetiklerin sadece gece üretmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Güneşin girmediği (derin deniz hidrotermal bacaları gibi) yerlerde hayatın olabilmesinin tek sebebi kemosentetik bakterilerin karanlıkta kimyasal enerjiyle besin zincirini kurmasıdır.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Büyük boyutlu ve yavaş üreyen canlılar (Örn: Balinalar, Filler) K-stratejisti türlerdir. Çevre koşulları ANİDEN BOZULDUĞUNDA (Örn: Küresel iklim değişimi), bu türlerin Böceklere (r-stratejist) kıyasla SOY TÜKENME RİSKİ neden çok daha yüksektir?',
        options: [
          { id: 'A', text: 'Çünkü çok az üremeleri, geç erginleşmeleri ve popülasyonlarının yavaş toparlanması sebebiyle değişen şartlara (evrimsel adaptasyona) zaman bulamazlar.' },
          { id: 'B', text: 'Çok zeki oldukları için yaşamak istemezler' },
          { id: 'C', text: 'Yavrularına çok iyi baktıkları için ölürler' },
          { id: 'D', text: 'Besin zincirinde en altta oldukları için' },
          { id: 'E', text: 'Sürekli rekabet ettikleri için' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir böcek 1 ayda binlerce yavru vererek hızlı genetik değişim (adaptasyon) geçirebilir. Balina ise 5 yılda bir yavru verir, nüfusu toparlayamadan değişimlere yenik düşer.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Bir komünitede, Liken -> Karayosunu -> Ot -> Çalı -> Orman şeklinde giden Birincil Süksesyon sürecinde "TOPRAK" miktarının (kalınlık ve veriminin) grafiği zamanla nasıl değişir?',
        options: [
          { id: 'A', text: 'Sürekli aynı kalır.' },
          { id: 'B', text: 'Zamanla AZALIR.' },
          { id: 'C', text: 'Likenlerin kayayı parçalaması ve ölen canlı kalıntılarının birikmesiyle zamanla ARTAR ve ZENGİNLEŞİR.' },
          { id: 'D', text: 'Önce çoktur, ağaçlar çıkınca biter.' },
          { id: 'E', text: 'Zikzaklı dalgalanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Birincil süksesyon Sıfır topraktan (kayadan) başlar. Canlılar yaşayıp öldükçe (humus) ve kayalar parçalandıkça toprak kalınlaşır, suyu daha iyi tutar ve daha büyük bitkilere imkan tanır.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Biyolojik birikimin (Zehir birikimi) Besin Piramidinin tepesindeki (Aslan, Kartal vb.) canlılarda daha YÜKSEK ÇIKMASININ MATEMATİKSEL MANTIĞI nedir?',
        options: [
          { id: 'A', text: 'Üsttekilerin zehri çok sevmesi' },
          { id: 'B', text: 'Bir kartalın, ömrü boyunca binlerce zehirli böcek yemiş yüzlerce kuşu YEMESİ (Zehrin atılamayıp her basamakta toplanarak/konsantre olarak yukarı aktarılması)' },
          { id: 'C', text: 'Sadece et yediklerinde zehrin kendiliğinden oluşması' },
          { id: 'D', text: 'Zehri havadan almaları' },
          { id: 'E', text: 'Üstteki canlıların zehir üretmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Zehir (DDT) yıkılamaz. 1 milyon planktondaki zehir 1000 küçük balığa, o 100 büyük balığa, o da TEK BİR kartala geçer. Kartal tek başına tüm sistemin zehrini yüklenmiş olur.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Ekolojik dengede "Karasal Biyomlar" Ekvator\'dan Kutuplara gidildikçe Tropikal Orman -> Yaprak Döken Orman -> Tayga -> Tundra şeklinde dizilir. BU DİZİLİMİN AYRISINI BİR DAĞ YAMACINDA YUKARI ÇIKARKEN de görmemizin (Orman -> Çayır -> Kar) BİYOLOJİK SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Dağlarda oksijenin olmaması' },
          { id: 'B', text: 'Enlem (Kutuplara gidiş) ile Yükseltinin (Dağa çıkış), İKLİM (Sıcaklık ve Nem) üzerinde AYNI ETKİYİ YARATMASI' },
          { id: 'C', text: 'Dağların kuzeyde yer alması' },
          { id: 'D', text: 'Hayvanların yukarı çıkamaması' },
          { id: 'E', text: 'Biyolojik saatin bozulması' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcaklık hem Ekvatordan uzaklaştıkça hem de deniz seviyesinden yükseldikçe düşer. Bitki örtüsü sıcaklığa bağlı olduğu için, her iki yönde de aynı bitki değişim kuşakları (Tundra = Alpin çayır vb.) görülür.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Atık yönetiminde ve Sürdürülebilirlikte kullanılan "Döngüsel Ekonomi" (Circular Economy) kavramı ekolojideki HANGİ OLAYDAN İLHAM ALINARAK ortaya atılmıştır?',
        options: [
          { id: 'A', text: 'Popülasyon büyümesinden' },
          { id: 'B', text: 'Doğada HİÇ ÇÖP (ATIK) OLMAMASI, her canlının atığının veya ölüsünün Ayrıştırıcılar tarafından diğer canlılar için HAM MADDEYE (Besine) dönüştürülmesi ilkesinden (Madde Döngüleri)' },
          { id: 'C', text: 'Rekabetten' },
          { id: 'D', text: 'Küresel ısınmadan' },
          { id: 'E', text: 'Asit yağmurlarından' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğada atık (çöp) yoktur, her atık yeni bir hayatın kaynağıdır. Döngüsel ekonomi de fabrikaların atıklarının, başka ürünlerin ham maddesi olacak (geri dönüşüm/yeniden tasarım) şekilde tasarlanmasını amaçlar.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Bitkiler azot ihtiyacı için Nişasta, Selüloz ve Trigliserit (Yağ) gibi moleküller SENTEZLERKEN HANGİ MADDEYİ TOPRAKTAN ALMAYA (Azot Döngüsüne) İHTİYAÇ DUYMAZLAR?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Fosfor' },
          { id: 'D', text: 'AZOT (N) atomuna' },
          { id: 'E', text: 'Karbon' }
        ],
        correctOptionId: 'D',
        explanation: 'Karbonhidrat (Nişasta, Selüloz) ve Basit Yağlar sadece C, H, O atomlarından oluşur. Yani bu moleküller için AZOT GEREKMEZ. Azot (Protein, DNA, ATP) için şarttır.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Tarımsal ilaçlama yapan bir çiftçinin, sadece tarlasındaki zararlıları değil, aynı zamanda ARILARI DA öldürmesi sonucunda (Polinasyon Eksikliği) tarımsal verimin (ürünün) düşmesi ekolojide neyi kanıtlar?',
        options: [
          { id: 'A', text: 'İlaçların bozuk olduğunu' },
          { id: 'B', text: 'Ekosistemdeki türlerin karmaşık bir "Ağ (Simbiyoz/Mutualizm)" şeklinde BİRBİRİNE BAĞLI OLDUĞUNU, yanlış bir müdahalenin tüm sistemi bozduğunu' },
          { id: 'C', text: 'Arıların zararlı olduğunu' },
          { id: 'D', text: 'Tohumların kalitesiz olduğunu' },
          { id: 'E', text: 'İklimin değiştiğini' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğada bir türü "Çıkarıp alamazsınız", her şey bağlıdır. Zararlıyı öldüreyim derken tozlaştırıcıyı (arıyı) öldürürsen, bitkin meyve veremez.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bir gölde Ötrofikasyon başladıktan sonra sırasıyla; I. Işık alt katmanlara geçemez, II. Dipteki üreticiler ölür, III. Algler yüzeyi kaplar, IV. Oksijen biter, Balıklar ölür. OLAYLARIN GERÇEKLEŞME SIRASI nedir?',
        options: [
          { id: 'A', text: 'I - II - III - IV' },
          { id: 'B', text: 'III (Yüzey kapanır) -> I (Işık geçemez) -> II (Dipteki bitkiler ölür ve çürür) -> IV (Ayrıştırıcılar oksijeni bitirir, Balıklar ölür)' },
          { id: 'C', text: 'IV - I - II - III' },
          { id: 'D', text: 'III - II - I - IV' },
          { id: 'E', text: 'I - III - IV - II' }
        ],
        correctOptionId: 'B',
        explanation: 'Ötrofikasyonda önce göbre ile Alg patlar ve suyun üstü yemyeşil kapanır (III). Sonra gölge olur (I), ışıksız kalan bitkiler ölür (II), ölüleri parçalayan bakteriler sudaki Oksijeni sıfırlar ve hayvanlar boğulur (IV).'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Ekoloji çalışmalarında "Taşıma Kapasitesi (K)" kavramı TEK BİR SABİT DEĞER MİDİR? Yani orman 1000 geyik taşıyorsa, 100 yıl sonra da mutlaka 1000 geyik mi taşır?',
        options: [
          { id: 'A', text: 'Evet, genetik olarak kodlanmıştır değişmez' },
          { id: 'B', text: 'Evet, orman hep ormandır' },
          { id: 'C', text: 'HAYIR, Taşıma kapasitesi ortamın (iklim, su, besin miktarı, afetler vb.) DİNAMİK koşullarına göre yıllar içinde DEĞİŞEBİLİR.' },
          { id: 'D', text: 'Hayır, taşıma kapasitesi hep sıfıra düşer' },
          { id: 'E', text: 'Evet, geyikler sadece bini sayabilir' }
        ],
        correctOptionId: 'C',
        explanation: 'K (Taşıma kapasitesi) çevre koşullarıyla belirlenir. Kuraklık olursa K düşer, çok yağmur/besin olursa K değeri yükselir. Dinamiktir (Sabit değildir).'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Ekoloji Konu Bütünlüğü',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Karbon döngüsü dengede olan kapalı bir ekosistem cam fanusa alınmıştır. İçine sadece 1 bitki, 1 fare ve 1 saprofit bakteri türü konmuştur. Bu fanusta KARBONUN ATMOSFERE (Fanustaki havaya) VERİLMESİNİ sağlayan canlılar hangileridir?',
        options: [
          { id: 'A', text: 'Sadece fare' },
          { id: 'B', text: 'Sadece saprofitler' },
          { id: 'C', text: 'Sadece bitki ve fare' },
          { id: 'D', text: 'Fare, Saprofit ve Bitki (Üçü de solunum yapar)' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'D',
        explanation: 'Ekosistemdeki TÜM CANLILAR (Ototrof, heterotrof, saprofit) yaşamak için Oksijenli (veya oksijensiz) Solunum yapmak zorundadır. Solunum sonucunda hepsi atmosfere CO2 verir.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Bir gölde azot kirliliği (ötrofikasyon) yaşanmış ve balıklar ölmüştür. Göle "Biyoremediyasyon" (Canlıları kullanarak kirliliği temizleme) uygulamak isteyen bir bilim insanı göle HANGİ CANLIYI eklerse sorunu (fazla nitratı) en hızlı şekilde sistemden UZAKLAŞTIRABİLİR?',
        options: [
          { id: 'A', text: 'Otçul balıklar' },
          { id: 'B', text: 'Nitrifikasyon bakterileri (Amonyağı nitrata çevirirler)' },
          { id: 'C', text: 'Denitrifikasyon bakterileri (Göpteki fazla nitratı Azot gazına çevirip havaya uçururlar)' },
          { id: 'D', text: 'Saprofitler' },
          { id: 'E', text: 'Küf mantarları' }
        ],
        correctOptionId: 'C',
        explanation: 'Sudaki kirlilik nitrattır. Onu sudan uzaklaştırmanın en iyi yolu gaz (N2) yapıp atmosfere göndermektir. Bunu da Denitrifikasyon bakterileri yapar.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Avrupa kıtasında yüzyıllar önce kurtların tamamen avlanıp yok edilmesi, günümüzde ormanların yenilenememesine ve geyik sayısının kontrol edilememesine yol açmıştır. Kurtlar bu ekosistemde nasıl bir role sahipti?',
        options: [
          { id: 'A', text: 'İstilacı tür' },
          { id: 'B', text: 'Üretici' },
          { id: 'C', text: 'Pioner (Öncü) Tür' },
          { id: 'D', text: 'Kilit Taşı Tür (Sistemi yukarıdan aşağıya dengede tutan tepe avcı)' },
          { id: 'E', text: 'Saprofit' }
        ],
        correctOptionId: 'D',
        explanation: 'Sayıları çok olmasa da, yoklukları tüm ekosistemin mimarisini çökerten avcılara (veya otçullara) Kilit Taşı tür denir.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: '[S Tip Büyüme Eğrisi] Bir tavşan popülasyonu adaya bırakılmış ve hızla logaritmik büyümüştür. Bir süre sonra büyüme hızı yavaşlamış ve birey sayısı sabitlenmiştir. NÜFUS SABİTLENDİĞİNDE (Dengede), adadaki TAVŞANLAR İÇİN HANGİSİ KESİNLİKLE SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Tavşanlar artık ürememektedir' },
          { id: 'B', text: 'Çevre direnci (besin rekabeti vb.) maksimum seviyededir' },
          { id: 'C', text: 'Adada hiç hastalık kalmamıştır' },
          { id: 'D', text: 'Tavşanlar mutasyon geçirmiştir' },
          { id: 'E', text: 'Doğum oranı sıfırdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Nüfus sabitlendiğinde üreme (doğum) durmaz, ancak çevre direnci (hastalık, yer darlığı, açlık) ölüm oranını artırdığı için Doğum = Ölüm olur.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Ekvatordan kutuplara doğru gidildikçe Tropikal Orman -> Çöl -> Bozkır -> Tayga -> Tundra şeklinde biyomlar değişir. Bu değişimi EN ÇOK belirleyen iki abiyotik faktör nedir?',
        options: [
          { id: 'A', text: 'Toprak ve Rüzgar' },
          { id: 'B', text: 'Sıcaklık ve Yağış Miktarı (İklim)' },
          { id: 'C', text: 'Güneş ışığı ve Yerçekimi' },
          { id: 'D', text: 'Tuzluluk ve Basınç' },
          { id: 'E', text: 'Oksijen ve Karbondioksit' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyomlar tamamen o bölgenin hakim bitki örtüsüyle şekillenir. Bitki örtüsünü de doğrudan o bölgenin Yıllık Ortalama Sıcaklığı ve Yağış Miktarı belirler.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Karbon ayak izini "Doğrudan" ve "Dolaylı" olarak ikiye ayırırsak, aşağıdaki eylemlerden hangisi DOLAYLI karbon ayak izine bir örnektir?',
        options: [
          { id: 'A', text: 'Kişisel otomobilde benzin yakmak' },
          { id: 'B', text: 'Evde doğalgaz sobasını açmak' },
          { id: 'C', text: 'Çin\'de üretilen bir telefonu satın almak (Üretimi ve nakliyesi sırasında başkası tarafından senin için yakılan yakıt)' },
          { id: 'D', text: 'Bahçede odun ateşi yakmak' },
          { id: 'E', text: 'Uçağa binmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğrudan iz, kendi yaktığınız (egzozunuz, kombiniz) yakıttır. Dolaylı iz ise, satın aldığınız kıyafet, telefon veya gıdanın tarladan masanıza gelene kadar harcattığı tüm enerjidir.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Aynı habitatı paylaşan İKİ FARKLI türün (Tür A ve Tür B) grafiğinde; Tür A arttıkça, Tür B azalmakta, bir süre sonra Tür B tamamen ortamdan SİLİNMEKTEDİR. Bu etkileşim tipi nedir?',
        options: [
          { id: 'A', text: 'Av - Avcı' },
          { id: 'B', text: 'Mutualizm' },
          { id: 'C', text: 'Türler Arası Rekabet (ve Rekabetçi Dışlanma)' },
          { id: 'D', text: 'Amensalizm' },
          { id: 'E', text: 'Parazitizm' }
        ],
        correctOptionId: 'C',
        explanation: 'İki türden biri tamamen yok oluyorsa, aynı kaynak için savaşmışlar (Rekabet) ve güçlü olan (Tür A) zayıf olanı "Dışlamıştır" (Gause İlkesi).'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Doğada karbon dengesini SAĞLAYAN (İklim krizini yavaşlatan) en önemli CANLI GRUBU, hangi fizyolojik işlemi yaparak bu dengeyi kurar?',
        options: [
          { id: 'A', text: 'Ayrıştırıcıların solunum yapması' },
          { id: 'B', text: 'Ototrofların (Bitki ve Fitoplanktonların) Fotosentez yaparak havadaki CO2\'yi bağlaması' },
          { id: 'C', text: 'Mantarların fermantasyon yapması' },
          { id: 'D', text: 'Hayvanların üremesi' },
          { id: 'E', text: 'Kemosentetiklerin zehir atması' }
        ],
        correctOptionId: 'B',
        explanation: 'Küresel ısınmaya karşı doğanın elindeki en büyük silah Fotosentezdir (Biyolojik Karbon Pompası). Atmosferdeki serayı (CO2) emerek dokularında odun/şeker olarak kilitlerler.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Tarımsal arazilerde aynı bitkinin yıllarca üst üste ekilmesi (Monokültür) toprakta ne gibi bir olumsuzluğa yol açar?',
        options: [
          { id: 'A', text: 'Toprağın daha da zenginleşmesine' },
          { id: 'B', text: 'Topraktaki belirli BİR MİNERALİN (örneğin sadece azotun) hızla tükenmesine ve toprağın fakirleşmesine' },
          { id: 'C', text: 'Ürünün kalitesinin sürekli artmasına' },
          { id: 'D', text: 'Bitkilerin daha çok fotosentez yapmasına' },
          { id: 'E', text: 'Toprakta suyun artmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli aynı bitkiyi ekmek (nöbetleşe ekim yapmamak), bitkinin sürekli aynı besini (minerali) çekmesine neden olur ve toprak o madde yönünden çoraklaşır.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Besin piramidinde üreticilerden başlayıp son tüketiciye kadar her bir beslenme basamağına ne ad verilir?',
        options: [
          { id: 'A', text: 'Trofik Düzey (Beslenme Basamağı)' },
          { id: 'B', text: 'Popülasyon' },
          { id: 'C', text: 'Biyom' },
          { id: 'D', text: 'Habitat' },
          { id: 'E', text: 'Niş' }
        ],
        correctOptionId: 'A',
        explanation: 'Üreticiler 1. trofik düzey, otçullar 2. trofik düzey, etçiller 3. trofik düzeydir. "Trofik" = Beslenme demektir.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'ÖSYM Tarzı İleri Düzey Sentez Soruları',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Bir göl ekosistemine uzun yıllar boyunca X zehirli kimyasalı karışmıştır. Göl ekosistemindeki besin ağı şu şekildedir: Alg -> Su piresi -> Küçük balık -> Büyük balık -> Kartal. \nBuna göre, X kimyasalının BİRİM HÜCRE BAŞINA (veya mg doku başına) DERİŞİMİ incelendiğinde, aşağıdaki grafiklerden hangisi doğru olurdu?',
        options: [
          { id: 'A', text: 'Zehir derişimi her canlıda eşittir.' },
          { id: 'B', text: 'Zehir derişimi Alg\'de en yüksek, Kartal\'da en düşüktür.' },
          { id: 'C', text: 'Zehir derişimi Alg -> Su piresi -> Küçük balık -> Büyük balık -> Kartal sırasıyla ÜSTEL (Katlanarak) ARTAR.' },
          { id: 'D', text: 'Sadece büyük balıkta zehir birikir.' },
          { id: 'E', text: 'Zehir derişimi rastgele dağılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojik birikim (Biyomagnifikasyon), zehrin suda çözülmeyip yağda kalmasıyla, canlı birbirini yedikçe zehri "konsantre" hale getirerek tepe avcıya (Kartala) aktarmasıdır.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Bir araştırmacı ormanda farklı çam türlerini incelemektedir: (P) türü sadece gölgeli vadilerde, (R) türü sadece güneşli yamaçlarda, (S) türü ise yüksek rakımda kaya çatlaklarında yetişmektedir. \nBu üç çam türünün aynı ormanda AYNI ANDA bir arada bulunabilmesini EKOLOJİK olarak en iyi açıklayan kural nedir?',
        options: [
          { id: 'A', text: 'Kompetisyon (Rekabet)' },
          { id: 'B', text: 'Karakter Kayması ve Niş Ayrışması (Kaynak Paylaşımı)' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Süksesyon' },
          { id: 'E', text: 'Denitrifikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı ormanda olmalarına rağmen (Habitat aynı), her biri farklı bir mikro-ortamı (gölge, güneş, kaya) seçerek besin ve alan kavgasından kaçınmış, Ekolojik Nişlerini ayırmışlardır.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Enerji Akışı ile Madde Döngüleri KARŞILAŞTIRILDIĞINDA;\nI. Enerji ekosisteme tek yönde girer ve ısı olarak çıkar, Madde ise sınırlıdır ve canlı-cansız arasında sürekli döner.\nII. İkisinin de başlangıç noktası her zaman Güneştir.\nIII. Her ikisinin de sürekliliğinde Üreticiler ve Ayrıştırıcılar ZORUNLU basamaklardır.\nYargılarından hangileri KESİNLİKLE DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'I ve III' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'C',
        explanation: 'I doğru (Enerji tek yönlü, madde döngüsel). III doğru (Üretici enerjiyi/maddeyi bağlar, ayrıştırıcı maddeyi çözer). II YANLIŞTIR; Enerjinin kaynağı güneştir ama "Maddenin (Örn: Karbonun)" kaynağı Dünya\'nın kendi kütlesidir, güneşten madde gelmez.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Nitrifikasyon ve Denitrifikasyon süreçleri için;\nI. Nitrifikasyonu yapan canlılar Kemosentetik Ototrof, Denitrifikasyonu yapanlar genelde Oksijensiz solunum yapan Heterotroflardır.\nII. Nitrifikasyon toprağın verimini artırırken, Denitrifikasyon topraktaki verimi düşürür.\nIII. İkisi de atmosferik Azot miktarını DOĞRUDAN DÜŞÜRÜR.\nVerilen ifadelerden hangileri DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'Yalnız II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'Nitrifikasyon yapanlar Kemosentezle besin üretir (Ototrof). Denitrifikasyon oksijensiz ortamda nitratı gaz yapar (Toprağı fakirleştirir, havayı zenginleştirir). III yanlıştır, denitrifikasyon havadaki azotu düşürmez, ARTIRIR.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'S Tipi (Lojistik) büyüme gösteren bir popülasyonda;\n- K: Taşıma Kapasitesi\n- N: Mevcut Birey Sayısı\nBuna göre, (K - N) / K ifadesi (Çevre Direnci formülü) MİNİMUM değere (sıfıra yakın) ne zaman ulaşır?',
        options: [
          { id: 'A', text: 'Popülasyon yeni kurulduğunda (N çok küçükken)' },
          { id: 'B', text: 'Logaritmik büyüme evresinin tam ortasında' },
          { id: 'C', text: 'Mevcut birey sayısı (N), Taşıma Kapasitesine (K) ULAŞTIĞINDA (N = K olduğunda)' },
          { id: 'D', text: 'Sadece Kış aylarında' },
          { id: 'E', text: 'N değeri K\'dan çok büyük olduğunda' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer N (Birey sayısı), K\'ya (Kapasiteye) ulaşırsa (Örn: 100/100), formül K-K olur ve Çevre Direnci yüzünden büyüme payı kalmaz. Ortam dolmuştur (Denge evresi).'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'İklim Krizine neden olan Sera Gazları (CO2, CH4) ile Ozon Tabakasını delen (CFC) gazların ÇEVRESEL ETKİ MEKANİZMALARI farklıdır. Buna göre aşağıdakilerden hangisi SERA ETKİSİNİN doğrudan bir SONUCU DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Kutuplardaki buzulların erimesi ve deniz seviyesinin yükselmesi' },
          { id: 'B', text: 'Okyanus sularının Isınması ve CO2 emilimine bağlı olarak Asitlenmesi (Mercan ağarması)' },
          { id: 'C', text: 'Morötesi (UV) güneş ışınlarının Yerküreye doğrudan ulaşıp Cilt Kanserini (Mutasyonu) artırması' },
          { id: 'D', text: 'İklim kuşaklarının (Biyom sınırlarının) kuzeye doğru kayması' },
          { id: 'E', text: 'Aşırı hava olaylarının (Kasırga, ani sel) artması' }
        ],
        correctOptionId: 'C',
        explanation: 'UV radyasyonu artışı, cilt kanseri ve DNA mutasyonları OZON TABAKASININ İNCELMESİ (Ozon Deliği) ile ilgilidir. Sera etkisi yerküreyi "Isıtır", UV ile ilişkisi doğrudan yoktur.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Kapalı bir Cam Fanus içerisine ışıklı ortamda I. Sadece Yeşil Bitki, II. Yeşil Bitki ve Şapkalı Mantar, III. Yeşil Bitki ve Fare konuluyor.\nHangi fanus(lar)da EKOSİSTEM (Karbon ve Oksijen Döngüsü) DAHA UZUN SÜRE dengede kalıp devam edebilir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'II ve III (Çünkü bitki O2 üretir, Mantar ve Fare ise O2 kullanıp bitkiye gerekli olan CO2\'yi sağlar)' },
          { id: 'D', text: 'Yalnız III' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitki tek başınayken (I) fotosentezle kendi CO2\'sini hızla tüketir ve durur. Ancak yanına bir Tüketici (Fare) veya Ayrıştırıcı (Mantar) konursa, bunlar O2 alıp CO2 vererek bitkiyi besler, döngü kurulur.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Birincil Süksesyon ile İkincil Süksesyon arasındaki en KLİT AYRIM noktası nedir?',
        options: [
          { id: 'A', text: 'Birincil süksesyon sadece denizde olur' },
          { id: 'B', text: 'İkincil süksesyonda her şey sıfırdan başlar' },
          { id: 'C', text: 'Birincil Süksesyonda ortamda HİÇ TOPRAK YOKTUR (Buzul çekilmesi, lav akıntısı), toprağın oluşması gerekir. İkincil Süksesyonda TOPRAK ZATEN VARDIR (Orman yangını, terkedilmiş tarla), canlılar tohum/köklerden hızla geri döner.' },
          { id: 'D', text: 'İkincil süksesyonda likenler zorunludur' },
          { id: 'E', text: 'Birincil süksesyonda iklim değişir' }
        ],
        correctOptionId: 'C',
        explanation: 'Toprak olup olmaması ana kriterdir. Yangında bitkiler ölür ama toprak kalır (İkincil, çok hızlıdır). Lav akıntısında kaya soğur, önce likenler gelip toprağı yapmalıdır (Birincil, çok yavaştır).'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Döngüsel Ekonomi (Sürdürülebilirlik) yaklaşımında Atık Hiyerarşisi piramidinin EN TEPESİNDE (En çevreci, en çok istenen) seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Düzenli Depolama (Toprağa gömme)' },
          { id: 'B', text: 'Enerji Geri Kazanımı (Yakarak elektrik üretme)' },
          { id: 'C', text: 'Geri Dönüşüm (Eritip tekrar üretme)' },
          { id: 'D', text: 'ÖNLEME / KAYNAĞINDA AZALTMA (İhtiyaç olmayanı hiç üretmemek/tüketmemek)' },
          { id: 'E', text: 'Okyanusa dökme' }
        ],
        correctOptionId: 'D',
        explanation: 'En çevreci atık, hiç oluşmayan atıktır. Geri dönüşüm (Recycle) bile enerji (karbon ayak izi) harcatır. Bu yüzden öncelik Refuse/Reduce (Reddet ve Azalt) üzerinedir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Bir gölde ÖTROFİKASYON (alg patlaması) gerçekleştiğinde, dipte yaşayan BENTİK ve üretici organizmaların ölümünün temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Sudaki zehirin artması' },
          { id: 'B', text: 'Suyun tamamen buharlaşması' },
          { id: 'C', text: 'Göl YÜZEYİNİ alglerin (yeşil tabaka) tamamen Kapatarak, GÜNEŞ IŞIĞININ ALT TABAKALARA (dipe) GEÇMESİNİ ENGELLEMESİ' },
          { id: 'D', text: 'Balıkların bitkileri hızlıca yemesi' },
          { id: 'E', text: 'Suyun aniden soğuması' }
        ],
        correctOptionId: 'C',
        explanation: 'Fosfor/Azot gübresi göle girince yüzeydeki planktonlar (algler) patlar (Alg Bloom). Yüzey yemyeşil bir halı gibi kapanır. Gölge oluşur, dipteki ışık bitince dip fotosentezi durur, tüm sistem oksijensizlikten (Anoksi) çöker.'
      }
    ]
  }
]
