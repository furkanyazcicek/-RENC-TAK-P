export default [
  {
    id: 'test-noktalama-11-kolay',
    title: 'Noktalama İşaretleri 11 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-nk-31-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) konmasına gerek yoktur?',
        options: [
          { id: 'A', text: 'Ne zaman geleceğini bana söylemedi' },
          { id: 'B', text: 'Toplantı saat kaçta başlayacakmış' },
          { id: 'C', text: 'Bu yemeği kim yaptı' },
          { id: 'D', text: 'Sence hangi elbise daha güzel' },
          { id: 'E', text: 'Oraya nasıl gideceğimizi biliyor musun' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde soru kelimesi (ne zaman) kullanılsa da asıl yargı "söylemedi"dir ve bir soru cümlesi değildir. Sonuna nokta konmalıdır.'
      },
      {
        id: 'q-nk-31-2',
        difficulty: 'easy',
        questionText: 'Sayılardan sonra "ıncı, inci" anlamında sıra bildirmek için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Noktalı virgül' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Sayılardan sonra sıra (derece) bildirmek için nokta (.) kullanılır (Örn: 1. , 5. , II. Mehmet).'
      },
      {
        id: 'q-nk-31-3',
        difficulty: 'easy',
        questionText: 'Eş görevli kelime ve kelime gruplarını birbirinden ayırmak için hangi işaret konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Birbiri ardınca sıralanan eş görevli sözcükleri ayırmak için virgül (,) kullanılır.'
      },
      {
        id: 'q-nk-31-4',
        difficulty: 'easy',
        questionText: 'Özel isimlere getirilen çekim ekleri (iyelik, durum, bildirme) hangi işaretle ayrılır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Tırnak işareti' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel adlara getirilen iyelik, durum (hâl) ve bildirme ekleri kesme işareti (\') ile ayrılır.'
      },
      {
        id: 'q-nk-31-5',
        difficulty: 'easy',
        questionText: 'Sevinç, acı, korku, heyecan, şaşkınlık bildiren cümle veya kelimelerin sonuna ne konur?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Duygu ve heyecan bildiren ifadelerin sonuna ünlem işareti (!) konur.'
      },
      {
        id: 'q-nk-31-6',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazılışında gün, ay ve yılı gösteren sayıları birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Nokta veya eğik çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihleri yazarken gün, ay, yıl belirten sayıların arasına nokta (.) veya eğik çizgi (/) konur.'
      },
      {
        id: 'q-nk-31-7',
        difficulty: 'easy',
        questionText: 'Anlamca tamamlanmamış, yüklemi söylenmemiş cümlelerin (eksiltili cümle) sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Soru işareti' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Anlatım olarak tamamlanmamış (yüklemi bulunmayan) cümlelerin sonuna üç nokta (...) konur.'
      },
      {
        id: 'q-nk-31-8',
        difficulty: 'easy',
        questionText: 'Başka bir kimseden, olduğu gibi aktarılan sözler hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Köşeli ayraç' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Tek tırnak' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğrudan aktarılan sözler ve alıntılar tırnak işareti (" ") içine alınır.'
      },
      {
        id: 'q-nk-31-9',
        difficulty: 'easy',
        questionText: 'Saat ve dakikaları gösteren sayıların arasına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'TDK kurallarına göre saat ve dakikaların arasına yalnızca nokta (.) konur.'
      },
      {
        id: 'q-nk-31-10',
        difficulty: 'easy',
        questionText: 'Satıra sığmayan kelimeler hece sonlarından bölünürken satır sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Uzun çizgi' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'A',
        explanation: 'Satıra sığmayan kelimeler bölünürken hece sonuna kısa çizgi (-) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-11-orta',
    title: 'Noktalama İşaretleri 11 (Orta)',
    description: 'Noktalama İşaretleri - Orta (101-110)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-nk-32-1',
        difficulty: 'medium',
        questionText: 'İçinde virgül bulunan sıralı cümleleri birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-32-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgül (,) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabını, kalemini ve defterini çantasına koydu.' },
          { id: 'B', text: 'O, köydeki tek doktordu.' },
          { id: 'C', text: 'Sessizce odasına çekildi, saatlerce uyudu.' },
          { id: 'D', text: 'Eğer erken kalkarsan, yürüyüşe çıkarız.' },
          { id: 'E', text: 'Evet, seni çok iyi anlıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin içinde şart eki (-se, -sa) almış kelimelerden sonra virgül konmaz. "kalkarsan" kelimesinden sonra virgül konulması yanlıştır.'
      },
      {
        id: 'q-nk-32-3',
        difficulty: 'medium',
        questionText: 'Cümle içinde ara sözleri veya ara cümleleri ayırmak için ara sözün başına ve sonuna hangi noktalama işareti konabilir?',
        options: [
          { id: 'A', text: 'İki nokta veya noktalı virgül' },
          { id: 'B', text: 'Yay ayraç veya köşeli ayraç' },
          { id: 'C', text: 'Virgül veya kısa çizgi' },
          { id: 'D', text: 'Tırnak işareti veya tek tırnak' },
          { id: 'E', text: 'Uzun çizgi veya kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ara sözleri veya ara cümleleri ayırmak için bunların başına ve sonuna virgül (,) ya da kısa çizgi (-) konur.'
      },
      {
        id: 'q-nk-32-4',
        difficulty: 'medium',
        questionText: 'Kendisiyle ilgili örnek verilecek cümlenin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendisiyle ilgili açıklama veya örnek verilecek cümlenin sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-32-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bakanlar Kurulu\'nun kararı bekleniyor.' },
          { id: 'B', text: 'Avrupa Birliği\'ne üye ülkeler...' },
          { id: 'C', text: 'Ahmet Bey\'in arabası bozulmuş.' },
          { id: 'D', text: 'TDK\'nin yeni sözlüğü çıktı.' },
          { id: 'E', text: '1999\'da büyük bir felaket yaşadık.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme ile ayrılmaz (Avrupa Birliği hariç). "Bakanlar Kurulunun" olmalıdır.'
      },
      {
        id: 'q-nk-32-6',
        difficulty: 'medium',
        questionText: 'Zarf-fiil eki almış kelimelerden sonra virgül kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Her zarf-fiilden sonra virgül konur.' },
          { id: 'B', text: 'Zarf-fiilden sonra hiçbir zaman virgül konmaz.' },
          { id: 'C', text: 'Tek bir zarf-fiilden sonra konmaz, arka arkaya sıralanırlarsa aralarına konur.' },
          { id: 'D', text: 'Sadece "ama, fakat" ile bağlanırsa konur.' },
          { id: 'E', text: 'İsim-fiil olursa konur, zarf-fiilde konmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede tek bir zarf-fiil varsa ondan sonra virgül konmaz, ancak birden fazla zarf-fiil eki almış kelime art arda sıralanırsa aralarına virgül konur.'
      },
      {
        id: 'q-nk-32-7',
        difficulty: 'medium',
        questionText: 'Metin içinde geçen "ve, veya, yahut, ki, da" bağlaçlarından sonra hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Hiçbir işaret konmaz' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlaçlardan (ve, veya, ki, da, ama vb.) önce veya sonra virgül ya da herhangi bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-32-8',
        difficulty: 'medium',
        questionText: 'Alıntı metinlerde aktaranın asıl metne eklediği açıklamalar hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Tek tırnak' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin aktarmalarında, aktaranın kendi eklediği açıklamalar veya notlar köşeli ayraç [ ] içine alınır.'
      },
      {
        id: 'q-nk-32-9',
        difficulty: 'medium',
        questionText: 'Bilinmeyen, kesin olmayan veya şüpheyle karşılaşılan bilgilerin (tarih, yer vb.) yanına konulan soru işareti nasıl kullanılır?',
        options: [
          { id: 'A', text: 'Köşeli ayraç içinde [?]' },
          { id: 'B', text: 'Yay ayraç içinde (?)' },
          { id: 'C', text: 'Tırnak içinde "?"' },
          { id: 'D', text: 'Kelimenin sonuna bitişik yazılır' },
          { id: 'E', text: 'Üç nokta ile birlikte ...?' }
        ],
        correctOptionId: 'B',
        explanation: 'Kesin olmayan veya şüpheyle karşılanan bilgiler için soru işareti yay ayraç içinde (?) kullanılır.'
      },
      {
        id: 'q-nk-32-10',
        difficulty: 'medium',
        questionText: 'Tırnak içinde verilen doğrudan alıntı bir cümlenin sonundaki noktalama işareti nereye konur?',
        options: [
          { id: 'A', text: 'Tırnak işaretinin dışına' },
          { id: 'B', text: 'Tırnak işaretinin içine' },
          { id: 'C', text: 'Cümlenin sonuna ayrıca konur' },
          { id: 'D', text: 'Tırnak kullanılmadan virgülle ayrılır' },
          { id: 'E', text: 'Tırnak içi cümlenin sonuna noktalama konmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içindeki yargı bildiren cümlenin noktalama işareti (nokta, ünlem, soru işareti vb.) her zaman tırnak içinde kalır.'
      }
    ]
  },
  {
    id: 'test-noktalama-11-zor',
    title: 'Noktalama İşaretleri 11 (Zor)',
    description: 'Noktalama İşaretleri - Zor (101-110)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-nk-33-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki noktanın (:) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Bana sadece şunu sordu: "Neden geç kaldın?"' },
          { id: 'B', text: 'Bu işin sırrı: çok çalışmak ve inanmaktır.' },
          { id: 'C', text: 'En sevdiğim mevsim: İlkbahardır.' },
          { id: 'D', text: 'Pazardan şunları aldım: elma, armut, muz.' },
          { id: 'E', text: 'Kendimi tanıtayım: Ben yeni müdürünüzüm.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde özne (En sevdiğim mevsim) ile yüklem (İlkbahardır) arasına iki nokta girmiştir. İki noktanın bu şekilde kullanımı yanlıştır.'
      },
      {
        id: 'q-nk-33-2',
        difficulty: 'hard',
        questionText: 'Özel isimlerin aldığı eklerin yazımıyla ilgili aşağıdaki kural ve uygulamalardan hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Kurum ve kuruluş adlarına gelen ekler kesme ile ayrılmaz (Türk Dil Kurumuna).' },
          { id: 'B', text: 'Özel ada gelen yapım ekleri kesme ile ayrılmaz (Türkçe).' },
          { id: 'C', text: 'Özel ada gelen yapım ekinden sonra gelen çekim ekleri kesme ile ayrılır (Türkçe\'nin).' },
          { id: 'D', text: 'Özel ada gelen çoğul ekleri kesme ile ayrılmaz (Ahmetler).' },
          { id: 'E', text: 'Kişi adlarından sonra gelen saygı sözlerine getirilen ekler kesme ile ayrılır (Ali Bey\'e).' }
        ],
        correctOptionId: 'C',
        explanation: 'TDK kurallarına göre özel adlara getirilen yapım ekleri ayrılmaz ve bunlardan sonra gelen çekim ekleri de KESİNLİKLE ayrılmaz (Türkçenin şeklinde bitişik yazılır). C seçeneğindeki ifade ve örnek yanlıştır.'
      },
      {
        id: 'q-nk-33-3',
        difficulty: 'hard',
        questionText: 'Birden fazla tekrarlanan "hem... hem, ya... ya, ne... ne" bağlaçlarının kullanıldığı cümlelerde virgül kullanımı hakkında hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Bağlaçlardan önce mutlaka virgül konur.' },
          { id: 'B', text: 'İlk bağlaçtan sonra virgül konur.' },
          { id: 'C', text: 'Bağlaçlardan sonra noktalı virgül konur.' },
          { id: 'D', text: 'Bağlaçlardan önce veya sonra virgül konmaz.' },
          { id: 'E', text: 'Virgül yerine kısa çizgi kullanılır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Tekrarlı bağlaçlardan (ya...ya, hem...hem, ne...ne vb.) önce ve sonra virgül veya başka bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-33-4',
        difficulty: 'hard',
        questionText: 'Tırnak içine alınan sözlerden (özel isim de olsa) sonra ek geldiğinde nasıl yazılır?',
        options: [
          { id: 'A', text: 'Tırnaktan sonra kesme işareti kullanılarak ek yazılır.' },
          { id: 'B', text: 'Tırnaktan sonra ek kesme işareti kullanılmadan bitişik yazılır.' },
          { id: 'C', text: 'Ek tırnak işaretinin içine yazılır.' },
          { id: 'D', text: 'Tırnak içine alınan kelimeye ek getirilemez.' },
          { id: 'E', text: 'Tırnaktan sonra bir boşluk bırakılarak ek yazılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içine alınan sözlerden sonra gelen ekleri ayırmak için kesme işareti kullanılmaz, ek tırnaktan hemen sonra bitişik yazılır (Örn: "Yaban"ı okudum).'
      },
      {
        id: 'q-nk-33-5',
        difficulty: 'hard',
        questionText: 'Eser adlarında geçen "ve, ile, ya" bağlaçlarının yazımı ve noktalaması ile ilgili hangi kural doğrudur?',
        options: [
          { id: 'A', text: 'Eser adının bütün harfleri büyük yazılsa da bağlaçlar küçük yazılır.' },
          { id: 'B', text: 'Eser adının sadece baş harfleri büyük yazılırsa bağlaçlar küçük yazılır ve etrafına noktalama konmaz.' },
          { id: 'C', text: 'Bağlaçlardan sonra daima virgül konur.' },
          { id: 'D', text: 'Eser adındaki bağlaçlar her zaman büyük yazılır.' },
          { id: 'E', text: 'Bağlaçlardan önce noktalı virgül konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eser adlarının baş harfleri büyük yazıldığında aradaki bağlaçlar küçük harfle yazılır (Leyla ile Mecnun). Bütün harfler büyük yazıldığında bağlaç da büyük yazılır. Bağlaçların yanına noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-33-6',
        difficulty: 'hard',
        questionText: 'Alay ve kinaye anlamı katmak için yay ayraç içinde ünlem işareti (!) nereye konur?',
        options: [
          { id: 'A', text: 'Kinaye yapılmak istenen sözcükten hemen önceye' },
          { id: 'B', text: 'Kinaye yapılmak istenen sözcükten hemen sonraya' },
          { id: 'C', text: 'Cümlenin en başına' },
          { id: 'D', text: 'Cümlenin en sonuna' },
          { id: 'E', text: 'Cümledeki fiilden sonra' }
        ],
        correctOptionId: 'B',
        explanation: 'Alay, kinaye veya küçümseme anlamı taşıyan sözcükten hemen sonra yay ayraç içinde ünlem işareti (!) kullanılır.'
      },
      {
        id: 'q-nk-33-7',
        difficulty: 'hard',
        questionText: 'Metin içinde aktarılmayan (atlanmış) bölümleri göstermek için üç nokta (...) yerine göre hangi işaretin içinde de kullanılabilir?',
        options: [
          { id: 'A', text: 'Köşeli ayraç [ ]' },
          { id: 'B', text: 'Yay ayraç ( )' },
          { id: 'C', text: 'Tırnak işareti " "' },
          { id: 'D', text: 'Tek tırnak \' \'' },
          { id: 'E', text: 'Kısa çizgi - -' }
        ],
        correctOptionId: 'A',
        explanation: 'Alıntılarda aktarılmayan (atlanmış) kısımları göstermek için üç nokta (...) köşeli ayraç [...] içinde de gösterilebilir.'
      },
      {
        id: 'q-nk-33-8',
        difficulty: 'hard',
        questionText: 'İkilemelerin yazılışı ve noktalaması ile ilgili aşağıdaki cümlelerin hangisinde hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Er geç bu iş çözülecek.' },
          { id: 'B', text: 'Bizi eften püften bahanelerle oyaladı.' },
          { id: 'C', text: 'Oraya düşe kalka vardık.' },
          { id: 'D', text: 'Aşağı, yukarı beş saatte vardık.' },
          { id: 'E', text: 'Konuyu enine boyuna inceledik.' }
        ],
        correctOptionId: 'D',
        explanation: 'İkilemelerin arasına virgül de dahil hiçbir noktalama işareti konmaz. D seçeneğinde "Aşağı yukarı" arasına virgül konması yanlıştır.'
      },
      {
        id: 'q-nk-33-9',
        difficulty: 'hard',
        questionText: 'Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra virgül konmasıyla ilgili kurala göre, aşağıdakilerin hangisinde noktalama yanlışı vardır?',
        options: [
          { id: 'A', text: 'Dinlenerek, sakince yolculuk yaptık.' },
          { id: 'B', text: 'Gidip, görüp, öyle dönecek.' },
          { id: 'C', text: 'Düşünüp taşınarak, ince eleyip sık dokuyarak karar verdi.' },
          { id: 'D', text: 'İşlerini bitirip, hemen kitap okumaya başladı.' },
          { id: 'E', text: 'Çocuk ağlayarak, bağırarak yanımıza geldi.' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin içinde tek zarf-fiil eki almış kelimeden sonra virgül konmaz. D seçeneğinde tek zarf-fiil ("bitirip") olduğu için virgül konulması yanlıştır.'
      },
      {
        id: 'q-nk-33-10',
        difficulty: 'hard',
        questionText: 'TDK kurallarına göre, yüzyıl kelimesinin (yy.) kısaltmasına gelen ekler nasıl yazılır?',
        options: [
          { id: 'A', text: 'yy\'da' },
          { id: 'B', text: 'yy.da' },
          { id: 'C', text: 'yy.\'da' },
          { id: 'D', text: 'yy. dan' },
          { id: 'E', text: 'y.y.\'da' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçük harflerle yapılan ve sonunda nokta bulunan kısaltmalara getirilen ekler kesmeyle ayrılmaz, kelime doğrudan noktadan sonra bitişik yazılır. Ekin okunuşu kelimenin kendisine göre olur (yy.da = yüzyılda).'
      }
    ]
  }
]
