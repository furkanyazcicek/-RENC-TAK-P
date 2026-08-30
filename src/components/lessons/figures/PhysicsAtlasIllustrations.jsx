import InteractiveIllustration from './InteractiveIllustration'

const thermalRegions = [
  {
    key: 'isil-denge', shape: { x: 0, y: 0, width: 880, height: 535 }, zoom: { x: 28, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/isil-denge.jpg',
      srcSet: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/isil-denge-900.jpg 900w, /lesson-assets/fizik/isi-sicaklik-genlesme/details/isil-denge.jpg 1536w',
      alt: 'Sıcak ve soğuk tanecik topluluklarının temas sonrası ortak sıcaklığa yaklaşmasını üç aşamada gösteren bilimsel levha.',
      title: 'Isıl dengeye mikroskobik bakış',
      note: 'Temas başladığında net enerji aktarımı sıcak taraftan soğuk tarafa doğrudur. Ortalama tanecik hareketleri eşitlendiğinde ortak sıcaklık oluşur ve net ısı aktarımı sona erer.',
    },
  },
  {
    key: 'aktarim-yollari', shape: { x: 880, y: 0, width: 656, height: 535 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/isi-aktarim-yollari.jpg',
      srcSet: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/isi-aktarim-yollari-900.jpg 900w, /lesson-assets/fizik/isi-sicaklik-genlesme/details/isi-aktarim-yollari.jpg 1536w',
      alt: 'Metal çubukta iletim, sıvıda taşınım ve boşlukta ışımayı ayrı panellerde gösteren bilimsel levha.',
      title: 'Üç ısı aktarım yolu',
      note: 'İletim, taneciklerin yer değiştirmeden komşularına enerji vermesidir. Taşınım akışkanın toplu hareketiyle; ışıma ise elektromanyetik dalgalarla gerçekleşir ve ortam gerektirmez.',
    },
  },
  {
    key: 'kalorimetri', shape: { x: 0, y: 535, width: 880, height: 489 }, zoom: { x: 28, y: 76, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/kalorimetri.jpg',
      srcSet: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/kalorimetri-900.jpg 900w, /lesson-assets/fizik/isi-sicaklik-genlesme/details/kalorimetri.jpg 1536w',
      alt: 'Yalıtılmış kalorimetrede sıcak ve soğuk suyun karışıp denge sıcaklığına ulaşmasını gösteren bilimsel levha.',
      title: 'Kalorimetrede enerji dengesi',
      note: 'Çevreyle enerji alışverişi yok sayıldığında sıcak maddenin verdiği ısı, soğuk maddenin aldığı ısıya eşittir. Son sıcaklık başlangıç sıcaklıklarının arasında kalır.',
    },
  },
  {
    key: 'genlesme', shape: { x: 880, y: 535, width: 656, height: 489 }, zoom: { x: 75, y: 76, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/genlesme-bimetal.jpg',
      srcSet: '/lesson-assets/fizik/isi-sicaklik-genlesme/details/genlesme-bimetal-900.jpg 900w, /lesson-assets/fizik/isi-sicaklik-genlesme/details/genlesme-bimetal.jpg 1536w',
      alt: 'Rayların sıcaklıkla uzamasını ve iki metalin farklı genleşmesi sonucu bimetal şeridin bükülmesini gösteren bilimsel levha.',
      title: 'Genleşmenin mühendislik sonucu',
      note: 'Ray aralıkları sıcaklık artışındaki uzamaya yer açar. Bimetal şeritte daha çok genleşen katman dış yayda kalır; bu fark termostatlarda mekanik anahtarlamaya dönüşür.',
    },
  },
]

