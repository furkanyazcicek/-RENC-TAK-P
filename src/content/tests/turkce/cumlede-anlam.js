export default [
  {
    id: 'test-cumlede-anlam-kolay-1',
    title: 'Kavrama Testi 1 (Kolay)',
    description: 'Cümlede Anlam - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-ca-k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "neden-sonuç" (sebep-sonuç) ilişkisi vardır?',
        options: [
          { id: 'A', text: 'Yarın sabah erkenden yola çıkmak için hazırlık yaptı.' },
          { id: 'B', text: 'Çok çalıştığı için sınavda yüksek bir puan aldı.' },
          { id: 'C', text: 'Eğer bu kitabı okursan ufkumun genişleyeceğine eminim.' },
          { id: 'D', text: 'Kar yağarsa okullar tatil edilebilir.' },
          { id: 'E', text: 'Kitaplarını toplamak üzere odasına doğru yöneldi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylemin (yüksek puan almanın) bir nedeni (çok çalışması) verilmiştir ve eylem gerçekleşmiştir. A ve E amaç-sonuç, C ve D koşul-sonuç bildirir.'
      },
      {
        id: 'q-ca-k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "amaç-sonuç" ilişkisi vardır?',
        options: [
          { id: 'A', text: 'Hava soğuk olduğundan kalın giyinmişti.' },
          { id: 'B', text: 'Kilo vermek amacıyla her sabah koşuya çıkıyor.' },
          { id: 'C', text: 'Gözlüklerini takmadığı için yazıları okuyamadı.' },
          { id: 'D', text: 'Zamanında uyursan sabah daha dinç kalkarsın.' },
          { id: 'E', text: 'Yağmur yağdığından maç iptal edildi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "koşuya çıkmasının" amacı (kilo vermek) belirtilmiştir. A, C ve E neden-sonuç bildirir.'
      },
      {
        id: 'q-ca-k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi öznel bir yargı içermektedir?',
        options: [
          { id: 'A', text: 'Türkiye\'nin başkenti Ankara\'dır.' },
          { id: 'B', text: 'Yazarın son kitabı yüz sayfadan oluşuyor.' },
          { id: 'C', text: 'İstanbul, boğaz manzarasıyla dünyanın en güzel şehridir.' },
          { id: 'D', text: 'Suyun kaynama noktası deniz seviyesinde 100 derecedir.' },
          { id: 'E', text: 'Bu film 1998 yılında gösterime girmiştir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneği kişiden kişiye değişebilen "en güzel şehir" ifadesini barındırdığı için öznel (kişisel) bir yargıdır. Diğerleri kanıtlanabilir, nesnel yargılardır.'
      },
      {
        id: 'q-ca-k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "koşul (şart)" anlamı vardır?',
        options: [
          { id: 'A', text: 'Ödevlerini zamanında bitirirsen dışarı çıkmana izin veririm.' },
          { id: 'B', text: 'Trafiğe takıldığı için toplantıya geç kaldı.' },
          { id: 'C', text: 'Seni görmek için ta uzaklardan buraya geldim.' },
          { id: 'D', text: 'Dün akşam izlediğim film gerçekten çok sıkıcıydı.' },
          { id: 'E', text: 'Bahçedeki ağaçların yaprakları yavaş yavaş sararıyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde dışarı çıkmanın şartı "ödevlerin zamanında bitirilmesine" bağlanmıştır.'
      },
      {
        id: 'q-ca-k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tahmin (olasılık)" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Bu saatte çoktan eve varmış olmalı.' },
          { id: 'B', text: 'Yarın kesinlikle bu ödevi bitireceğim.' },
          { id: 'C', text: 'Eskiden buralarda yemyeşil ormanlar vardı.' },
          { id: 'D', text: 'Yemeği ocakta fazla tuttuğum için yaktım.' },
          { id: 'E', text: 'Gözlerimin içine bakarak yalan söyledi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "varmış olmalı" ifadesiyle kişinin nerede olabileceğine dair bir tahminde (olasılık) bulunulmaktadır.'
      },
      {
        id: 'q-ca-k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yakınma (şikayet)" anlamı vardır?',
        options: [
          { id: 'A', text: 'Ne yapsam da ona bir türlü yaranamıyorum!' },
          { id: 'B', text: 'Yarın hava güzel olursa pikniğe gideriz.' },
          { id: 'C', text: 'Çocukluğumda en sevdiğim oyuncak arabamdı.' },
          { id: 'D', text: 'Kitabın sonunu gerçekten hiç böyle beklemiyordum.' },
          { id: 'E', text: 'Bugün kendimi çok enerjik ve mutlu hissediyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde konuşan kişi, çabalarının takdir edilmemesinden dolayı rahatsızlığını dile getirerek yakınmaktadır.'
      },
      {
        id: 'q-ca-k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "doğrudan anlatım" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Annem, akşam yemeğe misafirlerin geleceğini söyledi.' },
          { id: 'B', text: 'Öğretmenimiz yarın sınav yapacağını belirtti.' },
          { id: 'C', text: 'Babam: "Bu arabayı artık değiştirmeliyiz." dedi.' },
          { id: 'D', text: 'Arkadaşım çok yorgun olduğunu ifade etti.' },
          { id: 'E', text: 'Müdür, toplantının iptal edildiğini duyurdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde babanın sözü ("Bu arabayı artık değiştirmeliyiz.") hiç değiştirilmeden, aynen alıntılandığı için doğrudan anlatım vardır.'
      },
      {
        id: 'q-ca-k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tanımlama" yapılmıştır?',
        options: [
          { id: 'A', text: 'Roman, yaşanmış veya yaşanması muhtemel olayların anlatıldığı uzun edebi türdür.' },
          { id: 'B', text: 'Şiir okumak insanın ruhunu dinlendiren en güzel eylemlerden biridir.' },
          { id: 'C', text: 'Tiyatro sahnesinde sergilenen oyun izleyicilerden büyük alkış aldı.' },
          { id: 'D', text: 'Kitap okuma alışkanlığı kazanmak için her gün belli bir süre ayırmalısınız.' },
          { id: 'E', text: 'Edebiyat dünyasında bu yıl pek çok yeni eser yayımlandı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneği "Roman nedir?" sorusuna yanıt veren nesnel bir tanım cümlesidir.'
      },
      {
        id: 'q-ca-k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "pişmanlık" anlamı vardır?',
        options: [
          { id: 'A', text: 'Keşke o gün ona o kadar sert sözler söylemeseydim.' },
          { id: 'B', text: 'Bu projenin yetişmeyeceğini daha en başından biliyordum.' },
          { id: 'C', text: 'Yarınki sınava mutlaka çalışmam gerekiyor.' },
          { id: 'D', text: 'Ne olursa olsun bu işin peşini bırakmayacağım.' },
          { id: 'E', text: 'Onun bu kadar düşüncesiz davranmasına çok şaşırdım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde konuşan kişi, geçmişte yaptığı bir eylemden (sert konuşmaktan) dolayı üzüntü duymakta ve pişmanlık belirtmektedir.'
      },
      {
        id: 'q-ca-k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "karşılaştırma" yapılmıştır?',
        options: [
          { id: 'A', text: 'Bu yazarın son kitabı, öncekilere göre daha sade bir dille yazılmış.' },
          { id: 'B', text: 'Sabahları erken kalkıp sahilde yürüyüş yapmayı çok severim.' },
          { id: 'C', text: 'Gökyüzündeki kara bulutlar şiddetli bir yağmurun habercisiydi.' },
          { id: 'D', text: 'Çocuklar bahçede neşe içinde seksek oynuyorlardı.' },
          { id: 'E', text: 'Eskiden bu mahallede herkes birbirini tanırdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yazarın "son kitabı" ile "önceki kitapları" dilin sadeliği yönünden karşılaştırılmıştır.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-orta-1',
    title: 'Kavrama Testi 2 (Orta)',
    description: 'Cümlede Anlam - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-ca-o-1',
        difficulty: 'medium',
        questionText: '"Üslup" bir yazarın dili kullanma biçimi, "içerik" ise ne anlattığıdır. Buna göre aşağıdaki cümlelerin hangisi bir "üslup" (biçem) cümlesidir?',
        options: [
          { id: 'A', text: 'Yazar bu romanında Anadolu köylüsünün geçim sıkıntısını anlatıyor.' },
          { id: 'B', text: 'Şiirlerinde yalnızlık ve ölüm teması ağır basmaktadır.' },
          { id: 'C', text: 'Eserde, kahramanların ruhsal çatışmaları başarıyla işlenmiş.' },
          { id: 'D', text: 'Sanatçı, kısa ve devrik cümlelerle okuru sürükleyen akıcı bir dil kullanmış.' },
          { id: 'E', text: 'Kitabın son bölümünde ana karakterin İstanbul\'a göçü konu ediliyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde eserin nasıl anlatıldığı (kısa devrik cümleler, akıcı dil) belirtildiği için üslup cümlesidir. Diğerleri ne anlatıldığını (içerik) verir.'
      },
      {
        id: 'q-ca-o-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ön yargı (peşin hüküm)" anlamı vardır?',
        options: [
          { id: 'A', text: 'Eminim ki bu film de diğerleri gibi gişede çakılacak.' },
          { id: 'B', text: 'Bu kitabın kapağı içeriğinden daha çok dikkat çekiyor.' },
          { id: 'C', text: 'Sınava iyi çalışmazsan başarılı olman çok zor.' },
          { id: 'D', text: 'Yazarın dili kullanma becerisi gerçekten takdire şayan.' },
          { id: 'E', text: 'Toplantının iptal edilmesi herkesi çok rahatlattı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde olay (filmin gösterime girmesi) henüz sonuçlanmadan, önceki tecrübelere dayanarak olumsuz bir peşin hüküm (ön yargı) verilmiştir.'
      },
      {
        id: 'q-ca-o-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "hayıflanma" (kaçırılan bir fırsata üzülme) anlamı vardır?',
        options: [
          { id: 'A', text: 'Oraya kadar gitmişken müzeyi de gezseydim çok iyi olurdu.' },
          { id: 'B', text: 'Keşke o kırıcı sözleri sana hiç söylemeseydim.' },
          { id: 'C', text: 'Ne kadar uğraşırsam uğraşayım bu konuyu anlayamıyorum.' },
          { id: 'D', text: 'Her zaman kendi bildiğini okur, kimseyi dinlemezdi.' },
          { id: 'E', text: 'Havalar bu gidişle hiç ısınmayacak gibi görünüyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde kişinin elinde bir fırsat varken yapmadığı bir şeyden (müzeyi gezmemek) duyduğu üzüntü yani hayıflanma vardır. B seçeneği ise pişmanlıktır (yapılan bir şeye üzülme).'
      },
      {
        id: 'q-ca-o-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "varsayım" anlamı vardır?',
        options: [
          { id: 'A', text: 'Bu projenin büyük bir başarı elde edeceğine inanıyorum.' },
          { id: 'B', text: 'Tut ki sınavı kazandın, hangi şehre gitmek istersin?' },
          { id: 'C', text: 'Yarın hava güzel olursa birlikte balık tutmaya gideriz.' },
          { id: 'D', text: 'Belki o da bu akşamki kutlamaya katılmak ister.' },
          { id: 'E', text: 'Söylediği yalanlar yüzünden kimse ona güvenmiyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "tut ki" ifadesi, gerçekleşmemiş bir olayı geçici bir süreliğine gerçekleşmiş gibi kabul etmeyi (varsayımı) ifade eder.'
      },
      {
        id: 'q-ca-o-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "örtülü anlam" yoktur?',
        options: [
          { id: 'A', text: 'Artık ben de bu toplantılara katılmayacağım.' },
          { id: 'B', text: 'Ahmet Bey yine toplantıya geç kalmış.' },
          { id: 'C', text: 'Babam bu akşam işten çok yorgun döndü.' },
          { id: 'D', text: 'Bu yemeği kardeşim bile çok beğendi.' },
          { id: 'E', text: 'Havalar nihayet ısınmaya başladı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A\'da "artık/ben de" (başkaları da katılmıyor, eskiden katılıyordu), B\'de "yine" (daha önce de geç kalmış), D\'de "bile" (başkaları beğendiği gibi zor beğenen kardeşi de beğendi), E\'de "nihayet" (uzun süredir soğuktu) örtülü anlamlar taşır. C seçeneğinde sadece düz bir bilgi verilmiştir.'
      },
      {
        id: 'q-ca-o-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "değerlendirme (eleştiri)" yapılmıştır?',
        options: [
          { id: 'A', text: 'Yazar, eserinde köyden kente göçen bir ailenin dramını anlatmış.' },
          { id: 'B', text: 'Kitabın sonlarına doğru betimlemelerin fazlalığı okuyucuyu sıkıyor.' },
          { id: 'C', text: 'Şair bu şiir kitabını doğduğu şehre adamış.' },
          { id: 'D', text: 'Eser, üç ana bölümden ve yirmi beş kısa hikayeden oluşuyor.' },
          { id: 'E', text: 'Yönetmen, filmin çekimlerini tamamen doğal mekanlarda gerçekleştirmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kitabın bir yönü (betimlemelerin fazlalığı) üzerine olumsuz bir yorum ve eleştiri (değerlendirme) yapılmıştır. Diğerleri ise eserin içeriği veya biçimi hakkında nesnel bilgi verir.'
      },
      {
        id: 'q-ca-o-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin "aşamalı bir durum" içerdiği görülmektedir?',
        options: [
          { id: 'A', text: 'Kapıyı hızla çarpıp odadan dışarı çıktı.' },
          { id: 'B', text: 'Hastanın durumu günden güne daha iyiye gidiyor.' },
          { id: 'C', text: 'Sınav sonuçları açıklandığında havalara uçtu.' },
          { id: 'D', text: 'Çocuk, elindeki dondurmayı bir çırpıda bitirdi.' },
          { id: 'E', text: 'Aylardır beklediği haberi alınca sevinç gözyaşları döktü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "günden güne" ifadesi, durumun birdenbire değil, zaman içinde aşama aşama değiştiğini gösterir.'
      },
      {
        id: 'q-ca-o-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "azımsama" anlamı vardır?',
        options: [
          { id: 'A', text: 'Bu kadarcık maaşla koca bir ayı nasıl geçireceğiz!' },
          { id: 'B', text: 'Senin bu soruyu çözebileceğini hiç sanmıyorum.' },
          { id: 'C', text: 'O kadar okudun da ne oldun sanki?' },
          { id: 'D', text: 'Onun söylediklerini zerre kadar umursamıyorum.' },
          { id: 'E', text: 'Bunca yıllık dostluğumuzu bir kalemde sildi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde verilen maaş miktarı yetersiz bulunmuş ve "azımsanmıştır". (Küçümseme kişi veya nitelik için, azımsama miktar için kullanılır.)'
      },
      {
        id: 'q-ca-o-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tasarı (plan)" anlamı vardır?',
        options: [
          { id: 'A', text: 'Önümüzdeki yaz Ege kıyılarında küçük bir ev almayı düşünüyorum.' },
          { id: 'B', text: 'Keşke üniversite yıllarında yabancı dil eğitimine daha çok önem verseydim.' },
          { id: 'C', text: 'Yarınki toplantıda bu konunun da gündeme gelmesi muhtemeldir.' },
          { id: 'D', text: 'Ona ne kadar kızgın olsam da bu zor gününde yanında olmalıydım.' },
          { id: 'E', text: 'Çocukluğumun geçtiği bu sokakları ne kadar da özlemişim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde geleceğe yönelik bir niyet, plan (tasarı) ifade edilmektedir.'
      },
      {
        id: 'q-ca-o-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "beklentinin gerçekleşmediği" anlamı vardır?',
        options: [
          { id: 'A', text: 'Bu sınavı kesinlikle geçeceğime inanıyordum ve öyle de oldu.' },
          { id: 'B', text: 'Onun bu zor zamanımda beni yalnız bırakmayacağını sanıyordum.' },
          { id: 'C', text: 'Kışın bu kadar sert geçeceğini meteoroloji önceden duyurmuştu.' },
          { id: 'D', text: 'Tatil için ayırdığımız bütçe beklediğimizden fazla çıktı.' },
          { id: 'E', text: 'Uzun zamandır hazırlandığı projeyi sonunda başarıyla tamamladı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kişinin yalnız bırakılmama beklentisi (sanıyordum sözcüğünden anlaşılacağı üzere) gerçekleşmemiş ve hayal kırıklığı yaşanmıştır.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-zor-1',
    title: 'Kavrama Testi 3 (Zor)',
    description: 'Cümlede Anlam - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-ca-z-1',
        difficulty: 'hard',
        questionText: '"Sanatçı, aynayı sokağa tutan değil; sokağın aynada bıraktığı izi kendi renkleriyle tuvale aktaran kişidir." Bu cümleden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sanat, gerçekliği olduğu gibi yansıtmak yerine sanatçının yorumuyla yeniden üretilir.' },
          { id: 'B', text: 'Sanatçılar, toplumdan tamamen bağımsız, kendi hayal dünyalarında eser vermelidir.' },
          { id: 'C', text: 'Toplumsal sorunları işlemeyen bir eserin sanat değeri taşıması mümkün değildir.' },
          { id: 'D', text: 'Gerçek sanat, doğayı ve insanı hiçbir değişikliğe uğratmadan aktarabilmektir.' },
          { id: 'E', text: 'Sanatçının başarısı, eserinde kullandığı renklerin canlılığıyla ölçülür.' }
        ],
        correctOptionId: 'A',
        explanation: 'Cümlede sanatçının gerçeği (sokağı) kopyalayan bir ayna olmadığı, o gerçeği kendi süzgecinden (renkleriyle) geçirerek yansıttığı (öznel olduğu) anlatılmaktadır. Bu da A seçeneğiyle örtüşür.'
      },
      {
        id: 'q-ca-z-2',
        difficulty: 'hard',
        questionText: 'I. Eleştirmen, eserin sadece hatalarını arayan bir dedektif değildir. \nII. Eleştirmen, okuyucu ile yazar arasında köprü kuran bir rehberdir. \nIII. Gerçek bir eleştiri, eserin hem karanlık hem de aydınlık yönlerini ortaya koymalıdır. \nIV. Okuyucu, eleştirmenin görüşlerine bakarak kendi edebi zevkini oluşturur. \nYukarıdaki numaralanmış cümlelerden hangileri anlamca birbirine en yakındır?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve IV' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'I. cümlede eleştirmenin sadece "hataları (karanlık yönleri)" bulmaması gerektiği söyleniyor. III. cümlede ise eserin "hem karanlık hem aydınlık (hata ve başarıları)" yönlerini bulması gerektiği söyleniyor. İkisi de eleştirinin tek taraflı (sadece hata bulmak) olmaması gerektiğini vurguladığı için anlamca en yakın olanlar I ve III\'tür.'
      },
      {
        id: 'q-ca-z-3',
        difficulty: 'hard',
        questionText: '"Bir şiirin ne anlattığından çok, nasıl anlattığı önemlidir; çünkü su aynı sudur, fakat bardağın şekli suyun duruşunu değiştirir." Bu sözle anlatılmak istenen asıl düşünce aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Şiirde konunun hiçbir önemi yoktur, sadece biçim mükemmelliği aranmalıdır.' },
          { id: 'B', text: 'Aynı konu (su), yazarın üslubuna (bardak) göre farklı bir edebi değer ve görünüm kazanır.' },
          { id: 'C', text: 'Şairler, her zaman işlenmemiş, yeni konular bulmak zorundadır.' },
          { id: 'D', text: 'Okuyucu, şiirin biçiminden çok içeriğiyle ilgilenir.' },
          { id: 'E', text: 'Şiirin kalıcı olması, anlatılan konunun evrensel olmasına bağlıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede "su" konuyu, "bardağın şekli" ise üslubu (anlatım biçimini) simgelemektedir. Aynı içeriğin, üsluba göre farklılaşacağı anlatılmaktadır.'
      },
      {
        id: 'q-ca-z-4',
        difficulty: 'hard',
        questionText: '"Yalnızca kıyıdan ayrılmaya cesaret edenler, yeni okyanuslar keşfedebilir." Bu cümlenin ifade ettiği anlamı en iyi karşılayan atasözü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zahmetsiz rahmet olmaz.' },
          { id: 'B', text: 'Korkunun ecele faydası yoktur.' },
          { id: 'C', text: 'Denize düşen yılana sarılır.' },
          { id: 'D', text: 'Tekne su alırsa kaptan da batar.' },
          { id: 'E', text: 'Risk almadan (zahmet çekmeden, konfor alanından çıkmadan) başarıya (yeni ufuklara) ulaşılamaz. (Yani, Gülü seven dikenine katlanır / Risk almak anlamında).' }
        ],
        correctOptionId: 'A',
        explanation: 'Burada risk almak, zorluğu göze almak (kıyıdan ayrılmak cesareti) teması işlenmiştir. "Zahmetsiz rahmet olmaz" (emek ve cesaret olmadan kazanç olmaz) en yakın anlamı taşır. (Şıklar arasında en uygunudur).'
      },
      {
        id: 'q-ca-z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin yapılış nedeni eylemden daha sonra gerçekleşecek bir duruma bağlanmıştır (Geleceğe dönük gerekçe / Amaç)?',
        options: [
          { id: 'A', text: 'Yorgunluktan gözleri kapanıyor, ayakta durmakta zorlanıyordu.' },
          { id: 'B', text: 'Kitabını evde unuttuğu için öğretmenden özür diledi.' },
          { id: 'C', text: 'Yabancı dilini geliştirebilmek için yazın yurtdışına gidecek.' },
          { id: 'D', text: 'Havaların aniden soğumasıyla yakacak satışları arttı.' },
          { id: 'E', text: 'Düşüncesizce konuştuğundan herkesin kalbini kırdı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D, E seçeneklerinde "neden-sonuç" (sebep geçmişte veya andadır) vardır. C seçeneğinde ise "amaç-sonuç" vardır. Amacın gerçekleşmesi her zaman eylemden sonraya kalır (Geleceğe dönük gerekçedir).'
      },
      {
        id: 'q-ca-z-6',
        difficulty: 'hard',
        questionText: '"Eğer bir yazar, okuyucunun sadece bildiği ve duyduğu şeyleri yazıyorsa, o yazar okuyucuya bir ufuk açmıyor, sadece onun yankısını veriyordur." Bu cümleye göre bir yazarda bulunması gereken asıl özellik nedir?',
        options: [
          { id: 'A', text: 'Okuyucunun beklentilerini tam olarak karşılamak' },
          { id: 'B', text: 'Toplumun gelenek ve göreneklerini yaşatmak' },
          { id: 'C', text: 'Anlaşılır ve sade bir dil kullanmak' },
          { id: 'D', text: 'Okura yeni bakış açıları ve bilinmeyen ufuklar sunmak' },
          { id: 'E', text: 'Sadece yaşanmış, gerçek olayları kaleme almak' }
        ],
        correctOptionId: 'D',
        explanation: 'Yazarın "ufuk açması" ve "yankı" (bilinenin tekrarı) olmaması gerektiği vurgulanmıştır. Bu da yeni bakış açıları sunmak anlamına gelir.'
      },
      {
        id: 'q-ca-z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "çıkarım" yapılmıştır?',
        options: [
          { id: 'A', text: 'Yazarın son kitabı çıktığı gün yüz bin adet sattı.' },
          { id: 'B', text: 'Havanın kararmasıyla birlikte sokak lambaları da yandı.' },
          { id: 'C', text: 'Sokakların bu kadar boş olmasına bakılırsa maç başlamış olmalı.' },
          { id: 'D', text: 'Çocuk, annesinin elini sımsıkı tutarak yürüyordu.' },
          { id: 'E', text: 'Odanın sıcaklığı artınca pencereyi hafifçe araladı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çıkarım, var olan nesnel bir durumdan hareketle, kişisel bir sonuca veya tahmine ulaşmaktır. C seçeneğinde sokakların boş olmasından (nesnel durum), maçın başlamış olduğu (çıkarım) sonucuna varılmıştır.'
      },
      {
        id: 'q-ca-z-8',
        difficulty: 'hard',
        questionText: '"Hiçbir zafer, başkalarının felaketi üzerine inşa edilemez." cümlesine anlamca en yakın olan seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Gerçek başarı, dürüstlükle ve kimseye zarar vermeden elde edilendir.' },
          { id: 'B', text: 'Büyük başarılar büyük fedakarlıklar gerektirir.' },
          { id: 'C', text: 'Zafer, inananların ve asla pes etmeyenlerin hakkıdır.' },
          { id: 'D', text: 'Başarıya giden yolda yapılan her hata bir tecrübedir.' },
          { id: 'E', text: 'Düşmanını tanımayan bir komutanın zafer kazanması imkansızdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Başkalarının felaketi (zararı) üzerine kurulan zaferin meşru olmayacağı, gerçek başarının kimseye zarar vermeden elde edilmesi gerektiği vurgulanmıştır.'
      },
      {
        id: 'q-ca-z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "koşula bağlılığın gerçekleşmesine rağmen umulan sonucun alınamadığı" anlamı vardır?',
        options: [
          { id: 'A', text: 'Sınava ne kadar çok çalışırsan çalış, stresini yönetemezsen başarılı olamazsın.' },
          { id: 'B', text: 'İlaçlarını düzenli kullanmana rağmen hastalığın neden geçmedi anlamıyorum.' },
          { id: 'C', text: 'Erkenden yola çıksaydık şimdiye çoktan oraya varmıştık.' },
          { id: 'D', text: 'Bana yardım edersen bu işi akşama kadar bitiririz.' },
          { id: 'E', text: 'Oraya kadar gittik madem, en azından müzeyi de görelim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde koşul olan "ilaçları düzenli kullanma" gerçekleşmiş, ancak umulan sonuç olan "hastalığın geçmesi" durumu gerçekleşmemiştir.'
      },
      {
        id: 'q-ca-z-10',
        difficulty: 'hard',
        questionText: 'I. Eserlerinde hep sıradan insanların hayat mücadelesini anlatır.\nII. Karakterlerini özenle seçer ve onları çok derinlemesine betimler.\nIII. Onun kitaplarını okurken, kahramanlarla birlikte ağlar, onlarla birlikte gülersiniz.\nIV. Cümleleri öylesine kısadır ki, şiir okuyormuş hissine kapılırsınız.\nBu numaralanmış cümlelerden hangileri, yazarın "üslubu" (dil ve anlatım özellikleri) hakkında bilgi vermektedir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız IV' },
          { id: 'C', text: 'I ve II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'III ve IV' }
        ],
        correctOptionId: 'B',
        explanation: 'I. cümle konu (içerik), II. cümle içerik kurgusu, III. cümle eserin etkisi, IV. cümle ise yazarın cümle yapısını (kısa olması, şiirsel dil) anlattığı için üsluptur. Sadece IV. cümle üsluptur.'
      }
    ]
  }
]
