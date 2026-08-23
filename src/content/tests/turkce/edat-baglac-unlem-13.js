export default [
  {
    id: 'test-ebu-13-kolay',
    title: 'Edat Bağlaç Ünlem 13 (Kolay)',
    description: 'Edat Bağlaç Ünlem - Kolay (121-130)',
    type: 'comprehension',
    order: 37,
    questions: [
      {
        id: 'q-ebu-13-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ve" bağlacı nesneleri bağlamıştır?',
        options: [
          { id: 'A', text: 'Kırmızı ve mavi kalemleri severdi.' },
          { id: 'B', text: 'Ali ve Ayşe birlikte derse çalıştılar.' },
          { id: 'C', text: 'Çantasını ve kitabını masada bıraktı.' },
          { id: 'D', text: 'Sessiz ve sakin bir yer arıyorum.' },
          { id: 'E', text: 'İçeri girdi ve hemen koltuğa oturdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "çantasını" ve "kitabını" kelimeleri belirtili nesnedir ve "ve" bağlacıyla birbirine bağlanmıştır.'
      },
      {
        id: 'q-ebu-13-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde seslenme bildiren bir ünlem kullanılmıştır?',
        options: [
          { id: 'A', text: 'Eyvah, ödevimi evde unuttum!' },
          { id: 'B', text: 'Tüh, maçı yine kaybettik.' },
          { id: 'C', text: 'Aman, bu sıcakta dışarı çıkılmaz.' },
          { id: 'D', text: 'Oh be, sonunda işler bitti.' },
          { id: 'E', text: 'Hey, oradaki adam buraya gel!' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Hey" kelimesi seslenme/dikkati çekme amacıyla kullanılan bir ünlemdir.'
      },
      {
        id: 'q-ebu-13-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "için" edatı cümleye sebep-sonuç (neden) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu kazağı sadece senin için aldım.' },
          { id: 'B', text: 'Sınavı kazanmak için çok çabalıyor.' },
          { id: 'C', text: 'Bunu annesi için özel olarak yaptırmış.' },
          { id: 'D', text: 'Çok yorulduğu için erken uyudu.' },
          { id: 'E', text: 'Benim için bunun hiçbir önemi yok.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde erken uyumasının nedeni "çok yorulması"dır. "İçin" edatı neden-sonuç ilgisi kurmuştur.'
      },
      {
        id: 'q-ebu-13-4',
        difficulty: 'easy',
        questionText: '"İle" sözcüğü aşağıdakilerin hangisinde bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hastaneye taksi ile gitmek zorunda kaldık.' },
          { id: 'B', text: 'Ahmet ile kardeşi yarın bize gelecekler.' },
          { id: 'C', text: 'Haberi büyük bir coşku ile kutladılar.' },
          { id: 'D', text: 'Yazılarını genellikle dolmakalem ile yazar.' },
          { id: 'E', text: 'Derslerini büyük bir dikkat ile dinliyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ile" sözcüğü yerine "ve" getirilebilmektedir (Ahmet ve kardeşi). Bu nedenle bağlaçtır.'
      },
      {
        id: 'q-ebu-13-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Baktım ki beni dinlemiyor, sustum.' },
          { id: 'B', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'C', text: 'Sanki bütün dünya üzerine geliyordu.' },
          { id: 'D', text: 'Karşıki dağlar duman duman olmuş.' },
          { id: 'E', text: 'Akşamki maç çok heyecanlıydı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "ki" bağlacı kullanılmıştır ve ayrı yazılmıştır. (C seçeneğindeki kalıplaşmıştır, B, D ve E seçeneklerindekiler sıfat yapan ki ekidir).'
      },
      {
        id: 'q-ebu-13-6',
        difficulty: 'easy',
        questionText: '"Kadar" edatı aşağıdakilerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Dağ kadar dert birikmiş içimde.' },
          { id: 'B', text: 'Cennet kadar güzel bir vatanımız var.' },
          { id: 'C', text: 'Senin kadar çalışkan birini daha görmedim.' },
          { id: 'D', text: 'Sabaha kadar hiç uyumadan çalıştık.' },
          { id: 'E', text: 'Avuç içi kadar bir evde kalıyorlar.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "sabaha kadar" öbeği eylemin ne zamana değin yapıldığını bildirerek cümleye zaman anlamı katmıştır.'
      },
      {
        id: 'q-ebu-13-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi edattır (ilgeçtir)?',
        options: [
          { id: 'A', text: 'Bugün hava yağmurlu *ve* soğuk.' },
          { id: 'B', text: 'Çok çalıştı *ancak* başarılı olamadı.' },
          { id: 'C', text: 'Bana *göre* bu işin sonu iyi değil.' },
          { id: 'D', text: 'Gelirim *ama* fazla durmam.' },
          { id: 'E', text: 'Ne kitap okudu *ne* gazete.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "göre" sözcüğü (-e göre) bir edattır. Diğer seçeneklerdeki kelimeler bağlaçtır.'
      },
      {
        id: 'q-ebu-13-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem bir acıma, üzüntü bildirmektedir?',
        options: [
          { id: 'A', text: 'Vah zavallı, ne hallere düşmüş!' },
          { id: 'B', text: 'Hey, çabuk buraya gelin!' },
          { id: 'C', text: 'Oh, sonunda sınavlar bitti!' },
          { id: 'D', text: 'Ey Türk gençliği!' },
          { id: 'E', text: 'Aaa, bu da nereden çıktı!' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Vah" kelimesi acıma ve üzüntü duygularını ifade eder.'
      },
      {
        id: 'q-ebu-13-9',
        difficulty: 'easy',
        questionText: '"Gibi" edatı aşağıdakilerin hangisinde cümleye benzetme anlamı katmamıştır?',
        options: [
          { id: 'A', text: 'Buz gibi havada dışarı çıkmışsın.' },
          { id: 'B', text: 'Melek gibi bir kalbi vardı.' },
          { id: 'C', text: 'Zil çaldığı gibi dışarı fırladı.' },
          { id: 'D', text: 'Pamuk gibi elleriyle beni sevdi.' },
          { id: 'E', text: 'Aslan gibi bir gençti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gibi" edatı eylemin hemen gerçekleştiğini (tezlik/zaman) bildirmiştir.'
      },
      {
        id: 'q-ebu-13-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Kitabı okudum fakat pek anlamadım.' },
          { id: 'B', text: 'Bu işten sadece o anlıyordu.' },
          { id: 'C', text: 'Hem çalışıyor hem de okuyor.' },
          { id: 'D', text: 'Seni de bizimle götürebiliriz.' },
          { id: 'E', text: 'Gelecektim lakin işim çıktı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "sadece" kelimesi edattır. Cümlede bağlaç yoktur.'
      }
    ]
  },
  {
    id: 'test-ebu-13-orta',
    title: 'Edat Bağlaç Ünlem 13 (Orta)',
    description: 'Edat Bağlaç Ünlem - Orta (121-130)',
    type: 'comprehension',
    order: 38,
    questions: [
      {
        id: 'q-ebu-13-11',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdakilerin hangisinde edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Seni bir ben anlarım bu dünyada.' },
          { id: 'B', text: 'Bana bir bardak su verir misin?' },
          { id: 'C', text: 'Bir gün yine buralara geleceğim.' },
          { id: 'D', text: 'Evde tek bir ekmek bile kalmamış.' },
          { id: 'E', text: 'Bir gece ansızın gelebilirim.' }
        ],
        correctOptionId: 'A',
        explanation: '"Bir" sözcüğü "sadece, tek" anlamına gelirse edattır. A seçeneğinde "Seni sadece ben anlarım" anlamındadır.'
      },
      {
        id: 'q-ebu-13-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çok çalıştı ama kazanamadı.' },
          { id: 'B', text: 'Bize doğru gelen bir adam gördüm.' },
          { id: 'C', text: 'Ne kitap okuyor ne televizyon izliyor.' },
          { id: 'D', text: 'Bugün ya sinemaya gidelim ya da tiyatroya.' },
          { id: 'E', text: 'Oraya gittim fakat onu bulamadım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "-e doğru" (Bize doğru) şeklinde yön bildiren bir edat kullanılmıştır. Diğer seçeneklerde bağlaçlar vardır.'
      },
      {
        id: 'q-ebu-13-13',
        difficulty: 'medium',
        questionText: '"Yalnız" kelimesi aşağıdaki cümlelerin hangisinde bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunca kalabalığın içinde yine yalnızdı.' },
          { id: 'B', text: 'Yalnız insanların hayatı daha zordur.' },
          { id: 'C', text: 'Sana inanıyorum yalnız bu işin sonu iyi değil.' },
          { id: 'D', text: 'O koca evde tamamen yalnız yaşıyordu.' },
          { id: 'E', text: 'Bu problemi yalnız Ali çözebilir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" sözcüğü "ama, fakat" anlamında kullanıldığında bağlaç olur. C seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-13-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" soru edatı cümleye zaman/koşul anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Akşam bize gelecek misiniz?' },
          { id: 'B', text: 'Bahar geldi mi her taraf yeşillenir.' },
          { id: 'C', text: 'Bu elbiseyi sen mi aldın?' },
          { id: 'D', text: 'Güzel mi güzel bir evleri var.' },
          { id: 'E', text: 'Beni arayan Ali miydi?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "mi" edatı "geldiği zaman, gelince" anlamı katarak zaman/koşul ilgisi kurmuştur.'
      },
      {
        id: 'q-ebu-13-15',
        difficulty: 'medium',
        questionText: '"İle" kelimesi aşağıdakilerin hangisinde cümleye durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'İşe her zaman otobüs ile gider.' },
          { id: 'B', text: 'Kapıyı büyük bir hızla açtı.' },
          { id: 'C', text: 'Arkadaşı ile ders çalıştı.' },
          { id: 'D', text: 'Annem ile babam çok iyi anlaşır.' },
          { id: 'E', text: 'Kalemle kağıt masanın üzerindeydi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "büyük bir hızla" ifadesi eylemin (açtı) nasıl yapıldığını yani durumunu bildiren bir zarf öbeği oluşturmuştur.'
      },
      {
        id: 'q-ebu-13-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlemden sonra cümlenin ilk harfi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Ah! Bu dertler bitmek bilmedi.' },
          { id: 'B', text: 'Eyvah! Anahtarımı içeride unuttum.' },
          { id: 'C', text: 'Tüh! Otobüsü yine kaçırdım.' },
          { id: 'D', text: 'Aman! ne hali varsa görsün.' },
          { id: 'E', text: 'Hey! Buraya bakar mısınız?' }
        ],
        correctOptionId: 'D',
        explanation: 'Ünlem işaretinden (!) sonra başlayan cümle büyük harfle başlamalıdır. D seçeneğinde "ne" kelimesi küçük harfle başlamıştır.'
      },
      {
        id: 'q-ebu-13-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı pekiştirme amacı taşımaktadır?',
        options: [
          { id: 'A', text: 'Anladım ki her şey boşunaymış.' },
          { id: 'B', text: 'Öyle kızgındı ki kimse yanına yaklaşamadı.' },
          { id: 'C', text: 'Erken kalk ki uçağa yetişebilesin.' },
          { id: 'D', text: 'Sen ki bu okulun en başarılı öğrencisisin...' },
          { id: 'E', text: 'Bir şey biliyor ki bu kadar rahat.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ki" bağlacı özneyi ("sen") vurgulamak, kuvvetlendirmek ve pekiştirmek için kullanılmıştır.'
      },
      {
        id: 'q-ebu-13-18',
        difficulty: 'medium',
        questionText: '"Doğru" kelimesi aşağıdakilerin hangisinde edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bize her zaman doğruyu söyle.' },
          { id: 'B', text: 'Olayı doğru anlattığına emin misin?' },
          { id: 'C', text: 'Eve doğru yürümeye başladık.' },
          { id: 'D', text: 'Doğru söz yemin istemez.' },
          { id: 'E', text: 'Tahtaya uzun bir doğru çizdi.' }
        ],
        correctOptionId: 'C',
        explanation: '"-e doğru" şeklinde (eve doğru) kullanıldığında edattır.'
      },
      {
        id: 'q-ebu-13-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde bağlaç iki sıfatı birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Kalemini ve silgisini çantasına koydu.' },
          { id: 'B', text: 'Eski ve yıpranmış kıyafetler giyiyordu.' },
          { id: 'C', text: 'Hem çalışıyor hem okul okuyor.' },
          { id: 'D', text: 'Gelmek istedi ancak vakti yoktu.' },
          { id: 'E', text: 'Bunu sen veya kardeşin yapmalı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ve" bağlacı, "eski" ve "yıpranmış" sıfatlarını birbirine bağlamıştır.'
      },
      {
        id: 'q-ebu-13-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de" bağlacı cümleye "yakınma, sitem" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'O da bizimle tatile gelecekmiş.' },
          { id: 'B', text: 'Çalıştı da sınavı kazandı.' },
          { id: 'C', text: 'Oraya kadar gitmiş de bize uğramamış.' },
          { id: 'D', text: 'Büyüyecek de ailesine bakacak.' },
          { id: 'E', text: 'Kitabı okudum da pek anlamadım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde oraya kadar gidip de uğramaması üzerinden bir sitem ve yakınma dile getirilmiştir.'
      }
    ]
  },
  {
    id: 'test-ebu-13-zor',
    title: 'Edat Bağlaç Ünlem 13 (Zor)',
    description: 'Edat Bağlaç Ünlem - Zor (121-130)',
    type: 'comprehension',
    order: 39,
    questions: [
      {
        id: 'q-ebu-13-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde edat, cümlede yüklem görevini üstlenmiştir?',
        options: [
          { id: 'A', text: 'Her şey tam da hayal ettiğim gibiydi.' },
          { id: 'B', text: 'Seni gördüğümden beri kalbim hızla atıyor.' },
          { id: 'C', text: 'Bana göre değil bu şehrin kalabalığı.' },
          { id: 'D', text: 'Bir deniz gibi serindi gözlerin.' },
          { id: 'E', text: 'Senin kadar çalışkanını görmedim hayatımda.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "gibi" edatı ek-fiilin di\'li geçmiş zaman çekimini (-idi) alarak "gibiydi" olmuş ve cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-ebu-13-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, cümlenin öznelerini ortak kılmıştır?',
        options: [
          { id: 'A', text: 'Ne kitap okuyor ne de gazete okuyordu.' },
          { id: 'B', text: 'Hem suçlu olduğunu biliyor hem de güçlü görünmeye çalışıyor.' },
          { id: 'C', text: 'Ali ve Veli yarınki maçta oynamayacaklar.' },
          { id: 'D', text: 'Gelecekti ama son anda işi çıktı.' },
          { id: 'E', text: 'Ona çok kızdım fakat hiçbir şey söylemedim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ve" bağlacı, eylemi gerçekleştirmeyecek olan özneleri (Ali, Veli) birbirine bağlamış, ortak kılmıştır. A\'da nesneler ortak, B\'de gizli özne var ama bağlaç yüklemleri/cümleleri bağlıyor.'
      },
      {
        id: 'q-ebu-13-23',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "başka" kelimesi edat görevindedir?',
        options: [
          { id: 'A', text: 'Bunu ondan başka hiç kimse yapamaz.' },
          { id: 'B', text: 'Başka konulardan konuşalım, bu konu sıktı.' },
          { id: 'C', text: 'Burada her şey başka, herkes başka.' },
          { id: 'D', text: 'Bu olayın bambaşka bir yönü daha ortaya çıktı.' },
          { id: 'E', text: 'Başkalarının ne dediği umurumda değil.' }
        ],
        correctOptionId: 'A',
        explanation: '"-den başka" (ondan başka) şeklinde ayrılma durumu ekiyle kullanıldığında edat öbeği oluşturur.'
      },
      {
        id: 'q-ebu-13-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem edat hem bağlaç vardır?',
        options: [
          { id: 'A', text: 'Bir yelkenli gibi süzülürdün / Ve ben ardından bakardım' },
          { id: 'B', text: 'Ne doğan güne hükmüm geçer / Ne halden anlayan bulunur' },
          { id: 'C', text: 'Sokaktayım, kimsesiz bir sokak ortasında' },
          { id: 'D', text: 'Ben de duman olsam senin dağında' },
          { id: 'E', text: 'Senin için ne ağla ne de sızla' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "gibi" edat, "ve" bağlaçtır.'
      },
      {
        id: 'q-ebu-13-25',
        difficulty: 'hard',
        questionText: '"İle" sözcüğü aşağıdakilerin hangisinde farklı bir sözcük türündedir?',
        options: [
          { id: 'A', text: 'Suç ve Ceza ile Sefiller başucu kitaplarımdır.' },
          { id: 'B', text: 'Romanla hikaye arasında belirli farklar vardır.' },
          { id: 'C', text: 'Ahmet ile Mehmet kardeş gibi büyüdüler.' },
          { id: 'D', text: 'Kalemle silgiyi masanın üzerinde bıraktım.' },
          { id: 'E', text: 'Olayın duyulması ile herkes oraya koştu.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde "ile" yerine "ve" getirilebilir, dolayısıyla bağlaçtır. E seçeneğinde ise "duyulması ve herkes oraya koştu" denemez, zaman/sebep ilgisi kurduğu için edattır.'
      },
      {
        id: 'q-ebu-13-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "üzere" edatı cümleye "koşul, şart" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Yarın sabah geri getirmek üzere bu kitabı alabilirsin.' },
          { id: 'B', text: 'Güneş batmak üzere, acele etmeliyiz.' },
          { id: 'C', text: 'Misafirleri karşılamak üzere kapıya yöneldi.' },
          { id: 'D', text: 'Anlaştığımız üzere yarın sekizde oradayım.' },
          { id: 'E', text: 'Onu bir daha görmemek üzere şehri terk etti.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde kitabı alabilmesinin şartı (koşulu) "yarın geri getirmesi" olarak belirtilmiştir.'
      },
      {
        id: 'q-ebu-13-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Zavallının ahı tuttu, işleri ters gitmeye başladı.' },
          { id: 'B', text: 'Ah, o kadrini bilmediğim güzel günler!' },
          { id: 'C', text: 'Eyvah, yine her şeyi yüzüme gözüme bulaştırdım.' },
          { id: 'D', text: 'Ahlar vahlar içinde bir ömür geçirdi zavallı.' },
          { id: 'E', text: 'Vah vah, adama çok yazık oldu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "ah" sözcüğü isimleşerek bir isim tamlamasında tamlanan olmuş ve cümlenin öznesi ("tuttu" eylemini yapan) görevinde kullanılmıştır.'
      },
      {
        id: 'q-ebu-13-28',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "ki" bağlacı, bağlı olduğu cümleye "şaşkınlık, hayret" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Dışarı bir çıktım ki her yer sular altında!' },
          { id: 'B', text: 'Çok yorulmuş ki hemen uykuya daldı.' },
          { id: 'C', text: 'Anladım ki bu işler böyle yürümeyecek.' },
          { id: 'D', text: 'Sen ki buraların en iyi ustasısın.' },
          { id: 'E', text: 'Erken yat ki yarın sabah kalkabilesin.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde dışarı çıkıldığında karşılaşılan manzara karşısında duyulan şaşkınlık (hayret) "ki" bağlacı ile sağlanmıştır.'
      },
      {
        id: 'q-ebu-13-29',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "yalnız" sözcüğü edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu dünyada yalnız doğduk, yalnız öleceğiz.' },
          { id: 'B', text: 'Yalnız insanların sorunları daha derin olur.' },
          { id: 'C', text: 'Bu problemi yalnız sen çözebilirsin.' },
          { id: 'D', text: 'Ona güveniyorum yalnız dediklerimi yapmalı.' },
          { id: 'E', text: 'Koca evde yıllarca yalnız yaşadı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" sözcüğü "sadece" anlamında kullanıldığında edattır. C seçeneğinde "sadece sen" anlamındadır.'
      },
      {
        id: 'q-ebu-13-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisinin türü ayraç içinde yanlış belirtilmiştir?',
        options: [
          { id: 'A', text: 'Bunu *ancak* sen başarabilirsin. (Edat)' },
          { id: 'B', text: 'Bugün hava yağmurlu *mu* olacakmış? (Bağlaç)' },
          { id: 'C', text: 'İşlerini bitir *ve* hemen yanıma gel. (Bağlaç)' },
          { id: 'D', text: 'Senin *için* her şeyi göze alırım. (Edat)' },
          { id: 'E', text: 'Oraya gittim *fakat* onu bulamadım. (Bağlaç)' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "mu" kelimesi soru edatıdır, bağlaç değildir.'
      }
    ]
  }
];
