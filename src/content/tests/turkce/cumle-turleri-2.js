export default [
  {
    id: 'test-cumle-turleri-2-kolay',
    title: 'Cümle Türleri 2 (Kolay)',
    description: 'Cümle Türleri - Kolay (31-40)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-ct-2-1',
        difficulty: 'easy',
        questionText: '"Hava bugün soğuktu." cümlesi yükleminin türüne göre hangi çeşittir?',
        options: [
          { id: 'A', text: 'Fiil cümlesi' },
          { id: 'B', text: 'İsim cümlesi' },
          { id: 'C', text: 'Devrik cümle' },
          { id: 'D', text: 'Soru cümlesi' },
          { id: 'E', text: 'Olumsuz cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Soğuktu" sözcüğü "soğuk" sıfatı + "-tu" ek fiilinden oluşmaktadır. Yüklemi isim soylu sözcük + ek fiil olan cümleler "isim cümlesi" olarak adlandırılır.'
      },
      {
        id: 'q-ct-2-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "fiil cümlesi"dir?',
        options: [
          { id: 'A', text: 'O çok zekidir.' },
          { id: 'B', text: 'Bu kitap ilginçtir.' },
          { id: 'C', text: 'Kardeşim öğrencidir.' },
          { id: 'D', text: 'Çocuklar bahçede koştu.' },
          { id: 'E', text: 'Hava bugün serin.' }
        ],
        correctOptionId: 'D',
        explanation: '"Koştu" sözcüğü "koş-" fiil kökünden gelen çekimli bir fiildir. Yüklemi fiil olan cümle "fiil cümlesi"dir.'
      },
      {
        id: 'q-ct-2-3',
        difficulty: 'easy',
        questionText: '"Bu masa ahşaptan yapılmamıştır." cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Olumlu cümle' },
          { id: 'B', text: 'Soru cümlesi' },
          { id: 'C', text: 'Olumsuz cümle' },
          { id: 'D', text: 'Ünlem cümlesi' },
          { id: 'E', text: 'Emir cümlesi' }
        ],
        correctOptionId: 'C',
        explanation: '"Yapılmamıştır" sözcüğünde "-ma-" olumsuzluk eki bulunmaktadır. Bu nedenle cümle olumsuz anlamlıdır ve "olumsuz cümle"dir.'
      },
      {
        id: 'q-ct-2-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "ünlem cümlesi"dir?',
        options: [
          { id: 'A', text: 'Yarın okula gideceğim.' },
          { id: 'B', text: 'Bu kitabı okudum mu?' },
          { id: 'C', text: 'Ne kadar yorgun görünüyorsun!' },
          { id: 'D', text: 'Hava bugün güzeldi.' },
          { id: 'E', text: 'Masanın üzerinde kalem var.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ne kadar yorgun görünüyorsun!" cümlesi güçlü bir duygu (hayret, üzüntü, sempati) bildirmekte ve ünlem işaretiyle bitmektedir. Bu nedenle ünlem cümlesidir.'
      },
      {
        id: 'q-ct-2-5',
        difficulty: 'easy',
        questionText: '"Koş, gecikirsin!" cümlesi anlamına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Soru cümlesi' },
          { id: 'B', text: 'Olumsuz cümle' },
          { id: 'C', text: 'Olumlu ünlem / emir bildiren cümle' },
          { id: 'D', text: 'Birleşik cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Koş!" ifadesi emir bildirmekte ve ünlem işareti içermektedir. Olumlu eylem bildiren emir/ünlem cümlesidir.'
      },
      {
        id: 'q-ct-2-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "basit cümle"dir?',
        options: [
          { id: 'A', text: 'Hava güzelleşince dışarı çıktık.' },
          { id: 'B', text: 'Hem okudu hem de çalıştı.' },
          { id: 'C', text: 'Gördüğünü anlattı.' },
          { id: 'D', text: 'Çiçekler açtı.' },
          { id: 'E', text: 'Gelince haber ver.' }
        ],
        correctOptionId: 'D',
        explanation: '"Çiçekler açtı." cümlesi yalnızca bir yargı bildiren, tek yüklemli, yan cümle içermeyen basit bir cümledir.'
      },
      {
        id: 'q-ct-2-7',
        difficulty: 'easy',
        questionText: '"Güneş battı, hava karardı." cümlesi yapısına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Basit cümle' },
          { id: 'B', text: 'Birleşik cümle' },
          { id: 'C', text: 'Sıralı cümle' },
          { id: 'D', text: 'Bağlı cümle' },
          { id: 'E', text: 'Devrik cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Güneş battı, hava karardı." cümlesinde iki yargı virgülle ayrılmış ve bağlaç kullanılmamıştır. Bağlaçsız, virgülle ayrılan iki yargıdan oluşan yapılar sıralı cümledir.'
      },
      {
        id: 'q-ct-2-8',
        difficulty: 'easy',
        questionText: '"Ya geleceksin ya da gelmeyeceksin." cümlesi yapısına göre hangi türdedir?',
        options: [
          { id: 'A', text: 'Sıralı cümle' },
          { id: 'B', text: 'Birleşik cümle' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'Devrik cümle' },
          { id: 'E', text: 'Basit cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Ya... ya da..." bağlaçları iki yargıyı birbirine bağlamaktadır. Bağlaçla birleştirilmiş yargılar "bağlı cümle" oluşturur.'
      },
      {
        id: 'q-ct-2-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi "devrik cümle"dir?',
        options: [
          { id: 'A', text: 'Çocuk bahçede oynadı.' },
          { id: 'B', text: 'Ali kitap okuyor.' },
          { id: 'C', text: 'Güldü o kadar.' },
          { id: 'D', text: 'Hava bugün serin.' },
          { id: 'E', text: 'Annem yemek pişiriyor.' }
        ],
        correctOptionId: 'C',
        explanation: '"Güldü o kadar." cümlesinde yüklem ("güldü") cümlenin başında yer almaktadır. Yüklemin cümle sonunda olmadığı cümleler devrik cümledir.'
      },
      {
        id: 'q-ct-2-10',
        difficulty: 'easy',
        questionText: 'Türkçede cümleleri "yapısına göre" sınıflandırmada esas alınan ölçüt nedir?',
        options: [
          { id: 'A', text: 'Cümlenin uzunluğu' },
          { id: 'B', text: 'Yargı sayısı ve yargıların birbirine bağlanma biçimi' },
          { id: 'C', text: 'Yüklemin isim ya da fiil olması' },
          { id: 'D', text: 'Cümlenin olumlu ya da olumsuz olması' },
          { id: 'E', text: 'Yüklemin cümle başında ya da sonunda olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Cümleyi yapısına göre sınıflandırmada esas alınan ölçüt yargı sayısı ve yargıların birbirine nasıl bağlandığıdır (virgülle mi, bağlaçla mı, yan cümleyle mi).'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-2-orta',
    title: 'Cümle Türleri 2 (Orta)',
    description: 'Cümle Türleri - Orta (41-50)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-ct-2-11',
        difficulty: 'medium',
        questionText: '"Gelirse seve seve kabul ederiz." cümlesinde yan cümle türü ve temel cümle doğru eşleştirilmiş seçenek hangisidir?',
        options: [
          { id: 'A', text: 'Yan cümle: zaman, Temel: seve seve kabul ederiz' },
          { id: 'B', text: 'Yan cümle: şart, Temel: seve seve kabul ederiz' },
          { id: 'C', text: 'Yan cümle: amaç, Temel: seve seve kabul ederiz' },
          { id: 'D', text: 'Yan cümle: sonuç, Temel: gelirse' },
          { id: 'E', text: 'Yan cümle yoktur, sıralı cümledir' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelirse" ifadesinde "-se/-sa" şart eki kullanılmıştır. Bu şart yan cümlesidir. Temel cümle "seve seve kabul ederiz" bölümüdür.'
      },
      {
        id: 'q-ct-2-12',
        difficulty: 'medium',
        questionText: '"Çalışarak başardı." cümlesindeki "çalışarak" ifadesi hangi anlam ilişkisi kurmaktadır?',
        options: [
          { id: 'A', text: 'Zaman bildiriyor' },
          { id: 'B', text: 'Şart bildiriyor' },
          { id: 'C', text: 'Araç/yol bildiriyor (nasıl sorusuna cevap)' },
          { id: 'D', text: 'Amaç bildiriyor' },
          { id: 'E', text: 'Neden bildiriyor' }
        ],
        correctOptionId: 'C',
        explanation: '"Çalışarak" zarf-fiil "-arak/-erek" ekini içermektedir. "Nasıl?" sorusuna cevap verdiği için araç/yol bildiren bir zarf cümlesi özelliği taşır.'
      },
      {
        id: 'q-ct-2-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "nesne cümlesi (nesne işleviyle kullanılan yan cümle)" içermektedir?',
        options: [
          { id: 'A', text: 'Hava güzelleşince dışarı çıktık.' },
          { id: 'B', text: 'Gelirse konuşuruz.' },
          { id: 'C', text: 'Seni sevdiğimi anlamamış mısın?' },
          { id: 'D', text: 'Hem okuyup hem de çalıştı.' },
          { id: 'E', text: 'Ali gidince ben de gidecektim.' }
        ],
        correctOptionId: 'C',
        explanation: '"Seni sevdiğimi anlamamış mısın?" cümlesinde "seni sevdiğimi" ifadesi "-diğimi" sıfat-fiil ekiyle oluşturulmuş ve "anlamamış mısın?" yükleminin nesnesini oluşturmaktadır. Bu nesne işlevinde yan cümledir.'
      },
      {
        id: 'q-ct-2-14',
        difficulty: 'medium',
        questionText: 'Anlamsal açıdan "olumlu biçimde kurulmuş olumsuz cümle" için en uygun örnek hangisidir?',
        options: [
          { id: 'A', text: 'Hiç gitmedi.' },
          { id: 'B', text: 'Gelmez olur mu?' },
          { id: 'C', text: 'Bu işi yapmadım.' },
          { id: 'D', text: 'Kesinlikle inanmıyorum.' },
          { id: 'E', text: 'Olmaz ki böyle bir şey.' }
        ],
        correctOptionId: 'B',
        explanation: '"Gelmez olur mu?" cümlesi biçimsel olarak olumsuz soru gibi görünse de anlam bakımından "elbette gelir" anlamı taşımaktadır. Olumlu anlam, olumsuz biçimle aktarılmıştır.'
      },
      {
        id: 'q-ct-2-15',
        difficulty: 'medium',
        questionText: '"Kapıyı çalarken içeride kimse yoktu." cümlesinde "çalarken" ifadesi hangi tür cümle ögesidir?',
        options: [
          { id: 'A', text: 'Nesne' },
          { id: 'B', text: 'Özne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Zarf tümleci (zaman)' },
          { id: 'E', text: 'Dolaylı tümleç' }
        ],
        correctOptionId: 'D',
        explanation: '"Kapıyı çalarken" ifadesinde "-ken" zarf-fiil eki bulunmaktadır. "Ne zaman yoktu?" sorusuna cevap verdiği için zaman bildiren zarf tümleci görevindedir.'
      },
      {
        id: 'q-ct-2-16',
        difficulty: 'medium',
        questionText: '"Öyle bir yere gideceğim ki orada kimse beni bulamayacak." cümlesi hangi tür birleşik cümledir?',
        options: [
          { id: 'A', text: 'Şart birleşik cümlesi' },
          { id: 'B', text: '"Ki"li birleşik cümle' },
          { id: 'C', text: 'Girişik birleşik cümle' },
          { id: 'D', text: 'Sıralı cümle' },
          { id: 'E', text: 'Bağlı cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Öyle... ki..." yapısı "ki"li birleşik cümle oluşturur. "Gideceğim ki kimse bulamayacak" — "ki" sonuç, pekiştirme ya da açıklama işlevi taşımaktadır.'
      },
      {
        id: 'q-ct-2-17',
        difficulty: 'medium',
        questionText: '"Annen nerede?" cümlesi ve "Annen nerede!" cümlesi arasındaki fark nedir?',
        options: [
          { id: 'A', text: 'İkisi tamamen aynıdır.' },
          { id: 'B', text: 'Biri soru, diğeri ünlem bildiriyor; noktalama işareti anlam farkı yaratır.' },
          { id: 'C', text: 'İkisi de soru cümlesidir.' },
          { id: 'D', text: 'İkisi de ünlem cümlesidir.' },
          { id: 'E', text: 'Biri devrik, diğeri kurallı cümledir.' }
        ],
        correctOptionId: 'B',
        explanation: '"Annen nerede?" gerçek bir bilgi alma sorusudur. "Annen nerede!" ise şaşırma, merak ya da kaygı gibi duygu içeren ünlem cümlesidir. Noktalama işareti (? veya !) cümlenin anlamını ve türünü belirlemektedir.'
      },
      {
        id: 'q-ct-2-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisi "özne cümlesi (özne işlevinde yan cümle)" içermektedir?',
        options: [
          { id: 'A', text: 'Erkenden uyanmak sağlıklıdır.' },
          { id: 'B', text: 'Hava güzelleşince çıktık.' },
          { id: 'C', text: 'Kitabı okudum.' },
          { id: 'D', text: 'Hem çalıştı hem okudu.' },
          { id: 'E', text: 'Dersini çalıştı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Erkenden uyanmak sağlıklıdır." cümlesinde "erkenden uyanmak" isim-fiil (mastar) biçiminde kullanılmış ve "sağlıklıdır" yükleminin öznesi olmuştur. Bu özne işlevinde yan cümledir.'
      },
      {
        id: 'q-ct-2-19',
        difficulty: 'medium',
        questionText: '"Çok çalışıp az uyudu." cümlesinde "çok çalışıp" nasıl bir işlev taşımaktadır?',
        options: [
          { id: 'A', text: 'Şart bildiriyor' },
          { id: 'B', text: 'Amaç bildiriyor' },
          { id: 'C', text: 'Eylemlerin sıralandığını (zarf-fiil) gösteriyor' },
          { id: 'D', text: 'Sonuç bildiriyor' },
          { id: 'E', text: 'Özne işlevi görüyor' }
        ],
        correctOptionId: 'C',
        explanation: '"-ip/-ıp/-up/-üp" zarf-fiil eki eylemler arasında art ardalık ve ilişkililik bildirir: "önce çok çalıştı, sonra az uyudu" anlamını verir. Bu sıralama ilişkisi bildiren bir zarf-fiil kullanımıdır.'
      },
      {
        id: 'q-ct-2-20',
        difficulty: 'medium',
        questionText: '"Dün geldi; bugün gitti." cümlesinde noktalı virgülün işlevi nedir?',
        options: [
          { id: 'A', text: 'İki cümleyi bağlaçsız ayırır ve her ikisi de bağımsız yargıdır.' },
          { id: 'B', text: 'Bağlı cümle oluşturur.' },
          { id: 'C', text: 'Birleşik cümle oluşturur.' },
          { id: 'D', text: 'Yalnızca görsel ayrım amacıyla kullanılmıştır.' },
          { id: 'E', text: 'Şart ilişkisi kurar.' }
        ],
        correctOptionId: 'A',
        explanation: 'Noktalı virgül, birbiriyle ilişkili ama bağımsız iki yargıyı ayırır. "Dün geldi; bugün gitti." cümlesinde her iki yargı da bağımsız temel cümledir. Bu sıralı cümlenin daha güçlü virgül niteliğindedir.'
      }
    ]
  },
  {
    id: 'test-cumle-turleri-2-zor',
    title: 'Cümle Türleri 2 (Zor)',
    description: 'Cümle Türleri - Zor (51-60)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-ct-2-21',
        difficulty: 'hard',
        questionText: '"Ne söylediğini bilmiyorum, ama bildiğini söylemediğinden şüpheleniyorum." cümlesinde kaç yargı bulunmaktadır?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' },
          { id: 'E', text: '6' }
        ],
        correctOptionId: 'C',
        explanation: 'Cümlede şu yargılar bulunmaktadır: (1) "ne söylediğini" (yan), (2) "bilmiyorum" (temel1), (3) "bildiğini söylemediğinden" (yan), (4) "şüpheleniyorum" (temel2). Toplam 4 yargı vardır.'
      },
      {
        id: 'q-ct-2-22',
        difficulty: 'hard',
        questionText: '"Uyuduğunu sanıyordum." cümlesinde birleşik cümle türü ve yan cümlenin işlevi nedir?',
        options: [
          { id: 'A', text: 'Şart birleşik cümle; yan cümle şart' },
          { id: 'B', text: 'Girişik birleşik cümle; "uyuduğunu" nesne yan cümlesi' },
          { id: 'C', text: 'Bağlı cümle; bağlaçla bağlı' },
          { id: 'D', text: 'Sıralı cümle; virgülle ayrılmış' },
          { id: 'E', text: 'Basit cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Uyuduğunu sanıyordum." cümlesinde "uyuduğunu" (-duğunu ekiyle) sıfat-fiil oluşturulmuş ve "sanıyordum" yükleminin nesnesi konumuna getirilmiştir. Bu girişik birleşik cümlededir; yan cümle nesne işleviyle kullanılmıştır.'
      },
      {
        id: 'q-ct-2-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisinde hem "sıralı" hem "bağlı" cümle özellikleri bir arada bulunmaktadır?',
        options: [
          { id: 'A', text: 'Hava güzeldi, dışarı çıktık.' },
          { id: 'B', text: 'Hem çalıştı hem dinlendi.' },
          { id: 'C', text: 'Ali okudu, Ayşe yazdı; ikisi de çalıştı.' },
          { id: 'D', text: 'Eve geldi.' },
          { id: 'E', text: 'Gelince görüşürüz.' }
        ],
        correctOptionId: 'C',
        explanation: '"Ali okudu, Ayşe yazdı; ikisi de çalıştı." cümlesinde "Ali okudu, Ayşe yazdı" sıralı cümle (virgül, bağlaçsız) ve "ikisi de çalıştı" bölümü ise bir önceki yargılarla anlam bağıyla (bağlı nitelikte) bağlanmıştır. Her iki özellik bir arada görülmektedir.'
      },
      {
        id: 'q-ct-2-24',
        difficulty: 'hard',
        questionText: '"Öğrencilerin başarılı olmadığı görüldü." cümlesinde "başarılı olmadığı" ifadesi hangi görevdedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Yüklem' },
          { id: 'D', text: 'Dolaylı tümleç' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'B',
        explanation: '"Öğrencilerin başarılı olmadığı görüldü." cümlesinde "görüldü" fiilinin nesnesi "başarılı olmadığı" yan cümlesidir. Bu sıfat-fiil (-dığı) ekiyle oluşturulmuş nesne yan cümlesidir.'
      },
      {
        id: 'q-ct-2-25',
        difficulty: 'hard',
        questionText: '"Gitmeseydi ne olurdu?" cümlesinin yapı türü ve anlamı için doğru açıklama hangisidir?',
        options: [
          { id: 'A', text: 'Basit soru cümlesi' },
          { id: 'B', text: 'Şart birleşik cümlesi + soru; varsayıma dayalı pişmanlık/merak' },
          { id: 'C', text: 'Bağlı cümle' },
          { id: 'D', text: 'Sıralı cümle + soru' },
          { id: 'E', text: 'Sadece olumsuz soru cümlesi' }
        ],
        correctOptionId: 'B',
        explanation: '"Gitmeseydi ne olurdu?" cümlesinde "-seydi" geçmişe yönelik dilek-şart eki, "ne olurdu?" soru yapısı bulunmaktadır. Şart birleşik cümlesi ve soru bir aradaydı; gerçekleşmemiş bir koşula yönelik merak ya da pişmanlık ifade eder.'
      },
      {
        id: 'q-ct-2-26',
        difficulty: 'hard',
        questionText: '"Söylediğin her şey doğruysa, çok ciddi bir sorunla karşı karşıyayız." cümlesinde yapı türü nedir?',
        options: [
          { id: 'A', text: 'Sıralı cümle' },
          { id: 'B', text: 'Bağlı cümle' },
          { id: 'C', text: 'Şart birleşik cümlesi (içinde girişik yan cümle barındıran)' },
          { id: 'D', text: 'Basit cümle' },
          { id: 'E', text: 'Ki\'li birleşik cümle' }
        ],
        correctOptionId: 'C',
        explanation: '"Söylediğin her şey doğruysa" şart yan cümlesidir. Ayrıca "söylediğin" ifadesi de bir yan cümle içermektedir. Temel cümle "çok ciddi bir sorunla karşı karşıyayız"dır. İç içe geçmiş yan cümleler içeren şart birleşik cümlesidir.'
      },
      {
        id: 'q-ct-2-27',
        difficulty: 'hard',
        questionText: 'Anlamsal açıdan "olumlu biçimde kurulmuş olumsuz soru cümlesi" ile "olumsuz biçimde kurulmuş olumlu anlam veren soru cümlesi" arasındaki fark nedir?',
        options: [
          { id: 'A', text: 'Hiçbir fark yoktur.' },
          { id: 'B', text: 'Biçim ve anlam arasındaki uyumsuzluğu gösterir; Türkçede sıkça kullanılır.' },
          { id: 'C', text: 'Yalnızca yazı dilinde görülür.' },
          { id: 'D', text: 'Bu tür cümleler dilbilgisel açıdan yanlıştır.' },
          { id: 'E', text: 'Yalnızca edebi metinlerde yer alır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Türkçede "Gelmez misin?" (olumsuz biçim → "gel" anlamı) ve "Gelir misin?" (olumlu biçim → gerçek soru) gibi örnekler biçim-anlam uyumsuzluğunu gösterir. Bu söylem stratejisi kibarlık, pişmanlık veya vurgu amacıyla yaygın kullanılır.'
      },
      {
        id: 'q-ct-2-28',
        difficulty: 'hard',
        questionText: '"Yarın gidecek olmasa keşke." cümlesi hangi anlam türünü ve yapıyı içermektedir?',
        options: [
          { id: 'A', text: 'Dilek-şart; basit cümle' },
          { id: 'B', text: 'Olumsuzluk + dilek; birleşik cümle' },
          { id: 'C', text: 'Şart; soru cümlesi' },
          { id: 'D', text: 'Emir; basit cümle' },
          { id: 'E', text: 'Olumlu; basit cümle' }
        ],
        correctOptionId: 'B',
        explanation: '"Yarın gidecek olmasa keşke." cümlesinde "-sa" dilek-şart eki ve "olmasa" olumsuzluk içermektedir. "Keşke" ise dilek/istek pekiştiricisidir. Olumsuzluk ve dilek anlamı bir aradaydı; birleşik yapıda değerlendirilebilir.'
      },
      {
        id: 'q-ct-2-29',
        difficulty: 'hard',
        questionText: '"Toplantıya katılmak isteyenler yarın buraya gelsin." cümlesinde "katılmak isteyenler" yan cümlesi hangi görevdedir?',
        options: [
          { id: 'A', text: 'Nesne' },
          { id: 'B', text: 'Yüklem' },
          { id: 'C', text: 'Özne' },
          { id: 'D', text: 'Dolaylı tümleç' },
          { id: 'E', text: 'Zarf tümleci' }
        ],
        correctOptionId: 'C',
        explanation: '"Toplantıya katılmak isteyenler yarın buraya gelsin." cümlesinde "gelsin" yükleminin öznesi "toplantıya katılmak isteyenler" yan cümlesidir. Sıfat-fiil (-en ekiyle "isteyenler") ile oluşturulmuş bu yan cümle özne görevindedir.'
      },
      {
        id: 'q-ct-2-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerden hangisinde sözcük düzeni değiştirildiğinde anlam değişir?',
        options: [
          { id: 'A', text: '"Ali kitabı okudu." → "Kitabı Ali okudu."' },
          { id: 'B', text: '"Güzel bir gün." → "Bir güzel gün."' },
          { id: 'C', text: '"Hızlı koştu." → "Koştu hızlı."' },
          { id: 'D', text: '"Yalnız ben geldim." → "Ben yalnız geldim."' },
          { id: 'E', text: '"Eve gitti." → "Gitti eve."' }
        ],
        correctOptionId: 'D',
        explanation: '"Yalnız ben geldim." = Başka kimse gelmedi, sadece ben geldim. "Ben yalnız geldim." = Kimsesiz, tek başıma geldim. Sözcük sırası değişince "yalnız" sözcüğünün vurgu ve anlamı değişmektedir.'
      }
    ]
  }
]
