import { createLgsMathLesson } from './factory.js'

export default createLgsMathLesson({
  slug: 'lgs-matematik-uslu-ifadeler',
  topic: 'Üslü İfadeler',
  order: 1,
  minutes: 50,
  codes: ['M.8.1.2.1', 'M.8.1.2.2', 'M.8.1.2.3', 'M.8.1.2.4', 'M.8.1.2.5'],
  scope: 'Tam sayı taban ve tam sayı üsler, üslü ifade kuralları, ondalık gösterimin 10’un kuvvetleriyle çözümlemesi ve pozitif sayıların bilimsel gösterimi ele alınır.',
  outcomes: [
    'Üs, taban, işaret ve parantezi doğru okurum.',
    'Üslü ifadeleri denk biçimlere dönüştürürüm.',
    'Pozitif çok büyük veya çok küçük sayıları bilimsel gösterimle yazar ve karşılaştırırım.',
  ],
  lead: 'İşaret ve üs sırasını koru; bilimsel gösterimde katsayıyı doğru aralığa getir.',
  introduction: `**Üs**, aynı çarpanın kaç kez kullanıldığını söyler: 2⁴ = 2 × 2 × 2 × 2 = 16. Negatif üs ise “sonuç negatif” demek değildir: 2⁻³ = 1/8. Üslü ifadeyi okurken tabanın nerede başladığını parantez belirler. (-2)⁴ = 16 iken -2⁴ = -(2⁴) = -16.

10’un tam sayı kuvvetleri, ondalık basamakları bir araya getirir. 4,07 = 4 × 10⁰ + 0 × 10⁻¹ + 7 × 10⁻². Bilimsel gösterimde bir adım daha vardır: sayı **a × 10ⁿ** biçiminde yazılır ve pozitif katsayı için **1 ≤ a < 10** koşulu aranır. 42 × 10⁵ sayıca doğru olsa da bilimsel gösterim değildir; 4,2 × 10⁶ biçimine çevrilir.`,
  why: {
    question: 'Aynı tabanlı kuvvetler çarpılırken üsler neden toplanır?',
    body: '2³ üç tane 2, 2⁴ dört tane 2’nin çarpımıdır. Çarpımlar birleşince toplam yedi tane 2 kalır: 2³ × 2⁴ = 2⁷. Bölmede ortak çarpanlar sadeleştiğinden üsler çıkarılır. Bu açıklama kuralın hangi koşulda kullanılacağını da gösterir: tabanlar aynı olmalı ve paydadaki ifade sıfır olmamalıdır.',
  },
  concepts: [
    { term: 'Taban ve üs', body: '3⁴ ifadesinde taban 3, üs 4’tür. (-3)² ve -3² aynı ifade değildir; ilkinde taban -3, ikincisinde kuvvet yalnız 3’e uygulanır.' },
    { term: 'Sıfır ve negatif üs', body: 'a ≠ 0 için a⁰ = 1 ve a⁻ⁿ = 1/aⁿ. Örneğin 5⁻² = 1/25. 0⁰ ve 0’ın negatif tam sayı kuvveti bu kuralla tanımlanmaz.' },
    { term: 'Kuvvetin kuvveti, çarpım ve bölüm', body: 'Sıfır olmayan a ve b için (aᵐ)ⁿ = a^(m×n), (a × b)ⁿ = aⁿ × bⁿ ve (a/b)ⁿ = aⁿ/bⁿ. Üsler ilk kuralda çarpılır; diğerlerinde kuvvet çarpanlara uygulanır. Kuvvet toplama üzerine böyle dağılmaz: (2 + 3)² = 25, 2² + 3² = 13.' },
    { term: 'Ondalık çözümleme', body: '53,204 = 5 × 10¹ + 3 × 10⁰ + 2 × 10⁻¹ + 0 × 10⁻² + 4 × 10⁻³. Virgülün sağındaki her basamak 10’un bir negatif kuvvetini kullanır.' },
    { term: 'Bilimsel gösterim', body: 'Pozitif sayıda a × 10ⁿ yazılır; 1 ≤ a < 10 ve n tam sayıdır. Örneğin 0,00072 = 7,2 × 10⁻⁴. Katsayı 0,72 veya 72 olursa biçim bilimsel değildir.' },
  ],
  quickFacts: [
    'Parantez işareti değiştirir: (-3)² = 9, -3² = -9.',
    'Negatif üs, pozitif taban için negatif sonuç vermez; tersini aldırır.',
    'a ≠ 0 için a⁰ = 1; “her sayının sıfırıncı kuvveti 1” genellemesi yanlıştır.',
    'Aynı tabanla çarpmada üsler toplanır; toplamada böyle bir kural yoktur.',
    'Aynı tabanla bölmede üsler çıkarılır; kuvvetin kuvvetinde üsler çarpılır.',
    '(a × b)ⁿ = aⁿ × bⁿ; (a + b)ⁿ için bu dağıtma kuralı yoktur.',
    'Bilimsel gösterimde katsayı 10 olamaz; 10’a eşitse virgülü kaydır.',
  ],
  map: {
    title: 'Üslü ifade okuma sırası',
    intro: 'İşlemi yapmadan önce ifadeyi doğru parçala.',
    nodes: [
      { id: 'parantez', label: 'Parantez', detail: 'Eksi işareti tabanın içinde mi dışında mı?' },
      { id: 'taban', label: 'Taban', detail: 'Tekrarlanan çarpanın ne olduğunu belirle.' },
      { id: 'us', label: 'Üs', detail: 'Çarpan sayısı mı, negatifse ters alma mı?' },
      { id: 'bicim', label: 'Gösterim', detail: 'Sayıyı gerekirse 10’un kuvvetiyle yeniden yaz.' },
    ],
    links: [
      { from: 'parantez', to: 'taban', label: 'belirler' },
      { from: 'taban', to: 'us', label: 'birlikte okunur' },
      { from: 'us', to: 'bicim', label: 'dönüştürülür' },
    ],
    caption: 'İşareti kaçırırsan doğru üs kuralı bile yanlış sonuca götürür.',
  },
  method: {
    title: 'İfadeyi hangi kuralla dönüştüreceğim?',
    lead: 'İşaret, taban ve işlem türünü sırayla kontrol et.',
    intro: 'Kuralı ifade üzerinde görmeden uygulama; aynı taban koşulu özellikle önemlidir.',
    checks: [
      { question: 'Üs negatif mi?', yes: 'Taban sıfır değilse tersini al, sonucu otomatik negatif yapma.', no: 'Taban ve parantezi kontrol et.' },
      { question: 'Aynı tabanlı kuvvetler çarpılıyor veya bölünüyor mu?', yes: 'Çarpmada üsleri topla, bölmede çıkar.', no: 'Tabanlar farklıysa aynı taban kuralını uygulama.' },
      { question: 'Bilimsel gösterim mi isteniyor?', yes: 'Katsayıyı 1 ile 10 arasına taşı; virgülün yönünü üs işaretiyle denetle.', no: 'Ondalık çözümlemede her basamağın 10 kuvvetini ayrı yaz.' },
    ],
    takeaway: 'Son adımda yaklaşık büyüklük kontrolü yap: 10⁻⁵ küçük, 10⁵ büyüktür.',
  },
  formula: {
    title: 'Aynı taban için temel ilişki', latex: 'a^m\\cdot a^n=a^{m+n}',
    meaning: 'Çarpma varsa tekrarlanan çarpanlar birleşir. Negatif üs kullanılacaksa taban sıfır olamaz; bağıntıyı toplama için kullanma.',
    variables: [{ symbol: 'a', meaning: 'Ortak taban' }, { symbol: 'm,n', meaning: 'Tam sayı üsler' }],
  },
  examples: [
    {
      title: 'Seviye 1 · Üssü tekrarlı çarpım olarak gör', prompt: '2³ × 2² işlemini hem açarak hem üs kuralıyla yap.',
      steps: [
        { title: 'Çarpanları aç', body: '2³ × 2² = (2 × 2 × 2) × (2 × 2). Toplam beş tane 2 çarpılır.' },
        { title: 'Kuralı yaz', body: 'Taban aynı ve işlem çarpma olduğu için 2³ × 2² = 2⁵.' },
        { title: 'Sonucu doğrula', body: '2⁵ = 32; ayrı hesapla 8 × 4 = 32.' },
      ], answer: '32.',
      takeaway: 'Üsleri toplama kuralını çarpanların gerçekten birleşmesiyle doğrula.',
    },
    {
      title: 'Seviye 2 · Üç ayrı üs kuralını ayır', prompt: '(2³)² ÷ 2⁴ + (2 × 3)² + (6/3)² işlemini yap.',
      steps: [
        { title: 'Kuvvetin kuvvetini ve bölmeyi çöz', body: '(2³)² = 2⁶; 2⁶ ÷ 2⁴ = 2² = 4.' },
        { title: 'Çarpımın ve bölümün kuvvetini çöz', body: '(2 × 3)² = 2² × 3² = 36; (6/3)² = 6²/3² = 4.' },
        { title: 'Sonuçları topla ve sınırı hatırla', body: '4 + 36 + 4 = 44. Üs kuralı çarpma ve bölme içindir; (2 + 3)² ifadesini 2² + 3² diye açma.' },
      ], answer: '44.',
      takeaway: 'İşleme bak: kuvvetin kuvvetinde üsleri çarp, çarpım ve bölümün kuvvetini parçalara uygula.',
    },
    {
      title: 'Seviye 3 · İşareti kuvvetten ayır', prompt: '(-2)⁴ - 2⁻² - (-2⁴) işleminin sonucu nedir?',
      steps: [
        { title: 'Parantezleri oku', body: '(-2)⁴ = 16; -2⁴ = -16 olduğundan (-2⁴) = -16.' },
        { title: 'Negatif üssü işle', body: '2⁻² = 1/2² = 1/4.' },
        { title: 'Birleştir', body: '16 - 1/4 - (-16) = 32 - 1/4 = 31,75.' },
      ], answer: '31,75',
      takeaway: 'Eksi işaretinin üsse dâhil olup olmadığını parantez belirler.',
    },
    {
      title: 'Seviye 4 · Bilimsel gösterime taşı', prompt: '0,000072 sayısını bilimsel gösterimle yaz.',
      steps: [
        { title: 'Katsayıyı kur', body: 'İlk sıfır olmayan rakamdan sonra virgül koy: 7,2.' },
        { title: 'Basamak hareketini say', body: '7,2’den 0,000072’ye ulaşmak için virgül beş basamak sola gider; 10⁻⁵ ile çarp.' },
        { title: 'Koşulu denetle', body: '1 ≤ 7,2 < 10 sağlanır; 7,2 × 10⁻⁵ bilimsel gösterimdir.' },
      ], answer: '7,2 × 10⁻⁵',
      takeaway: 'Küçük pozitif sayı için üs negatiftir; katsayıyı normal aralıkta tut.',
    },
    {
      title: 'Seviye 5 · Denk gösterim ile bilimsel gösterimi ayır', prompt: '48 × 10⁴ sayısını bilimsel gösterimle yaz.',
      steps: [
        { title: 'Katsayıyı küçült', body: '48 = 4,8 × 10¹.' },
        { title: 'Üsleri birleştir', body: '48 × 10⁴ = 4,8 × 10¹ × 10⁴ = 4,8 × 10⁵.' },
        { title: 'Büyüklüğü denetle', body: '48 × 10 000 = 480 000 ve 4,8 × 100 000 = 480 000.' },
      ], answer: '4,8 × 10⁵',
      takeaway: 'Eşit değerli her üslü yazım bilimsel gösterim değildir.',
    },
    {
      title: 'Seviye 6 · İki büyük sayının farkını koru', prompt: 'A = 4,2 × 10⁶ ve B = 7 × 10⁵ ise A − B’yi bilimsel gösterimle bul.',
      steps: [
        { title: 'Kuvvetleri eşitle', body: '7 × 10⁵ = 0,7 × 10⁶. Çıkarma için aynı 10 kuvvetini kullan.' },
        { title: 'Katsayıları çıkar', body: 'A − B = (4,2 − 0,7) × 10⁶ = 3,5 × 10⁶.' },
        { title: 'Büyüklük ve biçimi denetle', body: '4 200 000 − 700 000 = 3 500 000; 3,5 katsayısı 1 ile 10 arasındadır.' },
      ], answer: '3,5 × 10⁶.',
      takeaway: 'Toplama veya çıkarmada önce 10’un kuvvetlerini aynı yap; üsleri doğrudan toplayıp çıkarma.',
    },
  ],
  traps: [
    { title: 'Üsler toplamda birleşmez', wrong: '2³ + 2⁴ = 2⁷ yazdım.', right: '2³ + 2⁴ = 8 + 16 = 24.', body: 'Üs toplama kuralı aynı tabanlı kuvvetlerin çarpımı içindir; toplamada önce kuvvetleri hesapla.' },
    { title: 'Katsayı aralığını unutma', wrong: '0,00072 = 72 × 10⁻⁵ bilimsel gösterimdir.', right: 'Bu eşitlik sayısal olarak doğru olsa da bilimsel gösterim 7,2 × 10⁻⁴ biçimindedir.', body: 'Bilimsel gösterimin koşulu 1 ≤ katsayı < 10’dur. Sonucu yalnız eşitlikle değil biçim koşuluyla da kontrol et.' },
  ],
  checkpoints: [
    { prompt: '3⁻² × 3⁴ kaçtır? Sonuç negatif mi?', hint: 'Aynı tabanda çarpmada üsleri topla.', answer: '3⁻² × 3⁴ = 3² = 9. Negatif üs sayının işaretini değiştirmez; 3⁻² zaten 1/9’dur, 3⁴ = 81 ve çarpımları 9’dur.' },
    { prompt: '6,04 sayısını 10’un kuvvetleriyle basamaklarına ayır.', hint: 'Virgülden sonraki ilk basamak 10⁻¹’dir.', answer: '6,04 = 6 × 10⁰ + 0 × 10⁻¹ + 4 × 10⁻². Sıfır olan onda birler basamağı atlanabilir ama 4’ün yüzde birler basamağında olduğu korunmalıdır.' },
  ],
  exam: {
    title: 'Soru neyi ölçer?',
    body: 'İşaret ve parantez ayrımını, denk üslü ifadeleri, 10’un kuvvetleriyle çözümlemeyi ve bilimsel gösterimin biçim koşulunu birlikte ölçebilir. Aşağıdaki soru özgündür.',
    measures: ['Parantez ve işaret', 'Negatif üs', 'Bilimsel gösterim', 'Büyüklük kontrolü'],
  },
  simulation: {
    title: 'İki ölçümü karşılaştır',
    passage: 'Bir ölçümde A uzunluğu 4,8 × 10⁻⁴ m, B uzunluğu 6 × 10⁻⁵ m olarak yazılmıştır. İki katsayı da bilimsel gösterim koşuluna uygundur.',
    question: 'A uzunluğu B uzunluğunun kaç katıdır?',
    options: [
      { text: '0,8', explanation: 'Katsayıları bölüp 10’un kuvvetleri arasındaki bir basamak farkını yok saymak oranı on kat küçük verir.' },
      { text: '8', explanation: '(4,8/6) × 10^(−4−(−5)) = 0,8 × 10 = 8. B, A’nın sekizde biridir.' },
      { text: '10', explanation: 'Yalnız 10’un kuvvetleri arasındaki farkı görmek yetmez; 4,8 ile 6 katsayıları da bölünmelidir.' },
      { text: '80', explanation: 'Üs farkını iki basamak saymak ya da 0,8 × 10 işlemini tekrar 10 ile çarpmak sonucu on kat büyütür.' },
    ],
    answer_index: 1,
    stem_analysis: '“Kaç kat” bölme ister. Katsayı oranını ve 10’un üs farkını ayrı hesaplayıp birleştir.',
    critical_point: '−4 − (−5) = 1; negatif bir üssü çıkarırken işaret hatası yapma.',
    takeaway: 'Bilimsel gösterimde karşılaştırma, katsayı ve üs birlikte okunarak yapılır.',
  },
  quizzes: [
    { question: 'Aşağıdakilerden hangisi bilimsel gösterimdir?', options: ['0,72 × 10⁴', '7,2 × 10³', '72 × 10²', '10 × 10³'], answer_index: 1, explanation: 'Bilimsel gösterimde pozitif katsayı en az 1, 10’dan küçük olmalıdır. Bu koşulu yalnız 7,2 sağlar.', purpose: 'concept' },
    { question: '(-3)² ve -3² sırasıyla kaçtır?', options: ['9 ve -9', '-9 ve 9', '9 ve 9', '-9 ve -9'], answer_index: 0, explanation: 'İlk ifadede eksi tabanın içindedir: (-3)² = 9. İkincide üs yalnız 3’e uygulanır: -3² = -(3²) = -9.', purpose: 'error' },
    { question: '2⁻³ aşağıdakilerden hangisine eşittir?', options: ['-8', '-1/8', '1/8', '8'], answer_index: 2, explanation: 'Negatif üs sayının işaretini tersine çevirmez; tabanın kuvvetinin çarpmaya göre tersini aldırır. 2⁻³ = 1/2³ = 1/8.', purpose: 'apply' },
  ],
  finalFacts: [
    'Negatif tabanın çift kuvveti pozitif, tek kuvveti negatiftir; parantez dışındaki eksi üssün parçası değildir.',
    'a ≠ 0 için a⁰ = 1 ve a⁻ⁿ = 1/aⁿ.',
    'Aynı tabanlı çarpmada üsler toplanır; bölmede çıkarılır.',
    'Kuvvetin kuvvetinde üsler çarpılır; çarpımın ve bölümün kuvveti her çarpana uygulanır.',
    'Ondalık basamaklarda virgülün sağında 10⁻¹, 10⁻², 10⁻³… kullanılır.',
    'Bilimsel gösterimde 1 ≤ katsayı < 10; pozitif küçük sayılarda üs negatiftir.',
    'Bir dönüşümü büyüklük tahminiyle denetle; 0,000072 gibi sayı 7,2’den küçük kalmalıdır.',
  ],
  next: { body: 'Üslü yazımı asal çarpan ayrışımında kullan; sonra kareköklü ifadelerde tam kare çarpanları görmeyi dene.', topics: ['Kareköklü İfadeler'] },
})
