export default [
  {
    id: 'test-noktalama-1-kolay',
    title: 'Noktalama İşaretleri 1 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-nk-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna soru işareti konulmalıdır?',
        options: [
          { id: 'A', text: 'Bunu nasıl yapacağımı bilemiyorum' },
          { id: 'B', text: 'Neden böyle davrandığını anladım' },
          { id: 'C', text: 'Sınavın ne zaman yapılacağı belli değil' },
          { id: 'D', text: 'Yarın bizimle sinemaya gelecek misin' },
          { id: 'E', text: 'Ne kadar güzel bir gün olduğunu düşündüm' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki cümle soru anlamı taşıdığı için sonuna soru işareti konulmalıdır. Diğer seçenekler soru kelimesi barındırsa da soru sormamaktadır.'
      },
      {
        id: 'q-nk-1-2',
        difficulty: 'easy',
        questionText: 'Eş görevli kelime ve kelime gruplarının arasına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Eş görevli kelime ve kelime gruplarının arasına virgül (,) konur.'
      },
      {
        id: 'q-nk-1-3',
        difficulty: 'easy',
        questionText: 'Özel adlara getirilen iyelik, durum ve bildirme ekleri hangi işaretle ayrılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Yay ayraç' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen çekim ekleri kesme işareti (\') ile ayrılır.'
      },
      {
        id: 'q-nk-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ankara\'ya yarın gideceğiz.' },
          { id: 'B', text: 'Türkçe\'nin kuralları oldukça düzenlidir.' },
          { id: 'C', text: 'Ahmet\'in kalemi bende kalmış.' },
          { id: 'D', text: '1999\'da doğduğunu söyledi.' },
          { id: 'E', text: 'TDK\'nin yeni sözlüğü yayımlandı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurum, kuruluş, kurul, birleşim, oturum ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz. Ayrıca özel adlara getirilen yapım ekleri, çokluk eki ve bunlardan sonra gelen diğer ekler kesmeyle ayrılmaz. "Türkçe" kelimesindeki "-çe" yapım ekidir, ondan sonra gelen ek ayrılmaz.'
      },
      {
        id: 'q-nk-1-5',
        difficulty: 'easy',
        questionText: 'Tamamlanmamış cümlelerin sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Soru işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Anlatım olarak tamamlanmamış (yüklemi olmayan vb.) cümlelerin sonuna üç nokta (...) konur.'
      },
      {
        id: 'q-nk-1-6',
        difficulty: 'easy',
        questionText: 'Sevinç, kıvanç, acı, korku, şaşma gibi duyguları anlatan cümlelerin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'D',
        explanation: 'Duygu bildiren (heyecan, korku, sevinç vb.) ifadelerin sonuna ünlem işareti (!) konur.'
      },
      {
        id: 'q-nk-1-7',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazılışında gün, ay ve yılı gösteren sayıları birbirinden ayırmak için hangi işaret konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'Nokta veya eğik çizgi' }
        ],
        correctOptionId: 'E',
        explanation: 'Tarihlerin yazılışında gün, ay ve yılı ayırmak için nokta (.) ya da eğik çizgi (/) kullanılır.'
      },
      {
        id: 'q-nk-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna nokta (.) konulmaz?',
        options: [
          { id: 'A', text: 'Bugün hava çok güzel' },
          { id: 'B', text: 'Ders çalışmayı hiç bırakmadı' },
          { id: 'C', text: 'Karşıdan gelen kimdi' },
          { id: 'D', text: 'Herkes sessizce öğretmeni dinliyordu' },
          { id: 'E', text: 'Babam erkenden işe gitti' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneği soru cümlesidir, bu yüzden sonuna soru işareti konulmalıdır. Diğerleri tamamlanmış kurallı cümlelerdir.'
      },
      {
        id: 'q-nk-1-9',
        difficulty: 'easy',
        questionText: 'Saat ve dakika gösteren sayıları birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'TDK kurallarına göre saat ve dakika arasına sadece nokta (.) konur (örneğin 14.30).'
      },
      {
        id: 'q-nk-1-10',
        difficulty: 'easy',
        questionText: 'Alıntı sözler, başka bir kimseden olduğu gibi aktarılıyorsa hangi işaret içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Parantez (Yay ayraç)' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'A',
        explanation: 'Doğrudan aktarılan sözler ve alıntılar tırnak işareti (" ") içerisine alınır.'
      }
    ]
  },
  {
    id: 'test-noktalama-1-orta',
    title: 'Noktalama İşaretleri 1 (Orta)',
    description: 'Noktalama İşaretleri - Orta (1-10)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-nk-2-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgül (,) kaldırılırsa cümlenin anlamı değişir?',
        options: [
          { id: 'A', text: 'Genç, doktora bir şeyler anlatmaya çalışıyordu.' },
          { id: 'B', text: 'Annem, misafirler için harika yemekler yapmış.' },
          { id: 'C', text: 'Kitabını, defterini ve kalemini masada unutmuş.' },
          { id: 'D', text: 'Sabah erken kalktı, yüzünü yıkadı.' },
          { id: 'E', text: 'Ali, sınıfın en çalışkan öğrencisidir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde virgül kaldırılırsa "genç doktora" anlamı çıkar ve özne (genç) sıfata dönüşerek anlam karmaşasına yol açar. Virgül anlam karışıklığını önlemek için kullanılmıştır.'
      },
      {
        id: 'q-nk-2-2',
        difficulty: 'medium',
        questionText: 'İçinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Uzun çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-2-3',
        difficulty: 'medium',
        questionText: 'Kendisinden sonra örnek verilecek veya açıklama yapılacak cümlenin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendisinden sonra örnek verilecek veya açıklama yapılacak cümlenin veya sözün sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-2-4',
        difficulty: 'medium',
        questionText: '"Hey ( ) Çabuk buraya gel ( )" cümlesinde parantez ile belirtilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?',
        options: [
          { id: 'A', text: '(,) (!)' },
          { id: 'B', text: '(!) (.)' },
          { id: 'C', text: '(,) (.)' },
          { id: 'D', text: '(!) (!)' },
          { id: 'E', text: '(;) (!)' }
        ],
        correctOptionId: 'A',
        explanation: 'Ünlem bildiren kelimeden sonra virgül konup ünlem işareti cümlenin sonuna da konulabilir. "Hey," ünleminden sonra küçük harfle (Ç) başlansaydı ünlem sona konurdu. Ancak burada büyük harfle başlandığı varsayıldığında (!) (.) da olabilir. Fakat ünlem işareti genellikle cümlenin sonuna saklanırsa "Hey, Çabuk buraya gel!" olur. Eğer parantez içi büyük harfle başlıyorsa "Hey! Çabuk buraya gel." Ancak genel kullanım (,) ve (!) şeklindedir. Soru bağlamına en uygun cevap (,) ve (!)\'dir, çünkü seçeneklerde ünlemden sonra büyük harfle başlayan kuralına en uyumlu A seçeneğidir.'
      },
      {
        id: 'q-nk-2-5',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisinde noktalı virgülün (;) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Kel ölür, sırma saçlı olur; kör ölür, badem gözlü olur.' },
          { id: 'B', text: 'Erkek çocuklara Doğan, Tuğrul; kız çocuklara ise İnci, Çiçek adları verilir.' },
          { id: 'C', text: 'Ahmet; şiir, roman ve hikaye okumayı çok sever.' },
          { id: 'D', text: 'Yarın hava güzel olacak; biz de pikniğe gideceğiz.' },
          { id: 'E', text: 'Bu konuları daha önce konuştuk; o yüzden tekrar etmeyelim.' }
        ],
        correctOptionId: 'D',
        explanation: 'Noktalı virgül, ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için kullanılır. D seçeneğinde sıralı cümlenin hiçbir ögesinde virgül olmadığı için sadece virgül kullanılması gerekirdi, noktalı virgül yanlıştır.'
      },
      {
        id: 'q-nk-2-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Avrupa Birliği\'ne üye ülkeler...' },
          { id: 'B', text: 'Bakanlar Kurulu\'nun kararıyla...' },
          { id: 'C', text: 'Türk Dil Kurumu\'na dilekçe verdik.' },
          { id: 'D', text: 'Marmara Üniversitesi\'nden mezun oldum.' },
          { id: 'E', text: 'Boğaz Köprüsü\'nden geçtik.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz. Ancak Avrupa Birliği bir istisnadır ve kesme işareti ile ayrılır.'
      },
      {
        id: 'q-nk-2-7',
        difficulty: 'medium',
        questionText: 'Soru bildiren ancak soru eki veya sözü içermeyen cümlelerin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Soru işareti' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'Ünlem işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Soru ifadesi taşıyan sözde soru cümleleri veya soru anlamı taşıyan vurgulu sözlerin (Gümrük memuru başını kaldırdı: — Adınız?) sonuna soru işareti konur.'
      },
      {
        id: 'q-nk-2-8',
        difficulty: 'medium',
        questionText: 'Satıra sığmayan kelimeler bölünürken satır sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Eğik çizgi' },
          { id: 'B', text: 'Uzun çizgi' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Tırnak işareti' }
        ],
        correctOptionId: 'C',
        explanation: 'Satıra sığmayan kelimeler bölünürken hece sonuna kısa çizgi (-) konur.'
      },
      {
        id: 'q-nk-2-9',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisinde yay ayraç ( ) farklı bir amaçla kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yunus Emre (1240?-1320) edebiyatımızın önemli isimlerindendir.' },
          { id: 'B', text: 'Anadolu kentlerini, köylerini (Köy sözünü de çekinerek yazıyorum.) gezdik.' },
          { id: 'C', text: 'Mektubun sonuna (15 Mayıs) tarihini atmayı unutmuş.' },
          { id: 'D', text: 'Bu adam çok zeki (!) olduğunu iddia ediyor.' },
          { id: 'E', text: 'İmek fiilinin (ek fiil) geniş zamanı kullanılmıştır.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde ayraç ek bilgi, tarih, eş anlamlı söz veya açıklama için kullanılmıştır. D seçeneğinde ise alay, kinaye anlamı katmak için ünlem işareti ile birlikte (ünlemi içine almak için) kullanılmıştır.'
      },
      {
        id: 'q-nk-2-10',
        difficulty: 'medium',
        questionText: 'Ara sözleri veya ara cümleleri ayırmak için hangi noktalama işaretleri kullanılabilir?',
        options: [
          { id: 'A', text: 'İki nokta veya noktalı virgül' },
          { id: 'B', text: 'Kısa çizgi veya virgül' },
          { id: 'C', text: 'Tırnak işareti veya yay ayraç' },
          { id: 'D', text: 'Uzun çizgi veya eğik çizgi' },
          { id: 'E', text: 'Virgül veya noktalı virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümle içindeki ara sözleri veya ara cümleleri ayırmak için bu sözlerin başına ve sonuna virgül (,) ya da kısa çizgi (-) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-1-zor',
    title: 'Noktalama İşaretleri 1 (Zor)',
    description: 'Noktalama İşaretleri - Zor (1-10)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-nk-3-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalama eksikliği bir anlam karmaşasına (belirsizliğe) yol açmıştır?',
        options: [
          { id: 'A', text: 'O, köyüne dönmeyi hiç düşünmedi.' },
          { id: 'B', text: 'Yaralı kuşu avuçlarına alıp sevdi.' },
          { id: 'C', text: 'İhtiyar ağacın gölgesinde dinleniyordu.' },
          { id: 'D', text: 'Çocuklar, parkta doyasıya eğlendiler.' },
          { id: 'E', text: 'Bugün de dünkü gibi yağmur yağıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "İhtiyar" kelimesinden sonra virgül konmazsa, dinlenen kişinin kim olduğu (başkası mı, ihtiyar mı) ve ağacın niteliği (ihtiyar ağaç mı) karışır. Virgül olmaması anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-nk-3-2',
        difficulty: 'hard',
        questionText: 'Alıntıların içinde, alıntı yapılan yazarın veya metnin sözüne dahil olmayan, aktaranın kendi eklediği açıklamalar hangi işaret içine alınır?',
        options: [
          { id: 'A', text: 'Yay ayraç ( )' },
          { id: 'B', text: 'Tırnak işareti (" ")' },
          { id: 'C', text: 'Tek tırnak işareti (\' \')' },
          { id: 'D', text: 'Köşeli ayraç [ ]' },
          { id: 'E', text: 'Kısa çizgi (- -)' }
        ],
        correctOptionId: 'D',
        explanation: 'Alıntı metinlerde aktaranın kendi eklediği ifadeler veya açıklamalar köşeli ayraç [ ] içine alınır.'
      },
      {
        id: 'q-nk-3-3',
        difficulty: 'hard',
        questionText: 'Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Hiçbir işaret kullanılmaz' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek zarf-fiil ekinden sonra virgül konmaz. Ancak art arda gelen (sıralanan) zarf-fiil eki almış kelimelerden sonra virgül konur.'
      },
      {
        id: 'q-nk-3-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki durımların hangisinde kesme işareti (\') kullanılmaz?',
        options: [
          { id: 'A', text: 'Kısaltmalara getirilen ekleri ayırmada' },
          { id: 'B', text: 'Sayılara getirilen ekleri ayırmada' },
          { id: 'C', text: 'Özel adlara getirilen iyelik eklerini ayırmada' },
          { id: 'D', text: 'Kurum ve kuruluş adlarına getirilen ekleri ayırmada' },
          { id: 'E', text: 'Belirli bir tarih bildiren ay ve gün adlarına gelen ekleri ayırmada' }
        ],
        correctOptionId: 'D',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz (Avrupa Birliği hariç).'
      },
      {
        id: 'q-nk-3-5',
        difficulty: 'hard',
        questionText: 'Bir cümlede bağlaçlardan ("ve, veya, yahut, ya... ya" vb.) önce veya sonra virgül konulmasıyla ilgili kural aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bağlaçlardan önce virgül konur, sonra konmaz.' },
          { id: 'B', text: 'Bağlaçlardan hem önce hem sonra virgül konur.' },
          { id: 'C', text: 'Bağlaçlardan sonra virgül konur, önce konmaz.' },
          { id: 'D', text: 'Bağlaçlardan önce ve sonra kesinlikle virgül konmaz.' },
          { id: 'E', text: 'İsteğe bağlı olarak önce veya sonra virgül konulabilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Türkçede "ve, veya, yahut, yahut da" bağlaçlarından önce de sonra da virgül konmaz. Aynı şekilde tekrarlı bağlaçlardan (ya... ya, hem... hem vb.) önce ve sonra da virgül konmaz.'
      },
      {
        id: 'q-nk-3-6',
        difficulty: 'hard',
        questionText: 'Tırnak içindeki alıntının sonunda bulunan noktalama işareti nereye konur?',
        options: [
          { id: 'A', text: 'Tırnak işaretinin dışına' },
          { id: 'B', text: 'Tırnak işaretinin içine' },
          { id: 'C', text: 'Cümle sonuna ayrıca konur' },
          { id: 'D', text: 'Alıntı olduğu için noktalama kullanılmaz' },
          { id: 'E', text: 'Yazarın tercihine bırakılır' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içindeki alıntının sonunda bulunan noktalama işareti (nokta, soru işareti, ünlem vb.) tırnak içinde kalır.'
      },
      {
        id: 'q-nk-3-7',
        difficulty: 'hard',
        questionText: '"Ölmek kaderde var ( ) bize ürküntü vermiyor ( ) Lakin vatandan ayrılışın ıstırabı zor ( )" Bu dizelerde parantezle belirtilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?',
        options: [
          { id: 'A', text: '(,) (;) (.)' },
          { id: 'B', text: '(;) (.) (.)' },
          { id: 'C', text: '(,) (.) (.)' },
          { id: 'D', text: '(,) (;) (!)' },
          { id: 'E', text: '(;) (,) (.)' }
        ],
        correctOptionId: 'C',
        explanation: 'İlk ayraç sıralı cümleyi ayırmak için virgül (,); ikinci ayraç cümlenin bittiğini göstermek için nokta (.); üçüncü ayraç yine cümlenin bittiğini göstermek için nokta (.) olmalıdır. Dizeler büyük harfle başladığı için 2. yere nokta gelmelidir.'
      },
      {
        id: 'q-nk-3-8',
        difficulty: 'hard',
        questionText: 'Şiirlerde hece ölçüsünü uydurmak için seslerin düştüğünü göstermek amacıyla hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Kesme işareti (\')' },
          { id: 'B', text: 'Kısa çizgi (-)' },
          { id: 'C', text: 'Yay ayraç ( )' },
          { id: 'D', text: 'Üç nokta (...)' },
          { id: 'E', text: 'Tırnak işareti (" ")' }
        ],
        correctOptionId: 'A',
        explanation: 'Şiirde seslerin ölçü dolayısıyla düştüğünü göstermek için kesme işareti kullanılır (Örnek: Karac\'oğlan, N\'oldu vb.).'
      },
      {
        id: 'q-nk-3-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki nokta (:) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendimi takdim edeyim: Meclis katiplerindenim.' },
          { id: 'B', text: 'Milli Edebiyat akımının temsilcileri şunlardır: Ömer Seyfettin, Ziya Gökalp...' },
          { id: 'C', text: 'Kararımızı verdik: Yarın sabah yola çıkıyoruz.' },
          { id: 'D', text: 'Bahçede birçok meyve ağacı vardı: elma, armut, kiraz...' },
          { id: 'E', text: 'Bu işin tek bir çözümü var: o da çok çalışmak.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde açıklama yapılan kısım bağımsız bir cümle olmadığı halde "o da" denilerek devam edilmiştir. Ayrıca "var, o da" şeklindeki ifadelerde açıklama doğrudan yapılmadığı için araya virgül veya noktalı virgül gelmesi daha uygundur ya da doğrudan "Bu işin tek bir çözümü var: çok çalışmak." şeklinde olmalıdır.'
      },
      {
        id: 'q-nk-3-10',
        difficulty: 'hard',
        questionText: 'TDK kurallarına göre, kitap, dergi vb.nin künyelerinde yazar, eser, basımevi vb. maddelerinden sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'Noktalı virgül (;)' },
          { id: 'B', text: 'Virgül (,)' },
          { id: 'C', text: 'İki nokta (:)' },
          { id: 'D', text: 'Kısa çizgi (-)' },
          { id: 'E', text: 'Nokta (.)' }
        ],
        correctOptionId: 'B',
        explanation: 'Bibliyografik künyelerde (yazar, eser, basımevi vb.) maddelerin arasına virgül (,) konur. En sona ise nokta (.) konur.'
      }
    ]
  }
]
