# Codex ana uygulama promptu — AYT Biyoloji Atlası

> Bu prompt 4 Eylül 2026 tarihinde, depodaki mevcut TYT Biyoloji Atlası, AYT biyoloji ders içerikleri ve görsel varlıklar; MEB'in 2018 Biyoloji Dersi Öğretim Programı; 2026 Türkiye Yüzyılı Maarif Modeli Biyoloji Dersi Öğretim Programı; 2026–2027 kademeli uygulama duyurusu ve yayımlanmış 2026 AYT soru kitapçığı dikkate alınarak hazırlanmıştır.

## Görev

Bu görevde yalnız fikir, plan, wireframe, tek ekranlık prototip veya statik konu özeti üretme. DRKOÇ React + Vite uygulamasına, 11 ve 12. sınıf biyoloji öğrenimini ve AYT biyoloji hazırlığını destekleyen, eksiksiz, çok ölçekli ve yüksek etkileşimli bir **AYT Biyoloji Atlası** tasarla, uygula, projeye entegre et, gerçek tarayıcıda görsel ve işlevsel olarak doğrula.

Atlasın ana vaadi şudur:

**Öğrenci; molekülden organele, hücreden dokuya, organdan sisteme, organizmadan popülasyona kadar yakınlaşıp uzaklaşarak yapıyı, işlevi, süreci ve sistemler arası nedeni aynı sahnede kurar.**

Bu ürün bir tıp fakültesi atlası, soru bankası, video kütüphanesi, ezber kartları yığını veya uzun konu anlatımı sayfası değildir. Lise biyolojisinin sınırlarında kalan; anatomiyi fizyolojiden ayırmadan yapı–işlev ilişkisini öğreten; ÖSYM'nin şekil, grafik, süreç, karşılaştırma ve çıkarım diline hazırlayan bir öğrenme aracıdır.

Tüm kullanıcı arayüzü, geri bildirimler, erişilebilir adlar, açıklamalar ve öğrenciye görünen içerikler Türkçe olmalıdır.

## Çalışma ilkeleri ve zorunlu beceriler

1. Depodaki `AGENTS.md`, `CLAUDE.md` ve varsa çalışılan alt klasördeki yerel `AGENTS.md` dosyalarını oku.
2. Ön yüz ve görsel iş için `.codex/skills/drkoc-ui-designer/SKILL.md` becerisini kullan.
3. Atlas, simülasyon, 3B/2B öğrenme sahnesi ve etkileşim için ardından `.codex/skills/drkoc-atlas-designer/SKILL.md` becerisini kullan.
4. Bitmap bilimsel görsel üretimi gerçekten gerekiyorsa `/Users/furkantalhayazcicek/.codex/skills/.system/imagegen/SKILL.md` becerisini kullan. ImageGen'i etiketli bilimsel gerçeğin kaynağı yapma.
5. Uygulama görsel standardının tek kaynağı olan `DESIGN_SYSTEM.md` dosyasını oku ve uygula.
6. Kullanıcının mevcut değişikliklerini koru. İlgisiz dosyaları değiştirme, geri alma, biçimlendirme veya silme. Yıkıcı git işlemleri kullanma.
7. Yeni ücretli servis ekleme, canlı veriyi değiştirme veya yayına alma. Yayına alma ayrıca istenmedikçe yerel uygulama ve doğrulamayla kal.

## Önce depoyu ve çalışan ürünü incele

Kod yazmadan önce şu kaynakları incele ve kısa bir iç denetim çıkar:

- `src/pages/BiyolojiAtlasi.jsx`
- `src/components/biyoloji/**`
- `src/data/biyoloji/**`
- `src/lib/biyoloji/**`
- `src/styles/biyoloji-atlasi.css`
- `scripts/test-biyoloji-atlasi.mjs`
- `CLAUDE_TYT_BIYOLOJI_ATLASI_PROMPT.md`
- `BIYOLOJI_ATLASI_DETAYLI_REVIZYON_PROMPT.md`
- `src/pages/FizikAtlasi.jsx`, `src/pages/KimyaAtlasi.jsx` ve bu atlasların ortak kabuk/test örüntüleri
- `src/content/lessons/biyoloji/**`
- `src/components/lessons/figures/**`
- `public/lesson-assets/**`
- `src/App.jsx`, `src/pages/LibraryGateway.jsx`, `src/lib/navigation.js`
- `src/components/ui/**`, `src/index.css`, `tailwind.config.js`, `package.json`

Mevcut depoda AYT konularına ait çok sayıda ders metni, React tabanlı etkileşimli figür ve her ana konu için geniş bir görsel varlık tabanı bulunmaktadır. Bunları yeniden üretmeden önce içerik doğruluğu, çözünürlük, kırpma, erişilebilir alt metin, mobil kullanım ve atlas etkileşimine uygunluk açısından envanterle. Uygun varlıkları yeniden kullan; yalnız eksik veya işlevsel olarak yetersiz olanı üret.

Uygulamayı çalıştır ve en az şu sayfaları masaüstü ve telefon görünümünde incele:

- mevcut TYT Biyoloji Atlası giriş haritası ve en az iki laboratuvar;
- mevcut Fizik ve Kimya Atlaslarının girişleri ve birer gerçek simülasyonu;
- AYT biyolojiye ait mevcut ders içeriklerinden Sinir Sistemi, Genden Proteine, Fotosentez–Kemosentez ve Bitki Biyolojisi;
- kütüphane içindeki atlas kartları ve dönüş akışı.

İnceleme sonunda şunları ayır:

- yeniden kullanılacak ortak atlas kabuğu ve kontroller;
- doğrudan yeniden kullanılabilecek bilimsel motorlar ve figürler;
- yalnız ders anlatımı için yapılmış olup atlas etkileşimine dönüştürülmesi gereken parçalar;
- AYT atlası için sıfırdan kurulması gereken çok ölçekli sahneler;
- yanlış, müfredat dışı, eksik veya tıp düzeyinde fazla ayrıntılı içerikler.

## Müfredat gerçekliği: iki kapsamı karıştırma

4 Eylül 2026 itibarıyla kademeli geçiş vardır:

- 2026–2027 eğitim yılında 11. sınıf Türkiye Yüzyılı Maarif Modeli'ne geçmiştir. Yeni 11. sınıfın ana temaları **Tepki** ve **Homeostazi**dir.
- Aynı eğitim yılında 12. sınıfta önceki öğretim programı uygulanmaya devam etmektedir.
- AYT'nin geçmiş ve güncel soru dili, önceki 11–12 programındaki İnsan Fizyolojisi, Komünite ve Popülasyon Ekolojisi, Genden Proteine, Canlılarda Enerji Dönüşümleri, Bitki Biyolojisi ve Canlılar ve Çevre kapsamını hâlâ ürün tasarımında zorunlu kılar.
- Gelecekteki ÖSYM dağılımını kesinmiş gibi tahmin etme. “Bu konu kesin çıkar” veya garantili soru dağılımı söyleme.

Atlasın görünür kapsam filtreleri şunlar olsun:

1. **AYT çekirdeği** — önceki 11–12 programı ve yayımlanmış ÖSYM sorularındaki ortak bilgi/beceri alanları.
2. **11. sınıf TYMM 2026–2027** — Tepki ve Homeostazi öğrenme çıktıları.
3. **12. sınıf** — mevcut 12. sınıf programı ve gelecekte kademeli uygulanacak Üreme + Gen temalarıyla kesişen başlıklar.
4. **Tüm atlas** — tekrarları tek içerikte birleştiren, kapsam etiketlerini görünür tutan bütünleşik görünüm.

