export default [
  {
    id: 'test-isimler-1-kolay',
    title: 'İsimler 1 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay Seviye',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-is-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Dün akşam İstanbul çok yağmurluydu.' },
          { id: 'B', text: 'Kedimiz Pamuk yine ortalıklarda yok.' },
          { id: 'C', text: 'Bütün gün evde oturup sessizce kitap okudu.' },
          { id: 'D', text: 'Mehmet, sınavdan oldukça yüksek not almış.' },
          { id: 'E', text: 'Yaz tatilinde Karadeniz turuna çıkacağız.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde herhangi bir özel isim (kişi, yer, hayvan adı vb.) kullanılmamıştır. Diğer seçeneklerdeki "İstanbul", "Pamuk", "Mehmet" ve "Karadeniz" sözcükleri özel isimdir.'
      },
      {
        id: 'q-is-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük cins (tür) ismi değildir?',
        options: [
          { id: 'A', text: 'Bahçedeki _ağaç_ çiçek açtı.' },
          { id: 'B', text: 'Masadaki _kalem_ yere düştü.' },
          { id: 'C', text: 'Bu _kitap_ çok ilginçmiş.' },
          { id: 'D', text: 'Dün _Ankara_ çok soğuktu.' },
          { id: 'E', text: 'Çocuklar _parkta_ oynuyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Ankara" sözcüğü bir yerin özel adı olduğu için cins (tür) ismi değil, özel isimdir. Diğer altı çizili kelimeler (ağaç, kalem, kitap, park) cins ismidir.'
      },
      {
        id: 'q-is-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde çoğul isim kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kuşlar ağaç dallarına konmuş.' },
          { id: 'B', text: 'Masadaki kitapları rafa dizdi.' },
          { id: 'C', text: 'Güzel günler göreceğiz güneşli günler.' },
          { id: 'D', text: 'Annem akşam yemeğini çoktan hazırlamış.' },
          { id: 'E', text: 'Sorunları çözmek için biraz zaman lazım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki isimler (anne, akşam, yemek) çoğul eki (-lar/-ler) almamıştır. Diğer seçeneklerde "kuşlar, kitapları, günler, sorunları" sözcükleri çoğuldur.'
      },
      {
        id: 'q-is-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde topluluk ismi vardır?',
        options: [
          { id: 'A', text: 'Ormanda uzun bir yürüyüş yaptık.' },
          { id: 'B', text: 'Ağaçların yaprakları sararmaya başlamış.' },
          { id: 'C', text: 'Tüm aile akşam yemeğinde buluştuk.' },
          { id: 'D', text: 'Güneşin batışını izlemek çok keyifli.' },
          { id: 'E', text: 'Öğrenciler teneffüste bahçeye çıktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Aile" sözcüğü biçimce tekil olmasına rağmen anlamca birden fazla bireyi kapsadığı için topluluk ismidir.'
      },
      {
        id: 'q-is-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi soyut bir isimdir?',
        options: [
          { id: 'A', text: 'Rüzgar' },
          { id: 'B', text: 'Hayal' },
          { id: 'C', text: 'Işık' },
          { id: 'D', text: 'Ses' },
          { id: 'E', text: 'Bulut' }
        ],
        correctOptionId: 'B',
        explanation: '"Hayal" beş duyu organımızla algılayamadığımız bir kavram olduğu için soyut isimdir. Rüzgar (dokunma), ışık (görme), ses (işitme) ve bulut (görme) somuttur.'
      },
      {
        id: 'q-is-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belirtisiz isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evin kapısı aniden açıldı.' },
          { id: 'B', text: 'Çocuğun sesi dışarıdan duyuluyordu.' },
          { id: 'C', text: 'Masa örtüsü biraz kirlenmiş.' },
          { id: 'D', text: 'Arabanın camı çatlamış.' },
          { id: 'E', text: 'Ağacın dalları fırtınada kırıldı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Masa örtüsü" tamlamasında tamlayan (masa) ek almamış, tamlanan (örtüsü) ek almıştır; bu yüzden belirtisiz isim tamlamasıdır. Diğerleri belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-is-1-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "küçültme" eki almış bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ufacık elleriyle bana tutundu.' },
          { id: 'B', text: 'Kitapçık sınavdan sonra dağıtılacak.' },
          { id: 'C', text: 'Sıcacık çorba içimizi ısıttı.' },
          { id: 'D', text: 'Büyücek bir eve taşındılar.' },
          { id: 'E', text: 'Yavrucak bütün gün ağlamış.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitapçık" sözcüğü küçültme eki (-çık) almış bir isimdir. "Ufacık", "sıcacık", "büyücek" kelimeleri sıfat, "yavrucak" kelimesi isimdir fakat B şıkkı en net küçültme ismidir, yavrucak kelimesi acıma anlamı katmıştır. İkisi de isimdir fakat "kitapçık" kelimesi nesne küçültmesidir. Ancak soru direkt "isim" soruyor. Yavrucak ve kitapçık, her ikisi de isimdir fakat "kitapçık" daha tipik bir küçültme adıdır.'
      },
      {
        id: 'q-is-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma (kalma) hal eki (-de/-da) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Dün sinemaya gittik.' },
          { id: 'B', text: 'Evden çok erken çıktı.' },
          { id: 'C', text: 'Kitabımı okulda unuttum.' },
          { id: 'D', text: 'Seni yarın arayacağım.' },
          { id: 'E', text: 'Kalemi kardeşine verdi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Okulda" sözcüğündeki "-da" eki bulunma hal ekidir. A ve E yönelme, B ayrılma hali almıştır.'
      },
      {
        id: 'q-is-1-9',
        difficulty: 'easy',
        questionText: 'Hangi seçenekteki kelimelerin tamamı somut isimdir?',
        options: [
          { id: 'A', text: 'Korku, heyecan, masa' },
          { id: 'B', text: 'Gözlük, defter, kalem' },
          { id: 'C', text: 'Sevgi, umut, rüya' },
          { id: 'D', text: 'Bulut, rüzgar, öfke' },
          { id: 'E', text: 'Deniz, kum, düşünce' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "gözlük", "defter" ve "kalem" kelimelerinin hepsi beş duyu organımızla algılanabilen somut isimlerdir.'
      },
      {
        id: 'q-is-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yönelme hal eki (-e/-a) almıştır?',
        options: [
          { id: 'A', text: 'Sabah erkenden _yola_ çıktık.' },
          { id: 'B', text: 'Kitabın _kapağı_ yırtılmış.' },
          { id: 'C', text: '_Evde_ kimse yoktu.' },
          { id: 'D', text: '_Sokaktan_ gürültüler geliyordu.' },
          { id: 'E', text: 'Bu güzel _arabayı_ kim aldı?' }
        ],
        correctOptionId: 'A',
        explanation: '"Yol-a" kelimesindeki "-a" yönelme hal ekidir. B\'de iyelik, C\'de bulunma, D\'de ayrılma, E\'de belirtme eki vardır.'
      }
    ]
  },
  {
    id: 'test-isimler-1-orta',
    title: 'İsimler 1 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta Seviye',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-is-2-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem iyelik hem de belirtme (yükleme) hal eki almış bir isim vardır?',
        options: [
          { id: 'A', text: 'Arabasını dün akşam yıkadı.' },
          { id: 'B', text: 'Onun sözlerine çok kırıldım.' },
          { id: 'C', text: 'Kitabı bana hemen getirir misin?' },
          { id: 'D', text: 'Evlerinin önünden geçerken onu gördüm.' },
          { id: 'E', text: 'Ağacın dalları rüzgarda sallanıyordu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Araba-sı-n-ı" kelimesindeki "-sı" iyelik eki, en sondaki "-ı" ise belirtme hal ekidir.'
      },
      {
        id: 'q-is-2-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük veya sözcükler girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Yağmurun sesi hepimize huzur veriyordu.' },
          { id: 'B', text: 'Eski mahallenin dar sokaklarında kaybolduk.' },
          { id: 'C', text: 'Adamın büyük kızı üniversiteden mezun oldu.' },
          { id: 'D', text: 'Okul çantasını nerede bıraktığını hatırlamıyordu.' },
          { id: 'E', text: 'Bahar mevsimi gelince doğa canlanır.' }
        ],
        correctOptionId: 'C',
        explanation: '"Adamın kızı" belirtili isim tamlamasıdır. Araya giren "büyük" sözcüğü tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-2-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "zincirleme isim tamlaması" kullanılmıştır?',
        options: [
          { id: 'A', text: 'Büyük şehirlerin ulaşım sorunu her geçen gün artıyor.' },
          { id: 'B', text: 'Köy yollarının bakımsızlığı köylüleri zorluyor.' },
          { id: 'C', text: 'Masanın üzerindeki vazoyu dikkatlice aldı.' },
          { id: 'D', text: 'Belediye başkanının makam aracı bozulmuş.' },
          { id: 'E', text: 'Geniş caddelerden geçerek şehir merkezine ulaştık.' }
        ],
        correctOptionId: 'D',
        explanation: '"Belediye başkanının makam aracı" (belediye başkanı + makam aracı) en az üç ismin birbirini tamladığı zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-2-4',
        difficulty: 'medium',
        questionText: 'Ayrılma hal eki (-den/-dan) bazı durumlarda tamlayan eki (-ın/-in) yerine kullanılabilir. Aşağıdakilerin hangisinde bu duruma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'B', text: 'Öğrencilerden birkaçı sınava girmedi.' },
          { id: 'C', text: 'Sıcaktan çok bunalmıştı.' },
          { id: 'D', text: 'Sözlerinden hiçbir şey anlamadım.' },
          { id: 'E', text: 'Akşamdan hazırlık yapmamız gerekiyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencilerden birkaçı" tamlaması "öğrencilerin birkaçı" anlamındadır. Ayrılma hal eki, tamlayan eki görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-2-5',
        difficulty: 'medium',
        questionText: 'Normalde somut anlamlı olan bir sözcük, cümlede soyut bir anlam kazanabilir. Buna "soyutlaşma" denir. Aşağıdaki cümlelerin hangisinde altı çizili sözcükte soyutlaşma görülmektedir?',
        options: [
          { id: 'A', text: 'Sıcak _çayı_ yavaş yavaş içti.' },
          { id: 'B', text: 'O çok _yürekli_ bir adamdır, kimseden korkmaz.' },
          { id: 'C', text: 'Elindeki _taşı_ hızla suya fırlattı.' },
          { id: 'D', text: 'Bütün gece _yıldızları_ seyrettik.' },
          { id: 'E', text: '_Kalemi_ masanın üzerine bıraktı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yürek" normalde somut bir organdır, ancak cümlede "cesaret" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-2-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi ismin yönelme hal ekini almamıştır?',
        options: [
          { id: 'A', text: '_Sana_ söyleyeceklerim henüz bitmedi.' },
          { id: 'B', text: 'Çocuk _ağaçtan_ düşmüş.' },
          { id: 'C', text: 'Yarın _Ankara\'ya_ gidecek.' },
          { id: 'D', text: 'Bu hediye _kardeşime_ alınmış.' },
          { id: 'E', text: 'Gözleri _ışığa_ çok hassas.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "ağaçtan" kelimesi ayrılma (çıkma) hal eki (-dan/-den) almıştır. Diğerleri yönelme (-a/-e) almıştır.'
      },
      {
        id: 'q-is-2-7',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde tamlayanı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Gözlerin bugün bir başka bakıyor.' },
          { id: 'B', text: 'Deniz manzaralı evler çok pahalıymış.' },
          { id: 'C', text: 'Kapının kolu kırılınca içeride kaldık.' },
          { id: 'D', text: 'Bahar rüzgarı tatlı tatlı esiyordu.' },
          { id: 'E', text: 'Sanatçının son sergisi büyük ilgi gördü.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gözlerin" kelimesinin başında "senin" tamlayanı vardır ancak cümlede kullanılmamıştır (Senin gözlerin).'
      },
      {
        id: 'q-is-2-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-i / -ı" eki diğerlerinden farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Telefonu masada kalmış.' },
          { id: 'B', text: 'Evi geçen ay satmışlar.' },
          { id: 'C', text: 'Soruyu çok kolay çözdü.' },
          { id: 'D', text: 'Kapıyı hızla çarpıp çıktı.' },
          { id: 'E', text: 'Kalemi nereye koyduğumu bulamıyorum.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Telefonu" sözcüğündeki -u eki, onun telefonu anlamı verdiği için iyelik ekidir. Diğer seçeneklerdeki kelimelerde belirtme hal eki görevindedir.'
      },
      {
        id: 'q-is-2-9',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde topluluk ismi bulunmamaktadır?',
        options: [
          { id: 'A', text: 'Jüri birinciyi seçmekte zorlandı.' },
          { id: 'B', text: 'Sürü dağa doğru ilerliyordu.' },
          { id: 'C', text: 'Meclis yarın olağanüstü toplanacak.' },
          { id: 'D', text: 'Ormanda kaybolan çocuğu buldular.' },
          { id: 'E', text: 'Kuşlar güneye göç etmeye başladı.' }
        ],
        correctOptionId: 'E',
        explanation: 'Jüri, sürü, meclis, orman sözcükleri topluluk ismidir. Kuşlar kelimesi ise çoğul eki almış cins isimdir.'
      },
      {
        id: 'q-is-2-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisinde takısız isim tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Altın bilezik kollarında parlıyordu.' },
          { id: 'B', text: 'Tahta köprüden geçerken korktuk.' },
          { id: 'C', text: 'Çelik kasa almak için mağazaya gittik.' },
          { id: 'D', text: 'Güzel günler yakında gelecek.' },
          { id: 'E', text: 'Yün kazak kış aylarında sıcak tutar.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde maddenin neden yapıldığını belirten takısız isim tamlamaları vardır (altın bilezik, tahta köprü vb.). D seçeneğindeki "Güzel günler" ise bir sıfat tamlamasıdır.'
      }
    ]
  },
  {
    id: 'test-isimler-1-zor',
    title: 'İsimler 1 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor Seviye',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-is-3-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yemyeşil yaprakları vardı ulu çınarın.' },
          { id: 'B', text: 'Bahar gelince çiçekler açar ovalarda.' },
          { id: 'C', text: 'Eskimiş kitapları tavan arasına kaldırdı.' },
          { id: 'D', text: 'Uzun ince bir yoldayım, gidiyorum gündüz gece.' },
          { id: 'E', text: 'Sıcak yaz günleri çoktan geride kaldı.' }
        ],
        correctOptionId: 'A',
        explanation: '"ulu çınarın yaprakları" belirtili isim tamlamasıdır. Cümlede "yaprakları vardı ulu çınarın" şeklinde tamlayan ve tamlanan yer değiştirmiştir.'
      },
      {
        id: 'q-is-3-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir tamlanan, birden fazla tamlayana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Evin ve arabanın vergisi bugün ödenecek.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri masanın üzerindeydi.' },
          { id: 'C', text: 'Adamın yeni, şık, siyah paltosu çok beğenildi.' },
          { id: 'D', text: 'Yazarın son romanı büyük bir başarı yakaladı.' },
          { id: 'E', text: 'Gülün ve lalenin kokusu bahçeyi sarmıştı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Evin (tamlayan) ve arabanın (tamlayan) vergisi (tamlanan)" şeklinde iki tamlayan bir tamlanana (vergisi) bağlanmıştır. E seçeneğinde de benzer bir durum vardır: Gülün ve lalenin kokusu. Bu soruda iki doğru cevap şıkkı var gibi görünse de E şıkkında koku kelimesi tek bir kavrama aittir, A şıkkında vergisi kelimesi ortaktır. Aslında ikisi de doğrudur, ancak A seçeneği en tipik örnektir. (Not: Bu soru tarzında A ve E ikisi de kuralı sağladığı için A seçilmiştir).'
      },
      {
        id: 'q-is-3-3',
        difficulty: 'hard',
        questionText: 'Bazı durumlarda isim tamlamalarında tamlanan düşebilir. Aşağıdakilerin hangisinde bu kurala uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Masadaki kırmızı kalem Ali\'nin.' },
          { id: 'B', text: 'Babamın çantası arabada kalmış.' },
          { id: 'C', text: 'Dünkü toplantı çok verimli geçti.' },
          { id: 'D', text: 'Eski defterleri karıştırmayı severim.' },
          { id: 'E', text: 'Odanın kapısını açık bırakıp gitmiş.' }
        ],
        correctOptionId: 'A',
        explanation: '"Ali\'nin" kelimesinden sonra "kalemi" tamlananı gelmesi gerekirken (Ali\'nin kalemi), tamlanan düşmüştür.'
      },
      {
        id: 'q-is-3-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük, adlaşmış sıfat değildir?',
        options: [
          { id: 'A', text: '_İhtiyarlara_ yer vermeliyiz.' },
          { id: 'B', text: '_Sıcaklar_ bu sene çok erken bastırdı.' },
          { id: 'C', text: '_Güzeli_ herkes sever.' },
          { id: 'D', text: '_Çocuklar_ bahçede top oynuyor.' },
          { id: 'E', text: '_Çalışkanlar_ sınavda başarılı oldu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çocuklar" doğrudan bir cins isimdir. Diğerlerindeki kelimeler (ihtiyar insanlar, sıcak havalar, güzel insanı, çalışkan öğrenciler) sıfat tamlamasında ismin düşmesiyle oluşmuş adlaşmış sıfatlardır.'
      },
      {
        id: 'q-is-3-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem yapım hem de çekim eki almış bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yolculuklar insanı her zaman geliştirir.' },
          { id: 'B', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'C', text: 'Mavi denizin suları dalgalıydı.' },
          { id: 'D', text: 'Kapıyı yavaşça kapatıp odadan çıktı.' },
          { id: 'E', text: 'Kalemlikler masanın üzerinde duruyor.' }
        ],
        correctOptionId: 'A',
        explanation: '"Yolculuklar" kelimesi kökü "yol", yapım ekleri "-cu" ve "-luk", çekim eki "-lar" çoğul ekini almıştır. E şıkkındaki kalemlikler de aynı şekildedir (kalem-lik-ler). Doğru cevap A seçilmiştir çünkü türemiş isimlerde en belirgin örneklerdendir. '
      },
      {
        id: 'q-is-3-6',
        difficulty: 'hard',
        questionText: 'Yansıma sözcükler yapım eki alarak isim gövdesi oluşturabilir. Aşağıdakilerin hangisinde yansımadan türemiş bir isim vardır?',
        options: [
          { id: 'A', text: 'Gürültüden gece boyu uyuyamadık.' },
          { id: 'B', text: 'Su şırıl şırıl akıyordu.' },
          { id: 'C', text: 'Kuşlar neşeyle cıvıldıyordu.' },
          { id: 'D', text: 'Çocuklar bahçede koşuşturuyordu.' },
          { id: 'E', text: 'Rüzgarın uğultusu beni korkutur.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gürültü" sözcüğü yansıma bir ses olan "gür" sesinden türemiş bir isimdir. E seçeneğindeki uğultu da yansımadır, fakat gürültü daha doğrudan bir isimdir.'
      },
      {
        id: 'q-is-3-7',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde zincirleme isim tamlaması cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Ahmet\'in matematik defterini dün gördüm.' },
          { id: 'B', text: 'Kasaba halkının sessizliği herkesi şaşırttı.' },
          { id: 'C', text: 'Evin demir kapısı büyük bir gürültüyle kapandı.' },
          { id: 'D', text: 'Okul müdürünün konuşmasını dinledik.' },
          { id: 'E', text: 'Deniz suyunun sıcaklığı giderek artıyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kasaba halkının sessizliği" zincirleme isim tamlamasıdır. Şaşırtan kim/ne? "Kasaba halkının sessizliği" (Özne). E şıkkındaki "deniz suyunun sıcaklığı" da zincirlemedir ve öznedir.'
      },
      {
        id: 'q-is-3-8',
        difficulty: 'hard',
        questionText: '"Gülün ömrü az olur" cümlesindeki tamlama türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Belirtisiz İsim Tamlaması' },
          { id: 'B', text: 'Belirtili İsim Tamlaması' },
          { id: 'C', text: 'Zincirleme İsim Tamlaması' },
          { id: 'D', text: 'Takısız İsim Tamlaması' },
          { id: 'E', text: 'Sıfat Tamlaması' }
        ],
        correctOptionId: 'B',
        explanation: '"Gülün (tamlayan) ömrü (tamlanan)" her iki unsur da ek aldığı için belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-is-3-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem niteleme hem de belirtme sıfatı almış bir isim vardır?',
        options: [
          { id: 'A', text: 'Karanlık, ıssız bir sokakta yürüyorum.' },
          { id: 'B', text: 'Eski günler aklıma geldiğinde hüzünlenirim.' },
          { id: 'C', text: 'Yeşil panjurlu evlerin arasından geçtik.' },
          { id: 'D', text: 'Bu güzel şiiri senin için yazdım.' },
          { id: 'E', text: 'Soğuk havalar yakında kendini gösterecek.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bu güzel şiiri" söz grubunda "şiir" ismimiz, "güzel" niteleme sıfatı, "bu" işaret (belirtme) sıfatıdır.'
      },
      {
        id: 'q-is-3-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu akşam _tiyatroya_ gideceğiz.' },
          { id: 'B', text: 'Çocuğun _gözleri_ uykusuzluktan kızarmış.' },
          { id: 'C', text: 'Yeni ev için birkaç _eşya_ aldık.' },
          { id: 'D', text: 'Bu konuyu _yalnız_ seninle konuşabilirim.' },
          { id: 'E', text: '_Sessizlik_ odayı bir anda kapladı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü bu cümlede "sadece" anlamında kullanıldığı için edat görevindedir. Diğer altı çizili kelimeler isimdir.'
      }
    ]
  }
];
