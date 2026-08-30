export default [
  {
    id: 'test-cumle-turleri-12-kolay',
    title: 'Cümle Türleri 12 (Kolay)',
    description: 'Cümle Türleri - Kolay (331-340)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-ct-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi yükleminin türüne göre diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Bütün gün masasında çalıştı.' },
          { id: 'B', text: 'O, mahallenin en sevilen insanıydı.' },
          { id: 'C', text: 'Çocuklar bahçede top oynuyor.' },
          { id: 'D', text: 'Sabah erkenden yola çıkacağız.' },
          { id: 'E', text: 'Kitabını dün masada unutmuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde yüklemler çekimli fiildir (çalıştı, oynuyor, çıkacağız, unutmuş). B seçeneğinde ise yüklem "insanıydı" kelimesidir ve isim soyludur (isim cümlesidir).'
      },
      {
        id: 'q-ct-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi kurallı bir cümledir?',
        options: [
          { id: 'A', text: 'Geldi bahar ayları memleketimize.' },
          { id: 'B', text: 'Söyledim sana bu işin böyle olacağını.' },
          { id: 'C', text: 'Dışarıda çok şiddetli bir rüzgâr esiyor.' },
          { id: 'D', text: 'Görünmez oldu artık o güzel günler.' },
          { id: 'E', text: 'Bırakıp gitme beni bu karanlık sokaklarda.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurallı cümlelerde yüklem sondadır. C seçeneğinde yüklem olan "esiyor" cümlenin sonundadır. Diğer seçeneklerde yüklem sonda olmadığı için devrik cümledir.'
      },
      {
        id: 'q-ct-12-3',
        difficulty: 'easy',
        questionText: '"Hava çok soğuk olduğu için..." ifadesi aşağıdaki cümle türlerinden hangisine örnektir?',
        options: [
          { id: 'A', text: 'Kurallı cümle' },
          { id: 'B', text: 'Devrik cümle' },
          { id: 'C', text: 'Eksiltili cümle' },
          { id: 'D', text: 'İsim cümlesi' },
          { id: 'E', text: 'Fiil cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklemi bulunmayan, yargısı tamamlanmamış cümlelere eksiltili cümle denir. Bu ifadede eylem (yüklem) söylenmediği için eksiltili cümledir.'
      },
      {
        id: 'q-ct-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi yapıca basit bir cümledir?',
        options: [
          { id: 'A', text: 'Sabah erkenden kalkıp işe gitti.' },
          { id: 'B', text: 'Kitap okumayı çok seviyorum.' },
          { id: 'C', text: 'Bahar gelince ağaçlar çiçek açar.' },
          { id: 'D', text: 'Dün akşam arkadaşlarla sinemaya gittik.' },
          { id: 'E', text: 'Soruları çözen öğrenci tahtaya kalktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'İçinde tek bir yargı bulunduran ve fiilimsi (yan cümlecik) içermeyen cümlelere basit cümle denir. D seçeneğinde fiilimsi yoktur. Diğer seçeneklerde "kalkıp", "okumayı", "gelince", "çözen" fiilimsileri bulunduğu için bu cümleler birleşiktir.'
      },
      {
        id: 'q-ct-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi anlamca olumsuzdur?',
        options: [
          { id: 'A', text: 'Bu işin üstesinden gelebileceğini biliyorum.' },
          { id: 'B', text: 'O, hiçbir zaman bana yalan söylemedi.' },
          { id: 'C', text: 'Bugün hava gerçekten çok güzel.' },
          { id: 'D', text: 'Sınavı kazandığını duyunca çok mutlu oldum.' },
          { id: 'E', text: 'Kardeşim soruların hepsini çözdü.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir cümlede işin, oluşun gerçekleşmediğini veya kavramın bulunmadığını bildiren cümleler olumsuzdur. B seçeneğinde "söylemedi" kelimesi -me olumsuzluk ekini almıştır ve işin yapılmadığını bildirir.'
      },
      {
        id: 'q-ct-12-6',
        difficulty: 'easy',
        questionText: '"Ne kendi geldi ne de haber yolladı." cümlesi biçimce ve anlamca nasıldır?',
        options: [
          { id: 'A', text: 'Biçimce olumlu, anlamca olumlu' },
          { id: 'B', text: 'Biçimce olumsuz, anlamca olumlu' },
          { id: 'C', text: 'Biçimce olumlu, anlamca olumsuz' },
          { id: 'D', text: 'Biçimce olumsuz, anlamca olumsuz' },
          { id: 'E', text: 'Soru cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: '"Ne... ne..." bağlacı cümleye olumsuzluk anlamı katar. Cümlede şekil olarak (biçimce) olumsuzluk eki (-me, -ma, değil, yok vb.) bulunmadığı için biçimce olumlu, fakat eylemin yapılmadığını (gelmedi, yollamadı) anlattığı için anlamca olumsuzdur.'
      },
      {
        id: 'q-ct-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi devrik bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Çok güzeldi seninle geçen o yıllar.' },
          { id: 'B', text: 'Seni gördüğüm için çok mutlu oldum.' },
          { id: 'C', text: 'Ağacın dalları rüzgârda sallanıyordu.' },
          { id: 'D', text: 'Bırakıp gitme beni bu ellerde.' },
          { id: 'E', text: 'Sabahleyin kahvaltı yapmayı severim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem "güzeldi" (güzel idi) kelimesidir ve isimdir. Yüklem sonda olmadığı için devrik, isim soylu olduğu için isim cümlesidir.'
      },
      {
        id: 'q-ct-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı ile birbirine bağlanmış cümleler (ki\'li birleşik cümle) vardır?',
        options: [
          { id: 'A', text: 'Masadaki kitabı bana uzatır mısın?' },
          { id: 'B', text: 'Anladım ki bu iş böyle olmayacak.' },
          { id: 'C', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'D', text: 'Sokaktaki çocuklar neşeyle oynuyor.' },
          { id: 'E', text: 'Dünkü toplantı çok uzun sürdü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Anladım" temel cümlesi ile "bu iş böyle olmayacak" yan cümleciği "ki" bağlacı ile birbirine bağlanmıştır (ki\'li birleşik cümle).'
      },
      {
        id: 'q-ct-12-9',
        difficulty: 'easy',
        questionText: '"Güneş açtı, karlar hızla erimeye başladı." cümlesi yapısına göre nasıl bir cümledir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Girişik birleşik cümle' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'Sıralı cümle' },
          { id: 'E', text: 'Eksiltili cümle' }
        ],
        correctOptionId: 'D',
        explanation: 'Birden fazla yüklemi olan ve birbirine virgül (,) veya noktalı virgül (;) ile bağlanan cümlelere sıralı cümle denir. Burada "Güneş açtı" ve "karlar... başladı" cümleleri virgülle bağlanmıştır.'
      },
      {
        id: 'q-ct-12-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir soru cümlesidir?',
        options: [
          { id: 'A', text: 'Oraya nasıl gideceğimizi bilmiyorum.' },
          { id: 'B', text: 'Ne zaman döneceğini söylemedi.' },
          { id: 'C', text: 'Kimlerin geleceği henüz belli değil.' },
          { id: 'D', text: 'Bu işi ne kadara mal ettiniz?' },
          { id: 'E', text: 'Nasıl bir araba alacağına karar verememiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde doğrudan karşı taraftan cevap bekleyen bir soru anlamı vardır. Diğer seçeneklerde soru bildiren kelimeler kullanılmış olsa da cümleler soru cümlesi değildir, cevap beklenmemektedir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-12-orta',
    title: 'Cümle Türleri 12 (Orta)',
    description: 'Cümle Türleri - Orta (341-350)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-ct-12-11',
        difficulty: 'medium',
        questionText: '"Havalar soğuyunca göçmen kuşlar sıcak ülkelere doğru yola koyuldu." cümlesi için aşağıdakilerden hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Fiil cümlesidir.' },
          { id: 'B', text: 'Kurallı cümledir.' },
          { id: 'C', text: 'Anlamca olumludur.' },
          { id: 'D', text: 'Sıralı cümledir.' },
          { id: 'E', text: 'Girişik birleşik cümledir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yüklem "yola koyuldu" (fiil), sonda (kurallı), gerçekleşmiş (olumlu), içinde "soğuyunca" zarf-fiili vardır (girişik birleşik). Ancak birden fazla yüklemi ve virgülle bağlanma durumu olmadığı için sıralı cümle DEĞİLDİR.'
      },
      {
        id: 'q-ct-12-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik temel cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Bize gelecekleri günü sabırsızlıkla bekliyoruz.' },
          { id: 'B', text: 'Çok okuyan insan, her zaman kendini geliştirir.' },
          { id: 'C', text: 'Yağmur yağdığı için piknik iptal edildi.' },
          { id: 'D', text: 'Kardeşim eve gelir gelmez uyudu.' },
          { id: 'E', text: 'Söylenenleri hiç umursamadan oradan ayrıldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yan cümlecik "Çok okuyan insan"dır (sıfat-fiil grubu). Geliştiren kim? "Çok okuyan insan". Bu yan cümlecik temel cümlenin (geliştirir) öznesidir.'
      },
      {
        id: 'q-ct-12-13',
        difficulty: 'medium',
        questionText: '"Bağımsız sıralı cümlelerde öge ortaklığı yoktur." Buna göre aşağıdakilerden hangisi bağımsız sıralı cümledir?',
        options: [
          { id: 'A', text: 'Adam içeri girdi, ceketini çıkardı.' },
          { id: 'B', text: 'Güneş battı, her yeri karanlık kapladı.' },
          { id: 'C', text: 'Annem yemeği yaptı, sofrayı hazırladı.' },
          { id: 'D', text: 'Kitabını aldı, dikkatlice çantasına koydu.' },
          { id: 'E', text: 'Çocuk çok yoruldu, hemen uyudu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: 1. Cümle "Güneş battı" (Güneş özne, battı yüklem). 2. Cümle "her yeri karanlık kapladı" (karanlık özne, kapladı yüklem, her yeri nesne). İki cümle arasında hiçbir öge ortaklığı olmadığı için bağımsız sıralıdır.'
      },
      {
        id: 'q-ct-12-14',
        difficulty: 'medium',
        questionText: '"Senin ne kadar dürüst biri olduğunu bilmez miyim?" cümlesinin biçimce ve anlamca özelliği nedir?',
        options: [
          { id: 'A', text: 'Biçimce olumlu, anlamca olumsuz' },
          { id: 'B', text: 'Biçimce olumsuz, anlamca olumsuz' },
          { id: 'C', text: 'Biçimce olumsuz, anlamca olumlu' },
          { id: 'D', text: 'Biçimce olumlu, anlamca olumlu' },
          { id: 'E', text: 'Şartlı birleşik cümle' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede "-mez" olumsuzluk eki vardır (biçimce olumsuz). Ancak kastedilen anlam "Bilirim" olduğu için (anlamca olumlu) bir cümledir.'
      },
      {
        id: 'q-ct-12-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısına göre "bağlı cümle"dir?',
        options: [
          { id: 'A', text: 'Hem suçlu olduğunu biliyor hem de üste çıkmaya çalışıyor.' },
          { id: 'B', text: 'Kapıyı hızla açtı ve içeri girdi.' },
          { id: 'C', text: 'Dışarı çıkmak istiyorsan ödevlerini bitirmelisin.' },
          { id: 'D', text: 'Rüzgâr esince ağacın yaprakları döküldü.' },
          { id: 'E', text: 'A ve B seçenekleri' }
        ],
        correctOptionId: 'E',
        explanation: 'Birden fazla cümlenin bağlaçla bağlanmasıyla oluşan cümlelere bağlı cümle denir. A seçeneğinde iki cümle "Hem... hem..." bağlacıyla, B seçeneğinde ise iki cümle "ve" bağlacıyla birbirine bağlanmıştır. Her ikisi de bağlı cümledir.'
      },
      {
        id: 'q-ct-12-16',
        difficulty: 'medium',
        questionText: '"İç içe birleşik cümlelerde, bir cümle diğer bir cümlenin içinde herhangi bir öge göreviyle yer alır." Aşağıdakilerden hangisi buna örnektir?',
        options: [
          { id: 'A', text: 'Anladım ki bu işler böyle yürümeyecek.' },
          { id: 'B', text: 'Havalar ısınırsa tatile çıkarız.' },
          { id: 'C', text: 'Öğretmenimiz, "Yarın sınav yapacağım." dedi.' },
          { id: 'D', text: 'Onu gördüğümde kalbim hızla çarpmaya başladı.' },
          { id: 'E', text: 'Gözlerimi kapattım ve hayallere daldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde, "Yarın sınav yapacağım." cümlesi, "dedi" temel cümlesinin içinde nesne görevinde kullanılmış ve iç içe birleşik cümle oluşturmuştur.'
      },
      {
        id: 'q-ct-12-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "eksiltili cümle" DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Dışarıda hafif bir rüzgâr, tatlı bir güneş...' },
          { id: 'B', text: 'Göz alabildiğine uzanan yeşil tarlalar...' },
          { id: 'C', text: 'Kimsenin bilmediği o ıssız sokaklar...' },
          { id: 'D', text: 'Akşamın bu saatinde evde yalnızım...' },
          { id: 'E', text: 'Yüzünde hafif bir tebessüm, gözlerinde umut...' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yalnızım" kelimesi cümlenin yüklemidir (yalnız-ım, isim cümlesi). Yüklemi bulunduğu için eksiltili cümle değildir (sonuna üç nokta konulması onu eksiltili yapmaz, noktalama hatasıdır).'
      },
      {
        id: 'q-ct-12-18',
        difficulty: 'medium',
        questionText: '"Bugünlerde ne arıyor ne de soruyorsun." cümlesi için hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Biçimce ve anlamca olumludur.' },
          { id: 'B', text: 'Biçimce olumsuz, anlamca olumludur.' },
          { id: 'C', text: 'Sıralı bir cümledir.' },
          { id: 'D', text: 'Biçimce olumlu, anlamca olumsuzdur.' },
          { id: 'E', text: 'Girişik birleşik cümledir.' }
        ],
        correctOptionId: 'D',
        explanation: '"Ne... ne" bağlacı cümlenin yapısını biçimce olumlu bırakır (cümlede -me, -ma, değil vb. yoktur), ancak cümlenin anlamı "aramıyorsun, sormuyorsun" şeklinde olumsuzdur.'
      },
      {
        id: 'q-ct-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi bağımlı sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Yağmur dindi, çocuklar sokağa döküldü.' },
          { id: 'B', text: 'Güneş açtı, karlar hızla eridi.' },
          { id: 'C', text: 'Kitabını aldı, okumaya başladı.' },
          { id: 'D', text: 'Bahar geldi, ağaçlar çiçek açtı.' },
          { id: 'E', text: 'Rüzgâr esiyor, dalgalar kıyıya vuruyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağımlı sıralı cümlelerde en az bir öge ortaktır. C seçeneğinde "Kitabını aldı" ve "okumaya başladı" cümlelerinin öznesi (O) ortaktır. Diğer seçeneklerdeki sıralı cümlelerin özneleri ve tümleçleri tamamen farklıdır.'
      },
      {
        id: 'q-ct-12-20',
        difficulty: 'medium',
        questionText: '"Şartlı birleşik cümlelerde yan cümlecik, temel cümlenin şartıdır." Buna göre aşağıdakilerden hangisi şartlı birleşik cümle DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Beni dinlersen bu işi kolayca çözersin.' },
          { id: 'B', text: 'Hava güzel olursa pikniğe gideriz.' },
          { id: 'C', text: 'Kitabı yarın vermek üzere alabilirsin.' },
          { id: 'D', text: 'Oraya vaktinde yetişseydik bileti alırdık.' },
          { id: 'E', text: 'Akşam oldu mu herkes evine çekilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "vermek üzere" ifadesi amaç (veya koşul) anlamı taşısa da biçimsel olarak şart kipi (-se/-sa) veya -mı/-mi edatıyla kurulmuş bir şartlı birleşik cümle yapısında değildir (fiilimsiyle kurulduğu için girişik birleşik cümle kabul edilir). A, B, D seçenekleri doğrudan şart kipi, E seçeneği ise "-mi" edatıyla (şart anlamı) kurulmuştur.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-12-zor',
    title: 'Cümle Türleri 12 (Zor)',
    description: 'Cümle Türleri - Zor (351-360)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-ct-12-21',
        difficulty: 'hard',
        questionText: '"Göz alabildiğine uzanan yeşil vadiler, insanın ruhuna derin bir huzur veriyordu." cümlesi ile ilgili aşağıdaki yargılardan hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Yapısına göre girişik birleşik cümledir.' },
          { id: 'B', text: 'Anlamına göre olumlu cümledir.' },
          { id: 'C', text: 'Yüklemin yerine göre kurallı cümledir.' },
          { id: 'D', text: 'Yüklemin türüne göre isim cümlesidir.' },
          { id: 'E', text: 'Yan cümlecik temel cümlenin öznesidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Cümlenin yüklemi "huzur veriyordu" fiilidir (vermek). Bu yüzden cümle isim cümlesi değil, fiil cümlesidir. Diğer seçenekler (içinde fiilimsi var: girişik birleşik, sonda yüklem var: kurallı, eylem gerçekleşiyor: olumlu, özne yan cümle) doğrudur.'
      },
      {
        id: 'q-ct-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde devrik, birleşik, olumlu bir fiil cümlesi vardır?',
        options: [
          { id: 'A', text: 'Gün batarken sarardı gökyüzünün yüzü.' },
          { id: 'B', text: 'Sensiz geçen yıllarımı hiç saymadım.' },
          { id: 'C', text: 'Söyledim şarkımı uçan kuşlara dertli dertli.' },
          { id: 'D', text: 'Beni bırakıp giden sensin bu karanlıkta.' },
          { id: 'E', text: 'Açılan solgun güller, umut verirdi kalbime.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde: "sarardı" yüklemi fiildir (fiil cümlesi), sonda değildir (devrik cümle), "batarken" zarf-fiili vardır (birleşik cümle) ve sararma eylemi gerçekleşmiştir (olumlu cümle).'
      },
      {
        id: 'q-ct-12-23',
        difficulty: 'hard',
        questionText: '"Bağlı cümleler "ve, veya, ki, ama, fakat, ancak" gibi bağlaçlarla bağlanan cümlelerdir."\nAşağıdakilerden hangisi bağlı cümle ÖZELLİĞİ GÖSTERMEZ?',
        options: [
          { id: 'A', text: 'Hava çok soğuktu ama dışarı çıkmak istiyordum.' },
          { id: 'B', text: 'Çok çalıştı fakat istediği başarıyı elde edemedi.' },
          { id: 'C', text: 'Sabah erken kalktı ve doğruca işe gitti.' },
          { id: 'D', text: 'Ne aradı ne sordu bunca zaman.' },
          { id: 'E', text: 'Gelenleri karşıladı, onlara yer gösterdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde iki cümle ("Gelenleri karşıladı" ve "onlara yer gösterdi") bağlaçla değil, virgülle bağlanmıştır. Bu nedenle yapıca bağlı cümle değil, sıralı cümledir.'
      },
      {
        id: 'q-ct-12-24',
        difficulty: 'hard',
        questionText: '"İnsan, hayalleri uğruna savaşmayı öğrenmezse asla gerçek bir zafere ulaşamaz." cümlesinin tür özellikleri hangisinde sırasıyla ve doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Girişik birleşik / Olumlu / Kurallı / Fiil' },
          { id: 'B', text: 'Şartlı birleşik / Olumsuz / Kurallı / Fiil' },
          { id: 'C', text: 'Şartlı birleşik / Olumsuz / Devrik / İsim' },
          { id: 'D', text: 'Bağlı / Olumlu / Kurallı / Fiil' },
          { id: 'E', text: 'Sıralı / Olumsuz / Devrik / Fiil' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede "-se" şart kipi kullanılmıştır ("öğrenmezse") yani şartlı birleşiktir. Yüklem "ulaşamaz"dır (olumsuz ve fiil cümlesidir). Yüklem sondadır (kurallıdır).'
      },
      {
        id: 'q-ct-12-25',
        difficulty: 'hard',
        questionText: '"Çok sevdiği memleketinden ayrılmak, ona gerçekten çok ağır gelmişti." cümlesindeki yan cümleciklerin görevi sırasıyla aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sadece özne görevi vardır.' },
          { id: 'B', text: 'Özne - Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç - Özne' },
          { id: 'D', text: 'Özne - Zarf Tümleci' },
          { id: 'E', text: 'Sadece nesne görevi vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'ağır gelmişti (yüklem). Ağır gelen ne? "Çok sevdiği memleketinden ayrılmak" (özne). İçinde fiilimsi (sevdiği, ayrılmak) bulunan grubun tamamı tek bir öge (özne) oluşturmuştur. Bu nedenle yan cümlecik sadece özne görevindedir.'
      },
      {
        id: 'q-co-12-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumlu olduğu hâlde anlamca olumsuzdur?',
        options: [
          { id: 'A', text: 'Sanki bütün bu olanların sorumlusu benim.' },
          { id: 'B', text: 'Onun bana nasıl davrandığını bilmiyor değilim.' },
          { id: 'C', text: 'Bu kadar yolu yürüyemem artık.' },
          { id: 'D', text: 'Ne kitap okuyor ne de test çözüyor.' },
          { id: 'E', text: 'Bu işin altından kalkabileceğini hiç sanmıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Sanki... benim." cümlesi biçimce olumludur (olumsuzluk eki veya kelimesi yoktur). Ancak cümleden "Ben değilim" anlamı çıkar (anlamca olumsuzdur). B seçeneği biçimce olumsuz, anlamca olumludur.'
      },
      {
        id: 'q-ct-12-27',
        difficulty: 'hard',
        questionText: '"Göz alabildiğine uzanan sarı başaklar, tarlanın ortasında duran ihtiyar çiftçiye gelecekle ilgili umut fısıldıyordu." cümlesinin türü için aşağıdakilerden hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Kurallı cümledir.' },
          { id: 'B', text: 'Fiil cümlesidir.' },
          { id: 'C', text: 'Girişik birleşik cümledir.' },
          { id: 'D', text: 'Yan cümlecik zarf tümleci görevindedir.' },
          { id: 'E', text: 'Olumlu cümledir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Cümledeki fiilimsiler (uzanan, duran vs.) öznede ("Göz alabildiğine uzanan sarı başaklar") ve dolaylı tümleçte ("tarlanın ortasında duran ihtiyar çiftçiye") yer almaktadır. Zarf tümlecinde değildir.'
      },
      {
        id: 'q-ct-12-28',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "bağımlı sıralı" cümle örneği vardır?',
        options: [
          { id: 'A', text: 'Yaz geldi, deniz suyu ısındı.' },
          { id: 'B', text: 'Kuşlar sustu, rüzgârın sesi arttı.' },
          { id: 'C', text: 'Öğretmen sınıfa girdi, ders anlatmaya başladı.' },
          { id: 'D', text: 'Çocuk ağlıyordu, annesi onu teselli ediyordu.' },
          { id: 'E', text: 'Yağmur durdu, gökkuşağı belirdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Öğretmen sınıfa girdi" ve "(Öğretmen) ders anlatmaya başladı" cümlelerinde özne (Öğretmen) ortaktır. Öge ortaklığı olan sıralı cümleler bağımlı sıralıdır. Diğerlerinde öge ortaklığı yoktur.'
      },
      {
        id: 'q-ct-12-29',
        difficulty: 'hard',
        questionText: '"İnsanlar yaşlandıkça yalnızlaşır, yalnızlaştıkça hatıralara sığınır." cümlesi yapısına göre hangi tür cümledir?',
        options: [
          { id: 'A', text: 'Bağlı cümle' },
          { id: 'B', text: 'Sıralı cümle' },
          { id: 'C', text: 'Basit cümle' },
          { id: 'D', text: 'İç içe birleşik cümle' },
          { id: 'E', text: 'Şartlı birleşik cümle' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümle "İnsanlar yaşlandıkça yalnızlaşır" ve "(İnsanlar) yalnızlaştıkça hatıralara sığınır" şeklinde virgülle birbirine bağlanmış iki yüklemli bir cümledir, bu nedenle sıralı cümledir. (İçlerinde fiilimsi olsa da birden fazla bağımsız yüklemi virgülle bağladığı için genel yapı sıralı cümledir).'
      },
      {
        id: 'q-ct-12-30',
        difficulty: 'hard',
        questionText: '"Bana öyle bir şey söyle ki bütün dertlerimi unuttursun." cümlesi yapısına göre nasıl bir cümledir?',
        options: [
          { id: 'A', text: 'Girişik birleşik cümle' },
          { id: 'B', text: 'Sıralı cümle' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'Ki\'li birleşik cümle' },
          { id: 'E', text: 'Şartlı birleşik cümle' }
        ],
        correctOptionId: 'D',
        explanation: 'Temel cümle (Bana öyle bir şey söyle) ile yan cümlenin (bütün dertlerimi unuttursun) "ki" bağlacı ile birbirine bağlandığı cümlelere ki\'li birleşik cümle (veya ilgi cümlesi) denir.'
      }
    ]
  }
];
