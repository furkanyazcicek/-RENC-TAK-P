-- ============================================================
-- CANLI DERS STÜDYOSU — VERİ MODELİ VE GÜVENLİK
-- ============================================================
-- Çalıştırma:
--   node scripts/run-migration.mjs supabase/migration_live_lessons.sql
--
-- ⚠ BU DOSYA HENÜZ CANLI VERİTABANINA UYGULANMADI.
--   Uygulamadan önce aşağıdaki "DAVRANIŞ DEĞİŞİKLİĞİ" bölümünü okuyun.
--
-- Doğrulama (uygulamadan önce, üretime dokunmadan):
--   npm run test:live-lessons
--   Bu komut göçün tamamını bellekte gerçek bir PostgreSQL'de çalıştırır ve
--   yetki senaryolarını kanıtlar.
--
-- ============================================================
-- DAVRANIŞ DEĞİŞİKLİĞİ — ÖĞRETMEN ARTIK YALNIZ KENDİ ÖĞRENCİSİNİ GÖRÜR
-- ============================================================
-- Bu göçten ÖNCE: `role = 'teacher'` olan herkes sistemdeki BÜTÜN
-- öğrencilerin profilini, çalışma kaydını, denemesini, sorusunu ve ödevini
-- okuyabiliyordu. Politikalar "bu kişi öğretmen mi" diye soruyor, "bu
-- öğrencinin öğretmeni mi" diye sormuyordu.
--
-- Bu göçten SONRA: erişim `teacher_students` tablosundaki AKTİF bağa bağlıdır.
--
-- MEVCUT ERİŞİM KAYBOLMAZ: aşağıdaki 3. bölüm, göç anında var olan her
-- öğretmen–öğrenci çiftini 'active' olarak yazar (`created_via = 'legacy'`).
-- Yani bugün görünen hiçbir öğrenci yarın kaybolmaz. Yeni kayıt olan bir
-- öğrenci ise artık kendiliğinden görünmez; davet edilip kabul etmesi gerekir.
-- ============================================================

begin;


-- ============================================================
-- 1) ÖĞRETMEN–ÖĞRENCİ SAHİPLİĞİ
--    Veli tarafındaki `parent_links` ile aynı felsefe: ilişki tek bir
--    tabloda yaşar, istemci oraya doğrudan YAZAMAZ, bütün geçişler
--    SECURITY DEFINER fonksiyonlarından geçer.
-- ============================================================

create table if not exists teacher_students (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references profiles(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  -- pending  : davet oluşturuldu, öğrenci henüz cevaplamadı → VERİ YOK
  -- active   : öğrenci kabul etti → öğretmen okuyabilir
  -- rejected : öğrenci reddetti → VERİ YOK
  -- removed  : daha önce aktifti, taraflardan biri sonlandırdı → VERİ YOK
  status text not null default 'pending'
    check (status in ('pending', 'active', 'rejected', 'removed')),
  -- Daveti kim başlattı. İlk sürümde her zaman öğretmen, ama öğrencinin
  -- öğretmen araması ileride eklenirse model kırılmasın.
  created_by uuid references profiles(id) on delete set null,
  created_via text not null default 'invite'
    check (created_via in ('invite', 'legacy')),
  invited_at timestamptz not null default now(),
  responded_at timestamptz,
  ended_at timestamptz,
  ended_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint teacher_students_not_self check (teacher_id <> student_id),
  constraint teacher_students_unique_pair unique (teacher_id, student_id)
);

create index if not exists teacher_students_teacher_idx
  on teacher_students (teacher_id, status);
create index if not exists teacher_students_student_idx
  on teacher_students (student_id, status);

comment on table teacher_students is
  'Öğretmen–öğrenci ilişkisinin TEK kaynağı. İstemci buraya yazamaz; yalnızca teacher_*/student_* RPC fonksiyonlarıyla değişir.';


-- 1b) DAVET BAĞLANTILARI
-- Belirteç veritabanında AÇIK METİN TUTULMAZ. Yalnızca SHA-256 özeti
-- saklanır; veritabanı okunsa bile geçerli bir davet bağlantısı üretilemez.
-- `token_hint` sadece öğretmenin listede "hangi davetti bu" diyebilmesi için
-- son 6 karakteri taşır (tek başına işe yaramaz).
create table if not exists teacher_invites (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references profiles(id) on delete cascade,
  token_hash text not null unique,
  token_hint text not null,
  label text,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  used_at timestamptz,
  used_by uuid references profiles(id) on delete set null,
  revoked_at timestamptz
);

create index if not exists teacher_invites_teacher_idx
  on teacher_invites (teacher_id, created_at desc);

comment on table teacher_invites is
  'Öğretmenin ürettiği süreli davet bağlantıları. Belirtecin yalnızca SHA-256 özeti saklanır.';


-- 1c) DAVET DENEME KAYDI (kaba kuvvet sınırı)
create table if not exists teacher_invite_attempts (
  id bigserial primary key,
  student_id uuid not null references profiles(id) on delete cascade,
  attempted_at timestamptz not null default now(),
  success boolean not null default false
);

create index if not exists teacher_invite_attempts_idx
  on teacher_invite_attempts (student_id, attempted_at desc);


-- ============================================================
-- 2) YARDIMCI FONKSİYONLAR
--    SECURITY DEFINER — politikaların içinden çağrıldıklarında RLS'e
--    takılmasınlar ve `profiles` politikası kendini çağırıp sonsuz
--    özyinelemeye girmesin diye.
-- ============================================================

-- Oturumdaki öğretmen, verilen öğrencinin AKTİF öğretmeni mi?
create or replace function public.is_active_teacher_of(p_student uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from teacher_students
     where teacher_students.student_id = p_student
       and teacher_students.teacher_id = auth.uid()
       and teacher_students.status = 'active'
  );
$$;

comment on function public.is_active_teacher_of(uuid) is
  'Oturumdaki kullanıcı, bu öğrencinin ONAYLANMIŞ öğretmeni mi? Bekleyen/reddedilen/kaldırılan bağ false döner.';


