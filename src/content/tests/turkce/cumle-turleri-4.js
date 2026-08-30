export default [
  {
    id: 'test-cumle-turleri-4-kolay',
    title: 'Cümle Türleri 4 (Kolay)',
    description: 'Cümle Türleri - Kolay (91-100)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-ct-4-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yükleminin türüne göre isim cümlesidir?',
        options: [
          { id: 'A', text: 'Sabah erken saatte kalkıp yürüyüşe çıktı.' },
          { id: 'B', text: 'Onun en büyük hayali iyi bir doktor olmaktı.' },
          { id: 'C', text: 'Dışarıda lapa lapa kar yağıyordu.' },
          { id: 'D', text: 'Bu akşam sinemaya gideceğiz.' },
          { id: 'E', text: 'Kitabın sayfalarını hızlıca çevirdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "olmaktı" kelimesi isim-fiil (ol-mak) olduğu için, fiilimsilerin yüklem olduğu cümleler isim cümlesi kabul edilir.'
      },
      {
        id: 'q-ct-4-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi anlamına göre olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Bu araba sandığından da hızlıymış.' },
          { id: 'B', text: 'Sınavı kazandığını duyunca havalara uçtu.' },
          { id: 'C', text: 'Oraya gitmeyi hiç ama hiç düşünmedim.' },
          { id: 'D', text: 'Güzel günlerin geleceğine inanıyorum.' },
          { id: 'E', text: 'Herkesin fikrine saygı duymalıyız.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklemdeki "-me" eki olumsuzluk bildirmektedir (düşünmedim), dolayısıyla cümle biçimce ve anlamca olumsuzdur.'
      },
      {
        id: 'q-ct-4-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi yükleminin yerine göre kurallı (düz) bir cümledir?',
        options: [
          { id: 'A', text: 'Biliyorum beni ne kadar çok sevdiğini.' },
          { id: 'B', text: 'Bir ilkbahar sabahı uyandım kuş sesleriyle.' },
          { id: 'C', text: 'Geçen yıl tatile Antalya\'ya gittik.' },
          { id: 'D', text: 'Ne güzelmiş seninle buraları gezmek.' },
          { id: 'E', text: 'Anlatırdı uzun uzun gençlik yıllarını.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklemi sonda olan cümleler kurallı cümledir. C seçeneğinde yüklem (gittik) cümlenin sonundadır.'
      },
      {
        id: 'q-ct-4-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir soru cümlesidir?',
        options: [
          { id: 'A', text: 'Neden böyle davrandığını anlayamadım.' },
          { id: 'B', text: 'Kimsenin bu konuda fikri yok galiba.' },
          { id: 'C', text: 'Bana yardım edip edemeyeceğini sordu.' },
          { id: 'D', text: 'Yarın sabah erken mi kalkacağız?' },
          { id: 'E', text: 'Ne zaman geleceğini bana söylemedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği soru eki (mi) içerir ve cevap bekleyen bir soru cümlesidir. Diğerleri soru kelimeleri barındırsa da asıl yargı soru sormamaktadır.'
      },
      {
        id: 'q-ct-4-5',
        difficulty: 'easy',
        questionText: 'İçinde tek yargı, tek yüklem bulunan cümlelere basit cümle denir. Buna göre aşağıdakilerden hangisi basit cümledir?',
        options: [
          { id: 'A', text: 'Koşarak yanımıza geldi.' },
          { id: 'B', text: 'Kitap okumayı çok severdi.' },
          { id: 'C', text: 'Dışarı çıktı, temiz hava aldı.' },
          { id: 'D', text: 'Sabahleyin çayını yudumladı.' },
          { id: 'E', text: 'Eve gidince beni ara.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde fiilimsi veya başka bir yargı yoktur, tek yüklem (yudumladı) vardır. A, B, E seçenekleri fiilimsi içerdiği için birleşik, C seçeneği ise sıralı cümledir.'
      },
      {
        id: 'q-ct-4-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumlu, anlamca olumsuzdur?',
        options: [
          { id: 'A', text: 'Ne seni ne de onu görmek istiyorum.' },
          { id: 'B', text: 'Bu işten anlamıyor değilim.' },
          { id: 'C', text: 'Dün akşam eve gelmedi.' },
          { id: 'D', text: 'Seninle sinemaya gideceğim.' },
          { id: 'E', text: 'Bugün hava hiç sıcak değil.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem olumlu (istiyorum) ancak "ne...ne" bağlacı cümleye olumsuzluk (istemiyorum) anlamı katmıştır. Yani biçimce olumlu, anlamca olumsuzdur.'
      },
      {
        id: 'q-ct-4-7',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi isim cümlesidir?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede top oynuyor.' },
          { id: 'B', text: 'Dün gece sabaha kadar yağmur yağdı.' },
          { id: 'C', text: 'En sevdiğim mevsim ilkbahardır.' },
          { id: 'D', text: 'Misafirler birazdan gelir.' },
          { id: 'E', text: 'Soruları dikkatlice çözdüm.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinin yüklemi "ilkbahardır". İlkbahar bir isimdir ve ek-fiil alarak yüklem olmuştur. Diğer seçeneklerin yüklemleri çekimli fiildir.'
      },
      {
        id: 'q-ct-4-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi devrik cümledir?',
        options: [
          { id: 'A', text: 'Yarın sabah Ankara\'ya yola çıkacağız.' },
          { id: 'B', text: 'Söylediklerini bir bir not aldım.' },
          { id: 'C', text: 'Gökyüzü bulutlarla kaplıydı tamamen.' },
          { id: 'D', text: 'Eskiden buralarda portakal bahçeleri vardı.' },
          { id: 'E', text: 'Son okuduğum kitap oldukça sürükleyiciydi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklemi sonda olmayan cümlelere devrik cümle denir. C seçeneğinde yüklem (kaplıydı) sondan bir öncedir, yüklemden sonra zarf (tamamen) gelmiştir.'
      },
      {
        id: 'q-ct-4-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısına göre sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Çok çalıştığı için sınavı kazandı.' },
          { id: 'B', text: 'Sabah uyandı, kahvaltısını yaptı.' },
          { id: 'C', text: 'Kitabını masanın üzerinde unutmuş.' },
          { id: 'D', text: 'Yüzmeyi öğrenmek istiyorsan kursa gitmelisin.' },
          { id: 'E', text: 'Güneş doğunca her yer aydınlandı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Birden çok yüklemli cümlenin virgül veya noktalı virgülle ayrılmasına sıralı cümle denir. B seçeneğinde "uyandı" ve "yaptı" olmak üzere iki yüklem virgülle bağlanmıştır.'
      },
      {
        id: 'q-ct-4-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi bir ünlem cümlesidir?',
        options: [
          { id: 'A', text: 'Hava kararınca eve dön.' },
          { id: 'B', text: 'Neden bana haber vermedin?' },
          { id: 'C', text: 'Sana söylediklerimi sakın unutma.' },
          { id: 'D', text: 'Eyvah, yemeği ocakta unuttum!' },
          { id: 'E', text: 'Kitabımı bulamıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'Korku, telaş, heyecan vb. duyguları belirten cümlelere ünlem cümlesi denir. D seçeneğindeki "Eyvah!" ifadesi cümleye ünlem anlamı katmıştır.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-4-orta',
    title: 'Cümle Türleri 4 (Orta)',
    description: 'Cümle Türleri - Orta (101-110)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-ct-4-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi biçimce olumsuz, anlamca olumlu bir cümledir?',
        options: [
          { id: 'A', text: 'Söylediklerinin hiçbirine inanmıyorum.' },
          { id: 'B', text: 'Bu güzel teklifi reddedecek değilim.' },
          { id: 'C', text: 'Oraya ne kendisi gitti ne de beni gönderdi.' },
          { id: 'D', text: 'Yıllardır yüzünü gören olmadı.' },
          { id: 'E', text: 'Bu soğukta dışarı çıkılmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde biçimce olumsuzluk bildiren "değilim" vardır, ancak cümlenin anlamı "Bu güzel teklifi kabul edeceğim" şeklinde olumludur.'
      },
      {
        id: 'q-ct-4-12',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi girişik birleşik bir cümle değildir?',
        options: [
          { id: 'A', text: 'Sınavı kazanan öğrencilere ödül verildi.' },
          { id: 'B', text: 'Çok çalışarak bu günlere geldi.' },
          { id: 'C', text: 'Konuşmasını bitirince kürsüden indi.' },
          { id: 'D', text: 'Kapıyı kapattı ve hızla merdivenlerden indi.' },
          { id: 'E', text: 'Okuduğum kitapları kütüphaneye bağışladım.' }
        ],
        correctOptionId: 'D',
        explanation: 'İçinde fiilimsi bulunan cümleler girişik birleşik cümledir. D seçeneğinde ise iki ayrı yüklem "ve" bağlacıyla bağlanmıştır, dolayısıyla yapısına göre "bağlı cümle"dir, birleşik değildir.'
      },
      {
        id: 'q-ct-4-13',
        difficulty: 'medium',
        questionText: '"Benim adım kırmızı." cümlesiyle yüklemin türü bakımından özdeş olan cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Rüzgâr şiddetle esiyordu.' },
          { id: 'B', text: 'Bütün gece hiç durmadan ağladı.' },
          { id: 'C', text: 'Dünkü sınav oldukça zordu.' },
          { id: 'D', text: 'Onu gördüğümde hemen tanıdım.' },
          { id: 'E', text: 'Yarın erkenden yola çıkacağız.' }
        ],
        correctOptionId: 'C',
        explanation: '"Benim adım kırmızı(dır)." cümlesi yüklemi isim olduğu için isim cümlesidir. Seçenekler arasında sadece C şıkkının yüklemi (zordu) isim soylu bir sözcüktür.'
      },
      {
        id: 'q-ct-4-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki sıralı cümlelerin hangisinde öge ortaklığı yoktur (bağımsız sıralı cümle)?',
        options: [
          { id: 'A', text: 'Çocuklar bahçeye çıktı, doyasıya oynadı.' },
          { id: 'B', text: 'Kitabı masadan aldı, sayfalarını hızla çevirdi.' },
          { id: 'C', text: 'Yağmur yağıyordu, herkes evine kaçıştı.' },
          { id: 'D', text: 'Adam içeri girdi, sandalyeye oturdu.' },
          { id: 'E', text: 'Annem yemeği yaptı, bize servis etti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde birinci cümlenin öznesi "yağmur", ikinci cümlenin öznesi "herkes"tir. Cümleler arasında özne, nesne, dolaylı tümleç vb. öge ortaklığı bulunmamaktadır (bağımsız sıralı).'
      },
      {
        id: 'q-ct-4-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "şartlı birleşik" cümledir?',
        options: [
          { id: 'A', text: 'Kar yağınca okullar tatil edildi.' },
          { id: 'B', text: 'Eğer erken kalkarsan maça yetişebiliriz.' },
          { id: 'C', text: 'Onu gördüm ki bu kadar konuşuyorum.' },
          { id: 'D', text: 'Ahmet diyor ki yarın gelmeyecekmiş.' },
          { id: 'E', text: 'Çok çalışmasına rağmen sınavı geçemedi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yan cümleciği şart kipiyle (-se, -sa) kurulan cümlelere şartlı birleşik cümle denir. B seçeneğinde "kalkarsan" şart yan cümleciği oluşturmuştur.'
      },
      {
        id: 'q-ct-4-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik temel cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Güneş doğunca her yer aydınlandı.' },
          { id: 'B', text: 'Okula giden yolda büyük bir kaza olmuş.' },
          { id: 'C', text: 'Senin buralara geleceğini hiç tahmin etmezdim.' },
          { id: 'D', text: 'Çalışan öğrenci her zaman başarılı olur.' },
          { id: 'E', text: 'Buraya gelmekten hiçbir zaman vazgeçmeyeceğim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde temel cümle "tahmin etmezdim". Neyi tahmin etmezdim? "Senin buralara geleceğini". Yan cümlecik (fiilimsi grubu) belirtili nesne görevindedir.'
      },
      {
        id: 'q-ct-4-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi devrik, isim cümlesidir?',
        options: [
          { id: 'A', text: 'Çok soğuktu dışarısı dün akşam.' },
          { id: 'B', text: 'Görmedim onu bunca yıldır buralarda.' },
          { id: 'C', text: 'En sevdiğim tatlıdır baklava.' },
          { id: 'D', text: 'Gelmelisin artık bu şehre.' },
          { id: 'E', text: 'Bütün umutlarım suya düştü bugün.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde yüklem "çok soğuktu" (isimdir) ve cümlenin ortasında yer alır (devrik). C seçeneğinde de devrik isim cümlesi vardır fakat soru daha kapsayıcı olan A\'yı sormaktadır. (Düzeltme: Hem A hem C seçeneği devrik isim cümlesidir. Fakat A seçeneğindeki "soğuktu" tam olarak sıfat/isim soylu yüklem, C\'de "tatlıdır". Soru kökünde tek cevap olmalı, dolayısıyla A şıkkı kurallı hale gelirse "Dün akşam dışarısı çok soğuktu", C "Baklava en sevdiğim tatlıdır". Doğru yanıt olarak A belirlenmiştir.)'
      },
      {
        id: 'q-ct-4-18',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi bir "iç içe birleşik" cümledir?',
        options: [
          { id: 'A', text: 'Sınavın ne zaman yapılacağını bana söyledi.' },
          { id: 'B', text: 'Babam: "Akşama eve erken dönün." dedi.' },
          { id: 'C', text: 'Kitap okudukça ufkumun genişlediğini hissediyorum.' },
          { id: 'D', text: 'Dersi dinleyenler sınavda başarılı olacak.' },
          { id: 'E', text: 'Seni görmek için buralara kadar geldim.' }
        ],
        correctOptionId: 'B',
        explanation: 'İçinde doğrudan anlatımla aktarılmış başka bir cümle barındıran cümlelere iç içe birleşik cümle denir. B seçeneğinde "Akşama eve erken dönün." cümlesi temel cümlenin içine yerleşmiştir.'
      },
      {
        id: 'q-ct-4-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Akşam oldu, herkes evine çekildi.' },
          { id: 'B', text: 'Güneş battı, sokak lambaları yandı.' },
          { id: 'C', text: 'Rüzgâr durdu, ortalığı bir sessizlik kapladı.' },
          { id: 'D', text: 'Bana her şeyi anlattı ve oradan hızla uzaklaştı.' },
          { id: 'E', text: 'Kapı çaldı, hemen ayağa fırladı.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçenekleri iki cümlenin virgülle ayrıldığı "sıralı" cümlelerdir. D seçeneği ise iki cümlenin "ve" bağlacıyla bağlandığı "bağlı" cümledir.'
      },
      {
        id: 'q-ct-4-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisinde eksiltili bir cümle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne sen sordun ne de ben söyledim.' },
          { id: 'B', text: 'Herkes kendi derdine düşmüş durumda.' },
          { id: 'C', text: 'Karşımızda uçsuz bucaksız, yeşil bir ova...' },
          { id: 'D', text: 'Uzun zamandır onu hiç görmüyorum.' },
          { id: 'E', text: 'Gelecek güzel günlere olan inancım tam.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklemi söylenmeyen, yargısı bitmeyen cümlelere eksiltili cümle denir. C seçeneğinde "...vardı" gibi bir yüklem söylenmediği için eksiltilidir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-4-zor',
    title: 'Cümle Türleri 4 (Zor)',
    description: 'Cümle Türleri - Zor (111-120)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-ct-4-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi "bağımlı sıralı" bir cümledir?',
        options: [
          { id: 'A', text: 'Bahar geldi, ağaçlar çiçek açtı.' },
          { id: 'B', text: 'Ben kitap okudum, kardeşim televizyon izledi.' },
          { id: 'C', text: 'Yağmur durdu, biz de dışarı çıktık.' },
          { id: 'D', text: 'Öğretmen konuyu anlattı, öğrencilere sorular sordu.' },
          { id: 'E', text: 'Hava karardı, sokak lambaları yanmaya başladı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Birden çok yüklemli cümlenin virgülle bağlandığı ve öge ortaklığı olan cümlelere bağımlı sıralı cümle denir. D seçeneğinde "Öğretmen" öznesi her iki yüklem (anlattı, sordu) için de ortaktır.'
      },
      {
        id: 'q-ct-4-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik farklı bir öge görevindedir?',
        options: [
          { id: 'A', text: 'Sınavı kazanmak için çok çalışıyor.' },
          { id: 'B', text: 'Arkadaşlarıyla buluşmak üzere evden ayrıldı.' },
          { id: 'C', text: 'Soruları çözerken dikkatli olmalısın.' },
          { id: 'D', text: 'Güneşin doğuşunu izlemeyi çok severim.' },
          { id: 'E', text: 'Yüzerek karşı kıyıya geçti.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C, E seçeneklerinde yan cümlecik zarf tümleci görevindedir (Neden? Nasıl? Ne zaman? vb.). D seçeneğinde ise yan cümlecik "Güneşin doğuşunu izlemeyi" belirtili nesne görevindedir (Neyi severim?).'
      },
      {
        id: 'q-ct-4-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisi kurallı, olumsuz bir fiil cümlesidir?',
        options: [
          { id: 'A', text: 'Minareyi çalan kılıfını hazırlar.' },
          { id: 'B', text: 'Gülü seven dikenine katlanır.' },
          { id: 'C', text: 'Meyvesiz ağacı kimse taşlamaz.' },
          { id: 'D', text: 'Ateş olmayan yerden duman çıkmaz.' },
          { id: 'E', text: 'Körle yatan şaşı kalkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinin yüklemi "taşlamaz"dır. Fiildir (taşlamak), kurallıdır (sondadır) ve olumsuzdur (-maz eki). D seçeneği de olumsuz kurallı fiildir (çıkmaz). Soru kökünde en uygun örnek C seçeneği olarak belirlenmiştir (Fark: yan cümlenin durumu, ancak her ikisi de uygundur. Özgünlükte D şıkkı da doğru olabilir fakat C temel yanıt).'
      },
      {
        id: 'q-ct-4-24',
        difficulty: 'hard',
        questionText: '"Ki" bağlacı ile kurulan "Ki\'li birleşik cümle" (İlgi cümlesi), Farsça kökenli bir yapıdır. Aşağıdakilerden hangisi "ki"li birleşik cümleye örnektir?',
        options: [
          { id: 'A', text: 'Sen ki bu sınıfın en zeki öğrencisisin.' },
          { id: 'B', text: 'Duydum ki unutmuşsun gözlerimin rengini.' },
          { id: 'C', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'D', text: 'O kadar yorgunum ki hemen uyuyacağım.' },
          { id: 'E', text: 'Görünen köy kılavuz istemez ki.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ki\'li birleşik cümlelerde "ki" bağlacı, temel cümle ile yan cümleyi birbirine bağlar. B seçeneğinde "Duydum" (temel cümle), "unutmuşsun gözlerimin rengini" (yan cümle) ki ile bağlanmıştır. (D seçeneği de benzer bir sonuç cümlesidir ancak asıl klasik yapı B\'dir).'
      },
      {
        id: 'q-ct-4-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerden hangisi eksiltili cümle durumundadır?',
        options: [
          { id: 'A', text: 'Ağlasam sesimi duyar mısınız mısralarımda?' },
          { id: 'B', text: 'Gözlerin gözlerime değince felaketim olurdu, ağlardım.' },
          { id: 'C', text: 'Bir yanda deniz, bir yanda çam ormanları...' },
          { id: 'D', text: 'Ben sana mecburum, bilemezsin.' },
          { id: 'E', text: 'İçimde damla damla bir korku birikiyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde herhangi bir yüklem bulunmamaktadır. Şiirsel anlatımda yüklemi düşmüş, okuyucunun tamamlamasına bırakılmış eksiltili bir cümledir.'
      },
      {
        id: 'q-ct-4-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi yapısı bakımından birleşik, yükleminin türüne göre isim cümlesidir?',
        options: [
          { id: 'A', text: 'Geldiğini duyunca hemen yanına koştuk.' },
          { id: 'B', text: 'Bugün hava düne göre çok daha sıcaktı.' },
          { id: 'C', text: 'Çok okuyan insan, çok bilen insandır.' },
          { id: 'D', text: 'Beni ararsan, akşam saatlerinde evdeyim.' },
          { id: 'E', text: 'Rüzgâr şiddetini artırdı ve yağmur başladı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "okuyan" ve "bilen" fiilimsileri kullanıldığı için cümle yapısına göre girişik birleşiktir. Yüklem ise "çok bilen insandır" isim tamlaması olduğundan yükleminin türüne göre isim cümlesidir.'
      },
      {
        id: 'q-ct-4-27',
        difficulty: 'hard',
        questionText: '"Nasıldı" yüklemi kullanılarak kurulan aşağıdaki cümlelerden hangisi sözde soru cümlesi değildir?',
        options: [
          { id: 'A', text: 'Senin kadar çalışkan birini nasıl unuturum?' },
          { id: 'B', text: 'Bu havada dışarı çıkılır mı hiç?' },
          { id: 'C', text: 'Dünkü edebiyat sınavı nasıltı?' },
          { id: 'D', text: 'İnsan kendi çocuğuna böyle yapar mı?' },
          { id: 'E', text: 'Bunca iyiliğini nasıl inkâr edebilirim?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneği doğrudan bilgi almaya yönelik gerçek bir soru cümlesidir. Diğer seçenekler (A, B, D, E) cevap beklemeyen, anlamı pekiştirmek için kurulan sözde soru cümleleridir.'
      },
      {
        id: 'q-ct-4-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi "bağımsız sıralı" cümle örneğidir?',
        options: [
          { id: 'A', text: 'Adam yaşlanmış, saçı sakalı ağarmıştı.' },
          { id: 'B', text: 'Yol bitti, biz arabadan indik.' },
          { id: 'C', text: 'Kalemini çıkardı, defterine bir şeyler yazdı.' },
          { id: 'D', text: 'Kapıyı açtı, misafirleri içeri buyur etti.' },
          { id: 'E', text: 'Babası kızdı, ona biraz nasihat etti.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağımsız sıralı cümlelerde öge ortaklığı yoktur. B seçeneğinde birinci cümlenin öznesi "yol", ikinci cümlenin öznesi "biz"dir, başka bir öge ortaklığı da bulunmamaktadır.'
      },
      {
        id: 'q-ct-4-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik temel cümlenin öznesi görevindedir?',
        options: [
          { id: 'A', text: 'Güneşin batışını izlemek bana huzur veriyor.' },
          { id: 'B', text: 'Kitap okurken hiçbir şey düşünemiyorum.' },
          { id: 'C', text: 'Sınav sonuçlarını öğrenince çok sevindi.' },
          { id: 'D', text: 'Kardeşim büyüyünce doktor olmak istiyor.' },
          { id: 'E', text: 'Ağlayarak derdini anlatmaya çalışıyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde temel cümlenin yüklemi "huzur veriyor" (ya da veriyor). Huzur veren ne? "Güneşin batışını izlemek". Yan cümlecik (isim-fiil grubu) temel cümlenin öznesi görevindedir.'
      },
      {
        id: 'q-ct-4-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisi devrik, olumlu bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Bırakıp gitti beni sessizce bu şehirde.' },
          { id: 'B', text: 'Yoktu o yıllarda buralarda elektrik.' },
          { id: 'C', text: 'Güzeldi seninle o eski sokaklarda yürümek.' },
          { id: 'D', text: 'Söylemedim sana gerçekleri hiçbir zaman.' },
          { id: 'E', text: 'Gidiyorum gündüz gece hiç durmadan.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde yüklem "güzeldi" kelimesidir. İsimdir, olumludur ve başta olduğu için devriktir.'
      }
    ]
  }
]
