-- ============================================================
-- YENİ ÖĞRENCİ ONAY KUYRUĞU
-- ------------------------------------------------------------
-- SORUN
-- migration_live_lessons.sql ile öğretmen paneli "tüm öğrenciler"
-- yerine "teacher_students bağı olan öğrenciler" mantığına geçti.
-- O göç anında var olan öğrenciler toplu olarak taşındı ('legacy'),
-- ama SONRADAN kayıt sayfasından kaydolan öğrenci hiçbir öğretmene
-- bağlanmıyor: davet bağlantısı kullanmadıysa panelde hiç görünmüyor.
--
-- ÇÖZÜM
-- Öğretmen paneline bir ONAY KUYRUĞU eklenir. Henüz bağı olmayan
-- öğrenciler "yeni kayıt" olarak listelenir; öğretmen tek tıkla
-- "Öğrencim" derse bağ 'active' olur, "Bana ait değil" derse
-- 'rejected' yazılır ve kuyruktan düşer.
--
-- NEDEN OTOMATİK 'active' DEĞİL
-- Bağın kendisi bir erişim kapısıdır: aktif bağ, öğretmene o
-- öğrencinin çalışma kayıtlarını, denemelerini ve sorularını açar.
-- Onay adımı, platforma ikinci bir öğretmen eklendiğinde kimsenin
-- kendiliğinden başkasının öğrencisine erişememesini sağlar.
--
-- GÖRÜNÜRLÜK SINIRI — BİLEREK BÖYLE
-- Kuyruk, bağsız öğrencinin yalnızca ADINI, SINIF/HEDEF SINAV
-- bilgisini, kayıt tarihini ve MASKELENMİŞ e-postasını gösterir
-- (ör. "ah***@gmail.com"). Çalışma verisine erişim yalnızca onaydan
-- SONRA açılır. Maskeleme, aynı adlı iki öğrenciyi ayırt etmeye
-- yetecek kadar bilgi verir, e-posta listesi dökmeye yetmez.
--
-- Bu dosya defalarca çalıştırılabilir (idempotent).
-- ============================================================

begin;


-- ------------------------------------------------------------
-- 1) Bağın nasıl kurulduğunu tutan kolona yeni bir değer
--    ekleniyor: 'teacher_add' = öğretmen kuyruktan onayladı.
-- ------------------------------------------------------------
-- Kısıt adı PostgreSQL tarafından otomatik verildiği için sabit ada
-- güvenilmiyor: `created_via` üzerindeki CHECK kısıtı adı ne olursa olsun
-- bulunup düşürülüyor, sonra yenisi ekleniyor.
do $$
declare c text;
begin
  for c in
    select conname
      from pg_constraint
     where conrelid = 'public.teacher_students'::regclass
       and contype = 'c'
       and pg_get_constraintdef(oid) ilike '%created_via%'
  loop
    execute format('alter table teacher_students drop constraint %I', c);
  end loop;
end $$;

alter table teacher_students
  add constraint teacher_students_created_via_check
  check (created_via in ('invite', 'legacy', 'teacher_add'));


-- ------------------------------------------------------------
-- 2) E-posta maskeleme — yalnızca içeriden çağrılır.
-- ------------------------------------------------------------
create or replace function public.mask_email(p_email text)
returns text
language sql
immutable
as $$
  select case
    when p_email is null or position('@' in p_email) = 0 then null
    else left(split_part(p_email, '@', 1), 2) || '***@' || split_part(p_email, '@', 2)
  end;
$$;

comment on function public.mask_email(text) is
  'E-postayı tanımaya yetecek kadar açık bırakır, dökmeye yetmez. Onay kuyruğunda kullanılır.';


