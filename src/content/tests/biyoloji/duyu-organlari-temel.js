export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Reseptörler ve Göz (Çok Kolay)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Dış çevreden veya iç çevreden gelen uyarıları (ışık, ses, sıcaklık, kimyasal madde) algılayan özelleşmiş hücrelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Reseptör (Almaç)' },
          { id: 'B', text: 'Motor Nöron' },
          { id: 'C', text: 'Efektör' },
          { id: 'D', text: 'Kas hücresi' },
          { id: 'E', text: 'Alyuvar' }
        ],
        correctOptionId: 'A',
        explanation: 'Uyarıları alan (receive eden) ve bunları elektriksel sinyale (impulse) dönüştüren hücrelere Reseptör denir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Gözde ışığı algılayan (FOTORESEPTÖR), kulakta sesi algılayan (MEKANORESEPTÖR) reseptörler bulunur. Buna göre burunda kokuyu algılayan reseptör çeşidi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Termoreseptör' },
          { id: 'B', text: 'Kemoreseptör (Kimyasal)' },
          { id: 'C', text: 'Fotoreseptör' },
          { id: 'D', text: 'Nosiseptör (Ağrı)' },
          { id: 'E', text: 'Mekanoreseptör' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku ve tat alma duyularında maddeler sıvı içinde çözünür. Bu kimyasal maddeleri algılayan reseptörler "Kemoreseptör"dür.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Bütün duyu organlarından gelen uyarılar sinir hücrelerinde hangi DEĞİŞİKLİĞE dönüştürülerek beyne iletilir?',
        options: [
          { id: 'A', text: 'Hormona dönüşür' },
          { id: 'B', text: 'Sese dönüşür' },
          { id: 'C', text: 'Elektrokimyasal uyarılara (İmpulsa/Aksiyon potansiyeline)' },
          { id: 'D', text: 'Kan hücresine' },
          { id: 'E', text: 'Kasılarak kas gücüne' }
        ],
        correctOptionId: 'C',
        explanation: 'Reseptörlerin temel görevi; fiziksel (ışık/ses) veya kimyasal uyarıyı, sinir sisteminin tek anladığı dil olan Elektriksel İmpulsa dönüştürmektir (Transdüksiyon).'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Gözün en DIŞ kısmında bulunan, gözü koruyan, ön tarafta saydamlaşıp kubbeleşerek KORNEA (Saydam tabaka) adını alan beyaz kısım neresidir?',
        options: [
          { id: 'A', text: 'Ağ tabaka (Retina)' },
          { id: 'B', text: 'Sert tabaka (Sklera)' },
          { id: 'C', text: 'Damar tabaka (Koroid)' },
          { id: 'D', text: 'Kör nokta' },
          { id: 'E', text: 'Göz merceği' }
        ],
        correctOptionId: 'B',
        explanation: 'Gözün dıştan içe 3 tabakası vardır: Sert, Damar ve Ağ tabaka. Sert tabaka (Sklera) gözün beyazıdır ve önde Korneayı oluşturur.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Dışarıdan gelen ışığın GÖZDE İLK KIRILDIĞI ve merceğe yönlendirildiği tabaka (Gözün en önündeki saydam pencere) hangisidir?',
        options: [
          { id: 'A', text: 'Retina' },
          { id: 'B', text: 'İris' },
          { id: 'C', text: 'Kornea (Saydam Tabaka)' },
          { id: 'D', text: 'Kör nokta' },
          { id: 'E', text: 'Sarı benek' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık göze girerken en güçlü kırılmayı (yaklaşık 2/3 oranında) en öndeki kavisli yüzey olan Korneada yaşar.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Gözümüze rengini (mavi, ela, kahverengi) veren ve damar tabakanın önde farklılaşmasıyla oluşan yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kornea' },
          { id: 'B', text: 'İris' },
          { id: 'C', text: 'Göz bebeği (Pupilla)' },
          { id: 'D', text: 'Ağ tabaka' },
          { id: 'E', text: 'Göz merceği' }
        ],
        correctOptionId: 'B',
        explanation: 'İris, gözün renkli kısmıdır. İçindeki kaslar sayesinde kasılıp gevşeyerek ortasındaki deliğin (Göz bebeği) büyüklüğünü ayarlar.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Çok aydınlık bir ortamdan KANRANLIK bir odaya girdiğimizde "Göz bebeğimiz (Pupilla)" nasıl tepki verir?',
        options: [
          { id: 'A', text: 'Değişmez.' },
          { id: 'B', text: 'Daha çok ışık alabilmek için GENİŞLER.' },
          { id: 'C', text: 'Daha az ışık almak için DARALIR.' },
          { id: 'D', text: 'Gözyaşı üretir.' },
          { id: 'E', text: 'Tamamen kapanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz bebeği karanlıkta (ortam loş olduğunda) genişleyerek içeri giren ışık miktarını artırır. Çok aydınlıkta ise daralır. Bu reflekstir.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Gözün İÇ TABAKASINDA (Retina) bulunan, loş/karanlık ışıkta şekilleri (siyah-beyaz) görmemizi sağlayan hücrelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Koni hücreleri' },
          { id: 'B', text: 'Çubuk (Baston) hücreleri' },
          { id: 'C', text: 'Sert hücreler' },
          { id: 'D', text: 'Göz merceği' },
          { id: 'E', text: 'Kör nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Çubuk (Rod) hücreleri ışığa çok duyarlıdır ama renkleri ayırt edemez. Gece görmemizi (loş ışıkta siyah-beyaz) sağlarlar.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Gündüzleri AYDINLIKTA RENKLİ ve net görmemizi sağlayan reseptörler (hücreler) hangileridir?',
        options: [
          { id: 'A', text: 'Çubuk hücreleri' },
          { id: 'B', text: 'Koni (Koniç) hücreleri' },
          { id: 'C', text: 'İris kasları' },
          { id: 'D', text: 'Sklera' },
          { id: 'E', text: 'Saydam sıvı' }
        ],
        correctOptionId: 'B',
        explanation: 'Koni hücreleri (Kırmızı, Yeşil, Mavi) yüksek ışıkta çalışır ve renkli görmeyi, ayrıntıları net seçmemizi sağlar.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Gözün arka kısmında bulunan, Koni hücrelerinin EN YOĞUN bulunduğu ve görüntünün EN NET (ve ters) düştüğü bölgeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Sarı Benek (Sarı nokta / Makula)' },
          { id: 'B', text: 'Kör nokta' },
          { id: 'C', text: 'Kornea' },
          { id: 'D', text: 'Optik sinir' },
          { id: 'E', text: 'Sert tabaka' }
        ],
        correctOptionId: 'A',
        explanation: 'Sarı benek (Fovea sentralis), retinanın tam ortasıdır. Sadece koni hücreleriyle doludur ve en keskin görüşün sağlandığı odak noktasıdır.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Görme sinirlerinin gözden ÇIKTIĞI ve üzerinde HİÇBİR RESEPTÖRÜN BULUNMADIĞI bölge neresidir?',
        options: [
          { id: 'A', text: 'Sarı Benek' },
          { id: 'B', text: 'Kör Nokta' },
          { id: 'C', text: 'Göz Bebeği' },
          { id: 'D', text: 'Kornea' },
          { id: 'E', text: 'Mercek' }
        ],
        correctOptionId: 'B',
        explanation: 'Optik sinirlerin retinayı delip beyne gittiği yerde reseptör (çubuk/koni) sığmaz. Işık buraya düşerse görüntü oluşmaz, buraya Kör Nokta denir.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Uzağa veya yakına baktığımızda, görüntünün tam "Sarı Benek" üzerine düşmesi için GÖZ MERCEĞİNİN kalınlaşıp incelmesine (kırıcılığını değiştirmesine) ne ad verilir?',
        options: [
          { id: 'A', text: 'Göz UYUMU (Akomodasyon)' },
          { id: 'B', text: 'Körlük' },
          { id: 'C', text: 'Renk körlüğü' },
          { id: 'D', text: 'Katarakt' },
          { id: 'E', text: 'Göz tansiyonu' }
        ],
        correctOptionId: 'A',
        explanation: 'Odaklanmak için merceğin şekil değiştirmesine göz uyumu denir. (Yakına bakarken şişkinleşir, uzağa bakarken yassılaşır).'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Rodopsin adı verilen pigment (madde) çubuk hücrelerinde karanlıkta sentezlenerek az ışıkta görmemizi sağlar. Rodopsin sentezi için vücudumuzun HANGİ VİTAMİNE ihtiyacı vardır?',
        options: [
          { id: 'A', text: 'C Vitamini' },
          { id: 'B', text: 'D Vitamini' },
          { id: 'C', text: 'A Vitamini' },
          { id: 'D', text: 'B Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'C',
        explanation: 'A vitamini eksikliğinde rodopsin sentezlenemez ve Gece Körlüğü hastalığı ortaya çıkar.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Gözün DAMAR TABAKA (Koroid) kısmının temel görevi nedir?',
        options: [
          { id: 'A', text: 'Işığı ilk kıran yer olmaktır.' },
          { id: 'B', text: 'Gözü dışarıdan sarmak ve sertlik vermektir.' },
          { id: 'C', text: 'Kan damarları sayesinde retinayı BESLEMEK ve pigmentleriyle göz içini karanlık bir odaya çevirmektir.' },
          { id: 'D', text: 'Sinirleri beyne taşımaktır.' },
          { id: 'E', text: 'Gözyaşı üretmektir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Damar tabaka (Koroid), adından anlaşıldığı gibi kan damarlarınca zengindir. Ayrıca siyah pigmenti sayesinde içeride ışık yansımasını (kamaşmayı) önler.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Sağ ve sol gözden çıkan görme sinirlerinin (optik sinirler), beyin kabuğuna (oksipital loba) gitmeden önce BEYNİN ALTINDA çapraz yaptığı (X şeklini aldığı) bölgeye ne denir?',
        options: [
          { id: 'A', text: 'Optik Kiazma' },
          { id: 'B', text: 'Kör nokta' },
          { id: 'C', text: 'Omurilik soğanı' },
          { id: 'D', text: 'Korpus Kallozum' },
          { id: 'E', text: 'Sarı nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Optik Kiazma, her iki gözün sol görme alanının beynin sağına, sağ görme alanının beynin soluna gönderilmesi için sinirlerin çaprazlandığı yerdir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Göz Kusurları ve Kulak (Çok Kolay)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Göz küresinin önden arkaya doğru UZAMASI (çapının büyümesi) nedeniyle, uzağa bakıldığında görüntünün SARI BENEĞİN ÖNÜNE düştüğü "UZAĞI NET GÖREMEME" kusuru hangisidir?',
        options: [
          { id: 'A', text: 'Miyopluk' },
          { id: 'B', text: 'Hipermetropluk' },
          { id: 'C', text: 'Astigmatizm' },
          { id: 'D', text: 'Presbiyopi' },
          { id: 'E', text: 'Katarakt' }
        ],
        correctOptionId: 'A',
        explanation: 'Miyop (Uzağı görememe). Göz uzun olduğu için görüntü erken odaklanır (retinanın önüne düşer).'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Uzağı göremeyen (Miyop) bir kişinin gözlük camı olarak HANGİ MERCEK kullanılmalıdır?',
        options: [
          { id: 'A', text: 'İnce kenarlı mercek' },
          { id: 'B', text: 'Kalın kenarlı (İçbükey / Konkav) mercek' },
          { id: 'C', text: 'Silindirik mercek' },
          { id: 'D', text: 'Düz ayna' },
          { id: 'E', text: 'Renkli mercek' }
        ],
        correctOptionId: 'B',
        explanation: 'Görüntü erken odaklandığı (öne düştüğü) için, kalın kenarlı mercekle ışınlar biraz dağıtılır ve görüntünün daha arkaya (retinaya) düşmesi sağlanır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Gözün çapının NORMALDEN KISA olması nedeniyle görüntünün SARI BENEĞİN ARKASINA düştüğü, "YAKINI NET GÖREMEME" kusuru hangisidir?',
        options: [
          { id: 'A', text: 'Miyop' },
          { id: 'B', text: 'Hipermetrop' },
          { id: 'C', text: 'Astigmat' },
          { id: 'D', text: 'Şaşılık' },
          { id: 'E', text: 'Renk körlüğü' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipermetrop, yakını görememektir. Görüntü arkaya düştüğü için İnce Kenarlı mercekle (ışığı erken toplayarak) tedavi edilir.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Kornea veya merceğin yüzeyindeki kavisin (pürüzlülüğün) bozulması nedeniyle ışınların tek bir noktada odaklanamadığı, "Bulanık ve Şekil Bozukluğu (Çizgilerin eğri görünmesi)" olan kusur hangisidir?',
        options: [
          { id: 'A', text: 'Katarakt' },
          { id: 'B', text: 'Miyop' },
          { id: 'C', text: 'Astigmatizm (Silindirik mercekle düzeltilir)' },
          { id: 'D', text: 'Hipermetrop' },
          { id: 'E', text: 'Glokom' }
        ],
        correctOptionId: 'C',
        explanation: 'Astigmatta kornea kavisli değil dalgalıdır (yamuktur). Bu yüzden çok sayıda odak noktası oluşur, görüntü her yönden bulanıktır.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Yaşlanmaya bağlı olarak göz merceğinin ESNEKLİĞİNİ KAYBETMESİ (şişkinleşememesi) sonucu, tıpkı hipermetrop gibi YAKINI GÖREMEME hastalığı hangisidir?',
        options: [
          { id: 'A', text: 'Miyop' },
          { id: 'B', text: 'Astigmat' },
          { id: 'C', text: 'Presbiyopi' },
          { id: 'D', text: 'Şaşılık' },
          { id: 'E', text: 'Gece körlüğü' }
        ],
        correctOptionId: 'C',
        explanation: 'Presbiyopi "Yaşlı gözü" demektir. Yakına uyum yapamayan mercek yüzünden kişi kitabı uzaklaştırarak okur. (İnce kenarlı mercekle düzeltilir).'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Kulak, İşitme ve DENGE organıdır. Kulağı dış, orta ve iç kulak olarak 3\'e ayırdığımızda, KULAK KEPÇESİ hangi kısımda yer alır?',
        options: [
          { id: 'A', text: 'İç Kulak' },
          { id: 'B', text: 'Orta Kulak' },
          { id: 'C', text: 'Dış Kulak' },
          { id: 'D', text: 'Beyincik' },
          { id: 'E', text: 'Östaki borusu' }
        ],
        correctOptionId: 'C',
        explanation: 'Dış kulak, Kulak Kepçesi ve Kulak Yolundan (dış kulak yolundan) oluşur. Ses dalgalarını toplar.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Dış kulak ile Orta kulağı birbirinden AYIRAN, ses dalgaları çarpınca titreşen gergin yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Östaki borusu' },
          { id: 'B', text: 'Kulak zarı (Timpanik zar)' },
          { id: 'C', text: 'Oval pencere' },
          { id: 'D', text: 'Korti organı' },
          { id: 'E', text: 'Yarım daire kanalları' }
        ],
        correctOptionId: 'B',
        explanation: 'Kulak zarı havadaki ses dalgalarını alıp mekanik titreşime çeviren, dış ile orta kulak sınırındaki ince hasardır.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Orta kulakta bulunan ve kulak zarının titreşimini GÜÇLENDİREREK iç kulağa (Oval pencereye) aktaran 3 KÜÇÜK KEMİK sırasıyla hangileridir?',
        options: [
          { id: 'A', text: 'Pıhtı - Plazma - Serum' },
          { id: 'B', text: 'Östaki - Salyangoz - Tulumcuk' },
          { id: 'C', text: 'Çekiç - Örs - Üzengi' },
          { id: 'D', text: 'Kornea - İris - Mercek' },
          { id: 'E', text: 'Sklera - Koroid - Retina' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekiç, örs ve üzengi (malleus, incus, stapes) vücudumuzun en küçük kemikleridir. Kaldıraç gibi çalışarak sesi (yaklaşık 15-20 kat) yükseltirler.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Dağa çıkarken (veya uçakta) basınç değiştiğinde kulaklarımız tıkanır. Esnediğimizde veya yutkunduğumuzda bu tıkanıklık açılır. Orta kulak ile YUTAK arasında bağlantı kurarak İÇ BASINCI DENGELEYEN boru hangisidir?',
        options: [
          { id: 'A', text: 'Östaki Borusu' },
          { id: 'B', text: 'Dış kulak yolu' },
          { id: 'C', text: 'Yarım daire kanalı' },
          { id: 'D', text: 'Kohlea (Salyangoz)' },
          { id: 'E', text: 'Soluk borusu' }
        ],
        correctOptionId: 'A',
        explanation: 'Östaki borusu, orta kulağın havasını yutağa (boğaza) açarak, kulak zarının dış ve iç basıncının eşitlenmesini sağlar (zarın patlamasını önler).'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Sesi (işitmeyi) algılayan GERÇEK RESEPTÖRLER (Korti organı) ile Dengeyi sağlayan yapılar (Yarım daire vb.) kulağın HANGİ bölümünde bulunur?',
        options: [
          { id: 'A', text: 'Dış kulak' },
          { id: 'B', text: 'Orta kulak' },
          { id: 'C', text: 'İç kulak' },
          { id: 'D', text: 'Kulak kepçesi' },
          { id: 'E', text: 'Östaki borusu' }
        ],
        correctOptionId: 'C',
        explanation: 'İç kulak çok hassas yapıdır. İçinde hem işitme (Salyangoz/Kohlea) hem de denge (Yarım daire kanalları, kesecik, tulumcuk) merkezleri bulunur.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'İç kulakta bulunan "Salyangoz (Kohlea)" görünümündeki yapının GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Tansiyonu ayarlamak' },
          { id: 'B', text: 'Dengeyi sağlamak' },
          { id: 'C', text: 'İŞİTMEYİ (Ses titreşimlerini impulsa çevirmeyi) gerçekleştirmek' },
          { id: 'D', text: 'Göz yaşını boşaltmak' },
          { id: 'E', text: 'Kan basıncını ölçmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Kohlea (Salyangoz) işitme merkezidir. İçindeki "Korti organı"nda bulunan tüylü hücreler (Mekanoreseptörler) sesi elektriğe çevirir.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Salyangozun içindeki sıvının titreşmesiyle hareket eden tüylü reseptör hücrelerin bulunduğu, gerçek İŞİTME ORGANININ adı nedir?',
        options: [
          { id: 'A', text: 'Korti Organı' },
          { id: 'B', text: 'Sarı Benek' },
          { id: 'C', text: 'Optik Kiazma' },
          { id: 'D', text: 'Östaki' },
          { id: 'E', text: 'Timpanik zar' }
        ],
        correctOptionId: 'A',
        explanation: 'Korti organı salyangoz kanalının zemininde (bazilar zar) yer alır, tüyleri üstteki zara (tektoryal zar) sürtünerek sesi algılar.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi İç Kulakta VÜCUT DENGESİNİ SAĞLAMAKLA GÖREVLİ yapılardan biridir?',
        options: [
          { id: 'A', text: 'Çekiç' },
          { id: 'B', text: 'Östaki borusu' },
          { id: 'C', text: 'Yarım Daire Kanalları' },
          { id: 'D', text: 'Kulak zarı' },
          { id: 'E', text: 'Korti organı' }
        ],
        correctOptionId: 'C',
        explanation: 'İç kulaktaki Denge merkezi: Yarım Daire Kanalları (dönme hareketi) ile Tulumcuk ve Kesecik\'tir (yerçekimi ve doğrusal hareket).'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Kendi etrafında hızla dönen bir çocuk, durduğunda bile "başının dönmeye (etrafın dönmeye) devam ettiğini" hisseder. Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Beynin oksijensiz kalması' },
          { id: 'B', text: 'Gözlerinin yorulması' },
          { id: 'C', text: 'Yarım daire kanallarındaki SIVININ (Endolenf) eylemsizlik nedeniyle DÖNMEYE DEVAM ETMESİ' },
          { id: 'D', text: 'Kan basıncının düşmesi' },
          { id: 'E', text: 'Korti organının bozulması' }
        ],
        correctOptionId: 'C',
        explanation: 'Yarım daire kanallarındaki sıvı (içindeki tüylü hücreler sayesinde dönmeyi algılarız) biz dursak da çay bardağındaki su gibi dönmeye devam eder ve başımız dönüyor sanırız.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Tulumcuk (Utrikul) ve Kesecik (Sakkul) içinde bulunan, başımızı öne eğdiğimizde ağırlığıyla tüyleri eğerek "Yerçekimine karşı konumumuzu" bildiren kalsiyum karbonat taşlarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Böbrek taşı' },
          { id: 'B', text: 'Otoloit (Kulak) Taşları' },
          { id: 'C', text: 'Safra taşı' },
          { id: 'D', text: 'Mercek' },
          { id: 'E', text: 'Diş minesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Otolit (oto=kulak, lith=taş). Bu küçük taşlar jölemsi bir maddenin içindedir, yerçekimine göre sağa sola kayarak denge reseptörlerini uyarırlar.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'İşitme ve Denge (Çok Kolay)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Havada yayılan bir ses dalgası kulağa girdiğinde, KATI(kemik) ortamdan ÖNCE hangi yapıya çarparak ilk fiziksel titreşimi yaratır?',
        options: [
          { id: 'A', text: 'Korti organı' },
          { id: 'B', text: 'Kulak zarı (Timpanik zar)' },
          { id: 'C', text: 'Oval pencere' },
          { id: 'D', text: 'Örs kemiği' },
          { id: 'E', text: 'İç kulak sıvısı' }
        ],
        correctOptionId: 'B',
        explanation: 'Ses dalgaları (gaz) kulak yolundan geçer ve "Kulak zarına" çarpar. Zar tıpkı bir davul derisi gibi titreşir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Kulak zarı titreştikten sonra bu titreşimler sırasıyla HANGİ ORTA KULAK KEMİKÇİKLERİ üzerinden İç Kulağa iletilir?',
        options: [
          { id: 'A', text: 'Üzengi - Çekiç - Örs' },
          { id: 'B', text: 'Çekiç - Örs - Üzengi' },
          { id: 'C', text: 'Örs - Üzengi - Çekiç' },
          { id: 'D', text: 'Çekiç - Üzengi - Örs' },
          { id: 'E', text: 'Hepsi aynı anda titreşir, sırası yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sesin geçiş sırası: Zar -> Çekiç (Malleus) -> Örs (Incus) -> Üzengi (Stapes) -> Oval pencere şeklindedir.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Üzengi kemiğinin, titreşimleri Orta Kulaktan "İç Kulaktaki (Salyangozdaki) sıvıya" AKTARDIĞI ZARLI BAĞLANTI (giriş kapısı) neresidir?',
        options: [
          { id: 'A', text: 'Kör Nokta' },
          { id: 'B', text: 'Yuvarlak Pencere' },
          { id: 'C', text: 'Oval Pencere' },
          { id: 'D', text: 'Östaki Borusu' },
          { id: 'E', text: 'Timpanik Zar' }
        ],
        correctOptionId: 'C',
        explanation: 'Üzengi kemiği, Salyangozun giriş kapısı olan "Oval Pencere" adlı zara vurarak içerdeki sıvıyı dalgalandırır.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Salyangozun (Kohleanın) içi ne ile doludur?',
        options: [
          { id: 'A', text: 'Hava' },
          { id: 'B', text: 'Kemik iliği' },
          { id: 'C', text: 'Sıvı (Endolenf ve Perilenf sıvıları)' },
          { id: 'D', text: 'Kan' },
          { id: 'E', text: 'Gözyaşı' }
        ],
        correctOptionId: 'C',
        explanation: 'İç kulak kanalları havayla değil, perilenf ve endolenf adı verilen sıvılarla doludur. Titreşim burada "Sıvı Dalgasına" dönüşür.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'İşitme duyusu (kulaktan gelen sinirler) beynin kabuğundaki HANGİ LOBA giderek "ses" olarak algılanır?',
        options: [
          { id: 'A', text: 'Oksipital (Arka) Lob' },
          { id: 'B', text: 'Temporal (Şakak/Yan) Lob' },
          { id: 'C', text: 'Frontal (Ön) Lob' },
          { id: 'D', text: 'Parietal (Üst) Lob' },
          { id: 'E', text: 'Beyincik' }
        ],
        correctOptionId: 'B',
        explanation: 'İşitme merkezi şakaklarda yer alan Temporal lobdadır. (Görme = Oksipital).'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Çok yüksek şiddetli bir ses geldiğinde (Patlama vb.) KULAK ZARININ patlamaması için, Östaki borusu üzerinden orta kulağa ne GİRMESİ sağlanır?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Kan' },
          { id: 'C', text: 'Hava (Yutaktan gelen hava)' },
          { id: 'D', text: 'Kemik' },
          { id: 'E', text: 'Kulak kiri' }
        ],
        correctOptionId: 'C',
        explanation: 'Top patlarken askerlere ağızlarını açması söylenir. Böylece yutaktan (boğazdan) giren hava Östaki borusuyla zara arkadan baskı yapar, dışarıdan gelen şiddetli basıncı dengeler.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Kulak zarı, kemikçikler ve iç kulaktaki sıvılarla iletilen "FİZİKSEL / MEKANİK TİTREŞİMLER", hangi yapının sayesinde "SİNİR İMPULSLARINA" dönüşür?',
        options: [
          { id: 'A', text: 'Korti Organı (Tüylü mekanoreseptörler)' },
          { id: 'B', text: 'Örs Kemiği' },
          { id: 'C', text: 'Tulumcuk' },
          { id: 'D', text: 'Kör nokta' },
          { id: 'E', text: 'İris' }
        ],
        correctOptionId: 'A',
        explanation: 'Transdüksiyonu (Dönüşümü) yapan yer reseptörlerdir. Seste reseptör "Korti organındaki tüylü hücreler"dir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Yarım Daire Kanalları HANGİ TÜR hareketi algılamakla görevlidir?',
        options: [
          { id: 'A', text: 'Sadece ses dalgalarını' },
          { id: 'B', text: 'Başımızın DÖNME (açısal ivme) hareketlerini' },
          { id: 'C', text: 'Aşağı-yukarı asansör hareketini' },
          { id: 'D', text: 'Işığın geliş yönünü' },
          { id: 'E', text: 'Kan basıncını' }
        ],
        correctOptionId: 'B',
        explanation: 'X, Y, Z eksenlerindeki üç adet Yarım Daire Kanalı dönme, takla atma gibi açısal hareketlerdeki dengeyi (Dinamik denge) sağlar.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Asansörde yukarı çıkarken veya araba aniden hızlandığında "İç organlarımız çekiliyormuş" gibi hissetmemizi (DOĞRUSAL hareketi) algılayan iç kulak yapıları hangileridir?',
        options: [
          { id: 'A', text: 'Çekiç ve Örs' },
          { id: 'B', text: 'Tulumcuk (Utrikul) ve Kesecik (Sakkul)' },
          { id: 'C', text: 'Östaki borusu' },
          { id: 'D', text: 'Kohlea' },
          { id: 'E', text: 'Kulak zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Tulumcuk ve kesecik doğrusal (ileri-geri, aşağı-yukarı) ivmeyi ve başın yerçekimine göre statik konumunu algılar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Kulağımızdan çıkan DENGE (vestibüler) sinirleri beynin hangi kısmına giderek vücudun kas dengesini kurmasına yardımcı olur?',
        options: [
          { id: 'A', text: 'Beyincik (Serebellum)' },
          { id: 'B', text: 'Hipotalamus' },
          { id: 'C', text: 'Omurilik soğanı' },
          { id: 'D', text: 'Hipofiz bezi' },
          { id: 'E', text: 'Koku soğancığı' }
        ],
        correctOptionId: 'A',
        explanation: 'Beyincik denge organıdır. İç kulaktaki denge merkezinden, gözlerden ve kaslardan gelen bilgileri birleştirip dengede durmamızı sağlar.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Tulumcuk ve kesecikte bulunan OTOLİT (kulak taşı) kristalleri KOPARAK / YERİNDEN ÇIKARAK yarım daire kanallarına kaçarsa, baş dönmesiyle karakterize hangi hastalık ortaya çıkar?',
        options: [
          { id: 'A', text: 'Katarakt' },
          { id: 'B', text: 'Miyop' },
          { id: 'C', text: 'Vertigo (Baş dönmesi)' },
          { id: 'D', text: 'Astım' },
          { id: 'E', text: 'Diyabet' }
        ],
        correctOptionId: 'C',
        explanation: 'Otolit taşlarının yerinden oynayıp yanlış yere sıvı dalgası yapması şiddetli baş dönmesi, yani "Vertigo"ya neden olur.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Salyangozun (Kohleanın) içindeki sıvıda dalga oluştuktan sonra, dalganın şiddetini (enerjisini) sönümleyerek ORTA KULAĞA geri yansıtan (böylece sesin içeride yankı yapmasını önleyen) esnek zarlı kapı neresidir?',
        options: [
          { id: 'A', text: 'Kulak zarı' },
          { id: 'B', text: 'Yuvarlak Pencere' },
          { id: 'C', text: 'Kör nokta' },
          { id: 'D', text: 'Oval pencere' },
          { id: 'E', text: 'Östaki borusu' }
        ],
        correctOptionId: 'B',
        explanation: 'Ses Oval pencereden girer (dalga başlar), sıvı içinde yol alır, titreşimi bıraktıktan sonra alt kattaki Yuvarlak Pencere zarını dışa esneterek (enerjiyi sönümleyerek) biter.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Yaşlanmaya veya sürekli yüksek gürültülü (Örn: Matkap) ortamda çalışmaya bağlı olarak İŞİTME KAYBI yaşayan birinde, büyük ihtimalle HANGİ HÜCRELER zarar görmüştür?',
        options: [
          { id: 'A', text: 'Kırmızı kan hücreleri' },
          { id: 'B', text: 'Korti organındaki "Tüylü Reseptör (Mekanoreseptör)" hücreleri' },
          { id: 'C', text: 'Kemik hücreleri' },
          { id: 'D', text: 'Kulak kepçesi' },
          { id: 'E', text: 'Gözdeki koni hücreleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli şiddetli dalgalar (yüksek ses), Korti organındaki hassas tüylü hücreleri kırıp koparır. Bu hücreler yenilenemediği için işitme kaybı kalıcıdır.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'İç kulağımız KAFATASININ İÇİNDE çok sağlam kemik bir boşluğun (Temporal kemik) içine gömülüdür. Bu durumun faydası nedir?',
        options: [
          { id: 'A', text: 'Kulak zarının kurumasını önlemek.' },
          { id: 'B', text: 'Kulağı fiziksel darbelerden korumak ve ses dalgalarını yansıtmak.' },
          { id: 'C', text: 'İç kulağın (hassas işitme ve denge sisteminin) fiziksel hasarlardan en üst düzeyde KORUNMASINI sağlamak.' },
          { id: 'D', text: 'Sesin içeri girmesini engellemek.' },
          { id: 'E', text: 'Beyni büyütmek.' }
        ],
        correctOptionId: 'C',
        explanation: 'İç kulak (labirent) kemik kafatasının derinliklerinde çok iyi korunan bir bölgededir, çünkü yapısı milimetrik ve çok hassastır.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Kulağımızdaki Dış Kulak Yolu, içeri toz ve böcek girmesini engellemek için ne üretir?',
        options: [
          { id: 'A', text: 'Gözyaşı' },
          { id: 'B', text: 'Tükürük' },
          { id: 'C', text: 'Kulak Kiri (Serumen - Özel bir mumsu salgı)' },
          { id: 'D', text: 'Kan' },
          { id: 'E', text: 'Mide asidi' }
        ],
        correctOptionId: 'C',
        explanation: 'Dış kulak yolundaki bezler, tozu tutan, mikrobu öldüren ve hafif asidik yapıda olan sarımsı mumsu salgıyı (kulak kirini) üretirler. (Pamuklu çubukla geriye itilmemelidir).'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Deri, Tat ve Koku (Çok Kolay)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Vücudumuzun en büyük duyu organı olan, sıcaklık, soğukluk, dokunma, basınç ve ağrı gibi farklı uyarıları algılayan organımız hangisidir?',
        options: [
          { id: 'A', text: 'Göz' },
          { id: 'B', text: 'Kulak' },
          { id: 'C', text: 'Deri' },
          { id: 'D', text: 'Burun' },
          { id: 'E', text: 'Dil' }
        ],
        correctOptionId: 'C',
        explanation: 'Deri tüm vücudu kaplayan, aynı anda hem mekanik (basınç/dokunma) hem termal (sıcak/soğuk) hem de ağrı duyusunu algılayan devasa bir organdır.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Derimizin EN DIŞ tabakası (Epidermis) ölü hücrelerden (Korun tabakası) oluşur. Bu kısmın temel görevi nedir?',
        options: [
          { id: 'A', text: 'Sıcaklığı hissetmek' },
          { id: 'B', text: 'Ter salgılamak' },
          { id: 'C', text: 'Mikropların girişini, su kaybını ve fiziksel zararları engellemek (Koruma)' },
          { id: 'D', text: 'Kan üretmek' },
          { id: 'E', text: 'Kasılmayı sağlamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Üst derinin en üstü (korun) keratinleşmiş ölü hücrelerden oluşur. Su geçirmezdir, kalınlaşarak (nasır) koruma sağlar.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Derimize esmer/siyah RENGİNİ veren MELANİN pigmenti, derinin hangi tabakasında üretilir?',
        options: [
          { id: 'A', text: 'Alt deri (Dermis)' },
          { id: 'B', text: 'Korun tabakası' },
          { id: 'C', text: 'Malpighi tabakası (Üst derinin canlı alt kısmı)' },
          { id: 'D', text: 'Kıl kökleri' },
          { id: 'E', text: 'Ter bezleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Üst derinin alt kısmı canlıdır (Malpighi). Buradaki melanosit hücreleri güneşe karşı bizi korumak için Melanin (renk) üretir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Deride bulunan reseptörler (sıcak/soğuk, dokunma, basınç reseptörleri), kan damarları, ter bezleri ve kıl kökleri derinin HANGİ TABAKASINDA bulunur?',
        options: [
          { id: 'A', text: 'Üst deri (Epidermis) koruma tabakasında' },
          { id: 'B', text: 'Alt deri (Dermis) tabakasında' },
          { id: 'C', text: 'Sadece yüzde' },
          { id: 'D', text: 'Sadece saç derisinde' },
          { id: 'E', text: 'Kornea tabakasında' }
        ],
        correctOptionId: 'B',
        explanation: 'Üst deri kan damarı ve sinir içermez. Tüm duyu reseptörleri, damarlar, ter ve yağ bezleri kalın olan ALT DERİDE (Dermis) bulunur.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Dilimizde TAT ALMAYI sağlayan, üzerinde tat reseptörlerinin bulunduğu pürüzlü tomurcuk yapılarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Papilla' },
          { id: 'B', text: 'Kıl kökü' },
          { id: 'C', text: 'Sarı benek' },
          { id: 'D', text: 'Korti organı' },
          { id: 'E', text: 'Otoloit taşı' }
        ],
        correctOptionId: 'A',
        explanation: 'Dilin üzerindeki küçük kabarcıklara Papilla denir. İçlerinde tat tomurcukları (tat kemoreseptörleri) yer alır.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Yediğimiz bir besinin tadını (tatlı, tuzlu vb.) algılayabilmemiz için O BESİNİN ne içinde ÇÖZÜNMESİ ŞARTTIR?',
        options: [
          { id: 'A', text: 'Kanda' },
          { id: 'B', text: 'Mide asidinde' },
          { id: 'C', text: 'Tükürük sıvısı içinde' },
          { id: 'D', text: 'Süt içinde' },
          { id: 'E', text: 'Havada' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemoreseptörlerin (Tat ve Koku) çalışması için maddenin çözünmüş olması gerekir. Kuru bir dilde şeker tadı alınmaz, şeker tükürükte çözündüğünde reseptörü uyarır.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Ağzımızın içi ne kadar soğuk veya sıcaksa, tat almamız o kadar zayıflar (Örn: dondurmanın tadının ilk anda tam gelmemesi). Bu neyi gösterir?',
        options: [
          { id: 'A', text: 'Dilimizin donduğunu' },
          { id: 'B', text: 'Tat reseptörlerinin çalışmasının SICAKLIKTAN etkilendiğini' },
          { id: 'C', text: 'Şekerin soğukta yok olduğunu' },
          { id: 'D', text: 'Dondurmanın tatsız olduğunu' },
          { id: 'E', text: 'Tükürüğün bittiğini' }
        ],
        correctOptionId: 'B',
        explanation: 'Tat reseptörleri belli bir sıcaklık aralığında en iyi çalışır (yaklaşık vücut sıcaklığı). Çok sıcak çay veya buz gibi dondurma tat tomurcuklarını anlık uyuşturur.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Tatlı, tuzlu, ekşi ve acının dışında, dilde algılanan BEŞİNCİ tat çeşidi (Özellikle et ve glutamat içeren gıdaların lezzeti) aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Baharatlı' },
          { id: 'B', text: 'Sıcak' },
          { id: 'C', text: 'Umami (Japonca: Lezzetli)' },
          { id: 'D', text: 'Ekşimtırak' },
          { id: 'E', text: 'Karışık' }
        ],
        correctOptionId: 'C',
        explanation: 'Dilimiz temel olarak 5 tadı algılar: Tatlı, Tuzlu, Acı, Ekşi ve Umami. Umami aminoasitlerin (proteinlerin) tadıdır.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Kokuyu algılayan hücrelerin (Koku reseptörlerinin) bulunduğu bölge BURUN BOŞLUĞUNUN neresinde yer alır?',
        options: [
          { id: 'A', text: 'Burun ucunda' },
          { id: 'B', text: 'Burun boşluğunun EN ÜST kısmındaki "SARI BÖLGE"de' },
          { id: 'C', text: 'Gırtlakta' },
          { id: 'D', text: 'Geniz etinde' },
          { id: 'E', text: 'Soluk borusunda' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku reseptörleri burun tavanında (gözlerin arasına denk gelen üst kısımda), mukusla kaplı "Sarı Bölge" adı verilen alanda bulunur.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Havadaki bir koku maddesinin (Örn: Parfüm) "Sarı Bölge"deki reseptörleri uyarabilmesi için ne içinde ÇÖZÜNMESİ gerekir?',
        options: [
          { id: 'A', text: 'Kan içinde' },
          { id: 'B', text: 'Burun mukozasının salgıladığı MUKUS sıvısı içinde' },
          { id: 'C', text: 'Ter içinde' },
          { id: 'D', text: 'Gözyaşı içinde' },
          { id: 'E', text: 'Tükürük içinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Tat nasıl tükürükte çözünüyorsa, gaz halindeki koku molekülleri de burnun iç yüzeyindeki sümüksü "mukus" tabakasında çözünerek reseptörlere temas eder.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Tüm duyu organlarından beyne giden sinirler (Görme, işitme, tat, dokunma) BEYİN KABUĞUNA (Kortekse) çıkmadan önce "Talamus" denen dağıtım merkezine uğrar. Hangi duyu TALAMUS\'A UĞRAMADAN DİREKT olarak kortekse gider?',
        options: [
          { id: 'A', text: 'Görme duyusu' },
          { id: 'B', text: 'İşitme duyusu' },
          { id: 'C', text: 'Dokunma duyusu' },
          { id: 'D', text: 'KOKU DUYUSU' },
          { id: 'E', text: 'Tat duyusu' }
        ],
        correctOptionId: 'D',
        explanation: 'Koku sinirleri evrimsel olarak en eski duyudur, talamus istasyonunu es geçerek doğrudan koku soğancığından beyin kabuğuna gider (Bu yüzden kokular çok hızlı hafıza canlandırır).'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Bir odaya ilk girdiğimizde parfüm kokusunu çok yoğun alırız, ancak 5-10 dakika sonra O ODADA KALMAYA DEVAM ETSEK BİLE kokuyu hiç hissetmeyiz. Bu durumun nedeni nedir?',
        options: [
          { id: 'A', text: 'Koku maddesinin bitmesi' },
          { id: 'B', text: 'Burnumuzun tıkanması' },
          { id: 'C', text: 'Koku reseptörlerinin ÇABUK YORULMASI (Duyusal Adaptasyon)' },
          { id: 'D', text: 'Beynin kokuyu reddetmesi' },
          { id: 'E', text: 'Nefes almayı durdurmamız' }
        ],
        correctOptionId: 'C',
        explanation: 'Koku reseptörleri sürekli aynı uyarıyı aldıklarında impuls üretimini durdurur (yabancı kokuya karşı yer açar). Buna duyusal yorulma / adaptasyon denir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Grip veya nezle olup burnumuz tıkandığında, yediğimiz YEMEKLERİN TADINI NEDEN ALAMAYIZ?',
        options: [
          { id: 'A', text: 'Dilimizin felç olması' },
          { id: 'B', text: 'Tükürüğün bitmesi' },
          { id: 'C', text: 'Tat ve Koku duyularının beyinde BİRLİKTE yorumlanması (Burnun tıkalı olması lezzet algısını sıfırlar)' },
          { id: 'D', text: 'Midenin yemeği istememesi' },
          { id: 'E', text: 'Dişlerin ağrıması' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojik "Lezzet" algısı, %80 koku, %20 tat bilgisinin birleşimidir. Koku alınamazsa (burun tıkalıysa), dilin tat alması yemeğin lezzetini hissetmek için yeterli olmaz.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Deride bulunan Ağrı reseptörlerinin (Nosiseptörler) diğer duyu reseptörleri (Örn: koku) gibi "ÇABUK YORULMAMASININ (Adapte olmamasının)" temel biyolojik sebebi nedir?',
        options: [
          { id: 'A', text: 'Çok güçlü olmaları' },
          { id: 'B', text: 'Ağrının, VÜCUTTA BİR HASAR OLDUĞUNU (tehlikeyi) bildiren koruyucu bir uyarı olması ve beyne sürekli "Beni düzelt" sinyali göndermesi gerektiği' },
          { id: 'C', text: 'Sadece yaşlılarda bulunması' },
          { id: 'D', text: 'Hiç kullanılmamaları' },
          { id: 'E', text: 'Kanla beslenmemeleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer ağrı reseptörleri yorulsaydı, elimiz sobada yanarken bir süre sonra ağrı hissetmez ve elimizi çekmezdik. Tehlike geçene kadar ağrı uyarısı bitmez.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Hangi Duyu Reseptörü çeşidi SİNİR HÜCRESİ DEĞİL, sonradan değişime uğramış Epite (Zar) hücresidir?',
        options: [
          { id: 'A', text: 'Gözdeki Koni hücreleri' },
          { id: 'B', text: 'Koku reseptörleri' },
          { id: 'C', text: 'Tat Reseptörleri (Tat tomurcukları aslında farklılaşmış epitel hücreleridir)' },
          { id: 'D', text: 'Deri hücreleri' },
          { id: 'E', text: 'Kas hücreleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Tat reseptörleri gerçek nöron değildir; farklılaşmış epitel hücreleridir ve aldıkları uyarıyı altlarındaki duyu nöronlarına iletirler. Koku reseptörleri ise gerçek nöronlardır.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Duyu Organları Karışık (Çok Kolay)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Duyu reseptörlerinden bazıları mekanik etkiye, bazıları ışığa, bazıları kimyasal maddeye duyarlıdır. Buna göre göz, kulak ve dildeki reseptörlerin TÜRÜ sırasıyla hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Fotoreseptör - Kemoreseptör - Mekanoreseptör' },
          { id: 'B', text: 'Mekanoreseptör - Fotoreseptör - Kemoreseptör' },
          { id: 'C', text: 'Fotoreseptör - Mekanoreseptör - Kemoreseptör' },
          { id: 'D', text: 'Kemoreseptör - Mekanoreseptör - Fotoreseptör' },
          { id: 'E', text: 'Termoreseptör - Kemoreseptör - Kemoreseptör' }
        ],
        correctOptionId: 'C',
        explanation: 'Göz ışığı alır (Foto-). Kulak ses dalgasının titreşimini alır (Mekano-). Dil besinlerin çözünmüş kimyasallarını alır (Kemo-).'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Derimizde "sıcak" ve "soğuk" uyarılarını algılayarak vücut sıcaklığının korunması için beyne bilgi gönderen reseptörlerin genel adı nedir?',
        options: [
          { id: 'A', text: 'Kemoreseptör' },
          { id: 'B', text: 'Termoreseptör' },
          { id: 'C', text: 'Fotoreseptör' },
          { id: 'D', text: 'Nosiseptör' },
          { id: 'E', text: 'Mekanoreseptör' }
        ],
        correctOptionId: 'B',
        explanation: 'Termo (Isı). Termoreseptörler deride ısı değişimlerini anlık olarak fark eder.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Gözümüzün DAMAR TABAKA kısmındaki siyah pigmentler, ışığı emerek göz küresinin içini karanlık bir oda haline getirir. Bu durumun faydası nedir?',
        options: [
          { id: 'A', text: 'Renklerin birbirine karışmasını sağlamak' },
          { id: 'B', text: 'Işığın göz içinde yansımasını (kamaşmasını) engelleyerek GÖRÜNTÜNÜN NET OLMASINI sağlamak' },
          { id: 'C', text: 'Göz bebeğini büyütmek' },
          { id: 'D', text: 'Gözün küçülmesini sağlamak' },
          { id: 'E', text: 'Ağlamayı durdurmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer gözün içi siyah olmasaydı, giren ışık içeride aynadaki gibi sekerek görüntüyü bulanıklaştırırdı (kamaşma).'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Göz küresinin "ön oda" ve "arka oda" denen boşluklarında bulunan sıvının (saydam sıvının) görevi nedir?',
        options: [
          { id: 'A', text: 'Gözyaşı üretmek' },
          { id: 'B', text: 'Sinirleri beslemek' },
          { id: 'C', text: 'Kornea ve göz merceğinin BESLENMESİNİ sağlamak ve gözün şeklini (basıncını) korumak' },
          { id: 'D', text: 'Renkleri algılamak' },
          { id: 'E', text: 'Uzağı yakınlaştırmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Kornea ve mercekte kan damarı yoktur (kılcal damar olsaydı görmeyi engellerdi). Bu yüzden hücreleri oradaki saydam sıvı tarafından beslenir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'İç kulağımızda bulunan Korti organı tüyleri aşırı şiddetli sesten (Örn: Konser hoparlörü) neden zarar görür?',
        options: [
          { id: 'A', text: 'Kulak zarı eridiği için' },
          { id: 'B', text: 'Ses dalgalarının yarattığı şiddetli sıvı sarsıntısı bu hassas tüyleri FİZİKSEL OLARAK KIRDIĞI / KOPARDIĞI için' },
          { id: 'C', text: 'Salyangoz büyüdüğü için' },
          { id: 'D', text: 'Östaki borusu kapandığı için' },
          { id: 'E', text: 'Beyin sesi reddettiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Korti tüyleri incecik uzantılardır. Yüksek genlikli (şiddetli) ses dalgası bir tsunami gibi vurarak bu tüyleri koparır ve geri dönüşümsüz sağırlık yaratır.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Burnumuz koku alırken hava hangi bölgeye ulaştığında reseptörler uyarılır?',
        options: [
          { id: 'A', text: 'Sarı bölgeye' },
          { id: 'B', text: 'Sarı beneğe' },
          { id: 'C', text: 'Kör noktaya' },
          { id: 'D', text: 'Burun kıllarına' },
          { id: 'E', text: 'Gırtlağa' }
        ],
        correctOptionId: 'A',
        explanation: 'Gözde görme merkezi Sarı Benek (Sarı nokta) iken, burunda koku alma bölgesi Sarı Bölgedir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Talamus, beyne giren duyular için bir dağıtım (kargo) merkezi gibidir. Aşağıdaki duyulardan hangisi bu kargo merkezine uğramadan direkt beynin ilgili kısmına gider?',
        options: [
          { id: 'A', text: 'İşitme' },
          { id: 'B', text: 'Görme' },
          { id: 'C', text: 'Koku' },
          { id: 'D', text: 'Tat' },
          { id: 'E', text: 'Dokunma' }
        ],
        correctOptionId: 'C',
        explanation: 'Koku soğancığı direk beyin kabuğuna açılır, talamusa uğramaz.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Kulak zarından başlayıp sırasıyla Çekiç, Örs ve Üzengi kemiklerinden geçen titreşimin SONRAKİ DURAĞI neresidir?',
        options: [
          { id: 'A', text: 'Östaki borusu' },
          { id: 'B', text: 'Beyin' },
          { id: 'C', text: 'Oval Pencere (İç kulağın giriş zarı)' },
          { id: 'D', text: 'Kulak kepçesi' },
          { id: 'E', text: 'Yarım daire kanalları' }
        ],
        correctOptionId: 'C',
        explanation: 'Üzengi kemiği, titreşimleri salyangozun kapısı olan "Oval Pencere"ye vurarak içerideki sıvıya aktarır.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Görme olayında ışık SIFIR (Tamamen karanlık) ise gözümüz neden hiçbir şey göremez?',
        options: [
          { id: 'A', text: 'Göz bebeği küçüldüğü için' },
          { id: 'B', text: 'Fotoreseptörlerin (Çubuk ve Koni) uyarılabilmesi için temel enerji kaynağı IŞIK (Foton) olduğu için' },
          { id: 'C', text: 'Kulaklarımız duyduğu için' },
          { id: 'D', text: 'Kör nokta büyüdüğü için' },
          { id: 'E', text: 'Retina kanadığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotoreseptörler ışıktaki enerjiyi elektriğe çevirir. Foton (Işık) yoksa uyarı yoktur, dolayısıyla görme gerçekleşmez.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Besinlerin tadını (örneğin şekerin tatlılığını) alabilmemiz için temel şart aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Besinin kırmızı olması' },
          { id: 'B', text: 'Besinin çiğnenmeden yutulması' },
          { id: 'C', text: 'Besindeki maddelerin TÜKÜRÜK içinde kimyasal olarak ÇÖZÜNMESİ' },
          { id: 'D', text: 'Besinin sıcak olması' },
          { id: 'E', text: 'Besinin sadece dilin ucuna değmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemoreseptörler sadece sulu/sıvı ortamda çözünmüş moleküllerle reaksiyona girebilir. Bu yüzden tükürük kuruduğunda tat alamayız.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Göze giren ışığın en güçlü KIRILDIĞI ilk kısım neresidir?',
        options: [
          { id: 'A', text: 'Göz Merceği' },
          { id: 'B', text: 'Retina' },
          { id: 'C', text: 'Kornea (Saydam tabaka)' },
          { id: 'D', text: 'Sklera' },
          { id: 'E', text: 'Kör Nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Mercek sadece ince ayar yapar (odaklar). Işığın göze girer girmez büküldüğü ve kırılmanın %70\'inin gerçekleştiği yer Kornea kavisidir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Yaşlılarda daha sık görülen, göz merceğinin saydamlığını yitirip (buzlanmış cam gibi) bulanık görmeye yol açtığı hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Astigmat' },
          { id: 'B', text: 'Katarakt' },
          { id: 'C', text: 'Renk körlüğü' },
          { id: 'D', text: 'Miyop' },
          { id: 'E', text: 'Glokom' }
        ],
        correctOptionId: 'B',
        explanation: 'Katarakt, mercek proteinlerinin yapısının bozulup şeffaflığını kaybetmesidir. Görme bulanıklaşır (Sisli görme).'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi derinin "Üst deri (Epidermis)" kısmında yer ALMAZ?',
        options: [
          { id: 'A', text: 'Ölü keratin hücreleri (Korun)' },
          { id: 'B', text: 'Melanin üreten canlı hücreler (Malpighi)' },
          { id: 'C', text: 'Kıl kökleri ve Kan damarları' },
          { id: 'D', text: 'Derinin dış yüzeyi' },
          { id: 'E', text: 'Kepek olarak dökülen hücreler' }
        ],
        correctOptionId: 'C',
        explanation: 'Epidermis tabakasında kan damarı veya kıl kökü bulunmaz. Bunlar Dermiste (Alt deride) bulunur.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Arabada okunan kitap, iç kulaktaki denge sıvısını hareketsiz tutarken (göz hareketsiz nesneyi görür), arabanın dönüşleri sıvıyı sarsar. Beyin bu ZIT BİLGİLER (göz "duruyoruz", kulak "dönüyoruz" der) karşısında nasıl bir tepki verir?',
        options: [
          { id: 'A', text: 'Uykumuz gelir.' },
          { id: 'B', text: 'Görme bozulur.' },
          { id: 'C', text: 'Taşıt tutması (Araç tutması / Mide bulantısı) yaşanır.' },
          { id: 'D', text: 'İşitme artar.' },
          { id: 'E', text: 'Koku alma durur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Gözden ve iç kulaktan gelen bilgilerin beyinde çelişmesi, sinirsel strese ve denge bulanıklığına yol açar, bu da taşıt tutmasına neden olur.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Işık şiddeti çok ARTTIĞINDA göz bebeğini daraltan yapı HANGİSİDİR?',
        options: [
          { id: 'A', text: 'İrisin yapısındaki düz kaslar' },
          { id: 'B', text: 'Saydam sıvı' },
          { id: 'C', text: 'Sarı benek' },
          { id: 'D', text: 'Optik sinir' },
          { id: 'E', text: 'Kör nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'İris, gözün renkli kısmıdır ve otonom sinir sistemiyle çalışan düz kaslardan oluşur. Işığa göre kasılıp gevşeyerek göz bebeğini büyütüp küçültür.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Göz ve Görme Kusurları (Kolay)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Aşağıdaki durumlardan hangisinde İris kasları gevşeyerek Göz Bebeğinin BÜYÜMESİ (Genişlemesi) beklenir?',
        options: [
          { id: 'A', text: 'Güneşe doğrudan bakıldığında' },
          { id: 'B', text: 'Karanlık (loş) bir sokağa girildiğinde' },
          { id: 'C', text: 'Fotoğraf makinesi flaşı patladığında' },
          { id: 'D', text: 'Gözler tamamen kapalıyken uyurken' },
          { id: 'E', text: 'Uzağa bakarken' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz bebeği karanlıkta ışığı daha çok toplayabilmek için refleks olarak büyür (midriyazis).'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Uzak bir dağa bakarken birdenbire gözümüzün 20 cm önündeki kitaba odaklanırsak, net bir görüntü oluşması için GÖZ MERCEĞİNDE hangi fiziksel değişim gerçekleşir?',
        options: [
          { id: 'A', text: 'Mercek yassılaşır ve incelir.' },
          { id: 'B', text: 'Kirpiksi kaslar KASILIR, mercek ŞİŞKİNLEŞEREK kırıcılığını artırır (Yakına uyum).' },
          { id: 'C', text: 'Mercek tamamen kaybolur.' },
          { id: 'D', text: 'Merceğin rengi koyulaşır.' },
          { id: 'E', text: 'Göz küresi uzar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yakına odaklanırken ışığı daha çok kırmak gerekir. Kirpiksi kaslar kasılarak merceği asan bağları gevşetir, mercek kendi esnekliğiyle şişkinleşip küreselleşir.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Gözdeki Koni hücreleri (Renk) ve Çubuk hücreleri (Siyah-Beyaz/Işık) için aşağıdaki kıyaslamalardan hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Koniler karanlıkta daha aktiftir.' },
          { id: 'B', text: 'Çubuklar sayıca çok DAHA FAZLADIR ve retinaya geniş bir şekilde yayılmışken, Koniler sadece merkezde (Sarı benekte) toplanmıştır.' },
          { id: 'C', text: 'Çubuklar renkleri kusursuz ayırır.' },
          { id: 'D', text: 'Koniler A vitamini eksikliğinden ilk etkilenendir.' },
          { id: 'E', text: 'Kör noktada en çok çubuk bulunur.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan gözünde yaklaşık 120 milyon çubuk, 6 milyon koni vardır. Koniler sarı benekte yoğunlaşmışken, çubuklar çevrede yaygındır (Bu yüzden göz ucuyla hareketleri ve şekilleri loşta fark ederiz).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Akşam karanlıkta yolda yürürken, yandan yaklaşan bir kedi gözümüzün çevresindeki Çubuk (Rod) hücreleri sayesinde sadece bir KARALTI olarak fark edilir. Bu durumun nedeni nedir?',
        options: [
          { id: 'A', text: 'Kedilerin siyah renkli olması' },
          { id: 'B', text: 'Çubuk hücrelerinin renkleri ayırt edememesi, sadece ışığa duyarlı olup "Göz ucuyla" siyah/beyaz şekil algısı yaratması' },
          { id: 'C', text: 'Kör noktanın devreye girmesi' },
          { id: 'D', text: 'İrisin çalışmaması' },
          { id: 'E', text: 'Koni hücrelerinin gece daha iyi görmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı beneğin (merkezin) çevresi çubuk hücreleriyle doludur. Çubuklar az ışıkta iyi çalışır ama renksiz görür. O yüzden gece çevremizdeki nesnelerin rengini değil sadece şeklini/hareketini karaltı olarak algılarız.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Miyop (Uzağı görememe) kusurunda görüntünün sarı beneğin ÖNÜNE DÜŞMESİNİN temel anatomik sebebi nedir?',
        options: [
          { id: 'A', text: 'Göz küresinin önden arkaya çapının UZAMASI veya göz merceğinin kırıcılığının ARTMASI (Şişkinleşmesi)' },
          { id: 'B', text: 'Göz küresinin çapının KISALMASI' },
          { id: 'C', text: 'Korneanın şeklinin dalgalı olması (kavisin bozulması)' },
          { id: 'D', text: 'Renkli görmenin kaybolması' },
          { id: 'E', text: 'Kör noktanın büyümesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Göz normalden uzunsa, odak noktası retinanın önünde havada oluşur ve retinaya ulaşana kadar tekrar dağılarak bulanıklaşır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Gözlük veya Lens reçetesi olarak "İnce Kenarlı Mercek" (Konveks / Yakınsak Mercek) verilmiş olan bir hasta HANGİ görme kusurunu taşıyordur?',
        options: [
          { id: 'A', text: 'Miyop' },
          { id: 'B', text: 'Hipermetrop (veya Presbiyopi)' },
          { id: 'C', text: 'Astigmat' },
          { id: 'D', text: 'Renk körlüğü' },
          { id: 'E', text: 'Şaşılık' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipermetropta görüntü arkaya düşer. İnce kenarlı mercek ışınları ERKENDEN toplayıp öne (sarı beneğin üzerine) çeker.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Hem MİYOP hem de ASTİGMAT olan bir kişinin gözlük camı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sadece ince kenarlı mercek' },
          { id: 'B', text: 'Kalın kenarlı (Konkav) ve Silindirik merceğin birleşimi' },
          { id: 'C', text: 'Prizmatik cam' },
          { id: 'D', text: 'Mavi cam' },
          { id: 'E', text: 'Sadece kalın kenarlı mercek' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyop için kalın kenarlı (konkav), astigmat için kavis bozukluğunu düzelten silindirik mercek gerekir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Renk Körlüğü (Daltonizm) genellikle kırmızı ve yeşil koni hücrelerinin genetik bir hatayla üretilememesi sonucu oluşur. Renk körlüğünün TEDAVİSİ var mıdır?',
        options: [
          { id: 'A', text: 'Vardır, ameliyatla yeni koni eklenir.' },
          { id: 'B', text: 'Kalıtsal ve genetik olduğu için hücre bazında TEDAVİSİ YOKTUR (Sadece özel filtreli gözlüklerle fark artırılabilir).' },
          { id: 'C', text: 'Vardır, lazerle kornea çizilerek tedavi edilir.' },
          { id: 'D', text: 'Vardır, bol A vitamini yiyerek düzelir.' },
          { id: 'E', text: 'Astigmat camıyla tedavi edilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Renk körlüğü X kromozomuna bağlı genetik bir bozukluktur, kalıtsaldır ve koni reseptörünün doğuştan eksikliğidir, düzeltilemez.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Göze giren bir ışın, dıştan içe doğru hangi saydam ortamlardan geçerek retinaya ulaşır?',
        options: [
          { id: 'A', text: 'Kornea - Göz Bebeği(Ön oda) - Mercek - Camsı Cisim' },
          { id: 'B', text: 'Kornea - Camsı Cisim - Mercek - Sklera' },
          { id: 'C', text: 'Mercek - Kornea - Camsı cisim' },
          { id: 'D', text: 'İris - Koroid - Retina' },
          { id: 'E', text: 'Camsı cisim - Mercek - Kornea' }
        ],
        correctOptionId: 'A',
        explanation: 'Sıra şöyledir: Kornea (saydam tabaka) -> Ön oda (saydam sıvı) -> Göz bebeği -> Arka oda -> Göz merceği -> Camsı cisim (gözün içini dolduran jöle) -> Retina.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Gözün içini dolduran ve şeklini koruyan şeffaf, jölemsi madde olan "Camsı Cisim (Vitröz Sıvı)" hangi iki yapı ARASINDA yer alır?',
        options: [
          { id: 'A', text: 'Kornea ile İris arasında' },
          { id: 'B', text: 'İris ile Mercek arasında' },
          { id: 'C', text: 'Göz MERCEĞİ ile RETİNA (Ağ tabaka) arasında (Gözün en büyük boşluğu)' },
          { id: 'D', text: 'Sklera ile Koroid arasında' },
          { id: 'E', text: 'Sarı benek ile kör nokta arasında' }
        ],
        correctOptionId: 'C',
        explanation: 'Gözün %80\'lik iç hacmi (mercekten retinaya kadar) camsı cisimle doludur. Işığın retinaya doğru kesintisiz geçmesini sağlar.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Glokom (Göz Tansiyonu) hastalığının tehlikeli olmasının ve KÖRLÜĞE sebep olabilmesinin sebebi nedir?',
        options: [
          { id: 'A', text: 'Gözyaşının artıp taşırması' },
          { id: 'B', text: 'Ön oda ve arka odadaki sıvının fazla birikerek basınç yapması ve OPTİK SİNİRLERİ EZEREK ÖLDÜRMESİ' },
          { id: 'C', text: 'Kornea tabakasının kuruması' },
          { id: 'D', text: 'Göz merceğinin sertleşmesi' },
          { id: 'E', text: 'Göz bebeklerinin kapanması' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz içindeki sıvı drenaj (boşaltım) kanalları tıkanırsa, basınç artar (Tansiyon). Bu basınç gözün en hassas yeri olan optik sinirlere baskı yaparak onları yavaş yavaş geri dönüşsüz öldürür.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Gözlerimizi sağa sola, yukarı aşağı hareket ettirmemizi sağlayan ÇİZGİLİ GÖZ KASLARI, gözün hangi tabakasına TUTAŞMIŞTIR (bağlıdır)?',
        options: [
          { id: 'A', text: 'Retina (Ağ tabaka)' },
          { id: 'B', text: 'Sklera (Sert tabaka)' },
          { id: 'C', text: 'Kornea' },
          { id: 'D', text: 'Mercek' },
          { id: 'E', text: 'İris' }
        ],
        correctOptionId: 'B',
        explanation: 'Sert tabaka (Sklera) oldukça dayanıklı bağ dokudur. Göz kasları (motor kaslar) bu sert beyaz tabakaya tutunarak göz küresini yuvasında hareket ettirir.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Bir insanın sol ve sağ gözünü hareket ettiren kasların UYUMSUZ ÇALIŞMASI (birinin uzun birinin kısa kalması veya felci) sonucunda ortaya çıkan göz kusuru nedir?',
        options: [
          { id: 'A', text: 'Şaşılık' },
          { id: 'B', text: 'Miyop' },
          { id: 'C', text: 'Katarakt' },
          { id: 'D', text: 'Astigmat' },
          { id: 'E', text: 'Renk Körlüğü' }
        ],
        correctOptionId: 'A',
        explanation: 'Göz kasları senkronize çalışmazsa, bir göz farklı bir noktaya bakar (Şaşılık). Beyin çift görmeyi engellemek için genellikle bir gözün görüntüsünü siler (göz tembelliği başlar). Ameliyatla düzeltilebilir.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Sarı Benekteki görüntünün özellikleri aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Gerçek boyutunda ve düz' },
          { id: 'B', text: 'Ters ve bulanık' },
          { id: 'C', text: 'Küçülmüş, NET ve TERS (Başaşağı)' },
          { id: 'D', text: 'Büyümüş ve düz' },
          { id: 'E', text: 'Bulanık ve düz' }
        ],
        correctOptionId: 'C',
        explanation: 'İnce kenarlı mercek (Göz merceği) görüntüyü odağa düşürdüğünde optik fizik gereği görüntü retinaya TERS olarak düşer. Beyin (Oksipital lob) bu ters görüntüyü DÜZ olarak algılar (çevirir).'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Görme olayında İMPULSUN beyne giderken izlediği yol sırasıyla nasıldır?',
        options: [
          { id: 'A', text: 'Fotoreseptör -> Optik Sinir -> Talamus -> Beyin Kabuğu (Oksipital Lob)' },
          { id: 'B', text: 'Fotoreseptör -> Talamus -> Optik Sinir -> Omurilik' },
          { id: 'C', text: 'Optik Sinir -> Fotoreseptör -> Beyincik' },
          { id: 'D', text: 'İris -> Optik Kiazma -> Hipotalamus' },
          { id: 'E', text: 'Retina -> Talamus -> Beyincik' }
        ],
        correctOptionId: 'A',
        explanation: 'Görüntü sırası: Işık reseptörü uyarır -> Duyu nöronu (Optik sinir) yola çıkar -> Optik Kiazmada çaprazlanır -> Talamus\'a (dağıtım istasyonu) uğrar -> Görme merkezi (Oksipital Lob)\'a ulaşır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Kulak ve İşitme/Denge Sistemi (Kolay)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Sesin şiddeti arttıkça Orta Kulaktaki KEMİKÇİKLERİN (Çekiç-Örs-Üzengi) titreşim HIZI / GÜCÜ nasıl değişir ve bu durum Oval Pencereyi nasıl etkiler?',
        options: [
          { id: 'A', text: 'Titreşim azalır.' },
          { id: 'B', text: 'Gücü ARTIŞ gösterir ve Oval pencereye DAHA GÜÇLÜ VURARAK iç kulaktaki sıvıda DAHA BÜYÜK dalgalar yaratır.' },
          { id: 'C', text: 'Kemikçikler titreşmez, sesi yutar.' },
          { id: 'D', text: 'Oval pencere kapanır.' },
          { id: 'E', text: 'Salyangoz büzülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ses şiddeti (desibel) büyüdükçe, zardaki salınım büyür, kemikler kaldıraç gibi Oval pencere zarını içeri doğru daha şiddetli iter, sıvıdaki tsunami (dalga) büyür.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Salyangoz (Kohlea) içindeki KORTİ ORGANINDA bulunan "Tüylü Hücrelerin (Reseptörlerin)" zarı büküldüğünde açılan iyon kanalları sonucunda ne olur?',
        options: [
          { id: 'A', text: 'Kas kasılır' },
          { id: 'B', text: 'Gözyaşı salgılanır' },
          { id: 'C', text: 'Hücre depolarize olur ve Aksiyon Potansiyeli (İmpuls / Elektrik) başlatılarak İŞİTME SİNİRİ uyarılır.' },
          { id: 'D', text: 'Kan basıncı artar' },
          { id: 'E', text: 'Kulak zarı yırtılır' }
        ],
        correctOptionId: 'C',
        explanation: 'Tüylü hücreler (Mekanoreseptörler) mekanik bir bükülme yaşadığında zarındaki kanallar açılır, içeri sodyum girer ve elektrik sinyali doğar.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Östaki borusunun tıkalı olduğu (Örn: nezle/grip) durumlarda, uçağın alçalmasıyla dış basınç aniden arttığında orta kulakta NE GİBİ BİR SORUN yaşanır?',
        options: [
          { id: 'A', text: 'Kulak kepçesi büyür.' },
          { id: 'B', text: 'İç basınç dış basıncı dengeleyemez, Kulak Zarı İÇERİ DOĞRU ÇÖKER ve şiddetli ağrı / işitme kaybı yaşanır (Zar patlayabilir).' },
          { id: 'C', text: 'Salyangoz dışarı çıkar.' },
          { id: 'D', text: 'Koku alma durur.' },
          { id: 'E', text: 'Gözler yaşarır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Östaki çalışmazsa orta kulaktaki hava basıncı ayarlanamaz. Dışarıdaki 1 atm basınç (uçak inerken artan basınç) zarı orta kulağa doğru ezer, gerer ve ağrı yapar.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Yarım Daire Kanallarının tabanında bulunan ŞİŞKİN bölgelere (Ampulla) yerleşmiş tüylü hücreler HANGİ HAREKETLE uyarılır?',
        options: [
          { id: 'A', text: 'Sadece yerçekimiyle' },
          { id: 'B', text: 'Kafanın kendi ekseni etrafında sağa/sola, öne/arkaya (X, Y, Z düzlemlerinde) DÖNDÜRÜLMESİYLE oluşan sıvı akışıyla.' },
          { id: 'C', text: 'Ses dalgalarıyla' },
          { id: 'D', text: 'Sıcaklık değişimiyle' },
          { id: 'E', text: 'Gözü kapatmakla' }
        ],
        correctOptionId: 'B',
        explanation: 'Ampulla içindeki kupula adı verilen jölemsi şapka, kanallardaki endolenf sıvısı akışıyla bükülür. Bu sıvı sadece baş DÖNDÜRÜLDÜĞÜNDE eylemsizlikten dolayı zıt yöne akar ve tüyleri yatırır (Dinamik denge).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'İşitme kayıpları ikiye ayrılır: İletim Tipi (Zar veya Kemiklerdeki sorun) ve Sinirsel Tip (Salyangoz veya Sinirlerdeki sorun). Buna göre "Kulak kemikçiklerinin kireçlenerek birbiriyle kaynaması (hareket edememesi)" hangi tip sağırlığa yol açar?',
        options: [
          { id: 'A', text: 'Sinirsel Tip (Sensörinöral) İşitme Kaybı' },
          { id: 'B', text: 'İletim Tipi İşitme Kaybı' },
          { id: 'C', text: 'Geçici sağırlık' },
          { id: 'D', text: 'Vertigo' },
          { id: 'E', text: 'Miyop' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemikçikler (örneğin Otoskleroz hastalığı) hareket etmezse sesi İLETEMEZ. Sinirler (Salyangoz) sağlamdır ama onlara ulaşan mekanik enerji eksiktir. (Ameliyat veya işitme cihazıyla çözülebilir).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Salyangozda FARKLI FREKANSTAKİ (İnce/tiz ve Kalın/bas) seslerin ayrımının yapılması (beynin bunun bir flüt mü yoksa davul mu olduğunu anlaması) nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'Sıvı farklı renklerde parlar.' },
          { id: 'B', text: 'Zarın farklı bölgeleri titreşir (İnce sesler salyangozun BAZİLAR ZARININ BAŞINDA, kalın sesler salyangozun TEPESİNDE maksimum titreşim yaratır).' },
          { id: 'C', text: 'Kemikçikler sesi inceltir.' },
          { id: 'D', text: 'Kulak zarı kalınlaşır.' },
          { id: 'E', text: 'Östaki borusu daralır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bazilar zar gitar teli gibidir. Salyangozun tabanındaki (Girişe yakın) dar kısım TİZ seslerde rezonansa girer. Uçtaki geniş kısım ise KALIN seslerde rezonansa girer. Hangi bölgedeki tüyler yatarsa, beyin frekansı (perdeyi) öyle algılar.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Dış Kulak Yolunda bulunan KULAK KİRİ (Serumen) aslında bir kir değil, faydalı bir salgıdır. Çok fazla birikip kurursa ve zarı tıkayacak seviyeye gelirse hangi sonuç ortaya çıkar?',
        options: [
          { id: 'A', text: 'Denge kaybı (Vertigo)' },
          { id: 'B', text: 'Ses dalgalarının kulak zarına çarpmasını ENGELLEYECEĞİ İÇİN geçici bir "İletim Tipi İşitme Kaybı"' },
          { id: 'C', text: 'Sinirlerin ölmesi' },
          { id: 'D', text: 'Körlük' },
          { id: 'E', text: 'Kulak kemiklerinin erimesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Buşon (Tıkaç) oluştuğunda ses havadan zara gidemez, mekanik engel oluşur. Doktor tıkacı temizlediğinde işitme anında geri döner.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Yüzücülerde veya duş alırken dış kulağa giren SU, Orta Kulağa veya İç Kulağa ULAŞABİLİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, beyne kadar ulaşır.' },
          { id: 'B', text: 'Hayır. Çünkü Kulak Zarı SU GEÇİRMEZ (Su sızdırmaz) bir bariyerdir ve dış kulağı orta kulaktan yalıtır.' },
          { id: 'C', text: 'Evet, Östaki borusundan girer.' },
          { id: 'D', text: 'Sadece sıcak su ulaşır.' },
          { id: 'E', text: 'Kulak kemiklerini eriterek ulaşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sağlıklı bir kulak zarı dışarıdan gelen hava ve suyu geriye geçirmez. Su sadece dış kulak yolunda kalır (bazen orada hapsolup nemden dolayı enfeksiyon yapabilir - Yüzücü kulağı).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'İç Kulaktaki (Salyangozdaki) ENDOLENF ve PERİLENF sıvıları arasındaki farklılığın işitmeyle ilgisi nedir?',
        options: [
          { id: 'A', text: 'Renklerinin farklı olması' },
          { id: 'B', text: 'İyonik derişimlerinin FARKLI olması (Örn: Endolenfin potasyumca zengin olması). Bu sayede tüylü hücrelerin zarı açıldığında HIZLI BİR ELEKTRİK AKIMI oluşur.' },
          { id: 'C', text: 'Birinin sıcak birinin soğuk olması' },
          { id: 'D', text: 'Sıvıların kan olması' },
          { id: 'E', text: 'Biri hava, diğeri sıvıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'İki sıvının (Perilenf-Na+ zengini, Endolenf-K+ zengini) arasındaki potansiyel farkı bir pil gibi çalışır, mekanoreseptörlerin çok hızlı sinyal üretmesini sağlar.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Bir balerinin kendi etrafında defalarca dönmesine rağmen, baş dönmesi yaşamaması (hemen dengesini bulması) SİNİR SİSTEMİNİN hangi özelliğini gösterir?',
        options: [
          { id: 'A', text: 'Salyangozunun olmamasını' },
          { id: 'B', text: 'Merkezi sinir sisteminin (Beyincik) sürekli olan bu uyarıya ADAPTE OLMASI ve vücut koordinasyonunu öğrenerek hızlıca telafi etmesi' },
          { id: 'C', text: 'Kör olmasını' },
          { id: 'D', text: 'Otolit taşlarının beynine kaçmasını' },
          { id: 'E', text: 'Kulak zarının yırtık olmasını' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli antrenmanla beyincik ve görme merkezleri iç kulaktan gelen şiddetli dönme sinyallerini bastırmayı ve odaklanmayı öğrenir (örneğin dönerken kafayı sabit tutarak bir noktaya bakarlar - spotting).'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Üst solunum yolu enfeksiyonu (boğaz iltihabı) geçiren küçük çocuklarda sıklıkla ORTA KULAK İLTİHABI (Otitis Media) görülmesinin anatomik sebebi nedir?',
        options: [
          { id: 'A', text: 'Kulak zarlarının delik olması' },
          { id: 'B', text: 'Mikropların, Yutak ile Orta Kulak arasında bağlantı sağlayan ÖSTAKİ BORUSU yoluyla tırmanıp kulağa ulaşması (Özellikle çocuklarda bu boru kısa ve yataydır).' },
          { id: 'C', text: 'Dışarıdan kulaklarına su girmesi' },
          { id: 'D', text: 'Bakterilerin beyinden gelmesi' },
          { id: 'E', text: 'Tat alma duyusunun bozulması' }
        ],
        correctOptionId: 'B',
        explanation: 'Boğazdaki bakteriler Östaki borusundan yukarı, steril olan orta kulağa tırmanarak irinli iltihap (kulak ağrısı) yaparlar.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Tulumcuk ve Kesecikteki OTOLİT TAŞLARI (Kalsiyum karbonat kristalleri) hangi yöndeki hareketlerde uyarı gönderir?',
        options: [
          { id: 'A', text: 'Sadece sağa sola dönüşlerde' },
          { id: 'B', text: 'Yalnızca ses dalgalarında' },
          { id: 'C', text: 'Yerçekimine karşı DİK DURUŞTA ve İLERİ-GERİ / AŞAĞI-YUKARI doğrusal hızlanmalarda (Arabada frene basmak gibi)' },
          { id: 'D', text: 'Sıcaklık artışında' },
          { id: 'E', text: 'Renk değişiminde' }
        ],
        correctOptionId: 'C',
        explanation: 'Otolit taşları jöle tabakasını aşağı doğru çeker (yerçekimi) veya ivmelenince eylemsizlikle geride kalır (doğrusal ivme - statik denge).'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi İşitme duyusunun impuls iletim YOLUNU DOĞRU sıralar?',
        options: [
          { id: 'A', text: 'Korti organı -> Duyu Nöronu -> Talamus -> Temporal Lob' },
          { id: 'B', text: 'Kulak Zarı -> Motor Nöron -> Beyincik' },
          { id: 'C', text: 'Otolit -> Talamus -> Oksipital Lob' },
          { id: 'D', text: 'Salyangoz -> Omurilik -> Frontal Lob' },
          { id: 'E', text: 'Tulumcuk -> Talamus -> Temporal Lob' }
        ],
        correctOptionId: 'A',
        explanation: 'İşitme, reseptörden (Korti) çıkar, duyu siniriyle beyne gider, koku hariç her duyu gibi Talamusa uğrar ve şakak lobuna (Temporal loba) iletilerek işitme gerçekleşir.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Köpekler bizim duyamadığımız çok yüksek frekanslı (tiz) düdük seslerini duyabilirler. Bunun nedeni biyolojik olarak nedir?',
        options: [
          { id: 'A', text: 'Kulak kepçelerinin daha büyük olması' },
          { id: 'B', text: 'Korti organındaki bazilar zarın boyutu, esnekliği ve reseptörlerin çalışma frekans aralığının FARKLI OLMASI (İnsanlar 20-20.000 Hz duyar, köpekler daha yüksek Hz duyabilir)' },
          { id: 'C', text: 'Kulak zarlarının daha ince olması' },
          { id: 'D', text: 'Gözlerinin çok iyi görmesi' },
          { id: 'E', text: 'Burunlarının iyi koku alması' }
        ],
        correctOptionId: 'B',
        explanation: 'Her canlının salyangozu ve reseptörleri evrimsel olarak kendi hayatta kalmasına uygun frekanslara akort edilmiştir.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Oval Pencere ile salyangoza giren titreşimlerin, içerde tur atıp enerjisini bırakıp YUVARLAK PENCEREYE çarpmasının ve burada yok olmasının EN BÜYÜK yararı nedir?',
        options: [
          { id: 'A', text: 'Basıncı artırmak' },
          { id: 'B', text: 'Yeni gelen seslerin YANKILANMADAN ve KARIŞMADAN net duyulabilmesi (Eski dalganın sönümlemesi)' },
          { id: 'C', text: 'Sıvıyı boşaltmak' },
          { id: 'D', text: 'Kulak zarını güçlendirmek' },
          { id: 'E', text: 'Kemikleri beslemek' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer yuvarlak pencere dışarı esneyip enerjiyi (dalgayı) sönümlemeseydi, sıvı bir kez dalgalandığında dakikalarca çalkalanmaya devam eder ve sesler (uğultu şeklinde) birbirine karışırdı.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Deri, Tat ve Koku Ayrıntıları (Kolay)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Dokunma (Mekanoreseptörler) duyusu vücudumuzun her yerinde AYNI HASSASİYETTE MİDİR?',
        options: [
          { id: 'A', text: 'Evet, her santimetre karede eşit dağılır.' },
          { id: 'B', text: 'Hayır. Parmak uçları, dudak gibi bölgelerde reseptörler çok YOĞUNDUR (Hassasiyet yüksektir). Sırtta ise seyrektir.' },
          { id: 'C', text: 'Sadece yüzde bulunur.' },
          { id: 'D', text: 'Sadece bacaklarda daha yoğundur.' },
          { id: 'E', text: 'Hassasiyet derinin rengine bağlıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Alıcı reseptörlerin (örneğin Meissner cisimcikleri) yoğunluğu ellerde ve dudaklarda zirvededir (Dokunarak anlamayı kolaylaştırır). Sırtta dokunan iki farklı kalemi tek bir kalem gibi algılarız çünkü reseptörler seyrektir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Derimizin Dermiş (Alt deri) tabakasında bulunan KILCAL KAN DAMARLARI, havanın çok sıcak olduğu bir günde (Isı düzenlemesi için) HANGİ TEPKİYİ VERİR?',
        options: [
          { id: 'A', text: 'Kılcallar DARALIR.' },
          { id: 'B', text: 'Kılcallar GENİŞLER (Vazodilatasyon) ve deriye çok kan gelerek vücut ısısının TERLEME YOLUYLA havaya atılmasını hızlandırır (Yüzümüz bu yüzden kızarır).' },
          { id: 'C', text: 'Kılcallar kan pompalamayı durdurur.' },
          { id: 'D', text: 'Sadece kaslara gider.' },
          { id: 'E', text: 'Buz gibi olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcakta damarlar genişler, kan yüzeye yaklaşır, ısı havaya radyasyon ve terleme ile verilir. Soğukta ise damarlar büzülerek ısıyı iç organlara (merkeze) saklar (eller üşür/morarır).'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Derideki HİÇBİR reseptör (dokunma, basınç vs.) doğrudan kıl kökünde bulunmaz. Ancak kıl köklerinin (kılların) HAREKET ETMESİ veya titremesi bizde nasıl bir dokunma hissi uyandırır?',
        options: [
          { id: 'A', text: 'Kılların sinir hücresi olması' },
          { id: 'B', text: 'Kıl köklerinin etrafını saran SİNİR AĞLARI sayesinde, kıl hafifçe büküldüğünde hemen uyarılması (Çok hassas dokunma uyarısı)' },
          { id: 'C', text: 'Kılların beyni delmesi' },
          { id: 'D', text: 'Sadece rüzgarda hissetmemiz' },
          { id: 'E', text: 'Ağrı reseptörü içermeleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Kolumuzdaki kıllara hafifçe bir böcek dokunduğunda (deriye değmeden), kıl kökündeki sinir yumakları hareketi algılayarak beyni uyarır.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Dil haritası ile ilgili eski bilgi olan "Sadece uç kısmı tatlıyı, arka kısmı acıyı algılar" düşüncesi GÜNÜMÜZDE NEDEN YANLIŞ KABUL EDİLMEKTEDİR?',
        options: [
          { id: 'A', text: 'Dil sadece tuzlu algıladığı için' },
          { id: 'B', text: 'Dilin tüm yüzeyindeki papillalarda HER TÜRLÜ TAT (tatlı, acı, ekşi vb.) reseptörünün KARIŞIK ve EŞİT orana yakın bulunduğu kanıtlandığı için' },
          { id: 'C', text: 'Tat tomurcuklarının yer değiştirdiği için' },
          { id: 'D', text: 'İnsanların tat alması değiştiği için' },
          { id: 'E', text: 'Dilin arkasının kör nokta olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Dilin her bölgesindeki bir tat tomurcuğu tüm tatları algılayabilir. Geleneksel "dil haritası" büyük bir bilimsel yanılgıdır.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Burun boşluğunun üst kısmında koku sinirlerinin (reseptörlerin) uzantılarının birleşerek beyne gitmek üzere KAFATASI KEMİĞİNİN (Kalbur kemiği) deliklerinden GEÇTİĞİ VE BİRLEŞTİĞİ SOĞANSI YAPIYA ne denir?',
        options: [
          { id: 'A', text: 'Sarı benek' },
          { id: 'B', text: 'Korti organı' },
          { id: 'C', text: 'Koku Soğancığı (Olfactory Bulb)' },
          { id: 'D', text: 'Talamus' },
          { id: 'E', text: 'Omurilik soğanı' }
        ],
        correctOptionId: 'C',
        explanation: 'Koku reseptörleri kendi aksonlarını burun tavanından yukarı (kemiği delerek) doğrudan beynin ön altındaki "Koku soğancığına" uzatır.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Bir koku reseptörünün impuls (elektrik) üretebilmesi için havadan gelen koku molekülünün ne yapması gerekir?',
        options: [
          { id: 'A', text: 'Burun kıllarına çarpması' },
          { id: 'B', text: 'MUKUS İÇİNDE ÇÖZÜNEREK koku reseptörünün uçlarındaki SİLLERE (Tüylere) bağlanması ve zarı uyarması' },
          { id: 'C', text: 'Kana karışması' },
          { id: 'D', text: 'Doğrudan beyne uçması' },
          { id: 'E', text: 'Burnu kurutması' }
        ],
        correctOptionId: 'B',
        explanation: 'Mukusta eriyen molekül, reseptörün kemik dışına sarkmış olan sillerindeki (tüylerindeki) özgül protein reseptörlerine bir kilit-anahtar gibi bağlanır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Eğer bir insan, burun mukozasındaki (mukus) sıvısını tamamen kaybetseydi (Çok şiddetli kuruluk), KOKU ALMA DUYUSU NASIL ETKİLENİRDİ?',
        options: [
          { id: 'A', text: 'Daha keskin koku alırdı.' },
          { id: 'B', text: 'Koku alması TAMAMEN DURURDU, çünkü moleküller çözünemezdi.' },
          { id: 'C', text: 'Kokuları tat gibi algılardı.' },
          { id: 'D', text: 'Sadece parfüm kokularını alırdı.' },
          { id: 'E', text: 'Koku soğancığı büyürdü.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kimyasal duyu reseptörleri (Koku ve Tat) sadece sıvı ortamda (sulu çözeltide) işlev görür. Kuruluk, reaksiyonu (çözünmeyi) imkansız kılar.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Koku duyusunun diğer tüm duyulardan evrimsel olarak FARKLI ve daha güçlü bir yönü HANGİSİDİR?',
        options: [
          { id: 'A', text: 'Talamusa (Dağıtım merkezine) hiç uğramadan direkt beyin kabuğuna ve Limbik Sisteme (Hafıza / Duygu merkezi) gitmesi, kokuların anıları çok canlı canlandırması' },
          { id: 'B', text: 'Sadece gündüzleri çalışması' },
          { id: 'C', text: 'Tüm kokuların aynı şekilde algılanması' },
          { id: 'D', text: 'Uyurken koku duyusunun en yüksek seviyeye çıkması' },
          { id: 'E', text: 'Beyin sapında değerlendirilmesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Koku doğrudan beynin duygusal (Amigdala) ve hafıza (Hipokampus) merkezlerinin içine akar. Bu yüzden bir parfüm veya yemek kokusu sizi anında 10 yıl öncesine götürebilir (Proust etkisi).'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Tükenmez bir kalemle kendi derimize çok yavaşça bastırdığımızda, bir noktada "Dokunma", hemen 1 mm yanındaki noktada "Soğukluk" (Metalden dolayı) hissederiz. Bu durum derinin hangi yapısını kanıtlar?',
        options: [
          { id: 'A', text: 'Derinin tek bir hücreden oluştuğunu' },
          { id: 'B', text: 'Farklı duyuları algılayan RESEPTÖRLERİN deride mozaik (dağınık ve noktasal) bir şekilde yerleştiğini' },
          { id: 'C', text: 'Derinin sadece ağrıyı hissettiğini' },
          { id: 'D', text: 'Kalemin ısı yaydığını' },
          { id: 'E', text: 'Beynin yorulduğunu' }
        ],
        correctOptionId: 'B',
        explanation: 'Deri homojen değildir. Bir noktada soğuk reseptörü varken 1 milim yanında dokunma veya ağrı reseptörü bulunur. Bu yüzden algı bölgeseldir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'İnsanlarda acı biber yediğimizde (kapsaisin maddesi), dildeki "TAT" reseptörleri değil, "AĞRI ve SICAKLIK" (Termoreseptör ve Nosiseptörler) uyarılır. Bu duruma dayanarak ACI BİBER için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Gerçek bir "tat" değildir, ağrı/yanma hissidir.' },
          { id: 'B', text: 'Acı tat sadece boğazda algılanır.' },
          { id: 'C', text: 'Acı biber sadece umami reseptörlerini uyarır.' },
          { id: 'D', text: 'Tükürükle hiç tepkimeye girmez.' },
          { id: 'E', text: 'Koku olarak algılanır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Acı tat (kahve/zehir) ile acı hissi (biber) farklıdır. Biberdeki kapsaisin sıcaklık ve ağrı reseptörlerini yakar, bu bir tat reseptörü uyarısı değildir, fiziksel bir tahriştir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Aşağıdaki reseptörlerden hangisi YAPISAL OLARAK (Köken olarak) doğrudan sinir hücrelerinden oluşmuştur?',
        options: [
          { id: 'A', text: 'Tat tomurcukları' },
          { id: 'B', text: 'Koku Reseptörleri (Koklama hücreleri bizzat aksonu olan özelleşmiş nöronlardır)' },
          { id: 'C', text: 'Korti organı hücreleri' },
          { id: 'D', text: 'Deri hücreleri' },
          { id: 'E', text: 'Kas hücreleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Gözdeki fotoreseptörler, işitme/denge tüylü hücreleri ve tat tomurcukları epitel hücre (modifiye) kökenlidir, altlarındaki sinirle sinaps yapar. Koku reseptörü ise BİZZAT kendisi tel (akson) uzatan bir nörondur.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Parmak uçlarımızda Kaba Dokunmayı ve Basıncı hisseden (Pacinni, Meissner vb.) cisimcikler, uyarının şiddetini beyne NASIL anlatır? (Daha sert bastırdığımızda ne değişir?)',
        options: [
          { id: 'A', text: 'İmpulsun HIZI artarak.' },
          { id: 'B', text: 'İmpulsun BÜYÜKLÜĞÜ (Genliği) artarak.' },
          { id: 'C', text: 'Üretilen impulsun FREKANSI (Sıklığı) ve uyarılan RESEPTÖR SAYISI artarak.' },
          { id: 'D', text: 'Hormon göndererek.' },
          { id: 'E', text: 'Kanama başlatarak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sinir sisteminde impuls genliği ve hızı değişmez (Ya hep ya hiç). Uyaran güçlenirse, ya çok sayıda impuls peş peşe gider (frekans artar) ya da daha geniş bir alandaki hücreler uyanır.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Sabah giydiğimiz tişörtün dokunma hissini 5 dakika sonra hiç HİSSETMEMEMİZİN (ve ancak tişörtü çıkardığımızda tekrar hissetmemizin) nedeni nedir?',
        options: [
          { id: 'A', text: 'Tişörtün vücutla birleşmesi' },
          { id: 'B', text: 'Dokunma reseptörlerinin sürekli ve sabit uyarana KARŞI HIZLA ADAPTE OLMASI (Duyusal uyum) ve gereksiz bilgiyi süzmesi' },
          { id: 'C', text: 'Sinirlerin ölmesi' },
          { id: 'D', text: 'Beynin yorulması' },
          { id: 'E', text: 'Derinin kalınlaşması' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyin, çevre şartlarında DEĞİŞİKLİK arar. Sabit kalan (tehdit oluşturmayan) basınç/dokunma hisleri beyin sapında filtrelenerek bilince ulaştırılmaz.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Tat hücrelerinin ömrü kısadır (yaklaşık 1-2 hafta) ve çok sıcak yemek yediğimizde hasar görebilirler. Buna rağmen tat duyumuzu KAYBETMEMEMİZİN sebebi nedir?',
        options: [
          { id: 'A', text: 'Tat duyusunun kanda olması' },
          { id: 'B', text: 'Dilimizdeki bazal (kök) hücrelerin SÜREKLİ BÖLÜNEREK yenilerini üretmesi' },
          { id: 'C', text: 'Beynin tadı hatırlaması' },
          { id: 'D', text: 'Dişlerin tadı alması' },
          { id: 'E', text: 'Tükürüğün tadı geri getirmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Tat tomurcukları çok zorlu bir ortamdadır (asit, sıcak, mekanik yıpranma). Bu yüzden tabandaki kök hücreler sürekli mitozla yeni reseptör hücreler yapar.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Sarı bölgedeki (koku) hücreler de sinir hücresi olmalarına rağmen İSTİSNAİ bir özellik gösterirler. Bu özellik nedir?',
        options: [
          { id: 'A', text: 'Sadece kadınlarda bulunması' },
          { id: 'B', text: 'Sinir hücreleri genelde bölünmez kabul edilirken, Koku reseptörlerinin ortalama 30-60 günde bir YENİLENEBİLMESİ (Kök hücrelerden)' },
          { id: 'C', text: 'Elektrik üretmemeleri' },
          { id: 'D', text: 'Renkli olmaları' },
          { id: 'E', text: 'Tükürükle çalışmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku nöronları doğrudan dış ortama (havaya/toksinlere) açıktır ve yıpranır. Vücudumuzdaki yetişkin nöron yenilenmesinin çok nadir görüldüğü (kök hücreli) eşsiz yerlerden biridir.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Göz İleri Yorum (Kolay)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Fotoreseptörlerin (ışık algılayıcıların) Gözün ön tarafında değil de EN ARKA TABAKASI olan Retinada (Ağ tabakada) bulunmasının nedeni nedir?',
        options: [
          { id: 'A', text: 'Işığın çok parlak olmasını engellemek.' },
          { id: 'B', text: 'Ön taraftaki yapıların (Kornea, mercek, sıvı) ışığı arka tarafa MÜKEMMEL BİR ODAK halinde düşürecek şekilde dizayn edilmiş olması.' },
          { id: 'C', text: 'Gözün büyümesini durdurmak.' },
          { id: 'D', text: 'Sarı beneğin önde olması.' },
          { id: 'E', text: 'Beyne uzak olmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer reseptörler önde olsaydı, her yönden gelen ışık karmaşa yaratırdı. Göz merceği, fotoğraf makinesi gibi ışığı bir noktada (retina) odaklar, hücreler bu odaklanmış ışığı okur.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Miyop (uzağı göremeyen) bir göz ile normal bir gözün anatomik FARKI genellikle nedir?',
        options: [
          { id: 'A', text: 'Miyop göz küresinin çapı NORMALDEN DAHA UZUNDUR (Işık erken odaklanır).' },
          { id: 'B', text: 'Miyop göz küresi daha kısadır.' },
          { id: 'C', text: 'Miyop gözde retina bulunmaz.' },
          { id: 'D', text: 'Miyop gözün korneası yoktur.' },
          { id: 'E', text: 'Miyop gözde çubuk hücresi yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Miyopluk genelde ekseneldir, yani göz önden arkaya doğru elipsleşip uzamıştır. Perde (retina) geride kaldığı için, odaklanma noktasını havada bırakır.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Karanlık (loş) bir ortamdan ÇOK PARLAK GÜNEŞLİ bir ortama çıktığımızda GÖZ BEBEĞİNİN (Pupilla) daralması, hangi sistem tarafından refleks olarak yönetilir?',
        options: [
          { id: 'A', text: 'Otonom Sinir Sistemi (Sempatik/Parasempatik)' },
          { id: 'B', text: 'Somatik Sinir Sistemi (İstemli)' },
          { id: 'C', text: 'Omurilik' },
          { id: 'D', text: 'Hipofiz bezi' },
          { id: 'E', text: 'Beyincik' }
        ],
        correctOptionId: 'A',
        explanation: 'Göz bebeği refleksi (pupilla refleksi) Orta Beyin tarafından kontrol edilen, otonom (istemsiz) bir kas hareketidir.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Ormanda yanımıza aniden bir ayı çıkarsa ve KORKARSAK göz bebeklerimiz büyür (sempatik etki). Bunun SAVAŞ YA DA KAÇ durumundaki faydası nedir?',
        options: [
          { id: 'A', text: 'Ağlamayı sağlamak' },
          { id: 'B', text: 'Ayıyı küçültmek' },
          { id: 'C', text: 'Daha fazla ışık alarak ÇEVREYİ (tehlikeleri ve kaçış yollarını) ÇOK DAHA GENİŞ VE NET görebilmek' },
          { id: 'D', text: 'Göz kaslarını gevşetmek' },
          { id: 'E', text: 'Uykuyu getirmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Adrenalin (sempatik sinirler) göz bebeğini büyüterek periferal (çevresel) görüşü artırır. Böylece tehlike anında saniyelik kararlar için maksimum veri toplanır.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Bir kedi gözünün gece karanlığında far gibi PARLAMASININ (ama insan gözünün parlamamasının) nedeni nedir?',
        options: [
          { id: 'A', text: 'Kedilerin gözünde ışık üreten ampul olması' },
          { id: 'B', text: 'Kedilerin retinasının arkasında, içeri giren ışığı AYNA GİBİ GERİ YANSITAN özel bir tabaka (Tapetum lucidum) bulunması. (Bu sayede ışık hücrelerin içinden İKİ KERE geçerek gece görüşünü ikiye katlar).' },
          { id: 'C', text: 'Kedilerin gözyaşının fosforlu olması' },
          { id: 'D', text: 'İnsanların gözünün büyük olması' },
          { id: 'E', text: 'Kedi gözünün merceğinin olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Gece avlanan hayvanlarda bu reflektör tabaka azıcık ışığı bile değerlendirir. İnsanda ise damar tabaka siyahtır, ışığı yansıtmaz, emer (bu yüzden fotoğraf flaşında sadece kan damarları kırmızı çıkar, parlama yapmaz).'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Yakındaki bir cisimden (Örn: okuduğumuz kitaptan) gelen ışınlar DAĞILARAK göze girer, uzaktaki cisimden (Örn: Güneş) gelen ışınlar ise göze PARALEL gelir. Göze dağılarak gelen "YAKIN" ışınları odaklamak NEDEN daha zordur?',
        options: [
          { id: 'A', text: 'Işık daha hızlı geldiği için' },
          { id: 'B', text: 'Dağınık ışınları toplayıp tek bir noktaya (retinaya) düşürmek için merceğin DAHA FAZLA KIRICILIĞA (daha şişkin olmaya) ihtiyaç duyması' },
          { id: 'C', text: 'Işık daha zayıf olduğu için' },
          { id: 'D', text: 'Mercek uzağı daha çok sevdiği için' },
          { id: 'E', text: 'Retinanın yakını göremediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'İşte bu yüzden yakına bakarken mercek şişer (kirpiksi kaslar yorulur, kitap okurken göz ağrır). Uzağa bakarken mercek dinlenme halindedir (yassıdır).'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Gözümüzün ÖNÜNDEKİ saydam tabaka olan Korneada neden HİÇ KAN DAMARI YOKTUR?',
        options: [
          { id: 'A', text: 'Beyaz renkli olması gerektiği için' },
          { id: 'B', text: 'Damarlar ışığın geçişini engelleyip görüşü BULANIKLAŞTIRACAĞI için. (Besinini arka odadaki sıvıdan difüzyonla alır)' },
          { id: 'C', text: 'Hücreleri canlı olmadığı için' },
          { id: 'D', text: 'Kemik doku olduğu için' },
          { id: 'E', text: 'Sinirleri beslemediği için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kornea penceremizdir. Camın ortasından geçen kırmızı hortumlar (damarlar) olsa dışarıyı göremezdik. Bu yüzden evrimsel olarak kornea avaskülerdir (damarsızdır).'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Kornea naklinin (Kornea transplantasyonu), böbrek veya kalp nakline göre ÇOK DAHA BAŞARILI OLMASININ (vücut tarafından reddedilme ihtimalinin çok düşük olmasının) sebebi nedir?',
        options: [
          { id: 'A', text: 'Korneanın çok küçük olması' },
          { id: 'B', text: 'Korneada KAN DAMARI BULUNMADIĞI İÇİN, bağışıklık sistemi hücrelerinin (Akyuvarların) korneaya kolayca ulaşıp onu "yabancı doku" olarak VURAMAMASI' },
          { id: 'C', text: 'Korneanın ölü olması' },
          { id: 'D', text: 'Korneanın plastik olması' },
          { id: 'E', text: 'Kalp naklinin zor olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağışıklık (T hücreleri vb.) kan yoluyla taşınır. Damarsız dokular (Kornea, kıkırdak) immün sistemden gizlenmiş (ayrıcalıklı) bölgelerdir. Reddedilme (doku uyuşmazlığı) riski çok azdır.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Gözyaşının (Gözyaşı bezi salgısı) sadece üzülünce değil, SÜREKLİ az miktarda salgılanmasının GÖREVLERİ arasında hangisi YOKTUR?',
        options: [
          { id: 'A', text: 'Korneanın kurumasını önlemek.' },
          { id: 'B', text: 'İçindeki Lizozim enzimiyle bakterileri parçalamak.' },
          { id: 'C', text: 'Göz küresinin pürüzsüz kaymasını (Göz kapaklarının sürtünmemesini) sağlamak.' },
          { id: 'D', text: 'Sürekli KAN üreterek gözü kırmızı tutmak.' },
          { id: 'E', text: 'Havadan gelen tozları yıkayıp temizlemek.' }
        ],
        correctOptionId: 'D',
        explanation: 'Gözyaşı kan üretmez, saydam bir sıvıdır ve enfeksiyon/kurumaya karşı sürekli (basal) salgılanarak korneayı yıkar.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Sarı benek üzerinde bulunan KONİ HÜCRELERİ ışığın dalga boyuna (rengine) göre 3 çeşittir. Bunlar hangi üç ANA RENGİ algılamak üzere özelleşmiştir?',
        options: [
          { id: 'A', text: 'Sarı, Siyah, Beyaz' },
          { id: 'B', text: 'Kırmızı, Yeşil, Mavi (RGB)' },
          { id: 'C', text: 'Turuncu, Mor, Pembe' },
          { id: 'D', text: 'Siyah, Kırmızı, Sarı' },
          { id: 'E', text: 'Lacivert, Kahverengi, Gri' }
        ],
        correctOptionId: 'B',
        explanation: 'Biyolojik renk uzayımız Işık renklerine dayanır: Red, Green, Blue. Diğer tüm renkler (örneğin sarı), kırmızı ve yeşil konilerin aynı anda farklı şiddette uyarılmasıyla beynin yarattığı karışımdır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Çubuk (Rod) hücrelerinde üretilen RODOPSİN molekülü, Işık çarptığı anda saniyenin binde biri hızında PARÇALANIR ve bu parçalanma elektrik sinyali başlatır. Aydınlıktan KARANLIĞA girdiğimizde ise yeniden sentezlenir. Bu karanlıkta bekleme süresine ne ad verilir?',
        options: [
          { id: 'A', text: 'Karanlığa adaptasyon (Gözün alışması)' },
          { id: 'B', text: 'Renk körlüğü' },
          { id: 'C', text: 'Katarakt' },
          { id: 'D', text: 'Göz tansiyonu' },
          { id: 'E', text: 'Şaşılık' }
        ],
        correctOptionId: 'A',
        explanation: 'Güneşten karanlık odaya girince önce kör oluruz (çünkü tüm rodopsinler parçalanmıştır). 2-3 dakika içinde A vitamini yardımıyla karanlıkta rodopsinler yeniden yapılır ve etrafı "seçmeye" başlarız.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Kör nokta (Optik diski) deneyinde, sağ gözünüzü kapatıp sol gözünüzle kağıttaki artı işaretine bakarken yaklaştığınızda, yandaki siyah noktanın ANİDEN KAYBOLDUĞUNU görürsünüz. Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Beynimizin siyah rengi silmesi' },
          { id: 'B', text: 'Noktadan gelen ışığın tam KÖR NOKTAYA (Optik sinirin çıktığı ve hiç reseptör olmayan bölgeye) düşmesi' },
          { id: 'C', text: 'Göz merceğinin bulanıklaşması' },
          { id: 'D', text: 'Korneanın çizilmesi' },
          { id: 'E', text: 'Göz bebeğinin kapanması' }
        ],
        correctOptionId: 'B',
        explanation: 'O küçük bölgede reseptör olmadığı için sinyal üretilemez. Normal hayatta bunu fark etmeyiz çünkü beyin (ve diğer göz) o boşluğu çevre renkleriyle "photoshop" gibi doldurur (tamamlar).'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Göz doktoru "Gözbebeği büyütücü (Midriyatik)" damla damlattığında saatlerce yakını BÜYÜK ORANDA bulanık görürsünüz. Bunun fizyolojik sebebi nedir?',
        options: [
          { id: 'A', text: 'Damlanın İris ve Kirpiksi kasları FELÇ etmesi, böylece merceğin yakına uyum (şişkinleşme) yapamaması' },
          { id: 'B', text: 'Gözün kuruması' },
          { id: 'C', text: 'Retinanın erimesi' },
          { id: 'D', text: 'Kör noktaya sıvı dolması' },
          { id: 'E', text: 'Sarı beneğin yer değiştirmesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Damla, otonom sinirleri bloke eder. Kaslar gevşer (gözbebeği fal taşı gibi açılır) ve mercek asıcı bağlarla gerilip yassı kalır (yakın odaklanma iptal olur).'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Göz uyumu (Akomodasyon) yeteneği, merceğin esnekliğine bağlıdır. 40 yaşından sonra (Presbiyopi) merceğin İÇİNDEKİ PROTEİNLERİN (Kristalin) SERTLEŞMESİ ile yakını net okuyamamanın sebebi nedir?',
        options: [
          { id: 'A', text: 'Merceğin kasıldığında kolayca KÜRESELLEŞİP (Şişkinleşip) kırıcılığını artıramaması' },
          { id: 'B', text: 'Işığın göze hiç girmemesi' },
          { id: 'C', text: 'Kornea tabakasının kararması' },
          { id: 'D', text: 'Renk körlüğünün başlaması' },
          { id: 'E', text: 'Ağ tabakanın yırtılması' }
        ],
        correctOptionId: 'A',
        explanation: 'Yaşlandıkça mercek plastik top gibi sertleşir. Kirpiksi kas kassa bile mercek tepki vermez, kalınlaşamaz. Bu nedenle yakın gözlüğü (ince kenarlı büyüteç) takılır.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Miyop bir kişinin KENDİ UZAĞI (Sonsuz) net görmesi mümkün değildir. Ancak GÖZLÜK TAKMADAN (şartları değiştirerek) net görmesini sağlayan anatomik DURUM aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hiçbir şekilde göremez.' },
          { id: 'B', text: 'Karanlıkta gözbebeği büyüdüğünde.' },
          { id: 'C', text: 'Gözlerini KISARAK (Çapraz yaparak) pinhole (iğne deliği) etkisi yaratıp dağılan ışınları bloke etmesi' },
          { id: 'D', text: 'Amuda kalkması' },
          { id: 'E', text: 'Gözünü ovuşturması' }
        ],
        correctOptionId: 'C',
        explanation: 'Miyoplar uzağa bakarken sürekli gözlerini kısar (Miyop kelimesi Yunanca "Kısık Göz"den gelir). Kısma eylemi ışık demetini incelterek dağılmayı azaltır ve odağı netleştirir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Kulak ve Denge İleri Yorum (Kolay)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Kulak kepçesinin KIVRIMLI (girintili çıkıntılı) bir yapıya sahip olmasının FİZİKSEL amacı nedir?',
        options: [
          { id: 'A', text: 'Sadece dış görünüş (estetik) sağlamak.' },
          { id: 'B', text: 'Ses dalgalarını toplayıp farklı açılardan yansıtarak (odaklayarak), sesin KAYNAĞININ YÖNÜNÜ (yukarıdan mı, aşağıdan mı geldiğini) beynin hesaplamasını sağlamak.' },
          { id: 'C', text: 'Kulak zarını ısıtmak.' },
          { id: 'D', text: 'Basıncı düşürmek.' },
          { id: 'E', text: 'Dengeyi sağlamak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer kepçemiz düz bir boru olsaydı, ön/arka ve alt/üst ses yönünü ayırmakta zorlanırdık. Kıvrımlar sesi mikro saniyelik gecikmelerle yansıtarak radar gibi yön bulmamızı sağlar.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Çekiç, Örs, Üzengi kemikçikleri sisteminin MÜHENDİSLİK (Kaldıraç) açısından amacı nedir?',
        options: [
          { id: 'A', text: 'Sesi yavaşlatmak' },
          { id: 'B', text: 'Havadaki zayıf bir titreşimi (Kulak zarı), İÇ KULAKTAKİ SIVIYI (Yoğun ortamı) dalgalandırabilecek GÜÇTE bir vurucu güce (Basınç amplifikasyonu) dönüştürmek' },
          { id: 'C', text: 'Sesi tamamen yok etmek' },
          { id: 'D', text: 'Denge kristallerini tutmak' },
          { id: 'E', text: 'Orta kulağı korumak' }
        ],
        correctOptionId: 'B',
        explanation: 'Havadaki bir fısıltı suyu dalgalandıramaz. Kulak zarı geniştir (Toplayıcı), üzengi küçüktür (Vurucu çivi). Geniş alandaki kuvvet dar alana aktarılarak basınç 20 kat artırılır.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'İç kulaktaki Denge sistemi olan Yarım Daire Kanallarının birbirine 90 DERECELİK (dik) üç farklı açıyla (X, Y, Z ekseni) yerleşmiş olmasının nedeni nedir?',
        options: [
          { id: 'A', text: 'Kafatasında yer kalmaması' },
          { id: 'B', text: 'Başın uzaydaki 3 BOYUTLU her türlü (öne, yana, kendi etrafında) Dönme hareketini (Açısal ivmeyi) algılayabilmek' },
          { id: 'C', text: 'Sesleri üç ayrı tonda ayırmak' },
          { id: 'D', text: 'Göz kaslarına bağlanmak' },
          { id: 'E', text: 'Kan pompalamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Fizikteki 3 boyut (En, boy, derinlik) gibi, bu kanallar başın pitch (evet anlamında sallama), yaw (hayır anlamında sallama) ve roll (yana yatırma) hareketlerini kusursuz algılar.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Alkol alan veya aşırı yorgun bir kişinin yolda düz yürüyememesi (Yalpalaması), İÇ KULAK ve BEYİNCİK sisteminin nasıl etkilendiğini gösterir?',
        options: [
          { id: 'A', text: 'Kulak zarı delinmiştir.' },
          { id: 'B', text: 'Alkolün beyincik nöronlarını ve iç kulak sıvısının (endolenf) yoğunluğunu anlık olarak etkileyerek DENGE İMPULSLARININ İŞLENMESİNİ BOZMASI' },
          { id: 'C', text: 'Ses duyması artmıştır.' },
          { id: 'D', text: 'Otolit taşları midesine düşmüştür.' },
          { id: 'E', text: 'Optik sinir kopmuştur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Alkol, kana ve endolenfe karıştığında sıvının fiziksel akışkanlığını (özgül ağırlığını) değiştirir. Ayrıca beyinciği baskılayarak motor koordinasyonu yıkar.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Aşırı gürültülü (Patlama) bir ses duyduğumuzda, ORTA KULAK KASLARI çok ilginç bir refleks (Akustik Refleks) geliştirerek çekiç ve üzengi kemiklerini kasıp KİLİTLER. Bunun amacı nedir?',
        options: [
          { id: 'A', text: 'Sesi daha gürültülü duymak' },
          { id: 'B', text: 'Kemik zincirini HAREKETSİZLEŞTİREREK iç kulağa gidecek şiddetli sarsıntıyı AZALTMAK (İç kulağı sağırlıktan korumak)' },
          { id: 'C', text: 'Kulağı büyütmek' },
          { id: 'D', text: 'Kulak zarını patlatmak' },
          { id: 'E', text: 'Östaki borusunu açmak' }
        ],
        correctOptionId: 'B',
        explanation: 'İç kulağın şok emicileridir (Stapedius kası). Saniyenin onda biri sürede kasılarak kemiklerin vurma genliğini düşürür ve Korti organını korurlar.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Nezle veya üst solunum yolu hastalığı sırasında kulaklarımız "uğultulu" duyar veya duymamız AZALIR. Bunun başlıca anatomik nedeni nedir?',
        options: [
          { id: 'A', text: 'Beyin sesi reddeder.' },
          { id: 'B', text: 'Östaki borusu tıkanır, orta kulak iltihabi SIVI İLE DOLAR (hava yerine). Sıvı dolu ortamda kemikçikler iyi titreşemez.' },
          { id: 'C', text: 'Korti organı ölür.' },
          { id: 'D', text: 'Salyangoz büyür.' },
          { id: 'E', text: 'Gözler kapanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Orta kulak içi HAVA dolu olmalıdır ki zar ve kemikler rahat titresin. Östaki kapanıp içeri mukoza sıvısı (ödem) dolduğunda, suyun içinde el çırpmak gibi titreşim sönümlenir (Geçici iletim tipi sağırlık).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'İç kulaktaki Salyangoz (Kohlea) kanalının ZARLI yapısı nasıldır? (İçinde üç katlı sıvı kanalları bulunur)',
        options: [
          { id: 'A', text: 'Tek bir boş borudur.' },
          { id: 'B', text: 'Vestibular Kanal (Üst), Timpanik Kanal (Alt) ve Ortada Korti organını taşıyan Kohlear Kanal şeklindedir.' },
          { id: 'C', text: 'Sadece yarım dairelerden oluşur.' },
          { id: 'D', text: 'İçi kanla doludur.' },
          { id: 'E', text: 'Kulak zarıyla bitişiktir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oval pencereden giren dalga üstten (Vestibular) çıkar, tepeyi dolanıp alttan (Timpanik) iner. Ortadaki Kohlear kanal ise asıl reseptörleri (Korti) taşır ve Endolenf ile doludur.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Kulaklıkla yüksek seste müzik dinlerken, dışarıdan size seslenen birini duymamanızın (Sadece o müziğe odaklanmanızın) SİNİRSEL FİLTRELEME Merkezi neresidir?',
        options: [
          { id: 'A', text: 'Omurilik soğanı' },
          { id: 'B', text: 'Hipofiz bezi' },
          { id: 'C', text: 'Talamus ve Retiküler Formasyon (Önemsiz/beklenen sesleri baskılayıp, sadece ilgili olduğunuzu beyne geçirmesi)' },
          { id: 'D', text: 'Göz' },
          { id: 'E', text: 'Sarı benek' }
        ],
        correctOptionId: 'C',
        explanation: 'Talamus sadece bir kargo değil, bir bekçi-filtredir. Konsantre olduğumuzda veya uyurken diğer duyusal girdilerin (örneğin arka plan seslerinin) kortekse çıkışını yavaşlatır.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Uzayda yerçekimsiz ortamda bulunan Astronotların, "Denge ve Yer-Yön Duygusu" (Uzay Tutması) NEDEN KARIŞIR?',
        options: [
          { id: 'A', text: 'Karanlık olduğu için' },
          { id: 'B', text: 'Tulumcuk ve Kesecikteki Otolit Taşlarının, YERÇEKİMİ OLMADIĞI İÇİN aşağı doğru çökmeyip havada yüzmesi, beynin konumu anlayamaması' },
          { id: 'C', text: 'Sesten dolayı' },
          { id: 'D', text: 'Gözlerinin bozulmasından' },
          { id: 'E', text: 'Kaslarının erimesinden' }
        ],
        correctOptionId: 'B',
        explanation: 'Otolit taşları (statik denge) yerçekimiyle çalışır. Uzayda ağırlıksız ortamda taşlar reseptörlere basınç yapmaz. Astronot beyni "Aşağı neresi?" sorusunun cevabını tamamen kaybeder (Uzay adaptasyon sendromu).'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'İç kulağımızdaki Denge Merkezinden (Vestibüler sistem) kalkan sinirler beynin neresine GİTMEZ?',
        options: [
          { id: 'A', text: 'Beyincik (Kas koordinasyonu için)' },
          { id: 'B', text: 'Beyin sapı (Göz kaslarını kontrol etmek için)' },
          { id: 'C', text: 'Mide (Bulantı için)' },
          { id: 'D', text: 'BÖBREKLERE (İdrar üretmek için)' },
          { id: 'E', text: 'Beyin kabuğuna (Mekansal farkındalık)' }
        ],
        correctOptionId: 'D',
        explanation: 'Denge sistemi Böbrekle tamamen ilgisizdir. Ancak Göz kaslarına bağlanır (Baş dönerken gözlerin sabit kalması için), kusma merkezine bağlanır (araç tutması) ve beyinciğe bağlanır.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'İşitme cihazları (kulak arkasına takılanlar) ile BİYONİK KULAK (Koklear İmplant) arasındaki temel FARK nedir?',
        options: [
          { id: 'A', text: 'Fark yoktur.' },
          { id: 'B', text: 'İşitme cihazı SESİ YÜKSELTİR (Amplifikatör). Koklear implant ise sesi DİREKT ELEKTRİĞE çevirip hasarlı Korti organını by-pass ederek SİNİRE verir.' },
          { id: 'C', text: 'İmplant gözü tedavi eder.' },
          { id: 'D', text: 'Cihazlar beyni büyütür.' },
          { id: 'E', text: 'Cihaz sadece suyu engeller.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zar ve kemik sorunu olanlara İşitme Cihazı (Hoparlör) verilir. Ancak Salyangozdaki tüyler (Reseptörler) ÖLMÜŞSE sesi ne kadar yükseltsen duymaz. İmplant kafatasına yerleştirilen elektrotlarla doğrudan siniri elektrikler.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Dış Kulak ile İç Kulak (Salyangoz) sıvıları arasında "Kemik İletimi (Bone conduction)" adı verilen bir durum vardır. Kendi sesimizi kayıttan (videodan) dinlediğimizde bize NEDEN FARKLI ve KÖTÜ gelir?',
        options: [
          { id: 'A', text: 'Mikrofonun kötü olmasından' },
          { id: 'B', text: 'Biz konuşurken ses tellerimizin titreşimi KAFATASI KEMİKLERİMİZ üzerinden İÇ KULAĞA (kalın tonda) doğrudan ulaşır. Mikrofon ise sadece havadan giden tiz sesi kaydeder.' },
          { id: 'C', text: 'Kulak zarımızın yorulmasından' },
          { id: 'D', text: 'Beynin sesimizi tanıyamamasından' },
          { id: 'E', text: 'Dış kulağın kapanmasından' }
        ],
        correctOptionId: 'B',
        explanation: 'Kendi sesimizi konuşurken kafatasımızın rezonansı (bas tonları) ile duyarız. Kayıttaki ses ise sadece dış dünyadan (havadan) gelen, kemik iletiminin eklendiği "gerçek" sesimizdir.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Kulak zarına (Timpanik zar) çok yakın ve tehlikeli müdahaleler (Sivri uçlu kulak çöpü sokmak) sonucu zar DELİNİRSE İŞİTME NASIL ETKİLENİR?',
        options: [
          { id: 'A', text: 'Hiçbir şey olmaz.' },
          { id: 'B', text: 'Zar basıncı kaybeder ve SES DALGALARINI YAKALAMA (Kemiklere iletme) yeteneği ciddi oranda düşer (Geçici Sağırlık).' },
          { id: 'C', text: 'Körlük başlar.' },
          { id: 'D', text: 'Tat alma bozulur.' },
          { id: 'E', text: 'Tulumcuk büyür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zar, davul derisi gibidir. Delinirse titreşim enerjisi kaçar ve kemikçikler iyi sallanmaz. (Zar küçük deliklerde zamanla kendi kendini onarabilir).'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Tüylü hücrelerin (Salyangozdaki mekanoreseptörlerin) tepesindeki "Tektoryal Zar (Çatı zarı)" nın görevi nedir?',
        options: [
          { id: 'A', text: 'Kan pompalamak' },
          { id: 'B', text: 'Alttaki bazilar zar titreşip zıpladıkça, tüylerin bu ÇATI ZARINA SÜRTÜNEREK (bükülerek) elektrik üretmesini sağlamak.' },
          { id: 'C', text: 'Sesi yutmak' },
          { id: 'D', text: 'Işığı kırmak' },
          { id: 'E', text: 'Sıvıyı ısıtmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Alttaki zar trambolin gibi zıplar, hücrelerin tepesindeki tüyler (silia) sabit duran çatı zarına (Tektoryal membran) çarpar ve eğilirler. Bu mekanik bükülme kimyasal reaksiyonu başlatır.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Sesi GÖREN insanlar (Sinestezi) durumunda, ses dalgası kulağa gelir, her şey normal çalışır fakat BEYİNDE işitme merkezine giden sinirler YANLIŞLIKLA Görme merkezine de dal verir. Sonuç olarak nasıl bir ALGI ortaya çıkar?',
        options: [
          { id: 'A', text: 'Duyu organlarının kendi içinde elektrik üretmesi' },
          { id: 'B', text: 'İmpulsların HER YERDE AYNI (Elektrokimyasal) OLMASI nedeniyle, beyindeki hangi merkeze (Loba) ulaşırsa "O DUYU (Örn: Işık, Renk)" olarak yorumlanması.' },
          { id: 'C', text: 'Salyangozun renk üretmesi' },
          { id: 'D', text: 'Gözün ses duyması' },
          { id: 'E', text: 'Kulağın mercek yapması' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinir telinde akan impuls hep aynıdır (Sodyum-Potasyum pompası). Onu Görüntü veya Ses yapan şey Beynin hangi Odasına (Kabuğuna) gittiğidir. Yanlış kabloya giden müzik, renk olarak yaşanır.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Orta Seviye Genel Tekrar (Orta)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Işığa karşı aşırı duyarlı bir kişinin korneası ve merceği NORMAL kırıcılıkta olmasına rağmen, retinada HANGİ HÜCRELERİN oranının veya hassasiyetinin ÇOK YÜKSEK olması beklenir?',
        options: [
          { id: 'A', text: 'Koni hücrelerinin' },
          { id: 'B', text: 'Çubuk (Rod) hücrelerinin ve Rodopsin miktarının' },
          { id: 'C', text: 'Korti hücrelerinin' },
          { id: 'D', text: 'Kemoreseptörlerin' },
          { id: 'E', text: 'Kornea hücrelerinin' }
        ],
        correctOptionId: 'B',
        explanation: 'Çubuk hücreleri 1-2 fotonluk ışığı bile yakalayabilir. Bu sistem hiperaktifse, normal bir ışık (gündüz) kişinin gözünü aşırı derecede kamaştırır.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Derimizin Dermiş (Alt deri) katmanında bulunan Pacini Cisimciği hızlı BÜYÜK BASINCA, Meissner Cisimciği ise HAFİF DOKUNMAYA duyarlıdır. Eğer deriye iğne batırılırsa HANGİ reseptör en baskın uyarılır?',
        options: [
          { id: 'A', text: 'Sadece Termoreseptör' },
          { id: 'B', text: 'Koku reseptörü' },
          { id: 'C', text: 'Nosiseptör (Ağrı / Serbest sinir uçları)' },
          { id: 'D', text: 'Tat tomurcuğu' },
          { id: 'E', text: 'Sadece Pacini' }
        ],
        correctOptionId: 'C',
        explanation: 'Doku hasarı (iğne batması) hücreleri yırtar, çıkan kimyasallar Serbest Sinir Uçlarını (Nosiseptörleri) ateşler ve bunu "Acı/Ağrı" olarak duyarız.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Havadaki koku molekülleri, burnumuzun tavanındaki Sarı Bölgedeki reseptörlere gidene kadar Burnun hangi KORUYUCU/FİLTRELEYİCİ yapılarından geçer?',
        options: [
          { id: 'A', text: 'Tükürük ve dil papillası' },
          { id: 'B', text: 'Burun kılları, Mukus (sümüksü tabaka) ve Kılcal damarlarla ısıtılmış kıvrımlı kemikler (Konkalar)' },
          { id: 'C', text: 'Östaki borusu' },
          { id: 'D', text: 'Epiglottis' },
          { id: 'E', text: 'Kulak zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Burun muazzam bir klimadır. Kıllar ve mukus tozu tutar, yüzeydeki bol kılcallar soğuk havayı ısıtır (Soğuk havada burnun kızarması ondandır) ve temiz hava koku reseptörüne varır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Tat almanın Göz ve Kulaktan yapısal olarak FARKLI, Koku almaya BENGİ olan evrimsel ortak özelliği nedir?',
        options: [
          { id: 'A', text: 'Elektrik üretmemeleri' },
          { id: 'B', text: 'Her ikisinin de KEMORESEPTÖR (Kimyasal çözünme) olması ve besin/çevre analizini moleküler düzeyde yapması.' },
          { id: 'C', text: 'Talamusa uğramamaları' },
          { id: 'D', text: 'Geceleri çalışmamaları' },
          { id: 'E', text: 'Kemik içinde olmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Tat ve Koku kimyasal (moleküler) duyulardır. Göz, kulak ve deri ise fiziksel (Foton, dalga, basınç, ısı) enerji ölçerler.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Hipermetrop (Yakını göremeyen) bir insanda, göz küresi KISALDIĞI İÇİN görüntünün arkaya düştüğünü biliyoruz. Peki Göz Merceği açısından BAŞKA HANGİ NEDEN hipermetropiye (veya Presbiyopiye) yol açabilir?',
        options: [
          { id: 'A', text: 'Merceğin kırmızı olması' },
          { id: 'B', text: 'Merceğin KIRICILIĞININ AZALMASI (Çok yassı / ince kalması) sonucu ışığı ERKEN toplayamaması' },
          { id: 'C', text: 'Merceğin yok olması' },
          { id: 'D', text: 'Merceğin fazla şişkinleşmesi' },
          { id: 'E', text: 'Korneanın büyümesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Görüntünün arkaya düşmesinin 2 sebebi vardır: 1- Göz kısadır (Perde öndedir). 2- Mercek tembeldir/yassıdır (Kırıcılığı azdır, ışığı geç büker, odak arkada kalır).'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Kulağımıza gelen bir ses dalgasının SIVI (Endolenf/Perilenf) içindeki yolculuğu HANGİ YAPILAR ARASINDA BAŞLAR VE BİTER?',
        options: [
          { id: 'A', text: 'Kulak zarı başlar -> Östakide biter' },
          { id: 'B', text: 'OVAL PENCERE (Başlangıç/Giriş) -> Salyangoz kanalları -> YUVARLAK PENCERE (Bitiş/Sönümleme)' },
          { id: 'C', text: 'Çekiç -> Örs' },
          { id: 'D', text: 'Tulumcuk -> Kesecik' },
          { id: 'E', text: 'Kornea -> Retina' }
        ],
        correctOptionId: 'B',
        explanation: 'Sesin su (sıvı) altındaki mekanik macerası; Üzenginin Oval pencereyi yumruklamasıyla başlar, kanalın tepesini döner, Kortiyi uyarır ve Yuvarlak pencere zarını dışarı esneterek son bulur.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Retinanın merkezindeki Sarı Benek (Fovea) sadece KONİ hücrelerinden, çevresi (Periferi) ise ağırlıklı olarak ÇUBUK hücrelerinden oluşur. Bir kitaptaki küçük bir yazıyı GÖZ UCUYLA (Yandan) NEDEN OKUYAMAYIZ?',
        options: [
          { id: 'A', text: 'Kitabın karanlık olmasından' },
          { id: 'B', text: 'Yazı, retinanın çevresine (Çubukların olduğu yere) düşer. Çubukların "KESKİNLİK ve DETAY" çözünürlüğü çok DÜŞÜKTÜR. Yazıyı net okumak için tam Foveaya (Konilere) düşürmemiz gerekir.' },
          { id: 'C', text: 'Koni hücrelerinin harfleri sevmemesinden' },
          { id: 'D', text: 'Göz kaslarının yan bakmaya izin vermemesinden' },
          { id: 'E', text: 'Kör noktaya düştüğü için' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok sayıda çubuk hücresi tek bir sinire bağlanır (Piksel birleşmesi), bu nedenle hassaslık (loşta görme) artar ama GÖRÜNTÜ ÇÖZÜNÜRLÜĞÜ (Netlik) düşer. Koni hücreleri ise sinirlere teke tek bağlanır (4K Çözünürlük).'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bindiğimiz bir teknenin sallanması sonucu DENGE KAYBI yaşadık. Mide bulantımız başladı. Vücudumuzda BU DURUMU algılayan İKİ TEMEL organ hangisidir?',
        options: [
          { id: 'A', text: 'Karaciğer ve Böbrek' },
          { id: 'B', text: 'İÇ KULAK (Yarım daire ve Otolitler) ve GÖZ (Görsel algı)' },
          { id: 'C', text: 'Deri ve Koku' },
          { id: 'D', text: 'Dişler ve Dil' },
          { id: 'E', text: 'Kalp ve Akciğer' }
        ],
        correctOptionId: 'B',
        explanation: 'Dengeyi 3 sistem sağlar: İç Kulak, Göz ve Kaslardaki propriyoseptörler (Eklem konumu). Teknedeki uyumsuzluk göz (ufku sabit görür) ile iç kulak (çalkalanır) arasındadır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Derinin ALT DERİ (Dermis) tabakasındaki elastin ve kolajen protein lifleri yaşlanma ve UV (Güneş) ışınları etkisiyle YAPISINI KAYBEDER. Bunun YÜZEYDEKİ EN BELİRGİN SONUCU nedir?',
        options: [
          { id: 'A', text: 'Derinin yeşile dönmesi' },
          { id: 'B', text: 'Derinin SARKMASI, ESNEKLİĞİNİ YİTİRMESİ VE KIRIŞIKLIKLARIN OLUŞMASI' },
          { id: 'C', text: 'Kılların daha hızlı uzaması' },
          { id: 'D', text: 'Terlemenin durması' },
          { id: 'E', text: 'Derinin kemikleşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Alt derideki bağ doku lifleri derinin gerginliğini (gençliğini) sağlar (Kolajen desteği). UV ışığı bu protein bağlarını keser, deri elastikiyetini kaybedip kırışır.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Gözde KIRICILIĞIN yapıldığı İKİ YER vardır. Biri sabittir, diğeri ise kaslarla değişebilir (Akomodasyon). Bu iki yapı sırasıyla hangileridir?',
        options: [
          { id: 'A', text: 'İris ve Retina' },
          { id: 'B', text: 'KORNEA (Sabit odak) ve GÖZ MERCEĞİ (Değişken odak)' },
          { id: 'C', text: 'Camsı Cisim ve Kör Nokta' },
          { id: 'D', text: 'Sklera ve Koroid' },
          { id: 'E', text: 'Optik sinir ve Talamus' }
        ],
        correctOptionId: 'B',
        explanation: 'Kornea (%70) gözlük camı gibi sabit kırıcıdır. Mercek (%30) ise ince ayar düğmesi (oto-fokus) gibi şekil değiştirerek netleştirme yapar.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Astigmatizmin (Bulanık ve yamuk görme), Miyoptan ve Hipermetroptan TEMEL FARKI nedir?',
        options: [
          { id: 'A', text: 'Göz küresinin boyunun değil, KORNEA veya MERCEK YÜZEYİNİN kavisinin asimetrik (pürüzlü/silindirik) olması ve ışığın TEK BİR ODAK YERİNE BİRÇOK ODAĞA DAĞILMASI' },
          { id: 'B', text: 'Sadece yaşlılarda görülmesi' },
          { id: 'C', text: 'Renk körlüğüyle aynı olması' },
          { id: 'D', text: 'Işığın retinayı delmesi' },
          { id: 'E', text: 'Gözün gözyaşı üretememesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Miyop/Hipermetropta tek bir odak noktası vardır ama yeri yanlıştır. Astigmatta ise kornea tıpkı bir kaşık (oval) gibidir, ışığı dikey ve yatayda farklı kırar, bu da birden fazla odak (gölge/kayma) yaratır.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Sıcacık bir çorbayı içtikten sonra çikolata yediğimizde çikolatanın BİLDİĞİMİZ TADINI alamayız. Dildeki reseptörlerin HANGİ ÖZELLİĞİ bunu açıklar?',
        options: [
          { id: 'A', text: 'Tat hücrelerinin ömrünün 1 gün olması' },
          { id: 'B', text: 'Tat reseptörlerinin ÇALIŞABİLECEĞİ OPTİMUM (En uygun) SICAKLIK ARALIĞI dışına çıkıldığında, enzimlerin veya iyon kanallarının uyuşması/çalışamaması' },
          { id: 'C', text: 'Çikolatanın erimesi' },
          { id: 'D', text: 'Tatlı reseptörlerinin sıcakta tuzluya dönüşmesi' },
          { id: 'E', text: 'Çorbanın dili boyaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Tıpkı çok soğuk karda ellerimizin uyuşup dokunmayı hissetmemesi gibi, ekstrem sıcak ve soğuklar dildeki tat alma kanallarını anlık bloke eder.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Karanlık (loş) ortamda, ÇUBUK hücrelerinin çalışması İÇİN gerekli olan Rodopsin molekülü sentezi yavaştır. Bir araba farı GÖZÜMÜZE GİRİP ÇIKTIĞINDA bir an için HER YERİ SİMSİYAH (kör gibi) görmemizin nedeni nedir?',
        options: [
          { id: 'A', text: 'Göz bebeğinin patlaması' },
          { id: 'B', text: 'Şiddetli ışığın (Far), zorlukla birikmiş olan RODOPSİNLERİN TAMAMINI BİR ANDA PARÇALAMASI ve yenilerinin yapılması için zaman gerekmesi' },
          { id: 'C', text: 'Retinanın kanaması' },
          { id: 'D', text: 'Talamusun çalışmayı durdurması' },
          { id: 'E', text: 'Sarı beneğin yer değiştirmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Gece rodopsin seviyeniz yüksektir. Anlık flaş ışığı tüm rodopsinleri yıkar (Buna Ağartma/Bleaching denir). Sistem sıfırlanır, tekrar körlüğe döner ve yeniden sentez bekler.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Ses dalgasının frekansı (ince/kalın) ve ses dalgasının genliği (ses şiddeti/gürlüğü) KULAĞIMIZDA hangi reseptör tepkilerine karşılık gelir?',
        options: [
          { id: 'A', text: 'İkisi de aynıdır.' },
          { id: 'B', text: 'Frekans: Salyangozda HANGİ BÖLGEDEKİ (baş veya son) tüylerin büküldüğü. Şiddet (Genlik): O tüylerin NE KADAR SERT BÜKÜLDÜĞÜ (İmpuls frekansı)' },
          { id: 'C', text: 'Frekans kulak kepçesi, Şiddet kulak zarı tarafından ölçülür.' },
          { id: 'D', text: 'Frekans gözle, şiddet kulakla algılanır.' },
          { id: 'E', text: 'Frekans otolitlerle, şiddet yarım daireyle ölçülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zardaki HANGİ PIYANO TUŞUNUN (bölgenin) basıldığı Perdeyi (Frekansı), o tuşa NE KADAR GÜÇLÜ (Şiddetli) basıldığı ise Sesin gürlüğünü (Desibel) belirler.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Beynimiz Koku adaptasyonunu NASIL kendi çıkarına kullanır?',
        options: [
          { id: 'A', text: 'Burnu küçülterek' },
          { id: 'B', text: 'Kendi vücut kokumuzu veya içinde bulunduğumuz odanın ZARARSIZ kokusunu SİLEREK (Adapte olarak), DIŞARIDAN GELECEK YENİ VE TEHLİKELİ (Duman/Gaz/Yabancı) KOKULARA KAPIYI AÇIK TUTARAK' },
          { id: 'C', text: 'Nefesi keserek' },
          { id: 'D', text: 'Tat almayı artırarak' },
          { id: 'E', text: 'Sürekli hapşırtarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Duyusal adaptasyon kusur değil mükemmel bir evrimsel tasarımdır. Statik (değişmeyen ve güvenli) arka planı siler (yok sayar) ki yeni gelen tehlikeli sinyal anında fark edilebilsin.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Orta Seviye Genel Tekrar 2 (Orta)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Sıcak bir günde denize girdiğimizde su İLK ANDA BİZE ÇOK SOĞUK GELİR, 5 dakika sonra ise "GİRİNCE ALIŞIYORSUN" deriz. Oysa suyun sıcaklığı DEĞİŞMEMİŞTİR. Bu durum biyolojik olarak nasıl açıklanır?',
        options: [
          { id: 'A', text: 'Suyun aniden ısınmasıyla' },
          { id: 'B', text: 'Derideki SOĞUK RESEPTÖRLERİNİN sürekli aynı ısı uyarısına maruz kalınca ateşlemeyi YAVAŞLATMASI (Termal Adaptasyon)' },
          { id: 'C', text: 'Kalbin kan pompalamayı durdurması' },
          { id: 'D', text: 'Gözlerin kapanması' },
          { id: 'E', text: 'Sıcak reseptörlerinin soğuğa dönüşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Termoreseptörler ısı "DEĞİŞİMİNE" çok duyarlıdır (İlk an). Isı sabit kaldığında uyarı genliği düşer, beyne giden impuls azalır, suyu daha az soğuk hissederiz (Alışma).'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Burnu tamamen tıkalı olan birine gözü kapalıyken Elma ve Soğan yedirildiğinde, ikisini AĞZINDA AYIRT EDEMEYİP "Tatlımsı, kütür kütür bir şey" olarak tanımlamasının nedeni nedir?',
        options: [
          { id: 'A', text: 'İkisinin de aynı bitki olması' },
          { id: 'B', text: 'Beynin Lezzet algısının %80 Kokuya bağlı olması; Soğanın ve Elmanın DİLDEKİ Temel TATLARININ (Hafif şekerli/sulu) BENZER olması, asıl farkın SOĞANIN KESKİN UÇUCU KOKUSU (Aroma) olması' },
          { id: 'C', text: 'Dilin tatlıyı sevmemesi' },
          { id: 'D', text: 'Ağzın soğanı reddetmesi' },
          { id: 'E', text: 'Soğanın acı biber içermesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Dokusuna (kütür kütür) ve dilimizdeki temel tatlara (ikisi de tatlı/sulu) bakıldığında elma ve soğan yakındır. Bizi ağlatan ve soğanı soğan yapan şey burnumuzdan (genzimizden) giren UÇUCU kükürtlü gazların kokusudur.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Beynimiz, iki gözden gelen FARKLI İKİ GÖRÜNTÜYÜ nasıl kullanır?',
        options: [
          { id: 'A', text: 'Birini çöpe atar.' },
          { id: 'B', text: 'İki göz nesneye FARKLI AÇILARDAN (5-6 cm farkla) baktığı için, beyin bu iki farklı resmi birleştirerek DERİNLİK ALGISI (3 Boyut) ve MESAFE TAHMİNİ yaratır.' },
          { id: 'C', text: 'Renkleri ayırmak için kullanır.' },
          { id: 'D', text: 'Sadece uzağı görmek için kullanır.' },
          { id: 'E', text: 'Sesin yönünü bulmak için kullanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek gözü kapalıyken ipliği iğneden geçirmek veya masadaki bardağı tutmak zorlaşır. Binoküler (İki gözlü) görme, beynin derinlik/uzaklık (3D) haritası oluşturmasını sağlar.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Kulaktaki Denge sistemi (Yarım daire vb.) ile Görme duyusu sürekli iletişim halindedir. Eğer kendi etrafımızda HIZLA DÖNMEYE başlarsak, GÖZLERİMİZİN İSTEMSİZCE (Titrercesine) sağa sola kaymasının (Nistagmus) nedeni nedir?',
        options: [
          { id: 'A', text: 'Gözün korkması' },
          { id: 'B', text: 'İç kulağın "Dönüyoruz" bilgisini BEYİN SAPI aracılığıyla göz kaslarına yollayarak, dönen bir dünyada GÖRÜNTÜYÜ SABİTLEME (Odaklanma) çabası refleksidir.' },
          { id: 'C', text: 'Işığın gözü alması' },
          { id: 'D', text: 'Retinanın yırtılması' },
          { id: 'E', text: 'Körlüğün başlaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Vestibülo-Oküler Refleks (VOR). Başınızı sağa çevirirseniz gözler otomatik sola kayar ki görüntü sabit kalsın. Dönme sırasında sıvı hareket ettikçe gözler de uyum için seğirir.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'İçkulak salyangozunda Yüksek frekanslı (Tiz) sesleri duyan tüylü hücrelerin, Alçak frekanslı (Bas) sesleri duyanlara göre DAHA ÇABUK ve YAŞLANDIKÇA İLK OLARAK KÖRELMESİNİN (İşitme kaybı) mekanik sebebi nedir?',
        options: [
          { id: 'A', text: 'Tiz ses hücrelerinin kulak zarında olması' },
          { id: 'B', text: 'Tiz sesleri algılayan hücrelerin salyangozun GİRİŞİNDE (Oval pencereye en yakın) bulunması ve her sesin ilk sillesini (dalga enerjisini) onların yiyerek daha çabuk YIPRANMASI' },
          { id: 'C', text: 'Bas seslerin daha güçlü olması' },
          { id: 'D', text: 'Beynin tiz sesleri istememesi' },
          { id: 'E', text: 'Tiz ses hücrelerinin sıvı olmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaşlılar kalın sesleri duyar ama çocuk/kadın seslerini (Tiz/Yüksek frekans) anlamakta zorlanır. Çünkü yüksek frekans hücreleri kanalın hemen başındadır ve en çok dalga yorgunluğunu (Mekanik hasar) onlar çeker.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Deri, çevreden gelen basınç, sıcaklık ve acı duyularını iletir. Peki GÖZÜMÜZ KAPALIYKEN PARMAĞIMIZIN, KOLUMUZUN havada hangi pozisyonda durduğunu (bükülü mü, düz mü) DERİ YARDIMI OLMADAN nasıl hissederiz?',
        options: [
          { id: 'A', text: 'Sihirle' },
          { id: 'B', text: 'Kaslarda, tendonlarda ve eklemlerde bulunan PROPRİYOSEPTÖRLERİN (Vücut pozisyonu algılayıcılarının) beyne sürekli "kasılma ve gerginlik" verisi göndermesiyle' },
          { id: 'C', text: 'Kan basıncıyla' },
          { id: 'D', text: 'Kemiklerin sürtünmesiyle' },
          { id: 'E', text: 'Kulak zarıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas iğcikleri ve Golgi tendon organları "Propriyosepsiyon (Özduyum)" sağlar. Bu sayede karanlıkta bile burnumuzun ucuna parmağımızı dokundurabiliriz.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Optik sinirlerin (Gözden çıkan sinirlerin) Çapraz yapması (Optik Kiazma) neyi sağlar?',
        options: [
          { id: 'A', text: 'Gözlerin kanlanmasını engeller.' },
          { id: 'B', text: 'Her iki gözün SOL GÖRME ALANINDAN gelen bilginin beynin SAĞ LOBUNA, SAĞ GÖRME ALANINDAN gelen bilginin beynin SOL LOBUNA gitmesini sağlar.' },
          { id: 'C', text: 'Sadece gece görmeyi sağlar.' },
          { id: 'D', text: 'Renklerin oluşumunu hızlandırır.' },
          { id: 'E', text: 'Göz kırpmayı kontrol eder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinir sistemi çapraz çalışır. Vücudun sağ tarafını sol beyin yönettiği gibi, uzayın sağ tarafındaki görüntüleri de (her iki gözden toplayarak) beynin sol lobu değerlendirir.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Gözyaşı bezleri, tükürük bezleri, ter bezleri ve mide bezleri anatomik olarak NASIL BEZLERDİR?',
        options: [
          { id: 'A', text: 'Endokrin (İç salgı) bezi' },
          { id: 'B', text: 'Egzokrin (Dış salgı) bezi (Salgılarını bir KANALLA dışarıya veya vücut boşluklarına bırakırlar)' },
          { id: 'C', text: 'Karma bez' },
          { id: 'D', text: 'Sadece hormon bezi' },
          { id: 'E', text: 'Lenf bezi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan yoluyla hormon yollayanlar Endokrin (Tiroid, Hipofiz); salgısını tüple/kanalla deri yüzeyine veya organ boşluğuna dökenler Egzokrin (Gözyaşı, Ter) bezidir.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Derinin EN ALTINDA yer alan HİPODERMİS (Deri altı) dokusunun Temel Yapısı ve Görevi nedir?',
        options: [
          { id: 'A', text: 'Sadece sinir hücresidir.' },
          { id: 'B', text: 'Yoğun YAĞ DOKUDAN oluşur; ısı yalıtımı yapar, enerji depolar ve organları mekanik darbelere karşı yastık gibi korur.' },
          { id: 'C', text: 'Kemik hücrelerinden oluşur.' },
          { id: 'D', text: 'Sürekli su üretir.' },
          { id: 'E', text: 'Kılların rengini belirler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dermisin de altında "Subkutan (Hipodermis)" yağ tabakası bulunur. Kadınlarda daha kalındır. Kışın ısıyı korur ve darbeyi emer.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Gözdeki "Sarı Benek (Makula)" bölgesinin dejenere olması (Yaşa bağlı Makula Dejenerasyonu / Sarı Nokta Hastalığı) durumunda hasta dünyayı NASIL GÖRÜR?',
        options: [
          { id: 'A', text: 'Sadece siyah beyaz görür.' },
          { id: 'B', text: 'Baktığı yerin TAM MERKEZİNİ KARANLIK VEYA BULANIK bir leke olarak görür, sadece ÇEVRESEL GÖRÜŞÜ korur.' },
          { id: 'C', text: 'Merkezi çok net, kenarları siyah görür.' },
          { id: 'D', text: 'Tamamen kör olur.' },
          { id: 'E', text: 'Sürekli çift görür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı benek odak noktasıdır. Baktığınız kişinin yüzü (merkez) karanlık bir leke olur, ama kişinin kollarını veya arka planı (periferik/çubuklar) seçebilirsiniz. Görme tamamen sıfırlanmaz ama okuma/yüz tanıma biter.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Tat duyusunu alan kemoreseptörlerin BEYNE iletim yolculuğunda (Talamus üzerinden), BAŞKA HANGİ DUYUNUN da entegrasyonu (birleşmesi) sonucu biz yemeğin "Lezzetini" algılarız?',
        options: [
          { id: 'A', text: 'Sadece Ses' },
          { id: 'B', text: 'Koku duyusunun Limbik sistemde (Koku ve Tat) birleşmesi (Ve hatta sıcaklık, doku vb.)' },
          { id: 'C', text: 'Işığın' },
          { id: 'D', text: 'İç kulak sıvısının' },
          { id: 'E', text: 'Sadece kasların' }
        ],
        correctOptionId: 'B',
        explanation: 'Beynimiz; dilin verdiği "tatlı" bilgisini, burnun verdiği "çilek aroması" bilgisini, derinin verdiği "soğuk ve kremsi" bilgisini birleştirerek Çilekli Dondurma Lezzetini (Flavour) yaratır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Soğuk bir kış günü sıcak çaydanlığı tuttuğumuzda elimizi HEMEN ÇEKMEMİZ ile (Omurilik Refleksi), "Elim yandı!" diyerek ACIYI HİSSETMEMİZ (Beyin) arasındaki FARK nedir?',
        options: [
          { id: 'A', text: 'Aynı anda gerçekleşir, fark yoktur.' },
          { id: 'B', text: 'ÖNCE omurilik kısa yoldan kası uyararak elimizi çektirir (Hayatta kalma/Hız), SANİYENİN KESİRLERİ SONRA impuls beyne ulaşır ve biz ağrıyı bilinçli olarak fark ederiz.' },
          { id: 'C', text: 'Önce beyin hisseder, sonra omurilik eli çektirir.' },
          { id: 'D', text: 'El çekilince acı tamamen yok olur.' },
          { id: 'E', text: 'Göz görmezse el çekilmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Refleks yayında beyin "bypass" edilir ki saniyeler kaybedilmesin ve doku yanmasın. El çekildikten kısa bir süre sonra sinyal beyin korteksine de varır ve biz "Ahh yandı" deriz.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Kulak zarına (Dışarıya) bakan Östaki borusu ağzı normalde KAPALIDIR. Sadece yutkunma ve esneme ile kaslar onu açar. Neden sürekli AÇIK KALMAZ?',
        options: [
          { id: 'A', text: 'Boğazımızdaki nefes ve konuşma seslerinin (yankısının) İÇERİDEN SÜREKLİ KULAĞA GELİP (Uğultu) işitmeyi bozmaması için' },
          { id: 'B', text: 'Gözlerin yaşarmaması için' },
          { id: 'C', text: 'Beyne oksijen gitmesi için' },
          { id: 'D', text: 'Tükürüğün kulağa dolmaması için' },
          { id: 'E', text: 'Burnun kurumaması için' }
        ],
        correctOptionId: 'A',
        explanation: 'Östaki sürekli açık kalsaydı, her nefes alışverişimiz ve kalp atışımız bir davul gibi orta kulağa yankılanırdı. Sadece basınç eşitlemek gerektiğinde yutkunmayla açılır ve kapanır.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Göze DAMLAYAN terin veya tozun BATMA / ACI HİSSİ yaratmasını sağlayan (Kornea refleksini başlatan) GÖZDEKİ EN DUYARLI sinir ağı HANGİ YAPIDADIR?',
        options: [
          { id: 'A', text: 'Kornea yüzeyindeki Serbest Sinir Uçları (Nosiseptörler)' },
          { id: 'B', text: 'Retinadaki koniler' },
          { id: 'C', text: 'Mercekteki kaslar' },
          { id: 'D', text: 'Sarı benek' },
          { id: 'E', text: 'Kör nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Korneada damar yoktur ama MUAZZAM BİR SİNİR AĞI vardır. Gözün en ufak çiziklere bile refleks gözyaşı/kırpma tepkisi vermesi, vücuttaki en yoğun ağrı reseptörlerinden (serbest uçlar) birine sahip olmasındandır.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Beynimizin "Parietal Lobu (Üst/Yan Lob)" HANGİ DUYUNUN ana değerlendirme (Korteks) merkezidir?',
        options: [
          { id: 'A', text: 'Görme (Oksipital)' },
          { id: 'B', text: 'İşitme (Temporal)' },
          { id: 'C', text: 'Dokunma, Basınç, Sıcaklık, Acı (Deri duyuları - Somatosensoriyel Korteks)' },
          { id: 'D', text: 'Koku (Limbik)' },
          { id: 'E', text: 'Denge (Beyincik)' }
        ],
        correctOptionId: 'C',
        explanation: 'Beyin kabuğu işbölümü yapar: Görme (Arka), İşitme (Şakak), Deri duyuları (Üst/Yan-Parietal lob) merkezlerinde çözümlenir.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Duyu Organları Karma Final Testi',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Bir insanın duyu organlarından gelen HANGİ İKİ BİLGİ birbiriyle ÇELİŞİRSE araba veya deniz tutması (Mide bulantısı / Motion Sickness) yaşanır?',
        options: [
          { id: 'A', text: 'Tat ve Koku' },
          { id: 'B', text: 'Görme (Dışarıyı sabit veya hareketli sanma) ile İç Kulak Vestibüler Sistemi (Sıvının çalkalanmasıyla algılanan ivme)' },
          { id: 'C', text: 'İşitme ve Dokunma' },
          { id: 'D', text: 'Sıcaklık ve Basınç' },
          { id: 'E', text: 'Ağrı ve Görme' }
        ],
        correctOptionId: 'B',
        explanation: 'Arabanın arka koltuğunda kitap okurken, Göz "Sabit duruyoruz" der (Çünkü kitap sabittir). İç Kulak ise "Sağa sola sarsılıyoruz" der. Beyin bu uyumsuzluğu Zehirlenme (Halüsinasyon) olarak algılar ve zehri atmak için Kusma merkezini uyarır.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Duyusal adaptasyon (Alışma), sinir sisteminin enerjisini verimli kullanmak için geliştirdiği bir yöntemdir. Hangi duyu organındaki reseptörler (veya duyular) bu "Adaptasyona" EN DİRENÇLİDİR (En zor alışır)?',
        options: [
          { id: 'A', text: 'Koku (Parfüm kokusu)' },
          { id: 'B', text: 'Dokunma (Kıyafetin deriye teması)' },
          { id: 'C', text: 'Sıcaklık (Banyo suyu)' },
          { id: 'D', text: 'Ağrı / Acı (Nosiseptörler)' },
          { id: 'E', text: 'Görme (Gözlüğün çerçevesi)' }
        ],
        correctOptionId: 'D',
        explanation: 'Kötü kokuya veya kıyafete hemen alışırsınız (İmpuls durur). Ancak dişiniz ağrıyorsa veya elinize batan iğne çıkmadıysa AĞRI SIFIRLANMAZ. Çünkü ağrı, vücutta devam eden BİR HASARIN / TEHLİKENİN sirenidir. Siren susarsa ölürsünüz.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Retinanın Fovea (Sarı Benek) bölgesine odaklanan bir görüntünün BEYİNDE daha çok YER KAPLAMASININ (Kortekste devasa bir alanda çözümlenmesinin) nedeni nedir?',
        options: [
          { id: 'A', text: 'Foveanın siyah beyaz olması' },
          { id: 'B', text: 'Sarı benekteki her bir KONİ hücresinin beyni GİDEN ÖZEL BİR SİNİR TELİNE sahip olması. (Birebir bağlantı, yüksek bant genişliği)' },
          { id: 'C', text: 'Çubuk hücrelerinin çok büyük olması' },
          { id: 'D', text: 'Foveanın gözün önünde olması' },
          { id: 'E', text: 'Merceğin sadece oraya odaklanması' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevresel (Periferik) retinada 100 tane çubuk hücresi toplanıp tek bir sinire bağlanır (Veri sıkıştırması). Sarı benekte ise her Koni hücresinin VIP hattı vardır. Bu da merkezdeki ufacık bir noktanın beyni devasa veriye boğması demektir (Netlik budur).'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Kulak zarına takılan "Tüp" ameliyatı genellikle ÇOCUKLARDA, Orta Kulak İltihabının (Sıvı birikmesinin) KRONİKLEŞTİĞİ durumlarda yapılır. Bu tüpün FİZİKSEL amacı nedir?',
        options: [
          { id: 'A', text: 'Çocuğun kulağından beslenmesini sağlamak' },
          { id: 'B', text: 'Tıkanmış ve çalışmayan ÖSTAKİ BORUSUNUN görevini üstlenerek, orta kulakta biriken iltihabı DIŞARI AKITMAK ve basıncı hava ile EŞİTLEMEK' },
          { id: 'C', text: 'Sesi yükseltmek' },
          { id: 'D', text: 'Zarın tamamen kapanmasını sağlamak' },
          { id: 'E', text: 'İç kulağı yıkamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Çocuklarda Östaki borusu daha yataydır (kısa ve düz), boğazdaki mikroplar orta kulağa kolay kaçar. İltihap akamadığında zarı delip bir tüp (havalandırma borusu) takarlar ki sıvı dış kulağa aksın.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'İşitme sırasında mekanik enerjinin (Ses) -> Elektriksel enerjiye (İmpuls) dönüştüğü TAM (Nokta atışı) anatomik yer neresidir?',
        options: [
          { id: 'A', text: 'Kulak Kepçesi' },
          { id: 'B', text: 'Kulak Zarı' },
          { id: 'C', text: 'Çekiç-Örs-Üzengi kemikleri' },
          { id: 'D', text: 'Salyangoz içindeki KORTİ ORGANININ (Bazilar zarın üstündeki) Tüylü Hücreleri' },
          { id: 'E', text: 'Östaki Borusu' }
        ],
        correctOptionId: 'D',
        explanation: 'Zar ve kemikler sadece "titreşir" ve sesi yükseltir (Mekanik iletim). Sıvı dalgalanıp tüyleri büktüğü anda "Aksiyon Potansiyeli" ateşlenir (Transdüksiyon / Çevirim).'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Renkli görmeyi sağlayan Kırmızı, Yeşil ve Mavi KONİ hücrelerinin bazı genetik kusurlarla hiç ÜRETİLEMEMESİ veya EKSİK ÜRETİLMESİ sonucu, hangi BİLİNDİK hastalık ortaya çıkar?',
        options: [
          { id: 'A', text: 'Gece Körlüğü' },
          { id: 'B', text: 'Astigmat' },
          { id: 'C', text: 'Miyop' },
          { id: 'D', text: 'Renk Körlüğü (Örn: Daltonizm / Kırmızı-Yeşil Renk Körlüğü)' },
          { id: 'E', text: 'Katarakt' }
        ],
        correctOptionId: 'D',
        explanation: 'Eğer yeşil koniniz yoksa, beyninize yeşil ışık bilgisi gitmez. Kırmızı ve yeşil renkleri birbiriyle karıştırırsınız (Daltonizm - X kromozomuna bağlı çekinik taşınır).'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Tat tomurcuklarının (Dildeki Papillalar) yerleşimine dair eski bir EFSANE olan "Tat Haritası" (Dilin ucu tatlı, arkası acı algılar) teorisi GÜNÜMÜZDE neden TERK EDİLMİŞTİR?',
        options: [
          { id: 'A', text: 'İnsanların dilleri küçüldüğü için' },
          { id: 'B', text: 'Çünkü HER BİR tat tomurcuğunun içinde TATLI, TUZLU, EKŞİ, ACI ve UMAMİ reseptörlerinin HEPSİ bir arada bulunur. (Dilin her yeri her tadı alır, sadece hafif hassasiyet farkları olabilir)' },
          { id: 'C', text: 'Umami tadı yeni bulunduğu için' },
          { id: 'D', text: 'Dilin ortası tat almadığı için' },
          { id: 'E', text: 'Tatlar tükürükte karıştığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Eski kitaplardaki bölgesel tat haritası yanlıştır. Bir tat tomurcuğu soğan gibidir ve içinde 5 farklı tada duyarlı farklı hücreler barındırır. Dilin ucuyla da acıyı gayet net alırsınız.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Uçakta yolculuk ederken kabin basıncı düştüğünde kulaklarımız TIKANIR, sesleri boğuk duyarız ve ESNEYİP YUTKUNDUĞUMUZDA "Pat" diye açılır. Bu "Pat" sesinin kaynağı nedir?',
        options: [
          { id: 'A', text: 'Kulak zarının yırtılması' },
          { id: 'B', text: 'Yutkunma ile Östaki borusunun açılıp, orta kulak ile dış ortam (boğaz) arasındaki HAVA BASINCI FARKININ aniden eşitlenmesi sonucu gergin KULAK ZARININ NORMAL (Serbest) HALİNE DÖNMESİ' },
          { id: 'C', text: 'Çekiç kemiğinin kırılması' },
          { id: 'D', text: 'Salyangoz sıvısının buharlaşması' },
          { id: 'E', text: 'Gözyaşının kulağa akması' }
        ],
        correctOptionId: 'B',
        explanation: 'Uçakta dış basınç düşer. Orta kulaktaki yüksek basınç zarı DIŞA doğru balon gibi şişirir (Gergin zar iyi titreşmez, sağırlaşırız). Yutkunup Östakiyi açtığımızda o fazla hava boğazımıza kaçar, zar rahatlar ("Pat" sesi zardan gelir).'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'İki gözümüzden (Retina) çıkan sinirlerin Optik Kiazma’da (Çaprazda) birleşip Talamus üzerinden Beynin Oksipital Lobuna (Görme merkezi) gitmesine KADARKİ YOLDA (Sinirlerde) bir hasar olursa KÖRLÜK oluşur. Peki OKSİPİTAL KABUKTA (Kortekste) hasar olursa ne olur?',
        options: [
          { id: 'A', text: 'Körlük düzelir' },
          { id: 'B', text: 'Kişi IŞIĞI / ŞEKİLLERİ fiziksel olarak görür (Göz ve sinir sağlamdır) ancak beyin bunu YORUMLAYAMAZ, gördüğünün NE OLDUĞUNU (Masa, insan, elma) ANLAYAMAZ (Görsel Agnozi / Kortikal Körlük)' },
          { id: 'C', text: 'Kulaklar duymamaya başlar' },
          { id: 'D', text: 'Gözler küçülür' },
          { id: 'E', text: 'Koku alma durur' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz kameradır, Sinirler kablodur, Korteks bilgisayardır. Bilgisayar çökerse kamera kayıt yapsa da ekranda anlamsız pikseller görürsünüz. Hasta önüne konan nesneye bakar ama "Bu bir kalemdir" diyemez.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Deri duyusunu taşıyan sinirlerin yoğunluğu (Reseptör sıklığı) vücudumuzun her yerinde AYNI DEĞİLDİR. Beyin korteksindeki "Duyu Homunculus (Küçük Adam)" haritasına göre, HANGİ BÖLGELERİMİZ en büyük duyarlılığa (en yoğun reseptöre) sahiptir?',
        options: [
          { id: 'A', text: 'Sırt ve Bacaklar' },
          { id: 'B', text: 'ELLER (Parmak uçları), DUDAKLAR ve DİL' },
          { id: 'C', text: 'Omuzlar' },
          { id: 'D', text: 'Ayak topuğu' },
          { id: 'E', text: 'Kafa derisi' }
        ],
        correctOptionId: 'B',
        explanation: 'Dokunma hassasiyeti için test (iki nokta ayırt etme) yapıldığında sırtınızda 4 cm aralıklı iki iğneyi TEK İĞNE sanırsınız. Ancak parmak ucunuz 2 milimetreyi bile ayırır. Çünkü ellerimiz dış dünyayı okuduğumuz (Körlerin kör alfabesi okuması) en hassas radarlarımızdır.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Duyu Organları Zorlayıcı Yorumlar',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'İnsan beyni, koku dışındaki tüm duyuları (Görme, İşitme, Tat, Dokunma) Kortex\'e göndermeden önce TALAMUS\'tan (Dağıtım İstasyonu) geçirir. Kokunun Talamus\'u BYPASS EDİP doğrudan Limbik Sisteme (Duygu/Hafıza Merkezi) gitmesinin evrimsel avantajı nedir?',
        options: [
          { id: 'A', text: 'Kokunun çok yavaş ilerlemesi' },
          { id: 'B', text: 'Kokunun BİLİNÇLİ DÜŞÜNCEYİ (Korteksi) BEKLEMEDEN anında duygusal ve içgüdüsel bir TEHLİKE (Yanık kokusu) veya ÇİFTLEŞME (Feromon) tepkisi yaratmasını (ve eski anıları güçlü şekilde tetiklemesini) sağlamak' },
          { id: 'C', text: 'Burun kemiklerinin uzun olması' },
          { id: 'D', text: 'Beynin kokuyu sevmemesi' },
          { id: 'E', text: 'Burnun talamusa uzak olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku en ilkel duyumuzdur. Ormanda bir aslan kokusu aldığınızda "Bu aslan mıdır?" diye talamusta/kortekste saniye saniye filtreleyip analiz edemezsiniz, anında korkmalı (Amigdala) ve kaçmalısınız (Hafıza - Hipokampus).'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Glokom (Göz Tansiyonu) hastalığında GÖRME SİNİRLERİNİN ÖLMESİNİN VE KÖRLÜĞÜN OLUŞMASININ temelindeki FİZİKSEL MEKANİZMA nedir?',
        options: [
          { id: 'A', text: 'Gözün çok ağlaması' },
          { id: 'B', text: 'Gözün ön/arka odasındaki SIVILARIN sürekli üretilmesine rağmen KANALLARDAN EMİLİP (Drenaj) BOŞALTILAMAMASI sonucu göz içi BASINCIN (Tansiyon) artarak en arkadaki SİNİRLERİ EZMESİ' },
          { id: 'C', text: 'Merceğin donması' },
          { id: 'D', text: 'Retinanın yırtılması' },
          { id: 'E', text: 'Kan basıncının gözü yakması' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz içi sıvısı musluk (üretim) ve gider (kanal) sistemiyle dengededir. Gider tıkanırsa göz küresi şişer (balon gibi gerilir) ve içerideki basınç en zayıf nokta olan optik sinirleri mekanik olarak ezerek öldürür.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bir odaya girdiğinizde çok güçlü bir parfüm kokusu alıyorsunuz (1. Durum). 10 dakika sonra kokuyu hiç almıyorsunuz (2. Durum). Ancak odaya yeni biri girdiğinde "Bu ne biçim parfüm!" diyor (3. Durum). 2. Durumda (Koku Adaptasyonu sırasında) BURUNDAKİ KOKU RESEPTÖRLERİNDE gerçekleşen olay nedir?',
        options: [
          { id: 'A', text: 'Reseptörler ölmüştür, 3 gün sonra yenilenir.' },
          { id: 'B', text: 'Reseptörlerin zarlarındaki sodyum kanalları kapanarak UYARTI ÜRETMEYİ (İmpuls ateşlemeyi) veya BEYNE SİNYAL GÖNDERMEYİ DURDURMUŞTUR (Reseptör yorgunluğu)' },
          { id: 'C', text: 'Tükürük kokuyu parçalamıştır.' },
          { id: 'D', text: 'Beyin korteksi kokuyu farklı bir kokuya çevirmiştir.' },
          { id: 'E', text: 'Koku molekülleri odadan çıkmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Adaptasyon, algının beyinde silinmesinden ziyade RESEPTÖR SEVİYESİNDE olur (Sensory adaptation). Reseptör eşik değeri yükseltir ve aynı molekül gelse bile hücre elektrik üretmez.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Göz hastalıklarından KATARAKT, özellikle yaşlılıkta veya şeker hastalığında görülür. Kataraktın mekanizması ve tedavisi nedir?',
        options: [
          { id: 'A', text: 'Retinanın yırtılmasıdır, yapıştırılır.' },
          { id: 'B', text: 'SAYDAM GÖZ MERCEĞİNİN içindeki proteinlerin bozularak (Yumurta akının pişince beyazlaması gibi) MATLAŞMASI (Bulanıklaşmasıdır). Tedavisi: Mat mercek ameliyatla ÇIKARILIR, yerine SAYDAM PLASTİK MERCEK takılır.' },
          { id: 'C', text: 'Kornea çizilmesidir, gözlük verilir.' },
          { id: 'D', text: 'Kör noktanın büyümesidir, tedavisi yoktur.' },
          { id: 'E', text: 'Göz tansiyonudur, damla verilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Katarakt bir "Cam buğulanması" değildir. Merceği oluşturan Kristalin proteinlerinin yapısı (Denatürasyonu) bozulur ve buzlu cama döner. Işık içeri giremez. O bozuk mercek (mercek kapsülü boşaltılarak) ultrasonla parçalanıp emilir ve suni mercek takılır.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Meniere Hastalığı, İÇ KULAK SIVISI (Endolenf) miktarının aşırı artması sonucu ortaya çıkan ataklı bir hastalıktır. Bu sıvının hem işitme hem de denge kanallarında BASINÇ yapması, hastada HANGİ İKİ TEMEL BELİRTİYİ AYNI ANDA yaşatır?',
        options: [
          { id: 'A', text: 'Körlük ve sağırlık' },
          { id: 'B', text: 'Talamus hasarı ve felç' },
          { id: 'C', text: 'ŞİDDETLİ BAŞ DÖNMESİ (Vertigo - Denge sistemine basınç) VE KULAK ÇINLAMASI/İŞİTME KAYBI (Tinnitus/Korti organına basınç)' },
          { id: 'D', text: 'Koku kaybı ve kusma' },
          { id: 'E', text: 'Tat alamama ve göz kuruması' }
        ],
        correctOptionId: 'C',
        explanation: 'Endolenf sıvısı salyangoz (işitme) ile yarım daire kanalları (denge) arasında ortaktır (bağlantılıdır). Sıvı basıncı artarsa (Ödem), tüylü hücreler hem denge hem işitme uyarısını yalan yanlış ateşler.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Şiddetli ışıkta çalışan bir kaynakçının GÖZBEBEĞİ çok KÜÇÜKTÜR ve GÖZ MERCEĞİ koruyucu refleks olarak KIRICILIĞINI DEĞİŞTİREBİLİR. Göz bebeğini (İris kaslarını) ve Göz merceğini (Kirpiksi kasları) kontrol eden SİNİR SİSTEMİ BÖLÜMÜ aynı mıdır?',
        options: [
          { id: 'A', text: 'Hayır, İris somatik (istemli), mercek otonomdur.' },
          { id: 'B', text: 'Evet, HER İKİSİ DE OTONOM sinir sisteminin (Parasempatik / Sempatik) kontrolü altındadır ve İSTEMSİZ reflekslerle kasılırlar.' },
          { id: 'C', text: 'Evet, ikisi de beyin kabuğunda (istemli) yönetilir.' },
          { id: 'D', text: 'Hayır, biri omurilik diğeri beyincik ile çalışır.' },
          { id: 'E', text: 'Hayır, iris hormonla, mercek sinirle kasılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'İris (Düz kas) ve Kirpiksi cisim (Düz kas) bizim isteğimiz dışında çalışır. Göze fener tuttuğunuzda irisin küçülmesi (Parasempatik) veya yakına bakınca merceğin şişmesi (Parasempatik) otonom (Orta Beyin) refleksidir.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'İki gözümüzle tek bir nesneye bakarken, nesnenin GÖRÜNTÜSÜ HER İKİ GÖZÜN RETİNASINDA DA "KÖR NOKTAYA" (Optik diske) DÜŞEBİLİR Mİ? Düşerse ne olur?',
        options: [
          { id: 'A', text: 'Evet düşer, ve nesneyi göremeyiz.' },
          { id: 'B', text: 'BİR GÖZÜN kör noktasına düşen cismin görüntüsü, DİĞER GÖZÜN SARI BENEĞİNE düşeceği için (Çapraz açı), iki gözümüz açıkken BİR CİSMİ KÖR NOKTA YÜZÜNDEN GÖREMEMEMİZ İMKANSIZDIR.' },
          { id: 'C', text: 'Gözler kapanır.' },
          { id: 'D', text: 'Sadece burnumuzu görürüz.' },
          { id: 'E', text: 'Beyin yeni bir göz yaratır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kör noktalar anatomik olarak retinanın buruna yakın taraflarındadır. Sol gözün kör noktası soldaki bir açıyı görmezken, sağ göz o açıyı rahatça görür. Beyin bu iki eksik puzzle parçasını birleştirip KESİNTİSİZ bir görüntü yaratır.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Bir iğnenin ucunu derimize BATIRMADAN YAVAŞÇA dokundurduğumuzda "Sivri bir Metal" (Dokunma) hissederiz, SERTÇE BATIRDIĞIMIZDA ise "Acı" (Ağrı) hissederiz. UYARAN AYNI (İğne) olmasına rağmen HİSSİN DEĞİŞMESİNİN nedeni nedir?',
        options: [
          { id: 'A', text: 'İğnenin şekil değiştirmesi' },
          { id: 'B', text: 'Hafif dokunmada sadece MEİSSNER/PACİNİ (Mekanoreseptörler) uyarılırken; basınç artıp DOKU HASARI başladığında ağrı üreten SERBEST SİNİR UÇLARININ (Nosiseptörler) ateşlenip diğerlerini bastırması' },
          { id: 'C', text: 'Gözün iğneyi görmesi' },
          { id: 'D', text: 'Sıcaklık reseptörlerinin çalışması' },
          { id: 'E', text: 'İğnenin zehirli olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyartı şiddeti arttıkça, aktifleşen reseptör ÇEŞİDİ de değişebilir. Doku bütünlüğü bozulmaya (hücreler ezilmeye/yırtılmaya) başladığı an Nosiseptörler devreye girer ve Dokunma hissi yerini Acıya bırakır.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Salyangozun (İç kulağın) anatomisi İNCELENDİĞİNDE, Yüksek Frekanslı (İnce) seslerin BAŞLANGIÇTAKİ dar kanalda, Düşük Frekanslı (Kalın) seslerin ise SALYANGOZUN EN UCU (Tepe / Helikotrema) denilen geniş ve esnek bölgesinde algılandığı görülür. Bunun FİZİKSEL YASASI nedir?',
        options: [
          { id: 'A', text: 'Beynin öyle istemesi' },
          { id: 'B', text: 'Rezonans Yasası: Gergin ve dar olan bazilar zar giriş kısmı yüksek frekanslı hızlı titreşimlerle (Gitarın ince teli gibi), esnek ve geniş olan tepe kısmı ise düşük frekanslı yavaş dalgalarla (Kalın tel gibi) rezonansa girer (titreşir).' },
          { id: 'C', text: 'Kalın seslerin ağırdan alması' },
          { id: 'D', text: 'Kemiklerin titreşmemesi' },
          { id: 'E', text: 'Sıvının bitmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Salyangoz sarmalı aslında açıldığında uzun bir trambolin/piyano tuşu şerididir. Giriş kısmı dar ve kalındır (Tiz nota), uca doğru genişler ve incelir (Bas nota). Gelen ses dalgası, kendi frekansına uygun HANGİ BÖLGEYİ daha çok zıplatırsa (Rezonans), beyin o frekansı duyar. (Yer/Mekan Teorisi)'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Umami (Lezzetli / Etli) tadının keşfi, Tat tomurcuklarında spesifik olarak HANGİ KİMYASAL MOLEKÜLE (Amino aside) karşı duyarlı bir reseptörün bulunmasıyla ispatlanmıştır?',
        options: [
          { id: 'A', text: 'Sükroz (Şeker)' },
          { id: 'B', text: 'GLUTAMAT (Glutamik asit) amino asidine (Özellikle et, peynir, domates ve soya sosunda bolca bulunur)' },
          { id: 'C', text: 'Sodyum Klorür (Tuz)' },
          { id: 'D', text: 'Sitrik asit (Limon)' },
          { id: 'E', text: 'Kinin (Acı)' }
        ],
        correctOptionId: 'B',
        explanation: 'Japon bilim insanı Kikunae Ikeda, deniz yosunu çorbasındaki o doyurucu (tatlı/tuzlu/acı/ekşi olmayan) hissin kaynağını araştırırken Glutamat molekülünü buldu. Evrimsel olarak Umami reseptörleri bize "Bu besinde PROTEİN var, bunu ye!" sinyalini verir.'
      }
    ]
  }
]
