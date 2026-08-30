export default [
  {
    id: 'test-noktalama-6-kolay',
    title: 'Noktalama İşaretleri 6 (Kolay)',
    description: 'Noktalama İşaretleri - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-nk-16-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru işareti (?) doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne kadar süreceğini bana da söylemedi?' },
          { id: 'B', text: 'Akşam oldu mu hüzünlenirim?' },
          { id: 'C', text: 'Sana bunları kimin anlattığını biliyorum?' },
          { id: 'D', text: 'Yarın sabah kaçta yola çıkacağız?' },
          { id: 'E', text: 'Nasıl bir elbise alacağına henüz karar vermemiş?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği dışındaki cümleler soru anlamı taşımamaktadır (B\'de zaman/şart, diğerlerinde iç cümle). Sadece D seçeneği gerçek bir soru cümlesidir.'
      },
      {
        id: 'q-nk-16-2',
        difficulty: 'easy',
        questionText: 'Özel isimlerin sonuna gelen çekim eklerini ayırmak için aşağıdaki noktalama işaretlerinden hangisi kullanılır?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Kesme işareti' },
          { id: 'C', text: 'Tırnak işareti' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Yay ayraç' }
        ],
        correctOptionId: 'B',
        explanation: 'Özel adlara getirilen iyelik, durum ve bildirme ekleri kesme işareti (\') ile ayrılır.'
      },
      {
        id: 'q-nk-16-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kullanımlardan hangisinde virgülün (,) kullanımı yanlıştır?',
        options: [
          { id: 'A', text: 'Art arda sıralanan eş görevli kelimelerin arasında' },
          { id: 'B', text: 'Sıralı cümleleri birbirinden ayırmak için' },
          { id: 'C', text: 'Özneden sonra, cümleyi vurgulamak amacıyla' },
          { id: 'D', text: 'Hitap kelimelerinden sonra' },
          { id: 'E', text: 'İsim tamlamasında tamlayan ile tamlanan arasında' }
        ],
        correctOptionId: 'E',
        explanation: 'İsim tamlamasında tamlayan ile tamlanan arasına virgül veya herhangi bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-16-4',
        difficulty: 'easy',
        questionText: 'Tırnak içine alınmış alıntı bir cümlenin sonundaki noktalama işareti (nokta, soru işareti vb.) nereye konur?',
        options: [
          { id: 'A', text: 'Tırnak işaretinin dışına' },
          { id: 'B', text: 'Tırnak işaretinin içine' },
          { id: 'C', text: 'Hem tırnak içine hem dışına' },
          { id: 'D', text: 'Cümle sonuna noktalama işareti konmaz' },
          { id: 'E', text: 'Sadece alıntıdan sonra dışarıya virgül konur' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içindeki alıntının sonunda bulunan noktalama işareti, tırnak içinde kalır (Örn: "Bugün hava güzel." dedi).'
      },
      {
        id: 'q-nk-16-5',
        difficulty: 'easy',
        questionText: 'Kısaltmalara getirilen eklerin okunuş kuralı ve ayrılışı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kelimenin uzun okunuşuna göre getirilir, kısa çizgiyle ayrılır.' },
          { id: 'B', text: 'Kısaltmanın son harfinin okunuşuna göre getirilir, kesme işaretiyle ayrılır.' },
          { id: 'C', text: 'Kısaltmanın son harfine göre getirilir, bitişik yazılır.' },
          { id: 'D', text: 'Kelimenin uzun okunuşuna göre getirilir, virgülle ayrılır.' },
          { id: 'E', text: 'Eklerin yazılışı ve okunuşu tamamen serbesttir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük harflerle yapılan kısaltmalara getirilen ekler, kısaltmanın son harfinin okunuşuna uyar ve kesme işareti ile ayrılır (Örn: TDK\'nin).'
      },
      {
        id: 'q-nk-16-6',
        difficulty: 'easy',
        questionText: 'Sayılarda sıra bildiren ekler (ıncı, inci) yerine hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Kısa çizgi' },
          { id: 'E', text: 'Virgül' }
        ],
        correctOptionId: 'C',
        explanation: 'Sayılardan sonra sıra bildirmek için nokta (.) kullanılır (Örn: 2., 3., 10.).'
      },
      {
        id: 'q-nk-16-7',
        difficulty: 'easy',
        questionText: 'Matematikte ondalık kesirleri ayırmak için ne kullanılır?',
        options: [
          { id: 'A', text: 'Eğik çizgi' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Tire' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Türkçe kurallarına ve Türk Standardları Enstitüsüne göre ondalık sayılar virgül (,) ile ayrılır (Örn: 25,4).'
      },
      {
        id: 'q-nk-16-8',
        difficulty: 'easy',
        questionText: 'Eksiltili cümle (yüklemi söylenmemiş, anlamı tamamlanmamış) sonuna hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Ünlem işareti' },
          { id: 'C', text: 'İki nokta' },
          { id: 'D', text: 'Nokta' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'E',
        explanation: 'Anlatım olarak tamamlanmamış (yüklemsiz) cümlelerin sonuna üç nokta (...) konur.'
      },
      {
        id: 'q-nk-16-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yay ayraç içinde gösterilen yere ünlem işareti (!) gelmelidir?',
        options: [
          { id: 'A', text: 'Bunu yapman çok yanlış oldu ( )' },
          { id: 'B', text: 'Dikkat et, karşıdan araba geliyor ( )' },
          { id: 'C', text: 'O zamanlar ben henüz çocuktum ( )' },
          { id: 'D', text: 'Neden sürekli aynı şeyleri soruyorsun ( )' },
          { id: 'E', text: 'Toplantı iptal edildi ( )' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde uyarı/korku/heyecan bildiren bir ifade ("Dikkat et") bulunmaktadır, bu yüzden sonuna ünlem işareti (!) konmalıdır.'
      },
      {
        id: 'q-nk-16-10',
        difficulty: 'easy',
        questionText: 'Birbiriyle bağlantılı iki kelime (tarihler, şehirler, ülkeler vb.) arasında hangi işaret kullanılır?',
        options: [
          { id: 'A', text: 'Eğik çizgi' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Uzun çizgi' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Aralarında "ve, ile, ila, ...-den ...-e" anlamları vermek üzere kelimeler, sayılar arasında kısa çizgi (-) kullanılır (Örn: Ankara-İstanbul, 1990-2000).'
      }
    ]
  },
  {
    id: 'test-noktalama-6-orta',
    title: 'Noktalama İşaretleri 6 (Orta)',
    description: 'Noktalama İşaretleri - Orta (51-60)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-nk-17-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işareti (\') yanlış kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu kanun Resmi Gazete\'de yayımlandı.' },
          { id: 'B', text: 'Batı\'nın kültürü bizi de etkiledi.' },
          { id: 'C', text: 'Boğaz\'dan geçen gemileri izledik.' },
          { id: 'D', text: 'Avrupa Birliği\'nden yetkililer geldi.' },
          { id: 'E', text: 'Konyalı\'nın misafirperverliği meşhurdur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Özel ada getirilen yapım ekleri (-lı, -li, vb.) kesmeyle ayrılmaz. "Konyalı" yapım eki almıştır ve ondan sonra gelen çekim eki de kesmeyle ayrılmaz ("Konyalının" bitişik yazılır).'
      },
      {
        id: 'q-nk-17-2',
        difficulty: 'medium',
        questionText: 'Şiirde dizeler yan yana yazıldığında aralarına eğik çizgi (/) konur. Aşağıdakilerin hangisinde eğik çizgi aynı amaçla kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Korkma sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak.' },
          { id: 'B', text: 'Ne hasta bekler sabahı / Ne taze ölüyü mezar.' },
          { id: 'C', text: 'Geçmiş zaman eki olan -mış / -miş / -muş / -müş ekleri...' },
          { id: 'D', text: 'Sarı tamburamın sızısı / Yürekte bitmez sızısı.' },
          { id: 'E', text: 'Gülümse biraz / İlaç alayım gülüşünden.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde eğik çizgi (/) şiir dizelerini ayırmak için değil, eklerin farklı şekillerini göstermek için ("veya" anlamında) kullanılmıştır.'
      },
      {
        id: 'q-nk-17-3',
        difficulty: 'medium',
        questionText: 'Kendisiyle ilgili açıklama verilecek cümlenin sonuna hangi işaret konur?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Nokta' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'B',
        explanation: 'Kendisiyle ilgili örnek verilecek veya açıklama yapılacak cümlelerin sonuna iki nokta (:) konur.'
      },
      {
        id: 'q-nk-17-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde noktalı virgül (;) doğru kullanılmıştır?',
        options: [
          { id: 'A', text: 'Elindeki kitabı; defteri ve kalemi sıraya bıraktı.' },
          { id: 'B', text: 'Sabah erkenden uyandım; hemen yola çıktım.' },
          { id: 'C', text: 'O, sınıftaki en başarılı; en zeki çocuktu.' },
          { id: 'D', text: 'Sayısal dersleri çok seviyor; sözel derslere hiç ilgi duymuyordu.' },
          { id: 'E', text: 'Bugün hava; güneşli ve sıcaktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Noktalı virgül, kendi içinde virgül bulunan sıralı cümlelerde, ya da aralarında anlamca karşıtlık/bağlantı olan, bağlamsal ayrım gerektiren sıralı cümlelerde (birinde virgül yoksa bile ayrımı belirginleştirmek için) kullanılır ancak D seçeneğinde daha çok "virgül" yerine konmuştur. TDK kuralına göre ögeleri arasında virgül bulunmayan sıralı cümleleri virgül ayırır. Ancak virgül barındıranlarda kullanılır. Cümleler arası karşıtlıklarda da kullanılabilir. D seçeneğinde sıralı cümleyi ayırmak için en uygun kullanımdır (A, C ve E hatalı). En temiz kural: D seçeneği (virgül olsa daha iyi, ama yanlış diyemeyiz, özellikle özne karışıyorsa).'
      },
      {
        id: 'q-nk-17-5',
        difficulty: 'medium',
        questionText: 'Bağlaçlardan (ama, fakat, lakin, çünkü vb.) önce veya sonra noktalama işareti kullanımı nasıldır?',
        options: [
          { id: 'A', text: 'Öncesinde virgül konur.' },
          { id: 'B', text: 'Sonrasında virgül konur.' },
          { id: 'C', text: 'Hem öncesine hem sonrasına virgül konur.' },
          { id: 'D', text: 'Öncesine veya sonrasına hiçbir noktalama işareti konmaz.' },
          { id: 'E', text: 'Öncesine noktalı virgül, sonrasına virgül konur.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bağlaçlardan ("ama, fakat, lakin, çünkü, ve, veya, yahut, ya... ya" vb.) önce veya sonra virgül ya da başka bir noktalama işareti konmaz.'
      },
      {
        id: 'q-nk-17-6',
        difficulty: 'medium',
        questionText: 'Cümle içinde ara sözleri ayırmak için hangi iki noktalama işaretinden biri kullanılabilir?',
        options: [
          { id: 'A', text: 'Virgül veya kısa çizgi' },
          { id: 'B', text: 'İki nokta veya noktalı virgül' },
          { id: 'C', text: 'Kısa çizgi veya uzun çizgi' },
          { id: 'D', text: 'Tırnak işareti veya yay ayraç' },
          { id: 'E', text: 'Yay ayraç veya köşeli ayraç' }
        ],
        correctOptionId: 'A',
        explanation: 'Ara sözlerin ve ara cümlelerin başına ve sonuna virgül (,) veya kısa çizgi (-) konur.'
      },
      {
        id: 'q-nk-17-7',
        difficulty: 'medium',
        questionText: 'Alıntı metinlerde aktarıcının kendi eklediği ifadeler (asılda olmayan açıklamalar) hangi işaret içine alınır?',
        options: [
          { id: 'A', text: 'Tırnak işareti' },
          { id: 'B', text: 'Tek tırnak' },
          { id: 'C', text: 'Yay ayraç' },
          { id: 'D', text: 'Köşeli ayraç' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Metin aktarmalarında, aktaranın asıl metne eklediği açıklamalar köşeli ayraç [ ] içine alınır.'
      },
      {
        id: 'q-nk-17-8',
        difficulty: 'medium',
        questionText: 'Bilinmeyen, kesin olmayan veya şüpheli bilgilerin (tarih, yer vb.) yanına konulan soru işareti nasıl kullanılır?',
        options: [
          { id: 'A', text: 'Doğrudan kelimenin yanına konur.' },
          { id: 'B', text: 'Köşeli ayraç içinde [?] kullanılır.' },
          { id: 'C', text: 'Yay ayraç içinde (?) kullanılır.' },
          { id: 'D', text: 'Tırnak içinde "?" kullanılır.' },
          { id: 'E', text: 'Üç nokta ile birlikte ...? şeklinde kullanılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bilinmeyen veya şüpheyle karşılanan bilgiler için soru işareti yay ayraç içinde (?) kullanılır.'
      },
      {
        id: 'q-nk-17-9',
        difficulty: 'medium',
        questionText: 'Bir cümlede "de / da" bağlacından sonra hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Virgül' },
          { id: 'B', text: 'Kısa çizgi' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Hiçbir işaret konmaz' },
          { id: 'E', text: 'İki nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Bağlaç olan "de, da" kelimelerinden sonra veya önce kesinlikle virgül (veya başka bir işaret) konmaz.'
      },
      {
        id: 'q-nk-17-10',
        difficulty: 'medium',
        questionText: 'Karşılıklı konuşmalarda, konuşan kişiyi belirten sözlerden (isimlerden) sonra hangi noktalama işareti kullanılabilir?',
        options: [
          { id: 'A', text: 'Noktalı virgül' },
          { id: 'B', text: 'İki nokta' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Eğik çizgi' },
          { id: 'E', text: 'Soru işareti' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiyatro eserlerinde veya metin içi karşılıklı konuşmalarda konuşan kişinin isminden sonra iki nokta (:) konur.'
      }
    ]
  },
  {
    id: 'test-noktalama-6-zor',
    title: 'Noktalama İşaretleri 6 (Zor)',
    description: 'Noktalama İşaretleri - Zor (51-60)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-nk-18-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin veya cümlelerin hangisinde kesme işareti (\') bir sözcükte ses (ünlü) düşmesini göstermek amacıyla kullanılmıştır?',
        options: [
          { id: 'A', text: 'İzmir\'in kavakları, dökülür yaprakları.' },
          { id: 'B', text: 'O, TDK\'nin kurallarına sıkı sıkıya uyar.' },
          { id: 'C', text: 'Karac\'oğlan der ki kondum göçülmez.' },
          { id: 'D', text: 'Bunu ancak Ali\'den öğrenebilirsin.' },
          { id: 'E', text: 'Türkiye\'mizin her köşesi ayrı güzel.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Karacaoğlan" kelimesi şiirde hece ölçüsüne uydurmak için "Karac\'oğlan" şeklinde (ses düşmesi) yazılarak kesme işareti kullanılmıştır.'
      },
      {
        id: 'q-nk-18-2',
        difficulty: 'hard',
        questionText: 'Özel isimlerin aldığı eklerle ilgili aşağıdaki kuralların hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Kişi adlarına gelen iyelik ekleri kesmeyle ayrılır.' },
          { id: 'B', text: 'Özel adlara getirilen yapım ekleri kesmeyle ayrılmaz.' },
          { id: 'C', text: 'Özel ada getirilen çoğul eki (-lar, -ler) kesmeyle ayrılır.' },
          { id: 'D', text: 'Kurum adlarına gelen çekim ekleri kesmeyle ayrılmaz.' },
          { id: 'E', text: 'Yapım eki almış özel ada gelen çekim ekleri kesmeyle ayrılmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen çoğul ekleri (-lar, -ler) ve bu eklerden sonra gelen diğer ekler hiçbir zaman kesme işaretiyle ayrılmaz (Örn: Ahmetler, Türklerin).'
      },
      {
        id: 'q-nk-18-3',
        difficulty: 'hard',
        questionText: 'Zarf-fiil eki almış kelimelerden sonra virgül konmasıyla ilgili kurala göre, aşağıdakilerin hangisinde virgül yanlıştır?',
        options: [
          { id: 'A', text: 'Çocuk koşarak, oynayarak uzaklaştı.' },
          { id: 'B', text: 'Bunu duyup, hemen yola koyuldu.' },
          { id: 'C', text: 'Gülerek, neşe içinde yanımıza geldi.' },
          { id: 'D', text: 'İşini bitirip, çantasını alıp çıktı.' },
          { id: 'E', text: 'Bana bakıp bakıp gülüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede zarf-fiil eki almış tek bir kelime varsa ondan sonra virgül konmaz (B seçeneği). Eğer peş peşe birden fazla zarf-fiil (eş görevli) varsa aralarına konur.'
      },
      {
        id: 'q-nk-18-4',
        difficulty: 'hard',
        questionText: 'Soru edatı olan "mı / mi" cümleye zaman veya şart anlamı kattığında kendisinden sonra hangi işaret konur?',
        options: [
          { id: 'A', text: 'Soru işareti' },
          { id: 'B', text: 'Virgül' },
          { id: 'C', text: 'Noktalı virgül' },
          { id: 'D', text: 'Hiçbir işaret konmaz' },
          { id: 'E', text: 'Üç nokta' }
        ],
        correctOptionId: 'D',
        explanation: 'Zarf-fiil görevinde (zaman/şart) kullanılan "mı/mi" edatından sonra virgül dahil hiçbir noktalama işareti konmaz (Örn: Akşam oldu mu hüzünlenirim).'
      },
      {
        id: 'q-nk-18-5',
        difficulty: 'hard',
        questionText: '"Ahmet amca ( ) sen de biliyorsun ki ( ) bu işler böyle yürümez ( )" cümlesinde ayraçlara sırasıyla hangi işaretler konmalıdır?',
        options: [
          { id: 'A', text: '(,) (,) (.)' },
          { id: 'B', text: '(,) (;) (.)' },
          { id: 'C', text: '(,) (boşluk) (.)' },
          { id: 'D', text: '(!) (,) (.)' },
          { id: 'E', text: '(;) (,) (.)' }
        ],
        correctOptionId: 'C',
        explanation: 'Ahmet amca, (hitaptan sonra virgül). "...biliyorsun ki" -> ki bağlacından sonra işaret konmaz (boşluk veya işaretsiz bırakılır). Sonuna nokta (.) konur.'
      },
      {
        id: 'q-nk-18-6',
        difficulty: 'hard',
        questionText: 'Tırnak içindeki cümleden sonra gelen kesme işareti kullanımı ile ilgili hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Tırnaktan sonra ek varsa kesme ile ayrılır (Örn: "Yaban"\'ı).' },
          { id: 'B', text: 'Tırnaktan sonra gelen ek bitişik yazılır, kesme kullanılmaz (Örn: "Yaban"ı).' },
          { id: 'C', text: 'Sadece özel isimlerde tırnaktan sonra kesme kullanılır.' },
          { id: 'D', text: 'Ek tırnağın içine alınır (Örn: "Yabanı").' },
          { id: 'E', text: 'Tırnak işaretinden sonra asla ek getirilmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tırnak içine alınan sözlerden (özel isim bile olsa) sonra gelen ekleri ayırmak için kesme işareti kullanılmaz, ek doğrudan tırnak işaretinden sonra yazılır ("Yaban"ı).'
      },
      {
        id: 'q-nk-18-7',
        difficulty: 'hard',
        questionText: 'Alıntı metinlerde atlanan, alınmayan yerleri belirtmek için köşeli ayraç içinde veya doğrudan kullanılan işaret hangisidir?',
        options: [
          { id: 'A', text: 'Kısa çizgi' },
          { id: 'B', text: 'Noktalı virgül' },
          { id: 'C', text: 'Üç nokta (...)' },
          { id: 'D', text: 'Tire (-)' },
          { id: 'E', text: 'İki nokta (:)' }
        ],
        correctOptionId: 'C',
        explanation: 'Metin içinde aktarılmayan (atlanmış) bölümleri göstermek için üç nokta (...) kullanılır, bazen [...] şeklinde de gösterilebilir.'
      },
      {
        id: 'q-nk-18-8',
        difficulty: 'hard',
        questionText: 'TDK\'ye göre "yüzde ve binde" işaretleri ile sayılar yazılırken boşluk kullanımı nasıldır?',
        options: [
          { id: 'A', text: 'İşaret ile sayı arasına mutlaka bir boşluk bırakılır.' },
          { id: 'B', text: 'Sayı ile işaret bitişik yazılır, boşluk bırakılmaz.' },
          { id: 'C', text: 'İşaret kelimesinden sonra virgül konur.' },
          { id: 'D', text: 'Sadece binde işaretinde boşluk bırakılır.' },
          { id: 'E', text: 'Boşluk bırakmak veya bırakmamak yazarın tercihine kalmıştır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüzde (%) ve binde (‰) işaretleri yazılırken sayıyla işaret arasında boşluk bırakılmaz (%25).'
      },
      {
        id: 'q-nk-18-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iki nokta (:) yerinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabah erken kalktı: ve hemen yola çıktı.' },
          { id: 'B', text: 'Onun tek bir hayali var: doktor olmak.' },
          { id: 'C', text: 'Masada kitaplar: defterler, kalemler vardı.' },
          { id: 'D', text: 'Bize her zaman şunu söylerdi: ki dürüstlük erdemdir.' },
          { id: 'E', text: 'Sorunları çözmek için: çok düşündük.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kendisiyle ilgili örnek veya açıklama verilecek cümlenin sonuna iki nokta konur. B seçeneğinde açıklama (doktor olmak) yapıldığı için kullanımı doğrudur.'
      },
      {
        id: 'q-nk-18-10',
        difficulty: 'hard',
        questionText: 'Tarihlerin yazılışında ay isimleri yazıyla yazıldığında aralarına hangi noktalama işareti konur?',
        options: [
          { id: 'A', text: 'Nokta' },
          { id: 'B', text: 'Eğik çizgi' },
          { id: 'C', text: 'Kısa çizgi' },
          { id: 'D', text: 'Virgül' },
          { id: 'E', text: 'Hiçbir işaret konmaz' }
        ],
        correctOptionId: 'E',
        explanation: 'Tarihlerin yazılışında ay adları harfle (yazıyla) yazılırsa gün, ay ve yıl arasına hiçbir noktalama işareti konmaz (Örn: 29 Ekim 1923).'
      }
    ]
  }
]
