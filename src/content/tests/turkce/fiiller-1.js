export default [
  {
    id: 'test-fiiller-1-kolay',
    title: 'Fiiller 1 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-fl-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem (fiil) yoktur?',
        options: [
          { id: 'A', text: 'Sabahları erken kalkar.' },
          { id: 'B', text: 'Bugün hava çok güzeldi.' },
          { id: 'C', text: 'Kitabını masada unuttu.' },
          { id: 'D', text: 'Yarın sinemaya gideceğiz.' },
          { id: 'E', text: 'Soruları dikkatlice çözdü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bugün hava çok güzeldi" cümlesinin yüklemi "güzeldi" kelimesidir. "Güzel" kelimesi isim soylu bir sözcüktür, eylem değildir. Diğer seçeneklerde "kalkar", "unuttu", "gideceğiz", "çözdü" sözcükleri birer eylemdir.'
      },
      {
        id: 'q-fl-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin yüklemi haber (bildirme) kiplerinden biriyle çekimlenmemiştir?',
        options: [
          { id: 'A', text: 'Her hafta sonu tiyatroya gideriz.' },
          { id: 'B', text: 'Dün akşam misafirlerimiz geldi.' },
          { id: 'C', text: 'Odanı hemen temizle!' },
          { id: 'D', text: 'Bütün ödevlerini bitirmiş.' },
          { id: 'E', text: 'Birazdan toplantı başlayacak.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde sırasıyla geniş zaman, bilinen geçmiş zaman, duyulan geçmiş zaman ve gelecek zaman kipleri (haber kipleri) kullanılmıştır. C seçeneğinde "temizle" eylemi emir kipiyle (dilek kipi) çekimlenmiştir.'
      },
      {
        id: 'q-fl-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dilek (tasarlama) kiplerinden biriyle çekimlenlanmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Bu akşam kitap okuyacağım.' },
          { id: 'B', text: 'Arkadaşlarımla dışarı çıkıyorum.' },
          { id: 'C', text: 'Sınavlarına daha çok çalışmalısın.' },
          { id: 'D', text: 'Eskiden bu mahallede otururduk.' },
          { id: 'E', text: 'Kar yağınca her yer bembeyaz oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "çalışmalısın" fiili gereklilik kipiyle (-malı/-meli) çekimlenmiştir ve gereklilik kipi bir dilek kipidir.'
      },
      {
        id: 'q-fl-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki fiillerden hangisi "oluş" bildirmektedir?',
        options: [
          { id: 'A', text: 'Ağlamak' },
          { id: 'B', text: 'Uyumak' },
          { id: 'C', text: 'Sararmak' },
          { id: 'D', text: 'Taşımak' },
          { id: 'E', text: 'Kırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Oluş fiilleri öznenin kendi iradesi dışında, zamanla kendiliğinden meydana gelen değişimi ifade eder. "Sararmak" bu tanıma uyar. "Ağlamak" ve "Uyumak" durum fiili, "Taşımak" ve "Kırmak" iş (kılış) fiilidir.'
      },
      {
        id: 'q-fl-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili fiillerden hangisi "iş (kılış)" fiilidir?',
        options: [
          { id: 'A', text: 'Bütün gün kanepede *oturdu*.' },
          { id: 'B', text: 'Güneşte kalan elmalar *çürümüş*.' },
          { id: 'C', text: 'Çocuk erkenden *uyandı*.' },
          { id: 'D', text: 'Teyzem bize güzel bir pasta *yapmış*.' },
          { id: 'E', text: 'Ağaçların yaprakları *dökülüyor*.' }
        ],
        correctOptionId: 'D',
        explanation: 'İş fiilleri nesne alabilen fiillerdir. "Neyi, kimi?" sorularına cevap verirler. D seçeneğinde "neyi yapmış?" sorusuna "pasta" cevabı verilebildiği için "yapmak" iş fiilidir. Diğerleri durum ve oluş fiilleridir.'
      },
      {
        id: 'q-fl-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiil, birinci çoğul şahıs eki almıştır?',
        options: [
          { id: 'A', text: 'Bugün çok çalıştım.' },
          { id: 'B', text: 'Yarın birlikte sinemaya gidelim.' },
          { id: 'C', text: 'Bu soruyu çözebilir misin?' },
          { id: 'D', text: 'Toplantıya zamanında yetişmişler.' },
          { id: 'E', text: 'Neden bize haber vermediniz?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gidelim" fiili "biz" (1. çoğul şahıs) zamirine uygun olarak istek kipi 1. çoğul şahıs eki (-lim) ile çekimlenmiştir.'
      },
      {
        id: 'q-fl-1-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde şimdiki zamanla çekimlenmiş bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kuşlar her sabah burada öter.' },
          { id: 'B', text: 'O da bizimle gelecektir.' },
          { id: 'C', text: 'Şu an odasında müzik dinliyor.' },
          { id: 'D', text: 'Projeyi haftaya teslim etmeliyiz.' },
          { id: 'E', text: 'Keşke biraz daha bekleseydin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "dinliyor" fiili, şimdiki zaman eki olan "-yor" ekini almıştır.'
      },
      {
        id: 'q-fl-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylemin yapıldığı zaman ile anlatıldığı zaman aynıdır?',
        options: [
          { id: 'A', text: 'Karşıdaki parkta çocuklar oynuyor.' },
          { id: 'B', text: 'Dün gece hiç uyumadım.' },
          { id: 'C', text: 'Yaz tatilinde köye gideceğiz.' },
          { id: 'D', text: 'Eskiden buralar ormanmış.' },
          { id: 'E', text: 'Her akşam süt içer.' }
        ],
        correctOptionId: 'A',
        explanation: 'Eylemin yapıldığı zaman ile anlatıldığı zamanın aynı olması şimdiki zamanı ifade eder. A seçeneğindeki "oynuyor" fiili şimdiki zamandır.'
      },
      {
        id: 'q-fl-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşamları erken yatar.' },
          { id: 'B', text: 'Elindeki kitap çok kalındı.' },
          { id: 'C', text: 'Son hızla eve koştu.' },
          { id: 'D', text: 'Gözlüğünü masaya bıraktı.' },
          { id: 'E', text: 'Çiçekleri özenle suladı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde isim soylu bir sözcük olan "kalın" sözcüğü ek fiilin bilinen geçmiş zaman ekini (-dı) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-1-10',
        difficulty: 'easy',
        questionText: '"Oku-" fiilinin şart kipi, 2. tekil şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Okumalısın' },
          { id: 'B', text: 'Okuyasın' },
          { id: 'C', text: 'Okusan' },
          { id: 'D', text: 'Okursun' },
          { id: 'E', text: 'Okudun' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart kipi eki "-sa/-se"dir. 2. tekil şahıs (sen) eki eklendiğinde fiil "oku-sa-n" şeklini alır.'
      }
    ]
  },
  {
    id: 'test-fiiller-1-orta',
    title: 'Fiiller 1 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-fl-1-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilde anlam (zaman) kayması yoktur?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya uçuyorum.' },
          { id: 'B', text: 'Keloğlan bir gün ormana gider.' },
          { id: 'C', text: 'Fatih, İstanbul\'u 1453\'te fetheder.' },
          { id: 'D', text: 'Her akşam düzenli olarak spor yapıyor.' },
          { id: 'E', text: 'Birazdan yağmur başlayacak.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Birazdan" ifadesi gelecek zamanı bildirir ve fiil de gelecek zaman eki (-acak) almıştır, bu yüzden anlam kayması yoktur. A\'da şimdiki zaman gelecek zaman yerine, B ve C\'de geniş zaman geçmiş zaman yerine, D\'de şimdiki zaman geniş zaman yerine kullanılmıştır.'
      },
      {
        id: 'q-fl-1-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik zamanlı (çekimli) bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu romanı geçen yıl okumuştum.' },
          { id: 'B', text: 'Kar yağınca yollar kapandı.' },
          { id: 'C', text: 'Onu gördüğümde hemen tanıdım.' },
          { id: 'D', text: 'Bu hafta sonu konsere gideceğiz.' },
          { id: 'E', text: 'Gökyüzü birden kararıverdi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Birleşik zamanlı fiiller iki tane kip eki (zaman veya dilek) alan fiillerdir. A seçeneğindeki "oku-muş-tu-m" fiili hem duyulan geçmiş zaman (-muş) hem de ek fiilin hikayesini (-tu) alarak birleşik zamanlı olmuştur.'
      },
      {
        id: 'q-fl-1-13',
        difficulty: 'medium',
        questionText: 'Ek fiil, isim soylu sözcüklere gelerek onları yüklem yapar ya da basit zamanlı fiillere gelerek onları birleşik zamanlı fiil yapar. Aşağıdakilerin hangisinde ek fiilin görevi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'En sevdiği meyve çilekti.' },
          { id: 'B', text: 'Bütün gün çalışmaktan çok yorgundu.' },
          { id: 'C', text: 'Eskiden buralarda çok kar yağardı.' },
          { id: 'D', text: 'Dünkü sınav oldukça zormuş.' },
          { id: 'E', text: 'Onun kalbi pamuk gibi yumuşaktır.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde ek fiil isim veya isim soylu sözcüklere (çilek-ti, yorgun-du, zor-muş, yumuşak-tır) gelerek onları yüklem yapmıştır. C seçeneğinde ise basit zamanlı fiile (yağ-ar-dı) gelerek onu birleşik zamanlı (geniş zamanın hikayesi) yapmıştır.'
      },
      {
        id: 'q-fl-1-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yeterlik fiili" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Merdivenlerden inerken düşeyazdı.' },
          { id: 'B', text: 'Bu ağır kolileri tek başıma taşıyabilirim.' },
          { id: 'C', text: 'Sen gidedur, ben sana yetişirim.' },
          { id: 'D', text: 'Çocuklar bahçede koşuşuyor.' },
          { id: 'E', text: 'Bulaşıkları çabucak yıkayıverdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeterlik fiilinin olumlu çekimi fiile "-ebil, -abil" eklenerek yapılır. "Taşı-y-abil-irim" yeterlik fiilidir. A yaklaşma, C sürerlik, E tezlik fiilidir.'
      },
      {
        id: 'q-fl-1-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "anlamca kaynaşmış birleşik fiil" (deyimleşmiş birleşik fiil) vardır?',
        options: [
          { id: 'A', text: 'Ona olan borcumu affetti.' },
          { id: 'B', text: 'Soruyu görünce hemen çözüverdi.' },
          { id: 'C', text: 'Son günlerde iyice gözden düştü.' },
          { id: 'D', text: 'Beni aramadığını farz edelim.' },
          { id: 'E', text: 'Telefonu masanın üzerinde kaybolmuş.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gözden düşmek" deyimdir ve anlamca kaynaşmış birleşik fiiller grubuna girer. Affetmek, farz etmek ve kaybolmak yardımcı fiille kurulan; çözüvermek ise kurallı birleşik fiildir.'
      },
      {
        id: 'q-fl-1-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiilin geniş zamanı ile çekimlenmiş bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Bütün soruları yanlışsız çözdü.' },
          { id: 'B', text: 'Onun en büyük hayali doktordu.' },
          { id: 'C', text: 'Ankara bu mevsimde çok soğuktur.' },
          { id: 'D', text: 'Eskiden çok iyi arkadaştılar.' },
          { id: 'E', text: 'Bugün hava pek de güneşli değildi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ek fiilin geniş zaman ekleri isme gelen şahıs ekleridir, üçüncü tekil şahısta "-dır/-dir" kullanılır. C seçeneğinde "soğuk-tur" sözcüğündeki "-tur" ek fiilin geniş zamanıdır.'
      },
      {
        id: 'q-fl-1-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yardımcı eylemle kurulmuş birleşik fiil" kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ona yardım etmek için elimden geleni yaptım.' },
          { id: 'B', text: 'Onun sözlerini duyunca kahroldu.' },
          { id: 'C', text: 'Lütfen eşyalarınızı burada terk etmeyiniz.' },
          { id: 'D', text: 'Bu işten kolayca sıyrılabileceğini zannetti.' },
          { id: 'E', text: 'Saatlerdir pencerenin önünde bekleyedurdu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "bekleyedur-" fiili sürerlik fiilidir ve kurallı birleşik fiildir. Diğer seçeneklerde yardım et-, kahrol-, terk et- ve zannet- yardımcı eylemle kurulan birleşik fiillerdir.'
      },
      {
        id: 'q-fl-1-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki fiillerden hangisinin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Yazdırdı' },
          { id: 'B', text: 'Gülebilmiş' },
          { id: 'C', text: 'Uyutacak' },
          { id: 'D', text: 'Koparır' },
          { id: 'E', text: 'Görüşmek' }
        ],
        correctOptionId: 'B',
        explanation: '"Gülebilmiş" fiili gül-mek ve bil-mek fiillerinin birleşmesiyle oluşmuş kurallı birleşik fiildir. Diğerleri ise yapım eki aldıkları için türemiş fiildir. (Yaz-dır, uyu-t, kop-ar, gör-üş)'
      },
      {
        id: 'q-fl-1-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde istek kipiyle çekimlenmiş bir fiil vardır?',
        options: [
          { id: 'A', text: 'Keşke sen de bizimle gelsen.' },
          { id: 'B', text: 'Bu akşam biraz ders çalışalım.' },
          { id: 'C', text: 'Hemen odana git ve uyu.' },
          { id: 'D', text: 'Herkes kurallara uymak zorunda.' },
          { id: 'E', text: 'Yarın sabah erkenden yola çıkmalıyız.' }
        ],
        correctOptionId: 'B',
        explanation: 'İstek kipi eki "-e / -a"dır. B seçeneğinde "çalış-a-lım" fiilinde istek kipi vardır. A\'da şart, C\'de emir, E\'de gereklilik kipi vardır.'
      },
      {
        id: 'q-fl-1-20',
        difficulty: 'medium',
        questionText: 'Ek fiil, aşağıdaki cümlelerin hangisinde cümleye "terk edilmiş bir alışkanlık" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çocukken her yaz dedemin yanına giderdik.' },
          { id: 'B', text: 'Dün akşam eve geldiğinde çok yorgundu.' },
          { id: 'C', text: 'Eğer çalışırsan bu sınavı kesin kazanırsın.' },
          { id: 'D', text: 'Annesi onu her zaman çok severdi.' },
          { id: 'E', text: 'Bütün bu olayları o planlamış olmalı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Geniş zamanın hikayesi ( -ardı / -erdi / -ürdü ) geçmişte yapılan ancak artık yapılmayan, terk edilmiş alışkanlıkları ifade eder. A seçeneğinde "giderdik" sözcüğü bu anlamı taşır.'
      }
    ]
  },
  {
    id: 'test-fiiller-1-zor',
    title: 'Fiiller 1 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-fl-1-21',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zamanında (özellikle 3. tekil şahıs "-dır / -dir" eki) ek fiil eki bazen düşebilir. Aşağıdaki cümlelerin hangisinde ek fiil ekinin düştüğü bir isim cümlesi vardır?',
        options: [
          { id: 'A', text: 'Bu yemeğin tuzu biraz fazla.' },
          { id: 'B', text: 'Dışarıda çok soğuk bir rüzgar esiyor.' },
          { id: 'C', text: 'Onun ne kadar haklı olduğunu anladım.' },
          { id: 'D', text: 'Bugün gökyüzü çok bulutluydu.' },
          { id: 'E', text: 'O, okulun en başarılı öğrencilerindendir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem "fazla" sözcüğüdür. Normalde "fazladır" olması gerekirken geniş zaman 3. tekil şahıs eki olan "-dır" düşmüştür.'
      },
      {
        id: 'q-fl-1-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil cümleye "ihtimal (olasılık)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Sınavı kazandığını duyunca çok sevinmiştir.' },
          { id: 'B', text: 'Dün buralara kadar gelen bizim eski kapıcıdır.' },
          { id: 'C', text: 'Eğer hava güzelse pikniğe gidebiliriz.' },
          { id: 'D', text: 'Toplantı bitmiştir, herkes evine gidebilir.' },
          { id: 'E', text: 'Beni arayan kişi kesinlikle kardeşimdir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Ek fiilin geniş zaman eki olan "-dır / -dir" fiillere geldiğinde kesinlik veya olasılık anlamı katar. A seçeneğinde "sevinmiştir" sözcüğündeki -tir eki, cümleye ihtimal, olasılık anlamı katmıştır. D ve E\'de kesinlik anlamı vardır.'
      },
      {
        id: 'q-fl-1-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem haber hem de dilek kipiyle çekimlenmiş fiiller bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kandilli yüzerken uykularda / Mehtabı sürükledik sularda' },
          { id: 'B', text: 'Yaş otuz beş, yolun yarısı eder / Dante gibi ortasındayız ömrün' },
          { id: 'C', text: 'Hava kararırken sokaklarda / Bir türkü tuttur, yürü usulca' },
          { id: 'D', text: 'Gökyüzü mavi, deniz mavi / Bekliyorum o güzel günleri' },
          { id: 'E', text: 'Akşam olur, karanlıklar çöker / Sana dertlerimi anlatsam' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "olur" ve "çöker" fiilleri geniş zamanla (haber kipi), "anlatsam" fiili ise şart kipiyle (dilek kipi) çekimlenmiştir.'
      },
      {
        id: 'q-fl-1-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu kadar yolu yürüyemem.' },
          { id: 'B', text: 'Onun ne dediğini anlamadım.' },
          { id: 'C', text: 'Bugün dışarı çıkmayalım.' },
          { id: 'D', text: 'Söylenenleri hiç duymuyor.' },
          { id: 'E', text: 'Sana bu konuda hak vermiyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yeterlik fiilinin olumsuzu yapılırken "bilmek" fiili düşer, yerine "ama / eme" eki gelir. "Yürü-y-e-me-m" fiili "yürüyebilirim" fiilinin olumsuzudur. Diğerleri basit fiillerin olumsuzlarıdır.'
      },
      {
        id: 'q-fl-1-25',
        difficulty: 'hard',
        questionText: 'Kurallı birleşik fiiller dört grupta incelenir: yeterlik, tezlik, sürerlik, yaklaşma. Aşağıdaki cümlelerin hangisinde farklı bir kurallı birleşik fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun ardından öylece bakakaldım.' },
          { id: 'B', text: 'Siz salonda otura durun, ben geliyorum.' },
          { id: 'C', text: 'Yıllardır bu masal böyle anlatılagelir.' },
          { id: 'D', text: 'Çocuk heyecandan bayılayazdı.' },
          { id: 'E', text: 'Şoför direksiyonu son anda kırabildi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (bakakal-), B (oturadur-) ve C (anlatılagel-) fiilleri sürerlik fiilleridir. D seçeneğindeki "bayılayazdı" fiili ise yaklaşma fiilidir. E seçeneğindeki kırabildi ise yeterlik fiilidir. D seçeneğinde ise yaklaşma anlamı taşıyan "yazmak" yardımcı fiili ile kurulmuş, sürerlik grubuna zıt olan farklı bir tür bulunmaktadır.'
      },
      {
        id: 'q-fl-1-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam kayması (kip kayması), eylemin "her zaman" yapıldığı anlamını verecek şekilde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Haftaya sınav sonuçları açıklanıyor.' },
          { id: 'B', text: 'Atatürk, 19 Mayıs\'ta Samsun\'a çıkar.' },
          { id: 'C', text: 'Akşamları yatmadan önce kitap okuyorum.' },
          { id: 'D', text: 'Allah\'ım, lütfen bize yardım et!' },
          { id: 'E', text: 'Yarın erkenden yola çıkıyoruz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde şimdiki zaman kipi (-yor) kullanılmıştır ancak cümlenin başındaki "akşamları" (her akşam) kelimesi eylemin geniş zamanda yapıldığını gösterir. Yani şimdiki zaman kipi, geniş zaman (her zaman) yerine kullanılmıştır.'
      },
      {
        id: 'q-fl-1-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiilin şarta bağlılık (koşul) anlamı veren bir kullanımı vardır?',
        options: [
          { id: 'A', text: 'Hava güzelse pikniğe gideriz.' },
          { id: 'B', text: 'Bunu yaparsa onu affetmem.' },
          { id: 'C', text: 'Çalışırsan başarılı olursun.' },
          { id: 'D', text: 'Erken kalkarsam size yetişirim.' },
          { id: 'E', text: 'O da bizimle gelse ne iyi olur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Ek fiilin şartı isim veya isim soylu sözcüklere (-sa, -se) gelerek onları şartlı yargı yapar. A seçeneğinde "güzel" ismine "-se" ek fiili gelmiştir. B, C ve D seçeneklerinde "-sa/-se" ekleri fiile gelerek birleşik zamanlı eylem yapmıştır. E\'de ise basit dilek kipidir.'
      },
      {
        id: 'q-fl-1-28',
        difficulty: 'hard',
        questionText: '"Gelecektim" fiilinin kipi, zamanı ve şahsı aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Gelecek zamanın hikayesi - 1. Tekil Şahıs' },
          { id: 'B', text: 'Gelecek zamanın rivayeti - 1. Tekil Şahıs' },
          { id: 'C', text: 'Geçmiş zamanın şartı - 2. Tekil Şahıs' },
          { id: 'D', text: 'Geniş zamanın hikayesi - 1. Çoğul Şahıs' },
          { id: 'E', text: 'Şimdiki zamanın hikayesi - 1. Tekil Şahıs' }
        ],
        correctOptionId: 'A',
        explanation: '"Gel-ecek-ti-m" fiilinde -ecek (gelecek zaman), -ti (ek fiilin hikayesi) ve -m (1. tekil şahıs) ekleri vardır. Dolayısıyla "Gelecek zamanın hikayesi, 1. tekil şahıs" çekimidir.'
      },
      {
        id: 'q-fl-1-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem basit zamanlı hem de birleşik zamanlı fiil bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Geldim, gördüm, yendim.' },
          { id: 'B', text: 'Çocuklar bahçede koşuyor, neşeyle gülüyorlardı.' },
          { id: 'C', text: 'Eskiden çok çalışırdı, şimdi hiç yorulmuyor.' },
          { id: 'D', text: 'Kitabı okursan bana da anlatırsın.' },
          { id: 'E', text: 'Sabahları erken kalkar, hemen işe giderdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çalış-ır-dı" (geniş zamanın hikayesi) birleşik zamanlı, "yorul-mu-yor" (şimdiki zaman) basit zamanlı eylemdir.'
      },
      {
        id: 'q-fl-1-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi çekimli fiil değildir?',
        options: [
          { id: 'A', text: 'Oraya gidince bizi mutlaka *ara*.' },
          { id: 'B', text: 'Yüzündeki *gülümseme* hiç eksik olmasın.' },
          { id: 'C', text: 'Bütün işleri tek başına *halletmiş*.' },
          { id: 'D', text: 'Yarın sabah erkenden *kalkmalısın*.' },
          { id: 'E', text: 'Bize neden böyle *davranıyorsun*?' }
        ],
        correctOptionId: 'B',
        explanation: '"Gülümseme" sözcüğü bu cümlede fiilimsi (isim-fiil) veya kalıcı isim görevindedir, çekimli bir fiil (kip ve şahıs eki almış fiil) değildir. Diğer altı çizili sözcükler kip ve şahıs eki aldıkları için çekimli fiildir.'
      }
    ]
  }
];
