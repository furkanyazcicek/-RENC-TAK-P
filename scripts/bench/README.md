# DrKoç Faz 0 — Model Benchmark

Gerçek YKS matematik soruları üzerinde vision+reasoning modellerini ölçer.
**Ürün kodu değildir**; `api/` ve `src/` altındaki hiçbir şeyi import etmez
ya da değiştirmez — tek istisna `src/lib/curriculum/` (konu enum'u ve konu
eşleştirmesi ürünle aynı kaynaktan gelmeli).

## Amaç

"En çok soruyu çözen model" değil:

> Yanlış cevap verdiğinde bunu bilen, doğru cevap verdiğinde doğru gerekçe
> sunan, maliyeti kontrol edilebilir, gerçek YKS sorularında ölçülmüş
> model/strateji.

---

## 1. Kurulum

### Anahtarlar

`.env.local` dosyasına ekle (bu dosya `.gitignore`'da):

```
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=...
ANTHROPIC_API_KEY=...     # isteğe bağlı
```

Anahtarı olmayan sağlayıcının modelleri **sessizce atlanır**, koşu durmaz.

### Fiyatları doğrula

⚠️ `config.mjs` içindeki fiyatlar üçüncü taraf kaynaklardan derlenmiş
**doğrulanmamış** değerlerdir. Karar vermeden önce sağlayıcının resmî fiyat
sayfasından kontrol et ve ez:

```
BENCH_MODEL_GPT_5_6_TERRA_IN=2.00
BENCH_MODEL_GPT_5_6_TERRA_OUT=12.00
```

Ezmediğin sürece rapor her sayfada "fiyat doğrulanmadı" uyarısı basar.

### Model ID'sini değiştirmek

```
BENCH_MODEL_GEMINI_3_1_PRO_ID=gemini-3.1-pro
BENCH_MODEL_GPT_5_6_SOL_OFF=1        # bu modeli atla
```

---

## 2. Gold veri

### Görseller

Soru fotoğraflarını `data/bench/images/` içine koy. JPEG/PNG/WebP.

**Fotoğraf kalitesi ölçümü doğrudan etkiler.** Tavsiye: soruyu tam
çerçeveleyen, düz, gölgesiz, uzun kenarı ~1500px. Çok yüksek çözünürlük
maliyeti artırır, çok düşük okumayı bozar.

### Etiketler

`data/bench/questions.example.jsonl` dosyasını kopyala:

```bash
cp data/bench/questions.example.jsonl data/bench/questions.jsonl
```

Her satır bir soru. Zorunlu: `id`, `exam`, `category`, `image_path`, ve
`gold_answer_choice` veya `gold_answer_value`.

Geçerli `gold_topic` değerlerini listele:

```bash
node -e "import('./scripts/bench/schema.mjs').then(m=>console.log(m.buildTopicEnum().join('\n')))"
```

**Gold veri gerçekten güvenilir olmalı.** Emin olmadığın alanı boş bırak —
yanlış gold, modeli haksız cezalandırır ve tüm raporu bozar. Koşucu eksik
gold cevabı veya kayıp görseli tespit ederse **koşmayı reddeder**.

### Hedef set

| Kategori | Adet | `category` değeri |
|---|---|---|
| TYT Matematik, şekilsiz | 50 | `tyt_mat_sekilsiz` |
| TYT Matematik, şekilli | 50 | `tyt_mat_sekilli` |
| AYT Matematik | 50 | `ayt_mat` |

50'nin altında koşabilirsin ama rapor "bu örneklemle karar verilemez"
uyarısı basar ve haklı olur: 20 soruda ölçülen %85'in gerçek aralığı
kabaca %65-95'tir.

---

## 3. Koşu

```bash
# Önce doğrulayıcıyı test et (hakem bozuksa her şey bozuk)
node scripts/bench/verify.test.mjs

# Plan gör, API çağırma
node scripts/bench/run.mjs --dry-run

# Küçük deneme — biçim ve anahtarlar çalışıyor mu
node scripts/bench/run.mjs --limit 3

# Tam koşu
node scripts/bench/run.mjs

# Kararlılık ölçümü: soruların %10'unu 3 kez koş
node scripts/bench/run.mjs --consistency 0.1

# Cascade deneyi: en ucuz model → kalanlar güçlü modele
node scripts/bench/run.mjs --cascade gpt-5.6-sol
```

Diğer bayraklar: `--models a,b`, `--category tyt_mat_sekilli`, `--no-cache`.

Çıktı `data/bench/results/<zaman-damgası>/`:

| Dosya | İçerik |
|---|---|
| `RAPOR.md` | insan okunur rapor |
| `summary.json` | metrikler |
| `raw.json` | her çağrının tam kaydı |
| `questions.json` | koşuda kullanılan gold veri |
| `review.json` | insan incelemeleri (varsa) |

---

## 4. Gerekçe incelemesi — atlanamaz adım

Koşu bittiğinde **"doğru cevap + yanlış gerekçe" oranı henüz ölçülmemiştir.**
Bu, DrKoç için en kritik metriktir ve otomatik ölçülemez.

```bash
node scripts/bench/review.mjs data/bench/results/<koşu>
node scripts/bench/run.mjs --regrade data/bench/results/<koşu>
```

Araç 900 çözümü elle okutmaz; en çok bilgi taşıyanları öne alır:

1. Doğru cevap + doğrulama zayıf → gizli yanlış gerekçe burada saklanır
2. Doğru cevap + yüksek güven
3. Yanlış cevap + yüksek güven
4. Rastgele denetim

Model başına 25-30 inceleme, oranı anlamlı bir hata payıyla ölçmeye yeter.

**Bu adım yapılmadan rapor "MVP kararı verilemez" der** ve doğru davranır.

---

## 5. Mimari

```
run.mjs ─── config.mjs        model kataloğu, fiyat, anahtar (env'den)
        ├── schema.mjs        JSON şeması + graph.js'ten konu enum'u
        │                     + TÜM MODELLERDE AYNI görev tanımı
        ├── providers/
        │     index.mjs       solve() sözleşmesi, retry, hata sınıfları
        │     openai.mjs      response_format: json_schema
        │     gemini.mjs      responseSchema (OpenAPI alt kümesi)
        │     anthropic.mjs   zorunlu tool-use
        ├── verify.mjs        deterministik doğrulama (kısıtlı mathjs)
        ├── grade.mjs         gold karşılaştırma
        ├── metrics.mjs       Wilson aralıkları, kalibrasyon, maliyet
        ├── cache.mjs         benchmark cache + ürün cache simülasyonu
        └── report.mjs        Markdown rapor
```

### Üç tasarım kuralı

**1. Görev tanımı sağlayıcıya göre değişmez.** Adaptörler yalnızca taşıma
biçimini çevirir. Bir sağlayıcı lehine prompt ayarlamak karşılaştırmayı
geçersiz kılar.

**2. AI'ın ürettiği kod asla çalıştırılmaz.** Model yalnızca dört önceden
tanımlı iddia türünü doldurabilir; ifadeler mathjs'in *ifade
ayrıştırıcısından* geçer, JavaScript yorumlayıcısından değil. mathjs'in
`import`/`evaluate`/`createUnit` fonksiyonları kapsamdan çıkarılmıştır.
`verify.test.mjs` bunu her sürümde doğrular.

**3. Konu serbest metin değil, enum.** Model yalnızca `graph.js`'te gerçekten
var olan bir konu adı üretebilir. Uydurma azaltılmaz, imkânsız kılınır.

### Deterministik doğrulamanın sınırı

Bu doğrulama **cebiri** kontrol eder, **modellemeyi** değil. AI soruyu
yanlış denkleme çevirip o yanlış denklem üzerinde kusursuz cebir yaparsa
doğrulama **geçer** ve cevap **yanlıştır**. Bu yüzden `verification_pass`
tek başına "doğru" demek değildir ve rapor bunu her seferinde yazar.

---

## 6. Ölçülenler

**Otomatik / kesin:** cevap doğruluğu, konu doğruluğu, şema uyumu, doğrulama
durumu, çekimserlik, gecikme (ort/p50/p95), token (girdi/çıktı/reasoning/
önbellek), maliyet, doğru cevap başına maliyet, kararlılık, cascade kazancı,
kalibrasyon eğrisi + ECE, güven kapısı.

**Otomatik / gösterge:** okuma benzerliği (eşiğin altı "yanlış" değil,
"insan baksın" olarak işaretlenir).

**İnsan:** gerekçe doğruluğu, doğru cevap + yanlış gerekçe oranı.

Her oran **Wilson güven aralığıyla** raporlanır. İki modelin aralıkları
çakışıyorsa rapor "fark ölçülemedi" der — "A daha iyi" demez.

---

## 7. Faz 0'ın karar kapısı

Rapor şu üçü sağlanmadan "MVP'ye geç" demez:

1. En az 50 soru
2. Gerekçe doğruluğu insan tarafından örneklem üzerinde incelenmiş
3. En az bir modelde çalışan bir güven kapısı bulunmuş — yani öyle bir
   eşik X ki, X üstündeki cevaplarda doğruluğun **alt sınırı** hedefi
   aşıyor ve soruların yeterli kısmı X'i geçiyor

Üçüncüsü bulunamazsa bu bir başarısızlık değil, bir **mimari bulgudur**:
o modelde güven skoruyla kapı kurulamaz, self-consistency veya her cevaba
uyarı gerekir.