const motionRegions = [
  {
    key: 'esit-zaman', shape: { x: 0, y: 0, width: 1536, height: 260 }, zoom: { x: 50, y: 13, scale: 1.45 },
    detail: {
      src: '/lesson-assets/fizik/hareket-ve-kuvvet/details/esit-zaman-hareket.jpg',
      srcSet: '/lesson-assets/fizik/hareket-ve-kuvvet/details/esit-zaman-hareket-900.jpg 900w, /lesson-assets/fizik/hareket-ve-kuvvet/details/esit-zaman-hareket.jpg 1536w',
      alt: 'Eşit zaman aralıklarında sabit hızlı ve hızlanan araçların konum izlerini karşılaştıran bilimsel levha.',
      title: 'Eşit zaman fotoğraflarını oku',
      note: 'Ardışık konumlar arasındaki eşit uzaklık sabit sürati, büyüyen uzaklık pozitif ivmeyi gösterir. Konum aralığı değişiyorsa hızın büyüklüğü de değişiyordur.',
    },
  },
  {
    key: 'grafikler', shape: { x: 0, y: 260, width: 1536, height: 260 }, zoom: { x: 50, y: 38, scale: 1.45 },
    detail: {
      src: '/lesson-assets/fizik/hareket-ve-kuvvet/details/senkron-grafikler.jpg',
      srcSet: '/lesson-assets/fizik/hareket-ve-kuvvet/details/senkron-grafikler-900.jpg 900w, /lesson-assets/fizik/hareket-ve-kuvvet/details/senkron-grafikler.jpg 1536w',
      alt: 'Aynı zaman ekseninde eşleştirilmiş konum-zaman, hız-zaman ve ivme-zaman grafiklerini gösteren bilimsel levha.',
      title: 'x–t, v–t ve a–t eşleşmesi',
      note: 'Konum–zaman grafiğinin eğimi hızı, hız–zaman grafiğinin eğimi ivmeyi verir. Hız grafiğinin altında kalan alan ise yer değiştirmedir.',
    },
  },
  {
    key: 'serbest-cisim', shape: { x: 0, y: 520, width: 1536, height: 210 }, zoom: { x: 42, y: 61, scale: 1.45 },
    detail: {
      src: '/lesson-assets/fizik/hareket-ve-kuvvet/details/serbest-cisim.jpg',
      srcSet: '/lesson-assets/fizik/hareket-ve-kuvvet/details/serbest-cisim-900.jpg 900w, /lesson-assets/fizik/hareket-ve-kuvvet/details/serbest-cisim.jpg 1536w',
      alt: 'Yatay düzlemde çekilen bloğa etki eden ağırlık, normal, çekme ve sürtünme kuvvetlerini gösteren serbest cisim diyagramı.',
      title: 'Serbest cisim diyagramı',
      note: 'Önce incelenen cismi çevresinden ayır; sonra yalnız o cisme etki eden kuvvetleri çiz. Aynı eksendeki kuvvetlerin vektörel toplamı net kuvveti verir.',
    },
  },
  {
    key: 'etki-tepki', shape: { x: 0, y: 730, width: 1536, height: 294 }, zoom: { x: 50, y: 86, scale: 1.45 },
    detail: {
      src: '/lesson-assets/fizik/hareket-ve-kuvvet/details/etki-tepki.jpg',
      srcSet: '/lesson-assets/fizik/hareket-ve-kuvvet/details/etki-tepki-900.jpg 900w, /lesson-assets/fizik/hareket-ve-kuvvet/details/etki-tepki.jpg 1536w',
      alt: 'Duvarı iten kişi ve birbirini iten patenciler üzerinden Newton üçüncü yasa çiftlerini ayrı cisimlerde gösteren levha.',
      title: 'Etki–tepki çifti',
      note: 'Etki ve tepki kuvvetleri eşit büyüklükte, zıt yönlü ve aynı türdedir; fakat farklı cisimlere etki ettikleri için birbirini yok etmezler.',
    },
  },
]

