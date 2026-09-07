# AI Koç Birleşik Veri Ağı

Bu klasör AI Koç'un nihai ürün hedefini ve Codex uygulama sırasını taşır.

## Başlangıç

1. AI_KOC_URUN_HAFIZASI.md dosyasını oku.
2. FAZ_PLANI.md dosyasını oku.
3. FAZ_DURUMU.md içinden sıradaki tamamlanmamış fazı belirle.
4. prompts klasöründeki aynı numaralı istemi ayrı bir Codex görevinde uygula.
5. Fazın bütün kabul kapıları geçmeden sonraki faza geçme.

## Dosyalar

- AI_KOC_URUN_HAFIZASI.md: Değişmez ürün hedefi, kapsam ve tamamlanma tanımı.
- FAZ_PLANI.md: Faz sırası ve ortak kalite kapıları.
- FAZ_DURUMU.md: Gerçek ilerleme ve kanıt kaydı.
- MEVCUT_DURUM_ENVANTERI.md: Faz 0'da doğrulanan mevcut ürün ve veri davranışı.
- VERI_KAYNAKLARI_MATRISI.md: Kaynak, kimlik, kalıcılık, erişim ve AI Koç tüketim sicili.
- VERI_AKISLARI.md: Kaynaktan AI Koç'a uçtan uca akışlar ve kopukluklar.
- KABUL_SENARYOLARI.md: Sonraki fazların aynı sentetik öğrenci üzerinden ölçüleceği senaryolar.
- BAZ_CIZGISI.md: Faz 0 test/derleme sonuçları ve tekrar çalıştırma komutları.
- MIMARI_KARARLAR.md: Sonraki fazlara bırakılan kararlar, seçenekler ve riskler.
- KONU_KIMLIGI_SOZLESMESI.md: Faz 1 değişmez konu kimliği, eski anahtar ve güvenli çözümleyici kuralları.
- OGRENME_KANITI_SOZLESMESI.md: Faz 1 olay/snapshot/düzeltme/tombstone, ölçüm, güven ve gizlilik kuralları.
- KAYNAK_KAYIT_DEFTERI.md: M01–M38 makine sicilinin insan-okunur sınıflandırması.
- prompts/: Her fazın ayrıntılı Codex uygulama istemi.

## Codex'e verilecek kısa komut

“docs/ai-koc/prompts içindeki sıradaki faz istemini uygula. AI Koç ürün hafızası ve faz durumuna eksiksiz uy; kabul kapıları geçmeden tamamlandı deme.”

Birden fazla faz tek görevde birleştirilmemelidir. Faz 3, 4 ve 5 ancak Faz 2 tamamlandıktan sonra ayrı görevlerde yürütülebilir.
