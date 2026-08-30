-- ============================================================
-- DrKoç — Ders sıralaması
--
-- NEDEN GEREKTİ
-- Bir konunun altında birden fazla ders bulunabilir; bu "alt konu"
-- ihtiyacının karşılığıdır (Hücre → hücre zarı, organeller, madde
-- geçişleri…). Ancak `structured_lessons` içinde sıra bilgisi yoktu ve
-- kütüphane listesi `updated_at desc` ile diziliyordu: öğretmen eski bir
-- dersi düzeltince o ders listenin başına fırlıyor, öğrenci konuyu ters
-- sırada görüyordu.
--
-- `order_index` yalnızca AYNI konu içindeki sırayı belirler. Konuların
-- kendi arasındaki sıra `library_topics.order_index`, öğrenme sırası ise
-- `src/lib/curriculum/graph.js` tarafından yönetilir; bu üçü ayrı işlerdir
-- ve birbirinin yerine geçmez.
--
-- `part_label` isteğe bağlıdır: "1. Bölüm", "Giriş", "Derinleşme" gibi
-- öğrenciye görünen kısa bir etiket. Boş bırakılabilir.
-- ============================================================

alter table structured_lessons
  add column if not exists order_index integer not null default 0;

alter table structured_lessons
  add column if not exists part_label text;

-- Konu içi listeleme bu indeksten yararlanır.
drop index if exists structured_lessons_topic_idx;
create index if not exists structured_lessons_topic_idx
  on structured_lessons (topic_id, status, order_index, updated_at desc);

comment on column structured_lessons.order_index is
  'Aynı konu içindeki ders sırası. Küçük değer önce gösterilir.';
comment on column structured_lessons.part_label is
  'Öğrenciye görünen kısa bölüm etiketi (örn. "1. Bölüm"). İsteğe bağlı.';
