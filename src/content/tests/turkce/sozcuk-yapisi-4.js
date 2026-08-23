export default [
  {
    id: 'test-sozcuk-yapisi-4-kolay',
    title: 'Sözcük Yapısı 4 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-sy-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinin kökü tür bakımından (isim kökü / fiil kökü) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Onunla bütün sorunları tek tek *çözdü*.' },
          { id: 'B', text: 'Masadaki *bardak* aniden yere düştü.' },
          { id: 'C', text: 'Dışarıda hafif bir *rüzgar* esiyordu.' },
          { id: 'D', text: 'Bütün bu *sözler* beni çok etkiledi.' },
          { id: 'E', text: 'Bahçedeki kırmızı *güller* çok güzeldi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bardak, rüzgar, söz ve gül kelimelerinin kökleri isimdir. "Çözdü" kelimesinin kökü olan "çöz-" ise fiil köküdür.'
      },
      {
        id: 'q-sy-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir sözcüktür?',
        options: [
          { id: 'A', text: 'Onu dünkü *toplantıda* göremedim.' },
          { id: 'B', text: 'Sabah erken *kalkıp* işe gitti.' },
          { id: 'C', text: 'Eskiden o çok ünlü bir *yazardı*.' },
          { id: 'D', text: 'Onun *kitapları* oldukça ilginçtir.' },
          { id: 'E', text: 'Masadaki *kalemi* bana uzatır mısın?' }
        ],
        correctOptionId: 'C',
        explanation: '"Yazardı" kelimesinde "yaz-" fiil köküne "-ar" yapım eki (fiilden isim / sıfat-fiil, burada kalıcı isim "yazar") gelmiştir ve kelime türemiştir. (Diğerlerinde çekim ekleri ağırlıklıdır, toplantıda da toplantı türemiştir ama "yazar" daha barizdir. Şıkları daha net yapalım. A) Evden C) Yazar D) Kitaplar E) Kalemi. Doğru cevap C).',
        revised: true
      },
      {
        id: 'q-sy-4-2-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak türemiş bir kelimedir?',
        options: [
          { id: 'A', text: 'Eskiden o çok ünlü bir *yazardı*.' },
          { id: 'B', text: 'Her sabah *evden* erken çıkar.' },
          { id: 'C', text: 'Onun *kitapları* çantasındaydı.' },
          { id: 'D', text: 'Masadaki *kalemi* bana uzattı.' },
          { id: 'E', text: 'Bugün *okula* gitmek istemedi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yazar" kelimesi, "yaz-" fiil kökünden "-ar" yapım ekini alarak kalıcı isim olmuştur ve türemiş bir sözcüktür. Diğerleri sadece çekim eki almıştır.'
      },
      {
        id: 'q-sy-4-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde ayrılma (çıkma) durumu eki (-den, -dan) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Masada' },
          { id: 'B', text: 'Okula' },
          { id: 'C', text: 'Kitabı' },
          { id: 'D', text: 'Evden' },
          { id: 'E', text: 'Arabalar' }
        ],
        correctOptionId: 'D',
        explanation: '"Evden" kelimesindeki "-den" eki ismin ayrılma (çıkma) hal ekidir (nereden? evden).'
      },
      {
        id: 'q-sy-4-4',
        difficulty: 'easy',
        questionText: 'Bir ismin kime ait olduğunu belirten eklere iyelik (aitlik) eki denir. Aşağıdaki altı çizili sözcüklerin hangisinde iyelik eki kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Onun *arabası* tamirden çıkmış.' },
          { id: 'B', text: 'Benim *sözlerim* onu çok etkiledi.' },
          { id: 'C', text: 'Evin *kapısı* tamamen kırılmış.' },
          { id: 'D', text: 'Akşam üzeri onu okulda *bekledim*.' },
          { id: 'E', text: 'Sizin *okulunuz* neredeydi?' }
        ],
        correctOptionId: 'D',
        explanation: '"Bekledim" kelimesindeki "-m" eki, fiile gelen 1. tekil kişi (şahıs) ekidir, iyelik eki değildir. İyelik ekleri isimlere gelir.'
      },
      {
        id: 'q-sy-4-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yapı bakımından birleşik bir kelimedir?',
        options: [
          { id: 'A', text: 'Gözlük' },
          { id: 'B', text: 'Çanakkale' },
          { id: 'C', text: 'Sevgi' },
          { id: 'D', text: 'Bilgili' },
          { id: 'E', text: 'Kalemler' }
        ],
        correctOptionId: 'B',
        explanation: '"Çanakkale" kelimesi, "çanak" ve "kale" kelimelerinin birleşmesiyle oluşmuş birleşik bir kelimedir. Diğerleri basit veya türemiştir.'
      },
      {
        id: 'q-sy-4-6',
        difficulty: 'easy',
        questionText: 'Aralarında hiçbir anlam ilişkisi olmayan ve yazılışları aynı, anlamları farklı olan köklere sesteş kök denir. Aşağıdakilerin hangisinin kökü sesteş kök olma özelliği gösterir?',
        options: [
          { id: 'A', text: 'Yol' },
          { id: 'B', text: 'Tat' },
          { id: 'C', text: 'Göz' },
          { id: 'D', text: 'Boya' },
          { id: 'E', text: 'Kitap' }
        ],
        correctOptionId: 'A',
        explanation: '"Yol" kelimesi hem "yürünen yol" (isim) hem de "yolmak" fiili anlamındadır ve iki anlam arasında bir bağ yoktur (sesteştir). Tat ve boya kökteştir.'
      },
      {
        id: 'q-sy-4-7',
        difficulty: 'easy',
        questionText: 'Çoğul eki (-lar, -ler) isimlere gelerek onların birden fazla olduğunu belirtir. Aşağıdaki altı çizili sözcüklerden hangisi çoğul eki almıştır?',
        options: [
          { id: 'A', text: 'Bahçedeki *çiçekler* çok güzel.' },
          { id: 'B', text: 'Bütün soruları *çözdüler*.' },
          { id: 'C', text: 'Bizimle gelmek *istiyorlar*.' },
          { id: 'D', text: 'Yarın sabah erken *kalkacaklar*.' },
          { id: 'E', text: 'Oraya doğru hemen *koştular*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çiçekler" kelimesindeki "-ler" eki isme geldiği için çokluk ekidir. Diğer seçeneklerdeki "-lar/-ler" ekleri fiile (çöz-, iste-, kalk-, koş-) gelmiş olup şahıs (kişi) ekidir.'
      },
      {
        id: 'q-sy-4-8',
        difficulty: 'easy',
        questionText: 'Köküne veya gövdesine yapım eki almış kelimelere "türemiş kelime" denir. Aşağıdaki altı çizili kelimelerin hangisi türemiş **değildir**?',
        options: [
          { id: 'A', text: 'Eskiden o hep *gözlüklü* dolaşırdı.' },
          { id: 'B', text: 'Evdeki *eşyaları* kutulara dizdi.' },
          { id: 'C', text: 'Karşımızdaki *dağlık* alan tamamen yandı.' },
          { id: 'D', text: 'Sokaktaki *simitçi* bağırmaya başladı.' },
          { id: 'E', text: 'Yeni gelen öğrenci oldukça *saygılı*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Eşyaları" kelimesi sadece çekim ekleri (-lar, -ı) almıştır ve basit yapılıdır. Diğer kelimeler yapım eki almış türemiş kelimelerdir (göz-lük-lü, dağ-lık, simit-çi, say-gı-lı).'
      },
      {
        id: 'q-sy-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eklerden hangisi eklendiği isme bulunma (nerede, kimde olduğunu) anlamı katar?',
        options: [
          { id: 'A', text: '-de / -da' },
          { id: 'B', text: '-e / -a' },
          { id: 'C', text: '-den / -dan' },
          { id: 'D', text: '-i / -ı' },
          { id: 'E', text: '-in / -ın' }
        ],
        correctOptionId: 'A',
        explanation: '"-de/-da" eki ismin bulunma hali ekidir ve "nerede, kimde" sorularına cevap verir.'
      },
      {
        id: 'q-sy-4-10',
        difficulty: 'easy',
        questionText: 'Sözcüklere gelerek onların anlamlarını veya türlerini değiştiren eklere yapım eki denir. Aşağıdakilerden hangisi çekim eki almamıştır?',
        options: [
          { id: 'A', text: 'Kitaplar' },
          { id: 'B', text: 'Arabam' },
          { id: 'C', text: 'Yolculuk' },
          { id: 'D', text: 'Evde' },
          { id: 'E', text: 'Okula' }
        ],
        correctOptionId: 'C',
        explanation: '"Yolculuk" kelimesi "yol" kökünden "-cu" ve "-luk" yapım eklerini almıştır ve çekim eki almamıştır. Diğerleri (-lar çoğul, -m iyelik, -de bulunma, -a yönelme) sadece çekim eki almıştır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-4-orta',
    title: 'Sözcük Yapısı 4 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-sy-4-11',
        difficulty: 'medium',
        questionText: 'Aynı kökten hem isim hem de fiil türetilebilen, aralarında anlam ilişkisi bulunan köklere kökteş kök denir. Aşağıdaki kelimelerden hangisinin kökü kökteş köke örnektir?',
        options: [
          { id: 'A', text: 'Yüz' },
          { id: 'B', text: 'Tat' },
          { id: 'C', text: 'Kır' },
          { id: 'D', text: 'Gül' },
          { id: 'E', text: 'Yaz' }
        ],
        correctOptionId: 'B',
        explanation: '"Tat" kelimesi hem yiyeceklerin lezzeti olan "tat" (isim) hem de "tatmak" (fiil) olarak kullanılır. Aralarında anlam ilişkisi olduğu için kökteştir. Yüz, kır, gül ve yaz sesteştir.'
      },
      {
        id: 'q-sy-4-12',
        difficulty: 'medium',
        questionText: 'Türkçede bazen kelimeler gövdeden türemiş (Kök + yapım eki + yapım eki) olabilir. Aşağıdaki altı çizili kelimelerin hangisinde sözcük gövdeden türemiştir?',
        options: [
          { id: 'A', text: 'O, okulun en iyi *gözlemcisi* seçildi.' },
          { id: 'B', text: 'Bütün *kitapları* raflara dizdi.' },
          { id: 'C', text: 'Yeni açılan *çiçekçi* çok ilgi gördü.' },
          { id: 'D', text: 'Havalar ısınınca her taraf *yeşerdi*.' },
          { id: 'E', text: 'Burada çok *bilgin* insanlar yaşar.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözlemcisi" kelimesinin kökü göz (isim). Göz-le (isimden fiil) -> gözle-m (fiilden isim) -> gözlem-ci (isimden isim). Birden fazla yapım eki alarak gövdeden türemiştir.'
      },
      {
        id: 'q-sy-4-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde yer alan altı çizili sözcüklerin hangisinde "-ı/-i/-u/-ü" eki farklı bir görevdedir?',
        options: [
          { id: 'A', text: 'Kardeşinin *okulu* yarın tatil edilecekmiş.' },
          { id: 'B', text: 'Evin *kapısı* çok eskiydi.' },
          { id: 'C', text: 'Yeni aldığı *arabayı* denemek istiyor.' },
          { id: 'D', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'E', text: 'Annesinin *sözü* onun için çok değerlidir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arabayı" kelimesindeki "-ı" eki ismin belirtme hali (hal eki) iken, diğer seçeneklerdeki ekler aidiyet bildiren iyelik ekidir (onun kitabı, evin kapısı vb.).'
      },
      {
        id: 'q-sy-4-14',
        difficulty: 'medium',
        questionText: 'Yapım ekleri, eklendiği sözcüğün türünü değiştirebilir. Aşağıdaki altı çizili kelimelerin hangisinde isimden fiil yapan bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'B', text: 'Bu işte çok iyi bir *kazanç* elde etti.' },
          { id: 'C', text: 'Sınavdan sonra herkes çok *sevindi*.' },
          { id: 'D', text: 'Buradan karşı *yakaya* geçmek zor.' },
          { id: 'E', text: 'Bu konudaki *düşünceleri* çok ilginç.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kötüleşti" kelimesinde isim olan "kötü" kelimesi "-leş" yapım ekini alarak "kötüleşmek" (fiil) olmuştur. Kazanç (fiilden isim), sevin- (fiilden fiil), düşünce (fiilden isim).'
      },
      {
        id: 'q-sy-4-15',
        difficulty: 'medium',
        questionText: 'Basit kelimeler hiçbir yapım eki almayan sözcüklerdir. Aşağıdakilerin hangisinde altı çizili sözcük yapıca basittir?',
        options: [
          { id: 'A', text: 'Evdeki *eşyaları* kutulara dizdi.' },
          { id: 'B', text: 'Ormandaki *yangın* zor söndürüldü.' },
          { id: 'C', text: 'Onunla yeni bir *başlangıç* yaptık.' },
          { id: 'D', text: 'Yüzündeki *gülüş* bizi mutlu etti.' },
          { id: 'E', text: 'Herkesle olan *iletişimi* zayıftı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Eşyaları" sözcüğü hiçbir yapım eki almadığı için basittir. Başlangıç, yangın, gülüş ve iletişim türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-4-16',
        difficulty: 'medium',
        questionText: 'Fiil (eylem) kök ve gövdelerine gelerek onlardan isim türeten eklere fiilden isim yapım eki denir. Aşağıdaki sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Gözlük' },
          { id: 'B', text: 'Korku' },
          { id: 'C', text: 'Yazı' },
          { id: 'D', text: 'Düşünce' },
          { id: 'E', text: 'Sevinç' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözlük" kelimesi "göz" (isim) kökünden isimden isim yapan "-lük" ekiyle türetilmiştir. Korku (kork-mak), yazı (yaz-mak), düşünce (düşün-mek), sevinç (sevin-mek) fiilden isim olmuştur.'
      },
      {
        id: 'q-sy-4-17',
        difficulty: 'medium',
        questionText: 'Birleşik sözcükler isim tamlaması, sıfat tamlaması, isim-fiil veya iki fiilin birleşmesi gibi farklı yollarla oluşabilir. Aşağıdaki birleşik kelimelerin hangisi "sıfat tamlaması" şeklinde oluşmuştur?',
        options: [
          { id: 'A', text: 'Büyükayı' },
          { id: 'B', text: 'Aslanağzı' },
          { id: 'C', text: 'Suçiçeği' },
          { id: 'D', text: 'Hanımeli' },
          { id: 'E', text: 'Denizaltı' }
        ],
        correctOptionId: 'A',
        explanation: '"Büyükayı" sözcüğünde "büyük" sıfatı ile "ayı" ismi birleşmiş ve sıfat tamlaması yapısında bir birleşik isim oluşturmuştur. Diğerleri isim tamlamasıdır.'
      },
      {
        id: 'q-sy-4-18',
        difficulty: 'medium',
        questionText: 'İlgi eki (tamlayan eki), isim tamlamalarında tamlayana gelerek aidiyet bildirir. Aşağıdaki cümlelerin hangisinde "-ın/-in" eki ilgi eki görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun *kalemini* sıranın altında bulduk.' },
          { id: 'B', text: 'Oraya doğru çok *yakın* bir yerde oturuyorlar.' },
          { id: 'C', text: 'Büyük bir toprak *yığını* yolu kapatmıştı.' },
          { id: 'D', text: 'Eskiden bu sokaklardan çok *geçtin*.' },
          { id: 'E', text: 'Buraya gelirken çok dikkatli *bakın*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çocuğun kalemi" bir belirtili isim tamlamasıdır ve buradaki "-un" (-ın/-in) eki tamlayan (ilgi) ekidir. Yakın (kök), yığın (yapım eki), geçtin (şahıs eki), bakın (şahıs eki).'
      },
      {
        id: 'q-sy-4-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki kip eki (zaman eki) olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Sokaktaki *yakacakları* depoya taşıdılar.' },
          { id: 'B', text: 'Yarın annesiyle memlekete *gidecek*.' },
          { id: 'C', text: 'Herkes bu sorunun cevabını *öğrenecek*.' },
          { id: 'D', text: 'Bizimle gelmekten vazgeçtiğini *söyleyecek*.' },
          { id: 'E', text: 'Bu konuda bizimle *görüşecek*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yakacakları" kelimesindeki "-acak" eki, "yakmak" fiilinden kalıcı bir isim (yakacak-odun/kömür vb.) türeten yapım ekidir. Diğerlerindeki ekler gelecek zaman kip ekleridir.'
      },
      {
        id: 'q-sy-4-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapısı bakımından birleşik bir kelime değildir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Çekyat' },
          { id: 'C', text: 'Kızılırmak' },
          { id: 'D', text: 'Vazgeçmek' },
          { id: 'E', text: 'Gecekondu' }
        ],
        correctOptionId: 'A',
        explanation: '"Bilişim" kelimesi "bil-mek" kökünden türemiş (bil-iş-im) yapıca türemiş bir sözcüktür. Çekyat, Kızılırmak, vazgeçmek ve gecekondu birleşik kelimelerdir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-4-zor',
    title: 'Sözcük Yapısı 4 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-sy-4-21',
        difficulty: 'hard',
        questionText: 'Sıfat-fiil ekleri eklendiği fiili sıfat veya kalıcı isim yaparak türemiş sözcük oluşturur, kipler ise sadece zaman anlamı katar. Buna göre, aşağıdaki altı çizili kelimelerin hangisinde "-ar/-er" eki yapım eki göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Elindeki *çalar* saat çok gürültülüydü.' },
          { id: 'B', text: 'O, her sabah düzenli olarak *koşar*.' },
          { id: 'C', text: 'Bütün eşyaları kendi başına kutuya *koyar*.' },
          { id: 'D', text: 'Hafta sonları balık tutmaya *gider*.' },
          { id: 'E', text: 'Bu zor soruları sadece o *çözer*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çalar saat" tamlamasındaki "çalar" kelimesi "-ar" sıfat-fiil ekini almış ve fiilden sıfat (isim) türetmiştir (yapım eki). Diğerlerindeki "-ar/-er" ekleri geniş zaman kipidir (çekim eki).'
      },
      {
        id: 'q-sy-4-22',
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
        explanation: '"Sevindik" kelimesinin kökü "sev-mek" fiilidir. "Sev-mek" fiili "-in" yapım ekini alarak "sevin-mek" fiiline dönüşmüştür. Bu, fiilden fiil yapan ektir. (Kötüleşti isimden fiil, yazı, bilgin, yangın fiilden isim).'
      },
      {
        id: 'q-sy-4-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki birleşik fiillerden hangisi "isim + yardımcı fiil" şeklinde kurulmamıştır?',
        options: [
          { id: 'A', text: 'Onu gördüğünde şaşkınlıktan *bakakaldı*.' },
          { id: 'B', text: 'Olayı sonradan *fark etti*.' },
          { id: 'C', text: 'Gelen teklifleri *reddetti*.' },
          { id: 'D', text: 'Arkadaşına yardım için *telefon etti*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissetti*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bakakaldı" fiili "bak-mak" ve "kal-mak" fiillerinin kurallı birleşik fiil kuralıyla (sürerlik fiili -ekal) birleşmesiyle oluşmuştur. İki fiil birleşmiştir. Diğerleri (fark, ret, telefon, his + etmek) isim ve yardımcı eylemden oluşur.'
      },
      {
        id: 'q-sy-4-24',
        difficulty: 'hard',
        questionText: 'Bazı ekler eklendiği kelimenin kökünde köklü bir ünlü değişimine sebep olabilir. Aşağıdaki kelimelerin hangisinde çekim eki alırken kökte ünlü değişimi görülmüştür?',
        options: [
          { id: 'A', text: 'Sana' },
          { id: 'B', text: 'Bekliyor' },
          { id: 'C', text: 'Niçin' },
          { id: 'D', text: 'Kaybetti' },
          { id: 'E', text: 'Biliyor' }
        ],
        correctOptionId: 'A',
        explanation: '"Sen" zamiri "-e" yönelme halini aldığında kökteki "e" ünlüsü "a"ya dönüşerek kelime "sana" şeklini almıştır (kökte ünlü değişimi).'
      },
      {
        id: 'q-sy-4-25',
        difficulty: 'hard',
        questionText: 'Bir sözcükte hem iyelik (aitlik) hem de belirtme durumu (-ı/-i) eki arka arkaya kullanılabilir. Aşağıdaki altı çizili kelimelerin hangisinde bu kullanım vardır?',
        options: [
          { id: 'A', text: 'Kardeşinin *çantasını* sırada unutmuş.' },
          { id: 'B', text: 'Odanın *kapısı* tamamen kırılmış.' },
          { id: 'C', text: 'Elindeki *kitabı* masaya koydu.' },
          { id: 'D', text: 'Yeni aldığı *kazağı* hemen giydi.' },
          { id: 'E', text: 'Benim *kalemim* çok güzel yazıyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Çantasını" kelimesinde: çanta-sı (3. tekil iyelik) - n (kaynaştırma) - ı (belirtme hal eki) kullanılmıştır. B\'de sadece iyelik, C ve D\'de sadece belirtme, E\'de sadece iyelik vardır.'
      },
      {
        id: 'q-sy-4-26',
        difficulty: 'hard',
        questionText: 'İsimden fiil yapan "-l" veya "-al/-el" ekleri bazen kökün sonundaki "k" ünsüzünün düşmesine yol açar. Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Ağacın yaprakları sonbaharda *sarardı*.' },
          { id: 'B', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'C', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'D', text: 'Hastanın yüzü gittikçe *ufaldı*.' },
          { id: 'E', text: 'Kadın yaşlandıkça iyice *küçüldü*.' }
        ],
        correctOptionId: 'A',
        explanation: 'Küçük (küçüldü), alçak (alçaldı), yüksek (yükseldi) ve ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Sarardı" kelimesinin kökü "sarı"dır ve -ar ekini aldığında ünlü aşınması/düşmesi olur, ünsüz düşmesi yoktur.'
      },
      {
        id: 'q-sy-4-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" ekinin görevi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Son yıllarda enerji *tüketimi* arttı.' },
          { id: 'B', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'C', text: 'Bu soruyu dün gece *çözdüm*.' },
          { id: 'D', text: 'Yarın sabah seninle *gelirim*.' },
          { id: 'E', text: 'Ben de onu çok *severim*.' }
        ],
        correctOptionId: 'A',
        explanation: '"Tüketimi" kelimesindeki "-im" eki, "tüketmek" fiilinden isim türeten bir yapım ekidir (fiilden isim). Diğer seçeneklerdeki (-im, -üm vb.) ekler, fiile gelen 1. tekil şahıs (kişi) ekidir.'
      },
      {
        id: 'q-sy-4-28',
        difficulty: 'hard',
        questionText: 'Yapım ekinin türü eklendiği kökün yapısını ve kelimenin son türünü belirler. Aşağıdaki kelimelerden hangisi yapı bakımından basit kelimedir?',
        options: [
          { id: 'A', text: 'Tebessüm' },
          { id: 'B', text: 'Bilişim' },
          { id: 'C', text: 'Başlangıç' },
          { id: 'D', text: 'Yaşantı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'A',
        explanation: '"Tebessüm" kelimesi Arapça kökenli olup, Türkçede herhangi bir yapım ekiyle türetilmemiştir (basit). Bilişim (bilmek), başlangıç (baş), yaşantı (yaşamak), düşünce (düşünmek) kelimeleri ise türemiştir.'
      },
      {
        id: 'q-sy-4-29',
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
        id: 'q-sy-4-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler her iki kelimenin de gerçek anlamını koruması, sadece birinin koruması veya ikisinin de yitirmesi şeklinde oluşabilir. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını tamamen yitirmiştir?',
        options: [
          { id: 'A', text: 'Aslanağzı' },
          { id: 'B', text: 'Buzdolabı' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Kuşüzümü' }
        ],
        correctOptionId: 'A',
        explanation: '"Aslanağzı" bir çiçek adıdır ve ne aslan ile ne de ağız ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiş (kalıplaşmış mecaz) ve birleşik kelime oluşmuştur.'
      }
    ]
  }
];
