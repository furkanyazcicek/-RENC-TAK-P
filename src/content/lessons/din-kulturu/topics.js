import { createReligionLesson } from './factory.js'

function topic(config) {
  const concepts = config.concepts.map(([term, body, short, link]) => ({ term, body, short, link }))
  const [first, second] = concepts

  return createReligionLesson({
    ...config,
    concepts,
    title: config.title ?? `${config.topic}: Kavramları Ayır, Yorumu Yakala`,
    subtitle: config.subtitle ?? `${config.focus} Ezberden değil, kavramların sınırından ve metnin vurgusundan ilerle.`,
    lead: config.lead ?? `${config.focus} Bu başlıkta ilk iş, günlük dilde yakın görünen kavramların ders bağlamındaki sınırlarını ayırmaktır.`,
    intro: config.intro ?? `${config.focus}

TYT, çoğu zaman bu bilgiyi doğrudan “tanımı nedir?” diye sormaz. Kısa bir olay, ayet meali, hadis anlamı veya düşünce parçası verir; öğrenciden metnin dayandığı ilkeyi bulmasını ister. Bu nedenle metindeki eylem, amaç ve gerekçe birlikte okunmalıdır.`,
    why: config.why ?? {
      question: `${first.term} ile ${second.term} neden aynı şey değildir?`,
      body: `${first.term}, ${first.short.toLocaleLowerCase('tr-TR')} ${second.term} ise ${second.short.toLocaleLowerCase('tr-TR')} Bir soruda iki kavram birlikte bulunabilir; fakat metnin asıl vurgusu, davranışın hangi yönünü öne çıkardığına göre belirlenir.`,
    },
    outcomes: config.outcomes ?? [
      `${concepts.map((item) => item.term).join(', ')} kavramlarını sade biçimde açıklayabileceksin.`,
      `${config.compare.columns.join(' ve ')} arasındaki ayırıcı ölçütü söyleyebileceksin.`,
      'Kısa bir ayet/hadis anlamında veya yorum parçasında ana düşünceyi bulabileceksin.',
      'ÖSYM çeldiricilerindeki aşırı genelleme ve kavram kaydırmasını fark edebileceksin.',
    ],
    simpleLead: config.simpleLead ?? 'Konuyu bir zincir gibi düşün: doğru bilgi, anlamlı tercih ve davranışa yansıyan sonuç.',
    example: config.example ?? {
      title: 'Gündelik durumdan kavrama',
      body: config.exampleBody,
    },
    connection: config.connection ?? {
      body: `${config.topic}, inanç–ibadet–ahlak bütününün tek başına duran bir parçası değildir. Bilgi davranışı yönlendirir; davranış da değerin hayata yansımasını gösterir.`,
      links: config.links ?? concepts.slice(0, 4).map((item) => item.term),
    },
    interpretation: config.interpretation,
    next: config.next ?? {
      body: 'Bir sonraki başlığa geçerken kavramı tanımakla yetinme; her kavram için bir örnek ve bir karşı örnek kur.',
      topics: config.nextTopics ?? [],
    },
  })
}

