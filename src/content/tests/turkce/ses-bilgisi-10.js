export default [
  {
    id: 'test-ses-bilgisi-10-kolay',
    title: 'Ses Bilgisi 10 (Kolay)',
    description: 'Ses Bilgisi - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-sb-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Zulmü' },
          { id: 'B', text: 'Saçı' },
          { id: 'C', text: 'Gözü' },
          { id: 'D', text: 'Sözü' },
          { id: 'E', text: 'Eli' }
        ],
        correctOptionId: 'A',
        explanation: '"Zulmü" kelimesinin kökü "zulüm"dür. Ünlüyle başlayan bir ek (-ü) aldığında ikinci hecesindeki "ü" ünlüsü düşmüştür (zulüm-ü -> zulmü).'
      },
      {
        id: 'q-sb-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Sokakta' },
          { id: 'B', text: 'Dolaptan' },
          { id: 'C', text: 'Bardağı' },
          { id: 'D', text: 'Ağaçtan' },
          { id: 'E', text: 'Yurttan' }
        ],
        correctOptionId: 'C',
        explanation: '"Bardak" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sonundaki "k" ünsüzü yumuşayarak "ğ"ye dönüşmüştür (bardak-ı -> bardağı).'
      },
      {
        id: 'q-sb-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesine (sertleşmesine) uğramış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Bütün eşyaları kutuya koydu.' },
          { id: 'B', text: 'Yarın sabah erken kalkacağız.' },
          { id: 'C', text: 'Bugün sınıfta kimse yoktu.' },
          { id: 'D', text: 'Hava kararınca eve döndü.' },
          { id: 'E', text: 'Bana doğruyu söylemelisin.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sınıfta" kelimesinde "sınıf" sözcüğü sert ünsüzle (f) bitmiş ve bulunma hali ekinin başındaki yumuşak ünsüzü (d) sertleştirerek "t"ye dönüştürmüştür (sınıf-da -> sınıfta). (Aynı şekilde yok-du -> yoktu kelimesinde de benzeşme vardır).'
      },
      {
        id: 'q-sb-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü daralması meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Kanıyor' },
          { id: 'B', text: 'Oynuyor' },
          { id: 'C', text: 'Başlıyor' },
          { id: 'D', text: 'Atıyor' },
          { id: 'E', text: 'Sızlıyor' }
        ],
        correctOptionId: 'D',
        explanation: 'Kana-yor (kanıyor), oyna-yor (oynuyor), başla-yor (başlıyor), sızla-yor (sızlıyor) sözcüklerinde geniş ünlüler daralmıştır. "Atıyor" kelimesinin kökü "at-" ünsüzle biter, aradaki "ı" yardımcı ünlüdür, daralma yoktur.'
      },
      {
        id: 'q-sb-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Şıkkı' },
          { id: 'B', text: 'Sessiz' },
          { id: 'C', text: 'Issız' },
          { id: 'D', text: 'Güller' },
          { id: 'E', text: 'Yollar' }
        ],
        correctOptionId: 'A',
        explanation: '"Şık" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sondaki "k" ünsüzü ikizleşerek türemiştir (şık-ı -> şıkkı).'
      },
      {
        id: 'q-sb-10-6',
        difficulty: 'easy',
        questionText: 'Büyük ünlü uyumuna göre, kalın ünlülerden (a, ı, o, u) sonra kalın; ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. Aşağıdaki kelimelerden hangisi bu kurala aykırıdır?',
        options: [
          { id: 'A', text: 'Aydınlık' },
          { id: 'B', text: 'Gözlük' },
          { id: 'C', text: 'Karanlık' },
          { id: 'D', text: 'Otobüs' },
          { id: 'E', text: 'Sessizlik' }
        ],
        correctOptionId: 'D',
        explanation: '"Otobüs" kelimesinde kalın ünlülerden (o, o) sonra ince ünlü (ü) geldiği için büyük ünlü uyumuna aykırıdır.'
      },
      {
        id: 'q-sb-10-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kapıyı' },
          { id: 'B', text: 'Koyun' },
          { id: 'C', text: 'Boya' },
          { id: 'D', text: 'Yol' },
          { id: 'E', text: 'Yüz' }
        ],
        correctOptionId: 'A',
        explanation: 'Kapı-y-ı sözcüğünde, kelimenin kökündeki ünlü (ı) ile belirtme hal ekinin ünlüsü (ı) arasına kaynaştırma harfi olan "y" girmiştir. Diğerlerindeki "y" kökün kendi harfidir.'
      },
      {
        id: 'q-sb-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ulama kuralına uyan bir sözcük öbeği vardır?',
        options: [
          { id: 'A', text: 'Dolaptaki elmayı yiyebilirsin.' },
          { id: 'B', text: 'Bugün hava gerçekten çok sıcak.' },
          { id: 'C', text: 'Evden çıkıp okula doğru yürüdü.' },
          { id: 'D', text: 'Bütün soruları doğru cevapladı.' },
          { id: 'E', text: 'Kırmızı kalemi bana verir misin?' }
        ],
        correctOptionId: 'C',
        explanation: 'Ulama, ünsüzle biten kelimeden sonra ünlüyle başlayan kelime gelmesiyle oluşur. "çıkıp okula" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Azıcık' },
          { id: 'B', text: 'Gülücük' },
          { id: 'C', text: 'Öpücük' },
          { id: 'D', text: 'Ufacık' },
          { id: 'E', text: 'Biricik' }
        ],
        correctOptionId: 'D',
        explanation: '"Ufacık" kelimesinin kökü "ufak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (ufak-cık -> ufacık). Diğer kelimelerde ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-10-10',
        difficulty: 'easy',
        questionText: 'Küçük ünlü uyumu kuralına göre Türkçe sözcüklerde "o, ö" ünlüleri sadece ilk hecede bulunabilir. Aşağıdaki kelimelerin hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Odun' },
          { id: 'B', text: 'Ocak' },
          { id: 'C', text: 'Tavuk' },
          { id: 'D', text: 'Koyun' },
          { id: 'E', text: 'Horoz' }
        ],
        correctOptionId: 'E',
        explanation: '"Horoz" kelimesinin ikinci hecesinde "o" ünlüsü kullanılmıştır. Bu durum küçük ünlü uyumu (düz/yuvarlak) kuralına aykırıdır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-10-orta',
    title: 'Ses Bilgisi 10 (Orta)',
    description: 'Ses Bilgisi - Orta (91-100)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-sb-10-11',
        difficulty: 'medium',
        questionText: 'Türkçede türetilen bazı sözcükler yapım eki alırken ünlü düşmesine uğrar. Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Burnu' },
          { id: 'B', text: 'Savruldu' },
          { id: 'C', text: 'Çevrim' },
          { id: 'D', text: 'Kavşak' },
          { id: 'E', text: 'Kıvrım' }
        ],
        correctOptionId: 'A',
        explanation: 'Savur-ul (savrul), çevir-im (çevrim), kavuş-ak (kavşak), kıvır-ım (kıvrım) kelimelerinde yapım eki alırken ünlü düşmesi olmuştur. "Burnu" (burun-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-10-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ağacın *kökü* çok derine inmiş.' },
          { id: 'B', text: 'Odanın *içi* oldukça karanlıktı.' },
          { id: 'C', text: 'Çocuğun *topu* patlamış.' },
          { id: 'D', text: 'Bu ilacın hastalıklar için *çoğu* şeye faydası var.' },
          { id: 'E', text: 'Atılan *oku* kimse göremedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kök-ü, iç-i, top-u, ok-u kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "çok" kelimesi ünlüyle başlayan ek aldığında "çoğu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-10-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi kuralı gereği, sert ünsüzle biten kelimelere gelen "c, d, g" ünsüzleri "ç, t, k"ye dönüşür. Aşağıdakilerin hangisinde bu kurala uyulmamasından kaynaklanan bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Sınıfta' },
          { id: 'B', text: 'Simitçi' },
          { id: 'C', text: 'Ağaçtan' },
          { id: 'D', text: 'Kitapda' },
          { id: 'E', text: 'Dolapta' }
        ],
        correctOptionId: 'D',
        explanation: '"Kitap" kelimesi sert ünsüzle (p) biter. Bulunma hali ekini aldığında ekin başındaki "d" ünsüzü sertleşerek "t"ye dönüşmeliydi (kitapta). "Kitapda" yazımı yanlıştır.'
      },
      {
        id: 'q-sb-10-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü **değildir**?',
        options: [
          { id: 'A', text: 'Suyu' },
          { id: 'B', text: 'Neyi' },
          { id: 'C', text: 'Dayı' },
          { id: 'D', text: 'Odayı' },
          { id: 'E', text: 'Soruyu' }
        ],
        correctOptionId: 'C',
        explanation: '"Dayı" kelimesinde "y", kelimenin kendi orijinal harfidir. Diğer seçeneklerde (su-y-u, ne-y-i, oda-y-ı, soru-y-u) "y" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-10-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olanları duyunca çok *üzülüyor*.' },
          { id: 'B', text: 'Gelen misafirleri içeri *alıyor*.' },
          { id: 'C', text: 'O da bizimle *geliyor*.' },
          { id: 'D', text: 'Herkes aynı şarkıyı *söylüyor*.' },
          { id: 'E', text: 'Bu işi o da *biliyor*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Söylüyor" sözcüğünün kökü "söyle-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "ü" yapmıştır (söyle-yor -> söylüyor). Diğerlerindeki ı, i, u, ü ünlüleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-10-16',
        difficulty: 'medium',
        questionText: 'Türkçede pekiştirilmiş sözcükler oluşturulurken bazen araya ünlü bir harf girer (ünlü türemesi). Aşağıdakilerin hangisinde bu yolla oluşmuş bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Gündüz vakti *güpegündüz* soygun yaptılar.' },
          { id: 'B', text: 'Sokakta *yapayalnız* dolaşıyordu.' },
          { id: 'C', text: 'Adam *çırılçıplak* ortada kaldı.' },
          { id: 'D', text: 'Tertemiz giysileriyle dikkat çekiyordu.' },
          { id: 'E', text: 'Bütün sırlarını *apaçık* ortaya döktü.' }
        ],
        correctOptionId: 'D',
        explanation: 'Gündüz (güp-e-gündüz), yalnız (yap-a-yalnız), çıplak (çır-ıl-çıplak), açık (ap-a-çık) kelimelerinde ünlü türemesi vardır. "Tertemiz" kelimesinde pekiştirme vardır ancak ünlü türemesi olmamıştır (ter-temiz).'
      },
      {
        id: 'q-sb-10-17',
        difficulty: 'medium',
        questionText: 'Arapça kökenli bazı kelimeler yardımcı eylemle (etmek, olmak) birleşirken köklerindeki son ünsüz ikizleşir (türer). Aşağıdaki kelimelerin hangisinde bu ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Affetmek' },
          { id: 'B', text: 'Halletmek' },
          { id: 'C', text: 'Hissetmek' },
          { id: 'D', text: 'Terk etmek' },
          { id: 'E', text: 'Zannetmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Af, hal, his, zan kelimelerinde ünsüz türemesi olmuştur. "Terk etmek" kelimesinde ise ünsüz türemesi yoktur, kelime ayrı yazılır.'
      },
      {
        id: 'q-sb-10-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) örneği yoktur?',
        options: [
          { id: 'A', text: 'Kahvaltı' },
          { id: 'B', text: 'Nasıl' },
          { id: 'C', text: 'Sütlaç' },
          { id: 'D', text: 'Cumartesi' },
          { id: 'E', text: 'Şehrin' }
        ],
        correctOptionId: 'E',
        explanation: 'Kahvaltı (kahve altı), nasıl (ne asıl), sütlaç (sütlü aş), cumartesi (cuma ertesi) kelimelerinde birleşme sırasında ünlü aşınması olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-10-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu ona da *söyleyecek* misin?' },
          { id: 'B', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'C', text: 'Oraya ne zaman *gideceğimizi* sordu.' },
          { id: 'D', text: 'Okula *gidecek* çocukları bekliyoruz.' },
          { id: 'E', text: 'Eskiden *tanıdık* insanlarla karşılaştık.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gideceğimizi" (git-ecek-imiz-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü ünlüyle başlayan ek aldığı için yumuşayarak "ğ" olmuştur.'
      },
      {
        id: 'q-sb-10-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz benzeşmesi (sertleşmesi) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Olayın iç yüzünü *keşfetti*.' },
          { id: 'C', text: 'Gelen misafirleri büyük bir nezaketle *ağırladı*.' },
          { id: 'D', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'E', text: 'Olanları duyunca *kahroldu*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Keşfetti" (keşif + et-ti). Keşif kelimesindeki "i" düşmüştür (ünlü düşmesi). "et-di" kısmındaki d ünsüzü t\'ye sertleşmiştir (ünsüz benzeşmesi).'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-10-zor',
    title: 'Ses Bilgisi 10 (Zor)',
    description: 'Ses Bilgisi - Zor (91-100)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-sb-10-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, araya giren yardımcı ünlü (ı, i, u, ü) daralma zannedilebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" ekinin daraltıcı etkisiyle oluşmuş gerçek bir ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'Her akşam aynı saatte eve *geliyor*.' },
          { id: 'B', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'C', text: 'Sınav kağıtlarını dikkatlice *okuyor*.' },
          { id: 'D', text: 'Bütün bu olanları sadece o *biliyor*.' },
          { id: 'E', text: 'O, her zaman kendi bildiğini *okutuyor*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bekliyor" sözcüğünün kökü "bekle-" fiilidir. "e" geniş ünlüsü "-yor" ekinin etkisiyle daralarak "i" olmuştur. Diğer seçeneklerde (gel-, oku-, bil-, okut-) kökteki son harf zaten dar ünlü veya ünsüzdür, araya giren ses yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-10-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden/sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Köpeği görünce korkudan yüzü *sarardı*.' },
          { id: 'B', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' },
          { id: 'C', text: 'Yaralı kuş acı içinde *sızlıyordu*.' },
          { id: 'D', text: 'Oğlunu askere uğurlarken *gözyaşlarını* tutamadı.' },
          { id: 'E', text: 'Tavuklar sabahtan beri *yumurtluyor*.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (sarı-ar -> sarar), B (uyku-la -> uyukla), C (sızı-la -> sızla), E (yumurta-la -> yumurtla) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. D seçeneğindeki "oğlunu" (oğul-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-10-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi, diğerlerinden farklı bir nedenle (farklı bir ekle) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Yükseldi' },
          { id: 'B', text: 'Küçücük' },
          { id: 'C', text: 'Ufacık' },
          { id: 'D', text: 'Sıcacık' },
          { id: 'E', text: 'Alçacık' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki kelimeler küçültme eki olan "-cık / -cük" alırken sondaki "k" ünsüzü düşmüştür (küçük-cük vb.). A seçeneğindeki "yükseldi" (yüksek-el-di) kelimesinde ise fiil türetme eki "-el" alırken "k" ünsüzü düşmüştür.'
      },
      {
        id: 'q-sb-10-24',
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
        id: 'q-sb-10-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bardağına biraz daha *suyu* doldur.' },
          { id: 'B', text: 'Arabayı oraya *park etmeyelim*.' },
          { id: 'C', text: 'Bu *soruyu* sana kim anlattı?' },
          { id: 'D', text: 'Çocuğun *boyu* epeyce uzamış.' },
          { id: 'E', text: 'Onu dünkü toplantıda gördüğümü *söyleyeyim*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Boyu" kelimesinin kökü "boy"dur, "y" kelimenin kendi orijinal harfidir ve kaynaştırma ünsüzü değildir. Diğerlerinde y kaynaştırma olarak kullanılmıştır.'
      },
      {
        id: 'q-sb-10-26',
        difficulty: 'hard',
        questionText: 'Yabancı kökenli bazı sözcüklerin sonundaki sert ünsüzler, ünlüyle başlayan bir ek aldıklarında yumuşamaz. Aşağıdaki altı çizili kelimelerin hangisinde bu kurala uyan (yumuşamamış) bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Evin *kilidi* tamamen bozulmuş.' },
          { id: 'B', text: 'Ağacın *yaprağı* rüzgarda uçuşuyordu.' },
          { id: 'C', text: 'Bu *milletin* bağımsızlık aşkı bitmez.' },
          { id: 'D', text: 'Bütün *kitapları* kutulara yerleştirdi.' },
          { id: 'E', text: 'Yeni aldığı *dolabı* çok beğendi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Millet" kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında sonundaki "t" ünsüzü yumuşamamıştır (milledin değil milletin). Diğerleri (kilidi, yaprağı, kitabı, dolabı) yumuşamıştır.'
      },
      {
        id: 'q-sb-10-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "ünsüz benzeşmesi (sertleşmesi)" meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'B', text: 'Bütün gece ders *çalıştı*.' },
          { id: 'C', text: 'Kitabını evde *unutmuştu*.' },
          { id: 'D', text: 'Sınavı kazandığını *hissettiği* an çok sevindi.' },
          { id: 'E', text: 'Ağaçtan düşen elmaları *topladı*.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (görmüş-düm -> tüm), B (çalış-dı -> tı), C (unutmuş-du -> tu), D (hisset-di -> ti) kelimelerinde ünsüz benzeşmesi vardır. E seçeneğindeki "topladı" (topla-dı) kelimesinde ise benzeşme yoktur.'
      },
      {
        id: 'q-sb-10-28',
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
        id: 'q-sb-10-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısını* yavaşça kapattı.' },
          { id: 'B', text: 'Masanın *örtüsünü* değiştirdi.' },
          { id: 'C', text: 'Senin *sorunu* bu akşam çözeriz.' },
          { id: 'D', text: 'Arabanın *bagajını* temizledi.' },
          { id: 'E', text: 'Çocuğun *annesini* tanıyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-10-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dudak ünsüzlerinin benzeşmesi (n-m değişimi)" kuralına aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'B', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'C', text: 'Onbaşı komutasındaki birlik ilerledi.' },
          { id: 'D', text: 'Pembe renkli bir elbise almıştı.' },
          { id: 'E', text: 'Tembel insanlarla çalışmak çok zordur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel isimlerde ve birleşik kelimelerde "n" ünsüzü "m"ye dönüşmez. "Onbaşı" birleşik bir kelime olduğu için "n" ünsüzü korunmuştur (Ombaşı olmamıştır), bu durum kuralın bir istisnasıdır.'
      }
    ]
  }
];