Aynı bilimsel sahneyi iki kez kopyalama. Örneğin sinir sistemi sahnesi hem AYT çekirdeğine hem TYMM Tepki/Homeostazi çıktısına bağlanabilir. Veri manifestinde çoklu kapsam ilişkisi kur.

### Resmî kaynak kapısı

İçerik manifestini oluşturmadan önce güncel resmî belgeleri tekrar doğrula:

- MEB 2018 Biyoloji Dersi Öğretim Programı: `https://mufredat.meb.gov.tr/Dosyalar/20182215535566-Biyoloji%20d%C3%B6p.pdf`
- MEB TYMM Biyoloji Dersi Öğretim Programı: `https://mufredat.meb.gov.tr/Dosyalar/202582694327111-biyoloji.pdf`
- 2026–2027 kademeli uygulama ve yıllık planlar: `https://tymm.meb.gov.tr/taslak-cerceve-planlari/ortaogretim`
- ÖSYM'nin yayımladığı güncel AYT temel soru kitapçıkları: yalnız kapsam ve soru becerisi analizi için kullan; soruları kopyalama.

Her sayfanın manifestinde `resmiKaynaklar`, `program`, `sinif`, `tema`, `kazanimVeyaCiktiKodlari`, `aytBecerileri`, `sinirlar` alanları bulunsun.

## Bilgi mimarisi

Yeni atlası mevcut TYT atlasının içine onlarca bölge ekleyerek şişirme. Ortak bileşenleri ve bilimsel motorları yeniden kullan; fakat öğrenciye ayrı bir ürün girişi sun:

- Önerilen rota: `/ayt-biyoloji-atlasi`
- Kütüphanede ayrı kart: **AYT Biyoloji Atlası — 11 ve 12. sınıf**
- Ana atlas haritası: **Yaşam Sistemleri Haritası**
- URL, seçili alanı, konuyu, sahneyi ve modu paylaşılabilir biçimde taşısın.
- Tarayıcı geri/ileri davranışı atlas durumuyla senkron olsun.
- Konu ve sahne modülleri lazy-load edilsin.

Ana alanlar:

1. **İnsan Fizyolojisi**
2. **Ekoloji ve Çevre**
3. **Genden Proteine**
4. **Enerji Dönüşümleri**
5. **Bitki Biyolojisi**

İnsan sistemlerini ana haritada dağınık üst düzey kartlara dönüştürme. Kullanıcının istediği biçimde **İnsan Fizyolojisi** tek ana başlık olsun; aşağıdaki sistemler bunun alt sayfaları olarak açılıp paylaşılabilsin.

## Zorunlu sayfalar ve öğrenme sahneleri

Her aşağıdaki konu, ayrı URL durumu ve ayrı sayfa/rota deneyimi taşımalıdır. Bir sayfa birden çok sahne içeriyorsa sahneler üst üste uzun bir belge gibi yığılmamalı; konuya özgü sekme, yolculuk, katman veya odak geçişiyle yönetilmelidir.

### A. İnsan Fizyolojisi ana alanı

#### 0. İnsan Fizyolojisi / Homeostazi merkezi

Birincil öğrenme nesnesi: sistemlerin birlikte çalıştığı insan bedeni.

Zorunlu deney:

- Dıştan bütüncül insan anatomisi; sinir, endokrin, dolaşım, solunum, sindirim, üriner, destek-hareket ve üreme sistemlerini tek tek göster/gizle, soldur ve izole et.
- “Anatomi ağacı”: sistem → organ → doku/yapı hiyerarşisi. Seçim sahneyle çift yönlü senkron olsun.
- Şeffaflaştırma/X-ray, önden–arkadan bakış, döndürme, yakınlaştırma, odaklama ve başlangıç görünümüne dönme.
- Egzersiz, yemek sonrası, susuzluk, sıcak ortam ve akut stres senaryoları. Bir senaryo seçilince birden çok sistemdeki değişimler eş zamanlı görünür olsun.
- Homeostazi göstergeleri: vücut sıcaklığı, kan glikozu, kan basıncı, CO₂/pH ilişkisi, su dengesi. Bunlar tıbbi tanı aracı değil, temsili lise düzeyi model olarak açıkça etiketlensin.
- Negatif/pozitif geri bildirim karşılaştırması ve sistemler arası bağlantı haritası.

#### 1. Sinir Sistemi

Birincil öğrenme nesnesi: çok ölçekli sinyal iletimi.

Zorunlu sahneler:

- Bütün vücutta merkezî ve çevresel sinir sistemi; beyin, omurilik ve ana sinir ağlarını dıştan anatomik bağlamda inceleme.
- Sistem görünümünden sinir demetine, nöron ağına ve tek nörona kesintisiz “ölçek merceği” ile yaklaşma.
- Nöron–glia katmanları; dendrit, soma, akson, miyelin, Ranvier düğümleri.
- Uyarı şiddeti, eşik, hep-ya-hiç, impuls sıklığı ve iletim hızı ilişkisini ayrı kontrollerle modelleme.
- Aksiyon potansiyeli boyunca zar bölgesinin durumu; süreç grafiğiyle sahne aynı zaman ekseninde yürüsün.
- Kimyasal sinaps: nörotransmitter salımı, reseptör bağlanması, uyarıcı/baskılayıcı etki ve toplam eşik.
- Refleks yayı ile bilinçli yanıtı aynı uyarı üzerinden zaman ve yol bakımından karşılaştırma.
- Somatik/otonom; kapsamın izin verdiği görünümde sempatik/parasempatik karşılaştırma. Müfredat filtreleri ayrıntıyı gerektiğinde gizlesin.
- Beyin bölümleri ve temel görevleri; aşırı nöroanatomiye girme.

#### 2. Endokrin Sistem

Birincil öğrenme nesnesi: hormon–hedef hücre–geri bildirim ilişkisi.

Zorunlu sahneler:

- Bütün vücutta endokrin bez haritası; bez seçildiğinde konum, temel hormonlar, hedef ve ana etki.
- Hormonun kana salgılanmasından yalnız uygun reseptörlü hedef hücrede yanıt oluşmasına kadar yolculuk.
- Hipotalamus–hipofiz bağlantısı ve sinir–endokrin bütünlüğü.
- Kan glikozu, kalsiyum, su/sodyum, metabolizma ve stres için geri bildirim devreleri.
- Öğrenci eksik devre halkasını yerleştirsin; hormon fazlalığı/eksikliğinde grafiğin ve hedef organ yanıtının nasıl değiştiğini gözlesin.
- Hormonların kimyasal yapısını gereksiz ayrıntıya taşımadan etki süresi/hızı karşılaştırması.

#### 3. Duyu Organları

Birincil öğrenme nesnesi: uyaranın reseptörden beyin yorumuna dönüşmesi.

Zorunlu sahneler:

- Reseptör türü–uyaran türü eşleştirmesi ve uyaran şiddetinin impuls sıklığıyla kodlanması.
- Göz: tabakalar, ışık yolu, iris–mercek uyumu, retina, sarı nokta/kör nokta; miyopi, hipermetropi ve astigmatı ışın modeliyle karşılaştırma.
- Kulak: dış–orta–iç kulakta ses iletimi, Korti organı, işitme kodlaması ve denge reseptörleri.
- Tat, koku ve deri reseptörlerini uygun uyaranla çalıştıran kısa gözlem sahneleri.
- “Duyu organı algılamayı tek başına tamamlar” yanılgısını reseptör → sinir yolu → beyin zinciriyle düzelt.
- Erişilebilirlik ve engellilik bağlamını saygılı, kapsayıcı ve tıbbi kesinlik iddiası olmadan ele al.