const grade9 = [
  topic({
    slug: 'allah-insan-iliskisi',
    topic: 'Allah-İnsan İlişkisi',
    focus: 'İnsan; akıl, irade ve sorumluluk sahibi bir varlıktır; dua, tövbe ve ibadet bu ilişkinin bilinçli yönleridir.',
    concepts: [
      ['Fıtrat', 'İnsanın yaratılıştan getirdiği inanma, anlam arama ve iyiyi seçmeye elverişli temel yapıdır. Fıtrat, insanın otomatik olarak doğru davranacağı anlamına gelmez; akıl ve iradeyle geliştirilir.', 'Yaratılıştan gelen temel eğilim ve imkândır.', 'imkân verir'],
      ['İrade', 'İnsanın seçenekler arasında tercih yapabilme gücüdür. Sorumluluğun temelidir; zorunlu ve denetlenemeyen durumlar aynı biçimde değerlendirilmez.', 'Bilinçli tercih yapabilme gücüdür.', 'doğurur'],
      ['Sorumluluk', 'İnsanın özgürce yaptığı tercihlerinin sonucunu üstlenmesidir. Bilgi, niyet, güç yetirebilme ve özgürlük sorumluluğu etkiler.', 'Tercihin sonucunu üstlenmektir.', 'yönelir'],
      ['Dua', 'İnsanın Allah’a yönelmesi, isteğini ve ihtiyacını ifade etmesidir. Dua çalışmanın yerine geçen bir kaçış değil, çabayla birlikte anlam kazanan kulluk bilincidir.', 'Çabayla birlikte Allah’a yöneliştir.', 'güçlendirir'],
      ['Tövbe', 'Yanlışı fark edip pişman olmak, davranıştan vazgeçmek ve tekrar etmemeye yönelmektir. Sadece söz değil bilinçli dönüş iradesidir.', 'Yanlıştan bilinçli dönüş kararıdır.', 'onarır'],
    ],
    explanation: `Allah-insan ilişkisi tek yönlü bir bekleyiş olarak kurulmaz. İnsan bilgi edinir, düşünür, tercih eder ve davranır. İnanç, insanın hayatı anlamlandırmasına; ibadet, bu bağlılığı davranışla göstermesine; ahlak ise ilişkinin insanlara ve çevreye yansımasına yardım eder.

Akıl doğruyu araştırma imkânı, irade seçenekler arasında karar verme gücü, sorumluluk ise kararın sonucunu üstlenme yükümlülüğüdür. Dua ve tevekkül insanın çabasını değersizleştirmez. Tam tersine insan elinden geleni yaptıktan sonra sonucunun tüm ayrıntılarını kontrol edemeyeceğini kabul eder.`,
    exampleBody: 'Sınava hazırlanan bir öğrenci plan yapar, çalışır, eksiklerini tamamlar ve sonucu için dua eder. Burada çalışma **sorumluluk**, planlı tercih **irade**, dua ise Allah’a **yöneliş**tir. Yalnızca dua edip çalışmamak bu bütünlüğü bozardı.',
    compare: {
      title: 'İrade ↔ zorunluluk ↔ sorumluluk', columns: ['İrade', 'Zorunluluk', 'Sorumluluk'],
      rows: [
        { label: 'Temel ölçüt', values: ['Seçebilme vardır.', 'Seçim alanı yoktur ya da çok sınırlıdır.', 'Özgür tercihin sonucu üstlenilir.'] },
        { label: 'Örnek', values: ['Dürüst davranmayı seçmek', 'Doğum yeri veya kalıtsal özellik', 'Yalanın sonucundan hesap vermek'] },
        { label: 'Sınav ipucu', values: ['Tercih, niyet, karar', 'Kontrol dışı, elde olmayan', 'Hesap, görev, yükümlülük'] },
      ],
      insight: 'Sorumluluk, seçme imkânı ve güç yetirebilme ile ilişkilidir. Kontrol dışı özellikler ahlaki tercih gibi değerlendirilemez.',
    },
    trap: { title: 'Dua çabanın yerine geçmez', wrong: '“Dua eden kişinin tedbir almasına gerek yoktur.”', right: 'Dua, sorumluluğu ortadan kaldırmaz; çaba ve tedbirle birlikte anlam kazanır.', body: 'Metinde hem çalışma hem Allah’a yöneliş varsa iki kavramı rakip gibi düşünme.' },
    exam: { body: 'ÖSYM, insanın özgür tercih alanı ile kontrolü dışındaki durumları ayırmasını; dua, tövbe ve sorumluluğu davranış üzerinden yorumlamasını ölçer.', patterns: ['Metindeki fiillerden sorumluluk kavramını çıkarma', 'Dua–çaba bütünlüğünü yorumlama', 'İrade alanı ile zorunlu durumu ayırma'] },
    interpretation: { title: 'Yorum örneği: değişim nerede başlar?', prompt: 'Bir metin, toplumdaki dönüşümün insanların kendi tutumlarını değiştirmesiyle başladığını söylüyor. Ana vurgu nedir?', signal: 'Değişimin başlangıcı insanın tutum ve tercihine bağlanıyor.', match: 'İrade ve sorumluluk birlikte öne çıkar.', distractor: 'Metin sonucu bütünüyle insanın kontrolünde göstermiyor; duayı veya kaderi reddetmiyor.', answer: '**İnsan iradesi ve sorumluluğu.**', takeaway: '“Kendi durumunu değiştirme” vurgusu varsa edilgen bekleyiş değil bilinçli tercih aranır.' },
    spots: ['İrade seçme gücüdür; sorumluluk seçimin sonucunu üstlenmektir.', 'Dua ve çaba birbirinin alternatifi değildir.', 'Tövbe, sözden çok davranış yönünü değiştirmeyi gerektirir.', 'Fıtrat bir imkândır; insanın iradesini ortadan kaldırmaz.'],
    quiz: { question: 'Bir öğrenci çalışmadan yalnızca başarı dilemeyi “tevekkül” diye adlandırıyor. Temel hata nedir?', options: ['Duanın yalnızca topluca yapılacağını sanmak', 'Tevekkülü çaba ve tedbirden koparmak', 'İradeyi kaderle aynı saymak', 'Sorumluluğu yalnız başkalarına yüklemek'], answerIndex: 1, explanation: 'Tevekkül, gerekli çabayı gösterip tedbir aldıktan sonra Allah’a güvenmektir.' },
    nextTopics: ["İslam'da İnanç Esasları", 'Kader, İrade ve Sorumluluk'],
  }),

  topic({
    slug: 'islamda-inanc-esaslari', topic: "İslam'da İnanç Esasları",
    focus: 'İman esasları birbirinden kopuk maddeler değil, insanın varlık ve sorumluluk anlayışını kuran bir bütündür.',
    concepts: [
      ['İman', 'Allah’ın varlığı ve birliği başta olmak üzere İslam’ın temel inanç esaslarını kalben benimseme ve doğrulamadır. Davranışın anlam zeminini kurar.', 'İnanç esaslarını gönülden benimsemedir.', 'yansır'],
      ['Tevhid', 'Allah’ın tek ve eşsiz olduğuna, ibadetin yalnız O’na yöneltileceğine inanmadır. İslam inancının merkezidir.', 'Allah’ın bir ve eşsiz olması inancıdır.', 'temellendirir'],
      ['Melek', 'Duyularla doğrudan algılanmayan, Allah’ın emirlerini yerine getiren varlıklardır. Gayb alanına ilişkin iman esaslarındandır.', 'Gayb alanındaki görevli varlıklardır.', 'bildirilir'],
      ['Vahiy', 'Allah’ın peygamberlere bildirdiği ilahî mesajdır. İnsan aklını işlevsiz kılmaz; akla rehberlik eden bilgi kaynağıdır.', 'Peygamberlere bildirilen ilahî mesajdır.', 'açıklar'],
      ['Ahiret', 'Dünya hayatından sonra diriliş, hesap ve karşılık boyutunu içeren hayattır. İnsanın eylemlerini sorumluluk bilinciyle değerlendirmesine katkı sağlar.', 'Dünya sonrası hesap ve karşılık hayatıdır.', 'güçlendirir'],
    ],
    explanation: `İslam’da iman esasları Allah’a, meleklere, kitaplara, peygamberlere, ahirete ve kaderin Allah’ın bilgisi ve takdiriyle ilişkisine inanmayı kapsar. Bunlar yalnızca sayılacak başlıklar değildir. Tevhid varlık anlayışını, vahiy doğru bilgiyle ilişkiyi, peygamberlik örnekliği, ahiret ise sorumluluk ve hesap bilincini kurar.

İman ile amel aynı kavram değildir; fakat birbirinden bütünüyle kopuk da değildir. İnanç davranışa yön verir, davranış da inancın hayata yansımasını gösterebilir. Bir ayet yorumunda “hesap”, “karşılık”, “yeniden diriliş” vurguları ahirete; “ortak koşmama” vurgusu tevhide işaret eder.`,
    exampleBody: 'Kimsenin görmediği bir yerde haksızlıktan kaçınan kişi, yalnız toplumsal denetimi değil hesap ve sorumluluk bilincini de dikkate alıyorsa davranış **ahiret inancının ahlaka yansıması** olarak okunabilir.',
    compare: { title: 'İman ↔ amel', columns: ['İman', 'Amel'], rows: [{ label: 'Nedir?', values: ['Kalben benimseme ve doğrulama', 'Bilinçli davranış ve eylem'] }, { label: 'İlişki', values: ['Davranışa yön verir.', 'İnancın hayata yansımasını gösterebilir.'] }, { label: 'Aynı mı?', values: ['Amel değildir.', 'İmanın tanımı değildir.'] }], insight: 'Ayrı kavramlardır; fakat sınavda çoğunlukla inancın davranışa etkisi üzerinden ilişkilendirilir.' },
    trap: { title: 'İman esaslarını yalnız liste sanmak', wrong: '“Ahirete iman yalnız gelecekle ilgili bir bilgidir.”', right: 'Ahiret inancı, dünya hayatındaki tercih ve sorumluluk anlayışını etkiler.', body: 'Soruda bir inancın bireysel veya toplumsal sonucu sorulabilir.' },
    exam: { body: 'ÖSYM, iman esaslarının tanımından çok insanın anlam, güven, sorumluluk ve davranış dünyasına etkisini ölçer.', patterns: ['Tevhid vurgusunu ortak koşmama ifadesinden bulma', 'Ahiret inancını hesap ve karşılık düşüncesiyle eşleştirme', 'Vahiy ile aklı rakip göstermeyen seçeneği bulma'] },
    interpretation: { title: 'Yorum örneği: görünmeyen denetim', prompt: 'Metin, insanın yaptığı her davranışın kayda geçtiğini ve karşılığının bulunduğunu vurguluyor. Hangi inanç öne çıkar?', signal: 'Kayıt, hesap ve karşılık ifadeleri var.', match: 'Ahiret inancı sorumlulukla ilişkilendiriliyor.', distractor: 'Melek kelimesi geçebilse de ana vurgu onların yaratılışı değil hesap bilincidir.', answer: '**Ahiret inancı ve sorumluluk bilinci.**', takeaway: 'Soruda geçen her kavram ana cevap değildir; metnin sonucunu taşıyan düşünceyi seç.' },
    spots: ['Tevhid İslam inancının merkezidir.', 'Vahiy aklı dışlamaz; ona rehberlik eder.', 'Ahiret inancı dünya sorumluluğunu güçlendirir.', 'İman ve amel aynı değildir, ilişkilidir.'],
    quiz: { question: '“İnsan yaptığının karşılıksız kalmayacağını bilir.” cümlesi öncelikle hangi inancın davranışa etkisidir?', options: ['Meleklere iman', 'Kitaplara iman', 'Ahirete iman', 'Peygamberlere iman'], answerIndex: 2, explanation: 'Karşılık ve hesap vurgusu doğrudan ahiret inancına bağlanır.' },
    nextTopics: ["İslam'da İbadetler", 'Kader, İrade ve Sorumluluk'],
  }),

  topic({
    slug: 'islamda-ibadetler', topic: "İslam'da İbadetler",
    focus: 'İbadet; bilinç, niyet ve davranış bütünüdür; biçimsel uygulamalar ahlaki amaçlarından koparılmaz.',
    concepts: [
      ['İbadet', 'Allah’ın rızasını gözeterek yapılan kulluk davranışlarının genel adıdır. Namaz, oruç, zekât ve hac temel ibadetlerdir; iyi ve yararlı davranışlar da niyetle ibadet değeri kazanabilir.', 'Kulluk bilincinin davranışa dönüşmesidir.', 'gerektirir'],
      ['Niyet', 'Davranışın hangi amaçla yapıldığını belirleyen bilinçli yöneliştir. Aynı görünen iki davranışın ahlaki ve dinî değerini etkileyebilir.', 'Davranışın bilinçli amacıdır.', 'şekillendirir'],
      ['Farz', 'Yapılması kesin ve bağlayıcı delille istenen davranıştır. Yerine getirilmesi zorunlu kabul edilir.', 'Kesin delille yapılması istenendir.', 'ayrılır'],
      ['Vacip', 'Hanefi terminolojisinde yapılması güçlü biçimde istenen, fakat delili farz kadar kesin olmayan davranıştır.', 'Güçlü fakat farzdan farklı delille istenendir.', 'ayrılır'],
      ['Sünnet', 'Hz. Muhammed’in söz, davranış ve onaylarıyla ortaya koyduğu örnekliktir. Farz veya vaciple aynı hüküm düzeyinde değildir.', 'Peygamberin örnekliğidir.', 'rehberlik eder'],
    ],
    explanation: `İbadetin iki yönü vardır: Allah’a yöneliş ve insanın davranışını dönüştürme. Namaz bilinç ve disiplin, oruç irade ve öz denetim, zekât paylaşma ve sosyal adalet, hac birlik ve eşitlik bilinciyle ilişkilendirilebilir. Bu sonuçlar ibadetin yerine geçen ayrı hedefler değil, onun hayata yansıyan yönleridir.

Farz, vacip ve sünnet “önemli davranışlar” ortak paydasında buluşsa da hüküm ve dayanak bakımından aynı değildir. TYT’de ayrım genellikle ayrıntılı fıkıh tartışmasıyla değil, temel tanım ve örnek üzerinden sorulur.`,
    exampleBody: 'Oruç tutan birinin açlığı yalnız bedensel bir durum olarak yaşamayıp yoksulun hâlini anlaması, kırıcı sözden kaçınması ve iradesini yönetmesi ibadetin **ahlaki gelişime katkısını** gösterir.',
    compare: { title: 'Farz ↔ vacip ↔ sünnet', columns: ['Farz', 'Vacip', 'Sünnet'], rows: [{ label: 'Dayanak', values: ['Kesin ve bağlayıcı delil', 'Güçlü fakat kesinlik derecesi farklı delil', 'Hz. Peygamberin örnekliği'] }, { label: 'Hüküm düzeyi', values: ['Yapılması zorunlu', 'Yapılması güçlü biçimde gerekli', 'Uyulması önerilen örneklik'] }, { label: 'Örnek', values: ['Beş vakit namaz, ramazan orucu', 'Vitir ve bayram namazı (Hanefi)', 'Farz namazların sünnetleri'] }], insight: 'Üçü “aynı şeyin farklı adı” değildir. Ayrım, istenme derecesi ve dayanağın niteliğindedir.' },
    extraComparisons: [{
      title: 'Zekât ↔ sadaka', columns: ['Zekât', 'Sadaka'],
      rows: [
        { label: 'Hüküm', values: ['Mali bir farzdır.', 'Gönüllü yardımın geniş adıdır.'] },
        { label: 'Ölçü ve şart', values: ['Belirli mal, oran, yeterlilik ve hak sahipleriyle ilgili şartları vardır.', 'Belirli bir asgari mal veya oran şartına bağlı değildir.'] },
        { label: 'Kapsam', values: ['Maddi ibadettir.', 'Maddi yardımın yanında güzel söz ve yararlı davranışları da kapsayabilir.'] },
      ],
      insight: 'Her zekât paylaşmadır ve sadaka niteliği taşır; fakat her sadaka zekâtın şartlarını taşımaz.',
    }],
    trap: { title: 'İbadeti yalnız biçime indirmek', wrong: '“İbadetin toplumsal ve ahlaki hiçbir sonucu yoktur.”', right: 'İbadet kulluk amacı taşırken öz denetim, dayanışma ve sorumluluk gibi sonuçlar da doğurur.', body: 'ÖSYM biçim–amaç ilişkisini kuran seçeneği arar.' },
    exam: { body: 'ÖSYM; ibadetlerin ortak amacını, bireysel/toplumsal katkısını ve temel hüküm kavramlarının sınırını yorumlatır.', patterns: ['Oruç–irade, zekât–dayanışma ilişkisi', 'Niyetin davranışın değerine etkisi', 'Farz, vacip ve sünnetin aynı olmadığını fark etme'] },
    interpretation: { title: 'Yorum örneği: ibadetin davranışa etkisi', prompt: 'Bir metin, ibadetin insanı kötülükten uzaklaştırması gerektiğini vurguluyor. Ana düşünce nedir?', signal: 'İbadet ile ahlaki davranış arasında sonuç ilişkisi kuruluyor.', match: 'İbadetin ahlaki gelişime katkısıdır.', distractor: 'Metin ibadetin yalnız toplumsal yardım olduğunu söylemiyor.', answer: '**İbadet, insanın ahlakına ve davranışına yansımalıdır.**', takeaway: 'İbadetin şeklini değil dönüştürücü amacını soran metinlerde ahlak bağlantısını ara.' },
    spots: ['İbadet niyet ve bilinçle anlam kazanır.', 'İbadetlerin bireysel ve toplumsal yönleri vardır.', 'Farz, vacip ve sünnet aynı hüküm düzeyinde değildir.', 'Niyet, davranışın amacını belirler.'],
    quiz: { question: 'Zekâtın toplumsal sonucu aşağıdakilerden hangisidir?', options: ['Yalnız bireysel sabır', 'Sosyal dayanışma ve paylaşma', 'Bilgi kaynaklarını sınıflandırma', 'İrade alanını daraltma'], answerIndex: 1, explanation: 'Zekât, servetin paylaşımı ve ihtiyaç sahibinin gözetilmesi yoluyla dayanışmayı güçlendirir.' },
    nextTopics: ["İslam'da Ahlak İlkeleri", "İslam'ın Evrensel Mesajları"],
  }),

  topic({
    slug: 'islamda-ahlak-ilkeleri', topic: "İslam'da Ahlak İlkeleri",
    focus: 'Ahlak; niyet, irade, davranış ve sorumluluğun tutarlı birlikteliğidir.',
    concepts: [
      ['Ahlak', 'İnsanın iyi-kötü hakkındaki ölçülerinin ve bunlara dayanan tutum ve davranışlarının bütünüdür. Yalnız bilgi değil süreklilik kazanan karakter ve eylemdir.', 'İyiye yönelten ölçü, tutum ve davranış bütünüdür.', 'yönelir'],
      ['Takva', 'Allah’a karşı sorumluluk bilinci taşıyarak kötülükten sakınma ve iyiliğe yönelmedir. Yalnız korku değil bilinçli duyarlılıktır.', 'Allah’a karşı bilinçli sorumluluk duyarlılığıdır.', 'güçlendirir'],
      ['Adalet', 'Hak sahibine hakkını vermek, ölçülü ve dengeli davranmaktır. Herkese mekanik olarak aynı şeyi vermek her zaman adalet değildir.', 'Hakkı gözeten ölçü ve dengedir.', 'korur'],
      ['İhsan', 'İyiliği güzel, özenli ve karşılık beklemeden yapma bilincidir. Asgari görevin ötesinde nitelikli iyiliği ifade eder.', 'İyiliği özenle ve güzellikle yapmaktır.', 'tamamlar'],
      ['İffet', 'İstek ve davranışlarda ölçülü olmak, insan onurunu ve sınırları korumaktır. Yalnız belirli bir davranış alanına indirgenmez.', 'İstek ve davranışta ölçülülüktür.', 'korur'],
    ],
    explanation: `Ahlaki davranış yalnız sonuca bakılarak değerlendirilmez; niyet, yöntem, hak ve sorumluluk da önemlidir. Adalet hakkı gözetir, ihsan iyiliğin niteliğini yükseltir, takva insanın görünür denetim olmasa da sorumluluk bilinci taşımasını sağlar.

Bir ayet veya hadis yorumunda “ölçü-tartı”, “hak”, “emanet” ve “taraf tutmama” ifadeleri adalete; “gizli-açık sakınma” takvaya; “karşılıksız ve güzel davranma” ihsana işaret edebilir. Tek kelimeye değil, metnin bütününe bakılır.`,
    exampleBody: 'İki kişi arasında karar verirken akrabasını kayırmayan biri **adalet** ilkesini; kimse görmese de haksızlıktan kaçınması **takva** bilincini; bunu kırmadan ve özenle yapması **ihsanı** gösterir.',
    compare: { title: 'Adalet ↔ eşitlik ↔ ihsan', columns: ['Adalet', 'Eşitlik', 'İhsan'], rows: [{ label: 'Ölçüt', values: ['Hakkı ve ihtiyacı gözetir.', 'Aynı durumda aynı muameleyi öne çıkarır.', 'İyiliği daha güzel yapmayı öne çıkarır.'] }, { label: 'Her zaman aynı mı?', values: ['Eşit dağıtım bazen adaletsiz olabilir.', 'Adaletin araçlarından biri olabilir.', 'Zorunlu asgari sınırın ötesine geçebilir.'] }, { label: 'Anahtar', values: ['Hak ve denge', 'Aynılık', 'Özen ve güzellik'] }], insight: 'Adalet her durumda herkese aynı şeyi vermek değil, hakka uygun davranmaktır.' },
    trap: { title: 'Ahlakı yalnız niyet sanmak', wrong: '“Niyetim iyiyse kullandığım yöntemin ve sonucun önemi yoktur.”', right: 'Ahlaki değerlendirmede niyet kadar yöntem, hak ve sorumluluk da önemlidir.', body: 'İyi amaç, haksız aracı kendiliğinden meşru kılmaz.' },
    exam: { body: 'ÖSYM, kısa bir davranış örneğinde hangi ahlaki ilkenin belirleyici olduğunu ve yakın değerlerin hangi ölçütle ayrıldığını ölçer.', patterns: ['Hak ve ölçü vurgusundan adaleti çıkarma', 'Gösterişsiz sorumluluk bilincini takvayla eşleştirme', 'İyi niyet–doğru yöntem bütünlüğünü yorumlama'] },
    interpretation: { title: 'Yorum örneği: yakına karşı da ölçü', prompt: 'Bir metin, kişinin kendisi veya yakını aleyhine olsa bile doğru şahitlikten ayrılmamasını ister. Ana ilke nedir?', signal: 'Yakınlık ve çıkar karşısında hakkın korunması isteniyor.', match: 'Adalet ve doğruluk öne çıkar.', distractor: 'Metnin ana konusu yardımseverlik veya cesaret değildir; bunlar eşlik edebilir.', answer: '**Adalet.**', takeaway: 'Taraf tutmama, hak ve doğru şahitlik aynı eksende birleşir.' },
    spots: ['Takva bilinçli sorumluluk ve sakınmadır.', 'Adalet her zaman mekanik eşitlik değildir.', 'İhsan iyiliği güzel ve özenli yapmaktır.', 'Ahlak bilgi, niyet ve davranış bütünlüğüdür.'],
    quiz: { question: 'İhtiyaçları farklı iki kişiye haklarına uygun farklı destek verilmesi hangi kavramla en iyi açıklanır?', options: ['Mekanik eşitlik', 'Adalet', 'Tedbirsizlik', 'Taklit'], answerIndex: 1, explanation: 'Adalet, herkese aynı şeyi vermekten çok hak ve ihtiyata uygun ölçüyü gözetir.' },
    nextTopics: ["İslam'ın Evrensel Mesajları", 'Din ve Aile'],
  }),

  topic({
    slug: 'kurana-gore-hz-muhammed', topic: "Kur'an'a Göre Hz. Muhammed",
    focus: 'Hz. Muhammed’in beşerî yönü ile peygamberlik görevi ayrılır; örnekliği vahyi yaşama biçiminde görülür.',
    concepts: [
      ['Beşer', 'Hz. Muhammed’in insan oluşunu; yaşaması, sevinmesi, üzülmesi, karar vermesi gibi insani özelliklerini ifade eder.', 'Hz. Muhammed’in insan oluşudur.', 'birlikte taşır'],
      ['Resul', 'Allah’tan aldığı vahyi insanlara tebliğ eden peygamberdir. Bu görev onun vahiy alma ve bildirme yönünü açıklar.', 'Vahyi bildiren elçidir.', 'gerçekleştirir'],
      ['Tebliğ', 'İlahî mesajı insanlara doğru, açık ve eksiltmeden iletme görevidir.', 'Vahyi doğru biçimde bildirmedir.', 'açıklar'],
      ['Tebyin', 'Vahyin anlamını açıklama ve nasıl yaşanacağını gösterme görevidir.', 'Vahyi açıklama ve uygulamayla göstermedir.', 'oluşturur'],
      ['Üsve-i hasene', 'Hz. Muhammed’in inanç, ibadet ve ahlakta güzel örnek oluşunu ifade eder. Örnek alma, tarihsel biçimleri körü körüne kopyalamak değil temel ilkeyi kavramaktır.', 'Güzel ve yol gösterici örnekliktir.', 'rehberlik eder'],
    ],
    explanation: `Kur’an, Hz. Muhammed’i ilah olarak değil Allah’ın kulu ve elçisi olarak tanıtır. Beşerî yönü onun insanlar için anlaşılabilir ve uygulanabilir bir örnek olmasını sağlar. Peygamberlik yönü ise vahyi alma, tebliğ etme, açıklama ve yaşama görevlerini kapsar.

Onu örnek almak, her tarihsel ayrıntıyı biçimsel olarak tekrarlamak değil; adalet, merhamet, istişare, sabır, güvenilirlik ve sorumluluk gibi ilkeleri yeni durumlarda yaşatmaktır.`,
    exampleBody: 'Bir anlaşmazlıkta tarafları dinlemek ve karar öncesi danışmak, Hz. Muhammed’in yaptığı belirli bir olayı ezberlemekten öte **istişare ve adalet ilkesini** örnek almaktır.',
    compare: { title: 'Beşerî yön ↔ peygamberlik yönü', columns: ['Beşerî yön', 'Peygamberlik yönü'], rows: [{ label: 'Temel', values: ['İnsan oluşu ve insani yaşantısı', 'Vahiy alma ve elçilik görevi'] }, { label: 'Örnek', values: ['Sevinme, üzülme, danışma, çalışma', 'Tebliğ, tebyin, örnek olma'] }, { label: 'Yanlış çıkarım', values: ['“İnsan olduğu için örnek olamaz.” yanlıştır.', '“Peygamber olduğu için insanüstü ilahî varlıktır.” yanlıştır.'] }], insight: 'İki yön birbirini dışlamaz; beşer oluşu örnekliğini erişilebilir kılar, risalet görevi vahye dayalı rehberliğini açıklar.' },
    trap: { title: 'Örnekliği biçim taklidine indirmek', wrong: '“Örnek almak, tarihsel şartları düşünmeden her ayrıntıyı aynen tekrarlamaktır.”', right: 'Örnek almak, davranışın arkasındaki evrensel ilkeyi anlayıp bugüne taşımaktır.', body: 'ÖSYM çoğu zaman biçim değil ilke aktarımını sorar.' },
    exam: { body: 'ÖSYM; beşer–peygamber ayrımını, tebliğ–tebyin görevlerini ve örnekliğin ahlaki ilke olarak bugüne taşınmasını ölçer.', patterns: ['Vahyi bildirme ile açıklamayı ayırma', 'İnsan oluşundan örnek alınabilirlik sonucu çıkarma', 'Merhamet, istişare ve güvenilirliği sünnetin amacıyla ilişkilendirme'] },
    interpretation: { title: 'Yorum örneği: elçinin görevi', prompt: 'Bir metin, peygamberin insanlara iletilen mesajı açıklayıp yaşayarak gösterdiğini söylüyor. Hangi iki görev öne çıkar?', signal: 'Hem bildirme hem açıklayıp uygulama vardır.', match: 'Tebliğ ve tebyin birlikte kullanılır.', distractor: 'Yalnız “vahiy alma” cevabı açıklama boyutunu eksik bırakır.', answer: '**Tebliğ ve tebyin.**', takeaway: 'İletmek tebliğ, anlamını ve uygulamasını göstermek tebyindir.' },
    spots: ['Hz. Muhammed kul ve elçidir.', 'Beşerî yön ile peygamberlik görevi birlikte değerlendirilir.', 'Tebliğ bildirme, tebyin açıklamadır.', 'Örnekliğin özü ahlaki ve dinî ilkeleri yaşatmaktır.'],
    quiz: { question: 'Hz. Muhammed’in bir ayetin nasıl uygulanacağını göstermesi hangi görevidir?', options: ['Tebyin', 'Tevekkül', 'İcma', 'Takva'], answerIndex: 0, explanation: 'Tebyin, vahyi açıklama ve uygulamayla gösterme görevidir.' },
    nextTopics: ['Kur’an-ı Kerim', "İslam'ın Evrensel Mesajları"],
  }),
]

