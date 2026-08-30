# Atlas Fon Müziği — Nereden Bulunur

## Şu an kullanılan parça

**`atlas-fon-dongu.m4a`** — "Historical", Yevhen Astafiev · Pixabay (kimlik 534555)

Dosya ham hâliyle konmadı, iki işlemden geçti:

1. **Kesintisiz döngü.** Özgün parça sonunda sessizliğe iniyordu; döngüye
   girdiğinde önce sessizlik sonra ani başlangıç duyuluyordu. Sondaki sönüm
   kesildi ve dört saniyelik çapraz geçişle başa bağlandı. Döngü artık
   132,6 saniye ve dikişi duyulmuyor.
2. **Boyut.** 256 kbps stereo mp3 yerine 96 kbps AAC: 4,35 MB → 1,58 MB.
   Müzik en yüksek %22 seviyede çaldığı için kalite farkı duyulmaz;
   telefondan girenler üçte bir veri indirir.

Özgün dosya değiştirilmedi.

---

## Başka bir parçaya geçmek istersen

Bu klasöre konacak mp3, Osmanlı Padişahları Atlası'nda anlatımın altında
çalacak. **Dr. Koç ticari bir ürün**, bu yüzden müziğin lisansı önemli.

## Kullanılabilecek kaynaklar (ticari kullanıma açık)

| Kaynak | Ücret | Not |
|---|---|---|
| **Pixabay Music** (pixabay.com/music) | Ücretsiz | Kaynak belirtme şartı yok, ticari kullanıma açık |
| **YouTube Audio Library** | Ücretsiz | Bazı parçalar kaynak belirtme ister, açıkça yazıyor |
| **Free Music Archive** — CC0 filtresi | Ücretsiz | Sadece CC0 veya CC-BY olanları seç |
| **Epidemic Sound / Artlist** | ~$10–25/ay | Katalog çok daha iyi, lisans net |

## Kullanılmayacaklar

Film, dizi, oyun veya YouTube videolarından alınan müzik — "eğitim amaçlı"
olsa bile. Ticari bir platformda gerçek hukuki risk doğurur.

## Nasıl bir parça aranmalı

- **Yavaş ve seyrek.** Dakikada 60–80 vuruş civarı.
- **Melodisi öne çıkmasın.** Konuşmayla yarışan bir melodi anlatımı boğar.
- **Davul ağırlıklı "epik fragman" müziği olmasın.** Öğrenci saatlerce
  dinleyecek; yorucu olur.
- **Döngüye uygun olsun.** Başı ve sonu birbirine yakın, kesik hissi vermesin.
- Aranacak İngilizce kelimeler: `ambient documentary`, `cinematic drone`,
  `historical documentary underscore`, `slow strings ambient`.

## Ekledikten sonra

Dosyayı bu klasöre koy, sonra `src/data/padisahlar/muzik.js` içindeki
`dosya`, `ad`, `lisans` ve `kaynak` alanlarını doldur. Müzik kendiliğinden
devreye girer.