#### 4. Destek ve Hareket Sistemi

Birincil öğrenme nesnesi: iskelet–eklem–kas eş güdümü.

Zorunlu sahneler:

- İskelet üzerinde kemik türleri ve seçilebilir ana yapılar; gerekirse sadeleştirilmiş kesit.
- Eklem türleri, hareket eksenleri ve bağ/tendon farkı.
- Kasın organ → demet → kas lifi → miyofibril → sarkomer ölçek yolculuğu.
- Sarkomer kasılma simülasyonu: aktin/miyozin kayması, değişen/değişmeyen bantlar; 2026 AYT benzeri fakat özgün görsel çıkarım görevleri.
- Antagonist kas çifti ve eklem açısı senkron animasyonu.
- Biyolojik kaldıraç ve kuvvet/yol avantajını basit, müfredat sınırında bir modelle göster.
- Rahatsızlık/sağlık bölümü ana öğrenme sahnesini boğmasın; bağlamsal karşılaştırma olarak açılsın.

#### 5. Sindirim Sistemi

Birincil öğrenme nesnesi: besinin parçalanması, emilmesi ve taşınması.

Zorunlu sahneler:

- Bir lokmanın ağızdan kalın bağırsağa yolculuğu; organ seçimi ve peristaltizm.
- Karbonhidrat, protein, yağ ve nükleik asitlerin kimyasal sindirim rotalarını enzim, ortam ve ürünlerle karşılaştırma.
- Yardımcı organlar: tükürük bezleri, karaciğer, safra kesesi ve pankreasın işlevsel katkıları.
- Mide pH'ı, enzim etkinliği, bikarbonat nötralizasyonu ve emülsifikasyon süreçleri.
- İnce bağırsak villusuna yaklaşma; glikoz/amino asitlerin kana, yağların lenfe taşınma yollarını karşılaştırma.
- Öğrenci “molekülü takip et” modunda besin seçsin, her aşamada yapı ve süreç değişsin.

#### 6. Dolaşım ve Bağışıklık Sistemi

Birincil öğrenme nesnesi: taşıma ağı ile savunma ağının bütünlüğü.

Zorunlu sahneler:

- Dönen/odaklanabilen kalp; odacıklar, kapaklar ve damar bağlantıları.
- Bir alyuvarı küçük ve büyük dolaşım boyunca takip et; oksijen durumu, bulunduğu yapı ve akış yönü anlık güncellensin.
- Kalp döngüsü: elektriksel ileti, kulakçık/karıncık kasılması, kapak durumu, basınç ve kalp sesi aynı zaman çizgisinde.
- Atardamar–toplardamar–kılcal yapı/işlev karşılaştırması; basınç, hız ve toplam kesit alanı grafikleri.
- Kılcal değişim, doku sıvısı, lenf dönüşü ve ödem mekanizması.
- Kan hücreleri ve pıhtılaşma; ABO/Rh içeriğini kan naklinde “genel alıcı/verici” ezberine indirgeme.
- Doğal bariyer → inflamasyon → antijen sunumu → B/T yanıtı → antikor/hafıza hücresi zaman çizelgesi.
- İlk ve ikinci karşılaşma bağışıklık yanıtı grafiği; aşı mantığını mekanizmayla açıkla.

#### 7. Solunum Sistemi

Birincil öğrenme nesnesi: havanın hareketi, gaz değişimi ve homeostatik kontrol.

Zorunlu sahneler:

- Solunum yolu boyunca hava izleme; burun, yutak, gırtlak, bronşlar, bronşioller ve alveoller.
- Soluk alma/vermede diyafram, göğüs hacmi ve basınç değişimini senkron modelleme.
- Alveol–kılcal yakın görünümü; kısmi basınç farkına bağlı O₂/CO₂ difüzyonu.
- Hemoglobinle O₂ taşınması ve CO₂'nin temel taşıma biçimleri; aşırı biyokimya ayrıntısı olmadan.
- Dinlenme–egzersiz karşılaştırması; solunum hızı, CO₂ ve pH geri bildirimini homeostazi merkeziyle bağla.
- Astım/amfizem gibi örnekleri sağlıklı modelle karşılaştır; tanı/tedavi önerisi verme.

#### 8. Üriner Sistem

Birincil öğrenme nesnesi: kanın süzülmesi ve iç dengenin korunması.

Zorunlu sahneler:

- Bütün vücutta böbrek ve idrar yolları; böbrek kesitine, ardından nefrona ölçek geçişi.
- Bir üre, su, glikoz veya iyon molekülünü böbrek atardamarından idrar çıkışına kadar takip et.
- Glomerüler süzülme, geri emilim ve salgılama süreçlerini nefron bölümleri üzerinde çalıştır.
- Kan plazması–süzüntü–idrar bileşimi karşılaştırması.
- ADH ve aldosteron etkileri; susuzluk, fazla su alımı ve tuz yükü senaryoları.
- Karşı akım mantığını lise düzeyinde, nitel ve görsel olarak açıkla.
- Diyaliz ve böbrek sağlığı içeriği eğitim amaçlıdır; tıbbi karar veya kişisel sağlık önerisi üretme.

#### 9. Üreme Sistemi ve Embriyonik Gelişim

Birincil öğrenme nesnesi: gamet oluşumundan doğuma uzanan yapı–zaman ilişkisi.

Zorunlu sahneler:

- Dişi ve erkek üreme sistemi anatomisini ayrı ve karşılaştırmalı inceleme; mahremiyet ve yaşa uygun görsel dil.
- Spermatogenez–oogenez karşılaştırması; kromozom/DNA durumu, hücre sayısı ve sitoplazma dağılımı.
- Menstrual döngü: FSH, LH, östrojen ve progesteron grafikleri; ovaryum ve uterus olayları aynı zaman ekseninde.
- Döllenme, zigot, segmentasyon, implantasyon ve temel embriyonik gelişim zaman çizelgesi.
- Plasenta ve göbek kordonunda anne–fetüs maddelerinin karışmadan değişimi.
- Müfredatın izin verdiği IVF açıklaması; kişisel tıbbi öneri ve kesin başarı iddiası yok.
- Gelişim riskleri korkutucu dilden uzak, kanıta dayalı ve program sınırında işlenmeli.

### B. Ekoloji ve Çevre

#### 10. Komünite ve Popülasyon Ekolojisi

Birincil öğrenme nesnesi: tür etkileşimleri ve popülasyonun zaman içindeki değişimi.

Zorunlu sahneler:

- Gerçekçi fakat öğretim amaçlı bir saha üzerinde rekabet, av–avcı, mutualizm, parazitlik ve kommensalizm senaryoları.
- Bir türün artması/azalmasıyla doğrudan ve dolaylı etkilerin ağ üzerinde zamanla yayılması.
- J ve S büyüme eğrileri; doğum, ölüm, iç/dış göç, kaynak ve taşıma kapasitesi değişkenleri.
- Yaş piramitleri ve nüfus değişimi yorumlama.
- Birincil/ikincil süksesyon karşılaştırması; evre ezberinden çok değişimin nedenini göster.
- Model katsayılarının temsili olduğunu açıkça belirt.

#### 11. Canlılar ve Çevre

Birincil öğrenme nesnesi: varyasyon–seçilim–adaptasyon ilişkisi.

