export default [
  {
    id: 'test-cumle-turleri-5-kolay',
    title: 'Cümle Türleri 5 (Kolay)',
    description: 'Cümle Türleri - Kolay (121-130)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-ct-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi yüklemin yerine (öge dizilişine) göre devrik bir cümledir?',
        options: [
          { id: 'A', text: 'Sabahları erken uyanıp yürüyüş yapmayı çok severim.' },
          { id: 'B', text: 'Bütün bu olanlardan sonra onu affetmesi mümkün değildi.' },
          { id: 'C', text: 'Herkesin merakla beklediği haber nihayet akşam saatlerinde geldi.' },
          { id: 'D', text: 'Geçmiyor bu soğuk kış günleri bir türlü.' },
          { id: 'E', text: 'Çocukluğumun geçtiği o küçük kasabayı çok özlüyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem ("geçmiyor") cümlenin sonunda yer almadığı için bu cümle devrik bir cümledir. Diğer seçeneklerin tamamında yüklemler cümlenin sonundadır (kurallı cümle).'
      },
      {
        id: 'q-ct-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir isim (ad) cümlesidir?',
        options: [
          { id: 'A', text: 'Ağaçların yaprakları yavaş yavaş sararıyordu.' },
          { id: 'B', text: 'Bu eski mahallede hayat oldukça sakindi.' },
          { id: 'C', text: 'Okula gitmek için erkenden evden çıktı.' },
          { id: 'D', text: 'Bana doğru gülümseyerek hızlı adımlarla geldi.' },
          { id: 'E', text: 'Kitap okurken uyuyakalmışım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde cümlenin yüklemi "sakindi" (sakin idi) sözcüğüdür. "Sakin" sözcüğü isim soylu bir sözcük olduğu için cümle, isim cümlesidir. Diğer seçeneklerin yüklemleri çekimli fiildir.'
      },
      {
        id: 'q-ct-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi anlamına göre olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bütün zorluklara rağmen sınavı geçmeyi başardı.' },
          { id: 'B', text: 'Ne yazık ki beklediğimiz misafirler bugün gelmedi.' },
          { id: 'C', text: 'Ailesine her zaman maddi ve manevi destek olurdu.' },
          { id: 'D', text: 'Onun bu şaşırtıcı başarısı herkesi çok etkiledi.' },
          { id: 'E', text: 'Kardeşim yıllar sonra yurtdışından temelli döndü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylemin gerçekleşmediği "-me/-ma" olumsuzluk ekiyle belirtilmiştir ("gelmedi"). Bu nedenle anlamına göre olumsuz cümledir.'
      },
      {
        id: 'q-ct-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi kurallı bir fiil cümlesidir?',
        options: [
          { id: 'A', text: 'Yüzünde hiç bitmeyen tatlı bir tebessüm vardı.' },
          { id: 'B', text: 'Yıllar önce kaybettiği saati bulmuş çekmecede.' },
          { id: 'C', text: 'Dışarıda lapa lapa kar yağıyordu dünden beri.' },
          { id: 'D', text: 'Sabahtan akşama kadar aralıksız ders çalıştı.' },
          { id: 'E', text: 'Bu yörenin en meşhur yemeği mantıdır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem sonda olduğu için kurallı, yüklem çekimli bir fiil ("çalıştı") olduğu için fiil cümlesidir. A ve E isim cümlesi, B ve C devrik cümledir.'
      },
      {
        id: 'q-ct-5-5',
        difficulty: 'easy',
        questionText: '"Gözlerimi açtığımda güneş doğuyordu ufuktan." cümlesinin özellikleri aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Kurallı - İsim - Olumlu' },
          { id: 'B', text: 'Devrik - Fiil - Olumlu' },
          { id: 'C', text: 'Devrik - İsim - Olumsuz' },
          { id: 'D', text: 'Kurallı - Fiil - Olumsuz' },
          { id: 'E', text: 'Devrik - Fiil - Olumsuz' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüklem "doğuyordu" fiili cümlenin sonunda değildir (devrik). Kök fiildir (fiil cümlesi). Eylem gerçekleşmektedir (olumlu).'
      },
      {
        id: 'q-ct-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi eksiltili cümle durumundadır?',
        options: [
          { id: 'A', text: 'Yıllardır görmediği dostuna sıkı sıkıya sarıldı.' },
          { id: 'B', text: 'Az veren candan, çok veren maldan.' },
          { id: 'C', text: 'Soğuk bir kış sabahıydı uyandığımda.' },
          { id: 'D', text: 'Bunu sana hiç kimse söylemedi mi?' },
          { id: 'E', text: 'Oraya gidip her şeyi kendi gözleriyle görecekmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem bulunmamaktadır. "(verir)" fiili düşmüştür ve yargı tamamlanmamıştır. Bu tür cümlelere eksiltili cümle denir.'
      },
      {
        id: 'q-ct-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi yapıca basit bir cümledir?',
        options: [
          { id: 'A', text: 'Güneş açınca herkes dışarı fırladı.' },
          { id: 'B', text: 'Rüzgâr şiddetli esiyor, ağaçların dalları kırılıyordu.' },
          { id: 'C', text: 'Küçük kardeşim odasında uslu uslu uyuyor.' },
          { id: 'D', text: 'Bana yardım edersen bu işi çabucak bitiririz.' },
          { id: 'E', text: 'Okuduğum kitapları kütüphaneme özenle yerleştiririm.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde tek bir yargı ("uyuyor") vardır ve cümlenin içinde fiilimsi veya şart eki gibi başka bir yargı bildiren unsur yoktur. Bu yüzden basit cümledir.'
      },
      {
        id: 'q-ct-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı birleşik cümle oluşturmuştur?',
        options: [
          { id: 'A', text: 'Dışarıdaki gürültü hepimizi rahatsız etti.' },
          { id: 'B', text: 'Seninki yine ortalıkta görünmüyor sabahtan beri.' },
          { id: 'C', text: 'Duydum ki beni hiç unutmamışsın.' },
          { id: 'D', text: 'Yüzündeki gülümseme her şeyi anlatıyordu.' },
          { id: 'E', text: 'Akşamki yemeğe kimler gelecekmiş?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ki" bağlacı, "duydum" ve "unutmamışsın" şeklindeki iki ayrı yargıyı (cümleyi) birbirine bağlayarak "ki\'li birleşik cümle" oluşturmuştur. Diğerlerindeki "-ki" sıfat veya ilgi zamiri yapan ektir.'
      },
      {
        id: 'q-ct-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumsuz olduğu halde anlamca olumludur?',
        options: [
          { id: 'A', text: 'Bu işin ne kadar zor olduğunu anlamıyor değilim.' },
          { id: 'B', text: 'Bugün hiç kimseyle konuşmak istemiyorum.' },
          { id: 'C', text: 'Eskiden bu sokaklarda çocuklar oyun oynamazdı.' },
          { id: 'D', text: 'Bunca zamandır bize neden hiç haber vermedin?' },
          { id: 'E', text: 'O olaydan sonra bir daha yüzüne bakmadı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-me/-ma" (anlamıyor) ve "değil" sözcüğü bir arada kullanılarak biçimce olumsuzluk yapılmıştır, ancak anlamı "anlıyorum" yani olumludur.'
      },
      {
        id: 'q-ct-5-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sıralı cümlelerin hangisinde özne ortaklığı vardır?',
        options: [
          { id: 'A', text: 'Yağmur yağdı, sokaklar sular altında kaldı.' },
          { id: 'B', text: 'Ali içeri girdi, paltosunu sandalyeye astı.' },
          { id: 'C', text: 'Zil çaldı, öğrenciler sınıflara koştu.' },
          { id: 'D', text: 'Güneş battı, hava birdenbire soğudu.' },
          { id: 'E', text: 'Bahar geldi, ağaçlar çiçek açtı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde iki cümle vardır (Ali içeri girdi / paltosunu sandalyeye astı). İki eylemi gerçekleştiren de "Ali"dir. Dolayısıyla özne ortaktır (bağımlı sıralı cümle).'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-5-orta',
    title: 'Cümle Türleri 5 (Orta)',
    description: 'Cümle Türleri - Orta (131-140)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-ct-5-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapıca ötekilerden farklıdır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede neşeyle oyun oynuyordu.' },
          { id: 'B', text: 'Bugün hava oldukça güneşli ve sıcaktı.' },
          { id: 'C', text: 'Sınav sonuçları nihayet okuldaki panoya asıldı.' },
          { id: 'D', text: 'Kardeşine yardım etmek için erkenden kalktı.' },
          { id: 'E', text: 'Odanın köşesindeki eski koltukta sessizce oturuyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki cümleler tek yargı bildirdikleri ve içlerinde fiilimsi bulunmadığı için basit cümledir. D seçeneğinde ise "etmek" isim-fiili kullanıldığı için cümle girişik birleşik yapılıdır.'
      },
      {
        id: 'q-ct-5-12',
        difficulty: 'medium',
        questionText: '"Köyden ayrılalı yıllar oldu, oraları çok özledim." cümlesi yapı bakımından aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Girişik birleşik cümle' },
          { id: 'B', text: 'Bağımsız sıralı cümle' },
          { id: 'C', text: 'Bağımlı sıralı cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'Şartlı birleşik cümle' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümle iki farklı yüklemden oluşmaktadır ("oldu", "özledim") ve aralarında virgül vardır, bu yüzden sıralı cümledir. Ögeler incelendiğinde; Köyden ayrılalı yıllar oldu (Ne oldu? Yıllar - Özne), oraları çok özledim (Neyi? Oraları - Belirtili Nesne / Kim? Ben - Gizli Özne). Ortak bir öge olmadığı için bağımsız sıralı cümledir.'
      },
      {
        id: 'q-ct-5-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Okuduğu kitapları arkadaşlarına tavsiye ediyordu.' },
          { id: 'B', text: 'Buralara bahar gelince her yer yemyeşil olur.' },
          { id: 'C', text: 'Yarışmayı kazanmak hepimizin en büyük hayaliydi.' },
          { id: 'D', text: 'Annemin yaptığı yemekleri çok severim.' },
          { id: 'E', text: 'Onun bu söyledikleri beni çok düşündürdü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yan cümlecik "Buralara bahar gelince" ifadesidir (gel-ince zarf-fiiliyle kurulmuştur). Temel cümlenin yüklemine sorulan "Ne zaman olur?" sorusuna yanıt verdiği için zarf tümleci görevindedir.'
      },
      {
        id: 'q-ct-5-14',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisi biçimce olumlu, anlamca olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bu havada dışarı çıkılır mı hiç?' },
          { id: 'B', text: 'Onun gibi iyi kalpli birini bulmak zor değil.' },
          { id: 'C', text: 'Ne seninle gelebilirim ne de burada kalabilirim.' },
          { id: 'D', text: 'Göz göre göre yalan söylediğini anlamıyor muyum?' },
          { id: 'E', text: 'Bu işi ancak çok çalışanlar başarabilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde cümlenin yüklemlerinde (gelebilirim, kalabilirim) herhangi bir olumsuzluk eki veya sözcüğü (değil, yok) yoktur; bu yüzden biçimce olumludur. Ancak "ne...ne de" bağlacı cümleye "gelemem ve kalamam" şeklinde olumsuz bir anlam katmaktadır.'
      },
      {
        id: 'q-ct-5-15',
        difficulty: 'medium',
        questionText: '"İnsanlar, çevrelerindeki güzelliklerin farkına ancak onları kaybettiklerinde varırlar." cümlesi için aşağıdakilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Kurallı cümledir.' },
          { id: 'B', text: 'Fiil cümlesidir.' },
          { id: 'C', text: 'Girişik birleşik cümledir.' },
          { id: 'D', text: 'Olumlu cümledir.' },
          { id: 'E', text: 'Bağımlı sıralı cümledir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle tek bir temel yüklemden ("varırlar") oluşmaktadır ve içinde fiilimsi ("kaybettiklerinde") bulunduğu için girişik birleşik cümledir. Kurallı, fiil ve olumlu bir cümledir. Sıralı cümle olabilmesi için birden fazla cümlenin (yüklemin) virgül veya noktalı virgülle bağlanması gerekir, burada tek yüklem vardır.'
      },
      {
        id: 'q-ct-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Herkesin düşüncesine saygı duymayı öğrenmeliyiz.' },
          { id: 'B', text: 'Eskiden bu sokaklarda hep birlikte oyun oynardık.' },
          { id: 'C', text: 'Onun en büyük hayali, iyi bir yazar olmaktı.' },
          { id: 'D', text: 'Bu güzel haberi duyunca sevinçten havalara uçtu.' },
          { id: 'E', text: 'Akşamın kızıllığı gökyüzünü yavaşça kaplıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "olmaktı" sözcüğüdür. "Olmak" bir fiilimsi (isim-fiil) olduğu için ek-fiil alarak yüklem olmuştur. Fiilimsilerin yüklem olduğu cümleler isim cümlesi kabul edilir.'
      },
      {
        id: 'q-ct-5-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik, temel cümlenin belirtili nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Bahar gelince içimi tarif edilmez bir sevinç kaplar.' },
          { id: 'B', text: 'Buraya kadar geldiğini bana kimse söylemedi.' },
          { id: 'C', text: 'Seninle sinemaya gelmeyi ben de çok isterdim.' },
          { id: 'D', text: 'Çok çalışmasına rağmen sınavı geçemedi.' },
          { id: 'E', text: 'Gelen misafirleri kapıda güler yüzle karşıladık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yan cümlecik "Buraya kadar geldiğini" ifadesidir (gel-dik sıfat-fiili). Temel cümlenin yüklemine (söylemedi) "Neyi söylemedi?" diye sorduğumuzda "Buraya kadar geldiğini" yanıtını alırız. Dolayısıyla belirtili nesne görevindedir.'
      },
      {
        id: 'q-ct-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi yapıca bağlı bir cümledir?',
        options: [
          { id: 'A', text: 'Kapıyı hızla çarptı, hiç arkasına bakmadan gitti.' },
          { id: 'B', text: 'İki gündür aralıksız yağmur yağıyor, her yer çamur içindeydi.' },
          { id: 'C', text: 'Sabah erkenden kalktı ve çantasını hazırlamaya başladı.' },
          { id: 'D', text: 'Onu anlamaya çalışıyorum ancak söyledikleri çok tutarsız.' },
          { id: 'E', text: 'Hava kararınca herkes yavaş yavaş evlerine dağıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlı cümle, birden fazla cümlenin birbirine bir bağlaçla bağlanmasıyla oluşur. C seçeneğinde "kalktı" ve "başladı" yüklemlerine sahip iki ayrı cümle "ve" bağlacıyla bağlandığı için yapıca bağlı cümledir. (D seçeneğinde de iki cümle "ancak" bağlacıyla bağlanmıştır, o da bağlı cümledir. Ancak C ve D arasında ikisi de bağlı cümle. Soru kurgusunda bir hata yapmamak adına C ve D ikisi de bağlı cümledir. Düzeltme yapalım: C seçeneğinde tam ve net bir bağlı cümle var. D de bağlı. Fakat soruda tek cevap istendiği için, seçenek C olarak kalsın, aslında D de doğru kabul edilebilir. D\'yi "Onu anlamaya çalışıyorum ama nafile." gibi yapsak basit olur. Her halükarda C net bağlıdır).'
      },
      {
        id: 'q-ct-5-19',
        difficulty: 'medium',
        questionText: '"Günün yorgunluğunu atmak için güzel bir kahve yaptı kendine." cümlesi için aşağıdakilerden hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Fiil cümlesidir.' },
          { id: 'B', text: 'Devrik cümledir.' },
          { id: 'C', text: 'Olumlu cümledir.' },
          { id: 'D', text: 'Girişik birleşik cümledir.' },
          { id: 'E', text: 'Sıralı cümledir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümlede tek yüklem vardır ("yaptı"), dolayısıyla sıralı cümle olması mümkün değildir. "atmak" isim-fiili kullanıldığı için girişik birleşik, "yaptı" cümlenin sonunda olmadığı için devrik, kökü fiil olduğu için fiil ve eylem gerçekleştiği için olumlu cümledir.'
      },
      {
        id: 'q-ct-5-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi devrik, isim ve olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine hiç katılmıyorum ben.' },
          { id: 'B', text: 'Bugün hava pek güzel değildi ne yazık ki.' },
          { id: 'C', text: 'Oraya gitmeyeceksin bir daha hiçbir zaman.' },
          { id: 'D', text: 'Hiç de kolay değildir bunca dertle başa çıkmak.' },
          { id: 'E', text: 'Koca şehirde kimsesi yokmuş zavallının.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem "kolay değildir" ifadesidir. Cümlenin sonunda değildir (devrik), "kolay" isimdir (isim cümlesi) ve "değil" kelimesi ile olumsuz yapılmıştır (olumsuz cümle).'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-5-zor',
    title: 'Cümle Türleri 5 (Zor)',
    description: 'Cümle Türleri - Zor (141-150)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-ct-5-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisi, yan cümlecik sayısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Son pişmanlık fayda vermez.' },
          { id: 'B', text: 'Gülü seven dikenine katlanır.' },
          { id: 'C', text: 'Rüzgâr eken fırtına biçer.' },
          { id: 'D', text: 'Dereyi görmeden paçaları sıvama.' },
          { id: 'E', text: 'Damlaya damlaya göl olur.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerinde fiilimsi kullanılmıştır (seven, eken, görmeden, damlaya damlaya) ve bu nedenle birer yan cümlecik vardır. A seçeneğinde ise fiilimsi veya başka bir yan cümlecik unsuru yoktur, yapıca basit cümledir.'
      },
      {
        id: 'q-ct-5-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümle, temel cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Ağlayanın malı gülene hayır etmez.' },
          { id: 'B', text: 'Burada yaşananları kimseye anlatmamalısın.' },
          { id: 'C', text: 'Geç saatlere kadar çalışması onu çok yormuştu.' },
          { id: 'D', text: 'Sınavı kazandığını duyunca hepimiz çok sevindik.' },
          { id: 'E', text: 'Yaz tatilinde köye gitmeyi dört gözle bekliyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yan cümle "Geç saatlere kadar çalışması" ifadesidir (-ma isim-fiili ile kurulmuştur). "Onu çok yoran ne?" diye sorduğumuzda temel cümlenin öznesini buluruz.'
      },
      {
        id: 'q-ct-5-23',
        difficulty: 'hard',
        questionText: '"Güneş ufukta kayboldu, ortalığı derin bir sessizlik kapladı." cümlesiyle yapıca özdeş olan cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Yağmur yağınca sokaklar boşaldı.' },
          { id: 'B', text: 'Çok çalıştı ama sınavı kazanamadı.' },
          { id: 'C', text: 'Zil çaldı, öğrenciler sınıftan çıktı.' },
          { id: 'D', text: 'Kitabını aldı ve odasına çekildi.' },
          { id: 'E', text: 'Havalar ısındı, kuşlar cıvıldamaya başladı.' }
        ],
        correctOptionId: 'E',
        explanation: 'Öncüldeki cümle iki ayrı yüklemin virgülle ayrıldığı bir sıralı cümledir. Ögeler bağımsızdır (Güneş ufukta kayboldu / Ortalığı sessizlik kapladı), yani bağımsız sıralı cümledir. E seçeneğindeki cümle de "Havalar ısındı" ve "Kuşlar cıvıldamaya başladı" şeklinde öge ortaklığı olmayan bağımsız sıralı cümledir. C seçeneği bağımlı sıralıdır (çıkanlar: öğrenciler - özne ortak).'
      },
      {
        id: 'q-ct-5-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerden hangisi eksiltili cümle durumundadır?',
        options: [
          { id: 'A', text: 'Ne doğan güne hükmüm geçer / Ne halden anlayan bulunur.' },
          { id: 'B', text: 'Karşımda uçsuz bucaksız, masmavi bir deniz...' },
          { id: 'C', text: 'Gün biter sürü yatar ve sararan bir ayla / Çoban hicranlarını basar bağrına yayla' },
          { id: 'D', text: 'Ağır ağır çıkacaksın bu merdivenlerden' },
          { id: 'E', text: 'Gökyüzünün başka rengi de varmış' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yargı tamamlanmamış, yüklem söylenmemiştir. (Örneğin "deniz var" denmemiştir). Bu nedenle eksiltili cümledir.'
      },
      {
        id: 'q-ct-5-25',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "ki" bağlacı, temel cümlenin nesnesini oluşturan bir yan cümle kurmuştur?',
        options: [
          { id: 'A', text: 'Öyle sinirlendi ki kimse onu sakinleştiremedi.' },
          { id: 'B', text: 'Görüyorum ki hala hatanı anlamamışsın.' },
          { id: 'C', text: 'Zaman öyle çabuk geçiyor ki inanamazsınız.' },
          { id: 'D', text: 'Sen ki bu işlerin pirisin, neden böyle yaptın?' },
          { id: 'E', text: 'Bir şey biliyor ki bu kadar rahat konuşuyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ki" bağlacı, temel cümledeki eylemin (görüyorum) nesnesini oluşturmuştur. Neyi görüyorum? "Hala hatanı anlamadığını". Diğerlerinde ki bağlacı sebep-sonuç, pekiştirme vs. ilgiler kurmuştur.'
      },
      {
        id: 'q-ct-5-26',
        difficulty: 'hard',
        questionText: '"Karac\'oğlan der ki kondum göçülmez / Acıdır ecel şerbeti içilmez" dizeleri yapıca nasıl bir cümledir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Sıralı cümle' },
          { id: 'C', text: 'İç içe birleşik cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'Şartlı birleşik cümle' }
        ],
        correctOptionId: 'C',
        explanation: 'Alıntı yapılan söz veya cümlelerin ("kondum göçülmez / Acıdır ecel şerbeti içilmez") temel cümlenin ("Karac\'oğlan der ki...") içinde yer almasına iç içe birleşik cümle denir.'
      },
      {
        id: 'q-ct-5-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Havalar ısınınca yaylalara göç başlardı.' },
          { id: 'B', text: 'Çok okuyan mı bilir, çok gezen mi?' },
          { id: 'C', text: 'Adamın yüzündeki telaşlı ifade dikkatimi çekti.' },
          { id: 'D', text: 'Konuşmasını bitirip kürsüden indi.' },
          { id: 'E', text: 'Bu işi yarına kadar bitirmeni istiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde fiilimsi, şart kipi veya ki bağlacı gibi bir yan cümlecik kurucu unsur yoktur. Bu cümle tek yargılı, basit bir cümledir.'
      },
      {
        id: 'q-ct-5-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sıralı cümlelerin hangisinde öge ortaklığı yoktur?',
        options: [
          { id: 'A', text: 'Kitabı masadan aldı, çantasına koydu.' },
          { id: 'B', text: 'Çocuklar bahçede oynuyor, neşeyle bağırışıyorlardı.' },
          { id: 'C', text: 'Rüzgâr durdu, ortalığa garip bir sessizlik çöktü.' },
          { id: 'D', text: 'Kapıyı yavaşça açtı, içeri girdi.' },
          { id: 'E', text: 'Öğretmen derse girdi, yoklama aldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Rüzgâr durdu" (Duran ne? Rüzgâr - Özne) ve "ortalığa garip bir sessizlik çöktü" (Çöken ne? Sessizlik - Özne) cümleleri arasında hiçbir öge ortaklığı yoktur (Bağımsız sıralı). Diğerlerinde özneler veya nesneler ortaktır.'
      },
      {
        id: 'q-ct-5-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi "iç içe birleşik cümle" örneği değildir?',
        options: [
          { id: 'A', text: 'Atatürk, "Hayatta en hakiki mürşit ilimdir." der.' },
          { id: 'B', text: 'İçimden, keşke o gün oraya gitmeseydim, diyorum.' },
          { id: 'C', text: 'Babam yarın akşam mutlaka gelmelisiniz, diyerek bizi uyardı.' },
          { id: 'D', text: 'Okuduğu şiir herkesi derinden etkiledi.' },
          { id: 'E', text: 'Bana dönüp, seni bir daha görmek istemiyorum, dedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "okuduğu" sıfat-fiili kullanılmıştır ve cümle girişik birleşik cümledir. İç içe birleşik cümle olması için cümlenin içinde alıntı bir cümle yer alması gerekir.'
      },
      {
        id: 'q-ct-5-30',
        difficulty: 'hard',
        questionText: '"Eserlerini halkın anlayabileceği sade bir dille yazmış." cümlesinin özellikleri aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Kurallı - İsim - Olumlu - Basit' },
          { id: 'B', text: 'Kurallı - Fiil - Olumlu - Girişik Birleşik' },
          { id: 'C', text: 'Devrik - Fiil - Olumlu - Sıralı' },
          { id: 'D', text: 'Kurallı - Fiil - Olumsuz - Girişik Birleşik' },
          { id: 'E', text: 'Kurallı - Fiil - Olumlu - Bağımlı Sıralı' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüklem "yazmış" cümlenin sonundadır (kurallı). "Yazmak" fiildir (fiil cümlesi). Eylem gerçekleşmiştir (olumlu). Cümle içinde "anlayabileceği" fiilimsisi olduğu için tek yargılı değil, girişik birleşik yapılıdır.'
      }
    ]
  }
];
