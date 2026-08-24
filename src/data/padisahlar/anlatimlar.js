/**
 * PADİŞAH SESLİ ANLATIM METİNLERİ
 * ==================================================================
 *
 * TEMEL KURAL — SES EKRANI OKUMAZ.
 * Ekranda zaten padişahın adı, saltanat yılları, olay başlıkları,
 * tarihler, savaş adları ve haritadaki genişleme/daralma görünür.
 * Buradaki metin bunları TEKRAR ETMEZ; üzerine ikinci bir katman
 * kurar: olayın nedenini, sonucunu ve dönemin karakterini anlatır.
 *
 * Yazarken uygulanan kontrol:
 *   "Bu cümleyi izleyici ekrandan zaten öğreniyor mu?"
 *   Cevap evet ise cümle yeniden yazıldı veya çıkarıldı.
 *
 * Hedef: sesi kapatan ekrandan olayları, ekranı görmeyen sesten
 * dönemin hikâyesini anlasın; ikisi birlikte tekrar değil bütünlük
 * hissi versin.
 *
 * BİÇİM KURALLARI
 *  • Türkçe, belgesel anlatıcısı tonu. Destansı/milliyetçi dil yok.
 *  • Tartışmalı konularda kesin hüküm yok ("kaynaklar birleşmez").
 *  • Kısa–orta cümle; seslendirmede doğal duyulmalı.
 *  • Roma rakamı ve parantez kullanılmaz; kulak için yazılır.
 *  • Süre alanı yazılmaz — `padisahAnlatim.js` metinden hesaplar
 *    (dakikada 150 kelime). Metin değişince süre kendiliğinden
 *    güncellenir, elle senkron tutulacak ikinci bir sayı olmaz.
 *
 * `kind` alanı: intro → açılış, reign → dönemin ana yönü,
 * event → olayın anlamı, transition → sonraki döneme geçiş.
 * `targetId` ilgili olay kaydının kimliğidir; harita/animasyon
 * senkronu geliştikçe kullanılacaktır.
 *
 * İlk üç padişahın anlatımı kendi dosyalarındadır. Buradaki kayıt
 * `tamHanedan.js` içindeki otomatik üretilmiş taslak metnin yerine
 * geçer; kaydı olmayan padişah taslakla çalışmaya devam eder.
 */