-- ------------------------------------------------------------
-- 3) Onay kuyruğu — öğretmenle hiçbir bağ satırı olmayan öğrenciler.
--
--    Herhangi bir statüde ('active', 'pending', 'rejected',
--    'removed') satır varsa öğrenci kuyrukta ÇIKMAZ: onaylanmış,
--    reddedilmiş veya bilerek çıkarılmış bir öğrenci tekrar tekrar
--    sorulmasın.
-- ------------------------------------------------------------
create or replace function public.teacher_unlinked_students()
returns table (
  student_id uuid,
  student_name text,
  email_hint text,
  grade smallint,
  target_exam text,
  registered_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select p.id,
         p.full_name,
         public.mask_email(u.email::text),
         p.grade,
         p.target_exam,
         p.created_at
    from profiles p
    left join auth.users u on u.id = p.id
   where p.role = 'student'
     and exists (
       select 1 from profiles t
        where t.id = auth.uid() and t.role = 'teacher'
     )
     and not exists (
       select 1 from teacher_students l
        where l.student_id = p.id
          and l.teacher_id = auth.uid()
     )
   order by p.created_at desc nulls last
   limit 100;
$$;

comment on function public.teacher_unlinked_students() is
  'Öğretmenin onay kuyruğu: henüz bağ kurulmamış öğrenciler. Yalnızca ad, sınıf, kayıt tarihi ve maskeli e-posta döner.';


-- ------------------------------------------------------------
-- 4) Onayla — bağ 'active' olur, öğrenci panele girer.
-- ------------------------------------------------------------
create or replace function public.teacher_add_student(p_student_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_teacher uuid := auth.uid();
begin
  if v_teacher is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  if not exists (select 1 from profiles where id = v_teacher and role = 'teacher') then
    raise exception 'Bu işlemi yalnızca öğretmen yapabilir.' using errcode = '42501';
  end if;

  if v_teacher = p_student_id then
    raise exception 'Kendinizi öğrenci olarak ekleyemezsiniz.' using errcode = '22023';
  end if;

  if not exists (select 1 from profiles where id = p_student_id and role = 'student') then
    raise exception 'Öğrenci bulunamadı.' using errcode = 'P0002';
  end if;

  insert into teacher_students (teacher_id, student_id, status, created_by, created_via, responded_at)
  values (v_teacher, p_student_id, 'active', v_teacher, 'teacher_add', now())
  on conflict (teacher_id, student_id) do update
    set status = 'active',
        responded_at = now(),
        ended_at = null,
        ended_by = null,
        created_via = 'teacher_add';
end;
$$;

comment on function public.teacher_add_student(uuid) is
  'Öğretmen, onay kuyruğundaki bir öğrenciyi kendi listesine alır. Bağ anında aktifleşir.';


-- ------------------------------------------------------------
-- 5) Kuyruktan çıkar — "bana ait değil".
--    Zaten AKTİF bir bağ varsa dokunulmaz; aktif bağı koparmak
--    ayrı bir iştir (end_teacher_student_link).
-- ------------------------------------------------------------
create or replace function public.teacher_dismiss_student(p_student_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_teacher uuid := auth.uid();
begin
  if v_teacher is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  if not exists (select 1 from profiles where id = v_teacher and role = 'teacher') then
    raise exception 'Bu işlemi yalnızca öğretmen yapabilir.' using errcode = '42501';
  end if;

  insert into teacher_students (teacher_id, student_id, status, created_by, created_via, responded_at)
  values (v_teacher, p_student_id, 'rejected', v_teacher, 'teacher_add', now())
  on conflict (teacher_id, student_id) do update
    set status = 'rejected',
        responded_at = now()
    where teacher_students.status <> 'active';
end;
$$;

comment on function public.teacher_dismiss_student(uuid) is
  'Öğretmen, onay kuyruğundaki bir kaydı "bana ait değil" diye işaretler. Aktif bağa dokunmaz.';


-- ------------------------------------------------------------
-- 6) YETKİLER
--    Üç fonksiyon da SECURITY DEFINER; anonim erişime kapalı.
--    mask_email istemciye hiç açılmaz.
-- ------------------------------------------------------------
do $$
declare fn text;
begin
  foreach fn in array array[
    'public.teacher_unlinked_students()',
    'public.teacher_add_student(uuid)',
    'public.teacher_dismiss_student(uuid)'
  ] loop
    execute format('revoke all on function %s from public, anon', fn);
    execute format('grant execute on function %s to authenticated', fn);
  end loop;
end $$;

revoke all on function public.mask_email(text) from public, anon, authenticated;

commit;


-- ============================================================
-- DOĞRULAMA (göçten sonra SQL Editor'de çalıştırılabilir)
-- ============================================================
-- Kuyrukta kim var? (öğretmen hesabıyla giriş yapılmış olmalı)
--   select * from teacher_unlinked_students();
--
-- Bağların dağılımı:
--   select status, created_via, count(*)
--     from teacher_students group by status, created_via;