-- Oturumdaki öğrenci, verilen öğretmenle AKTİF bağa sahip mi?
create or replace function public.is_active_student_of(p_teacher uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from teacher_students
     where teacher_students.teacher_id = p_teacher
       and teacher_students.student_id = auth.uid()
       and teacher_students.status = 'active'
  );
$$;


-- ============================================================
-- 3) MEVCUT ERİŞİMİ KORU
--    Göç anında var olan her öğretmen–öğrenci çifti 'active' yazılır.
--    Bugün panelde görünen hiçbir öğrenci kaybolmaz.
-- ============================================================
insert into teacher_students (teacher_id, student_id, status, created_by, created_via, responded_at)
select t.id, s.id, 'active', t.id, 'legacy', now()
  from profiles t
  cross join profiles s
 where t.role = 'teacher'
   and s.role = 'student'
on conflict (teacher_id, student_id) do nothing;


-- ============================================================
-- 4) CANLI DERS OTURUMU
-- ============================================================

create table if not exists lesson_sessions (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references profiles(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  subject text,
  topic text,
  scheduled_start timestamptz not null,
  scheduled_end timestamptz not null,
  -- Zaman DAİMA timestamptz (UTC) saklanır. Bu kolon yalnızca "öğretmen bu
  -- dersi hangi saat dilimine göre planladı" bilgisidir; arayüz Türkiye
  -- saatini bundan değil, doğrudan Europe/Istanbul biçimlendirmesiyle üretir.
  time_zone text not null default 'Europe/Istanbul',
  status text not null default 'scheduled'
    check (status in ('scheduled', 'lobby_open', 'live', 'completed', 'cancelled', 'no_show')),
  agenda text,
  -- Öğrenciye GÖRÜNÜR hazırlık notu ("yanında defter ve pergel olsun").
  prep_note text,
  -- Görüşme sağlayıcısı ve oda kimliği. `provider_room_id` tahmin edilemez
  -- olsun diye rastgele üretilir; ama tek başına yetki VERMEZ — odaya giriş
  -- her zaman lesson_sessions satırının sahipliğinden doğrulanır.
  provider text not null default 'local_preview',
  provider_room_id text not null,
  started_at timestamptz,
  ended_at timestamptz,
  cancel_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lesson_sessions_time_order check (scheduled_end > scheduled_start),
  constraint lesson_sessions_not_self check (teacher_id <> student_id)
);

create index if not exists lesson_sessions_teacher_idx
  on lesson_sessions (teacher_id, scheduled_start desc);
create index if not exists lesson_sessions_student_idx
  on lesson_sessions (student_id, scheduled_start desc);
create index if not exists lesson_sessions_status_idx
  on lesson_sessions (status, scheduled_start);
create unique index if not exists lesson_sessions_room_idx
  on lesson_sessions (provider_room_id);

comment on column lesson_sessions.provider_room_id is
  'Tahmin edilemez oda kimliği. Yetki taşımaz; erişim her zaman teacher_id/student_id üzerinden doğrulanır.';


-- 4b) ÖĞRETMENE ÖZEL NOTLAR — AYRI TABLO
-- NEDEN AYRI TABLO: PostgreSQL RLS SATIR bazlıdır, KOLON gizleyemez.
-- Not `lesson_sessions` içinde bir kolon olsaydı, dersi okuma hakkı olan
-- öğrenci `select *` ile o kolonu da okurdu. Ayrı tabloda ise öğrencinin
-- tek satır bile görmesine izin veren bir politika yoktur.
create table if not exists lesson_private_notes (
  lesson_session_id uuid primary key references lesson_sessions(id) on delete cascade,
  teacher_id uuid not null references profiles(id) on delete cascade,
  prep_note text,
  outcome_note text,
  updated_at timestamptz not null default now()
);

comment on table lesson_private_notes is
  'Öğretmenin ÖZEL ders notları. Öğrenciye hiçbir koşulda açılmaz — bu yüzden lesson_sessions içinde kolon değil, ayrı tablodur.';


-- 4c) KATILIM VE SÜRE
create table if not exists lesson_participants (
  id uuid primary key default gen_random_uuid(),
  lesson_session_id uuid not null references lesson_sessions(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  role text not null check (role in ('teacher', 'student')),
  first_joined_at timestamptz,
  last_left_at timestamptz,
  total_seconds integer not null default 0 check (total_seconds >= 0),
  reconnect_count integer not null default 0 check (reconnect_count >= 0),
  attended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lesson_participants_unique unique (lesson_session_id, user_id)
);

create index if not exists lesson_participants_session_idx
  on lesson_participants (lesson_session_id);
create index if not exists lesson_participants_user_idx
  on lesson_participants (user_id);


-- 4d) DERSE BAĞLANAN MATERYALLER
create table if not exists lesson_materials (
  id uuid primary key default gen_random_uuid(),
  lesson_session_id uuid not null references lesson_sessions(id) on delete cascade,
  kind text not null check (kind in (
    'question', 'lesson_note', 'library', 'pdf', 'image',
    'link', 'exam_mistake', 'atlas', 'board'
  )),
  title text not null,
  -- İlgili kaydın kimliği (questions.id, library_notes.id, exams.id …).
  -- Tür başına ayrı foreign key yerine tek kolon: materyal türleri zamanla
  -- artacak ve her yeni tür için şema değişikliği istemiyoruz.
  ref_id uuid,
  ref_slug text,
  url text,
  meta jsonb not null default '{}'::jsonb,
  order_index integer not null default 0,
  visible_to_student boolean not null default false,
  added_by uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists lesson_materials_session_idx
  on lesson_materials (lesson_session_id, order_index);


-- 4e) TAHTA SAYFALARI
-- Yüksek frekanslı kalem hareketleri BU TABLOYA YAZILMAZ; onlar Realtime
-- broadcast ile gider. Buraya yalnızca tamamlanmış çizim grupları, sınırlı
-- sıklıkta (bkz. src/lib/liveLesson/board/sync.js) yazılır.
create table if not exists lesson_board_pages (
  id uuid primary key default gen_random_uuid(),
  lesson_session_id uuid not null references lesson_sessions(id) on delete cascade,
  page_index integer not null check (page_index >= 0),
  background jsonb not null default '{}'::jsonb,
  content jsonb not null default '{"v":1,"items":[]}'::jsonb,
  updated_by uuid references profiles(id) on delete set null,
  updated_at timestamptz not null default now(),
  constraint lesson_board_pages_unique unique (lesson_session_id, page_index)
);


