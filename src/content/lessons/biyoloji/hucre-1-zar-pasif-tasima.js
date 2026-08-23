/**
 * TYT BİYOLOJİ · Hücre — 1. Bölüm
 * HÜCRE ZARI: YAPI VE PASİF TAŞIMA
 * ==================================================================
 *
 * KONU NEDEN BEŞ BÖLÜME AYRILDI?
 * "Hücre" müfredatın en geniş TYT konusu: zar yapısı, dört farklı taşıma
 * biçimi, on kadar organel, çekirdek ve iki ayrı hücre karşılaştırması.
 * Tek derse sıkıştırıldığında ya 8.000 kelimelik okunmaz bir metin ya da
 * her başlığa iki cümle düşen bir liste çıkıyor. Sıralı bölümler:
 *   1. Zar yapısı ve pasif taşıma   ← bu ders
 *   2. Osmoz ve hücrenin su dengesi
 *   3. Aktif taşıma ve toplu taşıma
 *   4. Sitoplazma ve organeller
 *   5. Çekirdek ve hücre tipleri
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ders "zarın yapısı şudur" diye başlamıyor. Önce hücrenin çözmek
 *   zorunda olduğu PROBLEM kuruluyor: hem kapalı hem geçirgen olmak.
 *   Yapı, o problemin çözümü olarak geliyor.
 *
 * · Fosfolipit çift tabakası sıfırdan anlatılmıyor; "Temel Bileşenler"
 *   konusunda kurulmuştu, buradan devam ediliyor. Şemalar da bilinçli
 *   olarak aynı görsel dili kullanıyor.
 *
 * · Kolaylaştırılmış difüzyonun doygunluk göstermesi, enzim–substrat
 *   grafiğiyle AÇIKÇA ilişkilendiriliyor. İki konu ayrı ayrı
 *   ezberlenecek iki grafik değil, aynı fikrin iki görünümü.
 *
 * · "Kolaylaştırılmış difüzyon ATP harcar" hatası iki ayrı yerde
 *   (şema etiketi + tuzak bloğu) kırılıyor; TYT'de doğrudan puan
 *   kaybettiriyor.
 */

