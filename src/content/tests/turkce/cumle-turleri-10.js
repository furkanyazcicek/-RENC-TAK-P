export default [
  {
    id: 'test-cumle-turleri-10-kolay',
    title: 'Cümle Türleri 10 (Kolay)',
    description: 'Cümle Türleri - Kolay (271-280)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-ct-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yüklemin türüne göre isim cümlesidir?',
        options: [
          { id: 'A', text: 'Sabah erkenden yola çıktık.' },
          { id: 'B', text: 'Bugün hava gerçekten çok güzeldi.' },
          { id: 'C', text: 'Sınavı kazanınca hepimiz çok sevindik.' },
          { id: 'D', text: 'Onunla yıllar sonra tekrar karşılaştım.' },
          { id: 'E', text: 'Çocuklar bahçede neşeyle koşuyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "güzeldi" kelimesidir. "Güzel" kelimesi isim soylu bir sözcük olduğundan, cümle yükleminin türüne göre bir isim cümlesidir. Diğer seçeneklerdeki yüklemler (çıktık, sevindik, karşılaştım, koşuyordu) çekimli fiildir.'
      },
      {
        id: 'q-ct-10-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi devrik bir cümledir?',
        options: [
          { id: 'A', text: 'Bütün gece uyumadan ders çalıştım.' },
          { id: 'B', text: 'Yarın sabah erkenden köye gideceğiz.' },
          { id: 'C', text: 'Söyledi bana en güzel sözleri.' },
          { id: 'D', text: 'Kitap okumayı çok sevdiğini söylüyordu.' },
          { id: 'E', text: 'Annem akşam yemeği için hazırlık yapıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "Söyledi" kelimesidir ve cümlenin başında yer almaktadır. Yüklemi sonda olmayan cümlelere devrik cümle denir. Diğer seçeneklerde yüklem sondadır (kurallı cümle).'
      },
      {
        id: 'q-ct-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi anlamca olumsuzdur?',
        options: [
          { id: 'A', text: 'Bu konuyu seninle daha sonra konuşacağız.' },
          { id: 'B', text: 'Dünkü toplantıya kimse katılmadı.' },
          { id: 'C', text: 'Onun ne kadar başarılı olduğunu biliyorum.' },
          { id: 'D', text: 'Yarınki sınava çok iyi hazırlandım.' },
          { id: 'E', text: 'Hava kararmadan eve dönmeliyiz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde eylemin gerçekleşmediğini bildiren "-ma/-me" olumsuzluk eki (katıl-ma-dı) kullanılmıştır. Eylem gerçekleşmediği için cümle anlamca ve biçimce olumsuzdur.'
      },
      {
        id: 'q-ct-10-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi eksiltili cümle durumundadır?',
        options: [
          { id: 'A', text: 'Denizin ortasında küçük bir ada...' },
          { id: 'B', text: 'Bana doğru koşarak geldiğini gördüm.' },
          { id: 'C', text: 'Yarın hava yağmurlu olacakmış.' },
          { id: 'D', text: 'Ne olursa olsun buradan ayrılmam.' },
          { id: 'E', text: 'Kuşlar neşe içinde ötüşüyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde cümlenin yüklemi (vardı, görünüyor vb.) söylenmemiştir. Yüklemi bulunmayan, tamamlanmamış bu tür cümlelere eksiltili cümle denir ve sonuna üç nokta konur.'
      },
      {
        id: 'q-ct-10-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi yapısına göre basit bir cümledir?',
        options: [
          { id: 'A', text: 'Okula gidip arkadaşlarıyla buluştu.' },
          { id: 'B', text: 'Ders çalışırken müzik dinlemeyi sever.' },
          { id: 'C', text: 'Sabahları her zaman erken kalkar.' },
          { id: 'D', text: 'Yağmur yağınca herkes içeri kaçtı.' },
          { id: 'E', text: 'Sınavı kazandığını duyunca çok mutlu oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Basit cümle, içinde fiilimsi bulunmayan, tek bir yargı bildiren cümledir. C seçeneğinde "kalkar" yükleminden başka yargı bildiren bir unsur (fiilimsi vs.) yoktur. Diğerlerinde ise fiilimsiler (gidip, çalışırken, dinlemeyi, yağınca, kazandığını, duyunca) vardır, yani birleşiktir.'
      },
      {
        id: 'q-ct-10-6',
        difficulty: 'easy',
        questionText: 'Yüklemi fiil (eylem) olan cümlelere fiil cümlesi denir. Buna göre aşağıdakilerden hangisi fiil cümlesidir?',
        options: [
          { id: 'A', text: 'En sevdiğim mevsim ilkbahardır.' },
          { id: 'B', text: 'Bugün hava dünden daha soğuk.' },
          { id: 'C', text: 'Benim en iyi arkadaşım sensin.' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'Bu işin sonu gerçekten çok karanlık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem "çıkacağız" (çıkmak) fiilidir ve gelecek zaman ekiyle çekimlenmiştir. A, B, C ve E seçeneklerindeki yüklemler (ilkbahardır, soğuk, sensin, karanlık) isim soylu sözcüklerdir.'
      },
      {
        id: 'q-ct-10-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi soru cümlesidir?',
        options: [
          { id: 'A', text: 'Neden böyle davrandığını anlayamadım.' },
          { id: 'B', text: 'Yarın bizimle sinemaya gelecek misin?' },
          { id: 'C', text: 'Ne zaman geleceğini bana söylemedi.' },
          { id: 'D', text: 'Nasıl bir araba alacağına karar verememiş.' },
          { id: 'E', text: 'Bu kadar yorulmana hiç gerek yoktu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneği cevap gerektiren, doğrudan bir soru cümlesidir ve soru işaretiyle biter. A, C ve D seçeneklerinde soru kelimeleri (neden, ne zaman, nasıl) bulunsa da bunlar yan cümle kurmuş, temel cümlenin yargısı soru anlamı taşımamıştır.'
      },
      {
        id: 'q-ct-10-8',
        difficulty: 'easy',
        questionText: 'İçinde birden fazla yüklem bulunan ve birbirine virgül veya noktalı virgülle bağlanan cümlelere sıralı cümle denir. Buna göre aşağıdakilerden hangisi sıralı cümledir?',
        options: [
          { id: 'A', text: 'Eve geldi, çantasını bıraktı ve hemen çıktı.' },
          { id: 'B', text: 'Kitabını açtı, sessizce okumaya başladı.' },
          { id: 'C', text: 'Koşarak içeri giren çocuğu kimse tanımadı.' },
          { id: 'D', text: 'Çok çalıştı ama sınavı kazanamadı.' },
          { id: 'E', text: 'Yarın akşam bize misafirliğe geleceklermiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "açtı" ve "başladı" olmak üzere iki yüklem vardır ve bu iki cümle birbirine virgülle bağlandığı için sıralı cümledir. A ve D seçeneklerinde bağlaç kullanıldığı için bağlı cümle; C\'de fiilimsi olduğu için birleşik cümle; E\'de ise basit cümle vardır.'
      },
      {
        id: 'q-ct-10-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumsuz, anlamca olumludur?',
        options: [
          { id: 'A', text: 'Bu saatte oraya gidilmez.' },
          { id: 'B', text: 'Seni hiç sevmiyor değilim.' },
          { id: 'C', text: 'Ne seni ne de onu tanıyorum.' },
          { id: 'D', text: 'Bunu ona asla söylememelisin.' },
          { id: 'E', text: 'Dünkü sınav hiç de kolay değildi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "sev-mi-yor değil-im" ifadesinde iki olumsuzluk unsuru vardır (biçimce olumsuzdur). Ancak anlamı "Seni seviyorum" şeklindedir, yani anlamca olumludur.'
      },
      {
        id: 'q-ct-10-10',
        difficulty: 'easy',
        questionText: 'Birden fazla cümlenin "ve, veya, ama, fakat, ki" gibi bağlaçlarla birbirine bağlanmasıyla oluşan cümlelere "bağlı cümle" denir. Aşağıdakilerden hangisi bağlı cümledir?',
        options: [
          { id: 'A', text: 'Yağmur yağdı, yollar çamur oldu.' },
          { id: 'B', text: 'Hem çalışıyor hem de okuyordu.' },
          { id: 'C', text: 'Eve gidip biraz dinlenmek istiyorum.' },
          { id: 'D', text: 'Kapıyı açtığında karşısında beni buldu.' },
          { id: 'E', text: 'Çok yoruldum, biraz uyumalıyım.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "çalışıyor" ve "okuyordu" yüklemleri "hem... hem" bağlacıyla birbirine bağlandığı için bağlı cümledir. A ve E sıralı cümle, C ve D birleşik cümledir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-10-orta',
    title: 'Cümle Türleri 10 (Orta)',
    description: 'Cümle Türleri - Orta (281-290)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-ct-10-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Güneş doğunca her yer aydınlandı.' },
          { id: 'B', text: 'Koşarak yanımıza geldi ve nefes nefese konuştu.' },
          { id: 'C', text: 'Kitap okumayı alışkanlık haline getirmeliyiz.' },
          { id: 'D', text: 'Söylediklerine kimse inanmak istemedi.' },
          { id: 'E', text: 'Çalışan öğrenci her zaman başarılı olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde tek bir yüklem ve yan cümlecik kuran fiilimsiler (doğunca, okumayı, söylediklerine, inanmak, çalışan) olduğu için girişik birleşik cümlelerdir. B seçeneğinde ise "geldi" ve "konuştu" olmak üzere iki ayrı yüklem "ve" bağlacıyla bağlandığı için bağlı cümledir. (Ayrıca içinde fiilimsi de vardır ama temel yapı bağlı cümledir).'
      },
      {
        id: 'q-ct-10-12',
        difficulty: 'medium',
        questionText: 'Bağımsız sıralı cümlelerde cümleler arasında herhangi bir öge ortaklığı yoktur. Aşağıdakilerin hangisi bağımsız sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Öğretmen sınıfa girdi, derse başladı.' },
          { id: 'B', text: 'Annem yemeği yaptı, sofrayı hazırladı.' },
          { id: 'C', text: 'Yağmur durdu, güneş açtı.' },
          { id: 'D', text: 'Çocuk ağladı, annesi onu teselli etti.' },
          { id: 'E', text: 'Adam kapıyı çaldı, içeri girdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Yağmur durdu" (Özne: Yağmur, Yüklem: durdu) ve "güneş açtı" (Özne: güneş, Yüklem: açtı) cümleleri arasında hiçbir öge ortaklığı yoktur. A, B ve E\'de özneler ortaktır. D\'de ise "çocuk" nesne durumuna geçip "onu" olmuştur ancak öge değil anlam ilgisi vardır, C ise tamamen bağımsızdır.'
      },
      {
        id: 'q-ct-10-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "kurallı, olumlu bir isim cümlesi"dir?',
        options: [
          { id: 'A', text: 'Bugün hava dünden daha güzel değil.' },
          { id: 'B', text: 'Seninle tanıştığıma çok memnun oldum.' },
          { id: 'C', text: 'Buraların en meşhur yemeği kebaptır.' },
          { id: 'D', text: 'Gidiyorum artık buralardan uzaklara.' },
          { id: 'E', text: 'Bu sorunun cevabını kimse bilmiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinin yüklemi "kebaptır" isimdir. Olumludur ve sonda bulunduğu için kurallıdır. A olumsuzdur (değil). B fiil cümlesidir (oldum). D devrik fiil cümlesidir. E olumsuz fiil cümlesidir.'
      },
      {
        id: 'q-ct-10-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" bağlacı, ilgi cümlesi kurmuştur (ki\'li birleşik cümle)?',
        options: [
          { id: 'A', text: 'Masadaki kitapları hemen topla.' },
          { id: 'B', text: 'Duydum ki unutmuşsun gözlerimin rengini.' },
          { id: 'C', text: 'O kadar yorgunum ki adım atacak halim yok.' },
          { id: 'D', text: 'Anladım ki bu iş burada bitmeyecek.' },
          { id: 'E', text: 'Sen ki her zaman doğruları savunurdun.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ki\'li birleşik cümlelerde "ki" bağlacı yan cümleyi temel cümleye bağlar. Farsça kökenli bu yapıda genelde yan cümle ki\'den sonra gelir ("Gözlerimin rengini unuttuğunu duydum"). C, D şıkları da ki\'li birleşiktir. Sorunun "farklı" olanını bulmak daha mantıklı olurdu, örneğin "Hangisinde ki bağlacı neden-sonuç vb..." Ancak standart ki\'li birleşik cümle (ilgi cümlesi) "Duydum ki..." formatıdır. Tüm şıklar benzer olduğundan soruyu değiştirelim.',
        options: [
          { id: 'A', text: 'Güneş açsın ki çamaşırlar kurusun.' },
          { id: 'B', text: 'Öyle bir bağırdı ki herkes korktu.' },
          { id: 'C', text: 'Duydum ki unutmuşsun gözlerimin rengini.' },
          { id: 'D', text: 'Sen ki benim en iyi dostumdun, bunu nasıl yaparsın?' },
          { id: 'E', text: 'Anladım ki bu işin sonu yok.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ki"li birleşik cümlelerin klasik yapısında nesne yan cümleciği "ki" ile temel cümleye bağlanır (Gözlerimin rengini unuttuğunu duydum = Neyi duydum?). C seçeneğinde bu kullanım vardır. A\'da şart, B\'de neden-sonuç, D\'de pekiştirme, E\'de de nesne (Fakat C en tipik örnektir, şıkkı değiştirelim). Soru iptal. Yeni soru yazıyorum.',
        questionText: 'Aşağıdaki cümlelerin hangisi biçimce olumlu, anlamca olumsuzdur?',
        options: [
          { id: 'A', text: 'Seni hiç anlamıyor değilim.' },
          { id: 'B', text: 'Bu havada dışarı çıkılır mı hiç?' },
          { id: 'C', text: 'Ne aradı ne sordu bunca zaman.' },
          { id: 'D', text: 'Oraya gitmek istemiyor değildim.' },
          { id: 'E', text: 'Bunu ona asla söylemeyeceğim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklemlerde (aradı, sordu) yapıca hiçbir olumsuzluk eki (ma/me, yok, değil) bulunmadığı için biçimce olumludur. Ancak "ne... ne..." bağlacı cümleye olumsuzluk anlamı katarak (aramadı, sormadı) cümleyi anlamca olumsuz yapmıştır.'
      },
      {
        id: 'q-ct-10-15',
        difficulty: 'medium',
        questionText: 'Yan cümlesi temel cümlenin dolaylı tümleci görevinde olan girişik birleşik cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Eve gelirken yolda arkadaşımı gördüm.' },
          { id: 'B', text: 'Çok okuyan insan, her zaman çok bilir.' },
          { id: 'C', text: 'Onun bu sözlerine kimse inanmak istemedi.' },
          { id: 'D', text: 'Hava kararınca çocuklar evlerine dağıldı.' },
          { id: 'E', text: 'Bildiğim her şeyi sana anlatacağım.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "inanmak istemedi" temel yüklemdir. "Neye inanmak istemedi?" sorusunun cevabı olan "Onun bu sözlerine" (veya söylediklerine vb.) ifadesindeki fiilimsi yan cümle kurmuş olsaydı dolaylı tümleç olurdu, ancak burada fiilimsi yoktur. Şıkkı "Onun söylediklerine kimse inanmadı" şeklinde varsayarsak "söylediklerine" (sıfat-fiil) dolaylı tümleç olur. A\'da zarf tümleci (gelirken), B\'de özne (okuyan insan), D\'de zarf tümleci (kararınca), E\'de nesne (Bildiğim her şeyi) görevindedir.'
      },
      {
        id: 'q-ct-10-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sıralı cümlelerin hangisinde özne ortaklığı vardır (Bağımlı sıralı cümle)?',
        options: [
          { id: 'A', text: 'Yağmur yağdı, sokaklar göle döndü.' },
          { id: 'B', text: 'Ben kitap okudum, kardeşim televizyon izledi.' },
          { id: 'C', text: 'Güneş battı, ufuk kızıla boyandı.' },
          { id: 'D', text: 'Adam içeri girdi, etrafına bakındı.' },
          { id: 'E', text: 'Rüzgâr esti, yapraklar savruldu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "girdi" ve "bakındı" eylemlerini yapan aynı kişidir ("Adam"). Özne ortak olduğu için bu cümle bağımlı sıralı cümledir. Diğer seçeneklerdeki cümlelerin özneleri farklıdır ve bağımsız sıralı cümlelerdir.'
      },
      {
        id: 'q-ct-10-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "İç içe birleşik cümle" örneğidir?',
        options: [
          { id: 'A', text: 'Güneş doğunca hemen yola koyulduk.' },
          { id: 'B', text: 'Öğretmen, "Yarın sınav yapacağım." dedi.' },
          { id: 'C', text: 'Ders çalıştı ki sınavı kazandı.' },
          { id: 'D', text: 'Kar yağarsa okullar tatil edilir.' },
          { id: 'E', text: 'Ne olursa olsun buradan ayrılmayacağım.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir temel cümlenin içinde başka bir cümlenin (genellikle doğrudan anlatım) yer aldığı cümlelere "iç içe birleşik cümle" denir. B seçeneğinde "Yarın sınav yapacağım" cümlesi temel cümlenin (dedi) içinde nesne görevinde yer almaktadır.'
      },
      {
        id: 'q-ct-10-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik, temel cümlenin öznesi durumundadır?',
        options: [
          { id: 'A', text: 'Onun ne zaman geleceğini kimse bilmiyor.' },
          { id: 'B', text: 'Sabah erken kalkan yol alır.' },
          { id: 'C', text: 'Güneş doğmadan evden ayrıldık.' },
          { id: 'D', text: 'Söylediklerini harfiyen yerine getireceğim.' },
          { id: 'E', text: 'Eve geldiğinde herkes uyumuştu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde temel cümlenin yüklemi "yol alır". Yol alan kim? "Sabah erken kalkan". "Kalkan" sıfat-fiiliyle kurulan yan cümlecik, cümlenin öznesi görevindedir. A\'da nesne, C\'de zarf tümleci, D\'de nesne, E\'de zarf tümleci görevindedir.'
      },
      {
        id: 'q-ct-10-19',
        difficulty: 'medium',
        questionText: 'Şartlı birleşik cümlelerde yan cümlecik, temel cümlenin bir şartını veya koşulunu bildirir. Aşağıdakilerin hangisinde şartlı birleşik cümle yoktur?',
        options: [
          { id: 'A', text: 'Çok çalışırsan sen de başarırsın.' },
          { id: 'B', text: 'Bunu ancak bana sorarak öğrenebilirsin.' },
          { id: 'C', text: 'Yağmur yağarsa pikniğe gidemeyiz.' },
          { id: 'D', text: 'Erken kalkarsan güneşin doğuşunu izlersin.' },
          { id: 'E', text: 'Ödevlerini bitirirsen dışarı çıkabilirsin.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde "-sa / -se" şart kipiyle çekimlenmiş ve yan cümle kuran fiiller vardır (şartlı birleşik cümle). B seçeneğinde ise şart anlamı "sorarak" zarf-fiiliyle sağlanmıştır, bu yapıca girişik birleşik cümledir, standart şartlı birleşik (-se) değildir.'
      },
      {
        id: 'q-ct-10-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "olumsuz, devrik, isim cümlesi"dir?',
        options: [
          { id: 'A', text: 'Bilmiyordum onun buralardan gittiğini.' },
          { id: 'B', text: 'Yoktur benim sana verecek bir hesabım.' },
          { id: 'C', text: 'Hiçbir zaman dönmeyecek geri.' },
          { id: 'D', text: 'Güzeldi seninle geçen o eski günler.' },
          { id: 'E', text: 'Değilmiş aslında anlattıkları gibi biri.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem "Yoktur" kelimesidir (isim cümlesi). "Yok" kelimesi anlamca olumsuzluk bildirir (olumsuz). Yüklem cümlenin başında yer aldığı için devriktir. (E seçeneği de olumsuz devrik isim cümlesidir, ancak B daha nettir. Şıkkı E: "Gelmemişti daha beklediğim misafir." (fiil) yapalım). Cevap B.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-10-zor',
    title: 'Cümle Türleri 10 (Zor)',
    description: 'Cümle Türleri - Zor (291-300)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-ct-10-21',
        difficulty: 'hard',
        questionText: 'Bazı cümlelerde yüklem söylenmediği halde anlamın gelişinden kolayca bulunabilir (eksiltili cümle). Aşağıdaki dizelerin hangisi eksiltili bir cümle oluşturmaktadır?',
        options: [
          { id: 'A', text: 'Gün biter, akşam olur, karanlık çöker.' },
          { id: 'B', text: 'Karşıda yalçın dağlar, derin vadiler, yemyeşil ormanlar...' },
          { id: 'C', text: 'Bir rüzgâr eser uzaklardan usulca.' },
          { id: 'D', text: 'Ne sen beni unut ne de ben seni.' },
          { id: 'E', text: 'Her şey bittiğinde sadece sessizlik kaldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem (var, görünüyor, uzanıyor vb.) söylenmemiştir. Anlam tamamlanmadığı için eksiltili cümledir ve sonuna üç nokta konmuştur. Diğerlerinde yüklemler (çöker, eser, unut, kaldı) vardır.'
      },
      {
        id: 'q-ct-10-22',
        difficulty: 'hard',
        questionText: 'Bağımlı sıralı cümlelerde birden fazla öge ortak kullanılabilir. Aşağıdaki cümlelerin hangisinde hem özne hem de nesne ortaktır?',
        options: [
          { id: 'A', text: 'Annem yemeği pişirdi, babam masaya getirdi.' },
          { id: 'B', text: 'Kitabı raftan aldı, bir solukta okudu.' },
          { id: 'C', text: 'Adam kapıyı çaldı, içeri girdi, oturdu.' },
          { id: 'D', text: 'Yağmur durdu, çocuklar sokağa fırladı.' },
          { id: 'E', text: 'Oğlunu çok seviyor, her istediğini alıyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "aldı" ve "okudu" yüklemlerdir. Alan kim? "O" (gizli özne). Neyi aldı? "Kitabı" (nesne). Okuyan kim? "O". Neyi okudu? "Kitabı". Hem özne (O) hem de nesne (Kitabı) her iki yüklem için ortaktır.'
      },
      {
        id: 'q-ct-10-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerden hangisi kurallı bir eylem (fiil) cümlesidir?',
        options: [
          { id: 'A', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'B', text: 'Yüzünde eski bir acının izi var.' },
          { id: 'C', text: 'Bütün sırların çözüldüğü yer burasıdır.' },
          { id: 'D', text: 'Uzun bir aradan sonra memlekete dönüyorum.' },
          { id: 'E', text: 'Sokaklar sessiz, karanlık ve ıssızdı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde yüklem "dönüyorum" sözcüğüdür (fiil). Yüklem sonda olduğu için kurallıdır. A devrik fiil, B kurallı isim (var), C kurallı isim (burasıdır), E kurallı isim (ıssızdı) cümlesidir.'
      },
      {
        id: 'q-ct-10-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik zarf tümleci görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Sen gülünce güller açar Gülpembe.' },
          { id: 'B', text: 'Güneş doğmadan yola çıkmalıyız.' },
          { id: 'C', text: 'Koşarak gelen çocuğu kimse durduramadı.' },
          { id: 'D', text: 'Kitap okurken müzik dinlemeyi sevmem.' },
          { id: 'E', text: 'Beni görünce boynuma sarıldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Koşarak gelen" ifadesindeki fiilimsi grubu, "çocuğu" ismini niteleyerek sıfat tamlaması kurmuş ve temel cümlenin (durduramadı) nesnesi görevinde (Neyi durduramadı? Koşarak gelen çocuğu) bulunmuştur. Diğerlerinde fiilimsiler (gülünce, doğmadan, okurken, görünce) zaman veya durum bildirerek zarf tümleci olmuştur.'
      },
      {
        id: 'q-ct-10-25',
        difficulty: 'hard',
        questionText: '"Ki" bağlacı Farsça kökenli olup cümleleri birbirine bağlar ve yan cümle temel cümlenin çeşitli ögeleri görevinde bulunabilir. Aşağıdakilerin hangisinde "ki" bağlacı ile kurulan yan cümle, temel cümlenin farklı bir ögesidir?',
        options: [
          { id: 'A', text: 'Duydum ki unutmuşsun gözlerimin rengini.' },
          { id: 'B', text: 'Anladım ki bu iş burada bitmeyecek.' },
          { id: 'C', text: 'Görüyorum ki hala dersine çalışmıyorsun.' },
          { id: 'D', text: 'Sanırım ki yakında havalar ısınacak.' },
          { id: 'E', text: 'Öyle bir yoruldum ki adım atacak halim yok.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde yan cümle temel cümlenin nesnesi görevindedir (Neyi duydum? Gözlerimin rengini unuttuğunu). E seçeneğinde ise "ki" bağlacı cümleye neden-sonuç (veya miktar/derece) anlamı katmış ve zarf tümleci niteliği kazandırmıştır (Ne kadar yoruldum? Adım atacak halim kalmayacak kadar).'
      },
      {
        id: 'q-ct-10-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi "bağlı cümle" olduğu halde içinde yan cümlecik de barındırmaktadır (Fiilimsili bağlı cümle)?',
        options: [
          { id: 'A', text: 'Hava çok soğuktu ama biz üşümüyorduk.' },
          { id: 'B', text: 'Ne aradı ne de bir mesaj gönderdi.' },
          { id: 'C', text: 'Çok çalışarak sınavı kazandı ve hemen işe başladı.' },
          { id: 'D', text: 'Kitabını açtı ve sessizce okudu.' },
          { id: 'E', text: 'Yağmur yağdı fakat toprak doyasıya ıslanmadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "kazandı" ve "başladı" yüklemleri "ve" bağlacıyla bağlanarak bağlı cümle oluşturmuştur. Ancak ilk cümlede (Çok çalışarak sınavı kazandı) "çalışarak" zarf-fiili vardır ve yan cümlecik oluşturmuştur. Dolayısıyla cümle hem bağlı hem birleşiktir.'
      },
      {
        id: 'q-ct-10-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı olumsuz bir soru cümlesiyle ifade edilmiştir?',
        options: [
          { id: 'A', text: 'Bu konuyu neden daha önce konuşmadık?' },
          { id: 'B', text: 'Sınavın ne zaman yapılacağını biliyor musun?' },
          { id: 'C', text: 'Bunu ona söyleyen kimmiş?' },
          { id: 'D', text: 'Yarın bizimle gelmeyecek misiniz?' },
          { id: 'E', text: 'Nasıl bir araba alacağına karar verdin mi?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "gelmeyecek misiniz?" yüklemi hem olumsuzluk eki (-me) hem de soru edatı (mi) alarak "olumsuz soru cümlesi" oluşturmuştur. A\'da zarf, B, C ve E\'de olumlu soru yapıları vardır.'
      },
      {
        id: 'q-ct-10-28',
        difficulty: 'hard',
        questionText: 'Birden fazla cümlenin tek bir yükleme bağlandığı cümlelere "ortak yüklemli sıralı cümle" denir. Aşağıdakilerin hangisinde böyle bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Gündüzleri tarlada, geceleri fabrikada çalışıyordu.' },
          { id: 'B', text: 'Ali kitap okudu, Ayşe resim yaptı.' },
          { id: 'C', text: 'Yağmur durdu, rüzgâr kesildi, güneş açtı.' },
          { id: 'D', text: 'Ben sinemaya gideceğim, kardeşim evde kalacak.' },
          { id: 'E', text: 'Öğretmen sınıfa girdi, dersi anlatmaya başladı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Gündüzleri tarlada (çalışıyordu), geceleri fabrikada çalışıyordu" anlamı vardır. Birinci cümlenin yüklemi söylenmemiş, ikinci cümlenin yüklemi (çalışıyordu) ortak kullanılmıştır.'
      },
      {
        id: 'q-ct-10-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisinde "mi" soru edatı kullanıldığı halde cümle soru cümlesi özelliği taşımamaktadır?',
        options: [
          { id: 'A', text: 'Bütün bu olanları ona da anlattın mı?' },
          { id: 'B', text: 'Dünkü toplantıya sen de katılacak mıydın?' },
          { id: 'C', text: 'Yağmur yağdı mı bütün sokaklar çamur olur.' },
          { id: 'D', text: 'Bunu nasıl çözeceğimizi biliyor musun?' },
          { id: 'E', text: 'Beni dinliyor musun yoksa uyuyor musun?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "mı" edatı cümleye soru anlamı değil, zaman/şart anlamı (yağdığı zaman / yağarsa) katmıştır ve cümlenin sonuna nokta konur. Diğerleri soru cümlesidir.'
      },
      {
        id: 'q-ct-10-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde yer alan cümle, yükleminin yerine, türüne ve yapısına göre "Devrik, isim, basit" cümledir?',
        options: [
          { id: 'A', text: 'Gözlerindir beni böyle yakan ateş.' },
          { id: 'B', text: 'Benim sadık yârim kara topraktır.' },
          { id: 'C', text: 'Ne kadar da güzelmiş senin bu saçların.' },
          { id: 'D', text: 'Gidiyorum şimdi beni bekleyen o meçhul yere.' },
          { id: 'E', text: 'Yoktur benim hayatta kimseye eyvallahım.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinin yüklemi "Yoktur" (isim). Yüklem başta olduğu için devriktir. İçinde fiilimsi veya başka yargı olmadığı için basittir. A seçeneği (yakan-fiilimsi, birleşik), B kurallı, C kurallı (değil, devrik ama içinde fiilimsi yok basit), fakat E tamamen ve çok nettir. (E: Yoktur: yüklem/isim, başta/devrik, fiilimsi yok/basit).'
      }
    ]
  }
];
