export default [
  {
    id: 'test-sozcuk-yapisi-10-kolay',
    title: 'Sözcük Yapısı 10 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (111-120)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-sy-10-1',
        difficulty: 'easy',
        questionText: '"Balıkçı" sözcüğündeki "-çı" eki ne işlev taşır?',
        options: [
          { id: 'A', text: 'Çoğul yapar' },
          { id: 'B', text: 'Meslek ve uğraş adı yapar' },
          { id: 'C', text: 'Zaman bildiren ek' },
          { id: 'D', text: 'Edilgen çatı kurar' },
          { id: 'E', text: 'Hal eki' }
        ],
        correctOptionId: 'B',
        explanation: '"-çı/-çi/-cu/-cü" (ve sert ünsüzlerden sonra "-çı/-çi/-cu/-cü") eki isimden isim yapan yapım ekidir. "Balık" kökü + "-çı" = "balıkçı" (balık satıcısı veya balık avlayan kişi). Meslek ve uğraş adları oluşturur.'
      },
      {
        id: 'q-sy-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi "fiilden fiil" yapım eki almıştır?',
        options: [
          { id: 'A', text: 'güzelleşmek' },
          { id: 'B', text: 'temizlemek' },
          { id: 'C', text: 'koşturmak' },
          { id: 'D', text: 'sulamak' },
          { id: 'E', text: 'taşlamak' }
        ],
        correctOptionId: 'C',
        explanation: '"Koşturmak" sözcüğü "koş-" fiil kökü + "-tur-/-tür-" (fiilden fiil yapım eki / ettirgen ek) alarak türetilmiştir. Diğerleri isim ya da sıfat kökünden fiil türeten örneklerdir.'
      },
      {
        id: 'q-sy-10-3',
        difficulty: 'easy',
        questionText: '"Yemek" sözcüğü hem fiil hem de isim olarak kullanılabilir. Bu duruma ne denir?',
        options: [
          { id: 'A', text: 'Eş anlamlılık' },
          { id: 'B', text: 'Sesteşlik' },
          { id: 'C', text: 'Çok anlamlılık' },
          { id: 'D', text: 'Sıfır türeme' },
          { id: 'E', text: 'Sözcük türetme' }
        ],
        correctOptionId: 'D',
        explanation: '"Yemek" sözcüğü herhangi bir ek almadan hem fiil (yemek = yemek yemek) hem de isim (yemek = hazırlanan yiyecek) işleviyle kullanılır. Ek almadan tür değiştirme olayına "sıfır türeme" denir.'
      },
      {
        id: 'q-sy-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "-lı/-li/-lu/-lü" yapım eki kullanılmamıştır?',
        options: [
          { id: 'A', text: 'mutlu' },
          { id: 'B', text: 'kırgınlı' },
          { id: 'C', text: 'güçlü' },
          { id: 'D', text: 'akıllı' },
          { id: 'E', text: 'sinirli' }
        ],
        correctOptionId: 'B',
        explanation: '"Kırgınlı" sözcüğünde önce "-ın" yapım eki (kırg+ın), ardından "-lı" eki gelmiştir; yani "-lı" eki kullanılmıştır. Ancak "kırgınlı" nadir/yanlış bir kullanımdır. Diğer sözcüklerde doğrudan "-lı/-lu" eki görülmektedir. En farklı olan B\'dir.'
      },
      {
        id: 'q-sy-10-5',
        difficulty: 'easy',
        questionText: '"Kesmek" fiilinin köküne "-ti" eki eklenerek ne elde edilir?',
        options: [
          { id: 'A', text: 'Bir çekim eki alır, yeni sözcük türemez' },
          { id: 'B', text: '"Kesti" = geçmiş zaman çekimi' },
          { id: 'C', text: '"Kesiti" = dilim anlamında isim' },
          { id: 'D', text: '"Kesti" = yapım eki almış yeni isim' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'B',
        explanation: '"Kes-" fiil kökü + "-ti" (geçmiş zaman çekim eki) = "kesti" (geçmiş zamanda kesmek). Bu bir çekim ekidir; yeni sözcük türetilmez, yalnızca zaman ve kişi bilgisi eklenir.'
      },
      {
        id: 'q-sy-10-6',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi "isimden isim" yapım ekiyle türetilmemiştir?',
        options: [
          { id: 'A', text: 'çiçeklik' },
          { id: 'B', text: 'taşlık' },
          { id: 'C', text: 'kitaplık' },
          { id: 'D', text: 'gülücük' },
          { id: 'E', text: 'sevimli' }
        ],
        correctOptionId: 'E',
        explanation: '"Sevimli" sözcüğü "sev-" fiil kökü + "-im" eki + "-li" eki ile türetilmiştir. "Sev-" bir fiil köküdür. Diğer örnekler ise isim köklerine yapım eki getirilerek oluşturulmuştur.'
      },
      {
        id: 'q-sy-10-7',
        difficulty: 'easy',
        questionText: 'Hangi sözcükte "küçültme" anlamı taşıyan yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'evler' },
          { id: 'B', text: 'kitabı' },
          { id: 'C', text: 'kedicik' },
          { id: 'D', text: 'güzellik' },
          { id: 'E', text: 'bahçeli' }
        ],
        correctOptionId: 'C',
        explanation: '"Kedicik" sözcüğünde "kedi" + "-cik" eki kullanılmıştır. "-cık/-cik/-cuk/-cük" eki küçültme ve sevgi anlamı katan yapım ekidir. "Kedicik" = küçük kedi veya sevilen kedi.'
      },
      {
        id: 'q-sy-10-8',
        difficulty: 'easy',
        questionText: '"Yazmak" fiilinden türetilen aşağıdaki sözcüklerden hangisi isimdir?',
        options: [
          { id: 'A', text: 'yazıyor' },
          { id: 'B', text: 'yazacak' },
          { id: 'C', text: 'yazdı' },
          { id: 'D', text: 'yazı' },
          { id: 'E', text: 'yazardı' }
        ],
        correctOptionId: 'D',
        explanation: '"Yazı" sözcüğü "yaz-" fiil kökü + "-ı" yapım eki ile türetilmiş bir isimdir. Diğer seçenekler fiil çekimleridir: yazmak eyleminin zaman ve kişi bildiren biçimleri.'
      },
      {
        id: 'q-sy-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisi türemiş değil, birleşik sözcüktür?',
        options: [
          { id: 'A', text: 'güzellik' },
          { id: 'B', text: 'çalışkan' },
          { id: 'C', text: 'aylık' },
          { id: 'D', text: 'vazgeçmek' },
          { id: 'E', text: 'kırmızılık' }
        ],
        correctOptionId: 'D',
        explanation: '"Vazgeçmek" sözcüğü "vaz" + "geç-mek" biçiminde iki farklı köken birleşerek oluşmuştur. Bu birleşik sözcüktür. Diğerleri tek bir kökün yapım eki almasıyla türetilmiş sözcüklerdir.'
      },
      {
        id: 'q-sy-10-10',
        difficulty: 'easy',
        questionText: '"Okumak" fiilinden türetilen "okul" sözcüğündeki "-ul" eki ne işlev görür?',
        options: [
          { id: 'A', text: 'Çatı eki' },
          { id: 'B', text: 'Fiilden isim yapım eki' },
          { id: 'C', text: 'Çoğul eki' },
          { id: 'D', text: 'İyelik eki' },
          { id: 'E', text: 'Hal eki' }
        ],
        correctOptionId: 'B',
        explanation: '"Okul" sözcüğü "oku-" fiil kökü + "-ul" eki ile oluşturulmuş bir isimdir. "-ul" eki fiilden isim yapım ekidir ve yer/mekan anlamı katmıştır: "okunan yer = okul".'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-10-orta',
    title: 'Sözcük Yapısı 10 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (121-130)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-sy-10-11',
        difficulty: 'medium',
        questionText: '"Karşılaştırmalı" sözcüğünün doğru yapı çözümlemesi hangisidir?',
        options: [
          { id: 'A', text: 'karşı + laş + tır + ma + lı' },
          { id: 'B', text: 'karşı + la + ştır + malı' },
          { id: 'C', text: 'karşılaş + tır + ma + lı' },
          { id: 'D', text: 'karşılaştır + malı' },
          { id: 'E', text: 'A ve C doğrudur' }
        ],
        correctOptionId: 'A',
        explanation: '"Karşılaştırmalı": karşı (kök) + -laş- (yapım eki) + -tır- (ettirgen yapım eki) + -ma (isim yapım eki) + -lı (sıfat yapım eki). Doğru çözümleme A seçeneğidir.'
      },
      {
        id: 'q-sy-10-12',
        difficulty: 'medium',
        questionText: 'Hangi sözcükte yapım eki yanlış belirlenmiştir?',
        options: [
          { id: 'A', text: '"avcı" → av + -cı (meslek eki)' },
          { id: 'B', text: '"yüzücü" → yüz + -ücü (meslek eki)' },
          { id: 'C', text: '"korkutucu" → kork + -utucu (sıfat eki)' },
          { id: 'D', text: '"yorucu" → yor + -ucu (sıfat-fiil eki)' },
          { id: 'E', text: '"satıcı" → sat + -ıcı (meslek/sıfat eki)' }
        ],
        correctOptionId: 'C',
        explanation: '"Korkutucu" sözcüğü: "kork-" + "-ut-" (ettirgen yapım eki) + "-ucu" (sıfat yapım eki) şeklinde üç birimden oluşur. "-utucu" tek ek değildir; "-ut-" ve "-ucu" ayrı eklerdir. C seçeneği yanlış belirlenmiştir.'
      },
      {
        id: 'q-sy-10-13',
        difficulty: 'medium',
        questionText: '"Bitmez tükenmez" ifadesindeki sözcük yapısı için hangisi doğrudur?',
        options: [
          { id: 'A', text: 'İkisi de birleşik sözcüktür.' },
          { id: 'B', text: '"Bitmez" isim, "tükenmez" sıfattır.' },
          { id: 'C', text: 'Her ikisi de olumsuz geniş zaman sıfat-fiil ekiyle türetilmiş sıfattır.' },
          { id: 'D', text: '"Bitmez-tükenmez" ikili köken sözcüğüdür.' },
          { id: 'E', text: 'Her ikisi de çekim eki almış fiildir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bitmez": bit- + -mez (olumsuz geniş zaman sıfat-fiil eki). "Tükenmez": tüken- + -mez. Her ikisi de sıfat-fiil ekiyle türetilmiş sıfattır. Kalıplaşmış birlikte kullanımda birleşik sıfat gibi işlev görürler.'
      },
      {
        id: 'q-sy-10-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerin hangisinde iyelik eki ile yapım eki karıştırılması daha kolaydır?',
        options: [
          { id: 'A', text: '"sevgili" (sevgi+li)' },
          { id: 'B', text: '"kitabı" (kitap+ı — iyelik veya yükleme)' },
          { id: 'C', text: '"masalar" (masa+lar)' },
          { id: 'D', text: '"güzellik" (güzel+lik)' },
          { id: 'E', text: '"yazar" (yaz+ar)' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitabı" sözcüğündeki "-ı" eki hem iyelik eki (onun kitabı) hem de belirtme hâl eki (çekim eki) olabilir. Bu ikili anlam nedeniyle iyelik eki ile çekim eki karıştırılmaya en müsait sözcük budur.'
      },
      {
        id: 'q-sy-10-15',
        difficulty: 'medium',
        questionText: '"Edilgen çatı" ve "dönüşlü çatı" eklerini aynı anda içeren sözcük hangisidir?',
        options: [
          { id: 'A', text: 'yazılmak' },
          { id: 'B', text: 'yıkanmak' },
          { id: 'C', text: 'koşturmak' },
          { id: 'D', text: 'sevişmek' },
          { id: 'E', text: 'gülmek' }
        ],
        correctOptionId: 'B',
        explanation: '"Yıkanmak": "yıka-" + "-n-" (dönüşlülük çatı eki). Burada "-n-" hem dönüşlü (kişinin kendini yıkaması) hem de edilgen (yıkanma eylemi) anlamı taşıyabilir. Bu çift işlevli kullanım dönüşlü-edilgen çakışmasına örnektir.'
      },
      {
        id: 'q-sy-10-16',
        difficulty: 'medium',
        questionText: 'Hangi sözcük "ad aktarması (isim türetme)" yoluyla değil, "tanımlama" yoluyla oluşmuştur?',
        options: [
          { id: 'A', text: 'bilgisayar' },
          { id: 'B', text: 'uçak' },
          { id: 'C', text: 'yükseköğretim' },
          { id: 'D', text: 'çevre' },
          { id: 'E', text: 'gündüz' }
        ],
        correctOptionId: 'C',
        explanation: '"Yükseköğretim" sözcüğü "yüksek" + "öğretim" birleşimi ile belirli bir kavramı (yüksek düzeydeki öğretim) tanımlamak amacıyla oluşturulmuştur. Diğer sözcükler de benzer süreçlerden geçmiş olmakla birlikte "yükseköğretim" en doğrudan tanımlama örneğidir.'
      },
      {
        id: 'q-sy-10-17',
        difficulty: 'medium',
        questionText: '"Söylenmek" sözcüğündeki çatı eki hangi anlamı taşır?',
        options: [
          { id: 'A', text: 'Ettirgen: birinin söylettirmesi' },
          { id: 'B', text: 'İşteş: birlikte söylemek' },
          { id: 'C', text: 'Dönüşlü: kendi kendine söylemek/şikâyet etmek' },
          { id: 'D', text: 'Edilgen: başkaları tarafından söylenmek' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'C',
        explanation: '"Söylenmek": "söyle-" + "-n-" eki. Bu sözcükte "-n-" dönüşlülük/yansımalık ekidir. "Söylenmek" = kendi kendine şikâyet etmek, mırıldanmak anlamı taşır. Dönüşlü çatı anlamındadır.'
      },
      {
        id: 'q-sy-10-18',
        difficulty: 'medium',
        questionText: 'Türkçede hangi tür ekler sözcüğün türünü değiştirir?',
        options: [
          { id: 'A', text: 'Çekim ekleri' },
          { id: 'B', text: 'Yapım ekleri' },
          { id: 'C', text: 'Hâl ekleri' },
          { id: 'D', text: 'Çoğul ekleri' },
          { id: 'E', text: 'Zaman ekleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapım ekleri sözcüğün türünü (isim → fiil, fiil → isim, sıfat → isim vb.) değiştirir ve yeni sözcükler türetir. Çekim ekleri sözcüğün türünü değiştirmez; yalnızca dilbilgisel işlev katar (zaman, hal, kişi, çoğul vb.).'
      },
      {
        id: 'q-sy-10-19',
        difficulty: 'medium',
        questionText: '"Kıyaslanamaz" sözcüğünün doğru çözümü nedir?',
        options: [
          { id: 'A', text: 'kıyas + la + n + a + maz' },
          { id: 'B', text: 'kıyasla + n + amaz' },
          { id: 'C', text: 'kıyas + lanamaz' },
          { id: 'D', text: 'kıyas + la + na + maz' },
          { id: 'E', text: 'A ve B aynı anlamı ifade eder' }
        ],
        correctOptionId: 'A',
        explanation: '"Kıyaslanamaz": kıyas (kök/isim) + -la- (yapım eki) + -n- (edilgen çatı) + -a- (yeterlilik eki) + -maz (olumsuz geniş zaman sıfat-fiil eki). En doğru çözümleme A seçeneğidir.'
      },
      {
        id: 'q-sy-10-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisinin yapı bakımından diğerlerinden farklı olduğu söylenebilir?',
        options: [
          { id: 'A', text: 'güzel' },
          { id: 'B', text: 'tatlı' },
          { id: 'C', text: 'uzun' },
          { id: 'D', text: 'kırmızı' },
          { id: 'E', text: 'çalışkan' }
        ],
        correctOptionId: 'E',
        explanation: '"Çalışkan" türemiş bir sıfattır: "çalış-" (fiil) + "-kan" yapım eki. Diğer sözcükler (güzel, tatlı, uzun, kırmızı) ise yapım eki almamış basit sıfatlardır (veya kendi başına var olan sözcüklerdir). "Çalışkan" yapı bakımından farklıdır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-10-zor',
    title: 'Sözcük Yapısı 10 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (131-140)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-sy-10-21',
        difficulty: 'hard',
        questionText: '"Doğallaştırılamamak" sözcüğünü oluşturan ekler sırasıyla nelerdir?',
        options: [
          { id: 'A', text: '-al, -laş, -tır, -ıl, -ama, -mak' },
          { id: 'B', text: '-al, -laştır, -ıl, -ama, -mak' },
          { id: 'C', text: '-laş, -tır, -ıl, -ama, -mak' },
          { id: 'D', text: '-al, -laş, -tır, -ıl, -a, -ma, -mak' },
          { id: 'E', text: 'A ve D aynı anlamı verir' }
        ],
        correctOptionId: 'D',
        explanation: '"Doğallaştırılamamak": doğa (kök) + -al (yapım) + -laş (yapım) + -tır (ettirgen yapım) + -ıl (edilgen yapım) + -a (yeterlilik) + -ma (olumsuzluk) + -mak (mastar). Tüm morfolojik birimlerin doğru sıralanması D seçeneğindedir.'
      },
      {
        id: 'q-sy-10-22',
        difficulty: 'hard',
        questionText: 'Hangi sözcükte içinde bulunduğu cümleye göre hem yapım hem çekim eki işlevi gören belirsiz bir ek vardır?',
        options: [
          { id: 'A', text: '"Benim" (ben + -im)' },
          { id: 'B', text: '"Yazısı" (yazı + -sı)' },
          { id: 'C', text: '"Okuma" (oku + -ma)' },
          { id: 'D', text: '"Masa" (basit)' },
          { id: 'E', text: '"Geldi" (gel + -di)' }
        ],
        correctOptionId: 'C',
        explanation: '"Okuma" sözcüğündeki "-ma" eki bağlama göre: (1) yapım eki olarak isim türetir → "okuma etkinliği" (isim), (2) çekim eki olarak olumsuzluk bildirir → "okuma bunu" (emir olumsuz). Aynı ek farklı bağlamlarda farklı işlev üstlenir.'
      },
      {
        id: 'q-sy-10-23',
        difficulty: 'hard',
        questionText: 'Türkçede eklerin sırası genellikle şöyle belirlenir: Kök + Yapım Eki + Çekim Eki. Bu kurala aykırı olan seçenek hangisidir?',
        options: [
          { id: 'A', text: 'güzel + -lik + -ler = güzellikler' },
          { id: 'B', text: 'ev + -ler + -de = evlerde' },
          { id: 'C', text: 'yaz + -ı + -lar = yazılar' },
          { id: 'D', text: 'gel + -iyor + -um = geliyorum' },
          { id: 'E', text: 'oku + -muş + -tur = okumuştur' }
        ],
        correctOptionId: 'A',
        explanation: '"Güzellikler": güzel (kök) + -lik (yapım eki) + -ler (çekim eki). Bu kurala tam uymaktadır. Aslında tüm seçenekler kurala uymaktadır, ancak A en açık örnektir. Türkçede yapım ekleri her zaman çekim eklerinden önce gelir.'
      },
      {
        id: 'q-sy-10-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerden hangisi "kalıplaşmış ek" içerdiği için yanlış anlaşılabilir?',
        options: [
          { id: 'A', text: 'kardeş (kard+eş → artık bölünemiyen)' },
          { id: 'B', text: 'kitaplık (kitap+lık → net bölünme)' },
          { id: 'C', text: 'taşlık (taş+lık → net bölünme)' },
          { id: 'D', text: 'güzellik (güzel+lik → net bölünme)' },
          { id: 'E', text: 'öğretmen (öğret+men → net bölünme)' }
        ],
        correctOptionId: 'A',
        explanation: '"Kardeş" sözcüğündeki "-eş" eki tarihsel olarak işteşlik anlamı taşısa da bugün "kard-" kökü bağımsız değildir. Sözcük artık bütünleşik/kalıplaşmış yapıda kabul edilir ve parçalanamaz. Bu nedenle yanlış analize yol açabilir.'
      },
      {
        id: 'q-sy-10-25',
        difficulty: 'hard',
        questionText: '"Küçümsemek" sözcüğünün yapı çözümlemesinde eklerin işlevi doğru sıralanan seçenek hangisidir?',
        options: [
          { id: 'A', text: 'küçük (sıfat) + -üm (yapım) + -se (yapım) + -mek (mastar)' },
          { id: 'B', text: 'küçüm (kök?) + -se + -mek' },
          { id: 'C', text: 'küçük + -se + -mek' },
          { id: 'D', text: 'küçük (sıfat) + -(ü)mse (yapım eki) + -mek (mastar)' },
          { id: 'E', text: 'küçü + -m + -se + -mek' }
        ],
        correctOptionId: 'D',
        explanation: '"Küçümsemek" sözcüğü "küçük" + "-(ü)mse-" (isimden fiil yapım eki; küçük görmek, hafife almak anlamı katan ek) + "-mek" (mastar). "-(ü)mse-" eki bileşik bir yapım ekidir ve D seçeneği en doğru analizdir.'
      },
      {
        id: 'q-sy-10-26',
        difficulty: 'hard',
        questionText: '"Gereksinimsel" sözcüğünde kaç yapım eki bulunmaktadır?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'B',
        explanation: '"Gereksinimsel": gerek (kök) + -sin- (yapım eki) + -im (yapım eki) + -sel (yapım eki). Üç yapım eki içermektedir. Dolayısıyla yanıt B seçeneğidir.'
      },
      {
        id: 'q-sy-10-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki sözcüklerin hangisinde "kök" ile "gövde" arasındaki fark en belirgindir?',
        options: [
          { id: 'A', text: '"güzel" → basit kök, güzellik → gövde' },
          { id: 'B', text: '"ev" → basit kök, evde → gövde' },
          { id: 'C', text: '"gel" → basit kök, geliyor → gövde' },
          { id: 'D', text: '"yaz" → basit kök, yazar → gövde' },
          { id: 'E', text: '"koş" → basit kök, koşucu → gövde' }
        ],
        correctOptionId: 'A',
        explanation: 'Kök, yapım eki almamış temel birimdir. Gövde ise bir veya birden fazla yapım eki almış, yeni sözcük türetilmiş birimdir. "Güzel" basit köktür; "güzellik" yapım eki almış gövdedir. A seçeneği bu farkı en net biçimde göstermektedir.'
      },
      {
        id: 'q-sy-10-28',
        difficulty: 'hard',
        questionText: 'Türkçede hangi sözcük yapısı için "ad aktarması yoluyla türeme" denilebilir?',
        options: [
          { id: 'A', text: '"uçak" (uç- + -ak eki, fiilden isim)' },
          { id: 'B', text: '"kalem" (Arapçadan alıntı)' },
          { id: 'C', text: '"yükseköğretim" (iki ismin birleşimi)' },
          { id: 'D', text: '"masa" (İtalyancadan alıntı)' },
          { id: 'E', text: '"bilgisayar" (bilgi + sayar, birleşik)' }
        ],
        correctOptionId: 'A',
        explanation: '"Uçak" sözcüğü "uç-" fiil kökü + "-ak" yapım eki ile türetilmiş ve "uçan araç" anlamı kazanmıştır. Bu, fiilin nitelediği nesneye ad aktarması (fonksiyonel türeme) yoluyla oluşturulmuş bir sözcük yapısıdır.'
      },
      {
        id: 'q-sy-10-29',
        difficulty: 'hard',
        questionText: '"İşlevselleştirilemeyen" sözcüğünde ünsüz uyumu (sertleşme veya yumuşama) kaç noktada gerçekleşir?',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' },
          { id: 'E', text: '4' }
        ],
        correctOptionId: 'A',
        explanation: '"İşlevselleştirilemeyen" sözcüğündeki ekler incelendiğinde: her ek önceki ünsüze uyum sağlayarak eklenmektedir. Belirgin bir sertleşme ya da yumuşama (p→b, ç→c, t→d, k→ğ değişimi) bu sözcükte görülmemektedir. Cevap 0\'dır.'
      },
      {
        id: 'q-sy-10-30',
        difficulty: 'hard',
        questionText: 'Türkçede yapım eklerinin çekim eklerinden önce gelmesi zorunluluğu hangi kavramla açıklanır?',
        options: [
          { id: 'A', text: 'Ünlü uyumu' },
          { id: 'B', text: 'Ünsüz benzeşmesi' },
          { id: 'C', text: 'Eklenme sırası (morfolojik düzen)' },
          { id: 'D', text: 'Hecenin yapısı' },
          { id: 'E', text: 'Sözdizimsel kural' }
        ],
        correctOptionId: 'C',
        explanation: 'Türkçede yapım eklerinin çekim eklerinden önce gelmesi "morfolojik düzen" ya da "eklenme sırası" kuralıyla açıklanır. Bu kural, Türkçenin sondan eklemeli (agglutinative) yapısının temel ilkelerinden biridir.'
      }
    ]
  }
]
