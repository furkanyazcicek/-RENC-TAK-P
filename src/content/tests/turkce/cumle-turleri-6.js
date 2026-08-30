export default [
  {
    id: 'test-cumle-turleri-6-kolay',
    title: 'Cümle Türleri 6 (Kolay)',
    description: 'Cümle Türleri - Kolay (151-160)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-ct-6-1',
        difficulty: 'easy',
        questionText: 'Yükleminin türüne göre cümleler isim (ad) cümlesi ve fiil (eylem) cümlesi olarak ikiye ayrılır. Buna göre, aşağıdaki cümlelerden hangisi yükleminin türüne göre diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Dışarıdaki hava bugün oldukça soğuktu.' },
          { id: 'B', text: 'Aradığın kitap masanın üzerindedir.' },
          { id: 'C', text: 'Sabah erken saatlerde uyanıp hemen hazırlandı.' },
          { id: 'D', text: 'Onun en büyük hayali iyi bir doktor olmaktı.' },
          { id: 'E', text: 'O, okulun en çalışkan öğrencisidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (soğuk-tu: isim), B (üzerinde-dir: isim), D (olmak-tı: fiilimsi yüklem olmuş, fiilimsiler isim cümlesi sayılır), E (öğrencisi-dir: isim). C seçeneğindeki "hazırlandı" (hazırlanmak) çekimli bir fiildir, bu nedenle fiil cümlesidir.'
      },
      {
        id: 'q-ct-6-2',
        difficulty: 'easy',
        questionText: 'Yüklemi sonda bulunan cümlelere kurallı (düz) cümle denir. Aşağıdakilerden hangisi kurallı bir cümledir?',
        options: [
          { id: 'A', text: 'Anlamıyorum bana neden böyle davrandığını.' },
          { id: 'B', text: 'Geldi nihayet beklediğimiz bahar.' },
          { id: 'C', text: 'Çok güzeldi dün akşam izlediğimiz film.' },
          { id: 'D', text: 'Bütün işleri kendi başına halletti.' },
          { id: 'E', text: 'Bitmez bu yollar yürümekle.' }
        ],
        correctOptionId: 'D',
        explanation: 'A\'da yüklem "anlamıyorum" (başta), B\'de "geldi" (başta), C\'de "güzeldi" (başta/ortada), E\'de "bitmez" (başta). D seçeneğinde ise yüklem "halletti" cümlenin sonundadır, bu nedenle kurallı cümledir.'
      },
      {
        id: 'q-ct-6-3',
        difficulty: 'easy',
        questionText: 'İçinde yalnızca bir yargı (bir yüklem) bulunan ve fiilimsi (yan cümlecik) içermeyen cümlelere basit cümle denir. Aşağıdakilerden hangisi yapıca basit bir cümledir?',
        options: [
          { id: 'A', text: 'Hava kararınca herkes evine döndü.' },
          { id: 'B', text: 'Onunla konuşmak bana çok iyi geliyor.' },
          { id: 'C', text: 'Dünkü toplantı çok kısa sürdü.' },
          { id: 'D', text: 'Gelen misafirleri kapıda karşıladı.' },
          { id: 'E', text: 'Çocuk, ağlayarak annesinin yanına gitti.' }
        ],
        correctOptionId: 'C',
        explanation: 'A\'da "kararınca" (zarf-fiil), B\'de "konuşmak" (isim-fiil), D\'de "gelen" (sıfat-fiil), E\'de "ağlayarak" (zarf-fiil) yan cümlecik oluşturur ve bunlar birleşik cümledir. C seçeneğinde fiilimsi yoktur, tek yüklem (sürdü) vardır, basittir.'
      },
      {
        id: 'q-ct-6-4',
        difficulty: 'easy',
        questionText: 'Yüklemin bildirdiği eylemin gerçekleştiğini veya isim cümlesinde kavramın var olduğunu bildiren cümlelere olumlu cümle denir. Aşağıdakilerden hangisi anlamca olumlu bir cümledir?',
        options: [
          { id: 'A', text: 'Bugün hiç param yok.' },
          { id: 'B', text: 'Bu yemek pek güzel olmamış.' },
          { id: 'C', text: 'Dışarıda çok şiddetli bir yağmur yağıyor.' },
          { id: 'D', text: 'Onu bir daha hiç görmedim.' },
          { id: 'E', text: 'Sınav soruları beklediğimiz gibi değildi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yok, olmamış, görmedim, değildi kelimeleri cümlenin olumsuz olduğunu gösterir (gerçekleşmeme veya yokluk durumu). "Yağıyor" fiili eylemin gerçekleştiğini bildirdiği için olumludur.'
      },
      {
        id: 'q-ct-6-5',
        difficulty: 'easy',
        questionText: 'Birden fazla yüklemi olan ve bu yüklemlerin (cümlelerin) birbirine virgül veya noktalı virgülle bağlandığı cümlelere sıralı cümle denir. Aşağıdakilerden hangisi sıralı cümledir?',
        options: [
          { id: 'A', text: 'Sabah erken kalktı ve hızlıca hazırlandı.' },
          { id: 'B', text: 'Yağan kar bütün yolları kapattı.' },
          { id: 'C', text: 'Eve geldi, çantasını bıraktı, hemen uyudu.' },
          { id: 'D', text: 'Çok çalışmasına rağmen sınavı kazanamadı.' },
          { id: 'E', text: 'Hem kitap okuyor hem de müzik dinliyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde üç ayrı cümle (geldi / bıraktı / uyudu) birbirine virgülle bağlanarak sıralı cümle oluşturmuştur. A ve E bağlı cümle, B ve D birleşik cümledir.'
      },
      {
        id: 'q-ct-6-6',
        difficulty: 'easy',
        questionText: 'Yüklemi sonda bulunmayan (başta veya ortada olan) cümlelere devrik cümle denir. Aşağıdakilerden hangisi devrik cümle **değildir**?',
        options: [
          { id: 'A', text: 'Bekliyorum günlerdir ondan gelecek bir haber.' },
          { id: 'B', text: 'Hiç unutamam o güzel çocukluk günlerimi.' },
          { id: 'C', text: 'Karşımda duruyordu eski püskü bir ev.' },
          { id: 'D', text: 'Yüzüne bakınca anladım onun ne kadar üzgün olduğunu.' },
          { id: 'E', text: 'Her zaman doğruyu söylemek en büyük erdemdir.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde yüklem "en büyük erdemdir" ifadesidir ve cümlenin sonundadır (kurallı cümledir). Diğer cümlelerde yüklemler (bekliyorum, unutamam, duruyordu, anladım) sonda değildir.'
      },
      {
        id: 'q-ct-6-7',
        difficulty: 'easy',
        questionText: 'Yüklemi "-ma, -me, -maz, -mez, yok, değil, -sız" gibi ek veya kelimelerden birini alarak eylemin gerçekleşmediğini veya varlığın bulunmadığını bildiren cümlelere olumsuz cümle denir. Aşağıdakilerden hangisi biçimce ve anlamca olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bu kitabı okumuş değilim.' },
          { id: 'B', text: 'Seni ne arar ne de sorar.' },
          { id: 'C', text: 'Oraya nasıl gideceğimi bilmiyor değilim.' },
          { id: 'D', text: 'Ben hiç böyle bir yalan söyler miyim?' },
          { id: 'E', text: 'Bu kadar yolu yürümek kolaydır.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "değilim" sözcüğü hem biçimsel olarak olumsuzluk katmış hem de "okumadım" anlamını vererek anlamca da olumsuzluk sağlamıştır (Biçimce olumsuz, anlamca olumsuz). B ve D biçimce olumlu anlamca olumsuzdur, C biçimce olumsuz anlamca olumludur.'
      },
      {
        id: 'q-ct-6-8',
        difficulty: 'easy',
        questionText: 'İçinde isim-fiil, sıfat-fiil veya zarf-fiil bulunan, yani bir yan cümlecik barındıran cümlelere girişik birleşik cümle denir. Aşağıdakilerden hangisi girişik birleşik cümledir?',
        options: [
          { id: 'A', text: 'Akşam oldu, bütün sokaklar sessizliğe büründü.' },
          { id: 'B', text: 'O, mahallenin en çalışkan genciydi.' },
          { id: 'C', text: 'Güneş doğunca her taraf aydınlandı.' },
          { id: 'D', text: 'Ben geldim fakat o çoktan gitmişti.' },
          { id: 'E', text: 'Masadaki kitaplarını çantasına koydu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "doğunca" kelimesi zarf-fiildir ve yan cümlecik oluşturur. Bu nedenle girişik birleşik cümledir. A sıralı, B basit, D bağlı, E basit cümledir.'
      },
      {
        id: 'q-ct-6-9',
        difficulty: 'easy',
        questionText: 'Soru bildiren kelime veya ek (-mı, -mi vb.) kullanılarak bilgi almayı amaçlayan cümlelere soru cümlesi denir. Aşağıdakilerden hangisi gerçek bir soru cümlesidir?',
        options: [
          { id: 'A', text: 'Bana neden kızdığını bir türlü anlamadım.' },
          { id: 'B', text: 'Nasıl bir elbise alacağına henüz karar vermemiş.' },
          { id: 'C', text: 'Yarınki toplantı saat kaçta başlayacak?' },
          { id: 'D', text: 'Bu işin ne zaman biteceğini kimse bilmiyor.' },
          { id: 'E', text: 'Ne aradı ne sordu bunca zaman.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde bilgi alma amacı güden, cevabı beklenen gerçek bir soru cümlesi vardır. Diğer seçeneklerde soru kelimeleri kullanılmış olsa da cümleler yargı bildirir, soru sorma amacı taşımazlar.'
      },
      {
        id: 'q-ct-6-10',
        difficulty: 'easy',
        questionText: 'Cümleler anlamlarına göre emir, ünlem, soru, istek vb. türlere ayrılabilir. "Ne kadar da güzel bir hava var!" cümlesinin türü anlamca aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Soru cümlesi' },
          { id: 'B', text: 'Ünlem cümlesi' },
          { id: 'C', text: 'Şart cümlesi' },
          { id: 'D', text: 'Emir cümlesi' },
          { id: 'E', text: 'Olumsuz cümle' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede şaşırma, coşku, hayranlık gibi duygular ifade edildiği için bu bir ünlem cümlesidir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-6-orta',
    title: 'Cümle Türleri 6 (Orta)',
    description: 'Cümle Türleri - Orta (161-170)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-ct-6-11',
        difficulty: 'medium',
        questionText: 'Biçimce olumsuz cümleler yapısal olarak olumsuzluk bildiren ek veya kelime taşırlar, ancak anlamca olumlu olabilirler. Aşağıdakilerden hangisi biçimce olumsuz, anlamca olumlu bir cümledir?',
        options: [
          { id: 'A', text: 'Bu soğukta o kadar yol yürünmez.' },
          { id: 'B', text: 'Söylediklerinin ne kadar kırıcı olduğunu bilmiyor değilim.' },
          { id: 'C', text: 'Dünkü davete beni hiç kimse çağırmadı.' },
          { id: 'D', text: 'Bu saate kadar hala uyumuş değil.' },
          { id: 'E', text: 'Onunla artık görüşmek istemiyorum.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bilmiyor değilim" ifadesi, yapıca "-m" olumsuzluk eki ve "değil" kelimesi taşıdığı için biçimce olumsuzdur. Ancak iki olumsuz unsur birleşerek anlamca "biliyorum" (olumlu) anlamını vermiştir.'
      },
      {
        id: 'q-ct-6-12',
        difficulty: 'medium',
        questionText: 'Bağımsız sıralı cümlelerde, cümlenin ögelerinden (özne, nesne, dolaylı tümleç, zarf tümleci, yüklem) hiçbiri ortak kullanılmaz. Buna göre, aşağıdakilerden hangisi bağımsız sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Öğretmen içeri girdi, öğrencilerini sevgiyle selamladı.' },
          { id: 'B', text: 'Bahar geldi, ağaçlar rengarenk çiçekler açtı.' },
          { id: 'C', text: 'Kitabını masadan aldı, yavaşça çantasına koydu.' },
          { id: 'D', text: 'Çocuklar bahçeye koştu, doyasıya oynadı.' },
          { id: 'E', text: 'Eşyalarını topladı, hızla odadan ayrıldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: "Bahar geldi" (Özne: Bahar) ve "ağaçlar ... açtı" (Özne: ağaçlar). İki ayrı cümlenin ortak hiçbir ögesi yoktur (Bağımsız sıralı). A, C, D ve E seçeneklerinde özneler ortaktır (Bağımlı sıralı).'
      },
      {
        id: 'q-ct-6-13',
        difficulty: 'medium',
        questionText: 'Birleşik cümlelerde yan cümlecik ana cümlenin (yüklemin) herhangi bir ögesi olabilir. "Çalışan öğrenci, sınavda her zaman başarılı olur." cümlesinde yan cümlecik ana cümlenin hangi ögesi görevindedir?',
        options: [
          { id: 'A', text: 'Belirtili Nesne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Özne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede yüklem "başarılı olur". Başarılı olan kim? "Çalışan öğrenci". Bu kısım özne görevindedir. Fiilimsi (çalışan) özne grubunun içinde yer aldığı için yan cümlecik özne görevindedir.'
      },
      {
        id: 'q-ct-6-14',
        difficulty: 'medium',
        questionText: 'İki ya da daha fazla cümlenin birbirine bağlaçlarla bağlandığı cümlelere bağlı cümle denir. Ancak her bağlaç olan cümle bağlı cümle değildir, bağlacın cümleleri birbirine bağlaması gerekir. Buna göre aşağıdakilerden hangisi bağlı cümle **değildir**?',
        options: [
          { id: 'A', text: 'Çok çalıştı ama istediği sonucu elde edemedi.' },
          { id: 'B', text: 'Hava karardı ve sokak lambaları birer birer yandı.' },
          { id: 'C', text: 'Hem kitap okuyor hem de çayını yudumluyordu.' },
          { id: 'D', text: 'Oraya gittik ancak kimseyi bulamadık.' },
          { id: 'E', text: 'Bütün eşyaları, kalemleri ve defterleri çantasına koydu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "ve" bağlacı nesneleri (eşyaları, kalemleri, defterleri) birbirine bağlamıştır, cümleleri bağlamamıştır. Tek yüklem vardır, dolayısıyla basit cümledir. Diğerleri ise bağlaçla bağlanmış birden fazla yüklemli bağlı cümlelerdir.'
      },
      {
        id: 'q-ct-6-15',
        difficulty: 'medium',
        questionText: 'Yüklemin yerine göre cümleler kurallı, devrik veya eksiltili olabilir. Aşağıdaki cümlelerden hangisi türü bakımından eksiltili cümledir?',
        options: [
          { id: 'A', text: 'Kışın soğuğu, yazın da sıcağı yoruyor insanı.' },
          { id: 'B', text: 'Yolun sonunda küçük, şirin bir kahvehane...' },
          { id: 'C', text: 'Ne kadar da zor bir iş olduğunu yeni anladım.' },
          { id: 'D', text: 'Oraya vardığımızda herkes çoktan gitmişti.' },
          { id: 'E', text: 'Bitmeyen bir umut var kalbimin derinliklerinde.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüklemi yazılmamış (tamamlanmamış), okuyucunun zihnine bırakılmış cümlelere eksiltili cümle denir. B seçeneğinde yüklem (vardı, görünüyordu vb.) söylenmemiştir.'
      },
      {
        id: 'q-ct-6-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi yapıca (basit, birleşik, sıralı, bağlı) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Kapıyı hızla çarpıp dışarı çıktı.' },
          { id: 'B', text: 'Eve dönerken çok eski bir arkadaşını gördü.' },
          { id: 'C', text: 'Olanları duyunca çok üzüldü.' },
          { id: 'D', text: 'Hava çok soğuktu, kimse dışarı çıkmak istemiyordu.' },
          { id: 'E', text: 'Güle oynaya okula gittiler.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (çarpıp: zarf-fiil), B (dönerken: zarf-fiil), C (duyunca: zarf-fiil), E (güle oynaya: zarf-fiil) cümleleri fiilimsi bulundurduğu için girişik birleşik cümlelerdir. D seçeneği ise iki ayrı cümlenin virgülle bağlanmasıyla oluşmuş bir sıralı cümledir.'
      },
      {
        id: 'q-ct-6-17',
        difficulty: 'medium',
        questionText: 'İç içe birleşik cümleler, bir cümlenin başka bir cümle içinde öge (genellikle nesne) olarak yer almasıyla oluşur. Aşağıdakilerden hangisi iç içe birleşik cümledir?',
        options: [
          { id: 'A', text: 'Bunu yaparsa onunla bir daha asla konuşmam.' },
          { id: 'B', text: 'Öğretmenimiz, yarın sözlü sınav yapacağım, dedi.' },
          { id: 'C', text: 'Ki bağlacı bazen cümleleri birbirine bağlar.' },
          { id: 'D', text: 'Okuduğu kitabı masanın üzerine bıraktı.' },
          { id: 'E', text: 'O kadar yorgunum ki adım atacak halim kalmadı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "yarın sözlü sınav yapacağım" cümlesi, temel cümlenin (Öğretmenimiz ... dedi) içinde nesne görevinde kullanılmış bir alıntı cümledir, dolayısıyla iç içe birleşik cümledir. (A: Şartlı birleşik, D: Girişik birleşik, E: Ki\'li birleşik).'
      },
      {
        id: 'q-ct-6-18',
        difficulty: 'medium',
        questionText: 'Fiil cümleleri, yüklemi çekimli bir fiil (eylem) olan cümlelerdir. Ancak bazı kelimeler isim olduğu halde sesteş (eşsesli) özelliği gösterip eylem gibi algılanabilir. Aşağıdaki cümlelerin hangisi isim cümlesidir?',
        options: [
          { id: 'A', text: 'Akşam olunca herkes evine döner.' },
          { id: 'B', text: 'En sevdiğim mevsim her zaman yazdır.' },
          { id: 'C', text: 'Bütün gün durmadan koştu.' },
          { id: 'D', text: 'Yüzündeki tebessümle bana baktı.' },
          { id: 'E', text: 'Bu zor günleri birlikte aşacağız.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "yazdır" sözcüğüdür. Buradaki "yaz", fiil olan yazmak değil, mevsim olan "yaz" ismidir, "-dır" ek-fiilini alarak yüklem olmuştur (İsim cümlesidir). Diğerleri fiil cümlesidir.'
      },
      {
        id: 'q-ct-6-19',
        difficulty: 'medium',
        questionText: 'Cümle türlerinde sözde soru cümlesi, biçimce soru cümlesi olduğu halde bilgi almayı (cevap vermeyi) gerektirmeyen, vurgu, sitem, onaylatma gibi anlamlar taşıyan cümlelerdir. Aşağıdakilerden hangisi sözde soru cümlesidir?',
        options: [
          { id: 'A', text: 'Bu ödevi ne zamana kadar teslim etmeliyiz?' },
          { id: 'B', text: 'Toplantı tam olarak saat kaçta başlayacak?' },
          { id: 'C', text: 'Bu soğukta o kadar yol yürünür mü hiç?' },
          { id: 'D', text: 'Hangi otobüs şehir merkezine gidiyor?' },
          { id: 'E', text: 'Kütüphanede aradığın kitabı bulabildin mi?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki cümle soru kalıbıyla oluşturulmuş olsa da asıl amacı soru sormak değil, "yürünmez" anlamını vurgulamaktır (Sözde soru cümlesi). Diğerleri cevap gerektiren gerçek soru cümleleridir.'
      },
      {
        id: 'q-ct-6-20',
        difficulty: 'medium',
        questionText: 'Şartlı (koşullu) birleşik cümlelerde yan cümlecik, dilek-şart kipi (-se/-sa) ile kurularak temel cümlenin gerçekleşmesini bir şarta bağlar. Aşağıdakilerden hangisi şartlı birleşik cümledir?',
        options: [
          { id: 'A', text: 'Çok çalışırsan sınavı kesinlikle kazanırsın.' },
          { id: 'B', text: 'Yağmur yağınca sokaklar boşaldı.' },
          { id: 'C', text: 'Oraya gittim ama onu bulamadım.' },
          { id: 'D', text: 'Seninle görüşmek üzere buraya kadar geldim.' },
          { id: 'E', text: 'O kadar sinirlendi ki kimseyi gözü görmedi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "çalışırsan" sözcüğü şart kipi (-sa) almış ve cümlenin gerçekleşmesini bir şarta bağlamıştır. B girişik, C bağlı, D girişik, E ki\'li birleşik cümledir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-6-zor',
    title: 'Cümle Türleri 6 (Zor)',
    description: 'Cümle Türleri - Zor (171-180)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-ct-6-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi yapıca diğerlerinden farklı bir birleşik cümledir?',
        options: [
          { id: 'A', text: 'Soruları çözerken dikkatli olması gerektiğini anladı.' },
          { id: 'B', text: 'Güneş batınca ufuk çizgisinde kızıl bir renk oluşur.' },
          { id: 'C', text: 'Bunu yaparsan beni bir ömür boyu mutlu edersin.' },
          { id: 'D', text: 'Oraya gidip onunla mutlaka konuşacağım.' },
          { id: 'E', text: 'Söylediklerine inanmadığım için yanından ayrıldım.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçenekleri fiilimsi (çözerken, batınca, gidip, inanmadığım) bulundurduğu için girişik birleşik cümledir. C seçeneği ise dilek-şart kipiyle kurulduğu için şartlı birleşik cümledir.'
      },
      {
        id: 'q-ct-6-22',
        difficulty: 'hard',
        questionText: 'Cümleler anlamlarına göre olumlu ve olumsuz olabilirken, biçimce de (kullanılan ek veya kelimelere göre) olumlu ya da olumsuz olabilir. Aşağıdaki cümlelerin hangisi biçimce olumlu, anlamca olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Seni arayıp sormaması onun suçudur.' },
          { id: 'B', text: 'Ne aradı ne sordu bunca zaman.' },
          { id: 'C', text: 'Bu işi bitiremeyeceğini düşünmüyorum.' },
          { id: 'D', text: 'Her zaman doğru olanı yapmalıyız.' },
          { id: 'E', text: 'Hiç kimse onun kadar başarılı olamaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde herhangi bir olumsuzluk eki veya kelimesi (değil, yok, -me vb.) kullanılmamıştır, yani biçimce olumludur. Ancak "ne... ne..." bağlacı cümleye "aramadı, sormadı" şeklinde olumsuz bir anlam katmıştır.'
      },
      {
        id: 'q-ct-6-23',
        difficulty: 'hard',
        questionText: 'Fiilimsiler yan cümlecik kurarak temel cümlenin herhangi bir ögesi görevinde kullanılabilir. "Yağmurun yağmasını dört gözle bekliyorlardı." cümlesinde yan cümlecik, temel cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'D',
        explanation: 'Yüklem: bekliyorlardı. Neyi bekliyorlardı? "Yağmurun yağmasını". Soruya nesne cevap verdiği ve kelime grubu ismin belirtme hal ekini (-ı) aldığı için, "yağma-sı-n-ı" isim-fiilinin kurduğu yan cümle belirtili nesne görevindedir.'
      },
      {
        id: 'q-ct-6-24',
        difficulty: 'hard',
        questionText: 'Bağımlı sıralı cümlelerde iki veya daha fazla yüklem ortak bir veya birkaç ögeyi (özne, nesne vb.) paylaşır. Aşağıdakilerden hangisi öznesi ortak bir sıralı cümle **değildir**?',
        options: [
          { id: 'A', text: 'Kitabını aldı, hızla dışarı çıktı.' },
          { id: 'B', text: 'Kadın sessizce ağlıyor, etrafındakiler ona bakıyordu.' },
          { id: 'C', text: 'Sabah erken uyandı, çantasını hazırladı, evden ayrıldı.' },
          { id: 'D', text: 'Öğretmen sınıfa girdi, derse başladı.' },
          { id: 'E', text: 'Adam çok yoruldu, bir banka oturdu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde iki ayrı cümle vardır: 1. Kadın sessizce ağlıyor (Özne: Kadın), 2. Etrafındakiler ona bakıyordu (Özne: Etrafındakiler). Özneleri farklıdır. A, C, D, E seçeneklerinde işleri yapan özneler aynı kişi olduğu için özneleri ortak sıralı cümlelerdir.'
      },
      {
        id: 'q-ct-6-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi yükleminin türü (isim/fiil) bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Tek isteği bir an önce okulunu bitirmekti.' },
          { id: 'B', text: 'Dışarıdaki gürültü gittikçe artıyordu.' },
          { id: 'C', text: 'Bu işin ne kadar zor olduğunu yeni fark ettim.' },
          { id: 'D', text: 'Onunla bütün sorunları tek tek konuştuk.' },
          { id: 'E', text: 'Bütün gün evde yalnız başına bekledi.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki yüklemler (artıyordu, fark ettim, konuştuk, bekledi) çekimli fiildir (fiil cümlesi). A seçeneğinde ise yüklem "bitirmekti" şeklindedir. İsim-fiil (mastar) eki (-mek) alan kelimeler cümlede isim gibi kullanılır, bu nedenle bu cümle bir isim cümlesidir.'
      },
      {
        id: 'q-ct-6-26',
        difficulty: 'hard',
        questionText: 'Ki\'li birleşik cümlelerde, temel cümle ile yan cümlecik birbirine "ki" bağlacı ile bağlanır. Bazen de "ki" bağlacı basit cümleleri bağlayarak bağlı cümle kurar. Aşağıdakilerden hangisi ki\'li birleşik cümleye örnektir?',
        options: [
          { id: 'A', text: 'Görüyorum ki hala akıllanmamışsın.' },
          { id: 'B', text: 'O adam ki bu mahallenin en sevileniydi, artık yok.' },
          { id: 'C', text: 'Yüzünde öyle bir ifade vardı ki...' },
          { id: 'D', text: 'Dışarı çık ki biraz hava alasın.' },
          { id: 'E', text: 'Sen ki benim en iyi arkadaşımsın, bunu nasıl yaparsın?' }
        ],
        correctOptionId: 'A',
        explanation: '"Görüyorum ki hala akıllanmamışsın" cümlesi, "Hala akıllanmadığını görüyorum" (nesne) şeklinde dönüştürülebilir ve "ki" bağlacı burada yan cümleciği temel cümleye bağlayarak ki\'li birleşik cümle kurmuştur. (Diğer kullanımlarda ki, ara söz veya eksiltili cümle oluşturmada rol almıştır, A şıkkı ise tipik bir Farsça (ki\'li) birleşik cümle kalıbıdır).'
      },
      {
        id: 'q-ct-6-27',
        difficulty: 'hard',
        questionText: 'Bazı cümlelerde hem devriklik hem de eksiltili yapı bir arada bulunabilir. Aşağıdakilerden hangisinde böyle bir durum söz konusudur?',
        options: [
          { id: 'A', text: 'Nasıl bir güzellikti karşımızda duran...' },
          { id: 'B', text: 'Anlatamam sana duyduğum bu tarifsiz acıyı.' },
          { id: 'C', text: 'Eski zamanlardan kalma bir saat duvarda...' },
          { id: 'D', text: 'Kocaman bir orman, ağaçların arkasından süzülen güneş ışıkları.' },
          { id: 'E', text: 'Hiç unutmam onun bana söylediği o son sözleri.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem (asılıydı, duruyordu vb.) yoktur, yani cümle eksiltilidir. Ayrıca ögeler kurallı dizilmemiştir ("duvarda" kelimesi cümlenin sonunda kalarak aslında orada olması beklenen yüklemin yerini işgal etmiş, cümle devrik bir hava kazanmıştır. Yüklemi olmayan cümlede cümlenin öğeleri devrik sayılmaz kuralı tartışmalı olsa da, C şıkkı tamamlanmamış bir cümleyi devrik biçimde sunar. Ancak daha net bir soru yazalım.)',
        revised: true
      },
      {
        id: 'q-ct-6-27-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem devrik yapı hem de soru anlamı (soru cümlesi) bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Neden kimse bana yardım etmiyor?' },
          { id: 'B', text: 'Gelecek misin bizimle yarınki partiye?' },
          { id: 'C', text: 'Nasıl olduğunu kimseye anlatamam.' },
          { id: 'D', text: 'Hangi elbiseyi alacağına karar verdin mi?' },
          { id: 'E', text: 'Söyler misin bana, ne zaman bitecek bu iş?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem olan "gelecek misin" sözü cümlenin başındadır (devrik cümle) ve cümle soru anlamı taşımaktadır. E şıkkında virgülle ayrılmış sıralı cümle var.'
      },
      {
        id: 'q-ct-6-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi öge ortaklığı olmayan (bağımsız) sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Bütün gece çalıştı, yorgunluktan uyuyakaldı.' },
          { id: 'B', text: 'Yağmur dindi, ufukta güneş kendini gösterdi.' },
          { id: 'C', text: 'Odasını temizledi, çöpleri dışarı çıkardı.' },
          { id: 'D', text: 'Bizi davet etti, en güzel şekilde ağırladı.' },
          { id: 'E', text: 'Arabayı yıkadı, garaja park etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: "Yağmur dindi" (Özne: yağmur) ve "ufukta güneş kendini gösterdi" (Özne: güneş). İki cümlenin hiçbir ögesi ortak değildir (Bağımsız sıralı). Diğer seçeneklerde özneler (o) ortaktır.'
      },
      {
        id: 'q-ct-6-29',
        difficulty: 'hard',
        questionText: 'Bağlı cümleler "ve, veya, ama, fakat, ancak, çünkü" gibi bağlaçlarla kurulan birden fazla yüklemli cümlelerdir. Aşağıdakilerden hangisi yapıca bağlı cümle **değildir**?',
        options: [
          { id: 'A', text: 'Oraya gitti ancak kimseyle görüşmedi.' },
          { id: 'B', text: 'Hem işe gidiyor hem de okulunu okuyor.' },
          { id: 'C', text: 'Çok çalışıyordu ama yine de istediği notu alamıyordu.' },
          { id: 'D', text: 'Defterlerini ve kitaplarını güzelce ciltledi.' },
          { id: 'E', text: 'Bizi aramadı çünkü vakti yoktu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ve" bağlacı, eş görevli sözcükleri (nesneleri: defterleri ve kitapları) birbirine bağlamıştır. Cümlede tek yüklem (ciltledi) vardır, bu nedenle cümle basit cümledir, bağlı cümle değildir.'
      },
      {
        id: 'q-ct-6-30',
        difficulty: 'hard',
        questionText: '"Onu gördüğünde sevincinden ne yapacağını bilemedi." cümlesiyle yapı, yüklemin yeri ve yüklemin türü bakımından özdeş olan cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bütün soruları dikkatlice çözdü.' },
          { id: 'B', text: 'Eve geldiğinde kapı kilitliydi.' },
          { id: 'C', text: 'İnsanları anlamak bazen gerçekten çok zordur.' },
          { id: 'D', text: 'Son mektubunu okurken gözyaşlarını tutamadı.' },
          { id: 'E', text: 'Gelmedi beklediğimiz o güzel günler.' }
        ],
        correctOptionId: 'D',
        explanation: 'Örnek cümle: Gördüğünde, yapacağını (fiilimsi var -> birleşik), bilemedi (sonda -> kurallı), (bilememek -> fiil cümlesi). Özellikler: Birleşik, Kurallı, Fiil. D seçeneği: Okurken (fiilimsi -> birleşik), tutamadı (sonda -> kurallı), (tutamamak -> fiil cümlesi). İki cümle yapı, yüklemin yeri ve türü bakımından özdeştir.'
      }
    ]
  }
];
