export default [
  {
    id: 'test-zamirler-1-kolay',
    title: 'Zamirler 1 (Kolay)',
    description: 'Sözcük Türleri Zamirler - Kolay Seviye (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-zm-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kişi (şahıs) zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün çok yorgun görünüyorsun.' },
          { id: 'B', text: 'Kitabını masanın üzerinde unutmuş.' },
          { id: 'C', text: 'Seninle bu konuyu yarın konuşalım.' },
          { id: 'D', text: 'Okula gitmek için erkenden kalktı.' },
          { id: 'E', text: 'Güzel bir pazar günü geçirdik.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Seninle" sözcüğündeki "sen" kişi (şahıs) zamiridir.'
      },
      {
        id: 'q-zm-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde işaret zamiri yoktur?',
        options: [
          { id: 'A', text: 'Bunu hemen çöpe atmalısın.' },
          { id: 'B', text: 'Şunu da yanına alırsan iyi olur.' },
          { id: 'C', text: 'Oraya gitmeyi hiç istemiyorum.' },
          { id: 'D', text: 'Onlar yarın bize gelecekmiş.' },
          { id: 'E', text: 'Bu çocuk çok akıllı biri.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Bu" sözcüğü ismin önüne gelerek sıfat görevinde (işaret sıfatı) kullanılmıştır. Diğer seçeneklerdeki bunu, şunu, oraya, onlar sözcükleri (onlar burada insan dışı varlık kastediliyorsa işaret zamiri olur, şahıs da olsa zamirdir) işaret zamirleridir. D\'de "onlar" şahıs zamiri de olabilir, ancak E\'de kesinlikle sıfattır.'
      },
      {
        id: 'q-zm-1-3',
        difficulty: 'easy',
        questionText: '"Kendi" sözcüğü aşağıdaki cümlelerin hangisinde dönüşlülük zamiri olarak kullanılmamıştır? (veya hepsinde zamir olup anlamı pekiştirmemiştir?) Soru: Aşağıdakilerin hangisinde "kendi" sözcüğü anlamı pekiştirme göreviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kendisi bu konuda çok bilgili.' },
          { id: 'B', text: 'Bu yemeği ben kendim yaptım.' },
          { id: 'C', text: 'Kendine iyi bakmayı öğrenmelisin.' },
          { id: 'D', text: 'Oğlum artık kendi başına giyiniyor.' },
          { id: 'E', text: 'Kendileri yarın teşrif edeceklermiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ben kendim" ifadesinde dönüşlülük zamiri olan "kendi", kişi zamiri olan "ben" ile birlikte kullanılarak anlamı pekiştirmiştir.'
      },
      {
        id: 'q-zm-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bazı insanlar sorunlara çok duyarsız.' },
          { id: 'B', text: 'Her öğrenci bu soruyu çözemez.' },
          { id: 'C', text: 'Hiçbir zaman yalan söylemeyi sevmem.' },
          { id: 'D', text: 'Biri kapıyı çalıp hızla uzaklaştı.' },
          { id: 'E', text: 'Çoğu zaman evde kalmayı tercih eder.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "biri" sözcüğü belgisiz zamirdir. Diğer seçeneklerdeki bazı, her, hiçbir, çoğu sözcükleri ismin önüne gelerek belgisiz sıfat oluşturmuştur.'
      },
      {
        id: 'q-zm-1-5',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru zamiri vardır?',
        options: [
          { id: 'A', text: 'Neden beni beklemeden gittin?' },
          { id: 'B', text: 'Nasıl bir ev hayal ediyorsun?' },
          { id: 'C', text: 'Bu güzel hediyeyi kim gönderdi?' },
          { id: 'D', text: 'Hangi arabayı almayı düşünüyorsunuz?' },
          { id: 'E', text: 'Buraya kadar yürüyerek mi geldiniz?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "kim" sözcüğü ismin yerini soru yoluyla tutan bir soru zamiridir. A\'da neden (zarf), B\'de nasıl (sıfat), D\'de hangi (sıfat), E\'de mi (edat) kullanılmıştır.'
      },
      {
        id: 'q-zm-1-6',
        difficulty: 'easy',
        questionText: '"O" sözcüğü aşağıdakilerin hangisinde kişi zamiri olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'O ağacı geçen yıl biz diktik.' },
          { id: 'B', text: 'O, masanın üzerinde duruyordu.' },
          { id: 'C', text: 'O, bugün derse katılmayacağını söyledi.' },
          { id: 'D', text: 'O günleri hatırladıkça hüzünleniyorum.' },
          { id: 'E', text: 'O kitabı bana da verir misin?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" sözcüğü bir insanın (kişinin) yerini tuttuğu için kişi zamiridir. B\'de eşya yerini tuttuğu için işaret zamiri, A, D ve E\'de ise ismin önüne geldiği için işaret sıfatıdır.'
      },
      {
        id: 'q-zm-1-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki aldığı için zamir olan bir sözcük yoktur? (İlgi zamirinden bahsediliyor: "-ki") Soru: Aşağıdakilerin hangisinde ilgi zamiri (-ki) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Evdeki hesap çarşıya uymadı.' },
          { id: 'B', text: 'Benim arabam bozuldu, seninkini kullanabilir miyiz?' },
          { id: 'C', text: 'Yarınki toplantı çok önemli.' },
          { id: 'D', text: 'Duvardaki saatin pili bitmiş.' },
          { id: 'E', text: 'Akşamki yemeğe kimler katılıyor?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "seninkini" sözcüğündeki "-ki", araba isminin yerini tuttuğu için ilgi zamiridir. Diğer seçeneklerdeki "-ki" ekleri sıfat yapan ki\'dir.'
      },
      {
        id: 'q-zm-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde birden fazla zamir vardır?',
        options: [
          { id: 'A', text: 'Onun bu söylediklerini anlamak çok zor.' },
          { id: 'B', text: 'Ben sana her zaman destek oldum.' },
          { id: 'C', text: 'Kimse bu olayın nedenini bilmiyor.' },
          { id: 'D', text: 'Bunları hemen yerine yerleştirmelisin.' },
          { id: 'E', text: 'Oraya gitmek için epey uğraştık.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Ben" ve "sana" (sen) olmak üzere iki adet kişi zamiri kullanılmıştır.'
      },
      {
        id: 'q-zm-1-9',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde zamir kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bizi burada yalnız bıraktılar.' },
          { id: 'B', text: 'Şuraya otursak daha iyi olacak.' },
          { id: 'C', text: 'Herkese benden çay!' },
          { id: 'D', text: 'Güzel günler göreceğiz çocuklar.' },
          { id: 'E', text: 'Neyin var, neden durgunsun?' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde ismin yerini tutan herhangi bir sözcük (zamir) yoktur.'
      },
      {
        id: 'q-zm-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi zamir değildir? (Altı çizili olan kelimeler büyük yazılmıştır)',
        options: [
          { id: 'A', text: 'BENİM yarın önemli bir sınavım var.' },
          { id: 'B', text: 'KİMSE bana yardım etmedi.' },
          { id: 'C', text: 'BU tabloyu çok beğendim.' },
          { id: 'D', text: 'ONLARI da listeye ekledim.' },
          { id: 'E', text: 'NEREYE gittiğini söylemedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "BU" sözcüğü ismin önüne gelerek onu işaret ettiği için işaret sıfatıdır. A, B, D ve E seçeneklerindeki sözcükler zamirdir.'
      }
    ]
  },
  {
    id: 'test-zamirler-1-orta',
    title: 'Zamirler 1 (Orta)',
    description: 'Sözcük Türleri Zamirler - Orta Seviye (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-zm-2-1',
        difficulty: 'medium',
        questionText: 'Zamirler de isimler gibi hal (durum) eklerini alabilirler. Aşağıdakilerin hangisinde bulunma hal eki almış bir zamir vardır?',
        options: [
          { id: 'A', text: 'Sende çok fazla kitap var.' },
          { id: 'B', text: 'Ondan hep güzel sözler duyardık.' },
          { id: 'C', text: 'Bana doğruyu söylemediğini biliyorum.' },
          { id: 'D', text: 'Onu dünkü toplantıda görmedim.' },
          { id: 'E', text: 'Şunu da çantana koyuver.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Sende" sözcüğü, kişi zamiri (sen) üzerine bulunma hal eki (-de) almış bir sözcüktür.'
      },
      {
        id: 'q-zm-2-2',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde hem işaret hem de kişi zamiri bir arada kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunları bana o söyledi.' },
          { id: 'B', text: 'Onu dün okulun bahçesinde gördüm.' },
          { id: 'C', text: 'Şundan birkaç tane de sen al.' },
          { id: 'D', text: 'Kendine yeni bir defter almış.' },
          { id: 'E', text: 'Bizimle gelmeyi kimse istemedi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Bunları" sözcüğü işaret zamiri, "bana" ve "o" sözcükleri ise kişi zamiridir. "O" sözcüğü bir insanı karşıladığı için kişi zamiridir.'
      },
      {
        id: 'q-zm-2-3',
        difficulty: 'medium',
        questionText: 'Zamirler isim tamlamalarında hem tamlayan hem de tamlanan olabilirler. Aşağıdakilerin hangisinde zamir, isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Öğrencilerin birkaçı geziye katılmadı.' },
          { id: 'B', text: 'Onun sözleri hepimizi derinden etkiledi.' },
          { id: 'C', text: 'Çocukların hangisi bu soruyu çözecek?' },
          { id: 'D', text: 'Soruların hepsi oldukça kolaydı.' },
          { id: 'E', text: 'Adamın kimsesi yokmuş gibi görünüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Onun sözleri" isim tamlamasında "Onun" (kişi zamiri) tamlayan görevindedir. A, C, D ve E seçeneklerinde zamirler tamlanan görevindedir (birkaçı, hangisi, hepsi, kimsesi).'
      },
      {
        id: 'q-zm-2-4',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde belgisiz zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Beni de beraber götürün gittiğiniz yere.' },
          { id: 'B', text: 'Bütün sokaklar bana çıkıyor bu şehirde.' },
          { id: 'C', text: 'Kimsesiz çocukların gözyaşlarıdır bu yağan.' },
          { id: 'D', text: 'Herkes kendi derdine düşmüş, kimin umurunda.' },
          { id: 'E', text: 'Hangi yola sapsam karşıma sen çıkıyorsun.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Herkes" sözcüğü belgisiz zamirdir. Aynı dizedeki "kimin" sözcüğü ise soru zamiridir.'
      },
      {
        id: 'q-zm-2-5',
        difficulty: 'medium',
        questionText: '"Ne" sözcüğü aşağıdakilerin hangisinde soru zamiri olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Ne ağlarsın benim zülfü siyahım?' },
          { id: 'B', text: 'Bana ne kadar para lazım olduğunu sordu.' },
          { id: 'C', text: 'Bugün pazardan ne aldın?' },
          { id: 'D', text: 'Ne güzel bir ev burası!' },
          { id: 'E', text: 'Senin ne gün geleceğini bilmiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "ne" sözcüğü ismin yerini tutarak soru sormuştur ve soru zamiridir. A\'da neden (zarf), B\'de miktar (sıfat/zarf yapısı), D\'de ne kadar (zarf), E\'de hangi (sıfat) anlamlarında kullanılmıştır.'
      },
      {
        id: 'q-zm-2-6',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik eki aldığı için belgisiz zamir olan bir sözcük kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kimi insanlar sıcak havayı sever.' },
          { id: 'B', text: 'Bazı günler hiç evden çıkmak istemem.' },
          { id: 'C', text: 'Çoğu zaman akşamları kitap okurum.' },
          { id: 'D', text: 'Çocukların birçoğu dışarıda oynuyordu.' },
          { id: 'E', text: 'Bütün işleri tek başına halletti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "birçoğu" sözcüğü iyelik eki (-u) almış ve ismin yerini belgisiz bir şekilde tutmuştur (belgisiz zamir). Diğer seçeneklerdeki kimi, bazı, çoğu, bütün sözcükleri sıfattır.'
      },
      {
        id: 'q-zm-2-7',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde cümlenin yerini tutan bir işaret zamiri kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu sana kimin söylediğini merak ediyorum.' },
          { id: 'B', text: 'Şuraya bir okul yapılması planlanıyormuş.' },
          { id: 'C', text: 'Çok çalışman gerekiyor, bunu sakın unutma.' },
          { id: 'D', text: 'Onlar da bizimle tatile gelecekmiş.' },
          { id: 'E', text: 'Bu araba eskisinden çok daha hızlı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "bunu" işaret zamiri, kendinden önceki "Çok çalışman gerekiyor" cümlesinin bütününün yerini tutmuştur.'
      },
      {
        id: 'q-zm-2-8',
        difficulty: 'medium',
        questionText: 'Bir zamir ek eylem (ek fiil) alarak yüklem olabilir. Aşağıdakilerin hangisinde zamir yüklem görevindedir?',
        options: [
          { id: 'A', text: 'Onun anlattıkları tamamen yalandı.' },
          { id: 'B', text: 'Beni arayan kişi sendin demek.' },
          { id: 'C', text: 'Bu işin altından ancak o kalkabilir.' },
          { id: 'D', text: 'Hepimiz yarınki sınava hazırız.' },
          { id: 'E', text: 'Burada hava her zaman sıcaktır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "sen" kişi zamiri, ek eylemin görülen geçmiş zaman ekini (-din) alarak cümlenin yüklemi (sendin) olmuştur.'
      },
      {
        id: 'q-zm-2-9',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" eki ilgi zamiri olarak kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Benim kitabım evde kaldı, seninkini alabilir miyim?' },
          { id: 'B', text: 'Onun notları yüksek, benimkiyse düşük.' },
          { id: 'C', text: 'Dünkü toplantı bitti, bugünkü daha uzun sürecek.' },
          { id: 'D', text: 'Evdeki hesap hiçbir zaman çarşıya uymaz.' },
          { id: 'E', text: 'Bizim okul sizinkinden daha uzak.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Evdeki" sözcüğündeki "-ki" eki yapım ekidir (sıfat yapan ki). A, B, C (bugünkü toplantı anlamında zamir), E seçeneklerindeki ki\'ler ise ismin yerini tutan ilgi zamirleridir. (C seçeneğinde bugünkü toplantı kastedilerek ismin yeri tutulmuştur: zamirleşmiş sıfat/ilgi zamiri kullanımı)'
      },
      {
        id: 'q-zm-2-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde hal eki alırken kökünde ünlü değişimi olan bir zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Beni aradığını çok geç fark ettim.' },
          { id: 'B', text: 'Sana bu konuyla ilgili bir şey söylemedim mi?' },
          { id: 'C', text: 'Onu bulmak için bütün şehri dolaştık.' },
          { id: 'D', text: 'Bize gelmek istersen adresim belli.' },
          { id: 'E', text: 'Sizi daha önce bir yerde gördüm sanki.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kişi zamirlerinden "ben" ve "sen" yönelme hal eki (-e, -a) aldıklarında köklerinde ünlü değişimi olur (bana, sana). B seçeneğindeki "Sana" (sen-e) bu kurala örnektir.'
      }
    ]
  },
  {
    id: 'test-zamirler-1-zor',
    title: 'Zamirler 1 (Zor)',
    description: 'Sözcük Türleri Zamirler - Zor Seviye (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-zm-3-1',
        difficulty: 'hard',
        questionText: 'I. Kimi insanlar çok sabırsızdır.\nII. Kimi de saatlerce bıkmadan bekler.\nIII. Bu eşyaların kimi sana ait, kimi bana.\nIV. Kimi zaman yalnız kalmak iyi gelir.\n\nYukarıdaki numaralanmış cümlelerde geçen "kimi" sözcüklerinin türleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'Zamir - Zamir - Sıfat - Sıfat' },
          { id: 'B', text: 'Sıfat - Zamir - Zamir - Sıfat' },
          { id: 'C', text: 'Sıfat - Sıfat - Zamir - Zamir' },
          { id: 'D', text: 'Zamir - Sıfat - Sıfat - Zamir' },
          { id: 'E', text: 'Sıfat - Zamir - Sıfat - Zamir' }
        ],
        correctOptionId: 'B',
        explanation: 'I. Kimi insanlar (Belgisiz sıfat)\nII. Kimi de bekler (Belgisiz zamir)\nIII. eşyaların kimi (Belgisiz zamir)\nIV. Kimi zaman (Belgisiz sıfat)'
      },
      {
        id: 'q-zm-3-2',
        difficulty: 'hard',
        questionText: '"O" sözcüğü hem kişi zamiri, hem işaret zamiri hem de işaret sıfatı olarak kullanılabilir.\nBuna göre aşağıdakilerin hangisinde "o" sözcüğünün türü diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'O, bizimle sinemaya gelmeyeceğini söyledi.' },
          { id: 'B', text: 'Dün aldığın kalemi ne yaptın, o da mı kayboldu?' },
          { id: 'C', text: 'Onu hemen çekmecenin içine koy, kimse görmesin.' },
          { id: 'D', text: 'Oraya ulaşmak için çok dik bir yokuş çıkmalısın.' },
          { id: 'E', text: 'O, dün akşamki fırtınada kökünden sökülmüş.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "O" sözcüğü bir insanı (kişiyi) kastettiği için kişi zamiridir. B, C, D ve E seçeneklerinde insan dışındaki varlıkların yerini tuttuğu için işaret zamiridir. (D\'de oraya, yer bildiren işaret zamiridir).'
      },
      {
        id: 'q-zm-3-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı bir zamirle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Hangi evde oturuyorsunuz?' },
          { id: 'B', text: 'Ne zaman döneceksin bu uzun yolculuktan?' },
          { id: 'C', text: 'Bu paketleri nereye bırakmamı istersiniz?' },
          { id: 'D', text: 'Beni neden daha önce aramadın?' },
          { id: 'E', text: 'Toplantı beklediğimizden uzun mu sürecek?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde soru anlamını sağlayan "nereye" sözcüğü ismin yerini tutan bir soru zamiridir. A\'da hangi (sıfat), B\'de ne zaman (zarf), D\'de neden (zarf), E\'de mu (edat) ile soru anlamı sağlanmıştır.'
      },
      {
        id: 'q-zm-3-4',
        difficulty: 'hard',
        questionText: 'İyelik ekleri, eklendiği ismin kime veya neye ait olduğunu bildiren eklerdir. Aynı zamanda bunlara iyelik zamiri de denir.\nAşağıdaki altı çizili sözcüklerin hangisinde iyelik zamiri yoktur? (Altı çizili harfler büyük harfle gösterilmiştir)',
        options: [
          { id: 'A', text: 'Senin GÖZLERİN bu ara iyi görmüyor galiba.' },
          { id: 'B', text: 'KalemİM masanın üstünde kalmış.' },
          { id: 'C', text: 'Onların EVİ buradan oldukça uzak.' },
          { id: 'D', text: 'Bu yemeği sadece BİZİM yediğimizi zannetme.' },
          { id: 'E', text: 'ArabasıNIN lastiği patlamış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "BİZİM" sözcüğü kişi zamiridir ve ilgi eki (-im) almıştır. Burada isme eklenip aitlik bildiren bir iyelik eki (iyelik zamiri) yoktur. Diğerlerinde: gözler-in, kalem-im, ev-i, araba-sı.'
      },
      {
        id: 'q-zm-3-5',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamirden türemiş bir sözcük sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sensiz geçen günlerin anlamı yok.' },
          { id: 'B', text: 'Bencil insanlarla arkadaşlık kurmak zordur.' },
          { id: 'C', text: 'Kimsesiz çocuklara yardım etmeliyiz.' },
          { id: 'D', text: 'Benimki de seninki kadar güzel olmuş.' },
          { id: 'E', text: 'Oluşan benliği kırmak oldukça zordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "ben" (zamir) kökünden türeyen "bencil" sözcüğü (bencil insan) sıfat görevinde kullanılmıştır. C seçeneğinde kimse-siz (kimsesiz çocuk) de benzerdir, ancak asıl ve en yaygın örnek bencil sözcüğüdür. Soruda en tipik olanı seçilir: ben -> bencil.'
      },
      {
        id: 'q-zm-3-6',
        difficulty: 'hard',
        questionText: 'Zamirler yapılarına göre basit, türemiş ve birleşik olabilir. Buna göre aşağıdakilerin hangisinde yapıca farklı bir zamir kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hiçbiri bu konuda bir şey söylemedi.' },
          { id: 'B', text: 'Herkes kendi işiyle meşgul.' },
          { id: 'C', text: 'Kimse bu zorluğu göze alamaz.' },
          { id: 'D', text: 'Birçoğu sınava girmekten vazgeçti.' },
          { id: 'E', text: 'Birkaçı dışarıda yağmuru izliyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "kimse" basit yapılı (kök halinde veya çekim ekli) bir zamirdir. Diğerleri birleşiktir: Hiç-biri, Her-kes, Bir-çoğu, Bir-kaçı.'
      },
      {
        id: 'q-zm-3-7',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde dönüşlülük zamiri, belirtili isim tamlamasının tamlayanı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bunu kendisi de çok iyi biliyor.' },
          { id: 'B', text: 'Kendinin iyiliği için bunu yapmalısın.' },
          { id: 'C', text: 'Kendi evimizde yabancı gibi hissediyoruz.' },
          { id: 'D', text: 'Adamın kendisi gelip bana teşekkür etti.' },
          { id: 'E', text: 'Bu kararı o kendisi verdi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kendinin iyiliği" isim tamlamasında dönüşlülük zamiri olan "kendi", tamlayan eki (-nin) alarak tamlayan görevinde kullanılmıştır.'
      },
      {
        id: 'q-zm-3-8',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde zamir kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Bütün bu olayların sorumlusu biziz.' },
          { id: 'B', text: 'İçerideki kalabalık birden dalgalandı.' },
          { id: 'C', text: 'Şunu da okuyup bitireyim, çıkarız.' },
          { id: 'D', text: 'Neyin peşinde olduğunu anladım.' },
          { id: 'E', text: 'Herkes aynı fikirde olmak zorunda değil.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde herhangi bir zamir yoktur. (İçerideki - sıfat yapan ki almıştır, zamir değildir). A\'da biziz, C\'de şunu, D\'de neyin, E\'de herkes zamirdir.'
      },
      {
        id: 'q-zm-3-9',
        difficulty: 'hard',
        questionText: 'Kişi zamirleri tamlayan eki aldıklarında tamlanan eki düşebilir. Aşağıdaki cümlelerin hangisinde bu duruma örnek vardır?',
        options: [
          { id: 'A', text: 'Benim kitabım nerede?' },
          { id: 'B', text: 'Bizim okul sizinkinden daha uzak.' },
          { id: 'C', text: 'Bu araba bizim, diye övünüyordu.' },
          { id: 'D', text: 'Onun düşünceleri bizimkilerle uyuşmuyor.' },
          { id: 'E', text: 'Senin sözlerin bana umut verdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bizim" sözcüğünün aslı "bizim arabamız" şeklindedir. Tamlanan (arabamız) düşmüş, sadece tamlayan (bizim) kalmıştır.'
      },
      {
        id: 'q-zm-3-10',
        difficulty: 'hard',
        questionText: 'Aşağıdakilerin hangisinde ilgi zamiri ile türetme eki (sıfat yapan ki) birbirine karıştırılmıştır?',
        options: [
          { id: 'A', text: 'Akşamki maçı kim kazandı?' },
          { id: 'B', text: 'Benim kalemim yok, seninkini kullanabilir miyim?' },
          { id: 'C', text: 'Duvardakini biraz sağa kaydır.' },
          { id: 'D', text: 'Onunki bugün çok güzel olmuş.' },
          { id: 'E', text: 'Dünkü olayda sen de var mıydın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "duvardakini" sözcüğündeki -ki aslında "duvardaki tabloyu/resmi" anlamındadır, yani sıfat yapan ki iken isim düşünce adlaşmış sıfat olmuştur. İlgi zamiri olan -ki ise ismin yerini doğrudan tutar ve tamlayan ekinin üzerine gelir (sen-in-ki, onun-ki gibi).'
      }
    ]
  }
];
