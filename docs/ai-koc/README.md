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
- MIMARI_KARARLAR.md: Faz 0 soruları ile tamamlanan fazlarda kesinleşen kararlar, kanıtlar ve reddedilen alternatifler.
- KONU_KIMLIGI_SOZLESMESI.md: Faz 1 değişmez konu kimliği, eski anahtar ve güvenli çözümleyici kuralları.
- OGRENME_KANITI_SOZLESMESI.md: Faz 1 olay/snapshot/düzeltme/tombstone, ölçüm, güven ve gizlilik kuralları.
- KAYNAK_KAYIT_DEFTERI.md: M01–M38 makine sicilinin insan-okunur sınıflandırması.
- VERI_AGI_CEKIRDEK_MIMARISI.md: Faz 2 işlem sınırı, kalıcı yapılar, RLS, tekilleştirme, health ve generation/replay mimarisi.
- GERIYE_DOLDURMA_SOZLESMESI.md: Kayıtlı provider, dry-run, cursor/restart ve canlı geçiş sınırları.
- FAZ_3_ICERIK_KAYIT_MIMARISI.md: Ders, soru kütüphanesi ve atlas kaynaklarının içerik/revizyon, sunucu puanlama, cihaz sahipliği ve kanıt ağı bağı.
- FAZ_4_ANA_AKADEMIK_KAYIT_MIMARISI.md: Günlük, deneme, ödev, iki yönlü soru, AI Solve, canlı ders ve profil kaynaklarının atomik akademik kayıt bağı.
- FAZ_5_DIL_ILERMESI_MIMARISI.md: Dört dilin hesap kapsamı, açık cihaz aktarımı, deterministik birleşimi, mahremiyet sınırı ve ortak kanıt bağı.
- FAZ_6_OGRENCI_KONU_MODELI_MIMARISI.md: Sürümlü öğrenci-konu modeli, formül/eşikler, güven, açıklanabilirlik, dört hafıza katmanı ve replay sınırı.
- FAZ_7_AI_KOC_KANITLI_ANALIZ_MIMARISI.md: Kademeli AI Koç bağlamı, dar okuma araçları, kaynak birleştirme, iddia doğrulama, hafıza ve güvenlik sınırları.
- prompts/: Her fazın ayrıntılı Codex uygulama istemi.

## Faz 2 teknik girişleri