Zorunlu sahneler:

- Değişen çevrede başlangıç varyasyonu olan bir popülasyonun nesiller boyunca dağılımı.
- Mutasyonun ihtiyaca göre oluşmadığını, seçilimin mevcut varyasyon üzerinde çalıştığını göster.
- Antibiyotik direnci ve pestisit/herbisit direnci için zaman adımlı neden–sonuç modeli.
- Doğal seçilim ile yapay seçilimi karşılaştır.
- Adaptasyonu bireyin yaşam içinde kazanması şeklindeki yanılgıyı düzelt.

### C. Genden Proteine

#### 12. Nükleik Asitler

Birincil öğrenme nesnesi: nükleotitten kromozoma genetik bilgi organizasyonu.

Zorunlu sahneler:

- Hücre → çekirdek → kromozom → kromatin/nükleozom → DNA → nükleotit ölçek merceği.
- DNA ve RNA'nın yapı, baz, şeker, zincir ve görev karşılaştırması.
- DNA'nın yarı korunumlu eşlenmesi; helikaz, DNA polimeraz ve ligazla sınırlandırılmış, önde/geciken zinciri görsel olarak ayıran replikasyon çatalları.
- Öğrenci yeni zincire doğru nükleotitleri yerleştirsin; eşleşme ve yön bilgisi müfredat sınırında açıklansın.
- Genetik materyal deneylerini kronoloji ezberi yerine kanıt–çıkarım mantığıyla işle.

#### 13. Genetik Şifre ve Protein Sentezi — “Protein Yolculuğu”

Birincil öğrenme nesnesi: bir gen bilgisinin işlevsel proteine dönüşmesi.

Bu sayfa atlasın kalite çıpalarından biridir. Süreç tek bir ok diyagramı veya otomatik video değildir.

Zorunlu yolculuk:

1. Çekirdekte belirli bir gen bölgesini seçme.
2. DNA'nın ilgili bölgesinden RNA polimerazla mRNA sentezi.
3. Ökaryot görünümünde RNA işleme; bu ayrıntı kapsam filtresine göre “Meraklısına” katmanına taşınabilir.
4. mRNA'nın çekirdekten sitoplazmaya çıkışı.
5. Ribozomda başlangıç–uzama–sonlanma; kodon, antikodon, tRNA ve amino asit eşleşmesi.
6. Polipeptidin birincil yapıdan uygun üç boyutlu katlanmaya geçmesi.
7. Salgı/membran proteini senaryosunda granüllü ER → Golgi → vezikül → hedef zar/dış ortam rotası.
8. İşlev kazanımı: enzimin aktif bölgesi, reseptörün uygun ligandı veya yapısal proteinin görevine göre şekil–işlev ilişkisi.
9. Yanlış katlanma, mutasyon veya yanlış hedefleme senaryosunun işlev üzerindeki etkisi.
10. Gerektiğinde işlevini tamamlayan proteinin parçalanması/geri dönüşümü; ana kapsamı boğmadan sistemin sonunu göster.

Öğrenci her aşamada seçim veya kurma eylemi yapmalı. Süreç ilerlerken şu gösterimler senkron olsun:

- hücresel konum;
- bilgi akışı;
- kullanılan/üretilen molekül;
- amino asit dizisi;
- proteinin şekli;
- proteinin nihai görevi.

Kodon tablosu kullanılabilir olmalı; öğrenci doğru amino asidi seçmeden süreç otomatik tamamlanmamalı. Mutasyon senaryolarında sessiz, yanlış anlamlı ve erken durdurma sonuçlarını karşılaştır; her mutasyonun fenotipi kesin değiştireceği yanılgısını düzelt.

#### 14. Genetik Mühendisliği ve Biyoteknoloji

Bu konu görsel listede yoktur fakat resmî programın zorunlu parçasıdır; ayrı sayfa oluştur.

Birincil öğrenme nesnesi: biyolojik bilgiyi ölçme, kopyalama, değiştirme ve ürün elde etme iş akışı.

Zorunlu sahneler:

- PCR döngüsü ve ürün artışı; sıcaklık evrelerini sıraya koyma.
- Jel elektroforezde DNA parçalarının ayrılması ve örnek karşılaştırma.
- Rekombinant DNA ile insülin üretimi iş akışı.
- Gen düzenleme, kök hücre, klonlama ve DNA parmak izi için kapsam sınırında karşılaştırmalı modeller.
- “Genetik mühendisliği” ile “biyoteknoloji” kavramlarını aynı şeymiş gibi sunma.
- Biyogüvenlik ve biyoetik karar alanı: kanıt, yarar, risk, adalet ve belirsizlik ayrı görünür olsun.
- Öğrencinin etik bir tartışmada tek doğru slogan yerine gerekçeli karar vermesini sağla.

### D. Enerji Dönüşümleri

#### 15. Canlılık ve Enerji

Birincil öğrenme nesnesi: ATP üzerinden enerji eşleştirme.

Zorunlu sahneler:

- ATP'nin yapı modeli ve ATP ↔ ADP + Pi döngüsü.
- Substrat düzeyinde, oksidatif ve fotofosforilasyonu konum ve enerji kaynağıyla karşılaştırma.
- Aktif taşıma, kasılma ve sentez gibi endergonik işlerle ATP hidrolizini eşleştirme.
- ATP'yi uzun süreli enerji deposu, enerjiyi madde veya “üretilen yeni bir şey” gibi gösterme.
- Fotosentez ve solunuma bağlanan ortak enerji/madde haritası.

#### 16. Fotosentez ve Kemosentez

Birincil öğrenme nesnesi: kloroplast içinde ışık ve karbonun farklı fakat bağlı yolları.

Bu sayfa atlasın kalite çıpalarından biridir.

Zorunlu ölçek yolculuğu:

- Bitki → yaprak → mezofil hücresi → kloroplast → tilakoit/grana ve stroma.
- Işığa bağımlı tepkimeler yalnız tilakoit zarında; Calvin döngüsü stromada gösterilsin.
- Su fotolizi, O₂ oluşumu, elektron aktarımı, proton gradyanı, ATP sentaz ve NADPH üretimi görsel olarak ayrıştırılsın.
- Calvin döngüsünde CO₂'nin bağlanması, indirgenme, PGAL çıkışı ve RuBP yenilenmesi; müfredatın gerektirmediği ara enzim/ürün ezberi varsayılan görünümde yer almasın.
- Atom izleme modu: sudaki oksijenin O₂'ye, CO₂ karbonunun organik ürüne gidişi.
- Işık şiddeti, dalga boyu, sıcaklık, CO₂ ve klorofil miktarı için kontrollü deney; öğrenci önce eğriyi tahmin etsin.
- Sınırlayıcı faktör değişince sahne, hız göstergesi ve grafik birlikte güncellensin.
- Döngüsel/döngüsel olmayan fotofosforilasyonu kapsam filtresine göre göster.
- Kemosentezde ışık yerine inorganik madde oksidasyonundan enerji elde edilmesini ve madde döngülerine katkıyı karşılaştır.
- “Bitkiler yalnız fotosentez yapar” ve “üretilen O₂ CO₂'den gelir” yanılgılarını hedefle.

#### 17. Hücresel Solunum

Birincil öğrenme nesnesi: glikozun karbon ve elektronlarının ATP üretimine bağlanması.

Bu sayfa atlasın kalite çıpalarından biridir.

Zorunlu ölçek yolculuğu:

