export default [
  {
    id: 'test-noktalama-7-kolay',
    title: 'Noktalama İşaretleri 7 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-nk-19-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinin sonuna ünlem işareti (!) konmalıdır?',
        options: [
          { id: 'A', text: 'Onu her gün arıyorum ama açmıyor' },
          { id: 'B', text: 'Ne kadar şanslı bir insan olduğunu anladı' },
          { id: 'C', text: 'Eyvah, geç kaldık' },
          { id: 'D', text: 'Bugün hava sıcak mı sıcak' },
          { id: 'E', text: 'Akşam erken uyuyacağım' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Eyvah, geç kaldık" cümlesi korku, telaş gibi güçlü bir duygu (ünlem) bildirdiği için sonuna ünlem işareti konmalıdır.'
      },
      {
        id: 'q-nk-19-2',
        difficulty: 'easy',
        questionText: 'Eş görevli kelimeleri, kelime gruplarını sıralarken aralarına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Tire' }
        ],
        correctOptionId: 'C',
        explanation: 'Eş görevli kelimeler ve kelime gruplarının arasına virgül (,) konur.'
      },
      {
        id: 'q-nk-19-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde nokta (.) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dr. Ahmet Bey ameliyata girdi.' },
          { id: 'B', text: 'Prof. Dr. İlber Ortaylı konferans verdi.' },
          { id: 'C', text: 'Bunu 3. kez tekrar ediyorum.' },
          { id: 'D', text: 'Toplantı 14.30\'da sona erdi.' },
          { id: 'E', text: 'TBMM. bugün özel gündemle toplanacak.' }
        ],
        correctOptionId: 'E',
        explanation: 'Büyük harflerle yapılan kısaltmalarda harflerin arasına ve kısaltmanın sonuna nokta konmaz (T.C. ve T. hariç). TBMM şeklinde olmalıydı.'
      },
      {
        id: 'q-nk-19-4',
        difficulty: 'easy',
        questionText: 'Hitap kelimelerinden (Sevgili Kardeşim, Değerli Dostum vb.) sonra hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Ünlem işareti' },
          { id: 'D', text: 'Noktalı virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Mektuplarda ve yazışmalarda hitap bildiren sözcüklerden sonra virgül (,) konur.'
      },
      {
        id: 'q-nk-19-5',
        difficulty: 'easy',
        questionText: 'Ara sözleri cümleden ayırmak için ara sözün başında ve sonunda aşağıdaki işaretlerden hangisi kullanılabilir?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'Tek tırnak' }
        ],
        correctOptionId: 'A',
        explanation: 'Cümle içindeki ara sözleri veya ara cümleleri ayırmak için bu ifadelerin başına ve sonuna virgül (,) ya da kısa çizgi (-) konur.'
      },
      {
        id: 'q-nk-19-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kullanımlardan hangisinde yay ayraç ( ) doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu ancak sen (başarabilirsin).' },
          { id: 'B', text: 'Ahmet Mithat Efendi (1844-1912) önemli bir yazardır.' },
          { id: 'C', text: 'Bugün hava (çok) güzel olacakmış.' },
          { id: 'D', text: 'Onu gördüğümde saat (beş) ti.' },
          { id: 'E', text: 'Yarın oraya (gidelim) diyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yay ayraç, yazarın doğum ve ölüm tarihlerini (ek bilgi) vermek için doğru kullanılmıştır. Diğerlerindeki kullanımlar gereksiz ve yanlıştır.'
      },
      {
        id: 'q-nk-19-7',
        difficulty: 'easy',
        questionText: 'Kitap adları yazının içerisinde özel olarak vurgulanmak istenirse hangi noktalama işareti içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Köşeli ayraç' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Tek tırnak' },
          { id: 'E', text: 'Yay ayraç' }
        ],
        correctOptionId: 'A',
        explanation: 'Metin içinde eser isimleri ve özel olarak vurgulanmak istenen sözler tırnak işareti (" ") içine alınır.'
      },
      {
        id: 'q-nk-19-8',
        difficulty: 'easy',
        questionText: 'Soru bildiren cümle veya kelimelerin sonuna soru işareti (?) konur. Aşağıdakilerin hangisinde soru işareti kullanılmaz?',
        options: [
          { id: 'A', text: 'Bu işi kim yapacak' },
          { id: 'B', text: 'Nereden geliyorsun' },
          { id: 'C', text: 'Acaba yağmur yağar mı' },
          { id: 'D', text: 'Hangi yoldan gideceğimizi kimse bilmiyor' },
          { id: 'E', text: 'Saat kaçta buluşacağız' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği soru kelimeleri içerse de (hangi, kimse) asıl cümlenin yüklemi (bilmiyor) soru sormamaktadır. Cümle tamamlanmış bir yargı bildirir ve nokta (.) konur.'
      },
      {
        id: 'q-nk-19-9',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazılışında gün, ay ve yılı gösteren sayıları ayırmak için aşağıdaki noktalama işaretlerinden hangisi kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Tırnak işareti' }
        ],
        correctOptionId: 'D',
        explanation: 'Tarihleri yazarken gün, ay, yıl belirten sayıların arasına nokta (.) veya eğik çizgi (/) konur.'
      },
      {
        id: 'q-nk-19-10',
        difficulty: 'easy',
        questionText: 'Cümle içinde kendisinden sonraki cümleye bağlı olarak ret veya kabul bildiren "hayır, evet, peki, pekâlâ" gibi kelimelerden sonra ne konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'E',
        explanation: 'Ret, kabul, teşvik bildiren (evet, hayır, peki, tamam vb.) kelimelerden sonra virgül (,) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-7-orta',
    title: 'Noktalama İşaretleri 7 (Orta)',
    description: 'Noktalama İşaretleri - Orta (61-70)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-nk-20-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgül (,) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sessizce oturdu, etrafı izledi.' },
          { id: 'B', text: 'Akşam, yine akşam, yine akşam.' },
          { id: 'C', text: 'Eğer çalışırsan, başarırsın.' },
          { id: 'D', text: 'Ali, sınıfın en çalışkan öğrencisiydi.' },
          { id: 'E', text: 'Hayır, bu teklifi kabul edemem.' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart eki olan -se, -sa eklerinden sonra virgül konulmaz. C seçeneğinde "çalışırsan" kelimesinden sonraki virgül yanlıştır.'
      },
      {
        id: 'q-nk-20-2',
        difficulty: 'medium',
        questionText: 'Kendi içinde virgül barındıran sıralı cümleleri birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-20-3',
        difficulty: 'medium',
        questionText: 'Karşılıklı konuşmalarda, konuşan kişinin isminden sonra satır başında hangi işaret konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Tırnak işareti' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiyatro eserlerinde veya yazıda karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta (:) konur.'
      },
      {
        id: 'q-nk-20-4',
        difficulty: 'medium',
        questionText: 'Alıntı yapılan metinlerde atlanan bölümleri göstermek için üç nokta (...) yerine göre hangi işaretin içinde kullanılabilir?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Köşeli ayraç' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Tek tırnak' }
        ],
        correctOptionId: 'B',
        explanation: 'Metin içinde aktarılmayan, atlanan bölümleri göstermek için üç nokta köşeli ayraç [...] içine alınarak da kullanılabilir.'
      },
      {
        id: 'q-nk-20-5',
        difficulty: 'medium',
        questionText: 'Bilinmeyen veya şüpheyle karşılanan yer, tarih vb. durumlar için soru işareti (?) hangi noktalama işaretiyle birlikte kullanılır?',
        options: [
          { id: 'A', text: 'Yay ayraç içinde (?)' },
          { id: 'B', text: 'Tırnak içinde "?"' },
          { id: 'C', text: 'Kısa çizgiyle -?-' },
          { id: 'D', text: 'Köşeli ayraç içinde [?]' },
          { id: 'E', text: 'Üç nokta ile ...?' }
        ],
        correctOptionId: 'A',
        explanation: 'Şüphe duyulan ya da kesin olmayan bilgiler için soru işareti yay ayraç (?) içinde kullanılır.'
      },
      {
        id: 'q-nk-20-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Avrupa Birliği\'nin kararları açıklandı.' },
          { id: 'B', text: 'Bakanlar Kurulu\'na yeni atamalar yapıldı.' },
          { id: 'C', text: 'Türk Dil Kurumu\'ndan cevap bekliyoruz.' },
          { id: 'D', text: 'İstanbul Üniversitesi\'ne kayıt yaptırdı.' },
          { id: 'E', text: 'Turgut Özal Lisesi\'nde okuyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme ile ayrılmaz. Avrupa Birliği bu kuralın tek istisnasıdır.'
      },
      {
        id: 'q-nk-20-7',
        difficulty: 'medium',
        questionText: 'Zarf-fiil görevinde kullanılan "mı/mi" edatından sonra virgül kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Virgül mutlaka konur.' },
          { id: 'B', text: 'Noktalı virgül konur.' },
          { id: 'C', text: 'Virgül konmaz.' },
          { id: 'D', text: 'Soru işareti konur.' },
          { id: 'E', text: 'İki nokta konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin içinde zarf-fiil (zaman, şart) görevinde kullanılan "mı/mi" ekinden sonra virgül konmaz (Örn: Yağmur yağdı mı işimiz zorlaşır).'
      },
      {
        id: 'q-nk-20-8',
        difficulty: 'medium',
        questionText: 'Cümle içinde yer alan bağlaçlardan (ve, veya, ki, de, ama vb.) hemen önce ya da sonra virgül kullanılır mı?',
        options: [
          { id: 'A', text: 'Evet, bağlaçlardan önce kullanılır.' },
          { id: 'B', text: 'Evet, bağlaçlardan sonra kullanılır.' },
          { id: 'C', text: 'Sadece "ki" bağlacından sonra kullanılır.' },
          { id: 'D', text: 'Sadece "ama" bağlacından önce kullanılır.' },
          { id: 'E', text: 'Hayır, bağlaçlardan önce ve sonra virgül kullanılmaz.' }
        ],
        correctOptionId: 'E',
        explanation: 'TDK kurallarına göre "ve, veya, yahut, ki, da, de, ama, fakat, lakin" gibi bağlaçlardan önce veya sonra virgül ya da başka bir noktalama işareti kullanılmaz.'
      },
      {
        id: 'q-nk-20-9',
        difficulty: 'medium',
        questionText: 'Sözcüklerin kök, gövde ve eklerini birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Artı işareti' }
        ],
        correctOptionId: 'A',
        explanation: 'Dil bilgisinde ek ve kökleri ayırmak için kısa çizgi (-) kullanılır (Örn: göz-lük-çü).'
      },
      {
        id: 'q-nk-20-10',
        difficulty: 'medium',
        questionText: 'Alıntı metinlerde aktarılan cümlenin asıl noktalama işareti nereye konur?',
        options: [
          { id: 'A', text: 'Tırnak işaretinin dışına' },
          { id: 'B', text: 'Tırnak işaretinin içine' },
          { id: 'C', text: 'Alıntı olduğunu belli etmek için konmaz' },
          { id: 'D', text: 'İsteğe bağlı olarak içeri veya dışarı' },
          { id: 'E', text: 'Sadece dışarıya virgül konur' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içindeki alıntının sonunda bulunan noktalama işareti her zaman tırnak içinde kalır.'
      }
    ]
  },
  {
    id: 'test-noktalama-7-zor',
    title: 'Noktalama İşaretleri 7 (Zor)',
    description: 'Noktalama İşaretleri - Zor (61-70)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-nk-21-1',
        difficulty: 'hard',
        questionText: '"Görmüyor musun (I) saat çok geç oldu (II) hemen eve dönmeliyiz (III) yoksa babam bize çok kızacak (IV)" cümlesinde numaralı yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?',
        options: [
          { id: 'A', text: '(?) (;) (,) (.)' },
          { id: 'B', text: '(,) (;) (,) (.)' },
          { id: 'C', text: '(?) (,) (;) (.)' },
          { id: 'D', text: '(,) (,) (;) (.)' },
          { id: 'E', text: '(;) (,) (,) (.)' }
        ],
        correctOptionId: 'D',
        explanation: 'Birinci kısım "Görmüyor musun" soru sorsa da cümle devam ediyor (küçük harfle "saat"), sıralı cümle yapısı var, bu yüzden (I) virgül. İkinci kısım "oldu" sıralı cümleyi ayırmak için (II) virgül. Ancak "eve dönmeliyiz; yoksa" kısmında "yoksa" bağlacı/zıtlık öncesi ve kendi içinde virgül barındıran kısımları bağlamak için (III) noktalı virgül (ya da bağımsız bir cümle yapısı). Doğru akış: (,) (,) (;) (.) şeklindedir.'
      },
      {
        id: 'q-nk-21-2',
        difficulty: 'hard',
        questionText: 'Eser adlarında geçen "ve, ile, ya, veya" bağlaçlarının yazımı ve noktalaması ile ilgili hangi kural doğrudur?',
        options: [
          { id: 'A', text: 'Eser adının bütün harfleri büyük yazılırsa bağlaçlar küçük yazılır, virgül konur.' },
          { id: 'B', text: 'Eser adının sadece baş harfleri büyük yazıldığında bağlaçlar küçük harfle yazılır ve noktalama konmaz.' },
          { id: 'C', text: 'Eser adındaki bağlaçlar her zaman büyük yazılır.' },
          { id: 'D', text: 'Bağlaçlardan sonra daima virgül kullanılır.' },
          { id: 'E', text: 'Eser adının bütün harfleri küçükse bağlaçlar büyük yazılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eser adlarının baş harfleri büyük yazıldığında aradaki bağlaçlar küçük yazılır (Örn: Suç ve Ceza). Bütün harfler büyük yazıldığında bağlaç da büyük yazılır (SUÇ VE CEZA). Ayrıca bağlaçların önüne/arkasına noktalama konmaz.'
      },
      {
        id: 'q-nk-21-3',
        difficulty: 'hard',
        questionText: 'Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra virgül konmasıyla ilgili kurala göre, aşağıdakilerin hangisinde noktalama yanlışı vardır?',
        options: [
          { id: 'A', text: 'Çocuk ağlayarak, bağırarak yanımıza geldi.' },
          { id: 'B', text: 'İşlerini bitirip, kitap okumaya başladı.' },
          { id: 'C', text: 'Düşünüp taşınarak, ince eleyip sık dokuyarak karar verdi.' },
          { id: 'D', text: 'Gidip, görüp, konuşup öyle dönecek.' },
          { id: 'E', text: 'Dinlenerek, sakince yolculuk yaptık.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek zarf-fiil eki almış kelimeden sonra virgül konmaz. B seçeneğinde tek zarf-fiil ("bitirip") olduğu için virgül konulması yanlıştır.'
      },
      {
        id: 'q-nk-21-4',
        difficulty: 'hard',
        questionText: 'Alay ve kinaye anlamı katmak için yay ayraç içinde ünlem işareti (!) kullanılır. Bu işaret nereye konur?',
        options: [
          { id: 'A', text: 'Kinaye yapılmak istenen sözcükten hemen önceye' },
          { id: 'B', text: 'Cümlenin en sonuna' },
          { id: 'C', text: 'Kinaye yapılmak istenen sözcükten hemen sonraya' },
          { id: 'D', text: 'Cümlenin en başına' },
          { id: 'E', text: 'Bağlaçlardan hemen sonra' }
        ],
        correctOptionId: 'C',
        explanation: 'Alay ve kinaye için kullanılan yay ayraç içindeki ünlem işareti, doğrudan kinaye yapılmak istenen kelimeden hemen sonra konur.'
      },
      {
        id: 'q-nk-21-5',
        difficulty: 'hard',
        questionText: 'TDK kurallarına göre, yüzyıl gibi kelimelerin kısaltmalarında noktalama ve kesme işareti kullanımı nasıldır?',
        options: [
          { id: 'A', text: 'yy.\'da' },
          { id: 'B', text: 'yy\'da' },
          { id: 'C', text: 'yy.da' },
          { id: 'D', text: 'yy. dan' },
          { id: 'E', text: 'y.y.\'da' }
        ],
        correctOptionId: 'C',
        explanation: 'Küçük harflerle yapılan ve sonunda nokta bulunan kısaltmalara getirilen ekler kesmeyle ayrılmaz; ekin okunuşu kısaltmanın (ya da kelimenin) kendisine göre belirlenir (yy.da = yüzyılda).'
      },
      {
        id: 'q-nk-21-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki nokta (:) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bir sorum var: Neden beni dinlemiyorsun?' },
          { id: 'B', text: 'Atatürk şöyle der: "Hayatta en hakiki mürşit ilimdir."' },
          { id: 'C', text: 'Bu işin en zor kısmı: çok erken kalkmaktır.' },
          { id: 'D', text: 'Edebiyatımızda bazı önemli şairler şunlardır: Fuzuli, Nedim, Baki.' },
          { id: 'E', text: 'Öğretmen gülümsedi: — Hepiniz çok iyi çalıştınız.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde özne ile yüklem (isim cümlesinde) arasına iki nokta girmiştir. İki noktanın bu şekilde kullanımı yanlıştır, virgül daha uygun olabilir ancak iki nokta kesinlikle hatalıdır.'
      },
      {
        id: 'q-nk-21-7',
        difficulty: 'hard',
        questionText: 'Özel isimlerin yapım eki aldıktan sonra çekim eki almasıyla ilgili kurala göre, hangi seçenekte yazım/noktalama yanlışı vardır?',
        options: [
          { id: 'A', text: 'İngilizcenin kurallarını öğreniyorum.' },
          { id: 'B', text: 'Türkçeden sınav olacağız.' },
          { id: 'C', text: 'Müslümanlığın şartları bellidir.' },
          { id: 'D', text: 'Almanca\'yı çok seviyorum.' },
          { id: 'E', text: 'Ankaralılar sıcakkanlı insanlardır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel ada getirilen yapım ekleri kesmeyle ayrılmaz, ondan sonra gelen çekim ekleri de ayrılmaz. "Almancayı" şeklinde bitişik yazılmalıdır.'
      },
      {
        id: 'q-nk-21-8',
        difficulty: 'hard',
        questionText: 'Tırnak içinde verilen cümlenin içinde bir başka tırnaklı söze daha yer verilmek istenirse ne kullanılır?',
        options: [
          { id: 'A', text: 'Köşeli ayraç' },
          { id: 'B', text: 'Yay ayraç' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Tek tırnak (\' \')' },
          { id: 'E', text: 'İkinci kez çift tırnak' }
        ],
        correctOptionId: 'D',
        explanation: 'Tırnak içinde verilen cümlenin içinde yeniden tırnağa alınması gereken bir sözü belirtmek için tek tırnak işareti (\' \') kullanılır.'
      },
      {
        id: 'q-nk-21-9',
        difficulty: 'hard',
        questionText: '"Ölmek kaderde var ( ) bize ürküntü vermiyor ( ) Lakin vatandan ayrılışın ıstırabı zor ( )" Bu dizelerde ayraçlı yerlere sırasıyla hangi işaretler konmalıdır?',
        options: [
          { id: 'A', text: '(,) (;) (.)' },
          { id: 'B', text: '(,) (.) (.)' },
          { id: 'C', text: '(;) (.) (.)' },
          { id: 'D', text: '(,) (.) (!)' },
          { id: 'E', text: '(;) (,) (.)' }
        ],
        correctOptionId: 'B',
        explanation: 'İlk cümle sıralı olduğu için araya virgül (,), cümle bittiği ve sonraki kısım büyük harfle başladığı için nokta (.), en sona da nokta (.) gelir.'
      },
      {
        id: 'q-nk-21-10',
        difficulty: 'hard',
        questionText: 'İkilemelerin arasına noktalama işareti konulmaz. Aşağıdakilerden hangisi ikileme değildir ve virgül konulması gerekir?',
        options: [
          { id: 'A', text: 'Bata çıka ilerledik.' },
          { id: 'B', text: 'Er geç bu iş çözülecek.' },
          { id: 'C', text: 'Akşam sabah çalışıyor.' },
          { id: 'D', text: 'Akşam, yine akşam, yine akşam.' },
          { id: 'E', text: 'Aşağı yukarı beş saattir buradayız.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği ikileme değil, anlamı güçlendirmek için yapılan kelime tekrarıdır (yineleme). Bu tekrarların arasına virgül konur.'
      }
    ]
  }
]
