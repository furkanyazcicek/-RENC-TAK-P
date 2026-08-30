export default [
  {
    id: 'test-cumle-turleri-11-kolay',
    title: 'Cümle Türleri 11 (Kolay)',
    description: 'Cümle Türleri - Kolay (301-310)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-ct-11-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yükleminin türüne göre diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Sabahları erken uyanıp kitap okurum.' },
          { id: 'B', text: 'Onun en büyük hayali yazar olmaktı.' },
          { id: 'C', text: 'Herkes yeni gelen öğrenciyi merak ediyordu.' },
          { id: 'D', text: 'Güneş battıktan sonra hava hemen soğudu.' },
          { id: 'E', text: 'Tatil planlarımızı sonunda tamamladık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde yüklem \"olmaktı\" (fiilimsi ek eylem almış, isim cümlesi kabul edilir / isim soylu kelimedir). Diğerleri çekimli fiildir.'
      },
      {
        id: 'q-ct-11-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi kurallı bir cümledir?',
        options: [
          { id: 'A', text: 'Geçen yıl gitmiştik bu şirin sahil kasabasına.' },
          { id: 'B', text: 'Gökyüzü bulutluydu sabahtan beri.' },
          { id: 'C', text: 'Dostlarla geçirilen zaman paha biçilemezdir.' },
          { id: 'D', text: 'Yavaşça kapattı arkasından ahşap kapıyı.' },
          { id: 'E', text: 'Ne aradı ne sordu o günden sonra bizi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kurallı (düz) cümlede yüklem cümlenin sonundadır. C seçeneğinde yüklem \"paha biçilemezdir\" ve sondadır.'
      },
      {
        id: 'q-ct-11-3',
        difficulty: 'easy',
        questionText: '\"Sonbahar rüzgarları ağaçların yapraklarını sararttı.\" cümlesinin nitelikleri aşağıdakilerin hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'İsim cümlesi - Kurallı cümle - Olumlu cümle' },
          { id: 'B', text: 'Fiil cümlesi - Devrik cümle - Olumlu cümle' },
          { id: 'C', text: 'Fiil cümlesi - Kurallı cümle - Olumlu cümle' },
          { id: 'D', text: 'İsim cümlesi - Devrik cümle - Olumsuz cümle' },
          { id: 'E', text: 'Fiil cümlesi - Kurallı cümle - Olumsuz cümle' }
        ],
        correctOptionId: 'C',
        explanation: 'Yüklem \"sararttı\" (fiil), sonda yer alıyor (kurallı), eylem gerçekleşmiş (olumlu).'
      },
      {
        id: 'q-ct-11-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi biçimce olumlu, anlamca olumsuz bir cümledir?',
        options: [
          { id: 'A', text: 'Ne seni ne de onu tanıyorum.' },
          { id: 'B', text: 'Bugün hava hiç güzel değildi.' },
          { id: 'C', text: 'Bu zor soruları çözemez miyim?' },
          { id: 'D', text: 'Bunu yapmayı o da istemiyor.' },
          { id: 'E', text: 'Oraya gidecek zamanımız yok.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Ne... ne...\" bağlacı cümleyi biçimce olumlu (tanıyorum) gösterir ancak anlamca olumsuz yapar (ikisini de tanımıyorum).'
      },
      {
        id: 'q-ct-11-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi yapıca basit bir cümledir?',
        options: [
          { id: 'A', text: 'Kar yağınca her yer bembeyaz oldu.' },
          { id: 'B', text: 'Beni arayanın kim olduğunu bilmiyorum.' },
          { id: 'C', text: 'Sessiz ve sakin bir sahil kasabasında yaşıyorlar.' },
          { id: 'D', text: 'Gülerek yanımıza kadar geldi.' },
          { id: 'E', text: 'Çok çalışıp sınavı kazandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Basit cümlelerde tek yüklem bulunur ve fiilimsi veya yan cümlecik yoktur. C seçeneğinde fiilimsi veya şart eki yoktur.'
      },
      {
        id: 'q-ct-11-6',
        difficulty: 'easy',
        questionText: '\"Yıldızlar bu gece çok parlak.\" cümlesi için aşağıdakilerden hangisi söylenemez?',
        options: [
          { id: 'A', text: 'İsim cümlesidir.' },
          { id: 'B', text: 'Olumlu cümledir.' },
          { id: 'C', text: 'Kurallı cümledir.' },
          { id: 'D', text: 'Basit yapılıdır.' },
          { id: 'E', text: 'Fiil cümlesidir.' }
        ],
        correctOptionId: 'E',
        explanation: 'Yüklem \"parlak(tır)\" sözcüğüdür, bu yüzden isim cümlesidir. Fiil cümlesi olduğu söylenemez.'
      },
      {
        id: 'q-ct-11-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisi devrik bir fiil cümlesidir?',
        options: [
          { id: 'A', text: 'Bugün gökyüzü çok mavidir.' },
          { id: 'B', text: 'Çok sevinmişti bizi görünce.' },
          { id: 'C', text: 'Güzel bir evmiş şu köşe başındaki.' },
          { id: 'D', text: 'Zaman su gibi akıp geçiyor.' },
          { id: 'E', text: 'Sınıfın en çalışkanı Ali\'dir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüklem \"sevinmişti\" fiildir ve sonda yer almadığı için devriktir.'
      },
      {
        id: 'q-ct-11-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi anlamına göre ünlem cümlesidir?',
        options: [
          { id: 'A', text: 'Bana biraz su verir misin?' },
          { id: 'B', text: 'Sınavı kazandığını duydum.' },
          { id: 'C', text: 'Eyvah, yemeği ocakta unuttum!' },
          { id: 'D', text: 'Yarın erkenden yola çıkacağız.' },
          { id: 'E', text: 'Bu kitabı mutlaka okumalısın.' }
        ],
        correctOptionId: 'C',
        explanation: 'Korku, şaşkınlık, heyecan vb. duyguları belirten cümlelere ünlem cümlesi denir. C şıkkı ünlem cümlesidir.'
      },
      {
        id: 'q-ct-11-9',
        difficulty: 'easy',
        questionText: '\"Kitap okumayı çok seviyor ancak yeterince vakit bulamıyor.\" cümlesi yapısına göre nasıl bir cümledir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Birleşik cümle' },
          { id: 'C', text: 'Sıralı cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'İç içe birleşik cümle' }
        ],
        correctOptionId: 'D',
        explanation: 'Birden fazla yüklemin birbirine \"ancak\" gibi bağlaçlarla bağlandığı cümlelere bağlı cümle denir.'
      },
      {
        id: 'q-ct-11-10',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir şart (koşul) cümlesidir?',
        options: [
          { id: 'A', text: 'Oraya gidince bizi mutlaka ara.' },
          { id: 'B', text: 'Hava soğuksa dışarı çıkmayalım.' },
          { id: 'C', text: 'Keşke ben de sizinle gelebilseydim.' },
          { id: 'D', text: 'Bugün çok yorgun hissediyorum.' },
          { id: 'E', text: 'Erken kalkmak sağlığa faydalıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B şıkkındaki \"soğuksa\" (-sa, -se) eki cümleye şart anlamı katmıştır.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-11-orta',
    title: 'Cümle Türleri 11 (Orta)',
    description: 'Cümle Türleri - Orta (311-320)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-ct-11-11',
        difficulty: 'medium',
        questionText: '\"Güneşin doğuşunu izlemek için erkenden kalktık, sahile doğru yürüdük.\" cümlesinin yapısı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bağımlı sıralı cümle' },
          { id: 'B', text: 'Bağımsız sıralı cümle' },
          { id: 'C', text: 'Girişik birleşik cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'İç içe birleşik cümle' }
        ],
        correctOptionId: 'A',
        explanation: 'İki yüklem virgülle ayrılmış (sıralı cümle) ve \"biz\" öznesi iki yüklem için ortak kullanıldığından öge ortaklığı vardır (bağımlı).'
      },
      {
        id: 'q-ct-11-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisi kurallı bir cümledir?',
        options: [
          { id: 'A', text: 'Gözlerimi kapattım yalnızlığın koynunda.' },
          { id: 'B', text: 'Bir sevda rüzgarı esti kalbimden içeri.' },
          { id: 'C', text: 'Düşler sokağında kaybolan benim.' },
          { id: 'D', text: 'Yüzüne bakınca anladım tüm gerçekleri.' },
          { id: 'E', text: 'Seninle geçen günleri çok özlüyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'Kurallı cümlede yüklem sondadır. \"Özlüyorum\" yüklemi E seçeneğinde cümlenin sonundadır.'
      },
      {
        id: 'q-ct-11-13',
        difficulty: 'medium',
        questionText: '\"Çocuklar bahçede oyun oynarken anneleri onları izliyordu.\" cümlesi yapısına göre aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Girişik birleşik cümle' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'Şartlı birleşik cümle' },
          { id: 'E', text: 'Sıralı cümle' }
        ],
        correctOptionId: 'B',
        explanation: 'İçinde fiilimsi (oynarken) bulunan ve tek temel yargısı olan cümleler girişik birleşik cümledir.'
      },
      {
        id: 'q-ct-11-14',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi biçimce olumsuz, anlamca olumlu bir cümledir?',
        options: [
          { id: 'A', text: 'Bunu yapmayacağımı söylemedim mi sana?' },
          { id: 'B', text: 'Ne paramız kaldı ne de erzağımız.' },
          { id: 'C', text: 'Sınavdan düşük not alınca çok üzüldü.' },
          { id: 'D', text: 'Bu havada dışarı çıkmak pek mantıklı değil.' },
          { id: 'E', text: 'Söylediklerime hiç kulak asmadı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yüklemdeki \"-me\" olumsuzluk eki biçimce olumsuzdur, fakat soru anlamıyla \"söyledim\" anlamı taşıdığı için anlamca olumludur.'
      },
      {
        id: 'q-ct-11-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısına göre diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Havalar ısınınca göçmen kuşlar yola koyuldu.' },
          { id: 'B', text: 'Zaman hızla akıp giderken biz farkında olmuyoruz.' },
          { id: 'C', text: 'İşlerini bitirmeden masadan kalkmamalısın.' },
          { id: 'D', text: 'Akşam oldu ve sokak lambaları teker teker yandı.' },
          { id: 'E', text: 'Çalışan demir pas tutmaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneği iki yüklemin \"ve\" bağlacıyla bağlanmasından oluşan bir \"bağlı cümle\" iken, diğerleri içinde fiilimsi bulunan girişik birleşik cümlelerdir.'
      },
      {
        id: 'q-ct-11-16',
        difficulty: 'medium',
        questionText: '\"Beni anlayan yalnız sendin o kalabalıkta.\" cümlesiyle ilgili hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'İsim cümlesidir.' },
          { id: 'B', text: 'Devrik cümledir.' },
          { id: 'C', text: 'Olumlu cümledir.' },
          { id: 'D', text: 'Girişik birleşik cümledir.' },
          { id: 'E', text: 'Birden fazla yüklemi vardır.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümlede \"sendin\" yüklemdir ve tek bir yüklem vardır. \"Anlayan\" sözcüğü fiilimsi olduğu için girişik birleşiktir.'
      },
      {
        id: 'q-ct-11-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi bağımsız sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Kitabını açtı, dikkatle okumaya başladı.' },
          { id: 'B', text: 'Güneş battı, sokaklar yavaş yavaş karardı.' },
          { id: 'C', text: 'Bizi görünce sevindi, yanımıza koştu.' },
          { id: 'D', text: 'Kapıyı kilitledi, anahtarı cebine attı.' },
          { id: 'E', text: 'Soruyu dikkatlice okudu, cevabı hemen buldu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıralı cümlelerde öge ortaklığı yoksa bağımsız sıralı olur. B\'de 1. cümlenin öznesi \"Güneş\", 2. cümlenin öznesi \"sokaklar\"dır; öge ortaklığı yoktur.'
      },
      {
        id: 'q-ct-11-18',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi bir isim cümlesidir?',
        options: [
          { id: 'A', text: 'Uzun ince bir yoldayım.' },
          { id: 'B', text: 'Rüzgâr bugün çok şiddetli esiyor.' },
          { id: 'C', text: 'Herkes yeni bir umutla bekliyordu.' },
          { id: 'D', text: 'Gözlerindeki ışık yavaşça söndü.' },
          { id: 'E', text: 'Sorunları çözmek için epey uğraştık.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Yoldayım\" sözcüğü isimdir ve ek fiil alarak yüklem olmuştur.'
      },
      {
        id: 'q-ct-11-19',
        difficulty: 'medium',
        questionText: '\"Ben ki hep iyilik istedim, neden kötülük buldum?\" cümlesi yapısına göre nasıl bir cümledir?',
        options: [
          { id: 'A', text: 'Girişik birleşik cümle' },
          { id: 'B', text: 'İç içe birleşik cümle' },
          { id: 'C', text: 'Ki\'li birleşik cümle' },
          { id: 'D', text: 'Şartlı birleşik cümle' },
          { id: 'E', text: 'Basit cümle' }
        ],
        correctOptionId: 'C',
        explanation: 'Yargıların \"ki\" bağlacıyla birbirine bağlandığı cümlelere Ki\'li birleşik cümle (ilgi cümlesi) denir.'
      },
      {
        id: 'q-ct-11-20',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi soru anlamı taşıyan devrik bir fiil cümlesidir?',
        options: [
          { id: 'A', text: 'Ne zaman döneceksin bu uzun yolculuktan?' },
          { id: 'B', text: 'Neden kimse bana yardım etmiyor?' },
          { id: 'C', text: 'Bunu yapmanın bir yolu yok mu?' },
          { id: 'D', text: 'Kimmiş gece yarısı kapıyı çalan?' },
          { id: 'E', text: 'Oraya nasıl gideceğini biliyor musun?' }
        ],
        correctOptionId: 'A',
        explanation: 'Yüklem \"döneceksin\" (fiil), sonda olmadığı için devrik ve soru cümlesidir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-11-zor',
    title: 'Cümle Türleri 11 (Zor)',
    description: 'Cümle Türleri - Zor (321-330)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-ct-11-21',
        difficulty: 'hard',
        questionText: '\"Toprak, yağmuru hissettiğinde derin bir nefes alır; çiçekler, yüzlerini güneşe dönerek gülümser.\" cümlesi ile ilgili aşağıdakilerden hangisi yanlıştır?',
        options: [
          { id: 'A', text: 'Bağımsız sıralı bir cümledir.' },
          { id: 'B', text: 'Girişik birleşik yapılar içermektedir.' },
          { id: 'C', text: 'Birden fazla yüklemi vardır.' },
          { id: 'D', text: 'Yüklemlerinden biri isimdir.' },
          { id: 'E', text: 'Kurallı cümlelerden oluşmuştur.' }
        ],
        correctOptionId: 'D',
        explanation: 'Cümlenin yüklemleri \"nefes alır\" ve \"gülümser\" olup ikisi de fiildir. İsim yüklemi yoktur.'
      },
      {
        id: 'q-ct-11-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yan cümlecik zarf tümleci görevindedir?',
        options: [
          { id: 'A', text: 'Okula giden çocuklar neşeyle şarkı söylüyordu.' },
          { id: 'B', text: 'Karanlık çökünce herkes evlerine çekildi.' },
          { id: 'C', text: 'Dostumun bana verdiği kitabı çok beğendim.' },
          { id: 'D', text: 'Başarılı olmanın sırrı çok çalışmaktır.' },
          { id: 'E', text: 'Ne istediğini kimseye söylememiş.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Karanlık çökünce\" yan cümleciği (zarf-fiil grubu) temel cümlenin zarf tümleci görevindedir.'
      },
      {
        id: 'q-ct-11-23',
        difficulty: 'hard',
        questionText: '\"Bana derlerdi ki sakın gitme oralara, giden dönmezmiş.\" cümlesinin yapı özellikleriyle ilgili hangi yargı doğrudur?',
        options: [
          { id: 'A', text: 'Basit ve devrik bir cümledir.' },
          { id: 'B', text: 'İç içe birleşik, devrik ve olumlu bir fiil cümlesidir.' },
          { id: 'C', text: 'Hem ki\'li hem de iç içe birleşik özellikleri taşıyan kurallı bir cümledir.' },
          { id: 'D', text: 'Bağlı, kurallı ve fiil cümlesidir.' },
          { id: 'E', text: 'Hem ki\'li birleşik hem de iç içe birleşik cümle özelliği gösteren, olumsuz yargı barındıran devrik bir fiil cümlesidir.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Ki\" bağlacı var. \"Sakın gitme...\" kısmı iç içe birleşiktir. Devrik yüklemler (derlerdi, gitme vb.) ve olumsuzluk (dönmezmiş, gitme) vardır.'
      },
      {
        id: 'q-ct-11-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki atasözlerinden hangisi bağımlı sıralı bir cümledir?',
        options: [
          { id: 'A', text: 'Ağaç yaşken eğilir, insan küçükken eğitilir.' },
          { id: 'B', text: 'Sakla samanı, gelir zamanı.' },
          { id: 'C', text: 'Gülme komşuna, gelir başına.' },
          { id: 'D', text: 'Mart kapıdan baktırır, kazma kürek yaktırır.' },
          { id: 'E', text: 'Su uyur, düşman uyumaz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde \"Mart\" öznesi, hem \"baktırır\" hem de \"yaktırır\" yüklemleri için ortaktır, dolayısıyla bağımlı sıralı cümledir.'
      },
      {
        id: 'q-ct-11-25',
        difficulty: 'hard',
        questionText: '\"Bir insanın gerçek değerini anlamak istiyorsan, onun zor zamanlardaki tavırlarına bakmalısın.\" cümlesi için hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Şartlı birleşik cümledir.' },
          { id: 'B', text: 'Girişik birleşik özellik de taşır.' },
          { id: 'C', text: 'Kurallı fiil cümlesidir.' },
          { id: 'D', text: 'Yan cümlecik temel cümlenin belirtili nesnesidir.' },
          { id: 'E', text: 'Anlamca ve biçimce olumludur.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yan cümlecik (anlamak istiyorsan) şart kipiyle kurulmuştur ve zarf tümleci (şart/koşul) görevindedir, belirtili nesne değildir.'
      },
      {
        id: 'q-ct-11-26',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerden hangisi yapıca bağlı bir devrik cümledir?',
        options: [
          { id: 'A', text: 'Ne güldü yüzüm ne de işlerim yolunda gitti yıllardır.' },
          { id: 'B', text: 'Çok çalıştı fakat istediği yeri bir türlü kazanamadı.' },
          { id: 'C', text: 'Seninle gelirim ancak önce eve uğramamız gerek.' },
          { id: 'D', text: 'Ağlıyordu sessizce ve kimse onun bu halini görmüyordu.' },
          { id: 'E', text: 'Gideceksin buralardan, ardına bile bakmadan.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde \"ne...ne\" bağlacı iki cümleyi bağlamıştır (bağlı cümle) ve yüklemler (güldü, gitti) sonda olmadığı için devriktir.'
      },
      {
        id: 'q-ct-11-27',
        difficulty: 'hard',
        questionText: '\"Şiir, kalbin kelimelerle çizilen en zarif portresidir.\" cümlesinin yapı ve tür özellikleri hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Basit - Kurallı - İsim Cümlesi - Olumlu' },
          { id: 'B', text: 'Girişik birleşik - Kurallı - İsim Cümlesi - Olumlu' },
          { id: 'C', text: 'Sıralı - Devrik - Fiil Cümlesi - Olumlu' },
          { id: 'D', text: 'Bağlı - Kurallı - İsim Cümlesi - Olumlu' },
          { id: 'E', text: 'Girişik birleşik - Kurallı - Fiil Cümlesi - Olumlu' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümlede fiilimsi (çizilen) olduğu için girişik birleşiktir. Yüklem (portresidir) sondadır (kurallı) ve isimdir. Anlamca ve biçimce olumludur.'
      },
      {
        id: 'q-ct-11-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birden fazla yan cümlecik vardır?',
        options: [
          { id: 'A', text: 'Akşamın kızıllığı gökyüzünü kaplayınca hüznüm artar.' },
          { id: 'B', text: 'Söylenenleri dinlemek ve uygulamak hepimizin görevidir.' },
          { id: 'C', text: 'İstediğini almak için elinden geleni yaptı.' },
          { id: 'D', text: 'Bana sormadan bu kararı nasıl aldın?' },
          { id: 'E', text: 'Güneşin doğuşunu izlemeyi oldum olası severim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde \"Söylenenleri\", \"dinlemek\", \"uygulamak\" fiilimsileri birden fazla yan cümlecik oluşturmuştur. (C seçeneğinde de var: İstediğini, almak; ancak B şıkkında 3 adet var.)'
      },
      {
        id: 'q-ct-11-29',
        difficulty: 'hard',
        questionText: '\"Ne karanlık geceler ne soğuk rüzgarlar durdurabilir umudu olan insanı.\" cümlesi için hangisi söylenemez?',
        options: [
          { id: 'A', text: 'Biçimce olumlu, anlamca olumsuz bir cümledir.' },
          { id: 'B', text: 'Devrik bir fiil cümlesidir.' },
          { id: 'C', text: 'Bağlı cümle yapısındadır.' },
          { id: 'D', text: 'Yan cümlecik nesne görevindedir.' },
          { id: 'E', text: 'Birden fazla özne vardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Burada \"ne...ne\" bağlacı cümleleri değil, özneleri bağlamıştır. Tek yüklem (durdurabilir) olduğu için yapısı basit (veya girişik birleşik -olan-) cümledir, bağlı cümle değildir.'
      },
      {
        id: 'q-ct-11-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi yapısı bakımından \"İç içe birleşik cümle\" değildir?',
        options: [
          { id: 'A', text: 'Öğretmen, \"Yarın sınav yapacağım.\" dedi.' },
          { id: 'B', text: 'Bu işin böyle çözülemeyeceğini herkes anladı.' },
          { id: 'C', text: 'Bana: \"Zaman her şeyin ilacıdır.\" diyerek teselli verdi.' },
          { id: 'D', text: 'Onun bu söylediklerine, yalan, diyesim geliyor.' },
          { id: 'E', text: 'Sokrates, \"Kendini bil!\" der.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde alıntı veya başka bir cümle cümlenin içinde yargı olarak bulunmaz; \"çözülemeyeceğini\" fiilimsiyle kurulan girişik birleşik bir cümledir.'
      }
    ]
  }
];
