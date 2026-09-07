# Codex Uygulama İstemi — Faz 6: Öğrenci-Konu Modeli ve Hafıza

## Görevin

Faz 3, 4 ve 5'te ortak ağa bağlanan bütün öğrenme kanıtlarını öğrenciyi konu düzeyinde tanıyan, açıklanabilir, güven düzeyi taşıyan ve aynı veriden yeniden üretilebilen bir modele dönüştür.

Tek bir “başarı puanı” üretip bütün gerçeği ona sıkıştırma. AI Koç'un öğrenciyi tanıması; hangi kanıta dayanarak neyi bildiğini, neyi yalnız tahmin ettiğini ve nerede veri eksik olduğunu korumasına bağlıdır.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 kabul senaryoları ve kaynak matrisi
- Faz 1 konu/kanıt sözleşmeleri
- Faz 2 olay işleme ve yeniden oynatma altyapısı
- Faz 3, 4 ve 5 tamamlanma raporları ile testleri
- mevcut curriculum graph, readiness, taxonomy ve ai_student_memory kodu

Faz 3, 4 ve 5 kabul kapılarının üçü de geçmediyse bu fazı tamamlandı sayma.

## 1. Modelin kapsamı

Öğrenci için en az üç çözünürlükte durum üret:

- genel öğrenci görünümü;
- ders veya öğrenme programı görünümü;
- kanonik konu ve varsa kazanım görünümü.

Her konu durumunda en az şu boyutları ayrı tut:

- maruz kalma: konu görüldü mü, ne kadar çeşitli içerikte görüldü;
- çalışma hacmi: soru, etkinlik, tekrar ve anlamlı aktif çalışma;
- performans: doğru/yanlış/boş ve ölçülebilir sonuçlar;
- yardım bağımlılığı: ipucu, çözüm veya AI yardımı sonrası sonuç;
- kalıcılık: farklı tarihlerdeki tekrar sonuçları ve unutma işareti;
- akıcılık: güvenilir süre verisi varsa benzer zorlukta hız;
- zorlanma: sorunlu soru, tekrarlanan hata ve bırakılan girişim;
- tutarlılık: farklı kaynak ve zamanlarda sonucun kararlılığı;
- plan uyumu: önerilen/kararlaştırılan çalışmanın yapılma biçimi;
- güncellik: kanıtın yaşı ve durumun eskime düzeyi;
- veri kapsamı ve güven: kaç kaynak, kaç doğrudan kanıt, ne kadar belirsizlik.

Üründe bulunmayan ölçüyü uydurma. Güvenilir aktif süre yoksa akıcılık boyutunu bilinmiyor bırak.

## 2. Kanıt ağırlığı ve kaynak anlamı

Model, kaynakların gerçek anlamını korumalı:

- doğrudan soru veya etkinlik sonucu en güçlü performans kanıtlarındandır;
- aynı soru için çözüm görüldükten sonraki doğru cevap bağımsız doğruyla aynı değildir;
- günlük kayıt ve kullanıcı tamamlandı işareti beyan kanıtıdır;
- ders veya PDF açma maruz kalmadır;
- ödev atama veya plan oluşturma çalışma yapılmış anlamına gelmez;
- sorunlu soru zorlanma sinyalidir;
- model tarafından çıkarılan hata türü doğrulanmış gerçek değildir;
- konu dağılımı olmayan genel deneme konu puanı üretmez;
- farklı zorluk ve sınav ölçekleri doğrudan karşılaştırılmaz;
- birbirinin kopyası veya aynı girişimin parçası olan olaylar bağımsız örnek sayılmaz.

Ağırlıklar görünür, sürümlü ve test edilebilir olmalı. Gizli, değişken LLM yorumunu temel puanlama motoru yapma. İlk sürümde gerekirse sade ve kural tabanlı bir model seç; sahte kesinlik veren karmaşık formülden kaçın.

## 3. Örnek büyüklüğü, zorluk ve zaman

Şu etkileri açıkça ele al:

