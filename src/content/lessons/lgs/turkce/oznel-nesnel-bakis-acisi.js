import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Cümlede Anlam · 2. ders
 * Kazanım : T.8.3.21 · T.8.3.24 · T.8.3.25
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * T.8.3.21'in açıklaması üç şey ister: yazarın bakış açısının tespiti,
 * öznel-nesnel yaklaşımların tespiti, örnek ve ayrıntılara atıf. T.8.3.24
 * gerçek ve kurgusal unsurların ayrımını ekler. Bu ders üçünü birlikte
 * işler; çünkü hepsi tek bir soruya dayanır: bu yargıyı ne denetler?
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-oznel-nesnel-bakis-acisi',
  topic: 'Cümlede Anlam',
  order: 2,
  title: 'Öznel–Nesnel Yargı ve Yazarın Bakış Açısı',
  subtitle:
    'Ölçüt “doğru mu” değil, “denetlenebilir mi”. Nesnel bir yargı yanlış da olabilir; öznel bir yargı herkesçe paylaşılıyor da olabilir.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.3.21', metin: 'Metnin içeriğini yorumlar.' },
    { kod: 'T.8.3.24', metin: 'Metindeki gerçek ve kurgusal unsurları ayırt eder.' },
    { kod: 'T.8.3.25', metin: 'Okudukları ile ilgili çıkarımlarda bulunur.' },
  ],
  prerequisites: [
    { topic: 'Cümlede anlam ilişkileri', why: 'Bir cümledeki yargıyı yalıtmayı önceki derste kurduk; bu ders o yargıyı sınıflandırır.' },
    { topic: 'Bağlamda sözcük anlamı', why: 'Değerlendirme bildiren sözcükleri tanımak için bağlam okuması gerekir.' },
  ],
  outcomes: [
    'Bir yargının öznel mi nesnel mi olduğunu doğrulanabilirlik testiyle belirleyebileceksin.',
    'Nesnel bir yargının yanlış da olabileceğini örnekle açıklayabileceksin.',
    'Aynı cümle içinde hem nesnel hem öznel bölüm bulunabileceğini gösterebileceksin.',
    'Yazarın bakış açısını, seçtiği ayrıntılardan ve kullandığı sözcüklerden çıkarabileceksin.',
    'Bir metindeki gerçek unsurlarla kurgusal unsurları ayırt edebileceksin.',
  ],

  opening: {
    title: 'Bu cümleyi ne denetler?',
    lead: 'Öznel–nesnel ayrımı bir doğruluk yarışması değildir. Sorulan şey, yargının kim tarafından sınanabileceğidir.',
    body: `Şu iki cümleyi karşılaştır: “Bu kitap 240 sayfadır.” ve “Bu kitap gereğinden uzun.” Birincisini sınamak için yapman gereken tek şey sayfaları saymaktır; sonuç kimin saydığına göre değişmez. İkincisini sınamanın bir yolu yoktur: bir okur uzun bulur, başka bir okur tam kıvamında bulur.

İşte bütün konu bu farkta. **Nesnel yargı**, doğruluğu kişiden bağımsız olarak denetlenebilen yargıdır. **Öznel yargı**, kişinin duygusuna, beğenisine veya değerlendirmesine dayanan ve kişiden kişiye değişebilen yargıdır.

Burada öğrencilerin çoğunun düştüğü bir yanılgı var, hemen kıralım: **nesnel olmak doğru olmak demek değildir.** “Dünya’nın uydusu iki tanedir.” cümlesi yanlıştır; ama nesneldir, çünkü nasıl denetleneceği bellidir ve denetlendiğinde yanlış çıkar. Ölçüt doğruluk değil, **denetlenebilirliktir**. Bu tek cümle, konunun en zor sorularının yarısını çözer.

MEB 8. sınıf programındaki **T.8.3.21** kazanımı, metnin içeriğinin yorumlanmasını isterken açıkça iki şey sayar: yazarın olaylara bakış açısının tespit edilmesi ve metindeki öznel–nesnel yaklaşımların tespit edilmesi. **T.8.3.24** ise buna gerçek ve kurgusal unsurların ayrımını ekler. Üçü de aynı zihinsel işi yapar: bir ifadenin arkasında **ne** olduğunu — ölçülebilir bir olgu mu, bir değerlendirme mi, bir kurgu mu — görmek.

Ders boyunca önce doğrulanabilirlik testini kuracağız, sonra aynı cümlede iki yaklaşımın nasıl bir arada bulunabildiğini göreceğiz, ardından yazarın bakış açısını seçtiği ayrıntılardan çıkarmayı çalışacağız ve son olarak gerçek–kurgusal ayrımını ele alacağız.`,
  },

  concepts: [
    {
      term: 'Nesnel (objektif) yargı',
      body: 'Doğruluğu ya da yanlışlığı kişiden bağımsız olarak denetlenebilen yargıdır: ölçülebilir, sayılabilir, belgelenebilir ya da gözlemlenebilir. “Bu kitap 1998’de basılmıştır.” Denetim yolu bellidir; sonuç kimin denetlediğine göre değişmez.',
    },
    {
      term: 'Öznel (sübjektif) yargı',
      body: 'Kişinin beğenisine, duygusuna veya değerlendirmesine dayanan ve kişiden kişiye değişebilen yargıdır: “Bu kitabın anlatımı çok sıkıcı.” Ortak bir denetim yolu yoktur; herkesin ulaşacağı sonuç aynı olmak zorunda değildir.',
    },
    {
      term: 'Doğrulanabilirlik',
      body: 'Bir yargının sınanma yolunun bulunup bulunmadığıdır. Bu dersin tek ölçütü budur. Yargının doğru çıkması gerekmez; **sınanabilir olması** yeterlidir.',
    },
    {
      term: 'Bakış açısı',
      body: 'Yazarın olayları hangi yerden, hangi tutumla ve neyi öne çıkararak anlattığıdır. Bakış açısı doğrudan söylenmez; yazarın **seçtiği ayrıntılardan** ve kullandığı değerlendirme sözcüklerinden çıkarılır.',
    },
    {
      term: 'Gerçek unsur',
      body: 'Metinde geçen ve gerçek dünyada karşılığı bulunan, doğrulanabilir öge: gerçek bir yer adı, tarih, kişi, olay ya da bilimsel bilgi. Kurgusal bir metnin içinde de gerçek unsur bulunabilir.',
    },
    {
      term: 'Kurgusal unsur',
      body: 'Yazarın hayal gücüyle oluşturduğu, gerçek dünyada karşılığı olmayan öge: uydurulmuş bir kahraman, olmamış bir olay, yaşanması mümkün olmayan bir durum. Bir metnin türü tek başına her ögesini kurgusal yapmaz.',
    },
  ],

  why: {
    question: 'Neden “beğeni sözcüğü listesi” ezberlemek çöker?',
    body: `Öğrencilerin çoğu şu kestirmeyi öğrenir: “güzel, kötü, sıkıcı, harika gördüysen öznel.” Bu ilk birkaç soruda işe yarar, sonra çöker. Üç sebebi var.

**Birincisi:** değerlendirme sözcüğü içermeyen öznel yargılar vardır. “Bu film insanı düşündürüyor.” cümlesinde tek bir beğeni sözcüğü yok; ama yargı kişiden kişiye değişir, çünkü herkesi düşündürmeyebilir. Öznel.

**İkincisi:** değerlendirme sözcüğü içeren nesnel yargılar da olabilir. “Bu yazar, romanında ‘güzel’ sözcüğünü kırk iki kez kullanmıştır.” cümlesinde bir beğeni sözcüğü geçiyor ama yargı sayılabilir bir olguyu bildiriyor. Nesnel.

**Üçüncüsü:** en zorlu sorular tam da bu ezberi hedefler. Soru hazırlayanlar, seçeneklerin bir kısmına beğeni sözcüğü koyup nesnel yargı kurar, bir kısmına da beğeni sözcüğü koymadan öznel yargı kurar. Ezber yapan öğrenci bu soruyu kaybeder.

O hâlde tek güvenilir yol testtir: **“Bu yargıyı nasıl denetlerim?”** Denetleme yolunu tarif edebiliyorsan — sayarım, ölçerim, belgeye bakarım, kaydı kontrol ederim — yargı nesneldir. Tarif edemiyorsan, “bence öyle” demekten öteye geçemiyorsan, yargı özneldir.

Bu test aynı zamanda “nesnel = doğru” yanılgısını da çözer. “Bu köprü 1970’te açıldı.” cümlesi yanlış olabilir; ama denetim yolu bellidir. Yanlış olması onu öznel yapmaz, yalnızca yanlış nesnel yargı yapar.`,
  },

  decision: {
    title: 'Öznel mi nesnel mi? Beş duraklı denetim',
    lead: 'Sözcüklere değil, yargının sınanma yoluna bak.',
    intro:
      'Bir cümleyle karşılaştığında şu beş durağı uygula. İkinci durak bu dersin tek gerçek testidir; üçüncü ve dördüncü duraklar onu sağlamlaştırır.',
    steps: [
      {
        title: '1. Yargıyı yalıt',
        body: 'Cümlede birden çok yargı olabilir. Her birini kısa bir cümleye çevir ve ayrı ayrı sına. “1998’de basılan bu kitap çok akıcıdır.” cümlesinde iki yargı var ve ikisinin türü farklı.',
      },
      {
        title: '2. Denetim yolunu tarif et',
        body: 'Kendine sor: bu yargının doğru olup olmadığını nasıl anlarım? Sayarım mı, ölçerim mi, belgeye mi bakarım? Yolu tarif edebiliyorsan **nesnel**; tarif edemiyorsan **öznel**.',
      },
      {
        title: '3. Kişiden kişiye değişir mi?',
        body: 'Aynı yargıyı beş kişi denetlese hepsi aynı sonuca ulaşır mı? Ulaşıyorsa nesnel. “Bu roman sıkıcı.” yargısında beş kişi beş ayrı sonuca ulaşabilir; öznel.',
      },
      {
        title: '4. Doğruluk tuzağını kontrol et',
        body: 'Yargının doğru olup olmadığına takılma. Yanlış ama denetlenebilir bir yargı yine nesneldir. Bu adımı atlarsan, bilgi hatası içeren nesnel cümleleri öznel sanırsın.',
      },
      {
        title: '5. Yazarın tutumunu adlandır',
        body: 'Cümlede öznellik varsa bu, yazarın bir tutum aldığını gösterir: övüyor mu, eleştiriyor mu, tarafsız kalmaya mı çalışıyor? Bakış açısı sorularında istenen şey budur.',
      },
    ],
    takeaway: 'Ölçüt doğruluk değil denetlenebilirliktir.',
  },

  decisionTree: {
    title: 'Denetlenebilirlik kontrolü',
    intro:
      'Aşağıdaki üç kontrol sırayla uygulanır. Birinci kontrolü geçen cümle için ötekilere bakmana gerek kalmaz.',
    checks: [
      {
        question: 'Bu yargıyı sayarak, ölçerek, gözlemleyerek veya belgeye bakarak sınayabilir miyim?',
        yes: 'Nesneldir. Örnek: “Kitap 240 sayfadır.” — sayfaları sayarım.',
        no: 'Nesnel değildir; ikinci kontrole geç.',
      },
      {
        question: 'Aynı cümleyi farklı kişiler denetlese hepsi aynı sonuca ulaşır mı?',
        yes: 'Yine nesneldir; denetim yolu dolaylı olabilir ama vardır.',
        no: 'Kişiden kişiye değişiyor; üçüncü kontrole geç.',
      },
      {
        question: 'Yargı bir beğeni, duygu veya değerlendirme mi bildiriyor?',
        yes: 'Özneldir. Örnek: “Anlatımı gereğinden ağır.”',
        no: 'Yargı belirsiz kurulmuş olabilir; cümleyi yeniden yalıt ve birinci kontrole dön.',
      },
    ],
    takeaway:
      'Birinci kontrolü geçen bir yargı, yanlış olsa bile nesneldir. Doğruluk bu ağacın hiçbir düğümünde sorulmaz.',
  },

  comparison: {
    title: 'İki yaklaşımı ölçütle ayır',
    columns: ['Nesnel yaklaşım', 'Öznel yaklaşım'],
    rows: [
      { label: 'Ölçüt', values: ['Denetim yolu vardır', 'Denetim yolu yoktur'] },
      { label: 'Kişiye bağlılık', values: ['Kimin denetlediğine göre değişmez', 'Kişiden kişiye değişir'] },
      { label: 'Örnek', values: ['Bu köprü 1.200 metre uzunluğundadır.', 'Bu köprü şehrin en etkileyici yapısıdır.'] },
      { label: 'Doğruluk', values: ['Doğru da yanlış da olabilir', 'Doğru-yanlış denemez; katılınır veya katılınmaz'] },
      { label: 'Metindeki yeri', values: ['Bilgi verme, tanıtma, aktarma bölümleri', 'Değerlendirme, yorum, kapanış bölümleri'] },
      { label: 'Sık yapılan hata', values: ['Yanlış bilgi içeriyorsa öznel sanmak', 'Herkesin katıldığı bir yorumu nesnel sanmak'] },
    ],
    insight:
      'Bir yorumun herkesçe paylaşılması onu nesnel yapmaz. Ortak beğeni de beğenidir; denetim yolu doğurmaz.',
  },

  traps: [
    {
      title: '“Nesnel yargı her zaman doğrudur” sanmak',
      wrong: '“Dünya’nın iki uydusu vardır.” yanlış bir bilgi; öyleyse bu cümle öznel olmalı.',
      right: 'Bu cümle **yanlış ama nesneldir**: nasıl denetleneceği bellidir ve denetlendiğinde yanlış çıkar. Doğruluk, öznel–nesnel ayrımının ölçütü değildir.',
      body: 'Bu ayrımı kaçırırsan, içinde bilgi hatası bulunan nesnel cümleleri sürekli öznel işaretlersin. Sorulardaki en pahalı hatalardan biridir.',
    },
    {
      title: 'Sayı gördüğü an nesnel demek',
      wrong: 'Cümlede rakam var; öyleyse nesneldir.',
      right: 'Sayı bir değerlendirmenin içine gömülmüş olabilir: “Bu kitabın 300 sayfası da gereksizdi.” Sayı nesnel, yargı öznel.',
      body: 'Testi sayıya değil yargıya uygula: “gereksizdi” hükmünü nasıl denetlerim? Denetleyemiyorsan yargı özneldir, içinde sayı geçse bile.',
    },
    {
      title: 'Yazarın bakış açısını kendi görüşünle karıştırmak',
      wrong: 'Ben de bu konuda böyle düşünüyorum; demek ki yazar da böyle düşünüyor.',
      right: 'Yazarın tutumunu metindeki sözcüklerden ve seçtiği ayrıntılardan çıkarırım; kendi görüşüm kanıt değildir.',
      body: 'Bakış açısı sorularında en sık düşülen tuzak budur. Cevabını metinden bir ifadeyle gösteremiyorsan, muhtemelen kendi görüşünü okumuşsundur.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-oznel-nesnel-ayni-cumle',
      title: 'Aynı cümlede iki yaklaşım birden',
      lead: 'LGS soruları çoğu zaman saf cümle vermez. Bir cümlenin bir bölümü nesnel, öteki bölümü öznel olabilir; soru da genellikle bunu ölçer.',
      blocks: [
        {
          id: 'lgs-oznel-ayni-anlatim',
          type: 'prose',
          body: `“1998’de yayımlanan bu roman, yazarın en etkileyici kitabıdır.” cümlesini ele alalım. İçinde iki ayrı yargı var.

Birinci yargı: **romanın 1998’de yayımlanmış olması.** Bunu denetlemek için künyeye bakarım; sonuç kimin baktığına göre değişmez. **Nesnel.**

İkinci yargı: **yazarın en etkileyici kitabı olması.** “Etkileyici” bir değerlendirmedir; hangi kitabın en etkileyici olduğu okurdan okura değişir. **Öznel.**

Bu tür cümlelerde soru genellikle şu biçimde gelir: “Bu cümlede öznellik hangi bölümde başlamaktadır?” ya da “Bu cümlede hem öznel hem nesnel yargı vardır.” ifadesinin doğruluğu sorulur. İkinci biçimde, cümleyi bölmeden karar veren öğrenci hata yapar.

Bölme işini şöyle yap: **virgülleri, bağlaçları ve sıfat-fiilleri sınır olarak kullan.** “1998’de yayımlanan” bir sıfat-fiil öbeğidir ve kendi başına bir bilgi taşır. “Yazarın en etkileyici kitabıdır” ise cümlenin asıl yüklemidir ve hüküm içerir. İki parçayı ayırıp testi ayrı ayrı uygula.

Bir ayrıntı daha: bir cümlede nesnel bölüm bulunması, cümlenin tamamını nesnel yapmaz. Soru “bu cümle nesneldir” diyorsa, cümlenin **hiçbir** bölümünde öznellik olmamalıdır. Tersi de geçerlidir: tek bir değerlendirme sözcüğü bile cümleye öznellik katar.

Son olarak, tanıtım ve eleştiri metinleri bu yapıyı sık kullanır. Yazar önce doğrulanabilir bilgi verir — böylece güven kurar — sonra kendi hükmünü ekler. Bunu tanıdığında, metnin hangi bölümünün bilgi hangi bölümünün yorum olduğunu hızlıca görürsün.`,
        },
        {
          id: 'lgs-oznel-ayni-tablo',
          type: 'table',
          interactive: true,
          title: 'Cümleyi böl, ayrı ayrı sına',
          columns: ['Cümle', 'Nesnel bölüm', 'Öznel bölüm', 'Neden?'],
          rows: [
            ['1998’de yayımlanan bu roman, yazarın en etkileyici kitabıdır.', '1998’de yayımlanan', 'en etkileyici kitabıdır', 'Tarih künyeden denetlenir; “etkileyici” denetlenemez.'],
            ['Üç bölümden oluşan belgesel, izleyiciyi sıkmadan ilerliyor.', 'Üç bölümden oluşan', 'izleyiciyi sıkmadan ilerliyor', 'Bölüm sayısı sayılır; sıkılmak kişiden kişiye değişir.'],
            ['Kütüphane sabah dokuzda açılıyor ve çok ferah bir yer.', 'sabah dokuzda açılıyor', 'çok ferah bir yer', 'Açılış saati gözlenir; ferahlık değerlendirmedir.'],
            ['Yazar bu kitabında kırk iki kez “güzel” sözcüğünü kullanmış.', 'tamamı', '—', 'İçinde beğeni sözcüğü geçiyor ama yargı sayılabilir bir olgudur.'],
            ['Bu film insanı düşündürüyor.', '—', 'tamamı', 'Tek bir beğeni sözcüğü yok; ama etki kişiden kişiye değişir.'],
          ],
          caption:
            'Son iki satır ezberi kırar: beğeni sözcüğü içeren nesnel yargı da, beğeni sözcüğü içermeyen öznel yargı da vardır.',
        },
        {
          id: 'lgs-oznel-ayni-analiz',
          type: 'sentence_analysis',
          title: 'Öznellik cümlenin neresinde başlıyor?',
          prompt:
            'Aşağıdaki cümleyi parçalara ayırıp her parçaya denetlenebilirlik testini uygulayacağız. Parçalara tıklayarak sonuçları gör.',
          segments: [
            {
              text: '2019’da açılan müze,',
              label: 'Nesnel — belgeyle denetlenir',
              explanation:
                'Açılış yılı kayıtlardan bakılır. Kim bakarsa baksın aynı sonuca ulaşır. Yanlış bilgi olsa bile nesnel kalır.',
              tone: 'aqua',
            },
            {
              text: 'iki katlı bir binada hizmet veriyor',
              label: 'Nesnel — gözlemle denetlenir',
              explanation:
                'Kat sayısı sayılır. Buraya kadar cümlede hiçbir değerlendirme yok.',
              tone: 'aqua',
            },
            {
              text: 've şehrin en huzurlu köşesi sayılıyor.',
              label: 'Öznel — denetim yolu yok',
              explanation:
                'Huzur bir duygudur; “en huzurlu” hükmünü sayarak ya da ölçerek sınayamayız. Öznellik tam burada başlıyor.',
              tone: 'danger',
            },
            {
              text: '(Test: “sayılıyor” ifadesi bunu nesnel yapar mı?)',
              label: 'Tuzak kontrolü',
              explanation:
                'Hayır. “Sayılıyor” yargıyı başkalarına mal eder ama denetim yolu yaratmaz. Ortak kanaat de kanaattir; öznel kalır.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Cümlenin üçte ikisi nesnel olabilir; son bölümdeki tek bir hüküm cümleye öznellik katmaya yeter.',
        },
      ],
    },

    {
      id: 'lgs-turkce-oznel-bakis-acisi',
      title: 'Yazarın bakış açısı: söylemediğinden anlaşılır',
      lead: 'Bakış açısı doğrudan yazılmaz. Yazarın hangi ayrıntıyı seçtiği, hangi sözcüğü tercih ettiği ve neyi anlatmadığı seni ona götürür.',
      blocks: [
        {
          id: 'lgs-oznel-bakis-anlatim',
          type: 'prose',
          body: `Aynı olayı iki yazar anlatsa, ikisi de doğru bilgi verse bile ortaya iki farklı metin çıkar. Çünkü yazar anlatırken **seçim yapar**: hangi ayrıntıyı öne alacak, hangi sözcüğü kullanacak, neyi hiç anlatmayacak.

Bir örnek kuralım. Bir okulun yeni kütüphanesi açılıyor. Birinci yazar “raf sayısı”, “kitap sayısı”, “açılış saati” ayrıntılarını seçiyor ve “işlevsel”, “düzenli” gibi sözcükler kullanıyor. İkinci yazar “eski kütüphanenin yıkılması”, “taşınan kitapların bir kısmının zarar görmesi” ayrıntılarını seçiyor ve “aceleye getirilmiş”, “gözden çıkarılmış” gibi sözcükler kullanıyor. İkisi de yalan söylemiyor olabilir; ama bakış açıları tamamen farklı.

Bakış açısını çıkarmanın üç güvenilir yolu var. **Birincisi: seçilen ayrıntılar.** Yazar neyi anlatmayı seçmiş? Olumlu tarafı mı, sorunlu tarafı mı? **İkincisi: yüklü sözcükler.** “Yenilendi” ile “elden geçirildi” ile “aceleye getirildi” aynı olayı anlatır, farklı tutum taşır. **Üçüncüsü: öznel yargıların yönü.** Metindeki değerlendirmeler hep aynı yöne mi bakıyor?

Bir uyarı: yazarın bakış açısını belirlemek, **onunla aynı fikirde olmak ya da olmamak değildir.** Soru “yazar ne düşünüyor?” diye sorar, “sen ne düşünüyorsun?” diye değil. Kendi görüşünü metnin üzerine bindirirsen, metinde olmayan bir tutumu yazara mal edersin.

Bir uyarı daha: her metnin belirgin bir bakış açısı olmayabilir. Bilgilendirici metinlerde yazar bilerek tarafsız durabilir. Böyle bir metinde “yazar eleştirel bir tutum takınmıştır” seçeneği yanlıştır; kanıtı yoktur. Tarafsızlık da bir tutumdur ve metinden gösterilebilir: değerlendirme sözcüğü yoksa, öznel yargı yoksa, yazar bilgi aktarmakla yetinmiştir.

Son olarak kazanımın üçüncü maddesini hatırla: **metindeki örnek ve ayrıntılara atıf yapılması.** Bakış açısı sorusuna verdiğin cevabı, metinden bir örnek ya da ayrıntıyla desteklemen beklenir. “Yazar olumsuz bakıyor” demek yetmez; “çünkü kütüphaneyi anlatırken yalnız zarar gören kitaplardan söz etmiş” diyebilmen gerekir.`,
        },
        {
          id: 'lgs-oznel-bakis-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı olay, üç bakış açısı',
          columns: ['Tutum', 'Seçilen ayrıntı', 'Kullanılan sözcük', 'Metinden kanıt cümlesi'],
          rows: [
            ['Olumlu', 'Yeni raf ve kitap sayısı', 'ferah, düzenli, işlevsel', 'Yeni salon, eskisinin iki katı kitabı ferah bir düzenle taşıyor.'],
            ['Olumsuz', 'Taşınmada zarar gören kitaplar', 'aceleye getirilmiş, gözden çıkarılmış', 'Taşıma aceleye getirilince onlarca kitap zarar gördü.'],
            ['Tarafsız', 'Açılış tarihi, kapasite, çalışma saatleri', 'açıldı, kapasite, saat', 'Kütüphane 12 Eylül’de açıldı ve 120 kişilik kapasiteye sahip.'],
            ['Kaygılı', 'Gelecekteki bakım maliyeti', 'belirsiz, sürdürülebilir mi', 'Binanın bakımının nasıl karşılanacağı henüz belirsiz.'],
            ['Umutlu', 'Öğrencilerin ilk tepkileri', 'nihayet, umut verici', 'Öğrencilerin ilk günkü yoğun ilgisi umut verici.'],
          ],
          caption:
            'Beş satırın hiçbirinde yanlış bilgi yok. Farkı yaratan, hangi ayrıntının seçildiği ve hangi sözcüğün tercih edildiği.',
        },
        {
          id: 'lgs-oznel-bakis-tuzak',
          type: 'trap',
          title: '“Yazar eleştiriyor” demeyi kanıtsız bırakmak',
          wrong: 'Metin bana biraz olumsuz geldi; yazar eleştirel bakıyor olmalı.',
          right: 'Yazarın eleştirel baktığını iddia ediyorsam, metinden bir değerlendirme sözcüğü ya da seçilmiş bir olumsuz ayrıntı gösterebilmeliyim.',
          body: 'Kazanımın açıklaması, metindeki örnek ve ayrıntılara atıf yapılmasını ister. Bakış açısı iddiası, kanıtla birlikte gelmediğinde tahmine dönüşür.',
        },
      ],
    },

    {
      id: 'lgs-turkce-oznel-gercek-kurgusal',
      title: 'Gerçek ve kurgusal unsurlar',
      lead: 'Bir metnin kurgusal olması, içindeki her ögenin uydurma olduğu anlamına gelmez. Ayrım metne değil, ögeye uygulanır.',
      blocks: [
        {
          id: 'lgs-oznel-kurgu-anlatim',
          type: 'prose',
          body: `**T.8.3.24** kazanımı metindeki gerçek ve kurgusal unsurların ayırt edilmesini ister. Buradaki anahtar sözcük **unsur**dur: ayrım metnin tamamına değil, metnin içindeki ögelere uygulanır.

Bir roman düşün. Kahraman uydurma olabilir, başından geçen olaylar hiç yaşanmamış olabilir; ama roman İstanbul’da geçiyorsa, İstanbul gerçek bir unsurdur. Kahraman 1915’te bir cephede bulunuyorsa, 1915 ve o cephe gerçek unsurlardır. Yazar gerçek bir zemin üzerine kurgusal bir hikâye kurar.

Tersi de olur. Bir anı ya da gezi yazısı gerçek olaylara dayanır; ama yazar anlatımı güçlendirmek için abartabilir, hayalî bir sahne kurabilir: “O gece yıldızlar bana bir şeyler fısıldıyordu.” Bu cümle kurgusal bir unsurdur, metnin türü ne olursa olsun.

Ayrımı yaparken şu soruyu kullan: **“Bu öge gerçek dünyada doğrulanabilir mi?”** Doğrulanabilir bir yer, tarih, kişi ya da olguysa gerçektir. Yazarın hayal gücünden çıkmış, gerçek dünyada karşılığı olmayan bir öge ise kurgusaldır.

Dikkat: bu soru, öznel–nesnel testiyle **aynı değildir** ama ona benzer. Öznel–nesnelde yargının denetlenebilirliğini sorarız; gerçek–kurgusalda ögenin gerçek dünyadaki varlığını. “Bu şehir çok güzeldi.” yargısı özneldir ama şehir gerçek bir unsurdur. İki testi karıştırma; ayrı ayrı uygula.

Son olarak, kurgusal unsurun işaretlerini tanımak işini hızlandırır: yaşanması mümkün olmayan olaylar, konuşan hayvanlar veya nesneler, olağanüstü yetenekler, gerçek dışı zaman sıçramaları. Bunlardan biri varsa o öge kurgusaldır; ama metnin geri kalanını otomatik olarak kurgusal saymamalısın.`,
        },
        {
          id: 'lgs-oznel-kurgu-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Gerçek unsur mu, kurgusal unsur mu?',
          columns: ['Gerçek unsur', 'Kurgusal unsur'],
          rows: [
            { label: 'Ölçüt', values: ['Gerçek dünyada doğrulanabilir', 'Yazarın hayal gücünden çıkmış'] },
            { label: 'Örnek', values: ['Roman İzmir’de geçiyor.', 'Kahraman rüzgârla konuşuyor.'] },
            { label: 'Metin türüyle ilişkisi', values: ['Kurgusal metinde de bulunabilir', 'Gerçek olaya dayalı metinde de bulunabilir'] },
            { label: 'Sık yapılan hata', values: ['Roman olduğu için her ögeyi kurgusal saymak', 'Anı olduğu için her ögeyi gerçek saymak'] },
            { label: 'Test sorusu', values: ['Bunu bir kaynaktan doğrulayabilir miyim?', 'Gerçek dünyada bunun karşılığı var mı?'] },
          ],
          insight:
            'Metnin türü bir ipucudur, kanıt değildir. Test her ögeye tek tek uygulanır.',
        },
        {
          id: 'lgs-oznel-kurgu-tuzak',
          type: 'trap',
          title: 'İki testi birbirine karıştırmak',
          wrong: '“Bu şehir çok güzeldi.” cümlesi öznel; öyleyse şehir de kurgusal bir unsurdur.',
          right: 'Yargı özneldir ama şehir gerçek bir unsurdur. Öznel–nesnel yargıyı, gerçek–kurgusal ögeyi sınıflandırır.',
          body: 'İki test farklı şeyleri ölçer. Birini ötekinin yerine koyarsan, gerçek yerleri ve tarihleri kurgusal saymaya başlarsın.',
        },
        {
          id: 'lgs-oznel-kurgu-hafiza',
          type: 'memory',
          title: 'İki ayrı soru',
          body: '**Yargı için:** nasıl denetlerim? **Öge için:** gerçek dünyada karşılığı var mı?',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Dört cümleyi sınıflandır',
      prompt:
        'Şu cümleleri öznel/nesnel olarak ayır: (1) Bu köprü 1.200 metre uzunluğundadır. (2) Bu köprü şehrin en etkileyici yapısıdır. (3) Köprünün yapımı üç yıl sürmüştür. (4) Köprüye yürüyerek çıkmak çok yorucudur.',
      steps: [
        { title: '(1) Denetim yolunu tarif et', body: 'Ölçerim. Kim ölçerse ölçsün aynı sonuca ulaşır. → **Nesnel**.' },
        { title: '(2) Denetim yolunu tarif et', body: '“En etkileyici” hükmünü nasıl ölçerim? Bir yolu yok; kişiden kişiye değişir. → **Öznel**.' },
        { title: '(3) Denetim yolunu tarif et', body: 'Yapım kayıtlarına bakarım. → **Nesnel**. Süre yanlış yazılmış olsa bile nesnel kalır.' },
        { title: '(4) Denetim yolunu tarif et', body: 'Yorulma kişiye göre değişir; bir sporcu yorulmayabilir. → **Öznel**.' },
        { title: 'Yanılma noktasını gör', body: '(4) cümlesinde beğeni sözcüğü yok, yine de öznel. (2) cümlesinde “en” var ama onu öznel yapan şey “en” değil, “etkileyici”nin denetlenemezliği.' },
      ],
      answer: '(1) nesnel · (2) öznel · (3) nesnel · (4) öznel',
      takeaway: 'Sınıflandırmayı sözcüğe değil, denetim yolunun varlığına dayandır.',
    },
    {
      title: 'Seviye 2 — Aynı cümlede iki yaklaşım',
      prompt:
        '“Geçen yıl 180 gün açık kalan müze, kentin en iyi yönetilen kurumlarından biriydi.” Bu cümlede öznellik nerede başlıyor? Kararını bölerek göster.',
      steps: [
        { title: 'Cümleyi böl', body: 'Sınırı virgül veriyor: (a) “Geçen yıl 180 gün açık kalan müze” — (b) “kentin en iyi yönetilen kurumlarından biriydi”.' },
        { title: '(a) bölümünü sına', body: 'Açık kalınan gün sayısı kayıtlardan sayılır. Kim sayarsa saysın aynı sonuç. → Nesnel.' },
        { title: '(b) bölümünü sına', body: '“En iyi yönetilen” hükmü neye göre? Ortak bir ölçüt yok; kurumlar farklı ölçütlerle değerlendirilebilir. → Öznel.' },
        { title: 'Tuzak kontrolü yap', body: '“Kurumlarından biriydi” ifadesi hükmü yumuşatıyor ama denetlenebilir yapmıyor. Yumuşatma öznelliği ortadan kaldırmaz.' },
        { title: 'Sonucu ifade et', body: 'Cümle karma bir yapıdadır: nesnel bir bilgiyle başlayıp öznel bir değerlendirmeyle bitiyor. “Bu cümle nesneldir” ifadesi yanlış olurdu.' },
      ],
      answer: 'Öznellik “kentin en iyi yönetilen kurumlarından biriydi” bölümünde başlar.',
      takeaway:
        'Karma cümlelerde soru genellikle sınırın nerede olduğunu sorar. Bölmeden karar verme.',
    },
    {
      title: 'Seviye 3 — Gerçek mi kurgusal mı?',
      prompt:
        'Şu kısa metindeki ögeleri ayır: “Büyükannem 1963’te Ankara’ya taşınmış. Anlattığına göre o yıl kar öyle çok yağmış ki sokaktaki lambalar bile kar altında kaybolmuş. Bana, karın altından bir şarkı sesi geldiğini söylerdi.”',
      steps: [
        { title: '1963 ve Ankara', body: 'Bir tarih ve bir şehir; kaynaklardan doğrulanabilir. → **Gerçek unsur**.' },
        { title: 'Yoğun kar yağışı', body: 'Meteoroloji kayıtlarından denetlenebilir bir olgu. Doğru çıkmasa bile gerçek dünyaya ait bir iddiadır. → **Gerçek unsur** (doğruluğu ayrı bir mesele).' },
        { title: 'Lambaların kar altında kaybolması', body: 'Abartılmış olabilir ama fiziksel olarak mümkün; anlatım abartısı ile kurgusallığı ayır. Bu bir **abartma**dır, gerçek zemin üzerinde durur.' },
        { title: 'Karın altından gelen şarkı sesi', body: 'Gerçek dünyada karşılığı yok; anlatıcının hayal gücünden çıkmış. → **Kurgusal unsur**.' },
        { title: 'Metin türüne takılma', body: 'Metin bir anı gibi başlıyor; ama tür, ögeleri otomatik olarak gerçek yapmaz. Testi her ögeye ayrı ayrı uygula.' },
      ],
      answer:
        'Gerçek unsurlar: 1963, Ankara, yoğun kar yağışı. Kurgusal unsur: karın altından gelen şarkı sesi. Lambaların kaybolması ise abartılmış bir gerçek unsurdur.',
      takeaway:
        'Ayrım metne değil ögeye uygulanır: bir anıda kurgusal öge, bir romanda gerçek öge bulunabilir.',
    },
  ],

  questionClue: {
    concept: 'öznel–nesnel ve bakış açısı sorusu',
    statement:
      'Soru kökünde “nesnel bir yargı”, “öznel bir anlatım”, “yazarın bakış açısı”, “yazar hangi tutumu takınmıştır” gibi ifadeler varsa sorulan şey bilginin doğruluğu değil, yargının niteliğidir.',
    clues: [
      'Seçeneklerin birkaçında sayı veya tarih bulunması',
      'Soru kökünde “öznel / nesnel / bakış açısı / tutum” terimleri',
      '“Bu cümlede hem … hem … vardır” biçimindeki ifadeler',
      'Bir parçada altı çizili tek bir cümle',
      'Seçeneklerde beğeni bildiren sözcüklerin dağınık biçimde serpiştirilmiş olması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, beğeni sözcüğü ezberini hedefliyor. Çözüm yolu her seçeneğe denetim yolu testini uygulamaktır — “bunu nasıl sınarım?” sorusuna cevap verebiliyorsan nesnel, veremiyorsan öznel.',
    boundary:
      'Bu ipuçlarını “sayı varsa nesnel, sıfat varsa öznel” gibi bir kısayola çevirme. Sayı içeren öznel cümle de, sıfat içeren nesnel cümle de vardır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinin nesnel (ya da öznel) olduğunun sorulması',
      'Bir cümlede öznelliğin nerede başladığının sorulması',
      'Bir parçadaki yazarın bakış açısının belirlenmesi',
      'Yazarın tutumunu destekleyen ayrıntının seçtirilmesi',
      'Bir metindeki gerçek ve kurgusal unsurların ayırt ettirilmesi',
      'Aynı olayı anlatan iki metnin yaklaşım farkının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bu okulun bahçesi 2.000 metrekaredir ve öğrenciler için fazlasıyla yeterlidir.” Bu cümlede kaç yargı var, türleri nedir?',
      hint: '“Ve” bağlacını sınır olarak kullan; iki parçaya ayırıp ayrı ayrı sına.',
      answer:
        'İki yargı var. (1) “Bahçe 2.000 metrekaredir” — ölçülebilir, **nesnel**. (2) “Öğrenciler için fazlasıyla yeterlidir” — yeterlilik neye göre? Ortak bir ölçüt yok, kişiden kişiye değişir; **öznel**. Cümlenin tamamı için “nesneldir” demek yanlış olurdu.',
    },
    {
      prompt:
        '“Türkiye’nin en uzun nehri Sakarya’dır.” Bu cümle öznel midir nesnel midir? (Not: bilgi yanlıştır.)',
      hint: 'Ölçüt doğruluk mu, denetlenebilirlik mi?',
      answer:
        'Nesneldir. Nehirlerin uzunluğu ölçülebilir ve kim ölçerse ölçsün aynı sonuca ulaşır; bu yüzden yargının denetim yolu vardır. Denetlendiğinde yanlış çıkması onu öznel yapmaz, yalnızca **yanlış bir nesnel yargı** yapar.',
    },
    {
      prompt:
        'Bir yazı, yeni açılan bir parkı anlatırken yalnız otopark sorunundan, gürültüden ve bakım maliyetinden söz ediyor. Yazarın bakış açısı nedir ve bunu nasıl kanıtlarsın?',
      hint: 'Kanıtı yazarın kullandığı sözcüklerde değil, seçtiği ayrıntılarda ara.',
      answer:
        'Yazar parka olumsuz ya da kaygılı bir tutumla bakıyor. Kanıt, kullandığı sözcüklerden önce **seçtiği ayrıntılarda**: parkın büyüklüğü, ağaç sayısı veya kullanım yoğunluğu gibi olumlu olabilecek hiçbir ayrıntıya yer vermemiş; üç ayrıntının üçü de soruna işaret ediyor. Ayrıntı seçimi tek başına bakış açısı kanıtıdır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey bilgi doğruluğu değil, yargı çözümlemesi',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma, analiz yapma ve eleştirel düşünme becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sorular verilen bilginin doğru olup olmadığını değil, o bilginin nasıl bir yargı olduğunu ayırt edip edemediğini ölçer. Bu yüzden içinde bilgi hatası bulunan cümleler soruların içine bilerek konabilir; doğruluk tuzağına düşen öğrenci onları öznel sanır.',
    measures: [
      'Bir yargının denetim yolunun bulunup bulunmadığını belirleyebilme',
      'Doğruluk ile denetlenebilirliği birbirinden ayırabilme',
      'Bir cümlede öznellik–nesnellik sınırını gösterebilme',
      'Yazarın tutumunu seçtiği ayrıntılardan çıkarabilme',
      'İddiasını metinden bir örnek veya ayrıntıyla destekleyebilme',
      'Gerçek ve kurgusal unsurları öge düzeyinde ayırabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Mahallemizin köşesindeki kırtasiye kırk yıldır aynı yerde. Sahibi Nazmi Amca, her sabah kepengi yedi buçukta kaldırır. Dükkânın içinde üç raf, bir tezgâh ve yıllardır değişmeyen bir düzen vardır. **Bu küçük dükkân, mahallenin en huzur verici köşesidir.** Nazmi Amca geçen yıl dükkânı büyütme teklifini geri çevirmiş; “Burası yeterince büyük.” demiş.`,
    question: 'Bu parçada altı çizili cümleyle ilgili olarak aşağıdakilerden hangisi söylenebilir?',
    options: [
      {
        text: 'Ölçülebilir bir bilgi verdiği için nesnel bir yargıdır',
        explanation:
          'Cümlede ölçülebilir hiçbir veri yok. Parçanın başka cümlelerinde ölçülebilir bilgiler var (kırk yıl, yedi buçuk, üç raf) ama altı çizili cümlede yok. Çeldirici, parçanın geri kalanının nesnel tonundan güç alıyor.',
      },
      {
        text: 'Kişiden kişiye değişebilecek bir değerlendirme içerdiği için özneldir',
        explanation:
          'Doğru cevap. “En huzur verici” hükmünü sayarak, ölçerek veya belgeye bakarak sınamanın bir yolu yok; huzur kişiden kişiye değişir. Denetim yolu bulunmadığı için yargı özneldir.',
      },
      {
        text: 'Yanlış bir bilgi içerdiği için öznel sayılmıştır',
        explanation:
          'Cümlenin öznel olmasının sebebi yanlışlık değil, denetlenemezliktir. Ayrıca cümle yanlış da değildir — doğru ya da yanlış denemez, katılınır veya katılınmaz. Doğruluk tuzağının tipik biçimi.',
      },
      {
        text: 'Kurgusal bir unsur olduğu için gerçek dışıdır',
        explanation:
          'Dükkân gerçek bir unsurdur; cümle onu uydurmuyor, değerlendiriyor. Öznel yargıyı kurgusal ögeyle karıştıran seçenek. İki test farklı şeyleri ölçer.',
      },
      {
        text: 'Nazmi Amca’nın sözünü aktardığı için tarafsızdır',
        explanation:
          'Nazmi Amca’nın sözü parçanın sonunda, ayrı bir cümlede aktarılıyor. Altı çizili cümle anlatıcının kendi hükmüdür. Metinde gerçekten bulunan bir ayrıntıya yaslanan ama yanlış yere bağlayan çeldirici.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü altı çizili cümleyi işaret ediyor; parçanın tamamı değil, o cümle değerlendirilecek. İlk iş yargıyı yalıtmak: “Bu dükkân mahallenin en huzur verici köşesidir.” Sonra tek soru: bunu nasıl denetlerim?',
    critical_point:
      'Kritik nokta, parçanın çevresindeki cümlelerin nesnel olması. Kırk yıl, yedi buçuk, üç raf — hepsi denetlenebilir. Bu nesnel çerçeve, altı çizili cümleyi de nesnel gösterir. Testi cümlenin kendisine uygula, komşularına değil.',
    takeaway:
      'Bir cümlenin çevresindeki cümlelerin türü, o cümlenin türünü belirlemez.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisi **nesneldir**?',
      options: [
        'Bu şarkı dinleyeni alıp başka bir dünyaya götürüyor.',
        'Albümde on iki parça yer alıyor.',
        'Sanatçının en olgun çalışması bu albümdür.',
        'Parçaların sıralaması biraz düşündürücü olmuş.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümledeki parça sayısı sayılabilir; kim sayarsa saysın aynı sonuca ulaşır. Birinci cümlede etki kişiden kişiye değişir. Üçüncü cümledeki “en olgun” hükmünün ortak bir ölçütü yok. Dördüncü cümlede “düşündürücü olmuş” bir değerlendirmedir; “biraz” ifadesi hükmü yumuşatır ama denetlenebilir yapmaz.',
    },
    {
      purpose: 'concept',
      question: '“Ay, Dünya’nın üç uydusundan biridir.” Bu cümle için aşağıdakilerden hangisi doğrudur?',
      options: [
        'Yanlış bilgi içerdiği için özneldir',
        'Denetim yolu bulunduğu için nesneldir; ancak yanlıştır',
        'Hem öznel hem nesnel bölüm içerir',
        'Kurgusal bir unsur taşıdığı için değerlendirilemez',
      ],
      answer_index: 1,
      explanation:
        'Uydu sayısı gözlemle ve bilimsel kaynaklarla denetlenebilir; bu yüzden yargı nesneldir. Denetlendiğinde yanlış çıkması onu öznel yapmaz. Öznel–nesnel ayrımının ölçütü doğruluk değil, denetlenebilirliktir. Cümlede değerlendirme bildiren hiçbir bölüm yoktur ve “Ay” kurgusal değil gerçek bir unsurdur.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Romanın kahramanı İzmir’de yaşıyor.” cümlesi için “roman kurgusaldır, öyleyse İzmir de kurgusal bir unsurdur” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Ayrımı öge düzeyinde değil metin türü düzeyinde yapmak',
        'Öznel yargıyı nesnel sanmak',
        'Cümledeki yargıyı yalıtamamak',
        'Bakış açısını yanlış belirlemek',
      ],
      answer_index: 0,
      explanation:
        'Gerçek–kurgusal ayrımı metnin tamamına değil, metnin içindeki her ögeye ayrı ayrı uygulanır. Kahraman kurgusal olabilir ama İzmir gerçek dünyada doğrulanabilir bir yerdir ve gerçek bir unsurdur. Öğrenci metin türünü öge testinin yerine koymuştur. Cümlede öznel yargı ya da bakış açısı sorunu yoktur.',
    },
  ],

  summary: [
    'Öznel–nesnel ayrımının ölçütü doğruluk değil, **denetlenebilirliktir**.',
    'Nesnel yargı yanlış olabilir; yanlışlık onu öznel yapmaz.',
    'Beğeni sözcüğü içermeyen öznel yargı da, içeren nesnel yargı da vardır.',
    'Testi cümleye değil, cümledeki her yargıya ayrı ayrı uygula.',
    'Bir cümlenin bir bölümü nesnel, öteki bölümü öznel olabilir; sınır genellikle virgül ya da bağlaçtadır.',
    'Tek bir değerlendirme bile cümleye öznellik katmaya yeter.',
    'Yazarın bakış açısı seçtiği ayrıntılardan, kullandığı yüklü sözcüklerden ve yargıların yönünden çıkarılır.',
    'Bakış açısı iddian, metinden bir örnek veya ayrıntıyla desteklenmelidir.',
    'Tarafsızlık da bir tutumdur; kanıtı, değerlendirme sözcüğünün bulunmamasıdır.',
    'Gerçek–kurgusal ayrımı metne değil ögeye uygulanır: romanda gerçek öge, anıda kurgusal öge bulunabilir.',
  ],

  next: [
    'Konu, Ana Fikir, Yardımcı Fikir ve Başlık (T.8.3.16–19)',
    'Anlatım Biçimleri (T.8.3.11)',
    'Medya Metinleri ve Bilgi Kaynağının Güvenilirliği (T.8.3.29, T.8.3.31)',
  ],
})

export default lesson
