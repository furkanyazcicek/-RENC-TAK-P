export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Kalbin Yapısı ve Damarlar (Çok Kolay)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Kalbin kas tabakası olan ve kanı pompalama görevini üstlenen yapıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Endokart' },
          { id: 'B', text: 'Miyokart' },
          { id: 'C', text: 'Perikart' },
          { id: 'D', text: 'Plevra' },
          { id: 'E', text: 'Menenjit' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp duvarı dıştan içe perikart, miyokart (kas) ve endokarttan oluşur. Pompalama işini yapan miyokarttır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Atardamar (arter) ile toplardamar (ven) arasındaki temel isimlendirme kuralı nedir?',
        options: [
          { id: 'A', text: 'Atardamarlar her zaman temiz, toplardamarlar her zaman kirli kan taşır.' },
          { id: 'B', text: 'Kalpten ÇIKAN damarlara atardamar, kalbe GELEN damarlara toplardamar denir.' },
          { id: 'C', text: 'Sadece kalbin sağındaki damarlar atardamardır.' },
          { id: 'D', text: 'Sadece bacaklardaki damarlara toplardamar denir.' },
          { id: 'E', text: 'İkisinin de görevi aynıdır, isimlendirme rastgeledir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Damarların adı taşıdıkları kana göre değil, kalbe olan yönlerine göre belirlenir. Kalpten kanı uzaklaştıran atardamar, kalbe getiren toplardamardır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'İnsan kalbinde toplam kaç odacık bulunur?',
        options: [
          { id: 'A', text: 'İki (Bir kulakçık, bir karıncık)' },
          { id: 'B', text: 'Üç (İki kulakçık, bir karıncık)' },
          { id: 'C', text: 'Dört (İki kulakçık, iki karıncık)' },
          { id: 'D', text: 'Beş' },
          { id: 'E', text: 'Altı' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsan kalbi 4 odacıklıdır: Sağ ve sol atriyumlar (kulakçıklar) ile sağ ve sol ventriküller (karıncıklar).'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Vücuttan kirlenmiş (oksijeni azalmış) olarak dönen kan, kalbin İLK OLARAK hangi odacığına dökülür?',
        options: [
          { id: 'A', text: 'Sağ Karıncık (Ventrikül)' },
          { id: 'B', text: 'Sağ Kulakçık (Atriyum)' },
          { id: 'C', text: 'Sol Karıncık' },
          { id: 'D', text: 'Sol Kulakçık' },
          { id: 'E', text: 'Aort' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücuttan gelen alt ve üst ana toplardamarlar, kirli kanı kalbin sağ atriyumuna (kulakçığına) getirir.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Sol karıncıktan (ventrikülden) çıkan ve oksijence zengin temiz kanı tüm vücuda dağıtan en büyük atardamarın adı nedir?',
        options: [
          { id: 'A', text: 'Akciğer atardamarı' },
          { id: 'B', text: 'Şah damarı' },
          { id: 'C', text: 'Aort' },
          { id: 'D', text: 'Ana toplardamar' },
          { id: 'E', text: 'Koroner damar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalbin sol karıncığından çıkan ve temiz kanı tüm vücuda dağıtan ana atardamar Aort damarıdır.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Kanın sağ kulakçıktan sağ karıncığa geçerken geri kaçmasını önleyen kapakçık hangisidir?',
        options: [
          { id: 'A', text: 'Mitral (Biküspit) kapak' },
          { id: 'B', text: 'Triküspit (Üçlü) kapak' },
          { id: 'C', text: 'Aort yarımay kapağı' },
          { id: 'D', text: 'Akciğer yarımay kapağı' },
          { id: 'E', text: 'Venöz kapak' }
        ],
        correctOptionId: 'B',
        explanation: 'Sağ kulakçık ile sağ karıncık arasında üç parçalı olan Triküspit kapak bulunur.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Akciğer atardamarında bulunan kanın OKSİJEN durumu nasıldır?',
        options: [
          { id: 'A', text: 'Oksijence çok zengindir.' },
          { id: 'B', text: 'Oksijence fakirdir (Kirli kandır).' },
          { id: 'C', text: 'İçinde hiç kan yoktur, hava taşır.' },
          { id: 'D', text: 'Lenf sıvısı taşır.' },
          { id: 'E', text: 'Su taşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Akciğer atardamarı, sağ karıncıktan çıkarak temizlenmek üzere akciğere kan götürür, bu nedenle taşıdığı kan kirli (oksijence fakir) kandır. Atardamar olması temiz kan taşıdığı anlamına gelmez.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Kalbin miyokart tabakasını (kalp kasını) besleyen ve tıkandığında kalp krizine yol açan özel damarlara ne denir?',
        options: [
          { id: 'A', text: 'Karotis damarları' },
          { id: 'B', text: 'Koroner damarlar' },
          { id: 'C', text: 'Lenf damarları' },
          { id: 'D', text: 'Renal damarlar' },
          { id: 'E', text: 'Hepatik damarlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalbin kendisini besleyen, aorttan ayrılan damarlara Koroner damarlar denir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Küçük dolaşımın amacı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kanı beyne taşımak' },
          { id: 'B', text: 'Kanı temizlenmesi (oksijenlenmesi) için akciğerlere götürüp kalbe geri getirmek' },
          { id: 'C', text: 'Sindirim sisteminden besin toplamak' },
          { id: 'D', text: 'Böbreklerde kanı süzmek' },
          { id: 'E', text: 'Bacak kaslarını beslemek' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçük dolaşım; sağ karıncıktaki kirli kanın akciğerlere gidip temizlendikten sonra kalbin sol kulakçığına dönmesi olayıdır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Büyük dolaşım kalbin HANGİ ODACIĞINDAN başlar ve HANGİ ODACIĞINDA biter?',
        options: [
          { id: 'A', text: 'Sağ karıncıktan başlar, sol kulakçıkta biter.' },
          { id: 'B', text: 'Sol karıncıktan (Aort ile) başlar, sağ kulakçıkta (Ana toplardamarlarla) biter.' },
          { id: 'C', text: 'Sağ kulakçıktan başlar, sol karıncıkta biter.' },
          { id: 'D', text: 'Sol kulakçıktan başlar, akciğerde biter.' },
          { id: 'E', text: 'Sadece karıncıklar arasında olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük dolaşım, sol karıncıktaki temiz kanın Aort ile vücuda pompalanıp, vücuttan kirlenerek sağ kulakçığa dönmesidir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Kalbin "Sol" tarafında (sol kulakçık ve sol karıncıkta) dolaşan kanın özelliği nedir?',
        options: [
          { id: 'A', text: 'Oksijence fakirdir (Kirlidir).' },
          { id: 'B', text: 'Oksijence zengindir (Temizdir).' },
          { id: 'C', text: 'Sadece karbondioksit taşır.' },
          { id: 'D', text: 'Mideden gelmiştir.' },
          { id: 'E', text: 'Sadece plazma içerir, alyuvar içermez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalbin sol tarafı akciğerden gelen oksijence zengin temiz kanı barındırır ve tüm vücuda bunu pompalar.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Kalpteki kapakçıkların (Triküspit, Mitral ve Yarımay) AÇILIP KAPANMASINI sağlayan temel kuvvet nedir?',
        options: [
          { id: 'A', text: 'Kapakçıkların içindeki sinirler' },
          { id: 'B', text: 'Kapakçığın kendi kasılması' },
          { id: 'C', text: 'Kanın iki taraftaki basınç farkı' },
          { id: 'D', text: 'Beyinden gelen hormonlar' },
          { id: 'E', text: 'Akciğerlerin emme kuvveti' }
        ],
        correctOptionId: 'C',
        explanation: 'Kapakçıklar pasif kapılardır. Kanın arkadan itme basıncı yüksekse açılırlar, önden basınç artarsa tersine kapanırlar.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Akciğerden temizlenmiş olarak dönen kan, kalbe HANGİ DAMARLA gelir?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Akciğer atardamarı' },
          { id: 'C', text: 'Akciğer toplardamarı' },
          { id: 'D', text: 'Üst ana toplardamar' },
          { id: 'E', text: 'Alt ana toplardamar' }
        ],
        correctOptionId: 'C',
        explanation: 'Akciğerden kalbe doğru aktığı için toplardamardır ve temiz kanı (oksijence zengin) sol kulakçığa getirir.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Kalbin sol kulakçığı ile sol karıncığı arasında bulunan 2 parçalı (ikili) kapağın adı nedir?',
        options: [
          { id: 'A', text: 'Triküspit' },
          { id: 'B', text: 'Mitral (Biküspit)' },
          { id: 'C', text: 'Aortik' },
          { id: 'D', text: 'Pulmoner' },
          { id: 'E', text: 'Venöz' }
        ],
        correctOptionId: 'B',
        explanation: 'Sol tarafta 2 parçalı Mitral (Biküspit) kapak, sağ tarafta 3 parçalı Triküspit kapak bulunur.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Miyokart tabakası (kalp kası) kalbin hangi odacığında EN KALINDIR?',
        options: [
          { id: 'A', text: 'Sağ kulakçık' },
          { id: 'B', text: 'Sağ karıncık' },
          { id: 'C', text: 'Sol kulakçık' },
          { id: 'D', text: 'Sol karıncık' },
          { id: 'E', text: 'Hepsinin kalınlığı aynıdır' }
        ],
        correctOptionId: 'D',
        explanation: 'Sol karıncık kanı tüm vücuda (yüksek dirence karşı) pompaladığı için, miyokart tabakası en kalın olan odacıktır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Kalp Döngüsü ve Uyarı Sistemi (Çok Kolay)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Kalbin kasılmasına "Sistol", gevşemesine ise ne ad verilir?',
        options: [
          { id: 'A', text: 'Atriyum' },
          { id: 'B', text: 'Diyastol' },
          { id: 'C', text: 'Kapakçık' },
          { id: 'D', text: 'Sistol-2' },
          { id: 'E', text: 'Nabız' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kasının kasılmasına Sistol, gevşemesine (dinlenme ve dolum aşamasına) Diyastol denir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Kalpte uyarıyı (elektrik sinyalini) ilk başlatan ve kalbin "doğal pili (pacemaker)" olarak bilinen düğüm hangisidir?',
        options: [
          { id: 'A', text: 'AV düğümü' },
          { id: 'B', text: 'SA (Sinoatriyal) düğümü' },
          { id: 'C', text: 'His demeti' },
          { id: 'D', text: 'Purkinje lifleri' },
          { id: 'E', text: 'Triküspit düğümü' }
        ],
        correctOptionId: 'B',
        explanation: 'Sağ kulakçığın üst kısmında bulunan SA (Sinoatriyal) düğümü, kalbin kendi ritmik elektrik sinyalini başlatan doğal pacemakerdır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Elektrik sinyali kalpte hangi SIRA ile yayılır?',
        options: [
          { id: 'A', text: 'His demetleri -> Purkinje -> SA düğüm' },
          { id: 'B', text: 'SA düğüm -> AV düğüm -> His demetleri -> Purkinje lifleri' },
          { id: 'C', text: 'AV düğüm -> SA düğüm' },
          { id: 'D', text: 'Purkinje -> SA düğüm' },
          { id: 'E', text: 'Sadece SA düğümde kalır' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyarı önce SA düğümde başlar, kulakçıklara yayılır, AV düğüme gelir (gecikir), oradan His demetleriyle karıncıklara iner ve Purkinje lifleriyle tüm karıncık kaslarına dağılır.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Kalpte kulakçıklar (atriyumlar) kasıldığında kan nereye dolar?',
        options: [
          { id: 'A', text: 'Aorta' },
          { id: 'B', text: 'Akciğere' },
          { id: 'C', text: 'Karıncıklara (Ventriküllere)' },
          { id: 'D', text: 'Ana toplardamarlara' },
          { id: 'E', text: 'Beyne' }
        ],
        correctOptionId: 'C',
        explanation: 'Kulakçıklar kasıldığında içlerindeki kanı hemen altlarındaki karıncıklara basarlar.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Karıncıklar (ventriküller) KASILDIĞINDA (Sistol), kanı geriye kaçırmamak için HANGİ KAPAKÇIKLAR kapanır?',
        options: [
          { id: 'A', text: 'Aort kapağı' },
          { id: 'B', text: 'Triküspit ve Mitral (AV) kapakçıklar' },
          { id: 'C', text: 'Akciğer yarımay kapağı' },
          { id: 'D', text: 'Tüm kapakçıklar açık kalır' },
          { id: 'E', text: 'Venöz kapaklar' }
        ],
        correctOptionId: 'B',
        explanation: 'Karıncıklar kasılıp basıncı artırdığında, kanın kulakçıklara geri dönmesini engellemek için aradaki kapılar olan Triküspit ve Mitral kapaklar kapanır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Kalbin atış hızını ARTIRAN sinir sistemi bölümü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Parasempatik sinirler' },
          { id: 'B', text: 'Sempatik sinirler' },
          { id: 'C', text: 'Somatik sinirler' },
          { id: 'D', text: 'Motor sinirler' },
          { id: 'E', text: 'Duyu sinirleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Sempatik sinir sistemi kalp atışını hızlandırırken (örneğin heyecan, spor), Parasempatik sistem (örneğin Vagus siniri) kalp atışını yavaşlatır.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Karıncıklar KASILDIĞINDA kan hangi damarlara fırlatılır?',
        options: [
          { id: 'A', text: 'Toplardamarlara' },
          { id: 'B', text: 'Aort ve Akciğer atardamarına' },
          { id: 'C', text: 'Kulakçıklara' },
          { id: 'D', text: 'Mideye' },
          { id: 'E', text: 'Alt ana toplardamara' }
        ],
        correctOptionId: 'B',
        explanation: 'Karıncıklar kasıldığında sağ karıncık kanı Akciğer atardamarına, sol karıncık ise kanı Aorta basar.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Yarımay (Semilunar) kapakçıkları nerede bulunur?',
        options: [
          { id: 'A', text: 'Kulakçık ile karıncık arasında' },
          { id: 'B', text: 'Karıncıkların atardamarlara (Aort ve Akciğer atardamarı) bağlandığı yerlerde' },
          { id: 'C', text: 'Toplardamarların içinde' },
          { id: 'D', text: 'Akciğerin içinde' },
          { id: 'E', text: 'Lenf damarlarında' }
        ],
        correctOptionId: 'B',
        explanation: 'Yarımay kapakları, atardamarlara pompalanan kanın karıncıklara geri dönmesini engellemek için atardamarların kalpten çıkış yerlerinde bulunur.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: '"Kalp debisi" terimi neyi ifade eder?',
        options: [
          { id: 'A', text: 'Kalbin bir dakikadaki atım sayısını' },
          { id: 'B', text: 'Kalbin tüm odacıklarının hacmini' },
          { id: 'C', text: 'Bir karıncığın BİR DAKİKADA damarlara pompaladığı toplam kan miktarını' },
          { id: 'D', text: 'Kanın hızını' },
          { id: 'E', text: 'Alyuvar sayısını' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalp debisi = Kalp atım hızı x Her atımda pompalanan hacim. Yani bir dakikada pompalanan kan miktarıdır.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Kalp kası kasılmak için KENDİ elektrik sinyalini üretebilir. Peki bu özellik kalbin beyni olmadan da kasılabileceği anlamına gelir mi?',
        options: [
          { id: 'A', text: 'Hayır, beyin olmadan atamaz.' },
          { id: 'B', text: 'Evet, kalp uygun ortam (besin ve oksijen) sağlanırsa vücut dışında da kendi sinyalini üretip kasmaya devam edebilir.' },
          { id: 'C', text: 'Evet ama sadece 1 saniye sürer.' },
          { id: 'D', text: 'Sadece sağ kulakçık atar.' },
          { id: 'E', text: 'Beyin sinirleri kalbin içindedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp miyojeniktir, yani uyarısını kendisi (SA düğüm) üretir. Dış sinirler sadece hızı ayarlar, başlatıcı değildir.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Doktorların kalbi dinlerken duydukları LUP-DUP sesleri (1. ve 2. kalp sesleri) asıl olarak neyin sesidir?',
        options: [
          { id: 'A', text: 'Kanın damarlara çarpması' },
          { id: 'B', text: 'Kalp kapakçıklarının KAPANMA sesleri' },
          { id: 'C', text: 'Kalp kasının kasılma sesi' },
          { id: 'D', text: 'Sinirlerin ürettiği elektrik sesi' },
          { id: 'E', text: 'Akciğerden gelen hava sesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Birinci ses (LUP) AV kapakçıkların kapanma sesi, ikinci ses (DUP) ise Yarımay kapakçıkların kapanma sesidir.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Tansiyon ölçümünde halk arasında "Büyük Tansiyon" olarak bilinen basınç, kalbin hangi olayı sırasında oluşur?',
        options: [
          { id: 'A', text: 'Karıncıkların gevşemesi (Diyastol)' },
          { id: 'B', text: 'Karıncıkların KASILMASI (Sistol) anında atardamara vuran maksimum basınç' },
          { id: 'C', text: 'Kulakçıkların gevşemesi' },
          { id: 'D', text: 'Kanın toplardamara dönmesi' },
          { id: 'E', text: 'Akciğerlerin şişmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Sistolik basınç (Büyük Tansiyon), sol karıncığın kasılarak kanı aorta güçlü bir şekilde pompaladığı andaki yüksek basınçtır.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Nabız nedir?',
        options: [
          { id: 'A', text: 'Solunum sayısıdır' },
          { id: 'B', text: 'Kalbin her atışında (karıncık kasılmasında) atardamarlarda oluşan dalgalanmanın (basıncın) bilek gibi yerlerden hissedilmesidir.' },
          { id: 'C', text: 'Damarların kasılmasıdır' },
          { id: 'D', text: 'Kandaki oksijen oranıdır' },
          { id: 'E', text: 'Terleme hızıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Sol karıncığın her kasılmasında aorta attığı kan bir basınç dalgası yaratır. Bu dalganın atardamar duvarlarında hissedilmesine nabız denir.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Elektrokardiyogram (EKG) cihazı neyi ölçer?',
        options: [
          { id: 'A', text: 'Kandaki şeker miktarını' },
          { id: 'B', text: 'Kalp kasının çalışması sırasında oluşan ELEKTRİKSEL etkinlikleri' },
          { id: 'C', text: 'Kandaki oksijen miktarını' },
          { id: 'D', text: 'Kalbin hacmini' },
          { id: 'E', text: 'Kanın hızını' }
        ],
        correctOptionId: 'B',
        explanation: 'EKG, SA düğümden başlayıp kalbe yayılan elektriksel sinyalleri (depolarizasyon ve repolarizasyon) grafik olarak kaydeder.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Vagus siniri, kalbin çalışması üzerinde nasıl bir etki yapar?',
        options: [
          { id: 'A', text: 'Hızlandırır' },
          { id: 'B', text: 'YAVAŞLATIR (Parasempatik etki)' },
          { id: 'C', text: 'Durdurur' },
          { id: 'D', text: 'Tersine çevirir' },
          { id: 'E', text: 'Kasılma gücünü 10 kat artırır' }
        ],
        correctOptionId: 'B',
        explanation: 'Vagus siniri parasempatik sinir sistemine aittir ve salgıladığı asetilkolin ile kalp atış hızını yavaşlatır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Damarlar ve Kan Akışı (Çok Kolay)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Kan damarları arasında, hücrelerle MADDESEL ALIŞVERİŞİN (Oksijen, besin geçişi) yapıldığı damarlar hangileridir?',
        options: [
          { id: 'A', text: 'Atardamarlar' },
          { id: 'B', text: 'Toplardamarlar' },
          { id: 'C', text: 'Kılcal damarlar' },
          { id: 'D', text: 'Koroner damarlar' },
          { id: 'E', text: 'Lenf damarları' }
        ],
        correctOptionId: 'C',
        explanation: 'Atar ve toplardamarların duvarları kalındır, madde geçişi olmaz. Sadece tek katlı endotelden oluşan KILCAL DAMARLARDA dokularla madde alışverişi yapılır.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Kan basıncının EN YÜKSEK olduğu damar türü hangisidir?',
        options: [
          { id: 'A', text: 'Toplardamar' },
          { id: 'B', text: 'Atardamar (Özellikle Aort)' },
          { id: 'C', text: 'Kılcal damar' },
          { id: 'D', text: 'Lenf damarı' },
          { id: 'E', text: 'Toplardamar kapakçıkları' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalbin karıncığından pompalanan kan ilk olarak atardamarlara girer, bu nedenle kan basıncı en yüksek atardamardadır.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Kan akış hızının EN DÜŞÜK (en yavaş) olduğu damar hangisidir?',
        options: [
          { id: 'A', text: 'Atardamar' },
          { id: 'B', text: 'Kılcal damar' },
          { id: 'C', text: 'Toplardamar' },
          { id: 'D', text: 'Aort' },
          { id: 'E', text: 'Ana toplardamar' }
        ],
        correctOptionId: 'B',
        explanation: 'Madde alışverişinin rahatça yapılabilmesi için kanın yavaşlaması gerekir. Kılcal damarların toplam kesit alanı çok geniş olduğu için kan hızı burada en düşüktür.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Bacaklarımızdaki kirlenmiş kanın, YERÇEKİMİNE ZIT yönde kalbe dönerken geri kaçmasını engelleyen yapı nedir?',
        options: [
          { id: 'A', text: 'Atardamarların kasılması' },
          { id: 'B', text: 'Toplardamarların içindeki TEK YÖNLÜ (kalbe doğru açılan) KAPAKÇIKLAR' },
          { id: 'C', text: 'Kalbin itme gücü' },
          { id: 'D', text: 'Kılcal damarların basıncı' },
          { id: 'E', text: 'Kemik iliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudun alt kısımlarındaki toplardamarlarda, kanın yerçekimi etkisiyle aşağı inmesini engelleyen kapakçıklar bulunur.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Atardamarların duvarında basınca dayanabilmesi için kas tabakasına ek olarak hangi esnek yapı BOLCA bulunur?',
        options: [
          { id: 'A', text: 'Kemik doku' },
          { id: 'B', text: 'Elastik lifler' },
          { id: 'C', text: 'Kıkırdak doku' },
          { id: 'D', text: 'Sinir hücreleri' },
          { id: 'E', text: 'Alyuvar' }
        ],
        correctOptionId: 'B',
        explanation: 'Atardamarlar kalpten gelen yüksek basınca dayanmak ve genişleyip daralabilmek için bol miktarda elastik lif içerir.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Toplardamarlardaki kanın kalbe doğru hareket etmesinde aşağıdakilerden hangisi ETKİLİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Etraftaki iskelet kaslarının kasılarak damarı sıkıştırması' },
          { id: 'B', text: 'Solunum sırasında göğüs kafesinde oluşan emme kuvveti' },
          { id: 'C', text: 'Kalbin karıncıklarının GÜÇLÜ İTME KUVVETİ (Basınç toplardamara gelene kadar çok düşer)' },
          { id: 'D', text: 'Kulakçıkların gevşerken oluşturduğu emme kuvveti' },
          { id: 'E', text: 'Toplardamar kapakçıkları' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalbin itme basıncı kılcallardan sonra neredeyse sıfıra yaklaşır. Toplardamardaki kan asıl olarak kasların sıkıştırması, solunum emme gücü ve kapakçıklar sayesinde ilerler.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Damar çeşitleri içinde DUVARI EN İNCE olan (sadece tek katlı hücreden oluşan) damar hangisidir?',
        options: [
          { id: 'A', text: 'Atardamar' },
          { id: 'B', text: 'Toplardamar' },
          { id: 'C', text: 'Kılcal damar' },
          { id: 'D', text: 'Aort' },
          { id: 'E', text: 'Şah damarı' }
        ],
        correctOptionId: 'C',
        explanation: 'Kılcal damarlar sadece tek katlı yassı epitel (endotel) tabakasından oluşur, bu incelik sayesinde madde alışverişine izin verir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Kanın içinde bulunan hücreler ve büyük proteinlerin (albümin vb.) normal şartlarda KILCAL DAMARDAN DIŞARI ÇIKMAMASI ne işe yarar?',
        options: [
          { id: 'A', text: 'Dışarı çıkarlarsa damar patlar.' },
          { id: 'B', text: 'Damar içinde kalarak KANIN OZMOTİK BASINCINI (emme kuvvetini) oluşturur ve sıvının dokulardan geri emilmesini sağlarlar.' },
          { id: 'C', text: 'Oksijen taşımayı durdurur.' },
          { id: 'D', text: 'Hiçbir işe yaramaz.' },
          { id: 'E', text: 'Lenf düğümlerini tıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük proteinler damarda hapsolduğu için, damarın içine doğru sürekli bir su çekme isteği (kolloid ozmotik basınç) oluştururlar.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Starling Hipotezi\'ne göre, kılcal damarın ATARDAMAR UCUNDA kan basıncı yüksek olduğu için hangi olay gerçekleşir?',
        options: [
          { id: 'A', text: 'Geri emilim (Sıvı damara girer)' },
          { id: 'B', text: 'Süzülme / Filtrasyon (Su ve küçük besinler damardan doku sıvısına çıkar)' },
          { id: 'C', text: 'Alyuvarlar damar dışına çıkar' },
          { id: 'D', text: 'Kan pıhtılaşır' },
          { id: 'E', text: 'Damar büzülür' }
        ],
        correctOptionId: 'B',
        explanation: 'Kılcalın atardamar ucunda Kan Basıncı > Ozmotik Basınç olduğu için sıvılar damardan dışarı (dokuya) itilir.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Starling Hipotezi\'ne göre, kılcal damarın TOPLARDAMAR UCUNDA kan basıncı düştüğü için hangi olay gerçekleşir?',
        options: [
          { id: 'A', text: 'Su damardan dışarı çıkar.' },
          { id: 'B', text: 'Ozmotik basınç kan basıncından yüksek hale gelir ve doku sıvısındaki atıklar/su DAMARA GERİ EMİLİR.' },
          { id: 'C', text: 'Alyuvar üretilir.' },
          { id: 'D', text: 'Lenf damarları kapanır.' },
          { id: 'E', text: 'Kan basıncı artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Toplardamar ucunda kanın hidrostatik basıncı düşer, ozmotik çekim gücü galip gelir ve su/atıklar tekrar kana emilir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Doku sıvısının (kılcaldan çıkan sıvının) miktarının normalden FAZLA artarak dokularda BİRİKMESİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Tansiyon' },
          { id: 'B', text: 'Ödem' },
          { id: 'C', text: 'Pıhtı' },
          { id: 'D', text: 'Kramp' },
          { id: 'E', text: 'Enfarktüs' }
        ],
        correctOptionId: 'B',
        explanation: 'Dışarı süzülen sıvı çok olur veya geri emilen/lenfe giden sıvı az olursa, sıvı hücrelerin arasında birikir; buna ödem (şişlik) denir.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Kan basıncının atardamardan toplardamara doğru DÜŞMESİNİN en önemli sebebi nedir?',
        options: [
          { id: 'A', text: 'Kanın sıvılaşması' },
          { id: 'B', text: 'Kanın kalpten uzaklaştıkça damar çeperleriyle SÜRTÜNEREK (dirençle karşılaşarak) enerjisini kaybetmesi' },
          { id: 'C', text: 'Oksijenin bitmesi' },
          { id: 'D', text: 'Lenf sistemine karışması' },
          { id: 'E', text: 'Kalbin yorulması' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan dar damarlarda ilerlerken damar duvarına sürter (periferik direnç). Bu sürtünme basıncı düşürür.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Soğuk havalarda vücut ısısını korumak için deriye giden kılcal damarlarda nasıl bir tepki görülür?',
        options: [
          { id: 'A', text: 'Genişlerler' },
          { id: 'B', text: 'Daralırlar (Büzülürler) - Isı kaybını önlemek için' },
          { id: 'C', text: 'Koparlar' },
          { id: 'D', text: 'Toplardamara dönüşürler' },
          { id: 'E', text: 'Değişmezler' }
        ],
        correctOptionId: 'B',
        explanation: 'Soğukta derideki kılcallar daralarak (vazokonstriksiyon) kanı iç organlara yönlendirir, böylece deriden ısı kaybı önlenir (rengimiz soluklaşır).'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Organlara giden kan MİKTARINI (örneğin yemekten sonra mideye çok kan gitmesi) asıl olarak HANGİ DAMARLAR çeperindeki düz kasları kasıp gevşeterek ayarlar?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Küçük Atardamarlar (Arteriyoller)' },
          { id: 'C', text: 'Ana toplardamarlar' },
          { id: 'D', text: 'Lenf damarları' },
          { id: 'E', text: 'Pulmoner ven' }
        ],
        correctOptionId: 'B',
        explanation: 'Arteriyoller (küçük atardamarlar) sfinkter (musluk) gibi çalışarak kılcal yataklara ne kadar kan gireceğini belirler.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Karaciğere SİNDİRİM SİSTEMİNDEN (mide, bağırsak) gelen bol besinli toplardamarın GÜNLÜK ADI nedir?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Kapı Toplardamarı' },
          { id: 'C', text: 'Akciğer Toplardamarı' },
          { id: 'D', text: 'Şah damarı' },
          { id: 'E', text: 'Böbrek atardamarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağırsaklardan emilen besinler, doğrudan kalbe gitmeden önce işlenmek (depolanmak/süzülmek) üzere Kapı Toplardamarı ile Karaciğere gelir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Kan ve Lenf Sistemi (Çok Kolay)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Kanın sıvı olan ve su, protein, mineraller içeren %55\'lik kısmına ne ad verilir?',
        options: [
          { id: 'A', text: 'Alyuvar' },
          { id: 'B', text: 'Plazma' },
          { id: 'C', text: 'Lenf' },
          { id: 'D', text: 'Trombosit' },
          { id: 'E', text: 'Serum' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan santrifüj edildiğinde üstte kalan sarımtırak sıvı kısma kan plazması denir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Kanda oksijen ve karbondioksit taşıyan, kırmızı renkli ve olgunlaştığında çekirdeği olmayan hücre hangisidir?',
        options: [
          { id: 'A', text: 'Akyuvar (Lökosit)' },
          { id: 'B', text: 'Trombosit (Kan pulcuğu)' },
          { id: 'C', text: 'Alyuvar (Eritrosit)' },
          { id: 'D', text: 'Lenfosit' },
          { id: 'E', text: 'Plazma hücresi' }
        ],
        correctOptionId: 'C',
        explanation: 'Alyuvarlar (Eritrositler) içindeki hemoglobin proteini sayesinde oksijen taşır ve memelilerde çekirdeksizdir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Vücudumuzu mikroplara karşı koruyan (savunma yapan) ve çekirdeği bulunan kan hücresi hangisidir?',
        options: [
          { id: 'A', text: 'Akyuvar (Lökosit)' },
          { id: 'B', text: 'Alyuvar' },
          { id: 'C', text: 'Trombosit' },
          { id: 'D', text: 'Fibrinojen' },
          { id: 'E', text: 'Albümin' }
        ],
        correctOptionId: 'A',
        explanation: 'Akyuvarlar bağışıklık sisteminin askerleridir, fagositoz yapar veya antikor üretirler.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Kanın pıhtılaşmasında görev alan "kan pulcuklarına" ne ad verilir?',
        options: [
          { id: 'A', text: 'Eritrosit' },
          { id: 'B', text: 'Trombosit' },
          { id: 'C', text: 'Lökosit' },
          { id: 'D', text: 'Makrofaj' },
          { id: 'E', text: 'Lenfosit' }
        ],
        correctOptionId: 'B',
        explanation: 'Trombositler damar hasarı durumunda yapışarak tıkaç oluşturur ve pıhtılaşma sürecini başlatır.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Lenf sisteminin "KANDAN FARKLI" olan EN BELİRGİN özelliği nedir?',
        options: [
          { id: 'A', text: 'Sadece kalbe doğru giden tek yönlü bir sistem olması (Atardamarı olmaması)' },
          { id: 'B', text: 'Kırmızı renkli olması' },
          { id: 'C', text: 'Oksijen taşıması' },
          { id: 'D', text: 'Kalp tarafından pompalanması' },
          { id: 'E', text: 'Kapakçığı olmaması' }
        ],
        correctOptionId: 'A',
        explanation: 'Lenf sistemi kapalı bir döngü değildir. Dokulardan başlar, kan dolaşımına katılarak biter. Merkezî bir kalp pompası ve atardamarı yoktur.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Lenf sıvısında aşağıdakilerden hangisi BULUNMAZ (Bu yüzden rengi beyaz-şeffaftır)?',
        options: [
          { id: 'A', text: 'Su' },
          { id: 'B', text: 'Akyuvar' },
          { id: 'C', text: 'Alyuvar' },
          { id: 'D', text: 'Lenfosit' },
          { id: 'E', text: 'Yağ' }
        ],
        correctOptionId: 'C',
        explanation: 'Lenf sıvısı alyuvar taşımaz. Bu nedenle kan gibi kırmızı değildir (Bazen Akkan olarak adlandırılır).'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Lenf sisteminin Temel Görevlerinden biri aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Oksijen taşımak' },
          { id: 'B', text: 'Kılcal damarlardan sızan FAZLA doku sıvısını (ve proteinleri) toplayıp tekrar kana kazandırmak (Ödemi önlemek)' },
          { id: 'C', text: 'Besinleri parçalamak' },
          { id: 'D', text: 'İdrar oluşturmak' },
          { id: 'E', text: 'Hormon üretmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Kılcaldan çıkan her 100 birim sıvının yaklaşık 85-90 birimi kana dönerken kalan 10-15 birim sıvıyı lenf sistemi toplayıp kana geri getirir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Kanın pıhtılaşması sırasında oluşan ağ şeklindeki ipliksi proteine ne ad verilir?',
        options: [
          { id: 'A', text: 'Albümin' },
          { id: 'B', text: 'Fibrin (Fibrinojenin aktif hali)' },
          { id: 'C', text: 'Hemoglobin' },
          { id: 'D', text: 'Miyosin' },
          { id: 'E', text: 'Aktin' }
        ],
        correctOptionId: 'B',
        explanation: 'Pıhtılaşma şelalesinin sonunda Fibrinojen, çözünmeyen Fibrin ipliklerine dönüşür ve kan hücrelerini ağ gibi sararak pıhtıyı oluşturur.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Kan plazmasından pıhtılaşma faktörlerinin (Fibrinojen vb.) çıkarılmış haline ne denir?',
        options: [
          { id: 'A', text: 'Lenf' },
          { id: 'B', text: 'Serum' },
          { id: 'C', text: 'Doku sıvısı' },
          { id: 'D', text: 'Trombosit' },
          { id: 'E', text: 'Aşı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan pıhtılaştıktan sonra tüpün üstünde kalan berrak sıvıya Serum denir. İçinde fibrinojen kalmamıştır ama antikorlar vardır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'İnce bağırsaktan emilen YAĞLAR (yağ asidi ve gliserol) kana karışmadan önce hangi sistemle taşınır?',
        options: [
          { id: 'A', text: 'Atardamarlarla' },
          { id: 'B', text: 'Lenf sistemiyle (Lakteal damarlar)' },
          { id: 'C', text: 'Sinir sistemiyle' },
          { id: 'D', text: 'Kapı toplardamarıyla' },
          { id: 'E', text: 'Solunum sistemiyle' }
        ],
        correctOptionId: 'B',
        explanation: 'Şekerler ve amino asitler kan kılcallarına geçerken, yağlar ve yağda eriyen vitaminler (ADEK) lenf kılcallarıyla toplanır.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Lenf düğümleri (örneğin bademcikler, koltuk altı bezleri) ne işe yarar?',
        options: [
          { id: 'A', text: 'Kan pompalamaya' },
          { id: 'B', text: 'Lenf sıvısını süzerek içindeki mikropları yakalamaya ve lenfosit (akyuvar) üretip savunma yapmaya' },
          { id: 'C', text: 'Oksijen depolamaya' },
          { id: 'D', text: 'Yağları sindirmeye' },
          { id: 'E', text: 'Kırmızı kan hücresi üretmeye' }
        ],
        correctOptionId: 'B',
        explanation: 'Lenf düğümleri sıvının içindeki bakteri ve virüsler için birer karakol (filtre) gibidir. Enfeksiyon anında şişerler (örn: Bademcik şişmesi).'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Vücudun alt kısımlarından (bacaklar ve bağırsaklar) toplanan lenf sıvısı, göğüs kafesinde HANGİ BÜYÜK LENF KANALINA bağlanır?',
        options: [
          { id: 'A', text: 'Göğüs Kanalı (Peke Sarnıcı üzerinden)' },
          { id: 'B', text: 'Aort' },
          { id: 'C', text: 'Sağ lenf kanalı' },
          { id: 'D', text: 'Şah damarı' },
          { id: 'E', text: 'Kapı toplardamarı' }
        ],
        correctOptionId: 'A',
        explanation: 'Vücudun alt yarısı ve sol üst yarısından gelen lenf sıvısı Göğüs Kanalında toplanır ve Sol köprücük altı toplardamarına dökülür.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Bütün lenf sıvısı SONUÇTA kalbe gelmeden hemen önce NEYE KARIŞIR?',
        options: [
          { id: 'A', text: 'Mideye' },
          { id: 'B', text: 'Kan Dolaşımına (Köprücük altı toplardamarları ile)' },
          { id: 'C', text: 'İdrara' },
          { id: 'D', text: 'Beyin omurilik sıvısına' },
          { id: 'E', text: 'Akciğerlere' }
        ],
        correctOptionId: 'B',
        explanation: 'Lenf sistemi kendi başına kapalı kalmaz. Topladığı sıvı ve yağları Köprücük altı toplardamarları hizasında kana dökerek döngüyü tamamlar.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Kanda alyuvar sayısının (veya hemoglobin miktarının) normalin altına düşmesine (Kansızlık) ne ad verilir?',
        options: [
          { id: 'A', text: 'Anemi' },
          { id: 'B', text: 'Ödem' },
          { id: 'C', text: 'Hipertansiyon' },
          { id: 'D', text: 'Lösemi' },
          { id: 'E', text: 'Hemofili' }
        ],
        correctOptionId: 'A',
        explanation: 'Anemi (Kansızlık), dokulara yeterli oksijen taşınamaması durumudur. Demir eksikliği en yaygın sebebidir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Sağlıklı bir insanda, enfeksiyon (hastalık) durumunda kan tahlilinde HANGİ HÜCRENİN sayısının artması beklenir?',
        options: [
          { id: 'A', text: 'Alyuvar' },
          { id: 'B', text: 'Akyuvar (Lökosit)' },
          { id: 'C', text: 'Trombosit' },
          { id: 'D', text: 'Epitel hücresi' },
          { id: 'E', text: 'Kas hücresi' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücuda mikrop girdiğinde savunma ordusu olan akyuvarların (lökositlerin) sayısı hızla artar.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Bağışıklık Sistemi Temelleri (Çok Kolay)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Vücuda giren mikroplara karşı MİDE ASİDİ, GÖZYAŞI (Lizozim enzimi) ve DERİ gibi yapıların oluşturduğu savunma hattı hangisidir?',
        options: [
          { id: 'A', text: 'Birinci savunma hattı (Doğal/Özgül olmayan)' },
          { id: 'B', text: 'İkinci savunma hattı' },
          { id: 'C', text: 'Üçüncü savunma hattı (Özgül)' },
          { id: 'D', text: 'Kazanılmış bağışıklık' },
          { id: 'E', text: 'Hücresel bağışıklık' }
        ],
        correctOptionId: 'A',
        explanation: 'Vücudun dışarıya açılan kapılarındaki fiziksel ve kimyasal engeller (deri, mide asidi, gözyaşı, mukus) birinci savunma hattını (kalenin surlarını) oluşturur.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Mikroplar birinci hattı (deriyi vb.) aşıp vücuda girdiğinde onları yutarak parçalayan (fagositoz yapan) makrofajlar HANGİ savunma hattında yer alır?',
        options: [
          { id: 'A', text: 'Birinci savunma hattı' },
          { id: 'B', text: 'İkinci savunma hattı (Doğal bağışıklık)' },
          { id: 'C', text: 'Üçüncü savunma hattı' },
          { id: 'D', text: 'Suni bağışıklık' },
          { id: 'E', text: 'Sadece kalpte bulunurlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Fagositler (yiyici hücreler), doğal katil hücreler ve iltihaplanma (yangısal tepki) ikinci savunma hattıdır. Ayrım yapmadan her düşmana saldırırlar.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Vücudumuza girdiğinde hastalıklara neden olan ve bağışıklık sistemimizin YABANCI olarak tanıdığı her türlü maddeye ne denir?',
        options: [
          { id: 'A', text: 'Antikor' },
          { id: 'B', text: 'Antijen' },
          { id: 'C', text: 'Antibiyotik' },
          { id: 'D', text: 'Enzim' },
          { id: 'E', text: 'Hormon' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücuda giren ve bağışıklık tepkisi oluşturan yabancı moleküllere Antijen denir. Antijene karşı üretilen savunma silahına ise Antikor denir.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'B ve T lenfositleri (özel akyuvarlar) tarafından gerçekleştirilen, sadece O MİKROBA ÖZEL silahların üretildiği savunma hangisidir?',
        options: [
          { id: 'A', text: 'Doğal bağışıklık' },
          { id: 'B', text: 'Birinci savunma hattı' },
          { id: 'C', text: 'Kazanılmış (Özgül/Spesifik) Bağışıklık (3. Hat)' },
          { id: 'D', text: 'Fagositoz' },
          { id: 'E', text: 'İltihaplanma' }
        ],
        correctOptionId: 'C',
        explanation: 'Lenfositler (B ve T), düşmanı tanıyıp ona özel kilit-anahtar uyumlu silah (antikor veya özel saldırı) üreten 3. savunma hattı yani kazanılmış bağışıklıktır.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Antijenlere karşı "B Lenfositleri (Plazma hücreleri)" tarafından üretilen ve kan plazmasında dolaşan Y şeklinde PROTEİN YAPILI silahlara ne ad verilir?',
        options: [
          { id: 'A', text: 'Antijen' },
          { id: 'B', text: 'Antikor' },
          { id: 'C', text: 'Alyuvar' },
          { id: 'D', text: 'Pıhtı' },
          { id: 'E', text: 'Histamin' }
        ],
        correctOptionId: 'B',
        explanation: 'B lenfositlerinin düşmanı işaretlemek ve etkisiz hale getirmek için ürettiği (fırlattığı) mermilere/silahlara Antikor denir.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Virüs bulaşmış kendi hücrelerimizi veya kanserleşmiş hücreleri İÇİNE GİREREK (veya zehir salgılayarak) yok eden, "Hücresel Bağışıklık"tan sorumlu lenfosit hangisidir?',
        options: [
          { id: 'A', text: 'B Lenfosit' },
          { id: 'B', text: 'T Lenfosit (Örn: Sitotoksik T)' },
          { id: 'C', text: 'Alyuvar' },
          { id: 'D', text: 'Trombosit' },
          { id: 'E', text: 'Mide asidi hücresi' }
        ],
        correctOptionId: 'B',
        explanation: 'T lenfositleri uzaktan antikor fırlatmaz, bizzat göğüs göğüse çarpışarak enfekte hücreyi yok eder (Hücresel bağışıklık).'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'AŞI yaptırmanın temel biyolojik amacı nedir?',
        options: [
          { id: 'A', text: 'Vücuttaki kanı temizlemek' },
          { id: 'B', text: 'Zayıflatılmış mikrobu vücuda tanıtarak HAFIZA (bellek) HÜCRELERİ oluşturmak ve hastalığa karşı Aktif Bağışıklık kazanmak' },
          { id: 'C', text: 'Hastalık anında ateşi düşürmek' },
          { id: 'D', text: 'Kemikleri güçlendirmek' },
          { id: 'E', text: 'Kan basıncını düşürmek' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşı, vücuda zayıf mikrop vererek bağışıklık sisteminin idman yapmasını ve hafıza hücreleri bırakmasını (Böylece gerçek mikropta hazırlıklı olmasını) sağlar.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Hastalanmış (enfekte olmuş) bir kişiye, başka bir canlıda üretilmiş HAZIR ANTİKORLARIN verilmesi işlemine ne ad verilir?',
        options: [
          { id: 'A', text: 'Aşı' },
          { id: 'B', text: 'Serum (Pasif Bağışıklık)' },
          { id: 'C', text: 'Antibiyotik' },
          { id: 'D', text: 'Ameliyat' },
          { id: 'E', text: 'Diyaliz' }
        ],
        correctOptionId: 'B',
        explanation: 'Hazır silahların (antikorların) verilmesine Serum denir. Kişi kendi silahını üretmediği için bu "Pasif" bağışıklıktır ve etkisi kısa sürer.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Aşı ile Serum arasındaki EN BÜYÜK fark nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynı şeydir.' },
          { id: 'B', text: 'Aşı sağlıklı kişiye yapılır ve koruyucudur (hafıza bırakır), Serum hasta kişiye tedavi için verilir ve geçicidir (hafıza bırakmaz).' },
          { id: 'C', text: 'Aşı hasta olunca yapılır, serum sağlıklıyken yapılır.' },
          { id: 'D', text: 'Aşı koldan, serum ayaktan yapılır.' },
          { id: 'E', text: 'Sadece bebeklere aşı yapılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşı koruyucu (aktif), serum ise tedavi edici (pasif) bir yöntemdir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Kızamık hastalığını bir kez geçiren bir çocuğun, aynı virüsle tekrar karşılaştığında hasta olmamasının sebebi nedir?',
        options: [
          { id: 'A', text: 'Kanının tamamen değişmiş olması' },
          { id: 'B', text: 'İlk hastalık sırasında oluşan HAFIZA (Bellek) lenfositlerinin virüsü tanıyıp hemen antikor üreterek hastalığı durdurması' },
          { id: 'C', text: 'Virüsün dünyadan yok olması' },
          { id: 'D', text: 'Derisinin kalınlaşması' },
          { id: 'E', text: 'Ateşinin sürekli yüksek kalması' }
        ],
        correctOptionId: 'B',
        explanation: 'Hastalık geçirildiğinde (veya aşı olunduğunda) vücutta kalan Hafıza B ve T hücreleri, düşmanı unutmaz ve ikinci karşılaşmada çok hızlı tepki verir (İkincil Yanıt).'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Anne karnındaki bebeğe (fetüse) plasenta yoluyla veya doğduktan sonra anne sütüyle ANNE ANTİKORLARININ geçmesi HANGİ bağışıklığa örnektir?',
        options: [
          { id: 'A', text: 'Aktif bağışıklık' },
          { id: 'B', text: 'Doğal PASİF bağışıklık' },
          { id: 'C', text: 'Yapay aktif bağışıklık' },
          { id: 'D', text: 'Birinci savunma hattı' },
          { id: 'E', text: 'Alerji' }
        ],
        correctOptionId: 'B',
        explanation: 'Bebek antikorları kendi üretmez, anneden hazır alır. Kendi üretmediği için Pasif, bu olay doğal bir süreç olduğu için Doğal Pasif bağışıklıktır.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Parmağımıza kıymık battığında o bölgenin KIZARMASI, ŞİŞMESİ, ISINMASI ve AĞRIMASI olayına biyolojide ne denir?',
        options: [
          { id: 'A', text: 'İnflamasyon (İltihaplanma / Yangısal Tepki)' },
          { id: 'B', text: 'Alerji' },
          { id: 'C', text: 'Pıhtılaşma' },
          { id: 'D', text: 'Ödem' },
          { id: 'E', text: 'Kanser' }
        ],
        correctOptionId: 'A',
        explanation: 'Yara bölgesine fazla kan gelmesi (kızarıklık/ısı) ve akyuvarların damar dışına çıkması (şişlik) inflamasyonun (iltihabın) belirtileridir. İkinci savunma hattıdır.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Bir kişinin kendi bağışıklık sisteminin (T ve B lenfositlerinin) yanlışlıkla KENDİ VÜCUT HÜCRELERİNE saldırması sonucu ortaya çıkan hastalıklara ne denir?',
        options: [
          { id: 'A', text: 'Enfeksiyon' },
          { id: 'B', text: 'Otoimmün hastalıklar (Örn: MS, Tip 1 Diyabet)' },
          { id: 'C', text: 'Genetik hastalık' },
          { id: 'D', text: 'Kırık çıkık' },
          { id: 'E', text: 'Zehirlenme' }
        ],
        correctOptionId: 'B',
        explanation: 'Otoimmün (auto-immune = kendine karşı bağışıklık) hastalıklarda savunma sistemi dost ile düşmanı ayırt edemez (öz-tolerans bozulur) ve kendi organlarını tahrip eder.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Alerji nedir?',
        options: [
          { id: 'A', text: 'Kalp atışının durmasıdır' },
          { id: 'B', text: 'Bağışıklık sisteminin, normalde ZARARSIZ olan maddelere (polen, toz, fıstık vb.) KARŞI AŞIRI TEPKİ (histamin) vermesidir.' },
          { id: 'C', text: 'Kanın pıhtılaşmamasıdır' },
          { id: 'D', text: 'Kemiklerin erimesidir' },
          { id: 'E', text: 'Gözün görememesidir' }
        ],
        correctOptionId: 'B',
        explanation: 'Alerji, bağışıklık sisteminin gereksiz yere alarma geçmesidir. Alerjen maddeler vücuda girdiğinde hücreler aşırı histamin salgılayarak hapşırık, kaşıntı, şişlik yapar.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Vücudumuza giren VİRÜSLERE karşı, enfekte olmuş hücrelerin komşu hücreleri uyarmak için salgıladığı "Antiviral (Virüs karşıtı) Protein" hangisidir?',
        options: [
          { id: 'A', text: 'Fibrin' },
          { id: 'B', text: 'İnterferon' },
          { id: 'C', text: 'Histamin' },
          { id: 'D', text: 'Hemoglobin' },
          { id: 'E', text: 'Pepsin' }
        ],
        correctOptionId: 'B',
        explanation: 'Virüs giren bir hücre ölmeden önce "İnterferon" salgılayarak sağlam komşularına "virüs geliyor, kapılarınızı kapatın" uyarısı yapar. İkinci savunma hattındandır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Kalp ve Damar Yorumları (Kolay)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'İnsan kalbinde Kirli (O2 fakir) ve Temiz (O2 zengin) kan birbirine karışır mı?',
        options: [
          { id: 'A', text: 'Evet, karıncıklarda karışır.' },
          { id: 'B', text: 'Hayır. Kalbin sağ tarafı tamamen kirli kan, sol tarafı tamamen temiz kan taşır. Arada tam bir perde (septum) vardır.' },
          { id: 'C', text: 'Sadece uyurken karışır.' },
          { id: 'D', text: 'Kulakçıklarda karışır.' },
          { id: 'E', text: 'Yarımay kapaklarında karışır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Memelilerde kalp 4 tam odacıklıdır. Sağdaki kirli kan ile soldaki temiz kan kalpte ASLA birbirine karışmaz.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Büyük dolaşımın başladığı Aort Atardamarı ile Küçük dolaşımın başladığı Akciğer Atardamarı sırasıyla kalbin NERESİNDEN çıkarlar?',
        options: [
          { id: 'A', text: 'Aort: Sağ karıncık / Akciğer Atardamarı: Sol karıncık' },
          { id: 'B', text: 'Aort: Sol karıncık / Akciğer Atardamarı: Sağ karıncık' },
          { id: 'C', text: 'İkisi de sol kulakçıktan çıkar' },
          { id: 'D', text: 'Aort: Sağ kulakçık / Akciğer: Sol karıncık' },
          { id: 'E', text: 'İkisi de sağ karıncıktan çıkar' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük dolaşım temiz kanı dağıttığı için sol karıncıktan Aort ile başlar. Küçük dolaşım kirli kanı temizlenmeye yolladığı için sağ karıncıktan Akciğer atardamarı ile başlar.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Kalbin kendi hücreleri, içindeki kandan Oksijen veya Besin alabilir mi?',
        options: [
          { id: 'A', text: 'Evet, kan içindeyken alır.' },
          { id: 'B', text: 'Hayır. Endokart (iç zar) geçirgen olmadığı için kalbin içindeki kanı kullanamaz. Sadece Aorttan ayrılan Koroner Damarlar sayesinde dışarıdan beslenir.' },
          { id: 'C', text: 'Sadece sağ kulakçık alır.' },
          { id: 'D', text: 'Kalp oksijen kullanmaz.' },
          { id: 'E', text: 'Besini lenften alır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalbin içi kanla dolu olsa da o kanı içemez. Tıpkı bir banka memurunun kasadaki parayı harcayamaması gibi. Kanı önce aorta pompalar, sonra aorttan kendine özel damar (Koroner) çeker.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Vücudumuzdaki kanın "Dolaşım Sırası" düşünüldüğünde, Mideden çıkan bir alyuvar kalbe GELDİKTEN SONRA hemen beyne gidebilir mi?',
        options: [
          { id: 'A', text: 'Evet, direkt beyne gider.' },
          { id: 'B', text: 'Hayır. Önce sağ kalbe gelir, oradan AKCİĞERE gidip temizlenmek ZORUNDADIR. Temizlenip sol kalbe döndükten sonra aortla beyne gidebilir.' },
          { id: 'C', text: 'Mideden beyne özel damar vardır.' },
          { id: 'D', text: 'Sadece böbreğe gider.' },
          { id: 'E', text: 'Kalpte bekler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanın rotası 8 rakamı gibidir. Alt kısımdan (mide vb.) kirlenip dönen kan (sağ kalp), akciğere (küçük dolaşım) uğramadan vücudun diğer bir kısmına (büyük dolaşım) geçemez.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Elektrokardiyogramda (EKG) görülen en büyük sivri tepe (QRS dalgası), kalpte HANGİ MEKANİK OLAYIN elektriksel işaretidir?',
        options: [
          { id: 'A', text: 'Kulakçıkların gevşemesi' },
          { id: 'B', text: 'Karıncıkların KASILMASI (Depolarizasyonu)' },
          { id: 'C', text: 'Kapakçıkların açılması' },
          { id: 'D', text: 'Kalbin durması' },
          { id: 'E', text: 'Kanın akciğere dönmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'QRS kompleksi, kalbin en büyük kas kütlesi olan karıncıkların (ventriküllerin) elektrikle yüklenip (depolarize olup) kasılmaya başladığı andır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Bacak kaslarımız (İskelet kasları) hareket ettiğinde (yürüdüğümüzde), toplardamar sistemimize nasıl bir katkı sağlar?',
        options: [
          { id: 'A', text: 'Toplardamarı patlatır.' },
          { id: 'B', text: 'Kaslar şişip yandaki toplardamarları sıkıştırarak kanı KALBE DOĞRU sağar (Pompalamaya yardım eder).' },
          { id: 'C', text: 'Toplardamardaki oksijeni emer.' },
          { id: 'D', text: 'Hiçbir etkisi yoktur.' },
          { id: 'E', text: 'Kanı ayaklara geri gönderir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Venöz dönüşte (kanın kalbe dönüşünde) iskelet kası pompası çok önemlidir. Yürümek, bacak toplardamarlarını sıkarak kanı yukarı iter.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Aşağıdaki damarlardan hangisinde KAN BASINCI "kalp atışlarına bağlı olarak (Sistol-Diyastol)" DALGALANMA GÖSTERİR (Nabız verir)?',
        options: [
          { id: 'A', text: 'Toplardamar' },
          { id: 'B', text: 'Atardamar' },
          { id: 'C', text: 'Kılcal damar' },
          { id: 'D', text: 'Lenf damarı' },
          { id: 'E', text: 'Kapı toplardamarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Basınç dalgalanması (nabız) atardamarlarda hissedilir. Kılcallara gelindiğinde direnç nedeniyle bu dalgalanma dümdüz (sabit) bir basınca dönüşür.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Kan kılcal damardan geçerken KAN BASINCI nasıl bir değişim gösterir?',
        options: [
          { id: 'A', text: 'Sürekli artar.' },
          { id: 'B', text: 'Atardamar ucundan toplardamar ucuna doğru SÜREKLİ OLARAK DÜŞER (Azalır).' },
          { id: 'C', text: 'Sabit kalır.' },
          { id: 'D', text: 'Önce azalır sonra artar.' },
          { id: 'E', text: 'Sıfır olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürtünme (direnç) ve damarın uzaması nedeniyle kan basıncı aorttan ana toplardamarlara kadar sürekli olarak DÜŞME eğilimindedir. Kılcalda da bu düşüş devam eder.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Karaciğere KAN GETİREN ve KAN GÖTÜREN damarlar düşünüldüğünde, Karaciğer Üstü Toplardamarındaki (Götüren) KİRLİ KANDA aşağıdakilerden hangisinin yüksek olması normaldir?',
        options: [
          { id: 'A', text: 'Oksijen' },
          { id: 'B', text: 'Üre (Karaciğer amonyağı üreye çevirdiği için)' },
          { id: 'C', text: 'Lenf sıvısı' },
          { id: 'D', text: 'Tükürük enzimi' },
          { id: 'E', text: 'Gözyaşı' }
        ],
        correctOptionId: 'B',
        explanation: 'Karaciğer zehirli amonyağı daha az zehirli olan Üreye çevirir. Bu nedenle karaciğerden ÇIKAN kanda üre miktarı (karaciğere girene göre) çok yüksektir.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Damarların (Atar, Kılcal, Toplar) "Toplam Kesit Alanları (Tüm vücuttaki boruların toplam genişliği)" karşılaştırıldığında EN GENİŞ alana sahip damar ağı hangisidir?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Kılcal Damarlar (Milyarlarcasının toplam alanı)' },
          { id: 'C', text: 'Ana Toplardamar' },
          { id: 'D', text: 'Şah damarı' },
          { id: 'E', text: 'Hepsi aynıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir kılcal çok incedir. Ancak vücuttaki milyarlarca kılcalın alanı yanyana toplandığında devasa bir nehir yatağı oluşturur. Kan bu geniş yatağa girince yavaşlar (Hız düşer).'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Kapı Toplardamarı HANGİ ORGANLAR ARASINDA bağlantı kurar?',
        options: [
          { id: 'A', text: 'Beyin ile Kalp' },
          { id: 'B', text: 'Sindirim organları (Bağırsak, mide) ile Karaciğer' },
          { id: 'C', text: 'Akciğer ile Kalp' },
          { id: 'D', text: 'Böbrek ile Kalp' },
          { id: 'E', text: 'Kaslar ile Beyin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapı toplardamarı sistemik (genel) dolaşıma katılmadan önce, sindirimden emilen kanı doğrudan karaciğere (gümrüğe) götüren özel bir damardır.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Tokluk durumunda (Yemekten birkaç saat sonra), kandaki GLİKOZ (şeker) miktarının EN YÜKSEK olduğu damar hangisidir?',
        options: [
          { id: 'A', text: 'Kapı Toplardamarı' },
          { id: 'B', text: 'Akciğer Atardamarı' },
          { id: 'C', text: 'Böbrek Atardamarı' },
          { id: 'D', text: 'Şah damarı' },
          { id: 'E', text: 'Aort' }
        ],
        correctOptionId: 'A',
        explanation: 'Yemek yenildiğinde şeker bağırsaktan emilip Kapı Toplardamarına geçer. Bu nedenle toklukta kapı toplardamarı şekerce en zengin kısımdır (Karaciğer bunu depolayıp kana normal miktarda verir).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Açlık durumunda (Örn: Sabah uyanıldığında) kandaki GLİKOZ miktarının nispeten YÜKSEK kaldığı damar hangisidir?',
        options: [
          { id: 'A', text: 'Kapı toplardamarı (Bağırsak boştur, şeker düşüktür)' },
          { id: 'B', text: 'Karaciğer Üstü Toplardamarı (Karaciğer depolarını yıkıp kana şeker verdiği için)' },
          { id: 'C', text: 'Böbrek toplardamarı' },
          { id: 'D', text: 'Akciğer atardamarı' },
          { id: 'E', text: 'Mide atardamarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Açken bağırsaktan şeker gelmez. Kan şekerini dengede tutmak için karaciğer glikojen depolarını yıkar ve bunu Karaciğer Üstü Toplardamarı ile kana katar.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Büyük dolaşımda, kalpten dokulara doğru gidildikçe kanda miktarı AZALAN (dokuların aldığı) madde hangisidir?',
        options: [
          { id: 'A', text: 'Karbondioksit' },
          { id: 'B', text: 'Oksijen' },
          { id: 'C', text: 'Üre' },
          { id: 'D', text: 'Laktik asit' },
          { id: 'E', text: 'Amonyak' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük dolaşım temiz kanı dağıtır. Dokular (hücreler) bu kandan Oksijen ve Besinleri alıp kullanır, karşılığında CO2 ve atık verir. Dolayısıyla büyük dolaşım kılcallarında Oksijen azalır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Böbrek atardamarı ile Böbrek toplardamarını karşılaştırırsak, Böbrek toplardamarında HANGİ MADDENİN miktarının çok DÜŞÜK olması beklenir?',
        options: [
          { id: 'A', text: 'Üre (Böbrek üreyi süzüp idrarla attığı için)' },
          { id: 'B', text: 'Karbondioksit' },
          { id: 'C', text: 'Su' },
          { id: 'D', text: 'Kan hücreleri' },
          { id: 'E', text: 'Plazma proteinleri' }
        ],
        correctOptionId: 'A',
        explanation: 'Böbreğin görevi kanı süzerek atıkları (başta üre olmak üzere) temizlemektir. Bu yüzden böbrekten çıkan toplardamardaki üre miktarı vücuttaki en düşük seviyededir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Tansiyon, Ödem ve Nabız (Kolay)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Bir kaza anında aşırı kan kaybeden (kan hacmi azalan) bir kişinin "Kan Basıncı (Tansiyonu)" ve "Kalp Atış Hızı (Nabzı)" nasıl değişir?',
        options: [
          { id: 'A', text: 'İkisi de artar.' },
          { id: 'B', text: 'Kan basıncı DÜŞER (Hacim azaldığı için), Nabız ARTAR (Vücut dokulara kan yetiştirmek için kalbi hızlandırır).' },
          { id: 'C', text: 'İkisi de düşer.' },
          { id: 'D', text: 'Değişmez.' },
          { id: 'E', text: 'Kan basıncı artar, nabız düşer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Borudaki su azalırsa (kan kaybı) basınç düşer. Beyin oksijensiz kalmamak için kalbe "daha hızlı pompala" emri verir (Taşikardi).'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Kılcal damarlarda KAN BASINCI, kanda bulunan proteinlerin OZMOTİK BASINCINDAN büyük olduğunda madde hareketi ne yönde olur?',
        options: [
          { id: 'A', text: 'Kan hücresi oluşur.' },
          { id: 'B', text: 'Kanın içindeki sıvı damardan DOKU SIVISINA DOĞRU (dışarı) çıkar.' },
          { id: 'C', text: 'Doku sıvısı damara girer.' },
          { id: 'D', text: 'Kan geriye akar.' },
          { id: 'E', text: 'Hiçbir şey olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan basıncı dışarı iten, Ozmotik basınç içeri çeken kuvvettir. İten kuvvet büyükse (atardamar ucunda), madde dışarıya süzülür (Filtrasyon).'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Eğer bir kişinin karaciğeri hastalanır ve KAN PROTEİNLERİNİ (Albümin) YETERİNCE ÜRETEMEZSE ne olur?',
        options: [
          { id: 'A', text: 'Kan çok hızlı pıhtılaşır.' },
          { id: 'B', text: 'Kanın ozmotik çekim gücü (emme kuvveti) düşer. Sıvılar damara geri dönemez ve dokularda ÖDEM (şişlik) oluşur.' },
          { id: 'C', text: 'Tansiyon 3 katına çıkar.' },
          { id: 'D', text: 'Kemikler uzar.' },
          { id: 'E', text: 'Ateşi yükselir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Albümin damarın "su mıknatısıdır". Mıknatıs azalırsa, dokuya giden su damara geri dönemez ve karın veya bacaklar şişer (Örn: Kwashiorkor hastalığı / açlık ödemi).'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Çok tuzlu yiyecekler tüketen birinde (kanın tuzu ve suyu artarsa) KAN BASINCI nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Düşer' },
          { id: 'B', text: 'Kan hacmi artacağı için Kan Basıncı (Tansiyon) ARTAR' },
          { id: 'C', text: 'Sıfır olur' },
          { id: 'D', text: 'Sadece akciğerde artar' },
          { id: 'E', text: 'Etkilenmez' }
        ],
        correctOptionId: 'B',
        explanation: 'Tuz suyu çeker. Kanda tuz artarsa damardaki su miktarı (kan hacmi) artar, bu da damar çeperine yapılan basıncı (tansiyonu) yükseltir.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Lenf damarlarının (Örn: bacak lenflerinin) tıkanması durumunda (FİL HASTALIĞI) aşağıdakilerden hangisi gözlenir?',
        options: [
          { id: 'A', text: 'Kan çok temizlenir.' },
          { id: 'B', text: 'Lenf sıvıyı toplayamadığı için dokular arasında aşırı SIVI BİRİKİMİ (Ağır Ödem / Fil Hastalığı) gözlenir.' },
          { id: 'C', text: 'Saç dökülmesi' },
          { id: 'D', text: 'Kalp küçülmesi' },
          { id: 'E', text: 'Mide kanaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Lenf sistemi tahliye borusudur. Tahliye borusu (parazit veya başka sebeple) tıkanırsa sıvı dokuda kalır, bacaklar fil bacağı gibi şişer.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Soğuk bir günde sıcak bir odaya girdiğimizde yanaklarımızın "kızarmasının" nedeni DOLAŞIM SİSTEMİ açısından nedir?',
        options: [
          { id: 'A', text: 'Alyuvarların çoğalması' },
          { id: 'B', text: 'Deri altındaki kılcal damarların Vücut Isısını ATMAK İÇİN Genişlemesi (Vazodilatasyon) ve buraya fazla kan dolması.' },
          { id: 'C', text: 'Kanın akciğerlere gitmesi' },
          { id: 'D', text: 'Akyuvarların ölmesi' },
          { id: 'E', text: 'Ödem oluşumu' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcak ortamda vücut hararetini atmak için yüzeydeki (derideki) damarların musluklarını (sfinkterlerini) açar, bol kan gelen yüz kızarır.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Tansiyon ölçülürken aletin manşonu kolu sıkıp bırakır. Duyulan "İLK SES" Büyük Tansiyon (Sistolik), sesin "KAYBOLDUĞU AN" Küçük Tansiyon (Diyastolik) olarak ölçülür. Küçük tansiyon kalbin HANGİ DURUMUNU yansıtır?',
        options: [
          { id: 'A', text: 'Kalbin kasılma anını' },
          { id: 'B', text: 'Karıncıkların DİNLENME (Gevşeme / Diyastol) anında bile damarda bulunan sürekli (bazal) basıncı' },
          { id: 'C', text: 'Damarın koptuğu anı' },
          { id: 'D', text: 'Kanın bittiğini' },
          { id: 'E', text: 'Lenf basıncını' }
        ],
        correctOptionId: 'B',
        explanation: 'Diyastolik (Küçük) tansiyon, kalp gevşekken damarların (kendi elastikiyetiyle) kanı itmeye devam ettiği basınçtır (Normalde 80 mmHg).'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Vücudumuzda kan basıncının SABİT VE DÜMDÜZ BİR ÇİZGİYE DÖNÜŞTÜĞÜ (nabzın kaybolduğu) İLK yer neresidir?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Akciğer atardamarı' },
          { id: 'C', text: 'Kılcal damar ağının başları' },
          { id: 'D', text: 'Ana toplardamar' },
          { id: 'E', text: 'Kalbin içi' }
        ],
        correctOptionId: 'C',
        explanation: 'Atardamardaki dalgalı (sistol-diyastol) basınç arteriyolleri geçip geniş kılcal ağa girince sürtünmeden dolayı dalgasını kaybeder ve düz, yavaş bir akıntıya döner.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Alerjik bir reaksiyonda salgılanan HİSTAMİN maddesi kılcal damarların GEÇİRGENLİĞİNİ ARTIRIR. Bu durumun GÖZLE GÖRÜLEN sonucu ne olur?',
        options: [
          { id: 'A', text: 'Kilo verme' },
          { id: 'B', text: 'Kan plazmasının dokuya fazla kaçması sonucu şişlik (Ödem) ve kızarıklık' },
          { id: 'C', text: 'Boy uzaması' },
          { id: 'D', text: 'Saçların beyazlaması' },
          { id: 'E', text: 'Görme bozukluğu' }
        ],
        correctOptionId: 'B',
        explanation: 'Histamin damar duvarındaki hücrelerin arasını açar (geçirgenlik artar). Dışarı su kaçar, böcek sokması veya alerji bölgesindeki şişlik (ödem) bu yüzdendir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Uzun süre hareketsiz ayakta duran (Örn: Askerler, nöbetçiler) kişilerin bayılmasının (Senkop) damar sistemi açısından temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Kanın çok hızlanması' },
          { id: 'B', text: 'Bacak kasları hareket etmediği için (İskelet kası pompası çalışmaz) kanın bacak toplardamarlarında göllenmesi ve BEYNE GİDEN KANIN AZALMASI' },
          { id: 'C', text: 'Kalbin kaslarının erimesi' },
          { id: 'D', text: 'Akyuvarların oksijeni bitirmesi' },
          { id: 'E', text: 'Kanın pıhtılaşması' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanı yukarı beyne doğru iten en önemli faktör bacak kaslarıdır. Put gibi ayakta durursanız kan bacaklarda göllenir (tansiyon düşer) ve beyin şalteri kapatıp kişiyi yere düşürür (kan tekrar yatarak beyne ulaşsın diye).'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Yüksek tansiyon (Hipertansiyon) rahatsızlığı olan birinde, KALBİN hangi kısmının ZAMANLA daha da kalınlaşıp zorlanması beklenir?',
        options: [
          { id: 'A', text: 'Sağ kulakçık' },
          { id: 'B', text: 'Sol karıncık (Vücuda yüksek basınca karşı kan basmaya çalıştığı için)' },
          { id: 'C', text: 'Sağ karıncık' },
          { id: 'D', text: 'Kapakçıklar' },
          { id: 'E', text: 'Damar iç zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer hortumun (damarların) ucu tıkalı veya dar ise (hipertansiyon), motor (sol karıncık) suyu basabilmek için çok zorlanır ve zamanla kasları anormal kalınlaşır (Hipertrofi), kalp yorulur.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Kan Basıncı ile Kan Akış Hızı grafikleri BİRBİRİNİN AYNISI MIDIR?',
        options: [
          { id: 'A', text: 'Evet, birebir aynıdır.' },
          { id: 'B', text: 'Hayır. Basınç atardan toplara sürekli DÜŞER. Hız ise Kılcalda EN DİBİ GÖRÜR, toplardamarda tekrar BİRAZ ARTAR.' },
          { id: 'C', text: 'Basınç artar, hız düşer.' },
          { id: 'D', text: 'İkisi de daima artar.' },
          { id: 'E', text: 'Hız sabittir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Basınç: Atar > Kılcal > Toplar. \nHız: Atar > Toplar > Kılcal. Toplardamarın toplam kesiti kılcaldan daha dar olduğu için (dere tekrar nehirde toplanınca) akış hızı tekrar biraz artar.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Eğer bir hastalık sonucu Kılcal Damar çeperindeki kan basıncı (Hidrostatik basınç) NORMALE GÖRE DAHA FAZLA DÜŞERSE doku sıvısı miktarı nasıl değişir?',
        options: [
          { id: 'A', text: 'Ödem oluşur.' },
          { id: 'B', text: 'Doku sıvısı kana daha çok emileceği için doku sıvısı miktarı AZALIR.' },
          { id: 'C', text: 'Sabit kalır.' },
          { id: 'D', text: 'Kan pıhtılaşır.' },
          { id: 'E', text: 'Hücreler patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Basınç zayıflarsa (itme gücü düşerse), emme gücü (ozmotik) galip gelir. Etraftaki su kana çekilir (Buna iç kanama sonrası doku sıvısının kana geçmesi örnek verilebilir).'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Sağlıklı bir kişide "Kanın pH derecesi (yaklaşık 7.4)" hangi hücrelerin ve maddelerin taşıması sayesinde DENGEDE TUTULUR?',
        options: [
          { id: 'A', text: 'Sadece akyuvarlar.' },
          { id: 'B', text: 'Alyuvarların (Hemoglobinin) CO2 ve H+ iyonlarını bağlaması ve plazmadaki tampon sistemleri sayesinde.' },
          { id: 'C', text: 'Trombositlerin asitleri pıhtılaştırmasıyla.' },
          { id: 'D', text: 'Sadece kalbin kasılmasıyla.' },
          { id: 'E', text: 'Kemik iliği sayesinde.' }
        ],
        correctOptionId: 'B',
        explanation: 'Solunumda üretilen CO2 kana asitlik verir. Alyuvarlar ve kan proteinleri asidi tamponlayarak pH\'ın 7.4 etrafında kalmasını sağlar.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Spor esnasında organlara dağılan kan miktarında (debisinde) DEĞİŞMEYEN (Hep sabit kalan) tek organ hangisidir?',
        options: [
          { id: 'A', text: 'İskelet kasları' },
          { id: 'B', text: 'Mide' },
          { id: 'C', text: 'BEYİN' },
          { id: 'D', text: 'Deri' },
          { id: 'E', text: 'Böbrek' }
        ],
        correctOptionId: 'C',
        explanation: 'Egzersiz anında kaslara ve deriye giden kan çok artar, böbrek ve sindirime giden kan kısılır. Ancak BEYNE giden kan hacmi daima (dinlenirken de, koşarken de) SABİTTİR.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Bağışıklık ve Hastalıklar (Kolay)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bebekken suçiçeği hastalığı (virüsü) geçiren bir kişi, büyüdüğünde tekrar suçiçeği hastasıyla aynı odada kalsa bile hastalanmaz. Bu durumu sağlayan hücreler hangileridir?',
        options: [
          { id: 'A', text: 'Alyuvarlar' },
          { id: 'B', text: 'İlk hastalıkta oluşan ve virüsü yıllarca unutmayan HAFIZA (Bellek) B ve T lenfositleri' },
          { id: 'C', text: 'Trombositler' },
          { id: 'D', text: 'Doğal Katil Hücreler' },
          { id: 'E', text: 'Mide asidi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kazanılmış bağışıklığın en önemli özelliği hafızadır. Hastalık veya aşı, o mikrobun kimliğini "Hafıza hücrelerine" kaydeder.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Aşağıdaki bağışıklık sağlama yollarından hangisi "YAPAY PASİF" bağışıklığa örnektir?',
        options: [
          { id: 'A', text: 'Hastalığı kendiliğinden geçirmek' },
          { id: 'B', text: 'Laboratuvarda at, sığır veya başka insandan üretilip hastaya verilen SERUM' },
          { id: 'C', text: 'Aşı olmak' },
          { id: 'D', text: 'Anne sütü emmek (Doğal Pasif)' },
          { id: 'E', text: 'El yıkamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Pasif (kendi üretmediği silah), Yapay (tıbbi yolla iğneyle verilen). Bu tanıma Serum uyar.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Kan Grubu Uyuşmazlıklarında (Rh uyuşmazlığı / Kan Uyuşmazlığı) HANGİ DURUM tehlike yaratır?',
        options: [
          { id: 'A', text: 'Anne Rh(+), Bebek Rh(-) ise' },
          { id: 'B', text: 'Anne Rh(-), Bebek Rh(+) ise (Annenin bağışıklığı bebeğin Rh antijenine saldırır)' },
          { id: 'C', text: 'İkisi de Rh(+) ise' },
          { id: 'D', text: 'İkisi de Rh(-) ise' },
          { id: 'E', text: 'Baba Rh(-) ise' }
        ],
        correctOptionId: 'B',
        explanation: 'Anne (-) yani Rh proteinini tanımıyor (onu düşman sayıyor). Bebek (+) ise, annenin bağışıklığı plasentadan antikor göndererek bebeğin alyuvarlarını parçalayabilir (Eritroblastozis fetalis).'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'A B kan gruplarında kanda ÇÖKELME (Aglütinasyon) olayının mantığı nedir?',
        options: [
          { id: 'A', text: 'Alyuvarların çoğalmasıdır' },
          { id: 'B', text: 'Aynı harfli Antijen (Hücredeki kimlik) ile Antikorun (Kandaki silah) karşılaşarak birbirine KİLİTLENMESİ ve alyuvarları pıhtılaştırmasıdır.' },
          { id: 'C', text: 'Alyuvarların oksijensiz kalmasıdır' },
          { id: 'D', text: 'Akyuvarların ölmesidir' },
          { id: 'E', text: 'Tansiyonun düşmesidir' }
        ],
        correctOptionId: 'B',
        explanation: 'A antijeni taşıyan alyuvara, Anti-A antikoru gelirse (silah hedefi bulursa) çökelme (aglütinasyon) olur ve damarlar tıkanır. Transfüzyonda (kan nakli) buna dikkat edilir.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'AİDS (HIV virüsü) hastalığı neden vücudun bağışıklık sistemini tamamen çökertir?',
        options: [
          { id: 'A', text: 'Kırmızı kan hücrelerini yediği için' },
          { id: 'B', text: 'Özellikle savunma ordusunun komutanları olan "T lenfositlerine (Yardımcı T)" girip onları yokederek savunmayı komutansız bıraktığı için' },
          { id: 'C', text: 'Mideyi erittiği için' },
          { id: 'D', text: 'Kemikleri kırdığı için' },
          { id: 'E', text: 'Alerji yaptığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'HIV (Human Immunodeficiency Virus), bağışıklığı koordine eden Yardımcı T lenfositlerini hedef alır. Bunlar çöktüğünde B hücreleri de çalışamaz, hasta basit bir gripten bile ölebilir.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Bir kişinin kanında BOL MİKTARDA "Anti-A" ve "Anti-B" antikorları (silahları) bulunuyor, ancak hücre yüzeyinde HİÇ ANTİJEN (kimlik) bulunmuyor. Bu kişinin kan grubu nedir?',
        options: [
          { id: 'A', text: 'A grubu' },
          { id: 'B', text: 'B grubu' },
          { id: 'C', text: 'AB grubu (Genel Alıcı)' },
          { id: 'D', text: '0 (Sıfır) grubu' },
          { id: 'E', text: 'Sadece Rh(+)' }
        ],
        correctOptionId: 'D',
        explanation: 'Sıfır grubunun alyuvarında A veya B antijeni (kimliği) SIFIRDIR (Yoktur). Düşman kimliği olmadığı için plazmasında herkese karşı silah (Anti-A ve Anti-B) bulundurur.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Doğuştan "Timüs" bezi olmayan (veya körelmiş) bir çocukta HANGİ bağışıklık hücresinin olgunlaşması BEKLENMEZ?',
        options: [
          { id: 'A', text: 'B Lenfositleri (Kemik İliği / Bone marrow kaynaklı)' },
          { id: 'B', text: 'T Lenfositleri (Timüs bezi kaynaklı)' },
          { id: 'C', text: 'Trombositler' },
          { id: 'D', text: 'Alyuvarlar' },
          { id: 'E', text: 'Mide epitel hücreleri' }
        ],
        correctOptionId: 'B',
        explanation: 'T lenfositlerinin T harfi "Timüs" bezinde olgunlaştığı (eğitim gördüğü) için verilmiştir. B lenfositlerinin B harfi İngilizce kemik iliği (Bone marrow) kelimesinden gelir.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Vücudumuzda kanser hücresi oluştuğunda (günde binlerce oluşabilir) bunu hemen TESPİT EDİP öldüren (İkinci savunma hattı hücreleri) hangileridir?',
        options: [
          { id: 'A', text: 'Alyuvarlar' },
          { id: 'B', text: 'Doğal Katil Hücreler (NK - Natural Killers)' },
          { id: 'C', text: 'Trombositler' },
          { id: 'D', text: 'Pıhtılaşma faktörleri' },
          { id: 'E', text: 'Osteositler' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğal Katil Hücreler fagositik (yutucu) değildir. Kanserleşmiş veya virüs girmiş hücrenin zarına yanaşıp onu delecek zehir salgılar (lizis/patlatma) ve apoptoza zorlarlar.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Eğer bir aşı uygulamasında ölü veya zayıf antijen (mikrop) yerine, YANLIŞLIKLA gerçek ve güçlü mikrop verilirse ne olur?',
        options: [
          { id: 'A', text: 'Daha iyi bağışıklık sağlar.' },
          { id: 'B', text: 'Kişi hastalığı gerçek ve ağır şekilde geçirir (Aşının amacı hafıza oluşturmaktır, hasta etmek değil).' },
          { id: 'C', text: 'Hiçbir şey olmaz.' },
          { id: 'D', text: 'Alerji kaybolur.' },
          { id: 'E', text: 'Kan grubu değişir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşı (aktif bağışıklık) için vücuda zarar vermeyecek (toksisitesi alınmış) antijen verilir. Gerçek mikrop idman değil savaş demektir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Antikorlar (İmmünoglobulinler) mikropları DOĞRUDAN (yutarak parçalama şeklinde) mi yok ederler?',
        options: [
          { id: 'A', text: 'Evet, mikrobu yutarlar.' },
          { id: 'B', text: 'Hayır. Antikorlar mikrobu YUTMAZ. Sadece mikroba bağlanıp onu "Etkisiz hale getirir (nötralizasyon)" veya makrofajların yutması için "İşaretlerler".' },
          { id: 'C', text: 'Evet, eritirler.' },
          { id: 'D', text: 'Kanser hücresine dönüşürler.' },
          { id: 'E', text: 'Sadece virüsleri yutarlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Antikorlar "yiyici" değil, "yapışıcı" moleküllerdir (Mermidir). Virüsün kancasına yapışıp onun hücreye girmesini engellerler (Nötralizasyon).'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Bir kene ısırığı sonrası (Örn: Kırım Kongo) hastaneye yatırılan kişiye o hastalığa karşı HEMEN iyileşmesi için ne verilmelidir?',
        options: [
          { id: 'A', text: 'Hastalığın Aşısı' },
          { id: 'B', text: 'İçinde hazır antikor bulunan SERUM' },
          { id: 'C', text: 'Sadece su' },
          { id: 'D', text: 'Trombosit' },
          { id: 'E', text: 'Alerji ilacı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi zaten hastadır (Mikrop vücuttadır). Artık idman (Aşı) yapmak için 2 hafta bekleyecek vakit yoktur. Hazır asker/silah (Serum/Antikor) takviyesi gerekir.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Soğuk Algınlığı virüslerine karşı neden "Ömür Boyu" bağışıklık kazanamayız (Sürekli tekrar hasta oluruz)?',
        options: [
          { id: 'A', text: 'Bağışıklığımız zayıfladığı için.' },
          { id: 'B', text: 'Virüslerin genetik materyallerinin (RNA) sürekli MUTASYON geçirmesi (kıyafet değiştirmesi) ve hafıza hücrelerinin yeni virüsü tanıyamaması.' },
          { id: 'C', text: 'Virüslerin çok büyük olması.' },
          { id: 'D', text: 'Kan grubumuzun virüsle aynı olması.' },
          { id: 'E', text: 'Soğuğun hücreleri dondurması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kazanılmış bağışıklık (T ve B) çok spesifiktir. Virüs antijen (kimlik) yapısını 1 milimetre bile değiştirse, eski hafıza hücresi (eski anahtar) bu kilidi açamaz, süreç baştan başlar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Organ Nakli (Transplantasyon) sonrasında vücudun takılan organı REDDETMESİ (kabul etmemesi) hangi bağışıklık hücrelerinin işidir?',
        options: [
          { id: 'A', text: 'Alyuvarların' },
          { id: 'B', text: 'Hücresel bağışıklıktan sorumlu T LENFOSİTLERİNİN (Yeni organın MHC proteinlerini yabancı olarak tanıması)' },
          { id: 'C', text: 'Trombositlerin' },
          { id: 'D', text: 'Kalp kasının' },
          { id: 'E', text: 'Kemik iliğinin' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeni gelen böbreğin yüzeyindeki MHC (doku uyum) kimlikleri kişinin kendi kimliklerinden (antijenlerinden) farklıysa, T hücreleri bunu kanser veya bakteri gibi görüp bizzat saldırır.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Karaciğerin ürettiği (A vitamini fazlası değil) ve kandaki pıhtılaşmayı ENGELLEYEN (Damar içinde kanın sıvı kalmasını sağlayan) madde hangisidir?',
        options: [
          { id: 'A', text: 'Fibrinojen' },
          { id: 'B', text: 'Heparin' },
          { id: 'C', text: 'Hemoglobin' },
          { id: 'D', text: 'Histamin' },
          { id: 'E', text: 'Albümin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan damar içinde pıhtılaşmamalıdır. Heparin pıhtılaşmayı engeller (kan sulandırıcı). Histamin ise kılcal damar geçirgenliğini artırır. Her ikisi de bazofil (akyuvar) ve mast hücrelerince (bağ doku) salgılanabilir.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'İltihaplanma (İnflamasyon) tepkisinde yaralı bölgenin İRİN (İltihap) toplaması, o bölgede neyin biriktiğini gösterir?',
        options: [
          { id: 'A', text: 'Ölü Akyuvarlar (fagositler), ölü bakteriler ve doku artıkları' },
          { id: 'B', text: 'Temiz kan' },
          { id: 'C', text: 'Sadece su' },
          { id: 'D', text: 'Glikojen depoları' },
          { id: 'E', text: 'Yağ damlacıkları' }
        ],
        correctOptionId: 'A',
        explanation: 'İrin (cerahat), savaş meydanındaki cesetlerdir. Bakteriyi yutarken ölen fagositler, ölü mikroplar ve sıvı sızıntısı beyaz-sarı renkli irini oluşturur.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Kalp, Damar ve Lenf Sistemi - İleri Yorum (Kolay)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Karaciğere giren (A) ve çıkan (B) damarların içeriklerini kıyaslayan bir öğrencinin aşağıdaki yorumlardan hangisini yapması DOĞRU OLMAZ?',
        options: [
          { id: 'A', text: 'A damarındaki (Karaciğer atardamarı) oksijen, B damarından çoktur.' },
          { id: 'B', text: 'B damarındaki (Karaciğer üstü toplardamarı) üre, A damarından çoktur.' },
          { id: 'C', text: 'B damarındaki amonyak, A damarından azdır.' },
          { id: 'D', text: 'A damarındaki kan basıncı, B damarından fazladır.' },
          { id: 'E', text: 'A damarındaki karbondioksit, B damarından fazladır.' }
        ],
        correctOptionId: 'E',
        explanation: 'A damarı (Atardamar) temiz kan getirir, B damarı (Toplardamar) kirli kan götürür. Bu nedenle Karbondioksit atardamarda değil, çıkan toplardamarda daha fazladır.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Lenf sisteminin kalbe dökülürken izlediği "SAĞ" ve "SOL" lenf yolları ile ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Vücudun tüm lenfi tek bir ana kanalda toplanır.' },
          { id: 'B', text: 'Bacaklardan ve bağırsaklardan gelen lenf "Sağ Lenf Kanalına" dökülür.' },
          { id: 'C', text: 'Vücudun alt yarısı ile sol üst yarısı "Göğüs Kanalı"nda toplanır ve sol köprücük altı toplardamarına dökülür.' },
          { id: 'D', text: 'Sağ kolun lenfi doğrudan aorta dökülür.' },
          { id: 'E', text: 'Lenf sıvısı böbreklere süzülür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Lenf sistemi asimetriktir. Bedenin alt kısmı ve sol üst kısmı "Göğüs kanalında" birleşip Sol Köprücük altı toplardamarına katılır. Sadece sağ kol, göğsün sağı ve başın sağı "Sağ lenf kanalında" birleşip Sağ Köprücük altı toplardamarına katılır.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Soluk alma (İnspirasyon) sırasında göğüs boşluğunun genişleyip iç basıncının DÜŞMESİ dolaşım sisteminde neye yardımcı olur?',
        options: [
          { id: 'A', text: 'Kanın atardamarlarda hızlanmasına' },
          { id: 'B', text: 'Kanın kalbe (sağ kulakçığa) DOĞRU EMİLMESİNE (Venöz dönüşün artmasına)' },
          { id: 'C', text: 'Kanın midede göllenmesine' },
          { id: 'D', text: 'Kalp atışının durmasına' },
          { id: 'E', text: 'Trombositlerin parçalanmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Göğüs boşluğundaki basıncın düşmesi, bir şırınganın pistonunu çekmek gibi vakum etkisi yaratır ve alt kısımlardaki toplardamar kanının kalbe (yukarı) çekilmesini kolaylaştırır.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Fetal (Anne karnındaki bebek) dolaşımda, akciğerler henüz hava ile dolmadığı için KÜÇÜK DOLAŞIM işlevsizdir. Bu nedenle sağ kalpteki kanın çoğu doğrudan nereye geçer?',
        options: [
          { id: 'A', text: 'Akciğerlere' },
          { id: 'B', text: 'Mideye' },
          { id: 'C', text: 'Karaciğere' },
          { id: 'D', text: 'Kalpteki özel bir delikten (Foramen ovale) SOL KALBE geçer.' },
          { id: 'E', text: 'Göbek kordonu atardamarına' }
        ],
        correctOptionId: 'D',
        explanation: 'Fetusun akciğerleri oksijen sağlayamaz, kan plasentada temizlenir. Bu yüzden sağ kulakçıktaki kan akciğere gitmek yerine aradaki delikten (foramen ovale) doğrudan sol kulakçığa geçer.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'İnce bağırsaktan emilen bir Glikoz molekülü ile bir Yağ Asidi molekülü vücutta İLK DEFA nerede birbirine kavuşur (karşılaşır)?',
        options: [
          { id: 'A', text: 'Kapı toplardamarında' },
          { id: 'B', text: 'Karaciğerde' },
          { id: 'C', text: 'Sağ Kulakçıkta' },
          { id: 'D', text: 'Sol Köprücük Altı Toplardamarında' },
          { id: 'E', text: 'Kalbin Sol Karıncığında' }
        ],
        correctOptionId: 'C',
        explanation: 'Glikoz, kapı toplardamarı->Karaciğer->Alt ana toplardamar yolunu izlerken; Yağ asidi, Lenf->Göğüs kanalı->Sol köprücük altı->Üst ana toplardamar yolunu izler. Bu iki ana toplardamar ilk defa SAĞ KULAKÇIKTA birleşir.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Bir sporcu antrenman yaparken çizgili kaslarında karbondioksit üretimi artar. Bu durum Kılcal Damarlardaki kan akışını (sfinkterleri) nasıl etkiler?',
        options: [
          { id: 'A', text: 'Kan akışını durdurur.' },
          { id: 'B', text: 'Lokal (Bölgesel) CO2 artışı damarları GENİŞLETEREK (Vazodilatasyon) o kasa daha fazla kan gelmesini sağlar.' },
          { id: 'C', text: 'Damarları daraltarak oksijen kaybını önler.' },
          { id: 'D', text: 'Kanı sadece karaciğere yönlendirir.' },
          { id: 'E', text: 'Lenf sistemine geçirir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aktif dokularda metabolitlerin (CO2, laktik asit, ısı) artması, o bölgedeki prekapiller sfinkterlerin gevşemesine ve kaslara giden kan debisinin artmasına neden olur (Otoregülasyon).'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Lenf düğümlerinin şişmesi (Örn: boyunda bademcik, koltuk altı bezi) genellikle neyin göstergesidir?',
        options: [
          { id: 'A', text: 'Kan basıncının yükseldiğinin' },
          { id: 'B', text: 'Vücutta bir YARA veya ENFEKSİYON olduğunun ve lenfositlerin orada savaştığının' },
          { id: 'C', text: 'Kalbin çok yorulduğunun' },
          { id: 'D', text: 'Midenin boş olduğunun' },
          { id: 'E', text: 'Alyuvar sayısının arttığının' }
        ],
        correctOptionId: 'B',
        explanation: 'Lenf düğümleri süzgeç gibidir. Mikroplar buraya geldiğinde lenfositler hızla çoğalmaya başlar ve savaş bölgesine dönüşen düğüm şişer.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Ödem oluşumunu "engelleyen" veya "azaltan" faktör aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kan basıncının artması' },
          { id: 'B', text: 'Plazma proteinlerinin azalması' },
          { id: 'C', text: 'Kılcal damar geçirgenliğinin artması' },
          { id: 'D', text: 'Lenf kılcallarının tıkanması' },
          { id: 'E', text: 'Doku sıvısının (lenfe ve kana) GERİ EMİLİMİNİN artması' }
        ],
        correctOptionId: 'E',
        explanation: 'Ödem doku sıvısının artmasıdır. Sıvı damarlara (lenfe veya kana) düzgün şekilde geri emilebiliyorsa ödem azalır.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Aorttan çıkan oksijence zengin bir alyuvarın Böbreklere ulaşıp oradan Kalbe dönmesi sürecinde HANGİ KAPAKÇIKTAN geçmesi BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Böbrek atardamarından geçer (kapakçık yoktur)' },
          { id: 'B', text: 'Kılcal damardan geçer' },
          { id: 'C', text: 'Triküspit Kapaktan geçer (sağ kulakçıktan karıncığa inerken)' },
          { id: 'D', text: 'Mitral (Biküspit) Kapaktan geçer' },
          { id: 'E', text: 'Alt ana toplardamardaki venöz kapakçıklardan geçer' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitral (Biküspit) kapak sol kalptedir. Aorttan yeni çıkmış bir alyuvar sağ kalbe geri döneceği için Triküspitten geçer ancak tekrar Akciğere gidip temizlenmeden Sol kalbe (Mitral kapağa) uğrayamaz.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Toplardamarlardaki kan hacmi (kapasitesi) ile atardamarlardaki kan hacmi kıyaslandığında nasıl bir sonuç çıkar?',
        options: [
          { id: 'A', text: 'İkisi eşittir.' },
          { id: 'B', text: 'Atardamarlar kanın %80\'ini barındırır.' },
          { id: 'C', text: 'Toplardamarlar daha geniş lümenli ve esneyebilir (kapasitans damarları) oldukları için kanın büyük kısmını (yaklaşık %60-70) GÖLLENDİREREK DEPO EDERLER.' },
          { id: 'D', text: 'Kılcallar tüm kanı barındırır.' },
          { id: 'E', text: 'Kalp sürekli dolu olduğu için tüm kan kalptedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Toplardamarların duvarı ince, lümenleri (iç boşlukları) çok geniştir. Bu nedenle kanın büyük bir kısmı dinlenme anında toplardamarlarda rezerv (depo) olarak bekler.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Kan grubu A Rh(+) olan bir bireyin kan plazmasında (serumunda) DOĞAL OLARAK hangi antikor (silah) bulunur?',
        options: [
          { id: 'A', text: 'Anti-A' },
          { id: 'B', text: 'Anti-B' },
          { id: 'C', text: 'Hem Anti-A hem Anti-B' },
          { id: 'D', text: 'Anti-Rh (Anti-D)' },
          { id: 'E', text: 'Hiç antikor bulunmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi "A" kimliğine sahipse, kendine saldırmamak için Anti-A üretemez. Yabancı kabul ettiği "B" kimliğine karşı doğuştan Anti-B silahını hazır tutar. Rh(+) olduğu için Rh kimliğini tanır, Anti-Rh üretmez.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Kalbin atım hızı üzerinde hormonların da etkisi vardır. Hangi hormon kalp atışlarını HIZLANDIRMAZ?',
        options: [
          { id: 'A', text: 'Adrenalin' },
          { id: 'B', text: 'Noradrenalin' },
          { id: 'C', text: 'Tiroksin' },
          { id: 'D', text: 'Asetilkolin (Vagus sinirinden salgılanan nörotransmitter)' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'D',
        explanation: 'Adrenalin, noradrenalin ve tiroksin (metabolizmayı hızlandırır) kalbi hızlandırır. Parasempatik sinirlerin (Vagus) salgıladığı asetilkolin ise kalbi yavaşlatır.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Kalp kası (miyokart) hücreleri çizgili kas yapısında olmasına rağmen NEDEN çabuk yorulmazlar?',
        options: [
          { id: 'A', text: 'Oksijensiz solunum yaptıkları için.' },
          { id: 'B', text: 'Çok fazla mitokondri ve miyoglobin (oksijen deposu) içerdiklerinden sürekli oksijenli solunum yapabildikleri için.' },
          { id: 'C', text: 'Sadece glikoz kullandıkları için.' },
          { id: 'D', text: 'Laktik asit fermantasyonu yaptıkları için.' },
          { id: 'E', text: 'Sinirleri olmadığı için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kasında laktik asit fermantasyonu olmaz. Çok yoğun mitokondri ve miyoglobin içerdiğinden sürekli aerobik (oksijenli) solunumla çalışır, yorgunluk zehiri (laktik asit) üretmez.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Vücut ısımız arttığında (Örn: Ateşli bir hastalıkta) kalp atış hızı (Nabız) nasıl değişir?',
        options: [
          { id: 'A', text: 'Yavaşlar' },
          { id: 'B', text: 'Hızlanır' },
          { id: 'C', text: 'Değişmez' },
          { id: 'D', text: 'Durur' },
          { id: 'E', text: 'Önce durur sonra atar' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücut ısısının artması, SA düğümünün (kalbin pilinin) daha sık ateşleme yapmasına neden olur ve kalp atışları hızlanır (Ateşli çocukların nabzı çok hızlı atar).'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Karaciğer sirozu gibi hastalıklarda karaciğer görevini tam yapamaz. Bu hastanın kan tahlilinde hangi plazma proteininin MİKTARCA DÜŞMESİ, ardından hastanın karnında su toplanması (asit ödemi) beklenir?',
        options: [
          { id: 'A', text: 'Albümin' },
          { id: 'B', text: 'İnsülin' },
          { id: 'C', text: 'Hemoglobin' },
          { id: 'D', text: 'Histamin' },
          { id: 'E', text: 'Amilaz' }
        ],
        correctOptionId: 'A',
        explanation: 'Kanın ozmotik basıncını sağlayan ana protein olan Albümin karaciğerde üretilir. Üretilemezse dokulardaki sıvı kana geri çekilemez ve ödem (özellikle karın boşluğunda, asit) oluşur.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Bağışıklık Sistemi ve Yanıtlar (Kolay)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Bir bakterinin vücuda GİRMEDEN ÖNCE (örneğin yediğimiz besindeki bakterinin) mide asidi tarafından parçalanması bağışıklığın hangi hattıdır?',
        options: [
          { id: 'A', text: '1. Savunma Hattı' },
          { id: 'B', text: '2. Savunma Hattı' },
          { id: 'C', text: '3. Savunma Hattı' },
          { id: 'D', text: 'Humoral Bağışıklık' },
          { id: 'E', text: 'Hücresel Bağışıklık' }
        ],
        correctOptionId: 'A',
        explanation: 'Bakteri henüz dokulara sızamamış ve dış ortamla bağlantılı olan mide boşluğunda asitle öldürülmüştür. Bu bir fiziksel/kimyasal bariyer (1. Hat) savunmasıdır.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Vücutta bir enfeksiyon olduğunda, akyuvarların kılcal damar çeperinden SIKARAK DIŞARI ÇIKMASINA ve savaş alanına (dokuya) gitmesine imkan tanıyan olay nedir?',
        options: [
          { id: 'A', text: 'Kan basıncının sıfırlanması' },
          { id: 'B', text: 'Histamin salgılanmasıyla kılcal damar GEÇİRGENLİĞİNİN ARTMASI (Genişlemesi)' },
          { id: 'C', text: 'Akyuvarların küçülmesi' },
          { id: 'D', text: 'Alyuvarların yolu açması' },
          { id: 'E', text: 'Trombositlerin akyuvarları taşıması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağ dokudaki mast hücreleri ve bazofillerden salgılanan Histamin, damar hücrelerinin arasını aralar (geçirgenliği artırır) ve akyuvarlar (fagositler) bu aralıklardan dokuya sızar.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Kan uyuşmazlığında (Eritroblastozis fetalis) annenin kanında oluşan ve plasentadan geçerek bebeğe zarar veren silahın adı nedir?',
        options: [
          { id: 'A', text: 'Anti-A antikoru' },
          { id: 'B', text: 'Anti-Rh antikoru' },
          { id: 'C', text: 'Hemoglobin' },
          { id: 'D', text: 'Fibrin' },
          { id: 'E', text: 'Histamin' }
        ],
        correctOptionId: 'B',
        explanation: 'Rh(-) annenin bağışıklığı, Rh(+) bebeğin kanıyla karşılaştığında bebeğin kanındaki Rh proteinini düşman sayar ve ona karşı "Anti-Rh" antikorları üretir. Bu antikorlar bebeğe geçerse sorun olur.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Humoral (Sıvısal) bağışıklıkta "Sıvısal" kelimesinin anlamı nedir?',
        options: [
          { id: 'A', text: 'Mikropların suda boğulması' },
          { id: 'B', text: 'B lenfositlerinin ürettiği ANTİKORLARIN, kan PLAZMASI (sıvısı) ve lenf sıvısı yoluyla tüm vücuda dağılması' },
          { id: 'C', text: 'Gözyaşı ile mikropların atılması' },
          { id: 'D', text: 'Terleyerek mikropların atılması' },
          { id: 'E', text: 'İdrar oluşumu' }
        ],
        correctOptionId: 'B',
        explanation: 'B hücreleri antikorları kana (sıvıya) salgılar. Antikorlar vücut sıvıları (hümor) aracılığıyla hedefe ulaştığı için buna humoral (sıvısal) bağışıklık denir.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Aşağıdaki olaylardan hangisi "Doğal (Özgül olmayan)" bağışıklık sisteminin bir parçası DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Derinin mikropları engellemesi' },
          { id: 'B', text: 'Makrofajların mikrobu yutması (Fagositoz)' },
          { id: 'C', text: 'İnterferon salgılanması' },
          { id: 'D', text: 'Plazma hücrelerinin ANTİKOR üretmesi' },
          { id: 'E', text: 'İltihaplanma (Yangı)' }
        ],
        correctOptionId: 'D',
        explanation: 'Antikor üretimi B lenfositlerine aittir ve mikrobun "özel kimliğine" (antijenine) karşı yapılır. Bu nedenle özgül (kazanılmış/3. hat) bağışıklıktır.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Bir bakteri vücuda ilk kez girdiğinde B lenfositlerinin onu tanıyıp antikor üretmesi BİRKAÇ GÜN sürer (Birincil yanıt). Peki bakteri aylar sonra tekrar girerse süreç nasıl işler (İkincil yanıt)?',
        options: [
          { id: 'A', text: 'Yine birkaç gün sürer.' },
          { id: 'B', text: 'Hafıza hücreleri sayesinde ÇOK DAHA HIZLI ve ÇOK DAHA FAZLA antikor üretilir, kişi hasta olmaz.' },
          { id: 'C', text: 'Bağışıklık yorulmuş olduğu için tepki vermez.' },
          { id: 'D', text: 'Sadece ateş çıkar.' },
          { id: 'E', text: 'B lenfositler değil T lenfositler antikor üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'İkincil bağışıklık yanıtının gücü, hafıza hücrelerinin düşmanı hemen tanıması ve anında devasa miktarda antikor fırlatmasına dayanır.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Organ nakillerinde doktorların doku uyumu (MHC - Majör Histouyumluluk Kompleksi) aramasının temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Hastanın kan grubunu değiştirmemek' },
          { id: 'B', text: 'Hastanın "T Lenfositlerinin", yeni organı (farklı MHC taşıdığı için) "yabancı/düşman" sanıp parçalamasını (Hücresel Reddi) önlemek' },
          { id: 'C', text: 'Yeni organın küçülmesini engellemek' },
          { id: 'D', text: 'Bakteri üremesini engellemek' },
          { id: 'E', text: 'Yeni organın kalp atışını uydurmak' }
        ],
        correctOptionId: 'B',
        explanation: 'MHC proteinleri bizim "Kendi Hücremiz" (Self) kimlik kartımızdır. Yeni böbreğin MHC\'si farklıysa T hücreleri "Bu bizden değil" der ve saldırarak organı reddeder.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Yılan sokması vakasında hastaneye getirilen birine, KENDİSİ antikor üretene kadar vakit kaybetmemesi için HIZLICA "At kanından elde edilmiş Antivenom (Zehir karşıtı Antikor)" verilir. Bu nedir?',
        options: [
          { id: 'A', text: 'Aşı' },
          { id: 'B', text: 'Serum (Yapay Pasif Bağışıklık)' },
          { id: 'C', text: 'Antibiyotik' },
          { id: 'D', text: 'Doğal aktif bağışıklık' },
          { id: 'E', text: 'Otoimmünite' }
        ],
        correctOptionId: 'B',
        explanation: 'Hazır üretilmiş antikor verilmesi her zaman "Pasif" bağışıklıktır (Serum mantığıdır). At kanında üretilen antikorlar hastanın kanındaki yılan zehrini acilen nötralize eder.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Bağışıklık sisteminin, polen gibi aslında zararsız bir maddeyi "Ağır bir düşman" sanarak vücudu gereksiz yere savaş moduna sokması ve aşırı histamin salgılamasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Enfeksiyon' },
          { id: 'B', text: 'Alerji (Aşırı Duyarlılık)' },
          { id: 'C', text: 'Kanser' },
          { id: 'D', text: 'Bağışıklık yetmezliği' },
          { id: 'E', text: 'Otoregülasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Alerjik reaksiyonlar, bağışıklığın defolu çalışmasıdır. Zararsız polen veya fıstığa karşı devasa bir yangı (inflamasyon) tepkisi verilir.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Vücutta mikropları yutarak öldüren Makrofaj hücreleri, bağışıklığın 2. hattından olmalarına rağmen 3. hatta (özgül bağışıklığa) nasıl YARDIMCI olurlar?',
        options: [
          { id: 'A', text: 'Kan pompalayarak' },
          { id: 'B', text: 'Yuttukları mikrobun parçalarını (Antijenlerini) hücre zarlarında sergileyerek (Antijen Sunumu) T hücrelerini uyandırırlar.' },
          { id: 'C', text: 'Trombosit üreterek' },
          { id: 'D', text: 'Aşı üreterek' },
          { id: 'E', text: 'Alyuvarları yiyerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Makrofajlar ve Dendritik hücreler "Antijen Sunan Hücreler (APC)" dir. Düşmanı parçalar, kimliğini yüzeylerine yapıştırır ve T hücrelerine göstererek "Böyle bir düşman var, ona özel silah yapın" derler.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Tam kan sayımı (Hemogram) yapıldığında bir hastanın Lökosit (Akyuvar) sayısı normalin çok üzerinde, Eritrosit (Alyuvar) sayısı çok düşük çıkmıştır. Bu durum neyin işareti olabilir?',
        options: [
          { id: 'A', text: 'Spor yaptığının' },
          { id: 'B', text: 'Bir enfeksiyon geçirdiğinin ve aynı zamanda Kansızlık (Anemi) yaşadığının' },
          { id: 'C', text: 'Çok su içtiğinin' },
          { id: 'D', text: 'Sağlıklı olduğunun' },
          { id: 'E', text: 'Yüksek tansiyonu olduğunun' }
        ],
        correctOptionId: 'B',
        explanation: 'Akyuvar artışı mikrobik enfeksiyon veya yangı belirtisidir (savaş ordusu büyümüştür). Alyuvar düşüklüğü ise O2 taşıma sorunu yani Anemidir.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Kompleman Sistemi (Tamamlayıcı proteinler) bağışıklığın neresinde görev alır ve ne yapar?',
        options: [
          { id: 'A', text: 'Kalpte oksijen taşır' },
          { id: 'B', text: 'Kan plazmasında inaktif gezerler, mikrop girince aktifleşip mikropların zarını DELER veya makrofajların mikrobu yutmasını kolaylaştırırlar (Opsonizasyon).' },
          { id: 'C', text: 'Sadece alyuvarlarda bulunur' },
          { id: 'D', text: 'Kemikleri güçlendirir' },
          { id: 'E', text: 'Antikor üretir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kompleman (tamamlayıcı) proteinler ikinci savunma hattıdır (doğal). Bakteri zarlarını delme kompleksi (MAC) oluşturarak onları patlatırlar.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Bebeklikte uygulanan Karma Aşılar (Örn: DaBT, KKK) hangi amaçla yapılır?',
        options: [
          { id: 'A', text: 'Bebek hasta olduğunda hemen iyileşsin diye' },
          { id: 'B', text: 'Tek bir iğne ile birden fazla hastalığa (Örn: Kızamık, Kızamıkçık, Kabakulak) karşı HAFIZA hücresi oluşturmak için' },
          { id: 'C', text: 'Çocuğun boyu uzasın diye' },
          { id: 'D', text: 'Sadece alerjiyi önlemek için' },
          { id: 'E', text: 'Kan grubunu belirlemek için' }
        ],
        correctOptionId: 'B',
        explanation: 'Karma aşıların amacı, birden fazla zayıflatılmış antijeni aynı anda vererek vücudun tüm bu hastalıklara karşı bellek (hafıza) oluşturmasını sağlamaktır.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Gözümüze toz veya mikrop kaçtığında Gözyaşımızın bolca akması ve içindeki "Lizozim" enzimi ile bakteriyi eritmesi HANGİ savunma türüdür?',
        options: [
          { id: 'A', text: 'Humoral bağışıklık' },
          { id: 'B', text: 'Özgül (Kazanılmış) Bağışıklık' },
          { id: 'C', text: 'Özgül Olmayan (Doğal) Bağışıklık - 1. Hat' },
          { id: 'D', text: 'Hücresel bağışıklık' },
          { id: 'E', text: 'Pasif Bağışıklık' }
        ],
        correctOptionId: 'C',
        explanation: 'Gözyaşı, tükürük ve terdeki lizozim enzimi mikrobun çeşidine bakmadan (özgül olmayan) duvarını yıkarak içeri girmesini engeller (1. Savunma Hattı).'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Yüksek ateş (Örn: 38.5 derece) vücut için her zaman "hemen düşürülmesi gereken" KÖTÜ bir şey midir?',
        options: [
          { id: 'A', text: 'Evet, çok tehlikelidir.' },
          { id: 'B', text: 'Hayır, hafif-orta dereceli ateş mikropların üremesini YAVAŞLATIR ve akyuvarların (fagositlerin) fagositoz gücünü ARTIRIR (Vücudun savunma taktiğidir).' },
          { id: 'C', text: 'Ateş sadece terlemek içindir.' },
          { id: 'D', text: 'Ateş kanı dondurur.' },
          { id: 'E', text: 'Ateş lenf düğümlerini yok eder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ateş, bedenin bilerek termostatı yükseltmesidir. Amaç mikropları kavurmak ve bağışıklık askerlerini (akyuvarları) daha aktif hale getirmektir (Elbette çok yüksek ateş enzimlere zarar verir).'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Dolaşım Sistemi Deney ve Grafikleri (Orta)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Bir grafikte X damarından Y damarına, oradan Z damarına doğru Kan Basıncının SÜREKLİ AZALDIĞI (Aorttan Ana Toplara doğru), Hızın ise Y damarında DİP YAPTIĞI, Z damarında tekrar BİRAZ ARTTIĞI görülüyor. Buna göre Y damarı hangisidir?',
        options: [
          { id: 'A', text: 'Aort' },
          { id: 'B', text: 'Atardamar' },
          { id: 'C', text: 'Kılcal damar' },
          { id: 'D', text: 'Toplardamar' },
          { id: 'E', text: 'Ana Toplardamar' }
        ],
        correctOptionId: 'C',
        explanation: 'Hız grafiği U veya V şeklindedir; hızın en düşük olduğu (dip yaptığı) yer her zaman toplam kesit alanının en geniş olduğu KILCAL DAMARDIR.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Kılcal damarda madde alışverişiyle ilgili "Starling Hipotezi" grafiğinde, damar boyunca Kan Basıncı (KB) çizgisi aşağı doğru inerken, Ozmotik Basınç (OB) çizgisi yatay ve SABİT kalmaktadır. EĞER OB çizgisi normalden DAHA YUKARIDA (daha yüksekte) olsaydı (Örn: Aşırı protein artışı), grafiğin sonucunda ne değişirdi?',
        options: [
          { id: 'A', text: 'Filtrasyon (çıkış) alanı büyürdü, geri emilim küçülürdü.' },
          { id: 'B', text: 'Filtrasyon alanı KÜÇÜLÜR (az sıvı çıkar), geri emilim alanı BÜYÜR (çok sıvı kana dönerdi).' },
          { id: 'C', text: 'Hiç sıvı değişimi olmazdı.' },
          { id: 'D', text: 'Ağır ödem oluşurdu.' },
          { id: 'E', text: 'Kan hızı sıfırlanırdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ozmotik basınç kana doğru emme gücüdür. Emme gücü artarsa (çizgi yukarı kayarsa), dışarı itilen (KB > OB olan alan) azalır, içeri çekilen (OB > KB olan alan) büyür.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir araştırmacı, böbrekten süzülüp atılmayan özel bir işaretli boyayı KAPI TOPLARDAMARINA enjekte ediyor. Bu boya AORTA ULAŞANA KADAR kalbin odacıklarından HANGİ SIRAYLA geçer?',
        options: [
          { id: 'A', text: 'Sağ Kulakçık -> Sol Karıncık' },
          { id: 'B', text: 'Sağ Kulakçık -> Sağ Karıncık -> (Akciğer) -> Sol Kulakçık -> Sol Karıncık' },
          { id: 'C', text: 'Sol Kulakçık -> Sol Karıncık -> (Akciğer) -> Sağ Kulakçık -> Sağ Karıncık' },
          { id: 'D', text: 'Sağ Karıncık -> Sol Kulakçık' },
          { id: 'E', text: 'Sadece Sol Karıncıktan geçer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapı toplardamarı->Karaciğer->Alt ana toplardamar->SAĞ KULAKÇIK->SAĞ KARINCIK->Akciğer atardamarı->Akciğer->Akciğer toplardamarı->SOL KULAKÇIK->SOL KARINCIK->Aort. (8 rakamı rotası)'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Bir deneyde kalpten (SA düğüm) beyne giden tüm sinir bağlantıları (Vagus ve Sempatik sinirler) KESİLİYOR. Ancak kalbe oksijenli kan verilmeye devam ediliyor. Kalbin çalışması nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Kalp anında durur.' },
          { id: 'B', text: 'Kalp kendi başına (miyojenik) uyartı üretebildiği için ÇALIŞMAYA DEVAM EDER ancak beynin hızlandırıcı/yavaşlatıcı kontrolünden çıkar (Sabit bir ritimde atar).' },
          { id: 'C', text: 'Kalp sadece kasılır ama gevşeyemez.' },
          { id: 'D', text: 'Sadece kulakçıklar atar.' },
          { id: 'E', text: 'Kalp atışı anında 200\'e fırlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp, sinirsel uyarılara muhtaç değildir. SA düğüm kendi elektriğini üretir. Sinirler sadece arabanın gaz/fren pedalıdır, motor kalbin kendisidir.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Elektrokardiyogram (EKG) grafiğinde P dalgası (ilk küçük tepe), QRS kompleksi (büyük sivri tepe) ve T dalgası (son tümsek) bulunur. Eğer bir hastanın EKG\'sinde P dalgası HİÇ OLUŞMUYOR ancak QRS düzenli çıkıyorsa, sorun kalbin neresindedir?',
        options: [
          { id: 'A', text: 'SA düğümü (veya Kulakçıklar) uyarılmıyordur.' },
          { id: 'B', text: 'Karıncıklar hiç çalışmıyordur.' },
          { id: 'C', text: 'Yarımay kapakları kopmuştur.' },
          { id: 'D', text: 'Aort damarı tıkanmıştır.' },
          { id: 'E', text: 'Hasta ölmüştür.' }
        ],
        correctOptionId: 'A',
        explanation: 'P dalgası Kulakçıkların depolarizasyonu (uyarılması) anıdır. P dalgası yoksa SA düğüm ateşleme yapmıyordur (AV düğüm görevi devralıp karıncıkları -QRS- kastırıyor olabilir).'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Toplardamarlardaki kanın kalbe dönüş hızını gösteren bir grafikte, AŞAĞIDAKİLERDEN HANGİSİNİN artması dönüş hızını DÜŞÜRÜCÜ (yavaşlatıcı) etki yapar?',
        options: [
          { id: 'A', text: 'İskelet kaslarının kasılma miktarının' },
          { id: 'B', text: 'Nefes alma sıklığının (Göğüs emme basıncının)' },
          { id: 'C', text: 'Yerçekiminin (Özellikle ayaktayken bacaklardaki kana olan etkisi)' },
          { id: 'D', text: 'Kulakçıkların gevşeme kuvvetinin' },
          { id: 'E', text: 'Toplardamar kapakçık sayısının' }
        ],
        correctOptionId: 'C',
        explanation: 'Yerçekimi, kanı aşağı çekerek bacaklardan kalbe dönüşü ZORLAŞTIRIR. Diğer seçeneklerin tümü kanın yukarı çıkmasına YARDIM EDEN faktörlerdir.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Kandaki Alyuvar sayısının RAKIM (deniz seviyesinden yükseklik) ile ilişkisini gösteren grafik nasıldır?',
        options: [
          { id: 'A', text: 'Rakım arttıkça alyuvar sayısı azalır.' },
          { id: 'B', text: 'Rakım arttıkça havadaki oksijen basncı düştüğü için vücut telafi etmek amacıyla ALYUVAR SAYISINI ARTIRIR.' },
          { id: 'C', text: 'Rakımdan hiç etkilenmez.' },
          { id: 'D', text: 'Rakım arttıkça alyuvarlar akyuvara dönüşür.' },
          { id: 'E', text: 'Sadece Erzurum\'da alyuvar artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüksek dağlara çıkıldıkça atmosferik oksijen basıncı düşer. Vücut (böbrekten salgılanan Eritropoietin hormonuyla) kemik iliğini uyarır ve daha fazla alyuvar üreterek az oksijeni en verimli şekilde yakalamaya çalışır.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bir memeli hayvanın Aort Atardamarı, Mide Toplardamarı, Akciğer Toplardamarı ve Akciğer Atardamarı oksijen derişimlerine göre çoktan aza sıralanırsa nasıl olur?',
        options: [
          { id: 'A', text: 'Aort > Akciğer Toplardamarı > Mide Toplardamarı > Akciğer Atardamarı' },
          { id: 'B', text: 'Akciğer Toplardamarı = Aort > Akciğer Atardamarı = Mide Toplardamarı' },
          { id: 'C', text: 'Mide Toplar > Aort > Akciğer Atar > Akciğer Toplar' },
          { id: 'D', text: 'Hepsi eşittir.' },
          { id: 'E', text: 'Akciğer Atardamarı en yüksek oksijene sahiptir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Akciğer toplardamarı akciğerden taptaze çıkmış oksijenli kandır. Kalbe girer ve Aort olarak çıkar (İkisi de temizdir). Mide toplardamarı kirlidir. Akciğer atardamarı da temizlenmek üzere giden kirli kandır (İkisi de O2 fakiridir).'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Bir insanın vücuduna "X antijeni" enjekte edildikten sonra kandaki antikor miktarının zamana bağlı grafiği çiziliyor. Grafikte antikor miktarı 0\'dan başlayıp 7 gün sonra yavaş yavaş yükseliyor. Bu durum neyin kanıtıdır?',
        options: [
          { id: 'A', text: 'Kişinin daha önce bu antijeni TANIDIĞININ (İkincil yanıt)' },
          { id: 'B', text: 'Kişinin bu antijenle İLK DEFA karşılaştığının (Birincil yanıt / Tanıma evresi)' },
          { id: 'C', text: 'Kişiye serum verildiğinin' },
          { id: 'D', text: 'Hastanın bağışıklığının çöktüğünün' },
          { id: 'E', text: 'Doğal bağışıklık olduğunun' }
        ],
        correctOptionId: 'B',
        explanation: 'Antikor üretiminin gecikmeli (7-10 gün) ve yavaş olması, lenfositlerin düşmanı daha yeni tanımaya ve klonlanmaya (çoğalmaya) çalıştığını (Birincil Yanıt) gösterir.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Kan damarlarının çapı (Lümen genişliği) ile İÇİNDEKİ KANIN HIZI her zaman doğru orantılı mıdır?',
        options: [
          { id: 'A', text: 'Evet, damar ne kadar genişse kan o kadar hızlı akar.' },
          { id: 'B', text: 'Hayır. Önemli olan TEK BİR DAMARIN çapı değil, o damar tipinin vücuttaki "TOPLAM KESİT ALANIDIR". Kılcallar tek tek dar olsa da milyonlarcasının toplam alanı Aorttan çok daha geniştir, bu yüzden hız Kılcalda EN DÜŞÜKTÜR.' },
          { id: 'C', text: 'Hayır, dar damarda daha yavaş akar.' },
          { id: 'D', text: 'Kalbe yaklaştıkça hız yavaşlar.' },
          { id: 'E', text: 'Damar çapının hıza etkisi yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dolaşım sistemi kapalı boru gibidir. Dar bir dereden geniş bir göle (kılcal yatağına) dökülen suyun akıntı hızı yavaşlar.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Sistolik ve Diyastolik kan basıncı ölçümleri sırasında HANGİ DAMAR referans alınır (Tansiyon aleti nereyi ölçer)?',
        options: [
          { id: 'A', text: 'Toplardamar (Örn: koldaki mavi damar)' },
          { id: 'B', text: 'Atardamar (Örn: koldaki brakiyal arter)' },
          { id: 'C', text: 'Kılcal damar' },
          { id: 'D', text: 'Lenf damarı' },
          { id: 'E', text: 'Koroner damar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalbin yarattığı basınç dalgası (nabız ve tansiyon) sadece atardamarlarda yüksektir. Tansiyon aleti kol atardamarını (arter) sıkıştırarak ölçüm yapar.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Karıncık sistolü (kasılması) sırasında sol karıncık içindeki basıncın, Aort damarı içindeki basıncı AŞTIĞI ANDA gerçekleşen olay nedir?',
        options: [
          { id: 'A', text: 'Triküspit kapak açılır.' },
          { id: 'B', text: 'Aortik Yarımay (Semilunar) Kapakçığı AÇILIR ve kan büyük bir hızla Aorta fırlatılır.' },
          { id: 'C', text: 'Mitral kapak açılır.' },
          { id: 'D', text: 'SA düğüm ateşlenir.' },
          { id: 'E', text: 'Kalp durur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapakçıklar itme gücüyle (basınçla) çalışır. Karıncık basıncı, aorttaki basıncı yendiği milisaniye yarımay kapakları öne doğru fırlar (açılır) ve kan damara girer.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Bir fareye işaretli Oksijen gazı (O2) solutuluyor. Bu oksijen Kana GEÇTİKTEN SONRA, farenin KARACİĞERİNE ulaşana kadar Kalpten kaç kez geçer?',
        options: [
          { id: 'A', text: 'Hiç geçmez.' },
          { id: 'B', text: '1 kez geçer.' },
          { id: 'C', text: '2 kez geçer.' },
          { id: 'D', text: '3 kez geçer.' },
          { id: 'E', text: 'Önce beyne gidip sonra kalbe döner.' }
        ],
        correctOptionId: 'B',
        explanation: 'Akciğerde kana geçen O2, Akciğer toplardamarı ile Sol Kalbe GİRER (1. geçiş). Sol karıncıktan aorta pompalanıp doğrudan karaciğer atardamarıyla karaciğere gider. (Toplam 1 kez kalbe uğrar).'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Doku sıvısında biriken fazla proteinlerin Kana GERİ DÖNÜŞÜNÜ sağlayan yegane sistem hangisidir?',
        options: [
          { id: 'A', text: 'Atardamarlar' },
          { id: 'B', text: 'Toplardamarlar' },
          { id: 'C', text: 'Lenf Sistemi' },
          { id: 'D', text: 'Sinir Sistemi' },
          { id: 'E', text: 'Boşaltım Sistemi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kan kılcallarından dışarı sızan proteinler (kılcal uçta emilemeyecek kadar büyük veya basınca direnenler), çok geçirgen olan Lenf kılcallarına girerler ve lenf sistemiyle kana geri taşınırlar.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Kalbin koroner damarlarından birinin tıkanması sonucu, o damarın beslediği MİYOKART hücrelerinin oksijensiz kalarak ÖLMESİ olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Anemi (Kansızlık)' },
          { id: 'B', text: 'Miyokard Enfarktüsü (Kalp Krizi)' },
          { id: 'C', text: 'Lösemi (Kan kanseri)' },
          { id: 'D', text: 'Varis' },
          { id: 'E', text: 'Ateroskleroz' }
        ],
        correctOptionId: 'B',
        explanation: 'Damar tıkanıklığı (ateroskleroz) koroner damarda tam tıkanmaya yol açarsa hücreler ölür (nekroz/enfarktüs). Buna kalp krizi denir.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Bağışıklık Deney ve Grafikleri (Orta)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Aşılama yapılan bir bireyin antikor miktarını gösteren grafikte, 1. gün AŞI yapılmış (Aşının içinde Antijen X var). 10. günde hafif bir antikor tepeciği oluşmuştur. 30. gün bireye GİZLİCE YİNE X antijeni ve İLK DEFA Y antijeni enjekte edilmiştir. 33. günde grafikte ne görmeyi beklersiniz?',
        options: [
          { id: 'A', text: 'X antikorları hiç oluşmaz, Y antikorları hemen fırlar.' },
          { id: 'B', text: 'X antikorları ÇOK HIZLI ve ÇOK YÜKSEK bir zirve yapar (İkincil yanıt), Y antikorları ise henüz oluşmaz, birkaç gün gecikmeyle yavaşça artar (Birincil yanıt).' },
          { id: 'C', text: 'İkisine de aynı hızda yanıt verilir.' },
          { id: 'D', text: 'X ve Y antikorları birbirini yok eder.' },
          { id: 'E', text: 'Sadece Y antikoru hızlı artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağışıklık spesifiktir (özgüldür). X\'e karşı aşı olunduysa, hafıza sadece X içindir. Y yabancısı yeni gelmiştir, Y için sıfırdan "Birincil Yanıt" başlarken, X için çok hızlı "İkincil Yanıt" verilir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Bir fareye A bakterisi veriliyor, fare hasta olup 1 haftada iyileşiyor. Başka bir fareye aynı A bakterisi veriliyor ama KAN SERUMU da veriliyor, fare hasta olmadan atlatıyor. Kan serumunun içinde KORUYUCU olan (farenin hayatını kurtaran) ASIL MOLEKÜL hangisidir?',
        options: [
          { id: 'A', text: 'A bakterisinin antijeni' },
          { id: 'B', text: 'Plazma hücreleri' },
          { id: 'C', text: 'Bakteriye Özel Hazır ANTİKORLAR' },
          { id: 'D', text: 'Mide asidi' },
          { id: 'E', text: 'Trombositler' }
        ],
        correctOptionId: 'C',
        explanation: 'Serumun özelliği, başka bir canlının kanında önceden üretilmiş ve pıhtı proteinlerinden arındırılmış plazmada bulunan Hazır ANTİKORLARI içermesidir.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Yangısal tepki (İnflamasyon) sırasında sırasıyla hangi olaylar gerçekleşir?\nI. Mast hücrelerinden histamin salgılanması\nII. Kılcal damar geçirgenliğinin artması\nIII. Fagositik akyuvarların damar dışına çıkması\nIV. Bölgede şişkinlik ve kızarıklık oluşması',
        options: [
          { id: 'A', text: 'II - I - III - IV' },
          { id: 'B', text: 'I - II - III - IV' },
          { id: 'C', text: 'IV - III - II - I' },
          { id: 'D', text: 'I - III - II - IV' },
          { id: 'E', text: 'III - I - II - IV' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce alarm verilir (Histamin). Alarm damarları aralar (Geçirgenlik artar). Aralıklardan askerler çıkar (Fagositler sızar). Kanın ve sıvının o bölgeye hücumu şişlik ve kızarıklık yapar (Ödem).'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Doğuştan Bağışıklık (1. ve 2. Hat) ile Kazanılmış Bağışıklık (3. Hat) arasındaki TEMEL FARK aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Doğuştan bağışıklık antikor üretir, kazanılmış bağışıklık lizozim salgılar.' },
          { id: 'B', text: 'Doğuştan bağışıklık düşmanı ayırt etmez (GENELDİR) ve hafızası yoktur. Kazanılmış bağışıklık SADECE belli bir düşmana ÖZEL (Spesifik) silah yapar ve HAFIZA bırakır.' },
          { id: 'C', text: 'Doğuştan bağışıklık sadece kalpte bulunur.' },
          { id: 'D', text: 'Kazanılmış bağışıklık anne karnında biter.' },
          { id: 'E', text: 'İkisi de tamamen aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Özgüllük (Spesifiklik) ve Bellek (Hafıza) hücreleri 3. savunma hattının (Kazanılmış/Adaptif bağışıklığın) karakteristik özellikleridir.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'T Lenfositlerinin "Hücresel", B lenfositlerinin "Humoral (Sıvısal)" bağışıklık yapmasının biyolojik dayanağı nedir?',
        options: [
          { id: 'A', text: 'T lenfositlerinin sadece suda yaşaması' },
          { id: 'B', text: 'B lenfositlerinin kana "Antikor" fırlatarak uzaktan savaşması; T lenfositlerinin ise düşman hücresine DOĞRUDAN TEMAS EDEREK onu patlatması (Lizis) veya intihara sürüklemesidir.' },
          { id: 'C', text: 'İkisinin de aynı yerde üretilmesi' },
          { id: 'D', text: 'B lenfositlerinin kemikte, T lenfositlerinin midede olması' },
          { id: 'E', text: 'B lenfositlerinin çekirdeksiz olması' }
        ],
        correctOptionId: 'B',
        explanation: 'B hücreleri bir okçu gibi uzaktan kana antikor salgılar (Humoral). T hücreleri kılıçlı piyade gibi düşmana yapışır ve hücreyi bizzat öldürür (Hücresel).'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Antibiyotik kullanımı ile ilgili hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Bakteriyel enfeksiyonları durdurur veya bakterileri öldürür.' },
          { id: 'B', text: 'Grip ve nezle gibi VİRÜS kaynaklı hastalıklarda HİÇBİR İŞE YARAMAZ.' },
          { id: 'C', text: 'Bilinçsiz kullanımı, bakterilerin antibiyotiğe direnç kazanmasına yol açar.' },
          { id: 'D', text: 'Antibiyotikler vücutta hafıza hücreleri oluşturarak (Aşı gibi) ömür boyu koruma sağlar.' },
          { id: 'E', text: 'Mantar ve bazı bakterilerden doğal olarak elde edilebilir (Örn: Penisilin).' }
        ],
        correctOptionId: 'D',
        explanation: 'Antibiyotik dışarıdan alınan zehirdir (bakteri için). Vücudun bağışıklık sistemine "idman" yaptırmaz, hafıza oluşturmaz. Virüslere de etki etmez.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'AIDS hastalığına neden olan HIV virüsü, kan nakli veya cinsel yolla bulaştıktan sonra kişinin kanında YILLARCA belirti vermeden çoğalabilir (Kuluçka süresi). Bu uzun sürede kişi neden sağlıklı GÖRÜNÜR?',
        options: [
          { id: 'A', text: 'Virüs midede uyuduğu için' },
          { id: 'B', text: 'Yardımcı T lenfosit sayısı henüz kritik seviyenin altına (Bağışıklık çöküşüne) düşmediği ve vücut bir yandan yeni T hücreleri üreterek savaşı dengelediği için' },
          { id: 'C', text: 'Virüs zararsız olduğu için' },
          { id: 'D', text: 'Alyuvarlar virüsü gizlediği için' },
          { id: 'E', text: 'Vücut virüsü tamamen yendiği için' }
        ],
        correctOptionId: 'B',
        explanation: 'HIV yıllarca Helper T (Yardımcı T) hücrelerini yavaş yavaş öldürür, kemik iliği yenisini üretir. Ancak virüs daha hızlı çoğalıp T hücre sayısı belli bir eşiğin altına inince (yıllar sonra) bağışıklık çöker (AIDS evresi başlar).'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Kan serumunda AŞAĞIDAKİLERDEN HANGİSİ KESİNLİKLE BULUNMAZ?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Antikor' },
          { id: 'C', text: 'Fibrinojen (Pıhtılaşma Faktörleri)' },
          { id: 'D', text: 'Su' },
          { id: 'E', text: 'Hormon' }
        ],
        correctOptionId: 'C',
        explanation: 'Kan pıhtılaştıktan sonra geriye kalan sıvıya SERUM denir. Pıhtılaşma sırasında Fibrinojen kullanılıp Fibrin ipliklerine dönüştüğü ve pıhtıda kaldığı için, serumda Fibrinojen BULUNMAZ.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Otoimmün hastalıklar (Örn: Multiple Skleroz - MS, Romatoid Artrit) NEDEN ortaya çıkar?',
        options: [
          { id: 'A', text: 'Aşırı antibiyotik kullanmaktan' },
          { id: 'B', text: 'Bağışıklık hücrelerinin (T ve B lenfositlerin) kendi vücut hücrelerindeki MHC (kimlik) proteinlerini YABANCI GİBİ ALGILAYARAK kendi dokusuna saldırmasından (Öz-Tolerans kaybı)' },
          { id: 'C', text: 'Kanser hücrelerinin çoğalmasından' },
          { id: 'D', text: 'Dışarıdan mikrop girmesinden' },
          { id: 'E', text: 'Aşısız kalmaktan' }
        ],
        correctOptionId: 'B',
        explanation: 'Oto (kendi) - İmmün (bağışıklık). Savunma sistemi körleşir ve dostu düşman sanır. MS\'de sinir kılıflarına, romatizmada eklemlere, Tip 1 Diyabette pankreasa saldırır.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Aşı içindeki "Zayıflatılmış Antijenin" vücuttaki SÜRECİ sırasıyla nasıl işler?\nI. Hafıza (Bellek) hücrelerinin oluşması\nII. Antijenin Makrofajlarca yutulup T lenfositlerine sunulması\nIII. B lenfositlerinin Plazma hücrelerine dönüşüp antikor üretmesi',
        options: [
          { id: 'A', text: 'I - II - III' },
          { id: 'B', text: 'II - III - I' },
          { id: 'C', text: 'III - II - I' },
          { id: 'D', text: 'II - I - III' },
          { id: 'E', text: 'I - III - II' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce düşman yutulur ve komutan T hücresine gösterilir (II). Sonra B hücreleri silah fabrikasına (plazma hücresi) dönüşüp silah üretir (III). Bu savaşın sonunda da gaziler (Hafıza hücreleri) bir ömür boyu kalır (I).'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Annenin Rh(-), bebeğin Rh(+) olduğu bir gebelikte, İLK BEBEK genellikle sağlıklı doğarken, İKİNCİ Rh(+) BEBEKTE riskin çok daha yüksek olmasının BAĞIŞIKLIK açıklaması nedir?',
        options: [
          { id: 'A', text: 'İlk gebelikte annenin kanının bitmesi' },
          { id: 'B', text: 'İlk doğum sırasında bebeğin kanının anneye karışmasıyla annenin Rh antijenini TANIMASI ve HAFIZA HÜCRELERİ (Anti-Rh) oluşturması. İkinci gebelikte hazır hafıza hücrelerinin çok hızlı saldırması.' },
          { id: 'C', text: 'İkinci bebeğin çok zayıf olması' },
          { id: 'D', text: 'Plasentanın ikinci gebelikte çalışmaması' },
          { id: 'E', text: 'Babdan gelen genlerin değişmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Anne Rh(+) kanı ilk gebeliğin son anına (doğuma) kadar pek görmez. Doğumda kanlar karışınca anne (Birincil yanıt) antikor üretir ama bebek çoktan doğmuştur. Fakat anne artık silahlıdır (Hafıza). İkinci bebeğe anında saldırır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Doğal bağışıklıkta yer alan İNTERFERONLARIN çalışma mantığı hangisine benzer?',
        options: [
          { id: 'A', text: 'Düşmanı yutarak öldüren bir asker' },
          { id: 'B', text: 'Enfekte olmuş (işgal edilmiş) bir kalenin, düşmeden önce komşu kalelere "kapılarınızı kapatın, oklarınızı hazırlayın" diye SİNYAL ATEŞİ yakması' },
          { id: 'C', text: 'Düşmanı zehirleyen bir ok' },
          { id: 'D', text: 'Damarları tıkayan bir ağ' },
          { id: 'E', text: 'Kendi kalesini yıkan bir mancınık' }
        ],
        correctOptionId: 'B',
        explanation: 'İnterferon (Araya giren/engelleyen), virüs girmiş hücrenin ölmeden önce salgıladığı "komşuları virüse karşı hazırlayan" bir uyarıcı proteindir.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Çocukluk çağında kabakulak geçiren birinin, ileride kabakulak virüsüyle karşılaştığında hastalanmaması (Aktif Doğal Bağışıklık), hangi grafik değişimiyle GÖSTERİLEMEZ?',
        options: [
          { id: 'A', text: 'Kanda Anti-Kabakulak antikorlarının çok hızlı ve dik bir şekilde artması' },
          { id: 'B', text: 'Hafıza B hücrelerinin klonlanarak çoğalması' },
          { id: 'C', text: 'Kandaki antikor seviyesinin SIFIRDAN BAŞLAMASI (Birincil yanıt gibi)' },
          { id: 'D', text: 'Makrofaj aktivitesinin bulunması' },
          { id: 'E', text: 'Kısa sürede yüksek antikor konsantrasyonuna ulaşılması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kişi hastalığı geçirmişse kanında HER ZAMAN az miktarda nöbetçi antikor (ve hafıza hücresi) kalır. İkinci karşılaşmada grafik SIFIRDAN başlamaz, mevcut tabandan aniden fırlar.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Lenf sisteminin İKİ BÜYÜK GÖREVİ olan "Sıvı Drenajı (Ödem önleme)" ile "Yağ Taşınması" VÜCUDUN HANGİ BÖLGELERİNDE KESİŞİR?',
        options: [
          { id: 'A', text: 'Sadece bacaklarda' },
          { id: 'B', text: 'Sadece beyinde' },
          { id: 'C', text: 'Bağırsaktan gelen lakteal (yağ taşıyan lenf) damarlar ile bacaklardan gelen doku sıvısını taşıyan lenf damarları PEKE SARNICI ve GÖĞÜS KANALINDA birleşir.' },
          { id: 'D', text: 'Sadece sağ kolda' },
          { id: 'E', text: 'Kalbin sağ karıncığında' }
        ],
        correctOptionId: 'C',
        explanation: 'Alt bedenin tüm lenfi (hem bacaklardan süzülen su/protein, hem bağırsaktan emilen şilomikron yağları) karın boşluğundaki Peke Sarnıcında buluşur ve Göğüs Kanalı ile yukarı çıkar.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Kızamık virüsü ve Zatürre bakterisi (farklı iki mikrop) aynı anda vücuda girdiğinde, bağışıklık sisteminin ürettiği antikorlar birbirinin yerine kullanılabilir mi?',
        options: [
          { id: 'A', text: 'Evet, antikorlar her mikroba etki eder.' },
          { id: 'B', text: 'Hayır. 3. Savunma hattındaki Antikorlar "SPESİFİKTİR (Özgüldür)". Kızamık antikoru sadece kızamık antijeninin şekline, Zatürre antikoru zatürre antijenine "Anahtar-Kilit" gibi uyar.' },
          { id: 'C', text: 'Sadece virüslere etki eder.' },
          { id: 'D', text: 'Sadece bakterilere etki eder.' },
          { id: 'E', text: 'Antikorlar sadece 1. savunma hattında çalışır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kazanılmış bağışıklık körü körüne ateş etmez. Düşmanın yüzeyindeki proteine (antijene) tam uyumlu, üç boyutlu yapıda (Y harfi şeklinde) uçları olan spesifik antikorlar (silahlar) dizayn eder.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konunun tamamını ölçen 10 soru (Orta)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Karaciğerde üretilen protrombinin, kanda trombositlerden salgılanan tromboplastin ve Ca++ iyonları yardımıyla Trombine dönüşmesi, ardından Trombinin Fibrinojeni Fibrine çevirmesi olaylar dizisi neyin özetidir?',
        options: [
          { id: 'A', text: 'Bağışıklığın hücresel yanıtı' },
          { id: 'B', text: 'Kanın pıhtılaşması (Koagülasyon) kaskadı' },
          { id: 'C', text: 'Ödem oluşumu' },
          { id: 'D', text: 'Kan grubunun belirlenmesi' },
          { id: 'E', text: 'Kan hücrelerinin üretimi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan damar dışına çıktığında, enzimler zincirleme reaksiyonla (kaskad) suda çözünen fibrinojeni çözünmeyen fibrin (ağ) ipliklerine çevirir ve alyuvarları bu ağa takarak pıhtı tıkacı oluşturur.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Lenf sisteminin atardamarı yoktur. Peki lenf sıvısı VÜCUDUN ALT KISIMLARINDAN yerçekiminin tersine, göğse ve kalbe doğru nasıl yukarı çıkar?',
        options: [
          { id: 'A', text: 'Kalbin vakum etkisi, iskelet kaslarının hareketi ve lenf damarlarındaki TEK YÖNLÜ kapakçıklar sayesinde.' },
          { id: 'B', text: 'Sadece kalbin kasılmasıyla itilir.' },
          { id: 'C', text: 'Alyuvarların taşımasıyla.' },
          { id: 'D', text: 'Kan basıncının çok yüksek olmasıyla.' },
          { id: 'E', text: 'Aşağıdan yukarıya akmaz, sadece baştan aşağı akar.' }
        ],
        correctOptionId: 'A',
        explanation: 'Lenf sistemi çok yavaş ve düşük basınçlı bir sistemdir. İtici gücü iskelet kaslarının sıkıştırması, göğsün nefes alırken yarattığı vakum ve sıvının geri kaçmasını önleyen tek yönlü kapakçıklardır.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Kan proteinlerinin (Albümin, Globulin, Fibrinojen) ve Kan Hücrelerinin (Eritrosit, Lökosit, Trombosit) KILCAL DAMARDA DIŞARI ÇIKAMAMASININ (doku sıvısına geçememesinin) nedeni nedir?',
        options: [
          { id: 'A', text: 'Suda çözünmemeleri' },
          { id: 'B', text: 'Çok küçük olmaları' },
          { id: 'C', text: 'Polimer veya büyük yapılı hücreler olmaları (Kılcal damar porlarından sığamamaları)' },
          { id: 'D', text: 'Yüklü olmaları' },
          { id: 'E', text: 'Sadece atardamarda bulunmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Kılcal damarların duvarındaki gözeneklerden (porlardan) sadece su, glikoz, aminoasit, tuz gibi monomerler/küçük maddeler geçebilir. Büyük proteinler ve kan hücreleri (akyuvarların sızması hariç) damar içinde hapsolmuştur.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Yüksek ateşli bir hastalığı yeni atlatmış ve KANINDA BOL MİKTARDA ANTİKOR bulunan bir insandan KAN ALIP, ağır hasta olan bir başkasına SERUM olarak vermek HANGİ yöntemin temelidir?',
        options: [
          { id: 'A', text: 'Aktif bağışıklık' },
          { id: 'B', text: 'Aşılama' },
          { id: 'C', text: 'Konvelesan (İyileşen Hasta) Plazma Tedavisi (Yapay Pasif Bağışıklık)' },
          { id: 'D', text: 'Diyaliz' },
          { id: 'E', text: 'Organ nakli' }
        ],
        correctOptionId: 'C',
        explanation: 'Hastalığı yenen kişinin plazması (serumu), o hastalığın antikorlarıyla doludur. Bu serumu ağır hastaya vermek ona dışarıdan hazır antikor desteği (pasif bağışıklık) sağlamaktır (Örn: Covid-19 plazma tedavisi).'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Sağlıklı bir kişide Kalp kapakçıklarının kapanmasıyla çıkan "LUP-DUP" sesleri stetoskopla duyulur. Eğer kapakçıklar tam kapanamaz ve kan GERİYE DOĞRU (ters yöne) sızarsa, kalpten nasıl bir ses duyulur ve bu duruma ne denir?',
        options: [
          { id: 'A', text: 'Tık tık sesi duyulur, aritmi denir.' },
          { id: 'B', text: 'Üfürüm (Hışırtı) sesi duyulur, kapak yetmezliği (Kalp Üfürümü) denir.' },
          { id: 'C', text: 'Ses duyulmaz, enfarktüs denir.' },
          { id: 'D', text: 'Sürtünme sesi duyulur, perikardit denir.' },
          { id: 'E', text: 'Patlama sesi duyulur, hipertansiyon denir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapakçıklar kanın geri kaçmasını engeller. Tam kapanmazlarsa (bozulurlarsa), kan dar bir aralıktan geriye doğru sızarken rüzgar gibi bir "üfürüm" sesi (murmur) çıkarır.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Bağışıklık sistemimizin T hücrelerinin eğitildiği TİMÜS bezi yaşlandıkça küçülür ve işlevini yitirir. Bu durum yaşlılarda hangi sonuca yol açar?',
        options: [
          { id: 'A', text: 'Tansiyonun çok düşmesine' },
          { id: 'B', text: 'Yeni antijenlere karşı T hücresi (Hücresel bağışıklık) yanıtının ZAYIFLAMASINA ve enfeksiyon/kanser riskinin artmasına' },
          { id: 'C', text: 'Kemik erimesine' },
          { id: 'D', text: 'Mide asidinin artmasına' },
          { id: 'E', text: 'Görmenin bozulmasına' }
        ],
        correctOptionId: 'B',
        explanation: 'Timüs bezi çocuklukta çok büyüktür, yaşlandıkça yağ dokusuna dönüşüp körelir. Bu yüzden yaşlıların bağışıklık sistemi yeni mikropları tanımakta ve savaşmakta zorlanır.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Bir memeli hayvanın midesine işaretli bir Glikoz molekülü, bacağına ise işaretli bir Aminoasit molekülü enjekte ediliyor. Bu iki molekül dolaşım sisteminde İLK DEFA kalbin HANGİ odacığında karşılaşır?',
        options: [
          { id: 'A', text: 'Sağ Karıncık' },
          { id: 'B', text: 'Sağ Kulakçık' },
          { id: 'C', text: 'Sol Kulakçık' },
          { id: 'D', text: 'Sol Karıncık' },
          { id: 'E', text: 'Karaciğerde' }
        ],
        correctOptionId: 'B',
        explanation: 'Mideden emilen glikoz: Kapı Toplardamarı -> Karaciğer -> Alt Ana Toplardamar -> Sağ Kulakçık. Bacak kasından emilen aminoasit: Bacak Toplardamarı -> Alt Ana Toplardamar -> Sağ Kulakçık. İkisi de alt ana toplardamara bağlanarak SAĞ KULAKÇIĞA gelir.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Soğuk bir havuza aniden atladığımızda veya çok korktuğumuzda, yüzümüzdeki kılcal damarlar (sfinkterler) daralır (vazokonstriksiyon). Bu durumun amacı nedir?',
        options: [
          { id: 'A', text: 'Yüzü kızartmak' },
          { id: 'B', text: 'Kanı sadece mideye yönlendirmek' },
          { id: 'C', text: 'Yüzeydeki kanı iç organlara ve beyne (hayati organlara) çekmek, ısı kaybını önlemek' },
          { id: 'D', text: 'Terlemeyi artırmak' },
          { id: 'E', text: 'Lenf sistemini durdurmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Soğuk şoku veya korku anında (sempatik sinirler), hayati olmayan yüzey damarları büzülür ("beti benzi attı" denir) ve kan basıncı yükseltilerek iç organlara, kaslara ve beyne (savaş veya kaç için) yönlendirilir.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Eritrositlerin (Alyuvarların) memelilerde olgunlaştıktan sonra ÇEKİRDEKLERİNİ ve ORGANELLERİNİ kaybetmesinin temel evrimsel amacı nedir?',
        options: [
          { id: 'A', text: 'Hücreyi küçültüp yok etmek' },
          { id: 'B', text: 'İçerisinde çok daha fazla HEMOGLOBİN molekülü depolayabilmek ve Oksijen taşıma kapasitesini maksimize etmek' },
          { id: 'C', text: 'Oksijenli solunum yapmak' },
          { id: 'D', text: 'Antikor üretmek' },
          { id: 'E', text: 'Bölünerek çoğalmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Memeli alyuvarları adeta içi hemoglobin (O2 bağlayıcı protein) dolu torbalardır. Organelleri atarak iç hacmi genişletirler. (Mitokondrileri olmadığı için taşıdıkları O2\'yi kendileri tüketmez, laktik asit fermantasyonu yaparlar).'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Bir insanın vücudunda (sindirim sistemi dışındaki) dokular arası sıvı (Ödem) çok fazla artarsa lenf sistemi bunu nasıl tolere etmeye çalışır?',
        options: [
          { id: 'A', text: 'Lenf damarları kapanır.' },
          { id: 'B', text: 'Lenf kılcallarının geçirgenliği çok yüksek olduğu için daha fazla sıvıyı emerek lenf akışını (debisini) HIZLANDIRIR.' },
          { id: 'C', text: 'Lenf sistemi kana sıvı pompalar.' },
          { id: 'D', text: 'Lenf sistemi yok olur.' },
          { id: 'E', text: 'Lenf damarları kanla dolar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Lenf kılcallarının uçları kan kılcalları gibi sıkı değildir, kör uçlu ve kapakçıklı açık kiremitler gibidir. Doku sıvısı artarsa basınçla bu kapaklar açılır ve lenf sistemi bir drenaj pompası gibi fazla suyu emer.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek yorum ve birleştirilmiş kazanımlar (Zor)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Sağlıklı bir insanda, Akciğer Kılcallarından geçerken kanın pH\'sının YÜKSELMESİNİN (Asitliğin azalmasının) nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kana oksijen girmesi asitliği azaltır.' },
          { id: 'B', text: 'Kandaki Karbondioksitin (CO2) kılcallardan alveollere (havaya) diffüze olmasıyla kandaki ASİDİK KARAKTERLİ MOLEKÜLÜN kanı terk etmesi.' },
          { id: 'C', text: 'Kana laktik asit girmesi.' },
          { id: 'D', text: 'Alyuvarların parçalanması.' },
          { id: 'E', text: 'Kan basıncının düşmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'CO2 su ile birleştiğinde Karbonik asit oluşturur (Asidiktir). Akciğerlerde CO2 atıldığı için kanın asitliği azalır, yani pH\'ı (7.34\'ten 7.4\'e doğru) YÜKSELİR (Bazikleşir).'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Eğer bir canlının kalbindeki Triküspit (Sağ) ve Biküspit (Sol) kapakçıklar zayıflar ve İÇE DOĞRU KIVRILIRSA (Prolapsus), karıncıkların sistolü (kasılması) sırasında aşağıdakilerden hangisi GÖZLENİR?',
        options: [
          { id: 'A', text: 'Kanın tamamı aorta gider.' },
          { id: 'B', text: 'Karıncıktaki kanın bir kısmı KULAKÇIKLARA GERİ KAÇAR (Regürjitasyon), bu da kalbin pompalama verimini düşürür.' },
          { id: 'C', text: 'Kanın tamamı akciğere gider.' },
          { id: 'D', text: 'Kalp atışı durur.' },
          { id: 'E', text: 'Kan basıncı 3 katına çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'AV (Atriyoventriküler) kapaklar kanın karıncıktan kulakçığa geri dönmesini engeller. Eğer kapaklar dayanıklı değilse, güçlü karıncık kasılması kanı kulakçıklara geri teper.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bağışıklık sisteminin kanser hücrelerine karşı mücadelesinde, Doğal Katil (NK) hücrelerinin "MHC Sınıf 1 (Kimlik) molekülü EKSİK OLAN" hücreleri tespit edip öldürmesi mekanizması nasıl açıklanır?',
        options: [
          { id: 'A', text: 'Kanser hücrelerinin çok hızlı bölünmesiyle' },
          { id: 'B', text: 'Kanserleşen (veya virüs giren) hücrelerin, bağışıklıktan (T hücrelerinden) GİZLENMEK için kendi kimliklerini (MHC-1) yüzeylerinden SİLMELELERİ, NK hücrelerinin ise "Kimliksiz Hücreleri" fark edip şüpheli görerek yokedilmesi.' },
          { id: 'C', text: 'Kanser hücrelerinin çok oksijen tüketmesiyle' },
          { id: 'D', text: 'NK hücrelerinin kanser hücresi gibi davranmasıyla' },
          { id: 'E', text: 'Kanser hücrelerinin antikor üretmesiyle' }
        ],
        correctOptionId: 'B',
        explanation: 'Sitotoksik T hücreleri kimliği bozuk hücreleri öldürür. Bazı kurnaz virüsler ve kanserler kimlik kartını (MHC-I) hiç göstermez. Ancak "Doğal Katil" hücreler polis gibidir, kimliği olmayan (eksik MHC) her hücreyi anında vururlar.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Kapı Toplardamarı kesilip bağlanan bir memeli hayvanda, besinlerle alınan zehirli maddeler karaciğere uğrayamayacağı için DOĞRUDAN GENEL DOLAŞIMA katılır. Bu durumda zehrin KALPTEN SONRA İLK ZARAR VERECEĞİ ORGAN neresidir?',
        options: [
          { id: 'A', text: 'Karaciğer' },
          { id: 'B', text: 'Böbrekler' },
          { id: 'C', text: 'AKCİĞERLER' },
          { id: 'D', text: 'Beyin' },
          { id: 'E', text: 'Mide' }
        ],
        correctOptionId: 'C',
        explanation: 'Normalde zehir: Kapı topları -> Karaciğer (Temizlenir) -> Sağ Kalp -> Akciğer. Eğer karaciğer by-pass edilirse (atlatılırsa), zehirli kan Alt Ana Toplardamarla Sağ Kalbe, oradan da KÜÇÜK DOLAŞIMLA doğrudan Akciğerlere gider. (Akciğer ilk kurban olur).'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Atardamarların duvarındaki düz kaslar ve elastik lifler, kalbin fırlattığı yüksek basınçlı kanı nasıl dengeler (Nabız oluşumu)?',
        options: [
          { id: 'A', text: 'Damar duvarı beton gibi sertleşerek' },
          { id: 'B', text: 'Sistol anında (kan geldiğinde) ESNİYEREK GENİŞLER ve kanı depolar, diyastol anında (kalp gevşediğinde) ESNEK GERİ ÇEKİLME ile kanı ileri doğru itmeye devam eder.' },
          { id: 'C', text: 'Kanı geri kalbe göndererek' },
          { id: 'D', text: 'Sadece kasılıp kanı durdurarak' },
          { id: 'E', text: 'Kapakçıkları kapatarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Atardamarların esnekliği (Windkessel etkisi) kalp duraksadığında bile kanın sürekli ve kesintisiz akmasını sağlar. Esneme ve büzülme dalgası bileğimizde Nabız olarak hissedilir.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Bir insanın Kan Ozmotik Basıncı 25 mmHg, Kılcal damarın Atardamar ucundaki Kan Basıncı 40 mmHg, Toplardamar ucundaki Kan Basıncı ise 15 mmHg\'dir. Eğer Kan Basıncı, Atar ucunda 50, Toplar ucunda 30 mmHg\'ye YÜKSELİRSE sıvı alışverişi nasıl değişir?',
        options: [
          { id: 'A', text: 'Normal alışveriş devam eder.' },
          { id: 'B', text: 'Sıvı kana daha çok emilir.' },
          { id: 'C', text: 'Kan Basıncı her iki uçta da Ozmotik Basıncın (25) üstüne (50 ve 30) çıktığı için KILCAL BOYUNCA SADECE DIŞARI SIVI ÇIKAR (Geri emilim SIFIR olur) ve devasa bir ÖDEM oluşur.' },
          { id: 'D', text: 'Damar patlar.' },
          { id: 'E', text: 'Alyuvarlar dışarı çıkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Starling yasasına göre, geri emilim olması için kan basıncının ozmotik basıncın ALTINA düşmesi gerekir. Hep üstünde kalırsa, sürekli dışarı su basılır (Filtrasyon), geri emilim olmaz.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Koroner By-Pass ameliyatında, hastanın bacağından alınan bir toplardamar (ven) parçası kalbe takılarak tıkanık koroner damarın ilerisine köprü yapılır. Ancak bacak toplardamarında KAPAKÇIKLAR vardır. Cerrah bu damarı kalbe takarken neye dikkat etmelidir?',
        options: [
          { id: 'A', text: 'Damarı sıcak suda yıkamaya' },
          { id: 'B', text: 'Damarı TERS ÇEVİREREK takmaya (Çünkü normalde bacak toplarında kapakçıklar yukarı/kalbe doğru açılır. Aorttan kalbe kan taşınacağı için yön tersine çevrilmelidir ki kapaklar kanı engellemesin).' },
          { id: 'C', text: 'Damarın rengine' },
          { id: 'D', text: 'İçine hava basmaya' },
          { id: 'E', text: 'Lenf damarıyla değiştirmeye' }
        ],
        correctOptionId: 'B',
        explanation: 'Toplardamar kapakçıkları kanı tek yöne (bacaktan kalbe) burakır. Aorttan kalbe su verilecekse, o kapakçıklar kapanır ve kan gitmez. Bu yüzden damar 180 derece çevrilip dikilir.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Bağışıklık sisteminde "Hafıza" hücrelerinin yıllarca, hatta ömür boyu (Örn: Kızamık) yaşayabilmesinin hücresel nedeni nedir?',
        options: [
          { id: 'A', text: 'Mitokondrilerinin olmaması' },
          { id: 'B', text: 'Özel bir dinlenme (G0) fazına girmeleri, sürekli telomeraz enzimi aktivitesi göstermeleri ve apoptotik (ölüm) sinyallere dirençli olup lenf düğümlerinde saklanmaları.' },
          { id: 'C', text: 'Kanın içinde donmaları' },
          { id: 'D', text: 'Sürekli bölünmeleri' },
          { id: 'E', text: 'Alyuvarların içinde saklanmaları' }
        ],
        correctOptionId: 'B',
        explanation: 'Hafıza B ve T hücreleri metabolizmalarını minimuma indirir ve lenf dokularında uykuda beklerler. Yıllar sonra bile spesifik antijeni gördüklerinde anında uyanıp klonlanırlar.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Karaciğerin, kanın pıhtılaşmasını sağlayan Fibrinojeni (ve Protrombini) üretmesi ile pıhtılaşmayı ENGELLEYEN Heparini aynı anda üretmesi nasıl bir çelişkiyi çözer?',
        options: [
          { id: 'A', text: 'Çelişki yoktur, ikisi de pıhtılaştırır.' },
          { id: 'B', text: 'Kanın DAMAR İÇİNDE akarken ASLA PIHTILAŞMAMASINI (Heparin), ancak damar KESİLDİĞİNDE hızla pıhtılaşmasını (Fibrinojen sistemi) sağlayarak kusursuz bir Denge (Homeostazi) kurar.' },
          { id: 'C', text: 'Kanın midede sindirilmesini sağlar.' },
          { id: 'D', text: 'Karaciğerin küçülmesini engeller.' },
          { id: 'E', text: 'İkisi birbirini yok eder.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer heparin olmasaydı, pıhtılaşma proteinleri damar içinde kendiliğinden aktive olup (Tromboz) damarı tıkayabilirdi. Heparin kanı damar içinde akışkan tutar.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Yeni doğan bir bebeğe (Tüm bağışıklık sistemi sıfırken) annesinden plasenta yoluyla geçen "IgG" antikorları ile, anne sütü (kolostrum) yoluyla geçen "IgA" antikorları, bebeği kaç ay korur ve sonrasında neden etkisi biter?',
        options: [
          { id: 'A', text: 'Ömür boyu korur.' },
          { id: 'B', text: '6-9 ay kadar korur. Çünkü bunlar PASİF BAĞIŞIKLIKTIR (Hazır proteindir). Bebek bunları kendi üretmediği ve hafıza hücresi oluşmadığı için proteinlerin ömrü dolunca koruma biter.' },
          { id: 'C', text: 'Sadece 1 gün korur.' },
          { id: 'D', text: 'Bebek büyüyünce antikorlar virüse dönüşür.' },
          { id: 'E', text: 'Antikorlar kemik iliğine yerleşip hep orada kalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Annaden gelen antikorlar ödünç alınmış silahlardır. Silahlar zamanla (birkaç ayda) yıkılır/eskiyip atılır. Bebek bu süreçte kendi bağışıklığını (aşılarla ve doğayla) geliştirmek zorundadır.'
      }
    ]
  }
]
