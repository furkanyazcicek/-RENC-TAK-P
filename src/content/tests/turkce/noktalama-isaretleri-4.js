export default [
  {
    id: 'test-noktalama-4-kolay',
    title: 'Noktalama İşaretleri 4 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (31-40)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-nk-10-1',
        difficulty: 'easy',
        questionText: 'Kitap, dergi vb. eserlerin künyelerinde yazar, eser ve basımevi bilgilerinin sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Künye bilgilerinin arasına virgül konurken künyenin en sonuna nokta (.) konur.'
      },
      {
        id: 'q-nk-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) konmasına gerek yoktur?',
        options: [
          { id: 'A', text: 'Bu çantayı kimden aldın' },
          { id: 'B', text: 'Neden böyle davrandığını hala anlamadım' },
          { id: 'C', text: 'Toplantı ne zaman bitecekmiş' },
          { id: 'D', text: 'Dışarıda hava nasıl, biliyor musun' },
          { id: 'E', text: 'Hangi arabayı seçeceğine karar verdin mi' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde bir soru kelimesi (neden) geçse de asıl yargı soru sormamaktadır (anlamadım). Cümle tamamlanmış bir bildirme cümlesidir ve sonuna nokta konur.'
      },
      {
        id: 'q-nk-10-3',
        difficulty: 'easy',
        questionText: 'Sayılardan sonra sıra bildirmek için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Parantez' },
          { id: 'E', text: 'Tire' }
        ],
        correctOptionId: 'A',
        explanation: 'Sayılardan sonra sıra bildirmek amacıyla (ıncı, inci anlamında) nokta (.) konur (Örn: 1. , 2.).'
      },
      {
        id: 'q-nk-10-4',
        difficulty: 'easy',
        questionText: 'Anlama güç kazandırmak için tekrarlanan kelimeler (ikilemeler değil, tekrar edilen kelimeler) arasına hangi işaret konur?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Anlama güç kazandırmak için tekrarlanan kelimeler arasına virgül konur. Örn: "Akşam, yine akşam, yine akşam..."'
      },
      {
        id: 'q-nk-10-5',
        difficulty: 'easy',
        questionText: 'Kısaltmalara getirilen ekleri ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısaltmalara getirilen ekler kesme işaretiyle (\') ayrılır (Örn: TBMM\'nin).'
      },
      {
        id: 'q-nk-10-6',
        difficulty: 'easy',
        questionText: 'Cümle içinde geçen "ve, veya, yahut, ki" gibi bağlaçlardan sonra hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Hiçbir işaret konmaz' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Bağlaçlardan (ve, veya, yahut, ki vb.) önce de sonra da herhangi bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-10-7',
        difficulty: 'easy',
        questionText: 'Tiyatro eserlerinde karşılıklı konuşmalarda, konuşan kişinin adından sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiyatro metinlerinde konuşan kişinin adından sonra iki nokta (:) konur.'
      },
      {
        id: 'q-nk-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalama eksikliği bir anlam değişikliğine (belirsizliğe) yol açmıştır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede top oynuyordu.' },
          { id: 'B', text: 'Genç kıza bir şeyler anlatmaya çalıştı.' },
          { id: 'C', text: 'Hava kararmadan eve döndük.' },
          { id: 'D', text: 'Kitap okumak insanın ufkunu açar.' },
          { id: 'E', text: 'Yarın annemlerle pazara gideceğiz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Genç" kelimesinden sonra virgül konmazsa "genç kız" tamlaması oluşur. Oysa "Genç, kıza bir şeyler anlatmaya çalıştı" şeklinde olursa genç başkası, kız başkası olur.'
      },
      {
        id: 'q-nk-10-9',
        difficulty: 'easy',
        questionText: 'Eser adları, yazının içinde đặc biệt vurgulanmak istendiğinde hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Eser adları, yazı başlıkları metin içinde tırnak işareti (" ") içine alınarak vurgulanır.'
      },
      {
        id: 'q-nk-10-10',
        difficulty: 'easy',
        questionText: 'Matematikte bölme işareti yerine hangi noktalama işareti kullanılabilir?',
        options: [
          { id: 'A', text: 'İki nokta veya eğik çizgi' },
          { id: 'B', text: 'Virgül veya nokta' },
          { id: 'C', text: 'Kısa çizgi veya uzun çizgi' },
          { id: 'D', text: 'Sadece iki nokta' },
          { id: 'E', text: 'Sadece eğik çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Matematikte bölme işlemi göstermek için iki nokta (:) veya eğik çizgi (/) kullanılır.'
      }
    ]
  },
  {
    id: 'test-noktalama-4-orta',
    title: 'Noktalama İşaretleri 4 (Orta)',
    description: 'Noktalama İşaretleri - Orta (31-40)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-nk-11-1',
        difficulty: 'medium',
        questionText: 'Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Tire' }
        ],
        correctOptionId: 'B',
        explanation: 'Uzun cümlelerde yüklemden uzak düşen özneyi vurgulamak ve belirginleştirmek için özneden sonra virgül (,) kullanılır.'
      },
      {
        id: 'q-nk-11-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kısa çizgi (-) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Fenerbahçe-Galatasaray maçı çok heyecanlıydı.' },
          { id: 'B', text: '1914-1918 yılları arasında Birinci Dünya Savaşı yaşandı.' },
          { id: 'C', text: 'Bu konuyu -hiç şüphem yok ki- hepimiz iyi anladık.' },
          { id: 'D', text: 'Kelimenin kökü olan -gel eyleminden türemiştir.' },
          { id: 'E', text: 'Ali ile-Ayşe yarın sinemaya gidecekler.' }
        ],
        correctOptionId: 'E',
        explanation: 'Kısa çizgi "ile, ve" anlamlarında kullanılır ancak zaten "ile" kelimesi varken bir de kısa çizgi kullanmak yanlıştır.'
      },
      {
        id: 'q-nk-11-3',
        difficulty: 'medium',
        questionText: 'Özel isimlere getirilen aşağıdaki eklerden hangisi kesme işareti ile ayrılmaz?',
        options: [
          { id: 'A', text: 'İyelik ekleri' },
          { id: 'B', text: 'Hâl (durum) ekleri' },
          { id: 'C', text: 'Çoğul eki (-lar, -ler)' },
          { id: 'D', text: 'Bildirme ekleri' },
          { id: 'E', text: 'Tamlama ekleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen çoğul ekleri (-lar, -ler) ve bu eklerden sonra gelen diğer ekler kesme işaretiyle ayrılmaz (Örn: Ahmetler, Türklerin).'
      },
      {
        id: 'q-nk-11-4',
        difficulty: 'medium',
        questionText: 'Birbiri ardınca sıralanan, içinde virgül bulunan sıralı cümleleri birbirinden ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendi içinde virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-11-5',
        difficulty: 'medium',
        questionText: 'Cümle içinde tırnak içine alınmamış alıntı sözlerin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'A',
        explanation: 'Tırnak içinde verilmeyen doğrudan aktarma cümlelerinin sonuna virgül (,) konur ve cümleye devam edilir (Örn: Yarın gideceğim, dedi).'
      },
      {
        id: 'q-nk-11-6',
        difficulty: 'medium',
        questionText: 'Sayılara ek getirilirken, okunuşa göre ses uyumunu sağlamak gerekir. Aşağıdakilerden hangisinde kesme işaretinden sonra gelen ekin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Saat 15.00\'da buluşalım.' },
          { id: 'B', text: 'Yarışmada 2\'nci oldu.' },
          { id: 'C', text: 'Toplantı 1923\'te yapılmış.' },
          { id: 'D', text: '6\'ncı kata kadar yürüyerek çıktı.' },
          { id: 'E', text: 'Saat 13.30\'da ders bitecek.' }
        ],
        correctOptionId: 'A',
        explanation: 'Saat 15.00 "on beş sıfır sıfır" diye değil "on beş" diye okunur. Dolayısıyla ekin okunuşu sıfırlara göre değil, tam saate göre "15.00\'te" olmalıdır.'
      },
      {
        id: 'q-nk-11-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde eğik çizgi (/) gereksiz veya yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Adres: Atatürk Bulvarı No: 45/6' },
          { id: 'B', text: 'Fiilimsiler -an/-en eklerini alabilir.' },
          { id: 'C', text: '05/09/2023 tarihinde doğdu.' },
          { id: 'D', text: 'Şiirde: Korkma / Sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak.' },
          { id: 'E', text: 'Babam / annem ve kardeşim de geldi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde eş görevli kelimeler arasına virgül veya bağlaç konur. Eğik çizginin bu şekilde kullanımı yanlıştır.'
      },
      {
        id: 'q-nk-11-8',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde tırnak işareti doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarın "Ankara\'ya" gideceğim.' },
          { id: 'B', text: 'Onun bu "fedakar" davranışını hiç unutamam.' },
          { id: 'C', text: 'Bize "bugün gelmeyeceğini" söyledi.' },
          { id: 'D', text: 'Kitapları, "defterleri" ve kalemleri aldı.' },
          { id: 'E', text: 'Arabayı "çok hızlı" kullanıyor ki kaza yapacak.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde bir kelime özel olarak vurgulanmak istendiği için tırnak içine alınmıştır ve doğru kullanılmıştır. Diğerlerindeki kullanımlar (özellikle C seçeneğindeki dolaylı anlatım) gereksiz veya yanlıştır.'
      },
      {
        id: 'q-nk-11-9',
        difficulty: 'medium',
        questionText: 'Cümle içinde zarf-fiil eki almış olan sözcüklerden sonra virgül konur mu?',
        options: [
          { id: 'A', text: 'Evet, her zaman konur.' },
          { id: 'B', text: 'Hayır, hiçbir zaman konmaz.' },
          { id: 'C', text: 'Tek zarf-fiil varsa konmaz, art arda sıralanan zarf-fiiller varsa aralarına konur.' },
          { id: 'D', text: 'Sadece "-ıp, -ip" ekinden sonra konur.' },
          { id: 'E', text: 'İsteğe bağlı olarak konulabilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin içinde zarf-fiil eki almış tek bir kelime varsa virgül konmaz. Ancak birden fazla zarf-fiil eki almış kelime peş peşe sıralanmışsa (eş görevli oldukları için) aralarına virgül konur.'
      },
      {
        id: 'q-nk-11-10',
        difficulty: 'medium',
        questionText: 'Karşılıklı konuşmalarda cevabın eksik veya yetersiz olduğunu, konuşanın sustuğunu belirtmek için ne kullanılır?',
        options: [
          { id: 'A', text: 'Üç nokta' },
          { id: 'B', text: 'Soru işareti' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'A',
        explanation: 'Konuşmalarda susulduğunu, cevabın verilmediğini veya eksik bırakıldığını göstermek için üç nokta (...) kullanılır.'
      }
    ]
  },
  {
    id: 'test-noktalama-4-zor',
    title: 'Noktalama İşaretleri 4 (Zor)',
    description: 'Noktalama İşaretleri - Zor (31-40)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-nk-12-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kullanımların hangisinde virgül (,) yanlış yerde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yemekten sonra ellerini, yüzünü yıkadı.' },
          { id: 'B', text: 'Ahmet Bey, şirketin yeni müdürü, yarın göreve başlıyor.' },
          { id: 'C', text: 'Kitabı okudum, ancak pek beğenmedim.' },
          { id: 'D', text: 'İhtiyar, adama dönerek bir şeyler söyledi.' },
          { id: 'E', text: 'Bu akşam hem kitap okuyup, hem müzik dinleyeceğim.' }
        ],
        correctOptionId: 'E',
        explanation: 'Tek zarf-fiil ekinden (okuyup) sonra virgül konmaz. Ayrıca tekrarlı bağlaçların (hem... hem) olduğu durumlarda virgül kullanılması hatalıdır.'
      },
      {
        id: 'q-nk-12-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kurum, kuruluş adlarına getirilen eklerin hangisinde kesme işareti kullanılmalıdır?',
        options: [
          { id: 'A', text: 'Türk Dil Kurumuna' },
          { id: 'B', text: 'Bakanlar Kurulunun' },
          { id: 'C', text: 'Marmara Üniversitesinden' },
          { id: 'D', text: 'Avrupa Birliğine' },
          { id: 'E', text: 'Türkiye Büyük Millet Meclisine' }
        ],
        correctOptionId: 'D',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme ile ayrılmaz. Ancak "Avrupa Birliği" bu kuralın tek istisnasıdır ve ekler kesme ile ayrılır (Avrupa Birliği\'ne).'
      },
      {
        id: 'q-nk-12-3',
        difficulty: 'hard',
        questionText: 'TDK kurallarına göre, eser adlarında bulunan ve, ile, ya, veya gibi bağlaçların yazımı ve bunlardan sonraki noktalama durumu nasıldır?',
        options: [
          { id: 'A', text: 'Baş harfler büyükse bağlaçlar da büyük yazılır, virgül konur.' },
          { id: 'B', text: 'Baş harfler büyükse bağlaçlar küçük yazılır, hiçbir noktalama işareti konmaz.' },
          { id: 'C', text: 'Sadece cümlenin sonunda virgül konur.' },
          { id: 'D', text: 'Tüm harfler büyükse bağlaçlar küçük yazılır.' },
          { id: 'E', text: 'Bağlaçlardan sonra noktalı virgül konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eser adlarının baş harfleri büyük yazıldığında aradaki bağlaçlar küçük yazılır (Örn: Leyla ile Mecnun) ve bağlaçlardan sonra veya önce noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-12-4',
        difficulty: 'hard',
        questionText: 'Bir metinde alıntı yaparken atlanan, alınmayan kelime, cümle veya paragrafları göstermek için kullanılan üç nokta (...) hangi işaretin içine alınabilir?',
        options: [
          { id: 'A', text: 'Yay ayraç ( )' },
          { id: 'B', text: 'Tırnak işareti (" ")' },
          { id: 'C', text: 'Köşeli ayraç [ ]' },
          { id: 'D', text: 'Tek tırnak (\' \')' },
          { id: 'E', text: 'Kısa çizgi (-)' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin içinde aktarılmayan (atlanmış) bölümleri göstermek için üç nokta köşeli ayraç içine de alınabilir [...], ancak yaygın olarak tek başına kullanılır. TDK\'de köşeli ayraç [ ] kullanımı aktaranın müdahalesini göstermek için geçerlidir.'
      },
      {
        id: 'q-nk-12-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki nokta (:) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendimi tanıtayım: Ben bu okulun müdürüyüm.' },
          { id: 'B', text: 'Karşımızda mükemmel bir manzara vardı: masmavi deniz, yemyeşil orman...' },
          { id: 'C', text: 'Bu işin tek sırrı şudur: düzenli ve disiplinli çalışmak.' },
          { id: 'D', text: 'Oraya gittim: ama kimseyi bulamadım.' },
          { id: 'E', text: 'Bakkaldan şunları aldı: peynir, zeytin, ekmek.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ama" bağlacı kullanılmıştır. Bağlaçlardan önce iki nokta veya virgül gibi noktalama işaretleri kullanılmaz.'
      },
      {
        id: 'q-nk-12-6',
        difficulty: 'hard',
        questionText: 'Alay veya kinaye anlamı katan ünlem işareti ile ilgili aşağıdaki kullanımlardan hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Sözcüğün hemen önüne konur.' },
          { id: 'B', text: 'Sözcükten hemen sonra yay ayraç içinde (!) kullanılır.' },
          { id: 'C', text: 'Cümlenin en sonuna iki ünlem (!!) olarak konur.' },
          { id: 'D', text: 'Tırnak içinde ("!") kullanılır.' },
          { id: 'E', text: 'Sözcükten sonra virgülle ayrılarak konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Alay, kinaye veya küçümseme anlamı katmak için ünlem işareti ilgili sözcükten hemen sonra yay ayraç içinde (!) kullanılır.'
      },
      {
        id: 'q-nk-12-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tırnak içinde verilen alıntıdan sonraki noktalama işareti yanlıştır?',
        options: [
          { id: 'A', text: 'Atatürk, "Ne mutlu Türk\'üm diyene!" demiştir.' },
          { id: 'B', text: 'Adam, "Buraya gel." diyerek bağırdı.' },
          { id: 'C', text: 'Bana, "Yarın görüşürüz", dedi.' },
          { id: 'D', text: 'Şairin "Sessiz Gemi" şiiri çok ünlüdür.' },
          { id: 'E', text: 'Öğretmenimiz "Çalışan kazanır." kuralını hatırlattı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Alıntı cümlesinin asıl noktalama işareti tırnak içinde kalır. Virgül tırnağın dışına konulup alıntının noktasız bırakılması veya virgülün dışarıda tek başına kalması (doğrudan tırnaklı alıntılarda) yanlıştır. Doğrusu: Bana "Yarın görüşürüz." dedi. şeklinde olmalıdır.'
      },
      {
        id: 'q-nk-12-8',
        difficulty: 'hard',
        questionText: 'Özel isimlerin yapım eki aldıktan sonra çekim eki de alması durumunda kesme işareti kullanımı kuralı hangisidir?',
        options: [
          { id: 'A', text: 'Yapım ekinden sonra gelen çekim eki kesme ile ayrılır.' },
          { id: 'B', text: 'Yapım ekleri ayrılmaz ancak sonrasında gelen çekim ekleri kesme ile ayrılır.' },
          { id: 'C', text: 'Özel ada getirilen yapım ekleri ve bunlardan sonra gelen diğer ekler kesmeyle ayrılmaz.' },
          { id: 'D', text: 'Sadece yapım ekleri ayrılır.' },
          { id: 'E', text: 'Kesme işareti kullanımı tamamen yazarın tercihidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen yapım ekleri ayrılmaz, bu eklerden sonra gelen çekim ekleri de ayrılmaz. Örn: Türk (kök), Türkçe (yapım eki), Türkçenin (çekim eki) -> "Türkçenin" bitişik yazılır.'
      },
      {
        id: 'q-nk-12-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) yerine nokta (.) konmalıdır?',
        options: [
          { id: 'A', text: 'Acaba bu yoldan gitsek daha mı çabuk varırız?' },
          { id: 'B', text: 'Bütün bu olaylara kimin sebep olduğunu bilmiyorum ki?' },
          { id: 'C', text: 'Sınavın hangi salonda yapılacağı belli oldu mu?' },
          { id: 'D', text: 'Neden sürekli aynı şeyleri tekrar edip duruyorsun?' },
          { id: 'E', text: 'Yarın bizimle tiyatroya gelmek ister misin?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneği "ki" bağlacı ile pekiştirilmiş bir duygu veya yargı cümlesidir. Soru kelimesi (kimin) geçmesine rağmen asıl yargı (bilmiyorum) soru bildirmez. Soru işareti değil nokta konmalıdır.'
      },
      {
        id: 'q-nk-12-10',
        difficulty: 'hard',
        questionText: 'Karşılıklı konuşma metinlerinde, kişilerin isimlerinden sonra iki nokta (:) konabildiği gibi, bu isimler satır başına alınıp hangi işaretle de konuşma gösterilebilir?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Uzun çizgi (konuşma çizgisi)' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Noktalı virgül' },
          { id: 'E', text: 'Tek tırnak' }
        ],
        correctOptionId: 'B',
        explanation: 'Satır başına alınan konuşmaları göstermek için uzun çizgi (—) yani konuşma çizgisi kullanılır.'
      }
    ]
  }
]
