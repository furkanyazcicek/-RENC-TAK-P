export default [
  {
    id: 'test-sozcuk-yapisi-6-kolay',
    title: 'Sözcük Yapısı 6 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-sy-6-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisinin kökü tür bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Okuldaki *kitaplar* kütüphaneye taşındı.' },
          { id: 'B', text: 'Duvarın *boyası* iyice dökülmüş.' },
          { id: 'C', text: 'Dolaptaki soğuk *suyu* bir dikişte içti.' },
          { id: 'D', text: 'Sabah erkenden kalkıp okula *yürüdü*.' },
          { id: 'E', text: 'Bahar gelince *otlar* yeşerdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kitap, boya, su ve ot kelimelerinin kökleri isimdir. "Yürüdü" kelimesinin kökü "yürü-" ise fiil köküdür.'
      },
      {
        id: 'q-sy-6-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir sözcüktür?',
        options: [
          { id: 'A', text: 'Onun *kitapları* oldukça ilginçtir.' },
          { id: 'B', text: 'Sokaktaki *simitçi* bağırmaya başladı.' },
          { id: 'C', text: 'Evdeki *eşyaları* teker teker dışarı çıkardı.' },
          { id: 'D', text: 'Arabasını dün *tamirciye* götürdü. (B ve D iki tane var, düzeltelim: D) Arabasını dün servise *götürdü*).' }
        ],
        revised: true
      },
      {
        id: 'q-sy-6-2-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir sözcüktür?',
        options: [
          { id: 'A', text: 'Onun *kitapları* oldukça ilginçtir.' },
          { id: 'B', text: 'Evdeki *eşyaları* teker teker dışarı çıkardı.' },
          { id: 'C', text: 'Sokaktaki *simitçi* bağırarak uzaklaştı.' },
          { id: 'D', text: 'Arabasını dün servise *bıraktı*.' },
          { id: 'E', text: 'Masadaki *kalemi* bana uzatır mısın?' }
        ],
        correctOptionId: 'C',
        explanation: '"Simitçi" kelimesi isim kökü olan "simit" kelimesine "-çi" yapım eki getirilerek türetilmiştir. Diğer kelimeler sadece çekim ekleri almıştır (araba-sı, eşya-lar-ı, kitap-lar-ı, bırak-tı, kalem-i).'
      },
      {
        id: 'q-sy-6-3',
        difficulty: 'easy',
        questionText: 'İsmin "-i, -e, -de, -den" gibi ekler alarak girdiği biçimlere ismin hal (durum) ekleri denir. Aşağıdaki altı çizili kelimelerin hangisinde bulunma hali eki (-de/-da) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam onu *durakta* bekledim.' },
          { id: 'B', text: 'Yarın sabah erken *evden* çıkacağız.' },
          { id: 'C', text: 'Yeni aldığı *kitabı* okumaya başladı.' },
          { id: 'D', text: 'Hafta sonu *sinemaya* gitmeyi planlıyorlar.' },
          { id: 'E', text: 'Kardeşinin *çantasını* sırada unutmuş.' }
        ],
        correctOptionId: 'A',
        explanation: '"Durakta" kelimesindeki "-ta" (benzeşme ile -da) eki, ismin bulunma hal ekidir (Nerede bekledim? Durakta).'
      },
      {
        id: 'q-sy-6-4',
        difficulty: 'easy',
        questionText: 'İyelik (tamlanan) ekleri, eklendiği ismin kime ya da neye ait olduğunu bildiren çekim ekleridir. Aşağıdaki altı çizili sözcüklerin hangisinde iyelik eki yoktur?',
        options: [
          { id: 'A', text: 'Benim *kalemim* çok güzel yazıyor.' },
          { id: 'B', text: 'Onun *arabası* tamirden yeni çıkmış.' },
          { id: 'C', text: 'Sizin *eviniz* gerçekten çok genişmiş.' },
          { id: 'D', text: 'Bu akşam sinemaya *gideceğim*.' },
          { id: 'E', text: 'Senin *sözlerin* beni her zaman etkiler.' }
        ],
        correctOptionId: 'D',
        explanation: '"Gideceğim" kelimesindeki "-im" eki, fiile gelerek o işi yapan kişiyi bildiren 1. tekil şahıs (kişi) ekidir. İyelik ekleri isim soylu kelimelere gelir.'
      },
      {
        id: 'q-sy-6-5',
        difficulty: 'easy',
        questionText: 'İki ya da daha fazla kelimenin yeni bir kavramı karşılamak üzere kalıplaşıp kaynaşmasıyla oluşan kelimelere "birleşik kelime" denir. Aşağıdakilerden hangisi birleşik bir kelimedir?',
        options: [
          { id: 'A', text: 'Kalemlik' },
          { id: 'B', text: 'Aydınlık' },
          { id: 'C', text: 'Kitapçı' },
          { id: 'D', text: 'Bilgisayar' },
          { id: 'E', text: 'Gözlükçü' }
        ],
        correctOptionId: 'D',
        explanation: '"Bilgisayar" kelimesi, "bilgi" ve "sayar" kelimelerinin birleşmesiyle oluşmuş birleşik bir sözcüktür.'
      },
      {
        id: 'q-sy-6-6',
        difficulty: 'easy',
        questionText: 'Yazılışları ve okunuşları aynı, anlamları tamamen farklı olan köklere "sesteş kök" denir. Aşağıdaki altı çizili kelimelerin hangisinin kökü sesteştir?',
        options: [
          { id: 'A', text: 'Bu sıcak havada biraz soğuk *su* içti.' },
          { id: 'B', text: 'Geniş bir *yol* bizi köye götürdü.' },
          { id: 'C', text: 'Masadaki eski *defter* tamamen dolmuştu.' },
          { id: 'D', text: 'Bahçedeki bütün *ağaçları* ilaçladılar.' },
          { id: 'E', text: 'Yeni *gözlüğü* ona çok yakışmıştı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yol" kelimesi hem "üzerinde yürünen alan" (isim) hem de "yolmak" (fiil) anlamlarına gelir ve bu anlamlar arasında bağ olmadığı için sesteştir.'
      },
      {
        id: 'q-sy-6-7',
        difficulty: 'easy',
        questionText: 'Çoğul eki "-lar, -ler" isimlere gelerek çokluk anlamı verir. Ancak fiillere geldiğinde şahıs eki (onlar) görevini üstlenir. Aşağıdaki altı çizili sözcüklerin hangisinde "-lar/-ler" çoğul eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dışarıdaki *çocuklar* top oynuyor.' },
          { id: 'B', text: 'Soruları çok hızlı *çözdüler*.' },
          { id: 'C', text: 'Bizimle gelmek *istiyorlar*.' },
          { id: 'D', text: 'Oraya gidince bizi de *arayacaklar*.' },
          { id: 'E', text: 'Haberi duyunca hemen *koştular*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çocuklar" kelimesinde "-lar" eki isme geldiği için çoğul ekidir. Diğerlerindeki (-ler, -lar) ekleri fiillere (çöz-, iste-, ara-, koş-) gelerek eylemi kimin yaptığını (3. çoğul kişi) gösterir.'
      },
      {
        id: 'q-sy-6-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yapıca (basit, türemiş, birleşik) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Kitaplık' },
          { id: 'B', text: 'Gözlük' },
          { id: 'C', text: 'Simitçi' },
          { id: 'D', text: 'Karanlık' },
          { id: 'E', text: 'Arabalar' }
        ],
        correctOptionId: 'E',
        explanation: 'Kitaplık, gözlük, simitçi ve karanlık kelimeleri yapım eki almış türemiş kelimelerdir. "Arabalar" kelimesi ise sadece çoğul eki (-lar) almıştır, yapıca basittir.'
      },
      {
        id: 'q-sy-6-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eklerden hangisi eklendiği isme yönelme (nereye, kime) anlamı katan bir hal ekidir?',
        options: [
          { id: 'A', text: '-de / -da' },
          { id: 'B', text: '-den / -dan' },
          { id: 'C', text: '-i / -ı' },
          { id: 'D', text: '-e / -a' },
          { id: 'E', text: '-im / -ım' }
        ],
        correctOptionId: 'D',
        explanation: '"-e/-a" eki ismin yönelme (yaklaşma) hal ekidir (okul-a, ev-e).'
      },
      {
        id: 'q-sy-6-10',
        difficulty: 'easy',
        questionText: 'Sözcüğün anlamını değiştirmeden sadece cümlede diğer kelimelerle bağ kurmasını sağlayan eklere çekim eki denir. Aşağıdakilerden hangisi sadece çekim eki almıştır?',
        options: [
          { id: 'A', text: 'Okulda' },
          { id: 'B', text: 'Yolcu' },
          { id: 'C', text: 'Sözcük' },
          { id: 'D', text: 'Çiçekçi' },
          { id: 'E', text: 'Bilgi' }
        ],
        correctOptionId: 'A',
        explanation: '"Okulda" kelimesi "okul" köküne sadece "-da" bulunma hal ekini (çekim eki) almıştır. Diğer kelimelerde (-cu, -cük, -çi, -gi) yapım ekleri vardır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-6-orta',
    title: 'Sözcük Yapısı 6 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (51-60)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-sy-6-11',
        difficulty: 'medium',
        questionText: 'Yazılışları aynı, anlamları birbiriyle ilişkili olan ve cümleye göre isim veya fiil kökü olabilen köklere "kökteş" (ortak) kök denir. Aşağıdaki kelimelerden hangisinin kökü bu duruma örnektir?',
        options: [
          { id: 'A', text: 'Tat' },
          { id: 'B', text: 'Yüz' },
          { id: 'C', text: 'Gül' },
          { id: 'D', text: 'Kır' },
          { id: 'E', text: 'Yaz' }
        ],
        correctOptionId: 'A',
        explanation: '"Tat" kelimesi hem yiyeceklerin lezzeti olan "tat" (isim) hem de "tatmak" (fiil) olarak kullanılır ve aralarında anlam bağı vardır (kökteştir). Yüz, gül, kır, yaz kelimeleri sesteştir.'
      },
      {
        id: 'q-sy-6-12',
        difficulty: 'medium',
        questionText: 'Köküne birden fazla yapım eki alan sözcüklere "gövdeden türemiş sözcük" denir (Kök + yapım eki + yapım eki). Aşağıdaki kelimelerden hangisi gövdeden türemiştir?',
        options: [
          { id: 'A', text: 'Bilgin' },
          { id: 'B', text: 'Yaşantı' },
          { id: 'C', text: 'Yazı' },
          { id: 'D', text: 'Okur' },
          { id: 'E', text: 'Gözlük' }
        ],
        correctOptionId: 'B',
        explanation: '"Yaşantı" kelimesinin kökü yaş (isim). Yaş-a (isimden fiil) -> yaşa-n (fiilden fiil) -> yaşan-tı (fiilden isim) şeklinde birden fazla yapım eki alarak gövdeden türemiştir. Bil-gin, yaz-ı, oku-r, göz-lük kelimeleri tek yapım eki almıştır (kökten türemiştir).'
      },
      {
        id: 'q-sy-6-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ı/-i/-u/-ü" eki belirtme hal (durum) eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'B', text: 'Evin *kapısı* tamamen kırılmış.' },
          { id: 'C', text: 'Yeni aldığı *arabayı* denemek istiyor.' },
          { id: 'D', text: 'Kardeşinin *okulu* yarın tatil edilecekmiş.' },
          { id: 'E', text: 'Annesinin *sözü* onun için çok değerlidir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arabayı" kelimesindeki "-ı" eki ismin belirtme hali (hal eki) iken, diğer seçeneklerdeki ekler aidiyet bildiren iyelik (tamlanan) ekidir (onun kitabı, evin kapısı vb.).'
      },
      {
        id: 'q-sy-6-14',
        difficulty: 'medium',
        questionText: 'Yapım ekleri kelimenin anlamını değiştirirken bazen türünü de değiştirebilir (isimden fiil vb.). Aşağıdaki altı çizili kelimelerin hangisinde "isimden fiil yapan" bir ek vardır?',
        options: [
          { id: 'A', text: 'Bu işte çok iyi bir *kazanç* elde etti.' },
          { id: 'B', text: 'Sınavdan sonra herkes çok *sevindi*.' },
          { id: 'C', text: 'Buradan karşı *yakaya* geçmek zor.' },
          { id: 'D', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'E', text: 'Bu konudaki *düşünceleri* çok ilginç.' }
        ],
        correctOptionId: 'D',
        explanation: '"Kötüleşti" kelimesinde isim kökü olan "kötü", "-leş" yapım ekini alarak "kötüleşmek" fiiline dönüşmüştür. Kazanç (fiilden isim), sevin- (fiilden fiil), düşünce (fiilden isim).'
      },
      {
        id: 'q-sy-6-15',
        difficulty: 'medium',
        questionText: 'Hiçbir yapım eki almayan ve başka bir kelimeyle birleşmeyen kelimelere basit kelime denir. Aşağıdakilerin hangisinde altı çizili sözcük yapıca basittir?',
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
        id: 'q-sy-6-16',
        difficulty: 'medium',
        questionText: 'Fiil (eylem) kök ve gövdelerinden isim türeten eklere fiilden isim yapım eki denir. Aşağıdaki sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Korku' },
          { id: 'B', text: 'Yazı' },
          { id: 'C', text: 'Düşünce' },
          { id: 'D', text: 'Gözlük' },
          { id: 'E', text: 'Sevinç' }
        ],
        correctOptionId: 'D',
        explanation: '"Gözlük" kelimesi isim kökü olan "göz"den isim türeten "-lük" ekiyle oluşmuştur. Korku (korkmak), yazı (yazmak), düşünce (düşünmek), sevinç (sevinmek) ise fiilden isim olmuştur.'
      },
      {
        id: 'q-sy-6-17',
        difficulty: 'medium',
        questionText: 'Birleşik sözcükler isim tamlaması, sıfat tamlaması, isim+yardımcı eylem vb. yollarla oluşur. Aşağıdaki birleşik kelimelerin hangisi oluşum şekli bakımından (sıfat tamlaması / isim tamlaması) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Büyükayı' },
          { id: 'B', text: 'Sivrisinek' },
          { id: 'C', text: 'Kızılırmak' },
          { id: 'D', text: 'Acıgöl' },
          { id: 'E', text: 'Aslanağzı' }
        ],
        correctOptionId: 'E',
        explanation: 'Büyükayı (büyük ayı), sivrisinek (sivri sinek), Kızılırmak (kızıl ırmak), Acıgöl (acı göl) kelimeleri sıfat tamlaması şeklinde oluşmuştur. "Aslanağzı" (aslanın ağzı) ise belirtisiz isim tamlaması şeklinde oluşmuştur.'
      },
      {
        id: 'q-sy-6-18',
        difficulty: 'medium',
        questionText: 'İsim tamlamalarında tamlayan görevindeki kelimenin aldığı eke ilgi (tamlayan) eki (-ın/-in) denir. Aşağıdaki cümlelerin hangisinde ilgi eki kullanılmıştır?',
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
        id: 'q-sy-6-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki gelecek zaman (kip) eki olarak **kullanılmamıştır**?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya *gidecek*.' },
          { id: 'B', text: 'Herkes bu sorunun cevabını *öğrenecek*.' },
          { id: 'C', text: 'Bizimle gelmekten vazgeçtiğini *söyleyecek*.' },
          { id: 'D', text: 'Dolaptaki *yiyecekleri* masaya taşıdı.' },
          { id: 'E', text: 'Bu konuda bizimle *görüşecek*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yiyecekleri" kelimesindeki "-ecek" eki, "yemek" fiilinden kalıcı bir isim (yiyecek) türeten yapım ekidir. Diğerlerindeki ekler çekimli fiile gelen gelecek zaman kip ekleridir.'
      },
      {
        id: 'q-sy-6-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapısı bakımından birleşik bir kelime değildir?',
        options: [
          { id: 'A', text: 'Gelişim' },
          { id: 'B', text: 'Çekyat' },
          { id: 'C', text: 'Vazgeçmek' },
          { id: 'D', text: 'Buzdolabı' },
          { id: 'E', text: 'Gecekondu' }
        ],
        correctOptionId: 'A',
        explanation: '"Gelişim" kelimesi "gel-mek" fiilinden türemiş (gel-iş-im) yapıca türemiş bir sözcüktür. Çekyat, vazgeçmek, buzdolabı ve gecekondu kelimeleri en az iki sözcüğün birleşmesiyle oluşmuştur.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-6-zor',
    title: 'Sözcük Yapısı 6 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (51-60)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-sy-6-21',
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
        id: 'q-sy-6-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde fiilden fiil yapan bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'B', text: 'Sınavı kazanınca hepimiz çok *sevindik*.' },
          { id: 'C', text: 'Bu yazarın *yazıları* çok okunur.' },
          { id: 'D', text: 'O çok büyük bir *bilgindir*.' },
          { id: 'E', text: 'Ormandaki *yangın* zor söndürüldü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sevindik" kelimesinin kökü "sev-mek" fiilidir. "-in" yapım ekini alarak "sevin-mek" fiiline dönüşmüştür (fiilden fiil). Kötüleş (isimden fiil), yazı, bilgin, yangın (fiilden isim) örnekleridir.'
      },
      {
        id: 'q-sy-6-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki birleşik fiillerden hangisi oluşum yönüyle "isim + yardımcı fiil (etmek, olmak, eylemek, kılmak vb.)" şeklinde kurulmamıştır?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Gelen teklifleri anında *reddetti*.' },
          { id: 'C', text: 'Arkadaşına yardım için *telefon etti*.' },
          { id: 'D', text: 'Onu gördüğünde şaşkınlıktan *bakakaldı*.' },
          { id: 'E', text: 'Sınavı kazandığını hemen *hissetti*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bakakaldı" fiili "bak-mak" ve "kal-mak" fiillerinin kurallı birleşik fiil (sürerlik) yapısıyla birleşmesiyle oluşmuştur. İki fiil birleşmiştir. Diğerleri (fark, ret, telefon, his) isim ve yardımcı eylemden oluşur.'
      },
      {
        id: 'q-sy-6-24',
        difficulty: 'hard',
        questionText: 'Türkçede kökler genellikle değişikliğe uğramaz ancak bazı ekler kökte ses değişimine (kalınlaşma vb.) neden olabilir. Aşağıdaki kelimelerin hangisinde çekim eki alırken kökte ünlü değişimi görülmüştür?',
        options: [
          { id: 'A', text: 'Bekliyor' },
          { id: 'B', text: 'Sana' },
          { id: 'C', text: 'Niçin' },
          { id: 'D', text: 'Kaybetti' },
          { id: 'E', text: 'Biliyor' }
        ],
        correctOptionId: 'B',
        explanation: '"Sen" zamiri "-e" yönelme hal ekini aldığında kökteki "e" ünlüsü kalınlaşarak "a" olur ve kelime "sana" biçimine dönüşür (kökte ünlü değişimi).'
      },
      {
        id: 'q-sy-6-25',
        difficulty: 'hard',
        questionText: 'Bazen iyelik (aitlik) ve belirtme durumu (-ı/-i) eki aynı kelimede üst üste kullanılabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu kullanım vardır?',
        options: [
          { id: 'A', text: 'Kardeşinin *çantasını* sırada unutmuş.' },
          { id: 'B', text: 'Odanın *kapısı* tamamen kırılmış.' },
          { id: 'C', text: 'Elindeki *kitabı* masaya koydu.' },
          { id: 'D', text: 'Yeni aldığı *kazağı* hemen giydi.' },
          { id: 'E', text: 'Benim *kalemim* çok güzel yazıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çantasını" kelimesinde çanta-sı (3. tekil iyelik) - n (kaynaştırma) - ı (belirtme hal eki) vardır. B\'de sadece iyelik, C ve D\'de sadece belirtme, E\'de sadece iyelik vardır.'
      },
      {
        id: 'q-sy-6-26',
        difficulty: 'hard',
        questionText: 'İsimden fiil yapan "-l" (veya -al/-el) ekleri bazen kökün sonundaki "k" ünsüzünün düşmesine yol açar (ünsüz düşmesi). Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'B', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'C', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'D', text: 'Ağacın yaprakları sonbaharda *sarardı*.' },
          { id: 'E', text: 'Hastanın yüzü gittikçe *ufaldı*.' }
        ],
        correctOptionId: 'D',
        explanation: 'Alçak (alçaldı), küçük (küçüldü), yüksek (yükseldi) ve ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Sarardı" kelimesinin kökü "sarı"dır ve -ar ekini aldığında ünlü aşınması olur, ünsüz düşmesi yoktur.'
      },
      {
        id: 'q-sy-6-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" ekinin görevi yapım ekidir?',
        options: [
          { id: 'A', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'B', text: 'Bu soruyu dün gece *çözdüm*.' },
          { id: 'C', text: 'Son yıllarda enerji *tüketimi* çok arttı.' },
          { id: 'D', text: 'Yarın sabah seninle *gelirim*.' },
          { id: 'E', text: 'Ben de onu çok *severim*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Tüketimi" kelimesindeki "-im" eki, "tüketmek" fiilinden isim türeten bir yapım ekidir. Diğer seçeneklerdeki (-im, -üm) ekler, fiile gelen 1. tekil şahıs (kişi) çekim ekleridir.'
      },
      {
        id: 'q-sy-6-28',
        difficulty: 'hard',
        questionText: 'Sözcükler yapı bakımından incelenirken yapım eki alıp almadıklarına bakılır. Aşağıdaki kelimelerden hangisi yapı bakımından basit kelimedir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Tebessüm' },
          { id: 'C', text: 'Başlangıç' },
          { id: 'D', text: 'Yaşantı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'B',
        explanation: '"Tebessüm" kelimesi Arapça kökenli olup, Türkçede herhangi bir yapım ekiyle türetilmemiştir (basit). Bilişim (bilmek), başlangıç (baş), yaşantı (yaşamak), düşünce (düşünmek) kelimeleri türemiştir.'
      },
      {
        id: 'q-sy-6-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi isimden isim yapan bir yapım eki almamıştır?',
        options: [
          { id: 'A', text: 'Evin en güzel *odasını* ona verdiler.' },
          { id: 'B', text: 'Büyük bir *kitaplık* aldık.' },
          { id: 'C', text: 'Çok *akıllı* bir çocuktu.' },
          { id: 'D', text: 'Bahçedeki *çiçekçi* dükkanı taşındı.' },
          { id: 'E', text: 'Eskiden o hep *gözlüklü* dolaşırdı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Odasını" kelimesi kök (oda) halinde olup, -sı, -n, -ı çekim eklerini almıştır. Yapım eki almamıştır. (Kitap-lık, akıl-lı, çiçek-çi, göz-lük-lü).'
      },
      {
        id: 'q-sy-6-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler anlamlarını koruma bakımından incelendiğinde üç gruba ayrılır. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını tamamen yitirip yeni bir anlam kazanmıştır?',
        options: [
          { id: 'A', text: 'Aslanağzı' },
          { id: 'B', text: 'Buzdolabı' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Kuşüzümü' }
        ],
        correctOptionId: 'A',
        explanation: '"Aslanağzı" bir çiçek adıdır ve ne aslan ile ne de ağız ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiş ve mecazlaşarak kalıplaşmıştır.'
      }
    ]
  }
];