-- 4f) DERS SONU ÖZETİ
create table if not exists lesson_summaries (
  lesson_session_id uuid primary key references lesson_sessions(id) on delete cascade,
  teacher_id uuid not null references profiles(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  covered_topics text,
  -- Öğrenciye AÇIK değerlendirme. Öğretmenin özel notu burada DEĞİL,
  -- lesson_private_notes.outcome_note içindedir.
  public_note text,
  next_goal text,
  board_image_url text,
  board_snapshot jsonb,
  student_feedback text
    check (student_feedback is null or student_feedback in
      ('anladim', 'tekrar_gerekli', 'yeniden_anlatilmali')),
  student_feedback_at timestamptz,
  shared_with_student boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists lesson_summaries_student_idx
  on lesson_summaries (student_id, updated_at desc);


-- 4g) ÖDEV BAĞLANTISI — geriye uyumlu, isteğe bağlı
alter table homeworks
  add column if not exists lesson_session_id uuid references lesson_sessions(id) on delete set null;

create index if not exists homeworks_lesson_idx
  on homeworks (lesson_session_id);


-- ============================================================
-- 5) GÜNCELLEME ZAMANI TETİKLEYİCİSİ
-- ============================================================
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

do $$
declare t text;
begin
  foreach t in array array[
    'teacher_students', 'lesson_sessions', 'lesson_participants', 'lesson_summaries'
  ] loop
    execute format('drop trigger if exists %I on %I', t || '_touch', t);
    execute format(
      'create trigger %I before update on %I for each row execute function public.touch_updated_at()',
      t || '_touch', t
    );
  end loop;
end $$;


-- ============================================================
-- 6) DERS ERİŞİM YARDIMCILARI
-- ============================================================

create or replace function public.is_lesson_participant(p_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from lesson_sessions
     where lesson_sessions.id = p_session
       and (lesson_sessions.teacher_id = auth.uid() or lesson_sessions.student_id = auth.uid())
  );
$$;

create or replace function public.is_lesson_teacher(p_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from lesson_sessions
     where lesson_sessions.id = p_session
       and lesson_sessions.teacher_id = auth.uid()
  );
$$;

-- Odaya şu anda girilebilir mi? Ders bittiğinde/iptal olduğunda erişim
-- SONA ERER — "bağlantıyı saklayıp sonra girme" mümkün olmasın.
create or replace function public.is_lesson_joinable(p_session uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from lesson_sessions s
     where s.id = p_session
       and s.status in ('scheduled', 'lobby_open', 'live')
       and (
         s.teacher_id = auth.uid()
         -- Öğrenci ancak öğretmen odayı açtıysa girebilir.
         or (s.student_id = auth.uid() and s.status in ('lobby_open', 'live'))
       )
  );
$$;


-- ============================================================
-- 7) RLS — YENİ TABLOLAR
-- ============================================================
alter table teacher_students enable row level security;
alter table teacher_invites enable row level security;
alter table teacher_invite_attempts enable row level security;
alter table lesson_sessions enable row level security;
alter table lesson_private_notes enable row level security;
alter table lesson_participants enable row level security;
alter table lesson_materials enable row level security;
alter table lesson_board_pages enable row level security;
alter table lesson_summaries enable row level security;

-- --- teacher_students: yalnızca OKUMA. Yazma politikası bilerek yok. ---
drop policy if exists "Bağı tarafları görebilir" on teacher_students;
create policy "Bağı tarafları görebilir"
  on teacher_students for select
  using (auth.uid() = teacher_id or auth.uid() = student_id);

-- --- teacher_invites: öğretmen yalnızca KENDİ davetlerini görür. ---
-- Öğrenci bu tabloyu HİÇ okuyamaz; davet önizlemesi RPC'den geçer.
drop policy if exists "Öğretmen kendi davetlerini görebilir" on teacher_invites;
create policy "Öğretmen kendi davetlerini görebilir"
  on teacher_invites for select
  using (auth.uid() = teacher_id);

-- teacher_invite_attempts: hiçbir istemci politikası yok (yalnız RPC).

-- --- lesson_sessions ---
drop policy if exists "Ders taraflarına görünür" on lesson_sessions;
create policy "Ders taraflarına görünür"
  on lesson_sessions for select
  using (auth.uid() = teacher_id or auth.uid() = student_id);

-- Öğretmen YALNIZCA aktif öğrencisi için ders oluşturabilir.
drop policy if exists "Öğretmen kendi öğrencisine ders oluşturur" on lesson_sessions;
create policy "Öğretmen kendi öğrencisine ders oluşturur"
  on lesson_sessions for insert
  with check (
    auth.uid() = teacher_id
    and public.is_active_teacher_of(student_id)
  );

