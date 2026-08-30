export default [
  {
    id: 'test-noktalama-2-kolay',
    title: 'Noktalama İşaretleri 2 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-nk-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna ünlem işareti (!) konmalıdır?',
        options: [
          { id: 'A', text: 'Onun ne zaman geleceğini bilmiyorum' },
          { id: 'B', text: 'Yazıklar olsun sana' },
          { id: 'C', text: 'Bunu nasıl başardığını sormayacağım' },
          { id: 'D', text: 'Yarın hava çok güzel olacakmış' },
          { id: 'E', text: 'Sessizce odasına çekildi' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneği sitem ve üzüntü bildiren bir ünlem cümlesidir. Bu nedenle sonuna ünlem işareti konur.'
      },
      {
        id: 'q-nk-4-2',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazımında gün, ay, yıl belirten sayıların arasına hangi noktalama işareti konulabilir?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Tarihlerin yazımında sayıların arasına nokta (.) veya eğik çizgi (/) konur.'
      },
      {
        id: 'q-nk-4-3',
        difficulty: 'easy',
        questionText: 'Sayılara getirilen ekleri ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Kesme işareti' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Parantez' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Sayılara getirilen ekler kesme işaretiyle (\') ayrılır. Örn: 1923\'te, 8\'inci.'
      },
      {
        id: 'q-nk-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu elbiseyi nereden aldın?' },
          { id: 'B', text: 'Acaba o da bizimle gelecek mi?' },
          { id: 'C', text: 'Sana bunları kim anlattı?' },
          { id: 'D', text: 'Beni dinliyor musun, diye sordu?' },
          { id: 'E', text: 'Toplantı saat kaçta başlayacak?' }
        ],
        correctOptionId: 'D',
        explanation: 'Aktarma cümleleri "diye sordu, dedi" gibi ifadelerle bittiğinde cümlenin tamamı soru cümlesi olmaz. Tırnak içine alınmamış alıntılarda alıntıdan sonra virgül konur, sonuna nokta konur: Beni dinliyor musun, diye sordu.'
      },
      {
        id: 'q-nk-4-5',
        difficulty: 'easy',
        questionText: 'Adres yazarken apartman numarası ile daire numarası arasına hangi işaret konur?',
        options: [
          { id: 'A', text: 'Tire' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Adres yazarken apartman numarası ile daire numarası arasına eğik çizgi (/) konur (Örn: No: 21/4).'
      },
      {
        id: 'q-nk-4-6',
        difficulty: 'easy',
        questionText: 'Kısaltmalardan sonra hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurum ve kuruluş adlarının kısaltmaları hariç, kelime bazlı kısaltmaların (Dr., Prof., vb.) sonuna nokta (.) konur.'
      },
      {
        id: 'q-nk-4-7',
        difficulty: 'easy',
        questionText: 'Kişi adlarından sonra gelen saygı sözlerine getirilen ekleri ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Tırnak işareti' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi adlarından sonra gelen saygı ve unvan sözlerine getirilen ekler kesme işaretiyle ayrılır (Örn: Ayşe Hanım\'a).'
      },
      {
        id: 'q-nk-4-8',
        difficulty: 'easy',
        questionText: 'Edebi eserlerde konuşma bölümünden önceki ifadenin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Karşılıklı konuşmalarda, konuşan kişinin adından sonra veya edebi metinlerde konuşmadan önceki cümlenin sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna üç nokta (...) konmalıdır?',
        options: [
          { id: 'A', text: 'Bugün çok çalıştım' },
          { id: 'B', text: 'Karşı tepelerde karlar erimiş' },
          { id: 'C', text: 'O kadar güzel bir manzaraydı ki' },
          { id: 'D', text: 'Seni ne kadar çok sevdiğimi biliyorsun' },
          { id: 'E', text: 'Neden sürekli aynı hatayı yapıyorsun' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneği yüklemi bulunmayan, anlamı tamamlanmamış bir cümledir ve sonuna üç nokta konmalıdır.'
      },
      {
        id: 'q-nk-4-10',
        difficulty: 'easy',
        questionText: 'Hitap kelimelerinden sonra hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Ünlem' }
        ],
        correctOptionId: 'D',
        explanation: 'Hitap kelimelerinden (Sevgili Kardeşim, Değerli Arkadaşım vb.) sonra virgül (,) kullanılır.'
      }
    ]
  },
  {
    id: 'test-noktalama-2-orta',
    title: 'Noktalama İşaretleri 2 (Orta)',
    description: 'Noktalama İşaretleri - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-nk-5-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işaretinin (\') kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'TDK\'nin yeni başkanı atandı.' },
          { id: 'B', text: 'İngilizce\'yi öğrenmek zaman alır.' },
          { id: 'C', text: 'Anadolu Lisesi\'nin müdürü konuştu.' },
          { id: 'D', text: '1980\'li yıllarda teknoloji farklıydı.' },
          { id: 'E', text: 'Ahmet Bey\'in arabası bozulmuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel adlara getirilen yapım ekleri kesme ile ayrılmaz. "İngilizce" kelimesindeki "-ce" yapım ekidir, ondan sonra gelen ek de ayrılmaz ("İngilizceyi" şeklinde bitişik yazılmalıdır).'
      },
      {
        id: 'q-nk-5-2',
        difficulty: 'medium',
        questionText: 'Aralarında şekil ve anlamca bağ bulunan bağımsız sıralı cümleleri ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Bağlaç' }
        ],
        correctOptionId: 'D',
        explanation: 'Birbiri ardınca sıralanan eş görevli kelime ve kelime grupları ile bağımsız sıralı cümleleri birbirinden ayırmak için virgül (,) kullanılır.'
      },
      {
        id: 'q-nk-5-3',
        difficulty: 'medium',
        questionText: 'Tiyatro eserlerinde ve senaryolarda konuşanın hareketlerini, durumunu açıklamak için kullanılan işaret hangisidir?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Yay ayraç' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiyatro metinlerinde kişilerin tavır ve hareketlerini belirtmek için yay ayraç (parantez) kullanılır.'
      },
      {
        id: 'q-nk-5-4',
        difficulty: 'medium',
        questionText: 'Bir yazıda maddelerin sıralanmasında rakam veya harflerden sonra hangisi kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'Sadece yay ayraç' },
          { id: 'C', text: 'Nokta veya kapama yay ayracı' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir yazıda maddeleri gösteren rakam veya harflerden sonra nokta (.) veya kapama yay ayracı ( ) ) konur.'
      },
      {
        id: 'q-nk-5-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tırnak işareti (" ") gereksiz kullanılmıştır?',
        options: [
          { id: 'A', text: 'Atatürk, "Hayatta en hakiki mürşit ilimdir." demiştir.' },
          { id: 'B', text: 'Yazar, bu eserinde "yalnızlık" temasını işliyor.' },
          { id: 'C', text: 'Yeni çıkan "Kürk Mantolu Madonna" kitabını okudun mu?' },
          { id: 'D', text: 'Bana "yarın geleceğini" söyledi.' },
          { id: 'E', text: 'Şiirde "aşk" ve "ayrılık" kelimeleri sıkça geçiyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'Tırnak işareti doğrudan alıntılarda, vurgulanan sözcüklerde veya eser isimlerinde kullanılır. D seçeneğinde ise dolaylı anlatım (yarın geleceğini) vardır, tırnak içine alınmasına gerek yoktur.'
      },
      {
        id: 'q-nk-5-6',
        difficulty: 'medium',
        questionText: 'Sözcüklerin kök, gövde ve eklerini ayırmak için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Uzun çizgi' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Artı işareti' }
        ],
        correctOptionId: 'A',
        explanation: 'Dil bilgisinde kök ve ekleri birbirinden ayırmak için kısa çizgi (-) kullanılır. (Örn: göz-lük-çü)'
      },
      {
        id: 'q-nk-5-7',
        difficulty: 'medium',
        questionText: 'Anlam belirsizliğini önlemek için kullanılan virgül aşağıdakilerin hangisinde vardır?',
        options: [
          { id: 'A', text: 'Akşam, yine akşam, yine akşam...' },
          { id: 'B', text: 'Hasta, doktora doğru yaklaştı.' },
          { id: 'C', text: 'Çocuklar, çiçekler gibi narindir.' },
          { id: 'D', text: 'Evet, kırk yıldır bu köyde yaşıyorum.' },
          { id: 'E', text: 'Elmalar, armutlar ve muzlar masadaydı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde virgül olmazsa "hasta doktor" anlamı çıkar, virgül konarak "hasta" özne yapılmış ve anlam karışıklığı önlenmiştir.'
      },
      {
        id: 'q-nk-5-8',
        difficulty: 'medium',
        questionText: 'Ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıralı cümleleri birbirinden ayırmak için virgül kullanılır ancak bu sıralı cümlelerin kendi içinde virgül varsa, bu kez bu cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-5-9',
        difficulty: 'medium',
        questionText: 'Kendisiyle ilgili örnek verilecek cümlenin sonuna aşağıdaki noktalama işaretlerinden hangisi konur?',
        options: [
          { id: 'A', text: 'Üç nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Uzun çizgi' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendisiyle ilgili örnek verilecek cümlenin sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-5-10',
        difficulty: 'medium',
        questionText: 'Sözün bir yerde kesilerek geri kalan bölümün okuyucunun hayal gücüne bırakıldığını göstermek için hangisi kullanılır?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Ünlem işareti' },
          { id: 'C', text: 'Üç nokta' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Uzun çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Sözün bir yerde kesilerek okuyucunun hayaline bırakılan eksiltili cümlelerin sonuna üç nokta (...) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-2-zor',
    title: 'Noktalama İşaretleri 2 (Zor)',
    description: 'Noktalama İşaretleri - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-nk-6-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kullanımların hangisinde virgül (,) yanlış bir kurala dayanılarak konulmuştur?',
        options: [
          { id: 'A', text: 'Tekrarlanan kelimeler arasına konur.' },
          { id: 'B', text: 'Hitap bildiren kelimelerden sonra konur.' },
          { id: 'C', text: 'İsim ve sıfat tamlamalarında tamlayan ile tamlanan arasına konur.' },
          { id: 'D', text: 'Tırnak içinde olmayan alıntı cümlelerden sonra konur.' },
          { id: 'E', text: 'Ara sözlerin başında ve sonunda konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'İsim tamlamalarında tamlayan ve tamlanan arasına, sıfat tamlamalarında sıfatla isim arasına hiçbir noktalama işareti girmez. Virgül konulması kesinlikle yanlıştır.'
      },
      {
        id: 'q-nk-6-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayraç ( ) işareti farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Halit Ziya Uşaklıgil (1866-1945) Servetifünun döneminin en büyük romancısıdır.' },
          { id: 'B', text: 'İbn-i Sina\'nın (Avicenna) eserleri Avrupa\'da yüzyıllarca ders kitabı olarak okutuldu.' },
          { id: 'C', text: 'Fiilimsiler (eylemsiler) cümlede yan cümlecik kurarlar.' },
          { id: 'D', text: 'Bu yazarın ilk şiir kitabı (Örümcek Ağı) 1925 yılında yayımlanmıştır.' },
          { id: 'E', text: 'Bu kadar yetenekli (!) bir oyuncuyu takımda nasıl yedek bırakırlar?' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde ayraç ek bilgi, doğum-ölüm tarihi, eş anlamlı isim veya eser adı vermek için kullanılmışken, E seçeneğinde alay/kinaye bildiren ünlem işaretini içine almak için kullanılmıştır.'
      },
      {
        id: 'q-nk-6-3',
        difficulty: 'hard',
        questionText: 'Cümle içerisinde "da, de" veya "ki" bağlaçlarından sonra hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Hiçbir işaret kullanılmaz' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Türkçe kurallarına göre bağlaç olan "da, de", "ki" kelimelerinden sonra veya önce kesinlikle virgül veya başka bir noktalama işareti kullanılmaz.'
      },
      {
        id: 'q-nk-6-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki nokta (:) yerinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'En sevdiğim renkler: mavi ve yeşildir.' },
          { id: 'B', text: 'Bu işin sırrı: çok çalışmaktır.' },
          { id: 'C', text: 'Edebiyatımızdaki büyük şairlerden bazıları şunlardır: Fuzuli, Baki, Nedim...' },
          { id: 'D', text: 'Oraya gittik: ama kapalıydı.' },
          { id: 'E', text: 'Bütün soruları: hızlıca çözdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'A ve B\'de iki noktaya gerek yoktur. D\'de bağlaçtan önce noktalama konmaz. E\'de zarf tümleci ile yüklem arasına iki nokta girmez. C seçeneğinde ise açıklama / örnek verileceği için iki nokta doğru kullanılmıştır.'
      },
      {
        id: 'q-nk-6-5',
        difficulty: 'hard',
        questionText: '"Gözlerimi açtığımda saat yediydi ( ) dışarıda yağmur yağıyordu ( ) Ağaçlar ( ) yollar ( ) evler sırılsıklamdı ( )" cümlesinde parantezli yerlere sırasıyla hangi işaretler gelmelidir?',
        options: [
          { id: 'A', text: '(,) (.) (,) (,) (.)' },
          { id: 'B', text: '(;) (.) (,) (,) (...)' },
          { id: 'C', text: '(,) (.) (,) (;) (.)' },
          { id: 'D', text: '(;) (,) (,) (,) (.)' },
          { id: 'E', text: '(,) (;) (,) (,) (.)' }
        ],
        correctOptionId: 'A',
        explanation: 'Sıralı cümleleri ayırmak için (,) bittiği için (.), eş görevli sözcükler arasına (,) (,) ve cümle bittiği için nokta (.) gelir. Dolayısıyla (,) (.) (,) (,) (.)'
      },
      {
        id: 'q-nk-6-6',
        difficulty: 'hard',
        questionText: 'Tırnak işareti (" ") aşağıdaki durumların hangisinde kullanılmaz?',
        options: [
          { id: 'A', text: 'Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözlerde' },
          { id: 'B', text: 'Özel olarak vurgulanmak istenen sözlerde' },
          { id: 'C', text: 'Cümle içerisinde eserlerin ve yazıların adlarında' },
          { id: 'D', text: 'Özel adlara getirilen çekim eklerini ayırmada' },
          { id: 'E', text: 'Tiyatro eserlerinde kahramanların sözlerinin başında' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel adlara getirilen çekim eklerini ayırmada tırnak işareti değil kesme işareti (\') kullanılır.'
      },
      {
        id: 'q-nk-6-7',
        difficulty: 'hard',
        questionText: 'Cümle içinde zarf-fiil eklerinden ("-ıp, -arak, -ınca" vb.) sonra virgül kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Zarf-fiil ekinden sonra her zaman virgül konur.' },
          { id: 'B', text: 'Tek bir zarf-fiil varsa virgül konmaz, ancak peş peşe sıralanmış zarf-fiiller varsa aralarına konur.' },
          { id: 'C', text: 'Zarf-fiil eklerinden sonra virgül kullanılması kesinlikle yasaktır.' },
          { id: 'D', text: 'Sadece "-arak" ekinden sonra virgül konabilir.' },
          { id: 'E', text: 'Cümlede vurgulanmak istenirse konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'TDK kurallarına göre cümlede tek bir zarf-fiil eki almış kelime varsa ondan sonra virgül konmaz. Ancak art arda gelen (sıralanmış) zarf-fiil eki almış kelimelerin arasına virgül konur.'
      },
      {
        id: 'q-nk-6-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde kesme işareti ölçü gereği ünlü düşmesini göstermek için kullanılmıştır?',
        options: [
          { id: 'A', text: 'Aşık Veysel\'im der ki...' },
          { id: 'B', text: 'Güzelliğin on par\'etmez' },
          { id: 'C', text: 'Yunus\'un bağrında yara var' },
          { id: 'D', text: 'Erzurum\'da dağlar dumanlıdır' },
          { id: 'E', text: 'Pir Sultan\'ım göç eyledi' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "para etmez" yerine şiirin ölçüsüne uyması için hece düşürülmüş ve bu durum kesme işaretiyle "par\'etmez" şeklinde gösterilmiştir.'
      },
      {
        id: 'q-nk-6-9',
        difficulty: 'hard',
        questionText: 'Dünden beri aramadı ( ) sormadı ( ) Hâlâ çok kızgın olmalı ( )',
        options: [
          { id: 'A', text: '(,) (;) (.)' },
          { id: 'B', text: '(,) (.) (.)' },
          { id: 'C', text: '(;) (.) (!)' },
          { id: 'D', text: '(,) (.) (!)' },
          { id: 'E', text: '(;) (,) (.)' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıralı cümleler arasına virgül (,). "Sormadı" kelimesinden sonra "Hâlâ" büyük harfle başladığı için cümle bitmiş sayılır ve nokta (.) konur. Son cümlenin sonuna da nokta (.) konur. Cevap (,) (.) (.)'
      },
      {
        id: 'q-nk-6-10',
        difficulty: 'hard',
        questionText: 'Karşılıklı konuşmalarda, yeterli olmayan veya eksik bırakılan cevapları ifade etmek için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Soru işareti' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'Ünlem işareti' }
        ],
        correctOptionId: 'D',
        explanation: 'Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda susulduğunu belirtmek için üç nokta (...) kullanılır.'
      }
    ]
  }
]
