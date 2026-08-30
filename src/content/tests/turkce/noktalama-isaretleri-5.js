export default [
  {
    id: 'test-noktalama-5-kolay',
    title: 'Noktalama İşaretleri 5 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-nk-13-1',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisinde noktanın (.) kullanımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Dr. Ahmet Bey bugün izinliymiş.' },
          { id: 'B', text: 'Yarışmada 1. oldu.' },
          { id: 'C', text: 'Saat 14.30\'da toplantımız var.' },
          { id: 'D', text: '19. yüzyılda önemli buluşlar yapıldı.' },
          { id: 'E', text: 'İngiltere\'den 15.00. da ayrıldık.' }
        ],
        correctOptionId: 'E',
        explanation: 'Saatlerin yazımında sadece sayıların arasına nokta konur. 15.00\'da şeklinde olmalı, saat bildiren sayıların sağına doğrudan veya bir boşluk bırakılarak ayrı bir nokta konmaz.'
      },
      {
        id: 'q-nk-13-2',
        difficulty: 'easy',
        questionText: 'Adres yazarken il ve ilçe isimlerinin arasına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Tire' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Eğik çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Adreslerde il ve ilçe isimlerinin arasına eğik çizgi (/) konur (Örn: Çankaya / ANKARA).'
      },
      {
        id: 'q-nk-13-3',
        difficulty: 'easy',
        questionText: 'Uzun çizginin (—) diğer adı nedir ve genellikle nerelerde kullanılır?',
        options: [
          { id: 'A', text: 'Bölme çizgisi - Matematikte' },
          { id: 'B', text: 'Konuşma çizgisi - Tiyatro veya diyaloglarda' },
          { id: 'C', text: 'Hece çizgisi - Satır sonlarında' },
          { id: 'D', text: 'Ara çizgi - Ara sözlerin başında' },
          { id: 'E', text: 'Bağlantı çizgisi - Kelimeleri birleştirirken' }
        ],
        correctOptionId: 'B',
        explanation: 'Uzun çizginin diğer adı konuşma çizgisidir ve yazıda satır başına alınan konuşmaları göstermek için kullanılır.'
      },
      {
        id: 'q-nk-13-4',
        difficulty: 'easy',
        questionText: 'Yazıda, satır sonuna sığmayan kelimeler bölünürken hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Kesme işareti' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Uzun çizgi' },
          { id: 'E', text: 'Alt çizgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Satıra sığmayan kelimeler hece sonlarından bölünür ve bölünme yerinde kısa çizgi (-) kullanılır.'
      },
      {
        id: 'q-nk-13-5',
        difficulty: 'easy',
        questionText: 'Şaşkınlık, korku, heyecan veya sevinç bildiren sözcük ya da cümlelerin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Üç nokta' },
          { id: 'C', text: 'Ünlem işareti' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'C',
        explanation: 'Duygu bildiren (sevinç, korku, heyecan, şaşkınlık vb.) ifadelerin sonuna ünlem işareti (!) konur.'
      },
      {
        id: 'q-nk-13-6',
        difficulty: 'easy',
        questionText: 'Kitap ve makale gibi metinlerde, doğrudan alıntılar tırnak içine alınmazsa sonuna ne konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'İki nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'E',
        explanation: 'Tırnak içine alınmamış doğrudan alıntıların sonuna virgül konur (Örn: Eve gidiyorum, dedi).'
      },
      {
        id: 'q-nk-13-7',
        difficulty: 'easy',
        questionText: 'Sayılara getirilen çekim eklerini ayırmak için aşağıdaki işaretlerden hangisi kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Yay ayraç' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Kesme işareti' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'D',
        explanation: 'Sayılara getirilen ekleri ayırmak için kesme işareti (\') kullanılır (Örn: 2023\'te, 15\'inci).'
      },
      {
        id: 'q-nk-13-8',
        difficulty: 'easy',
        questionText: 'Saat ve dakikalar metin içinde yazıyla yazıldığında aralarına hangi işaret konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Hiçbir işaret konmaz' }
        ],
        correctOptionId: 'E',
        explanation: 'Saatler ve dakikalar yazıyla yazıldığında aralarına hiçbir noktalama işareti konmaz (Örn: saat dokuzu beş geçe).'
      },
      {
        id: 'q-nk-13-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde üç nokta (...) doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu sabah çok erken uyandım...' },
          { id: 'B', text: 'Pazardan elma, armut, muz aldı...' },
          { id: 'C', text: 'Karşımızda uçsuz bucaksız bir deniz...' },
          { id: 'D', text: 'Bunu sana kimin anlattığını biliyorum...' },
          { id: 'E', text: 'Herkes kendi işiyle meşguldü...' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde cümlenin yüklemi yoktur, yani eksiltili bir cümledir. Tamamlanmamış cümlelerin sonuna üç nokta konur. Diğerleri tamamlanmış cümlelerdir ve nokta konmalıdır.'
      },
      {
        id: 'q-nk-13-10',
        difficulty: 'easy',
        questionText: 'Özel isimlere getirilen iyelik, durum ve bildirme ekleri hangi işaretle ayrılır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Yay ayraç' },
          { id: 'C', text: 'Kesme işareti' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Noktalı virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen çekim (iyelik, durum, bildirme) ekleri kesme işaretiyle (\') ayrılır.'
      }
    ]
  },
  {
    id: 'test-noktalama-5-orta',
    title: 'Noktalama İşaretleri 5 (Orta)',
    description: 'Noktalama İşaretleri - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-nk-14-1',
        difficulty: 'medium',
        questionText: 'Şiirde dizeler yan yana yazıldığında aralarına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Şiirde dizeler yan yana (aynı satırda) yazıldığında, dizeleri birbirinden ayırmak için eğik çizgi (/) kullanılır.'
      },
      {
        id: 'q-nk-14-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalı virgül (;) gereksiz kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sevinçten, heyecandan içim içime sığmıyor; bağırmak, ağlamak istiyorum.' },
          { id: 'B', text: 'Sayısal derslerden matematik, fizik; sözel derslerden tarih, coğrafya çalıştı.' },
          { id: 'C', text: 'Ali, Veli ve Ayşe sinemaya; Ahmet, Mehmet ve Fatma tiyatroya gitti.' },
          { id: 'D', text: 'Yarın hava güzel olacakmış; biz de pikniğe gideriz.' },
          { id: 'E', text: 'Oğlan çocuklarına Doğan, Tuğrul; kız çocuklarına İnci, Çiçek adları verilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde birbirine bağlanan sıralı cümlelerin kendi içinde hiçbir virgül yoktur. Ögeleri arasında virgül bulunmayan basit sıralı cümleleri ayırmak için sadece virgül (,) kullanılır. Noktalı virgül gereksizdir.'
      },
      {
        id: 'q-nk-14-3',
        difficulty: 'medium',
        questionText: 'Bilinmeyen, şüpheli veya kesin olmayan tarih, yer vb. durumlar için kullanılan soru işareti (?) hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti (" ")' },
          { id: 'B', text: 'Yay ayraç ( )' },
          { id: 'C', text: 'Köşeli ayraç [ ]' },
          { id: 'D', text: 'Tek tırnak (\' \')' },
          { id: 'E', text: 'Kısa çizgi (- -)' }
        ],
        correctOptionId: 'B',
        explanation: 'Şüphe duyulan, kesin olmayan bilgiler için soru işareti yay ayraç içinde (?) kullanılır (Örn: Yunus Emre (1240?-1320)).'
      },
      {
        id: 'q-nk-14-4',
        difficulty: 'medium',
        questionText: 'Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarını ayırmak için kullanılan noktalama işareti nedir?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'A',
        explanation: 'Eş görevli kelime ve kelime grupları (sıfatlar, isimler, zarflar vb.) arasına virgül (,) konur.'
      },
      {
        id: 'q-nk-14-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kısaltmaların hangisinde nokta (.) doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'T.B.M.M.' },
          { id: 'B', text: 'T.D.K.' },
          { id: 'C', text: 'A.B.D.' },
          { id: 'D', text: 'T.C.' },
          { id: 'E', text: 'A.B.' }
        ],
        correctOptionId: 'D',
        explanation: 'TDK kurallarına göre, kurum ve kuruluş isimlerinin kısaltmalarında harflerin arasına veya sonuna nokta konmaz (TBMM, TDK). Bu kuralın sadece iki istisnası vardır: T.C. (Türkiye Cumhuriyeti) ve T. (Türkçe). Bu yüzden sadece D seçeneği doğrudur.'
      },
      {
        id: 'q-nk-14-6',
        difficulty: 'medium',
        questionText: 'Ara sözleri veya ara cümleleri ayırmak için virgül (,) yerine kullanılabilecek diğer noktalama işareti hangisidir?',
        options: [
          { id: 'A', text: 'Uzun çizgi (—)' },
          { id: 'B', text: 'Kısa çizgi (-)' },
          { id: 'C', text: 'Yay ayraç ( )' },
          { id: 'D', text: 'İki nokta (:)' },
          { id: 'E', text: 'Tırnak işareti (" ")' }
        ],
        correctOptionId: 'B',
        explanation: 'Ara sözleri veya ara cümleleri ayırmak için bu ifadelerin başına ve sonuna virgül konabileceği gibi kısa çizgi (-) de konabilir.'
      },
      {
        id: 'q-nk-14-7',
        difficulty: 'medium',
        questionText: 'Cümle içinde yer alan zarf-fiil eklerinden (-ıp, -arak, -ınca vb.) sonra virgül (,) kullanımıyla ilgili doğru kural aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Her zarf-fiilden sonra mutlaka virgül konur.' },
          { id: 'B', text: 'Tek bir zarf-fiil varsa virgül konmaz, ancak sıralanmış zarf-fiiller varsa aralarına konur.' },
          { id: 'C', text: 'Zarf-fiilden sonra virgül asla kullanılmaz.' },
          { id: 'D', text: 'Sadece cümlenin en başındaysa virgül konur.' },
          { id: 'E', text: 'Sadece isim-fiillerden sonra virgül konur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metin içinde zarf-fiil eki almış tek bir kelimeden sonra virgül konmaz. Art arda gelen zarf-fiil eki almış kelimelerden sonra ise virgül konur.'
      },
      {
        id: 'q-nk-14-8',
        difficulty: 'medium',
        questionText: 'Tırnak içinde verilen cümlenin içinde yeniden tırnağa alınması gereken bir söz varsa, bu söz için hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Köşeli ayraç [ ]' },
          { id: 'B', text: 'Yay ayraç ( )' },
          { id: 'C', text: 'Tek tırnak işareti (\' \')' },
          { id: 'D', text: 'Kısa çizgi (-)' },
          { id: 'E', text: 'Çift tırnak (" ")' }
        ],
        correctOptionId: 'C',
        explanation: 'Tırnak içinde verilen cümlenin içinde yeniden tırnağa alınması gereken bir söz varsa tek tırnak işareti (\' \') kullanılır.'
      },
      {
        id: 'q-nk-14-9',
        difficulty: 'medium',
        questionText: 'Soru bildiren ancak soru eki veya kelimesi içermeyen (vurguyla soru anlamı kazanan) sözlerin veya cümlelerin sonuna ne konur?',
        options: [
          { id: 'A', text: 'Üç nokta' },
          { id: 'B', text: 'Ünlem işareti' },
          { id: 'C', text: 'Soru işareti' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Soru eki veya kelimesi olmamasına rağmen vurguyla soru anlamı taşıyan ifadelerin sonuna soru işareti (?) konur (Örn: Memur başını kaldırdı: — Adınız?).'
      },
      {
        id: 'q-nk-14-10',
        difficulty: 'medium',
        questionText: 'Alıntı metinlerde, aktaranın asıl metne eklediği kendi kelimeleri veya açıklamaları hangi işaretin içine alınır?',
        options: [
          { id: 'A', text: 'Köşeli ayraç' },
          { id: 'B', text: 'Yay ayraç' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Tek tırnak' },
          { id: 'E', text: 'Tire' }
        ],
        correctOptionId: 'A',
        explanation: 'Alıntılarda aktaranın kendi eklediği, metnin aslında olmayan notlar köşeli ayraç [ ] içine alınır.'
      }
    ]
  },
  {
    id: 'test-noktalama-5-zor',
    title: 'Noktalama İşaretleri 5 (Zor)',
    description: 'Noktalama İşaretleri - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-nk-15-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki durumların hangisinde virgül (,) yanlış bir kurala dayanılarak konulmuştur?',
        options: [
          { id: 'A', text: 'Kendisinden sonraki cümleye bağlı olarak ret, kabul veya teşvik bildiren hayır, yok, evet, peki gibi kelimelerden sonra.' },
          { id: 'B', text: 'Şart eki (-se, -sa) almış kelimelerden sonra.' },
          { id: 'C', text: 'Özne olarak kullanıldıklarında bu, şu, o zamirlerinden sonra.' },
          { id: 'D', text: 'Hitap için kullanılan kelimelerden sonra.' },
          { id: 'E', text: 'Bir kelimenin kendisinden sonra gelen kelimeyle yapı ve anlam bakımından bağlantısı olmadığını göstermek için.' }
        ],
        correctOptionId: 'B',
        explanation: 'TDK kurallarına göre metin içinde şart eki (-se, -sa) almış kelimelerden sonra hiçbir şekilde virgül konmaz.'
      },
      {
        id: 'q-nk-15-2',
        difficulty: 'hard',
        questionText: 'Özel isimlerin yazımı ve kesme işareti ile ilgili olarak aşağıdaki kurallardan hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Kişi adlarından sonra gelen saygı sözlerine getirilen ekler kesme ile ayrılır.' },
          { id: 'B', text: 'Kısaltmalara getirilen ekler kesme ile ayrılır.' },
          { id: 'C', text: 'Kurum ve kuruluş adlarına getirilen ekler kesme ile ayrılır.' },
          { id: 'D', text: 'Sayılara getirilen ekler kesme ile ayrılır.' },
          { id: 'E', text: 'Özel adlara getirilen iyelik ekleri kesme ile ayrılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz (Avrupa Birliği hariç). C seçeneğindeki kural yanlıştır.'
      },
      {
        id: 'q-nk-15-3',
        difficulty: 'hard',
        questionText: 'Cümle içinde "ve, veya, yahut, ya... ya" bağlaçlarından önce ve sonra virgül konmasıyla ilgili kural aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bağlaçlardan önce virgül konur.' },
          { id: 'B', text: 'Bağlaçlardan sonra virgül konur.' },
          { id: 'C', text: 'Hem önce hem sonra virgül konur.' },
          { id: 'D', text: 'Bağlaçlardan önce veya sonra noktalama işareti konmaz.' },
          { id: 'E', text: 'Sadece "ya... ya" bağlacında konur.' }
        ],
        correctOptionId: 'D',
        explanation: 'Türkçe kurallarına göre bu bağlaçlardan (ve, veya, yahut, ya...ya, hem...hem vb.) önce de sonra da virgül ya da başka bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-15-4',
        difficulty: 'hard',
        questionText: 'Hangi durumda alıntının sonundaki noktalama işareti tırnak dışına yazılır?',
        options: [
          { id: 'A', text: 'Alıntı ünlem cümlesi ise' },
          { id: 'B', text: 'Alıntı tam bir cümle ise' },
          { id: 'C', text: 'Alıntı cümle niteliği taşımayan, sadece kelime öbeği ise (ve cümlenin parçası durumundaysa)' },
          { id: 'D', text: 'Alıntı soru cümlesi ise' },
          { id: 'E', text: 'Alıntının sonuna hiçbir zaman tırnak dışına noktalama yazılmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer tırnak içindeki kısım tam bir cümle (yargı) bildiriyorsa noktalama işareti tırnak içinde kalır. Ancak tırnak içindeki kısım cümlenin bir ögesi durumunda (sadece kelime/kelime grubu) ise cümlenin kendi noktalama işareti tırnaktan sonra dışarıya konur.'
      },
      {
        id: 'q-nk-15-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki noktanın (:) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Sizden tek bir isteğim var: Dürüst olmanız.' },
          { id: 'B', text: 'Milli Edebiyat akımının en önemli isimleri şunlardır: Ömer Seyfettin, Ziya Gökalp, Ali Canip Yöntem...' },
          { id: 'C', text: 'Kendimi size kısaca tanıtayım: Edebiyat öğretmeniyim.' },
          { id: 'D', text: 'Bütün bu sıkıntıların sebebi: onun dikkatsizliğidir.' },
          { id: 'E', text: 'Öğretmen ayağa kalktı: "Çocuklar, beni dinleyin." dedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde özne ile yüklem (isim cümlesinde) arasına iki nokta girmiştir. İki nokta açıklama yapılacak, örnek verilecek yerlerde veya alıntılardan önce kullanılır. Burada kullanımı tamamen yanlıştır.'
      },
      {
        id: 'q-nk-15-6',
        difficulty: 'hard',
        questionText: 'İkilemelerin yazılışı ve noktalaması ile ilgili hangisi doğrudur?',
        options: [
          { id: 'A', text: 'İkilemelerin arasına virgül konur.' },
          { id: 'B', text: 'İkilemelerin arasına kısa çizgi konur.' },
          { id: 'C', text: 'İkilemeler daima bitişik yazılır.' },
          { id: 'D', text: 'İkilemelerin arasına hiçbir noktalama işareti konmaz.' },
          { id: 'E', text: 'Anlam pekiştirilecekse noktalı virgül konur.' }
        ],
        correctOptionId: 'D',
        explanation: 'İkilemeler (yavaş yavaş, bata çıka, eften püften vb.) ayrı yazılır ve aralarına virgül dâhil hiçbir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-15-7',
        difficulty: 'hard',
        questionText: '"Ahmet (I) başarılı (II) çalışkan (III) ve dürüst bir insandır (IV)" cümlesinde numaralı yerlerden hangisine/hangilerine virgül (,) getirilmelidir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'I, II ve III' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'I numaralı yere özneden sonra olduğu için virgül (,); II numaralı yere eş görevli sıfatları (başarılı, çalışkan) ayırmak için virgül (,) konur. III numaralı yerde "ve" bağlacı olduğu için virgül konmaz. IV numarada cümlenin sonu olduğu için nokta (.) konur. Cevap I ve II.'
      },
      {
        id: 'q-nk-15-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerden hangisine gelen yapım ekinden sonra çekim eki gelirse kesme işareti kullanılır?',
        options: [
          { id: 'A', text: 'Türk' },
          { id: 'B', text: 'Alman' },
          { id: 'C', text: 'İngiliz' },
          { id: 'D', text: 'Hiçbir özel ada getirilen yapım ekinden sonra kesme kullanılmaz' },
          { id: 'E', text: 'İstanbul' }
        ],
        correctOptionId: 'D',
        explanation: 'Özel adlara getirilen yapım ekleri (Türk-çe, İzmir-li vb.) kesme ile ayrılmaz ve bu eklerden sonra gelen çekim ekleri de (Türkçenin, İzmirliden) kesmeyle ayrılmaz. Bu kural tüm özel isimler için geçerlidir.'
      },
      {
        id: 'q-nk-15-9',
        difficulty: 'hard',
        questionText: '"Bunca yıl bekledim ( ) gelmedi ( ) bundan sonra gelse de umrumda değil ( )" cümlesinde parantezli yerlere sırasıyla hangi noktalama işaretleri gelmelidir?',
        options: [
          { id: 'A', text: '(,) (,) (.)' },
          { id: 'B', text: '(,) (;) (.)' },
          { id: 'C', text: '(;) (,) (.)' },
          { id: 'D', text: '(,) (;) (!)' },
          { id: 'E', text: '(;) (;) (.)' }
        ],
        correctOptionId: 'B',
        explanation: 'Birinci ayraç: basit sıralı cümleyi bağlayan virgül (,). İkinci ayraç: kendi içinde virgül bulunan (ya da birbiri ardına gelen) bağımsız sıralı cümleyi (gelmedi\'den sonraki kısmı) ayırmak için noktalı virgül (;). Üçüncü ayraç: cümle bittiği için nokta (.).'
      },
      {
        id: 'q-nk-15-10',
        difficulty: 'hard',
        questionText: 'Karşılıklı konuşma veya alıntıları satır başında belirtmekte kullanılan uzun çizgi (—) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Tırnak içine alınan konuşmalarda da uzun çizgi kullanılmak zorundadır.' },
          { id: 'B', text: 'Uzun çizgi aynı zamanda eksi işareti yerine kullanılabilir.' },
          { id: 'C', text: 'Oyunlarda uzun çizgi, konuşanın adından sonra da konabilir.' },
          { id: 'D', text: 'Ara sözlerin başında ve sonunda kullanılabilir.' },
          { id: 'E', text: 'Alay ve kinaye bildiren sözlerden önce kullanılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tiyatro eserlerinde (oyunlarda) uzun çizgi, konuşanın adından sonra da konulabilir. Tırnak içine alınan konuşmalarda uzun çizgi kullanılmaz. Ara sözler için kısa çizgi kullanılır.'
      }
    ]
  }
]
