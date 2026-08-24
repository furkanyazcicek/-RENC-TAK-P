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
}

export default ANLATIMLAR