const energyRegions = [
  {
    key: 'is', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/is-guc-enerji/details/is.jpg',
      srcSet: '/lesson-assets/fizik/is-guc-enerji/details/is-900.jpg 900w, /lesson-assets/fizik/is-guc-enerji/details/is.jpg 1536w',
      alt: 'Kuvvet ve yer değiştirme arasındaki açıya göre pozitif, sıfır ve negatif işi gösteren bilimsel levha.',
      title: 'İşin büyüklüğü ve işareti',
      note: 'Yalnız kuvvetin yer değiştirme doğrultusundaki bileşeni iş yapar. Aynı yön pozitif, dik yön sıfır, zıt yön negatif iş demektir.',
    },
  },
  {
    key: 'enerji-teoremi', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/is-guc-enerji/details/enerji-teoremi.jpg',
      srcSet: '/lesson-assets/fizik/is-guc-enerji/details/enerji-teoremi-900.jpg 900w, /lesson-assets/fizik/is-guc-enerji/details/enerji-teoremi.jpg 1536w',
      alt: 'Kinetik enerji, çekim potansiyel enerjisi ve net iş-kinetik enerji ilişkisini gösteren bilimsel levha.',
      title: 'Enerji türleri ve iş–enerji teoremi',
      note: 'Kinetik enerji hızın karesiyle, çekim potansiyel enerjisi seçilen referansa göre yükseklikle değişir. Net iş, kinetik enerjideki değişime eşittir.',
    },
  },
  {
    key: 'korunum', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/is-guc-enerji/details/korunum.jpg',
      srcSet: '/lesson-assets/fizik/is-guc-enerji/details/korunum-900.jpg 900w, /lesson-assets/fizik/is-guc-enerji/details/korunum.jpg 1536w',
      alt: 'Bir hız treninde kinetik ve potansiyel enerji dönüşümünü, sürtünmeli durumda termal enerji oluşumunu gösteren levha.',
      title: 'Enerji korunumu',
      note: 'Sürtünmesiz sistemde mekanik enerji sabittir. Sürtünme varsa mekanik enerjinin bir bölümü termal enerjiye dönüşür; kapalı sistemin toplam enerjisi yine korunur.',
    },
  },
  {
    key: 'guc-verim', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/is-guc-enerji/details/guc-verim.jpg',
      srcSet: '/lesson-assets/fizik/is-guc-enerji/details/guc-verim-900.jpg 900w, /lesson-assets/fizik/is-guc-enerji/details/guc-verim.jpg 1536w',
      alt: 'Aynı işi farklı sürede yapan motorları ve giriş enerjisinin yararlı çıkış ile ısı kaybına bölünmesini gösteren levha.',
      title: 'Güç ve verim',
      note: 'Güç, yapılan işin hızıdır; aynı işi daha kısa sürede yapan sistem daha güçlüdür. Verim yararlı çıkışın girişe oranıdır ve gerçek makinelerde yüzde yüzden küçüktür.',
    },
  },
]

