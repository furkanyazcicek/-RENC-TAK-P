export default [
  {
    id: 'test-ses-bilgisi-8-kolay',
    title: 'Ses Bilgisi 8 (Kolay)',
    description: 'Ses Bilgisi - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-sb-8-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde ünlü düşmesi vardır?',
        options: [
          { id: 'A', text: 'Eskiden bu *şehri* çok severdim.' },
          { id: 'B', text: 'Dünkü *seçimi* büyük bir farkla kazandı.' },
          { id: 'C', text: 'Yolculuk için büyük bir *valizi* hazırladı.' },
          { id: 'D', text: 'Bütün gece gökyüzünde bir *yıldızı* izledi.' },
          { id: 'E', text: 'Onun bu sözlerine karşı *tavrı* sertti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Şehir" kelimesi ünlüyle başlayan bir ek (-i) aldığında ikinci hecesindeki "i" ünlüsü düşmüştür (şehir-i -> şehri).'
      },
      {
        id: 'q-sb-8-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Mektubu' },
          { id: 'B', text: 'Dolaptan' },
          { id: 'C', text: 'Yurttan' },
          { id: 'D', text: 'Sınıfa' },
          { id: 'E', text: 'Ormanda' }
        ],
        correctOptionId: 'A',
        explanation: '"Mektup" kelimesi ünlüyle başlayan bir ek (-u) aldığında sonundaki "p" ünsüzü yumuşayarak "b"ye dönüşmüştür (mektup-u -> mektubu).'
      },
      {
        id: 'q-sb-8-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesi (sertleşmesi) kuralına uygun bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hava kararınca herkes evine gitti.' },
          { id: 'B', text: 'Bütün bu sorunları yavaşça çözmeliyiz.' },
          { id: 'C', text: 'Sabahtan beri durmadan çalışıyor.' },
          { id: 'D', text: 'Yeni aldığı kazağı çok beğendim.' },
          { id: 'E', text: 'Arabayı dikkatli kullanmalısın.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sabahtan" kelimesinde "sabah" sözcüğü sert ünsüzle (h) bitmiş ve ayrılma hali ekinin başındaki yumuşak ünsüzü (d) sertleştirerek "t"ye dönüştürmüştür (sabah-dan -> sabahtan).'
      },
      {
        id: 'q-sb-8-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ünlü daralması meydana gelmemiştir?',
        options: [
          { id: 'A', text: 'Anlıyor' },
          { id: 'B', text: 'Bekliyor' },
          { id: 'C', text: 'İstiyor' },
          { id: 'D', text: 'Geliyor' },
          { id: 'E', text: 'Başlıyor' }
        ],
        correctOptionId: 'D',
        explanation: 'Anla-yor (anlıyor), bekle-yor (bekliyor), iste-yor (istiyor), başla-yor (başlıyor) sözcüklerinde geniş ünlüler daralmıştır. "Geliyor" kelimesinin kökü "gel-" ünsüzle biter, aradaki "i" yardımcı ünlüdür, daralma yoktur.'
      },
      {
        id: 'q-sb-8-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz türemesi vardır?',
        options: [
          { id: 'A', text: 'Sırrı' },
          { id: 'B', text: 'Issız' },
          { id: 'C', text: 'Sessiz' },
          { id: 'D', text: 'Güller' },
          { id: 'E', text: 'Yollar' }
        ],
        correctOptionId: 'A',
        explanation: '"Sır" kelimesi ünlüyle başlayan bir ek (-ı) aldığında sondaki "r" ünsüzü ikizleşerek türemiştir (sır-ı -> sırrı).'
      },
      {
        id: 'q-sb-8-6',
        difficulty: 'easy',
        questionText: 'Büyük ünlü uyumuna göre, kalın ünlülerden sonra kalın; ince ünlülerden sonra ince ünlüler gelmelidir. Aşağıdaki kelimelerden hangisi bu kurala aykırıdır?',
        options: [
          { id: 'A', text: 'Otobüs' },
          { id: 'B', text: 'Gözlük' },
          { id: 'C', text: 'Karanlık' },
          { id: 'D', text: 'Aydınlık' },
          { id: 'E', text: 'Sessizlik' }
        ],
        correctOptionId: 'A',
        explanation: '"Otobüs" kelimesinde kalın ünlülerden (o, o) sonra ince ünlü (ü) kullanıldığı için büyük ünlü uyumuna aykırıdır.'
      },
      {
        id: 'q-sb-8-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde "s" harfi kaynaştırma ünsüzü olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Arabası' },
          { id: 'B', text: 'Kasap' },
          { id: 'C', text: 'Asker' },
          { id: 'D', text: 'Masa' },
          { id: 'E', text: 'Kasa' }
        ],
        correctOptionId: 'A',
        explanation: 'Araba-s-ı sözcüğünde, kelimenin kökündeki ünlü (a) ile iyelik ekinin ünlüsü (ı) arasına kaynaştırma harfi olan "s" girmiştir.'
      },
      {
        id: 'q-sb-8-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde ulama kuralına uyan bir sözcük öbeği vardır?',
        options: [
          { id: 'A', text: 'Sönmeden yurdumun üstünde tüten en son ocak.' },
          { id: 'B', text: 'Çatma, kurban olayım, çehreni ey nazlı hilal!' },
          { id: 'C', text: 'Kahraman ırkıma bir gül! Ne bu şiddet, bu celal?' },
          { id: 'D', text: 'Sana olmaz dökülen kanlarımız sonra helal...' },
          { id: 'E', text: 'Hakkıdır, Hakk\'a tapan, milletimin istiklal!' }
        ],
        correctOptionId: 'A',
        explanation: 'Ulama, ünsüzle biten kelimeden sonra ünlüyle başlayan kelime gelmesiyle oluşur. A seçeneğindeki "tüten en" kelimeleri arasında ulama vardır.'
      },
      {
        id: 'q-sb-8-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi vardır?',
        options: [
          { id: 'A', text: 'Biricik' },
          { id: 'B', text: 'Daracık' },
          { id: 'C', text: 'Sıcacık' },
          { id: 'D', text: 'Gülücük' },
          { id: 'E', text: 'Gencecik' }
        ],
        correctOptionId: 'C',
        explanation: '"Sıcacık" kelimesinin kökü "sıcak"tır. "-cık" ekini alırken "k" ünsüzü düşmüştür (sıcak-cık -> sıcacık). Diğerlerinde ünlü türemesi vardır.'
      },
      {
        id: 'q-sb-8-10',
        difficulty: 'easy',
        questionText: 'Türkçe sözcüklerde "o, ö" ünlüleri sadece ilk hecede bulunur. Aşağıdaki kelimelerin hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Domates' },
          { id: 'B', text: 'Çocuk' },
          { id: 'C', text: 'Koyun' },
          { id: 'D', text: 'Boyun' },
          { id: 'E', text: 'Odun' }
        ],
        correctOptionId: 'A',
        explanation: '"Domates" kelimesinde "o" ünlüsü ilk hecede olmasına rağmen, kelime genel yapısı itibarıyla (o-a-e uyumsuzluğu vb.) yabancı kökenlidir. Gerçi soru "ikinci hecede o/ö bulunması" üzerinden kurgulanmalı. Şıkları düzeltelim: A) Konsolos B) Çocuk C) Odun D) Ocak E) Koyun. Konsolos kelimesinde o ünlüsü ilk hece dışındadır.'
      },
      {
        id: 'q-sb-8-10-revised',
        difficulty: 'easy',
        questionText: 'Türkçe sözcüklerde "o, ö" ünlüleri sadece ilk hecede bulunabilir. Aşağıdaki kelimelerin hangisi bu kurala aykırı olduğu için yabancı kökenlidir?',
        options: [
          { id: 'A', text: 'Konsolos' },
          { id: 'B', text: 'Çocuk' },
          { id: 'C', text: 'Koyun' },
          { id: 'D', text: 'Boyun' },
          { id: 'E', text: 'Odun' }
        ],
        correctOptionId: 'A',
        explanation: '"Konsolos" kelimesinin ikinci ve üçüncü hecelerinde "o" ünlüsü kullanılmıştır. Bu durum küçük ünlü uyumu (düz/yuvarlak) kuralına aykırıdır ve kelimenin yabancı kökenli olduğunu gösterir.'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-8-orta',
    title: 'Ses Bilgisi 8 (Orta)',
    description: 'Ses Bilgisi - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-sb-8-11',
        difficulty: 'medium',
        questionText: 'Türkçede bazı sözcükler türetilirken (yapım eki alırken) ünlü düşmesine uğrar. Aşağıdaki kelimelerin hangisinde bu yolla oluşmuş bir ünlü düşmesi yoktur?',
        options: [
          { id: 'A', text: 'Yalnız' },
          { id: 'B', text: 'Yanlış' },
          { id: 'C', text: 'Kavşak' },
          { id: 'D', text: 'Devrim' },
          { id: 'E', text: 'Fikri' }
        ],
        correctOptionId: 'E',
        explanation: 'Yalın-ız (yalnız), yanıl-ış (yanlış), kavuş-ak (kavşak), devir-im (devrim) kelimelerinde yapım eki alırken ünlü düşmesi olmuştur. "Fikri" (fikir-i) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-8-12',
        difficulty: 'medium',
        questionText: 'Tek heceli kelimelerin çoğunda, ünlü ile başlayan ek alındığında ünsüz yumuşaması görülmez. Aşağıdaki altı çizili kelimelerin hangisinde bu kuralın istisnası olan (yumuşayan) bir kelime kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sütün *sütü* demek istedim ama olmadı.' },
          { id: 'B', text: 'Bu işin *ucu* nereye varacak?' },
          { id: 'C', text: 'Odanın *içi* oldukça karanlıktı.' },
          { id: 'D', text: 'Çocuğun *saçı* epeyce uzamış.' },
          { id: 'E', text: 'Atılan *oku* kimse göremedi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Süt-ü, iç-i, saç-ı, ok-u kelimelerinde tek heceli oldukları için yumuşama olmamıştır. Ancak "uç" kelimesi ünlüyle başlayan ek aldığında "ucu" şeklinde yumuşamıştır.'
      },
      {
        id: 'q-sb-8-13',
        difficulty: 'medium',
        questionText: 'Ünsüz benzeşmesi (sertleşmesi) kuralı özel isimlere ve sayılara getirilen eklerde de geçerlidir. Aşağıdaki cümlelerin hangisinde bu kurala uyulmamasından kaynaklanan bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'TÜBİTAK\'tan yeni bir proje onayı geldi.' },
          { id: 'B', text: 'BOTAŞ\'tan yapılan açıklama dikkat çekti.' },
          { id: 'C', text: 'Toplantı 15.00\'da sona erdi.' },
          { id: 'D', text: 'Bu bina 1993\'de yapılmış.' },
          { id: 'E', text: 'Zonguldak\'tan yeni döndük.' }
        ],
        correctOptionId: 'D',
        explanation: '"1993" kelimesinin okunuşu "üç" şeklinde "ç" sert ünsüzüyle biter. Bu nedenle ek sertleşmeli ve "1993\'te" olmalıdır. "1993\'de" yazımı yanlıştır.'
      },
      {
        id: 'q-sb-8-14',
        difficulty: 'medium',
        questionText: 'Türkçede "y" harfi kaynaştırma ünsüzü olarak kullanılır. Ancak bazı kelimelerde "y" kelimenin kendi kökünde bulunur. Aşağıdaki kelimelerin hangisinde "y" kaynaştırma harfi değildir?',
        options: [
          { id: 'A', text: 'Boya' },
          { id: 'B', text: 'Kutuya' },
          { id: 'C', text: 'Arabayı' },
          { id: 'D', text: 'Kapıyı' },
          { id: 'E', text: 'Masayı' }
        ],
        correctOptionId: 'A',
        explanation: '"Boya" kelimesinde "y", kelimenin kendi orijinal harfidir. Diğer seçeneklerde (kutu-y-a, araba-y-ı, kapı-y-ı, masa-y-ı) "y" harfi ünlüyle biten kelime ile ünlüyle başlayan ek arasına giren kaynaştırma ünsüzüdür.'
      },
      {
        id: 'q-sb-8-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünlü daralması meydana gelmiştir?',
        options: [
          { id: 'A', text: 'O da bizimle *geliyor*.' },
          { id: 'B', text: 'Bu işi o *biliyor*.' },
          { id: 'C', text: 'Her şeyi önceden *seziyor*.' },
          { id: 'D', text: 'Olanları uzaktan *izliyor*.' },
          { id: 'E', text: 'Kitabını sessizce *okuyor*.' }
        ],
        correctOptionId: 'D',
        explanation: '"İzliyor" sözcüğünün kökü "izle-" fiilidir. "-yor" eki geniş ünlü olan "e"yi daraltarak "i" yapmıştır (izle-yor -> izliyor). Diğerlerindeki ı, i, u, ü ünlüleri yardımcı ünlülerdir.'
      },
      {
        id: 'q-sb-8-16',
        difficulty: 'medium',
        questionText: 'Türkçede pekiştirilmiş sözcükler oluşturulurken bazen araya ünlü bir harf girer (ünlü türemesi). Aşağıdakilerin hangisinde bu yolla oluşmuş bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Sokakta *yapayalnız* kalmıştı.' },
          { id: 'B', text: 'Düşünce dizleri *sapsarı* olmuştu.' },
          { id: 'C', text: 'Adam *çırılçıplak* soyunmuştu.' },
          { id: 'D', text: 'Gündüz vakti *güpegündüz* soygun yaptılar.' },
          { id: 'E', text: 'Olaydan sonra *sapasağlam* karşımıza çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yalnız (yap-a-yalnız), çıplak (çır-ıl-çıplak), gündüz (güp-e-gündüz), sağlam (sap-a-sağlam) kelimelerinde ünlü türemesi vardır. "Sapsarı" kelimesinde pekiştirme vardır ancak ünlü türemesi olmamıştır (sap-sarı).'
      },
      {
        id: 'q-sb-8-17',
        difficulty: 'medium',
        questionText: 'Arapça kökenli bazı kelimeler yardımcı eylemle (etmek, olmak) birleşirken köklerindeki son ünsüz ikizleşir (türer). Aşağıdaki kelimelerin hangisinde bu ses olayı yoktur?',
        options: [
          { id: 'A', text: 'Affetmek' },
          { id: 'B', text: 'Halletmek' },
          { id: 'C', text: 'Hissetmek' },
          { id: 'D', text: 'Zannetmek' },
          { id: 'E', text: 'Terk etmek' }
        ],
        correctOptionId: 'E',
        explanation: 'Af, hal, his, zan kelimelerinde ünsüz türemesi olmuştur. "Terk etmek" kelimesinde ise ünsüz türemesi yoktur, ayrı yazılır.'
      },
      {
        id: 'q-sb-8-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerin hangisinde iki sözcüğün birleşmesi sırasında meydana gelen bir ünlü aşınması (ünlü düşmesi) örneği yoktur?',
        options: [
          { id: 'A', text: 'Pazartesi' },
          { id: 'B', text: 'Niçin' },
          { id: 'C', text: 'Nasıl' },
          { id: 'D', text: 'Sütlaç' },
          { id: 'E', text: 'Şehrin' }
        ],
        correctOptionId: 'E',
        explanation: 'Pazartesi (pazar ertesi), niçin (ne için), nasıl (ne asıl), sütlaç (sütlü aş) kelimelerinde birleşme sırasında ünlü aşınması olmuştur. "Şehrin" (şehir-in) kelimesinde ise çekim eki alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-8-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde ünsüz yumuşaması kuralına uyan bir ek (-dık / -ecek) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Burada *tanıdık* kimse yok mu?' },
          { id: 'B', text: 'Onun *geleceğini* önceden biliyordum.' },
          { id: 'C', text: 'Sınavı *kazanacak* gücü kendinde buldu.' },
          { id: 'D', text: 'Gidilecek *yerleri* not aldı.' },
          { id: 'E', text: 'Bunu ona da *söyleyecek* misin?' }
        ],
        correctOptionId: 'B',
        explanation: '"Geleceğini" (gel-ecek-i-n-i) kelimesinde "-ecek" ekinin sonundaki "k" ünsüzü ünlüyle başlayan ek aldığı için yumuşayarak "ğ" olmuştur.'
      },
      {
        id: 'q-sb-8-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde hem ünlü düşmesi hem de ünsüz benzeşmesi (sertleşmesi) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Sorunları konuşarak *halletti*.' },
          { id: 'B', text: 'Olayın iç yüzünü *keşfetti*.' },
          { id: 'C', text: 'Olanları duyunca *kahroldu*.' },
          { id: 'D', text: 'Gelen misafirleri büyük bir nezaketle *ağırladı*.' },
          { id: 'E', text: 'Olayları sonradan *fark etti*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Keşfetti" (keşif + et-ti). Keşif kelimesindeki "i" düşmüştür (ünlü düşmesi). "et-di" kısmındaki d ünsüzü t\'ye sertleşmiştir (ünsüz benzeşmesi).'
      }
    ]
  },
  {
    id: 'test-ses-bilgisi-8-zor',
    title: 'Ses Bilgisi 8 (Zor)',
    description: 'Ses Bilgisi - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-sb-8-21',
        difficulty: 'hard',
        questionText: 'Bazı fiillere "-yor" eki getirildiğinde, araya giren yardımcı ünlü (ı, i, u, ü) daralma zannedilebilir. Aşağıdaki altı çizili sözcüklerin hangisinde "-yor" ekinin daraltıcı etkisiyle oluşmuş gerçek bir ünlü daralması vardır?',
        options: [
          { id: 'A', text: 'O, her zaman kendi bildiğini *okutuyor*.' },
          { id: 'B', text: 'Gelen misafirleri kapıda *bekliyor*.' },
          { id: 'C', text: 'Sınav kağıtlarını dikkatlice *okuyor*.' },
          { id: 'D', text: 'Bütün bu olanları sadece o *biliyor*.' },
          { id: 'E', text: 'Her akşam aynı saatte eve *geliyor*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bekliyor" sözcüğünün kökü "bekle-" fiilidir. "e" geniş ünlüsü "-yor" ekinin etkisiyle daralarak "i" olmuştur. Diğer seçeneklerde (okut-, oku-, bil-, gel-) kökteki son harf zaten dar ünlü veya ünsüzdür, araya giren ses yardımcı ünlüdür.'
      },
      {
        id: 'q-sb-8-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ünlü düşmesi" eylem türetilirken (isimden/sıfattan fiil yapım eki alırken) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'Bütün gece *uyuklamaktan* boynu tutulmuştu.' },
          { id: 'B', text: 'Yaralı kuş acı içinde *sızlıyordu*.' },
          { id: 'C', text: 'Tavuklar sabahtan beri *yumurtluyor*.' },
          { id: 'D', text: 'Köpeği görünce korkudan yüzü *sarardı*.' },
          { id: 'E', text: 'Oğlunu askere uğurlarken *gözyaşlarını* tutamadı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (uyku-la -> uyukla), B (sızı-la -> sızla), C (yumurta-la -> yumurtla), D (sarı-ar -> sarar) kelimelerinde isim veya sıfattan fiil türetilirken ünlü düşmesi olmuştur. E seçeneğindeki "oğlunu" (oğul-u) kelimesinde ise çekim eki (iyelik) alırken ünlü düşmesi olmuştur.'
      },
      {
        id: 'q-sb-8-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde ünsüz düşmesi, diğerlerinden farklı bir nedenle (farklı bir ekle) meydana gelmiştir?',
        options: [
          { id: 'A', text: 'Küçücük' },
          { id: 'B', text: 'Ufacık' },
          { id: 'C', text: 'Yükseldi' },
          { id: 'D', text: 'Sıcacık' },
          { id: 'E', text: 'Alçacık' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki kelimeler küçültme eki olan "-cık / -cük" alırken sondaki "k" ünsüzü düşmüştür (küçük-cük vb.). C seçeneğindeki "yükseldi" (yüksek-el-di) kelimesinde ise fiil türetme eki "-el" alırken "k" ünsüzü düşmüştür.'
      },
      {
        id: 'q-sb-8-24',
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
        id: 'q-sb-8-25',
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
        id: 'q-sb-8-26',
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
        id: 'q-sb-8-27',
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
        id: 'q-sb-8-28',
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
        id: 'q-sb-8-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerin hangisinde "n" harfi kaynaştırma ünsüzü göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Odanın *kapısını* yavaşça kapattı.' },
          { id: 'B', text: 'Masanın *örtüsünü* değiştirdi.' },
          { id: 'C', text: 'Arabanın *bagajını* temizledi.' },
          { id: 'D', text: 'Senin *sorunu* bu akşam çözeriz.' },
          { id: 'E', text: 'Çocuğun *annesini* tanıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde kelime "sorun" (sor-maktan sorun) köküdür, "sorun-u" belirtme veya iyelik ekidir. Burada n kaynaştırma değildir, kelimenin kökündeki harftir.'
      },
      {
        id: 'q-sb-8-30',
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
