export default [
  {
    id: 'test-sozcuk-yapisi-3-kolay',
    title: 'Sözcük Yapısı 3 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-sy-3-1',
        difficulty: 'easy',
        questionText: 'Kelimelerin taşıdığı temel anlama kök denir ve kökler isim kökü ile fiil kökü olmak üzere ikiye ayrılır. Buna göre, aşağıdaki altı çizili sözcüklerden hangisinin kökü tür bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Evin her tarafı *su* içindeydi.' },
          { id: 'B', text: 'O, okulun en *gözde* öğrencisidir.' },
          { id: 'C', text: 'Bu yemeğin *tuzu* biraz fazla olmuş.' },
          { id: 'D', text: 'Bahar gelince *otlar* yeşerdi.' },
          { id: 'E', text: 'Her zaman doğruyu *görür*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Su, göz, tuz ve ot kelimelerinin kökleri isimdir (su-mak vb. denilemez). "Görür" kelimesinin kökü olan "gör-" ise fiil köküdür (görmek).'
      },
      {
        id: 'q-sy-3-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapım eki alarak yeni bir kelime olmuştur (türemiştir)?',
        options: [
          { id: 'A', text: 'Sabah erken kalkıp *okula* gitti.' },
          { id: 'B', text: 'Bahçedeki *çiçekçi* dükkanı kapanmış.' },
          { id: 'C', text: 'Masadaki *kalemleri* bana uzattı.' },
          { id: 'D', text: 'Bu sabah evden *erken* çıktı.' },
          { id: 'E', text: 'Onun *çantası* çok ağırdı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Çiçekçi" kelimesi, isim kökü olan "çiçek"ten "-çi" yapım ekini alarak türemiştir (çiçek -> çiçekçi). Diğerlerindeki ekler (yönelme, çoğul, iyelik vb.) çekim ekleridir.'
      },
      {
        id: 'q-sy-3-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerin hangisinde yönelme (yaklaşma) durumu eki (-e, -a) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabı' },
          { id: 'B', text: 'Masada' },
          { id: 'C', text: 'Okula' },
          { id: 'D', text: 'Evden' },
          { id: 'E', text: 'Arabalar' }
        ],
        correctOptionId: 'C',
        explanation: '"Okul" ismine gelen "-a" eki ismin yönelme hal ekidir (nereye? okula).'
      },
      {
        id: 'q-sy-3-4',
        difficulty: 'easy',
        questionText: 'İyelik (aitlik) eki bir ismin kime ait olduğunu gösterir. Aşağıdaki altı çizili sözcüklerin hangisinde iyelik eki kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Benim *kalemim* çok güzel yazıyor.' },
          { id: 'B', text: 'Sizin *eviniz* nerede?' },
          { id: 'C', text: 'Senin *sözlerin* beni derinden etkiledi.' },
          { id: 'D', text: 'Onun *arabası* tamirden yeni çıkmış.' },
          { id: 'E', text: 'Akşam üzeri onu okulda *gördüm*.' }
        ],
        correctOptionId: 'E',
        explanation: '"Gördüm" kelimesindeki "-m" eki, fiile gelen 1. tekil kişi (şahıs) ekidir, iyelik eki değildir. İyelik ekleri isimlere gelir.'
      },
      {
        id: 'q-sy-3-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi yapı bakımından birleşik bir kelimedir?',
        options: [
          { id: 'A', text: 'Kitaplık' },
          { id: 'B', text: 'Aydınlık' },
          { id: 'C', text: 'Kızılırmak' },
          { id: 'D', text: 'Evler' },
          { id: 'E', text: 'Gözlükçü' }
        ],
        correctOptionId: 'C',
        explanation: '"Kızılırmak" kelimesi, "kızıl" ve "ırmak" kelimelerinin birleşmesiyle oluşmuş birleşik bir sözcüktür. (Diğerleri türemiş veya basittir).'
      },
      {
        id: 'q-sy-3-6',
        difficulty: 'easy',
        questionText: 'Birbiriyle hiçbir anlam ilişkisi bulunmayan ve sesteş (eş sesli) olan köklere sesteş kök denir. Aşağıdakilerin hangisinin kökü sesteş bir kelimedir?',
        options: [
          { id: 'A', text: 'Yüz' },
          { id: 'B', text: 'Boya' },
          { id: 'C', text: 'Tat' },
          { id: 'D', text: 'Kitap' },
          { id: 'E', text: 'Göz' }
        ],
        correctOptionId: 'A',
        explanation: '"Yüz" kelimesi hem sayı olan yüz, hem surat olan yüz, hem de yüzmek fiili anlamında kullanılır. Bu anlamlar arasında hiçbir bağ yoktur, bu nedenle sesteştir. (Boya ve tat kökteştir).'
      },
      {
        id: 'q-sy-3-7',
        difficulty: 'easy',
        questionText: 'Çoğul eki (-lar, -ler) isimlere gelerek çokluk anlamı katar. Aşağıdaki altı çizili sözcüklerden hangisi çoğul eki almıştır?',
        options: [
          { id: 'A', text: 'Bütün gece *çalıştılar*.' },
          { id: 'B', text: 'Oraya doğru *koştular*.' },
          { id: 'C', text: 'Kitaptaki *sorular* çok zordu.' },
          { id: 'D', text: 'Bizimle gelmek *istiyorlar*.' },
          { id: 'E', text: 'Herkes çok fazla *uyudular*. (yanlış)' }
        ],
        correctOptionId: 'C',
        explanation: '"Sorular" kelimesindeki "-lar" eki isme geldiği için çokluk ekidir. A, B, D ve E seçeneklerindeki "-lar/-ler" ekleri fiile (çalış-, koş-, iste-) gelmiş olup şahıs (kişi) ekidir.'
      },
      {
        id: 'q-sy-3-8',
        difficulty: 'easy',
        questionText: 'Köküne veya gövdesine yapım eki almış kelimelere "türemiş kelime" denir. Aşağıdaki altı çizili kelimelerin hangisi türemiş **değildir**?',
        options: [
          { id: 'A', text: 'Bahçedeki *çiçekçi* kepenkleri indirdi.' },
          { id: 'B', text: 'Eskiden o hep *gözlüklü* dolaşırdı.' },
          { id: 'C', text: 'Evdeki *eşyaları* dışarı taşıdılar.' },
          { id: 'D', text: 'Karşımızdaki *dağlık* alan tamamen yandı.' },
          { id: 'E', text: 'Yeni gelen öğrenci oldukça *saygılı*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Eşyaları" kelimesi sadece çekim ekleri (-lar, -ı) almıştır ve basit yapılıdır. Diğer kelimeler yapım eki almış türemiş kelimelerdir (çiçek-çi, göz-lük-lü, dağ-lık, say-gı-lı).'
      },
      {
        id: 'q-sy-3-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki eklerden hangisi eklendiği isme bulunma (nerede olduğunu) anlamı katar?',
        options: [
          { id: 'A', text: '-e / -a' },
          { id: 'B', text: '-de / -da' },
          { id: 'C', text: '-den / -dan' },
          { id: 'D', text: '-i / -ı' },
          { id: 'E', text: '-in / -ın' }
        ],
        correctOptionId: 'B',
        explanation: '"-de/-da" eki ismin bulunma hali ekidir ve "nerede, kimde" sorularına cevap verir.'
      },
      {
        id: 'q-sy-3-10',
        difficulty: 'easy',
        questionText: 'Sözcüklere gelerek yeni sözcükler yapan eklere yapım eki, sözcüklerin anlamını değiştirmeden cümle içindeki görevini belirleyen eklere çekim eki denir. Buna göre aşağıdakilerden hangisi çekim eki almamıştır?',
        options: [
          { id: 'A', text: 'Evler' },
          { id: 'B', text: 'Odam' },
          { id: 'C', text: 'Silgi' },
          { id: 'D', text: 'Masada' },
          { id: 'E', text: 'Okula' }
        ],
        correctOptionId: 'C',
        explanation: '"Silgi" kelimesi "sil-" fiil kökünden "-gi" yapım ekini almıştır. Diğerleri (-ler çoğul, -m iyelik, -da bulunma, -a yönelme) sadece çekim eki almıştır.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-3-orta',
    title: 'Sözcük Yapısı 3 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-sy-3-11',
        difficulty: 'medium',
        questionText: 'Aynı kökten hem isim hem fiil olarak kullanılabilen ve aralarında anlamca bağ bulunan kelimelere "kökteş kök" denir. Aşağıdaki kelimelerden hangisinin kökü kökteş köke örnektir?',
        options: [
          { id: 'A', text: 'Kır' },
          { id: 'B', text: 'Yüz' },
          { id: 'C', text: 'Boya' },
          { id: 'D', text: 'Yaz' },
          { id: 'E', text: 'Gül' }
        ],
        correctOptionId: 'C',
        explanation: '"Boya" kelimesi hem duvara sürülen madde olan "boya" hem de "boyamak" fiili olarak kullanılır. Aralarında anlam ilişkisi olduğu için kökteştir. Diğerleri sesteştir.'
      },
      {
        id: 'q-sy-3-12',
        difficulty: 'medium',
        questionText: 'Türkçede bazen gövdeden türemiş kelimelere rastlanır (Kök + yapım eki + yapım eki). Aşağıdaki altı çizili kelimelerin hangisinde altı çizili sözcük gövdeden türemiştir?',
        options: [
          { id: 'A', text: 'Bütün *kitapları* raflara dizdi.' },
          { id: 'B', text: 'Yeni açılan *çiçekçi* çok ilgi gördü.' },
          { id: 'C', text: 'O, okulun en iyi *gözlemcisi* seçildi.' },
          { id: 'D', text: 'Havalar ısınınca her taraf *yeşerdi*.' },
          { id: 'E', text: 'Burada çok *bilgin* insanlar yaşar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gözlemcisi" kelimesinin kökü göz (isim). Göz-le (isimden fiil) -> gözle-m (fiilden isim) -> gözlem-ci (isimden isim). Birden fazla yapım eki alarak gövdeden türemiştir. (Çiçekçi, yeşerdi, bilgin 1 tane yapım eki almıştır).'
      },
      {
        id: 'q-sy-3-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde yer alan altı çizili sözcüklerin hangisinde "-ı/-i/-u/-ü" ekinin görevi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Onun *kitabı* bende kalmış.' },
          { id: 'B', text: 'Evin *kapısı* çok eskiydi.' },
          { id: 'C', text: 'Yeni aldığı *arabayı* denemek istiyor.' },
          { id: 'D', text: 'Kardeşinin *okulu* yarın tatil edilecekmiş.' },
          { id: 'E', text: 'Annesinin *sözü* onun için çok değerlidir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arabayı" kelimesindeki "-ı" eki ismin belirtme hali (hal eki) iken, diğer seçeneklerdeki ekler aidiyet bildiren iyelik ekidir (onun kitabı, evin kapısı vb.).'
      },
      {
        id: 'q-sy-3-14',
        difficulty: 'medium',
        questionText: 'Yapım ekleri, eklendiği sözcüğün türünü değiştirebilir (isimden fiil, fiilden isim vb.). Aşağıdaki altı çizili kelimelerin hangisinde isimden fiil yapan bir yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu işte çok iyi bir *kazanç* elde etti.' },
          { id: 'B', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'C', text: 'Sınavdan sonra herkes çok *sevindi*.' },
          { id: 'D', text: 'Buradan karşı *yakaya* geçmek zor.' },
          { id: 'E', text: 'Bu konudaki *düşünceleri* çok ilginç.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kötüleşti" kelimesinde isim olan "kötü" kelimesi "-leş" yapım ekini alarak "kötüleşmek" (fiil) olmuştur. Kazanç (fiilden isim), sevin- (fiilden fiil), yaka-ya (isim-çekim eki), düşünce (fiilden isim).'
      },
      {
        id: 'q-sy-3-15',
        difficulty: 'medium',
        questionText: 'Basit kelimeler hiçbir yapım eki almayan sözcüklerdir. Aşağıdakilerin hangisinde altı çizili sözcük yapıca basittir?',
        options: [
          { id: 'A', text: 'Evdeki *eşyaları* kutulara dizdi.' },
          { id: 'B', text: 'Onunla yeni bir *başlangıç* yaptık.' },
          { id: 'C', text: 'Ormandaki *yangın* zor söndürüldü.' },
          { id: 'D', text: 'Yüzündeki *gülüş* bizi mutlu etti.' },
          { id: 'E', text: 'Herkesle olan *iletişimi* zayıftı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Eşyaları" sözcüğü hiçbir yapım eki almadığı için basittir. Başlangıç, yangın, gülüş ve iletişim türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-3-16',
        difficulty: 'medium',
        questionText: 'Fiil (eylem) kök ve gövdelerine gelerek onlardan isim türeten eklere fiilden isim yapım eki denir. Aşağıdaki sözcüklerden hangisi bu yolla türetilmemiştir?',
        options: [
          { id: 'A', text: 'Sevinç' },
          { id: 'B', text: 'Korku' },
          { id: 'C', text: 'Yazı' },
          { id: 'D', text: 'Düşünce' },
          { id: 'E', text: 'Gözlük' }
        ],
        correctOptionId: 'E',
        explanation: 'Sevinç (sevin-mek), korku (kork-mak), yazı (yaz-mak), düşünce (düşün-mek) fiilden isim olmuştur. "Gözlük" kelimesi ise "göz" (isim) kökünden isimden isim yapan "-lük" ekiyle türetilmiştir.'
      },
      {
        id: 'q-sy-3-17',
        difficulty: 'medium',
        questionText: 'Birleşik sözcükler isim tamlaması, sıfat tamlaması, isim-fiil veya iki fiilin birleşmesi gibi farklı yollarla oluşabilir. Aşağıdaki birleşik kelimelerin hangisi "sıfat tamlaması" şeklinde oluşmuştur?',
        options: [
          { id: 'A', text: 'Aslanağzı' },
          { id: 'B', text: 'Suçiçeği' },
          { id: 'C', text: 'Hanımeli' },
          { id: 'D', text: 'Büyükayı' },
          { id: 'E', text: 'Denizaltı' }
        ],
        correctOptionId: 'D',
        explanation: '"Büyükayı" sözcüğünde "büyük" sıfatı ile "ayı" ismi birleşmiş ve sıfat tamlaması yapısında bir birleşik isim oluşturmuştur. Diğerleri isim tamlamasıdır.'
      },
      {
        id: 'q-sy-3-18',
        difficulty: 'medium',
        questionText: 'İlgi eki (tamlayan eki), isim tamlamalarında tamlayana gelerek aidiyet, sahiplik bildirir. Aşağıdaki cümlelerin hangisinde "-ın/-in" eki ilgi eki görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya doğru çok *yakın* bir yerde oturuyorlar.' },
          { id: 'B', text: 'Büyük bir toprak *yığını* yolu kapatmıştı.' },
          { id: 'C', text: 'Eskiden bu sokaklardan çok *geçtin*.' },
          { id: 'D', text: 'Çocuğun *kalemini* sıranın altında bulduk.' },
          { id: 'E', text: 'Buraya gelirken çok dikkatli *bakın*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çocuğun kalemi" bir belirtili isim tamlamasıdır ve buradaki "-un" (-ın/-in) eki tamlayan (ilgi) ekidir. Yakın (kök), yığın (yapım eki), geçtin (şahıs eki), bakın (şahıs eki).'
      },
      {
        id: 'q-sy-3-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ecek/-acak" eki kip eki (zaman eki) olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yarın annesiyle memlekete *gidecek*.' },
          { id: 'B', text: 'Herkes bu sorunun cevabını *öğrenecek*.' },
          { id: 'C', text: 'Bizimle gelmekten vazgeçtiğini *söyleyecek*.' },
          { id: 'D', text: 'Bu konuda bizimle *görüşecek*.' },
          { id: 'E', text: 'Sokaktaki *yakacakları* depoya taşıdılar.' }
        ],
        correctOptionId: 'E',
        explanation: '"Yakacakları" kelimesindeki "-acak" eki, "yakmak" fiilinden kalıcı bir isim (yakacak-odun/kömür) türeten yapım ekidir. Diğerlerindeki ekler gelecek zaman kip ekleridir.'
      },
      {
        id: 'q-sy-3-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sözcüklerden hangisi yapısı bakımından birleşik bir kelime değildir?',
        options: [
          { id: 'A', text: 'Çekyat' },
          { id: 'B', text: 'Kızılırmak' },
          { id: 'C', text: 'Vazgeçmek' },
          { id: 'D', text: 'Bilişim' },
          { id: 'E', text: 'Gecekondu' }
        ],
        correctOptionId: 'D',
        explanation: '"Bilişim" kelimesi "bil-mek" kökünden türemiş (bil-iş-im) yapıca türemiş bir sözcüktür. Çekyat, Kızılırmak, vazgeçmek ve gecekondu birleşik kelimelerdir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-3-zor',
    title: 'Sözcük Yapısı 3 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-sy-3-21',
        difficulty: 'hard',
        questionText: 'Sıfat-fiil ekleri eklendiği fiili sıfat veya kalıcı isim yaparak türemiş sözcük oluştururken, haber kipleri sadece zaman anlamı katan çekim ekleridir. Buna göre, aşağıdaki altı çizili kelimelerin hangisinde "-ar/-er" eki yapım eki göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'O, her sabah düzenli olarak *koşar*.' },
          { id: 'B', text: 'Bütün eşyaları kendi başına kutuya *koyar*.' },
          { id: 'C', text: 'Elindeki *çalar* saat çok gürültülüydü.' },
          { id: 'D', text: 'Hafta sonları balık tutmaya *gider*.' },
          { id: 'E', text: 'Bu zor soruları sadece o *çözer*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çalar saat" tamlamasındaki "çalar" kelimesi "-ar" sıfat-fiil ekini almış ve fiilden sıfat (isim) türetmiştir (yapım eki). Diğerlerindeki "-ar/-er" ekleri geniş zaman kipidir.'
      },
      {
        id: 'q-sy-3-22',
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
        explanation: '"Sevindik" kelimesinin kökü "sev-mek" fiilidir. "Sev-mek" fiili "-in" yapım ekini alarak "sevin-mek" fiiline dönüşmüştür. Bu, fiilden fiil yapan ektir. (Kötüleşti isimden fiil, yazı, bilgin, yangın fiilden isim).'
      },
      {
        id: 'q-sy-3-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki birleşik fiillerden hangisi "isim + yardımcı fiil" şeklinde kurulmamıştır?',
        options: [
          { id: 'A', text: 'Olayı sonradan *fark etti*.' },
          { id: 'B', text: 'Gelen teklifleri *reddetti*.' },
          { id: 'C', text: 'Onu gördüğünde çok *şaşakaldı*.' },
          { id: 'D', text: 'Arkadaşına yardım için *telefon etti*.' },
          { id: 'E', text: 'Sınavı kazandığını *hissetti*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Şaşakaldı" fiili "şaş-mak" ve "kal-mak" fiillerinin kurallı birleşik fiil kuralıyla (sürerlik fiili -ekal) birleşmesiyle oluşmuştur. İki fiil birleşmiştir. Diğerleri (fark, ret, telefon, his + etmek) isim ve yardımcı eylemden oluşur.'
      },
      {
        id: 'q-sy-3-24',
        difficulty: 'hard',
        questionText: 'Bazı ekler eklendiği kelimenin kökünde köklü bir ünlü değişimine sebep olabilir. Aşağıdaki kelimelerin hangisinde çekim eki alırken kökte ünlü değişimi (aşınma veya daralma değil) görülmüştür?',
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
        id: 'q-sy-3-25',
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
        id: 'q-sy-3-26',
        difficulty: 'hard',
        questionText: 'İsimden fiil yapan "-l" veya "-al/-el" ekleri bazen kökün sonundaki "k" ünsüzünün düşmesine yol açar. Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'B', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'C', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'D', text: 'Hastanın yüzü gittikçe *ufaldı*.' },
          { id: 'E', text: 'Ağacın yaprakları sonbaharda *sarardı*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Küçük (küçüldü), alçak (alçaldı), yüksek (yükseldi) ve ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Sarardı" kelimesinin kökü "sarı"dır ve -ar ekini aldığında ünlü aşınması/düşmesi olur, ünsüz düşmesi yoktur.'
      },
      {
        id: 'q-sy-3-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" ekinin görevi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'B', text: 'Bu soruyu dün gece *çözdüm*.' },
          { id: 'C', text: 'Yarın sabah seninle *gelirim*.' },
          { id: 'D', text: 'Son yıllarda enerji *tüketimi* arttı.' },
          { id: 'E', text: 'Ben de onu çok *severim*.' }
        ],
        correctOptionId: 'D',
        explanation: '"Tüketimi" kelimesindeki "-im" eki, "tüketmek" fiilinden isim türeten bir yapım ekidir (fiilden isim). Diğer seçeneklerdeki (-im, -üm vb.) ekler, fiile gelen 1. tekil şahıs (kişi) ekidir.'
      },
      {
        id: 'q-sy-3-28',
        difficulty: 'hard',
        questionText: 'Yapım ekinin türü eklendiği kökün yapısını ve kelimenin son türünü belirler. Aşağıdaki kelimelerden hangisi yapı bakımından basit kelimedir?',
        options: [
          { id: 'A', text: 'Bilişim' },
          { id: 'B', text: 'Tebessüm' },
          { id: 'C', text: 'Başlangıç' },
          { id: 'D', text: 'Yaşantı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'B',
        explanation: '"Tebessüm" kelimesi Arapça kökenli olup, Türkçede herhangi bir yapım ekiyle türetilmemiştir (basit). Bilişim (bilmek), başlangıç (baş), yaşantı (yaşamak), düşünce (düşünmek) kelimeleri ise türemiştir.'
      },
      {
        id: 'q-sy-3-29',
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
        id: 'q-sy-3-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler her iki kelimenin de gerçek anlamını koruması, sadece birinin koruması veya ikisinin de yitirmesi şeklinde oluşabilir. Aşağıdaki birleşik kelimelerden hangisinde her iki kelime de gerçek anlamını tamamen yitirmiştir?',
        options: [
          { id: 'A', text: 'Buzdolabı' },
          { id: 'B', text: 'Aslanağzı' },
          { id: 'C', text: 'Ayakkabı' },
          { id: 'D', text: 'Denizaltı' },
          { id: 'E', text: 'Kuşüzümü' }
        ],
        correctOptionId: 'B',
        explanation: '"Aslanağzı" bir çiçek adıdır ve ne aslan ile ne de ağız ile bir ilgisi kalmamıştır. İki kelime de gerçek anlamını yitirmiş (kalıplaşmış mecaz) ve birleşik kelime oluşmuştur.'
      }
    ]
  }
];