const electrostaticRegions = [
  {
    key: 'yuk-korunumu', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrostatik/details/yuk-korunumu.jpg',
      srcSet: '/lesson-assets/fizik/elektrostatik/details/yuk-korunumu-900.jpg 900w, /lesson-assets/fizik/elektrostatik/details/yuk-korunumu.jpg 1536w',
      alt: 'Elektron aktarımıyla iki cismin zıt yüklenmesini, yük kuantumunu ve kapalı sistemde toplam yükün korunmasını gösteren levha.',
      title: 'Elektrik yükü ve korunumu',
      note: 'Katılarda protonlar çekirdeğe bağlı kalır; elektriklenmede hareket eden parçacıklar elektronlardır. Elektron kaybeden cisim pozitif, kazanan cisim negatif yüklenir ve kapalı sistemin toplam yükü değişmez.',
    },
  },
  {
    key: 'elektriklenme', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrostatik/details/elektriklenme.jpg',
      srcSet: '/lesson-assets/fizik/elektrostatik/details/elektriklenme-900.jpg 900w, /lesson-assets/fizik/elektrostatik/details/elektriklenme.jpg 1536w',
      alt: 'Sürtünme, dokunma ve topraklamalı etki ile elektriklenmeyi elektron hareketleriyle aşamalı gösteren bilimsel levha.',
      title: 'Üç elektriklenme yolu',
      note: 'Sürtünmede elektron aktarımıyla eşit ve zıt yükler oluşur. Dokunmada yük aynı işaretle paylaşılır. Etki ile elektriklenmede önce yük ayrımı oluşur; toprak bağlantısı indükleyen cisim uzaklaştırılmadan kesilir.',
    },
  },
  {
    key: 'coulomb', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrostatik/details/coulomb.jpg',
      srcSet: '/lesson-assets/fizik/elektrostatik/details/coulomb-900.jpg 900w, /lesson-assets/fizik/elektrostatik/details/coulomb.jpg 1536w',
      alt: 'Aynı ve zıt işaretli noktasal yükler arasındaki Coulomb kuvvetini, ters-kare uzaklık ilişkisini ve kuvvet grafiğini gösteren levha.',
      title: 'Coulomb kuvveti',
      note: 'Kuvvet büyüklüğü yüklerin çarpımıyla doğru, aralarındaki uzaklığın karesiyle ters orantılıdır. İki yüke etki eden kuvvetler eşit büyüklükte, zıt yönlü ve aynı doğrultudadır.',
    },
  },
  {
    key: 'alan-iletken', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrostatik/details/alan-iletken-elektroskop.jpg',
      srcSet: '/lesson-assets/fizik/elektrostatik/details/alan-iletken-elektroskop-900.jpg 900w, /lesson-assets/fizik/elektrostatik/details/alan-iletken-elektroskop.jpg 1536w',
      alt: 'Elektrik alan çizgilerini, iletkende elektrostatik dengeyi, elektroskopu ve topraklamayı gösteren bilimsel levha.',
      title: 'Alan, iletken ve elektroskop',
      note: 'Alan çizgileri pozitif yükten çıkar, negatif yüke girer. Elektrostatik dengedeki iletkenin içinde alan sıfır, fazla yük dış yüzeydedir. Topraklama yük alışverişi sağlayarak elektroskop yapraklarını kapatabilir.',
    },
  },
]

const circuitRegions = [
  {
    key: 'akim-gerilim', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrik-devreleri/details/akim-gerilim.jpg',
      srcSet: '/lesson-assets/fizik/elektrik-devreleri/details/akim-gerilim-900.jpg 900w, /lesson-assets/fizik/elektrik-devreleri/details/akim-gerilim.jpg 1536w',
      alt: 'Pilin yükleri ayırmasını, potansiyel farkını, kapalı devrede geleneksel akım ile elektron sürüklenmesinin zıt yönlerini gösteren levha.',
      title: 'Akım ve potansiyel farkı',
      note: 'Kaynak, yükleri ayırmak için enerji sağlar ve uçları arasında potansiyel farkı kurar. Geleneksel akım dış devrede pozitif kutuptan negatife; metaldeki elektron sürüklenmesi bunun ters yönündedir.',
    },
  },
  {
    key: 'ohm-direnc', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrik-devreleri/details/ohm-direnc.jpg',
      srcSet: '/lesson-assets/fizik/elektrik-devreleri/details/ohm-direnc-900.jpg 900w, /lesson-assets/fizik/elektrik-devreleri/details/ohm-direnc.jpg 1536w',
      alt: 'Ohmik dirençte ampermetrenin seri, voltmetrenin paralel bağlanmasını, V-I grafiğini ve tel direncinin boy-kesit ilişkisini gösteren levha.',
      title: 'Ohm yasası ve direnç',
      note: 'Sıcaklık sabitken ohmik iletkende V/I oranı dirençtir. Ampermetre akım yoluna seri, voltmetre ölçülecek elemanın uçlarına paralel bağlanır. Tel uzadıkça direnç artar, kesit büyüdükçe azalır.',
    },
  },
  {
    key: 'seri-paralel', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrik-devreleri/details/seri-paralel.jpg',
      srcSet: '/lesson-assets/fizik/elektrik-devreleri/details/seri-paralel-900.jpg 900w, /lesson-assets/fizik/elektrik-devreleri/details/seri-paralel.jpg 1536w',
      alt: 'İki direncin seri ve paralel bağlantılarında akım, gerilim ve eşdeğer direnç ilişkilerini karşılaştıran bilimsel levha.',
      title: 'Seri ve paralel bağlantı',
      note: 'Seride akım aynıdır, gerilim dirençlere bölünür ve eşdeğer direnç toplanır. Paralelde kol gerilimleri eşittir, toplam akım kollara ayrılır ve eşdeğer direnç en küçük kol direncinden küçüktür.',
    },
  },
  {
    key: 'guc-guvenlik', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/elektrik-devreleri/details/guc-enerji-guvenlik.jpg',
      srcSet: '/lesson-assets/fizik/elektrik-devreleri/details/guc-enerji-guvenlik-900.jpg 900w, /lesson-assets/fizik/elektrik-devreleri/details/guc-enerji-guvenlik.jpg 1536w',
      alt: 'Lamba ve ısıtıcıda elektriksel güç ve enerji dönüşümünü, kWh sayacını, sigorta ile ampermetre-voltmeter bağlantılarını gösteren levha.',
      title: 'Güç, enerji, ölçüm ve güvenlik',
      note: 'Güç enerji dönüşüm hızıdır; elektrik sayacı enerji ölçer ve kWh bir enerji birimidir. Sigorta aşırı akımda devreyi seri noktadan açar; ampermetre seri, voltmetre paralel bağlanır.',
    },
  },
]

