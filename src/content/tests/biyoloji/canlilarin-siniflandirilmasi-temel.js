export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Sınıflandırmanın Amacı ve Yapay (Ampirik) Sınıflandırma (Very Easy)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Canlıların milyarlarca farklı türe sahip olması, bilim insanlarını hangi zorunluluğa itmiştir?',
        options: [
          { id: 'A', text: 'Canlıları sadece boylarına göre sıralamaya' },
          { id: 'B', text: 'Doğadaki canlıları ortak özelliklerine ve akrabalıklarına göre SINIFLANDIRMAYA (Gruplandırmaya)' },
          { id: 'C', text: 'Bütün canlıları aynı isimle çağırmaya' },
          { id: 'D', text: 'Sınıflandırmayı tamamen bırakmaya' },
          { id: 'E', text: 'Sadece bitkileri incelemeye' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok fazla çeşit (milyonlarca tür) olduğu için, onları incelemeyi ve öğrenmeyi kolaylaştırmak adına canlılar sınıflandırılır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Tarihte canlıları sınıflandırmak için ilk çalışmaları yapan (Bitkileri ot, çalı, ağaç; hayvanları suda, karada, havada yaşayanlar diye ayıran) ünlü düşünür kimdir?',
        options: [
          { id: 'A', text: 'Albert Einstein' },
          { id: 'B', text: 'Isaac Newton' },
          { id: 'C', text: 'Aristo (Aristoteles)' },
          { id: 'D', text: 'Charles Darwin' },
          { id: 'E', text: 'Gregor Mendel' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihteki ilk (ampirik/suni) sınıflandırma Aristo tarafından canlının sadece DIŞ GÖRÜNÜŞÜNE ve YAŞADIĞI YERE bakılarak yapılmıştır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Aristo\'nun yaptığı sınıflandırmaya "Yapay (Suni / Ampirik) Sınıflandırma" denir. Bu sınıflandırma neye dayanarak yapılırdı?',
        options: [
          { id: 'A', text: 'DNA dizilimi ve genetiğe' },
          { id: 'B', text: 'Protein ve enzim benzerliklerine' },
          { id: 'C', text: 'SADECE dış görünüşe (Morfoloji) ve yaşanılan ortama (Su, Kara, Hava)' },
          { id: 'D', text: 'Hücre içi organellere' },
          { id: 'E', text: 'Evrimsel akrabalığa' }
        ],
        correctOptionId: 'C',
        explanation: 'Eski çağlarda mikroskop veya genetik bilimi yoktu. Bu yüzden canlının sadece dışına ve nerede yaşadığına bakılırdı (Örn: Uçanlar, yüzenler).'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: '"Yarasa bir memelidir, Kuş ise kuşlar sınıfındadır. Ama Aristo her ikisini de havada uçtuğu için AYNI GRUBA koymuştur." \nBu durum Suni (Yapay) sınıflandırmanın hangi YÖNÜNÜ gösterir?',
        options: [
          { id: 'A', text: 'Çok mükemmel ve doğru olduğunu' },
          { id: 'B', text: 'Genetiği çok iyi kullandığını' },
          { id: 'C', text: 'Bilimsel (Gerçek akrabalığa dayanan) OLMADIĞINI ve yanıltıcı olduğunu' },
          { id: 'D', text: 'Kuşların memeli olduğunu' },
          { id: 'E', text: 'Günümüzde hala kullanıldığını' }
        ],
        correctOptionId: 'C',
        explanation: 'Sadece dış görünüşe (uçmasına) bakılarak yapılan sınıflandırma, canlıların gerçek akrabalık (iç yapı/genetik) ilişkilerini gizler ve hata yaptırır.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Yapay (Suni) sınıflandırmada kullanılan "Analog Organ (Görevdeş Organ)" nedir?',
        options: [
          { id: 'A', text: 'Kökleri (DNA\'ları) aynı olan organlardır.' },
          { id: 'B', text: 'Görevleri aynı ama iç yapıları ve evrimsel kökenleri FARKLI olan organlardır. (Örn: Sinek kanadı ile Kuş kanadı)' },
          { id: 'C', text: 'Sadece bitkilerde bulunan organlardır.' },
          { id: 'D', text: 'İç yapıları aynı ama görevleri farklı olan organlardır.' },
          { id: 'E', text: 'Sadece mikroskopla görülen organlardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinek (Böcek) kanadı zarsıdır, Kuş kanadı kemik-tüydür. İçleri hiç benzemez ama ikisi de "Uçmaya (Aynı göreve)" yarar. Buna Analog organ denir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Günümüzde modern bilim insanları canlıları sınıflandırırken "Doğal (Filogenetik) Sınıflandırma" kullanır. \nDoğal Sınıflandırma EN ÇOK neye dayanır?',
        options: [
          { id: 'A', text: 'Canlıların sadece rengine' },
          { id: 'B', text: 'Sadece nerede yaşadıklarına (suda/karada)' },
          { id: 'C', text: 'Evrimsel akrabalığa, genetik (DNA) ve protein benzerliğine, ortak ataya' },
          { id: 'D', text: 'Sadece canlıların boylarına' },
          { id: 'E', text: 'Canlıların ne kadar yaşadıklarına' }
        ],
        correctOptionId: 'C',
        explanation: 'Gerçek (Doğal/Filogenetik) sınıflandırma, dış görünüşten çok "İç yapıya", yani genetiğe ve evrimsel akrabalığa (ortak kökene) bakar.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Modern (Doğal) sınıflandırmada, organların kökenine bakılır ve "Homolog Organ (Kökeni Aynı)" kavramı kullanılır. \nAşağıdakilerden hangisi HOMOLOG organa güzel bir örnektir?',
        options: [
          { id: 'A', text: 'Sinek kanadı - Kuş kanadı (Sadece görevleri aynı uçmak)' },
          { id: 'B', text: 'İnsanın kolu, Balinanın yüzgeci, Yarasanın kanadı (Dışarıdan farklı görünseler de iç kemik dizilimleri ve kökenleri aynıdır)' },
          { id: 'C', text: 'Kelebek kanadı - Kartal kanadı' },
          { id: 'D', text: 'Balık yüzgeci - Denizaltı pervanesi' },
          { id: 'E', text: 'Kedi patisi - Ağaç dalı' }
        ],
        correctOptionId: 'B',
        explanation: 'Homolog organlarda GÖREV FARKLI OLABİLİR (Biri tutar, biri yüzer, biri uçar). Ama iç kemik yapısı ve embriyolojik KÖKEN AYNIDIR.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Doğal (Filogenetik) sınıflandırma yaparken Biyologlar canlıların HANGİ ÖZELLİĞİNE DİKKAT ETMEZLER?',
        options: [
          { id: 'A', text: 'DNA (Gen) dizilimi benzerliğine' },
          { id: 'B', text: 'Protein benzerliğine' },
          { id: 'C', text: 'Embriyolojik gelişim benzerliğine' },
          { id: 'D', text: 'Canlının dış görününe göre YAPAY OLARAK (Sadece göz kararı) benzerliğine ve analog organlarına' },
          { id: 'E', text: 'Hücre yapısı (Prokaryot/Ökaryot) benzerliğine' }
        ],
        correctOptionId: 'D',
        explanation: 'Doğal sınıflandırmada Analog (sadece görevi aynı) organların hiçbir önemi yoktur. Önemli olan Homolog (kökeni aynı) organlar ve genetik (DNA) şifredir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'İki canlının PROTEİN yapılarının birbirine ÇOK BENZEMESİ bize neyi KANITLAR?',
        options: [
          { id: 'A', text: 'Aynı yaşta olduklarını' },
          { id: 'B', text: 'Aynı besini yediklerini' },
          { id: 'C', text: 'Bu iki canlının evrimsel olarak birbirine ÇOK YAKIN AKRABA olduklarını (Çünkü proteini şifreleyen DNA\'dır)' },
          { id: 'D', text: 'Farklı alemde olduklarını' },
          { id: 'E', text: 'İkisinin de bitki olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Proteinler, doğrudan DNA\'daki şifreye göre üretilir. Proteinler benziyorsa DNA\'lar benziyor, DNA\'lar benziyorsa bu canlılar birbirine yakın akrabadır demektir.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Modern (Filogenetik) sınıflandırmanın TEMEL BİRİMİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Alem' },
          { id: 'B', text: 'Takım' },
          { id: 'C', text: 'TÜR (En küçük ve temel sınıflandırma birimi)' },
          { id: 'D', text: 'Domain' },
          { id: 'E', text: 'Cins' }
        ],
        correctOptionId: 'C',
        explanation: 'Sınıflandırmanın yapı taşı (En küçük kategorisi) "Tür"dür. (Örn: Ev kedisi bir türdür, İnsan bir türdür).'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Aşağıdaki ikililerden hangisi Analog (Görevleri aynı ama Kökleri farklı) organa sahiptir ve Suni (Yapay) sınıflandırmayı YANILTMASINA güzel bir örnektir?',
        options: [
          { id: 'A', text: 'İnsan kolu - Maymun kolu' },
          { id: 'B', text: 'Kedi ayağı - Kaplan ayağı' },
          { id: 'C', text: 'Böcek Kanadı (Zarsı) - Kuş Kanadı (Kemikli ve Tüylü)' },
          { id: 'D', text: 'İnsan Dişi - Maymun Dişi' },
          { id: 'E', text: 'Kuş gagası - Tavuk gagası' }
        ],
        correctOptionId: 'C',
        explanation: 'İkisi de uçar (Görev aynı/Analog). Aristo bunu görüp aynı gruba koydu ama modern bilim ikisinin kökünün tamamen farklı olduğunu buldu.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: '"Farklı türden canlılar (Örn: Hamsi ve Yunus) aynı ortamda (Denizde) yaşadıkları için vücut şekilleri birbirine benzeyebilir (Mekik şeklinde)." \nBu benzerlik onların yakın akraba olduğu anlamına gelir mi?',
        options: [
          { id: 'A', text: 'Evet, denizde yaşayan herkes akrabadır.' },
          { id: 'B', text: 'Hayır. Yunus memelidir, hamsi balıktır. Sadece AYNI ÇEVREYE uyum sağladıkları için DIŞ GÖRÜNÜŞLERİ benzemiştir (Analog). Akraba DEĞİLLERDİR.' },
          { id: 'C', text: 'Evet, balıklar memelilerden türemiştir.' },
          { id: 'D', text: 'Hayır, çünkü yunus denizde yaşamaz.' },
          { id: 'E', text: 'Evet, çünkü renkleri aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dış görünüşün benzemesi (aynı ortam/su direnci nedeniyle mekik şeklinde vücut) akrabalık (Doğal sınıflandırma) kanıtı Olamaz.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Modern (Doğal) Sınıflandırmayı (İlk taksonomi sistemini) kuran ve İkili Adlandırmayı (Binomiyal Sistemi) başlatan ünlü bilim insanı kimdir?',
        options: [
          { id: 'A', text: 'Aristo' },
          { id: 'B', text: 'Carl Linnaeus (Linne)' },
          { id: 'C', text: 'Louis Pasteur' },
          { id: 'D', text: 'Albert Einstein' },
          { id: 'E', text: 'Isaac Newton' }
        ],
        correctOptionId: 'B',
        explanation: 'Linnaeus (Linne), Türden Aleme kadar hiyerarşik sınıflandırmayı ve latince İkili adlandırmayı (Örn: Homo sapiens) getiren babasıdır.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Canlıların sınıflandırılması Biyoloji için neden ÇOK ÖNEMLİDİR?',
        options: [
          { id: 'A', text: 'Canlıların çok olması biyologları yorduğu için.' },
          { id: 'B', text: 'Sınıflandırma, canlılar dünyasındaki KARIŞIKLIĞI GİDERİR, uluslararası (Latince) ortak bir dil oluşturur ve akrabalıkları KAVRAMAMIZI sağlar.' },
          { id: 'C', text: 'Sadece güzel göründüğü için.' },
          { id: 'D', text: 'Canlıların isimlerini ezberlemeyi zorlaştırmak için.' },
          { id: 'E', text: 'Sınıflandırma sadece hayvanlar için gereklidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sınıflandırma (Taksonomi), milyonlarca canlıyı ortak ve sistematik bir kütüphaneye dizersen anlamanı ve aradığını bulmanı (dünya çapında aynı dille) sağlar.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Sınıflandırma bilimine ne ad verilir?',
        options: [
          { id: 'A', text: 'Ekoloji' },
          { id: 'B', text: 'Anatomi' },
          { id: 'C', text: 'Taksonomi (Sistematik)' },
          { id: 'D', text: 'Genetik' },
          { id: 'E', text: 'Fizyoloji' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlıların sınıflandırılması, gruplara ayrılması ve isimlendirilmesi bilimine "Taksonomi (veya Sistematik)" denir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Tür Kavramı ve İkili (Binomiyal) Adlandırma (Very Easy)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Modern biyolojide "TÜR" kavramının EN ÖNEMLİ, KESİN tanımı (Biyolojik Tür Tanımı) nedir?',
        options: [
          { id: 'A', text: 'Birbirine benzeyen bütün canlılar bir türdür.' },
          { id: 'B', text: 'Aynı ormanda yaşayan hayvanlar bir türdür.' },
          { id: 'C', text: 'Ortak bir atadan gelen, yapıca birbirine benzeyen ve DOĞAL ORTAMDA ÇİFTLEŞTİKLERİNDE "VERİMLİ (Kısır olmayan)" DÖLLER/YAVRULAR VEREBİLEN bireyler topluluğudur.' },
          { id: 'D', text: 'Boyları ve kiloları aynı olan canlılardır.' },
          { id: 'E', text: 'Kan grupları aynı olan canlılardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'TÜR olmanın EN KESİN şartı, çiftleştiklerinde doğan YAVRUNUN DA YAVRUSU (Torun) olabilmesi, yani "verimli/kısır olmayan" nesiller devam ettirebilmesidir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'At ve Eşek çiftleştiğinde "Katır" meydana gelir. Katır canlı ve güçlü bir hayvandır ancak KISIRDIR (kendi yavrusu olmaz). \nBu durum bize At ve Eşek için NEYİ KANITLAR?',
        options: [
          { id: 'A', text: 'İkisinin AYNI TÜR olduğunu' },
          { id: 'B', text: 'İkisinin de bitki olduğunu' },
          { id: 'C', text: 'At ve Eşeğin FARKLI TÜRLER olduğunu (Çünkü yavru olan katır KISIRDIR, verimli döl oluşmamıştır).' },
          { id: 'D', text: 'Katırların evrim geçirdiğini' },
          { id: 'E', text: 'Eşeğin atın atası olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer aynı tür olsalardı, doğan yavru (katır) da sağlıklı üreyebilmeliydi (Örn: İki köpeğin yavrusunun da köpeği olması gibi). Katır kısırdır = Anne-Baba farklı türdür.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Carl Linnaeus, türleri isimlendirirken tüm dünyada (Çin\'den Amerika\'ya) aynı anlaşılsın diye HANGİ DİLİ kullanmıştır?',
        options: [
          { id: 'A', text: 'İngilizce' },
          { id: 'B', text: 'Türkçe' },
          { id: 'C', text: 'Fransızca' },
          { id: 'D', text: 'Latince' },
          { id: 'E', text: 'Arapça' }
        ],
        correctOptionId: 'D',
        explanation: 'Bilim dili, değişmeyen ölü bir dil olan Latince üzerine kurulmuştur.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'İkili adlandırma (Binomiyal adlandırma) kuralına göre, bir canlı türünün İSMİ kaç kelimeden oluşur?',
        options: [
          { id: 'A', text: 'Bir' },
          { id: 'B', text: 'İKİ (Örn: Pinus nigra / Kara çam)' },
          { id: 'C', text: 'Üç' },
          { id: 'D', text: 'Dört' },
          { id: 'E', text: 'Beş' }
        ],
        correctOptionId: 'B',
        explanation: 'Adı üstünde "İkili" (Binomiyal) adlandırma. Tür isimleri, insanların "Adı Soyadı" gibi iki kelimeden (Cins adı + Tamamlayıcı ad) oluşur.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Bir türün iki kelimelik bilimsel isminde (Örn: "Felis domesticus" - Ev kedisi), BİRİNCİ KELİME (Felis) canlının neyini belirtir?',
        options: [
          { id: 'A', text: 'Canlının Rengini' },
          { id: 'B', text: 'Canlının CİNS ADINI (Akrabalık grubunu/Soyadını)' },
          { id: 'C', text: 'Canlının Yaşını' },
          { id: 'D', text: 'Canlının Hastalığını' },
          { id: 'E', text: 'Canlının Ülkesini' }
        ],
        correctOptionId: 'B',
        explanation: 'İkili adlandırmada 1. kelime = CİNS adıdır. İnsandaki Soyadı gibi düşünülür. (Aynı cinsten olanlar yakın akrabadır).'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Bir türün ikili isminde (Örn: "Felis domesticus"), İKİNCİ KELİME (domesticus) ne anlama gelir?',
        options: [
          { id: 'A', text: 'İkinci cins adıdır.' },
          { id: 'B', text: 'Alem adıdır.' },
          { id: 'C', text: 'TAMAMLAYICI (Tanımlayıcı) addır. Cins adı ile BİRLİKTE "TÜR" adını oluşturur.' },
          { id: 'D', text: 'Sadece renk belirtir.' },
          { id: 'E', text: 'Sayıyı belirtir.' }
        ],
        correctOptionId: 'C',
        explanation: '1. kelime: Cins, 2. Kelime: Tamamlayıcı ad. İkisinin BİRLİKTE okunması = TÜR ADI\'dır.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: '"Pinus nigra" (Kara çam) ile "Pinus brutia" (Kızıl çam) bitkilerinin BİRİNCİ KELİMELERİ (Pinus) AYNIDIR. \nBu durum bize biyolojik olarak ne anlatır?',
        options: [
          { id: 'A', text: 'Farklı alemde olduklarını' },
          { id: 'B', text: 'Tamamen aynı TÜR olduklarını' },
          { id: 'C', text: 'AYNI CİNSTEN olduklarını ve birbirlerine çok YAKIN AKRABA olduklarını (İkisi de çam türü).' },
          { id: 'D', text: 'Hayvan olduklarını' },
          { id: 'E', text: 'Köklerinin aynı olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'İlk isimleri (Cins / Soyadı) aynı olan canlılar yakın akrabadır. Pinus = Çam demektir. (Biri kara çam, diğeri kızıl çam).'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: '"Morus alba" (Beyaz dut) ile "Populus alba" (Ak kavak) bitkilerinin İKİNCİ KELİMELERİ (alba = beyaz/ak) AYNIDIR. \nBu iki bitki birbiriyle YAKIN AKRABA MIDIR?',
        options: [
          { id: 'A', text: 'Evet, çok yakın akrabadır.' },
          { id: 'B', text: 'Evet, ikisi de aynı bitkidir.' },
          { id: 'C', text: 'HAYIR. İkinci kelimeler sadece renk/sıfat vb (Tamamlayıcı addır). Akrabalığı BİRİNCİ KELİME (Cins adı) belirler. Cinsleri Morus ve Populus farklıdır (Akraba değillerdir).' },
          { id: 'D', text: 'Akrabadırlar ama sadece kışın.' },
          { id: 'E', text: 'Evet, ikinci isim en önemlidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'En klasik tuzak. Akrabalık 1. İSME (Cins ismine) bakılarak anlaşılır. 2. isim sadece "beyaz, dağ, ev" gibi bir sıfattır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Tür isimleri yazılırken BÜYÜK ve küçük harf kuralları nasıldır? (Örn: Felis domesticus)',
        options: [
          { id: 'A', text: 'İkisi de büyük yazılır (FELİS DOMESTİCUS)' },
          { id: 'B', text: 'İkisi de küçük yazılır (felis domesticus)' },
          { id: 'C', text: '1. kelimenin baş harfi BÜYÜK, 2. kelimenin tamamı KÜÇÜK harfle başlar.' },
          { id: 'D', text: '1. kelime küçük, 2. kelime büyük başlar (felis Domesticus)' },
          { id: 'E', text: 'Hiçbir kural yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkili adlandırma yazım kuralı: İlk harf büyük (Felis), ikincisi hep küçük (domesticus). Ayrıca kitaplarda italik (eğik) yazılır.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Aşağıda 4 canlının bilimsel adları verilmiştir:\n1. Felis leo\n2. Canis lupus\n3. Felis domesticus\n4. Pinus nigra\nHangi iki canlı birbirine EN YAKIN AKRABADIR?',
        options: [
          { id: 'A', text: '1 ve 2' },
          { id: 'B', text: '1 ve 3 (Çünkü birinci isimleri yani Cinsleri aynıdır - Felis)' },
          { id: 'C', text: '3 ve 4' },
          { id: 'D', text: '2 ve 4' },
          { id: 'E', text: 'Hepsi aynı akrabadır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Akrabalık BİRİNCİ kelimeye (Cins) bakılarak anlaşılır. 1. ve 3. nün Cins adı (Felis) aynı olduğu için yakın akrabadırlar (Kedigiller).'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: '"Canis lupus" ile "Canis familiaris" çiftleştiklerinde doğurgan (kısır olmayan) bir yavru (Örn: kurt köpeği) verebilir. \nBu nadir durum, Modern Tür Tanımı (Doğada Kısır olmayan döl verme) ile TAM uyuşur mu?',
        options: [
          { id: 'A', text: 'Evet, her kural uyuşur.' },
          { id: 'B', text: 'Modern Biyolojide TÜR kavramı bazen sınırları zorlar. Kurt (lupus) ve Köpek (familiaris) normalde (doğada) ayrı tür sayılsa da yakın akraba oldukları için verimli döl verebilirler (İstisnai bir evrimsel geçiş durumudur).' },
          { id: 'C', text: 'Hayır, köpekler ottur.' },
          { id: 'D', text: 'Biyolojide hiç istisna yoktur.' },
          { id: 'E', text: 'İkisi de tamamen aynı türdür, yanlış isimlendirilmiştir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tür tanımı %100 her zaman kusursuz çalışmaz (özellikle evrimi yeni ayrılmış yakın türlerde, kurt ve köpek gibi istisnalar vardır). Ama genel müfredat kuralı: "Aynı tür = Verimli döl" şeklindedir.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Aynı "Tür" içindeki (Örn: İnsan - Homo sapiens) tüm sağlıklı bireyler için AŞAĞIDAKİLERDEN HANGİSİ KESİNLİKLE AYNIDIR?',
        options: [
          { id: 'A', text: 'Boyları ve kiloları' },
          { id: 'B', text: 'Göz renkleri' },
          { id: 'C', text: 'Kan grupları' },
          { id: 'D', text: 'Kromozom Sayıları (Örn: Sağlıklı insanlarda her zaman 46)' },
          { id: 'E', text: 'Ayak numaraları' }
        ],
        correctOptionId: 'D',
        explanation: 'Aynı türe ait sağlıklı bireylerin Kromozom Sayıları sabittir (İnsan: 46). Ancak kromozom sayısı aynı olan iki farklı canlı da (Moli balığı 46) olabilir.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: '"İnsanlarda kromozom sayısı 46\'dır. Moli balıklarında da kromozom sayısı 46\'dır." \nBu bilgiye göre "Kromozom sayısı AYNIDIR" diyerek İnsan ve Moli Balığı için NE SÖYLEYEMEYİZ?',
        options: [
          { id: 'A', text: 'İkisinin de DNA taşıdığını' },
          { id: 'B', text: 'İkisinin de hücreden oluştuğunu' },
          { id: 'C', text: 'İkisinin AYNI TÜR veya YAKIN AKRABA olduğunu (SÖYLEYEMEYİZ, kromozom sayısının aynı olması akrabalık GÖSTERMEZ).' },
          { id: 'D', text: 'İkisinin de solunum yaptığını' },
          { id: 'E', text: 'İkisinin de beslendiğini' }
        ],
        correctOptionId: 'C',
        explanation: 'Klasik Soru: Kromozom sayısının aynı olması akrabalık veya gelişmişlik BELİRTMEZ (Örn: Eğrelti otu 500 kromozom, İnsan 46).'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Bakteriler gibi "Eşeysiz (Bölünerek)" üreyen canlılarda (çiftleşme olmadığı için) Biyolojik TÜR TANIMI (verimli döl verme şartı) tam olarak kullanılabilir mi?',
        options: [
          { id: 'A', text: 'Evet, mükemmel kullanılır.' },
          { id: 'B', text: 'HAYIR. Çiftleşme/döl verme durumu eşeysiz üreyenlerde kullanılamaz. Onların tür tayini DNA ve hücre yapısı (Biyokimyasal) testleriyle yapılır.' },
          { id: 'C', text: 'Bakteriler canlı değildir.' },
          { id: 'D', text: 'Bakteriler eşeyli ürer.' },
          { id: 'E', text: 'Sadece renklerine bakılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyolojik tür tanımı (çiftleşip verimli yavru vermek) ancak Eşeyli üreyen çok hücrelilerde işe yarar. Fosil veya Bakterilerde DNA/Anatomi kullanılır.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Canlıların ikili adlandırması (Örn: Panthera tigris / Kaplan) ve tür kavramı, biyolojide hangi problemin ÇÖZÜMÜ OLMUŞTUR?',
        options: [
          { id: 'A', text: 'Herkesin her hayvana yöresel bir isim (Yozgat\'ta başka, İngiltere\'de başka) takması nedeniyle oluşan KARMAŞANIN çözümüdür.' },
          { id: 'B', text: 'Canlıların çok yemek yemesinin çözümüdür.' },
          { id: 'C', text: 'İklim değişikliğinin çözümüdür.' },
          { id: 'D', text: 'Yerçekiminin çözümüdür.' },
          { id: 'E', text: 'Sadece bitkilerin büyümesini hızlandırır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bilimsel (Latince) isimlendirme, yöresel dillerdeki isim karmaşasını bitirmiş, tek bir evrensel kod (katalog) oluşturmuştur.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Sınıflandırma Kategorileri (Türden Aleme) (Very Easy)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Biyolojik Sınıflandırma Hiyerarşisi (Küçükten Büyüğe - Özelden Genele) nasıldır? \n(Türkiye Cumhuriyeti Futbol Takımı Sahada Şut Attı - Şifresini hatırlayın)',
        options: [
          { id: 'A', text: 'Alem -> Tür -> Cins -> Sınıf' },
          { id: 'B', text: 'TÜR -> CİNS -> AİLE (Familya) -> TAKIM -> SINIF -> ŞUBE -> ALEM' },
          { id: 'C', text: 'Cins -> Tür -> Şube -> Takım' },
          { id: 'D', text: 'Alem -> Şube -> Aile -> Tür' },
          { id: 'E', text: 'Sınıf -> Takım -> Cins -> Tür' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçükten büyüğe: Tür, Cins, Aile(Familya), Takım, Sınıf, Şube, Alem (Domain). Ezber kodlaması: Türkiye(Tür) Cumhuriyeti(Cins) Futbol(Familya) Takımı(Takım) Sahada(Sınıf) Şut(Şube) Attı(Alem).'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Türden Aleme doğru (Aşağıdan yukarıya / Özelden genele) gidildikçe canlıların BİREBİR ORTAK ÖZELLİKLERİ NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Sürekli artar.' },
          { id: 'B', text: 'Sürekli AZALIR (Alem çok geneline hitap eder).' },
          { id: 'C', text: 'Değişmez.' },
          { id: 'D', text: 'Önce artar sonra azalır.' },
          { id: 'E', text: 'Tamamen aynı kalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tür kutusu küçüktür (Sadece İnsanlar). Alem kutusu devasadır (İnsan, Böcek, Sünger, Balina hepsi hayvanlar aleminde). Dolayısıyla kalabalıklaştıkça "ortak özellik/benzerlik" AZALIR.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Türden Aleme doğru (Yukarıya) gidildikçe canlının protein yapısı (ve Genetik dizilimi) BENZERLİĞİ nasıl değişir?',
        options: [
          { id: 'A', text: 'Artar.' },
          { id: 'B', text: 'AZALIR (Türde herkes birbirine benzer, Alemde herkes çok farklıdır).' },
          { id: 'C', text: 'Sıfır olur.' },
          { id: 'D', text: 'Sabit kalır.' },
          { id: 'E', text: 'Önce azalır sonra artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı Tür içindeki canlılar (İnsan - İnsan) genetik olarak %99.9 aynıdır. Hayvanlar Alemi dediğinizde İnsan ile Süngerin (Deniz süngeri) genetiği çok az benzer.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Türden Aleme doğru gidildikçe canlı BİREY SAYISI (Çeşitlilik / Canlı Havuzu) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Azalır' },
          { id: 'B', text: 'ARTAR (Kutu büyüdüğü için içindeki canlı sayısı ve tür çeşidi çok fazlalaşır)' },
          { id: 'C', text: 'Sabit kalır' },
          { id: 'D', text: 'Sıfırlanır' },
          { id: 'E', text: 'Artmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Sadece "Kedi (Tür)" demek 1 türdür. "Hayvanlar Alemi" derseniz içine milyonlarca tür kedi, köpek, balık, kuş girer (Birey sayısı ve çeşitlilik ARTAR).'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: '"Alemden Türe doğru (Büyük kutudan Küçük Kutuya / Yukarıdan Aşağıya)" inildikçe ORTAK ÖZELLİK (Benzerlik) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Azalır' },
          { id: 'B', text: 'ARTAR (Daha spesifik ve yakın akraba olan dar bir gruba inilir)' },
          { id: 'C', text: 'Değişmez' },
          { id: 'D', text: 'Sıfır olur' },
          { id: 'E', text: 'Hem artar hem azalır' }
        ],
        correctOptionId: 'B',
        explanation: 'Geniş bir listeden (Alem) dar ve özel bir gruba (Tür) iniyorsunuz. O küçük gruptakilerin hepsi birbirine çok benzer (Ortak özellik ARTAR).'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Çok önemli Kural: İki farklı canlı (Örn: A ve B canlısı) sınıflandırmada AYNI "TAKIM" (Veya herhangi bir basamak) içinde bulunuyorsa, bu iki canlı İÇİN KESİN OLARAK NE SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Aynı Türden oldukları.' },
          { id: 'B', text: 'Aynı Cinsten oldukları.' },
          { id: 'C', text: 'Takımdan DAHA ÜST (Büyük) olan bütün kategorilerinin (Sınıf, Şube, Alem) KESİNLİKLE AYNI olduğu.' },
          { id: 'D', text: 'Boylarının aynı olduğu.' },
          { id: 'E', text: 'Renklerinin aynı olduğu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Aynı Takımda olanlar KESİNLİKLE aynı Sınıf, aynı Şube ve aynı Alemden gelmişlerdir (Kutu kutu içindedir). Ancak alt basamakları (Aile, Cins, Tür) aynı da olabilir farklı da.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: '"Aslan ve Kaplan aynı Aile (Kedigiller) içindedir." \nBu bilgiye göre Aslan ve Kaplan KESİNLİKLE aynı hangi YUKARI (Üst) gruptadırlar?',
        options: [
          { id: 'A', text: 'Aynı Tür içindedirler (Yanlış, Tür en alttır).' },
          { id: 'B', text: 'Aynı Takım, Aynı Sınıf, Aynı Şube ve Aynı Alemdedirler (Üst kutular kesin aynıdır).' },
          { id: 'C', text: 'Sadece aynı alem dedirler.' },
          { id: 'D', text: 'Akraba değillerdir.' },
          { id: 'E', text: 'Biri hayvan biri bitkidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Familyası (Ailesi) aynı olanın, onu kapsayan tüm üst kutuları (Takım, Sınıf, Şube, Alem) MECBUREN aynıdır.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Canlıların sınıflandırılmasında, günümüzde "Alem (Regnum)" kategorisinin de ÜSTÜNDE olan EN BÜYÜK (En Kapsayıcı) BİRİM hangisidir?',
        options: [
          { id: 'A', text: 'Tür' },
          { id: 'B', text: 'Cins' },
          { id: 'C', text: 'DOMAİN (Üst Alem)' },
          { id: 'D', text: 'Takım' },
          { id: 'E', text: 'Şube' }
        ],
        correctOptionId: 'C',
        explanation: 'Modern biyolojide genetik farklılıklar dikkate alınarak Canlılar; 3 devasa Domain (Bakteri, Arke, Ökaryot) içine alınır. Alemler (Hayvan, bitki vb) bu Domainlerin altındadır.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'İki canlının SADECE "Aynı Alemde (Örn: Hayvanlar)" olduğunu biliyorsak, altındaki (Şube, Sınıf, Takım, Aile, Cins, Tür) kategorileri AYNI OLABİLİR Mİ?',
        options: [
          { id: 'A', text: 'Hepsi kesinlikle aynıdır.' },
          { id: 'B', text: 'Bilemeyiz. Aynı ÜST kutuda olmaları, alt kutularının KESİN AYNI olacağını GÖSTERMEZ. (Biri balık şubesinde, biri memeli şubesinde olabilir).' },
          { id: 'C', text: 'Hepsi kesinlikle farklıdır.' },
          { id: 'D', text: 'Sadece türleri aynıdır.' },
          { id: 'E', text: 'Alem en küçüktür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Üstleri aynı diye altları aynı olacak DİYE BİR KURAL YOKTUR. (Aynı okuldayız / Alem. Ama aynı sınıfta mıyız bilmiyoruz).'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Sınıflandırma kategorileriyle ilgili "İnsan" örneği düşünülürse, (Domain: Ökaryot -> Alem: Hayvan -> Şube: Kordalı -> Sınıf: Memeli -> Takım: Primat -> Aile: Hominidae -> Cins: Homo -> Tür: Homo sapiens). \nİnsan, Kordalılar şubesindedir. Aynı şubede bir BALIK da vardır. \nBuna göre İnsan ve Balık HANGİ BASAMAKLARI KESİN olarak ORTAK paylaşır?',
        options: [
          { id: 'A', text: 'Takım ve Tür' },
          { id: 'B', text: 'Sınıf ve Cins' },
          { id: 'C', text: 'Şube (Şu an bulundukları yer) ve onun ÜSTÜNDE KALAN Alem ile Domain basamaklarını' },
          { id: 'D', text: 'Sadece Tür' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'C',
        explanation: 'Kesiştikleri yer (Şube) ve üstleri hep ortaktır (Alem, Domain). Altında kalan Sınıfları farklıdır (Biri Memeli, biri Balık sınıfı).'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: '"Felis (Kedi)" bir Cins adıdır. Cins kutusunun bir üstündeki ve bir altındaki kategoriler sırasıyla hangileridir?',
        options: [
          { id: 'A', text: 'Üst: Familya(Aile) / Alt: Tür' },
          { id: 'B', text: 'Üst: Alem / Alt: Şube' },
          { id: 'C', text: 'Üst: Tür / Alt: Aile' },
          { id: 'D', text: 'Üst: Takım / Alt: Sınıf' },
          { id: 'E', text: 'Üst: Cins / Alt: Cins' }
        ],
        correctOptionId: 'A',
        explanation: 'Sıralama: Aile -> CİNS -> Tür. Cinsin hemen üstü (onu kapsayan) Aile (Familya), altı (içindeki parça) ise Türdür.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Birbirine benzeyen ve yakın akraba olan TÜRLER birleşerek neyi (hangi üst kutuyu) oluşturur?',
        options: [
          { id: 'A', text: 'Alemi' },
          { id: 'B', text: 'CİNSİ (Örn: Köpek türü, Kurt türü, Çakal türü birleşir -> Canis (Köpekler) CİNSİNİ oluşturur)' },
          { id: 'C', text: 'Şubeyi' },
          { id: 'D', text: 'Takımı' },
          { id: 'E', text: 'Domaini' }
        ],
        correctOptionId: 'B',
        explanation: 'Hiyerarşi alttan yukarı toplanarak gider. Yakın Türler -> Cinsi. Yakın Cinsler -> Aileyi (Familyayı). Yakın Aileler -> Takımı oluşturur.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Biyologlar yeni bir böcek türü (Örn: X) keşfetmiştir. Bu böcek X, DNA testi sonucu Y böceği ile AYNI CİNS, Z böceği ile AYNI AİLE (Familya) çıkmıştır. \nBuna göre X böceği en çok HANGİSİNE YAKIN AKRABADIR?',
        options: [
          { id: 'A', text: 'Z böceğine' },
          { id: 'B', text: 'İkisine de eşit.' },
          { id: 'C', text: 'Y böceğine (Çünkü CİNS kutusu daha DAR/AŞAĞIDADIR, daha yakın akrabaları barındırır).' },
          { id: 'D', text: 'Hiçbirine' },
          { id: 'E', text: 'Kendisine' }
        ],
        correctOptionId: 'C',
        explanation: 'Tür\'e ne kadar yakın yerde (Aşağıda) birleşirlerse, o kadar yakın akrabadırlar. Cins Aileden daha özel (yakın) bir kutudur.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Türden Aleme doğru (Yukarı doğru) çıkıldıkça canlıların Analog organ sayıları artarken, Homolog (Kökeni aynı) organ sayıları NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Artar' },
          { id: 'B', text: 'AZALIR (Çünkü akrabalık uzaklaşır, kökenler farklılaşır).' },
          { id: 'C', text: 'Değişmez' },
          { id: 'D', text: 'Sıfır olur' },
          { id: 'E', text: 'Önce azalır sonra artar' }
        ],
        correctOptionId: 'B',
        explanation: 'Yukarı (Aleme) çıktıkça, birbirine akraba (Homolog) olmayan birbirinden çok farklı bir sürü hayvan işin içine girer, Homologluk oranı azalır.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Taksonomi (Sınıflandırma) basamaklarının oluşturulmasının EN TEMEL AMACI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Canlıları rastgele kutulara atmak.' },
          { id: 'B', text: 'Bütün canlılara aynı ismi vermek.' },
          { id: 'C', text: 'Canlıların Evrimsel Gelişimini (Filogeni) ve Akrabalık Derecelerini soy ağacı gibi açıkça GÖSTERMEK ve sınıflandırmak.' },
          { id: 'D', text: 'Hayvanları kafeslere ayırmak.' },
          { id: 'E', text: 'Bitkileri kurutmak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hiyerarşik sistem tamamen "Kim kimden geliyor, kim kime ne kadar yakın akraba?" sorusunun bilimsel bir klasör sistemidir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Domainler ve Alemlere Giriş (Prokaryotlar) (Very Easy)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Modern Sınıflandırmaya göre tüm canlılık "Hücre Tiplerine (Prokaryot/Ökaryot)" ve "Genetik farklılıklara" göre 3 büyük DOMAİN (Üst Alem) altında toplanır. \nBu 3 Domain hangileridir?',
        options: [
          { id: 'A', text: 'Bitki - Hayvan - Mantar' },
          { id: 'B', text: 'Bakteriler - Arkeler - Ökaryotlar (Eukarya)' },
          { id: 'C', text: 'Ot - Çalı - Ağaç' },
          { id: 'D', text: 'Suda Yaşayanlar - Karada Yaşayanlar - Uçanlar' },
          { id: 'E', text: 'Omurgalılar - Omurgasızlar - Tek Hücreliler' }
        ],
        correctOptionId: 'B',
        explanation: 'En üst 3 klasör (Domain): Bakteri(Prokaryot), Arke(Prokaryot) ve Geri kalan her şeyin (Bitki, hayvan, mantar, amip vb) toplandığı Eukarya (Ökaryot) domainidir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Aşağıdaki alemlerden hangisi "ÖKARYOT (Çekirdekli)" domaini İÇİNDE YER ALMAZ?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Hayvanlar' },
          { id: 'C', text: 'BAKTERİLER (Bakteriler Prokaryot yapıda oldukları için ayrı bir domaindir)' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'Protistalar' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler ve Arkeler "Prokaryot (Çekirdeksiz/Zarsız)" hücre yapısına sahiptir. Bitki, hayvan, mantar, protista ise Ökaryottur.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: '"Bakteriler Domaini (Alemi)", yeryüzünde en çok bulunan ve en eski canlılardan oluşur. Bakterilerin HÜCRE YAPISI nasıldır?',
        options: [
          { id: 'A', text: 'Çok hücrelidir, büyük organları vardır.' },
          { id: 'B', text: 'Ökaryottur, çekirdekleri çok büyüktür.' },
          { id: 'C', text: 'Tek Hücreli ve PROKARYOTTUR (Zarla çevrili bir çekirdekleri veya organelleri YOKTUR).' },
          { id: 'D', text: 'Hücresel yapıda değillerdir, virüs gibidirler.' },
          { id: 'E', text: 'Sadece 5 hücreden oluşurlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri = Prokaryot Tek Hücreli. Çekirdek zarı, mitokondri, kloroplast gibi "Zarlı organelleri" yoktur. Sadece Zarsız olan Ribozomları vardır.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Bakterilerin tamamında Hücre Zarının DIŞINDA, koruyucu ve şekil verici olarak bulunan YAPI nedir?',
        options: [
          { id: 'A', text: 'Deri' },
          { id: 'B', text: 'Kemik' },
          { id: 'C', text: 'Hücre Duvarı (Peptidoglikan yapılı Çeper)' },
          { id: 'D', text: 'Tüy' },
          { id: 'E', text: 'Kabuk' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakterilerin (istisnalar hariç) hücre zarlarının etrafında peptidoglikan adlı sağlam maddeden yapılmış bir Hücre Duvarı (Çeperi) vardır.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: '"Peptidoglikan" adı verilen özel Hücre Duvarı maddesi, biyolojide SADECE hangi canlı grubu için ayırt edici bir özelliktir?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'BAKTERİLER' },
          { id: 'C', text: 'Mantarlar' },
          { id: 'D', text: 'Hayvanlar' },
          { id: 'E', text: 'İnsanlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Sorularda "Peptidoglikan duvar" duyarsanız direkt Bakteri diyeceksiniz. (Bitkide selüloz, mantarda kitindir).'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Bakteriler nasıl ÜRER (Çoğalır)?',
        options: [
          { id: 'A', text: 'Yumurtlayarak' },
          { id: 'B', text: 'Tohumla' },
          { id: 'C', text: 'Ortadan ikiye BÖLÜNEREK (Eşeysiz ve çok hızlı bir şekilde)' },
          { id: 'D', text: 'Doğurarak' },
          { id: 'E', text: 'Sporla' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakterilerde mitoz vb uzun süreçler yoktur. DNA kopyalanır ve hücre ortadan ikiye boğumlanarak basitçe (binary fission) bölünür.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: '"Arkeler (Archaea) Domaini", yapı olarak bakterilere çok benzer (ikisi de tek hücreli prokaryottur). Fakat bilim insanları onları NEDEN FARKLI (Bakteri olmayan) BİR DOMAİNE ayırmıştır?',
        options: [
          { id: 'A', text: 'Çünkü çok büyüklerdir.' },
          { id: 'B', text: 'Çünkü bitkidirler.' },
          { id: 'C', text: 'Hücre Duvarlarında Peptidoglikan OLMAYIŞI ve DNA genetik dizilimlerinin, Enzim yapılarının (Ökaryotlara daha çok benzemesi) NEDENİYLE.' },
          { id: 'D', text: 'Çünkü hareket etmezler.' },
          { id: 'E', text: 'Çünkü hepsi tatlıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Arkeler dışarıdan bakteriye benzer ama genetiğine/hücre duvarı kimyasına bakınca bakterilerden çok farklı, hatta ökaryotlara daha yakın oldukları anlaşıldı.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Arkeler (Archaea) genellikle doğada HANGİ ORTAMLARDA yaşamalarıyla (Ekstremofil olmalarıyla) ünlüdürler?',
        options: [
          { id: 'A', text: 'Sadece temiz tatlı sularda' },
          { id: 'B', text: 'Aşırı Tuzlu Göller, Aşırı Kaynar Sular, Yanardağ Ağızları, Aşırı Soğuk (Ekstrem / Çok sert) koşullarda' },
          { id: 'C', text: 'Sadece ormanda' },
          { id: 'D', text: 'Sadece insan midesinde' },
          { id: 'E', text: 'Havada uçarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Arkelerin enzimleri aşırı dirençlidir. Diğer canlıların yaşayamayacağı aşırı kaynar (termofil) veya aşırı tuzlu (halofil) ölümcül ortamlarda yaşayabilirler (Gerçi normal ortamda da vardırlar).'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: '"Metanojenler (Metan gazı üretenler)", bataklıklarda, çöplüklerde veya ineklerin midesinde oksijensiz ortamda yaşayan canlılardır. Bunlar hangi gruba girer?',
        options: [
          { id: 'A', text: 'Mantarlar' },
          { id: 'B', text: 'Bitkiler' },
          { id: 'C', text: 'ARKELER' },
          { id: 'D', text: 'Hayvanlar' },
          { id: 'E', text: 'Virüsler' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyogaz (Metan) üretiminden sorumlu olan canlılar zorunlu oksijensiz yaşayan Arkelerdir (Metanojenler).'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Bakterilerin bazıları ortam şartları (örneğin aşırı kuraklık veya sıcaklık) ÇOK KÖTÜLEŞTİĞİNDE hayatta kalabilmek için HANGİ ÖZEL YAPIYA (Uyku moduna) dönüşürler?',
        options: [
          { id: 'A', text: 'Mantarlara' },
          { id: 'B', text: 'Endospor (Dayanıklı Uyku/Kapsül hali)' },
          { id: 'C', text: 'Tohuma' },
          { id: 'D', text: 'Virüse' },
          { id: 'E', text: 'Taşa' }
        ],
        correctOptionId: 'B',
        explanation: 'Endospor BİR ÜREME DEĞİLDİR. Bakterinin su kaybedip, duvarını kalınlaştırıp ortam düzelene kadar yıllarca bekleyebildiği çok sağlam bir "Korunma" halidir.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Bütün bakteriler (veya arkeler) "Hastalık yapıcı (Patojen) mıdır? Zararlı mıdır?"',
        options: [
          { id: 'A', text: 'Evet, hepsi hastalık yapar.' },
          { id: 'B', text: 'Evet, hepsi zehirlidir.' },
          { id: 'C', text: 'HAYIR. Büyük çoğunluğu doğada çürükçül olarak Madde Döngüsü sağlar, bağırsaklarımızda B vitamini üretir, yoğurt/peynir yapar. Sadece bir kısmı hastalık (Patojen) yapar.' },
          { id: 'D', text: 'Sadece Arkeler hastalık yapar.' },
          { id: 'E', text: 'Hiçbiri hastalık yapmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Prokaryotlar dünyanın döngüsünü sağlayan isimsiz kahramanlardır (Saprofitler, Azot bağlayıcılar). Hastalık yapanlar çok küçük bir kısımdır.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Bakterilerde Oksijenli Solunum yapanlar (Mitokondrisi olamayacağına göre) Enerji üretme işlemini HÜCRENİN NERESİNDE gerçekleştirirler?',
        options: [
          { id: 'A', text: 'Çekirdekte' },
          { id: 'B', text: 'Hücre Zarının içeri doğru kıvrımlarında (Mezazom/Zar yüzeyinde) ve Sitoplazmada' },
          { id: 'C', text: 'Ribozomda' },
          { id: 'D', text: 'Hücre Duvarının dışında' },
          { id: 'E', text: 'Boşlukta' }
        ],
        correctOptionId: 'B',
        explanation: 'Prokaryotlarda zarla çevrili mitokondri odası OLAMAZ. Bu yüzden solunum enzimleri doğrudan hücrenin kendi ana zarına gömülüdür.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Fotosentez yapan (Kendi besinini ışıkla üreten) Siyanobakterilerde "Kloroplast" organeli VAR MIDIR?',
        options: [
          { id: 'A', text: 'Evet, vardır.' },
          { id: 'B', text: 'Evet, çok büyüktür.' },
          { id: 'C', text: 'HAYIR. Kloroplast zarlı bir organeldir, bakterilerde olamaz. Ancak yeşil renk veren ve ışığı tutan KLOROFİL PİGMENTLERİ sitoplazmada çıplak bulunur.' },
          { id: 'D', text: 'Hayır, bakteriler fotosentez yapamaz.' },
          { id: 'E', text: 'Sadece geceleri kloroplast oluşur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kural: Prokaryotta zarlı organel (Kloroplast vb) BULUNAMAZ. İşlemi yapan ana moleküller (Klorofil) sıvıya (Sitoplazmaya/Zara) dağınık haldedir.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: '"Bakteriler Tek Hücrelidir, Ökaryotlar ise Çok Hücrelidir." cümlesi DOĞRU MUDUR?',
        options: [
          { id: 'A', text: 'Evet, tamamen doğrudur.' },
          { id: 'B', text: 'Bakteriler çok hücrelidir.' },
          { id: 'C', text: 'YANLIŞTIR. Bakteriler tek hücrelidir (Doğru). Ancak Ökaryotların HESPSİ ÇOK HÜCRELİ DEĞİLDİR (Örn: Amip, Paramesyum, Öglena, Maya mantarı Ökaryot ve TEK HÜCRELİDİR).' },
          { id: 'D', text: 'İkisi de hücre içermez.' },
          { id: 'E', text: 'Evet, ökaryotlar sadece bitkidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ökaryot = Gelişmiş Hücre Tipi demektir. Gelişmiş tek oda (Amip) da vardır, Gelişmiş trilyon odalı saraylar (İnsan) da vardır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Bakterilerin bazılarında "Hastalık yapma (Patojen) gücünü artıran" ve bağışıklık sisteminden saklanmayı sağlayan EN DIŞTAKİ koruyucu kılıfa ne ad verilir?',
        options: [
          { id: 'A', text: 'Kamçı' },
          { id: 'B', text: 'KAPSÜL (Hücre duvarının da dışında bulunur)' },
          { id: 'C', text: 'Çekirdek' },
          { id: 'D', text: 'Sil' },
          { id: 'E', text: 'Göz' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapsül, genellikle hastalık yapan (Örn: Zatürre) bakterilerde bulunur. İnsan akyuvarları kapsüllü bakteriyi yakalayıp yutmakta çok zorlanır.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Protista Alemi (Very Easy)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Ökaryot (Çekirdekli) Domainin İLK ve EN İLKEL alemi olan "Protista Alemi" genel olarak nasıl canlılardan oluşur?',
        options: [
          { id: 'A', text: 'Sadece dev ağaçlardan' },
          { id: 'B', text: 'Çoğunlukla TEK HÜCRELİ (Amip, Öglena, Paramesyum) olan ancak çekirdeği ve zarlı organelleri bulunan gelişmiş mikroorganizmalardan.' },
          { id: 'C', text: 'Sadece zehirli yılanlardan' },
          { id: 'D', text: 'Prokaryot bakterilerden' },
          { id: 'E', text: 'İnsanlardan' }
        ],
        correctOptionId: 'B',
        explanation: 'Protistalar; Bitki, Hayvan veya Mantar olamayacak kadar basit ama Bakteri/Arke olamayacak kadar da karmaşık (Çekirdekli/Ökaryot) canlıların atıldığı "Karışık Sepet" alemidir.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Protista aleminde yer alan ve yalan ayaklarıyla (Sitoplazma uzantılarıyla) hareket edip besinini içeri alarak beslenen TEK HÜCRELİ canlı hangisidir?',
        options: [
          { id: 'A', text: 'Aslan' },
          { id: 'B', text: 'Mantar' },
          { id: 'C', text: 'AMİP' },
          { id: 'D', text: 'Gül' },
          { id: 'E', text: 'Köpek' }
        ],
        correctOptionId: 'C',
        explanation: 'Amip; şekilsiz, yalan ayaklarıyla hareket eden, tek hücreli, tüketici (heterotrof) bir protisttir.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Hem Kloroplast taşıyıp IŞIK VARKEN FOTOSENTEZ yapan, hem de karanlıkta dışarıdan hazır besin alan (Hem Ototrof Hem Heterotrof) kamçılı Protista hangisidir?',
        options: [
          { id: 'A', text: 'Paramesyum (Terliksi Hayvan)' },
          { id: 'B', text: 'Bakteri' },
          { id: 'C', text: 'ÖGLENA' },
          { id: 'D', text: 'Arke' },
          { id: 'E', text: 'Sünger' }
        ],
        correctOptionId: 'C',
        explanation: 'Öglena; ışık varken bitki gibi kendi besinini yapar, ışık yokken hayvan gibi dışarıdan yer. Bu yüzden özel bir örnektir.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Protista aleminin en tanınmış örneklerinden biri olan, üzerinde siller (küçük tüycükler) bulunan ve şekli terliğe benzeyen tek hücreli canlı hangisidir?',
        options: [
          { id: 'A', text: 'PARAMESYUM (Terliksi Hayvan)' },
          { id: 'B', text: 'Solucan' },
          { id: 'C', text: 'Yengeç' },
          { id: 'D', text: 'Çam ağacı' },
          { id: 'E', text: 'Şapkalı mantar' }
        ],
        correctOptionId: 'A',
        explanation: 'Paramesyum, silleri sayesinde çok hızlı yüzen ve diğer canlıları avlayan tek hücreli, gelişmiş bir protisttir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Tatlı sularda yaşayan Tek Hücreli Protistalarda (Amip, Öglena, Paramesyum), hücrenin içine giren FAZLA SUYU enerji (ATP) harcayarak Dışarı pompalayan HAYATİ organel hangisidir?',
        options: [
          { id: 'A', text: 'Ribozom' },
          { id: 'B', text: 'KONTRAKTİL (Vururgan) KOFUL' },
          { id: 'C', text: 'Çekirdek' },
          { id: 'D', text: 'Kloroplast' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Tatlı sularda su sürekli hücrenin içine girer (Osmozla). Eğer atılmazsa hücre şişip patlar. Kontraktil koful bir tulumba gibi çalışarak suyu dışarı atar.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Dünyadaki OKSİJENİN büyük bir kısmını (%70\'e yakınını) ormanlardan (Ağaçlardan) DAHA ÇOK ÜRETEN, denizlerdeki FOTOSENTETİK Protistalar (mikroskobik veya devasa su bitkisi benzeri canlılar) hangisidir?',
        options: [
          { id: 'A', text: 'Bakteriler' },
          { id: 'B', text: 'Amip' },
          { id: 'C', text: 'ALGLER (Su Yosunları)' },
          { id: 'D', text: 'Aslanlar' },
          { id: 'E', text: 'Böcekler' }
        ],
        correctOptionId: 'C',
        explanation: 'Algler, denizlerdeki fotosentetik fabrikalardır. Bitkilere çok benzerler ancak gerçek kök/gövde/yaprak dokuları olmadığı için Protista aleminde incelenirler.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: '"Plazmodyum", sivrisineklerle taşınan ve insanda "Sıtma" hastalığına neden olan bir canlıdır. Plazmodyum hangi alemde yer alır?',
        options: [
          { id: 'A', text: 'Hayvanlar' },
          { id: 'B', text: 'Bakteriler' },
          { id: 'C', text: 'PROTİSTA (Sporlular Grubu)' },
          { id: 'D', text: 'Bitkiler' },
          { id: 'E', text: 'Mantarlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Plazmodyum, hareketsiz ve zorunlu parazit olan tek hücreli bir ökaryottur (Protist). Sıtmanın etkenidir.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Cıvık mantarlar, isimlerine rağmen "Mantar" DEĞİLLERDİR. Neden Mantarlar aleminde değil de Protista aleminde incelenirler?',
        options: [
          { id: 'A', text: 'Çünkü yaprakları vardır.' },
          { id: 'B', text: 'Çünkü kemikleri vardır.' },
          { id: 'C', text: 'Hücre Duvarları OLMADIĞI ve amip gibi hareket edebildikleri için.' },
          { id: 'D', text: 'Fotosentez yaptıkları için.' },
          { id: 'E', text: 'Çok zeki oldukları için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Gerçek mantarların hücre duvarı (Kitin) vardır ve sabittirler. Cıvık mantarlar duvarı olmayan, devasa bir amip gibi sürünen ilginç protistalardır.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Protista alemindeki canlıların "HÜCRE TİPİ" hakkında kesin olarak ne söylenebilir?',
        options: [
          { id: 'A', text: 'Kesinlikle Prokaryotturlar.' },
          { id: 'B', text: 'Kesinlikle ÖKARYOT (Çekirdekli ve zarlı organelleri olan) hücrelere sahiptirler.' },
          { id: 'C', text: 'Hücreleri yoktur.' },
          { id: 'D', text: 'Sadece bitki hücresidirler.' },
          { id: 'E', text: 'Bakteri hücresidirler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Protista = İlk ve en ilkel "Ökaryot" alem. (Bakteri ve Arkeden ayrıldıkları temel nokta budur).'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Tatlı sularda yaşayan Paramesyumda hücre içine giren suyu atan Kontraktil Koful, görevini yaparken NE HARCAR?',
        options: [
          { id: 'A', text: 'Sadece Güneş ışığı' },
          { id: 'B', text: 'Hiçbir şey harcamaz.' },
          { id: 'C', text: 'Enerji (ATP) Harcar (Aktif bir pompalama işidir).' },
          { id: 'D', text: 'Tuz' },
          { id: 'E', text: 'Karbondioksit' }
        ],
        correctOptionId: 'C',
        explanation: 'Suyu sürekli dışarı basmak, tıpkı batan bir gemiden kova ile su atmak gibidir, ATP (Enerji) gerektirir.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Amip, besinini nasıl hücre içine alır?',
        options: [
          { id: 'A', text: 'Ağzıyla çiğneyerek.' },
          { id: 'B', text: 'Fotosentez yaparak (Işıkla).' },
          { id: 'C', text: 'Yalancı ayaklarıyla (Sitoplazmasını uzatarak) besini SARKARAK / İÇİNE ALARAK (Fagositoz).' },
          { id: 'D', text: 'Kökleriyle emerek.' },
          { id: 'E', text: 'Gagasıyla.' }
        ],
        correctOptionId: 'C',
        explanation: 'Amip bir "Tüketici" (Heterotrof) dir. Katı besinleri (bakterileri vb) etrafını sarıp yutarak (Fagositozla) yer.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Öglena\'nın "Ototrof (Kendi besinini üreten)" olduğunu kanıtlayan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Kamçısı' },
          { id: 'B', text: 'Hücre Zarı' },
          { id: 'C', text: 'Kloroplastı (İçindeki klorofil ile fotosentez yapar)' },
          { id: 'D', text: 'Göz lekesi' },
          { id: 'E', text: 'Ribozomu' }
        ],
        correctOptionId: 'C',
        explanation: 'Öglena aydınlık ortamda, Kloroplastları sayesinde Güneş enerjisini kullanarak besin üretir (Ototrof).'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Paramesyumun hareketini sağlayan ve yüzeyini kaplayan yapılara ne denir?',
        options: [
          { id: 'A', text: 'Kanat' },
          { id: 'B', text: 'Kuyruk' },
          { id: 'C', text: 'SİL (Tüycük / Kirpik)' },
          { id: 'D', text: 'Yalancı ayak' },
          { id: 'E', text: 'Yüzgeç' }
        ],
        correctOptionId: 'C',
        explanation: 'Paramesyum = Silli canlı (Siliata). Öglena = Kamçılı. Amip = Yalancı ayaklı (Kök ayaklı).'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Bütün Protistalar TEK HÜCRELİ midir?',
        options: [
          { id: 'A', text: 'Evet, hepsi gözle görülmez.' },
          { id: 'B', text: 'HAYIR. Amip, Öglena gibi Çoğu tek hücrelidir ANCAK ALGLER (Su yosunları) gözle görülecek kadar büyük ve ÇOK HÜCRELİ olabilirler.' },
          { id: 'C', text: 'Sadece Arkeler tek hücrelidir.' },
          { id: 'D', text: 'Bütün protistalar devasadır.' },
          { id: 'E', text: 'Protistalar hiç hücre içermez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Protista alemi heterojendir. Büyük çoğunluğu (mikroskobik) tek hücreli olsa da, çok hücreli (Algler, deniz marulu vb) türleri de vardır.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: '"Amip, Paramesyum, Öglena, Algler" gibi canlılar neden "Bitki" veya "Hayvan" alemine DAHL EDİLMEZLER?',
        options: [
          { id: 'A', text: 'Ruhları olmadığı için.' },
          { id: 'B', text: 'Uzaylı oldukları için.' },
          { id: 'C', text: 'Gerçek Kök-Gövde-Yaprak (Doku/Organ) gibi gelişmiş organizasyonları olmadığı için, Çok hücreli bitki veya hayvanların özelliklerini tam taşımadıkları için "Protista" denilen ara sepete atılırlar.' },
          { id: 'D', text: 'Zehirli oldukları için.' },
          { id: 'E', text: 'Tüyleri olmadığı için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Gerçek Doku ve Organ (Kalp, kök, mide, odun borusu vb) sadece tam gelişmiş çok hücreli Bitki ve Hayvanlarda (ve bazı mantarlarda) olur. Protistalarda DOKU YOKTUR.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Mantarlar (Fungi) Alemi (Easy)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Eskiden bitkiler aleminde sanılan ancak kendi besinini üretemediği (Fotosentez yapamadığı) için ayrı bir alem yapılan canlı grubu hangisidir?',
        options: [
          { id: 'A', text: 'Kuşlar' },
          { id: 'B', text: 'Yosunlar' },
          { id: 'C', text: 'MANTARLAR (Fungi)' },
          { id: 'D', text: 'Bakteriler' },
          { id: 'E', text: 'Sürüngenler' }
        ],
        correctOptionId: 'C',
        explanation: 'Mantarlar toprağa bağlı yaşar, ağaca/bitkiye benzer ama kloroplastları yoktur. Yani Tüketicidirler (Heterotrof). Bu yüzden ayrı bir alemdirler.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Mantarlar aleminde yer alan canlıların TAMAMI beslenmek için ne yapmak zorundadır?',
        options: [
          { id: 'A', text: 'Fotosentez yapmak' },
          { id: 'B', text: 'Güneş ışığına dönmek' },
          { id: 'C', text: 'Dışarıdan HAZIR BESİN almak (HETEROTROF Beslenmek)' },
          { id: 'D', text: 'Kemosentez yapmak' },
          { id: 'E', text: 'Kendi besinini kendi üretmek' }
        ],
        correctOptionId: 'C',
        explanation: 'HİÇBİR mantar ototrof değildir (fotosentez yapamaz). Ya parazittir (hastalık yapar), ya saprofittir (çürükçüldür) ya da mutalisttir (ortak yaşar).'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Bitki hücre duvarı "Selüloz"dan yapılır. Peki MANTARLARIN Hücre Duvarı (Çeperi) HANGİ MADDEDEN yapılmıştır?',
        options: [
          { id: 'A', text: 'Peptidoglikan' },
          { id: 'B', text: 'KİTİN' },
          { id: 'C', text: 'Nişasta' },
          { id: 'D', text: 'Protein' },
          { id: 'E', text: 'Demir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kitin, aynı zamanda böceklerin dış iskeletinde de bulunan çok sağlam yapılı bir Karbonhidrattır. Mantar duvarı KİTİN yapılıdır.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Bitkiler fazladan ürettikleri glikozu "Nişasta" olarak depolar. Mantarlar (tıpkı hayvanlar ve bakteriler gibi) glikozun fazlasını NE OLARAK depolar?',
        options: [
          { id: 'A', text: 'Selüloz' },
          { id: 'B', text: 'Kitin' },
          { id: 'C', text: 'GLİKOJEN' },
          { id: 'D', text: 'Sükroz' },
          { id: 'E', text: 'Yağ' }
        ],
        correctOptionId: 'C',
        explanation: 'Mantarlar, Depo Karbonhidrat (Glikojen) açısından Hayvanlara; Hücre Duvarı (Kitin) olması açısından Bitkilere benzer.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Doğada ölü yaprakları, ağaç kütüklerini, hayvan cesetlerini ÇÜRÜTEREK (Saprofit / Ayrıştırıcı) yeniden toprağa katan ve "Madde Döngüsü"nün en önemli halkası olan canlılar genellikle hangileridir?',
        options: [
          { id: 'A', text: 'Aslanlar' },
          { id: 'B', text: 'Kartallar' },
          { id: 'C', text: 'Çürükçül MANTARLAR ve Bakteriler' },
          { id: 'D', text: 'Tohumlu Bitkiler' },
          { id: 'E', text: 'Yeşil Algler' }
        ],
        correctOptionId: 'C',
        explanation: 'Saprofitler, enzimlerini hücre dışına salgılar, ölüyü parçalar ve küçük inorganik/organik parçaları emerek beslenir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Mantarlar aleminde TEK HÜCRELİ olan ve hamurun mayalanması (kabarması), alkol üretimi gibi işlerde kullanılan mantar çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Şapkalı Mantar' },
          { id: 'B', text: 'MAYA MANTARLARI' },
          { id: 'C', text: 'Küf Mantarı' },
          { id: 'D', text: 'Zehirli Mantar' },
          { id: 'E', text: 'Parazit Mantar' }
        ],
        correctOptionId: 'B',
        explanation: 'Maya mantarları (Örn: Bira mayası) TEK HÜCRELİ ve mikroskobik mantarlardır. Oksijensiz solunumla gaz (CO2) çıkarıp hamuru kabartırlar.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Besinlerin (ekmek, peynir, limon) üzerinde uzun süre nemli ortamda kalmasıyla oluşan, ipliksi yapıda üreyen mantarlara ne ad verilir?',
        options: [
          { id: 'A', text: 'Şapkalı mantar' },
          { id: 'B', text: 'Maya mantarı' },
          { id: 'C', text: 'KÜF MANTARLARI' },
          { id: 'D', text: 'Tatlı su mantarı' },
          { id: 'E', text: 'Ağaç mantarı' }
        ],
        correctOptionId: 'C',
        explanation: 'Küf mantarları (Örn: Penicillium), besinlerin yüzeyine yerleşen ve çürüten mantarlardır.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Hastalık yapan (Örn: Ayak mantarı, saçkıran, bebeklerde pamukçuk) ve canlı organizmalar üzerinden beslenen mantarlara Biyolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Ototrof' },
          { id: 'B', text: 'PARAZİT (Asalak) Mantarlar' },
          { id: 'C', text: 'Üretici' },
          { id: 'D', text: 'Saprofit' },
          { id: 'E', text: 'Simbiyotik' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlı konağa zarar vererek, ondan besin çalan tüm canlı tiplerine Parazit denir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Dünyadaki İLK ANTİBİYOTİK olan "Penisilin" kimden, hangi canlıdan elde edilmiştir?',
        options: [
          { id: 'A', text: 'Bir hayvandan' },
          { id: 'B', text: 'Bir bitkiden' },
          { id: 'C', text: 'Bir KÜF MANTARINDAN (Penicillium)' },
          { id: 'D', text: 'İnsandan' },
          { id: 'E', text: 'Virüsten' }
        ],
        correctOptionId: 'C',
        explanation: 'Küf mantarları, bakterileri öldürmek için (besin rekabetinden dolayı) doğada kendiliğinden penisilin üretirler. Biz de bunu ilaç olarak kullanırız.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Çok hücreli mantarların (Şapkalı ve Küf mantarlarının) toprağa veya ekmeğe tutunmasını, ENZİM salgılamasını ve BESİNİ EMİP ALMASINI sağlayan ince, ipliksi KÖKSÜ yapılara ne ad verilir?',
        options: [
          { id: 'A', text: 'Yaprak' },
          { id: 'B', text: 'Kloroplast' },
          { id: 'C', text: 'HİF (ve Hiflerin birleşmiş ağına MİSELYUM)' },
          { id: 'D', text: 'Gövde' },
          { id: 'E', text: 'Mide' }
        ],
        correctOptionId: 'C',
        explanation: 'Mantarın yerin altında kalan asıl canlı kısmına Miselyum (Hif ağları) denir. Gerçek bir bitki kökü değildir, emici ipliklerdir.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Mantarlar genel olarak nasıl ürerler ve yayılırlar?',
        options: [
          { id: 'A', text: 'Tohum üreterek (Bitkiler gibi)' },
          { id: 'B', text: 'Doğurarak' },
          { id: 'C', text: 'SPOR (Dayanıklı üreme hücreleri) üreterek ve rüzgarla/suyla dağıtarak' },
          { id: 'D', text: 'Sadece ikiye bölünerek' },
          { id: 'E', text: 'Yumurtlayarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Mantar havaya milyonlarca toz gibi "Spor" bırakır. Bu sporlar nemli bir yer (Örn: ılık banyo tavanı, açıkta kalan ekmek, orman zemini) bulunca çimlenip yeni mantarı oluşturur.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir Mantar İLE Bitkinin ORTAK ÖZELLİĞİDİR?',
        options: [
          { id: 'A', text: 'İkisinin de fotosentez yapması (Yanlış, Mantar yapamaz)' },
          { id: 'B', text: 'İkisinin de HÜCRE DUVARI (Çeper) taşıması (Mantarınki Kitin, Bitkininki Selüloz)' },
          { id: 'C', text: 'İkisinin de Ototrof olması' },
          { id: 'D', text: 'İkisinin de hareket ederek uçması' },
          { id: 'E', text: 'İkisinin de Glikojen depolaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Duvar taşıma, her ikisinde de ortak bir ZAR ÖTESİ koruma mekanizmasıdır (Fakat içerikleri farklıdır).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Mantarlar ve Hayvanlar arasındaki ORTAK özellikler düşünüldüğünde hangisi KESİN DOĞRUDUR?',
        options: [
          { id: 'A', text: 'İkisi de aktif olarak (koşarak) yer değiştirir.' },
          { id: 'B', text: 'İkisi de dışarıdan BESİN ALAN HETEROTROF (Tüketici) canlılardır ve Fazla glikozu GLİKOJEN olarak depolarlar.' },
          { id: 'C', text: 'İkisi de hücre duvarına sahiptir (Yanlış, Hayvanda hücre duvarı YOKTUR).' },
          { id: 'D', text: 'İkisinin de kan dolaşımı vardır.' },
          { id: 'E', text: 'İkisinde de kitin yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Beslenme şekli (Heterotrof) ve Depo şekli (Glikojen) açısından Mantarlar, bitkilerden çok Hayvanlara benzerler.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Ormanda gördüğümüz renkli "Şapkalı Mantarlar" ile ilgili DOĞRU YARGI nedir?',
        options: [
          { id: 'A', text: 'Hepsi çok faydalı vitamin kaynağıdır, güvenle yenir.' },
          { id: 'B', text: 'Kendi besinlerini güneşten üretirler.' },
          { id: 'C', text: 'Bazıları çok zehirlidir (Öldürücüdür). Besin (Heterotrof) olarak topraktaki çürüklerden beslenirler.' },
          { id: 'D', text: 'Aslında bir hayvan türüdürler.' },
          { id: 'E', text: 'Sadece gece ortaya çıkarlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Şapkalı mantarların bazıları yenebilir kültür mantarıdır, ancak ormandaki renkli mantarların büyük bir kısmı karaciğeri iflas ettiren zehirler taşır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: '"Mikoriza" adlı birliktelik nedir?',
        options: [
          { id: 'A', text: 'İki hayvanın kavga etmesidir.' },
          { id: 'B', text: 'Bir tür virüs hastalığıdır.' },
          { id: 'C', text: 'Mantar hifleri (kökleri) ile BİTKİ KÖKLERİ arasındaki Karşılıklı Faydaya (Mutalizm) dayalı orman birliğidir. (Mantar bitkiye su/mineral çeker, bitki mantara besin verir).' },
          { id: 'D', text: 'Mantarın bakteriyi yemesi olayıdır.' },
          { id: 'E', text: 'Mantarların uzaya gitmesidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ormanların devasa bir ağ gibi birbirine bağlanmasını ve bitkilerin verimli büyümesini sağlayan yeraltındaki Mantar-Bitki yardımlaşmasına Mikoriza denir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Bitkiler Alemi - 1 (Genel Özellikler) (Easy)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Bitkiler Alemi (Plantae) genel olarak nasıl beslenir?',
        options: [
          { id: 'A', text: 'Dışarıdan et yiyerek.' },
          { id: 'B', text: 'Kloroplastları sayesinde Güneş ışığını kullanarak İNORGANİK maddelerden kendi ORGANİK besinlerini (Ototrof / Fotosentez) üreterek.' },
          { id: 'C', text: 'Topraktaki solucanları yiyerek.' },
          { id: 'D', text: 'Diğer bitkileri sömürerek (hepsi böyledir).' },
          { id: 'E', text: 'Beslenmeye ihtiyaç duymazlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerin temel karakteri (tam parazitler hariç) Kloroplast taşıyan "Ototrof (Kendi besinini kendi yapan)" canlılar olmalarıdır.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Bitki hücrelerinin DIŞ çeperi (Hücre Duvarı) HANGİ KARBONHİDRATTAN (Polisakkarit) yapılmıştır?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'Kitin' },
          { id: 'C', text: 'Peptidoglikan' },
          { id: 'D', text: 'SELÜLOZ (Dayanıklı, sert yapı taşı)' },
          { id: 'E', text: 'Nişasta' }
        ],
        correctOptionId: 'D',
        explanation: 'Odunun, pamuğun, kağıdın asıl ham maddesi Bitkilerin hücre duvarındaki "Selüloz"dur.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Bitkiler fotosentez sonucu ürettikleri GLİKOZUN fazlasını (kullanmadıkları kısmını) hücrede NE OLARAK DEPOLARLAR?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'NİŞASTA (Örn: Patates, Buğday, Pirinç)' },
          { id: 'C', text: 'Kitin' },
          { id: 'D', text: 'Selüloz' },
          { id: 'E', text: 'Protein' }
        ],
        correctOptionId: 'B',
        explanation: 'Depo şekli Bitkilerde = Nişasta, Hayvan/Mantar/Bakterilerde = Glikojendir.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Bitkiler hareket edebilirler mi?',
        options: [
          { id: 'A', text: 'Evet, aktif olarak yürürler.' },
          { id: 'B', text: 'Hiçbir şekilde hareket edemezler.' },
          { id: 'C', text: 'Yer (nokta) değiştiremezler ancak güneşe, suya doğru yönelme veya dokununca kapanma (Pasif Hareket / Tropizma-Nasti) yapabilirler.' },
          { id: 'D', text: 'Sadece rüzgarda uçarlar.' },
          { id: 'E', text: 'Köklerini çıkarıp kaçarlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ayçiçeğinin güneşe dönmesi, böcekçil bitkinin kapanması, kökün suya gitmesi bir "Harekettir" (Ancak aktif yer değiştirme değildir).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Bitkiler Alemi (Gelişmişlik Sırasına Göre) iki ana gruba (Şubeye) ayrılır. Bunlar hangileridir?',
        options: [
          { id: 'A', text: 'Ağaçlar ve Otlar' },
          { id: 'B', text: 'TOHUMSUZ (Sporlu) Bitkiler ve TOHUMLU (Çiçekli) Bitkiler' },
          { id: 'C', text: 'Yeşil Bitkiler ve Sarı Bitkiler' },
          { id: 'D', text: 'Suda Yaşayanlar ve Karada Yaşayanlar' },
          { id: 'E', text: 'Meyveli ve Meyvesiz' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerin temel sınıflandırması ÜREME yapılarına göredir. Çiçek/Tohum yapamayan ilkel bitkiler (Tohumsuz) ve Gelişmiş, tohum yapabilen bitkiler (Tohumlu).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: '"Damar (İletim Demeti)" bitkilerde ne işe yarar?',
        options: [
          { id: 'A', text: 'Kan taşımaya (Yanlış, bitkide kan yoktur).' },
          { id: 'B', text: 'Köklerden alınan SUYU yapraklara, yaprakta üretilen BESİNİ köklere TAŞIMAYA (Odun ve Soymuk boruları).' },
          { id: 'C', text: 'Sadece dik durmaya.' },
          { id: 'D', text: 'Renkli görünmeye.' },
          { id: 'E', text: 'Güneşi emmeye.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerdeki "Damar (İletim demeti)" topraktan alınan suyu yukarı çeken Ksilem (Odun borusu) ve yapraktaki besini aşağı indiren Floem (Soymuk borusu) sistemidir.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Karayosunları neden çok kısa ve küçüktürler (Yere yapışık yaşarlar)?',
        options: [
          { id: 'A', text: 'Suyu sevmedikleri için.' },
          { id: 'B', text: 'Damarları (İLETİM DEMETLERİ / Boruları) OLMADIĞI için suyu yukarı (yükseğe) taşıyamazlar, Nemli ortamlarda hücreden hücreye iletim yaparlar.' },
          { id: 'C', text: 'Sadece geceleri büyüdükleri için.' },
          { id: 'D', text: 'Hepsi hayvanlar tarafından yendiği için.' },
          { id: 'E', text: 'Kökleri çok kalın olduğu için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karayosunları (Damarsız Tohumsuz) bitkidir. Boru (İletim demeti) sistemi evrimleşmediği için (su borusu olmayan bina gibi) yükselemezler.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Eğrelti otu ile Karayosunu arasındaki EN TEMEL GELİŞMİŞLİK FARKI nedir?',
        options: [
          { id: 'A', text: 'Karayosunu fotosentez yapamaz.' },
          { id: 'B', text: 'Eğrelti otunda İLETİM DEMETİ (Damar / Su borusu) VARDIR, bu yüzden daha büyüktür (Damarlı Tohumsuz Bitki). Karayosununda damar yoktur.' },
          { id: 'C', text: 'Eğrelti otu hayvan, karayosunu bitkidir.' },
          { id: 'D', text: 'Eğrelti otu tohuma sahiptir.' },
          { id: 'E', text: 'İkisi de birebir aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğrelti otu "Damarlı Tohumsuz"dur. İlk su taşıma boruları (İletim demeti) bu grupta görülmüştür. Ama hala çiçek (tohum) yoktur, sporla ürer.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Tohumlu Bitkiler "Açık Tohumlular (Kozalaklılar)" ve "Kapalı Tohumlular (Çiçekli/Meyveli)" olarak ikiye ayrılır. \nAşağıdakilerden hangisi AÇIK TOHUMLU (Kozalaklı) bir bitkidir?',
        options: [
          { id: 'A', text: 'Elma ağacı' },
          { id: 'B', text: 'ÇAM AĞACI (veya Ladin, Köknar, Sedir)' },
          { id: 'C', text: 'Papatya' },
          { id: 'D', text: 'Buğday' },
          { id: 'E', text: 'Fasulye' }
        ],
        correctOptionId: 'B',
        explanation: 'Çam gibi iğne yapraklı ağaçların "Gerçek ve renkli" çiçekleri ve "Gerçek Meyveleri" yoktur. Üreme organları Kozalaklardır ve tohumları kozalak yaprakları arasında AÇIKTA bulunur.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Çam, Ladin, Sedir (Açık Tohumlular) gibi bitkilerin YAPRAK TİPİ genel olarak nasıldır ve NE ZAMAN dökülür?',
        options: [
          { id: 'A', text: 'Çok geniş yapraklıdır, sonbaharda tamamen dökülür (Kel kalır).' },
          { id: 'B', text: 'İĞNE YAPRAKLIDIRLAR, kışın hepsini BİRDEN dökmezler (Her mevsim yeşil kalırlar).' },
          { id: 'C', text: 'Yaprakları yoktur, sadece dalı vardır.' },
          { id: 'D', text: 'Yaprakları kırmızıdır.' },
          { id: 'E', text: 'Yaprakları sadece yazın çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kozalaklıların yaprakları sertleşmiş iğne gibidir (Soğuğa/Kara dayanıklı). Yapraklarını azar azar yenilerler, tamamen çıplak (kel) kalmazlar.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Dünyadaki bitkilerin en gelişmiş ve en kalabalık grubu olan KAPALI TOHUMLU (Çiçekli) bitkilerde "MEYVE" neyin sonucudur?',
        options: [
          { id: 'A', text: 'Köklerin şişmesiyle oluşur.' },
          { id: 'B', text: 'Yaprakların dökülmesiyle oluşur.' },
          { id: 'C', text: 'Çiçeğin içindeki yumurtalığın (Ovaryumun) döllenme sonrası şişip TOHUMUN ETRAFINI KAPATMASIYLA (Koruyup/Beslemesiyle) oluşur.' },
          { id: 'D', text: 'Sadece yağmur suyuyla şişen bir balondur.' },
          { id: 'E', text: 'Bakterilerin şişirmesiyle oluşur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kapalı tohumlularda (Örn: Elma, Erik), tohum (çekirdek) bir meyvenin içine "Kapalıdır". Meyvenin asıl amacı tohumu korumak ve hayvanlara yedirerek (çekirdeği dışkıyla uzağa taşıtarak) türün yayılmasını sağlamaktır.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Tohumlu bir bitkide TOHUMUN içinde ne saklıdır?',
        options: [
          { id: 'A', text: 'Sadece su' },
          { id: 'B', text: 'Böcekler' },
          { id: 'C', text: 'Bitkinin EMBRİYOSU (Yavrusu) ve O çimlenene (kök/yaprak çıkarana) kadar yetecek olan YEDEK BESİN DEPOSU (Çenek / Endosperm)' },
          { id: 'D', text: 'Taş parçaları' },
          { id: 'E', text: 'Sadece tuz' }
        ],
        correctOptionId: 'C',
        explanation: 'Tohum bir nevi "Uzay kapsülü" gibidir. İçinde yavru bitki ve ona yetecek kadar (Fotosentez yapana kadar) enerji stoğu vardır.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Kapalı Tohumlu bitkiler de kendi içinde "Tek Çenekliler (Monokotil)" ve "Çift Çenekliler (Dikotil)" olarak ikiye ayrılır. \nAşağıdakilerden hangisi TEK ÇENEKLİ (Mısır, Buğday, Lale gibi otsu) bitkilerin bir özelliğidir?',
        options: [
          { id: 'A', text: 'Kazık köklüdürler.' },
          { id: 'B', text: 'Çok kalın odunsu gövdeleri vardır.' },
          { id: 'C', text: 'SAÇAK (İncecik/Ağsı) köklüdürler ve yaprak damarları PARALELDİR.' },
          { id: 'D', text: 'Yaprakları çok geniştir ve ağsı damarlıdır.' },
          { id: 'E', text: 'Tohumları ikiye ayrılır (Fıstık gibi).' }
        ],
        correctOptionId: 'C',
        explanation: 'Mısır veya Buğdayı düşünün (Tek çenekliler). Gövdeleri ot gibidir, kökleri ip ip saçaklıdır, yaprakları uzun-ince paralel damarlıdır.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Elma ağacı, Fasulye, Ayçiçeği gibi ÇİFT ÇENEKLİ (Dikotil) bitkilerin genel özellikleri nasıldır?',
        options: [
          { id: 'A', text: 'Sadece denizde yaşarlar.' },
          { id: 'B', text: 'Kökleri hiç yoktur.' },
          { id: 'C', text: 'Geniş Ağsı damarlı yaprakları vardır, Kazık (Derine inen sağlam) köklüdürler ve odunsu KAMBİYUM (Enine kalınlaşma) halkaları vardır.' },
          { id: 'D', text: 'Yaprakları paralel damarlıdır.' },
          { id: 'E', text: 'Hiç çiçek açmazlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Odunsu gövde (Ağaç olmak, gövdenin kalınlaşması/kambiyum), kazık kök ve fıstık gibi ortadan ikiye ayrılan tohumlar "Çift Çenekli" bitkilerin genel karakteridir.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Bütün bitkiler fotosentez yapar mı? (İstisna var mıdır?)',
        options: [
          { id: 'A', text: 'Evet hepsi istisnasız yapar.' },
          { id: 'B', text: 'Sadece yeşil olmayanlar yapmaz.' },
          { id: 'C', text: 'HAYIR. "Tam Parazit" bitkiler (Örn: Cinsaçı, Küsküt Otu) kloroplast taşımazlar, yaprakları yoktur. Kökleriyle (Emeç) diğer bitkilerin odun ve soymuk borularından hazır Su ve Besin çalarlar.' },
          { id: 'D', text: 'Hayır, ormandaki ağaçlar yapmaz.' },
          { id: 'E', text: 'Su bitkileri yapmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tam Parazit bitkiler (Küsküt/Canavar otu vb) evrimsel olarak fotosentez yeteneğini kaybetmiş (kloroplastsız), tamamen başka bitkiyi sömüren tüketici canlılardır.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Hayvanlar Alemi - 1 (Omurgasızlar) (Easy)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Hayvanlar (Animalia) aleminin HÜCRE YAPISI ve BESLENME ŞEKLİ nasıldır?',
        options: [
          { id: 'A', text: 'Prokaryot ve Ototrofturlar.' },
          { id: 'B', text: 'Tamamı ÇOK HÜCRELİ Ökaryottur. Tamamı DIŞARIDAN HAZIR BESİN ALAN Heterotrof (Tüketici) canlılardır.' },
          { id: 'C', text: 'Tek Hücreli ve Ototrofturlar.' },
          { id: 'D', text: 'Bazıları tek hücrelidir.' },
          { id: 'E', text: 'Sadece hücre duvarından oluşurlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayvanlar alemi en gelişmiş hücre (Ökaryot), mutlaka çok hücreli organizasyon ve mutlaka (istisnasız) Tüketici (Ototrof olmayan) özellikleriyle ayrılır.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Hayvan hücrelerinin dış yüzeyinde Bitkilerdeki (Selüloz) veya Mantarlardaki (Kitin) gibi sert bir HÜCRE DUVARI (Çeper) var mıdır?',
        options: [
          { id: 'A', text: 'Evet, selüloz duvar vardır.' },
          { id: 'B', text: 'Evet, peptidoglikan duvar vardır.' },
          { id: 'C', text: 'HAYIR. Hayvan hücrelerinde hücre duvarı (çeper) YOKTUR. Bu onlara esneklik ve hareket yeteneği sağlar.' },
          { id: 'D', text: 'Bazen vardır bazen yoktur.' },
          { id: 'E', text: 'Sadece kemiklerinde duvar vardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre duvarı bitkiye/mantara dayanıklılık verir ama onları sabit (esnemez) yapar. Hayvanın (kasların) kasılıp koşabilmesi için hücresinin esnek (Zar yapısında / Duvarsız) olması şarttır.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Hayvanlar alemi iskelet yapısına (Sinir şeridinin sırt veya karında olmasına) göre iki BÜYÜK ŞUBEYE ayrılır. Bunlar nelerdir?',
        options: [
          { id: 'A', text: 'Suda Yaşayanlar ve Karada Yaşayanlar' },
          { id: 'B', text: 'Uçanlar ve Yürüyenler' },
          { id: 'C', text: 'OMURGASIZLAR (İskeletsiz veya dış iskeletliler) ve OMURGALILAR (İç iskeletli, sırtında omurilik olanlar)' },
          { id: 'D', text: 'Büyükler ve Küçükler' },
          { id: 'E', text: 'Etçiller ve Otçullar' }
        ],
        correctOptionId: 'C',
        explanation: 'Sırt tarafında (Notokord/Omurga) bir sinir kordonu (Omurilik) ve ona bağlı bir iç iskelet taşıyıp taşımamasına göre temel ikiye ayrılır.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Hayvanlar aleminin EN İLKEL (İlk ve en basit) grubu olan, belirgin doku/organları olmayan, deliklerinden suyu süzerek beslenen OMURGASIZ canlı hangisidir?',
        options: [
          { id: 'A', text: 'Balık' },
          { id: 'B', text: 'Deniz anası' },
          { id: 'C', text: 'SÜNGERLER (Süngerler şubesi)' },
          { id: 'D', text: 'Salyangoz' },
          { id: 'E', text: 'Solucan' }
        ],
        correctOptionId: 'C',
        explanation: 'Süngerler (Örn: Banyo süngeri iskeleti), sinir sistemi, kas sistemi olmayan, sadece bir araya gelmiş hücrelerden ibaret en basit hayvandır.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: '"Sölenterler" şubesi (Örn: Denizanası, Hidra, Mercanlar) hangi özellikleriyle ünlüdür?',
        options: [
          { id: 'A', text: 'Çok hızlı koşmalarıyla' },
          { id: 'B', text: 'İLK DEFA gerçek "Sinir Ağının (İlkel sinir sisteminin)" ve "Kas/Hareket Dokularının" görüldüğü grup olmalarıyla (Yakıcı tentakülleri vardır).' },
          { id: 'C', text: 'Omurgaya sahip olmalarıyla' },
          { id: 'D', text: 'Karada yaşamalarıyla' },
          { id: 'E', text: 'Fotosentez yapmalarıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Deniz anaları, avlanmak ve yüzmek için tarihteki ilk Sinir (uyartı) ve Kas yapılarının evrimleştiği ilk hayvan grubudur.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Toprağı havalandıran ve tarım için çok faydalı olan "Toprak Solucanı", HANGİ Omurgasız hayvan grubundadır?',
        options: [
          { id: 'A', text: 'Yassı Solucan (Örn: Tenya, Planarya)' },
          { id: 'B', text: 'Yuvarlak Solucan (Örn: Bağırsak kurdu, Ascaris)' },
          { id: 'C', text: 'HALKALI SOLUCAN (Vücudu boğum boğum segmentlidir)' },
          { id: 'D', text: 'Eklembacaklılar' },
          { id: 'E', text: 'Derisidikenliler' }
        ],
        correctOptionId: 'C',
        explanation: 'Toprak solucanı (ve Sülük) vücudunun halka halka çizgili yapısıyla gelişmiş "Halkalı Solucanlar" sınıfına girer. (Kapalı kan dolaşımı görülür).'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Karın kısmında kaslı bir ayak taşıyan, vücutları yumuşak olan ve genellikle dışarıda sert bir kabuk salgılayan Omurgasız grubu HANGİSİDİR? (Örn: Salyangoz, Midye, Ahtapot, Kalamar)',
        options: [
          { id: 'A', text: 'Eklembacaklılar' },
          { id: 'B', text: 'YUMUŞAKÇALAR (Mollusca)' },
          { id: 'C', text: 'Süngerler' },
          { id: 'D', text: 'Solucanlar' },
          { id: 'E', text: 'Omurgalılar' }
        ],
        correctOptionId: 'B',
        explanation: 'Ahtapot veya Midyenin ortak noktası gövdelerinin "Yumuşak, kemiksiz ve kıkırdaksız" bir et parçası (Manto) olmasıdır.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Hayvanlar aleminin EN KALABALIK Şubesi (Yeryüzündeki tüm hayvanların %80\'inden fazlası) hangisidir?',
        options: [
          { id: 'A', text: 'Memeliler' },
          { id: 'B', text: 'Kuşlar' },
          { id: 'C', text: 'EKLEMBACAKLILAR (Böcekler, Örümcekler, Kabuklular, Çokayaklılar)' },
          { id: 'D', text: 'Balıklar' },
          { id: 'E', text: 'Solucanlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Sadece Böcekler (Karınca, Arı, Sinek vb) bile dünyadaki en yüksek canlı nüfusunu ve tür sayısını oluşturur.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Eklembacaklılar şubesindeki (Örn: Böcek, Yengeç) hayvanların Dış Yüzeyinde (iskeletinde) bulunan sert koruyucu tabaka NEDEN (Hangi maddeden) YAPILMIŞTIR?',
        options: [
          { id: 'A', text: 'Kemik' },
          { id: 'B', text: 'Kıkırdak' },
          { id: 'C', text: 'KİTİN yapılı DIŞ İSKELET' },
          { id: 'D', text: 'Selüloz' },
          { id: 'E', text: 'Glikojen' }
        ],
        correctOptionId: 'C',
        explanation: 'Böceğin üstüne bastığınızda çıkan çıtır sesi, Mantarlarda da bulunan Kitin tabakasının sesidir. Etleri bu sert kabuğun İÇİNDEDİR.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Böcekler gibi Dış iskelete (Kitin kabuğa) sahip canlılar BÜYÜYEBİLMEK (boy uzatmak) için hayatları boyunca belirli aralıklarla ne yapmak ZORUNDADIRLAR?',
        options: [
          { id: 'A', text: 'Su içmek' },
          { id: 'B', text: 'Güneşe çıkmak' },
          { id: 'C', text: 'GÖMLEK (Kabuk) DEĞİŞTİRMEK (Çünkü kitin kabuk cansızdır ve hayvanla birlikte büyümez).' },
          { id: 'D', text: 'Diğer böcekleri yemek' },
          { id: 'E', text: 'Fotosentez yapmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Sert dış zırh esnemediği için, hayvan büyüdükçe dar gelir, hayvan kabuğunu çatlatır (gömlek değiştirir), yumuşak haldeyken büyür ve yeni kabuk sertleşir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Eklembacaklıların "Böcekler" grubunda Solunum (Oksijen alma) HANGİ SİSTEMLE yapılır?',
        options: [
          { id: 'A', text: 'Akciğer ile' },
          { id: 'B', text: 'Solungaç ile' },
          { id: 'C', text: 'TRAKE Solunumu ile (Vücutlarındaki ince hava boruları, oksijeni kana değil direkt hücrelere taşır).' },
          { id: 'D', text: 'Deri ile' },
          { id: 'E', text: 'Sadece ağız ile' }
        ],
        correctOptionId: 'C',
        explanation: 'Böceklerin Kanı (Hemolenf) kırmızı değildir çünkü Oksijen taşımaz (Hemoglobin yoktur). Oksijen vücutlarındaki borucuklarla (Trake) doğrudan kaslara gider.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Arı, Kelebek, Sinek gibi Böcekler; Yumurtadan kurtçuk (Tırtıl/Larva) olarak çıkar, sonra bir koza (Pupa) evresinden geçip yetişkin bir böceğe DÖNÜŞÜRLER. \nBu evrimsel gelişim şekline ne ad verilir?',
        options: [
          { id: 'A', text: 'Bölünme' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'BAŞKALAŞIM (Metamorfoz)' },
          { id: 'D', text: 'Klonlama' },
          { id: 'E', text: 'Yenilenme' }
        ],
        correctOptionId: 'C',
        explanation: 'Dış iskeletin sınırı ve enerji tasarrufu nedeniyle böcekler iki farklı yaşam evresi (Larva -> Ergin) geçirerek dramatik bir şekil değişimi (Başkalaşım) yaparlar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: '"Deniz Yıldızı", "Deniz Kestanesi", "Deniz Hıyarı" gibi sadece denizlerde yaşayan, derilerinin altında kalker plaklardan oluşmuş dikenli bir yapı (İç iskelet) taşıyan, omurgasızlar ile omurgalılar arasında köprü sayılan grup hangisidir?',
        options: [
          { id: 'A', text: 'Süngerler' },
          { id: 'B', text: 'Böcekler' },
          { id: 'C', text: 'DERİSİDİKENLİLER' },
          { id: 'D', text: 'Yumuşakçalar' },
          { id: 'E', text: 'Sölenterler' }
        ],
        correctOptionId: 'C',
        explanation: 'Deniz yıldızının sırt tarafı sert ve dikenli plakalarla kaplıdır. Eklembacaklılardan farklı olarak bu plakalar vücudun "Dışında" değil "Derinin hemen ALTINDADIR" (İlkel bir iç iskelet/Endoiskelet kırıntısıdır).'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Aşağıdaki hayvanlardan hangisi OMURGASIZDIR?',
        options: [
          { id: 'A', text: 'Balık (Hamsi)' },
          { id: 'B', text: 'Kurbağa' },
          { id: 'C', text: 'Yılan (Sürüngen, kemikleri ve omurgası vardır)' },
          { id: 'D', text: 'TOPRAK SOLUCANI' },
          { id: 'E', text: 'Kuş' }
        ],
        correctOptionId: 'D',
        explanation: 'Balık, kurbağa, sürüngen(yılan vb), kuş ve memeliler OMURGALIDIR (Sırt kemikleri vardır). Solucanın kemiği (Omurgası) yoktur.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Tüm omurgasız hayvanlar düşünüldüğünde, Sinir Kordonu (varsa) vücudun neresinden geçer?',
        options: [
          { id: 'A', text: 'Sırt (Notokord) kısmından geçer.' },
          { id: 'B', text: 'KARIN (Ventral) kısmından geçer. (Omurgalıların aksine sırtlarında değil KARINLARINDA sinir şeridi bulunur).' },
          { id: 'C', text: 'Sadece bacaklarında bulunur.' },
          { id: 'D', text: 'Kanatlarında bulunur.' },
          { id: 'E', text: 'Hiç sinirleri yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok kritik ayrım: İnsanların (Omurgalıların) omuriliği SIRTTADIR. Böceklerin, solucanların sinir şeritleri KARIN (Alt) bölgelerinden geçer.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Hayvanlar Alemi - 2 (Omurgalılar: Balık, İkiyaşamlı, Sürüngen) (Easy)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Omurgalı Hayvanların (Kordalılar) KESİN olan 3 temel özelliği nedir?',
        options: [
          { id: 'A', text: 'Sırtlarında sinir şeridi (Omurilik) bulunur, İç iskeletleri (Kemik/Kıkırdak) vardır ve hepsinde kuyruk evresi/notokord görülür.' },
          { id: 'B', text: 'Karınlarında sinir şeridi vardır, Dış iskeletleri vardır, uçar.' },
          { id: 'C', text: 'Hepsi suda yaşar, solungaçları vardır.' },
          { id: 'D', text: 'Hepsi yumurtlar.' },
          { id: 'E', text: 'Hepsi memelidir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Omurgasızların aksine, Omurgalılarda "Sırtta Omurilik" (Notokord) ve "Kemik/Kıkırdak" iç iskelet evrenseldir.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Omurgalı hayvanların EN İLKEL sınıfı olan "Balıklar" genel olarak Oksijeni nasıl alırlar?',
        options: [
          { id: 'A', text: 'Akciğerleriyle' },
          { id: 'B', text: 'Deri solunumuyla' },
          { id: 'C', text: 'SOLUNGAÇLARI (Suda çözünmüş Oksijeni süzen yapılar) ile' },
          { id: 'D', text: 'Trake borularıyla' },
          { id: 'E', text: 'Ağızlarıyla yutarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Balıklar suda çözünmüş oksijeni solungaçlarından geçirerek kanlarına alırlar.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Balıkların vücut ısısı (Vücut sıcaklığı) çevreye göre NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Sabittir (Hep 36 derecedir).' },
          { id: 'B', text: 'DEĞİŞKENDİR (Soğukkanlıdırlar). Su soğursa vücutları da soğur, su ısınırsa vücutları da ısınır.' },
          { id: 'C', text: 'Çevre soğudukça onlarınki ısınır.' },
          { id: 'D', text: 'Sadece gündüzleri sıcaktır.' },
          { id: 'E', text: 'Hiç ısıları yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Balık, Kurbağa ve Sürüngenler SOĞUKKANLI (Değişken ısılı) canlılardır. Vücut ısılarını sabit tutacak metabolizmaları yoktur.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Balıkların "Kıkırdaklı Balıklar" (Örn: Köpekbalığı, Vatoz) ve "Kemikli Balıklar" (Örn: Hamsi, Alabalık) olarak ayrılmasının TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Renklerinin farklı olması' },
          { id: 'B', text: 'İÇ İSKELETLERİNİN yapıldığı madde. (Köpekbalığının iskeleti kıkırdaktan, hamsinin iskeleti kemikten yapılmıştır).' },
          { id: 'C', text: 'Solunum şekillerinin farklı olması' },
          { id: 'D', text: 'Beslenme şekillerinin farklı olması' },
          { id: 'E', text: 'Yaşadıkları suyun tuzluluğu' }
        ],
        correctOptionId: 'B',
        explanation: 'Adı üstünde, iskelet dokusuna göre ayrılırlar. Köpekbalıklarının kılçığı (kemiği) yoktur, tamamen esnek kıkırdaktır.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Kurbağalar ve Semenderlerin bulunduğu Omurgalı sınıfına "İkiyaşamlılar (Amfibiler)" denmesinin SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'Hem bitki hem hayvan yemeleri.' },
          { id: 'B', text: 'Hem gece hem gündüz uyanık olmaları.' },
          { id: 'C', text: 'Hayatlarının bir kısmını SUDA (Larva/İribaş dönemi - Solungaç solunumu), bir kısmını KARADA (Ergin dönem - Akciğer/Deri solunumu) geçirmeleri.' },
          { id: 'D', text: 'İki kere ölmeleri.' },
          { id: 'E', text: 'İki tane kalpleri olması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurbağa yumurtadan balık gibi (İribaş) çıkar ve suda yaşar (Solungaç). Sonra başkalaşım geçirir, bacak/akciğer çıkarır ve karaya (Ergin) çıkar.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'İkiyaşamlıların (Kurbağaların) derileri NASILDIR ve onlara HANGİ ÖZELLİĞİ kazandırır?',
        options: [
          { id: 'A', text: 'Kalın ve pulludur, kuraktır.' },
          { id: 'B', text: 'NEMLİ ve İNCEDİR. Bu sayede sadece akciğerleriyle değil, DERİLERİYLE DE SOLUNUM (Oksijen alma) yaparlar.' },
          { id: 'C', text: 'Tüylüdür.' },
          { id: 'D', text: 'Kemiklidir.' },
          { id: 'E', text: 'Dikenlidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurbağanın akciğerleri ilkel ve yetersizdir. Oksijenin çoğunu nemli ve mukuslu derisinden emer (Deri solunumu).'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Kertenkele, Yılan, Kaplumbağa, Timsah gibi canlıların oluşturduğu SÜRÜNGENLER sınıfının, Kurbağalardan EN BÜYÜK FARKI (Karaya tam uyum sağlamaları) NEDİR?',
        options: [
          { id: 'A', text: 'Sürüngenlerin sıcakkanlı olması.' },
          { id: 'B', text: 'Sürüngenlerin derilerinin KURU, KALIN ve PULLU (Keratin) olması. (Su kaybetmezler, tam bir kara hayvanıdırlar).' },
          { id: 'C', text: 'Sürüngenlerin solungaçlı olması.' },
          { id: 'D', text: 'Sürüngenlerin hiç yumurtlamaması.' },
          { id: 'E', text: 'Sürüngenlerin uçabilmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurbağa ince derisi yüzünden sudan çok uzaklaşamaz (kurur). Sürüngenler kalın pullu derileriyle çöle bile uyum sağlamış İlk Gerçek Kara Hayvanlarıdır.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Sürüngenlerin (Yılan, Kertenkele) ÜREME (Çoğalma) şekli nasıldır?',
        options: [
          { id: 'A', text: 'Doğurarak' },
          { id: 'B', text: 'Suda sperm ve yumurtayı rastgele bırakarak (Dış Döllenme)' },
          { id: 'C', text: 'Vücut İÇİNDE döllenme (Çiftleşme) ve ardından KALIN KABUKLU YUMURTA bırakma (İç döllenme - Dış gelişme).' },
          { id: 'D', text: 'İkiye bölünerek' },
          { id: 'E', text: 'Sadece terleyerek' }
        ],
        correctOptionId: 'C',
        explanation: 'Karada rastgele (suya bırakır gibi) üremezsiniz. Çiftleşme (İç döllenme) şarttır. Sonra kurumaması için kalın kabuklu yumurta yumurtlarlar.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Balıklar, Kurbağalar ve Sürüngenler "Soğukkanlı (Ektoterm)" hayvanlardır. Bu durum onların KIŞIN ne yapmasına sebep olur?',
        options: [
          { id: 'A', text: 'Güney Kutbuna göç etmelerine' },
          { id: 'B', text: 'Çok sıcak hissetmelerine' },
          { id: 'C', text: 'KIŞ UYKUSUNA YATMALARINA (Hava soğuyunca vücut ısıları ve metabolizmaları çok düşer, uyuşurlar).' },
          { id: 'D', text: 'Daha hızlı koşmalarına' },
          { id: 'E', text: 'Denize girmelerine' }
        ],
        correctOptionId: 'C',
        explanation: 'Yılan veya kurbağayı kışın karda koşarken göremezsiniz. Isıları düştüğü için metabolizmaları durma noktasına gelir, toprağın altında uyurlar.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Kuşlar ve Memeliler hariç (Balık, Kurbağa, Sürüngen) kalpleri 3 veya 2 odacıklıdır. Bunun anlamı kan dolaşımlarında NE OLUŞMASIDIR?',
        options: [
          { id: 'A', text: 'Kanlarının olmaması' },
          { id: 'B', text: 'Vücuda KARIŞIK (Oksijeni az/Kirli) KAN pompalanması. (Bu yüzden metabolizmaları yavaştır ve soğukkanlıdırlar).' },
          { id: 'C', text: 'Çok hızlı olmaları' },
          { id: 'D', text: 'Sadece temiz kan taşımaları' },
          { id: 'E', text: 'Mavi kanlı olmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurbağa (3 oda) ve Sürüngenlerde (Yarım perdeli 3 oda), Temiz ve Kirli kan kalpte birbirine karışır. Vücuda oksijeni fakir kan gider.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Sürüngenlerden olan "Timsahlar" kalplerinin yapısı açısından diğer sürüngenlerden NASIL FARKLI bir istisnadır?',
        options: [
          { id: 'A', text: 'Kalpleri yoktur.' },
          { id: 'B', text: 'Kalplerinde 4 ODACIK vardır (Kuşlar ve memeliler gibi karıncık tamamen ikiye bölünmüştür).' },
          { id: 'C', text: 'Kalpleri sadece temiz kan pompalar.' },
          { id: 'D', text: 'Kalpleri kafasındadır.' },
          { id: 'E', text: 'Kalpleri midesindedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Klasik istisna sorusu: Timsah bir sürüngendir (soğukkanlıdır) AMA kalbi 4 odalıdır. Sadece kalpten çıkan özel bir kanalda (Panizza) kanları karışır.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Köpekbalıklarının (Kıkırdaklı balıklar) "Yüzme Kesesi (Hava Kesesi)" YOKTUR. Bu durum köpekbalıklarını neye zorlar?',
        options: [
          { id: 'A', text: 'Uçmaya' },
          { id: 'B', text: 'Batmamak için SÜREKLİ YÜZMEYE.' },
          { id: 'C', text: 'Sadece karada yaşamaya' },
          { id: 'D', text: 'Ağaçlara tırmanmaya' },
          { id: 'E', text: 'Gözlerini kapatmaya' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemikli balıklarda (Örn Hamsi) hava kesesi vardır, durdukları yerde suda asılı kalırlar. Köpekbalıklarının hava kesesi yoktur, dururlarsa dibe batarlar.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir hayvan "Başkalaşım (Metamorfoz)" geçiriyorsa (yani yumurtadan çıktığı ilk hali ile büyümüş hali çok farklıysa), bu hayvan KESİNLİKLE HANGİSİ OLABİLİR?',
        options: [
          { id: 'A', text: 'Ya Kurbağa (İkiyaşamlı) ya da Böcek (Eklembacaklı) olabilir.' },
          { id: 'B', text: 'Kesinlikle Memelidir.' },
          { id: 'C', text: 'Kesinlikle Kuştur.' },
          { id: 'D', text: 'Kesinlikle Sürüngendir.' },
          { id: 'E', text: 'Sadece Balıktır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Hayvanlar aleminde başkalaşım (Larva/Pupa/İribaş dönemi) tipik olarak Böceklerde (Tırtıl-Kelebek) ve Kurbağalarda (İribaş-Kurbağa) görülür.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Hangi Omurgalı sınıfında "Dış Döllenme (Spermin ve yumurtanın suya bırakılıp dışarıda birleşmesi)" görülür?',
        options: [
          { id: 'A', text: 'Sürüngenler ve Kuşlar' },
          { id: 'B', text: 'Balıklar ve İkiyaşamlılar (Kurbağalar)' },
          { id: 'C', text: 'Sadece Memeliler' },
          { id: 'D', text: 'Sadece Sürüngenler' },
          { id: 'E', text: 'Kuşlar ve Memeliler' }
        ],
        correctOptionId: 'B',
        explanation: 'Su hayvanlarında (Balık/Kurbağa) spermlerin kuruma riski yoktur, bu yüzden doğrudan suya bırakılır. Kara hayvanlarında (Sürüngen, Kuş, Memeli) ise İç Döllenme (Çiftleşme) şarttır.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Bütün omurgalılar (Balık, Kurbağa, Sürüngen, Kuş, Memeli) hangi Boşaltım Organına (kanı süzen organa) SAHİPTİR?',
        options: [
          { id: 'A', text: 'Ağız' },
          { id: 'B', text: 'Solungaç' },
          { id: 'C', text: 'BÖBREK' },
          { id: 'D', text: 'Karaciğer' },
          { id: 'E', text: 'Akciğer' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün Omurgalılarda kanı süzen (idrar oluşturan) ana boşaltım organı "Böbrek"tir (Gelişmişlikleri farklı olsa da temel yapı böbrektir).'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Hayvanlar Alemi - 3 (Omurgalılar: Kuşlar ve Memeliler) (Easy)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Omurgalıların en gelişmiş iki sınıfı olan Kuşlar ve Memelilerin vücut ısıları nasıldır?',
        options: [
          { id: 'A', text: 'Soğukkanlıdır (Çevreye göre değişir)' },
          { id: 'B', text: 'SICAKKANLIDIR (Endoterm). Çevre sıcak veya soğuk da olsa kendi vücut ısılarını sabit (Örn: İnsanda 36.5 derece) tutarlar.' },
          { id: 'C', text: 'Kışın donarlar.' },
          { id: 'D', text: 'Sadece güneş altında ısınırlar.' },
          { id: 'E', text: 'Hiç terlemezler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kuş ve Memelilerin metabolizmaları (kalpleri 4 odalıdır, temiz/kirli kan karışmaz) çok hızlıdır. Kendi kalorifer sistemleri (Sıcakkanlılık) vardır.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Sadece "KUŞLARA ÖZGÜ" (Başka hiçbir canlıda olmayan) Dış Yüzey Örtüsü (Deri uzantısı) hangisidir?',
        options: [
          { id: 'A', text: 'Kıl' },
          { id: 'B', text: 'Pul' },
          { id: 'C', text: 'TÜY (Feather)' },
          { id: 'D', text: 'Zırh' },
          { id: 'E', text: 'Diken' }
        ],
        correctOptionId: 'C',
        explanation: 'ÇOK KRİTİK: Biyolojide "Tüy" kelimesi SADECE KUŞLARDA bulunur. İnsanın/Köpeğin vücudundakiler "Tüy" değil, "KIL"dır (Hair). Pul ise sürüngen/balıkta olur.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Kuşların UÇMASINI KOLAYLAŞTIRAN, iskelet ve solunum sistemlerindeki ÖZEL ADAPTASYONLAR nelerdir?',
        options: [
          { id: 'A', text: 'Kemiklerinin içinin DOLU ve ağır olması.' },
          { id: 'B', text: 'Kalplerinin küçük olması.' },
          { id: 'C', text: 'Kemiklerinin İÇİNİN BOŞ (havalı) olması ve Akciğerlerine bağlı özel HAVA KESELERİ bulundurmaları.' },
          { id: 'D', text: 'Hiç yemek yememeleri.' },
          { id: 'E', text: 'Ayaklarının olmaması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ağır bir iskelet uçmayı engeller. Kuşların kemiklerinin içi süngerimsi ve boşlukludur. Ayrıca hava keseleri uçarken onlara çift yönlü oksijen ve hafiflik sağlar.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Kuşların ağız yapısında NE BULUNMAZ?',
        options: [
          { id: 'A', text: 'Gaga' },
          { id: 'B', text: 'Dil' },
          { id: 'C', text: 'DİŞ (Uçmayı hafifletmek için dişler evrimsel olarak kaybolmuş, yerine hafif keratini gaga gelmiş, çiğneme işini midedeki TAŞLIK devralmıştır).' },
          { id: 'D', text: 'Tükürük' },
          { id: 'E', text: 'Damak' }
        ],
        correctOptionId: 'C',
        explanation: 'Kuşlarda ağır bir çene kemiği ve diş yoktur. Tohumları/Böcekleri yutarlar ve midedeki kaslı yapı (Taşlık) ile içindeki yuttukları çakıl taşları sayesinde mekanik olarak öğütürler.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Aşağıdaki yapılardan/durumlardan hangisi SADECE MEMELİLER SINIFINA ÖZGÜDÜR? (Tüm hayvanlar aleminde sadece Memelilerde bulunur)',
        options: [
          { id: 'A', text: 'Akciğer solunumu yapmak' },
          { id: 'B', text: 'Sıcakkanlı olmak (Kuşlar da öyledir)' },
          { id: 'C', text: 'Kalbinin 4 odalı olması (Kuşlar ve timsahlar da öyledir)' },
          { id: 'D', text: 'SÜT BEZLERİ ile yavrularını beslemek, Vücutlarının KIL (Hair) ile kaplı olması, Kaslı DİYAFRAM ve Olgun Alyuvarlarının ÇEKİRDEKSİZ olması.' },
          { id: 'E', text: 'Dört ayaklı olmak' }
        ],
        correctOptionId: 'D',
        explanation: 'Bunlar "Memeli Şifreleri"dir. Soruda Kıl, Süt Bezi, Kaslı Diyafram veya Çekirdeksiz (Olgun) Alyuvar kelimesini görürseniz, düşünmeden "Memeli" işaretleyin.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: '"Yarasa, Balina ve İnsan". Bu üç canlının ortak SINIFI hangisidir?',
        options: [
          { id: 'A', text: 'Kuşlar (Yarasa kuş sanılabilir)' },
          { id: 'B', text: 'Balıklar (Balina balık sanılabilir)' },
          { id: 'C', text: 'MEMELİLER (Mammalia)' },
          { id: 'D', text: 'Sürüngenler' },
          { id: 'E', text: 'İkiyaşamlılar' }
        ],
        correctOptionId: 'C',
        explanation: 'Yarasa uçan bir memelidir (Tüyü değil Kılı vardır, süt verir). Balina ve Yunus yüzen memelilerdir (Akciğer solunumu yapar, yavrularını doğurur ve emzirirler).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Memeliler, "Akciğer solunumu" yaparken Nefes alıp vermeyi (Göğüs kafesini genişletip daraltmayı) sağlayan HANGİ ÖZEL KASI kullanırlar?',
        options: [
          { id: 'A', text: 'Mide kası' },
          { id: 'B', text: 'Kalp kası' },
          { id: 'C', text: 'KASLI DİYAFRAM' },
          { id: 'D', text: 'Biceps (Kol) kası' },
          { id: 'E', text: 'Dil kası' }
        ],
        correctOptionId: 'C',
        explanation: 'Zarsı (Bağ dokudan) diyafram kuşlarda vardır ama KASLI diyafram sadece memelilerin (Nefes almak için göğüs ve karın boşluğunu ayıran güçlü kasın) özelliğidir.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Memelilerin (Örn İnsanın) dolaşımdaki OLGUN ALYUVAR hücreleri oksijeni taşıyan kan hücreleridir. Bunların diğer tüm canlıların alyuvarlarından FARKLI (Memeliye özgü) özelliği nedir?',
        options: [
          { id: 'A', text: 'Beyaz renkli olmaları.' },
          { id: 'B', text: 'Çok büyük olmaları.' },
          { id: 'C', text: 'Daha çok Oksijen taşıyabilmek (İçine Hemoglobin sığdırabilmek) için OLGUNLAŞTIKLARINDA ÇEKİRDEKLERİNİ ve Organellerini DIŞARI ATMALARI (Çekirdeksiz olmaları).' },
          { id: 'D', text: 'Hiç kan taşımamaları.' },
          { id: 'E', text: 'DNA içermeleri.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok hücreli bir yapının Oksijen ihtiyacı çok yüksektir. Memeli alyuvarı, "Daha çok Oksijen taşıyıp yeri genişleteyim" diyerek çekirdek ve mitokondrisini feda eder.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Tüm Memeliler "Doğurarak mı (Plasenta ile)" ürer? İstisnası var mıdır?',
        options: [
          { id: 'A', text: 'Evet, %100 hepsi doğurur.' },
          { id: 'B', text: 'HAYIR. İstisnası "Gagalı Memeliler"dir (Örn: Ornitorenk). Bunlar YUMURTLARLAR ancak yavrularına SÜT VERİRLER ve kılları vardır.' },
          { id: 'C', text: 'Hepsi yumurtlar.' },
          { id: 'D', text: 'Hiç üremezler.' },
          { id: 'E', text: 'Sadece denizde doğururlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Memeliler 3 gruba ayrılır: 1- Gagalı (Yumurtlayan / Ornitorenk), 2- Keseli (Erken doğurup kesede emziren / Kanguru), 3- Plasentalı (Karnında tam geliştirip doğuran / İnsan, Kedi).'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Kuşlarda ve Memelilerde Ortak Olan, Boşaltım (İdrar) ile ilgili yapı HANGİSİDİR?',
        options: [
          { id: 'A', text: 'İkisinin de terlemesi' },
          { id: 'B', text: 'İkisinin de böbreği (Metanefroz tip) taşıması' },
          { id: 'C', text: 'Sadece solungaç' },
          { id: 'D', text: 'Kuyruk' },
          { id: 'E', text: 'Diş' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüm omurgalılarda boşaltım organı böbrektir. Kuş ve memelilerde böbreğin (Suyu geri emen) en gelişmiş hali görülür.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Kangurular ve Koalalar hangi memeli grubuna örnektir?',
        options: [
          { id: 'A', text: 'Gagalı memeliler' },
          { id: 'B', text: 'KESELİ Memeliler (Yavru tam gelişmeden çok erken doğar ve annesinin karnındaki keseye tırmanarak orada süt emip gelişimini tamamlar).' },
          { id: 'C', text: 'Plasentalı memeliler' },
          { id: 'D', text: 'Uçan memeliler' },
          { id: 'E', text: 'Yüzen memeliler' }
        ],
        correctOptionId: 'B',
        explanation: 'Kangurularda Plasenta (anne ile bebeği kan yoluyla bağlayan kordon sistemi) çok zayıftır. Yavru birkaç cm iken doğar, kesedeki memeye tutunur.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: '"İnsan, At, Kedi, Balina, Yarasa" HANGİ Memeli Grubundadır?',
        options: [
          { id: 'A', text: 'Keseli' },
          { id: 'B', text: 'Gagalı' },
          { id: 'C', text: 'PLASENTALI Memeliler (Yavru anne rahminde / uterus uzun süre gelişir, Plasenta adı verilen damar ağıyla beslenir ve tam şeklini almış olarak doğar).' },
          { id: 'D', text: 'Sürüngen memeliler' },
          { id: 'E', text: 'Yumurtlayan memeliler' }
        ],
        correctOptionId: 'C',
        explanation: 'Memelilerin en gelişmiş ve en kalabalık grubu Plasentalı (Eteneli) memelilerdir.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Memeliler dışında hayvanlarda "Süt Bezi (Emzirme)" veya "Ter Bezi" görülür mü?',
        options: [
          { id: 'A', text: 'Kuşlarda süt bezi vardır.' },
          { id: 'B', text: 'Sürüngenler yavrularını emzirir.' },
          { id: 'C', text: 'HAYIR. Süt Bezi, Ter Bezi, Yağ Bezi (Gelişmiş deri salgı bezleri) SADECE Memelilere ÖZGÜDÜR.' },
          { id: 'D', text: 'Balıklar terler.' },
          { id: 'E', text: 'Kurbağalar süt verir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Memeli (Mammalia) kelimesi zaten Latincede "Meme/Süt Bezi taşıyan" demektir.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Kuşlarda iç organlar incelendiğinde, ağırlık yapmasın (uçmayı kolaylaştırsın) diye HANGİ ORGANDAN feragat edilmiştir?',
        options: [
          { id: 'A', text: 'Kalp' },
          { id: 'B', text: 'Böbrek' },
          { id: 'C', text: 'İDRAR KESESİ (Mesane). Kuşlar idrarlarını (Ürik asit) depo etmezler, dışkıyla birlikte katı/beyazımsı macun şeklinde direkt dışarı atarlar.' },
          { id: 'D', text: 'Mide' },
          { id: 'E', text: 'Akciğer' }
        ],
        correctOptionId: 'C',
        explanation: 'Kuş idrar ve dışkısı aynı anda "Kloak" denilen tek bir delikten macun kıvamında atılır. İdrar kesesi taşımak su yükü (ağırlık) demektir.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Bütün omurgalı sınıflarında (Balık, Kurbağa, Sürüngen, Kuş, Memeli) ORTAK OLAN şey nedir?',
        options: [
          { id: 'A', text: 'Sıcakkanlı olmaları' },
          { id: 'B', text: 'Hepsinde KAPALI KAN DOLAŞIMI (Kanın sadece damarlar ve kalp içinde dolaşması, vücut boşluğuna dökülmemesi) ve KIRMIZI KAN (Hemoglobin) bulunması.' },
          { id: 'C', text: 'Hepsinde Akciğer olması' },
          { id: 'D', text: 'Hepsinde 4 odalı kalp olması' },
          { id: 'E', text: 'Hepsinde kıl bulunması' }
        ],
        correctOptionId: 'B',
        explanation: 'Böcekler (Eklembacaklılar) gibi omurgasızlarda kan damardan dışarı sızar (Açık dolaşım). Omurgalıların hepsinde ise sistem kusursuz borularla (Damarlarla) kapalı döngüdür.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Virüsler ve Biyolojik Çeşitlilik (Medium)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Virüsler (Örn: Koronavirüs, HIV, Grip) modern Sınıflandırma basamaklarının (Alem, Şube, Sınıf vb.) NERESİNDE yer alır?',
        options: [
          { id: 'A', text: 'Prokaryot Domaininde' },
          { id: 'B', text: 'Hayvanlar aleminde' },
          { id: 'C', text: 'HİÇBİRİNDE. Virüsler "Hücre" yapısına sahip olmadıkları ve kendi başlarına bir metabolizmaları (ATP üretimi, ribozomu vb) olmadığı için "Canlı" sayılmazlar, Sınıflandırmaya DAHİL EDİLMEZLER.' },
          { id: 'D', text: 'Bitkiler aleminde' },
          { id: 'E', text: 'Mantarlar aleminde' }
        ],
        correctOptionId: 'C',
        explanation: 'Virüsler (Mecburi Hücre İçi Parazitlerdir). Ne prokaryot ne ökaryottur, sadece bir kapsül içindeki DNA/RNA parçasıdır. Konak hücre dışında cansız kristaldir.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Bir Virüsün (Viral partikülün) temel yapısı HANGİ iki kısımdan oluşur?',
        options: [
          { id: 'A', text: 'Çekirdek ve Mitokondri' },
          { id: 'B', text: 'Hücre Zarı ve Sitoplazma' },
          { id: 'C', text: 'Dışında bir PROTEİN KILIF (Kapsid) ve İçinde bir GENOM (Kalıtım materyali, ya DNA ya da RNA).' },
          { id: 'D', text: 'Selüloz Çeper ve Su' },
          { id: 'E', text: 'Sadece Yağ ve Kemik' }
        ],
        correctOptionId: 'C',
        explanation: 'Virüs = Nükleoprotein (Nükleik Asit + Protein kılıf) paketidir. Hücre organelleri, sitoplazması, zarı YOKTUR.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir virüs KENDİ BAŞINA ATP üretebilir mi, protein sentezleyebilir mi, büyüyüp bölünebilir mi?',
        options: [
          { id: 'A', text: 'Evet, hepsini yapar.' },
          { id: 'B', text: 'HAYIR. Virüsün metabolizması (Enzimi, Ribozomu, Mitokondrisi) YOKTUR. Bu işlemleri yapabilmek için CANLI BİR KONAĞIN (Örn insan hücresinin) İÇİNE GİRİP onu köle gibi KULLANMAK ZORUNDADIR.' },
          { id: 'C', text: 'Sadece ATP üretir.' },
          { id: 'D', text: 'Sadece böler.' },
          { id: 'E', text: 'Bitki ise yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Virüslere "Zorunlu Hücre İçi Parazit" denmesinin nedeni budur. Fabrikası yoktur, başka fabrikayı (Hücreyi) hackleyip kendi üretimini o fabrikaya yaptırır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'İnsandaki (ve diğer tüm canlılardaki) Genom (Kalıtım Materyali) Hem DNA Hem RNA içerirken, VİRÜSLERDE durum nasıldır?',
        options: [
          { id: 'A', text: 'Virüslerde de hem DNA hem RNA birlikte bulunur.' },
          { id: 'B', text: 'Virüslerde genetik materyal YOKTUR.' },
          { id: 'C', text: 'Bir virüs YA SADECE DNA TAŞIR, YA SADECE RNA TAŞIR. (İkisi aynı anda bulunmaz. Örn: DNA virüsü veya RNA virüsü / Koronavirüs gibi).' },
          { id: 'D', text: 'Sadece protein taşır.' },
          { id: 'E', text: 'Sadece kromozom taşır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücresel hayatta çift paket (DNA ana şifre, RNA işçi) birlikte bulunur. Virüste ise sadece tek çeşit yönetici (Anahtar) kod vardır (Ya DNA ya RNA).'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Bakterileri hasta eden (Sadece bakteri hücresinin içine girip orada çoğalan) özel virüslere NE AD VERİLİR?',
        options: [
          { id: 'A', text: 'Covid' },
          { id: 'B', text: 'Amip' },
          { id: 'C', text: 'BAKTERİYOFAJ (Faj)' },
          { id: 'D', text: 'Mantar' },
          { id: 'E', text: 'Paramesyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriyofaj (Bakteri yiyen) uzay gemisine benzeyen şekliyle sadece bakteri hücre zarını delip içine DNA\'sını zerk eden özel virüstür.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: '"Her virüs her hücreye GİREMEZ. Virüslerin (Örn: Hepatit virüsünün karaciğere, HIV\'in akyuvarlara tutunması) KONAK SEÇİCİLİĞİ vardır." \nBu seçicilik NEYE dayanır?',
        options: [
          { id: 'A', text: 'Hücrenin büyüklüğüne' },
          { id: 'B', text: 'Virüsün gözleri olmasına' },
          { id: 'C', text: 'Virüsün dış (Protein) kılıfındaki Anahtar yapı (Antijen/Reseptör) ile, gireceği hücrenin zarındaki Kilit yapının (Reseptörün) BİRBİRİNE TAM UYMASI (Tanıması) kuralına dayanır.' },
          { id: 'D', text: 'Virüsün sadece sıcak yerleri sevmesine' },
          { id: 'E', text: 'Kanın rengine' }
        ],
        correctOptionId: 'C',
        explanation: 'Virüsler hedefe (hücreye) kilit-anahtar uyumuyla tutunur. Grip virüsünün anahtarı (Spike proteini) akciğer zarına uyar, karaciğere uymaz (Kapıyı açamaz).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Virüslere (Örn: Grip veya Covid) karşı ANTİBİYOTİK İLAÇLAR (Örn: Penisilin) KULLANMAK işe yarar mı?',
        options: [
          { id: 'A', text: 'Evet, antibiyotik her şeyi öldürür.' },
          { id: 'B', text: 'HAYIR, KESİNLİKLE İŞE YARAMAZ. Antibiyotikler SADECE BAKTERİLERİN enzim veya hücre duvarı yapısını bozmak için üretilmiştir. Virüslerin hücresi veya enzimi OLMADIĞI İÇİN antibiyotikten etkilenmezler.' },
          { id: 'C', text: 'Evet, çok iyi gelir.' },
          { id: 'D', text: 'Sadece yüksek dozda işe yarar.' },
          { id: 'E', text: 'Sadece çocuklarda işe yarar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tıptaki en büyük halk yanlışıdır. Grip (Virüs) için antibiyotik içilmez. Virüslere karşı Antiviral ilaçlar veya Bağışıklık (Aşı, İnterferon, Antikor) kullanılır.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Biyolojik Çeşitlilik (Biyoçeşitlilik) sadece bir alandaki "Tür Sayısı" mıdır? Başka hangi alt bileşenleri KAPSAR?',
        options: [
          { id: 'A', text: 'Sadece tür sayısını kapsar.' },
          { id: 'B', text: 'Sadece hayvanları kapsar.' },
          { id: 'C', text: 'SADECE Tür Çeşitliliğini DEĞİL; Genetik Çeşitliliği (Tür içi varyasyonlar) ve Ekosistem (Habitat) Çeşitliliğini de kapsayan BÜTÜNSEL bir kavramdır.' },
          { id: 'D', text: 'Sadece dağları kapsar.' },
          { id: 'E', text: 'Sadece nesli tükenenleri kapsar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyoçeşitlilik = Genetik (Domates çeşitleri) + Tür (Domates, biber, kuş, böcek) + Ekosistem (Göl, Orman, Dağ habitatlarının çeşitliliği) olmak üzere 3 sacayağından oluşur.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Dünyanın sadece BELİRLİ (Sınırlandırılmış, Özel) bir BÖLGESİNDE yaşayan (Örn: Sadece Van Gölü\'nde yaşayan İnci Kefali, Sadece Türkiye\'de yetişen Sığla Ağacı) ve DÜNYANIN BAŞKA HİÇBİR YERİNDE bulunmayan türlere NE AD VERİLİR?',
        options: [
          { id: 'A', text: 'Kozmopolit Tür' },
          { id: 'B', text: 'İstilacı Tür' },
          { id: 'C', text: 'ENDEMİK TÜR' },
          { id: 'D', text: 'Soyu Tükenmiş Tür' },
          { id: 'E', text: 'Yerli Tür' }
        ],
        correctOptionId: 'C',
        explanation: 'Endemik, "O yöreye ait, sadece orada bulunan" demektir. Çoğunlukla adalarda veya dağ tepelerinde (izole olmuş ortamlarda) oluşurlar.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Doğal (Yerli) bir ekosisteme Dışarıdan (İnsan eliyle veya gemilerle vb) getirilip bırakılan ve hızla üreyerek, o bölgedeki yerli türleri (rekabet veya avcılıkla) yok edip ekosistemi ÇÖKERTEN türlere NE DENİR? (Örn: Avustralya\'ya dışarıdan getirilen dev karakurbağaları)',
        options: [
          { id: 'A', text: 'Endemik Tür' },
          { id: 'B', text: 'Kilit Taşı Tür' },
          { id: 'C', text: 'İSTİLACI (Egzotik) TÜR' },
          { id: 'D', text: 'Faydalı Tür' },
          { id: 'E', text: 'Barışçıl Tür' }
        ],
        correctOptionId: 'C',
        explanation: 'İstilacı türler (Yabancı/Alien species), yeni girdikleri ortamda onları yiyecek doğal bir düşmanları (Avcıları) olmadığı için kontrolsüz çoğalırlar ve yerli türlerin besinini/yaşam alanını işgal ederler.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Biyoçeşitliliğin "Ekonomik, Ekolojik ve Etik" faydalarından HANGİSİ "Ekolojik Fayda"ya örnektir?',
        options: [
          { id: 'A', text: 'Bitkilerden ilaç yapmak (Ekonomik/Tıbbi)' },
          { id: 'B', text: 'Ormanlardan kereste (Odun) elde edip satmak (Ekonomik)' },
          { id: 'C', text: 'Ormanların ve çeşitli bitkilerin, doğadaki Karbon/Oksijen ve Su döngüsünü, toprak kaymasını (Erozyonu) ENGELLEYİP İKLİMİ DENGELEMESİ.' },
          { id: 'D', text: 'Deniz kabuklarından süs eşyası yapmak' },
          { id: 'E', text: 'Turist çekip para kazanmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekoloji, doğanın kendi çarklarının (döngüler, iklim, oksijen) devamlılığıdır. Biyoçeşitlilik çökerse, ormanlar giderse Karbon döngüsü çöker, küresel ısınma başlar.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Virüslerin çoğalma stratejisinde (Litik döngü) kabaca hangi sıra izlenir?',
        options: [
          { id: 'A', text: 'Virüs hücreyi önce besler, sonra kendisi parçalanır.' },
          { id: 'B', text: 'Tutunma -> İçeri (DNA/RNA) giriş -> Hücrenin sistemini ele geçirip Virüs parçaları (Protein/Genom) Sentezletme -> Virüslerin Birleşmesi -> Hücreyi PATLATARAK ÇIKMA.' },
          { id: 'C', text: 'Hücrenin dışında bekleyip kendi kendine çoğalma.' },
          { id: 'D', text: 'Bitkiye dönüşme' },
          { id: 'E', text: 'Mayoz bölünme geçirme' }
        ],
        correctOptionId: 'B',
        explanation: '1-Tutun, 2-DNA\'yı içeri at, 3-Hücrenin DNA\'sını ez ve kendi parçalarını ürettir, 4-Hücrenin içinde toplan, 5-Hücreyi öldürüp/patlatıp dışarı (yeni hücrelere) yayıl.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: '"İn-situ (Yerinde)" ve "Ex-situ (Dışarıda)" koruma biyolojisi kavramları ne anlama gelir?',
        options: [
          { id: 'A', text: 'Sadece bitki ekmektir.' },
          { id: 'B', text: 'İn-situ (Yerinde): Canlıyı KENDİ DOĞAL ORTAMINDA (Milli parklar, sit alanları) korumak. Ex-situ (Dışarıda): Canlıyı doğal ortamı dışında (Hayvanat Bahçesi, Tohum Bankası) özel alanlarda korumak.' },
          { id: 'C', text: 'İkisi de aynı şeydir.' },
          { id: 'D', text: 'Sadece avlanma yöntemleridir.' },
          { id: 'E', text: 'Canlıları uzaya göndermektir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tür tehlikedeyse ilk tercih In-Situ (kendi ormanını korumak) olmalıdır. Eğer bu mümkün değilse Ex-Situ (DNA bankasına veya hayvanat bahçesine alıp suni yaşatmak) kullanılır.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Mutasyonlar ve Varyasyonlar (Genetik Çeşitlilik) Virüslerde çok hızlı mıdır?',
        options: [
          { id: 'A', text: 'Hayır, virüsler hiç değişmez.' },
          { id: 'B', text: 'EVET, ÇOK HIZLIDIR (Özellikle RNA virüsleri). Hızlı çoğaldıkları ve kontrol mekanizmaları zayıf olduğu için genetik şifreleri sürekli değişir (Mutasyon) ve yeni tipleri ortaya çıkar.' },
          { id: 'C', text: 'Sadece bakterilerde hızlıdır.' },
          { id: 'D', text: 'Evet ama sadece 100 yılda bir.' },
          { id: 'E', text: 'Bilinmemektedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Koronavirüs veya Grip virüsünün sürekli varyant (Delta, Omicron vb) değiştirmesinin sebebi, RNA virüslerinin çok sık hata (mutasyon) yaparak kılık değiştirmesidir (Aşılardan kaçmaları).'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Türkiye Biyoçeşitlilik (Özellikle Endemik Bitki) açısından NEDEN çok zengindir (Avrupa kıtasının tamamına yakın çeşidi barındırır)?',
        options: [
          { id: 'A', text: 'Çok büyük olduğu için.' },
          { id: 'B', text: 'Sadece dağlık olduğu için.' },
          { id: 'C', text: 'Üç farklı İklim (Akdeniz, Karadeniz, Karasal) tipinin, Üç farklı Biyocoğrafik bölgenin (Avrupa-Sibirya, Akdeniz, İran-Turan) BİRLEŞİM NOKTASINDA olması ve buzul çağlarında sığınak olması nedeniyle.' },
          { id: 'D', text: 'Bütün bitkiler dışarıdan getirildiği için.' },
          { id: 'E', text: 'Çok sıcak olduğu için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Türkiye bir köprü (kavşak) görevi görür. Yükseklik farkları, iklim çeşitliliği (microklimalar) binlerce endemik türün (Çeşitliliğin) oluşmasını sağlamıştır.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Sınıflandırma Karma ve Bütünlük (Medium)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir X canlısı: Çok hücreli, hücre duvarı YOK, Heterotrof (Tüketici) ve Glikojen depoluyor. \nBir Y canlısı: Tek hücreli, hücre duvarı YOK, Heterotrof (Tüketici) ve Glikojen depoluyor. \nBu bilgilere göre X ve Y HANGİ ALEMLERDEDİR?',
        options: [
          { id: 'A', text: 'İkisi de Hayvandır.' },
          { id: 'B', text: 'X Mantar, Y Protistadır.' },
          { id: 'C', text: 'X HAYVAN, Y ise PROTİSTA\'dır (Örn: Amip veya Paramesyum).' },
          { id: 'D', text: 'İkisi de Mantardır.' },
          { id: 'E', text: 'X Bitki, Y Hayvandır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre duvarı yok ve glikojen varsa (Tüketici) akla hemen Hayvan gelir. ANCAK Hayvanlar ZORUNLU ÇOK HÜCRELİDİR. Y canlısı "Tek hücreli" dediği için hayvan Olamaz, hayvan özellikleri gösteren bir tek hücreli (Protista / Protozoa) olmak zorundadır.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Mantarlar ve Bakterilerin ortak olduğu "Saprofit (Çürükçül)" beslenme tarzının, Doğa (Ekosistem) için EN HAYATİ sonucu nedir?',
        options: [
          { id: 'A', text: 'Oksijen üretmektir.' },
          { id: 'B', text: 'Güneş ışığını tutmaktır.' },
          { id: 'C', text: 'Organik atıkları (ceset, yaprak) parçalayarak İNORGANİK MADDELERE (Azot, Su, Mineral) DÖNÜŞTÜRÜP TOPRAĞA GERİ VERMEK (Böylece bitkilerin kullanabilmesi için Madde Döngüsünü sağlamak).' },
          { id: 'D', text: 'Sadece kötü koku yapmaktır.' },
          { id: 'E', text: 'Ormanları kurutmaktır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çürükçüller dünyadaki "Geri Dönüşüm" fabrikalarıdır. Onlar olmazsa topraktaki azot (gübre) biter, dünyayı cesetler kaplar, fotosentez ve yaşam durur.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Canlıların sınıflandırılmasında "Homolog Organ" (Kökenleri / İç yapıları aynı, görevleri farklı olabilen organlar) aranır. \nAşağıdakilerden hangisi Homolog organa örnektir?',
        options: [
          { id: 'A', text: 'Sinek kanadı - Yarasa kanadı (Görevi aynı, kökü farklı - Analog)' },
          { id: 'B', text: 'Atın ön bacağı - Balinanın yüzgeci - İnsanın kolu (Üçünün de kemik sıralaması ve embriyolojik gelişimi birebir aynıdır).' },
          { id: 'C', text: 'Ahtapot kolu - İnsan kolu' },
          { id: 'D', text: 'Arı iğnesi - Akrep iğnesi' },
          { id: 'E', text: 'Kuş gagası - Kaplumbağa ağzı' }
        ],
        correctOptionId: 'B',
        explanation: 'Homolog organda Göreve (Uçma, yüzme, koşma) BAKILMAZ. Röntgen çekildiğinde içerdeki kemiklerin aynı soydan gelip gelmediğine (Radyus, Ulna, Humerus vb.) bakılır.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Kuşlar ve Sürüngenler (Yılan, Timsah) arasında ortak olan BİYOLOJİK durum nedir?',
        options: [
          { id: 'A', text: 'Sıcakkanlı olmaları (Hayır, sürüngen soğukkanlıdır)' },
          { id: 'B', text: 'İkisi de Kıllarla kaplıdır' },
          { id: 'C', text: 'Her iki sınıf da Yumurtlayarak (Dış gelişme ile) ürer, İç döllenme yaparlar ve Akciğer solunumu yaparlar.' },
          { id: 'D', text: 'İkisi de süt verir.' },
          { id: 'E', text: 'Dış iskelete sahiptirler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrimsel olarak kuşlar sürüngenlerden ayrılmıştır. Her ikisi de kalın kabuklu yumurta (Amniyotik yumurta) yumurtlar, suda değil karada çiftleşirler (İç döllenme) ve akciğer solunumu yaparlar.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Memeliler (Mammalia) sınıfındaki canlılarda OKSİJEN TAŞIMA KAPASİTESİNİ MAKSİMUM YAPMAK İÇİN evrimleşmiş iki özellik hangisidir?',
        options: [
          { id: 'A', text: 'Süt bezi ve Kıl' },
          { id: 'B', text: 'Placenta ve Diş' },
          { id: 'C', text: 'KASLI DİYAFRAM (Nefes almayı çok güçlendirir) ve ÇEKİRDEKSİZ OLGUN ALYUVARLAR (Kanın oksijen kapasitesini artırır).' },
          { id: 'D', text: 'Kanat ve Tüy' },
          { id: 'E', text: 'Gaga ve Taşlık' }
        ],
        correctOptionId: 'C',
        explanation: 'Memelilerin enerji (Metabolizma) ihtiyacı çok yüksektir. Bol oksijen için körük (Kaslı Diyafram) ve bol kova (Çekirdeksiz alyuvar) şarttır.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Arkeler (Archaea) genellikle "Ekstremofil" canlılardır. \nBir Archaea, deniz dibindeki hidrotermal (kaynayan, 100+ derece) kaynaklarda YAŞAYABİLİYORSA, bu durum onun hangi YAPISININ çok güçlü olduğunu gösterir?',
        options: [
          { id: 'A', text: 'Gözlerinin çok iyi gördüğünü' },
          { id: 'B', text: 'ENZİMLERİNİN VE PROTEİNLERİNİN yüksek sıcaklıkta (Denatüre olmadan / bozulmadan) ÇALIŞABİLDİĞİNİ.' },
          { id: 'C', text: 'Çok büyük ayakları olduğunu' },
          { id: 'D', text: 'Ateş püskürttüğünü' },
          { id: 'E', text: 'Suyu soğuttuğunu' }
        ],
        correctOptionId: 'B',
        explanation: 'Normal canlıların enzimleri (Proteinleri) 50-60 derecede bozulur (Pişmiş yumurta gibi/Denatürasyon). Termofil Arkelerin enzimleri ise 110 derecede bile çalışacak dirençli bir kimyaya sahiptir.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: '"Pinus brutia (Kızılçam) ve Pinus nigra (Karaçam)". \nBu iki canlı DOĞAL ORTAMDA ÇİFTLEŞİRLERSE "VERİMLİ BİR DÖL (Kendi kendine üreyebilen bir torun)" OLUŞTURABİLİRLER Mİ?',
        options: [
          { id: 'A', text: 'Evet, çünkü cinsleri (Pinus) aynıdır.' },
          { id: 'B', text: 'Evet, çünkü ikisi de bitkidir.' },
          { id: 'C', text: 'HAYIR. Verimli döl oluşturmak için SADECE VE KESİNLİKLE "AYNI TÜR" (Örn: Pinus nigra x Pinus nigra) olmaları gerekir. Bunların sadece cinsleri aynıdır, türleri farklıdır.' },
          { id: 'D', text: 'Bazen oluştururlar.' },
          { id: 'E', text: 'Evet, ağaçlarda kural işlemez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Klasik ÖSYM Tuzağı. İki canlıya "Akraba" diyebilirsiniz ama "Verimli döl verir" demeniz için %100 AYNI TÜR olmak (1. ve 2. kelimesinin BİREBİR aynı olması) zorundadır.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Endemik bitki türlerinin KORUNMASI neden küresel (dünya çapında) bir önem taşır?',
        options: [
          { id: 'A', text: 'Çok lezzetli oldukları için.' },
          { id: 'B', text: 'Çok büyük oldukları için.' },
          { id: 'C', text: 'Çünkü sadece o bölgeye aittirler, o bölgede yok olurlarsa (Örn yangınla) DÜNYA ÜZERİNDEN TAMAMEN SİLİNMİŞ (Soyu Tükenmiş) olurlar. Gen havuzu (Gelecekteki ilaç vb potansiyeli) ebediyen kaybedilir.' },
          { id: 'D', text: 'Sadece fotoğraf çekmek için.' },
          { id: 'E', text: 'Korunmaları gerekmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kozmopolit (Her yerde olan) bir bitki türü Türkiye\'de yok olursa, Almanya\'dan tekrar getirilebilir. Ama Türkiye\'deki "Sığla ağacı" ölürse, kainatta bir daha var olamaz.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Bir hücrede sadece DNA, Ribozom, Hücre Zarı ve Sitoplazma GÖZLEMLENMİŞTİR. Hücre duvarı, Kloroplast ve Mitokondri YOKTUR. \nBu hücre AŞAĞIDAKİLERDEN HANGİSİ OLABİLİR?',
        options: [
          { id: 'A', text: 'Bitki (Olamaz, duvarı var)' },
          { id: 'B', text: 'Bakteri (Olamaz, çoğunun duvarı var)' },
          { id: 'C', text: 'Mantar (Olamaz, kitin duvarı var)' },
          { id: 'D', text: 'HAYVAN HÜCRESİ (Zarsız organel ribozom içerir, çekirdek belirtilmemiş olsa da duvarının olmaması Hayvanı güçlü ihtimal yapar).' },
          { id: 'E', text: 'Virüs (Olamaz, ribozomu zarı yok)' }
        ],
        correctOptionId: 'D',
        explanation: 'Duvarı (Çeperi) olmayan iki seçenek vardır: Ya Hayvan hücresidir, ya da bazı amipler / plazmodyum (Protista) gibi canlılardır.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Eklembacaklıların "Böcekler" grubundaki bir canlıyı "Örümcekler" grubundan ayırmanın EN BASİT MORFOLOJİK YOLU nedir?',
        options: [
          { id: 'A', text: 'Rengine bakmak' },
          { id: 'B', text: 'Boyuna bakmak' },
          { id: 'C', text: 'BACAK SAYISINA BAKMAK. (Böceklerde 6 bacak / 3 çift bacak vardır. Örümcek/Akrep grubunda ise 8 bacak / 4 çift bacak vardır).' },
          { id: 'D', text: 'Göz rengine bakmak' },
          { id: 'E', text: 'Sesini dinlemek' }
        ],
        correctOptionId: 'C',
        explanation: 'Böcek (Insecta) tanımı kesinlikle 6 bacak (Karınca, arı, sinek) gerektirir. Örümcek ve Akrepler böcek DEĞİLDİR, Araknoittir (8 bacaklı).'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'İki canlının (X ve Y) SADECE "Aynı Takım" (Örn: Etçiller) içinde yer aldığı biliniyorsa; \nI. Aynı Şubededirler \nII. Aynı Cinstedirler \nIII. Aynı Beslenme Şekline (Etçil) sahiptirler. \nHangileri KESİN DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'I ve III (Üst kategorileri olan Sınıf, Şube, Alem aynıdır. Takımın özelliği olan beslenme vb de aynıdır. Ancak Aile, Cins, Tür alt kategorilerdir, FARKLI OLABİLİR).' },
          { id: 'D', text: 'I, II ve III' },
          { id: 'E', text: 'Yalnız III' }
        ],
        correctOptionId: 'C',
        explanation: 'Aynı Takımda olanların ÜST basamakları kesindir (Şube). Ayrıca takım özellikleri de kesindir. Ama alt basamaklarını (Cins, Tür) BİLEMEYİZ.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Biyolojik çeşitliliği tehdit eden EN BÜYÜK İNSAN KAYNAKLI (Antropojenik) FAKTÖR aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Doğal depremler' },
          { id: 'B', text: 'HABİTAT (Yaşam Alanı) PARÇALANMASI VE YOK EDİLMESİ (Ormanların kesilmesi, betonlaşma, otoyollarla ormanın bölünmesi).' },
          { id: 'C', text: 'Meteor düşmesi' },
          { id: 'D', text: 'Güneş patlamaları' },
          { id: 'E', text: 'Aslanların geyikleri yemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir canlının evini (habitatını) yok ederseniz veya otoyolla ortadan ikiye bölerseniz, canlı popülasyonu izole olur, üreyemez ve çöker.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Virüsler (Örn: AIDS hastalığına sebep olan HIV) neden normal bakteriler gibi hızla ve kolayca tedavi edilemezler?',
        options: [
          { id: 'A', text: 'Çok büyük oldukları için.' },
          { id: 'B', text: 'Sürekli uyudukları için.' },
          { id: 'C', text: 'Çünkü bizim KENDİ HÜCRELERİMİZİN İÇİNE GİZLENİRLER ve sistemimizi kullanırlar. Virüsü öldüren ilaç, çoğunlukla virüsün içindeki KENDİ hücremize de zarar verir.' },
          { id: 'D', text: 'Çok hızlı koştukları için.' },
          { id: 'E', text: 'Derilerinin çok sert olması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri dışarıda duran "yabancı" bir düşmandır, hedeflemek kolaydır. Virüs ise bizim "içimizdeki casustur", hücrenin iç mekanizmalarına karıştığı için seçici olarak sadece onu öldürmek çok zordur.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bitkilerde görülen; \nI. Gerçek Kök ve Gövde \nII. İletim Demeti (Odun-Soymuk borusu) \nIII. Çiçek ve Tohum \nYukarıdaki yapıların EVRİMSEL ORTAYA ÇIKIŞ SIRASI (İlkelden gelişmişe) nasıldır?',
        options: [
          { id: 'A', text: 'III - II - I' },
          { id: 'B', text: 'I - III - II' },
          { id: 'C', text: 'I (Damarsız Tohumsuzda başlar) -> II (Damarlı Tohumsuzda başlar) -> III (Tohumlu bitkilerde başlar)' },
          { id: 'D', text: 'II - III - I' },
          { id: 'E', text: 'I - II - III' }
        ],
        correctOptionId: 'E',
        explanation: 'En ilkelinde hiçbir şey yoktur (Sadece köksü yapı). Sonra eğrelti otunda İletim Demeti (Boru) icat edilir. En son gelişmişlerde Tohum (Çiçek) icat edilir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Filogenetik (Doğal) Sınıflandırma yapılırken iki türün YAKIN AKRABA OLDUĞUNA karar vermek için KULLANILACAK EN KESİN (Güçlü) Kanıt hangisidir?',
        options: [
          { id: 'A', text: 'Aynı ormanda yaşamaları' },
          { id: 'B', text: 'Aynı renkte olmaları' },
          { id: 'C', text: 'Kanlarındaki Protein diziliminin (Dolayısıyla DNA diziliminin / Nükleotid sırasının) birbirine çok yüksek oranda (%95+) BENZEMESİ.' },
          { id: 'D', text: 'Beslenme şekillerinin (Etçil) aynı olması' },
          { id: 'E', text: 'Kromozom sayılarının aynı olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Morfoloji (görünüş) veya Kromozom sayısı (sayı) yanıltabilir (Örn: Hamsi ve Yunus). Ancak DNA (Barkod) veya Protein (Şifre) asla yalan söylemez. Genetik benzerlik en kesin kanıttır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali (Test 13)',
    description: 'Konunun tamamını ölçen 10 soru (Medium)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Aşağıdaki yapılardan hangisi PROKARYOT (Bakteri ve Arke) bir hücrede KESİNLİKLE BULUNMAZ?',
        options: [
          { id: 'A', text: 'Ribozom' },
          { id: 'B', text: 'Hücre Duvarı' },
          { id: 'C', text: 'ZARLI ORGANELLER (Mitokondri, Kloroplast, Golgi) VE ÇEKİRDEK ZARI.' },
          { id: 'D', text: 'DNA ve RNA' },
          { id: 'E', text: 'Sitoplazma' }
        ],
        correctOptionId: 'C',
        explanation: 'Prokaryot "Ön-Çekirdekli" demektir. Zarlı yapılar (Çekirdek zarı dahil) barındırmazlar. Tüm işlemleri sitoplazmada ve hücre zarında yaparlar.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'İkili adlandırma (Binomial Nomenclature) sistemine göre "Felis leo" (Aslan) ve "Felis domesticus" (Ev kedisi) isimli iki canlı için hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Türleri aynıdır.' },
          { id: 'B', text: 'CİNSLERİ AYNIDIR (Felis), yani birbirlerine çok yakın akrabadırlar.' },
          { id: 'C', text: 'İkisi de aynı canlıdır.' },
          { id: 'D', text: 'Alemleri farklıdır.' },
          { id: 'E', text: 'Verimli döl verebilirler.' }
        ],
        correctOptionId: 'B',
        explanation: 'İlk isim (Felis) Cins ismidir ve soyadıdır. Soyadı aynı olanlar yakın akrabadır. Ancak ikinci isimleri (leo, domesticus) farklı olduğu için Aynı Tür Değillerdir.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Bitkiler aleminde Damarsız-Tohumsuz olan Karayosunlarını, diğer gelişmiş bitkilerden (Çam, Elma vb) ayıran EN BÜYÜK EKSİKLİK nedir?',
        options: [
          { id: 'A', text: 'Fotosentez yapamamaları' },
          { id: 'B', text: 'İLETİM DEMETLERİ (Ksilem/Floem - Odun/Soymuk boruları) VE GERÇEK KÖKLERİNİN OLMAMASI. Bu yüzden suyu borularla çekemez, nemli yerlerde ve kısa boylu yaşarlar.' },
          { id: 'C', text: 'Hücre duvarı olmaması' },
          { id: 'D', text: 'Kloroplastlarının olmaması' },
          { id: 'E', text: 'Glikojen depolamaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Karayosunu bitkilerin bebeğidir. Boru (damar) sistemi yoktur. Suyu hücreden hücreye geçirir, bu yüzden boyu 2-3 cm\'i geçemez.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Mantarlar Neden Bitki Sayılmazlar?',
        options: [
          { id: 'A', text: 'Toprakta yaşadıkları için' },
          { id: 'B', text: 'Hücre duvarları olmadığı için (Kitin duvarları vardır)' },
          { id: 'C', text: 'FOTOSENTEZ YAPAMADIKLARI İÇİN (Kloroplastları yoktur, tüketici-heterotrofturlar) ve glikojen depoladıkları için.' },
          { id: 'D', text: 'Sadece zehirli oldukları için' },
          { id: 'E', text: 'Hiç çoğalamadıkları için' }
        ],
        correctOptionId: 'C',
        explanation: 'Görünüşleri bitkiye benzese de, Mantarlar biyokimyasal olarak Hayvanlara çok benzer (Glikojen + Kitin + Tüketici).'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Hayvanlar aleminde Omurgasızlar şubesinin EN KALABALIK (Dünyadaki canlıların %75\'ini oluşturan) sınıfı hangisidir?',
        options: [
          { id: 'A', text: 'Süngerler' },
          { id: 'B', text: 'Sölenterler' },
          { id: 'C', text: 'EKLEMBACAKLILAR (Özellikle Böcekler)' },
          { id: 'D', text: 'Yumuşakçalar' },
          { id: 'E', text: 'Derisidikenliler' }
        ],
        correctOptionId: 'C',
        explanation: 'Dünyayı aslında böcekler yönetir. Biyokütle ve tür çeşitliliği (Milyonlarca tür) olarak tartışmasız en büyük gruptur.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: '"Akciğer Solunumu, Kapalı Dolaşım, Böbrek ve Sırtta Omurilik" özellikleri SADECE hangi grupta GÖRÜLÜR?',
        options: [
          { id: 'A', text: 'Omurgasızların hepsinde' },
          { id: 'B', text: 'Sadece Süngerlerde' },
          { id: 'C', text: 'OMURGALILAR ŞUBESİNDE (Özellikle karaya çıkmış olan Kurbağa, Sürüngen, Kuş, Memelilerde).' },
          { id: 'D', text: 'Bitkilerde' },
          { id: 'E', text: 'Mantarlarda' }
        ],
        correctOptionId: 'C',
        explanation: 'Böbrek, Kapalı Dolaşım, Sırtta Omurilik kelimeleri "Kordalılar/Omurgalılar" şubesinin ortak damgasıdır.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Virüslerin Canlı ve Cansızlık özellikleri arasında gidip geldiği tartışılmaktadır. Virüsün CANLILARA BENZEYEN YÖNÜ nedir?',
        options: [
          { id: 'A', text: 'ATP üretmesi (Cansız)' },
          { id: 'B', text: 'Hücre zarı olması (Yok)' },
          { id: 'C', text: 'İÇLERİNDE BİR NÜKLEİK ASİT (Genetik Materyal - DNA veya RNA) TAŞIMALARI VE ÇOĞALABİLMELERİ (Üremeleri).' },
          { id: 'D', text: 'Sürekli büyümeleri' },
          { id: 'E', text: 'Beslenmeleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Virüs cansızdır çünkü hücre değildir. Ama canlıdır çünkü genetiği vardır (mutasyona uğrar) ve (başkasını kullanarak da olsa) çoğalır.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: '"Pinus nigra (Karaçam)" bitkisi için "Tohumlu ve Açık Tohumlu" denir. Açık tohumlu olmasının (Meyve oluşturamamasının) sebebi nedir?',
        options: [
          { id: 'A', text: 'Tohumunun olmaması' },
          { id: 'B', text: 'GERÇEK ÇİÇEKLERİNİN (ve Yumurtalığın) OLMAMASI. Tohumları meyve (yumurtalık) içinde değil, KOZALAK yapraklarının üzerinde "açıkta" gelişir.' },
          { id: 'C', text: 'Sadece suda yaşaması' },
          { id: 'D', text: 'Yaprak dökmemesi' },
          { id: 'E', text: 'Boyunun kısa olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Meyve dediğimiz şey (Elma, Erik) aslında gelişmiş çiçeğin yumurtalığıdır. Çam ağacında gerçek çiçek (taç yaprak vb) yoktur, kozalak vardır, bu yüzden meyve yapamaz.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Kuşlar ve Memelilerin İKİSİNDE BİRDEN ortak olan özellik hangisidir?',
        options: [
          { id: 'A', text: 'Süt vermek (Sadece memeli)' },
          { id: 'B', text: 'Tüylü olmak (Sadece kuş)' },
          { id: 'C', text: 'SICAKKANLI (Endoterm) olmak ve KALPLERİNİN 4 ODACIKLI olması (Kirli ve temiz kan kesinlikle birbirine karışmaz).' },
          { id: 'D', text: 'Uçmak (İnsan uçamaz)' },
          { id: 'E', text: 'Dişsiz olmak (Sadece kuş)' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalbin karıncığı tam bir perdeyle (4 oda) ikiye ayrılmıştır. Metabolizma çok hızlıdır, kendi vücut ısılarını kendileri (Kalorifer gibi) üretirler.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Biyoloji dersinde öğretmen tahtaya: "Hücre zarı var, Mitokondri var, Çekirdek var, Hücre Duvarı var, Fotosentez YOK" yazmıştır. \nBu canlı hangisi OLABİLİR?',
        options: [
          { id: 'A', text: 'Bakteri (Mitokondrisi olamaz)' },
          { id: 'B', text: 'Bitki (Fotosentez yapar)' },
          { id: 'C', text: 'MANTAR (Fungi). Çünkü Ökaryottur (Çekirdek/Mitokondri var), Duvarı vardır (Kitin), ama Fotosentez yapamaz (Heterotrof).' },
          { id: 'D', text: 'Hayvan (Duvarı yoktur)' },
          { id: 'E', text: 'Virüs (Hücre değildir)' }
        ],
        correctOptionId: 'C',
        explanation: 'Eleme yöntemi: Çekirdek var (Bakteri/Arke gitti). Duvar var (Hayvan gitti). Fotosentez yok (Bitki gitti). Geriye sadece Mantar kalır.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek yorum, karmaşık analiz ve birleştirilmiş kazanımlar (Hard)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Deney: 100 derecede kaynayan asidik (pH 2) bir su birikintisinden alınan numunede canlının yaşadığı ve DNA\'sını kopyaladığı tespit edilmiştir.\nBuna göre bu canlı ile ilgili,\nI. Kesinlikle Prokaryottur.\nII. Enzimleri yüksek sıcaklık ve aside dirençlidir.\nIII. Zarındaki yağ (Lipit) yapısı diğer canlılardan farklı kimyasal bağlara (Eter bağları vb) sahiptir.\nyargılarından hangileri DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'II ve III' },
          { id: 'D', text: 'I, II ve III' },
          { id: 'E', text: 'Yalnız III' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu bir Termo-Asidofil Arke (Archaea) sorusudur. 100 derece/pH 2\'de ökaryot yaşayamaz (I). Enzimleri denatüre olmuyordur (II). Arkelerin hücre zarı lipitleri aşırı sıcakta erimesin diye dallanmış ve özel bağlara sahiptir (III).'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Tabloda 4 farklı canlının (K, L, M, N) ait olduğu Familya (Aile) ve Cins isimleri harflerle şifrelenmiştir.\nK = (Aile: X, Cins: Y)\nL = (Aile: X, Cins: Z)\nM = (Aile: W, Cins: Q)\nN = (Aile: X, Cins: Y)\nBuna göre hangilerinin protein benzerliği ve evrimsel akrabalığı EN FAZLADIR?',
        options: [
          { id: 'A', text: 'K ve L' },
          { id: 'B', text: 'L ve M' },
          { id: 'C', text: 'K ve N (Çünkü hem Aileleri hem de Cinsleri tamamen aynıdır. Türleri farklı olsa bile bu gruptaki en yakın akrabalar onlardır).' },
          { id: 'D', text: 'K ve M' },
          { id: 'E', text: 'M ve N' }
        ],
        correctOptionId: 'C',
        explanation: 'Sistematikte alta doğru (Alem->Tür) indikçe benzerlik artar. K ve N, Cins (Y) seviyesine kadar aynı kaldıkları için (Örn ikisi de Felis cinsi) aralarındaki genetik yakınlık en yüksektir.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Yeni keşfedilen tek hücreli bir organizmanın incelenmesi sonucunda, hücre içi sindirimde (Fagositoz ile aldığı besini parçalamada) LİZAZOM organeli KULLANMADIĞI, ancak enzim salgılayıp zarından içeri monomer aldığı görülmüştür.\nAyrıca hücre zarının dışında Selüloz yapı tespit edilmemiştir.\nBu canlı ile ilgili aşağıdakilerden hangisi söylenebilir?',
        options: [
          { id: 'A', text: 'Kesinlikle bir bitkidir.' },
          { id: 'B', text: 'Bakteri olamaz (Bakteri zarı dışarı monomer almaz).' },
          { id: 'C', text: 'Bu canlı ya bir BAKTERİ ya da bir MANTAR olabilir. (Hücre dışı sindirim yapıyor. Selüloz yok ama peptidoglikan veya kitin duvarı olabilir).' },
          { id: 'D', text: 'Sadece bir hayvandır.' },
          { id: 'E', text: 'Kesinlikle bir Amip\'tir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Lizozom YOK ve dışarı enzim atıyorsa Fagositoz (İçeri katı alma) YAPMIYOR, "Hücre Dışı Sindirim (Saprofitlik)" yapıyordur. Bunu yapanlar genelde çürükçül Bakteriler ve Mantarlardır.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'ÖSYM Tarzı: Bir ekosistemde X böceğinin nesli hızla tükenmektedir. Yapılan araştırmada X böceğinin sadece, endemik olan Y bitkisinin polenleriyle beslendiği ve yumurtalarını sadece Z kuşunun terk ettiği yuvalara bıraktığı saptanmıştır.\nBuna göre X böceğinin neslinin tehlikeye girmesinin TEMEL EKOLOJİK SEBEBİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Böceğin genetik mutasyon geçirmesi.' },
          { id: 'B', text: 'Böceğin çok üremesi.' },
          { id: 'C', text: 'X böceğinin EKOLOJİK TOLERANSININ ÇOK DAR (Spesifik/Özelleşmiş) OLMASI. Habitatındaki Y bitkisinde veya Z kuşunda yaşanacak en ufak bir değişim doğrudan X\'in yok olmasına neden olur.' },
          { id: 'D', text: 'Böceğin yırtıcı olması.' },
          { id: 'E', text: 'Sadece gece uçması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kozmopolit türler (her şeyi yiyen karga/fare) kolay yok olmaz (Geniş tolerans). Sadece tek bir bitkiye bağımlı türlerin (Dar tolerans) Biyoçeşitlilik kaybı ve yok oluş riski çok yüksektir.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: '"Denizyıldızı (Derisidikenli)" ile "İnsan (Memeli)" embriyolojik gelişim aşamaları (Blastopordan anüs oluşumu vb) incelendiğinde, Denizyıldızının İnsana (Omurgalılara), bir "Ahtapottan veya Böcekten" çok daha YAKIN AKRABA olduğu ortaya çıkmıştır.\nBuna göre Sınıflandırma yapılırken aşağıdakilerden hangisi KANIT OLARAK KULLANILMIŞTIR?',
        options: [
          { id: 'A', text: 'Yaşadıkları ortamın (Deniz/Kara) aynı olması' },
          { id: 'B', text: 'Hücre sayılarının aynı olması' },
          { id: 'C', text: 'EMBRİYOLOJİK (Gelişimsel) BENZERLİK. Doğal sınıflandırmada dış görünüşe (Morfolojiye) değil, anne karnındaki/yumurtadaki ilk oluşum evrelerinin (Filogenetik bağların) benzerliğine bakılır.' },
          { id: 'D', text: 'Besinlerinin aynı olması' },
          { id: 'E', text: 'Analog organlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Derisidikenliler (Denizyıldızı) omurgasız olmalarına rağmen, embriyo gelişim sırası (ikincil ağızlılar) bakımından Kordalılara (Bize) en yakın şubedir. Bu keşif embriyoloji bilimiyle yapılmıştır.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Bir araştırmacı, tanımlanamayan bir canlı dokuyu mikroskopta incelerken şunları not almıştır:\n- Hücreler sıkıca birbirine bağlı (Çok hücreli)\n- Glikojen kristalleri mevcut\n- Sinir ağı benzeri iletim hücreleri var\n- Hücre dışı zemin sıvısında (Matriks) protein lifleri var\nBu canlının hangi ALEMDE olduğu KESİN OLARAK söylenebilir?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Mantarlar' },
          { id: 'C', text: 'HAYVANLAR ALEMİ (Glikojen depolayan çok hücreli bir yapı olmakla kalmayıp, Sinir hücresi barındırması sadece Hayvanlara özgü bir gelişmişliktir).' },
          { id: 'D', text: 'Protista' },
          { id: 'E', text: 'Bakteri' }
        ],
        correctOptionId: 'C',
        explanation: 'Sinir sistemi (kas, sinir dokusu) Biyolojide SADECE Hayvanlar aleminde bulunur. Bitki, mantar veya protistada sinir ağı yoktur.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Virüslerin Biyoteknoloji ve Gen Mühendisliğinde (Örn: Gen Terapisi) Vektör (Taşıyıcı Kargo aracı) olarak KULLANILMASININ temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Çok büyük ve ağır olmaları.' },
          { id: 'B', text: 'Çok kolay ölmeleri.' },
          { id: 'C', text: 'Mekanizmalarının (Kendi DNA\'larını hücrenin DNA\'sına ekleme/entegre etme yeteneklerinin) çok güçlü olması. Bilim insanları virüsün içindeki hastalık yapan geni çıkarıp, yerine faydalı (sağlıklı) geni koyarak, virüsü hücreye "Şırınga" gibi kullanırlar.' },
          { id: 'D', text: 'Sadece bitkilerde yaşamaları.' },
          { id: 'E', text: 'Güzel kokmaları.' }
        ],
        correctOptionId: 'C',
        explanation: 'Viral vektör teknolojisi budur. Virüsün enfeksiyon (Hücre zarını delip çekirdeğe DNA sokma) yeteneği harikadır. İçi boşaltılır, faydalı gen yüklenir ve hastaya verilir (Örn: SMA ilaçları, mRNA aşıları).'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Bir memeli (Örn: Ayı) ile bir Sürüngenin (Örn: Yılan) kış uykusuna yatmasındaki (Hibernasyon) FİZYOLOJİK FARK nedir?',
        options: [
          { id: 'A', text: 'Ayı üşümez, yılan üşür.' },
          { id: 'B', text: 'İkisi de tamamen aynı sebepten uyur.' },
          { id: 'C', text: 'Sürüngen soğukkanlı olduğu için Vücut Isısı Düştüğünden ZORUNLU olarak donmamak (uyuştuğu) için yatar. Memeli (Ayı) ise sıcakkanlıdır, ısısını koruyabilir ama KIŞIN BESİN BULAMADIĞI İÇİN enerji tasarrufu yapmak (Metabolizmasını bilerek yavaşlatmak) için uyur.' },
          { id: 'D', text: 'Sadece yılan uyur, ayı uyumaz.' },
          { id: 'E', text: 'Ayı karanlık sevdiği için uyur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Muazzam bir Biyoloji AYT farkıdır. Kurbağa/Yılanın enzimleri hava soğuduğu an durur (Mecburidir). Ayınınki durmaz (ısısı yüksektir) ama o devasa kütleyi kışın besleyecek yemek bulamayacağı için şarteli bilerek indirir.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: '"Balinalar akciğer solunumu yapar, sıcakkanlıdır, 4 odalı kalpleri vardır, yavrularını doğurur ve sütle beslerler. Balıklar ise solungaç solunumu yapar, soğukkanlıdır, 2 odalı kalpleri vardır ve yumurtlarlar. Buna rağmen Balina ve Köpekbalığının DIŞ GÖRÜNÜŞÜ (Vücut şekilleri, yüzgeçleri) birbirine çok benzer."\nEvrimsel Biyoloji ve Sınıflandırma mantığında, bu durum (Farklı soydan gelen canlıların aynı ortama uyum sağlayarak dış görünüşlerinin benzemesi) NEYE ÖRNEKTİR?',
        options: [
          { id: 'A', text: 'İkisinin de balık olmasına' },
          { id: 'B', text: 'Ortak Atadan gelmelerine (Homoloji)' },
          { id: 'C', text: 'ANALOG ORGANLARA (Görevdeş organ). Su direnci (Fizik kuralları) her ikisini de Torpido şeklinde (hidrodinamik) evrilmeye zorlamıştır (Yakınsak Evrim / Convergent Evolution). Akraba değildirler.' },
          { id: 'D', text: 'Balinanın mutasyon geçirmesine' },
          { id: 'E', text: 'Kader' }
        ],
        correctOptionId: 'C',
        explanation: 'Akraba olmasanız da aynı sorunu (Suda sürtünmeyi azaltarak hızlı yüzmek) çözmek için aynı mühendislik tasarımına (Yüzgeç / Torpido şekli) evrilirsiniz. Buna Analoji (Görev birliği) denir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'X canlısı: Ototrof (Kendi besinini üreten) ve Hücre duvarı var.\nY canlısı: Ototrof ve Hücre duvarı var.\nBirinci araştırmacı: "İkisi de Bitkidir." diyor.\nİkinci araştırmacı: "Kesin konuşamayız, Z organeli ve K bileşiğinin varlığına bakmalıyız." diyor.\nİkinci araştırmacının haklı olduğunu kanıtlamak için, X ve Y canlılarında HANGİ FARKLILIKLARI ARAMALIYIZ?',
        options: [
          { id: 'A', text: 'Sadece renklerine bakmalıyız.' },
          { id: 'B', text: 'Birinin yaprağı var mı diye bakmalıyız.' },
          { id: 'C', text: 'X\'in duvarı PEPTİDOGLİKAN (Bakteri), Y\'nin duvarı SELÜLOZ (Bitki) olabilir. X fotosentez için Sitoplazmada klorofil kullanırken (Bakteri), Y fotosentez için KLOROPLAST (Zarlı organel - Bitki) kullanıyor olabilir. Ototrof ve Duvarlı olmak sadece Bitkilere özgü değildir.' },
          { id: 'D', text: 'Kromozom sayısını saymalıyız.' },
          { id: 'E', text: 'İkisi de mantardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ototrof + Duvar = Bitki yanılgısı çok yaygındır. Siyanobakteriler de ototroftur (Fotosentez) ve duvarı vardır. Çekirdek/Kloroplast varlığına veya Duvarın moleküler yapısına (Selüloz mu?) bakmadan kesin yargıya varılamaz.'
      }
    ]
  }
]
