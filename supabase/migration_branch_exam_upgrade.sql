-- ============================================================
-- BRANŞ DENEMESİ: NET DESTEĞİ
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- Mevcut `exams` satırlarınız (eski, sadece puan/skor tabanlı
-- girişler) etkilenmez — yeni kolonlar onlarda NULL kalır ve
-- arayüz bu durumu otomatik olarak eski "% puan" gösterimiyle
-- karşılar.
-- ============================================================

alter table exams alter column score drop not null;

alter table exams add column if not exists exam_date date not null default current_date;
alter table exams add column if not exists correct int;
alter table exams add column if not exists incorrect int;
alter table exams add column if not exists empty int;

-- Net = Doğru - (Yanlış × 0.25) — correct/incorrect boşsa net de NULL kalır
alter table exams add column if not exists net numeric
  generated always as (
    case when correct is not null and incorrect is not null
      then correct - (incorrect * 0.25)
      else null
    end
  ) stored;

-- Öğrencinin KENDİ branş denemesini ekleyebilmesi için (önceden sadece
-- öğretmen ekleyebiliyordu — INSERT politikası aşağıda genişletiliyor)
drop policy if exists "Öğrenci kendi branş denemesini ekleyebilir" on exams;
create policy "Öğrenci kendi branş denemesini ekleyebilir"
  on exams for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi branş denemesini silebilir" on exams;
create policy "Öğrenci kendi branş denemesini silebilir"
  on exams for delete
  using (auth.uid() = student_id);