const magnetismRegions = [
  {
    key: 'miknatis-alan', shape: { x: 0, y: 0, width: 705, height: 512 }, zoom: { x: 23, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/manyetizma/details/miknatis-alan.jpg',
      srcSet: '/lesson-assets/fizik/manyetizma/details/miknatis-alan-900.jpg 900w, /lesson-assets/fizik/manyetizma/details/miknatis-alan.jpg 1536w',
      alt: 'Çubuk mıknatısın kapalı alan çizgilerini, demir tozu desenini, pusulayı, Dünya alanını ve mıknatısın kesilmesini gösteren bilimsel levha.',
      title: 'Mıknatıslar ve manyetik alan',
      note: 'Mıknatısın dışında alan çizgileri N kutbundan çıkar ve S kutbuna girer; mıknatısın içinde S’den N’ye dönerek kapalı eğriler oluşturur. Mıknatıs kesildiğinde tek kutup oluşmaz, her parça yeniden N–S çiftine sahip olur.',
    },
  },
  {
    key: 'akimin-alani', shape: { x: 705, y: 0, width: 831, height: 512 }, zoom: { x: 73, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/manyetizma/details/akimin-manyetik-alani.jpg',
      srcSet: '/lesson-assets/fizik/manyetizma/details/akimin-manyetik-alani-900.jpg 900w, /lesson-assets/fizik/manyetizma/details/akimin-manyetik-alani.jpg 1536w',
      alt: 'Düz tel, akım halkası ve selenoid çevresindeki manyetik alanı sağ el kuralıyla gösteren bilimsel levha.',
      title: 'Akımın oluşturduğu manyetik alan',
      note: 'Düz telde başparmak akımı, kıvrılan parmaklar alan çizgilerinin yönünü verir. Halka ve selenoidde parmaklar sarım akımını izlerken başparmak bobinin kuzey kutbunu gösterir; selenoidin iç alanı yaklaşık düzgün ve paraleldir.',
    },
  },
  {
    key: 'manyetik-kuvvet', shape: { x: 0, y: 512, width: 705, height: 512 }, zoom: { x: 23, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/manyetizma/details/manyetik-kuvvet.jpg',
      srcSet: '/lesson-assets/fizik/manyetizma/details/manyetik-kuvvet-900.jpg 900w, /lesson-assets/fizik/manyetizma/details/manyetik-kuvvet.jpg 1536w',
      alt: 'N ve S kutupları arasındaki akım taşıyan tele etki eden manyetik kuvveti, açı ve yön değişimleriyle gösteren bilimsel levha.',
      title: 'Akım taşıyan tele manyetik kuvvet',
      note: 'Kuvvetin büyüklüğü F=B·I·L·sinθ’dır ve kuvvet hem akıma hem alana diktir. Tel alana dikken kuvvet en büyük, paralelken sıfırdır; yalnız akım ya da yalnız alan ters çevrilirse kuvvet yön değiştirir.',
    },
  },
  {
    key: 'uygulamalar', shape: { x: 705, y: 512, width: 831, height: 512 }, zoom: { x: 73, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/manyetizma/details/elektromanyetik-uygulamalar.jpg',
      srcSet: '/lesson-assets/fizik/manyetizma/details/elektromanyetik-uygulamalar-900.jpg 900w, /lesson-assets/fizik/manyetizma/details/elektromanyetik-uygulamalar.jpg 1536w',
      alt: 'Elektromıknatıslı vinç, doğru akım motoru, röle ve hoparlörde manyetik alanın kullanımını gösteren bilimsel levha.',
      title: 'Elektromanyetik uygulamalar',
      note: 'Elektromıknatıs akım kesilince büyük ölçüde etkisini kaybedebilir. Motorda zıt yönlü kuvvetler tork, rölede anahtarlama, hoparlörde ise bobin ve koninin ileri–geri hareketini üretir.',
    },
  },
]

