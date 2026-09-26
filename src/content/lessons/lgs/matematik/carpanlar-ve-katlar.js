import { createLgsMathLesson } from './factory.js'

export default createLgsMathLesson({
  slug: 'lgs-matematik-carpanlar-ve-katlar',
  topic: 'Çarpanlar ve Katlar',
  order: 1,
  minutes: 48,
  codes: ['M.8.1.1.1', 'M.8.1.1.2', 'M.8.1.1.3'],
  scope: 'Pozitif çarpanlar, asal çarpanlara ayırma, iki doğal sayının EBOB/EKOK problemleri ve aralarında asallık ele alınır; alan veya hacim hesabı gerektiren EBOB/EKOK problemleri bu kazanımın dışındadır.',
  outcomes: [
    'Bir pozitif tam sayının çarpanlarını ve asal çarpanlarını ayırırım.',
    'Bir problemin EBOB mu EKOK mu istediğini gerekçesiyle seçerim.',
    'İki sayının aralarında asal olup olmadığını kontrol ederim.',
  ],
  lead: 'Çarpanı, EBOB’u ve EKOK’u sorudaki gerçek görevlerine göre ayır.',
  introduction: `Bir sayının **çarpanı**, o sayıyı kalansız böler; **katı** ise sayının ardışık tam sayı çarpımlarıyla oluşur. Örneğin 36'nın çarpanlarından 4 ve 9, katlarından 72 ve 108 bulunur. “En büyük” veya “en küçük” sözünü tek başına görmek yöntem seçtirmez: önce soruda **neyin ortak**, **neyin en büyük/en küçük** olduğuna bak.

Bu derste yalnız işlem sonucu değil, sonucun problemde neyi gösterdiği önemlidir. En büyük eşit paket büyüklüğü çoğu zaman EBOB; aynı anda yeniden karşılaşmanın ilk zamanı çoğu zaman EKOK ister. Bu iki ipucu, koşulları kontrol etmeden otomatik kural olarak kullanılmaz.`,
  why: {
    question: 'Asal çarpanlara ayırma ortak böleni ve ortak katı neden gösterir?',
    body: `1’den büyük her pozitif tam sayı asal sayıların çarpımı olarak tek biçimde yazılır. 48 = 2⁴ × 3 ve 60 = 2² × 3 × 5. Her ikisini bölen bir sayı, ortak asal çarpanların **küçük üslerini** aşamaz; bu nedenle EBOB = 2² × 3 = 12. Her ikisinin katı olan bir sayı ise iki sayının kullandığı asal çarpanların **büyük üslerini** taşımalıdır; bu nedenle EKOK = 2⁴ × 3 × 5 = 240. Kuralın nedeni bu kapsama ilişkisidir.`,
  },
  concepts: [
    { term: 'Pozitif çarpan ve asal çarpan', body: '72 = 2³ × 3². Buradaki asal çarpanlar yalnız 2 ve 3’tür; 6 da 72’nin çarpanıdır fakat asal değildir. 1 her pozitif tam sayının çarpanıdır, asal sayı değildir.' },
    { term: 'EBOB', body: 'İki doğal sayıyı da kalansız bölen **en büyük** pozitif sayıdır. 24 ve 36 için ortak bölenler 1, 2, 3, 4, 6, 12; EBOB 12’dir. Eşit ve en büyük gruplara ayırma durumlarında kullanılır.' },
    { term: 'EKOK', body: 'İki sayının da katı olan **en küçük** pozitif sayıdır. 6 ve 8’in ilk ortak pozitif katı 24’tür. Aynı başlangıçtan yinelenen olayların ilk yeniden buluşmasını modelleyebilir.' },
    { term: 'Aralarında asal', body: 'İki sayının EBOB’u 1 ise aralarında asaldır. Sayıların tek tek asal olması gerekmez: 8 ve 9 bileşiktir, ortak pozitif bölenleri yalnız 1’dir.' },
  ],
  quickFacts: [
    '1 asal değildir; en küçük asal sayı 2’dir ve tek çift asal sayıdır.',
    'Her pozitif tam sayının 1 ve kendisi çarpandır.',
    'EBOB iki sayıyı da böler; EKOK iki sayının da katıdır.',
    'Aralarında asal sayılarda EBOB = 1 ve EKOK = sayıların çarpımıdır.',
    'İki pozitif doğal sayının çarpımı = EBOB × EKOK; sonucu kontrol etmekte kullan.',
  ],
  map: {
    title: 'Sayıdan karara',
    intro: 'Asal yapı iki farklı soruya cevap verir: ortak parça mı, ortak kat mı?',
    nodes: [
      { id: 'asal', label: 'Asal çarpanlar', detail: 'Her iki sayıyı asal çarpanların kuvvetleriyle yaz.' },
      { id: 'ebob', label: 'Ortakların küçük üsleri', detail: 'İki sayıyı da bölen en büyük sayıya ulaş.' },
      { id: 'ekok', label: 'Tüm asal çarpanların büyük üsleri', detail: 'İki sayının da katı olan en küçük sayıya ulaş.' },
    ],
    links: [
      { from: 'asal', to: 'ebob', label: 'ortak bölen' },
      { from: 'asal', to: 'ekok', label: 'ortak kat' },
    ],
    caption: 'EBOB ve EKOK aynı asal ayrışımın iki ayrı okumasıdır.',
  },
  method: {
    title: 'Soruda EBOB mu EKOK mu?',
    lead: 'Kelime avcılığı yerine istenen niceliği belirle.',
    intro: '“En büyük” ve “en küçük” tek başına karar verdirmez; bölme veya kat olma ilişkisini ara.',
    checks: [
      { question: 'Aranan sayı, verilen miktarları kalansız bölecek mi?', yes: 'Ortak bölenleri ara; en büyüğü isteniyorsa EBOB.', no: 'Bir sonraki ilişkiye bak.' },
      { question: 'Aranan sayı, verilen sayıların ortak katı mı olacak?', yes: 'İlk olumlu tekrar için EKOK.', no: 'Önce modelini yeniden kur; ortaklık yoksa EBOB/EKOK kullanma.' },
      { question: 'İki sayı aralarında asal mı?', yes: 'EBOB 1; EKOK iki sayının çarpımı.', no: 'Ortak asal çarpanları işle.' },
    ],
    takeaway: 'Sonucu birimle yorumla: paket başına nesne mi, toplam paket mi, geçen süre mi?',
  },
  formula: {
    title: 'Kontrol bağıntısı', latex: '\\operatorname{EBOB}(a,b)\\cdot\\operatorname{EKOK}(a,b)=a\\cdot b',
    meaning: 'Pozitif doğal sayılarda iki yöntemin sonucunu çarpımla çapraz kontrol et.',
    variables: [{ symbol: 'a,b', meaning: 'Pozitif doğal sayılar' }],
  },
  examples: [
    {
      title: 'Seviye 1 · Çarpanı gerçekten tanı', prompt: '24 sayısının pozitif çarpanlarını yaz. 3 ile 8’in neden listede olduğunu açıkla.',
      steps: [
        { title: 'Çarpım çiftlerini kur', body: '1 × 24, 2 × 12, 3 × 8 ve 4 × 6 eşitlikleri 24’ü verir.' },
        { title: 'Listeyi sırala', body: 'Pozitif çarpanlar 1, 2, 3, 4, 6, 8, 12, 24’tür.' },
        { title: 'Tanıma dön', body: '24/3 = 8 ve 24/8 = 3 tam sayı olduğundan 3 ve 8 çarpandır.' },
      ], answer: '1, 2, 3, 4, 6, 8, 12, 24.',
      takeaway: 'Çarpan listesini çarpım çiftleriyle kurarsan eksik yazma olasılığı azalır.',
    },
    {
      title: 'Seviye 2 · Asal ayrışımı oku', prompt: '72 ve 90 sayılarının EBOB ve EKOK’unu bul.',
      steps: [
        { title: 'Sayıları ayır', body: '72 = 2³ × 3²; 90 = 2 × 3² × 5.' },
        { title: 'EBOB için ortakların küçük üsleri', body: '2¹ × 3² = 18.' },
        { title: 'EKOK için tüm çarpanların büyük üsleri', body: '2³ × 3² × 5 = 360. Kontrol: 18 × 360 = 72 × 90 = 6480.' },
      ], answer: 'EBOB = 18; EKOK = 360.',
      takeaway: 'EBOB’da yalnız ortak asal çarpanları al; EKOK’da hiçbir asal çarpanı unutma.',
    },
    {
      title: 'Seviye 3 · Paket sayısını son adımda bul', prompt: '60 kırmızı ve 84 mavi boncuk renkleri karıştırılmadan, her pakette eşit ve olabildiğince çok boncuk olacak şekilde paketleniyor. Toplam kaç paket oluşur?',
      steps: [
        { title: 'Arananı ayır', body: 'Önce paket başına düşen en büyük ortak boncuk sayısı aranır; bu 60 ile 84’ün EBOB’udur.' },
        { title: 'Ortak böleni bul', body: '60 = 2² × 3 × 5; 84 = 2² × 3 × 7. EBOB = 12 boncuk.' },
        { title: 'Sorulan sonuca dön', body: '60/12 = 5 kırmızı paket, 84/12 = 7 mavi paket; toplam 12 paket.' },
      ], answer: '12 paket.',
      takeaway: 'EBOB paket büyüklüğüdür; soru paket sayısını istiyorsa bölme adımı gerekir.',
    },
    {
      title: 'Seviye 4 · Aralarında asal olup olmadığını denetle', prompt: '18 ve 25 sayılarının EBOB ve EKOK’unu bul. İki sayının da asal olması gerekir mi?',
      steps: [
        { title: 'Asal çarpanları ayır', body: '18 = 2 × 3²; 25 = 5². Ortak asal çarpan yoktur.' },
        { title: 'EBOB ve EKOK’u çıkar', body: 'EBOB = 1; EKOK = 18 × 25 = 450.' },
        { title: 'İddiayı sınırla', body: '18 de 25 de bileşiktir. Aralarında asal olmak, tek tek asal olmalarını gerektirmez.' },
      ], answer: 'EBOB = 1; EKOK = 450. Sayıların ikisi de bileşik olabilir.',
      takeaway: 'Aralarında asallığı iki sayının ortak bölenine bakarak değerlendir.',
    },
    {
      title: 'Seviye 5 · Birlikte çalma sayısını say', prompt: 'Biri 12, diğeri 18 dakikada bir çalan iki zil saat 09.00’da birlikte çaldı. 10.30’a kadar, 09.00 dâhil, kaç kez birlikte çalarlar?',
      steps: [
        { title: 'Yöntemi seç', body: 'Birlikte çalma aralığı 12 ve 18’in ilk ortak katıdır: EKOK = 36 dakika.' },
        { title: 'Zaman çizgisini kur', body: '09.00, 09.36 ve 10.12 birlikte çalma anlarıdır; sonraki an 10.48 olur.' },
        { title: 'Sınırı ve başlangıcı kontrol et', body: '10.48 sınırın dışındadır. Başlangıç 09.00 soruda dâhil edildiği için toplam üç an sayılır.' },
      ], answer: '3 kez.',
      takeaway: 'EKOK süreyi verir; “kaç kez” sorusu başlangıcı ve bitişi ayrıca saymayı gerektirir.',
    },
  ],
  traps: [
    { title: '“En büyük” sözü yetmez', wrong: 'Soruda “en büyük” gördüm, her durumda EBOB kullandım.', right: 'Aranan şey verilenlerin böleni mi, katı mı diye kontrol ettim.', body: 'Örneğin en büyük ortak kat diye bir değer yoktur; ortak katlar sınırsız büyür. Soru koşulunu matematik diline çevir.' },
    { title: 'Aralarında asal, tek tek asal demek değildir', wrong: '8 ve 9 bileşik olduğu için aralarında asal olamaz.', right: 'Ortak pozitif bölenleri yalnız 1 olduğundan aralarında asaldır.', body: 'Önce her sayının asal olup olmadığına değil, iki sayının ortak bölenine bak.' },
  ],
  checkpoints: [
    { prompt: '18 ve 35 aralarında asal mı? EKOK’ları kaçtır?', hint: 'Ortak asal çarpan olup olmadığını araştır.', answer: '18 = 2 × 3², 35 = 5 × 7. Ortak asal çarpan yoktur; EBOB = 1. EKOK = 18 × 35 = 630.' },
    { prompt: '12 ve 18 dakikada bir çalan iki zil aynı anda çaldı. Yeniden ilk kez aynı anda kaç dakika sonra çalar?', hint: 'Aranan süre iki döngünün de katıdır.', answer: '12’nin ve 18’in ilk ortak katı 36’dır. İkisi başlangıçta aynı anda çaldığı için 36 dakika sonra yeniden birlikte çalar; başlangıç koşulu olmadan bu çıkarım yapılamaz.' },
  ],
  exam: {
    title: 'Soru neyi ölçer?',
    body: 'Sayıları asal çarpanlarına ayırmayı, ortak bölen/kat ilişkisini bağlamdan seçmeyi ve bulduğun değeri sorulan birime çevirmeyi ölçebilir. Aşağıdaki soru DRKOÇ için özgündür; çıkmış soru değildir.',
    measures: ['Asal çarpan ayrışımı', 'EBOB/EKOK seçimi', 'Sonucun birimle yorumu'],
  },
  simulation: {
    title: 'Paketleme kararı',
    passage: 'Bir atölyede 54 sarı ve 72 yeşil kalem vardır. Renkler karışmayacak; her pakette eşit sayıda kalem bulunacak ve paket başına kalem sayısı olabildiğince büyük olacaktır.',
    question: 'Buna göre toplam kaç paket hazırlanır?',
    options: [
      { text: '6', explanation: 'EBOB(54,72) = 18 kalemdir; yalnızca paketlerden bir bölümünü saymak toplamı vermez.' },
      { text: '7', explanation: 'EBOB(54,72) = 18 kalemdir. 54/18 = 3 ve 72/18 = 4 paket; toplam 7 pakettir.' },
      { text: '9', explanation: '54 ve 72, 9’a bölünür ama 9 en büyük ortak bölen değildir; paket başına sayı olabildiğince büyük olmalıdır.' },
      { text: '18', explanation: '18 paket başına kalem sayısıdır; sorulan toplam paket sayısı 3 + 4 = 7’dir.' },
    ],
    answer_index: 1,
    stem_analysis: '“Her pakette eşit ve en çok” paket büyüklüğünü EBOB yapar; soru sonunda paket sayısını ister.',
    critical_point: '18 son cevap değildir: önce her rengin paket sayısına bölüp sonra toplamayı unutma.',
    takeaway: 'Yöntem seçimi ile sorulan niceliğe dönüş ayrı basamaklardır.',
  },
  quizzes: [
    { question: '8 ve 9 sayıları için hangisi doğrudur?', options: ['İkisi de asal sayıdır.', 'Aralarında asaldır ve EKOK’ları 72’dir.', 'EBOB’ları 8’dir.', 'EKOK’ları 17’dir.'], answer_index: 1, explanation: '8 = 2³ ve 9 = 3² ortak asal çarpan taşımaz; EBOB 1 olur. Bu yüzden EKOK 8 × 9 = 72’dir.', purpose: 'concept' },
    { question: '24 ve 36 sayılarının EBOB’u kaçtır?', options: ['6', '12', '24', '72'], answer_index: 1, explanation: '24 = 2³ × 3 ve 36 = 2² × 3². Ortak asal çarpanların küçük üsleri 2² × 3 = 12 sonucunu verir.', purpose: 'apply' },
    { question: '6 ve 8 dakikada bir tekrarlanan iki işin ilk ortak tekrar süresi kaç dakikadır?', options: ['2', '12', '14', '24'], answer_index: 3, explanation: 'Aranan süre 6’nın ve 8’in ortak katı olmalıdır. En küçük ortak pozitif kat 24 olduğundan ilk birlikte tekrar 24 dakika sonradır.', purpose: 'apply' },
  ],
  finalFacts: [
    'Çarpan kalansız böler; kat, sayının tam sayı çarpımıdır.',
    'EBOB ortak asal çarpanların küçük üsleriyle bulunur.',
    'EKOK tüm asal çarpanların büyük üsleriyle bulunur.',
    'EBOB = 1 ise sayılar aralarında asaldır; ikisinin de asal olması gerekmez.',
    'Problemin son cümlesini oku: yöntem sonucu ile istenen cevap aynı olmayabilir.',
    'MEB kazanımında alan ve hacim hesabı isteyen EBOB/EKOK problemleri yoktur.',
  ],
  next: { body: 'Önce çarpan ve kat ilişkisini kendi cümlenle açıklayıp sonra üslü ifadelerde asal ayrışımın yazımını kullan.', topics: ['Üslü İfadeler'] },
})