- Hücre → sitoplazma → mitokondri → matriks → iç zar/krista.
- Glikoliz sitoplazmada; pirüvatın mitokondriye geçişi; Krebs döngüsü matrikste; ETS ve ATP sentaz iç zarda gösterilsin.
- Karbon izleme, elektron taşıyıcı izleme ve ATP üretim türü için üç görünüm.
- NADH/FADH₂'nin ayrıntılı sayısal ezberini varsayılan görünüme yığma; programın istediği nitel ilişkiyi önce kur.
- Proton gradyanı ve kemiosmoz animasyonu fotosentezle yan yana karşılaştırılabilsin.
- Oksijenli solunum, laktik asit fermantasyonu, etil alkol fermantasyonu ve oksijensiz solunum kavramlarını ürün, elektron alıcısı, yer ve enerji verimi bakımından ayır.
- Karbonhidrat, yağ ve proteinlerin solunuma katılım noktalarını karşılaştırmalı, düzey uygun bir şemada göster.
- Öğrenci oksijen ve canlı türü koşulunu seçsin; yol otomatik değil koşula göre dallansın.
- “Oksijenli solunum yalnız mitokondrili canlılarda olur” ve “solunum yalnız gaz alışverişidir” yanılgılarını düzelt.

### E. Bitki Biyolojisi

#### 18. Bitki Biyolojisi

Birincil öğrenme nesnesi: bitkinin çevresinden madde alıp taşıyan, büyüyen, tepki veren ve üreyen bütünleşik organizma olması.

Bu sayfa uzun statik metin olmamalı; bir bütün bitki üzerinde beş bağlantılı istasyon bulunmalı:

1. **Yapı ve dokular:** kök, gövde, yaprak; örtü, temel, iletim, destek ve meristem dokularını kesit merceğiyle inceleme.
2. **Su ve mineral alımı/taşınması:** kök tüyü → korteks → endodermis → ksilem; kohezyon-gerilim, adezyon, kök basıncı, gutasyon ve terleme.
3. **Organik madde taşınması:** kaynak–havuz seçimi ve floemde basınç akış modeli; yönün kaynak/havuza göre değişmesi.
4. **Hormonlar ve hareket:** oksin, giberellin, sitokinin, etilen, ABA; fototropizma, gravitropizma, hidrotropizma, nasti ve fotoperiyodizm için zaman atlamalı gözlem.
5. **Çiçekli bitkilerde üreme:** çiçek anatomisi, tozlaşma, çift döllenme, tohum/meyve oluşumu, dormansi ve çimlenme deneyi.

Zorunlu bütünleştirme:

- Bir stoma açıklığı değiştiğinde CO₂ girişi, terleme, ksilem akışı ve fotosentez hızı ilişkili göstergelerde birlikte değişsin.
- Kuraklık senaryosunda ABA, stomalar ve büyüme arasında kazanç–bedel ilişkisi görünür olsun.
- Anatomik kesit üzerinde seçilen dokunun fizyolojik rolü anında vurgulansın.
- Bitki hareketlerini “yer değiştirme yoksa hareket yoktur” yanılgısını düzeltecek zaman ölçeğinde göster.

## Anatomi atlaslarından alınacak ürün dersleri

BioDigital Human, Visible Body ve Complete Anatomy gibi dijital anatomi platformlarını tasarım örüntüsü açısından incele; onların ticari varlıklarını, modellerini, metinlerini veya arayüzünü kopyalama.

Alınacak ürün dersleri:

- döndür, kaydır, yakınlaştır ve seçili yapıya odaklan;
- yapı ağacında sistemden organa in;
- seçili yapıyı izole et, soldur, gizle ve geri getir;
- komşulukları kaybetmeden X-ray/şeffaflık kullan;
- kesit ve mikroanatomiye bağlamsal geçiş yap;
- hazır rehberli turlar ile serbest keşfi birlikte sun;
- seçili görünümü URL ile paylaşılabilir kıl;
- sahne üzerinde etiket kalabalığı yerine seçime bağlı ayrıntı göster;
- anatomi ile hareket/fizyoloji animasyonunu aynı yapıya bağla.

Bu desenleri lise öğrencisi için sadeleştir. Tıp öğrencisi arayüzündeki binlerce yapı, terminoloji yoğunluğu ve küçük hedefleri kopyalama.

## Ortak atlas deney modeli

Her konu sayfası aynı görsel şablon olmak zorunda değildir; ancak aynı öğrenme ritmini desteklemelidir:

1. **Keşfet:** yapı veya süreç serbestçe incelenir.
2. **Rehberli tur:** kısa, adımlı ve bağlamsal bir öğrenme rotası.
3. **Neden böyle?:** yapı–işlev ve neden–sonuç açıklaması.
4. **Karşılaştır:** iki durum, süreç, organ, koşul veya model senkron gösterilir.
5. **AYT Ustalaş:** özgün şekil/grafik/süreç/çıkarım görevi.

Her ana etkileşim mümkün olduğunda şu döngüyü taşır:

**Tahmin et → değiştir/kur → oynat → gözle → açıkla → yeni duruma aktar.**

Yalnız sekme değiştirme, bilgi kartı açma, hover, dekoratif animasyon, hazır videoyu oynatma veya “cevabı göster” etkileşim sayılmaz.

### Çok ölçekli mercek

Atlasın ayırt edici ortak bileşenini kur:

- ölçek kırıntısı: organizma → sistem → organ → doku → hücre → organel → molekül;
- her ölçekte hangi temsilin gerçek ölçekli olmadığı açıkça belirtilebilsin;
- yakınlaştırma yalnız görsel büyütme değildir, yeni bilgi ve yeni etkileşim düzeyi açar;
- geri çıkınca önceki kamera, seçim ve bağlam korunur;
- telefon ekranında ölçek geçişi ayrı bir alt sayfa/çekmece ile kullanılabilir kalır.

## Bilimsel ve pedagojik kurallar

- Anatomi ve fizyoloji başlık olarak ayrılmasın; öğrenci yapıya tıkladığında işlevi, süreci seçtiğinde ilgili yapıyı görsün.
- Her sayfa için birincil yanlış kavrama listesi hazırla ve etkileşimi bunlardan en az birini görünür kanıtla düzeltecek şekilde tasarla.
- Lise düzeyini aşan ayrıntıları varsayılan görünümde gösterme. Gerçek öğrenme değeri varsa “Meraklısına” katmanına taşı ve sınav çekirdeğinden açıkça ayır.
- Hastalıklar ana iskelet değil, normal yapı/işlevi karşılaştırarak anlamaya yarayan bağlamsal örneklerdir.
- Sağlık bölümleri tanı, tedavi, ilaç veya kişisel tıbbi öneri sunmaz.
- Kadın/erkek anatomisi, gebelik, üreme ve engellilik konularında kapsayıcı, yaşa uygun ve yargısız dil kullan.
- Modellerde temsili hız, ölçek, renk ve oranlar dürüstçe belirtilsin.
- Her süreçte doğru hücresel/anatomik konum görünür olsun.
- Renk tek bilgi taşıyıcısı olmasın; şekil, desen, etiket, yön ve metinle destekle.
- Yanlış yanıtta yalnız kırmızı gösterme; hangi ilişkiye bakılması gerektiğini söyle.
- İlk yanlışta ipucu, ikinci yanlışta çözüm yaklaşımı, tamamlandıktan sonra nedensel açıklama sun.
- İlerleme, sayfa açılması veya rastgele tıklama ile değil ana öğrenme eylemi + kontrol görevi tamamlandığında kaydedilsin.

## AYT ölçme modeli