const waveRegions = [
  {
    key: 'dalga-anatomisi', shape: { x: 0, y: 0, width: 768, height: 535 }, zoom: { x: 25, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/dalgalar/details/dalganin-anatomisi.jpg',
      srcSet: '/lesson-assets/fizik/dalgalar/details/dalganin-anatomisi-900.jpg 900w, /lesson-assets/fizik/dalgalar/details/dalganin-anatomisi.jpg 1536w',
      alt: 'Enine ve boyuna dalgada titreşim-yayılma yönlerini, genlik, dalga boyu, periyot ve hızı gösteren bilimsel levha.',
      title: 'Dalganın anatomisi',
      note: 'Enine dalgada titreşim yayılmaya dik, boyuna dalgada paraleldir. Bir periyotta dalga bir dalga boyu ilerlediği için v=λ·f; periyot ile frekans birbirinin tersidir.',
    },
  },
  {
    key: 'yay-atmalari', shape: { x: 768, y: 0, width: 768, height: 535 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/dalgalar/details/yay-atmalari.jpg',
      srcSet: '/lesson-assets/fizik/dalgalar/details/yay-atmalari-900.jpg 900w, /lesson-assets/fizik/dalgalar/details/yay-atmalari.jpg 1536w',
      alt: 'Yay atmasının sabit ve serbest uçtan yansımasını, yapıcı ve yıkıcı girişimi önce-çakışma-sonra dizisiyle gösteren levha.',
      title: 'Yay atmaları, yansıma ve süperpozisyon',
      note: 'Sabit uçtan yansıyan atma ters, serbest uçtan yansıyan atma düzdür. Atmalar çakışırken uzanımlar cebirsel toplanır; karşılaşmadan sonra biçimlerini koruyarak yollarına devam eder.',
    },
  },
  {
    key: 'su-dalgalari', shape: { x: 0, y: 535, width: 768, height: 489 }, zoom: { x: 25, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/dalgalar/details/su-dalgalari.jpg',
      srcSet: '/lesson-assets/fizik/dalgalar/details/su-dalgalari-900.jpg 900w, /lesson-assets/fizik/dalgalar/details/su-dalgalari.jpg 1536w',
      alt: 'Su dalgalarında yansıma, derinden sığa kırılma ve dar-geniş aralıktan kırınımı dalga cepheleriyle gösteren bilimsel levha.',
      title: 'Su dalgalarında yansıma, kırılma ve kırınım',
      note: 'Yansımada gelme ve yansıma açıları eşittir. Derinden sığa geçen su dalgasında kaynak frekansı değişmez; hız ve dalga boyu azalır, yön normale yaklaşır. Aralık dalga boyuna yaklaştıkça kırınım belirginleşir.',
    },
  },
  {
    key: 'ses-deprem', shape: { x: 768, y: 535, width: 768, height: 489 }, zoom: { x: 75, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/dalgalar/details/ses-deprem.jpg',
      srcSet: '/lesson-assets/fizik/dalgalar/details/ses-deprem-900.jpg 900w, /lesson-assets/fizik/dalgalar/details/ses-deprem.jpg 1536w',
      alt: 'Sesin sıkışma-genleşmelerle yayılmasını, frekans ve genlik etkisini, rezonansı, P ve S deprem dalgalarını gösteren bilimsel levha.',
      title: 'Ses ve deprem dalgaları',
      note: 'Ses mekanik ve boyuna bir dalgadır; boşlukta yayılmaz. Frekans sesin inceliğini, genlik şiddetini etkiler. P dalgaları boyuna ve hızlıdır; S dalgaları enine olup sıvılarda ilerleyemez.',
    },
  },
]

