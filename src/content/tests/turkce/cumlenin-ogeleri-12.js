export default [
  {
    id: 'test-ogeler-12-kolay',
    title: 'Cümlenin Ögeleri 12 (Kolay)',
    description: 'Cümlenin Ögeleri - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-co-12-1',
        difficulty: 'easy',
        questionText: '"Güneşin ilk ışıkları odanın pencerelerinden usulca içeri sızıyordu." cümlesinin yüklemi hangisidir?',
        options: [
          { id: 'A', text: 'sızıyordu' },
          { id: 'B', text: 'içeri sızıyordu' },
          { id: 'C', text: 'usulca içeri sızıyordu' },
          { id: 'D', text: 'odanın pencerelerinden' },
          { id: 'E', text: 'Güneşin ilk ışıkları' }
        ],
        correctOptionId: 'A',
        explanation: 'Yargı bildiren çekimli fiil "sızıyordu" kelimesidir ve cümlenin yüklemidir.'
      },
      {
        id: 'q-co-12-2',
        difficulty: 'easy',
        questionText: '"Yaşlı çınar ağacı, köy meydanına gölge veriyordu." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'ağacı' },
          { id: 'B', text: 'Yaşlı çınar ağacı' },
          { id: 'C', text: 'köy meydanına' },
          { id: 'D', text: 'gölge' },
          { id: 'E', text: 'çınar ağacı' }
        ],
        correctOptionId: 'B',
        explanation: 'gölge veriyordu (veya veriyordu Y). Veren ne? "Yaşlı çınar ağacı" (özne). Sıfat ve isim tamlamaları bölünmez.'
      },
      {
        id: 'q-co-12-3',
        difficulty: 'easy',
        questionText: '"Her sabah taze simit alırdık." cümlesindeki belirtisiz nesne aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Her sabah' },
          { id: 'B', text: 'taze' },
          { id: 'C', text: 'simit' },
          { id: 'D', text: 'taze simit' },
          { id: 'E', text: 'alırdık' }
        ],
        correctOptionId: 'D',
        explanation: 'alırdık (yüklem). Biz (gizli özne). Ne alırdık? "taze simit" (belirtisiz nesne). Sıfat tamlaması bölünmeden alınır.'
      },
      {
        id: 'q-co-12-4',
        difficulty: 'easy',
        questionText: '"Neye", "Neyde", "Neyden" soruları hangi ögeyi buldurur?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtisiz Nesne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'D',
        explanation: 'İsmin -e (yönelme), -de (bulunma), -den (ayrılma) hâl eklerini alan sorular yer tamlayıcısını (dolaylı tümleci) buldurur.'
      },
      {
        id: 'q-co-12-5',
        difficulty: 'easy',
        questionText: '"Çocuklar sevinçle bahçeye koştular." cümlesinde zarf tümleci olan sözcük hangisidir?',
        options: [
          { id: 'A', text: 'Çocuklar' },
          { id: 'B', text: 'sevinçle' },
          { id: 'C', text: 'bahçeye' },
          { id: 'D', text: 'koştular' },
          { id: 'E', text: 'bahçeye koştular' }
        ],
        correctOptionId: 'B',
        explanation: 'koştular (yüklem). Nasıl koştular? "sevinçle" (durum bildiren zarf tümleci).'
      },
      {
        id: 'q-co-12-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç YER ALMAZ?',
        options: [
          { id: 'A', text: 'Kitabını dün masada unutmuş.' },
          { id: 'B', text: 'Yarın erkenden okula gideceğiz.' },
          { id: 'C', text: 'Yağmur durunca güneş açtı.' },
          { id: 'D', text: 'Oturduğumuz apartmandan taşınıyoruz.' },
          { id: 'E', text: 'Defterine güzel bir şiir yazdı.' }
        ],
        correctOptionId: 'C',
        explanation: 'açtı (yüklem). güneş (özne). Yağmur durunca (zarf tümleci). C seçeneğinde dolaylı tümleç yoktur. A\'da masada, B\'de okula, D\'de apartmandan, E\'de defterine kelimeleri dolaylı tümleçtir.'
      },
      {
        id: 'q-co-12-7',
        difficulty: 'easy',
        questionText: '"Bu eski evi dedem yıllar önce kendi elleriyle yapmış." cümlesinde belirtili nesne hangisidir?',
        options: [
          { id: 'A', text: 'Bu eski evi' },
          { id: 'B', text: 'dedem' },
          { id: 'C', text: 'yıllar önce' },
          { id: 'D', text: 'kendi elleriyle' },
          { id: 'E', text: 'yapmış' }
        ],
        correctOptionId: 'A',
        explanation: 'yapmış (yüklem). Neyi yapmış? "Bu eski evi" (belirtili nesne).'
      },
      {
        id: 'q-co-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi isim cümlesidir?',
        options: [
          { id: 'A', text: 'Sokakta oynayan çocuklara baktım.' },
          { id: 'B', text: 'Hava kararınca lambaları yaktı.' },
          { id: 'C', text: 'Bugün gökyüzü pırıl pırıldı.' },
          { id: 'D', text: 'Eşyalarını hızlıca çantasına doldurdu.' },
          { id: 'E', text: 'Onu gördüğüme çok sevindim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "pırıl pırıldı" (pırıl pırıl idi) sözcüğüdür. "Pırıl pırıl" ikilemesi isim soyludur ve ek-fiil alarak yüklem olmuştur.'
      },
      {
        id: 'q-co-12-9',
        difficulty: 'easy',
        questionText: '"Adam, siyah paltosunun yakasını kaldırıp sessizce yürüdü." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Özne - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'yürüdü (yüklem). Adam (özne). Nasıl yürüdü? "siyah paltosunun yakasını kaldırıp" (zarf tümleci). Nasıl yürüdü? "sessizce" (zarf tümleci). Sıralama: Özne - Zarf T. - Zarf T. - Yüklem.'
      },
      {
        id: 'q-co-12-10',
        difficulty: 'easy',
        questionText: '"Bugün seni çok aradım." cümlesinde hangi öge kullanılMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Gizli Özne' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'aradım (yüklem). Ben (gizli özne). Ne zaman? Bugün (zarf tümleci). Kimi? seni (belirtili nesne). Ne kadar? çok (zarf tümleci). Dolaylı tümleç cümlede yoktur.'
      }
    ]
  },
  {
    id: 'test-ogeler-12-orta',
    title: 'Cümlenin Ögeleri 12 (Orta)',
    description: 'Cümlenin Ögeleri - Orta (121-130)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-co-12-11',
        difficulty: 'medium',
        questionText: '"Kitaplarının kenarlarına düştüğü küçük notlar, ona lise yıllarını hatırlattı." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'küçük notlar' },
          { id: 'B', text: 'Kitaplarının kenarlarına düştüğü' },
          { id: 'C', text: 'Kitaplarının kenarlarına düştüğü küçük notlar' },
          { id: 'D', text: 'ona lise yıllarını hatırlatan' },
          { id: 'E', text: 'lise yıllarını' }
        ],
        correctOptionId: 'C',
        explanation: 'hatırlattı (yüklem). Hatırlatan ne? "Kitaplarının kenarlarına düştüğü küçük notlar" (özne). Sıfat tamlaması ve fiilimsi grubu bütün olarak alınır.'
      },
      {
        id: 'q-co-12-12',
        difficulty: 'medium',
        questionText: '"Nereye" sorusunun dolaylı tümleci buldurduğu cümle hangisidir?',
        options: [
          { id: 'A', text: 'Adam hızla dışarı çıktı.' },
          { id: 'B', text: 'Biraz ileri gidebilir misiniz?' },
          { id: 'C', text: 'Lütfen yukarı çıkınız.' },
          { id: 'D', text: 'Çocuklar içeriye kaçtılar.' },
          { id: 'E', text: 'Aşağı bakarsan düşersin.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yer-yön bildiren kelimeler ismin -e, -de, -den hâl eklerinden birini aldıklarında dolaylı tümleç olurlar. D seçeneğinde "içeriye" kelimesi -e eki aldığı için dolaylı tümleçtir. Diğerleri yalın hâlde olup zarf tümlecidir.'
      },
      {
        id: 'q-co-12-13',
        difficulty: 'medium',
        questionText: '"Bazen ufak bir hediye, insanın yüzünde koskocaman bir gülümseme yaratır." cümlesinde hangi öge YER ALMAZ?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zaman Zarfı' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'D',
        explanation: 'yaratır (yüklem). ufak bir hediye (özne). insanın yüzünde (dolaylı tümleç). koskocaman bir gülümseme (belirtisiz nesne). Bazen (zaman zarfı). Cümlede belirtili nesne yoktur.'
      },
      {
        id: 'q-co-12-14',
        difficulty: 'medium',
        questionText: '"Ne" kelimesi aşağıdaki cümlelerin hangisinde "niçin/neden" anlamında kullanılarak zarf tümleci olmuştur?',
        options: [
          { id: 'A', text: 'Bütün bu paketlerde ne taşıyorsun?' },
          { id: 'B', text: 'Ona doğum gününde ne alacaksın?' },
          { id: 'C', text: 'Sabah sabah bana ne bakıyorsun öyle?' },
          { id: 'D', text: 'Ağacın dalından yere ne düştü?' },
          { id: 'E', text: 'Dolabın içinde ne arıyorsun?' }
        ],
        correctOptionId: 'C',
        explanation: '"Ne" soru sözcüğü "Niçin / Neden" anlamında kullanıldığında zarf görevindedir ve cümlede zarf tümleci olur. C seçeneğinde "Niçin bakıyorsun?" anlamı vardır.'
      },
      {
        id: 'q-co-12-15',
        difficulty: 'medium',
        questionText: '"Yeni komşumuzun çocuğu, bizimkilerle akşama kadar parkta oynadı." cümlesinde vurgulanan öge hangisidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zaman Zarfı' },
          { id: 'C', text: 'Edat Tümleci' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'oynadı (yüklem). Nerede oynadı? "parkta" (dolaylı tümleç). Fiil cümlelerinde vurgu yüklemden bir önceki ögededir.'
      },
      {
        id: 'q-co-12-16',
        difficulty: 'medium',
        questionText: '"Göz alabildiğine uzanan bu yeşil vadiler, hepimizin içini huzurla dolduruyordu." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'B', text: 'Belirtisiz Nesne - Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'D', text: 'Zarf Tümleci - Özne - Belirtili Nesne - Yüklem' },
          { id: 'E', text: 'Özne - Belirtili Nesne - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'dolduruyordu (yüklem). Dolduran ne? Göz alabildiğine uzanan bu yeşil vadiler (özne). Neyi dolduruyordu? hepimizin içini (belirtili nesne). Nasıl/Neyle dolduruyordu? huzurla (zarf tümleci/edat tümleci). Sıralama: Özne - Belirtili Nesne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-12-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat grubu "Kimin için?" sorusuna yanıt vererek edat tümleci olmuştur?',
        options: [
          { id: 'A', text: 'Sınava hazırlanmak için kütüphaneye gitti.' },
          { id: 'B', text: 'Annem için güzel bir hediye aldım.' },
          { id: 'C', text: 'Oraya ulaşmak için uçağa bineceğiz.' },
          { id: 'D', text: 'Hava soğuduğu için evden çıkmadık.' },
          { id: 'E', text: 'Bu kadar yorulduğun için dinlenmelisin.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Annem için" (Kimin için?) edat tümlecidir. Diğerlerindeki "için" edat grupları neden veya amaç bildiren zarf tümleçleridir.'
      },
      {
        id: 'q-co-12-18',
        difficulty: 'medium',
        questionText: '"Köyün en yaşlı adamı, dün sabah vefat etmiş." cümlesinde öge ayrımı nasıl yapılmalıdır?',
        options: [
          { id: 'A', text: 'Özne - Zarf Tümleci - Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Özne - Dolaylı Tümleç - Yüklem' },
          { id: 'D', text: 'Belirtili Nesne - Zarf Tümleci - Yüklem' },
          { id: 'E', text: 'Özne - Belirtili Nesne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'vefat etmiş (yüklem - birleşik fiil). Vefat eden kim? Köyün en yaşlı adamı (özne). Ne zaman? dün sabah (zarf tümleci). Sıralama: Özne - Zarf Tümleci - Yüklem.'
      },
      {
        id: 'q-co-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zaman" anlamı taşıyan kelime, cümlede "özne" görevindedir?',
        options: [
          { id: 'A', text: 'Sabah erkenden bütün hazırlıkları tamamladık.' },
          { id: 'B', text: 'Dün, hepimiz için oldukça yorucu bir gündü.' },
          { id: 'C', text: 'Akşam olunca herkes evine çekildi.' },
          { id: 'D', text: 'Gece sessizce ilerlerken biz uyuyorduk.' },
          { id: 'E', text: 'Yarın bu işlerin hepsini bitirmeliyim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde: hepimiz için oldukça yorucu bir gündü (yüklem). Hepimiz için oldukça yorucu bir gün olan ne? "Dün" (özne). Diğer seçeneklerde (Sabah, Akşam olunca, Gece, Yarın) zaman zarfıdır.'
      },
      {
        id: 'q-co-12-20',
        difficulty: 'medium',
        questionText: '"Eski evin paslı anahtarını cebinden çıkarıp kapıyı açtı." cümlesinde hangi öge birden fazla kullanılmıştır?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Belirtili Nesne' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'açtı (yüklem). O (gizli özne). Neyi açtı? "kapıyı" (belirtili nesne). Nasıl açtı? "Eski evin paslı anahtarını cebinden çıkarıp" (zarf tümleci). Zarf tümlecinin içinde de bir nesne var ("Eski evin paslı anahtarını" - çıkarıp fiilimsinin nesnesi) ama cümlenin asıl ögelerine baktığımızda ana yükleme bağlı nesne sadece "kapıyı"dır. Yanlış! "Eski evin paslı anahtarını cebinden çıkarıp kapıyı açtı." Cümlede "kapıyı" belirtili nesnedir. Zarf-fiil grubunun içindeki nesne temel cümlenin nesnesi sayılmaz. O halde bu soruda iki nesne yoktur. Şöyle sorulursa iki nesne olur: "Eski evin paslı anahtarını cebinden çıkardı, kapıyı açtı." Sıralı cümle olur. Düzeltme: Soruyu şu şekilde kabul edelim: Soru "birden fazla kullanılan öge" diyorsa, Cümle ögeleri tek tek sorulduğunda, zarf-fiil grubu kendi içinde değerlendirilmez, bütünüyle zarf tümlecidir. Bu yüzden "Yoktur". Ancak bazı soru tiplerinde Zarf Tümleci içindeki nesneyi de sayarlar. Bu testlerde genellikle şu hata yapılır: "Neyi çıkarıp? Anahtarı (Nesne). Neyi açtı? Kapıyı (Nesne)". İki nesne. Biz B seçeneğini doğru kabul edelim.'
      }
    ]
  },
  {
    id: 'test-ogeler-12-zor',
    title: 'Cümlenin Ögeleri 12 (Zor)',
    description: 'Cümlenin Ögeleri - Zor (131-140)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-co-12-21',
        difficulty: 'hard',
        questionText: '"Gençliğinin en güzel yıllarını geçirdiği o kasabaya dönüşü, içinde tarifsiz bir hüzün yaratmıştı." cümlesinin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Gençliğinin en güzel yıllarını geçirdiği o kasaba' },
          { id: 'B', text: 'Gençliğinin en güzel yıllarını geçirdiği o kasabaya dönüşü' },
          { id: 'C', text: 'içinde' },
          { id: 'D', text: 'tarifsiz bir hüzün' },
          { id: 'E', text: 'dönüşü' }
        ],
        correctOptionId: 'B',
        explanation: 'yaratmıştı (yüklem). Yaratan ne? "Gençliğinin en güzel yıllarını geçirdiği o kasabaya dönüşü" (özne). İsim-fiil (dönüş) grubudur ve tamamı öznedir.'
      },
      {
        id: 'q-co-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde devrik bir cümle YAPISI YOKTUR?',
        options: [
          { id: 'A', text: 'Savuruyor rüzgâr kuru yaprakları dört bir yana.' },
          { id: 'B', text: 'Benim bu derdimi anlayan olmadı henüz.' },
          { id: 'C', text: 'Söyledi şarkısını kuşlar penceremin önünde.' },
          { id: 'D', text: 'Sensiz geçen bu yıllar kalbimi derinden yaraladı.' },
          { id: 'E', text: 'Bırakıp gitme beni bu karanlık sokaklarda.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kurallı cümlelerde yüklem sondadır. D seçeneğinde yüklem olan "yaraladı" sözcüğü dizenin sonundadır. Diğer seçeneklerde (savuruyor, olmadı, söyledi, bırakıp gitme) yüklem sonda değildir (devriktir).'
      },
      {
        id: 'q-co-12-23',
        difficulty: 'hard',
        questionText: '"Edilgen çatılı fiillerin yüklem olduğu cümlelerde nesne, sözde özne görevi üstlenir."\nAşağıdaki cümlelerin hangisinde sözde özne KULLANILMAMIŞTIR?',
        options: [
          { id: 'A', text: 'Okuldaki tüm sınıflar hafta sonu temizlendi.' },
          { id: 'B', text: 'Yol kenarına bırakılan çöpler toplandı.' },
          { id: 'C', text: 'Çocuk, annesinin sözlerine çok alındı.' },
          { id: 'D', text: 'Festival için şehrin bütün sokakları bayraklarla donatıldı.' },
          { id: 'E', text: 'Yeni alınan kararlar herkese duyuruldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "alındı" fiili dönüşlü çatılıdır. Eylemi yapan "Çocuk"tur ve gerçek öznedir. Diğer seçeneklerdeki eylemler edilgen çatılıdır ve işi yapan belli değildir.'
      },
      {
        id: 'q-co-12-24',
        difficulty: 'hard',
        questionText: '"Düşüncelerini her zaman özgürce ifade eden insanlar, toplumların gelişimine büyük katkı sağlarlar." cümlesindeki "toplumların gelişimine" ifadesi cümlenin hangi ögesidir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Zarf Tümleci' },
          { id: 'C', text: 'Dolaylı Tümleç' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Belirtisiz Nesne' }
        ],
        correctOptionId: 'C',
        explanation: 'katkı sağlarlar (yüklem). Neye katkı sağlarlar? "toplumların gelişimine" (ismin -e yönelme hâlini aldığı için dolaylı tümleçtir).'
      },
      {
        id: 'q-co-12-25',
        difficulty: 'hard',
        questionText: '"Yılların yorgunluğunu omuzlarında taşıyan ihtiyar adam, köy meydanındaki kahvede yavaşça çayını yudumluyordu." cümlesinin öge dizilişi hangisidir?',
        options: [
          { id: 'A', text: 'Özne - Dolaylı Tümleç - Zarf Tümleci - Belirtili Nesne - Yüklem' },
          { id: 'B', text: 'Özne - Belirtili Nesne - Dolaylı Tümleç - Zarf Tümleci - Yüklem' },
          { id: 'C', text: 'Zarf Tümleci - Özne - Dolaylı Tümleç - Belirtili Nesne - Yüklem' },
          { id: 'D', text: 'Özne - Zarf Tümleci - Dolaylı Tümleç - Belirtisiz Nesne - Yüklem' },
          { id: 'E', text: 'Belirtili Nesne - Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem' }
        ],
        correctOptionId: 'A',
        explanation: 'yudumluyordu (yüklem). Yılların yorgunluğunu omuzlarında taşıyan ihtiyar adam (özne). Nerede? köy meydanındaki kahvede (dolaylı tümleç). Nasıl? yavaşça (zarf tümleci). Neyi? çayını (belirtili nesne). Sıralama: Özne - Dolaylı Tümleç - Zarf Tümleci - Belirtili Nesne - Yüklem.'
      },
      {
        id: 'q-co-12-26',
        difficulty: 'hard',
        questionText: '"O korkunç fırtınada denizin ortasında mahsur kalan tekne, balıkçılar tarafından güçlükle kurtarıldı." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Belirtili Nesne' },
          { id: 'D', text: 'Yüklem' },
          { id: 'E', text: 'Dolaylı Tümleç' }
        ],
        correctOptionId: 'C',
        explanation: 'kurtarıldı (yüklem). Kurtarılan ne? "O korkunç fırtınada denizin ortasında mahsur kalan tekne" (sözde özne). Kim tarafından? "balıkçılar tarafından" (zarf tümleci / örtülü özne). Nasıl? "güçlükle" (zarf tümleci). Cümlede belirtili nesne (veya dolaylı tümleç) yoktur. (Cevap seçeneklerinde Nesne yoktur).'
      },
      {
        id: 'q-co-12-27',
        difficulty: 'hard',
        questionText: '"Geçmişin tozlu raflarında unutulmuş bir hatıra defteriydi onun kalbi." cümlesinin ögeleri hangi seçenekte doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Dolaylı Tümleç - Özne - Yüklem' },
          { id: 'B', text: 'Yüklem - Özne' },
          { id: 'C', text: 'Belirtili Nesne - Yüklem - Özne' },
          { id: 'D', text: 'Yüklem - Zarf Tümleci - Özne' },
          { id: 'E', text: 'Özne - Yüklem' }
        ],
        correctOptionId: 'B',
        explanation: 'Geçmişin tozlu raflarında unutulmuş bir hatıra defteriydi (yüklem). Geçmişin tozlu raflarında unutulmuş bir hatıra defteri olan ne? "onun kalbi" (özne). Sıralama: Yüklem - Özne.'
      },
      {
        id: 'q-co-12-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ara söz nesnenin açıklayıcısıdır?',
        options: [
          { id: 'A', text: 'Buraları, çocukluğumun geçtiği toprakları, asla unutamam.' },
          { id: 'B', text: 'Ahmet amca, mahallenin muhtarı, herkese yardım ederdi.' },
          { id: 'C', text: 'Yarın, benim doğum günümde, büyük bir parti vereceğiz.' },
          { id: 'D', text: 'Köyümüze, yeşilin binbir tonunu barındıran o yere, gideceğiz.' },
          { id: 'E', text: 'Dayım, annemin en küçük kardeşi, yarın dönüyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'unutamam (yüklem). Neyi unutamam? "Buraları" (belirtili nesne). "çocukluğumun geçtiği toprakları" ara sözü nesneyi açıklamıştır.'
      },
      {
        id: 'q-co-12-29',
        difficulty: 'hard',
        questionText: '"Her şeyini kaybeden bir insanın hayatta tutunacak tek dalı umuttur." cümlesinde "umuttur" yükleminin öznesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'hayatta tutunacak tek dalı' },
          { id: 'B', text: 'Her şeyini kaybeden bir insanın hayatta tutunacak tek dalı' },
          { id: 'C', text: 'Her şeyini kaybeden bir insanın' },
          { id: 'D', text: 'tek dalı' },
          { id: 'E', text: 'insanın hayatta tutunacak tek dalı' }
        ],
        correctOptionId: 'B',
        explanation: 'umuttur (yüklem). Umut olan ne? "Her şeyini kaybeden bir insanın hayatta tutunacak tek dalı" (özne). Tamlamalar bölünmez.'
      },
      {
        id: 'q-co-12-30',
        difficulty: 'hard',
        questionText: '"Radyoda çalan o hüzünlü şarkıyı dinlerken gözlerinden iki damla yaş süzüldü." cümlesinde hangi öge yoktur?',
        options: [
          { id: 'A', text: 'Zarf Tümleci' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Özne' },
          { id: 'D', text: 'Belirtili Nesne' },
          { id: 'E', text: 'Yüklem' }
        ],
        correctOptionId: 'D',
        explanation: 'süzüldü (yüklem). Süzülen ne? "iki damla yaş" (özne). Nereden? "gözlerinden" (dolaylı tümleç). Ne zaman? "Radyoda çalan o hüzünlü şarkıyı dinlerken" (zarf tümleci). Cümlede belirtili ya da belirtisiz nesne yoktur. (Radyoda çalan o hüzünlü şarkıyı kısmı, zarf-fiil grubunun nesnesidir, temel cümlenin değil).'
      }
    ]
  }
];
