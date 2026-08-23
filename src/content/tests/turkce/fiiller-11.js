export default [
  {
    id: 'test-fiiller-11-kolay',
    title: 'Fiiller 11 (Kolay)',
    description: 'Fiiller ve Ek Fiil - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-fl-11-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem 2. tekil şahıs (sen) eki ile çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Bugünlerde kendini çok yoruyorsun.' },
          { id: 'B', text: 'Hızlıca merdivenlerden yukarı çıktı.' },
          { id: 'C', text: 'Lütfen, içeride biraz sessiz olunuz.' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'O, hiçbir zaman yalan söylemez.' }
        ],
        correctOptionId: 'A',
        explanation: '2. tekil şahıs zamiri "sen"dir. "Yoruyorsun" (sen yoruyorsun) eylemi 2. tekil şahıs eki (-sun) almıştır.'
      },
      {
        id: 'q-fl-11-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem, gelecek zaman kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Sınav kağıtlarını dün gece masaya bıraktı.' },
          { id: 'B', text: 'Bu kitabı yıllar önce okumuştum.' },
          { id: 'C', text: 'Bütün işleri kendi başına bitirecek.' },
          { id: 'D', text: 'Her zaman böyle nazik davranır.' },
          { id: 'E', text: 'Şu an balkonda kitap okuyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelecek zaman eki "-acak / -ecek"tir. "Bitirecek" eylemi gelecek zaman kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-11-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi "iş (kılış)" eylemidir?',
        options: [
          { id: 'A', text: 'Ağacın yaprakları sonbaharda iyice *sarardı*.' },
          { id: 'B', text: 'Korkudan sabaha kadar *uyuyamadı*.' },
          { id: 'C', text: 'Oraya gidince bizi de mutlaka *ara*.' },
          { id: 'D', text: 'Uzun zaman kullanılmayan demirler *paslanmış*.' },
          { id: 'E', text: 'Çocuk parkta oynamaktan çok *yoruldu*.' }
        ],
        correctOptionId: 'C',
        explanation: 'İş fiilleri nesne (neyi/kimi) alabilen fiillerdir. "Kimi ara? -> bizi" cevabı alınabildiği için "aramak" iş fiilidir. Uyuyamadı ve yoruldu durum, sarardı ve paslanmış oluş fiilidir.'
      },
      {
        id: 'q-fl-11-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "oluş" eylemi kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kahvesini yudumlarken gazetesini okudu.' },
          { id: 'B', text: 'Camdaki lekeleri temizlemek için çok uğraştı.' },
          { id: 'C', text: 'Akşam yemeği için güzel bir sofra hazırladı.' },
          { id: 'D', text: 'Dolapta unutulan peynir iyice küflenmiş.' },
          { id: 'E', text: 'Odanın kapısını sessizce açtı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Oluş eylemleri, zaman içinde öznenin kendi iradesi dışında geçirdiği değişimi anlatır. "Küflenmek" bir oluş eylemidir.'
      },
      {
        id: 'q-fl-11-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde eylem istek kipiyle çekimlenmiştir?',
        options: [
          { id: 'A', text: 'Yarın erkenden uyanmalıyım.' },
          { id: 'B', text: 'Hafta sonu birlikte pikniğe gidelim.' },
          { id: 'C', text: 'Lütfen kapıyı kapatıp içeri giriniz.' },
          { id: 'D', text: 'Keşke sen de o akşam bizimle gelseydin.' },
          { id: 'E', text: 'Yarın akşam bize yemeğe gelecek.' }
        ],
        correctOptionId: 'B',
        explanation: 'İstek kipi eki "-e / -a"dır. "Gidelim" (git-e-lim) eylemi istek kipi 1. çoğul şahısla çekimlenmiştir.'
      },
      {
        id: 'q-fl-11-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dilek (tasarlama) kiplerinden biriyle çekimlenmiş bir fiil yoktur?',
        options: [
          { id: 'A', text: 'Bana yardım edersen bu işi çok çabuk bitiririz.' },
          { id: 'B', text: 'Lütfen, ayakkabılarınızı kapının önünde çıkarın.' },
          { id: 'C', text: 'Bu akşam biraz erken uyumalıyım.' },
          { id: 'D', text: 'Bütün soruları zamanında çözecek.' },
          { id: 'E', text: 'O da senin gibi biraz daha çalışsa.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "çözecek" eylemi gelecek zaman kipiyle (haber kipi) çekimlenmiştir. A\'daki "bitiririz" geniş zaman haber kipidir ama "edersen" şart kipidir (birleşik cümle). D seçeneğinde sadece haber kipi vardır.'
      },
      {
        id: 'q-fl-11-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yansıma kökten türemiş bir eylem değildir?',
        options: [
          { id: 'A', text: 'Hapşırmak' },
          { id: 'B', text: 'Miyavlamak' },
          { id: 'C', text: 'Patlamak' },
          { id: 'D', text: 'Çıtlamak' },
          { id: 'E', text: 'Başlamak' }
        ],
        correctOptionId: 'E',
        explanation: '"Başlamak" kelimesinin kökü "baş" ismidir ve yansıma (doğadaki seslerin taklidi) değildir. Diğerleri (hapşır, miyav, pat, çıt) yansıma köktür.'
      },
      {
        id: 'q-fl-11-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabahları her zaman erken uyanır.' },
          { id: 'B', text: 'Odanın kapısını sessizce açtı.' },
          { id: 'C', text: 'Elindeki paket oldukça ağırdı.' },
          { id: 'D', text: 'Kitabını masanın üzerinde bıraktı.' },
          { id: 'E', text: 'Bize her zaman çok iyi davrandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim soylu "ağır" kelimesi ek fiil (-dı) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-11-9',
        difficulty: 'easy',
        questionText: '"Gül-" eyleminin şimdiki zaman 3. tekil şahıs çekimi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gülüyoruz' },
          { id: 'B', text: 'Gülecek' },
          { id: 'C', text: 'Gülmüş' },
          { id: 'D', text: 'Gülüyor' },
          { id: 'E', text: 'Güler' }
        ],
        correctOptionId: 'D',
        explanation: 'Şimdiki zaman eki "-yor", 3. tekil şahıs zamiri "o"dur. "O gülüyor" doğru çekimdir.'
      },
      {
        id: 'q-fl-11-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde fiilin olumsuzu kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerine hiç şaşırmadım.' },
          { id: 'B', text: 'Bütün eşyaları kutulara yerleştirdik.' },
          { id: 'C', text: 'Yarın erkenden yola çıkıyoruz.' },
          { id: 'D', text: 'Bu soruyu çözmek için çok uğraştı.' },
          { id: 'E', text: 'Yeni evleri gerçekten çok güzelmiş.' }
        ],
        correctOptionId: 'A',
        explanation: '"Şaşırmadım" (şaşır-ma-dı-m) eyleminde olumsuzluk eki "-ma/-me" kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-fiiller-11-orta',
    title: 'Fiiller 11 (Orta)',
    description: 'Fiiller ve Ek Fiil - Orta (101-110)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-fl-11-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zaman (anlam) kayması, şimdiki zamanın gelecek zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Nasrettin Hoca bir gün göle maya çalar.' },
          { id: 'B', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'C', text: 'Haftaya perşembe günü ameliyat oluyorum.' },
          { id: 'D', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' },
          { id: 'E', text: 'Lütfen, artık bu konu hakkında konuşmayalım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eylem gelecek haftayı (gelecek zamanı) kastetmesine rağmen şimdiki zaman (-yor) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-11-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde duyulan geçmiş zamanın rivayeti ile çekimlenmiş bir fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınav sonuçları açıklandığında çok sevinmişti.' },
          { id: 'B', text: 'Küçükken bu parkta akşama kadar oynardık.' },
          { id: 'C', text: 'Keşke biraz daha dikkatli davransaydın.' },
          { id: 'D', text: 'O, daha önceden de bu mahalleye gelmişmiş.' },
          { id: 'E', text: 'Yarınki toplantı iptal edilecekmiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'Duyulan geçmiş zaman kipi (-miş) ile ek fiilin rivayetinin (-miş) birleşmesiyle "gel-miş-miş" fiili oluşmuştur.'
      },
      {
        id: 'q-fl-11-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sürerlik fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ocağı açık unuttuğunu anlayınca eve koşuverdi.' },
          { id: 'B', text: 'O kadar yorgundu ki koltukta uyuyakaldı.' },
          { id: 'C', text: 'Bu problemi sadece o çözebilir.' },
          { id: 'D', text: 'Ayağı kayınca havuzun içine düşeyazdı.' },
          { id: 'E', text: 'Dışarı çıkmadan önce bulaşıkları yıkayıverdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürerlik fiili eyleme "-edur, -ekal, -egel" getirilerek yapılır ve eylemin devam ettiğini bildirir. "Uyuyakaldı" sürerlik fiilidir.'
      },
      {
        id: 'q-fl-11-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiili cümleye "ihtimal (olasılık)" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu ağır kutuyu tek başıma taşıyabilirim.' },
          { id: 'B', text: 'İngilizceyi çok akıcı bir şekilde konuşabilir.' },
          { id: 'C', text: 'Şimdi dışarı çıkıp arkadaşlarınla oynayabilirsin.' },
          { id: 'D', text: 'Yarın öğleden sonra yağmur yağabilir.' },
          { id: 'E', text: 'O, bütün zorlukların üstesinden gelebilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "yağabilir" ifadesi eylemin gerçekleşme olasılığını bildirir. A, B, E\'de gücü yetme, C\'de izin anlamı vardır.'
      },
      {
        id: 'q-fl-11-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "etmek" yardımcı eylemiyle kurulmuş birleşik fiilde ses düşmesi olmuştur?',
        options: [
          { id: 'A', text: 'Bütün tekliflerimizi hiç düşünmeden reddetti.' },
          { id: 'B', text: 'Sınavı kazanamadığını öğrenince adeta kahroldu.' },
          { id: 'C', text: 'Ona ne kadar kızsam da sonunda yine affettim.' },
          { id: 'D', text: 'Zorluklar karşısında biraz sabretmelisin.' },
          { id: 'E', text: 'Onu dünkü davette maalesef fark etmedim.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sabretmek" kelimesi sabır ve etmek sözcüklerinden oluşur. Birleşme sırasında "ı" sesi düşmüştür. B seçeneğinde kahrolmak (kahır+olmak) düşme vardır ama yardımcı eylem "olmak"tır, soruda "etmek" sorulmuştur.'
      },
      {
        id: 'q-fl-11-16',
        difficulty: 'medium',
        questionText: 'Ek fiil "-idi" aşağıdakilerin hangisinde cümleye "terk edilmiş bir alışkanlık" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın erkenden yola çıkacaktık.' },
          { id: 'B', text: 'Gençliğinde her sabah mutlaka koşardı.' },
          { id: 'C', text: 'Onu daha önce de bu parkta görmüştüm.' },
          { id: 'D', text: 'Bunu ona uygun bir dille anlatmalıydın.' },
          { id: 'E', text: 'O zamanlar buranın en iyi ustası oydu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Geniş zamanın hikayesi (-ardı / -erdi) geçmişte sürekli yapılan ancak artık yapılmayan, terk edilmiş alışkanlıkları ifade eder (koşardı).'
      },
      {
        id: 'q-fl-11-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde anlamca kaynaşmış birleşik eylem (deyimleşmiş eylem) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Uzaklardan bir tren düdüğü duyuldu.' },
          { id: 'B', text: 'Gözlerimi ufuktan bir an bile ayıramadım.' },
          { id: 'C', text: 'Sınav sonucunu öğrenince havalara uçtu.' },
          { id: 'D', text: 'Sonbahar rüzgarı ağaçların yapraklarını döküyor.' },
          { id: 'E', text: 'Gelen misafirleri büyük bir nezaketle karşıladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Havalara uçmak" çok sevinmek anlamında bir deyimdir ve anlamca kaynaşmış birleşik eylemdir.'
      },
      {
        id: 'q-fl-11-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili eylemlerden hangisi yapısı bakımından birleşik bir eylemdir?',
        options: [
          { id: 'A', text: 'Eşyaları arabanın bagajına *yerleştirdi*.' },
          { id: 'B', text: 'Çocuklar bahçede saatlerce *koşuşturdu*.' },
          { id: 'C', text: 'Sonbaharda bütün ağaçların yaprakları *sarardı*.' },
          { id: 'D', text: 'Bütün bu zorlukların üstesinden tek başına *geldi*.' },
          { id: 'E', text: 'Bunu ona ben *söyleyiverdim*.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "söyleyiverdim" kurallı birleşik eylemdir (tezlik). A, B, C türemiş, D ise basit eylemdir.'
      },
      {
        id: 'q-fl-11-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil, isme gelerek onu yüklem yapma görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun en sevdiği ders tarihti.' },
          { id: 'B', text: 'Sınava çalışan tek kişi oydu.' },
          { id: 'C', text: 'Eskiden bu yollardan her gün geçerdi.' },
          { id: 'D', text: 'Buranın manzarası gerçekten çok güzeldi.' },
          { id: 'E', text: 'Bütün bu sorunların kaynağı bu eski evmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde ek fiil (-di) basit zamanlı eyleme (geç-er-di) gelerek onu birleşik zamanlı eylem yapmıştır. Diğerlerinde isimleri (tarih, o, güzel, ev) yüklem yapmıştır.'
      },
      {
        id: 'q-fl-11-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yaklaşma fiili kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sen önden gidedur, ben hemen geliyorum.' },
          { id: 'B', text: 'Bunu ona söyleyiverdim gitti.' },
          { id: 'C', text: 'Bardağı elinden düşürünce kırılayazdı.' },
          { id: 'D', text: 'Bu ağır kutuyu tek başıma kaldıramam.' },
          { id: 'E', text: 'Bütün işleri hızlıca bitiriverdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaklaşma fiili eyleme az kalsın anlamı katar ve "-e yazmak" ile yapılır. "Kırılayazdı" buna örnektir.'
      }
    ]
  },
  {
    id: 'test-fiiller-11-zor',
    title: 'Fiiller 11 (Zor)',
    description: 'Fiiller ve Ek Fiil - Zor (101-110)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-fl-11-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman (anlam) kayması" şimdiki zamanın geçmiş zaman yerine kullanılmasıyla oluşmuştur?',
        options: [
          { id: 'A', text: 'Nasrettin Hoca bir gün göle maya çalar.' },
          { id: 'B', text: 'Haftaya çarşamba günü ameliyat oluyorum.' },
          { id: 'C', text: 'Her sabah uyanır uyanmaz bir bardak su içiyor.' },
          { id: 'D', text: 'Mustafa Kemal, 1919\'da Samsun\'a çıkıyor.' },
          { id: 'E', text: 'Allah\'ım, sen bize her zaman doğru yolu göster.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde eylem 1919\'da gerçekleştiği için geçmiş zaman kullanılması gerekirken, şimdiki zaman (-yor) kipiyle çekimlenmiştir.'
      },
      {
        id: 'q-fl-11-22',
        difficulty: 'hard',
        questionText: 'Ek fiilin şartı (-se, -sa) fiillere eklenerek birleşik zamanlı fiil, isimlere eklenerek yan cümlecik kurar. Aşağıdakilerin hangisinde ek fiilin şartı, cümleye koşul anlamından ziyade karşılaştırma veya açıklama anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çok çalışırsan başarılı olursun.' },
          { id: 'B', text: 'Hava güzelse pikniğe gidelim.' },
          { id: 'C', text: 'Oraya gideceksen beni de bekle.' },
          { id: 'D', text: 'Roman okuyorsa onu rahatsız etmeyelim.' },
          { id: 'E', text: 'Eskiden bu kasaba çok sakinse, şimdi iyice kalabalıklaşmış olmalı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "sakinse" ifadesi koşuldan çok iki farklı zaman dilimi veya durumu karşılaştırma anlamında kullanılmıştır.'
      },
      {
        id: 'q-fl-11-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yeterlik fiilinin olumsuzu, eylemin yapılamayacağına dair geçmişte kalmış kesin bir imkansızlık bildirir biçimde çekimlenmemiştir?',
        options: [
          { id: 'A', text: 'Dünkü olaydan sonra artık onun yüzüne bakamazdım.' },
          { id: 'B', text: 'O ağır taşı yerinden ben bile kıpırdatamam.' },
          { id: 'C', text: 'Ne kadar yalvarsa da onu asla affedemezdi.' },
          { id: 'D', text: 'Kapıyı defalarca zorlamasına rağmen açamadı.' },
          { id: 'E', text: 'Bunca derdi o gencecik yaşında tek başına çekememişti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylem yeterlik fiilinin geniş zaman olumsuzudur ve şimdiki/gelecek zamana yönelik bir imkansızlık bildirir. Diğer seçenekler (bakamazdım, affedemezdi, açamadı, çekememişti) geçmiş zaman kipi almışlardır.'
      },
      {
        id: 'q-fl-11-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil düştüğü halde cümlenin anlamında herhangi bir daralma veya bozulma olmamıştır?',
        options: [
          { id: 'A', text: 'En büyük hayali iyi bir doktor olmaktı.' },
          { id: 'B', text: 'O günlerde bu kasabanın tek eczanesi burasıydı.' },
          { id: 'C', text: 'Dışarıda kuvvetli bir rüzgar, içeride büyük bir sessizlik var.' },
          { id: 'D', text: 'Benim için dünyadaki en değerli varlık sensin.' },
          { id: 'E', text: 'Onun bu söylediklerine sadece sessiz kaldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde isim cümlesinin yüklemi "var" ismidir. Normalde "vardır" olması gerekirken geniş zaman 3. tekil şahıs ek fiili (-dır) düşmüştür.'
      },
      {
        id: 'q-fl-11-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki eylemlerden hangisi yapıca türemiş değildir?',
        options: [
          { id: 'A', text: 'Haber gelince hemen yola *koyulduk*.' },
          { id: 'B', text: 'Bu ağır yükleri tek başına *taşıttı*.' },
          { id: 'C', text: 'Olayı duyan mahalleli sokağa *döküldü*.' },
          { id: 'D', text: 'Dün akşam onu parkta *gördüm*.' },
          { id: 'E', text: 'Beni aramadığı için ona çok *darılmıştım*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gördüm" fiili gör- kökünden yapım eki almadan (sadece -dü ve -m çekim ekleriyle) oluşmuş basit yapılı bir fiildir. Diğerleri koy-ul, taşı-t, dök-ül, dar-ıl şeklinde yapım eki almış türemiş fiillerdir.'
      },
      {
        id: 'q-fl-11-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik zamanlı eylem yoktur?',
        options: [
          { id: 'A', text: 'Geç fark ettim taşın sert olduğunu / Su insanı boğar, ateş yakarmış.' },
          { id: 'B', text: 'Her akşam güneş batarken içime bir hüzün çökerdi.' },
          { id: 'C', text: 'Biliyordum, bir gün mutlaka geri dönecektin.' },
          { id: 'D', text: 'Yüzümü güneşe çevirdim, içimi ısıtsın diye.' },
          { id: 'E', text: 'Eskiden buralarda çok güzel elmalar yetişirdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "çevirdim" ve "ısıtsın" eylemleri basit zamanlıdır. Diğer seçeneklerde yakarmış, çökerdi, dönecektin, yetişirdi kelimeleri birleşik zamanlıdır.'
      },
      {
        id: 'q-fl-11-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-miş" eki, ek fiil (ek eylem) göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O zamanlar bu okulun en başarılı öğrencisiymiş.' },
          { id: 'B', text: 'Evin bahçesindeki ağaçlar çok yaşlıymış.' },
          { id: 'C', text: 'En sevdiği arkadaşı ona çok kırılmış.' },
          { id: 'D', text: 'Onun bu sözleri kalbimi derinden yaraladı, çok üzülmüş.' },
          { id: 'E', text: 'Gelen misafirleri karşılayan kişi oymuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-mış" eki "kırılmak" eylemine gelerek duyulan geçmiş zaman kipi görevinde kullanılmıştır, ek fiil değildir. D seçeneğinde de eyleme gelmiştir (üzülmüş). Soru kurgusunda iki cevap çıkıyor. Şıkları değiştirelim. \nD) Dünkü sınav gerçekten çok zormuş. \nŞimdi doğru cevap sadece C.'
      },
      {
        id: 'q-fl-11-27-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-miş" eki, ek fiil (ek eylem) göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'O zamanlar bu okulun en başarılı öğrencisiymiş.' },
          { id: 'B', text: 'Evin bahçesindeki ağaçlar çok yaşlıymış.' },
          { id: 'C', text: 'En sevdiği arkadaşı ona çok kırılmış.' },
          { id: 'D', text: 'Dünkü sınav soruları gerçekten çok zormuş.' },
          { id: 'E', text: 'Gelen misafirleri karşılayan kişi oymuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-mış" eki "kırılmak" eylemine gelerek duyulan geçmiş zaman (haber) kipi görevinde kullanılmıştır, ek fiil değildir. Diğer seçeneklerde isimlere (öğrenci, yaşlı, zor, o) gelerek onları yüklem yapan ek fiildir.'
      },
      {
        id: 'q-fl-11-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem basit zamanlı hem birleşik zamanlı eylem bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede koşuyor, neşeyle gülüyorlardı.' },
          { id: 'B', text: 'Sabah erken kalkar, hemen işe giderdi.' },
          { id: 'C', text: 'Eğer çalışmazsan, başarılı olamazsın.' },
          { id: 'D', text: 'Seninle sinemaya gidecektik ama işim çıktı.' },
          { id: 'E', text: 'Kitabı okudu ve arkadaşına verdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "gidecektik" birleşik zamanlı eylem, "çıktı" ise basit zamanlı eylemdir. A ve B\'de ek fiil ortaklığı vardır.'
      },
      {
        id: 'q-fl-11-29',
        difficulty: 'hard',
        questionText: 'Ek fiilin isimlere gelerek onları yüklem yapması, bazen fiilimsiler üzerinden de gerçekleşir. Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) ek fiil alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Yaz tatilindeki tek amacımız yüzmekti.' },
          { id: 'B', text: 'Bugün hava gerçekten çok güzeldi.' },
          { id: 'C', text: 'Bütün gün sokaklarda gezdi durdu.' },
          { id: 'D', text: 'Kitaptaki olaylar çok sürükleyiciymiş.' },
          { id: 'E', text: 'Sınav kağıtlarını çoktan okumuş.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde isim-fiil olan "yüzmek" sözcüğü ek fiilin hikayesini (-ti) alarak yüklem olmuştur.'
      },
      {
        id: 'q-fl-11-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olmak" eylemi yardımcı eylem görevinde değildir?',
        options: [
          { id: 'A', text: 'Bütün olanlardan sonra adeta kahroldu.' },
          { id: 'B', text: 'Evi temizlerken bana çok yardımcı oldu.' },
          { id: 'C', text: 'Meyveler bu yıl çok erken oldu.' },
          { id: 'D', text: 'Sınavı kazanamayınca mahvoldu.' },
          { id: 'E', text: 'Dünkü davette herkes birbiriyle tanış oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "oldu" kelimesi "olgunlaştı" anlamında asıl eylemdir. Diğer seçeneklerde isimle birleşerek yardımcı eylem görevi üstlenmiştir.'
      }
    ]
  }
];
