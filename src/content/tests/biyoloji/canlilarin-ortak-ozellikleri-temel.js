export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Canlılık Kavramı ve Hücresel Yapı (Very Easy)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Canlıları; canlıların yapı ve işlevlerini, birbirleriyle ve çevreleriyle ilişkilerini inceleyen bilim dalına ne ad verilir?',
        options: [
          { id: 'A', text: 'Fizik' },
          { id: 'B', text: 'Kimya' },
          { id: 'C', text: 'Biyoloji' },
          { id: 'D', text: 'Astronomi' },
          { id: 'E', text: 'Jeoloji' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyoloji, canlıları ve canlılık olaylarını inceleyen bilim dalıdır (Bios: yaşam, Logos: bilim).'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Bir varlığın "canlı" kabul edilebilmesi için bazı özelliklere sahip olması gerekir. Aşağıdakilerden hangisi bu özelliklerden biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Hücresel yapıya sahip olma' },
          { id: 'B', text: 'Metabolizma faaliyetleri yürütme' },
          { id: 'C', text: 'Sonsuza kadar yaşama' },
          { id: 'D', text: 'Uyarılara tepki verme' },
          { id: 'E', text: 'Kalıtsal bilgi taşıma (DNA/RNA)' }
        ],
        correctOptionId: 'C',
        explanation: 'Hiçbir canlı sonsuza kadar yaşamaz (ölümsüz değildir). Ancak hücresel yapı, metabolizma, tepki verme ve kalıtsal bilgi taşıma canlılığın ortak özelliklerindendir.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Kristaller dışarıdan madde eklenerek büyüyebilir, makineler hareket edebilir. Ancak bunlar canlı sayılmazlar. Bunun EN TEMEL nedeni nedir?',
        options: [
          { id: 'A', text: 'Canlılığın tek bir özellikle değil; hücresel yapı, metabolizma, homeostazi gibi özelliklerin BİRLİKTE bulunmasıyla tanımlanması.' },
          { id: 'B', text: 'Makinelerin çok ses çıkarması.' },
          { id: 'C', text: 'Kristallerin çok sert olması.' },
          { id: 'D', text: 'Makinelerin elektrikle çalışması.' },
          { id: 'E', text: 'Kristallerin renkli olması.' }
        ],
        correctOptionId: 'A',
        explanation: 'Canlılık tek bir belirti (sadece büyüme veya hareket) ile belirlenmez. Tüm yaşamsal faaliyetlerin (metabolizma, hücresel yapı vb.) bağlantılı olarak bir arada bulunması gerekir.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Canlıların yapısal ve işlevsel en küçük birimine ne ad verilir?',
        options: [
          { id: 'A', text: 'Organ' },
          { id: 'B', text: 'Hücre' },
          { id: 'C', text: 'Doku' },
          { id: 'D', text: 'Sistem' },
          { id: 'E', text: 'Organizma' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre, canlıların yapısal (onlardan oluştuğu için) ve işlevsel (metabolizmanın gerçekleştiği yer olduğu için) en küçük birimidir.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Bütün hücresel canlılarda; hücreyi dış ortamdan ayıran, sınırını oluşturan ve madde alışverişini düzenleyen yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Çekirdek' },
          { id: 'B', text: 'Mitokondri' },
          { id: 'C', text: 'Hücre Zarı' },
          { id: 'D', text: 'Hücre Çeperi (Duvarı)' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre zarı, her hücrenin (prokaryot veya ökaryot) dış sınırını çizer ve madde geçişlerini kontrol eder. Ortak bir yapıdır.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Bütün canlı hücrelerin içinde bulunan, organellerin yer aldığı ve birçok metabolik tepkimenin gerçekleştiği sıvı/yarı sıvı bölgeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Ribozom' },
          { id: 'B', text: 'Sitoplazma' },
          { id: 'C', text: 'Hücre zarı' },
          { id: 'D', text: 'Golgi' },
          { id: 'E', text: 'DNA' }
        ],
        correctOptionId: 'B',
        explanation: 'Sitoplazma, hücre zarı ile (varsa) çekirdek arasında kalan, yaşamsal olayların geçtiği sıvı kısımdır ve tüm canlı hücrelerde bulunur.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Tüm hücresel canlılarda ortak olarak bulunan ve PROTEİN SENTEZİ yapmakla görevli olan zarsız organel hangisidir?',
        options: [
          { id: 'A', text: 'Mitokondri' },
          { id: 'B', text: 'Lizozom' },
          { id: 'C', text: 'Ribozom' },
          { id: 'D', text: 'Çekirdek' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'C',
        explanation: 'Ribozom zarsız bir organeldir. Prokaryot ve ökaryot ayırt etmeksizin tüm canlı hücrelerde bulunur ve protein sentezi yapar.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Hücresel canlılarda yapıyı ve faaliyetleri yönlendiren kalıtsal bilgiyi TAŞIYAN temel yönetici molekül hangisidir?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'DNA' },
          { id: 'D', text: 'ATP' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA (Deoksiribonükleik Asit), hücrenin tüm şifresini (kalıtsal bilgiyi) taşıyan ve nesilden nesile aktaran ana moleküldür.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Canlıların hücre tipleri yapılarına göre Prokaryot ve Ökaryot olarak ikiye ayrılır. Aşağıdakilerden hangisi PROKARYOT hücrenin en belirgin özelliğidir?',
        options: [
          { id: 'A', text: 'Zarla çevrili bir çekirdeğinin ve zarlı organellerinin OLMAMASI' },
          { id: 'B', text: 'Hücre zarının bulunmaması' },
          { id: 'C', text: 'Ribozomunun olmaması' },
          { id: 'D', text: 'Sadece çok hücreli olmaları' },
          { id: 'E', text: 'DNA taşımaması' }
        ],
        correctOptionId: 'A',
        explanation: 'Prokaryot hücrelerin (Bakteri ve Arkeler) en temel özelliği gerçek bir çekirdeklerinin ve zarlı organellerinin (mitokondri, golgi vb.) olmamasıdır. DNA\'ları sitoplazmada dağınıktır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'ÖKARYOT bir hücre, Prokaryot bir hücreden farklı olarak hangi yapılara sahiptir?',
        options: [
          { id: 'A', text: 'Hücre zarı ve sitoplazma' },
          { id: 'B', text: 'DNA ve RNA' },
          { id: 'C', text: 'Zarla çevrili ÇEKİRDEK ve ZARLI ORGANELLER' },
          { id: 'D', text: 'Ribozom' },
          { id: 'E', text: 'Sadece su' }
        ],
        correctOptionId: 'C',
        explanation: 'Zar, sitoplazma, DNA, RNA ve ribozom her ikisinde de vardır. Zarla çevrili çekirdek ve zarlı organeller SADECE ökaryotlarda bulunur.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Aşağıdaki canlı gruplarından hangisi PROKARYOT hücre yapısına sahiptir?',
        options: [
          { id: 'A', text: 'Bakteriler ve Arkeler' },
          { id: 'B', text: 'Bitkiler' },
          { id: 'C', text: 'Hayvanlar' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'İnsanlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Bakteriler ve arkeler yeryüzündeki prokaryot canlılardır. Diğerleri (bitki, hayvan, mantar) ökaryottur.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Bakteriler ve Amip gibi canlılar sadece bir hücreden oluşur. Bitkiler ve Hayvanlar ise binlerce, milyonlarca hücreden oluşur. Buna göre canlılar hücre sayısına göre nasıl sınıflandırılır?',
        options: [
          { id: 'A', text: 'Prokaryot ve Ökaryot' },
          { id: 'B', text: 'Tek Hücreliler ve Çok Hücreliler' },
          { id: 'C', text: 'Ototrof ve Heterotrof' },
          { id: 'D', text: 'Büyük ve Küçük' },
          { id: 'E', text: 'Hareketli ve Hareketsiz' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre "sayısına" göre canlılar Tek hücreli (Bakteri, Amip vb.) ve Çok hücreli (İnsan, Ağaç vb.) olarak ayrılırlar.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: '"Prokaryot organizmaların TAMAMI ...... hücrelidir." Cümledeki boşluğa hangisi gelmelidir?',
        options: [
          { id: 'A', text: 'Çok' },
          { id: 'B', text: 'İki' },
          { id: 'C', text: 'Tek' },
          { id: 'D', text: 'Milyonlarca' },
          { id: 'E', text: 'Yarım' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler ve arkelerin (Prokaryotların) hepsi sadece TEK bir hücreden oluşur. Çok hücreli bir prokaryot yoktur.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Aşağıdaki ifadelerden hangisi BÜTÜN canlılar (hem tek hem çok hücreliler, hem pro hem ökaryotlar) için ORTAK bir özelliktir?',
        options: [
          { id: 'A', text: 'Çekirdeğe sahip olma' },
          { id: 'B', text: 'Çok hücreli olma' },
          { id: 'C', text: 'Hücresel yapıya sahip olma' },
          { id: 'D', text: 'Mitokondri bulundurma' },
          { id: 'E', text: 'Gözlere sahip olma' }
        ],
        correctOptionId: 'C',
        explanation: 'Tipi (Pro/Ökaryot) veya sayısı (Tek/Çok) ne olursa olsun, bir varlığın canlı olması için mutlaka "Hücresel yapıya" sahip olması gerekir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Virüsler (Covid-19, Grip vb.) biyolojide neden tam olarak "canlı" kabul EDİLMEZLER?',
        options: [
          { id: 'A', text: 'Çok büyük oldukları için' },
          { id: 'B', text: 'Hücresel bir yapıya (zar, sitoplazma, ribozom) sahip OLMADIKLARI için' },
          { id: 'C', text: 'DNA/RNA taşıdıkları için' },
          { id: 'D', text: 'İnsanları hasta ettikleri için' },
          { id: 'E', text: 'Çok hızlı hareket ettikleri için' }
        ],
        correctOptionId: 'B',
        explanation: 'Virüslerde hücre zarı, sitoplazma veya ribozom yoktur. Bağımsız yaşayamazlar. Bu hücresel yapı eksikliği onları tam bir canlı yapmaz (sınır varlıklardır).'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Organizasyon ve Metabolizma (Very Easy)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Canlıların yapısındaki birimlerin rastgele değil, belirli bir düzen ve görev dağılımı (iş bölümü) içinde bir araya gelmesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Organizasyon' },
          { id: 'B', text: 'Mutasyon' },
          { id: 'C', text: 'Solunum' },
          { id: 'D', text: 'Terleme' },
          { id: 'E', text: 'Boşaltım' }
        ],
        correctOptionId: 'A',
        explanation: 'Belirli bir düzen ve iş bölümü ile bir araya gelme durumuna organizasyon denir. (Örn: Hücrelerin birleşip doku yapması)'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Çok hücreli gelişmiş bir canlıda organizasyon basamakları küçükten büyüğe doğru nasıl sıralanır?',
        options: [
          { id: 'A', text: 'Organizma → Sistem → Organ → Doku → Hücre' },
          { id: 'B', text: 'Hücre → Doku → Organ → Sistem → Organizma' },
          { id: 'C', text: 'Doku → Hücre → Sistem → Organ → Organizma' },
          { id: 'D', text: 'Hücre → Sistem → Doku → Organ → Organizma' },
          { id: 'E', text: 'Sistem → Doku → Hücre → Organizma → Organ' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücreler Dokuları, Dokular Organları, Organlar Sistemleri, Sistemler de bütün Organizmayı (Canlıyı) oluşturur.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Bir bakteride (tek hücreli) "Doku, Organ ve Sistem" düzeyi GÖRÜLMEZ. Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Bakterilerin bitki olması' },
          { id: 'B', text: 'Bakterilerin zaten SADECE TEK BİR HÜCREDEN oluşması (Doku yapmak için çok hücre gerekir)' },
          { id: 'C', text: 'Bakterilerin çok büyük olması' },
          { id: 'D', text: 'Bakterilerin kemiklerinin olması' },
          { id: 'E', text: 'Bakterilerin uzayda yaşaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Doku ve organlar milyonlarca hücrenin birleşmesiyle olur. Bakteri zaten 1 hücredir, bu yüzden doku-organ seviyesine çıkamaz. Kendi içindeki yapıları (organel vb.) kullanır.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Canlı hücrelerde gerçekleşen YAPIM (Sentez) ve YIKIM (Parçalanma) tepkimelerinin TAMAMINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Metabolizma' },
          { id: 'B', text: 'Fotosentez' },
          { id: 'C', text: 'Homeostazi' },
          { id: 'D', text: 'Organizasyon' },
          { id: 'E', text: 'Adaptasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Canlıdaki tüm kimyasal işlemlere (yapım ve yıkım) metabolizma denir. Metabolizma durursa canlılık biter.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Metabolizmanın YAPIM (Özümleme) kısmına ANABOLİZMA denir. Aşağıdakilerden hangisi bir "Anabolizma (Yapım)" olayıdır?',
        options: [
          { id: 'A', text: 'Büyük bir proteinin küçük parçalara yıkılması' },
          { id: 'B', text: 'Yediğimiz ekmeğin sindirilmesi' },
          { id: 'C', text: 'Basit moleküllerin birleştirilerek büyük PROTEİN üretilmesi (Protein sentezi)' },
          { id: 'D', text: 'Glikozun parçalanarak enerji elde edilmesi' },
          { id: 'E', text: 'Hücrenin küçülmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentez/üretim işleri (Protein sentezi, DNA sentezi vb.) küçük parçalardan büyük parça yapma (Anabolizma) olayıdır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Metabolizmanın YIKIM (Yadımlama) kısmına KATABOLİZMA denir. Aşağıdakilerden hangisi bir "Katabolizma (Yıkım)" olayıdır?',
        options: [
          { id: 'A', text: 'Yeni kas hücrelerinin yapılması' },
          { id: 'B', text: 'Boyun uzaması' },
          { id: 'C', text: 'Yediğimiz besinlerin vücutta parçalanması (SİNDİRİM)' },
          { id: 'D', text: 'Gözyaşı üretilmesi' },
          { id: 'E', text: 'Tohumun büyümesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Büyük molekülleri küçüklere parçalama işi (Sindirim, Solunum vb.) yıkım yani Katabolizmadır.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Hücredeki metabolik tepkimeleri hızlandıran, tepkimenin başlaması için gereken enerjiyi düşüren ve tepkimeden bozulmadan çıkan BİYOLOJİK KATALİZÖRLERE ne denir?',
        options: [
          { id: 'A', text: 'ATP' },
          { id: 'B', text: 'DNA' },
          { id: 'C', text: 'Enzim' },
          { id: 'D', text: 'Yağ' },
          { id: 'E', text: 'Su' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimler, canlıdaki kimyasal işçilerdir. Olayları hızlandırır ve kontrol ederler.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: '"Bütün canlı hücreler METABOLİZMA yürütür ve ENZİM kullanır." Bu ifade doğru mudur?',
        options: [
          { id: 'A', text: 'Hayır, bitkiler kullanmaz.' },
          { id: 'B', text: 'Hayır, bakteriler enzim bilmez.' },
          { id: 'C', text: 'Evet, metabolizma ve enzim kullanımı tüm hücresel canlılarda ORTAKTIR.' },
          { id: 'D', text: 'Sadece gündüzleri doğrudur.' },
          { id: 'E', text: 'Hayır, tek hücrelilerde metabolizma yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılık zaten bir kimyasal tepkimeler zinciridir. Bu zinciri yürütmek (metabolizma) ve hızlandırmak (enzim) her canlının ortak zorunluluğudur.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Genç bir insanda yapım (anabolizma) olayları yıkımdan fazlayken, yaşlı bir insanda durum nasıldır?',
        options: [
          { id: 'A', text: 'Yapım yine yıkımdan çok fazladır.' },
          { id: 'B', text: 'Yıkım (Katabolizma) olayları, yapım (Anabolizma) olaylarından fazladır.' },
          { id: 'C', text: 'Sadece yapım vardır.' },
          { id: 'D', text: 'Sadece yıkım vardır, yapım sıfırdır.' },
          { id: 'E', text: 'Metabolizma tamamen durmuştur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaşlılıkta yıkım olayları yapımı geçer, bu yüzden dokular zayıflar, kırışıklıklar artar.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Anabolik (Yapım) olayları sırasında genellikle HANGİ MOLEKÜL harcanır (Enerji tüketilir)?',
        options: [
          { id: 'A', text: 'Demir' },
          { id: 'B', text: 'Oksijen' },
          { id: 'C', text: 'ATP (Enerji)' },
          { id: 'D', text: 'Kalsiyum' },
          { id: 'E', text: 'Tuz' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir şeyler inşa etmek (sentez/yapım) enerji gerektirir. Hücrenin kullandığı bu kısa süreli enerji molekülü ATP\'dir.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Aşağıdaki organizasyon düzeylerinden hangisi CANLI BİR BİREYİ ifade eder?',
        options: [
          { id: 'A', text: 'Doku' },
          { id: 'B', text: 'Molekül' },
          { id: 'C', text: 'Organ' },
          { id: 'D', text: 'Organizma' },
          { id: 'E', text: 'Organel' }
        ],
        correctOptionId: 'D',
        explanation: 'Organizma; tek başına, bağımsız olarak yaşamsal faaliyetlerini sürdürebilen canlı bireydir (Bir insan, bir amip, bir ağaç gibi).'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Bir kedi ile bir amip (tek hücreli) karşılaştırıldığında, aşağıdakilerden hangisi ikisinde de ORTAK olarak görülür?',
        options: [
          { id: 'A', text: 'Sistemlere sahip olma (Dolaşım, sindirim vb.)' },
          { id: 'B', text: 'Hücre düzeyinde organizasyona sahip olma' },
          { id: 'C', text: 'Gözlere sahip olma' },
          { id: 'D', text: 'Çok hücreli olma' },
          { id: 'E', text: 'Kas dokusuna sahip olma' }
        ],
        correctOptionId: 'B',
        explanation: 'Amipte doku, organ, sistem yoktur. Ama ikisi de "hücre" yapısındadır. Hücresel organizasyon ortaktır.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Metabolizma hızı gün içinde sabittir ve hiç değişmez. Bu ifade doğru mudur?',
        options: [
          { id: 'A', text: 'Evet, hep aynı hızdadır.' },
          { id: 'B', text: 'Hayır; uyku, dinlenme, koşma, yaş ve sıcaklığa göre metabolizma hızı DEĞİŞEBİLİR.' },
          { id: 'C', text: 'Sadece hayvanlarda sabittir.' },
          { id: 'D', text: 'Sadece bebeklerde sabittir.' },
          { id: 'E', text: 'Sadece bitkilerde sabittir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Koşarken enerji ihtiyacınız artar, metabolizmanız hızlanır. Uyurken yavaşlar. Sabit değildir.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Tohumlarda metabolizma tamamen DURMUŞ mudur, yoksa ÇOK MU YAVAŞLAMIŞTIR?',
        options: [
          { id: 'A', text: 'Tamamen durmuştur, ölüdür.' },
          { id: 'B', text: 'Çok hızlanmıştır.' },
          { id: 'C', text: 'Çok yavaşlamıştır (Bazal durumdadır), su alınca tekrar hızlanır ve çimlenir.' },
          { id: 'D', text: 'Sadece yıkım yapar.' },
          { id: 'E', text: 'Sadece gece çalışır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tohum canlıdır ama metabolizması %1-2 seviyelerine inmiştir (Dormansi). Tamamen durursa ölür ve bir daha çimlenemez.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: '"Canlılık; atomların birleşip hücreyi oluşturmasıyla başlar." Buna göre atom ve molekül düzeyi için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Atomlar kendi başına canlıdır.' },
          { id: 'B', text: 'Moleküller kendi başına ürer.' },
          { id: 'C', text: 'Atom ve molekül canlı yapısına KATILIR ama TEK BAŞLARINA canlılık özelliği GÖSTERMEZLER.' },
          { id: 'D', text: 'En küçük canlı atomdur.' },
          { id: 'E', text: 'Atomlar beslenir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılık özelliği (metabolizma, üreme vb.) en erken HÜCRE düzeyinde başlar. Hücreyi oluşturan atom ve moleküller cansızdır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Beslenme, Enerji ve Boşaltım (Very Easy)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Canlıların enerji ve yapı taşı (madde) ihtiyaçlarını karşılamak için gerekli maddeleri ortamdan veya kendi üreterek almasına ne denir?',
        options: [
          { id: 'A', text: 'Boşaltım' },
          { id: 'B', text: 'Beslenme' },
          { id: 'C', text: 'Terleme' },
          { id: 'D', text: 'Bölünme' },
          { id: 'E', text: 'Hareket' }
        ],
        correctOptionId: 'B',
        explanation: 'Maddelerin canlı bünyesine katılması işlemine Beslenme denir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Kendi organik besinini kendisi ÜRETEN (Örn: Bitkiler) canlılara ne ad verilir?',
        options: [
          { id: 'A', text: 'Heterotrof (Tüketici)' },
          { id: 'B', text: 'Ototrof (Üretici)' },
          { id: 'C', text: 'Saprofit (Çürükçül)' },
          { id: 'D', text: 'Parazit' },
          { id: 'E', text: 'Etçil' }
        ],
        correctOptionId: 'B',
        explanation: 'Kendi besinini kendi üreten canlılara Ototrof denir (Oto: Kendi, Trof: Beslenen).'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'İnsanlar, hayvanlar ve mantarlar kendi besinlerini üretemezler, dışarıdan HAZIR olarak alırlar. Bu beslenme şekline ne denir?',
        options: [
          { id: 'A', text: 'Ototrof' },
          { id: 'B', text: 'Heterotrof (Tüketici)' },
          { id: 'C', text: 'Fotoototrof' },
          { id: 'D', text: 'Kemoototrof' },
          { id: 'E', text: 'Bitkisel beslenme' }
        ],
        correctOptionId: 'B',
        explanation: 'Organik besinleri dışarıdan hazır alan (üretici olmayan) canlılara Heterotrof denir.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Hücrelerin yaşamsal faaliyetlerini (hareket, sentez, onarım) yapabilmesi için harcadığı KISA SÜRELİ enerji molekülünün adı nedir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Karbondioksit' },
          { id: 'C', text: 'ATP (Adenozin Trifosfat)' },
          { id: 'D', text: 'DNA' },
          { id: 'E', text: 'Su' }
        ],
        correctOptionId: 'C',
        explanation: 'ATP, hücrenin geçer akçesidir (pilidir). Tüm hücresel işlerde doğrudan harcanan enerji formudur.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Organik besinlerdeki enerjinin hücre içinde parçalanarak ATP enerjisine dönüştürülmesi (ATP üretilmesi) olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Hücresel Solunum' },
          { id: 'C', text: 'Boşaltım' },
          { id: 'D', text: 'Salgılama' },
          { id: 'E', text: 'Sindirim' }
        ],
        correctOptionId: 'B',
        explanation: 'Besindeki enerjiyi ATP\'ye çevirme işine "Hücresel Solunum" denir. Nefes alıp verme ile karıştırılmamalıdır; bu kimyasal bir olaydır.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Tüm canlılar HÜCRESEL SOLUNUM yaparak ATP üretmek ZORUNDA MIDIR?',
        options: [
          { id: 'A', text: 'Hayır, bitkiler sadece fotosentez yapar, solunuma ihtiyaç duymaz.' },
          { id: 'B', text: 'Hayır, bakteriler enerji harcamaz.' },
          { id: 'C', text: 'Evet, canlılık için ATP (enerji) şarttır. Bu nedenle TÜM CANLILAR hücresel solunum (oksijenli, oksijensiz veya fermantasyon) yaparak ATP üretmek ZORUNDADIR.' },
          { id: 'D', text: 'Sadece hayvanlar zorundadır.' },
          { id: 'E', text: 'Sadece kışın zorundadır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Enerji olmadan canlılık olmaz. Her canlı (bitki dahil) hücre içinde besini parçalayıp (solunumla) ATP üretmek mecburiyetindedir.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Tüm canlıların solunumu OKSİJENLİ midir?',
        options: [
          { id: 'A', text: 'Evet, bütün canlılar oksijen kullanır.' },
          { id: 'B', text: 'Hayır, bazı canlılar (bazı bakteriler vb.) oksijen kullanmadan (Oksijensiz solunum veya Fermantasyon ile) ATP üretebilir.' },
          { id: 'C', text: 'Evet, bitkiler bile sürekli oksijen alır.' },
          { id: 'D', text: 'Hayır, sadece insanlar oksijen kullanır.' },
          { id: 'E', text: 'Oksijen ATP üretimi için şarttır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Solunum (ATP üretmek) ortaktır, ancak "Oksijen" kullanmak ortak DEĞİLDİR. Oksijensiz solunum yapan canlılar da vardır.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Metabolizma (kimyasal tepkimeler) sonucunda oluşan zehirli veya fazla maddelerin (Karbondioksit, üre, fazla su vb.) vücuttan UZAKLAŞTIRILMASINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Sindirim' },
          { id: 'B', text: 'Üreme' },
          { id: 'C', text: 'Boşaltım' },
          { id: 'D', text: 'Beslenme' },
          { id: 'E', text: 'Hücresel Solunum' }
        ],
        correctOptionId: 'C',
        explanation: 'Atık maddelerin hücre veya vücut dışına atılması işlemine Boşaltım denir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi BOŞALTIM olayının amaçlarından biridir?',
        options: [
          { id: 'A', text: 'Canlıya enerji vermek' },
          { id: 'B', text: 'Yeni bireyler oluşturmak' },
          { id: 'C', text: 'Zararlı atıkları atarak vücudun "İç Dengesini (Homeostazi)" korumak' },
          { id: 'D', text: 'Kasları güçlendirmek' },
          { id: 'E', text: 'Besin üretmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Atıklar birikirse vücudu zehirler. Boşaltım bu atıkları atarak temiz, dengeli bir iç ortam (Homeostazi) sağlar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Bitkiler böbrekleri olmadığı halde boşaltım yaparlar mı?',
        options: [
          { id: 'A', text: 'Hayır, bitkilerde atık oluşmaz.' },
          { id: 'B', text: 'Hayır, kökleri atıkları geri emer.' },
          { id: 'C', text: 'Evet yaparlar. Yaprak dökerek, terleyerek veya stomalardan gaz atarak boşaltım yaparlar.' },
          { id: 'D', text: 'Sadece çiçek açarken yaparlar.' },
          { id: 'E', text: 'Sadece geceleri yaparlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün canlılar (bitkiler, bakteriler dahil) boşaltım YAPAR. Boşaltım yapmak ortaktır, sadece boşaltım "organı" (böbrek vb.) farklılık gösterir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'İnsanda dışkılama (sindirilemeyen besin artıklarının atılması) ile böbreklerden idrar atılması (hücresel atıkların atılması) Biyolojik olarak aynı şey midir?',
        options: [
          { id: 'A', text: 'Evet, ikisi de tam olarak aynı boşaltımdır.' },
          { id: 'B', text: 'Hayır; dışkılama sindirim artığı atımıdır, gerçek hücresel "Boşaltım" ise hücrenin içinden çıkan metabolik atıkların (idrar, ter, CO2) atılmasıdır.' },
          { id: 'C', text: 'Evet, ikisini de aynı organ yapar.' },
          { id: 'D', text: 'Hayır, idrar sindirim artığıdır.' },
          { id: 'E', text: 'İkisi de üremedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yediğimiz bağırsağın içinden geçip çıkan kısım dışkıdır. Gerçek boşaltım (metabolik atık), kana ve hücreye giren maddelerin kullanıldıktan sonraki posasıdır (Üre, CO2 vb.).'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Tüm canlılar besinlerini aynı şekilde mi elde eder?',
        options: [
          { id: 'A', text: 'Evet, hepsi ototroftur.' },
          { id: 'B', text: 'Evet, hepsi heterotroftur.' },
          { id: 'C', text: 'Hayır; kimisi kendi üretir (Ototrof), kimisi hazır alır (Heterotrof). Beslenme ortaktır ama "şekli" ortak değildir.' },
          { id: 'D', text: 'Evet, hepsi ağız yoluyla beslenir.' },
          { id: 'E', text: 'Hayır, bakteriler hiç beslenmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Beslenmek, enerji bulmak için şarttır (Ortaktır). Ama aslan avlanarak, çam ağacı ise fotosentez yaparak beslenir. Yöntem farklıdır.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Ototrof (Üretici) canlılar besin üretmek için genellikle hangi enerjiyi kullanırlar?',
        options: [
          { id: 'A', text: 'Rüzgar enerjisi' },
          { id: 'B', text: 'Jeotermal enerji' },
          { id: 'C', text: 'Işık enerjisi (Güneş)' },
          { id: 'D', text: 'Ses enerjisi' },
          { id: 'E', text: 'Mekanik enerji' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez yapan ototroflar (Bitkiler, algler vb.) güneş ışığını kullanarak kendi organik besinlerini üretirler.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Fotosentez olayı "Tüm canlılar" için ORTAK BİR ÖZELLİK MİDİR?',
        options: [
          { id: 'A', text: 'Evet, her canlı güneşe ihtiyaç duyar.' },
          { id: 'B', text: 'Evet, ATP üretmek için şarttır.' },
          { id: 'C', text: 'Hayır, sadece Ototrof (üretici) canlılar (bitki vb.) fotosentez yapar. İnsanlar veya mantarlar fotosentez yapmaz.' },
          { id: 'D', text: 'Hayır, sadece kışın ortaktır.' },
          { id: 'E', text: 'Evet, bakteriler hariç ortaktır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez besin ÜRETME şeklidir. Biz tüketiciyiz, besin üretemeyiz. Bu yüzden fotosentez ortak bir özellik DEĞİLDİR.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Canlıların enerji üretebilmesi (Solunum) için molekülleri "parçalaması", metabolizmanın hangi bölümüne girer?',
        options: [
          { id: 'A', text: 'Anabolizma (Yapım)' },
          { id: 'B', text: 'Katabolizma (Yıkım)' },
          { id: 'C', text: 'Homeostazi' },
          { id: 'D', text: 'Üreme' },
          { id: 'E', text: 'Organizasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Besinleri (glikoz vb.) parçalayarak enerji açığa çıkarma işi bir YIKIM (Katabolizma) olayıdır.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Büyüme, Hareket, Homeostazi ve Üreme (Very Easy)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Tek hücreli bir amip (canlı) büyürken SADECE ne yapar?',
        options: [
          { id: 'A', text: 'Hücre sayısını artırır.' },
          { id: 'B', text: 'Hücrelerinin hacmini ve sitoplazmasını artırır (İçini doldurup şişer).' },
          { id: 'C', text: 'Yeni organlar yapar.' },
          { id: 'D', text: 'Doku oluşturur.' },
          { id: 'E', text: 'Kabuk değiştirir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek hücreli canlı bölündüğü an (hücre sayısı arttığında) artık O CANLI BÜYÜMÜŞ OLMAZ, "ÜREMİŞ" (iki yavru olmuş) olur. Bu yüzden tek hücreliler sadece HACİM/KÜTLE artışıyla büyür.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'İnsan (Çok hücreli) gibi canlılarda BÜYÜME nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'Hücrelerimiz şişerek devasa boyuta ulaşır.' },
          { id: 'B', text: 'Hücrelerin BÖLÜNEREK (Mitoz ile) "HÜCRE SAYISINI" artırması ve büyümesi ile gerçekleşir.' },
          { id: 'C', text: 'Sadece bol su içerek.' },
          { id: 'D', text: 'Hücre sayısını azaltarak.' },
          { id: 'E', text: 'Kristal birikerek.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bebekken az hücremiz vardır, büyüdükçe hücrelerimiz bölünerek çoğalır (sayı artar) ve kemiklerimiz/kaslarımız uzar.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Bitkiler yer değiştirmezler (koşmazlar). Peki bitkiler "Hareket Etme" ortak özelliğini göstermiyor mu demektir?',
        options: [
          { id: 'A', text: 'Evet, bitkiler hareket etmez.' },
          { id: 'B', text: 'Hayır; bitkiler yapraklarını güneşe çevirerek (Yönelme) veya köklerini suya uzatarak "Durum Değiştirme (Pasif/Yönelim)" hareketi yaparlar. Hareket ortaktır.' },
          { id: 'C', text: 'Evet, cansızdırlar.' },
          { id: 'D', text: 'Hayır, geceleri yürürler.' },
          { id: 'E', text: 'Sadece rüzgar estiğinde hareket sayılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hareket illa "koşmak (aktif yer değiştirme)" değildir. Çiçeğin güneşe dönmesi (tropizma) veya böcek kapanın kapanması da bir harekettir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Köstebeklerin yeraltındaki titreşimlerden kaçması, insanın sıcağa dokununca elini çekmesi neye örnektir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Uyarılara Tepki Verme (İç veya dış çevreden gelen etkiye karşılık verme)' },
          { id: 'C', text: 'Boşaltım' },
          { id: 'D', text: 'Beslenme' },
          { id: 'E', text: 'Hücresel Solunum' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevresel bir değişikliği (Sıcaklık, ses, tehlike, ışık) algılayıp ona uygun bir cevap vermeye "Uyarılara Tepki" denir ve tüm canlılarda ortaktır.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Canlıların değişen çevre şartlarına rağmen "İç Ortamlarını (Vücut sıcaklığı, kan şekeri, su oranı vb.) Sabit ve Dengede Tutma" çabasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Metabolizma' },
          { id: 'B', text: 'Homeostazi (İç Denge)' },
          { id: 'C', text: 'Anabolizma' },
          { id: 'D', text: 'Solunum' },
          { id: 'E', text: 'Sindirim' }
        ],
        correctOptionId: 'B',
        explanation: 'Homeo (Benzer/Aynı) ve Stasis (Durum) kelimelerinden gelir. Dışarısı 40 derece de olsa 0 derece de olsa vücudunuzun 36.5 derece kalmaya çalışması Homeostazi\'dir.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir HOMEOSTAZİ (İç Denge) örneğidir?',
        options: [
          { id: 'A', text: 'Havalar çok sıcak olduğunda TERLEYEREK vücut ısısını düşürmek' },
          { id: 'B', text: 'Kitap okumak' },
          { id: 'C', text: 'Göz renginin mavi olması' },
          { id: 'D', text: 'Ağacın yapraklarının yeşil olması' },
          { id: 'E', text: 'Saçların uzaması' }
        ],
        correctOptionId: 'A',
        explanation: 'Terlemek, artan vücut sıcaklığını normale (dengeye) getirmek için verilen homeostatik bir tepkidir.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Canlıların nesillerini devam ettirebilmek (türün devamı) için kendilerine benzer yeni bireyler oluşturmasına ne denir?',
        options: [
          { id: 'A', text: 'Büyüme' },
          { id: 'B', text: 'Boşaltım' },
          { id: 'C', text: 'Üreme' },
          { id: 'D', text: 'Solunum' },
          { id: 'E', text: 'Sindirim' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeni yavrular (bireyler) oluşturma işlemine Üreme denir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Canlının HAYATTA KALMASI (Yaşaması) için "Üreme" ZORUNLU MUDUR?',
        options: [
          { id: 'A', text: 'Evet, üremeyen canlı o gün ölür.' },
          { id: 'B', text: 'Hayır. Üreme canlının yaşaması için DEĞİL, sadece NESLİNİN (Türünün) devamı için zorunludur.' },
          { id: 'C', text: 'Evet, solunum gibi şarttır.' },
          { id: 'D', text: 'Evet, boşaltım gibi şarttır.' },
          { id: 'E', text: 'Sadece bitkiler için şarttır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir insan veya hayvan hayatı boyunca hiç yavru sahibi olmadan da (üremese de) sağlıklı bir şekilde yaşayıp yaşlanabilir. Üreme birey için değil, TÜR için zorunludur.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Sadece tek bir atanın bulunduğu (anne-baba kavramının olmadığı), sperm ve yumurta birleşmesi OLMADAN yeni bireylerin oluştuğu üreme tipine ne ad verilir?',
        options: [
          { id: 'A', text: 'Eşeyli Üreme' },
          { id: 'B', text: 'Eşeysiz Üreme' },
          { id: 'C', text: 'Çok hücreli üreme' },
          { id: 'D', text: 'Büyüme' },
          { id: 'E', text: 'Gelişme' }
        ],
        correctOptionId: 'B',
        explanation: 'Eş (Cinsiyet) olmayan, tek başına bölünüp çoğalma (bakteri, amip veya bitkiden dal koparıp ekme) gibi durumlar EŞEYSİZ üremedir.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Yavrularda Genetik Çeşitlilik (Farklılık/Varyasyon) sağlayan üreme tipi hangisidir?',
        options: [
          { id: 'A', text: 'Eşeysiz Üreme (Klonlama)' },
          { id: 'B', text: 'Eşeyli Üreme (Anne ve babadan gelen genlerin birleşmesi)' },
          { id: 'C', text: 'Tomurcuklanma' },
          { id: 'D', text: 'İkiye bölünme' },
          { id: 'E', text: 'Büyüme' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşeyli üremede iki farklı bireyden (yumurta ve sperm) gelen genler karıştığı için yavru atalarına tam benzemez, çeşitlilik oluşur.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Aynı türe ait bireyler arasındaki FARKLI özelliklere (Örn: İnsanların farklı göz renklerine, köpeklerin farklı tüy desenlerine sahip olması) ne ad verilir?',
        options: [
          { id: 'A', text: 'Homeostazi' },
          { id: 'B', text: 'Varyasyon (Çeşitlilik)' },
          { id: 'C', text: 'Organizasyon' },
          { id: 'D', text: 'Metabolizma' },
          { id: 'E', text: 'Boşaltım' }
        ],
        correctOptionId: 'B',
        explanation: 'Tür içi çeşitliliğe varyasyon denir. Bu özellikler genetik yapı ve mutasyonlarla sağlanır.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Bir canlının yaşadığı çevreye uyum sağlayarak, o ortamda HAYATTA KALMA ve ÜREME ŞANSINI artıran "KALITSAL (Doğuştan gelen)" özelliklerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Adaptasyon (Uyum)' },
          { id: 'B', text: 'Solunum' },
          { id: 'C', text: 'Beslenme' },
          { id: 'D', text: 'Organizasyon' },
          { id: 'E', text: 'Büyüme' }
        ],
        correctOptionId: 'A',
        explanation: 'Kutup ayısının beyaz, çöl devesinin hörgüçlü olması gibi kalıtsal uyum özelliklerine Adaptasyon denir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bir ADAPTASYON (Çevreye kalıtsal uyum) örneğidir?',
        options: [
          { id: 'A', text: 'İnsanın koşunca terlemesi' },
          { id: 'B', text: 'Güneşte kalınca tenin bronzlaşması' },
          { id: 'C', text: 'Kaktüslerin çölde su kaybını önlemek için yapraklarının "İĞNE ŞEKLİNDE" olması' },
          { id: 'D', text: 'Çocuğun boyunun uzaması' },
          { id: 'E', text: 'Bakterinin ikiye bölünmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaktüsün iğne yapraklı olması doğuştan gelen ve o ortamda (çölde) hayatta kalmasını sağlayan kalıcı, nesilden nesile geçen bir Adaptasyondur. Bronzlaşmak geçicidir.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Tohumun çatlayıp filiz vermesi BÜYÜME VE GELİŞME midir yoksa ÜREME midir?',
        options: [
          { id: 'A', text: 'Üremedir.' },
          { id: 'B', text: 'Hareket etmedir.' },
          { id: 'C', text: 'Büyüme ve Gelişmedir (Çünkü tohum içindeki bitki taslağı mitozla hücre sayısını artırarak bitkiyi oluşturur).' },
          { id: 'D', text: 'Sadece boşaltımdır.' },
          { id: 'E', text: 'Beslenmedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tohum zaten üreme "sonucu" oluşmuş yepyeni bir birey taslağıdır. Toprağa düşünce artık bu yeni birey "Büyümeye ve Gelişmeye" başlar.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: '"Canlılar sürekli çevreyle uyum içindedir. Çevre değişince, sadece o yeni çevreye uygun varyasyonu (özelliği) olanlar yaşar." \nBuna göre canlılığın en genel amacı nedir?',
        options: [
          { id: 'A', text: 'Çok büyük olmak' },
          { id: 'B', text: 'Hiç hareket etmemek' },
          { id: 'C', text: 'Metabolizmayı durdurmak' },
          { id: 'D', text: 'Hayatta kalmak (Homeostazi ve Adaptasyonla) ve Neslini devam ettirmek (Üremek)' },
          { id: 'E', text: 'Dünyayı yok etmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Canlılığın bütün özellikleri (beslenme, solunum, büyüme, homeostazi) temelde o bireyi hayatta tutmaya; üreme ve adaptasyon ise türü sonsuza taşımaya yarar.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Kavram İlişkileri ve Temel Tanımlar (Very Easy)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: '"Hücresel solunum sonucunda sadece enerji değil, karbondioksit ve su gibi atık maddeler de oluşur. Bu maddelerin hücreden atılması gerekir." \nBu durum hangi iki ortak özellik arasındaki doğrudan İLİŞKİYİ gösterir?',
        options: [
          { id: 'A', text: 'Üreme - Büyüme' },
          { id: 'B', text: 'Solunum - Boşaltım' },
          { id: 'C', text: 'Hareket - Organizasyon' },
          { id: 'D', text: 'Adaptasyon - Beslenme' },
          { id: 'E', text: 'Gelişme - Homeostazi' }
        ],
        correctOptionId: 'B',
        explanation: 'Solunum (enerji üretimi) sonucunda atık (CO2) çıkar. Bu atığın atılması da Boşaltım işlemidir. İkisi birbiriyle bağlantılıdır.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Soğuk havalarda vücut ısımız düştüğünde kaslarımız titreyerek ısı üretir (solunumu hızlandırır) ve vücut sıcaklığımız tekrar normal seviyeye gelir. Bu olay HANGİ AMACA hizmet eder?',
        options: [
          { id: 'A', text: 'Büyümeye' },
          { id: 'B', text: 'Besin üretmeye (Ototrof)' },
          { id: 'C', text: 'Homeostaziyi (İç dengeyi) sağlamaya' },
          { id: 'D', text: 'Boşaltım yapmaya' },
          { id: 'E', text: 'Üremeye' }
        ],
        correctOptionId: 'C',
        explanation: 'Sıcaklığın hep 36.5 derece etrafında tutulmaya çalışılması tam bir Homeostazi (Denge koruma) örneğidir.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: '"Güneş ışığını kullanarak besin sentezleyen bitkiler (1), bu besinleri parçalayarak enerji elde eder (2) ve bu enerji ile boylarını uzatırlar (3)." \nBu cümlede sırasıyla hangi özelliklerden bahsedilmiştir?',
        options: [
          { id: 'A', text: '1: Boşaltım, 2: Üreme, 3: Adaptasyon' },
          { id: 'B', text: '1: Ototrof Beslenme, 2: Solunum, 3: Büyüme' },
          { id: 'C', text: '1: Solunum, 2: Boşaltım, 3: Büyüme' },
          { id: 'D', text: '1: Heterotrof Beslenme, 2: Büyüme, 3: Hareket' },
          { id: 'E', text: '1: Organizasyon, 2: Homeostazi, 3: Üreme' }
        ],
        correctOptionId: 'B',
        explanation: 'Işıkla besin sentezi (Ototrof beslenme), besini parçalama (Solunum), boy uzaması (Büyüme) sırasıyla anlatılmıştır.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Canlıların DNA/RNA adı verilen kalıtsal materyali bulundurması; hücre yönetimini sağladığı gibi, başka HANGİ ortak özelliğin gerçekleşebilmesi için ŞARTTIR?',
        options: [
          { id: 'A', text: 'Suyun buharlaşması için' },
          { id: 'B', text: 'Yerçekiminin olması için' },
          { id: 'C', text: 'Hücre zarının yırtılması için' },
          { id: 'D', text: 'Üreme (Kalıtsal bilginin yavruya aktarılması) için' },
          { id: 'E', text: 'Havanın soğuması için' }
        ],
        correctOptionId: 'D',
        explanation: 'Üremenin temel amacı yavrulara "Kalıtsal bilgiyi" aktarmaktır. DNA olmadan nesil devam edemez.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Aşağıdaki ortak özelliklerden hangisi BİREYİN yaşamını sürdürmesi için ZORUNLU DEĞİLKEN, türün dünyadaki varlığının devam etmesi için ZORUNLUDUR?',
        options: [
          { id: 'A', text: 'Beslenme' },
          { id: 'B', text: 'Solunum' },
          { id: 'C', text: 'Boşaltım' },
          { id: 'D', text: 'Homeostazi' },
          { id: 'E', text: 'Üreme' }
        ],
        correctOptionId: 'E',
        explanation: 'Üremeyen (kısır) bir canlı ölmez, sağlıklı yaşar. Ama üreme olmazsa o tür neslini devam ettiremez.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: '"Adaptasyon" ile "Uyarılara Tepki" kavramları sıkça karıştırılır. \nGözbebeğinin karanlıkta büyümesi ile Kutup ayısının kalın tüylü olması arasındaki FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de tamamen aynı şeydir.' },
          { id: 'B', text: 'Gözbebeği büyümesi doğuştan gelen adaptasyondur, tüyler ise sonradan çıkar.' },
          { id: 'C', text: 'Gözbebeği büyümesi ANLIK bir "Uyarılara Tepkidir", kalın tüyler ise NESİLDEN NESİLE AKTARILAN kalıtsal bir "Adaptasyondur".' },
          { id: 'D', text: 'İkisi de boşaltımdır.' },
          { id: 'E', text: 'Gözbebeği büyümesi üremedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Işığa karşı gözün anlık değişimi "Tepki" iken, kalıcı ve kalıtsal olan özellikler (beyaz post) Adaptasyondur.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Hücre zarı yapısının "Seçici Geçirgen (Sadece belirli maddeleri içeri alıp, zararlıları almayan)" olması, en çok HANGİ ortak özelliğin korunmasına YARDIMCI OLUR?',
        options: [
          { id: 'A', text: 'Doku oluşumuna' },
          { id: 'B', text: 'Homeostazi (İç dengenin korunması)' },
          { id: 'C', text: 'Büyümeye' },
          { id: 'D', text: 'Gelişmeye' },
          { id: 'E', text: 'Kılların uzamasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Zar her şeyi içeri alsa veya içerideki suyun hepsini dışarı sızdırsa iç denge (Homeostazi) anında bozulur ve hücre ölür.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: '"Özümleme (Anabolizma)" olaylarına YAPIM, "Yadımlama (Katabolizma)" olaylarına YIKIM denir. Bir hücre, parçaladığı (yadımlama) glikozdan elde ettiği enerjiyi (ATP) kullanarak protein üretiyorsa (özümleme), bu DURUM BİZE NE GÖSTERİR?',
        options: [
          { id: 'A', text: 'Yapım ve Yıkım olaylarının BİR ARADA VE BİRBİRİNE BAĞLI çalıştığını (Metabolizmayı)' },
          { id: 'B', text: 'Hücrenin öldüğünü' },
          { id: 'C', text: 'Sadece bitki olduğunu' },
          { id: 'D', text: 'Hücrenin hareket ettiğini' },
          { id: 'E', text: 'Kloroplastın patladığını' }
        ],
        correctOptionId: 'A',
        explanation: 'Metabolizmada yıkımdan elde edilen enerji, yapım (sentez) olaylarında kullanılır. Birbirlerini tamamlarlar.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Tohumun toprağa düştükten sonra çimlenmesi ve ilk yapraklarını vererek büyümesi olayları "Gelişme" olarak adlandırılır. Gelişme sürecinde HÜCRELERDE genellikle NE GÖRÜLÜR?',
        options: [
          { id: 'A', text: 'Hücre sayısının sürekli AZALMASI' },
          { id: 'B', text: 'Hücrelerin hepsinin Oksijensiz solunuma geçmesi' },
          { id: 'C', text: 'Hücrelerin BÖLÜNEREK ÇOĞALMASI (Sayı artışı) ve FARKLILAŞARAK (kök, gövde, yaprak) görevler üstlenmesi' },
          { id: 'D', text: 'Sadece besin depolaması' },
          { id: 'E', text: 'Terlemenin durması' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok hücrelilerde gelişme; mitozla sayı artışı (Büyüme) ve hücrelerin görev paylaşımı yapması (Farklılaşma) ile olur.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Çölde yaşayan kaktüslerin, gövdelerinde su depo etmeleri ve terlemeyi azaltmak için yapraklarının diken şeklinde olması HANGİ KAVRAMA örnektir?',
        options: [
          { id: 'A', text: 'Metabolizma' },
          { id: 'B', text: 'Üreme' },
          { id: 'C', text: 'Adaptasyon (Kalıtsal Uyum)' },
          { id: 'D', text: 'Solunum' },
          { id: 'E', text: 'Heterotrof Beslenme' }
        ],
        correctOptionId: 'C',
        explanation: 'Çöl şartlarında (kurak ortam) hayatta kalmayı sağlayan kalıcı ve kalıtsal vücut özellikleri Adaptasyondur.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Mantarlar, kendi besinlerini üretemezler ve doğadaki ölü bitki ve hayvan artıklarını çürüterek beslenirler. Bu beslenme tipi genel olarak HANGİ kategoriye girer?',
        options: [
          { id: 'A', text: 'Fotoototrof' },
          { id: 'B', text: 'Ototrof' },
          { id: 'C', text: 'Heterotrof (Tüketici / Saprofit)' },
          { id: 'D', text: 'Kemoototrof' },
          { id: 'E', text: 'Sadece su içme' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendi besinini üretemeyip (fotosentez yapmayıp) dışarıdan hazır (veya ölü organizmalardan) beslenenlere Heterotrof denir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Bakteriler "Tek Hücreli" iken İnsan "Çok Hücreli"dir. İkisinin de EN ORTAK YANI nedir?',
        options: [
          { id: 'A', text: 'İkisinde de Mide bulunması' },
          { id: 'B', text: 'İkisinin de Çekirdeği olması' },
          { id: 'C', text: 'İkisinin de "Hücresel Yapı" ve "Metabolizmaya" sahip olması' },
          { id: 'D', text: 'İkisinin de Oksijenli solunum yapmak ZORUNDA olması' },
          { id: 'E', text: 'İkisinin de aynı boyutta olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Sayısı ve tipi (Pro/Ökaryot) farklı olsa da, hücrelerden oluşma ve hücre içinde hayat (metabolizma) yürütme tüm canlıların ortak en temel özelliğidir.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Salgı yapan bir organın (Örn: Tükürük bezi) enzim salgılaması BİYOLOJİK BİR BOŞALTIM MIDIR?',
        options: [
          { id: 'A', text: 'Evet, vücuttan çıkan her şey boşaltımdır.' },
          { id: 'B', text: 'Hayır; boşaltım "Atıkların (CO2, Üre vb.)" atılmasıdır. Enzim ve hormon salgılamak atık atmak (boşaltım) DEĞİLDİR, görevli bir madde yollamaktır.' },
          { id: 'C', text: 'Evet, tükürük zararlıdır.' },
          { id: 'D', text: 'Salgı bir üreme şeklidir.' },
          { id: 'E', text: 'Salgı yapımı sadece bitkilerde boşaltımdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Boşaltım "çöpü (atığı)" atmaktır. Salgı (tükürük, gözyaşı, enzim) ise çöp değildir, vücudun kullanmak için ürettiği "görevli maddeler"dir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: '"Canlılar ATP molekülünü (Enerjiyi) depolayamazlar. Bu yüzden ATP her an üretilip tüketilmek (Harcanmak) zorundadır." \nBu nedenle BÜTÜN CANLILARIN HANGİ OLAYI KESİNTİSİZ YAPMASI ŞARTTIR?',
        options: [
          { id: 'A', text: 'Uyuma' },
          { id: 'B', text: 'Hücresel Solunum (Sürekli enerji üretimi)' },
          { id: 'C', text: 'Fotosentez' },
          { id: 'D', text: 'Üreme' },
          { id: 'E', text: 'Bölünme' }
        ],
        correctOptionId: 'B',
        explanation: 'Pil biterse (ATP tükenirse) hücre ölür. Bu yüzden canlı gece-gündüz, her saniye solunum (ATP yapımı) yapmak zorundadır.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Bütün canlılar hücre veya hücrelerden oluşur. Peki bir varlığın canlı olup olmadığını ANLAMANIN EN KESİN YOLU nedir?',
        options: [
          { id: 'A', text: 'Hareket edip etmediğine bakmak' },
          { id: 'B', text: 'Ses çıkarıp çıkarmadığına bakmak' },
          { id: 'C', text: 'Hücresel yapısı var mı, metabolizma (yapım-yıkım) yapıyor mu diye BİR BÜTÜN OLARAK değerlendirmek' },
          { id: 'D', text: 'Sadece büyüyüp büyümediğini ölçmek' },
          { id: 'E', text: 'Rengine bakmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek bir özellik (Örn: hareket) cansızlarda da (araba) olabilir. Kesin teşhis ancak hücre yapısı ve metabolizma gibi yaşamsal faaliyetlerin "Birlikte bulunmasıyla" yapılır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Prokaryot, Ökaryot ve Beslenme Biçimleri (Easy)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Aşağıda verilen hücresel yapılardan hangisi PROKARYOT VE ÖKARYOT tüm hücrelerde ORTAK OLARAK BULUNMAZ?',
        options: [
          { id: 'A', text: 'Sitoplazma' },
          { id: 'B', text: 'Çekirdek Zarı' },
          { id: 'C', text: 'Hücre Zarı' },
          { id: 'D', text: 'Ribozom' },
          { id: 'E', text: 'DNA' }
        ],
        correctOptionId: 'B',
        explanation: 'Prokaryot (bakteri, arke) hücrelerin "Zarla çevrili bir çekirdeği" YOKTUR. DNA sitoplazmaya dağılmıştır. Diğerleri (zar, sitoplazma, ribozom, DNA) ortaktır.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Prokaryot canlıların tamamı "Tek hücreli" iken, Ökaryot canlılar için aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Ökaryotların da tamamı tek hücrelidir.' },
          { id: 'B', text: 'Ökaryotların tamamı çok hücrelidir.' },
          { id: 'C', text: 'Ökaryotlar tek hücreli (Amip, Paramesyum) de olabilir, çok hücreli (İnsan, Ağaç) de olabilir.' },
          { id: 'D', text: 'Ökaryotlar sadece bitkilerdir.' },
          { id: 'E', text: 'Ökaryotlarda hücre bulunmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ökaryot (gelişmiş hücre) yapısı hem protistalarda (amip, öglena gibi tek hücreliler) hem de bitki, mantar ve hayvanlarda (çok hücreliler) görülür.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir "Prokaryot" canlı grubudur?',
        options: [
          { id: 'A', text: 'Mantarlar' },
          { id: 'B', text: 'Hayvanlar' },
          { id: 'C', text: 'Bakteriler' },
          { id: 'D', text: 'Protistalar' },
          { id: 'E', text: 'Bitkiler' }
        ],
        correctOptionId: 'C',
        explanation: 'Sadece "Bakteriler ve Arkeler" alemi prokaryot (çekirdeksiz) hücre yapısına sahiptir.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Ribozom, bütün canlı hücrelerde protein sentezleyen "Zarsız" bir organeldir. Buna göre Prokaryot hücrelerde ribozom bulunur mu?',
        options: [
          { id: 'A', text: 'Hayır, prokaryotlarda hiçbir organel bulunmaz.' },
          { id: 'B', text: 'Evet, Prokaryotların ZARLI organelleri (Mitokondri vb.) yoktur ama ZARSIZ olan Ribozomları VARDIR.' },
          { id: 'C', text: 'Sadece yaşlı bakterilerde bulunur.' },
          { id: 'D', text: 'Hayır, protein sentezini DNA kendisi yapar.' },
          { id: 'E', text: 'Sadece virüslerde bulunur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Prokaryot hücre = "Organeli olmayan hücre" DEMEK DEĞİLDİR. "ZARLI organeli (Çekirdek, mitokondri vb.) olmayan" demektir. Zarsız bir organel olan Ribozom hepsinde vardır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Kendi besinini KENDİ ÜRETEN (Ototrof) bir canlı, bu besinleri neyden sentezler (üretir)?',
        options: [
          { id: 'A', text: 'Dışarıdan aldığı başka organik besinleri ezerek' },
          { id: 'B', text: 'Dışarıdan aldığı İNORGANİK (Su, Karbondioksit vb.) maddeleri kullanarak (Enerji yardımıyla)' },
          { id: 'C', text: 'Sadece toprak yiyerek' },
          { id: 'D', text: 'Başka canlıları yutarak' },
          { id: 'E', text: 'Güneş ışığını direkt yiyerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Ototrof beslenme; CO2 (karbondioksit) ve Su (H2O) gibi basit (inorganik) maddeleri ışık veya kimyasal enerjiyle birleştirip Organik (Glikoz) Besin yapmaktır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Bir bitki fotosentez yaparken IŞIK ENERJİSİ kullanır (Fotoototrof). Karanlık diplerde yaşayan bazı bakteriler ise KİMYASAL ENERJİ kullanarak besin üretir. Bu bakterilerin beslenme şekli nedir?',
        options: [
          { id: 'A', text: 'Saprofit' },
          { id: 'B', text: 'Parazit' },
          { id: 'C', text: 'Kemoototrof (Kemosentez yapan)' },
          { id: 'D', text: 'Fotoototrof' },
          { id: 'E', text: 'Holozoik' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık kullanmadan, inorganik maddeleri kimyasal olarak oksitleyerek (yakarak) kendi enerjisini bulup besin üretenlere Kemoototrof (Kemosentez) denir.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Doğadaki hayvanlar besinlerini genellikle KATILAR (et, ot) halinde büyük parçalar olarak yutar ve midelerinde sindirir. Bu heterotrof beslenme şekline ne denir?',
        options: [
          { id: 'A', text: 'Fotoototrof' },
          { id: 'B', text: 'Kemoototrof' },
          { id: 'C', text: 'Holozoik Beslenme (Katı parçalar halinde alma)' },
          { id: 'D', text: 'Saprofit' },
          { id: 'E', text: 'Simbiyotik' }
        ],
        correctOptionId: 'C',
        explanation: 'Heterotrof (tüketici) beslenmenin, besinleri büyük katı (holo) halde mideye/ağza alıp içeride sindirildiği şekline Holozoik denir (Otçul, etçil vb).'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Öglena adlı tek hücreli canlı, ışık varken fotosentez yapıp kendi besinini üretir. Işık yoksa, karanlıkta dışarıdan hazır besin alır. Öglenanın beslenme şekli nedir?',
        options: [
          { id: 'A', text: 'Sadece Ototrof' },
          { id: 'B', text: 'Sadece Heterotrof' },
          { id: 'C', text: 'Hem Ototrof Hem Heterotrof (Karma)' },
          { id: 'D', text: 'Saprofit' },
          { id: 'E', text: 'Kemoototrof' }
        ],
        correctOptionId: 'C',
        explanation: 'Duruma göre (ışık varsa üretici, yoksa tüketici) davranan canlılara "Hem Ototrof Hem Heterotrof" beslenenler denir (Böcekçil bitkiler ve Öglena gibi).'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Ölü ağaç dallarını, hayvan cesetlerini çürüterek doğayı temizleyen ve bu sayede beslenen Mantarlar ve bazı bakterilerin beslenme şekline ne denir?',
        options: [
          { id: 'A', text: 'Ototrof' },
          { id: 'B', text: 'Saprofit (Çürükçül / Ayrıştırıcı)' },
          { id: 'C', text: 'Fotoototrof' },
          { id: 'D', text: 'Holozoik' },
          { id: 'E', text: 'Parazit' }
        ],
        correctOptionId: 'B',
        explanation: 'Organik atıkları hücre dışına enzim salgılayarak çürüten ve emerek beslenen canlılara Saprofit (Ayrıştırıcı) denir.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: '"Bütün hayvanlar Heterotroftur (Tüketicidir)." Bu ifade doğru mudur?',
        options: [
          { id: 'A', text: 'Evet, hiçbir hayvan kendi besinini inorganik maddelerden (fotosentez/kemosentez ile) ÜRETEMEZ. Hepsi hazır alır.' },
          { id: 'B', text: 'Hayır, yeşil böcekler fotosentez yapar.' },
          { id: 'C', text: 'Hayır, aslanlar kemoototroftur.' },
          { id: 'D', text: 'Hayır, deniz anası ototroftur.' },
          { id: 'E', text: 'Evet ama sadece gündüzleri.' }
        ],
        correctOptionId: 'A',
        explanation: 'Hayvanlar aleminin EN TEMEL özelliklerinden biri tamamen (istisnasız) Heterotrof (Tüketici) olmalarıdır.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: '"Bitkiler ototroftur, bu yüzden dışarıdan hiçbir madde almalarına gerek yoktur." Bu ifade NEDEN YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü bitkiler sadece hayvanları yer.' },
          { id: 'B', text: 'Çünkü bitkiler organik (glikoz vb.) besinlerini üretmek için DIŞARIDAN inorganik madde (Su, Karbondioksit, Mineraller) ALMAK ZORUNDADIR.' },
          { id: 'C', text: 'Çünkü bitkiler oksijen almaz.' },
          { id: 'D', text: 'Çünkü bitkilerin ağzı vardır.' },
          { id: 'E', text: 'Bitkiler gece yürürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ototrof olmak = Dış ortamdan tamamen soyutlanmak değildir. Ototroflar "Organik (Karbonlu)" besin almazlar ama bunları yapmak için dışarıdan İnorganik (Su, mineral) hammadde almak zorundadır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Hücresel düzeyde ORGANİZASYON; Prokaryot bir bakteride "Atom -> Molekül -> Organel -> Hücre" şeklinde biter. Çok hücreli bir İnsanda ise "Hücre"den sonra NASIL DEVAM EDER?',
        options: [
          { id: 'A', text: 'Hücre -> Hücre -> Hücre' },
          { id: 'B', text: 'Hücre -> Doku -> Organ -> Sistem -> Organizma' },
          { id: 'C', text: 'Hücre -> Doku -> Molekül -> Atom' },
          { id: 'D', text: 'Hücre -> Sistem -> Doku' },
          { id: 'E', text: 'Hücre -> Topluluk -> Devlet' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok hücrelilerde iş bölümü vardır. Benzer hücreler Dokuyu, dokular Organı (kalp vb.), organlar Sistemi (dolaşım sistemi vb.) ve onlar da Bütün Organizmayı (İnsan) oluşturur.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Tek hücreli canlıların doku ve organ oluşturamamasının ANA SEBEBİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sadece bir tane hücreden oluştukları için (Doku oluşturmak için binlerce hücrenin BİRLEŞMESİ gerekir).' },
          { id: 'B', text: 'Gözlerinin olmaması.' },
          { id: 'C', text: 'Çok hızlı koşmaları.' },
          { id: 'D', text: 'DNA\'larının olmaması.' },
          { id: 'E', text: 'Hepsinin suda yaşaması.' }
        ],
        correctOptionId: 'A',
        explanation: 'Doku; aynı görevi yapmak için bir araya gelmiş hücreler TOPLULUĞUDUR. Sadece 1 hücresi olan bakteri topluluk kuramaz.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir bitki ile bir hayvanın ORTAK BESLENME özelliklerinden biridir?',
        options: [
          { id: 'A', text: 'İkisi de organik besini hazır alır.' },
          { id: 'B', text: 'İkisi de fotosentez yapar.' },
          { id: 'C', text: 'İkisi de yaşamı için gerekli maddeleri ortamdan ya da kendi üreterek SAĞLAMAK (Beslenmek) zorundadır.' },
          { id: 'D', text: 'İkisi de holozoiktir.' },
          { id: 'E', text: 'İkisi de sadece suyla yaşar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitki ile hayvanın "Beslenme ŞEKİLLERİ (Yöntemleri)" farklıdır (biri üretici, biri tüketici). Ama ikisinin de enerji için BESLENMEK ZORUNDA OLMASI ortaktır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Bir virüsün prokaryot bir bakteriden EN TEMEL FARKI nedir?',
        options: [
          { id: 'A', text: 'Virüsün daha büyük olması' },
          { id: 'B', text: 'Virüsün hücre zarının ve sitoplazmasının olmaması (Hücresel yapıda OLMAMASI)' },
          { id: 'C', text: 'Bakterinin tehlikeli olmaması' },
          { id: 'D', text: 'Virüslerin fotosentez yapması' },
          { id: 'E', text: 'Bakterinin uçabilmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakteriler çok basit de olsa bir HÜCRE (Prokaryot) yapısındadır (zarı, sıvısı, ribozomu vardır). Virüsler ise hücre yapısında DEĞİLDİR (sadece protein kılıf ve genetik şifredir).'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Solunum, Metabolizma ve Boşaltım İlişkileri (Easy)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Hücresel solunumun CANLILAR İÇİN TEMEL AMACI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sadece oksijen tüketip doğayı temizlemek' },
          { id: 'B', text: 'Hücre içindeki organik besinlerin kimyasal bağ enerjisini açığa çıkararak yaşamsal işler için ATP (Enerji) ÜRETMEK' },
          { id: 'C', text: 'Hücreyi büyütmek' },
          { id: 'D', text: 'Boşaltım maddelerini sentezlemek' },
          { id: 'E', text: 'Bitkilere yeşil renk vermek' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücresel solunum (oksijenli veya oksijensiz) temel olarak; besinleri "yakarak/parçalayarak" içindeki enerjiyi ATP dediğimiz kullanılabilir hücre pillerine aktarma işidir.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Nefes alma (Akciğerlerle gaz alışverişi) ile Hücresel Solunum (Enerji üretimi) AYNI ŞEY MİDİR?',
        options: [
          { id: 'A', text: 'Evet, tamamen aynıdır.' },
          { id: 'B', text: 'Hayır; nefes alma oksijeni kana alan "Mekanik/Sistemik" bir olaydır. Hücresel solunum ise o oksijenin HÜCRE İÇİNDE kullanılıp ATP üretildiği "Kimyasal" olaydır.' },
          { id: 'C', text: 'Evet, ikisi de midede olur.' },
          { id: 'D', text: 'Hayır, nefes alma bitkilerde, solunum hayvanlarda olur.' },
          { id: 'E', text: 'İkisi de sadece burunla ilgilidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakterilerin akciğeri veya burnu (nefes alması) yoktur ama hücre içinde ATP üretmek için "Hücresel solunum" YAKARLAR (Gerçekleştirirler).'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Bazı bakteriler yaşamak için Oksijen KULLANMAZLAR. Bu bakteriler ATP (Enerjilerini) NASIL elde ederler?',
        options: [
          { id: 'A', text: 'Güneşlenerek' },
          { id: 'B', text: 'Oksijensiz solunum veya Fermantasyon yollarıyla organik besinleri parçalayarak' },
          { id: 'C', text: 'Diğer bakterilerden elektrik alarak' },
          { id: 'D', text: 'Oksijen şarttır, ATP üretemezler ve ölürler.' },
          { id: 'E', text: 'Topraktan hazır ATP yiyerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Enerji (ATP) üretimi ZORUNLUDUR (Ortaktır) ancak bunun Oksijenle yapılması ZORUNLU DEĞİLDİR. Oksijensiz parçalama yöntemleri (Fermantasyon) de vardır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'ATP molekülü bir hücreden diğerine, bir insandan diğer insana AKTARILABİLİR Mİ (Gönderilebilir mi)?',
        options: [
          { id: 'A', text: 'Evet, kan yoluyla taşınır.' },
          { id: 'B', text: 'Evet, rüzgarla uçar.' },
          { id: 'C', text: 'Hayır. ATP büyük bir moleküldür, hücre zarından ÇIKAMAZ. Her canlı hücre KENDİ ATP\'sini KENDİ İÇİNDE ÜRETMEK VE TÜKETMEK zorundadır.' },
          { id: 'D', text: 'Sadece bitkiler ATP paylaşır.' },
          { id: 'E', text: 'Evet, anneden bebeğe geçer.' }
        ],
        correctOptionId: 'C',
        explanation: 'ATP (Hücrenin pili) hücreler arası Kargo YAPILAMAZ. Senin karaciğer hücren kendi enerjisini, kas hücren kendi enerjisini bizzat içinde üretmelidir.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: '"Fotosentez bir anabolizma (yapım), Hücresel Solunum ise bir katabolizma (yıkım) olayıdır." \nBuna göre fotosentez ve solunumun BİRBİRİYLE İLİŞKİSİ nedir?',
        options: [
          { id: 'A', text: 'İkisi de atık maddedir.' },
          { id: 'B', text: 'Fotosentez organik besin (glikoz) ÜRETİR, Solunum ise bu besini YIKARAK (parçalayarak) enerji elde eder.' },
          { id: 'C', text: 'İkisi de hücreyi küçültür.' },
          { id: 'D', text: 'Fotosentez enerji harcamadan besin yapar.' },
          { id: 'E', text: 'Hiçbir ilişkileri yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez ve Solunum, metabolizmanın birbirini besleyen iki çarkıdır. Biri besin yapar (üretim fabrikası), diğeri o besini yakıp enerjiye çevirir (Santral).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Bütün enzimlerin yapısında temel olarak HANGİ ORGANİK MADDE (Biyolojik Yapı Taşı) bulunur?',
        options: [
          { id: 'A', text: 'Vitamin' },
          { id: 'B', text: 'Yağ' },
          { id: 'C', text: 'Protein' },
          { id: 'D', text: 'Karbonhidrat' },
          { id: 'E', text: 'Mineraller' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün enzimler (istisnalar hariç büyük çoğunluğu) PROTEİN yapılıdır. Bu yüzden hücrenin protein sentezi (Ribozom) çok hayatidir.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Metabolizma sonucunda hücrede veya vücutta ZARARLI ATIKLAR (Örn: Üre, Zehir, CO2) birikir. Canlılar bunu HANGİ ORTAK ÖZELLİKLE çözmek zorundadır?',
        options: [
          { id: 'A', text: 'Metabolizmayı durdurarak' },
          { id: 'B', text: 'Atıkları besine çevirerek' },
          { id: 'C', text: 'BOŞALTIM yaparak' },
          { id: 'D', text: 'Uyumayarak' },
          { id: 'E', text: 'Yüzerek' }
        ],
        correctOptionId: 'C',
        explanation: 'Atık maddelerin (çöplerin) hücreden (zarla) veya vücuttan (böbrek vb ile) uzaklaştırılması Boşaltım (Ortak özellik) ile olur.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Tek hücreli canlılarda (Amip, Paramesyum) özel bir boşaltım organı (böbrek vb) YOKTUR. Bu canlılar boşaltımı NASIL YAPARLAR?',
        options: [
          { id: 'A', text: 'Boşaltım yapmazlar, atıklarla yaşarlar.' },
          { id: 'B', text: 'Atıkları (CO2, Amonyak) Hücre Zarından dışarıya sızdırarak (Difüzyonla) veya özel zarsı kofullarla atarlar.' },
          { id: 'C', text: 'İçlerinde küçük böbrekler vardır.' },
          { id: 'D', text: 'Atıkları yakarak yok ederler.' },
          { id: 'E', text: 'Atıkları komşu bakteriye atarlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek hücreli olduğu için atığı doğrudan dış çevreye (suya) bırakmak kolaydır. Hücre zarı bu işi görür.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Bitkiler sonbaharda "YAPRAK DÖKEREK" aslında hangi ortak özelliği gerçekleştirmiş olurlar?',
        options: [
          { id: 'A', text: 'Hareket (Aktif yer değiştirme)' },
          { id: 'B', text: 'Beslenme' },
          { id: 'C', text: 'Boşaltım (Metabolik atıkların uzaklaştırılması)' },
          { id: 'D', text: 'Üreme' },
          { id: 'E', text: 'Oksijenli Solunum' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkiler yaz boyunca hücrelerinde biriken zehirli atıkları yaşlı yapraklarında biriktirir ve yaprağı dökerek bu atıklardan (çöpten) kurtulmuş (Boşaltım yapmış) olur.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'İnsanların çok sıcak havada vücut sıcaklığını düşürmek için TERLEMESİ bir "Homeostazi" tepkisidir. Terleme aynı zamanda vücuttan tuz ve su atılmasını sağladığı için HANGİ ORTAK ÖZELLİĞE DE GİRER?',
        options: [
          { id: 'A', text: 'Sindirim' },
          { id: 'B', text: 'Beslenme' },
          { id: 'C', text: 'Boşaltım' },
          { id: 'D', text: 'Büyüme' },
          { id: 'E', text: 'Solunum' }
        ],
        correctOptionId: 'C',
        explanation: 'Ter; içinde su, tuz ve az miktarda üre (atık) barındırır. Bu yüzden terleme, hem vücut ısısını dengeler (homeostazi) hem de boşaltım yapar.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir CANLININ METABOLİZMASINI HIZLANDIRAN dış etkenlerden biri OLABİLİR?',
        options: [
          { id: 'A', text: 'Derin uykuya dalmak' },
          { id: 'B', text: 'Soğuk havada (Memeliler için) vücut ısısını korumaya çalışmak (Titremek) veya Ağır egzersiz yapmak' },
          { id: 'C', text: 'Kış uykusu' },
          { id: 'D', text: 'Karanlıkta hareketsiz beklemek' },
          { id: 'E', text: 'Tohum halindeyken kuru kalmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Egzersiz, heyecan, aşırı soğukta vücut ısısını koruma çabası (titreme) enerji gerektiren durumlardır ve metabolizmayı hızlandırır (solunumu artırır).'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: '"Enzimler; belirli bir sıcaklıkta (Örn: 36 derece) ve belirli bir pH (asitlik/bazlık) değerinde çok iyi çalışır. Aşırı ısıda veya aşırı asitte yapıları bozulur." \nBu bilgiye dayanarak "HOMEOSTAZİNİN (İç dengenin)" canlı için neden ÇOK ÖNEMLİ OLDUĞUNU söyleyebiliriz?',
        options: [
          { id: 'A', text: 'Çünkü enzimler bozulursa hücrede yapım ve yıkım (metabolizma) durur ve canlı ölür.' },
          { id: 'B', text: 'Çünkü ısı enzimlere iyi gelir.' },
          { id: 'C', text: 'Çünkü homeostazi olmasa enzimler daha çok çalışırdı.' },
          { id: 'D', text: 'Çünkü enzimler sadece uyurken çalışır.' },
          { id: 'E', text: 'Çünkü pH kanı sulandırır.' }
        ],
        correctOptionId: 'A',
        explanation: 'İç dengemizi (Örn: vücudumuzu hep 36.5 derecede, kanımızı 7.4 pH\'da) sabit tutmaya çalışmamızın ANA SEBEBİ, fabrikamızın işçileri olan "Enzimlerin" sadece bu hassas dengelerde çalışabilmesidir.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Fotosentez yapan bir bitki YAPRAĞINDA, gece güneş battığında hangi olay DEVAM EDER, hangisi DURUR?',
        options: [
          { id: 'A', text: 'Solunum devam eder, Fotosentez durur.' },
          { id: 'B', text: 'Fotosentez devam eder, Solunum durur.' },
          { id: 'C', text: 'İkisi de durur.' },
          { id: 'D', text: 'İkisi de aynen devam eder.' },
          { id: 'E', text: 'Geceleri sadece su içer.' }
        ],
        correctOptionId: 'A',
        explanation: 'Solunum (Enerji/ATP üretimi) GECE-GÜNDÜZ, 7/24 hiç durmadan devam etmek ZORUNDADIR. Ama fotosentez (Besin üretimi) için IŞIK şarttır, karanlıkta durur.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: '"Gözyaşı" ve "Tükürük" gibi sıvıların vücut dışına (veya ağız içine) verilmesine "Salgılama" denir. Salgılama ile Boşaltımın temel FARKINI hangi cümle açıklar?',
        options: [
          { id: 'A', text: 'Salgılar atıktır, boşaltım ise faydalı maddedir.' },
          { id: 'B', text: 'Boşaltım ZARARLI/METABOLİK ATIKLARIN uzaklaştırılmasıdır. Salgılama ise hücrenin ÖZEL OLARAK KULLANMAK ÜZERE ürettiği YARARLI MADDELERİ (enzim vb) dışarı vermesidir.' },
          { id: 'C', text: 'Farkları yoktur.' },
          { id: 'D', text: 'Salgılama sadece böbrekte olur.' },
          { id: 'E', text: 'Salgılama sadece kışın olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tükürük ağzı ıslatır, enzimleri sindirim yapar (Faydalı bir maddedir/Salgıdır). İdrar veya Karbondioksit ise çöp (Atık/Boşaltım) maddesidir.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Katabolizma (Yıkım) tepkimeleri sırasında "her zaman enerji (ATP) Mİ ÜRETİLİR?"',
        options: [
          { id: 'A', text: 'Evet, bütün yıkımlar solunum gibidir, enerji üretir.' },
          { id: 'B', text: 'Hayır. Solunum (Bir yıkım) enerji ÜRETİRKEN; Sindirim (Başka bir yıkım) enerjiyi NE ÜRETİR NE DE HARCAR.' },
          { id: 'C', text: 'Evet, sindirim sırasında çok fazla ATP üretilir.' },
          { id: 'D', text: 'Yıkım sırasında hep ATP harcanır.' },
          { id: 'E', text: 'ATP bitkilerde harcanmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Katabolizma genel bir kelimedir (Parçalamak). Glikozu yakıp enerji (ATP) almak bir katabolizmadır, mideye inen eti enzimle sindirmek (parçalamak) de bir katabolizmadır ama sindirimden DOĞRUDAN ATP üretilmez.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Homeostazi, Uyarılara Tepki ve Adaptasyon (Easy)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: '"Karanlık bir odadan aniden aydınlık bir ortama çıkan insanın gözbebeklerinin küçülmesi." \nBu durum canlıların HANGİ ortak özelliği ile AÇIKLANIR?',
        options: [
          { id: 'A', text: 'Uyarılara (Işığa) Tepki Verme' },
          { id: 'B', text: 'Adaptasyon (Kalıtsal Uyum)' },
          { id: 'C', text: 'Solunum' },
          { id: 'D', text: 'Beslenme' },
          { id: 'E', text: 'Organizasyon' }
        ],
        correctOptionId: 'A',
        explanation: 'Işık şiddeti (Çevresel bir etki/Uyarı), canlının gözünü (durumunu) etkiler ve canlı buna koruyucu bir refleksle/davranışla cevap (Tepki) verir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Bitkiler yerinden oynayamazlar (Kökleriyle toprağa bağlıdırlar). Peki "Uyarılara Tepki Verirler mi?"',
        options: [
          { id: 'A', text: 'Hayır, sadece hayvanlar tepki verir.' },
          { id: 'B', text: 'Evet; ışığa doğru uzanarak (Yönelme) veya köklerini suya doğru bükerek uyarılara (ışık, su) TEPKİ VERİRLER.' },
          { id: 'C', text: 'Sadece rüzgarda yaprakları sallanırsa tepki sayılır.' },
          { id: 'D', text: 'Evet ama sadece koparıldıklarında.' },
          { id: 'E', text: 'Hayır, bitkilerde sinir sistemi yoktur, bu yüzden tepki sıfırdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tepki = Yerden kalkıp koşmak DEĞİLDİR. Bitkinin hormonlarıyla ışığa veya suya doğru (Yavaş da olsa) Yönelmesi (Tropizma) net bir "Uyarılara Tepki" örneğidir.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Tek hücreli Öglenanın üzerinde kırmızı bir "Gözlekesi (Işığa duyarlı bölge)" bulunur. Öglena bu gözlekesi sayesinde ışığı algılar ve kamçısını çırparak ışığa doğru yüzerek gider. \nÖglenanın bu tepkisinin BİYOLOJİK AMACI nedir?',
        options: [
          { id: 'A', text: 'Oyun oynamak' },
          { id: 'B', text: 'Karanlıktan korktuğu için' },
          { id: 'C', text: 'Işığa ulaşıp FOTOSENTEZ (Kendi besinini üretme) yapabilmek ve hayatta kalmak' },
          { id: 'D', text: 'Güneşlenmek' },
          { id: 'E', text: 'Sadece sıcaklamak için' }
        ],
        correctOptionId: 'C',
        explanation: 'Uyarılara tepki, canlının hayatta kalma (Besin bulma, kaçma vb) başarısını artırır. Öglena da ışığa giderek "Beslenme (Ototrof)" görevini yerine getirir.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Homeostazi, canlının iç dengesini "Negatif Geri Bildirim (Zıt Tepki)" ile sağlar. Bu cümleden ne anlıyoruz?',
        options: [
          { id: 'A', text: 'Canlı hep üzgündür.' },
          { id: 'B', text: 'Bir değer (Örn: Sıcaklık) yükselirse, vücut onu DÜŞÜRECEK (Zıt/Negatif) bir tepki (Terleme) verir. Değer düşerse, YÜKSELTECEK (Titreme) bir tepki verir. Böylece DENGE sağlanır.' },
          { id: 'C', text: 'Sıcaklık artarsa vücut daha çok sıcaklık artırır.' },
          { id: 'D', text: 'Değerler hep sıfıra çekilir.' },
          { id: 'E', text: 'Canlıların içi her zaman karanlıktır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Negatif geribildirim, sistemin kontrolden çıkmasını engeller. Direksiyonu sağa fazla kırarsan sola doğru toplamak (dengelemek) gibidir.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Kan şekeri aşırı düştüğünde karaciğerdeki depo şekerler kana karışarak kan şekerini "Normal (Dengeli)" seviyeye çeker. \nBu olay biyolojide HANGİ ORTAK ÖZELLİĞE KANITTIR?',
        options: [
          { id: 'A', text: 'Solunum' },
          { id: 'B', text: 'Hareket' },
          { id: 'C', text: 'Homeostazi (İç Denge)' },
          { id: 'D', text: 'Üreme' },
          { id: 'E', text: 'Adaptasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Kan şekeri, pH, su miktarı ve vücut ısısı gibi iç hayati değerlerin düzenlenmesi operasyonlarının tümü "Homeostazi" kapsamındadır.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Aynı türe (Örn: İnsan) ait bireyler birbirinden tamamen FARKLI dış görünüşlere, genetik özelliklere (Boy, saç, göz) sahip olabilir. Bu farklılıklara biyolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Homeostazi' },
          { id: 'C', text: 'Varyasyon (Genetik Çeşitlilik)' },
          { id: 'D', text: 'Klonlama' },
          { id: 'E', text: 'Metabolizma' }
        ],
        correctOptionId: 'C',
        explanation: 'Varyasyon "Çeşitlilik" demektir. Aynı tür içindeki (Aynı köpek cinsi içindeki farklı desenler vb) genetik farklılıklardır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: '"ADAPTASYON (Uyum)", popülasyondaki varyasyonlardan (özelliklerden) hangisinin ÇEVRE tarafından "SEÇİLMESİ" ile ortaya çıkar?',
        options: [
          { id: 'A', text: 'Ortama en UYGUN olanın (yaşama ve üreme şansını artıranın)' },
          { id: 'B', text: 'En renkli olanın' },
          { id: 'C', text: 'En zayıf olanın' },
          { id: 'D', text: 'Sadece çok büyük olanın' },
          { id: 'E', text: 'En sessiz olanın' }
        ],
        correctOptionId: 'A',
        explanation: 'Çevre bir sınavdır (Doğal Seçilim). Kutupta iseniz (Çevre), Beyaz postlu ve kalın yağlı (Varyasyon) olmak sizi hayatta tutar (Seçilir). Bu kalıtsal uyuma adaptasyon denir.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Aşağıdaki özelliklerden hangisi BİREYİN SONRADAN YAŞAYARAK kazandığı geçici bir durum (Modifikasyon/Aklimasyon) DEĞİL, doğuştan gelen ve yavruya aktarılan KALITSAL BİR ADAPTASYONDUR?',
        options: [
          { id: 'A', text: 'Ağırlık çalışan adamın kaslarının büyümesi' },
          { id: 'B', text: 'Dağcıların yüksekte (oksijensiz) kırmızı kan hücresini artırması' },
          { id: 'C', text: 'Develerin sırtında hörgüç (yağ) DEPOLAYABİLECEK ŞEKİLDE DOĞMASI' },
          { id: 'D', text: 'Saçların boyatılması' },
          { id: 'E', text: 'Kolun güneşte yanması' }
        ],
        correctOptionId: 'C',
        explanation: 'Devenin hörgücü DNA\'sına kazınmıştır (Adaptasyondur). Yavrusu da çölden başka bir yere doğsa bile hörgüçlü doğar. Kas veya bronzlaşmak ise "Sonradan/Geçici (Kalıtsal Olmayan)" çevresel değişimlerdir.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Nilüfer bitkisi suyun üstünde yüzer ve yaprakları Kocamandır. Kaktüs bitkisi çölde yaşar ve yaprakları Diken Şeklindedir. \nBu iki bitkinin tamamen FARKLI yapraklara sahip olmasının EVRİMSEL (Biyolojik) AÇIKLAMASI nedir?',
        options: [
          { id: 'A', text: 'İkisi de tamamen rastgele olmuştur.' },
          { id: 'B', text: 'Bitkiler canlarının istediği şekli alabilirler.' },
          { id: 'C', text: 'FARKLI çevre şartlarının (Bol su vs Kuraklık), hayatta kalmak için FARKLI kalıtsal özelliklere (ADAPTASYONLARA) zorlaması.' },
          { id: 'D', text: 'İkisinin de fotosentez yapmaması.' },
          { id: 'E', text: 'Nilüferin daha yaşlı olması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Nilüfer bol sudadır, suyu terleyip atması gerekir (Geniş yaprak). Kaktüs kuraktadır, suyunu koruması gerekir (Diken yaprak). Bunlar çevreye kusursuz Adaptasyonlardır.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: '"Bukalemunların renk değiştirerek bulundukları ağacın dalına benzemesi (Kamuflaj)." \nKamuflaj, canlının EN ÇOK HANGİ başarısını ARTIRAN BİR ADAPTASYONDUR?',
        options: [
          { id: 'A', text: 'Solunum' },
          { id: 'B', text: 'Sindirim' },
          { id: 'C', text: 'Düşmanlardan saklanma (Hayatta kalma) ve Avlanma başarısını' },
          { id: 'D', text: 'Fotosentez yapma başarısını' },
          { id: 'E', text: 'Homeostaziyi (Terlemeyi)' }
        ],
        correctOptionId: 'C',
        explanation: 'Bukalemun renk değiştirerek görünmez olur. Böylece hem kuşlar onu yiyemez (Hayatta kalır), hem de avına sezdirmeden yaklaşır (Beslenir).'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Güneşin altında çok durduğunuzda teninizin bronzlaşması (esmerleşmesi), genlerinizin (DNA\'nızın) yapısını DEĞİŞTİRİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, genlerim tamamen siyah olur.' },
          { id: 'B', text: 'Hayır; bronzlaşma geçicidir (Modifikasyon). DNA yapınız değişmez, sadece işleyişi (boya üretimi) geçici artar. Kışın eski haline döner ve ÇOCUĞUNUZA AKTARILMAZ.' },
          { id: 'C', text: 'Evet, çocuğum doğuştan bronz doğar.' },
          { id: 'D', text: 'Hayır, çünkü deride hücre yoktur.' },
          { id: 'E', text: 'Evet, kalıcı bir adaptasyondur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bireyin yaşamı boyunca kazandığı (kas, bronzlaşma, yara izi) özellikler üreme hücrelerine (sperm/yumurta) işlemediği sürece yavruya geçmez ve "Adaptasyon" SAYILMAZ.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: '"Kutup ayıları, ortam soğuk olduğu için İHTİYAÇ DUYUP bilerek kalın yağ tabakası oluşturmuşlardır." cümlesi BİYOLOJİK AÇIDAN DOĞRU MUDUR?',
        options: [
          { id: 'A', text: 'Evet, çok zeki hayvanlardır.' },
          { id: 'B', text: 'Hayır. Adaptasyonlar CANLININ İHTİYACINA GÖRE veya ÇABASIYLA BİLEREK ortaya ÇIKMAZ. Doğada ZATEN VAR OLAN varyasyonlardan (kalın yağlı doğanlardan), ortama uygun olanların tesadüfen hayatta kalması (Doğal Seçilim) ile nesilden nesile yayılır.' },
          { id: 'C', text: 'Evet, çok yiyerek bilerek yapmışlardır.' },
          { id: 'D', text: 'Hayır, kutupta ayılar yaşamaz.' },
          { id: 'E', text: 'Evet, bu bir spordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrim ve adaptasyon "amaçlı" (canlının isteğiyle) yürümez. "Seçilim" yoluyla ilerler. İnce tüylü olanlar donarak ölür, kalın tüylüler yaşar ve ürer, sonuçta tür kalın tüylüye evrilir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Aşağıdaki ortak özelliklerden hangisi CANLININ ÇEVRESİYLE UYUMU (Etkileşimi) ile DOĞRUDAN İLGİLİ DEĞİLDİR (Sadece kendi iç çalışmasıdır)?',
        options: [
          { id: 'A', text: 'Uyarılara Tepki' },
          { id: 'B', text: 'Adaptasyon' },
          { id: 'C', text: 'Beslenme (Dışarıdan madde alma)' },
          { id: 'D', text: 'Çekirdekte DNA Eşlenmesi (Sadece iç bir organizasyon)' },
          { id: 'E', text: 'Avından Kaçma Hareketi' }
        ],
        correctOptionId: 'D',
        explanation: 'DNA nın kendini eşlemesi tamamen içsel (bölünme hazırlığı) bir durumdur. Çevreyle bir etkileşim veya çevreye bir uyum süreci değildir.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Küstüm otu (bir bitki) yapraklarına dokunulduğunda hemen yapraklarını kapatarak boynunu büker. Bu olay hangi İKİ Ortak özelliğin birleşimidir?',
        options: [
          { id: 'A', text: 'Üreme ve Solunum' },
          { id: 'B', text: 'Uyarılara Tepki (Dokunmayı algılaması) ve Hareket (Nasti - Durum değiştirmesi)' },
          { id: 'C', text: 'Boşaltım ve Beslenme' },
          { id: 'D', text: 'Metabolizma ve Büyüme' },
          { id: 'E', text: 'Fotosentez ve Terleme' }
        ],
        correctOptionId: 'B',
        explanation: 'Dokunma (Uyarandır). Yaprağın bükülmesi ise bitkinin buna verdiği fiziksel "Hareket (Nasti) Tepkisidir".'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: '"Canlılar sürekli çevreyle savaş halindedir. Eğer Homeostazi, Tepki veya Adaptasyon güçleri zayıf olursa hücre veya organizma yıkıma uğrar." \nBu cümlede Canlılığın EN BÜYÜK DÜŞMANI olarak ne gösterilmektedir?',
        options: [
          { id: 'A', text: 'Diğer canlılar' },
          { id: 'B', text: 'Uzaylılar' },
          { id: 'C', text: 'Sürekli değişen (iç ve dış) ÇEVRE ŞARTLARI' },
          { id: 'D', text: 'Güneş ışığı' },
          { id: 'E', text: 'Su' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılığın bütün çabası; sıcak, soğuk, susuzluk, tehlike gibi sürekli DEĞİŞEN çevre (iç ve dış) faktörlerine karşı ayakta kalma çabasıdır.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Üreme, Büyüme ve Gelişme Kavramları (Easy)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Büyüme ve Gelişme kelimeleri günlük hayatta aynı anlamda kullanılsa da Biyolojide farklıdırlar. Büyüme NİCEL (Ölçülebilir kütle/sayı) bir artışken, Gelişme NİTEL (olgunlaşma) bir değişimdir. \nBuna göre aşağıdakilerden hangisi bir BÜYÜME olayıdır?',
        options: [
          { id: 'A', text: 'Bebeğin YÜRÜMEYİ öğrenmesi' },
          { id: 'B', text: 'Tohumdan ağaç olması' },
          { id: 'C', text: 'Bir çocuğun kemiklerindeki hücre sayısının artarak BOYUNUN UZAMASI' },
          { id: 'D', text: 'Kuşun uçmayı öğrenmesi' },
          { id: 'E', text: 'Sınavda başarılı olmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Boy uzaması (Hücre sayısının mitozla çoğalması) fiziksel (Nicel/Ölçülebilen) bir Büyümedir. Kasların güçlenip yürümeyi "öğrenmesi (olgunlaşması)" ise Gelişmedir.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Hayvanlarda (ve insanlarda) büyüme BELİRLİ BİR YAŞA kadar hızlıdır ve sonra (erginlikte) DURUR. \nBitkilerde (Ağaçlarda) ise büyüme nasıldır?',
        options: [
          { id: 'A', text: 'Bitkilerde de belli bir yaşta durur.' },
          { id: 'B', text: 'Sadece 1 yıl büyürler.' },
          { id: 'C', text: 'Bitkilerde (Özel Meristem dokuları sayesinde) yaşamları boyunca "SINIRSIZ (Sürekli)" büyüme görülebilir.' },
          { id: 'D', text: 'Sadece kışın büyürler.' },
          { id: 'E', text: 'Büyümezler, hep aynı kalırlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hayvanlarda büyüme sınırlı, bitkilerde (uç kısımlardaki bölünür dokular sayesinde) genel olarak sınırsızdır (Yüzlerce yıl büyüyen/uzayan ağaçlar vardır).'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Tek hücreli (Paramesyum/Amip) canlılar nasıl BÜYÜRLER?',
        options: [
          { id: 'A', text: 'Hücre bölünmesi geçirerek (sayı artırarak)' },
          { id: 'B', text: 'Çok hücreli bir canlıya dönüşerek' },
          { id: 'C', text: 'Sitoplazma (Sıvı) miktarlarını ve HACİMLERİNİ (Kütlelerini) ARTIRARAK' },
          { id: 'D', text: 'Sürekli su kaybederek' },
          { id: 'E', text: 'Işınlanarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek hücreli mitoz/bölünme geçirirse ÇOĞALMIŞ (Üremiş) olur, büyümez. Onların büyümesi sadece var olan tek odanın (hücrenin) şişmesi/kütlece artmasıdır.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Zigot (Döllenmiş yumurta - tek bir hücre), anne karnında sürekli MİTOZ BÖLÜNMELER geçirip hücre sayısını artırarak trilyonlarca hücreden oluşan Bebeği oluşturur. \nZigotun bebeğe dönüşmesi sürecine genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Bozunma' },
          { id: 'B', text: 'Sadece Büyüme' },
          { id: 'C', text: 'Embriyonik Gelişme (Büyüme + Farklılaşma + Olgunlaşma)' },
          { id: 'D', text: 'Üreme (Yavru doğurma eylemi değil, içerideki süreç)' },
          { id: 'E', text: 'Adaptasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre sayısının artması büyümedir, ama o hücrelerin farklılaşarak gözü, kalbi, karaciğeri yapması "Gelişme"dir. Bu sürece embriyonik gelişme denir.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Bir bireyin HAYATTA KALMASI İÇİN "Büyüme" (Çocukluktan ergenliğe/yetişkinliğe kütle artışı) zorunludur. Peki ÜREME zorunlu mudur?',
        options: [
          { id: 'A', text: 'İkisi de birey için zorunlu değildir.' },
          { id: 'B', text: 'Büyüme de üreme de canlı için anında ölmek demektir.' },
          { id: 'C', text: 'Hayatta kalmak (birey olmak) için ÜREME ZORUNLU DEĞİLDİR. (Üreme, sadece türün devamı için şarttır)' },
          { id: 'D', text: 'Üreme kalbin atması gibidir, şarttır.' },
          { id: 'E', text: 'Sadece erkekler için zorunludur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tekrar hatırlatma (ÖSYM çok sorar): Birey üremese de tam ve eksiksiz bir canlıdır, yaşar.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Bitkilerde bir daldan koparılan parçanın toprağa ekilip ondan KOPARILAN AĞAÇLA TIPA TIP AYNI yeni bir ağaç olması ne tür bir üremedir?',
        options: [
          { id: 'A', text: 'Eşeyli Üreme' },
          { id: 'B', text: 'Tohumla Üreme' },
          { id: 'C', text: 'Eşeysiz Üreme (Çelikle/Vejetatif) - Genetik çeşitlilik OLMAZ' },
          { id: 'D', text: 'Meyve verme' },
          { id: 'E', text: 'Büyüme' }
        ],
        correctOptionId: 'C',
        explanation: 'Eşeysiz üremede erkek/dişi hücresi (sperm, polen vb) olmadan doğrudan annenin birebir (klon) kopyası oluşturulur.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Bitkinin çiçek açıp, "Polen" (erkek hücre) ile "Yumurta" (dişi hücre) hücresini birleştirerek TOHUM (ve meyve) oluşturması ne tür bir üremedir?',
        options: [
          { id: 'A', text: 'Eşeysiz Üreme' },
          { id: 'B', text: 'Klonlama' },
          { id: 'C', text: 'Eşeyli Üreme - Genetik çeşitlilik SAĞLAR' },
          { id: 'D', text: 'Parçalanma' },
          { id: 'E', text: 'Vejetatif' }
        ],
        correctOptionId: 'C',
        explanation: 'Polen (sperm karşılığı) ve Yumurta (Eşey/Üreme hücreleri) işin içine girip döllenme (Tohum) oluyorsa, bu iki farklı genin karıştığı EŞEYLİ üremedir.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Bakterilerin (Prokaryotların) ÜREMESİ genellikle HANGİ YÖNTEMLE olur?',
        options: [
          { id: 'A', text: 'Tohum üreterek' },
          { id: 'B', text: 'Yumurta bırakarak' },
          { id: 'C', text: 'Hücrelerinin ortadan boğumlanarak "İkiye Bölünmesi" (Eşeysiz Üreme) yoluyla' },
          { id: 'D', text: 'Çiçek açarak' },
          { id: 'E', text: 'Polen saçarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteriler çok basit canlılardır. Sadece tek hücreleri vardır. DNA\'sını kopyalar ve ortadan ikiye kırılarak (Bölünerek) çoğalırlar (Ürerler).'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Eşeysiz üremenin (Klonlanmanın), Eşeyli üremeye göre (Çeşitliliğe göre) EVRİMSEL (Hayatta kalma) AÇIDAN EN BÜYÜK DEZAVANTAJI (kötü yanı) nedir?',
        options: [
          { id: 'A', text: 'Çok hızlı olması' },
          { id: 'B', text: 'Genetik Çeşitlilik (Varyasyon) SAĞLAMADIĞI İÇİN, çevre şartları (Hastalık, soğuk vb) KÖTÜYE gittiğinde TÜM POPÜLASYONUN AYNI ANDA ölme riskinin yüksek olması.' },
          { id: 'C', text: 'Çok yavaş olması' },
          { id: 'D', text: 'Çok fazla yavru vermesi' },
          { id: 'E', text: 'Su gerektirmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kopya bireyler aynı zayıflıkları taşır. Bir hastalık geldiğinde biri dayanıksızsa hepsi dayanıksızdır ve soy tükenebilir. Eşeyli üreme (Çeşitlilik) ise sigortadır (Bazıları farklı dirençlere sahip doğar).'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: '"Genetik çeşitlilik (Farklı anne ve babadan gelen genlerin karışması) değişen çevre şartlarında TÜRÜN DEVAMLILIĞI için BÜYÜK BİR AVANTAJDIR." \nBuna göre canlılar neden MİLYARLARCA yıldır "Eşeyli Üremeyi" koruyarak evrimleşmişlerdir?',
        options: [
          { id: 'A', text: 'Sadece zevk için' },
          { id: 'B', text: 'Çünkü eşeysiz üreme çok zordur.' },
          { id: 'C', text: 'Çünkü farklı gen kombinasyonları (Varyasyonlar), ortaya çıkacak zorlu (yeni) çevrelerde HAYATTA KALABİLECEK YENİ UYUMLU (Adaptif) BİREYLER yaratma şansını çok YÜKSELTİR.' },
          { id: 'D', text: 'Çünkü herkes aynı olmak ister.' },
          { id: 'E', text: 'Sadece çok büyük hayvanlar eşeyli ürer.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eşeyli üreme, Doğanın gen kartlarını sürekli yeniden karmasıdır. Karılan her yeni el (yeni birey), yeni zorlukları yenebilecek potansiyel (sigorta) barındırır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Bütün CANLI TÜRLERİ ürer. Ancak ÜREMENİN (Çoğalmanın) YÖNTEMİ bütün canlılarda "Ortak mıdır"?',
        options: [
          { id: 'A', text: 'Evet, hepsi ikiye bölünür.' },
          { id: 'B', text: 'Evet, hepsi tohum yapar.' },
          { id: 'C', text: 'Hayır. "Üreme OLAYI" tür için ortaktır, fakat "Üreme ŞEKLİ" (Kimi eşeyli, kimi eşeysiz, kimi doğurarak, kimi yumurtlayarak vb) canlıdan canlıya DEĞİŞİR (Ortak değildir).' },
          { id: 'D', text: 'Evet, hepsi doğurur.' },
          { id: 'E', text: 'Hayır, bitkiler üremez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tıpkı Solunum (Oksijenli/Oksijensiz) ve Beslenme (Ototrof/Heterotrof) gibi, olayın "Amacı (Süreç)" ortaktır, ancak "Yöntemi (Detayı)" farklılık gösterir.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Canlıların DNA dizilimlerinin birbirine çok benzemesi neyin göstergesidir?',
        options: [
          { id: 'A', text: 'Aynı besini yediklerinin' },
          { id: 'B', text: 'Aynı boyda olduklarının' },
          { id: 'C', text: 'Evrimsel olarak ORTAK BİR ATADAN (Geçmişten) geldiklerinin ve yakın akraba olduklarının' },
          { id: 'D', text: 'Aynı ormanda yaşadıklarının' },
          { id: 'E', text: 'Hiçbir şeyin' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA kalıtsal (soydan gelen) bir şifredir. İki canlının (Örn: Şempanze ve İnsan) DNA\'sı %98 benziyorsa, bu onların beslenme değil soylarının (atalarının) yakın olduğunu gösterir.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Mutasyon nedir ve canlılık (Varyasyon/Adaptasyon) için önemi nedir?',
        options: [
          { id: 'A', text: 'Sadece çizgi romanlarda olur.' },
          { id: 'B', text: 'Canlının büyümesini hızlandıran vitamindir.' },
          { id: 'C', text: 'DNA şifresindeki RASTGELE BOZULMA veya DEĞİŞİMLERDİR. Çoğu zararlı olsa da, bazıları "Yeni ve faydalı Özellikler (Varyasyonlar)" yaratarak Adaptasyona (Evrime) HAMMADDE sağlar.' },
          { id: 'D', text: 'Hücre zarının yırtılmasıdır.' },
          { id: 'E', text: 'Her zaman öldürücüdür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mutasyon, genetik fotokopi çekilirken yapılan bir "yazım hatasıdır". Ancak bazen bu hata (Örn: Daha kalın tüy çıkaran bir hata), canlının o ortamda daha iyi yaşamasını sağlar.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Hücresel yapı, Metabolizma, Beslenme, Solunum, Boşaltım, Büyüme, Tepki, Homeostazi, Üreme ve Adaptasyon. \nTüm bu özelliklerin BİR ARADA bulunması biyolojide HANGİ TEMEL KAVRAMI tanımlar?',
        options: [
          { id: 'A', text: 'Sadece insanı' },
          { id: 'B', text: 'Cansız doğayı' },
          { id: 'C', text: 'CANLILIĞI (Yaşamı)' },
          { id: 'D', text: 'Virüsleri' },
          { id: 'E', text: 'Mineralleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek tek bakıldığında cansızlarda da bulunabilen bazı özelliklerin (Hareket, Büyüme vb), HÜCRESEL bir sistem içinde organize olup birbirine bağlı (Metabolizma vb) yürümesi "CANLILIK" dediğimiz olgudur.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Canlıların Ortak Özellikleri konusunu özetleyen en önemli ders HANGİSİDİR?',
        options: [
          { id: 'A', text: 'Tüm canlılar her şeyi tamamen aynı (Birebir) yollarla yapar.' },
          { id: 'B', text: 'Hayvanlar bitkilerden daha canlıdır.' },
          { id: 'C', text: 'Bütün CANLILAR hayatta kalmak ve üremek için aynı AMAÇLARI (Solunum, Beslenme vb) güder, ancak YÖNTEMLERİ (Çeşitlilik/Evrim) canlıdan canlıya GÜZEL BİR FARKLILIK gösterir.' },
          { id: 'D', text: 'Cansızlar canlılardan türemiştir.' },
          { id: 'E', text: 'Bitkiler canlı sayılmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojinin özü budur: Hedef Ortak, Yöntem Çeşitlidir. Her canlı kendi ortamına göre bir "Yöntem" (Adaptasyon) geliştirmiştir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'ÖSYM Tarzı Yanılgılar ve Sınır Kavramlar (Easy)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: '"Canlıların tümü çok hücreli bir organizasyona sahiptir." cümlesindeki BİYOLOJİK HATA nedir?',
        options: [
          { id: 'A', text: 'Hücre diye bir şey yoktur.' },
          { id: 'B', text: 'Bitkiler tek hücrelidir.' },
          { id: 'C', text: 'Bakteriler ve arkeler gibi canlılar TEK HÜCRELİDİR. Bu yüzden organizasyonları hücre düzeyinde biter.' },
          { id: 'D', text: 'Bütün canlılar dokuya sahiptir.' },
          { id: 'E', text: 'Virüsler çok hücrelidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok hücreli olmak ortak özellik değildir. Tek hücreli milyarlarca canlı (bakteri, amip) vardır.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Virüsler (Grip virüsü vb.) "Hücresel yapıda" OLMAMALARINA rağmen canlılara ÖZGÜ HANGİ ÖZELLİKLERİ GÖSTERİRLER?',
        options: [
          { id: 'A', text: 'Oksijenli solunum yaparlar.' },
          { id: 'B', text: 'Hücre zarı taşırlar.' },
          { id: 'C', text: 'Organik besin sentezlerler (Ototrof).' },
          { id: 'D', text: 'Bölünerek büyürler.' },
          { id: 'E', text: 'DNA veya RNA (Genetik Şifre) taşırlar ve (Hücre içine girince) ÇOĞALABİLİRLER.' }
        ],
        correctOptionId: 'E',
        explanation: 'Virüslerin tek canlılık belirtisi bir şifre (DNA/RNA) taşımaları ve bir hücreyi ele geçirdiklerinde bu şifreyi kopyalatıp üreyebilmeleridir. Başka hiçbir ortak özellikleri yoktur.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: '"Her canlının mutlaka Doku, Organ ve Sistemlere sahip olması gerekir" yargısı NEDEN YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü dokular eskimiştir.' },
          { id: 'B', text: 'Çünkü Tek hücrelilerde zaten bu yapıların olması İMKANSIZDIR (Doku, binlerce hücrenin birleşmesiyle oluşur).' },
          { id: 'C', text: 'Çünkü organlar sadece insanda vardır.' },
          { id: 'D', text: 'Çünkü sadece sistem vardır, organ yoktur.' },
          { id: 'E', text: 'Çünkü bitkilerde organ yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Doku, organ, sistem kavramları ancak "ÇOK HÜCRELİ" gelişmiş canlılarda bulunur. Ortak özellik değildir.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: '"Bir varlık hareket ediyorsa kesinlikle canlıdır." (Örn: Rüzgarda uçan yaprak, bulutlar, makineler). Biyoloji bu genellemeyi neden kabul etmez?',
        options: [
          { id: 'A', text: 'Çünkü hareket eden her şey durur.' },
          { id: 'B', text: 'Canlılık için tek başına hareket YETMEZ; hücresel yapı, metabolizma, büyüme gibi özelliklerin BİRLİKTE bulunması gerekir.' },
          { id: 'C', text: 'Çünkü makineler çok hızlıdır.' },
          { id: 'D', text: 'Çünkü bulutlar beyazdır.' },
          { id: 'E', text: 'Çünkü sadece bitkiler canlıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir kriter canlılığı tanımlayamaz. Bütün yaşamsal faaliyetler seti birlikte (Sistem halinde) olmalıdır.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: '"Solunum yapmak (ATP üretmek) tüm canlılar için ortaktır, fakat solunumda OKSİJEN KULLANMAK ortak değildir." cümlesini doğrulayan canlı grubu hangisidir?',
        options: [
          { id: 'A', text: 'Oksijensiz solunum veya fermantasyon yapan bazı Bakteriler' },
          { id: 'B', text: 'İnsanlar' },
          { id: 'C', text: 'Ağaçlar (Bitkiler)' },
          { id: 'D', text: 'Balıklar' },
          { id: 'E', text: 'Kuşlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Birçok bakteri ve arke türü oksijenin zehirli olduğu veya bulunmadığı yerlerde yaşar ve ATP\'sini Oksijensiz solunumla üretir.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Canlılar için "Boşaltım Yapmak" ortak bir özelliktir. Ancak "Böbrek ile boşaltım yapmak" Neden ORTAK DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Çünkü bitkilerin ve tek hücrelilerin böbreği YOKTUR (Atıklarını yaprak dökerek veya zar yüzeyinden atarlar).' },
          { id: 'B', text: 'Çünkü böbrek kalptedir.' },
          { id: 'C', text: 'Çünkü kuşlarda böbrek yoktur.' },
          { id: 'D', text: 'Çünkü idrar boşaltım değildir.' },
          { id: 'E', text: 'Çünkü böbrek sadece su içer.' }
        ],
        correctOptionId: 'A',
        explanation: 'Olay (Boşaltım) ortaktır. Ancak bu olayı yapan organ/yöntem (Böbrek, yaprak dökümü, kontraktil koful vb) farklıdır (Ortak değildir).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: '"Bütün hayvanlar aktiftir (Koşar, yüzer). Bütün bitkiler pasiftir." cümlesindeki yanlışlığı DÜZELTEN ifade hangisidir?',
        options: [
          { id: 'A', text: 'Evet, bu cümle %100 doğrudur.' },
          { id: 'B', text: 'Bitkiler de yürüyebilir.' },
          { id: 'C', text: 'Sünger veya Mercan gibi hayvanlar yere/kayaya SABİTTİR (Pasiftir). Ayrıca bitkiler (Örn: Küstüm otu) nasti hareketleriyle TEPKİ (Hareket) verebilir.' },
          { id: 'D', text: 'Sadece balıklar aktiftir.' },
          { id: 'E', text: 'Hayvanlar fotosentez yapabilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün hayvanlar koşmaz (Mercan/Sünger yerinden kıpırdamaz). Bitkiler de tamamen hareketsiz değildir (Çiçek açar, güneşe döner vb).'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: '"Canlılarda Büyüme ortaktır. Dolayısıyla her canlı hücre BÖLÜNEREK (Hücre sayısını artırarak) büyür." \nBu ifade Tek Hücreliler için Neden YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Tek hücreli bölünürse ÇOĞALMIŞ (Üremiş) olur, bu bir büyüme değildir. Tek hücreli sadece şişerek (Hacim artırarak) büyür.' },
          { id: 'B', text: 'Tek hücreliler mitoz geçirmez.' },
          { id: 'C', text: 'Tek hücrelilerin sayısı milyarlara ulaşabilir.' },
          { id: 'D', text: 'Sadece amip bölünür.' },
          { id: 'E', text: 'Sadece çok hücreliler hacim artırır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bakteri bölündüğünde artık elinde iki bakteri vardır. Boyu uzamamıştır, kopyası oluşmuştur. Yani hücre sayısındaki artış ÇOK HÜCRELİLERDE Büyüme, TEK HÜCRELİLERDE Üremedir.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: '"Üremek (Çoğalmak) canlılığın ZORUNLU bir şartıdır. Üremeyen canlı ÖLÜR." \nKatır (At ile eşeğin kısır yavrusu) bu kuralı nasıl yıkar?',
        options: [
          { id: 'A', text: 'Katır canlı değildir.' },
          { id: 'B', text: 'Katır aslında bitkidir.' },
          { id: 'C', text: 'Üreme, CANLININ YAŞAMASI İÇİN DEĞİL, sadece "TÜRÜN" neslini devam ettirmesi için zorunludur. Katır üreyemez (kısırdır) ama sağlıklı bir şekilde yaşar.' },
          { id: 'D', text: 'Katırlar ölümsüzdür.' },
          { id: 'E', text: 'Katır sadece uyur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Birey =/ Tür. Bir bireyin yaşaması için nefes, besin, boşaltım şarttır. Üreme şart değildir. (Katır, İşçi arılar kısır ama canlıdır).'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Metabolizma "Sentez (Anabolizma)" ve "Yıkım (Katabolizma)" olmak üzere ikiye ayrılır. \nHangi canlı grubunda SADECE Anabolizma (Sentez) vardır, Yıkım yoktur?',
        options: [
          { id: 'A', text: 'Bitkiler' },
          { id: 'B', text: 'Bakteriler' },
          { id: 'C', text: 'HİÇBİRİNDE. Canlı olan her hücre hem bir şeyler üretmek (Anabolizma) hem de bir şeyleri yıkıp enerji bulmak (Katabolizma) zorundadır.' },
          { id: 'D', text: 'Mantarlar' },
          { id: 'E', text: 'Bebekler' }
        ],
        correctOptionId: 'C',
        explanation: 'Sadece yapım yapan veya sadece yıkım yapan bir canlı hücre YOKTUR. İkisi bir bütündür (Metabolizmadır) ve her canlıda ikisi de aynı anda (farklı hızlarda da olsa) yürür.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Ribozom, canlılar dünyasında istisnasız HER HÜCREDE (prokaryot/ökaryot) bulunan tek organeldir. \nBu durum tüm canlıların HANGİ OLAYI kendi başına YAPMAK ZORUNDA olduğunu gösterir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Oksijenli Solunum' },
          { id: 'C', text: 'PROTEİN SENTEZİ (Enzim ve yapı taşı üretimini)' },
          { id: 'D', text: 'Yağ yakımı' },
          { id: 'E', text: 'İdrar üretimi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ribozom = Protein Sentezi. Enzimler proteinseldir. Enzimi olmayan hücre ölür. Bu yüzden her hücre kendi proteinini (ribozomla) yapmak ZORUNDADIR (Virüsler hariç, onlar hücre değildir).'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Bitkiler ototroftur (besin üretir). Hayvanlar heterotroftur (besin tüketir). Ancak iki grubun HÜCRELERİNE (İçine) bakıldığında bir ORTAKLIK göze çarpar. \nİkisi de organik besinleri hücre içinde PARÇALAYARAK HANGİ ORTAK MOLEKÜLÜ elde eder?',
        options: [
          { id: 'A', text: 'Klorofil' },
          { id: 'B', text: 'ATP (Enerji - Hücresel Solunumla)' },
          { id: 'C', text: 'Sadece Su' },
          { id: 'D', text: 'Glikojen' },
          { id: 'E', text: 'Plastit' }
        ],
        correctOptionId: 'B',
        explanation: 'Besini nasıl elde ettiğin (Ototrof/Heterotrof) farklıdır. Ama hücrenin içine giren o besini YAKIP "ATP" Yaratmak (Solunum) ORTAKTIR.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: '"Canlılarda hücresel yapı ortaktır. Bu yüzden tüm canlıların dış kısmında HÜCRE ÇEPERİ (Duvarı) bulunur." \nİfadesi NEDEN KESİNLİKLE YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü bitkilerde çeper yoktur.' },
          { id: 'B', text: 'Çünkü Hayvan hücrelerinde (İnsan dahil) Hücre Çeperi/Duvarı KESİNLİKLE YOKTUR. (Sadece zar vardır).' },
          { id: 'C', text: 'Çünkü bakteriler demirden çeper yapar.' },
          { id: 'D', text: 'Çünkü çeper sadece virüslerde olur.' },
          { id: 'E', text: 'Çünkü zarlar patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre Zarı ortaktır, ancak ZARIN ETRAFINDAKİ sert kabuk (Duvar/Çeper) bitki, bakteri ve mantarda varken HAYVANLARDA (ve protistaların çoğunda) YOKTUR.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Aşağıda verilen hücresel özelliklerden hangisi "BİR CANLININ HANGİ ALEMDE (Bakteri mi, Bitki mi, Hayvan mı vb) OLDUĞUNU TESPİT ETMEK" için KULLANILAMAZ? (Çünkü hepsinde vardır)',
        options: [
          { id: 'A', text: 'Kloroplast (Fotosentez)' },
          { id: 'B', text: 'Hücre Duvarı varlığı/yokluğu' },
          { id: 'C', text: 'Hücre Zarı ve Sitoplazmaya sahip olması' },
          { id: 'D', text: 'Çekirdeğinin olması veya olmaması' },
          { id: 'E', text: 'Glikojen depolaması' }
        ],
        correctOptionId: 'C',
        explanation: 'Zar ve sitoplazma evrenseldir (herkeste vardır). Bunlara bakarak "Bu bir hayvandır" veya "Bu bir bakteridir" diyemezsiniz. Ama çekirdek yoksa (Bakteridir/Arkedir) diyebilirsiniz.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir bitkinin UYARILARA TEPKİ verdiğinin (Hareketsiz bir taş olmadığının) EN BELİRGİN örneğidir?',
        options: [
          { id: 'A', text: 'Çiçeklerinin kokması' },
          { id: 'B', text: 'Köklerinin toprakta Su ve Gübre (Mineral) olan bölgeye DOĞRU uzaması (Yönelmesi)' },
          { id: 'C', text: 'Rüzgarda sallanması' },
          { id: 'D', text: 'Meyvesinin düşmesi' },
          { id: 'E', text: 'Kuruyup sararması' }
        ],
        correctOptionId: 'B',
        explanation: 'Rüzgarda sallanmak pasif fiziktir (Cansızda da olur). Ama "Suyu algılayıp, hücre bölünmesini o yönde artırarak suya doğru uzamak (Hidrotropizma)" canlıya özgü net bir Biyolojik Tepkidir.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Orta Düzey Kavram Yorumları (Medium)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Canlıların ortak özelliklerinden "Homeostazi" ile ilgili, \nI. Değişen dış çevre koşullarına rağmen iç ortamın "dinamik bir dengede" tutulmasıdır. \nII. Sadece hayvanlarda (gelişmiş sinir sistemine sahip canlılarda) görülür. \nIII. Terleme, kan şekerinin düzenlenmesi, zehirlerin atılması homeostaziye hizmet eder.\nİfadelerinden hangileri doğrudur?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I ve III' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'C',
        explanation: 'Homeostazi tüm canlıların (tek hücreliden bitkiye) ortak özelliğidir. II. öncül (Sadece hayvanlarda olur) yanlıştır.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Biyolojik organizasyon şeması (Atom -> Molekül -> Organel -> Hücre -> Doku -> Organ -> Sistem -> Organizma -> Popülasyon) incelendiğinde; \nAşağıdaki çıkarımlardan hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Canlılık özellikleri (Metabolizma vb) "Hücre" düzeyinde başlar.' },
          { id: 'B', text: 'Her canlı bu organizasyon basamaklarının "TAMAMINA (Sistem düzeyine kadar)" sahip olmak ZORUNDADIR.' },
          { id: 'C', text: 'Organel, kendi başına canlı kabul edilmez.' },
          { id: 'D', text: 'Popülasyon, "birden fazla bireyin (aynı türden)" oluşturduğu, birey üstü bir organizasyondur.' },
          { id: 'E', text: 'Doku düzeyi sadece çok hücreli canlılarda görülebilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Amip, bakteri gibi tek hücrelilerin organizasyonu "Hücre" düzeyinde YARIDA KESİLİR (Biter). Doku, organ, sistem aşamalarına asla geçemezler.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir bakteri popülasyonunu penisilinli (antibiyotik) bir ortama koyuyorsunuz. Bakterilerin %99\'u ölüyor. Kalan %1\'i ise yaşıyor ve çoğalarak 2 gün içinde bulundukları ortamı kaplıyor. \nBu durum canlıların HANGİ ORTAK ÖZELLİĞİNE (Hayatta kalma gücüne) en güzel örnektir?',
        options: [
          { id: 'A', text: 'Boşaltım' },
          { id: 'B', text: 'Solunum' },
          { id: 'C', text: 'Adaptasyon (Bu %1\'in ilaca karşı genetik bir uyuma/dirence sahip olması)' },
          { id: 'D', text: 'Holozoik Beslenme' },
          { id: 'E', text: 'Ototrof beslenme' }
        ],
        correctOptionId: 'C',
        explanation: 'Ortam çok sert değişti (Zehir geldi). Eğer popülasyonda bu zehre "Dirençli varyasyon (Genetik uyum/Adaptasyon)" olmasaydı hepsi ölürdü. Kalan %1 adaptasyon sayesinde yaşadı.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Beslenme (Organik besin elde etme) canlılar için ortakken, beslenmenin YÖNTEMİ canlıdan canlıya değişir. \nAşağıdaki Canlı - Beslenme Yöntemi eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çam Ağacı -> Fotoototrof (Işıkla üretici)' },
          { id: 'B', text: 'İnsan -> Holozoik (Katı yiyen tüketici)' },
          { id: 'C', text: 'Amip (Tek hücreli hayvan) -> Kemoototrof (Kimyasal enerjiyi kullanarak besin üretici)' },
          { id: 'D', text: 'Şapkalı Mantar -> Saprofit (Çürükçül)' },
          { id: 'E', text: 'Karanlık dip bakterisi -> Kemoototrof' }
        ],
        correctOptionId: 'C',
        explanation: 'Amip bir "Heterotroftur (Tüketici)". Kendi besinini kendi üretemez (Kemoototrof DEĞİLDİR). Diğer tek hücrelileri yutarak (Heterotrof) beslenir.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Aşağıda canlılarda gerçekleşen bazı "Atım" işlemleri verilmiştir: \nI. Sindirilmeyen elma posasının dışkı olarak atılması.\nII. Karaciğerde protein yıkımı sonucu oluşan Ürenin idrarla atılması.\nIII. Tükürük bezlerinden ağza Sindirim enzimlerinin atılması.\nBuna göre hangileri GERÇEK BİYOLOJİK BOŞALTIMDIR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I ve II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'I. olay sindirim artığıdır (boşaltım değil). III. olay görevli madde salgılamaktır (boşaltım değil). Yalnızca II. olay (Üre) HÜCRE İÇİ METABOLİZMA sonucu çıkan zehirli bir "Boşaltım (Metabolik)" atığıdır.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Bir göldeki algler (tek hücreli bitkiler) ile o gölde yaşayan balıklar karşılaştırıldığında, hücresel solunum (ATP üretimi) bakımından AŞAĞIDAKİLERDEN HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Algler sadece gündüz, balıklar ise gece-gündüz solunum yapar.' },
          { id: 'B', text: 'Algler güneş enerjisini ATP\'ye çevirir (Solunum yapmaz), balıklar ise sadece solunum yapar.' },
          { id: 'C', text: 'Her ikisi de hayatları boyunca (gece-gündüz kesintisiz) Hücresel Solunum yapmak ZORUNDADIR.' },
          { id: 'D', text: 'Balıklar su içtikleri için ATP\'ye ihtiyaç duymazlar.' },
          { id: 'E', text: 'İkisi de solunum yapmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılık devam ettiği sürece ATP tüketimi devam eder, bu yüzden de ATP üretimi (Solunum) "Kesintisiz" sürmek ZORUNDADIR. (Fotosentez ise sadece ışıkta olur).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Hücre yapısı Prokaryot olan canlılarla (Bakteriler), Ökaryot olan canlılar (Bitki, İnsan) arasındaki EN BELİRGİN işlevsel veya yapısal FARK aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Prokaryotlar hücre zarına sahip değildir.' },
          { id: 'B', text: 'Ökaryotlarda, kalıtsal bilgi (DNA) Zarla çevrili bir ÇEKİRDEK İÇİNDE korunurken, Prokaryotlarda DNA sitoplazmaya çıplak dağılmıştır.' },
          { id: 'C', text: 'Prokaryotlar protein sentezleyemez.' },
          { id: 'D', text: 'Ökaryotlarda ribozom yoktur.' },
          { id: 'E', text: 'Prokaryotlar sadece kışın yaşar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Pro (ilkel) karyot (çekirdek). Prokaryot hücrelerin DNA\'sı özel bir kese (Çekirdek zarı) içinde saklanmaz, sıvıya (Sitoplazma) direkt karışmıştır.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Evrimsel süreçte (Milyarlarca yılda) çevresel değişimlere ayak uyduramayan türler YOK OLMUŞ (Dinozorlar vb), uydurabilenler (Varyasyona sahip olanlar) ise günümüze kadar SOYUNU DEVAM ETTİRMİŞTİR. \nBuna göre Türlerin Devamlılığını (hayatta kalıp çoğalmasını) SAĞLAYAN en önemli 2 ortak özellik İKİLİSİ hangisidir?',
        options: [
          { id: 'A', text: 'Beslenme - Boşaltım' },
          { id: 'B', text: 'Büyüme - Solunum' },
          { id: 'C', text: 'Organizasyon - Hareket' },
          { id: 'D', text: 'Adaptasyon (Uyum sağlama) ve Üreme (Yeni genleri yavrulara aktarma)' },
          { id: 'E', text: 'Tepki verme - Terleme' }
        ],
        correctOptionId: 'D',
        explanation: 'Bir türün milyonlarca yıl silinmeden kalabilmesinin sırrı; ortama Adaptasyon sağlayabilmesi ve bu adaptasyon genlerini Eşeyli/Eşeysiz Üreme ile nesilden nesile taşıyabilmesidir.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Metabolizma hızı (Enerji harcama hızı); türe, yaşa, cinsiyete ve çevre sıcaklığına göre DEĞİŞİR. \nAşağıdaki durumlardan hangisinde insanın METABOLİZMA HIZININ "DÜŞMESİ (Yavaşlaması)" beklenir?',
        options: [
          { id: 'A', text: 'Aniden korkup kaçmaya başladığında (Adrenalin)' },
          { id: 'B', text: 'Derin Uykuya geçtiğinde (Sadece hayati fonksiyonlar için enerji harcandığında - Bazal durum)' },
          { id: 'C', text: 'Soğuk bir suya atladığında (Vücut ısısını korumak için)' },
          { id: 'D', text: 'Ergenlik döneminde boy atarken (Büyüme)' },
          { id: 'E', text: 'Ağır bir yemekten hemen sonra (Sindirim organları çalışırken)' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyku durumu ve tam dinlenme hali (Bazal metabolizma), kasların en az kullanıldığı, kalbin yavaşladığı ve enerji üretim/tüketim hızının en DÜŞÜK (ama sıfır değil) olduğu zamandır.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: '"Gelişmiş organizmalarda organların ve sistemlerin (Örn: Böbrek, Akciğer, Karaciğer) TEMEL GÖREVİ; trilyonlarca hücrenin içinde yaşayabileceği TEMİZ, SÜREKLİ BESİN VE OKSİJEN SAĞLANAN, İDEAL SICAKLIKTAKİ BİR İÇ SIVI ORTAMI yaratmaktır." \nBu cümle, aşağıdaki biyolojik kavramlardan HANGİSİNİ tanımlar?',
        options: [
          { id: 'A', text: 'Üreme Sistemini' },
          { id: 'B', text: 'Homeostaziyi (İç ortamın sabit tutulmasını)' },
          { id: 'C', text: 'Modifikasyonu' },
          { id: 'D', text: 'Saprofit beslenmeyi' },
          { id: 'E', text: 'Bölünmeyi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün organ sistemlerimiz (Boşaltım, dolaşım, solunum vb) aslında tek bir amaca hizmet eder: İçimizde bulunan Kan ve Doku sıvılarının (İç çevrenin) kirlenmeden sabit kalmasını (Homeostazi) sağlamak.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Canlıların tamamı dışarıdan uyarı alır ve tepki verirler. Ancak TEPKİNİN ŞEKLİ aynı değildir. \nBuna göre "İnsan" ile "Bitkinin" sıcaklığa karşı tepkisi nasıl DEĞİŞİKLİK gösterir?',
        options: [
          { id: 'A', text: 'Bitkiler tepki vermez, insan terler.' },
          { id: 'B', text: 'İnsan terleyerek, damarlarını genişleterek; Bitki ise yapraklarındaki stomaları (gözenekleri) açıp-kapatarak veya terlemeyi hızlandırarak fizyolojik tepki verir.' },
          { id: 'C', text: 'Bitki koşarak gölgeye gider, insan gölgede oturur.' },
          { id: 'D', text: 'İkisi de yer değiştirir.' },
          { id: 'E', text: 'İnsanda su buharlaşır, bitkide ateş çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Olay (Tepki) ortaktır ama şekil canlının organizasyonuna (sinir sistemi olup olmamasına vb) göre uyarlanır.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: '"Katabolizma (Yıkım), büyük moleküllerin parçalanmasıdır." \nSindirim ve Hücresel Solunum olaylarının İKİSİ DE birer yıkımdır. Peki Hücresel Solunumun Sindirimden FARKI nedir?',
        options: [
          { id: 'A', text: 'Sindirimde ATP üretilir, Solunumda üretilmez.' },
          { id: 'B', text: 'Sindirim sadece ağızda olur, solunum ciğerde.' },
          { id: 'C', text: 'Solunum; besinin en küçük kimyasal bağlarına kadar oksitlenerek/parçalanarak ENERJİ (ATP) ÜRETİLDİĞİ hücresel bir yıkımdır. Sindirim ise ATP ÜRETMEYEN, sadece besini kanala/hücreye girecek boyuta küçülten mekanik/enzimatik bir yıkımdır.' },
          { id: 'D', text: 'Solunumda protein yapılır, sindirimde yağ yapılır.' },
          { id: 'E', text: 'Hiçbir farkları yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sindirim balyozla duvarı tuğlalarına ayırmak gibidir (ATP vermez). Solunum ise o tuğlaları fırına atıp yakarak ısı/enerji (ATP) elde etmektir.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Bir hücrede ANABOLİZMA (Yapım) hızı, KATABOLİZMA (Yıkım) hızından büyükse, o canlı için aşağıdakilerden hangisi SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Canlı ölüdür.' },
          { id: 'B', text: 'Canlı BÜYÜME ve GELİŞME dönemindedir (Gençtir, kütlesi artıyordur).' },
          { id: 'C', text: 'Canlı yaşlılık dönemindedir (Doku kaybediyordur).' },
          { id: 'D', text: 'Canlı kış uykusundadır.' },
          { id: 'E', text: 'Canlının hücre sayısı azalıyordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer bir inşaatta "gelen/yapılan tuğla sayısı (anabolizma)", "yıkılan tuğla (katabolizma)" sayısından fazlaysa bina yükselir (Büyüme).'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Tohumun yapısı canlıdır fakat su oranı %15\'in altında olduğu için enzimleri durma noktasına gelmiştir. Bu tohum sulandığında enzimler çalışır ve tohum çimlenir. \nBu durum "Canlılık" ile ilgili neyi ispatlar?',
        options: [
          { id: 'A', text: 'Tohumların cansız nesneler olduğunu.' },
          { id: 'B', text: 'Enzimlerin çalışabilmesi ve metabolizmanın (canlılığın) devam edebilmesi için ortamda YETERLİ (Belirli bir oranda) SUYUN bulunması gerektiğini.' },
          { id: 'C', text: 'Suyun canlılar için zehirli olduğunu.' },
          { id: 'D', text: 'Sadece bitkilerin suya ihtiyaç duyduğunu.' },
          { id: 'E', text: 'Tohumun hareket ettiğini.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metabolizmanın ana aktörü Enzimlerdir. Enzimlerin çalışması için de sulu (genelde en az %15) bir ortam şarttır. Su biterse metabolizma durur.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: '"Canlılarda Üreme ortaktır" maddesi ile ilgili aşağıdaki genellemelerden hangisi HATALIDIR?',
        options: [
          { id: 'A', text: 'Üreme hücre sayısını artıran bir olay olabilir (Tek hücrelilerde).' },
          { id: 'B', text: 'Üreme bireyin değil, TÜRÜN yaşaması için gereklidir.' },
          { id: 'C', text: 'Canlıların tümü Eşeyli veya Eşeysiz BİR ŞEKİLDE neslini devam ettirme eğilimindedir.' },
          { id: 'D', text: 'İstisnasız DÜNYAYA GELMİŞ HER CANLI BİREY (İnsan, Hayvan, Böcek) hayatının bir döneminde YAVRU YAPMAK (Üremek) ZORUNDADIR. (Üremeyen canlı sayılmaz).' },
          { id: 'E', text: 'Üreme genetik bilginin aktarılmasını sağlar.' }
        ],
        correctOptionId: 'D',
        explanation: 'Hiç yavru (çocuk) yapmadan, kısır olarak doğup 90 yıl yaşayan bir insan da Biyolojik olarak tamamen canlıdır. BİREY için üreme zorunlu değildir.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Deney, Senaryo ve Bütüncül Yorumlar (Medium)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir uzay araştırmasında, Mars\'tan getirilen bir kaya parçasının içinde mikroskobik yapılara rastlanmıştır. Bilim insanları bu yapıların "CANLI OLDUĞUNA" karar vermiştir. \nBilim insanları bu kararı, yapılarda AŞAĞIDAKİLERDEN HANGİSİNİ GÖRDÜKLERİ için KESİN OLARAK vermişlerdir?',
        options: [
          { id: 'A', text: 'Kayanın içinde büyüme (şişme) görülmesi' },
          { id: 'B', text: 'Kaya içinde su bulunması' },
          { id: 'C', text: 'Yapıların KENDİ içlerinde, DNA\'larındaki şifreye göre ENZİM üreterek MADDE DÖNÜŞÜMÜ (Metabolizma) yapmaları ve bölünüp çoğalmaları (Üremeleri).' },
          { id: 'D', text: 'Sadece renklerinin yeşil olması' },
          { id: 'E', text: 'Kayanın güneşe doğru yuvarlanması' }
        ],
        correctOptionId: 'C',
        explanation: 'Şişme, renk veya basit hareket cansızlarda (örn rüzgarla, fiziksel etkiyle) olabilir. Canlılığın (özellikle dünya dışı bir formun) kesin kanıtı kendi iç kodunu (DNA/RNA vb) kullanarak kimyasal metabolizma yürütmesi ve bu kodu aktarabilmesidir (üreme).'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: '[Deney]: İçi saf su dolu bir kaba Paramesyum (Tek hücreli canlı) bırakılıyor. Su, paramesyumun içine sürekli dolmaya başlıyor (Ozmoz kuralı). Paramesyum ise fazla suyu, enerji (ATP) harcayarak "Kontraktil Koful" adı verilen keseciklerle dışarı pompalayıp şişip patlamaktan kurtuluyor. \nParamesyumun yaptığı bu SU POMPALAMA işi biyolojide en doğru hangi iki kavrama girer?',
        options: [
          { id: 'A', text: 'Sindirim ve Beslenme' },
          { id: 'B', text: 'Üreme ve Büyüme' },
          { id: 'C', text: 'Boşaltım (Fazla suyun atılması) ve Homeostazi (İç su dengesinin korunması)' },
          { id: 'D', text: 'Hareket ve Organizasyon' },
          { id: 'E', text: 'Oksijenli Solunum ve Tepki' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücuttaki gereksiz/tehlikeli orandaki suyun dışarı atılması işlemi "Boşaltım"dır. Bu sayede hücre içi basıncın/suyun dengede kalması ise "Homeostazi"dir.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: '"Canlılarda Büyüme ortaktır. Çok hücreliler hücre bölünmesiyle (mitoz), tek hücreliler ise sitoplazmalarını büyüterek (hacim artışı) büyürler." \nBuna göre bir AMİP (tek hücreli) mitoz bölünme geçirdiğinde ne olur?',
        options: [
          { id: 'A', text: 'Çok büyük (Dev) bir amip olur.' },
          { id: 'B', text: 'Çok hücreli bir doku (Amip Dokusu) oluşturur.' },
          { id: 'C', text: 'BÖLÜNME anında BÜYÜME sona erer, amip İKİ YENİ YAVRU amipe dönüşerek ÜREMİŞ olur.' },
          { id: 'D', text: 'Bölündükten sonra ölür.' },
          { id: 'E', text: 'Bitkiye dönüşür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok önemli ayrım: Tek hücrelilerde mitoz (bölünme) büyüme DEĞİL, çoğalma (eşeysiz üreme) yöntemidir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Bir Tohum kapalı, karanlık bir kutuya, diğeri ise ışık alan bir bahçeye ekiliyor. Karanlıktaki tohum bitkiye dönüşüp uzuyor ancak sapsarı oluyor. Bahçedeki ise yeşil ve sağlıklı oluyor. \nKaranlıkta büyüyen bitkinin BİYOLOJİK OLARAK GERÇEKLEŞTİREMEDİĞİ ortak özellik (veya olay) aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Oksijenli Solunum' },
          { id: 'B', text: 'Büyüme' },
          { id: 'C', text: 'Holozoik Beslenme' },
          { id: 'D', text: 'Ototrof Beslenme (Işık olmadığı için Kendi besinini/Fotosentez yapamaması)' },
          { id: 'E', text: 'Boşaltım' }
        ],
        correctOptionId: 'D',
        explanation: 'Bitki karanlıkta solunum, büyüme yapabilir (depo besiniyle) ama IŞIK olmadan Klorofilini (yeşil rengini) üretemez ve Fotosentez (Fotoototrof beslenme) yapamaz.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: '"Aşağıdaki grafikte (hayali düşünün), bir canlının Yıllara Göre Hücre Sayısı çizgisinin sürekli hızla YUKARI çıktığı görülmektedir." \nBu grafiğin ait olduğu canlı İÇİN KESİNLİKLE NE SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Bu canlı bir "Bakteri (Tek hücreli)" dir.' },
          { id: 'B', text: 'Bu canlı "ÇOK HÜCRELİ" bir organizmadır (Örn: Ağaç, İnsan) ve BÜYÜME/GELİŞME sürecindedir.' },
          { id: 'C', text: 'Bu canlı ölmüştür.' },
          { id: 'D', text: 'Bu canlı kış uykusundadır.' },
          { id: 'E', text: 'Bu canlı virüstür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir bireyin hücre sayısı yıllar geçtikçe artıyorsa, bu varlık tek hücreli olamaz. Çok hücrelidir ve mitozla (sayıca) büyüyordur.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Bir öğrenci sınıfta, "Öğretmenim, virüsler de hasta ediyor, bakteriler de. O halde virüsler de prokaryot bir canlıdır." der. \nBiyoloji öğretmeni, virüslerin CANLI OLMADIĞINI ispatlamak için HANGİ KANITI öğrenciye sunmalıdır?',
        options: [
          { id: 'A', text: '"Virüslerin boyu bakteriden çok daha küçüktür."' },
          { id: 'B', text: '"Virüslerin hücre zarı, sitoplazması ve en önemlisi kendi ATP/Proteinini üretecek ENZİM VE RİBOZOMLARI (Metabolizmaları) YOKTUR. Canlı hücrenin Dışında Krsitalize cansız bir maddedir."' },
          { id: 'C', text: '"Virüslerin hiç genetiği (DNA/RNA) yoktur."' },
          { id: 'D', text: '"Virüsler uzaydan gelmiştir."' },
          { id: 'E', text: '"Bakteriler zararlıdır, virüsler faydalıdır."' }
        ],
        correctOptionId: 'B',
        explanation: 'Virüs, bir fabrikası (Ribozomu, sitoplazması, enzimi) olmayan sadece plan (Genetik kod) taşıyan bir flaş bellek gibidir. Kendi başına (dışarıda) hiçbir faaliyeti (metabolizması) yoktur.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: '[Adaptasyon ve Aklimasyon Farkı]: Everest dağına çıkan bir dağcının alyuvar (oksijen taşıyan hücre) sayısı oksijensizlikten dolayı 1 ay içinde ciddi artar (Aklimasyon/Fizyolojik Uyum). Tibet\'te binlerce yıldır yaşayan yerel halkın ise (hiç dağa çıkıp inmelerine gerek kalmadan) alyuvar sayısı zaten hep çok yüksektir (Adaptasyon). \nBu ikisi arasındaki EN TEMEL BİYOLOJİK FARK nedir?',
        options: [
          { id: 'A', text: 'Dağcının tepkisi doğuştan gelir, Tibetlinin sonradan olur.' },
          { id: 'B', text: 'İkisi de tamamen aynı şeydir, genetik olarak aktarılır.' },
          { id: 'C', text: 'Dağcının alyuvar artışı geçicidir (Modifikasyon) ve deniz seviyesine inince azalır, ÇOCUKLARINA GEÇMEZ. Tibetlilerin özelliği ise KALITSALDIR (Adaptasyondur), deniz kenarında da yaşasalar çocukları yüksek alyuvarla doğar.' },
          { id: 'D', text: 'Dağcının alyuvarı mavidir.' },
          { id: 'E', text: 'Tibetliler fotosentez yapar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Adaptasyon GENLERE yazılmıştır (Kalıcıdır). Aklimasyon/Modifikasyon ise Çevrenin geni DEĞİL, işleyişini geçici değiştirmesidir (Kalıtsal değildir).'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: '"Canlılarda ORGANİZASYON aşamaları karmaşıklaştıkça, canlı çevreye daha bağımsız hale gelir ve evrimsel olarak DAHA GELİŞMİŞ sayılır." \nBuna göre aşağıda verilen canlıların, sahip oldukları EN ÜST Organizasyon düzeyine göre İLKELDEN GELİŞMİŞE doğru sıralanışı nasıldır?\n(1) Dokuya sahip olan yosunlar\n(2) Sadece Sitoplazma ve Organelleri (Tek Hücresi) olan Bakteri\n(3) Sinir, dolaşım ve boşaltım SİSTEMLERİ olan Köpek',
        options: [
          { id: 'A', text: '3 - 1 - 2' },
          { id: 'B', text: '1 - 2 - 3' },
          { id: 'C', text: '2 (En İlkel - Sadece Hücre) -> 1 (Orta - Doku) -> 3 (En Gelişmiş - Sistem)' },
          { id: 'D', text: '3 - 2 - 1' },
          { id: 'E', text: 'Hepsi aynı ilkeliktedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri organizasyonu "Hücre"de biter. Yosunda "Doku" görülür. Köpekte "Sistem" görülür. Organizasyon büyüdükçe gelişmişlik/karmaşıklık artar.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Bir insan, oksijenin yetersiz kaldığı ağır bir spor yaptığında KAS HÜCRELERİNDE Oksijenli solunumla birlikte Laktik Asit Fermantasyonu (Oksijensiz bir ATP üretim yolu) da yapmaya başlar ve kasta Laktik Asit (yorgunluk maddesi) birikir. \nBu durum CANLILARIN HANGİ ORTAK AMACINA ulaşmak için yaptığı "ZORUNLU" BİR TEPKİDİR?',
        options: [
          { id: 'A', text: 'Büyümek' },
          { id: 'B', text: 'Kasları küçültmek' },
          { id: 'C', text: 'Hücrenin ihtiyaç duyduğu ENERJİYİ (ATP\'yi) kesintisiz SAĞLAYABİLMEK' },
          { id: 'D', text: 'Vücudu dondurmak' },
          { id: 'E', text: 'Kemikleri kırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'ATP olmadan kas kasılamaz. Oksijen yetmezse, sistem durmamak (ölmemek) için B planına (Fermantasyon) geçerek ATP üretmeye (Solunuma) devam eder.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: '"Bir aslan ceylanı kovalarken koşar, yakalar ve yer." \nAslanın sadece bu olayı sırasında "Canlıların Ortak Özelliklerinden" hangileri BİR ARADA GERÇEKLEŞMİŞTİR?',
        options: [
          { id: 'A', text: 'Sadece Beslenme' },
          { id: 'B', text: 'Sadece Boşaltım ve Üreme' },
          { id: 'C', text: 'Hareket (Koşma) + Uyarılara Tepki (Avı görme ve izleme) + Holozoik Beslenme (Avı yeme) + Solunum (Tüm bunlar için çok fazla ATP harcama)' },
          { id: 'D', text: 'Organizasyon ve Klonlanma' },
          { id: 'E', text: 'Fotosentez ve Büyüme' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılık özellikleri izole değildir. Avlanan aslan; hareket eder, tepki verir, enerji üretir/tüketir (solunum) ve sonuçta beslenir.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Farklı canlı gruplarının, AYNI atık maddeyi FARKLI organlarla atması, Biyolojinin şu kuralına bir örnektir: "Olay/Amaç ortaktır, Yöntem/Yapı ortak değildir." \nAşağıdaki örneklerden hangisi BU KURALA UYGUN BİR "BOŞALTIM" ÖRNEĞİDİR?',
        options: [
          { id: 'A', text: 'Hem köpeğin hem kedinin böbrekle atması' },
          { id: 'B', text: 'İnsanın Karbondioksiti AKCİĞERLE atarken, Balığın aynı Karbondioksiti SOLUNGAÇLARLA atması' },
          { id: 'C', text: 'İkisinin de fotosentez yapması' },
          { id: 'D', text: 'İnsanın koşması, amibin durması' },
          { id: 'E', text: 'İnsanın akciğerle böbrek yapması' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbondioksit atmak (Boşaltım) her ikisi için de zorunlu ve ortaktır. Ama insanın bunu akciğerle, balığın solungaçla yapması yöntemin farklı olduğunu gösterir.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: '"Canlılardaki Metabolizma olayları = Anabolizma + Katabolizma" \nBu denkleme göre, hastalanan ve günlerce YEMEK YİYEMEYİP aşırı derecede KİLO KAYBEDEN bir insanda hangi durum söz konusudur?',
        options: [
          { id: 'A', text: 'Anabolizma (Yapım) hızı = Katabolizma (Yıkım) hızı' },
          { id: 'B', text: 'Metabolizması tamamen sıfır olmuştur.' },
          { id: 'C', text: 'Katabolizma (Yıkım/Parçalama) hızı, Anabolizma (Sentez) hızından ÇOK DAHA FAZLA hale gelmiştir (Depolarını yıkıp eritmiştir).' },
          { id: 'D', text: 'Anabolizması aşırı artmıştır.' },
          { id: 'E', text: 'Sadece kemoototrof beslenmiştir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Dışarıdan malzeme (Besin) gelmeyince, canlı hayatta kalmak için vücudundaki kendi yağını, kasını (depolarını) YIKMAYA (Katabolizma) başlar. Yıkım yapımı geçince de canlı erir (Kilo verir).'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Canlıların Ortak Özellikleri testlerinde sıkça sorulan "Ribozom" organeli neden "Her Canlıda (Prokaryot-Ökaryot) Ortak" olarak kabul edilir de, "Mitokondri (Enerji organeli)" ortak kabul edilmez?',
        options: [
          { id: 'A', text: 'Çünkü ribozom daha büyüktür.' },
          { id: 'B', text: 'Mitokondri ZARLI bir organeldir, bu yüzden Prokaryotlarda (Bakteri/Arke) bulunmaz. Onlar solunum enzimlerini sitoplazma veya zar kıvrımlarında bulundurur. Ribozom ise ZARSIZDIR ve herkeste vardır.' },
          { id: 'C', text: 'Ribozom ATP üretir.' },
          { id: 'D', text: 'Mitokondri sadece virüslerde vardır.' },
          { id: 'E', text: 'Prokaryotlar enerji harcamaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Prokaryot canlıların ZARLI organel sahibi olması imkansızdır. Bu yüzden mitokondri (çift zarlı) onlarda yoktur (Enerji üretimini zarsız başka yollarla yaparlar).'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bir çöl faresinin (hayvan) suyu idrarda aşırı geri emerek vücutta tutması ile, Kaktüsün (bitki) yapraklarını dikene çevirip suyu koruması BİRBİRİNE ÇOK BENZEYEN iki olaydır. \nBu iki farklı canlının AYNI AMACA YÖNELİK geliştirdiği bu ÖZELLİKLERE BİYOLOJİDE NE DENİR?',
        options: [
          { id: 'A', text: 'Modifikasyon' },
          { id: 'B', text: 'Fotoototrof Beslenme' },
          { id: 'C', text: 'Adaptasyon (Kurak çevreye kalıtsal uyum/Homeostaziyi koruma çabası)' },
          { id: 'D', text: 'Saprofitlik' },
          { id: 'E', text: 'Hücre Bölünmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Farklı canlılar da olsalar aynı çevre (çöl/kuraklık) benzer bir "Seçilim Baskısı" yaratır. İkisi de suyu vücutta tutacak (Farklı şekillerde de olsa) Kalıtsal Adaptasyonlar geliştirmiştir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Bütün CANLILARI cansız doğadan AYIRAN, "Tüm ortak özelliklerin TEMELİNDE YATAN" ve her canlının içindeki DÜZENİ/ŞİFREYİ barındıran YAPI hangisidir?',
        options: [
          { id: 'A', text: 'Kalsiyum' },
          { id: 'B', text: 'Saf Su' },
          { id: 'C', text: 'Nükleik Asitler (DNA ve RNA) ve bunların kodladığı Enzim Sistemi (Metabolizma)' },
          { id: 'D', text: 'Kemikler' },
          { id: 'E', text: 'Silisyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlılığı cansızlıktan ayıran temel özellik, bir Genetik Şifreye (DNA) sahip olması ve bu şifrenin yönettiği karmaşık, kendi kendini devam ettiren bir kimyasal makineye (Metabolizmaya) sahip olmasıdır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konunun Tamamını Ölçen Karma Sorular (Medium)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Canlıların Ortak Özellikleri tablosuna bakan bir öğrenci; \n- X canlısının Oksijenli solunum yaptığını\n- Y canlısının Oksijensiz solunum yaptığını\ngörüyor. \nBuna göre X ve Y canlıları için aşağıdakilerden hangisi KESİN OLARAK ORTAKTIR?',
        options: [
          { id: 'A', text: 'Her ikisinin de Akciğeri vardır.' },
          { id: 'B', text: 'Her ikisinin de Mitokondrisi vardır.' },
          { id: 'C', text: 'Her ikisi de inorganik maddelerden organik besin üretir (Ototroftur).' },
          { id: 'D', text: 'Her ikisi de organik besinleri parçalayarak ATP üretir ve metabolizmalarında harcar.' },
          { id: 'E', text: 'Her ikisi de memelidir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Solunumun şekli (O2\'li/O2\'siz) farklı olsa da, amacı ortaktır: Besini (glikozu vb) parçalayıp kimyasal bağ enerjisini ATP\'ye çevirmek.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: '"Gelişme" kavramı Biyolojide hangi süreci anlatır?',
        options: [
          { id: 'A', text: 'Sadece kilo almayı (Kütle artışını)' },
          { id: 'B', text: 'Canlının tamamen aynı kalarak sayısını artırmasını (Üreme)' },
          { id: 'C', text: 'Hücrelerin farklılaşarak (örneğin sinir, kas, kemik hücresine dönüşerek) yeni doku ve organlar oluşturmasını (Olgunlaşmayı)' },
          { id: 'D', text: 'Ölümü' },
          { id: 'E', text: 'Bir bakteri popülasyonunun sayısını artırmasını' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelişme, hücrelerin (veya canlının) uzmanlaşıp farklılaşarak "olgun" (yeni işlevler yapabilen) bir yapıya dönüşmesidir (Örn: Tohumdan kök ve yaprak çıkması).'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Aşağıdaki ikililerden hangisi birbirinin TAM ZITTI yönde çalışan iki metabolizma (Anabolizma - Katabolizma) olayıdır?',
        options: [
          { id: 'A', text: 'Solunum - Sindirim' },
          { id: 'B', text: 'Solunum - Boşaltım' },
          { id: 'C', text: 'Fotosentez (Besin yapımı) - Hücresel Solunum (Besin yıkımı)' },
          { id: 'D', text: 'Büyüme - Gelişme' },
          { id: 'E', text: 'Hareket - Tepki' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez; küçük inorganikleri birleştirip büyük organik besin YAPAR (Anabolizma). Solunum ise; büyük organik besini parçalayıp küçük inorganiklere (CO2 ve Suya) YIKAR (Katabolizma).'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Canlıların tamamı (Prokaryot veya Ökaryot) "Kalıtım Materyali (DNA/RNA)" taşır. Kalıtım materyalinin canlı için EN ÖNEMLİ 2 GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Enerji (ATP) üretmek ve Su tutmak' },
          { id: 'B', text: 'Güneş ışığını emmek ve fotosentez yapmak' },
          { id: 'C', text: 'Hücreyi YÖNETMEK (Protein üretim şifresi vermek) ve Bölünme ile şifreyi Yavrulara AKTARMAK' },
          { id: 'D', text: 'Sindirim yapmak ve Çöp atmak' },
          { id: 'E', text: 'Hareket etmek ve Durmak' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA (Genom), hem hücrenin anlık protein/enzim ihtiyacını yönetir (İşletim sistemi), hem de kopyalanarak nesilden nesile aktarılır (Kalıtım).'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: '"Tüm canlılar hareket eder ancak hareket biçimleri farklıdır." \nBuna göre tek hücreli bir Öglenanın "Kamçısıyla" yüzmesi ile, Ayçiçeğinin güneşe "Dönmesi (Yönelmesi)" arasındaki FARK nedir?',
        options: [
          { id: 'A', text: 'Öglena canlıdır, ayçiçeği cansızdır.' },
          { id: 'B', text: 'Öglenanın hareketi "Aktif Yer Değiştirme", Ayçiçeğinin hareketi ise yere bağlı kalarak yapılan "Pasif (Durum Değiştirme) Yönelme (Tropizma)" hareketidir.' },
          { id: 'C', text: 'İkisi de tamamen aynı tür harekettir.' },
          { id: 'D', text: 'Ayçiçeği kamçı kullanır, öglena kök kullanır.' },
          { id: 'E', text: 'Öglena bitkidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aktif hareket noktadan noktaya gidiştir (Yüzme, uçma, yürüme). Pasif hareket ise kökle sabit kalınarak yapılan bükülme/yönelme/açılma (Nasti/Tropizma) hareketleridir.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Bütün canlı hücrelerin yapısında Karbon, Hidrojen, Oksijen, Azot (C, H, O, N) gibi elementler belirli bir oranda BİRLEŞEREK Organik Molekülleri (Protein, Yağ, Şeker) oluştururlar. \nBu durum tüm canlıların HANGİ ORTAK ÖZELLİĞE sahip olduğunu kanıtlar?',
        options: [
          { id: 'A', text: 'Hepsinin çok zeki olduğunu' },
          { id: 'B', text: 'Ortak bir KİMYASAL/HÜCRESEL Organizasyona (Düzenli bir yapıya) sahip olduklarını' },
          { id: 'C', text: 'Hepsinin bitki olduğunu' },
          { id: 'D', text: 'Sadece sudan oluştuklarını' },
          { id: 'E', text: 'Hepsinin fotosentez yaptığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Rastgele yığılmış bir toprak yığınından (Cansızdan) farklı olarak, canlılar belirli atomların son derece DÜZENLİ (Organize) ve şifreli dizilmesiyle (Proteinler vb) oluşur.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Hangi seçenekteki canlı, "İnorganik maddelerden Organik besin SENTEZLEME (Ototrof)" yeteneğine SAHİP DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Yeşil yapraklı Ağaç' },
          { id: 'B', text: 'Kemosentez yapan Bakteri' },
          { id: 'C', text: 'Öglena (Işık varken)' },
          { id: 'D', text: 'Saprofit (Çürükçül) Mantar' },
          { id: 'E', text: 'Algler (Su yosunu)' }
        ],
        correctOptionId: 'D',
        explanation: 'Mantarlar ve hayvanlar (Saprofitler dahil) HETEROTROFTUR. Kendi besinlerini üretemezler, dışarıdan hazır alırlar.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: '"Canlılar hayatlarını sürdürebilmek için kendilerine benzer yeni canlılar meydana getirirler (Ürerler)." \nBu cümledeki HATA nedir?',
        options: [
          { id: 'A', text: 'Canlılar kendilerine benzemezler.' },
          { id: 'B', text: 'Hiçbir canlı üremez.' },
          { id: 'C', text: 'Üreme "Hayatı sürdürebilmek (Yaşamak/Bireyin varlığı)" için DEĞİL, Türün (Neslin) devamı için yapılır. Birey üremese de hayatını SÜRDÜREBİLİR.' },
          { id: 'D', text: 'Sadece bakteriler ürer.' },
          { id: 'E', text: 'Yeni canlılar meydana gelmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Klasik ÖSYM yanılgısı. Birey = Yaşamak için ürer (YANLIŞ). Tür = Varlığını sürdürmek için ürer (DOĞRU).'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Aşağıda verilen hücresel donanımlardan hangisi "Canlıların EN AZ BİR kısmında (bazılarında) ORTAK DEĞİLDİR"? (Yani tüm hücrelerde KESİN OLARAK VARDIR)',
        options: [
          { id: 'A', text: 'Çekirdek Zarı (Zarlı Çekirdek)' },
          { id: 'B', text: 'Kloroplast' },
          { id: 'C', text: 'Mitokondri' },
          { id: 'D', text: 'Hücre Zarı (Plazma Zarı)' },
          { id: 'E', text: 'Hücre Duvarı' }
        ],
        correctOptionId: 'D',
        explanation: 'Hücre zarı evrenseldir (herkeste vardır). Kloroplast, mitokondri, çekirdek (zarlı organeller) ve hücre duvarı ise (Bakteri, hayvan, bitki ayrımına göre) bazı canlılarda yoktur.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Bütün CANLILARIN Ortak Özellikleri düşünüldüğünde, Biyolojinin bize vermeye çalıştığı EN TEMEL MESAJ nedir?',
        options: [
          { id: 'A', text: 'Dünyada sadece hayvanların yaşadığı.' },
          { id: 'B', text: 'Canlılığın Dünya üzerinde tamamen birbiriyle ALAKASIZ, ortak kuralları olmayan bir kaos olduğu.' },
          { id: 'C', text: 'Dünyadaki milyonlarca farklı canlı türünün (Bakteriden insana) görünüşte çok farklı olsa da, arka planda BİRBİRİNE ÇOK BENZEYEN Temel Kimyasal ve Hücresel (Solunum, Metabolizma vb) KURALLARLA işlediği.' },
          { id: 'D', text: 'Cansızların canlılardan daha önemli olduğu.' },
          { id: 'E', text: 'Biyolojinin sadece bitkileri incelediği.' }
        ],
        correctOptionId: 'C',
        explanation: 'Canlıların Ortak Özellikleri konusu, biyolojinin "Birleştirici/Bütünleştirici" teorisidir. Her şey hücreden oluşur ve her şey enerjiyi benzer kurallarla çevirir.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek Yorum ve Birleştirilmiş Kazanımlar (Hard)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Biyoloji dersinde bir öğretmen tahtaya üç farklı canlı örneği yazar: \nX: İnorganik maddelerden organik madde sentezler, hücre duvarı vardır, çekirdeği yoktur.\nY: Oksijenli solunum yapar, hücre duvarı yoktur, çok hücreli organizasyona sahiptir.\nZ: Sadece bir hücreden oluşur, hücre zarından dışarı enzim salgılayarak ölü maddeleri çürütür, çekirdeği vardır.\nBuna göre X, Y ve Z canlıları ile ilgili aşağıdakilerden hangisi KESİNLİKLE DOĞRUDUR?',
        options: [
          { id: 'A', text: 'X canlısı bir Bitkidir (ototrof olduğu için).' },
          { id: 'B', text: 'Y canlısı bir Mantardır.' },
          { id: 'C', text: 'Z canlısı bir Bakteridir (tek hücreli olduğu için).' },
          { id: 'D', text: 'X bir Prokaryot (Örn: Siyanobakteri), Y bir Hayvan (Ökaryot), Z ise Ökaryot Tek Hücreli bir Tüketicidir (Amip/Saprofit mantar vb).' },
          { id: 'E', text: 'Üç canlı da kloroplast taşır.' }
        ],
        correctOptionId: 'D',
        explanation: 'X: Çekirdeği yok (Prokaryot). Y: Duvarı yok, çok hücreli (Hayvan). Z: Çekirdeği var (Ökaryot), çürükçül.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Bir memeli hayvan popülasyonu, son 100 yılda ortalama sıcaklığın çok düştüğü (Buzul çağı başlangıcı) bir bölgede mahsur kalmıştır. 100 yılın sonunda popülasyondaki bireylerin kürklerinin ESKİYE ORANLA çok daha kalın olduğu ve deri altı yağlarının kalınlaştığı gözlemlenmiştir. \nBu olayla ilgili Evrimsel ve Biyolojik Olarak en doğru yorum hangisidir?',
        options: [
          { id: 'A', text: 'Hayvanlar üşüdükleri için "bilerek" kürklerini kalınlaştırmışlardır (Modifikasyon).' },
          { id: 'B', text: 'Popülasyonda ZATEN VAR OLAN kalın kürklü ve kalın yağlı (Varyasyon) bireyler soğuğa dayanıp hayatta kalarak "ÜREDİĞİ (Doğal Seçilim)" için popülasyon bu yönde ADAPTASYON geçirmiştir.' },
          { id: 'C', text: 'Soğuk hava hayvanların DNA\'sını hemen dondurmuş ve mutasyon yapmıştır.' },
          { id: 'D', text: 'Bu durum sadece geçici bir tepkidir, yavrulara aktarılmaz.' },
          { id: 'E', text: 'Hayvanlar diğer türlerle çiftleşerek kalın kürk almıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Evrimin/Adaptasyonun temel mantığı budur. Canlı bilerek uyum sağlamaz; ortama uyumlu genlere sahip olanlar doğal seçilimle hayatta kalır ve ürer. Yeni nesil uyumlu (adapte) genlerle doğar.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Aşağıda bir deney düzeneği verilmiştir: \nKapalı bir fanusa, bir bitki ve bir fare konuluyor. Işık açıkken fare ve bitki uzun süre yaşıyor. Işık kapatıldığında ise fare kısa sürede, bitki ise fareden bir süre sonra ölüyor. \nBu deney, canlıların ortak özelliklerinden HANGİ İKİSİ ARASINDAKİ ZORUNLU DENGE (Ekosistem dengesi) üzerine kuruludur?',
        options: [
          { id: 'A', text: 'Üreme ve Büyüme' },
          { id: 'B', text: 'Holozoik Beslenme ve Boşaltım' },
          { id: 'C', text: 'Ototrof Beslenme (Fotosentez) ve Hücresel Solunum' },
          { id: 'D', text: 'Homeostazi ve Organizasyon' },
          { id: 'E', text: 'Adaptasyon ve Mutasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık varken bitki fotosentez (Ototrof beslenme) yapar, ortama Oksijen (ve besin) verir. Fare ve bitki bu oksijenle Solunum yapar, çıkan Karbondioksiti bitki tekrar fotosentezde kullanır (Döngü). Işık kapanınca Fotosentez durur (sadece solunum çalışır) ve oksijen bitince ikisi de ölür.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Bilimsel olarak; "Mitoz bölünme ile bir canlının BÜYÜMESİ" sadece HANGİ canlı gruplarında görülen bir durumdur?',
        options: [
          { id: 'A', text: 'Bütün canlılarda' },
          { id: 'B', text: 'Sadece Bakterilerde' },
          { id: 'C', text: 'Çok Hücreli Ökaryot Canlılarda (Bitki, Hayvan vb.)' },
          { id: 'D', text: 'Sadece Amip gibi Tek hücrelilerde' },
          { id: 'E', text: 'Virüslerde' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz = Hücre sayısı artışı demektir. Bu artışın "Büyüme" sayılması için canlının hücrelerden oluşan bir BEDEN (Çok hücreli) olması gerekir. Tek hücrelide mitoz, sadece "Çoğalmak (Üremek)" demektir.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: '"Canlılardaki Boşaltım ve Homeostazi birbiriyle ayrı düşünülemez." diyen bir bilim insanı, bunu kanıtlamak için HANGİ ÖRNEĞİ kullanmalıdır?',
        options: [
          { id: 'A', text: 'İnsanın koşarken daha hızlı nefes alması' },
          { id: 'B', text: 'Bir kuşun yumurtlaması' },
          { id: 'C', text: 'Deniz kuşlarının (Martıların), fazla tuzlu su içtikleri için kanlarındaki aşırı tuzu gagalarındaki özel tuz bezlerinden (Boşaltım) dışarı atarak kanın tuzluluk oranını sabit tutmaları (Homeostazi).' },
          { id: 'D', text: 'Çam ağaçlarının iğne yapraklı olması' },
          { id: 'E', text: 'Bakterilerin ikiye bölünmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Homeostazi, kanda her şeyin kararında kalmasıdır (Tuz dengesi). Atık/Fazla tuzun atılması (Boşaltım) direkt olarak homeostaziyi koruma operasyonudur.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Metabolizma grafiğinde (Yaş-Hız grafiği), 0-20 yaş arası "Anabolizma > Katabolizma", 20-50 yaş arası "Anabolizma = Katabolizma", 50 yaş sonrası ise "Katabolizma > Anabolizma" olarak çizilmiştir. \nBu grafik canlıların HANGİ ORTAK ÖZELLİĞİ (veya durumu) ile DOĞRUDAN açıklanır?',
        options: [
          { id: 'A', text: 'Canlıların hepsinin bitki olmasıyla' },
          { id: 'B', text: 'Üreme ve Adaptasyon ile' },
          { id: 'C', text: 'Canlılardaki "Büyüme (0-20), Duraklama/Olgunluk (20-50) ve Yaşlanma (Yıkım 50+)" evreleriyle' },
          { id: 'D', text: 'Fotosentez ve Solunumla' },
          { id: 'E', text: 'Boşaltım eksikliğiyle' }
        ],
        correctOptionId: 'C',
        explanation: 'Yapım > Yıkım (Büyüme çağıdır). Yapım = Yıkım (Yetişkinlik/Denge). Yıkım > Yapım (Yaşlılık, erime, doku kaybıdır).'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Canlıların Organizasyon şemasını inceleyen bir kişi, aşağıdaki Hiyerarşik durumlardan hangisini KESİN BİR KURAL olarak kabul ETMEZ?',
        options: [
          { id: 'A', text: 'Hücreler birleşip dokuları oluşturur.' },
          { id: 'B', text: 'Atomlar birleşip molekülleri oluşturur.' },
          { id: 'C', text: 'Tüm Canlılar "Organizma" (Bütünleşik canlı yapı) seviyesine kadar gelir. (Ama Sistem seviyesine kadar gelmeyebilirler, bir Amip doğrudan organizmadır).' },
          { id: 'D', text: 'Organlar birleşip sistemleri oluşturur.' },
          { id: 'E', text: 'Her organizma (Canlı birey) KESİNLİKLE Doku seviyesinden geçmiş ve Organa sahip olmak ZORUNDADIR.' }
        ],
        correctOptionId: 'E',
        explanation: 'ÖSYM\'nin sevdiği mantık çeldiricisi. "Organizma" kelimesi CANLI BİREY demektir. Bir Amip tek bir hücredir ama aynı zamanda bir Organizmadır (Bireydir). Doku veya organı YOKTUR.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Üreme çeşitleri olan Eşeyli ve Eşeysiz üremenin (Bir popülasyon içindeki) DOĞAL SEÇİLİM (Adaptasyon/Evrim) üzerindeki etkileri Karşılaştırılırsa, KESİN OLARAK hangi yargıya varılır?',
        options: [
          { id: 'A', text: 'Eşeysiz üreme (Klonlama), popülasyonda BÜYÜK bir Varyasyon (Çeşitlilik) yaratır, Doğal Seçilim için bol malzeme sunar.' },
          { id: 'B', text: 'Eşeyli üreme, genleri karıştırarak Varyasyon (Çeşitlilik) yaratır; bu da değişen/zorlaşan çevre koşullarında TÜRE (popülasyona) UYUM/HAYATTA KALMA (Doğal seçilimi kazanma) şansı verir.' },
          { id: 'C', text: 'İkisinin de Doğal Seçilimle bir ilgisi yoktur.' },
          { id: 'D', text: 'Eşeysiz üreme genetik çeşitliliği her nesilde ikiye katlar.' },
          { id: 'E', text: 'Eşeyli üremede herkes anneye %100 benzer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çeşitlilik (Varyasyon) = Evrimin ham maddesidir. Çeşitli (Farklı özellikte) bireyler olursa, zor bir hastalık geldiğinde bazılarının kurtulma şansı (Seçilme şansı) artar. Bu çeşitliliği sağlayan ANA MEKANİZMA Eşeyli üremedir (Mutasyonlarla birlikte).'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Bir öğrenci tüm canlıların ortak özelliklerini ezberlemek yerine HİKAYELEŞTİRMEK ister: \n"Canlı dediğimiz organizasyon; çevreden gelen uyarıları algılar (...X...), hayatta kalmak için iç dengesini korur (...Y...), enerjiye ihtiyaç duyar (...Z...), bunun için de karbonlu maddelere yönelir (...W...)." \nYukarıdaki boşluklara sırasıyla hangi kavramlar gelmelidir?',
        options: [
          { id: 'A', text: 'X: Tepki, Y: Homeostazi, Z: Solunum, W: Beslenme' },
          { id: 'B', text: 'X: Solunum, Y: Boşaltım, Z: Üreme, W: Büyüme' },
          { id: 'C', text: 'X: Adaptasyon, Y: Beslenme, Z: Boşaltım, W: Organizasyon' },
          { id: 'D', text: 'X: Tepki, Y: Büyüme, Z: Organizasyon, W: Boşaltım' },
          { id: 'E', text: 'X: Homeostazi, Y: Tepki, Z: Beslenme, W: Solunum' }
        ],
        correctOptionId: 'A',
        explanation: 'Uyarıyı algılamak (Tepki). İç denge (Homeostazi). Enerji üretimi (Solunum). Enerjinin ham maddesini bulmak (Beslenme).'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Biyoloji disiplini altında "Canlıların Ortak Özellikleri" konusunun MÜFREDATTAKİ EN BİRİNCİ KONU olmasının Pedagojik ve Bilimsel sebebi nedir?',
        options: [
          { id: 'A', text: 'Çok kolay bir konu olduğu için.' },
          { id: 'B', text: 'Sadece kelime ezberletmek için.' },
          { id: 'C', text: 'Bundan sonra işlenecek (Hücre, Sistemler, Evrim, Ekoloji, Genetik) tüm Biyoloji konularının TEMEL KURALLARININ ve Sınırlarının bu "ORTAK" ilkeler çerçevesinde şekilleniyor olmasıdır (Biyolojinin Anayasası olması).' },
          { id: 'D', text: 'Sınavlarda çok soru çıktığı için.' },
          { id: 'E', text: 'Tarihte ilk bulunan konu olduğu için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ortak özellikler ünitesi Biyolojinin kalbidir/anayasasıdır. Siz solunumu (neden enerji lazımı), homeostaziyi (neden sistemler varı), adaptasyonu (evrimi/genetiği) anlamadan üstüne hiçbir biyoloji bilgisini kalıcı inşa edemezsiniz.'
      }
    ]
  }
]
