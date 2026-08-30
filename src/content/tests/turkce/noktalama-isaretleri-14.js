export default [
  {
    id: 'test-noktalama-14-kolay',
    title: 'Noktalama İşaretleri 14 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-nk-40-1',
        difficulty: 'easy',
        questionText: 'Anlamca tamamlanmış (yargı bildiren) cümlelerin sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Nokta' },
          { id: 'C', text: 'Virgül' },
          { id: 'D', text: 'Üç nokta' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'B',
        explanation: 'Yargı bildiren ve anlamca tamamlanmış cümlelerin sonuna nokta (.) konur.'
      },
      {
        id: 'q-nk-40-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde virgül (,) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Pazardan elma, armut ve muz aldık.' },
          { id: 'B', text: 'Hızlıca içeri girdi, odasına kapandı.' },
          { id: 'C', text: 'Ahmet, sınıfın en çalışkan öğrencisidir.' },
          { id: 'D', text: 'Eğer sen de gelirsen, çok mutlu olurum.' },
          { id: 'E', text: 'Genç, yaşlı, çocuk herkes oradaydı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin içinde şart eki (-se, -sa) almış kelimelerden sonra virgül konmaz. D seçeneğindeki "gelirsen" kelimesinden sonra konulan virgül yanlıştır.'
      },
      {
        id: 'q-nk-40-3',
        difficulty: 'easy',
        questionText: 'Özel isimlere getirilen "durum, iyelik ve bildirme" ekleri hangi işaretle ayrılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Yay ayraç' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel isimlere getirilen çekim ekleri kesme işareti (\') ile ayrılır.'
      },
      {
        id: 'q-nk-40-4',
        difficulty: 'easy',
        questionText: 'Sevinç, korku, heyecan, şaşkınlık bildiren cümle veya sözcüklerin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Üç nokta' },
          { id: 'B', text: 'Soru işareti' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'D',
        explanation: 'Duygu bildiren (heyecan, şaşkınlık, korku vb.) kelime veya cümlelerin sonuna ünlem işareti (!) konur.'
      },
      {
        id: 'q-nk-40-5',
        difficulty: 'easy',
        questionText: 'Tarihlerin yazılışında günü, ayı ve yılı gösteren sayıları birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Tire' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Nokta veya eğik çizgi' }
        ],
        correctOptionId: 'E',
        explanation: 'Tarihlerin yazılışında sayıları birbirinden ayırmak için nokta (.) veya eğik çizgi (/) kullanılır.'
      },
      {
        id: 'q-nk-40-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu nasıl başaracaksın?' },
          { id: 'B', text: 'Sen de bizimle sinemaya gelecek misin?' },
          { id: 'C', text: 'Ne kadar yorulduğunu kimse bilemez?' },
          { id: 'D', text: 'Toplantının ne zaman biteceğini sordu mu?' },
          { id: 'E', text: 'Hangi elbiseyi daha çok beğendin?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde soru kelimeleri bulunsa da cümle soru anlamı taşımaz, yargı bildirir ("bilemez"). Soru işareti yerine nokta konmalıdır.'
      },
      {
        id: 'q-nk-40-7',
        difficulty: 'easy',
        questionText: 'Anlamca tamamlanmamış, yüklemi bulunmayan (eksiltili) cümlelerin sonuna ne konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'Soru işareti' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Ünlem işareti' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüklemi olmayan, tamamlanmamış eksiltili cümlelerin sonuna üç nokta (...) konur.'
      },
      {
        id: 'q-nk-40-8',
        difficulty: 'easy',
        questionText: 'Saat ve dakikayı gösteren sayıların arasına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Eğik çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Saat ve dakikaların arasına (14.30 gibi) TDK kurallarına göre yalnızca nokta (.) konur.'
      },
      {
        id: 'q-nk-40-9',
        difficulty: 'easy',
        questionText: 'Başka birinden aktarılan (doğrudan alıntı) sözler hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Köşeli ayraç' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğrudan yapılan alıntılar, aktarılan sözler tırnak işareti (" ") içerisine alınır.'
      },
      {
        id: 'q-nk-40-10',
        difficulty: 'easy',
        questionText: 'Satır sonuna sığmayan kelimeler hece sonlarından bölünürken satırın sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Eğik çizgi' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Uzun çizgi' },
          { id: 'D', text: 'Tırnak işareti' },
          { id: 'E', text: 'Kesme işareti' }
        ],
        correctOptionId: 'B',
        explanation: 'Satıra sığmayan kelimeler bölünürken hecenin sonuna kısa çizgi (-) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-14-orta',
    title: 'Noktalama İşaretleri 14 (Orta)',
    description: 'Noktalama İşaretleri - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-nk-41-1',
        difficulty: 'medium',
        questionText: 'İçinde virgül barındıran sıralı cümleleri birbirinden ayırmak için hangi noktalama işareti kullanılır?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'İçinde virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılır.'
      },
      {
        id: 'q-nk-41-2',
        difficulty: 'medium',
        questionText: 'Mektuplarda ve resmî yazışmalarda hitap bildiren sözcüklerden sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Ünlem işareti' },
          { id: 'E', text: 'Tire' }
        ],
        correctOptionId: 'B',
        explanation: 'Mektuplarda ve yazışmalarda hitap bildiren sözcüklerden (Sevgili Kardeşim vb.) sonra virgül (,) konur.'
      },
      {
        id: 'q-nk-41-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ankara Lisesi\'nin mezunları toplandı.' },
          { id: 'B', text: 'Ahmet Bey\'e dosyaları teslim ettim.' },
          { id: 'C', text: 'Avrupa Birliği\'ne yeni üyeler katıldı.' },
          { id: 'D', text: 'Kızılırmak\'ın suları oldukça bulanık.' },
          { id: 'E', text: 'İngiltere\'den yarın sabah dönecekmiş.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına getirilen ekler kesme ile ayrılmaz (Avrupa Birliği istisnadır). "Ankara Lisesinin" olmalıdır.'
      },
      {
        id: 'q-nk-41-4',
        difficulty: 'medium',
        questionText: 'Zarf-fiil eki almış kelimelerden sonra virgül kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Her zarf-fiilden sonra virgül konur.' },
          { id: 'B', text: 'Tek zarf-fiilden sonra konmaz, birden çok zarf-fiil peş peşe sıralanırsa aralarına konur.' },
          { id: 'C', text: 'Hiçbir zaman virgül konmaz.' },
          { id: 'D', text: 'Sadece cümlenin başında olursa virgül konur.' },
          { id: 'E', text: 'İsim-fiil olursa konur, zarf-fiilde konmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede tek bir zarf-fiil varsa ondan sonra virgül konmaz, ancak birden fazla zarf-fiil eki almış kelime art arda sıralanırsa aralarına virgül konur.'
      },
      {
        id: 'q-nk-41-5',
        difficulty: 'medium',
        questionText: 'Cümle içinde yer alan bağlaçlardan (ve, veya, ki, de, ama vb.) hemen önce ya da sonra virgül kullanılır mı?',
        options: [
          { id: 'A', text: 'Sadece "ama, fakat" bağlaçlarından önce konur.' },
          { id: 'B', text: 'Bağlaçlardan önce de sonra da hiçbir noktalama işareti konmaz.' },
          { id: 'C', text: 'Sadece "ki" bağlacından sonra konur.' },
          { id: 'D', text: 'Bütün bağlaçlardan sonra konur.' },
          { id: 'E', text: 'Hem önce hem sonra konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlaçlardan (ve, veya, ki, da/de, ama, fakat vb.) önce ya da sonra hiçbir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-41-6',
        difficulty: 'medium',
        questionText: 'Cümle içinde ara sözleri veya ara cümleleri ayırmak için bu sözlerin başına ve sonuna virgül dışında hangi noktalama işareti konabilir?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Yay ayraç' },
          { id: 'E', text: 'Köşeli ayraç' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümle içindeki ara sözleri veya ara cümleleri ayırmak için başlarına ve sonlarına virgül (,) ya da kısa çizgi (-) konabilir.'
      },
      {
        id: 'q-nk-41-7',
        difficulty: 'medium',
        questionText: 'Alıntı yapılan metinlerde, aktaranın (yazarın) asıl metne eklediği açıklamalar hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Köşeli ayraç' },
          { id: 'D', text: 'Tek tırnak' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin aktarmalarında, aktaranın kendi eklediği açıklamalar veya notlar köşeli ayraç [ ] içine alınır.'
      },
      {
        id: 'q-nk-41-8',
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
        id: 'q-nk-41-9',
        difficulty: 'medium',
        questionText: 'Tiyatro metinlerinde veya karşılıklı konuşmalarda, konuşan kişinin isminden sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'İki nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'A',
        explanation: 'Tiyatro eserlerinde veya yazıda konuşan kişinin adından sonra iki nokta (:) konur.'
      },
      {
        id: 'q-nk-41-10',
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
        explanation: 'Tırnak içindeki alıntı cümlelerin (tam bir yargı bildiren) noktalama işareti (nokta, ünlem vb.) her zaman tırnak işaretinin içinde kalır.'
      }
    ]
  },
  {
    id: 'test-noktalama-14-zor',
    title: 'Noktalama İşaretleri 14 (Zor)',
    description: 'Noktalama İşaretleri - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-nk-42-1',
        difficulty: 'hard',
        questionText: 'Özel isimlere getirilen yapım ekleri ve bu eklerden sonra gelen çekim eklerinin yazımıyla ilgili kurala göre, hangi yazım doğrudur?',
        options: [
          { id: 'A', text: 'Türkçe\'nin kuralları esnektir.' },
          { id: 'B', text: 'İngilizceden sınava gireceğiz.' },
          { id: 'C', text: 'Ankaralı\'dan aldığım haberler iyi değil.' },
          { id: 'D', text: 'Türklük\'ün önemini anlattı.' },
          { id: 'E', text: 'Avrupalı\'nın yaşam tarzı bize uymaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel ada gelen yapım ekleri kesme ile ayrılmaz (İngiliz-ce), bunlardan sonra gelen çekim ekleri de KESİNLİKLE ayrılmaz (İngilizceden). B seçeneğindeki yazım doğrudur.'
      },
      {
        id: 'q-nk-42-2',
        difficulty: 'hard',
        questionText: 'Birden fazla tekrarlanan "hem... hem, ya... ya, ne... ne" bağlaçlarıyla kurulan cümlelerde virgül kullanımı hakkında hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Bağlaçlardan önce mutlaka virgül konur.' },
          { id: 'B', text: 'İlk bağlaçtan sonra virgül konur.' },
          { id: 'C', text: 'Bağlaçlardan önce veya sonra virgül ya da başka bir işaret konmaz.' },
          { id: 'D', text: 'İkinci bağlaçtan sonra noktalı virgül konur.' },
          { id: 'E', text: 'Bağlaçların arasına kısa çizgi konur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tekrarlı bağlaçlardan (ya...ya, hem...hem, ne...ne vb.) önce ve sonra virgül konmaz.'
      },
      {
        id: 'q-nk-42-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki noktanın (:) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Bu başarının tek bir formülü var: disiplinli çalışmak.' },
          { id: 'B', text: 'Edebiyatımızda en çok okunan türlerden bazıları şunlardır: roman, hikaye, şiir.' },
          { id: 'C', text: 'Sorunun kaynağı: insanların birbirini dinlememesidir.' },
          { id: 'D', text: 'Öğretmen sert bir ses tonuyla konuştu: "Herkes yerine otursun!"' },
          { id: 'E', text: 'Kendimi tanıtayım: Ben yeni şirket müdürünüzüm.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde cümlenin öznesi ile yüklemi arasına iki nokta konmuştur. Bu kullanım yanlıştır. İki nokta sadece açıklama, alıntı ve örneklemeden önce kullanılır.'
      },
      {
        id: 'q-nk-42-4',
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
        explanation: 'Eser adlarının sadece baş harfleri büyük yazıldığında aradaki bağlaçlar küçük yazılır (Suç ve Ceza). Bütün kelimelerin tüm harfleri büyükse bağlaç da büyük yazılır. Bağlaç etrafında noktalama kullanılmaz.'
      },
      {
        id: 'q-nk-42-5',
        difficulty: 'hard',
        questionText: 'Tırnak içine alınan sözlerden (özel isim de olsa) sonra ek geldiğinde nasıl yazılır?',
        options: [
          { id: 'A', text: 'Tırnaktan sonra kesme işareti kullanılarak ek yazılır.' },
          { id: 'B', text: 'Tırnaktan sonra ek kesme işareti kullanılmadan bitişik yazılır.' },
          { id: 'C', text: 'Tırnaktan sonra boşluk bırakılarak ek yazılır.' },
          { id: 'D', text: 'Ek tırnak işaretinin içine yazılır.' },
          { id: 'E', text: 'Tırnak içine alınan kelimeye hiçbir zaman ek getirilemez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içine alınan kelimelere/sözlere ek geldiğinde kesme işareti kullanılmaz, ek tırnaktan hemen sonra bitişik yazılır (Örn: "Yaban"ı, "Aşk-ı Memnu"yu).'
      },
      {
        id: 'q-nk-42-6',
        difficulty: 'hard',
        questionText: 'TDK kurallarına göre, küçük harflerle yapılan ve sonunda nokta bulunan kısaltmalara (örn: yy.) ek getirilirken hangi kural uygulanır?',
        options: [
          { id: 'A', text: 'Ek kesmeyle ayrılarak (yy.\'da) yazılır.' },
          { id: 'B', text: 'Ek kesme kullanılmadan kelimenin okunuşuna göre doğrudan (yy.da) yazılır.' },
          { id: 'C', text: 'Ek kısaltmanın okunuşuna göre (ye ye de) yazılır.' },
          { id: 'D', text: 'Ek noktanın içine alınır.' },
          { id: 'E', text: 'Bu kısaltmalara ek getirilemez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçük harflerle yapılan ve noktalı kısaltmalara gelen ekler, kelimenin kendisine (uzun hâline) göre okunur ve kesme kullanılmadan noktadan sonra bitişik yazılır (yy.da = yüzyılda).'
      },
      {
        id: 'q-nk-42-7',
        difficulty: 'hard',
        questionText: 'Alay ve kinaye belirtmek için yay ayraç içinde ünlem işareti (!) nereye konur?',
        options: [
          { id: 'A', text: 'Cümlenin en sonuna' },
          { id: 'B', text: 'Kinaye yapılmak istenen sözcükten hemen önceye' },
          { id: 'C', text: 'Kinaye yapılmak istenen sözcükten hemen sonraya' },
          { id: 'D', text: 'Cümlenin en başına' },
          { id: 'E', text: 'Cümledeki öznenin yanına' }
        ],
        correctOptionId: 'C',
        explanation: 'Alay, kinaye ve küçümseme anlamı verilmek istenen sözcükten hemen sonra yay ayraç içinde ünlem işareti (!) kullanılır.'
      },
      {
        id: 'q-nk-42-8',
        difficulty: 'hard',
        questionText: 'Alıntı metinlerde aktarılmayan (atlanmış) bölümleri göstermek için üç nokta (...) yerine göre hangi işaretin içinde de kullanılabilir?',
        options: [
          { id: 'A', text: 'Yay ayraç' },
          { id: 'B', text: 'Tırnak işareti' },
          { id: 'C', text: 'Köşeli ayraç' },
          { id: 'D', text: 'Tek tırnak' },
          { id: 'E', text: 'Kısa çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Aktarılmayan (atlanmış) bölümleri göstermek için üç nokta (...) köşeli ayraç [...] içinde de gösterilebilir.'
      },
      {
        id: 'q-nk-42-9',
        difficulty: 'hard',
        questionText: 'İkilemelerin yazılışı ve noktalamasıyla ilgili aşağıdaki cümlelerin hangisinde hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Oraya eften püften bahanelerle gitmedi.' },
          { id: 'B', text: 'Bata çıka ilerlediler.' },
          { id: 'C', text: 'Aşağı yukarı on saat sürdü.' },
          { id: 'D', text: 'Konuyu enine, boyuna tartışmalıyız.' },
          { id: 'E', text: 'Er geç gerçeği öğreneceksin.' }
        ],
        correctOptionId: 'D',
        explanation: 'İkilemelerin arasına virgül de dâhil hiçbir noktalama işareti konmaz. D seçeneğinde "enine boyuna" ikilemesinin arasına virgül konması yanlıştır.'
      },
      {
        id: 'q-nk-42-10',
        difficulty: 'hard',
        questionText: 'Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra virgül konmasıyla ilgili kurala göre, aşağıdakilerin hangisinde noktalama yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Çocuk ağlayarak, bağırarak koşuyordu.' },
          { id: 'B', text: 'İşi bitirip, eve dönmeye karar verdi.' },
          { id: 'C', text: 'Düşünüp taşınarak, ince eleyip sık dokuyarak karar verdi.' },
          { id: 'D', text: 'Gidip, görüp, öyle dönecek.' },
          { id: 'E', text: 'Dinlenerek, sakince ilerledik.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metin içinde tek zarf-fiil eki almış kelimeden sonra virgül konmaz. B seçeneğinde tek zarf-fiil ("bitirip") olduğu için virgül konulması yanlıştır.'
      }
    ]
  }
]