- tek sorudan ustalık sonucu çıkarma;
- küçük örneklemi yüksek güvenle sunma;
- kolay ve zor soruyu aynı kabul etme;
- yakın tarihli kanıta daha fazla önem verirken eski kanıtı silmeme;
- aralıklı başarılı tekrarın kalıcılık güvenini artırması;
- uzun aradan sonraki düşüşün unutma riski üretmesi;
- aynı oturumdaki art arda soruların bağımsız günlerdeki kadar çeşitlilik sağlamaması;
- soru zorluğu veya konu etiketi güvenilmezse bunu güvene yansıtma;
- iç ve dış kaynak verisini yalnız ölçüleri gerçekten karşılaştırılabiliyorsa birleştirme.

Model katsayılarını ve eşiklerini tek bir sürümlü yapılandırmada tut. Değişiklik model sürümü üretmeli ve önceki sonuçların yeniden hesaplanabilmesini sağlamalı.

## 4. Güven ve çelişki

Her sonuç en az şu bilgileri taşımalı:

- durum değeri veya sınıfı;
- güven düzeyi;
- doğrudan/dolaylı/beyan kanıt sayısı;
- kullanılan kaynak çeşitliliği;
- en yeni ve en eski ilgili kanıt zamanı;
- eşleşmeyen veya dışlanan kanıt sayısı;
- çelişki işareti;
- model ve konu sözleşmesi sürümü;
- son hesaplanma zamanı.

Platform sorularında iyi, dış günlük kaydında zayıf sonuç gibi çelişkileri ortalamayla görünmez kılma. Kaynak bazlı alt özetleri koru ve AI Koç'a çelişkiyi açıklama imkânı ver.

Güven eşiği yetersizse “zayıf”, “iyi” veya “öğrendi” gibi kesin sınıflandırma üretme; yetersiz veri durumu üret.

## 5. Dört katmanlı hafıza

AI_KOC_URUN_HAFIZASI.md içindeki hafıza ayrımını kalıcı yapıya uygula:

### Onaylı tercihler

Öğrencinin açıkça söylediği ve kalıcı olmasını kabul ettiği çalışma saati, hedef, anlatım tercihi gibi bilgiler. Mevcut beyaz liste yaklaşımını koru ve gerekirse güvenli biçimde genişlet.

### Türetilmiş öğrenme durumu

Bu fazın deterministik öğrenci-konu projeksiyonları. LLM tarafından serbestçe yazılamaz; kanıt ağından yeniden hesaplanır.

### Davranış örüntüleri

Örneğin sürekli erteleme, sabah daha tutarlı çalışma veya çözüm gördükten sonra düzelme gibi örüntüler. Her örüntü:

- açık bir kural veya sürümlü analiz yöntemi;
- yeterli örnek sayısı;
- destekleyen ve çürüten kanıt referansları;
- güven ve geçerlilik süresi;
- son doğrulama zamanı

taşımalı. Kişilik etiketi veya psikolojik teşhis üretme.

### Koçluk karar geçmişi

Öneri, plan, öğrenci onayı, uygulama ve sonuç ilişkisi. Bu katman Faz 8'de tamamlanacak; bu fazda ilişki sözleşmesi ve saklama yapısı hazırlanmalı.

Bu katmanları tek serbest metin hafıza alanında birleştirme. Öğrencinin düzeltebileceği bilgi ile sistemin kanıttan hesapladığı bilgi ayrı yönetilmelidir.

## 6. Deterministik projeksiyon

Faz 2 işleme altyapısını kullanarak:

- olayları kararlı sırayla işle;
- öğrenci + konu bazında artımlı güncelleme yap;
- geçersiz kılma ve düzeltmede eski etkiyi kaldır;
- model sürümü değişince yeniden hesapla;
- aynı olay kümesinden aynı sonucu üret;
- işleme yarıda kalınca kaldığı yerden güvenle devam et;
- geç gelen eski tarihli olayı doğru yere dahil et;
- bozuk bir konunun diğer öğrencileri veya konuları durdurmasını engelle.

Tam yeniden oynatma ile artımlı hesap sonucunu otomatik karşılaştır. Fark varsa tamamlandı deme.

## 7. Saklama ve sorgulama

AI Koç'un hızlı kullanacağı özet/projeksiyon yapısını oluştur. En az şu sorgular verimli olmalı:

- en çok desteğe ihtiyaç duyan güncel konular;
- son dönemde güçlenen ve gerileyen konular;
- bir konu için kaynak bazlı kanıt özeti;
- veri yetersiz konular;
- yaklaşan tekrar ihtiyacı;
- dil becerisi ilerlemesi;
- plan uyumu ve zorlanma örüntüleri;
- belirli bir iddianın dayandığı kanıtlar.