ÖSYM sorularını kopyalama. Yayımlanmış sorulardan yalnız beceri örüntülerini çıkar:

- etiketli/numaralı şekil yorumlama;
- yapı–işlev çıkarımı;
- süreç sırası ve konum bilgisi;
- değişen/değişmeyen nicelik;
- grafik ve veri yorumlama;
- “kesinlikle”, “olabilir”, “söylenemez” ayrımı;
- deney düzeneği ve değişken kontrolü;
- iki veya üç önermeyi birlikte değerlendirme;
- bir sistemdeki değişimin diğer sistemdeki sonucunu tahmin etme.

Her sayfada en az:

- bir sahne içi mikro kontrol;
- bir özgün AYT tarzı şekil/grafik görevi;
- bir transfer sorusu;
- bir yanlış kavrama teşhisi;
- neden doğru/neden yanlış gerekçesi bulunmalıdır.

Soru sayısı kalite yerine geçmez. Aynı şablonu farklı isimlerle çoğaltma.

## Görsel dil ve ImageGen kullanımı

### Genel yön

Ürün yönü: **premium eğitim ortamı × sakin bilimsel kesinlik × canlı sistemler × öğrenme nesnesi merkezli etkileşim**.

- Genel SaaS paneli, bento kart yığını, dev landing hero, neon laboratuvar, oyun haritası klişesi veya tıp yazılımı taklidi üretme.
- İlk viewportta konu başlığı, merkezi öğrenme nesnesi ve ana etkileşim görünür olsun.
- Kontroller sahneyle yarışmasın.
- Kart içinde kart ve sürekli açık panel yığınlarından kaçın.
- DRKOÇ tipografi, boşluk, kontrol boyutu, odak ve durum dilini koru; biyolojiye özgü renkleri semantik kullan.
- Damar, oksijenli kan, sinir impulsu, hormon, elektron, proton, su ve karbon gibi roller için konu kapsamında sabit semantik renk/işaret sistemi tanımla.
- Dolu gradyanı dekorasyon için yayma. Ağır blur, glow ve sürekli parçacık efektlerinden kaçın.

### ImageGen politikası

ImageGen'i şu işler için kullanabilirsin:

- etiketsiz bilimsel eğitim illüstrasyonu;
- organ/sistem sayfasının sakin, gerçekçi fakat ders kitabı düzeyinde ana görsel tabanı;
- doku veya organ yakın görünümü için raster arka plan;
- rehberli turun atmosferik ama bilimsel sahne geçişleri;
- mevcut varlıkta eksik olan, sonradan kodla tıklanabilir katman bindirilecek görsel taban.

ImageGen'i şu işler için kullanma:

- etiketli bilimsel diyagramı tek başına üretmek;
- anatomik geometri, damar/sinir bağlantısı veya hücresel konumu doğruluk kaynağı saymak;
- etkileşimli 3B model üretmiş gibi davranmak;
- okunması gereken Türkçe metni görüntünün içine gömmek;
- aynı işlevi daha doğru ve erişilebilir biçimde SVG/HTML/Canvas ile kurabilecekken raster kullanmak.

Ana anatomik etiketler, bağlantılar, süreç okları, grafikler ve değişen durumlar kod tabanlı SVG/Canvas/HTML/WebGL katmanlarında deterministik olmalıdır. Üretilmiş bitmap yalnız görsel taban olabilir.

Her yeni üretim için ImageGen becerisindeki `scientific-educational` kullanım türünü seç; istemi yapılandır:

- kullanım yeri;
- gösterilecek tek ana yapı/sahne;
- kamera/bakış yönü ve kesit;
- bilimsel doğruluk sınırları;
- nötr arka plan ve kod katmanı için negatif alan;
- etiketsiz, metinsiz, logosuz, filigransız olma;
- kaçınılacak yapısal hatalar.

Her varlığı üretimden sonra görsel olarak incele. Bilimsel doğruluğu şüpheli görseli kullanma. Proje varlığı olacaksa seçilen çıktıyı `public/atlas-assets/ayt-biyoloji/` altında konu ve sürüm belirten adla sakla. Üretim istemini, kullanım yerini ve doğrulama notunu bir varlık manifestine yaz. Mevcut dosyanın üstüne yazma; yeni sürüm adı kullan.

### 3B varlık politikası

- ImageGen gerçek 3B anatomi geometrisinin kaynağı değildir.
- Tam döndürülebilir insan/organ modeli için lisansı açık ve proje kullanımına uygun GLB/GLTF model gerekir; lisans ve kaynak kaydı tutulmadan depoya alma.
- Kaynak model bulunamazsa yanlış 3B vaat etme. Katmanlı 2.5B SVG/raster + kod tabanlı hotspot/kesit yaklaşımıyla bilimsel olarak daha güvenli bir sürüm üret ve sınırlamayı açıkça bildir.
- Yeni ağır WebGL/3B bağımlılığı yalnız döndürme, kesit ve komşuluk öğrenme hedefini belirgin biçimde iyileştiriyorsa eklenebilir. Önce mevcut bağımlılıklarla çözümü değerlendir.

## Teknik mimari

Mevcut React 18 + Vite + Tailwind yapısını koru. Önerilen ayrım:

- `src/pages/AytBiyolojiAtlasi.jsx`
- `src/components/ayt-biyoloji/ortak/**`
- `src/components/ayt-biyoloji/alanlar/**`
- `src/components/ayt-biyoloji/konular/**`
- `src/components/ayt-biyoloji/sahneler/**`
- `src/data/ayt-biyoloji/manifest.js`
- `src/data/ayt-biyoloji/yanilgilar.js`
- `src/data/ayt-biyoloji/gorselManifest.js`
- `src/lib/ayt-biyoloji/**`
- `src/styles/ayt-biyoloji-atlasi.css`
- `scripts/test-ayt-biyoloji-atlasi.mjs`

Adlar mevcut depo örüntüsüne göre uyarlanabilir; fakat veri, bilimsel motor, React görünümü ve stil sorumlulukları ayrılmalıdır.

### Tek kaynak manifest

Her konu kaydı en az şu alanları taşısın:

- `id`, `slug`, `baslik`, `anaAlan`, `siniflar`;
- `kapsamlar`, `program`, `tema`, `resmiKodlar`;
- `ogrenmeHedefleri`, `aytBecerileri`, `onKosullar`;
- `birincilOgrenmeNesnesi`, `anaEylem`, `nedenSonuc`;
- `sahneler`, `etkilesimIdleri`, `motorIdleri`;
- `yanilgiIdleri`, `transferGorevleri`;
- `mufredatSiniri`, `meraklisina`;
- `erisebilirSahneOzeti`, `resmiKaynaklar`;
- `varliklar`, `varlikKaynaklari`, `lisansNotu`.

Arama, gezinme, ilerleme, kapsam görünümü ve testler bu manifestten beslensin. Aynı kimliği farklı dosyalarda elle tekrar etme.

### Etkileşim kayıt sistemi

Her etkileşim kaydı şu kanıtları taşısın:

- gerçek bileşen;
- saf motor veya açık durum makinesi;
- öğrenci girdisi;
- gözlenebilir durum değişimi;
- başarı koşulu;
- yanlış kavrama bağlantısı;
- transfer görevi;
- davranış testi.

“Bileşen adı var” veya “düğme DOM'da bulunuyor” çalışan etkileşim kanıtı değildir.

### Teknoloji seçimi

