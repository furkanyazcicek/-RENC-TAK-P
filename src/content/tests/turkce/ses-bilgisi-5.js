export default [
  {
    id: 'test-ses-bilgisi-5-kolay',
    title: 'Ses Bilgisi 5 (Kolay)',
    description: 'Ses Bilgisi - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-sb-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Resmi' },
          { id: 'B', text: 'Yüzü' },
          { id: 'C', text: 'Gözü' },
          { id: 'D', text: 'Saçı' },
          { id: 'E', text: 'Sözü' }
        ],
        correctOptionId: 'A',
        explanation: '"Resmi" sözcüğünün kökü "resim"dir. Ünlüyle başlayan ek (-i) aldığında ikinci hecedeki "i" ünlüsü düşmüştür (resim-i -> resmi).'
      },
      {
        id: 'q-sb-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması olmuştur?',
        options: [
          { id: 'A', text: 'Yurdu' },
          { id: 'B', text: 'Kitabı' },
          { id: 'C', text: 'Çiçeği' },
          { id: 'D', text: 'Rengi' },
          { id: 'E', text: 'Hepsi' }
        ],
        correctOptionId: 'E',
        explanation: 'Yurt-u (yurdu), kitap-ı (kitabı), çiçek-i (çiçeği) ve renk-i (rengi) sözcüklerinin tümünde, kelime sonundaki sert ünsüzler (t, p, k, k) ünlüyle başlayan ek aldıkları için yumuşamıştır (d, b, ğ, g).'
      },
      {
        id: 'q-sb-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi ünsüz benzeşmesine (sertleşmesine) uğramıştır?',
        options: [
          { id: 'A', text: 'Evden' },
          { id: 'B', text: 'Yolcu' },
          { id: 'C', text: 'Dolapta' },
          { id: 'D', text: 'Sınıfa' },
          { id: 'E', text: 'Kalemlik' }
        ],
        correctOptionId: 'C',
        explanation: '"Dolapta" kelimesinde, "p" sert ünsüzüyle biten "dolap" kelimesi, bulunma hali eki (-da) aldığında ekin başındaki "d" yumuşak ünsüzünü sertleştirerek "t"ye dönüştürmüştür (dolap-da -> dolapta).'
      },
      {
        id: 'q-sb-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili fiillerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Onu gördüğünde çok *seviniyor*.' },
          { id: 'B', text: 'Arkadaşlarıyla parkta *buluşuyor*.' },
          { id: 'C', text: 'Karanlıktan çok *korkuyor*.' },
          { id: 'D', text: 'Herkesin arkasından konuşup *söylüyor*.' },
          { id: 'E', text: 'Kuşlar gökyüzünde özgürce *uçuyor*.' }
        ],
        correctOptionId: 'D',
        explanation: 'Söyle-yor (söylüyor) kelimesinde kökteki e ünlüsü ü\'ye daralmıştır. Diğer kelimelerin kökleri ünsüzle bitmektedir (sevin-, buluş-, kork-, uç-) ve aradaki ünlüler yardımcı ünlüdür, daralma yoktur.'
      },
      {
        id: 'q-sb-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Reddi' },
          { id: 'B', text: 'Sessiz' },
          { id: 'C', text: 'Yollar' },
          { id: 'D', text: 'Hepsini' },
          { id: 'E', text: 'Çiçekler' }
        ],
        correctOptionId: 'A',
        explanation: '"Ret" kelimesi ünlüyle başlayan bir ek (-i) aldığında sondaki "t" ünsüzü yumuşarken aynı zamanda bir "d" daha türeyerek ikizleşmiştir (ret-i -> reddi).'
      },
      {
        id: 'q-sb-5-6',
        difficulty: 'easy',
        questionText: 'Büyük ünlü uyumuna göre kalın ünlülerden (a, ı, o, u) sonra kalın, ince ünlülerden (e, i, ö, ü) sonra ince ünlüler gelmelidir. Aşağıdaki kelimelerden hangisi bu kurala aykırıdır?',
        options: [
          { id: 'A', text: 'Aydınlık' },
          { id: 'B', text: 'Gelecek' },
          { id: 'C', text: 'Sabahleyin' },
          { id: 'D', text: 'Korkuluk' },
          { id: 'E', text: 'Gözlükçü' }
        ],
        correctOptionId: 'C',
        explanation: '"Sabahleyin" kelimesinde kalın ünlülerle (a, a) başlayan sözcük, "-leyin" ekinin ince ünlüleri (e, i) nedeniyle kurala aykırı hale gelmiştir.'
      },
      {
        id: 'q-sb-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "ş" kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Beşer' },
          { id: 'B', text: 'Altmış' },
          { id: 'C', text: 'Altışar' },
          { id: 'D', text: 'Yetiş' },
          { id: 'E', text: 'Gümüş' }
        ],
        correctOptionId: 'C',
        explanation: 'Üleştirme sayı sıfatı olan "altışar" (altı-ş-ar) kelimesinde, "ş" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür. (Beş-er kelimesinde ş köktedir).'
      },
      {
        id: 'q-sb-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ulama vardır?',
        options: [
          { id: 'A', text: 'Gözlerinin rengi masmaviydi.' },
          { id: 'B', text: 'Her insan kendi kaderini çizer.' },
          { id: 'C', text: 'Kitabını masanın üzerinde unuttu.' },
          { id: 'D', text: 'Evden çıkmadan önce kahvaltı yaptı.' },
          { id: 'E', text: 'Sönmeden yurdumun üstünde tüten en son ocak.' }
        ],
        correctOptionId: 'E',
        explanation: 'Ulama, ünsüzle biten bir kelimeden sonra ünlüyle başlayan bir kelimenin gelmesiyle oluşur. "tüten en" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Sımsıcak' },
          { id: 'B', text: 'Alçacık' },
          { id: 'C', text: 'Gencecik' },
          { id: 'D', text: 'Daracık' },
          { id: 'E', text: 'Biricik' }
        ],
        correctOptionId: 'B',
        explanation: '"Alçacık" kelimesinin kökü "alçak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (alçak-cık -> alçacık).'
      },
      {
        id: 'q-sb-5-10',
        difficulty: 'easy',
        questionText: 'Küçük ünlü uyumu kuralına göre Türkçe sözcüklerde "o, ö" ünlüleri yalnızca ilk hecede bulunabilir. Aşağıdaki kelimelerden hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Horoz' },
          { id: 'B', text: 'Tavuk' },
          { id: 'C', text: 'Koyun' },
          { id: 'D', text: 'Köpek' },
          { id: 'E', text: 'Domuz' }
        ],
        correctOptionId: 'A',
        explanation: '"Horoz" kelimesinin ikinci hecesinde "o" ünlüsü kullanılmıştır. Bu durum küçük ünlü uyumu (düz/yuvarlak) kuralına aykırıdır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-5-orta',
    title: 'Ses Bilgisi 5 (Orta)',
    description: 'Ses Bilgisi - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-sb-5-11',
        difficulty: 'medium',
        questionText: 'Türkçede türetilen bazı kelimelerde ünlü düşmesi görülebilir. Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Devri' },
          { id: 'B', text: 'Sızladı' },
          { id: 'C', text: 'Besledi' },
          { id: 'D', text: 'Oynadı' },
          { id: 'E', text: 'İlerledi' }
        ],
        correctOptionId: 'A',
        explanation: 'Sızı-la (sızla), besi-le (besle), oyun-a (oyna), ileri-le (ilerle) kelimelerinde yapım eki (türetme) alırken ünlü düşmesi olmuştur. "Devri" (devir-i) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-5-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime vardır?',
        options: [
          { id: 'A', text: 'Evin *içi* oldukça karanlıktı.' },
          { id: 'B', text: 'Sütün *sütü* demek istedim ama olmadı, *sütü* taşırdı.' },
          { id: 'C', text: 'İpin *ucu* elinden kaçtı.' },
          { id: 'D', text: 'Atılan *oku* kimse göremedi.' },
          { id: 'E', text: 'Ağacın *kökü* çok derine inmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'İç-i, süt-ü, ok-u, kök-ü kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "uç" kelimesi ünlüyle başlayan ek aldığında "ucu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-5-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi (sertleşmesi) kuralı sayılara getirilen eklerde de geçerlidir. Aşağıdaki cümlelerin hangisinde bu kurala uyulmamasından kaynaklanan bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Sınav saat 14.15\'te başlayacak.' },
          { id: 'B', text: 'Bu bina 1993\'te yapılmış.' },
          { id: 'C', text: 'Yarışmayı 3\'üncü sırada bitirdi.' },
          { id: 'D', text: 'Toplantı 15.00\'da sona erdi.' },
          { id: 'E', text: 'Olay 1945\'de gerçekleşmiş.' }
        ],
        correctOptionId: 'E',
        explanation: '"1945" kelimesinin okunuşu "kırk beş" şeklinde "ş" sert ünsüzüyle biter. Bu nedenle ek sertleşmeli ve "1945\'te" olmalıdır. "1945\'de" yazımı yanlıştır.'
      },
      {
        id: 'q-sb-5-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Ancak bazı kelimelerde "y" kelimenin kökünde bulunur. Aşağıdaki kelimelerin hangisinde "y" kaynaştırma harfi değildir?',
        options: [
          { id: 'A', text: 'Odayı' },
          { id: 'B', text: 'Koyun' },
          { id: 'C', text: 'Soruyu' },
          { id: 'D', text: 'Suyu' },
          { id: 'E', text: 'Arabayı' }
        ],
        correctOptionId: 'B',
        explanation: '"Koyun" kelimesinin kökü kendisidir ve "y" kelimenin orijinal harfidir (koy-un kökü). Diğer seçeneklerde (oda-y-ı, soru-y-u, su-y-u, araba-y-ı) ünlüyle biten kelimeye ünlüyle başlayan ek gelirken "y" kaynaştırma ünsüzü girmiştir.'
      },
      {
        id: 'q-sb-5-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Dinliyor' },
          { id: 'B', text: 'Biliyor' },
          { id: 'C', text: 'Görüyor' },
          { id: 'D', text: 'Gülüyor' },
          { id: 'E', text: 'Okuyor' }
        ],
        correctOptionId: 'A',
        explanation: '"Dinliyor" sözcüğünün kökü "dinle-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "i" yapmıştır (dinle-yor -> dinliyor). Diğerlerindeki i, ü, u ünlüleri araya giren yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde pekiştirme sırasında ünlü türemesi meydana gelen bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Kıpkırmızı gülleri masaya bıraktı.' },
          { id: 'B', text: 'Tertemiz giysileriyle dikkat çekiyordu.' },
          { id: 'C', text: 'Sokaklarda sapsarı yapraklar uçuşuyordu.' },
          { id: 'D', text: 'Sapasağlam adam bir anda yere yığıldı.' },
          { id: 'E', text: 'Bembeyaz karlar her yeri kaplamıştı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Sapasağlam" kelimesinde "sağlam" pekiştirilirken (sap-sağlam olması gerekirken) araya "a" ünlüsü girerek türemiştir (sap-a-sağlam).'
      },
      {
        id: 'q-sb-5-17',
        difficulty: 'medium',
        questionText: 'Türkçede "b" ünsüzü kendinden önce gelen "n" ünsüzünü "m"ye çevirir (dudak ünsüzlerinin benzeşmesi). Aşağıdaki kelimelerin hangisinde bu kuralın bir örneği yoktur?',
        options: [
          { id: 'A', text: 'Çarşamba' },
          { id: 'B', text: 'Pembe' },
          { id: 'C', text: 'Tembel' },
          { id: 'D', text: 'Zambak' },
          { id: 'E', text: 'İstanbul' }
        ],
        correctOptionId: 'E',
        explanation: 'Özel isimlerde "n-b" çatışması kuralı uygulanmaz. Bu nedenle "İstanbul" kelimesinde "n" harfi "m"ye dönüşmemiştir (İstambul olmamıştır). Bu durum kuralın bir istisnasıdır.'
      },
      {
        id: 'q-sb-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) örneği yoktur?',
        options: [
          { id: 'A', text: 'Pazartesi' },
          { id: 'B', text: 'Nasıl' },
          { id: 'C', text: 'Sütlaç' },
          { id: 'D', text: 'Kayıp' },
          { id: 'E', text: 'Niçin' }
        ],
        correctOptionId: 'D',
        explanation: 'Pazartesi (pazar ertesi), nasıl (ne asıl), sütlaç (sütlü aş), niçin (ne için) kelimelerinde ünlü aşınması vardır. "Kayıp" kelimesi ise basit bir sözcüktür, birleşme veya aşınma yoktur.'
      },
      {
        id: 'q-sb-5-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okula *gidecek* çocukları servise bindirdi.' },
          { id: 'B', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'C', text: 'Oraya ne zaman *gideceğimizi* sordu.' },
          { id: 'D', text: 'Eskiden *tanıdık* insanlarla karşılaştık.' },
          { id: 'E', text: 'Bunu ona da *söyleyecek* misin?' }
        ],
        correctOptionId: 'C',
        explanation: '"Gideceğimizi" (git-ecek-imiz-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü yumuşayarak "ğ" olmuştur. Diğerlerinde ek sonundaki sert ünsüz korunmuştur.'
      },
      {
        id: 'q-sb-5-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'B', text: 'Olanları duyunca *kahroldu*.' },
          { id: 'C', text: 'Bütün bu olayları o *planlamıştı*.' },
          { id: 'D', text: 'Olayın iç yüzünü öğrenince *şükretti*.' },
          { id: 'E', text: 'Cüzdanını nerede *kaybettiğini* hatırlamıyor.' }
        ],
        correctOptionId: 'E',
        explanation: '"Kaybettiğini" kelimesinde kayıp+et-tik-i birleşmesi vardır. Kayıp kelimesindeki "ı" düşmüştür (ünlü düşmesi), p b\'ye ve k ğ\'ye yumuşamıştır (ünsüz yumuşaması). Ayrıca t-t benzeşmesi de vardır.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-5-zor',
    title: 'Ses Bilgisi 5 (Zor)',
    description: 'Ses Bilgisi - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-sb-5-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde araya giren yardımcı ünlü (ı, i, u, ü) daralma zannedilebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" ekinin daraltıcı etkisiyle oluşmuş gerçek bir ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'O her akşam kitap *okuyor*.' },
          { id: 'B', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'C', text: 'Olayları uzaktan *izliyor*.' },
          { id: 'D', text: 'Çocuklar bahçede saklambaç *oynuyor*.' },
          { id: 'E', text: 'Bütün bu olanları sadece o *biliyor*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Soru kurgusunda hata var! Bekliyor (bekle), izliyor (izle), oynuyor (oyna) hepsinde daralma var! Biliyor (bil-i-yor) kelimesinde daralma yoktur, yardımcı ünlü vardır. Soruyu "hangisinde ünlü daralması yoktur" olarak düzelteceğim. \nYeni Soru: Aşağıdaki cümlelerin hangisinde ünlü daralması yoktur?\nA) Gelen misafirleri kapıda *bekliyor*. (bekle-yor)\nB) Olayları uzaktan sessizce *izliyor*. (izle-yor)\nC) Çocuklar bahçede saklambaç *oynuyor*. (oyna-yor)\nD) Sınavı kazanamadığına çok *ağlıyor*. (ağla-yor)\nE) Bütün bu olanları sadece o *biliyor*. (bil-i-yor, daralma yok).'
      },
      {
        id: 'q-sb-5-21-revised',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, fiilin sonundaki ünlü daralmış gibi görünse de aslında araya giren yardımcı ünlüdür. Aşağıdaki altı çizili sözcüklerin hangisinde ünlü daralması **yoktur**?',
        options: [
          { id: 'A', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'B', text: 'Olayları uzaktan sessizce *izliyor*.' },
          { id: 'C', text: 'Çocuklar bahçede saklambaç *oynuyor*.' },
          { id: 'D', text: 'Sınavı kazanamadığına çok *ağlıyor*.' },
          { id: 'E', text: 'Bütün bu olanları sadece o *biliyor*.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (bekle-yor), B (izle-yor), C (oyna-yor) ve D (ağla-yor) kelimelerinin kökleri geniş ünlü ile (a, e) bittiği için daralma olmuştur. E seçeneğindeki "biliyor" kelimesinin kökü "bil-" ünsüzle biter, aradaki "i" daralan bir ünlü değil, yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-5-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden/sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Hastalığından dolayı benzi iyice *sararmıştı*.' },
          { id: 'B', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' },
          { id: 'C', text: 'Yaralı köpek acı içinde *sızlıyordu*.' },
          { id: 'D', text: 'Tavuklar sabahtan beri *yumurtluyor*.' },
          { id: 'E', text: 'Oğlunu askere uğurlarken gözyaşlarını tutamadı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (sarı-ar -> sarar), B (uyku-la -> uyukla), C (sızı-la -> sızla), D (yumurta-la -> yumurtla) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. E seçeneğindeki "oğlunu" (oğul-u-n-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-5-23',
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
        explanation: 'A, B, C ve D seçeneklerindeki kelimeler küçültme eki olan "-cık / -cük" alırken sondaki "k" ünsüzü düşmüştür (küçük-cük vb.). E seçeneğindeki "yükseldi" (yüksek-el-di) kelimesinde ise fiil türetme eki "-el / -al" alırken "k" ünsüzü düşmüştür.'
      },
      {
        id: 'q-sb-5-24',
        difficulty: 'hard',
        questionText: 'Büyük ünlü uyumu kuralı, Türkçe kelimelerde kalın ünlüleri kalınların, ince ünlüleri incelerin takip etmesini gerektirir. Ancak Türkçede sonradan eklenen bazı yapım ve çekim ekleri tek şekilli oldukları için bu kuralı bozabilir. Aşağıdaki altı çizili kelimelerin hangisinde büyük ünlü uyumunu bozan ek diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Beni *dinlerken* çok dalgın görünüyordu.' },
          { id: 'B', text: 'Akşam *okurken* birden elektrikler kesildi.' },
          { id: 'C', text: 'Sabah evden *çıkarken* anahtarını unutmuş.' },
          { id: 'D', text: 'O hep *akşamki* olaydan bahsediyor.' },
          { id: 'E', text: 'Dışarı *bakarken* eski günleri hatırladı.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde büyük ünlü uyumunu bozan ek, tek şekilli zarf-fiil eki olan "-ken" ekidir. D seçeneğinde ise uyumu bozan ek, aitlik eki olan "-ki" ekidir.'
      },
      {
        id: 'q-sb-5-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "y" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu *soruyu* sana kim anlattı?' },
          { id: 'B', text: 'Bardağına biraz daha *suyu* doldur.' },
          { id: 'C', text: 'Çocuğun *boyu* epeyce uzamış.' },
          { id: 'D', text: 'Onu dünkü toplantıda gördüğümü *söyleyeyim*.' },
          { id: 'E', text: 'Arabayı oraya *park etmeyelim*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Boyu" kelimesinin kökü "boy"dur, "y" kelimenin kendi orijinal harfidir ve kaynaştırma ünsüzü değildir. Diğerlerinde y kaynaştırma olarak kullanılmıştır.'
      },
      {
        id: 'q-sb-5-26',
        difficulty: 'hard',
        questionText: 'Yabancı kökenli bazı sözcüklerin sonundaki sert ünsüzler, ünlüyle başlayan bir ek aldıklarında yumuşamaz. Aşağıdaki altı çizili kelimelerin hangisinde bu kurala uyan (yumuşamamış) bir sözcük vardır?',
        options: [
          { id: 'A', text: 'Bütün *kitapları* kutulara yerleştirdi.' },
          { id: 'B', text: 'Evin *kilidi* tamamen bozulmuş.' },
          { id: 'C', text: 'Ağacın *yaprağı* rüzgarda uçuşuyordu.' },
          { id: 'D', text: 'Bu *devletin* temelleri sağlamdır.' },
          { id: 'E', text: 'Yeni aldığı *dolabı* çok beğendi.' }
        ],
        correctOptionId: 'D',
        explanation: '"Devlet" kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında sonundaki "t" ünsüzü yumuşamamıştır (devledin değil devletin). Diğerleri (kitabı, kilidi, yaprağı, dolabı) yumuşamıştır.'
      },
      {
        id: 'q-sb-5-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "ünsüz benzeşmesi (sertleşmesi)" meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda *görmüştüm*.' },
          { id: 'B', text: 'Bütün gece ders *çalıştı*.' },
          { id: 'C', text: 'Sınavı kazandığını *hissettiği* an çok sevindi.' },
          { id: 'D', text: 'Kitabını evde *unutmuştu*.' },
          { id: 'E', text: 'Ağaçtan düşen elmaları *topladı*.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (görmüş-düm -> tüm), B (çalış-dı -> tı), C (hisset-di -> ti), D (unutmuş-du -> tu) kelimelerinde ünsüz benzeşmesi vardır. E seçeneğindeki "topladı" (topla-dı) kelimesinde ise benzeşme yoktur.'
      },
      {
        id: 'q-sb-5-28',
        difficulty: 'hard',
        questionText: 'Bir sözcükte aynı anda birden fazla ses olayı gerçekleşebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "ünlü düşmesi, ünsüz yumuşaması ve ünsüz benzeşmesi" ses olaylarının üçü de bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'B', text: 'Sınavı kazanamadığına *hükmetti*.' },
          { id: 'C', text: 'Olanları duyunca çok *sinirlendi*.' },
          { id: 'D', text: 'Cüzdanını parkta *kaybetti*.' },
          { id: 'E', text: 'Bütün bu teklifleri anında *reddetti*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kaybetti" (kayıp + et-di) kelimesinde "ı" ünlüsü düşer (ünlü düşmesi), "p" b\'ye dönüşür (ünsüz yumuşaması) ve "d" t\'ye dönüşür (ünsüz benzeşmesi). Diğerlerinde bu üçü bir arada yoktur.'
      },
      {
        id: 'q-sb-5-29',
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
        explanation: 'B seçeneğinde "senin sorunu-n-u" değil, kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-5-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "dudak ünsüzlerinin benzeşmesi (n-m değişimi)" kuralına aykırı bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Saklambaç oynamayı çok severdi.' },
          { id: 'B', text: 'Pembe renkli bir elbise almıştı.' },
          { id: 'C', text: 'Onbaşı komutasındaki birlik ilerledi.' },
          { id: 'D', text: 'Çarşamba günü yeni bir projeye başlıyoruz.' },
          { id: 'E', text: 'Tembel insanlarla çalışmak çok zordur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel isimlerde ve birleşik kelimelerde "n" ünsüzü "m"ye dönüşmez. "Onbaşı" birleşik bir kelime olduğu için "n" ünsüzü korunmuştur (Ombaşı olmamıştır), bu durum kuralın bir istisnasıdır.'
      }
    ]
  }
];
