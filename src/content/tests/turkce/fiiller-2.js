export default [
  {
    id: 'test-fiiller-2-kolay',
    title: 'Fiiller 2 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-fl-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde çekimli bir eylem (fiil) yoktur?',
        options: [
          { id: 'A', text: 'Tatil için planlarımızı çoktan yaptık.' },
          { id: 'B', text: 'Kardeşim bugün her zamankinden neşeliydi.' },
          { id: 'C', text: 'Rüzgar bütün gece şiddetle esti.' },
          { id: 'D', text: 'Söylenenleri hiç dikkatlice dinlemiyor.' },
          { id: 'E', text: 'Yeni evlerine haftaya taşınacaklar.' }
        ],
        correctOptionId: 'B',
        explanation: '"Neşeliydi" kelimesi isim soylu bir kelimedir ve ek fiil alarak yüklem olmuştur. Diğer şıklarda "yaptık", "esti", "dinlemiyor", "taşınacaklar" birer çekimli fiildir.'
      },
      {
        id: 'q-fl-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki fiillerden hangisi duyulan (öğrenilen) geçmiş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Gitmişler' },
          { id: 'B', text: 'Okudum' },
          { id: 'C', text: 'Çözüyor' },
          { id: 'D', text: 'Yazacak' },
          { id: 'E', text: 'Oturmalı' }
        ],
        correctOptionId: 'A',
        explanation: 'Duyulan (öğrenilen) geçmiş zaman eki "-mış / -miş / -muş / -müş"tür. A seçeneğinde "git-miş-ler" fiili bu kipi almıştır.'
      },
      {
        id: 'q-fl-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde emir kipiyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Biraz sessiz olabilir misiniz?' },
          { id: 'B', text: 'Keşke sen de bizimle gelsen.' },
          { id: 'C', text: 'Bu belgeleri yarın müdüre teslim edin.' },
          { id: 'D', text: 'Herkes kendi işini vaktinde yapmalı.' },
          { id: 'E', text: 'Hafta sonu kütüphaneye gidelim.' }
        ],
        correctOptionId: 'C',
        explanation: '"Teslim edin" fiili emir kipi 2. çoğul şahıs (siz) çekimidir. A\'da geniş zaman (soru), B\'de şart, D\'de gereklilik, E\'de istek kipi vardır.'
      },
      {
        id: 'q-fl-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "durum" fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tabağındaki yemeğin tamamını yedi.' },
          { id: 'B', text: 'Çocuk korkudan saatlerce ağladı.' },
          { id: 'C', text: 'Bahçedeki çiçekleri teker teker kopardı.' },
          { id: 'D', text: 'Bardağı elinden düşürüp kırdı.' },
          { id: 'E', text: 'Bütün evi pırıl pırıl temizledi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Durum fiilleri nesne almazlar ("neyi, kimi" sorusuna cevap vermezler). "Ağlamak" nesne almadığı için durum fiilidir. Yedi, kopardı, kırdı ve temizledi fiilleri nesne alabilen iş (kılış) fiilleridir.'
      },
      {
        id: 'q-fl-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi "oluş" bildirmektedir?',
        options: [
          { id: 'A', text: 'Eşyaları tek başına yukarı *taşıdı*.' },
          { id: 'B', text: 'Uzun zaman geçince demirler *paslanmış*.' },
          { id: 'C', text: 'Sessizce odasına gidip *uyudu*.' },
          { id: 'D', text: 'Haberi alınca hepimiz çok *sevindik*.' },
          { id: 'E', text: 'Bütün soruları doğru *cevaplamış*.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oluş fiilleri zaman içinde, irade dışında kendiliğinden meydana gelen değişimi anlatır. "Paslanmak" eylemi bu tanıma uyar.'
      },
      {
        id: 'q-fl-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiil 2. çoğul şahıs eki almıştır?',
        options: [
          { id: 'A', text: 'Beni aradığınızı sonradan öğrendim.' },
          { id: 'B', text: 'Onu gördüğünde mutlaka selam söyle.' },
          { id: 'C', text: 'Neden bize daha önce haber vermediniz?' },
          { id: 'D', text: 'Bu kitabı mutlaka okumalısın.' },
          { id: 'E', text: 'Tüm gün dışarıda dolaştılar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "vermediniz" fiili "siz" (2. çoğul şahıs) zamirine uygun olarak çekimlenmiştir.'
      },
      {
        id: 'q-fl-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde haber kipiyle çekimlenmiş bir fiil yoktur?',
        options: [
          { id: 'A', text: 'Geceler uzuyor, günler kısalıyor.' },
          { id: 'B', text: 'Birazdan gökyüzü bulutlanacak.' },
          { id: 'C', text: 'Bahar gelir de yapraklar yeşerir.' },
          { id: 'D', text: 'Her şeyi bırakıp uzaklara gitsek.' },
          { id: 'E', text: 'Dün akşam rüyamda seni gördüm.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gitsek" fiili şart kipiyle (-sa/-se) çekimlenmiştir, yani dilek kipidir. Diğerlerinde şimdiki zaman (A), gelecek zaman (B), geniş zaman (C) ve bilinen geçmiş zaman (E) kullanılmıştır.'
      },
      {
        id: 'q-fl-2-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabın sayfalarını hızlıca çevirdi.' },
          { id: 'B', text: 'Odası her zaman çok düzenlidir.' },
          { id: 'C', text: 'Sorunları çözmek için çok uğraştı.' },
          { id: 'D', text: 'Kahvesini yudumlarken manzaraya daldı.' },
          { id: 'E', text: 'Birden ayağa kalkıp dışarı çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim soylu bir sözcük olan "düzenli" kelimesi "-dir" ek fiilini alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-2-9',
        difficulty: 'easy',
        questionText: '"Gel-" fiilinin gereklilik kipi olumsuz 1. tekil şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gelmeyeceğim' },
          { id: 'B', text: 'Gelmeliyim' },
          { id: 'C', text: 'Gelmemelisin' },
          { id: 'D', text: 'Gelmemeliyim' },
          { id: 'E', text: 'Gelmeyeyim' }
        ],
        correctOptionId: 'D',
        explanation: 'Gereklilik kipi "-malı / -meli", olumsuzluk eki "-ma / -me", 1. tekil şahıs eki (ben) ise "-m / -yım / -yim"dir. Buna göre: Gel-me-meli-y-im.'
      },
      {
        id: 'q-fl-2-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eylemlerden hangisi bilinen (görülen) geçmiş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Gülecek' },
          { id: 'B', text: 'Yüzüyor' },
          { id: 'C', text: 'Baktı' },
          { id: 'D', text: 'Sormuş' },
          { id: 'E', text: 'Ağlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Bilinen (görülen) geçmiş zaman eki "-dı / -di / -du / -dü / -tı / -ti / -tu / -tü"dür. "Baktı" fiili bu kipi almıştır.'
      }
    ]
  },
  {
    id: 'test-fiiller-2-orta',
    title: 'Fiiller 2 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-fl-2-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam (kip) kayması örneği yoktur?',
        options: [
          { id: 'A', text: 'Haftaya arkadaşlarımla İzmir\'e gidiyoruz.' },
          { id: 'B', text: 'Fatih Sultan Mehmet, gemileri karadan yürütür.' },
          { id: 'C', text: 'Her yaz tatilini Muğla\'da geçiriyor.' },
          { id: 'D', text: 'Allah\'ım, sen bize merhamet et.' },
          { id: 'E', text: 'Dün olanları bana bir bir anlattı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde zaman zarfı "dün" geçmiş zamanı gösterir ve yüklem de geçmiş zamanla (-tı) çekimlenmiştir; bu yüzden anlam kayması yoktur.'
      },
      {
        id: 'q-fl-2-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik zamanlı fiil (birleşik çekimli eylem) vardır?',
        options: [
          { id: 'A', text: 'Bugün bütün gün odasından çıkmadı.' },
          { id: 'B', text: 'Onun bu söylediklerine kimse inanmaz.' },
          { id: 'C', text: 'Çocukken saatlerce sokakta oynardık.' },
          { id: 'D', text: 'Sınava girmeden önce mutlaka notlarına bak.' },
          { id: 'E', text: 'Yarınki toplantı için hazırlık yapmalıyım.' }
        ],
        correctOptionId: 'C',
        explanation: 'Birleşik zamanlı fiiller iki kip eki alır. "Oynardık" (oyna-r-dı-k) fiili geniş zamanın (-r) hikayesi (-dı) ile çekimlenmiştir.'
      },
      {
        id: 'q-fl-2-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'En sevdiği spor dalı yüzmeydi.' },
          { id: 'B', text: 'Okula gitmediği için evde canı sıkılıyordu.' },
          { id: 'C', text: 'Köyün havası çok temiz ve serindi.' },
          { id: 'D', text: 'Babası eskiden tanınmış bir doktormuş.' },
          { id: 'E', text: 'Bütün sorunların kaynağı bu eski arabadır.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde ek fiil isimlere (yüzme, serin, doktor, araba) gelerek onları yüklem yapmıştır. B seçeneğinde ise ek fiil basit zamanlı fiile (sıkılı-yor-du) gelerek onu birleşik zamanlı yapmıştır.'
      },
      {
        id: 'q-fl-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tezlik fiili" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Misafirler gelince evi çabucak temizleyiverdi.' },
          { id: 'B', text: 'Bu zor soruyu sadece öğretmen çözebilir.' },
          { id: 'C', text: 'Siz önden gide durun, biz yetişiriz.' },
          { id: 'D', text: 'Korkudan ne yapacağını bilemeyip donakaldı.' },
          { id: 'E', text: 'Ayağı kayınca havuzun içine düşeyazdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tezlik fiili fiile "i-ver" eklenerek oluşturulur. "Temizleyi-ver-di" tezlik birleşik fiilidir.'
      },
      {
        id: 'q-fl-2-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yardımcı eylemle kurulmuş birleşik fiil kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Hastayı hemen en yakın hastaneye sevk ettiler.' },
          { id: 'B', text: 'Bu güzel hediye için sana çok teşekkür ederim.' },
          { id: 'C', text: 'Çocuk parkta oynarken aniden kayboldu.' },
          { id: 'D', text: 'O, yıllarca bu şirkette başarıyla çalıştı.' },
          { id: 'E', text: 'Bütün itirazlarına rağmen teklifi kabul etti.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çalıştı" fiili türemiş bir fiildir (çalış-mak). Diğer seçeneklerdeki sevk et-, teşekkür et-, kaybol- ve kabul et- yardımcı eylemle (et-, ol-) kurulmuş birleşik fiillerdir.'
      },
      {
        id: 'q-fl-2-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde anlamca kaynaşmış (deyimleşmiş) birleşik fiil vardır?',
        options: [
          { id: 'A', text: 'Sözlerimi dinlemedi, başını alıp gitti.' },
          { id: 'B', text: 'Onu görünce bütün dertlerimi unutuverdim.' },
          { id: 'C', text: 'Yüzünde güller açıyor, mutlu olduğu belli.' },
          { id: 'D', text: 'Yardım edeceğine söz vermişti, ama gelmedi.' },
          { id: 'E', text: 'Gece boyunca yıldızları seyrettik.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yüzünde güller açmak" bir deyimdir ve anlamca kaynaşmış birleşik fiil olarak kabul edilir.'
      },
      {
        id: 'q-fl-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kurallı birleşik fiillerden "sürerlik fiili" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Haberi alınca sevinçten havalara uçtu.' },
          { id: 'B', text: 'Bu gelenek yüzyıllardır yapıla gelmiştir.' },
          { id: 'C', text: 'Yemeğini bitirip çayını içi verdi.' },
          { id: 'D', text: 'Dikkatsizliği yüzünden kaza yapabilirdi.' },
          { id: 'E', text: 'Merdivenlerden inerken yuvarlanayazdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürerlik fiili "-e dur, -e kal, -e gel" yardımcı fiilleriyle yapılır. "Yapıla gelmiştir" fiili eylemin devam ettiğini (sürerlik) bildirir.'
      },
      {
        id: 'q-fl-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde istek kipinin hikayesiyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Keşke biraz daha erken gelseydik.' },
          { id: 'B', text: 'Bunu ona daha uygun bir dille anlataydın.' },
          { id: 'C', text: 'Yarınki sınava mutlaka çalışmalısın.' },
          { id: 'D', text: 'O da bizimle tatile gidecekmiş.' },
          { id: 'E', text: 'Herkes kurallara tam olarak uysun.' }
        ],
        correctOptionId: 'B',
        explanation: 'İstek kipi (-e / -a) ve hikaye ek fiili (-di) birleştiğinde istek kipinin hikayesi olur. B seçeneğinde "anlat-a-ydı-n" (anlat-a-idi-n) fiili istek kipinin hikayesidir. A seçeneği şartın hikayesidir.'
      },
      {
        id: 'q-fl-2-19',
        difficulty: 'medium',
        questionText: 'Ek fiil "-dır/-dir" aşağıdaki cümlelerin hangisine kesinlik anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Belki de şu an o da bizi düşünüyordur.' },
          { id: 'B', text: 'Sınav bitmiştir, herkes kalemleri bıraksın.' },
          { id: 'C', text: 'Şimdi memlekette kirazlar çiçek açmıştır.' },
          { id: 'D', text: 'Bugün hava çok soğuk, bence hastalanmıştır.' },
          { id: 'E', text: 'Eminim, çoktan uykuya dalmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Sınav bitmiştir" ifadesi kesin, değişmez bir kuralı/durumu bildirir (kesinlik). Diğer seçeneklerde ihtimal, tahmin anlamı vardır.'
      },
      {
        id: 'q-fl-2-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olmak" kelimesi yardımcı fiil olarak değil, asıl eylem (fiil) olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Son günlerde işler yüzünden çok yorgun oldu.' },
          { id: 'B', text: 'Onun bu söylediklerine hepimiz çok üzüldük, kahrolduk.' },
          { id: 'C', text: 'Akşam üzeri gökyüzünde rengarenk bir gökkuşağı oldu.' },
          { id: 'D', text: 'Ailesi onay vermeyince nişanları iptal oldu.' },
          { id: 'E', text: 'Çocuk hastalanınca hemen tedavi oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "oldu" kelimesi "meydana geldi, ortaya çıktı" anlamında asıl fiil olarak kullanılmıştır. Diğer seçeneklerde isim soylu kelimelerle birleşerek (yorgun ol-, kahrol-, iptal ol-, tedavi ol-) birleşik fiil oluşturmuştur.'
      }
    ]
  },
  {
    id: 'test-fiiller-2-zor',
    title: 'Fiiller 2 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (21-30)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-fl-2-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman kayması (anlam kayması)" şimdiki zaman kipinin, geniş zaman anlamında kullanılmasıyla gerçekleşmiştir?',
        options: [
          { id: 'A', text: 'Keloğlan bir gün kasabaya iner ve pazarı dolaşır.' },
          { id: 'B', text: 'Bizim takım yarın çok önemli bir maça çıkıyor.' },
          { id: 'C', text: 'Her pazar sabahı ailesiyle kahvaltı yapıyor.' },
          { id: 'D', text: 'Dün akşam olanları bana şimdi anlatıyorsun.' },
          { id: 'E', text: '1923 yılında Cumhuriyet ilan edilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde fiil şimdiki zaman kipiyle (-yor) çekimlenmiştir, ancak "her pazar" ifadesinden dolayı eylem aslında geniş zamanı ifade etmektedir.'
      },
      {
        id: 'q-fl-2-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zaman eki olan 3. tekil şahıs "-dır / -dir" bazen cümlede kullanılmaz (düşer) ancak anlamca orada olduğu bilinir. Aşağıdaki cümlelerin hangisinde bu kurala uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Hava dünden beri oldukça soğuktu.' },
          { id: 'B', text: 'Son yazdığı romanın dili oldukça ağır.' },
          { id: 'C', text: 'Yıllar önce bu kasabada öğretmenmiş.' },
          { id: 'D', text: 'O, mahallenin en çalışkan genciydi.' },
          { id: 'E', text: 'Sınavın bu kadar zor olacağını beklemiyordum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "ağır" ismidir. Normalde "ağırdır" olması gerekirken "-dır" ek fiili düşmüştür. Diğer isim cümlelerinde ek fiiller (soğuktu, öğretmenmiş, genciydi) açıkça kullanılmıştır.'
      },
      {
        id: 'q-fl-2-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu yoktur?',
        options: [
          { id: 'A', text: 'Bu ağır yükü tek başıma taşıyamam.' },
          { id: 'B', text: 'Onun böyle bir hata yapacağını sanmıyorum.' },
          { id: 'C', text: 'Akşamki yemeğe ne yazık ki katılamayacağım.' },
          { id: 'D', text: 'Bu karmaşık soruyu kimse çözemedi.' },
          { id: 'E', text: 'Duyduklarıma uzun süre inanamadım.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeterlik fiilinin olumsuzu fiile gelen "ama/eme" ekleriyle yapılır. Taşıy-a-mam, katıl-a-mayacağım, çöz-e-medi, inan-a-madım yeterlik fiilinin olumsuzudur. B seçeneğindeki "san-mı-yorum" ise "sanmak" fiilinin şimdiki zaman olumsuzudur (yeterlik anlamı yoktur, sanamam olsaydı yeterlik olurdu).'
      },
      {
        id: 'q-fl-2-24',
        difficulty: 'hard',
        questionText: 'Bir eylemin hem türemiş hem de birleşik zamanlı olması için, eylemin yapım eki aldıktan sonra iki kip eki ile çekimlenmesi gerekir. Aşağıdakilerin hangisinde bu kurala uyan bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Söylenenleri hiç umursamıyordu.' },
          { id: 'B', text: 'Bahçedeki kuru yaprakları süpürdü.' },
          { id: 'C', text: 'Arkadaşının başarısını çok kıskanmış.' },
          { id: 'D', text: 'Sabahları mutlaka süt içerdi.' },
          { id: 'E', text: 'Bütün evi baştan aşağı temizlettik.' }
        ],
        correctOptionId: 'A',
        explanation: '"Umursamıyordu" fiili um-maktan um-ur, um-ur-sa (yapım ekleri) alarak türemiş fiil olmuş, sonra da şimdiki zaman (-yor) ve hikaye ek fiili (-du) alarak birleşik zamanlı olmuştur. C ve E sadece basit zamanlıdır. B basit eylemdir. D türemiş değildir (iç-er-di basit yapılı, birleşik zamanlıdır).'
      },
      {
        id: 'q-fl-2-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde ek fiil (ek eylem) şarta bağlılık anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Biraz daha beklersen hepimiz gideceğiz.' },
          { id: 'B', text: 'Hava güzelse dışarıda oturalım.' },
          { id: 'C', text: 'Oraya gidersen beni mutlaka ara.' },
          { id: 'D', text: 'Bunu yaparsan beni çok üzersin.' },
          { id: 'E', text: 'Keşke sen de benimle gelsen.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ek fiilin şartı isimlere "-se / -sa" getirilerek yapılır. B seçeneğinde "güzel" ismine "-se" ek fiili gelmiştir. A, C ve D seçeneklerinde fiillere (bekle-r-se-n, git-er-se-n, yap-ar-sa-n) şart kipi gelmiştir ve bu fiillerde şarta bağlılık birleşik zamanla sağlanmıştır. B şıkkında ise isme geldiği için doğrudan ek fiilin şartı olarak görev yapar.'
      },
      {
        id: 'q-fl-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili eylemin yapısı yanlış verilmiştir?',
        options: [
          { id: 'A', text: 'Eskimiş elbiseleri çöpe *attı*. (Basit Eylem)' },
          { id: 'B', text: 'Bütün soruları kolayca *çözüverdi*. (Birleşik Eylem)' },
          { id: 'C', text: 'Onu gördüğümde hemen *tanıdım*. (Türemiş Eylem)' },
          { id: 'D', text: 'Çocuk bahçede köpekleri *seviyor*. (Basit Eylem)' },
          { id: 'E', text: 'Sorunları konuşarak *hallettik*. (Birleşik Eylem)' }
        ],
        correctOptionId: 'C',
        explanation: '"Tanıdım" fiili tanı-mak kökünden gelir ve yapım eki almamıştır (-dı ve -m çekim ekidir). Dolayısıyla türemiş değil, basit yapılı bir eylemdir.'
      },
      {
        id: 'q-fl-2-27',
        difficulty: 'hard',
        questionText: '"Oku-" fiilinin "Geniş zamanın rivayeti, 3. çoğul şahıs" çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Okuyacaklardı' },
          { id: 'B', text: 'Okurlardı' },
          { id: 'C', text: 'Okurlarmış' },
          { id: 'D', text: 'Okuyorlarmış' },
          { id: 'E', text: 'Okumuşlarmış' }
        ],
        correctOptionId: 'C',
        explanation: 'Geniş zaman eki "-r / -ar / -er", rivayet ek fiili "-mış / -miş", 3. çoğul şahıs eki "-lar / -ler"dir. Oku-r-lar-mış (veya oku-r-muş-lar) şeklinde çekimlenir.'
      },
      {
        id: 'q-fl-2-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yaklaşma fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gözlerimi ondan bir an bile ayıramadım.' },
          { id: 'B', text: 'Bütün işleri tek başına yapıverdi.' },
          { id: 'C', text: 'Korkudan nefesim kesileyazdı.' },
          { id: 'D', text: 'Bana da bir çay koyadur, geliyorum.' },
          { id: 'E', text: 'Onu karşımda görünce donakaldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaklaşma fiili eylemin gerçekleşmesine çok az kaldığını bildirir ve "-e yazmak" ile kurulur. "Kesile-yazdı" fiili yaklaşma fiilidir.'
      },
      {
        id: 'q-fl-2-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmamıştır?',
        options: [
          { id: 'A', text: 'İçerisi eskisinden çok daha aydınlıktı.' },
          { id: 'B', text: 'Sınava çalışan tek kişi bendim.' },
          { id: 'C', text: 'Onun dedikleri her zaman doğru çıkar.' },
          { id: 'D', text: 'Yüzünde tatlı bir tebessüm vardı.' },
          { id: 'E', text: 'Çocukluk günlerimiz ne kadar güzelmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinin yüklemi "çıkmak" eyleminin geniş zamanıyla (çık-ar) çekimlenmiştir, yani basit zamanlı fiildir ve ek fiil yoktur. A (aydınlıktı), B (bendim), D (vardı), E (güzelmiş) isim soylu sözcüklere gelmiş ek fiillerdir.'
      },
      {
        id: 'q-fl-2-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerde yer alan fiillerden hangisi sadece çekim eki almıştır (basit yapılıdır)?',
        options: [
          { id: 'A', text: 'Susuzluktan bütün çiçekler *sararmış*.' },
          { id: 'B', text: 'Uykusuzluktan gözleri iyice *kızardı*.' },
          { id: 'C', text: 'Haberi alınca sevinçle bize *sarıldı*.' },
          { id: 'D', text: 'Sonbaharda bütün kuşlar güneye *göçer*.' },
          { id: 'E', text: 'Düşmanı çok uzaklardan *gözetlerdi*.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "göçer" fiili göç-mek köküne sadece geniş zaman (-er) çekim eki gelmiştir (basit yapılıdır). A\'da sarı-ar, B\'de kızıl-ar, C\'de sar-ıl, E\'de göz-et-le yapım ekleri alarak türemişlerdir.'
      }
    ]
  }
];
