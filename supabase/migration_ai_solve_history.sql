-- ============================================================
-- AI SORU ÇÖZ · ÇÖZÜM GEÇMİŞİ V1
--
-- Var olan ai_solution_sessions tablosuna yalnızca tekrar çalışma
-- durumunu ekler. Mevcut kayıtlar korunur ve "none" ile başlar.
-- Bu dosya birden fazla kez güvenle çalıştırılabilir.
-- ============================================================

alter table ai_solution_sessions
  add column if not exists review_status text not null default 'none';

alter table ai_solution_sessions
  add column if not exists reviewed_at timestamptz;

-- Postgres "add constraint if not exists" desteklemediği için
-- kısıt, katalog kontrolüyle tekrar çalıştırılabilir kuruluyor.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'ai_solution_sessions_review_status_check'
      and conrelid = 'ai_solution_sessions'::regclass
  ) then
    alter table ai_solution_sessions
      add constraint ai_solution_sessions_review_status_check
      check (review_status in ('none', 'pending', 'completed'));
  end if;
end $$;

-- GERİ ALMA (canlıda uygulamadan önce verinin etkisini kontrol edin):
-- alter table ai_solution_sessions drop constraint if exists ai_solution_sessions_review_status_check;
-- alter table ai_solution_sessions drop column if exists reviewed_at;
-- alter table ai_solution_sessions drop column if exists review_status;