-- Öğretmen yalnızca SAHİBİ olduğu dersi düzenler. `with check` şart:
-- olmadan öğretmen dersi başka bir öğretmene devredebilirdi.
drop policy if exists "Öğretmen kendi dersini düzenler" on lesson_sessions;
create policy "Öğretmen kendi dersini düzenler"
  on lesson_sessions for update
  using (auth.uid() = teacher_id)
  with check (auth.uid() = teacher_id and public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen kendi dersini siler" on lesson_sessions;
create policy "Öğretmen kendi dersini siler"
  on lesson_sessions for delete
  using (auth.uid() = teacher_id and status in ('scheduled', 'cancelled'));

-- --- lesson_private_notes: SADECE öğretmen. Öğrenciye politika YOK. ---
drop policy if exists "Özel not yalnız öğretmenindir" on lesson_private_notes;
create policy "Özel not yalnız öğretmenindir"
  on lesson_private_notes for all
  using (auth.uid() = teacher_id and public.is_lesson_teacher(lesson_session_id))
  with check (auth.uid() = teacher_id and public.is_lesson_teacher(lesson_session_id));

-- --- lesson_participants: OKUMA taraflara, YAZMA yalnız RPC'ye. ---
-- İstemciye INSERT/UPDATE politikası VERİLMEZ: verilseydi kullanıcı istek
-- gövdesindeki `user_id` alanını değiştirerek başkası adına katılım kaydı
-- yazabilirdi. Tüm yazma işlemleri auth.uid() kullanan RPC'lerden geçer.
drop policy if exists "Katılımı ders tarafları görebilir" on lesson_participants;
create policy "Katılımı ders tarafları görebilir"
  on lesson_participants for select
  using (public.is_lesson_participant(lesson_session_id));

-- --- lesson_materials ---
drop policy if exists "Materyali öğretmen tümüyle görür" on lesson_materials;
create policy "Materyali öğretmen tümüyle görür"
  on lesson_materials for select
  using (
    public.is_lesson_teacher(lesson_session_id)
    or (public.is_lesson_participant(lesson_session_id) and visible_to_student)
  );

drop policy if exists "Materyali öğretmen ekler" on lesson_materials;
create policy "Materyali öğretmen ekler"
  on lesson_materials for insert
  with check (public.is_lesson_teacher(lesson_session_id) and added_by = auth.uid());

drop policy if exists "Materyali öğretmen düzenler" on lesson_materials;
create policy "Materyali öğretmen düzenler"
  on lesson_materials for update
  using (public.is_lesson_teacher(lesson_session_id))
  with check (public.is_lesson_teacher(lesson_session_id));

drop policy if exists "Materyali öğretmen siler" on lesson_materials;
create policy "Materyali öğretmen siler"
  on lesson_materials for delete
  using (public.is_lesson_teacher(lesson_session_id));

-- --- lesson_board_pages: her iki taraf okur, yazma RPC'den. ---
drop policy if exists "Tahtayı ders tarafları görebilir" on lesson_board_pages;
create policy "Tahtayı ders tarafları görebilir"
  on lesson_board_pages for select
  using (public.is_lesson_participant(lesson_session_id));

-- --- lesson_summaries ---
-- Öğrenci özeti ancak PAYLAŞILDIYSA görür.
drop policy if exists "Özeti öğretmen, paylaşıldıysa öğrenci görür" on lesson_summaries;
create policy "Özeti öğretmen, paylaşıldıysa öğrenci görür"
  on lesson_summaries for select
  using (
    auth.uid() = teacher_id
    or (auth.uid() = student_id and shared_with_student)
  );

drop policy if exists "Özeti öğretmen yazar" on lesson_summaries;
create policy "Özeti öğretmen yazar"
  on lesson_summaries for insert
  with check (auth.uid() = teacher_id and public.is_lesson_teacher(lesson_session_id));

-- Öğrenci geri bildirimi buradan DEĞİL, RPC'den yazılır: UPDATE politikası
-- kolon kısıtlayamaz, öğrenciye update verseydik `public_note` alanını da
-- değiştirebilirdi.
drop policy if exists "Özeti öğretmen günceller" on lesson_summaries;
create policy "Özeti öğretmen günceller"
  on lesson_summaries for update
  using (auth.uid() = teacher_id)
  with check (auth.uid() = teacher_id);


-- ============================================================
-- 8) DAVET AKIŞI — RPC'LER
-- ============================================================

-- 64 hex karakter = 256 bit CSPRNG entropi. gen_random_uuid() Supabase'de
-- kriptografik rastgelelik kaynağıdır.
create or replace function public.generate_invite_token()
returns text
language sql
volatile
as $$
  select replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '');
$$;

create or replace function public.hash_invite_token(p_token text)
returns text
language sql
immutable
as $$
  select encode(sha256(convert_to(coalesce(p_token, ''), 'utf8')), 'hex');
$$;

