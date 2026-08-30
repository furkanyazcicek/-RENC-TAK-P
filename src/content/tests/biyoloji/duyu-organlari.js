export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Uyaran, Reseptör ve Algı Temelleri',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Çevreden gelen ışık, ses veya basınç gibi fiziksel ya da kimyasal etkilere ne ad verilir?',
        options: [
          { id: 'A', text: 'Tepki' },
          { id: 'B', text: 'Uyaran' },
          { id: 'C', text: 'İmpuls' },
          { id: 'D', text: 'Nöron' },
          { id: 'E', text: 'Algı' }
        ],
        correctOptionId: 'B',
        explanation: 'Çevredeki değişimleri başlatan dış etkilere uyaran (uyarıcı) denir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Uyaranı algılayıp elektriksel sinyale (zar potansiyeli değişimine) dönüştüren özelleşmiş hücrelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Motor nöron' },
          { id: 'B', text: 'Efektör' },
          { id: 'C', text: 'Reseptör' },
          { id: 'D', text: 'Glia' },
          { id: 'E', text: 'Miyelin kılıf' }
        ],
        correctOptionId: 'C',
        explanation: 'Reseptör (alıcı) hücreler, farklı uyaranları alıp sinir sisteminin diline çeviren yapılardır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Duyu reseptörlerinden beyne iletilen bilginin, beyin kabuğunda anlamlandırılması sürecine ne denir?',
        options: [
          { id: 'A', text: 'Transdüksiyon' },
          { id: 'B', text: 'Refleks' },
          { id: 'C', text: 'Algı' },
          { id: 'D', text: 'Adaptasyon' },
          { id: 'E', text: 'İletim' }
        ],
        correctOptionId: 'C',
        explanation: 'Algı, reseptörden gelen sinyalin beyin (korteks) tarafından yorumlanıp anlamlı bir duyguya dönüşmesidir (Görmek, işitmek gibi).'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Gözdeki reseptörler hangi tür uyaranlara karşı duyarlıdır?',
        options: [
          { id: 'A', text: 'Sıcaklık' },
          { id: 'B', text: 'Işık (Fotoreseptör)' },
          { id: 'C', text: 'Basınç' },
          { id: 'D', text: 'Kimyasal madde' },
          { id: 'E', text: 'Ağrı' }
        ],
        correctOptionId: 'B',
        explanation: 'Gözdeki çubuk ve koni hücreleri ışığı (fotonları) algılayan fotoreseptörlerdir.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Kulak ve deride bulunan, titreşim, gerilme veya basınca karşı duyarlı olan reseptör çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Kemoreseptör' },
          { id: 'B', text: 'Fotoreseptör' },
          { id: 'C', text: 'Mekanoreseptör' },
          { id: 'D', text: 'Termoreseptör' },
          { id: 'E', text: 'Nosiseptör' }
        ],
        correctOptionId: 'C',
        explanation: 'Mekanik etkileri (ses dalgası, dokunma, basınç) algılayan reseptörlere mekanoreseptör denir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Burun (koku) ve dilde (tat) bulunan reseptörler hangi tür etkilere duyarlıdır?',
        options: [
          { id: 'A', text: 'Isı' },
          { id: 'B', text: 'Işık' },
          { id: 'C', text: 'Mekanik kuvvet' },
          { id: 'D', text: 'Çözünmüş kimyasal maddeler (Kemoreseptör)' },
          { id: 'E', text: 'Yerçekimi' }
        ],
        correctOptionId: 'D',
        explanation: 'Koku ve tat, kimyasal moleküllerin reseptöre bağlanmasıyla algılandığı için kemoreseptörler görev yapar.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Sıcaklık değişimlerini algılayan reseptörlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Fotoreseptör' },
          { id: 'B', text: 'Termoreseptör' },
          { id: 'C', text: 'Kemoreseptör' },
          { id: 'D', text: 'Mekanoreseptör' },
          { id: 'E', text: 'Otolit' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcak ve soğuğu algılayan derideki reseptörler termoreseptörlerdir.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Doku hasarı tehdidini bildiren ve "ağrı" hissini başlatan reseptörlere ne denir?',
        options: [
          { id: 'A', text: 'Nosiseptör' },
          { id: 'B', text: 'Kemoreseptör' },
          { id: 'C', text: 'Fotoreseptör' },
          { id: 'D', text: 'Koni hücresi' },
          { id: 'E', text: 'Çubuk hücresi' }
        ],
        correctOptionId: 'A',
        explanation: 'Ağrı reseptörleri (serbest sinir uçları) nosiseptör olarak adlandırılır.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Bir odaya girdiğimizde parfüm kokusunu yoğun alırız, ancak bir süre sonra kokuyu hissetmemeye başlarız. Bu duruma ne denir?',
        options: [
          { id: 'A', text: 'Uyaran eşiği' },
          { id: 'B', text: 'Duyu adaptasyonu (Alışma)' },
          { id: 'C', text: 'Yansıma' },
          { id: 'D', text: 'Tam yansıma' },
          { id: 'E', text: 'Kırılma' }
        ],
        correctOptionId: 'B',
        explanation: 'Değişmeyen, sabit bir uyarana karşı reseptörün impuls üretimini azaltmasına duyu adaptasyonu denir.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Uyaranın şiddeti (örneğin sesin çok gür çıkması) sinir telinde neyi değiştirir?',
        options: [
          { id: 'A', text: 'İmpulsun hızını düşürür.' },
          { id: 'B', text: 'Aksiyon potansiyelinin büyüklüğünü (genliğini) artırır.' },
          { id: 'C', text: 'İmpulsun sıklığını (frekansını) ve uyarılan lif sayısını artırır.' },
          { id: 'D', text: 'İmpuls oluşumunu tamamen durdurur.' },
          { id: 'E', text: 'Reseptör türünü değiştirir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ya hep ya hiç kuralı gereği impulsun genliği sabittir. Şiddet artışı, birim zamanda geçen impuls sayısını (sıklığını) artırarak beyne kodlanır.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Koku hariç, diğer tüm duyuların beyin kabuğuna (uç beyne) gitmeden önce uğradığı ve sınıflandırıldığı "dağıtım merkezi" neresidir?',
        options: [
          { id: 'A', text: 'Beyincik' },
          { id: 'B', text: 'Omurilik' },
          { id: 'C', text: 'Talamus' },
          { id: 'D', text: 'Hipotalamus' },
          { id: 'E', text: 'Omurilik soğanı' }
        ],
        correctOptionId: 'C',
        explanation: 'Talamus, koku dışındaki duyuların toplanıp kortekse (beyin kabuğuna) yönlendirildiği geçiş istasyonudur.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Reseptörlerde uyaran enerjisinin, sinir sisteminin anlayacağı elektriksel sinyale (zar potansiyeli değişimine) çevrilmesine ne isim verilir?',
        options: [
          { id: 'A', text: 'Transdüksiyon (Dönüştürme)' },
          { id: 'B', text: 'Salgılama' },
          { id: 'C', text: 'Kasılma' },
          { id: 'D', text: 'Sindirim' },
          { id: 'E', text: 'Mitoz' }
        ],
        correctOptionId: 'A',
        explanation: 'Enerjinin sinir diline çevrilmesi sürecine transdüksiyon denir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Görmenin gözde değil, beyinde gerçekleştiğini anlatan ifade hangisidir?',
        options: [
          { id: 'A', text: 'Algı, duyu organında değil merkezi sinir sisteminde (beyin kabuğunda) oluşur.' },
          { id: 'B', text: 'Göz sadece siyah beyaz görür.' },
          { id: 'C', text: 'Göz sadece ışığı yansıtır.' },
          { id: 'D', text: 'Görmeyi omurilik yönetir.' },
          { id: 'E', text: 'Fotoreseptörler beyinde bulunur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Duyu organları (göz, kulak vb.) sadece sinyal üretir. Görüntüyü veya sesi anlamlı bir algı olarak kuran yer beynin ilgili korteks bölgesidir.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Duyu reseptörünün uyarılabilmesi için uyaranın sahip olması gereken MİNİMUM şiddete ne denir?',
        options: [
          { id: 'A', text: 'Maksimum güç' },
          { id: 'B', text: 'Eşik değer' },
          { id: 'C', text: 'Frekans' },
          { id: 'D', text: 'Tolerans' },
          { id: 'E', text: 'Genlik' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşik değerin altındaki uyaranlar impuls başlatamaz.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Hangi duyu organımız çevreden kimyasal bir uyarı (çözünmüş molekül) alarak çalışır?',
        options: [
          { id: 'A', text: 'Göz' },
          { id: 'B', text: 'Kulak' },
          { id: 'C', text: 'Deri' },
          { id: 'D', text: 'Burun (Koku)' },
          { id: 'E', text: 'Yarım daire kanalları' }
        ],
        correctOptionId: 'D',
        explanation: 'Burun ve dil, havadaki veya besindeki kimyasal maddelerle uyarılan kemoreseptör organlardır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Göz Yapısı ve Kırıcı Ortamlar',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Göz küresinin en dışında bulunan, göze dayanıklılık ve şekil veren beyaz renkli tabakaya ne denir?',
        options: [
          { id: 'A', text: 'Ağ tabaka (Retina)' },
          { id: 'B', text: 'Sert tabaka (Sklera)' },
          { id: 'C', text: 'Damar tabaka (Koroid)' },
          { id: 'D', text: 'Kör nokta' },
          { id: 'E', text: 'Sarı nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Gözün beyaz kısmı olan sert tabaka (sklera) gözü dış etkilerden korur.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Sert tabakanın (Gözün beyaz kısmının) ön tarafta saydamlaşarak oluşturduğu, ışığın GÖZE İLK GİRDİĞİ ve ilk kırıldığı kubbemsi yapı hangisidir?',
        options: [
          { id: 'A', text: 'İris' },
          { id: 'B', text: 'Mercek' },
          { id: 'C', text: 'Kornea (Saydam tabaka)' },
          { id: 'D', text: 'Camsı cisim' },
          { id: 'E', text: 'Retina' }
        ],
        correctOptionId: 'C',
        explanation: 'Kornea, sert tabakanın önde farklılaşarak saydamlaştığı, gözün penceresi olan yapıdır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Gözün beslenmesini sağlayan damarları içeren ve gözün içinin karanlık bir oda olmasını sağlayan orta tabaka hangisidir?',
        options: [
          { id: 'A', text: 'Sert tabaka' },
          { id: 'B', text: 'Ağ tabaka' },
          { id: 'C', text: 'Damar tabaka (Koroid)' },
          { id: 'D', text: 'Kornea' },
          { id: 'E', text: 'Göz bebeği' }
        ],
        correctOptionId: 'C',
        explanation: 'Damar tabaka (koroid), bol damarlı yapısıyla gözü besler ve içerdiği pigmentlerle ışığı emerek yansımayı önler.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Gözümüze rengini veren (mavi, yeşil, kahverengi), damar tabakanın ön kısmındaki yapıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Kornea' },
          { id: 'B', text: 'Retina' },
          { id: 'C', text: 'Göz merceği' },
          { id: 'D', text: 'İris' },
          { id: 'E', text: 'Sarı benek' }
        ],
        correctOptionId: 'D',
        explanation: 'İris, gözün renkli kısmıdır ve ortasında göz bebeği bulunur.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'İrisin ortasında bulunan ve ışığın miktarını ayarlamak için büyüyüp küçülen boşluğa ne denir?',
        options: [
          { id: 'A', text: 'Kör nokta' },
          { id: 'B', text: 'Sarı nokta' },
          { id: 'C', text: 'Göz bebeği (Pupilla)' },
          { id: 'D', text: 'Göz pınarı' },
          { id: 'E', text: 'Gözyaşı bezi' }
        ],
        correctOptionId: 'C',
        explanation: 'Göz bebeği siyah bir yapı değil, irisin ortasındaki deliktir. Işığın içeri girmesini sağlar.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Göz bebeğinin arkasında yer alan, ışığı İKİNCİ KEZ kırarak ağ tabakaya odaklayan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Göz kapağı' },
          { id: 'B', text: 'Göz merceği' },
          { id: 'C', text: 'Kirpik' },
          { id: 'D', text: 'Kaş' },
          { id: 'E', text: 'Sklera' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz merceği, esnek yapısıyla ışığı kırıp sarı noktaya odaklayan asıl yapıdır.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Göz merceği ile ağ tabaka (retina) arasındaki büyük boşluğu dolduran, göze şekil veren jölemsi sıvıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Gözyaşı' },
          { id: 'B', text: 'Tükürük' },
          { id: 'C', text: 'Camsı cisim' },
          { id: 'D', text: 'Kan' },
          { id: 'E', text: 'Lenf sıvısı' }
        ],
        correctOptionId: 'C',
        explanation: 'Camsı cisim, göz küresinin içini dolduran ve şeklini koruyan saydam, jölemsi maddedir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Fotoreseptörlerin (ışık algılayıcı hücrelerin) bulunduğu, gözün en içteki tabakasına ne denir?',
        options: [
          { id: 'A', text: 'Ağ tabaka (Retina)' },
          { id: 'B', text: 'Sert tabaka' },
          { id: 'C', text: 'Damar tabaka' },
          { id: 'D', text: 'İris' },
          { id: 'E', text: 'Kornea' }
        ],
        correctOptionId: 'A',
        explanation: 'Retina (ağ tabaka), görüntülerin düştüğü ve sinirlerin bulunduğu tabakadır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Göze dışarıdan gelen ışığın İLK KIRILDIĞI ve EN GÜÇLÜ kırılmanın yaşandığı yüzey neresidir?',
        options: [
          { id: 'A', text: 'Mercek' },
          { id: 'B', text: 'Kornea' },
          { id: 'C', text: 'Camsı cisim' },
          { id: 'D', text: 'İris' },
          { id: 'E', text: 'Retina' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık gözde sırasıyla kornea ve mercekte kırılır. İlk ve en büyük kırılma saydam tabakada (korneada) olur.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Karanlık (loş) bir ortama girdiğimizde daha fazla ışık alabilmek için iristeki kaslar kasılarak göz bebeğini nasıl değiştirir?',
        options: [
          { id: 'A', text: 'Göz bebeğini küçültür.' },
          { id: 'B', text: 'Göz bebeğini genişletir (büyütür).' },
          { id: 'C', text: 'Göz bebeğini tamamen kapatır.' },
          { id: 'D', text: 'Göz bebeğinin şeklini kare yapar.' },
          { id: 'E', text: 'Hiçbir değişiklik olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karanlıkta fazla ışık toplamak için göz bebeği büyür (Göz bebeği refleksi).'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Parlak bir ışık kaynağına (Güneşe veya fenere) baktığımızda göz bebeği refleks olarak ne yapar?',
        options: [
          { id: 'A', text: 'Genişler' },
          { id: 'B', text: 'Daralır (Küçülür)' },
          { id: 'C', text: 'Dışarı fırlar' },
          { id: 'D', text: 'Kızarır' },
          { id: 'E', text: 'Kanlanır' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşırı ışığın retinaya zarar vermesini önlemek için göz bebeği daralır.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Işık sırasıyla Gözün hangi kısımlarından geçerek retinaya (ağ tabakaya) ulaşır?',
        options: [
          { id: 'A', text: 'Retina → Mercek → Kornea' },
          { id: 'B', text: 'Kornea → Göz bebeği → Mercek → Camsı cisim' },
          { id: 'C', text: 'İris → Sklera → Koroid' },
          { id: 'D', text: 'Kör nokta → Sarı nokta' },
          { id: 'E', text: 'Mercek → Kornea → Göz bebeği' }
        ],
        correctOptionId: 'B',
        explanation: 'Işığın izlediği yol: Kornea (kırılır) → Ön oda/Göz bebeği (geçer) → Mercek (kırılır) → Camsı cisim (geçer) → Retina.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Gözyaşı, korneayı nemli tutar ve temizler. Gözyaşında mikropları öldüren enzim hangisidir?',
        options: [
          { id: 'A', text: 'Amilaz' },
          { id: 'B', text: 'Pepsin' },
          { id: 'C', text: 'Lizozim' },
          { id: 'D', text: 'Lipaz' },
          { id: 'E', text: 'Katalaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Lizozim enzimi bakteri hücre duvarını parçalayarak gözü enfeksiyonlardan korur.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Gözün kısımlarından hangisi göze sadece renk vermekle kalmaz, aynı zamanda ışık miktarını kontrol eden bir diyafram gibi çalışır?',
        options: [
          { id: 'A', text: 'Retina' },
          { id: 'B', text: 'İris' },
          { id: 'C', text: 'Kornea' },
          { id: 'D', text: 'Sklera' },
          { id: 'E', text: 'Kör nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'İris, düz kasları sayesinde ortasındaki göz bebeğini büyütüp küçülterek ışık miktarını ayarlar.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Göz merceğinde, ışığın bir noktada toplanarak odaklanmasını sağlayan özellik nedir?',
        options: [
          { id: 'A', text: 'Kaslardan oluşması' },
          { id: 'B', text: 'Saydam ve "ince kenarlı mercek" yapısında olması' },
          { id: 'C', text: 'Siyah renkli olması' },
          { id: 'D', text: 'Kemik yapılı olması' },
          { id: 'E', text: 'Hareketsiz olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz merceği canlı hücrelerden oluşan, saydam ve ince kenarlı (ışığı toplayan) bir biyolojik mercektir.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Retina, Reseptörler ve Uyum',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Ağ tabakada (Retinada) renkli görmeyi, netliği ve aydınlıkta görmeyi sağlayan reseptör çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Çubuk (Rod) hücreleri' },
          { id: 'B', text: 'Koni hücreleri' },
          { id: 'C', text: 'Tüy hücreleri' },
          { id: 'D', text: 'Mekanoreseptörler' },
          { id: 'E', text: 'Kemoreseptörler' }
        ],
        correctOptionId: 'B',
        explanation: 'Koni hücreleri yeterli ışıkta renkli ve keskin görmeyi sağlar.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Ağ tabakada karanlık veya loş ışıkta siyah-beyaz görmemizi sağlayan, ışığa çok duyarlı reseptörler hangileridir?',
        options: [
          { id: 'A', text: 'Koni hücreleri' },
          { id: 'B', text: 'Tat tomurcukları' },
          { id: 'C', text: 'Çubuk (Rod) hücreleri' },
          { id: 'D', text: 'Koku soğancığı' },
          { id: 'E', text: 'Otolitler' }
        ],
        correctOptionId: 'C',
        explanation: 'Çubuk hücreleri şekil ve hareket algısını sağlar, renk ayırt etmez.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Retinanın merkezinde yer alan, koni hücrelerinin çok yoğun olduğu ve GÖRÜNTÜNÜN EN NET oluştuğu çukur bölgeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Kör nokta' },
          { id: 'B', text: 'Sarı nokta (Fovea)' },
          { id: 'C', text: 'İris' },
          { id: 'D', text: 'Mercek' },
          { id: 'E', text: 'Göz bebeği' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı nokta (Sarı benek / Fovea), ışığın odaklandığı ve görme keskinliğinin en yüksek olduğu yerdir.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Görme sinirlerinin göz küresinden (retinadan) ÇIKTIĞI yere ne denir? (Bu bölgede hiç reseptör yoktur ve görüntü oluşmaz).',
        options: [
          { id: 'A', text: 'Sarı nokta' },
          { id: 'B', text: 'Camsı cisim' },
          { id: 'C', text: 'Kör nokta (Optik disk)' },
          { id: 'D', text: 'Kornea' },
          { id: 'E', text: 'Sklera' }
        ],
        correctOptionId: 'C',
        explanation: 'Kör noktada fotoreseptör (çubuk veya koni) bulunmaz, bu nedenle oraya düşen ışık algılanamaz.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Sağlıklı bir gözde, uzağa veya yakına bakıldığında görüntünün sürekli sarı noktaya düşebilmesi için göz merceğinin kalınlığını değiştirmesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Göz uyumu (Akomodasyon)' },
          { id: 'B', text: 'Göz kırpma' },
          { id: 'C', text: 'Gözyaşı salgısı' },
          { id: 'D', text: 'Miyopluk' },
          { id: 'E', text: 'Körlük' }
        ],
        correctOptionId: 'A',
        explanation: 'Göz uyumu, farklı uzaklıktaki cisimleri net görmek için merceğin şişkinleşip yassılaşmasıdır.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Çok yakındaki bir cisme (örneğin okuduğumuz kitaba) bakarken Göz Uyumu nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'Göz tamamen kapanır.' },
          { id: 'B', text: 'Mercek tamamen kaybolur.' },
          { id: 'C', text: 'Kirpiksi kaslar KASILIR ve mercek KALINLAŞIR (şişkinleşir).' },
          { id: 'D', text: 'Mercek incelir.' },
          { id: 'E', text: 'Kornea dökülür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yakına odaklanırken kirpiksi kaslar kasılır, asıcı bağlar gevşer ve mercek kalınlaşarak kırma gücünü artırır.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'İnsan gözünde renkli görmeyi sağlayan Koni hücreleri temel olarak hangi üç renge duyarlıdır?',
        options: [
          { id: 'A', text: 'Siyah, beyaz, gri' },
          { id: 'B', text: 'Kırmızı, Yeşil, Mavi' },
          { id: 'C', text: 'Sarı, mor, turuncu' },
          { id: 'D', text: 'Pembe, lacivert, kahverengi' },
          { id: 'E', text: 'Sadece kırmızı' }
        ],
        correctOptionId: 'B',
        explanation: 'Üç tip koni hücresi (Kırmızı, Yeşil, Mavi) sayesinde diğer tüm renkleri de karışım halinde algılarız.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Göz küresinin önden arkaya NORMALDEN DAHA UZUN olması sonucu ışığın retinanın (sarı noktanın) ÖNÜNE düşmesiyle oluşan GÖRME KUSURU hangisidir?',
        options: [
          { id: 'A', text: 'Miyop (Uzağı görememe)' },
          { id: 'B', text: 'Hipermetrop (Yakını görememe)' },
          { id: 'C', text: 'Astigmat' },
          { id: 'D', text: 'Renk körlüğü' },
          { id: 'E', text: 'Şaşılık' }
        ],
        correctOptionId: 'A',
        explanation: 'Miyoplukta göz uzundur, ışık erken odaklanır (retinanın önüne düşer). Kalın kenarlı mercekle düzeltilir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Miyop göz kusurunu düzeltmek ve görüntüyü tekrar sarı noktaya geriletmek için hangi tip mercek kullanılır?',
        options: [
          { id: 'A', text: 'İnce kenarlı mercek' },
          { id: 'B', text: 'Kalın kenarlı (ıraksak) mercek' },
          { id: 'C', text: 'Siyah cam' },
          { id: 'D', text: 'Büyüteç' },
          { id: 'E', text: 'Düz ayna' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalın kenarlı mercek ışığı dağıtarak odağı daha geriye (retinaya) taşır.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Göz küresinin önden arkaya NORMALDEN DAHA KISA olması nedeniyle ışığın retinanın ARKASINA odaklandığı ve kişinin YAKINI NET GÖREMEDİĞİ kusur hangisidir?',
        options: [
          { id: 'A', text: 'Miyop' },
          { id: 'B', text: 'Katarakt' },
          { id: 'C', text: 'Glokom' },
          { id: 'D', text: 'Hipermetrop' },
          { id: 'E', text: 'Astigmat' }
        ],
        correctOptionId: 'D',
        explanation: 'Hipermetroplukta göz kısadır, odak retinanın arkasında kalır. İnce kenarlı (yakınsak) mercekle düzeltilir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Kornea veya göz merceğindeki kavislerin pürüzlü/düzensiz olması sonucu ışığın gözde birden fazla noktaya odaklanmasına (bulanık ve yamuk görmeye) ne denir?',
        options: [
          { id: 'A', text: 'Astigmatizm' },
          { id: 'B', text: 'Körlük' },
          { id: 'C', text: 'Şaşılık' },
          { id: 'D', text: 'Miyop' },
          { id: 'E', text: 'Presbiyopi' }
        ],
        correctOptionId: 'A',
        explanation: 'Astigmat, yüzey eğriliğinin bozulması sonucu görüntülerin birden fazla yere düşmesidir (Silindirik mercekle düzeltilir).'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'İki gözden çıkan görme sinirlerinin, beynin oksipital lobuna gitmeden önce beyinde ÇAPRAZ YAPTIĞI bölgeye ne denir?',
        options: [
          { id: 'A', text: 'Optik Kiazma' },
          { id: 'B', text: 'Omurilik soğanı' },
          { id: 'C', text: 'Beyincik' },
          { id: 'D', text: 'Kör nokta' },
          { id: 'E', text: 'Talamus' }
        ],
        correctOptionId: 'A',
        explanation: 'Optik kiazma, her iki gözün sağ/sol görme alanından gelen bilgilerin ilgili beyin yarımkürelerine yönlendirildiği çaprazdır.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Yaşlılığa bağlı olarak göz merceğinin esnekliğini kaybetmesi sonucu yakına uyum yapamamasına (yakını görememeye) ne ad verilir?',
        options: [
          { id: 'A', text: 'Astigmat' },
          { id: 'B', text: 'Miyop' },
          { id: 'C', text: 'Presbiyopi' },
          { id: 'D', text: 'Katarakt' },
          { id: 'E', text: 'Renk körlüğü' }
        ],
        correctOptionId: 'C',
        explanation: 'Presbiyopi (yaşlı göz), mercek elastikiyetinin azalmasıyla ortaya çıkan yakın görme sorunudur (ince kenarlı mercekle düzeltilir).'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Retinadaki görüntünün beynin görme merkezi tarafından düzeltilip anlamlandırıldığı lob hangisidir?',
        options: [
          { id: 'A', text: 'Şakak (Temporal) lob' },
          { id: 'B', text: 'Alın (Frontal) lob' },
          { id: 'C', text: 'Arka kafa (Oksipital) lob' },
          { id: 'D', text: 'Yan (Parietal) lob' },
          { id: 'E', text: 'Beyincik' }
        ],
        correctOptionId: 'C',
        explanation: 'Görme merkezi beynin arka tarafındaki oksipital lobdadır.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Göz merceğinin yaşlanma veya şeker hastalığı gibi nedenlerle saydamlığını kaybederek matlaşmasına (buzlu cam gibi olmasına) ne hastalık denir?',
        options: [
          { id: 'A', text: 'Katarakt' },
          { id: 'B', text: 'Glokom' },
          { id: 'C', text: 'Miyop' },
          { id: 'D', text: 'Şaşılık' },
          { id: 'E', text: 'Hipermetrop' }
        ],
        correctOptionId: 'A',
        explanation: 'Katarakt, merceğin içinin protein bozulması sonucu bulanıklaşmasıdır.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Kulak ve İşitme Yolu',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Kulağın yapısı temel olarak hangi üç ana bölümden oluşur?',
        options: [
          { id: 'A', text: 'Üst kulak, Orta kulak, Alt kulak' },
          { id: 'B', text: 'Dış kulak, Orta kulak, İç kulak' },
          { id: 'C', text: 'Sağ kulak, Sol kulak, Arka kulak' },
          { id: 'D', text: 'Ön kulak, Merkez kulak, Arka kulak' },
          { id: 'E', text: 'Kepçe, Zar, Sıvı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kulak anatomik olarak Dış, Orta ve İç kulak olmak üzere 3 kısımdır.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Dış kulağın en belirgin yapısı olan ve havadaki ses dalgalarını toplayarak dış kulak yoluna yönlendiren kıkırdak yapı hangisidir?',
        options: [
          { id: 'A', text: 'Kulak zarı' },
          { id: 'B', text: 'Kulak kepçesi' },
          { id: 'C', text: 'Östaki borusu' },
          { id: 'D', text: 'Salyangoz' },
          { id: 'E', text: 'Çekiç kemiği' }
        ],
        correctOptionId: 'B',
        explanation: 'Kulak kepçesi (sadece memelilerde bulunur) sesi radar gibi toplayıp kulağa yönlendirir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Dış kulak yolu ile Orta kulak arasında bulunan, gelen ses dalgalarıyla titreşerek mekanik hareketi başlatan ince perde yapı nedir?',
        options: [
          { id: 'A', text: 'Kulak kepçesi' },
          { id: 'B', text: 'Yarım daire kanalları' },
          { id: 'C', text: 'Kulak zarı (Timpanik zar)' },
          { id: 'D', text: 'Oval pencere' },
          { id: 'E', text: 'Korti organı' }
        ],
        correctOptionId: 'C',
        explanation: 'Kulak zarı, dış dünyadan gelen havadaki ses dalgasını ilk kez titreşime (mekanik harekete) çeviren zardır.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Orta kulakta bulunan ve kulak zarındaki titreşimi İÇ KULAĞA (katlayarak) ileten üç küçük kemiğin isimleri sırasıyla nedir?',
        options: [
          { id: 'A', text: 'Tibia, Fibula, Femur' },
          { id: 'B', text: 'Çekiç, Örs, Üzengi' },
          { id: 'C', text: 'Atlas, Eksen, Omur' },
          { id: 'D', text: 'Kornea, Mercek, İris' },
          { id: 'E', text: 'Radius, Ulna, Humerus' }
        ],
        correctOptionId: 'B',
        explanation: 'Çekiç, örs, üzengi vücudumuzdaki en küçük kemiklerdir ve sesin basıncını artırırlar.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Orta kulaktan boğaza (yutağa) açılan, kulak zarının iki tarafındaki HAVA BASINCINI dengeleyerek zarın patlamasını önleyen kanalın adı nedir?',
        options: [
          { id: 'A', text: 'Yarım daire kanalı' },
          { id: 'B', text: 'Dış kulak yolu' },
          { id: 'C', text: 'Kohlea (Salyangoz) kanalı' },
          { id: 'D', text: 'Östaki borusu' },
          { id: 'E', text: 'Görme siniri' }
        ],
        correctOptionId: 'D',
        explanation: 'Östaki borusu, basınç (örneğin uçakta) değiştiğinde yutkunarak açılır ve orta kulağa hava alarak basıncı eşitler. (İşitme işlevi yoktur).'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'İç kulakta SESİ ALGILAYAN ve şekli kabuklu böceğe benzeyen sarmal yapıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Kepçe' },
          { id: 'B', text: 'Östaki' },
          { id: 'C', text: 'Kohlea (Salyangoz)' },
          { id: 'D', text: 'Çekiç' },
          { id: 'E', text: 'Tulumcuk' }
        ],
        correctOptionId: 'C',
        explanation: 'İşitmenin asıl gerçekleştiği içi sıvı dolu kanallar sistemi Kohlea (Salyangoz) dır.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Üzengi kemiğinin, iç kulaktaki (Salyangozdaki) sıvıyı titreştirmek için vurduğu GİRİŞ ZARINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Kulak zarı' },
          { id: 'B', text: 'Oval pencere' },
          { id: 'C', text: 'Kör nokta' },
          { id: 'D', text: 'Göz bebeği' },
          { id: 'E', text: 'Örs' }
        ],
        correctOptionId: 'B',
        explanation: 'Üzengi kemiği Oval pencereye yapışıktır; titreştiğinde içeriye sıvı dalgaları gönderir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Salyangozun (Kohleanın) içinde bulunan, işitme sinirlerini ve tüylü hücreleri (Mekanoreseptörleri) taşıyan ASIL İŞİTME ORGANININ adı nedir?',
        options: [
          { id: 'A', text: 'Korti organı' },
          { id: 'B', text: 'Otolit' },
          { id: 'C', text: 'Kornea' },
          { id: 'D', text: 'Göz merceği' },
          { id: 'E', text: 'Tat tomurcuğu' }
        ],
        correctOptionId: 'A',
        explanation: 'Korti organı, mekanik sıvı dalgasını algılayıp elektrik sinyaline (impuls) çeviren işitme merkezidir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'İç kulağın, işitme ile değil DENGE İLE GÖREVLİ olan bölümleri hangileridir?',
        options: [
          { id: 'A', text: 'Kulak kepçesi ve Dış kulak yolu' },
          { id: 'B', text: 'Çekiç, Örs ve Üzengi' },
          { id: 'C', text: 'Salyangoz ve Korti organı' },
          { id: 'D', text: 'Yarım daire kanalları, Tulumcuk ve Kesecik' },
          { id: 'E', text: 'Östaki borusu ve Kulak zarı' }
        ],
        correctOptionId: 'D',
        explanation: 'İç kulak iki iş yapar: İşitme (Salyangoz) ve Denge (Yarım daire kanalları, tulumcuk, kesecik).'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'İşitme duyusu, beyin kabuğunda (kortekste) hangi lobda algılanır?',
        options: [
          { id: 'A', text: 'Oksipital (Arka) lob' },
          { id: 'B', text: 'Temporal (Şakak) lob' },
          { id: 'C', text: 'Frontal (Alın) lob' },
          { id: 'D', text: 'Omurilik' },
          { id: 'E', text: 'Beyincik' }
        ],
        correctOptionId: 'B',
        explanation: 'İşitme merkezi Temporal (Şakak) lobdadır.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Ses dalgaları sırasıyla hangi kısımları titreştirerek Korti organına ulaşır?',
        options: [
          { id: 'A', text: 'Zar → Kemikçikler → Oval pencere → Kohlea sıvıları' },
          { id: 'B', text: 'Kepçe → Östaki → Çekiç → Mercek' },
          { id: 'C', text: 'Oval pencere → Zar → Sıvı' },
          { id: 'D', text: 'Östaki → Zar → Yarım daire kanalı' },
          { id: 'E', text: 'Sıvı → Zar → Korti' }
        ],
        correctOptionId: 'A',
        explanation: 'Havadan gelen ses dış kulak zarına, oradan orta kulak kemiklerine, oradan oval pencereyle iç kulak sıvılarına geçer.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Orta kulak boşluğu normal şartlarda ne ile doludur?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Kan' },
          { id: 'C', text: 'Hava' },
          { id: 'D', text: 'Endolenf sıvısı' },
          { id: 'E', text: 'Perilenf sıvısı' }
        ],
        correctOptionId: 'C',
        explanation: 'Orta kulak dışarıya (boğaza) Östaki borusu ile açıldığı için içi hava ile doludur. İltihap olduğunda sıvı dolar ve işitme azalır.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'İç kulağın içinde bulunan, zarların arasındaki boşlukları dolduran ve ses titreşimlerini dalgalar halinde ileten maddenin fiziksel hali nedir?',
        options: [
          { id: 'A', text: 'Gaz (Hava)' },
          { id: 'B', text: 'Katı (Kemik)' },
          { id: 'C', text: 'Sıvı (Endolenf / Perilenf)' },
          { id: 'D', text: 'Plazma' },
          { id: 'E', text: 'Vakum (Boşluk)' }
        ],
        correctOptionId: 'C',
        explanation: 'İç kulak sıvı dolu (su balonu gibi) tüplerden oluşur.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Salyangozdaki mekanoreseptör hücrelerin (Tüylü hücrelerin) tepesinde, onların sürtünerek eğilip uyarılmasını sağlayan "Çatı zarı" hangisidir?',
        options: [
          { id: 'A', text: 'Tektoryal zar' },
          { id: 'B', text: 'Kulak zarı' },
          { id: 'C', text: 'Kornea' },
          { id: 'D', text: 'Otolit' },
          { id: 'E', text: 'Retina' }
        ],
        correctOptionId: 'A',
        explanation: 'Tektoryal (Çatı) zar sabittir. Sıvı dalgalandıkça alttaki tüylü hücreler zıplayıp bu çatıya çarparak uyarılır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Kulak sadece işitmekle kalmaz, aynı zamanda başımızın pozisyonunu ve dönme hareketlerini algılar. Kulağın içindeki bu bilgiler beynin HANGİ BÖLGESİNE iletilerek VÜCUT DENGESİ sağlanır?',
        options: [
          { id: 'A', text: 'Beyincik' },
          { id: 'B', text: 'Omurilik soğanı' },
          { id: 'C', text: 'Hipofiz bezi' },
          { id: 'D', text: 'Mide' },
          { id: 'E', text: 'Alın lobu' }
        ],
        correctOptionId: 'A',
        explanation: 'Beyincik (Cerebellum) iç kulaktan ve gözlerden aldığı bilgilerle kas koordinasyonunu ve dengeyi ayarlar.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Koku, Tat ve Deri Duyuları',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Burun boşluğunun üst kısmında yer alan, koku alma reseptörlerinin bulunduğu bölgeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Sarı benek' },
          { id: 'B', text: 'Sarı bölge' },
          { id: 'C', text: 'Kör nokta' },
          { id: 'D', text: 'Korti organı' },
          { id: 'E', text: 'Otolit' }
        ],
        correctOptionId: 'B',
        explanation: 'Burun tavanındaki koku reseptörlerinin yoğunlaştığı yere sarı bölge denir (Gözdeki sarı benek ile karıştırılmamalıdır).'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Koku reseptörlerinin uyarılabilmesi için, havadaki koku moleküllerinin HANGİ SIVIDA çözünmesi ŞARTTIR?',
        options: [
          { id: 'A', text: 'Kan' },
          { id: 'B', text: 'Gözyaşı' },
          { id: 'C', text: 'Mukus' },
          { id: 'D', text: 'Mide özsuyu' },
          { id: 'E', text: 'Ter' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemoreseptörler sulu ortamda çalışır. Koku molekülleri burnun içindeki sümüksü mukus tabakasında eriyerek reseptörleri tetikler.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Dilde tat almayı sağlayan, üzerinde tat reseptörlerini taşıyan kabarcık şeklindeki yapılara ne denir?',
        options: [
          { id: 'A', text: 'Papilla (Tat tomurcuğu)' },
          { id: 'B', text: 'Otolit' },
          { id: 'C', text: 'İris' },
          { id: 'D', text: 'Koni' },
          { id: 'E', text: 'Retina' }
        ],
        correctOptionId: 'A',
        explanation: 'Dilin üzerindeki pütürlü yapılar papillalardır; bunların içinde tat tomurcukları (reseptörler) bulunur.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Tat tomurcuklarının uyarılabilmesi (tat alabilmemiz) için, yediğimiz besinlerin HANGİ SIVIDA çözünmesi GEREKİR?',
        options: [
          { id: 'A', text: 'Mide asidinde' },
          { id: 'B', text: 'Tükürükte' },
          { id: 'C', text: 'Gözyaşında' },
          { id: 'D', text: 'Terde' },
          { id: 'E', text: 'Kan plazmasında' }
        ],
        correctOptionId: 'B',
        explanation: 'Tıpkı kokunun mukusta çözünmesi gibi, tat moleküllerinin de tükürük sıvısında erimesi şarttır.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Dilimizde temel olarak algılanan (kabul gören) 5 tat hangisidir?',
        options: [
          { id: 'A', text: 'Tatlı, Acı, Baharatlı, Ekşi, Sıcak' },
          { id: 'B', text: 'Tatlı, Tuzlu, Ekşi, Acı, Umami' },
          { id: 'C', text: 'Ekşi, Tuzlu, Soğuk, Umami, Sert' },
          { id: 'D', text: 'Tuzlu, Tatlı, Metalik, Acı, Ekşi' },
          { id: 'E', text: 'Biberli, Tatlı, Naneli, Tuzlu, Ekşi' }
        ],
        correctOptionId: 'B',
        explanation: 'Baharat veya nane tat değil dokunma/sıcaklık hissidir. Gerçek tatlar: Tatlı, Tuzlu, Ekşi, Acı ve Umami (Lezzetli/Etli). '
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Tatlı, tuzlu, ekşi veya acı bir yiyeceği ağzımıza aldığımızda, BU TATLARIN dilin sadece belirli bir bölgesinden Mİ (örn: dilin ucu sadece tatlı mı) algılandığı, yoksa her yerinden Mİ algılandığı günümüzde nasıl bilinmektedir?',
        options: [
          { id: 'A', text: 'Sadece dilin ucundan algılanır.' },
          { id: 'B', text: 'Sadece dilin arkasından algılanır.' },
          { id: 'C', text: 'Her tat tomurcuğu tüm tatları algılayabilir; (Tat haritası yanlıştır, dilin her yeri her tadı alır).' },
          { id: 'D', text: 'Sadece sağ taraf tuzlu alır.' },
          { id: 'E', text: 'Sadece sol taraf ekşi alır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eski "Tat Haritası" efsanesi yanlıştır. Dilin her bölgesindeki papillalar tüm tatları ayırt edebilir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Nezle olup burnumuz tıkandığında, yediğimiz yemeğin "TADINI (Lezzetini)" neden tam olarak ALAMAYIZ?',
        options: [
          { id: 'A', text: 'Tükürüğümüz bittiği için' },
          { id: 'B', text: 'Tat ve Koku duyuları beyinde BİRLİKTE değerlendirildiği (Lezzet oluşturduğu) için' },
          { id: 'C', text: 'Tat tomurcukları hastalıktan öldüğü için' },
          { id: 'D', text: 'Burnumuz ağzımızı kapattığı için' },
          { id: 'E', text: 'Dişlerimiz çalışmadığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Yemeğin lezzeti (Aroması) büyük oranda KOKU duyusuna bağlıdır. Koku olmayınca sadece tuzlu/tatlı gibi kaba hisler kalır.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Derimiz dıştan içe doğru hangi iki ana tabakadan oluşur?',
        options: [
          { id: 'A', text: 'Sklera ve Kornea' },
          { id: 'B', text: 'Epidermis (Üst deri) ve Dermis (Alt deri)' },
          { id: 'C', text: 'Talamus ve Hipotalamus' },
          { id: 'D', text: 'Koroid ve Retina' },
          { id: 'E', text: 'Kas ve Kemik' }
        ],
        correctOptionId: 'B',
        explanation: 'Deri (cutis), hücrelerin yenilendiği Epidermis ve damar/sinirlerin bulunduğu Dermis tabakalarından oluşur.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Üst derinin (Epidermis) EN DIŞINDA bulunan, ölü hücrelerden oluşan ve deriyi fiziksel etkilere karşı koruyan cansız tabakaya ne denir?',
        options: [
          { id: 'A', text: 'Dermis' },
          { id: 'B', text: 'Korun tabakası' },
          { id: 'C', text: 'Malpighi tabakası' },
          { id: 'D', text: 'Ter bezi' },
          { id: 'E', text: 'Kıl kökü' }
        ],
        correctOptionId: 'B',
        explanation: 'Korun (boynuzsu) tabaka ölü hücrelerden oluşur; kepek olarak dökülen kısımdır.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Üst deride bulunan ve deriye RENGİNİ (esmerlik, sarışınlık vb.) veren "Melanin" pigmentini üreten tabaka hangisidir?',
        options: [
          { id: 'A', text: 'Korun tabakası' },
          { id: 'B', text: 'Malpighi tabakası' },
          { id: 'C', text: 'Yağ bezi' },
          { id: 'D', text: 'Kan damarı' },
          { id: 'E', text: 'Tırnak' }
        ],
        correctOptionId: 'B',
        explanation: 'Malpighi tabakası canlı hücrelerden oluşur ve melanositleriyle deriye (ve güneşe karşı korumak için) renk verir.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Kan damarları, sinir uçları, kıl kökleri, ter ve yağ bezleri derinin HANGİ TABAKASINDA (katmanında) yer alır?',
        options: [
          { id: 'A', text: 'Epidermis (Üst deri)' },
          { id: 'B', text: 'Dermis (Alt deri)' },
          { id: 'C', text: 'Korun tabakası' },
          { id: 'D', text: 'Sklera' },
          { id: 'E', text: 'Kemik zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Üst deri (Epidermis) kan damarı taşımaz. Tüm canlılık destek sistemleri (damar, sinir, bez) Dermis (Alt deri) içindedir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Deride; sıcaklık, soğukluk, dokunma, basınç ve ağrı gibi hisleri algılayan yapılara genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Koni hücreleri' },
          { id: 'B', text: 'Duyu Reseptörleri' },
          { id: 'C', text: 'Kılcal damarlar' },
          { id: 'D', text: 'Yağ bezleri' },
          { id: 'E', text: 'Melanositler' }
        ],
        correctOptionId: 'B',
        explanation: 'Dermis tabakasında farklı fiziki etkileri algılayan özel kapsüllü veya serbest duyu reseptörleri (sinir uçları) bulunur.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Bütün duyu reseptörlerinin (göz, kulak, deri) BEYNE ilettiği elektriksel sinyallere ne ad verilir?',
        options: [
          { id: 'A', text: 'Hormon' },
          { id: 'B', text: 'İmpuls (Aksiyon potansiyeli)' },
          { id: 'C', text: 'Enzim' },
          { id: 'D', text: 'Antikor' },
          { id: 'E', text: 'ATP' }
        ],
        correctOptionId: 'B',
        explanation: 'Reseptör, aldığı fiziksel/kimyasal enerjiyi sinir hücresi üzerinde akan elektriksel "İmpuls"a çevirir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Deri, duyu organı olmasının yanı sıra, "Terleme" yoluyla Vücudun HANGİ SİSTEMİNE yardımcı olur?',
        options: [
          { id: 'A', text: 'Sindirim sistemi' },
          { id: 'B', text: 'Boşaltım (ve Isı Düzenleme) sistemi' },
          { id: 'C', text: 'Destek ve Hareket sistemi' },
          { id: 'D', text: 'Solunum sistemi' },
          { id: 'E', text: 'Üreme sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Ter ile hem su/tuz (boşaltım) atılır, hem de vücut serinletilerek (homeostazi) vücut sıcaklığı düzenlenir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Güneş ışığı (UV) etkisiyle derimizde hangi VİTAMİNİN ön maddesi aktifleştirilerek sentezlenir?',
        options: [
          { id: 'A', text: 'A vitamini' },
          { id: 'B', text: 'B vitamini' },
          { id: 'C', text: 'C vitamini' },
          { id: 'D', text: 'D vitamini' },
          { id: 'E', text: 'K vitamini' }
        ],
        correctOptionId: 'D',
        explanation: 'Deri aynı zamanda D vitamini sentezleyen bir organdır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Göz Hastalıkları ve Fizyolojisi',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Bir göz doktoru hastasına "Uzağı iyi göremiyorsun, göz küren normalden uzun (yatay eksende) ve ışık retinanın önüne düşüyor" derse, bu hasta hangi kusura sahiptir?',
        options: [
          { id: 'A', text: 'Hipermetrop' },
          { id: 'B', text: 'Astigmat' },
          { id: 'C', text: 'Miyop' },
          { id: 'D', text: 'Katarakt' },
          { id: 'E', text: 'Renk Körlüğü' }
        ],
        correctOptionId: 'C',
        explanation: 'Gözün önden arkaya çapının uzun olması, görüntünün retinaya varmadan önde (havada) odaklanmasına neden olur (Miyop).'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Hipermetrop bir hastanın gözüne takılan İNCE KENARLI (Yakınsak) mercekli gözlüğün Fiziksel Amacı nedir?',
        options: [
          { id: 'A', text: 'Işınları dağıtarak odağı öne çekmek' },
          { id: 'B', text: 'Gözün arkasına düşen ışınları DAHA ERKEN toplayıp odak noktasını SARI NOKTAYA (Öne) çekmek' },
          { id: 'C', text: 'Renkleri düzeltmek' },
          { id: 'D', text: 'Işığı tamamen kesmek' },
          { id: 'E', text: 'Siyah beyaz göstermek' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipermetropta göz kısadır, odak arkada kalır. İnce kenarlı büyüteç ışığı toplayarak odağı öne (retina üzerine) getirir.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Yaşlı bir hastanın doktora gidip "Yakındaki gazeteyi okuyamıyorum, kollarımla uzaklaştırmam gerekiyor" demesi ve gözlerinde bir hastalık olmamasına rağmen merceğinin ESNEKLİĞİNİ kaybetmiş olması, hangi durumu tanımlar?',
        options: [
          { id: 'A', text: 'Presbiyopi' },
          { id: 'B', text: 'Miyopi' },
          { id: 'C', text: 'Astigmatizm' },
          { id: 'D', text: 'Şaşılık' },
          { id: 'E', text: 'Gece körlüğü' }
        ],
        correctOptionId: 'A',
        explanation: 'Yaşlılığa bağlı mercek sertleşmesi nedeniyle yakına odaklanamama durumuna Presbiyopi denir.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Gözün Camsı cisim sıvısının veya ön odasındaki sıvının basıncının anormal artarak görme sinirlerini ezmesi ve "Göz Tansiyonu" olarak bilinen hastalığın adı nedir?',
        options: [
          { id: 'A', text: 'Katarakt' },
          { id: 'B', text: 'Glokom' },
          { id: 'C', text: 'Renk körlüğü' },
          { id: 'D', text: 'Astigmat' },
          { id: 'E', text: 'Miyop' }
        ],
        correctOptionId: 'B',
        explanation: 'Glokom, göz sıvılarının basınç yaparak optik sinirlere hasar vermesi ve tedavi edilmezse körlük yapmasıdır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Halk arasında "Gözün saydamlığını kaybedip buzlu cama dönüşmesi" olarak bilinen, ameliyatla matlaşan göz merceğinin çıkarılıp suni mercek takıldığı hastalık hangisidir?',
        options: [
          { id: 'A', text: 'Glokom' },
          { id: 'B', text: 'Katarakt' },
          { id: 'C', text: 'Hipermetrop' },
          { id: 'D', text: 'Miyop' },
          { id: 'E', text: 'Şaşılık' }
        ],
        correctOptionId: 'B',
        explanation: 'Katarakt, mercek içindeki proteinlerin bozularak opak (mat) hale gelmesidir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Gözdeki her bir Kon hücresi (Kırmızı, Yeşil, Mavi) genetik bir kodla üretilir. Eğer Yeşil koni hücrelerini üreten gen kusurluysa (X kromozomu üzerinde), hastada HANGİ KALITSAL hastalık ortaya çıkar?',
        options: [
          { id: 'A', text: 'Gece körlüğü' },
          { id: 'B', text: 'Daltonizm (Kırmızı-Yeşil Renk Körlüğü)' },
          { id: 'C', text: 'Tam körlük' },
          { id: 'D', text: 'Glokom' },
          { id: 'E', text: 'Astigmat' }
        ],
        correctOptionId: 'B',
        explanation: 'Kon hücrelerinden bir veya birkaçının genetik olarak eksik olması, renklerin ayırt edilememesine (Renk körlüğüne) neden olur.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Karanlıkta veya loş ışıkta görmemizi sağlayan ÇUBUK hücrelerinin çalışabilmesi için "Rodopsin" denilen bir protein gereklidir. Rodopsin yapımında kullanılan ve eksikliğinde GECE KÖRLÜĞÜ (Tavuk Karası) görülen VİTAMİN hangisidir?',
        options: [
          { id: 'A', text: 'A Vitamini' },
          { id: 'B', text: 'B Vitamini' },
          { id: 'C', text: 'C Vitamini' },
          { id: 'D', text: 'D Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'A',
        explanation: 'A vitamini rodopsinin hammaddesidir. Eksikliğinde rodopsin üretilemez ve gece karanlıkta göz göremez hale gelir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Göz küresini sağa-sola, yukarı-aşağı hareket ettiren GÖZ KASLARININ uzunluklarının birbirinden FARKLI olması veya uyumsuz kasılması sonucu, gözlerin ikisinin aynı noktaya bakamaması kusuruna ne denir?',
        options: [
          { id: 'A', text: 'Presbiyopi' },
          { id: 'B', text: 'Astigmat' },
          { id: 'C', text: 'Şaşılık' },
          { id: 'D', text: 'Glokom' },
          { id: 'E', text: 'Katarakt' }
        ],
        correctOptionId: 'C',
        explanation: 'Şaşılık, göz kaslarının asimetrik çekmesidir; ameliyatla kasların boyu ayarlanarak düzeltilebilir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Gözümüzün ÖNÜNDEKİ saydam korneanın hava ile temasını kesen, onu nemli ve kaygan tutarak kurumasını (ve körleşmesini) engelleyen ana SIVI nedir?',
        options: [
          { id: 'A', text: 'Kan' },
          { id: 'B', text: 'Gözyaşı (Gözyaşı bezleri)' },
          { id: 'C', text: 'Tükürük' },
          { id: 'D', text: 'Camsı cisim' },
          { id: 'E', text: 'Ön oda sıvısı' }
        ],
        correctOptionId: 'B',
        explanation: 'Gözyaşı, korneanın üzerini kaplayarak hem kurumasını engeller, hem besler, hem de sürtünmeyi önler.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Sağ ve Sol Gözümüzden çıkan Optik Sinirler (Görme Sinirleri), beynin Görme Merkezine (Oksipital Lob) gitmeden hemen önce nerede ÇAPRAZ yapar?',
        options: [
          { id: 'A', text: 'Omurilikte' },
          { id: 'B', text: 'Optik Kiazma bölgesinde' },
          { id: 'C', text: 'Beyincikte' },
          { id: 'D', text: 'Göz bebeğinde' },
          { id: 'E', text: 'Camsı cisimde' }
        ],
        correctOptionId: 'B',
        explanation: 'Optik kiazmada, sağ görme alanının bilgisi sol loba, sol görme alanının bilgisi sağ loba çaprazlanır.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Bir fotoğrafa veya telefon ekranına ÇOK YAKINDAN uzun süre baktığımızda gözümüz yorulur (Göz ağrısı çekeriz). Bu yorgunluğun ANATOMİK KAS sebebi nedir?',
        options: [
          { id: 'A', text: 'İris kaslarının yırtılması' },
          { id: 'B', text: 'Göz küresi kaslarının kopması' },
          { id: 'C', text: 'Yakına odaklanmak için merceği şişkin tutan KİRPİKSİ KASLARIN sürekli kasılı kalmaktan yorulması' },
          { id: 'D', text: 'Korneanın incelmesi' },
          { id: 'E', text: 'Retinanın kanaması' }
        ],
        correctOptionId: 'C',
        explanation: 'Uzağa bakarken kirpiksi kaslar gevşektir (dinlenme hali). Yakına bakarken kasılırlar. Uzun süre kasan kas yorulur (Akomodasyon yorgunluğu).'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Güneş gözlüğü takmanın (UV filtreli) Katarakt ve Sarı Nokta hastalığından KORUMA FİZİYOLOJİSİ nasıldır?',
        options: [
          { id: 'A', text: 'Gözü soğuktan korur.' },
          { id: 'B', text: 'Gözü tozdan korur.' },
          { id: 'C', text: 'Yüksek enerjili Mor Ötesi (UV) ışınların kornea ve mercek proteinlerini BOZMASINI (yakmasını) ve retinaya zarar vermesini engeller.' },
          { id: 'D', text: 'Renk körlüğünü düzeltir.' },
          { id: 'E', text: 'Şaşılığı engeller.' }
        ],
        correctOptionId: 'C',
        explanation: 'UV (Ultraviyole) ışınlar proteinlerin yapısını bozan radyasyondur. Kaliteli güneş gözlüğü UV\'yi bloke ederek mercek ve retinayı yaşlanmaktan (katarakt) korur.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Retinanın merkezindeki Sarı Benek (Fovea) bölgesinde GÖRÜNTÜNÜN (Görme keskinliğinin) çok net olmasının sebebi nedir?',
        options: [
          { id: 'A', text: 'Orada mercek bulunması' },
          { id: 'B', text: 'Orada yüksek çözünürlüklü ve renkli görmeyi sağlayan KONİ HÜCRELERİNİN çok yoğun toplanmış olması' },
          { id: 'C', text: 'Orada hiç reseptör bulunmaması' },
          { id: 'D', text: 'Oranın kanla dolu olması' },
          { id: 'E', text: 'Sarı rengin ışığı çekmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Fovea (Sarı benek) sadece koni hücrelerinden oluşur, bu yüzden baktığımız nesnenin merkezini "HD" kalitesinde net görürüz.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Göze dışarıdan gelen bir yabancı cisim veya ani bir rüzgarda gözümüz İSTEMSİZCE KAPANIR (Göz kırpma refleksi). Bu refleksi KONTROL EDEN sistem aşağıdakilerden hangisine aittir?',
        options: [
          { id: 'A', text: 'Kör nokta' },
          { id: 'B', text: 'Sindirim sistemi' },
          { id: 'C', text: 'Otonom ve Refleks merkezleri (Orta beyin / Beyin sapı)' },
          { id: 'D', text: 'Hipofiz bezi' },
          { id: 'E', text: 'Omuriliğin en alt kısmı' }
        ],
        correctOptionId: 'C',
        explanation: 'Göz kırpma, korneayı koruyan ve gözyaşını yayan hızlı bir beyin sapı refleksidir.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Aydınlık bir ortamdan, çok karanlık bir sinema salonuna girdiğimizde İLK 1-2 DAKİKA hiçbir şey GÖREMEYİZ. Sonra etraf yavaş yavaş "Aydınlanır" (seçmeye başlarız). Bu gecikmenin biyolojik sebebi nedir?',
        options: [
          { id: 'A', text: 'Göz bebeklerimizin küçülmesi' },
          { id: 'B', text: 'Karanlıkta çalışacak olan ÇUBUK HÜCRELERİNDEKİ (Rodopsin) proteinin yeniden sentezlenmesinin ZAMAN alması (Karanlığa adaptasyon)' },
          { id: 'C', text: 'Merceğin buğulanması' },
          { id: 'D', text: 'Korneanın kuruması' },
          { id: 'E', text: 'Göz tansiyonunun düşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Işıkta çubuklar iptal olur (rodopsin parçalanır). Karanlığa girince A vitamini yardımıyla rodopsin tekrar yapılır (bu birkaç dakika sürer) ve gece görüşü açılır.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Kulak ve Denge Hastalıkları',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Kulağımızın yapısında, sesin dışarıdan içeriye doğru izlediği yol HANGİ SEÇENEKTE doğru SIRALANMIŞTIR?',
        options: [
          { id: 'A', text: 'Kulak Zarı → Kulak Kepçesi → Salyangoz → Örs' },
          { id: 'B', text: 'Kulak Kepçesi → Dış Kulak Yolu → Kulak Zarı → Çekiç/Örs/Üzengi → Oval Pencere → Salyangoz (Korti)' },
          { id: 'C', text: 'Çekiç → Östaki Borusu → Yarım Daire Kanalları → Zar' },
          { id: 'D', text: 'Korti Organı → Oval Pencere → Kepçe → Zar' },
          { id: 'E', text: 'Salyangoz → Zar → Kepçe' }
        ],
        correctOptionId: 'B',
        explanation: 'Ses titreşimleri hava yolundan kepçeyle toplanır, zarı titretir, kemiklerden geçip sıvı dalgasına dönüşerek salyangozdaki Korti organını uyarır.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Çocuklarda sık görülen "Orta Kulak İltihabı"nda, bakteriler orta kulağa GENELLİKLE nereden / hangi yolla ulaşır?',
        options: [
          { id: 'A', text: 'Kulak zarını delerek dışarıdan' },
          { id: 'B', text: 'Kan yoluyla ayaktan' },
          { id: 'C', text: 'Boğazdaki (Yutaktaki) enfeksiyonların ÖSTAKİ BORUSU yoluyla yukarı çıkmasıyla' },
          { id: 'D', text: 'Salyangozdan dışarı sızarak' },
          { id: 'E', text: 'Beyinden aşağı inerek' }
        ],
        correctOptionId: 'C',
        explanation: 'Östaki borusu boğaz ile orta kulağı birleştirir. Bademcik/boğaz iltihapları bu tüpten kulağa sızarak enfeksiyon yapar.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Eğer bir kişinin Orta Kulaktaki kemikçikleri (Örs, Üzengi) kireçlenerek BİRBİRİNE KAYNARSA (Hareketsizleşirse), seste nasıl bir sorun ortaya çıkar?',
        options: [
          { id: 'A', text: 'Sesler renkli görülür.' },
          { id: 'B', text: 'Ses titreşimleri Salyangoza GÜÇLÜ İLETİLEMEZ ve İletim Tipi İşitme Kaybı (Sağırlık) oluşur.' },
          { id: 'C', text: 'Kişi sesleri daha yüksek duyar.' },
          { id: 'D', text: 'Beyin sesi reddeder.' },
          { id: 'E', text: 'Kişinin dengesi tamamen bozulur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemikçikler sesin genliğini artırarak iletir (Kaldıraç gibi). Kireçlenip yapışırlarsa (Otoskleroz), zar titreşse bile salyangoza (iç kulağa) aktarılamaz.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Araç tutması veya deniz tutması (Mide bulantısı) sırasında Vücudumuzda çelişen İKİ DUYU bilgisi HANGİLERİDİR?',
        options: [
          { id: 'A', text: 'Koku ve Tat' },
          { id: 'B', text: 'Görme (Göz) ile Denge (İç kulak / Vestibüler sistem)' },
          { id: 'C', text: 'İşitme ve Dokunma' },
          { id: 'D', text: 'Sıcaklık ve Ağrı' },
          { id: 'E', text: 'Kaslar ve Koku' }
        ],
        correctOptionId: 'B',
        explanation: 'Gemi içindeyken gözünüz sabit bir duvar görür, ancak iç kulağınızdaki sıvı çalkalanarak "hareket ediyoruz" der. Beyin bu uyumsuzluğu zehirlenme sanıp bulantı (kusma) yapar.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Başımızı kendi etrafımızda HIZLICA DÖNDÜRDÜĞÜMÜZDE (açısal ivme), bunu algılayan iç kulak yapısı hangisidir?',
        options: [
          { id: 'A', text: 'Korti organı' },
          { id: 'B', text: 'Kulak zarı' },
          { id: 'C', text: 'Yarım Daire Kanalları' },
          { id: 'D', text: 'Östaki borusu' },
          { id: 'E', text: 'Çekiç kemiği' }
        ],
        correctOptionId: 'C',
        explanation: '3 boyutlu uzayda başın DÖNME (Açısal) hareketlerini 3 adet olan Yarım daire kanalları içindeki sıvı algılar.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Asansörle HIZLA YUKARI veya AŞAĞI çıkarken (veya arabayla fren yaparken) DOĞRUSAL (Düz çizgideki) ivmeyi ve YERÇEKİMİ yönünü algılayan yapılar hangileridir?',
        options: [
          { id: 'A', text: 'Kulak kepçesi' },
          { id: 'B', text: 'Tulumcuk ve Kesecik (Otolit organları)' },
          { id: 'C', text: 'Salyangoz' },
          { id: 'D', text: 'Yarım daire kanalları' },
          { id: 'E', text: 'Göz merceği' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğrusal ivme (İleri-geri, Aşağı-yukarı) Tulumcuk ve Kesecik içindeki kalsiyum karbonat (Otolit) taşlarının kaymasıyla algılanır.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Halk arasında "Kulak Kristallerinin (Taşlarının) Oynaması" denilen, kişinin kafasını çevirdiğinde etrafın şiddetle dönmesine (Vertigo) sebep olan durumda, HANGİ TAŞLAR YERİNDEN ÇIKARAK kanallara kaçmıştır?',
        options: [
          { id: 'A', text: 'Safra taşları' },
          { id: 'B', text: 'Böbrek taşları' },
          { id: 'C', text: 'Otolit (Denge) taşları' },
          { id: 'D', text: 'Mide taşları' },
          { id: 'E', text: 'Gözyaşı kristalleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Otolit (Kalsiyum karbonat) taşları normalde tulumcuk içindedir. Kopup yarım daire kanallarına kaçarlarsa, sıvıya yanlış hareket verip beyni kandırır (Vertigo - Baş dönmesi).'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Gürültülü bir konser sonrası kulaklarınızda "çınlama" (tinnitus) veya geçici işitme kaybı yaşamanızın KORTİ ORGANINDAKİ sebebi nedir?',
        options: [
          { id: 'A', text: 'Kulak zarının tamamen yırtılması' },
          { id: 'B', text: 'Aşırı ses dalgalarının Salyangozdaki TÜYLÜ HÜCRELERİ (Reseptörleri) yorması veya tüylerin bükülüp hasar görmesi' },
          { id: 'C', text: 'Östaki borusunun patlaması' },
          { id: 'D', text: 'Çekiç kemiğinin erimesi' },
          { id: 'E', text: 'Beynin sese kapanması' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüksek desibelli ses, içerideki sıvı dalgasını tsunamiye çevirir ve o tüycükleri (Mekanoreseptörleri) fiziksel olarak ezer. Tüyler dinlenene kadar (veya ölürlerse kalıcı) çınlama duyulur.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Orta kulak boşluğu normalde "Hava" ile doludur. Soğuk algınlığında burnu tıkanan bir kişinin kulağının SAĞIRLAŞMASININ (boğuk duymasının) sebebi nedir?',
        options: [
          { id: 'A', text: 'Beyin sapının donması' },
          { id: 'B', text: 'Östaki borusunun kapanıp Orta Kulak boşluğuna SIVI DOLMASI (Ödem) ve kemikçiklerin suyun içinde titreşememesi' },
          { id: 'C', text: 'Kulak zarının erimesi' },
          { id: 'D', text: 'Kepçenin düşmesi' },
          { id: 'E', text: 'Salyangozun yok olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Mekanik sistem (kemikçikler) havada çok rahat sallanır. İçeri iltihap (sıvı/sümük) dolarsa direnç artar, titreşim boğulur (İletim tipi sağırlık).'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'İşitme sisteminde (Mekanik ses dalgası -> Elektrik sinyali) ENERJİ DÖNÜŞÜMÜNÜN (Transdüksiyonun) yapıldığı TAM NOKTA (Hücresel düzey) neresidir?',
        options: [
          { id: 'A', text: 'Kulak kepçesi' },
          { id: 'B', text: 'Kulak zarı' },
          { id: 'C', text: 'Örs kemiği' },
          { id: 'D', text: 'Korti organındaki Mekanoreseptör (Tüylü) Hücreler' },
          { id: 'E', text: 'Beyincik' }
        ],
        correctOptionId: 'D',
        explanation: 'Kulak zarı ve kemikler sadece "titreşimi aktarır". Salyangoz içindeki Korti organında tüyler büküldüğü anda (İyon kanalları açılır) Elektrik sinyali (İmpuls) doğar.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Uzun süreli (yıllarca) fabrika gürültüsüne maruz kalan bir işçide ortaya çıkan SİNİRSEL (Sensörinöral) İşitme Kaybında, kulak cihazı takılsa bile kişinin konuşmaları ANLAYAMAMASININ sebebi nedir?',
        options: [
          { id: 'A', text: 'Cihazın pilinin bitmesi' },
          { id: 'B', text: 'Sorunun ZAR veya KEMİKTE değil, doğrudan SALYANGOZDAKİ (Korti) RESEPTÖRLERİN ÖLMESİ (ve yenilenememesi) olması' },
          { id: 'C', text: 'Gözlerin görememesi' },
          { id: 'D', text: 'Tulumcukun parçalanması' },
          { id: 'E', text: 'Östakinin açık kalması' }
        ],
        correctOptionId: 'B',
        explanation: 'İletim tipi sağırlıkta sesi yükselten cihaz işe yarar. Ancak SİNİRSEL sağırlıkta mikrofon (Korti) ölmüştür, sesi ne kadar açarsanız açın beyne giden kablo çalışmaz.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Uçağın kalkışı sırasında kabin basıncı düştüğünde kulaklarımızda oluşan UĞULTU VE TIKANIKLIĞI gidermek için yutkunmamız veya esnememiz önerilir. Bu hareket NEYİ AÇAR?',
        options: [
          { id: 'A', text: 'Kulak zarını' },
          { id: 'B', text: 'Salyangozu' },
          { id: 'C', text: 'Östaki borusunu' },
          { id: 'D', text: 'Yarım daire kanallarını' },
          { id: 'E', text: 'Gözyaşı kanalını' }
        ],
        correctOptionId: 'C',
        explanation: 'Yutkunma hareketi boğazdaki kasları kasarak Östaki borusunu açar ve orta kulağa hava girmesini sağlayıp basıncı eşitler (Kulak "pat" diye açılır).'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'İç kulaktaki Denge sistemi (Yarım daire vb.) ile Görme duyusu sürekli iletişim halindedir. Eğer kendi etrafımızda HIZLA DÖNMEYE başlarsak, GÖZLERİMİZİN İSTEMSİZCE (Titrercesine) sağa sola kaymasının (Nistagmus) nedeni nedir?',
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
        id: 'q-7-14', difficulty: 'easy',
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
        id: 'q-7-15', difficulty: 'easy',
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
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Duyu Sistemleri İşleyişi (Karma)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Duyu nöronlarının uyartıyı iletim hızı genellikle aynıdır. Buna rağmen beynimiz "Şiddetli bir alkış sesi" ile "Hafif bir tıkırtı" arasındaki FARKIN ŞİDDETİNİ (Gürlüğünü) NASIL ANLAR?',
        options: [
          { id: 'A', text: 'İmpulsların genliğini ölçerek' },
          { id: 'B', text: 'Üretilen impulsun FREKANSI (Sıklığı) ve uyarılan NÖRON SAYISI ile' },
          { id: 'C', text: 'Talamusun rengiyle' },
          { id: 'D', text: 'Nöronları uzatarak' },
          { id: 'E', text: 'Korteksi dondurarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyin, şiddeti 2 şekilde kodlar: 1- Sinir üzerinden saniyede gelen "dıt...dıt" sayısı artar (Frekans). 2- O bölgeden gelen sinir kablolarının (Nöron sayısının) çoğu aktifleşir.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Göze, Kulağa, Burna veya Deriye giden duyusal İMPULSLAR elektriksel (Aksiyon Potansiyeli) olarak TAMAMEN AYNIDIR. O halde beyin, gelen sinyalin Işık mı, Ses mi, Koku mu olduğunu NEREDEN BİLİR?',
        options: [
          { id: 'A', text: 'Sinyallerin farklı renklerde olmasından' },
          { id: 'B', text: 'Sinyallerin beyinde HANGİ KORTEKS (LOB) BÖLGESİNE gittiğine bakarak (Örn: Arkaya gidiyorsa görme, şakağa gidiyorsa işitme)' },
          { id: 'C', text: 'Sinyallerin ağırlığından' },
          { id: 'D', text: 'Sinyalin sıcaklığından' },
          { id: 'E', text: 'Gözün farklı çalışmasından' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün kablolardan geçen akım aynıdır. Beyin "Nereden geldiğine" ve "Nereye bağlandığına" göre yorum yapar (Mekansal kodlama). Göz sinirini Kulağın merkezine bağlasaydınız, şimşeği görür değil, DUYARDINIZ.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Derimizdeki farklı reseptörler (Sıcaklık, Dokunma, Basınç vb.) bedenin her yerinde AYNI SIKLIKTA (Homojen) MI DAĞILMIŞTIR?',
        options: [
          { id: 'A', text: 'Evet, milimetrekareye hep aynı düşer.' },
          { id: 'B', text: 'Hayır; örneğin parmak uçlarımızda ve dudaklarımızda dokunma reseptörleri sırtımıza göre ÇOK DAHA YOĞUNDUR.' },
          { id: 'C', text: 'Sadece bacaklarda yoğundur.' },
          { id: 'D', text: 'Kafada hiç yoktur.' },
          { id: 'E', text: 'Organların içinde yoğundur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Parmak ucu gibi dünyayı keşfettiğimiz (Kör alfabesi okuduğumuz) bölgelerde dokunma reseptörlerinin yoğunluğu (ve beynin onlara ayırdığı alan) çok büyüktür.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Burnumuzda (Koku epitelinde) yer alan KEMORESEPTÖRLERİN yapısal olarak diğer duyulardaki reseptörlerden (Örn: Göz, Kulak) ÇOK ÖNEMLİ BİR FARKI vardır. Nedir?',
        options: [
          { id: 'A', text: 'Koklama hücresi olmamaları' },
          { id: 'B', text: 'Koku reseptörlerinin bizzat ÖZELLEŞMİŞ SİNİR HÜCRELERİ (Nöronlar) olması. (Diğerleri epitel kökenli olup sinire bağlanır)' },
          { id: 'C', text: 'Hiç impuls üretmemeleri' },
          { id: 'D', text: 'Kemikten oluşmaları' },
          { id: 'E', text: 'Kas yapısında olmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku hücreleri gerçek bipolar nöronlardır; kendi aksonları doğrudan beynin koku soğancığına gider.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Aşağıdaki Duyu - Reseptör eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Göz - Fotoreseptör' },
          { id: 'B', text: 'Kulak (İşitme) - Mekanoreseptör' },
          { id: 'C', text: 'Tat (Dil) - Kemoreseptör' },
          { id: 'D', text: 'Koku (Burun) - Termoreseptör' },
          { id: 'E', text: 'Kulak (Denge) - Mekanoreseptör' }
        ],
        correctOptionId: 'D',
        explanation: 'Koku, bir Termoreseptör (Isı) değil, Kemoreseptördür (Kimyasal maddedir).'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Bir çayın çok SICAK olduğunu dilimizle anladığımızda (Termoreseptör), çayın İÇİNDEKİ ŞEKERİ tatlı olarak algıladığımızda (Kemoreseptör) ve bardağın SERTLİĞİNİ hissettiğimizde (Mekanoreseptör), HANGİ YAPIDAN gelen veriler beynimizde birleştirilir?',
        options: [
          { id: 'A', text: 'Sadece Tat Tomurcukları' },
          { id: 'B', text: 'Dilimizde bulunan KARIŞIK (Çeşitli) DUYU RESEPTÖRLERİ (Dil sadece tat organı değil, aynı zamanda çok hassas bir deri/dokunma/ısı organıdır)' },
          { id: 'C', text: 'Sadece Koku soğancığı' },
          { id: 'D', text: 'Gözün korneası' },
          { id: 'E', text: 'Salyangoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Dil çok kompleks bir organdır. Bir yemeği yerken "Sıcak, acı, sert, tatlı" deriz. Bütün bu farklı reseptörler beyne ortak bir "Lezzet/Doku" profili sunar.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Kulağımızla duyduğumuz SES DALGASI, Kulak Zarında titreşime dönüştüğünde hangi ENERJİ TÜRÜNE geçmiş olur?',
        options: [
          { id: 'A', text: 'Elektrik' },
          { id: 'B', text: 'Kimyasal' },
          { id: 'C', text: 'Mekanik Enerji' },
          { id: 'D', text: 'Işık Enerjisi' },
          { id: 'E', text: 'Isı Enerjisi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ses havada titreşimdir. Zarla birlikte fiziksel bir çekme-itme (Mekanik / Kinetik) enerjisine dönüşür.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Derimizin Alt Deri (Dermis) katmanında en bol bulunan, deriye esneklik ve dayanıklılık kazandıran PROTEİNLERİN (Bağ dokunun) isimleri nelerdir?',
        options: [
          { id: 'A', text: 'Keratin ve Melanin' },
          { id: 'B', text: 'Kolajen ve Elastin lifleri' },
          { id: 'C', text: 'Miyozin ve Aktin' },
          { id: 'D', text: 'Hemoglobin' },
          { id: 'E', text: 'Rodopsin' }
        ],
        correctOptionId: 'B',
        explanation: 'Dermis, bol miktarda kolajen (sağlamlık) ve elastin (esneklik) lifi içerir. Yaşlanmayla bu lifler bozulunca deride kırışıklıklar başlar.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
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
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Bir cismin KOKUSUNUN, Görme ve İşitmeye göre, Beynimizde DUYGULARI ve HAFIZAYI (Eski anıları) çok daha HIZLI VE ŞİDDETLİ tetiklemesinin ANATOMİK nedeni nedir?',
        options: [
          { id: 'A', text: 'Kokunun burna yakın olması' },
          { id: 'B', text: 'Koku sinirlerinin Talamus\'a uğramadan DOĞRUDAN Limbik Sisteme (Duygu, korku ve hafıza merkezine) bağlanması' },
          { id: 'C', text: 'Kokunun görünmez olması' },
          { id: 'D', text: 'Kokunun ağır olması' },
          { id: 'E', text: 'Burnun ortada olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku, en ilkel duyumuzdur. Beyin kabuğundan önce amigdala ve hipokampus gibi duygu merkezlerine girdiği için anıları (Anneanne evi kokusu gibi) anında geri getirir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Körlerde Görme duyusu, Sağırlarda İşitme duyusu iptal olduğu için (Korteksteki o alanlar boş kaldığı için), Beyin plastisitesi (Esnekliği) sayesinde HANGİ GELİŞME yaşanır?',
        options: [
          { id: 'A', text: 'Kişi bitkisel hayata girer.' },
          { id: 'B', text: 'Beyin boş kalan o bölgeleri DİĞER DUYULAR (Dokunma, İşitme) için kullanır; bu nedenle körlerin duyma ve dokunma (okuma) yetenekleri DEVASA ŞEKİLDE HASSASLAŞIR.' },
          { id: 'C', text: 'Gözler büyür.' },
          { id: 'D', text: 'Tat alma kaybolur.' },
          { id: 'E', text: 'Saçlar dökülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kullanılmayan korteks alanı (Oksipital lob) komşu duyular (işitme) tarafından "İşgal edilir". Beyin orayı harcamaz, diğer kapasitelerini artırmak için değerlendirir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Talamus, koku dışındaki duyuların toplanıp kortekse (beyin kabuğuna) yönlendirildiği geçiş istasyonudur. UYKUYA DALDIĞIMIZDA (Derin uykuda) Talamus ne yapar?',
        options: [
          { id: 'A', text: 'Kokuları engeller.' },
          { id: 'B', text: 'Duyu giriş kapılarını BÜYÜK ORANDA KAPATIR, böylece hafif sesler veya dokunmalar kortekse gitmez ve uyanmayız.' },
          { id: 'C', text: 'Gözleri açar.' },
          { id: 'D', text: 'Kasları kilitler.' },
          { id: 'E', text: 'Sürekli ateşleme yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Talamus bir filtredir. Uyku sırasında dış dünyadan gelen duyuları (alarm hariç) baskılayarak beynin dinlenmesini sağlar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Koku reseptör hücreleri, bir moleküle (Örn: Parfüm) karşı ÇOK HIZLI ADAPTE (Alışma) olur. Ancak yeni bir KÖTÜ KOKU (Örn: Gaz sızıntısı) odaya girerse BURNUNUZ BUNU HEMEN ALIR. Bunun avantajı nedir?',
        options: [
          { id: 'A', text: 'Burnun yorulması' },
          { id: 'B', text: 'Zararsız ve sabit arka plan kokusunu SİLEREK (Adapte olarak), DIŞARIDAN GELECEK YENİ VE TEHLİKELİ KOKULARA karşı radarı açık tutmak (Hayatta kalma)' },
          { id: 'C', text: 'Nefes almak' },
          { id: 'D', text: 'Kan basıncını düşürmek' },
          { id: 'E', text: 'Terlemek' }
        ],
        correctOptionId: 'B',
        explanation: 'Duyusal adaptasyon bir hata değil, kusursuz bir "arka plan gürültüsünü silme" sistemidir. Böylece yeni bir tehlike anında fark edilir.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Dildeki tat tomurcuklarında yer alan reseptör hücrelerin ömrü yaklaşıktır 10-14 gündür. SÜREKLİ YENİLENMELERİNİN temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Çok hızlı büyümeleri' },
          { id: 'B', text: 'Ağız içinin sıcak yiyecekler, asitli içecekler ve mekanik sürtünmelerle ÇOK YIPRATICI bir ortam olması ve hücrelerin sürekli hasar görmesi' },
          { id: 'C', text: 'Tatlıları sevmemesi' },
          { id: 'D', text: 'Dişlerin onları kesmesi' },
          { id: 'E', text: 'Tükürüğün onları eritmesi' }
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
    description: 'Reseptörlerin Sınıflandırılması ve Çalışma Mekanizması',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Fotoreseptör, mekanoreseptör, kemoreseptör ve termoreseptörlerin ORTAK ÖZELLİĞİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sadece dış çevreden gelen uyarıları almaları' },
          { id: 'B', text: 'Aldıkları uyaran enerjisini zar potansiyeli değişimine (İmpulsa) dönüştürmeleri' },
          { id: 'C', text: 'Tümünün Talamus\'a uğraması' },
          { id: 'D', text: 'Aynı beyin lobuna gitmeleri' },
          { id: 'E', text: 'Aynı hızda adapte olmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüm duyu reseptörleri, kendi spesifik uyaran türlerini elektriksel bir dile (impuls) çevirmek zorundadır (Transdüksiyon).'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Bir reseptörün, uyarana yanıt oluşturabilmesi için GEREKLİ OLAN ŞART hangisidir?',
        options: [
          { id: 'A', text: 'Uyaranın kimyasal olması' },
          { id: 'B', text: 'Uyaranın eşik değerinde veya üzerinde olması' },
          { id: 'C', text: 'Uyaranın sürekli artması' },
          { id: 'D', text: 'Reseptörün kas hücresi olması' },
          { id: 'E', text: 'Uyarının ışık hızında gelmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşik değerin altındaki hiçbir uyaran (ses, ışık, dokunma) reseptörde aksiyon potansiyeli (impuls) başlatamaz.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Vücudumuzdaki DUYU ADAPTASYONU (alışma) sürecine EN YAVAŞ adapte olan veya HİÇ ADAPTE OLMAYAN reseptör çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Tat tomurcukları' },
          { id: 'B', text: 'Koku (Kemoreseptörler)' },
          { id: 'C', text: 'Ağrı reseptörleri (Nosiseptörler)' },
          { id: 'D', text: 'Sıcaklık (Termoreseptörler)' },
          { id: 'E', text: 'Dokunma (Mekanoreseptörler)' }
        ],
        correctOptionId: 'C',
        explanation: 'Ağrı, vücudun tehlikede olduğunu bildirir. Beyin tehlike geçene kadar ağrıyı "silmez", bu yüzden ağrıya alışamayız.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Kan damarlarındaki oksijen-karbondioksit miktarını veya kanın pH\'ını ölçerek solunumu düzenleyen İÇ RESEPTÖRLER hangi gruptandır?',
        options: [
          { id: 'A', text: 'Fotoreseptör' },
          { id: 'B', text: 'Mekanoreseptör' },
          { id: 'C', text: 'Kemoreseptör' },
          { id: 'D', text: 'Termoreseptör' },
          { id: 'E', text: 'Otolit' }
        ],
        correctOptionId: 'C',
        explanation: 'Kandaki gazlar (O2, CO2) kimyasal moleküllerdir. Bunları algılayan reseptörler (karotis cismindeki vb.) kemoreseptörlerdir.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Mekanoreseptörler, sadece işitme ve dokunmada değil, iç organlarımızda da bulunur. Mide duvarında bulunan ve "Tokluk" hissini başlatan reseptörler neyi algılar?',
        options: [
          { id: 'A', text: 'Yemeğin kokusunu' },
          { id: 'B', text: 'Mide asidinin pH\'ını' },
          { id: 'C', text: 'Mide duvarının GERİLMESİNİ (Fiziksel genleşmeyi)' },
          { id: 'D', text: 'Yemeğin rengini' },
          { id: 'E', text: 'Bağırsak hareketini' }
        ],
        correctOptionId: 'C',
        explanation: 'Mide dolduğunda duvarı esner (gerilir). Bu mekanik gerilme, mekanoreseptörleri uyararak tokluk sinyali yollar.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Işık şiddeti çok arttığında, fotoreseptörlerin beyne gönderdiği İMPULS FREKANSINDA (Sayısında) nasıl bir değişim beklenir?',
        options: [
          { id: 'A', text: 'Frekans azalır.' },
          { id: 'B', text: 'Frekans değişmez, impulsun genliği artar.' },
          { id: 'C', text: 'Frekans artar (Birim zamanda giden impuls sayısı çoğalır).' },
          { id: 'D', text: 'Frekans durur.' },
          { id: 'E', text: 'Sinyaller kulağa gider.' }
        ],
        correctOptionId: 'C',
        explanation: 'Uyaranın şiddeti artarsa (örneğin daha parlak ışık), impulsun frekansı (sıklığı) artar. Genlik hep sabittir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Deri, basıncı nasıl hisseder? (Basınç reseptörlerinin adı nedir?)',
        options: [
          { id: 'A', text: 'Çubuk hücreleri' },
          { id: 'B', text: 'Pacinian cisimciği (Pacini cisimciği)' },
          { id: 'C', text: 'Ruffini cisimciği' },
          { id: 'D', text: 'Koku soğancığı' },
          { id: 'E', text: 'Sarı nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Derinin derinliklerinde bulunan Pacini cisimciği güçlü basınca duyarlı bir mekanoreseptördür.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Soğuğu algılayan Krause cisimcikleri ile sıcağı algılayan Ruffini cisimcikleri genel olarak hangi gruba aittir?',
        options: [
          { id: 'A', text: 'Mekanoreseptör' },
          { id: 'B', text: 'Fotoreseptör' },
          { id: 'C', text: 'Termoreseptör' },
          { id: 'D', text: 'Kemoreseptör' },
          { id: 'E', text: 'Nosiseptör' }
        ],
        correctOptionId: 'C',
        explanation: 'Sıcaklık değişimlerini ölçen reseptörler termoreseptörlerdir.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Bazı reseptörlerin "Özelleşmiş Sinir Hücreleri (Nöron)", bazılarının ise "Epitel Hücreleri" olduğu bilinmektedir. Görme olayını başlatan Çubuk ve Koni hücreleri, embriyonik gelişimde NEREDEN köken alır?',
        options: [
          { id: 'A', text: 'Kastan' },
          { id: 'B', text: 'Kemikten' },
          { id: 'C', text: 'Sinir sisteminin (Beynin) bir uzantısından' },
          { id: 'D', text: 'Mideden' },
          { id: 'E', text: 'Karaciğerden' }
        ],
        correctOptionId: 'C',
        explanation: 'Retina ve içindeki fotoreseptörler, beynin embriyonik dönemde dışarıya doğru uzanan bir parçasıdır. Yani doğrudan sinir dokusudur.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Her reseptör tipi sadece kendi uyaranına "En Hassas" (Spesifik) tir. Gözümüze (Fotoreseptör) sert bir yumruk (Mekanik uyarı) aldığımızda neden "Yıldızlar (Işık) görürüz"?',
        options: [
          { id: 'A', text: 'Yumruğun içinde ışık olduğu için' },
          { id: 'B', text: 'Gözün arkasında ateş yandığı için' },
          { id: 'C', text: 'Aşırı mekanik basınç fotoreseptörlerin EŞİK DEĞERİNİ aşarak onları uyardığı ve beyin bu uyarıyı daima "IŞIK" olarak yorumladığı için' },
          { id: 'D', text: 'Yumruk korneayı parlattığı için' },
          { id: 'E', text: 'Camsı cisim patladığı için' }
        ],
        correctOptionId: 'C',
        explanation: 'Reseptörler spesifiktir ama çok aşırı başka bir uyarı ile de (basınçla) tetiklenebilirler. Tetiklendiklerinde, beyne giden yol "görme" yolu olduğu için beyin bunu ışık çakması sanır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Algının "Nispi" (Göreceli) olduğunu kanıtlayan en klasik durum nedir?',
        options: [
          { id: 'A', text: 'Kör nokta' },
          { id: 'B', text: 'Sağ elini sıcak suya, sol elini soğuk suya koyup, sonra ikisini birden ılık suya koyan kişinin; sağ eliyle soğuk, sol eliyle sıcak hissetmesi.' },
          { id: 'C', text: 'Kulak zarı yırtılması' },
          { id: 'D', text: 'Uzağı görememe' },
          { id: 'E', text: 'Koku adaptasyonu' }
        ],
        correctOptionId: 'B',
        explanation: 'Termoreseptörler mutlak sıcaklığı değil, "Sıcaklık Değişimini (Farkı)" algılar. Bu yüzden algı duruma göre görecelidir.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Tat ve Koku reseptörleri (Kemoreseptörler) ile uyaran madde arasındaki İLİŞKİ, biyolojideki HANGİ İLİŞKİYE çok benzer?',
        options: [
          { id: 'A', text: 'Enzim - Substrat (Anahtar - Kilit) uyumuna' },
          { id: 'B', text: 'Kas - Kemik ilişkisine' },
          { id: 'C', text: 'Damar - Kan ilişkisine' },
          { id: 'D', text: 'Beyin - Omurilik ilişkisine' },
          { id: 'E', text: 'Mide - Bağırsak ilişkisine' }
        ],
        correctOptionId: 'A',
        explanation: 'Kimyasal molekül (örn: Şeker), tat hücresinin zarındaki reseptör proteine tam oturur (anahtar-kilit gibi) ve iyon kapılarını açar.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Duyu organlarının reseptörlerinden çıkan duyu nöronları, Merkezi Sinir Sisteminde (Omurilik, Beyin sapı, Talamus, Korteks) İLK OLARAK hangi nöronlarla SİNAPS (bağlantı) yapar?',
        options: [
          { id: 'A', text: 'Motor nöron' },
          { id: 'B', text: 'Kas hücresi' },
          { id: 'C', text: 'Ara Nöronlar (İnternöronlar)' },
          { id: 'D', text: 'Beze hücresi' },
          { id: 'E', text: 'Glialar' }
        ],
        correctOptionId: 'C',
        explanation: 'Duyu nöronları, bilgiyi merkezi sinir sistemindeki Ara nöronlara (değerlendirme yapacak hücrelere) aktarır.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Parmağımıza iğne battığında "Acı" (Ağrı) hissetmemizi sağlayan NOSİSEPTÖRLERİN yapısal özelliği nedir?',
        options: [
          { id: 'A', text: 'Çok kalın miyelin kılıflı olmaları' },
          { id: 'B', text: 'Etrafında özel bir kapsül BULUNMAYAN, Serbest Sinir Uçları olmaları' },
          { id: 'C', text: 'Sıvı ile dolu olmaları' },
          { id: 'D', text: 'Koni şeklinde olmaları' },
          { id: 'E', text: 'Kemik içinde bulunmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağrı reseptörleri derinin hemen altında dallanmış "Serbest Sinir Uçları" dır, etraflarında onları koruyan bir bağ doku kapsülü yoktur.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Aşağıdaki yapılardan hangisi gerçek bir DUYU RESEPTÖRÜ DEĞİLDİR? (Sadece iletime veya korumaya yardımcı bir organdır)',
        options: [
          { id: 'A', text: 'Retinadaki Çubuk hücresi' },
          { id: 'B', text: 'Korti organındaki Tüy hücresi' },
          { id: 'C', text: 'Derideki Pacini cisimciği' },
          { id: 'D', text: 'Orta kulaktaki Örs kemiği' },
          { id: 'E', text: 'Burundaki Koku hücresi' }
        ],
        correctOptionId: 'D',
        explanation: 'Örs kemiği mekanik bir kaldıraçtır. Enerjiyi elektrik sinyaline (İmpulsa) dönüştürmez, sadece fiziksel olarak iletir. Bu yüzden reseptör değildir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Görme Fizyolojisi Derinlemesine',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Kornea (Saydam tabaka) kan damarı İÇERMEZ. Peki kornea hücreleri Oksijen ve Besin ihtiyaçlarını NASIL KARŞILAR?',
        options: [
          { id: 'A', text: 'Kendi kendine fotosentez yapar.' },
          { id: 'B', text: 'Besine ve Oksijene ihtiyacı yoktur, ölüdür.' },
          { id: 'C', text: 'Ön oda sıvısından (göz içinden) ve Dışarıdaki Gözyaşından/Havadan difüzyonla alır.' },
          { id: 'D', text: 'Kemiklerden sızan kanla beslenir.' },
          { id: 'E', text: 'Retinadan kan pompalanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kornea saydam kalmak için damarsızdır. Besinini altındaki sıvıdan (Aköz humör), oksijenini ise gözyaşı içinde çözünen havadan difüzyonla alır.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Korneanın damarsız olmasının TIBBİ (Cerrahi) bir avantajı vardır. Bu avantaj aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Korneanın çok sert olması' },
          { id: 'B', text: 'Korneanın asla yırtılmaması' },
          { id: 'C', text: 'Damar (ve kan/lenf hücresi) olmadığı için KORNEA NAKLİ (Transplantasyonu) sırasında DOKU UYUŞMAZLIĞI (Reddi) riskinin çok düşük olması.' },
          { id: 'D', text: 'Korneanın ışığı kırmaması' },
          { id: 'E', text: 'Korneanın sarı renkte olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kornea bağışıklık hücrelerinin rahatça ulaşamadığı damarsız bir alan olduğu için, başka birinden nakledildiğinde vücut onu kolay kolay reddetmez.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Retinaya düşen bir ağacın görüntüsü FİZİKSEL (Optik) olarak nasıldır?',
        options: [
          { id: 'A', text: 'Düz ve çok büyüktür.' },
          { id: 'B', text: 'Düz ve küçüktür.' },
          { id: 'C', text: 'Ters (Baş aşağı) ve Küçüktür.' },
          { id: 'D', text: 'Sadece siyah beyazdır.' },
          { id: 'E', text: 'Sadece gövdesi görünür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Göz merceği ince kenarlı bir mercek olduğu için ışığı çaprazlar. Ağacın tepesinden gelen ışık retinanın altına, altından gelen üste düşer (Ters ve küçük). Beyin bunu düzeltir.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Karanlık bir odadan, aniden aydınlık (güneşli) bir ortama çıkıldığında Göz Bebeği Daralır. Bu refleksin KONTROL MERKEZİ beynin neresidir?',
        options: [
          { id: 'A', text: 'Orta beyin (Beyin sapı)' },
          { id: 'B', text: 'Uç beyin (Korteks)' },
          { id: 'C', text: 'Beyincik' },
          { id: 'D', text: 'Omurilik' },
          { id: 'E', text: 'Talamus' }
        ],
        correctOptionId: 'A',
        explanation: 'Görme ve İşitme refleksleri (Göz bebeği daralması, sese doğru başı çevirme) Orta Beyin tarafından yönetilir.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Çubuk (Rod) hücreleri ağ tabakanın (retinanın) DAHA ÇOK hangi bölgesinde yoğunlaşmıştır?',
        options: [
          { id: 'A', text: 'Sarı noktanın TAM MERKEZİNDE' },
          { id: 'B', text: 'Kör noktada' },
          { id: 'C', text: 'Korneanın üstünde' },
          { id: 'D', text: 'Sarı noktanın ETRAFINDA (Çevresel Retinada)' },
          { id: 'E', text: 'İrisin arkasında' }
        ],
        correctOptionId: 'D',
        explanation: 'Sarı nokta (Fovea) merkezinde sadece Koniler vardır. Merkezden uzaklaştıkça (çevrede) Çubuk hücrelerinin sayısı artar. Bu yüzden karanlıkta bir yıldıza tam bakmak yerine hafif yanından bakarsak daha iyi görürüz.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Retinadaki Fotoreseptörlerin (Çubuk ve Koniler) ışığı algıladıktan sonra, sinyali GÖRME SİNİRİNE (Ganglion hücrelerine) aktarırken ARADA kullandıkları hücre grubunun adı nedir?',
        options: [
          { id: 'A', text: 'Bipolar Hücreler (İki kutuplu nöronlar)' },
          { id: 'B', text: 'Otolitler' },
          { id: 'C', text: 'Motor nöronlar' },
          { id: 'D', text: 'Kemik hücreleri' },
          { id: 'E', text: 'Kıkırdak hücreleri' }
        ],
        correctOptionId: 'A',
        explanation: 'Işık fotoreseptöre çarpar -> Bipolar hücrelere (ara katman) aktarılır -> Ganglion hücrelerine geçer (bunların aksonları görme sinirini oluşturur).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Ganglion hücrelerinin uzun uzantıları (aksonları) gözün arkasında BİRLEŞEREK bir demet halinde gözü terk eder. Bu kalın sinir kordonuna ne denir?',
        options: [
          { id: 'A', text: 'İşitme siniri' },
          { id: 'B', text: 'Optik Sinir (Görme Siniri)' },
          { id: 'C', text: 'Omurilik' },
          { id: 'D', text: 'Trigeminal sinir' },
          { id: 'E', text: 'Siyatik sinir' }
        ],
        correctOptionId: 'B',
        explanation: 'Retinadan çıkan bilgileri beyne taşıyan kalın kablo Optik Sinirdir.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Sağ Gözümüzün SAĞ TARAFINDAN (Yani sağ gözün sağ görüş alanından) gelen ışıklar, beynin HANGİ YARIM KÜRESİNDE işlenir?',
        options: [
          { id: 'A', text: 'Sağ yarım kürede' },
          { id: 'B', text: 'Sol yarım kürede (Optik Kiazma çaprazı nedeniyle)' },
          { id: 'C', text: 'Beyincikte' },
          { id: 'D', text: 'Her iki yarım kürede eşit olarak' },
          { id: 'E', text: 'Omurilikte' }
        ],
        correctOptionId: 'B',
        explanation: 'Her iki gözden gelen "SAĞ GÖRME ALANI" bilgileri Sol loba, "SOL GÖRME ALANI" bilgileri Sağ loba gider. Optik kiazma bu tasnifi yapar.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Göz merceğinin ASICI BAĞLAR (Zinn lifleri) ile tutunduğu Kaslı yapıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Kirpiksi cisim (Kirpiksi kaslar)' },
          { id: 'B', text: 'İris kasları' },
          { id: 'C', text: 'Kör nokta' },
          { id: 'D', text: 'Kornea' },
          { id: 'E', text: 'Retina' }
        ],
        correctOptionId: 'A',
        explanation: 'Merceği tutan ve yakına/uzağa bakarken kasılıp gevşeyerek merceğin kalınlığını (Akomodasyonu) ayarlayan yapı Kirpiksi cisimdir.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Bir cismin YAKINLAŞTIĞINI anlamamız, göz merceğinin kalınlaşması dışında HANGİ OLAYLA DAHA desteklenir?',
        options: [
          { id: 'A', text: 'Gözyaşının artması' },
          { id: 'B', text: 'İki göz bebeğinin BİRBİRİNE DOĞRU (İçe) yakınlaşması (Konverjans)' },
          { id: 'C', text: 'Gözün dışarı fırlaması' },
          { id: 'D', text: 'Korneanın dökülmesi' },
          { id: 'E', text: 'Kulakların dikleşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Burnumuzun ucuna doğru yaklaşan bir kaleme bakarken, göz kürelerimiz şaşı olurcasına birbirine yaklaşır (Konverjans). Bu refleks de yakına odaklanmanın (Derinlik algısının) bir parçasıdır.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Çubuk (Rod) hücrelerinde ışık enerjisini hapseden (soğuran) ve parçalanarak sinyali başlatan PİGMENT molekülünün adı nedir?',
        options: [
          { id: 'A', text: 'Melanin' },
          { id: 'B', text: 'Klorofil' },
          { id: 'C', text: 'Hemoglobin' },
          { id: 'D', text: 'Rodopsin' },
          { id: 'E', text: 'Miyoglobin' }
        ],
        correctOptionId: 'D',
        explanation: 'Rodopsin (Rod = Çubuk, Opsis = Görme), A vitamini türevi olan ve ışıkta parçalanarak karanlıkta sentezlenen kimyasal pigmenttir.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Gözde bulunan Camsı Cisim sıvısının görevlerinden biri İÇ BASINÇ (Göz tansiyonu) yaratmaktır. Bu basıncın FAYDASI nedir?',
        options: [
          { id: 'A', text: 'Körü körüne ağrı yapmak' },
          { id: 'B', text: 'Retinanın (Ağ tabakanın) beslenmesini durdurmak' },
          { id: 'C', text: 'Göz küresinin YUVARLAK ŞEKLİNİ korumak ve Retinayı arkadaki damar tabakaya YAPIŞIK TUTMAK' },
          { id: 'D', text: 'Işığı engellemek' },
          { id: 'E', text: 'Renk körlüğü yapmak' }
        ],
        correctOptionId: 'C',
        explanation: 'İçerideki jölemsi sıvı gözü bir balon gibi şişkin tutar. Sıvı azalırsa göz büzüşür ve retina (duvar kağıdı gibi) arkadan kopar (Retina dekolmanı).'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Halk arasında GÖZ TANSİYONU olarak bilinen GLOKOM hastalığının temel fiziksel oluşum nedeni nedir?',
        options: [
          { id: 'A', text: 'Ağlamak' },
          { id: 'B', text: 'Gözün ön odasındaki sıvının (Aköz humör) DRENAJ (boşalma) kanallarının tıkanması sonucu birikip basıncı artırması' },
          { id: 'C', text: 'Merceğin kuruması' },
          { id: 'D', text: 'Korneanın incelmesi' },
          { id: 'E', text: 'Retinanın yırtılması' }
        ],
        correctOptionId: 'B',
        explanation: 'Ön oda sıvısı sürekli üretilir ve kanallarla emilir. Kanallar tıkanırsa sıvı birikir, göz şişer ve arkadaki optik siniri ezer (Glokom).'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'İki gözümüz olmasının (Binoküler görme) bize sağladığı EN BÜYÜK AVANTAJ (tek göze kıyasla) nedir?',
        options: [
          { id: 'A', text: 'Renkleri daha parlak görmek' },
          { id: 'B', text: 'Derinlik Algısı (Üç boyutlu - 3D - ve mesafeyi iyi kavrayabilme yeteneği)' },
          { id: 'C', text: 'Daha uzağı görebilmek' },
          { id: 'D', text: 'Gözleri dinlendirmek' },
          { id: 'E', text: 'Karanlıkta parlamak' }
        ],
        correctOptionId: 'B',
        explanation: 'İki göz farklı açılardan bakar. Beyin bu iki farklı açıyı üst üste bindirerek cismin ne kadar uzakta/derinde olduğunu (3D) hesaplar.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Gözde ışığın kırıldığı BÜTÜN SAYDAM ortamlar sırasıyla hangileridir?',
        options: [
          { id: 'A', text: 'Sklera -> Koroid -> Retina' },
          { id: 'B', text: 'Kornea -> Ön oda sıvısı -> Mercek -> Camsı cisim' },
          { id: 'C', text: 'Göz kapağı -> İris -> Sarı benek' },
          { id: 'D', text: 'Kirpik -> Mercek -> Kör nokta' },
          { id: 'E', text: 'Pupilla -> Sklera' }
        ],
        correctOptionId: 'B',
        explanation: 'Işık sırasıyla; Kornea (İlk kırılma) -> Ön Oda -> Göz bebeği -> Mercek (İkinci Kırılma) -> Camsı Cisim -> Retina yolunu izler.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'İşitme ve Denge Fizyolojisi Derinlemesine',
    type: 'medium',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Korti organında bulunan tüylü duyu hücreleri (Mekanoreseptörler), salyangoz içindeki HANGİ İKİ ZAR arasında sıkışarak sürtünür ve uyarılır?',
        options: [
          { id: 'A', text: 'Kulak zarı ve Oval pencere' },
          { id: 'B', text: 'Baziler (Temel) zar ile Tektorial (Çatı) zar' },
          { id: 'C', text: 'Kornea ve Retina' },
          { id: 'D', text: 'Sklera ve Koroid' },
          { id: 'E', text: 'Tulumcuk ve Kesecik' }
        ],
        correctOptionId: 'B',
        explanation: 'Dalga gelince alttaki Temel (Baziler) zar dalgalanır. Tüylü hücreler yukarı doğru zıplayarak sabit duran üstteki Çatı (Tektorial) zara çarpar ve bükülürler.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Salyangozda (Kohleada) birbirinden farklı FREKANSTAKİ (İnce ve Kalın) seslerin ayırt edilmesi anatomik olarak NASIL gerçekleşir?',
        options: [
          { id: 'A', text: 'Gözlerin yardımıyla' },
          { id: 'B', text: 'Sesin şiddetinin artmasıyla' },
          { id: 'C', text: 'Farklı frekanslı ses dalgalarının, uzun olan Baziler Zarın FARKLI BÖLGELERİNİ (Giriş veya Tepe kısımlarını) en fazla titreştirmesiyle (Yer kuramı)' },
          { id: 'D', text: 'Östaki borusunun boyuyla' },
          { id: 'E', text: 'Tulumcuk içindeki taşlarla' }
        ],
        correctOptionId: 'C',
        explanation: 'Salyangoz bir piyano klavyesi gibidir. Tiz (ince) sesler zarın girişindeki sert kısmı, Bas (kalın) sesler zarın sonundaki esnek tepe kısmını titreştirir. Beyin hangi bölgeden sinyal geldiğine bakarak sesi tanır.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Oval pencereden Salyangoza GİREN ses (basınç) dalgasının, enerjisini bıraktıktan sonra Orta Kulağa geri çıkıp "SÖNÜMLENMESİNİ" (Yankı yapmasını engellemeyi) sağlayan, salyangozun alt ucundaki İKİNCİ ZAR (Pencere) hangisidir?',
        options: [
          { id: 'A', text: 'Kulak zarı' },
          { id: 'B', text: 'Kör nokta' },
          { id: 'C', text: 'Yuvarlak pencere' },
          { id: 'D', text: 'Tektorial zar' },
          { id: 'E', text: 'İris' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer içerideki sıvı dalgasının gideceği bir çıkış noktası olmasaydı sıvı sıkışamazdı. Oval pencereden giren basınç, Yuvarlak pencere zarını dışarı iterek boşalır ve yankıyı önler.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Yarım Daire Kanallarının ucunda "Ampulla" adı verilen şişkinlikler bulunur. Bu şişkinliklerin içinde DÖNME hareketini algılayan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Otolit taşları' },
          { id: 'B', text: 'Cupula (Kupula) adı verilen jelatinimsi kep ve içindeki tüylü reseptörler' },
          { id: 'C', text: 'Çekiç kemiği' },
          { id: 'D', text: 'Sarı benek' },
          { id: 'E', text: 'Koku soğancığı' }
        ],
        correctOptionId: 'B',
        explanation: 'Dönme (Açısal ivme) sırasında kanal içindeki sıvı (Endolenf) geride kalır ve Cupula (Jel yelken) bükülerek altındaki reseptörleri uyarır.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Neden kendi etrafımızda uzun süre döndükten sonra ANİDEN DURSAK BİLE başımız dönmeye devam eder?',
        options: [
          { id: 'A', text: 'Kan basıncımız düştüğü için' },
          { id: 'B', text: 'Korti organı bozulduğu için' },
          { id: 'C', text: 'Yarım Daire kanallarının içindeki SIVININ EYLEMSİZLİKTEN DOLAYI bir süre daha akmaya (dönmeye) ve tüyleri bükmeye devam etmesinden' },
          { id: 'D', text: 'Otolit taşları eridiği için' },
          { id: 'E', text: 'Östaki borusu tıkandığı için' }
        ],
        correctOptionId: 'C',
        explanation: 'Biz dursak da eylemsizlik kuralı gereği kanalın içindeki su (endolenf) akmaya devam eder, kupulayı eğer. Beyin hala "Dönüyoruz" sinyali alır, göz "Duruyoruz" der -> Baş dönmesi.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Statik Denge (Yerçekimine karşı başın konumu) ile Dinamik Denge (Hızlanma, dönme hareketleri) HANGİ YAPILARCA KONTROL EDİLİR?',
        options: [
          { id: 'A', text: 'Statik: Yarım Daire Kanalları / Dinamik: Tulumcuk ve Kesecik' },
          { id: 'B', text: 'Statik: Tulumcuk ve Kesecik / Dinamik: Yarım Daire Kanalları' },
          { id: 'C', text: 'Statik: Salyangoz / Dinamik: Örs' },
          { id: 'D', text: 'Statik: Korti / Dinamik: Kornea' },
          { id: 'E', text: 'Statik: Yuvarlak Pencere / Dinamik: Oval Pencere' }
        ],
        correctOptionId: 'B',
        explanation: 'Tulumcuk/Kesecik içindeki taşlar yerçekimi (Statik) ve doğrusal hızlanmayı ölçer. Yarım daire kanalları ise 3D düzlemde dönmeyi (Dinamik) ölçer.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Şiddetli bir patlama olduğunda, askerlerin ağızlarını AÇMALARI istenir. Bu uyarının KULAĞI KORUMA prensibi nedir?',
        options: [
          { id: 'A', text: 'Salyangozu durdurmak' },
          { id: 'B', text: 'Dışarıdan gelen devasa hava basıncının zarın dışına vurması anında, Östaki borusundan da zarın İÇİNE hava dolmasını sağlayarak ZARIN YIRTILMASINI ÖNLEMEK' },
          { id: 'C', text: 'Ağızdan nefes almak' },
          { id: 'D', text: 'Çekiç kemiğini kırmak' },
          { id: 'E', text: 'Gözleri korumak' }
        ],
        correctOptionId: 'B',
        explanation: 'Basınç dalgası sadece dıştan gelirse zarı içeri patlatır. Ağız açılırsa yutak üzerinden Östaki yoluyla zarın arkasına da basınç gelir, iki taraf dengelenir.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Dış Kulak ile Orta Kulak, HANGİ YAPI İLE birbirinden ayrılır (Sınır oluşturur)?',
        options: [
          { id: 'A', text: 'Oval Pencere' },
          { id: 'B', text: 'Salyangoz' },
          { id: 'C', text: 'Kulak Zarı (Timpanik Zar)' },
          { id: 'D', text: 'Östaki Borusu' },
          { id: 'E', text: 'Kulak Kepçesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kulak yolu (Dış) biter, zar başlar. Zarın arkası kemikçiklerin olduğu Orta kulaktır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Orta Kulak ile İç Kulak, HANGİ YAPI İLE birbirinden ayrılır (Sınır oluşturur)?',
        options: [
          { id: 'A', text: 'Kulak Zarı' },
          { id: 'B', text: 'Oval Pencere' },
          { id: 'C', text: 'Dış Kulak Yolu' },
          { id: 'D', text: 'Kulak Kepçesi' },
          { id: 'E', text: 'Tulumcuk' }
        ],
        correctOptionId: 'B',
        explanation: 'Üzengi kemiği (Orta kulağın sonu) Oval Pencere (İç kulağın girişi) zarına yapışıktır.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Yaşlılığa bağlı İşitme Kaybında (Presbikuzi) ilk kaybolan sesler genelde TİZ (İnce frekanslı) seslerdir. Bunun Salyangoz (Kohlea) anatomisiyle ilgisi nedir?',
        options: [
          { id: 'A', text: 'Zarın renginin değişmesi' },
          { id: 'B', text: 'Tiz sesleri algılayan Korti hücrelerinin Salyangozun GİRİŞ KISMINDA olması ve tüm ses enerjisine İLK ONLARIN maruz kalarak (dalga kırkıran gibi) en çabuk yıpranması' },
          { id: 'C', text: 'Tiz seslerin daha yavaş olması' },
          { id: 'D', text: 'Yaşlıların ince konuşması' },
          { id: 'E', text: 'Kemiğin erimesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Oval pencereden giren enerji (frekansı ne olursa olsun) ilk olarak giriş bölgesini aşındırır. Giriş bölgesi tiz sesleri kodlar. Bu yüzden yaşlılar önce ince sesleri (zil, kadın/çocuk sesi) duymakta zorlanır.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Denge ile ilgili uyartılar sırasıyla; Vestibüler Sinir (Denge Siniri) ile BEYİN SAPI ve TALAMUS\'a uğradıktan sonra, VÜCUT DURUŞUNUN ayarlanması için ASIL OLARAK beynin HANGİ BÖLÜMÜNE gider?',
        options: [
          { id: 'A', text: 'Omurilik' },
          { id: 'B', text: 'Hipotalamus' },
          { id: 'C', text: 'Beyincik (Cerebellum) ve Beyin Kabuğu (Bilinçli algı için)' },
          { id: 'D', text: 'Oksipital Lob' },
          { id: 'E', text: 'Hipofiz bezi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bilinçdışı kas dengesi, Göz-Kulak-Kas koordinasyon merkezi olan Beyincik tarafından yönetilir.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'İç kulakta, Salyangoz (İşitme) ile Denge kanalları (Yarım daire) BİRBİRİNE HANGİ YAPI ÜZERİNDEN (Ara odacık) bağlıdır?',
        options: [
          { id: 'A', text: 'Dalız (Vestibül)' },
          { id: 'B', text: 'Kulak zarı' },
          { id: 'C', text: 'Orta kulak boşluğu' },
          { id: 'D', text: 'Östaki borusu' },
          { id: 'E', text: 'Örs kemiği' }
        ],
        correctOptionId: 'A',
        explanation: 'İç kulak anatomisinde ortada bir hol (Dalız) vardır. Tulumcuk/Kesecik buradadır. Ön tarafa Salyangoz, arka tarafa Yarım daire kanalları açılır.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Dış Kulak Yolunda (Kanalda) bulunan Özel Bezlerin salgıladığı, tozu-kiri tutarak koruma sağlayan SARI-KAHVERENGİ maddeye ne denir?',
        options: [
          { id: 'A', text: 'Mukus' },
          { id: 'B', text: 'Tükürük' },
          { id: 'C', text: 'Gözyaşı' },
          { id: 'D', text: 'Serumen (Kulak Kiri / Kulak Mumu)' },
          { id: 'E', text: 'Endolenf' }
        ],
        correctOptionId: 'D',
        explanation: 'Serumen bezi, kulak yolunu böceklerden, tozdan ve bakterilerden koruyan yapışkan kulak kirini (mumunu) üretir.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Çekiç kemiği, Örs kemiği ve Üzengi kemiğinin birbiriyle yaptığı eklem TÜRÜ nedir? (Orta kulaktaki küçük kaldıraçlar)',
        options: [
          { id: 'A', text: 'Oynamaz (Kafatası gibi)' },
          { id: 'B', text: 'Yarı oynar (Omurga gibi)' },
          { id: 'C', text: 'Tam Hareketli (Sinovyal benzeri, gerçek eklemler)' },
          { id: 'D', text: 'Kaslı eklem' },
          { id: 'E', text: 'Zarlı eklem' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemikçikler arasında minyatür düzeyde tam hareketli eklemler vardır (örneğin dizdeki gibi kıkırdaklı ve sıvılı). Bu sayede sürtünmesiz sallanırlar.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Sağır doğan bir çocuğa cerrahi olarak takılan "Biyonik Kulak (Koklear İmplant)" HANGİ YAPIYI BY-PASS (Es geçerek) DOĞRUDAN İŞİTME SİNİRLERİNİ ELEKTRİKLE UYARIR?',
        options: [
          { id: 'A', text: 'Kulak kepçesini' },
          { id: 'B', text: 'Hasarlı veya işlevsiz KORTİ ORGANINI (Tüylü hücreleri)' },
          { id: 'C', text: 'Beyni' },
          { id: 'D', text: 'Omuriliği' },
          { id: 'E', text: 'Görme sinirini' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer Korti tüyleri ölmüşse (sinirsel sağırlık), implant dışarıdaki sesi alır, elektriğe çevirir ve kortiyi atlayarak doğrudan işitme sinir kablosuna akım verir.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Duyu Organları Karışık (Orta Düzey)',
    type: 'medium',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Deride bulunan reseptörlerden HANGİSİNİN (yapısal olarak kapsülsüz serbest sinir ucu olması nedeniyle) ADAPTASYON YETENEĞİ EN DÜŞÜKTÜR?',
        options: [
          { id: 'A', text: 'Pacini cisimciği (Basınç)' },
          { id: 'B', text: 'Meissner cisimciği (Dokunma)' },
          { id: 'C', text: 'Nosiseptörler (Ağrı-Serbest sinir uçları)' },
          { id: 'D', text: 'Ruffini cisimciği (Sıcak)' },
          { id: 'E', text: 'Krause cisimciği (Soğuk)' }
        ],
        correctOptionId: 'C',
        explanation: 'Ağrı reseptörleri (Nosiseptörler) kapsülsüzdür ve tehlike sinyali oldukları için neredeyse hiç adapte olmazlar.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Gözün Damar Tabakasında (Koroid) yer alan PİGMENT hücrelerinin çok olmasının ve gözün içini siyaha boyamasının TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Göze güzel renk vermek' },
          { id: 'B', text: 'Işığın göz içinde YANSIMALAR (Parlama) yapmasını engelleyerek GÖRÜNTÜYÜ NETLEŞTİRMEK' },
          { id: 'C', text: 'Kanı temizlemek' },
          { id: 'D', text: 'Retinayı üretmek' },
          { id: 'E', text: 'Suyu emmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Koroid, fotoğraf makinesinin içinin mat siyah boyanması gibidir. Işığı emer, yansımaları önler ve net (parlamayan) görüş sağlar.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Koku soğancığı (Bulbus olfactorius) beynin neresinde yer alır ve hangi BEYİN SİSTEMİYLE doğrudan bağlantılıdır?',
        options: [
          { id: 'A', text: 'Omurilikte - Motor sistem' },
          { id: 'B', text: 'Beyin kabuğunun altında - Limbik sistem (Duygu ve hafıza)' },
          { id: 'C', text: 'Beyincikte - Denge sistemi' },
          { id: 'D', text: 'Oksipital lobda - Görme sistemi' },
          { id: 'E', text: 'Omurilik soğanında - Solunum sistemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku soğancığı alın korteksinin altında Limbik sisteme çok yakındır. Bu yüzden kokular duyguları (amigdala) ve anıları (hipokampus) çok hızlı tetikler.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Tatlı, Tuzlu ve Ekşi tatların algılanma mekanizmaları (Hücre içine girişleri) KİMYASAL AÇIDAN birbirlerinden farklıdır. Örneğin TUZLU TAT (NaCl) hücresel düzeyde nasıl bir tepki başlatır?',
        options: [
          { id: 'A', text: 'Na+ iyonlarının (Sodyum) doğrudan kanallardan hücreye girip, zar potansiyelini (Depolarizasyon) bozmasıyla' },
          { id: 'B', text: 'ATP harcayarak tatlılık pompalamasıyla' },
          { id: 'C', text: 'Hücreyi öldürmesiyle' },
          { id: 'D', text: 'Mekanik basınç yapmasıyla' },
          { id: 'E', text: 'Rodopsin kullanmasıyla' }
        ],
        correctOptionId: 'A',
        explanation: 'Tuz (Na+) ve Ekşi (H+) basit iyonlardır. Doğrudan iyon kanallarından hücreye sızarak depolarizasyona (elektriklenmeye) neden olurlar. Tatlı, acı ve umami ise daha karmaşık G-protein reseptörleriyle algılanır.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Görme ile işitme duyusunun MERKEZİ SİNİR SİSTEMİNE GİDİŞ YOLLARINDAKİ EN BELİRGİN fark nedir?',
        options: [
          { id: 'A', text: 'İkisi de Talamus\'a uğramaz' },
          { id: 'B', text: 'Görme sinirleri Oksipital Loba, İşitme sinirleri Temporal Loba gider (ve her ikisi de Talamus\'tan geçer)' },
          { id: 'C', text: 'Görme omuriliğe, işitme beyne gider' },
          { id: 'D', text: 'Sadece görme talamusa uğrar' },
          { id: 'E', text: 'Sadece işitme çapraz yapar' }
        ],
        correctOptionId: 'B',
        explanation: 'Hem görme hem işitme Talamusa uğrar (Koku hariç hepsi uğrar). Temel fark, son duraklarının (Korteks loblarının) farklı olmasıdır (Mekansal kodlama).'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Göz Uyumu (Akomodasyon) yeteneği olmayan, yani merceğinin kalınlığı SABİT KALAN (Örn: Cam veya plastik protez mercek takılmış) bir kişinin görmesi nasıldır?',
        options: [
          { id: 'A', text: 'Tamamen kördür.' },
          { id: 'B', text: 'Sadece tek bir uzaklığı NET görebilir, diğer uzaklıkları BULANIK görür (Tıpkı sabit odaklı kamera gibi).' },
          { id: 'C', text: 'Hem yakını hem uzağı HD kalitesinde görür.' },
          { id: 'D', text: 'Sadece siyah beyaz görür.' },
          { id: 'E', text: 'Sürekli çift görür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mercek kasılamazsa "Odaklanma (Oto-Focus)" yapılamaz. Kişi katarakt ameliyatında sabit odaklı lens takarsa, örneğin uzağı net, yakını okumak için okuma gözlüğü takması gerekir.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Derinin EN ÜST TABAKASI olan Epidermis hücrelerinin yapısında (Özellikle Korun tabakasında) bolca bulunan, deriyi su geçirmez ve dayanıklı yapan, aynı zamanda SAÇ ve TIRNAĞIN da hammaddesi olan PROTEİN nedir?',
        options: [
          { id: 'A', text: 'Kolajen' },
          { id: 'B', text: 'Miyozin' },
          { id: 'C', text: 'Keratin' },
          { id: 'D', text: 'Albumin' },
          { id: 'E', text: 'Fibrinojen' }
        ],
        correctOptionId: 'C',
        explanation: 'Üst deri hücreleri ölürken içlerini Keratin proteini doldurur. Keratin; deri yüzeyi, saç, tırnak, boynuz gibi yapıların ana maddesidir.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Gözyaşı, Tükürük, Ter ve Burun Mukusu gibi DIŞARI SALGILANAN (Ekzokrin) sıvılar, hangi dokunun salgı yapabilme özelliğinden (Salgı Epiteli) kaynaklanır?',
        options: [
          { id: 'A', text: 'Sinir Dokusu' },
          { id: 'B', text: 'Kas Dokusu' },
          { id: 'C', text: 'Bağ Dokusu' },
          { id: 'D', text: 'Epitel Doku' },
          { id: 'E', text: 'Kan Dokusu' }
        ],
        correctOptionId: 'D',
        explanation: 'Vücudumuzdaki bütün bezler (Tükürük, ter, mide bezi, tiroid vb.) Epitel Dokunun hücrelerinin (Salgı epiteli) özelleşmesiyle oluşur.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Bütün duyu reseptörleri belirli bir uyarana spesifiktir. Ancak BİR UYARAN TÜRÜ diğerlerinden farklı olarak BİRÇOK farklı reseptör (Tat, koku, deri, göz) tarafından (Farklı boyutlarıyla) HİSSEDİLEBİLİR. Bu çok boyutlu (Ağrı, basınç, doku yıkımı da içeren) kavram hangisidir?',
        options: [
          { id: 'A', text: 'Işık' },
          { id: 'B', text: 'Ağrı / Acı' },
          { id: 'C', text: 'Ses' },
          { id: 'D', text: 'Tat' },
          { id: 'E', text: 'Renk' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağrı/Acı; kimyasal, termal, mekanik gibi şiddetli her uyarının doku yıkımı başlatmasıyla birçok farklı kanalın (Nosiseptörler) aktifleştiği karmaşık bir duyudur.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Görme ve İşitme engelli olup da SADECE DOKUNARAK (Ve koku-tat ile) dünyayı anlayan (Örn: Helen Keller) birinin, DOKUNMA duyusunun inanılmaz gelişmesinin altında yatan SİNİRSEL (Nörolojik) TEMEL nedir?',
        options: [
          { id: 'A', text: 'Derisinin daha kalın olması' },
          { id: 'B', text: 'Beyin Korteksindeki (Parietal Lob) dokunma alanı nöronlarının SAYISININ ve SİNAPS yoğunluğunun artarak (Kortikal Yeniden Düzenlenme/Plastisite) Görme ve İşitme alanlarına KADAR yayılması' },
          { id: 'C', text: 'Ellerindeki kemiklerin büyümesi' },
          { id: 'D', text: 'Burnunun daha büyük olması' },
          { id: 'E', text: 'Parmaklarında göz çıkması' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyin plastiktir (şekillenebilir). Gözden sinyal gelmeyen Oksipital loba, ellerden gelen dokunma sinyalleri yönlendirilir ve beynin daha büyük bir alanı dokunmayı işler.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Neden yüksek dağlara (Rakımın yüksek olduğu ve oksijenin düştüğü yere) aniden çıkan birinde, BULANTI, BAŞ DÖNMESİ ve DENGE KAYBI (İç kulakla ilgili görünse de) yaşanabilir?',
        options: [
          { id: 'A', text: 'Dağın dönmesi' },
          { id: 'B', text: 'Kulak içindeki basıncın DÜŞÜP Otolitleri parçalaması' },
          { id: 'C', text: 'Oksijensiz kalan BEYİNCİĞİN (Denge Merkezi) ve KORTEKSİN görevini tam yapamaması, ayrıca İç Kulak sıvılarındaki basınç değişikliklerinin Denge Reseptörlerini uyarması' },
          { id: 'D', text: 'Dağda ışığın az olması' },
          { id: 'E', text: 'Koku reseptörlerinin donması' }
        ],
        correctOptionId: 'C',
        explanation: 'Rakım (İrtifa) hastalığında, hem beyincik oksijensiz kalır hem de düşük dış basınç yüzünden iç kulak ve vücut sıvıları dışarı doğru genleşerek (şişerek) denge hücrelerini bozar.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Orta kulakta bulunan kaslar (örneğin Üzengi kası), ÇOK ŞİDDETLİ (Örn: Patlama) bir ses geldiğinde REFLEKS OLARAK kasılır. Bu kasılmanın AMACI nedir?',
        options: [
          { id: 'A', text: 'Kulağı sağır etmek' },
          { id: 'B', text: 'Kemikçikleri (Çekiç-Örs-Üzengi) BİRBİRİNE KİLİTLEYEREK (Sertleştirerek) sesin iç kulağa iletimini (Zarar vermesini) ENGELLEMEK (Akustik Refleks)' },
          { id: 'C', text: 'Zarı patlatmak' },
          { id: 'D', text: 'Östaki borusunu kapatmak' },
          { id: 'E', text: 'Sesin şiddetini artırmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok yüksek seste (Akustik refleks), orta kulak kasları aniden kasılarak kemikleri sıkar. Böylece titreşim sönümlenir ve salyangoz hasardan korunur.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Tat ve Koku hücreleri yorulduklarında "Duyu Adaptasyonu" yaşanır. Ancak DİLİMİZDEKİ tatlardan HANGİSİNE karşı adaptasyon DİĞERLERİNE GÖRE daha yavaştır (Tehlike sinyali olduğu için)?',
        options: [
          { id: 'A', text: 'Tatlı' },
          { id: 'B', text: 'Tuzlu' },
          { id: 'C', text: 'Acı ve Aşırı Ekşi (Zehir/Bozuk gıda ihtimali)' },
          { id: 'D', text: 'Umami (Etli)' },
          { id: 'E', text: 'Su tadı' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada Acı genelde zehirli bitkiler, Ekşi ise bozulmuş (bakterili) gıdalar demektir. Beyin bu uyarıları "Tehlike" olarak görür ve adaptasyonu yavaşlatır ki yemeyi hemen bırakalım.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Gözde "Sarı Nokta" ve "Kör Nokta" bulunurken, Burunda "Sarı Bölge" bulunur. Bu bölgelerden HANGİSİNDE BİYOLOJİK OLARAK "RESEPTÖR HÜCRESİ" YOKTUR?',
        options: [
          { id: 'A', text: 'Sarı Nokta' },
          { id: 'B', text: 'Kör Nokta (Optik Disk)' },
          { id: 'C', text: 'Sarı Bölge' },
          { id: 'D', text: 'Hepsi reseptör doludur' },
          { id: 'E', text: 'Hiçbirinde reseptör yoktur' }
        ],
        correctOptionId: 'B',
        explanation: 'Kör nokta, optik sinirlerin ve kan damarlarının gözden çıkış kapısıdır. Orada alan olmadığı için Fotoreseptör bulunmaz (Görüntü kör noktaya düşerse görülmez).'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Duyu Organları ile Homeostazi (İç denge) arasındaki bağlantıyı EN İYİ HANGİ İFADE AÇIKLAR?',
        options: [
          { id: 'A', text: 'Duyu organları sadece dış görünüşümüzü güzelleştirir.' },
          { id: 'B', text: 'Duyu organları Merkezi Sinir Sisteminin DIŞ DÜNYADAKİ HABERCİLERİDİR. Gelen bilgilere göre (Örn: Soğuk hava) sistem tepki vererek (Titreme) iç dengeyi korur.' },
          { id: 'C', text: 'Duyu organları sadece yemek yemek içindir.' },
          { id: 'D', text: 'Duyu organları homeostaziyi bozar.' },
          { id: 'E', text: 'Duyu organları kan hücrelerini üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudun iç ortamını koruyabilmesi için dışarıda ne olup bittiğini bilmesi gerekir. Duyu sistemleri veri toplar (Input), beyin bu verilerle hayatta kalma (Homeostazi) tepkileri üretir (Output).'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konunun Tamamını Ölçen 10 Soru',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Fotoreseptörlerin (Çubuk ve Koniler) İLK OLARAK uyarılması (elektrik üretmesi) için gerçekleşmesi gereken KİMYASAL OLAY nedir?',
        options: [
          { id: 'A', text: 'Kasın kasılması' },
          { id: 'B', text: 'Işığın çarpmasıyla içlerindeki PİGMENT MOLEKÜLÜNÜN (Örn: Rodopsin) şekil değiştirmesi ve parçalanması' },
          { id: 'C', text: 'Kanın ısınması' },
          { id: 'D', text: 'Gözyaşının artması' },
          { id: 'E', text: 'Kemiğin bükülmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Görme kimyasal bir olayla başlar. Işık pigment molekülüne çarpar, pigment parçalanır ve bu parçalanma hücrenin elektrik üretmesine (Aksiyon potansiyeli) neden olur.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Sesin şiddeti (Genliği) ile Frekansı (İnceliği/Kalınlığı) Salyangozda FARKLI ŞEKİLLERDE kodlanır. Buna göre ŞİDDETLİ (Yüksek) bir sesi, YAVAŞ (Düşük) bir sesten ayıran BİYOLOJİK FARK nedir?',
        options: [
          { id: 'A', text: 'Titreşen Korti hücrelerinin sayısı ve onlardan çıkan impuls FREKANSININ daha yüksek olması' },
          { id: 'B', text: 'Farklı bir loba gitmesi' },
          { id: 'C', text: 'Salyangozun boyunun uzaması' },
          { id: 'D', text: 'Kulak zarının renginin değişmesi' },
          { id: 'E', text: 'Östaki borusunun kapanması' }
        ],
        correctOptionId: 'A',
        explanation: 'Şiddet (Gürlük), impuls frekansını (sıklığını) ve o bölgede ateşlenen nöron sayısını artırarak kodlanır. (Frekans ise zarın HANGİ BÖLGESİNİN titreştiğine göre anlaşılır).'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Göz Merceğinin kırıcılığı SABİT DEĞİLDİR. Yakına bakarken kırıcılığının ARTMASININ fiziksel sebebi nedir?',
        options: [
          { id: 'A', text: 'Merceğin kararması' },
          { id: 'B', text: 'Kirpiksi kasların kasılarak asıcı bağları gevşetmesi sonucu merceğin ŞİŞKİNLEŞMESİ (Kalınlaşması)' },
          { id: 'C', text: 'Merceğin tamamen yok olması' },
          { id: 'D', text: 'Gözyaşının artması' },
          { id: 'E', text: 'Korneanın dökülmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Yakın cisimlerden gelen ışınlar çok dağılır. Bunları toplamak için mercek daha kalın (tombul) bir hale gelerek kırıcılığını artırmalıdır (Göz Uyumu).'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Tat ve Koku duyularının "Lezzet" oluşturmak için beyinde ortak çalıştığı bilinir. Ancak Kokunun bir ayrıcalığı vardır, o da Talamus\'a uğramamasıdır. Bunun evrimsel/hayatta kalma ile ilgili FAYDASI ne olabilir?',
        options: [
          { id: 'A', text: 'Hiçbir faydası yoktur, hatadır.' },
          { id: 'B', text: 'Tehlikeli kokulara (Ateş, yırtıcı, bozuk yemek) karşı DÜŞÜNMEDEN (Kortekse gitmeden) çok hızlı bir duygusal (Korku/Kaçış) tepkisi oluşturabilmek' },
          { id: 'C', text: 'Daha iyi duymak' },
          { id: 'D', text: 'Gözleri açmak' },
          { id: 'E', text: 'Kasları dinlendirmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Koku çok ilkeldir ve doğrudan limbik sisteme (Amigdala) gider. Tehlike kokusu (Duman vb.) düşünülmeden anında refleksif kaçış/korku tepkisi yaratır.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Soğuk bir havada dışarıdan sıcak odaya girdiğimizde, yüzümüzdeki kızarmanın (Isı algısının) DERİDEKİ hangi süreçle ilgisi vardır?',
        options: [
          { id: 'A', text: 'Termoreseptörlerin kan damarlarını YANILTIP daraltmasıyla' },
          { id: 'B', text: 'Termoreseptörlerin algıladığı ısı değişimi sonucu Otonom sistemin derideki kılcal damarları GENİŞLETEREK (Vazodilatasyon) fazla ısıyı atmaya çalışmasıyla' },
          { id: 'C', text: 'Derinin kurumasıyla' },
          { id: 'D', text: 'Göz yaşarmasıyla' },
          { id: 'E', text: 'Saçların dökülmesiyle' }
        ],
        correctOptionId: 'B',
        explanation: 'Deri duyuları (ısı), merkezi sinir sistemine "Dışarısı sıcak" der. Beyin, vücut serinlesin diye derideki damarları genişletir (Kan yüze hücum eder, kızarırız).'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Görme ve İşitme sistemlerinin ANATOMİK YOLLARINDA, dış ortamdan gelen uyarının Merkezi Sinir Sistemine (Beyne) geçerken aştığı "GÜVENLİK/KONTROL" noktaları (bariyerleri) nelerdir?',
        options: [
          { id: 'A', text: 'Hiçbir engel yoktur.' },
          { id: 'B', text: 'Gözde Kornea ve Gözyaşı; Kulakta Kulak kiri (Serumen) ve Kulak zarı' },
          { id: 'C', text: 'Kaslar ve kemikler' },
          { id: 'D', text: 'Akciğerler' },
          { id: 'E', text: 'Mide asidi' }
        ],
        correctOptionId: 'B',
        explanation: 'Dış dünya mikroplarla doludur. Gözde kornea (ve içindeki lizozim) ile göz kapağı; kulakta ise serumen ve fiziksel bariyer olan timpanik zar beyni enfeksiyondan korur.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Bütün duyu organları "Uyarana karşı ADAPTE OLMA" (Duyarsızlaşma) özelliğine sahiptir. Peki neden GÖZÜMÜZ (Görme) bir nesneye uzun süre baktığımızda o nesneyi GÖRMEMEZLİK etmez (Göz neden adapte olmaz)?',
        options: [
          { id: 'A', text: 'Çünkü göz çok büyüktür.' },
          { id: 'B', text: 'Göz küresi GÖRÜNMEZ MİKRO-TİTREŞİMLER (Sakkadik hareketler) yaparak, görüntüyü retinadaki farklı reseptörlere sürekli kaydırır ve adaptasyonu ENGELLER' },
          { id: 'C', text: 'Gözyaşı olduğu için' },
          { id: 'D', text: 'Beyin izin vermediği için' },
          { id: 'E', text: 'Mercek döndüğü için' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz kasları sürekli olarak çok hızlı ve minik titreşimler yapar. Bu sayede aynı fotoreseptör yorulmaz, sürekli taze bir hücre uyarılır ve görüntü silinmez.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Mekanoreseptör (Basınç) hücresinde Aksiyon potansiyelinin (İmpulsun) BAŞLAMASI İÇİN ilk gerçekleşen hücresel olay nedir?',
        options: [
          { id: 'A', text: 'Hücrenin bölünmesi' },
          { id: 'B', text: 'Hücre zarının GERİLMESİ sonucu zardaki İYON KANALLARININ MEKANİK OLARAK AÇILMASI (Sodyum girişi)' },
          { id: 'C', text: 'Fotosentez yapması' },
          { id: 'D', text: 'ATP üretmesi' },
          { id: 'E', text: 'Pigment parçalanması' }
        ],
        correctOptionId: 'B',
        explanation: 'Mekanoreseptörlerin zarları lastik gibidir. Basınç geldiğinde zar gerilir, zarın üstündeki iyon kapıları fiziksel olarak "esneyip" açılır ve içeri Sodyum (Na+) girerek impuls başlatır.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Kulakta İşitme kaybı "İletim Tipi" ve "Sensörinöral (Sinirsel) Tip" olmak üzere ikiye ayrılır. Eğer bir kişi, sesi KEMİK YOLUYLA (Kafatası titreştirilerek) DUYABİLİYOR ancak Havayoluyla DUYAMIYORSA, sorun neresindedir?',
        options: [
          { id: 'A', text: 'Beynindedir (Korteks)' },
          { id: 'B', text: 'Dış veya Orta Kulaktadır (Zar veya Kemikçikler çalışmıyordur, İletim Tipi Sağırlık)' },
          { id: 'C', text: 'Salyangozdadır' },
          { id: 'D', text: 'İşitme sinirindedir' },
          { id: 'E', text: 'Oksipital lobdadır' }
        ],
        correctOptionId: 'B',
        explanation: 'Kafatası kemikleri titreştirildiğinde ses doğrudan Salyangoza iletilir. Kişi bunu duyuyorsa Salyangoz ve Siniri sağlamdır. Havadan duyamıyorsa sorun Dışkulak yolu, Zar veya Orta kulak kemikçiklerindedir.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Duyu organlarının SAĞLIKLI çalışması için Beslenmenin (Vitaminlerin) rolü büyüktür. A Vitamini Gece Körlüğünü önlerken, E Vitamini ve Çinko genel olarak neden ÖNEMLİDİR?',
        options: [
          { id: 'A', text: 'Kulak zarını sertleştirmek için' },
          { id: 'B', text: 'Fotoreseptörleri ve hücre zarlarını Oksidatif Strese (Yaşlanmaya) karşı koruyan ANTİOKSİDANLAR oldukları için' },
          { id: 'C', text: 'Burnu büyütmek için' },
          { id: 'D', text: 'Kan yapımını durdurmak için' },
          { id: 'E', text: 'Tırnak uzatmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Retina bol oksijen tüketen bir yerdir ve bu yüzden çok fazla serbest radikal (zararlı madde) üretir. Antioksidan vitaminler (A, C, E) makula dejenerasyonu (sarı nokta hastalığı) ve kataraktı geciktirir.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek Yorum ve Birleştirilmiş Kazanımlar',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Deney: Bir kurbağanın gözüne giden optik siniri kesilmiş ve kurbağa kör olmuştur. Daha sonra bu optik sinir (gözden çıkan) yanlışlıkla kurbağanın KOKU MERKEZİNE (Limbik sisteme) dikilmiştir. Sinirler iyileştikten sonra kurbağanın gözüne şiddetli bir ışık tutulmuştur.\nBu durumda, kurbağanın BEYNİNDE ışığa karşı nasıl bir ALGI oluşması BAŞLAMIŞTIR?',
        options: [
          { id: 'A', text: 'Işığı görmeye devam etmiştir, çünkü sinirler kendini düzeltir.' },
          { id: 'B', text: 'Gözünden yaş gelmiştir.' },
          { id: 'C', text: 'Algı KOKU merkezine düştüğü için, beyin bu ışık bilgisini BİR KOKU (veya korku/duygu) olarak algılamıştır (Mekansal kodlama prensibi).' },
          { id: 'D', text: 'Hiçbir algı oluşmamıştır.' },
          { id: 'E', text: 'Sesi duymuştur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sinir telinde taşınan aksiyon potansiyelinin özelliği yoktur. Gelen kablonun bağlandığı LOB, gelen sinyalin ne olarak algılanacağını belirler.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Bir kişinin sağ Gözünün sadece YARI KISMI (Burun tarafı) körleşmişse, ancak sol gözü tamamen sağlamsa. Göz doktoru, hastanın beyninin çekilen MR\'ına baktığında sorunun (tümörün) NEREDE olduğunu tespit edebilir?',
        options: [
          { id: 'A', text: 'Sadece sağ gözün korneasında' },
          { id: 'B', text: 'Optik Kiazma bölgesinde (Görme sinirlerinin çapraz yaptığı yerin kısmi zedelenmesi)' },
          { id: 'C', text: 'Beyincikte' },
          { id: 'D', text: 'Sol gözün retinasında' },
          { id: 'E', text: 'Kulakta' }
        ],
        correctOptionId: 'B',
        explanation: 'Optik kiazmada görme alanları bölünür. Sağ gözün burun tarafı (iç tarafı) çaprazlanarak sol loba giderken, dış tarafı çaprazlanmadan sağ loba gider. Yarım alan körlükleri Kiazma lezyonlarını (örn: hipofiz tümörü) gösterir.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Karanlıkta otururken, bir arkadaşınız aniden gözünüze fener tuttuğunda hem Göz Bebeğiniz KÜÇÜLÜR (Daralır), hem de Göz kapaklarınızı KISARSINIZ.\nBu iki olayın SİNİRSEL YOLLARI (Refleks yayları) eşleştiğinde hangisi doğrudur?',
        options: [
          { id: 'A', text: 'İkisi de tamamen iradidir (Uç beyin).' },
          { id: 'B', text: 'İkisi de omurilik refleksidir.' },
          { id: 'C', text: 'Göz bebeği daralması OTONOM (Orta beyin) sistemle; Göz kırpma/kısma ise SOMATİK (Çizgili kaslar) motor refleksle gerçekleşir.' },
          { id: 'D', text: 'İkisi de beyincikle gerçekleşir.' },
          { id: 'E', text: 'İkisi de sadece hormonlarla gerçekleşir.' }
        ],
        correctOptionId: 'C',
        explanation: 'İris (Düz kas) istemsiz-otonom çalışır, göz kapağı (Çizgili kas) ise somatik sinirlerce uyarılır. Beyin her ikisini de refleks olarak (farklı yollardan) devreye sokar.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Denge sistemimizdeki (Tulumcuk, Kesecik) Otolit taşları Kalsiyum Karbonat yapılıdır ve SÜREKLİ YERÇEKİMİ yönünde dururlar. Uzayda, AĞIRLIKSIZ ORTAMDA (Yerçekimi sıfır) uzun süre kalan astronotların, UZAY TUTMASI (Bulantı) yaşamasının BİYOFİZİKSEL sebebi nedir?',
        options: [
          { id: 'A', text: 'Taşların erimesi' },
          { id: 'B', text: 'Yerçekimi olmadığı için Otolitlerin TÜY HÜCRELERİNE baskı YAPAMAMASI ve beynin VÜCUT KONUMU (Yukarı/Aşağı) bilgisinden mahrum kalıp sistem karmaşası yaşaması' },
          { id: 'C', text: 'Salyangozun patlaması' },
          { id: 'D', text: 'Görme sinirinin uzaması' },
          { id: 'E', text: 'Talamusun durması' }
        ],
        correctOptionId: 'B',
        explanation: 'Otolitler yerçekimine ihtiyaç duyar. Uzayda ağırlıksız ortamda taşlar boşlukta yüzer, beyin "Aşağısı neresi?" sorusuna cevap bulamaz ve bulantı (uzay hastalığı) başlar.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Deri, sadece dokunma değil SICAĞI ve SOĞUĞU DA hisseder (Termoreseptörler). Eğer bir kişinin derisindeki SADECE SOĞUK RESEPTÖRLERİNİ uyuşturan (felç eden) özel bir ilaç sürülürse ve kişi ELİNİ ÇOK SOĞUK BİR BUZA DEĞDİRİRSE beynine HANGİ SİNYAL GİDER?',
        options: [
          { id: 'A', text: 'Soğuğu daha net hisseder.' },
          { id: 'B', text: 'Sadece AĞRI (Nosiseptör) uyarılır ve kişi buzu "YAKICI BİR ACI" olarak hisseder (Soğuk olduğu bilgisini alamaz).' },
          { id: 'C', text: 'Hiçbir şey hissetmez.' },
          { id: 'D', text: 'Tatlı hisseder.' },
          { id: 'E', text: 'Kaşıntı hisseder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşırı soğuk (Buz), hem soğuk reseptörlerini hem de AĞRI reseptörlerini aynı anda ateşler. Soğuk hattı kesilirse, beyne sadece "AĞRI" sinyali ulaşır. Bu yüzden aşırı soğuk "yakıcı (acı verici)" gelir.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Talamus, Koklama DUYUSU HARİÇ tüm duyuların toplanıp değerlendirildiği ve ilgili Korteks alanına yönlendirildiği yerdir. Neden Koku, Talamus\'tan EVRİMSEL OLARAK MUAF TUTULMUŞTUR (Geçmez)?',
        options: [
          { id: 'A', text: 'Kokunun beyne zarar vermesi' },
          { id: 'B', text: 'Talamusun yerinin uzak olması' },
          { id: 'C', text: 'Kokunun en ilkel duyu olması ve Evrimsel süreçte Korteksten ÖNCE Limbik Sistem (Duygu, korku, bellek, hayatta kalma) ile doğrudan entegre gelişmesi' },
          { id: 'D', text: 'Burnun ortada olması' },
          { id: 'E', text: 'Talamusun kokuyu filtrelemesi' }
        ],
        correctOptionId: 'C',
        explanation: 'İlkel canlılarda koku (Kimyasal algı) besin bulma ve tehlikeden kaçmanın tek yoluydu. Beyin (Korteks) henüz çok gelişmemişken, bu sinyaller doğrudan hayatta kalma merkezine (Limbik) bağlıydı. İnsanda da bu eski yol korunmuştur.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'İki kulağımız olması (Stereo İşitme), bize BİR SES KAYNAĞININ YÖNÜNÜ (Sesin sağdan mı soldan mı geldiğini) bulma yeteneği verir. Beynimiz bu "Yön tayinini" HANGİ İKİ FİZİKSEL HESAPLAMAYLA YAPAR?',
        options: [
          { id: 'A', text: 'Sesin rengini ayırarak' },
          { id: 'B', text: 'Sesin Tizliği ve Baslığıyla' },
          { id: 'C', text: 'Ses Dalgalarının İKİ KULAĞA ULAŞMA ZAMANLARI arasındaki mikro-saniye farkını ve KULAKLARA ULAŞAN SES ŞİDDETİ FARKINI hesaplayarak' },
          { id: 'D', text: 'Gözlerle birleştirerek' },
          { id: 'E', text: 'Denge sıvısını kullanarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Ses sağdan gelirse sağ kulağa 0.001 sn daha önce ve daha şiddetli (gür) ulaşır. Beyin sapındaki devreler bu minicik farkı anında hesaplar ve sesin yönünü bize hissettirir.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Dilde bulunan TAT TOMURCUKLARININ, Gözdeki Fotoreseptörler veya İç Kulaktaki Tüylü hücrelere göre çok daha YÜKSEK BİR HÜCRE YENİLENME (Rejenerasyon) hızına sahip olmasının ANA FİZYO-KİMYASAL nedeni nedir?',
        options: [
          { id: 'A', text: 'Dilin sürekli hareket etmesi' },
          { id: 'B', text: 'Göz ve kulağın dış ortama kapalı ve korunaklı olması, DİLİN (ve burnun) ise çok sıcak, asitli, sert (Aşındırıcı) ve toksik maddelerle DOĞRUDAN TEMAS ederek sürekli YIPRANMASI' },
          { id: 'C', text: 'Dilde kan bulunmaması' },
          { id: 'D', text: 'Sürekli konuşmamız' },
          { id: 'E', text: 'Tat hücrelerinin büyük olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotoreseptörler (Göz) ve Korti hücreleri (Kulak) çok derinde, sıvı içinde, korunaklı yaşar (O yüzden yenilenmezler, ölürlerse kalıcı kayıp olur). Tat hücreleri ise cephe hattındadır, her yemekte yanar veya çizilir, mecbur yenilenmek zorundadır.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Bir göz hastası doktora, "Geceleri iyi görüyorum ama gündüz GÜNEŞLİ havada RENKLERİ SEÇEMİYOR, bulanık görüyor ve nesnelerin kenarlarını NET ALGILAYAMIYORUM" derse, doktor HANGİ RESEPTÖRLERDE ve HANGİ BÖLGEDE hasar arar?',
        options: [
          { id: 'A', text: 'Kör noktadaki Çubuk hücrelerinde' },
          { id: 'B', text: 'Sarı benek (Fovea) bölgesindeki KONİ hücrelerinde (Makula dejenerasyonu şüphesi)' },
          { id: 'C', text: 'Korneanın kenarlarında' },
          { id: 'D', text: 'Göz merceğinin kaslarında' },
          { id: 'E', text: 'İrisin düz kaslarında' }
        ],
        correctOptionId: 'B',
        explanation: 'Gündüzleri, aydınlığı, netliği (keskinliği) ve renkleri sağlayan yer Sarı noktadaki (Merkezdeki) Koni hücreleridir. Bunların ölmesine Makula dejenerasyonu denir (Santral körlük yaratır).'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Duyu-Motor bütünleşmesi sorusu: Bir öğrenci karanlıkta masanın üzerindeki SICAK BİR BARDAĞA elini değdirir değdirmez ELİNİ ÇEKER (Refleks) ve hemen ardından "Elini sallar ve OF SICAK" der (Algı/Bilinç). Bu sürecin kronolojik sinirsel yolu nasıl gerçekleşmiştir?',
        options: [
          { id: 'A', text: 'Önce acıyı hisseder, sonra beyin düşünür, en son elini çeker.' },
          { id: 'B', text: 'Bilgi önce Termoreseptör -> Duyu Nöronu -> OMURİLİK (Motor nöronla anında eli çekme refleksi) -> Eşzamanlı olarak bilgi BEYNE (Talamus -> Parietal Lob) gider ve saniyeler sonra acı BİLİNÇLİ HİSSEDİLİR.' },
          { id: 'C', text: 'Sadece omurilik devreye girer, beyin acıyı hiç hissetmez.' },
          { id: 'D', text: 'Sıcaklık sadece gözle görülür, kulakla duyulur.' },
          { id: 'E', text: 'Limbik sistem kasları kasar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Korunma refleksi Omurilikte anında (beyni beklemeden) yapılır (El çekilir). Ancak acının "Sıcak" olarak anlamlandırılması bilginin beyne (Parietal Somatosensoriyel Korteks) ulaşmasından sonra (biraz gecikmeli) olur.'
      }
    ]
  }
]
