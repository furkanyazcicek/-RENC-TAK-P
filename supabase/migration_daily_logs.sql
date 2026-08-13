-- ============================================================
-- GÜNLÜK ÇALIŞMA TAKİBİ (daily_logs) - GÜVENLİK KURALLARI
-- Bu dosyayı Supabase panelinde "SQL Editor" bölümüne yapıştırıp
-- "RUN" ile çalıştırın. `daily_logs` tablonuzu zaten oluşturduğunuz
-- için burada sadece eksik olabilecek kolonları ve güvenlik
-- kurallarını ekliyoruz.
-- ============================================================

-- 1) id ve created_at kolonları yoksa ekle (çoğu zaman Supabase
--    Table Editor'da tablo oluştururken bunlar otomatik eklenir;
--    zaten varsa bu satırlar hiçbir şeyi bozmadan atlanır).
alter table daily_logs add column if not exists id uuid default gen_random_uuid();
alter table daily_logs add column if not exists created_at timestamp with time zone default now();

-- id kolonunun birincil anahtar (primary key) olduğundan emin olun.
-- Eğer tabloyu Table Editor'dan oluşturduysanız bu muhtemelen zaten
-- ayarlıdır; aşağıdaki satır sadece henüz ayarlanmamışsa eklemeyi dener.
do $$
begin
  if not exists (
    select 1 from information_schema.table_constraints
    where table_name = 'daily_logs' and constraint_type = 'PRIMARY KEY'
  ) then
    alter table daily_logs add primary key (id);
  end if;
end $$;

-- 2) Güvenliği açın
alter table daily_logs enable row level security;

-- 3) Öğrenci kendi kayıtlarını, öğretmen ise tüm öğrencilerin
--    kayıtlarını görebilsin.
drop policy if exists "Kendi kayıtlarını veya öğretmen tümünü görebilir" on daily_logs;
create policy "Kendi kayıtlarını veya öğretmen tümünü görebilir"
  on daily_logs for select
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- 4) Sadece öğrenci kendi adına yeni çalışma kaydı ekleyebilir.
drop policy if exists "Öğrenci kendi kaydını ekleyebilir" on daily_logs;
create policy "Öğrenci kendi kaydını ekleyebilir"
  on daily_logs for insert
  with check (auth.uid() = student_id);

-- 5) Öğrenci kendi kaydını düzenleyebilir/silebilir (yanlışlıkla
--    girdiği bir sayıyı düzeltebilmesi için).
drop policy if exists "Öğrenci kendi kaydını düzenleyebilir" on daily_logs;
create policy "Öğrenci kendi kaydını düzenleyebilir"
  on daily_logs for update
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi kaydını silebilir" on daily_logs;
create policy "Öğrenci kendi kaydını silebilir"
  on daily_logs for delete
  using (auth.uid() = student_id);
