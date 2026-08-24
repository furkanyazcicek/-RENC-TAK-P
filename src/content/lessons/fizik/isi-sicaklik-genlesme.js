const isiSicaklikGenlesme = {
  slug: 'isi-sicaklik-genlesme',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Isı, Sıcaklık ve Genleşme' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '5. Konu',
  title: 'Isı, Sıcaklık ve Genleşme',
  subtitle: 'Tanecik hareketinden enerji aktarımına, hâl değişiminden genleşme payına kadar termal olayları tek bir enerji modeliyle kur.',
  document: {
    version: 2,
    estimated_minutes: 82,
    prerequisites: [
      { topic: 'Madde ve Özellikleri', why: 'Tanecikli yapı, hâl değişimi ve özkütle termal olayların mikroskobik temelidir.' },
      { topic: 'Enerji ve birimler', why: 'Isı bir enerji aktarımıdır; joule ve kalori birimleri arasındaki ilişkiyi kullanacağız.' },
      { topic: 'Oran ve grafik okuma', why: 'Q–T ve T–zaman grafiklerinde eğim, yatay bölge ve alan yorumlanır.' },
    ],
    outcomes: [
      'Isı, sıcaklık ve iç enerji kavramlarını birbirinden ayırabileceksin.',
      'Termometrenin çalışmasını ısıl denge ve ölçeklendirme ile açıklayabileceksin.',
      'Q=mcΔT ve Q=mL ilişkilerini doğru fiziksel sürece uygulayabileceksin.',
      'Yalıtılmış sistemlerde verilen ve alınan ısıları enerji korunumu ile denkleştirebileceksin.',
      'İletim, taşınım ve ışıma mekanizmalarını günlük düzeneklerde ayırt edebileceksin.',
      'Katılarda boyca, yüzeyce ve hacimce genleşmeyi değişkenleriyle yorumlayabileceksin.',
      'Suyun 0–4 °C arasındaki olağan dışı genleşmesini ve doğadaki sonucunu açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'termal-sezgi',
        kind: 'opening',
        title: 'Sıcak olan neye sahip, soğuyan neyi kaybediyor?',
        lead: 'Bir fincan kahve masada soğurken enerji yok olmaz; kahveden daha soğuk çevreye aktarılır. Konunun merkezinde “nesnede bulunan ısı” değil, sıcaklık farkının sürüklediği enerji geçişi vardır.',
        blocks: [
          {
            id: 'termal-opening-prose',
            type: 'prose',
            body: `Elini aynı odada beklemiş metal ve ahşap yüzeye koyduğunda metal daha soğuk hissedilir. Oysa yeterince bekledilerse ikisinin sıcaklığı da odanın sıcaklığına eşittir. Metalin soğuk hissedilmesinin nedeni elinden enerjiyi ahşaptan daha hızlı iletmesidir. Demek ki dokunma hissi yalnız sıcaklığı değil, **enerji aktarım hızını** da algılar.

**Sıcaklık**, bir sistemin termal durumunu belirleyen ve enerji aktarımının yönünü öngörmemizi sağlayan temel bir büyüklüktür. İdeal gaz modelinde taneciklerin ortalama öteleme kinetik enerjisiyle doğrudan ilişkilidir. Katı ve sıvılarda taneciklerin titreşimleri ve etkileşimleri de iç enerjiye katılır; bu yüzden “sıcaklık toplam enerjidir” demek doğru değildir.

**Isı**, sıcaklık farkı nedeniyle bir sistemden başka bir sisteme aktarılan enerjidir. Bir cismin içinde depolanan büyüklüğe “ısı” değil **iç enerji** denir. Sıcak cisim soğuk cisme enerji verirken sıcak cismin iç enerjisi azalır, soğuk cismin iç enerjisi artar. Sıcaklıklar eşitlendiğinde net enerji aktarımı durur ve **ısıl denge** kurulur.

Aynı sıcaklıktaki bir bardak ve bir kazan su aynı termal durumda olabilir; fakat kazanın kütlesi büyük olduğu için iç enerjisi ve sıcaklığını değiştirmek için gereken enerji genellikle daha büyüktür. Sıcaklık “ne kadar sıcak?” sorusuna, ısı ise yalnız bir aktarım sürecinde “ne kadar enerji geçti?” sorusuna yanıt verir.`,
          },
          {
            id: 'termal-why',
            type: 'why',
            question: 'Neden iki cisim aynı sıcaklıkta olduğu hâlde farklı miktarda enerji verebilir?',
            body: 'Sıcaklık cismin kütlesini veya madde türünü içermez. Aktarılabilecek enerji; tanecik sayısına, maddenin özgül ısısına, bulunduğu hâle ve son duruma bağlıdır. Aynı sıcaklıktaki büyük su kütlesi, küçük su kütlesine göre aynı miktar soğurken daha fazla enerji verir.',
          },
          {
            id: 'termal-concept-map',
            type: 'concept_map',
            title: 'Termal fiziğin kavram haritası',
            intro: 'Sıcaklık farkı süreci başlatır; enerji aktarımı sıcaklığı, hâli veya boyutları değiştirebilir.',
            nodes: [
              { id: 'sicaklik', label: 'Sıcaklık', detail: 'Termal durum ve aktarım yönü' },
              { id: 'isi', label: 'Isı', detail: 'Sıcaklık farkıyla geçen enerji' },
              { id: 'ic', label: 'İç enerji', detail: 'Taneciklerin mikroskobik enerji toplamı' },
              { id: 'denge', label: 'Isıl denge', detail: 'Net ısı akışının durması' },
              { id: 'hal', label: 'Hâl değişimi', detail: 'Enerjinin bağları dönüştürmesi' },
              { id: 'genlesme', label: 'Genleşme', detail: 'Ortalama tanecik uzaklığının değişmesi' },
            ],
            links: [
              { from: 'sicaklik', to: 'isi', label: 'fark oluşturur' },
              { from: 'isi', to: 'ic', label: 'değiştirir' },
              { from: 'isi', to: 'denge', label: 'dengeye ilerler' },
              { from: 'isi', to: 'hal', label: 'gizli ısı' },
              { from: 'sicaklik', to: 'genlesme', label: 'boyutu etkiler' },
            ],
            caption: 'Isı ve sıcaklık aynı tür büyüklük değildir: ısı joule, sıcaklık kelvin veya derece Celsius ile ifade edilir.',
          },
          {
            id: 'termal-opening-trap',
            type: 'trap',
            title: 'Cisimde “ısı vardır” deme',
            wrong: '“Sıcak cismin ısısı fazladır; soğuk cisimde daha az ısı bulunur.”',
            right: 'Cisim termal ve iç enerjiye sahiptir. Isı, sıcaklık farkı nedeniyle sınırdan geçen enerjinin adıdır.',
            body: 'Bir süreç sona erip denge kurulduğunda “aktarılan ısı” denebilir; fakat ısıyı cismin depoladığı bir madde gibi düşünme.',
          },
        ],
      },
      {
        id: 'termal-atlas-section',
        kind: 'build',
        title: 'Termal olaylar atlası: tanecikten mühendisliğe',
        lead: 'Aynı enerji fikri termometrede, kalorimetrede, ısı aktarımında ve ray boşluğunda farklı ölçeklerde görünür.',
        blocks: [
          {
            id: 'termal-atlas',
            type: 'figure',
            width: 'full',
            title: 'Isı, sıcaklık ve genleşmenin dört fiziksel sahnesi',
            purpose: 'Isıl denge, ısı aktarım yolları, kalorimetri ve genleşme uygulamalarını tek bilimsel levhada karşılaştırmak.',
            complexity: 'high',
            kind: 'fizik-termal-atlas',
            caption: 'Enerji sıcaktan soğuğa aktarılır; aktarım dengeye ulaşırken sıcaklığı veya hâli değiştirir. Sıcaklık değişimi de malzeme boyutlarında ölçülebilir fark yaratır.',
            focus: [
              { title: 'Isıl denge', body: 'Farklı tanecik hareketleri enerji alışverişiyle ortak sıcaklığa yaklaşır.' },
              { title: 'Aktarım yolları', body: 'Katıda iletim, akışkanda taşınım ve boşlukta da ilerleyebilen ışımayı ayır.' },
              { title: 'Kalorimetri', body: 'Yalıtılmış kapta sıcak tarafın verdiği enerji soğuk tarafın aldığı enerjiye eşittir.' },
              { title: 'Genleşme payı', body: 'Ray aralığı ve bimetal şerit, farklı genleşme miktarlarının mühendislik sonucunu gösterir.' },
            ],
          },
          {
            id: 'termal-temperature-compare',
            type: 'compare',
            title: 'Isı, sıcaklık ve iç enerjiyi ayır',
            columns: ['Isı', 'Sıcaklık', 'İç enerji'],
            rows: [
              { label: 'Fiziksel anlam', values: ['Sıcaklık farkıyla aktarılan enerji', 'Termal durumu belirleyen temel büyüklük', 'Mikroskobik kinetik ve potansiyel enerjilerin toplamı'] },
              { label: 'Sembol / birim', values: ['Q; J veya cal', 'T; K, °C', 'U; J'] },
              { label: 'Kütleye bağlılık', values: ['Aktarılan miktar sürece bağlı', 'Doğrudan kütleye bağlı değil', 'Madde miktarı arttıkça genellikle artar'] },
              { label: 'Yön', values: ['Net olarak sıcaktan soğuğa', 'Yönü yoktur', 'Bir durum özelliğidir'] },
            ],
            insight: 'Bir cismin sıcaklığını bilmek, kütlesini ve madde türünü bilmeden iç enerjisini belirlemeye yetmez.',
          },
        ],
      },
      {
        id: 'termometre-denge',
        kind: 'build',
        title: 'Termometre, sıcaklık ölçekleri ve sıfırıncı yasa',
        lead: 'Termometre sıcaklığı anında okumaz; ölçülen sistemle enerji alışverişi yaparak dengeye gelir.',
        blocks: [
          {
            id: 'termometre-prose',
            type: 'prose',
            body: `Bir termometrenin çalışması iki fikre dayanır: sıcaklıkla düzenli değişen bir **termometrik özellik** ve bilinen referans noktalarıyla yapılan **ölçeklendirme**. Sıvılı termometrede sütun uzunluğu, metal termometrede elektrik direnci, gazlı termometrede basınç veya hacim sıcaklıkla değişebilir.

Termometre cisme temas ettiğinde başlangıçta farklı sıcaklıktadır. Aralarında enerji alışverişi olur ve yeterli süre sonra aynı sıcaklığa gelirler. Termometrenin gösterdiği değer bu ortak denge sıcaklığıdır. Termometrenin ısı kapasitesi çok büyük olursa ölçtüğü cismin sıcaklığını belirgin değiştirir; iyi termometre sistemi az etkiler ve hızlı dengeye gelir.

Termodinamiğin sıfırıncı yasası şöyle ifade edilir: A sistemi C ile, B sistemi de C ile ayrı ayrı ısıl dengedeyse A ile B de birbiriyle ısıl dengededir. Burada C termometre olabilir. Bu geçişlilik, farklı cisimlere aynı sıcaklık sayısını atamamızı sağlar.

Celsius ölçeğinde suyun normal basınçtaki donma ve kaynama noktaları geleneksel olarak 0 ve 100 °C yakınında işaretlenir. Kelvin mutlak sıcaklık ölçeğidir; $T(K)=t(\degree C)+273{,}15$ bağıntısı kullanılır. Bir Celsius derece farkı ile bir kelvin farkı aynı büyüklüktedir. 20 °C iki katı 40 °C diye “iki kat sıcak” yorumu yapılamaz; oran yorumu mutlak Kelvin ölçeğinde anlamlıdır.`,
          },
          {
            id: 'temperature-scale-formula',
            type: 'formula',
            title: 'Celsius–Kelvin dönüşümü',
            latex: 'T(K) = t(^{\circ}C) + 273{,}15',
            meaning: 'Skalaların başlangıç noktaları farklı, eşit aralıkları aynıdır. Sıcaklık farkında ΔT(K)=Δt(°C).',
            variables: [
              { sym: 'T', desc: 'Mutlak sıcaklık; kelvin' },
              { sym: 't', desc: 'Celsius sıcaklığı; °C' },
            ],
          },
          {
            id: 'termometer-worked',
            type: 'worked_example',
            title: 'Doğrusal ölçeklendirilmiş X termometresi',
            prompt: 'X termometresi suyun donma noktasında 20 °X, kaynama noktasında 170 °X gösteriyor. 40 °C kaç °X olur?',
            steps: [
              { title: 'Aralık oranını kur', body: 'Celsius’ta 100 birime karşı X’te $170-20=150$ birim vardır.' },
              { title: 'Başlangıç değerini koru', body: '$X-20=(150/100)\cdot C$.' },
              { title: '40 °C’yi yerleştir', body: '$X=20+1{,}5\times40=80\,\degree X$.' },
            ],
            answer: 'X termometresi 80 °X gösterir.',
            takeaway: 'Sadece aralıkları oranlamak yetmez; sıfır noktaları farklıysa başlangıç kaymasını ekle.',
          },
          {
            id: 'kelvin-trap',
            type: 'trap',
            title: 'Celsius değerlerini oranlama',
            wrong: '“40 °C, 20 °C’nin iki katı sıcaktır.”',
            right: 'Oran karşılaştırması mutlak sıcaklıkla yapılır: 313 K, 293 K’nin iki katı değildir.',
            body: 'Celsius ölçeğinin sıfırı enerjinin en düşük durumu değildir; yalnızca seçilmiş referans noktasıdır.',
          },
        ],
      },
      {
        id: 'isi-sigasi-kalorimetri',
        kind: 'deepen',
        title: 'Isı sığası, özgül ısı ve kalorimetri',
        lead: 'Aynı enerji farklı maddelerin sıcaklığını aynı miktarda değiştirmez; madde türü ve kütle sonucu birlikte belirler.',
        blocks: [
          {
            id: 'specific-heat-prose',
            type: 'prose',
            body: `Bir maddenin birim kütlesinin sıcaklığını 1 °C değiştirmek için gereken enerjiye **özgül ısı** denir ve $c$ ile gösterilir. Aynı kütle ve aynı enerji için özgül ısısı küçük maddenin sıcaklığı daha fazla değişir. Suyun özgül ısısı birçok maddeye göre büyüktür; bu nedenle denizler gündüz ve yaz mevsiminde enerjiyi yavaşça depolar, gece ve kışın yavaşça verir.

Bir cismin tamamının sıcaklığını 1 °C değiştirmek için gereken enerji **ısı sığasıdır**: $C=mc$. Özgül ısı maddeyi ayırt etmeye yardımcı olan birim kütle özelliğidir; ısı sığası ise cismin kütlesine de bağlıdır. Aynı maddeden büyük cismin ısı sığası daha büyüktür.

Hâl değişimi olmayan bir aralıkta aktarılan enerji $Q=mc\Delta T$ ile bulunur. Bu ifade sıcaklığın zamana göre nasıl değiştiğini tek başına söylemez; ısıtıcının gücü ve çevreye kayıplar da zamanı belirler. Sabit güçte ve kayıpsız düzende $Q=Pt$ olduğundan $\Delta T=Pt/(mc)$ olur.

Yalıtılmış bir kalorimetrede sistem dışarıyla enerji alışverişi yapmaz. Enerji korunumu gereği sıcak maddelerin verdiği enerji, soğuk maddelerin ve kalorimetre kabının aldığı enerjiye eşittir. “Verilen ısı + alınan ısı = 0” işaretli yazımı veya büyüklüklerle “veren = alan” yazımı kullanılabilir. Son denge sıcaklığı, hâl değişimi yoksa başlangıç sıcaklıklarının arasında olmalıdır.`,
          },
          {
            id: 'heat-formula',
            type: 'formula',
            title: 'Sıcaklık değişiminde enerji aktarımı',
            latex: 'Q = m\,c\,\Delta T',
            meaning: 'Hâl değişimi yokken gereken enerji kütle, özgül ısı ve sıcaklık değişiminin büyüklüğüyle doğru orantılıdır.',
            variables: [
              { sym: 'Q', desc: 'Aktarılan enerji; J veya cal' },
              { sym: 'm', desc: 'Kütle; kg ya da g' },
              { sym: 'c', desc: 'Özgül ısı; J/(kg·K) veya cal/(g·°C)' },
              { sym: 'ΔT', desc: 'Son ve ilk sıcaklık farkı; K ya da °C' },
            ],
          },
          {
            id: 'thermal-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Isıl denge ve karışım laboratuvarı',
            caption: 'Aynı maddede denge sıcaklığı kütlece ağırlıklı ortalamadır. Kütlesi büyük olan taraf son sıcaklığı kendine daha çok yaklaştırır.',
            purpose: 'Kütle ve başlangıç sıcaklıklarını değiştirerek enerji korunumu ve ısıl dengeyi gerçek zamanlı gözlemlemek.',
            data: { mode: 'thermal', title: 'Karışımda enerji nereye gider?', initialHotMass: 200, initialColdMass: 300, initialHotTemperature: 80, initialColdTemperature: 20, specificHeat: 4.18 },
          },
          {
            id: 'calorimetry-worked',
            type: 'worked_example',
            title: 'Farklı kütlede iki suyu karıştırmak',
            prompt: 'Yalıtılmış kapta 200 g, 80 °C su ile 300 g, 20 °C su karıştırılıyor. Kabın ısı sığası önemsizse denge sıcaklığı nedir?',
            steps: [
              { title: 'Enerji yönünü belirle', body: '80 °C su enerji verir; 20 °C su enerji alır. Son sıcaklık 20 ile 80 arasındadır.' },
              { title: 'Vereni alana eşitle', body: '$200c(80-T_f)=300c(T_f-20)$. Aynı madde olduğundan c sadeleşir.' },
              { title: 'Denklemi çöz', body: '$16000-200T_f=300T_f-6000$; $T_f=44\,\degree C$.' },
            ],
            answer: 'Denge sıcaklığı 44 °C olur.',
            takeaway: 'Soğuk suyun kütlesi daha büyük olduğu için sonuç 20 °C’ye daha yakındır; 50 °C aritmetik ortalaması yanlıştır.',
          },
          {
            id: 'specific-heat-quiz',
            type: 'quiz',
            question: 'Eşit kütleli K ve L katılarına eşit enerji veriliyor. Hâl değişimi yokken K’nin sıcaklık artışı L’ninkinin iki katıysa ne söylenebilir?',
            options: ['K’nin özgül ısısı L’ninkinin iki katıdır', 'L’nin özgül ısısı K’ninkinin iki katıdır', 'Isı sığaları eşittir', 'K’nin kütlesi daha büyüktür'],
            answer_index: 1,
            explanation: '$\Delta T=Q/(mc)$ olduğundan eşit Q ve m için sıcaklık artışı özgül ısıyla ters orantılıdır. K iki kat ısınıyorsa $c_K=c_L/2$ olur.',
            purpose: 'concept',
          },
        ],
      },
      {
        id: 'hal-degisimi',
        kind: 'deepen',
        title: 'Hâl değişimi ve ısıtma grafikleri',
        lead: 'Enerji aktarımı her zaman sıcaklığı artırmaz; bazen tanecikler arası bağların ve düzenin değişmesine harcanır.',
        blocks: [
          {
            id: 'phase-change-prose',
            type: 'prose',
            body: `Saf bir madde sabit basınçta erirken veya kaynarken enerji almaya devam ettiği hâlde sıcaklığı sabit kalabilir. Gelen enerji taneciklerin ortalama kinetik enerjisini artırmak yerine aralarındaki etkileşimleri aşmaya ve potansiyel enerjiyi değiştirmeye gider. Bu nedenle hâl değişimi sırasında iç enerji artarken sıcaklık sabit kalabilir.

Bir maddenin birim kütlesinin hâlini sabit sıcaklıkta değiştirmek için gereken enerjiye **özgül hâl değiştirme ısısı** denir. Erime–donma için $L_e$, buharlaşma–yoğuşma için $L_b$ kullanılır. Aynı madde ve aynı basınçta erime için alınan enerji, donarken verilen enerjiye büyüklükçe eşittir.

Bir ısıtma grafiğinde eğik bölgeler tek hâlde sıcaklık değişimini, yatay bölgeler iki hâlin birlikte bulunduğu hâl değişimini gösterir. Sabit güçlü ısıtıcıda yatay bölgenin zaman uzunluğu hâl değişimi enerjisiyle orantılıdır. Eğik bölgenin eğimi ise $P/(mc)$ olduğundan kütle veya özgül ısı büyüdükçe azalır.

Buharlaşma yalnız kaynama noktasında değil her sıcaklıkta yüzeyden gerçekleşebilir. En yüksek enerjili taneciklerin sıvıdan ayrılması, geride kalanların ortalama kinetik enerjisini azaltır ve **buharlaşma ile soğuma** oluşur. Rüzgâr ve kuru hava buharı yüzeyden uzaklaştırarak buharlaşmayı hızlandırır; sıvı yüzeyinin büyümesi de hızı artırır.`,
          },
          {
            id: 'latent-heat-formula',
            type: 'formula',
            title: 'Hâl değişiminde enerji',
            latex: 'Q = m\,L',
            meaning: 'Saf madde hâl değiştirirken gereken enerji kütle ve ilgili özgül hâl değiştirme ısısıyla doğru orantılıdır.',
            variables: [
              { sym: 'Q', desc: 'Hâl değişimi için aktarılan enerji' },
              { sym: 'm', desc: 'Hâl değiştiren kütle' },
              { sym: 'L', desc: 'Özgül erime veya buharlaşma ısısı; J/kg' },
            ],
          },
          {
            id: 'phase-table',
            type: 'table',
            title: 'Isıtma grafiğinde hangi bağıntı?',
            columns: ['Grafik bölgesi', 'Fiziksel süreç', 'Enerji hesabı', 'Tanecik düzeyi'],
            rows: [
              ['Eğik katı', 'Katı ısınıyor', '$Q=mc_{katı}\Delta T$', 'Titreşimlerin ortalama enerjisi artar'],
              ['Yatay erime', 'Katı + sıvı', '$Q=mL_e$', 'Düzen zayıflar, potansiyel enerji artar'],
              ['Eğik sıvı', 'Sıvı ısınıyor', '$Q=mc_{sıvı}\Delta T$', 'Ortalama hareket enerjisi artar'],
              ['Yatay kaynama', 'Sıvı + gaz', '$Q=mL_b$', 'Tanecikler arası uzaklık belirgin artar'],
              ['Eğik gaz', 'Gaz ısınıyor', '$Q=mc_{gaz}\Delta T$', 'Ortalama kinetik enerji artar'],
            ],
            caption: 'Her bölgenin enerjisi ayrı hesaplanır ve toplam enerji için toplanır.',
          },
          {
            id: 'phase-example',
            type: 'worked_example',
            title: 'Buzu eritip suyu ısıtmak',
            prompt: '0 °C’de 100 g buz tamamen eritilip oluşan su 20 °C’ye getiriliyor. $L_e=334\,J/g$, $c_{su}=4{,}18\,J/(g\cdot\degree C)$. Toplam enerji nedir?',
            steps: [
              { title: 'Erimeyi hesapla', body: '$Q_1=mL_e=100\times334=33400\,J$.' },
              { title: 'Suyu ısıt', body: '$Q_2=mc\Delta T=100\times4{,}18\times20=8360\,J$.' },
              { title: 'Süreçleri topla', body: '$Q_{toplam}=33400+8360=41760\,J$.' },
            ],
            answer: 'Toplam 41,76 kJ enerji gerekir.',
            takeaway: '0 °C buzdan 20 °C suya geçiş tek formülle yapılmaz; erime ve sıcaklık artışı ayrı süreçlerdir.',
          },
          {
            id: 'phase-trap',
            type: 'trap',
            title: 'Yatay grafikte enerji alınmıyor sanma',
            wrong: '“Sıcaklık sabitse enerji değişmez.”',
            right: 'Hâl değişiminde enerji alınır; bu enerji ortalama kinetik enerji yerine tanecikler arası potansiyel enerjiyi değiştirir.',
            body: 'Saf maddenin sabit basınçtaki yatay bölgesinde iki hâl birlikte bulunur ve hâl değiştiren miktar zamanla artar.',
          },
        ],
      },
      {
        id: 'isi-aktarimi',
        kind: 'deepen',
        title: 'Isı aktarım yolları ve yalıtım',
        lead: 'Enerji, sıcaklık farkını azaltacak yönde iletim, taşınım ve ışımayla aktarılır; gerçek düzeneklerde üçü birlikte bulunabilir.',
        blocks: [
          {
            id: 'heat-transfer-prose',
            type: 'prose',
            body: `**İletim**, maddenin bütünü yer değiştirmeden tanecik etkileşimleri ve serbest elektronlar aracılığıyla enerji aktarımıdır. Metal kaşığın sapının ısınmasında atomik titreşimler ve metaldeki serbest elektronlar enerjiyi sıcak uçtan soğuk uca taşır. Tahta, plastik, yün ve durgun hava kötü iletken oldukları için yalıtımda kullanılır.

**Taşınım (konveksiyon)** sıvı ve gazlarda akışkanın kütlesel hareketiyle gerçekleşir. Alttan ısıtılan sıvı genellikle genleşir, özkütlesi azalır ve yükselir; daha soğuk ve yoğun akışkan aşağı iner. Böylece dolaşım akımları oluşur. Kaloriferin odanın altına, klimanın daha yükseğe yerleştirilmesi bu doğal akışa yardım eder.

**Işıma**, elektromanyetik dalgalarla enerji aktarımıdır ve maddesel ortama gerek duymaz. Güneş’ten Dünya’ya enerji uzay boşluğunu ışımayla geçer. Sıcaklığı mutlak sıfırın üzerinde olan her cisim ışıma yapar; net enerji aktarımı daha sıcak cisimden daha soğuk çevreye doğrudur. Mat ve koyu yüzeyler genellikle iyi soğurucu ve iyi yayıcı; parlak metalik yüzeyler kızılötesi ışımayı daha çok yansıtıcıdır.

Termos bu üç yolu birlikte azaltır: çift duvar arasındaki vakum iletim ve taşınımı, parlak yüzey ışımayı, dar ve yalıtkan kapak ise temas yoluyla iletimi ve akışkan kaçışını azaltır. Yalıtım “soğuğu içeri sokmamak” değil, iki yönlü enerji aktarım hızını azaltmaktır.`,
          },
          {
            id: 'heat-transfer-table',
            type: 'table',
            title: 'Üç aktarım yolunu tanı',
            columns: ['Mekanizma', 'Ortam gerekir mi?', 'Madde topluca hareket eder mi?', 'Ayırt edici örnek'],
            rows: [
              ['İletim', 'Evet', 'Hayır', 'Metal çubuğun bir ucundan diğerine enerji geçişi'],
              ['Taşınım', 'Sıvı veya gaz gerekir', 'Evet', 'Kaynar sudaki dolaşım ve deniz meltemi'],
              ['Işıma', 'Hayır', 'Hayır', 'Güneş’in uzaydan Dünya’yı ısıtması'],
            ],
            caption: 'Bir fırında hava taşınımı, tepsi iletimi ve rezistans ışıması aynı anda bulunabilir.',
          },
          {
            id: 'heat-transfer-checkpoint',
            type: 'checkpoint',
            prompt: 'Köpük yalıtım malzemelerinde neden çok sayıda küçük ve kapalı hava cebi tercih edilir?',
            hint: 'Havanın iletkenliğini ve büyük hava hacimlerinde oluşabilecek akışı düşün.',
            answer: 'Durgun hava kötü ısı iletkenidir. Ceplerin küçük ve kapalı olması, havanın dolaşım akımı oluşturmasını da zorlaştırır; böylece hem iletim hem taşınım azalır.',
          },
          {
            id: 'transfer-trap',
            type: 'trap',
            title: 'Kalın montun ısı ürettiğini sanmak',
            wrong: '“Mont vücuda yeni ısı verir.”',
            right: 'Montun lifleri arasındaki durgun hava, vücuttan çevreye enerji aktarım hızını azaltır.',
            body: 'Enerji kaynağı metabolizmadır. Yalıtım sıcaklık farkının oluşturduğu akışı yavaşlatır.',
          },
        ],
      },
      {
        id: 'genlesme',
        kind: 'deepen',
        title: 'Katılarda genleşme, bimetal ve suyun özel durumu',
        lead: 'Sıcaklık arttığında tanecikler daha büyük genlikle titreşir; bağ potansiyelinin asimetrisi ortalama uzaklığın artmasına ve cismin boyut değiştirmesine yol açar.',
        blocks: [
          {
            id: 'expansion-prose',
            type: 'prose',
            body: `Katı ısıtıldığında atomların kendisi büyümez. Atomlar denge konumları çevresinde daha enerjik titreşir ve atomlar arası ortalama uzaklık çoğu malzemede artar. Makroskobik olarak boy, alan ve hacim artışı görülür. Soğumada bunun tersi gerçekleşir.

İnce ve uzun bir çubukta boyca genleşme $\Delta L=\alpha L_0\Delta T$ ile modellenir. Başlangıç boyu veya sıcaklık değişimi iki katına çıkarsa uzama da iki katına çıkar. $\alpha$ malzemeye özgü doğrusal genleşme katsayısıdır. İzotrop katılarda küçük sıcaklık aralıkları için yüzeyce katsayı yaklaşık $2\alpha$, hacimce katsayı yaklaşık $3\alpha$ alınabilir.

Levha ısıtıldığında üzerindeki deliğin de genleşmesi önemli bir sınav ayrımıdır. Deliği aynı maddeden bir parçayla doldurulmuş gibi düşün; parça nasıl büyürse delik de öyle büyür. Köprü, ray, boru ve beton bloklarda genleşme derzleri bırakılması; sıcaklık değişiminde oluşacak büyük mekanik gerilmeyi engeller.

İki farklı metal birbirine yapıştırılırsa **bimetal şerit** oluşur. Isıtıldığında genleşme katsayısı büyük olan metal daha fazla uzamak ister ve eğrinin dışında kalır; şerit genleşme katsayısı küçük metale doğru bükülür. Termostat, ütü ve yangın alarmı gibi düzeneklerde bu hareket elektrik kontağını açıp kapatabilir.

Su 0–4 °C arasında çoğu maddeden farklı davranır. 0 °C’deki sıvı su 4 °C’ye kadar ısıtıldığında hacmi azalır ve özkütlesi artar; 4 °C’de özkütle maksimumdur. 4 °C’nin üzerinde normal biçimde genleşir. Gölde soğuyan 4 °C su dibe iner; daha soğuk su üstte kalıp donar. Buzun daha az yoğun olup yüzmesi, alttaki suyu yalıtır ve sucul yaşamın kışın sürmesini kolaylaştırır.`,
          },
          {
            id: 'expansion-formula',
            type: 'formula',
            title: 'Doğrusal genleşme',
            latex: '\Delta L = \alpha\,L_0\,\Delta T',
            meaning: 'Küçük sıcaklık aralığında uzama; malzemenin genleşme katsayısı, ilk boy ve sıcaklık değişimiyle doğru orantılıdır.',
            variables: [
              { sym: 'ΔL', desc: 'Boydaki değişim; m veya mm' },
              { sym: 'α', desc: 'Doğrusal genleşme katsayısı; 1/K veya 1/°C' },
              { sym: 'L₀', desc: 'Başlangıç boyu' },
              { sym: 'ΔT', desc: 'Sıcaklık değişimi' },
            ],
          },
          {
            id: 'expansion-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Malzeme ve sıcaklıkla genleşme laboratuvarı',
            caption: 'Aynı boy ve sıcaklık artışında genleşme katsayısı büyük malzeme daha fazla uzar. Gerçek uzama küçük olsa da uzun yapılarda birikerek kritik olur.',
            purpose: 'Malzeme, ilk boy ve sıcaklık değişimini manipüle ederek doğrusal genleşmenin üç değişkene bağlılığını gözlemlemek.',
            data: { mode: 'expansion', title: 'Ray neden boşluk ister?', initialMaterial: 'steel', initialLength: 2, initialTemperatureChange: 100 },
          },
          {
            id: 'expansion-worked',
            type: 'worked_example',
            title: 'Köprü kirişinde genleşme payı',
            prompt: 'Uzunluğu 20 m olan çelik kirişin sıcaklığı 50 °C artıyor. $\alpha=12\times10^{-6}/\degree C$. Serbest uzama ne kadardır?',
            steps: [
              { title: 'Bağıntıyı kur', body: '$\Delta L=\alpha L_0\Delta T$.' },
              { title: 'Değerleri yerleştir', body: '$\Delta L=12\times10^{-6}\times20\times50=0{,}012\,m$.' },
              { title: 'Uygun birime çevir', body: '$0{,}012\,m=12\,mm$.' },
            ],
            answer: 'Kiriş 12 mm uzar; bağlantı bu harekete izin vermiyorsa büyük termal gerilme oluşabilir.',
            takeaway: 'Katsayı küçük görünür; fakat uzunluk ve sıcaklık farkıyla çarpıldığında mühendislik ölçeğinde önemli olur.',
          },
          {
            id: 'expansion-trap',
            type: 'trap',
            title: 'Levhadaki deliğin küçüldüğünü sanmak',
            wrong: '“Levha her yönde içeri doğru büyür ve deliği daraltır.”',
            right: 'Serbest ve türdeş levha ısıtıldığında tüm uzunluklar aynı oranda büyür; deliğin çapı da artar.',
            body: 'Deliği aynı malzemeyle doldurulmuş hayal et; dolgu genleşince kaplayacağı yeni sınır, deliğin yeni sınırıdır.',
          },
        ],
      },
      {
        id: 'termal-sinav-kapanis',
        kind: 'practice',
        title: 'Grafik, deney ve ÖSYM refleksi',
        lead: 'Termal soruda ilk karar formül değil süreçtir: sıcaklık mı değişiyor, hâl mi değişiyor, yoksa enerji yalıtılmış sistem içinde mi aktarılıyor?',
        blocks: [
          {
            id: 'termal-exam-prose',
            type: 'prose',
            body: `Bir termal soruyu çözerken önce sistemi ve sınırı belirle. Dışarıdan enerji giriyor mu, sistem yalıtılmış mı, kap da enerji alıyor mu? Sonra her cismin başlangıç hâlini, sıcaklığını ve olası hâl değişimlerini sırala. Hâl değişimi yoksa $mc\Delta T$; hâl değişimi varsa $mL$ kullan. Birden fazla aşama varsa enerjileri topla.

Karışımda sonucu başlangıç sıcaklıkları arasında bekle. Eğer hesap bunun dışına çıkıyorsa işaret veya enerji yönü hatası vardır; yalnız hâl değişimi veya dış enerji kaynağı bu basit sınırı değiştirebilir. Özgül ısısı veya kütlesi büyük tarafın ısı sığası büyüktür; denge sıcaklığı o tarafın başlangıç değerine daha yakın olur.

Grafikte eksenleri okumadan eğime anlam verme. T–zaman grafiğinde yatay bölge hâl değişimi olabilir; Q–T grafiğinde eğim $\Delta Q/\Delta T=mc$ ısı sığasıdır. Sıcaklık–uzunluk grafiğinde eğim $\alpha L_0$ olur. Aynı grafik biçimi farklı eksenlerde farklı fiziksel anlam taşır.

Nitel deney sorularında tek değişken ilkesini ara. Özgül ısıları karşılaştırmak için kütle, verilen enerji ve başlangıç koşulları eşitlenmelidir. Genleşme katsayılarını karşılaştırmak için ilk boy ve sıcaklık değişimi kontrol edilmelidir. Birden fazla değişken birlikte değişiyorsa tek nedene ulaşılamaz.`,
          },
          {
            id: 'termal-strategy-table',
            type: 'table',
            title: 'Soru kökünden doğru modele',
            columns: ['Sorudaki işaret', 'İlk model', 'Kontrol'],
            rows: [
              ['Tek hâl, sıcaklık değişiyor', '$Q=mc\Delta T$', 'Birimler ve ΔT işareti'],
              ['Saf madde, sıcaklık sabit, hâl değişiyor', '$Q=mL$', 'Değişen kütle ve L türü'],
              ['Yalıtılmış karışım', '$\sum Q=0$', 'Son sıcaklık başlangıçların arasında mı?'],
              ['Sabit güçli ısıtıcı', '$Q=Pt$', 'Çevreye kayıp ihmal edilmiş mi?'],
              ['Çubukta boy değişimi', '$\Delta L=\alpha L_0\Delta T$', 'Aynı malzeme ve serbest genleşme mi?'],
              ['Aktarım yolu soruluyor', 'İletim / taşınım / ışıma', 'Madde hareketi ve ortam gereksinimi'],
            ],
            caption: 'Modeli süreç seçer; formülü anahtar sözcük ezberiyle değil enerji yolunu izleyerek belirle.',
          },
          {
            id: 'termal-osym',
            type: 'osym_simulation',
            title: 'Final kontrolü: ısı sığası ve denge',
            passage: 'Isıca yalıtılmış bir kapta, hâl değiştirmeyen K ve L sıvıları karıştırılıyor. K’nin başlangıç sıcaklığı 80 °C, L’nin 20 °C’dir. Denge sıcaklığı 35 °C oluyor.',
            question: 'Buna göre hangi yorum kesinlikle doğrudur?',
            options: [
              { text: 'K ve L’nin kütleleri eşittir.', explanation: 'Isı sığası mc ile belirlenir; yalnız sıcaklıklardan kütleler tek başına bulunamaz.' },
              { text: 'K’nin özgül ısısı L’ninkinden büyüktür.', explanation: 'Kütleler bilinmediği için özgül ısılar ayrı ayrı karşılaştırılamaz.' },
              { text: 'L’nin ısı sığası K’ninkinden büyüktür.', explanation: 'Denge 20 °C’ye daha yakındır. Enerji denkliği $C_K(80-35)=C_L(35-20)$ verir; $45C_K=15C_L$, dolayısıyla $C_L=3C_K$.' },
              { text: 'K daha fazla enerji vermiştir.', explanation: 'Yalıtılmış sistemde K’nin verdiği enerji L’nin aldığı enerjiye büyüklükçe eşittir.' },
              { text: 'Denge kurulduğunda K’nin iç enerjisi L’ye eşittir.', explanation: 'Eşit sıcaklık eşit iç enerji demek değildir; kütle ve madde türü farklı olabilir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Denge sıcaklığının hangi başlangıç değerine yakın olduğunu gör; sonra $C\Delta T$ ile enerji korunumu kur.',
            critical_point: 'Denge sıcaklığı, ısı sığası büyük olan tarafın başlangıç sıcaklığına daha yakın olur.',
            takeaway: 'Eşit sıcaklık değişimi veya aritmetik ortalama varsayma; enerji denkliğinde mc çarpanını koru.',
          },
          {
            id: 'termal-summary',
            type: 'summary',
            title: 'Kesin bilmen gerekenler',
            points: [
              'Isı, sıcaklık farkıyla aktarılan enerjidir; cisim iç enerjiye sahiptir.',
              'Net enerji aktarımı sıcaktan soğuğa ilerler ve ısıl dengede durur.',
              'Kelvin ve Celsius farkları eşittir; oran yorumu mutlak sıcaklıkla yapılır.',
              'Hâl değişimi yoksa Q=mcΔT, hâl değişiminde Q=mL kullanılır.',
              'Yalıtılmış sistemde verilen ve alınan enerjilerin cebirsel toplamı sıfırdır.',
              'Hâl değişiminde sıcaklık sabit kalabilirken iç enerji değişir.',
              'İletim tanecik etkileşimiyle, taşınım akışkan hareketiyle, ışıma elektromanyetik dalgayla gerçekleşir.',
              'Doğrusal genleşme ΔL=αL₀ΔT ile modellenir; levhadaki delik de ısıtılınca büyür.',
              'Su 4 °C’de en büyük özkütleye sahiptir; buzun yüzmesi göllerin üstten donmasını sağlar.',
            ],
          },
          {
            id: 'termal-connection',
            type: 'connection',
            title: 'Sıradaki konuya köprü: hareket ve kuvvet',
            body: 'Termal olaylarda enerji aktarımını ve dengeyi izledik. Sıradaki konuda bir cismin konumunun zamanla nasıl değiştiğini; kuvvetin hız ve ivme üzerindeki etkisini vektörler, hareket grafikleri ve Newton yasalarıyla kuracağız.',
            links: ['Hareket ve Kuvvet', 'İş, Güç ve Enerji', 'Basınç'],
          },
        ],
      },
    ],
  },
}

export default isiSicaklikGenlesme