const grade10 = [
  topic({
    slug: 'islamda-varlik-ve-bilgi', topic: "İslam'da Varlık ve Bilgi",
    focus: 'İslam’da doğru bilgi duyular, akıl ve vahiy üzerinden değerlendirilir; kaynaklar rakip değil farklı alanları aydınlatan imkânlardır.',
    concepts: [
      ['Doğru haber', 'Gerçeğe uygun ve güvenilir kaynaktan gelen haberdir. Vahiy, İslam düşüncesinde kesin doğru haberin temel örneğidir.', 'Güvenilir kaynaktan gelen gerçeğe uygun bilgidir.', 'değerlendirilir'],
      ['Salim duyu', 'Görme ve işitme gibi duyuların sağlıklı koşullarda sağladığı bilgidir. Yanılabileceği için akıl ve doğrulama ile değerlendirilir.', 'Sağlıklı işleyen duyuların bilgisidir.', 'işlenir'],
      ['Selim akıl', 'Önyargı ve tutarsızlıktan uzak, doğru düşünebilen akıldır. Verileri ilişkilendirir, sonuç çıkarır ve haberin güvenilirliğini sorgular.', 'Tutarlı ve sağlıklı düşünme yetisidir.', 'anlamlandırır'],
      ['Vahiy', 'Allah’ın peygamberlere bildirdiği ilahî bilgidir. Duyuların ulaşamadığı inanç ve değer alanlarında rehberlik eder.', 'İlahî rehberlik bilgisidir.', 'rehberlik eder'],
      ['Gayb', 'Duyularla doğrudan bilinmeyen varlık ve olay alanıdır. Gayba ilişkin dinî bilgi vahye dayanır; tahmin kesin bilgi sayılmaz.', 'Duyu ötesi bilinmeyen alandır.', 'bildirilir'],
    ],
    explanation: `Bilgi kaynaklarının alanları farklıdır. Duyu dış dünyadan veri sağlar; akıl veriyi düzenler, ilişki kurar ve çıkarım yapar; doğru haber kişinin doğrudan gözlemlemediği şeyleri güvenilir biçimde öğrenmesini sağlar. Vahiy, insanın yalnız deneyle ulaşamayacağı dinî ve ahlaki alanlarda rehberlik eder.

Bu yaklaşım akıl ile vahyi karşıt saymaz. Aklın görevi düşünmek, delili değerlendirmek ve anlamaktır. Her duyum doğru, her haber güvenilir, her akıl yürütme tutarlı değildir; bu yüzden doğrulama gerekir.`,
    exampleBody: 'Bir öğrenci gökyüzünü gözlemler (**duyu**), düzen hakkında çıkarım yapar (**akıl**) ve peygamberlerin bildirdiği yaratılış amacını öğrenir (**vahiy/doğru haber**). Kaynaklar farklı sorulara cevap verir.',
    compare: { title: 'Duyu ↔ akıl ↔ doğru haber', columns: ['Salim duyu', 'Selim akıl', 'Doğru haber'], rows: [{ label: 'İşlev', values: ['Veri sağlar.', 'Veriyi işler ve sonuç çıkarır.', 'Doğrudan gözlenmeyen güvenilir bilgiyi taşır.'] }, { label: 'Sınır', values: ['Yanılabilir ve alanı sınırlıdır.', 'Yanlış öncülle yanlış sonuca gidebilir.', 'Kaynağın güvenilirliği araştırılır.'] }, { label: 'Dinî örnek', values: ['Yaratılmış varlıkları gözlem', 'Deliller üzerine düşünme', 'Vahyin bildirimi'] }], insight: 'Kaynaklar birbirini gereksiz kılmaz; doğru bilgi için çoğu zaman birlikte çalışırlar.' },
    trap: { title: 'Akıl ile vahyi rakip görmek', wrong: '“Vahiy varsa düşünmeye gerek yoktur; akıl varsa vahye gerek yoktur.”', right: 'İslam düşüncesinde akıl anlamlandırır ve değerlendirir, vahiy rehberlik eder; alanları ve işlevleri farklıdır.', body: 'Soruda “birlikte değerlendirme” vurgusunu kaçırma.' },
    exam: { body: 'ÖSYM; bilgi kaynağını verilen olaydan bulmayı, kaynakların sınırlarını ve vahiy–akıl ilişkisini yorumlamayı ölçer.', patterns: ['Gözlemden duyuyu, çıkarımdan aklı bulma', 'Güvenilir haber ile söylentiyi ayırma', 'Gayb bilgisinin vahye dayandığını fark etme'] },
    interpretation: { title: 'Yorum örneği: bakmak yetmez', prompt: 'Metin, göklerdeki düzene bakmayı ve bunun üzerinde düşünmeyi birlikte istiyor. Hangi kaynaklar öne çıkar?', signal: 'Hem gözlem hem düşünme fiilleri vardır.', match: 'Salim duyu ve selim akıl birlikte çalışır.', distractor: 'Yalnız duyuyu seçmek “düşünme” bölümünü eksik bırakır.', answer: '**Salim duyu ve selim akıl.**', takeaway: 'Metindeki her fiili ayrı bir bilgi işlevi olarak izle.' },
    spots: ['Duyu veri sağlar, akıl işler.', 'Doğru haber güvenilir olmalıdır.', 'Gayb hakkında dinî bilgi vahye dayanır.', 'Akıl ve vahiy birbirini dışlamaz.'],
    quiz: { question: 'Bir haberi kaynağına, tutarlılığına ve kanıtlarına göre sorgulamak en çok hangi bilgi imkânını kullanır?', options: ['Selim akıl', 'Salim duyu', 'Taklit', 'Sezgi'], answerIndex: 0, explanation: 'Tutarlılık ve kanıt değerlendirmesi aklın işlevidir.' },
    nextTopics: ["Allah'ı Tanımak", 'Kur’an-ı Kerim'],
  }),

  topic({
    slug: 'allahi-tanimak', topic: "Allah'ı Tanımak",
    focus: 'Allah’ın varlığı ve birliği; evrendeki düzen, yaratılış, insanın anlam arayışı ve vahyin rehberliği üzerinden temellendirilir.',
    concepts: [
      ['Tevhid', 'Allah’ın bir, eşsiz ve ortaksız olması inancıdır. İsim ve sıfatların anlaşılmasında merkez ölçüdür.', 'Allah’ın birliği inancıdır.', 'açıklanır'],
      ['Esma-i hüsna', 'Allah’ın güzel isimleridir. Rahman, Rahîm, Alîm, Kadir gibi isimler Allah’ı tanımaya yardımcı olur; insan özellikleriyle bire bir özdeşleştirilmez.', 'Allah’ı tanıtan güzel isimlerdir.', 'gösterir'],
      ['Kozmolojik delil', 'Evrendeki varlıkların sonradan oluşu, değişmesi ve bir nedene dayanması üzerinden ilk yaratıcıya ulaşan akıl yürütmedir.', 'Varlık ve nedensellikten yaratıcıya gider.', 'destekler'],
      ['Teleolojik delil', 'Evrendeki düzen, ölçü, uyum ve amaçlılıktan hareketle bilinçli yaratıcı sonucuna yönelen delildir.', 'Düzen ve amaçtan yaratıcıya gider.', 'destekler'],
      ['Fıtrat delili', 'İnsanın inanma, anlam arama ve aşkın olana yönelme eğilimini Allah inancıyla ilişkilendiren yaklaşımdır.', 'İnsanın yaratılıştan yönelişine dayanır.', 'yönelir'],
    ],
    explanation: `Allah’ı tanımak, O’nu bir varlığa benzetmek değil isim ve sıfatlarının gösterdiği anlamları kavramaktır. İlim her şeyi bilmesini, kudret her şeye gücünün yetmesini, rahmet merhametini ifade eder. Bu sıfatlar tevhid ilkesi içinde düşünülür.

Deliller ezberlenecek adlar değildir. Metin “başlangıç ve neden” soruyorsa kozmolojik; “ölçü, uyum ve amaç” vurguluyorsa teleolojik; “insanın içten yönelişi ve anlam arayışı” öne çıkıyorsa fıtrat delili aranır.`,
    exampleBody: 'Bir metin, canlılardaki sistemlerin uyumlu işlemesinden ve evrendeki ölçüden hareketle yaratıcı sonucuna gidiyorsa **teleolojik delili** kullanır.',
    compare: { title: 'Kozmolojik ↔ teleolojik ↔ fıtrat delili', columns: ['Kozmolojik', 'Teleolojik', 'Fıtrat'], rows: [{ label: 'Başlangıç noktası', values: ['Varlık, değişim, neden', 'Düzen, ölçü, amaç', 'İnsanın inanma ve anlam eğilimi'] }, { label: 'Soru kalıbı', values: ['“Neden var?”', '“Nasıl bu kadar uyumlu?”', '“İnsan neden aşkını arar?”'] }, { label: 'Ortak sonuç', values: ['Yaratıcı fikrine yönelir.', 'Yaratıcı fikrine yönelir.', 'Yaratıcı fikrine yönelir.'] }], insight: 'Sonuçları yakın, hareket noktaları farklıdır. ÖSYM metindeki başlangıç noktasını ölçer.' },
    trap: { title: 'Düzen delilini nedensellikle karıştırmak', wrong: '“Düzen ve uyumdan söz eden her metin kozmolojik delildir.”', right: 'Düzen ve amaç teleolojik; varlığın başlangıcı ve neden ihtiyacı kozmolojik delile işaret eder.', body: 'Anahtar sözcük değil akıl yürütmenin yönünü izle.' },
    exam: { body: 'ÖSYM, bir paragrafın hangi delil türünü kullandığını ve Allah’ın isim/sıfatlarının insan hayatındaki anlamını ölçer.', patterns: ['Düzen–amaç metninden teleolojik delili bulma', 'Neden ve başlangıçtan kozmolojik delile gitme', 'Esma-i hüsnayı davranış ilkesiyle ilişkilendirme'] },
    interpretation: { title: 'Yorum örneği: ölçü ve uyum', prompt: 'Metin, gece-gündüz döngüsü ile canlı yaşamı arasındaki dengeden hareket ediyor. Hangi delil öne çıkar?', signal: 'Düzen, denge ve uyum vurgulanıyor.', match: 'Teleolojik delil kullanılıyor.', distractor: 'Metin ilk neden veya varlığın başlangıcını tartışmıyor.', answer: '**Teleolojik (gaye ve nizam) delil.**', takeaway: 'Düzen ve amaç varsa teleolojik eksene bak.' },
    spots: ['Tevhid, Allah’ın birliği ve eşsizliğidir.', 'Esma-i hüsna Allah’ı tanımaya yardımcı olur.', 'Kozmolojik delil neden ve başlangıçtan ilerler.', 'Teleolojik delil düzen ve amaçtan ilerler.'],
    quiz: { question: 'İnsanın doğuştan anlam arayışından hareket eden yaklaşım hangisidir?', options: ['Teleolojik delil', 'Fıtrat delili', 'Kozmolojik delil', 'Tarihî delil'], answerIndex: 1, explanation: 'Fıtrat delili insanın yaratılıştan gelen inanma ve anlam arama yönelişini esas alır.' },
    nextTopics: ["İslam'ın Evrensel Mesajları", 'İnançla İlgili Meseleler'],
  }),

  topic({
    slug: 'islamin-evrensel-mesajlari', topic: "İslam'ın Evrensel Mesajları",
    focus: 'Adalet, eşitlik, barış, insan onuru ve hakların korunması evrensel mesajların yorum eksenidir.',
    concepts: [
      ['Adalet', 'Hakları koruma, ölçülü davranma ve karar verirken kişisel çıkarı aşma ilkesidir.', 'Hak ve ölçüyü gözetmektir.', 'korur'],
      ['Eşitlik', 'İnsanların temel değer ve hukuk karşısında ayrımcılığa uğramamasıdır. Her durumda aynı işlem yapmakla özdeş değildir.', 'Temel değer ve haklarda ayrım yapmamaktır.', 'destekler'],
      ['Barış', 'Çatışmasızlığın ötesinde güven, hak ve karşılıklı saygının korunduğu toplumsal durumdur.', 'Güven ve hak temelli birlikte yaşamdır.', 'güçlenir'],
      ['Kul hakkı', 'Başkasının canı, malı, emeği, onuru ve diğer haklarına karşı sorumluluğu ifade eder.', 'Başkasının hakkına karşı sorumluluktur.', 'gerektirir'],
      ['Emanet', 'Korunması ve gereği yerine getirilmesi kişiye bırakılan maddi veya manevi sorumluluktur.', 'Korunması gereken maddi-manevi sorumluluktur.', 'yükler'],
    ],
    explanation: `Evrensellik, bir ilkenin belirli bir gruba veya zamana değil insan olmanın ortak değerine seslenmesidir. Canın, aklın, neslin, malın ve inancın korunması; adalet, merhamet, güven ve barış bu çerçevede okunabilir.

Barış adaletten kopuk düşünülmez. Hakların sistemli biçimde çiğnendiği bir sessizlik gerçek barış sayılmaz. Eşitlik de herkese koşulsuz aynı şeyi vermek değil, insan onuru ve temel haklarda ayrımcılığı reddetmektir.`,
    exampleBody: 'Bir kamu görevlisinin tanıdığına ayrıcalık vermemesi **adalet ve eşitlik**, kendisine bırakılan yetkiyi kamu yararına kullanması **emanet**, insanların hakkını çiğnememesi **kul hakkı** ile ilgilidir.',
    compare: { title: 'Adalet ↔ eşitlik ↔ barış', columns: ['Adalet', 'Eşitlik', 'Barış'], rows: [{ label: 'Merkez', values: ['Hak ve ölçü', 'Ayrımcılık yapmama', 'Güvenli birlikte yaşam'] }, { label: 'Birbirine etkisi', values: ['Eşitlik ve barışı temellendirir.', 'Adil düzeni destekler.', 'Adalet olmadan kalıcılaşmaz.'] }, { label: 'Yanlış eşleme', values: ['Her zaman aynılık değildir.', 'Her ihtiyaca aynı cevap değildir.', 'Yalnız çatışmanın susması değildir.'] }], insight: 'Üç kavram birbirine bağlıdır; fakat metnin merkezindeki sorunu belirleyerek ana cevabı seçmelisin.' },
    trap: { title: 'Barışı pasif sessizlik sanmak', wrong: '“Haksızlığa ses çıkmıyorsa barış vardır.”', right: 'Kalıcı barış hak, adalet ve güvenin korunmasını gerektirir.', body: 'Metin haksızlığa rağmen sessizliği eleştiriyorsa adalet–barış ilişkisini arar.' },
    exam: { body: 'ÖSYM; evrensel ilkeyi somut durumdan çıkarmayı, haklar arasındaki ilişkiyi ve ayrımcı genellemeleri elemeyi ölçer.', patterns: ['Emanet ve kul hakkını kamu sorumluluğuyla eşleştirme', 'Adalet ile mekanik eşitliği ayırma', 'Barışın adaletle bağını yorumlama'] },
    interpretation: { title: 'Yorum örneği: farklılığa rağmen hak', prompt: 'Metin, bir topluluğa duyulan öfkenin kişiyi haksızlığa yöneltmemesi gerektiğini söylüyor. Ana ilke nedir?', signal: 'Duyguya rağmen hakkı koruma isteniyor.', match: 'Adalet, tarafsızlık ve öz denetim öne çıkar.', distractor: 'Ana vurgu sevgi duymak değil, haksızlık yapmamaktır.', answer: '**Adalet.**', takeaway: 'Kişisel duyguya rağmen ölçüyü koruma, adaletin güçlü işaretidir.' },
    spots: ['Evrensel ilke insan onurunu ve ortak hakları gözetir.', 'Barış adalet ve güvenle kalıcı olur.', 'Emanet yalnız maddi eşya değildir.', 'Kul hakkı can, mal, emek ve onuru kapsar.'],
    quiz: { question: 'Bir yöneticinin yetkisini kişisel çıkarı için kullanmaması öncelikle hangi iki kavramla ilgilidir?', options: ['Emanet ve adalet', 'Fıtrat ve vahiy', 'Kaza ve kader', 'Sünnet ve vacip'], answerIndex: 0, explanation: 'Yetki bir emanettir; onu hak gözeterek kullanmak adalet gereğidir.' },
    nextTopics: ['Din ve Aile', 'Güncel Dinî Meseleler'],
  }),

  topic({
    slug: 'din-cevre-teknoloji', topic: 'Din, Çevre ve Teknoloji',
    focus: 'İnsan çevrenin sahibi gibi sınırsız tüketen değil, emaneti sorumlulukla kullanan bir özne olarak ele alınır.',
    concepts: [
      ['Emanet', 'Doğa, imkânlar, bilgi ve teknoloji insana sınırsızca tüketmesi için değil sorumlulukla kullanması için verilmiş imkânlardır.', 'Koruma ve sorumlu kullanım yükümlülüğüdür.', 'gerektirir'],
      ['İsraf', 'Kaynağı ihtiyaç, ölçü ve amacı aşacak biçimde kullanmaktır. Yalnız yiyecek değil su, enerji, zaman ve dijital imkânlar için de geçerlidir.', 'Kaynağı ölçüsüz ve amaçsız tüketmektir.', 'bozar'],
      ['İmar', 'Yeryüzünü yaşanabilir kılma, geliştirme ve iyileştirme sorumluluğudur. Tahribin karşısında yapıcı faaliyeti anlatır.', 'Yeryüzünü yapıcı biçimde geliştirmektir.', 'korur'],
      ['Mahremiyet', 'Kişinin özel alanının, bilgilerinin ve onurunun korunmasıdır. Dijital ortamda veri güvenliği ve izinsiz paylaşım bu kavramla ilişkilidir.', 'Özel alan ve bilginin korunmasıdır.', 'sınırlar'],
      ['Teknoloji ahlakı', 'Teknolojiyi üretirken ve kullanırken yarar, zarar, adalet, mahremiyet ve sorumluluğu gözetmektir.', 'Teknoloji kullanımında ahlaki sorumluluktur.', 'yönlendirir'],
    ],
    explanation: `Çevre ahlakı, insanın doğayla ilişkisinde emanet, ölçü, temizlik, merhamet ve gelecek kuşakların hakkını gözetmesini ister. Bir davranış yasal olsa bile israf, zarar veya hak ihlali üretiyorsa ahlaki açıdan sorgulanabilir.

Teknoloji kendi başına bütünüyle iyi veya kötü değildir; amaç, yöntem ve sonuçlar değerlendirilir. Yapay zekâ, sosyal medya ve veri sistemlerinde doğruluk, mahremiyet, ayrımcılık, emek ve sorumluluk soruları önemlidir.`,
    exampleBody: 'Bir uygulamanın kullanıcı verisini açık rıza olmadan paylaşması teknik olarak mümkün olsa bile **mahremiyet ve emanet** ilkelerini ihlal eder. Sorun aracın varlığı değil kullanım biçimidir.',
    compare: { title: 'İmar ↔ israf ↔ tahrip', columns: ['İmar', 'İsraf', 'Tahrip'], rows: [{ label: 'Yön', values: ['Yapıcı ve geliştirici', 'Ölçüsüz tüketici', 'Bozucu ve zarar verici'] }, { label: 'Kaynak kullanımı', values: ['İhtiyaç ve gelecek gözetilir.', 'Amaç ve ölçü aşılır.', 'Canlılara ve dengeye zarar verilir.'] }, { label: 'Ahlaki sonuç', values: ['Sorumluluk', 'Ölçüsüzlük', 'Hak ihlali'] }], insight: 'İmar yalnız bina yapmak değildir; doğayı ve toplumsal hayatı sürdürülebilir biçimde iyileştirmektir.' },
    trap: { title: 'Teknolojiyi tek başına suçlamak', wrong: '“Yeni teknoloji doğası gereği bütünüyle ahlaksızdır.”', right: 'Teknoloji amaç, yöntem, kullanım ve sonuçlarıyla ahlaki değerlendirmeye tabi tutulur.', body: 'ÖSYM kesin ve toptancı yargılara karşı ölçülü değerlendirmeyi arar.' },
    exam: { body: 'ÖSYM; emanet, israf ve mahremiyet ilkelerini güncel çevre veya teknoloji senaryosuna uygulamayı ölçer.', patterns: ['Su ve enerji tüketiminden israfı bulma', 'Dijital veri örneğini mahremiyetle eşleştirme', 'Teknolojide amaç–araç–sonuç değerlendirmesi'] },
    interpretation: { title: 'Yorum örneği: ölçüyü aşmamak', prompt: 'Metin, ihtiyaç karşılanırken bile ölçünün aşılmamasını ve kaynakların boşa harcanmamasını istiyor. Ana kavram nedir?', signal: 'Ölçü ve kaynak kullanımı vurgulanıyor.', match: 'İsraftan kaçınma ilkesidir.', distractor: 'Metin üretimi veya teknolojiyi bütünüyle reddetmiyor.', answer: '**İsraftan kaçınma ve ölçülülük.**', takeaway: 'Kaynak + ölçü + gereksiz tüketim üçlüsü israfı gösterir.' },
    spots: ['Doğa ve teknoloji birer sorumluluk alanıdır.', 'İsraf yalnız yiyecekle sınırlı değildir.', 'Mahremiyet dijital veriyi de kapsar.', 'Teknoloji amaç ve sonuçlarıyla değerlendirilir.'],
    quiz: { question: 'Bir fotoğrafı sahibinden izin almadan yayımlamak öncelikle hangi ilkeyi ihlal eder?', options: ['Mahremiyet', 'Tevekkül', 'İcma', 'Kozmolojik delil'], answerIndex: 0, explanation: 'Kişinin özel alanı ve görüntüsü üzerindeki hakkı mahremiyet kapsamındadır.' },
    nextTopics: ['Güncel Dinî Meseleler', 'Din, Felsefe, Bilim ve Sanat'],
  }),

  topic({
    slug: 'itikadi-siyasi-fikhi-yorumlar', topic: "İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar",
    focus: 'Din ile dinin tarihsel ve insani yorumları aynı değildir; yorum farklılığı sebepleriyle ve konusu ile anlaşılır.',
    concepts: [
      ['Din', 'İlahî kaynağa dayanan inanç, ibadet ve ahlak ilkelerinin bütünüdür. Temel kaynak Kur’an ve sünnettir.', 'İlahî mesaj ve temel ilkeler bütünüdür.', 'yorumlanır'],
      ['Dinî yorum', 'İnsanların dinî kaynakları tarih, kültür, dil ve yöntem içinde anlama çabalarının ürünüdür. Yorum beşerîdir ve farklılaşabilir.', 'Dinin insan tarafından anlaşılma biçimidir.', 'çeşitlenir'],
      ['İtikadi yorum', 'İman ve inanç konularındaki açıklama ekolleridir. Maturidilik ve Eşarilik temel örneklerdendir.', 'İnanç konularındaki yorum alanıdır.', 'ayrılır'],
      ['Fıkhi yorum', 'İbadetler ve günlük hayatla ilgili uygulamalı hükümlerin yorumlandığı alandır. Hanefilik, Şafiilik, Malikilik ve Hanbelilik örneklerdir.', 'Uygulamalı dinî hükümler alanıdır.', 'ayrılır'],
      ['Mezhep', 'Belirli yöntem ve görüşler etrafında oluşan dinî yorum geleneğidir. Dinin kendisi değil dini anlama biçimidir.', 'Sistemleşmiş dinî yorum geleneğidir.', 'oluşur'],
    ],
    explanation: `Yorum farklılıkları; insanın yapısı, dil, coğrafya, kültür, siyasal ve toplumsal şartlar, kaynaklara ulaşma imkânı ve yorum yöntemi gibi nedenlerle ortaya çıkabilir. Bu farklılıkların varlığı dinin temel ilkelerinin sürekli değiştiği anlamına gelmez.

Bir görüş inanç esaslarının açıklanmasıyla ilgiliyse itikadi; ibadet ve günlük uygulama hükümleriyle ilgiliyse fıkhi alandadır. Siyasi olayların etkilediği yorumlar da tarihsel şartlardan bağımsız okunmaz. Amaç mezhep ayrıntılarını tartışmak değil, yorum alanını ve çoğulculuğu anlamaktır.`,
    exampleBody: 'Aynı dinî metnin farklı bölgelerde yaşayan âlimlerce farklı örf ve ihtiyaçlar içinde değerlendirilmesi, **coğrafya ve kültürün yorum farklılığına etkisini** gösterir; dinin ayrı dinlere bölündüğünü göstermez.',
    compare: { title: 'İtikadi ↔ fıkhi yorum', columns: ['İtikadi yorum', 'Fıkhi yorum'], rows: [{ label: 'Konu', values: ['İman ve inanç meseleleri', 'İbadet ve günlük hayat hükümleri'] }, { label: 'Örnek gelenek', values: ['Maturidilik, Eşarilik', 'Hanefilik, Şafiilik, Malikilik, Hanbelilik'] }, { label: 'Soru ipucu', values: ['İman, sıfat, kader, büyük günah', 'Namaz, ticaret, uygulama, hüküm'] }], insight: 'Bir yorumun adından önce hangi soruya cevap verdiğine bak.' },
    trap: { title: 'Mezhebi dinle özdeşleştirmek', wrong: '“Bir mezhep, dinin kendisidir ve bütün yorumları dışlar.”', right: 'Mezhep, dini anlama ve yorumlama geleneğidir; beşerî ve tarihsel yön taşır.', body: 'ÖSYM din–yorum ayrımını koruyan seçeneği arar.' },
    exam: { body: 'ÖSYM, yorum farklılıklarının nedenlerini örneklerden bulmayı ve itikadi–fıkhi alanları ayırmayı ölçer.', patterns: ['Coğrafya, kültür ve insan yapısını yorum sebebi olarak tanıma', 'Mezhebi dinin kendisi saymama', 'Sorunun konusundan yorum alanını belirleme'] },
    interpretation: { title: 'Yorum örneği: aynı metne farklı odak', prompt: 'İki kişinin aynı metinde farklı ayrıntıları öne çıkarması hangi yorum sebebine örnektir?', signal: 'Bireylerin algı ve düşünme farklılığı vurgulanıyor.', match: 'İnsanın yapısı ve anlayış farklılığıdır.', distractor: 'Metin ilahî mesajın değiştiğini söylemiyor.', answer: '**İnsanın yapısından kaynaklanan yorum farklılığı.**', takeaway: 'Yorum farklılığı, kaynağın zorunlu olarak farklı olması demek değildir.' },
    spots: ['Din ile dinî yorum aynı değildir.', 'Mezhep sistemleşmiş yorum geleneğidir.', 'İtikadi alan inanç, fıkhi alan uygulamalı hükümlerle ilgilidir.', 'Dil, kültür ve tarih yorumları etkileyebilir.'],
    quiz: { question: 'Namazın uygulama ayrıntılarıyla ilgili görüş ayrılığı hangi alandadır?', options: ['İtikadi', 'Fıkhi', 'Felsefi', 'Sanatsal'], answerIndex: 1, explanation: 'İbadetin uygulama hükümleri fıkhi yorum alanına girer.' },
    nextTopics: ['İslam Düşüncesinde Tasavvufi Yorumlar', 'İnançla İlgili Meseleler'],
  }),
]

