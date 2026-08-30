export default [
  {
    id: 'test-cumlede-anlam-2-kolay',
    title: 'Cümlede Anlam 2 (Kolay)',
    description: 'Cümlede Anlam - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-ca-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde neden-sonuç (sebep-sonuç) ilişkisi vardır?',
        options: [
          { id: 'A', text: 'Okula gitmek için erkenden uyandı.' },
          { id: 'B', text: 'Kar yağdığından yollar trafiğe kapandı.' },
          { id: 'C', text: 'İyi bir liseyi kazanmak amacıyla çok çalışıyor.' },
          { id: 'D', text: 'Bu akşam sinemaya gidersek çok eğleniriz.' },
          { id: 'E', text: 'Beni dinlemek üzere yanıma kadar geldi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kar yağdığı için" (neden), "yolların trafiğe kapanması" (sonuç) durumuna yol açmıştır. A, C ve E seçenekleri amaç-sonuç, D seçeneği ise koşul-sonuç cümlesidir.'
      },
      {
        id: 'q-ca-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi söz konusudur?',
        options: [
          { id: 'A', text: 'Hastalandığı için toplantıya katılamadı.' },
          { id: 'B', text: 'Yağmur yağınca bütün planlarımız suya düştü.' },
          { id: 'C', text: 'Sınavı kazanayım diye gecesini gündüzüne kattı.' },
          { id: 'D', text: 'Düzenli beslenirsen daha sağlıklı olursun.' },
          { id: 'E', text: 'Uykusuz kaldığından bütün gün esnedi durdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylem (gecesini gündüzüne katması) "sınavı kazanmak" amacıyla (hedefiyle) yapılmıştır. A ve E neden-sonuç, D koşul-sonuç, B ise zaman (veya neden-sonuç) cümlesidir.'
      },
      {
        id: 'q-ca-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde koşul (şart) anlamı vardır?',
        options: [
          { id: 'A', text: 'Güneş açarsa pikniğe gideriz.' },
          { id: 'B', text: 'Çok yorulduğu için hemen uyudu.' },
          { id: 'C', text: 'Bunu sana vermek üzere hazırladım.' },
          { id: 'D', text: 'Eskiden buralar hep ağaçlıktı.' },
          { id: 'E', text: 'Onun bu davranışını hiç anlayamıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde pikniğe gitme eylemi, "güneşin açması" koşuluna bağlanmıştır. "-se, -sa" eki şart anlamı katmıştır.'
      },
      {
        id: 'q-ca-2-4',
        difficulty: 'easy',
        questionText: '"Keşke onu bu kadar kırmasaydım." cümlesinde hakim olan duygu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özlem' },
          { id: 'B', text: 'Pişmanlık' },
          { id: 'C', text: 'Sitem' },
          { id: 'D', text: 'Yakınma' },
          { id: 'E', text: 'Şaşırma' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede kişinin geçmişte yaptığı bir eylemden dolayı duyduğu üzüntü, yani "pişmanlık" dile getirilmektedir.'
      },
      {
        id: 'q-ca-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde karşılaştırma yapılmıştır?',
        options: [
          { id: 'A', text: 'Ankara da İstanbul kadar kalabalık bir şehirdir.' },
          { id: 'B', text: 'Dün akşam şiddetli bir fırtına koptu.' },
          { id: 'C', text: 'Bu kitabı bitirir bitirmez sana vereceğim.' },
          { id: 'D', text: 'Müzik dinlemek ruhuma iyi geliyor.' },
          { id: 'E', text: 'Çocukluk arkadaşlarımı görmeyi çok isterim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde Ankara ve İstanbul "kalabalık olma" yönünden karşılaştırılmıştır ("kadar" edatı ile eşitlik/benzerlik vurgusu yapılmıştır).'
      },
      {
        id: 'q-ca-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "tanımlama" yapılmıştır?',
        options: [
          { id: 'A', text: 'Şiir, duyguların kelimelerle dans ettiği bir sanattır.' },
          { id: 'B', text: 'Roman okumayı öykü okumaktan daha çok severim.' },
          { id: 'C', text: 'Dün okuduğum kitap beni çok etkiledi.' },
          { id: 'D', text: 'O yazarın dili oldukça sade ve akıcıdır.' },
          { id: 'E', text: 'Tiyatro izlemek insana farklı bakış açıları kazandırır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Şiir nedir?" sorusuna cevap verilmiş ve şiirin tanımı (duyguların kelimelerle dans ettiği bir sanat) yapılmıştır.'
      },
      {
        id: 'q-ca-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "varsayım" anlamı vardır?',
        options: [
          { id: 'A', text: 'Diyelim ki bu sınavdan yüksek bir not aldın, ne yaparsın?' },
          { id: 'B', text: 'Keşke ben de sizinle tatile gelebilseydim.' },
          { id: 'C', text: 'Sanıyorum o da yakında buraya taşınacak.' },
          { id: 'D', text: 'Umuyorum ki her şey yoluna girecek.' },
          { id: 'E', text: 'Galiba bu sene kış daha sert geçecek.' }
        ],
        correctOptionId: 'A',
        explanation: 'Varsayım cümleleri, gerçekleşmemiş bir olayı bir an için gerçekleşmiş gibi düşünmeyi ifade eder. "Diyelim ki, tut ki, farz edelim ki" gibi ifadelerle kurulur. A seçeneğinde de bu durum vardır.'
      },
      {
        id: 'q-ca-2-8',
        difficulty: 'easy',
        questionText: '"Gelecek ay Avrupa turuna çıkmayı düşünüyorum." cümlesinde hangi anlam özelliği ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Uyarı' },
          { id: 'B', text: 'Öneri' },
          { id: 'C', text: 'Tasarı (Plan)' },
          { id: 'D', text: 'Ön yargı' },
          { id: 'E', text: 'Tahmin' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede kişinin gelecekte yapmayı planladığı bir işten söz edildiği için bu bir "tasarı" (plan) cümlesidir.'
      },
      {
        id: 'q-ca-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yakınma" (şikayet) anlamı vardır?',
        options: [
          { id: 'A', text: 'Bir kere de sözümü dinlese dişimi kıracağım.' },
          { id: 'B', text: 'Oraya kadar gitmişken beni de ziyaret etseydin bari.' },
          { id: 'C', text: 'Bugünlerde havalar iyice soğudu.' },
          { id: 'D', text: 'Belki yarın akşam size uğrayabilirim.' },
          { id: 'E', text: 'Bu işin altından kolayca kalkacağımı sanıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde kişinin sürekli söz dinlememesinden kaynaklanan bir şikayet, sızlanma yani "yakınma" durumu vardır. B seçeneğinde ise doğrudan kişiye yönelik bir kırgınlık (sitem) vardır.'
      },
      {
        id: 'q-ca-2-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir "olasılık (ihtimal)" söz konusudur?',
        options: [
          { id: 'A', text: 'Bugün kesinlikle o işi bitirmelisin.' },
          { id: 'B', text: 'Akşama doğru belki yağmur yağabilir.' },
          { id: 'C', text: 'İki kere iki her zaman dört eder.' },
          { id: 'D', text: 'Türkiye\'nin başkenti Ankara\'dır.' },
          { id: 'E', text: 'Dünya Güneş\'in etrafında döner.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "belki" ve "-ebilmek" ifadeleri, olayın gerçekleşme veya gerçekleşmeme durumunun kesin olmadığını, yani ihtimal (olasılık) dahilinde olduğunu gösterir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-2-orta',
    title: 'Cümlede Anlam 2 (Orta)',
    description: 'Cümlede Anlam - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-ca-2-11',
        difficulty: 'medium',
        questionText: 'I. Kitabı masanın üzerinde bırakıp gitmiş.\nII. Kar yağışı nedeniyle yollar trafiğe kapandı.\nIII. O da senin kadar başarılı bir öğrenciydi.\nIV. Sınavı kazanmak için günde on saat ders çalışıyor.\nYukarıdaki numaralanmış cümlelerden hangileri "amaç-sonuç" ve "neden-sonuç" ilişkisi bildirmektedir?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'II ve III' },
          { id: 'C', text: 'II ve IV' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'I ve IV' }
        ],
        correctOptionId: 'C',
        explanation: 'II. cümle "neden-sonuç" ilişkisi bildirir (yolların kapanmasının nedeni kar yağışıdır). IV. cümle "amaç-sonuç" bildirir (ders çalışmasının amacı sınavı kazanmaktır). Dolayısıyla II ve IV doğru cevaptır.'
      },
      {
        id: 'q-ca-2-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dolaylı anlatım" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Babam: "Akşam eve erken gelin." dedi.' },
          { id: 'B', text: 'Öğretmenimiz, ödevlerimizi zamanında yapmamızı söyledi.' },
          { id: 'C', text: 'Atatürk, "Hayatta en hakiki mürşit ilimdir." der.' },
          { id: 'D', text: '"Bu kitap benim hayatımı değiştirdi." diyerek ağladı.' },
          { id: 'E', text: 'Annem: "Yemeğini yemeden kalkma!" diye bağırdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde öğretmenin sözü, olduğu gibi ("Ödevlerinizi zamanında yapın") aktarılmamış, aktaran kişinin ifadeleriyle değiştirilerek (yapmamızı söyledi) dolaylı olarak anlatılmıştır. Diğer seçeneklerde doğrudan anlatım vardır.'
      },
      {
        id: 'q-ca-2-13',
        difficulty: 'medium',
        questionText: '"Sitem" ve "Yakınma" anlamca birbirine çok karıştırılır. Sitem, birine olan kırgınlığı doğrudan onun yüzüne söylemektir. Yakınma ise şikayet edilen durumu başkalarına anlatmaktır. Buna göre aşağıdakilerin hangisinde "sitem" anlamı vardır?',
        options: [
          { id: 'A', text: 'İnsanlar günümüzde birbirine hiç saygı göstermiyor.' },
          { id: 'B', text: 'O kadar aradım, insan bir kere de telefonu açar.' },
          { id: 'C', text: 'Oraya kadar gitmişsin ama bana bir haber bile vermedin.' },
          { id: 'D', text: 'Bu çocuklar sabahtan akşama kadar gürültü yapıyorlar.' },
          { id: 'E', text: 'Her zaman kendi bildiğini okumaktan vazgeçmedi gitti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde kişi, kırgınlığını doğrudan muhatabına (sen) yöneltmiştir, bu bir sitemdir. A, D ve E seçenekleri başkalarından veya durumdan şikayet (yakınma) anlamı taşır.'
      },
      {
        id: 'q-ca-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ön yargı (peşin hüküm)" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Bu projenin çok başarılı olacağına inancım tam.' },
          { id: 'B', text: 'Göreceksin, bu yazarın son kitabı da hiç satmayacak.' },
          { id: 'C', text: 'Bence dünkü maçın hakemi oldukça taraflıydı.' },
          { id: 'D', text: 'Eskiden bu sokakta çocuklar neşe içinde oynardı.' },
          { id: 'E', text: 'Belki de tüm bu olanlar bir tesadüften ibarettir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ön yargı, henüz sonuçlanmamış bir olay veya durum hakkında önceden verilmiş olumlu veya olumsuz kesin yargılardır. B seçeneğinde kitabın satmayacağı konusunda peşin hüküm (ön yargı) verilmiştir.'
      },
      {
        id: 'q-ca-2-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "azımsama" söz konusudur?',
        options: [
          { id: 'A', text: 'Bunca işi tek başına yapabileceğini mi sanıyorsun?' },
          { id: 'B', text: 'O kadar çalıştın da sadece elli mi aldın?' },
          { id: 'C', text: 'Bu kadarcık parayla ayı nasıl çıkaracağız?' },
          { id: 'D', text: 'Böyle büyük bir adam olmak kolay mı sandın?' },
          { id: 'E', text: 'Senin gibi birinin bu soruyu çözememesi normal.' }
        ],
        correctOptionId: 'C',
        explanation: 'Azımsama, bir şeyin "miktar" veya "sayıca" yetersiz olduğunu ifade etmektir (az bulmak). C seçeneğindeki "Bu kadarcık para" ifadesi paranın miktarının yetersiz bulunduğunu, azımsandığını gösterir. (Diğer şıklardaki "küçümseme" veya eleştiri ile karıştırılmamalıdır).'
      },
      {
        id: 'q-ca-2-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "hayıflanma" (kendi kendine acınma/üzülme) anlamı vardır?',
        options: [
          { id: 'A', text: 'Keşke o gün o sözleri sana hiç söylemeseydim.' },
          { id: 'B', text: 'Zamanında İngilizceyi daha iyi öğrenseydim şimdi bu zorlukları çekmezdim.' },
          { id: 'C', text: 'Neden beni de yanınızda götürmediniz?' },
          { id: 'D', text: 'Bu kadar duyarsız olunmasına bir türlü anlam veremiyorum.' },
          { id: 'E', text: 'Keşke bu hafta sonu yağmur yağmasa.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayıflanma, kişinin yapmadığı/kaçırdığı fırsatlar veya eylemler için duyduğu üzüntüdür (B şıkkı). Pişmanlık (A şıkkı) ise yaptığı bir eylemden dolayı duyduğu üzüntüdür.'
      },
      {
        id: 'q-ca-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "içerik (konu)" ile ilgili bir yargıya yer verilmemiştir?',
        options: [
          { id: 'A', text: 'Yazar, bu romanında Kurtuluş Savaşı yıllarını anlatmış.' },
          { id: 'B', text: 'Şiirlerinde Anadolu insanının yalnızlığı ve çaresizliği göze çarpar.' },
          { id: 'C', text: 'Eserde, yabancılaşan bir bireyin iç çatışmaları başarıyla yansıtılmış.' },
          { id: 'D', text: 'Yazar, kelimeleri özenle seçmiş ve oldukça sürükleyici bir dil kullanmış.' },
          { id: 'E', text: 'Hikaye, köyden kente göç eden bir ailenin dramını konu alıyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği eserin içeriği (ne anlattığı) ile ilgili değil, üslubu (nasıl anlattığı, dili, sürükleyiciliği) ile ilgili bir yargı içermektedir.'
      },
      {
        id: 'q-ca-2-18',
        difficulty: 'medium',
        questionText: 'I. İçeri girer girmez etrafa şöyle bir göz gezdirdi.\nII. Seni bir an için burada görünce çok şaşırdım.\nIII. Ne yapıp edip bu sorunu yarına kadar çözeceğim.\nIV. Haberi alır almaz hemen yanımıza koştu.\nYukarıdaki cümlelerin hangilerinde eylemin yapılış zamanı bakımından bir yakınlık / eşzamanlılık vardır?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'I ve IV' },
          { id: 'C', text: 'II ve III' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'II ve IV' }
        ],
        correctOptionId: 'B',
        explanation: 'I. cümlede "girer girmez", IV. cümlede "alır almaz" ifadeleri "tezlik" veya "olur olmaz" şeklinde olayların birbirinin ardı sıra (eşzamanlılığa çok yakın) gerçekleştiğini gösterir.'
      },
      {
        id: 'q-ca-2-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde öznel bir değerlendirme söz konusu değildir?',
        options: [
          { id: 'A', text: 'İstanbul\'un eşsiz manzarası herkesi büyülemeye yeter.' },
          { id: 'B', text: 'Yazarın son kitabı sürükleyici kurgusuyla dikkat çekiyor.' },
          { id: 'C', text: 'Film, yirminci yüzyılın başlarındaki olayları konu alıyor.' },
          { id: 'D', text: 'Kırmızı elbise ona gerçekten çok yakışmış.' },
          { id: 'E', text: 'Şiirin o etkileyici ritmi okuyucuyu alıp götürüyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki ifade kanıtlanabilir, kişiden kişiye değişmeyen nesnel bir yargıdır. Diğer seçeneklerde (eşsiz, sürükleyici, çok yakışmış, etkileyici) kişisel görüş (öznellik) vardır.'
      },
      {
        id: 'q-ca-2-20',
        difficulty: 'medium',
        questionText: '"Eleştirmen, eseri değerlendirirken kendi düşüncelerini, duygularını bir kenara bırakıp sadece metnin gerçeğine odaklanmalıdır."\nBu cümlede eleştirmenin hangi özelliği taşıması gerektiği vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Yalınlık' },
          { id: 'B', text: 'Tutarlılık' },
          { id: 'C', text: 'Özgünlük' },
          { id: 'D', text: 'Nesnellik' },
          { id: 'E', text: 'Akıcılık' }
        ],
        correctOptionId: 'D',
        explanation: 'Kendi duygularını bir kenara bırakıp tarafsız olmak, "nesnellik" (objektiflik) kavramıyla ifade edilir.'
      }
    ]
  },
  {
    id: 'test-cumlede-anlam-2-zor',
    title: 'Cümlede Anlam 2 (Zor)',
    description: 'Cümlede Anlam - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-ca-2-21',
        difficulty: 'hard',
        questionText: 'I. Şairin şiirlerinde imgeler o kadar yoğun ki okuyucu adeta bir duygu ormanında kayboluyor.\nII. Sanatçı, eserlerinde genellikle doğa tasvirlerine ve köy hayatına yer veriyor.\nIII. Cümleleri öylesine uzun ve karmaşık ki metni bir kerede anlamak neredeyse imkansız.\nIV. Yazar, bu romanında cumhuriyetin ilk yıllarındaki değişimi ele almış.\nYukarıdaki cümlelerin hangilerinde yazarın / şairin "üslubu (biçemi)" ile ilgili bir değerlendirme yapılmıştır?',
        options: [
          { id: 'A', text: 'I ve II' },
          { id: 'B', text: 'I ve III' },
          { id: 'C', text: 'II ve IV' },
          { id: 'D', text: 'III ve IV' },
          { id: 'E', text: 'I ve IV' }
        ],
        correctOptionId: 'B',
        explanation: 'I. cümlede "imgelerin yoğunluğu", III. cümlede "cümlelerin uzun ve karmaşık olması" üslup (nasıl anlattığı) ile ilgilidir. II ve IV. cümleler içerik (ne anlattığı) ile ilgilidir.'
      },
      {
        id: 'q-ca-2-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "gerçekleşmemiş beklenti" anlamı vardır?',
        options: [
          { id: 'A', text: 'Bizi burada bu kadar bekleteceklerini hiç düşünmemiştim.' },
          { id: 'B', text: 'Son kitabının bu kadar çok satacağını hepimiz biliyorduk.' },
          { id: 'C', text: 'Sınav sonuçlarının bugün açıklanacağını umuyordum.' },
          { id: 'D', text: 'O kadar çalıştı ki sonunda üniversiteyi kazandı.' },
          { id: 'E', text: 'Tatilde Bodrum\'a gitmeyi planlıyoruz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde kişi sınav sonuçlarının bugün açıklanmasını beklemiş ancak bu beklentisi (bugün) gerçekleşmemiştir. (Umuyordum sözcüğü beklentinin boşa çıktığını hissettirir).'
      },
      {
        id: 'q-ca-2-23',
        difficulty: 'hard',
        questionText: '"Sanatçı, eserini yaratırken topluma ayna tutmakla kalmamalı, o aynanın arkasındaki sırları da göstermelidir."\nBu cümlede sanatçıdan beklenen asıl tutum aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Toplumsal sorunları nesnel bir dille yansıtması.' },
          { id: 'B', text: 'Görünenin ötesine geçerek derin anlamları ortaya çıkarması.' },
          { id: 'C', text: 'Halkın anlayabileceği sade bir dil kullanması.' },
          { id: 'D', text: 'Eserlerinde kendi duygularını gizlemeye çalışması.' },
          { id: 'E', text: 'Toplumun aksayan yönlerini eleştirerek çözümler sunması.' }
        ],
        correctOptionId: 'B',
        explanation: '"Aynanın arkasındaki sırları da göstermelidir" ifadesi, sadece görüneni (yüzeysel olanı) değil, görünenin ötesindeki derin anlamları, gizli gerçekleri (sırları) de ortaya çıkarması gerektiğini vurgular.'
      },
      {
        id: 'q-ca-2-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "değerlendirme" anlamı ağır basmaktadır?',
        options: [
          { id: 'A', text: 'Bu hafta sonu sinemaya gitmek için arkadaşlarla sözleştik.' },
          { id: 'B', text: 'Romanın ilk bölümlerindeki akıcılık ne yazık ki son bölümlerde kaybolmuş.' },
          { id: 'C', text: 'Yazar son kitabını tam üç yılda tamamladığını söylüyor.' },
          { id: 'D', text: 'Dünkü toplantıda şirketin geleceğine dair önemli kararlar alındı.' },
          { id: 'E', text: 'Kar yağışının yarından itibaren etkisini azaltması bekleniyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'Değerlendirme, bir eser, durum veya kişi hakkında olumlu/olumsuz bir yargı, eleştiri bildirmektir. B seçeneğinde romanın akıcılığı üzerinden yoruma dayalı bir değerlendirme yapılmıştır.'
      },
      {
        id: 'q-ca-2-25',
        difficulty: 'hard',
        questionText: '"Kimi zaman gökyüzüne bakmak, insanın içindeki o koca okyanusu dindirir."\nBu cümleden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gökyüzü insanlara her zaman huzur verir.' },
          { id: 'B', text: 'İnsan içsel karmaşasını bazen doğayla baş başa kalarak yatıştırabilir.' },
          { id: 'C', text: 'Denizler ve okyanuslar insanın ruhsal yapısını doğrudan etkiler.' },
          { id: 'D', text: 'Sıkıntıya düşen insanlar her zaman gökyüzünü izlemelidir.' },
          { id: 'E', text: 'İnsan ruhu, okyanuslar kadar karmaşık ve çözülemez bir yapıdadır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede gökyüzüne bakmanın (doğa ile temasın), insanın içindeki koca okyanusu (içsel karmaşa, yoğun duygular, sıkıntılar) dindireceği, yani yatıştırabileceği mecazlı bir şekilde anlatılmıştır.'
      },
      {
        id: 'q-ca-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "kanış" (kendi kendini inandırma / avunma) anlamı vardır?',
        options: [
          { id: 'A', text: 'Ne yapsam da onu bu kararından vazgeçiremeyeceğimi biliyorum.' },
          { id: 'B', text: 'Belki de bu işin olmaması bizim için daha hayırlı olmuştur.' },
          { id: 'C', text: 'Bu projenin başarıya ulaşacağına dair en ufak bir şüphem yok.' },
          { id: 'D', text: 'Keşke biraz daha çalışıp o sınavı da geçebilseydim.' },
          { id: 'E', text: 'Yarın hava güzel olursa belki ailecek pikniğe gideriz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kişinin olumsuz sonuçlanan bir durumu, kendince olumlu bir nedene bağlayarak kabullenmesi, kendini teselli etmesi (avunma/kanıksama/kanış) durumu vardır.'
      },
      {
        id: 'q-ca-2-27',
        difficulty: 'hard',
        questionText: '"Eleştiri, sanat eserine vurulan bir kilit değil, eserin gizli kapılarını açan bir anahtardır."\nBu cümlede eleştirinin hangi işlevi vurgulanmaktadır?',
        options: [
          { id: 'A', text: 'Sanatçının eksiklerini yüzüne vurarak onu düzeltmesi.' },
          { id: 'B', text: 'Eseri kısıtlamak yerine onun anlaşılamayan yönlerini açığa çıkarması.' },
          { id: 'C', text: 'Okuyucuya eserin sadece iyi yönlerini göstererek beğeni kazandırması.' },
          { id: 'D', text: 'Sanatçıları yeni eserler üretmeleri için sınırlandırması.' },
          { id: 'E', text: 'Eserin maddi değerini artırarak geniş kitlelere ulaştırması.' }
        ],
        correctOptionId: 'B',
        explanation: '"Vurulan kilit değil" sözüyle eseri kısıtlamadığı, "gizli kapıları açan anahtar" sözüyle de eserin keşfedilmeyi bekleyen, anlaşılmayan derinliklerini ortaya çıkardığı vurgulanmaktadır.'
      },
      {
        id: 'q-ca-2-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "küçümseme" (değer vermeme, hafife alma) anlamı vardır?',
        options: [
          { id: 'A', text: 'Bunca işin altından tek başına kalkabileceğine inanmıyorum.' },
          { id: 'B', text: 'Bu kadarcık parayla ay sonunu nasıl getireceğiz?' },
          { id: 'C', text: 'Sen kim, yazar olmak kim; önce düzgün cümle kurmayı öğren!' },
          { id: 'D', text: 'Bu kadar duyarsız davranması hepimizi çok üzdü.' },
          { id: 'E', text: 'Çok çalışıyorsun ama sanki biraz yanlış yöntemler kullanıyorsun.' }
        ],
        correctOptionId: 'C',
        explanation: 'Küçümseme, bir kişiyi, niteliği veya durumu nitelikçe değersiz görmek, alay etmektir. C seçeneğinde kişinin yazar olamayacağı sert ve küçümseyici bir dille ifade edilmiştir. (B şıkkında ise azımsama vardır).'
      },
      {
        id: 'q-ca-2-29',
        difficulty: 'hard',
        questionText: 'I. Ünlü yazar, romanlarında hep kendi çocukluğunu ve yaşadığı sokağı anlatır.\nII. Şairin son kitabındaki şiirler, insanın doğa karşısındaki acizliğini işliyor.\nIII. Yazar, bu eserinde devrik cümleler ve alışılmamış bağdaştırmalar kullanarak dili adeta yeniden yaratıyor.\nIV. Romandaki karakterler oldukça sıradan ama bir o kadar da içimizden insanlar.\nBu cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'I. cümlede yazarın eserlerinin içeriğiyle ilgili bilgi verilmiştir.' },
          { id: 'B', text: 'II. cümlede eserin konusu belirtilmiştir.' },
          { id: 'C', text: 'III. cümlede yazarın üslubuna yönelik bir eleştiri / tespit yapılmıştır.' },
          { id: 'D', text: 'IV. cümlede karakterlerin psikolojik analizlerine ağırlık verildiği vurgulanmıştır.' },
          { id: 'E', text: 'I ve II numaralı cümleler içerik cümlesidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'IV. cümlede karakterlerin içimizden, sıradan insanlar olduğu söylenmiştir ancak "psikolojik analizlere ağırlık verildiği" gibi bir bilgi yer almamaktadır.'
      },
      {
        id: 'q-ca-2-30',
        difficulty: 'hard',
        questionText: '"Yaşadığımız çağa ayak uydurmak, rüzgarın yönüne göre yelken açmak gibidir."\nBu cümlede anlatılmak istenen asıl düşünce aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Zamanın getirdiği yeniliklere uyum sağlamak zorunludur.' },
          { id: 'B', text: 'İnsan, değişen koşullara direnmek yerine onlara uyum göstermelidir.' },
          { id: 'C', text: 'Rüzgara karşı yelken açanlar her zaman başarılı olurlar.' },
          { id: 'D', text: 'Kişi kendi değerlerini çağın yeniliklerinden üstün tutmalıdır.' },
          { id: 'E', text: 'Toplumsal değişimler her zaman olumlu sonuçlar doğurmaz.' }
        ],
        correctOptionId: 'B',
        explanation: '"Rüzgarın yönüne göre yelken açmak", şartlara/gelişmelere (çağa) uyum sağlamayı, değişime direnmek yerine akışa/yöne göre hareket etmeyi (uyum göstermeyi) mecazlı bir dille ifade eder.'
      }
    ]
  }
];
