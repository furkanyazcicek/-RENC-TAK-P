export default [
  {
    id: 'test-ebu-12-kolay',
    title: 'Edat Bağlaç Ünlem 12 (Kolay)',
    description: 'Edat Bağlaç Ünlem - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-ebu-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun gibi çalışkanını görmedim.' },
          { id: 'B', text: 'Sabaha kadar ders çalıştı.' },
          { id: 'C', text: 'Kitabı ve defteri masaya bıraktı.' },
          { id: 'D', text: 'Bana göre bu işin sonu iyi değil.' },
          { id: 'E', text: 'Zaman su gibi akıp gidiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "ve" sözcüğü iki eş görevli sözcüğü birbirine bağlayan bir bağlaçtır.'
      },
      {
        id: 'q-ebu-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem, bir acıma ve üzüntü bildirmektedir?',
        options: [
          { id: 'A', text: 'Aman, canım ne isterse onu yaparım!' },
          { id: 'B', text: 'Vah vah, pek de gençmiş zavallı!' },
          { id: 'C', text: 'Eyvah, yine cüzdanı evde unuttum!' },
          { id: 'D', text: 'Hey, çabuk buraya gel!' },
          { id: 'E', text: 'Tüh, maçı son dakikada kaybettik.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Vah vah" ünlemi acıma, üzüntü duygularını ifade eder.'
      },
      {
        id: 'q-ebu-12-3',
        difficulty: 'easy',
        questionText: '"Kadar" edatı aşağıdakilerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Senin kadar inatçı birini görmedim.' },
          { id: 'B', text: 'Akşama kadar kütüphanede ders çalıştık.' },
          { id: 'C', text: 'Avuç içi kadar bir evde kalıyorlar.' },
          { id: 'D', text: 'Evden okula kadar yürüyerek gittik.' },
          { id: 'E', text: 'Babası kadar boylu poslu olmuş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "akşama kadar" ifadesi eylemin ne kadar sürede/ne zamana değin yapıldığını belirtmektedir.'
      },
      {
        id: 'q-ebu-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ile" kelimesi bağlaç görevindedir?',
        options: [
          { id: 'A', text: 'Okula otobüs ile gidiyor.' },
          { id: 'B', text: 'Yazılarını kurşun kalem ile yazar.' },
          { id: 'C', text: 'Annemi sevgi ile kucakladım.' },
          { id: 'D', text: 'Ahmet ile Mehmet aynı takımda oynuyor.' },
          { id: 'E', text: 'Hastaneye taksi ile yetişti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "ile", "ve" anlamına geldiği ve eş görevli sözcükleri (Ahmet, Mehmet) bağladığı için bağlaçtır.'
      },
      {
        id: 'q-ebu-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzündeki gülümseme hiç eksilmesin.' },
          { id: 'B', text: 'Dünkü sınav oldukça zordu.' },
          { id: 'C', text: 'Seninki yine ortalarda görünmüyor.' },
          { id: 'D', text: 'O kadar yorgunum ki hemen uyuyacağım.' },
          { id: 'E', text: 'Evdeki hesap çarşıya uymadı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ki" sözcüğü ayrı yazılmıştır ve iki yargıyı birbirine bağlayan bir bağlaçtır.'
      },
      {
        id: 'q-ebu-12-6',
        difficulty: 'easy',
        questionText: '"Gibi" edatı aşağıdakilerin hangisinde cümleye benzetme anlamı katmamıştır?',
        options: [
          { id: 'A', text: 'Aslan gibi bir askerdi.' },
          { id: 'B', text: 'Buz gibi havada dışarı çıkılmaz.' },
          { id: 'C', text: 'Zil çaldığı gibi dışarı fırladı.' },
          { id: 'D', text: 'Melek gibi bir kalbi vardı.' },
          { id: 'E', text: 'İpek gibi saçları dalgalanıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gibi" edatı tezlik/zaman (hemen o anda) anlamı katmıştır, benzetme yapmamıştır.'
      },
      {
        id: 'q-ebu-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi edattır?',
        options: [
          { id: 'A', text: 'Çok çalıştı *ama* kazanamadı.' },
          { id: 'B', text: 'Bana *göre* bu işin sonu pek iyi değil.' },
          { id: 'C', text: 'Oraya gittim *fakat* onu bulamadım.' },
          { id: 'D', text: 'Bugün hava yağmurlu *ve* soğuk.' },
          { id: 'E', text: 'Geldi *lakin* hemen geri döndü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "göre" sözcüğü edattır (-e göre). Diğer seçeneklerdeki kelimeler bağlaçtır.'
      },
      {
        id: 'q-ebu-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabım okulda kalmış.' },
          { id: 'B', text: 'Masada duran vazoyu devirdi.' },
          { id: 'C', text: 'Bu akşam sen de bizimle gelmelisin.' },
          { id: 'D', text: 'Sokakta oynayan çocukları izledi.' },
          { id: 'E', text: 'Evde yiyecek hiçbir şey kalmamış.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "de" sözcüğü ayrı yazılmış ve "dahi, bile" anlamı katarak bağlaç görevinde kullanılmıştır.'
      },
      {
        id: 'q-ebu-12-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki ünlemlerden hangisi seslenme (hitap) bildirmektedir?',
        options: [
          { id: 'A', text: 'Ey Türk gençliği!' },
          { id: 'B', text: 'Ah, elimi yaktım!' },
          { id: 'C', text: 'Oh be, sonunda bitti!' },
          { id: 'D', text: 'Tüh, yine kaçırdık otobüsü.' },
          { id: 'E', text: 'Eyvah, geç kaldık!' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Ey" ünlemi karşısındakilere seslenmek, onlara hitap etmek için kullanılmıştır.'
      },
      {
        id: 'q-ebu-12-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "için" edatı cümleye sebep-sonuç (neden) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu kazağı senin için aldım.' },
          { id: 'B', text: 'Senin için çok zeki diyorlar.' },
          { id: 'C', text: 'Sınavı kazanmak için çok çalışıyor.' },
          { id: 'D', text: 'Hastalandığı için toplantıya katılamadı.' },
          { id: 'E', text: 'Yarınki maç için hazırlık yapıyoruz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde toplantıya katılamamasının sebebi "hastalanması" olarak belirtilmiş ve "için" edatı sebep-sonuç ilgisi kurmuştur.'
      }
    ]
  },
  {
    id: 'test-ebu-12-orta',
    title: 'Edat Bağlaç Ünlem 12 (Orta)',
    description: 'Edat Bağlaç Ünlem - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-ebu-12-11',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde edat görevindedir?',
        options: [
          { id: 'A', text: 'Bana bir bardak çay verir misin?' },
          { id: 'B', text: 'Bir gün mutlaka buluşacağız.' },
          { id: 'C', text: 'Elimdeki bir deste gülü ona verdim.' },
          { id: 'D', text: 'İkimiz bir boydayız.' },
          { id: 'E', text: 'Bu işten bir sen anlarsın.' }
        ],
        correctOptionId: 'E',
        explanation: '"Bir" sözcüğü "sadece, tek" anlamına gelirse edattır. E seçeneğinde "sadece sen anlarsın" anlamındadır.'
      },
      {
        id: 'q-ebu-12-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya gittim fakat onu bulamadım.' },
          { id: 'B', text: 'Bugün ya sinemaya gidelim ya da tiyatroya.' },
          { id: 'C', text: 'Akşama doğru hava birden soğudu.' },
          { id: 'D', text: 'Çok çalıştı ama kazanamadı.' },
          { id: 'E', text: 'Ne kitap okuyor ne televizyon izliyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-e doğru" (Akşama doğru) şeklinde zaman/yön bildiren bir edat kullanılmıştır. Diğer seçeneklerde bağlaçlar vardır.'
      },
      {
        id: 'q-ebu-12-13',
        difficulty: 'medium',
        questionText: '"Yalnız" kelimesi aşağıdaki cümlelerin hangisinde bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu koca evde tamamen yalnız yaşıyordu.' },
          { id: 'B', text: 'Yalnız insanların hayatı daha zordur.' },
          { id: 'C', text: 'Bu problemi yalnız Ali çözebilir.' },
          { id: 'D', text: 'Bunca kalabalığın içinde yine yalnızdı.' },
          { id: 'E', text: 'Sana inanıyorum yalnız bu işin sonu iyi değil.' }
        ],
        correctOptionId: 'E',
        explanation: '"Yalnız" sözcüğü "ama, fakat" anlamında kullanıldığında bağlaç olur. E seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-12-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" soru edatı cümleye koşul/zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu elbiseyi sen mi aldın?' },
          { id: 'B', text: 'Bahar geldi mi her taraf yeşillenir.' },
          { id: 'C', text: 'Akşam bize gelecek misiniz?' },
          { id: 'D', text: 'Güzel mi güzel bir evleri var.' },
          { id: 'E', text: 'Beni arayan Ali miydi?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "mi" edatı "geldiği zaman, gelince" anlamı katarak zaman/koşul ilgisi kurmuştur.'
      },
      {
        id: 'q-ebu-12-15',
        difficulty: 'medium',
        questionText: '"İle" kelimesi aşağıdakilerin hangisinde cümleye durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'İşe her zaman otobüs ile gider.' },
          { id: 'B', text: 'Arkadaşı ile ders çalıştı.' },
          { id: 'C', text: 'Annem ile babam çok iyi anlaşır.' },
          { id: 'D', text: 'Kalemle kağıt masanın üzerindeydi.' },
          { id: 'E', text: 'Kapıyı büyük bir hızla açtı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "büyük bir hızla" ifadesi eylemin (açtı) nasıl yapıldığını yani durumunu bildiren bir zarf öbeği oluşturmuştur.'
      },
      {
        id: 'q-ebu-12-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlemden sonra cümlenin ilk harfi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Ah! Bu dertler bitmek bilmedi.' },
          { id: 'B', text: 'Eyvah! Anahtarımı içeride unuttum.' },
          { id: 'C', text: 'Tüh! Otobüsü yine kaçırdım.' },
          { id: 'D', text: 'Hey! Buraya bakar mısınız?' },
          { id: 'E', text: 'Aman! ne hali varsa görsün.' }
        ],
        correctOptionId: 'E',
        explanation: 'Ünlem işaretinden (!) sonra başlayan cümle büyük harfle başlamalıdır. E seçeneğinde "ne" kelimesi küçük harfle başlamıştır.'
      },
      {
        id: 'q-ebu-12-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı pekiştirme amacı taşımaktadır?',
        options: [
          { id: 'A', text: 'Sen ki bu okulun en başarılı öğrencisisin...' },
          { id: 'B', text: 'Anladım ki her şey boşunaymış.' },
          { id: 'C', text: 'Öyle kızgındı ki kimse yanına yaklaşamadı.' },
          { id: 'D', text: 'Erken kalk ki uçağa yetişebilesin.' },
          { id: 'E', text: 'Bir şey biliyor ki bu kadar rahat.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "ki" bağlacı özneyi ("sen") vurgulamak, kuvvetlendirmek ve pekiştirmek için kullanılmıştır.'
      },
      {
        id: 'q-ebu-12-18',
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
        id: 'q-ebu-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde bağlaç iki sıfatı birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Kalemini ve silgisini çantasına koydu.' },
          { id: 'B', text: 'Hem çalışıyor hem okul okuyor.' },
          { id: 'C', text: 'Gelmek istedi ancak vakti yoktu.' },
          { id: 'D', text: 'Bunu sen veya kardeşin yapmalı.' },
          { id: 'E', text: 'Eski ve yıpranmış kıyafetler giyiyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "ve" bağlacı, "eski" ve "yıpranmış" sıfatlarını birbirine bağlamıştır.'
      },
      {
        id: 'q-ebu-12-20',
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
    id: 'test-ebu-12-zor',
    title: 'Edat Bağlaç Ünlem 12 (Zor)',
    description: 'Edat Bağlaç Ünlem - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-ebu-12-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde edat, cümlede yüklem görevini üstlenmiştir?',
        options: [
          { id: 'A', text: 'Seni gördüğümden beri kalbim hızla atıyor.' },
          { id: 'B', text: 'Bana göre değil bu şehrin kalabalığı.' },
          { id: 'C', text: 'Her şey tam da hayal ettiğim gibiydi.' },
          { id: 'D', text: 'Bir deniz gibi serindi gözlerin.' },
          { id: 'E', text: 'Senin kadar çalışkanını görmedim hayatımda.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gibi" edatı ek-fiilin di\'li geçmiş zaman çekimini (-idi) alarak "gibiydi" olmuş ve cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-ebu-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, cümlenin öznelerini ortak kılmıştır?',
        options: [
          { id: 'A', text: 'Ne kitap okuyor ne de gazete okuyordu.' },
          { id: 'B', text: 'Hem suçlu olduğunu biliyor hem de güçlü görünmeye çalışıyor.' },
          { id: 'C', text: 'Gelecekti ama son anda işi çıktı.' },
          { id: 'D', text: 'Ali ve Veli yarınki maçta oynamayacaklar.' },
          { id: 'E', text: 'Ona çok kızdım fakat hiçbir şey söylemedim.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ve" bağlacı, eylemi gerçekleştirmeyecek olan özneleri (Ali, Veli) birbirine bağlamış, ortak kılmıştır.'
      },
      {
        id: 'q-ebu-12-23',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "başka" kelimesi edat görevindedir?',
        options: [
          { id: 'A', text: 'Başka konulardan konuşalım, bu konu sıktı.' },
          { id: 'B', text: 'Burada her şey başka, herkes başka.' },
          { id: 'C', text: 'Bu olayın bambaşka bir yönü daha ortaya çıktı.' },
          { id: 'D', text: 'Başkalarının ne dediği umurumda değil.' },
          { id: 'E', text: 'Bunu ondan başka hiç kimse yapamaz.' }
        ],
        correctOptionId: 'E',
        explanation: '"-den başka" (ondan başka) şeklinde ayrılma durumu ekiyle kullanıldığında edat öbeği oluşturur.'
      },
      {
        id: 'q-ebu-12-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem edat hem bağlaç vardır?',
        options: [
          { id: 'A', text: 'Ne doğan güne hükmüm geçer / Ne halden anlayan bulunur' },
          { id: 'B', text: 'Sokaktayım, kimsesiz bir sokak ortasında' },
          { id: 'C', text: 'Bir yelkenli gibi süzülürdün / Ve ben ardından bakardım' },
          { id: 'D', text: 'Ben de duman olsam senin dağında' },
          { id: 'E', text: 'Senin için ne ağla ne de sızla' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gibi" edat, "ve" bağlaçtır.'
      },
      {
        id: 'q-ebu-12-25',
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
        explanation: 'A, B, C ve D seçeneklerinde "ile" yerine "ve" getirilebilir, dolayısıyla bağlaçtır. E seçeneğinde ise zaman/sebep ilgisi kurduğu ve "ve" anlamına gelmediği için edattır.'
      },
      {
        id: 'q-ebu-12-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "üzere" edatı cümleye "koşul, şart" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş batmak üzere, acele etmeliyiz.' },
          { id: 'B', text: 'Misafirleri karşılamak üzere kapıya yöneldi.' },
          { id: 'C', text: 'Yarın sabah geri getirmek üzere bu kitabı alabilirsin.' },
          { id: 'D', text: 'Anlaştığımız üzere yarın sekizde oradayım.' },
          { id: 'E', text: 'Onu bir daha görmemek üzere şehri terk etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde kitabı alabilmesinin şartı (koşulu) "yarın geri getirmesi" olarak belirtilmiştir.'
      },
      {
        id: 'q-ebu-12-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Ah, o kadrini bilmediğim güzel günler!' },
          { id: 'B', text: 'Zavallının ahı tuttu, işleri ters gitmeye başladı.' },
          { id: 'C', text: 'Eyvah, yine her şeyi yüzüme gözüme bulaştırdım.' },
          { id: 'D', text: 'Ahlar vahlar içinde bir ömür geçirdi zavallı.' },
          { id: 'E', text: 'Vah vah, adama çok yazık oldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ah" sözcüğü isimleşerek bir isim tamlamasında tamlanan olmuş ve cümlenin öznesi ("tuttu" eylemini yapan) görevinde kullanılmıştır.'
      },
      {
        id: 'q-ebu-12-28',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "ki" bağlacı, bağlı olduğu cümleye "şaşkınlık, hayret" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çok yorulmuş ki hemen uykuya daldı.' },
          { id: 'B', text: 'Dışarı bir çıktım ki her yer sular altında!' },
          { id: 'C', text: 'Anladım ki bu işler böyle yürümeyecek.' },
          { id: 'D', text: 'Sen ki buraların en iyi ustasısın.' },
          { id: 'E', text: 'Erken yat ki yarın sabah kalkabilesin.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde dışarı çıkıldığında karşılaşılan manzara karşısında duyulan şaşkınlık (hayret) "ki" bağlacı ile sağlanmıştır.'
      },
      {
        id: 'q-ebu-12-29',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "yalnız" sözcüğü edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu dünyada yalnız doğduk, yalnız öleceğiz.' },
          { id: 'B', text: 'Yalnız insanların sorunları daha derin olur.' },
          { id: 'C', text: 'Ona güveniyorum yalnız dediklerimi yapmalı.' },
          { id: 'D', text: 'Bu problemi yalnız sen çözebilirsin.' },
          { id: 'E', text: 'Koca evde yıllarca yalnız yaşadı.' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız" sözcüğü "sadece" anlamında kullanıldığında edattır. D seçeneğinde "sadece sen" anlamındadır.'
      },
      {
        id: 'q-ebu-12-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisinin türü ayraç içinde yanlış belirtilmiştir?',
        options: [
          { id: 'A', text: 'Bunu *ancak* sen başarabilirsin. (Edat)' },
          { id: 'B', text: 'İşlerini bitir *ve* hemen yanıma gel. (Bağlaç)' },
          { id: 'C', text: 'Bugün hava yağmurlu *mu* olacakmış? (Bağlaç)' },
          { id: 'D', text: 'Senin *için* her şeyi göze alırım. (Edat)' },
          { id: 'E', text: 'Oraya gittim *fakat* onu bulamadım. (Bağlaç)' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "mu" kelimesi soru edatıdır, bağlaç değildir.'
      }
    ]
  }
];
