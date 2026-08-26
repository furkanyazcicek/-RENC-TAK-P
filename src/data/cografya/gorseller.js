/**
 * Coğrafya Atlası — Sahne kütüphanesi
 * ==================================================================
 * Beş fotogerçekçi manzara (imagegen) atlasın **zemini**; on üç bölgenin
 * her biri bu zeminlerden birini kullanır ama **kendi kanıt noktalarıyla**.
 *
 * Önceki sürümde kanıt noktaları fotoğrafa bağlıydı: Harita Atölyesi'ne
 * giren öğrenci, akarsu aşındırmasını anlatan noktaları görüyordu. Artık
 * noktalar bölgeye bağlı — aynı manzara, bölgeye göre farklı soruluyor.
 * Coğrafyanın kendi yöntemi de budur: aynı mekân, farklı mercek.
 *
 * `x` ve `y` değerleri fotoğraf üzerinde yüzdedir (sol üst = 0,0) ve
 * fotoğraftaki gerçek ayrıntıya denk gelir; süs değildir.
 */

const GORSEL_KOKU = '/atlas-assets/cografya/imagegen'

/** Zeminler — yalnızca görsel ve künye. */
export const ZEMINLER = {
  dunya: {
    src: `${GORSEL_KOKU}/dunya-yuksek-yorunge.jpg`,
    alt: 'Yüksek yörüngeden Avrupa, Akdeniz, Anadolu ve Kuzey Afrika’yı gösteren Dünya görünümü',
  },
  atmosfer: {
    src: `${GORSEL_KOKU}/atmosfer-iklim-sistemi.jpg`,
    alt: 'Solda okyanus ve buharlaşma, ortada yağış bırakan bulut ve dağ, sağda kurak vadi',
  },
  yeryuzu: {
    src: `${GORSEL_KOKU}/yersekilleri-havza.jpg`,
    alt: 'Karlı dağlardan kıvrımlı kayaç sırtlarına ve deltaya uzanan akarsu havzası; önde yerkabuğu kesiti',
  },
  beseri: {
    src: `${GORSEL_KOKU}/beseri-aglar.jpg`,
    alt: 'Tarım parselleri, akarsu, banliyö, yoğun kent çekirdeği, konteyner limanı ve enerji tesisleri',
  },
  risk: {
    src: `${GORSEL_KOKU}/afet-risk-havzasi.jpg`,
    alt: 'Barajlı havza, taşkın düzlüğüne kurulmuş kent, yüzey faylanması izi ve yamaçta yangın dumanı',
  },
}

/**
 * Bölge sahneleri.
 * katmanlar: kanıt merceği · odaklar: fotoğraftaki gerçek ayrıntılar.
 */