Özete tam soru metni, görsel, öğretmen mesajı veya öğrenci serbest yazısını kopyalama. Ayrıntı gerektiğinde kaynak yetkisi denetlenerek alınmalıdır.

İndeksleri gerçek sorgu planlarıyla doğrula. Bütün öğrenci tarihçesini her sohbet mesajında yeniden hesaplayan yapı kurma.

## 8. Açıklanabilirlik ve öğrenci düzeltmesi

Modelin her önemli sonucu şu sorulara makine tarafından cevap verebilmelidir:

- Hangi konu için?
- Hangi tarih aralığına göre?
- Hangi kaynaklardan?
- Kaç bağımsız doğrudan kanıtla?
- Yardım veya çözüm kullanımı hesaba katıldı mı?
- Hangi kanıtlar dışlandı ve neden?
- Güven neden yüksek, orta, düşük veya yetersiz?

Öğrenci bir tercihi veya dış çalışma kaydını düzelttiğinde projeksiyon güncellenmeli. Sistem kanıtından türetilmiş sonucu kullanıcı doğrudan keyfî puana çevirememeli; öğrenci kaynak kaydını düzeltebilmeli veya itiraz işareti bırakabilmelidir.

## 9. Model doğrulama seti

Faz 0 kabul senaryolarını çalıştırılabilir altın senaryolara dönüştür. En az şunları kapsa:

- aynı konu dış çalışma + platform soruları + AI Soru Çöz + deneme alt testi;
- yalnız ders açmış ama soru çözmemiş öğrenci;
- az sayıda yüzde 100 doğru soru;
- çok sayıda karışık zorlukta tutarlı başarı;
- çözüm gördükten sonra doğru yapan öğrenci;
- eski başarıdan sonra yeni başarısızlık;
- kaynaklar arası çelişki;
- yanlış konu etiketli veya karantinadaki kayıt;
- düzenlenmiş ve silinmiş günlük kayıt;
- iki kez aktarılan dil ilerlemesi;
- genel denemede konu dağılımı olmaması;
- planı işaretleyip kanıt üretmeyen öğrenci;
- veri bulunmayan yeni öğrenci.

Her senaryoda beklenen boyutları ve güven aralığını sabit test et. Yalnız anlık görüntü dosyasına güvenme; pedagojik anlamı açıklayan iddialar kullan.

## 10. Zorunlu teknik doğrulamalar

- artımlı hesap ile tam yeniden oynatma aynıdır;
- aynı olay kümesi farklı ekleme sıralarında aynı sonucu verir;
- düzeltme ve silme eski etkiyi kaldırır;
- model sürümü yükseltme eski veriyi yeniden üretir;
- başka öğrenci projeksiyonu okunamaz;
- kanıt referansı yetkisiz ayrıntı açmaz;
- veri yetersizliği kesin sonuca dönüşmez;
- kaynak çelişkisi görünür kalır;
- tek soru yüksek güvenli ustalık üretmez;
- büyük sentetik öğrenci geçmişinde belirlenen performans bütçesi aşılmaz;
- mevcut curriculum readiness davranışı korunur veya belgeli biçimde uyarlanır;
- üretim derlemesi ve mevcut testler geçer.

## Kabul kapıları

- Öğrenci durumu genel, ders ve konu düzeyinde üretilebiliyor.
- Maruz kalma, performans, zorlanma, kalıcılık ve plan uyumu ayrı boyutlardır.
- Her önemli sonuç kanıt, tarih, kaynak ve güven düzeyine geri izlenebiliyor.
- Model deterministik ve sürümlüdür.
- Düzeltme, silme ve geç gelen olay doğru sonucu üretir.
- Onaylı tercih, türetilmiş durum, davranış örüntüsü ve koçluk kararı ayrı katmanlardır.
- Veri yetersizliği ve çelişki gizlenmez.
- Altın senaryolar beklenen pedagojik anlamla geçer.
- Canlı veri izinsiz değiştirilmemiştir.

## Faz sonu

Model formülünü, eşikleri, sürümü, güven hesabını ve altın senaryo sonuçlarını MIMARI_KARARLAR.md içinde anlaşılır biçimde kaydet. FAZ_DURUMU.md dosyasını gerçek test ve performans kanıtlarıyla güncelle.
