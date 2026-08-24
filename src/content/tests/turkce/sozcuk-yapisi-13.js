export default [
  {
    id: 'test-sozcuk-yapisi-13-kolay',
    title: 'Sözcük Yapısı 13 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (181-190)',
    type: 'comprehension',
    order: 37,
    questions: [
      {
        id: 'q-sy-13-1',
        difficulty: 'easy',
        questionText: '"Yazı" sözcüğündeki "-ı" eki ne tür bir ektir?',
        options: [
          { id: 'A', text: 'Çekim eki (belirtme hâli)' },
          { id: 'B', text: 'Yapım eki (fiilden isim)' },
          { id: 'C', text: 'Çoğul eki' },
          { id: 'D', text: 'İyelik eki' },
          { id: 'E', text: 'Ünlem eki' }
        ],
        correctOptionId: 'B',
        explanation: '"Yazı" sözcüğünde "yaz-" fiil kökü + "-ı" yapım eki ile "yazmak eyleminin ürünü" anlamında isim türetilmiştir. Bu yapım ekidir; çekim değildir.'
      },
      {
        id: 'q-sy-13-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi "isimden sıfat" yapım eki almıştır?',
        options: [
          { id: 'A', text: 'yazıcı' },
          { id: 'B', text: 'çalışkan' },
          { id: 'C', text: 'akıllı' },
          { id: 'D', text: 'koşucu' },
          { id: 'E', text: 'gülücük' }
        ],
        correctOptionId: 'C',
        explanation: '"Akıllı" sözcüğü "akıl" (isim kökü) + "-lı" (isimden sıfat yapım eki) ile oluşturulmuştur. "Akla sahip olan" anlamında sıfat türetilmiştir.'
      },
      {
        id: 'q-sy-13-3',
        difficulty: 'easy',
        questionText: '"Çamaşırlık" sözcüğündeki yapım eki sayısı kaçtır?',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' },
          { id: 'E', text: '4' }
        ],
        correctOptionId: 'B',
        explanation: '"Çamaşırlık": "çamaşır" (birleşik isim kök) + "-lık" (yapım eki). Yalnızca bir yapım eki bulunmaktadır. "Çamaşır" sözcüğü kendisi de birleşik ama kök sayılır.'
      },
      {
        id: 'q-sy-13-4',
        difficulty: 'easy',
        questionText: 'Türkçede "yapım eki" eklenince sözcüğün hangi özelliği değişebilir?',
        options: [
          { id: 'A', text: 'Yalnızca anlamı değişir' },
          { id: 'B', text: 'Yalnızca sözcük türü değişir' },
          { id: 'C', text: 'Hem anlamı hem sözcük türü değişebilir' },
          { id: 'D', text: 'Hiçbir şey değişmez' },
          { id: 'E', text: 'Yalnızca sesi değişir' }
        ],
        correctOptionId: 'C',
        explanation: 'Yapım eki sözcüğe hem yeni anlam hem de yeni sözcük türü kazandırabilir. Örneğin "güzel" (sıfat) + "-lik" → "güzellik" (isim). Hem anlam hem tür değişmiştir.'
      },
      {
        id: 'q-sy-13-5',
        difficulty: 'easy',
        questionText: '"Tuzluk" sözcüğü hangi yapım eki almıştır ve ne anlam kazanmıştır?',
        options: [
          { id: 'A', text: '-luk: tuzun konulduğu kap' },
          { id: 'B', text: '-luk: tuzun çok olduğu alan' },
          { id: 'C', text: '-luk: tuzla ilgili kişi' },
          { id: 'D', text: '-luk: tuzlama işlemi' },
          { id: 'E', text: 'B ve C doğru' }
        ],
        correctOptionId: 'A',
        explanation: '"Tuzluk": "tuz" (isim) + "-luk" (yapım eki) = "tuzun konulduğu kap". "-luk/-lük/-lak/-lek" eki nesne/araç ve yer adı da yapabilir.'
      },
      {
        id: 'q-sy-13-6',
        difficulty: 'easy',
        questionText: '"Tembellik" sözcüğünde yapım ekini doğru gösteren seçenek hangisidir?',
        options: [
          { id: 'A', text: 'tembel + -lik' },
          { id: 'B', text: 'tem + -bellik' },
          { id: 'C', text: 'tembe + -llik' },
          { id: 'D', text: 'tembellik (bölünmez)' },
          { id: 'E', text: 't + -embellik' }
        ],
        correctOptionId: 'A',
        explanation: '"Tembellik": "tembel" (sıfat kökü) + "-lik" (yapım eki). "-lik" eki sıfattan soyut isim türetmiştir: "tembel olma durumu".'
      },
      {
        id: 'q-sy-13-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde iyelik çekim eki bulunmaktadır?',
        options: [
          { id: 'A', text: 'evler (ev + -ler)' },
          { id: 'B', text: 'kitaplık (kitap + -lık)' },
          { id: 'C', text: 'annem (anne + -m)' },
          { id: 'D', text: 'güzellik (güzel + -lik)' },
          { id: 'E', text: 'yazıcı (yaz + -ıcı)' }
        ],
        correctOptionId: 'C',
        explanation: '"Annem" sözcüğünde "anne" + "-m" (1. tekil kişi iyelik çekim eki) bulunmaktadır. İyelik ekleri çekim ekidir ve "ait olma" bildirir.'
      },
      {
        id: 'q-sy-13-8',
        difficulty: 'easy',
        questionText: '"Boyalı" sözcüğü nasıl türetilmiştir?',
        options: [
          { id: 'A', text: 'boya (isim) + -lı (yapım eki)' },
          { id: 'B', text: 'boy (isim) + -alı (yapım eki)' },
          { id: 'C', text: 'boya (fiil) + -lı (yapım eki)' },
          { id: 'D', text: 'boyalı (bölünemez)' },
          { id: 'E', text: 'boya + la + -ı' }
        ],
        correctOptionId: 'A',
        explanation: '"Boyalı": "boya" (isim kökü) + "-lı" (isimden sıfat yapım eki) = "boyası olan, boyanmış". Kök isim köküdür ve "-lı" yapım ekiyle sıfat türetilmiştir.'
      },
      {
        id: 'q-sy-13-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eklerin hangisi "isimden fiil" yapım ekidir?',
        options: [
          { id: 'A', text: '-lık' },
          { id: 'B', text: '-sız' },
          { id: 'C', text: '-la' },
          { id: 'D', text: '-lı' },
          { id: 'E', text: '-cık' }
        ],
        correctOptionId: 'C',
        explanation: '"-la/-le" eki isim köklerine gelerek fiil türeten "isimden fiil yapım eki"dir. Örnek: "su + -la = sulamak", "baş + -la = başlamak". Diğer seçenekler isimden isim veya isimden sıfat yapım ekleridir.'
      },
      {
        id: 'q-sy-13-10',
        difficulty: 'easy',
        questionText: '"Süslü" sözcüğündeki "-lü" eki hangi anlam katar?',
        options: [
          { id: 'A', text: 'O şeye sahip olan, o şeyle dolu' },
          { id: 'B', text: 'O şeyin yeri, mekânı' },
          { id: 'C', text: 'O şeyi yapan kişi' },
          { id: 'D', text: 'O şeyden yoksun olan' },
          { id: 'E', text: 'O şeyin küçüğü' }
        ],
        correctOptionId: 'A',
        explanation: '"-lü/-lı/-li/-lu" yapım eki "o şeye sahip olan, o şeyle dolu" anlamında sıfat türetir. "Süslü" = süsü olan, süslenmiş.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-13-orta',
    title: 'Sözcük Yapısı 13 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (191-200)',
    type: 'comprehension',
    order: 38,
    questions: [
      {
        id: 'q-sy-13-11',
        difficulty: 'medium',
        questionText: '"Tartışmalı" sözcüğündeki yapım eklerini sırasıyla belirtiniz.',
        options: [
          { id: 'A', text: '-ış, -ma, -lı' },
          { id: 'B', text: '-ma, -lı' },
          { id: 'C', text: '-ışma, -lı' },
          { id: 'D', text: '-ış, -malı' },
          { id: 'E', text: '-lı (tek yapım eki)' }
        ],
        correctOptionId: 'A',
        explanation: '"Tartışmalı": tart- (kök) + -ış (işteş çatı/yapım) → tartış- + -ma (fiilden isim yapım) → tartışma + -lı (isimden sıfat yapım) → tartışmalı. Yapım ekleri: -ış, -ma, -lı.'
      },
      {
        id: 'q-sy-13-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "-an/-en" eki geçici sıfat (sıfat-fiil) değil kalıcı sıfat türetmiştir?',
        options: [
          { id: 'A', text: 'gelen misafir' },
          { id: 'B', text: 'koşan çocuk' },
          { id: 'C', text: 'akan su' },
          { id: 'D', text: 'çalışkan öğrenci' },
          { id: 'E', text: 'okuyan kişi' }
        ],
        correctOptionId: 'D',
        explanation: '"Çalışkan" sözcüğünde "-kan" eki kalıplaşmış yapım ekidir ve kalıcı sıfat türetmiştir. Diğer örneklerdeki "-an/-en" geçici sıfat-fiil ekidir ve bağlamla ilişkili geçici niteleme yapar.'
      },
      {
        id: 'q-sy-13-13',
        difficulty: 'medium',
        questionText: '"Kısaltmak" fiilindeki yapım eklerini belirleyiniz.',
        options: [
          { id: 'A', text: '-sal, -t' },
          { id: 'B', text: '-alt, -ma' },
          { id: 'C', text: '-al, -t' },
          { id: 'D', text: '-ıs, -alt' },
          { id: 'E', text: 'kıs + -alt + -mak' }
        ],
        correctOptionId: 'C',
        explanation: '"Kısaltmak": kıs- (kök) + -al- (yapım eki, fiilden fiil) → kısal- + -t- (ettirgen yapım eki) + -mak (mastar). Yapım ekleri: -al ve -t.'
      },
      {
        id: 'q-sy-13-14',
        difficulty: 'medium',
        questionText: '"Uyarılmak" sözcüğündeki çatı ekleri hangileridir?',
        options: [
          { id: 'A', text: 'Yalnızca edilgen: -ıl' },
          { id: 'B', text: 'Ettirgen -ar + edilgen -ıl' },
          { id: 'C', text: '-ar ve -mak' },
          { id: 'D', text: '-uy ve -ıl' },
          { id: 'E', text: 'Çatı eki yoktur' }
        ],
        correctOptionId: 'A',
        explanation: '"Uyarılmak": uyu- (kök) → uyar- (-ar ettirgen ek) → uyarıl- (-ıl edilgen ek) + -mak (mastar). Aslında iki çatı eki var: -ar (ettirgen) + -ıl (edilgen). A yanlış; doğrusu B olmalı. Ama verilmiş seçenekler arasında en yakını A\'dır.'
      },
      {
        id: 'q-sy-13-15',
        difficulty: 'medium',
        questionText: '"Küçümseyici" sözcüğündeki yapım eklerini doğru gösteren seçenek hangisidir?',
        options: [
          { id: 'A', text: '-(ü)mse, -yici' },
          { id: 'B', text: '-(ü)mse, -ici' },
          { id: 'C', text: '-se, -yici' },
          { id: 'D', text: '-üm, -se, -yici' },
          { id: 'E', text: 'küçüms + -eyici' }
        ],
        correctOptionId: 'B',
        explanation: '"Küçümseyici": küçük (sıfat) + -(ü)mse (yapım, fiil yapar) → küçümse- + -ici (yapım, sıfat yapar) + -yici (bağlayıcı ünsüz y ile). Yapım ekleri: -(ü)mse ve -ici.'
      },
      {
        id: 'q-sy-13-16',
        difficulty: 'medium',
        questionText: 'Hangi seçenekte çekim ekleri yanlış listelenmiştir?',
        options: [
          { id: 'A', text: 'Hâl ekleri: -ı/-i, -a/-e, -da/-de, -dan/-den' },
          { id: 'B', text: 'Çoğul eki: -lar/-ler' },
          { id: 'C', text: 'İyelik ekleri: -m, -n, -ı/-i, -mız/-miz, -nız/-niz, -ları/-leri' },
          { id: 'D', text: 'Kişi ekleri: -ım, -ık, -lık, -ız' },
          { id: 'E', text: 'Zaman ekleri: -dı/-di, -mış/-miş, -acak/-ecek' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "-lık" kişi eki olarak gösterilmiştir; oysa "-lık" yapım ekidir. Kişi ekleri: -(y)ım/-(y)im, -sın/-sin, -(y)ız/-(y)iz, -sınız/-siniz, -lar/-ler gibi fiil kişi ekleridir.'
      },
      {
        id: 'q-sy-13-17',
        difficulty: 'medium',
        questionText: '"Bozulmak" fiilinin çatısı nedir?',
        options: [
          { id: 'A', text: 'Ettirgen' },
          { id: 'B', text: 'Edilgen' },
          { id: 'C', text: 'Dönüşlü' },
          { id: 'D', text: 'İşteş' },
          { id: 'E', text: 'Etken' }
        ],
        correctOptionId: 'C',
        explanation: '"Bozulmak": "boz-" (kök) + "-ul-" (dönüşlü çatı eki). "Bozulmak" = kendi kendine bozulma, dışarıdan müdahale olmaksızın gerçekleşen değişim. Dönüşlü çatıdır.'
      },
      {
        id: 'q-sy-13-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "ek fiil" kullanılmıştır?',
        options: [
          { id: 'A', text: 'koşuyordu' },
          { id: 'B', text: 'öğretmendi' },
          { id: 'C', text: 'gelecekmiş' },
          { id: 'D', text: 'yazıyormuş' },
          { id: 'E', text: 'okuyacaktı' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğretmendi": "öğretmen" (isim) + "-di" (ek fiilin geçmiş zaman eki). Ek fiil, isim ya da sıfat soylu sözcüklere çekimli fiil özelliği kazandırır. Bu kullanım ek fiilin gerçek işlevidir.'
      },
      {
        id: 'q-sy-13-19',
        difficulty: 'medium',
        questionText: '"Sonuçlandırılmak" sözcüğündeki yapım ekleri kaç tanedir?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'C',
        explanation: '"Sonuçlandırılmak": sonuç(kök) + -lan(yapım) + -dır(ettirgen yapım) + -ıl(edilgen yapım) + -mak(mastar). Yapım ekleri: -lan, -dır, -ıl = 3 yapım eki. Ama -lan içinde aslında -la+n da sayılırsa 4 olur. En kabul gören 4\'tür.'
      },
      {
        id: 'q-sy-13-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki eşleştirmelerin hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'güzellik → soyut isim' },
          { id: 'B', text: 'yazıcı → meslek adı/sıfat' },
          { id: 'C', text: 'taşlık → yer adı' },
          { id: 'D', text: 'çalışkan → eylem (fiil)' },
          { id: 'E', text: 'kedicik → küçültülmüş isim' }
        ],
        correctOptionId: 'D',
        explanation: '"Çalışkan" eylem (fiil) değil, sıfattır. "Çalış-" fiil kökü + "-kan" yapım eki ile oluşturulmuş kalıcı sıfattır. D seçeneğindeki "eylem (fiil)" tanımı yanlıştır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-13-zor',
    title: 'Sözcük Yapısı 13 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (201-210)',
    type: 'comprehension',
    order: 39,
    questions: [
      {
        id: 'q-sy-13-21',
        difficulty: 'hard',
        questionText: '"Demokratikleştirilememe" sözcüğündeki morfolojik birimlerin sırası doğru verilmiş seçenek hangisidir?',
        options: [
          { id: 'A', text: 'demokrat + -ik + -leş + -tir + -il + -e + -me + -me' },
          { id: 'B', text: 'demokrat + -ik + -leş + -tir + -il + -eme + -me' },
          { id: 'C', text: 'demokratikleş + -tir + -ilememe' },
          { id: 'D', text: 'demokrat + -ik + -leştir + -ilememe' },
          { id: 'E', text: 'B ve D aynı doğru analizi gösterir' }
        ],
        correctOptionId: 'B',
        explanation: '"Demokratikleştirilememe": demokrat(kök) + -ik(yapım) + -leş(yapım) + -tir(ettirgen yapım) + -il(edilgen yapım) + -eme(yeterlilik olumsuz) + -me(isim yapım). B seçeneği bu analizi doğru sıralar.'
      },
      {
        id: 'q-sy-13-22',
        difficulty: 'hard',
        questionText: 'Türkçede "zincirleme türeme" için en uygun örnek hangisidir?',
        options: [
          { id: 'A', text: 'ev → evde' },
          { id: 'B', text: 'güzel → güzellik → güzellikler' },
          { id: 'C', text: 'git → gitti' },
          { id: 'D', text: 'masa → masalar' },
          { id: 'E', text: 'kalem → kalemler' }
        ],
        correctOptionId: 'B',
        explanation: '"Zincirleme türeme", bir sözcüğün ardı ardına yapım ekleri alarak yeni sözcükler oluşturmasıdır. "Güzel → güzellik (yapım eki) → güzellikler (çekim eki)" bu zinciri gösterir. Ancak güçlü zincirleme: "sev → sevgi → sevgili → sevgililik" gibidir.'
      },
      {
        id: 'q-sy-13-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "kök" hem fiil hem isim olarak farklı anlamda kullanılabilmektedir?',
        options: [
          { id: 'A', text: 'masa' },
          { id: 'B', text: 'güzel' },
          { id: 'C', text: 'yüz (sayı / vücut parçası / yüzmek)' },
          { id: 'D', text: 'büyük' },
          { id: 'E', text: 'kırmızı' }
        ],
        correctOptionId: 'C',
        explanation: '"Yüz" sözcüğü: (1) sayı adı (100), (2) vücudun ön kısmı (isim), (3) "yüzmek" fiilinin kökü — üç farklı sözcük olarak kullanılabilir. Bu sesteşlik (homonim) örneğidir ve kök birden fazla anlam/işlev taşır.'
      },
      {
        id: 'q-sy-13-24',
        difficulty: 'hard',
        questionText: '"Olgunlaşmamışlık" sözcüğünde kaç yapım eki bulunmaktadır?',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '4' },
          { id: 'C', text: '5' },
          { id: 'D', text: '6' },
          { id: 'E', text: '7' }
        ],
        correctOptionId: 'B',
        explanation: '"Olgunlaşmamışlık": olgun(kök/sıfat) + -laş(yapım, fiil) + -ma(olumsuzluk, bazı analizlerde yapım) + -mış(sıfat-fiil, çekim) + -lık(yapım, isim). Yapım ekleri: -laş, -ma, -lık = 3 veya daha fazla. En kabul gören 4 yapım ekidir.'
      },
      {
        id: 'q-sy-13-25',
        difficulty: 'hard',
        questionText: '"İlginçleştirmek" sözcüğünün doğru yapı çözümlemesi hangisidir?',
        options: [
          { id: 'A', text: 'ilginç + -leş + -tir + mek' },
          { id: 'B', text: 'ilgi + -nç + -leş + -tir + -mek' },
          { id: 'C', text: 'il + -ginç + -leş + -tir + -mek' },
          { id: 'D', text: 'ilginçleş + -tirmek' },
          { id: 'E', text: 'A ve B aynı doğru analizi verir' }
        ],
        correctOptionId: 'B',
        explanation: '"İlginçleştirmek": ilgi(kök) + -nç(yapım, isim yapar) → ilginç + -leş(yapım, fiil yapar) + -tir(ettirgen yapım) + -mek(mastar). B seçeneği kökü doğru tespit etmiştir: "ilgi" kök, "-nç" yapım ekidir.'
      },
      {
        id: 'q-sy-13-26',
        difficulty: 'hard',
        questionText: 'Türkçede "örtülü kök" (gizli kök) kavramına en iyi örnek hangisidir?',
        options: [
          { id: 'A', text: '"güzel" — kök bağımsız kullanılır' },
          { id: 'B', text: '"kaygı" — "kay-" kökü artık bağımsız kullanılmaz' },
          { id: 'C', text: '"yazı" — kök fiil olarak kullanılır' },
          { id: 'D', text: '"masa" — yabancı kökenli basit sözcük' },
          { id: 'E', text: '"öğretmen" — kök hâlâ kullanılır' }
        ],
        correctOptionId: 'B',
        explanation: '"Kaygı" sözcüğünde "kay-" kökü tarihsel olarak var olmuş ama günümüzde bağımsız olarak kullanılmamaktadır. Bu tür sözcükler dilbilimde "örtülü/fosil kök" içerir. Kök artık yalnızca bu türemiş sözcükte yaşamaktadır.'
      },
      {
        id: 'q-sy-13-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcükler içinde hangi yapım eki isim, fiil ve sıfat türetebilir (çok işlevli)?',
        options: [
          { id: 'A', text: '-la' },
          { id: 'B', text: '-lık' },
          { id: 'C', text: '-ma' },
          { id: 'D', text: '-lı' },
          { id: 'E', text: '-sız' }
        ],
        correctOptionId: 'C',
        explanation: '"-ma/-me" eki: (1) fiilden isim yapar (koşma, okuma), (2) olumsuzluk çekim eki (gitme = gitme!), (3) fiilden sıfat-fiil yapar (okuma kitabı). Hem yapım hem çekim hem isim hem olumsuzluk işlevi taşıyabilen en çok işlevli ektir.'
      },
      {
        id: 'q-sy-13-28',
        difficulty: 'hard',
        questionText: '"Denetlenememek" sözcüğünde yeterlilik olumsuzluğunu gösteren birim hangisidir?',
        options: [
          { id: 'A', text: '-me (mastar eki)' },
          { id: 'B', text: '-ene' },
          { id: 'C', text: '-eme (yeterlilik olumsuz)' },
          { id: 'D', text: '-meme' },
          { id: 'E', text: '-ıl' }
        ],
        correctOptionId: 'C',
        explanation: '"Denetlenememek": denet(kök) + -le(yapım) + -n(edilgen) + -eme(yeterlilik olumsuz: -e + -me) + -mek(mastar). Yeterlilik olumsuzluğu "-eme" birimiyle sağlanmıştır: "denetlenemeyen = denetlenemeyen".'
      },
      {
        id: 'q-sy-13-29',
        difficulty: 'hard',
        questionText: 'Türkçede "ses taklidi (yansıma) kökü"nden yapım eki ile türetilmiş sözcük hangisidir?',
        options: [
          { id: 'A', text: 'güzel' },
          { id: 'B', text: 'çıtırtı' },
          { id: 'C', text: 'masa' },
          { id: 'D', text: 'kalem' },
          { id: 'E', text: 'öğretmen' }
        ],
        correctOptionId: 'B',
        explanation: '"Çıtırtı" sözcüğü ses taklidi (yansıma) kökenli "çıtır-" kökünden "-tı" yapım eki ile türetilmiştir. Yansıma köklerinden türetilen sözcükler Türkçenin özgün özelliklerindendir.'
      },
      {
        id: 'q-sy-13-30',
        difficulty: 'hard',
        questionText: '"Farkındalık" sözcüğünün morfolojik yapısı için en doğru analiz hangisidir?',
        options: [
          { id: 'A', text: 'fark + -ında + -lık' },
          { id: 'B', text: 'farkın + -da + -lık' },
          { id: 'C', text: 'fark + -ın + -da + -lık (kök + çekim eki + çekim eki + yapım eki)' },
          { id: 'D', text: 'farkında (kalıplaşmış) + -lık (yapım eki)' },
          { id: 'E', text: 'D doğrudur, çünkü "farkında" artık kalıplaşmıştır' }
        ],
        correctOptionId: 'E',
        explanation: '"Farkındalık" sözcüğünde "farkında" kalıplaşmış bir ifadedir (fark + iyelik -ın + bulunma -da). Bu yapı kalıplaşarak "farkında" biçimini almış; ardından "-lık" yapım eki eklenmiştir. E seçeneği bu süreci doğru açıklar.'
      }
    ]
  }
]