const opticsRegions = [
  {
    key: 'isik-golge-ayna', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/optik/details/isik-golge-duzlem-ayna.jpg',
      srcSet: '/lesson-assets/fizik/optik/details/isik-golge-duzlem-ayna-900.jpg 900w, /lesson-assets/fizik/optik/details/isik-golge-duzlem-ayna.jpg 1536w',
      alt: 'Aydınlanmanın uzaklık ve açıya bağlılığını, noktasal-geniş kaynak gölgelerini ve düzlem aynada sanal görüntüyü gösteren bilimsel levha.',
      title: 'Işık, gölge ve düzlem ayna',
      note: 'Aydınlanma ışık şiddeti ve yüzey normaliyle doğrultu uyumuyla artar, uzaklığın karesiyle azalır. Geniş kaynak yarı gölge oluşturur. Düzlem aynada görüntü sanal, düz, cisimle eş boyda ve aynaya eşit dik uzaklıktadır.',
    },
  },
  {
    key: 'kuresel-aynalar', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/optik/details/kuresel-aynalar.jpg',
      srcSet: '/lesson-assets/fizik/optik/details/kuresel-aynalar-900.jpg 900w, /lesson-assets/fizik/optik/details/kuresel-aynalar.jpg 1536w',
      alt: 'Çukur ve tümsek aynalarda asal ışınları, F-C noktalarını ve farklı cisim konumlarının görüntülerini gösteren bilimsel levha.',
      title: 'Küresel aynalarda görüntü',
      note: 'Çukur ayna cisim konumuna göre gerçek-ters ya da sanal-düz görüntü oluşturabilir. Tümsek ayna ise gerçek cisim için her zaman aynanın arkasında, sanal, düz ve küçültülmüş görüntü verir.',
    },
  },
  {
    key: 'kirilma-renk', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/optik/details/kirilma-renk.jpg',
      srcSet: '/lesson-assets/fizik/optik/details/kirilma-renk-900.jpg 900w, /lesson-assets/fizik/optik/details/kirilma-renk.jpg 1536w',
      alt: 'Snell yasasını, yoğun ortamdan az yoğun ortama kritik açı ve tam yansımayı, prizma renk ayrımını gösteren bilimsel levha.',
      title: 'Kırılma, tam yansıma ve renk',
      note: 'Işık optikçe yavaş ortama geçerken normale yaklaşır. Tam yansıma yalnız büyük indisli ortamdan küçük indisli ortama geçişte ve kritik açıdan büyük gelişte oluşur. Sınırda frekans sabit, hız ve dalga boyu değişir; prizmada mor kırmızıdan çok sapar.',
    },
  },
  {
    key: 'mercekler-goruntu', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.5 },
    detail: {
      src: '/lesson-assets/fizik/optik/details/mercekler-goruntu.jpg',
      srcSet: '/lesson-assets/fizik/optik/details/mercekler-goruntu-900.jpg 900w, /lesson-assets/fizik/optik/details/mercekler-goruntu.jpg 1536w',
      alt: 'Yakınsak ve ıraksak merceklerde asal ışınları, F-2F görüntü durumlarını, göz ve kamera odaklamasını gösteren bilimsel levha.',
      title: 'Mercekler ve görüntü',
      note: 'Yakınsak mercek F dışındaki gerçek cisimleri ekran üzerinde gerçek ve ters görüntüleyebilir; F içindeki cisim sanal, düz ve büyüktür. Iraksak mercek görüntüyü her zaman sanal, düz ve küçük oluşturur. Göz ve kamerada algılayıcı yüzeyde gerçek, ters görüntü oluşur.',
    },
  },
]

