export default [
  {
    id: 'test-ses-bilgisi-14-kolay',
    title: 'Ses Bilgisi 14 (Kolay)',
    description: 'Ses Bilgisi - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-sb-14-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Sözü' },
          { id: 'B', text: 'Bağrı' },
          { id: 'C', text: 'Gözü' },
          { id: 'D', text: 'Dizi' },
          { id: 'E', text: 'Yüzü' }
        ],
        correctOptionId: 'B',
        explanation: '"Bağrı" kelimesinin kökü "bağır"dır (göğüs anlamında). Ünlüyle başlayan bir ek (-ı) aldığında ikinci hecesindeki "ı" ünlüsü düşmüştür (bağır-ı -> bağrı).'
      },
      {
        id: 'q-sb-14-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Sokakta' },
          { id: 'B', text: 'Umutları' },
          { id: 'C', text: 'Dileği' },
          { id: 'D', text: 'Ağaçtan' },
          { id: 'E', text: 'Kutuya' }
        ],
        correctOptionId: 'C',
        explanation: '"Dilek" kelimesi ünlüyle başlayan bir ek (-i) aldığında sonundaki "k" ünsüzü yumuşayarak "ğ"ye dönüşmüştür (dilek-i -> dileği).'
      },
      {
        id: 'q-sb-14-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesine (sertleşmesine) uğramış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Son otobüsü de kaçırmış.' },
          { id: 'B', text: 'Bugün hava inanılmaz güzeldi.' },
          { id: 'C', text: 'Arkadaşıyla birlikte sinemaya gitti.' },
          { id: 'D', text: 'Eve dönerken yağmura yakalandı.' },
          { id: 'E', text: 'Yolculuk sabah çok erken başladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gitti" kelimesinde "git-" fiili sert ünsüzle (t) bitmiş ve görülen geçmiş zaman ekinin başındaki yumuşak ünsüzü (d) sertleştirerek "t"ye dönüştürmüştür (git-di -> gitti).'
      },
      {
        id: 'q-sb-14-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü daralması meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Başlıyor' },
          { id: 'B', text: 'Ağlıyor' },
          { id: 'C', text: 'Sızlıyor' },
          { id: 'D', text: 'Okuyor' },
          { id: 'E', text: 'Bekliyor' }
        ],
        correctOptionId: 'D',
        explanation: 'Başla-yor (başlıyor), ağla-yor (ağlıyor), sızla-yor (sızlıyor), bekle-yor (bekliyor) sözcüklerinde geniş ünlüler daralmıştır. "Okuyor" kelimesinin kökü "oku-" fiilidir, zaten dar ünlüyle biter, araya yardımcı ünlü veya daralma girmemiştir, kök olduğu gibidir.'
      },
      {
        id: 'q-sb-14-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Issız' },
          { id: 'B', text: 'Sessiz' },
          { id: 'C', text: 'Sırrı' },
          { id: 'D', text: 'Güller' },
          { id: 'E', text: 'Evler' }
        ],
        correctOptionId: 'C',
        explanation: '"Sır" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sondaki "r" ünsüzü ikizleşerek türemiştir (sır-ı -> sırrı).'
      },
      {
        id: 'q-sb-14-6',
        difficulty: 'easy',
        questionText: 'Büyük ünlü uyumuna göre, kalın ünlülerden (a, ı, o, u) sonra kalın; ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. Aşağıdaki kelimelerden hangisi bu kurala aykırıdır?',
        options: [
          { id: 'A', text: 'Masa' },
          { id: 'B', text: 'Defter' },
          { id: 'C', text: 'Kalemlik' },
          { id: 'D', text: 'Okul' },
          { id: 'E', text: 'Gözlük' }
        ],
        correctOptionId: 'C',
        explanation: '"Kalemlik" kelimesinde kalın ünlü (a) ve ince ünlüler (e, i) bir arada kullanıldığı için büyük ünlü uyumuna aykırıdır.'
      },
      {
        id: 'q-sb-14-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Elmayı' },
          { id: 'B', text: 'Yüzme' },
          { id: 'C', text: 'Yolcu' },
          { id: 'D', text: 'Yazı' },
          { id: 'E', text: 'Koyun' }
        ],
        correctOptionId: 'A',
        explanation: 'Elma-y-ı sözcüğünde, kelimenin kökündeki ünlü (a) ile belirtme hal ekinin ünlüsü (ı) arasına kaynaştırma harfi olan "y" girmiştir. Diğerlerindeki "y" kökün kendi harfidir.'
      },
      {
        id: 'q-sb-14-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ulama kuralına uyan bir sözcük öbeği vardır?',
        options: [
          { id: 'A', text: 'Herkes kendi işiyle meşguldü.' },
          { id: 'B', text: 'Bütün çocuklar parkta oynuyordu.' },
          { id: 'C', text: 'Bugün hava oldukça soğuktu.' },
          { id: 'D', text: 'Yarın annemlerle pazara gideceğiz.' },
          { id: 'E', text: 'Akşam üzeri güzel bir rüzgar çıktı.' }
        ],
        correctOptionId: 'E',
        explanation: 'Ulama, ünsüzle biten kelimeden sonra ünlüyle başlayan kelime gelmesiyle oluşur. "Akşam üzeri" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-14-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Gülücük' },
          { id: 'B', text: 'Öpücük' },
          { id: 'C', text: 'Gencecik' },
          { id: 'D', text: 'Biricik' },
          { id: 'E', text: 'Sıcacık' }
        ],
        correctOptionId: 'E',
        explanation: '"Sıcacık" kelimesinin kökü "sıcak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (sıcak-cık -> sıcacık). Diğer kelimelerde ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-14-10',
        difficulty: 'easy',
        questionText: 'Küçük ünlü uyumu kuralına göre Türkçe sözcüklerde "o, ö" ünlüleri sadece ilk hecede bulunabilir. Aşağıdaki kelimelerin hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Profesör' },
          { id: 'B', text: 'Odun' },
          { id: 'C', text: 'Ocak' },
          { id: 'D', text: 'Tavuk' },
          { id: 'E', text: 'Koyun' }
        ],
        correctOptionId: 'A',
        explanation: '"Profesör" kelimesinin ikinci ve üçüncü hecelerinde "e" ve "ö" ünlüleri kullanılmıştır, "ö" ilk hece dışındadır. Bu durum küçük ünlü uyumu (düz/yuvarlak) kuralına aykırıdır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-14-orta',
    title: 'Ses Bilgisi 14 (Orta)',
    description: 'Ses Bilgisi - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-sb-14-11',
        difficulty: 'medium',
        questionText: 'Türkçede türetilen bazı sözcükler yapım eki alırken ünlü düşmesine uğrar. Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Savruldu' },
          { id: 'B', text: 'Kıvrım' },
          { id: 'C', text: 'Çevrim' },
          { id: 'D', text: 'Şehrin' },
          { id: 'E', text: 'Kavşak' }
        ],
        correctOptionId: 'D',
        explanation: 'Savur-ul (savrul), kıvır-ım (kıvrım), çevir-im (çevrim), kavuş-ak (kavşak) kelimelerinde yapım eki alırken ünlü düşmesi olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki (tamlayan) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-14-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Atılan *oku* kimse göremedi.' },
          { id: 'B', text: 'Bu ilacın hastalıklar için *çoğu* şeye faydası var.' },
          { id: 'C', text: 'Çocuğun *topu* patlamış.' },
          { id: 'D', text: 'Ağacın *kökü* çok derine inmiş.' },
          { id: 'E', text: 'Odanın *içi* oldukça karanlıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ok-u, top-u, kök-ü, iç-i kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "çok" kelimesi ünlüyle başlayan ek aldığında "çoğu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-14-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi kuralı gereği, sert ünsüzle biten kelimelere gelen "c, d, g" ünsüzleri "ç, t, k"ye dönüşür. Aşağıdakilerin hangisinde bu kurala uyulmamasından kaynaklanan bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Sınıfta' },
          { id: 'B', text: 'Ağaçtan' },
          { id: 'C', text: 'Kitapda' },
          { id: 'D', text: 'Simitçi' },
          { id: 'E', text: 'Dolapta' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitap" kelimesi sert ünsüzle (p) biter. Bulunma hali ekini aldığında ekin başındaki "d" ünsüzü sertleşerek "t"ye dönüşmeliydi (kitapta). "Kitapda" yazımı yanlıştır.'
      },
      {
        id: 'q-sb-14-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü **değildir**?',
        options: [
          { id: 'A', text: 'Kuyuya' },
          { id: 'B', text: 'Soruyu' },
          { id: 'C', text: 'Odayı' },
          { id: 'D', text: 'Elmayı' },
          { id: 'E', text: 'Rüya' }
        ],
        correctOptionId: 'E',
        explanation: '"Rüya" kelimesinde "y", kelimenin kendi orijinal harfidir (kök: rüya). Diğer seçeneklerde "y" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-14-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olanları duyunca çok *üzülüyor*.' },
          { id: 'B', text: 'O da bizimle *geliyor*.' },
          { id: 'C', text: 'Gelen misafirleri içeri *alıyor*.' },
          { id: 'D', text: 'Sınav kağıtlarını dikkatlice *inceliyor*.' },
          { id: 'E', text: 'Bu işi o da *biliyor*.' }
        ],
        correctOptionId: 'D',
        explanation: '"İnceliyor" sözcüğünün kökü "incele-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "i" yapmıştır (incele-yor -> inceliyor). Diğerlerindeki ı, i, u, ü ünlüleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-14-16',
        difficulty: 'medium',
        questionText: 'Türkçede pekiştirilmiş sözcükler oluşturulurken bazen araya ünlü bir harf girer (ünlü türemesi). Aşağıdakilerin hangisinde bu yolla oluşmuş bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Sokakta *yapayalnız* dolaşıyordu.' },
          { id: 'B', text: 'Adam *çırılçıplak* ortada kaldı.' },
          { id: 'C', text: 'Tertemiz giysileriyle dikkat çekiyordu.' },
          { id: 'D', text: 'Gündüz vakti *güpegündüz* soygun yaptılar.' },
          { id: 'E', text: 'Bütün sırlarını *apaçık* ortaya döktü.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yalnız (yap-a-yalnız), çıplak (çır-ıl-çıplak), gündüz (güp-e-gündüz), açık (ap-a-çık) kelimelerinde ünlü türemesi vardır. "Tertemiz" kelimesinde pekiştirme vardır ancak ünlü türemesi olmamıştır (ter-temiz).'
      },
      {
        id: 'q-sb-14-17',
        difficulty: 'medium',
        questionText: 'Arapça kökenli bazı kelimeler yardımcı eylemle (etmek, olmak) birleşirken köklerindeki son ünsüz ikizleşir (türer). Aşağıdaki kelimelerin hangisinde bu ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Affetmek' },
          { id: 'B', text: 'Halletmek' },
          { id: 'C', text: 'Terk etmek' },
          { id: 'D', text: 'Zannetmek' },
          { id: 'E', text: 'Hissetmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Af, hal, zan, his kelimelerinde ünsüz türemesi olmuştur. "Terk etmek" kelimesinde ise ünsüz türemesi yoktur, kelime ayrı yazılır.'
      },
      {
        id: 'q-sb-14-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) örneği yoktur?',
        options: [
          { id: 'A', text: 'Kahvaltı' },
          { id: 'B', text: 'Niçin' },
          { id: 'C', text: 'Sütlaç' },
          { id: 'D', text: 'Şehrin' },
          { id: 'E', text: 'Cumartesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Kahvaltı (kahve altı), niçin (ne için), sütlaç (sütlü aş), cumartesi (cuma ertesi) kelimelerinde birleşme sırasında ünlü aşınması olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur (birleşik kelime değildir).'
      },
      {
        id: 'q-sb-14-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'B', text: 'Eskiden *tanıdık* insanlarla karşılaştık.' },
          { id: 'C', text: 'Bunu ona da *söyleyecek* misin?' },
          { id: 'D', text: 'Okula *gidecek* çocukları bekliyoruz.' },
          { id: 'E', text: 'Oraya ne zaman *gideceğimizi* sordu.' }
        ],
        correctOptionId: 'E',
        explanation: '"Gideceğimizi" (git-ecek-imiz-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü ünlüyle başlayan ek aldığı için yumuşayarak "ğ" olmuştur.'
      },
      {
        id: 'q-sb-14-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz benzeşmesi (sertleşmesi) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'C', text: 'Olayın iç yüzünü *keşfetti*.' },
          { id: 'D', text: 'Gelen misafirleri büyük bir nezaketle *ağırladı*.' },
          { id: 'E', text: 'Olanları duyunca *kahroldu*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Keşfetti" (keşif + et-ti). Keşif kelimesindeki "i" düşmüştür (ünlü düşmesi). "et-di" kısmındaki d ünsüzü t\'ye sertleşmiştir (ünsüz benzeşmesi).'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-14-zor',
    title: 'Ses Bilgisi 14 (Zor)',
    description: 'Ses Bilgisi - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-sb-14-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, araya giren yardımcı ünlü (ı, i, u, ü) daralma zannedilebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" ekinin daraltıcı etkisiyle oluşmuş gerçek bir ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'Her akşam aynı saatte eve *geliyor*.' },
          { id: 'B', text: 'Sınav kağıtlarını dikkatlice *okuyor*.' },
          { id: 'C', text: 'Bütün bu olanları sadece o *biliyor*.' },
          { id: 'D', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'E', text: 'O, her zaman kendi bildiğini *okutuyor*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bekliyor" sözcüğünün kökü "bekle-" fiilidir. "e" geniş ünlüsü "-yor" ekinin etkisiyle daralarak "i" olmuştur. Diğer seçeneklerde (gel-, oku-, bil-, okut-) kökteki son harf zaten dar ünlü veya ünsüzdür, araya giren ses yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-14-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden/sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Tavuklar sabahtan beri *yumurtluyor*.' },
          { id: 'B', text: 'Yaralı kuş acı içinde *sızlıyordu*.' },
          { id: 'C', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' },
          { id: 'D', text: 'Köpeği görünce korkudan yüzü *sarardı*.' },
          { id: 'E', text: 'Oğlunu askere uğurlarken *gözyaşlarını* tutamadı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (yumurta-la -> yumurtla), B (sızı-la -> sızla), C (uyku-la -> uyukla), D (sarı-ar -> sarar) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. E seçeneğindeki "oğlunu" (oğul-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-14-23',
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
        id: 'q-sb-14-24',
        difficulty: 'hard',
        questionText: 'Büyük ünlü uyumu kuralı, Türkçe kelimelerde kalın ünlüleri kalınların, ince ünlüleri incelerin takip etmesini gerektirir. Ancak Türkçede sonradan eklenen bazı ekler tek şekilli oldukları için bu kuralı bozabilir. Aşağıdaki altı çizili kelimelerin hangisinde büyük ünlü uyumunu bozan ek diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'O hep *akşamki* olaydan bahsediyor.' },
          { id: 'B', text: 'Beni *dinlerken* çok dalgın görünüyordu.' },
          { id: 'C', text: 'Akşam *okurken* birden elektrikler kesildi.' },
          { id: 'D', text: 'Sabah evden *çıkarken* anahtarı unutmuş.' },
          { id: 'E', text: 'Dışarı *bakarken* eski günleri hatırladı.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerinde büyük ünlü uyumunu bozan ek, tek şekilli zarf-fiil eki olan "-ken" ekidir. A seçeneğinde ise uyumu bozan ek, aitlik eki olan "-ki" ekidir.'
      },
      {
        id: 'q-sb-14-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bardağına biraz daha *suyu* doldur.' },
          { id: 'B', text: 'Çocuğun *boyu* epeyce uzamış.' },
          { id: 'C', text: 'Bu *soruyu* sana kim anlattı?' },
          { id: 'D', text: 'Arabayı oraya *park etmeyelim*.' },
          { id: 'E', text: 'Onu dünkü toplantıda gördüğümü *söyleyeyim*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Boyu" kelimesinin kökü "boy"dur, "y" kelimenin kendi orijinal harfidir ve kaynaştırma ünsüzü değildir. Diğerlerinde y kaynaştırma olarak kullanılmıştır.'
      },
      {
        id: 'q-sb-14-26',
        difficulty: 'hard',
        questionText: 'Yabancı kökenli bazı sözcüklerin sonundaki sert ünsüzler, ünlüyle başlayan bir ek aldıklarında yumuşamaz. Aşağıdaki altı çizili kelimelerin hangisinde bu kurala uyan (yumuşamamış) bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Evin *kilidi* tamamen bozulmuş.' },
          { id: 'B', text: 'Ağacın *yaprağı* rüzgarda uçuşuyordu.' },
          { id: 'C', text: 'Bütün *kitapları* kutulara yerleştirdi.' },
          { id: 'D', text: 'Bu *milletin* bağımsızlık aşkı bitmez.' },
          { id: 'E', text: 'Yeni aldığı *dolabı* çok beğendi.' }
        ],
        correctOptionId: 'D',
        explanation: '"Millet" kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında sonundaki "t" ünsüzü yumuşamamıştır (milledin değil milletin). Diğerleri (kilidi, yaprağı, kitabı, dolabı) yumuşamıştır.'
      },
      {
        id: 'q-sb-14-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "ünsüz benzeşmesi (sertleşmesi)" meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'B', text: 'Bütün gece ders *çalıştı*.' },
          { id: 'C', text: 'Ağaçtan düşen elmaları *topladı*.' },
          { id: 'D', text: 'Kitabını evde *unutmuştu*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissettiği* an çok sevindi.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (görmüş-düm -> tüm), B (çalış-dı -> tı), D (unutmuş-du -> tu), E (hisset-di -> ti) kelimelerinde ünsüz benzeşmesi vardır. C seçeneğindeki "topladı" (topla-dı) kelimesinde ise benzeşme yoktur.'
      },
      {
        id: 'q-sb-14-28',
        difficulty: 'hard',
        questionText: 'Bir sözcükte aynı anda birden fazla ses olayı gerçekleşebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "ünlü düşmesi, ünsüz yumuşaması ve ünsüz benzeşmesi" ses olaylarının üçü de bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'B', text: 'Cüzdanını parkta *kaybetti*.' },
          { id: 'C', text: 'Sınavı kazanamadığına *hükmetti*.' },
          { id: 'D', text: 'Olanları duyunca çok *sinirlendi*.' },
          { id: 'E', text: 'Bütün bu teklifleri anında *reddetti*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kaybetti" (kayıp + et-di) kelimesinde "ı" ünlüsü düşer (ünlü düşmesi), "p" b\'ye dönüşür (ünsüz yumuşaması) ve "d" t\'ye dönüşür (ünsüz benzeşmesi). Diğerlerinde bu üçü bir arada yoktur.'
      },
      {
        id: 'q-sb-14-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısını* yavaşça kapattı.' },
          { id: 'B', text: 'Masanın *örtüsünü* değiştirdi.' },
          { id: 'C', text: 'Arabanın *bagajını* temizledi.' },
          { id: 'D', text: 'Çocuğun *annesini* tanıyorum.' },
          { id: 'E', text: 'Senin *sorunu* bu akşam çözeriz.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-14-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dudak ünsüzlerinin benzeşmesi (n-m değişimi)" kuralına aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'B', text: 'Onbaşı komutasındaki birlik ilerledi.' },
          { id: 'C', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'D', text: 'Pembe renkli bir elbise almıştı.' },
          { id: 'E', text: 'Tembel insanlarla çalışmak çok zordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel isimlerde ve birleşik kelimelerde "n" ünsüzü "m"ye dönüşmez. "Onbaşı" birleşik bir kelime olduğu için "n" ünsüzü korunmuştur (Ombaşı olmamıştır), bu durum kuralın bir istisnasıdır.'
      }
    ]
  }
];
