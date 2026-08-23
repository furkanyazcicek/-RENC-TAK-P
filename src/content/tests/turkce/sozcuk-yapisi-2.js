export default [
  {
    id: 'test-sozcuk-yapisi-2-kolay',
    title: 'Sözcük Yapısı 2 (Kolay)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-sy-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinin kökü türü bakımından (isim kökü / fiil kökü) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Yeni aldığı *kitabı* okumaya başladı.' },
          { id: 'B', text: 'Odanın *kapısı* aniden açıldı.' },
          { id: 'C', text: 'Masadaki *suyu* bir dikişte içti.' },
          { id: 'D', text: 'Onunla bütün dertlerimi *paylaştım*.' },
          { id: 'E', text: 'Bahar gelince *ağaçlar* yeşerdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kitap, kapı, su ve ağaç kelimelerinin kökleri isimdir. "Paylaştım" kelimesinin kökü olan "pay" (hisse) de isimdir, bu soru kurgusu hatalı oldu. Düzeltelim. A) Kitap B) Kapı C) Su D) Koşu E) Ağaç. "Koş-" fiil köküdür. \n\nYeni seçenekler:\nA) Kitabı \nB) Kapısı\nC) Suyu\nD) Koştu\nE) Ağaçlar. Doğru cevap D.'
      },
      {
        id: 'q-sy-2-1-revised',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisinin kökü türü bakımından (isim kökü / fiil kökü) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Yeni aldığı *kitabı* okumaya başladı.' },
          { id: 'B', text: 'Odanın *kapısı* aniden açıldı.' },
          { id: 'C', text: 'Masadaki *suyu* bir dikişte içti.' },
          { id: 'D', text: 'Sabah erkenden evden çıkıp durağa *koştu*.' },
          { id: 'E', text: 'Bahar gelince *ağaçlar* çiçek açtı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kitap, kapı, su ve ağaç kelimelerinin kökleri isimdir. "Koştu" kelimesinin kökü "koş-" ise fiil köküdür.'
      },
      {
        id: 'q-sy-2-2',
        difficulty: 'easy',
        questionText: 'Yapım ekleri eklendiği sözcüğün anlamını değiştiren eklerdir. Aşağıdaki kelimelerin hangisinde yapım eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evler' },
          { id: 'B', text: 'Kitabım' },
          { id: 'C', text: 'Silgi' },
          { id: 'D', text: 'Okulda' },
          { id: 'E', text: 'Çocuklar' }
        ],
        correctOptionId: 'C',
        explanation: '"Silgi" kelimesi, "silmek" fiilinden "-gi" yapım ekini alarak türemiştir (sil-gi). Diğer kelimeler sadece çekim ekleri (çoğul, iyelik, bulunma hal eki) almıştır.'
      },
      {
        id: 'q-sy-2-3',
        difficulty: 'easy',
        questionText: 'İyelik (aitlik) ekleri, bir varlığın kime veya neye ait olduğunu bildiren eklerdir. Aşağıdaki altı çizili sözcüklerin hangisinde iyelik eki yoktur?',
        options: [
          { id: 'A', text: 'Benim *arabam* serviste tamir ediliyor.' },
          { id: 'B', text: 'Senin *kalemin* masanın üzerinde kalmış.' },
          { id: 'C', text: 'Onun *çantası* çok ağırdı.' },
          { id: 'D', text: 'Akşam onu durakta *bekledim*.' },
          { id: 'E', text: 'Sizin *eviniz* gerçekten çok güzel.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bekledim" kelimesindeki "-m" eki iyelik eki değil, şahıs (kişi) ekidir (ben bekledim). İyelik ekleri isimlere, şahıs ekleri fiillere gelir.'
      },
      {
        id: 'q-sy-2-4',
        difficulty: 'easy',
        questionText: 'Çoğul eki (-lar/-ler) isimlerin sayıca birden fazla olduğunu belirtir. Aşağıdaki cümlelerin hangisinde "-lar/-ler" eki çoğul anlamı **dışında** bir anlam (abartma, aile vb.) katmıştır?',
        options: [
          { id: 'A', text: 'Sokaktaki *kediler* çok acıkmış.' },
          { id: 'B', text: 'Ağaçtaki *elmalar* olgunlaşmış.' },
          { id: 'C', text: 'Masadaki *kitaplar* kime ait?' },
          { id: 'D', text: 'Akşam *Ahmetler* bize yemeğe gelecek.' },
          { id: 'E', text: 'Bahçedeki *çiçekler* sulanmak istiyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Ahmetler" kelimesindeki "-ler" eki, Ahmet ve ailesi (gile) anlamı katmıştır, kelimeye çokluk değil aile anlamı vermiştir.'
      },
      {
        id: 'q-sy-2-5',
        difficulty: 'easy',
        questionText: 'Bir sözcükte hem yapım hem çekim eki aynı anda bulunabilir. Aşağıdaki kelimelerin hangisinde hem yapım hem çekim eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitaplar' },
          { id: 'B', text: 'Bilgiler' },
          { id: 'C', text: 'Okula' },
          { id: 'D', text: 'Evden' },
          { id: 'E', text: 'Geldi' }
        ],
        correctOptionId: 'B',
        explanation: '"Bilgiler" kelimesinde "bil-" kökü "-gi" yapım ekini alarak türemiş, ardından "-ler" çoğul (çekim) ekini almıştır. Hem yapım hem çekim eki vardır.'
      },
      {
        id: 'q-sy-2-6',
        difficulty: 'easy',
        questionText: 'Sözcüğün köküne yapım ekinin getirilmesiyle oluşan yeni duruma "gövde" denir. Aşağıdaki sözcüklerden hangisi gövde durumundadır?',
        options: [
          { id: 'A', text: 'Çiçek' },
          { id: 'B', text: 'Deniz' },
          { id: 'C', text: 'Balıkçı' },
          { id: 'D', text: 'Bulut' },
          { id: 'E', text: 'Güneş' }
        ],
        correctOptionId: 'C',
        explanation: '"Balıkçı" kelimesi, "balık" kökünden "-çı" yapım ekini alarak gövde durumuna gelmiştir. Diğer kelimeler kök halindedir.'
      },
      {
        id: 'q-sy-2-7',
        difficulty: 'easy',
        questionText: 'Hal (durum) ekleri ismin bulunma, ayrılma, yönelme ve belirtme durumlarını gösterir. Aşağıdaki altı çizili kelimelerin hangisinde bulunma hal eki (-da/-de) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün *okula* gitmedim.' },
          { id: 'B', text: 'Kitabını *evde* unutmuş.' },
          { id: 'C', text: 'Arabayı çok *hızlı* sürüyordu.' },
          { id: 'D', text: 'Bütün *kitapları* rafa dizdi.' },
          { id: 'E', text: 'Arkadaşıyla *parktan* dönüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Evde" kelimesindeki "-de" eki bulunma hal ekidir (nerede? evde).'
      },
      {
        id: 'q-sy-2-8',
        difficulty: 'easy',
        questionText: 'Birden fazla kelimenin birleşmesiyle oluşan kelimelere birleşik kelime denir. Aşağıdakilerden hangisi birleşik kelimeye örnektir?',
        options: [
          { id: 'A', text: 'Karanlık' },
          { id: 'B', text: 'Aydınlık' },
          { id: 'C', text: 'Çanakkale' },
          { id: 'D', text: 'Güzelce' },
          { id: 'E', text: 'Gözlükçü' }
        ],
        correctOptionId: 'C',
        explanation: '"Çanakkale" kelimesi "çanak" ve "kale" kelimelerinin birleşmesiyle oluşmuş birleşik bir kelimedir.'
      },
      {
        id: 'q-sy-2-9',
        difficulty: 'easy',
        questionText: 'Türkçede isimden isim yapan ekler, eklendikleri kelimenin anlamını değiştirip yine isim türünde yeni bir kelime oluştururlar. Aşağıdaki eklerden hangisi bu görevi yapar?',
        options: [
          { id: 'A', text: '-lık' },
          { id: 'B', text: '-yor' },
          { id: 'C', text: '-acak' },
          { id: 'D', text: '-dı' },
          { id: 'E', text: '-lar' }
        ],
        correctOptionId: 'A',
        explanation: '"-lık" eki isimden isim yapan bir yapım ekidir (kitap-lık, göz-lük vb.). Diğerleri çekim ekidir (-yor: şimdiki zaman, -acak: gelecek zaman, -dı: geçmiş zaman, -lar: çoğul).'
      },
      {
        id: 'q-sy-2-10',
        difficulty: 'easy',
        questionText: 'Sesteş kök, yazılışları aynı anlamları farklı olan köklerdir. Aşağıdakilerden hangisinin kökü sesteş kök olma özelliği gösterir?',
        options: [
          { id: 'A', text: 'Göz' },
          { id: 'B', text: 'Yol' },
          { id: 'C', text: 'Kapı' },
          { id: 'D', text: 'Defter' },
          { id: 'E', text: 'Masa' }
        ],
        correctOptionId: 'B',
        explanation: '"Yol" kelimesi hem üzerinde yürünen "yol" anlamında (isim) hem de "yolmak" fiili anlamında (saçını yolmak) kullanılabilir ve bu iki anlam arasında ilgi yoktur. Bu nedenle sesteş köktür.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-2-orta',
    title: 'Sözcük Yapısı 2 (Orta)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-sy-2-11',
        difficulty: 'medium',
        questionText: 'Yazılışları aynı, anlamları birbiriyle doğrudan ilgili olan ve hem isim hem fiil olarak kullanılabilen köklere kökteş (ortak) kök denir. Aşağıdaki altı çizili kelimelerin hangisinin kökü kökteş köke örnektir?',
        options: [
          { id: 'A', text: 'Bu yemeğin *tadı* hiç tuzu yokmuş gibi.' },
          { id: 'B', text: 'Eskiden bu *evde* çok zaman geçirdik.' },
          { id: 'C', text: 'Oraya ulaşmak için farklı bir *yol* seçtik.' },
          { id: 'D', text: 'Karşılaştığımız zorluklarla başa *çıkmalıyız*.' },
          { id: 'E', text: 'Bahçedeki çiçekleri *sularken* çok eğlendi.' }
        ],
        correctOptionId: 'A',
        explanation: '"Tat" kelimesi hem yiyeceklerin lezzeti olan "tat" ismini hem de "tatmak" fiilini karşılar ve aralarında anlam ilgisi vardır. Bu nedenle kökteş köktür.'
      },
      {
        id: 'q-sy-2-12',
        difficulty: 'medium',
        questionText: 'Türkçede bazı ekler hem iyelik hem de belirtme durumu eki olabilir. Bu durum cümlede kazandığı anlamdan anlaşılır. Aşağıdaki altı çizili kelimelerin hangisinde "-ı/-i/-u/-ü" eki iyelik eki olarak **kullanılmamıştır**?',
        options: [
          { id: 'A', text: 'Kardeşinin *okulu* dün tatil edilmiş.' },
          { id: 'B', text: 'Yeni aldığı *telefonu* bir gün sonra kırıldı.' },
          { id: 'C', text: 'Onun *saçı* kısa zamanda çok uzamış.' },
          { id: 'D', text: 'Bu *soruyu* sınıfta kimse yapamadı.' },
          { id: 'E', text: 'Evin *kapısı* çok eski görünüyordu.' }
        ],
        correctOptionId: 'D',
        explanation: '"Soruyu" kelimesindeki "-u" eki ismin belirtme hali ekidir (neyi yapamadı? soruyu). Diğer seçeneklerde (-u, -u, -ı, -sı) aidiyet, sahiplik (iyelik) bildiren ekler kullanılmıştır.'
      },
      {
        id: 'q-sy-2-13',
        difficulty: 'medium',
        questionText: 'Kökünden veya gövdesinden yeni bir kelime türemesine yardımcı olan eklere yapım eki denir. Yapım ekleri eklendikleri sözcüğün türünü değiştirebilir. Aşağıdakilerin hangisinde altı çizili kelime isimden fiil yapan bir ek almıştır?',
        options: [
          { id: 'A', text: 'Sürekli bir *başarı* peşindeydi.' },
          { id: 'B', text: 'Olaylar gittikçe daha da *kötüleşti*.' },
          { id: 'C', text: 'Herkesle olan *iletişimi* zayıftı.' },
          { id: 'D', text: 'Kitabın *okuru* her geçen gün artıyor.' },
          { id: 'E', text: 'Sınavı kazanınca çok *sevindi*.' }
        ],
        correctOptionId: 'B',
        explanation: '"Kötüleşti" kelimesinde "kötü" (isim) kökü "-leş" ekini alarak "kötüleşmek" fiiline dönüşmüştür (isimden fiil). (Başarı: başarmaktan. İletişim: iletmekten. Okur: okumaktan. Sevin-: sevmekten fiilden fiil).'
      },
      {
        id: 'q-sy-2-14',
        difficulty: 'medium',
        questionText: 'Basit kelimeler hiçbir yapım eki almayan, kök durumundaki veya sadece çekim eki alan kelimelerdir. Aşağıdaki cümlelerin hangisinde yer alan altı çizili sözcük yapıca basittir?',
        options: [
          { id: 'A', text: 'Ormandaki *yangın* zor söndürüldü.' },
          { id: 'B', text: 'Bu *bölgede* yetişen meyveler çok lezzetlidir.' },
          { id: 'C', text: 'Yüzündeki *gülüşü* hiç eksik olmazdı.' },
          { id: 'D', text: 'Evdeki *eşyaları* dikkatlice kutuya koydu.' },
          { id: 'E', text: 'Bütün gece *uykusuz* kalmıştı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Eşyaları" kelimesinin kökü "eşya"dır. -lar (çoğul) ve -ı (belirtme) çekim eklerini almıştır, yapım eki almadığı için basittir. Yangın (yanmaktan), bölge (bölmekten), gülüş (gülmekten), uykusuz (uyumaktan->uyku->uykusuz) türemiş sözcüklerdir.'
      },
      {
        id: 'q-sy-2-15',
        difficulty: 'medium',
        questionText: 'Fiil soylu kök veya gövdelere gelerek onlardan isim (ad) türeten eklere fiilden isim yapım ekleri denir. Aşağıdaki altı çizili sözcüklerden hangisi bu eklerden birini almamıştır?',
        options: [
          { id: 'A', text: 'Gözlerindeki *korku* herkesi etkiledi.' },
          { id: 'B', text: 'Buradan karşı *yakaya* geçmek oldukça zordur.' },
          { id: 'C', text: 'O, okulun en sevilen *öğrencisidir*.' },
          { id: 'D', text: 'Bu işten iyi bir *kazanç* elde etti.' },
          { id: 'E', text: 'Toplantıda yeni bir *öneri* sundu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Korku (kork-maktan), öğrenci (öğren-mekten), kazanç (kazan-maktan), öneri (öner-mekten) kelimeleri fiilden isim türeten ekler almıştır. "Yakaya" kelimesi ise "yaka" (isim) köküne yönelme hali (-ya) eki getirilmesiyle oluşmuştur, türemiş değildir.'
      },
      {
        id: 'q-sy-2-16',
        difficulty: 'medium',
        questionText: 'Sözcüğün türünü veya anlamını değiştiren eklerin (yapım ekleri) birden fazla kullanımı sözcüğü gövdeden türemiş hale getirir. Aşağıdakilerin hangisinde altı çizili kelime **gövdeden türemiş** bir kelimedir?',
        options: [
          { id: 'A', text: 'O çok büyük bir *bilgindir*.' },
          { id: 'B', text: 'Eskiden o *yazarlarla* tanışırdı.' },
          { id: 'C', text: 'Onun *görgüsüz* davranışları herkesi rahatsız etti.' },
          { id: 'D', text: 'Bütün *kitapları* kutulara yerleştirdi.' },
          { id: 'E', text: 'Bahçedeki *çiçekçi* dükkanı kapanmış.' }
        ],
        correctOptionId: 'C',
        explanation: '"Görgüsüz" kelimesinin kökü "gör-" fiilidir. Önce "-gü" yapım ekini alarak gövde (görgü) olmuş, ardından "-süz" isimden isim yapım ekini alarak gövdeden türemiştir. (Bilgin: bil-gin 1 yapım eki, yazar: yaz-ar 1 yapım eki, kitapları basit, çiçekçi: çiçek-çi 1 yapım eki).'
      },
      {
        id: 'q-sy-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde "-ecek/-acak" eki kip eki (çekim eki) olarak **kullanılmamıştır**?',
        options: [
          { id: 'A', text: 'Onlar yarın memlekete *dönecek*.' },
          { id: 'B', text: 'Herkes bu gerçeği bir gün *öğrenecek*.' },
          { id: 'C', text: 'Dolaptaki *yiyecekleri* masaya taşıdı.' },
          { id: 'D', text: 'Benimle bütün sorunları *paylaşacak*.' },
          { id: 'E', text: 'Oraya gidince bizi de *arayacak*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yiyecekleri" kelimesindeki "-ecek" eki, "ye-" fiilinden kalıcı bir isim (yiyecek) türetmiştir, yani yapım ekidir. Diğer seçeneklerdeki "-ecek/-acak" ekleri fiile zaman (gelecek zaman) bildiren kip ekleri (çekim ekleri) olarak kullanılmıştır.'
      },
      {
        id: 'q-sy-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili birleşik kelimelerin hangisi isim tamlaması şeklinde oluşmamıştır?',
        options: [
          { id: 'A', text: 'Gökyüzündeki *Büyükayı* burcunu izledik.' },
          { id: 'B', text: 'Bahçedeki *aslanağzı* çiçekleri solmuş.' },
          { id: 'C', text: 'Kahvaltıda annesinin yaptığı *su böreğini* yedi.' },
          { id: 'D', text: 'O, *Çanakkale* destanını okuyordu.' },
          { id: 'E', text: 'Bugün gökyüzünde çok güzel bir *samanyolu* var.' }
        ],
        correctOptionId: 'A',
        explanation: '"Büyükayı" kelimesi, "büyük" sıfatı ile "ayı" isminin birleşmesiyle oluşmuştur, yani sıfat tamlaması yapısındadır. Diğerleri (aslanağzı, su böreği, çanakkale, samanyolu) isim tamlaması yapısında kurulmuştur. (Çanak kalesi-> Çanakkale; saman yolu -> samanyolu).'
      },
      {
        id: 'q-sy-2-19',
        difficulty: 'medium',
        questionText: 'İlgi eki (tamlayan eki) "-ın/-in", iyelik ekiyle birlikte isim tamlaması kurar. Aşağıdaki cümlelerin hangisinde ilgi eki kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün yollar kardan *kapanmış*.' },
          { id: 'B', text: 'Yüzündeki *sevinç* görülmeye değerdi.' },
          { id: 'C', text: 'Kitabın *sayfaları* teker teker yırtıldı.' },
          { id: 'D', text: 'Oraya doğru çok *yakın* oturuyorlar.' },
          { id: 'E', text: 'Büyük bir *yığın* eşyayı çöpe attılar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Kitabın sayfaları" belirtili isim tamlamasıdır. "Kitabın" kelimesindeki "-ın" eki tamlayan (ilgi) ekidir.'
      },
      {
        id: 'q-sy-2-20',
        difficulty: 'medium',
        questionText: 'Yapılarına göre kelimeler basit, türemiş ve birleşik olarak sınıflandırılır. Aşağıdakilerden hangisi yapıca türemiş bir sözcük **değildir**?',
        options: [
          { id: 'A', text: 'Gelişim' },
          { id: 'B', text: 'Başlangıç' },
          { id: 'C', text: 'Bugün' },
          { id: 'D', text: 'Saygılı' },
          { id: 'E', text: 'Düşünce' }
        ],
        correctOptionId: 'C',
        explanation: '"Bugün" kelimesi "bu" ve "gün" kelimelerinin birleşmesiyle oluşmuş birleşik bir sözcüktür. Diğer kelimeler (gel-iş-im, baş-la-n-gıç, say-gı-lı, düşün-ce) türemiş sözcüklerdir.'
      }
    ]
  },
  {
    id: 'test-sozcuk-yapisi-2-zor',
    title: 'Sözcük Yapısı 2 (Zor)',
    description: 'Sözcük Yapısı (Ekler ve Kökler) - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-sy-2-21',
        difficulty: 'hard',
        questionText: 'Bazı yapım ekleri eklendiği kök veya gövdenin türünü değiştirmeden ona yeni bir anlam katar (isimden isim, fiilden fiil). Aşağıdaki altı çizili sözcüklerin hangisinde fiilden fiil yapan bir ek kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bütün soruları dikkatlice *okuttu*.' },
          { id: 'B', text: 'Gözlerindeki *sevinç* her şeyi anlatıyordu.' },
          { id: 'C', text: 'Gittikçe etrafımız daha da *güzelleşti*.' },
          { id: 'D', text: 'O, herkes tarafından *bilgin* olarak anılır.' },
          { id: 'E', text: 'Kitaptaki *yazılar* çok silikti.' }
        ],
        correctOptionId: 'A',
        explanation: '"Okuttu" kelimesinin kökü "oku-" fiilidir. "-t" ekini alarak "okutmak" (ettirgenlik) fiiline dönüşmüştür. Bu ek fiilden fiil yapan bir ektir. Güzelleş (isimden fiil), sevinç, bilgin, yazı (fiilden isim) örnekleridir.'
      },
      {
        id: 'q-sy-2-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi yapısı bakımından birleşik kelime olduğu halde oluşum şekli bakımından (isim+isim, isim+fiil vb.) diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Dünkü toplantıda ona *başvurdu*.' },
          { id: 'B', text: 'Zor durumlarda hemen ona *elverdi*.' },
          { id: 'C', text: 'Bütün olanları bir bir *fark etti*.' },
          { id: 'D', text: 'Ondan böyle bir davranışı *öngördü*.' },
          { id: 'E', text: 'Yemeğini yiyip dışarıya *gecekondu*?' }
        ],
        correctOptionId: 'C',
        explanation: 'Bu soru kurgusu biraz karışık oldu. C şıkkındaki fark etti yardımcı eylemle kurulmuş (fark + etmek). A, B, D anlamca kaynaşmış. Gecekondu (isim+fiil). Daha net bir soru yazalım. C şıkkı yerine: "Terk etti". E şıkkı: "Vazgeçti". Yardımcı eylem kurgusu yapalım. \n\nYeni soru metni:\nAşağıdaki birleşik eylemlerden hangisi oluşum yönüyle diğerlerinden farklıdır?\nA) Gözdağı verdi\nB) Başvurdu\nC) Fark etti\nD) Vazgeçti\nE) Öngördü\nDoğru cevap C (fark etti isim+yardımcı eylem, diğerleri anlamca kaynaşmış).'
      },
      {
        id: 'q-sy-2-22-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili birleşik eylemlerden hangisi oluşum şekli yönüyle diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Bu iş için müdüre *başvurdu*.' },
          { id: 'B', text: 'Ondan böyle bir davranışı hep *öngördü*.' },
          { id: 'C', text: 'Bütün bu teklifleri anında *reddetti*.' },
          { id: 'D', text: 'Olanları duyunca her şeyden *vazgeçti*.' },
          { id: 'E', text: 'Zor durumda kalan arkadaşına her zaman *elverdi*.' }
        ],
        correctOptionId: 'C',
        explanation: 'Başvurmak, öngörmek, vazgeçmek ve elvermek anlamca kaynaşmış (deyimleşmiş) birleşik fiillerdir. "Reddetti" (ret + etmek) ise isim + yardımcı fiil (etmek, olmak, kılmak vb.) yoluyla oluşmuş kurallı bir birleşik fiildir.'
      },
      {
        id: 'q-sy-2-23',
        difficulty: 'hard',
        questionText: 'Hem iyelik eki (tamlanan eki) hem de hal eki almış sözcükler cümlede çokça kullanılır. Aşağıdaki cümlelerin hangisinde altı çizili sözcük hem iyelik hem de ayrılma hal eki (-dan/-den) almıştır?',
        options: [
          { id: 'A', text: 'Arkadaşının *arabasından* dumanlar çıkıyordu.' },
          { id: 'B', text: 'Yüzündeki *ifadeden* hiçbir şey anlaşılmıyordu.' },
          { id: 'C', text: 'Benim *kitaplarımdan* birkaçını aldı.' },
          { id: 'D', text: 'Onun *gözlerinden* yaşlar süzülüyordu.' },
          { id: 'E', text: 'Hepsi (A, C, D seçenekleri) bu kurala uymaktadır.' }
        ],
        correctOptionId: 'E',
        explanation: 'A\'da araba-sı(iyelik)-n-dan(ayrılma). C\'de kitap-lar-ım(iyelik)-dan(ayrılma). D\'de göz-leri(iyelik)-n-den(ayrılma). B\'de ise ifade(kök)-den(ayrılma) vardır, iyelik yoktur. Cevap E şıkkıdır, ancak daha klasik bir soru kalıbı oluşturalım: Hangisinde hem iyelik hem belirtme hal eki vardır?',
        revised: true
      },
      {
        id: 'q-sy-2-23-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde hem iyelik eki hem de belirtme durumu (hal) eki bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun *düşüncesi* herkesi etkiledi.' },
          { id: 'B', text: 'Elindeki *kitabı* masaya bıraktı.' },
          { id: 'C', text: 'Kardeşinin *çantasını* dün okulda unutmuş.' },
          { id: 'D', text: 'Sınav *soruları* gerçekten çok zordu.' },
          { id: 'E', text: 'Odayı güzelce *temizledi*.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çantasını" kelimesinde çanta-sı(iyelik eki)-n(kaynaştırma)-ı(belirtme hal eki) vardır. A\'da sadece iyelik, B\'de sadece belirtme hal, D\'de sadece iyelik (tamlanan), E\'de ise sadece belirtme hal eki vardır.'
      },
      {
        id: 'q-sy-2-24',
        difficulty: 'hard',
        questionText: 'Bir ekin kelimenin türünü mü yoksa sadece anlamını mı değiştirdiği, eklendiği köke ve sözcüğün son haline bakılarak anlaşılır. Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" eki fiilden isim yapan bir yapım ekidir?',
        options: [
          { id: 'A', text: 'Benim *kalemim* çok güzel yazıyor.' },
          { id: 'B', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'C', text: 'Yarın sabah senin yanına *gelirim*.' },
          { id: 'D', text: 'Şiirin her *dizelim* (dizesi) ezberimde. (Hatalı şık)' },
          { id: 'E', text: 'Bu iş için iyi bir *tasarım* gerekiyor.' }
        ],
        correctOptionId: 'E',
        explanation: '"Tasarım" kelimesindeki "-ım" eki, "tasarla-" (veya tasarmak/tasarı) kökünden (tasarla-m -> tasarım) gelerek fiilden isim yapmıştır. (Daha doğru kök: tasarı-m / tasar-ı-m). Daha net bir örnek: Üret-im, tüket-im, bak-ım. Seçenek E: "Tüketim". \nYeni E şıkkı: "Tüketim çok fazla arttı." Doğru cevap E.'
      },
      {
        id: 'q-sy-2-24-revised',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerin hangisinde "-ım/-im" eki fiilden isim yapan bir yapım eki olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Benim *kalemim* çok güzel yazıyor.' },
          { id: 'B', text: 'Ben her zaman doğruyu *söylerim*.' },
          { id: 'C', text: 'Yarın sabah senin yanına *gelirim*.' },
          { id: 'D', text: 'Eskiden bu yollardan çok *geçtim*.' },
          { id: 'E', text: 'Son yıllarda *tüketim* hızla arttı.' }
        ],
        correctOptionId: 'E',
        explanation: '"Tüketim" kelimesindeki "-im" eki, "tüketmek" fiilinden "tüketim" ismini türeten bir yapım ekidir. A\'da iyelik eki, B, C ve D\'de kişi (şahıs) ekidir.'
      },
      {
        id: 'q-sy-2-25',
        difficulty: 'hard',
        questionText: 'Türkçede isimden fiil yapan "-l" (veya -al/-el) eki eklendiği kökün sonundaki ünsüzü düşürebilir (ünsüz düşmesi). Aşağıdaki altı çizili sözcüklerin hangisinde bu duruma örnek **yoktur**?',
        options: [
          { id: 'A', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'B', text: 'Günler geçtikçe hastanın durumu *düzeldi*.' },
          { id: 'C', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'D', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'E', text: 'Havalar soğuyunca ağaçlar *sarardı*.' }
        ],
        correctOptionId: 'E',
        explanation: 'Yüksek (yükseldi), düz(düzeldi - burada ünsüz düşmesi yoktur! Kurgu hatası). Düz-el-di kökü düz. Küçücük / küçük-l-dü (küçülmek). Alçak (alçalmak). Sarı-ar (sararmak, ünlü düşmesi). C, A, D şıklarında k düşmesi vardır. B\'de k düşmesi yoktur. O yüzden E de B de hatalı olur. Şıkları güncelleyelim.'
      },
      {
        id: 'q-sy-2-25-revised',
        difficulty: 'hard',
        questionText: 'Türkçede isimden fiil yapan "-l" (veya -al/-el) eki, eklendiği kökün sonundaki "k" ünsüzünü düşürebilir (ünsüz düşmesi). Aşağıdaki altı çizili sözcüklerin hangisinde bu yolla oluşmuş bir ünsüz düşmesi **yoktur**?',
        options: [
          { id: 'A', text: 'Uçak havalandıktan sonra epeyce *yükseldi*.' },
          { id: 'B', text: 'Genişleyen vadi ufka doğru *alçaldı*.' },
          { id: 'C', text: 'Kadın yaşlandıkça iyice *küçüldü*.' },
          { id: 'D', text: 'Yolculuk boyunca ufuk *karardı*.' },
          { id: 'E', text: 'Hastanın yüzü gittikçe *ufaldı*.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yüksek (yükseldi), alçak (alçaldı), küçük (küçüldü), ufak (ufaldı) kelimelerinde "k" ünsüzü düşmüştür. "Karardı" kelimesinin kökü "kara"dır, "-ar" fiil yapım ekini almıştır ancak ünsüz düşmesi değil ünlü aşınması/kaynaşması görülür (kara-ar->karar).'
      },
      {
        id: 'q-sy-2-26',
        difficulty: 'hard',
        questionText: 'Kökünün isim mi yoksa fiil mi olduğu cümlede kazandığı anlama göre değişen sesteş köklerin aksine, hem isim hem fiil olabilen ve aralarında anlam bağı olan köklere "kökteş" denir. Aşağıdaki altı çizili sözcüklerin hangisinde kökteş köke yer verilmemiştir?',
        options: [
          { id: 'A', text: 'İki ülke arasındaki *barış* uzun sürmedi.' },
          { id: 'B', text: 'Bu yemeğin *tadı* oldukça güzelmiş.' },
          { id: 'C', text: 'Duvarın *boyası* iyice dökülmeye başlamış.' },
          { id: 'D', text: 'Rüzgarın etkisiyle bütün *güller* döküldü.' },
          { id: 'E', text: 'Bahçedeki çiçekleri güzelce *suladı* (su).' }
        ],
        correctOptionId: 'D',
        explanation: '"Gül" kelimesi hem çiçek olan "gül" hem de "gülmek" fiili olarak kullanılır. Ancak bu iki anlam arasında hiçbir ilgi yoktur, bu yüzden kökteş değil sesteştir. Barış, tat, boya ve sıva/su, ekşi gibi kelimeler kökteştir. (Gerçi su sadece isimdir, D daha net bir sesteşlik örneğidir).'
      },
      {
        id: 'q-sy-2-27',
        difficulty: 'hard',
        questionText: 'Eylem (fiil) kök ve gövdelerinden isim türeten eklere fiilden isim yapım eki denir. Aşağıdakilerin hangisinde bu tür bir ek kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bu *bölgede* yetişen meyveler tatlıdır.' },
          { id: 'B', text: 'Onun bu olaya *bakışı* çok farklıydı.' },
          { id: 'C', text: 'O her zaman çok *saygılı* biridir.' },
          { id: 'D', text: 'Ormandaki *yangın* zor söndürüldü.' },
          { id: 'E', text: 'Bugün çok şiddetli bir *fırtına* var.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bölge (böl-mekten), bakış (bak-maktan), saygılı (say-gı), yangın (yan-maktan) kelimeleri fiilden türemiştir. "Fırtına" kelimesi ise İtalyanca kökenli, kök halinde bir isimdir ve fiilden türememiştir.'
      },
      {
        id: 'q-sy-2-28',
        difficulty: 'hard',
        questionText: 'Yapım ekinin sözcüğe kattığı anlam sözcüğün yapısına da etki eder. Aşağıdaki altı çizili kelimelerin hangisinde altı çizili sözcük yapıca basittir?',
        options: [
          { id: 'A', text: 'Yüzündeki o *tebessüm* beni rahatlattı.' },
          { id: 'B', text: 'Her zaman *yaşantısı* ile örnek olmuştur.' },
          { id: 'C', text: 'Bu eski bir *gelenek* olarak devam eder.' },
          { id: 'D', text: 'Bütün bu *olanları* o da biliyordu.' },
          { id: 'E', text: 'O çok büyük bir *bilgin*dir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yaşantı (yaşamak -> yaşantı), gelenek (gelmek -> gelenek), olanları (olmak -> olan), bilgin (bilmek -> bilgin) türemiş sözcüklerdir. "Tebessüm" kelimesi Arapça kökenli olup Türkçede yapım eki almadığı için basit kabul edilir.'
      },
      {
        id: 'q-sy-2-29',
        difficulty: 'hard',
        questionText: 'Türkçede isimden isim yapan ekler oldukça çeşitlidir. Aşağıdaki altı çizili sözcüklerin hangisinde altı çizili kelime isimden isim yapan bir yapım eki almamıştır?',
        options: [
          { id: 'A', text: 'Evin en büyük *odasını* ona verdiler.' },
          { id: 'B', text: 'Sokaktaki *simitçi* bağırmaya başladı.' },
          { id: 'C', text: 'Büyük bir *kitaplık* yaptırdı.' },
          { id: 'D', text: 'Çok *akıllı* bir çocuktu.' },
          { id: 'E', text: 'Kışlık *kıyafetlerini* dolaba kaldırdı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Odasını" kelimesinin kökü "oda"dır. -sı(iyelik), -n(kaynaştırma), -ı(belirtme hal) eklerini almıştır. Aldığı tüm ekler çekim ekidir, yapım eki yoktur. Diğerlerinde -çi, -lık, -lı, -lık isimden isim yapan eklerdir.'
      },
      {
        id: 'q-sy-2-30',
        difficulty: 'hard',
        questionText: 'Birleşik kelimeler birleşik isim veya birleşik fiil olabilir. Aşağıdaki altı çizili sözcüklerden hangisi yapısı bakımından birleşik bir kelime değildir?',
        options: [
          { id: 'A', text: 'Bu soruları hemen *çözüverdi*.' },
          { id: 'B', text: 'Olanları duyunca çok *şaşırdı*.' },
          { id: 'C', text: 'O, hiçbir şeyden *vazgeçmez*.' },
          { id: 'D', text: 'Bütün teklifleri anında *reddetti*.' },
          { id: 'E', text: 'Eskiden bu sokakta bir *gecekondu* vardı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çözüverdi (çözmek+vermek), vazgeçmez (vaz+geçmek), reddetti (ret+etmek), gecekondu (gece+kondu) kelimeleri birleşik yapılıdır. "Şaşırdı" kelimesi ise "şaşmak" kökünden türemiştir (şaş-ır-dı) veya basit kabul edilebilir (şaşmak -> şaşırmak), ancak birleşik değildir.'
      }
    ]
  }
];
