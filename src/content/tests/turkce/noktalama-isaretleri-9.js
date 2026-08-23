export default [
  {
    id: 'test-noktalama-9-kolay',
    title: 'Noktalama İşaretleri 9 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-nk-25-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu çantayı nereden buldun?' },
          { id: 'B', text: 'Ne zaman döneceğini bilmiyorum?' },
          { id: 'C', text: 'Acaba yarın yağmur yağar mı?' },
          { id: 'D', text: 'Sınavı kazanan kimmiş?' },
          { id: 'E', text: 'Neden sürekli aynı hatayı yapıyorsun?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Ne zaman döneceğini bilmiyorum" cümlesi bir soru cümlesi değil, yargı bildiren düz bir cümledir. Soru işareti yerine nokta konmalıdır.'
      },
      {
        id: 'q-nk-25-2',
        difficulty: 'easy',
        questionText: 'Hitap kelimelerinden (Sevgili Anneciğim, Sayın Vali vb.) sonra hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Ünlem' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Mektuplarda ve resmî yazışmalarda hitap bildiren kelimelerden sonra virgül (,) konur.'
      },
      {
        id: 'q-nk-25-3',
        difficulty: 'easy',
        questionText: 'Özel isimlere getirilen durum, iyelik ve bildirme ekleri hangi işaretle ayrılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Tırnak işareti' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel adlara getirilen iyelik, durum (hâl) ve bildirme ekleri kesme işareti (\') ile ayrılır.'
      },
      {
        id: 'q-nk-25-4',
        difficulty: 'easy',
        questionText: 'Tamamlanmamış cümlelerin (eksiltili cümlelerin) sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Soru işareti' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Ünlem işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Anlatım olarak tamamlanmamış, yüklemi söylenmemiş cümlelerin sonuna üç nokta (...) konur.'
      },
      {
        id: 'q-nk-25-5',
        difficulty: 'easy',
        questionText: 'Sevinç, kıvanç, acı, korku, şaşma gibi duyguları anlatan kelime veya cümlelerin sonuna ne konur?',
        options: [
          { id: 'A', text: 'Üç nokta' },
          { id: 'B', text: 'Ünlem işareti' },
          { id: 'C', text: 'Soru işareti' },
          { id: 'D', text: 'Noktalı virgül' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Duygu bildiren ifadelerin ve ünlem cümlelerinin sonuna ünlem işareti (!) konur.'
      },
      {
        id: 'q-nk-25-6',
        difficulty: 'easy',
        questionText: 'Sayılardan sonra sıra bildirmek amacıyla (ıncı, inci yerine) hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Sayılardan sonra sıra (derece) bildirmek için nokta (.) kullanılır (Örn: 2., 3.).'
      },
      {
        id: 'q-nk-25-7',
        difficulty: 'easy',
        questionText: 'Eş görevli kelime ve kelime gruplarını birbirinden ayırmak için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Art arda sıralanan eş görevli kelimeler veya kelime grupları virgül (,) ile ayrılır.'
      },
      {
        id: 'q-nk-25-8',
        difficulty: 'easy',
        questionText: 'Saat ve dakika gösteren sayıları birbirinden ayırmak için hangisi kullanılır?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'D',
        explanation: 'TDK kurallarına göre saat ve dakikayı bildiren sayıların arasına yalnızca nokta (.) konur.'
      },
      {
        id: 'q-nk-25-9',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazılışında gün, ay ve yılı ayırmak için aşağıdaki işaretlerden hangisi kullanılabilir?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihleri yazarken gün, ay ve yılı ayırmak için nokta (.) veya eğik çizgi (/) kullanılır.'
      },
      {
        id: 'q-nk-25-10',
        difficulty: 'easy',
        questionText: 'Satır sonuna sığmayan kelimeler bölünürken hecenin sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Uzun çizgi' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Satıra sığmayan kelimeler hecelerinden bölünür ve satır sonuna kısa çizgi (-) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-9-orta',
    title: 'Noktalama İşaretleri 9 (Orta)',
    description: 'Noktalama İşaretleri - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-nk-26-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgül (,) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Akşam, yine akşam, yine akşam...' },
          { id: 'B', text: 'O, köydeki tek doktordu.' },
          { id: 'C', text: 'Elmaları, armutları ve muzları aldı.' },
          { id: 'D', text: 'Sınavı kazanırsa, ona hediye alacağım.' },
          { id: 'E', text: 'Evet, kırk yıldır burada yaşıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'Şart eki (-se, -sa) almış kelimelerden sonra virgül konmaz. D seçeneğinde virgül kullanımı yanlıştır.'
      },
      {
        id: 'q-nk-26-2',
        difficulty: 'medium',
        questionText: 'Ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Noktalı virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'D',
        explanation: 'Kendi içinde virgül barındıran sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-26-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Milli Eğitim Bakanlığı\'nın yeni açıklaması var.' },
          { id: 'B', text: 'Ankara\'da kışlar soğuk geçer.' },
          { id: 'C', text: 'Ahmet Bey\'in çocukları çok yaramazmış.' },
          { id: 'D', text: '1999\'da büyük bir deprem oldu.' },
          { id: 'E', text: 'TDK\'nin kurallarına uymalıyız.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz (Avrupa Birliği hariç). "Milli Eğitim Bakanlığının" olmalıdır.'
      },
      {
        id: 'q-nk-26-4',
        difficulty: 'medium',
        questionText: 'Cümle içinde geçen "ve, veya, yahut, ki, ama, fakat" gibi bağlaçlardan önce veya sonra virgül kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Sadece "ama, fakat" bağlaçlarından önce konur.' },
          { id: 'B', text: 'Sadece "ki" bağlacından sonra konur.' },
          { id: 'C', text: 'Bağlaçlardan önce de sonra da virgül konmaz.' },
          { id: 'D', text: 'Bütün bağlaçlardan sonra konur.' },
          { id: 'E', text: 'Hem önce hem sonra konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlaçlardan (ve, veya, ki, da/de, ama, fakat vb.) önce ya da sonra hiçbir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-26-5',
        difficulty: 'medium',
        questionText: 'Kendisiyle ilgili örnek verilecek cümlenin sonuna konan işaret hangisidir?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'A',
        explanation: 'Kendisiyle ilgili örnek verilecek veya açıklama yapılacak cümlenin sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-26-6',
        difficulty: 'medium',
        questionText: 'Ara sözleri veya ara cümleleri ayırmak için başlarına ve sonlarına hangi işaretler konabilir?',
        options: [
          { id: 'A', text: 'İki nokta veya noktalı virgül' },
          { id: 'B', text: 'Yay ayraç veya köşeli ayraç' },
          { id: 'C', text: 'Virgül veya kısa çizgi' },
          { id: 'D', text: 'Tırnak işareti veya yay ayraç' },
          { id: 'E', text: 'Uzun çizgi veya kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümle içindeki ara sözleri veya ara cümleleri ayırmak için ara sözün başına ve sonuna virgül (,) ya da kısa çizgi (-) konur.'
      },
      {
        id: 'q-nk-26-7',
        difficulty: 'medium',
        questionText: 'Tırnak içinde verilen doğrudan alıntı bir cümlenin sonundaki noktalama işareti nereye konur?',
        options: [
          { id: 'A', text: 'Tırnak işaretinin dışına' },
          { id: 'B', text: 'Tırnak işaretinin içine' },
          { id: 'C', text: 'Cümlenin sonuna ayrıca konur' },
          { id: 'D', text: 'Tırnak kullanılmadan virgül ile ayrılır' },
          { id: 'E', text: 'Tırnak içi cümlenin sonuna konmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içindeki alıntının sonunda bulunan noktalama işareti (nokta, soru işareti vb.) her zaman tırnak içinde kalır.'
      },
      {
        id: 'q-nk-26-8',
        difficulty: 'medium',
        questionText: 'Alıntı yapılan metinlerde, aktaranın asıl metne müdahale ederek eklediği açıklamalar hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Tek tırnak' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin aktarmalarında, aktaranın kendi eklediği açıklamalar veya notlar köşeli ayraç [ ] içine alınır.'
      },
      {
        id: 'q-nk-26-9',
        difficulty: 'medium',
        questionText: 'Bilinmeyen, kesin olmayan veya şüpheli bilgilerin yanına konulan soru işareti nasıl kullanılır?',
        options: [
          { id: 'A', text: 'Kelimenin sonuna bitişik yazılır' },
          { id: 'B', text: 'Yay ayraç içinde (?) kullanılır' },
          { id: 'C', text: 'Tırnak içinde "?" kullanılır' },
          { id: 'D', text: 'Köşeli ayraç içinde [?] kullanılır' },
          { id: 'E', text: 'Altı çizilerek yazılır' }
        ],
        correctOptionId: 'B',
        explanation: 'Kesin olmayan veya şüpheyle karşılanan bilgiler için soru işareti yay ayraç içinde (?) kullanılır.'
      },
      {
        id: 'q-nk-26-10',
        difficulty: 'medium',
        questionText: 'Karşılıklı konuşmalarda, konuşan kişiyi belirten sözlerden (isimlerden) sonra hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Soru işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiyatro eserlerinde veya yazıda karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta (:) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-9-zor',
    title: 'Noktalama İşaretleri 9 (Zor)',
    description: 'Noktalama İşaretleri - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-nk-27-1',
        difficulty: 'hard',
        questionText: 'Özel isimlerin yapım eki alması ve sonrasında çekim eki alması durumundaki noktalama kuralı nedir?',
        options: [
          { id: 'A', text: 'Yapım ekleri ayrılmaz ancak sonrasında gelen çekim ekleri kesmeyle ayrılır.' },
          { id: 'B', text: 'Yapım ekleri kesmeyle ayrılır, çekim ekleri bitişik yazılır.' },
          { id: 'C', text: 'Yapım ekleri de, bunlardan sonra gelen çekim ekleri de kesmeyle ayrılmaz.' },
          { id: 'D', text: 'Kurum adları hariç bütün ekler ayrılır.' },
          { id: 'E', text: 'Özel ada gelen bütün ekler bitişik yazılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel isimlere getirilen yapım ekleri kesmeyle ayrılmaz, onlardan sonra gelen çekim ekleri de KESİNLİKLE ayrılmaz (Örn: Türkçenin, İzmirliden).'
      },
      {
        id: 'q-nk-27-2',
        difficulty: 'hard',
        questionText: 'Zarf-fiil ekleri almış kelimelerden sonra virgül konmasıyla ilgili kurallar bağlamında, aşağıdaki cümlelerin hangisinde noktalama yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Dersine çalışıp, hemen dışarı çıktı.' },
          { id: 'B', text: 'Gülerek, oynayarak yanımıza geldi.' },
          { id: 'C', text: 'İşi bitirip, çantasını alıp gitti.' },
          { id: 'D', text: 'Sessizce dinleyerek not alıyordu.' },
          { id: 'E', text: 'Akşam olunca eve döndüler.' }
        ],
        correctOptionId: 'A',
        explanation: 'Metin içinde tek zarf-fiil eki almış kelimeden sonra virgül konmaz (A seçeneğindeki "çalışıp" kelimesi tek zarf-fiildir). Ancak art arda sıralanırlarsa (C seçeneği gibi) konur.'
      },
      {
        id: 'q-nk-27-3',
        difficulty: 'hard',
        questionText: 'Birden fazla tekrarlanan "hem... hem, ya... ya, ne... ne" gibi bağlaçlarla kurulan cümlelerde virgül kullanımı hakkında hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Bağlaçlardan önce mutlaka virgül konur.' },
          { id: 'B', text: 'Bağlaçlardan sonra noktalı virgül konur.' },
          { id: 'C', text: 'Bağlaçlardan önce veya sonra virgül konmaz.' },
          { id: 'D', text: 'İlk bağlaçtan sonra virgül konur.' },
          { id: 'E', text: 'Cümlenin akışına göre yazar karar verir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tekrarlı bağlaçlardan (ya...ya, hem...hem, ne...ne vb.) önce ve sonra virgül konmaz.'
      },
      {
        id: 'q-nk-27-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki noktanın (:) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Atatürk şöyle der: "Hayatta en hakiki mürşit ilimdir."' },
          { id: 'B', text: 'Kendimi kısaca tanıtayım: Edebiyat öğretmeninizim.' },
          { id: 'C', text: 'Bu işin sırrı: çok çalışmak ve sabretmektir.' },
          { id: 'D', text: 'En sevdiğim ders: Matematiktir.' },
          { id: 'E', text: 'Marketten şunları aldım: süt, peynir, ekmek.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde cümlenin öznesi ile yüklemi arasına iki nokta girmiştir. İki nokta sadece açıklama, örnekleme veya alıntıların öncesinde kullanılır. Bu kullanım yanlıştır.'
      },
      {
        id: 'q-nk-27-5',
        difficulty: 'hard',
        questionText: 'Tırnak içine alınan sözlerden (özel isim de olsa) sonra gelen eklerin yazımıyla ilgili kural nedir?',
        options: [
          { id: 'A', text: 'Tırnaktan sonra kesme işareti konarak ek yazılır.' },
          { id: 'B', text: 'Tırnaktan sonra boşluk bırakılarak ek yazılır.' },
          { id: 'C', text: 'Tırnaktan sonra ek kesme işareti kullanılmadan doğrudan yazılır.' },
          { id: 'D', text: 'Ek tırnak işaretinin içine alınır.' },
          { id: 'E', text: 'Tırnak içine alınan sözcüğe hiçbir zaman ek getirilemez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tırnak içine alınan sözlerden sonra gelen ekleri ayırmak için kesme işareti kullanılmaz, ek tırnaktan hemen sonra bitişik yazılır (Örn: "Yaban"ı okudum).'
      },
      {
        id: 'q-nk-27-6',
        difficulty: 'hard',
        questionText: 'Eser adlarında (kitap, dergi vb.) bulunan "ve, ile, ya" gibi bağlaçların yazımı ve noktalaması için aşağıdaki kurallardan hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Sadece baş harfleri büyük yazılırsa bağlaçlar küçük yazılır ve virgül kullanılmaz.' },
          { id: 'B', text: 'Bağlaçlardan önce mutlaka virgül kullanılır.' },
          { id: 'C', text: 'Eser adının bütün harfleri büyük de olsa bağlaçlar küçük yazılır.' },
          { id: 'D', text: 'Eser adındaki bağlaçlar her zaman büyük yazılır.' },
          { id: 'E', text: 'Bağlaçlardan sonra noktalı virgül konur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Eser adlarının baş harfleri büyük yazıldığında aradaki bağlaçlar küçük yazılır (Suç ve Ceza). Bütün harfler büyük yazıldığında bağlaç da büyük yazılır. Bağlaçların yanında noktalama kullanılmaz.'
      },
      {
        id: 'q-nk-27-7',
        difficulty: 'hard',
        questionText: 'Alay, kinaye ve küçümseme anlamı katmak için yay ayraç içinde kullanılan ünlem işareti (!) nereye konur?',
        options: [
          { id: 'A', text: 'Sözcükten hemen önce' },
          { id: 'B', text: 'Sözcükten hemen sonra' },
          { id: 'C', text: 'Cümlenin en başına' },
          { id: 'D', text: 'Cümlenin en sonuna' },
          { id: 'E', text: 'Cümledeki fiilden sonra' }
        ],
        correctOptionId: 'B',
        explanation: 'Alay, kinaye ve küçümseme anlamı taşıyan sözcükten hemen sonra yay ayraç içinde ünlem işareti (!) kullanılır.'
      },
      {
        id: 'q-nk-27-8',
        difficulty: 'hard',
        questionText: 'Metin içinde aktarılmayan (atlanmış) bölümleri göstermek için üç nokta (...) yaygın olarak hangi işaretin içinde de kullanılabilir?',
        options: [
          { id: 'A', text: 'Köşeli ayraç [ ]' },
          { id: 'B', text: 'Tırnak işareti " "' },
          { id: 'C', text: 'Tek tırnak \' \'' },
          { id: 'D', text: 'Kısa çizgi - -' },
          { id: 'E', text: 'Yay ayraç ( )' }
        ],
        correctOptionId: 'A',
        explanation: 'Alıntılarda aktarılmayan (atlanmış) kısımları göstermek için üç nokta (...) köşeli ayraç [...] içinde de gösterilebilir.'
      },
      {
        id: 'q-nk-27-9',
        difficulty: 'hard',
        questionText: 'İkilemelerin yazılışı ve noktalaması ile ilgili aşağıdaki cümlelerin hangisinde hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Er geç bu sorunu çözeceğiz.' },
          { id: 'B', text: 'Bata çıka zirveye ulaştık.' },
          { id: 'C', text: 'Yavaş, yavaş merdivenleri çıktı.' },
          { id: 'D', text: 'Oraya aşağı yukarı beş saatte vardık.' },
          { id: 'E', text: 'Eften püften konular yüzünden kavga ettiler.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkilemelerin arasına virgül de dahil hiçbir noktalama işareti konmaz. "Yavaş yavaş" bitişik veya araya virgül konularak değil, ayrı ve noktalama olmadan yazılır.'
      },
      {
        id: 'q-nk-27-10',
        difficulty: 'hard',
        questionText: '"Ahmet Hoca ( ) sen de biliyorsun ki ( ) bu sınav çok zordu ( )" cümlesinde parantezli yerlere sırasıyla hangi işaretler gelmelidir?',
        options: [
          { id: 'A', text: '(,) (,) (.)' },
          { id: 'B', text: '(,) (boşluk) (.)' },
          { id: 'C', text: '(,) (;) (.)' },
          { id: 'D', text: '(!) (,) (.)' },
          { id: 'E', text: '(;) (,) (.)' }
        ],
        correctOptionId: 'B',
        explanation: 'Hitaptan sonra virgül (Ahmet Hoca,). "ki" bağlacından sonra noktalama konmaz (boşluk). Cümle bitimine nokta (.) konur.'
      }
    ]
  }
]
