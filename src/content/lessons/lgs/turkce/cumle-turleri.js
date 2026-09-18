import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Cümle Türleri
 * Kazanım : T.8.4.19
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.4.19'un açıklaması tek cümledir: "Kavramsal tanımlamalara
 * girilmez." Kazanımın fiili de "tanır" biçimindedir — "tanımlar"
 * değil. Bu yüzden ders tanım ezberletmez; her tür için bir TANIMA
 * SORUSU kurar ve kararı o soruyla verdirir.
 *
 * NOT: "Cümle Türleri" başlığı kütüphane konu ağacında henüz yoktur;
 * supabase/migration_lgs_konu_tamamlama.sql ile eklenmesi önerilmiştir
 * ve kullanıcı onayı beklemektedir.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-cumle-turleri',
  topic: 'Cümle Türleri',
  order: 1,
  title: 'Cümle Türleri: Dört Bakış, Dört Soru',
  subtitle:
    'Program tanım ezberi istemiyor, tanıma istiyor. Her cümleye dört soru sorarız: yüklem ne, nerede, ne diyor, kaç yargı var?',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.4.19', metin: 'Cümle türlerini tanır.' },
  ],
  prerequisites: [
    { topic: 'Cümlenin ögeleri', why: 'Yüklemi bulamadan hiçbir tür kararı verilemez.' },
    { topic: 'Fiilimsiler', why: 'Yapı bakımından tür kararı, cümlede fiilimsi bulunup bulunmamasına dayanır.' },
  ],
  outcomes: [
    'Bir cümleyi yüklemin türüne göre ayırt edebileceksin.',
    'Yüklemin yerine göre cümle türünü belirleyebileceksin.',
    'Biçimce olumsuz ama anlamca olumlu cümleleri tanıyabileceksin.',
    'Soru biçiminde olup soru sormayan cümleleri ayırt edebileceksin.',
    'Bir cümlede kaç yargı bulunduğunu sayarak yapı türünü belirleyebileceksin.',
  ],

  opening: {
    title: 'Dört bakış açısı, aynı cümle',
    lead: 'Program tanım ezberi istemiyor: “Kavramsal tanımlamalara girilmez.” O hâlde her tür için bir tanıma sorusu kuracağız.',
    body: `Bir cümleye dört ayrı açıdan bakılabilir ve dört ayrı ad verilebilir. Aynı cümle hem “fiil cümlesi” hem “kurallı cümle” hem “olumlu cümle” hem “basit cümle” olabilir. Bunlar birbiriyle yarışmaz; farklı sorulara verilen farklı cevaplardır.

Şu cümleyi ele alalım: “Çocuklar bahçede oynuyor.”

**Yüklemin türüne göre:** yüklem “oynuyor” bir fiildir → fiil cümlesi.
**Yüklemin yerine göre:** yüklem sondadır → kurallı cümle.
**Anlamına göre:** bir yargı doğrulanıyor → olumlu cümle.
**Yapısına göre:** tek yargı var, fiilimsi yok → basit cümle.

Dört bakış, dört cevap. Soru hangi açıdan sorarsa o cevabı verirsin.

MEB 8. sınıf programındaki **T.8.4.19** kazanımı kısadır: “Cümle türlerini **tanır**.” Açıklaması daha da kısadır: *“Kavramsal tanımlamalara girilmez.”*

İki ifade birlikte okunduğunda program şunu söylüyor: öğrenci bir cümleyi görünce türünü **tanıyabilmeli**, ama tür tanımlarını ezberlemek zorunda değil. Kazanımın fiili “tanımlar” değil “tanır”.

Bu yüzden derste her tür için bir **tanıma sorusu** kuracağız:

**1. Yüklem bir fiil mi, bir isim mi?**
**2. Yüklem cümlenin sonunda mı?**
**3. Cümle bir yargıyı doğruluyor mu, reddediyor mu, soruyor mu?**
**4. Cümlede kaç yargı var?**

Dört soru, dört bakış açısı. Ve dördü de cümlenin kendisine bakarak cevaplanır.`,
  },

  concepts: [
    {
      term: 'Yüklemin türü',
      body: 'Yüklem bir fiilse **fiil cümlesi**, isim soylu bir sözcük + ek fiilse **isim cümlesi** denir. “Çocuklar oynuyor.” ↔ “Hava çok soğuktu.” Karar, yüklemi bulup ne olduğuna bakarak verilir.',
    },
    {
      term: 'Yüklemin yeri',
      body: 'Yüklem sondaysa **kurallı (düz) cümle**, sondan başka bir yerdeyse **devrik cümle** denir: “Sabah erkenden çıktı.” ↔ “Çıktı sabah erkenden.” Devrik cümle bozuk değildir; bir anlatım tercihidir.',
    },
    {
      term: 'Cümlenin anlamı',
      body: 'Cümle bir yargıyı doğruluyorsa **olumlu**, reddediyorsa **olumsuz**, soruyorsa **soru**, güçlü bir duygu bildiriyorsa **ünlem** cümlesidir. Karar biçime değil anlama bakılarak verilir.',
    },
    {
      term: 'Cümlenin yapısı',
      body: 'Cümlede tek yargı varsa **basit**, fiilimsi ya da ikinci bir yüklem varsa **birleşik**, birden çok cümle virgülle bağlanmışsa **sıralı**, bağlaçla bağlanmışsa **bağlı** cümledir.',
    },
    {
      term: 'Biçimce olumsuz, anlamca olumlu',
      body: 'Olumsuzluk eki taşıdığı hâlde olumlu bir yargı bildiren cümledir: “Bunu bilmeyen yok.” Biçimde iki olumsuzluk var; anlamda “herkes biliyor” deniyor.',
    },
    {
      term: 'Soru biçimli ama soru sormayan cümle',
      body: 'Soru eki ya da soru sözcüğü taşıdığı hâlde soru sormayan cümledir: “Yağmur yağdı mı sokaklar boşalır.” Burada “mı” koşul bildiriyor, soru sormuyor.',
    },
  ],

  why: {
    question: 'Neden biçime bakarak karar vermek yanıltıyor?',
    body: `Çünkü Türkçede **biçim ile anlam her zaman aynı yöne bakmaz.** Bu, özellikle anlam bakımından tür belirlerken sorun yaratır.

**Olumsuzluk eki taşıyan olumlu cümleler.** “Bunu bilmeyen yok.” cümlesinde iki olumsuzluk var: “bilmeyen” ve “yok”. İki olumsuzluk birbirini götürüyor ve cümle “herkes biliyor” anlamına geliyor. Biçimce olumsuz, anlamca olumlu.

Tersi de olur: “Kim bilir kaç kez söyledim.” cümlesinde hiçbir olumsuzluk eki yok, ama cümle bir yakınma bildiriyor. Ya da: “Sen bu işi yaparsın, ha!” — biçim olumlu, anlam alaycı bir olumsuzluk taşıyabilir.

**Soru eki taşıyan soru sormayan cümleler.** “Yağmur yağdı mı sokaklar boşalır.” cümlesinde “mı” bir koşul bildiriyor: yağmur yağdığında. Soru sorulmuyor ve sonuna soru işareti konmuyor. Aynı biçimde “Bir gelse de görüşsek.” cümlesi bir istek bildiriyor.

**Soru sözcüğü taşıyan soru sormayan cümleler.** “Nereye gittiğini bilmiyorum.” cümlesinde “nereye” var ama cümle soru sormuyor; bir bilgi veriyor.

Bu üç durumun ortak dersi şudur: **anlam bakımından tür kararı biçime değil anlama bakılarak verilir.** Cümleyi oku ve sor: bu cümle ne yapıyor — doğruluyor mu, reddediyor mu, soruyor mu, bir duygu mu bildiriyor?

Yapı bakımından da benzer bir tuzak var. Öğrencilerin çoğu “cümlede virgül varsa sıralıdır” diye öğrenir. Oysa virgül ara sözü de ayırabilir. Ölçüt virgül değil, **kaç yargı bulunduğudur.**

Programın “kavramsal tanımlamalara girilmez” demesinin sebebi büyük olasılıkla bu: tanım ezberi, biçime bakma alışkanlığını güçlendiriyor. Oysa istenen şey tanımak.`,
  },

  decision: {
    title: 'Cümlenin türlerini belirleme yolu',
    lead: 'Dört soruyu sırayla sor. Her soru bir bakış açısının cevabını verir.',
    intro:
      'Bir cümlenin türünü belirlerken şu beş durağı uygula. Birinci durak olmadan hiçbiri çalışmaz.',
    steps: [
      {
        title: '1. Yüklemi bul',
        body: 'Cümlede yargıyı taşıyan ögeyi işaretle. Bütün tür kararları yüklemden başlar; yüklemi bulmadan hiçbir soruya cevap veremezsin.',
      },
      {
        title: '2. Yüklem ne? (türü)',
        body: 'Yüklem bir fiil mi (koştu, okuyor, gelecek), yoksa isim soylu bir sözcük + ek fiil mi (öğrenciydi, soğuktu, güzeldir)? Cevap fiil–isim cümlesi ayrımını verir.',
      },
      {
        title: '3. Yüklem nerede? (yeri)',
        body: 'Yüklem cümlenin sonunda mı? Sondaysa kurallı, başka yerdeyse devriktir. Devrik cümle bozuk değildir; şiirde ve günlük konuşmada sık kullanılır.',
      },
      {
        title: '4. Cümle ne diyor? (anlamı)',
        body: 'Biçime değil anlama bak. Cümle bir yargıyı doğruluyor mu, reddediyor mu, soruyor mu, güçlü bir duygu mu bildiriyor? Olumsuzluk eki ya da soru eki tek başına karar vermez.',
      },
      {
        title: '5. Kaç yargı var? (yapısı)',
        body: 'Cümlede fiilimsi ya da ikinci bir yüklem var mı? Fiilimsi varsa birleşik; birden çok cümle virgülle bağlanmışsa sıralı, bağlaçla bağlanmışsa bağlıdır. Tek yargı ve fiilimsi yoksa basittir.',
      },
    ],
    takeaway: 'Dört bakış açısı birbiriyle yarışmaz; aynı cümleye dört ayrı cevap verilir.',
  },

  decisionTree: {
    title: 'Yapı bakımından tür kararı',
    intro:
      'Yapı, en çok karıştırılan bakış açısıdır. Üç kontrol sırayla uygulanır.',
    checks: [
      {
        question: 'Cümlede fiilimsi var mı?',
        yes: 'Birleşik cümledir. Örnek: “Koşarak gelen çocuk yoruldu.” — fiilimsi bir yan cümlecik kurar.',
        no: 'Fiilimsi yok; ikinci kontrole geç.',
      },
      {
        question: 'Birden çok yüklem bir bağlaçla mı bağlanmış?',
        yes: 'Bağlı cümledir. Örnek: “Kapıyı açtı **ve** içeri girdi.”',
        no: 'Bağlaç yok; üçüncü kontrole geç.',
      },
      {
        question: 'Birden çok yüklem virgülle mi bağlanmış?',
        yes: 'Sıralı cümledir. Örnek: “Kapıyı açtı, içeri girdi, lambayı yaktı.”',
        no: 'Tek yargı var: basit cümledir.',
      },
    ],
    takeaway:
      'Fiilimsi kontrolünü başa koyduk; çünkü fiilimsi bulunan bir cümle, virgül ya da bağlaç olmasa bile basit sayılmaz.',
  },

  comparison: {
    title: 'Dört bakış açısı, aynı cümleye dört cevap',
    columns: ['Yüklemin türü', 'Yüklemin yeri', 'Cümlenin yapısı'],
    rows: [
      { label: 'Sorusu', values: ['Yüklem fiil mi, isim mi?', 'Yüklem sonda mı?', 'Kaç yargı var?'] },
      { label: 'Seçenekler', values: ['Fiil cümlesi / isim cümlesi', 'Kurallı / devrik', 'Basit / birleşik / sıralı / bağlı'] },
      { label: 'Örnek', values: ['Çocuklar oynuyor. ↔ Hava soğuktu.', 'Sabah çıktı. ↔ Çıktı sabah.', 'Çocuk yoruldu. ↔ Koşan çocuk yoruldu.'] },
      { label: 'Karar ölçütü', values: ['Yüklemin ne olduğu', 'Yüklemin konumu', 'Fiilimsi, bağlaç ve virgül'] },
      { label: 'Sık yapılan hata', values: ['Ek fiili görememek', 'Devriği bozuk sanmak', 'Virgülü tek ölçüt sanmak'] },
    ],
    insight:
      'Bir soru aynı anda birden çok bakış açısını sorabilir: “Bu cümle yapısına ve yüklemin türüne göre nedir?” İki cevabı ayrı ayrı ver.',
  },

  traps: [
    {
      title: 'Olumsuzluk eki gördüğü an olumsuz cümle demek',
      wrong: '“Bunu bilmeyen yok.” cümlesinde olumsuzluk var; öyleyse olumsuz cümledir.',
      right: 'Cümlenin anlamına bakarım: “herkes biliyor” deniyor. **Biçimce olumsuz, anlamca olumlu** bir cümledir.',
      body: 'Anlam bakımından tür kararı biçime değil anlama bakılarak verilir. İki olumsuzluk birbirini götürebilir.',
    },
    {
      title: 'Soru eki gördüğü an soru cümlesi demek',
      wrong: '“Yağmur yağdı mı sokaklar boşalır.” cümlesinde “mı” var; soru cümlesidir.',
      right: 'Cümle soru sormuyor; bir koşul bildiriyor. Sonuna soru işareti de konmaz.',
      body: 'Soru eki her zaman soru sormaz: koşul, zaman ya da pekiştirme bildirebilir. Ölçüt cümlenin soru sorup sormamasıdır.',
    },
    {
      title: 'Devrik cümleyi bozuk sanmak',
      wrong: '“Geldi sabah erkenden.” — yüklem başta; bu cümle bozuk.',
      right: 'Devrik cümle bir anlatım tercihidir; şiirde, atasözlerinde ve günlük konuşmada sık kullanılır. Bozukluk değildir.',
      body: 'Anlatım bozukluğu ayrı bir konudur ve ögelerin uyumsuzluğundan doğar. Yüklemin yeri bozukluk yaratmaz.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-cumle-yuklem',
      title: 'Yüklemin türü ve yeri',
      lead: 'İki bakış açısı da yüklemi bulmakla başlar. Zorluk, yüklemi doğru tanımaktadır.',
      blocks: [
        {
          id: 'lgs-cumle-yuklem-anlatim',
          type: 'prose',
          body: `**Yüklemin türüne göre** cümleler ikiye ayrılır.

**Fiil cümlesi:** yüklem bir fiildir. “Çocuklar bahçede oynuyor.”, “Kapıyı yavaşça açtı.”, “Yarın geleceğim.”

**İsim cümlesi:** yüklem isim soylu bir sözcüktür ve ek fiil alır. “Hava çok soğuktu.”, “Babam öğretmendir.”, “Burası bizim mahallemiz.”

Öğrencilerin en sık yaptığı hata, isim cümlelerini görememektir; çünkü “yüklem” deyince akla fiil gelir. Ek fiil (**-dır, -dı, -miş, -se**) çoğu zaman küçük bir ektir ve gözden kaçar.

Bir ipucu: cümlenin sonundaki sözcüğü al ve sor — “bu bir eylem bildiriyor mu?” Bildirmiyorsa ve cümle yine de bir yargı taşıyorsa, orada bir isim yüklem vardır.

Dikkat edilecek bir başka nokta: bazı sözcükler hem isim hem fiil olabilir. “Bu bir sorun.” cümlesinde “sorun” bir isimdir ve yüklemdir. “Bu meseleyi sorun.” cümlesinde ise “sorun” bir emir fiildir. Bağlam karar verir.

**Yüklemin yerine göre** cümleler yine ikiye ayrılır.

**Kurallı (düz) cümle:** yüklem sondadır. Türkçenin olağan dizilişi budur. “Sabah erkenden yola çıktı.”

**Devrik cümle:** yüklem sonda değildir. “Çıktı sabah erkenden yola.” Devrik cümle **bozuk değildir**; bilinçli bir anlatım tercihidir. Şiirde, atasözlerinde, deyimlerde ve günlük konuşmada sıkça kullanılır: “Damlaya damlaya göl olur.” değil ama “Gel zaman git zaman…” gibi.

Devrik cümlenin bir işlevi vardır: yüklemi öne alarak eylemi vurgular ya da anlatıma akıcılık katar. Bir sonraki ders olan Görsel Okuma’da afiş ve slogan metinlerinde bu yapıyı sık göreceksin.

Son olarak, **eksiltili cümle** diye bir yapı da vardır: yüklemi söylenmeyen cümle. “Nereye? Eve.” Bu cümlelerde yüklem bağlamdan anlaşılır. Program bu adı ayrıca istemez; ama karşına çıktığında yüklemi aramanın sonuçsuz kaldığını fark edersin.`,
        },
        {
          id: 'lgs-cumle-yuklem-tablo',
          type: 'table',
          interactive: true,
          title: 'Yüklemi bul, iki soruyu birden cevapla',
          columns: ['Cümle', 'Yüklem', 'Türü', 'Yeri'],
          rows: [
            ['Çocuklar bahçede oynuyor.', 'oynuyor', 'Fiil cümlesi', 'Kurallı'],
            ['Hava o gün çok soğuktu.', 'soğuktu', 'İsim cümlesi', 'Kurallı'],
            ['Çıktı sabah erkenden yola.', 'çıktı', 'Fiil cümlesi', 'Devrik'],
            ['Güzeldi o yaz akşamları.', 'güzeldi', 'İsim cümlesi', 'Devrik'],
            ['Burası bizim mahallemiz.', 'mahallemiz', 'İsim cümlesi', 'Kurallı'],
            ['Bu meseleyi bana sorun.', 'sorun', 'Fiil cümlesi (emir)', 'Kurallı'],
          ],
          caption:
            'Son iki satır “mahallemiz” ve “sorun” sözcüklerinin farklı görevlerini gösterir: biri isim yüklem, öteki emir fiil.',
        },
        {
          id: 'lgs-cumle-yuklem-analiz',
          type: 'sentence_analysis',
          title: 'Aynı cümle, dört cevap',
          prompt:
            'Aşağıdaki cümleye dört bakış açısından bakacağız. Parçalara tıklayarak her bakışın cevabını gör.',
          segments: [
            {
              text: 'Sabah erkenden yola çıkan öğrenciler,',
              label: 'Yapı ipucu: fiilimsi var',
              explanation:
                '“Çıkan” bir sıfat-fiildir ve bir yan cümlecik kuruyor. Bu, cümlenin yapı bakımından **birleşik** olduğunu gösterir; virgül ya da bağlaç olmasa bile.',
              tone: 'brand',
            },
            {
              text: 'okula ilk varanlar oldu.',
              label: 'Yüklem: “oldu”',
              explanation:
                'Yüklem bir fiildir → **fiil cümlesi**. Yüklem cümlenin sonunda → **kurallı cümle**.',
              tone: 'aqua',
            },
            {
              text: '(Anlam kontrolü)',
              label: 'Olumlu mu, olumsuz mu?',
              explanation:
                'Cümle bir yargıyı doğruluyor: öğrenciler ilk varanlar oldu. Olumsuzluk eki yok, soru yok → **olumlu cümle**.',
              tone: 'success',
            },
            {
              text: '(Özet)',
              label: 'Dört cevap',
              explanation:
                'Fiil cümlesi · kurallı cümle · olumlu cümle · birleşik cümle. Dört bakış açısı, dört ayrı cevap. Hiçbiri ötekiyle çelişmiyor.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Bir cümleye aynı anda dört ad verilebilir. Soru hangi açıdan soruyorsa o cevabı ver.',
        },
        {
          id: 'lgs-cumle-yuklem-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'İsim cümlelerini kaçırmamak için cümlenin son sözcüğüne bak ve “bu bir eylem mi?” diye sor. Eylem değilse ve cümle yine de bir yargı taşıyorsa, orada bir isim yüklem vardır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-cumle-anlam',
      title: 'Anlamına göre: biçim ile anlam ayrı şeylerdir',
      lead: 'Bu bakış açısındaki soruların neredeyse tamamı biçim–anlam farkını ölçer.',
      blocks: [
        {
          id: 'lgs-cumle-anlam-anlatim',
          type: 'prose',
          body: `Anlam bakımından cümleler dört başlıkta toplanır: **olumlu, olumsuz, soru, ünlem.**

**Olumlu cümle** bir yargıyı doğrular: “Sınavı kazandı.”
**Olumsuz cümle** bir yargıyı reddeder: “Sınavı kazanamadı.”
**Soru cümlesi** bir bilgi ister: “Sınavı kazandı mı?”
**Ünlem cümlesi** güçlü bir duygu bildirir: “Ne güzel bir haber!”

Buraya kadar kolay. Zorluk, biçim ile anlamın ayrıldığı durumlarda başlıyor.

**Biçimce olumsuz, anlamca olumlu.** “Bunu bilmeyen yok.” Cümlede iki olumsuzluk var ve birbirini götürüyor; anlam “herkes biliyor”. Aynı biçimde: “Gitmemezlik edemedi.” → gitti. “Söylemedik söz bırakmadı.” → her şeyi söyledi.

**Biçimce olumlu, anlamca olumsuz.** “Sen bu işi yaparsın, ha!” Cümlede olumsuzluk eki yok; ama bağlama göre alaycı bir olumsuzluk taşıyabilir. Ya da: “Onun geleceği varsa göreceği de var.” — bir tehdit anlamı taşır.

**Soru biçimli ama soru sormayan.** “Yağmur yağdı mı sokaklar boşalır.” — koşul bildiriyor. “Bir gelse de konuşsak.” — istek bildiriyor. “Nereye gittiğini bilmiyorum.” — bilgi veriyor.

**Soru biçimli ve gerçekten soran ama cevap beklemeyen.** “Kim bilir kaç kez söyledim?” Burada bir soru biçimi var ama yazar cevap beklemiyor; bir yakınma bildiriyor.

Bütün bu durumların ortak testi tek: **cümleyi oku ve ne yaptığını sor.** Doğruluyor mu, reddediyor mu, bilgi mi istiyor, duygu mu bildiriyor?

Bir uyarı: olumsuzluk her zaman ekle kurulmaz. “yok, değil, ne … ne” gibi sözcükler de olumsuzluk taşır: “Ne para var ne pul.” Ek arayan öğrenci bu cümleyi olumlu sanabilir.

Son olarak ünlem cümlesi için kısa bir not: ünlem işaretinin bulunması ünlem cümlesi olmak için yeterli değildir; seslenmelerden ve emirlerden sonra da ünlem konabilir. Ölçüt, cümlenin güçlü bir duygu bildirip bildirmediğidir.`,
        },
        {
          id: 'lgs-cumle-anlam-tablo',
          type: 'table',
          interactive: true,
          title: 'Biçim ne diyor, anlam ne diyor?',
          columns: ['Cümle', 'Biçimi', 'Anlamı', 'Türü'],
          rows: [
            ['Sınavı kazandı.', 'Olumlu', 'Doğruluyor', 'Olumlu'],
            ['Bunu bilmeyen yok.', 'Olumsuz (iki kez)', 'Herkes biliyor', 'Anlamca olumlu'],
            ['Söylemedik söz bırakmadı.', 'Olumsuz (iki kez)', 'Her şeyi söyledi', 'Anlamca olumlu'],
            ['Yağmur yağdı mı sokaklar boşalır.', 'Soru eki var', 'Koşul bildiriyor', 'Soru cümlesi değil'],
            ['Nereye gittiğini bilmiyorum.', 'Soru sözcüğü var', 'Bilgi veriyor', 'Olumsuz cümle'],
            ['Ne para var ne pul.', 'Ek yok', 'Reddediyor', 'Olumsuz'],
          ],
          caption:
            'Son satır ek arayan öğrenciyi yakalar: olumsuzluk ekle kurulmak zorunda değildir.',
        },
        {
          id: 'lgs-cumle-anlam-tuzak',
          type: 'trap',
          title: 'Ünlem işaretini ünlem cümlesi kanıtı saymak',
          wrong: '“Ahmet, buraya gel!” — ünlem işareti var; ünlem cümlesidir.',
          right: 'Bu bir emir cümlesidir; ünlem işareti seslenme ve emirden sonra da kullanılır. Ünlem cümlesi güçlü bir duygu bildirir.',
          body: 'İşaret bir ipucu olabilir ama kanıt değildir. Ölçüt, cümlenin ne yaptığıdır: duygu mu bildiriyor, emir mi veriyor?',
        },
      ],
    },

    {
      id: 'lgs-turkce-cumle-yapi',
      title: 'Yapısına göre: kaç yargı var?',
      lead: 'Yapı kararı virgüle değil, yargı sayısına ve fiilimsiye bakılarak verilir.',
      blocks: [
        {
          id: 'lgs-cumle-yapi-anlatim',
          type: 'prose',
          body: `Yapı bakımından cümleler dört başlıkta toplanır: **basit, birleşik, sıralı, bağlı.**

**Basit cümle:** tek yargı vardır ve fiilimsi yoktur. “Çocuklar bahçede oynuyor.” Cümle uzun olabilir; uzunluk basitliği bozmaz: “Mahallenin en eski kütüphanesindeki raflar geçen hafta yenilendi.” Bu cümle uzundur ama tek yargı taşır ve fiilimsi yoktur; basittir.

**Birleşik cümle:** cümlede bir **fiilimsi** vardır ve fiilimsi bir yan cümlecik kurar. “Koşarak gelen çocuk yoruldu.” Fiilimsi bulunan bir cümle, virgül ya da bağlaç olmasa bile basit sayılmaz. Bu, Fiilimsiler dersinde kurduğumuz bilginin doğrudan karşılığıdır.

**Sıralı cümle:** birden çok cümle **virgülle** birbirine bağlanmıştır. “Kapıyı açtı, içeri girdi, lambayı yaktı.” Her biri kendi yüklemine sahip ve bağlaç kullanılmamış.

**Bağlı cümle:** birden çok cümle **bağlaçla** bağlanmıştır. “Kapıyı açtı **ve** içeri girdi.” Bağlaçlar: ve, ama, fakat, ancak, çünkü, ya da…

Bu dördünü ayırmanın sırası önemlidir ve karar ağacında gördüğün gibidir: **önce fiilimsi kontrolü.** Çünkü fiilimsi bulunan bir cümle, başka hiçbir işaret olmasa da birleşiktir.

Sonra bağlaç, sonra virgül kontrolü gelir. En sonunda, hiçbiri yoksa cümle basittir.

Bir uyarı: **virgülün varlığı sıralı cümle kanıtı değildir.** Virgül ara sözü de ayırabilir, eş görevli ögeleri de: “Elma, armut, kiraz aldık.” Bu cümlede virgül var ama tek yargı taşıyor; basittir. Ölçüt virgül değil, **kaç yüklem bulunduğudur**.

İkinci uyarı: bir cümle aynı anda hem birleşik hem bağlı olabilir. “Koşarak gelen çocuk yoruldu **ve** bir bankta oturdu.” Fiilimsi var (birleşik) ve bağlaç var (bağlı). Soru genellikle baskın yapıyı sorar; ama ikisinin de bulunduğunu fark etmen gerekir.

Yapı sorularında en güvenilir yol şudur: **yüklemleri say, fiilimsileri say.** İki sayı sana yapıyı verir.`,
        },
        {
          id: 'lgs-cumle-yapi-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Dört yapıyı ayır',
          columns: ['Basit', 'Birleşik', 'Sıralı / bağlı'],
          rows: [
            { label: 'Yüklem sayısı', values: ['Bir', 'Bir (yan cümlecik ayrı)', 'Birden çok'] },
            { label: 'Fiilimsi', values: ['Yok', 'Var', 'Olabilir de olmayabilir de'] },
            { label: 'Bağlayıcı', values: ['Yok', 'Fiilimsi', 'Virgül (sıralı) / bağlaç (bağlı)'] },
            { label: 'Örnek', values: ['Çocuklar bahçede oynuyor.', 'Koşarak gelen çocuk yoruldu.', 'Kapıyı açtı, içeri girdi. / Açtı ve girdi.'] },
            { label: 'Sık yapılan hata', values: ['Uzun cümleyi basit saymamak', 'Fiilimsiyi görememek', 'Virgülü tek ölçüt sanmak'] },
          ],
          insight:
            'Uzunluk yapı belirlemez. Uzun ama tek yargılı bir cümle basittir; kısa ama fiilimsili bir cümle birleşiktir.',
        },
        {
          id: 'lgs-cumle-yapi-tuzak',
          type: 'trap',
          title: 'Virgül gördüğü an sıralı cümle demek',
          wrong: '“Elma, armut, kiraz aldık.” — virgül var; sıralı cümledir.',
          right: 'Cümlede tek yüklem var (“aldık”). Virgül burada eş görevli ögeleri ayırıyor. Cümle **basittir**.',
          body: 'Sıralı cümle için her bölümün kendi yükleminin bulunması gerekir. Yüklemleri saymak bu hatayı önler.',
        },
        {
          id: 'lgs-cumle-yapi-hafiza',
          type: 'memory',
          title: 'Dört soruluk tür taraması',
          body: '**Yüklem ne?** · **Yüklem nerede?** · **Cümle ne diyor?** · **Kaç yargı var?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Bir cümleye dört cevap',
      prompt:
        'Cümle: “Soğuktu o kış sabahı.” Dört bakış açısından türlerini belirle.',
      steps: [
        { title: 'Yüklemi bul', body: 'Yargıyı taşıyan sözcük: “soğuktu”. İçinde bir ek fiil (“-tu”) var.' },
        { title: 'Yüklemin türü', body: '“Soğuk” isim soylu bir sözcük ve ek fiil almış. → **İsim cümlesi**.' },
        { title: 'Yüklemin yeri', body: 'Yüklem cümlenin başında. → **Devrik cümle**. Bozuk değil; bir anlatım tercihi.' },
        { title: 'Anlamı', body: 'Bir yargı doğrulanıyor; olumsuzluk ya da soru yok. → **Olumlu cümle**.' },
        { title: 'Yapısı', body: 'Tek yargı var, fiilimsi yok, bağlaç yok, ikinci yüklem yok. → **Basit cümle**.' },
      ],
      answer: 'İsim cümlesi · devrik cümle · olumlu cümle · basit cümle.',
      takeaway: 'Dört bakış açısı birbiriyle çelişmez; aynı cümleye dört ad verilir.',
    },
    {
      title: 'Seviye 2 — Biçim mi, anlam mı?',
      prompt:
        'Şu cümleleri anlam bakımından sınıflandır: (1) “Bu kitabı okumayan kalmadı.” (2) “Yağmur yağdı mı içeri girer.” (3) “Ne kadar güzel bir manzara!”',
      steps: [
        { title: '(1) biçimi kontrol et', body: 'İki olumsuzluk var: “okumayan” ve “kalmadı”. Biçimce olumsuz.' },
        { title: '(1) anlamı kontrol et', body: 'İki olumsuzluk birbirini götürüyor; anlam “herkes okudu”. → **Anlamca olumlu**.' },
        { title: '(2) biçimi kontrol et', body: 'Soru eki “mı” var. Biçimce soru gibi görünüyor.' },
        { title: '(2) anlamı kontrol et', body: 'Cümle soru sormuyor; bir koşul bildiriyor (“yağmur yağdığında”). → **Soru cümlesi değil**; olumlu bir cümle.' },
        { title: '(3) anlamı kontrol et', body: 'Güçlü bir duygu (hayranlık) bildiriliyor ve ünlem işaretiyle bitiyor. → **Ünlem cümlesi**.' },
      ],
      answer: '(1) anlamca olumlu · (2) soru değil, olumlu (koşul bildiriyor) · (3) ünlem cümlesi',
      takeaway:
        'Anlam bakımından tür kararı biçime değil, cümlenin ne yaptığına bakılarak verilir.',
    },
    {
      title: 'Seviye 3 — Yapıyı belirle',
      prompt:
        'Şu cümlelerin yapısını belirle: (1) “Mahalledeki eski kütüphanenin rafları geçen hafta yenilendi.” (2) “Elma, armut, kiraz aldık.” (3) “Koşarak gelen çocuk yoruldu ve bir bankta oturdu.”',
      steps: [
        { title: '(1) fiilimsi var mı?', body: 'Yok. Yüklem sayısı: bir (“yenilendi”). Cümle uzun ama tek yargı taşıyor. → **Basit cümle**.' },
        { title: '(2) yüklemleri say', body: 'Tek yüklem var: “aldık”. Virgüller eş görevli ögeleri ayırıyor. → **Basit cümle**.' },
        { title: '(3) fiilimsi kontrolü', body: '“Koşarak” ve “gelen” fiilimsi. → Cümle **birleşik**.' },
        { title: '(3) bağlaç kontrolü', body: '“Ve” bağlacı iki yüklemi bağlıyor (“yoruldu”, “oturdu”). → Cümle aynı zamanda **bağlı**.' },
        { title: 'Sonucu ifade et', body: '(3) hem birleşik hem bağlı bir yapı taşıyor. Soru baskın yapıyı soruyorsa fiilimsi bulunduğu için birleşik denir; ikisinin de bulunduğunu belirtmek daha doğru bir cevaptır.' },
      ],
      answer: '(1) basit · (2) basit · (3) birleşik (aynı zamanda bağlı)',
      takeaway:
        'Uzunluk ve virgül yapı belirlemez. Yüklemleri ve fiilimsileri saymak belirler.',
    },
  ],

  questionClue: {
    concept: 'cümle türü sorusu',
    statement:
      'Soru kökünde “yüklemin türüne göre”, “yüklemin yerine göre”, “anlamına göre”, “yapısına göre” ifadelerinden biri varsa, hangi bakış açısının sorulduğunu belirle.',
    clues: [
      'Soru kökünde “…göre” ifadesiyle sınırlandırılmış bir bakış açısı',
      'Seçeneklerde “basit, birleşik, sıralı, bağlı” terimleri',
      'Cümlelerde olumsuzluk eki ya da soru ekinin bilerek yoğunlaştırılması',
      'Devrik yapıda kurulmuş cümleler',
      'Fiilimsi taşıyan ama bağlaç ve virgül taşımayan cümleler',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, biçime bakıp karar veren öğrenciyi hedefliyor. Çözüm yolu önce yüklemi bulmak, sonra soru kökünün istediği bakış açısına özel testi uygulamaktır.',
    boundary:
      'Bu ipuçlarını “virgül varsa sıralı, olumsuzluk eki varsa olumsuz” gibi kısayollara çevirme. İkisi de en sık düşülen tuzaklardır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir cümlenin yapısına göre türünün sorulması',
      'Dört cümleden hangisinin isim cümlesi olduğunun sorulması',
      'Biçimce olumsuz anlamca olumlu cümlenin bulunması',
      'Soru eki taşıdığı hâlde soru sormayan cümlenin seçtirilmesi',
      'Devrik cümlenin belirlenmesi',
      'Aynı cümlenin birden çok bakış açısından sınıflandırılması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bu konuyu anlamayan kalmadı.” cümlesi anlam bakımından hangi türdendir?',
      hint: 'Biçime değil, cümlenin ne dediğine bak.',
      answer:
        'Anlamca olumludur. Cümlede iki olumsuzluk var (“anlamayan” ve “kalmadı”) ve bunlar birbirini götürüyor; söylenen şey “herkes anladı”. Biçimce olumsuz, anlamca olumlu bir cümledir. Yalnız eklere bakıp “olumsuz” demek, bu konudaki en sık hatadır.',
    },
    {
      prompt:
        '“Elma, armut, kiraz aldık.” cümlesi yapısına göre hangi türdendir? Virgüller sıralı cümle yapar mı?',
      hint: 'Yüklemleri say.',
      answer:
        'Basit cümledir. Cümlede tek yüklem var: “aldık”. Virgüller burada eş görevli ögeleri (nesneleri) ayırıyor, ayrı yargıları değil. Sıralı cümle için her bölümün kendi yükleminin bulunması gerekir. Virgülün varlığı sıralı cümle kanıtı değildir.',
    },
    {
      prompt:
        '“Güzeldi o yaz akşamları.” cümlesini yüklemin türü ve yeri bakımından sınıflandır.',
      hint: 'Yüklem bir eylem mi bildiriyor, bir durum mu?',
      answer:
        'Yüklem “güzeldi”: “güzel” isim soylu bir sözcük ve ek fiil almış → **isim cümlesi**. Yüklem cümlenin başında bulunuyor → **devrik cümle**. Devrik olması cümleyi bozuk yapmaz; şiirde ve günlük anlatımda sık kullanılan bir tercihtir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil tanıma',
    body:
      'Kazanımın fiili “tanır”, açıklaması ise “kavramsal tanımlamalara girilmez” biçimindedir. MEB’in merkezî sınav kılavuzu da soruların analiz yapma becerisini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sorular tür tanımı sormaz; bir cümle verip türünü belirlemeni ister. Bu yüzden çeldiriciler biçim–anlam farkından ve virgül–bağlaç karışıklığından üretilir.',
    measures: [
      'Yüklemi bulup fiil–isim ayrımını yapabilme',
      'Yüklemin yerine göre kurallı–devrik ayrımını yapabilme',
      'Biçimce olumsuz anlamca olumlu cümleleri tanıyabilme',
      'Soru biçimli ama soru sormayan cümleleri ayırt edebilme',
      'Fiilimsi bulunan cümleyi birleşik sayabilme',
      'Virgülü değil yüklem sayısını ölçüt alabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün cümleler',
    passage: `Aşağıdaki cümleleri birlikte inceleyelim:
I. Kütüphanenin camları geçen hafta silindi.
II. Kitabı okuyan herkes aynı bölümden söz ediyor.
III. Açtı kapıyı, girdi içeri, yaktı lambayı.
IV. Bu konuyu bilmeyen yok.`,
    question: 'Bu cümlelerden hangisi **yapısına göre birleşik** cümledir?',
    options: [
      {
        text: 'I. cümle',
        explanation:
          'Tek yüklem var (“silindi”), fiilimsi yok, bağlaç ve ikinci yüklem yok. Cümle uzun olsa da tek yargı taşıyor: **basit cümle**.',
      },
      {
        text: 'II. cümle',
        explanation:
          'Doğru cevap. “Okuyan” bir sıfat-fiildir ve “herkes” sözcüğünü niteleyen bir yan cümlecik kuruyor. Cümlede bağlaç ya da virgül olmasa da fiilimsi bulunduğu için yapı **birleşiktir**.',
      },
      {
        text: 'III. cümle',
        explanation:
          'Üç ayrı yargı virgülle bağlanmış ve her birinin kendi yüklemi var: **sıralı cümle**. Ayrıca yüklemler başta olduğu için devriktir. Fiilimsi yok.',
      },
      {
        text: 'IV. cümle',
        explanation:
          'Güçlü bir çeldirici: “bilmeyen” bir sıfat-fiildir, yani bu cümle de aslında birleşiktir. Ancak soru tek bir cevap istiyor ve II. cümledeki yapı daha açıktır; bu seçeneği değerlendirirken önce fiilimsiyi fark etmen gerekir. Anlam bakımından ise bu cümle biçimce olumsuz, anlamca olumludur.',
      },
      {
        text: 'I. ve III. cümleler',
        explanation:
          'I. basit, III. sıralı cümledir; ikisinde de fiilimsi bulunmuyor. Bu seçenek iki farklı yapıyı birleşik diye gösteriyor.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü bakış açısını sınırlıyor: “yapısına göre”. Bu yüzden yüklemin türü ya da yeri değil, yargı sayısı ve fiilimsi varlığı incelenecek. Yöntem: her cümlede yüklemleri ve fiilimsileri saymak.',
    critical_point:
      'Kritik nokta, IV. cümlede de bir fiilimsi (“bilmeyen”) bulunması. Bu, iki seçeneğin de yapı bakımından birleşik olduğu anlamına gelir; ama IV. cümlenin asıl dikkat çeken özelliği anlam bakımındandır (biçimce olumsuz, anlamca olumlu). Soruyu çözerken II. cümledeki yan cümlecik daha belirgindir. Böyle durumlarda en açık örneği seçmek gerekir.',
    takeaway:
      'Fiilimsi varsa cümle basit değildir — bağlaç ya da virgül olmasa bile.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdaki cümlelerin hangisi **isim cümlesidir**?',
      options: [
        'Çocuklar bahçede koşuyor.',
        'O gün hava çok soğuktu.',
        'Kapıyı yavaşça açtı.',
        'Yarın sabah yola çıkacağız.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümlede yüklem “soğuktu”: “soğuk” isim soylu bir sözcüktür ve ek fiil almıştır. Diğer üç cümlede yüklemler birer fiildir (koşuyor, açtı, çıkacağız). İsim cümlelerini kaçırmamak için cümlenin son sözcüğüne bakıp “bu bir eylem mi?” diye sormak yeterlidir.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisi **biçimce olumsuz, anlamca olumludur**?',
      options: [
        'Bu soruyu çözemedim.',
        'Bu filmi görmeyen kalmadı.',
        'Yarın okula gitmeyeceğim.',
        'Ne para var ne pul.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümlede iki olumsuzluk var (“görmeyen” ve “kalmadı”) ve birbirini götürüyor; söylenen şey “herkes gördü”. Diğer üç cümlede olumsuzluk gerçekten bir yargıyı reddediyor: soruyu çözememek, gitmemek, hiçbir şeyin bulunmaması. Dördüncü cümle ekle değil sözcükle olumsuzluk kuruyor ama yine de anlamca olumsuzdur.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Kitap, defter, kalem aldım.” cümlesini sıralı cümle olarak sınıflandırıyor. Bu öğrencinin hatası nedir?',
      options: [
        'Virgülü yüklem sayısının yerine ölçüt almak',
        'Fiilimsiyi fark edememek',
        'Yüklemin yerini yanlış belirlemek',
        'Biçim ile anlamı karıştırmak',
      ],
      answer_index: 0,
      explanation:
        'Cümlede tek yüklem var: “aldım”. Virgüller eş görevli ögeleri (nesneleri) ayırıyor, ayrı yargıları değil. Sıralı cümle için her bölümün kendi yükleminin bulunması gerekir. Cümlede fiilimsi de yoktur; yapı bakımından **basit** cümledir.',
    },
  ],

  summary: [
    'Program tanım ezberi istemez: kazanımın fiili “tanır”, açıklaması “kavramsal tanımlamalara girilmez”.',
    'Bir cümleye dört ayrı açıdan bakılır ve dört ayrı ad verilir; bunlar birbiriyle çelişmez.',
    'Bütün tür kararları yüklemi bulmakla başlar.',
    'Yüklem fiilse fiil cümlesi, isim soylu + ek fiilse isim cümlesidir.',
    'Yüklem sondaysa kurallı, başka yerdeyse devriktir; devrik cümle bozuk değildir.',
    'Anlam bakımından karar biçime değil, cümlenin ne yaptığına bakılarak verilir.',
    'İki olumsuzluk birbirini götürebilir: “Bunu bilmeyen yok.” anlamca olumludur.',
    'Soru eki her zaman soru sormaz; koşul, istek ya da pekiştirme bildirebilir.',
    'Yapı kararı yüklem ve fiilimsi sayısına bakılarak verilir; virgül tek başına ölçüt değildir.',
    'Fiilimsi bulunan bir cümle, bağlaç ve virgül olmasa bile basit sayılmaz.',
  ],

  next: [
    'Görsel, Tablo ve Grafik Okuma (T.8.3.27, T.8.3.32)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
    'Cümlenin Ögeleri (T.8.4.18)',
  ],
})

export default lesson
