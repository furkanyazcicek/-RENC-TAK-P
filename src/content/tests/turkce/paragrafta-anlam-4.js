export default [
  {
    id: 'test-paragraf-4-kolay',
    title: 'Paragrafta Anlam 4 (Kolay)',
    description: 'Paragrafta Anlam ve Yapı - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-pa-4-1',
        difficulty: 'easy',
        questionText: 'Eğitim, bir insanın sadece akademik bilgi edinmesini değil, aynı zamanda karakterinin de şekillenmesini sağlar. Matematik formüllerini veya tarihsel olayları ezberlemek, kişiyi belki sınavlarda başarılı yapabilir ancak hayatta başarılı olmanın sırrı empati kurabilmek, dürüst davranmak ve sorumluluk alabilmektir. Bu nedenle gerçek eğitim, zihni olduğu kadar kalbi de beslemelidir.\n\nBu parçadan eğitimle ilgili olarak çıkarılabilecek en kapsamlı sonuç aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sınavlarda başarılı olmak, iyi bir karakterin en temel göstergesidir.' },
          { id: 'B', text: 'Matematik ve tarih dersleri diğer tüm derslerden daha önemlidir.' },
          { id: 'C', text: 'Gerçek eğitimin amacı, bireyi sadece bilgiyle donatmak değil, onu ahlaki ve duygusal (karakter) yönlerden de geliştirmektir.' },
          { id: 'D', text: 'Okullarda sadece akademik bilgi verilmeli, karakter eğitimi aileye bırakılmalıdır.' },
          { id: 'E', text: 'Zeki olan öğrencilerin karakter eğitimine ihtiyaçları yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada eğitimin sadece akademik bilgi değil, karakterin şekillenmesini de sağlaması gerektiği (zihni olduğu kadar kalbi de beslemelidir) vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-2',
        difficulty: 'easy',
        questionText: '(I) Kitap fuarları, yazarlarla okurların buluştuğu harika mekanlardır. (II) Okurlar, hayran oldukları yazarlarla yüz yüze gelme ve kitaplarını imzalattırma şansı bulurlar. (III) Türkiye\'de her yıl binlerce yeni kitap basılmaktadır. (IV) Ayrıca bu fuarlar, yayınevleri için yeni eserlerini tanıtabilecekleri önemli bir platformdur. (V) Fuar alanındaki o kalabalık ve canlı atmosfer, edebiyat sevgisinin en somut göstergesidir.\n\nBu parçada numaralanmış cümlelerden hangisi anlam akışını bozmaktadır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada genel olarak kitap fuarlarının okurlar ve yazarlar/yayınevleri için önemi, fuarların atmosferi (I, II, IV, V) anlatılırken, III. cümlede Türkiye\'de basılan kitap sayısından bahsedilerek konunun dışına çıkılmıştır.'
      },
      {
        id: 'q-pa-4-3',
        difficulty: 'easy',
        questionText: 'Dostluk, güneşli günlerde beraber piknik yapmak değil, fırtınalı günlerde aynı şemsiyenin altına sığınabilmektir. Hayatınızda işler yolundayken etrafınızda kalabalıklar birikir, herkes sizinle gülümser. Ancak bir gün ayağınız tökezlediğinde geriye dönüp baktığınızda yanınızda kalanlar, işte onlar sizin gerçek dostlarınızdır.\n\nBu parçada gerçek dostluğun hangi özelliği üzerinde durulmuştur?',
        options: [
          { id: 'A', text: 'Sürekli eğlenceli vakit geçirmeyi sağlaması' },
          { id: 'B', text: 'Maddi olarak destekleyici olması' },
          { id: 'C', text: 'Sadece zor zamanlarda, sıkıntılı günlerde yanınızda olanların gerçek dost olduğu' },
          { id: 'D', text: 'Akrabalık bağlarından daha güçlü olması' },
          { id: 'E', text: 'Çok az sayıda insana nasip olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde dostluğun güneşli günlerde eğlenmek değil, fırtınalı (zor) günlerde aynı şemsiyeye sığınmak (destek olmak) olduğu vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-4',
        difficulty: 'easy',
        questionText: 'Bir sanatçı, içinde bulunduğu çağa tanıklık etmelidir. Gözünü sokağa, kulağını halkın derdine kapatan bir yazar, ne kadar süslü cümleler kurarsa kursun geleceğe kalamaz. Toplumun sevinçlerini, acılarını, değişen değerlerini yansıtmayan bir eser, vitrin süsü olmaktan öteye gidemez.\n\nBu parçaya göre bir yazarın kalıcı olabilmesi (geleceğe kalabilmesi) için taşıması gereken özellik nedir?',
        options: [
          { id: 'A', text: 'Çok süslü, ağır ve anlaşılması güç bir dil kullanması' },
          { id: 'B', text: 'Yalnızca kendi iç dünyasını ve bireysel bunalımlarını anlatması' },
          { id: 'C', text: 'İçinde yaşadığı dönemin (toplumun) sorunlarına, duygularına ve yaşamına ayna tutması' },
          { id: 'D', text: 'Hiçbir akıma veya düşünceye bağlı kalmadan özgürce yazması' },
          { id: 'E', text: 'Daha çok tarihi olayları ve geçmişi konu edinmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada yazarın geleceğe kalabilmesi için çağına tanıklık etmesi, kulağını halka kapatmaması ve toplumun acı-sevinçlerini eserine yansıtması gerektiği vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-5',
        difficulty: 'easy',
        questionText: 'Çocuklara okuma alışkanlığı kazandırmanın en kolay yolu, onlara bu alışkanlığı öğütlemek değil, evde onlarla birlikte kitap okumaktır. Çünkü çocuklar, kulaklarından çok gözleriyle öğrenirler. Sürekli televizyon izleyen ebeveynlerin, çocuklarına "kitap oku" demesi, rüzgara karşı konuşmaktan farksızdır.\n\nBu parçadan çıkarılacak temel mesaj aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Çocuklara çok erken yaşta okuma yazma öğretilmelidir.' },
          { id: 'B', text: 'Televizyon izlemek, çocukların zihinsel gelişimini tamamen durdurur.' },
          { id: 'C', text: 'Çocuklara sözle öğüt vermek yerine, iyi alışkanlıklarda onlara bizzat (davranışla) örnek olmak gerekir.' },
          { id: 'D', text: 'Çocukların sadece resimli kitapları okumalarına izin verilmelidir.' },
          { id: 'E', text: 'Okuma alışkanlığı genetik olarak aileden çocuğa geçer.' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde çocukların duyduklarını (öğütleri) değil gördüklerini (davranışları) uyguladıkları, bu yüzden ebeveynlerin birlikte kitap okuyarak örnek olmaları gerektiği anlatılmıştır.'
      },
      {
        id: 'q-pa-4-6',
        difficulty: 'easy',
        questionText: 'Gülümsemek, en kısa ve en etkili iletişim aracıdır. Farklı dilleri konuşan, farklı kültürlerden gelen iki insan birbirlerini hiç anlamasalar bile sıcak bir gülümseme sayesinde aralarındaki buzlar eriyebilir. Gülümsemek, insanlara "sana güveniyorum" ve "seni kabul ediyorum" demenin sessiz ama en güçlü yoludur.\n\nBu parçada gülümsemeyle ilgili olarak aşağıdakilerden hangisine değinilmemiştir?',
        options: [
          { id: 'A', text: 'İletişim kurmada etkili bir araç olduğuna' },
          { id: 'B', text: 'Farklı kültürler arasındaki dil engelini aşabildiğine' },
          { id: 'C', text: 'İnsanlara güven ve kabul mesajı verdiğine' },
          { id: 'D', text: 'Çevremizdeki buzları eriten (sıcaklık katan) bir yapısı olduğuna' },
          { id: 'E', text: 'Doğuştan gelen, sonradan öğrenilemeyen bir refleks olduğuna' }
        ],
        correctOptionId: 'E',
        explanation: 'Parçada gülümsemenin etkili bir araç olduğu (A), farklı diller/kültürler arasında buzları erittiği (B, D) ve güven mesajı verdiği (C) belirtilmiştir. Ancak doğuştan geldiğine (refleks) dair bir bilgi yoktur.'
      },
      {
        id: 'q-pa-4-7',
        difficulty: 'easy',
        questionText: '(I) Geri dönüşüm, doğal kaynakların korunması için hayati bir öneme sahiptir. (II) Plastik, cam, kağıt gibi atıkların tekrar işlenmesi, doğaya verilen zararı büyük ölçüde azaltır. (III) Her birey evindeki atıkları türlerine göre ayırarak bu sürece katkıda bulunabilir. (IV) Orman yangınları yaz aylarında maalesef artış göstermektedir. (V) Atıkların ekonomiye geri kazandırılması, aynı zamanda enerji tasarrufu da sağlar.\n\nBu parçanın anlam bütünlüğünü sağlamak için numaralanmış cümlelerden hangisi çıkarılmalıdır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'D',
        explanation: 'Metnin konusu genel olarak geri dönüşümün önemi, nasıl yapılacağı ve faydalarıdır (I, II, III, V). IV. cümlede ise orman yangınlarından bahsedilerek konunun dışına çıkılmıştır.'
      },
      {
        id: 'q-pa-4-8',
        difficulty: 'easy',
        questionText: 'Bazen bir resmi güzel yapan şey, içindeki canlı renkler değil, sadece birkaç gri tonun ustalıkla kullanılmasıdır. Hayat da tıpkı o tablo gibidir. Sürekli mutlu anlar aramak, sürekli canlı renkler talep etmek yorucudur. Hüzünler, kayıplar ve sessizlikler (griler) olmasaydı, sevinçlerin ve başarıların (canlı renklerin) kıymetini asla bilemezdik.\n\nBu parçada asıl anlatılmak istenen aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Ressamların gri rengi her zaman daha çok sevdiği' },
          { id: 'B', text: 'İnsanların sadece mutlu olmak için yaşaması gerektiği' },
          { id: 'C', text: 'Zorlukların ve olumsuzlukların, mutlulukların değerini anlamamızı sağladığı' },
          { id: 'D', text: 'Hayatın her zaman çok sıkıcı ve sıradan olduğu' },
          { id: 'E', text: 'Hüzünlü insanların resim yapmaya daha yetenekli olduğu' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde resimdeki gri tonların (hüzünlerin) canlı renklerin (sevinçlerin) kıymetini bilmemizi sağladığı, olumsuzlukların olumlu anları değerli kıldığı anlatılmıştır.'
      },
      {
        id: 'q-pa-4-9',
        difficulty: 'easy',
        questionText: 'Bir dili yaşatan, sadece o dilde yazılmış kalın sözlükler veya kurallar bütünü değildir. Dili asıl yaşatan, sokaktaki insanın onunla ağlaması, gülmesi ve türkü söylemesidir. Ninelerin anlattığı masallar, esnafın şakalaşması veya çocukların tekerlemeleri... Bunlar, dilin kalbinin attığı yerlerdir. Halka inemeyen bir dil, müzelerde sergilenen cansız bir eşya gibidir.\n\nBu parçaya göre bir dilin canlılığını korumasının temel şartı nedir?',
        options: [
          { id: 'A', text: 'Günlük yaşamda halk tarafından aktif bir biçimde konuşulup kullanılması' },
          { id: 'B', text: 'Gramer kurallarının hiçbir şekilde değiştirilmemesi' },
          { id: 'C', text: 'Sadece edebiyatçılar tarafından eserlerde yaşatılması' },
          { id: 'D', text: 'Başka dillerden kelime alışverişine tamamen kapalı olması' },
          { id: 'E', text: 'Yeni ve kalın sözlüklerin sürekli basılması' }
        ],
        correctOptionId: 'A',
        explanation: 'Parçada dili yaşatanın sözlükler değil, "sokaktaki insanın onunla ağlaması, türkü söylemesi, çocukların tekerlemeleri" yani dilin halk tarafından kullanılması olduğu belirtilmiştir.'
      },
      {
        id: 'q-pa-4-10',
        difficulty: 'easy',
        questionText: 'Tembellik, başlangıçta rahat bir koltuk gibidir; içine gömüldükçe sıcak gelir, hiç kalkmak istemezsiniz. Ancak zaman geçtikçe o koltuk sizi esir alır, hareket etme yeteneğinizi zayıflatır. Sonunda fark edersiniz ki o rahatlık hissi, aslında sizi hayallerinizden, hedeflerinizden ve hayattan koparan sinsi bir tuzaktır.\n\nBu parçada "tembellik" ile ilgili olarak aşağıdakilerden hangisi vurgulanmıştır?',
        options: [
          { id: 'A', text: 'Çok çalışmanın en iyi ilacı olduğu' },
          { id: 'B', text: 'Fiziksel hastalıklara doğrudan yol açtığı' },
          { id: 'C', text: 'Zamanla insanı esir alarak amaçlarından (hayallerinden) uzaklaştırdığı' },
          { id: 'D', text: 'Sadece yaşlı insanlarda görülen bir durum olduğu' },
          { id: 'E', text: 'İnsana ihtiyaç duyduğu gerçek dinlenmeyi sağladığı' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada tembelliğin başlangıçta rahat gelse de zamanla insanı esir alan ve hayallerinden (hedeflerinden) koparan bir tuzak olduğu vurgulanmıştır.'
      }
    ]
  },
  {
    id: 'test-paragraf-4-orta',
    title: 'Paragrafta Anlam 4 (Orta)',
    description: 'Paragrafta Anlam ve Yapı - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-pa-4-11',
        difficulty: 'medium',
        questionText: 'Tarihi roman yazarı, iki ateş arasında kalmış bir cambaza benzer. Bir yanda tarihin değiştirilemez ve soğuk gerçekleri durur, diğer yanda ise edebiyatın uçsuz bucaksız hayal gücü. Yazar, tarihi gerçekleri tamamen bozarsa eser inandırıcılığını kaybeder; sadece gerçekleri sıralarsa da metin bir ders kitabından farksız olur. Başarılı yazar, bu iki uç arasında dengede kalmayı başarabilen kişidir.\n\nBu parçada tarihi roman yazarlarının karşılaştığı en büyük zorluk olarak ne gösterilmiştir?',
        options: [
          { id: 'A', text: 'Tarihi gerçekleri araştırmak için çok fazla zaman harcamaları' },
          { id: 'B', text: 'Okuyucuların sadece hayal ürünü (kurgusal) kitapları tercih etmesi' },
          { id: 'C', text: 'Tarihsel gerçekliğe sadık kalmak ile edebi kurgu (hayal gücü) arasında doğru bir denge kurmak' },
          { id: 'D', text: 'Tarihçiler tarafından sürekli eleştirilme korkusu yaşamaları' },
          { id: 'E', text: 'Sadece bilinen tarihi karakterleri eserlerinde kullanmak zorunda olmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde tarihi roman yazarının bir yanda "tarihin soğuk gerçekleri", diğer yanda "edebiyatın hayal gücü" arasında denge kurması (iki ateş arasında cambazlık yapması) gerektiği ifade edilmiştir.'
      },
      {
        id: 'q-pa-4-12',
        difficulty: 'medium',
        questionText: 'Teknoloji, hayatımızı kolaylaştırma vaadiyle hayatımıza girdi ancak bugün bizi daha meşgul bir hale getirdi. E-postalar, anlık mesajlar ve bildirimler derken, hiçbir işe tam olarak odaklanamaz olduk. Daha hızlı iletişim kuruyoruz ama daha yüzeysel anlaşıyoruz. Makineler zaman tasarrufu sağlamak için tasarlandı, oysa modern insanın en büyük şikayeti hala "vaktim yok".\n\nBu parçada yazarın yakındığı temel çelişki aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İnsanların teknolojiyi sadece eğlence amacıyla kullanması' },
          { id: 'B', text: 'Cihazların çok pahalı olması nedeniyle herkesin ulaşamaması' },
          { id: 'C', text: 'Teknolojinin hayatı kolaylaştırıp zaman kazandırması beklenirken insanı daha meşgul, yüzeysel ve zamansız hale getirmesi' },
          { id: 'D', text: 'Makinelerin insan gücünün yerini almasıyla işsizliğin artması' },
          { id: 'E', text: 'Geleneksel iletişim araçlarının (mektup vb.) tamamen unutulması' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, teknolojinin hayatı kolaylaştırma ve zaman tasarrufu vaadine karşılık, bizi daha meşgul (vaktim yok) ve yüzeysel kıldığı çelişkisinden yakınmaktadır.'
      },
      {
        id: 'q-pa-4-13',
        difficulty: 'medium',
        questionText: '(I) Karikatür, çizgilerin diliyle yapılan bir mizah sanatıdır. (II) Ancak amacı sadece insanları güldürmek, eğlendirmek değildir. (III) Toplumdaki aksaklıkları, siyasi hataları ve haksızlıkları ince bir zekayla eleştirir. (IV) Modern sanat galerilerinde çok pahalıya satılan tablolar genellikle soyut anlayışla üretilir. (V) Çizer, saatlerce sürecek bir tartışmayı veya sayfalar dolusu bir yazıyı, tek bir kareyle zihinlere kazımayı başarır.\n\nBu parçada numaralanmış cümlelerden hangisi metnin anlam akışını bozmaktadır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin karikatürün doğası, amacı (mizah ve eleştiri) ve etkisi üzerinedir (I, II, III, V). IV. cümlede modern sanat galerileri ve soyut tablolar anlatılarak konu tamamen farklı bir yöne kaymıştır.'
      },
      {
        id: 'q-pa-4-14',
        difficulty: 'medium',
        questionText: 'Klasik müzik, genellikle dinlemesi zor ve sadece belli bir elit kesime hitap eden bir sanat türü olarak algılanır. Oysa Mozart\'ın, Beethoven\'ın notaları sadece saraylarda yankılanmamış; devrimlerin coşkusunu, kaybedilen aşkların acısını da anlatmıştır. Klasik müziğe ön yargıyla yaklaşmak, içindeki o derin insani duyguları daha en başından reddetmek demektir. Kulaklarınızı bu seslere kapatırsanız, sadece müziği değil, insan ruhunun tarihi bir kesitini de kaçırmış olursunuz.\n\nBu parçaya göre klasik müzikle ilgili yanlış algı nedir?',
        options: [
          { id: 'A', text: 'Çok eski bir tarihte ortaya çıkmış olması' },
          { id: 'B', text: 'Sadece hüzünlü ve karamsar duygular barındırması' },
          { id: 'C', text: 'Anlaşılması zor olduğu ve sadece elit (seçkin) bir gruba seslendiği düşüncesi' },
          { id: 'D', text: 'Konser biletlerinin çok pahalı olduğu inancı' },
          { id: 'E', text: 'Modern müzik aletleriyle çalınamayacağı fikri' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada klasik müziğin "dinlemesi zor ve sadece belli bir elit kesime hitap eden bir sanat türü" olarak algılanmasının yanlış olduğu, aksine derin insani duyguları barındırdığı belirtilmiştir.'
      },
      {
        id: 'q-pa-4-15',
        difficulty: 'medium',
        questionText: 'İyi bir fotoğrafçı, sadece doğru ışığı ve açıyı yakalayan kişi değildir. O, sıradan insanların her gün yanından geçip gittiği, bakıp da göremediği o küçük detayı, o gizli hikayeyi kadrajına sığdıran kişidir. Vizörden bakarken dünyayı bir saniyeliğine dondurur, ancak o donmuş an, binlerce kelimenin anlatamayacağı bir ömrü barındırır.\n\nBu parçaya göre iyi bir fotoğrafçıyı diğer insanlardan ayıran asıl özellik aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'En son teknoloji kameraları ustalıkla kullanabilmesi' },
          { id: 'B', text: 'Işığı ayarlamakta ve fotoğraf düzenlemekte çok başarılı olması' },
          { id: 'C', text: 'İnsanların çok seveceği turistik mekanları çekmesi' },
          { id: 'D', text: 'Başkalarının fark edemediği, sıradan görünen anlardaki gizli hikayeyi (detayı) görebilmesi' },
          { id: 'E', text: 'Sürekli seyahat ederek dünyanın farklı yerlerini keşfetmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Metinde iyi bir fotoğrafçının asıl becerisinin, "sıradan insanların bakıp da göremediği o küçük detayı, o gizli hikayeyi kadrajına sığdırması" olduğu vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-16',
        difficulty: 'medium',
        questionText: 'Empati, insanın sadece başkalarının duygularını anlaması değil, aynı zamanda o anlaşılan duyguya uygun şekilde karşılık verebilmesidir. Yani, birinin üzüntüsünü anladığınızı iddia edip aynı zamanda onu incitecek sözler sarf ediyorsanız, ortada empatiden çok bir sahtelik var demektir. Empati, bilgiden ziyade bir eylem biçimidir.\n\nBu parçadan çıkarılacak sonuç aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Empati kurmak, her zaman o kişiye hak vermek anlamına gelmez.' },
          { id: 'B', text: 'Gerçek empati, sadece zihinsel bir anlama süreci değil, aynı zamanda bu anlayışı destekleyen doğru bir davranıştır (eylemdir).' },
          { id: 'C', text: 'Başkalarının sorunlarını çok dinlemek, insanın kendi psikolojisini bozar.' },
          { id: 'D', text: 'İnsanlar empati kurdukça birbirlerinden daha fazla uzaklaşırlar.' },
          { id: 'E', text: 'Acı çeken birine yardım etmek her zaman mümkün olmayabilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metinde empatinin sadece duyguyu anlamak değil, ona "uygun karşılık vermek (eylem)" olduğu, aksi halde sahtelik doğacağı vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-17',
        difficulty: 'medium',
        questionText: 'Hepimiz farklı kitapların sayfaları arasında kendimizi ararız. Kimi zaman bir şiirin dizesinde unuttuğumuz bir sevdayı, kimi zaman bir roman kahramanının öfkesinde kendi bastırdığımız isyanı buluruz. Edebiyat, aslında yazardan çok okurun kendi iç dünyasında yaptığı bir kazı çalışmasıdır. Yazar sadece kazmayı size teslim eder, nereyi kazacağınız tamamen size kalmıştır.\n\nBu parçada edebiyatla ilgili olarak vurgulanmak istenen aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Yazarların genellikle kendi hayat hikayelerini eserlerinde gizlemesi' },
          { id: 'B', text: 'Okurun, eserde kendi hislerini, deneyimlerini ve içsel çatışmalarını keşfetmesi (kendini bulması)' },
          { id: 'C', text: 'Şiirin diğer edebi türlere göre insanın duygularına daha fazla hitap etmesi' },
          { id: 'D', text: 'Kitap okumanın son yıllarda tamamen azalarak yok olmaya yüz tutması' },
          { id: 'E', text: 'Okurun yazarın bütün düşüncelerini harfi harfine kabul etmesi gerektiği' }
        ],
        correctOptionId: 'B',
        explanation: 'Parçada edebiyatın "okurun kendi iç dünyasında yaptığı bir kazı çalışması" olduğu, okurun eserlerde "kendisini, kendi öfkesini/sevdasını arayıp bulduğu" anlatılmıştır.'
      },
      {
        id: 'q-pa-4-18',
        difficulty: 'medium',
        questionText: '(I) Şehir hayatı, bireyi sürekli bir koşturmacanın ve tüketimin içine çeker. (II) Her an bir yere yetişmek, bir şeyler satın almak zorundaymışız gibi hissederiz. (III) Doğaya döndüğümüzde ise zaman farklı bir boyutta akar. (IV) Trafik sorununu çözmek için yeni köprüler ve alt geçitler yapılmalıdır. (V) Ormanda bir ağacın gölgesinde otururken saniyelerin peşinden koşmaz, anın tadını çıkarırız.\n\nBu parça iki paragrafa ayrılmak istense, ikinci paragraf numaralanmış cümlelerden hangisiyle başlar?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'I. ve II. cümleler şehir hayatının hızı ve stresi üzerinedir. III. cümleyle birlikte "Doğaya döndüğümüzde" denilerek doğadaki farklı zaman algısına ve dinginliğe geçiş yapılmıştır (Yeni konu). (Not: IV. cümle aslında akışı bozmaktadır, ama soru "iki paragrafa ayrılsa" formatında olduğu için konunun değiştiği ilk yer III. cümledir. Yine de D şıkkı çeldirici olabilir. En mantıklı bölme yeri III\'tür.)'
      },
      {
        id: 'q-pa-4-19',
        difficulty: 'medium',
        questionText: 'Bir eleştiri yazısı, yazarı yerin dibine sokmak için silah gibi kullanılmamalıdır. Eleştirinin amacı yaralamak değil, iyileştirmektir. Yazarın kör noktalarını göstermek, eksik bıraktığı taşları yerine koymasına yardımcı olmaktır. Sadece yazarın hatalarına büyüteç tutup başarılarını görmezden gelen bir eleştirmen, edebiyata değil kendi kibrine hizmet ediyor demektir.\n\nBu parçaya göre bir eleştirmenin sahip olmaması gereken (kaçınması gereken) tutum aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Eseri incelerken okurlara yol gösterici bir dil kullanmak' },
          { id: 'B', text: 'Yazarın eksikliklerini ve doğrularını birlikte, yapıcı bir şekilde sunmak' },
          { id: 'C', text: 'Eserin sadece hatalarına odaklanıp yazarı yıpratmak ve kendi egosunu tatmin etmek' },
          { id: 'D', text: 'Eleştirdiği eserin türü hakkında detaylı bilgiye sahip olmak' },
          { id: 'E', text: 'Metindeki boşlukları (kör noktaları) yazarın fark etmesini sağlamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde eleştirmenin silah gibi kullanılmaması, sadece hatalara büyüteç tutup başarıları görmezden gelmesinin kibre hizmet ettiği söylenerek bu yıkıcı tutum (C şıkkı) eleştirilmiştir.'
      },
      {
        id: 'q-pa-4-20',
        difficulty: 'medium',
        questionText: 'Masallar, sadece çocukları uyutmak için anlatılan sıradan hikayeler sanılır. Oysa masallar, yüzyılların süzgecinden geçmiş toplumsal ahlakı, doğruluğu, cesareti ve umudu barındırır. Cadılar, devler veya periler görünürdeki kabuktur; asıl öz, iyiliğin her zaman kötülüğü yeneceği inancının çocukların zihnine bir tohum gibi ekilmesidir.\n\nBu parçada masallarla ilgili vurgulanmak istenen asıl düşünce nedir?',
        options: [
          { id: 'A', text: 'Sadece hayal gücü geniş olan çocuklar tarafından anlaşılabileceği' },
          { id: 'B', text: 'Yetişkinlerin masallardan çocuklara göre daha çok ders çıkardığı' },
          { id: 'C', text: 'Dış görünüşteki fantastik ögelerin (dev, peri), içindeki ahlaki değerleri (iyiliğin zaferi vb.) aktarmada bir araç olduğu' },
          { id: 'D', text: 'Günümüz çocuklarının artık masal kahramanlarına ilgi göstermediği' },
          { id: 'E', text: 'Sadece uyku öncesi anlatıldıklarında faydalı olabilecekleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde masalların sadece uyutmak için anlatılmadığı, devler/perilerin kabuk olduğu, asıl özün (amacın) iyiliğin kötülüğü yeneceği ahlaki değerini çocukların zihnine ekmek olduğu vurgulanmıştır.'
      }
    ]
  },
  {
    id: 'test-paragraf-4-zor',
    title: 'Paragrafta Anlam 4 (Zor)',
    description: 'Paragrafta Anlam ve Yapı - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-pa-4-21',
        difficulty: 'hard',
        questionText: 'Sanat tarihine baktığımızda, dehaların genellikle kendi dönemlerinde anlaşılamadıklarını görürüz. Onlar, zamanlarının çok ötesinde eserler verdikleri için, çağdaşları tarafından dışlanmış veya deli damgası yemişlerdir. Van Gogh yaşarken tek bir tablo satabilmişken, ölümünden yıllar sonra eserleri paha biçilemez olmuştur. Bir sanatçının yeniliği, genellikle o toplumun estetik alışkanlıklarının sınırlarını yıktığı için başlangıçta reddedilir.\n\nBu parçadan hareketle aşağıdakilerden hangisine ulaşılabilir?',
        options: [
          { id: 'A', text: 'Toplumun sanattan beklentisi her dönemde aynı kalmıştır.' },
          { id: 'B', text: 'Gerçek (deha düzeyindeki) sanatçıların eserleri, dönemin kalıplaşmış estetik anlayışını aştığı için ancak ilerleyen zamanlarda kıymeti bilinir.' },
          { id: 'C', text: 'Bir eserin değer kazanması için yaratıcısının çok zor bir hayat yaşaması şarttır.' },
          { id: 'D', text: 'Sanat eleştirmenleri, yeni ortaya çıkan eserleri her zaman desteklemişlerdir.' },
          { id: 'E', text: 'Eserleri yaşarken satılmayan sanatçıların hepsi tarihe iz bırakmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Parçada dehaların zamanın ötesinde (yenilikçi) eserler verdiği, bu yüzden dönemlerinde dışlandığı ve kıymetlerinin sonradan anlaşıldığı anlatılmaktadır.'
      },
      {
        id: 'q-pa-4-22',
        difficulty: 'hard',
        questionText: 'Günümüzde popüler kültür, edebiyatı da bir tüketim nesnesi haline getirdi. Okurun zihnini zorlayan, düşünmeye iten edebi metinler "sıkıcı" etiketiyle rafların arka sıralarına itiliyor. Buna karşılık, ilk sayfadan son sayfaya kadar her şeyin açıkça verildiği, çaba gerektirmeyen, tıpkı hazır yiyecekler gibi kolayca tüketilip unutulan kitaplar çok satıyor. Okur, metnin içinde kaybolmayı değil, sadece kısa süreliğine oyalanmayı talep ediyor.\n\nBu parçanın yazarı, edebiyatın günümüzdeki durumuyla ilgili aşağıdakilerden hangisinden **yakınmaktadır**?',
        options: [
          { id: 'A', text: 'Yazarların sadece maddi kaygılarla kitap yazmasından' },
          { id: 'B', text: 'Okurların kitap fiyatlarını yüksek bulup edebiyattan uzaklaşmasından' },
          { id: 'C', text: 'Nitelikli ve derinlikli (düşünmeye iten) edebiyatın yerini, kolay anlaşılan ve çabuk tüketilen (oyalayıcı) eserlerin almasından' },
          { id: 'D', text: 'Edebi eserlerin sinemaya uyarlanarak orijinalliğini kaybetmesinden' },
          { id: 'E', text: 'Eleştirmenlerin popüler kitapları gereğinden fazla övmesinden' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, düşündüren ve zihni zorlayan metinlerin geride bırakılmasından, bunun yerine "hazır yiyecekler gibi" kolayca tüketilip oyalanma sağlayan kitapların (yüzeysel edebiyatın) rağbet görmesinden yakınmaktadır.'
      },
      {
        id: 'q-pa-4-23',
        difficulty: 'hard',
        questionText: 'Mimar Sinan\'ın eserlerindeki asıl büyü, devasa kubbeleri değil, o kubbelerin altındaki insan ruhunu kavrama biçimidir. O, taşı taşa eklerken matematiksel bir formülün ötesine geçmiş, taşın da bir nefesi, bir dili olduğuna inanmıştır. Yapıları, içine giren insanın acziyetini hissettirmekle beraber, ona ilahi bir huzur verecek şekilde tasarlanmıştır. Bu yüzden Sinan\'ın camileri sadece ibadethane değil, taşa yazılmış birer şiirdir.\n\nBu parçada Mimar Sinan\'ın eserleriyle ilgili vurgulanmak istenen **asıl özellik** aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Döneminin en gelişmiş matematiksel tekniklerini kullanması' },
          { id: 'B', text: 'Yapıların çok dayanıklı olması sayesinde günümüze ulaşabilmesi' },
          { id: 'C', text: 'Sadece devasa kubbeler ve büyük yapılar tasarlamış olması' },
          { id: 'D', text: 'Mimariyi sadece teknik (maddi) bir iş olmaktan çıkarıp binalara ruh (manevi/edebi boyut) katması' },
          { id: 'E', text: 'Diğer mimarlar tarafından hiçbir zaman kopyalanamayan tasarımlar yapması' }
        ],
        correctOptionId: 'D',
        explanation: 'Metinde Sinan\'ın sadece matematiksel formüllerle, devasa kubbelerle kalmadığı; taşa nefes, şiir ve ruh katarak insanın iç dünyasına dokunduğu (manevi boyut kattığı) vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-24',
        difficulty: 'hard',
        questionText: '(I) Psikolojide "öğrenilmiş çaresizlik" kavramı, bireyin art arda yaşadığı başarısızlıklar sonucunda, durumu değiştiremeyeceğine inanarak pes etmesidir. (II) Bu durumdaki bir insan, koşullar kendi lehine düzelse bile harekete geçme iradesini gösteremez. (III) Aynı şekilde, sürekli motive edilen çocuklar gelecekte daha başarılı olurlar. (IV) Çünkü zihni, "ne yaparsam yapayım sonuç değişmeyecek" algısıyla zehirlenmiştir. (V) Öğrenilmiş çaresizliği aşmanın ilk adımı, bireyin kendi düşünce kalıplarını fark edip bunları sorgulamasıdır.\n\nBu parçanın anlam bütünlüğünü sağlamak için numaralanmış cümlelerden hangisi metinden çıkarılmalıdır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'Parça (I, II, IV, V), öğrenilmiş çaresizliğin tanımı, bireydeki etkisi ve nasıl aşılacağı üzerinedir. (II. cümlenin açıklaması IV. cümledir.) III. cümlede ise aniden "sürekli motive edilen çocuklar"dan bahsedilerek anlam akışı tamamen bozulmuştur.'
      },
      {
        id: 'q-pa-4-25',
        difficulty: 'hard',
        questionText: 'Eski metinleri günümüz Türkçesine aktarırken en sık düşülen hata, eserin "yaşını" gizlemeye çalışmaktır. Çevirmen veya sadeleştirici, metni o kadar pürüzsüz ve bugüne ait bir dille sunar ki okur, eserin üç yüz yıl önce yazıldığını asla hissetmez. Oysa tarihi bir eseri okumak, o dönemin kelimeleriyle, o zamanın atmosferini soluyarak geçmişe yolculuk yapmaktır. Metnin üzerindeki patinayı (zamanın izini) silmek, onu yenilemez; aksine ruhunu çalar.\n\nBu parçanın yazarının eski eserleri günümüze uyarlayanlardan beklentisi nedir?',
        options: [
          { id: 'A', text: 'Eski kelimelerin hiçbirini değiştirmeden orijinal metni aynen basmaları' },
          { id: 'B', text: 'Gençlerin daha kolay anlayabilmesi için tamamen modern bir dil (argo, güncel deyim) kullanmaları' },
          { id: 'C', text: 'Eserin tarihi dokusunu, yazıldığı dönemin dilsel atmosferini ve yaşanmışlığını (zamanın izini) koruyarak aktarmaları' },
          { id: 'D', text: 'Sadece edebi değeri çok yüksek olan saray metinlerini günümüze uyarlamaları' },
          { id: 'E', text: 'Yabancı sözcüklerin sayısını artırarak metne gizemli bir hava katmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, eserin pürüzsüz ve tamamen bugüne ait bir dille sunulmasını (yaşının gizlenmesini, patinanın silinmesini) eleştirerek; eserin tarihi ruhunun ve zamanın izinin korunması gerektiğini savunmaktadır.'
      },
      {
        id: 'q-pa-4-26',
        difficulty: 'hard',
        questionText: 'Bir toplumu çökertmek istiyorsanız silah kullanmanıza gerek yoktur; sadece onların hafızasını, yani dilini tahrif etmeniz yeterlidir. Dil, nesiller arasındaki köprüdür. Yeni nesil, dedesinin kullandığı kelimeleri anlamaz, okuduğu eski kitaplardan hiçbir tat almaz hale gelirse, kültürel aktarım durur. Köprüsü yıkılmış bir toplum, ne geçmişine gidebilir ne de sağlam bir gelecek kurabilir.\n\nBu parçadan çıkarılacak en temel yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Savaşlar toplumların kültürlerini her zaman dillerinden daha çok etkilemiştir.' },
          { id: 'B', text: 'Yeni kelimeler üretmek, dillerin gelişmesi için zorunlu bir süreçtir.' },
          { id: 'C', text: 'Dilin bozulması (tahrif edilmesi), nesiller arası iletişimi kopararak toplumun kültürel devamlılığını ve varlığını tehlikeye atar.' },
          { id: 'D', text: 'Eski kitapların yeni dillere çevrilmesi, toplumların aydınlanmasını sağlar.' },
          { id: 'E', text: 'Gelecek nesiller, geçmişin kültürünü öğrenmek zorunda değildir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde dilin hafıza ve köprü olduğu, dilin tahrif edilmesinin bu köprüyü yıkarak kültürel aktarımı durduracağı ve toplumu (geçmişinden/geleceğinden kopararak) çökerteceği (tehlikeye atacağı) vurgulanmıştır.'
      },
      {
        id: 'q-pa-4-27',
        difficulty: 'hard',
        questionText: 'Bilimsel bir keşif yapıldığında, buluşu yapan bilim insanı genelde sadece yapbozun son parçasını yerine koyan kişidir. Fakat o anki alkış sadece ona yönelir. Hiç kimse, o son parçanın yerine oturabilmesi için yıllarca uğraşan, hatalar yapan, bazen yanlış parçaları deneyen önceki nesillerin emeğini hatırlamaz. Bilim, tekil dâhilerin değil, nesiller boyu süren kolektif (ortak) bir çabanın ürünüdür.\n\nBu parçada bilimin gelişimiyle ilgili olarak aşağıdakilerden hangisine **karşı çıkılmaktadır**?',
        options: [
          { id: 'A', text: 'Bilimsel ilerlemenin zaman içinde birikerek gerçekleşmesine' },
          { id: 'B', text: 'Başarıların sadece son noktayı koyan tek bir kişiye mal edilip önceki birikim ve emeklerin göz ardı edilmesine' },
          { id: 'C', text: 'Hataların, bilimsel keşiflerde öğretici bir rol oynamasına' },
          { id: 'D', text: 'Farklı bilim dallarının ortaklaşa çalışmasının önemine' },
          { id: 'E', text: 'Bilim insanlarının toplumdan yeterince destek görmemesine' }
        ],
        correctOptionId: 'B',
        explanation: 'Parçada bilimin kolektif olduğu, ancak buluş yapıldığında alkışın sadece yapbozun son parçasını koyan kişiye (tek kişiye) yönelmesi ve önceki çabaların unutulması eleştirilmiş, buna karşı çıkılmıştır.'
      },
      {
        id: 'q-pa-4-28',
        difficulty: 'hard',
        questionText: 'Modern insan, doğayı fethetme (kontrol altına alma) tutkusuyla kendi sonunu hazırladığının farkında değil. Dağları delip yollar yapıyor, nehirlerin yönünü değiştiriyor, ormanları betona çeviriyor. Kendini doğanın bir parçası olarak görmek yerine, onun efendisi olduğuna inanıyor. Oysa doğa fethedilecek bir düşman değil, uyum içinde yaşanması gereken bir yuvadır. Aksi takdirde, efendi sandığı güç, ilk depremde veya selde ne kadar aciz olduğunu ona hatırlatacaktır.\n\nBu parçada yazarın savunduğu temel düşünce nedir?',
        options: [
          { id: 'A', text: 'İnsanların ulaşım için yaptığı yolların doğaya zarar vermeden planlanması gerektiği' },
          { id: 'B', text: 'Doğal afetlerin insan müdahalesi olmadan da dünyanın bir gerçeği olduğu' },
          { id: 'C', text: 'İnsanın doğaya hükmetme yanılgısından vazgeçip onunla uyumlu, onun bir parçası olarak yaşaması gerektiği' },
          { id: 'D', text: 'Gelecekte tüm ormanların yerini beton binaların almasının kaçınılmaz olduğu' },
          { id: 'E', text: 'Teknolojinin, doğal afetlere karşı insanı tamamen koruyabileceği' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, insanın doğanın efendisi (fethedici) olma yanılgısını eleştirerek; doğanın bir düşman değil uyum içinde yaşanması gereken bir yuva olduğu ve insanın ancak uyum sağlayarak var olabileceği düşüncesini savunmuştur.'
      },
      {
        id: 'q-pa-4-29',
        difficulty: 'hard',
        questionText: 'Şiirin dili, gündelik hayatın dilinden farklıdır. Bakkaldan ekmek alırken kullandığımız kelimelerle, sevdiğimiz birini anlatırken kullandığımız kelimeler aynı olabilir; ancak şiir, o sıradan kelimeyi alır, ona yepyeni bir müzik, farklı bir çağrışım yükler. Bu yüzdendir ki şiiri nesre (düzyazıya) çevirmek, bir şarkının sadece sözlerini okumak gibidir; melodisi olmadan o sözler büyüsünü kaybeder.\n\nBu parçaya göre bir şiirin düzyazıya çevrilmesi (nesre aktarılması) neden eksik veya hatalı bir eylemdir?',
        options: [
          { id: 'A', text: 'Şiirdeki kelimelerin düzyazıda karşılığının bulunmaması' },
          { id: 'B', text: 'Düzyazının şiire göre daha geniş kitlelere hitap etmesi' },
          { id: 'C', text: 'Şiirin özünü oluşturan ahenk (müzik) ve kelimelere yüklenen özel çağrışımların düz yazıda kaybolması' },
          { id: 'D', text: 'Şiirin sadece aşk konularını, düzyazının ise toplumsal sorunları ele alması' },
          { id: 'E', text: 'Nesre çeviren kişinin şairin hayatını yeterince bilmemesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada şiirin kelimelere yepyeni bir müzik ve çağrışım yüklediği, şiiri nesre çevirmenin melodisi olmadan şarkı sözü okumaya benzediği, yani büyünün (müzik ve çağrışımın) kaybolacağı ifade edilmiştir.'
      },
      {
        id: 'q-pa-4-30',
        difficulty: 'hard',
        questionText: '(I) Postmodern romanlarda zaman çizgisel (ileri doğru akan) bir biçimde ilerlemez. (II) Karakter bir an çocukluğuna dönerken, diğer an gelecekteki bir olayı yaşıyor olabilir. (III) Tarihi romanlar, geçmiş olayları bir belge titizliğiyle okura sunar. (IV) Geçmiş, şimdi ve gelecek, birbiri içine geçmiş bir sarmal halinde sunulur. (V) Yazarın amacı okuru bu karmaşanın içine çekerek zaman algısını kırmaktır.\n\nBu parçada numaralanmış cümlelerden hangisi anlam akışını bozmaktadır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada (I, II, IV, V) postmodern romanlarda zamanın çizgisel olmaması, zamanların (geçmiş-şimdi-gelecek) iç içe geçmesi anlatılırken; III. cümlede birdenbire tarihi romanların geçmişi nasıl sunduğu anlatılarak akış bozulmuştur.'
      }
    ]
  }
]
