export default [
  {
    id: 'test-cumle-turleri-1-kolay',
    title: 'Cümle Türleri 1 (Kolay)',
    description: 'Cümle Türleri - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-ct-1-1',
        difficulty: 'easy',
        questionText: 'Anlamına göre cümle türleri hangileridir?',
        options: [
          { id: 'A', text: 'Olumlu, olumsuz, soru, ünlem' },
          { id: 'B', text: 'Basit, birleşik, sıralı, bağlı' },
          { id: 'C', text: 'İsim, fiil cümlesi' },
          { id: 'D', text: 'Devrik, kurallı cümle' },
          { id: 'E', text: 'Uzun, kısa cümle' }
        ],
        correctOptionId: 'A',
        explanation: 'Anlamına göre cümleler: olumlu, olumsuz, soru ve ünlem cümleleri olmak üzere dörde ayrılır. B yapısına, C yüklemine, D yüklemin yerine göre sınıflandırmadır.'
      },
      {
        id: 'q-ct-1-2',
        difficulty: 'easy',
        questionText: '"Bugün hava çok güzeldi." cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Olumsuz cümle' },
          { id: 'B', text: 'Soru cümlesi' },
          { id: 'C', text: 'Olumlu cümle' },
          { id: 'D', text: 'Ünlem cümlesi' },
          { id: 'E', text: 'Emir cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: '"Bugün hava çok güzeldi." cümlesinde herhangi bir olumsuzluk eki (-ma/-me, -maz/-mez vb.) yoktur ve olumlu bir yargı bildirmektedir. Bu nedenle olumlu cümledir.'
      },
      {
        id: 'q-ct-1-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi olumsuz cümledir?',
        options: [
          { id: 'A', text: 'Bugün okula gittim.' },
          { id: 'B', text: 'Kitabı okudum.' },
          { id: 'C', text: 'Arkadaşım çok çalışkandır.' },
          { id: 'D', text: 'Bu işi yapamayacağım.' },
          { id: 'E', text: 'Hava güzel görünüyor.' }
        ],
        correctOptionId: 'D',
        explanation: '"Bu işi yapamayacağım." cümlesinde "-ama-" olumsuzluk eki bulunmaktadır. Yargı olumsuz bildirildiği için bu olumsuz cümledir.'
      },
      {
        id: 'q-ct-1-4',
        difficulty: 'easy',
        questionText: 'Yükleminin türüne göre cümleler kaç gruba ayrılır?',
        options: [
          { id: 'A', text: '2 (isim ve fiil cümlesi)' },
          { id: 'B', text: '3 (basit, birleşik, sıralı)' },
          { id: 'C', text: '4 (olumlu, olumsuz, soru, ünlem)' },
          { id: 'D', text: '5 (devrik, kurallı, eksiltili, olumlu, olumsuz)' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'A',
        explanation: 'Yükleminin türüne göre cümleler iki gruba ayrılır: (1) Yüklemi fiil olan "fiil cümlesi" ve (2) yüklemi isim soylu sözcük + ek fiil olan "isim cümlesi".'
      },
      {
        id: 'q-ct-1-5',
        difficulty: 'easy',
        questionText: '"Güneş doğdu." cümlesi yükleminin türüne göre hangi çeşittir?',
        options: [
          { id: 'A', text: 'İsim cümlesi' },
          { id: 'B', text: 'Fiil cümlesi' },
          { id: 'C', text: 'Soru cümlesi' },
          { id: 'D', text: 'Olumsuz cümle' },
          { id: 'E', text: 'Bağlı cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Doğdu" sözcüğü "doğ-" fiil kökünden gelip çekimli bir fiildir. Yüklemi fiil olan cümleler fiil cümlesidir.'
      },
      {
        id: 'q-ct-1-6',
        difficulty: 'easy',
        questionText: '"O çok zekidir." cümlesi yükleminin türüne göre hangi çeşittir?',
        options: [
          { id: 'A', text: 'Fiil cümlesi' },
          { id: 'B', text: 'Soru cümlesi' },
          { id: 'C', text: 'İsim cümlesi' },
          { id: 'D', text: 'Olumsuz cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Zekidir" sözcüğü "zeki" sıfatı + "-dir" ek fiilinden oluşmaktadır. Yüklemi isim soylu sözcük + ek fiilden oluşan cümleler isim cümlesidir.'
      },
      {
        id: 'q-ct-1-7',
        difficulty: 'easy',
        questionText: 'Yüklemin cümle sonunda yer aldığı cümle türü hangisidir?',
        options: [
          { id: 'A', text: 'Devrik cümle' },
          { id: 'B', text: 'Kurallı cümle' },
          { id: 'C', text: 'Eksiltili cümle' },
          { id: 'D', text: 'Birleşik cümle' },
          { id: 'E', text: 'Sıralı cümle' }
        ],
        correctOptionId: 'B',
        explanation: 'Türkçede yüklem genellikle cümlenin sonunda yer alır. Yüklemin en sonda olduğu cümleler "kurallı (düz) cümle" olarak adlandırılır.'
      },
      {
        id: 'q-ct-1-8',
        difficulty: 'easy',
        questionText: '"Koştu hızla çocuk." cümlesi yükleminin yerine göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Kurallı cümle' },
          { id: 'B', text: 'Eksiltili cümle' },
          { id: 'C', text: 'Devrik cümle' },
          { id: 'D', text: 'Birleşik cümle' },
          { id: 'E', text: 'Sıralı cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Koştu hızla çocuk." cümlesinde yüklem ("koştu") cümlenin başında yer almaktadır. Yüklemin cümle sonunda bulunmadığı cümleler devrik cümle sayılır.'
      },
      {
        id: 'q-ct-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi soru cümlesidir?',
        options: [
          { id: 'A', text: 'Bugün hava güzel.' },
          { id: 'B', text: 'Ne zaman geleceksin?' },
          { id: 'C', text: 'Erken kalk!' },
          { id: 'D', text: 'Çok yorgundum.' },
          { id: 'E', text: 'Bunu bilmiyordum.' }
        ],
        correctOptionId: 'B',
        explanation: '"Ne zaman geleceksin?" cümlesi soru sözcüğü içermekte ve soru işaretiyle bitmektedir. Bu nedenle soru cümlesidir.'
      },
      {
        id: 'q-ct-1-10',
        difficulty: 'easy',
        questionText: 'Yapısına göre cümleler kaç gruba ayrılır?',
        options: [
          { id: 'A', text: '2 (basit ve birleşik)' },
          { id: 'B', text: '4 (basit, birleşik, sıralı, bağlı)' },
          { id: 'C', text: '3 (olumlu, olumsuz, soru)' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapısına göre cümleler dörde ayrılır: (1) Basit cümle, (2) Birleşik cümle, (3) Sıralı cümle, (4) Bağlı cümle.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-1-orta',
    title: 'Cümle Türleri 1 (Orta)',
    description: 'Cümle Türleri - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-ct-1-11',
        difficulty: 'medium',
        questionText: '"Şiiri kim yazmış bilmiyorum." cümlesi yapısına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Sıralı cümle' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'İç içe (girişik) birleşik cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'D',
        explanation: '"Şiiri kim yazmış bilmiyorum." cümlesinde "şiiri kim yazmış" yan cümlesi, "bilmiyorum" temel cümlesinin nesnesini oluşturmaktadır. Bu yapı "içice (girişik) birleşik cümle"dir.'
      },
      {
        id: 'q-ct-1-12',
        difficulty: 'medium',
        questionText: '"Ali okula gitti, Ayşe evde kaldı." cümlesi yapısına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Bağlı cümle' },
          { id: 'C', text: 'Sıralı cümle' },
          { id: 'D', text: 'Birleşik cümle' },
          { id: 'E', text: 'İç içe cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Ali okula gitti, Ayşe evde kaldı." cümlesinde iki yargı virgülle ayrılmış ve herhangi bir bağlaç kullanılmamıştır. Bağlaçsız yan yana gelen birden fazla yargı "sıralı cümle" oluşturur.'
      },
      {
        id: 'q-ct-1-13',
        difficulty: 'medium',
        questionText: '"Hem çalışıyor hem de okuyordu." cümlesi yapısına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Sıralı cümle' },
          { id: 'B', text: 'Bağlı cümle' },
          { id: 'C', text: 'Birleşik cümle' },
          { id: 'D', text: 'Basit cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Hem... hem de..." bağlaçlarıyla birbirine bağlanan iki yargı bulunmaktadır. Bağlaçla bağlanan birden fazla yargı "bağlı cümle" oluşturur.'
      },
      {
        id: 'q-ct-1-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi "şart (koşul) cümlesi" içermektedir?',
        options: [
          { id: 'A', text: 'Bugün hava güzeldi.' },
          { id: 'B', text: 'Erken kalkarsan treni kaçırmazsın.' },
          { id: 'C', text: 'Kitabı masaya koydum.' },
          { id: 'D', text: 'Yarın toplantı var.' },
          { id: 'E', text: 'Çocuklar parkta oynuyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '"Erken kalkarsan treni kaçırmazsın." cümlesinde "-sa/-se" koşul eki kullanılmıştır. Bu cümle şart (koşul) anlamı taşıyan birleşik cümledir: "erken kalkarsan" şart yan cümlesi, "treni kaçırmazsın" ise temel cümledir.'
      },
      {
        id: 'q-ct-1-15',
        difficulty: 'medium',
        questionText: '"Söylediğin doğruysa sevinebiliriz." cümlesinde kaç yargı bulunmaktadır?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' }
        ],
        correctOptionId: 'B',
        explanation: '"Söylediğin doğruysa sevinebiliriz." cümlesinde iki yargı bulunmaktadır: (1) "Söylediğin doğruysa" (şart yan cümlesi), (2) "sevinebiliriz" (temel cümle). Birleşik cümle iki yargı içermektedir.'
      },
      {
        id: 'q-ct-1-16',
        difficulty: 'medium',
        questionText: '"Onu görünce içim sıkıştı." cümlesinde "onu görünce" hangi tür yan cümleciktir?',
        options: [
          { id: 'A', text: 'Şart (koşul) yan cümlesi' },
          { id: 'B', text: 'Ki\'li birleşik cümle' },
          { id: 'C', text: 'Zaman yan cümlesi (zarf cümlesi)' },
          { id: 'D', text: 'Özne yan cümlesi' },
          { id: 'E', text: 'Nesne yan cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: '"Onu görünce" ifadesinde "-ınca/-ince" zarf-fiil eki bulunmaktadır ve "ne zaman?" sorusuna cevap vermektedir. Bu nedenle zaman bildiren zarf cümlesidir.'
      },
      {
        id: 'q-ct-1-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "ki"li birleşik cümledir?',
        options: [
          { id: 'A', text: 'Hava güzeldi, dışarı çıktık.' },
          { id: 'B', text: 'Hem okudu hem çalıştı.' },
          { id: 'C', text: 'Öyle yorgundum ki ayakta duramıyordum.' },
          { id: 'D', text: 'Gelince haber verecek.' },
          { id: 'E', text: 'Erken kalkarsa treni yakalar.' }
        ],
        correctOptionId: 'C',
        explanation: '"Öyle yorgundum ki ayakta duramıyordum." cümlesinde "ki" bağlacı iki yargıyı birbirine bağlamaktadır. "Ki"li birleşik cümlede "ki" genellikle sonuç ya da açıklama bildirir.'
      },
      {
        id: 'q-ct-1-18',
        difficulty: 'medium',
        questionText: '"Anlattıklarına bakılırsa iş bitmemiş." cümlesinde temel cümle hangisidir?',
        options: [
          { id: 'A', text: 'Anlattıklarına bakılırsa' },
          { id: 'B', text: 'iş bitmemiş' },
          { id: 'C', text: 'Anlattıklarına' },
          { id: 'D', text: 'bakılırsa iş' },
          { id: 'E', text: 'Cümlede temel cümle yoktur' }
        ],
        correctOptionId: 'B',
        explanation: '"Anlattıklarına bakılırsa" şart yan cümlesidir. "İş bitmemiş" ise asıl yargıyı içeren temel cümledir. Birleşik cümlelerde yargı bildiren bölüm temel cümledir.'
      },
      {
        id: 'q-ct-1-19',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi "eksiltili cümle"ye örnektir?',
        options: [
          { id: 'A', text: 'Eve gittim.' },
          { id: 'B', text: 'Hava güzel.' },
          { id: 'C', text: 'Gelir misin?' },
          { id: 'D', text: 'Koş!' },
          { id: 'E', text: 'Olmaz ki...' }
        ],
        correctOptionId: 'E',
        explanation: '"Olmaz ki..." ifadesinde cümle yarıda bırakılmıştır; yüklem var ama cümle tam bir yargı bildirmemiştir. Yüklemi olan ama bağlamla anlamı tamamlanan ya da sonu getirilmemiş cümleler eksiltili cümledir.'
      },
      {
        id: 'q-ct-1-20',
        difficulty: 'medium',
        questionText: '"Gel!" cümlesi kaç öge içermektedir ve hangi ögesi eksiktir?',
        options: [
          { id: 'A', text: '1 öge içerir; özne gizlidir.' },
          { id: 'B', text: '2 öge içerir; nesne eksiktir.' },
          { id: 'C', text: 'Hiç öge yoktur.' },
          { id: 'D', text: '1 öge içerir; yüklem gizlidir.' },
          { id: 'E', text: '3 öge içerir.' }
        ],
        correctOptionId: 'A',
        explanation: '"Gel!" cümlesinde yalnızca yüklem ("gel") görünmektedir. Özne ise "sen" olarak gizlidir (2. tekil kişi). Türkçede fiil çekimi özneyi de gösterdiğinden özne her zaman söylenmek zorunda değildir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-1-zor',
    title: 'Cümle Türleri 1 (Zor)',
    description: 'Cümle Türleri - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-ct-1-21',
        difficulty: 'hard',
        questionText: '"Seni çağırdıklarında evde yoktum." cümlesinin yapı türü ve yan cümle türü doğru belirlenmiş seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Birleşik cümle — şart yan cümlesi' },
          { id: 'B', text: 'Birleşik cümle — zaman yan cümlesi' },
          { id: 'C', text: 'Sıralı cümle — iki temel cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'Basit cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Seni çağırdıklarında" bölümü "-dığında/-diğinde" zarf-fiil ekini içermekte ve "ne zaman?" sorusuna cevap vermektedir. Bu zaman bildiren yan cümledir. Tüm yapı birleşik cümledir.'
      },
      {
        id: 'q-ct-1-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde hem soru hem de olumsuzluk bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Nereye gidiyorsun?' },
          { id: 'B', text: 'Buraya gelmedin mi?' },
          { id: 'C', text: 'Bu kitabı okudum.' },
          { id: 'D', text: 'Çok çalışkan değil misin?' },
          { id: 'E', text: 'B ve D doğrudur.' }
        ],
        correctOptionId: 'E',
        explanation: '"Buraya gelmedin mi?" — "gelmedin" olumsuz, "-mi" soru. "Çok çalışkan değil misin?" — "değil" olumsuz, "-mi" soru. Her ikisinde de hem soru hem olumsuzluk bulunmaktadır. E doğrudur.'
      },
      {
        id: 'q-ct-1-23',
        difficulty: 'hard',
        questionText: '"Bilmiyorum nereye gittiğini." cümlesi hem devrik hem de birleşik cümle özelliği taşıyor mu? Gerekçesiyle doğru yanıt hangisidir?',
        options: [
          { id: 'A', text: 'Hayır, yalnızca devrik cümledir.' },
          { id: 'B', text: 'Hayır, yalnızca birleşik cümledir.' },
          { id: 'C', text: 'Evet; "bilmiyorum" yüklem başta, "nereye gittiğini" ise nesne yan cümlesidir.' },
          { id: 'D', text: 'Evet; sıralı ve devrik cümledir.' },
          { id: 'E', text: 'Basit devrik cümledir, birleşik değildir.' }
        ],
        correctOptionId: 'C',
        explanation: '"Bilmiyorum nereye gittiğini." cümlesinde yüklem ("bilmiyorum") başta olduğu için devrik cümledir. Aynı zamanda "nereye gittiğini" yan cümlesi temel cümlenin nesnesini oluşturduğu için birleşik cümledir. İki özellik birden taşımaktadır.'
      },
      {
        id: 'q-ct-1-24',
        difficulty: 'hard',
        questionText: '"Gözlerim sizi görmeden kapanmayacak." cümlesinde "gözlerim sizi görmeden" ifadesi hangi yan cümle görevindedir?',
        options: [
          { id: 'A', text: 'Şart yan cümlesi' },
          { id: 'B', text: 'Zaman yan cümlesi' },
          { id: 'C', text: 'Amaç yan cümlesi' },
          { id: 'D', text: 'Koşul bildiren zarf cümlelesi' },
          { id: 'E', text: 'Özne yan cümlesi' }
        ],
        correctOptionId: 'B',
        explanation: '"Gözlerim sizi görmeden" ifadesinde "-meden/-madan" zarf-fiil eki "ne zaman?" ya da "nasıl bir süreç içinde?" sorusuna cevap verir. Bu zaman/süreç bildiren bir zarf yan cümlesidir.'
      },
      {
        id: 'q-ct-1-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "olumsuz soru" biçimsel olarak değil anlamsal olarak olumsuzluk taşır?',
        options: [
          { id: 'A', text: 'Gelmedin mi?' },
          { id: 'B', text: 'Bunu bilmez misin?' },
          { id: 'C', text: 'Ne güzel bir gün!' },
          { id: 'D', text: 'Yarın gelecek misin?' },
          { id: 'E', text: 'Hiç gitmez miydim?' }
        ],
        correctOptionId: 'B',
        explanation: '"Bunu bilmez misin?" cümlesinde "-mez" olumsuzluk eki biçimsel olarak olumsuzluk taşımaktadır. Ancak anlam bakımından bu soru "Bunu bilmen gerekiyor" anlamını kastetmektedir — olumlu bir beklenti/pişmanlık ifadesidir. Biçim olumsuz, anlam ise sorgulamaya dayalı olumluluktur.'
      },
      {
        id: 'q-ct-1-26',
        difficulty: 'hard',
        questionText: '"Annen ne dedi de bu kadar üzüldün?" cümlesindeki "de" hangi işlevi yerine getirmektedir?',
        options: [
          { id: 'A', text: 'Bağlaç' },
          { id: 'B', text: 'Soru pekiştirici işlevi' },
          { id: 'C', text: 'Önceki eylemle bağlantı kuran zarf cümlesi eki' },
          { id: 'D', text: 'Bulunma hâl eki' },
          { id: 'E', text: 'Fiil çatı eki' }
        ],
        correctOptionId: 'C',
        explanation: '"Ne dedi de bu kadar üzüldün?" cümlesindeki "de" bağlacı "neden, nasıl bir sonuç olarak" anlamı katarak iki yargıyı birbirine bağlamaktadır. Nedensellik veya sonuç bildiren bu kullanım bağlaç işlevindedir.'
      },
      {
        id: 'q-ct-1-27',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerden hangisi "girişik birleşik cümle" için doğru tanımdır?',
        options: [
          { id: 'A', text: 'Bağlaçla bağlanan iki temel cümle' },
          { id: 'B', text: 'İki temel cümlenin virgülle ayrılması' },
          { id: 'C', text: 'Temel cümlenin bir ögesi yerine yan cümlenin kullanıldığı yapı' },
          { id: 'D', text: '"Ki" ile bağlanan cümleler' },
          { id: 'E', text: 'Sıralı cümlelerle aynıdır' }
        ],
        correctOptionId: 'C',
        explanation: 'Girişik (iç içe) birleşik cümlede bir yan cümle, temel cümlenin özne, nesne veya zarf gibi bir ögesi yerine kullanılmaktadır. Örnek: "Geleceğini biliyordum." — "geleceğini" yan cümlesi temel cümlenin nesnesi durumundadır.'
      },
      {
        id: 'q-ct-1-28',
        difficulty: 'hard',
        questionText: '"Adam ne yapacağını şaşırdı." cümlesinde "ne yapacağını" ifadesi temel cümle içinde hangi ögedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Dolaylı tümleç' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'B',
        explanation: '"Adam ne yapacağını şaşırdı." cümlesinde "şaşırmak" fiilinin nesnesi "ne yapacağını" ifadesidir. Bu yan cümle (-acağını eki) temel cümlenin nesne ögesi görevindedir.'
      },
      {
        id: 'q-ct-1-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisi hem "yapısı" hem "anlamı" bakımından aynı anda iki farklı şekilde sınıflandırılabilir?',
        options: [
          { id: 'A', text: '"Gel!" (emir, basit, devrik)' },
          { id: 'B', text: '"Hava güzel değil mi?" (soru ama aslında olumlu anlamlı)' },
          { id: 'C', text: '"Kitap masada." (isim cümlesi, olumlu)' },
          { id: 'D', text: '"Koştu." (fiil cümlesi, olumlu)' },
          { id: 'E', text: '"Uyuyor." (basit, fiil cümlesi)' }
        ],
        correctOptionId: 'B',
        explanation: '"Hava güzel değil mi?" cümlesi biçimsel olarak olumsuz soru ("değil mi?") iken anlam bakımından olumlu bir yargıyı ("hava güzel") doğrulama amacı taşır. Hem soru hem olumsuz görünümlü ama aslında olumlu onay arayan bir cümledir.'
      },
      {
        id: 'q-ct-1-30',
        difficulty: 'hard',
        questionText: '"Çalışmak için değil; üretmek için çalışmalıyız." cümlesinin yapı türü ve özelliği nedir?',
        options: [
          { id: 'A', text: 'Sıralı cümle, iki temel yargı virgülle sıralanmış' },
          { id: 'B', text: 'Bağlı cümle, bağlaçla birleştirilmiş' },
          { id: 'C', text: 'Birleşik cümle, yan cümle içermektedir' },
          { id: 'D', text: 'Noktalı virgülle ayrılan sıralı cümle; zıtlık bildiren kurgu' },
          { id: 'E', text: 'Basit cümle' }
        ],
        correctOptionId: 'D',
        explanation: '"Çalışmak için değil; üretmek için çalışmalıyız." cümlesinde noktalı virgül kullanılmış iki yargı sıralanmış; anlam bakımından zıtlık (değil... için) kurgusu oluşturulmuştur. Sıralı cümle özelliği taşır.'
      }
    ]
  }
]