const grade11 = [
  topic({
    slug: 'kader-irade-sorumluluk', topic: 'Kader, İrade ve Sorumluluk',
    focus: 'Kader Allah’ın bilgisi ve ölçüsü, kaza bunun gerçekleşmesi; irade ise insanın sorumlu tercih alanıdır.',
    concepts: [
      ['Kader', 'Allah’ın olmuş ve olacak her şeyi bilgisiyle kuşatması, varlığı ölçü ve düzene göre takdir etmesidir. İnsanı zorlayan bir mazeret değildir.', 'Allah’ın bilgisi, ölçüsü ve takdiridir.', 'gerçekleşir'],
      ['Kaza', 'Kaderde takdir edilen olayın zamanı geldiğinde gerçekleşmesidir.', 'Takdir edilenin gerçekleşmesidir.', 'içinde alan açar'],
      ['Cüzi irade', 'İnsanın sınırlı fakat gerçek seçme gücüdür. Ahlaki ve dinî sorumluluğun dayanağıdır.', 'İnsanın sınırlı seçme gücüdür.', 'doğurur'],
      ['Sorumluluk', 'İnsanın bilgi, güç ve özgür iradeyle yaptığı tercihlerinin sonucunu üstlenmesidir.', 'Özgür tercihin sonucunu üstlenmektir.', 'gerektirir'],
      ['Tevekkül', 'Gerekli çaba ve tedbiri gösterdikten sonra sonucu Allah’a bırakıp güvenmektir.', 'Tedbirden sonra Allah’a güvenmektir.', 'tamamlar'],
    ],
    explanation: `Allah’ın bir şeyi bilmesi, insanı o davranışı yapmaya zorlamaz. Bilgi ile zorlama farklıdır. İnsan doğum yeri, fiziksel özellik veya doğal olay gibi seçimi dışındaki durumlardan ahlaken sorumlu değildir; niyet ve tercihle gerçekleştirdiği davranışlardan sorumludur.

Tevekkül, planı ve emeği terk etmek değildir. Tedbir almak insanın irade alanı; her tedbire rağmen sonucu bütünüyle kontrol edememek ise insanın sınırlılığıdır. Başarıda çalışmayı yok saymak da başarısızlıkta kaderi mazeret yapmak da kavramı yanlış kullanır.`,
    exampleBody: 'Çiftçinin toprağı sürmesi, tohumu seçmesi ve sulaması **irade, tedbir ve sorumluluk**; bütün bunlardan sonra sonucu Allah’a bırakması **tevekkül**dür. Tohum ekmeden ürün beklemek tevekkül değildir.',
    compare: { title: 'Kader ↔ kaza ↔ irade', columns: ['Kader', 'Kaza', 'İrade'], rows: [{ label: 'Nedir?', values: ['İlahî bilgi, ölçü ve takdir', 'Takdir edilenin gerçekleşmesi', 'İnsanın tercih gücü'] }, { label: 'Zaman yönü', values: ['Bütün zamanı kuşatan takdir', 'Olayın ortaya çıkışı', 'Davranış öncesi seçim alanı'] }, { label: 'Sorumluluk', values: ['Mazeret değildir.', 'Tek başına sorumluluk ölçütü değildir.', 'Sorumluluğu mümkün kılar.'] }], insight: 'Kader ile irade rakip değildir: insan, Allah’ın yarattığı imkân ve ölçü içinde gerçek tercihler yapar.' },
    extraComparisons: [{
      title: 'Tevekkül ↔ tedbirsizlik', columns: ['Tevekkül', 'Tedbirsizlik'],
      rows: [
        { label: 'Çaba', values: ['Gerekli emek gösterilir.', 'Yapılabilecek hazırlık terk edilir.'] },
        { label: 'Tedbir', values: ['Riskler için önlem alınır.', 'Önlem gereksiz sayılır.'] },
        { label: 'Sonuç tutumu', values: ['Kontrol dışı sonuçta Allah’a güvenilir.', 'İhmalin sonucu kaderle açıklanmaya çalışılır.'] },
      ],
      insight: 'Tevekkül insanın sorumluluğunu tamamlar; tedbirsizlik sorumluluğu ihmal eder.',
    }],
    trap: { title: 'Tevekkülü tedbirsizlik sanmak', wrong: '“Nasıl olsa kaderimde varsa olur; çalışmama gerek yok.”', right: 'İnsan kendi irade alanında çaba ve tedbirden sorumludur; tevekkül bunlardan sonra gelir.', body: 'Kader sorumluluğu ortadan kaldıran bir kaçış cümlesi değildir.' },
    exam: { body: 'ÖSYM, kader–kaza ayrımından çok insan iradesi ile sorumluluğun nasıl bağdaştığını ve tevekkülün tedbirle ilişkisini yorumlatır.', patterns: ['Kontrol dışı durum ile tercihi ayırma', 'Tevekkül–tedbir bütünlüğü', 'Başarısızlıkta kaderi mazeret yapma yanılgısı'] },
    interpretation: { title: 'Yorum örneği: bağladıktan sonra güven', prompt: 'Bir öğütte, kişinin önce gerekli önlemi alması sonra Allah’a güvenmesi isteniyor. Ana kavram nedir?', signal: 'Önce tedbir, sonra güven sırası var.', match: 'Tevekkül doğru biçimde tanımlanıyor.', distractor: 'Metin sonucu yalnız insanın gücüne bağlamıyor; tedbiri de reddetmiyor.', answer: '**Tevekkül.**', takeaway: 'Tevekkül = çaba + tedbir + Allah’a güven.' },
    spots: ['Kader takdir, kaza gerçekleşmedir.', 'Allah’ın bilmesi insanı zorlamaz.', 'Cüzi irade sorumluluğun temelidir.', 'Tevekkül tedbirsizlik değildir.'],
    quiz: { question: '“Sınava hiç çalışmadım; kazanamazsam kaderim böyleymiş.” diyen kişinin temel yanılgısı nedir?', options: ['Kaderi insan sorumluluğuna mazeret yapmak', 'Kazayı kaderden ayırmak', 'Duanın önemini kabul etmek', 'Külli iradeyi tanımak'], answerIndex: 0, explanation: 'Çalışmak öğrencinin irade ve sorumluluk alanındadır; kader ihmale mazeret yapılamaz.' },
    nextTopics: ['Allah-İnsan İlişkisi', 'Güncel Dinî Meseleler'],
  }),
  topic({
    slug: 'din-felsefe-bilim-sanat', topic: 'Din, Felsefe, Bilim ve Sanat',
    focus: 'Din, felsefe, bilim ve sanat insanın anlam arayışına farklı soru, yöntem ve ifade biçimleriyle katkı sağlar.',
    concepts: [
      ['Din', 'Vahye dayalı inanç, ibadet ve ahlak çerçevesi sunarak varlık ve hayatı anlamlandırır.', 'Vahye dayalı anlam ve değer alanıdır.', 'ilişki kurar'],
      ['Felsefe', 'Varlık, bilgi ve değer üzerine akla dayalı, sorgulayıcı ve tutarlı düşünme etkinliğidir.', 'Akla dayalı sorgulama etkinliğidir.', 'sorgular'],
      ['Bilim', 'Gözlem, deney, ölçüm ve sistemli açıklamayla olgular hakkında test edilebilir bilgi üretir.', 'Olguları yöntemli biçimde açıklar.', 'inceler'],
      ['Sanat', 'İnsanın duygu, düşünce ve güzellik anlayışını özgün biçimlerle ifade etmesidir.', 'Duygu ve anlamın estetik ifadesidir.', 'anlatır'],
      ['Hikmet', 'Bilgi ile doğru yargı ve yerinde davranışı birleştiren derin kavrayıştır.', 'Bilgiyi yerinde kullanma kavrayışıdır.', 'bütünleştirir'],
    ],
    explanation: `Bu alanlar aynı soruları aynı yöntemle cevaplamaz. Bilim “nasıl işliyor?” sorusunda gözlem ve deneyi; felsefe kavram çözümleme ve akıl yürütmeyi; din vahiy ve değer çerçevesini; sanat estetik ve simgesel ifadeyi öne çıkarır.

Yöntem farkı zorunlu çatışma demek değildir. Bilimsel bir sonuçtan doğrudan ahlaki hüküm çıkarmak veya dinî metni deney raporu gibi okumak alanların yöntemini karıştırabilir. Bütüncül yaklaşım, sınırları koruyarak ilişki kurar.`,
    exampleBody: 'Bir mimari eserin taşıyıcı sistemi **bilim ve mühendislikle**, insan ve güzellik anlayışı **sanatla**, sembolik/manevi anlamı **din ve kültürle** değerlendirilebilir.',
    compare: { title: 'Din ↔ bilim ↔ felsefe', columns: ['Din', 'Bilim', 'Felsefe'], rows: [{ label: 'Temel kaynak/yöntem', values: ['Vahiy ve dinî tecrübe', 'Gözlem, deney, ölçüm', 'Akıl yürütme ve sorgulama'] }, { label: 'Öne çıkan soru', values: ['Anlam ve değer nedir?', 'Olgu nasıl işler?', 'Kavramın temeli tutarlı mı?'] }, { label: 'Sınır', values: ['Bilimsel yöntem yerine geçmez.', 'Ahlaki değeri tek başına belirlemez.', 'Deney verisinin yerine geçmez.'] }], insight: 'Alanları yarıştırmak yerine hangi soruya hangi yöntemle cevap verdiklerini ayır.' },
    trap: { title: 'Yöntem farkını çatışma sanmak', wrong: '“Soruları farklıysa bu alanlar mutlaka birbirini reddeder.”', right: 'Farklı yöntemler, aynı gerçekliğin farklı boyutlarını inceleyebilir.', body: 'Kesin ve toptancı çatışma yargıları genellikle çeldiricidir.' },
    exam: { body: 'ÖSYM, verilen yöntemi doğru alanla eşleştirmeyi ve alanların sınırlarını koruyan bütüncül yorumu ölçer.', patterns: ['Deney ve gözlemden bilimi bulma', 'Anlam/değer sorusunu din ve felsefeyle ilişkilendirme', 'Sanatın estetik ifade yönünü tanıma'] },
    interpretation: { title: 'Yorum örneği: farklı sorular', prompt: 'Metin, bilimin olguyu açıkladığını; dinin ise onun insan için anlamını ve sorumluluk boyutunu ele aldığını söylüyor. Sonuç nedir?', signal: 'Yöntem ve soru farkı vurgulanıyor.', match: 'Alanlar birbirini tamamlayabilecek farklı işlevlere sahip.', distractor: 'Metin bilimi veya dini gereksiz saymıyor.', answer: '**Din ve bilim farklı sorulara odaklanabilir; zorunlu olarak çatışmaz.**', takeaway: '“Nasıl?” ile “niçin/anlamı ne?” ayrımını izle.' },
    spots: ['Bilim test edilebilir olgularla çalışır.', 'Felsefe sorgular ve temellendirir.', 'Din anlam ve değer çerçevesi sunar.', 'Sanat estetik ifade alanıdır.'],
    quiz: { question: 'Bir iddianın deneyle sınanabilir olup olmadığını araştıran alan hangisidir?', options: ['Bilim', 'Sanat', 'Tasavvuf', 'Örf'], answerIndex: 0, explanation: 'Deneyle sınama bilimsel yöntemin temel özelliklerindendir.' },
    nextTopics: ['Din, Çevre ve Teknoloji', 'İslam Medeniyeti ve Gönül Coğrafyamız'],
  }),
  topic({
    slug: 'islam-medeniyeti-gonul-cografyasi', topic: 'İslam Medeniyeti ve Gönül Coğrafyamız',
    focus: 'Medeniyet; inanç, bilgi, kurum, sanat, hukuk ve gündelik hayatın uzun süreli etkileşiminden doğar.',
    concepts: [
      ['Kültür', 'Bir toplumun dil, gelenek, sanat ve gündelik yaşama ilişkin ürettiği maddi-manevi birikimdir.', 'Topluma özgü yaşama ve anlam birikimidir.', 'katılır'],
      ['Medeniyet', 'Farklı toplumların katkısıyla oluşabilen, kurumlar ve değerler üzerinden geniş ve süreklilik taşıyan ortak birikimdir.', 'Geniş ve kurumsallaşmış ortak birikimdir.', 'kapsar'],
      ['Gönül coğrafyası', 'Tarihî, dinî ve kültürel bağlarla yakınlık hissedilen bölgeleri anlatan kavramdır; yalnız siyasi sınır değildir.', 'Tarihî ve kültürel yakınlık alanıdır.', 'kurar'],
      ['Vakıf', 'Bir mal veya gelirin toplum yararına sürekli hizmete ayrıldığı dayanışma kurumudur.', 'Sürekli toplumsal yarar kurumudur.', 'yaşatır'],
      ['İlim', 'Bilgi edinme, üretme ve öğretme çabasıdır; İslam medeniyetinde eğitim kurumlarının gelişimini beslemiştir.', 'Bilgi üretme ve öğrenme çabasıdır.', 'geliştirir'],
    ],
    explanation: `İslam medeniyeti tek bir kavmin ürünü değildir. Farklı dillerden ve bölgelerden Müslümanlar ile etkileşim içindeki toplumların bilim, düşünce, mimari, sanat ve kurum katkılarıyla gelişmiştir. Tercüme faaliyetleri bilgiyi yalnız aktarmamış, eleştirme ve yeni üretim için zemin oluşturmuştur.

Vakıf, medrese, kütüphane, darüşşifa ve imarethane gibi kurumlar değerlerin toplumsal yapıya dönüşmesine örnektir. Medeniyeti yalnız yapı adlarıyla değil, hangi ihtiyacı hangi değerle karşıladığı üzerinden oku.`,
    exampleBody: 'Bir vakfın yolcuya, öğrenciye ve hastaya uzun süre hizmet vermesi; **yardımlaşma, ilim ve kamu yararı** değerlerinin kurumlaşmış hâlidir.',
    compare: { title: 'Kültür ↔ medeniyet', columns: ['Kültür', 'Medeniyet'], rows: [{ label: 'Kapsam', values: ['Daha yerel ve topluma özgü olabilir.', 'Daha geniş, ortak ve kurumsal olabilir.'] }, { label: 'Örnek', values: ['Dil, yemek, gelenek', 'Hukuk, eğitim, bilim ve şehir kurumları'] }, { label: 'İlişki', values: ['Medeniyete katkı sağlar.', 'Birden çok kültürü kapsayabilir.'] }], insight: 'Kesin duvar yoktur; ayrım kapsam ve kurumsallaşmayı anlamak içindir.' },
    trap: { title: 'Medeniyeti tek topluma mal etmek', wrong: '“İslam medeniyeti yalnız tek bir milletin ve bölgenin eseridir.”', right: 'İslam medeniyeti farklı toplum ve coğrafyaların ortak katkısıyla gelişmiştir.', body: 'Çoğul katkı ve etkileşim vurgusunu ara.' },
    exam: { body: 'ÖSYM; değer–kurum ilişkisini, kültür–medeniyet ayrımını ve ortak bilim/sanat mirasını yorumlatır.', patterns: ['Vakıftan dayanışma ve süreklilik sonucu çıkarma', 'Tercümeden bilimsel etkileşimi anlama', 'Gönül coğrafyasını siyasi sınırla sınırlamama'] },
    interpretation: { title: 'Yorum örneği: değer kurumlaşınca', prompt: 'Metin, gelirini yüzyıllarca öğrencilerin eğitimine ayıran bir yapıdan söz ediyor. Hangi kurum ve değer öne çıkar?', signal: 'Sürekli gelir ve toplum yararı var.', match: 'Vakıf; yardımlaşma ve ilme destek.', distractor: 'Bu yalnız bireysel sadaka anı değildir; süreklilik ve kurum vardır.', answer: '**Vakıf kurumu ve toplumsal dayanışma.**', takeaway: 'Süreklilik + ayrılan mal/gelir + kamu yararı = vakıf.' },
    spots: ['Medeniyet farklı toplumların ortak katkısıyla gelişir.', 'Kültür daha yerel, medeniyet daha geniş olabilir.', 'Vakıf değerlerin kurumlaşmasına örnektir.', 'Gönül coğrafyası kültürel ve tarihî bağdır.'],
    quiz: { question: 'Bir gelirin sürekli olarak kamu yararına ayrılması hangi kurumdur?', options: ['Vakıf', 'Mezhep', 'İcma', 'Fıtrat'], answerIndex: 0, explanation: 'Vakıf, mal veya gelirin devamlı biçimde toplum yararına tahsisidir.' },
    nextTopics: ['Din, Kültür ve Sanat', 'İslam Düşüncesinde Tasavvufi Yorumlar'],
  }),
  topic({
    slug: 'inancla-ilgili-meseleler', topic: 'İnançla İlgili Meseleler',
    focus: 'İnanç meseleleri; soru sormayı bastırmadan kavram, delil ve tutarlılık üzerinden değerlendirilir.',
    concepts: [
      ['Ateizm', 'Tanrı’nın varlığını reddeden düşüncedir.', 'Tanrı’nın varlığını reddeder.', 'ayrılır'],
      ['Deizm', 'Yaratıcıyı kabul edip vahiy ve peygamberlik gibi dinî bildirimi genellikle reddeden yaklaşımdır.', 'Yaratıcıyı kabul, vahyi reddetme eğilimidir.', 'ayrılır'],
      ['Agnostisizm', 'Tanrı hakkında kesin bilgiye ulaşılamayacağını savunan görüştür.', 'Tanrı bilgisinin kesinliğini mümkün görmez.', 'ayrılır'],
      ['Nihilizm', 'Varlık, bilgi veya değer alanında nesnel anlam ve değeri reddeden yaklaşımların genel adıdır.', 'Nesnel anlam/değeri reddetme eğilimidir.', 'doğurur'],
      ['Kötülük problemi', 'Dünyadaki acı ve kötülüklerle mutlak iyi ve güçlü Tanrı inancı arasındaki ilişkinin nasıl açıklanacağını sorgulayan problemdir.', 'Kötülük ile Tanrı inancının ilişkisini sorgular.', 'tartışılır'],
    ],
    explanation: `Bir görüşü eleştirmenin ilk şartı onu doğru tanımlamaktır. Ateizm yaratıcıyı reddederken deizm yaratıcıyı kabul edebilir; agnostisizm ise kesin bilgi iddiasını sorgular. Bu kavramları “dinsizlik” etiketi altında birleştirmek analizi bozar.

Kötülük problemi ele alınırken insan iradesinden doğan ahlaki kötülük, doğal olaylar, sınanma, sınırlı insan bilgisi ve sorumluluk gibi farklı boyutlar ayrılır. Sınav, tartışmalı ayrıntıdan çok kavramı görüşle eşleştirmeyi ölçer.`,
    exampleBody: '“Evreni yaratan bir güç vardır fakat insanlığa vahiy göndermemiştir.” görüşü **deizm**; “böyle bir varlığın olup olmadığı kesin bilinemez” görüşü **agnostisizm**dir.',
    compare: { title: 'Ateizm ↔ deizm ↔ agnostisizm', columns: ['Ateizm', 'Deizm', 'Agnostisizm'], rows: [{ label: 'Tanrı', values: ['Reddeder.', 'Yaratıcıyı kabul eder.', 'Kesin bilginin mümkün olmadığını savunur.'] }, { label: 'Vahiy', values: ['Kabul etmez.', 'Genellikle reddeder.', 'Kesin hüküm vermekten kaçınır.'] }, { label: 'Anahtar ifade', values: ['“Yoktur.”', '“Yarattı ama müdahale etmez.”', '“Bilemeyiz.”'] }], insight: 'Üç yaklaşımın Tanrı hakkındaki iddiası aynı değildir.' },
    trap: { title: 'Her şüpheyi aynı görüş sanmak', wrong: '“Tanrı konusunda kuşku duyan herkes ateisttir.”', right: 'Red, kabul ve bilinememe iddiaları farklı kavramlarla ifade edilir.', body: 'Cümlenin yüklemini dikkatle oku: yoktur, vardır ama vahiy yoktur, bilinemez.' },
    exam: { body: 'ÖSYM, kısa bir görüş parçasını doğru düşünceyle eşleştirmeyi ve inanç sorunlarını saygılı, analitik dille değerlendirmeyi ölçer.', patterns: ['“Yaratıcı var, vahiy yok”tan deizmi bulma', '“Bilinemez”den agnostisizmi çıkarma', 'Kötülük probleminde irade ve sorumluluk boyutunu ayırma'] },
    interpretation: { title: 'Yorum örneği: yarattı ama bildirmedi', prompt: 'Bir görüş, evrenin yaratıcısını kabul ediyor fakat vahiy ve peygamberliği reddediyor. Adı nedir?', signal: 'Yaratıcı kabul, vahiy reddi birlikte bulunuyor.', match: 'Bu deizmin temel çizgisidir.', distractor: 'Ateizm yaratıcıyı da reddeder; agnostisizm kesin bilemeyiz der.', answer: '**Deizm.**', takeaway: 'Tek kelimeyi değil iki parçalı iddiayı birlikte oku.' },
    spots: ['Ateizm Tanrı’yı reddeder.', 'Deizm yaratıcıyı kabul edip vahyi reddeder.', 'Agnostisizm kesin bilginin mümkün olmadığını savunur.', 'Kötülük probleminde irade ve doğal olay ayrımı önemlidir.'],
    quiz: { question: '“Tanrı’nın varlığı veya yokluğu kesin olarak bilinemez.” görüşü hangisidir?', options: ['Deizm', 'Agnostisizm', 'Ateizm', 'Politeizm'], answerIndex: 1, explanation: 'Bilinememe iddiası agnostisizmin ayırt edici yönüdür.' },
    nextTopics: ["Allah'ı Tanımak", 'Din, Felsefe, Bilim ve Sanat'],
  }),
  topic({
    slug: 'yahudilik-hristiyanlik', topic: 'Yahudilik ve Hristiyanlık',
    focus: 'Dinler, kendi tarihsel gelişimleri ve temel kavramları içinde nesnel ve karşılaştırmalı biçimde tanınır.',
    concepts: [
      ['Yahudilik', 'Tarihsel kökleri İsrailoğullarına dayanan, Tevrat ve Yahudi geleneği çevresinde şekillenen tek tanrılı dindir.', 'Tevrat ve Yahudi geleneği çevresindeki dindir.', 'tanınır'],
      ['Hristiyanlık', 'Hz. İsa’nın mesajı etrafında gelişen, Kitab-ı Mukaddes’in Yeni Ahit bölümünü temel alan dünya dinidir.', 'Hz. İsa’nın mesajı etrafında gelişen dindir.', 'tanınır'],
      ['Tevrat', 'Yahudi kutsal metin geleneğinde merkezi yere sahip metindir; Tanah’ın ilk bölümünü ifade eder.', 'Yahudiliğin temel kutsal metin bölümüdür.', 'yer alır'],
      ['İncil', 'Hristiyanlıkta Hz. İsa’nın hayatı ve mesajını anlatan kanonik metinlere verilen addır; Yeni Ahit içinde yer alır.', 'Hristiyan kutsal metin geleneğinin parçasıdır.', 'yer alır'],
      ['Mabet', 'İbadet için ayrılan mekândır; Yahudilikte sinagog, Hristiyanlıkta kilise temel adlardır.', 'İbadet için ayrılan mekândır.', 'gösterir'],
    ],
    explanation: `Dinleri karşılaştırırken amaç üstünlük tartışması değil, temel özellikleri doğru kavramlarla tanımaktır. Yahudilikte sinagog ve haham; Hristiyanlıkta kilise ve din adamlığı kurumları öne çıkabilir. Kutsal metin adları ve tarihsel şahsiyetler karıştırılmamalıdır.

Ortak köken veya kavram benzerliği, bütün inançların aynı olduğu anlamına gelmez. Farklılıkları nesnel biçimde belirtmek de saygısızlık değildir; önyargılı ve genelleyici dil kullanmamak esastır.`,
    exampleBody: 'Bir soruda Şabat, sinagog ve Tevrat kavramları birlikte veriliyorsa **Yahudilik**; kilise, İncil ve Hz. İsa vurgulanıyorsa **Hristiyanlık** aranır.',
    compare: { title: 'Yahudilik ↔ Hristiyanlık', columns: ['Yahudilik', 'Hristiyanlık'], rows: [{ label: 'Merkez metin', values: ['Tevrat/Tanah geleneği', 'Yeni Ahit/İncil geleneği'] }, { label: 'Mabet', values: ['Sinagog', 'Kilise'] }, { label: 'Öne çıkan kişi', values: ['Hz. Musa', 'Hz. İsa'] }], insight: 'Soruda tek işarete değil, kavram kümesine bakmak karışıklığı azaltır.' },
    trap: { title: 'Benzerliği aynılık sanmak', wrong: '“Ortak peygamber veya kavram bulunması bütün inançların aynı olduğu anlamına gelir.”', right: 'Dinler tarihsel bağlar taşıyabilir; temel inanç ve uygulamaları yine de farklıdır.', body: 'Nesnel karşılaştırma hem ortaklığı hem farklılığı korur.' },
    exam: { body: 'ÖSYM, temel kutsal metin, mabet, şahsiyet ve uygulamaları doğru dinle eşleştirmeyi; çoğulculuk ve saygı ilkesini ölçer.', patterns: ['Kavram kümesinden dini tanıma', 'Ortak ve farklı yönleri ayırma', 'Önyargılı genellemeyi eleme'] },
    interpretation: { title: 'Yorum örneği: kavram kümesi', prompt: 'Metinde Şabat günü, sinagog ve Tevrat birlikte anılıyor. Hangi din?', signal: 'Üç işaret aynı geleneğe ait.', match: 'Yahudilik.', distractor: 'Tek tanrılı olması tek başına ayırıcı değildir; özel kavramlar ayırır.', answer: '**Yahudilik.**', takeaway: 'Dinler sorusunda birbiriyle uyumlu iki-üç işareti birlikte kullan.' },
    spots: ['Yahudiliğin mabedi sinagogdur.', 'Hristiyanlığın mabedi kilisedir.', 'Tevrat Yahudi, İncil Hristiyan geleneğiyle ilişkilidir.', 'Karşılaştırma nesnel ve saygılı yapılır.'],
    quiz: { question: 'Sinagog hangi dinin ibadet mekânıdır?', options: ['Hristiyanlık', 'Yahudilik', 'Hinduizm', 'Budizm'], answerIndex: 1, explanation: 'Sinagog Yahudilerin ibadet ve cemaat mekânıdır.' },
    nextTopics: ['Hint ve Çin Dinleri', 'Kur’an-ı Kerim'],
  }),
]

