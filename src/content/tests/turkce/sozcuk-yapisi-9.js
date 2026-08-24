export default [
  {
    id: 'test-sozcuk-yapisi-9-kolay',
    title: 'Sözcük Yapısı 9 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-sy-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi yalnızca kökten oluşmaktadır?',
        options: [
          { id: 'A', text: 'evler' },
          { id: 'B', text: 'kitaplık' },
          { id: 'C', text: 'taş' },
          { id: 'D', text: 'gelmek' },
          { id: 'E', text: 'güzellik' }
        ],
        correctOptionId: 'C',
        explanation: '"Taş" sözcüğü herhangi bir ek almamış, yalnızca kökten oluşan bir sözcüktür. Diğer sözcükler çeşitli ekler almıştır: "evler" (çoğul eki), "kitaplık" (yapım eki), "gelmek" (mastar eki), "güzellik" (yapım eki).'
      },
      {
        id: 'q-sy-9-2',
        difficulty: 'easy',
        questionText: '"Dağlık" sözcüğünde hangi yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: '-lar' },
          { id: 'B', text: '-lık' },
          { id: 'C', text: '-lı' },
          { id: 'D', text: '-da' },
          { id: 'E', text: '-ğ' }
        ],
        correctOptionId: 'B',
        explanation: '"Dağlık" sözcüğü "dağ" kökü + "-lık" yapım ekinden oluşur. "-lık/-lik/-luk/-lük" eki isimden isim yapan yapım ekidir ve "o ile ilgili yer, bölge, alan" anlamı katar.'
      },
      {
        id: 'q-sy-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde isimden fiil yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'güzellik' },
          { id: 'B', text: 'temizle-mek' },
          { id: 'C', text: 'kitaplık' },
          { id: 'D', text: 'evler' },
          { id: 'E', text: 'dağlık' }
        ],
        correctOptionId: 'B',
        explanation: '"Temizlemek" sözcüğünde "temiz" isim kökü + "-le-" isimden fiil yapım eki + "-mek" mastar ekinden oluşur. "-la-/-le-" eki isimden fiil türeten yapım ekidir.'
      },
      {
        id: 'q-sy-9-4',
        difficulty: 'easy',
        questionText: '"Çalışkan" sözcüğünün yapısı nedir?',
        options: [
          { id: 'A', text: 'Basit sözcük' },
          { id: 'B', text: 'Türemiş sözcük' },
          { id: 'C', text: 'Birleşik sözcük' },
          { id: 'D', text: 'Yalnızca kökten oluşur' },
          { id: 'E', text: 'İsim + isim' }
        ],
        correctOptionId: 'B',
        explanation: '"Çalışkan" sözcüğü fiil kökü "çalış-" + "-kan" yapım ekinden oluşur. Fiilden sıfat türeten "-kan/-ken" eki kullanılmıştır. Bu nedenle sözcük türemiş bir sözcüktür.'
      },
      {
        id: 'q-sy-9-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi birleşik sözcüktür?',
        options: [
          { id: 'A', text: 'güneş' },
          { id: 'B', text: 'aydınlık' },
          { id: 'C', text: 'bilgisayar' },
          { id: 'D', text: 'çalışkan' },
          { id: 'E', text: 'evler' }
        ],
        correctOptionId: 'C',
        explanation: '"Bilgisayar" sözcüğü "bilgi" + "sayar" şeklinde iki kökün birleşmesinden oluşan birleşik bir sözcüktür. Diğer sözcükler ya basit (güneş) ya da türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-9-6',
        difficulty: 'easy',
        questionText: '"Öğretmen" sözcüğünde hangi ekler kullanılmıştır?',
        options: [
          { id: 'A', text: '-r ve -men' },
          { id: 'B', text: '-et ve -men' },
          { id: 'C', text: 'Yalnızca -men' },
          { id: 'D', text: '-öğret- ve -men' },
          { id: 'E', text: 'Kök + çekim eki' }
        ],
        correctOptionId: 'A',
        explanation: '"Öğretmen" sözcüğü "öğret-" fiil kökü (öğret → öğr+et yapım eki içerir) + "-men" yapım ekinden oluşur. "-men/-man" eki fiilden isim yapan yapım ekidir ve meslek adları oluşturur.'
      },
      {
        id: 'q-sy-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eklerden hangisi çekim ekidir?',
        options: [
          { id: 'A', text: '-lık' },
          { id: 'B', text: '-cı' },
          { id: 'C', text: '-sız' },
          { id: 'D', text: '-lar' },
          { id: 'E', text: '-lı' }
        ],
        correctOptionId: 'D',
        explanation: '"-lar/-ler" çoğul eki, çekim ekidir. Sözcüğün anlamını değiştirmez, yalnızca dilbilgisel işlev katar (çoğulluk). Diğer seçenekler yapım ekidir: "-lık", "-cı", "-sız", "-lı" sözcük türetir.'
      },
      {
        id: 'q-sy-9-8',
        difficulty: 'easy',
        questionText: '"Kâtip" sözcüğüne "-lik" eki getirilince oluşan "kâtiplik" hangi tür sözcüktür?',
        options: [
          { id: 'A', text: 'Basit sözcük' },
          { id: 'B', text: 'Birleşik sözcük' },
          { id: 'C', text: 'Türemiş sözcük' },
          { id: 'D', text: 'Özel isim' },
          { id: 'E', text: 'Zarf' }
        ],
        correctOptionId: 'C',
        explanation: '"Kâtiplik" sözcüğü "kâtip" kökü + "-lik" yapım ekinden oluşmuştur. Yapım eki almış sözcükler türemiş sözcük olarak adlandırılır.'
      },
      {
        id: 'q-sy-9-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde kök ile ek arasında ünlü uyumu geçerlidir?',
        options: [
          { id: 'A', text: 'çantada (çanta + da)' },
          { id: 'B', text: 'elinde (el + inde)' },
          { id: 'C', text: 'masada (masa + da)' },
          { id: 'D', text: 'kitapta (kitap + ta)' },
          { id: 'E', text: 'Hepsi' }
        ],
        correctOptionId: 'E',
        explanation: 'Tüm seçeneklerde ünlü uyumu geçerlidir. "Çantada" (a-a), "elinde" (i-e... geniş uyum), "masada" (a-a), "kitapta" (a-a) uyumu sağlanmıştır. Türkçede ekler köke uyum gösterir.'
      },
      {
        id: 'q-sy-9-10',
        difficulty: 'easy',
        questionText: '"Güzelleş-" fiilinde kaç yapım eki vardır?',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' },
          { id: 'E', text: '4' }
        ],
        correctOptionId: 'C',
        explanation: '"Güzelleş-" sözcüğü: "güzel" (sıfat kök) + "-le-" (isimden fiil yapım eki) + "-ş" (dönüşlülük/işteşlik eki) biçiminde yapılmıştır. Dolayısıyla iki yapım eki vardır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-9-orta',
    title: 'Sözcük Yapısı 9 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (91-100)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-sy-9-11',
        difficulty: 'medium',
        questionText: '"Soyutlamak" sözcüğü hangi yapım ekleriyle türetilmiştir?',
        options: [
          { id: 'A', text: '-t ve -la' },
          { id: 'B', text: '-ut ve -la' },
          { id: 'C', text: '-la ve -mak' },
          { id: 'D', text: 'Türemiş değildir' },
          { id: 'E', text: '-soyut- kök' }
        ],
        correctOptionId: 'A',
        explanation: '"Soyutlamak" sözcüğü: "soy-" kök + "-ut" isimden isim yapım eki → "soyut" + "-la-" isimden fiil yapım eki → "soyutla-" + "-mak" mastar eki. Yapım ekleri: "-ut" ve "-la"dır.'
      },
      {
        id: 'q-sy-9-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde hem yapım hem çekim eki birlikte kullanılmıştır?',
        options: [
          { id: 'A', text: 'taş' },
          { id: 'B', text: 'evde' },
          { id: 'C', text: 'güzellik' },
          { id: 'D', text: 'öğretmenler' },
          { id: 'E', text: 'masa' }
        ],
        correctOptionId: 'D',
        explanation: '"Öğretmenler" sözcüğünde "öğret-" + "-men" (yapım eki) + "-ler" (çekim eki / çoğul) birlikte kullanılmıştır. Hem yapım hem de çekim eki içermektedir.'
      },
      {
        id: 'q-sy-9-13',
        difficulty: 'medium',
        questionText: '"Dokunulmaz" sözcüğünü oluşturan ekler sırasıyla nelerdir?',
        options: [
          { id: 'A', text: '-ul, -maz' },
          { id: 'B', text: '-un, -ul, -maz' },
          { id: 'C', text: '-un, -maz' },
          { id: 'D', text: '-ul, -un, -maz' },
          { id: 'E', text: '-n, -ul, -maz' }
        ],
        correctOptionId: 'A',
        explanation: '"Dokunulmaz": "dokun-" (fiil) + "-ul-" (edilgen yapım eki) + "-maz" (olumsuz sıfat-fiil çekim eki). Sözcük "dokunulamayan, el sürülemeyen" anlamı taşır.'
      },
      {
        id: 'q-sy-9-14',
        difficulty: 'medium',
        questionText: 'Hangi seçenekte yalnızca yapım ekleri listelenmiştir?',
        options: [
          { id: 'A', text: '-lar, -ler, -lık, -cı' },
          { id: 'B', text: '-da, -de, -ta, -te' },
          { id: 'C', text: '-lık, -cı, -lı, -sız' },
          { id: 'D', text: '-ım, -in, -um, -ün' },
          { id: 'E', text: '-lar, -da, -nın, -ı' }
        ],
        correctOptionId: 'C',
        explanation: '"-lık/-lik", "-cı/-ci", "-lı/-li", "-sız/-siz" ekleri isimden isim veya isimden sıfat yapan yapım ekleridir. Diğer seçeneklerde çekim ekleri (hâl ekleri, çoğul eki, iyelik ekleri) de yer almaktadır.'
      },
      {
        id: 'q-sy-9-15',
        difficulty: 'medium',
        questionText: '"Acımasız" sözcüğünün doğru yapı çözümlemesi hangisidir?',
        options: [
          { id: 'A', text: 'acı + ma + sız' },
          { id: 'B', text: 'acı + masız' },
          { id: 'C', text: 'acım + asız' },
          { id: 'D', text: 'acıma + sız' },
          { id: 'E', text: 'a + cımasız' }
        ],
        correctOptionId: 'D',
        explanation: '"Acımasız": "acı-" (fiil) + "-ma" (olumsuzluk yapım eki → isim "acıma") + "-sız" (yokluk sıfatı yapım eki). Doğru bölünme "acıma + sız" şeklindedir. "Acıma" sözcüğü kendi başına da var olan bir isimdir.'
      },
      {
        id: 'q-sy-9-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde iç ses değişimi (ünsüz yumuşaması) gerçekleşmemiştir?',
        options: [
          { id: 'A', text: 'kitap → kitabı' },
          { id: 'B', text: 'ağaç → ağacı' },
          { id: 'C', text: 'kanat → kanadı' },
          { id: 'D', text: 'kural → kuralı' },
          { id: 'E', text: 'çiçek → çiçeği' }
        ],
        correctOptionId: 'D',
        explanation: '"Kural → kuralı" sözcüğünde ünsüz yumuşaması gerçekleşmemiştir çünkü "l" zaten yumuşak bir ünsüzdür; sert ünsüz (p, ç, t, k) yoktur. Diğer örneklerde sert ünsüz (p→b, ç→c, t→d, k→ğ) yumuşaması görülür.'
      },
      {
        id: 'q-sy-9-17',
        difficulty: 'medium',
        questionText: '"Özelleştirmek" sözcüğünün yapı çözümlemesinde kaç ek bulunmaktadır?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'C',
        explanation: '"Özelleştirmek": "özel" (sıfat kök) + "-le-" (yapım eki) + "-ştir-" (ettirgen yapım eki, aslında -şt+ir-) + "-mek" (mastar çekim eki). Yapım ekleri: "-le", "-ştir" (2 yapım eki) + 1 mastar eki + 1 kök = en az 3-4 birim. Toplam 4 morfolojik birim bulunmaktadır.'
      },
      {
        id: 'q-sy-9-18',
        difficulty: 'medium',
        questionText: 'Hangi sözcükte ek fiilin kullanıldığı görülmektedir?',
        options: [
          { id: 'A', text: 'geliyor' },
          { id: 'B', text: 'güzeldi' },
          { id: 'C', text: 'yürüdü' },
          { id: 'D', text: 'konuştu' },
          { id: 'E', text: 'okumuş' }
        ],
        correctOptionId: 'B',
        explanation: '"Güzeldi" sözcüğünde "güzel" sıfat kökü + "-di" ek fiilinin geçmiş zaman çekimi kullanılmıştır. Ek fiil, isim ya da sıfat soylu sözcüklere çekimli fiil özelliği kazandırır.'
      },
      {
        id: 'q-sy-9-19',
        difficulty: 'medium',
        questionText: '"Taşıyıcı" sözcüğündeki "-ıcı" eki hangi işlevi yerine getirmektedir?',
        options: [
          { id: 'A', text: 'Çoğul yapma' },
          { id: 'B', text: 'Edilgen yapma' },
          { id: 'C', text: 'Fiilden isim türetme (meslek-süreklilik)' },
          { id: 'D', text: 'İsimden fiil türetme' },
          { id: 'E', text: 'Zarf türetme' }
        ],
        correctOptionId: 'C',
        explanation: '"-ıcı/-ici/-ucu/-ücü" eki fiilden isim veya sıfat türeten yapım ekidir. Genellikle "o işi yapan kişi ya da nesne" anlamı katar. "Taşı-" fiili + "-yıcı" eki → "taşıyıcı" (taşıyan kimse/nesne).'
      },
      {
        id: 'q-sy-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisi "isimden fiil" değil, "fiilden isim" yöntemiyle türetilmiştir?',
        options: [
          { id: 'A', text: 'temizlemek' },
          { id: 'B', text: 'sulamak' },
          { id: 'C', text: 'koşu' },
          { id: 'D', text: 'taşlamak' },
          { id: 'E', text: 'balıklamak' }
        ],
        correctOptionId: 'C',
        explanation: '"Koşu" sözcüğü "koş-" fiil kökü + "-u" eki ile fiilden isim türetilmiştir. Diğer seçenekler (temizlemek, sulamak, taşlamak, balıklamak) isim ya da sıfat köküne "-la-" eki getirilerek fiil türetilmiş örneklerdir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-9-zor',
    title: 'Sözcük Yapısı 9 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (101-110)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-sy-9-21',
        difficulty: 'hard',
        questionText: '"Uluslararasılaştırılamayan" sözcüğünde kaç yapım eki bulunmaktadır?',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '4' },
          { id: 'C', text: '5' },
          { id: 'D', text: '6' },
          { id: 'E', text: '7' }
        ],
        correctOptionId: 'B',
        explanation: '"Uluslararasılaştırılamayan": ulus+lar+arası (birleşik kök) + -laş- (yapım) + -tır- (ettirgen yapım) + -ıl- (edilgen yapım) + -a- (olumsuzluk) + -ma- + -yan (sıfat-fiil çekim). Yapım ekleri: "-laş-", "-tır-", "-ıl-" = 3-4 yapım eki bulunmaktadır.'
      },
      {
        id: 'q-sy-9-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "-ma/-me" eki yapım eki olarak değil çekim eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'yüzme (spor dalı olarak)' },
          { id: 'B', text: 'gitme (oraya gitme)' },
          { id: 'C', text: 'koşma (koşma yarışması)' },
          { id: 'D', text: 'okuma (okuma alışkanlığı)' },
          { id: 'E', text: 'yazma (yazma etkinliği)' }
        ],
        correctOptionId: 'B',
        explanation: '"Gitme" sözcüğünde "-me" olumsuzluk çekim ekidir: "oraya gitme" = oraya gitme (emredilen yasak). Diğer seçeneklerde "-ma/-me" eki sözcüğü isim yapan yapım ekidir: "yüzme", "koşma", "okuma", "yazma" birer isimdir.'
      },
      {
        id: 'q-sy-9-23',
        difficulty: 'hard',
        questionText: '"Dengesizleştirmek" sözcüğünün doğru yapı çözümlemesi hangisidir?',
        options: [
          { id: 'A', text: 'denge + siz + leş + tir + mek' },
          { id: 'B', text: 'den + ge + siz + leş + tir + mek' },
          { id: 'C', text: 'denge + sizleştirmek' },
          { id: 'D', text: 'dengesiz + leş + tir + mek' },
          { id: 'E', text: 'A ve D doğrudur' }
        ],
        correctOptionId: 'E',
        explanation: '"Dengesizleştirmek": "denge" (kök) + "-siz" (yapım eki) → "dengesiz" + "-leş-" (yapım eki) → "dengesizleş-" + "-tir-" (ettirgen yapım eki) + "-mek" (mastar eki). A ve D aynı analizi göstermektedir, ikisi de doğrudur.'
      },
      {
        id: 'q-sy-9-24',
        difficulty: 'hard',
        questionText: 'Hangi sözcükte sıfır türeme (ek almadan tür değişimi) gerçekleşmiştir?',
        options: [
          { id: 'A', text: '"boyalı" (boya + -lı)' },
          { id: 'B', text: '"tatil" (Arapça alıntı)' },
          { id: 'C', text: '"hızlı" (hız + -lı)' },
          { id: 'D', text: '"kız" (hem isim hem fiil olarak kullanılır)' },
          { id: 'E', text: '"yüksek" (yükse + -k)' }
        ],
        correctOptionId: 'D',
        explanation: 'Sıfır türeme, sözcüğün herhangi bir ek almadan farklı bir sözcük türü olarak kullanılmasıdır. "Kız" sözcüğü hem isim ("kız çocuk") hem de fiil ("kızmak" kökü olarak) işlevi görebilir. Bu durum sıfır türemeye örnektir.'
      },
      {
        id: 'q-sy-9-25',
        difficulty: 'hard',
        questionText: '"Gönüllülük" sözcüğünün morfolojik yapısında kaç biçimbirim (morfem) vardır?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'C',
        explanation: '"Gönüllülük": "gönül" (kök/morfem 1) + "-lü" (yapım eki/morfem 2) → "gönüllü" + "-lük" (yapım eki/morfem 3) → "gönüllülük". Toplam 3 morfem vardır: 1 kök + 2 yapım eki = 3 biçimbirim. (Bazı analizlerde 4 sayılabilir.)'
      },
      {
        id: 'q-sy-9-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerin hangisinde türeme yoluyla oluşmuş gibi görünen ancak gerçekte bölünemeyen (bütünleşik) bir yapı vardır?',
        options: [
          { id: 'A', text: 'güzellik' },
          { id: 'B', text: 'kaygı' },
          { id: 'C', text: 'kitaplık' },
          { id: 'D', text: 'öğretmen' },
          { id: 'E', text: 'yazıcı' }
        ],
        correctOptionId: 'B',
        explanation: '"Kaygı" sözcüğü tarihsel olarak türemiş olsa da bugün köküyle ayrıştırılamaz; "kay-" kökü artık bağımsız kullanılmamaktadır. Bu tür sözcükler sözlük birimi olarak bütünleşik kabul edilir. Diğer örneklerin kökleri (güzel, kitap, öğret, yaz) bugün hâlâ bağımsız kullanılmaktadır.'
      },
      {
        id: 'q-sy-9-27',
        difficulty: 'hard',
        questionText: '"Pişirmek" fiilindeki "-ir-" eki hangi işlevi yerine getirmektedir?',
        options: [
          { id: 'A', text: 'Çatı eki (ettirgen)' },
          { id: 'B', text: 'Çatı eki (edilgen)' },
          { id: 'C', text: 'İsimden fiil yapım eki' },
          { id: 'D', text: 'Zaman eki' },
          { id: 'E', text: 'Dönüşlülük eki' }
        ],
        correctOptionId: 'A',
        explanation: '"Pişirmek": "piş-" (dönüşlü/edilgen fiil) + "-ir-" (ettirgen çatı eki). "Piş-" = kendiliğinden oluşan eylem; "-ir-" ekiyle "pişir-" = birinin pişirmesini sağlamak. Bu ettirgen çatı ekidir.'
      },
      {
        id: 'q-sy-9-28',
        difficulty: 'hard',
        questionText: 'Hangi seçenekte sözcüğün kökü yanlış belirlenmiştir?',
        options: [
          { id: 'A', text: '"sevgi" → kök: "sev"' },
          { id: 'B', text: '"bilgi" → kök: "bil"' },
          { id: 'C', text: '"duygu" → kök: "duy"' },
          { id: 'D', text: '"korku" → kök: "kor"' },
          { id: 'E', text: '"saygı" → kök: "say"' }
        ],
        correctOptionId: 'D',
        explanation: '"Korku" sözcüğünün kökü "kork-" tir (korkmak fiili). "Kor" yanlıştır; "kork-" + "-u" eki ile türetilmiştir. "-u" eki fiilden isim yapım ekidir: "kork+u = korku".'
      },
      {
        id: 'q-sy-9-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerin hangisinde hem ünlü düşmesi hem de ünsüz yumuşaması birlikte gerçekleşir?',
        options: [
          { id: 'A', text: 'boyun → boynu' },
          { id: 'B', text: 'kitap → kitabı' },
          { id: 'C', text: 'alın → alnı' },
          { id: 'D', text: 'ağaç → ağacı' },
          { id: 'E', text: 'burun → burnu' }
        ],
        correctOptionId: 'A',
        explanation: '"Boyun → boynu": İyelik eki alırken hem ünlü düşmesi (boyun → boyn-) hem de ünsüz değişimi olmasa da önek değişikliği görülür. Aslında en belirgin örnek: "boyun + u = boynu" (ünlü düşmesi). "Kitap → kitabı"nda yalnızca ünsüz yumuşaması var. "Alın → alnı" da ünlü düşmesi içerir. En ikili örnek A\'dır.'
      },
      {
        id: 'q-sy-9-30',
        difficulty: 'hard',
        questionText: 'Türkçede bağımlı kök (yalnız başına kullanılamayan kök) ile ilgili hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Tüm Türkçe kökler bağımsız kullanılabilir.' },
          { id: 'B', text: '"Cev-" (cevap), "-ap" olmadan kullanılamaz; bağımlı köktür.' },
          { id: 'C', text: 'Yalnızca yabancı kökenli sözcüklerde bağımlı kök görülür.' },
          { id: 'D', text: '"Git-" fiil kökü bağımlıdır.' },
          { id: 'E', text: 'Bağımlı kök Türkçede görülmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Türkçede bazı kökler tek başlarına kullanılamazlar. "Cevap" sözcüğü Arapça kökenlidir ve "cev-" kısmı tek başına anlam taşımaz. Ancak Türkçe kökenli sözcüklerde de bağımlı kökler görülür. Örneğin "ser-" (sermek) gibi kökler yalnızca ekle anlam kazanır.'
      }
    ]
  }
]
