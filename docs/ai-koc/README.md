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
- prompts/: Her fazın ayrıntılı Codex uygulama istemi.

## Codex'e verilecek kısa komut

“docs/ai-koc/prompts içindeki sıradaki faz istemini uygula. AI Koç ürün hafızası ve faz durumuna eksiksiz uy; kabul kapıları geçmeden tamamlandı deme.”

Birden fazla faz tek görevde birleştirilmemelidir. Faz 3, 4 ve 5 ancak Faz 2 tamamlandıktan sonra ayrı görevlerde yürütülebilir.