-- 8a) Öğretmen davet bağlantısı üretir.
--     Ham belirteç YALNIZCA BURADA, bir kez döner. Sonra hiçbir sorgu onu
--     geri veremez — veritabanında yalnızca özeti vardır.
create or replace function public.teacher_create_invite(
  p_label text default null,
  p_valid_hours integer default 72
)
returns table (invite_token text, invite_id uuid, token_expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_teacher uuid := auth.uid();
  v_token text;
  v_id uuid;
  v_expires timestamptz;
  v_hours integer := least(greatest(coalesce(p_valid_hours, 72), 1), 336);
begin
  if v_teacher is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if not exists (select 1 from profiles where id = v_teacher and role = 'teacher') then
    raise exception 'Bu işlem yalnızca öğretmen hesabıyla yapılabilir.' using errcode = '42501';
  end if;

  -- Aynı anda açık davet sayısını sınırla: davet bağlantısı üretmek bedava
  -- olmamalı, yoksa binlerce geçerli bağlantı birikir.
  if (
    select count(*) from teacher_invites
     where teacher_id = v_teacher
       and used_at is null and revoked_at is null and expires_at > now()
  ) >= 20 then
    raise exception 'Aynı anda en fazla 20 açık davetiniz olabilir. Kullanılmayanları iptal edin.'
      using errcode = 'P0001';
  end if;

  v_token := generate_invite_token();
  v_expires := now() + make_interval(hours => v_hours);

  insert into teacher_invites (teacher_id, token_hash, token_hint, label, expires_at)
  values (v_teacher, hash_invite_token(v_token), right(v_token, 6), nullif(btrim(coalesce(p_label, '')), ''), v_expires)
  returning id into v_id;

  return query select v_token, v_id, v_expires;
end;
$$;

-- 8b) Öğretmen daveti iptal eder.
create or replace function public.teacher_revoke_invite(p_invite_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  update teacher_invites
     set revoked_at = now()
   where id = p_invite_id
     and teacher_id = auth.uid()
     and used_at is null
     and revoked_at is null;

  if not found then
    raise exception 'İptal edilebilecek bir davet bulunamadı.' using errcode = 'P0002';
  end if;
end;
$$;

-- 8c) Kaba kuvvet sınırı (parent tarafındaki ile aynı mantık).
create or replace function public.invite_attempt_allowed(p_student uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select count(*) < 10
    from teacher_invite_attempts
   where student_id = p_student
     and success = false
     and attempted_at > now() - interval '15 minutes';
$$;

-- 8d) Öğrenci daveti ÖN İZLER — bağ oluşturmaz, sadece öğretmenin adını
--     döndürür ki "kime bağlanıyorum" görünsün.
--
--     NEDEN `raise` DEĞİL DE ok/message DÖNÜYOR: hatalı denemeyi kaydedip
--     sonra exception atsaydık, exception aynı işlemi geri alır ve sayaç hiç
--     artmazdı — sınır süs olurdu.
create or replace function public.teacher_invite_preview(p_token text)
returns table (ok boolean, code text, message text, teacher_name text, already_linked boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student uuid := auth.uid();
  v_hash text := hash_invite_token(p_token);
  v_invite teacher_invites%rowtype;
  v_name text;
  v_linked boolean := false;
begin
  if v_student is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if not exists (select 1 from profiles where id = v_student and role = 'student') then
    return query select false, 'student_only',
      'Öğretmen daveti yalnızca öğrenci hesabıyla kabul edilebilir.'::text, null::text, false;
    return;
  end if;

  if not invite_attempt_allowed(v_student) then
    return query select false, 'rate_limited',
      'Çok fazla hatalı deneme yaptınız. Lütfen 15 dakika sonra tekrar deneyin.'::text, null::text, false;
    return;
  end if;

  select * into v_invite from teacher_invites where token_hash = v_hash;

  if not found then
    insert into teacher_invite_attempts (student_id, success) values (v_student, false);
    return query select false, 'not_found',
      'Bu davet bağlantısı geçersiz. Öğretmeninizden yeni bir bağlantı isteyin.'::text, null::text, false;
    return;
  end if;

  if v_invite.revoked_at is not null then
    return query select false, 'revoked',
      'Bu davet iptal edilmiş. Öğretmeninizden yeni bir bağlantı isteyin.'::text, null::text, false;
    return;
  end if;
  if v_invite.used_at is not null then
    return query select false, 'used',
      'Bu davet daha önce kullanılmış. Öğretmeninizden yeni bir bağlantı isteyin.'::text, null::text, false;
    return;
  end if;
  if v_invite.expires_at <= now() then
    return query select false, 'expired',
      'Bu davetin süresi dolmuş. Öğretmeninizden yeni bir bağlantı isteyin.'::text, null::text, false;
    return;
  end if;
  if v_invite.teacher_id = v_student then
    return query select false, 'self',
      'Kendi kendinize bağlanamazsınız.'::text, null::text, false;
    return;
  end if;

  select full_name into v_name from profiles where id = v_invite.teacher_id;
  select exists (
    select 1 from teacher_students
     where teacher_id = v_invite.teacher_id and student_id = v_student and status = 'active'
  ) into v_linked;

  return query select true, null::text, null::text, v_name, v_linked;
end;
$$;

-- 8e) Öğrenci daveti KABUL EDER veya REDDEDER.
create or replace function public.student_respond_teacher_invite(
  p_token text,
  p_accept boolean
)
returns table (ok boolean, code text, message text, teacher_name text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student uuid := auth.uid();
  v_hash text := hash_invite_token(p_token);
  v_invite teacher_invites%rowtype;
  v_name text;
  v_status text;
begin
  if v_student is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if not exists (select 1 from profiles where id = v_student and role = 'student') then
    return query select false, 'student_only',
      'Öğretmen daveti yalnızca öğrenci hesabıyla kabul edilebilir.'::text, null::text;
    return;
  end if;
  if not invite_attempt_allowed(v_student) then
    return query select false, 'rate_limited',
      'Çok fazla hatalı deneme yaptınız. Lütfen 15 dakika sonra tekrar deneyin.'::text, null::text;
    return;
  end if;

  -- Kilitle: iki sekmede aynı anda kabul edilmesin.
  select * into v_invite
    from teacher_invites
   where token_hash = v_hash
   for update;

  if not found then
    insert into teacher_invite_attempts (student_id, success) values (v_student, false);
    return query select false, 'not_found',
      'Bu davet bağlantısı geçersiz.'::text, null::text;
    return;
  end if;
  if v_invite.revoked_at is not null then
    return query select false, 'revoked', 'Bu davet iptal edilmiş.'::text, null::text;
    return;
  end if;
  if v_invite.used_at is not null then
    return query select false, 'used', 'Bu davet daha önce kullanılmış.'::text, null::text;
    return;
  end if;
  if v_invite.expires_at <= now() then
    return query select false, 'expired', 'Bu davetin süresi dolmuş.'::text, null::text;
    return;
  end if;
  if v_invite.teacher_id = v_student then
    return query select false, 'self', 'Kendi kendinize bağlanamazsınız.'::text, null::text;
    return;
  end if;

  select full_name into v_name from profiles where id = v_invite.teacher_id;
  v_status := case when p_accept then 'active' else 'rejected' end;

  insert into teacher_students (teacher_id, student_id, status, created_by, created_via, responded_at)
  values (v_invite.teacher_id, v_student, v_status, v_invite.teacher_id, 'invite', now())
  on conflict (teacher_id, student_id) do update
    set status = excluded.status,
        responded_at = now(),
        ended_at = null,
        ended_by = null,
        created_via = 'invite';

  -- Davet TEK KULLANIMLIKTIR: reddedilse bile tüketilir, yoksa aynı
  -- bağlantı tekrar tekrar denenebilirdi.
  update teacher_invites
     set used_at = now(), used_by = v_student
   where id = v_invite.id;

  delete from teacher_invite_attempts where student_id = v_student and success = false;

  return query select true, v_status, null::text, v_name;
end;
$$;

-- 8f) Bağı sonlandır — hem öğretmen hem öğrenci çağırabilir.
create or replace function public.end_teacher_student_link(p_link_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  update teacher_students
     set status = 'removed',
         ended_at = now(),
         ended_by = auth.uid()
   where id = p_link_id
     and (teacher_id = auth.uid() or student_id = auth.uid())
     and status in ('active', 'pending');

  if not found then
    raise exception 'Sonlandırılabilecek bir bağlantı bulunamadı.' using errcode = 'P0002';
  end if;
end;
$$;

-- 8g) Öğretmenin aktif öğrenci listesi (ad + e-posta ile).
create or replace function public.teacher_student_list()
returns table (
  link_id uuid,
  student_id uuid,
  student_name text,
  student_email text,
  status text,
  linked_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.student_id, p.full_name, u.email::text, l.status, coalesce(l.responded_at, l.invited_at)
    from teacher_students l
    join profiles p on p.id = l.student_id
    left join auth.users u on u.id = l.student_id
   where l.teacher_id = auth.uid()
     and l.status = 'active'
   order by p.full_name;
$$;

-- 8h) Öğrencinin öğretmenleri.
create or replace function public.student_teacher_list()
returns table (
  link_id uuid,
  teacher_id uuid,
  teacher_name text,
  status text,
  linked_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.teacher_id, p.full_name, l.status, coalesce(l.responded_at, l.invited_at)
    from teacher_students l
    join profiles p on p.id = l.teacher_id
   where l.student_id = auth.uid()
     and l.status = 'active'
   order by p.full_name;
$$;


-- ============================================================
-- 9) DERS AKIŞI — RPC'LER
-- ============================================================

