-- ============================================================
-- BRANŞ DENEMESİNE SINAV TÜRÜ (exams.exam_type)
-- ============================================================
-- Çalıştırma:
--   node scripts/run-migration.mjs supabase/migration_branch_exam_type.sql
-- ya da Supabase SQL Editor'e yapıştırıp RUN.
--
-- NEDEN
-- Branş denemesi formu (src/components/AddExamForm.jsx) "Sınav Türü"
-- soruyor; liste ve grafikler de bu değere bakarak LGS netini /3, diğer
-- türleri /4 katsayısıyla hesaplıyor. Ama `exams` tablosunda böyle bir
-- kolon HİÇ açılmamıştı — 2026-08-13'te REST üzerinden kolon kolon
-- doğrulanan canlı şemada (supabase/setup_new_project.sql) yok. Bu
-- yüzden her branş denemesi kaydı PostgREST'in
--   "Could not find the 'exam_type' column of 'exams' in the schema cache"
-- hatasıyla düşüyordu.
--
-- NULL BIRAKILABİLİR VE BU BİLİNÇLİ
-- Eski kayıtların türü bilinmiyor; NULL kalırlar ve arayüz onlarda
-- varsayılan /4 katsayısını uygular (bkz. src/lib/examHelpers.js#calcNet).
-- Formda da "Sınav Türü" isteğe bağlı bir alan.
-- ============================================================

begin;

alter table exams add column if not exists exam_type text;

alter table exams drop constraint if exists exams_exam_type_check;
alter table exams
  add constraint exams_exam_type_check
  check (exam_type is null or exam_type in ('LGS', 'TYT', 'AYT', 'KPSS'));

comment on column exams.exam_type is
  'Branş denemesinin bağlı olduğu sınav türü (isteğe bağlı). Net katsayısı LGS''de /3, diğerlerinde /4 uygulanır.';

commit;

-- PostgREST şema önbelleğini tazele — yoksa kolon eklenmiş olsa bile
-- REST katmanı bir süre daha "böyle bir kolon yok" demeye devam eder.
notify pgrst, 'reload schema';

-- Doğrulama:
--   select column_name, data_type from information_schema.columns
--    where table_schema='public' and table_name='exams' and column_name='exam_type';
--   → 1 satır dönmeli.
