export default [
  {
    id: 'test-noktalama-3-kolay',
    title: 'Noktalama İşaretleri 3 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-nk-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yay ayraç ( ) içine ünlem işareti konmalıdır?',
        options: [
          { id: 'A', text: 'Ne kadar güzel bir gün ( )' },
          { id: 'B', text: 'Onu gördüğümde saat beş falandı ( )' },
          { id: 'C', text: 'Eskiden buralar hep tarlaydı ( )' },
          { id: 'D', text: 'Bunu sana kim söyledi ( )' },
          { id: 'E', text: 'Anladım ( ) sen de haklısın.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneği şaşkınlık, beğeni bildiren bir ünlem cümlesidir. Bu nedenle ayraç içine ünlem işareti konmalıdır.'
      },
      {
        id: 'q-nk-7-2',
        difficulty: 'easy',
        questionText: 'Kesirleri ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Matematikte ondalık kesirleri ayırmak için virgül (,) kullanılır (Örn: 15,3).'
      },
      {
        id: 'q-nk-7-3',
        difficulty: 'easy',
        questionText: 'Birbiriyle ilişkili iki kavram, iki kişi veya iki yer arasında bağlantı kurmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Uzun çizgi' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'D',
        explanation: 'Kelimeler veya sayılar arasında "ve, ile, ila, ...-den ...-e" anlamlarını vermek için kısa çizgi (-) kullanılır (Örn: Türk-Alman ilişkileri, 1914-1918).'
      },
      {
        id: 'q-nk-7-4',
        difficulty: 'easy',
        questionText: 'Genel Ağ (İnternet) adreslerinde hangi noktalama işaretleri kullanılır?',
        options: [
          { id: 'A', text: 'Sadece eğik çizgi' },
          { id: 'B', text: 'Nokta ve iki nokta' },
          { id: 'C', text: 'İki nokta, eğik çizgi ve nokta' },
          { id: 'D', text: 'Noktalı virgül ve eğik çizgi' },
          { id: 'E', text: 'Virgül ve nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'İnternet adreslerinde (http://tdk.gov.tr vb.) iki nokta (:), eğik çizgi (/) ve nokta (.) kullanılır.'
      },
      {
        id: 'q-nk-7-5',
        difficulty: 'easy',
        questionText: 'Alay, kinaye veya küçümseme anlamı kazandırılmak istenen sözden hemen sonra yay ayraç içinde hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'D',
        explanation: 'Alay, kinaye veya küçümseme anlamı katmak için ünlem işareti yay ayraç içinde (!) kullanılır.'
      },
      {
        id: 'q-nk-7-6',
        difficulty: 'easy',
        questionText: 'Dört ve dörtten çok rakamlı sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır. Araya hangi işaret konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Dört ve dörtten çok rakamlı sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır ve araya nokta (.) konur (Örn: 326.197).'
      },
      {
        id: 'q-nk-7-7',
        difficulty: 'easy',
        questionText: 'Satır başına alınan konuşmaları göstermek için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Uzun çizgi' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Yazıda satır başına alınan konuşmaları göstermek için uzun çizgi (—) (konuşma çizgisi) kullanılır.'
      },
      {
        id: 'q-nk-7-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna nokta (.) konmaz?',
        options: [
          { id: 'A', text: 'Babam erkenden uyanmıştı' },
          { id: 'B', text: 'Bunu yapmayı o kadar çok istedim ki' },
          { id: 'C', text: 'Kitabın son sayfasını okumadan kapattı' },
          { id: 'D', text: 'Arkadaşlarımla oynamak için dışarı çıktım' },
          { id: 'E', text: 'Dün akşam şiddetli bir yağmur yağdı' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "ki" bağlacından sonra yargı tamamlanmamış ve cümle eksik bırakılmıştır, bu yüzden sonuna üç nokta (...) konmalıdır.'
      },
      {
        id: 'q-nk-7-9',
        difficulty: 'easy',
        questionText: 'Özel olarak vurgulanmak istenen sözler hangi noktalama işareti içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Cümle içerisinde özel olarak vurgulanmak istenen sözler tırnak işareti (" ") içine alınır.'
      },
      {
        id: 'q-nk-7-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne zaman dönecekmiş, anlamadım?' },
          { id: 'B', text: 'Nasıl bir işe girdin böyle?' },
          { id: 'C', text: 'Kiminle konuştuğunu sordu?' },
          { id: 'D', text: 'Sana bunları kim anlattı, bilmiyorum?' },
          { id: 'E', text: 'Onu gördüm mü çok mutlu oluyorum?' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru sözcüğü bulunmasına rağmen asıl yargının soru olmadığı (A, C, D) cümlelerin sonuna nokta konur. E seçeneğinde "mı/mi" edatı zaman/şart anlamı kattığı için nokta konur. B seçeneği ise doğrudan bir soru cümlesidir.'
      }
    ]
  },
  {
    id: 'test-noktalama-3-orta',
    title: 'Noktalama İşaretleri 3 (Orta)',
    description: 'Noktalama İşaretleri - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-nk-8-1',
        difficulty: 'medium',
        questionText: 'Kitap, dergi vb. eser adları tırnak içine alınmadığında bu isimlerden sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Tire' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Kitap, dergi, gazete ve sanat eserlerinin adları tırnak içine alınmadığında sonuna virgül (,) konur. Özel addan sonra gelen çekim eklerini ayırmak gerekirse o zaman kesme kullanılır ama doğrudan isim vurgulanırken virgül konur.'
      },
      {
        id: 'q-nk-8-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalı virgül (;) kullanılması gerekmez?',
        options: [
          { id: 'A', text: 'Pazardan elma, armut, mandalina; marul, ıspanak, pırasa aldık.' },
          { id: 'B', text: 'At ölür, meydan kalır; yiğit ölür, şan kalır.' },
          { id: 'C', text: 'Benimle gelmek istersen hazırlan; ama fazla oyalanma.' },
          { id: 'D', text: 'İçeri girdi; odasına gidip uyudu.' },
          { id: 'E', text: 'Murat; Ali, Ayşe ve Fatma\'dan daha çalışkandır.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ögeleri arasında virgül bulunmayan basit bir sıralı cümle vardır, bu yüzden noktalı virgül yerine sadece virgül (,) kullanılmalıdır.'
      },
      {
        id: 'q-nk-8-3',
        difficulty: 'medium',
        questionText: 'Yan yana yazılması gereken durumlarda dizelerin arasına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Tire' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Şiir dizeleri yan yana yazıldığında aralarına eğik çizgi (/) konur.'
      },
      {
        id: 'q-nk-8-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kullanımlardan hangisi iki noktanın (:) bir görevi değildir?',
        options: [
          { id: 'A', text: 'Kendisinden sonra örnek verilecek cümlenin sonuna konur.' },
          { id: 'B', text: 'Kendisinden sonra açıklama yapılacak cümlenin sonuna konur.' },
          { id: 'C', text: 'Karşılıklı konuşmalarda, konuşan kişiyi belirten sözlerden sonra konur.' },
          { id: 'D', text: 'Genel Ağ adreslerinde kullanılır.' },
          { id: 'E', text: 'Alay ve kinaye bildiren ünlem işaretinden hemen sonra konur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Alay ve kinaye anlamı için ünlem işareti yay ayraç içinde (!) kullanılır. İki noktanın böyle bir görevi yoktur.'
      },
      {
        id: 'q-nk-8-5',
        difficulty: 'medium',
        questionText: 'Tamamlanmamış cümlelerin sonuna konan üç noktanın (...) yerine yanlışlıkla konmuş olan virgül hangisidir?',
        options: [
          { id: 'A', text: 'Bahçede rengarenk çiçekler, kelebekler, kuşlar...' },
          { id: 'B', text: 'Onu gördüğümde o kadar sevindim ki, anlatamam.' },
          { id: 'C', text: 'Sana vereceğim tek bir şey var, o da kalbim.' },
          { id: 'D', text: 'Ne sen beni unut, ne de ben seni.' },
          { id: 'E', text: 'Dağların ardında uçsuz bucaksız ovalar, yemyeşil ormanlar,' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki cümlenin yüklemi yoktur, tamamlanmamıştır. Sonuna virgül değil, üç nokta (...) konmalıdır.'
      },
      {
        id: 'q-nk-8-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yay ayraç ( ) içinde belirtilen işaretin kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Ankara ( ) İstanbul otobüsü on dakika sonra kalkacak. (kısa çizgi)' },
          { id: 'B', text: 'Adam on dakikada ( ) işi bitirecekmiş. (ünlem)' },
          { id: 'C', text: 'Toplantıya yüz yirmi ( ) kişi katıldı. (soru işareti)' },
          { id: 'D', text: 'Sen de gelirsen ( ) her şey daha güzel olur. (virgül)' },
          { id: 'E', text: 'Sözcüğün kökü olan "gör ( )" eylemi... (kısa çizgi)' }
        ],
        correctOptionId: 'D',
        explanation: 'Şart eki olan -se, -sa\'dan sonra virgül konmaz. Bu kurala göre D seçeneğinde virgül kullanımı yanlıştır.'
      },
      {
        id: 'q-nk-8-7',
        difficulty: 'medium',
        questionText: 'Bilinmeyen, kesin olmayan veya şüpheyle karşılanan yer, tarih vb. durumlar için kullanılan işaret hangisidir?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Soru işareti' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bilinmeyen veya şüpheyle karşılanan bilgi, tarih, yer gibi durumlar için yay ayraç içinde (?) soru işareti kullanılır.'
      },
      {
        id: 'q-nk-8-8',
        difficulty: 'medium',
        questionText: 'Kitap isimlerinde baş harfler büyük yazıldığında "ve, ile, ya, veya" bağlaçları nasıl yazılmalıdır ve bunlardan sonra hangi noktalama işareti konmalıdır?',
        options: [
          { id: 'A', text: 'Büyük yazılır, noktalı virgül konur.' },
          { id: 'B', text: 'Küçük yazılır, virgül konur.' },
          { id: 'C', text: 'Küçük yazılır, noktalama işareti konmaz.' },
          { id: 'D', text: 'Büyük yazılır, virgül konur.' },
          { id: 'E', text: 'İstenildiği gibi yazılır, nokta konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eser adlarında baş harfler büyükse aradaki bağlaçlar küçük yazılır (Mai ve Siyah). Ayrıca bağlaçlardan sonra veya önce virgül kullanılmaz.'
      },
      {
        id: 'q-nk-8-9',
        difficulty: 'medium',
        questionText: 'Metin içinde "-ınca / -ince" anlamıyla zarf-fiil görevinde kullanılan "mı / mi" edatından sonra ne konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Hiçbir işaret konmaz' },
          { id: 'D', text: 'Soru işareti' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin içinde zarf-fiil görevinde (zaman/şart anlamında) kullanılan "mı / mi" ekinden sonra virgül vb. noktalama işareti konmaz (Örn: Bahar geldi mi her yer yeşerir).'
      },
      {
        id: 'q-nk-8-10',
        difficulty: 'medium',
        questionText: 'Cümle içinde yer alan ara sözleri belirtmek için ara sözün başına ve sonuna hangi işaretler konabilir?',
        options: [
          { id: 'A', text: 'İki nokta veya kısa çizgi' },
          { id: 'B', text: 'Yay ayraç veya köşeli ayraç' },
          { id: 'C', text: 'Kısa çizgi veya virgül' },
          { id: 'D', text: 'Noktalı virgül veya eğik çizgi' },
          { id: 'E', text: 'Tırnak işareti veya tek tırnak' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümle içindeki ara sözleri veya ara cümleleri ayırmak için ara sözlerin başına ve sonuna kısa çizgi (-) ya da virgül (,) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-3-zor',
    title: 'Noktalama İşaretleri 3 (Zor)',
    description: 'Noktalama İşaretleri - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-nk-9-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalama hatası vardır?',
        options: [
          { id: 'A', text: 'Ben, yarın Ankara\'ya gideceğim.' },
          { id: 'B', text: 'Eğer sınavı kazanırsan, sana bilgisayar alacağım.' },
          { id: 'C', text: 'Kardeşim; odasını temizledi, ödevlerini yaptı.' },
          { id: 'D', text: 'Şairin son şiirini "Aşk ve Ölüm" okudun mu?' },
          { id: 'E', text: 'Buraya gelip bizimle konuştuktan sonra karar verecekmiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'Şart eki (-se, -sa) almış sözcüklerden sonra virgül konmaz. "kazanırsan" sözcüğünden sonraki virgül hatalıdır.'
      },
      {
        id: 'q-nk-9-2',
        difficulty: 'hard',
        questionText: 'Tırnak içindeki cümleden sonra gelen kesme işareti ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Tırnak içine alınan sözcük özel isimse tırnaktan sonra ek geldiğinde kesme işareti kullanılır.' },
          { id: 'B', text: 'Tırnak içine alınan sözcük özel isim olsa da ek tırnaktan sonra doğrudan yazılır, kesme kullanılmaz.' },
          { id: 'C', text: 'Tırnak işareti hem başa hem sona hem de ekin sonrasına konur.' },
          { id: 'D', text: 'Tırnak işaretinin yerini kesme işareti alır.' },
          { id: 'E', text: 'Tırnak içindeki kelimelere hiçbir zaman ek getirilemez.' }
        ],
        correctOptionId: 'B',
        explanation: 'TDK kurallarına göre tırnak içine alınan sözlerden (özel isim bile olsa) sonra gelen ekleri ayırmak için kesme işareti kullanılmaz, ek tırnağın dışına bitişik yazılır (Örn: "Yaban"ı okudum).'
      },
      {
        id: 'q-nk-9-3',
        difficulty: 'hard',
        questionText: 'Birden fazla tekrarlanan "hem... hem, ya... ya, ne... ne" gibi bağlaçlardan önce veya sonra hangi noktalama işaretinin kullanımı doğrudur?',
        options: [
          { id: 'A', text: 'Hem bağlaçtan önce hem bağlaçtan sonra virgül konur.' },
          { id: 'B', text: 'Bağlaçlardan önce noktalı virgül konur.' },
          { id: 'C', text: 'Bağlaçlardan ne önce ne de sonra virgül konur.' },
          { id: 'D', text: 'Bağlaçlardan sonra sadece kısa çizgi konur.' },
          { id: 'E', text: 'Zorunlu bir kural yoktur, cümlenin akışına göre virgül eklenebilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tekrarlı bağlaçlardan (ya... ya, hem... hem, ne... ne vb.) önce ve sonra virgül konmaz.'
      },
      {
        id: 'q-nk-9-4',
        difficulty: 'hard',
        questionText: 'Bir cümlede veya metinde, alıntı yapıldığını göstermek için bazen tırnak işareti (" ") yerine hangi noktalama işareti kullanılabilir?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Kesme işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Tırnak içine alınmamış doğrudan alıntı cümlelerinin sonuna virgül konarak alıntı olduğu belirtilir (Örn: Yarın döneceğim, dedi).'
      },
      {
        id: 'q-nk-9-5',
        difficulty: 'hard',
        questionText: 'Metin içindeki tamlamaları ayırmakta virgül kullanılırsa, hangi tür tamlamalarda virgül kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'İsim tamlamalarında tamlayan ve tamlanan arasına konulması' },
          { id: 'B', text: 'Sıfat tamlamalarında eş görevli sıfatlar arasına konulması' },
          { id: 'C', text: 'İsim tamlamalarında eş görevli tamlayanlar arasına konulması' },
          { id: 'D', text: 'Özneden sonra gelen tamlamaların başına konulması' },
          { id: 'E', text: 'Eş görevli tamlananlar arasına konulması' }
        ],
        correctOptionId: 'A',
        explanation: 'İsim tamlamalarında tamlayan ile tamlanan arasına virgül veya herhangi bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-9-6',
        difficulty: 'hard',
        questionText: '"İnsanlar (I) hayvanlar (II) bitkiler doğanın bir parçasıdır (III) ancak insanlar doğayı diğerlerinden daha çok tahrip eder (IV)" cümlesinde numaralanmış yerlere sırasıyla hangi noktalama işaretleri gelmelidir?',
        options: [
          { id: 'A', text: '(,) (,) (;) (.)' },
          { id: 'B', text: '(;) (,) (,) (.)' },
          { id: 'C', text: '(,) (,) (,) (.)' },
          { id: 'D', text: '(;) (;) (,) (.)' },
          { id: 'E', text: '(,) (;) (;) (.)' }
        ],
        correctOptionId: 'A',
        explanation: 'Eş görevli kelimeler arasına virgül (,) (,), ögeleri arasında virgül bulunan sıralı cümleyi ayırmak için "ancak" bağlacından öncesine (bağlaçtan hemen önce değil de cümlenin bittiği o bağımsız kısımdan sonra) noktalı virgül gelmelidir. Çünkü bağlaçlı cümlelerde bazen bağlaçtan önce noktalı virgül kullanılabilir. Fakat "ancak" kelimesi burada ikinci cümlenin başlangıcıdır. Sıralı cümle: "...parçasıdır; ancak...". Sonuna ise nokta (.). Doğru cevap: (,) (,) (;) (.)'
      },
      {
        id: 'q-nk-9-7',
        difficulty: 'hard',
        questionText: 'Kesme işaretiyle (\') ilgili olarak aşağıdaki kullanımlardan hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Kurum adlarına gelen çekim eklerini ayırmada kullanılır.' },
          { id: 'B', text: 'Çoğul eki olan -ler/-lar özel isme geldiğinde kesmeyle ayrılır.' },
          { id: 'C', text: 'Özel ada getirilen yapım ekleri kesme ile ayrılmaz.' },
          { id: 'D', text: 'Yüzyıl kısaltmalarında (yy.) kesme işareti kullanılır.' },
          { id: 'E', text: 'Özel ada gelen yapım ekinden sonra gelen çekim ekleri kesmeyle ayrılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel ada getirilen yapım ekleri, çoğul eki ve bunlardan sonra gelen diğer ekler kesmeyle ayrılmaz (Örn: Türklük, Türkler, Türkçenin). Kurum adlarına gelen ekler de ayrılmaz.'
      },
      {
        id: 'q-nk-9-8',
        difficulty: 'hard',
        questionText: 'TDK\'ye göre "yüzde ve binde" işaretleri yazılırken sayıyla işaret arasında nasıl bir kural izlenir?',
        options: [
          { id: 'A', text: 'Sayı ve işaret arasına bir boşluk bırakılır.' },
          { id: 'B', text: 'Sayı ve işaret arasına virgül konur.' },
          { id: 'C', text: 'Sayı ve işaret arasına hiçbir boşluk bırakılmaz.' },
          { id: 'D', text: 'Sayı ve işaret arasına kısa çizgi konur.' },
          { id: 'E', text: 'İşaretten sonra nokta konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüzde (%) ve binde (‰) işaretleri yazılırken sayıyla işaret arasına boşluk bırakılmaz (Örn: %25, ‰5).'
      },
      {
        id: 'q-nk-9-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki ikilemelerin hangisinde noktalama yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Oraya er geç gideceğiz.' },
          { id: 'B', text: 'Bunu bata çıka öğrendim.' },
          { id: 'C', text: 'Az, çok demeden yememiz lazım.' },
          { id: 'D', text: 'Aşağı yukarı beş yıldır buradayız.' },
          { id: 'E', text: 'Güle güle kullanın.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkilemelerin arasına virgül de dahil olmak üzere hiçbir noktalama işareti konmaz. C seçeneğinde "Az, çok" ikilemesinin arasına virgül girmesi yanlıştır (Az çok).'
      },
      {
        id: 'q-nk-9-10',
        difficulty: 'hard',
        questionText: 'Özel isimlerin yerine kullanılan "o" zamiri cümlede nasıl yazılır ve ek aldığında kesme işareti durumu nedir?',
        options: [
          { id: 'A', text: 'Büyük yazılır, kesme ile ayrılır.' },
          { id: 'B', text: 'Küçük yazılır, kesme ile ayrılır.' },
          { id: 'C', text: 'Büyük yazılır, kesme ile ayrılmaz.' },
          { id: 'D', text: 'Küçük yazılır, kesme işareti ile ayrılmaz.' },
          { id: 'E', text: 'Sadece cümlenin başında büyük yazılır ve kesme kullanılır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel ismin yerini tutsa bile "o" zamiri küçük harfle yazılır ve aldığı ekler kesme işaretiyle ayrılmaz.'
      }
    ]
  }
]