-- 9a) Oda kimliği üretici. İstemci oda adı SEÇEMEZ.
create or replace function public.generate_room_id()
returns text
language sql
volatile
as $$
  select 'drk-' || replace(gen_random_uuid()::text, '-', '');
$$;

-- Oda kimliği her zaman sunucuda üretilir: istemci INSERT gövdesine kendi
-- seçtiği bir oda adı yazamasın diye tetikleyiciyle üzerine yazılır.
create or replace function public.lesson_sessions_force_room_id()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'INSERT' then
    new.provider_room_id := public.generate_room_id();
  else
    new.provider_room_id := old.provider_room_id;
  end if;
  return new;
end;
$$;

drop trigger if exists lesson_sessions_force_room_id_trg on lesson_sessions;
create trigger lesson_sessions_force_room_id_trg
  before insert or update on lesson_sessions
  for each row
  execute function public.lesson_sessions_force_room_id();

-- 9b) Ders durumu geçişleri — hepsi öğretmene ait.
create or replace function public.lesson_set_status(
  p_session uuid,
  p_status text,
  p_reason text default null
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_current text;
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if p_status not in ('scheduled', 'lobby_open', 'live', 'completed', 'cancelled', 'no_show') then
    raise exception 'Geçersiz ders durumu.' using errcode = '22023';
  end if;

  select status into v_current
    from lesson_sessions
   where id = p_session and teacher_id = auth.uid()
   for update;

  if v_current is null then
    raise exception 'Ders bulunamadı veya bu ders size ait değil.' using errcode = '42501';
  end if;

  update lesson_sessions
     set status = p_status,
         started_at = case
           when p_status = 'live' and started_at is null then now()
           else started_at end,
         ended_at = case
           when p_status in ('completed', 'cancelled', 'no_show') then now()
           else ended_at end,
         cancel_reason = case
           when p_status in ('cancelled', 'no_show') then nullif(btrim(coalesce(p_reason, '')), '')
           else cancel_reason end
   where id = p_session;

  return p_status;
end;
$$;

-- 9c) Katılım kaydı. `user_id` İSTEMCİDEN ALINMAZ — auth.uid() kullanılır.
create or replace function public.lesson_join(p_session uuid)
returns table (participant_role text, lesson_status text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_session lesson_sessions%rowtype;
  v_role text;
  v_existing lesson_participants%rowtype;
begin
  if v_user is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  select * into v_session from lesson_sessions where id = p_session for update;
  if not found then
    raise exception 'Ders bulunamadı.' using errcode = 'P0002';
  end if;

  if v_session.teacher_id = v_user then
    v_role := 'teacher';
  elsif v_session.student_id = v_user then
    v_role := 'student';
  else
    raise exception 'Bu derse katılma yetkiniz yok.' using errcode = '42501';
  end if;

  if v_session.status in ('completed', 'cancelled', 'no_show') then
    raise exception 'Bu ders sona ermiş.' using errcode = 'P0001';
  end if;

  -- Öğrenci ancak öğretmen odayı açtıysa girebilir.
  if v_role = 'student' and v_session.status = 'scheduled' then
    raise exception 'Ders odası henüz açılmadı.' using errcode = 'P0001';
  end if;

  -- Öğretmen girdiğinde bekleme odası kendiliğinden açılır.
  if v_role = 'teacher' and v_session.status = 'scheduled' then
    update lesson_sessions set status = 'lobby_open' where id = p_session;
    v_session.status := 'lobby_open';
  end if;

  select * into v_existing
    from lesson_participants
   where lesson_session_id = p_session and user_id = v_user;

  if found then
    update lesson_participants
       set reconnect_count = reconnect_count + 1,
           attended = true,
           last_left_at = null
     where id = v_existing.id;
  else
    insert into lesson_participants (lesson_session_id, user_id, role, first_joined_at, attended)
    values (p_session, v_user, v_role, now(), true);
  end if;

  return query select v_role, v_session.status;
end;
$$;

-- 9d) Ayrılış. Süre istemciden gelir ama SINIRLANIR: kullanıcı "bu derste
--     40 saat kaldım" yazamasın diye planlanan süre + 4 saat ile kırpılır.
create or replace function public.lesson_leave(p_session uuid, p_seconds integer default 0)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_cap integer;
begin
  if v_user is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  select least(
           greatest(coalesce(p_seconds, 0), 0),
           extract(epoch from (scheduled_end - scheduled_start))::int + 14400
         )
    into v_cap
    from lesson_sessions
   where id = p_session
     and (teacher_id = v_user or student_id = v_user);

  if v_cap is null then
    raise exception 'Ders bulunamadı veya yetkiniz yok.' using errcode = '42501';
  end if;

  update lesson_participants
     set last_left_at = now(),
         total_seconds = total_seconds + v_cap
   where lesson_session_id = p_session
     and user_id = v_user;
