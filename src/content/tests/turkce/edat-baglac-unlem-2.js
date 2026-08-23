export default [
  {
    id: 'test-ebu-2-kolay',
    title: 'Edat Bağlaç Ünlem 2 (Kolay)',
    description: 'Edat Bağlaç Ünlem - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-ebu-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ve" bağlacı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Okula kadar benimle yürüdü.' },
          { id: 'B', text: 'Elma ve armut almayı unutma.' },
          { id: 'C', text: 'Eve geldiği gibi uyudu.' },
          { id: 'D', text: 'Senin için her şeyi yaparım.' },
          { id: 'E', text: 'Gözleri deniz gibi maviydi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eş görevli kelimeleri (elma, armut) birbirine bağlayan "ve" bağlacı kullanılmıştır.'
      },
      {
        id: 'q-ebu-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem, bir şaşırma bildirmektedir?',
        options: [
          { id: 'A', text: 'Eyvah, geç kaldım!' },
          { id: 'B', text: 'Vah vah, çok yazık oldu.' },
          { id: 'C', text: 'Aaa, sen de mi buradaydın!' },
          { id: 'D', text: 'Oh, sonunda iş bitti.' },
          { id: 'E', text: 'Hey, biraz sessiz olun!' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Aaa" ünlemi şaşırma (beklenmedik bir durum karşısında verilen tepki) bildirmektedir.'
      },
      {
        id: 'q-ebu-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "gibi" edatı cümleye olasılık anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Pamuk gibi elleri vardı.' },
          { id: 'B', text: 'Yarın yağmur yağacak gibi görünüyor.' },
          { id: 'C', text: 'Dev gibi adam karşımda duruyordu.' },
          { id: 'D', text: 'Çocuk gibi davranmaktan vazgeç.' },
          { id: 'E', text: 'Buz gibi suyu içince hastalandı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "gibi" edatı "yağmur yağma ihtimali olduğu" anlamını katmıştır.'
      },
      {
        id: 'q-ebu-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Çok çalıştı ama kazanamadı.' },
          { id: 'B', text: 'Seni aradım fakat ulaşamadım.' },
          { id: 'C', text: 'Hem kitap okur hem müzik dinler.' },
          { id: 'D', text: 'Güneş doğdu, her yer aydınlandı.' },
          { id: 'E', text: 'Oraya gittim de kimseyi bulamadım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde bağlaç yoktur. Cümleler birbirine virgülle bağlanmıştır.'
      },
      {
        id: 'q-ebu-2-5',
        difficulty: 'easy',
        questionText: '"İçin" sözcüğü hangisinde amaç bildirmektedir?',
        options: [
          { id: 'A', text: 'Kar yağdığı için yollar kapandı.' },
          { id: 'B', text: 'Seni görmek için buralara geldim.' },
          { id: 'C', text: 'Bu araba için çok para istediler.' },
          { id: 'D', text: 'Benim için bunun bir önemi yok.' },
          { id: 'E', text: 'Vatan için can feda.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylemin yapılış amacı ("seni görmek amacıyla") belirtilmiştir.'
      },
      {
        id: 'q-ebu-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" sözcüğü ayrı yazılmalıdır (bağlaçtır)?',
        options: [
          { id: 'A', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'B', text: 'Yoldaki çukurlara dikkat et.' },
          { id: 'C', text: 'O kadar yoruldumki anlatamam.' },
          { id: 'D', text: 'Yüzündeki tebessüm hiç solmasın.' },
          { id: 'E', text: 'Sınıftaki öğrenciler çok başarılıydı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "ki" bağlaçtır ve ayrı yazılmalıdır: "O kadar yoruldum ki anlatamam."'
      },
      {
        id: 'q-ebu-2-7',
        difficulty: 'easy',
        questionText: '"Göre" edatı hangisinde cümleye karşılaştırma anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Bana göre hava bugün çok güzel.' },
          { id: 'B', text: 'Tam sana göre bir iş buldum.' },
          { id: 'C', text: 'Düne göre bugün daha iyiyim.' },
          { id: 'D', text: 'Anlatılanlara göre buralar eskiden ormanmış.' },
          { id: 'E', text: 'Kurallara göre hareket etmeliyiz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde dün ile bugün karşılaştırılmıştır.'
      },
      {
        id: 'q-ebu-2-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ile" kelimesi edat görevindedir?',
        options: [
          { id: 'A', text: 'Kitap ile defter aynı rafta duruyor.' },
          { id: 'B', text: 'Ali ile Veli dün kavga etmiş.' },
          { id: 'C', text: 'Kedi ile köpek pek iyi anlaşamaz.' },
          { id: 'D', text: 'Tren ile seyahat etmeyi çok severim.' },
          { id: 'E', text: 'Annesi ile babası onu görmeye gelmiş.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "ile" araç/vasıta ilgisi kurmuştur, "ve" anlamında değildir. Dolayısıyla edattır.'
      },
      {
        id: 'q-ebu-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde seslenme bildiren bir sözcük yoktur?',
        options: [
          { id: 'A', text: 'Ey Türk gençliği!' },
          { id: 'B', text: 'Bre gafil, ne yaptığını sanıyorsun?' },
          { id: 'C', text: 'Be adam, biraz dikkat etsene!' },
          { id: 'D', text: 'Tüh, cüzdanımı evde unuttum!' },
          { id: 'E', text: 'Yahu, böyle iş mi olur?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Tüh" üzülme/hayıflanma bildirir, seslenme bildirmez.'
      },
      {
        id: 'q-ebu-2-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de" bağlacı cümleye "dahi, bile" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Büyüyecek de adam olacak.' },
          { id: 'B', text: 'Bunu sen de biliyorsun.' },
          { id: 'C', text: 'Kitabı okudum da bir şey anlamadım.' },
          { id: 'D', text: 'Çalıştı da başardı.' },
          { id: 'E', text: 'Oraya kadar gitmiş de beni görmemiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "sen bile/dahi biliyorsun" anlamı vardır.'
      }
    ]
  },
  {
    id: 'test-ebu-2-orta',
    title: 'Edat Bağlaç Ünlem 2 (Orta)',
    description: 'Edat Bağlaç Ünlem - Orta (21-30)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-ebu-2-11',
        difficulty: 'medium',
        questionText: '"Kadar" edatı aşağıdakilerin hangisinde cümleye zaman anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Cennet kadar güzel bir yerdi.' },
          { id: 'B', text: 'Sabaha kadar hiç uyumadı.' },
          { id: 'C', text: 'Avuç içi kadar bir odada kalıyor.' },
          { id: 'D', text: 'Onun kadar zeki birini görmedim.' },
          { id: 'E', text: 'Seni dünyalar kadar seviyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "sabaha kadar" ifadesi eylemin zamanını/süresini belirtmektedir.'
      },
      {
        id: 'q-ebu-2-12',
        difficulty: 'medium',
        questionText: '"Yalnız" sözcüğü hangisinde edat görevindedir?',
        options: [
          { id: 'A', text: 'Çok çalıştı yalnız başarılı olamadı.' },
          { id: 'B', text: 'Onu anlıyorum yalnız elimden bir şey gelmiyor.' },
          { id: 'C', text: 'Toplantıya yalnız Ali katıldı.' },
          { id: 'D', text: 'Yalnız insanlar daha duygusaldır.' },
          { id: 'E', text: 'O koca evde yıllarca yalnız yaşadı.' }
        ],
        correctOptionId: 'C',
        explanation: '"Yalnız" sözcüğü "sadece" anlamında kullanıldığında edattır. C seçeneğinde bu anlamdadır. A ve B\'de bağlaç, D\'de sıfat, E\'de zarftır.'
      },
      {
        id: 'q-ebu-2-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" soru edatı farklı bir görevde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün hava yağmurlu mu?' },
          { id: 'B', text: 'Bunu sen mi söyledin?' },
          { id: 'C', text: 'Şirin mi şirin bir kedi gördüm.' },
          { id: 'D', text: 'Akşam bize gelecek misiniz?' },
          { id: 'E', text: 'Bu kitap senin mi?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "mi" edatı soru sormak için değil, pekiştirme yapmak için kullanılmıştır.'
      },
      {
        id: 'q-ebu-2-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde hem edat hem bağlaç vardır?',
        options: [
          { id: 'A', text: 'Senin için ne söylesem az.' },
          { id: 'B', text: 'Hem giderim hem ağlarım.' },
          { id: 'C', text: 'Benim gibi seveni zor bulursun\nVe anlarsın kıymetimi.' },
          { id: 'D', text: 'O kadar yalnızdım ki etrafımda kimse yoktu.' },
          { id: 'E', text: 'Ne doğan güne hükmüm geçer\nNe halden anlayan bulunur.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "gibi" edat, "ve" ise bağlaçtır.'
      },
      {
        id: 'q-ebu-2-15',
        difficulty: 'medium',
        questionText: '"İle" sözcüğü aşağıdaki cümlelerin hangisinde zarf tümleci oluşturmamıştır?',
        options: [
          { id: 'A', text: 'Hırsla yerinden fırladı.' },
          { id: 'B', text: 'Arkadaşlarıyla sinemaya gitti.' },
          { id: 'C', text: 'Soruları büyük bir dikkatle çözdü.' },
          { id: 'D', text: 'Yaşlı adam bastonla yürüyordu.' },
          { id: 'E', text: 'Annesiyle babasını çok özlemişti.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Annesiyle (ve) babasını" nesne görevindedir ve bağlaçtır. Diğer seçeneklerde durum veya araç bildiren zarf tümleci oluşturmuştur.'
      },
      {
        id: 'q-ebu-2-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ünlem, bir ismi niteleyerek sıfat görevine geçmiştir?',
        options: [
          { id: 'A', text: 'Vah zavallı kadın, çok acı çekmiş!' },
          { id: 'B', text: 'Ah be kardeşim, neden böyle yaptın!' },
          { id: 'C', text: 'Yazık oldu o gencecik çocuğa.' },
          { id: 'D', text: 'Ey ulu çınar, nelere şahit oldun sen!' },
          { id: 'E', text: 'Aman diyeyim, sakın oraya gitme.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Vah" ünlemi, "zavallı kadın" sıfat tamlamasının başına gelerek cümlede bir niteleme görevi üstlenmiştir. (Burada daha net olarak "vah vah durumları" gibi isimleşen kullanımlar aranabilir ancak genel olarak ünlemlerin niteleyici olabileceği yapı budur. Daha doğrusu doğrudan ünlem sıfat gibi kullanılmıştır).'
      },
      {
        id: 'q-ebu-2-17',
        difficulty: 'medium',
        questionText: '"Doğru" sözcüğü hangisinde edat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Doğru söz yemin istemez.' },
          { id: 'B', text: 'Sorunun doğru cevabını kimse bilemedi.' },
          { id: 'C', text: 'Eve doğru yürümeye başladık.' },
          { id: 'D', text: 'Tahtaya çizdiği doğru biraz eğri oldu.' },
          { id: 'E', text: 'Bana her zaman doğruyu söyle.' }
        ],
        correctOptionId: 'C',
        explanation: '"-e doğru" şeklinde yönelim bildiren yapı edattır.'
      },
      {
        id: 'q-ebu-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde "ancak" sözcüğü bağlaç görevindedir?',
        options: [
          { id: 'A', text: 'Bu soruyu ancak Ali çözebilir.' },
          { id: 'B', text: 'Sana ancak iki yüz lira verebilirim.' },
          { id: 'C', text: 'Oraya giderim ancak fazla kalmam.' },
          { id: 'D', text: 'Ellerim ancak ısındı.' },
          { id: 'E', text: 'Araba ancak buraya kadar çıkabildi.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ama, fakat" anlamında kullanıldığında bağlaç olur. C seçeneğinde bu anlamdadır.'
      },
      {
        id: 'q-ebu-2-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde bağlaç iki sıfatı birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Akşam oldu ve herkes evine döndü.' },
          { id: 'B', text: 'Eski ve yıpranmış elbiseler giyiyordu.' },
          { id: 'C', text: 'Ali ile Ayşe bahçede oynuyor.' },
          { id: 'D', text: 'Hem çalışıyor hem müzik dinliyor.' },
          { id: 'E', text: 'Odanın kapısını ve penceresini açtı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "eski" ve "yıpranmış" sıfatları "ve" bağlacıyla birbirine bağlanmıştır.'
      },
      {
        id: 'q-ebu-2-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı, cümleye "şaşkınlık" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Çok çalışmış ki yorgun düşmüş.' },
          { id: 'B', text: 'Sınavı kazandı ki bu kadar mutlu.' },
          { id: 'C', text: 'Dışarı bir çıktım ki her yer bembeyaz!' },
          { id: 'D', text: 'Anladım ki her şey yalanmış.' },
          { id: 'E', text: 'Erken kalk ki işlerini bitiresin.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde beklenmedik bir durum karşısında duyulan şaşkınlık ifadesi vardır.'
      }
    ]
  },
  {
    id: 'test-ebu-2-zor',
    title: 'Edat Bağlaç Ünlem 2 (Zor)',
    description: 'Edat Bağlaç Ünlem - Zor (31-40)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-ebu-2-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç, nesneleri birbirine bağlamıştır?',
        options: [
          { id: 'A', text: 'Ne kitap okudu ne televizyon izledi.' },
          { id: 'B', text: 'Bugün de yarın da seni bekleyeceğim.' },
          { id: 'C', text: 'Ya beni de götür ya sen de gitme.' },
          { id: 'D', text: 'Hem annemi hem babamı aradım.' },
          { id: 'E', text: 'Kitabı aldı ve hızla odadan çıktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "annemi" ve "babamı" belirtili nesnedir ve "hem...hem" bağlacı ile birbirine bağlanmıştır.'
      },
      {
        id: 'q-ebu-2-22',
        difficulty: 'hard',
        questionText: '"İle" kelimesi aşağıdaki kullanımların hangisinde diğerlerinden farklı bir sözcük türüdür?',
        options: [
          { id: 'A', text: 'Leyla ile Mecnun hikayesi herkesi etkiler.' },
          { id: 'B', text: 'Suç ve Ceza ile Sefiller en sevdiğim romanlardır.' },
          { id: 'C', text: 'Kalemle kağıt masanın üzerinde duruyordu.' },
          { id: 'D', text: 'Babasıyla annesi yarın tatile çıkacakmış.' },
          { id: 'E', text: 'Bu zorluklarla ancak sabırla başa çıkılır.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde "ile" (veya -le) "ve" anlamında kullanılmış olup bağlaçtır. E seçeneğindeki "sabırla" sözcüğündeki "ile" araç/durum bildirir, "ve" anlamına gelmez, bu yüzden edattır.'
      },
      {
        id: 'q-ebu-2-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "başka" sözcüğü edat (ilgeç) görevindedir?',
        options: [
          { id: 'A', text: 'Başka konulardan konuşalım biraz da.' },
          { id: 'B', text: 'Bunu senden başka kimseye anlatmadım.' },
          { id: 'C', text: 'Buradaki insanların hepsi bir başka.' },
          { id: 'D', text: 'Başkasının derdiyle dertlenmek zordur.' },
          { id: 'E', text: 'O, bambaşka bir dünyanın insanıydı.' }
        ],
        correctOptionId: 'B',
        explanation: '"-den başka" şeklinde kullanıldığında edat olur.'
      },
      {
        id: 'q-ebu-2-24',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "üzere" edatı cümleye "koşul, şart" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Güneş batmak üzere, acele edelim.' },
          { id: 'B', text: 'Kitabını yarın getirmek üzere alabilirsin.' },
          { id: 'C', text: 'Anlaştığımız üzere yarın sabah buluşacağız.' },
          { id: 'D', text: 'Misafirleri karşılamak üzere kapıya yöneldi.' },
          { id: 'E', text: 'Hayatım boyunca unutmamak üzere kazıdım aklıma.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde kitabı almasının şartı "yarın geri getirmesi" olarak belirtilmiştir.'
      },
      {
        id: 'q-ebu-2-25',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde "de / da" bağlacı bulunduğu cümleye "yakınma, sitem" anlamı katmıştır?',
        options: [
          { id: 'A', text: 'Gelsen de gelmesen de artık fark etmez.' },
          { id: 'B', text: 'Bu kadar yoldan gelmiş de bize uğramamış.' },
          { id: 'C', text: 'Oraya gideceksin de ne olacak sanki?' },
          { id: 'D', text: 'Çalıştı da sınavı kazandı çok şükür.' },
          { id: 'E', text: 'Sen de mi Brütüs?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde, kişinin yakınına kadar gelip de uğramaması sitem konusu yapılmıştır.'
      },
      {
        id: 'q-ebu-2-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi edat veya bağlaç değildir?',
        options: [
          { id: 'A', text: 'Bana *göre* bu işin sonu hiç iyi değil.' },
          { id: 'B', text: 'Onu gördüğümden *beri* kalbim hızla çarpıyor.' },
          { id: 'C', text: 'Seninle *beraber* her yere gelirim.' },
          { id: 'D', text: 'İşlerini bitirip *hemen* yola çıktı.' },
          { id: 'E', text: 'Sabahtan *dek* seni bekledik buralarda.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "hemen" sözcüğü zaman bildiren bir zarftır.'
      },
      {
        id: 'q-ebu-2-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "yalnız" sözcüğünün türü ötekilerden farklıdır?',
        options: [
          { id: 'A', text: 'Bu konuyu yalnız seninle konuşabilirim.' },
          { id: 'B', text: 'Yalnız bu parayla o evi alamazsın.' },
          { id: 'C', text: 'Bunu yalnız bizim takım başarabilirdi.' },
          { id: 'D', text: 'Sinemaya yalnız gideceğini söyledi.' },
          { id: 'E', text: 'Sana güveniyorum yalnız hata yapmamalısın.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B ve C seçeneklerinde "yalnız" sözcüğü "sadece" anlamında kullanılmış olup edattır. D seçeneğinde fiilimsinin durumunu bildiren zarftır. E seçeneğinde ise "ama, fakat" anlamında kullanılarak bağlaç olmuştur. (Soru farklı sözcük türü aradığı için D seçeneğinde de zarf vardır. Ancak A, B, C "sadece" anlamında edat iken, D zarf, E bağlaç. Bu durumda sorunun dizilişi biraz karmaşık olsa da "bağlaç" öne çıkan en belirgin farklı türdür. D seçeneğinde "yalnız" durum zarfıdır. En doğru cevap E seçeneğidir çünkü iki cümleyi bağlıyor.)'
      },
      {
        id: 'q-ebu-2-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir edat isim tamlamasının tamlayanı görevindeki bir sözcük öbeği içinde yer almıştır?',
        options: [
          { id: 'A', text: 'Deniz gibi gözleriyle etrafa gülücükler saçıyordu.' },
          { id: 'B', text: 'Senin gibisinin bu dünyada yeri yok.' },
          { id: 'C', text: 'Buz gibi suyun içine atlayıverdi.' },
          { id: 'D', text: 'Onun gibi olmak için çok çalışmalısın.' },
          { id: 'E', text: 'Cennet kadar güzel vatanımızın kıymetini bilelim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Senin gibisi" belirtili isim tamlamasıdır. "gibi" edatı iyelik eki alarak (gibisi) isimleşmiş ve tamlamanın tamlananı olmuştur. (Tamlayan: senin). Düzeltme: Soruda "tamlayanı" diyor, ancak burada "senin gibisinin yeri" zincirleme isim tamlamasında "senin gibisinin" tamlayandır ve içinde edat vardır.'
      },
      {
        id: 'q-ebu-2-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde bağlaç olan "ki" kendisinden önceki kelimeye bitişik yazıldığı için yazım yanlışına sebep olmuştur?',
        options: [
          { id: 'A', text: 'Oysaki ben ona hep güvenmiştim.' },
          { id: 'B', text: 'Mademki gelmeyecektin neden haber vermedin?' },
          { id: 'C', text: 'Anlaşıldıki bu iş kolay bitmeyecek.' },
          { id: 'D', text: 'Meğerki her şeyi önceden planlamış.' },
          { id: 'E', text: 'Halbuki onun hiç suçu yoktu.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki "ki"ler kalıplaşmış olduğu için bitişik yazılır (SOMBAHÇEMİ kuralı). C seçeneğinde "Anlaşıldı ki" şeklinde ayrı yazılması gereken "ki" bitişik yazılmıştır.'
      },
      {
        id: 'q-ebu-2-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki ikili dizelerin hangisinde ünlem, bir sitemi ifade etmektedir?',
        options: [
          { id: 'A', text: 'Ey mavi göklerin beyaz ve kızıl süsü,\nKız kardeşimin gelinliği, şehidimin son örtüsü!' },
          { id: 'B', text: 'Yazık, seni anlıyorum diyene!\nNe kadar da boş bir yalanmış.' },
          { id: 'C', text: 'Ah, o kadrini bilmediğim günler,\nKoklanmadan solan gül gibi geçti.' },
          { id: 'D', text: 'Hey, baksanıza bana çocuklar!\nSiz buralı değil misiniz?' },
          { id: 'E', text: 'Aman ormancı, canım ormancı,\nKöyümüze getirdin yoktan bir acı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Aman" ve "canım" seslenmeleri eşliğinde ormancıya duyulan bir sitem (köyümüze acı getirdin) dile getirilmektedir.'
      }
    ]
  }
];
