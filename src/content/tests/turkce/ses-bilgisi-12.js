export default [
  {
    id: 'test-ses-bilgisi-12-kolay',
    title: 'Ses Bilgisi 12 (Kolay)',
    description: 'Ses Bilgisi - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-sb-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Zehri' },
          { id: 'B', text: 'Tatili' },
          { id: 'C', text: 'Öğütü' },
          { id: 'D', text: 'Sütü' },
          { id: 'E', text: 'Kitabı' }
        ],
        correctOptionId: 'A',
        explanation: '"Zehri" kelimesinin kökü "zehir"dir. Ünlüyle başlayan bir ek (-i) aldığında ikinci hecesindeki "i" ünlüsü düşmüştür (zehir-i -> zehri).'
      },
      {
        id: 'q-sb-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Ağaçtan' },
          { id: 'B', text: 'Sınıfı' },
          { id: 'C', text: 'Kutuyu' },
          { id: 'D', text: 'Işığı' },
          { id: 'E', text: 'Dolaptan' }
        ],
        correctOptionId: 'D',
        explanation: '"Işık" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sonundaki "k" ünsüzü yumuşayarak "ğ"ye dönüşmüştür (ışık-ı -> ışığı).'
      },
      {
        id: 'q-sb-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesine (sertleşmesine) uğramış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Bütün soruları dikkatlice okudu.' },
          { id: 'B', text: 'O da bizimle tatile gelecek.' },
          { id: 'C', text: 'Sabah erken kalkıp yola çıktı.' },
          { id: 'D', text: 'Dışarıda hafif bir rüzgar esiyordu.' },
          { id: 'E', text: 'Yeni aldığı kitabı masaya bıraktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çıktı" kelimesinde "çık-" fiili sert ünsüzle (k) bitmiş ve görülen geçmiş zaman ekinin başındaki yumuşak ünsüzü (d) sertleştirerek "t"ye dönüştürmüştür (çık-dı -> çıktı).'
      },
      {
        id: 'q-sb-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü daralması meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Gözlüyor' },
          { id: 'B', text: 'Özlüyor' },
          { id: 'C', text: 'Ağlıyor' },
          { id: 'D', text: 'Yazıyor' },
          { id: 'E', text: 'Başlıyor' }
        ],
        correctOptionId: 'D',
        explanation: 'Gözle-yor (gözlüyor), özle-yor (özlüyor), ağla-yor (ağlıyor), başla-yor (başlıyor) sözcüklerinde geniş ünlüler daralmıştır. "Yazıyor" kelimesinin kökü "yaz-" ünsüzle biter, aradaki "ı" yardımcı ünlüdür, daralma yoktur.'
      },
      {
        id: 'q-sb-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Çiçekler' },
          { id: 'B', text: 'Zannı' },
          { id: 'C', text: 'Ağaçlar' },
          { id: 'D', text: 'Sessiz' },
          { id: 'E', text: 'Yollar' }
        ],
        correctOptionId: 'B',
        explanation: '"Zan" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sondaki "n" ünsüzü ikizleşerek türemiştir (zan-ı -> zannı).'
      },
      {
        id: 'q-sb-12-6',
        difficulty: 'easy',
        questionText: 'Büyük ünlü uyumuna göre, kalın ünlülerden (a, ı, o, u) sonra kalın; ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. Aşağıdaki kelimelerden hangisi bu kurala aykırıdır?',
        options: [
          { id: 'A', text: 'Kalemlik' },
          { id: 'B', text: 'Oturmak' },
          { id: 'C', text: 'Aydınlık' },
          { id: 'D', text: 'Gelecek' },
          { id: 'E', text: 'Sessizlik' }
        ],
        correctOptionId: 'A',
        explanation: '"Kalemlik" kelimesinde kalın ünlü (a) ve ince ünlüler (e, i) bir arada kullanıldığı için büyük ünlü uyumuna aykırıdır.'
      },
      {
        id: 'q-sb-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yolcu' },
          { id: 'B', text: 'Koyun' },
          { id: 'C', text: 'Sobayı' },
          { id: 'D', text: 'Yazı' },
          { id: 'E', text: 'Yüzme' }
        ],
        correctOptionId: 'C',
        explanation: 'Soba-y-ı sözcüğünde, kelimenin kökündeki ünlü (a) ile belirtme hal ekinin ünlüsü (ı) arasına kaynaştırma harfi olan "y" girmiştir. Diğerlerindeki "y" kökün kendi harfidir.'
      },
      {
        id: 'q-sb-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ulama kuralına uyan bir sözcük öbeği vardır?',
        options: [
          { id: 'A', text: 'Dolaptaki suyu içebilirsin.' },
          { id: 'B', text: 'Bugün hava gerçekten çok sıcak.' },
          { id: 'C', text: 'Evden çıkıp okula doğru yürüdü.' },
          { id: 'D', text: 'Akşam annesiyle birlikte pazara gitti.' },
          { id: 'E', text: 'Kırmızı kalemi bana verir misin?' }
        ],
        correctOptionId: 'D',
        explanation: 'Ulama, ünsüzle biten kelimeden sonra ünlüyle başlayan kelime gelmesiyle oluşur. "Akşam annesiyle" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-12-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Gülücük' },
          { id: 'B', text: 'Sıcacık' },
          { id: 'C', text: 'Biricik' },
          { id: 'D', text: 'Öpücük' },
          { id: 'E', text: 'Gencecik' }
        ],
        correctOptionId: 'B',
        explanation: '"Sıcacık" kelimesinin kökü "sıcak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (sıcak-cık -> sıcacık). Diğer kelimelerde ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-12-10',
        difficulty: 'easy',
        questionText: 'Küçük ünlü uyumu kuralına göre Türkçe sözcüklerde "o, ö" ünlüleri sadece ilk hecede bulunabilir. Aşağıdaki kelimelerin hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Odun' },
          { id: 'B', text: 'Horoz' },
          { id: 'C', text: 'Ocak' },
          { id: 'D', text: 'Tavuk' },
          { id: 'E', text: 'Koyun' }
        ],
        correctOptionId: 'B',
        explanation: '"Horoz" kelimesinin ikinci hecesinde "o" ünlüsü kullanılmıştır. Bu durum küçük ünlü uyumu (düz/yuvarlak) kuralına aykırıdır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-12-orta',
    title: 'Ses Bilgisi 12 (Orta)',
    description: 'Ses Bilgisi - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-sb-12-11',
        difficulty: 'medium',
        questionText: 'Türkçede türetilen bazı sözcükler yapım eki alırken ünlü düşmesine uğrar. Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Gönlüm' },
          { id: 'B', text: 'Savruldu' },
          { id: 'C', text: 'Kıvrım' },
          { id: 'D', text: 'Çevrim' },
          { id: 'E', text: 'Kavşak' }
        ],
        correctOptionId: 'A',
        explanation: 'Savur-ul (savrul), kıvır-ım (kıvrım), çevir-im (çevrim), kavuş-ak (kavşak) kelimelerinde yapım eki alırken ünlü düşmesi olmuştur. "Gönlüm" (gönül-üm) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-12-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun *topu* patlamış.' },
          { id: 'B', text: 'Atılan *oku* kimse göremedi.' },
          { id: 'C', text: 'Ağacın *kökü* çok derine inmiş.' },
          { id: 'D', text: 'Odanın *içi* oldukça karanlıktı.' },
          { id: 'E', text: 'Bu işin *ucu* nereye varacak?' }
        ],
        correctOptionId: 'E',
        explanation: 'Top-u, ok-u, kök-ü, iç-i kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "uç" kelimesi ünlüyle başlayan ek aldığında "ucu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-12-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi kuralı gereği, sert ünsüzle biten kelimelere gelen "c, d, g" ünsüzleri "ç, t, k"ye dönüşür. Aşağıdakilerin hangisinde bu kurala uyulmamasından kaynaklanan bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Simitçi' },
          { id: 'B', text: 'Ağaçtan' },
          { id: 'C', text: 'Yurtda' },
          { id: 'D', text: 'Sınıfta' },
          { id: 'E', text: 'Dolapta' }
        ],
        correctOptionId: 'C',
        explanation: '"Yurt" kelimesi sert ünsüzle (t) biter. Bulunma hali ekini aldığında ekin başındaki "d" ünsüzü sertleşerek "t"ye dönüşmeliydi (yurtta). "Yurtda" yazımı yanlıştır.'
      },
      {
        id: 'q-sb-12-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü **değildir**?',
        options: [
          { id: 'A', text: 'Soruyu' },
          { id: 'B', text: 'Kuyuya' },
          { id: 'C', text: 'Elmayı' },
          { id: 'D', text: 'Rüya' },
          { id: 'E', text: 'Odayı' }
        ],
        correctOptionId: 'D',
        explanation: '"Rüya" kelimesinde "y", kelimenin kendi orijinal harfidir (kök: rüya). Diğer seçeneklerde (soru-y-u, kuyu-y-a, elma-y-ı, oda-y-ı) "y" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-12-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Gelen misafirleri içeri *alıyor*.' },
          { id: 'B', text: 'Herkes aynı şarkıyı *söylüyor*.' },
          { id: 'C', text: 'O da bizimle *geliyor*.' },
          { id: 'D', text: 'Sınavı kazanamadığına *üzülüyor*.' },
          { id: 'E', text: 'Bu işi o da *biliyor*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Söylüyor" sözcüğünün kökü "söyle-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "ü" yapmıştır (söyle-yor -> söylüyor). Diğerlerindeki ı, i, u, ü ünlüleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-12-16',
        difficulty: 'medium',
        questionText: 'Türkçede pekiştirilmiş sözcükler oluşturulurken bazen araya ünlü bir harf girer (ünlü türemesi). Aşağıdakilerin hangisinde bu yolla oluşmuş bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Adam *çırılçıplak* ortada kaldı.' },
          { id: 'B', text: 'Sokakta *yapayalnız* dolaşıyordu.' },
          { id: 'C', text: 'Gündüz vakti *güpegündüz* soygun yaptılar.' },
          { id: 'D', text: 'Tertemiz giysileriyle dikkat çekiyordu.' },
          { id: 'E', text: 'Bütün sırlarını *apaçık* ortaya döktü.' }
        ],
        correctOptionId: 'D',
        explanation: 'Çıplak (çır-ıl-çıplak), yalnız (yap-a-yalnız), gündüz (güp-e-gündüz), açık (ap-a-çık) kelimelerinde ünlü türemesi vardır. "Tertemiz" kelimesinde pekiştirme vardır ancak ünlü türemesi olmamıştır (ter-temiz).'
      },
      {
        id: 'q-sb-12-17',
        difficulty: 'medium',
        questionText: 'Arapça kökenli bazı kelimeler yardımcı eylemle (etmek, olmak) birleşirken köklerindeki son ünsüz ikizleşir (türer). Aşağıdaki kelimelerin hangisinde bu ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Zannetmek' },
          { id: 'B', text: 'Affetmek' },
          { id: 'C', text: 'Terk etmek' },
          { id: 'D', text: 'Hissetmek' },
          { id: 'E', text: 'Halletmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Zan, af, his, hal kelimelerinde ünsüz türemesi olmuştur. "Terk etmek" kelimesinde ise ünsüz türemesi yoktur, kelime ayrı yazılır.'
      },
      {
        id: 'q-sb-12-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) örneği yoktur?',
        options: [
          { id: 'A', text: 'Cumartesi' },
          { id: 'B', text: 'Şehrin' },
          { id: 'C', text: 'Niçin' },
          { id: 'D', text: 'Sütlaç' },
          { id: 'E', text: 'Kahvaltı' }
        ],
        correctOptionId: 'B',
        explanation: 'Cumartesi (cuma ertesi), niçin (ne için), sütlaç (sütlü aş), kahvaltı (kahve altı) kelimelerinde birleşme sırasında ünlü aşınması olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur (birleşik kelime değildir).'
      },
      {
        id: 'q-sb-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'B', text: 'Okula *gidecek* çocukları bekliyoruz.' },
          { id: 'C', text: 'Eskiden *tanıdık* insanlarla karşılaştık.' },
          { id: 'D', text: 'Oraya ne zaman *gideceğimizi* sordu.' },
          { id: 'E', text: 'Bunu ona da *söyleyecek* misin?' }
        ],
        correctOptionId: 'D',
        explanation: '"Gideceğimizi" (git-ecek-imiz-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü ünlüyle başlayan ek aldığı için yumuşayarak "ğ" olmuştur.'
      },
      {
        id: 'q-sb-12-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz benzeşmesi (sertleşmesi) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Olayın iç yüzünü *keşfetti*.' },
          { id: 'C', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'D', text: 'Gelen misafirleri büyük bir nezaketle *ağırladı*.' },
          { id: 'E', text: 'Olanları duyunca *kahroldu*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Keşfetti" (keşif + et-ti). Keşif kelimesindeki "i" düşmüştür (ünlü düşmesi). "et-di" kısmındaki d ünsüzü t\'ye sertleşmiştir (ünsüz benzeşmesi).'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-12-zor',
    title: 'Ses Bilgisi 12 (Zor)',
    description: 'Ses Bilgisi - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-sb-12-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, araya giren yardımcı ünlü (ı, i, u, ü) daralma zannedilebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" ekinin daraltıcı etkisiyle oluşmuş gerçek bir ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'B', text: 'Sınav kağıtlarını dikkatlice *okuyor*.' },
          { id: 'C', text: 'Bütün bu olanları sadece o *biliyor*.' },
          { id: 'D', text: 'Her akşam aynı saatte eve *geliyor*.' },
          { id: 'E', text: 'O, her zaman kendi bildiğini *okutuyor*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bekliyor" sözcüğünün kökü "bekle-" fiilidir. "e" geniş ünlüsü "-yor" ekinin etkisiyle daralarak "i" olmuştur. Diğer seçeneklerde (oku-, bil-, gel-, okut-) kökteki son harf zaten dar ünlü veya ünsüzdür, araya giren ses yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden/sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Köpeği görünce korkudan yüzü *sarardı*.' },
          { id: 'B', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' },
          { id: 'C', text: 'Oğlunu askere uğurlarken *gözyaşlarını* tutamadı.' },
          { id: 'D', text: 'Yaralı kuş acı içinde *sızlıyordu*.' },
          { id: 'E', text: 'Tavuklar sabahtan beri *yumurtluyor*.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (sarı-ar -> sarar), B (uyku-la -> uyukla), D (sızı-la -> sızla), E (yumurta-la -> yumurtla) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. C seçeneğindeki "oğlunu" (oğul-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-12-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi, diğerlerinden farklı bir nedenle (farklı bir ekle) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Küçücük' },
          { id: 'B', text: 'Ufacık' },
          { id: 'C', text: 'Sıcacık' },
          { id: 'D', text: 'Alçacık' },
          { id: 'E', text: 'Yükseldi' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerindeki kelimeler küçültme eki olan "-cık / -cük" alırken sondaki "k" ünsüzü düşmüştür (küçük-cük vb.). E seçeneğindeki "yükseldi" (yüksek-el-di) kelimesinde ise fiil türetme eki "-el" alırken "k" ünsüzü düşmüştür.'
      },
      {
        id: 'q-sb-12-24',
        difficulty: 'hard',
        questionText: 'Büyük ünlü uyumu kuralı, Türkçe kelimelerde kalın ünlüleri kalınların, ince ünlüleri incelerin takip etmesini gerektirir. Ancak Türkçede sonradan eklenen bazı ekler tek şekilli oldukları için bu kuralı bozabilir. Aşağıdaki altı çizili kelimelerin hangisinde büyük ünlü uyumunu bozan ek diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Beni *dinlerken* çok dalgın görünüyordu.' },
          { id: 'B', text: 'O hep *akşamki* olaydan bahsediyor.' },
          { id: 'C', text: 'Akşam *okurken* birden elektrikler kesildi.' },
          { id: 'D', text: 'Sabah evden *çıkarken* anahtarı unutmuş.' },
          { id: 'E', text: 'Dışarı *bakarken* eski günleri hatırladı.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde büyük ünlü uyumunu bozan ek, tek şekilli zarf-fiil eki olan "-ken" ekidir. B seçeneğinde ise uyumu bozan ek, aitlik eki olan "-ki" ekidir.'
      },
      {
        id: 'q-sb-12-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bardağına biraz daha *suyu* doldur.' },
          { id: 'B', text: 'Bu *soruyu* sana kim anlattı?' },
          { id: 'C', text: 'Arabayı oraya *park etmeyelim*.' },
          { id: 'D', text: 'Çocuğun *boyu* epeyce uzamış.' },
          { id: 'E', text: 'Onu dünkü toplantıda gördüğümü *söyleyeyim*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Boyu" kelimesinin kökü "boy"dur, "y" kelimenin kendi orijinal harfidir ve kaynaştırma ünsüzü değildir. Diğerlerinde y kaynaştırma olarak kullanılmıştır.'
      },
      {
        id: 'q-sb-12-26',
        difficulty: 'hard',
        questionText: 'Yabancı kökenli bazı sözcüklerin sonundaki sert ünsüzler, ünlüyle başlayan bir ek aldıklarında yumuşamaz. Aşağıdaki altı çizili kelimelerin hangisinde bu kurala uyan (yumuşamamış) bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Bu *milletin* bağımsızlık aşkı bitmez.' },
          { id: 'B', text: 'Evin *kilidi* tamamen bozulmuş.' },
          { id: 'C', text: 'Ağacın *yaprağı* rüzgarda uçuşuyordu.' },
          { id: 'D', text: 'Bütün *kitapları* kutulara yerleştirdi.' },
          { id: 'E', text: 'Yeni aldığı *dolabı* çok beğendi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Millet" kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında sonundaki "t" ünsüzü yumuşamamıştır (milledin değil milletin). Diğerleri (kilidi, yaprağı, kitabı, dolabı) yumuşamıştır.'
      },
      {
        id: 'q-sb-12-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "ünsüz benzeşmesi (sertleşmesi)" meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'B', text: 'Bütün gece ders *çalıştı*.' },
          { id: 'C', text: 'Kitabını evde *unutmuştu*.' },
          { id: 'D', text: 'Ağaçtan düşen elmaları *topladı*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissettiği* an çok sevindi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (görmüş-düm -> tüm), B (çalış-dı -> tı), C (unutmuş-du -> tu), E (hisset-di -> ti) kelimelerinde ünsüz benzeşmesi vardır. D seçeneğindeki "topladı" (topla-dı) kelimesinde ise benzeşme yoktur.'
      },
      {
        id: 'q-sb-12-28',
        difficulty: 'hard',
        questionText: 'Bir sözcükte aynı anda birden fazla ses olayı gerçekleşebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "ünlü düşmesi, ünsüz yumuşaması ve ünsüz benzeşmesi" ses olaylarının üçü de bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'B', text: 'Sınavı kazanamadığına *hükmetti*.' },
          { id: 'C', text: 'Olanları duyunca çok *sinirlendi*.' },
          { id: 'D', text: 'Bütün bu teklifleri anında *reddetti*.' },
          { id: 'E', text: 'Cüzdanını parkta *kaybetti*.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kaybetti" (kayıp + et-di) kelimesinde "ı" ünlüsü düşer (ünlü düşmesi), "p" b\'ye dönüşür (ünsüz yumuşaması) ve "d" t\'ye dönüşür (ünsüz benzeşmesi). Diğerlerinde bu üçü bir arada yoktur.'
      },
      {
        id: 'q-sb-12-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısını* yavaşça kapattı.' },
          { id: 'B', text: 'Senin *sorunu* bu akşam çözeriz.' },
          { id: 'C', text: 'Masanın *örtüsünü* değiştirdi.' },
          { id: 'D', text: 'Arabanın *bagajını* temizledi.' },
          { id: 'E', text: 'Çocuğun *annesini* tanıyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-12-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dudak ünsüzlerinin benzeşmesi (n-m değişimi)" kuralına aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'B', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'C', text: 'Pembe renkli bir elbise almıştı.' },
          { id: 'D', text: 'Onbaşı komutasındaki birlik ilerledi.' },
          { id: 'E', text: 'Tembel insanlarla çalışmak çok zordur.' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel isimlerde ve birleşik kelimelerde "n" ünsüzü "m"ye dönüşmez. "Onbaşı" birleşik bir kelime olduğu için "n" ünsüzü korunmuştur (Ombaşı olmamıştır), bu durum kuralın bir istisnasıdır.'
      }
    ]
  }
];