end;
$$;

-- 9e) Tahta sayfasını kaydet.
create or replace function public.lesson_board_save(
  p_session uuid,
  p_page integer,
  p_content jsonb,
  p_background jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_session lesson_sessions%rowtype;
begin
  if v_user is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if p_page is null or p_page < 0 or p_page > 200 then
    raise exception 'Geçersiz sayfa numarası.' using errcode = '22023';
  end if;

  select * into v_session from lesson_sessions where id = p_session;
  if not found then
    raise exception 'Ders bulunamadı.' using errcode = 'P0002';
  end if;

  if v_session.teacher_id = v_user then
    if v_session.status = 'cancelled' then
      raise exception 'İptal edilmiş derste tahta kaydedilemez.' using errcode = 'P0001';
    end if;
  elsif v_session.student_id = v_user then
    if v_session.status not in ('lobby_open', 'live') then
      raise exception 'Ders şu anda açık değil.' using errcode = 'P0001';
    end if;
  else
    raise exception 'Bu dersin tahtasına yazma yetkiniz yok.' using errcode = '42501';
  end if;

  insert into lesson_board_pages (lesson_session_id, page_index, content, background, updated_by)
  values (p_session, p_page, coalesce(p_content, '{"v":1,"items":[]}'::jsonb),
          coalesce(p_background, '{}'::jsonb), v_user)
  on conflict (lesson_session_id, page_index) do update
    set content = excluded.content,
        background = excluded.background,
        updated_by = excluded.updated_by,
        updated_at = now();
end;
$$;

-- 9f) Öğrencinin ders sonu geri bildirimi.
--     Öğrenciye UPDATE politikası vermek yerine RPC: politika kolon
--     kısıtlayamaz, öğrenci `public_note` alanını da değiştirebilirdi.
create or replace function public.lesson_student_feedback(p_session uuid, p_feedback text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if p_feedback not in ('anladim', 'tekrar_gerekli', 'yeniden_anlatilmali') then
    raise exception 'Geçersiz geri bildirim.' using errcode = '22023';
  end if;

  update lesson_summaries
     set student_feedback = p_feedback,
         student_feedback_at = now()
   where lesson_session_id = p_session
     and student_id = auth.uid()
     and shared_with_student;

  if not found then
    raise exception 'Bu ders için paylaşılmış bir özet bulunamadı.' using errcode = 'P0002';
  end if;
end;
$$;

-- 9g) Çakışma kontrolü. Öğretmenin VE öğrencinin takvimine bakar.
--     Öğrenci başka bir öğretmenle ders yapıyorsa oradaki dersin ayrıntısı
--     DÖNMEZ; yalnızca "dolu" bilgisi döner.
create or replace function public.lesson_conflicts(
  p_student uuid,
  p_start timestamptz,
  p_end timestamptz,
  p_exclude uuid default null
)
returns table (teacher_busy boolean, student_busy boolean)
language sql
stable
security definer
set search_path = public
as $$
  select
    exists (
      select 1 from lesson_sessions s
       where s.teacher_id = auth.uid()
         and s.status in ('scheduled', 'lobby_open', 'live')
         and (p_exclude is null or s.id <> p_exclude)
         and s.scheduled_start < p_end and s.scheduled_end > p_start
    ),
    exists (
      select 1 from lesson_sessions s
       where s.student_id = p_student
         and s.status in ('scheduled', 'lobby_open', 'live')
         and (p_exclude is null or s.id <> p_exclude)
         and s.scheduled_start < p_end and s.scheduled_end > p_start
    );
$$;


-- ============================================================
-- 10) YETKİLER — hepsi SECURITY DEFINER, anonim erişime kapalı
-- ============================================================
do $$
declare fn text;
begin
  foreach fn in array array[
    'public.teacher_create_invite(text, integer)',
    'public.teacher_revoke_invite(uuid)',
    'public.teacher_invite_preview(text)',
    'public.student_respond_teacher_invite(text, boolean)',
    'public.end_teacher_student_link(uuid)',
    'public.teacher_student_list()',
    'public.student_teacher_list()',
    'public.lesson_set_status(uuid, text, text)',
    'public.lesson_join(uuid)',
    'public.lesson_leave(uuid, integer)',
    'public.lesson_board_save(uuid, integer, jsonb, jsonb)',
    'public.lesson_student_feedback(uuid, text)',
    'public.lesson_conflicts(uuid, timestamptz, timestamptz, uuid)'
  ] loop
    execute format('revoke all on function %s from public, anon', fn);
    execute format('grant execute on function %s to authenticated', fn);
  end loop;
end $$;

-- Yalnızca içeriden çağrılanlar — istemciye hiç açılmaz.
revoke all on function public.invite_attempt_allowed(uuid) from public, anon, authenticated;
revoke all on function public.generate_invite_token() from public, anon, authenticated;
revoke all on function public.generate_room_id() from public, anon, authenticated;


-- ============================================================
-- 11) MEVCUT POLİTİKALARI DARALT
--     "bu kişi öğretmen mi" yerine "bu öğrencinin öğretmeni mi".
--     3. bölümdeki taşıma sayesinde mevcut erişim kaybolmaz.
-- ============================================================