export function ThermalPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/isi-sicaklik-genlesme/termal-atlas.jpg"
      srcSet="/lesson-assets/fizik/isi-sicaklik-genlesme/termal-atlas-900.jpg 900w, /lesson-assets/fizik/isi-sicaklik-genlesme/termal-atlas.jpg 1536w"
      alt="Isıl denge, ısı aktarım yolları, kalorimetri ve genleşme uygulamalarını bir araya getiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={thermalRegions}
    />
  )
}

export function MotionForcePhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/hareket-ve-kuvvet/hareket-kuvvet-atlasi.jpg"
      srcSet="/lesson-assets/fizik/hareket-ve-kuvvet/hareket-kuvvet-atlasi-900.jpg 900w, /lesson-assets/fizik/hareket-ve-kuvvet/hareket-kuvvet-atlasi.jpg 1536w"
      alt="Eşit zaman hareketi, grafikler, serbest cisim diyagramı ve etki-tepki çiftlerini bir araya getiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={motionRegions}
    />
  )
}

export function WorkEnergyPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/is-guc-enerji/is-guc-enerji-atlasi.jpg"
      srcSet="/lesson-assets/fizik/is-guc-enerji/is-guc-enerji-atlasi-900.jpg 900w, /lesson-assets/fizik/is-guc-enerji/is-guc-enerji-atlasi.jpg 1536w"
      alt="İş, enerji türleri, mekanik enerji korunumu, güç ve verimi dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={energyRegions}
    />
  )
}

export function ElectrostaticPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/elektrostatik/elektrostatik-atlasi.jpg"
      srcSet="/lesson-assets/fizik/elektrostatik/elektrostatik-atlasi-900.jpg 900w, /lesson-assets/fizik/elektrostatik/elektrostatik-atlasi.jpg 1536w"
      alt="Yük korunumu, elektriklenme, Coulomb kuvveti, elektrik alan ve iletken davranışını dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={electrostaticRegions}
    />
  )
}

export function ElectricCircuitsPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/elektrik-devreleri/elektrik-devreleri-atlasi.jpg"
      srcSet="/lesson-assets/fizik/elektrik-devreleri/elektrik-devreleri-atlasi-900.jpg 900w, /lesson-assets/fizik/elektrik-devreleri/elektrik-devreleri-atlasi.jpg 1536w"
      alt="Akım ve gerilim, Ohm yasası, seri-paralel bağlantılar ile elektriksel güç ve güvenliği dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={circuitRegions}
    />
  )
}

export function MagnetismPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/manyetizma/manyetizma-atlasi.jpg"
      srcSet="/lesson-assets/fizik/manyetizma/manyetizma-atlasi-900.jpg 900w, /lesson-assets/fizik/manyetizma/manyetizma-atlasi.jpg 1536w"
      alt="Mıknatıs ve Dünya alanı, akımın alanı, manyetik kuvvet ile elektromanyetik uygulamaları dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={magnetismRegions}
    />
  )
}

export function WavesPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/dalgalar/dalgalar-atlasi.jpg"
      srcSet="/lesson-assets/fizik/dalgalar/dalgalar-atlasi-900.jpg 900w, /lesson-assets/fizik/dalgalar/dalgalar-atlasi.jpg 1536w"
      alt="Dalga türleri, yay atmalarında yansıma, su dalgası olayları ile ses ve deprem dalgalarını dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={waveRegions}
    />
  )
}

export function OpticsPhysicsAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/fizik/optik/optik-atlasi.jpg"
      srcSet="/lesson-assets/fizik/optik/optik-atlasi-900.jpg 900w, /lesson-assets/fizik/optik/optik-atlasi.jpg 1536w"
      alt="Işık-gölge ve düzlem ayna, küresel aynalar, kırılma-renk ile mercek-görüntü olaylarını dört sahnede birleştiren bilimsel atlas."
      activeRegion={activeRegion}
      regions={opticsRegions}
    />
  )
}
