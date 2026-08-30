export default [
  {
    id: 'test-cumle-turleri-3-kolay',
    title: 'Cümle Türleri 3 (Kolay)',
    description: 'Cümle Türleri - Kolay (61-70)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-ct-3-1',
        difficulty: 'easy',
        questionText: '"Öğrenciler sınava iyi hazırlanmadı." cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Olumlu' },
          { id: 'B', text: 'Soru' },
          { id: 'C', text: 'Ünlem' },
          { id: 'D', text: 'Olumsuz' },
          { id: 'E', text: 'Emir' }
        ],
        correctOptionId: 'D',
        explanation: '"Hazırlanmadı" sözcüğünde "-ma-" olumsuzluk eki kullanılmıştır. Yargı olumsuz olduğundan bu olumsuz cümledir.'
      },
      {
        id: 'q-ct-3-2',
        difficulty: 'easy',
        questionText: '"Ahmet bir öğretmendir." cümlesinde yüklem hangi sözcüktür?',
        options: [
          { id: 'A', text: 'Ahmet' },
          { id: 'B', text: 'bir' },
          { id: 'C', text: 'öğretmendir' },
          { id: 'D', text: 'öğretmen' },
          { id: 'E', text: 'bir öğretmen' }
        ],
        correctOptionId: 'C',
        explanation: '"Öğretmendir" sözcüğü "öğretmen" + "-dir" (ek fiil) biçiminde oluşmuştur. Cümlenin yüklemi "öğretmendir"dir. Bu cümle isim cümlesidir.'
      },
      {
        id: 'q-ct-3-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi kurallı (düz) cümledir?',
        options: [
          { id: 'A', text: 'Koştu hızla.' },
          { id: 'B', text: 'Güldü çok.' },
          { id: 'C', text: 'Çocuklar bahçede oynadı.' },
          { id: 'D', text: 'Geldi nihayet.' },
          { id: 'E', text: 'İstedi her şeyi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çocuklar bahçede oynadı." cümlesinde yüklem ("oynadı") cümlenin en sonunda yer almaktadır. Yüklem sonda olan cümle kurallı (düz) cümledir.'
      },
      {
        id: 'q-ct-3-4',
        difficulty: 'easy',
        questionText: '"Bana bak!" cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Soru' },
          { id: 'B', text: 'Olumsuz' },
          { id: 'C', text: 'Olumlu / emir' },
          { id: 'D', text: 'Birleşik' },
          { id: 'E', text: 'İsim cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: '"Bak!" sözcüğü 2. tekil kişiye hitap eden emir biçimidir. Olumlu eylem emredildiğinden bu emir/ünlem bildiren olumlu cümledir.'
      },
      {
        id: 'q-ct-3-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "soru cümlesi" değildir?',
        options: [
          { id: 'A', text: 'Nereye gidiyorsun?' },
          { id: 'B', text: 'Yarın gelecek misin?' },
          { id: 'C', text: 'Bu kitabı okudum mu?' },
          { id: 'D', text: 'Ne zaman döneceğini biliyorum.' },
          { id: 'E', text: 'Kim dedi bunu?' }
        ],
        correctOptionId: 'D',
        explanation: '"Ne zaman döneceğini biliyorum." cümlesi soru sözcüğü ("ne zaman") içerse de soru yapısında değildir — dolaylı soru yan cümlesi içeren bir ifadedir. Gerçek bir soru sormamaktadır, soru işareti de yoktur.'
      },
      {
        id: 'q-ct-3-6',
        difficulty: 'easy',
        questionText: '"Kitap okumanın faydaları çoktur." cümlesi yükleminin türüne göre hangisidir?',
        options: [
          { id: 'A', text: 'Fiil cümlesi' },
          { id: 'B', text: 'Soru cümlesi' },
          { id: 'C', text: 'İsim cümlesi' },
          { id: 'D', text: 'Devrik cümle' },
          { id: 'E', text: 'Olumsuz cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Çoktur" sözcüğü "çok" sıfatı + "-tur" ek fiilinden oluşmaktadır. Yüklemi isim soylu sözcük + ek fiil olan cümle isim cümlesidir.'
      },
      {
        id: 'q-ct-3-7',
        difficulty: 'easy',
        questionText: '"Bir türlü uyuyamadım." cümlesindeki olumsuzluk eki hangisidir?',
        options: [
          { id: 'A', text: '-a' },
          { id: 'B', text: '-ma' },
          { id: 'C', text: '-ama' },
          { id: 'D', text: '-dim' },
          { id: 'E', text: '-bir' }
        ],
        correctOptionId: 'C',
        explanation: '"Uyuyamadım" sözcüğünde "uyu-" + "-a-" (yeterlilik) + "-ma-" (olumsuzluk) + "-dım" (geçmiş zaman, kişi) bulunmaktadır. Burada "-ama-" birleşik ek olarak yeterlilik olumsuzluğunu gösterir.'
      },
      {
        id: 'q-ct-3-8',
        difficulty: 'easy',
        questionText: '"Ne güzel çiçekler bunlar!" cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Olumsuz' },
          { id: 'B', text: 'Soru' },
          { id: 'C', text: 'Olumlu, ünlem' },
          { id: 'D', text: 'Birleşik' },
          { id: 'E', text: 'Devrik' }
        ],
        correctOptionId: 'C',
        explanation: '"Ne güzel çiçekler bunlar!" ifadesi beğeni ve hayranlık duygusu taşımakta, ünlem işaretiyle bitmektedir. Hem olumlu hem de ünlem cümlesi niteliğindedir.'
      },
      {
        id: 'q-ct-3-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "eksiltili cümle" değildir?',
        options: [
          { id: 'A', text: 'Hayır.' },
          { id: 'B', text: 'Evet, tabii ki.' },
          { id: 'C', text: 'Yarın...' },
          { id: 'D', text: 'Hmm.' },
          { id: 'E', text: 'Kitap çok güzeldi.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kitap çok güzeldi." tam ve eksiksiz bir cümledir; özne ve yüklemi bellidir. Diğer seçenekler bağlamdan yardım alan, tam yargı içermeyen eksiltili cümle örnekleridir.'
      },
      {
        id: 'q-ct-3-10',
        difficulty: 'easy',
        questionText: 'Türkçede "isim cümlesi" ile "fiil cümlesi"ni birbirinden ayıran temel ölçüt nedir?',
        options: [
          { id: 'A', text: 'Cümlenin uzunluğu' },
          { id: 'B', text: 'Cümledeki öznenin türü' },
          { id: 'C', text: 'Yüklemin fiil mi yoksa isim soylu sözcük mü olduğu' },
          { id: 'D', text: 'Cümlenin anlamının olumlu mu olumsuz mu olduğu' },
          { id: 'E', text: 'Cümledeki öge sayısı' }
        ],
        correctOptionId: 'C',
        explanation: 'İsim cümlesi ve fiil cümlesi arasındaki temel fark yüklemin türüdür. Yüklemi çekimli fiil olan → fiil cümlesi; yüklemi isim/sıfat + ek fiil olan → isim cümlesidir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-3-orta',
    title: 'Cümle Türleri 3 (Orta)',
    description: 'Cümle Türleri - Orta (71-80)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-ct-3-11',
        difficulty: 'medium',
        questionText: '"Hasta olduğunu bilseydim yanına giderdim." cümlesinde kaç yan cümle vardır?',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' },
          { id: 'E', text: '4' }
        ],
        correctOptionId: 'C',
        explanation: '"Hasta olduğunu" — isim cümlesi, nesne yan cümle. "bilseydim" — şart yan cümlesi. Temel cümle "yanına giderdim"dir. İki yan cümle bulunmaktadır.'
      },
      {
        id: 'q-ct-3-12',
        difficulty: 'medium',
        questionText: '"Üzüldükçe seni düşünüyorum." cümlesinde "üzüldükçe" nasıl bir işlev görür?',
        options: [
          { id: 'A', text: 'Şart bildiriyor' },
          { id: 'B', text: 'Amaç bildiriyor' },
          { id: 'C', text: 'Oran/sıklık bildiren zarf yan cümlesi' },
          { id: 'D', text: 'Özne işlevi görüyor' },
          { id: 'E', text: 'Nesne işlevi görüyor' }
        ],
        correctOptionId: 'C',
        explanation: '"-dıkça/-dikçe" eki orantı bildiren bir zarf-fiil ekidir: "ne kadar üzülürsem o kadar seni düşünüyorum" anlamı taşır. Oran/sıklık bildiren zarf yan cümlesidir.'
      },
      {
        id: 'q-ct-3-13',
        difficulty: 'medium',
        questionText: '"Sana bir şey soracaktım da unuttum." cümlesinde "da/de" bağlacı nasıl bir işlev taşır?',
        options: [
          { id: 'A', text: 'Ekleme bağlacı (ve anlamı)' },
          { id: 'B', text: 'Zıtlık bağlacı (ama anlamı)' },
          { id: 'C', text: 'Sebep-sonuç bağlacı' },
          { id: 'D', text: 'Bağlaç değil, çekim eki' },
          { id: 'E', text: 'Pekiştirme bağlacı' }
        ],
        correctOptionId: 'C',
        explanation: '"Soracaktım da unuttum" yapısında "da/de" sebep-sonuç ya da art ardalık bildiren bir bağlaç işlevi görür. "Soracaktım, ama [bu niyetle geldim] unuttum" anlamını aktarmaktadır.'
      },
      {
        id: 'q-ct-3-14',
        difficulty: 'medium',
        questionText: '"Güzel olan her şey kısa sürer." cümlesinde "güzel olan" ifadesi hangi görevi üstlenmiştir?',
        options: [
          { id: 'A', text: 'Yüklem' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: '"Her şey"i niteleyen sıfat yan cümlesi' },
          { id: 'D', text: 'Zarf tümleci' },
          { id: 'E', text: 'Özne' }
        ],
        correctOptionId: 'C',
        explanation: '"Güzel olan" ifadesinde "-an" sıfat-fiil eki kullanılmıştır. "Her şey" ismini nitelediğinden bu bir sıfat işlevinde yan cümledir. Cümle "güzel olan her şey" + "kısa sürer" biçiminde yapılanmıştır.'
      },
      {
        id: 'q-ct-3-15',
        difficulty: 'medium',
        questionText: '"Hava kötüydü, ama yola çıktık." cümlesinin yapı türü nedir?',
        options: [
          { id: 'A', text: 'Sıralı cümle' },
          { id: 'B', text: 'Bağlı cümle' },
          { id: 'C', text: 'Birleşik cümle' },
          { id: 'D', text: 'Basit cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Ama" bağlacı iki yargıyı birbirine bağlamaktadır. Bağlaçla birleştirilen iki bağımsız yargı "bağlı cümle" oluşturur. "Hava kötüydü" ve "yola çıktık" iki ayrı yargıdır.'
      },
      {
        id: 'q-ct-3-16',
        difficulty: 'medium',
        questionText: '"Söyleşi bitince herkes dağıldı." cümlesinde "söyleşi bitince" nasıl bir anlam ilişkisi kurar?',
        options: [
          { id: 'A', text: 'Şart' },
          { id: 'B', text: 'Amaç' },
          { id: 'C', text: 'Zaman' },
          { id: 'D', text: 'Neden' },
          { id: 'E', text: 'Sonuç' }
        ],
        correctOptionId: 'C',
        explanation: '"-ince/-unca" zarf-fiil eki "ne zaman?" sorusuna cevap veren zaman anlam ilişkisi kurar. "Söyleşi bitince = söyleşi bittikten sonra" — zaman bildiren yan cümledir.'
      },
      {
        id: 'q-ct-3-17',
        difficulty: 'medium',
        questionText: '"Başarılı olmak için çok çalışmak gerekiyor." cümlesinde "başarılı olmak için" ifadesi hangi anlam ilişkisini kurar?',
        options: [
          { id: 'A', text: 'Zaman' },
          { id: 'B', text: 'Şart' },
          { id: 'C', text: 'Amaç' },
          { id: 'D', text: 'Neden' },
          { id: 'E', text: 'Karşılaştırma' }
        ],
        correctOptionId: 'C',
        explanation: '"Başarılı olmak için" ifadesinde "için" edatı amaç anlamı katmaktadır. "Ne için çalışmak gerekiyor?" sorusuna cevap verdiğinden amaç bildiren zarf tümlecidir.'
      },
      {
        id: 'q-ct-3-18',
        difficulty: 'medium',
        questionText: '"Çok yorulduğundan erkenden uyudu." cümlesinde "çok yorulduğundan" ifadesi hangi anlam ilişkisini kurar?',
        options: [
          { id: 'A', text: 'Zaman' },
          { id: 'B', text: 'Neden' },
          { id: 'C', text: 'Amaç' },
          { id: 'D', text: 'Şart' },
          { id: 'E', text: 'Sonuç' }
        ],
        correctOptionId: 'B',
        explanation: '"-dığından/-diğinden" eki "neden?" sorusuna cevap veren neden-sonuç ilişkisi kurar. "Neden erkenden uyudu? Çok yorulduğundan." — neden bildiren yan cümledir.'
      },
      {
        id: 'q-ct-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi "sıralı cümle" değildir?',
        options: [
          { id: 'A', text: 'Ali okudu, Ayşe yazdı.' },
          { id: 'B', text: 'Hava bozdu, dışarı çıkmadık.' },
          { id: 'C', text: 'Güneş doğdu, kuşlar öttü, çiçekler açtı.' },
          { id: 'D', text: 'Hem çalıştı hem dinlendi.' },
          { id: 'E', text: 'Geldi, gördü, gitti.' }
        ],
        correctOptionId: 'D',
        explanation: '"Hem... hem..." bağlacıyla bağlanan cümle, bağlı cümledir. Sıralı cümle bağlaçsız, virgülle ayrılan birden fazla yargıdan oluşur. D seçeneği bağlı cümledir, sıralı değil.'
      },
      {
        id: 'q-ct-3-20',
        difficulty: 'medium',
        questionText: '"Neden gelmedin diye sormak istedim." cümlesinde "neden gelmedin" ifadesi hangi görevdedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Dolaylı tümleç' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'B',
        explanation: '"Neden gelmedin diye sormak istedim." cümlesinde "sormak istedim" yükleminin nesnesi "neden gelmedin diye" (dolaylı anlatım içeren) yan cümlesidir. Nesne görevini üstlenmiştir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-3-zor',
    title: 'Cümle Türleri 3 (Zor)',
    description: 'Cümle Türleri - Zor (81-90)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-ct-3-21',
        difficulty: 'hard',
        questionText: '"Sorduğun soruya cevap verebileceğimi sanmıyorum." cümlesinde kaç yargı ve kaç yan cümle bulunmaktadır?',
        options: [
          { id: 'A', text: '2 yargı, 1 yan cümle' },
          { id: 'B', text: '3 yargı, 2 yan cümle' },
          { id: 'C', text: '4 yargı, 3 yan cümle' },
          { id: 'D', text: '2 yargı, 2 yan cümle' },
          { id: 'E', text: '3 yargı, 1 yan cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Sorduğun soru" (yan1, sıfat-fiil), "cevap verebileceğimi" (yan2, nesne yan cümlesi), "sanmıyorum" (temel cümle). Toplamda 3 yargı ve 2 yan cümle bulunmaktadır.'
      },
      {
        id: 'q-ct-3-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisinde birden fazla birleşik cümle türü aynı anda bulunmaktadır?',
        options: [
          { id: 'A', text: 'Geldim ve gördüm.' },
          { id: 'B', text: 'Söylediğin doğruysa gelecek olan herkesi uyarmalıyım.' },
          { id: 'C', text: 'Hava güzeldi.' },
          { id: 'D', text: 'Hem okuyup hem de yazdı.' },
          { id: 'E', text: 'Eve gitti.' }
        ],
        correctOptionId: 'B',
        explanation: '"Söylediğin doğruysa gelecek olan herkesi uyarmalıyım." cümlesinde: (1) "söylediğin" — sıfat yan cümlesi, (2) "doğruysa" — şart yan cümlesi, (3) "gelecek olan herkesi" — sıfat yan cümlesi. Birden fazla yan cümle türü bir aradaydı.'
      },
      {
        id: 'q-ct-3-23',
        difficulty: 'hard',
        questionText: '"İsteseydin yapardın." cümlesi hangi anlam katmanını taşır?',
        options: [
          { id: 'A', text: 'Gerçek bir koşul bildirir.' },
          { id: 'B', text: 'Gerçekleşmemiş bir koşula bağlı hayal kırıklığı/pişmanlık bildirir.' },
          { id: 'C', text: 'Gelecekte gerçekleşebilecek bir olasılık bildirir.' },
          { id: 'D', text: 'Emir anlamı taşır.' },
          { id: 'E', text: 'Soru anlamı taşır.' }
        ],
        correctOptionId: 'B',
        explanation: '"-seydi" eki geçmişe yönelik gerçekleşmemiş koşul bildirir. "İsteseydin yapardın" = aslında istemedin, bu yüzden yapmadın. Bu dilek-şart cümlesi hayal kırıklığı, sitem veya pişmanlık anlamı içerir.'
      },
      {
        id: 'q-ct-3-24',
        difficulty: 'hard',
        questionText: '"Kimsenin bilmediği yerlere gitmek istiyorum." cümlesinde sıfat-fiil ne işlev görür?',
        options: [
          { id: 'A', text: '"Gitmek istiyorum" yükleminin öznesi' },
          { id: 'B', text: '"Yerlere" adını niteleyen sıfat yan cümlesi' },
          { id: 'C', text: 'Cümlenin nesnesi' },
          { id: 'D', text: 'Dolaylı tümleç' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'B',
        explanation: '"Kimsenin bilmediği" ifadesi "-diği" sıfat-fiil ekiyle oluşturulmuş ve "yerlere" ismini nitelemiştir. Bir sıfat işlevinde yan cümledir: "kimsenin bilmediği [yerler]".'
      },
      {
        id: 'q-ct-3-25',
        difficulty: 'hard',
        questionText: '"Ya şimdi söyle ya da hiç söyleme!" cümlesinde hangi anlamsal özellikler bir aradadır?',
        options: [
          { id: 'A', text: 'Soru + olumsuz' },
          { id: 'B', text: 'Emir + bağlı cümle yapısı + olumlu ve olumsuz' },
          { id: 'C', text: 'Şart + olumlu' },
          { id: 'D', text: 'İstek + olumsuz' },
          { id: 'E', text: 'Sadece olumsuz' }
        ],
        correctOptionId: 'B',
        explanation: '"Ya şimdi söyle" emir (olumlu), "ya da hiç söyleme!" emir (olumsuz). "Ya... ya da..." bağlaçla bağlı cümle yapısı. Emir, bağlı cümle, olumlu ve olumsuz yargı aynı cümlede bir aradadır.'
      },
      {
        id: 'q-ct-3-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisinde "girişik birleşik cümle" ve "sıralı cümle" özellikleri birlikte görülür?',
        options: [
          { id: 'A', text: 'Hava güzeldi.' },
          { id: 'B', text: 'Söylediklerini not aldım, anlattıklarını kaydettim.' },
          { id: 'C', text: 'Hem okudu hem yazdı.' },
          { id: 'D', text: 'Yarın gelecek.' },
          { id: 'E', text: 'Gördükçe özlüyorum.' }
        ],
        correctOptionId: 'B',
        explanation: '"Söylediklerini not aldım" girişik birleşik cümle (nesne yan cümlesi). "Anlattıklarını kaydettim" de girişik. İkisi virgülle sıralanmış → sıralı cümle özelliği. Her iki özellik bir aradadır.'
      },
      {
        id: 'q-ct-3-27',
        difficulty: 'hard',
        questionText: '"Ağlamak üzereydi." cümlesinin yüklemin türü bakımından değerlendirilmesi nasıl olmalıdır?',
        options: [
          { id: 'A', text: 'Yüklemi "ağlamak" olduğu için fiil cümlesidir.' },
          { id: 'B', text: 'Yüklemi "üzereydi" — "üzere" zarf + "-di" ek fiil — olduğu için isim cümlesidir.' },
          { id: 'C', text: 'Her ikisi de yüklemdir.' },
          { id: 'D', text: 'Basit fiil cümlesidir.' },
          { id: 'E', text: 'Yüklem yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: '"Üzereydi" = "üzere" (zarf) + "-ydi" (ek fiilin geçmiş zamanı). Yüklem isim soylu (zarf) + ek fiil biçiminde kurulmuştur. Bu nedenle isim cümlesi kategorisinde değerlendirilebilir.'
      },
      {
        id: 'q-ct-3-28',
        difficulty: 'hard',
        questionText: '"Sorduğu sorular, verdiği cevaplardan daha zordu." cümlesinde sıfat-fiil kullanımı kaç kez görülmektedir?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' }
        ],
        correctOptionId: 'B',
        explanation: '"Sorduğu sorular" — "sorduğu" sıfat-fiil (-duğu eki). "Verdiği cevaplardan" — "verdiği" sıfat-fiil (-diği eki). İki kez sıfat-fiil kullanılmıştır.'
      },
      {
        id: 'q-ct-3-29',
        difficulty: 'hard',
        questionText: '"Gelemeyeceğimizi önceden haber versionek isterdik." cümlesinde birden fazla yan cümle türü mevcut mudur?',
        options: [
          { id: 'A', text: 'Hayır, tek yan cümle var.' },
          { id: 'B', text: 'Evet; "gelemeyeceğimizi" nesne yan cümlesi, "haber vermek" amaç bildiren yan cümle.' },
          { id: 'C', text: 'Evet; iki şart yan cümlesi var.' },
          { id: 'D', text: 'Hayır, basit cümledir.' },
          { id: 'E', text: 'Evet; özne ve nesne yan cümleleri var.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelemeyeceğimizi" — nesne görevindeki yan cümle (-eceğimizi eki). "Haber vermek isterdik" — temel. "Önceden" amaç zarfıdır. Yapı içinde iç içe geçmiş yan cümle ve işlevler bulunmaktadır.'
      },
      {
        id: 'q-ct-3-30',
        difficulty: 'hard',
        questionText: 'Türkçede "dolaylı anlatım" (dolaylı aktarma) içeren cümle hangi cümle türüyle ilişkilidir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Sıralı cümle' },
          { id: 'C', text: 'Girişik birleşik cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'C',
        explanation: 'Dolaylı anlatımda aktarılan söz ya da düşünce yan cümle biçiminde temel cümleye bağlanır: "Geleceğini söyledi." (geleceğini = nesne yan cümlesi). Bu girişik birleşik cümle yapısıyla ilişkilidir.'
      }
    ]
  }
]