-- 11a) PROFİL GÖRÜNÜRLÜĞÜ
--      `role = 'teacher'` koşulu KORUNUR: Mesajlar sekmesi öğrencinin
--      öğretmen listesini çekiyor, kaldırılırsa mesajlaşma kırılır.
drop policy if exists "Profil görünürlüğü" on profiles;
create policy "Profil görünürlüğü"
  on profiles for select
  using (
    auth.uid() is not null
    and (
      auth.uid() = id
      or role = 'teacher'
      or public.is_active_teacher_of(id)
      or public.is_linked_parent_of(id)
    )
  );

-- 11b) GÜNLÜK ÇALIŞMA KAYITLARI
drop policy if exists "Kendi kayıtlarını veya öğretmen tümünü görebilir" on daily_logs;
drop policy if exists "Kendi kaydını veya öğretmeni görebilir" on daily_logs;
create policy "Kendi kaydını veya öğretmeni görebilir"
  on daily_logs for select
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id));

-- 11c) BRANŞ DENEMELERİ
drop policy if exists "Öğrenci kendi sonuçlarını görebilir" on exams;
create policy "Öğrenci kendi sonuçlarını görebilir"
  on exams for select
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen sonuç ekleyebilir" on exams;
create policy "Öğretmen sonuç ekleyebilir"
  on exams for insert
  with check (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen sonuç güncelleyebilir" on exams;
create policy "Öğretmen sonuç güncelleyebilir"
  on exams for update
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id))
  with check (auth.uid() = student_id or public.is_active_teacher_of(student_id));

-- 11d) SORUNLU SORULAR
drop policy if exists "Öğrenci kendi sorularını görebilir" on questions;
create policy "Öğrenci kendi sorularını görebilir"
  on questions for select
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen soru durumunu güncelleyebilir" on questions;
create policy "Öğretmen soru durumunu güncelleyebilir"
  on questions for update
  using (public.is_active_teacher_of(student_id))
  with check (public.is_active_teacher_of(student_id));

-- 11e) ÖDEVLER
drop policy if exists "Kendi ödevini veya öğretmen tümünü görebilir" on homeworks;
create policy "Kendi ödevini veya öğretmen tümünü görebilir"
  on homeworks for select
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen ödev atayabilir" on homeworks;
create policy "Öğretmen ödev atayabilir"
  on homeworks for insert
  with check (public.is_active_teacher_of(student_id) and teacher_id = auth.uid());

drop policy if exists "Öğrenci durumunu, öğretmen her şeyi güncelleyebilir" on homeworks;
create policy "Öğrenci durumunu, öğretmen her şeyi güncelleyebilir"
  on homeworks for update
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id))
  with check (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Öğretmen ödev silebilir" on homeworks;
create policy "Öğretmen ödev silebilir"
  on homeworks for delete
  using (public.is_active_teacher_of(student_id));

-- 11f) GENEL DENEMELER
drop policy if exists "Kendi denemesini veya öğretmen tümünü görebilir" on mock_exams;
create policy "Kendi denemesini veya öğretmen tümünü görebilir"
  on mock_exams for select
  using (auth.uid() = student_id or public.is_active_teacher_of(student_id));

drop policy if exists "Deneme sahibinin ders sonuçlarını görme yetkisi" on mock_exam_subjects;
create policy "Deneme sahibinin ders sonuçlarını görme yetkisi"
  on mock_exam_subjects for select
  using (
    exists (
      select 1 from mock_exams
       where mock_exams.id = mock_exam_subjects.mock_exam_id
         and (
           mock_exams.student_id = auth.uid()
           or public.is_active_teacher_of(mock_exams.student_id)
         )
    )
  );


-- ============================================================
-- 12) REALTIME
--     Yalnızca DURUM değişikliği için. Tahta çizgileri buradan GEÇMEZ;
--     onlar broadcast kanalıyla gider (bkz. src/lib/liveLesson/channel.js).
-- ============================================================
do $$
begin
  alter publication supabase_realtime add table lesson_sessions;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table lesson_participants;
exception when duplicate_object then null;
end $$;

commit;


-- ============================================================
-- İSTEĞE BAĞLI SIKILAŞTIRMA — ÖZEL REALTIME KANALLARI
-- ------------------------------------------------------------
-- Aşağıdaki bölüm, Realtime broadcast/presence kanallarını da RLS ile
-- korur. Uygulamak için:
--   1. Supabase panelinde Realtime Authorization'ın açık olduğunu doğrulayın
--      (`realtime.messages` tablosu var mı diye bakın).
--   2. Bu bloğu yorumdan çıkarıp ayrıca çalıştırın.
--   3. `.env` dosyasına `VITE_LIVE_LESSON_PRIVATE_CHANNELS=true` ekleyin.
--
-- Uygulanmazsa: kanal adı 36 karakterlik rastgele bir oda kimliğidir ve
-- yalnızca dersin iki tarafı bu kimliği okuyabilir. Yine de kanalın kendisi
-- veritabanı düzeyinde korunmaz — bu yüzden derse ait HİÇBİR kalıcı veri
-- kanaldan okunmaz, kanal sadece anlık çizim/sohbet taşır.
-- ------------------------------------------------------------
-- create policy "Ders kanalını yalnız tarafları dinler"
--   on realtime.messages for select
--   to authenticated
--   using (
--     exists (
--       select 1 from public.lesson_sessions s
--        where s.provider_room_id = realtime.topic()
--          and (s.teacher_id = auth.uid() or s.student_id = auth.uid())
--          and s.status in ('lobby_open', 'live')
--     )
--   );
--
-- create policy "Ders kanalına yalnız tarafları yazar"
--   on realtime.messages for insert
--   to authenticated
--   with check (
--     exists (
--       select 1 from public.lesson_sessions s
--        where s.provider_room_id = realtime.topic()
--          and (s.teacher_id = auth.uid() or s.student_id = auth.uid())
--          and s.status in ('lobby_open', 'live')
--     )
--   );


-- ============================================================
-- DOĞRULAMA (göçten sonra çalıştırıp gözle kontrol edin)
-- ============================================================
-- select status, count(*) from teacher_students group by status;
-- select tablename, policyname from pg_policies
--  where schemaname = 'public' and tablename like 'lesson%' order by tablename;
