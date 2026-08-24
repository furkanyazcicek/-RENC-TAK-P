# Seslendirme Kurulumu — Adım Adım

Bu dosya, padişah anlatımlarının sesini üretmek için gereken tek şeyi
anlatır: **bir ses servisi anahtarı.** Kod tarafı hazır; anahtar geldiği
anda tek komutla 36 padişahın sesi çıkar.

> **Önemli:** Aşağıdaki sitelerin tamamı İngilizcedir. Hangi düğmeye
> basacağın adım adım yazıldı; anlamadığın bir ekran çıkarsa ekran
> görüntüsü at, birlikte bakarız.

---

## Önce karar: hangi servis?

| | OpenAI | ElevenLabs |
|---|---|---|
| 36 padişahın tamamı | ~1 dolar | ~12 dolar |
| Deneme yapmak | En az 5 dolar yüklemen gerekir | Ücretsiz hesapla denenebilir |
| Türkçe belgesel tonu | İyi ama tonlaması düz | Belirgin şekilde daha iyi |

**Önerilen deneme yolu:** Önce ElevenLabs'in ücretsiz hesabıyla tek
padişahı üret, dinle. Beğenmezsen OpenAI'a 5 dolar yükleyip onu da dene.

*(Fiyatlar ve ücretsiz kota zaman içinde değişebilir; kayıt olurken
sayfada yazan güncel rakama bak.)*

---

## A) ElevenLabs anahtarı alma

1. **elevenlabs.io** adresine gir.
2. Sağ üstteki **"Sign up"** düğmesine bas. Google hesabınla girebilirsin.
3. Kayıt sonrası karşına plan seçimi çıkarsa **"Free"** planı seç.
   Deneme için yeterli.
4. Sol menüden **"Voices"** → **"Voice Library"** bölümüne gir.
   - Arama kutusuna **Turkish** yaz.
   - Anlatıcı tonuna uygun, **erkek veya kadın, sakin** bir ses seç.
   - Sesin üzerine gel → **"Add to my voices"** de.
   - Sonra **"My Voices"** listesinde o sesin yanındaki üç noktaya bas →
     **"Copy voice ID"**. Çıkan uzun kodu bir yere yapıştır.
5. Sağ üstteki profil resmine bas → **"API Keys"** → **"Create API Key"**.
   - Çıkan koda bir isim ver (örneğin `drkoc`), **"Create"** de.
   - Anahtar bir kez gösterilir; **kopyala.**

Elinde iki şey olacak: **API anahtarı** ve **ses kimliği (voice ID).**

---

## B) OpenAI anahtarı alma

1. **platform.openai.com** adresine gir, hesabınla giriş yap.
2. Sol menüden **"Billing"** → **"Add payment method"** ile kart ekle.
3. **"Add to credit balance"** ile bakiye yükle. **En az 5 dolar** ister.
   Bu tutar 36 padişahın tamamına fazlasıyla yeter.
4. Sol menüden **"API keys"** → **"Create new secret key"**.
   - İsim ver, **"Create secret key"** de.
   - Anahtar bir kez gösterilir; **kopyala.** `sk-` ile başlar.

---

## Anahtarı yerine koyma

Proje klasöründe **`.env.local`** adında bir dosya var (yoksa oluşturulur).
Anahtarı oraya yazacağız. Bu dosya yedeklemeye **girmez**, internete
**gitmez**, sadece senin bilgisayarında durur.

İki yolu var:

- **Kolay yol:** Anahtarı bana ver, dosyaya ben yazayım.
- **Kendin yapmak istersen:** `.env.local` dosyasını herhangi bir metin
  düzenleyiciyle aç ve alttaki satırları ekle.

**ElevenLabs kullanacaksan:**

```
TTS_PROVIDER=elevenlabs
ELEVENLABS_API_KEY=buraya_anahtarı_yapıştır
TTS_VOICE_ID=buraya_ses_kimliğini_yapıştır
```

**OpenAI kullanacaksan:**

```
TTS_PROVIDER=openai
OPENAI_API_KEY=buraya_anahtarı_yapıştır
TTS_VOICE_ID=onyx
```

---

## Üretim komutları

Hiç para harcamadan maliyet raporu:

```bash
npm run padisah:ses-tahmin
```

Tek padişahı deneme klasörüne üret (defter değişmez, sadece dinlemek için):

```bash
node scripts/padisah-sesi-uret.mjs yildirim-bayezid --dene
```

Beğendikten sonra 36 padişahın tamamını üret:

```bash
npm run padisah:ses
```

---

## Bilmen gereken iki güvenlik notu

- **Anahtar paradır.** Başkasının eline geçerse senin hesabından ses
  üretebilir. Anahtarı kimseyle paylaşma; şüphelenirsen servisin
  panelinden silip yenisini oluştur, tek tıkla iptal olur.
- **Ses bir kez üretilir.** Öğrenci sayfayı her açtığında yeniden para
  ödenmez; dosya siteye yazılır ve oradan çalınır. Bir anlatımın metnini
  düzeltirsen yalnızca o padişahın sesi yeniden üretilir.
