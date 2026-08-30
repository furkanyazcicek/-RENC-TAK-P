export default [
  {
    id: 'test-sozcuk-yapisi-8-kolay',
    title: 'Sözcük Yapısı 8 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-sy-8-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin kökü isim köküdür?',
        options: [
          { id: 'A', text: 'Çözüm' },
          { id: 'B', text: 'Koşu' },
          { id: 'C', text: 'Gözlük' },
          { id: 'D', text: 'Yüzücü' },
          { id: 'E', text: 'Bilgi' }
        ],
        correctOptionId: 'C',
        explanation: '"Gözlük" kelimesinin kökü olan "göz" kelimesi isimdir. Diğer kelimelerin kökleri (çöz-mek, koş-mak, yüz-mek, bil-mek) fiil köküdür.'
      },
      {
        id: 'q-sy-8-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi yapım eki almamıştır (türemiş değildir)?',
        options: [
          { id: 'A', text: 'Bahçedeki *çiçekçi* dükkanı yeni açıldı.' },
          { id: 'B', text: 'Yeni aldığı *kitaplık* odasına çok yakıştı.' },
          { id: 'C', text: 'Akşam üzeri bütün *sokaklar* boşaldı.' },
          { id: 'D', text: 'Eskiden çok ünlü bir *yazardı*.' },
          { id: 'E', text: 'O, okulun en *saygılı* öğrencisidir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sokaklar" kelimesi sadece çoğul eki (-lar) almıştır ve çoğul eki bir çekim ekidir. Diğer kelimeler yapım eki (-çi, -lık, -ar, -lı) almış türemiş kelimelerdir.'
      },
      {
        id: 'q-sy-8-3',
        difficulty: 'easy',
        questionText: 'Türkçede "-e, -a" eki ismin yönelme (yaklaşma) halidir. Aşağıdaki cümlelerin hangisinde yönelme hali eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni kitabını masanın üzerinde *unuttu*.' },
          { id: 'B', text: 'Arkadaşlarıyla birlikte *sinemaya* gitti.' },
          { id: 'C', text: 'Bugün okuldan çok erken *çıktı*.' },
          { id: 'D', text: 'Dolaptaki elmayı afiyetle *yedi*.' },
          { id: 'E', text: 'Kalemini çantasında *bulamadı*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sinemaya" kelimesindeki "-a" (kaynaştırma harfi y ile -ya) ismin yönelme (yaklaşma) hal ekidir (Nereye gitti? Sinemaya).'
      },
      {
        id: 'q-sy-8-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde iyelik (aitlik) eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu akşam maça ben de *geleceğim*.' },
          { id: 'B', text: 'Eskiden bu sokaklardan çok *geçtim*.' },
          { id: 'C', text: 'Benim *kardeşim* çok tatlıdır.' },
          { id: 'D', text: 'Oraya doğru hemen *koştum*.' },
          { id: 'E', text: 'Herkes çok fazla *çalıştı*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kardeşim" kelimesindeki "-im" eki, kardeşin kime ait olduğunu (benim) gösteren iyelik ekidir. Diğerlerindeki (-im, -m) ekleri fiile gelmiş birinci tekil şahıs (kişi) ekleridir.'
      },
      {
        id: 'q-sy-8-5',
        difficulty: 'easy',
        questionText: 'İki sözcüğün birleşip kaynaşmasıyla oluşan sözcüklere birleşik sözcük denir. Aşağıdakilerden hangisi birleşik sözcüktür?',
        options: [
          { id: 'A', text: 'Balıkçı' },
          { id: 'B', text: 'Sözlük' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Kitaplık' },
          { id: 'E', text: 'Sevinçli' }
        ],
        correctOptionId: 'C',
        explanation: '"Ayakkabı" kelimesi, "ayak" ve "kap" (kabı) kelimelerinin birleşmesiyle oluşmuş birleşik bir sözcüktür.'
      },
      {
        id: 'q-sy-8-6',
        difficulty: 'easy',
        questionText: 'Aralarında hiçbir anlam bağı bulunmayan, yazılışları ve okunuşları aynı olan köklere "sesteş kök" denir. Aşağıdaki altı çizili kelimelerden hangisinin kökü sesteştir?',
        options: [
          { id: 'A', text: 'Yüzündeki *ben* çok belirgindi.' },
          { id: 'B', text: 'Bu yemeğin *tadı* hiç yok.' },
          { id: 'C', text: 'Eski *evlerin* boyası dökülmüş.' },
          { id: 'D', text: 'Kalemini masada *unutmuş*.' },
          { id: 'E', text: 'Gökyüzündeki *yıldızlar* parlıyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Ben" kelimesi hem "vücuttaki leke" (isim) hem de "1. tekil kişi zamiri" anlamlarına gelir ve bu anlamlar arasında bağ yoktur (sesteştir).'
      },
      {
        id: 'q-sy-8-7',
        difficulty: 'easy',
        questionText: 'İsimlere gelerek çoğul anlamı katan "-lar, -ler" eki bazen fiillere gelerek kişi (şahıs) eki olabilir. Aşağıdaki altı çizili sözcüklerden hangisinde "-lar/-ler" çoğul eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bizi burada *bekliyorlar*.' },
          { id: 'B', text: 'Çok hızlı *koştular*.' },
          { id: 'C', text: 'Bütün gece *çalıştılar*.' },
          { id: 'D', text: 'Haberi alınca çok *sevindiler*.' },
          { id: 'E', text: 'Parktaki *ağaçlar* çiçek açtı.' }
        ],
        correctOptionId: 'E',
        explanation: '"Ağaçlar" kelimesinde "-lar" eki isme geldiği için çoğul ekidir. Diğerlerindeki ekler fiillere gelerek eylemi yapanı (onlar) bildiren şahıs ekidir.'
      },
      {
        id: 'q-sy-8-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi sadece çekim eki almıştır (basit yapılıdır)?',
        options: [
          { id: 'A', text: 'Simitçi' },
          { id: 'B', text: 'Kalemlik' },
          { id: 'C', text: 'Evden' },
          { id: 'D', text: 'Sözcük' },
          { id: 'E', text: 'Karanlık' }
        ],
        correctOptionId: 'C',
        explanation: '"Evden" kelimesi "ev" köküne sadece "-den" ayrılma hal ekini (çekim eki) almıştır. Diğer kelimeler yapım eki (-çi, -lik, -cük, -lık) almış türemiş kelimelerdir.'
      },
      {
        id: 'q-sy-8-9',
        difficulty: 'easy',
        questionText: 'İsmin ayrılma (çıkma) hali, bir yerden uzaklaşmayı bildirir. Aşağıdaki altı çizili kelimelerin hangisinde ayrılma hali eki (-den/-dan) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın *okula* gitmeyeceğim.' },
          { id: 'B', text: 'Kitabını *evde* unutmuş.' },
          { id: 'C', text: 'Arabayı *sokaktan* yavaşça çıkardı.' },
          { id: 'D', text: 'O *soruyu* kimse çözemedi.' },
          { id: 'E', text: 'Bugün çok *hasta* görünüyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Sokaktan" kelimesindeki "-tan" (benzeşme ile -dan) eki, ismin ayrılma (çıkma) hal ekidir (Nereden çıkardı? Sokaktan).'
      },
      {
        id: 'q-sy-8-10',
        difficulty: 'easy',
        questionText: 'Türkçede "-lık/-lik" eki isimlere gelerek yeni isimler (yer, araç, soyut isim vb.) türetir. Aşağıdaki kelimelerin hangisinde "-lık/-lik" eki araç/eşya ismi türetmiştir?',
        options: [
          { id: 'A', text: 'İyilik' },
          { id: 'B', text: 'Sessizlik' },
          { id: 'C', text: 'Gözlük' },
          { id: 'D', text: 'Ormanlık' },
          { id: 'E', text: 'Gençlik' }
        ],
        correctOptionId: 'C',
        explanation: '"Gözlük" kelimesinde "-lük" eki, göze takılan bir eşya (araç) ismi türetmiştir. İyilik, sessizlik ve gençlik soyut isim; ormanlık ise yer ismi türetmiştir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-8-orta',
    title: 'Sözcük Yapısı 8 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-sy-8-11',
        difficulty: 'medium',
        questionText: 'Aynı kökten gelen, aralarında anlam ilgisi bulunan ve duruma göre isim veya fiil kökü olabilen köklere "kökteş" (ortak) kök denir. Aşağıdaki kelimelerin hangisinin kökü kökteş köke örnektir?',
        options: [
          { id: 'A', text: 'Yüz' },
          { id: 'B', text: 'Kır' },
          { id: 'C', text: 'Boya' },
          { id: 'D', text: 'Gül' },
          { id: 'E', text: 'Yaz' }
        ],
        correctOptionId: 'C',
        explanation: '"Boya" kelimesi hem duvara sürülen madde (isim) hem de "boyamak" fiili olarak kullanılır. Aralarında anlam ilişkisi olduğu için kökteştir. Diğerleri sesteştir.'
      },
      {
        id: 'q-sy-8-12',
        difficulty: 'medium',
        questionText: 'Köküne birden fazla yapım eki alan sözcüklere "gövdeden türemiş sözcük" denir (Kök + yapım eki + yapım eki). Aşağıdaki altı çizili kelimelerden hangisi gövdeden türemiştir?',
        options: [
          { id: 'A', text: 'O, okulun en iyi *gözlemcisi* seçildi.' },
          { id: 'B', text: 'Yeni açılan *çiçekçi* çok ilgi gördü.' },
          { id: 'C', text: 'Burada çok *bilgin* insanlar yaşar.' },
          { id: 'D', text: 'Havalar ısınınca her taraf *yeşerdi*.' },
          { id: 'E', text: 'Bütün *kitapları* raflara dizdi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözlemcisi" kelimesinin kökü göz (isim). Göz-le (isimden fiil) -> gözle-m (fiilden isim) -> gözlem-ci (isimden isim). Birden fazla yapım eki alarak gövdeden türemiştir.'
      },
      {
        id: 'q-sy-8-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ı/-i/-u/-ü" eki belirtme hal (durum) eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yeni aldığı *arabayı* denemek istiyor.' },
          { id: 'B', text: 'Evin *kapısı* tamamen kırılmış.' },
          { id: 'C', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'D', text: 'Kardeşinin *okulu* yarın tatil edilecekmiş.' },
          { id: 'E', text: 'Annesinin *sözü* onun için çok değerlidir.' }
        ],
        correctOptionId: 'A',
        explanation: '"Arabayı" kelimesindeki "-ı" eki ismin belirtme hali (hal eki) iken, diğer seçeneklerdeki ekler aidiyet bildiren iyelik (tamlanan) ekidir (onun kitabı, evin kapısı vb.).'
      },
      {
        id: 'q-sy-8-14',
        difficulty: 'medium',
        questionText: 'Yapım ekleri eklendiği sözcüğün türünü değiştirebilir (isimden fiil vb.). Aşağıdaki altı çizili kelimelerin hangisinde "isimden fiil yapan" bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu işte çok iyi bir *kazanç* elde etti.' },
          { id: 'B', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'C', text: 'Sınavdan sonra herkes çok *sevindi*.' },
          { id: 'D', text: 'Buradan karşı *yakaya* geçmek zor.' },
          { id: 'E', text: 'Bu konudaki *düşünceleri* çok ilginç.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kötüleşti" kelimesinde isim kökü olan "kötü", "-leş" yapım ekini alarak "kötüleşmek" fiiline dönüşmüştür. Kazanç (fiilden isim), sevin- (fiilden fiil), düşünce (fiilden isim).'
      },
      {
        id: 'q-sy-8-15',
        difficulty: 'medium',
        questionText: 'Fiil (eylem) kök ve gövdelerinden isim türeten eklere fiilden isim yapım eki denir. Aşağıdaki sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Korku' },
          { id: 'B', text: 'Gözlük' },
          { id: 'C', text: 'Yazı' },
          { id: 'D', text: 'Düşünce' },
          { id: 'E', text: 'Sevinç' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözlük" kelimesi isim kökü olan "göz"den isim türeten "-lük" ekiyle oluşmuştur. Korku (korkmak), yazı (yazmak), düşünce (düşünmek), sevinç (sevinmek) ise fiilden isim olmuştur.'
      },
      {
        id: 'q-sy-8-16',
        difficulty: 'medium',
        questionText: 'Hiçbir yapım eki almayan kelimelere basit kelime denir. Aşağıdakilerin hangisinde altı çizili sözcük yapıca basittir?',
        options: [
          { id: 'A', text: 'Evdeki *eşyaları* kutulara dizdi.' },
          { id: 'B', text: 'Ormandaki *yangın* zor söndürüldü.' },
          { id: 'C', text: 'Onunla yeni bir *başlangıç* yaptık.' },
          { id: 'D', text: 'Yüzündeki *gülüş* bizi mutlu etti.' },
          { id: 'E', text: 'Herkesle olan *iletişimi* zayıftı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Eşyaları" sözcüğü sadece çoğul ve belirtme hali (çekim ekleri) almıştır, yapım eki yoktur, bu yüzden basittir. Yangın, başlangıç, gülüş ve iletişim türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-8-17',
        difficulty: 'medium',
        questionText: 'Birleşik kelimeler oluşum şekli bakımından (sıfat tamlaması, isim tamlaması vb.) farklılık gösterebilir. Aşağıdaki birleşik kelimelerin hangisi "sıfat tamlaması" biçiminde **oluşmamıştır**?',
        options: [
          { id: 'A', text: 'Acıgöl' },
          { id: 'B', text: 'Sivrisinek' },
          { id: 'C', text: 'Büyükayı' },
          { id: 'D', text: 'Aslanağzı' },
          { id: 'E', text: 'Kızılırmak' }
        ],
        correctOptionId: 'D',
        explanation: 'Acıgöl (acı göl), sivrisinek (sivri sinek), Büyükayı (büyük ayı), Kızılırmak (kızıl ırmak) kelimeleri sıfat tamlaması şeklinde oluşmuştur. "Aslanağzı" ise belirtisiz isim tamlaması (aslan(ın) ağzı) şeklinde oluşmuştur.'
      },
      {
        id: 'q-sy-8-18',
        difficulty: 'medium',
        questionText: 'Tamlayan (ilgi) eki (-ın/-in), isim tamlamalarında tamlayana gelerek aidiyet, sahiplik bildirir. Aşağıdaki cümlelerin hangisinde ilgi eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya doğru çok *yakın* bir yerde oturuyorlar.' },
          { id: 'B', text: 'Büyük bir toprak *yığını* yolu kapatmıştı.' },
          { id: 'C', text: 'Çocuğun *kalemini* sıranın altında bulduk.' },
          { id: 'D', text: 'Eskiden bu sokaklardan çok *geçtin*.' },
          { id: 'E', text: 'Buraya gelirken çok dikkatli *bakın*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çocuğun kalemi" belirtili isim tamlamasıdır. "Çocuk" kelimesine gelen "-un" eki ilgi (tamlayan) ekidir. Diğer kelimelerdeki ekler yapım eki (yak-ın, yığ-ın) veya kişi ekidir (geçti-n, bak-ın).'
      },
      {
        id: 'q-sy-8-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki kip eki (gelecek zaman eki) olarak **kullanılmamıştır**?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya *gidecek*.' },
          { id: 'B', text: 'Sokaktaki *yakacakları* depoya taşıdılar.' },
          { id: 'C', text: 'Herkes bu sorunun cevabını *öğrenecek*.' },
          { id: 'D', text: 'Bizimle gelmekten vazgeçtiğini *söyleyecek*.' },
          { id: 'E', text: 'Bu konuda bizimle *görüşecek*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yakacakları" kelimesindeki "-acak" eki, "yakmak" fiilinden kalıcı bir isim (yakacak-odun/kömür vb.) türeten yapım ekidir. Diğerlerindeki ekler çekimli fiile gelen gelecek zaman kip ekleridir.'
      },
      {
        id: 'q-sy-8-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapısı bakımından birleşik bir kelime değildir?',
        options: [
          { id: 'A', text: 'Çekyat' },
          { id: 'B', text: 'Gelişim' },
          { id: 'C', text: 'Vazgeçmek' },
          { id: 'D', text: 'Gecekondu' },
          { id: 'E', text: 'Buzdolabı' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelişim" kelimesi "gel-mek" fiilinden türemiş (gel-iş-im) yapıca türemiş bir sözcüktür. Çekyat, vazgeçmek, gecekondu ve buzdolabı kelimeleri en az iki sözcüğün birleşmesiyle oluşmuştur.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-8-zor',
    title: 'Sözcük Yapısı 8 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-sy-8-21',
        difficulty: 'hard',
        questionText: 'Sıfat-fiil ekleri fiilden sıfat veya isim türetirken, kipler sadece eylemin zamanını bildirir. Buna göre aşağıdaki altı çizili kelimelerin hangisinde "-ar/-er" eki yapım eki (sıfat-fiil/kalıcı isim) göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, her sabah düzenli olarak *koşar*.' },
          { id: 'B', text: 'Bütün eşyaları kendi başına kutuya *koyar*.' },
          { id: 'C', text: 'Hafta sonları balık tutmaya *gider*.' },
          { id: 'D', text: 'Elindeki *çalar* saat çok gürültülüydü.' },
          { id: 'E', text: 'Bu zor soruları sadece o *çözer*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çalar saat" tamlamasındaki "çalar" kelimesi "-ar" sıfat-fiil ekini almış ve fiilden sıfat türetmiştir (yapım eki). Diğerlerindeki "-ar/-er" ekleri geniş zaman kipi (çekim eki) olarak kullanılmıştır.'
      },
      {
        id: 'q-sy-8-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde fiilden fiil yapan bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınavı kazanınca hepimiz çok *sevindik*.' },
          { id: 'B', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'C', text: 'Bu yazarın *yazıları* çok okunur.' },
          { id: 'D', text: 'O çok büyük bir *bilgindir*.' },
          { id: 'E', text: 'Ormandaki *yangın* zor söndürüldü.' }
        ],
        correctOptionId: 'A',
        explanation: '"Sevindik" kelimesinin kökü "sev-mek" fiilidir. "-in" yapım ekini alarak "sevin-mek" fiiline dönüşmüştür (fiilden fiil). Kötüleş (isimden fiil), yazı, bilgin, yangın (fiilden isim) örnekleridir.'
      },
      {
        id: 'q-sy-8-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki birleşik fiillerden hangisi "isim + yardımcı fiil (etmek, olmak)" şeklinde kurulmamıştır?',
        options: [
          { id: 'A', text: 'Onu gördüğünde şaşkınlıktan *bakakaldı*.' },
          { id: 'B', text: 'Olayı sonradan *fark etti*.' },
          { id: 'C', text: 'Gelen teklifleri anında *reddetti*.' },
          { id: 'D', text: 'Arkadaşına yardım için *telefon etti*.' },
          { id: 'E', text: 'Sınavı kazandığını hemen *hissetti*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bakakaldı" fiili "bak-mak" ve "kal-mak" fiillerinin kurallı birleşik fiil (sürerlik) yapısıyla birleşmesiyle oluşmuştur. İki fiil birleşmiştir. Diğerleri (fark, ret, telefon, his) isim ve yardımcı eylemden oluşur.'
      },
      {
        id: 'q-sy-8-24',
        difficulty: 'hard',
        questionText: 'Bazen iyelik (aitlik) ve belirtme durumu (-ı/-i) eki aynı kelimede üst üste kullanılabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu kullanım vardır?',
        options: [
          { id: 'A', text: 'Odanın *kapısı* tamamen kırılmış.' },
          { id: 'B', text: 'Kardeşinin *çantasını* sırada unutmuş.' },
          { id: 'C', text: 'Elindeki *kitabı* masaya koydu.' },
          { id: 'D', text: 'Yeni aldığı *kazağı* hemen giydi.' },
          { id: 'E', text: 'Benim *kalemim* çok güzel yazıyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Çantasını" kelimesinde çanta-sı (3. tekil iyelik) - n (kaynaştırma) - ı (belirtme hal eki) vardır. A\'da sadece iyelik, C ve D\'de sadece belirtme, E\'de sadece iyelik vardır.'
      },
      {
        id: 'q-sy-8-25',
        difficulty: 'hard',
        questionText: 'Türkçede kökler genellikle değişikliğe uğramaz ancak bazı ekler kökte ses değişimine (kalınlaşma vb.) neden olabilir. Aşağıdaki kelimelerin hangisinde çekim eki alırken kökte ünlü değişimi görülmüştür?',
        options: [
          { id: 'A', text: 'Bekliyor' },
          { id: 'B', text: 'Niçin' },
          { id: 'C', text: 'Sana' },
          { id: 'D', text: 'Kaybetti' },
          { id: 'E', text: 'Biliyor' }
        ],
        correctOptionId: 'C',
        explanation: '"Sen" zamiri "-e" yönelme hal ekini aldığında kökteki "e" ünlüsü kalınlaşarak "a" olur ve kelime "sana" biçimine dönüşür (kökte ünlü değişimi).'
      },
      {
        id: 'q-sy-8-26',
        difficulty: 'hard',
        questionText: 'İsimden fiil yapan "-l" (veya -al/-el) ekleri bazen kökün sonundaki "k" ünsüzünün düşmesine yol açar (ünsüz düşmesi). Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'B', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'C', text: 'Ağacın yaprakları sonbaharda *sarardı*.' },
          { id: 'D', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'E', text: 'Hastanın yüzü gittikçe *ufaldı*.' }
        ],
        correctOptionId: 'C',
        explanation: 'Alçak (alçaldı), küçük (küçüldü), yüksek (yükseldi) ve ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Sarardı" kelimesinin kökü "sarı"dır ve -ar ekini aldığında ünlü aşınması olur, ünsüz düşmesi yoktur.'
      },
      {
        id: 'q-sy-8-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" ekinin görevi yapım ekidir?',
        options: [
          { id: 'A', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'B', text: 'Bu soruyu dün gece *çözdüm*.' },
          { id: 'C', text: 'Yarın sabah seninle *gelirim*.' },
          { id: 'D', text: 'Son yıllarda enerji *tüketimi* çok arttı.' },
          { id: 'E', text: 'Ben de onu çok *severim*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Tüketimi" kelimesindeki "-im" eki, "tüketmek" fiilinden isim türeten bir yapım ekidir. Diğer seçeneklerdeki (-im, -üm) ekler, fiile gelen 1. tekil şahıs (kişi) çekim ekleridir.'
      },
      {
        id: 'q-sy-8-28',
        difficulty: 'hard',
        questionText: 'Sözcükler yapı bakımından incelenirken yapım eki alıp almadıklarına bakılır. Aşağıdaki kelimelerden hangisi yapı bakımından basit kelimedir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Başlangıç' },
          { id: 'C', text: 'Tebessüm' },
          { id: 'D', text: 'Yaşantı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'C',
        explanation: '"Tebessüm" kelimesi Arapça kökenli olup, Türkçede herhangi bir yapım ekiyle türetilmemiştir (basit). Bilişim (bilmek), başlangıç (baş), yaşantı (yaşamak), düşünce (düşünmek) kelimeleri türemiştir.'
      },
      {
        id: 'q-sy-8-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi isimden isim yapan bir yapım eki almamıştır?',
        options: [
          { id: 'A', text: 'Büyük bir *kitaplık* aldık.' },
          { id: 'B', text: 'Evin en güzel *odasını* ona verdiler.' },
          { id: 'C', text: 'Çok *akıllı* bir çocuktu.' },
          { id: 'D', text: 'Bahçedeki *çiçekçi* dükkanı taşındı.' },
          { id: 'E', text: 'Eskiden o hep *gözlüklü* dolaşırdı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Odasını" kelimesi kök (oda) halinde olup, -sı, -n, -ı çekim eklerini almıştır. Yapım eki almamıştır. (Kitap-lık, akıl-lı, çiçek-çi, göz-lük-lü).'
      },
      {
        id: 'q-sy-8-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler anlamlarını koruma bakımından incelendiğinde üç gruba ayrılır. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını tamamen yitirip yeni bir anlam kazanmıştır?',
        options: [
          { id: 'A', text: 'Buzdolabı' },
          { id: 'B', text: 'Ayakkabı' },
          { id: 'C', text: 'Aslanağzı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Kuşüzümü' }
        ],
        correctOptionId: 'C',
        explanation: '"Aslanağzı" bir çiçek adıdır ve ne aslan ile ne de ağız ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiş ve mecazlaşarak kalıplaşmıştır.'
      }
    ]
  }
];