- Saf çekirdek: `src/lib/learning/network/index.js` (`ingest`, kanonik parmak izi, etkin geçmiş, projeksiyon/replay, health ve backfill dışa aktarımları).
- Sunucu repository sınırı: `api/_lib/learning/repository.js`.
- Tek yetkili DDL: `supabase/migration_learning_evidence_network.sql`. Yeni projede `setup_new_project.sql` ve `migration_parent_verification.sql` sonrasında çalıştırılır; setup dosyasına ikinci bir DDL kopyası eklenmez.
- Hızlı JavaScript sözleşme testi: `node scripts/phase-2-network-js-tests.mjs`.
- Tam yerel Faz 2 kabul girişi: `npm run test:ai-koc-faz-2` (`scripts/test-phase-2-learning-network.mjs`; geçici PostgreSQL/PGlite migration, RLS, parity, replay ve backfill kontrolleri).
- Yerel kabul kanıtı: [Faz 2 sonuç JSON'u](kanitlar/faz-2/faz-2-kabul-sonucu.json), [migration şema özeti](kanitlar/faz-2/migration-sema-ozeti.json), [çekirdek testi](kanitlar/faz-2/veri-agi-testleri.log), [regresyon](kanitlar/faz-2/regresyon-testleri.log) ve [derleme](kanitlar/faz-2/build.log).

Bu girişler canlı migration veya gerçek backfill çalıştırmaz. Faz 2'nin
yerel kabul kapıları geçtiği için Faz 3, 4 ve 5'in yerel geliştirmesi bu
çekirdeğe karşı birbirinden ayrı görevlerde başlayabilir. Bu, gerçek kaynak
bağlama veya canlı geçiş onayı değildir.

## Faz 3 teknik girişleri

- Tek yetkili DDL: `supabase/migration_learning_content_activity.sql`; Faz 2 migration'ından sonra uygulanır.
- Kaynak-özel istemci sınırı: `src/lib/learning/contentActivity/` ile `src/hooks/useContentActivity.js`, `useServerAssessment.js` ve `useAtlasCloudActivity.js`.
- Public içerik kimlikleri: `src/generated/learning-content-manifest.json`; soru/cevap içeriği taşımaz.
- Manifest/private katalog üretimi: `scripts/build-phase-3-content-manifest.mjs`; geçici private katalog `node_modules/.cache/drkoc/` altında `0600` izinle üretilir ve Git/tarayıcı paketine girmez.
- Atomik katalog yükleme: `scripts/lib/load-phase-3-content-catalog.mjs`; checksum, alan izin listesi, dry-run, ikinci uygulama ve çatışma rollback denetimlidir.
- Hızlı Faz 3 kabul girişi: `npm run test:ai-koc-faz-3`.
- Tam yerel kabul runner'ı: `node scripts/run-phase-3-regressions.mjs`.
- Yerel kabul kanıtları: [nihai sonuç](kanitlar/faz-3/faz-3-kabul-sonucu.json), [içerik envanteri](kanitlar/faz-3/icerik-envanteri.json), [manifest parity](kanitlar/faz-3/manifest-parity.json), [kaynak kapsamı](kanitlar/faz-3/kaynak-kapsami.json), [regresyon komutları](kanitlar/faz-3/regresyon-komutlari.json) ve [görsel doğrulama](kanitlar/faz-3/gorsel-dogrulama.md).

Faz 3 yerel olarak 17/17 komut ve 46/46 kabul kapısıyla tamamlandı.
Canlı Supabase, gerçek öğrenci, migration/seed/backfill, ücretli servis ve
yayın kullanılmadı; canlı geçiş ayrı onay ve sonraki faz kapılarını gerektirir.

## Faz 4 teknik girişleri

- Tek yetkili DDL: `supabase/migration_learning_academic_records.sql`; Faz 3 içerik migration'ından sonra uygulanır.
- Kaynak-özel istemci sınırı: `src/lib/learning/academicActivity/` ve `src/hooks/useAcademicActivity.js`.
- AI Solve dar sunucu yazarı: `api/_lib/solve/academicWriter.js`; genel ledger/service-role endpoint'i değildir.
- Hızlı yerel kabul: `npm run test:ai-koc-faz-4`.
- Tam bütünleşik kabul: `node scripts/run-phase-4-regressions.mjs`.
- Kanıtlar: [nihai sonuç](kanitlar/faz-4/faz-4-kabul-sonucu.json), [kaynak kapsamı](kanitlar/faz-4/faz-4-kaynak-kapsami.json), [şema özeti](kanitlar/faz-4/migration-sema-ozeti.json), [yetki matrisi](kanitlar/faz-4/guvenlik-yetki-matrisi.json), [backfill](kanitlar/faz-4/backfill-dry-run-sonucu.json) ve [görsel doğrulama](kanitlar/faz-4/gorsel-dogrulama.md).

Faz 4 yerel olarak 12/12 komut ve 85/85 kabul kapısıyla tamamlandı. Canlı Supabase/migration/backfill, gerçek öğrenci verisi, ücretli model, deploy veya push kullanılmadı; Faz 6–8 tüketimi uygulanmadı.

## Faz 5 teknik girişleri

- Tek yetkili DDL: `supabase/migration_learning_language_progress.sql`; Faz 2 migration'ından sonra uygulanır ve Faz 3/4'e bağımlı değildir.
- Ortak istemci sınırı: `src/lib/learning/languageActivity/`, `LanguageProgressBoundary` ve `LanguageSyncPanel`.
- Hızlı yerel kabul: `npm run test:ai-koc-faz-5`.
- Tam bütünleşik kabul: `npm run test:ai-koc-faz-5:all`.
- Kanıtlar: [nihai sonuç](kanitlar/faz-5/faz-5-kabul-sonucu.json), [kaynak kapsamı](kanitlar/faz-5/faz-5-kaynak-kapsami.json), [şema özeti](kanitlar/faz-5/migration-sema-ozeti.json), [yetki matrisi](kanitlar/faz-5/guvenlik-yetki-matrisi.json), [sentetik cihaz dry-run](kanitlar/faz-5/backfill-dry-run.json), [regresyon komutları](kanitlar/faz-5/regresyon-komutlari.json) ve [görsel doğrulama](kanitlar/faz-5/gorsel-dogrulama.md).

Faz 5 yerel olarak 12/12 komut, 231 çekirdek doğrulama ve 9/9 kabul kapısıyla tamamlandı. Canlı Supabase/migration, gerçek öğrenci cihazı veya verisi, gerçek aktarım/backfill, ücretli model, deploy ve push kullanılmadı; Faz 6 öğrenci modeli ve Faz 7 AI Koç tüketimi uygulanmadı.

## Faz 6 teknik girişleri

- Tek yetkili DDL: `supabase/migration_learning_student_topic_model.sql`; Faz 2 migration'ından sonra uygulanır.
- Model ve sorgu sınırı: `src/lib/learning/studentModel/`; model config'i, deterministik hesap, replay ve salt-okunur sorgular ayrı modüllerdir.
- Sunucu kalıcılık sınırı: `api/_lib/learning/repository.js`; Faz 2 generation/cursor mekanizmasını kullanır.
- Hızlı yerel kabul: `npm run test:ai-koc-faz-6`.
- Tam bütünleşik kabul: `npm run test:ai-koc-faz-6:all`.
- Kanıtlar: [nihai sonuç](kanitlar/faz-6/faz-6-kabul-sonucu.json), [13 altın senaryo](kanitlar/faz-6/faz-6-altin-senaryolar.json), [şema özeti](kanitlar/faz-6/migration-sema-ozeti.json), [yetki matrisi](kanitlar/faz-6/guvenlik-yetki-matrisi.json), [performans](kanitlar/faz-6/faz-6-performans-sonucu.json) ve [regresyon komutları](kanitlar/faz-6/regresyon-komutlari.json).

Faz 6 yerel olarak 11/11 komut, 107 çekirdek doğrulama ve 9/9 kabul kapısıyla tamamlandı. Canlı migration/veri/backfill, ücretli model, deploy ve push kullanılmadı; Faz 7 AI Koç tüketimi ve Faz 8 kapalı döngü uygulanmadı.

## Faz 7 teknik girişleri

- Analiz/yanıt sözleşmesi: `api/_lib/coachAnalysis.js`; küçük başlangıç bağlamı, deterministik konu yönlendirmesi, kanıt defteri, yanıt doğrulama ve kişisel içeriksiz gözlem.
- Dar veri araçları: `api/_lib/coachDataTools.js`; sekiz oturum-kapsamlı, satır/tarih/alan sınırlı okuma yolu.
- AI Koç bağlantısı: `api/_lib/context.js`, `api/_lib/tools.js`, `api/_lib/prompt.js`, `api/ai-coach/chat.js` ve açık onaylı tercih unutma için `api/ai-coach/action.js`.
- Hızlı yerel kabul: `npm run test:ai-koc-faz-7`.
- Tam bütünleşik kabul: `npm run test:ai-koc-faz-7:all`.
- Kanıtlar: [nihai sonuç](kanitlar/faz-7/faz-7-kabul-sonucu.json), [başlangıç checkpoint](kanitlar/faz-7/faz-7-baslangic-checkpoint.json), [başlangıç değerlendirmesi](kanitlar/faz-7/faz-7-baslangic-degerlendirmesi.json), [final değerlendirmesi](kanitlar/faz-7/faz-7-degerlendirme-sonucu.json), [yetki matrisi](kanitlar/faz-7/guvenlik-yetki-matrisi.json) ve [regresyon komutları](kanitlar/faz-7/regresyon-komutlari.json).

Faz 7 yerel olarak 14/14 komut, 137 çekirdek doğrulama ve 11/11 kabul kapısıyla tamamlandı. Sabit değerlendirme seti başlangıç 1 geçti/1 kısmi/5 başarısızdan final 7/7'ye çıktı. Faz 7 migration üretmedi; canlı veri, gerçek öğrenci/yedek, ücretli model, deploy ve push kullanılmadı. Faz 8 kapalı döngüsü uygulanmadı.

## Codex'e verilecek kısa komut

“docs/ai-koc/prompts içindeki sıradaki faz istemini uygula. AI Koç ürün hafızası ve faz durumuna eksiksiz uy; kabul kapıları geçmeden tamamlandı deme.”

Birden fazla faz tek görevde birleştirilmemelidir.
