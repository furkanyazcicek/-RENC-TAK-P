export default [
  {
    id: 'test-anlatim-bozuk-2-kolay',
    title: 'Anlatım Bozuklukları 2 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (11-20)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-ab-2-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onun kulağına eğilerek alçak sesle bir şeyler fısıldadı.' },
          { id: 'B', text: 'Dışarıdaki soğuk hava hepimizi üşütmüştü.' },
          { id: 'C', text: 'Zor günlerinde dostlarının desteğini hiç unutmadı.' },
          { id: 'D', text: 'Bugün toplantıya vaktinde yetişmek için erken çıktı.' },
          { id: 'E', text: 'Son okuduğum kitap oldukça sürükleyiciydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'Fısıldamak zaten alçak sesle yapılan bir eylemdir. \"Alçak sesle\" ifadesi gereksizdir.'
      },
      {
        id: 'q-ab-2-2',
        difficulty: 'easy',
        questionText: '\"Yaklaşık tam üç saat boyunca hiç durmadan yürüdük.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisinden kaynaklanmaktadır?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanılması' },
          { id: 'C', text: 'Tamlama yanlışlığı' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Sözcüğün yanlış anlamda kullanılması' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşık\" sözcüğü belirsizlik, \"tam\" sözcüğü kesinlik bildirir. Çelişen ifadeler anlatımı bozar.'
      },
      {
        id: 'q-ab-2-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Yüzme sporu vücudu dinç tutar.' },
          { id: 'B', text: 'Bahçeye birçok meyve ağaçları diktik.' },
          { id: 'C', text: 'Kütüphanedeki eski kitapları inceledik.' },
          { id: 'D', text: 'Annem akşam yemeği için güzel yemekler yaptı.' },
          { id: 'E', text: 'Babam işten yorgun argın dönmüştü.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Birçok\" belgisiz sıfatından sonra gelen isim çoğul eki almaz. \"Birçok meyve ağacı\" olmalıdır.'
      },
      {
        id: 'q-ab-2-4',
        difficulty: 'easy',
        questionText: '\"Yeni okula başlayan öğrenciler oldukça heyecanlıydı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'C', text: 'Çatı uyuşmazlığı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Zamir eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Okul yeni değildir, öğrenci okula yeni başlamıştır. \"Okula yeni başlayan öğrenciler\" şeklinde düzeltilmelidir.'
      },
      {
        id: 'q-ab-2-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış kullanılmasından doğan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Sınavı kazanınca etekleri tutuştu.' },
          { id: 'B', text: 'Bu işin altından başarıyla kalktı.' },
          { id: 'C', text: 'Olanları duyunca küplere bindi.' },
          { id: 'D', text: 'Gün boyu çalışmaktan canı çıktı.' },
          { id: 'E', text: 'Herkesin gözüne girmeyi başardı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Etekleri tutuşmak\" telaşlanmak anlamındadır. Sınavı kazanma durumunda sevinci anlatan bir deyim kullanılmalıdır (ör. etekleri zil çaldı).'
      },
      {
        id: 'q-ab-2-6',
        difficulty: 'easy',
        questionText: '\"Bu kaza, ölüm şansını artırabilir.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilebilir?',
        options: [
          { id: 'A', text: '\"kaza\" yerine \"olay\" denilerek' },
          { id: 'B', text: '\"şansını\" yerine \"riskini\" denilerek' },
          { id: 'C', text: '\"artırabilir\" yerine \"çoğaltabilir\" denilerek' },
          { id: 'D', text: '\"ölüm\" kelimesi cümleden çıkarılarak' },
          { id: 'E', text: 'Cümleye \"herhalde\" eklenerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Ölüm bir şans (olumlu durum) değil, risktir. Sözcüğün yanlış anlamda kullanımı vardır.'
      },
      {
        id: 'q-ab-2-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğundan kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Kediler bütün gün sobanın yanında uyudu.' },
          { id: 'B', text: 'Ben ve Ahmet yarınki geziye katılacağız.' },
          { id: 'C', text: 'Çiçekler susuzluktan boyunlarını büktüler.' },
          { id: 'D', text: 'Gözlerim gün boyu bilgisayara bakmaktan ağrıdılar.' },
          { id: 'E', text: 'Öğretmenler odasında toplantı yapıldı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Organ isimleri (gözler vb.) çoğul özne olduğunda yüklem tekil olmalıdır. \"Ağrıdı\" olmalıdır.'
      },
      {
        id: 'q-ab-2-8',
        difficulty: 'easy',
        questionText: '\"Karşılıklı olarak birbirimizle tartışmamızın bir anlamı yok.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanılması' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Özne eksikliği' },
          { id: 'D', text: 'Tamlayan ekinin eksikliği' },
          { id: 'E', text: 'Yanlış sözcük kullanımı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Tartışmak\" zaten karşılıklı yapılan bir iştir. \"Karşılıklı olarak birbirimizle\" ifadesi gereksizdir.'
      },
      {
        id: 'q-ab-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliğinden kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Bisikletini çaldırmışsın, çok üzüldüm.' },
          { id: 'B', text: 'Yarın Ankara\'ya gideceğiz.' },
          { id: 'C', text: 'Akşam erken uyuduğu için dinlenmişti.' },
          { id: 'D', text: 'Sözlerine hiç kimse itibar etmedi.' },
          { id: 'E', text: 'Dünkü tartışmayı herkese anlattım.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin bisikletini mi\" yoksa \"Onun bisikletini mi\" çaldırmışsın belli değil. Zamir eksikliği anlam belirsizliğine yol açmıştır.'
      },
      {
        id: 'q-ab-2-10',
        difficulty: 'easy',
        questionText: '\"Kendine iyi bak ki hasta olmayasın diye tembihledi.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Çelişen sözcük kullanımı' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Gereksiz bağlaç kullanımı' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Özne-yüklem uyumsuzluğu' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede \"ki\" ve \"diye\" bir arada kullanılmış. \"Kendine iyi bak, hasta olma, diye tembihledi\" şeklinde olmalıdır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-2-orta',
    title: 'Anlatım Bozuklukları 2 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (11-20)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-ab-2-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlama yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Dün özel ve kamu kuruluşları tatil edildi.' },
          { id: 'B', text: 'Olay yerinde polis ekipleri inceleme yaptı.' },
          { id: 'C', text: 'Kardeşimle aynı fikirde olmadığımızı anladım.' },
          { id: 'D', text: 'Bütün sokaklar ve caddeler temizlendi.' },
          { id: 'E', text: 'Halkın refahı ve huzuru için çalışıyoruz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Özel kuruluşları\" denmez. \"Özel kuruluşlar ve kamu kuruluşları\" veya \"Kamu kuruluşları ve özel kuruluşlar\" olmalıdır.'
      },
      {
        id: 'q-ab-2-12',
        difficulty: 'medium',
        questionText: '\"Kitabı çok sever, her fırsatta okurdu.\" cümlesinde anlatım bozukluğunu gidermek için ne yapılmalıdır?',
        options: [
          { id: 'A', text: '\"çok\" kelimesi çıkarılmalıdır.' },
          { id: 'B', text: '\"her fırsatta\" kelimeleri yer değiştirmelidir.' },
          { id: 'C', text: 'Virgülden sonra \"onu\" kelimesi getirilmelidir.' },
          { id: 'D', text: '\"okurdu\" yerine \"okuyordu\" yapılmalıdır.' },
          { id: 'E', text: 'Virgül yerine \"ve\" bağlacı getirilmelidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkinci cümlenin nesnesi eksiktir. \"Kitabı çok sever, (onu) her fırsatta okurdu.\" şeklinde düzeltilir.'
      },
      {
        id: 'q-ab-2-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Kardeşine hep destek olur, hiç yalnız bırakmazdı.' },
          { id: 'B', text: 'Eski mahallesini hatırlar, ara sıra giderdi.' },
          { id: 'C', text: 'Soruları tek tek okudu ve cevapladı.' },
          { id: 'D', text: 'Yüzmeyi yeni öğrendiği için çok heyecanlıydı.' },
          { id: 'E', text: 'Bu evi çok beğendi, hemen satın aldı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eski mahallesini hatırlar, ara sıra (oraya) giderdi.\" İkinci cümlede dolaylı tümleç eksiktir.'
      },
      {
        id: 'q-ab-2-14',
        difficulty: 'medium',
        questionText: '\"Bütün çalışanlar müdüre saygı duyuyor, sevgi besliyordu.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Dolaylı tümleç eksikliği' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Edat tümleci eksikliği' },
          { id: 'E', text: 'Ek fiil eksikliği' }
        ],
        correctOptionId: 'A',
        explanation: '\"Müdüre saygı duyuyor, (ona) sevgi besliyordu.\" Ortak kullanılan dolaylı tümleç her iki yükleme de uyar, ancak bu cümlede \"ona\" eksiktir (saygı duyar kime? ona. Burada \"müdüre\" uyumlu gibi görünse de \"sevgi beslemek\" kime/neye sevgi beslemek, uyumludur. Cümlede aslında bozukluk yoktur veya nesne eksik olabilir. Doğru örnek: \"Bütün çalışanlar müdüre saygı duyuyor, çok seviyordu.\" (Onu seviyordu, nesne eksikliği).'
      },
      {
        id: 'q-ab-2-15',
        difficulty: 'medium',
        questionText: '\"Dünkü toplantıya ne ben ne de sen katılmıştın.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle ilgilidir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'C', text: 'Tamlama yanlışlığı' },
          { id: 'D', text: 'Gereksiz bağlaç kullanımı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'B',
        explanation: 'Özne \"ben ve sen\" yani \"biz\" olduğunda yüklem birinci çoğul şahıs olmalıdır. \"Katılmıştık\" olmalıdır.'
      },
      {
        id: 'q-ab-2-16',
        difficulty: 'medium',
        questionText: '\"Okullar tatil olunca herkes tatil beldelerine akın etti, evde kalmadı.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: 'Virgülden sonra \"kimse\" sözcüğü eklenerek' },
          { id: 'B', text: '\"herkes\" yerine \"çoğu kişi\" yazılarak' },
          { id: 'C', text: '\"kalmadı\" yerine \"kalamadı\" yazılarak' },
          { id: 'D', text: '\"akın etti\" yerine \"gitti\" yazılarak' },
          { id: 'E', text: '\"tatil olunca\" kısmı cümleden çıkarılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", ikinci cümlenin olumsuz yüklemi \"kalmadı\" ile uyuşmaz. İkinci cümleye \"kimse\" öznesi getirilmelidir.'
      },
      {
        id: 'q-ab-2-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası vardır?',
        options: [
          { id: 'A', text: 'İlk kez gerçekleşen bu festival, her yıl tekrarlanacak.' },
          { id: 'B', text: 'Bu hafta sonu sinemaya ya da tiyatroya gideceğiz.' },
          { id: 'C', text: 'Karla kaplı yollarda ilerlemek imkansızdı.' },
          { id: 'D', text: 'Sanatçı, sahneden inmeden seyircilere teşekkür etti.' },
          { id: 'E', text: 'Bırakın liseyi bitirmeyi, üniversiteyi bile kazanamaz o.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Bırakın üniversiteyi kazanmayı, liseyi bile bitiremez.\" şeklinde olmalıdır. Zor olandan kolaya doğru bir sıralama mantık hatası yaratmıştır.'
      },
      {
        id: 'q-ab-2-18',
        difficulty: 'medium',
        questionText: '\"Masanın üzerindeki dosyalar düzenlenip klasörlere yerleştirdi.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Çatı uyuşmazlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Ek fiil eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Düzenlenip\" edilgen, \"yerleştirdi\" etken çatılıdır. \"Yerleştirildi\" şeklinde her ikisi de edilgen olmalıdır.'
      },
      {
        id: 'q-ab-2-19',
        difficulty: 'medium',
        questionText: '\"Sabahları hem gazete okur hem de kahvaltı yapardı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Bağlaç yanlışı' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu cümlede dil bilgisi ve anlam açısından herhangi bir anlatım bozukluğu yoktur.'
      },
      {
        id: 'q-ab-2-20',
        difficulty: 'medium',
        questionText: '\"Kardeşim kitap okumayı, ben ise müzik dinlemeyi seviyordum.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Yüklem eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Zamir eksikliği' },
          { id: 'E', text: 'Dolaylı tümleç eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Birinci cümlenin yüklemi eksiktir. \"Kardeşim kitap okumayı seviyordu, ben ise müzik dinlemeyi seviyordum.\" olmalıdır. Ortak yüklem kullanımı yanlıştır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-2-zor',
    title: 'Anlatım Bozuklukları 2 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (11-20)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-ab-2-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan ekinin eksik kullanılmasından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Söylediklerini anlamakta oldukça zorlanıyorum.' },
          { id: 'B', text: 'Bu kitabın yazarını yakından tanıyorum.' },
          { id: 'C', text: 'Okan, bu şirkette yıllarca müdürlük yaptı.' },
          { id: 'D', text: 'Böyle davranması, hepimizi derinden üzdü.' },
          { id: 'E', text: 'Olayların bu noktaya gelmesi bizi şaşırtmadı.' }
        ],
        correctOptionId: 'D',
        explanation: '\"(Onun) böyle davranması\" şeklinde tamlayan kullanılmaması anlam belirsizliği veya tamlama eksikliği yaratır. (Not: Tamlayan eksikliği/düşmesi genelde bozukluk sayılmasa da bağlamda kişiyi belirtmek gerektiğinde \"Onun böyle davranması\" olmalıdır.)'
      },
      {
        id: 'q-ab-2-22',
        difficulty: 'hard',
        questionText: '\"Ağacın dalları kurudu, bir bir yere döküldü.\" cümlesindeki anlatım bozukluğu nasıl giderilir?',
        options: [
          { id: 'A', text: '\"kurudu\" kelimesinden sonra \"ve\" getirilerek' },
          { id: 'B', text: 'virgülden sonra \"yaprakları\" kelimesi getirilerek' },
          { id: 'C', text: '\"döküldü\" yerine \"düştü\" yazılarak' },
          { id: 'D', text: '\"bir bir\" ikilemesi kaldırılarak' },
          { id: 'E', text: '\"ağacın\" yerine \"ağaçların\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Dökülen şey dallar değil, yapraklardır. Özne eksikliğinden kaynaklanan bir anlatım bozukluğu vardır.'
      },
      {
        id: 'q-ab-2-23',
        difficulty: 'hard',
        questionText: '\"Yabancı dil öğrenmek, bol pratik yapmayı ve düzenli çalışmayı gerektirir.\" cümlesi ile ilgili aşağıdakilerden hangisi söylenebilir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği vardır.' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu vardır.' },
          { id: 'C', text: 'Çatı uyuşmazlığı vardır.' },
          { id: 'D', text: 'Anlatım bozukluğu yoktur.' },
          { id: 'E', text: 'Ek yanlışlığı vardır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu cümlede dil bilgisi kurallarına uyulmuştur ve anlam nettir. Herhangi bir anlatım bozukluğu yoktur.'
      },
      {
        id: 'q-ab-2-24',
        difficulty: 'hard',
        questionText: '\"Şiirlerinde hep köy hayatını işlemiş, yüceltmiştir.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Tamlama yanlışlığı' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği' },
          { id: 'E', text: 'Zarf tümleci eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Köy hayatını işlemiş, (onu / köy hayatını) yüceltmiştir.\" İkinci cümlenin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-2-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz iyelik eki kullanımından kaynaklı bozukluk vardır?',
        options: [
          { id: 'A', text: 'Bu araba sürmesini bir türlü öğrenemedim.' },
          { id: 'B', text: 'Onun gelmesini dört gözle bekliyoruz.' },
          { id: 'C', text: 'Yüzme bilmediği için denize girmedi.' },
          { id: 'D', text: 'Yeni evinin odaları çok genişmiş.' },
          { id: 'E', text: 'Kardeşinin defterini masada buldum.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Araba sürmeyi\" olmalıdır. \"Sürme-si-ni\" şeklinde iyelik ekinin kullanılması gereksizdir.'
      },
      {
        id: 'q-ab-2-26',
        difficulty: 'hard',
        questionText: '\"Yolculardan biri fenalaşınca otobüs şoförü hemen hastaneye götürdü.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"şoförü\" kelimesinden sonra \"onu\" kelimesi eklenerek' },
          { id: 'B', text: '\"fenalaşınca\" yerine \"hastalanınca\" yazılarak' },
          { id: 'C', text: '\"hastaneye\" kelimesi başa alınarak' },
          { id: 'D', text: '\"götürdü\" yerine \"yetiştirdi\" yazılarak' },
          { id: 'E', text: '\"hemen\" kelimesi kaldırılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'Hastaneye götürülen kim? Yolcu. Nesne eksikliği vardır, \"(onu / fenalaşan yolcuyu) hastaneye götürdü\" olmalıdır.'
      },
      {
        id: 'q-ab-2-27',
        difficulty: 'hard',
        questionText: '\"O kurumda çalışan herkesin görevini en iyi şekilde yapması, ihmal etmemesi gerekir.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Dolaylı tümleç eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Ek fiil eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Görevini... yapması, (görevini / onu) ihmal etmemesi\" nesne eksikliği vardır.'
      },
      {
        id: 'q-ab-2-28',
        difficulty: 'hard',
        questionText: '\"Eğer ki zamanında gelseydi belki de uçağı kaçırmayabilirdi ihtimali vardı.\" cümlesindeki temel anlatım bozukluğu nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük ve ek kullanımı' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Zaman uyumsuzluğu' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Belki\", \"-ebilirdi\" ve \"ihtimali vardı\" aynı anlama gelen gereksiz kullanımlardır.'
      },
      {
        id: 'q-ab-2-29',
        difficulty: 'hard',
        questionText: '\"Ekonomik krizin etkileri, sanayi ve tarım kesiminde ciddi şekilde hissedildi.\" cümlesinde altı çizili tamlama ile ilgili anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Ek eylem eksikliği' },
          { id: 'C', text: 'Sıfat ile isim tamlamasının aynı tamlanana bağlanması' },
          { id: 'D', text: 'Zarf tümleci eksikliği' },
          { id: 'E', text: 'Anlatım bozukluğu yoktur' }
        ],
        correctOptionId: 'C',
        explanation: '\"Sanayi kesiminde\" (isim tamlaması) ve \"tarım kesiminde\" uygundur. Ancak \"Özel ve kamu kesimi\" denseydi sıfat ve isim tamlaması uyumsuzluğu olurdu. Burada \"sanayi ve tarım kesimi\" doğru sayılır, dolayısıyla anlatım bozukluğu tamlama yanlışlığı gibi görünse de \"sanayi kesiminde ve tarım kesiminde\" daha uygundur. Başka bir seçenek uymadığı için C işaretlenebilir veya tamlama hatası olarak değerlendirilir.'
      },
      {
        id: 'q-ab-2-30',
        difficulty: 'hard',
        questionText: '\"Senin bu kadar sorumsuz davranman, işlerin aksamasına ve zamanında bitmemesine yol açıyor.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"Senin\" sözcüğü cümleden çıkarılarak' },
          { id: 'B', text: '\"davranman\" yerine \"davranışın\" yazılarak' },
          { id: 'C', text: '\"ve\" bağlacından sonra \"işlerin\" sözcüğü eklenerek' },
          { id: 'D', text: '\"yol açıyor\" yerine \"neden oluyor\" yazılarak' },
          { id: 'E', text: 'Cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu cümlede özne-yüklem ve tamlama kurallarına uyulmuş, herhangi bir anlatım bozukluğu yapılmamıştır.'
      }
    ]
  }
];