const grade12 = [
  topic({
    slug: 'kuran-i-kerim', topic: 'Kur’an-ı Kerim',
    focus: 'Kur’an’ın ana konuları, temel özellikleri ve mesajı yorumlama ilkeleri birlikte ele alınır.',
    concepts: [
      ['Vahiy', 'Allah’ın peygamberlerine bildirdiği ilahî mesajdır.', 'İlahî bildirimdir.', 'toplanır'],
      ['Ayet', 'Kur’an surelerini oluşturan anlamlı cümle veya cümle parçalarıdır.', 'Sureyi oluşturan metin birimidir.', 'oluşturur'],
      ['Sure', 'Kur’an’ın ayetlerden oluşan bölümlerinden her biridir.', 'Ayetlerden oluşan Kur’an bölümüdür.', 'yer alır'],
      ['Meal', 'Kur’an anlamının başka bir dile yaklaşık olarak aktarılmasıdır; Kur’an metninin kendisiyle özdeş değildir.', 'Anlamın başka dile yaklaşık aktarımıdır.', 'yorumlanır'],
      ['Tefsir', 'Ayetleri dil, bağlam, bütünlük ve kaynaklar ışığında açıklama ilmidir.', 'Kur’an’ı açıklama ve yorumlama ilmidir.', 'açıklar'],
    ],
    explanation: `Kur’an’ın ana konuları inanç, ibadet, ahlak, insan ve toplum, peygamber kıssaları ve ahiret olarak özetlenebilir. Bir ayeti anlamak için yalnız tek sözcüğe değil bağlama, Kur’an’ın bütününe ve metnin amaçladığı ilkeye bakılır.

Meal, anlamı başka dilde karşılamaya çalışan insan ürünüdür; bu yüzden farklı mealler olabilir. Tefsir daha geniş açıklama yapar. TYT’de uzun ezber değil, verilen kısa mealin hangi inanç veya ahlak ilkesini vurguladığı sorulur.`,
    exampleBody: 'Bir meal; ölçüde dürüst olmayı, yetimin hakkını korumayı ve kibirden kaçınmayı birlikte veriyorsa ana eksen **ahlak ve toplumsal sorumluluk**tur.',
    compare: { title: 'Meal ↔ tefsir', columns: ['Meal', 'Tefsir'], rows: [{ label: 'Amaç', values: ['Anlamı başka dile yaklaşık aktarmak', 'Ayrıntılı açıklamak ve yorumlamak'] }, { label: 'Kapsam', values: ['Daha kısa karşılık', 'Dil, bağlam ve kaynaklarla geniş açıklama'] }, { label: 'Kur’an’ın kendisi mi?', values: ['Hayır, çeviri çabasıdır.', 'Hayır, açıklama çabasıdır.'] }], insight: 'Meal ve tefsir beşerî anlama çabalarıdır; ayetin Arapça aslının bire bir eşiti sayılmaz.' },
    trap: { title: 'Tek kelimeyle hüküm vermek', wrong: '“Metinde yardım sözcüğü geçtiyse cevap mutlaka sadakadır.”', right: 'Ana düşünce, metnin bütünündeki amaç ve ilişkiden çıkarılır.', body: 'Önce eylem–gerekçe–kavram sırasını uygula.' },
    exam: { body: 'ÖSYM, Kur’an’ın ana konularını ve verilen mealin vurgusunu yorumlamayı; meal–tefsir ayrımını ölçer.', patterns: ['Ayetin ana düşüncesini bulma', 'Ahlaki ilkeyi davranıştan çıkarma', 'Meal ve tefsiri ayırma'] },
    interpretation: { title: 'Yorum örneği: metnin ortak ekseni', prompt: 'Kısa metin; anne-babaya iyi davranma, ihtiyaç sahibini gözetme ve savurganlıktan kaçınmayı birlikte anıyor. Ana vurgu nedir?', signal: 'Birden çok davranış toplumsal hak ve ölçülülükte birleşiyor.', match: 'Ahlaki sorumluluk ve ölçülülük.', distractor: 'Yalnız aile veya yalnız sadaka cevabı metni daraltır.', answer: '**Ahlaki sorumluluk ve ölçülülük.**', takeaway: 'Birden fazla örneği kapsayan en geniş doğru ilkeyi seç.' },
    spots: ['Ayet sureyi, sure Kur’an bölümlerini oluşturur.', 'Meal yaklaşık anlam aktarımıdır.', 'Tefsir ayrıntılı açıklamadır.', 'Ayet yorumunda bağlam ve bütünlük önemlidir.'],
    quiz: { question: 'Kur’an anlamının başka bir dile yaklaşık aktarımı nedir?', options: ['Tefsir', 'Meal', 'İcma', 'Kıyas'], answerIndex: 1, explanation: 'Meal, anlamın başka dile yaklaşık aktarımıdır.' },
    nextTopics: ['Allah-İnsan İlişkisi', "Kur'an'a Göre Hz. Muhammed"],
  }),
  topic({
    slug: 'din-ve-aile', topic: 'Din ve Aile',
    focus: 'Aile; sevgi, merhamet, adalet, mahremiyet ve karşılıklı hak-sorumluluk ilişkisiyle ele alınır.',
    concepts: [
      ['Aile', 'Evlilik ve akrabalık bağlarıyla oluşan; sevgi, güven, bakım ve sorumluluğun paylaşıldığı temel toplumsal kurumdur.', 'Sevgi ve sorumluluğa dayalı temel kurumdur.', 'gerektirir'],
      ['Hak', 'Bireyin korunması ve gözetilmesi gereken meşru pay ve yetkisidir.', 'Korunması gereken meşru paydır.', 'karşılık bulur'],
      ['Sorumluluk', 'Kişinin aile içinde üstlendiği görevlerin ve tercihlerinin sonucunu gözetmesidir.', 'Üstlenilen görevin gereğini yapmaktır.', 'dengeler'],
      ['Sıla-i rahim', 'Akrabalık ilişkilerini sürdürme, yakınları gözetme ve bağları korumadır.', 'Akrabalık bağlarını korumaktır.', 'güçlendirir'],
      ['Mahremiyet', 'Aile bireylerinin özel alanına, onuruna ve kişisel sınırlarına saygıdır.', 'Özel alan ve onuru korumaktır.', 'korur'],
    ],
    explanation: `Ailede hak ve sorumluluk karşılıklıdır. Sevgi tek başına sınırları kaldırmaz; adalet, danışma, güven ve mahremiyetle birlikte yürür. Çocuğun bakım ve eğitim hakkı, ebeveynin sorumluluğu; yaşlıların gözetilmesi ise aile dayanışmasının örneklerindendir.

Dinî yaklaşım aile içi haksızlığı meşrulaştırmaz. Şiddet, baskı ve hakkı yok sayma merhamet ve adaletle bağdaşmaz. Sınavda aileyi yalnız biyolojik bağ değil değer ve görev ilişkisi olarak yorumlamak gerekir.`,
    exampleBody: 'Aile kararında herkesin görüşünü dinlemek **istişare ve saygı**, özel mesajları izinsiz okumamak **mahremiyet**, bakım görevini paylaşmak **sorumluluk**tur.',
    compare: { title: 'Hak ↔ sorumluluk', columns: ['Hak', 'Sorumluluk'], rows: [{ label: 'Yön', values: ['Bireyin korunacak payı', 'Bireyin yerine getireceği görev'] }, { label: 'İlişki', values: ['Başkasına sorumluluk yükleyebilir.', 'Başkasının hakkını korur.'] }, { label: 'Denge', values: ['Tek taraflı ayrıcalık değildir.', 'Tek taraflı yük değildir.'] }], insight: 'Sağlıklı aile düzeni hakları ve sorumlulukları karşılıklı biçimde gözetir.' },
    trap: { title: 'Sevgiyi sınırsız müdahale sanmak', wrong: '“Aile olmak kişisel sınırları ve mahremiyeti ortadan kaldırır.”', right: 'Yakınlık, özel alana ve insan onuruna saygıyı gereksiz kılmaz.', body: 'Mahremiyet aile içindeki güvenin de parçasıdır.' },
    exam: { body: 'ÖSYM, aile değerlerini somut olayla eşleştirmeyi ve hak–sorumluluk dengesini yorumlamayı ölçer.', patterns: ['Aile kararında istişare', 'Bakımda sorumluluk', 'Özel alanda mahremiyet'] },
    interpretation: { title: 'Yorum örneği: iyi davranış', prompt: 'Metin, anne-babaya saygılı söz söylemeyi ve yaşlandıklarında onları gözetmeyi istiyor. Ana ilke nedir?', signal: 'Saygı, bakım ve aile sorumluluğu var.', match: 'Anne-babaya iyilik ve aile dayanışması.', distractor: 'Metin körü körüne her talebi kabul etmeyi söylemiyor.', answer: '**Ailede saygı, merhamet ve sorumluluk.**', takeaway: 'İyilik, onur ve bakım eksenini birlikte oku.' },
    spots: ['Aile hak ve sorumluluk kurumudur.', 'Sıla-i rahim akrabalık bağını korumaktır.', 'Mahremiyet aile içinde de geçerlidir.', 'Şiddet ve haksızlık merhametle bağdaşmaz.'],
    quiz: { question: 'Bir aile bireyinin özel bilgisini izinsiz paylaşmamak hangi değerdir?', options: ['Mahremiyet', 'Tevekkül', 'Kaza', 'İçtihat'], answerIndex: 0, explanation: 'Özel alan ve bilginin korunması mahremiyet kapsamındadır.' },
    nextTopics: ["İslam'da Ahlak İlkeleri", 'Güncel Dinî Meseleler'],
  }),
  topic({
    slug: 'guncel-dini-meseleler', topic: 'Güncel Dinî Meseleler',
    focus: 'Yeni meseleler amaç, kaynak, uzmanlık, yarar-zarar, hak ve sorumluluk ilkeleriyle değerlendirilir.',
    concepts: [
      ['İçtihat', 'Dinî kaynaklardan yeni meseleler hakkında yöntemli sonuç çıkarma çabasıdır; yeterli bilgi ve uzmanlık gerektirir.', 'Yeni meselede yöntemli hüküm çıkarma çabasıdır.', 'kullanır'],
      ['Maslahat', 'Birey ve toplum için gerçek yararın gözetilmesidir. Her kişisel çıkar maslahat sayılmaz.', 'Gerçek ve ortak yararı gözetmektir.', 'dengeler'],
      ['Zarar vermeme', 'Bir uygulamanın kişiye, topluma ve çevreye doğuracağı zararı önleme ilkesidir.', 'Zararı önleme ilkesidir.', 'sınırlar'],
      ['Helal', 'Dinî bakımdan yapılmasına izin verilen davranış ve imkândır.', 'Yapılmasına izin verilendir.', 'ayrılır'],
      ['Haram', 'Dinî bakımdan kesin biçimde yasaklanan davranıştır.', 'Kesin biçimde yasaklanandır.', 'sınırlar'],
    ],
    explanation: `Güncel meseleler tek bir sloganla çözülmez. Konunun gerçeği uzmanlardan öğrenilir; ilgili dinî ilkeler belirlenir; amaç, yöntem, yarar, zarar, adalet, mahremiyet ve zorunluluk birlikte değerlendirilir. Organ nakli, biyoteknoloji, finans ve dijital hayat gibi alanlarda bu çok yönlü yaklaşım gerekir.

Bir şeyin yeni olması onu otomatik olarak haram veya helal yapmaz. Araç ile kullanım amacı ayrılır. Yeterli bilgi olmadan kesin hüküm vermek, dinî ve bilimsel uzmanlığı göz ardı eder.`,
    exampleBody: 'Sağlıkla ilgili yeni bir uygulama değerlendirilirken önce tıbbi yarar ve risk uzmanlardan öğrenilir; sonra canın korunması, zarar vermeme, rıza ve adalet ilkeleri birlikte ele alınır.',
    compare: { title: 'Helal ↔ haram ↔ şüpheli alan', columns: ['Helal', 'Haram', 'Şüpheli/araştırılacak'], rows: [{ label: 'Durum', values: ['İzin açık veya engel yoktur.', 'Kesin yasak vardır.', 'Bilgi veya hüküm net değildir.'] }, { label: 'Tutum', values: ['Ölçü ve sorumlulukla yararlanılır.', 'Kaçınılır.', 'Uzman bilgi ve güvenilir kaynağa başvurulur.'] }, { label: 'Yanlış', values: ['Sınırsız kullanım demek değildir.', 'Kişisel hoşnutsuzlukla ilan edilmez.', 'Söylentiyle kesinleştirilmez.'] }], insight: 'Helal olanın kullanımı da israf, zarar veya hak ihlali üretebilir; etik değerlendirme sürer.' },
    trap: { title: 'Yeni olanı doğrudan yasak saymak', wrong: '“Geçmişte adı geçmeyen her teknoloji dinen yasaktır.”', right: 'Yeni meseleler temel kaynak ve amaçlar ışığında, uzmanlık ve sonuçlar gözetilerek değerlendirilir.', body: 'Araç, amaç ve sonuç ayrımını koru.' },
    exam: { body: 'ÖSYM, güncel bir durumda hangi temel ilkenin uygulanacağını ve sağlıklı karar sürecinin basamaklarını ölçer.', patterns: ['Uzmanlığa başvurma', 'Yarar–zarar dengesi', 'Mahremiyet, rıza ve adalet ilkeleri'] },
    interpretation: { title: 'Yorum örneği: bilgi olmadan hüküm yok', prompt: 'Metin, yeni bir sağlık uygulamasında hem alan uzmanına hem dinî kaynaklara başvurulmasını istiyor. Ana yaklaşım nedir?', signal: 'Bilimsel gerçeklik ve dinî değerlendirme birlikte isteniyor.', match: 'Uzmanlık, içtihat ve bütüncül değerlendirme.', distractor: 'Metin yalnız kişisel kanaati yeterli görmüyor.', answer: '**Uzmanlığa ve temel ilkelere dayalı yöntemli değerlendirme.**', takeaway: 'Güncel meselelerde güvenilir bilgi ilk adımdır.' },
    spots: ['İçtihat uzmanlık ve yöntem gerektirir.', 'Her kişisel çıkar maslahat değildir.', 'Yeni olmak tek başına hüküm belirlemez.', 'Amaç, araç ve sonuç birlikte değerlendirilir.'],
    quiz: { question: 'Yeni bir tıbbi uygulamada ilk yapılması gereken nedir?', options: ['Sosyal medya yorumuna göre hüküm vermek', 'Konunun bilimsel gerçekliğini uzmanlardan öğrenmek', 'Yeni olduğu için reddetmek', 'Yalnız ekonomik kazanca bakmak'], answerIndex: 1, explanation: 'Sağlıklı dinî değerlendirme, meselenin gerçekliğini doğru ve uzman bilgisiyle anlamakla başlar.' },
    nextTopics: ['Din, Çevre ve Teknoloji', 'İnançla İlgili Meseleler'],
  }),
  topic({
    slug: 'tasavvufi-yorumlar', topic: 'İslam Düşüncesinde Tasavvufi Yorumlar',
    focus: 'Tasavvuf; ahlakı güzelleştirme, nefsin olumsuz eğilimlerini eğitme ve Allah sevgisini derinleştirme çabasıdır.',
    concepts: [
      ['Tasavvuf', 'İslam’ın manevi ve ahlaki boyutunu; samimiyet, sevgi, zikir ve nefis terbiyesi üzerinden yaşamaya odaklanan gelenektir.', 'Manevi ve ahlaki derinleşme geleneğidir.', 'amaçlar'],
      ['Nefis terbiyesi', 'İnsanın bencillik, kibir ve ölçüsüz arzularını fark edip irade ve ahlakla eğitmesidir.', 'Olumsuz eğilimleri ahlakla eğitmektir.', 'geliştirir'],
      ['Zikir', 'Allah’ı anma ve O’na yönelik bilinci canlı tutmadır.', 'Allah’ı anma bilincidir.', 'besler'],
      ['Tarikat', 'Belirli yöntem, adab ve rehberlik etrafında oluşan tasavvufi eğitim yoludur.', 'Sistemleşmiş tasavvufi eğitim yoludur.', 'kurumsallaşır'],
      ['Cem', 'Alevi-Bektaşi geleneğinde toplu ibadet ve erkânın yürütüldüğü dinî toplantıdır.', 'Alevi-Bektaşi toplu ibadet erkânıdır.', 'yer alır'],
    ],
    explanation: `Tasavvufun temel amacı dinin yerine yeni bir din kurmak değil, iman ve ibadetin ahlaka yansımasını güçlendirmektir. Sevgi, tevazu, sabır, cömertlik ve samimiyet öne çıkar. Tarikat, tasavvufun tarih içinde kurumlaşan yollarından biridir; tasavvufla bire bir aynı kapsamda değildir.

Yesevilik, Mevlevilik, Kadirilik, Nakşibendilik ve Alevi-Bektaşi geleneği tarihsel bağlam ve temel kavramlarıyla ele alınır; siyasal ve mezhepsel tartışmaya girilmez.`,
    exampleBody: 'Kişinin öfkesini yönetmesi, gösterişten kaçınması ve iyiliği karşılıksız yapması **nefis terbiyesi ve ihlas** ile ilişkilidir.',
    compare: { title: 'Tasavvuf ↔ tarikat', columns: ['Tasavvuf', 'Tarikat'], rows: [{ label: 'Kapsam', values: ['Manevi-ahlaki düşünce ve yaşantı alanı', 'Belirli yöntemle oluşmuş eğitim yolu'] }, { label: 'İlişki', values: ['Tarikatları kapsayan daha geniş alan', 'Tasavvufun tarihsel kurumlaşma biçimi'] }, { label: 'Amaç', values: ['Ahlaki ve manevi olgunlaşma', 'Bu amacı belirli usulle sürdürme'] }], insight: 'Her tasavvufi düşünce tek bir tarikata indirgenmez; tarikat tasavvufun kurumlaşmış biçimlerinden biridir.' },
    trap: { title: 'Tasavvufu yalnız tören sanmak', wrong: '“Tasavvuf sadece belirli müzik veya törenlerden ibarettir.”', right: 'Tasavvufun merkezi ahlaki arınma, samimiyet ve Allah sevgisidir.', body: 'Biçimsel örneğin arkasındaki amacı ara.' },
    exam: { body: 'ÖSYM, tasavvufun ahlaki amacını, temel kavramları ve oluşumları nesnel biçimde eşleştirmeyi ölçer.', patterns: ['Nefis terbiyesini öz denetimle ilişkilendirme', 'Tasavvuf–tarikat ayrımı', 'Cem ve semah gibi kavramları doğru gelenekle eşleştirme'] },
    interpretation: { title: 'Yorum örneği: kendini eğitmek', prompt: 'Metin, kişinin başkasının kusurundan önce kendi kibir ve öfkesini düzeltmesini istiyor. Ana kavram nedir?', signal: 'İçe dönük ahlaki denetim var.', match: 'Nefis terbiyesi ve öz denetim.', distractor: 'Metin toplumsal eleştiriyi bütünüyle reddetmiyor; önceliği iç arınmaya veriyor.', answer: '**Nefis terbiyesi.**', takeaway: 'Kibir, öfke, bencillik ve iç denetim tasavvufi ahlakın güçlü işaretleridir.' },
    spots: ['Tasavvuf manevi ve ahlaki derinleşmedir.', 'Nefis terbiyesi olumsuz eğilimleri eğitmektir.', 'Tarikat tasavvufi eğitim yoludur.', 'Zikir Allah’ı anma bilincidir.'],
    quiz: { question: 'Tasavvufun temel amacı hangisidir?', options: ['Yeni bir din kurmak', 'Ahlaki ve manevi olgunlaşmayı desteklemek', 'Bilimsel yöntemi reddetmek', 'Siyasi otorite oluşturmak'], answerIndex: 1, explanation: 'Tasavvuf, iman ve ibadetin ahlaki-manevi derinliğini geliştirmeyi amaçlar.' },
    nextTopics: ["İslam'da Ahlak İlkeleri", 'İslam Medeniyeti ve Gönül Coğrafyamız'],
  }),
  topic({
    slug: 'hint-cin-dinleri', topic: 'Hint ve Çin Dinleri',
    focus: 'Hinduizm, Budizm, Konfüçyanizm ve Taoizm temel kavram kümeleriyle nesnel biçimde ayırt edilir.',
    concepts: [
      ['Hinduizm', 'Hint alt kıtasında gelişen; karma, samsara, mokşa ve çok katmanlı kutsal metin geleneğiyle ilişkilendirilen dindir.', 'Karma, samsara ve mokşa kavramlarıyla tanınır.', 'içerir'],
      ['Budizm', 'Siddhartha Gautama’nın öğretisi çevresinde gelişen; acının kaynağı ve ondan kurtuluş yoluna odaklanan dinî-felsefi gelenektir.', 'Acıdan kurtuluş ve sekiz dilimli yol öğretisidir.', 'amaçlar'],
      ['Konfüçyanizm', 'Konfüçyüs’ün öğretileri çevresinde ahlak, aile, toplumsal düzen ve erdemli ilişkilere odaklanan gelenektir.', 'Ahlak ve toplumsal uyum öğretisidir.', 'vurgular'],
      ['Taoizm', 'Tao ile uyum, doğallık ve zorlamasız eylem düşüncelerini öne çıkaran Çin geleneğidir.', 'Doğal akış ve Tao ile uyum öğretisidir.', 'vurgular'],
      ['Karma', 'Eylemlerin ahlaki sonuçlarının sonraki varoluş süreçlerini etkilediği düşüncesidir.', 'Eylemlerin sonraki varoluşa etkisidir.', 'bağlanır'],
    ],
    explanation: `Hint dinleri sorularında karma, samsara, mokşa, nirvana ve kast; Çin dinleri sorularında toplumsal uyum, atalara saygı, Tao, yin-yang ve wu wei gibi kavramlar ayırt edici olabilir. Her geleneğin iç çeşitliliği vardır; kısa sınav özeti bütün mensupları tek tip göstermez.

Karma kader değildir: eylemlerin sonuçlarını yeniden doğuş anlayışıyla ilişkilendirir. Nirvana bir mekân olarak değil, Budist düşüncede arzu ve acı döngüsünden kurtuluş hâli olarak anlaşılır.`,
    exampleBody: '“Eylemler sonraki doğuşu etkiler ve yeniden doğuş döngüsünden kurtuluş aranır.” ifadesi **Hint dinleri**, özellikle karma ve samsara kavramlarıyla ilişkilidir.',
    compare: { title: 'Hinduizm ↔ Budizm ↔ Çin gelenekleri', columns: ['Hinduizm', 'Budizm', 'Konfüçyanizm/Taoizm'], rows: [{ label: 'Ayırt edici kavram', values: ['Karma, samsara, mokşa', 'Dört yüce hakikat, nirvana', 'Toplumsal erdem / Tao ile uyum'] }, { label: 'Coğrafi köken', values: ['Hint alt kıtası', 'Hint alt kıtası', 'Çin'] }, { label: 'Öne çıkan yön', values: ['Çok katmanlı inanç ve toplumsal yapı', 'Acının nedeni ve kurtuluş yolu', 'Toplumsal düzen veya doğal akış'] }], insight: 'Karma iki Hint geleneğinde de görülebilir; Budizm’i ayırmak için dört yüce hakikat ve nirvana gibi ek işaretlere bak.' },
    trap: { title: 'Karma ile kaderi aynı sanmak', wrong: '“Karma, İslam’daki kader kavramının başka adıdır.”', right: 'Karma, yeniden doğuş anlayışı içinde eylem sonuçlarını açıklayan farklı bir kavramdır.', body: 'Benzer “sonuç” çağrışımı kavramların aynı olduğu anlamına gelmez.' },
    exam: { body: 'ÖSYM, temel kavram kümelerini doğru dinle eşleştirmeyi ve benzer görünen kavramları nesnel biçimde ayırmayı ölçer.', patterns: ['Karma–samsara–mokşa kümesini tanıma', 'Nirvana ve dört yüce hakikatten Budizmi bulma', 'Tao ve wu weiden Taoizmi ayırma'] },
    interpretation: { title: 'Yorum örneği: acının kaynağı', prompt: 'Bir öğreti arzunun acıya yol açtığını ve belirli bir yol izlenerek bu döngüden çıkılacağını savunuyor. Hangisi?', signal: 'Arzu, acı ve kurtuluş yolu birlikte.', match: 'Budizm ve dört yüce hakikat öğretisi.', distractor: 'Yalnız karma sözcüğü Hinduizmi kesinleştirmez; burada acı öğretisi ayırıcıdır.', answer: '**Budizm.**', takeaway: 'Dinler sorusunda kavram kümesi, tek bir kelimeden daha güvenlidir.' },
    spots: ['Karma eylem-sonuç öğretisidir.', 'Samsara yeniden doğuş döngüsüdür.', 'Nirvana Budist kurtuluş hedefidir.', 'Konfüçyanizm toplumsal erdemi, Taoizm doğal uyumu öne çıkarır.'],
    quiz: { question: 'Tao ile uyum ve zorlamasız eylem hangi gelenekle ilişkilidir?', options: ['Taoizm', 'Yahudilik', 'Hristiyanlık', 'Hinduizm'], answerIndex: 0, explanation: 'Tao ve wu wei (zorlamasız eylem) Taoizmin temel kavramlarıdır.' },
    nextTopics: ['Yahudilik ve Hristiyanlık', 'Din, Felsefe, Bilim ve Sanat'],
  }),
]

export const TYT_RELIGION_LESSONS = [...grade9, ...grade10, ...grade11, ...grade12]
