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
- MIMARI_KARARLAR.md: Faz 0 soruları ile Faz 1–2'de kesinleşen kararlar, kanıtlar ve reddedilen alternatifler.
- KONU_KIMLIGI_SOZLESMESI.md: Faz 1 değişmez konu kimliği, eski anahtar ve güvenli çözümleyici kuralları.
- OGRENME_KANITI_SOZLESMESI.md: Faz 1 olay/snapshot/düzeltme/tombstone, ölçüm, güven ve gizlilik kuralları.
- KAYNAK_KAYIT_DEFTERI.md: M01–M38 makine sicilinin insan-okunur sınıflandırması.
- VERI_AGI_CEKIRDEK_MIMARISI.md: Faz 2 işlem sınırı, kalıcı yapılar, RLS, tekilleştirme, health ve generation/replay mimarisi.
- GERIYE_DOLDURMA_SOZLESMESI.md: Kayıtlı provider, dry-run, cursor/restart ve canlı geçiş sınırları.
- prompts/: Her fazın ayrıntılı Codex uygulama istemi.

## Faz 2 teknik girişleri

- Saf çekirdek: `src/lib/learning/network/index.js` (`ingest`, kanonik parmak izi, etkin geçmiş, projeksiyon/replay, health ve backfill dışa aktarımları).
- Sunucu repository sınırı: `api/_lib/learning/repository.js`.
- Tek yetkili DDL: `supabase/migration_learning_evidence_network.sql`. Yeni projede `setup_new_project.sql` ve `migration_parent_verification.sql` sonrasında çalıştırılır; setup dosyasına ikinci bir DDL kopyası eklenmez.
- Hızlı JavaScript sözleşme testi: `node scripts/phase-2-network-js-tests.mjs`.
- Tam yerel Faz 2 kabul girişi: `npm run test:ai-koc-faz-2` (`scripts/test-phase-2-learning-network.mjs`; geçici PostgreSQL/PGlite migration, RLS, parity, replay ve backfill kontrolleri).

Bu girişler canlı migration veya gerçek backfill çalıştırmaz. Faz 3, 4 ve 5 ancak Faz 2'nin bütün **yerel kabul kapıları** geçip `FAZ_DURUMU.md` içinde kanıtla tamamlanmasından sonra, birbirinden ayrı görevlerde başlayabilir.

## Codex'e verilecek kısa komut

“docs/ai-koc/prompts içindeki sıradaki faz istemini uygula. AI Koç ürün hafızası ve faz durumuna eksiksiz uy; kabul kapıları geçmeden tamamlandı deme.”

Birden fazla faz tek görevde birleştirilmemelidir.