- SVG: sınırlı sayıda etkileşimli anatomi, organel, süreç ve grafik katmanı.
- Canvas: nöron ağı, çok sayıda molekül/parçacık, akan kan/gaz/iyon görselleştirmesi.
- HTML: kontroller, açıklamalar, erişilebilir eşdeğerler ve veri tabloları.
- Recharts veya mevcut grafik teması: standart grafikler; doğrudan manipülasyon gereken yerde özel SVG.
- WebGL: yalnız lisanslı 3B geometri ve gerçek uzamsal öğrenme gereksiniminde.

Hızlı değişen simülasyon durumunu gereksiz React yeniden çizimine dönüştürme. Animasyon döngülerini görünmeyen sekmede veya sahne ekrandan çıktığında durdur. Zamanlayıcıları unmount sırasında temizle. Rastgelelik varsa seed kullan. Testler deterministik olsun.

## Responsive ve erişilebilirlik

- Masaüstü: geniş sahne, bağlamsal anatomi ağacı ve temel kontroller.
- Tablet: katlanabilir ağaç/denetçi, sahne odaklı görünüm.
- Telefon: tek odak modu; alt sayfa/çekmece; en az 44 px ana dokunma hedefleri; sahne mobil için yeniden kadrajlanmış olmalı.
- Masaüstünü telefona küçültme. Temel etkileşim her ekranda gerçekten yapılabilir olmalı.
- Hover tek bilgi kanalı olmasın.
- Sürükle-bırak için klavyeyle seç–taşı–yerleştir veya eşdeğer buton grubu sağla.
- Semantik `button`, `nav`, `main`, `aside`, `section` kullan.
- Seçili yapının adı ve güncel sahne sonucu erişilebilir metin olarak güncellensin; her animasyon karesini canlı bölgeye duyurma.
- Açılan çekmece odağı yönetmeli ve kapanınca tetikleyiciye dönmeli.
- `prefers-reduced-motion` için süreçleri adım adım gösteren eşdeğer mod sağla; anlam kaybolmasın.
- Yalnız renge dayalı kodlama yapma.
- 375 px telefon, 768 px tablet ve 1440 px masaüstünde; ayrıca cihaz yönü değişiminde kontrol et.

## Görsel geliştirme döngüsü

Her büyük sayfa için şu döngüyü gerçekten uygula:

1. Mevcut içerik ve varlıkları incele.
2. Birincil öğrenme nesnesi ve yanlış kavramayı yaz.
3. Çalışan düşük karmaşıklıklı sahne iskeletini kur.
4. Tarayıcıda gerçek içerikle aç.
5. Tahmin, oynat, yakınlaştır, izole et, sıfırla ve AYT görevi akışını tamamla.
6. Masaüstü ve telefonda ekran görüntüsü al ve karşılaştır.
7. Öğrenme nesnesini küçülten panel, aşırı kart, etiket çakışması, kontrol yoğunluğu ve taşmayı düzelt.
8. İkinci geçişte hareket/neden–sonuç; üçüncü geçişte responsive/erişilebilirlik; son geçişte performans ve bilimsel doğruluk yap.
9. Test ve build sonrasında son render'i yeniden incele.

Kaynak kodun mantıklı görünmesi görsel doğrulama değildir.

## Aşamalı uygulama planı ve kalite kapıları

Bu kapsamı tek dev bileşende veya tek yüzeysel geçişte bitirmeye çalışma.

### Aşama 0 — kapsam, envanter ve mimari karar

Teslimler:

- eski program + TYMM + AYT beceri çapraz matrisi;
- mevcut ders/figür/görsel varlık envanteri;
- sayfa ve sahne manifesti;
- 3B lisans/teknoloji kararı;
- performans ve erişilebilirlik bütçesi;
- dört kalite çıpası için kısa tasarım özeti.

Kalite kapısı: her resmî başlık bir sayfaya ve gerçek etkileşime eşlenmeden uygulama çoğaltmasına geçme.

### Aşama 1 — atlas kabuğu ve ortak motorlar

Teslimler:

- yeni rota ve kütüphane kartı;
- yaşam sistemleri haritası;
- kapsam filtreleri;
- arama, URL, geri/ileri, ilerleme;
- çok ölçekli mercek;
- sahne kontrolü, zaman kontrolü, katman ağacı, ölçüm ve AYT görev kabukları;
- yükleme, hata, boş ve düşük hareket durumları.

Kalite kapısı: klavye ve telefonla bir örnek konuya girilip ölçek değiştirilebilmeli, sahne sıfırlanabilmeli.

### Aşama 2 — dört kalite çıpası

Önce şunları yüksek kalitede tamamla:

1. Sinir Sistemi: vücut → ağ → nöron → sinaps.
2. Protein Yolculuğu: gen → mRNA → ribozom → katlanma → hedef → işlev.
3. Fotosentez: yaprak → kloroplast → tilakoit/stroma → faktör deneyi.
4. Hücresel Solunum: hücre → mitokondri → matriks/iç zar → yol ayrımı.

Kalite kapısı: dört sayfanın gerçek sahne değişimi, doğru konum, senkron grafik/ölçüm, yanlış kavrama ve özgün AYT görevi tarayıcıda doğrulanmalı. Bu kalite sabitlenmeden kalan sayfaları seri üretme.

### Aşama 3 — İnsan Fizyolojisi ailesi

Sıra:

- Homeostazi merkezi;
- Endokrin + Duyu;
- Destek/Hareket;
- Sindirim;
- Dolaşım/Bağışıklık;
- Solunum;
- Üriner;
- Üreme/Embriyonik gelişim.

Kalite kapısı: her sistem anatomik bütün görünüm, en az bir mikro ölçek, çalışan fizyolojik süreç ve diğer sistemle en az bir bağlantı taşımalı.

### Aşama 4 — Genden Proteine ve Enerji ailesi

- Nükleik Asitler;
- Biyoteknoloji;
- Canlılık ve Enerji;
- kalite çıpalarının kapsam tamamlamaları ve karşılaştırma modları.

Kalite kapısı: moleküler konum, bilgi/madde/enerji akışı ve müfredat sınırları içerik denetiminden geçmeli.

### Aşama 5 — Bitki, Ekoloji ve Çevre

- Bitki Biyolojisi'nin beş istasyonu;
- Komünite ve Popülasyon Ekolojisi;
- Canlılar ve Çevre.

Kalite kapısı: bitki anatomisi/fizyolojisi gerçekten bütünleşmiş; popülasyon ve seçilim modelleri zamanla çalışan, temsili varsayımları açıklanmış olmalı.

### Aşama 6 — AYT ustalık ve bütünleştirme

- her sayfanın özgün şekil/grafik/süreç görevleri;
- sistemler arası karma görevler;
- hata defteri ve gecikmeli tekrar;
- program/kapsam tamamlanma görünümü;
- kopyalanmamış, özgün mini denemeler.

Kalite kapısı: tamamlama tıklamaya değil öğrenme kanıtına dayanmalı; yanlış gerekçeleri konuya özgü olmalı.

### Aşama 7 — son QA ve regresyon

- bilimsel içerik denetimi;
- tarayıcı etkileşim denetimi;
- responsive, klavye, odak, kontrast ve reduced-motion;
- düşük güçlü cihaz performansı ve paket boyutu;
- TYT Biyoloji, Fizik, Kimya ve ortak navigasyon regresyonları;
- production build.

Kalite kapısı: açık eksik yoksa tamamla; kalan eksikleri “tamamlandı” diyerek saklama.

## Zorunlu testler

### Manifest ve kapsam testleri

