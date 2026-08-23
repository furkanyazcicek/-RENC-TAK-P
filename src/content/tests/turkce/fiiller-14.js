export default [
  {
    id: 'test-fiiller-14-kolay',
    title: 'Fiiller 14 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-fl-14-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem 2. çoğul şahıs (siz) eki almıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah erken saatte yola koyulacağız.' },
          { id: 'B', text: 'Sınavı kazandığımı duyunca çok sevindim.' },
          { id: 'C', text: 'Hızlıca merdivenlerden yukarı çıktı.' },
          { id: 'D', text: 'Bugünlerde beni hiç aramıyorsunuz.' },
          { id: 'E', text: 'Lütfen, içeride biraz sessiz olalım.' }
        ],
        correctOptionId: 'D',
        explanation: '2. çoğul şahıs zamiri "siz"dir. "Aramıyorsunuz" (siz aramıyorsunuz) eylemi 2. çoğul şahıs eki (-sunuz) almıştır.'
      },
      {
        id: 'q-fl-14-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem duyulan (öğrenilen) geçmiş zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bütün işleri kendi başına bitirecek.' },
          { id: 'B', text: 'Sınav kağıtlarını dün gece masaya bıraktı.' },
          { id: 'C', text: 'Söylenenlere göre yeni araba almış.' },
          { id: 'D', text: 'Şu an balkonda kitap okuyor.' },
          { id: 'E', text: 'Her zaman böyle nazik davranır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Duyulan geçmiş zaman eki "-mış / -miş"tir. "Almış" eylemi duyulan geçmiş zaman kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-14-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi "durum" eylemidir?',
        options: [
          { id: 'A', text: 'Oraya gidince bizi de mutlaka *ara*.' },
          { id: 'B', text: 'Eskimiş elbiseleri çöpe *attı*.' },
          { id: 'C', text: 'Çocuk saatlerce parkta *oturdu*.' },
          { id: 'D', text: 'Ağacın yaprakları sonbaharda iyice *sarardı*.' },
          { id: 'E', text: 'Soruları büyük bir dikkatle *okudu*.' }
        ],
        correctOptionId: 'C',
        explanation: 'Durum fiilleri nesne (neyi/kimi) almazlar. "Oturdu" eylemi nesne almadığı için durum fiilidir. Ara, attı, okudu iş; sarardı ise oluş fiilidir.'
      },
      {
        id: 'q-fl-14-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "oluş" eylemi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odanın kapısını sessizce açtı.' },
          { id: 'B', text: 'Bahçedeki domatesler nihayet kızardı.' },
          { id: 'C', text: 'Arkadaşının anlattıklarına uzun uzun güldü.' },
          { id: 'D', text: 'Bütün soruları zamanından önce bitirdi.' },
          { id: 'E', text: 'Bardağı elinden düşürüp kırdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oluş eylemleri, zaman içinde öznenin kendi iradesi dışında geçirdiği değişimi anlatır. "Kızarmak" bir oluş eylemidir.'
      },
      {
        id: 'q-fl-14-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem şart kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Yarın erkenden uyanmalıyım.' },
          { id: 'B', text: 'Hafta sonu birlikte pikniğe gidelim.' },
          { id: 'C', text: 'Erken gelirsen seninle dışarı çıkarız.' },
          { id: 'D', text: 'Lütfen kapıyı kapatıp içeri giriniz.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart kipi eki "-se / -sa"dır. "Gelirsen" kelimesi geniş zamanın şartı (birleşik zaman) olsa da şart kipini barındırır. Daha basit bir seçenek yapalım. Soru kökünü veya şıkları netleştirelim. \nC) Keşke bu projeyi o da görse.\nŞimdi "görse" tam olarak basit zamanlı şart kipidir.'
      },
      {
        id: 'q-fl-14-5-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem şart kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Yarın erkenden uyanmalıyım.' },
          { id: 'B', text: 'Hafta sonu birlikte pikniğe gidelim.' },
          { id: 'C', text: 'Keşke bu projeyi o da görse.' },
          { id: 'D', text: 'Lütfen kapıyı kapatıp içeri giriniz.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart kipi eki "-se / -sa"dır. C seçeneğindeki "gör-se" eylemi şart kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-14-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde haber (bildirme) kipiyle çekimlenmiş bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün soruları zamanında çözecek.' },
          { id: 'B', text: 'Lütfen, ayakkabılarınızı kapının önünde çıkarın.' },
          { id: 'C', text: 'Bu akşam biraz erken uyumalıyım.' },
          { id: 'D', text: 'O da senin gibi biraz daha çalışsa.' },
          { id: 'E', text: 'Hafta sonu maça gidelim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "çözecek" eylemi gelecek zaman kipiyle (haber kipi) çekimlenmiştir. Diğerleri dilek kipleridir (B emir, C gereklilik, D şart, E istek).'
      },
      {
        id: 'q-fl-14-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi isim kökten türemiş bir eylemdir?',
        options: [
          { id: 'A', text: 'Başlamak' },
          { id: 'B', text: 'Bozmak' },
          { id: 'C', text: 'Görmek' },
          { id: 'D', text: 'Çözmek' },
          { id: 'E', text: 'Almak' }
        ],
        correctOptionId: 'A',
        explanation: '"Başlamak" kelimesinin kökü "baş" ismidir. İsim köküne "-la" yapım eki gelerek eylem türetilmiştir. Diğerleri fiil köküdür.'
      },
      {
        id: 'q-fl-14-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odanın kapısını sessizce açtı.' },
          { id: 'B', text: 'Sabahları her zaman erken uyanır.' },
          { id: 'C', text: 'Bugün hava gerçekten çok soğuktu.' },
          { id: 'D', text: 'Bize her zaman çok iyi davrandı.' },
          { id: 'E', text: 'Kitabını masanın üzerinde bıraktı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim soylu "soğuk" kelimesi ek fiil (-tu) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-14-9',
        difficulty: 'easy',
        questionText: '"Gül-" eyleminin gelecek zaman 3. tekil şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gülecek' },
          { id: 'B', text: 'Gülüyoruz' },
          { id: 'C', text: 'Güleceğim' },
          { id: 'D', text: 'Gülmüş' },
          { id: 'E', text: 'Güler' }
        ],
        correctOptionId: 'A',
        explanation: 'Gelecek zaman eki "-ecek", 3. tekil şahıs zamiri "o"dur. "O gülecek" doğru çekimdir.'
      },
      {
        id: 'q-fl-14-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün eşyaları kutulara yerleştirdik.' },
          { id: 'B', text: 'Onun bu söylediklerine hiç inanmadım.' },
          { id: 'C', text: 'Sen de bizimle gelecek misin?' },
          { id: 'D', text: 'Bu soruyu çözmek için çok uğraştı.' },
          { id: 'E', text: 'Yarın erkenden yola çıkacağız.' }
        ],
        correctOptionId: 'B',
        explanation: '"İnanmadım" (inan-ma-dı-m) eyleminde olumsuzluk eki (-ma) kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-fiiller-14-orta',
    title: 'Fiiller 14 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-fl-14-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması, şimdiki zamanın gelecek zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'B', text: 'Atatürk, 1919\'da Samsun\'a çıkıyor.' },
          { id: 'C', text: 'Haftaya çarşamba günü ameliyat oluyorum.' },
          { id: 'D', text: 'Nasrettin Hoca bir gün göle maya çalıyor.' },
          { id: 'E', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylem gelecek haftayı (gelecek zamanı) kastetmesine rağmen şimdiki zaman (-yor) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-14-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde duyulan geçmiş zamanın hikayesi ile çekimlenmiş bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Küçükken bu parkta akşama kadar oynardık.' },
          { id: 'B', text: 'Sınav sonuçları açıklandığında çok sevinmişti.' },
          { id: 'C', text: 'O, daha önceden de bu mahalleye gelmişmiş.' },
          { id: 'D', text: 'Ben geldiğimde o hala ders çalışıyordu.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecekti.' }
        ],
        correctOptionId: 'B',
        explanation: 'Duyulan geçmiş zaman kipi (-miş) ile ek fiilin hikayesinin (-ti) birleşmesiyle "sevin-miş-ti" fiili oluşmuştur.'
      },
      {
        id: 'q-fl-14-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tezlik fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ocağı açık unuttuğunu anlayınca eve koşuverdi.' },
          { id: 'B', text: 'Siz önden gidedurun, biz yetişiriz.' },
          { id: 'C', text: 'Bu gelenek yıllardır böyle anlatılagelir.' },
          { id: 'D', text: 'Giden arabanın arkasından bakakaldı.' },
          { id: 'E', text: 'Ayağı takılınca merdivenlerden düşeyazdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tezlik fiili eyleme "-iver" getirilerek yapılır ve eylemin çabucak veya ansızın yapıldığını bildirir. "Koşuverdi" tezlik fiilidir.'
      },
      {
        id: 'q-fl-14-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiili cümleye "olasılık (ihtimal)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Şimdi dışarı çıkıp arkadaşlarınla oynayabilirsin.' },
          { id: 'B', text: 'Bu ağır masayı tek başıma taşıyabilirim.' },
          { id: 'C', text: 'Yarın öğleden sonra yağmur yağabilir.' },
          { id: 'D', text: 'İngilizceyi çok akıcı bir şekilde konuşabilir.' },
          { id: 'E', text: 'O, bütün zorlukların üstesinden gelebilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "yağabilir" ifadesi eylemin gerçekleşme olasılığını bildirir. A\'da izin, B, D ve E\'de gücü yetme anlamı vardır.'
      },
      {
        id: 'q-fl-14-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "etmek" yardımcı eylemiyle kurulmuş birleşik fiilde ses türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Sınavı kazanamadığını öğrenince adeta kahroldu.' },
          { id: 'B', text: 'Ona ne kadar kızsam da sonunda yine affettim.' },
          { id: 'C', text: 'Zorluklar karşısında biraz sabretmelisin.' },
          { id: 'D', text: 'Bütün tekliflerimizi hiç düşünmeden kabul etti.' },
          { id: 'E', text: 'Onu dünkü davette maalesef fark etmedim.' }
        ],
        correctOptionId: 'B',
        explanation: '"Affettim" kelimesi af ve etmek sözcüklerinden oluşur. Birleşme sırasında "f" sesi türemiştir (ünsüz türemesi).'
      },
      {
        id: 'q-fl-14-16',
        difficulty: 'medium',
        questionText: 'Ek fiilin geniş zaman 3. tekil şahıs eki (-dır / -dir) bazen cümleye olasılık veya kesinlik anlamı katar. Aşağıdakilerin hangisinde ek fiil cümleye olasılık (tahmin) katmıştır?',
        options: [
          { id: 'A', text: 'Toplantı burada sona ermiştir, çıkabilirsiniz.' },
          { id: 'B', text: 'Belki şu an o da bizi düşünüyordur.' },
          { id: 'C', text: 'Türkiye\'nin başkenti Ankara\'dır.' },
          { id: 'D', text: 'Bu yasa maddesi herkes için geçerlidir.' },
          { id: 'E', text: 'Sınav süreniz bitmiştir, kalemleri bırakın.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "-dur" ek fiili "düşünüyor olabilir" (ihtimal, tahmin) anlamı katmıştır. Diğerlerinde kesinlik anlamı vardır.'
      },
      {
        id: 'q-fl-14-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin/dizelerin hangisinde anlamca kaynaşmış birleşik eylem (deyimleşmiş eylem) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Olanları duyunca öfkeden küplere bindi.' },
          { id: 'B', text: 'Uzaklardan bir tren düdüğü duyuldu.' },
          { id: 'C', text: 'Sonbahar rüzgarı ağaçların yapraklarını döküyor.' },
          { id: 'D', text: 'Bütün gün sokaklarda başıboş dolaştım.' },
          { id: 'E', text: 'Gelen misafirleri büyük bir nezaketle karşıladı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Küplere binmek" çok öfkelenmek anlamında bir deyimdir ve anlamca kaynaşmış birleşik eylemdir.'
      },
      {
        id: 'q-fl-14-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi yapısı bakımından birleşik bir eylemdir?',
        options: [
          { id: 'A', text: 'Eşyaları arabanın bagajına *yerleştirdi*.' },
          { id: 'B', text: 'Sonbaharda bütün ağaçların yaprakları *sarardı*.' },
          { id: 'C', text: 'Olanları duyunca o da benim gibi *kahroldu*.' },
          { id: 'D', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' },
          { id: 'E', text: 'Çocuklar bahçede saatlerce *koşuşturdu*.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "kahroldu" (kahır + olmak) yardımcı eylemle kurulan birleşik eylemdir. A, B, E türemiş, D ise basit eylemdir.'
      },
      {
        id: 'q-fl-14-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil, isme gelerek onu yüklem yapma görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun en sevdiği ders tarihti.' },
          { id: 'B', text: 'Sınava çalışan tek kişi oydu.' },
          { id: 'C', text: 'Buranın manzarası gerçekten çok güzeldi.' },
          { id: 'D', text: 'Eskiden bu yollardan her gün geçerdi.' },
          { id: 'E', text: 'Bütün bu sorunların kaynağı bu eski evmiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ek fiil (-di) basit zamanlı eyleme (geç-er-di) gelerek onu birleşik zamanlı eylem yapmıştır. Diğerlerinde isimleri (tarih, o, güzel, ev) yüklem yapmıştır.'
      },
      {
        id: 'q-fl-14-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yaklaşma fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sen önden gidedur, ben hemen geliyorum.' },
          { id: 'B', text: 'Bunu ona söyleyiverdim gitti.' },
          { id: 'C', text: 'Bütün işleri hızlıca bitiriverdi.' },
          { id: 'D', text: 'Bardağı elinden düşürünce kırılayazdı.' },
          { id: 'E', text: 'Bu ağır kutuyu tek başıma kaldıramam.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yaklaşma fiili eyleme az kalsın anlamı katar ve "-e yazmak" ile yapılır. "Kırılayazdı" buna örnektir.'
      }
    ]
  },
  {
    id: 'test-fiiller-14-zor',
    title: 'Fiiller 14 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-fl-14-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman (anlam) kayması" gelecek zamanın geniş zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Nasrettin Hoca bir gün göle maya çalar.' },
          { id: 'B', text: 'İşte o, her gün aynı saatte bu yoldan geçecek.' },
          { id: 'C', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'D', text: 'Mustafa Kemal, 1919\'da Samsun\'a çıkıyor.' },
          { id: 'E', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylem "her gün" gerçekleştiği için geniş zaman kullanılması gerekirken, gelecek zaman (-ecek) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-14-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin geniş zaman 3. tekil şahıs eki (-dır / -dir) bazen düşer. Aşağıdaki cümlelerin hangisinde ek fiil düştüğü halde cümlede "bildirme" anlamı devam etmektedir?',
        options: [
          { id: 'A', text: 'En büyük hayali iyi bir doktor olmaktı.' },
          { id: 'B', text: 'O günlerde bu kasabanın tek eczanesi burasıydı.' },
          { id: 'C', text: 'Dışarıda kuvvetli bir rüzgar, içeride büyük bir sessizlik var.' },
          { id: 'D', text: 'Benim için dünyadaki en değerli varlık sensin.' },
          { id: 'E', text: 'Onun bu söylediklerine sadece sessiz kaldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim cümlesinin yüklemi "var" ismidir. Normalde "vardır" olması gerekirken geniş zaman 3. tekil şahıs ek fiili (-dır) düşmüştür ve cümledeki yargı/bildirme anlamı devam eder.'
      },
      {
        id: 'q-fl-14-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu, eylemin yapılamayacağına dair geçmişte kalmış kesin bir imkansızlık bildirir biçimde çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Kapıyı defalarca zorlamasına rağmen açamadı.' },
          { id: 'B', text: 'O ağır taşı yerinden ben bile kıpırdatamam.' },
          { id: 'C', text: 'Bunca derdi o gencecik yaşında tek başına çekemez.' },
          { id: 'D', text: 'Ne kadar yalvarsa da onu asla affetmeyecek.' },
          { id: 'E', text: 'Onu gördüğüm an ne yapacağımı bilemedim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde eylem yeterlik fiilinin geçmiş zaman olumsuzudur (aç-a-ma-dı). Kesin bir imkansızlığı geçmiş zamanda ifade eder.'
      },
      {
        id: 'q-fl-14-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem basit zamanlı hem birleşik zamanlı eylem bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yağmur yağıyordu, biz de eve doğru koştuk.' },
          { id: 'B', text: 'Ölmek kaderde var, bize ürküntü vermiyor' },
          { id: 'C', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' },
          { id: 'D', text: 'Gökyüzünün başka rengi de varmış' },
          { id: 'E', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "fark ettim" ve "boğar" basit zamanlı eylemler, "yakarmış" ise birleşik zamanlı eylemdir.'
      },
      {
        id: 'q-fl-14-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki eylemlerden hangisi yapıca türemiş değildir?',
        options: [
          { id: 'A', text: 'Haber gelince hemen yola *koyulduk*.' },
          { id: 'B', text: 'Bu ağır yükleri tek başına *taşıttı*.' },
          { id: 'C', text: 'Dün akşam onu parkta *gördüm*.' },
          { id: 'D', text: 'Olayı duyan mahalleli sokağa *döküldü*.' },
          { id: 'E', text: 'Beni aramadığı için ona çok *darılmıştım*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gördüm" fiili gör- kökünden yapım eki almadan (sadece -dü ve -m çekim ekleriyle) oluşmuş basit yapılı bir fiildir. Diğerleri koy-ul, taşı-t, dök-ül, dar-ıl şeklinde yapım eki almış türemiş fiillerdir.'
      },
      {
        id: 'q-fl-14-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik zamanlı eylem yoktur?',
        options: [
          { id: 'A', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış.' },
          { id: 'B', text: 'Her akşam güneş batarken içime bir hüzün çökerdi.' },
          { id: 'C', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' },
          { id: 'D', text: 'Eskiden buralarda çok güzel elmalar yetişirdi.' },
          { id: 'E', text: 'Yüzümü güneşe çevirdim, içimi ısıtsın diye.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "çevirdim" ve "ısıtsın" eylemleri basit zamanlıdır. Diğer seçeneklerde yakarmış, çökerdi, dönecektin, yetişirdi kelimeleri birleşik zamanlıdır.'
      },
      {
        id: 'q-fl-14-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-miş" eki, ek fiil (ek eylem) göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'En sevdiği arkadaşı ona çok kırılmış.' },
          { id: 'B', text: 'O zamanlar bu okulun en başarılı öğrencisiymiş.' },
          { id: 'C', text: 'Evin bahçesindeki ağaçlar çok yaşlıymış.' },
          { id: 'D', text: 'Dünkü sınav soruları gerçekten çok zormuş.' },
          { id: 'E', text: 'Gelen misafirleri karşılayan kişi oymuş.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-mış" eki "kırılmak" eylemine gelerek duyulan geçmiş zaman (haber) kipi görevinde kullanılmıştır, ek fiil değildir. Diğer seçeneklerde isimlere gelerek onları yüklem yapan ek fiildir.'
      },
      {
        id: 'q-fl-14-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ek eylem almış bir fiilimsi (eylemsi)dir?',
        options: [
          { id: 'A', text: 'Onun en büyük hayali dünyayı *gezmekti*.' },
          { id: 'B', text: 'Senin bu yaptığın düpedüz *haksızlıktır*.' },
          { id: 'C', text: 'Gelen misafirleri kapıda büyük bir nezaketle *karşıladı*.' },
          { id: 'D', text: 'Bütün gün sokaklarda dolaşmaktan iyice *yorulmuştu*.' },
          { id: 'E', text: 'O, bizim mahallenin en eski *esnafıydı*.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde isim-fiil olan "gezmek" sözcüğü ek fiilin hikayesini (-ti) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-14-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olmak" eylemi yardımcı eylem görevinde değildir?',
        options: [
          { id: 'A', text: 'Bütün olanlardan sonra adeta kahroldu.' },
          { id: 'B', text: 'Evi temizlerken bana çok yardımcı oldu.' },
          { id: 'C', text: 'Sınavı kazanamayınca mahvoldu.' },
          { id: 'D', text: 'Meyveler bu yıl çok erken oldu.' },
          { id: 'E', text: 'Dünkü davette herkes birbiriyle tanış oldu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "oldu" kelimesi "olgunlaştı" anlamında asıl eylemdir. Diğer seçeneklerde isimle birleşerek yardımcı eylem görevi üstlenmiştir.'
      },
      {
        id: 'q-fl-14-30',
        difficulty: 'hard',
        questionText: 'Birleşik fiillerden "anlamca kaynaşmış" olanlar genellikle deyimleşmiş yapılardır. Aşağıdaki cümlelerin hangisinde deyimleşmiş birleşik fiil yoktur?',
        options: [
          { id: 'A', text: 'Olanları duyunca herkes küplere bindi.' },
          { id: 'B', text: 'Bu işin altından kalkamayacağını anlayınca ipe un serdi.' },
          { id: 'C', text: 'Bütün işleri tek başına sabahtan akşama kadar halletti.' },
          { id: 'D', text: 'Son günlerde davranışlarıyla iyice göze battı.' },
          { id: 'E', text: 'O, yıllarca bu şirkette çalışıp dirsek çürüttü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "halletti" yardımcı eylemle kurulan birleşik fiildir. Diğerleri (küplere binmek, ipe un sermek, göze batmak, dirsek çürütmek) anlamca kaynaşmış (deyimleşmiş) birleşik fiillerdir.'
      }
    ]
  }
];
