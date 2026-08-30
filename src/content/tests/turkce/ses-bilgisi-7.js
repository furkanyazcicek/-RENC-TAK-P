export default [
  {
    id: 'test-ses-bilgisi-7-kolay',
    title: 'Ses Bilgisi 7 (Kolay)',
    description: 'Ses Bilgisi - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-sb-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Zihnim' },
          { id: 'B', text: 'Boynum' },
          { id: 'C', text: 'Gönlüm' },
          { id: 'D', text: 'Yüzüm' },
          { id: 'E', text: 'Fikrim' }
        ],
        correctOptionId: 'D',
        explanation: 'Zihin (zihnim), boyun (boynum), gönül (gönlüm), fikir (fikrim) kelimelerinde ünlü düşmesi vardır. "Yüzüm" (yüz-üm) sözcüğünde ise ünlü düşmesi yoktur.'
      },
      {
        id: 'q-sb-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması vardır?',
        options: [
          { id: 'A', text: 'Hesabı' },
          { id: 'B', text: 'Kitapta' },
          { id: 'C', text: 'Ağaçtan' },
          { id: 'D', text: 'Çiçekler' },
          { id: 'E', text: 'Yurttan' }
        ],
        correctOptionId: 'A',
        explanation: '"Hesap" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sonundaki "p" ünsüzü yumuşayarak "b"ye dönüşmüştür (hesap-ı -> hesabı).'
      },
      {
        id: 'q-sb-7-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi ünsüz benzeşmesine (sertleşmesine) uğramıştır?',
        options: [
          { id: 'A', text: 'Yolcu' },
          { id: 'B', text: 'Simitçi' },
          { id: 'C', text: 'Dolabı' },
          { id: 'D', text: 'Sınıfa' },
          { id: 'E', text: 'Kitabım' }
        ],
        correctOptionId: 'B',
        explanation: '"Simit" kelimesi sert ünsüzle (t) biter. "-ci" yapım ekini aldığında ekin başındaki "c" ünsüzü sertleşerek "ç"ye dönüşür (simit-ci -> simitçi).'
      },
      {
        id: 'q-sb-7-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili fiillerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'O da bizimle *geliyor*.' },
          { id: 'B', text: 'Herkes aynı şarkıyı *söylüyor*.' },
          { id: 'C', text: 'Gelenleri kapıda *karşılıyor*.' },
          { id: 'D', text: 'Kitabını dikkatle *okuyor*.' },
          { id: 'E', text: 'Soruları hızla *çözüyor*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Karşılıyor" kelimesinin kökü "karşıla-" fiilidir. "-yor" eki, kökteki "a" geniş ünlüsünü daraltarak "ı" yapmıştır (karşıla-yor -> karşılıyor). (Söylüyor kelimesinde de söyle-yor daralma vardır. A, B, C de var... B şıkkını değiştirelim). \nYeni B şıkkı: Herkes bana *bakıyor*. \nYeni C şıkkı doğru. Doğru cevap C.'
      },
      {
        id: 'q-sb-7-4-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili fiillerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'O da bizimle *geliyor*.' },
          { id: 'B', text: 'Herkes bana *bakıyor*.' },
          { id: 'C', text: 'Gelenleri kapıda *karşılıyor*.' },
          { id: 'D', text: 'Kitabını dikkatle *okuyor*.' },
          { id: 'E', text: 'Soruları hızla *çözüyor*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Karşılıyor" kelimesinin kökü "karşıla-" fiilidir. "-yor" eki, kökteki "a" geniş ünlüsünü daraltarak "ı" yapmıştır (karşıla-yor -> karşılıyor). Diğerlerindeki ı, i, u, ü harfleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-7-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi olmuştur?',
        options: [
          { id: 'A', text: 'Affı' },
          { id: 'B', text: 'Issız' },
          { id: 'C', text: 'Sessiz' },
          { id: 'D', text: 'Yollar' },
          { id: 'E', text: 'Güller' }
        ],
        correctOptionId: 'A',
        explanation: '"Af" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sondaki "f" ünsüzü ikizleşerek türemiştir (af-ı -> affı).'
      },
      {
        id: 'q-sb-7-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi büyük ünlü uyumuna kuralına uyar?',
        options: [
          { id: 'A', text: 'Karanfil' },
          { id: 'B', text: 'Gazete' },
          { id: 'C', text: 'Kalemlik' },
          { id: 'D', text: 'Odunluk' },
          { id: 'E', text: 'Tiyatro' }
        ],
        correctOptionId: 'D',
        explanation: 'Büyük ünlü uyumuna göre kalın ünlülerden (a, ı, o, u) sonra kalın, ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. "Odunluk" kelimesindeki tüm ünlüler kalındır (o-u-u) ve kurala uyar.'
      },
      {
        id: 'q-sb-7-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "ş" harfi kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gümüş' },
          { id: 'B', text: 'Yetiş' },
          { id: 'C', text: 'Altışar' },
          { id: 'D', text: 'Beşer' },
          { id: 'E', text: 'Altmış' }
        ],
        correctOptionId: 'C',
        explanation: 'Üleştirme sayı sıfatı olan "altışar" (altı-ş-ar) kelimesinde, "ş" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-7-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ulama vardır?',
        options: [
          { id: 'A', text: 'Bugün hava gerçekten çok güzel.' },
          { id: 'B', text: 'Bütün soruları zamanında bitirdi.' },
          { id: 'C', text: 'Kitabını masanın üzerinde unuttu.' },
          { id: 'D', text: 'Sönmeden yurdumun üstünde tüten en son ocak.' },
          { id: 'E', text: 'Evden çıkmadan önce kahvaltı yaptı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Ulama, ünsüzle biten bir kelimeden sonra ünlüyle başlayan bir kelimenin gelmesiyle oluşur (arada noktalama olmadan). "tüten en" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-7-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Gencecik' },
          { id: 'B', text: 'Daracık' },
          { id: 'C', text: 'Sıcacık' },
          { id: 'D', text: 'Biricik' },
          { id: 'E', text: 'Azıcık' }
        ],
        correctOptionId: 'C',
        explanation: '"Sıcacık" kelimesinin kökü "sıcak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (sıcak-cık -> sıcacık). Diğerlerinde ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-7-10',
        difficulty: 'easy',
        questionText: 'Türkçe sözcüklerde "o, ö" ünlüleri yalnızca ilk hecede bulunabilir. Aşağıdaki kelimelerden hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Koyun' },
          { id: 'B', text: 'Horoz' },
          { id: 'C', text: 'Tavuk' },
          { id: 'D', text: 'Odun' },
          { id: 'E', text: 'Ocak' }
        ],
        correctOptionId: 'B',
        explanation: '"Horoz" kelimesinin ikinci hecesinde "o" ünlüsü kullanılmıştır. Bu durum küçük ünlü uyumu kuralına (sadece ilk hecede o/ö bulunabilir kuralına) aykırıdır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-7-orta',
    title: 'Ses Bilgisi 7 (Orta)',
    description: 'Ses Bilgisi - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-sb-7-11',
        difficulty: 'medium',
        questionText: 'Türkçede bazı sözcükler yapım eki alırken ünlü kaybına uğrar (türetilirken ünlü düşmesi). Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Besledi' },
          { id: 'B', text: 'Oynadı' },
          { id: 'C', text: 'Sızladı' },
          { id: 'D', text: 'Karnım' },
          { id: 'E', text: 'İlerledi' }
        ],
        correctOptionId: 'D',
        explanation: 'Besi-le (besle), oyun-a (oyna), sızı-la (sızla), ileri-le (ilerle) kelimelerinde yapım eki alırken ünlü düşmesi olmuştur. "Karnım" (karın-ım) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-7-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime vardır?',
        options: [
          { id: 'A', text: 'Sütün *sütü* demek istedim ama olmadı.' },
          { id: 'B', text: 'Çocuğun *topu* patlamış.' },
          { id: 'C', text: 'Ağacın *kökü* çok derine inmiş.' },
          { id: 'D', text: 'Bu işin *ucu* nereye varacak?' },
          { id: 'E', text: 'Evin *içi* oldukça karanlıktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Süt-ü, top-u, kök-ü, iç-i kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "uç" kelimesi ünlüyle başlayan ek aldığında "ucu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-7-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi kuralı gereği, sert ünsüzle biten kelimelere gelen "c, d, g" ünsüzleri "ç, t, k"ye dönüşür. Aşağıdakilerin hangisinde bu kurala aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Simitçi' },
          { id: 'B', text: 'Dolapta' },
          { id: 'C', text: 'Üçgen' },
          { id: 'D', text: 'Ağaçtan' },
          { id: 'E', text: 'Sınıfta' }
        ],
        correctOptionId: 'C',
        explanation: '"Üç" kelimesi sert ünsüzle (ç) bitmesine rağmen "-gen" yapım ekini aldığında ekin başındaki "g" ünsüzü sertleşerek "k"ye (üçken) dönüşmemiştir. Bu durum kurala aykırıdır.'
      },
      {
        id: 'q-sb-7-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Aşağıdaki kelimelerin hangisinde "y" kaynaştırma harfi değildir?',
        options: [
          { id: 'A', text: 'Suya' },
          { id: 'B', text: 'Kuyuya' },
          { id: 'C', text: 'Arabayı' },
          { id: 'D', text: 'Odayı' },
          { id: 'E', text: 'Konuyu' }
        ],
        correctOptionId: 'B',
        explanation: '"Kuyu" kelimesinin kökü kendisidir ve birinci "y" kelimenin orijinal harfidir (kuyu-y-a). Gerçi ikinci y kaynaştırmadır. Şıkkı "Koyun" veya "Boya" yapalım.\nYeni B şıkkı: Boya.\nDoğru cevap B.'
      },
      {
        id: 'q-sb-7-14-revised',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Aşağıdaki kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü **değildir**?',
        options: [
          { id: 'A', text: 'Suya' },
          { id: 'B', text: 'Boya' },
          { id: 'C', text: 'Arabayı' },
          { id: 'D', text: 'Odayı' },
          { id: 'E', text: 'Konuyu' }
        ],
        correctOptionId: 'B',
        explanation: '"Boya" kelimesinde "y", kelimenin kendi orijinal harfidir. Diğer seçeneklerde (su-y-a, araba-y-ı, oda-y-ı, konu-y-u) "y" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-7-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Gülüyor' },
          { id: 'B', text: 'Görüyor' },
          { id: 'C', text: 'Dinliyor' },
          { id: 'D', text: 'Biliyor' },
          { id: 'E', text: 'Okuyor' }
        ],
        correctOptionId: 'C',
        explanation: '"Dinliyor" sözcüğünün kökü "dinle-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "i" yapmıştır (dinle-yor -> dinliyor). Diğerlerindeki ı, i, u, ü ünlüleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-7-16',
        difficulty: 'medium',
        questionText: 'Türkçede pekiştirilmiş sözcükler oluşturulurken bazen araya ünlü bir harf girer (ünlü türemesi). Aşağıdakilerin hangisinde bu yolla oluşmuş bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Düşünce dizleri *sapsarı* olmuştu.' },
          { id: 'B', text: 'Kıpkırmızı gülleri masaya bıraktı.' },
          { id: 'C', text: 'Bembeyaz karlar her yeri kaplamıştı.' },
          { id: 'D', text: 'Olaydan sonra *sapasağlam* karşımıza çıktı.' },
          { id: 'E', text: 'Tertemiz giysileriyle dikkat çekiyordu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sapasağlam" kelimesinde "sağlam" pekiştirilirken (sap-sağlam olması gerekirken) araya "a" ünlüsü girerek türemiştir (sap-a-sağlam). Diğerlerinde ünlü türemesi yoktur.'
      },
      {
        id: 'q-sb-7-17',
        difficulty: 'medium',
        questionText: 'Arapça kökenli bazı kelimeler yardımcı eylemle (etmek, olmak) birleşirken köklerindeki son ünsüz ikizleşir (türer). Aşağıdaki kelimelerin hangisinde bu ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Zannetmek' },
          { id: 'B', text: 'Affetmek' },
          { id: 'C', text: 'Hissetmek' },
          { id: 'D', text: 'Halletmek' },
          { id: 'E', text: 'Terk etmek' }
        ],
        correctOptionId: 'E',
        explanation: 'Zan, af, his, hal kelimelerinde ünsüz türemesi olmuştur. "Terk etmek" kelimesinde ise ünsüz türemesi yoktur, kelime ayrı yazılır.'
      },
      {
        id: 'q-sb-7-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) yoktur?',
        options: [
          { id: 'A', text: 'Sütlaç' },
          { id: 'B', text: 'Niçin' },
          { id: 'C', text: 'Nasıl' },
          { id: 'D', text: 'Pazartesi' },
          { id: 'E', text: 'Şehrin' }
        ],
        correctOptionId: 'E',
        explanation: 'Sütlaç (sütlü aş), niçin (ne için), nasıl (ne asıl), pazartesi (pazar ertesi) kelimelerinde birleşme sırasında ünlü aşınması olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-7-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'B', text: 'Oraya ne zaman *gideceğimizi* sordu.' },
          { id: 'C', text: 'Eskiden *tanıdık* insanlarla karşılaştık.' },
          { id: 'D', text: 'Bunu ona da *söyleyecek* misin?' },
          { id: 'E', text: 'Okula *gidecek* çocukları servise bindirdi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gideceğimizi" (git-ecek-imiz-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü ünlüyle başlayan ek aldığı için yumuşayarak "ğ" olmuştur.'
      },
      {
        id: 'q-sb-7-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Olanları duyunca *kahroldu*.' },
          { id: 'B', text: 'Bütün bu olayları o *planlamıştı*.' },
          { id: 'C', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'D', text: 'Cüzdanını nerede *kaybettiğini* hatırlamıyor.' },
          { id: 'E', text: 'Olayın iç yüzünü öğrenince *şükretti*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kaybettiğini" kelimesinde kayıp+et-tik-i birleşmesi vardır. Kayıp kelimesindeki "ı" düşmüştür (ünlü düşmesi), p b\'ye ve k ğ\'ye yumuşamıştır (ünsüz yumuşaması). Ayrıca t-t benzeşmesi de vardır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-7-zor',
    title: 'Ses Bilgisi 7 (Zor)',
    description: 'Ses Bilgisi - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-sb-7-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, fiilin sonundaki ünlü daralmış gibi görünse de aslında bu, araya giren yardımcı ünlüdür. Aşağıdaki altı çizili sözcüklerin hangisinde gerçek bir ünlü daralması **yoktur**?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'B', text: 'Sınavı kazanamadı diye çok *ağlıyor*.' },
          { id: 'C', text: 'Olayları uzaktan sessizce *izliyor*.' },
          { id: 'D', text: 'Çocuklar bahçede saklambaç *oynuyor*.' },
          { id: 'E', text: 'Bütün bu olanları sadece o *biliyor*.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (bekle-yor), B (ağla-yor), C (izle-yor) ve D (oyna-yor) kelimelerinin kökleri geniş ünlü ile (e, a) bittiği için daralma olmuştur. E seçeneğindeki "biliyor" kelimesinin kökü "bil-" ünsüzle biter, aradaki "i" daralan bir ünlü değil, yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-7-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden veya sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Köpeği görünce korkudan yüzü *sarardı*.' },
          { id: 'B', text: 'Oğlunu askere uğurlarken *gözyaşlarını* tutamadı.' },
          { id: 'C', text: 'Yaralı kuş acı içinde *sızlıyordu*.' },
          { id: 'D', text: 'Tavuklar sabahtan beri *yumurtluyor*.' },
          { id: 'E', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' }
        ],
        correctOptionId: 'B',
        explanation: 'A (sarı-ar -> sarar), C (sızı-la -> sızla), D (yumurta-la -> yumurtla), E (uyku-la -> uyukla) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. B seçeneğindeki "oğlunu" (oğul-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-7-23',
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
        id: 'q-sb-7-24',
        difficulty: 'hard',
        questionText: 'Büyük ünlü uyumu kuralı, Türkçe kelimelerde kalın ünlüleri kalınların, ince ünlüleri incelerin takip etmesini gerektirir. Ancak Türkçede sonradan eklenen bazı ekler tek şekilli oldukları için bu kuralı bozabilir. Aşağıdaki altı çizili kelimelerin hangisinde büyük ünlü uyumunu bozan ek diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Beni *dinlerken* çok dalgın görünüyordu.' },
          { id: 'B', text: 'Akşam *okurken* birden elektrikler kesildi.' },
          { id: 'C', text: 'O hep *akşamki* olaydan bahsediyor.' },
          { id: 'D', text: 'Sabah evden *çıkarken* anahtarı unutmuş.' },
          { id: 'E', text: 'Dışarı *bakarken* eski günleri hatırladı.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerinde büyük ünlü uyumunu bozan ek, tek şekilli zarf-fiil eki olan "-ken" ekidir. C seçeneğinde ise uyumu bozan ek, aitlik eki olan "-ki" ekidir.'
      },
      {
        id: 'q-sb-7-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bardağına biraz daha *suyu* doldur.' },
          { id: 'B', text: 'Arabayı oraya *park etmeyelim*.' },
          { id: 'C', text: 'Çocuğun *boyu* epeyce uzamış.' },
          { id: 'D', text: 'Bu *soruyu* sana kim anlattı?' },
          { id: 'E', text: 'Onu dünkü toplantıda gördüğümü *söyleyeyim*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Boyu" kelimesinin kökü "boy"dur, "y" kelimenin kendi orijinal harfidir ve kaynaştırma ünsüzü değildir. Diğerlerinde y kaynaştırma olarak kullanılmıştır.'
      },
      {
        id: 'q-sb-7-26',
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
        id: 'q-sb-7-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "ünsüz benzeşmesi (sertleşmesi)" meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'B', text: 'Ağaçtan düşen elmaları *topladı*.' },
          { id: 'C', text: 'Bütün gece ders *çalıştı*.' },
          { id: 'D', text: 'Kitabını evde *unutmuştu*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissettiği* an çok sevindi.' }
        ],
        correctOptionId: 'B',
        explanation: 'A (görmüş-düm -> tüm), C (çalış-dı -> tı), D (unutmuş-du -> tu), E (hisset-di -> ti) kelimelerinde ünsüz benzeşmesi vardır. B seçeneğindeki "topladı" (topla-dı) kelimesinde ise benzeşme yoktur.'
      },
      {
        id: 'q-sb-7-28',
        difficulty: 'hard',
        questionText: 'Bir sözcükte aynı anda birden fazla ses olayı gerçekleşebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "ünlü düşmesi, ünsüz yumuşaması ve ünsüz benzeşmesi" ses olaylarının üçü de bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Cüzdanını parkta *kaybetti*.' },
          { id: 'B', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'C', text: 'Sınavı kazanamadığına *hükmetti*.' },
          { id: 'D', text: 'Olanları duyunca çok *sinirlendi*.' },
          { id: 'E', text: 'Bütün bu teklifleri anında *reddetti*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kaybetti" (kayıp + et-di) kelimesinde "ı" ünlüsü düşer (ünlü düşmesi), "p" b\'ye dönüşür (ünsüz yumuşaması) ve "d" t\'ye dönüşür (ünsüz benzeşmesi). Diğerlerinde bu üçü bir arada yoktur.'
      },
      {
        id: 'q-sb-7-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Senin *sorunu* bu akşam çözeriz.' },
          { id: 'B', text: 'Odanın *kapısını* yavaşça kapattı.' },
          { id: 'C', text: 'Masanın *örtüsünü* değiştirdi.' },
          { id: 'D', text: 'Arabanın *bagajını* temizledi.' },
          { id: 'E', text: 'Çocuğun *annesini* tanıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-7-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dudak ünsüzlerinin benzeşmesi (n-m değişimi)" kuralına aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Onbaşı komutasındaki birlik ilerledi.' },
          { id: 'B', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'C', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'D', text: 'Pembe renkli bir elbise almıştı.' },
          { id: 'E', text: 'Tembel insanlarla çalışmak çok zordur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Özel isimlerde ve birleşik kelimelerde "n" ünsüzü "m"ye dönüşmez. "Onbaşı" birleşik bir kelime olduğu için "n" ünsüzü korunmuştur (Ombaşı olmamıştır), bu durum kuralın bir istisnasıdır.'
      }
    ]
  }
];