export default {
  slug: 'hucre-zar-pasif-tasima',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre',
  },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'Hücre Zarı: Yapı ve Pasif Taşıma',
  subtitle:
    'Zarın çözmesi gereken tek bir problem var: hem kapalı hem geçirgen olmak. Yapısındaki her ayrıntı bu problemin cevabı.',

  document: {
    version: 3,
    estimated_minutes: 42,
    prerequisites: [
      {
        topic: 'Canlıların Temel Bileşenleri — 2. Bölüm',
        why: 'Fosfolipitin kutuplu başı ve kutupsuz kuyruğu bu dersin başlangıç noktası.',
      },
      {
        topic: 'Canlıların Temel Bileşenleri — 3. Bölüm',
        why: 'Zardaki taşıyıcı proteinler ve doygunluk mantığı enzim bölümüne dayanıyor.',
      },
    ],
    outcomes: [
      'Hücre zarının çözdüğü temel problemi kendi cümlenle anlatabileceksin.',
      'Akıcı mozaik modelin bileşenlerini sayıp her birinin görevini söyleyebileceksin.',
      'Bir maddenin zardan kolay geçip geçemeyeceğini yapısına bakarak tahmin edebileceksin.',
      'Basit ve kolaylaştırılmış difüzyonu üç ölçütle karşılaştırabileceksin.',
      'Difüzyon hızı–derişim grafiğini yorumlayıp doygunluğun sebebini açıklayabileceksin.',
      'Difüzyon hızını değiştiren etkenleri ve dinamik dengeyi deney sonuçları üzerinden yorumlayabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'hz-giris',
        kind: 'opening',
        title: 'Hücrenin çözmesi gereken problem',
        lead: 'Zarın yapısını ezberlemeden önce, o yapının neden böyle olduğunu anlayacağız.',
        blocks: [
          {
            id: 'hz-giris-1',
            type: 'prose',
            body: `Bir hücre düşün. İçeride tepkimeler yürüyor, belirli bir madde derişimi korunuyor, pH sabit tutuluyor. Bütün bunların olabilmesi için hücrenin ==dışarıdan ayrılmış== olması gerekir. Sınırı olmayan bir sistem iç dengesini koruyamaz.

Ama tam kapalı da olamaz. Besin girmeli, atık çıkmalı, oksijen içeri, karbondioksit dışarı geçmeli. Hücre çevresiyle sürekli alışveriş hâlinde.

İşte problem bu: ==aynı anda hem kapalı hem geçirgen olmak.==

Bir duvar bu işi yapamaz; duvar her şeyi durdurur. Bir elek de yapamaz; elek boyutuna bakar, kimliğine değil. Hücrenin ihtiyacı olan şey, neyin geçeceğine ==madde madde karar verebilen== bir sınır.

Bu derste o sınırın nasıl kurulduğunu ve nasıl karar verdiğini göreceğiz.`,
          },
          {
            id: 'hz-giris-why',
            type: 'why',
            question: 'Neden bu iş için özel bir molekül tasarlanmamış da fosfolipit kullanılmış?',
            body: `Çünkü fosfolipit bu işi ==kendiliğinden== yapıyor ve hücreye hiçbir şeye mal olmuyor.

Bir önceki konuda görmüştün: fosfolipitin bir ucu suyu sever, diğer ucu sudan kaçar. Su içine bırakıldığında kimse onları dizmese bile kuyrukları içeride, başları dışarıda kalacak biçimde sıralanırlar.

Bu dizilimin iki sonucu doğrudan hücrenin problemini çözüyor:

- Ortadaki **kutupsuz kuyruk bölgesi** bir bariyer oluşturur. Kutuplu maddeler ve iyonlar buradan geçemez — yani sınır kurulmuş olur.
- Kuyruk bölgesi kutupsuz olduğu için **kutupsuz maddeler** rahatça geçer — yani geçirgenlik de sağlanmış olur.

Yani tabaka daha kurulur kurulmaz "hem kapalı hem geçirgen" özelliğini kazanıyor. Geriye tek bir eksik kalıyor: kutuplu maddelerin de kontrollü biçimde geçebilmesi. O eksiği ==proteinler== tamamlayacak.`,
          },
          {
            id: 'hz-giris-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Zar yalnızca hücrenin dışında değildir. Çekirdek, mitokondri, kloroplast, lizozom — hepsi zarla çevrilidir. Burada öğrendiğin mantık organel zarları için de geçerlidir.',
          },
          {
            id: 'hz-giris-audio',
            type: 'audio_script',
            body: `Bu derse bir soruyla başlayalım.

Bir hücre neden hem kapalı hem açık olmak zorunda?

Kapalı olmak zorunda, çünkü içerideki dengeyi koruması gerekiyor. Açık olmak zorunda, çünkü besin alması ve atık atması gerekiyor.

Bu iki ihtiyaç birbiriyle çelişiyor. Ders boyunca göreceğin her yapı — çift tabaka, proteinler, kolesterol — bu çelişkinin çözümünün bir parçası.

Zarın yapısını ezberlemeye çalışma. Her parçayı gördüğünde şunu sor: bu parça çelişkinin hangi tarafını çözüyor?`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-yapi',
        kind: 'build',
        title: 'Akıcı mozaik model',
        lead: 'Zarın bugün kabul edilen modeli bu. Adındaki iki kelime, modelin iki temel iddiasıdır.',
        blocks: [
          {
            id: 'hz-yapi-figure',
            type: 'figure',
            kind: 'hucre-zari-model',
            width: 'full',
            title: 'Akıcı mozaik zar modeli',
            purpose:
              'Zarı, bilinen fosfolipit çift tabakasının üzerine protein ve diğer bileşenlerin eklenmiş hâli olarak göstermek.',
            complexity: 'high',
            caption:
              'Modelin adı iki iddiayı taşıyor. ==Akıcı==: parçalar sabit değil, kendi düzlemlerinde yer değiştirebilir. ==Mozaik==: proteinler düzenli bir sıra hâlinde değil, dağınık yerleşmiştir.',
            focus: [
              {
                title: 'Fosfolipit çift tabaka',
                body: 'Zarın temel iskeleti. Kutuplu başlar dışarı ve içeri, kutupsuz kuyruklar ortaya bakar. Ortadaki kutupsuz bölge, kutuplu maddeler için aşılmaz bir engeldir — zarın seçiciliği buradan doğar.',
              },
              {
                title: 'Kanal proteini',
                body: 'Zarı boydan boya geçen ve ortasında su dolu bir gözenek bulunduran protein. İyonlar ve su gibi kutuplu maddeler, lipit bölgeye hiç değmeden bu gözenekten geçer.',
              },
              {
                title: 'Taşıyıcı protein',
                body: 'Taşıyacağı maddeye bağlanıp şekil değiştirerek onu karşı tarafa geçiren protein. Enzimler gibi **özgüldür**: glikoz taşıyıcısı amino asit taşımaz.',
              },
              {
                title: 'Kolesterol',
                body: 'Kuyruklar arasına yerleşmiş bir steroit. Görevi akışkanlığı dengelemek: sıcakta zarın fazla akışkanlaşmasını, soğukta fazla katılaşmasını engeller. Bitki hücresi zarında bulunmaz.',
              },
              {
                title: 'Karbonhidrat zincirleri',
                body: 'Yalnızca dış yüzeydeki proteinlere (glikoprotein) ve lipitlere (glikolipit) bağlıdır. Hücrenin kimliğini belirler; hücreler birbirini bu zincirlerden tanır. Kan gruplarının farkı da buradan gelir.',
              },
            ],
            audio_script: `Şemaya alttan üste doğru bak.

Önce mor toplar ve sarı kuyruklar. Bu çift tabakayı zaten tanıyorsun — temel bileşenler konusunda görmüştün. Zarın iskeleti bu.

Şimdi araya yerleşmiş mor blokları bul. Bunlar proteinler. Dikkat et: bazıları zarı boydan boya geçiyor, ortalarında bir kanal var. Bazıları ise dolu.

Ortada, kuyrukların arasında pembe küçük çubuklar var. Kolesterol. Yüzeyde değil, tam kuyrukların arasında olduğuna dikkat et — işini ancak orada yapabilir.

Son olarak sağ üstteki dallanmış yapıyı bul. Karbonhidrat zinciri. Ve şunu fark et: yalnızca üst tarafta, yani hücre dışında.

Bir saniye dur ve düşün: neden yalnızca dışarıda?

Çünkü işi tanınmak. Hücreyi dışarıdan gelen hücreler ve moleküller bu zincirlerden tanıyor. İçeride kimseye kendini tanıtmasına gerek yok.`,
          },
          {
            id: 'hz-yapi-prose',
            type: 'prose',
            body: `Modelin adındaki iki kelimeyi tek tek açalım, çünkü ikisi de sınavda ayrı ayrı sorulabilir.

**Akıcı:** Zarın bileşenleri çimentolanmış değildir. Fosfolipitler ve çoğu protein, zarın kendi düzlemi içinde ==yanlamasına hareket edebilir==. Bu yüzden zar yırtıldığında kendi kendini onarır, hücre bölünürken şekil değiştirebilir, endositozda içeri kıvrılabilir.

**Mozaik:** Proteinler zarın üzerinde düzenli bir desen oluşturmaz; farklı büyüklükte ve farklı görevde proteinler dağınık biçimde yerleşmiştir. Zarın her noktası aynı değildir.

Akışkanlığı belirleyen iki etken vardır: **sıcaklık** (arttıkça akışkanlık artar) ve **doymamış yağ asidi oranı** (arttıkça akışkanlık artar). İkincisinin sebebini geçen konudan biliyorsun: çift bağ zincire kıvrım verir, kıvrımlı zincirler birbirine tam oturamaz.`,
          },
          {
            id: 'hz-yapi-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Karbonhidrat zincirleri yalnızca zarın DIŞ yüzeyinde bulunur. “Zarın her iki yüzü de aynıdır” diyen bir öncül yanlıştır — zar asimetriktir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-gecirgenlik',
        kind: 'deepen',
        title: 'Seçici geçirgenlik: kim geçer, kim geçemez?',
        lead: 'Bu bölüm, zar konusundaki soruların büyük kısmını tek başına çözecek bir kural veriyor.',
        blocks: [
          {
            id: 'hz-gec-prose',
            type: 'prose',
            body: `Bir maddenin zardan kendiliğinden geçip geçemeyeceğini üç soruyla tahmin edebilirsin:

1. **Küçük mü?** Büyük moleküller zardan geçemez.
2. **Kutupsuz mu?** Kutupsuz maddeler kuyruk bölgesinden rahat geçer.
3. **Yağda çözünüyor mu?** Çözünüyorsa zaten kutupsuzdur, geçer.

Üçüne de "evet" diyorsan madde ==doğrudan== geçer. Bir tanesine bile "hayır" diyorsan madde ya protein aracılığıyla geçer ya da hiç geçemez.

Bu kuralın en şaşırtıcı sonucu şudur: **büyük ama kutupsuz** olan steroit hormonlar zardan rahatça geçerken, **çok daha küçük ama yüklü** olan sodyum iyonu geçemez. ==Zar boyuta değil, kimyasal kimliğe bakar.==`,
          },
          {
            id: 'hz-gec-figure',
            type: 'figure',
            kind: 'zar-gecirgenlik-yollari',
            width: 'full',
            title: 'Aynı zar, beş farklı karar',
            purpose:
              'Maddenin boyutu, kutupluluğu ve yüküne göre lipit tabaka, akuaporin, taşıyıcı, iyon kanalı ya da toplu taşıma yoluna yönelmesini tek levhada karşılaştırmak.',
            complexity: 'high',
            caption:
              'Zar “küçük olanı geçirir” gibi tek bir kuralla çalışmaz. ==Kimyasal yapı yolu belirler:== kutupsuz madde lipitten, su akuaporinden, glikoz taşıyıcıdan, iyon su dolu kanaldan geçer; makromolekül ise bu yolların hiçbirine sığmaz.',
            focus: [
              {
                title: 'Küçük ve kutupsuz',
                body: 'O₂ ve CO₂ doğrudan lipit çekirdekte çözünür. Protein kullanmadıkları için geçişleri özgül değildir ve taşıyıcı doygunluğu göstermez.',
              },
              {
                title: 'Su',
                body: 'Su küçük ama kutupludur. Az miktarı lipitten sızabilir; hızlı ve kontrollü geçişi akuaporin adı verilen seçici su kanallarından olur.',
              },
              {
                title: 'Glikoz',
                body: 'Glikoz yüksüz olmasına rağmen çok sayıda –OH grubu taşıdığı için kutupludur. Lipit çekirdeğe giremez; kendisine özgü taşıyıcının şekil değiştirmesiyle geçer.',
              },
              {
                title: 'İyonlar',
                body: 'Na⁺, K⁺ ve Cl⁻ küçük ama yüklüdür. Çevrelerinde bir su kılıfı taşırlar; yalnızca yüklerine ve boyutlarına uygun, içi su dolu kanallardan geçebilirler.',
              },
              {
                title: 'Makromoleküller',
                body: 'Protein ve polisakkaritler hem lipit çekirdeğe giremeyecek kadar kutuplu hem kanallara sığamayacak kadar büyüktür. Geçişleri vezikül ve zar biçim değişikliği gerektirir.',
              },
            ],
            audio_script: `Bu levhayı soldan sağa bir güvenlik kontrolü gibi oku.

Birinci molekül küçük ve kutupsuz. Zarın yağlı orta bölgesi onun için duvar değil; içinden geçiyor.

İkinci sırada su var. Küçük ama kutuplu. Hızlı geçmek için akuaporini kullanıyor.

Üçüncü sıradaki glikoz. Yüksüz ama kutuplu ve daha büyük. Açık bir tünelden değil, kendisine uyan taşıyıcının şekil değiştirmesiyle geçiyor.

Dördüncü sırada iyonlar. Çok küçük görünmelerine aldanma; yükleri ve su kılıfları onları lipit bölgeden uzak tutuyor. Uygun kanal açılmadan geçemezler.

Son sırada büyük protein var. Ne lipitten geçebilir ne dar bir kanala sığabilir. Bunun için zarın bütünüyle içeri kıvrıldığı başka bir mekanizma gerekir.

Şimdi kuralı söyle: yolun seçimini yalnız boyut değil, boyutla birlikte kutupluluk ve yük belirler.`,
          },
          {
            id: 'hz-gec-table',
            type: 'table',
            title: 'Zardan geçiş kolaylığı',
            columns: ['Madde', 'Özelliği', 'Nasıl geçer?'],
            rows: [
              ['O₂, CO₂, N₂', 'Küçük ve kutupsuz', 'Doğrudan lipit tabakadan — çok kolay'],
              ['Steroit hormonlar, yağ asitleri', 'Büyük ama kutupsuz', 'Doğrudan lipit tabakadan'],
              ['Su', 'Küçük ama kutuplu', 'Az miktarda doğrudan; asıl geçiş **akuaporin** kanallarından'],
              ['Glikoz, amino asit', 'Kutuplu ve orta büyüklükte', 'Taşıyıcı proteinle'],
              ['Na⁺, K⁺, Cl⁻', 'Küçük ama **yüklü**', 'Yalnızca kanal veya taşıyıcı proteinle'],
              ['Protein, nişasta', 'Çok büyük', 'Geçemez — endositoz/ekzositoz gerekir'],
            ],
            caption:
              'Üçüncü satıra dikkat: su küçük olmasına rağmen kutupludur. Yavaş da olsa doğrudan geçebilir, ama hızlı geçiş gereken hücrelerde (böbrek gibi) ==akuaporin== adı verilen özel su kanalları bulunur.',
          },
          {
            id: 'hz-gec-hydration',
            type: 'why',
            question: 'İyon, kendisinden daha büyük bir steroit molekülünden neden daha zor geçer?',
            body: `Çünkü iyon suda tek başına dolaşmaz. Yükü, çevresindeki su moleküllerini belirli bir yönde dizer ve bir ==hidratasyon kılıfı== oluşturur. İyonun lipit çekirdeğe girmesi için bu kararlı su çevresinden ayrılması gerekir; bu enerji bakımından çok elverişsizdir.

Steroit hormon ise büyük olmasına rağmen büyük ölçüde kutupsuzdur. Yağ benzeri zar çekirdeğinde çözünür ve öbür tarafa çıkar.

Bu karşılaştırma sınav için güçlü bir düzeltme yapar: ==geçiş kolaylığı molekül büyüklüğünün sıralaması değildir.== Kimyasal uyum çoğu zaman boyuttan daha belirleyicidir.`,
          },
          {
            id: 'hz-gec-trap',
            type: 'trap',
            title: 'Geçirgenliği yalnızca boyutla açıklamak',
            wrong: '“Küçük moleküller geçer, büyük moleküller geçemez” kuralını tek ölçüt olarak kullanmak.',
            right:
              'Belirleyici olan boyut kadar **kutupluluktur**. Sodyum iyonu oksijenden küçüktür ama yüklü olduğu için geçemez; steroit hormon glikozdan büyüktür ama kutupsuz olduğu için geçer.',
            body: 'Sınavda “aşağıdakilerden hangisi zardan enerji harcanmadan geçer?” sorusunda önce yükü ve kutupluluğu kontrol et, boyutu sonra.',
          },
          {
            id: 'hz-gec-checkpoint',
            type: 'checkpoint',
            prompt:
              'Bazı ilaçlar hap olarak alındığında hücre içine kolayca girer, bazıları ise iğneyle bile verilse hücreye giremez ve hücre dışındaki reseptörlere bağlanmak zorunda kalır. Bu farkı hangi özellik belirler?',
            hint: 'Molekülün zardan geçmesi için hangi bölgeden geçmesi gerekiyor ve o bölge nasıl bir ortam?',
            answer: `Belirleyici özellik molekülün ==kutupluluğu / yağda çözünürlüğü==.

Zarın ortasındaki kuyruk bölgesi kutupsuzdur. Yağda çözünen (kutupsuz) bir ilaç bu bölgeden rahatça geçip hücre içine girer ve içerideki hedefine ulaşabilir. Steroit yapılı ilaçlar bu gruptadır.

Kutuplu veya yüklü bir ilaç ise kuyruk bölgesini aşamaz. Böyle bir ilaç hücre içine giremez; etkisini ancak zarın **dış yüzeyindeki reseptörlere** bağlanarak gösterebilir — yani hücreye doğrudan girmek yerine ona dışarıdan sinyal verir.

Buradaki asıl ders şu: hücre zarının seçiciliği yalnızca biyoloji sorusu değil, ilaç tasarımının da temel kısıtı.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-pasif',
        kind: 'build',
        title: 'Pasif taşıma: enerji harcamadan geçiş',
        lead: 'Şimdi geçişin nasıl gerçekleştiğine bakıyoruz. Bu bölümde enerji harcanmayan iki yol var.',
        blocks: [
          {
            id: 'hz-pasif-concept',
            type: 'concept',
            term: 'Pasif taşıma',
            body: `Maddenin ==çok olduğu yerden az olduğu yere== doğru, hücre enerji harcamadan gerçekleşen geçiştir.

Buradaki enerji nereden geliyor? Hücreden değil, ==derişim farkının kendisinden==. Moleküller zaten sürekli ve rastgele hareket eder; çok yoğun bir bölgede bu hareket doğal olarak seyrek bölgeye doğru net bir akış yaratır.

Bu yüzden pasif taşıma "bedava"dır: hücrenin yapması gereken tek şey yolu açık tutmaktır.

İki biçimi vardır: **basit difüzyon** ve **kolaylaştırılmış difüzyon**.`,
          },
          {
            id: 'hz-pasif-figure',
            type: 'figure',
            kind: 'pasif-tasima',
            width: 'full',
            title: 'Basit ve kolaylaştırılmış difüzyon',
            purpose:
              'İki pasif taşıma biçiminin ortak yanını (ATP yok, çoktan aza) ve tek farkını (izlenen yol) yan yana göstermek.',
            complexity: 'medium',
            caption:
              'İkisi de ATP harcamaz ve ikisi de çoktan aza doğrudur. Tek fark **izlenen yoldur**: biri doğrudan lipit tabakadan, diğeri proteinden. ==“Kolaylaştırılmış” kelimesi enerji harcandığı anlamına gelmez.==',
            focus: [
              {
                title: 'Basit difüzyon',
                body: 'Küçük ve kutupsuz moleküller (O₂, CO₂, yağda çözünenler) doğrudan lipit tabakadan geçer. Herhangi bir protein gerekmez; bu yüzden geçiş hızının bir üst sınırı yoktur.',
              },
              {
                title: 'Kolaylaştırılmış difüzyon',
                body: 'Kutuplu moleküller ve iyonlar (glikoz, amino asit, Na⁺, K⁺) lipit bölgeden geçemedikleri için kanal veya taşıyıcı proteinden geçer. Yön yine çoktan aza doğrudur ve ATP harcanmaz.',
              },
              {
                title: 'Enerji kaynağı',
                body: 'Her iki durumda da hareketi sağlayan şey derişim farkıdır. Hücre bu geçiş için ATP üretmez; yalnızca gerekli proteinleri zarında bulundurur.',
              },
            ],
            audio_script: `Bu şemada iki panel var ama önce en üstteki satırı oku.

"İkisi de ATP harcamaz, ikisi de çoktan aza doğru."

Bu cümleyi aklında tut, çünkü şimdi göreceğin fark yalnızca yolla ilgili.

Sol panele bak. Moleküller doğrudan çift tabakadan geçiyor. Oksijen, karbondioksit, yağda çözünenler. Aralarında protein yok.

Sağ panele bak. Ortada bir protein var ve molekül oradan geçiyor. Glikoz gibi kutuplu bir molekül lipit bölgeden geçemediği için bu yolu kullanmak zorunda.

Şimdi durup şunu düşün: sağdaki geçiş enerji harcıyor mu?

Harcamıyor. Adında "kolaylaştırılmış" geçiyor diye enerji harcandığını sanma. Protein sadece bir kapı; molekülü iten şey hâlâ derişim farkı.`,
          },
          {
            id: 'hz-pasif-compare',
            type: 'compare',
            title: 'Basit ve kolaylaştırılmış difüzyon',
            columns: ['Basit difüzyon', 'Kolaylaştırılmış difüzyon'],
            rows: [
              { label: 'ATP harcanır mı?', values: ['Hayır', 'Hayır'] },
              { label: 'Yön', values: ['Çoktan aza', 'Çoktan aza'] },
              { label: 'Protein gerekir mi?', values: ['Hayır', 'Evet — kanal veya taşıyıcı'] },
              { label: 'Geçen maddeler', values: ['Küçük, kutupsuz, yağda çözünen', 'Kutuplu moleküller ve iyonlar'] },
              { label: 'Özgüllük', values: ['Yok', 'Var — protein maddesini seçer'] },
              { label: 'Doygunluk', values: ['Göstermez', 'Gösterir — proteinler dolabilir'] },
            ],
            insight:
              'İlk iki satır aynı, geri kalanlar farklı. ==Aradaki bütün farklar tek bir sebepten çıkıyor: protein kullanılması.== Protein kullanmak özgüllük getirir (her proteinin bir müşterisi vardır) ve bir tavan getirir (protein sayısı sınırlıdır).',
          },
          {
            id: 'hz-pasif-trap',
            type: 'trap',
            title: '“Kolaylaştırılmış difüzyon ATP harcar” sanmak',
            wrong: '“Protein kullanıldığına göre enerji de harcanıyordur” diye düşünmek.',
            right:
              'Protein kullanmak enerji harcamak demek değildir. Kolaylaştırılmış difüzyonda protein yalnızca **bir kapı** işlevi görür; molekülü iten güç hâlâ derişim farkıdır. ATP harcanan taşıma **aktif taşımadır** ve orada yön çoktan aza değil, ==azdan çoğa==dır.',
            body: 'Ayırt edici tek soruyu sor: madde hangi yöne gidiyor? Çoktan aza gidiyorsa pasiftir, protein olsun olmasın.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-grafik',
        kind: 'deepen',
        title: 'Grafikte fark: doğrusal artış mı, tavan mı?',
        lead: 'Bu grafik TYT’de doğrudan soruluyor ve mantığını zaten biliyorsun — enzimlerde aynısını görmüştün.',
        blocks: [
          {
            id: 'hz-graf-figure',
            type: 'figure',
            kind: 'difuzyon-hiz-grafigi',
            width: 'full',
            title: 'Derişim ve taşıma hızı',
            purpose:
              'İki difüzyon biçimini grafik üzerinden ayırt ettirmek ve doygunluğu enzim–substrat grafiğiyle aynı mantığa bağlamak.',
            complexity: 'medium',
            caption:
              'Basit difüzyonda hız derişimle birlikte ==doğrusal== artar. Kolaylaştırılmış difüzyonda ise taşıyıcı proteinlerin tamamı dolduğunda hız ==tavana vurur==. Enzim–substrat grafiğindeki doygunlukla birebir aynı sebep.',
            focus: [
              {
                title: 'Basit difüzyon',
                body: 'Yolu açan bir protein olmadığı için sınırlayıcı bir yapı da yoktur. Derişim farkı ne kadar artarsa hız o kadar artar; grafik düz bir doğru olarak yükselir.',
              },
              {
                title: 'Kolaylaştırılmış difüzyon',
                body: 'Başlangıçta hız hızla artar çünkü boş taşıyıcı vardır. Derişim arttıkça boş taşıyıcı azalır ve artış yavaşlar.',
              },
              {
                title: 'Doygunluk',
                body: 'Bütün taşıyıcılar sürekli dolu hâle geldiğinde hız sabitlenir. Bu noktadan sonra derişimi artırmak işe yaramaz; hızı artırmanın tek yolu ==zardaki taşıyıcı protein sayısını artırmaktır==.',
              },
            ],
            audio_script: `İki eğri var. Farkı bulmak için sonlarına bak.

Mavi eğri düz bir çizgi hâlinde yükselmeye devam ediyor. Bu basit difüzyon. Önünde bir engel yok, çünkü ortada protein yok.

Mor eğri ise bir yere kadar yükseliyor, sonra yataya oturuyor. Bu kolaylaştırılmış difüzyon.

Şimdi bir saniye dur ve şunu hatırlamaya çalış: bu eğriyi daha önce nerede gördün?

Enzimlerde. Substrat derişimi grafiğinde. Orada da eğri yataya oturuyordu.

Sebep aynı: sınırlı sayıda protein var. Enzimde aktif bölgeler doluyordu, burada taşıyıcılar doluyor. İki farklı konu gibi görünüyorlar ama tek bir fikrin iki görünümü.

Bu bağı kurduysan iki grafiği de bir daha karıştırmazsın.`,
          },
          {
            id: 'hz-graf-connection',
            type: 'connection',
            title: 'Aynı fikir, üçüncü kez',
            body:
              'Sınırlı sayıda protein varsa hız er ya da geç tavana vurur. Bu fikri enzim–substrat grafiğinde görmüştün, burada taşıyıcı proteinlerde görüyorsun; aktif taşımada bir kez daha göreceksin. Biyolojide aynı mantığın farklı konularda tekrar etmesi kural, istisna değil.',
            links: ['Proteinler ve enzimler — doygunluk', 'Hücre — aktif taşıma', 'AYT · Üriner sistem — geri emilim eşiği'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-hiz-denge',
        kind: 'deepen',
        title: 'Hızı ne değiştirir, denge ne demektir?',
        lead: '“Çoktan aza” yönü verir; fakat geçişin ne kadar hızlı olacağını ve ne zaman net akışın biteceğini ayrıca düşünmelisin.',
        blocks: [
          {
            id: 'hz-hiz-prose',
            type: 'prose',
            body: `Difüzyonun hızı tek bir etkene bağlı değildir. Molekülün zara ulaşma sıklığını, zarla karşılaşma alanını ve aşması gereken mesafeyi birlikte düşün.

**Derişim farkı büyürse:** Yoğun taraftan zara çarpan molekül sayısı artar; net geçiş hızlanır.

**Sıcaklık artarsa:** Moleküllerin kinetik enerjisi ve rastgele hareketi artar; uygun sınırlar içinde difüzyon hızlanır. Ancak çok yüksek sıcaklığın zar proteinlerinin yapısını bozabileceğini unutma.

**Yüzey alanı artarsa:** Aynı anda geçiş yapılabilecek alan büyür. Akciğer alveollerinin çok sayıda küçük kesecikten, ince bağırsak yüzeyinin villus ve mikrovilluslardan oluşmasının ortak mantığı budur.

**Geçiş mesafesi / zar kalınlığı artarsa:** Molekülün aşacağı yol uzar; hız azalır. Alveol ve kılcal damar duvarlarının tek katlı ince yapısı bu yüzden önemlidir.

Kolaylaştırılmış difüzyonda bunlara bir etken daha eklenir: ==kanal veya taşıyıcı sayısı.== Taşıyıcı sayısı arttığında aynı anda daha fazla molekül geçebilir ve grafikteki hız tavanı yukarı çıkar.`,
          },
          {
            id: 'hz-hiz-table',
            type: 'table',
            title: 'Difüzyon hızını öngörme tablosu',
            columns: ['Değişken', 'Değişim', 'Net etki'],
            rows: [
              ['Derişim farkı', 'Artar', 'Zara çarpan net molekül sayısı artar → hız artar'],
              ['Sıcaklık', 'Artar', 'Rastgele molekül hareketi artar → hız artar'],
              ['Zar yüzey alanı', 'Artar', 'Aynı anda daha çok geçiş noktası oluşur → hız artar'],
              ['Geçiş mesafesi', 'Artar', 'Aşılacak yol uzar → hız azalır'],
              ['Taşıyıcı sayısı', 'Artar', 'Yalnız proteinli taşımada kapasite ve tavan artar'],
            ],
            caption:
              'Soruda alveol, villus, kılcal damar veya krista gibi kıvrımlı/geniş yüzeyler görürsen ilk bağlantın ==yüzey alanı ve hız== olsun.',
          },
          {
            id: 'hz-denge-why',
            type: 'why',
            question: 'Dengeye gelince moleküller hareket etmeyi bırakır mı?',
            body: `Hayır. Difüzyon dengesi ==dinamik dengedir==.

İki taraftaki derişim eşitlendiğinde moleküller termal hareketlerini sürdürür; zardan iki yönde de geçiş olur. Fakat birim zamanda soldan sağa geçenlerin sayısı, sağdan sola geçenlerin sayısına eşittir. Bu yüzden **net değişim sıfırdır**.

“Geçiş durdu” ile “net geçiş durdu” aynı şey değildir. Sınavda “denge hâlinde molekül hareketi sonlanır” öncülü verilirse yanlış kabul et. Doğru ifade: ==denge hâlinde karşılıklı geçiş sürer, net akış kalmaz.==`,
          },
          {
            id: 'hz-hiz-checkpoint',
            type: 'checkpoint',
            prompt:
              'Aynı kalınlıkta iki yapay zar düşün. B zarının yüzey alanı A’nın iki katı ve taşıyıcı protein sayısı da iki katı. Her iki zarın iki tarafında aynı glikoz derişim farkı var. Başlangıçtaki kolaylaştırılmış difüzyon hızlarını nasıl karşılaştırırsın?',
            hint: 'Kolaylaştırılmış difüzyonda eş zamanlı geçiş kapasitesini hangi iki özellik büyütüyor?',
            answer: `B zarında başlangıç hızı daha yüksektir. Çünkü hem daha geniş yüzey, hem de daha fazla taşıyıcı aynı anda daha çok glikozun bağlanıp geçmesine izin verir.

Ancak “kesin dört kat hızlıdır” deneme. Soruda taşıyıcıların yerleşimi, bağlanma süresi ve zarın başka özellikleri verilmediği için sayısal çarpan çıkaramayız. Güvenli sonuç yalnızca ==B’de hız ve ulaşılabilecek maksimum taşıma kapasitesi daha yüksektir== biçimindedir.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün en çok puan kaybettiren noktalarını hedefliyor.',
        blocks: [
          {
            id: 'hz-uyg-worked',
            type: 'worked_example',
            title: 'Geçiş yolunu belirleme',
            prompt:
              'Bir hücre dört maddeye maruz bırakılıyor: (I) oksijen, (II) sodyum iyonu, (III) steroit hormon, (IV) glikoz. Hücre dışındaki derişimleri hücre içinden yüksek. Bu maddelerin hangileri hücreye ATP harcanmadan ve protein kullanılmadan girebilir?',
            steps: [
              {
                title: 'Önce yönü kontrol et',
                body: 'Dört maddede de dış derişim yüksek. Yani hepsi için içeri doğru geçiş, çoktan aza doğrudur — ATP gerekmez. Soruyu belirleyen şey ATP değil, **protein gerekip gerekmediği**.',
              },
              {
                title: 'Her maddenin kutupluluğunu sorgula',
                body: 'Oksijen: küçük ve kutupsuz. Sodyum iyonu: küçük ama **yüklü**. Steroit hormon: büyük ama **kutupsuz**. Glikoz: orta boy ve **kutuplu**.',
              },
              {
                title: 'Lipit bölgeden geçebilenleri ayır',
                body: 'Kutupsuz olanlar kuyruk bölgesinden geçer: oksijen ve steroit hormon. Yüklü ve kutuplu olanlar geçemez: sodyum iyonu ve glikoz.',
              },
              {
                title: 'Kalanların yolunu belirle',
                body: 'Sodyum iyonu ve glikoz kolaylaştırılmış difüzyonla, yani **protein aracılığıyla** girer. ATP yine harcanmaz ama protein gereklidir.',
              },
            ],
            answer: 'Yalnızca I (oksijen) ve III (steroit hormon). Sodyum iyonu ve glikoz protein kullanmak zorundadır.',
            takeaway:
              'Bu soru tipinde iki ayrı ölçütü karıştırma: **ATP gerekip gerekmediğini yön** belirler (çoktan aza mı, azdan çoğa mı), **protein gerekip gerekmediğini kutupluluk** belirler. İkisi bağımsız sorulardır.',
          },
          {
            id: 'hz-uyg-quiz1',
            type: 'quiz',
            purpose: 'error',
            question: 'Kolaylaştırılmış difüzyon için aşağıdakilerden hangisi **yanlıştır**?',
            options: [
              'Taşıyıcı veya kanal proteini kullanılır',
              'Madde çok olduğu yerden az olduğu yere geçer',
              'ATP harcanır',
              'Belirli bir derişimden sonra hız sabitlenir',
            ],
            answer_index: 2,
            explanation: `Yanlış ifade **C**. Kolaylaştırılmış difüzyon bir **pasif taşımadır**; ATP harcanmaz. Molekülü hareket ettiren güç derişim farkıdır, protein yalnızca yolu açar.

Diğerleri doğru:
- **A:** Kutuplu maddeler lipit bölgeden geçemediği için protein gerekir.
- **B:** Pasif taşımanın tanımı budur.
- **D:** Taşıyıcılar dolduğunda doygunluk oluşur ve hız tavana vurur.

Ayırt edici soru şu: madde hangi yöne gidiyor? ==Çoktan aza gidiyorsa ATP yoktur==, protein olsa bile.`,
          },
          {
            id: 'hz-uyg-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir hücrede X maddesinin taşınma hızı, madde derişimi artırıldıkça bir noktadan sonra sabit kalıyor. Bu gözlem için aşağıdakilerden hangisi söylenebilir?',
            options: [
              'X basit difüzyonla taşınmaktadır',
              'X’in taşınması için protein kullanılmaktadır',
              'X kutupsuz bir moleküldür',
              'Hücre X için ATP harcamayı durdurmuştur',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Hızın bir tavana ulaşması, sınırlı sayıda bir yapının doyduğunu gösterir. Taşımada bu yapı **proteindir**.

- **A yanlış:** Basit difüzyonda protein yoktur, dolayısıyla doygunluk da yoktur; grafik doğrusal artar.
- **C yanlış:** Kutupsuz olsaydı lipit tabakadan geçerdi ve doygunluk görülmezdi.
- **D yanlış:** Grafik ATP hakkında bilgi vermez. Doygunluk hem kolaylaştırılmış difüzyonda hem aktif taşımada görülür.

Dikkat: doygunluk tek başına taşımanın **pasif mi aktif mi** olduğunu söylemez; yalnızca **protein kullanıldığını** söyler.`,
          },
          {
            id: 'hz-uyg-quiz3',
            type: 'quiz',
            purpose: 'concept',
            question: 'Hücre zarı ile ilgili aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Karbonhidrat zincirleri zarın her iki yüzünde de bulunur',
              'Kolesterol zarın dış yüzeyine tutunmuştur',
              'Zarın iki yüzü yapı bakımından birbirinden farklıdır',
              'Proteinler zar üzerinde düzenli sıralar hâlinde dizilmiştir',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Zar **asimetriktir**: karbonhidrat zincirleri yalnızca dış yüzeyde bulunur, bazı proteinler yalnızca bir yüzde yer alır.

- **A yanlış:** Karbonhidratlar yalnızca dış yüzeydedir; görevleri tanınmaktır.
- **B yanlış:** Kolesterol yüzeyde değil, **kuyruklar arasındadır**; akışkanlığı ancak orada düzenleyebilir.
- **D yanlış:** Modelin adındaki “mozaik” tam da bunun tersini söyler — proteinler dağınık yerleşmiştir.`,
          },
          {
            id: 'hz-uyg-quiz4',
            type: 'quiz',
            purpose: 'transfer',
            question:
              'Bir deneyde zarın iki tarafındaki X maddesi derişimi eşitleniyor. Denge kurulduktan sonra X molekülleri için hangisi doğrudur?',
            options: [
              'Moleküllerin hareketi tamamen durur',
              'Yalnız hücre dışından içeri geçiş sürer',
              'İki yöndeki geçiş sayıları eşitlenir ve net akış sıfır olur',
              'Dengeyi korumak için mutlaka ATP harcanır',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Difüzyon dengesi **dinamik dengedir**. Moleküller rastgele hareket etmeyi ve iki yönde geçmeyi sürdürür; ancak birim zamanda iki yönde geçen molekül sayısı eşit olduğu için ölçülebilir net değişim kalmaz.

“Hareket durur” ifadesi yanlıştır. Duran şey molekül hareketi değil, ==net akıştır==.`,
          },
          {
            id: 'hz-uyg-quiz5',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Kolaylaştırılmış difüzyon hızını doygunluk noktasında artırmak isteyen bir araştırmacı aşağıdakilerden hangisini yapmalıdır?',
            options: [
              'Dış ortama daha fazla taşınan madde eklemek',
              'Zardaki uygun taşıyıcı protein sayısını artırmak',
              'Maddenin yönünü azdan çoğa çevirmek',
              'Taşıyıcıların tamamını kapatmak',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Doygunlukta mevcut taşıyıcıların tamamı çalışmaktadır. Dışarıya daha fazla madde eklemek boş taşıyıcı oluşturmaz; yalnız bekleyen molekül sayısını artırır.

Taşıyıcı sayısı artırıldığında aynı anda daha fazla bağlanma ve geçiş gerçekleşir. Böylece grafikteki maksimum hız, yani ==taşıma tavanı yukarı çıkar==.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'hz-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'hz-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Zarın çözdüğü problem: aynı anda hem **kapalı** hem **geçirgen** olmak.',
              'Fosfolipit çift tabaka bu problemi kendiliğinden çözer; kutupsuz kuyruk bölgesi hem bariyer hem kapıdır.',
              '**Akıcı**: bileşenler kendi düzleminde yer değiştirebilir. **Mozaik**: proteinler dağınık yerleşmiştir.',
              'Kolesterol kuyruklar arasındadır ve akışkanlığı dengeler; bitki hücresi zarında bulunmaz.',
              'Karbonhidrat zincirleri yalnızca **dış yüzeydedir** ve hücrenin tanınmasını sağlar — zar asimetriktir.',
              'Geçişi belirleyen şey boyut kadar **kutupluluktur**: steroit geçer, sodyum iyonu geçemez.',
              'Pasif taşımada yön daima **çoktan aza**dır ve hücre ATP harcamaz.',
              'Basit difüzyonda protein yoktur; kolaylaştırılmışta protein vardır ama ATP yine yoktur.',
              'Protein kullanmak iki sonuç doğurur: **özgüllük** ve **doygunluk**.',
              'Doygunluk grafiği, enzim–substrat grafiğiyle aynı sebebe dayanır: sınırlı sayıda protein.',
              'Difüzyon; derişim farkı, sıcaklık ve yüzey alanı arttıkça hızlanır; geçiş mesafesi arttıkça yavaşlar.',
              'Denge moleküllerin durması değil, iki yönlü geçişlerin eşitlenmesi ve **net akışın sıfırlanmasıdır**.',
            ],
          },
          {
            id: 'hz-kap-memory',
            type: 'memory',
            body:
              'İki ayrı soruyu ayrı ayrı sor: *Hangi yöne gidiyor?* → ATP gerekip gerekmediğini söyler. *Kutuplu mu?* → protein gerekip gerekmediğini söyler. Bu ikisi birbirinden bağımsızdır.',
          },
          {
            id: 'hz-kap-next',
            type: 'next_step',
            body: `Sıradaki bölümde suyun geçişine ayrı bir başlık açacağız: **osmoz**.

Su özel bir durum çünkü hem küçük hem kutuplu. Ayrıca suyun hareketi hücrenin şeklini doğrudan değiştirir — bitki hücresi ile hayvan hücresi aynı ortamda bambaşka tepkiler verir. TYT’de bu konudan neredeyse her yıl soru geliyor.`,
            topics: ['Osmoz ve hücrenin su dengesi', 'Aktif taşıma ve toplu taşıma'],
          },
          {
            id: 'hz-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. İki kontrol yap.

Bir: sodyum iyonu oksijenden küçük. Buna rağmen neden zardan geçemiyor?

Yüklü olduğu için diyebiliyorsan tamam.

İki: kolaylaştırılmış difüzyon ATP harcar mı?

Hayır diyebiliyorsan tamam.

Bu ikisine cevap verebiliyorsan osmoza geçebilirsin. Veremiyorsan ilgili bölüme dön — sıradaki konu bunların üzerine kurulacak.`,
          },
        ],
      },
    ],
  },
}