export const BOLGE_SAHNELERI = {
  sistemler: {
    zemin: 'dunya',
    baslik: 'Dünya tek bir sistem gibi çalışır',
    katmanlar: [
      { id: 'kureler', ad: 'Küreler', aciklama: 'Atmosfer, hidrosfer, litosfer ve biyosfer aynı karede iç içe görünür.' },
      { id: 'dolasim', ad: 'Dolaşım', aciklama: 'Enerji ve su, küreler arasında sürekli dolaşır; sınır diye bir şey yoktur.' },
      { id: 'insan', ad: 'İnsan', aciklama: 'İnsan bu sistemin dışında değil içindedir; kararı sisteme girer ve geri döner.' },
    ],
    odaklar: [
      { id: 'limb', katman: 'kureler', x: 48, y: 13, baslik: 'Atmosferin kalınlığı', metin: 'Gezegenin kenarındaki mavi şerit atmosferin tamamıdır. Yarıçapa göre çok incedir; hava olayları ve yaşam bu dar kuşakta olur.' },
      { id: 'akdeniz-havza', katman: 'kureler', x: 47, y: 60, baslik: 'Kara ve deniz birlikte', metin: 'Akdeniz havzasında kara, deniz ve bitki örtüsü aynı karede. Bir kürenin özelliği diğerinin sınırını belirler.' },
      { id: 'siklon', katman: 'dolasim', x: 19, y: 40, baslik: 'Alçak basınç girdabı', metin: 'Okyanus üzerindeki bulut sarmalı, ısınan havanın yükselip dönerek dolaşım kurduğunu gösterir.' },
      { id: 'sahra', katman: 'dolasim', x: 40, y: 84, baslik: 'Bulutsuz kuşak', metin: 'Sahra’nın bulutsuz oluşu tesadüf değil; alçalan hava kuşağı yağışı engeller. Dolaşımın izi çölde okunur.' },
      { id: 'anadolu', katman: 'insan', x: 63, y: 60, baslik: 'Nüfusun toplandığı yer', metin: 'Kıyı ovaları ve akarsu havzaları parlak görünür; insan yerleşmesi doğal koşulun bıraktığı boşluğa yerleşir.' },
      { id: 'nil', katman: 'insan', x: 66, y: 84, baslik: 'İnce yeşil şerit', metin: 'Çölün ortasındaki ince yeşil hat bir akarsuyun tarım ve yerleşmeyi nasıl tek çizgide topladığını gösterir.' },
    ],
  },

  gezegen: {
    zemin: 'dunya',
    baslik: 'Şekil ve hareket, ritmi kurar',
    katmanlar: [
      { id: 'sekil', ad: 'Şekil', aciklama: 'Küre biçimi, ışınların her enleme farklı açıyla gelmesine yol açar.' },
      { id: 'aydinlanma', ad: 'Aydınlanma', aciklama: 'Gece ile gündüzün sınırı, Dünya’nın kendi ekseni etrafındaki dönüşünün kanıtıdır.' },
      { id: 'mevsim', ad: 'Mevsim', aciklama: 'Eksen eğikliği, ışın açısını yıl boyunca değiştirir; mevsim buradan doğar.' },
    ],
    odaklar: [
      { id: 'kavis', katman: 'sekil', x: 50, y: 13, baslik: 'Ufkun kavisi', metin: 'Kenardaki eğrilik Dünya’nın geoit biçimini gösterir. Bu biçim yüzünden ışın ekvatorda dik, kutupta yatık gelir.' },
      { id: 'kutup-yon', katman: 'sekil', x: 72, y: 14, baslik: 'Kuzeye doğru daralma', metin: 'Yüksek enlemlerde aynı alan görüntüde daralır. Küreyi düzleme aktarınca bozulma da buradan başlar.' },
      { id: 'terminator', katman: 'aydinlanma', x: 88, y: 30, baslik: 'Aydınlanma çemberi', metin: 'Sağdaki parlak kenar, gündüzden geceye geçiş çizgisidir. Bu çizgi durmaz; dünya döndükçe batıya doğru ilerler.' },
      { id: 'golge-yon', katman: 'aydinlanma', x: 78, y: 62, baslik: 'Aynı anda farklı saat', metin: 'Aynı karede bir yerde öğle, bir yerde akşam vardır. Yerel saat farkının nedeni budur.' },
      { id: 'donence', katman: 'mevsim', x: 40, y: 80, baslik: 'Dönenceler arası kuşak', metin: 'Yıl boyunca dik ışın alan tek kuşak burasıdır; sıcaklığın yıllık değişimi de en az burada olur.' },
      { id: 'orta-kusak', katman: 'mevsim', x: 52, y: 40, baslik: 'Dört mevsimin görüldüğü kuşak', metin: 'Orta kuşakta ışın açısı yıl içinde çok değişir; mevsim farkı bu yüzden en belirgin burada yaşanır.' },
    ],
  },

  konum: {
    zemin: 'dunya',
    baslik: 'Konum: iki ayrı soru, iki ayrı cevap',
    katmanlar: [
      { id: 'matematik', ad: 'Matematik konum', aciklama: 'Enlem ve boylam; değişmeyen, sayısal, herkes için aynı tarif.' },
      { id: 'goreceli', ad: 'Göreceli konum', aciklama: 'Komşuluk, denizellik, geçiş yolu; zamanla ve bakışa göre değişebilen tarif.' },
      { id: 'saat', ad: 'Yerel saat', aciklama: 'Boylam farkı doğrudan saat farkı demektir; enlemin saatle ilgisi yoktur.' },
    ],
    odaklar: [
      { id: 'ekvator-uzak', katman: 'matematik', x: 44, y: 87, baslik: 'Enlem: ışın açısı', metin: 'Ekvatora yaklaştıkça ışın dikleşir. Enlem, bir yerin sıcaklık ve iklim çerçevesini belirleyen matematik veridir.' },
      { id: 'anadolu-koordinat', katman: 'matematik', x: 63, y: 60, baslik: 'Türkiye’nin çerçevesi', metin: 'Türkiye orta kuşakta, 36°–42° kuzey enlemleri arasındadır. Dört mevsimin görülmesi bu matematik konumun sonucudur.' },
      { id: 'bogazlar', katman: 'goreceli', x: 58, y: 55, baslik: 'Geçiş noktası olmak', metin: 'Boğazlar iki denizi ve iki kıtayı bağlar. Bu bir koordinat değil, komşuluğun ürettiği göreceli konum avantajıdır.' },
      { id: 'denizellik', katman: 'goreceli', x: 33, y: 55, baslik: 'Denize kıyısı olmak', metin: 'Aynı enlemdeki iki yerden denize yakın olanın yıllık sıcaklık farkı daha azdır. Enlem aynı, sonuç farklı.' },
      { id: 'boylam-farki', katman: 'saat', x: 88, y: 30, baslik: 'Doğuda önce sabah', metin: 'Doğudaki boylam güneşi önce görür. 15°’lik her boylam farkı 1 saatlik yerel saat farkı demektir.' },
      { id: 'ayni-boylam', katman: 'saat', x: 47, y: 24, baslik: 'Aynı boylam, aynı saat', metin: 'Kuzeydeki ve güneydeki iki yer aynı boylamdaysa yerel saatleri eşittir; enlemleri farklı olsa bile.' },
    ],
  },

  'harita-bilgisi': {
    zemin: 'yeryuzu',
    baslik: 'Aynı arazi, üç ayrı gösterim',
    katmanlar: [
      { id: 'egim', ad: 'Eğim', aciklama: 'Haritada izohipslerin sıklığı, arazide yamacın dikliğine karşılık gelir.' },
      { id: 'kesit', ad: 'Kesit', aciklama: 'İki nokta arasına çizilen hat, arazinin yandan görünüşünü verir.' },
      { id: 'olcek', ad: 'Ölçek', aciklama: 'Küçültme oranı büyüdükçe alan büyür, ayrıntı azalır.' },
    ],
    odaklar: [
      { id: 'dik-yamac', katman: 'egim', x: 14, y: 14, baslik: 'İzohipsler burada sıklaşır', metin: 'Karlı zirvelerin yamacı çok diktir. Bu arazi haritaya geçtiğinde eğri çizgiler burada üst üste binecek kadar sıklaşır.' },
      { id: 'yatik-yamac', katman: 'egim', x: 84, y: 14, baslik: 'İzohipsler burada seyrekleşir', metin: 'Sağdaki geniş plato neredeyse düzdür. Aynı yükselti farkı çok uzun bir mesafeye yayıldığı için çizgiler seyrek olur.' },
      { id: 'kesit-hatti', katman: 'kesit', x: 45, y: 45, baslik: 'Kesit hattı seçimi', metin: 'Vadi tabanından zirveye çizilecek bir A–B hattı, profilde önce hızlı bir yükseliş sonra düzlük verir.' },
      { id: 'kabuk-kesiti', katman: 'kesit', x: 18, y: 78, baslik: 'Gerçek bir kesit', metin: 'Öndeki kesilmiş kütle, tabakaların yandan görünüşüdür. Topoğrafik profil de arazinin böyle bir yan görünüşüdür.' },
      { id: 'genellestirme', katman: 'olcek', x: 68, y: 62, baslik: 'Küçük ölçekte kaybolur', metin: 'Deltadaki bu ince kollar büyük ölçekli haritada tek tek çizilir; küçük ölçekli haritada tek bir leke olur.' },
      { id: 'kapsam', katman: 'olcek', x: 88, y: 40, baslik: 'Ne kadar alan görünüyor?', metin: 'Bu kadar geniş bir alanı tek sayfaya sığdırmak küçük ölçek gerektirir; ayrıntıdan vazgeçmek zorunludur.' },
    ],
  },

  iklim: {
    zemin: 'atmosfer',
    baslik: 'İklim, enerji ve suyun dolaşımıdır',
    katmanlar: [
      { id: 'enerji', ad: 'Enerji', aciklama: 'Güneşten gelen enerji yüzeyleri farklı ısıtır; basınç farkının ve rüzgârın ilk adımı budur.' },
      { id: 'nem', ad: 'Nem', aciklama: 'Su yüzeyinden atmosfere taşınan nem, bulut ve yağış için gerekli malzemeyi sağlar.' },
      { id: 'yagis', ad: 'Yağış', aciklama: 'Yükselen havanın soğuması yağış üretir; dağın iki yamacı bu yüzden farklıdır.' },
    ],
    odaklar: [
      { id: 'gunes', katman: 'enerji', x: 8, y: 57, baslik: 'Enerji kaynağı', metin: 'Ufuktaki Güneş, ışınları çok yatık gönderiyor. Aynı enerji geniş alana yayıldığı için birim alana düşen ısı azalır.' },
      { id: 'baki', katman: 'enerji', x: 62, y: 60, baslik: 'Yeşil yamaç', metin: 'Denize bakan yamaç hem daha nemli hem daha serin. Bakı ve nem birlikte bitki örtüsünü belirliyor.' },
      { id: 'buharlasma', katman: 'nem', x: 18, y: 63, baslik: 'Buharlaşma sütunları', metin: 'Deniz yüzeyinden yükselen buhar sütunları, havanın mutlak nemini artıran kaynağı doğrudan gösteriyor.' },
      { id: 'bulut-gelisimi', katman: 'nem', x: 36, y: 45, baslik: 'Bulut nasıl büyür', metin: 'Nemli hava yükselip soğudukça doygunluğa ulaşır; kümülüsler kıyıdan dağa doğru sıralanarak büyür.' },
      { id: 'yagis-perdesi', katman: 'yagis', x: 56, y: 42, baslik: 'Yağış perdesi', metin: 'Buluttan inen dikey çizgiler yağıştır ve tam dağın deniz tarafına düşüyor. Buna orografik (yamaç) yağış denir.' },
      { id: 'yagis-golgesi', katman: 'yagis', x: 84, y: 70, baslik: 'Yağış gölgesi', metin: 'Dağı aşan hava alçalırken ısınır ve kurur. Sağdaki kahverengi vadi aynı dağın diğer yüzündedir.' },
    ],
  },

  yerkure: {
    zemin: 'yeryuzu',
    baslik: 'İç kuvvet yapar, dış kuvvet bozar',
    katmanlar: [
      { id: 'ic', ad: 'İç kuvvet', aciklama: 'Kıvrılma, kırılma ve yükselme yeryüzünün ana iskeletini kurar.' },
      { id: 'asinim', ad: 'Aşınım', aciklama: 'Akarsu, buzul ve rüzgâr yüksek alanı keser; malzemeyi eğim boyunca taşır.' },
      { id: 'birikim', ad: 'Birikim', aciklama: 'Taşıma gücü düşünce malzeme bırakılır; ova, taraça ve delta böyle oluşur.' },
    ],
    odaklar: [
      { id: 'kivrim', katman: 'ic', x: 58, y: 30, baslik: 'Kıvrılmış tabakalar', metin: 'Sırtlardaki dalgalı desen, tabakaların yatay sıkışmayla kıvrıldığını gösterir. Bu bir dış kuvvet işi değildir.' },
      { id: 'yukselme', katman: 'ic', x: 14, y: 13, baslik: 'Yükselmiş kütle', metin: 'Karlı zirveler tektonik yükselmenin ürünüdür. Yükselti arttıkça akarsuyun aşındırma gücü de artar.' },
      { id: 'vadi', katman: 'asinim', x: 33, y: 22, baslik: 'Aşındırma koridoru', metin: 'Akarsu yüksek alanda derine aşındırır; vadi burada dar ve keskindir.' },
      { id: 'menderes', katman: 'asinim', x: 45, y: 45, baslik: 'Eğim azalıyor', metin: 'Eğim düşünce akarsu kıvrılmaya başlar. Dış kıyıda aşındırır, iç kıyıda biriktirir; menderes böyle büyür.' },
      { id: 'delta', katman: 'birikim', x: 70, y: 62, baslik: 'Delta', metin: 'Denize ulaşan akarsu hızını kaybeder; taşıdığı ince malzemeyi bırakır ve kıyıda yeni kara üretir.' },
      { id: 'sig-deniz', katman: 'birikim', x: 82, y: 55, baslik: 'Bulanık sığ su', metin: 'Kıyı önündeki açık renk, askıdaki malzemedir. Birikim denizin içinde de sürer.' },
    ],
  },

  'yasam-kusaklari': {
    zemin: 'atmosfer',
    baslik: 'Su, toprak ve bitki aynı iklimin izidir',
    katmanlar: [
      { id: 'havza', ad: 'Havza', aciklama: 'Yağışın toplandığı alan ile akarsuyun beslendiği alan aynıdır.' },
      { id: 'toprak', ad: 'Toprak', aciklama: 'Toprak; iklim, ana kaya, eğim ve zamanın ortak ürünüdür.' },
      { id: 'bitki', ad: 'Bitki', aciklama: 'Bitki örtüsü iklimin en görünür göstergesidir; sınırı iklim çizer.' },
    ],
    odaklar: [
      { id: 'akarsu-havza', katman: 'havza', x: 82, y: 74, baslik: 'Akarsuyu besleyen alan', metin: 'Vadi tabanındaki akarsu, yamaçlara düşen yağışın toplanmasıyla oluşur. Su bölümü çizgisi zirvelerden geçer.' },
      { id: 'kar-deposu', katman: 'havza', x: 71, y: 45, baslik: 'Kar, gecikmeli su', metin: 'Zirvedeki kar kışın biriken sudur; ilkbaharda eridiğinde akarsuyun debisi yükselir. Rejim buradan doğar.' },
      { id: 'yamac-toprak', katman: 'toprak', x: 60, y: 66, baslik: 'Eğimli yamaçta ince toprak', metin: 'Dik yamaçta malzeme durmadan aşağı taşınır; toprak katmanı ince kalır. Aynı iklimde bile eğim toprağı değiştirir.' },
      { id: 'taban-toprak', katman: 'toprak', x: 79, y: 79, baslik: 'Vadi tabanında kalın toprak', metin: 'Yamaçtan taşınan malzeme tabanda birikir. Tarımın vadi tabanlarında yoğunlaşmasının nedeni budur.' },
      { id: 'orman', katman: 'bitki', x: 55, y: 63, baslik: 'Yağış alan yüz: orman', metin: 'Denize bakan nemli yamaç gür ve yeşil. Aynı dağda bitki örtüsünün sınırını yağış çiziyor.' },
      { id: 'bozkir', katman: 'bitki', x: 88, y: 62, baslik: 'Yağış gölgesi: bozkır', metin: 'Kurak yüzde ağaç yerine seyrek ot örtüsü var. Toprak da, bitki de aynı iklim farkını kaydediyor.' },
    ],
  },

  nufus: {
    zemin: 'beseri',
    baslik: 'Nüfus rastgele dağılmaz',
    katmanlar: [
      { id: 'yogunluk', ad: 'Yoğunluk', aciklama: 'Aynı karede kilometrekareye düşen insan sayısı yer yer onlarca kat değişir.' },
      { id: 'etken', ad: 'Etkenler', aciklama: 'Yükselti, su, düzlük ve iş olanağı dağılışı birlikte açıklar.' },
      { id: 'sinir', ad: 'Kanıtın sınırı', aciklama: 'Bir fotoğraf yoğunluğu gösterir; gelirin ya da yaş yapısının kanıtı değildir.' },
    ],
    odaklar: [
      { id: 'cekirdek', katman: 'yogunluk', x: 71, y: 18, baslik: 'Kent çekirdeği', metin: 'Gökdelenlerin toplandığı alanda hem bina yoğunluğu hem gece ışık yoğunluğu en yüksek. Nüfus burada dikeyde birikiyor.' },
      { id: 'kirsal', katman: 'yogunluk', x: 14, y: 45, baslik: 'Kırsal seyreklik', metin: 'Aynı büyüklükteki tarım alanında birkaç ışık var. Alan eşit, insan sayısı değil: yoğunluk farkı budur.' },
      { id: 'duzluk', katman: 'etken', x: 45, y: 62, baslik: 'Düzlük ve su', metin: 'Yerleşme akarsuyun iki yakasındaki düzlüğü izliyor. Eğim arttığı yerde yapı seyrekleşiyor.' },
      { id: 'is', katman: 'etken', x: 90, y: 50, baslik: 'İş olanağı', metin: 'Liman ve sanayi alanı çevresinde konut dokusu sıklaşır. Nüfusu çeken şey yalnız doğa değil, iştir.' },
      { id: 'dag-arka', katman: 'sinir', x: 18, y: 13, baslik: 'Kanıtın bittiği yer', metin: 'Arkadaki dağlarda ışık yok; “burada kimse yaşamıyor” denemez. Görünmeyen, yok demek değildir.' },
      { id: 'yas-yapisi', katman: 'sinir', x: 56, y: 30, baslik: 'Fotoğrafın söylemediği', metin: 'Bu görüntü yoğunluğu verir; doğum oranını, yaş yapısını ve göç yönünü vermez. Onlar için piramit ve tablo gerekir.' },
    ],
  },

  yerlesme: {
    zemin: 'beseri',
    baslik: 'Yerleşme bir karardır',
    katmanlar: [
      { id: 'kurulus', ad: 'Kuruluş yeri', aciklama: 'Su, eğim, zemin ve ulaşım birlikte “burası” dedirtir.' },
      { id: 'doku', ad: 'Doku', aciklama: 'Toplu, dağınık ve çizgisel doku arazinin izini taşır.' },
      { id: 'islev', ad: 'İşlev', aciklama: 'Kentin ne iş yaptığı, siluetinden ve çevresindeki tesislerden okunur.' },
    ],
    odaklar: [
      { id: 'kiyi', katman: 'kurulus', x: 80, y: 22, baslik: 'Doğal liman', metin: 'Kent, korunaklı bir koyun kenarında büyümüş. Deniz ulaşımı kuruluş yerinin en güçlü gerekçesi.' },
      { id: 'gecit', katman: 'kurulus', x: 44, y: 40, baslik: 'Akarsu geçişi', metin: 'Köprünün olduğu yerde yol ve yerleşme sıklaşır. Geçiş noktası, yerleşmeyi kendine çeker.' },
      { id: 'daginik', katman: 'doku', x: 12, y: 60, baslik: 'Dağınık doku', metin: 'Tarım alanları arasında tek tek evler var. Su ve arazi her yere dağıldığında yerleşme de dağılır.' },
      { id: 'cizgisel', katman: 'doku', x: 48, y: 84, baslik: 'Çizgisel doku', metin: 'Otoyol boyunca uzanan yapı dizisi, dokunun ulaşım hattını izlediğini gösterir.' },
      { id: 'silüet', katman: 'islev', x: 71, y: 18, baslik: 'Yönetim ve ticaret', metin: 'Yüksek yapıların bir noktada toplanması merkezî iş alanına işaret eder: yönetim, finans ve ticaret işlevi.' },
      { id: 'sanayi', katman: 'islev', x: 60, y: 82, baslik: 'Üretim alanı', metin: 'Geniş çatılı tesisler ve panel alanı kent çeperine yerleşmiş. Sanayi ucuz araziyi ve ana yolu ister.' },
    ],
  },

  ekonomi: {
    zemin: 'beseri',
    baslik: 'Üretim bir ağdır',
    katmanlar: [
      { id: 'uretim', ad: 'Üretim', aciklama: 'Tarım, sanayi ve hizmet aynı mekânda iç içedir.' },
      { id: 'ulasim', ad: 'Ulaşım', aciklama: 'Yük ne kadar ağır ve ucuzsa taşıma o kadar yavaş türü seçer.' },
      { id: 'enerji', ad: 'Enerji', aciklama: 'Enerji yatırımı doğal potansiyel kadar iletim ağına ve pazara da bağlıdır.' },
    ],
    odaklar: [
      { id: 'tarim', katman: 'uretim', x: 14, y: 45, baslik: 'I. sektör', metin: 'Düzenli parseller sulanabilir tarım alanıdır. Ürün buradan çıkar; değer zincirinin ilk halkası.' },
      { id: 'fabrika', katman: 'uretim', x: 58, y: 74, baslik: 'II. sektör', metin: 'Geniş çatılı tesisler hammaddeyi ürüne çevirir. Ana yola ve limana yakınlık tesadüf değildir.' },
      { id: 'liman', katman: 'ulasim', x: 92, y: 50, baslik: 'Liman düğümü', metin: 'Vinçler ve konteyner sahası, kara ile deniz yolunun buluştuğu noktadır. Ağır ve hacimli yük burada el değiştirir.' },
      { id: 'otoyol', katman: 'ulasim', x: 48, y: 88, baslik: 'Kara yolu', metin: 'Otoyol kapıdan kapıya taşır; hızlıdır ama birim maliyeti deniz yolundan yüksektir.' },
      { id: 'ruzgar', katman: 'enerji', x: 78, y: 70, baslik: 'Rüzgâr santrali', metin: 'Türbinler kıyıdaki açık ve rüzgârlı sırta kurulmuş. Yenilenebilir olması “etkisiz” olması demek değildir; arazi ve iletim gerektirir.' },
      { id: 'gunes', katman: 'enerji', x: 61, y: 83, baslik: 'Güneş tarlası', metin: 'Panel alanı düz, açık ve tüketim merkezine yakın araziyi seçmiş. Enerji üretildiği yerde değil, iletilebildiği yerde işe yarar.' },
    ],
  },

  afet: {
    zemin: 'risk',
    baslik: 'Afet, tehlikenin topluma çarpmasıdır',
    katmanlar: [
      { id: 'tehlike', ad: 'Tehlike', aciklama: 'Fay, taşkın, heyelan ve yangın olasılığı doğal sürecin nerede etkili olabileceğini gösterir.' },
      { id: 'maruziyet', ad: 'Maruziyet', aciklama: 'Nüfusun ve yapının tehlike alanında bulunması olası kaybın ölçeğini büyütür.' },
      { id: 'direnc', ad: 'Direnç', aciklama: 'Planlama, erken uyarı ve doğal örtü riski azaltır; hiçbiri tek başına yetmez.' },
    ],
    odaklar: [
      { id: 'fay', katman: 'tehlike', x: 72, y: 62, baslik: 'Yüzey faylanması', metin: 'Tarlaları boydan boya kesen yarık, bir yüzey kırığıdır. Fayın izi arazide görünür; yerleşme kararı bunu görmezden gelemez.' },
      { id: 'yangin', katman: 'tehlike', x: 61, y: 17, baslik: 'Yamaçta yangın', metin: 'Duman, örtüsü kuruyan yamaçtan yükseliyor. Yangın sonrası çıplak yamaç bu kez heyelan ve sel tehlikesini artırır.' },
      { id: 'taskin-kent', katman: 'maruziyet', x: 28, y: 55, baslik: 'Taşkın düzlüğündeki kent', metin: 'Kent akarsuyun doğal yayılma alanına kurulmuş. Aynı yağış, boş bir düzlükte olay; burada afet olur.' },
      { id: 'kritik-tesis', katman: 'maruziyet', x: 80, y: 60, baslik: 'Fayın üstündeki tesis', metin: 'Kritik bir tesis kırık hattının hemen yanında. Hastane, enerji ve iletişim yapılarının yeri ayrı karar ister.' },
      { id: 'baraj', katman: 'direnc', x: 29, y: 17, baslik: 'Baraj tek başına çözüm değil', metin: 'Baraj debiyi düzenler ama taşkın riskini sıfırlamaz; alt havzadaki yapılaşma sürerse risk geri gelir.' },
      { id: 'pylon', katman: 'direnc', x: 89, y: 76, baslik: 'Hattın kırığı geçtiği yer', metin: 'Enerji hattı fayı dik kesiyor. Bir kopma tek noktada değil, bütün havzada hizmet kesintisi demektir.' },
    ],
  },

  pusula: {
    zemin: 'dunya',
    baslik: 'Aynı görüntü, doğru soru',
    katmanlar: [
      { id: 'gorulen', ad: 'Görülen', aciklama: 'Görüntüde doğrudan okunabilen şey.' },
      { id: 'cikarim', ad: 'Çıkarım', aciklama: 'Görülenden mantıkla türetilebilen şey.' },
      { id: 'asan', ad: 'Kanıtı aşan', aciklama: 'Görüntünün asla kanıtlayamayacağı şey — sınav tuzağı tam burada.' },
    ],
    odaklar: [
      { id: 'renk', katman: 'gorulen', x: 40, y: 84, baslik: 'Renk bir veridir', metin: 'Açık kahverengi geniş alan, bitki örtüsünün seyrek olduğunu gösterir. Bu doğrudan görülendir.' },
      { id: 'bulut', katman: 'gorulen', x: 19, y: 40, baslik: 'Bulut bir veridir', metin: 'Sarmal bulut kütlesi o anda orada bir alçak basınç sistemi olduğunu gösterir.' },
      { id: 'iklim-cikarim', katman: 'cikarim', x: 47, y: 60, baslik: 'Buradan çıkarılabilir', metin: 'Deniz kıyısındaki yeşil şeritten “kıyı kesim daha nemli” çıkarımı yapılabilir; bu görülenle uyumludur.' },
      { id: 'yerlesme-cikarim', katman: 'cikarim', x: 66, y: 84, baslik: 'Buradan da çıkarılabilir', metin: 'Çöl ortasındaki yeşil hattın çevresinde yerleşmenin toplandığı sonucuna varılabilir; su tek sınırlayıcıdır.' },
      { id: 'gelismislik', katman: 'asan', x: 63, y: 60, baslik: 'Buradan çıkarılamaz', metin: '“Bu ülke gelişmiştir” denemez. Görüntü gelişmişlik göstergesi taşımaz; bu kanıtı aşan bir yargıdır.' },
      { id: 'nufus-sayisi', katman: 'asan', x: 52, y: 40, baslik: 'Bu da çıkarılamaz', metin: '“Nüfusu şu kadardır” denemez. Görüntü dağılışı gösterir, sayıyı vermez.' },
    ],
  },

  kamp: {
    zemin: 'risk',
    baslik: 'Karışık tur: hangi kanıt isteniyor?',
    katmanlar: [
      { id: 'dogal', ad: 'Doğal kanıt', aciklama: 'Yer şekli, akarsu, eğim ve örtüden okunanlar.' },
      { id: 'beseri', ad: 'Beşerî kanıt', aciklama: 'Yerleşme, ulaşım ve arazi kullanımından okunanlar.' },
      { id: 'karar', ad: 'Karar', aciklama: 'İki kanıt birleştiğinde sorulan asıl soru: ne yapılmalı?' },
    ],
    odaklar: [
      { id: 'orgu', katman: 'dogal', x: 42, y: 32, baslik: 'Örgülü akarsu', metin: 'Kanalların bölünüp birleşmesi, eğimin azaldığını ve akarsuyun malzeme biriktirdiğini gösterir.' },
      { id: 'yamac', katman: 'dogal', x: 85, y: 30, baslik: 'Aşınmış yamaç', metin: 'Yamaçtaki derin yarıklar yüzey akışının toprağı taşıdığını gösterir; örtü zayıfladıkça erozyon hızlanır.' },
      { id: 'kopru', katman: 'beseri', x: 33, y: 68, baslik: 'Köprü ve yol', metin: 'Yerleşme iki yakayı köprüyle bağlamış. Ulaşım hattı koptuğunda kent ikiye ayrılır.' },
      { id: 'parsel', katman: 'beseri', x: 12, y: 62, baslik: 'Tarım parselleri', metin: 'Düzenli parseller sulanabilir taban arazidir. Aynı arazi hem en verimli hem en riskli olabilir.' },
      { id: 'yer-secimi', katman: 'karar', x: 80, y: 60, baslik: 'Nereye yapılmalı?', metin: 'Yeni bir hastane için fay hattının yanı mı, taşkın düzlüğü mü, yoksa ikisinin dışı mı? Karar iki kanıtı birlikte ister.' },
      { id: 'oncelik', katman: 'karar', x: 29, y: 17, baslik: 'Hangisi önce?', metin: 'Baraj, taşkın planı ve yangın hazırlığı aynı bütçeyi ister. Risk önceliği; olasılık ile olası kaybın çarpımıdır.' },
    ],
  },
}

/** Geriye dönük uyum: eski `COGRAFYA_SAHNELERI` adıyla erişim. */
export const COGRAFYA_SAHNELERI = ZEMINLER

/**
 * Bir bölgenin sahnesi: zemin görseli + bölgeye özel katman ve odaklar.
 */
export function bolgeSahnesi(kod) {
  const sahne = BOLGE_SAHNELERI[kod] ?? BOLGE_SAHNELERI.sistemler
  const zemin = ZEMINLER[sahne.zemin] ?? ZEMINLER.dunya
  return {
    kod,
    zeminKodu: sahne.zemin,
    src: zemin.src,
    alt: zemin.alt,
    baslik: sahne.baslik,
    katmanlar: sahne.katmanlar,
    odaklar: sahne.odaklar,
    ilkKatman: sahne.katmanlar[0].id,
  }
}
