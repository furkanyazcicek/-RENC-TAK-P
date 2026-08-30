export default [
  {
    id: 'test-ebu-14-kolay',
    title: 'Edat Bağlaç Ünlem 14 (Kolay)',
    description: 'Edat Bağlaç Ünlem - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-ebu-14-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onun gibi çalışkanını görmedim.' },
          { id: 'B', text: 'Sabaha kadar ders çalıştı.' },
          { id: 'C', text: 'Zaman su gibi akıp gidiyor.' },
          { id: 'D', text: 'Kitabı ve defteri masaya bıraktı.' },
          { id: 'E', text: 'Bana göre bu işin sonu iyi değil.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "ve" sözcüğü iki eş görevli sözcüğü birbirine bağlayan bir bağlaçtır.'
      },
      {
        id: 'q-ebu-14-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem, bir acıma ve üzüntü bildirmektedir?',
        options: [
          { id: 'A', text: 'Aman, canım ne isterse onu yaparım!' },
          { id: 'B', text: 'Eyvah, yine cüzdanı evde unuttum!' },
          { id: 'C', text: 'Vah vah, pek de gençmiş zavallı!' },
          { id: 'D', text: 'Hey, çabuk buraya gel!' },
          { id: 'E', text: 'Tüh, maçı son dakikada kaybettik.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Vah vah" ünlemi acıma, üzüntü duygularını ifade eder.'
      },
      {
        id: 'q-ebu-14-3',
        difficulty: 'easy',
        questionText: '"Kadar" edatı aşağıdakilerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Senin kadar inatçı birini görmedim.' },
          { id: 'B', text: 'Avuç içi kadar bir evde kalıyorlar.' },
          { id: 'C', text: 'Akşama kadar kütüphanede ders çalıştık.' },
          { id: 'D', text: 'Evden okula kadar yürüyerek gittik.' },
          { id: 'E', text: 'Babası kadar boylu poslu olmuş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "akşama kadar" ifadesi eylemin ne kadar sürede/ne zamana değin yapıldığını belirtmektedir.'
      },
      {
        id: 'q-ebu-14-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ile" kelimesi bağlaç görevindedir?',
        options: [
          { id: 'A', text: 'Okula otobüs ile gidiyor.' },
          { id: 'B', text: 'Yazılarını kurşun kalem ile yazar.' },
          { id: 'C', text: 'Ahmet ile Mehmet aynı takımda oynuyor.' },
          { id: 'D', text: 'Annemi sevgi ile kucakladım.' },
          { id: 'E', text: 'Hastaneye taksi ile yetişti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "ile", "ve" anlamına geldiği ve eş görevli sözcükleri (Ahmet, Mehmet) bağladığı için bağlaçtır.'
      },
      {
        id: 'q-ebu-14-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yüzündeki gülümseme hiç eksilmesin.' },
          { id: 'B', text: 'Dünkü sınav oldukça zordu.' },
          { id: 'C', text: 'Seninki yine ortalarda görünmüyor.' },
          { id: 'D', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'E', text: 'O kadar yorgunum ki hemen uyuyacağım.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "ki" sözcüğü ayrı yazılmıştır ve iki yargıyı birbirine bağlayan bir bağlaçtır.'
      },
      {
        id: 'q-ebu-14-6',
        difficulty: 'easy',
        questionText: '"Gibi" edatı aşağıdakilerin hangisinde cümleye benzetme anlamı katmamıştır?',
        options: [
          { id: 'A', text: 'Aslan gibi bir askerdi.' },
          { id: 'B', text: 'Buz gibi havada dışarı çıkılmaz.' },
          { id: 'C', text: 'Melek gibi bir kalbi vardı.' },
          { id: 'D', text: 'Zil çaldığı gibi dışarı fırladı.' },
          { id: 'E', text: 'İpek gibi saçları dalgalanıyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "gibi" edatı tezlik/zaman (hemen o anda) anlamı katmıştır, benzetme yapmamıştır.'
      },
      {
        id: 'q-ebu-14-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi edattır?',
        options: [
          { id: 'A', text: 'Çok çalıştı *ama* kazanamadı.' },
          { id: 'B', text: 'Oraya gittim *fakat* onu bulamadım.' },
          { id: 'C', text: 'Bana *göre* bu işin sonu pek iyi değil.' },
          { id: 'D', text: 'Bugün hava yağmurlu *ve* soğuk.' },
          { id: 'E', text: 'Geldi *lakin* hemen geri döndü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "göre" sözcüğü edattır (-e göre). Diğer seçeneklerdeki kelimeler bağlaçtır.'
      },
      {
        id: 'q-ebu-14-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kitabım okulda kalmış.' },
          { id: 'B', text: 'Masada duran vazoyu devirdi.' },
          { id: 'C', text: 'Sokakta oynayan çocukları izledi.' },
          { id: 'D', text: 'Bu akşam sen de bizimle gelmelisin.' },
          { id: 'E', text: 'Evde yiyecek hiçbir şey kalmamış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "de" sözcüğü ayrı yazılmış ve "dahi, bile" anlamı katarak bağlaç görevinde kullanılmıştır.'
      },
      {
        id: 'q-ebu-14-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki ünlemlerden hangisi seslenme (hitap) bildirmektedir?',
        options: [
          { id: 'A', text: 'Ah, elimi yaktım!' },
          { id: 'B', text: 'Ey Türk gençliği!' },
          { id: 'C', text: 'Oh be, sonunda bitti!' },
          { id: 'D', text: 'Tüh, yine kaçırdık otobüsü.' },
          { id: 'E', text: 'Eyvah, geç kaldık!' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Ey" ünlemi karşısındakilere seslenmek, onlara hitap etmek için kullanılmıştır.'
      },
      {
        id: 'q-ebu-14-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "için" edatı cümleye sebep-sonuç (neden) anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu kazağı senin için aldım.' },
          { id: 'B', text: 'Senin için çok zeki diyorlar.' },
          { id: 'C', text: 'Sınavı kazanmak için çok çalışıyor.' },
          { id: 'D', text: 'Yarınki maç için hazırlık yapıyoruz.' },
          { id: 'E', text: 'Hastalandığı için toplantıya katılamadı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde toplantıya katılamamasının sebebi "hastalanması" olarak belirtilmiş ve "için" edatı sebep-sonuç ilgisi kurmuştur.'
      }
    ]
  },
  {
    id: 'test-ebu-14-orta',
    title: 'Edat Bağlaç Ünlem 14 (Orta)',
    description: 'Edat Bağlaç Ünlem - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-ebu-14-11',
        difficulty: 'medium',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde edat görevindedir?',
        options: [
          { id: 'A', text: 'Bana bir bardak çay verir misin?' },
          { id: 'B', text: 'Bir gün mutlaka buluşacağız.' },
          { id: 'C', text: 'Elimdeki bir deste gülü ona verdim.' },
          { id: 'D', text: 'Bu işten bir sen anlarsın.' },
          { id: 'E', text: 'İkimiz bir boydayız.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bir" sözcüğü "sadece, tek" anlamına gelirse edattır. D seçeneğinde "sadece sen anlarsın" anlamındadır.'
      },
      {
        id: 'q-ebu-14-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde edat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya gittim fakat onu bulamadım.' },
          { id: 'B', text: 'Bugün ya sinemaya gidelim ya da tiyatroya.' },
          { id: 'C', text: 'Çok çalıştı ama kazanamadı.' },
          { id: 'D', text: 'Akşama doğru hava birden soğudu.' },
          { id: 'E', text: 'Ne kitap okuyor ne televizyon izliyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "-e doğru" (Akşama doğru) şeklinde zaman/yön bildiren bir edat kullanılmıştır. Diğer seçeneklerde bağlaçlar vardır.'
      },
      {
        id: 'q-ebu-14-13',
        difficulty: 'medium',
        questionText: '"Yalnız" kelimesi aşağıdaki cümlelerin hangisinde bağlaç olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu koca evde tamamen yalnız yaşıyordu.' },
          { id: 'B', text: 'Yalnız insanların hayatı daha zordur.' },
          { id: 'C', text: 'Sana inanıyorum yalnız bu işin sonu iyi değil.' },
          { id: 'D', text: 'Bunca kalabalığın içinde yine yalnızdı.' },
          { id: 'E', text: 'Bu problemi yalnız Ali çözebilir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" sözcüğü "ama, fakat" anlamında kullanıldığında bağlaç olur. C seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-14-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" soru edatı cümleye koşul/zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bu elbiseyi sen mi aldın?' },
          { id: 'B', text: 'Akşam bize gelecek misiniz?' },
          { id: 'C', text: 'Bahar geldi mi her taraf yeşillenir.' },
          { id: 'D', text: 'Güzel mi güzel bir evleri var.' },
          { id: 'E', text: 'Beni arayan Ali miydi?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "mi" edatı "geldiği zaman, gelince" anlamı katarak zaman/koşul ilgisi kurmuştur.'
      },
      {
        id: 'q-ebu-14-15',
        difficulty: 'medium',
        questionText: '"İle" kelimesi aşağıdakilerin hangisinde cümleye durum anlamı katmıştır?',
        options: [
          { id: 'A', text: 'İşe her zaman otobüs ile gider.' },
          { id: 'B', text: 'Arkadaşı ile ders çalıştı.' },
          { id: 'C', text: 'Kapıyı büyük bir hızla açtı.' },
          { id: 'D', text: 'Annem ile babam çok iyi anlaşır.' },
          { id: 'E', text: 'Kalemle kağıt masanın üzerindeydi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "büyük bir hızla" ifadesi eylemin (açtı) nasıl yapıldığını yani durumunu bildiren bir zarf öbeği oluşturmuştur.'
      },
      {
        id: 'q-ebu-14-16',
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
        id: 'q-ebu-14-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı pekiştirme amacı taşımaktadır?',
        options: [
          { id: 'A', text: 'Anladım ki her şey boşunaymış.' },
          { id: 'B', text: 'Sen ki bu okulun en başarılı öğrencisisin...' },
          { id: 'C', text: 'Öyle kızgındı ki kimse yanına yaklaşamadı.' },
          { id: 'D', text: 'Erken kalk ki uçağa yetişebilesin.' },
          { id: 'E', text: 'Bir şey biliyor ki bu kadar rahat.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ki" bağlacı özneyi ("sen") vurgulamak, kuvvetlendirmek ve pekiştirmek için kullanılmıştır.'
      },
      {
        id: 'q-ebu-14-18',
        difficulty: 'medium',
        questionText: '"Doğru" kelimesi aşağıdakilerin hangisinde edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bize her zaman doğruyu söyle.' },
          { id: 'B', text: 'Eve doğru yürümeye başladık.' },
          { id: 'C', text: 'Olayı doğru anlattığına emin misin?' },
          { id: 'D', text: 'Doğru söz yemin istemez.' },
          { id: 'E', text: 'Tahtaya uzun bir doğru çizdi.' }
        ],
        correctOptionId: 'B',
        explanation: '"-e doğru" şeklinde (eve doğru) kullanıldığında edattır.'
      },
      {
        id: 'q-ebu-14-19',
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
        id: 'q-ebu-14-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de" bağlacı cümleye "yakınma, sitem" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'O da bizimle tatile gelecekmiş.' },
          { id: 'B', text: 'Çalıştı da sınavı kazandı.' },
          { id: 'C', text: 'Büyüyecek de ailesine bakacak.' },
          { id: 'D', text: 'Oraya kadar gitmiş de bize uğramamış.' },
          { id: 'E', text: 'Kitabı okudum da pek anlamadım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde oraya kadar gidip de uğramaması üzerinden bir sitem ve yakınma dile getirilmiştir.'
      }
    ]
  },
  {
    id: 'test-ebu-14-zor',
    title: 'Edat Bağlaç Ünlem 14 (Zor)',
    description: 'Edat Bağlaç Ünlem - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-ebu-14-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde edat, cümlede yüklem görevini üstlenmiştir?',
        options: [
          { id: 'A', text: 'Seni gördüğümden beri kalbim hızla atıyor.' },
          { id: 'B', text: 'Bana göre değil bu şehrin kalabalığı.' },
          { id: 'C', text: 'Bir deniz gibi serindi gözlerin.' },
          { id: 'D', text: 'Her şey tam da hayal ettiğim gibiydi.' },
          { id: 'E', text: 'Senin kadar çalışkanını görmedim hayatımda.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "gibi" edatı ek-fiilin di\'li geçmiş zaman çekimini (-idi) alarak "gibiydi" olmuş ve cümlenin yüklemi olmuştur.'
      },
      {
        id: 'q-ebu-14-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, cümlenin öznelerini ortak kılmıştır?',
        options: [
          { id: 'A', text: 'Ne kitap okuyor ne de gazete okuyordu.' },
          { id: 'B', text: 'Hem suçlu olduğunu biliyor hem de güçlü görünmeye çalışıyor.' },
          { id: 'C', text: 'Gelecekti ama son anda işi çıktı.' },
          { id: 'D', text: 'Ona çok kızdım fakat hiçbir şey söylemedim.' },
          { id: 'E', text: 'Ali ve Veli yarınki maçta oynamayacaklar.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "ve" bağlacı, eylemi gerçekleştirmeyecek olan özneleri (Ali, Veli) birbirine bağlamış, ortak kılmıştır.'
      },
      {
        id: 'q-ebu-14-23',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "başka" kelimesi edat görevindedir?',
        options: [
          { id: 'A', text: 'Başka konulardan konuşalım, bu konu sıktı.' },
          { id: 'B', text: 'Burada her şey başka, herkes başka.' },
          { id: 'C', text: 'Bunu ondan başka hiç kimse yapamaz.' },
          { id: 'D', text: 'Bu olayın bambaşka bir yönü daha ortaya çıktı.' },
          { id: 'E', text: 'Başkalarının ne dediği umurumda değil.' }
        ],
        correctOptionId: 'C',
        explanation: '"-den başka" (ondan başka) şeklinde ayrılma durumu ekiyle kullanıldığında edat öbeği oluşturur.'
      },
      {
        id: 'q-ebu-14-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde hem edat hem bağlaç vardır?',
        options: [
          { id: 'A', text: 'Ne doğan güne hükmüm geçer / Ne halden anlayan bulunur' },
          { id: 'B', text: 'Sokaktayım, kimsesiz bir sokak ortasında' },
          { id: 'C', text: 'Ben de duman olsam senin dağında' },
          { id: 'D', text: 'Senin için ne ağla ne de sızla' },
          { id: 'E', text: 'Bir yelkenli gibi süzülürdün / Ve ben ardından bakardım' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "gibi" edat, "ve" bağlaçtır.'
      },
      {
        id: 'q-ebu-14-25',
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
        id: 'q-ebu-14-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "üzere" edatı cümleye "koşul, şart" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş batmak üzere, acele etmeliyiz.' },
          { id: 'B', text: 'Misafirleri karşılamak üzere kapıya yöneldi.' },
          { id: 'C', text: 'Anlaştığımız üzere yarın sekizde oradayım.' },
          { id: 'D', text: 'Yarın sabah geri getirmek üzere bu kitabı alabilirsin.' },
          { id: 'E', text: 'Onu bir daha görmemek üzere şehri terk etti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde kitabı alabilmesinin şartı (koşulu) "yarın geri getirmesi" olarak belirtilmiştir.'
      },
      {
        id: 'q-ebu-14-27',
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
        id: 'q-ebu-14-28',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "ki" bağlacı, bağlı olduğu cümleye "şaşkınlık, hayret" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çok yorulmuş ki hemen uykuya daldı.' },
          { id: 'B', text: 'Anladım ki bu işler böyle yürümeyecek.' },
          { id: 'C', text: 'Sen ki buraların en iyi ustasısın.' },
          { id: 'D', text: 'Dışarı bir çıktım ki her yer sular altında!' },
          { id: 'E', text: 'Erken yat ki yarın sabah kalkabilesin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde dışarı çıkıldığında karşılaşılan manzara karşısında duyulan şaşkınlık (hayret) "ki" bağlacı ile sağlanmıştır.'
      },
      {
        id: 'q-ebu-14-29',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "yalnız" sözcüğü edat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bu dünyada yalnız doğduk, yalnız öleceğiz.' },
          { id: 'B', text: 'Yalnız insanların sorunları daha derin olur.' },
          { id: 'C', text: 'Ona güveniyorum yalnız dediklerimi yapmalı.' },
          { id: 'D', text: 'Koca evde yıllarca yalnız yaşadı.' },
          { id: 'E', text: 'Bu problemi yalnız sen çözebilirsin.' }
        ],
        correctOptionId: 'E',
        explanation: '"Yalnız" sözcüğü "sadece" anlamında kullanıldığında edattır. E seçeneğinde "sadece sen" anlamındadır.'
      },
      {
        id: 'q-ebu-14-30',
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
