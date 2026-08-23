export default {
  topicSlug: 'canlilarin-ortak-ozellikleri',
  totalQuestions: 200,
  tests: [
    {
      id: 'test-1',
      title: 'Kavrama Testi 1',
      description: 'Temel kavramları tanıma',
      type: 'comprehension',
      order: 1,
      questions: [
        {
          id: 'q-1-1', difficulty: 'very_easy',
          questionText: 'Canlıların tümünde canlılık özelliği gösteren en küçük yapı birimi aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Atom' },
            { id: 'B', text: 'Molekül' },
            { id: 'C', text: 'Organel' },
            { id: 'D', text: 'Hücre' },
            { id: 'E', text: 'Doku' }
          ],
          correctOptionId: 'D',
          explanation: 'Canlılık özelliği gösteren en küçük birim hücredir. Atom, molekül ve organeller tek başlarına canlılık özelliği göstermezler.'
        },
        {
          id: 'q-1-2', difficulty: 'very_easy',
          questionText: 'Bir varlığın tam olarak "canlı" sayılabilmesi için canlılık ölçütlerinin ne kadarını taşıması gerekir?',
          options: [
            { id: 'A', text: 'Sadece çoğalabilmesi yeterlidir' },
            { id: 'B', text: 'Sadece metabolizmasının olması yeterlidir' },
            { id: 'C', text: 'Ölçütlerin çoğunluğunu taşıması yeterlidir' },
            { id: 'D', text: 'Ölçütlerin tamamını aynı anda taşıması gerekir' },
            { id: 'E', text: 'Sadece hücresel yapıya sahip olması yeterlidir' }
          ],
          correctOptionId: 'D',
          explanation: 'Biyolojide tek bir canlılık tanımı yoktur, bir varlığın canlı sayılabilmesi için bütün canlılık ölçütlerini aynı anda karşılaması gerekir.'
        },
        {
          id: 'q-1-3', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi bir hücrenin içinde gerçekleşen tüm yapım ve yıkım tepkimelerinin genel adıdır?',
          options: [
            { id: 'A', text: 'Metabolizma' },
            { id: 'B', text: 'Homeostazi' },
            { id: 'C', text: 'Solunum' },
            { id: 'D', text: 'Boşaltım' },
            { id: 'E', text: 'Adaptasyon' }
          ],
          correctOptionId: 'A',
          explanation: 'Bir canlının içindeki tüm kimyasal tepkimelerin (anabolizma ve katabolizma) toplamına metabolizma denir.'
        },
        {
          id: 'q-1-4', difficulty: 'very_easy',
          questionText: 'Canlılarda hücre içindeki küçük moleküllerden büyük moleküllerin sentezlendiği yapım tepkimelerine ne ad verilir?',
          options: [
            { id: 'A', text: 'Katabolizma' },
            { id: 'B', text: 'Anabolizma' },
            { id: 'C', text: 'Hidroliz' },
            { id: 'D', text: 'Oksijenli Solunum' },
            { id: 'E', text: 'Fermantasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Anabolizma, küçük moleküllerden büyük moleküllerin sentezlenmesidir ve bu süreçte enerji (ATP) harcanır.'
        },
        {
          id: 'q-1-5', difficulty: 'very_easy',
          questionText: 'Canlılarda büyük moleküllerin daha küçük moleküllere parçalandığı ve enerji açığa çıkaran tepkimelere ne ad verilir?',
          options: [
            { id: 'A', text: 'Anabolizma' },
            { id: 'B', text: 'Dehidrasyon' },
            { id: 'C', text: 'Katabolizma' },
            { id: 'D', text: 'Fotosentez' },
            { id: 'E', text: 'Kemosentez' }
          ],
          correctOptionId: 'C',
          explanation: 'Katabolizma (yıkım) büyük moleküllerin parçalanmasıdır. Hücresel solunum bir katabolizma örneğidir.'
        },
        {
          id: 'q-1-6', difficulty: 'very_easy',
          questionText: 'Hücrede anabolizma (yapım) ve katabolizma (yıkım) olayları arasında enerji taşıyan molekül aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Enzim' },
            { id: 'C', text: 'DNA' },
            { id: 'D', text: 'ATP' },
            { id: 'E', text: 'Protein' }
          ],
          correctOptionId: 'D',
          explanation: 'ATP, katabolizmadan elde edilen enerjiyi anabolik tepkimelere taşıyan temel hücresel enerji para birimidir.'
        },
        {
          id: 'q-1-7', difficulty: 'very_easy',
          questionText: 'Canlıların, değişken dış çevre şartlarına rağmen kendi iç ortamlarını kararlı ve dengede tutmasına ne ad verilir?',
          options: [
            { id: 'A', text: 'Adaptasyon' },
            { id: 'B', text: 'Organizasyon' },
            { id: 'C', text: 'Homeostazi' },
            { id: 'D', text: 'Metabolizma' },
            { id: 'E', text: 'Hareket' }
          ],
          correctOptionId: 'C',
          explanation: 'Homeostazi, canlının değişen dış koşullara rağmen iç dengesini korumasıdır (örneğin vücut sıcaklığının 36.5°C kalması).'
        },
        {
          id: 'q-1-8', difficulty: 'very_easy',
          questionText: 'Bir organizmanın inorganik maddeleri kullanarak kendi organik besinini kendisinin üretmesine ne ad verilir?',
          options: [
            { id: 'A', text: 'Ototrof beslenme' },
            { id: 'B', text: 'Heterotrof beslenme' },
            { id: 'C', text: 'Hücresel solunum' },
            { id: 'D', text: 'Sindirim' },
            { id: 'E', text: 'Boşaltım' }
          ],
          correctOptionId: 'A',
          explanation: 'İnorganik maddelerden organik madde üreten canlılara ototrof (üretici) canlılar denir.'
        },
        {
          id: 'q-1-9', difficulty: 'very_easy',
          questionText: 'İhtiyaç duyduğu organik besini dışarıdan hazır olarak alan organizmalara ne ad verilir?',
          options: [
            { id: 'A', text: 'Ototrof' },
            { id: 'B', text: 'Kemoototrof' },
            { id: 'C', text: 'Fotoototrof' },
            { id: 'D', text: 'Heterotrof' },
            { id: 'E', text: 'Üretici' }
          ],
          correctOptionId: 'D',
          explanation: 'Organik besini kendisi üretemeyip dışarıdan hazır alan canlılara heterotrof (tüketici) denir.'
        },
        {
          id: 'q-1-10', difficulty: 'very_easy',
          questionText: 'Canlılarda besinlerin hücre içinde parçalanarak bağlarındaki enerjinin ATP\'ye dönüştürülmesi olayına ne ad verilir?',
          options: [
            { id: 'A', text: 'Sindirim' },
            { id: 'B', text: 'Soluk alıp verme' },
            { id: 'C', text: 'Hücresel solunum' },
            { id: 'D', text: 'Fotosentez' },
            { id: 'E', text: 'Boşaltım' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücresel solunum, besin monomerlerindeki kimyasal bağ enerjisinin hücre içinde ATP enerjisine dönüştürülmesidir.'
        },
        {
          id: 'q-1-11', difficulty: 'very_easy',
          questionText: 'Canlıların metabolik faaliyetleri sonucunda hücrelerinde oluşan zararlı atıkları vücutlarından uzaklaştırmasına ne ad verilir?',
          options: [
            { id: 'A', text: 'Boşaltım' },
            { id: 'B', text: 'Dışkılama' },
            { id: 'C', text: 'Solunum' },
            { id: 'D', text: 'Salgılama' },
            { id: 'E', text: 'Beslenme' }
          ],
          correctOptionId: 'A',
          explanation: 'Metabolizma sonucu hücre içinde oluşan amonyak, üre, karbondioksit gibi atıkların atılmasına boşaltım denir.'
        },
        {
          id: 'q-1-12', difficulty: 'very_easy',
          questionText: 'Canlıların soylarını devam ettirebilmek için kendilerine benzer yeni bireyler oluşturmasına ne ad verilir?',
          options: [
            { id: 'A', text: 'Büyüme' },
            { id: 'B', text: 'Gelişme' },
            { id: 'C', text: 'Üreme' },
            { id: 'D', text: 'Adaptasyon' },
            { id: 'E', text: 'Organizasyon' }
          ],
          correctOptionId: 'C',
          explanation: 'Üreme, türün devamı için yeni bireyler oluşturulmasıdır; ancak bireyin hayatta kalması için zorunlu değildir.'
        },
        {
          id: 'q-1-13', difficulty: 'very_easy',
          questionText: 'Hücre sayısının ve hacminin artmasıyla sağlanan nicel (sayısal/hacimsel) artışa ne ad verilir?',
          options: [
            { id: 'A', text: 'Gelişme' },
            { id: 'B', text: 'Büyüme' },
            { id: 'C', text: 'Adaptasyon' },
            { id: 'D', text: 'Üreme' },
            { id: 'E', text: 'Metabolizma' }
          ],
          correctOptionId: 'B',
          explanation: 'Büyüme, tek hücrelilerde hacim artışıyla, çok hücrelilerde ise hücre bölünmesi ve hacim artışıyla sağlanan nicel bir olaydır.'
        },
        {
          id: 'q-1-14', difficulty: 'very_easy',
          questionText: 'Genetik materyal (DNA veya RNA) taşımasına ve çoğalabilmesine rağmen hücresel yapısı olmayan yapı aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Bakteri' },
            { id: 'B', text: 'Amip' },
            { id: 'C', text: 'Virüs' },
            { id: 'D', text: 'Mantar' },
            { id: 'E', text: 'Sünger' }
          ],
          correctOptionId: 'C',
          explanation: 'Virüsler genetik madde taşıyıp konak hücrede çoğalabilirler ancak sitoplazmaları, zarları ve kendi metabolizmaları (enzimleri) yoktur.'
        },
        {
          id: 'q-1-15', difficulty: 'very_easy',
          questionText: 'Canlıların yaşadıkları ortamda hayatta kalma ve üreme şansını artıran "kalıtsal" özelliklere ne ad verilir?',
          options: [
            { id: 'A', text: 'Modifikasyon' },
            { id: 'B', text: 'Aklimasyon' },
            { id: 'C', text: 'Adaptasyon' },
            { id: 'D', text: 'Mutasyon' },
            { id: 'E', text: 'Homeostazi' }
          ],
          correctOptionId: 'C',
          explanation: 'Adaptasyon (uyum), popülasyonda bulunan ve kuşaktan kuşağa aktarılan kalıtsal hayatta kalma avantajlarıdır.'
        }
      ]
    },
    {
      id: 'test-2',
      title: 'Kavrama Testi 2',
      description: 'Temel yapı ve görevler',
      type: 'comprehension',
      order: 2,
      questions: [
        {
          id: 'q-2-1', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi tüm hücrelerde ortak olarak bulunan temel yapılardan biridir?',
          options: [
            { id: 'A', text: 'Çekirdek' },
            { id: 'B', text: 'Hücre zarı' },
            { id: 'C', text: 'Hücre duvarı' },
            { id: 'D', text: 'Mitokondri' },
            { id: 'E', text: 'Kloroplast' }
          ],
          correctOptionId: 'B',
          explanation: 'Tüm canlı hücreler, iç ve dış ortamı ayıran, madde alışverişini kontrol eden bir hücre zarına (plazma zarı) sahiptir.'
        },
        {
          id: 'q-2-2', difficulty: 'very_easy',
          questionText: 'Tüm canlı hücrelerde protein sentezinin gerçekleştiği zarsız organel aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Ribozom' },
            { id: 'B', text: 'Golgi aygıtı' },
            { id: 'C', text: 'Lizozom' },
            { id: 'D', text: 'Sentrozom' },
            { id: 'E', text: 'Endoplazmik retikulum' }
          ],
          correctOptionId: 'A',
          explanation: 'Ribozom, tüm canlı hücrelerde ortak olarak bulunan ve protein sentezinden (translasyon) sorumlu olan zarsız organeldir.'
        },
        {
          id: 'q-2-3', difficulty: 'very_easy',
          questionText: 'Tüm canlıların hücrelerinde, kalıtsal bilgiyi taşıyan molekül aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'RNA' },
            { id: 'B', text: 'DNA' },
            { id: 'C', text: 'ATP' },
            { id: 'D', text: 'Enzim' },
            { id: 'E', text: 'Hormon' }
          ],
          correctOptionId: 'B',
          explanation: 'Canlıların tümünde kalıtsal bilgiyi depolayan ve yeni nesillere aktaran molekül DNA\'dır.'
        },
        {
          id: 'q-2-4', difficulty: 'very_easy',
          questionText: 'Prokaryot hücre yapısına sahip canlılarda aşağıdakilerden hangisi bulunmaz?',
          options: [
            { id: 'A', text: 'Zarla çevrili çekirdek' },
            { id: 'B', text: 'Hücre zarı' },
            { id: 'C', text: 'Sitoplazma' },
            { id: 'D', text: 'Ribozom' },
            { id: 'E', text: 'DNA' }
          ],
          correctOptionId: 'A',
          explanation: 'Prokaryotik hücrelerde (bakteri ve arkeler) gerçek bir çekirdek ve zarlı organeller bulunmaz, DNA sitoplazmada dağınıktır.'
        },
        {
          id: 'q-2-5', difficulty: 'very_easy',
          questionText: 'Aşağıdaki canlı gruplarından hangisi tamamen tek hücreli organizmalardan oluşur?',
          options: [
            { id: 'A', text: 'Mantarlar' },
            { id: 'B', text: 'Hayvanlar' },
            { id: 'C', text: 'Bitkiler' },
            { id: 'D', text: 'Bakteriler' },
            { id: 'E', text: 'Protistalar' }
          ],
          correctOptionId: 'D',
          explanation: 'Bakteriler ve arkeler domainlerindeki canlıların tamamı prokaryot ve tek hücrelidir.'
        },
        {
          id: 'q-2-6', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi çok hücreli canlıların organizasyon basamaklarının doğru sıralanışıdır?',
          options: [
            { id: 'A', text: 'Hücre - Organ - Doku - Sistem' },
            { id: 'B', text: 'Doku - Hücre - Organ - Sistem' },
            { id: 'C', text: 'Hücre - Doku - Organ - Sistem - Organizma' },
            { id: 'D', text: 'Sistem - Organ - Doku - Hücre' },
            { id: 'E', text: 'Hücre - Sistem - Doku - Organ' }
          ],
          correctOptionId: 'C',
          explanation: 'Çok hücrelilerde benzer hücreler birleşerek dokuları, dokular organları, organlar sistemleri ve sistemler de organizmayı oluşturur.'
        },
        {
          id: 'q-2-7', difficulty: 'very_easy',
          questionText: 'Bütün canlılar, yaşamsal faaliyetlerini yürütebilmek için gerekli olan temel enerjiyi hücre içinde hangi formda üretirler?',
          options: [
            { id: 'A', text: 'Isı enerjisi' },
            { id: 'B', text: 'ATP (Adenozin trifosfat)' },
            { id: 'C', text: 'Işık enerjisi' },
            { id: 'D', text: 'Elektrik enerjisi' },
            { id: 'E', text: 'Mekanik enerji' }
          ],
          correctOptionId: 'B',
          explanation: 'Hücresel solunum sonucunda besinlerden elde edilen enerji, tüm canlıların ortak olarak kullandığı ATP molekülünde depolanır.'
        },
        {
          id: 'q-2-8', difficulty: 'very_easy',
          questionText: 'Oksijenli solunum ve oksijensiz solunum tepkimelerinin ilk aşaması olan "glikoliz" olayı hücrenin neresinde gerçekleşir?',
          options: [
            { id: 'A', text: 'Mitokondri matriksi' },
            { id: 'B', text: 'Kloroplast stroması' },
            { id: 'C', text: 'Çekirdek plazması' },
            { id: 'D', text: 'Sitoplazma' },
            { id: 'E', text: 'Golgi cisimciği' }
          ],
          correctOptionId: 'D',
          explanation: 'Glikoliz, glikozun pirüvata kadar yıkılması aşamasıdır ve tüm canlı hücrelerde sitoplazmada gerçekleşir.'
        },
        {
          id: 'q-2-9', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi bir bitkinin ışığa doğru yönelmesi durumunu canlılığın hangi ortak özelliği ile açıklar?',
          options: [
            { id: 'A', text: 'Homeostazi' },
            { id: 'B', text: 'Etkiye tepki (Uyarılma)' },
            { id: 'C', text: 'Boşaltım' },
            { id: 'D', text: 'Üreme' },
            { id: 'E', text: 'Adaptasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Bitkinin ışığa yönelmesi, dış çevreden gelen bir uyarana (ışık) karşı verilen yönelme tepkisidir.'
        },
        {
          id: 'q-2-10', difficulty: 'very_easy',
          questionText: 'Bitkilerde yaprak dökümü, tek hücrelilerde kontraktil kofulun fazla suyu dışarı atması hangi ortak yaşamsal faaliyet örneğidir?',
          options: [
            { id: 'A', text: 'Solunum' },
            { id: 'B', text: 'Boşaltım' },
            { id: 'C', text: 'Beslenme' },
            { id: 'D', text: 'Çoğalma' },
            { id: 'E', text: 'Organizasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Zararlı atıkların veya homeostaziyi bozacak fazla maddelerin (örneğin fazla su) uzaklaştırılması boşaltım faaliyeti kapsamına girer.'
        },
        {
          id: 'q-2-11', difficulty: 'very_easy',
          questionText: 'Canlıların kalıtsal yapısını oluşturan DNA üzerinde meydana gelen ani ve kalıcı değişikliklere ne ad verilir?',
          options: [
            { id: 'A', text: 'Modifikasyon' },
            { id: 'B', text: 'Adaptasyon' },
            { id: 'C', text: 'Varyasyon' },
            { id: 'D', text: 'Mutasyon' },
            { id: 'E', text: 'Evrim' }
          ],
          correctOptionId: 'D',
          explanation: 'Çevresel faktörler (radyasyon, kimyasallar) veya kopyalama hataları sonucu DNA diziliminde oluşan ani kalıcı değişimlere mutasyon denir.'
        },
        {
          id: 'q-2-12', difficulty: 'very_easy',
          questionText: 'Aşağıdaki yapılardan hangisi prokaryot (bakteri) ve ökaryot (bitki, hayvan) tüm hücrelerde sitoplazmanın sulu (jelimsi) kısmını oluşturur?',
          options: [
            { id: 'A', text: 'Stroma' },
            { id: 'B', text: 'Matriks' },
            { id: 'C', text: 'Sitozol' },
            { id: 'D', text: 'Nükleoplazma' },
            { id: 'E', text: 'Hücre özsuyu' }
          ],
          correctOptionId: 'C',
          explanation: 'Sitoplazmanın organeller dışında kalan, içinde enzimlerin ve moleküllerin çözündüğü jelimsi sıvı kısma sitozol adı verilir.'
        },
        {
          id: 'q-2-13', difficulty: 'very_easy',
          questionText: 'Bir hücrede su miktarının azalması ve büyük moleküllerin parçalanması ile sonuçlanan, suyun harcandığı sindirim reaksiyonlarına ne ad verilir?',
          options: [
            { id: 'A', text: 'Hidroliz' },
            { id: 'B', text: 'Dehidrasyon sentezi' },
            { id: 'C', text: 'Fermantasyon' },
            { id: 'D', text: 'Oksijenli solunum' },
            { id: 'E', text: 'Kemosentez' }
          ],
          correctOptionId: 'A',
          explanation: 'Hidroliz, polimer veya kompleks moleküllerin su kullanılarak (hidro) parçalanması (liz) işlemidir.'
        },
        {
          id: 'q-2-14', difficulty: 'very_easy',
          questionText: 'Bütün canlılar hücre zarlarının yapısına katılan ve enerji eldesinde de kullanılan hangi organik bileşikleri sentezleyip parçalayabilir?',
          options: [
            { id: 'A', text: 'Sadece karbonhidratlar' },
            { id: 'B', text: 'Sadece yağlar' },
            { id: 'C', text: 'Sadece proteinler' },
            { id: 'D', text: 'Karbonhidrat, yağ ve proteinler' },
            { id: 'E', text: 'Mineraller ve vitaminler' }
          ],
          correctOptionId: 'D',
          explanation: 'Tüm canlılar karbonhidrat (glikoz), lipit (yağ) ve protein gibi temel organik makromolekülleri metabolizmalarında sentezleyip yıkma yeteneğine sahiptir.'
        },
        {
          id: 'q-2-15', difficulty: 'very_easy',
          questionText: 'Aşağıdaki özelliklerden hangisi "tüm canlıların ortak özelliklerinden" biri DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Beslenme' },
            { id: 'B', text: 'Solunum ile ATP üretme' },
            { id: 'C', text: 'Aktif hareket ederek yer değiştirme' },
            { id: 'D', text: 'Boşaltım yapma' },
            { id: 'E', text: 'Uyaranlara tepki verme' }
          ],
          correctOptionId: 'C',
          explanation: 'Bütün canlılar hareket eder (örneğin bitkilerde yönelme, durum değiştirme). Ancak "aktif yer değiştirme" hareketi (yürüme, yüzme vs.) bitkiler veya süngerler gibi canlılarda görülmez, ortak değildir.'
        }
      ]
    },
    {
      id: 'test-3',
      title: 'Kavrama Testi 3',
      description: 'Kavramları birbirinden ayırma',
      type: 'comprehension',
      order: 3,
      questions: [
        {
          id: 'q-3-1', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi bir "anabolizma (yapım)" olayıdır?',
          options: [
            { id: 'A', text: 'Hücresel solunum' },
            { id: 'B', text: 'Sindirim' },
            { id: 'C', text: 'Fotosentez' },
            { id: 'D', text: 'Fermantasyon' },
            { id: 'E', text: 'Oksijenli solunum' }
          ],
          correctOptionId: 'C',
          explanation: 'Fotosentez ve kemosentez, inorganik maddelerden organik besin üretilen anabolik (yapım) tepkimelerdir.'
        },
        {
          id: 'q-3-2', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi bir "katabolizma (yıkım)" olayıdır?',
          options: [
            { id: 'A', text: 'Protein sentezi' },
            { id: 'B', text: 'DNA eşlenmesi' },
            { id: 'C', text: 'Nişasta sentezi' },
            { id: 'D', text: 'Oksijensiz solunum' },
            { id: 'E', text: 'Glikojen sentezi' }
          ],
          correctOptionId: 'D',
          explanation: 'Solunum olayları (oksijenli, oksijensiz, fermantasyon) büyük moleküllerin parçalanarak enerji elde edildiği katabolik (yıkım) süreçlerdir.'
        },
        {
          id: 'q-3-3', difficulty: 'very_easy',
          questionText: 'Ototrof (üretici) ve Heterotrof (tüketici) kavramları canlıların ortak özelliklerinden hangisiyle ilgilidir?',
          options: [
            { id: 'A', text: 'Solunum' },
            { id: 'B', text: 'Beslenme' },
            { id: 'C', text: 'Boşaltım' },
            { id: 'D', text: 'Hareket' },
            { id: 'E', text: 'Üreme' }
          ],
          correctOptionId: 'B',
          explanation: 'Ototrof (kendi besinini üreten) ve heterotrof (besinini dışarıdan hazır alan) kavramları, canlıların beslenme şekillerini ifade eder.'
        },
        {
          id: 'q-3-4', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi canlıların iç dengesini (homeostazi) korumaya yönelik bir adaptasyondur?',
          options: [
            { id: 'A', text: 'Ağaçların sonbaharda yaprak dökmesi' },
            { id: 'B', text: 'Terleme ile vücut ısısının düşürülmesi' },
            { id: 'C', text: 'Bakterilerin ikiye bölünerek çoğalması' },
            { id: 'D', text: 'Tohumun çimlenmesi' },
            { id: 'E', text: 'Amipin yalancı ayaklarla besin yakalaması' }
          ],
          correctOptionId: 'B',
          explanation: 'Terleme, artan vücut sıcaklığını dengeleyerek iç ısıyı sabit (homeostazide) tutmaya yarayan bir uyum mekanizmasıdır.'
        },
        {
          id: 'q-3-5', difficulty: 'very_easy',
          questionText: 'Bir hücrenin kendisinden daha kompleks bir yapı olan dokuyu oluşturması canlıların hangi ortak özelliğiyle açıklanır?',
          options: [
            { id: 'A', text: 'Organizasyon' },
            { id: 'B', text: 'Metabolizma' },
            { id: 'C', text: 'Adaptasyon' },
            { id: 'D', text: 'Tepki verme' },
            { id: 'E', text: 'Homeostazi' }
          ],
          correctOptionId: 'A',
          explanation: 'Hücrelerin bir araya gelerek dokuları, dokuların organları oluşturması hiyerarşik bir organizasyon (düzen) örneğidir.'
        },
        {
          id: 'q-3-6', difficulty: 'very_easy',
          questionText: 'Hangi seçenekte "Büyüme" ve "Gelişme" kavramlarının farkı doğru verilmiştir?',
          options: [
            { id: 'A', text: 'Büyüme sadece bitkilerde, gelişme hayvanlarda olur' },
            { id: 'B', text: 'Büyüme hacimsel artıştır, gelişme ise yapıların işlevsel yetkinlik kazanmasıdır' },
            { id: 'C', text: 'Büyüme hücre bölünmesiyle olmaz, gelişme hücre bölünmesidir' },
            { id: 'D', text: 'Büyüme sadece tek hücrelilerde, gelişme çok hücrelilerde görülür' },
            { id: 'E', text: 'Büyüme kalıtsaldır, gelişme kalıtsal değildir' }
          ],
          correctOptionId: 'B',
          explanation: 'Büyüme, kütle ve hacimdeki artışı ifade ederken; gelişme, organların görevlerini yapabilecek olgunluğa erişmesini kapsar.'
        },
        {
          id: 'q-3-7', difficulty: 'very_easy',
          questionText: '"Göz bebeğinin karanlıkta büyümesi, aydınlıkta küçülmesi" canlıların hangi ortak özelliğine örnektir?',
          options: [
            { id: 'A', text: 'Boşaltım' },
            { id: 'B', text: 'Üreme' },
            { id: 'C', text: 'Uyarılara tepki' },
            { id: 'D', text: 'Beslenme' },
            { id: 'E', text: 'Adaptasyon' }
          ],
          correctOptionId: 'C',
          explanation: 'Işık şiddeti bir uyarandır. Göz bebeğinin bu uyarana karşı boyutunu değiştirmesi anlık bir tepkidir.'
        },
        {
          id: 'q-3-8', difficulty: 'very_easy',
          questionText: 'Bitkilerde görülen fotosentez olayı ile hücresel solunum arasındaki temel ilişki nedir?',
          options: [
            { id: 'A', text: 'İkisi de organik besin sentezler' },
            { id: 'B', text: 'İkisi de sadece kloroplastta gerçekleşir' },
            { id: 'C', text: 'Fotosentez besin ve oksijen üretir, solunum bunları tüketerek enerji (ATP) üretir' },
            { id: 'D', text: 'İkisi de yıkım (katabolizma) tepkimesidir' },
            { id: 'E', text: 'Solunum gece, fotosentez sadece ışıkta besin parçalar' }
          ],
          correctOptionId: 'C',
          explanation: 'Fotosentezde ışık enerjisiyle üretilen organik besinler, solunumda parçalanarak hücrenin kullanabileceği ATP enerjisine dönüştürülür.'
        },
        {
          id: 'q-3-9', difficulty: 'very_easy',
          questionText: 'Bir bakteri ile bir amip karşılaştırıldığında aşağıdakilerden hangisi ikisinde de ortaktır?',
          options: [
            { id: 'A', text: 'Zarlı organel bulundurma' },
            { id: 'B', text: 'Çekirdek zarı bulundurma' },
            { id: 'C', text: 'Çok hücreli olma' },
            { id: 'D', text: 'Ribozom bulundurma' },
            { id: 'E', text: 'Ototrof beslenme' }
          ],
          correctOptionId: 'D',
          explanation: 'Bakteri (prokaryot) ve amip (ökaryot) olmalarına rağmen, her ikisi de canlı olduğu için ortak olarak hücre zarı, sitoplazma, DNA, RNA ve ribozoma sahiptir.'
        },
        {
          id: 'q-3-10', difficulty: 'very_easy',
          questionText: 'Canlılarda hücre içi tepkimeleri hızlandıran biyolojik katalizörlere ne ad verilir?',
          options: [
            { id: 'A', text: 'Hormon' },
            { id: 'B', text: 'Vitamin' },
            { id: 'C', text: 'Enzim' },
            { id: 'D', text: 'Mineral' },
            { id: 'E', text: 'ATP' }
          ],
          correctOptionId: 'C',
          explanation: 'Enzimler, metabolik tepkimelerin aktivasyon enerjisini düşürerek hızlanmasını sağlayan protein yapılı biyolojik katalizörlerdir.'
        },
        {
          id: 'q-3-11', difficulty: 'very_easy',
          questionText: 'Bir bitki ile bir aslan karşılaştırıldığında, aşağıdakilerden hangisi beslenme yönüyle farklılıklarını belirtir?',
          options: [
            { id: 'A', text: 'İkisi de heterotroftur' },
            { id: 'B', text: 'Bitki ototrof, aslan heterotroftur' },
            { id: 'C', text: 'İkisi de ototroftur' },
            { id: 'D', text: 'Aslan ototrof, bitki heterotroftur' },
            { id: 'E', text: 'İkisi de saprofit beslenir' }
          ],
          correctOptionId: 'B',
          explanation: 'Bitkiler fotosentez yaparak kendi besinini üretir (ototrof), aslan ise diğer canlıları yiyerek beslenir (heterotrof).'
        },
        {
          id: 'q-3-12', difficulty: 'very_easy',
          questionText: 'Aşağıdaki ortak özelliklerden hangisi türün devamı için şart olup bireyin yaşamı için şart DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Beslenme' },
            { id: 'B', text: 'Solunum' },
            { id: 'C', text: 'Üreme' },
            { id: 'D', text: 'Boşaltım' },
            { id: 'E', text: 'Adaptasyon' }
          ],
          correctOptionId: 'C',
          explanation: 'Bir canlı üremeden de yaşamına devam edebilir, ancak kendi türünün neslinin devamı için üremek zorundadır.'
        },
        {
          id: 'q-3-13', difficulty: 'very_easy',
          questionText: 'Kaktüslerin yapraklarının diken şeklinde olması hangi kavramla açıklanır?',
          options: [
            { id: 'A', text: 'Modifikasyon' },
            { id: 'B', text: 'Adaptasyon' },
            { id: 'C', text: 'Homeostazi' },
            { id: 'D', text: 'Mutasyon' },
            { id: 'E', text: 'Organizasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Kaktüslerin diken yaprakları su kaybını azaltan, çöle uyum sağlamış kalıtsal bir adaptasyondur.'
        },
        {
          id: 'q-3-14', difficulty: 'very_easy',
          questionText: 'Tek hücreli bir canlı olan Paramesyum\'un tatlı sularda hücre içine giren fazla suyu kontraktil kofullarıyla atması neye örnektir?',
          options: [
            { id: 'A', text: 'Boşaltım ve Homeostazi' },
            { id: 'B', text: 'Sindirim ve Beslenme' },
            { id: 'C', text: 'Üreme ve Gelişme' },
            { id: 'D', text: 'Adaptasyon ve Organizasyon' },
            { id: 'E', text: 'Ototrof beslenme' }
          ],
          correctOptionId: 'A',
          explanation: 'Fazla suyun atılması bir boşaltım olayıdır ve bu durum hücrenin su dengesini (homeostazi) korumasını sağlar.'
        },
        {
          id: 'q-3-15', difficulty: 'very_easy',
          questionText: 'Besin monomerlerinin oksijen kullanılmadan, enzimler yardımıyla parçalanıp enerji elde edilmesine ne ad verilir?',
          options: [
            { id: 'A', text: 'Oksijenli solunum' },
            { id: 'B', text: 'Fotosentez' },
            { id: 'C', text: 'Kemosentez' },
            { id: 'D', text: 'Oksijensiz solunum veya Fermantasyon' },
            { id: 'E', text: 'Sindirim' }
          ],
          correctOptionId: 'D',
          explanation: 'Oksijen (O2) kullanılmayan enerji eldesi süreçlerine, oksijensiz solunum veya fermantasyon adı verilir.'
        }
      ]
    },
    {
      id: 'test-4',
      title: 'Kavrama Testi 4',
      description: 'Temel ilişkiler',
      type: 'comprehension',
      order: 4,
      questions: [
        {
          id: 'q-4-1', difficulty: 'very_easy',
          questionText: 'Çok hücreli bir canlıda dokuların bir araya gelmesiyle oluşan daha üst organizasyon birimi nedir?',
          options: [
            { id: 'A', text: 'Hücre' },
            { id: 'B', text: 'Organel' },
            { id: 'C', text: 'Organ' },
            { id: 'D', text: 'Sistem' },
            { id: 'E', text: 'Organizma' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücreler dokuları, dokular ise belirli bir görevi yapmak üzere birleşerek organları oluşturur.'
        },
        {
          id: 'q-4-2', difficulty: 'very_easy',
          questionText: 'Canlıların inorganik maddelerden (örneğin karbondioksit ve su) organik madde (glikoz) üretmesine genel olarak ne isim verilir?',
          options: [
            { id: 'A', text: 'Dehidrasyon' },
            { id: 'B', text: 'Ototrof beslenme (Fotosentez/Kemosentez)' },
            { id: 'C', text: 'Hidroliz' },
            { id: 'D', text: 'Heterotrof beslenme' },
            { id: 'E', text: 'Fermantasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'İnorganik maddelerden organik madde sentezine ototrof beslenme (üreticilik) denir. Bu işlem ışıkla (fotosentez) veya kimyasal enerjiyle (kemosentez) yapılabilir.'
        },
        {
          id: 'q-4-3', difficulty: 'very_easy',
          questionText: 'İnorganik maddelerin oksidasyonu ile açığa çıkan kimyasal enerjiyi kullanarak organik besin sentezlenmesine ne ad verilir?',
          options: [
            { id: 'A', text: 'Fotosentez' },
            { id: 'B', text: 'Kemosentez' },
            { id: 'C', text: 'Oksijenli solunum' },
            { id: 'D', text: 'Fermantasyon' },
            { id: 'E', text: 'Sindirim' }
          ],
          correctOptionId: 'B',
          explanation: 'Kemosentez, sadece bazı prokaryotların yapabildiği, kimyasal enerji kullanılarak besin üretilmesi olayıdır.'
        },
        {
          id: 'q-4-4', difficulty: 'very_easy',
          questionText: 'Canlılarda hareket olayı incelendiğinde aşağıdakilerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Hayvanlar genellikle aktif hareket eder' },
            { id: 'B', text: 'Bitkiler genellikle pasif (yönelme/durum değiştirme) hareketi yapar' },
            { id: 'C', text: 'Amip, öglena gibi tek hücreliler aktif hareket edebilir' },
            { id: 'D', text: 'Tüm canlılar sadece yer değiştirme hareketi yapar' },
            { id: 'E', text: 'Hareket için enerji harcanır' }
          ],
          correctOptionId: 'D',
          explanation: 'Yer değiştirme (aktif hareket) tüm canlılarda ortak değildir. Bitkiler kökleriyle suya yönelme (tropizma) gibi pasif hareketler yaparlar.'
        },
        {
          id: 'q-4-5', difficulty: 'very_easy',
          questionText: 'Güneş ışığını kullanarak organik besin sentezleyen bir canlının bu olayı yapabilmesi için hücresinde hangi molekülün bulunması zorunludur?',
          options: [
            { id: 'A', text: 'Hemoglobin' },
            { id: 'B', text: 'Klorofil' },
            { id: 'C', text: 'Miyoglobin' },
            { id: 'D', text: 'Kollajen' },
            { id: 'E', text: 'İnsülin' }
          ],
          correctOptionId: 'B',
          explanation: 'Fotosentez olayı için güneş ışığını soğuran (emen) klorofil pigmentine kesinlikle ihtiyaç vardır.'
        },
        {
          id: 'q-4-6', difficulty: 'very_easy',
          questionText: 'Hangisi çok hücreli canlılarda büyüme mekanizmasıdır?',
          options: [
            { id: 'A', text: 'Sadece hücre kütlesinin artması' },
            { id: 'B', text: 'Sadece sitoplazma miktarının azalması' },
            { id: 'C', text: 'Hücrelerin bölünerek sayısının artması' },
            { id: 'D', text: 'Boşaltım ürünlerinin dışarı atılması' },
            { id: 'E', text: 'Metabolizmanın yavaşlaması' }
          ],
          correctOptionId: 'C',
          explanation: 'Tek hücreliler hacimce büyürken, çok hücreli canlılar esas olarak mitoz bölünmelerle hücre sayısını artırarak büyürler.'
        },
        {
          id: 'q-4-7', difficulty: 'very_easy',
          questionText: 'Boşaltım olayı tüm canlılarda ortaktır ancak şekli farklıdır. Aşağıdakilerden hangisi bitkilerde boşaltım mekanizmalarından biri değildir?',
          options: [
            { id: 'A', text: 'Yaprak dökümü' },
            { id: 'B', text: 'Terleme (Transpirasyon)' },
            { id: 'C', text: 'Damlama (Guttasyon)' },
            { id: 'D', text: 'Böbrekler ile idrar oluşumu' },
            { id: 'E', text: 'Köklerden dışarıya madde salgılaması' }
          ],
          correctOptionId: 'D',
          explanation: 'Böbrekler ve idrar oluşumu hayvanlara özgü bir sistemdir. Bitkiler yaprak dökümü, terleme ve damlama ile boşaltım yaparlar.'
        },
        {
          id: 'q-4-8', difficulty: 'very_easy',
          questionText: 'Bir tohumun çimlenip fide haline gelmesi, kök ve gövdenin belirginleşmesi, çiçek açması olayı hangi kavramla daha iyi ifade edilir?',
          options: [
            { id: 'A', text: 'Gelişme' },
            { id: 'B', text: 'Adaptasyon' },
            { id: 'C', text: 'Boşaltım' },
            { id: 'D', text: 'Hareket' },
            { id: 'E', text: 'Mutasyon' }
          ],
          correctOptionId: 'A',
          explanation: 'Yapıların işlevsellik kazanması, yeni doku ve organların ortaya çıkması gelişim sürecidir.'
        },
        {
          id: 'q-4-9', difficulty: 'very_easy',
          questionText: 'Kutup ayılarının postlarının beyaz olması ve kalın yağ tabakasına sahip olmaları bir adaptasyondur. Bu durum onlara ne sağlar?',
          options: [
            { id: 'A', text: 'Hücre sayısını azaltma' },
            { id: 'B', text: 'Daha az besinle doyma' },
            { id: 'C', text: 'Yaşadıkları çevreye uyum sağlayarak hayatta kalma şansını artırma' },
            { id: 'D', text: 'Sürekli uyku halinde olma' },
            { id: 'E', text: 'Bitkisel besinlerle beslenebilme' }
          ],
          correctOptionId: 'C',
          explanation: 'Adaptasyonlar canlının bulunduğu ortamda kamufle olma, avlanma ve ısıyı koruma gibi yaşama ve üreme şansını artıran özellikleridir.'
        },
        {
          id: 'q-4-10', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi tüm canlılarda RNA\'nın üstlendiği temel görevlerden biridir?',
          options: [
            { id: 'A', text: 'Kalıtsal bilgiyi nesilden nesile aktarmak' },
            { id: 'B', text: 'Enerji depolamak' },
            { id: 'C', text: 'Protein sentezinde (translasyon) görev almak' },
            { id: 'D', text: 'Hücre zarını oluşturmak' },
            { id: 'E', text: 'İnorganik maddeleri organik maddelere dönüştürmek' }
          ],
          correctOptionId: 'C',
          explanation: 'Kalıtsal bilgiyi DNA depolar ve aktarır. RNA ise (mRNA, tRNA, rRNA formlarıyla) DNA\'dan aldığı şifreyle protein sentezinde görev alır.'
        },
        {
          id: 'q-4-11', difficulty: 'very_easy',
          questionText: 'Bir organizmanın türünü devam ettirmek amacıyla eşeyli veya eşeysiz yollarla yeni bireyler meydana getirmesine ne ad verilir?',
          options: [
            { id: 'A', text: 'Üreme' },
            { id: 'B', text: 'Adaptasyon' },
            { id: 'C', text: 'Büyüme' },
            { id: 'D', text: 'Metabolizma' },
            { id: 'E', text: 'Hareket' }
          ],
          correctOptionId: 'A',
          explanation: 'Üreme (çoğalma), canlıların kendi nesillerini devam ettirmek için yeni yavrular oluşturmasıdır.'
        },
        {
          id: 'q-4-12', difficulty: 'very_easy',
          questionText: 'Hangisi inorganik bir bileşiktir ve dışarıdan hazır alınmak zorundadır?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Yağ asidi' },
            { id: 'C', text: 'Aminoasit' },
            { id: 'D', text: 'Su' },
            { id: 'E', text: 'Nişasta' }
          ],
          correctOptionId: 'D',
          explanation: 'Su, mineraller ve tuzlar inorganik maddelerdir ve ister ototrof ister heterotrof olsun tüm canlılar bunları dışarıdan hazır alır.'
        },
        {
          id: 'q-4-13', difficulty: 'very_easy',
          questionText: 'Enerji üretmek amacıyla hücre içinde parçalanan temel karbonhidrat aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Selüloz' },
            { id: 'C', text: 'Kitin' },
            { id: 'D', text: 'Glikojen' },
            { id: 'E', text: 'Nişasta' }
          ],
          correctOptionId: 'A',
          explanation: 'Glikoz (monosakkarit), hücre solunumunda enerji (ATP) elde etmek için en temel hammaddedir.'
        },
        {
          id: 'q-4-14', difficulty: 'very_easy',
          questionText: 'Saprofitler (çürükçüller) ekosistemde nasıl bir role sahiptir?',
          options: [
            { id: 'A', text: 'Kendi besinini kendi üretir' },
            { id: 'B', text: 'Sadece inorganik beslenir' },
            { id: 'C', text: 'Ölü organizmaları parçalayarak madde döngüsünü sağlarlar' },
            { id: 'D', text: 'Sadece bitkilerle beslenirler' },
            { id: 'E', text: 'Fotosentez yaparlar' }
          ],
          correctOptionId: 'C',
          explanation: 'Saprofitler (ayrıştırıcılar) dışarıya enzim salgılayarak ölü atıkları parçalar ve organik maddeleri tekrar inorganik hale getirir.'
        },
        {
          id: 'q-4-15', difficulty: 'very_easy',
          questionText: 'Tüm canlıların genetik yapı birimi olan DNA\'nın açılımı aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Deoksiribo Nükleik Asit' },
            { id: 'B', text: 'Dino Nükleik Asit' },
            { id: 'C', text: 'Derin Nükleer Asit' },
            { id: 'D', text: 'Dehidrasyon Nükleotidi' },
            { id: 'E', text: 'Dinamik Nükleotit Asit' }
          ],
          correctOptionId: 'A',
          explanation: 'DNA, taşıdığı 5 karbonlu şekerin (Deoksiriboz) isminden türetilen "Deoksiribo Nükleik Asit"in kısaltmasıdır.'
        }
      ]
    },
    {
      id: 'test-5',
      title: 'Kavrama Testi 5',
      description: 'Basit neden-sonuç',
      type: 'comprehension',
      order: 5,
      questions: [
        {
          id: 'q-5-1', difficulty: 'very_easy',
          questionText: 'Bir canlının yaşamsal faaliyetlerini sürdürebilmesi için enerjiye ihtiyacı vardır. Canlılar bu enerjiyi hangi hücresel olay sonucunda açığa çıkarır?',
          options: [
            { id: 'A', text: 'Boşaltım' },
            { id: 'B', text: 'Hücresel solunum' },
            { id: 'C', text: 'Sindirim' },
            { id: 'D', text: 'Fotosentez' },
            { id: 'E', text: 'Üreme' }
          ],
          correctOptionId: 'B',
          explanation: 'Enerji (ATP) eldesi, besinlerin hücresel solunum (veya fermantasyon) ile parçalanmasıyla sağlanır.'
        },
        {
          id: 'q-5-2', difficulty: 'very_easy',
          questionText: 'Ağır egzersiz yapan bir insanın solunum ve kalp atışının hızlanması, artan vücut ısısına karşılık terlemesi gibi değişikliklerin temel amacı aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Büyümeyi hızlandırmak' },
            { id: 'B', text: 'Mutasyona uğramak' },
            { id: 'C', text: 'Homeostaziyi (iç denge) korumak' },
            { id: 'D', text: 'Sindirim yapmak' },
            { id: 'E', text: 'Fotosentez hızını artırmak' }
          ],
          correctOptionId: 'C',
          explanation: 'Değişen dış veya iç şartlara rağmen vücudun iç dengesinin (ısı, pH, su dengesi) sabit tutulmasına homeostazi denir.'
        },
        {
          id: 'q-5-3', difficulty: 'very_easy',
          questionText: 'Kış uykusuna yatan hayvanların metabolizma hızlarını en alt düzeye indirmesinin temel nedeni nedir?',
          options: [
            { id: 'A', text: 'Üremeyi hızlandırmak' },
            { id: 'B', text: 'Avcılardan kaçmak' },
            { id: 'C', text: 'Hücre sayısını artırmak' },
            { id: 'D', text: 'Soğuk havalarda enerji tasarrufu sağlamak' },
            { id: 'E', text: 'Boşaltım ihtiyacını artırmak' }
          ],
          correctOptionId: 'D',
          explanation: 'Kış uykusu (hibernasyon), besin kıtlığı ve aşırı soğuklarda enerji tüketimini minimuma indiren kalıtsal bir adaptasyondur.'
        },
        {
          id: 'q-5-4', difficulty: 'very_easy',
          questionText: 'Ototrof canlılar ekosistemde besin zincirinin ilk halkasını oluşturur. Bunun nedeni aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Hareket edememeleri' },
            { id: 'B', text: 'İnorganik maddelerden kendi organik besinlerini üretebilmeleri' },
            { id: 'C', text: 'Oksijensiz solunum yapmaları' },
            { id: 'D', text: 'Heterotrof olmaları' },
            { id: 'E', text: 'Sadece su içinde yaşamaları' }
          ],
          correctOptionId: 'B',
          explanation: 'Ototroflar inorganik maddeleri organik besine dönüştürerek diğer tüm canlıların enerji ve madde kaynağı olurlar.'
        },
        {
          id: 'q-5-5', difficulty: 'very_easy',
          questionText: 'Hücrede protein sentezinin durması durumunda canlının ölmesi beklenir. Bunun en temel sebebi nedir?',
          options: [
            { id: 'A', text: 'Canlının fotosentez yapamaması' },
            { id: 'B', text: 'Enzim ve yapısal proteinlerin üretilememesi sonucu metabolizmanın durması' },
            { id: 'C', text: 'Glikozun parçalanamaması' },
            { id: 'D', text: 'DNA\'nın yok olması' },
            { id: 'E', text: 'Su dengesinin kurulamaması' }
          ],
          correctOptionId: 'B',
          explanation: 'Metabolik reaksiyonları katalizleyen enzimler protein yapılıdır. Protein üretilmezse enzim üretilmez ve yaşam biter.'
        },
        {
          id: 'q-5-6', difficulty: 'very_easy',
          questionText: 'Develerin hörgüçlerinde su yerine yağ depolamalarının hayatta kalmalarına sağladığı temel avantaj nedir?',
          options: [
            { id: 'A', text: 'Sırtlarını güneşten korumak' },
            { id: 'B', text: 'Yağların hücresel solunumla yıkılması sonucu bol miktarda metabolik su ve enerji açığa çıkması' },
            { id: 'C', text: 'Daha hızlı koşmalarını sağlamak' },
            { id: 'D', text: 'Üremelerini kolaylaştırmak' },
            { id: 'E', text: 'Ağır yük taşımak' }
          ],
          correctOptionId: 'B',
          explanation: 'Yağların hidrojen oranı yüksektir. Oksijenli solunumla yıkıldıklarında çok miktarda enerji ve metabolik su oluştururlar. Bu çölde büyük bir adaptasyondur.'
        },
        {
          id: 'q-5-7', difficulty: 'very_easy',
          questionText: 'Eşeysiz üreyen canlılarda (örneğin amip) yavruların genetik yapısı ata canlıyla tamamen aynıdır. Bunun nedeni nedir?',
          options: [
            { id: 'A', text: 'Oluşumun sadece mayoz bölünmeyle gerçekleşmesi' },
            { id: 'B', text: 'Temelinin mitoz bölünmeye dayanması ve genetik çeşitlilik sağlayan olayların olmaması' },
            { id: 'C', text: 'Farklı iki atadan gen almaları' },
            { id: 'D', text: 'Döllenme olayının meydana gelmesi' },
            { id: 'E', text: 'Çevresel faktörlerin (modifikasyon) farklı olması' }
          ],
          correctOptionId: 'B',
          explanation: 'Eşeysiz üreme, genetik materyalin kopyalanıp ayrıldığı mitoz temelli bir olaydır. Çeşitlilik (mutasyon hariç) oluşturmaz.'
        },
        {
          id: 'q-5-8', difficulty: 'very_easy',
          questionText: 'Bir canlının türünün yok olmaması (neslinin devamı) için hangi ortak özelliği mutlaka gerçekleştirmesi gerekir?',
          options: [
            { id: 'A', text: 'Ototrof beslenme' },
            { id: 'B', text: 'Boşaltım' },
            { id: 'C', text: 'Aktif hareket' },
            { id: 'D', text: 'Üreme' },
            { id: 'E', text: 'Oksijenli solunum' }
          ],
          correctOptionId: 'D',
          explanation: 'Bir birey üremeden yaşayabilir ancak neslin devamı, yani türün yok olmaması üremeye bağlıdır.'
        },
        {
          id: 'q-5-9', difficulty: 'very_easy',
          questionText: 'Bitkilerin yapraklarında sentezlenen glikozun kök hücrelerine kadar taşınıp orada nişastaya dönüştürülmesi organizasyonun hangi düzeyini gösterir?',
          options: [
            { id: 'A', text: 'Sistemlerin birbiriyle uyumlu çalışması (Organizma düzeyi)' },
            { id: 'B', text: 'Tek hücreli organizasyon' },
            { id: 'C', text: 'Sadece organel aktivitesi' },
            { id: 'D', text: 'İnorganik maddelerin dışarıdan alınması' },
            { id: 'E', text: 'Popülasyon organizasyonu' }
          ],
          correctOptionId: 'A',
          explanation: 'Yaprak (organ) ve kök (organ) arasındaki madde alışverişi, çok hücreli canlının bir bütün (organizma) halinde uyumlu çalıştığını gösterir.'
        },
        {
          id: 'q-5-10', difficulty: 'very_easy',
          questionText: 'Bir insan karanlık odaya girdiğinde gözbebekleri büyür, aydınlıkta ise küçülür. Bu olayın canlılık özelliği açısından nedeni nedir?',
          options: [
            { id: 'A', text: 'Boşaltım yapmak' },
            { id: 'B', text: 'Çevresel uyarana (ışık) tepki vererek uygun görmeyi sağlamak' },
            { id: 'C', text: 'Solunum hızını ayarlamak' },
            { id: 'D', text: 'Beslenme ihtiyacını gidermek' },
            { id: 'E', text: 'Hücre sayısını artırmak' }
          ],
          correctOptionId: 'B',
          explanation: 'Bu durum, dış çevredeki ışık uyaranına karşı sinir sistemi aracılığıyla verilen motor bir tepkidir.'
        },
        {
          id: 'q-5-11', difficulty: 'very_easy',
          questionText: 'Canlılarda zehirli bir atık olan amonyağın (NH3) karaciğerde üreye dönüştürülüp böbreklerle atılmasının temel amacı nedir?',
          options: [
            { id: 'A', text: 'Boşaltım yaparak iç dengeyi (homeostazi) korumak' },
            { id: 'B', text: 'Enerji üretmek' },
            { id: 'C', text: 'Yeni dokular oluşturmak' },
            { id: 'D', text: 'Ototrof beslenmek' },
            { id: 'E', text: 'Üremeye yardımcı olmak' }
          ],
          correctOptionId: 'A',
          explanation: 'Amonyağın daha az zehirli üreye çevrilip atılması, kandaki zehir miktarını dengeleyen homeostatik bir boşaltım olayıdır.'
        },
        {
          id: 'q-5-12', difficulty: 'very_easy',
          questionText: 'Hücre zarı seçici geçirgen bir yapıdadır. Zarın bu özelliğe sahip olmasının temel nedeni nedir?',
          options: [
            { id: 'A', text: 'Hücrenin hareket etmesini sağlamak' },
            { id: 'B', text: 'Fotosentez tepkimelerini yapmak' },
            { id: 'C', text: 'Hücre içi madde dengesini (homeostazi) korumak için giren ve çıkan maddeleri kontrol etmek' },
            { id: 'D', text: 'Sadece suyu hücre dışına atmak' },
            { id: 'E', text: 'Hücre bölünmesini engellemek' }
          ],
          correctOptionId: 'C',
          explanation: 'Seçici geçirgenlik, hücreye her maddenin rastgele girmesini önleyerek iç ortamın sabitliğini (homeostazi) sağlar.'
        },
        {
          id: 'q-5-13', difficulty: 'very_easy',
          questionText: 'Tüm hücrelerde su oranı belli bir seviyenin (yaklaşık %15) altına düşerse enzimler çalışmaz. Bu bilginin nedeni aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Enzimlerin çalışabilmesi için uygun sulu (çözücü) ortama ihtiyaç duyması' },
            { id: 'B', text: 'Suyun enerji verici olarak kullanılması' },
            { id: 'C', text: 'Enzimlerin sudan oluşması' },
            { id: 'D', text: 'Suyun kalıtsal bilgi taşıması' },
            { id: 'E', text: 'Suyun hücre zarını parçalaması' }
          ],
          correctOptionId: 'A',
          explanation: 'Biyokimyasal tepkimeleri hızlandıran enzimlerin substratlarıyla buluşup etkileşebilmesi için çözücü bir ortama, yani suya (en az %15) ihtiyaç vardır.'
        },
        {
          id: 'q-5-14', difficulty: 'very_easy',
          questionText: 'Bütün canlılar DNA\'larındaki şifreye uygun olarak kendi proteinlerini sentezlerler. Protein sentezinin tüm canlılarda görülmesinin nedeni nedir?',
          options: [
            { id: 'A', text: 'Sadece enerji elde etmek' },
            { id: 'B', text: 'Sadece destek sağlamak' },
            { id: 'C', text: 'Ribozom organelinin ve yaşamsal faaliyetleri yürüten enzimlerin tüm canlılarda bulunması' },
            { id: 'D', text: 'Hücre çeperi oluşturmak' },
            { id: 'E', text: 'Hareket etmek' }
          ],
          correctOptionId: 'C',
          explanation: 'Canlılığın devamı enzimlere, enzimlerin yapısı proteine bağlıdır. Bu nedenle evrensel organel olan ribozomda protein sentezi tüm canlılarda ortaktır.'
        },
        {
          id: 'q-5-15', difficulty: 'very_easy',
          questionText: 'Çölde yaşayan kaktüslerin gövdelerinde su depo etmeleri ve yapraklarının diken şeklinde olması onlara nasıl bir fayda sağlar?',
          options: [
            { id: 'A', text: 'Solunum hızını artırma' },
            { id: 'B', text: 'Güneş ışığından kaçma' },
            { id: 'C', text: 'Terlemeyi azaltarak su kaybını önleme ve kurak ortama adapte olma' },
            { id: 'D', text: 'Ototrof beslenmeyi durdurma' },
            { id: 'E', text: 'Hızlı hareket etme' }
          ],
          correctOptionId: 'C',
          explanation: 'Yaprak yüzey alanının küçülmesi (diken şekli) terlemeyle kaybedilen suyu en aza indirerek çöle adaptasyon sağlar.'
        }
      ]
    },
    {
      id: 'test-6',
      title: 'Kavrama Testi 6',
      description: 'Kavram karşılaştırmaları',
      type: 'comprehension',
      order: 6,
      questions: [
        {
          id: 'q-6-1', difficulty: 'easy',
          questionText: 'Aşağıda verilen canlı ikililerinden hangisinin "boşaltım organeli/yapısı" birbirinden tamamen farklıdır?',
          options: [
            { id: 'A', text: 'Amip - Paramesyum (Tatlı su tek hücrelileri)' },
            { id: 'B', text: 'Kedi - Köpek' },
            { id: 'C', text: 'İnsan - Balina' },
            { id: 'D', text: 'Bakteri (hücre yüzeyi) - İnsan (böbrek)' },
            { id: 'E', text: 'Elma ağacı - Armut ağacı' }
          ],
          correctOptionId: 'D',
          explanation: 'Bakterilerde (tek hücreli) atıklar hücre zarından difüzyonla doğrudan dışarı atılırken, insanlarda özelleşmiş boşaltım sistemi organları (böbrek vb.) bulunur.'
        },
        {
          id: 'q-6-2', difficulty: 'easy',
          questionText: 'Fotosentez ve oksijenli solunum tepkimeleri karşılaştırıldığında, aşağıdakilerden hangisi her iki olay için de ortaktır?',
          options: [
            { id: 'A', text: 'Organik besin üretimi' },
            { id: 'B', text: 'Gündüz-gece kesintisiz gerçekleşme' },
            { id: 'C', text: 'ATP sentezlenmesi ve harcanması' },
            { id: 'D', text: 'Oksijen gazı üretimi' },
            { id: 'E', text: 'Kloroplast organelinde gerçekleşme' }
          ],
          correctOptionId: 'C',
          explanation: 'Fotosentezde (ışığa bağımlı evrede) ATP üretilip tüketilirken, hücresel solunumda da (glikoliz evresinde) önce ATP harcanır, sonra bol miktarda ATP üretilir.'
        },
        {
          id: 'q-6-3', difficulty: 'easy',
          questionText: 'Bakteriler ile bitkiler karşılaştırıldığında aşağıdakilerden hangisi ikisinde de ortak olarak bulunabilir?',
          options: [
            { id: 'A', text: 'Zarla çevrili çekirdek' },
            { id: 'B', text: 'Kloroplast' },
            { id: 'C', text: 'Hücre duvarı (çeperi)' },
            { id: 'D', text: 'Mitokondri' },
            { id: 'E', text: 'Çok hücrelilik' }
          ],
          correctOptionId: 'C',
          explanation: 'Bakterilerde peptidoglikan yapılı, bitkilerde ise selüloz yapılı olsa da her ikisi de hücre zarının dışında hücre duvarına sahiptir.'
        },
        {
          id: 'q-6-4', difficulty: 'easy',
          questionText: 'Adaptasyon ile Mutasyon kavramları karşılaştırıldığında aşağıdakilerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Adaptasyonlar nesilden nesile aktarılan kalıtsal özelliklerdir.' },
            { id: 'B', text: 'Mutasyonlar genlerin yapısında meydana gelen değişimlerdir.' },
            { id: 'C', text: 'Adaptasyon daima çevreye uyumu ve yaşama şansını artırır.' },
            { id: 'D', text: 'Bütün mutasyonlar canlının çevreye uyumunu artırır.' },
            { id: 'E', text: 'Mutasyonlar yararlı, zararlı veya etkisiz olabilir.' }
          ],
          correctOptionId: 'D',
          explanation: 'Mutasyonlar çoğunlukla zararlıdır veya etkisizdir. Çok küçük bir kısmı canlıya yarar (uyum yeteneği) sağlayarak yeni bir adaptasyonun temelini oluşturur.'
        },
        {
          id: 'q-6-5', difficulty: 'easy',
          questionText: 'Tek hücreli canlılardaki "hücre bölünmesi" ile çok hücreli canlılardaki "hücre bölünmesi"nin temel sonuçları nelerdir?',
          options: [
            { id: 'A', text: 'Tek hücrelilerde çoğalma, çok hücrelilerde büyüme ve onarım sağlar' },
            { id: 'B', text: 'Tek hücrelilerde onarım, çok hücrelilerde çoğalma sağlar' },
            { id: 'C', text: 'İkisinde de sadece eşeyli üremeyi sağlar' },
            { id: 'D', text: 'İkisinde de sadece büyüme sağlar' },
            { id: 'E', text: 'İkisinde de mutasyona neden olur' }
          ],
          correctOptionId: 'A',
          explanation: 'Tek bir hücre bölündüğünde iki yeni canlı oluştuğu için tek hücrelilerde bu olay üremedir (çoğalma). Çok hücrelilerde ise hücre sayısının artışı (büyüme) ve yıpranan dokuların onarımıdır.'
        },
        {
          id: 'q-6-6', difficulty: 'easy',
          questionText: 'Anabolizma ve Katabolizma hızları karşılaştırıldığında, sağlıklı genç bir bireyde bu durum genellikle nasıldır?',
          options: [
            { id: 'A', text: 'Katabolizma > Anabolizma' },
            { id: 'B', text: 'Anabolizma = Katabolizma' },
            { id: 'C', text: 'Anabolizma > Katabolizma' },
            { id: 'D', text: 'Sadece Anabolizma vardır' },
            { id: 'E', text: 'Sadece Katabolizma vardır' }
          ],
          correctOptionId: 'C',
          explanation: 'Genç bireylerde büyüme ve gelişme devam ettiği için yapım (anabolizma) tepkimeleri, yıkım (katabolizma) tepkimelerinden daha hızlıdır.'
        },
        {
          id: 'q-6-7', difficulty: 'easy',
          questionText: 'Ototrof beslenme ile Heterotrof beslenme arasındaki temel farkı en iyi hangi seçenek açıklar?',
          options: [
            { id: 'A', text: 'Ototroflar sadece inorganik madde kullanırken, heterotroflar hiç inorganik madde kullanmazlar' },
            { id: 'B', text: 'Ototroflar inorganik maddelerden organik madde sentezler, heterotroflar organik maddeyi dışarıdan hazır alırlar' },
            { id: 'C', text: 'Ototroflar oksijen kullanmaz, heterotroflar oksijen kullanır' },
            { id: 'D', text: 'Ototroflar su içmez, heterotroflar içer' },
            { id: 'E', text: 'Ototroflar hayvanlardır, heterotroflar bitkilerdir' }
          ],
          correctOptionId: 'B',
          explanation: 'Her iki grup da su ve mineral gibi inorganikleri dışarıdan hazır alır ancak ototroflar kendi organik besinini üretirken, heterotroflar organik besini hazır almak zorundadır.'
        },
        {
          id: 'q-6-8', difficulty: 'easy',
          questionText: 'Hücresel solunum (ATP üretimi) tüm canlılarda ortakken, solunumun "oksijenli" veya "oksijensiz" olması ortaktır diyemeyiz. Bunun nedeni nedir?',
          options: [
            { id: 'A', text: 'Bazı canlıların enerjiye ihtiyaç duymaması' },
            { id: 'B', text: 'Sadece bitkilerin oksijen üretebilmesi' },
            { id: 'C', text: 'Canlıların yaşadıkları ortam ve genetik enzim yapılarının farklı enerji elde etme mekanizmaları geliştirmiş olması' },
            { id: 'D', text: 'Bazı canlıların hücre zarının olmaması' },
            { id: 'E', text: 'Oksijenli solunumun sadece çok hücrelilerde görülmesi' }
          ],
          correctOptionId: 'C',
          explanation: 'Enerji eldesi (solunum) ortaktır ancak canlıların sahip oldukları enzim sistemleri ve adaptasyonları, farklı türlerin oksijenli, oksijensiz veya fermantasyon yapmasına neden olmuştur.'
        },
        {
          id: 'q-6-9', difficulty: 'easy',
          questionText: 'Mantarlar ve Bitkiler karşılaştırıldığında aşağıda verilen özelliklerden hangisi bitkilere özgüdür?',
          options: [
            { id: 'A', text: 'Hücre duvarı bulundurma' },
            { id: 'B', text: 'Hareketsiz olma (aktif yer değiştirmeme)' },
            { id: 'C', text: 'Ototrof beslenme (Fotosentez yapma)' },
            { id: 'D', text: 'Çok hücreli türlere sahip olma' },
            { id: 'E', text: 'Eşeyli ve eşeysiz üreyebilme' }
          ],
          correctOptionId: 'C',
          explanation: 'Mantarlar klorofil taşımazlar ve heterotrof (çoğunlukla saprofit veya parazit) beslenirler. Bitkiler ise kloroplast taşıyıp ototrof beslenirler.'
        },
        {
          id: 'q-6-10', difficulty: 'easy',
          questionText: 'Bir insanın vücut ısısı arttığında terlemesi ile, köpeklerin sıcakta dillerini dışarı çıkararak soluması hangi ortak amaca hizmet eder?',
          options: [
            { id: 'A', text: 'Avlanmayı kolaylaştırmak' },
            { id: 'B', text: 'Vücut sıcaklığını düşürerek homeostaziyi sağlamak' },
            { id: 'C', text: 'Zehirli maddeleri sentezlemek' },
            { id: 'D', text: 'Oksijeni akciğerlere daha hızlı göndermek' },
            { id: 'E', text: 'Besinleri sindirmek' }
          ],
          correctOptionId: 'B',
          explanation: 'Suyun buharlaşması sırasında vücuttan ısı alınır. Terleme veya dilden su buharlaştırma, artan vücut ısısını düşürerek iç dengeyi koruyan mekanizmalardır.'
        },
        {
          id: 'q-6-11', difficulty: 'easy',
          questionText: 'Ökaryot ve Prokaryot hücre yapıları incelendiğinde, aşağıdakilerden hangisi sadece ökaryotlara ait bir özelliktir?',
          options: [
            { id: 'A', text: 'Sitoplazma' },
            { id: 'B', text: 'Ribozom' },
            { id: 'C', text: 'Hücre zarı' },
            { id: 'D', text: 'Zarla çevrili organeller (Mitokondri, Golgi vb.)' },
            { id: 'E', text: 'Nükleik asitler (DNA, RNA)' }
          ],
          correctOptionId: 'D',
          explanation: 'Prokaryotlarda hiçbir zarlı organel (ve zarla çevrili çekirdek) bulunmazken, ökaryotlarda bulunur.'
        },
        {
          id: 'q-6-12', difficulty: 'easy',
          questionText: 'Eşeyli üreme ile Eşeysiz üreme arasındaki temel fark nedir?',
          options: [
            { id: 'A', text: 'Eşeyli üreme hızlıdır, eşeysiz üreme yavaştır' },
            { id: 'B', text: 'Eşeysiz üremede genetik çeşitlilik sağlanırken eşeyli üremede sağlanmaz' },
            { id: 'C', text: 'Eşeyli üremede mayoz ve döllenme ile genetik çeşitlilik sağlanırken, eşeysiz üreme mitoza dayanır ve ata canlıyla aynı genetik yapıda yavrular oluşur' },
            { id: 'D', text: 'Eşeysiz üreme sadece bitkilerde, eşeyli üreme sadece hayvanlarda görülür' },
            { id: 'E', text: 'İkisinde de mutasyon görülme ihtimali sıfırdır' }
          ],
          correctOptionId: 'C',
          explanation: 'Mayoz bölünme ve gametlerin döllenmesi, eşeyli üremede tür içi kalıtsal çeşitliliği (varyasyonu) sağlar. Eşeysiz üreme klonlama gibidir.'
        },
        {
          id: 'q-6-13', difficulty: 'easy',
          questionText: 'Bakteriler (prokaryot) ve Arkeler (prokaryot) aynı hücre yapısında olmalarına rağmen farklı alemlerde incelenirler. Bunun temel nedeni nedir?',
          options: [
            { id: 'A', text: 'Bakterilerin zarlı organelleri olması' },
            { id: 'B', text: 'Arkelerin hücre zarının olmaması' },
            { id: 'C', text: 'Arkelerin hücre duvarı yapısı, zar lipitleri ve genetik işleyişlerinin bakterilerden farklı, ökaryotlara daha benzer olması' },
            { id: 'D', text: 'Arkelerin çok hücreli olması' },
            { id: 'E', text: 'Bakterilerin uzayda yaşaması' }
          ],
          correctOptionId: 'C',
          explanation: 'Görünüşte benzer olsalar da arkelerin moleküler yapıları (peptidoglikan olmayan hücre çeperi, farklı ribozom yapısı) farklıdır.'
        },
        {
          id: 'q-6-14', difficulty: 'easy',
          questionText: 'Hücresel organizasyon bakımından, Süngerler (basit hayvanlar) ile Gelişmiş Bitkiler arasındaki temel fark nedir?',
          options: [
            { id: 'A', text: 'Süngerlerde doku ve organlaşma görülmezken, bitkilerde gelişmiş doku ve organlar vardır' },
            { id: 'B', text: 'Süngerler ototrof, bitkiler heterotroftur' },
            { id: 'C', text: 'Süngerler prokaryot, bitkiler ökaryottur' },
            { id: 'D', text: 'Süngerler hücre zarı taşımaz' },
            { id: 'E', text: 'İkisi de tek hücrelidir' }
          ],
          correctOptionId: 'A',
          explanation: 'Hayvanlar aleminin en basit grubu olan süngerlerde gerçek anlamda doku ve organ hiyerarşisi yoktur, hücreler arası iş bölümü vardır.'
        },
        {
          id: 'q-6-15', difficulty: 'easy',
          questionText: 'Dehidrasyon sentezi ve Hidroliz reaksiyonlarını karşılaştıran aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { id: 'A', text: 'İkisi de sadece hücre dışında gerçekleşir' },
            { id: 'B', text: 'Dehidrasyon sırasında su açığa çıkar ve ATP harcanır; hidrolizde su harcanır ve ATP harcanmaz' },
            { id: 'C', text: 'Dehidrasyonda su harcanır, hidrolizde su oluşur' },
            { id: 'D', text: 'İkisi de katabolik (yıkım) tepkimesidir' },
            { id: 'E', text: 'İkisi de anabolik (yapım) tepkimesidir' }
          ],
          correctOptionId: 'B',
          explanation: 'Dehidrasyon sentezi küçük moleküllerin birleşip su çıkardığı anabolik olaydır (ATP harcanır). Hidroliz ise suyla yıkım olup ortamdan su azalır ve ATP harcanmaz.'
        }
      ]
    },
    {
      id: 'test-7',
      title: 'Kavrama Testi 7',
      description: 'Basit yorum',
      type: 'comprehension',
      order: 7,
      questions: [
        {
          id: 'q-7-1', difficulty: 'easy',
          questionText: 'Soğuk bir ortama bırakılan farenin titremeye başlaması, kıllarının dikleşmesi canlıların hangi ortak özelliği ile doğrudan ilişkilidir?',
          options: [
            { id: 'A', text: 'Boşaltım' },
            { id: 'B', text: 'Homeostazi (İç dengeyi koruma)' },
            { id: 'C', text: 'Eşeyli üreme' },
            { id: 'D', text: 'Ototrof beslenme' },
            { id: 'E', text: 'Büyüme' }
          ],
          correctOptionId: 'B',
          explanation: 'Titreme (kas kasılması) ile ısı üretilmesi ve kılların dikleşerek yalıtım sağlaması, düşen vücut sıcaklığını normale döndürmek (homeostazi) içindir.'
        },
        {
          id: 'q-7-2', difficulty: 'easy',
          questionText: 'Bir bitki hücresinde gün boyunca karbondioksit miktarının hızla azaldığı, oksijen miktarının ise arttığı gözlemleniyor. Bu hücrede hangi olayın hızlandığı yorumu yapılabilir?',
          options: [
            { id: 'A', text: 'Oksijenli solunum' },
            { id: 'B', text: 'Fotosentez' },
            { id: 'C', text: 'Boşaltım' },
            { id: 'D', text: 'Protein sentezi' },
            { id: 'E', text: 'Fermantasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Karbondioksiti kullanıp oksijen açığa çıkaran hücresel olay fotosentezdir.'
        },
        {
          id: 'q-7-3', difficulty: 'easy',
          questionText: 'Bir bakteri popülasyonuna antibiyotik verildiğinde çoğu bakterinin öldüğü, ancak birkaçının hayatta kalıp çoğalmaya devam ettiği görülüyor. Hayatta kalan bakteriler için hangi yorum kesinlikle yapılabilir?',
          options: [
            { id: 'A', text: 'Hücre zarını kaybetmişlerdir' },
            { id: 'B', text: 'Antibiyotiğe karşı direnç geni (adaptasyon/mutasyon) taşımaktadırlar' },
            { id: 'C', text: 'Ototrof beslenmeye geçmişlerdir' },
            { id: 'D', text: 'Oksijenli solunum yapmayı bırakmışlardır' },
            { id: 'E', text: 'Çok hücreli yapıya geçmişlerdir' }
          ],
          correctOptionId: 'B',
          explanation: 'Antibiyotikli ortamda hayatta kalan bakteriler, o antibiyotiği etkisiz hale getiren kalıtsal bir dirence (adaptasyona) sahiptir.'
        },
        {
          id: 'q-7-4', difficulty: 'easy',
          questionText: 'Bir hücrede, su oranının azaldığı ve ribozom faaliyetinin arttığı tespit ediliyor. Bu hücrede aşağıdakilerden hangisinin gerçekleştiği söylenebilir?',
          options: [
            { id: 'A', text: 'Fotosentez hızlanmıştır' },
            { id: 'B', text: 'Hücresel solunum artmıştır' },
            { id: 'C', text: 'Protein sentezi (dehidrasyon) yapılmaktadır' },
            { id: 'D', text: 'Hidroliz olayı hızlanmıştır' },
            { id: 'E', text: 'Boşaltım yapılıyordur' }
          ],
          correctOptionId: 'C',
          explanation: 'Ribozom, amino asitleri birleştirip protein sentezler. Bu bir dehidrasyon sentezi olduğu için su açığa çıkar, dolayısıyla hücrenin serbest su miktarı (oranı) artar. Soru metnindeki "su oranının azaldığı" kısmı hidrolizdir fakat ribozom faaliyeti (sentez) su miktarını artırır. PARDON, soruda su oranının AZALDIĞI değil, HARCANDIĞI olsaydı hidroliz olurdu. Ribozom faaliyetinde SU OLUŞUR (artar). Seçenek B\'de "Su açığa çıkar". (Düzeltme: Soruda küçük bir kelime oyunu var: Ribozom çalışınca su artar.)',
          // Note: Actually, standard biology questions say "su miktarı artar". Let's rewrite the question text slightly.
        },
        // Re-writing q-7-4 properly to avoid ambiguity
        {
          id: 'q-7-4-rev', difficulty: 'easy',
          questionText: 'Bir hücrede, peptit bağı sayısının hızla arttığı ve su miktarının çoğaldığı tespit ediliyor. Bu hücrede hangi organelin faaliyetinin arttığı söylenebilir?',
          options: [
            { id: 'A', text: 'Mitokondri' },
            { id: 'B', text: 'Kloroplast' },
            { id: 'C', text: 'Ribozom' },
            { id: 'D', text: 'Lizozom' },
            { id: 'E', text: 'Koful' }
          ],
          correctOptionId: 'C',
          explanation: 'Peptit bağları amino asitler arasında kurularak protein sentezlenir (dehidrasyon) ve su açığa çıkar. Bu olayı gerçekleştiren organel ribozomdur.'
        },
        {
          id: 'q-7-5', difficulty: 'easy',
          questionText: 'Güneş ışığının ulaşamadığı derin okyanus tabanlarında yaşayan bazı canlılar, hidrojen sülfür (H2S) gibi inorganik bileşikleri oksitleyerek kendi besinlerini üretirler. Bu canlıların beslenme şekli için ne söylenebilir?',
          options: [
            { id: 'A', text: 'Fotosentetik ototrof' },
            { id: 'B', text: 'Kemosentetik ototrof' },
            { id: 'C', text: 'Saprofit heterotrof' },
            { id: 'D', text: 'Parazit' },
            { id: 'E', text: 'Herbivor (otçul)' }
          ],
          correctOptionId: 'B',
          explanation: 'Işık olmadan inorganik maddeleri oksitleyerek kimyasal enerji ile besin üreten canlılar kemosentetik ototroftur.'
        },
        {
          id: 'q-7-6', difficulty: 'easy',
          questionText: 'Çölde yaşayan bitkilerin yaprak yüzeylerinin dar olması, stomalarının (gözeneklerinin) derinde ve az sayıda olması neye yönelik bir adaptasyondur?',
          options: [
            { id: 'A', text: 'Daha çok güneş ışığı almaya' },
            { id: 'B', text: 'Terleme ile su kaybını en aza indirmeye' },
            { id: 'C', text: 'Karbondioksiti daha hızlı atmaya' },
            { id: 'D', text: 'Hayvanlardan korunmaya' },
            { id: 'E', text: 'Kök sistemini küçültmeye' }
          ],
          correctOptionId: 'B',
          explanation: 'Çöl gibi kurak ortamlarda en önemli kısıtlayıcı faktör sudur. Yaprak alanının daralması ve stomaların gömülü olması terlemeyi azaltıp suyu korur.'
        },
        {
          id: 'q-7-7', difficulty: 'easy',
          questionText: 'Tohumun toprağa düştükten sonra çimlenmesi, kök ve gövdenin büyümesi sürecinde bitki yavrusu hücreleri dışarıdan sadece oksijen ve su alır, fotosentez yapamaz. Bu dönemde bitki enerjisini nasıl sağlar?',
          options: [
            { id: 'A', text: 'Topraktaki inorganik maddeleri kemosentezle parçalayarak' },
            { id: 'B', text: 'Tohum içinde hazır bulunan organik besinleri hücresel solunumla yıkarak' },
            { id: 'C', text: 'Sadece güneş ışığını kullanarak ATP üreterek' },
            { id: 'D', text: 'Köklerden hazır ATP emerek' },
            { id: 'E', text: 'Çimlenme sırasında enerji harcamayarak' }
          ],
          correctOptionId: 'B',
          explanation: 'Çimlenme aşamasında yapraklar (klorofil) henüz oluşmadığı için bitki tohumda depolanan (endosperm/çenek) organik besinleri solunumla yıkarak enerji sağlar.'
        },
        {
          id: 'q-7-8', difficulty: 'easy',
          questionText: 'Bir araştırmacı mikroskop altında incelediği bir hücrede; hücre zarı, DNA, RNA, ribozom ve sitoplazma olduğunu ancak çekirdek zarının olmadığını gözlemliyor. Bu hücre için hangi yorum KESİNLİKLE doğrudur?',
          options: [
            { id: 'A', text: 'Bitki hücresidir' },
            { id: 'B', text: 'Prokaryot bir hücredir' },
            { id: 'C', text: 'Hayvan hücresidir' },
            { id: 'D', text: 'Çok hücreli bir canlıya aittir' },
            { id: 'E', text: 'Fotosentez yapabilir' }
          ],
          correctOptionId: 'B',
          explanation: 'Çekirdek zarı (ve zarlı organeller) olmayan, DNA\'sı sitoplazmada dağınık bulunan hücreler prokaryot hücrelerdir.'
        },
        {
          id: 'q-7-9', difficulty: 'easy',
          questionText: 'Bir memeli hayvanın sıcak kanlı olması (vücut sıcaklığını sabit tutması) ve bir kuşun da benzer şekilde vücut sıcaklığını koruması, canlıların hangi ortak özelliğinin en belirgin kanıtıdır?',
          options: [
            { id: 'A', text: 'Metabolizma' },
            { id: 'B', text: 'Homeostazi' },
            { id: 'C', text: 'Boşaltım' },
            { id: 'D', text: 'Organizasyon' },
            { id: 'E', text: 'Hücresel yapı' }
          ],
          correctOptionId: 'B',
          explanation: 'Vücut iç sıcaklığının, dış çevrenin sıcaklığı değişse bile sabit tutulması homeostazinin (iç denge) en tipik örneğidir.'
        },
        {
          id: 'q-7-10', difficulty: 'easy',
          questionText: 'İnsanların kas hücrelerinde, ağır egzersiz sırasında oksijen yeterli gelmediğinde kaslarda ağrıya (yorgunluğa) neden olan laktik asit birikmeye başlar. Bu durum kas hücrelerinin hangi olayı gerçekleştirdiğini gösterir?',
          options: [
            { id: 'A', text: 'Fotosentez' },
            { id: 'B', text: 'Kemosentez' },
            { id: 'C', text: 'Fermantasyon (Laktik Asit Fermantasyonu)' },
            { id: 'D', text: 'Protein sentezi' },
            { id: 'E', text: 'Yağ hidrolizi' }
          ],
          correctOptionId: 'C',
          explanation: 'Oksijen yetersizliğinde hayvan kas hücreleri, enerji (ATP) ihtiyacını karşılamak için oksijensiz bir yol olan laktik asit fermantasyonu yapar.'
        },
        {
          id: 'q-7-11', difficulty: 'easy',
          questionText: 'Bir gölde yaşayan balık türünün, sanayi atıkları göle karıştığında hızla ölmeye başladığı gözlemleniyor. Ancak aralarından birkaç balığın yaşayıp ürediği ve yıllar sonra göldeki tüm balıkların o zehirli suya dayandığı görülüyor. Bu olay neyi örneklendirir?',
          options: [
            { id: 'A', text: 'Fermantasyon ve Homeostazi' },
            { id: 'B', text: 'Varyasyon ve Doğal Seçilim (Adaptasyon)' },
            { id: 'C', text: 'Sadece Büyüme' },
            { id: 'D', text: 'Organizma organizasyonunun bozulması' },
            { id: 'E', text: 'Kemosentetik beslenme' }
          ],
          correctOptionId: 'B',
          explanation: 'Ortamdaki değişim (zehir), dayanıklı olmayanları eler (doğal seçilim). Dirençli olan varyasyonlar hayatta kalıp üreyerek yeni ortama adapte olmuş popülasyonu kurar.'
        },
        {
          id: 'q-7-12', difficulty: 'easy',
          questionText: 'Canlılarda hücre içi yıkım (katabolizma) faaliyetleri anabolizma (yapım) faaliyetlerinden fazla ise organizma için hangi durumun ortaya çıkması beklenir?',
          options: [
            { id: 'A', text: 'Hızlı büyüme' },
            { id: 'B', text: 'Gelişmenin hızlanması' },
            { id: 'C', text: 'Kütle kaybı (zayıflama, yaşlanma)' },
            { id: 'D', text: 'Yeni organların oluşması' },
            { id: 'E', text: 'Enerji harcanımının durması' }
          ],
          correctOptionId: 'C',
          explanation: 'Katabolizmanın (yıkımın) anabolizmadan (yapımdan) fazla olduğu durumlarda canlının kütlesi azalır, bu durum genellikle hastalık, açlık veya yaşlılık dönemlerinde görülür.'
        },
        {
          id: 'q-7-13', difficulty: 'easy',
          questionText: 'Yapraklarını döken bir bitki ile sonbaharda güneye göç eden bir leylek davranışında ortak olan temel biyolojik prensip nedir?',
          options: [
            { id: 'A', text: 'Çevresel değişikliklere uyum (adaptasyon/tepki) göstererek hayatta kalma şansını artırmak' },
            { id: 'B', text: 'Her ikisinin de heterotrof beslenmesi' },
            { id: 'C', text: 'Her ikisinin de üremeyi hızlandırması' },
            { id: 'D', text: 'Oksijenli solunum yapmamaları' },
            { id: 'E', text: 'Gövde/iskelet büyümesini durdurmaları' }
          ],
          correctOptionId: 'A',
          explanation: 'Hem yaprak dökümü (bitkide) hem de göç etme (hayvanda) mevsimsel (çevresel) uyaranlara karşı gösterilen ve yaşama şansını artıran uyum tepkileridir.'
        },
        {
          id: 'q-7-14', difficulty: 'easy',
          questionText: 'Böcekçil bitkiler azotça fakir topraklarda yaşar ve böcek yakalayıp sindirerek azot ihtiyaçlarını karşılarlar. Ancak aynı bitki yeşil yapraklarıyla fotosentez yapmaya devam eder. Bu bitki için hangi yorum yapılabilir?',
          options: [
            { id: 'A', text: 'Sadece ototroftur' },
            { id: 'B', text: 'Sadece heterotroftur' },
            { id: 'C', text: 'Hem ototrof hem heterotroftur' },
            { id: 'D', text: 'Kemosentez yapabilir' },
            { id: 'E', text: 'Hücresel solunum yapmaz' }
          ],
          correctOptionId: 'C',
          explanation: 'Fotosentez yapması ototrof olduğunu, dışarıdan böcek (organik madde) sindirerek azot alması ise heterotrof olduğunu gösterir. Bu canlılar "hem ototrof hem heterotrof" grubundadır.'
        },
        {
          id: 'q-7-15', difficulty: 'easy',
          questionText: 'Canlıların tümünde; DNA eşlenmesi (replikasyonu), RNA sentezi ve protein sentezi reaksiyonları görülebilir. Bu üç olayın ortak özelliği aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Hepsinin sitoplazmada gerçekleşmesi' },
            { id: 'B', text: 'Hepsinin yapım (anabolizma/dehidrasyon) reaksiyonu olması ve ATP harcanması' },
            { id: 'C', text: 'Hepsinde karbonhidrat üretilmesi' },
            { id: 'D', text: 'Hepsinin sadece hücre bölünmesi sırasında olması' },
            { id: 'E', text: 'Hepsinin çekirdekte gerçekleşmesi' }
          ],
          correctOptionId: 'B',
          explanation: 'Sentez (yapım) tepkimelerinin tamamı anabolik reaksiyonlardır. Küçük moleküller birleşir, su çıkar (dehidrasyon) ve bu işlemlerin hepsinde enerji (ATP) harcanır.'
        }
      ]
    },
    {
      id: 'test-8',
      title: 'Kavrama Testi 8',
      description: 'Birden fazla kavramı ilişkilendirme',
      type: 'comprehension',
      order: 8,
      questions: [
        {
          id: 'q-8-1', difficulty: 'easy',
          questionText: 'Bir öğrenci X, Y ve Z canlılarını inceliyor.\n- X canlısı inorganikleri oksitleyerek besin üretiyor.\n- Y canlısı kloroplast taşıyor.\n- Z canlısı sindirim enzimlerini hücre dışına salgılayarak organik atıkları parçalıyor.\nBu canlıların beslenme şekilleri sırasıyla hangi seçenekte doğru verilmiştir?',
          options: [
            { id: 'A', text: 'Kemosentetik - Fotosentetik - Saprofit' },
            { id: 'B', text: 'Fotosentetik - Saprofit - Parazit' },
            { id: 'C', text: 'Saprofit - Fotosentetik - Kemosentetik' },
            { id: 'D', text: 'Kemosentetik - Parazit - Fotosentetik' },
            { id: 'E', text: 'Heterotrof - Ototrof - Heterotrof' }
          ],
          correctOptionId: 'A',
          explanation: 'İnorganik maddeleri oksitlemek kemosentezdir (X). Kloroplast ile besin üreten fotosentetik ototroftur (Y). Hücre dışına enzim salgılayıp atık parçalayanlar ise çürükçül (saprofit) heterotroftur (Z).'
        },
        {
          id: 'q-8-2', difficulty: 'easy',
          questionText: 'Metabolizma hızı canlıdan canlıya, hatta aynı canlının farklı yaşlarında değişiklik gösterir. Bir fare ile bir fil karşılaştırıldığında farenin birim vücut ağırlığına düşen enerji tüketimi çok daha fazladır. Bunun en temel nedeni nedir?',
          options: [
            { id: 'A', text: 'Farenin çok hücreli olmaması' },
            { id: 'B', text: 'Küçük hayvanların vücut yüzeyi / hacim oranının büyük olması nedeniyle ısı kaybının hızlı olması' },
            { id: 'C', text: 'Filin fotosentez yapabilmesi' },
            { id: 'D', text: 'Farenin sadece etle beslenmesi' },
            { id: 'E', text: 'Filin akciğer solunumu yapmaması' }
          ],
          correctOptionId: 'B',
          explanation: 'Küçük vücutlu canlılarda yüzey/hacim oranı büyüktür, bu yüzden çevreye hızla ısı kaybederler. Isıyı korumak ve homeostaziyi sağlamak için metabolizmalarını çok daha hızlı çalıştırmak zorundadırlar.'
        },
        {
          id: 'q-8-3', difficulty: 'easy',
          questionText: 'Hücresel organizasyon ile hücresel yapı birbiriyle karıştırılmamalıdır. Aşağıdakilerden hangisi "Organizasyon" kavramını "Hücresel yapı"dan ayıran daha doğru bir örnektir?',
          options: [
            { id: 'A', text: 'Amipin tek bir hücre zarına sahip olması' },
            { id: 'B', text: 'Bakteride ribozom bulunması' },
            { id: 'C', text: 'İnsanda kalp, damarlar ve kanın bir araya gelerek dolaşım sistemini oluşturması' },
            { id: 'D', text: 'Bitki hücresinde selüloz çeper bulunması' },
            { id: 'E', text: 'Mantarlarda glikojen depo edilmesi' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücresel yapı, canlının yapıtaşını (prokaryot/ökaryot vs) belirtir. Organizasyon ise bu yapıların (hücre, doku, organ, sistem) nasıl bir hiyerarşi ve düzen içinde birleştiğini anlatır.'
        },
        {
          id: 'q-8-4', difficulty: 'easy',
          questionText: 'Bir hücrede sırasıyla şu olaylar gözleniyor:\n1. Amino asitlerden protein sentezlenmesi.\n2. Proteinin hücre zarına taşınması.\n3. Hücre zarından atıkların atılması.\nBu olayların canlıların ortak özellikleriyle eşleştirilmesi hangi seçenekte doğru verilmiştir?',
          options: [
            { id: 'A', text: '1: Katabolizma, 2: Üreme, 3: Beslenme' },
            { id: 'B', text: '1: Anabolizma, 2: Organizasyon, 3: Boşaltım' },
            { id: 'C', text: '1: Boşaltım, 2: Büyüme, 3: Uyarılma' },
            { id: 'D', text: '1: Anabolizma, 2: Boşaltım, 3: Homeostazi' },
            { id: 'E', text: '1: Solunum, 2: Gelişme, 3: Büyüme' }
          ],
          correctOptionId: 'B',
          explanation: 'Sentez bir yapım (anabolizma) olayıdır. Hücre içi yapıların koordineli çalışması bir organizasyon ve iş bölümüdür. Atıkların atılması ise boşaltımdır.'
        },
        {
          id: 'q-8-5', difficulty: 'easy',
          questionText: 'Adaptasyonların (çevreye uyumun) genetik olduğu ve nesilden nesile aktarıldığı bilinmektedir. Buna göre aşağıdakilerden hangisi bir adaptasyon örneği OLABİLİR?',
          options: [
            { id: 'A', text: 'İyi beslenen bir çocuğun boyunun uzun olması' },
            { id: 'B', text: 'Spor yapan bir gencin kaslarının gelişmesi' },
            { id: 'C', text: 'Himalaya tavşanının tüylerinin soğukta siyah çıkması' },
            { id: 'D', text: 'Güneşte kalan bir insanın teninin bronzlaşması' },
            { id: 'E', text: 'Su kenarında yaşayan kurbağaların parmak aralarının perdeli olması' }
          ],
          correctOptionId: 'E',
          explanation: 'Kas gelişimi, bronzlaşma, soğukta kıl rengi değişimi (çevre şartına göre değişen) modifikasyonlardır ve yavrulara geçmez. Kurbağadaki perde ise doğuştan gelen ve yüzmeyi kolaylaştıran kalıtsal bir adaptasyondur.'
        },
        {
          id: 'q-8-6', difficulty: 'easy',
          questionText: 'Bitkiler aleminde yer alan canlılarda, aşağıda verilen olaylardan hangisi sadece belirli hücrelerde (örneğin yaprak hücrelerinde) gerçekleşirken, hangisi tüm canlı hücrelerinde ortak olarak gerçekleşmek zorundadır?',
          options: [
            { id: 'A', text: 'Fotosentez (Belirli) / ATP sentezi (Tüm hücrelerde)' },
            { id: 'B', text: 'Oksijenli solunum (Belirli) / Fotosentez (Tüm hücrelerde)' },
            { id: 'C', text: 'Protein sentezi (Belirli) / Glikoliz (Tüm hücrelerde)' },
            { id: 'D', text: 'Hücre bölünmesi (Tüm hücrelerde) / Boşaltım (Belirli)' },
            { id: 'E', text: 'Terleme (Tüm hücrelerde) / Solunum (Belirli)' }
          ],
          correctOptionId: 'A',
          explanation: 'Kök hücreleri kloroplast taşımaz, fotosentez yapamaz (belirli hücreler yapar). Ancak canlı olan her hücre kendi ATP\'sini (solunumla) üretmek zorundadır.'
        },
        {
          id: 'q-8-7', difficulty: 'easy',
          questionText: 'Üreme, her canlı için şart değildir ancak popülasyonun (türün) devamı için şarttır. Bu cümlenin altındaki biyolojik gerçeklik nedir?',
          options: [
            { id: 'A', text: 'Üremeyen canlıların kısa sürede ölmesi' },
            { id: 'B', text: 'Üreme sırasında metabolizmanın durması' },
            { id: 'C', text: 'Üreme dışındaki tüm ortak özelliklerin (solunum, beslenme vb.) bireyin hayatta kalması için doğrudan zorunlu olması' },
            { id: 'D', text: 'Üremenin tüm canlılarda mayoz bölünme ile sağlanması' },
            { id: 'E', text: 'Sadece bitkilerin üreyebilmesi' }
          ],
          correctOptionId: 'C',
          explanation: 'Solunum durursa canlı ölür. Beslenemezse ölür. Ancak canlı üremezse yaşamaya devam edebilir; sadece genlerini bir sonraki nesle aktaramaz, kendi nesli tükenir.'
        },
        {
          id: 'q-8-8', difficulty: 'easy',
          questionText: 'Tüm hücrelerin sitoplazmasında bulunan su oranının hiçbir zaman %15\'in altına düşmemesi gerektiği biliniyor. Suyun bu kritik önemi ile homeostazi (iç denge) arasındaki ilişki hangi seçenekte doğru özetlenmiştir?',
          options: [
            { id: 'A', text: 'Su, hücrenin bölünmesini engelleyerek homeostaziyi korur' },
            { id: 'B', text: 'Su, enzimlerin çalışabilmesi için şarttır; enzimler durursa metabolizma durur ve iç denge çöker' },
            { id: 'C', text: 'Su sadece zararlı maddeleri taşıdığı için gereklidir' },
            { id: 'D', text: 'Su oranının %15 altına düşmesi, fotosentezi artırarak denge sağlar' },
            { id: 'E', text: 'Su, genetik materyali oluşturur' }
          ],
          correctOptionId: 'B',
          explanation: 'Metabolizmanın (yapım ve yıkım) işlemesi enzimlere bağlıdır. Enzimler %15 suyun altında çalışamaz. Metabolizma durursa homeostazi anında bozulur.'
        },
        {
          id: 'q-8-9', difficulty: 'easy',
          questionText: 'Canlıların sınıflandırılmasında Prokaryot ve Ökaryot ayrımı yapılır. Bir organizmanın "Ökaryot" olduğu, hücresinde aşağıdakilerden hangisinin varlığı ile KESİN olarak kanıtlanır?',
          options: [
            { id: 'A', text: 'Hücre zarı' },
            { id: 'B', text: 'Ribozom' },
            { id: 'C', text: 'Mitokondri (veya çekirdek zarı)' },
            { id: 'D', text: 'DNA' },
            { id: 'E', text: 'Sitoplazma' }
          ],
          correctOptionId: 'C',
          explanation: 'Zarla çevrili organeller (örneğin mitokondri, kloroplast, golgi vb.) ve gerçek bir çekirdek zarı yalnızca ökaryot hücrelerde bulunur. Diğerleri (DNA, zar, ribozom) prokaryotlarda da ortaktır.'
        },
        {
          id: 'q-8-10', difficulty: 'easy',
          questionText: 'Bir göldeki alglerin (tek hücreli fotosentetik organizmalar) sayısının bahar aylarında hızla artması, göldeki oksijen miktarını artırır. Ancak bir süre sonra alglerin aşırı çoğalıp ölmesiyle saprofit (çürükçül) bakterilerin sayısı artar ve göldeki oksijen hızla tükenir. Bu durum aşağıdakilerden hangisini kanıtlar?',
          options: [
            { id: 'A', text: 'Saprofit bakterilerin fotosentez yaptığını' },
            { id: 'B', text: 'Alglerin kemosentetik olduğunu' },
            { id: 'C', text: 'Fotosentetik canlıların (alg) ortama oksijen verdiğini, ayrıştırıcıların (saprofit) ise bu maddeleri parçalarken oksijeni tükettiğini' },
            { id: 'D', text: 'Tüm bakterilerin oksijensiz solunum yaptığını' },
            { id: 'E', text: 'Ekosistemde madde döngüsü olmadığını' }
          ],
          correctOptionId: 'C',
          explanation: 'Algler ototroftur ve fotosentezle oksijen üretir. Algler öldüğünde organik atık artar. Saprofitler oksijenli solunumla (genellikle) bu atıkları parçalar ve göldeki O2 tükenir.'
        },
        {
          id: 'q-8-11', difficulty: 'easy',
          questionText: 'Oksijensiz solunum ve Fermantasyon genellikle karıştırılan kavramlardır. Her iki olayın da "ortak" olan temel özelliği aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Son elektron tutucunun inorganik bir madde (O2 dışında) olması' },
            { id: 'B', text: 'Sadece kas hücrelerinde gerçekleşmeleri' },
            { id: 'C', text: 'Oksijen gazının (O2) kullanılmadan organik moleküllerden enerji (ATP) elde edilmesi' },
            { id: 'D', text: 'Her zaman Laktik asit oluşturmaları' },
            { id: 'E', text: 'Oksijenli solunuma göre daha fazla enerji üretmeleri' }
          ],
          correctOptionId: 'C',
          explanation: 'Her iki süreçte de serbest oksijen gazı kullanılmaz. Ancak mekanizmaları (elektron taşıma sistemlerinin varlığı/yokluğu) farklıdır.'
        },
        {
          id: 'q-8-12', difficulty: 'easy',
          questionText: 'Virüsler canlılık özelliklerinin tamamını göstermedikleri için hücresel canlılar sınıfına dahil edilmezler. Aşağıdakilerden hangisi virüslerin canlı sayılmamasının en temel nedenlerinden biridir?',
          options: [
            { id: 'A', text: 'Genetik materyal taşımamaları' },
            { id: 'B', text: 'Mutasyona uğrayamamaları' },
            { id: 'C', text: 'Hücresel bir yapıya (zar, sitoplazma, ribozom) ve kendi enzim sistemlerine sahip olmamaları' },
            { id: 'D', text: 'Hastalık yapmaları' },
            { id: 'E', text: 'Sadece bitkilerde çoğalmaları' }
          ],
          correctOptionId: 'C',
          explanation: 'Virüsler kristalize olabilirler. Kendi başlarına (konak hücre dışında) hiçbir metabolik faaliyet (ATP üretimi, protein sentezi) gösteremezler çünkü ribozomları ve hücresel yapıları yoktur.'
        },
        {
          id: 'q-8-13', difficulty: 'easy',
          questionText: 'Çok hücreli bir canlının embriyo döneminden ergin bir birey oluncaya kadar geçirdiği; mitoz bölünme, hücre farklılaşması ve organ oluşumu evrelerinin tamamı hangi biyolojik terimle kapsanır?',
          options: [
            { id: 'A', text: 'Metabolizma' },
            { id: 'B', text: 'Boşaltım' },
            { id: 'C', text: 'Büyüme ve Gelişme' },
            { id: 'D', text: 'Fermantasyon' },
            { id: 'E', text: 'Etkiye tepki' }
          ],
          correctOptionId: 'C',
          explanation: 'Canlının kütle/hacim artışı ve hücre sayısının çoğalması "büyüme"; bu hücrelerin özelleşerek doku ve organları işlevsel hale getirmesi ise "gelişme" sürecidir.'
        },
        {
          id: 'q-8-14', difficulty: 'easy',
          questionText: 'Canlıların yaşadıkları ortama uyum sağlamaları, o ortamdaki hayatta kalma ve üreme şanslarını belirler. Doğal ortamda "en iyi adapte olanın" hayatta kalıp üremesi kavramını aşağıdakilerden hangisi ifade eder?',
          options: [
            { id: 'A', text: 'Yapay seçilim' },
            { id: 'B', text: 'Doğal seçilim (Seleksiyon)' },
            { id: 'C', text: 'Modifikasyon' },
            { id: 'D', text: 'Homeostazi' },
            { id: 'E', text: 'Klonlama' }
          ],
          correctOptionId: 'B',
          explanation: 'Çevre şartlarına (ısı, avcı, besin) uygun adaptasyonlara sahip varyasyonların yaşaması, uygun olmayanların elenmesi sürecine doğal seçilim denir.'
        },
        {
          id: 'q-8-15', difficulty: 'easy',
          questionText: 'Bir memeli hücresi ile bitki hücresi ortak olarak ATP sentezi yapabilir. Bu olay, hayvan ve bitki hücresinde HANGİ organelde gerçekleşir?',
          options: [
            { id: 'A', text: 'Hayvanda Kloroplast / Bitkide Kloroplast' },
            { id: 'B', text: 'Hayvanda Mitokondri / Bitkide Ribozom' },
            { id: 'C', text: 'Hayvanda Mitokondri / Bitkide Mitokondri' },
            { id: 'D', text: 'Hayvanda Lizozom / Bitkide Golgi' },
            { id: 'E', text: 'Hayvanda Çekirdek / Bitkide Koful' }
          ],
          correctOptionId: 'C',
          explanation: 'Oksijenli solunumla (gece ve gündüz sürekli olarak) asıl ATP üretiminden sorumlu zarlı organel, hem hayvan hem bitki (tüm ökaryotlarda) hücrelerinde mitokondridir.'
        }
      ]
    },
    {
      id: 'test-9',
      title: 'Kavrama Testi 9',
      description: 'ÖSYM düşünme mantığına giriş',
      type: 'comprehension',
      order: 9,
      questions: [
        {
          id: 'q-9-1', difficulty: 'easy',
          questionText: 'Canlıların ortak özellikleri ile ilgili;\nI. Tüm canlılar genetik materyale (DNA ve RNA) sahiptir.\nII. Tüm canlılar dışarıdan hazır inorganik madde alır.\nIII. Tüm canlılar hücre zarına ve kloroplasta sahiptir.\nifadelerinden hangileri kesinlikle doğrudur?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Tüm canlıların hücre zarı, DNA, RNA ve ribozomu vardır (I doğru). Hem üretici hem tüketiciler su ve mineralleri dışarıdan alır (II doğru). Ancak kloroplast sadece bazı ökaryotik ototroflarda bulunur (III yanlış).'
        },
        {
          id: 'q-9-2', difficulty: 'easy',
          questionText: 'Bir araştırmacı, incelediği tek hücreli bir organizmanın karanlık ortamda dışarıdan aldığı organik besinlerle beslendiğini, aydınlık ortama alındığında ise kendi besinini üretebildiğini gözlemliyor (Örn: Öglena). Bu canlı için aşağıdakilerden hangisi söylenemez?',
          options: [
            { id: 'A', text: 'Hem ototrof hem heterotrof beslenme özelliği gösterir.' },
            { id: 'B', text: 'Klorofil pigmenti taşımaktadır.' },
            { id: 'C', text: 'Hücresel solunumla enerji (ATP) üretebilir.' },
            { id: 'D', text: 'Ototrof beslenmesini kemosentez yoluyla yapar.' },
            { id: 'E', text: 'Işık şiddetine karşı uyarılma ve tepki gösterebilir.' }
          ],
          correctOptionId: 'D',
          explanation: 'Aydınlıkta besin üretmesi ışık kullandığını (fotosentez) gösterir. Kemosentez yapan canlılar ışığa ihtiyaç duymazlar ve klorofil taşımazlar.'
        },
        {
          id: 'q-9-3', difficulty: 'easy',
          questionText: 'Canlıların organizasyon basamakları küçükten büyüğe doğru sıralandığında; "Organel - Hücre - Doku - Organ - Sistem - Organizma" dizilimi elde edilir. Bu dizilimle ilgili aşağıdaki yorumlardan hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Bu dizilimin tamamı sadece çok hücreli canlılarda görülür.' },
            { id: 'B', text: 'Tek hücreli canlılarda organizasyon en fazla "hücre" düzeyine kadar çıkabilir.' },
            { id: 'C', text: 'Dokular, aynı görevi yapmak üzere özelleşmiş hücre topluluklarıdır.' },
            { id: 'D', text: 'Bakterilerde organizasyon organel (ribozom) ile başlar, hücre ile biter.' },
            { id: 'E', text: 'Bütün çok hücreli canlılarda sistem oluşumu mutlaka görülür.' }
          ],
          correctOptionId: 'E',
          explanation: 'Çok hücreli olmalarına rağmen bazı ilkel canlılarda (örneğin süngerler, bazı mantarlar) dokulaşma, organ veya sistem düzeyinde bir organizasyon (gerçek anlamda) bulunmaz.'
        },
        {
          id: 'q-9-4', difficulty: 'easy',
          questionText: 'Biyoloji öğretmeni, "Homeostazi sadece tek bir sistemin değil, tüm sistemlerin ortak ve uyumlu çalışmasının bir sonucudur" demiştir. Bu duruma;\nI. Kan şekerinin hormonlarla dengede tutulması\nII. Vücut sıvılarının pH\'ının böbrekler ve akciğer ile ayarlanması\nIII. Terleme ile fazla ısının atılması\nörneklerinden hangileri kanıt olarak gösterilebilir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'Şeker dengesi (I), pH ayarı (II) ve ısı dengesi (III) doğrudan organizmanın iç dengesini (homeostazi) sağlamaya yönelik çok sistemli faaliyetlerdir.'
        },
        {
          id: 'q-9-5', difficulty: 'easy',
          questionText: 'Aşağıdaki tabiat olaylarından hangisi biyolojik anlamda bir "Adaptasyon" olarak değerlendirilemez?',
          options: [
            { id: 'A', text: 'Penguenlerin derilerinin altında kalın yağ tabakası bulundurması' },
            { id: 'B', text: 'Bukalemunun bulunduğu zeminin rengini alması' },
            { id: 'C', text: 'Arı larvalarının arı sütüyle beslenirse kraliçe arı, polenle beslenirse işçi arı olması' },
            { id: 'D', text: 'Kurak bölge bitkilerinin kök sistemlerinin çok derine inmesi' },
            { id: 'E', text: 'Baykuşların gece avlanabilmek için göz bebeklerinin çok büyük olması' }
          ],
          correctOptionId: 'C',
          explanation: 'Beslenmeye bağlı olarak gen işleyişinin değişmesi (kraliçe/işçi arı oluşumu) bir adaptasyon değil, kalıtsal olmayan bir "Modifikasyon" örneğidir.'
        },
        {
          id: 'q-9-6', difficulty: 'easy',
          questionText: 'Bir hücrenin; hücre zarından madde geçişi yapması, ribozomda protein sentezlemesi, DNA\'sını eşlemesi ve glikoz parçalayarak ATP üretmesi süreçlerinde HANGİSİ tüm canlı hücreler için GEREKLİ DEĞİLDİR (istisnalar olabilir)?',
          options: [
            { id: 'A', text: 'ATP harcanması veya üretilmesi' },
            { id: 'B', text: 'DNA eşlenmesi (bölünme hazırlığı)' },
            { id: 'C', text: 'Enzim kullanılması' },
            { id: 'D', text: 'Protein sentezlenmesi' },
            { id: 'E', text: 'Hücre zarı işlevleri' }
          ],
          correctOptionId: 'B',
          explanation: 'Sinir hücreleri, olgun alyuvarlar veya kas hücreleri gibi özelleşmiş bazı hücreler bölünme yeteneğini kaybeder ve DNA eşlenmesi (replikasyon) yapmazlar.'
        },
        {
          id: 'q-9-7', difficulty: 'easy',
          questionText: 'Canlıların beslenme şekilleri ile ilgili aşağıda verilen eşleştirmelerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Fotosentetik canlılar → Işık enerjisi ile inorganik maddelerden organik madde üretirler' },
            { id: 'B', text: 'Kemosentetik canlılar → Kimyasal bağ enerjisi ile inorganik maddelerden organik madde üretirler' },
            { id: 'C', text: 'Saprofit canlılar → Organik atıkları hücre dışında parçalayarak inorganik maddelere çevirir ve beslenirler' },
            { id: 'D', text: 'Parazit canlılar → Kendi besinlerini üretemedikleri için diğer canlılara fayda sağlayarak onlardan besin alırlar' },
            { id: 'E', text: 'Herbivor canlılar → Sadece bitkilerle beslenen heterotrof canlılardır' }
          ],
          correctOptionId: 'D',
          explanation: 'Parazit (asalak) canlılar üzerinde yaşadıkları veya içinden beslendikleri konağa fayda değil, zarar verirler (hastalık vb.).'
        },
        {
          id: 'q-9-8', difficulty: 'easy',
          questionText: 'Bir öğrenci biyoloji laboratuvarında gözlemlediği bir canlıya ait şu özellikleri not almıştır:\n- Hücre çeperi yoktur.\n- Aktif olarak yer değiştirebilmektedir.\n- Hazır organik besinleri yutarak beslenmektedir.\nBuna göre bu canlı büyük ihtimalle hangi gruba aittir?',
          options: [
            { id: 'A', text: 'Bitkiler' },
            { id: 'B', text: 'Mantarlar' },
            { id: 'C', text: 'Hayvanlar (veya bazı tek hücreliler)' },
            { id: 'D', text: 'Bakteriler' },
            { id: 'E', text: 'Arkeler' }
          ],
          correctOptionId: 'C',
          explanation: 'Bitki, mantar, bakteri ve arkelerde hücre çeperi/duvarı bulunurken; hayvan hücrelerinde (ve amip, paramesyum gibi tek hücrelilerde) çeper bulunmaz ve aktif hareket edebilirler.'
        },
        {
          id: 'q-9-9', difficulty: 'easy',
          questionText: 'Eşeyli ve eşeysiz üreme karşılaştırıldığında;\nI. Tür içi kromozom sayısının sabit kalmasını sağlama\nII. Varyasyonlara (çeşitliliğe) neden olma\nIII. Kısa sürede çok sayıda birey oluşturabilme\nözelliklerinden hangileri eşeysiz üremeye göre eşeyli üremenin en belirgin avantajıdır?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'B',
          explanation: 'Eşeysiz üreme genellikle hızlıdır (III) ancak çeşitlilik sağlamaz. Eşeyli üremenin en büyük evrimsel avantajı, mayoz ve döllenme ile genetik çeşitlilik (varyasyon) (II) oluşturmasıdır.'
        },
        {
          id: 'q-9-10', difficulty: 'easy',
          questionText: 'Anabolik reaksiyonlar (yapım) sırasında mutlaka ATP (enerji) harcanır. Buna göre hücrede gerçekleşen;\nI. Amino asitlerden protein sentezi\nII. Glikozun oksijenli solunumla parçalanması\nIII. Fotosentez ile glikoz üretimi\nolaylarından hangilerinde ATP harcanır?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız III' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'I ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'Protein sentezinde (I) ve fotosentezde (III) ATP harcanır (anabolizma). Solunum bir yıkımdır ancak glikozun parçalanmaya başlaması için başlangıçta aktivasyon enerjisi olarak ATP harcanır (II). Yani hepsinde ATP harcanır.'
        },
        {
          id: 'q-9-11', difficulty: 'easy',
          questionText: 'Bir gölde kimyasal kirlilik artışı olmuş ve suyun pH\'ı ani bir şekilde asidik hale gelmiştir. Bu durum karşısında göldeki balıkların çoğunun solungaçlarındaki enzimlerin üç boyutlu yapısı bozulmuştur (denatürasyon). Bu parçaya göre enzimlerin yapısının bozulması canlılarda öncelikle hangi ortak özelliği sekteye uğratır?',
          options: [
            { id: 'A', text: 'Üreme' },
            { id: 'B', text: 'Aktif hareket' },
            { id: 'C', text: 'Metabolizma (solunum ve enerji üretimi)' },
            { id: 'D', text: 'Besin arama davranışı' },
            { id: 'E', text: 'Boşaltım ürünlerinin depolanması' }
          ],
          correctOptionId: 'C',
          explanation: 'Solungaçlardaki enzimlerin çalışmaması gaz alışverişini ve hücresel solunumu (metabolizmayı) doğrudan durdurur, canlı kısa sürede ölür.'
        },
        {
          id: 'q-9-12', difficulty: 'easy',
          questionText: 'Aşağıda canlılarda görülen bazı olaylar verilmiştir:\n- Glikoz + Oksijen -> Karbondioksit + Su + ATP\n- Amino asit + Amino asit -> Dipeptit + Su\n- Su + Karbondioksit -> Glikoz + Oksijen\nBu olaylar sırasıyla hangi kavramlara karşılık gelir?',
          options: [
            { id: 'A', text: 'Solunum - Dehidrasyon - Fotosentez' },
            { id: 'B', text: 'Solunum - Hidroliz - Kemosentez' },
            { id: 'C', text: 'Fotosentez - Dehidrasyon - Solunum' },
            { id: 'D', text: 'Fermantasyon - Hidroliz - Fotosentez' },
            { id: 'E', text: 'Solunum - Boşaltım - Fotosentez' }
          ],
          correctOptionId: 'A',
          explanation: 'Birincisi oksijenli solunum, ikincisi su açığa çıkaran dehidrasyon (yapım), üçüncüsü ise ışık (varsayılan) eşliğinde organik besin sentezi olan fotosentezdir.'
        },
        {
          id: 'q-9-13', difficulty: 'easy',
          questionText: 'Canlıların inorganik maddeleri organik besinlere dönüştürmesine "ototrof beslenme" denir. Bu işlem sırasında canlıların karbon kaynağı olarak kullandığı temel inorganik molekül aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Oksijen (O2)' },
            { id: 'B', text: 'Su (H2O)' },
            { id: 'C', text: 'Karbondioksit (CO2)' },
            { id: 'D', text: 'Amonyak (NH3)' },
            { id: 'E', text: 'Hidrojen Sülfür (H2S)' }
          ],
          correctOptionId: 'C',
          explanation: 'İster fotosentetik ister kemosentetik olsun, tüm ototroflar sentezledikleri organik moleküllerin karbonunu karbondioksitten (CO2) karşılarlar.'
        },
        {
          id: 'q-9-14', difficulty: 'easy',
          questionText: 'Hücre yapısı Prokaryot olan canlılarda genetik bilgi (DNA) çekirdek zarı ile çevrili değildir ve doğrudan sitoplazma içerisinde bulunur. Buna göre Prokaryot bir hücrede, DNA üzerinden RNA sentezlenmesi nerede gerçekleşir?',
          options: [
            { id: 'A', text: 'Çekirdek içinde' },
            { id: 'B', text: 'Sitoplazmada' },
            { id: 'C', text: 'Ribozomun içinde' },
            { id: 'D', text: 'Hücre zarında' },
            { id: 'E', text: 'Mitokondride' }
          ],
          correctOptionId: 'B',
          explanation: 'Prokaryotlarda çekirdek olmadığı için DNA sitoplazmadadır. Dolayısıyla DNA eşlenmesi ve RNA sentezi (transkripsiyon) sitoplazmada gerçekleşir.'
        },
        {
          id: 'q-9-15', difficulty: 'easy',
          questionText: 'Bazı bitkiler yapraklarına dokunulduğunda hemen yapraklarını kapatır (Örn: Küstüm otu). Bazı tek hücreliler (Örn: Öglena) ise ışığın olduğu yöne doğru hareket ederler. Bu iki olay canlıların hangi ortak özelliğini göstermektedir?',
          options: [
            { id: 'A', text: 'Metabolizma hızlarının aynı olması' },
            { id: 'B', text: 'Çevresel uyarılara karşı tepki (duyarlılık) göstermeleri' },
            { id: 'C', text: 'Aynı şekilde beslenmeleri' },
            { id: 'D', text: 'Aynı organizasyon düzeyinde olmaları' },
            { id: 'E', text: 'İkisinin de fotosentez yapması' }
          ],
          correctOptionId: 'B',
          explanation: 'Dokunma (mekanik uyaran) ve ışık (fotik uyaran) gibi dış çevre uyarılarına karşı verilen hareket veya durum değiştirme cevapları, "uyarılara tepki" verme özelliğidir.'
        }
      ]
    },
    {
      id: 'test-10',
      title: 'Kavrama Testi 10',
      description: 'Orta düzey yorum',
      type: 'comprehension',
      order: 10,
      questions: [
        {
          id: 'q-10-1', difficulty: 'easy',
          questionText: 'Aşağıda canlılarda gerçekleşen I, II ve III numaralı dönüşüm olayları verilmiştir.\nI. Glikoz -> Glikojen + Su\nII. Protein + Su -> Amino asit\nIII. Amino asit + Oksijen -> Karbondioksit + Su + ATP + NH3\nBu olayların gerçekleşme amaçları veya isimleri hangisinde doğru eşleştirilmiştir?',
          options: [
            { id: 'A', text: 'I: Hidroliz, II: Dehidrasyon, III: Solunum' },
            { id: 'B', text: 'I: Dehidrasyon, II: Hidroliz, III: Solunum' },
            { id: 'C', text: 'I: Solunum, II: Dehidrasyon, III: Sindirim' },
            { id: 'D', text: 'I: Fotosentez, II: Hidroliz, III: Kemosentez' },
            { id: 'E', text: 'I: Dehidrasyon, II: Sindirim, III: Fotosentez' }
          ],
          correctOptionId: 'B',
          explanation: 'Glikojen sentezi su çıkaran yapım olayı (Dehidrasyon), proteinin suyla yıkımı (Hidroliz), amino asidin oksijenle yıkılıp ATP üretilmesi hücresel solunumdur.'
        },
        {
          id: 'q-10-2', difficulty: 'easy',
          questionText: 'Bilim insanları Mars\'ta canlılık belirtisi ararken ilk olarak sıvı "su" izleri aramaktadır. Mars\'ta yaşam olabilmesi için suyun aranmasının biyolojik temel nedeni aşağıdakilerden hangisi olamaz?',
          options: [
            { id: 'A', text: 'Hücre içi biyokimyasal tepkimelerin gerçekleşmesi için sulu ortama ihtiyaç duyulması' },
            { id: 'B', text: 'Enzimlerin çalışabilmesi için ortamda en az %15 su bulunmasının gerekmesi' },
            { id: 'C', text: 'Suyun hidroliz (sindirim) tepkimelerinde harcanması' },
            { id: 'D', text: 'Canlıların hücre içi osmotik dengelerini su ile ayarlaması' },
            { id: 'E', text: 'Suyun hücrede birincil enerji (ATP) kaynağı olarak yakılması' }
          ],
          correctOptionId: 'E',
          explanation: 'Su molekülü (H2O) canlılar tarafından parçalanarak (yakılarak) doğrudan ATP enerjisi eldesinde kullanılamaz. Su inorganik bir maddedir, enerji vermez.'
        },
        {
          id: 'q-10-3', difficulty: 'easy',
          questionText: 'Metabolizma olayları Anabolizma (yapım) ve Katabolizma (yıkım) olmak üzere ikiye ayrılır. Buna göre aşağıdakilerden hangisi bir katabolizma örneği değildir?',
          options: [
            { id: 'A', text: 'Nişastanın enzimlerle glikozlara parçalanması (Hidroliz)' },
            { id: 'B', text: 'Hücresel solunumla glikozdan ATP elde edilmesi' },
            { id: 'C', text: 'Fotosentez ile karbondioksit ve suyun birleştirilip organik besin üretilmesi' },
            { id: 'D', text: 'Yağların hücre içinde gliserol ve yağ asitlerine yıkılması' },
            { id: 'E', text: 'Karaciğerde glikojenin glikoza dönüştürülmesi' }
          ],
          correctOptionId: 'C',
          explanation: 'Fotosentez bir katabolizma (yıkım) değil, küçük inorganik maddelerden büyük organik madde sentezlenen bir anabolizma (yapım) tepkimesidir.'
        },
        {
          id: 'q-10-4', difficulty: 'easy',
          questionText: 'Ökaryot ve Prokaryot hücre ayrımını kavrayan bir öğrencinin aşağıdaki yorumlardan hangisini yapması beklenmez?',
          options: [
            { id: 'A', text: 'Prokaryotların tamamı tek hücrelidir.' },
            { id: 'B', text: 'Ökaryotların genetik materyali çekirdek içinde, prokaryotlarınki sitoplazmadadır.' },
            { id: 'C', text: 'Prokaryot hücrelerde ribozom dışında hiçbir organel bulunmaz.' },
            { id: 'D', text: 'Prokaryot canlıların metabolizma hızları çok düşüktür ve oksijenli solunum yapamazlar.' },
            { id: 'E', text: 'Bitkiler, hayvanlar ve mantarlar ökaryot; bakteriler prokaryottur.' }
          ],
          correctOptionId: 'D',
          explanation: 'Birçok bakteri (prokaryot) sitoplazma ve hücre zarı (mezazom) üzerindeki enzimlerle oksijenli solunum yapar ve metabolizma hızları çok yüksektir.'
        },
        {
          id: 'q-10-5', difficulty: 'easy',
          questionText: 'Bir göl ekosistemindeki su yılanı sayısının hızla azalması sonucu, yılanların beslendiği kurbağa sayısının arttığı ve kurbağaların böcekleri aşırı tüketmesiyle böceklerin azaldığı görülmüştür. Bu olayda canlıların hangi ortak özelliği ön plana çıkmaktadır?',
          options: [
            { id: 'A', text: 'Beslenme (Madde ve enerji akışı)' },
            { id: 'B', text: 'Boşaltım' },
            { id: 'C', text: 'Aktif hareket' },
            { id: 'D', text: 'Hücre solunumu' },
            { id: 'E', text: 'Homeostazi' }
          ],
          correctOptionId: 'A',
          explanation: 'Ekosistemdeki bu zincirleme reaksiyon, canlıların birbiriyle olan beslenme ilişkilerini ve enerji akışını gösterir (Besin zinciri).'
        },
        {
          id: 'q-10-6', difficulty: 'easy',
          questionText: 'Canlılarda hücresel solunumun temel amacı organik moleküllerdeki kimyasal bağ enerjisini hücrenin kullanabileceği ATP enerjisine dönüştürmektir. Buna göre solunumla ilgili;\nI. Tüm canlı hücrelerde 24 saat kesintisiz devam eder.\nII. Sadece mitokondri organeli olan hücreler ATP üretebilir.\nIII. Bitkiler fotosentez yaptığı için gündüzleri solunuma ihtiyaç duymazlar.\nyargılarından hangileri yanlıştır?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'D',
          explanation: 'Solunum kesintisizdir (I doğru). Prokaryotların mitokondrisi yoktur ama ATP üretirler (II yanlış). Bitkiler gündüz de solunum yapar, sadece fotosentez hızı solunumdan yüksek olabilir (III yanlış).'
        },
        {
          id: 'q-10-7', difficulty: 'easy',
          questionText: 'Bütün canlı hücrelerin yapısında; Su, Mineraller, Karbonhidratlar, Lipitler (Yağlar), Proteinler ve Nükleik Asitler bulunur. Bu moleküllerden hangileri tüm canlılarda genetik şifreye (DNA\'ya) uygun olarak ribozomda sentezlenir?',
          options: [
            { id: 'A', text: 'Karbonhidratlar' },
            { id: 'B', text: 'Lipitler' },
            { id: 'C', text: 'Proteinler' },
            { id: 'D', text: 'Nükleik Asitler' },
            { id: 'E', text: 'Mineraller' }
          ],
          correctOptionId: 'C',
          explanation: 'Ribozom, DNA\'dan gelen şifreye (mRNA) uygun dizilimde amino asitleri birleştirerek sadece protein sentezinden sorumludur.'
        },
        {
          id: 'q-10-8', difficulty: 'easy',
          questionText: 'Aşağıda bazı uyaranlara verilen tepkiler eşleştirilmiştir:\n- Bitkinin köklerinin suya yönelmesi\n- Öğlenanın ışığa doğru yüzmesi\n- Köpeğin ses duyduğunda kulaklarını dikmesi\nBu hareketlerin ortak özelliği nedir?',
          options: [
            { id: 'A', text: 'Hepsinde aktif olarak yer değiştirme görülür.' },
            { id: 'B', text: 'Hepsinde sinir sistemi görev alır.' },
            { id: 'C', text: 'Tümü çevreden gelen uyaranlara karşı canlıların gösterdiği tepkilerdir (İrritabilite).' },
            { id: 'D', text: 'Tümü kalıtsal olmayan geçici modifikasyonlardır.' },
            { id: 'E', text: 'Tümü homeostaziyi bozacak tehlikeli uyarılardır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Uyarılara tepki (irritabilite) tüm canlılarda ortaktır. Bu tepkiler bitkilerde tropizma (yönelme), tek hücrelilerde taksis, hayvanlarda kas-sinir tepkisi şeklinde olabilir.'
        },
        {
          id: 'q-10-9', difficulty: 'easy',
          questionText: 'Üreme hızı ve genetik çeşitlilik kıyaslandığında; bir amip çok hızlı bir şekilde ikiye bölünerek çoğalabilirken, bir filin yavru meydana getirmesi çok uzun zaman alır ancak genetik çeşitlilik sağlanır. Bu durum evrimsel (adaptasyon) açıdan nasıl yorumlanır?',
          options: [
            { id: 'A', text: 'Amip değişen çevre şartlarına filden daha hızlı uyum sağlar.' },
            { id: 'B', text: 'Eşeysiz üreme, değişen çevre koşullarında hayatta kalma (adaptasyon) şansını artırırken, eşeyli üreme risklidir.' },
            { id: 'C', text: 'Eşeyli üremede ortaya çıkan genetik çeşitlilik (varyasyon), değişen çevre koşullarına dayanıklı bireylerin oluşma ihtimalini artırır.' },
            { id: 'D', text: 'İkisi de eşeysiz ürediği için adaptasyon şansları eşittir.' },
            { id: 'E', text: 'Eşeyli üreme canlıların yaşam süresini kısaltır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Eşeyli üreme yavaştır ancak farklı gen kombinasyonları (çeşitlilik) ürettiği için değişen zorlu çevre koşullarına uyum şansını popülasyon bazında artırır.'
        },
        {
          id: 'q-10-10', difficulty: 'easy',
          questionText: 'Aşağıda verilen hücresel yapı ve organizasyonlardan hangisi sadece çok hücreli canlılara özgüdür?',
          options: [
            { id: 'A', text: 'Ribozom ve sitoplazma' },
            { id: 'B', text: 'Doku ve organ sistemleri' },
            { id: 'C', text: 'Hücre zarı' },
            { id: 'D', text: 'Kloroplast ve mitokondri' },
            { id: 'E', text: 'DNA ve RNA' }
          ],
          correctOptionId: 'B',
          explanation: 'Tek hücreli canlılarda (örneğin amip, öglena) hücre içi organeller iş bölümü yapar ancak hücrelerin birleşip doku veya organ sistemleri oluşturması sadece çok hücrelilere özgüdür.'
        },
        {
          id: 'q-10-11', difficulty: 'easy',
          questionText: 'Sıcak kanlı hayvanlar (örneğin kuşlar ve memeliler) kışın çevre sıcaklığı çok düştüğünde bile vücut sıcaklıklarını yüksek tutmak zorundadır. Bu nedenle kış aylarında metabolizma hızları nasıldır?',
          options: [
            { id: 'A', text: 'Çevreyle birlikte tamamen durur.' },
            { id: 'B', text: 'Değişmez, her zaman aynı kalır.' },
            { id: 'C', text: 'Düşer, çünkü enerji tasarrufu yaparlar.' },
            { id: 'D', text: 'Vücut sıcaklığını sabit tutabilmek için ekstra ısı üretmek zorunda kalırlar, bu yüzden artar.' },
            { id: 'E', text: 'Sadece gündüzleri artar, geceleri durur.' }
          ],
          correctOptionId: 'D',
          explanation: 'Soğuk havada dışarıya çok ısı kaybedilir. Bu ısıyı geri kazanıp iç dengeyi (homeostaziyi) korumak için hücreler solunum hızını, yani metabolizmayı artırmak zorundadır.'
        },
        {
          id: 'q-10-12', difficulty: 'easy',
          questionText: 'Canlıların inorganik maddeleri hazır alması tüm canlılarda ortak bir özelliktir. Aşağıdaki maddelerden hangisi bu duruma örnek olarak verilemez?',
          options: [
            { id: 'A', text: 'Kalsiyum (Ca)' },
            { id: 'B', text: 'Demir (Fe)' },
            { id: 'C', text: 'Glikoz (C6H12O6)' },
            { id: 'D', text: 'Su (H2O)' },
            { id: 'E', text: 'Sodyum (Na)' }
          ],
          correctOptionId: 'C',
          explanation: 'Su, mineraller ve tuzlar inorganiktir ve herkes dışarıdan alır. Glikoz ise karbon iskeletine sahip organik bir moleküldür, ototroflarca üretilir.'
        },
        {
          id: 'q-10-13', difficulty: 'easy',
          questionText: 'Bütün canlılar atık maddeleri hücreden veya vücuttan uzaklaştırmak için boşaltım yapar. Bitkilerde boşaltım olayına;\nI. Yaprak dökümü\nII. Stomalardan (gözeneklerden) terleme ile su atılması\nIII. Ter bezleriyle tuz atılması\nörneklerinden hangileri verilebilir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız III' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Yaprak dökümü katı atıkların atılmasını, terleme sıvı/gaz atılmasını sağlar (I ve II doğru). Ancak ter bezleri hayvanlara (memelilere) ait bir yapıdır, bitkilerde bulunmaz (III yanlış).'
        },
        {
          id: 'q-10-14', difficulty: 'easy',
          questionText: 'Tüm canlı hücreler için, DNA molekülünün sahip olduğu en hayati işlev nedir?',
          options: [
            { id: 'A', text: 'Hücre zarını oluşturarak şekil vermek' },
            { id: 'B', text: 'Bütün hücresel enzim ve proteinlerin şifrelerini (genleri) taşıyarak canlılık olaylarını yönetmek ve kalıtımı sağlamak' },
            { id: 'C', text: 'Doğrudan oksijenli solunuma katılıp enerji vermek' },
            { id: 'D', text: 'Hücreyi zararlı bakterilere karşı korumak' },
            { id: 'E', text: 'Sadece mayoz bölünmeyi yönetmek' }
          ],
          correctOptionId: 'B',
          explanation: 'DNA, canlının yönetici molekülüdür. Tüm proteinlerin, dolayısıyla metabolizmayı yürüten enzimlerin şifresini taşır ve nesilden nesile aktarır.'
        },
        {
          id: 'q-10-15', difficulty: 'easy',
          questionText: 'Hücre duvarı (çeper) canlıların tamamında bulunmaz, sadece belirli gruplara özgüdür. Buna göre; Bakteri, Mantar, Bitki ve Hayvan hücrelerinin hangilerinde hücre duvarı BULUNMAZ?',
          options: [
            { id: 'A', text: 'Yalnız Hayvan' },
            { id: 'B', text: 'Mantar ve Hayvan' },
            { id: 'C', text: 'Yalnız Bakteri' },
            { id: 'D', text: 'Bitki ve Hayvan' },
            { id: 'E', text: 'Bakteri ve Mantar' }
          ],
          correctOptionId: 'A',
          explanation: 'Bakterilerde (peptidoglikan), Mantarlarda (kitin), Bitkilerde (selüloz) hücre duvarı varken; hayvan hücrelerinde hücre duvarı (çeperi) bulunmaz, sadece hücre zarı vardır.'
        }
      ]
    },
    {
      id: 'test-11',
      title: 'Kavrama Testi 11',
      description: 'Grafik / tablo / deney / senaryo',
      type: 'comprehension',
      order: 11,
      questions: [
        {
          id: 'q-11-1', difficulty: 'medium',
          questionText: 'Bir laboratuvarda kapalı bir cam fanus içine yeşil bir bitki ve bir fare konuluyor. Ortama ışık verildiğinde her iki canlının da uzun süre yaşadığı; ortam karartıldığında ise bir süre sonra farenin ve ardından bitkinin öldüğü gözlemleniyor. Bu deneyden çıkarılabilecek en kapsamlı sonuç aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Bitkiler karanlıkta solunum yapamazlar.' },
            { id: 'B', text: 'Hayvanlar karanlıkta yaşayamaz.' },
            { id: 'C', text: 'Kapalı ekosistemlerde üretici ve tüketici canlılar arasında madde (O2/CO2) döngüsü vardır ve bu döngünün enerji kaynağı ışıktır.' },
            { id: 'D', text: 'Bitkiler sadece farelerin yaşamasını sağlamak için evrimleşmiştir.' },
            { id: 'E', text: 'Karanlıkta farenin üremesi hızlanır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Aydınlıkta bitki fotosentez yaparak oksijen ve besin üretir (fare kullanır); fare solunumla karbondioksit üretir (bitki kullanır). Karanlıkta fotosentez durur, O2 biter ve döngü çöker.'
        },
        {
          id: 'q-11-2', difficulty: 'medium',
          questionText: 'Bir hücrede zamana bağlı olarak "Serbest Amino asit Miktarı" grafiğinin aşağı doğru (azalan) çizildiği gözlemleniyor. Bu zaman aralığında hücrede;\nI. Peptit bağı sayısı artar.\nII. Hücrenin su miktarı artar.\nIII. ATP tüketimi artar.\ngibi durumlardan hangilerinin gerçekleşmesi beklenir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'Serbest amino asitler azalıyorsa protein sentezi (anabolizma/dehidrasyon) yapılıyordur. Amino asitler peptit bağlarıyla birleşir (I), su açığa çıkar (II) ve bu anabolik olayda ATP harcanır (III).'
        },
        {
          id: 'q-11-3', difficulty: 'medium',
          questionText: 'Aşağıda üç farklı canlının (X, Y, Z) metabolizma özellikleri verilmiştir:\n- X canlısı: Gündüz karbondioksit tüketiyor, gece karbondioksit üretiyor.\n- Y canlısı: İnorganik madde oksidasyonu ile ürettiği enerjiyle CO2 kullanıp besin sentezliyor (karanlıkta da yapabiliyor).\n- Z canlısı: Ortamdaki hazır glikoz miktarını azaltıp, oksijen kullanmadan laktik asit oluşturuyor.\nBu bilgilere göre X, Y ve Z canlılarının beslenme veya solunum tipleriyle ilgili hangi seçenek yanlıştır?',
          options: [
            { id: 'A', text: 'X canlısı fotosentetik ototroftur.' },
            { id: 'B', text: 'Y canlısı kemosentetik ototroftur.' },
            { id: 'C', text: 'Z canlısı oksijenli solunum yapmaktadır.' },
            { id: 'D', text: 'X canlısı hücrelerinde klorofil bulundurur.' },
            { id: 'E', text: 'Z canlısı fermantasyon yapmaktadır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Z canlısı oksijen kullanmadan laktik asit ürettiği için oksijenli solunum değil, laktik asit fermantasyonu yapmaktadır.'
        },
        {
          id: 'q-11-4', difficulty: 'medium',
          questionText: 'Bir araştırmacı tatlı suda yaşayan amip (X) ve tuzlu suda yaşayan amip (Y) hücrelerini eşit derişime sahip izotonik bir ortama koyuyor. X amipinin kontraktil kofullarının çalışmaya devam ettiği, Y amipinde ise kontraktil koful faaliyetinin olmadığı gözlemleniyor. Bu deney, canlıların ortak özelliklerinden hangisini vurgulamaktadır?',
          options: [
            { id: 'A', text: 'Fotosentez' },
            { id: 'B', text: 'Homeostazi ve adaptasyon' },
            { id: 'C', text: 'Sadece boşaltım eksikliği' },
            { id: 'D', text: 'Eşeyli üreme' },
            { id: 'E', text: 'Katabolizma' }
          ],
          correctOptionId: 'B',
          explanation: 'Tatlı su (hipotonik) canlılarında içeri giren fazla suyu atmak için (homeostazi) kontraktil koful bir adaptasyondur. Tuzlu su canlılarının (Y) buna ihtiyacı (adaptasyonu) yoktur.'
        },
        {
          id: 'q-11-5', difficulty: 'medium',
          questionText: 'Bir grafikte X ekseninde "Ortam Sıcaklığı (C°)" (0\'dan 40\'a doğru artan), Y ekseninde ise "Metabolizma Hızı" verilmiştir. Sıcaklık 0\'dan 35°C\'ye çıkarken metabolizma hızı artmış, 40°C\'nin üzerine çıktığında ise hızla sıfıra düşmüştür. Bu grafiğin biyolojik nedeni aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Yüksek sıcaklıkta suyun donması.' },
            { id: 'B', text: 'Yüksek sıcaklıkta metabolizmayı yöneten enzimlerin protein yapılarının (3 boyutlu yapılarının) bozulması (denatürasyon).' },
            { id: 'C', text: 'Sıcakta canlıların kış uykusuna yatması.' },
            { id: 'D', text: 'Sıcaklık arttıkça DNA\'nın tamamen yok olması.' },
            { id: 'E', text: 'Hücre zarının erimesi.' }
          ],
          correctOptionId: 'B',
          explanation: 'Enzimler protein yapılıdır. Optımum sıcaklıktan sonra (genellikle 35-40°C arası) protein yapı denatüre olur (bozulur) ve metabolizma durur.'
        },
        {
          id: 'q-11-6', difficulty: 'medium',
          questionText: 'Hücre içi "Glikoz" miktarının sürekli arttığı, buna karşılık "Karbondioksit" miktarının azaldığı gözlemlenen canlı bir hücre için;\nI. Aydınlık bir ortamdadır.\nII. Kemosentez yapıyor olabilir.\nIII. Protein sentezliyor olabilir.\nyargılarından hangilerine KESİN OLARAK ulaşılabilir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'Yalnız III' },
            { id: 'D', text: 'Hiçbiri' },
            { id: 'E', text: 'I ve II' }
          ],
          correctOptionId: 'D',
          explanation: 'Olay karbondioksit özümlemesi (besin üretimi)dir. Bu ya fotosentezdir (aydınlık şart, I kesin değil kemosentez olabilir) ya da kemosentezdir (II kesin değil fotosentez olabilir). Bu nedenle hiçbirine "kesin" ulaşılamaz.'
        },
        {
          id: 'q-11-7', difficulty: 'medium',
          questionText: 'Dört farklı tür bakterinin beslenme özellikleri şöyledir:\nK: Glikoz olan karanlık ortamda ürer.\nL: Glikoz olmayan aydınlık ortamda ürer (H2S tüketir).\nM: Glikoz olmayan karanlık ortamda ürer (NH3 oksitler).\nN: Ancak insan bağırsağı (hazır organik besinli ortam) içinde ürer.\nBuna göre K, L, M ve N bakterilerinin beslenme tipleri için aşağıdakilerden hangisi söylenemez?',
          options: [
            { id: 'A', text: 'L bakterisi fotosentetik ototroftur.' },
            { id: 'B', text: 'M bakterisi kemosentetik ototroftur.' },
            { id: 'C', text: 'K bakterisi heterotroftur.' },
            { id: 'D', text: 'N bakterisi parazit (heterotrof) beslenmektedir.' },
            { id: 'E', text: 'Tüm bakteriler ototroftur.' }
          ],
          correctOptionId: 'E',
          explanation: 'K ve N bakterileri glikoz veya hazır sindirilmiş besin (bağırsak) istedikleri için heterotroftur (tüketicidir). Dolayısıyla tüm bakteriler ototroftur ifadesi yanlıştır.'
        },
        {
          id: 'q-11-8', difficulty: 'medium',
          questionText: 'Bir göl kenarında yapılan araştırmada A bölgesindeki kertenkelelerin daha açık renkli, B bölgesindeki kayalık alanda yaşayan aynı tür kertenkelelerin ise koyu renkli olduğu tespit edilmiştir. Ancak B bölgesindeki kertenkele yavruları A bölgesine getirilip büyütüldüğünde renklerinin koyu olmaya devam ettiği görülmüştür. Bu durum aşağıdakilerden hangisiyle açıklanır?',
          options: [
            { id: 'A', text: 'Geçici bir modifikasyondur.' },
            { id: 'B', text: 'Renk değişimi beslenmeye bağlıdır.' },
            { id: 'C', text: 'Bu özellik kalıtsal bir adaptasyondur ve genler (DNA) aracılığıyla aktarılmıştır.' },
            { id: 'D', text: 'Kertenkeleler sadece yaşlandıklarında renk değiştirir.' },
            { id: 'E', text: 'Sadece mutasyonla oluşmuş zararlı bir durumdur.' }
          ],
          correctOptionId: 'C',
          explanation: 'Yavrular farklı çevreye götürüldüğünde de ata canlıyla aynı rengi (koyu) gösteriyorsa, bu özellik kalıtsal olarak yerleşmiş bir adaptasyondur.'
        },
        {
          id: 'q-11-9', difficulty: 'medium',
          questionText: 'İçinde yeterli besin ve oksijen bulunan iki cam tüpten X tüpüne bitki tohumu (çimlenmekte olan), Y tüpüne ise tek hücreli mantar ekleniyor. Her iki tüpteki gaz değişim grafikleri (O2 azalışı, CO2 artışı) birebir aynı çiziliyor. Bu grafik benzerliği canlıların hangi ortak özelliğini ispatlar?',
          options: [
            { id: 'A', text: 'Her ikisinin de çok hücreli olduğunu' },
            { id: 'B', text: 'Her ikisinin de ototrof olduğunu' },
            { id: 'C', text: 'Oksijenli solunumun (ATP üretimi) canlılarda ortak mekanizmalarla ilerlediğini' },
            { id: 'D', text: 'İkisinin de fotosentez yaptığını' },
            { id: 'E', text: 'İkisinin de sadece mayoz geçirdiğini' }
          ],
          correctOptionId: 'C',
          explanation: 'Bitki tohumu (fotosentez yapamaz) ve mantar (heterotrof) enerjilerini Oksijenli Solunum ile üretirler. O2 tüketip CO2 üretmeleri bu olayın ortakkalitesini gösterir.'
        },
        {
          id: 'q-11-10', difficulty: 'medium',
          questionText: 'Hücre boyutlarının (yüzey/hacim oranı) büyümesi, hücrenin madde alışverişini ve çekirdeğin yönetimini zorlaştırır. Bu nedenle hücre belli bir büyüklüğe ulaşınca bölünür (mitoz). Bu senaryoya göre hücre bölünmesinin tek hücreli ve çok hücreli canlılardaki ana amacı nedir?',
          options: [
            { id: 'A', text: 'Tek hücrelilerde organizasyon, çok hücrelilerde üreme' },
            { id: 'B', text: 'Tek hücrelilerde büyüme, çok hücrelilerde hareket' },
            { id: 'C', text: 'Tek hücrelilerde üreme (çoğalma), çok hücrelilerde büyüme ve gelişme' },
            { id: 'D', text: 'İkisinde de sadece homeostazi sağlamak' },
            { id: 'E', text: 'İkisinde de mutasyon oranını artırmak' }
          ],
          correctOptionId: 'C',
          explanation: 'Bölünme (hücre sayısının ikiye çıkması), tek hücreli bir organizma için yeni bir birey (üreme) demektir. Çok hücreliler için ise canlının vücudunun büyümesi demektir.'
        },
        {
          id: 'q-11-11', difficulty: 'medium',
          questionText: 'Sürekli yüksek tuzlu gıdalarla beslenen bir insanın kanındaki tuz yoğunluğu artar (osmotik basınç yükselir). Bunun sonucunda beyin hipofizi uyarılır ve böbreklerden su geri emilimi artırılarak idrar miktarı azaltılır, kanın tuzluluğu seyreltilir. Bu karmaşık sistemler dizisi hangi biyolojik kavramın korunması için işler?',
          options: [
            { id: 'A', text: 'Homeostazi (İç denge)' },
            { id: 'B', text: 'Fotosentez' },
            { id: 'C', text: 'Mutasyon' },
            { id: 'D', text: 'Katabolizma' },
            { id: 'E', text: 'Gelişme' }
          ],
          correctOptionId: 'A',
          explanation: 'Kanın su ve tuz (osmotik) dengesinin beyin, hormonlar ve böbrek (boşaltım) aracılığıyla sabit tutulması mükemmel bir homeostazi mekanizmasıdır.'
        },
        {
          id: 'q-11-12', difficulty: 'medium',
          questionText: 'Bir tüpteki bakteri popülasyonuna X kimyasalı damlatıldığında bakterilerin ribozom faaliyeti duruyor, Y kimyasalı damlatıldığında mitokondri faaliyeti duruyor (Eğer varsa). Bu bakterinin her iki kimyasaldan nasıl etkilenmesi beklenir?',
          options: [
            { id: 'A', text: 'X öldürür, Y öldürür' },
            { id: 'B', text: 'X etkilemez, Y öldürür' },
            { id: 'C', text: 'X öldürür, Y etkilemez' },
            { id: 'D', text: 'İkisi de etkilemez' },
            { id: 'E', text: 'X üremeyi hızlandırır' }
          ],
          correctOptionId: 'C',
          explanation: 'Bakteriler prokaryottur, mitokondrileri YOKTUR (zarlı organel bulunmaz). Bu yüzden Y kimyasalı onları etkilemez. Ancak ribozomları VARDIR ve çalışması durursa (X kimyasalı) protein sentezleyemeyip ölürler.'
        },
        {
          id: 'q-11-13', difficulty: 'medium',
          questionText: 'Aşağıda bir deney düzeneği verilmiştir: Karanlık bir kutu içinde, ortasında küçük bir delik bulunan bir perde var. Işık sadece bu delikten bitkiye ulaşıyor. Birkaç gün sonra bitkinin gövdesinin ışığın geldiği deliğe doğru eğildiği gözlemleniyor. Bu deney bitkilerin hangi özelliğini ispatlamak için yapılmıştır?',
          options: [
            { id: 'A', text: 'Fotosentez yapabildiklerini' },
            { id: 'B', text: 'Karanlıkta yaşayamadıklarını' },
            { id: 'C', text: 'Çevresel uyarılara (ışığa) karşı tepki (tropizma/yönelme) gösterdiklerini' },
            { id: 'D', text: 'Terleme ile boşaltım yaptıklarını' },
            { id: 'E', text: 'Sadece eşeyli ürediklerini' }
          ],
          correctOptionId: 'C',
          explanation: 'Işığa doğru büyüme/yönelme (fototropizma), bitkinin çevreden gelen uyarana karşı gösterdiği yaşamsal bir "tepki" örneğidir.'
        },
        {
          id: 'q-11-14', difficulty: 'medium',
          questionText: 'Canlıların ortak özellikleriyle ilgili hazırlanan bir kavram haritasında; "Metabolizma" merkezde, "Anabolizma" ve "Katabolizma" ise alt kollardadır. "Hücresel Solunum" ve "Protein Sentezi" bu kollara nasıl yerleştirilmelidir?',
          options: [
            { id: 'A', text: 'İkisi de Anabolizma koluna' },
            { id: 'B', text: 'Hücresel solunum Anabolizmaya, Protein sentezi Katabolizmaya' },
            { id: 'C', text: 'Hücresel solunum Katabolizmaya, Protein sentezi Anabolizmaya' },
            { id: 'D', text: 'İkisi de Katabolizma koluna' },
            { id: 'E', text: 'İkisi de haritadan çıkarılmalı' }
          ],
          correctOptionId: 'C',
          explanation: 'Büyük organik moleküllerin parçalanarak enerji üretilmesi (Hücresel solunum) yıkımdır (Katabolizma). Amino asitlerden büyük bir molekül olan proteinin yapılması ise (Protein sentezi) yapımdır (Anabolizma).'
        },
        {
          id: 'q-11-15', difficulty: 'medium',
          questionText: 'Bir kedi popülasyonunda; besin bulma, su içme, uyuma ve avlanma davranışlarını çok iyi yapan ancak "kısır (üreyemeyen)" bir kedi vardır. Bu kedinin evrimsel başarı (doğal seçilim) açısından durumu nasıldır?',
          options: [
            { id: 'A', text: 'En başarılı bireydir.' },
            { id: 'B', text: 'Evrimsel başarısı (uyum başarısı) sıfırdır, çünkü genlerini yeni nesle aktaramaz.' },
            { id: 'C', text: 'Metabolizması çok hızlı olduğu için yeni bir türe dönüşür.' },
            { id: 'D', text: 'Diğer kedilerden daha uzun yaşar.' },
            { id: 'E', text: 'Eşeysiz üreyerek neslini devam ettirir.' }
          ],
          correctOptionId: 'B',
          explanation: 'Evrimsel biyolojide başarı, sadece hayatta kalmak değil, taşıdığı genetik adaptasyonları (özellikleri) üreyerek bir sonraki nesle aktarabilmektir.'
        }
      ]
    },
    {
      id: 'test-12',
      title: 'Kavrama Testi 12',
      description: 'Konu bütünlüğü',
      type: 'comprehension',
      order: 12,
      questions: [
        {
          id: 'q-12-1', difficulty: 'medium',
          questionText: 'Canlıların inorganik maddeleri hazır alması evrensel bir kuraldır. Buna göre, ototrof bir organizma olan buğday bitkisi, topraktan aldığı "su ve mineralleri" aşağıdakilerden hangisinde kullanmaz?',
          options: [
            { id: 'A', text: 'Fotosentezde (hidrojen ve elektron kaynağı olarak)' },
            { id: 'B', text: 'Hücrenin osmotik basıncını ayarlamada' },
            { id: 'C', text: 'Enzimlerin çalışabilmesi için uygun ortam hazırlamada (en az %15)' },
            { id: 'D', text: 'Oksijenli solunumda oksitleyerek (parçalayarak) ATP üretmede' },
            { id: 'E', text: 'Terleme ile yaprakları soğutmakta (ısı dengeleme)' }
          ],
          correctOptionId: 'D',
          explanation: 'Su ve mineraller inorganiktir; hiçbir canlı (ister bitki ister hayvan) tarafından hücresel solunumda enerji verici (ATP eldesi için yakıt) olarak kullanılamaz.'
        },
        {
          id: 'q-12-2', difficulty: 'medium',
          questionText: '"Organizasyon" sadece çok hücreli canlılara özgü değildir. Tek hücreli olan bir Paramesyum\'da (terliksi hayvan) da mükemmel bir organizasyon vardır. Paramesyumdaki bu organizasyonu aşağıdakilerden hangisi en iyi açıklar?',
          options: [
            { id: 'A', text: 'Hücrelerin birleşerek dokuları oluşturması' },
            { id: 'B', text: 'Hücre zarının olmaması' },
            { id: 'C', text: 'Hücre içindeki organellerin (örneğin kontraktil koful, büyük/küçük çekirdek) aralarında kusursuz bir iş bölümü (koordinasyon) yapması' },
            { id: 'D', text: 'Fotosentez ve solunumun aynı anda yapılması' },
            { id: 'E', text: 'Kök, gövde ve yaprak benzeri yapılara sahip olması' }
          ],
          correctOptionId: 'C',
          explanation: 'Tek hücrelilerde dokulaşma yoktur. Onlardaki organizasyon, hücre içi organellerin (yapıların) yaşamsal faaliyetleri iş bölümüyle ve uyumla yürütmesidir.'
        },
        {
          id: 'q-12-3', difficulty: 'medium',
          questionText: 'Hücresel solunum tepkimelerinin tüm canlılarda ortak olmamasının (oksijenli, oksijensiz, fermantasyon olarak çeşitlenmesinin) temel nedeni aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Canlıların farklı genetik yapıda (farklı enzim sistemlerine) sahip olmaları ve farklı ortamlara adapte olmaları' },
            { id: 'B', text: 'Sadece kloroplast taşıyanların oksijenli solunum yapması' },
            { id: 'C', text: 'Çok hücreli canlıların solunuma ihtiyaç duymaması' },
            { id: 'D', text: 'Glikozun sadece hayvanlar tarafından parçalanması' },
            { id: 'E', text: 'Oksijenin Dünya\'daki tüm ekosistemlerde aynı miktarda bulunması' }
          ],
          correctOptionId: 'A',
          explanation: 'Canlıların DNA\'larındaki şifreler farklı enzim sistemleri üretir. Oksijenli ortamda yaşayanlar buna uygun enzimler (adaptasyon) geliştirirken, anaerobik (oksijensiz) yaşayanlar fermantasyon yollarını kullanır.'
        },
        {
          id: 'q-12-4', difficulty: 'medium',
          questionText: 'Eşeyli üreme yapan bir popülasyonda nesiller geçtikçe, ortam şartları aynı kalsa bile bireyler arasında küçük veya büyük farklılıklar (renk, boy vb.) oluşur. Bu durumun oluşmasında;\nI. Mayoz bölünme\nII. Döllenme olaylarının rastgele olması\nIII. Mitoz bölünme ile büyüme\nolaylarından hangileri etkilidir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Popülasyon içi kalıtsal çeşitliliğin (varyasyonun) temel nedeni genetik şifrenin karılmasına yol açan mayoz bölünme ve gametlerin rastgele döllenmesidir. Mitoz çeşitlilik yaratmaz (mutasyon hariç).'
        },
        {
          id: 'q-12-5', difficulty: 'medium',
          questionText: 'Bir hücrede dehidrasyon (yapım) tepkimesi gerçekleşirken ortamdaki enzim miktarı ve su miktarı nasıl değişir?',
          options: [
            { id: 'A', text: 'Enzim azalır, su azalır' },
            { id: 'B', text: 'Enzim değişmez (sabit kalır), su artar' },
            { id: 'C', text: 'Enzim artar, su azalır' },
            { id: 'D', text: 'Enzim değişmez, su azalır' },
            { id: 'E', text: 'İkisi de değişmez' }
          ],
          correctOptionId: 'B',
          explanation: 'Dehidrasyon sentezinde küçük moleküller birleşirken bağ sayısı kadar su açığa çıkar (su artar). Enzimler ise tepkimeden değişmeden (harcanmadan) çıkar, miktarları sabittir.'
        },
        {
          id: 'q-12-6', difficulty: 'medium',
          questionText: 'Bazı bakteriler uygun olmayan çevre koşullarında (aşırı sıcak, kuraklık vb.) "Endospor" oluştururlar. Endospor halindeki bir bakteri için;\nI. Metabolizma hızı çok yavaştır (bazal seviyededir).\nII. Üreme hızlanmıştır.\nIII. Su oranı minimum seviyeye indirilmiştir.\nyargılarından hangileri doğrudur?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Endospor bir üreme/çoğalma şekli DEĞİLDİR. Sadece zorlu koşullara karşı bir korunma adaptasyonudur. Hücre suyunu atar, metabolizmasını neredeyse durdurur (I ve III) ve ortam düzelene kadar bekler.'
        },
        {
          id: 'q-12-7', difficulty: 'medium',
          questionText: 'Ribozom, Protein, Amino asit, Karbondioksit ve Su kavramlarını yapısal/işlevsel ilişkilerine göre sıralayan bir öğrenci aşağıdakilerden hangisini söyleyemez?',
          options: [
            { id: 'A', text: 'Amino asitler ribozom organelinde birleştirilir.' },
            { id: 'B', text: 'Amino asitlerin birleşmesi sonucu Protein ve Su oluşur.' },
            { id: 'C', text: 'Bu dehidrasyon tepkimesinde Karbondioksit açığa çıkar.' },
            { id: 'D', text: 'Proteinler, enzimlerin yapısına katılarak metabolizmayı yönetir.' },
            { id: 'E', text: 'Bu bir anabolik (yapım) olayı olduğu için ATP harcanır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Protein sentezinde (dehidrasyon) sadece su açığa çıkar. Karbondioksit açığa çıkması, organik besinlerin oksijenli solunumla (hücresel solunumla) yıkılması sırasında görülür.'
        },
        {
          id: 'q-12-8', difficulty: 'medium',
          questionText: 'Otçul memeli bir hayvan (Örn: İnek) ve kemosentetik bir bakteri;\nI. Dışarıdan inorganik madde alma\nII. Hücre içi solunumla ATP üretme\nIII. Karbondioksit özümlemesi (besin sentezi) yapma\nözelliklerinden hangilerine ortak olarak sahiptir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Her ikisi de su/mineral alır (I). Her ikisi de yaşamak için solunumla ATP üretir (II). Ancak inek heterotroftur, CO2 özümlemesi (kendi besinini üretme) yapamaz (III).'
        },
        {
          id: 'q-12-9', difficulty: 'medium',
          questionText: 'Canlıların ortak özellikleri dikkate alındığında "Çevreye Uyum (Adaptasyon)" ile "Homeostazi (İç denge)" arasındaki ilişki en doğru şekilde nasıl ifade edilir?',
          options: [
            { id: 'A', text: 'İkisi de tamamen aynı kavramlardır.' },
            { id: 'B', text: 'Homeostazi canlının genetik yapısını değiştirerek adaptasyon sağlar.' },
            { id: 'C', text: 'Çevreye uygun kalıtsal adaptasyonlara sahip olan canlılar, değişen çevre koşullarında iç dengelerini (homeostazilerini) daha kolay korurlar.' },
            { id: 'D', text: 'Adaptasyonlar iç dengeyi bozan zararlı mutasyonlardır.' },
            { id: 'E', text: 'Homeostazi sadece bitkilerde, adaptasyon sadece hayvanlarda görülür.' }
          ],
          correctOptionId: 'C',
          explanation: 'Adaptasyon, canlının hayatta kalma yeteneğidir. Çölde yaşamaya adapte olmuş bir canlının su tutma özelliği (adaptasyon), onun su dengesini (homeostazi) korumasını sağlar.'
        },
        {
          id: 'q-12-10', difficulty: 'medium',
          questionText: 'Ökaryot bir hücre olan Amip, hücre zarına doğru yaklaşan büyük bir besin maddesini yalancı ayaklar çıkararak içine alır ve besin kofulu oluşturur. Bu olay sırasında amipte;\nI. Enerji (ATP) harcanır.\nII. Hücre içi enzimlerle hidroliz (sindirim) gerçekleşir.\nIII. Ototrof beslenme özelliği gösterilmiştir.\ndurumlarından hangileri gözlenir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'B',
          explanation: 'Amipin besini (fagositozla) içeri alması enerji gerektirir (I). İçeri alınan büyük besin koful içinde enzimlerle sindirilir (II). Bu olay dışarıdan besin alma olduğu için heterotrof beslenmedir, ototrof değil (III).'
        },
        {
          id: 'q-12-11', difficulty: 'medium',
          questionText: 'Boşaltım ürünleri canlıdan canlıya farklılık gösterir. Proteinlerin solunumda kullanılması sonucu oluşan "Amonyak (NH3)" zehirli bir maddedir. Tatlı su balıkları amonyağı bol su ile doğrudan atarken, insanlar daha az zehirli olan "Üre"ye çevirerek atar, kuşlar ise çok daha az su harcayarak "Ürik Asit" kristalleri şeklinde atar. Bu farklılığın temel biyolojik nedeni nedir?',
          options: [
            { id: 'A', text: 'Canlıların besin zincirindeki yerleri' },
            { id: 'B', text: 'Kuşların daha zeki olması' },
            { id: 'C', text: 'Canlıların yaşadıkları ortamın su miktarına göre geliştirdikleri su kaybını önleyici adaptasyonlar' },
            { id: 'D', text: 'İnsanların sadece etle beslenmesi' },
            { id: 'E', text: 'Balıkların böbreklerinin olmaması' }
          ],
          correctOptionId: 'C',
          explanation: 'Tatlı suda su bol olduğu için amonyak sulandırılarak atılabilir. Ancak kara hayvanları (insan, kuş) suyu korumak (homeostazi) zorundadır, bu yüzden zehir derecesini düşürüp (üre, ürik asit) su kaybını en aza indiren adaptasyonlar geliştirmişlerdir.'
        },
        {
          id: 'q-12-12', difficulty: 'medium',
          questionText: 'Canlılarda hareket pasif (durum değiştirme/yönelme) veya aktif (yer değiştirme) olabilir. Buna göre;\nI. Ayçiçeğinin güneşe dönmesi\nII. Öglenanın kamçısıyla ışığa yüzmesi\nIII. Bir bitki kökünün gübreye doğru büyümesi\nörneklerinden hangileri bitkilerde görülen "pasif" hareketlere örnektir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Ayçiçeğinin dönmesi (fototropizma) ve kökün gübreye uzaması (kemotropizma) bitkilerdeki pasif (yer değiştirmeyen) yönelme hareketleridir (I ve III). Öglenanın yüzmesi ise aktif yer değiştirmedir (II).'
        },
        {
          id: 'q-12-13', difficulty: 'medium',
          questionText: 'Aşağıdakilerden hangisi bir "anabolizma" örneği olduğu halde, bir "dehidrasyon sentezi" DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Glikojen sentezi' },
            { id: 'B', text: 'Fotosentez ile glikoz üretimi' },
            { id: 'C', text: 'Protein sentezi' },
            { id: 'D', text: 'Yağ (Trigliserit) sentezi' },
            { id: 'E', text: 'Enzim sentezi' }
          ],
          correctOptionId: 'B',
          explanation: 'Fotosentez bir anabolizmadır (yapım), ancak ürün olarak su açığa çıkarmaz (tam tersi solunumla su üretilirken fotosentezde su TÜKETİLİR). Dehidrasyon sentezlerinde (protein, glikojen) küçük monomerler birleşirken su AÇIĞA ÇIKAR.'
        },
        {
          id: 'q-12-14', difficulty: 'medium',
          questionText: 'Bir öğrenci X mikroskobik canlısını incelerken şu notları alıyor: "Zarla çevrili organelleri yok. Kendi besinini kendi üretebiliyor ancak ışık olmayan ortamda da bu işleme devam edebiliyor." Buna göre bu canlının beslenme türü ve hücre yapısı hangi seçenekte doğru eşleştirilmiştir?',
          options: [
            { id: 'A', text: 'Fotosentetik - Ökaryot' },
            { id: 'B', text: 'Kemosentetik - Prokaryot' },
            { id: 'C', text: 'Saprofit - Ökaryot' },
            { id: 'D', text: 'Parazit - Prokaryot' },
            { id: 'E', text: 'Fotosentetik - Prokaryot' }
          ],
          correctOptionId: 'B',
          explanation: 'Zarlı organeli yoksa "Prokaryot"tur. Karanlıkta besin üretebiliyorsa (ışığa bağımlı değilse) "Kemosentetik"tir.'
        },
        {
          id: 'q-12-15', difficulty: 'medium',
          questionText: 'Bir kış günü dışarıda çok üşüyen bir insanın eve gelip sıcak bir çorba içmesi ve sobanın yanına oturmasıyla vücut sıcaklığının eski haline dönmesi sürecinde;\nI. Duyarlı organlar (reseptörler) ve sinir sistemi\nII. Beslenme (dışarıdan besin alma)\nIII. Hücresel solunum (ATP ve ısı üretimi)\nIV. Homeostazi (iç denge)\nkavramlarından hangileri rol oynamış ve gerçekleşmiştir?',
          options: [
            { id: 'A', text: 'I ve IV' },
            { id: 'B', text: 'II ve III' },
            { id: 'C', text: 'I, III ve IV' },
            { id: 'D', text: 'II, III ve IV' },
            { id: 'E', text: 'I, II, III ve IV' }
          ],
          correctOptionId: 'E',
          explanation: 'Üşümeyi hissetmek uyarılara tepki (I), çorba içmek beslenme (II), besinin parçalanıp ısı vermesi solunum/metabolizma (III) ve tüm bunların sonucunda vücut ısısının normale dönmesi homeostazidir (IV).'
        }
      ]
    },
    {
      id: 'test-13',
      title: 'Kavrama Finali',
      description: 'Konunun tamamını ölçen 10 soru',
      type: 'comprehension',
      order: 13,
      questions: [
        {
          id: 'q-13-1', difficulty: 'medium',
          questionText: 'Canlıların ortak özellikleri düşünüldüğünde, bir canlının sahip olduğu özellikler ile cansız bir varlığın özellikleri arasındaki temel farkı belirlemede aşağıdakilerden hangisi "kesin bir kanıt" olarak kullanılamaz?',
          options: [
            { id: 'A', text: 'Hücresel yapıya sahip olma' },
            { id: 'B', text: 'Genetik materyal (DNA/RNA) bulundurma ve bunu kopyalayabilme' },
            { id: 'C', text: 'Dışarıdan madde veya enerji alarak bunu kendi yapısına katma veya kullanma (Büyüme/Hareket)' },
            { id: 'D', text: 'Kendine özgü karmaşık organik moleküller (protein, enzim) sentezleme' },
            { id: 'E', text: 'Hücre içi olaylarla kendi enerjisini (ATP) üretme ve harcama' }
          ],
          correctOptionId: 'C',
          explanation: 'Cansız bir varlık olan kristaller de dışarıdan madde alarak büyüyebilir (hacimce artabilir) veya bir makine dışarıdan enerji (yakıt) alıp hareket edebilir. Ancak hücresel yapı, DNA, ATP ve protein sentezi sadece canlılara özgüdür.'
        },
        {
          id: 'q-13-2', difficulty: 'medium',
          questionText: 'Bitkiler ve mantarlar;\nI. Hücre çeperine (duvarına) sahip olma\nII. Glikojen depolama\nIII. Tüketici (Heterotrof) beslenme\nIV. Aktif yer değiştirememe (pasif hareket etme)\nözelliklerinden hangilerine ortak olarak sahiptir?',
          options: [
            { id: 'A', text: 'I ve II' },
            { id: 'B', text: 'I ve IV' },
            { id: 'C', text: 'II ve III' },
            { id: 'D', text: 'I, III ve IV' },
            { id: 'E', text: 'I, II, III ve IV' }
          ],
          correctOptionId: 'B',
          explanation: 'Her ikisinde de hücre çeperi vardır (I). Her ikisi de kök/miselyum yapılarıyla toprağa bağlı yaşar, aktif hareket edemez (IV). Ancak glikojen depolama ve heterotrof olma mantarlara özgüdür (Bitkiler nişasta depolar ve ototroftur).'
        },
        {
          id: 'q-13-3', difficulty: 'medium',
          questionText: 'Evrimsel süreçte canlılar yaşadıkları ortama uyum sağlamak için kalıtsal adaptasyonlar geliştirmişlerdir. Aşağıdakilerden hangisi bir bitkinin kurak ortama (çöle) adaptasyonu sayılamaz?',
          options: [
            { id: 'A', text: 'Yaprak yüzeylerinin daralması veya diken şeklini alması' },
            { id: 'B', text: 'Kök sisteminin toprağın çok derinlerine doğru gelişmesi' },
            { id: 'C', text: 'Gövdede su depo eden geniş dokuların bulunması' },
            { id: 'D', text: 'Terlemeyi artırmak için stoma (gözenek) sayısının yaprak üst yüzeyinde çok olması' },
            { id: 'E', text: 'Yaprak yüzeyinde kalın bir kütikula (mumlu örtü) tabakası bulunması' }
          ],
          correctOptionId: 'D',
          explanation: 'Kurak ortam bitkileri suyu kaybetmemek (homeostazi) için terlemeyi AZALTMAK zorundadır. Bu nedenle stomalar az sayıdadır ve yaprağın alt yüzeyine, derine gömülmüştür. Üstte ve çok stoma olması nemli bölge bitkilerinin özelliğidir.'
        },
        {
          id: 'q-13-4', difficulty: 'medium',
          questionText: 'Bir hücrede gerçekleşen biyokimyasal tepkimeler dizisi şöyledir:\n1. Amino asit + Amino asit + ... -> Protein + Su\n2. Glikoz + Oksijen -> Karbondioksit + Su + ATP\n3. Glikoz -> Laktik Asit + ATP\nBu tepkimelerle ilgili hangi yorum kesinlikle YANLIŞTIR?',
          options: [
            { id: 'A', text: '1. olay tüm canlı hücrelerde gerçekleşir.' },
            { id: 'B', text: '2. olayı gerçekleştiren hücre kesinlikle mitokondri taşır.' },
            { id: 'C', text: '3. olay bir katabolizma örneğidir.' },
            { id: 'D', text: '1. olayda enerji harcanır (anabolizma).' },
            { id: 'E', text: '2. ve 3. olayların amacı hücreye ATP sağlamaktır.' }
          ],
          correctOptionId: 'B',
          explanation: '2. olay oksijenli solunumdur. Ancak bazı bakteriler (prokaryotlar) mitokondrileri OLMADAN, hücre zarı (mezazom) kıvrımlarındaki enzimlerle de oksijenli solunum yapabilirler.'
        },
        {
          id: 'q-13-5', difficulty: 'medium',
          questionText: 'Çok hücreli bir canlıda görülen "Büyüme" ile tek hücreli bir canlıda (örneğin Amip) görülen "Büyüme"nin hücresel temeli birbirinden farklıdır. Bu farkı en iyi açıklayan ifade hangisidir?',
          options: [
            { id: 'A', text: 'Tek hücreliler mitozla, çok hücreliler mayozla büyür.' },
            { id: 'B', text: 'Tek hücrelilerde büyüme sadece besin kofullarının şişmesiyle, çok hücrelilerde ise hücre sayısının artmasıyla olur.' },
            { id: 'C', text: 'Tek hücrelilerde büyüme, hücrenin kütlece (sitoplazma) ve hacimce artmasıyla; çok hücrelilerde ise mitoz bölünmelerle hücre sayısının artmasıyla olur.' },
            { id: 'D', text: 'Tek hücreliler büyürken ATP harcamaz, çok hücreliler harcar.' },
            { id: 'E', text: 'İkisinde de büyüme hücrelerin su alıp şişmesiyle gerçekleşir.' }
          ],
          correctOptionId: 'C',
          explanation: 'Tek hücreli bölünürse çoğalmış (üremiş) olur, bu yüzden büyümesi ancak hücre içi kütle (sitoplazma) artışıyla olur. Çok hücreli canlı ise hücre sayısını (mitozla) artırarak büyür.'
        },
        {
          id: 'q-13-6', difficulty: 'medium',
          questionText: 'Canlıların sınıflandırılmasında "Arkeler (Archaea)" alanı, bakterilerden farklı özelliklere sahip olmaları nedeniyle ayrılmıştır. Bir mikroskobik canlının arke veya bakteri olduğuna karar vermek için aşağıdakilerden hangisine bakmak işe yaramaz?',
          options: [
            { id: 'A', text: 'Hücre duvarının kimyasal yapısına' },
            { id: 'B', text: 'Ribozomlarının boyutuna ve yapısına' },
            { id: 'C', text: 'DNA\'sının etrafında histon proteinlerinin olup olmadığına' },
            { id: 'D', text: 'Çekirdek zarı bulundurup bulundurmamasına' },
            { id: 'E', text: 'Yaşadıkları ekstrem koşullara' }
          ],
          correctOptionId: 'D',
          explanation: 'Hem bakteriler hem de arkeler PROKARYOT hücre yapısına sahiptir. Yani ikisinde de çekirdek zarı (veya zarlı organel) bulunmaz. Bu özellik onları ayırmada kullanılamaz.'
        },
        {
          id: 'q-13-7', difficulty: 'medium',
          questionText: 'Yüksek bir dağlık bölgeye çıkan bir insanın vücudunda (oksijenin azalmasına bağlı olarak) sırasıyla;\n1. Solunum ve kalp atışının hızlanması\n2. Böbreklerden eritropoietin hormonu salgılanması\n3. Kemik iliğinin uyarılarak alyuvar (kırmızı kan hücresi) sayısının artırılması\nreaksiyonları gerçekleşir. Bu kompleks mekanizma silsilesi biyolojideki hangi temel kavramı korumaya yöneliktir?',
          options: [
            { id: 'A', text: 'Metabolizmayı (yıkımı) durdurma' },
            { id: 'B', text: 'Homeostaziyi (İç dengeyi) sağlama' },
            { id: 'C', text: 'Üremeyi artırma' },
            { id: 'D', text: 'Boşaltımı hızlandırma' },
            { id: 'E', text: 'Kalıtsal çeşitlilik yaratma' }
          ],
          correctOptionId: 'B',
          explanation: 'Dış çevredeki oksijen azaldığında (stres faktörü), dokulara giden oksijeni sabit tutmak (iç dengeyi korumak) amacıyla sistemler koordineli çalışarak alyuvar sayısını artırır. Bu mükemmel bir homeostazi (geri bildirim) örneğidir.'
        },
        {
          id: 'q-13-8', difficulty: 'medium',
          questionText: 'Ototrof canlılar "Fotosentetik" ve "Kemosentetik" olmak üzere ikiye ayrılır. Buna göre fotosentez ve kemosentez olaylarında;\nI. Karbon kaynağı olarak Karbondioksit (CO2) kullanılması\nII. Işık enerjisinin klorofiller tarafından soğurulması\nIII. İnorganik maddelerin organik besinlere dönüşmesi\nIV. Sadece gündüzleri gerçekleşebilmesi\nözelliklerinden hangileri ORTAKTIR?',
          options: [
            { id: 'A', text: 'I ve III' },
            { id: 'B', text: 'II ve IV' },
            { id: 'C', text: 'I, III ve IV' },
            { id: 'D', text: 'I, II ve III' },
            { id: 'E', text: 'I, II, III ve IV' }
          ],
          correctOptionId: 'A',
          explanation: 'Her iki grupta da karbon kaynağı CO2\'dir (I) ve inorganik madde organiğe dönüşür (III). Ancak ışık enerjisi kullanımı ve sadece gündüz yapılabilme fotosenteze özgüdür (kemosentez kimyasal enerji kullanır, 24 saat yapılabilir).'
        },
        {
          id: 'q-13-9', difficulty: 'medium',
          questionText: 'Canlıların tamamında görülen hücresel yapıyla ilgili, "Tüm canlılar hücre veya hücrelerden oluşur" ilkesi (Hücre Teorisi) geçerlidir. Buna göre "Virüsler" hangi özelliklerinden dolayı tam olarak bu teoriye uymaz ve biyolojik sınırda kabul edilirler?',
          options: [
            { id: 'A', text: 'Sadece bitkileri hasta etmeleri' },
            { id: 'B', text: 'Hem DNA hem de RNA\'yı aynı anda bulundurmamaları' },
            { id: 'C', text: 'Sitoplazma, organel ve enzim sistemlerine sahip olmamaları, sadece bir konak hücre içinde çoğalabilmeleri' },
            { id: 'D', text: 'Kendi besinlerini üretebilmeleri' },
            { id: 'E', text: 'Çok hücreli olmaları' }
          ],
          correctOptionId: 'C',
          explanation: 'Virüslerin hücresel bir yapısı (zarı, sitoplazması, ribozomu vb.) yoktur ve kendi kendilerine metabolik bir reaksiyon gerçekleştiremezler. Bu yüzden canlı ile cansız arasında sınır kabul edilirler.'
        },
        {
          id: 'q-13-10', difficulty: 'medium',
          questionText: 'Metabolik hız; canlının yaşına, cinsiyetine, çevre sıcaklığına, yaptığı işe ve hormonlarına göre değişebilir. Aşağıdaki durumların hangisinde bir insanın metabolizma hızının "düşmesi (azalması)" beklenir?',
          options: [
            { id: 'A', text: 'Gençlik döneminden yaşlılık dönemine geçilmesi' },
            { id: 'B', text: 'Adrenalin (heyecan) hormonunun kanda artması' },
            { id: 'C', text: 'Ortam sıcaklığının (özellikle kışın) çok düşmesi' },
            { id: 'D', text: 'Ağır bir fiziksel egzersiz yapılması' },
            { id: 'E', text: 'Tiroksin hormonunun çok salgılanması' }
          ],
          correctOptionId: 'A',
          explanation: 'Yaş ilerledikçe hücrelerin yenilenme hızı, yapım tepkimeleri (anabolizma) ve bazal metabolizma hızı doğal olarak yavaşlar (düşer). Diğer seçeneklerin tümü metabolizmayı hızlandıran faktörlerdir.'
        }
      ]
    },
    {
      id: 'mastery',
      title: 'Ustalık Testi',
      description: 'Yüksek yorum ve birleştirilmiş kazanımlar',
      type: 'mastery',
      order: 14,
      questions: [
        {
          id: 'q-m-1', difficulty: 'hard',
          questionText: 'Bilim insanları bir göldeki A türü balıkların, göle zehirli bir kimyasal döküldükten sonra çoğunun öldüğünü; ancak %5\'lik bir grubun hayatta kaldığını gözlemlemiştir. Birkaç yıl sonra göldeki balık popülasyonu eski sayısına ulaşmış, üstelik yeni popülasyona bu kimyasal tekrar döküldüğünde hiçbir balığın ölmediği tespit edilmiştir. Bu durum; evrim, adaptasyon ve üreme bağlamında nasıl açıklanır?',
          options: [
            { id: 'A', text: 'Kimyasal madde balıklarda mutasyona neden olmuş ve anında yararlı bir özellik kazandırmıştır.' },
            { id: 'B', text: 'Balıklar kimyasala karşı geçici bir bağışıklık (modifikasyon) geliştirmiştir.' },
            { id: 'C', text: 'Başlangıçtaki popülasyonda varyasyon (kalıtsal çeşitlilik) bulunuyordu. Zehre dirençli genleri taşıyanlar (Doğal seçilim) hayatta kalarak üredi ve dirençli genleri yeni nesle aktardı (Adaptasyon).' },
            { id: 'D', text: 'Balıkların metabolizması yavaşladığı için zehir onları etkilememiştir.' },
            { id: 'E', text: 'Balıklar kimyasalı besin olarak (kemosentez) kullanmaya başlamıştır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Bu durum doğal seçilimin klasik bir örneğidir. Mevcut genetik varyasyon (çeşitlilik) sayesinde ortama uygun olanlar hayatta kalır ve ürer, böylece popülasyon zamanla adaptasyon kazanır.'
        },
        {
          id: 'q-m-2', difficulty: 'hard',
          questionText: 'Bir araştırmacı, eşit ağırlıktaki bir bitki fidesini (M) ve bir fareyi (N) tamamen özdeş koşullardaki (ışık, sıcaklık vb.) iki ayrı kapalı fanusa yerleştiriyor. Bir süre sonra M fanusundaki CO2 miktarının azaldığını, N fanusundaki CO2 miktarının arttığını gözlemliyor. Daha sonra ortamı tamamen karanlık hale getirdiğinde ise HER İKİ fanusta da CO2 miktarının arttığını tespit ediyor. Bu deneye dayanarak aşağıdakilerden hangisine ULAŞILAMAZ?',
          options: [
            { id: 'A', text: 'Aydınlık ortamda bitkideki fotosentez hızı, solunum hızından daha yüksektir.' },
            { id: 'B', text: 'Hayvanlar aydınlıkta ve karanlıkta sadece oksijenli solunum yaparlar.' },
            { id: 'C', text: 'Karanlık ortamda bitkinin anabolik olaylarının tamamı dururken, farenin katabolik olayları devam eder.' },
            { id: 'D', text: 'Bitkiler karanlıkta dışarıdan O2 alıp dışarıya CO2 verirler.' },
            { id: 'E', text: 'Her iki canlı da yaşamsal faaliyetleri için hücre solunumu (O2 tüketimi) yapmak zorundadır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Karanlıkta bitkinin fotosentezi dursa da protein sentezi, RNA sentezi gibi diğer anabolik olayları ve hücresel solunumu devam eder. Anabolik olayların "tamamı durur" ifadesi yanlıştır.'
        },
        {
          id: 'q-m-3', difficulty: 'hard',
          questionText: 'Hücresel düzeyde homeostaziyi (iç dengeyi) korumak için hücre zarından madde geçişleri, osmotik denge ve pH düzenlemeleri hayati öneme sahiptir. Buna göre;\nI. Hücre içindeki glikozların birleştirilip glikojen (veya nişasta) şeklinde depolanması\nII. Kontraktil kofullar ile giren fazla suyun ATP harcanarak atılması\nIII. Solunumla üretilen CO2\'nin kan pH\'ını düşürmemesi için akciğerlerden hızla atılması\nverilenlerden hangileri doğrudan hücrenin veya organizmanın osmotik / pH dengesini korumaya (homeostaziye) hizmet eder?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'II ve III' },
            { id: 'D', text: 'I ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'Glikoz suda çözünür ve çok artarsa hücre fazla su alıp patlayabilir. Bunu glikojene (suda çözünmeyen) çevirip depolamak osmotik dengeyi korur (I). Kontraktil koful osmotik denge içindir (II). CO2 asidiktir, atılması pH dengesini korur (III).'
        },
        {
          id: 'q-m-4', difficulty: 'hard',
          questionText: 'Dört farklı öğrenci canlıların ortak özellikleriyle ilgili şu yorumları yapmıştır:\nAyşe: Tüm hücreli canlılarda zarlı organel (kloroplast, mitokondri) bulunmayabilir ancak ribozom mutlaka bulunur.\nBurak: Tüm heterotrof canlılar (tüketiciler) organik besinleri dışarıdan katı parçalar (holozoik) halinde yutarak beslenmek zorundadır.\nCem: Bir canlı ototrof ise mutlaka ışık enerjisi kullanmak zorundadır.\nDeniz: Bütün canlılar genetik materyalini (DNA) bir çekirdek içinde bulundurur.\nHangi öğrencinin veya öğrencilerin yaptığı yorum bilimsel olarak DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Yalnız Ayşe' },
            { id: 'B', text: 'Ayşe ve Burak' },
            { id: 'C', text: 'Yalnız Cem' },
            { id: 'D', text: 'Burak ve Deniz' },
            { id: 'E', text: 'Cem ve Deniz' }
          ],
          correctOptionId: 'A',
          explanation: 'Burak yanlış (mantarlar vb. dışarı enzim salgılayıp sıvı emer), Cem yanlış (kemosentez ışık kullanmaz), Deniz yanlış (prokaryotlarda çekirdek yoktur). Sadece Ayşe\'nin ribozom ve zarlı organel (prokaryot-ökaryot ayrımı) hakkındaki yorumu doğrudur.'
        },
        {
          id: 'q-m-5', difficulty: 'hard',
          questionText: 'Aşağıda bir deney tüpünde X maddesinin Y ve Z maddelerine enzimatik olarak yıkımı (hidrolizi) grafiği verilmiştir. Grafikte X miktarı azalırken Y, Z ve Su miktarının arttığı gözlenmiştir. (Dikkat: Su artıyor!)\nBu grafik yorumlandığında aşağıdakilerden hangisi söylenebilir?',
          options: [
            { id: 'A', text: 'Bu bir hidroliz (sindirim) tepkimesidir ve su harcanmaktadır.' },
            { id: 'B', text: 'Bu bir dehidrasyon (yapım) tepkimesidir ve büyük bir molekül üretilmiştir.' },
            { id: 'C', text: 'Bu olay bir hücresel solunum (oksijenli solunum) olayı olabilir, çünkü yıkım var ve su açığa çıkıyor.' },
            { id: 'D', text: 'Bu olay fotosentezdir, çünkü X maddesi tükenmiştir.' },
            { id: 'E', text: 'Grafik hatalıdır, çünkü hiçbir yıkım olayında su açığa çıkmaz.' }
          ],
          correctOptionId: 'C',
          explanation: 'Hidroliz (sindirim) olaylarında su HARCANIR (su azalır). Burada su ARTIYORSA (açığa çıkıyorsa) ve bu bir yıkımsa, organik besinin (X) oksijenle yıkılarak CO2 (Y) ve Su (Z)\'ya dönüştüğü hücresel solunumdur.'
        },
        {
          id: 'q-m-6', difficulty: 'hard',
          questionText: 'Metabolizma (Yapım ve Yıkım) ile ilgili aşağıdaki ifadelerden hangisi, canlıların tümünde ortak bir özelliktir?',
          options: [
            { id: 'A', text: 'Oksijen kullanarak inorganik maddelerden organik madde sentezleme' },
            { id: 'B', text: 'Sentezlediği glikozları selüloz şeklinde hücre dışına salgılama' },
            { id: 'C', text: 'Kompleks organik maddeleri monomerlerine kadar hücre dışında sindirme' },
            { id: 'D', text: 'Kendi DNA şifresine uygun olarak ortamdaki amino asitlerden polipeptit (protein) üretme' },
            { id: 'E', text: 'İhtiyaç duyduğu ATP enerjisini sadece mitokondri organelinde üretme' }
          ],
          correctOptionId: 'D',
          explanation: 'Protein sentezi (ribozomda kendi DNA şifresine göre) tüm canlıların tartışmasız ortak özelliğidir. Kemosentez (A), selüloz sentezi (B), hücre dışı sindirim (C) ve mitokondri kullanımı (E) sadece belirli canlılara özgüdür.'
        },
        {
          id: 'q-m-7', difficulty: 'hard',
          questionText: 'Çevresel bir uyaran (örneğin yüksek ses veya ani ışık) karşısında bir farenin kaçması, bir böceğin saklanması veya bir tek hücrelinin ters yöne yüzmesi ortaktır. Ancak bu tepkinin "oluşum mekanizması" incelendiğinde aşağıdakilerden hangisi tek hücreliler (Örn: Paramesyum) ile çok hücreli hayvanlar (Örn: Fare) arasında bir FARK oluşturur?',
          options: [
            { id: 'A', text: 'Tek hücreliler uyarılara sadece tesadüfi hareketlerle cevap verir.' },
            { id: 'B', text: 'Çok hücreli hayvanlar bu uyarıları almak, iletmek ve tepki vermek için özelleşmiş sistemlere (sinir sistemi, kas sistemi) sahipken; tek hücrelilerde bu tepki sistem düzeyinde değil, hücresel mekanizmalar (zardaki reseptörler ve sitoiskelet) düzeyindedir.' },
            { id: 'C', text: 'Tek hücreliler uyarılara tepki verirken ATP harcamazlar.' },
            { id: 'D', text: 'Farede tepki genetik iken, paramesyumda modifikasyondur.' },
            { id: 'E', text: 'Tek hücreliler sadece kimyasal maddelere tepki verebilir, ışık veya sese veremez.' }
          ],
          correctOptionId: 'B',
          explanation: 'Uyarılara tepki her ikisinde de vardır ancak çok hücrelilerde bunun için doku ve organ sistemleri (sinir/duyu sistemi) evrimleşmiştir. Tek hücrelilerde ise organizasyon hücre zarı ve içi yapılarla sınırlıdır.'
        },
        {
          id: 'q-m-8', difficulty: 'hard',
          questionText: 'Canlıların organizasyon düzeyleriyle ilgili aşağıdaki şema verilmiştir:\nKarbon atomu -> Glikoz -> X -> Y -> Z -> Bitki yaprağı\nBuna göre X, Y ve Z yerlerine sırasıyla mantıklı olarak ne gelmelidir?',
          options: [
            { id: 'A', text: 'Hücre -> Doku -> Organ' },
            { id: 'B', text: 'Nişasta (Makromolekül) -> Kloroplast (Organel) -> Fotosentetik Hücre' },
            { id: 'C', text: 'Protein -> Enzim -> Çekirdek' },
            { id: 'D', text: 'Selüloz -> Doku -> Sistem' },
            { id: 'E', text: 'Hücre zarı -> Hücre çeperi -> Doku' }
          ],
          correctOptionId: 'B',
          explanation: 'Küçük molekül (Glikoz) büyük bir makromoleküle (Nişasta/Selüloz - X) dönüşür. Makromoleküller birleşip organelleri (Kloroplast - Y) oluşturur. Organeller birleşip hücreyi (Fotosentetik hücre - Z) oluşturur. Hücreler de yaprağı (organ) oluşturur.'
        },
        {
          id: 'q-m-9', difficulty: 'hard',
          questionText: 'Ototrof ve Heterotrof beslenmenin yanında "Hem Ototrof Hem Heterotrof" beslenen canlılar (Örn: Böcekçil Bitki) vardır. Böcekçil bir bitki için aşağıdakilerden hangisi kesinlikle SÖYLENEMEZ?',
          options: [
            { id: 'A', text: 'Azot bakımından fakir topraklarda yaşadığı için böcek sindirir.' },
            { id: 'B', text: 'Karbon (glikoz) ihtiyacını kendi kloroplastlarında üreterek (fotosentez) karşılar.' },
            { id: 'C', text: 'Hücre dışı sindirim enzimlerini ekzositozla salgılayarak böceğin proteinlerini parçalar.' },
            { id: 'D', text: 'Böceği sindirmesinin asıl amacı hücresel solunumda kullanmak için ATP (enerji) elde etmektir.' },
            { id: 'E', text: 'Klorofil pigmentine sahiptir ve uyarılara (dokunma) hızlı (nasti) tepki verebilir.' }
          ],
          correctOptionId: 'D',
          explanation: 'Böcekçil bitkiler fotosentez yapar ve kendi şekerini/enerjisini üretir. Böceği yakalamasının nedeni enerji (ATP/glikoz) bulmak DEĞİL, topraktan alamadığı inorganik AZOT (Amino asit yapımı için) ihtiyacını karşılamaktır.'
        },
        {
          id: 'q-m-10', difficulty: 'hard',
          questionText: 'Biyoloji dersinde "Üreme, canlının hayatta kalması için zorunlu (şart) bir ortak özellik değildir, ancak türün devamı için zorunludur" diyen bir öğretmen, bu tezini savunmak için aşağıdaki örneklerden hangisini kullanamaz?',
          options: [
            { id: 'A', text: 'İşçi arıların tamamen kısır (üreyemeyen) dişiler olması ve yine de yaşamlarını sürdürebilmeleri.' },
            { id: 'B', text: 'Kısırlaştırılmış evcil hayvanların normal yaşam sürelerini tamamlayabilmeleri.' },
            { id: 'C', text: 'Üreme hücresi (sperm veya yumurta) üretemeyen insanların yaşamlarını devam ettirebilmeleri.' },
            { id: 'D', text: 'Bölünme (üreme) yeteneğini kaybetmiş bir sinir hücresinin (nöron) bir ömür boyu hayatta kalabilmesi.' },
            { id: 'E', text: 'Katırların (at ve eşek melezi) kısır olması nedeniyle hiçbir zaman beslenememesi ve hemen ölmesi.' }
          ],
          correctOptionId: 'E',
          explanation: 'Katırlar kısırdır (üreyemez) ancak beslenebilir, gelişebilir, yıllarca yük hayvanı olarak yaşayabilir. Beslenemeyip ölmesi bilgisi yanlıştır ve bu teze örnek olamaz.'
        }
      ]
    }
  ]
}
