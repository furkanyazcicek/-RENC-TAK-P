-- ============================================================
-- DrKoç — öğrenme katmanları
--
-- Aynı konu iki farklı öğretim aşamasında sunulabilir:
--   foundation  → sıfırdan, sakin ve okunabilir temel öğrenme notu
--   interactive → mevcut görsel/ses/etkileşim ağırlıklı pekiştirme notu
--
-- Eski kayıtlar korunur ve varsayılan olarak interactive kabul edilir.
-- Böylece bu migration mevcut notları, linkleri ya da revizyonları bozmaz.
-- ============================================================

alter table structured_lessons
  add column if not exists learning_mode text not null default 'interactive'
  check (learning_mode in ('foundation', 'interactive'));

create index if not exists structured_lessons_learning_mode_idx
  on structured_lessons (topic_id, learning_mode, status, order_index);

comment on column structured_lessons.learning_mode is
  'Öğrenme aşaması: foundation (temel öğrenme) veya interactive (pekiştirme).';
