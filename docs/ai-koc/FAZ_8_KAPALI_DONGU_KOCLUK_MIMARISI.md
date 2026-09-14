# Faz 8 Kapalı Döngü Koçluk Mimarisi

Bu belge, Faz 7'nin kanıtlı analizini öneri → açık onay → görev → çalışma
kanıtı → ölçüm → sonraki karar zincirine bağlayan yerel Faz 8 mimarisini
açıklar. Faz 8 canlı migration, gerçek öğrenci verisi, gerçek backfill,
ücretli model veya yayın yetkisi vermez.

## Öğrenci deneyimi

Ekranın birincil öğrenme nesnesi öğrencinin **bugünkü tek odak görevidir**.
Görev yoksa AI Koç, kanıta dayalı ve miktarı sınırlı bir öneriyi sohbet içinde
önizler. Öğrenci öneriyi düzenleyebilir, reddedebilir veya açıkça onaylayabilir.
Onaydan önce kalıcı görev oluşmaz.

Görev kartı hedefi, beklenen çalışma miktarını, başarı ölçütünü ve ilerlemeyi
gösterir. Gerekçe, güven ve kaynak bağı ikincil düzeydedir; ayrıntılı kanıt
“Neye göre?” açılımında bulunur. Böylece ekran bir gösterge paneline dönüşmeden
öğrenme eylemini öne çıkarır.

## Sürümlü sözleşmeler

| Sözleşme | Sürüm | Zorunlu anlam |
|---|---|---|
| Öneri | `coaching-recommendation@1` | Kanonik konu/kazanım, gerekçe, güven, sınırlı miktar, başarı ölçütü, güvenli hedef ve opak kanıt bağları |
| Görev | `coaching-task@1` | Öğrenci onayı, zaman aralığı, hedef, yaşam döngüsü, ilerleme, öğrenci beyanı ve platform doğrulaması |
| Sonuç | `coaching-outcome@1` | Önce/sonra/gecikmeli ölçüm, kullanılabilirlik sınıfı ve nedensellik iddiası taşımayan özet |
| AI Koç istemi | `v4-phase8-closed-loop` | Faz 7 gerçek–çıkarım–öneri–belirsizlik ayrımını koruyan kapalı döngü kuralları |

Öneri miktarı serbest metin değildir. Öğrencinin son yükü, kullanılabilir zamanı,
zorluk ve kanıt güvenine göre dar izinli aralıktan seçilir. Kanıt yetersizse
“öğrenmiş sayma” görevi değil, kısa bir ölçüm görevi önerilir.

## Güvenli hedef seçimi

Hedef yalnız yayımlanmış, öğrencinin erişebildiği, eğitim düzeyiyle uyumlu ve
aynı kanonik konu/kazanıma bağlı iç rotalardan seçilir. Tamamlanmış içerik,
öneri açıkça tekrar değilse yeniden görev yapılamaz. Başlık benzerliği tek başına
yeterli değildir.

Hedef kaldırılmışsa veya erişim kaybedilmişse görev kaybolmaz; güvenli alternatif
önerilir. Uygun platform hedefi yoksa çalışma `external_practice` olarak açıkça
etiketlenir ve yalnız öğrenci beyanıyla ilerler. Serbest URL, komut veya istem
metni hedef alanlarına taşınmaz.

## Yazma ve onay sınırı

AI aracı yalnız yapılandırılmış bir öneri önizlemesi üretir. Kalıcı yazı için:

1. öğrenci öneriyi açıkça onaylar;
2. sunucu öğrenci oturumunu, kanıt bağlarını ve hedefi yeniden doğrular;
3. öneri ve görev aynı transaction içinde oluşturulur;
4. `student + action_id + payload_hash` makbuzu aynı isteği tekilleştirir;
5. aynı kimlik farklı içerikle gelirse sessizce ezilmek yerine çatışma döner.

Reddetme, düzenleme, erteleme, iptal, başlatma, öğrenci beyanı, platform
doğrulaması ve sonuç kaydı da dar sunucu RPC'leriyle geçiş kurallarına uyar.
Normal roller tablolara doğrudan ekleme veya güncelleme yapamaz.

## Yaşam döngüsü ve kanıt eşleme

Görevler `accepted`, `in_progress`, `self_reported`, `verified`, `postponed`,
`cancelled` ve `rejected` anlamlarını birbirine karıştırmadan taşır. “Tamamladım”
düğmesi öğrenci beyanıdır; platform kanıtı gelmedikçe görev doğrulanmış sayılmaz.