/** @type {Record<string, Array<{id: string, kind: string, targetId?: string, text: string}>>} */
export const ANLATIMLAR = {
  'yildirim-bayezid': [
    { id: 'yildirim-bayezid-a1', kind: 'intro', text: 'Bir devletin imparatorluğa en çok yaklaştığı yıllarla, yok olmanın eşiğine geldiği yıllar aynı hükümdarın dönemine sığabilir mi? Yıldırım Bayezid’in saltanatı tam olarak bunun hikâyesidir.' },
    { id: 'yildirim-bayezid-a2', kind: 'reign', text: 'Tahtı bir savaş meydanında devraldı. Devraldığı devlet artık sınır boylarında akın yapan bir beylik değildi. Ama batıdaki üstünlüğü henüz kalıcı değildi ve arkasında, kendisiyle boy ölçüşebilecek rakiplerden oluşan parçalı bir Anadolu duruyordu.' },
    { id: 'yildirim-bayezid-a3', kind: 'reign', text: 'Bayezid’in tercihi netti. Selefleri burada çoğunlukla bağlılık yemini ile yetinirken, o doğrudan yönetimi seçti. Amacı yalnızca toprak kazanmak değildi; batıdaki gücünün arkasında tek merkezden yönetilen bütünlüklü bir üs kurmak istiyordu. Bu ona kısa sürede büyük bir askerî kaynak kazandırdı.' },
    { id: 'yildirim-bayezid-a4', kind: 'event', targetId: 'yildirim-bayezid-2', text: 'İlerleyişi artık yalnızca komşularının meselesi olmaktan da çıkmıştı. Tuna boyunda karşısına çıkarılan ordu, Avrupa’nın bu genişlemeyi geri püskürtmek için giriştiği en ciddi denemelerden biriydi. Sonucu uzun süre unutulmadı: tek bir ittifak bu gidişi durdurmaya yetmiyordu.' },
    { id: 'yildirim-bayezid-a5', kind: 'event', text: 'Topraklarının ortasında kalan o eski başkenti de kuşattı. Surları aşacak araç yoktu; bu yüzden şehri almak yerine boğmayı denedi.' },
    { id: 'yildirim-bayezid-a6', kind: 'event', targetId: 'yildirim-bayezid-3', text: 'Ancak bu kadar hızlı bir merkezileşmenin bedeli vardı. Yönetimlerini kaybeden beyler doğuya sığındı ve orada, çağının en güçlü hükümdarına başvurdular. Onun gözünde, himayesindekileri ortadan kaldıran bir komşu artık bir meydan okumaydı. İki ordu karşı karşıya geldiğinde, eski beyliklerin askerlerinin bir bölümü saf değiştirdi. Yenilgi bu yüzden bu kadar ağır oldu.' },
    { id: 'yildirim-bayezid-a7', kind: 'transition', text: 'Dikkat çekici olan şudur: doğuda kurulan birlik neredeyse bir günde dağılırken, batıdaki topraklar büyük ölçüde yerinde kaldı. Geriye tahtı üzerinde mücadele eden oğullar ve artık ne kadar büyüyeceği değil, var olmayı sürdürüp sürdüremeyeceği sorulan bir devlet kaldı.' },
  ],

  'celebi-mehmed': [
    { id: 'celebi-mehmed-a1', kind: 'intro', text: 'Bir devlet, hükümdarını kaybettikten ve toprakları paylaşıldıktan sonra nasıl yeniden bir araya gelir? Bu dönemin asıl konusu fetih değil, dağılmış bir siyasi yapının yeniden kurulmasıdır.' },
    { id: 'celebi-mehmed-a2', kind: 'reign', text: 'Kardeşler arasındaki mücadele yıllarca sürdü. Ama dikkat çekici olan şudur: bu süre boyunca hanedanın yerini alacak başka bir aile çıkmadı. Batıdaki toprak sahipleri ve uç beyleri düzenin sürmesinden yanaydı; doğuda yeniden kurulan beylikler ise birbirleriyle uğraşacak kadar zayıftı. Kazanan kardeş, yıkılmış değil dağılmış bir mirası devraldı.' },
    { id: 'celebi-mehmed-a3', kind: 'reign', text: 'Bu yüzden onun döneminde harita neredeyse hiç büyümez. Bu bir başarısızlık değil, bilinçli bir tercihtir. Öncelik hazineyi, toprak kayıtlarını ve askerî düzeni yeniden işler hâle getirmekti. Komşularıyla, özellikle deniz gücü elinde olanlarla gereksiz bir çatışmaya girmemeye özen gösterdi. Devlet toparlanana kadar zaman kazanmak, toprak kazanmaktan değerliydi.' },
    { id: 'celebi-mehmed-a35', kind: 'event', targetId: 'celebi-mehmed-3', text: 'Yine de denizde girilen ilk ciddi karşılaşma bir gerçeği açıkça gösterdi: Osmanlı karada güçlüydü, ama denizde henüz rakiplerinin epeyce gerisindeydi. Bu ders unutulmadı; donanma meselesi sonraki padişahların gündeminden hiç düşmedi.' },
    { id: 'celebi-mehmed-a4', kind: 'event', targetId: 'celebi-mehmed-2', text: 'Ama uzun kargaşanın izleri kolay silinmedi. Vergi düzeni bozulmuş, topraklar sahip değiştirmiş, insanlar merkezî otoriteye güvenini yitirmişti. Bu yıllarda çıkan büyük ayaklanma yalnızca bir inanç meselesi değildi; toprak, adalet ve düzen talebinin de karıştığı toplumsal bir patlamaydı. Bastırılması, merkezin gücünü geri kazandığının işaretiydi.' },
    { id: 'celebi-mehmed-a5', kind: 'transition', text: 'Kısa bir saltanattı ve kazanılmış büyük zaferlerle anılmaz. Yine de kendisinden sonra gelen padişahın artık savunmayı değil yeniden genişlemeyi düşünebilmesi, bu yılların eseridir. Devlet ikinci kez kurulmuştu.' },
  ],

  'ikinci-murad': [
    { id: 'ikinci-murad-a1', kind: 'intro', text: 'Osmanlı’nın Avrupa’daki varlığı kalıcı mıydı, yoksa geri çevrilebilir bir işgal miydi? Bu dönem, sorunun cevabının verildiği yıllardır.' },
    { id: 'ikinci-murad-a2', kind: 'reign', targetId: 'ikinci-murad-1', text: 'Tahta genç yaşta çıktı ve ilk yıllarını kendi hanedanından gelen taht iddialarıyla uğraşarak geçirdi. Bu iddiaları destekleyen güç çoğu zaman komşularıydı; çünkü Osmanlı ailesini içeriden bölmek, onunla savaşmaktan çok daha ucuza geliyordu.' },
    { id: 'ikinci-murad-a3', kind: 'reign', text: 'Bu tecrübe onun siyasetini şekillendirdi. Kazanabileceği savaşları bile pazarlıkla bitirmeyi, sınırları antlaşmayla sabitlemeyi tercih etti. Çağdaşlarının bile şaşırdığı bir şey yaptı: tahtı kendi isteğiyle bıraktı. Kaynaklar bunun nedeni konusunda birleşmez. Sınır boylarındaki bazı bölgeleri doğrudan yönetmek yerine vergi ve asker veren bağlı prenslikler hâlinde bırakmak da aynı anlayışın parçasıydı: gücü her yere yaymak yerine ucuz ve kalıcı biçimde kullanmak.' },
    { id: 'ikinci-murad-a4', kind: 'event', targetId: 'ikinci-murad-2', text: 'Ancak bu çekilme, dışarıda Osmanlı’nın zayıfladığı biçiminde okundu ve büyük bir sefer hazırlandı. Önce Tuna kıyısında, sonra Balkanların ortasında verilen mücadeleler, kıtanın Osmanlı’yı Avrupa’dan çıkarmak için giriştiği son ortak denemeler oldu.' },
    { id: 'ikinci-murad-a5', kind: 'event', targetId: 'ikinci-murad-3', text: 'Sonuç haritada büyük bir değişiklik yaratmadı. Değiştirdiği şey daha önemliydi: Balkanlardaki Osmanlı varlığı artık tartışılan değil, kabul edilmesi gereken bir gerçekti. Bundan sonra uzun süre saldırı değil savunma düşünüldü. Aynı yıllarda saray da bir karargâh olmaktan çıkıp medreseleri ve kütüphaneleriyle gerçek bir başkent hayatına kavuştu.' },
    { id: 'ikinci-murad-a6', kind: 'transition', text: 'Öldüğünde geride kalan yalnızca sınırlar değildi. Dolu bir hazine, tecrübeli bir ordu ve artık savunmayı değil çok daha büyük bir teşebbüsü düşünebilecek bir devlet vardı. O teşebbüsü oğlu yapacaktı.' },
  ],

  'fatih-sultan-mehmed': [
    { id: 'fatih-a1', kind: 'intro', text: 'Tek bir şehir, bir devletin kaderini bu kadar belirleyebilir mi? Bu dönemin cevabı açıktır.' },
    { id: 'fatih-a2', kind: 'reign', targetId: 'fatih-sultan-mehmed-1', text: 'Osmanlı toprakları uzun süredir tuhaf bir biçimde ikiye ayrılmıştı. Boğazların iki yakasında geniş topraklar vardı, ama tam ortalarında başka bir devletin başkenti duruyordu. Bu şehir yalnızca bir engel değildi; taht iddiacılarının sığınağı, düşman donanmalarının davetçisi ve Osmanlı’yı içeriden bölmek isteyen herkesin ilk adresiydi. Alınması, savunmayı bitirip merkezi kurmak demekti.' },
    { id: 'fatih-a3', kind: 'event', targetId: 'fatih-sultan-mehmed-2', text: 'Bundan sonra yapılanlar, hedefin ne kadar sistemli olduğunu gösterir. Kuzeyde ve doğuda geride kalan bağımsız kıyı şehirleri, ticaret kolonileri ve rakip hanedanlar birer birer ortadan kaldırıldı. Kuzeydeki deniz artık bir sınır değil, tek bir devletin denetlediği iç deniz hâline geldi; kıtalar arası ticaret yolları da aynı otoritenin eline geçti.' },
    { id: 'fatih-a4', kind: 'reign', text: 'Değişen sadece harita değildi. Hükümdar, beyleriyle aynı sofrada oturan bir uç lideri olmaktan çıktı ve protokolün arkasına çekildi. Devlet, örfî hukukun yazıya geçirildiği, memurun ve komutanın saray okullarında yetiştirildiği merkezî bir yapıya dönüştü. Bu düzenlemelerin bazı maddeleri, özellikle hanedan içi rekabetle ilgili olanı, kendi zamanında da sonrasında da tartışıldı.' },
    { id: 'fatih-a5', kind: 'event', text: 'Bu kadar hızlı bir dönüşümün bedeli maliyeydi. Kesintisiz sefer, büyük inşaatlar ve genişleyen merkez ordusu hazineyi zorladı; alınan mali tedbirler geride geniş bir hoşnutsuzluk bıraktı.' },
    { id: 'fatih-a6', kind: 'transition', text: 'Öldüğünde bir uç beyliğinin değil, üç kıtaya uzanmayı hedefleyen bir imparatorluğun kuralları yazılmıştı. Sıradaki soru artık ne kadar hızlı büyünebileceği değil, bu hızın sindirilip sindirilemeyeceğiydi.' },
  ],

  'ikinci-bayezid': [
    { id: 'ikinci-bayezid-a1', kind: 'intro', text: 'Bir devlet her zaman genişleyerek güçlenmez. Bazen kazandıklarını sindirmek için zamana ihtiyaç duyar. Bu dönem böyle bir dönemdir.' },
    { id: 'ikinci-bayezid-a2', kind: 'event', targetId: 'ikinci-bayezid-1', text: 'Tahta çıkışı bir aile meselesiyle gölgelendi. Kardeşiyle yaşadığı mücadele sıradan bir taht kavgası olarak kalmadı. Mağlup taraf ülke dışına çıkıp Avrupa’da bir devletin eline geçince, hanedanın iç sorunu dışarıdan kullanılan bir baskı aracına dönüştü. Yıllarca, batıya yönelik her hamlede bu ihtimal hesaba katıldı.' },
    { id: 'ikinci-bayezid-a3', kind: 'reign', targetId: 'ikinci-bayezid-3', text: 'Bu yüzden dönemin ilk yarısı ihtiyatlıdır. Yine de asıl dönüşüm sessizce denizde yaşandı. Donanma, asker taşıyan bir nakliye gücü olmaktan çıkıp savaşabilen bir filoya dönüştü; Akdeniz’de yetişmiş kaptanlar devlet hizmetine alındı. Batı kıyılarındaki limanlar bu yeni gücün ilk sınavı oldu.' },
    { id: 'ikinci-bayezid-a4', kind: 'event', targetId: 'ikinci-bayezid-2', text: 'Aynı yıllarda ülkeye dışarıdan büyük bir göç geldi. Batı Avrupa’dan sürülen Yahudi cemaatlerinin Osmanlı şehirlerine yerleştirilmesi, hem insani hem de ticari sonuçları olan bir tercihti; şehirlerin zanaat ve sermaye birikimini güçlendirdi.' },
    { id: 'ikinci-bayezid-a5', kind: 'reign', text: 'Ama asıl tehdit sınırda değil, zihinlerdeydi. Doğuda yükselen yeni bir hanedan, Anadolu’daki Osmanlı tebaasının bir bölümüne doğrudan hitap ediyordu. Bu bir toprak kaybı riski değil, sadakat kaybı riskiydi ve klasik askerî tedbirlerle çözülemiyordu.' },
    { id: 'ikinci-bayezid-a6', kind: 'transition', text: 'Dönemin gerilimi yaşlanan padişahın tercihiyle değil, ona rağmen çözüldü. Tahtı bırakmak zorunda kaldı; yerine, bekleyen bu sorunu çok daha sert bir yöntemle ele alacak bir hükümdar geçti.' },
  ],

  'yavuz-sultan-selim': [
    { id: 'yavuz-a1', kind: 'intro', text: 'Sekiz yıl, bir imparatorluğun ağırlık merkezini değiştirmeye yeter mi? Bu dönem, yeter cevabını veriyor.' },
    { id: 'yavuz-a2', kind: 'reign', text: 'Devraldığı en acil mesele bir sınır sorunu değildi. Doğuda kurulan yeni devlet hem siyasi hem dinî bir iddia taşıyordu ve Anadolu’daki Osmanlı tebaasının bir bölümüne ulaşabiliyordu. Yani bir cephe savaşından önce bir sadakat savaşı vardı.' },
    { id: 'yavuz-a3', kind: 'event', targetId: 'yavuz-sultan-selim-1', text: 'Doğuya yapılan sefer bu yüzden yalnızca askerî değildi. Kazanılan üstünlük Osmanlı’nın Anadolu üzerindeki hâkimiyetini tartışmaya kapadı ve doğu sınırını uzun süre belirleyecek çizgiyi kabaca ortaya koydu. Yine de rakip devlet ortadan kalkmadı; bu mücadele yüzyıllar boyunca sürecekti.' },
    { id: 'yavuz-a4', kind: 'event', targetId: 'yavuz-sultan-selim-3', text: 'Asıl büyük değişim güneyde yaşandı. Ard arda kazanılan iki savaşla bölgenin köklü devleti tarihe karıştı. Haritada Osmanlı sınırları Suriye ve Filistin üzerinden Nil vadisine, oradan Kızıldeniz kıyılarına uzandı. Devletin nüfusu, geliri ve dinî konumu aynı anda değişti.' },
    { id: 'yavuz-a5', kind: 'reign', text: 'Bunun anlamı önce ticarette görüldü: doğudan gelen baharat ve kumaş yollarının en önemli düğümleri artık tek bir yönetimin elindeydi. Kutsal şehirlerin korunma sorumluluğu da bu dönemde Osmanlı’ya geçti; hükümdarın İslam dünyasındaki konumu bundan sonra farklı okundu.' },
    { id: 'yavuz-a6', kind: 'transition', text: 'Kısa ama yoğun bir saltanattı. Devlet, Balkanlar ile Anadolu’ya dayanan bir güç olmaktan çıkıp Arap coğrafyasını da kapsayan bir imparatorluğa dönüştü. Bu genişliği yönetecek hukuku ve düzeni kurmak, kendisinden sonrakinin işi olacaktı.' },
  ],

  'kanuni-sultan-suleyman': [
    { id: 'kanuni-a1', kind: 'intro', text: 'Bir dönemi zirve yapan şey nedir: kazanılan savaşlar mı, geride bırakılan düzen mi? Bu saltanat ikisini aynı anda temsil eder.' },
    { id: 'kanuni-a2', kind: 'reign', text: 'Devraldığı devlet kısa sürede çok büyümüş, ama henüz tek bir hukuk ve maliye diliyle konuşmayan bir yapıydı. Dönemin en kalıcı işi, birbirinden çok farklı bu bölgeleri ortak kurallara bağlamak oldu. Örfî düzenlemelerin derlenmesi, adaletin hükümdarın keyfine değil yazılı bir çerçeveye dayanması demekti. Unvanı da buradan gelir.' },
    { id: 'kanuni-a3', kind: 'event', targetId: 'kanuni-sultan-suleyman-2', text: 'Batıdaki seferlerin mantığı çoğu zaman toprak almak değil denge kurmaktı. Orta Avrupa’da güçlü bir rakip yükseliyordu; ona karşı olan devletlerle kurulan ilişkiler Osmanlı’yı ilk kez Avrupa iç siyasetinin doğrudan bir parçası hâline getirdi. Verilen ticari ayrıcalıklar da askerî değil siyasi bir araçtı.' },
    { id: 'kanuni-a4', kind: 'event', targetId: 'kanuni-sultan-suleyman-3', text: 'Denizde ise Osmanlı, kıyılarını koruyan bir devlet olmaktan çıkıp Akdeniz’de söz sahibi bir güce dönüştü. Kuzey Afrika sularında yetişmiş denizcilerin devlet hizmetine girmesi bu dönüşümün en somut adımıdır.' },
    { id: 'kanuni-a5', kind: 'reign', text: 'Fakat aynı yıllar, sınırların ulaşabileceği mesafenin de görüldüğü yıllardır. Ordunun sefere çıkıp aynı mevsimde geri dönebileceği süre sınırlıydı. Bu yüzden ne Orta Avrupa’da ne de doğuda belli bir hattın ötesine kalıcı olarak geçilebildi. İmparatorluk artık coğrafi sınırlarına yaklaşıyordu.' },
    { id: 'kanuni-a6', kind: 'transition', text: 'Uzun saltanatın sonunda geriye mimarisi, hukuku ve ordusuyla örnek alınan bir düzen kaldı. Ama bu düzen, kendisini var eden koşullar değiştiğinde ne yapacağını henüz bilmiyordu. Sonraki yüzyılın asıl meselesi bu olacaktı.' },
  ],
  'ikinci-selim': [
    { id: 'ikinci-selim-a1', kind: 'intro', text: 'Bir imparatorluk, hükümdarı ordunun başında sefere çıkmadan da yönetilebilir mi? Bu dönem, sorunun ilk açık cevabıdır.' },
    { id: 'ikinci-selim-a2', kind: 'reign', text: 'Devlet artık tek bir insanın at üstünde takip edebileceği büyüklükte değildi. Maliyesi, yazışması, tayinleri ve elçilik trafiğiyle sürekli çalışan bir merkez gerekiyordu. Bu yüzden yürütmenin ağırlığı saraydan sadrazamlığa kaydı. Bu bir zaaf değil, büyümenin kurumsal sonucudur; ama padişahın kişiliği yerine devlet adamlarının yeteneği belirleyici hâle gelmiştir.' },
    { id: 'ikinci-selim-a3', kind: 'event', targetId: 'ikinci-selim-1', text: 'Denizde ise çözülmemiş bir sorun vardı. Doğu Akdeniz’in ortasındaki büyük ada başka bir devletin elindeydi ve Mısır ile başkent arasındaki hattın tam üstünde duruyordu. Alınması Osmanlı için bir güvenlik meselesiydi; ama bu hamle, Avrupa’nın deniz güçlerini uzun süredir başaramadıkları bir şeye zorladı: birlikte hareket etmeye.' },
    { id: 'ikinci-selim-a4', kind: 'event', targetId: 'ikinci-selim-2', text: 'Karşılaşmanın sonucu ağırdı. Yine de tersanelerin filoyu bir yıl içinde yeniden kurabilmesi, kaybedilenin gemi olduğunu, kapasitenin ise ayakta kaldığını gösterdi. Asıl telafi edilemeyen kayıp yetişmiş denizcilerdi; bunun etkisi yıllar içinde hissedildi.' },
    { id: 'ikinci-selim-a5', kind: 'reign', text: 'Aynı yıllarda gündeme gelen kanal tasarıları da dönemin ölçeğini gösterir: iki denizi birbirine bağlayarak donanmayı bir cepheden diğerine taşımayı düşünen bir devlet, artık bölgesel değil kıtalar arası düşünüyordu. Bu projeler mühendislik ve maliyet nedeniyle hayata geçmedi.' },
    { id: 'ikinci-selim-a6', kind: 'transition', text: 'Dönem kapandığında sınırlar hemen hemen aynı kalmıştı. Değişen, devletin nasıl yönetildiğiydi. Bundan sonra Osmanlı tarihini padişahlar kadar sadrazamlar, saray dengeleri ve maliyenin durumu belirleyecekti.' },
  ],

  'ucuncu-murad': [
    { id: 'ucuncu-murad-a1', kind: 'intro', text: 'Bir devletin sınırları en geniş hâline ulaşırken maliyesi neden çökmeye başlar? Bu dönem, o iki eğrinin kesiştiği yerdir.' },
    { id: 'ucuncu-murad-a2', kind: 'reign', text: 'Klasik Osmanlı düzeni basit bir dengeye dayanıyordu: toprağın geliri askere veriliyor, asker de karşılığında sefere gidiyordu. Bu denge, savaşların kısa ve yakın olduğu bir dünyaya göre kurulmuştu.' },
    { id: 'ucuncu-murad-a3', kind: 'event', targetId: 'ucuncu-murad-1', text: 'Doğuya açılan cephe bu varsayımı yıktı. Seferler bir mevsimde bitmiyor, ordu yıllarca uzak dağlarda kalıyordu. Üstelik artık ateşli silah taşıyan, maaşla çalışan piyadeye ihtiyaç vardı. Toprak geliri sabitken savaşın maliyeti sürekli yükseldi. Kafkas dağlarının ötesinde kışı geçirmek, yakın bir kaleyi kuşatmakla aynı şey değildi.' },
    { id: 'ucuncu-murad-a4', kind: 'event', targetId: 'ucuncu-murad-2', text: 'Aynı yıllarda dünyanın öbür ucundan Avrupa’ya akan gümüş, Akdeniz üzerinden Osmanlı piyasalarına da girdi ve paranın değerini düşürdü. Hazine akçeyi hafifletti, yeni vergiler kondu, gelirler peşin para karşılığı iltizama verildi. Doğuda ulaşılan geniş sınır haritada etkileyici görünür; ama o hattı beslemek, korumaktan daha pahalıydı.' },
    { id: 'ucuncu-murad-a5', kind: 'reign', text: 'Padişahın sefere çıkmaması sarayın ağırlığını artırdı. Tayinler, ittifaklar ve nüfuz mücadeleleri artık başkentin içinde yürütülüyordu. Bunu tek başına bir çöküş işareti saymak yanıltıcı olur; daha çok, savaş meydanından büro ve hazineye kayan bir iktidar biçiminin habercisidir.' },
    { id: 'ucuncu-murad-a6', kind: 'transition', text: 'Dönem kapandığında imparatorluk en geniş sınırlarından birine ulaşmıştı. Fakat bu sınırları ayakta tutan mali düzen çatlamıştı. Bu çatlağın faturası, birkaç yıl içinde Anadolu’nun içlerinde ödenecekti.' },
  ],

  'ucuncu-mehmed': [
    { id: 'ucuncu-mehmed-a1', kind: 'intro', text: 'Bir ordu modernleşirken kendi ülkesinde nasıl bir güvenlik sorunu doğurabilir? Bu dönem bunun en açık örneğidir.' },
    { id: 'ucuncu-mehmed-a2', kind: 'reign', text: 'Batıdaki uzun savaş yeni bir gerçeği ortaya koydu: karşı taraf ateşli silahta ve tabya düzeninde Osmanlı’yı yakalamıştı. Artık zaferler süvarinin hızıyla değil, tüfekli piyadenin sayısıyla kazanılıyordu. Osmanlı bu savaşa alışkın olduğu düzenle girmişti; karşısında uzun kuşatmalara, siperlere ve topçu düellolarına dayanan yeni bir savaş biçimi buldu.' },
    { id: 'ucuncu-mehmed-a3', kind: 'event', targetId: 'ucuncu-mehmed-1', text: 'Merkez bu ihtiyacı hızla karşılamak için Anadolu köylüsünden ücretli tüfekli birlikler topladı. Kazanılan meydan savaşları bu tercihin işe yaradığını gösterdi. Sorun, sefer bitince başladı.' },
    { id: 'ucuncu-mehmed-a4', kind: 'event', targetId: 'ucuncu-mehmed-3', text: 'Terhis edilen bu adamlar köylerine değil, ellerindeki silahla yollara döndü. Ağır vergiler ve bozulan toprak düzeni yüzünden zaten yerini terk etmiş kalabalıklarla birleştiler. Anadolu’da yıllarca sürecek silahlı hareketlerin arkasında yalnızca isyan ruhu değil, bu somut mekanizma vardır. Üretim düştü, vergi toplanamadı ve şehirlere doğru büyük bir kaçış başladı.' },
    { id: 'ucuncu-mehmed-a5', kind: 'reign', text: 'Yani devlet aynı anda iki cephede savaşıyordu: biri uzak sınırlarda, diğeri kendi topraklarının ortasında. Ve ikincisi, kaybedilen bir kaleden çok daha pahalıya mal oluyordu. Merkez, aynı anda hem uzak cepheye para hem de kendi taşrasına asker göndermek zorunda kalıyordu.' },
    { id: 'ucuncu-mehmed-a6', kind: 'transition', text: 'Bu dönemden sonra Osmanlı’nın asıl meselesi sınırları büyütmek değil, elindekini yönetilebilir hâlde tutmak olacaktı. Sonraki padişahlar da devraldıkları düzenin artık eskisi gibi işlemediğini görecekti.' },
  ],

  'birinci-ahmed': [
    { id: 'birinci-ahmed-a1', kind: 'intro', text: 'Bir devletin kendini nasıl gördüğü, kaybettiği topraklardan daha çok şey anlatabilir. Bu dönem böyle bir eşiktir.' },
    { id: 'birinci-ahmed-a2', kind: 'event', targetId: 'birinci-ahmed-1', text: 'Batıyla yapılan uzun savaşın sonundaki antlaşma, toprak bakımından yıkıcı değildi. Asıl değişim metnin dilindeydi. Osmanlı o güne kadar barışı, üstün taraf olarak bahşedilen bir şey gibi ele almıştı. Bu kez karşı tarafın hükümdarı denk bir muhatap olarak kabul edildi ve görüşmeler sınır boyunda, karşılıklı pazarlıkla yürütüldü. Diplomaside sayfa dönmüştü.' },
    { id: 'birinci-ahmed-a3', kind: 'reign', text: 'İçeride ise hanedanın kendi kuralı değişti. Uzun süre taht, kardeşler arasındaki ölümcül bir rekabetin sonunda kazanılıyordu. Bu yöntem acımasızdı; ama tahta çıkan kişi yıllarca eyalet yönetmiş, savaş görmüş biri oluyordu. Karşılığında ise her taht değişimi, hanedan içinde kanlı bir tasfiyeye mal oluyordu.' },
    { id: 'birinci-ahmed-a4', kind: 'event', targetId: 'birinci-ahmed-3', text: 'Yeni anlayışla taht, ailenin en yaşlı ve uygun üyesine geçmeye başladı. Bu, hanedan içi kan dökülmesini büyük ölçüde azalttı. Karşılığında ise padişahlar artık taşrada değil, sarayın kapalı dairelerinde büyüyordu. Yönetim tecrübesi olmayan hükümdar, gücün sadrazam ve saray çevresine kaymasını hızlandırdı. Tarihçiler bu değişimin bilançosunu hâlâ tartışır.' },
    { id: 'birinci-ahmed-a5', kind: 'transition', text: 'Aynı yıllarda başkentin siluetine eklenen büyük külliye, sarsılan bir devletin hâlâ nasıl bir kaynağı ve iddiası olduğunu gösterir. Bu yapı aynı zamanda bir mesajdı: cephede üstünlüğü tartışılmaya başlayan devlet, mimaride iddiasını sürdürüyordu. Ama artık asıl mücadele sınırlarda değil, tahtın çevresinde yaşanacaktı.' },
  ],

  'birinci-mustafa': [
    { id: 'birinci-mustafa-a1', kind: 'intro', text: 'Bazı saltanatlar yaptıklarıyla değil, ortaya çıkardıklarıyla önemlidir. Bu kısa dönem de öyledir.' },
    { id: 'birinci-mustafa-a2', kind: 'reign', text: 'Yeni veraset anlayışının ilk uygulaması buydu: taht babadan oğula değil, kardeşe geçti. Kural kâğıt üzerinde açıktı. Uygulamada ise bir soru bıraktı: hükümdar olacak kişi yönetmeye hazır değilse ne olur? Kural hanedan içindeki ölümcül rekabete son vermek için düşünülmüştü ve bu amacına ulaştı; ama yerine yeni bir sorun bıraktı.' },
    { id: 'birinci-mustafa-a3', kind: 'event', targetId: 'birinci-mustafa-2', text: 'Cevabı devlet kendi içinden verdi. Padişahın görevini sürdüremeyeceğine karar verenler, tahtı boşaltıp yerine başkasını geçirdi. Kaynaklar onun sağlık durumunu ayrıntılı anlatır; bugünün tarihçileri bu tasvirleri temkinli okur, çünkü aynı kayıtlar tahttan indirmeyi meşrulaştırmak için de yazılmıştır. Kesin olan şu: bir padişah, devlet işlerini yürütemediği gerekçesiyle ilk kez açıkça görevden alınmıştı.' },
    { id: 'birinci-mustafa-a4', kind: 'event', targetId: 'birinci-mustafa-3', text: 'Birkaç yıl sonra aynı kişi ikinci kez tahta çıkarıldı ve kısa sürede yine indirildi. Bu tekrar, tek başına ele alındığında talihsiz bir hikâyedir. Bir arada bakıldığında ise çok daha önemli bir şeyi gösterir: padişahı belirleyen artık yalnızca doğum sırası değil, başkentteki askerî ve dinî çevrelerin uzlaşmasıdır.' },
    { id: 'birinci-mustafa-a5', kind: 'transition', text: 'Osmanlı’da hükümdarın konumu bu yıllarda sessizce yeniden tanımlandı. Bundan sonra tahta çıkmak kadar tahtta kalabilmek de bir siyaset meselesi olacaktı. Bunu en sert biçimde bir sonraki genç padişah öğrenecekti. Sarsıntı sınırlarda değil sarayın koridorlarında yaşanıyordu; ama sonuçları kısa sürede cephede hissedilecekti.' },
  ],

  'genc-osman': [
    { id: 'genc-osman-a1', kind: 'intro', text: 'Bir devleti kuran güç, zamanla o devletin önündeki en büyük engele dönüşebilir mi? Bu dönem, sorunun ilk kez yüksek sesle sorulduğu ve çok ağır bir bedelle karşılandığı dönemdir.' },
    { id: 'genc-osman-a2', kind: 'reign', text: 'Merkez ordusu bir zamanlar Avrupa’nın en disiplinli askerî gücüydü. Ancak zaman içinde yapısı değişti: mensupları evlendi, esnaflık yaptı, ocağa girmek babadan oğula geçen bir hak hâline geldi. Böylece ordu, savaşan bir birlik olduğu kadar maaşı ve ayrıcalıkları olan büyük bir toplumsal grup hâline gelmişti. Dükkânı ve ailesi olan bir askerin uzak bir sefere çıkma isteği de aynı değildi.' },
    { id: 'genc-osman-a3', kind: 'event', targetId: 'genc-osman-1', text: 'Kuzeye yapılan sefer bunu açıkça gösterdi. Ordunun sayısı kâğıt üzerinde büyüktü ama sahadaki performansı beklentiyi karşılamadı. Genç padişah, sorunun komutanlarda değil sistemin kendisinde olduğu sonucuna vardı.' },
    { id: 'genc-osman-a4', kind: 'event', targetId: 'genc-osman-2', text: 'Tasarısı radikaldi: başkentin dışından, taşradan toplanacak ve doğrudan kendisine bağlı yeni bir askerî güç kurmak. Bu, bir orduyu yenilemekten fazlasıydı; başkentteki dengeyi tümüyle değiştirecekti. Niyeti duyulduğunda karşısındaki grup, kaybedeceklerini çok net görüyordu. Kaynaklar, bu tasarıyı hayata geçirecek yeterli hazırlığın yapılmadığı konusunda büyük ölçüde birleşir.' },
    { id: 'genc-osman-a5', kind: 'transition', text: 'Sonuç, Osmanlı tarihinde bir ilk oldu ve derin bir iz bıraktı. Bundan sonra iki yüzyıl boyunca, askerî düzeni değiştirmek isteyen her padişah bu hatırayı hesaba katacaktı. Reform fikri ölmedi; ama artık tehlikeli bir fikirdi. Hükümdarın dokunulmazlığının mutlak olmadığı da o gün anlaşıldı.' },
  ],
  'dorduncu-murad': [
    { id: 'dorduncu-murad-a1', kind: 'intro', text: 'Dağılan bir otorite geri getirilebilir mi? Bu dönem, sorunun cevabını verir; ama bunun hangi yöntemlerle yapıldığı bugün de tartışılır.' },
    { id: 'dorduncu-murad-a2', kind: 'reign', text: 'Tahta çocuk yaşta çıktı. İlk yıllarda kararları annesi, saray çevresi ve ocak ağaları veriyordu. Başkentte maaş isyanları sıradanlaşmış, taşrada vergi toplanamaz olmuştu. Genç padişahın öğrendiği ilk ders, hükümdarlığın kendiliğinden bir güç getirmediğiydi.' },
    { id: 'dorduncu-murad-a3', kind: 'reign', text: 'Yönetimi eline aldığında uyguladığı yöntem sertti. Başkentte sıkı bir denetim kuruldu, muhalif görülen isimler tasfiye edildi, kahvehaneler ve toplanma yerleri kapatıldı. Kaynaklar bu dönemi iki farklı şekilde anlatır: kimileri yeniden kurulan asayişi, kimileri baskının ağırlığını öne çıkarır. İkisi de aynı siyasetin parçasıdır.' },
    { id: 'dorduncu-murad-a4', kind: 'event', targetId: 'dorduncu-murad-2', text: 'Doğuya yapılan seferlerin amacı yalnızca şehir almak değildi. Bu sınır bir asırdır sürekli el değiştiriyor, her yeni hükümdar aynı yerleri yeniden fethetmek zorunda kalıyordu. Bu, hazineyi kanatan bir kısır döngüydü.' },
    { id: 'dorduncu-murad-a5', kind: 'event', targetId: 'dorduncu-murad-3', text: 'Sonunda varılan uzlaşma o döngüyü kırdı. Haritada çizilen hat, iki devletin birbirini yenemeyeceğini kabul etmesi anlamına geliyordu. Bu çizgi öyle kalıcı oldu ki, bugünkü doğu sınırının ana hatları hâlâ o uzlaşmanın izini taşır.' },
    { id: 'dorduncu-murad-a6', kind: 'transition', text: 'Aynı yıllarda padişaha sunulan raporlar önemli bir yenilik getirdi: devlet ilk kez kendi bozulmasını yazılı olarak teşhis ediyordu. Ancak bu teşhis, yeni bir düzen kurmayı değil eski düzene dönmeyi öneriyordu. Bu bakış açısı sonraki iki yüzyılın ıslahat tartışmalarına damgasını vuracaktı.' },
  ],

  'sultan-ibrahim': [
    { id: 'sultan-ibrahim-a1', kind: 'intro', text: 'Kara imparatorluğu, denize hâkim bir rakiple nasıl savaşır? Bu dönemde başlayan mücadele, bu sorunun cevabını çeyrek asırda verecekti.' },
    { id: 'sultan-ibrahim-a2', kind: 'event', targetId: 'sultan-ibrahim-1', text: 'Akdeniz’in büyük adalarından biri, Osmanlı deniz yollarının tam ortasında başka bir devletin elindeydi. Sefer açmak kolaydı; asıl mesele adayı beslemekti. Her asker, her top ve her çuval un, düşman donanmasının dolaştığı sulardan geçmek zorundaydı. Ada büyüktü, kaleleri sağlamdı ve savunanlar denizden sürekli takviye alabiliyordu.' },
    { id: 'sultan-ibrahim-a3', kind: 'reign', text: 'Bu yüzden savaş bir mevsimde değil, bir kuşakta ölçüldü. Ada üzerindeki mücadele sürerken rakip filo başkentin denizden ikmalini de tehdit etti. Uzun kuşatmalar hazineyi kuruttu ve yeni vergiler halkın üzerine yığıldı. Bir süre sonra mesele askerî olmaktan çıkıp iki tarafın da geri adım atamadığı bir prestij meselesine döndü.' },
    { id: 'sultan-ibrahim-a4', kind: 'event', targetId: 'sultan-ibrahim-3', text: 'İçeride ise artık bir düzen oturmuştu: padişahı tahta çıkaran da indiren de aynı üçlüydü. Saray çevresi, ulema ve ocak. Bu güçler bir araya geldiğinde hükümdarın direnme imkânı yoktu.' },
    { id: 'sultan-ibrahim-a5', kind: 'reign', text: 'Bu padişah hakkında aktarılan sert tasvirlere temkinli yaklaşmak gerekir. Onu anlatan kayıtların önemli bir bölümü, tahttan indirilmesinde payı olan çevrelerce yazılmıştır. Bugünün tarihçileri bu anlatıyı, dönemin siyasi hesaplaşmasından ayırmadan okumaz. Tarihte sıkça karşılaşılan bir durumdur bu: bir hükümdarın portresini çoğu zaman onu deviren taraf yazar.' },
    { id: 'sultan-ibrahim-a6', kind: 'transition', text: 'Geriye bitmeyen bir deniz savaşı, boşalmış bir hazine ve çocuk yaşta bir padişah kaldı. Devletin toparlanması, tahttan değil sadrazamlık makamından gelecekti. O makam, kısa süre sonra devletin gerçek yönetim merkezi hâline gelecekti.' },
  ],

  'dorduncu-mehmed': [
    { id: 'dorduncu-mehmed-a1', kind: 'intro', text: 'Yorulmuş bir devlet kendini toparlayabilir mi? Bu uzun saltanat, önce evet sonra hayır diyen iki ayrı yarıdan oluşur.' },
    { id: 'dorduncu-mehmed-a2', kind: 'event', targetId: 'dorduncu-mehmed-1', text: 'Devlet dibe vurduğunda çare beklenmedik bir yerden geldi. Sadrazamlığa getirilen yaşlı devlet adamı görevi kabul etmeden önce şart koştu: kararlarına karışılmayacak ve saray onu koruyacaktı. Bu ayrıntı önemlidir; çünkü asıl sorun yetenek eksikliği değil, hiçbir sadrazamın işini bitirecek kadar uzun süre yerinde kalamamasıydı.' },
    { id: 'dorduncu-mehmed-a3', kind: 'reign', text: 'Yetki güvenceye alınınca sonuç hızla geldi. Maliye disipline edildi, taşradaki asayiş yeniden kuruldu, donanma toparlandı ve çeyrek asırdır süren ada savaşı nihayet bitirildi. Bu yıllar, klasik düzenin doğru ellerde hâlâ çalışabildiğini gösterir. Savaşı bitiren yöntem de değişmişti: hızlı bir baskın değil, yıllara yayılan kuşatma, tünel kazma ve sistemli topçu ateşi.' },
    { id: 'dorduncu-mehmed-a4', kind: 'event', targetId: 'dorduncu-mehmed-3', text: 'Kazanılan bu güven, imparatorluğu uzun süredir ertelenen büyük hedefe yöneltti. Orta Avrupa’nın kalbindeki başkente açılan sefer başarısız oldu. Ama Osmanlı daha önce de kuşatma kaldırmıştı; bu kez farklı olan şey yenilginin kendisi değildi.' },
    { id: 'dorduncu-mehmed-a5', kind: 'reign', text: 'Farklı olan, Avrupa’nın tepkisiydi. Bu kez tek seferlik bir sefer ordusu değil, yıllarca birlikte savaşmayı taahhüt eden kalıcı bir ittifak kuruldu. Osmanlı ilk kez aynı anda birden çok cephede, sonu görünmeyen bir savunma savaşına girdi. Savaş artık mevsimlik bir iş olmaktan çıkmış, sürekli bir hâl almıştı.' },
    { id: 'dorduncu-mehmed-a6', kind: 'transition', text: 'Sınırlar geriledikçe fatura başkente döndü ve padişah tahtını korumakta zorlandı. Bundan sonra Osmanlı diplomasisinin işi kazanmak değil, kaybı sınırlamak olacaktı. Ordunun uzun yıllar boyunca kazanç getirdiği Balkan cepheleri artık zarar hanesine yazılıyordu.' },
  ],

  'ikinci-suleyman': [
    { id: 'ikinci-suleyman-a1', kind: 'intro', text: 'Başlamadığınız ve bitiremeyeceğiniz bir savaşı devralmak nasıl bir şeydir? Bu kısa saltanat bunun cevabıdır.' },
    { id: 'ikinci-suleyman-a2', kind: 'reign', text: 'Osmanlı yüzyıllarca savaşı bir gelir kaynağı gibi tecrübe etmişti: sefer yapılır, toprak alınır, gelir artardı. Şimdi ise savaş yalnızca harcıyordu. Kaybedilen her kale, geride vergi vermeyen bir bölge ve göç eden bir nüfus bırakıyordu. Bu tersine dönüş bütün mali mantığı altüst etti; sefer masrafı artık ganimetle değil, iç vergilerle karşılanıyordu.' },
    { id: 'ikinci-suleyman-a3', kind: 'event', targetId: 'ikinci-suleyman-1', text: 'Kuzeybatı sınırındaki büyük kalenin düşmesi yalnızca bir mevki kaybı değildi. Tuna hattı kırılınca cephe, Balkanların içine doğru kaydı ve savaş ilk kez uzun süredir güvende olan bölgelerin kapısına dayandı. Sınır boyundaki yerel eşraf için de tercih zamanı gelmişti; sadakatler sessizce değişmeye başladı.' },
    { id: 'ikinci-suleyman-a4', kind: 'event', targetId: 'ikinci-suleyman-2', text: 'Toparlanmanın yolu beklenmedik bir yerden geçti. Göreve gelen sadrazam, halkın üzerindeki bazı olağanüstü vergileri kaldırdı. Bu bir hayırseverlik değil, savaş tedbiriydi: tükenmiş bir köylüden ne asker ne de vergi çıkardı. Yükü hafifletmek, cepheyi beslemenin tek yoluydu. Aynı mantıkla ordunun iaşesi ve maaş düzeni de yeniden ele alındı.' },
    { id: 'ikinci-suleyman-a5', kind: 'transition', text: 'Bu anlayış kısa sürede karşılığını verdi ve kaybedilen hat bir ölçüde geri alındı. Ama padişahın ömrü savaşın sonunu görmeye yetmedi. Osmanlı artık zaferle değil, dayanma gücüyle ölçülen bir döneme girmişti. Bu yıllar, ıslahat düşüncesinin savaşın tam ortasında sınandığı ilk örneklerdendir; doğru teşhisin bile yeterli zamanı bulamayabileceğini gösterdi.' },
  ],

  'ikinci-ahmed': [
    { id: 'ikinci-ahmed-a1', kind: 'intro', text: 'Bazı saltanatların tamamı tek bir savaşın içinde geçer. Bu dört yıl da öyledir.' },
    { id: 'ikinci-ahmed-a2', kind: 'reign', text: 'Uzun savaşların en az konuşulan tarafı insan kaynağıdır. Bir devletin cepheye asker sürebilmesi için yalnızca paraya değil, o askeri toplayacak taşra düzenine, yolları güvenli tutan bir yönetime ve geride üretim yapan bir nüfusa ihtiyacı vardır. On yıllık savaş bunların hepsini aşındırmıştı. Bir bölge cephe hattına dönüştüğünde önce tarlalar boşalır, ardından vergi durur, en sonunda asker bulunamaz olur.' },
    { id: 'ikinci-ahmed-a3', kind: 'event', targetId: 'ikinci-ahmed-1', text: 'Cephede yaşanan kırılma bir başka zaafı da gösterdi. Toparlanmayı sağlayan yetenekli sadrazamın savaş meydanında kaybedilmesi, bütün bir cephenin dengesini bozdu. Kurumlar değil kişiler taşıyorsa, tek bir kayıp yılların kazancını götürebiliyordu. Yetkiyi tek elde toplamak hızlı karar sağlıyordu; ama o el çekildiğinde yerini doldurmak yıllar alıyordu.' },
    { id: 'ikinci-ahmed-a4', kind: 'event', targetId: 'ikinci-ahmed-2', text: 'Orta Avrupa’daki topraklarda Osmanlı yönetimi artık geri dönülmez biçimde çözülüyordu. Yerel eşraf taraf değiştiriyor, vergi düzeni işlemiyor, sınır boyundaki halk göç ediyordu. Harita üzerinde yavaş görünen bu çekilme, sahada çok daha hızlı yaşandı. Yüzyıllardır Osmanlı düzeninin parçası olan bölgeler, tek bir kuşak içinde başka bir devletin idaresine geçiyordu.' },
    { id: 'ikinci-ahmed-a5', kind: 'transition', text: 'Savaş bitmeden saltanat sona erdi. Devlet artık kaybı durdurmayı değil, masaya oturup şartlarını konuşmayı düşünmeye başlamıştı. Bu, Osmanlı diplomasisi için tamamen yeni bir düşünce biçimiydi. Önce kaybın büyüklüğünü kabul etmek gerekiyordu ve bu, askerî bir karardan çok siyasi bir olgunluk meselesiydi.' },
  ],

  'ikinci-mustafa': [
    { id: 'ikinci-mustafa-a1', kind: 'intro', text: 'Bir devlet, kaybettiğini ilk kez resmen kabul ettiğinde ne değişir? Bu dönem, Osmanlı için o eşiktir.' },
    { id: 'ikinci-mustafa-a2', kind: 'reign', text: 'Padişah tahta çıktığında geleneksel yöntemi denedi: ordunun başında bizzat sefere çıkmak. Bu, moral açısından güçlü bir mesajdı. Ancak sorun hükümdarın cephede olup olmaması değildi; karşı tarafın ordusu artık daha iyi eğitiliyor, daha iyi besleniyor ve daha iyi komuta ediliyordu. Üstelik savaş tek bir meydan muharebesiyle değil, aylara yayılan manevralarla ve istihbaratla kazanılıyordu.' },
    { id: 'ikinci-mustafa-a3', kind: 'event', targetId: 'ikinci-mustafa-1', text: 'Nehir geçişinde uğranılan baskın, on altı yıllık savaşın kaderini belirledi. Ordunun büyük bölümünü kaybeden Osmanlı’nın elinde artık pazarlık gücü kalmamıştı. Baskının zamanlaması, karşı tarafın Osmanlı ordusunun her hareketini ne kadar yakından izlediğini de gösteriyordu.' },
    { id: 'ikinci-mustafa-a4', kind: 'event', targetId: 'ikinci-mustafa-2', text: 'Sonrasında imzalanan antlaşma, haritadaki kayıptan daha fazlasını ifade eder. Görüşmeler yabancı devletlerin arabuluculuğunda, Avrupa diplomasisinin usulleriyle ve masa başında yürütüldü. Osmanlı ilk kez geniş bir toprağı kalıcı olarak bıraktığını yazılı biçimde kabul etti. Devletin kendine bakışı da o gün değişti. Bundan sonra sınırlar sefer sonunda değil, konferans masasında belirlenecekti; Osmanlı da bu masaya oturacak daimî bir diplomasi kadrosuna ihtiyacı olduğunu fark etti.' },
    { id: 'ikinci-mustafa-a5', kind: 'transition', text: 'Yenilginin faturası kısa sürede başkente döndü. Sarayın uzun süredir Edirne’de oturması, İstanbul esnafını ve maaşını alamayan askeri aynı safta birleştirdi. Ayaklanma bir taht değişikliğiyle bitti; ama asıl gösterdiği şey, artık başkentin kendisinin bir siyasi güç olduğuydu. Saray da bunun üzerine kalıcı olarak İstanbul’a döndü; bu dönüş sembolik değil, bir kabuldü.' },
  ],

  'ucuncu-ahmed': [
    { id: 'ucuncu-ahmed-a1', kind: 'intro', text: 'Yenilgiden sonra ne yapılır? Daha çok savaşmak mı, yoksa karşı tarafın neden kazandığını anlamaya çalışmak mı? Bu dönem, Osmanlı’nın ikinci yolu ilk kez ciddiye aldığı dönemdir.' },
    { id: 'ucuncu-ahmed-a2', kind: 'event', targetId: 'ucuncu-ahmed-1', text: 'Kuzeyde kazanılan beklenmedik bir başarı, devlete uzun zamandır bulamadığı şeyi verdi: nefes alacak zaman. Kuşatılan rakip ordu ağır şartlarla anlaşmak zorunda kaldı ve Karadeniz’in kuzeyinde kaybedilen mevkiler geri alındı.' },
    { id: 'ucuncu-ahmed-a3', kind: 'event', targetId: 'ucuncu-ahmed-2', text: 'Batıda ise kayıplar sürdü ve barış masasında yeni topraklar bırakıldı. Ama bu barış bilinçli bir tercihe dönüştü. Devlet, kaybettiği savaşları tekrar tekrar denemek yerine, kazanan tarafın neyi farklı yaptığını öğrenmeye karar verdi.' },
    { id: 'ucuncu-ahmed-a4', kind: 'reign', text: 'Avrupa başkentlerine gönderilen elçilerden istenen şey sıradan bir görüşme değildi: gördüklerini yazmaları istendi. Ordular, tersaneler, hastaneler, okullar, kütüphaneler. Aynı yıllarda başkentte kurulan matbaa, bilginin çoğaltılma hızını değiştirdi. Bu, sonraki iki yüzyıl boyunca sürecek bir öğrenme sürecinin başlangıcıdır.' },
    { id: 'ucuncu-ahmed-a5', kind: 'reign', text: 'Bu dönem çoğu zaman lale bahçeleri ve eğlence hayatıyla anlatılır. Bu tablo eksiktir ve bir bölümü, dönemi eleştirenlerin kaleminden çıkmıştır. Yine de saray harcamalarının, doğuda kötü giden bir savaş sürerken göz önünde olması gerçek bir hoşnutsuzluk yarattı.' },
    { id: 'ucuncu-ahmed-a6', kind: 'transition', text: 'Başkentte patlayan ayaklanma hem sadrazamı hem padişahı götürdü. Yenilik fikri ise ortadan kalkmadı; yalnızca onu taşıyacak toplumsal desteğin henüz bulunmadığı anlaşıldı. Bu ders, sonraki padişahların önünde duracaktı.' },
  ],
}

export default ANLATIMLAR
