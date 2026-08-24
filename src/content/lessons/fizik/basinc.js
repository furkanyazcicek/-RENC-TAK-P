const basinc = {
  slug: 'basinc',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Basınç' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '4. Konu',
  title: 'Basınç',
  subtitle: 'Katının kuvveti alana nasıl yaydığını, sıvının derinlikle nasıl basınç ürettiğini ve atmosferin görünmeyen kuvvetini tek bir modelde birleştir.',
  document: {
    version: 2,
    estimated_minutes: 70,
    prerequisites: [
      { topic: 'Kuvvet ve alan', why: 'Katı basıncı, yüzeye dik kuvvetin temas alanına dağılımıdır.' },
      { topic: 'Madde ve Özellikleri', why: 'Sıvı özkütlesi ve yükseklik, sıvı basıncının değişkenleridir.' },
      { topic: 'Sıvıların Kaldırma Kuvveti', why: 'Kaldırma kuvvetinin kaynağı olan basınç farkını ayrıntılandıracağız.' },
    ],
    outcomes: [
      'Basıncı yüzeye dik kuvvetin birim alana düşen miktarı olarak açıklayabileceksin.',
      'Katı basıncında kuvvet ve temas alanını ayrı ayrı değiştirebileceksin.',
      'Durgun sıvı basıncını özkütle, yer çekimi ve derinlikle ilişkilendirebileceksin.',
      'Pascal prensibini hidrolik sistemlere uygulayabileceksin.',
      'Açık hava basıncı, barometre ve manometre düzeneklerini yorumlayabileceksin.',
      'Basınç kuvveti ile basıncı ve kap şekli ile sıvı miktarını birbirine karıştırmadan ÖSYM sorusu çözebileceksin.',
    ],
    sections: [
      {
        id: 'basinc-sezgi',
        kind: 'opening',
        title: 'Aynı kuvvet neden farklı iz bırakır?',
        lead: 'İnce topuk zemine gömülürken kar ayakkabısı batmayı azaltır. Kuvvet aynı olabilir; değişen, bu kuvvetin yayıldığı alandır.',
        blocks: [
          {
            id: 'basinc-map',
            type: 'concept_map',
            title: 'Basınç ailesinin haritası',
            intro: 'Katı, sıvı ve gaz basıncı farklı düzeneklerde görünür; ortak fikir yüzeye dik kuvvetin alan üzerindeki dağılımıdır.',
            nodes: [
              { id: 'katı', label: 'Katı basıncı', detail: 'F/A ve temas alanı' },
              { id: 'sıvı', label: 'Sıvı basıncı', detail: 'dgh ve derinlik' },
              { id: 'kuvvet', label: 'Basınç kuvveti', detail: 'P·A ile yüzeydeki toplam etki' },
              { id: 'pascal', label: 'Pascal prensibi', detail: 'Kapalı sıvıda basınç iletimi' },
              { id: 'atmosfer', label: 'Açık hava basıncı', detail: 'Hava sütununun ağırlığı' },
              { id: 'ölçüm', label: 'Barometre–manometre', detail: 'Mutlak ve fark basıncı' },
            ],
            links: [
              { from: 'katı', to: 'kuvvet', label: 'alanla ilişki' },
              { from: 'sıvı', to: 'kuvvet', label: 'yüzeye etki' },
              { from: 'sıvı', to: 'pascal', label: 'iletir' },
              { from: 'atmosfer', to: 'ölçüm', label: 'barometre' },
              { from: 'sıvı', to: 'ölçüm', label: 'manometre' },
            ],
            caption: 'Basınç skaler bir niceliktir; basınç kuvveti ise belirli bir yüzeye dik etki eden vektörel kuvvettir.',
          },
          {
            id: 'basinc-opening-prose',
            type: 'prose',
            body: `Basınç, bir yüzeyin her birim alanına dik olarak düşen kuvvet miktarıdır. Aynı kuvvet daha küçük alana uygulandığında her birim alan daha büyük pay alır; basınç artar. Keskin bıçak, sivri çivi ve ince iğne küçük temas alanıyla büyük basınç üretir. Kar ayakkabısı, paletli araç ve geniş temel ise kuvveti daha büyük alana yayarak basıncı azaltır.

Basınç ile basınç kuvvetini ayırmak gerekir. Basınç $P=F_\perp/A$ oranıdır ve birimi pascaldır; $1\,Pa=1\,N/m^2$. Basınç kuvveti belirli yüzeyin tamamına etki eden kuvvettir. Aynı basınç daha büyük yüzeyde daha büyük toplam kuvvet oluşturabilir. “Basınç büyüdü” ifadesi her zaman “toplam kuvvet büyüdü” anlamına gelmez.

Katı cisim bir yüzeyi üzerinde dengedeyse ve yalnız ağırlığıyla bastırıyorsa yüzeye dik kuvvet çoğu basit soruda ağırlığa eşittir. Fakat cisme yukarı veya aşağı ek kuvvet uygulanırsa, eğik düzlemdeyse ya da ivmeli hareket ediyorsa temas kuvveti ağırlıktan farklı olabilir. Formülde otomatik olarak $mg$ yazmak yerine yüzeye gerçekten aktarılan dik kuvveti belirlemelisin.

Basınç birimi dönüşümünde alanın karesini unutma: $1\,m^2=10^4\,cm^2$. Küçük bir yüzey için Pa sayısının büyük çıkması normaldir. Sonucu sezgiyle kontrol et: kuvvet artıp alan sabitse basınç artmalı; alan artıp kuvvet sabitse azalmalıdır.`,
          },
          {
            id: 'basinc-solid-formula',
            type: 'formula',
            title: 'Katı yüzeyindeki ortalama basınç',
            latex: 'P = \\frac{F_{\\perp}}{A}',
            meaning: 'Yüzeye dik kuvvet, temas alanına bölünür. Kuvvet iki katına çıkarsa P iki katına; alan iki katına çıkarsa P yarıya iner.',
            variables: [
              { sym: 'P', desc: 'Basınç; Pa veya N/m²' },
              { sym: 'F⊥', desc: 'Yüzeye dik aktarılan kuvvet; N' },
              { sym: 'A', desc: 'Temas alanı; m²' },
            ],
          },
          {
            id: 'basinc-solid-trap',
            type: 'trap',
            title: 'Cismin toplam yüzey alanını kullanma',
            wrong: '“Küpün altı dışında kalan yüzleri de olduğuna göre basınçta toplam yüzey alanı alınır.”',
            right: 'Katı basıncında yalnız destek yüzeyiyle gerçek temas eden alan kullanılır. Küp farklı yüzü üzerine çevrilirse temas alanı değişebilir.',
            body: 'Üst üste cisimlerde zemine basınç için tüm sistemin zemine aktardığı dik kuvvet ve en alttaki cismin zeminle temas alanı gerekir.',
          },
        ],
      },
      {
        id: 'basinc-atlas-section',
        kind: 'build',
        title: 'Katıdan sıvıya ve atmosfere basınç atlası',
        lead: 'Alan, derinlik ve akışkan sütunu farklı görünse de her sahne birim alan başına kuvveti görünür kılar.',
        blocks: [
          {
            id: 'basinc-atlas',
            type: 'figure',
            width: 'full',
            title: 'Basıncın üç fiziksel yüzü',
            purpose: 'Temas alanı, sıvı derinliği, barometre ve hidrolik sistem arasındaki ortak basınç fikrini karşılaştırmak.',
            complexity: 'high',
            image_url: '/lesson-assets/fizik/basinc/basinc-atlasi.jpg',
            image_srcset: '/lesson-assets/fizik/basinc/basinc-atlasi-900.jpg 900w, /lesson-assets/fizik/basinc/basinc-atlasi.jpg 1440w',
            image_sizes: '(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw',
            image_width: 1440,
            image_height: 960,
            alt: 'Aynı yükün sivri uçla ve geniş kar ayakkabısıyla zemine uygulanması, derinde daha çok esneyen zarları olan su kabı, cıvalı barometre ve hidrolik kaldıracı gösteren dokulu bilimsel atlas çizimi.',
            caption: 'Küçük alan katı basıncını, büyük derinlik sıvı basıncını artırır; kapalı sıvıdaki basınç değişimi hidrolik düzenekte kuvvet kazancına dönüşebilir.',
            focus: [
              { title: 'Sivri uç ve geniş taban', body: 'Aynı yük daha küçük alanda daha büyük, geniş alanda daha küçük basınç oluşturur.' },
              { title: 'Sıvı sütunu', body: 'Derindeki zarın daha fazla esnemesi, basıncın derinlikle arttığını gösterir.' },
              { title: 'Barometre', body: 'Atmosfer basıncı sıvı sütununun ağırlığıyla dengelenir.' },
              { title: 'Hidrolik düzenek', body: 'İletilen basınç büyük piston alanında daha büyük kuvvet üretir; enerji kazancı yoktur.' },
            ],
          },
          {
            id: 'basinc-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Katı–sıvı basıncı laboratuvarı',
            caption: 'Katıda kuvvet ve alan; sıvıda özkütle, derinlik ve yer çekimi belirleyicidir. Kap şekli bu temel bağıntılarda doğrudan bulunmaz.',
            purpose: 'Katı ve sıvı basıncının değişkenlerini aynı ekranda değiştirip farklı matematiksel ilişkileri karşılaştırmak.',
            data: { mode: 'pressure', title: 'Basıncın iki sistemini karşılaştır', initialForce: 240, initialArea: 40, initialDepth: 80, initialLiquidDensity: 1 },
          },
          {
            id: 'basinc-compare',
            type: 'compare',
            title: 'Katı ve sıvı basıncını ayıran eksenler',
            columns: ['Katı basıncı', 'Sıvı basıncı'],
            rows: [
              { label: 'Temel ilişki', values: ['$P=F_\perp/A$', '$P=dgh$'] },
              { label: 'Artıranlar', values: ['Dik kuvvet artışı, alan azalışı', 'Özkütle, derinlik veya g artışı'] },
              { label: 'Şekil etkisi', values: ['Temas alanı üzerinden etkiler', 'Aynı derinlikte kap şekli etkilemez'] },
              { label: 'Yön', values: ['Temas yüzeyine dik kuvvet üretir', 'Her yönde yüzeye dik kuvvet üretir'] },
            ],
            insight: 'İki sistemde de basınç skaler, yüzeye etki eden basınç kuvveti yüzeye diktir.',
          },
          {
            id: 'basinc-solid-worked',
            type: 'worked_example',
            title: 'Küpün yüzünü değiştirmek',
            prompt: 'Ağırlığı 600 N olan dikdörtgenler prizması önce 0,30 m², sonra 0,10 m² yüzeyi üzerine konuyor. Zemin basınçları nedir?',
            steps: [
              { title: 'Dik kuvveti belirle', body: 'Ek kuvvet yok ve denge var; her durumda F=600 N.' },
              { title: 'Geniş yüz', body: '$P_1=600/0{,}30=2000\,Pa$.' },
              { title: 'Dar yüz', body: '$P_2=600/0{,}10=6000\,Pa$.' },
            ],
            answer: 'Dar yüz üzerindeki basınç geniş yüztekinden üç kat büyüktür.',
            takeaway: 'Cismin ağırlığı değişmedi; temas alanı küçüldüğü için basınç büyüdü.',
          },
        ],
      },
      {
        id: 'basinc-sivi',
        kind: 'build',
        title: 'Durgun sıvı basıncı: derinlik, özkütle ve basınç kuvveti',
        lead: 'Sıvı basıncı toplam sıvı miktarını değil, ölçüm noktasının üzerindeki sıvı sütununun koşullarını izler.',
        blocks: [
          {
            id: 'basinc-liquid-prose',
            type: 'prose',
            body: `Durgun ve türdeş bir sıvıda aynı yatay düzlemdeki noktaların basınçları eşittir. Kabın daralması, genişlemesi veya eğilmesi sonucu değiştirmez; basıncı belirleyen serbest yüzeyden dikey derinliktir. Bu nedenle eşit yükseklikte aynı sıvı bulunan farklı şekilli kapların taban basınçları eşit olabilir. Bu olaya **hidrostatik paradoks** denir: sıvı ağırlıkları farklı olsa bile taban basınçları aynı çıkabilir.

Sıvının kendi ağırlığından doğan gösterge basıncı $P=dgh$ ile hesaplanır. Kap atmosferle açıksa bir noktadaki mutlak basınç $P_{mutlak}=P_{atm}+dgh$ olur. Sıvı basıncı günlük sorularda çoğu zaman atmosfer katkısı çıkarılarak verilir; “toplam/mutlak basınç” sözcüğü varsa atmosferi ekle.

Tabandaki toplam basınç kuvveti $F=P\cdot A$ olduğundan aynı taban basıncına sahip kapların taban alanları farklıysa basınç kuvvetleri farklıdır. Ayrıca kabın tabanına etki eden sıvı basınç kuvveti her zaman kaptaki sıvı ağırlığına eşit olmak zorunda değildir. Eğik yan yüzeylerin sıvıya uyguladığı dik kuvvetlerin düşey bileşenleri bu farkı oluşturabilir.

Birbirine karışmayan sıvı katmanlarında her katmanın basınç katkısı ayrı toplanır: $P=g(d_1h_1+d_2h_2+...)$. Yalnız toplam yüksekliği tek özkütleyle çarpmak yanlıştır. Aynı derinlikte fakat farklı katman dağılımında noktaların basınçları, üzerlerindeki sütunun ağırlık yoğunluğuna göre farklı olabilir.`,
          },
          {
            id: 'basinc-liquid-formula',
            type: 'formula',
            title: 'Sıvının oluşturduğu basınç',
            latex: 'P_{sıvı} = d \\cdot g \\cdot h',
            meaning: 'Türdeş sıvıda gösterge basıncı özkütle, yer çekimi ivmesi ve serbest yüzeyden derinlikle doğru orantılıdır.',
            variables: [
              { sym: 'd', desc: 'Sıvı özkütlesi; kg/m³' },
              { sym: 'g', desc: 'Yer çekimi ivmesi; N/kg' },
              { sym: 'h', desc: 'Serbest yüzeyden dikey derinlik; m' },
            ],
          },
          {
            id: 'basinc-liquid-table',
            type: 'table',
            title: 'Sıvı basıncına etki edenler',
            columns: ['Değişken', 'P üzerindeki etkisi', 'Sık hata'],
            rows: [
              ['Derinlik h', 'Doğru orantılı', 'Kabın eğik yolu boyunca uzunluk almak'],
              ['Özkütle d', 'Doğru orantılı', 'Toplam sıvı kütlesiyle karıştırmak'],
              ['Yer çekimi g', 'Doğru orantılı', 'Farklı gezegende aynı sanmak'],
              ['Kap şekli', 'Aynı h ve d için etkilemez', 'Geniş kapta basınç daha büyük sanmak'],
              ['Taban alanı', 'Basıncı etkilemez; kuvveti etkiler', 'P ile F’yi karıştırmak'],
            ],
            caption: 'Kap şekli sıvı hacmini ve ağırlığını değiştirebilir; fakat aynı sıvının aynı derinlikteki basıncını değiştirmez.',
          },
          {
            id: 'basinc-liquid-quiz',
            type: 'quiz',
            question: 'Aynı sıvıyla eşit yüksekliğe doldurulmuş, taban alanları A ve 2A olan iki açık kabın tabanları için hangisi doğrudur?',
            options: ['Basınçlar ve kuvvetler eşittir', 'Basınçlar eşit, ikinci tabandaki basınç kuvveti iki kattır', 'İkinci kabın basıncı iki kattır', 'Birinci kabın kuvveti iki kattır'],
            answer_index: 1,
            explanation: 'd, g ve h aynı olduğundan taban basınçları eşittir. F=P·A olduğundan alanı 2A olan tabandaki kuvvet iki kattır.',
            purpose: 'concept',
          },
        ],
      },
      {
        id: 'basinc-pascal',
        kind: 'build',
        title: 'Pascal prensibi ve hidrolik kuvvet kazancı',
        lead: 'Kapalı sıvıya uygulanan basınç değişimi sıvının her noktasına ve kabın yüzeylerine aynen iletilir.',
        blocks: [
          {
            id: 'basinc-pascal-prose',
            type: 'prose',
            body: `Sıkıştırılamaz kabul edilen kapalı sıvının bir noktasında oluşturulan basınç değişimi her noktaya aynen iletilir. Hidrolik preste küçük pistona uygulanan $F_1$ kuvveti $P=F_1/A_1$ basınç artışı oluşturur. Aynı basınç büyük pistonda $F_2=P A_2$ kuvveti üretir. Böylece $F_2/F_1=A_2/A_1$ kuvvet kazancı sağlanır.

Kuvvet kazancı enerji kazancı değildir. Sıvı hacmi korunduğu için küçük pistonun ittiği hacim büyük pistonun yükselttiği hacme eşittir: $A_1x_1=A_2x_2$. Büyük piston daha büyük kuvvetle daha kısa yol alır; ideal sistemde yapılan işler eşittir. Gerçekte sürtünme ve akış kayıpları nedeniyle çıkan iş giren işten küçüktür.

Pistonlar farklı yüksekliklerdeyse yalnız iletilen ek basınç eşitliği yetmez; aradaki sıvı yüksekliğinin $dgh$ katkısı da hesaba katılır. Basit TYT sorularında pistonlar aynı düzlemde çizilir veya yükseklik farkı ihmal edilir. Çizime bakıp bu koşulu kontrol et.

Hidrolik fren, araç kaldıracı, pres, iş makinesi ve dişçi koltuğu Pascal prensibinden yararlanır. Küçük kuvvetle büyük yük kaldırmak “bedava enerji” değildir; kuvvetten kazanırken yoldan kaybedilir. Bu ifade basit makinelerin genel enerji ilkesine köprü kurar.`,
          },
          {
            id: 'basinc-pascal-formula',
            type: 'formula',
            title: 'Aynı düzeydeki hidrolik pistonlar',
            latex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2}',
            meaning: 'Küçük pistonda oluşturulan basınç artışı büyük pistona aynen iletilir. Alan oranı kuvvet oranını belirler.',
            variables: [
              { sym: 'F₁, F₂', desc: 'Pistonlara dik kuvvetler' },
              { sym: 'A₁, A₂', desc: 'Piston yüzey alanları' },
            ],
          },
          {
            id: 'basinc-pascal-example',
            type: 'worked_example',
            title: 'Hidrolik liftte kuvvet ve yol',
            prompt: 'Alanları 20 cm² ve 400 cm² olan pistonlardan küçüğüne 150 N uygulanıyor. İdeal düzende büyük piston kuvveti ve küçük piston 40 cm inerken büyük pistonun yükselme miktarı nedir?',
            steps: [
              { title: 'Alan oranı', body: '$A_2/A_1=400/20=20$.' },
              { title: 'Kuvvet kazancı', body: '$F_2=150\times20=3000\,N$.' },
              { title: 'Hacim korunumu', body: '$20\times40=400\times x_2$; $x_2=2\,cm$.' },
            ],
            answer: 'Büyük piston 3000 N kuvvet uygular ve 2 cm yükselir.',
            takeaway: 'Kuvvet 20 kat artarken yol 20 kat azalır; ideal iş değişmez.',
          },
          {
            id: 'basinc-pascal-trap',
            type: 'trap',
            title: 'Pascal prensibi kuvveti değil basıncı aynen iletir',
            wrong: '“Küçük pistona 150 N uygulanırsa büyük pistona da 150 N gider.”',
            right: 'İletilen büyüklük basınç değişimidir. Büyük pistonun alanı daha büyükse aynı basınç daha büyük toplam kuvvet oluşturur.',
            body: 'Kuvvet eşitliği değil $F/A$ eşitliği kurulur. Piston yolları da hacim korunumu gereği ters orantılıdır.',
          },
        ],
      },
      {
        id: 'basinc-atmosfer',
        kind: 'practice',
        title: 'Açık hava basıncı, barometre ve manometre',
        lead: 'Havanın kütlesi ve ağırlığı vardır; atmosferin üzerimizde oluşturduğu basıncı çoğu zaman iç basınçlarla dengelendiği için fark etmeyiz.',
        blocks: [
          {
            id: 'basinc-atmosfer-prose',
            type: 'prose',
            body: `Atmosfer basıncı, üzerimizdeki hava sütununun ağırlığından doğar. Deniz seviyesinde hava sütunu daha uzun ve yoğun olduğu için basınç yükseklere göre daha büyüktür. Vakumlu vantuzun yüzeye tutunması, pipetle sıvı yükselmesi ve kapalı metal kutunun dış basınçla ezilmesi atmosfer basıncıyla açıklanır. Pipet sıvıyı “çekmez”; ağız içindeki basınç azaltılınca dış atmosfer sıvı yüzeyine daha büyük basınç uygulayıp sıvıyı yukarı iter.

Torricelli barometresinde bir ucu kapalı cıva dolu tüp cıva çanağına ters çevrilir. Tüpün üstünde yaklaşık boşluk oluşur; atmosferin çanaktaki yüzeye uyguladığı basınç cıva sütununun $dgh$ basıncıyla dengelenir. Tüpün çapı yeterince genişse sütun yüksekliği tüp şekline bağlı değildir. Daha yoğun sıvı aynı atmosfer basıncını daha kısa sütunla dengeler.

Açık uçlu U borulu manometre gaz basıncı ile atmosfer basıncı arasındaki farkı ölçer. Gaz tarafındaki sıvı seviyesi daha aşağıdaysa gaz basıncı atmosferden büyüktür; fark $dgh$ kadardır. Gaz tarafı daha yukarıdaysa gaz basıncı atmosferden küçüktür. Kapalı uçta vakum varsa manometre doğrudan gazın mutlak basıncını gösterebilir.

Basınç farkı sorularında aynı yatay düzlemde ve aynı bağlı sıvı içindeki basınçların eşitliğini kullan. Borunun kol kalınlığı sıvı seviyelerinin hacim değişimini etkileyebilir; fakat denge basınç farkı, iki serbest yüzey arasındaki dikey seviye farkıyla belirlenir.`,
          },
          {
            id: 'basinc-atmosphere-table',
            type: 'table',
            title: 'Basınç ölçme araçlarını ayır',
            columns: ['Araç', 'Ölçtüğü', 'Temel denge'],
            rows: [
              ['Barometre', 'Açık hava basıncı', '$P_{atm}=dgh$'],
              ['Açık uçlu manometre', 'Gaz–atmosfer basınç farkı', '$|P_g-P_{atm}|=dgh$'],
              ['Kapalı uçlu manometre', 'Gazın mutlak basıncı (üstte vakum)', '$P_g=dgh$'],
              ['Altimetre', 'Basınçtan yaklaşık yükseklik', 'Yüksekte atmosfer basıncı azalır'],
            ],
            caption: 'Şekilde hangi uçta hangi basıncın bulunduğunu yazmadan yalnız seviye farkına bakma.',
          },
          {
            id: 'basinc-atmosphere-why',
            type: 'why',
            question: 'Barometre yüksek bir dağa çıkarılınca cıva sütunu neden kısalır?',
            body: 'Yükseğe çıkıldıkça barometrenin üzerindeki hava sütunu ve ortalama hava yoğunluğu azalır; açık hava basıncı küçülür. Daha küçük atmosfer basıncını dengelemek için aynı cıvanın daha küçük $h$ yüksekliği yeterlidir.',
          },
          {
            id: 'basinc-manometer-check',
            type: 'checkpoint',
            prompt: 'Açık uçlu U boruda gaz tarafındaki sıvı seviyesi açık hava tarafındakinden daha aşağıdaysa gaz basıncı mı, atmosfer basıncı mı büyüktür?',
            hint: 'Daha büyük basınç kendi kolundaki sıvıyı aşağı iter ve karşı kolu yukarı yükseltir.',
            answer: 'Gaz basıncı atmosfer basıncından büyüktür. Aradaki fark, manometre sıvısının özkütlesi ile iki seviye arasındaki dikey fark kullanılarak $dgh$ ile bulunur.',
          },
        ],
      },
      {
        id: 'basinc-kapanis',
        kind: 'close',
        title: 'ÖSYM sentezi: önce sistem türünü seç',
        lead: 'Katı mı, durgun sıvı mı, kapalı hidrolik sistem mi, atmosfer–gaz dengesi mi? Doğru model seçildiğinde denklem kendiliğinden sadeleşir.',
        blocks: [
          {
            id: 'basinc-close-prose',
            type: 'prose',
            body: `Katı sorusunda yüzeye aktarılan dik kuvveti ve gerçek temas alanını bul. Sıvı sorusunda serbest yüzeyden dikey derinlik, sıvı özkütlesi ve $g$ kullan; kap şekli veya toplam sıvı miktarını doğrudan basınca sokma. Yüzeye gelen toplam kuvvet istenirse basıncı alanla çarp. Böylece basınç ile basınç kuvveti ayrımı korunur.

Hidrolik düzende iletilen şeyin basınç değişimi olduğunu, büyük kuvvetin büyük piston alanından geldiğini hatırla. Kuvvetten kazanç varsa yol kaybı vardır. Barometre ve manometrede ise bağlı sıvının aynı yatay düzlemindeki basınçları eşitle; üst yüzeylerde atmosfer, gaz veya vakumdan hangisinin bulunduğunu açıkça yaz.

Grafiklerde katı için sabit alanda $P$–$F$ doğrusal, sabit kuvvette $P$–$A$ ters orantılıdır. Sıvıda sabit d ve g için $P$–$h$ orijinden geçen doğrudur. Katmanlı sıvıda eğim özkütle değiştikçe kırılır. Atmosfer katkısı eklenmiş mutlak basınç grafiği h=0’da sıfırdan değil $P_{atm}$ değerinden başlar.

Basınç konusunun ana refleksi “çok olan daha çok basınç yapar” değildir. Çok kuvvet geniş alana yayılabilir; çok sıvı sığ bir kapta olabilir; büyük taban alanı basıncı değil kuvveti artırabilir. Her yargıyı ilgili bağıntının değişkenleriyle sınırla.`,
          },
          {
            id: 'basinc-osym',
            type: 'osym_simulation',
            title: 'Final kontrolü: aynı sıvı, farklı kap',
            passage: 'Taban alanları A ve 2A olan farklı şekilli K ve L kaplarına aynı özkütleli sıvı eşit h yüksekliğine kadar dolduruluyor. Kaplar aynı ortamda açık ve tabanları yataydır.',
            question: 'Kap tabanları için aşağıdakilerden hangisi kesinlikle doğrudur?',
            options: [
              { text: 'L’de sıvı basıncı K’nin iki katıdır.', explanation: 'Sıvı basıncı dgh ile belirlenir; taban alanı bağıntıda yoktur.' },
              { text: 'K ve L’de sıvı basınçları eşit, L’de basınç kuvveti iki kattır.', explanation: 'd, g ve h eşit olduğundan P eşittir; F=PA olduğundan 2A tabanında kuvvet iki kattır.' },
              { text: 'Kaplardaki sıvı ağırlıkları kesinlikle eşittir.', explanation: 'Kap şekilleri ve dolayısıyla hacimler bilinmediğinden ağırlıklar kesin karşılaştırılamaz.' },
              { text: 'K’nin taban kuvveti daha büyüktür.', explanation: 'Aynı basınçta daha küçük alan daha küçük kuvvet verir.' },
              { text: 'Kap şekli farklı olduğundan taban basınçları karşılaştırılamaz.', explanation: 'Aynı tür sıvıda aynı dikey derinlik basıncı belirlemek için yeterlidir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Önce P=dgh ile basıncı; sonra F=PA ile taban kuvvetini ayrı değerlendir.',
            critical_point: 'Alan, sıvı basıncını değil belirli yüzeydeki toplam basınç kuvvetini değiştirir.',
            takeaway: 'Soru aynı cümlede P ve F’yi kullandığında iki bağıntıyı sırayla uygula.',
          },
          {
            id: 'basinc-summary',
            type: 'summary',
            title: 'Kesin bilmen gerekenler',
            points: [
              'Katı basıncı P=F⊥/A; SI birimi pascaldır.',
              'Basınç skaler, basınç kuvveti yüzeye dik vektörel kuvvettir.',
              'Sıvının gösterge basıncı P=dgh; kap şekli ve toplam sıvı miktarı doğrudan etkilemez.',
              'Aynı yatay düzlemde bağlı, durgun ve türdeş sıvının basınçları eşittir.',
              'Basınç kuvveti F=P·A olduğundan alan basınç sabitken kuvveti değiştirir.',
              'Pascal prensibi kapalı sıvıda basınç değişiminin aynen iletilmesidir.',
              'Hidrolikte kuvvetten kazanç, yoldan kayıpla dengelenir.',
              'Barometre atmosfer basıncını, manometre basınç farkını ölçer.',
              'Yükseğe çıkıldıkça açık hava basıncı ve barometre sütun yüksekliği azalır.',
            ],
          },
          {
            id: 'basinc-connection',
            type: 'connection',
            title: 'Sıradaki konuya köprü: ısı, sıcaklık ve genleşme',
            body: 'Basınçta parçacıkların yüzeye aktardığı etkiyi makroskobik olarak kullandık. Sıradaki konuda taneciklerin ortalama hareket enerjisi, enerji alışverişi ve sıcaklık değişiminin boyutlara etkisini inceleyeceğiz.',
            links: ['Isı, Sıcaklık ve Genleşme', 'Kaldırma Kuvveti', 'Hareket ve Kuvvet'],
          },
        ],
      },
    ],
  },
}

export default basinc
