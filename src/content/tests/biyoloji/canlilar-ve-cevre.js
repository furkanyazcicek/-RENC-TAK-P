export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Temel Kavramlar',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Aynı türe ait bireyler arasında görülen genetik (kalıtsal) ve dış görünüş (fenotipik) farklılıklara ne ad verilir?',
        options: [
          { id: 'A', text: 'Varyasyon (Çeşitlilik)' },
          { id: 'B', text: 'Adaptasyon' },
          { id: 'C', text: 'Doğal Seçilim' },
          { id: 'D', text: 'Yapay Seçilim' },
          { id: 'E', text: 'Modifikasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Varyasyon, çeşitlilik demektir. İnsanların göz renklerinin, boylarının, ten renklerinin farklı olması tür içi varyasyona örnektir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi KALITSAL BİR VARYASYON (Genetik çeşitlilik) kaynağı DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Mutasyonlar' },
          { id: 'B', text: 'Mayoz bölünmedeki Krossing-over' },
          { id: 'C', text: 'Rastgele döllenme' },
          { id: 'D', text: 'Homolog kromozomların rastgele ayrılması' },
          { id: 'E', text: 'Güneş altında bronzlaşmak' }
        ],
        correctOptionId: 'E',
        explanation: 'Bronzlaşmak çevresel bir etkidir (Modifikasyon) ve genlerin dizilimini değiştirmediği için kalıtsal değildir, yavruya geçmez.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'DNA diziliminde (şifresinde) meydana gelen kalıcı değişikliklere ne ad verilir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Adaptasyon' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Replikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Mutasyon, DNA dizilimindeki hatalar veya değişimlerdir. Yeni gen versiyonlarının (alellerin) oluşmasının tek yoludur.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Çevre şartlarının (Sıcaklık, ışık, beslenme vb.) etkisiyle genlerin İŞLEYİŞİNDE (aktif/pasif olmasında) meydana gelen ve KALITSAL OLMAYAN değişikliklere ne ad verilir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Varyasyon' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Doğal Seçilim' },
          { id: 'E', text: 'Adaptasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Modifikasyon gen yapısını bozmaz, sadece çalışmasını değiştirir. Arı larvalarının çiçek tozuyla beslenince işçi, arı sütüyle beslenince kraliçe olması gibi.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Canlıların bulundukları ortamda yaşama ve üreme şansını artıran, NESİLDEN NESİLE AKTARILAN (kalıtsal) özelliklere ne denir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Adaptasyon (Uyum)' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Varyasyon' },
          { id: 'E', text: 'Mutasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Adaptasyon (kalıtsal uyum), canlının o çevrede hayatta kalmasını sağlayan doğuştan gelen özellikleridir. Kaktüsün iğne yapraklı olması gibi.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Doğadaki şartlara (kamuflaj, hız, hastalık) uyum sağlayan canlıların HAYATTA KALIP üremesi, uyum sağlayamayanların ise YOK OLMASI sürecine ne denir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Yapay Seçilim' },
          { id: 'C', text: 'Mutasyon' },
          { id: 'D', text: 'Doğal Seçilim' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'D',
        explanation: 'Doğal seçilim, "Güçlü/Uyumlu olan yaşar, zayıf/uyumsuz olan elenir" prensibidir. Çevre koşulları kimin yaşayacağını "seçer".'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'İnsanların, kendi istedikleri özelliklere sahip olan canlıları (örneğin daha çok süt veren inekleri, daha tatlı elmaları) seçip üreterek yeni ırklar elde etmesine ne denir?',
        options: [
          { id: 'A', text: 'Doğal Seçilim' },
          { id: 'B', text: 'Yapay Seçilim' },
          { id: 'C', text: 'Adaptasyon' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Krossing-over' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğada seçici güç "çevre" ise Doğal Seçilim, seçici güç "insanların istekleri" ise Yapay Seçilim adını alır.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Canlıların ve Çevre konusunda "Fitness (Biyolojik Uyum Başarısı)" kavramı neyi ifade eder?',
        options: [
          { id: 'A', text: 'Canlının kaslı ve güçlü olmasını' },
          { id: 'B', text: 'Canlının uzun yaşamasını' },
          { id: 'C', text: 'Canlının hayatta kalıp, GENLERİNİ YENİ NESİLLERE AKTARABİLME (Üreme) başarısını' },
          { id: 'D', text: 'Canlının çok hızlı koşmasını' },
          { id: 'E', text: 'Canlının iri yapılı olmasını' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojide güç veya kas önemli değildir. En başarılı canlı, en çok yavru yapıp genlerini geleceğe en çok taşıyabilen canlıdır.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Bakterilerin, kendilerini öldürmek için kullanılan ilaçlara karşı zamanla etkilenmez hale gelmesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Yapay seçilim' },
          { id: 'C', text: 'Antibiyotik Direnci' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Alerji' }
        ],
        correctOptionId: 'C',
        explanation: 'Antibiyotik direnci, bakterilerin mutasyon veya gen aktarımı sayesinde antibiyotiğe (ilaca) karşı hayatta kalabilme yeteneği kazanmasıdır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Tarım zararlılarına (böceklere) karşı kullanılan kimyasal zehirlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Antibiyotik' },
          { id: 'B', text: 'Pestisit' },
          { id: 'C', text: 'Hormon' },
          { id: 'D', text: 'Vitamin' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'B',
        explanation: 'Pestisit, tarımda böcek ve yabani otları öldürmek için kullanılan kimyasal zehirlere verilen genel addır. Böceklerin buna dayanıklı hale gelmesine de "Pestisit Direnci" denir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Bir popülasyondaki TÜM BİREYLERİN sahip olduğu genlerin (alellerin) toplamına ne ad verilir?',
        options: [
          { id: 'A', text: 'Gen havuzu' },
          { id: 'B', text: 'Karyotip' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Varyasyon' },
          { id: 'E', text: 'Fenotip' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir göldeki balıkların tüm genlerini bir havuza atarsak bu "Popülasyonun Gen Havuzu" olur. Evrim, bu havuzdaki gen oranlarının (frekansının) değişmesidir.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir "Modifikasyon (Kalıtsal olmayan çevre etkisi)" örneğidir?',
        options: [
          { id: 'A', text: 'Kutup ayısının beyaz tüylü olması' },
          { id: 'B', text: 'Kaktüsün diken yapraklı olması' },
          { id: 'C', text: 'Çuha çiçeğinin sıcaklık değişimine göre farklı renkte açması' },
          { id: 'D', text: 'Bukalemunun renk değiştirmesi' },
          { id: 'E', text: 'İnsanda altı parmaklılık mutasyonu' }
        ],
        correctOptionId: 'C',
        explanation: 'Çuha çiçeğinin tohumları 15-20 derecede kırmızı, 30-35 derecede beyaz açar. Sıcaklık değişince renk değişir, bu genin işleyişinin değişmesidir (Modifikasyon).'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Hangisi yeni bir gen çeşidi (Alel) oluşmasının TEK DOĞAL YOLUDUR?',
        options: [
          { id: 'A', text: 'Krossing-over' },
          { id: 'B', text: 'Rastgele döllenme' },
          { id: 'C', text: 'Mutasyon' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Doğal Seçilim' }
        ],
        correctOptionId: 'C',
        explanation: 'Krossing-over ve döllenme var olan genleri karıştırır. SIFIRDAN yeni bir gen (Örn: mavi göz geni yokken oluşması) SADECE mutasyonla mümkündür.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Bireyin yaşamı boyunca değişen çevre şartlarına (örneğin yüksek dağa çıkınca) geçici olarak uyum sağlamasına ne denir?',
        options: [
          { id: 'A', text: 'Adaptasyon' },
          { id: 'B', text: 'Doğal seçilim' },
          { id: 'C', text: 'Mutasyon' },
          { id: 'D', text: 'Aklimasyon (Aklimatizasyon)' },
          { id: 'E', text: 'Yapay Seçilim' }
        ],
        correctOptionId: 'D',
        explanation: 'Yükseğe çıkınca alyuvar sayısının artması Aklimasyondur. Bu bireysel ve geçicidir (aşağı inince düzelir), kalıtsal adaptasyonla karıştırılmamalıdır.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Doğal seçilimin (evrimin) sonuçları HANGİ SEVİYEDE (düzeyde) ortaya çıkar?',
        options: [
          { id: 'A', text: 'Sadece tek bir hücrenin içinde' },
          { id: 'B', text: 'Tek bir bireyin yaşam süresinde' },
          { id: 'C', text: 'Bütün ekosistemlerde aynı anda' },
          { id: 'D', text: 'Popülasyonun gen havuzunda (nesiller boyunca)' },
          { id: 'E', text: 'Sadece bitkilerde' }
        ],
        correctOptionId: 'D',
        explanation: 'Seçilim BİREYİ eler veya seçer, ama evrimsel değişim (sonuç) POPÜLASYONUN gen havuzunda nesiller sonra görülür. Birey evrimleşmez, popülasyon evrimleşir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Mutasyon ve Kalıtsallık',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Bir mutasyonun yavrulara geçebilmesi (kalıtsal olabilmesi) için HANGİ HÜCRELERDE gerçekleşmesi ZORUNLUDUR?',
        options: [
          { id: 'A', text: 'Deri hücrelerinde' },
          { id: 'B', text: 'Karaciğer hücrelerinde' },
          { id: 'C', text: 'Üreme (Eşey / Gamet) hücrelerinde' },
          { id: 'D', text: 'Kas hücrelerinde' },
          { id: 'E', text: 'Beyin hücrelerinde' }
        ],
        correctOptionId: 'C',
        explanation: 'Yavruya sadece sperm ve yumurta (üreme hücreleri) aktarılır. Bu hücrelerde olmayan hiçbir değişiklik yavruya geçemez.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Vücut (Somatik) hücrelerinde meydana gelen bir mutasyon (örneğin güneş altında deride oluşan cilt kanseri mutasyonu) çocuklara geçer mi?',
        options: [
          { id: 'A', text: 'Evet, kesinlikle geçer.' },
          { id: 'B', text: 'Hayır, somatik hücre mutasyonları yavruya geçmez (Eşeysiz üreyenler hariç).' },
          { id: 'C', text: 'Sadece erkek çocuklara geçer.' },
          { id: 'D', text: 'Sadece kız çocuklara geçer.' },
          { id: 'E', text: 'Bir nesil atlayıp toruna geçer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Somatik (vücut) hücrelerimizdeki genetik hasarlar sadece bizi etkiler (Kanser vb.). Çocuğa geçmesi için sperm veya yumurtada olmalıdır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: '"Tüm mutasyonlar zararlıdır ve canlının ölümüne sebep olur." ifadesi için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Kesinlikle doğrudur.' },
          { id: 'B', text: 'Doğrudur, mutasyonlar hep hastalık yapar.' },
          { id: 'C', text: 'Yanlıştır; mutasyonlar zararlı, etkisiz (nötr) veya yararlı (uyum şansını artıran) olabilir.' },
          { id: 'D', text: 'Sadece bitkiler için doğrudur.' },
          { id: 'E', text: 'Sadece bakteriler için doğrudur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çoğu mutasyon etkisiz veya zararlıdır, ancak çok küçük bir kısmı canlıya yeni bir avantaj (yarar) sağlayabilir (Örn: hastalıklara direnç geni).'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir mutasyon sebebidir (Mutajenik faktör)?',
        options: [
          { id: 'A', text: 'Röntgen cihazındaki X ışınları (Radyasyon)' },
          { id: 'B', text: 'Spor yapmak' },
          { id: 'C', text: 'Fazla su içmek' },
          { id: 'D', text: 'Çok uyumak' },
          { id: 'E', text: 'Müzik dinlemek' }
        ],
        correctOptionId: 'A',
        explanation: 'Radyasyon, UV (morötesi) ışınlar ve kimyasal kanserojenler DNA zincirlerini kırıp bozduğu için mutasyonlara (mutajen) sebep olur.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Eşeysiz üreyen (örneğin bölünerek çoğalan bir amip veya çelikle üretilen bitki) bir canlıda, vücut hücresindeki mutasyon yavruya geçer mi?',
        options: [
          { id: 'A', text: 'Hayır, geçmez.' },
          { id: 'B', text: 'Evet, geçer çünkü yavru doğrudan bu vücut hücresinden (mitozla) oluşmuştur.' },
          { id: 'C', text: 'Sadece bitkilerde geçer.' },
          { id: 'D', text: 'Sadece bakteride geçer.' },
          { id: 'E', text: 'Bir nesil atlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşeysiz üremede canlı doğrudan vücut parçasından (mitozla) oluştuğu için vücuttaki mutasyon yavruya AYNEN geçer.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'İnsanların kas geliştirip (spor yaparak) irileşmesi, bu kaslı yapıyı çocuklarına aktarmasını sağlar mı?',
        options: [
          { id: 'A', text: 'Evet, güçlü genler çocuğa geçer.' },
          { id: 'B', text: 'Hayır, bu bir modifikasyondur (çevre etkisi) ve genlerin yapısını bozmadığı için yavruya geçmez.' },
          { id: 'C', text: 'Sadece erkek çocuk kaslı doğar.' },
          { id: 'D', text: 'Evet, adaptasyondur.' },
          { id: 'E', text: 'Evet, doğal seçilimdir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sporla kas yapmak çevre etkisiyle gen işleyişinin değişmesidir (Modifikasyon). Sperm veya yumurtanın DNA\'sını değiştirmez, çocuğa geçmez.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Bir bakterinin DNA\'sında oluşan mutasyon, ona bir antibiyotiğe (ilaca) karşı direnç kazandırırsa, bu mutasyon bakteri için nasıldır?',
        options: [
          { id: 'A', text: 'Zararlıdır' },
          { id: 'B', text: 'Etkisizdir (Nötr)' },
          { id: 'C', text: 'Yararlıdır (Onun hayatta kalmasını sağlamıştır)' },
          { id: 'D', text: 'Ölümcüldür' },
          { id: 'E', text: 'Hastalık yapıcıdır' }
        ],
        correctOptionId: 'C',
        explanation: 'Yarar-Zarar görecelidir. Bizim için kötü (bakteri ölmedi) olsa da, BİYOLOJİK OLARAK bakterinin yaşamasını sağladığı için bakteri adına "Yararlı" mutasyondur.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Genotip (DNA) ve Çevre şartlarının ortak etkisiyle ortaya çıkan CANLININ DIŞ GÖRÜNÜŞÜNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Fenotip' },
          { id: 'C', text: 'Karyotip' },
          { id: 'D', text: 'Gen havuzu' },
          { id: 'E', text: 'Adaptasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Genotip şifredir, fenotip (dış görünüş) ise o şifrenin çevrenin de etkisiyle (beslenme vb.) dışa yansımış somut halidir.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Canlıların DNA kopyalaması (replikasyon) sırasında meydana gelen DİZİLİM HATALARININ biyolojik önemi nedir?',
        options: [
          { id: 'A', text: 'Her zaman canlıyı öldürmesidir.' },
          { id: 'B', text: 'Canlıyı her zaman daha güçlü yapmasıdır.' },
          { id: 'C', text: 'Yeni aleller (gen çeşitleri) oluşturarak doğadaki VARYASYON (çeşitlilik) kaynağı olmalarıdır.' },
          { id: 'D', text: 'Sadece kanser yapmalarıdır.' },
          { id: 'E', text: 'Hiçbir önemleri yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mutasyonlar olmasaydı dünyadaki tüm canlılar klon gibi tıpatıp aynı kalırdı. Yeni özelliklerin doğmasının ham maddesi mutasyondur.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: '"Mutasyonlar İHTİYACA GÖRE ortaya çıkarlar." ifadesi doğru mudur?',
        options: [
          { id: 'A', text: 'Evet, hayvan üşürse kalın tüy mutasyonu üretir.' },
          { id: 'B', text: 'Evet, bakteri antibiyotik görünce hemen ona göre mutasyon yapar.' },
          { id: 'C', text: 'Hayır, mutasyonlar RASTGELE (tesadüfi) hatalardır, canlının ihtiyacına göre bilinçli oluşmazlar.' },
          { id: 'D', text: 'Evet, insan çok isterse mutasyon yapabilir.' },
          { id: 'E', text: 'Evet, çevre mutasyonun ne olacağına karar verir.' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA kopyalama hatası bilinçli değildir. Rastgele oluşur. Çevre, olan mutasyonlardan uygun olanı SEÇER, uygun mutasyonu ÜRETTİRMEZ.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi Kalıtsal Varyasyonu (Çeşitliliği) ARTIRAN olaylardan biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Krossing-over (Mayozda parça değişimi)' },
          { id: 'C', text: 'Döllenme' },
          { id: 'D', text: 'Mitoz bölünme' },
          { id: 'E', text: 'Homolog kromozomların ayrılması' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitoz bölünme kopyala-yapıştır mantığıyla çalışır, birbirinin tıpatıp aynısı hücreler üretir. Çeşitlilik (Varyasyon) YARATMAZ.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Aynı yumurta ikizlerinin (genetik yapıları %100 aynı) boy ve kilolarının farklı olması ne ile açıklanır?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Modifikasyon (Çevresel beslenme/yaşam koşulları etkisi)' },
          { id: 'C', text: 'Adaptasyon' },
          { id: 'D', text: 'Yapay Seçilim' },
          { id: 'E', text: 'Doğal Seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA aynı olmasına rağmen fenotipler farklıysa, bu fark genetik değil ÇEVRESELDİR (Modifikasyon).'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Hangisi doğal popülasyonlarda gen çeşitliliğini (varyasyonu) korumanın sağladığı EN BÜYÜK avantajdır?',
        options: [
          { id: 'A', text: 'Herkesin aynı görünmesini sağlamak' },
          { id: 'B', text: 'Çevre şartları değiştiğinde veya yeni hastalık çıktığında, popülasyonun tamamen yok olmasını engelleyip uyum sağlayacak bireyler barındırmak.' },
          { id: 'C', text: 'Canlıların daha hızlı koşmasını sağlamak' },
          { id: 'D', text: 'Mitoz hızını artırmak' },
          { id: 'E', text: 'Besin ihtiyacını azaltmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer bir türdeki tüm bireyler klon (aynı) olsaydı, tek bir hastalık hepsini yok edebilirdi. Çeşitlilik (Varyasyon), türün sigortasıdır.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Bir genin (Örn: Göz rengi) popülasyon içindeki FARKLI VERSİYONLARINA (Mavi, Kahverengi vb.) ne ad verilir?',
        options: [
          { id: 'A', text: 'Alel' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Organel' },
          { id: 'D', text: 'Doku' },
          { id: 'E', text: 'Hücre zarı' }
        ],
        correctOptionId: 'A',
        explanation: 'Alel, bir genin alternatif versiyonudur. Göz rengi geni tektir, ama "Mavi Alel", "Kahverengi Alel" gibi varyasyonları vardır.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Aşağıdaki hücrelerden hangisinde gerçekleşecek bir mutasyon KESİNLİKLE yavru döllere aktarılamaz?',
        options: [
          { id: 'A', text: 'Sperm hücresi' },
          { id: 'B', text: 'Yumurta hücresi' },
          { id: 'C', text: 'Yumurta ana hücresi (Mayoz geçiren)' },
          { id: 'D', text: 'Sperm ana hücresi' },
          { id: 'E', text: 'Karaciğer hücresi (Somatik vücut hücresi)' }
        ],
        correctOptionId: 'E',
        explanation: 'Karaciğer, deri, göz, kas gibi VÜCUT (Somatik) hücrelerinde olan değişimler, üreme hücresi (sperm/yumurta) üretimine katılmaz, yavruya geçemez.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Doğal Seçilim ve Adaptasyon',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Kutuplarda yaşayan ayıların kalın yağ tabakasına ve beyaz post rengine sahip olması neye örnektir?',
        options: [
          { id: 'A', text: 'Adaptasyon (Kalıtsal uyum)' },
          { id: 'B', text: 'Modifikasyon (Çevreyle geçici değişim)' },
          { id: 'C', text: 'Yapay seçilim' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Kamuflaj olmayan mutasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Nesiller boyunca oluşan, canlının hayatta kalmasını sağlayan kalıtsal ve yapısal uyumlar Adaptasyondur.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Doğal seçilimin çalışabilmesi (Birilerini seçip birilerini eleyebilmesi) için İLK ve EN TEMEL ŞART nedir?',
        options: [
          { id: 'A', text: 'Popülasyondaki tüm bireylerin birbirinin TIPATIP AYNISI olması' },
          { id: 'B', text: 'Popülasyonda KALITSAL VARYASYON (farklılıklar) bulunması' },
          { id: 'C', text: 'İnsanların müdahale etmesi' },
          { id: 'D', text: 'Hiç mutasyon olmaması' },
          { id: 'E', text: 'Canlıların eşeysiz üremesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Farklılık (Varyasyon) olmazsa, çevre kimi seçecek? Herkes aynıysa ya hepsi yaşar ya hepsi ölür. Doğal seçilim, "farklılar" arasından eleme yapar.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Ormanda yaşayan güve kelebeklerinin bazıları beyaz, bazıları siyahtır (Kalıtsal Varyasyon). Ağaç gövdeleri kurumla kararırsa (Çevre değişimi) hangi güveler avcı kuşlar tarafından daha çok avlanır (Elenir)?',
        options: [
          { id: 'A', text: 'Siyah güveler' },
          { id: 'B', text: 'Beyaz güveler (Koyu zeminde parlayıp avcılar tarafından kolayca görüldükleri için)' },
          { id: 'C', text: 'İkisi de eşit avlanır' },
          { id: 'D', text: 'Hiçbiri avlanmaz' },
          { id: 'E', text: 'Siyah güveler beyazlaşır' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevre şartları değiştiğinde (zemin karardığında), eski avantajlı özellik (beyazlık) dezavantaja dönüşür. Kuşlar (çevre) onları yer (doğal seçilim).'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Yukarıdaki güve örneğinin (Beyazların avlanıp elenmesi, siyahların hayatta kalarak çoğalması) sonucunda, sonraki nesillerde SİYAH GÜVE sayısının oranca ARTMA sürecine ne denir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Yapay seçilim' },
          { id: 'C', text: 'Doğal seçilim (Evrimsel sonuç)' },
          { id: 'D', text: 'Mitoz' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'C',
        explanation: 'Çevrenin (kuşlar ve is) oluşturduğu baskı sonucunda hayatta kalanların genlerini aktarması olayının bütünü Doğal Seçilimdir.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Adaptasyonlar KALITSAL midir? Yani yavru döllere aktarılır mı?',
        options: [
          { id: 'A', text: 'Hayır, bireyin ölümüyle yok olurlar.' },
          { id: 'B', text: 'Evet, adaptasyonlar DNA\'da kayıtlıdır (genetiktir) ve yavrulara aynen aktarılır.' },
          { id: 'C', text: 'Sadece sıcak havalarda aktarılır.' },
          { id: 'D', text: 'Sadece erkek yavruya aktarılır.' },
          { id: 'E', text: 'Hayır, çevresel modifikasyondur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çölde yaşayan kaktüsün tohumunu sulak yere ekseniz bile iğne yapraklı çıkar. Çünkü adaptasyonlar genlere işlenmiştir, çevreden bağımsız kalıtsaldır.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir YAPI (Morfolojik) adaptasyon örneğidir?',
        options: [
          { id: 'A', text: 'Kurbağaların ayak parmakları arasında ağ (perde) bulunması' },
          { id: 'B', text: 'Kuşların kışın sıcak ülkelere göç etmesi (Davranış)' },
          { id: 'C', text: 'Güneşlenince derinin kararması (Modifikasyon)' },
          { id: 'D', text: 'Kas yapıp güçlenmek (Modifikasyon)' },
          { id: 'E', text: 'Köpeklerin tehlikede havlaması (Davranış)' }
        ],
        correctOptionId: 'A',
        explanation: 'Ayaklarda perde olması, su içinde yüzmeyi kolaylaştıran GÖZLE GÖRÜLÜR, YAPIŞAL (morfolojik) bir adaptasyondur.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir DAVRANIŞSAL adaptasyon örneğidir?',
        options: [
          { id: 'A', text: 'Bukalemunun uzun dilli olması' },
          { id: 'B', text: 'Deve kuşunun uzun bacaklı olması' },
          { id: 'C', text: 'Bazı ayıların ve kemirgenlerin kış uykusuna yatması' },
          { id: 'D', text: 'Kaktüsün iğneli olması' },
          { id: 'E', text: 'Balıkların solungaçlı olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kış uykusuna yatmak veya göç etmek canlının organ yapısı değil, hayatta kalmak için sergilediği İÇGÜDÜSEL DAVRANIŞTIR.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: '"Doğada her zaman sadece EN İRİ ve EN GÜÇLÜ OLAN hayatta kalır." Bu ifade doğal seçilim için DOĞRU MUDUR?',
        options: [
          { id: 'A', text: 'Evet, aslan her zaman tavşanı yener ve daha başarılıdır.' },
          { id: 'B', text: 'Evet, büyük olmak evrimin tek kuralıdır.' },
          { id: 'C', text: 'Hayır, çevreye EN UYGUN (Uyumlu) olan hayatta kalır. Bazen küçük, saklanan veya hızlı olan daha başarılıdır.' },
          { id: 'D', text: 'Evet, küçük canlıların hepsi elenmiştir.' },
          { id: 'E', text: 'Evet, doğal seçilim kas gücüdür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Dinozorlar çok iriydi ama yok oldular, küçük faremsi atalarımız saklanarak hayatta kaldı. Önemli olan "güçlü" değil "ortama UYUMLU" olmaktır.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Aşağıdaki durumlardan hangisi, Doğal Seçilim mekanizmasında "BASKI (Seçici Faktör)" oluşturan bir çevre elemanı OLABİLİR?',
        options: [
          { id: 'A', text: 'Sadece avcılar' },
          { id: 'B', text: 'Sadece iklim (Kuraklık, soğuk vb.)' },
          { id: 'C', text: 'Sadece hastalık yapıcı bakteriler' },
          { id: 'D', text: 'Avcılar, iklim, besin kıtlığı, hastalıklar gibi canlının yaşamasını zorlaştıran HER ŞEY' },
          { id: 'E', text: 'Sadece bitkiler' }
        ],
        correctOptionId: 'D',
        explanation: 'Çevre baskısı (Seçilim baskısı); canlıyı öldürme veya üremesini engelleme potansiyeli olan biyotik (canlı) ve abiyotik (cansız) faktörlerin tümüdür.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Aynı çevre şartlarında (örneğin kurak çöl ortamında) yaşayan FARKLI TÜR canlılar (Örn: Çöl faresi ve Çöl tilkisi), hayatta kalmak için BENZER adaptasyonlar (örn: büyük kulaklar, açık renk kürk) geliştirir mi?',
        options: [
          { id: 'A', text: 'Hayır, asla benzemezler.' },
          { id: 'B', text: 'Evet, farklı tür olsalar da AYNI ÇEVRE şartlarına uyum sağlamak BENZER (yakınsak) adaptasyonlar doğurur.' },
          { id: 'C', text: 'Sadece bitkilerde benzer.' },
          { id: 'D', text: 'Sadece böceklerde benzer.' },
          { id: 'E', text: 'İkisi de aynı tür olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aynı sınav (çöl sıcaklığı) aynı doğru cevabı (ısıyı atmak için büyük kulak) gerektirir. Farklı türler aynı ortamda benzer adaptasyonlar kazanabilir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Doğal seçilim sonucunda, çevreye uyumlu (avantajlı) özelliği sağlayan GENLERİN (Alellerin) popülasyondaki BULUNMA ORANI (Frekansı) zamanla ne olur?',
        options: [
          { id: 'A', text: 'Artar (Çünkü uyumlu bireyler daha çok yaşar ve ürer, genlerini daha çok aktarır).' },
          { id: 'B', text: 'Azalır' },
          { id: 'C', text: 'Hiç değişmez' },
          { id: 'D', text: 'Tamamen kaybolur' },
          { id: 'E', text: 'Modifikasyona dönüşür' }
        ],
        correctOptionId: 'A',
        explanation: 'Ödül olarak hayatta kalıp üreyen bireyler, yavrularına bu iyi genleri verir. Nesiller sonra bu iyi genlerin popülasyondaki oranı (frekansı) giderek artar.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Kurbağaların sinek yakalamak için dillerinin UZUN olması bir adaptasyondur. Peki kurbağa, dilini GÜNDE 100 KERE UZATTIĞI İÇİN (kullandığı için) mi dili uzamıştır?',
        options: [
          { id: 'A', text: 'Evet, çok kullananın dili uzar ve bunu yavrusuna geçirir (Lamarck\'ın çürütülmüş görüşü).' },
          { id: 'B', text: 'Hayır, dilleri rastgele mutasyonlarla farklı uzunluklarda (varyasyon) doğdular. Uzun dilli olanlar daha çok yemek bulup yaşadı (Doğal Seçilim).' },
          { id: 'C', text: 'Evet, sinekler kurbağanın dilini çekip uzatmıştır.' },
          { id: 'D', text: 'Evet, kurbağa uzamasını İSTEMİŞTİR.' },
          { id: 'E', text: 'Hayır, sinekler yaklaşmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrim "İhtiyaçla organ oluşturmaz" veya "Kullanılanı kalıtsal geliştirmez". Zaten var olan rastgele farklılıklardan (Varyasyon) İŞE YARAYANLARI (Uzun dilli olanları) SEÇER.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: '"Aklimatizasyon" (Bireysel Uyum) ile "Adaptasyon" (Kalıtsal Uyum) arasındaki EN TEMEL FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynı şeydir.' },
          { id: 'B', text: 'Aklimatizasyon bireyin kendi yaşamında oluşur ve GEÇİCİDİR (Genleri değiştirmez, yavruya geçmez). Adaptasyon ise KALITSALDIR ve yavruya geçer.' },
          { id: 'C', text: 'Adaptasyon sadece bitkilerde, aklimatizasyon hayvanda olur.' },
          { id: 'D', text: 'Aklimatizasyon zararlı, adaptasyon yararlıdır.' },
          { id: 'E', text: 'Aklimatizasyon DNA dizilimini değiştirir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dağa çıkınca alyuvarınız artar (Aklimatizasyon), inince geri düşer. Yavrunuz yüksek dağ alyuvarıyla doğmaz. Adaptasyon (örn: zürafa boynu) ise doğuştandır.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Farklı bir çevreye geçen canlının, ortam koşullarına UYUM SAĞLAYAMAYIP popülasyondan silinmesine ne denir?',
        options: [
          { id: 'A', text: 'Doğal Seçilim ile ELENME (Yok olma / Doğal ölüm)' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Krossing-over' },
          { id: 'D', text: 'Klonlama' },
          { id: 'E', text: 'Mutasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğal seçilim sadece "Seçme" (Yaşatma) yapmaz, aynı zamanda başarısız genotipleri "Eleme" (Öldürme veya üremesini engelleme) yapar.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Doğal Seçilimin ana amacı veya hedefi var mıdır?',
        options: [
          { id: 'A', text: 'Evet, kusursuz ve ölümsüz canlı yaratmak.' },
          { id: 'B', text: 'Evet, insanı oluşturmak.' },
          { id: 'C', text: 'Hayır, bilinçli bir amacı yoktur. Sadece O ANKİ çevre koşullarında "Yeterince iyi" olanı hayatta tutar.' },
          { id: 'D', text: 'Evet, canlıları büyütmek.' },
          { id: 'E', text: 'Evet, mutasyonları engellemek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal seçilim kördür, plan yapmaz. Geleceği düşünmez. Sadece bugünün şartlarına uyabilen (geçer not alan) canlıyı yarına aktarır.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Yapay Seçilim ve Antibiyotik Direnci',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'İnsanların, yabani hardal bitkisinden "Brokoli, Karnabahar, Lahana" gibi farklı sebzeleri üretmesi neye örnektir?',
        options: [
          { id: 'A', text: 'Doğal Seçilim' },
          { id: 'B', text: 'Yapay Seçilim (Seçici yetiştiricilik)' },
          { id: 'C', text: 'Adaptasyon' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanlar, hardalın yaprağı büyük olanı çiftleştirip lahana, çiçeği büyük olanı çiftleştirip karnabahar üretmiştir. Seçen doğa değil insan olduğu için "Yapay" seçilimdir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Köpek türlerinin (Çivava, Kangal, Sivas vb.) atası aslında Kurt\'tur. Bu kadar farklı köpek ırkı nasıl oluşmuştur?',
        options: [
          { id: 'A', text: 'Sadece beslenme farklılığından (Modifikasyon)' },
          { id: 'B', text: 'İnsanların kendi ihtiyaçlarına (koruma, süs, av) uygun özellikteki kurtları seçip ÇİFTLEŞTİRMESİYLE (Yapay Seçilim)' },
          { id: 'C', text: 'Doğal iklim şartlarından' },
          { id: 'D', text: 'Antibiyotik kullanımından' },
          { id: 'E', text: 'Kromozom sayılarının değişmesinden' }
        ],
        correctOptionId: 'B',
        explanation: 'Binlerce yıl boyunca uysalları, küçükleri veya bekçiliğe uygun olanları seçip çiftleştiren insan, yapay seçilimle bu farklı ırkları var etmiştir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Bakterilerin zarını yırtarak veya protein sentezini durdurarak onları öldüren ilaçlara ne ad verilir?',
        options: [
          { id: 'A', text: 'Vitamin' },
          { id: 'B', text: 'Hormon' },
          { id: 'C', text: 'Aşı' },
          { id: 'D', text: 'Antibiyotik' },
          { id: 'E', text: 'Ağrı kesici' }
        ],
        correctOptionId: 'D',
        explanation: 'Antibiyotikler SADECE BAKTERİLERİ öldüren veya durduran ilaçlardır. (Virüslere, nezleye, gribe etki etmezler).'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Bakterilerin antibiyotiğe (ilaca) DİRENÇ (etkilenmeme) KAZANMASI aslen nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'İlacı görünce bakterinin "Ben güçlenmeliyim" diye karar verip direnç geni üretmesiyle.' },
          { id: 'B', text: 'Bakterilerin tesadüfi MUTASYONLARLA rastgele direnç genlerine SAHİP OLMASI ve ilaç verildiğinde sadece bu dirençlilerin HAYATTA KALIP çoğalmasıyla.' },
          { id: 'C', text: 'Bakterinin antibiyotiği yiyip güçlenmesiyle.' },
          { id: 'D', text: 'İlacın bakteriyi beslemesiyle.' },
          { id: 'E', text: 'Bakterilerin hapşırarak ilacı atmasıyla.' }
        ],
        correctOptionId: 'B',
        explanation: 'Antibiyotik bakteriye direnç ÜRETTİRMEZ. Tesadüfen zaten dirençli DOĞMUŞ olan bakteriler hayatta kalır, diğerleri ölür (Doğal Seçilim).'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Sürekli ve GEREKSİZ YERE antibiyotik kullanan bir insanda bakteriler neden daha çabuk DİRENÇ kazanır (Süper bakteri olur)?',
        options: [
          { id: 'A', text: 'İlaç bakteriye vitamin olduğu için' },
          { id: 'B', text: 'Gereksiz antibiyotik, vücuttaki "Dirençsiz" bakterileri öldürüp meydanı SADECE "Dirençli" olanlara bırakır (Seçilim baskısını hızlandırır).' },
          { id: 'C', text: 'Midesi bozulduğu için' },
          { id: 'D', text: 'İlaç bakterileri daha hızlı böldüğü için' },
          { id: 'E', text: 'Vücut ilaca alıştığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Antibiyotik bir elektir. Sürekli kullanırsanız tüm zayıfları elersiniz, elinizde sadece ilaçla ölmeyen çok güçlü (dirençli) bakteriler kalır ve hastalık tedavi edilemez hale gelir.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Bir tarlaya böcek öldürücü (Pestisit) ilaç atılıyor. İlk yıl böceklerin %99\'u ölüyor. Aynı ilacı 5 yıl üst üste attıklarında artık böceklerin sadece %20\'si ölüyor. Bu durumun sebebi nedir?',
        options: [
          { id: 'A', text: 'İlacın son kullanma tarihinin geçmesi' },
          { id: 'B', text: 'Böceklerin tarlayı terk etmesi' },
          { id: 'C', text: 'İlk yıl ilaca DİRENÇLİ OLAN (Ölmeyen) %1\'lik grubun hayatta kalıp çoğalması ve artık tarlayı DİRENÇLİ YAVRULARIN (Evrimleşen popülasyon) doldurması.' },
          { id: 'D', text: 'Bitkilerin böcekleri koruması' },
          { id: 'E', text: 'Böceklerin ilacı sindirmeye başlaması' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal seçilimin en net örneğidir. Pestisit (ilaç) zayıfları temizler, dirençlilere üreme alanı açar. 5 yıl sonra herkes dirençlidir (Pestisit Direnci).'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Pestisit (Böcek zehiri) direncini veya Antibiyotik direncini ENGELLEMEK (veya yavaşlatmak) için yapılabilecek en doğru uygulama nedir?',
        options: [
          { id: 'A', text: 'Daha çok ve daha sık ilaç kullanmak' },
          { id: 'B', text: 'Aynı ilacı 50 yıl boyunca kullanmak' },
          { id: 'C', text: 'İlaç kullanımını BİLİNÇLİ (sadece gerekince) yapmak ve sürekli AYNI İLACI DEĞİL, farklı yöntemleri (rotasyon) kullanmak.' },
          { id: 'D', text: 'Dozu yarıya indirip her gün kullanmak' },
          { id: 'E', text: 'Tüm bakterileri öldürmeye çalışmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Sürekli aynı ilacı vurursanız (aynı seçilim baskısı), o ilaca dayanıklı olanlar dünyayı ele geçirir. Baskıyı değiştirmek (farklı ilaç, biyolojik mücadele) gerekir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Bakteriler arasında KÜÇÜK DNA PARÇALARININ (Plazmitlerin) transfer edilmesiyle, BİR BAKTERİDEKİ DİRENÇ GENİNİN diğerlerine HIZLA geçmesini sağlayan olaya ne ad verilir?',
        options: [
          { id: 'A', text: 'Mitoz' },
          { id: 'B', text: 'Yatay Gen Aktarımı (Konjugasyon vb.)' },
          { id: 'C', text: 'Mayoz' },
          { id: 'D', text: 'Döllenme' },
          { id: 'E', text: 'Modifikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakteriler çok kurnazdır. Biri direnç genini (şifreyi) bulunca, yanındaki arkadaşına bir köprü kurup (konjugasyon) şifreyi verebilir. Buna yatay gen aktarımı denir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: '"Yapay Seçilim" ile "Genetik Mühendisliği (GDO)" AYNI ŞEY MİDİR?',
        options: [
          { id: 'A', text: 'Evet, tamamen aynıdır.' },
          { id: 'B', text: 'Hayır; Yapay seçilim DOĞAL ÜREMEYLE var olanları eşleştirmektir. Gen mühendisliği ise LABORATUVARDA DNA\'ya doğrudan farklı canlıdan gen eklemektir.' },
          { id: 'C', text: 'Yapay seçilim laboratuvarda yapılır.' },
          { id: 'D', text: 'Genetik mühendisliğini çiftçiler yapar.' },
          { id: 'E', text: 'Evet, ikisi de doğaldır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapay seçilim (Örn: inekleri çiftleştirmek) binlerce yıldır yapılır. Genetik mühendisliği (Örn: Çileğe balık geni eklemek) moderndir, tüpte DNA ile oynanır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Bir doktorun "Grip (Virüs hastalığı) oldun, o yüzden sana ANTİBİYOTİK YAZMIYORUM" demesinin asıl BİLİMSEL sebebi nedir?',
        options: [
          { id: 'A', text: 'İlaçların pahalı olması' },
          { id: 'B', text: 'Antibiyotiklerin SADECE BAKTERİLERE etki etmesi, Virüsleri (Grip, nezle vb.) ASLA öldürememesi.' },
          { id: 'C', text: 'Gribin hiç geçmemesi' },
          { id: 'D', text: 'Doktorun virüsleri sevmesi' },
          { id: 'E', text: 'Antibiyotiğin uyku yapması' }
        ],
        correctOptionId: 'B',
        explanation: 'Antibiyotik kelimesi "Bakteri karşıtı" demektir. Virüs hastalığında (grip) antibiyotik içmek, işe yaramadığı gibi vücudunuzdaki faydalı bakterileri de öldürüp dirençli kötü bakteri (süper bakteri) üretir.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Doğal seçilimde seçimi YAPAN "ÇEVRE" (İklim, Avcılar) iken, Yapay seçilimde seçimi YAPAN "KİMDİR"?',
        options: [
          { id: 'A', text: 'Sadece bitkiler' },
          { id: 'B', text: 'Hayvanlar' },
          { id: 'C', text: 'İnsan (İnsanların ekonomik veya zevk amaçlı istekleri)' },
          { id: 'D', text: 'Bakteriler' },
          { id: 'E', text: 'Uzaylılar' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal (Naturel) çevredir. Yapay (Artificial) ise insan elidir.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Tarımda hep "Tek TİP (Klonlanmış, genetik çeşitliliği olmayan)" tohum ekmek (Monokültür) neden TEHLİKELİDİR?',
        options: [
          { id: 'A', text: 'Çok fazla ürün vereceği için' },
          { id: 'B', text: 'Traktörler bozulacağı için' },
          { id: 'C', text: 'Tarladaki tüm bitkiler tıpatıp aynı (Varyasyonsuz) olduğu için, gelen TEK BİR YENİ HASTALIK (virüs/mantar) tarladaki TÜM ÜRÜNÜ tek seferde yok edebilir.' },
          { id: 'D', text: 'Bitkiler birbirini yiyeceği için' },
          { id: 'E', text: 'Toprak çok ısınacağı için' }
        ],
        correctOptionId: 'C',
        explanation: 'Genetik çeşitlilik sigortadır. Çeşitlilik (varyasyon) yoksa, birinin zayıf olduğu hastalığa hepsi zayıftır, koca tarla bir haftada çürür.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Laboratuvar ortamında bakterilerin Petri kabında üretilirken antibiyotik içeren bölgelerde ÖLMEYİP BÜYÜYEN KOLONİLER görmemiz neyin KANITIDIR?',
        options: [
          { id: 'A', text: 'Antibiyotiğin sahte olduğunun' },
          { id: 'B', text: 'Bakterilerin hepsinin öldüğünün' },
          { id: 'C', text: 'O büyüyen bakterilerin antibiyotiğe DİRENÇ (Mutasyon) taşıdığının' },
          { id: 'D', text: 'O bakterilerin bitki olduğunun' },
          { id: 'E', text: 'Petri kabının kırıldığının' }
        ],
        correctOptionId: 'C',
        explanation: 'Zehirli ortamda büyüyebilen canlı, o zehire karşı zırh (direnç geni) takmış (evrimleşmiş) canlıdır.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'İnsanların çok süt veren inekleri SEÇEREK kendi aralarında çiftleştirmesi (Yapay Seçilim) sonucunda, inek popülasyonunun GEN HAVUZUNDA ne değişir?',
        options: [
          { id: 'A', text: 'Hiçbir şey değişmez.' },
          { id: 'B', text: 'İnekler ete dönüşür.' },
          { id: 'C', text: '"Yüksek Süt" genlerinin FREKANSI (bulunma oranı) artarken, "Düşük Süt" genleri giderek azalır.' },
          { id: 'D', text: 'İneklerin kromozom sayısı artar.' },
          { id: 'E', text: 'Süt genleri mutasyona uğrayıp zehir olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Biz yüksek süt verenleri seçip çoğaltırsak, havuzdaki o genleri çoğaltmış, düşükleri elemiş (frekansını düşürmüş) oluruz.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Doğal Seçilim ve Yapay Seçilimin ORTAK NOKTASI (Benzerliği) aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İkisinde de seçimi doğa yapar.' },
          { id: 'B', text: 'İkisi de sadece bakterilerde olur.' },
          { id: 'C', text: 'İkisi de laboratuvarda yapılır.' },
          { id: 'D', text: 'İkisinde de POPÜLASYONUN GEN FREKANSLARI değişir (Evrimleşme olur).' },
          { id: 'E', text: 'İkisinde de gen mühendisliği kullanılır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kim (Doğa veya İnsan) seçerse seçsin, mantık aynıdır: Seçilen çoğalır, elenen yok olur. Popülasyonun gen havuzu (oranı) değişir.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Basit Neden Sonuç',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Kar renkli bir ortamda beyaz tüylü tavşanların değil de SİYAH tüylü tavşanların şahinler tarafından avlanması hangi kavramın sonucudur?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Doğal Seçilim (Uygun olmayan elenir)' },
          { id: 'D', text: 'Yapay Seçilim' },
          { id: 'E', text: 'Varyasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Çevre (kar ve şahin) bir "Seçilim Baskısı" yaratır. Beyaz olanlar kamuflaj sağlar yaşar, siyah olanlar seçilir ve elenir (Ölür).'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Karanlık mağarada yaşayan bazı balık türlerinin GÖZLERİNİN OLMAMASI (körelmesi) ne tür bir biyolojik özelliktir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Adaptasyon (Karanlıkta göze enerji harcamamak bir avantajdır)' },
          { id: 'C', text: 'Yapay seçilim' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'B',
        explanation: 'Körlük normalde dezavantajdır ama zifiri karanlıkta göz işe yaramaz. Göze gidecek enerjiyi (besini) diğer duyulara harcamak mağarada bir ADAPTASYONDUR.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Yazın güneşte bronzlaşan bir insanın, kışın eski ten rengine dönmesi durumu hangisiyle açıklanır?',
        options: [
          { id: 'A', text: 'Adaptasyon' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Doğal Seçilim' },
          { id: 'D', text: 'Modifikasyon (Geçici çevre etkisi)' },
          { id: 'E', text: 'Yapay Seçilim' }
        ],
        correctOptionId: 'D',
        explanation: 'Bronzlaşmak, melanin pigmenti genlerinin güneş (çevre) etkisiyle geçici olarak fazla çalışmasıdır (Modifikasyon).'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'İnsanların süt verimi yüksek koyunları kendi arasında çiftleştirmesi sonucu oluşan yeni sürüde YÜKSEK SÜT GENLERİNİN artması olayının EVRİMSEL mekanizması nedir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Yapay seçilim' },
          { id: 'C', text: 'Doğal seçilim' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Doğal varyasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Seçici gücün DOĞA değil İNSAN olduğu eşleştirmeler ve elemelere yapay seçilim denir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Bir tarlada kullanılan böcek ilacından (Pestisit) sağ kurtulan %1\'lik böcek grubu ile ilgili ne söylenebilir?',
        options: [
          { id: 'A', text: 'Hepsi ilacı içip güçlenmiştir.' },
          { id: 'B', text: 'Zaten ilaca karşı DİRENÇ GENİ taşıyorlardı (Önceden var olan varyasyonları onları kurtardı).' },
          { id: 'C', text: 'İlacı görünce hemen DNA\'larını değiştirmişlerdir.' },
          { id: 'D', text: 'Uzaydan gelmişlerdir.' },
          { id: 'E', text: 'Modifikasyon geçirmişlerdir.' }
        ],
        correctOptionId: 'B',
        explanation: 'İlaç canlının DNA\'sını "dirençli" yapmaz. Şans eseri önceden dirençli olanlar hayatta kalır, diğerleri elenir.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Sirke sineklerinin (Drosophila) kanatlarının 16°C\'de düz, 25°C\'de kıvrık olması ve bu durumun YAVRULARA GEÇMEMESİ neye örnektir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Adaptasyon' },
          { id: 'D', text: 'Doğal Seçilim' },
          { id: 'E', text: 'Krossing-over' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcaklığa göre şekil değiştirme genlerin çalışmasının anlık değişimidir (Modifikasyon). Kalıtsal değildir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: '"Varyasyon (Çeşitlilik) sadece mutasyonla oluşur." cümlesi Eşeyli Üreyen bir canlı için NEDEN EKSİKTİR?',
        options: [
          { id: 'A', text: 'Çünkü mitoz da çeşitlilik yapar.' },
          { id: 'B', text: 'Çünkü krossing-over, homolog ayrılması ve rastgele döllenme de çeşitliliği artırır.' },
          { id: 'C', text: 'Çünkü modifikasyon kalıtsaldır.' },
          { id: 'D', text: 'Çünkü mutasyon çeşitlilik yapmaz.' },
          { id: 'E', text: 'Çünkü klonlama vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfırdan YENİ GEN sadece mutasyonla oluşur ama mevcut genleri "Karıştırarak" yeni VARYASYONLAR (Örn: Annede mavi, babada yeşil göz varken sende ela olması) mayoz ve döllenmeyle sağlanır.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Doğal seçilimin popülasyonda (gen havuzunda) NESİLLER BOYU birikerek oluşturduğu KALICI DEĞİŞİKLİKLERE ne ad verilir?',
        options: [
          { id: 'A', text: 'Evrimsel Adaptasyon (Uyum)' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Bireysel Aklimatizasyon' },
          { id: 'D', text: 'Hastalık' },
          { id: 'E', text: 'Yapay klon' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğal seçilim yıllarca çalışır ve o çevreye EN UYGUN bireyleri seçer. Bu sürecin sonunda popülasyonda oluşan kalıcı özelliğe (örn: zürafa boynu) adaptasyon denir.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'X ışınlarına (Radyasyon) maruz kalan bir hamile farenin YAVRULARI hastalıklı doğuyor. Bu durum neyi KANITLAR?',
        options: [
          { id: 'A', text: 'X ışınlarının modifikasyon yaptığını' },
          { id: 'B', text: 'Farenin güçlendiğini' },
          { id: 'C', text: 'X ışınlarının ÜREME (Gamet veya embriyo) hücrelerinde MUTASYONA sebep olduğunu ve kalıtsal olduğunu' },
          { id: 'D', text: 'Adaptasyon gerçekleştiğini' },
          { id: 'E', text: 'Yapay seçilim olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer bir dış etki yavruyu etkiliyorsa, sperm-yumurta-embriyo hattında (üreme/germ hattı) mutasyon yapmış ve genetiği bozmuş demektir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Antibiyotik içmeyi DOKTORUN SÖYLEDİĞİ GÜNDEN ÖNCE (kendimi iyi hissediyorum diyerek) bırakmak neden TEHLİKELİDİR?',
        options: [
          { id: 'A', text: 'İlaç ziyan olur' },
          { id: 'B', text: 'Geriye Kısmen Dirençli olan güçlü bakteriler kalır ve onlar tekrar çoğalarak daha zorlu bir hastalık yapar' },
          { id: 'C', text: 'Mide asidi artar' },
          { id: 'D', text: 'Bakteriler mantara dönüşür' },
          { id: 'E', text: 'Virüsler çoğalır' }
        ],
        correctOptionId: 'B',
        explanation: 'Erken bırakmak, en zayıf bakterileri öldürüp, ortalama direnci olan bakterileri hayatta bırakır. Onlar güçlenip tekrar ürerse aynı antibiyotik artık işe yaramaz.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Himalaya tavşanlarının tüyleri normalde beyazdır. Sırtındaki tüyler tıraşlanıp oraya BUZ TORBASI bağlanırsa yeni çıkan tüylerin SİYAH olduğu görülüyor. Bu olay nedir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Doğal Seçilim' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Modifikasyon (Sıcaklık etkisiyle enzim çalışmasının değişmesi)' },
          { id: 'E', text: 'Kalıtsal Adaptasyon' }
        ],
        correctOptionId: 'D',
        explanation: 'Tavşanın DNA\'sı değişmez (Yavrusu siyah sırtlı doğmaz). Sadece soğuk etkisiyle siyah renk üreten enzim GECİCİ OLARAK çalışır (Modifikasyon).'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Çölde yaşayan bitkilerin KÖKLERİNİN ÇOK DERİNE inmesi ve YAPRAKLARININ İĞNE şeklinde olması ne tür bir özelliktir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Adaptasyon (Kalıtsaldır, su kaybını önler)' },
          { id: 'C', text: 'Mutajen' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Yapay seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'Suyu bulmak (uzun kök) ve terlemeyle su kaybetmemek (iğne yaprak) genlere işlemiş bir çöl adaptasyonudur.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Fitness (Uyum başarısı) kavramına göre AŞAĞIDAKİLERDEN HANGİSİ "En Yüksek Fitness\'a (Başarıya)" sahiptir?',
        options: [
          { id: 'A', text: 'Ormandaki en güçlü ve kaslı ama hiç yavrusu olmayan aslan' },
          { id: 'B', text: 'Çok hızlı koşan ama kısır olan çita' },
          { id: 'C', text: 'En uzun yaşayan ama yalnız ölen kaplumbağa' },
          { id: 'D', text: 'Ortalama ömre sahip olup, HAYATTA KALAN 15 YAVRU veren tavşan' },
          { id: 'E', text: 'En büyük dişleri olan kurt' }
        ],
        correctOptionId: 'D',
        explanation: 'Evrimde tek para birimi YAVRU (Gen aktarımı) dur. Yavru bırakmayan kral da olsa evrimsel (biyolojik) olarak başarısızdır (Fitness = 0).'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Bir bakterinin "Pestisit (Tarım ilacı)" veya "Antibiyotik" direnci kazanması için DNA\'sında ne olması GEREKİR?',
        options: [
          { id: 'A', text: 'Mitoz geçirmesi' },
          { id: 'B', text: 'Modifikasyon geçirmesi' },
          { id: 'C', text: 'Mutasyon geçirmesi veya yatay gen transferiyle (plazmit) direnç geni ALMASI' },
          { id: 'D', text: 'Çekirdek zarı yapması' },
          { id: 'E', text: 'Mitokondri üretmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Direnç (Zırh) için genetik şifre gerekir. Ya kendisinde mutasyonla bu şifre oluşur ya da başka dirençli bakteriden o gen şifresini (plazmitini) kopyalar.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Bir tarladaki fareleri yemek üzere ortama atmacalar (kuş) geliyor. Atmacalar sadece YAVAŞ KOŞAN fareleri yakalayabiliyor. Burada "Seçilim Baskısını" oluşturan faktör nedir?',
        options: [
          { id: 'A', text: 'Farelerin hızı' },
          { id: 'B', text: 'Havanın sıcaklığı' },
          { id: 'C', text: 'Atmacalar (Avcılar)' },
          { id: 'D', text: 'Farelerin rengi' },
          { id: 'E', text: 'Farelerin yediği ot' }
        ],
        correctOptionId: 'C',
        explanation: 'Kimin ölüp kimin kalacağını belirleyen dış tehdit veya engel "Seçilim Baskısı" dır. Burada baskı avcı (atmaca) dır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Kavram Karşılaştırmaları (Easy)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Evrimsel süreçte "Mutasyon" ve "Doğal Seçilim"in görevleri eşleştirilirse en doğru ifade hangisidir?',
        options: [
          { id: 'A', text: 'Mutasyon seçer, Doğal seçilim üretir.' },
          { id: 'B', text: 'Mutasyon RASTGELE VARYASYON ÜRETİR (Malzemeyi verir), Doğal Seçilim ise işe yarayanları SEÇER (Filtreler).' },
          { id: 'C', text: 'İkisi de rastgeledir.' },
          { id: 'D', text: 'İkisi de bilinçlidir.' },
          { id: 'E', text: 'Mutasyon çevreye uyum sağlar, Doğal seçilim DNA bozar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mutasyon kör bir terzidir, rastgele kıyafetler (özellikler/varyasyon) diker. Doğal seçilim ise defiledeki jüridir; ortama (modaya) uymayanı eler.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Bir bitki türünün dağda yetişenleri KISA BOYLUDUR (Aklimatizasyon). Tohumları alıp ovaya ektiğinizde UZUN BOYLUDUR (Modifikasyon). Ancak farklı bir bitki türü Çölde hep iğne yapraklıdır, ormana ektiğinizde de iğne yapraklıdır (Adaptasyon). Buna göre Modifikasyon ve Adaptasyonu ayıran EN KESİN FARK nedir?',
        options: [
          { id: 'A', text: 'Modifikasyon faydalı, Adaptasyon zararlıdır.' },
          { id: 'B', text: 'Modifikasyon GENETİK DEĞİLDİR (çevre değişince düzelir), Adaptasyon GENETİKTİR (çevre değişse de yavru aynı doğar).' },
          { id: 'C', text: 'Adaptasyon tek bireyde, Modifikasyon tüm popülasyonda olur.' },
          { id: 'D', text: 'Modifikasyon hayvanlarda, Adaptasyon bitkilerde olur.' },
          { id: 'E', text: 'Modifikasyon mitozla, Adaptasyon mayozla aktarılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalıtsallık en temel farktır. Geninde (DNA diziliminde) ne yazıyorsa o Adaptasyondur. Sadece çevrenin izin verdiği kadar büyümek Modifikasyondur.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Bir tarlaya böcek ilacı sıkılıyor. 1. Aşama: Böceklerin %90\'ı ölüyor. 2. Aşama: Kalan %10 çoğalıyor. 3. Aşama: Yeni nesil artık ilaçtan hiç etkilenmiyor. Bu süreçteki "Varyasyon" hangi aşamada mevcuttur?',
        options: [
          { id: 'A', text: 'İlaç sıkıldıktan (1. Aşama) sonra oluşmuştur.' },
          { id: 'B', text: 'Sadece 3. Aşamada oluşmuştur.' },
          { id: 'C', text: 'İlaç SIKILMADAN ÖNCE DE EN BAŞINDAN BERİ (Başlangıç popülasyonunda) zaten vardır (Kimi dirençli, kimi dirençsizdi).' },
          { id: 'D', text: 'Böcekler çoğalırken (2. Aşama) oluşmuştur.' },
          { id: 'E', text: 'Hiçbir aşamada varyasyon yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Varyasyon (çeşitlilik) daima ilaçtan / olaydan ÖNCE vardır. İlaç sadece var olan bu farklılığı (dirençli olanları) seçen bir filtredir.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Grip virüsüne karşı her yıl "YENİ AŞI" üretilmesinin evrimsel sebebi nedir?',
        options: [
          { id: 'A', text: 'Aşıların son kullanma tarihinin kısa olması' },
          { id: 'B', text: 'Virüslerin modifikasyon geçirmesi' },
          { id: 'C', text: 'Virüslerin HIZLA MUTASYONA uğrayarak sürekli "Yeni Varyantlar (Farklı dış görünüşlü tipler)" üretmesi ve eski aşının bunları tanımaması.' },
          { id: 'D', text: 'Virüslerin yapay seçilim yapması' },
          { id: 'E', text: 'Aşıların bakterileri öldürmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Virüsler (Özellikle RNA virüsleri) çok hızlı mutasyon geçirir. Bu yüzden geçen yılki kilit (aşı) bu yılki yeni kapıyı (mutant virüsü) açamaz.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Aşağıda Doğal ve Yapay Seçilim için yapılan eşleştirmelerden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Doğal Seçilim - Doğadaki rekabet, avcı, iklim belirler' },
          { id: 'B', text: 'Yapay Seçilim - İnsan ihtiyaçları (verim, güzellik) belirler' },
          { id: 'C', text: 'Doğal Seçilim - Sonucunda Popülasyonun gen frekansı değişir' },
          { id: 'D', text: 'Yapay Seçilim - Sonucunda Popülasyonun gen frekansı değişir' },
          { id: 'E', text: 'Yapay Seçilim - Canlı laboratuvarda kimyasallarla GDO yapılır' }
        ],
        correctOptionId: 'E',
        explanation: 'Yapay seçilim normal ÇİFTLEŞTİRME işlemidir (Örn: atları melezlemek). Laboratuvarda tüpte DNA değiştirmek Genetik Mühendisliğidir, yapay seçilim DEĞİL.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: '"Sürekli kullanılan organlar gelişir ve yavrulara geçer (Lamarck\'ın Zürafa boynu örneği)." Bu görüşün BİYOLOJİK OLARAK ÇÜRÜTÜLMESİNİN TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Zürafaların boyu uzun değildir.' },
          { id: 'B', text: 'Sonradan kazanılan fiziksel değişimler (Modifikasyonlar), sperm veya yumurtanın (Üreme hücresi) DNA şifresini DEĞİŞTİRMEDİĞİ için KALITSAL DEĞİLDİR.' },
          { id: 'C', text: 'Doğal seçilim diye bir şey yoktur.' },
          { id: 'D', text: 'Sürekli kullanılan organlar küçülür.' },
          { id: 'E', text: 'Ağaçlar o kadar uzun değildir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Boyun uzatmak (kas çekmesi) modifikasyondur. Modifikasyonlar DNA\'ya yazılmaz. Bu yüzden yavrulara (kalıtımla) geçemez.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Sporcu (Halterci) bir babanın çocuğunun kaslı doğmaması neyin kanıtıdır?',
        options: [
          { id: 'A', text: 'Babanın yeterince spor yapmadığının' },
          { id: 'B', text: 'Spor yapmanın mutasyon olduğunun' },
          { id: 'C', text: 'Somatik (Vücut) hücrelerindeki değişimlerin kalıtsal OLMADIĞININ' },
          { id: 'D', text: 'Çocuğun genlerinin sadece anneden geldiğinin' },
          { id: 'E', text: 'Adaptasyonların geçersiz olduğunun' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaslar somatik (vücut) hücresidir. Vücutta olan değişiklik gametlere (spermlere) işlemez, yavruya aktarılmaz.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Bir hastanede uzun süre aynı antibiyotik kullanılırsa, o hastanedeki bakteriler DİRENÇLİ HALE GELİR (Hastane enfeksiyonu). Bu olayda "Seçilim Baskısını (Eleği)" kim oluşturur?',
        options: [
          { id: 'A', text: 'Doktorlar' },
          { id: 'B', text: 'Hastalar' },
          { id: 'C', text: 'Bakteriler' },
          { id: 'D', text: 'Sürekli kullanılan ANTİBİYOTİK' },
          { id: 'E', text: 'Havanın sıcaklığı' }
        ],
        correctOptionId: 'D',
        explanation: 'Kim zayıfları öldürüp sadece güçlüleri hayatta bırakıyorsa, o baskıdır (seçici faktördür). Burada seçici faktör ilaçtır (antibiyotik).'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Somatik (Vücut) Mutasyonları kimin için tehlikelidir / kimi etkiler?',
        options: [
          { id: 'A', text: 'Sadece kişinin kendisini (Örn: Deri kanseri olur, çocuğa geçmez)' },
          { id: 'B', text: 'Tüm gelecek nesillerini' },
          { id: 'C', text: 'Sadece erkek çocuklarını' },
          { id: 'D', text: 'Sadece kız çocuklarını' },
          { id: 'E', text: 'Hiç kimseyi' }
        ],
        correctOptionId: 'A',
        explanation: 'Güneşte kaldınız, kolunuzdaki deri hücresi mutasyon geçirdi kanser oldu. Bu somatiktir, sadece sizin kolunuzu ilgilendirir. Çocuğunuza kanser olarak geçmez.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: '"Popülasyonun gen frekansının (oranlarının) değişmesi" ifadesi aşağıdaki kavramlardan hangisinin EN NET ve MODERN BİLİMSEL TANIMIDIR?',
        options: [
          { id: 'A', text: 'Mitoz bölünme' },
          { id: 'B', text: 'Biyolojik Evrim (Mikroevrim)' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Döllenme' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrim, bir popülasyonun havuzundaki gen (alel) oranlarının (Siyah güvelerin artıp, beyazların azalması gibi) zamanla değişmesidir.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Adaptasyonların CANLI TÜRÜNE olan en büyük katkısı nedir?',
        options: [
          { id: 'A', text: 'Güzel görünmesini sağlamak' },
          { id: 'B', text: 'Diğer türleri yok etmek' },
          { id: 'C', text: 'Yaşadığı o spesifik ÇEVREDE (habitat) yaşama ve üreme (Fitness) ŞANSINI ARTIRMAK' },
          { id: 'D', text: 'Mutasyonları engellemek' },
          { id: 'E', text: 'Kromozom sayısını artırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Bukalemun renk değiştirir ki avlanmasın, yaşasın ve yavru yapsın. Kaktüs su tutar ki kurumadan yaşasın ve tohum versin. Ana amaç Fitness (Yaşama ve Üreme) artışıdır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Doğal Seçilim HANGİ CANLILARI (Özellikleri) ELEYEREK popülasyondan çıkarır?',
        options: [
          { id: 'A', text: 'Sadece yaşlıları' },
          { id: 'B', text: 'Sadece yavaş olanları' },
          { id: 'C', text: 'Çevre şartlarına UYUM SAĞLAYAMAYAN (Zayıf veya dezavantajlı varyasyona sahip) olanları' },
          { id: 'D', text: 'Herkesi' },
          { id: 'E', text: 'Sadece yırtıcıları' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğa zayıfı sevmez (Zayıf = Ortama uymayan). Beyaz karda beyaz tavşan "uygun" iken siyah tavşan avlanır, elenir.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: '"Aklimatizasyon" (örneğin yüksek dağda geçici kırmızı kan hücresi artışı) ile "Mutasyon" karşılaştırıldığında sonuç nedir?',
        options: [
          { id: 'A', text: 'İkisi de kalıtsaldır.' },
          { id: 'B', text: 'Aklimatizasyon geri dönüşlü ve genetiği DEĞİŞTİRMEYEN çevresel yanıttır; Mutasyon ise DNA dizilimini DEĞİŞTİREN kalıcı bir hasardır/değişimdir.' },
          { id: 'C', text: 'Mutasyon geri dönüşlü, aklimatizasyon kalıcıdır.' },
          { id: 'D', text: 'İkisi de DNA\'yı bozar.' },
          { id: 'E', text: 'İkisi de yavruya geçer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dağdan inerseniz alyuvar sayınız eski normale düşer (Geri dönüşlü/Aklimatizasyon). Ama mutasyon olursanız DNA şifreniz değişir, hücre öyle kalır.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Varyasyonun (Genetik çeşitliliğin) HİÇ OLMADIĞI bir popülasyonda (herkes aynı DNA\'ya sahipse), Doğal Seçilim NASIL ÇALIŞIR?',
        options: [
          { id: 'A', text: 'Çok hızlı çalışır ve yeni türler oluşur.' },
          { id: 'B', text: 'Doğal Seçilim ÇALIŞAMAZ, çevre değiştiğinde hepsi yaşar ya da toptan YOK OLURLAR (Çünkü aralarından seçilecek farklı/dirençli bir birey yoktur).' },
          { id: 'C', text: 'Güçlüler zayıfları yer.' },
          { id: 'D', text: 'Mutasyon yaratır.' },
          { id: 'E', text: 'Bakterilere dönüşürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Seçim (Seçilim) yapabilmek için SEÇENEK (Varyasyon) lazımdır. Seçenek yoksa (Örn: klon tarla), bir hastalık geldiğinde dirençli seçeneği olmadığı için hepsi ölür.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Bir tarlada Yabani Otları (Zararlı bitki) öldürmek için Herbisit (Ot ilacı) kullanılıyor. 3 yıl sonra ilaç işe yaramamaya başlıyor. Bu "Herbisit Direnci" hangi olayın sonucudur?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Bitkilerin hayvanlaşması' },
          { id: 'C', text: 'Doğal Seçilim (İlaca dayanıklı olanların hayatta kalıp üreyerek popülasyonu kaplaması)' },
          { id: 'D', text: 'İnsanların yapay seçilimi' },
          { id: 'E', text: 'Toprağın bozulması' }
        ],
        correctOptionId: 'C',
        explanation: 'Pestisit (Böcek), Herbisit (Ot) veya Antibiyotik (Bakteri)... Mekanizma aynıdır: Zayıfları (dirençsizleri) öldür, dirençlilere üreme şansı (Doğal seçilim) ver.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Bütüncül Analiz ve Senaryolar (Easy)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Senaryo: Bir adada tohumları sert olan bitkiler yetişmektedir. Adaya gelen bir kuş türünün içinde ince gagalılar ve kalın gagalılar (Varyasyon) vardır. İnce gagalılar sert tohumları kıramayıp açlıktan ölürken, kalın gagalılar beslenip çoğalır. Bu sürecin sonunda adada KALIN GAGALI KUŞLARIN hakim olması sırasıyla hangi olayları kapsar?',
        options: [
          { id: 'A', text: 'Modifikasyon -> Mutasyon' },
          { id: 'B', text: 'Kalıtsal Varyasyon (Gaga farkı) -> Seçilim Baskısı (Sert tohum) -> Doğal Seçilim (Eleme/Yaşatma) -> Evrimsel Adaptasyon (Kalın gaga)' },
          { id: 'C', text: 'Yapay seçilim -> Doğal seçilim' },
          { id: 'D', text: 'Mutasyon -> Modifikasyon' },
          { id: 'E', text: 'Döllenme -> Aklimatizasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Farklılık (Varyasyon) var. Zorluk (Baskı) var. İyi olan yaşıyor (Seçilim). Sonunda o özellik popülasyona yayılıyor (Adaptasyon).'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Meyve sineklerini laboratuvarda iki gruba ayırıp; birini sadece nişastayla, diğerini sadece maltozla 50 NESİL boyunca besliyorlar. 50 nesil sonra bu iki grup karşılaştığında birbiriyle ÇİFTLEŞMİYOR (Üremiyorlar). Bu deney neyin kanıtı olabilir?',
        options: [
          { id: 'A', text: 'Modifikasyonun kalıcı olduğunun' },
          { id: 'B', text: 'Yapay seçilimin yanlış olduğunun' },
          { id: 'C', text: 'Farklı çevre baskılarının (Farklı diyet/besin) Doğal Seçilimle popülasyonları izole edip YENİ TÜRLERİN OLUŞUMUNA (Türleşmeye) sebep olabileceğinin' },
          { id: 'D', text: 'Nişastanın zehirli olduğunun' },
          { id: 'E', text: 'Sineklerin öldüğünün' }
        ],
        correctOptionId: 'C',
        explanation: 'Farklı çevre = Farklı seçilim baskısı = Farklı gen birikimi. Yeterince uzun süre ayrı kalıp değişirlerse, artık çiftleşemezler (İki farklı türe dönüşürler).'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Bir öğrenci "Ayılar karda beyaz olmaları gerektiğini düşündükleri için beyaz tüy üretmişlerdir" derse, bu görüş neden BİLİM DIŞIDIR?',
        options: [
          { id: 'A', text: 'Ayılar düşünemediği için' },
          { id: 'B', text: 'Evrim (Doğal seçilim) bir AMAÇ veya İSTEK DOĞRULTUSUNDA gerçekleşmez. Rastgele varyasyonlar oluşur, UYGUN OLAN (beyaz olan) şans eseri seçilip hayatta kalır.' },
          { id: 'C', text: 'Ayıların aslen siyah olması gerektiği için' },
          { id: 'D', text: 'Beyaz renk zararlı olduğu için' },
          { id: 'E', text: 'Mutasyonlar hep zarar verdiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlılar "şuraya uyum sağlayayım" diye özellik üretmez. Özellikler şans eseri mutasyonla doğar. Şartlara UYAN yaşar (Örn: beyaz olan kamuflajla yaşadı, genini aktardı).'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Tarımda sadece BİR KAÇ ÇEŞİT "yüksek verimli" tohum kullanılarak yerel (doğal) tohumların terk edilmesi, ileride NASIL BİR SORUN yaratabilir?',
        options: [
          { id: 'A', text: 'Çok fazla para kazanılmasına' },
          { id: 'B', text: 'Tarımsal GEN HAVUZUNUN DARALMASINA (Varyasyonun azalmasına) ve gelecekte yeni iklim/hastalıklara karşı dirençli genlerin yok olmasına' },
          { id: 'C', text: 'Bitkilerin daha da güçlenmesine' },
          { id: 'D', text: 'Böceklerin yok olmasına' },
          { id: 'E', text: 'Modifikasyonların artmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Eski, eğri büğrü ama kuraklığa dayanıklı domatesi (yerel tohum) yok edersek, yarın kuraklık olduğunda ekecek (kullanılacak) "Direnç Geni" bulamayız (Varyasyon kaybı).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'İnsanların çok büyük göğüslü (eti için) tavuklar üretmesi (Yapay Seçilim) sonucunda, bu tavuklar ayakları kırılarak yürüyemez hale geliyor. Bu durum yapay seçilim hakkında ne gösterir?',
        options: [
          { id: 'A', text: 'Yapay seçilimin canlıyı her zaman daha kusursuz yaptığını' },
          { id: 'B', text: 'Doğal seçilimle aynı olduğunu' },
          { id: 'C', text: 'İnsanın sadece KENDİ ÇIKARI İÇİN özellik seçtiğini, bunun canlının kendi biyolojik hayatta kalması (Fitness) için BAZEN ÇOK ZARARLI olabildiğini' },
          { id: 'D', text: 'Tavukların evrimleşmediğini' },
          { id: 'E', text: 'Mitoz bölünmenin durduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğa, canlı hayatta kalsın (sağlıklı) diye seçer (Doğal). İnsan ise çok et/süt versin diye seçer (Yapay). Canlı yürüyemese bile insan için eti değerlidir.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Bakterilerin, virüslerin (Fajların) DNA\'sını kesip parçalamak için ürettikleri "Restriksiyon Enzimleri" aslen ne amaçla evrimleşmiştir?',
        options: [
          { id: 'A', text: 'İnsanlara ilaç olmak için' },
          { id: 'B', text: 'Bakterilerin kendi aralarında savaşması için' },
          { id: 'C', text: 'Bakterinin KENDİNİ VİRÜSLERE (Fajlara) KARŞI KORUMASI (Bağışıklık / Doğal Seçilim avantajı) için' },
          { id: 'D', text: 'Besinleri sindirmek için' },
          { id: 'E', text: 'Antibiyotik yapmak için' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri de bir canlıdır ve virüsler (fajlar) onu öldürür. Bakteri virüsün DNA\'sını makas gibi kesen enzim (adaptasyon) üreterek hayatta kalır.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Hangi durumda bir "Nötr (Etkisiz) Mutasyon", aniden "Yararlı (Avantajlı)" bir mutasyona (Adaptasyona) dönüşebilir?',
        options: [
          { id: 'A', text: 'Asla dönüşemez.' },
          { id: 'B', text: 'Sadece laboratuvarda dönüşür.' },
          { id: 'C', text: 'ÇEVRE ŞARTLARI DEĞİŞTİĞİNDE (Örn: Çevre kirlenip karardığında siyah olma mutasyonu aniden kamuflaj avantajına dönüşür)' },
          { id: 'D', text: 'Hücre mitoz geçirince.' },
          { id: 'E', text: 'Canlı uyuyunca.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir genin "iyi veya kötü" olması ÇEVREYE BAĞLIDIR. Beyaz karda beyaz tüylü olmak iyidir, siyah karda kötü. Çevre değişirse avantaj da değişir.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Bir grup doktor, "Aynı antibiyotiği (İlaç X) tüm yıl boyunca kullanmak yerine, her ay farklı bir antibiyotik (Rotasyon) kullanmalıyız" diyor. Doktorların bu tavsiyesinin EVRİMSEL / BİYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'İlaç firmalarını zengin etmek' },
          { id: 'B', text: 'Bakterilerin "Sürekli Aynı Seçilim Baskısına" maruz kalarak o ilaca karşı KESİN DİRENÇ (Süper bakteri) geliştirmesini (Doğal Seçilimi) engellemek/geciktirmek' },
          { id: 'C', text: 'Hastaların midesini korumak' },
          { id: 'D', text: 'Farklı hastalıkları tedavi etmek' },
          { id: 'E', text: 'Virüsleri de öldürmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli İlaç X kullanırsanız, sadece X\'e dirençliler kalır. Sürekli baskıyı değiştirirseniz (Y ilacı, Z ilacı), X\'e direnç kazananları da öldürüp evrimi kırmış olursunuz.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Yukarı Çıkan (Yüksek İrtifa) İnsanda: 1. Alyuvar sayısı 2 haftada artar (Aklimatizasyon). 2. Yıllarca orada yaşayan Tibetlilerde ise Genetik olarak hemoglobin oksijen bağlama gücü yüksektir (Adaptasyon). Buna göre ikisi arasındaki fark nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynıdır.' },
          { id: 'B', text: 'Alyuvar artışı kişinin yaşamı içinde GEÇİCİ, Tibetlilerin özelliği ise DOĞUŞTAN ve KALITSAL (nesiller boyu evrim) bir genetik farktır.' },
          { id: 'C', text: 'Alyuvar artışı mutasyondur.' },
          { id: 'D', text: 'Tibetlilerin özelliği modifikasyondur.' },
          { id: 'E', text: 'İkisi de yapay seçilimdir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Siz dağa çıkıp alyuvar sayınızı artırsanız da (bireysel çevre yanıtı), doğacak çocuğunuz düz ovadaki bebekle aynı doğar. Ama Tibetli bebek doğuştan farklı hemoglobinle doğar (evrimsel adaptasyon).'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Mutasyonların büyük çoğunluğunun ZARARLI (öldürücü veya bozucu) olmasının temel istatistiksel / biyolojik sebebi nedir?',
        options: [
          { id: 'A', text: 'Radyasyonun hep kötü niyetli olması' },
          { id: 'B', text: 'Milyarlarca yıllık evrimle mükemmelleşmiş, tıkır tıkır çalışan karmaşık bir sisteme (DNA/Makine) dışarıdan "RASTGELE" bir çomak sokulmasının (değişikliğin), sistemi iyileştirmekten çok BOZMA İHTİMALİNİN yüksek olması' },
          { id: 'C', text: 'Çevrenin hep kötü olması' },
          { id: 'D', text: 'Hücrenin mutasyonu reddetmesi' },
          { id: 'E', text: 'Canlıların çok zayıf olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Çalışan bir saatin içine rastgele bir çark (mutasyon) atarsanız saatin daha iyi çalışma ihtimali %1, bozulma ihtimali %99\'dur.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Vücudumuzda güneşe çıkınca artan "Melanin (Bronzlaşma)" pigmentinin BİYOLOJİK (Evrimsel) GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Güzel görünmek' },
          { id: 'B', text: 'Isınmayı sağlamak' },
          { id: 'C', text: 'Deri altındaki DNA\'yı zararlı UV (Morötesi) ışınlarından bir şemsiye gibi KORUYARAK mutasyonu (kanseri) engellemek (Savunma mekanizması/Modifikasyon)' },
          { id: 'D', text: 'D vitamini üretimini durdurmak' },
          { id: 'E', text: 'Terlemeyi artırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Bronzlaşmak estetik değil, bir savunmadır. Güneş DNA\'yı bozmasın (mutasyon) diye hücre çekirdeklerin üstüne siyah bir güneşlik (melanin) çeker.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: '"Genotip" ile "Fenotip" kelimelerinin basit benzetmesi nasıl yapılabilir?',
        options: [
          { id: 'A', text: 'Genotip yemek, Fenotip içmektir' },
          { id: 'B', text: 'Genotip "Yemek Tarifi (DNA Şifresi)", Fenotip ise o tariften mutfakta (Çevrenin de etkisiyle) çıkmış "Gerçek Yemeğin Kendisi (Dış görünüş)" dir.' },
          { id: 'C', text: 'İkisi de dış görünüştür' },
          { id: 'D', text: 'Genotip çevre, Fenotip kalıtımdır' },
          { id: 'E', text: 'İkisi de değişmez' }
        ],
        correctOptionId: 'B',
        explanation: 'Tarifte (Gen) "Tuz at" yazabilir, ama aşçı (çevre/beslenme) eksik tuz atarsa yemek (Fenotip) tatsız olur. Fenotip, gen ile çevrenin ortak ürünüdür.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Böceklerin bazılarının YAPRAK şeklinde olması (Kamuflaj), Evrimsel Biyoloji açısından ne ifade eder?',
        options: [
          { id: 'A', text: 'Böceğin bitki geni taşıdığını' },
          { id: 'B', text: 'Bitkilerle çiftleştiğini' },
          { id: 'C', text: 'Avcılardan saklanabilen "Yaprağa en çok benzeyen" varyantların YÜZ BİNLERCE YIL BOYUNCA seçilip (Doğal Seçilim) bu kusursuz Kamuflaj ADAPTASYONUNA ulaştığını' },
          { id: 'D', text: 'Böceğin bilerek yaprağa dönüştüğünü' },
          { id: 'E', text: 'Modifikasyon olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Kuşlar hep yaprağa az benzeyeni (fark edileni) yemiştir. En çok benzeyenler hayatta kala kala (seçilim), nesiller sonra böcek tıpatıp yaprak görünümü almıştır.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Doğal Seçilim (Evrim) DAİMA DAHA GELİŞMİŞ ve KARMAŞIK CANLILAR YARATIR kuralı doğru mudur?',
        options: [
          { id: 'A', text: 'Evet, insan evrimin son ve en mükemmel noktasıdır.' },
          { id: 'B', text: 'Evet, bakteriler de yakında çok hücreli olacaktır.' },
          { id: 'C', text: 'Hayır, evrimin bir "ilerleme veya karmaşıklaşma" zorunluluğu yoktur. Ortama "Yeterince uyumlu" olmak yeterlidir (Örn: Bakteriler 3 milyar yıldır basittir ama çok başarılıdır).' },
          { id: 'D', text: 'Evet, karmaşık olmayanlar elenir.' },
          { id: 'E', text: 'Sadece bitkilerde doğrudur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrim bir merdiven değil, ağaçtır. Amacımız "en karmaşık" olmak değil, "çevreye uyumlu yaşayıp üremek"tir (Fitness). Bakteri, insandan daha çok çoğalır, evrimsel olarak son derece başarılıdır.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Antibiyotik direnci (Bakteri evrimi) GÖZLEMLEYEBİLDİĞİMİZ KISA BİR SÜREDE gerçekleşirken, Zürafa boynunun uzaması neden YÜZ BİNLERCE YIL sürmüştür?',
        options: [
          { id: 'A', text: 'Bakterilerin sihirli olması' },
          { id: 'B', text: 'Zürafaların boyun kemiklerinin kırılması' },
          { id: 'C', text: 'ÜREME HIZI (Bakteri 20 dakikada bir yavru verirken, zürafa 15 yılda yavru verir. Nesil süresi kısaldıkça EVRİMSEL SEÇİLİM VE DEĞİŞİM GÖZLE GÖRÜLÜR HIZDA gerçkleşir).' },
          { id: 'D', text: 'İnsanların bakterileri daha çok sevmesi' },
          { id: 'E', text: 'Boyun uzamasının imkansız olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrim nesilden nesile (gen havuzu değişimiyle) olur. 20 dakikada yeni nesil veren bakteride evrim (direnç kazanımı) 1 ayda gözlemlenebilirken, insanda/zürafada milyon yıl alır.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Bütüncül Analiz ve Senaryolar 2 (Easy)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Eşeyli üreyen bir popülasyonda yeni bir mutasyon meydana geliyor. Bu mutasyonun BİYOLOJİK BİR ÖNEME (Evrimsel sonuca) sahip olması için İLK ŞART nedir?',
        options: [
          { id: 'A', text: 'Canlıyı hemen devleştirmesi' },
          { id: 'B', text: 'Sadece somatik hücrelerde olması' },
          { id: 'C', text: 'Üreme hücrelerinde olup YENİ NESLE AKTARILMASI (Kalıtsal olması)' },
          { id: 'D', text: 'Sadece bitkilerde olması' },
          { id: 'E', text: 'Bütün organları etkilemesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Mutasyon bireyde kalırsa ve çocuklara geçmezse evrimsel bir anlam taşımaz. Evrim nesilden nesile olur, bu yüzden mutasyonun kalıtsal (üreme hücresinde) olması şarttır.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Doğal Seçilim, popülasyondaki "Hangi bireylerin" genlerini bir sonraki nesle daha ÇOK aktarmasına sebep olur?',
        options: [
          { id: 'A', text: 'Sadece erkeklerin' },
          { id: 'B', text: 'Çevreye en UYUMLU (Adaptif/Avantajlı) fenotipe sahip olan bireylerin (En yüksek Fitness)' },
          { id: 'C', text: 'En çok mutasyon geçirenlerin' },
          { id: 'D', text: 'Sadece iri olanların' },
          { id: 'E', text: 'Sadece bitkilerin' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal seçilim, ortam şartlarına uyanları (avantajlıları) kayırır. Onlar hayatta kalır, ürer ve genlerini daha çok aktarır (Yüksek Fitness).'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Farklı bir iklime (Örn: sıcak bölgeden soğuk bölgeye) göç eden bir hayvan türü, yeni ortama uyum sağlayamazsa ne olur?',
        options: [
          { id: 'A', text: 'Hemen kalın tüyler çıkarır.' },
          { id: 'B', text: 'Kış uykusuna yatıp hiç uyanmaz.' },
          { id: 'C', text: 'Bitkiye dönüşür.' },
          { id: 'D', text: 'Varyasyon yoksa veya mevcut varyasyonlar soğuğa dayanıksızsa, Doğal Seçilimle ELENİR (Yok olur).' },
          { id: 'E', text: 'DNA\'sını bilerek değiştirir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Canlılar "Hadi tüy çıkaralım" diyemez. Tüy geni varyasyonu zaten varsa kurtulur. Yoksa donarak ölür (Seçilimle elenme).'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Antibiyotik kullanımının gereksiz yere ve sık yapılması, hastanelerde "Süper Bakterilerin (Çok dirençli)" yayılmasına neden olur. Bu durum İNSAN ELİYLE yaratılmış olsa da, mekanizma olarak nedir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Yapay Seçilim (İnsan bilinçli olarak güçlü bakteri üretmek İSTEMEDİĞİ için)' },
          { id: 'C', text: 'Doğal Seçilimin hızlandırılmış halidir (İlaç bir çevre baskısıdır ve dirençlileri seçer)' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsan "Hadi süper bakteri üreteyim" demez (Yani amaçlı seçilim yapmaz). İnsan sadece yanlışlıkla ÇEVREYİ (zehirli ortamı) yaratır, Doğal Seçilim işler.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir bitkinin YAPRAĞINDA gerçekleşen ve Yavru Döllere (Tohumlara) GEÇMEYEN bir Modifikasyon örneğidir?',
        options: [
          { id: 'A', text: 'Kaktüsün iğne yapraklı olması' },
          { id: 'B', text: 'Çam ağacının iğne yapraklı olması' },
          { id: 'C', text: 'Gölgede kalan yaprakların güneştekilere göre daha geniş yüzeyli ve ince olması' },
          { id: 'D', text: 'Su zambağının geniş yapraklı olması' },
          { id: 'E', text: 'Böcekçil bitkinin kapan yaprağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaktüs, Çam ve Nilüfer (zambak) genetik olarak öyle doğar (Adaptasyon). Ama aynı ağacın gölgedeki yaprağının büyük açması, ışık azlığına verilen geçici hücresel bir tepkidir (Modifikasyon).'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Yapay Seçilim (Örn: Köpek ırkları) ile Doğal Seçilim arasındaki TEMEL FARK, seçici GÜCÜN kim olduğudur. Peki İKİSİNİN DE ORTAK AMACI (veya sonucu) nedir?',
        options: [
          { id: 'A', text: 'Bakterileri öldürmek' },
          { id: 'B', text: 'Belirli GENLERİN (Alellerin) popülasyondaki sıklığını (frekansını) DEĞİŞTİRMEK' },
          { id: 'C', text: 'Herkesi eşit yapmak' },
          { id: 'D', text: 'Mutasyonları tamamen silmek' },
          { id: 'E', text: 'Varyasyonu sıfıra indirmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğa karda beyazı seçer (beyaz gen artar), insan güzel koyunu seçer (güzel koyun geni artar). İkisinin de sonucu POPÜLASYONUN GENETİĞİNİN DEĞİŞMESİ (Evrimleşme) dir.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Eğer bir türün yaşadığı ortam HİÇ DEĞİŞMİYORSA (Örn: Okyanus dipleri, 300 milyon yıldır aynı), bu türün çok fazla evrimleşmesi (değişmesi) BEKLENİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, evrim her gün olmak zorundadır.' },
          { id: 'B', text: 'Hayır, çevre (seçilim baskısı) değişmiyorsa, mevcut uyumlu özellikler korunur (Dengeleyici Seçilim) ve tür MİLYONLARCA YIL NEREDEYSE AYNI KALABİLİR (Yaşayan fosiller).' },
          { id: 'C', text: 'Evet, mutasyonlar canlıyı şekilden şekle sokar.' },
          { id: 'D', text: 'Sadece küçülürler.' },
          { id: 'E', text: 'Sadece büyürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'At nalı yengeci 450 milyon yıldır aynıdır. Çünkü yaşadığı yer değişmemiştir ve canlının mevcut özellikleri hala o ortam için en iyisidir ("Çalışıyorsa dokunma" kuralı).'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Bir bakteriye karşı "Yeni nesil süper antibiyotik" icat ediliyor. Bakterilerin %99.9\'u ölüyor. Hayatta kalan %0.1\'lik kısım (Dirençli varyantlar) neden YİNE DE ÇOK TEHLİKELİDİR?',
        options: [
          { id: 'A', text: 'Bakteriler üreyemediği için' },
          { id: 'B', text: 'Virüs oldukları için' },
          { id: 'C', text: 'Bakteriler EŞEYSİZ ve ÇOK HIZLI (20 dk) üredikleri için, kalan %0.1\'lik grup birkaç günde milyarlarca DİRENÇLİ KOPYASINI oluşturup yeni ve çaresiz bir salgın başlatabilir.' },
          { id: 'D', text: 'Bakterilerin zarı kalın olduğu için' },
          { id: 'E', text: 'Hemen ölecekleri için' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri geometrik artar (1, 2, 4, 8...). Kurtulan 10 bakteri yarın 10 milyon olabilir ve hepsi artık sizin o "süper ilacınıza" bağışıklıdır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Evrimsel Biyolojide "Alel Frekansı" ne demektir?',
        options: [
          { id: 'A', text: 'Bakterilerin kalple ritmi' },
          { id: 'B', text: 'Radyasyonun frekansı' },
          { id: 'C', text: 'Bir popülasyonun gen havuzunda, BELİRLİ BİR GEN ÇEŞİDİNİN (Örn: Siyah göz geni) yüzde olarak NE KADAR BULUNDUĞUDUR.' },
          { id: 'D', text: 'Mitoz bölünmenin hızı' },
          { id: 'E', text: 'Hücre zarının frekansı' }
        ],
        correctOptionId: 'C',
        explanation: '100 tavşanın 20\'si siyah gense, siyah alel frekansı %20\'dir. Doğal seçilim bunu mesela %80\'e çıkarırsa, tür EVRİMLEŞMİŞ olur.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: '"Mutasyon" ile "Varyasyon" kelimeleri arasındaki sebep-sonuç ilişkisi nasıldır?',
        options: [
          { id: 'A', text: 'Varyasyon sebep, mutasyon sonuçtur.' },
          { id: 'B', text: 'Mutasyon SEBEPTİR (Yeni özellikleri/alelleri var eder), Varyasyon SONUÇTUR (Popülasyonda oluşan çeşitliliktir).' },
          { id: 'C', text: 'İkisi birbiriyle alakasızdır.' },
          { id: 'D', text: 'İkisi de sonuçtur.' },
          { id: 'E', text: 'İkisi de sadece bakterilerde olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mutasyon fırında keki pişirmektir, Varyasyon ise vitrindeki kek çeşitliliğidir. Mutasyon (ve krossing-over) varyasyonu DOĞURAN güçlerdir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Çölde yaşayan Develerin hörgüçlerinde YAĞ depolaması (Su ihtiyacını yağın solunumuyla karşılar), kirpiklerinin çok uzun olması (Kuma karşı) ne tür özelliklerdir?',
        options: [
          { id: 'A', text: 'Aklimatizasyon' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Kalıtsal Adaptasyon' },
          { id: 'D', text: 'Yapay seçilim' },
          { id: 'E', text: 'Geçici mutasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Nesiller boyu çölde hayatta kalmayı sağlayan, genlere işlenmiş YAPISAL (yağ, kirpik) farklılıklar en klasik Adaptasyon örnekleridir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Bir böcek popülasyonuna atılan A ilacı ilk yıl işe yaramış ama 5. yıl işe yaramamıştır (A direnci). Daha sonra B ilacı atılmış, ilk yıl işe yaramış ama 10. yıl o da yaramamıştır (B direnci). Bu durum evrimsel olarak nasıl açıklanır?',
        options: [
          { id: 'A', text: 'Böceklerin bilinçli olarak ilaç fabrikasını bastığı' },
          { id: 'B', text: 'Böceklerin modifikasyon geçirdiği' },
          { id: 'C', text: 'Popülasyonun SÜREKLİ YENİ ÇEVRE BASKILARINA (İlaç A ve B) karşı DOĞAL SEÇİLİMLE (Dirençli varyantların seçilmesiyle) UYUM SAĞLADIĞI (Evrimleştiği)' },
          { id: 'D', text: 'İlaçların bozuk olduğu' },
          { id: 'E', text: 'Böceklerin bitkiye dönüştüğü' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılar (özellikle böcek/bakteri) hızla ürer ve sürekli değişen şartlara (yeni ilaçlara) sahip oldukları rastgele direnç genleriyle ayak uydurarak evrimleşirler.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi Doğal Seçilimde "AVANTAJLI" (Seçilecek) bir özellik (Fenotip) OLAMAZ?',
        options: [
          { id: 'A', text: 'Hızlı koşmak (Avcıdan kaçmak için)' },
          { id: 'B', text: 'Zehirli olmak (Avcıyı caydırmak için)' },
          { id: 'C', text: 'Kamuflaj (Arka planla aynı renk olmak)' },
          { id: 'D', text: 'Üreme yaşına gelmeden ÖLÜMCÜL bir kalp hastalığına sahip olmak' },
          { id: 'E', text: 'Çok fazla tohum/yavru üretmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Üremeden (yavru vermeden) ölmeye sebep olan bir özellik (gen), kesinlikle ELENİR. Çünkü yavru veremeyen birey o kötü geni bir sonraki nesle AKTARAMAZ.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Aşağıdaki kavramlardan hangisi, bir canlının yaşadığı ortamda HAYATTA KALMA ve ÜREME ŞANSINI ifade eder?',
        options: [
          { id: 'A', text: 'Mitoz hızı' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Aklimatizasyon' },
          { id: 'D', text: 'Fitness (Biyolojik Uyum Başarısı)' },
          { id: 'E', text: 'Mutajen' }
        ],
        correctOptionId: 'D',
        explanation: 'Fitness (Uyumluluk/Başarı) evrimin puanlama sistemidir. Kimi ortama çok uyumluysa ve çok gen aktarabiliyorsa onun Fitness puanı yüksektir.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Doğal Seçilim HANGİ SEVİYEDE GERÇEKLEŞİR (Seçim kime uygulanır) ve EVRİM (Sonuç) HANGİ SEVİYEDE OLUR?',
        options: [
          { id: 'A', text: 'Seçilim POPÜLASYONA uygulanır, Evrim BİREYDE olur.' },
          { id: 'B', text: 'Seçilim BİREYE (Tek tek avlanan veya hayatta kalan canlının üstüne) uygulanır, ancak EVRİM (Kalıcı değişim) nesiller sonra POPÜLASYONDA görülür.' },
          { id: 'C', text: 'Seçilim Hücreye, evrim organele olur.' },
          { id: 'D', text: 'Seçilim bitkiye, evrim hayvana olur.' },
          { id: 'E', text: 'İkisi de aynı andadır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aslan, geyiği sürünün içinden TEK TEK seçip yer (Seçilim bireysedir). Ancak 10 yıl sonra geyik sürüsünün (Popülasyonun) TAMAMI artık daha hızlı koşuyordur (Evrim popülasyondadır).'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Genetik Varyasyon ve Popülasyon (Easy)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Bir adadaki kuşların gagalarının sadece tohumla beslendikleri için ZAMANLA (nesiller boyu) KALINLAŞMASI sürecinde "Seçici Güç (Baskı)" nedir?',
        options: [
          { id: 'A', text: 'Havanın rüzgarlı olması' },
          { id: 'B', text: 'Kuşların uçması' },
          { id: 'C', text: 'Besin tipi (Sert tohumlar)' },
          { id: 'D', text: 'Avcı kuşlar' },
          { id: 'E', text: 'Gaga boyası' }
        ],
        correctOptionId: 'C',
        explanation: 'Sert tohumu kıramayan (ince gagalı) açlıktan ölür. Burada eleği tutan (seçilimi yapan) şey yiyeceğin (besinin) türüdür.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Tarımda zararlı böceklere (Pest) karşı neden "Biyolojik Mücadele (Örn: Zararlı böceği yiyen faydalı böcek veya kuş salmak)", KİMYASAL İLAÇ (Pestisit) kullanmaktan daha iyidir?',
        options: [
          { id: 'A', text: 'Kimyasal ilaç bedava olduğu için' },
          { id: 'B', text: 'Kuşlar böcekten daha ucuz olduğu için' },
          { id: 'C', text: 'Kimyasal ilaç BÖCEKLERDE DİRENÇ (Süper böcek evrimi) yaratırken, Biyolojik avcı (kuş) direnç yaratmaz (Kuş böceği her türlü yer) ve doğayı zehirlemez.' },
          { id: 'D', text: 'İlaçların bitkiyi büyütmesi için' },
          { id: 'E', text: 'Biyolojik mücadele bitkiyi öldürdüğü için' }
        ],
        correctOptionId: 'C',
        explanation: 'İlaca karşı DNA şifresini bulup direnç geliştiren böcek, kendisini yemeye gelen KUŞA karşı "direnç şifresi" bulamaz. Avcı avını daima yer. (Evrimsel silahlanma yarışı).'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Mitoz bölünme ve Eşeysiz üremenin Doğal Seçilime ve Evrime KATKISI NEDEN YOK DENECEK KADAR AZDIR?',
        options: [
          { id: 'A', text: 'Çok hızlı oldukları için' },
          { id: 'B', text: 'Mutasyonu engelledikleri için' },
          { id: 'C', text: 'Bireyleri KOPYALADIKLARI (Klonladıkları) ve yeni KALITSAL VARYASYON (Çeşitlilik) ÜRETMEDİKLERİ için.' },
          { id: 'D', text: 'Sadece bitkilerde oldukları için' },
          { id: 'E', text: 'Hücreyi küçülttükleri için' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrimin hammaddesi çeşitliliktir. Mitoz sadece fotokopi çeker. Fotokopi makinesinden yeni bir kitap (varyasyon) çıkmaz.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Mayoz Bölünme (Krossing-over ve Bağımsız Dağılım) Doğal Seçilim için NEDEN ÇOK DEĞERLİDİR?',
        options: [
          { id: 'A', text: 'Mutasyonları sildiği için' },
          { id: 'B', text: 'Popülasyona sürekli YENİ KOMBİNASYONLAR (Varyasyonlar/Çeşitlilik) sunarak Doğal Seçilime SEÇECEK ZENGİN BİR MALZEME verdiği için' },
          { id: 'C', text: 'Hücreyi klonladığı için' },
          { id: 'D', text: 'Kromozom sayısını artırdığı için' },
          { id: 'E', text: 'Sadece eşeysiz ürettiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Ne kadar çok çeşit gen karışımı varsa (çeşitlilik), türün çevredeki olası bir yıkımdan kurtulma (dirençli birey bulma) şansı o kadar artar.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Yeni doğan bebeklerde "Doğum Ağırlığı" için Doğal Seçilim nasıl çalışır? (Çok hafifler ve çok ağır/iri olanlar genellikle ölürken, ORTA AĞIRLIKTAKİLER hayatta kalır). Bu ne tip bir seçilimdir?',
        options: [
          { id: 'A', text: 'Yönlendirici Seçilim (Uçları seçen)' },
          { id: 'B', text: 'Bozucu Seçilim' },
          { id: 'C', text: 'Dengeleyici Seçilim (Aşırı uçları eleyip ORTALAMAYI/ORTAYI kayıran seçilim)' },
          { id: 'D', text: 'Yapay Seçilim' },
          { id: 'E', text: 'Modifikasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok hafif bebek (prematüre) dayanamaz ölür. Çok ağır bebek doğumda anneyi ve kendini öldürebilir. Doğa "Ortalama" kiloyu hayatta tutar (Dengeleyici Seçilim).'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir YÖNLENDİRİCİ SEÇİLİM (Popülasyonu BİR UCA DOĞRU kaydıran) örneğidir?',
        options: [
          { id: 'A', text: 'Sadece orta boyluların yaşaması' },
          { id: 'B', text: 'Hem çok kısa hem çok uzunların yaşaması' },
          { id: 'C', text: 'Ağaçların kararması sonucu, popülasyonun SADECE KOYU (Siyah) renge DOĞRU evrimleşmesi (Tek bir ekstrem/uç değerin kayırılması)' },
          { id: 'D', text: 'Bebeklerin orta kiloda doğması' },
          { id: 'E', text: 'Sineklerin kanatsız olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer çevre baskısı türü belirli bir "YÖNE" itiyorsa (Örn: Giderek daha hızlı koşmaya, giderek daha koyu olmaya) bu Yönlendirici Seçilimdir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Afrika\'da sıtma (Malarya) hastalığının çok olduğu bölgelerde "Orak Hücreli Anemi" (Bir kan hastalığı) genini taşıyanlar, normal kanlılara göre DAHA ÇOK YAŞAR. Çünkü orak hücreliler sıtmaya dirençlidir. Bu durum neye örnektir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Doğal Seçilimin, hastalık geni taşıyanları (O bölgedeki ÖZEL AVANTAJI nedeniyle) HAYATTA TUTMASINA (Avantajlı Mutasyon / Dengeleyici Seçilim)' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'B',
        explanation: 'Orak hücre geni aslında bir hatadır (hastalıktır). Ama Afrika\'da sıtmadan ölmektense biraz anemik kalmak daha iyidir. Çevre (sıtma) bu genin varlığını avantajlı hale getirir.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Aynı popülasyon içinde BULUNAN ama HİÇBİR AVANTAJ VEYA DEZAVANTAJ SAĞLAMAYAN özelliklere (Örn: İnsandaki serbest veya yapışık kulak memesi) Evrimsel olarak ne denir?',
        options: [
          { id: 'A', text: 'Ölümcül mutasyon' },
          { id: 'B', text: 'Modifikasyon' },
          { id: 'C', text: 'Nötr (Etkisiz) Varyasyon (Doğal seçilim bunları elemez veya seçmez)' },
          { id: 'D', text: 'Adaptasyon' },
          { id: 'E', text: 'Yapay seçilim' }
        ],
        correctOptionId: 'C',
        explanation: 'Kulak memenizin yapışık olması sizi aslandan kurtarmaz veya iş bulmanızı engellemez. Çevre için nötrdür. Doğal seçilim bunu görmezden gelir, popülasyonda öylece kalır.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'İki farklı bakteri popülasyonu aynı kaba konuluyor. Biri antibiyotiğe dirençli (Plazmiti var), diğeri dirençsiz. Bir süre sonra DİRENÇSİZ OLANLARIN DA DİRENÇLİ HALE GELDİĞİ (DNA\'larının değiştiği) görülüyor. Bu olay nedir?',
        options: [
          { id: 'A', text: 'Mitoz' },
          { id: 'B', text: 'Doğal Seçilim' },
          { id: 'C', text: 'Yatay Gen Aktarımı (Konjugasyon vb. ile direnç geninin diğerlerine bulaşması)' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler yanyana gelip bir sitoplazmik köprü (pilus) kurarak direnç genini (plazmit) birbirlerine kopyalayabilirler (Konjugasyon).'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Canlıların ortam şartlarına UYUM SAĞLAMASI (Adaptasyon) BİR GÜNDE Mİ OLUR?',
        options: [
          { id: 'A', text: 'Evet, canlı isterse anında genlerini değiştirir.' },
          { id: 'B', text: 'Hayır, Adaptasyonlar popülasyon içinde NESİLLER BOYU SÜREN Doğal Seçilim elemeleriyle ÇOK UZUN ZAMANDA biriken KALITSAL özelliklerdir.' },
          { id: 'C', text: 'Evet, güneş hemen teni değiştirir.' },
          { id: 'D', text: 'Sadece mutasyon 1 günde yapar.' },
          { id: 'E', text: 'Evet, aklimatizasyon kalıtsaldır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrimsel zaman skalası çok uzundur. İşe yarar mutasyonların çıkması, seçilmesi, çoğalması ve tüm popülasyona yayılması genelde binlerce yıl alır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Hangi olayın SONUCUNDA, yavru canlılarda Anne-Babasında OLMAYAN YEPYENİ bir özellik ortaya çıkabilir?',
        options: [
          { id: 'A', text: 'Sadece Mitoz bölünme' },
          { id: 'B', text: 'Eşeysiz üreme (Çelikle üretme)' },
          { id: 'C', text: 'Mutasyon' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz tıpatıp aynısını (kopyasını) yapar. Yeni bir şifre (farklı özellik) ancak DNA replikasyonunda bir yazım hatası (Mutasyon) olmasıyla ortaya çıkar.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Bir kedi türü kışın dağda yaşarken tüyleri sıklaşıyor. Yazın ovaya inince tüyleri seyrekleşiyor. Bu olaya en uygun tanım nedir?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Adaptasyon' },
          { id: 'C', text: 'Modifikasyon (veya Aklimatizasyon) - Çevreye verilen geri dönüşlü ve kalıtsal olmayan tepki' },
          { id: 'D', text: 'Yapay seçilim' },
          { id: 'E', text: 'Krossing-over' }
        ],
        correctOptionId: 'C',
        explanation: 'Soğuk havada kıl köklerinin daha çok çalışması, gen işleyişinin (fenotipin) geçici değişimidir. DNA bozulmadığı için modifikasyondur.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: '"Popülasyondaki gen havuzunda yeni gen (alel) KOMBİNASYONLARI oluşturarak çeşitliliği artıran" faktörler hangileridir?',
        options: [
          { id: 'A', text: 'Mutasyon ve Klonlama' },
          { id: 'B', text: 'Mitoz ve Tomurcuklanma' },
          { id: 'C', text: 'Krossing-over, Homolog Kromozomların Bağımsız Ayrılması ve Rastgele Döllenme' },
          { id: 'D', text: 'Sadece Doğal Seçilim' },
          { id: 'E', text: 'Sadece Modifikasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Eşeyli üremenin varyasyon (çeşitlilik) yaratma mekanizmaları mayozdaki parça değişimi (krossing-over), genlerin rastgele dağılımı ve şans eseri sperm/yumurta birleşmesidir.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi DOĞAL SEÇİLİMİN SONUCUNDA ortaya çıkan bir durum DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Kaktüsün iğne yapraklı olması (Adaptasyon)' },
          { id: 'B', text: 'Bakterilerin antibiyotik direnci kazanması (Direnç evrimi)' },
          { id: 'C', text: 'Kutup ayısının kalın yağ tabakası olması (Adaptasyon)' },
          { id: 'D', text: 'İnsanların süt verimi yüksek koyunları kendi arasında çiftleştirmesi (Yapay Seçilim)' },
          { id: 'E', text: 'Ortama uymayan canlıların neslinin tükenmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'İnsan eliyle (bilinçli eşleştirmeyle) yapılan işlemler DOĞAL değil, YAPAY seçilimdir.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Tarımda "Pestisit" (Böcek zehiri) kullanımını TAMAMEN DURDURUP sadece Doğal Avcılar kullanırsak (Biyolojik mücadele), böcek popülasyonu TEKRAR DİRENÇSİZ HALE döner mi?',
        options: [
          { id: 'A', text: 'Kesinlikle döner.' },
          { id: 'B', text: 'Dönme İHTİMALİ VARDIR. Çünkü ilacın olmadığı bir ortamda (Baskı kalktığında), "Direnç Geni" taşımak böcek için artık gereksiz bir yüktür ve Doğal Seçilim bu sefer gereksiz enerji harcayan dirençli bireyleri eleyip, dirençsizleri kayırabilir (Direnç Maliyeti).' },
          { id: 'C', text: 'Böcekler zehri kendileri üretir.' },
          { id: 'D', text: 'Böcekler bitkiyi yemez.' },
          { id: 'E', text: 'Asla değişmezler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Direnç (Zırh) taşımak enerji gerektirir. Savaş (İlaç) yoksa, zırh giyen asker (Dirençli böcek) yorulur ve elenir. Seçilim baskısı kalkınca eski normale dönüş (Geri evrim/Dengeleme) olabilir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Orta Düzey Yorum (Easy)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Sirke sineklerinde göz rengi genlerinde meydana gelen rastgele mutasyonlar, popülasyonda kırmızı, beyaz, turuncu gözlü bireyler (Varyasyon) oluşturur. Hangi göz renginin "Daha Avantajlı" olduğunu ne belirler?',
        options: [
          { id: 'A', text: 'Sineklerin kendi tercihleri' },
          { id: 'B', text: 'Sineklerin yaşı' },
          { id: 'C', text: 'Yaşadıkları o anki ÇEVRE ŞARTLARI ve AVCI BASKISI (Doğal Seçilim)' },
          { id: 'D', text: 'Mitoz bölünme hızı' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Avantaj, çevreye göre şekillenir. Eğer beyaz gözlüler karanlıkta daha iyi görüyorsa karanlık ortamda onlar avantajlıdır, aydınlıkta kırmızı avantajlı olabilir.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Zararlı böceklere karşı sürekli aynı tarım ilacının kullanılmasının, ekolojik ve evrimsel açıdan EN BÜYÜK ZARARI nedir?',
        options: [
          { id: 'A', text: 'Bitkileri büyütmesi' },
          { id: 'B', text: 'Böceklerin tamamen yok olması' },
          { id: 'C', text: 'Böcek popülasyonunu o ilaca karşı tamamen "Dirençli" hale getirerek ilacı ETKİSİZ kılması (Süper zararlıların evrimi)' },
          { id: 'D', text: 'İlacın ucuzlaması' },
          { id: 'E', text: 'Böceklerin mutasyona uğramayı bırakması' }
        ],
        correctOptionId: 'C',
        explanation: 'Aynı baskıyı (ilacı) sürekli kullanmak, Doğal Seçilimi hızlandırır. Zayıflar ölür, sadece dirençliler ürer. Birkaç yıl sonra o ilaca ölmeyen bir böcek ordunuz olur.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Varyasyonun (genetik farklılıkların) popülasyondaki önemini bir iş adamının yatırım yapmasına benzetirsek, en doğru eşleştirme hangisi olur?',
        options: [
          { id: 'A', text: 'Tüm parayı (genleri) tek bir şirkete (tek tipe) yatırmak çok karlıdır.' },
          { id: 'B', text: 'Parayı farklı şirketlere (Farklı varyasyonlara) paylaştırmak, bir kriz (hastalık) anında iflas etmeyi (yok olmayı) önler (Varyasyon bir SİGORTADIR).' },
          { id: 'C', text: 'Hiç yatırım yapmamak (Mutasyon geçirmemek) en iyisidir.' },
          { id: 'D', text: 'Varyasyon şirketi batırır.' },
          { id: 'E', text: 'İş adamı modifikasyondur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Türün tek bir genotipi (tek tip) varsa, o genotipi hedef alan tek bir hastalık tüm türü siler. Çeşitlilik (farklı şirketlere yatırım) ise bazılarını öldürse de türü hayatta tutar.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: '"Bir türün bireyleri arasındaki yapı, fizyoloji veya davranış farklılıklarına Varyasyon denir." Buna göre aşağıdakilerden hangisi VARYASYON (Çeşitlilik) örneği DEĞİLDİR?',
        options: [
          { id: 'A', text: 'İnsanların farklı kan gruplarına (A, B, AB, 0) sahip olması' },
          { id: 'B', text: 'Köpeklerin farklı post renklerinin olması' },
          { id: 'C', text: 'Bakterilerin bazı antibiyotiklere dirençli, bazılarına dirençsiz olması' },
          { id: 'D', text: 'Tüm sağlıklı insanların kalbinin kas dokudan oluşması' },
          { id: 'E', text: 'İnsanlarda boy uzunluklarının farklı olması' }
        ],
        correctOptionId: 'D',
        explanation: 'Türün tüm bireylerinde aynı olan (kalp kası gibi) temel özellikler türün ortak karakteridir, "Farklılık (Varyasyon)" değildir.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Eğer "X Işınları (Radyasyon)" bir bitkinin sadece yaprak hücrelerine isabet ederse (Çiçeğine/Tohumuna gelmezse), evrimsel açıdan ne gibi bir sonuç doğurur?',
        options: [
          { id: 'A', text: 'Tüm popülasyon radyasyonlu doğar.' },
          { id: 'B', text: 'Tohumları radyasyonlu olur.' },
          { id: 'C', text: 'Sadece o bitkinin o yaprağını etkiler (Somatik Mutasyon), yavru bitkilere GEÇMEZ, dolayısıyla türün evrimine KATKISI YOKTUR.' },
          { id: 'D', text: 'Bitki hemen hayvanlaşır.' },
          { id: 'E', text: 'Yapraklar tohum üretmeye başlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrim (Doğal seçilim) nesilden nesile olan aktarımla ilgilenir. Yapraktaki (vücuttaki) hasar tohuma geçmez, o bitki ölünce mutasyon da onunla mezara gider.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Doğada bir canlının yavru sayısının fazla olması (Çok üremesi), Doğal Seçilim mekanizması için neden ÖNEMLİDİR?',
        options: [
          { id: 'A', text: 'Besinleri çabuk tüketmek için' },
          { id: 'B', text: 'Doğal Seçilimin "ELEYECEĞİ" ve "SEÇECEĞİ" daha fazla VARYASYON (seçenek) ve REKABET ortamı yaratmak için.' },
          { id: 'C', text: 'Modifikasyon yapmak için' },
          { id: 'D', text: 'Sadece yaşlıları korumak için' },
          { id: 'E', text: 'Mitoz hızını artırmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir balık binlerce yumurta bırakır (Aşırı üreme). Çünkü kaynaklar kısıtlıdır, rekabet başlar (Yaşama mücadelesi). Doğa bu binlerce farklı yavrudan (varyasyon) en iyilerini seçer.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Bir tarlada ekili olan tek tip (klon) patatesler, patates mantarı (hastalık) nedeniyle 1 yılda tamamen çürümüş ve "İrlanda Patates Kıtlığı"na (Milyonlarca insanın ölmesine) neden olmuştur. Bunun BİYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'Patateslerin çok su içmesi' },
          { id: 'B', text: 'Popülasyonda GENETİK VARYASYONUN OLMAMASI (Hepsinin aynı klon olması) nedeniyle hastalığa karşı "Dirençli" birey çıkma şansının SIFIR olması.' },
          { id: 'C', text: 'Patateslerin modifikasyon geçirmesi' },
          { id: 'D', text: 'Patateslerin mutasyonla güçlenmesi' },
          { id: 'E', text: 'İnsanların patatesi sevmemesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Monokültür (tek tip genetik klon) tarım, hastalığa karşı tamamen savunmasızdır. Aralarında birkaç farklı vahşi (varyasyonlu) tohum olsaydı, onlar direnip hayatta kalabilirdi.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir popülasyonda "Gen Havuzunu" DEĞİŞTİREN (Evrime sebep olan) faktörlerden biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Mutasyon' },
          { id: 'B', text: 'Doğal Seçilim' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Modifikasyon (Bronzlaşma vb.)' },
          { id: 'E', text: 'Göçler (Dışarıdan yeni gen gelmesi)' }
        ],
        correctOptionId: 'D',
        explanation: 'Bronzlaşmak, kas yapmak gibi Modifikasyonlar DNA şifresini bozmaz, sadece çalışmasını değiştirir. Sperm/Yumurtaya aktarılmadıkları için popülasyonun gen havuzunu değiştirmezler.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Bakterilerin "Antibiyotik Direnci" geliştirmesi örneğindeki EVRİMSEL SÜRECİ sıraya koyarsak hangi sıralama DOĞRUDUR? \nI. İlaç ortamı (Baskı) zayıfları öldürür \nII. Popülasyonda rastgele mutasyonlarla dirençli ve dirençsiz varyasyonlar vardır \nIII. Dirençli olanlar hayatta kalıp çoğalır, tüm popülasyon dirençli olur',
        options: [
          { id: 'A', text: 'I - II - III' },
          { id: 'B', text: 'II - I - III' },
          { id: 'C', text: 'III - I - II' },
          { id: 'D', text: 'II - III - I' },
          { id: 'E', text: 'I - III - II' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrimde önce malzeme (II: Varyasyon) vardır. Sonra sınav (I: İlaç baskısı) gelir. Son olarak kazananlar çoğalır ve türleşir/değişir (III: Doğal Seçilim Sonucu).'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: '"Antibiyotik kullanımı bakteriyi mutasyona zorlar ve onu güçlendirir." cümlesi NEDEN YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü antibiyotik bakteriyi zayıflatır.' },
          { id: 'B', text: 'Çünkü MUTASYONLAR RASTGELEDİR ve İHTİYACA GÖRE OLMAZ. Antibiyotik sadece ZATEN (şans eseri) mutasyonla direnç kazanmış olanları hayatta bırakır (Seçer).' },
          { id: 'C', text: 'Çünkü antibiyotikler virüslere etki eder.' },
          { id: 'D', text: 'Çünkü bakteriler mutasyon geçirmez.' },
          { id: 'E', text: 'Çünkü ilaç bakteriye vitamin verir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zehir (ilaç), canlıyı "Hadi zırh üreteyim" diye zorlamaz. Zehir geldiğinde zırhı OLMAYANLARI öldürür. Zırh (Mutasyon) önceden tamamen RASTGELE oluşmuştur.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Bir tarlaya atılan böcek ilacından kurtulan son birkaç böcek, kendi aralarında üreyerek tarlayı tekrar dolduruyor. Ancak yeni gelen çok HAFİF BİR HASTALIK tüm tarlayı yok ediyor. Evrimsel olarak bu nasıl açıklanır?',
        options: [
          { id: 'A', text: 'İlaç onları güçlendirmiştir' },
          { id: 'B', text: 'Darboğaz Etkisi (Tarladaki böceklerin %99\'u ölünce geriye kalan birkaç böcek çoğalsa da GENETİK VARYASYON çok düşmüştür, yeni hastalığa dirençleri yoktur)' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Aklimatizasyon' },
          { id: 'E', text: 'Klonlama' }
        ],
        correctOptionId: 'B',
        explanation: 'Popülasyon büyük bir felaketle (ilaç) birkaç kişiye düşerse (Darboğaz/Bottleneck), geride kalanların gen çeşitliliği çok azdır. Hastalıklara karşı çok zayıf (varyasyonsuz) kalırlar.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi "Uyum Başarısı (Fitness)" yüksek bir bireyin ÖZELLİĞİDİR?',
        options: [
          { id: 'A', text: 'Çok büyük ve güçlü olması' },
          { id: 'B', text: 'Çevre şartlarına uygun ADAPTASYONLARA sahip olması ve YAŞAYIP ÇOK SAYIDA ÜREYEBİLMESİ' },
          { id: 'C', text: 'Hiç yavru vermemesi' },
          { id: 'D', text: 'Çok uzun yaşaması ama kısır olması' },
          { id: 'E', text: 'Rengi her gün değiştirmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrimde "Uyum (Fitness)" = Hayatta kalma x Yavru yapma (Gen aktarma) gücüdür. Güç, kas veya ömür sadece yavru yapmaya yarıyorsa değerlidir.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Bir ormandaki ağaçların kabuk rengi Açık Kahverengidir. Bu ormandaki Kelebek popülasyonu içinde %10 Siyah, %90 Açık Kahverengi kelebek (Varyasyon) vardır. Sanayi devrimi sonrası ağaç kabukları SİYAH kuruma bulanırsa ne olması beklenir?',
        options: [
          { id: 'A', text: 'Açık renkli kelebeklerin artması' },
          { id: 'B', text: 'Kelebeklerin ağaç yemesi' },
          { id: 'C', text: 'Kuşlar (Avcı baskısı) açık renkli olanları rahatça görüp yiyeceği için, SİYAH KELEBEK oranının (frekansının) Doğal Seçilimle %90\'lara ÇIKMASI' },
          { id: 'D', text: 'Kuşların siyah kelebekleri bulması' },
          { id: 'E', text: 'Ağaçların tekrar açılması' }
        ],
        correctOptionId: 'C',
        explanation: 'Eskiden avantajlı olan "açık renk", çevre (kurum) değişince "dezavantaja" dönüştü. Doğa (Kuşlar) artık koyuları kayırır (Yönlendirici Doğal Seçilim).'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'İnsanların yabani bir kurt popülasyonundan SADECE "İnsana saldırmayan, uysal" olanları seçip, onları çiftleştirerek KÖPEK türünü evcilleştirmesi HANGİ SEÇİLİM türüdür?',
        options: [
          { id: 'A', text: 'Doğal Seçilim' },
          { id: 'B', text: 'Yapay Seçilim' },
          { id: 'C', text: 'Dengeleyici Seçilim' },
          { id: 'D', text: 'Cinsel Seçilim' },
          { id: 'E', text: 'Modifikasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğa "saldırganlığı/vahşiliği" kayırırken (avlanmak için), insan kendi ihtiyacına (bekçilik/uysallık) uygun olanı SEÇMİŞ ve çoğaltmıştır (Yapay Seçilim).'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Kutup ayısının (Ursus maritimus) beyaz postu ve Boz ayının (Ursus arctos) kahverengi postu, kendi ekosistemleri için birer ADAPTASYONDUR. Kutup ayısını ormana koysaydık ne olurdu?',
        options: [
          { id: 'A', text: 'Hemen kahverengi olurdu' },
          { id: 'B', text: 'Adaptasyon (Beyaz post) o çevre (Orman) için AVANTAJ SAĞLAMAYACAĞI (hatta avlanmayı zorlaştıracağı) için Fitness\'ı düşer ve muhtemelen elenirdi.' },
          { id: 'C', text: 'Ormanda kral olurdu' },
          { id: 'D', text: 'Modifikasyonla yeşile dönerdi' },
          { id: 'E', text: 'Boz ayıyı evcilleştirirdi' }
        ],
        correctOptionId: 'B',
        explanation: 'Adaptasyon mutlak bir "Süper güç" değildir. SADECE içinde bulunduğu o spesifik ortama (karlara) göre avantajdır. Ortam değişirse adaptasyon felaketiniz olabilir.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Analiz ve Senaryo Yorumlama (Medium)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: '[Grafik: Y ekseni "Birey Sayısı", X ekseni "Vücut Büyüklüğü"nü gösteren çan eğrisi şeklinde bir grafik düşünün. Uzun yıllar süren bir kuraklık sonrası (Besin azalıyor), Çan Eğrisi SADECE KÜÇÜK VÜCUTLULAR yönüne (sola) doğru kaymıştır.]\nBu grafik hangi evrimsel modeli temsil eder?',
        options: [
          { id: 'A', text: 'Dengeleyici Seçilim' },
          { id: 'B', text: 'Yönlendirici Seçilim (Ortam şartları tek bir ucu/küçük boyutu avantajlı kılmıştır)' },
          { id: 'C', text: 'Yapay Seçilim' },
          { id: 'D', text: 'Modifikasyon' },
          { id: 'E', text: 'Bozucu Seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'Kuraklık (besin azlığı), büyük vücutlu (çok enerji isteyen) bireyleri elemiş, küçük vücutlu (az enerjiyle yaşayabilen) uç değeri kayırmıştır. Seçilim bir yöne (küçüğe) kaymıştır.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: '[Tablo: X bakterisine karşı uygulanan 3 farklı ilacın etkisi]\n- İlaç 1: Bakterilerin %100\'ünü öldürdü.\n- İlaç 2: Bakterilerin %90\'ını öldürdü.\n- İlaç 3: Bakterilerin %10\'unu öldürdü.\nHangi ilacın kullanımından SIFIRDAN YENİ BİR "Dirençli Popülasyon" (Evrim) doğma riski EN YÜKSEKTİR?',
        options: [
          { id: 'A', text: 'İlaç 1' },
          { id: 'B', text: 'İlaç 2 (Kurtulan %10 çok hızlı çoğalıp tamamen dirençli yeni bir popülasyon yaratabilir)' },
          { id: 'C', text: 'İlaç 3 (Çoğu yaşadığı için popülasyon genetiği çok değişmez, doğal seçilim baskısı çok azdır)' },
          { id: 'D', text: 'Hepsi aynı risktedir' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'B',
        explanation: 'İlaç 1 hepsini sildiği için evrimleşecek canlı kalmaz. İlaç 3 baskı bile yaratmamıştır (çoğu yaşıyor). İlaç 2 ise tam bir Doğal Seçilim eleğidir. Sadece en güçlü (dirençli) %10\'u bırakır, onlar yeni nesli kurar.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir tarlada çiftçiler, Mısır kurdu zararlısına karşı "Zehir üreten bir gen (Bt geni)" aktarılmış GDO\'lu mısırlar ektiler. İlk yıllar mısır kurtları hiç mısır yiyemeyip öldü. Ancak 10 yıl sonra bazı kurtlar bu zehirli GDO mısırlarını rahatça yiyip çoğalmaya başladı. \nMısır kurtlarının bu evrimini açıklayan en doğru ifade nedir?',
        options: [
          { id: 'A', text: 'Kurtlar bilerek mısırla antlaşma yapmıştır.' },
          { id: 'B', text: 'Mısır zehri kurtlarda modifikasyona sebep olmuştur.' },
          { id: 'C', text: 'Zehirli mısır (Çevre baskısı), kurt popülasyonunda var olan nadir bir direnç genini (mutasyonu) SEÇMİŞ ve 10 yıl içinde bu gen popülasyonda hakim hale gelmiştir (Doğal Seçilim).' },
          { id: 'D', text: 'Mısırın GDO\'su zamanla bozulmuştur.' },
          { id: 'E', text: 'Kurtlar yapay seçilime uğramıştır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğa her zaman bir yolunu bulur. Zehirli ortam, sadece o zehre şans eseri dirençli olan azınlığı hayatta bırakır. Onlar çoğalınca tüm popülasyon dirençli (Evrimleşmiş) olur.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: '"Darwin ispinozları" Galapagos adalarında tek bir ata kuş türünden türeyip, farklı adalardaki farklı besinlere (Tohum, Böcek, Kaktüs) göre FARKLI GAGA YAPILARINA (Kimi kalın, kimi ince) evrimleşmişlerdir. \nBu olayın (Farklı çevrelerin farklı özellikleri seçmesi) BİYOLOJİK TERİM KARŞILIĞI nedir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Adaptif Radyasyon (Çevresel koşullara göre dallanarak uyum sağlama / Yönlendirici Seçilim)' },
          { id: 'C', text: 'Aklimatizasyon' },
          { id: 'D', text: 'Klonlama' },
          { id: 'E', text: 'Yapay Seçilim' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir türün, farklı çevre baskıları (tohum veya böcek) yüzünden farklı adaptasyonlar (kalın veya ince gaga) kazanıp birden fazla yeni türe dallanmasına Adaptif Radyasyon denir.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Antibiyotik direncinin YATAY GEN AKTARIMI (Konjugasyon vb.) ile yayılması, klasik Mutasyonla (Dikey/Yavruya aktarımla) yayılmasına göre NEDEN ÇOK DAHA HIZLI VE TEHLİKELİDİR?',
        options: [
          { id: 'A', text: 'Çünkü yatay aktarım bakteriyi öldürür.' },
          { id: 'B', text: 'Çünkü mutasyon çok hızlıdır.' },
          { id: 'C', text: 'Çünkü Yatay Aktarımda (Plazmit transferi), direnç geni için NESİL BEKLEMEYE (Üremeye) gerek yoktur. Aynı nesildeki (yan yana duran) FARKLI TÜRDEN bakterilere bile anında direnç şifresi bulaştırılabilir.' },
          { id: 'D', text: 'Çünkü yatay aktarım modifikasyondur.' },
          { id: 'E', text: 'Sadece bitkilere geçtiği için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Dikey aktarım (üreme) zaman alır. Ama yatay aktarım (konjugasyon), USB bellek (Plazmit) ile yanındaki arkadaşına (başka bakteri türü bile olabilir) anında şifreyi (direnci) kopyalamaktır.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Lamarck, "Kullanılan organlar gelişir ve yavrulara aktarılır" demişti. Demirci bir babanın kaslı olup, oğlunun normal kaslarla doğması, Lamarck\'ın hangi BİYOLOJİK gerçeği bilmediğini gösterir?',
        options: [
          { id: 'A', text: 'Doğal Seçilimi' },
          { id: 'B', text: 'Somatik (Vücut) hücrelerindeki DNA değişimlerinin veya Modifikasyonların, GAMET (Üreme) HÜCRELERİNE (Sperm/Yumurta) yansımadığını (Kalıtsal olmadığını)' },
          { id: 'C', text: 'Mitoz bölünmeyi' },
          { id: 'D', text: 'Mayoz bölünmeyi' },
          { id: 'E', text: 'Adaptasyonun hızını' }
        ],
        correctOptionId: 'B',
        explanation: 'Kullanmak kası (vücut hücresi) geliştirir, ama bu değişim (modifikasyon) spermdeki DNA şifresini değiştirmediği için çocuğa geçmez.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: '[Örnek Senaryo: Çevrede hem büyük iri tohumlar hem de küçük yumuşak tohumlar vardır. Ancak ORTA BOY tohumlar bir böcek tarafından tüketilip yok edilmiştir.]\nBu durumda, kuş popülasyonunda HANGİ GAGA TİPİ bireylerin elenmesi (Yok olması) beklenir?',
        options: [
          { id: 'A', text: 'Büyük gagalılar' },
          { id: 'B', text: 'Küçük gagalılar' },
          { id: 'C', text: 'Orta boy gagalılar (Çünkü yiyecekleri orta boy tohum ortadan kalkmıştır / Bozucu Seçilim)' },
          { id: 'D', text: 'Hepsi elenir' },
          { id: 'E', text: 'Hiçbiri elenmez' }
        ],
        correctOptionId: 'C',
        explanation: 'Ortalama özelliğin (orta gaga) dezavantajlı olduğu ve elendiği, uçların (büyük tohum yiyen büyük gaga ve küçük tohum yiyen küçük gaga) hayatta kaldığı bu duruma Bozucu Seçilim denir.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bir kedi türü kışın dağda (Soğuk) yaşarken sık kıllı, yazın ovaya (Sıcak) inince seyrek kıllı oluyor. (MODİFİKASYON)\nKutup ayısı ise kışın da, yazın havanın 15°C olduğu günlerde de hep sık kıllıdır. (ADAPTASYON)\nEvrimsel mekanizma açısından Modifikasyon, canlıya ne gibi bir AVANTAJ sağlar?',
        options: [
          { id: 'A', text: 'Genetik şifresini bozmasını sağlar.' },
          { id: 'B', text: 'Çevre çok HIZLI VE SÜREKLİ değişiyorsa (Yaz/Kış gibi), genetiği (Adaptasyonu) değiştirmeden geçici hücresel tepkilerle (Esneklikle) ENERJİ TASARRUFU sağlar.' },
          { id: 'C', text: 'Kalıcı mutasyon yapmasını sağlar.' },
          { id: 'D', text: 'Yeni tür oluşturmasını sağlar.' },
          { id: 'E', text: 'Hiçbir avantajı yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer bir özellik için sürekli gen değiştirmeye (adaptasyona) kalksaydınız bu yüz binlerce yıl sürerdi. Mevsimsel değişimler için genin hızla "aç-kapa" yapabilmesi (Fenotipik esneklik / Modifikasyon) büyük bir yaşamsal avantajdır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Akraba Evliliği, popülasyon genetiği açısından neden risklidir?',
        options: [
          { id: 'A', text: 'Varyasyonu çok artırdığı için' },
          { id: 'B', text: 'Doğal Seçilimi durdurduğu için' },
          { id: 'C', text: 'Aile içinde gizli (Resesif/Çekinik) bulunan ZARARLI MUTASYON GENLERİNİN yavru üzerinde YAN YANA (Homozigot) gelme ve hastalığı çıkarma ihtimalini YÜKSELTTİĞİ için.' },
          { id: 'D', text: 'Süper genler ürettiği için' },
          { id: 'E', text: 'Sadece erkekleri etkilediği için' }
        ],
        correctOptionId: 'C',
        explanation: 'Sizde zararlı bir gen varsa eşiniz de akrabanızsa aynı gene sahip olma ihtimali yüksektir. Çocuğunuza ikinizden de bu çekinik (gizli) zararlı gen giderse çocuk hasta (örn: SMA) doğar. Genetik çeşitlilik (Uzak akrabalık) bu yüzden koruyucudur.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Tavus kuşlarında erkeklerin tüyleri aşırı derecede büyük ve parlaktır. Bu durum aslında avcıların onu kolayca fark edip yemesine (Kötü Doğal Seçilim / Düşük Hayatta Kalma) sebep olur. \nPeki AVANTAJSIZ görünen bu parlak ve uzun tüyler evrimsel olarak NASIL POPÜLASYONDA KALMIŞTIR?',
        options: [
          { id: 'A', text: 'Erkekler kendileri boyadığı için' },
          { id: 'B', text: 'Kuşların uçması gerektiği için' },
          { id: 'C', text: 'DİŞİLERİN eş seçerken (Cinsel Seçilim) SADECE parlak kuyrukluları seçmesi nedeniyle, parlak kuyruklular çok üreyip genlerini aktardığı için (Üreme Avantajı, Hayatta kalma dezavantajına ağır basmıştır).' },
          { id: 'D', text: 'Kuyruğun zehirli olması' },
          { id: 'E', text: 'Radyasyonun kuyruğu büyütmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrimde sadece hayatta kalmak yetmez, ÜREMEK (Gen aktarmak) şarttır. Dişi tavus kuşu mat tüylü erkeği reddeder. Mat tüylü erkek 10 yıl yaşasa da yavrusu (Fitness=0) olmaz. Parlak tüylü erkek 2 yıl yaşar ama 10 yavrusu olur. Cinsel Seçilim (Üreme şansı) genetik aktarımı belirler.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Bir biyolog, laboratuvarda fareleri 100 nesil boyunca karanlıkta yetiştiriyor ve 100. nesil farelerin gözlerinin normal bir şekilde (körelmeden) GÖRDÜĞÜNÜ fark ediyor. \nHalbuki milyonlarca yıl mağarada yaşayan balıkların gözleri körelmiştir (Adaptasyon).\nLaboratuvar fareleri NEDEN KÖRELMEDİ?',
        options: [
          { id: 'A', text: 'Çünkü fareler karanlığı sever' },
          { id: 'B', text: 'Çünkü 100 nesil, GÖZÜ BOZAN BİR MUTASYONUN (Varyasyonun) ortaya çıkıp popülasyona yayılması (Doğal Seçilim süreci) için YETERLİ BİR ZAMAN (Evrimsel Zaman) DEĞİLDİR.' },
          { id: 'C', text: 'Çünkü fareler bitkidir' },
          { id: 'D', text: 'Çünkü karanlık modifikasyon yapar' },
          { id: 'E', text: 'Çünkü fareler mitozla ürer' }
        ],
        correctOptionId: 'B',
        explanation: 'Lamarck olsaydı "kullanılmadığı için hemen körelir" derdi. Ama gerçekte, gözsüzlük geni rastgele bir mutasyonla doğmalı ve o gen seçilmelidir. Bu süreç binlerce, milyonlarca nesil gerektirir.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Doğal Seçilimin "HİÇBİR ZAMAN KUSURSUZ (Mükemmel) CANLILAR YARATAMAMASININ" temel nedenlerinden biri hangisidir?',
        options: [
          { id: 'A', text: 'Evrimin hep kötü çalışması' },
          { id: 'B', text: 'Çevrenin hep aynı kalması' },
          { id: 'C', text: 'Seçilimin sadece MEVCUT (Zaten havuzda olan) VARYASYONLAR üzerinden yapılması. Yani "Yoktan en mükemmelini" var edemez, sadece "Eldeki malzemenin (genlerin) en iyisini" seçebilir.' },
          { id: 'D', text: 'Canlıların çok zayıf olması' },
          { id: 'E', text: 'Mutasyonların hep yararlı olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal seçilim mühendis gibi sıfırdan tasarım yapmaz. Tamirci gibi eldeki parçaları kullanır. Eğer havuzda kanat geni (varyasyonu) yoksa, uçması ne kadar avantajlı olursa olsun seçilim o canlıyı uçuramaz.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Tarımsal Genetik Mühendisliğinde (GDO), "Altın Pirinç" denilen ve normalde pirinçte olmayan "A Vitamini" üreten bir bitki elde edilmiştir. Bu durum YAPAY SEÇİLİMDEN farklı olarak nasıl yapılmıştır?',
        options: [
          { id: 'A', text: 'Çok fazla pirinç ekerek' },
          { id: 'B', text: 'Farklı bir CANLIDAN (Örn: Nergis bitkisi ve bakteri) alınan A vitamini GENİNİN, laboratuvarda doğrudan pirincin DNA\'SINA (Transgenik) eklenmesiyle.' },
          { id: 'C', text: 'Pirinçlerin sarı renge boyanmasıyla (Modifikasyon)' },
          { id: 'D', text: 'Pirinci havuçla çiftleştirerek' },
          { id: 'E', text: 'Doğal seçilimi bekleyerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapay seçilimde aynı türler çiftleştirilir. Genetik mühendisliğinde ise tür sınırları (Bakteriden insana, bitkiden balığa) aşılarak DNA şifresi doğrudan kopyala-yapıştır (Transgenik) yapılır.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Bir gölde yaşayan balık popülasyonu, göle dökülen sanayi zehri (Ağır metal) nedeniyle ölüyor. Sadece zehire DİRENÇLİ GEN taşıyan 5 balık kalıyor. 10 yıl sonra göl tekrar on binlerce balıkla doluyor ama hepsi Zehire Dirençli. \nBu "Evrimsel" olaydaki "Kurucu Etki (Darboğaz)" kavramının GELECEK İÇİN EN BÜYÜK TEHLİKESİ nedir?',
        options: [
          { id: 'A', text: 'Gölün taşması' },
          { id: 'B', text: 'Balıkların devleşmesi' },
          { id: 'C', text: 'Göldeki 10.000 balığın TÜMÜNÜN genetiği sadece o "5 Kurtulan Ataya" dayandığı için (GENETİK ÇEŞİTLİLİK SIFIRLANDIĞI İÇİN), göle gelen çok hafif başka bir hastalığın (Örn: Basit bir mantar) hepsini tek seferde yokedebilmesi.' },
          { id: 'D', text: 'Balıkların gölden çıkıp yürümesi' },
          { id: 'E', text: 'Ağır metallerin temizlenmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Genetik çeşitliliğin (Varyasyonun) daralması, popülasyonu homojen (klon) yapar. Farklılık yoksa, yeni bir tehdide karşı "sigorta" (dirençli çıkma ihtimali) da yoktur.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Bazı hastanelerde enfeksiyon kapıldığında "Çoklu İlaç Direnci (MDR)" olan bakteriler tespit ediliyor. Yani bakteri sadece Penisiline değil, 5 farklı antibiyotiğe de aynı anda dirençli. Bu durumun evrimsel mekanizması nedir?',
        options: [
          { id: 'A', text: 'Modifikasyonla bakterinin zırh giymesi' },
          { id: 'B', text: 'Bakterinin bilerek ilaç içmesi' },
          { id: 'C', text: 'Bakterilerin hem sürekli mutasyon geçirmesi hem de YATAY GEN AKTARIMI (Plazmitler) ile FARKLI DİRENÇ GENLERİNİ başka bakterilerden toplayıp tek bir bünyede BİRLEŞTİRMESİ.' },
          { id: 'D', text: 'Mitoz bölünmenin hızlanması' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler gen alışverişini (Konjugasyon) çok severler. A bakterisinde X direnci, B bakterisinde Y direnci varsa, bu genleri plazmitlerle takas edip, X ve Y\'ye aynı anda dirençli "Süper Bakteriler" oluştururlar.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Konu Bütünlüğü Analizi (Medium)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Aşağıda verilen "Varyasyon kaynağı - Özellik" eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Mutasyon -> Yepyeni bir alel (şifre) oluşturabilir.' },
          { id: 'B', text: 'Krossing-over -> Mevcut genleri parça değişimiyle yeni kombinasyonlara sokar.' },
          { id: 'C', text: 'Rastgele Döllenme -> Farklı şifreli gametleri birleştirerek çeşitlilik katar.' },
          { id: 'D', text: 'Mitoz Bölünme -> Genotipik yapıyı değiştirerek evrime hammadde (yeni çeşitlilik) sağlar.' },
          { id: 'E', text: 'Homolog Ayrılması -> Mayozda genlerin bağımsız dağılımını sağlar.' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitoz bölünme "Klonlama (Fotokopi)" yapar. Bir mutasyon olmadığı sürece genotipik yapıyı ASLA DEĞİŞTİRMEZ, varyasyon kaynağı değildir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Doğal Seçilim teorisinin mantık zincirinde (Darwinist yaklaşım) aşağıdakilerden hangisi "SONUÇ" (Evrimleşme) evresidir?',
        options: [
          { id: 'A', text: 'Popülasyonda kalıtsal çeşitliliğin (Varyasyonun) bulunması' },
          { id: 'B', text: 'Canlıların ortama sığamayacak kadar çok üremesi' },
          { id: 'C', text: 'Sınırlı kaynaklar için "Yaşam Mücadelesi" verilmesi' },
          { id: 'D', text: 'Çevreye uyumlu özellik sağlayan (Avantajlı) genlerin popülasyondaki sıklığının (Alel Frekansının) NESİLLER İÇİNDE ARTMASI' },
          { id: 'E', text: 'Zayıf bireylerin elenmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Sıra şöyledir: Aşırı Üreme -> Yaşama Mücadelesi (Rekabet) -> Varyasyonların Sınanması -> Zayıfların Elenmesi -> İyi Genlerin Yayılması (Evrimsel Sonuç / Adaptasyon).'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Tarım zararlılarıyla mücadelede pestisit (İlaç) kullanmak yerine, zararlıyı yiyen "Özel bir kuş türünü" tarlaya bırakmak (Biyolojik Mücadele) isteniyor. Bu kuş türünü seçerken EVRİMSEL ve EKOLOJİK açıdan en çok neye DİKKAT EDİLMELİDİR?',
        options: [
          { id: 'A', text: 'Kuşun tüylerinin rengine' },
          { id: 'B', text: 'Kuşun ilaca dayanıklı olup olmadığına' },
          { id: 'C', text: 'Kuşun sadece o ZARARLI BÖCEĞİ yediğine (Özelleşmiş olduğuna); eğer her şeyi yiyorsa, tarladaki faydalı böcekleri ve ürünleri de yiyerek EKOLOJİK DENGE ve SEÇİLİMİ bozabileceğine.' },
          { id: 'D', text: 'Kuşun mitoz geçirmesine' },
          { id: 'E', text: 'Kuşun mutasyon hızına' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojik mücadelede ortama yabancı bir "Avcı" sokmak risklidir (Örn: Avustralya\'ya kene kurbağası götürmek felaket olmuştur). Avcı spesifik değilse, doğal seçilim baskısı kontrolden çıkar, her şeyi yok edebilir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Bir antibiyotik kutusunda "Bu ilaç bakterilerin Ribozom (Protein sentezi) organelini bağlayıp durdurarak etki eder" yazıyor. Peki bu ilacı içen bir İNSANIN kendi hücreleri (Ribozomları) neden bu ilaçtan zehirlenip ölmez?',
        options: [
          { id: 'A', text: 'İnsanın çok su içmesi nedeniyle' },
          { id: 'B', text: 'İnsanın modifikasyon geçirmesi nedeniyle' },
          { id: 'C', text: 'İnsan (Ökaryot) ribozom yapısı ile Bakteri (Prokaryot) ribozom yapısının EVRİMSEL OLARAK FARKLI OLMASI (Hedef Seçicilik) nedeniyle. İlaç sadece bakteri ribozomuna anahtar-kilit uyar.' },
          { id: 'D', text: 'İlacın mide asidinde bozulması nedeniyle' },
          { id: 'E', text: 'İnsanların yapay seçilime uğraması nedeniyle' }
        ],
        correctOptionId: 'C',
        explanation: 'Antibiyotikler ökaryot/prokaryot farklarını hedefler. Bakteri ribozomu ile bizimki farklıdır. İlaç gider sadece bakterininkini kitler. (Eğer benzer olsaydı bizi de öldürürdü).'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Yapay Seçilim (Örn: Evcil köpekler) ve Genetik Mühendisliği (Örn: Karanlıkta parlayan kedi geni) ile yaratılan canlıların DOĞAL ORTAMA (Vahşi doğaya) bırakıldıklarında genellikle HEMEN ELENMELERİNİN (Ölmelerinin) sebebi nedir?',
        options: [
          { id: 'A', text: 'Çok hızlı koşmaları' },
          { id: 'B', text: 'İnsan ihtiyaçları doğrultusunda "Seçilmiş veya Üretilmiş" bu özelliklerin, DOĞAL SEÇİLİMİN ŞARTLARINA (Örn: kamuflaj, vahşi avcıdan kaçma) uygun OLMAMASI (Düşük Biyolojik Fitness).' },
          { id: 'C', text: 'Doğanın modifikasyon yapması' },
          { id: 'D', text: 'Aklimatizasyon olamamaları' },
          { id: 'E', text: 'Sürekli mutasyon geçirmeleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısa bacaklı, tatlı yüzlü bir Süs Köpeği (Yapay Seçilim) doğada kurdun karşısına çıkarsa, kaçamaz (Fitness düşüktür) ve ilk günde elenir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'İkiz (Tek yumurta - Aynı DNA) kardeşlerden biri dağda (Oksijen az), diğeri deniz seviyesinde (Oksijen normal) 20 yıl yaşıyor. Dağdakinin göğüs kafesi genişliyor, alyuvarı artıyor (Aklimatizasyon). Sonra bu ikizlerin ÇOCUKLARI (Deniz seviyesinde) doğuyor. \nÇocukların fenotipleri (Alyuvar sayıları) hakkında ne söylenebilir?',
        options: [
          { id: 'A', text: 'Dağdakinin çocuğu yüksek alyuvarla (dağlı olarak) doğar.' },
          { id: 'B', text: 'İki çocuk da FARKLI DNA\'lara sahip olmuştur.' },
          { id: 'C', text: 'İki çocuk da DENİZ SEVİYESİNİN normal özellikleri (Normal alyuvar) ile doğar. Çünkü babalardaki çevresel uyum (Aklimatizasyon/Modifikasyon) SPERM DNA\'sını değiştirmemiştir.' },
          { id: 'D', text: 'Dağdakinin çocuğu mutasyonlu doğar.' },
          { id: 'E', text: 'Denizdekini çocuğu yüzücü doğar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun çevreye verdiği fizyolojik tepkiler (alyuvar artışı, kaslanma) genetik şifreyi (üreme hücrelerini) etkilemez, kalıtsal değildir (Lamarck hatası).'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Eğer antibiyotik kullanımı tamamen YASAKLANSAYDI, bakteri popülasyonlarındaki (Örn: Doğadaki) "Antibiyotik Direnç Genlerinin (Alellerinin)" sıklığı zamanla ne olurdu?',
        options: [
          { id: 'A', text: 'Hemen artardı.' },
          { id: 'B', text: 'Sıfıra inip tamamen yok olurdu.' },
          { id: 'C', text: 'Baskı (İlaç) olmadığı için direnç geni taşımak AVANTAJ SAĞLAMAZDI (Hatta zırh taşımak gibi enerji maliyeti yaratırdı), bu yüzden Doğal Seçilimle dirençli bireylerin oranı GİDEREK AZALIRDI.' },
          { id: 'D', text: 'Mutasyona dönüşürdü.' },
          { id: 'E', text: 'Aklimatizasyon olurdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kullanılmayan silah (Direnç) yüktür. Dirençli bakteri zırhı sentezlemek için enerji harcar, dirençsiz bakteri ise sadece hızlı üremeye enerji harcar. Zehir (İlaç) yoksa, dirençsiz daha hızlı çoğalır (Fitness\'ı yüksek olur) ve popülasyonu o kaplar.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: '"Fosil Kayıtları", "Embriyolojik Benzerlikler", "Homolog (Kökeni aynı) Organlar" ve "DNA/Protein Benzerlikleri". Bu verilerin TAMAMI Biyolojide hangi amaca hizmet eder?',
        options: [
          { id: 'A', text: 'Canlıları klonlamaya' },
          { id: 'B', text: 'Canlıların Modifikasyon oranını ölçmeye' },
          { id: 'C', text: 'Canlı türlerinin ORTAK ATADAN evrimleştiğinin ve aralarındaki evrimsel AKRABALIK derecelerinin KANITLANMASINA' },
          { id: 'D', text: 'Antibiyotik üretmeye' },
          { id: 'E', text: 'Bakterileri sınıflandırmaya' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsanın kolu, yarasının kanadı, balinanın yüzgeci (Homolog organ) aynı kemiklerden oluşur. DNA\'mız şempanzeyle %98, muzla %50 ortaktır. Bütün bu kanıtlar tüm canlıların "Ortak Bir Evrimsel Kökeni/Atası" olduğunu gösterir.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'İki farklı bakteri türü A (İnsanda hastalık yapar ama ilaca dirençsizdir) ve B (Hastalık yapmaz, toprakta yaşar ama ilaca karşı %100 DİRENÇLİDİR). Eğer bunlar yan yana gelirse, evrimsel açıdan insanoğlu için EN KORKUTUCU SENARYO nedir?',
        options: [
          { id: 'A', text: 'Bakterilerin birbirini yemesi' },
          { id: 'B', text: 'A bakterisinin toprağa geçmesi' },
          { id: 'C', text: 'YATAY GEN AKTARIMI (Plazmit/Konjugasyon) ile B bakterisindeki "Direnç Geninin", hastalık yapıcı A bakterisine aktarılması ve DİRENÇLİ HASTALIK YAPICI (Süper Patojen) evrimi.' },
          { id: 'D', text: 'Bakterilerin bitkiye dönüşmesi' },
          { id: 'E', text: 'B bakterisinin mitoz geçirmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Direnç genleri doğada zararsız bakterilerde bulunabilir. Sorun, bu genlerin konjugasyonla "Bizi hasta eden (Patojen)" bakterilerin eline (DNA\'sına) geçmesidir.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Doğal Seçilim, zararlı ve ÖLDÜRÜCÜ bir mutant geni (Örn: Huntington Hastalığı geni - Belirtileri 40-50 yaşından sonra başlar ve öldürür) popülasyondan NEDEN TAMAMEN ELEYİP TEMİZLEYEMEMİŞTİR?',
        options: [
          { id: 'A', text: 'Hastalık çok tatlı olduğu için' },
          { id: 'B', text: 'Doğal Seçilimin sadece bitkilere etki etmesi' },
          { id: 'C', text: 'Hastalık belirtileri ÜREME YAŞINDAN (20-30 yaş) SONRA ortaya çıktığı için. Birey genlerini (hastalığı) çocuklarına aktardıktan SONRA öldüğü için seçilim (eleme) bu geni fark edip durduramaz.' },
          { id: 'D', text: 'Hastalığın modifikasyon olması' },
          { id: 'E', text: 'Hastalığın bulaşıcı olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal seçilim "Üreme Öncesi (Fitness\'ı etkileyen)" olaylara müdahale eder. Bebekken öldüren geni hemen eler. Ama 50 yaşında öldüren geni elemez, çünkü kişi o zamana kadar 3 çocuk yapıp geni çoktan aktarmış olur.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: '"Popülasyon Darboğazı (Bottleneck)" ve "Kurucu Etkisi (Founder Effect)" olayları, Doğal Seçilimden (Uyum/Adaptasyondan) FARKLI OLARAK Gen Havuzunu nasıl değiştirir?',
        options: [
          { id: 'A', text: 'Canlıları daha uyumlu yapar.' },
          { id: 'B', text: 'Mutasyonları durdurur.' },
          { id: 'C', text: 'Tamamen ŞANS ESERİ (Doğal afet, rüzgarla adaya uçma vb.) gerçekleşirler. Çevreye "uyumlu olanı" DEĞİL, "Şanslı olanın" genlerini popülasyona hakim kılarlar (Genetik Sürüklenme / Rastgelelik).' },
          { id: 'D', text: 'Yapay seçilim gibidirler.' },
          { id: 'E', text: 'Modifikasyon yaratırlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğal seçilim beceri (uyum) ister. Ama göktaşı düştüğünde en uyumlu dinozor da ölür. Tesadüfen bir adaya sürüklenen 2 böcek (Kurucu etki), ne kadar beceriksiz de olsa o adanın tüm yeni neslini kurar. Bu rastgele bir evrimdir (Sürüklenme).'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Pestisit (Böcek zehri) kullanılan bir tarlada sadece böcekler (Av) direnç kazanıp evrimleşmez. Aynı zamanda bu böcekleri yiyerek beslenen Kuşların (Avcı) da gaga yapısında veya zehri sindirme enzimlerinde (Avcı Adaptasyonu) değişimler gözlenebilir. Bu "Av ve Avcının birbirini değişime zorlaması" evrimsel olarak nedir?',
        options: [
          { id: 'A', text: 'Yapay Seçilim' },
          { id: 'B', text: 'Ko-Evrim (Birlikte Evrim / Evrimsel Silahlanma Yarışı)' },
          { id: 'C', text: 'Modifikasyon' },
          { id: 'D', text: 'Dengeleyici Seçilim' },
          { id: 'E', text: 'Aklimatizasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Avcı hızlanır (Avcı adaptasyonu), Av onu görüp daha iyi saklanmaya (Kamuflaj adaptasyonu) başlar. Avcı koku duyusunu geliştirir... Bu birbiri ardına gelişen seçilim yarışına Ko-evrim denir.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: '"Darwin\'in Fincanları (İspinoz Kuşları)" örneğinde, aynı atadan gelen kuşların farklı kaktüsleri ve tohumları yemek için FARKLI GAGALAR geliştirmesi süreci, günümüzde BİYOTEKNOLOJİ ile nasıl KISA SÜREDE KANITLANABİLİR?',
        options: [
          { id: 'A', text: 'Kuşları boyayarak' },
          { id: 'B', text: 'Kuşların sadece boyunu ölçerek' },
          { id: 'C', text: 'Kuşların "DNA Dizilimlerini (Genomlarını)" karşılaştırıp, gaga gelişiminden sorumlu spesifik genlerin (Örn: ALX1 geni) mutasyonlarını analiz ederek.' },
          { id: 'D', text: 'Kuşları kafese kapatarak' },
          { id: 'E', text: 'Kuşlara sadece su vererek' }
        ],
        correctOptionId: 'C',
        explanation: 'Modern evrim bilimi (Sentetik teori), sadece dış görünüşe (Fenotipe) bakmaz. Moleküler biyoloji sayesinde genetik kod okunur ve "Gagayı büyüten mutasyonun DNA\'daki yeri" tam olarak tespit edilir.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Eğer dünya üzerindeki HERHANGİ BİR TÜRE (Örn: Çitalara), Milyonlarca Yıl boyunca HİÇBİR "Mutasyon" ve "Krossing-over" işlemi etki etmeseydi, günümüzde bu türün HANGİ DURUMDA olması beklenirdi?',
        options: [
          { id: 'A', text: 'Dünyayı ele geçirmiş olurlardı.' },
          { id: 'B', text: 'İnsana dönüşmüş olurlardı.' },
          { id: 'C', text: 'Tüm popülasyon TIPATIP AYNI (Klon/Genetik Varyasyonsuz) olurdu ve değişen çevre (İklim krizleri) karşısında çoktan YOK OLMUŞ (Soyu tükenmiş) olurlardı.' },
          { id: 'D', text: 'Sadece renkleri değişirdi.' },
          { id: 'E', text: 'Daha büyük olurlardı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mutasyon ve Mayoz (Varyasyon kaynağı) olmadan evrim olmaz. Evrim olmadan değişen dünyaya uyum sağlanamaz. Uyum sağlanamayan tür tükenir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Adaptasyonların özellikleri dikkate alındığında, aşağıdaki ifadelerden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Kalıtsaldır, dölden döle aktarılır.' },
          { id: 'B', text: 'Oluşumları nesiller sürer (Doğal seçilim süreciyle).' },
          { id: 'C', text: 'Bireyin bulunduğu o spesifik ortama (Habitata) uyumunu (Fitness\'ını) artırır.' },
          { id: 'D', text: 'Bireyin yaşamı boyunca ÇEVRENİN ETKİSİYLE ANINDA oluşur ve çevre değişince YOK OLUR.' },
          { id: 'E', text: 'Genlerin (DNA) yapısında meydana gelen değişmeler sonucu oluşur.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki tanım Adaptasyonun değil, "Modifikasyonun veya Aklimatizasyonun" tanımıdır. Adaptasyon (örn: zürafa boynu) doğuştandır, sonradan "anında" oluşmaz, genlere kazınmıştır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Bölümün Tüm Kazanımlarının Sınanması (Medium)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Doğal Seçilim ile ilgili olarak: \nI. Bireyin yaşadığı çevreye uyumunu (Fitness) artırır.\nII. Popülasyondaki gen (alel) frekanslarını (sıklığını) değiştirir.\nIII. Her zaman canlıyı daha "Karmaşık (Gelişmiş)" bir yapıya doğru evrimleştirir.\nİfadelerinden hangileri KESİNLİKLE DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'Yalnız II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal seçilim uyumu (I) artırır ve gen frekansını değiştirir (II). Ancak her zaman karmaşaya gitmez (III Yanlış). Örneğin mağara balıkları gözlerini (karmaşık bir organı) kaybederek basitleşmiş ama ortama daha uyumlu (enerji tasarrufu) hale gelmiştir.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Antibiyotiklerin bilinçsiz kullanımı sonucu "Süper Bakterilerin (Çoklu Dirençli)" ortaya çıkması süreci; \n1. Hastalık, \n2. İlaç, \n3. Bakteri, \n4. İnsan \nunsurlarından hangisinin "EVRİMLEŞMESİ (Genetik değişimi)" ile sonuçlanan bir olaydır?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3 (Bakteri)' },
          { id: 'D', text: '4' },
          { id: 'E', text: 'Hiçbiri' }
        ],
        correctOptionId: 'C',
        explanation: 'İlaç (çevre baskısıdır) evrimleşmez, insan evrimleşmez. İlacın baskısıyla ölenlerin elenip, kalanların çoğalması sonucu BİYOLOJİK OLARAK EVRİMLEŞEN (Genleri değişen) canlı Bakteridir.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: '"Aklimatizasyon", bir canlının yeni çevre şartlarına fizyolojik olarak uyum sağlamasıdır (Örn: Dağa çıkan insanın alyuvar sayısının artması). Aklimatizasyonun, "Kalıtsal Adaptasyondan" EVRİMSEL AÇIDAN EN ÖNEMLİ FARKI nedir?',
        options: [
          { id: 'A', text: 'Daha yavaş olması' },
          { id: 'B', text: 'Aklimatizasyonun GERİ DÖNÜŞLÜ OLMASI (Dağdan inince normale döner) ve ÜREME HÜCRELERİNDEKİ GENETİK ŞİFREYİ DEĞİŞTİRMEDİĞİ İÇİN (Yavruya aktarılmaz) evrime doğrudan hammadde SAĞLAMAMASI.' },
          { id: 'C', text: 'Sadece memelilerde görülmesi' },
          { id: 'D', text: 'Mutasyona sebep olması' },
          { id: 'E', text: 'Daha ölümcül olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Aklimatizasyon (ve Modifikasyon) genin YAPISINI (DNA dizilimini) değil, İŞLEYİŞİNİ (fenotipi) geçici olarak değiştirir. Sperm/Yumurtaya yansımadığı için evrim mekanizması değildir.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Darwin, teorisini açıklarken "Yapay Seçilim (Örn: İnsanların en çok süt veren inekleri çiftleştirerek yeni inek ırkları yaratması)" örneklerini çok kullanmıştır. Darwin\'in Doğal Seçilimi anlatmak için Yapay Seçilimi örnek göstermesinin ANA MANTIĞI nedir?',
        options: [
          { id: 'A', text: 'İnsanların inekleri çok sevmesi' },
          { id: 'B', text: 'Eğer "İnsan (Seçici Güç)", sadece BİRKAÇ BİN YILDA istediği özellikleri kayırarak kurttan köpek, yaban otundan mısır yaratabiliyorsa; "DOĞA (Çevre Baskısı)" MİLYONLARCA YILDA çok daha büyük değişimler (Yeni türler) yaratabilir fikrini ispatlamak.' },
          { id: 'C', text: 'Doğanın insandan daha zayıf olduğunu göstermek' },
          { id: 'D', text: 'İneklerin mutasyon geçirdiğini göstermek' },
          { id: 'E', text: 'Sadece tarımın önemini vurgulamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapay seçilim, Doğal seçilimin "Hızlandırılmış ve laboratuvar" versiyonudur. İnsanların bin yılda yaptığı evrimi (seçilimi), Doğa milyonlarca yılda çok daha acımasızca yapmaktadır.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Bir okyanus adasında hem açık renkli (kumluk) hem de koyu renkli (volkanik kayalık) bölgeler yan yanadır. Bu adadaki bir yengeç türünde; AÇIK renkli ve KOYU renkli yengeçler (İki Uç Değer) avcılardan saklanarak iyi ürerken, ORTA RENKLİ yengeçler (Kuma da kayaya da uymayanlar) avcılar tarafından yenilip yok olmaktadır. \nBu olay hangi seçilim tipine örnektir?',
        options: [
          { id: 'A', text: 'Yönlendirici Seçilim' },
          { id: 'B', text: 'Dengeleyici Seçilim' },
          { id: 'C', text: 'Bozucu (Disruptive) Seçilim (Ortalama tipin elenip, İKİ UÇ TİPİN DE kayırılması)' },
          { id: 'D', text: 'Yapay Seçilim' },
          { id: 'E', text: 'Cinsel Seçilim' }
        ],
        correctOptionId: 'C',
        explanation: 'Dengeleyicinin tam tersidir. Ortadaki (ortalama) renk her yerde kabak gibi sırıtır ve yenir. Açık uç (kumda) ve koyu uç (kayada) kurtulur. Popülasyon iki farklı fenotipe (uçlara) bölünür (Bozucu Seçilim).'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Küresel ısınma nedeniyle kutuplardaki buzullar çok hızlı erimektedir. Kutup ayılarının (ki postları beyazdır ve fok avlamak için buzula ihtiyaç duyarlar) HIZLI BİR ŞEKİLDE evrimleşerek "Orman ayısına (Boz ayıya)" dönüşüp hayatta kalması NEDEN BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Çünkü çok tembellerdir' },
          { id: 'B', text: 'Çünkü evrim (Yararlı bir mutasyonun çıkması, seçilmesi ve popülasyona yayılması) ÇOK UZUN NESİLLER VE ZAMAN gerektirir. Çevresel değişim (Buzul erimesi) ise EVRİM HIZINDAN ÇOK DAHA HIZLI gerçekleşmektedir.' },
          { id: 'C', text: 'Çünkü beyaz renk her yerde iyidir' },
          { id: 'D', text: 'Çünkü ayılar mitoz geçirmez' },
          { id: 'E', text: 'Çünkü modifikasyonları yoktur' }
        ],
        correctOptionId: 'B',
        explanation: 'Türlerin tükenmesinin ana sebebi çevrenin "Evrim hızından çok daha hızlı" değişmesidir. Kutup ayısı gen havuzunda kahverengi gen (varyasyon) yoksa, o genin mutasyonla şans eseri çıkmasını bekleyecek vakit (binlerce yıl) de kalmamıştır.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Bakterilerin direnç kazanma mekanizmalarından biri olan "Plazmit Transferi (Konjugasyon - Yatay Gen Aktarımı)", enfeksiyon hastalıklarının tedavisini neden çok zorlaştırır?',
        options: [
          { id: 'A', text: 'Bakteriyi öldürdüğü için' },
          { id: 'B', text: 'Direnç geninin YALNIZCA o bakterinin yavrularına değil, HASTANEDEKİ TAMAMEN FARKLI TÜR BİR BAKTERİYE (Örn: Zararsız bir bağırsak bakterisinden, ölümcül bir akciğer bakterisine) BİLE ANINDA BULAŞABİLMESİNİ (Kopyalanmasını) sağladığı için.' },
          { id: 'C', text: 'Bakteriyi zayıflattığı için' },
          { id: 'D', text: 'Bakteriyi virüse çevirdiği için' },
          { id: 'E', text: 'Plazmitler sahte olduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Yatay gen aktarımı (Konjugasyon), direncin sınır tanımazlığını gösterir. Tür bariyeri yoktur. Zararsız ama dirençli bakteri, direnç dosyasını (Plazmiti) bluetooth (Pilus) ile ölümcül bakteriye atabilir.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Bir tarlada Yabani Otlara karşı Zirai İlaç (Herbisit) kullanılıyor. 1. Yıl otların %99\'u ölüyor. 5. Yıl aynı ilaç otların sadece %10\'unu öldürebiliyor. \nİlacı satan firma "İlacımız otları güçlendirdi (Mutasyon yaptı)" diyor. Bir Biyolog ise firmanın hatalı olduğunu, gerçekte ne olduğunu nasıl açıklar?',
        options: [
          { id: 'A', text: '"Haklısınız, ilaç otun DNA\'sını hedef alıp güçlendirmiş."' },
          { id: 'B', text: '"İlaç otları bilerek zehirlememiştir."' },
          { id: 'C', text: '"İlaç mutasyon YAPMAZ. İlaç sadece bir ELEKTİR (Doğal Seçilim Baskısı). 1. Yıl tarladaki %1\'lik DİRENÇLİ VARYASYON (Zaten var olan mutantlar) hayatta kaldı ve üredi. 5. Yıl tarladaki otların çoğu o %1\'in çocukları (Dirençli Popülasyon) olduğu için ilaç işe yaramıyor."' },
          { id: 'D', text: '"Otlar ilacı yiyerek büyümüştür."' },
          { id: 'E', text: '"İlacın son kullanma tarihi geçmiştir."' }
        ],
        correctOptionId: 'C',
        explanation: 'İlaç "yeni güç (mutasyon)" vermez, var olan güçlüleri "seçer". Zayıfları öldürerek meydanı güçlü genetik kopyalara (dirençlilere) bırakır.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Canlıların evrimsel tarihinde "Ortak Ata (Common Ancestor)" kavramını KANITLAMAK için bilim insanları en KESİN veriyi hangisinden elde ederler?',
        options: [
          { id: 'A', text: 'Sadece canlının boyuna bakarak' },
          { id: 'B', text: 'Dış görünüşlerinin aynı olmasına bakarak' },
          { id: 'C', text: 'DNA Dizilimlerine, Genom (Nükleotit) ve Protein (Amino asit) dizilim benzerliklerine bakarak.' },
          { id: 'D', text: 'Yaşadıkları yere bakarak' },
          { id: 'E', text: 'Yedikleri yemeğe bakarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Dış görünüş (Analog organ/Köpekbalığı ile Yunus) yanıltıcı olabilir. Ama DNA şifresi (A, T, G, C dizilimi) yalan söylemez. İki canlının DNA\'sı ne kadar benziyorsa, ortak ataları o kadar yakın geçmişte yaşamıştır.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Doğal Seçilim ile ilgili "Sadece EN GÜÇLÜ olan hayatta kalır" sözü neden BİYOLOJİK OLARAK TAM DOĞRU DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Çünkü her zaman en zayıflar yaşar.' },
          { id: 'B', text: 'Çünkü kas gücünün hiçbir önemi yoktur.' },
          { id: 'C', text: 'Evrimde mesele GÜÇ (Kas/İrilik) değil, UYUM (Fitness) ve ÜREMEDİR. Çevre değiştiğinde devasa bir dinozor ölebilirken, çok zayıf/küçük bir fare o ortama uyum sağlayıp (az besinle yaşayıp) türünü devam ettirebilir.' },
          { id: 'D', text: 'Çünkü evrim güçle beslenir.' },
          { id: 'E', text: 'Çünkü güçlüler mitoz geçirir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada "En Güçlü (Strongest)" değil, "En Uyumlu (Fittest)" olan hayatta kalır. Göktaşı düştüğünde (Çevre çok soğuyup besin bittiğinde) kaslı ve dev T-Rex ölmüş, ama yer altındaki küçük, faremsi ilk memeli atalarımız hayatta kalmıştır.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'İleri Düzey Analiz, Deney ve Çıkarım (Hard)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Bir adada yaşayan bir kertenkele popülasyonuna ait 30 yıllık veri inceleniyor. \n- 1. Yıl: Popülasyonun gen havuzunda %20 A geni, %80 B geni var. (B geni kısa bacak, A geni uzun bacak yapıyor).\n- 15. Yıl (Adaya hızlı koşan bir yılan türü/avcı geliyor): A geni %50, B geni %50 oluyor.\n- 30. Yıl: A geni %90, B geni %10 oluyor.\nBu veriye göre aşağıdaki çıkarımlardan hangisi YAPILAMAZ?',
        options: [
          { id: 'A', text: 'Evrim gerçekleşmiştir (Çünkü popülasyonun gen frekansı nesiller içinde değişmiştir).' },
          { id: 'B', text: 'Adaya gelen Yılan, bir Doğal Seçilim Baskısı oluşturmuştur.' },
          { id: 'C', text: 'Uzun bacak (A geni), avcıdan kaçmak için daha YÜKSEK BİR UYUM (Fitness) sağlamıştır.' },
          { id: 'D', text: 'Kısa bacaklı (B geni) kertenkeleler YÖNLENDİRİCİ SEÇİLİME uğrayarak elenmeye başlamıştır.' },
          { id: 'E', text: 'Yılan geldikten sonra kertenkeleler BİLİNÇLİ OLARAK ve İSTEYEREK bacaklarını uzatacak mutasyonu kendileri üretmiştir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Mutasyonlar BİLİNÇLİ ve İHTİYACA GÖRE OLMAZ, rastgeledir. Uzun bacak geni (A) 1. Yılda (%20) ZATEN VARDI. Yılan (Avcı) sadece zaten var olan bu A genini AVANTAJLI kıldı ve seçti.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Eğer "Zararlı ve Öldürücü Mutasyonlar" Doğal Seçilimle sürekli eleniyorsa, gen havuzunda "ÖLÜMCÜL (Lethal) ÇEKİNİK (Resesif)" bir genin (Örn: SMA veya Kistik Fibrozis geni) sıklığı neden HİÇBİR ZAMAN SIFIRA İNMEZ (Tamamen yok olmaz)?',
        options: [
          { id: 'A', text: 'Hastalık geni dominant olduğu için' },
          { id: 'B', text: 'Öldürücü ÇEKİNİK (a) genler, HETEROZİGOT (Aa) Taşıyıcı bireylerin bünyesinde "Gizlenerek (Fenotipe yansımadan)" elenmekten kurtulur ve nesilden nesile Doğal Seçilimden saklanarak aktarılır.' },
          { id: 'C', text: 'Hastalığın faydalı olması nedeniyle' },
          { id: 'D', text: 'Doğal seçilimin insana etki etmemesi nedeniyle' },
          { id: 'E', text: 'Mutasyonların hemen iyileşmesi nedeniyle' }
        ],
        correctOptionId: 'B',
        explanation: 'Çekinik (Resesif) genler sinsi taşıyıcılar (Aa) sayesinde korunur. "Aa" birey hastalanmaz (sağlıklıdır), bu yüzden Doğal Seçilim onu öldürmez. Ancak içindeki "a" genini yavrularına (taşıyıcı olarak) geçirmeye devam eder.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bir bakteri popülasyonunu penisilinli ortama ektiğinizde, %99.9\'u ölür, %0.1\'i (Dirençli olanlar) yaşar ve çoğalır. \nEğer BAŞLANGIÇTAKİ bakteri popülasyonunda HİÇBİR genetik varyasyon (Direnç geni/mutasyonu) OLMASAYDI ve tüm popülasyon TAMAMEN KLON (Aynı DNA) olsaydı, penisilin eklendiğinde ne olurdu?',
        options: [
          { id: 'A', text: 'Bakteriler anında direnç mutasyonu geçirirdi.' },
          { id: 'B', text: 'Bakterilerin tamamı (%100\'ü) ÖLÜRDÜ ve popülasyonun soyu TÜKENİRDİ. (Çünkü seçilimin seçeceği "uyumlu hammadde/varyasyon" YOKTUR).' },
          { id: 'C', text: 'Penisilin ilaca dönüşürdü.' },
          { id: 'D', text: 'Bakteriler modifikasyonla zırh yapardı.' },
          { id: 'E', text: 'Yarı yarıya ölürlerdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal seçilim "Yaratıcı" değildir, "Seçici"dir. Gen havuzunda kurtuluş bileti (direnç varyasyonu) hiç yoksa, felaket (ilaç) geldiğinde seçilim işlemi türün tamamen yok olmasıyla (Yok oluş) sonuçlanır.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Charles Darwin evrim teorisini kurarken, Gregor Mendel\'in "Kalıtım ve Genetik" kurallarından HABERSİZDİ. (DNA, Gen ve Mutasyon kavramlarını bilmiyordu).\nBuna göre Darwin, Doğal Seçilim Teorisinin EN ÇOK HANGİ BASAMAĞINI açıklamakta eksik/yetersiz kalmıştır?',
        options: [
          { id: 'A', text: 'Canlıların neden çok ürediğini' },
          { id: 'B', text: 'Kaynakların neden sınırlı olduğunu' },
          { id: 'C', text: 'Popülasyonlardaki KALITSAL VARYASYONLARIN (Farklılıkların) moleküler olarak NASIL ORTAYA ÇIKTIĞINI ve nesilden nesile NASIL AKTARILDIĞINI (DNA/Gen mekanizmasını).' },
          { id: 'D', text: 'Zayıfların neden elendiğini' },
          { id: 'E', text: 'Adaların neden izole olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Darwin "canlılar birbirinden farklıdır (varyasyon) ve güçlü olan seçilir" dedi. Ama "Bu farklılıklar NEREDEN geliyor? (Mutasyon)" ve "Yavruya NASIL geçiyor? (Gen/DNA)" sorularının cevabını (Genetiği) bilmiyordu.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: '[Deney]: Bir tarım zararlısına karşı X ilacı kullanılıyor. 10 yıl sonra X ilacına tamamen dirençli (Süper böcek) bir popülasyon oluşuyor. \nÇiftçiler X ilacını KULLANMAYI TAMAMEN BIRAKIYOR ve tarlaya 15 yıl boyunca HİÇ İLAÇ ATMIYOR.\n15 yıl sonra (X ilacı yokken), eski "Dirençli Böceklerin" yavaş yavaş elendiği ve popülasyonun TEKRAR DİRENÇSİZ HALE döndüğü görülüyor.\nEvrimsel biyolojide bu duruma (Direnç kaybına) ne ad verilir ve sebebi nedir?',
        options: [
          { id: 'A', text: 'Çünkü böcekler ilacı özlemiştir.' },
          { id: 'B', text: 'Mutasyonların tersine dönmesi yasası.' },
          { id: 'C', text: 'DİRENÇ MALİYETİ (Fitness Cost). İlaç (Baskı) ortadan kalktığında, "Direnç/Zırh genini" üretmek için boşa enerji harcayan böceklerin (Dezavantajlı duruma düşmesi), enerjisini sadece üremeye harcayan Dirençsiz (Normal) böceklere Doğal Seçilimde YENİLMESİ.' },
          { id: 'D', text: 'Böceklerin modifikasyon geçirmesi.' },
          { id: 'E', text: 'Böceklerin aklimatize olması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Evrimde her adaptasyonun bir "maliyeti" vardır. Kurşun geçirmez yelek (Direnç) savaşta (İlaçlı tarla) sizi kurtarır ama barışta (İlaçsız tarla) sırtınızda sadece boş bir ağırlıktır (Enerji kaybı). Barış zamanında yeleği çıkaran (Dirençsiz) daha hızlı koşar ve ürer.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'İki akraba türün evrimsel süreçte birbirinden GİDEREK FARKLI (Uzak) özellikler kazanmasına "Iraksak (Divergent) Evrim", Birbirine AKRABA OLMAYAN farklı türlerin (Örn: Köpekbalığı ve Yunus) aynı çevre şartlarında GİDEREK BENZER özellikler (Örn: Torpido vücut) kazanmasına "Yakınsak (Convergent) Evrim" denir.\nBuna göre "Yakınsak Evrim (Benzeme)" Doğal Seçilim hakkında bize ne kanıtlar?',
        options: [
          { id: 'A', text: 'Köpekbalığının memeli olduğunu' },
          { id: 'B', text: 'Yunusun balık olduğunu' },
          { id: 'C', text: 'AYNI ÇEVRE BASKILARININ (Örn: Suda hızlı yüzme ihtiyacı), genetik olarak FARKLI canlılarda BİLE "AYNI ADAPTASYONLARI (Fiziksel Çözümleri)" SEÇTİĞİNİ.' },
          { id: 'D', text: 'Evrimin tamamen rastgele olduğunu' },
          { id: 'E', text: 'Karadaki canlıların suda yaşayamayacağını' }
        ],
        correctOptionId: 'C',
        explanation: 'Yunus (Memeli), Penguen (Kuş), İhtiyozor (Sürüngen) ve Köpekbalığı (Balık)... Hepsinin ortak atası çok farklıdır ama suda "Hızlı yüzmek" istiyorsan, suyun hidrodinamiği (çevre baskısı) sana tek bir şekil dayatır: Torpido/Mekik Şekli (Yakınsak Evrim).'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Doğada "Ko-Evrim (Birlikte Evrim)" en çok Av-Avcı ve Parazit-Konak ilişkilerinde görülür. \nÇita (Avcı) hızlanır, Ceylan (Av) onu görünce hızlanmak üzere evrimleşir (Sadece hızlı ceylanlar kurtulur). \nBuna Evrimsel Biyolojide "Kızıl Kraliçe Hipotezi (Red Queen Hypothesis)" denir. Bu hipotezin ANA FİKRİ nedir?',
        options: [
          { id: 'A', text: 'Canlıların hep aynı yerde kalmak (hayatta kalmak) için bile SÜREKLİ EVRİMLEŞMEK/KOŞMAK ZORUNDA OLDUĞU (Çünkü düşman da sürekli gelişmektedir).' },
          { id: 'B', text: 'Dişilerin doğada daha güçlü olduğu.' },
          { id: 'C', text: 'Avcıların her zaman avları yiyeceği.' },
          { id: 'D', text: 'Mutasyonların kraliçe arılarda olduğu.' },
          { id: 'E', text: 'Evrimin bir sonu (mükemmellik noktası) olduğu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Alice Harikalar Diyarı\'ndaki Kızıl Kraliçe der ki: "Burada aynı yerde kalabilmek için olanca gücünle koşmalısın." Doğada da böyledir. Sen (Ceylan) durursan, düşmanın (Çita) evrimleştiği için seni yok eder. Hayatta kalmak, sürekli bir evrimsel silahlanma yarışıdır.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Endüstriyel Melanizm (Sanayi Devrimindeki Kelebekler) olayı Doğal Seçilimin çok ünlü bir kanıtıdır. \nİngiltere\'de sanayi öncesi (1850) ağaçlar likenlerle kaplı AÇIK renklidir ve %99 Açık renk kelebek, %1 Koyu kelebek (Mutant varyasyon) vardır. \nSanayi sonrası (1900) kurumla ağaçlar SİYAH olur, kuşlar açık olanları yer ve Koyu kelebek oranı %95\'e çıkar.\nBurada "KOYU (Melanik)" olma geni ile ilgili en doğru tespit nedir?',
        options: [
          { id: 'A', text: 'Koyu gen mutasyonu, sanayi devrimi olunca kelebekler bilerek kurum ürettiği için çıkmıştır.' },
          { id: 'B', text: 'Koyu renk geni EN BAŞINDAN BERİ VARYASYON OLARAK VARDIR (Rastgele çıkmıştır), sadece çevre açık renkliyken "Dezavantajlı (Düşük Fitness)" olduğu için Doğal Seçilimce baskılanmıştır (Oranı %1). Çevre kirlenince AVANTAJLI (Yüksek Fitness) duruma geçmiş ve Seçilim yön değiştirmiştir.' },
          { id: 'C', text: 'Kelebekler modifikasyonla siyaha boyanmıştır.' },
          { id: 'D', text: 'Likenler kelebekleri yemiştir.' },
          { id: 'E', text: 'Koyu gen yapay seçilimdir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrim "İhtiyaç anında gen/mutasyon yaratmaz". Koyu (Siyah) mutantlar hep doğuyordu ama beyaz ağaçta hemen avlanıp öldükleri için frekansları %1\'di. Çevre (ağaç) siyahlaşınca, bu sefer beyazlar yenmeye başladı. Avantaj/Dezavantaj kavramı tamamen GÜNCEL ÇEVREYE göredir.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Modern Evrimsel Sentez (Neo-Darwinizm), Darwin\'in Doğal Seçilimi ile Mendel\'in Genetiğini BİRLEŞTİRİR. \nBuna göre evrim, "Bireylerin" değişiminden ziyade, "POPÜLASYONUN GEN HAVUZUNDAKİ ALEL FREKANSLARININ (Gen sıklıklarının) NESİLLER İÇİNDEKİ DEĞİŞİMİ" olarak tanımlanır.\nBu tanıma göre evrimin gerçekleşmesi İÇİN ŞART OLMAYAN (Hatta evrimi durduran) faktör hangisidir?',
        options: [
          { id: 'A', text: 'Doğal Seçilim (Eleme ve Kayırma)' },
          { id: 'B', text: 'Mutasyonlar (Yeni alel/genetik hammadde girişi)' },
          { id: 'C', text: 'Gen Akışı (Göçlerle yeni genlerin gelmesi)' },
          { id: 'D', text: 'Hardy-Weinberg Dengesi (Rastgele çiftleşen, mutasyon/göç/seçilim OLMAYAN İdeal ve Sabit bir Gen Havuzu Durumu)' },
          { id: 'E', text: 'Darboğaz Etkisi (Rastgele kayıplar)' }
        ],
        correctOptionId: 'D',
        explanation: 'Hardy-Weinberg Kuralı, bir popülasyonun EVRİMLEŞMEDİĞİ (Frekansların sabit kaldığı) teorik "Denge" anıdır. Doğada bu denge mutasyon, göç, seçilim gibi faktörlerle SÜREKLİ BOZULUR ve işte bu bozulmaya EVRİM (Alel frekans değişimi) denir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: '"Antibiyotikler hastalandığımızda bizi (insanı) İYİLEŞTİREN, ama aynı zamanda Gelecek Nesilleri (İnsanlığı) BÜYÜK BİR TEHLİKEYE ATAN (Dirençli bakteriler yaratarak) iki ucu keskin kılıçlardır."\nBu paradoksu EVRİMSEL BİYOLOJİ AÇISINDAN en iyi özetleyen cümle hangisidir?',
        options: [
          { id: 'A', text: 'İlaçlar mideye zarar verir ama ateşi düşürür.' },
          { id: 'B', text: 'İlaçlar bakteriyi modifikasyona uğratarak güçlendirir.' },
          { id: 'C', text: 'BİREYSEL seviyede ilaç hayat kurtarır (Bakterileri öldürür), ancak POPÜLASYON seviyesinde "Sürekli bir Yapay (Kimyasal) Doğal Seçilim Baskısı" yaratarak, DİRENÇLİ (Ölümsüz) mutantların SÜZÜLÜP ÇOĞALMASINA ve tüm insanlığı tehdit edecek bir "Süper Patojen Evrimine" YOL AÇAR.' },
          { id: 'D', text: 'Antibiyotikler virüsleri de öldürdüğü için tehlikelidir.' },
          { id: 'E', text: 'Bakteriler ilaçları besin olarak kullanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bugün hayatınızı kurtaran (zayıf bakterileri temizleyen) hap, yarın o hapı etkisiz kılan "Dirençli Azınlığın" hayatta kalıp milyarlarca kopyasını üretmesine zemin hazırlar (Doğal Seçilim). Gereksiz ilaç kullanımı, bu evrimsel seçilimi (felaketi) hızlandırmaktan başka bir işe yaramaz.'
      }
    ]
  }
]
