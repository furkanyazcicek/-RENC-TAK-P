export default [
  {
    id: 'test-ogeler-11-kolay',
    title: 'Cümlenin Ögeleri 11 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-co-11-1',
        difficulty: 'easy',
        questionText: '"Denizin dalgaları kıyıdaki kayalıklara şiddetle çarpıyordu." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'kıyıdaki kayalıklara' },
          { id: 'B', text: 'şiddetle' },
          { id: 'C', text: 'çarpıyordu' },
          { id: 'D', text: 'Denizin dalgaları' },
          { id: 'E', text: 'şiddetle çarpıyordu' }
        ],
        correctOptionId: 'C',
        explanation: 'Yargı bildiren çekimli fiil "çarpıyordu" kelimesidir ve cümlenin yüklemidir.'
      },
      {
        id: 'q-co-11-2',
        difficulty: 'easy',
        questionText: '"Bahçedeki kırmızı güller bu sabah çok güzel kokuyordu." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'güller' },
          { id: 'B', text: 'kırmızı güller' },
          { id: 'C', text: 'Bahçedeki kırmızı güller' },
          { id: 'D', text: 'bu sabah' },
          { id: 'E', text: 'çok güzel' }
        ],
        correctOptionId: 'C',
        explanation: 'kokuyordu (yüklem). Kokan ne? "Bahçedeki kırmızı güller" (özne). Sıfat tamlaması olduğu için bütünüyle alınır.'
      },
      {
        id: 'q-co-11-3',
        difficulty: 'easy',
        questionText: '"Eski dostum bana güzel bir hediye almış." cümlesinde belirtisiz nesne hangisidir?',
        options: [
          { id: 'A', text: 'Eski dostum' },
          { id: 'B', text: 'bana' },
          { id: 'C', text: 'güzel bir' },
          { id: 'D', text: 'hediye' },
          { id: 'E', text: 'güzel bir hediye' }
        ],
        correctOptionId: 'E',
        explanation: 'almış (yüklem). Kim almış? Eski dostum (özne). Ne almış? "güzel bir hediye" (belirtisiz nesne). Sıfat tamlaması olduğu için kelimeler birbirinden ayrılamaz.'
      },
      {
        id: 'q-co-11-4',
        difficulty: 'easy',
        questionText: '"Kimi" ve "Neyi" soruları eyleme sorulduğunda hangi ögeyi buldurur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'C',
        explanation: 'İsmin belirtme hâl ekini (-i, -ı) almış olan "Kimi" ve "Neyi" soruları Belirtili Nesneyi buldurur.'
      },
      {
        id: 'q-co-11-5',
        difficulty: 'easy',
        questionText: '"Yağmur durduktan sonra gökkuşağı rengârenk açtı." cümlesinde zarf tümleci hangisidir?',
        options: [
          { id: 'A', text: 'Yağmur durduktan sonra' },
          { id: 'B', text: 'gökkuşağı' },
          { id: 'C', text: 'rengârenk' },
          { id: 'D', text: 'Yağmur durduktan sonra - rengârenk' },
          { id: 'E', text: 'açtı' }
        ],
        correctOptionId: 'D',
        explanation: 'açtı (yüklem). Ne zaman açtı? "Yağmur durduktan sonra" (zarf tümleci). Nasıl açtı? "rengârenk" (zarf tümleci). Her ikisi de zarf tümlecidir.'
      },
      {
        id: 'q-co-11-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç vardır?',
        options: [
          { id: 'A', text: 'Bütün gece uyumadan ders çalıştı.' },
          { id: 'B', text: 'Odasının penceresinden sokağı izliyordu.' },
          { id: 'C', text: 'Hızlı adımlarla yürüdü.' },
          { id: 'D', text: 'Dünkü sınavı başarıyla geçti.' },
          { id: 'E', text: 'Kitabını yarın geri getirecek.' }
        ],
        correctOptionId: 'B',
        explanation: 'izliyordu (yüklem). Nereden izliyordu? "Odasının penceresinden" (ismin -den hâlini alan bu söz öbeği dolaylı tümleçtir).'
      },
      {
        id: 'q-co-11-7',
        difficulty: 'easy',
        questionText: '"Kardeşim dondurmayı çok sever." cümlesinde "dondurmayı" kelimesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'C',
        explanation: 'sever (yüklem). Neyi sever? "dondurmayı" (ismin -i hâlini aldığı için belirtili nesnedir).'
      },
      {
        id: 'q-co-11-8',
        difficulty: 'easy',
        questionText: '"Masadaki bardak bir anda yere düştü." cümlesinin öge dizilişi hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'B', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'E', text: 'Özne - Belirtisiz Nesne - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'düştü (yüklem). Düşen ne? Masadaki bardak (özne). Ne zaman / Nasıl? bir anda (zarf tümleci). Nereye? yere (dolaylı tümleç). Sıralama: Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem.'
      },
      {
        id: 'q-co-11-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisinin yüklemi isimdir?',
        options: [
          { id: 'A', text: 'Sokaktaki köpek sabaha kadar havladı.' },
          { id: 'B', text: 'Kitabını masanın üzerine bıraktı.' },
          { id: 'C', text: 'Gökyüzü bugün çok bulutlu.' },
          { id: 'D', text: 'Rüzgâr şiddetli bir şekilde esiyor.' },
          { id: 'E', text: 'Pencereyi hemen kapatmalısın.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "bulutludur" sözcüğündeki ek-fiilin düşmüş hâli olan "bulutlu" kelimesidir. İsim soylu bir kelime yüklem olmuştur.'
      },
      {
        id: 'q-co-11-10',
        difficulty: 'easy',
        questionText: '"Bugünlerde beni kimse anlamıyor." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'anlamıyor (yüklem). Kim anlamıyor? kimse (özne). Kimi anlamıyor? beni (belirtili nesne). Ne zaman? Bugünlerde (zarf tümleci). Dolaylı tümleç cümlede yoktur.'
      }
    ]
  },
  {
    id: 'test-ogeler-11-orta',
    title: 'Cümlenin Ögeleri 11 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (111-120)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-co-11-11',
        difficulty: 'medium',
        questionText: '"Ağacın kurumuş dallarını kesen adam, yorgun argın çimlere uzandı." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'adam' },
          { id: 'B', text: 'kurumuş dallarını kesen adam' },
          { id: 'C', text: 'Ağacın kurumuş dallarını kesen adam' },
          { id: 'D', text: 'Ağacın kurumuş dallarını kesen' },
          { id: 'E', text: 'yorgun argın' }
        ],
        correctOptionId: 'C',
        explanation: 'uzandı (yüklem). Uzanan kim? "Ağacın kurumuş dallarını kesen adam" (özne). İçinde sıfat-fiil barındıran uzun bir sıfat tamlamasıdır.'
      },
      {
        id: 'q-co-11-12',
        difficulty: 'medium',
        questionText: '"İçeri" sözcüğü aşağıdaki cümlelerin hangisinde dolaylı tümleç (yer tamlayıcısı) görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sıcaktan bunalınca hemen içeri kaçtılar.' },
          { id: 'B', text: 'Çocuklar içeri gelsin.' },
          { id: 'C', text: 'Kapıyı açıp yavaşça içeriye girdi.' },
          { id: 'D', text: 'Sesi duyar duymaz içeri koştum.' },
          { id: 'E', text: 'Birazdan herkes içeri toplanacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yer-yön bildiren kelimeler ismin yönelme (-e), bulunma (-de) ya da ayrılma (-den) eklerinden birini alırsa dolaylı tümleç olur. Yalın hâlde olduklarında zarf tümlecidir. C seçeneğinde "içeriye" sözcüğü yönelme eki (-e) aldığı için dolaylı tümleçtir.'
      },
      {
        id: 'q-co-11-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı özneyi buldurmaya yöneliktir?',
        options: [
          { id: 'A', text: 'Oraya saat kaçta gideceğiz?' },
          { id: 'B', text: 'Dünkü kazayı sana kim anlattı?' },
          { id: 'C', text: 'Dolaptan neyi çıkardın?' },
          { id: 'D', text: 'Toplantı hangi salonda yapılacak?' },
          { id: 'E', text: 'Bu elbiseyi ne kadara aldın?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "kim" sorusu eylemi (anlatma işini) yapanı buldurmaya yöneliktir, bu yüzden özneyi buldurur.'
      },
      {
        id: 'q-co-11-14',
        difficulty: 'medium',
        questionText: '"Kısa süreliğine yağan bahar yağmuru, toprağın o güzel kokusunu ortaya çıkardı." cümlesinde "toprağın o güzel kokusunu" ögesi hangisidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'C',
        explanation: 'ortaya çıkardı (yüklem). Ortaya çıkaran ne? Kısa süreliğine yağan bahar yağmuru (özne). Neyi ortaya çıkardı? "toprağın o güzel kokusunu" (belirtili nesne - ismin -i belirtme hâlini almıştır).'
      },
      {
        id: 'q-co-11-15',
        difficulty: 'medium',
        questionText: 'Türkçede fiil cümlelerinde vurgu, yüklemden hemen önceki ögededir. Aşağıdaki cümlelerin hangisinde vurgulanan öge zarf tümlecidir?',
        options: [
          { id: 'A', text: 'Ahmet yarın Ankara\'ya gidecekmiş.' },
          { id: 'B', text: 'Babam sabahları gazete okur.' },
          { id: 'C', text: 'Yeni gelen öğrenciyi herkes çok sevdi.' },
          { id: 'D', text: 'Kardeşim soruları çabucak çözdü.' },
          { id: 'E', text: 'Beni en çok bu yalnızlık korkutuyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde: çözdü (yüklem). Nasıl çözdü? "çabucak" (zarf tümleci). Yüklemden hemen önce yer aldığı için vurgulanan öge zarf tümlecidir. A\'da Dolaylı T., B\'de Nesne, C\'de Zarf T (çok), E\'de Özne vurgulanmıştır. (C\'de de "çok" zarf tümlecidir ancak D seçeneğinde nitelik bildiren durum zarfı net verilmiştir).'
      },
      {
        id: 'q-co-11-16',
        difficulty: 'medium',
        questionText: '"Onu, yıllardır görmediğim asker arkadaşımı, sokakta hemen tanıdım." cümlesindeki ara söz, hangi ögenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Öznenin' },
          { id: 'B', text: 'Dolaylı Tümlecin' },
          { id: 'C', text: 'Zarf Tümlecinin' },
          { id: 'D', text: 'Yüklemin' },
          { id: 'E', text: 'Belirtili Nesnenin' }
        ],
        correctOptionId: 'E',
        explanation: 'tanıdım (yüklem). Kimi tanıdım? "Onu" (belirtili nesne). "yıllardır görmediğim asker arkadaşımı" ara sözü de belirtili nesneyi açıklamaktadır.'
      },
      {
        id: 'q-co-11-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman" anlamı taşıyan sözcük zarf tümleci DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Akşam, ailenin bir araya geldiği en güzel vakittir.' },
          { id: 'B', text: 'Sabah erkenden yola çıkmalıyız.' },
          { id: 'C', text: 'Yarın bu işleri mutlaka bitireceğim.' },
          { id: 'D', text: 'Kışın burada hayat durma noktasına gelir.' },
          { id: 'E', text: 'Gece dışarıda tuhaf sesler duyuluyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: ailenin bir araya geldiği en güzel vakittir (yüklem). Ailenin bir araya geldiği en güzel vakit olan ne? "Akşam" (özne). Zaman bildiren "Akşam" kelimesi burada cümlede ne zaman sorusuna değil "ne" sorusuna cevap vererek özne olmuştur.'
      },
      {
        id: 'q-co-11-18',
        difficulty: 'medium',
        questionText: '"Küçük çocuk, elindeki kırmızı elmayı iştahla yiyordu." cümlesinin ögeleri sırasıyla hangisinde verilmiştir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Belirtisiz Nesne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'yiyordu (yüklem). Yiyen kim? Küçük çocuk (özne). Neyi yiyordu? elindeki kırmızı elmayı (belirtili nesne). Nasıl yiyordu? iştahla (zarf tümleci/edat tümleci). Sıralama: Özne - Belirtili Nesne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-11-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "niçin" sorusuna cevap veren edat grubu zarf tümleci olmuştur?',
        options: [
          { id: 'A', text: 'O, başarıya ulaşmak için elinden geleni yaptı.' },
          { id: 'B', text: 'Oraya benimle gelmeni istiyorum.' },
          { id: 'C', text: 'Bütün bu çiçekleri senin için aldım.' },
          { id: 'D', text: 'Annemle birlikte alışverişe gittik.' },
          { id: 'E', text: 'Sözleri kadar keskin bir bakışı vardı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "başarıya ulaşmak için" edat grubu, eylemin (yapmasının) amacını/nedenini bildirir ve zarf tümleci görevindedir. C\'de "senin için" kimin için sorusuna cevap verir (edat tümleci).'
      },
      {
        id: 'q-co-11-20',
        difficulty: 'medium',
        questionText: '"Uzun kavakların gölgesi, yorgun yolculara bir dinlenme yeri sunuyordu." cümlesinde hangi öge YER ALMAZ?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtisiz Nesne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'sunuyordu (yüklem). Sunan ne? Uzun kavakların gölgesi (özne). Kime? yorgun yolculara (dolaylı tümleç). Ne sunuyordu? bir dinlenme yeri (belirtisiz nesne). Cümlede zarf tümleci yoktur.'
      }
    ]
  },
  {
    id: 'test-ogeler-11-zor',
    title: 'Cümlenin Ögeleri 11 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (121-130)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-co-11-21',
        difficulty: 'hard',
        questionText: '"Bozkırın ortasında tek başına duran bu yaşlı meşe ağacı, geçmişten geleceğe bir köprü gibiydi." cümlesinin yüklemi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'gibiydi' },
          { id: 'B', text: 'bir köprü gibiydi' },
          { id: 'C', text: 'geçmişten geleceğe bir köprü gibiydi' },
          { id: 'D', text: 'yaşlı meşe ağacı köprü gibiydi' },
          { id: 'E', text: 'geleceğe bir köprü gibiydi' }
        ],
        correctOptionId: 'C',
        explanation: 'Edat grupları ve tamlamalar bölünemez. "geçmişten geleceğe bir köprü gibi(ydi)" ifadesinin tamamı ek-fiil alarak isim cümlesinin yüklemi olmuştur.'
      },
      {
        id: 'q-co-11-22',
        difficulty: 'hard',
        questionText: '"Yüreğinde taşıdığı bu derin sevgi, onu karanlık günlerinde hayata bağlayan yegâne güçtü." cümlesinde hangi ögeler yer almaktadır?',
        options: [
          { id: 'A', text: 'Özne - Yüklem' },
          { id: 'B', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'C', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'onu karanlık günlerinde hayata bağlayan yegâne güçtü (yüklem - uzun bir sıfat tamlamasıdır). Onu karanlık günlerinde hayata bağlayan yegâne güç olan ne? "Yüreğinde taşıdığı bu derin sevgi" (özne). Cümle sadece özne ve yüklemden oluşur.'
      },
      {
        id: 'q-co-11-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "cümlenin ögesi olmayan" (cümle dışı unsur) bir bağlaç kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ahmet ve Mehmet dün bize geldiler.' },
          { id: 'B', text: 'Hem okuyor hem de çalışıyordu.' },
          { id: 'C', text: 'Fakat bütün bu olanları sana kim anlattı?' },
          { id: 'D', text: 'Kitabını da defterini de evde unutmuş.' },
          { id: 'E', text: 'Benimle ya sinemaya gelirsin ya da evde oturursun.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Fakat" bağlacı, cümlenin anlamını önceki cümleye bağlar ancak cümlenin kendi içinde herhangi bir ögesi (özne, nesne, yüklem vb.) değildir. Cümle dışı unsurdur. (Diğer seçeneklerdeki bağlaçlar ögeleri -özneyi, nesneyi- birbirine bağlamış ve grubun içine dahil olmuştur).'
      },
      {
        id: 'q-co-11-24',
        difficulty: 'hard',
        questionText: '"Sabahın ilk ışıklarıyla birlikte sokağa dökülen kalabalık, hayatın bitmek bilmeyen koşuşturmacasına çoktan karışmıştı." cümlesinin öge dizilişi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'C', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Dolaylı Tümleç - Özne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'karışmıştı (yüklem). Karışan kim/ne? Sabahın ilk ışıklarıyla birlikte sokağa dökülen kalabalık (özne). Neye karışmıştı? hayatın bitmek bilmeyen koşuşturmacasına (dolaylı tümleç). Ne zaman? çoktan (zarf tümleci). Sıralama: Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-11-25',
        difficulty: 'hard',
        questionText: '"Edilgen çatılı eylemlerin bulunduğu cümlelerde, eylemden etkilenen nesne sözde özne görevindedir." Buna göre hangisinde sözde özne kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kuşlar havalar soğuyunca sıcak ülkelere göçtü.' },
          { id: 'B', text: 'Adam aynanın karşısında uzun süre tarandı.' },
          { id: 'C', text: 'Yol kenarındaki çöpler sabah erkenden toplandı.' },
          { id: 'D', text: 'Çocuk yeni oyuncağını görünce çok sevindi.' },
          { id: 'E', text: 'Arkadaşım sınavı kazandığı için çok sevindi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "toplandı" (toplanmak) edilgen çatılıdır. Çöpleri toplayan belli değildir, eylemden etkilenen "Yol kenarındaki çöpler" sözde öznedir. B, D ve E seçenekleri dönüşlü çatılı, A etken çatılıdır ve gerçek özneye sahiptirler.'
      },
      {
        id: 'q-co-11-26',
        difficulty: 'hard',
        questionText: '"Karanlık bir gecede gökyüzündeki yıldızları seyretmek insana tarifsiz bir huzur verir." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'gökyüzündeki yıldızları seyretmek' },
          { id: 'B', text: 'Karanlık bir gecede gökyüzündeki yıldızları seyretmek' },
          { id: 'C', text: 'insana' },
          { id: 'D', text: 'tarifsiz bir huzur' },
          { id: 'E', text: 'yıldızları seyretmek' }
        ],
        correctOptionId: 'B',
        explanation: 'huzur verir (yüklem - deyim). Huzur veren ne? "Karanlık bir gecede gökyüzündeki yıldızları seyretmek" (özne). Bu bir isim-fiil (seyretmek) grubudur ve tüm sözcükleriyle birlikte özne görevini üstlenmiştir.'
      },
      {
        id: 'q-co-11-27',
        difficulty: 'hard',
        questionText: '"Hiçbir zaman gerçekleşmeyecek hayallerin peşinden koşmak, sadece zaman kaybıdır." cümlesindeki "sadece zaman kaybıdır" ifadesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zarf Tümleci ve Yüklem' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Belirtisiz Nesne ve Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'C',
        explanation: 'zaman kaybıdır (yüklem). Sadece zaman kaybı olan ne? "Hiçbir zaman gerçekleşmeyecek hayallerin peşinden koşmak" (özne). "Sadece" edatı yüklem öbeğinin içine dâhildir, bu nedenle tamamı yüklemdir.'
      },
      {
        id: 'q-co-11-28',
        difficulty: 'hard',
        questionText: '"Eskiden bu mahallede yaşayan herkes birbirini tanırdı." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'C',
        explanation: 'tanırdı (yüklem). Tanıyan kim? "Eskiden bu mahallede yaşayan herkes" (özne - Eskiden kelimesi yaşayan sıfat-fiiline bağlı olduğu için özne grubunun içindedir). Kimi tanırdı? "birbirini" (belirtili nesne). Dolaylı tümleç ve zarf tümleci yoktur (Eskiden tek başına alınırsa zarf tümleci olur ama burada fiilimsiye bağlıdır. Fakat eğer "Eskiden" ana yükleme bağlı ZT kabul edilirse Zarf Tümleci vardır. Dolaylı tümleç kesinlikle yoktur).'
      },
      {
        id: 'q-co-11-29',
        difficulty: 'hard',
        questionText: '"Genç adam, gözlerindeki o masum ifadeyi hiçbir zaman kaybetmemişti." cümlesinde vurgulanan öge aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Zarf Tümleci' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'kaybetmemişti (yüklem). Ne zaman kaybetmemişti? "hiçbir zaman" (zarf tümleci). Fiil cümlesinde vurgu yüklemden bir önceki ögededir, burada zarf tümleci vurgulanmıştır.'
      },
      {
        id: 'q-co-11-30',
        difficulty: 'hard',
        questionText: '"Uzun zamandır okumak istediği o kalın kitabı, nihayet masasının üzerine koyup kapağını araladı." cümlesinde altı çizili veya vurgulu olan "Uzun zamandır okumak istediği o kalın kitabı" ifadesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Belirtisiz Nesne' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'D',
        explanation: 'araladı (yüklem). Kim? O (gizli özne). Neyi araladı? "Uzun zamandır okumak istediği o kalın kitabı" (belirtili nesne - cümlenin anlam akışında kapağını araladığı şey kitaptır, -i belirtme hâlini almıştır).'
      }
    ]
  }
];
