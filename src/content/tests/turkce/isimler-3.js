export default [
  {
    id: 'test-isimler-3-kolay',
    title: 'İsimler 3 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-is-3k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özel isim olan bir göl adı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tatilimizi Ege kıyılarında geçirdik.' },
          { id: 'B', text: 'Tuz Gölü, Türkiye\'nin önemli tuz kaynaklarındandır.' },
          { id: 'C', text: 'Erciyes Dağı bu mevsimde çok soğuk olur.' },
          { id: 'D', text: 'Kızılırmak ülkemizin en uzun nehridir.' },
          { id: 'E', text: 'Marmara Denizi oldukça dalgalıydı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tuz Gölü, özel isim olan bir göl adıdır. A deniz kıyısı, C dağ, D nehir, E deniz adıdır.'
      },
      {
        id: 'q-is-3k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük tekil bir isimdir?',
        options: [
          { id: 'A', text: 'Eskiden bu _sokaklarda_ oyun oynardık.' },
          { id: 'B', text: 'Okullar tatil olunca _çocuklar_ çok sevindi.' },
          { id: 'C', text: 'Güzel bir _kitap_ okumak insanı dinlendirir.' },
          { id: 'D', text: 'Gökyüzündeki _yıldızlar_ pırıl pırıldı.' },
          { id: 'E', text: 'Sınavdaki _sorular_ oldukça zordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitap" sözcüğü çokluk eki (-lar/-ler) almadığı için tekil isimdir. Diğerleri çoğul isimdir.'
      },
      {
        id: 'q-is-3k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki sözcüklerden hangisi topluluk ismi değildir?',
        options: [
          { id: 'A', text: 'Deste' },
          { id: 'B', text: 'Düzine' },
          { id: 'C', text: 'Kurul' },
          { id: 'D', text: 'Kalabalık' },
          { id: 'E', text: 'Masa' }
        ],
        correctOptionId: 'E',
        explanation: '"Masa" tekil bir varlığı karşılayan tekil cins isimdir. Deste, düzine, kurul ve kalabalık biçimce tekil olsalar da çokluk ifade eden topluluk isimleridir.'
      },
      {
        id: 'q-is-3k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili kelimelerden hangisi somut anlamlıdır?',
        options: [
          { id: 'A', text: 'Bu işten çok büyük bir _sevinç_ duydum.' },
          { id: 'B', text: 'İçimdeki _korku_ her geçen gün büyüyordu.' },
          { id: 'C', text: 'Bana doğru uzattığı _çiçeği_ usulca aldım.' },
          { id: 'D', text: 'Yüzünde tatlı bir _tebessüm_ vardı.' },
          { id: 'E', text: 'Eski günlere dair _özlem_ çekiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çiçek" görme ve dokunma duyularıyla algılanabilen somut bir varlıktır. Diğerleri soyuttur (tebessüm somut bir hareket olsa da burada duygu/ifade anlamıyla kullanılmış, çiçek ise tamamen maddidir).'
      },
      {
        id: 'q-is-3k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belirtme (yükleme) hal eki (-i, -ı, -u, -ü) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evi geçen hafta yeni sahiplerine teslim ettik.' },
          { id: 'B', text: 'Araba yavaşça sokağa girdi.' },
          { id: 'C', text: 'Kedisi bütün gün uyudu.' },
          { id: 'D', text: 'Gözleri uykusuzluktan kızarmış.' },
          { id: 'E', text: 'Sözleri beni derinden etkiledi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Evi" kelimesindeki -i eki, "Neyi teslim ettik?" sorusuna cevap verdiği için belirtme hal ekidir. Diğer seçeneklerdeki (Kedisi, Gözleri, Sözleri) -i ekleri iyelik ekidir.'
      },
      {
        id: 'q-is-3k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Evin bahçesi' },
          { id: 'B', text: 'Çocuğun sesi' },
          { id: 'C', text: 'Kapı kolu' },
          { id: 'D', text: 'Arabanın lastiği' },
          { id: 'E', text: 'Kuşun kanadı' }
        ],
        correctOptionId: 'C',
        explanation: '"Kapı kolu" tamlamasında tamlayan (kapı) ek almamış, tamlanan (kolu) ek almıştır. Bu nedenle belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-3k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ayrılma (çıkma) hal eki almıştır?',
        options: [
          { id: 'A', text: 'Arkadaşımla _parkta_ buluştuk.' },
          { id: 'B', text: 'Hızlıca _merdivenden_ indi.' },
          { id: 'C', text: 'Kitabı _masaya_ bıraktı.' },
          { id: 'D', text: 'Dışarı _çıkmayı_ çok istiyor.' },
          { id: 'E', text: '_Kalemi_ yere düştü.' }
        ],
        correctOptionId: 'B',
        explanation: '"Merdivenden" sözcüğündeki -den eki, ismin ayrılma (çıkma) hal ekidir.'
      },
      {
        id: 'q-is-3k-8',
        difficulty: 'easy',
        questionText: 'Hangi seçenekte küçültme ismi kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Maymuncuk' },
          { id: 'B', text: 'Kedicik' },
          { id: 'C', text: 'Bademcik' },
          { id: 'D', text: 'Büyükçe' },
          { id: 'E', text: 'Gelincik' }
        ],
        correctOptionId: 'D',
        explanation: '"Büyükçe" sözcüğü sıfat olarak kullanılır (Büyükçe bir ev). Maymuncuk, kedicik, bademcik ve gelincik isimdir (C ve E kalıplaşmış isimlerdir, D sıfattır).'
      },
      {
        id: 'q-is-3k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde yönelme hal eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evden erken çıktı.' },
          { id: 'B', text: 'Yarın Ankara\'ya gidiyorum.' },
          { id: 'C', text: 'Kedi koltukta uyuyor.' },
          { id: 'D', text: 'Defteri çantasına koydu mu?' },
          { id: 'E', text: 'Yüzü çok solgun görünüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ankara\'ya sözcüğündeki -ya (-a/-e) yönelme hal ekidir. D şıkkındaki çantasına kelimesinde de yönelme vardır fakat B şıkkı saf bir yönelme örneğidir (İyeliksiz).'
      },
      {
        id: 'q-is-3k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soyut isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Taş' },
          { id: 'B', text: 'Kum' },
          { id: 'C', text: 'Rüya' },
          { id: 'D', text: 'Ağaç' },
          { id: 'E', text: 'Cam' }
        ],
        correctOptionId: 'C',
        explanation: '"Rüya" beş duyu organımızla fiziksel olarak algılayamadığımız, zihinsel bir süreç olduğu için soyut isim kabul edilir.'
      }
    ]
  },
  {
    id: 'test-isimler-3-orta',
    title: 'İsimler 3 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (21-30)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-is-3m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Büyük evin pencereleri açıktı.' },
          { id: 'B', text: 'Öğrencilerin zorlu sınavı nihayet bitti.' },
          { id: 'C', text: 'Güzel günlerin hayaliyle yaşıyoruz.' },
          { id: 'D', text: 'Yaşlı adamın gözlükleri kaybolmuş.' },
          { id: 'E', text: 'Yolun sonu karanlık görünüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencilerin sınavı" belirtili isim tamlamasıdır. Araya giren "zorlu" sözcüğü tamlananın sıfatıdır.'
      },
      {
        id: 'q-is-3m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güneşin kavurucu sıcağı herkesi bunalttı.' },
          { id: 'B', text: 'Belediye başkanının makam odası yenilendi.' },
          { id: 'C', text: 'Yüksek dağların zirvesi her zaman karlıdır.' },
          { id: 'D', text: 'Köy yollarının bakımsız durumu düzeltilmeli.' },
          { id: 'E', text: 'Çocuğun yırtık ayakkabısı değiştirildi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Belediye başkanının makam odası" en az üç ismin (belediye, başkan, makam, oda) birbirini tamlamasıyla oluşmuş zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-3m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi iyelik eki almamıştır?',
        options: [
          { id: 'A', text: '_Gözlerin_ uzağa daldı gitti.' },
          { id: 'B', text: '_Defteri_ masanın üzerinde kalmış.' },
          { id: 'C', text: '_Arabası_ geçen yıl bozulmuştu.' },
          { id: 'D', text: 'Bugün _evi_ iyice temizledik.' },
          { id: 'E', text: '_Saçları_ rüzgarda savruluyordu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Evi" kelimesindeki -i eki, "neyi temizledik?" sorusuna cevap verdiği için belirtme hal ekidir. Diğerleri (senin gözlerin, onun defteri, onun arabası, onun saçları) iyelik ekidir.'
      },
      {
        id: 'q-is-3m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde soyutlaşma görülmektedir?',
        options: [
          { id: 'A', text: 'Geniş bir ev satın aldılar.' },
          { id: 'B', text: 'Bu işte onun da parmağı var.' },
          { id: 'C', text: 'Kırık bardağı çöpe attı.' },
          { id: 'D', text: 'Rüzgarın sesi geceleri artar.' },
          { id: 'E', text: 'Yüksek duvarlı bir bahçesi vardı.' }
        ],
        correctOptionId: 'B',
        explanation: '"Parmak" somut bir organ ismidir, ancak cümlede "katkı, ilgi, pay" anlamında soyutlaşarak kullanılmıştır.'
      },
      {
        id: 'q-is-3m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-den/-dan" eki tamlayan eki (-ın/-in) işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gürültüden uyanıp etrafa baktı.' },
          { id: 'B', text: 'Sabahtan akşama kadar ders çalıştı.' },
          { id: 'C', text: 'Gelenlerden birkaçı yer bulamadı.' },
          { id: 'D', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'E', text: 'Gözden ırak olan gönülden de ırak olur.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gelenlerden birkaçı" tamlaması "Gelenlerin birkaçı" anlamındadır, bu yüzden -den eki tamlayan eki yerine kullanılmıştır.'
      },
      {
        id: 'q-is-3m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde topluluk ismine yer verilmemiştir?',
        options: [
          { id: 'A', text: 'Jüri yarışmacıları tek tek değerlendirdi.' },
          { id: 'B', text: 'Ordumuz düşmanı yenilgiye uğrattı.' },
          { id: 'C', text: 'Kuşlar gökyüzünde süzülüyordu.' },
          { id: 'D', text: 'Meclis bütçe görüşmeleri için toplandı.' },
          { id: 'E', text: 'Ailemiz bu pazar pikniğe gidecek.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kuşlar" sözcüğü çokluk eki almış bir cins isimdir, topluluk ismi değildir. Diğerleri (jüri, ordu, meclis, aile) topluluk ismidir.'
      },
      {
        id: 'q-is-3m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki almış bir kelime vardır?',
        options: [
          { id: 'A', text: 'Sevgi her kapıyı açar.' },
          { id: 'B', text: 'Gözlükçüden yeni bir çerçeve aldım.' },
          { id: 'C', text: 'Çocuklar bahçede oyun oynuyor.' },
          { id: 'D', text: 'Dünkü sınav oldukça kolaydı.' },
          { id: 'E', text: 'Bahar mevsimi insanı mutlu eder.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözlükçü" kelimesi, "göz" isminden "-lük" ekiyle gözlük (isim), ardından "-çü" ekiyle gözlükçü (isim) olmuştur. İki tane isimden isim yapım eki almıştır.'
      },
      {
        id: 'q-is-3m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Arabanın kapısı sertçe kapandı.' },
          { id: 'B', text: 'Sözleri beni çok kırdı.' },
          { id: 'C', text: 'Deniz kokusu insana iyi gelir.' },
          { id: 'D', text: 'Evin bahçesi güllerle doluydu.' },
          { id: 'E', text: 'Yolun sonu ormana çıkıyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sözleri" kelimesinin başında "(onun) sözleri" veya "(senin) sözlerin" gibi bir tamlayan vardır ancak yazılmamıştır. Bu duruma tamlayanı düşmüş isim tamlaması denir.'
      },
      {
        id: 'q-is-3m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcük iyelik eki almamıştır?',
        options: [
          { id: 'A', text: '_Aklı_ bir karış havadaydı.' },
          { id: 'B', text: '_Sesi_ odanın her yerinden duyuluyordu.' },
          { id: 'C', text: 'Bu güzel _şiiri_ sana yazdım.' },
          { id: 'D', text: '_Defteri_ evde unutmuşum.' },
          { id: 'E', text: 'Onun _arabası_ yolda kalmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Şiiri" sözcüğündeki -i belirtme (yükleme) hal ekidir (Neyi yazdım? Şiiri). D şıkkındaki defteri kelimesi de belirtme hal ekidir, C ve D şıkkı ikisi de iyelik almamıştır, ancak D şıkkındaki cümlede "(benim) defterim" gibi iyelik olmadığı açıktır. Sınavlarda en belirgin örnekler (bu şiiri - belirtme sıfatı + isim + hal eki) istenir. Cevap C.'
      },
      {
        id: 'q-is-3m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde bulunma hal eki (-de/-da) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Senden daha güzelini görmedim.' },
          { id: 'B', text: 'Kitapta çok ilginç bilgiler var.' },
          { id: 'C', text: 'Eve geç saatte döneceğim.' },
          { id: 'D', text: 'Gözleri yorgunluktan kızarmıştı.' },
          { id: 'E', text: 'Yüzüme bakıp gülümsedi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kitap-ta" sözcüğündeki -ta (-da/-de) bulunma hal ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-3-zor',
    title: 'İsimler 3 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (21-30)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-is-3z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı zamir olan bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Köyün yaşlıları meydanda toplandı.' },
          { id: 'B', text: 'Benim hayallerim hiçbir zaman bitmez.' },
          { id: 'C', text: 'Evin büyük salonu çok aydınlıktı.' },
          { id: 'D', text: 'Çocuğun kırılan oyuncağı çöpe atıldı.' },
          { id: 'E', text: 'Arabanın arka lastiği patlamış.' }
        ],
        correctOptionId: 'B',
        explanation: '"Benim hayallerim" isim tamlamasında tamlayan olan "benim", kişi zamiridir.'
      },
      {
        id: 'q-is-3z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Sesi yankılandı derin vadilerde dağların.' },
          { id: 'B', text: 'Eski ahşap evin pencereleri açıktı.' },
          { id: 'C', text: 'Gözlerinin rengini denizden almışsın.' },
          { id: 'D', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'E', text: 'Yolun sonuna geldiğimizde hava kararmıştı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Dağların sesi" isim tamlamasıdır. Cümlede "Sesi yankılandı... dağların" şeklinde tamlayan (dağların) ile tamlanan (sesi) yer değiştirmiştir.'
      },
      {
        id: 'q-is-3z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim tamlaması sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar yorgunluğu herkesi etkiledi.' },
          { id: 'B', text: 'Gül kurusu renginde bir elbise almış.' },
          { id: 'C', text: 'Evin demir kapısı gıcırdayarak açıldı.' },
          { id: 'D', text: 'Dağ havası bize çok iyi geldi.' },
          { id: 'E', text: 'Gözlerinin içi parlıyordu mutluluktan.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gül kurusu" belirtisiz isim tamlamasıdır. "Gül kurusu elbise" tamlamasında elbise ismini niteleyerek sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-3z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi türemiş bir isim değildir?',
        options: [
          { id: 'A', text: 'Büyük bir _korku_ içindeydi.' },
          { id: 'B', text: 'İçindeki _sevgi_ hiçbir zaman tükenmedi.' },
          { id: 'C', text: 'Dünkü sınavın _soruları_ çok kolaydı.' },
          { id: 'D', text: 'Bahçedeki _çiçekler_ rengarenk açmıştı.' },
          { id: 'E', text: 'Yazarın son kitabındaki _anlatım_ etkileyiciydi.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çiçekler" kelimesi sadece çoğul eki (-ler) almıştır, yapım eki almamıştır; bu nedenle basit isimdir. Diğerleri (korkmaktan korku, sevmekten sevgi, sormaktan soru, anlatmaktan anlatım) türemiştir.'
      },
      {
        id: 'q-is-3z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir tamlanan, birden fazla tamlayana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Kitabın ve defterin yaprakları yırtılmış.' },
          { id: 'B', text: 'Öğretmenin kalemi, silgisi kayboldu.' },
          { id: 'C', text: 'Evin kapısı, penceresi boyanacak.' },
          { id: 'D', text: 'Adamın ceketi, pantolonu çok eskiydi.' },
          { id: 'E', text: 'Çocuğun defteri, kitabı çantadaydı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kitabın (tamlayan) ve defterin (tamlayan) yaprakları (tamlanan)" şeklinde iki tamlayan bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-3z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim tamlamasının arasına hem niteleme hem de belirtme sıfatı girmiştir?',
        options: [
          { id: 'A', text: 'Evin büyük, ahşap kapısı kırıldı.' },
          { id: 'B', text: 'Adamın şu eski paltosu çok konuşuldu.' },
          { id: 'C', text: 'Çocuğun kırmızı, yün kazağı yıkanacak.' },
          { id: 'D', text: 'Okulun geniş bahçesinde toplandık.' },
          { id: 'E', text: 'Şehrin karanlık ve dar sokaklarında kayboldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tamlama: Adamın paltosu. Araya giren "şu" (işaret/belirtme sıfatı) ve "eski" (niteleme sıfatı) sözcükleridir.'
      },
      {
        id: 'q-is-3z-7',
        difficulty: 'hard',
        questionText: 'İsim tamlamalarında tamlanan düşebilir. Bu durumda tamlayan cümlede tek başına kalır. Aşağıdakilerin hangisinde bu kullanıma uygun bir örnek vardır?',
        options: [
          { id: 'A', text: 'Bütün bu eşyalar kardeşimindir.' },
          { id: 'B', text: 'Onun söylediği yalanlara inanmıyorum.' },
          { id: 'C', text: 'Bizim evin bahçesi çok geniştir.' },
          { id: 'D', text: 'Benim kitabım masanın üstünde kalmış.' },
          { id: 'E', text: 'Senin sözlerin bana güç verdi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kardeşimindir" kelimesinde tamlanan (kardeşimin eşyasıdır) düşmüştür. Tamlayan tek başına kalmıştır.'
      },
      {
        id: 'q-is-3z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem belirtili isim tamlaması hem de sıfat tamlaması iç içe geçmiştir?',
        options: [
          { id: 'A', text: 'Eski şehrin dar sokaklarında yürüdük.' },
          { id: 'B', text: 'Güneş ışığı odanın içini aydınlattı.' },
          { id: 'C', text: 'Bahar yağmuru toprağa can verdi.' },
          { id: 'D', text: 'Masa örtüsü tamamen kirlenmişti.' },
          { id: 'E', text: 'Köy yolları çok bozuktu.' }
        ],
        correctOptionId: 'A',
        explanation: '"Şehrin sokakları" belirtili isim tamlamasıdır. "Eski şehir" ve "dar sokaklar" ise sıfat tamlamasıdır. Bu yapı tamlayanı ve tamlananı sıfat almış belirtili isim tamlamasıdır.'
      },
      {
        id: 'q-is-3z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir isim bulunma hal eki almıştır?',
        options: [
          { id: 'A', text: 'Gece vakti ormanda kaybolduk.' },
          { id: 'B', text: 'Gürültüde birbirimizin sesini duyamadık.' },
          { id: 'C', text: 'Suyun şırıltısı ruhumuzu dinlendirdi.' },
          { id: 'D', text: 'Kuşların cıvıltısıyla uyandık.' },
          { id: 'E', text: 'Kapının gıcırtısı herkesi rahatsız etti.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gürültü" yansımadan türemiş bir isimdir ve cümlede "-de" bulunma hal ekini almıştır.'
      },
      {
        id: 'q-is-3z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde değildir?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ birlikte çözeceğiz.' },
          { id: 'B', text: 'Dışarıda fırtınalı bir _hava_ var.' },
          { id: 'C', text: 'Dün akşam _yalnız_ dolaştım.' },
          { id: 'D', text: '_Sessizlik_ her yeri kaplamıştı.' },
          { id: 'E', text: 'Onun en büyük _hayali_ yazar olmaktı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" sözcüğü dolaşmak fiilini nitelediği için bu cümlede zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      }
    ]
  }
];
