export default [
  {
    id: 'test-isimler-9-kolay',
    title: 'İsimler 9 (Kolay)',
    description: 'Sözcük Türleri İsimler - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-is-9k-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir kurum veya dernek adı (özel isim) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hafta sonu arkadaşlarla sinemaya gittik.' },
          { id: 'B', text: 'Yeşilay Derneği zararlı alışkanlıklarla mücadele eder.' },
          { id: 'C', text: 'Bu akşam Ahmet amcamlara misafirliğe gideceğiz.' },
          { id: 'D', text: 'Karadeniz bölgesinin ormanları çok sıktır.' },
          { id: 'E', text: 'Kedimiz Sarman dün gece kayboldu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Yeşilay Derneği" bir kurum/kuruluş adıdır ve özel isimdir.'
      },
      {
        id: 'q-is-9k-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi cins (tür) ismi değildir?',
        options: [
          { id: 'A', text: 'Yolun kenarındaki _ağaç_ kurumuş.' },
          { id: 'B', text: 'Elindeki _telefon_ oldukça eskiydi.' },
          { id: 'C', text: 'Yarın _İzmir\'e_ doğru yola çıkacağız.' },
          { id: 'D', text: 'Masanın üzerindeki _bardak_ kırıldı.' },
          { id: 'E', text: 'Bu eski _defter_ sana mı ait?' }
        ],
        correctOptionId: 'C',
        explanation: '"İzmir" bir şehir adıdır, dolayısıyla cins ismi değil özel isimdir.'
      },
      {
        id: 'q-is-9k-3',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir topluluk ismidir?',
        options: [
          { id: 'A', text: 'Kalemler' },
          { id: 'B', text: 'Sürü' },
          { id: 'C', text: 'Defter' },
          { id: 'D', text: 'Ağaçlar' },
          { id: 'E', text: 'Deniz' }
        ],
        correctOptionId: 'B',
        explanation: '"Sürü" sözcüğü biçimce tekil olmasına rağmen birden fazla hayvandan oluşan grubu anlattığı için topluluk ismidir.'
      },
      {
        id: 'q-is-9k-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisi çoğul isimdir?',
        options: [
          { id: 'A', text: 'Orman' },
          { id: 'B', text: 'Bölük' },
          { id: 'C', text: 'Kitaplar' },
          { id: 'D', text: 'Takım' },
          { id: 'E', text: 'Meclis' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitaplar" kelimesi çokluk eki (-lar) almıştır. Diğer kelimeler topluluk ismidir.'
      },
      {
        id: 'q-is-9k-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soyut bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Taşları üst üste dizerek duvar ördüler.' },
          { id: 'B', text: 'Onun içindeki keder hiçbir zaman bitmedi.' },
          { id: 'C', text: 'Güneş ışıkları camdan içeri süzülüyordu.' },
          { id: 'D', text: 'Deniz kenarında yürüyüş yapmak iyi gelir.' },
          { id: 'E', text: 'Rüzgar bugün çok sert esiyor.' }
        ],
        correctOptionId: 'B',
        explanation: '"Keder" beş duyu organıyla algılanamayan bir duygu olduğu için soyut isimdir. Diğerlerindeki nesneler (taş, güneş, ışık, deniz, rüzgar) somuttur.'
      },
      {
        id: 'q-is-9k-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtisiz isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Çocuğun sesi' },
          { id: 'B', text: 'Yolun sonu' },
          { id: 'C', text: 'Evin kapısı' },
          { id: 'D', text: 'Deniz suyu' },
          { id: 'E', text: 'Arabanın camı' }
        ],
        correctOptionId: 'D',
        explanation: '"Deniz suyu" tamlamasında tamlayan (deniz) ek almamış, tamlanan (suyu) ek almıştır. Bu yüzden belirtisiz isim tamlamasıdır.'
      },
      {
        id: 'q-is-9k-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi belirtili isim tamlamasıdır?',
        options: [
          { id: 'A', text: 'Masa örtüsü' },
          { id: 'B', text: 'Gözlük camı' },
          { id: 'C', text: 'Okulun bahçesi' },
          { id: 'D', text: 'Dağ havası' },
          { id: 'E', text: 'Kuş tüyü' }
        ],
        correctOptionId: 'C',
        explanation: '"Okulun bahçesi" tamlamasında hem tamlayan (-un) hem de tamlanan (-i) ek almıştır.'
      },
      {
        id: 'q-is-9k-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ismin bulunma (-de/-da) hal ekini almıştır?',
        options: [
          { id: 'A', text: 'Arkadaşımı _okulda_ bekliyorum.' },
          { id: 'B', text: 'Bunu sana daha önce _söyledim_.' },
          { id: 'C', text: 'Kardeşi yarın _eve_ dönecek.' },
          { id: 'D', text: 'Bütün _sözlerini_ dikkatle dinledim.' },
          { id: 'E', text: 'Onu dün akşam _yolda_ gördüm mü sandın? Hayır _görmedim_.' }
        ],
        correctOptionId: 'A',
        explanation: '"Okul-da" kelimesindeki -da eki bulunma hal ekidir.'
      },
      {
        id: 'q-is-9k-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi ismin ayrılma (çıkma) hal ekini (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Kitabımı çantama _koydum_.' },
          { id: 'B', text: 'Akşamları erken _uyurum_.' },
          { id: 'C', text: 'Sabahtan beri onu _bekliyoruz_.' },
          { id: 'D', text: 'Hızlıca _evden_ ayrıldı.' },
          { id: 'E', text: 'Bunu ona ben _söyledim_.' }
        ],
        correctOptionId: 'D',
        explanation: '"Ev-den" kelimesindeki -den eki ayrılma hal ekidir.'
      },
      {
        id: 'q-is-9k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde ismin yönelme hal eki (-e/-a) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabah erken uyandı.' },
          { id: 'B', text: 'Yüzü çok solgun görünüyordu.' },
          { id: 'C', text: 'Bunu senden hiç beklemezdim.' },
          { id: 'D', text: 'Hediyeyi arkadaşına verdi.' },
          { id: 'E', text: 'Defterini masada unutmuş.' }
        ],
        correctOptionId: 'D',
        explanation: '"Arkadaşına" sözcüğündeki son -a eki ismin yönelme hal ekidir.'
      }
    ]
  },
  {
    id: 'test-isimler-9-orta',
    title: 'İsimler 9 (Orta)',
    description: 'Sözcük Türleri İsimler - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-is-9m-1',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Evin kapısı sabaha kadar açık kalmış.' },
          { id: 'B', text: 'Senin sözlerin bana hep güven veriyor.' },
          { id: 'C', text: 'Arabası dün akşam yolda kalmış.' },
          { id: 'D', text: 'Köyün havası çok temiz ve serindir.' },
          { id: 'E', text: 'Şehrin kalabalığından uzaklaşmak istiyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Arabası" kelimesinin başında "onun" tamlayanı (onun arabası) vardır ancak cümlede yazılmamıştır.'
      },
      {
        id: 'q-is-9m-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzeller güzeli bir prenses varmış.' },
          { id: 'B', text: 'Eski eşyaları çatı katına kaldırdık.' },
          { id: 'C', text: 'Soğuk havalar yakında bastırır.' },
          { id: 'D', text: 'Büyük ağaçların gölgesinde oturduk.' },
          { id: 'E', text: 'Küçük çocuk annesine sıkıca sarıldı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Güzeller" sözcüğü "güzel kızlar/insanlar" sıfat tamlamasında ismin düşmesiyle adlaşmış sıfat olmuştur.'
      },
      {
        id: 'q-is-9m-3',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde zincirleme isim tamlaması kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'B', text: 'Çocuğun yeni aldığı oyuncak kırıldı.' },
          { id: 'C', text: 'Geniş caddelerin sonu karanlık.' },
          { id: 'D', text: 'Belediye başkanının makam odası yenilendi.' },
          { id: 'E', text: 'Eski mahallenin dar sokaklarında kaybolduk.' }
        ],
        correctOptionId: 'D',
        explanation: '"Belediye başkanının makam odası" üç ismin (belediye, başkan, makam, oda) oluşturduğu bir zincirleme isim tamlamasıdır.'
      },
      {
        id: 'q-is-9m-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki (-m), cümleye diğerlerinden farklı bir anlam (sevgi vb.) katmıştır?',
        options: [
          { id: 'A', text: 'Benim kitabım dün masada kaldı.' },
          { id: 'B', text: 'Kalemim nerede, gören oldu mu?' },
          { id: 'C', text: 'Canım kardeşim benim, seni çok özledim.' },
          { id: 'D', text: 'Defterimi çantamda bulamıyorum.' },
          { id: 'E', text: 'Arabam dün akşam bozuldu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Canım kardeşim" ifadesindeki -m iyelik eki, aitlikten çok sevgi ve şefkat anlamı katmıştır.'
      },
      {
        id: 'q-is-9m-5',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı zamir olan bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Senin sözlerin bana hep umut verdi.' },
          { id: 'B', text: 'Onun düşünceleri her zaman farklıdır.' },
          { id: 'C', text: 'Bunun şurası oldukça yıpranmış.' },
          { id: 'D', text: 'Bizim evimiz şehrin dışında kalıyor.' },
          { id: 'E', text: 'Gözlerinin rengi denizden alınmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bunun şurası" tamlamasında tamlayan (bu) ve tamlanan (şu) kelimeleri işaret zamiridir.'
      },
      {
        id: 'q-is-9m-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde somut bir isim soyut anlamda (soyutlaştırma) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Taş gibi sert bir ekmek yedik.' },
          { id: 'B', text: 'Soğuk bir su içmek boğazına iyi gelmedi.' },
          { id: 'C', text: 'O, hiçbir zaman bu kadar katı yürekli olmamıştı.' },
          { id: 'D', text: 'Güneş ışınları yüzünü yaktı.' },
          { id: 'E', text: 'Derin bir nefes alıp konuşmaya devam etti.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yürek" somut bir organken, cümlede "merhametsiz" anlamında kullanılarak soyutlaşmıştır.'
      },
      {
        id: 'q-is-9m-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı ile tamlananı arasına sözcük girmiş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Köy yollarının bakımsızlığı köylüleri zorluyor.' },
          { id: 'B', text: 'Adamın eski, yıpranmış paltosu dikkat çekiyordu.' },
          { id: 'C', text: 'Baharın müjdecisi çiçekler etrafı sardı.' },
          { id: 'D', text: 'Yeni kitabın sayfaları mis gibi kokuyordu.' },
          { id: 'E', text: 'Eski ahşap kapının kilidi bozulmuş.' }
        ],
        correctOptionId: 'B',
        explanation: '"Adamın paltosu" belirtili isim tamlamasıdır. Araya giren "eski, yıpranmış" sözcükleri tamlananın sıfatlarıdır.'
      },
      {
        id: 'q-is-9m-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde isimden isim yapım eki almış bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Simitçi sabah erkenden sokağa girdi.' },
          { id: 'B', text: 'Gözlükçü dükkanını yeni açmıştı.' },
          { id: 'C', text: 'Kitaplıkta birçok roman vardı.' },
          { id: 'D', text: 'Bahar mevsimi insana huzur verir.' },
          { id: 'E', text: 'Odunculuk zor bir meslektir.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki kelimelerin hiçbiri isimden isim yapım eki almamıştır. Diğerlerinde (simitçi, gözlükçü, kitaplık, odunculuk) isimden isim yapım eki vardır.'
      },
      {
        id: 'q-is-9m-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi küçültme ismidir?',
        options: [
          { id: 'A', text: '_Tepecik_ üzerinde küçük bir ev vardı.' },
          { id: 'B', text: '_Küçücük_ bir odada yaşıyorlar.' },
          { id: 'C', text: '_İncecik_ giyinince çok üşüdü.' },
          { id: 'D', text: '_Daracık_ sokaklardan geçtik.' },
          { id: 'E', text: '_Ufacık_ taşlar ayağıma battı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Tepecik" küçültme ismidir. Diğerlerindeki küçültmeli kelimeler sıfat görevindedir.'
      },
      {
        id: 'q-is-9m-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde yansımadan türemiş bir isim kullanılmıştır?',
        options: [
          { id: 'A', text: 'Rüzgar sert sert esiyordu.' },
          { id: 'B', text: 'Ağaçların yaprakları dökülüyor.' },
          { id: 'C', text: 'Kapının gıcırtısı yüzünden uyuyamadım.' },
          { id: 'D', text: 'Bütün gece gökyüzünü seyretti.' },
          { id: 'E', text: 'Sessizlik odayı bir anda kapladı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Gıcırtı" kelimesi yansıma bir ses olan "gıcır" kelimesinden türemiş bir isimdir.'
      }
    ]
  },
  {
    id: 'test-isimler-9-zor',
    title: 'İsimler 9 (Zor)',
    description: 'Sözcük Türleri İsimler - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-is-9z-1',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde tamlayanı ile tamlananı yer değiştirmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Gözlerinin rengi denizden almış ilhamını.' },
          { id: 'B', text: 'Senin bu hallerin beni çok üzüyor.' },
          { id: 'C', text: 'Kokusu sarıyor her yanı, taze demlenmiş çayın.' },
          { id: 'D', text: 'Bahar yağmurları toprağı uyandırır.' },
          { id: 'E', text: 'Karanlık gece sokakları kaplamıştı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tamlayan: "çayın", Tamlanan: "kokusu". Cümlede "Kokusu sarıyor... çayın" şeklinde yer değiştirerek kullanılmışlardır.'
      },
      {
        id: 'q-is-9z-2',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla tamlayan tek bir tamlanana bağlanmıştır?',
        options: [
          { id: 'A', text: 'Çocuğun yırtık ayakkabısı çöpe atıldı.' },
          { id: 'B', text: 'Öğrencinin kalemi, defteri ve silgisi masadaydı.' },
          { id: 'C', text: 'Dağların, taşların ve ovaların sessizliği huzur veriyor.' },
          { id: 'D', text: 'Baharın ve yazın güzellikleri bir başkadır.' },
          { id: 'E', text: 'C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'C şıkkında "Dağların, taşların ve ovaların (tamlayanlar) sessizliği (tamlanan)"; D şıkkında "Baharın ve yazın (tamlayanlar) güzellikleri (tamlanan)". Her ikisinde de birden fazla tamlayan tek bir tamlanana bağlanmıştır.'
      },
      {
        id: 'q-is-9z-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ayrılma hal eki (-den/-dan) tamlayan eki (-ın/-in) işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Korkudan bütün gece gözünü kırpmadı.' },
          { id: 'B', text: 'Sorulardan birkaçını yanlış okumuş.' },
          { id: 'C', text: 'Okuldan gelince hemen uyudu.' },
          { id: 'D', text: 'Şehirden ayrılalı çok uzun zaman oldu.' },
          { id: 'E', text: 'Eskiciden iki tane koltuk aldık.' }
        ],
        correctOptionId: 'B',
        explanation: '"Sorulardan birkaçı" ifadesi "soruların birkaçı" anlamındadır, bu yüzden -den eki tamlayan ekinin işlevini üstlenmiştir.'
      },
      {
        id: 'q-is-9z-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde isim tamlaması, cümlede başka bir ismin sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bahar mevsimi herkesi neşelendirdi.' },
          { id: 'B', text: 'Eski ahşap kapının kilidi bozulmuş.' },
          { id: 'C', text: 'Kül rengi bulutlar gökyüzünü kapladı.' },
          { id: 'D', text: 'Güneş gözlüğümü evde unuttum.' },
          { id: 'E', text: 'Yolun sonu oldukça karanlık görünüyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kül rengi" belirtisiz isim tamlamasıdır. Cümlede "bulutlar" ismini niteleyerek (Nasıl bulutlar? Kül rengi bulutlar) sıfat görevinde kullanılmıştır.'
      },
      {
        id: 'q-is-9z-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayanı düşmüş isim tamlaması cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Kardeşini okulun önünde bekliyorum.' },
          { id: 'B', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'C', text: 'Defteri masanın üzerinde kalmış.' },
          { id: 'D', text: 'Arabası dün akşam bozulmuş.' },
          { id: 'E', text: 'B, C ve D seçenekleri.' }
        ],
        correctOptionId: 'E',
        explanation: 'B şıkkında "Sözleri" (onun sözleri - özne). C şıkkında "Defteri" (onun defteri - özne). D şıkkında "Arabası" (onun arabası - özne). Üçünde de tamlayanı düşmüş isim tamlaması özne görevindedir.'
      },
      {
        id: 'q-is-9z-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem tamlayanı hem de tamlananı sıfat almış bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski mahallenin dar sokaklarında koşardık.' },
          { id: 'B', text: 'Şu çocuğun yırtık ayakkabısı yüreğimi burktu.' },
          { id: 'C', text: 'Yeni kitabın beyaz sayfaları parlıyordu.' },
          { id: 'D', text: 'Büyük ağacın serin gölgesinde dinlendik.' },
          { id: 'E', text: 'Bütün bu seçeneklerin hepsi.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bütün seçeneklerde hem tamlayan hem tamlanan sıfat almıştır (eski mahalle / dar sokaklar; şu çocuk / yırtık ayakkabı; yeni kitap / beyaz sayfalar; büyük ağaç / serin gölge).'
      },
      {
        id: 'q-is-9z-7',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi isim görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu _sorunu_ aşacağız.' },
          { id: 'B', text: 'İçeride büyük bir _sessizlik_ hakimdi.' },
          { id: 'C', text: 'Dışarıda çok soğuk bir _hava_ var.' },
          { id: 'D', text: 'Oraya _yalnız_ gitmeni istemiyorum.' },
          { id: 'E', text: 'Onun en büyük _hayali_ yazar olmaktı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü bu cümlede "gitmeni" fiilimsinin nasıl yapılacağını belirttiği için zarf görevindedir. Diğer altı çizili kelimeler isimdir.'
      },
      {
        id: 'q-is-9z-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlananı düşmüş bir isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Arabanın lastiği yolda patladı.' },
          { id: 'B', text: 'Bu güzel kitap benimdir.' },
          { id: 'C', text: 'Sözleri beni derinden yaraladı.' },
          { id: 'D', text: 'Onun en büyük amacı buydu.' },
          { id: 'E', text: 'Benim hayallerim hiçbir zaman bitmez.' }
        ],
        correctOptionId: 'B',
        explanation: '"Benimdir" kelimesi "benim kitabım(dır)" tamlamasında tamlananın (kitabım) düşmesiyle oluşmuştur.'
      },
      {
        id: 'q-is-9z-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim tamlaması zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Bahar mevsimi her yeri canlandırır.' },
          { id: 'B', text: 'Gece yarısı aniden uykudan uyandım.' },
          { id: 'C', text: 'Deniz kokusu insana huzur verir.' },
          { id: 'D', text: 'Yolun sonu karanlık görünüyordu.' },
          { id: 'E', text: 'Dağ havası ciğerlerimizi temizledi.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gece yarısı" belirtisiz isim tamlamasıdır. Cümlede "Ne zaman uyandım?" sorusuna yanıt verdiği için zaman zarfı (zarf tümleci) görevindedir.'
      },
      {
        id: 'q-is-9z-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yansımadan türemiş bir kelime ismin ayrılma (çıkma) hal ekini (-den/-dan) almıştır?',
        options: [
          { id: 'A', text: 'Sokakta büyük bir kalabalık vardı.' },
          { id: 'B', text: 'Kapının gıcırtısından uyuyamadım.' },
          { id: 'C', text: 'Kuşlar neşeyle cıvıldaşıyordu.' },
          { id: 'D', text: 'Rüzgarın uğultusu hepimizi korkutur.' },
          { id: 'E', text: 'Gürültüde birbirimizin sesini duyamadık.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gıcırtı" yansımadan türemiş bir isimdir ve "-dan" ayrılma hal ekini almıştır (gıcırtı-sın-dan).'
      }
    ]
  }
];