- bütün zorunlu sayfalar manifestte var;
- her resmî kazanım/çıktı en az bir sayfa ve sahneye bağlı;
- her sahnenin etkileşim, motor, başarı, yanılgı ve transfer kaydı var;
- kapsam filtreleri aynı içeriği doğru etiketlerle gösteriyor;
- görsel varlıkların kaynak/lisans ve alt metin kaydı var.

### Saf motor testleri

En az şu değişmezleri doğrula:

- impuls hep-ya-hiç, şiddet sıklıkla kodlanır;
- hormon geri bildirimi hedefe yaklaşır, negatif değer üretmez;
- sarkomer kayma modelinde filament boyları değişmez;
- kalp kapakları basınç yönüne uygun çalışır;
- gazlar kısmi basınç farkına göre hareket eder;
- nefron maddeleri doğru bölüm ve işlem sırasını izler;
- menstrual döngü olayları hormon değişimleriyle tutarlıdır;
- DNA eşleşmesi ve replikasyon kuralları doğrudur;
- kodon/antikodon ve amino asit eşleşmesi doğrudur;
- mutasyon türü protein sonucunu doğru etkiler;
- fotosentez süreçleri doğru kloroplast bölgesindedir;
- solunum süreçleri doğru hücresel/organel bölgesindedir;
- popülasyon negatif olmaz ve taşıma kapasitesine uygun davranır;
- seçilim modeli ihtiyaca göre mutasyon üretmez;
- reset bütün zaman, sayaç, grafik ve seçim durumunu temizler.

### Davranış testleri

En az şu gerçek akışları doğrula:

1. Sinir sisteminde vücut görünümünden tek nörona yaklaşılır; uyarı eşik altındayken impuls oluşmaz, eşik üstünde oluşur; sıklık değişir.
2. Refleks ve bilinçli yanıt yolları farklı süre/yol gösterir.
3. Endokrin glikoz devresinde öğün sonrası değer yükselir ve geri bildirimle hedefe yaklaşır.
4. Göz modelinde mercek/odak değişimi retina görüntüsünü etkiler.
5. Sarkomer kasılmasında A bandı değişmez; ilgili bölgeler görsel olarak güncellenir.
6. Sindirimde yağ seçildiğinde emilim rotası lenf üzerinden ilerler.
7. Kalp döngüsünde odacık kasılması, basınç ve kapak durumu senkrondur.
8. Alveol modelinde gradyan ters çevrilince net gaz akışı değişir.
9. Nefronda üre doğru yapılardan geçer; glikoz normal senaryoda geri emilir.
10. Menstrual döngü grafiğinde LH piki ve ovulasyon ilişkisi doğru görünür.
11. Protein yolculuğunda yanlış kodon/amino asit seçimi ilerlemeyi gerekçeli biçimde durdurur.
12. Salgı proteini doğru organel rotası kurulmadan hücre dışına çıkmaz.
13. Fotosentezde tilakoit/stroma olayları karıştırılırsa sistem mekânsal ipucu verir.
14. Sınırlayıcı faktör değiştiğinde hız grafiği ve O₂ çıktısı değişir.
15. Solunumda glikoliz sitoplazmada; Krebs ve ETS doğru mitokondri bölgelerinde ilerler.
16. Bitkide stoma kapanması su kaybını azaltırken CO₂ girişi/fotosentezi sınırlar.
17. Popülasyon kapasitesi düşünce nüfus yeni dengeye yaklaşır.
18. Antibiyotik senaryosunda direnç ihtiyaç nedeniyle aniden oluşmaz; mevcut varyasyon seçilir.
19. URL ile açılan konu, sahne ve mod doğru yüklenir; geri/ileri çalışır.
20. Tamamlanma yalnız ana görev ve kontrol başarıyla bitince kaydedilir.

### Görsel ve performans QA

- 375, 768 ve 1440 px genişliklerde her ana alanın girişini ve kalite çıpası sayfalarını incele.
- İnsan anatomisi sahnesinde etiket çakışması, kırpma, yanlış katman sırası ve kayıp yönelim olmadığını doğrula.
- Dokunma ile döndürme/sürükleme ve sayfa kaydırma çatışmasını çöz.
- Konsolda hata, `NaN`, sonsuz render, temizlenmemiş zamanlayıcı veya bozuk varlık isteği bulunmasın.
- Sahne görünmezken animasyon döngüsü çalışmasın.
- Konu modülleri başlangıç paketine yığılmasın.
- Açık/koyu tema varsa ikisinde de kontrastı doğrula.
- Ekran görüntülerini ilk tasarım hedefiyle karşılaştır ve en az bir anlamlı iyileştirme geçişi yap.

## Tamamlanma tanımı

Görev ancak aşağıdakilerin tamamı kanıtlandığında bitmiştir:

- AYT Biyoloji Atlası ayrı rota ve kütüphane girişiyle çalışır.
- İnsan sistemleri İnsan Fizyolojisi altında alt sayfalardır.
- Görsel listedeki bütün başlıklar ve eksik Biyoteknoloji başlığı kapsanmıştır.
- Yeni TYMM 11 Tepki/Homeostazi çıktıları ile AYT çekirdeği karıştırılmadan eşlenmiştir.
- Her konu için ayrı, paylaşılabilir sayfa/URL durumu vardır.
- Her konu en az bir gerçek, konuya özgü ve neden–sonuç üreten etkileşim taşır.
- Sinir, protein yolculuğu, fotosentez ve solunum kalite çıpaları çok ölçekli ve yüksek kalitededir.
- Anatomi ve fizyoloji öğrencinin deneyiminde ayrılmadan yapı–işlev olarak bağlanmıştır.
- ImageGen varlıkları bilimsel gerçeklik katmanı yerine kullanılmamış; kullanılan her varlık görsel ve bilimsel olarak denetlenmiştir.
- Bütün önemli süreçlerin konumu, girdi/çıktısı ve sonucu doğrudur.
- AYT görevleri özgündür; ÖSYM soruları kopyalanmamıştır.
- Telefon, tablet ve masaüstünde temel öğrenme eylemleri yapılabilir.
- Klavye, odak, renk dışı anlam ve azaltılmış hareket eşdeğeri vardır.
- Saf motor testleri, davranış testleri, regresyonlar ve production build geçmiştir.
- Son render gerçek tarayıcıda incelenmiş ve ekran görüntüleri teslim edilmiştir.
- Eksik veya sadeleştirilmiş alan varsa açıkça raporlanmıştır; var olmayan işlev tamamlanmış gibi sunulmamıştır.

## Son teslim mesajı

Genel ifadeler kullanma. Kısa ve somut biçimde şunları bildir:

- oluşturulan rota ve sayfalar;
- her sayfadaki birincil öğrenme nesnesi ve ana etkileşim;
- hangi mevcut içerik/figür/görsellerin yeniden kullanıldığı;
- hangi ImageGen varlıklarının neden üretildiği ve kaydedildiği yollar;
- varsa kullanılan 3B modelin kaynağı/lisansı ve teknik sınırlaması;
- dört kalite çıpasında öğrencinin yaptığı eylem ve gözlediği sonuç;
- masaüstü/tablet/telefon üzerinde test edilen kesin akışlar;
- çalıştırılan testler ve sonuçları;
- performans ve erişilebilirlik doğrulamaları;
- hâlâ eksik, temsili veya “Meraklısına” katmanında bırakılan ayrıntılar.

“Tüm gereksinimler karşılandı” cümlesini yalnız yukarıdaki kanıtların gerçekten tamamı varsa kullan.
