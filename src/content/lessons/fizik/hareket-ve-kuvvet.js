const hareketVeKuvvet = {
  slug: 'hareket-ve-kuvvet',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Hareket ve Kuvvet' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '6. Konu',
  title: 'Hareket ve Kuvvet',
  subtitle: 'Konumu referansla tanımla, hareketi grafikle oku ve kuvvetlerin hızı neden değiştirdiğini Newton yasalarıyla açıkla.',
  document: {
    version: 2,
    estimated_minutes: 88,
    prerequisites: [
      { topic: 'Fizik Bilimine Giriş', why: 'Skaler–vektörel ayrımı, birimler ve grafik okuma hareket dilinin temelidir.' },
      { topic: 'Madde ve Özellikleri', why: 'Kütleyi madde miktarı ve eylemsizliğin ölçüsü olarak kullanacağız.' },
      { topic: 'Oran ve doğrusal ilişki', why: 'Hız, ivme ve net kuvvet bağıntıları oran ve grafik eğimiyle yorumlanır.' },
    ],
    outcomes: [
      'Referans noktası, konum, alınan yol ve yer değiştirme kavramlarını ayırabileceksin.',
      'Ortalama sürat ile ortalama hızı doğru toplam ve işaretlerle hesaplayabileceksin.',
      'Konum–zaman, hız–zaman ve ivme–zaman grafiklerini birbirine dönüştürebileceksin.',
      'Net kuvvet, kütle ve ivme arasındaki ilişkiyi deneysel olarak yorumlayabileceksin.',
      'Newton’ın üç yasasını serbest cisim diyagramı ve etkileşim çiftleriyle uygulayabileceksin.',
      'Statik ve kinetik sürtünmeyi normal kuvvet, hareket eğilimi ve enerji kaybıyla açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'hareket-referans', kind: 'opening', title: 'Hareket kime göre?',
        lead: 'Trende oturan yolcu yan koltuğa göre durgun, istasyona göre hareketlidir. Hareket cisme tek başına ait bir etiket değil, seçilen referansa göre konum değişimidir.',
        blocks: [
          {
            id: 'hareket-opening-prose', type: 'prose',
            body: `Bir cismin nerede olduğunu söylemek için önce bir **referans noktası**, pozitif yön ve koordinat ekseni seçilir. Tek boyutta cismin konumu $x$ ile gösterilir. Konumun zamanla değişmesi harekettir; bu tanım referansa bağlıdır.

**Alınan yol**, cismin izlediği yörüngenin toplam uzunluğudur; negatif olamaz ve skalerdir. **Yer değiştirme** son konum ile ilk konum farkıdır: $\Delta x=x_{son}-x_{ilk}$. Yönlü olduğu için pozitif, negatif veya sıfır olabilir. Evden çıkıp 300 m doğuya, sonra 300 m batıya dönen kişi 600 m yol alır; yer değiştirmesi sıfırdır.

**Ortalama sürat** toplam yolun toplam zamana oranıdır. **Ortalama hız** yer değiştirmenin toplam zamana oranıdır. Gidiş–dönüş sonunda başlangıç noktasına gelinirse ortalama hız sıfır olabilir; fakat yol alındığı için ortalama sürat sıfır değildir.

Anlık hız, konum–zaman grafiğinin ilgili andaki eğimidir. Hızın işareti hareket yönünü, büyüklüğü sürati gösterir. Pozitif yönde hareket eden cisim yavaşlıyorsa hız pozitif, ivme negatif olabilir. “Yavaşlama” her zaman negatif ivme demek değildir; hız ve ivmenin zıt işaretli olması demektir.`,
          },
          {
            id: 'hareket-why', type: 'why',
            question: 'Neden sabit hızla giden otomobilin motoru çalıştığı hâlde ivmesi sıfır olabilir?',
            body: 'Motorun tekerlekler aracılığıyla oluşturduğu ileri itme kuvveti, hava direnci ve yuvarlanma direnci gibi geri yönlü kuvvetleri dengelerse net kuvvet sıfır olur. Newton’ın ikinci yasasına göre net kuvvet sıfırsa ivme de sıfırdır; otomobil mevcut hızını korur. Motor burada hızı “var etmek” için değil, dirençlerin hızı azaltmasını engellemek için enerji aktarır.',
          },
          {
            id: 'motion-map', type: 'concept_map', title: 'Hareketin üç dili',
            intro: 'Aynı olay sözle, vektörle ve grafikle anlatılabilir.',
            nodes: [
              { id: 'konum', label: 'Konum x', detail: 'Referansa göre yer' },
              { id: 'dx', label: 'Yer değiştirme Δx', detail: 'Son eksi ilk konum' },
              { id: 'hiz', label: 'Hız v', detail: 'Konumun değişim oranı' },
              { id: 'ivme', label: 'İvme a', detail: 'Hızın değişim oranı' },
              { id: 'kuvvet', label: 'Net kuvvet', detail: 'İvmeyi belirleyen etkileşim toplamı' },
              { id: 'grafik', label: 'Grafikler', detail: 'Eğim ve alan ilişkileri' },
            ],
            links: [
              { from: 'konum', to: 'dx', label: 'farkı' },
              { from: 'dx', to: 'hiz', label: 'zamana oranı' },
              { from: 'hiz', to: 'ivme', label: 'değişim oranı' },
              { from: 'kuvvet', to: 'ivme', label: 'oluşturur' },
              { from: 'grafik', to: 'hiz', label: 'eğim/alan' },
            ],
            caption: 'Hareket grafiği bir resim değil, fiziksel büyüklüklerin zamanla ilişkisidir.',
          },
          {
            id: 'speed-formula', type: 'formula', title: 'Ortalama hız ve ortalama sürat',
            latex: '\vec v_{ort}=\frac{\Delta \vec x}{\Delta t}\qquad v_{sürat}=\frac{toplam\ yol}{toplam\ zaman}',
            meaning: 'Ortalama hız yer değiştirmenin yönünü korur; ortalama sürat izlenen toplam uzunluğu kullanır.',
            variables: [
              { sym: 'Δx', desc: 'Yer değiştirme; m' },
              { sym: 'Δt', desc: 'Geçen toplam zaman; s' },
              { sym: 'v', desc: 'Hız veya sürat; m/s' },
            ],
          },
          {
            id: 'motion-opening-trap', type: 'trap', title: 'Yol ile yer değiştirmeyi eşitleme',
            wrong: '“Cisim 8 m sağa, 3 m sola gitti; yer değiştirmesi 11 m’dir.”',
            right: 'Toplam yol 11 m, yer değiştirme +5 m’dir.',
            body: 'Yol parçalarının uzunlukları toplanır; yer değiştirme için yönlü konum farkı alınır.',
          },
        ],
      },
      {
        id: 'hareket-atlas-section', kind: 'build', title: 'Hareketten kuvvete bilimsel atlas',
        lead: 'Eşit zaman fotoğrafları, grafikler, serbest cisim diyagramı ve etki–tepki çiftleri aynı fiziğin farklı görünümleridir.',
        blocks: [
          {
            id: 'hareket-kuvvet-atlas', type: 'figure', width: 'full', complexity: 'high',
            title: 'Hareket ve kuvvetin dört okuma katmanı',
            purpose: 'Eşit zaman aralıklı hareket, grafikler, serbest cisim diyagramı ve Newton’ın üçüncü yasasını tek levhada birleştirmek.',
            kind: 'fizik-hareket-kuvvet-atlas',
            caption: 'Eşit zaman aralıklarında eşit yer değiştirme sabit hızı, giderek artan aralıklar hızlanmayı gösterir. Hızı değiştiren etki net kuvvettir.',
            focus: [
              { title: 'Eşit zaman fotoğrafları', body: 'Konum aralıklarını karşılaştırarak hızın sabit mi değişen mi olduğunu belirle.' },
              { title: 'Grafik ailesi', body: 'Konum grafiğinin eğimini hıza, hız grafiğinin eğimini ivmeye bağla.' },
              { title: 'Serbest cisim diyagramı', body: 'Yalnız seçilen cisme etki eden kuvvetleri ortak bir noktadan çiz.' },
              { title: 'Etki–tepki çifti', body: 'Eşit ve zıt kuvvetlerin farklı cisimler üzerinde olduğunu gör.' },
            ],
          },
          {
            id: 'motion-force-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Net kuvvet, kütle ve grafik laboratuvarı',
            caption: 'Net kuvvetin yönü ivmenin yönünü belirler. Aynı net kuvvette kütle arttıkça ivme azalır; sabit ivmede x–t parabolik, v–t doğrusal, a–t yataydır.',
            purpose: 'Karşıt kuvvetleri, kütleyi ve zamanı değiştirerek cisim hareketiyle üç temel grafiği gerçek zamanlı eşleştirmek.',
            data: { mode: 'motion-force', title: 'Kuvveti değiştir, hareket ve grafiği birlikte oku', initialRightForce: 30, initialLeftForce: 10, initialMass: 5, initialTime: 4 },
          },
          {
            id: 'motion-atlas-reading', type: 'prose',
            body: `Atlası bir deney kaydının dört temsil biçimi olarak oku. Eşit zaman fotoğrafı cismin belirli anlarda nerede bulunduğunu gösterir. Ardışık noktalar eşit aralıklıysa hız sabit, aralıklar düzenli büyüyorsa seçilen yönde ivme vardır. Fakat tek bir fotoğraf dizisi kuvvetin türünü söylemez; yalnız hareketin nasıl değiştiğine ilişkin kanıt verir.

Grafik odağı aynı kaydı sayısallaştırır. Konum–zaman eğimi hızı, hız–zaman eğimi ivmeyi verir. Hız grafiğinin işaretli alanı yer değiştirmedir. Bir grafiğin yukarı gitmesi her zaman cismin hızlandığı anlamına gelmez; önce eksenleri, eğimi ve işareti ayrı oku. Zaman ekseninin altındaki hız negatif yönü gösterir, süratin negatif olması demek değildir.

Serbest cisim diyagramı hareketin nedenine geçer. İncelenen cismi çevresinden ayır, yalnız o cisme etki eden ağırlık, normal, sürtünme, gerilme ve uygulanan kuvvetleri çiz. Bu okların vektörel toplamı ivmeyi belirler. Etki–tepki odağı ise benzer görünen başka bir ayrımı korur: eşit ve zıt üçüncü yasa kuvvetleri farklı cisimlere etki eder, bu yüzden aynı serbest cisim diyagramında birbirini götürmez. Fotoğraf “ne oldu?”, grafik “nasıl değişti?”, kuvvet diyagramı “neden değişti?” sorularını yanıtlar.`,
          },
        ],
      },
      {
        id: 'hareket-grafikleri', kind: 'build', title: 'Düzgün ve ivmeli hareket grafikleri',
        lead: 'Grafiğin biçimi hareketin yörüngesi değil; eksenlerdeki büyüklüklerin matematiksel ilişkisidir.',
        blocks: [
          {
            id: 'graphs-prose', type: 'prose',
            body: `**Konum–zaman grafiğinin eğimi hızdır.** Yatay doğru konumun değişmediğini, yani cismin durduğunu gösterir. Pozitif eğim pozitif hız, negatif eğim negatif hız demektir. Eğimin büyüklüğü arttıkça sürat artar. Eğri grafikte anlık hız, o noktaya çizilen teğetin eğimidir.

**Hız–zaman grafiğinin eğimi ivme, zaman ekseniyle arasındaki işaretli alan yer değiştirmedir.** Grafik zaman ekseninin altındaysa hız negatiftir ve alan yer değiştirmeye negatif katkı yapar. Toplam yol istenirse alanların mutlak büyüklükleri toplanır. Hızın sıfırı kesmesi cismin bir an durup yön değiştirebileceğini gösterir.

**İvme–zaman grafiğinin alanı hız değişimidir.** İvme sıfırsa hız sabittir; cismin durması gerekmez. Sabit pozitif ivmede hız–zaman grafiği pozitif eğimli doğru, konum–zaman grafiği parabol olur. İvmenin işareti tek başına hızlanma–yavaşlama söylemez: hız ve ivme aynı işaretliyse sürat artar, zıt işaretliyse azalır.

Sabit ivmeli harekette $v=v_0+at$ ve $\Delta x=v_0t+\tfrac12at^2$ bağıntıları kullanılabilir. Ancak grafik verildiğinde formül ezberine geçmeden eğim ve alanı okumak daha güvenlidir. Birimler kontrol aracıdır: x–t eğimi m/s, v–t eğimi m/s², v–t alanı m birimi verir.`,
          },
          {
            id: 'acceleration-formula', type: 'formula', title: 'Ortalama ivme',
            latex: '\vec a_{ort}=\frac{\Delta \vec v}{\Delta t}',
            meaning: 'İvme hız vektörünün zamana göre değişimidir; hızın büyüklüğü, yönü veya ikisi birden değişebilir.',
            variables: [
              { sym: 'a', desc: 'İvme; m/s²' },
              { sym: 'Δv', desc: 'Son hız eksi ilk hız; m/s' },
              { sym: 'Δt', desc: 'Zaman aralığı; s' },
            ],
          },
          {
            id: 'graph-table', type: 'table', title: 'Grafiklerde eğim ve alan',
            columns: ['Grafik', 'Eğim', 'Alan', 'Yatay doğru'],
            rows: [
              ['x–t', 'Hız', 'Standart bir fiziksel anlam aranmaz', 'Cisim durgun'],
              ['v–t', 'İvme', 'Yer değiştirme', 'Sabit hız'],
              ['a–t', 'Bu düzeyde temel yorum değil', 'Hız değişimi', 'Sabit ivme'],
            ],
            caption: 'Eksenin altındaki alan işaretli büyüklüğe negatif katkı yapar.',
          },
          {
            id: 'graph-worked', type: 'worked_example', title: 'Hız–zaman alanından yol ve yer değiştirme',
            prompt: 'Cismin hızı 0–4 s arası +6 m/s, 4–6 s arası −3 m/s’dir. Yer değiştirme ve toplam yol nedir?',
            steps: [
              { title: 'Pozitif alan', body: '$\Delta x_1=6\times4=+24\,m$.' },
              { title: 'Negatif alan', body: '$\Delta x_2=(-3)\times2=-6\,m$.' },
              { title: 'Yer değiştirme', body: '$\Delta x=24-6=18\,m$.' },
              { title: 'Toplam yol', body: '$yol=|24|+|-6|=30\,m$.' },
            ],
            answer: 'Yer değiştirme +18 m, toplam yol 30 m’dir.',
            takeaway: 'Yer değiştirmede işaretli alan, yolda mutlak alan kullanılır.',
          },
          {
            id: 'graph-trap', type: 'trap', title: 'x–t grafiğini yol resmi sanmak',
            wrong: '“Grafik yukarı kıvrıldığı için cisim yokuş yukarı gidiyor.”',
            right: 'Grafiğin düşey ekseni konumdur; kıvrım yörüngeyi değil hızın değiştiğini gösterir.',
            body: 'Fiziksel yolun geometrisini ancak problem ayrıca verirse bilirsin.',
          },
        ],
      },
      {
        id: 'newton-yasalari', kind: 'deepen', title: 'Newton yasaları ve serbest cisim diyagramı',
        lead: 'Kuvvet hareketin değil, hareket durumundaki değişimin nedenidir. Sabit hız için net kuvvet gerekmez; hızı değiştirmek için gerekir.',
        blocks: [
          {
            id: 'newton-prose', type: 'prose',
            body: `**Birinci yasa (eylemsizlik):** Bir cisme etki eden net kuvvet sıfırsa cisim duruyorsa durur, hareket ediyorsa sabit hızla doğrusal hareketini sürdürür. Bu yasa “kuvvet yoksa cisim durur” demez. Günlük deneyimde hareketli cisimlerin durmasının nedeni genellikle sürtünme ve hava direncidir.

**İkinci yasa:** Bir cismin ivmesi net kuvvetle aynı yönde, net kuvvetle doğru ve kütleyle ters orantılıdır: $\sum\vec F=m\vec a$. Denklem tek bir kuvveti değil, seçilen cisme etki eden tüm kuvvetlerin vektörel toplamını kullanır. Aynı net kuvvette kütlesi büyük cismin ivmesi daha küçüktür; kütle eylemsizliğin ölçüsüdür.

**Üçüncü yasa:** A cismi B’ye kuvvet uyguluyorsa B de A’ya aynı büyüklükte, zıt yönde ve aynı türde kuvvet uygular. Bu kuvvetler farklı cisimlere etki ettiği için birbirini yok etmez. Elin duvara kuvvet uygular; duvar da eline eşit ve zıt kuvvet uygular. Yürürken ayağın zemini geriye iter, zemin ayağını ileri iter.

Serbest cisim diyagramı için önce incelenecek cismi sistem olarak seç. Cismi bir nokta veya sade kutu olarak çiz; yalnız **o cisme etki eden** dış kuvvetleri oklarla göster. Ağırlık $mg$ Dünya’nın cisme, normal kuvvet yüzeyin cisme, gerilme ipin cisme, sürtünme temas yüzeyinin cisme etkisidir. Sonra eksenleri seçip her yönde $\sum F=ma$ yaz.`,
          },
          {
            id: 'newton-formula', type: 'formula', title: 'Newton’ın ikinci yasası',
            latex: '\sum \vec F = m\vec a',
            meaning: 'Net kuvvet cismin ivmesini belirler. Eşitliğin iki tarafı da vektöreldir; bileşenler ayrı eksenlerde yazılabilir.',
            variables: [
              { sym: 'ΣF', desc: 'Cisme etki eden dış kuvvetlerin vektörel toplamı; N' },
              { sym: 'm', desc: 'Eylemsizlik kütlesi; kg' },
              { sym: 'a', desc: 'İvme; m/s²' },
            ],
          },
          {
            id: 'newton-compare', type: 'compare', title: 'Dengelenmiş ve dengelenmemiş kuvvetler',
            columns: ['Net kuvvet sıfır', 'Net kuvvet sıfırdan farklı'],
            rows: [
              { label: 'İvme', values: ['a=0', 'Net kuvvet yönünde a≠0'] },
              { label: 'Hareket', values: ['Durgun veya sabit hızlı olabilir', 'Hızın büyüklüğü/yönü değişir'] },
              { label: 'Örnek', values: ['Düz yolda sabit hızlı araç', 'Frenleyen, hızlanan veya dönen araç'] },
            ],
            insight: 'Denge hareket yokluğu değil, ivme yokluğudur.',
          },
          {
            id: 'newton-worked', type: 'worked_example', title: 'Karşıt kuvvetlerde ivme',
            prompt: '5 kg cisme sağa 32 N, sola 12 N kuvvet etki ediyor. İvme nedir?',
            steps: [
              { title: 'Pozitif yönü seç', body: 'Sağı pozitif al.' },
              { title: 'Net kuvveti bul', body: '$F_{net}=32-12=20\,N$ sağa.' },
              { title: 'İkinci yasayı uygula', body: '$a=F_{net}/m=20/5=4\,m/s^2$ sağa.' },
            ],
            answer: 'Cismin ivmesi sağa 4 m/s²’dir.',
            takeaway: 'Kuvvetleri toplarken büyüklükleri değil yönlü bileşenleri kullan.',
          },
          {
            id: 'third-law-trap', type: 'trap', title: 'Etki–tepkiyi denge kuvveti sanmak',
            wrong: '“Masanın kitaba normali ile kitabın ağırlığı etki–tepki çiftidir.”',
            right: 'Normal ve ağırlık aynı kitaba etki eder ve dengelenebilir. Normalin tepkisi kitabın masaya uyguladığı, ağırlığın tepkisi kitabın Dünya’ya uyguladığı kuvvettir.',
            body: 'Etki–tepki çiftleri farklı cisimler üzerindedir; serbest cisim diyagramında aynı diyagrama birlikte girmez.',
          },
        ],
      },
      {
        id: 'surtunme', kind: 'deepen', title: 'Sürtünme, normal kuvvet ve hareket eğilimi',
        lead: 'Sürtünme her zaman hareketin tersine değil, temas yüzeyleri arasındaki göreli kayma veya kayma eğiliminin tersine yönelir.',
        blocks: [
          {
            id: 'friction-prose', type: 'prose',
            body: `Statik sürtünme, temas eden yüzeyler arasında kayma yokken ortaya çıkar ve gereken değere kadar kendini ayarlar: $0\le f_s\le\mu_sN$. Yatay zemindeki kutuya 10 N uygulanıyor ve kutu hareket etmiyorsa statik sürtünme, maksimum değeri daha büyük olduğu sürece 10 N olur; otomatik olarak $\mu_sN$ yazılmaz. Hareket eşiğinde maksimuma ulaşır.

Yüzeyler birbirine göre kayıyorsa kinetik sürtünme basit modelde $f_k=\mu_kN$ alınır. Çoğu kuru yüzey çifti için $\mu_s>\mu_k$ olduğundan cismi harekete başlatmak, hareketi sürdürmekten daha büyük kuvvet gerektirebilir. Katsayılar yüzeylerin cinsine ve durumuna bağlıdır.

Normal kuvvet her zaman $mg$ değildir. Yatay zeminde başka düşey kuvvet yoksa $N=mg$ olabilir. Cisim aşağı bastırılırsa N artar, yukarı çekilirse azalır; eğik düzlemde $N=mg\cos\theta$ olur. Sürtünme normal kuvvete bağlı olduğu için bu değişiklikler sürtünmeyi de etkiler.

Sürtünme mekanik enerjiyi mikroskobik iç enerjiye dönüştürebilir; fakat her zaman “zararlı” değildir. Yürümeyi, frenlemeyi, yazı yazmayı ve aracın yol tarafından ileri itilmesini sağlar. Tekerleğin kaymadan yuvarlanmasında temas noktasındaki sürtünme bazı durumlarda hareket yönünde olabilir.`,
          },
          {
            id: 'friction-table', type: 'table', title: 'Statik ve kinetik sürtünme',
            columns: ['Özellik', 'Statik sürtünme', 'Kinetik sürtünme'],
            rows: [
              ['Kayma', 'Yok', 'Var'],
              ['Büyüklük', '0 ile $\mu_sN$ arasında gereken kadar', 'Basit modelde $\mu_kN$'],
              ['Yön', 'Kayma eğilimine zıt', 'Göreli kaymaya zıt'],
              ['Sık hata', 'Her durumda maksimum yazmak', 'Hareket yönünü tek başına kullanmak'],
            ],
            caption: 'Sürtünme kuvvetini yazmadan önce cismin kayıp kaymadığını belirle.',
          },
          {
            id: 'friction-quiz', type: 'quiz',
            question: 'Yatay zemindeki kutuya 8 N kuvvet uygulanıyor ve kutu hareket etmiyor. Maksimum statik sürtünme 12 N ise kutuya etki eden statik sürtünme kaç N’dur?',
            options: ['0', '4', '8', '12'], answer_index: 2,
            explanation: 'Kutu dengede olduğu için statik sürtünme uygulanan 8 N kuvveti zıt yönde dengeler. 12 N yalnızca ulaşılabilecek maksimumdur.', purpose: 'concept',
          },
          {
            id: 'friction-checkpoint', type: 'checkpoint',
            prompt: 'Bir kutuyu yatay doğrultuda çekmek yerine yukarı doğru eğik bir iple çekmek neden hareketi kolaylaştırabilir?',
            hint: 'İpin düşey bileşeninin normal kuvvete ve dolayısıyla sürtünmeye etkisini düşün.',
            answer: 'Yukarı yönlü bileşen normal kuvveti azaltır. Sürtünme $f=\mu N$ ile N’ye bağlı olduğundan azalabilir; yatay bileşenin daha büyük bölümü net kuvvete kalır.',
          },
        ],
      },
      {
        id: 'hareket-final', kind: 'practice', title: 'ÖSYM refleksi: sistemi seç, grafiği oku, kuvveti topla',
        lead: 'Hareket sorusu çözmenin güvenli sırası: referans ve pozitif yönü seç, verilen grafiğin eğim/alan anlamını belirle, sonra yalnız seçilen cisme etki eden kuvvetleri topla.',
        blocks: [
          {
            id: 'motion-final-prose', type: 'prose',
            body: `Soruda “sabit hız” görürsen net kuvvetin sıfır olduğunu düşün; cismin üzerinde hiç kuvvet olmadığını değil. “Hızlanıyor” ifadesi net kuvvet ile hızın aynı yönlü bileşeni olduğunu; “yavaşlıyor” zıt yönlü olduğunu gösterir. Yön değişimi de ivmedir; sabit süratli viraj hareketinde bile net kuvvet sıfır değildir.

Bağlı cisimlerde tüm sistemi seçersen ip gerilmeleri sistem içi kuvvet olarak birbirini götürebilir; toplam kütle ve dış net kuvvetle ivme bulunur. Tek cismi seçersen gerilme o cismin diyagramına girer. Sistem seçimi denklemi değiştirir ama fiziksel ivmeyi değiştirmez.

Grafikte sayı verilmemişse nitel ilişkiyi zorla sayıya çevirme. x–t grafiğinde daha dik teğet daha büyük sürat; v–t grafiğinde daha dik doğru daha büyük ivme; aynı zaman aralığında daha büyük işaretli alan daha büyük yer değiştirme demektir. Hareket yönü için grafiğin artıp azalmasına değil, hızın işaretine bak.`,
          },
          {
            id: 'motion-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'Fiziksel karar', 'Sık tuzak'],
            rows: [
              ['Başlangıca dönüş', 'Yer değiştirme ve ortalama hız sıfır', 'Toplam yolu sıfır sanmak'],
              ['x–t eğimi', 'Hız', 'Grafiği yörünge sanmak'],
              ['v–t alanı', 'Yer değiştirme', 'Negatif alanı yola negatif eklemek'],
              ['Sabit hız', 'Net kuvvet sıfır', 'Hiç kuvvet yok demek'],
              ['Etki–tepki', 'Farklı cisimlerde eşit-zıt çift', 'Aynı cisimde denge sanmak'],
              ['Cisim hareket etmiyor', 'Statik sürtünme gereken kadar', 'Doğrudan $\mu_sN$ yazmak'],
            ],
            caption: 'Her formülden önce sistem, yön ve grafik eksenlerini açıkça belirle.',
          },
          {
            id: 'motion-osym', type: 'osym_simulation', title: 'Final kontrolü: grafik ve net kuvvet',
            passage: 'Doğrusal yolda hareket eden K cisminin hızı 0–2 s arasında +4 m/s sabit, 2–6 s arasında +4 m/s’den −4 m/s’ye doğrusal azalıyor. Cismin kütlesi sabittir.',
            question: 'Bu hareket için hangisi kesinlikle doğrudur?',
            options: [
              { text: '0–2 s arasında cisme hiç kuvvet etki etmez.', explanation: 'Net kuvvet sıfırdır; dengelenmiş kuvvetler bulunabilir.' },
              { text: '2–6 s arasında ivme sabit ve negatiftir.', explanation: 'v–t grafiği bu aralıkta negatif eğimli doğrudur; eğim olan ivme sabit ve negatiftir.' },
              { text: 'Cisim 2–6 s boyunca sürekli yavaşlar.', explanation: '2–4 s arası yavaşlar, 4 s’de durup yön değiştirir, 4–6 s arası negatif yönde sürati artar.' },
              { text: 'Toplam yer değiştirme sıfırdır.', explanation: '0–2 s alanı +8 m’dir; 2–6 s simetrik pozitif ve negatif alanları birbirini götürür. Toplam +8 m olur.' },
              { text: '2–6 s arasında net kuvvet yön değiştirir.', explanation: 'İvme sabit negatif olduğu için net kuvvet de süre boyunca sabit negatif yöndedir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Hız–zaman grafiğinde eğimi ivme, alanı yer değiştirme olarak oku; hız ile ivmenin işaretlerini ayrı izle.',
            critical_point: 'Cisim yön değiştirirken ivmenin yön değiştirmesi gerekmez.',
            takeaway: 'Negatif ivme, negatif yönde hareket demek değildir; hızın değişim yönüdür.',
          },
          {
            id: 'motion-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Hareket referansa göredir; konum ve yer değiştirme yönlüdür.',
              'Ortalama sürat toplam yol/toplam zaman, ortalama hız yer değiştirme/toplam zamandır.',
              'x–t eğimi hız; v–t eğimi ivme ve alanı yer değiştirme; a–t alanı hız değişimidir.',
              'Hız ve ivme aynı işaretliyse sürat artar, zıt işaretliyse azalır.',
              'Net kuvvet sıfırsa cisim durgun veya sabit hızlı olabilir.',
              '$\sum\vec F=m\vec a$; ivme net kuvvetle aynı yöndedir.',
              'Etki–tepki kuvvetleri eşit ve zıttır fakat farklı cisimlere etki eder.',
              'Statik sürtünme maksimuma kadar gereken kadar, kinetik sürtünme basit modelde $\mu_kN$ kadardır.',
              'Normal kuvvet otomatik olarak mg değildir; diğer düşey kuvvetlere ve ivmeye bağlıdır.',
            ],
          },
          {
            id: 'motion-connection', type: 'connection', title: 'Sıradaki konuya köprü: iş, güç ve enerji',
            body: 'Kuvvetin hareketi nasıl değiştirdiğini Newton yasalarıyla kurduk. Sıradaki konuda kuvvetin bir yol boyunca yaptığı işi, hareket enerjisindeki değişimi ve enerjinin korunmasını inceleyeceğiz.',
            links: ['İş, Güç ve Enerji', 'Vektörler', 'Isı ve Sıcaklık'],
          },
        ],
      },
    ],
  },
}

export default hareketVeKuvvet