Yeni kanıt yalnız şu koşullarda göreve bağlanır:

- aynı öğrenci ve aynı kanonik konu/kazanım;
- izinli kaynak ve olay türü;
- görev oluşturulduktan sonraki zaman;
- hedefin beklenen miktar ve tamamlama ölçütü;
- daha önce başka bir görevce tüketilmemiş opak kanıt referansı.

Eski olay, benzer başlıklı ilgisiz konu, başka öğrenci kanıtı veya yinelenen
kanıt görevi tamamlayamaz. Kısmi soru seti ilerleme olarak kalır; gerçek final
olayı gelmeden `verified` durumuna geçmez.

## Sonuç ölçümü ve sonraki karar

Sonuç kaydı görev öncesi baz çizgiyi, görev sonrası yeni ölçümü ve gerekiyorsa
gecikmeli tekrar ölçümünü ayrı saklar. Sonuç `useful`, `ineffective` veya
`unevaluable` olabilir. Metin yalnız “çalışmadan sonra iyileşme görüldü” gibi
zamansal ilişki kurar; tek görevden nedensellik çıkarmaz ve
`causal_claim=false` taşır.

Yeni platform kanıtı önce Faz 2 kanıt ağına, ardından Faz 6 öğrenci modeli
projeksiyonuna girer. Faz 8 sonucu bu modelin yerine geçmez; yalnız öneri,
gerçekleşen çalışma ve sonraki gözlem arasındaki karar ilişkisini saklar.

## Kararlı brifing

Günlük brifing en çok iki, haftalık görünüm en çok beş öncelik üretir. Aynı veri
aynı sırayı verir. Sıralama öncelikle öğretmen taahhüdü, süresi yaklaşan veya
aktif görev, ölçüm ihtiyacı ve yakın sonuç bağlamını dikkate alır. Eksik veri
sessizce başarıya çevrilmez; servis kesintisinde mevcut görevler korunur.

## Veri ve yetki modeli

`supabase/migration_learning_coaching_loop.sql` aşağıdaki public tabloları
tanımlar:

- `student_coaching_recommendations`
- `student_coaching_tasks`
- `student_coaching_task_events`
- `student_coaching_task_evidence`
- `student_coaching_outcomes`
- `student_coaching_feedback`

Tekilleştirme makbuzları private şemadadır. Altı public tablo `FORCE ROW LEVEL
SECURITY` kullanır; öğrenci yalnız kendi satırlarını okuyabilir. Hedef ve kanıt
doğrulaması istemciye bırakılmaz. Yanlış eşleme bildirimi ve öğrenci geri
bildirimi türetilmiş puanı doğrudan değiştirmez; denetlenebilir ayrı kayıt olur.

## Arayüz durumları ve erişilebilirlik

Öneri, onay, ilerleme, hata, boş ve tamamlandı durumları hem masaüstü hem telefon
boyutunda doğrulanır. Görev ve öneri kontrolleri klavye odağına, en az 44 piksel
dokunma alanına, yeterli kontrasta ve azaltılmış hareket tercihine uyar. Ağ
hatasında görev silinmez; yeniden deneme ve anlaşılır durum metni görünür kalır.

## Yerel kabul ve açık sınırlar

Tam runner 16/16 komutu; çekirdek koşu 19/19 uçtan uca senaryo, 9/9 kabul
kapısı ve 94 doğrulamayı; görsel koşu 12/12 masaüstü/telefon durumunu geçti.
Migration geçici PGlite
veritabanında iki kez uygulandı ve kasıtlı hata tam rollback oldu.

PGlite gerçek çok bağlantılı PostgreSQL yarışını sertifikalandırmaz. Bu yarış,
kapasite ve saldırı provası Faz 9'a; canlı migration, gerçek veri geçişi ve
ölçümlü yayın Faz 10'a bırakılmıştır. Canlı Supabase, gerçek öğrenci verisi,
gerçek backfill, ücretli model, deploy ve Git push kullanılmamıştır.

Makine kanıtları [Faz 8 kabul kaydı](kanitlar/faz-8/faz-8-kabul-sonucu.json),
[uçtan uca senaryolar](kanitlar/faz-8/uc-uca-senaryolar.json),
[yetki matrisi](kanitlar/faz-8/guvenlik-yetki-matrisi.json) ve
[görsel doğrulama](kanitlar/faz-8/gorsel-dogrulama.json) içindedir.
