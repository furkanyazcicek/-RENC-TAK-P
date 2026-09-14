-- ============================================================
-- ÇİFT YÖNLÜ ÖĞRETMEN–ÖĞRENCİ BİLDİRİM MERKEZİ
--
-- Öğrencinin anlamlı akademik kayıtlarını aktif bağlı öğretmenine;
-- öğretmenin mesaj, soru yanıtı ve yeni ödevini ilgili öğrenciye taşır.
-- Ham tıklamalar ve özel içerik önizlemeleri bildirim metnine alınmaz.
--
-- Uygulama sırası:
--   1. migration_live_lessons.sql (teacher_students tek ilişki kaynağı)
--   2. bu dosya
--   3. send-push Edge Function ve account_notifications INSERT webhook'u
-- ============================================================

begin;

create schema if not exists notification_private;
revoke all on schema notification_private from public;

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);

alter table public.push_subscriptions enable row level security;

create table if not exists public.account_notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in (
    'message', 'question', 'question_replied', 'daily_log', 'branch_exam',
    'mock_exam', 'homework_assigned', 'homework_completed',
    'lesson_completed', 'assessment_completed', 'atlas_task_completed',
    'ai_solve_completed'
  )),
  source_table text not null,
  source_id text not null,
  event_key text not null default 'created',
  title text not null check (char_length(title) between 1 and 120),
  body text not null default '' check (char_length(body) <= 240),
  target_path text not null default '/ogretmen'
    check (target_path ~ '^/[a-zA-Z0-9?&=_%/.-]*$'),
  created_at timestamptz not null default now(),
  read_at timestamptz,
  push_attempted_at timestamptz,
  push_sent_at timestamptz,
  push_last_error text,
  constraint account_notifications_read_order check (
    read_at is null or read_at >= created_at
  ),
  constraint account_notifications_recipient_pair check (
    recipient_id = teacher_id or recipient_id = student_id
  ),
  constraint account_notifications_unique_event unique (
    recipient_id, source_table, source_id, event_key
  )
);

create index if not exists account_notifications_recipient_feed_idx
  on public.account_notifications (recipient_id, created_at desc);
create index if not exists account_notifications_recipient_unread_idx
  on public.account_notifications (recipient_id, created_at desc)
  where read_at is null;
create index if not exists account_notifications_pair_idx
  on public.account_notifications (teacher_id, student_id, created_at desc);

comment on table public.account_notifications is
  'Aktif öğretmen–öğrenci bağına göre iki yönde üretilen kalıcı bildirim izdüşümü.';

alter table public.account_notifications enable row level security;

drop policy if exists "Kullanıcı kendi bağlı bildirimlerini görebilir" on public.account_notifications;
create policy "Kullanıcı kendi bağlı bildirimlerini görebilir"
  on public.account_notifications for select
  using (
    auth.uid() = recipient_id
    and exists (
      select 1 from public.teacher_students as link
       where link.teacher_id = account_notifications.teacher_id
         and link.student_id = account_notifications.student_id
         and link.status = 'active'
    )
    and (
      (recipient_id = teacher_id and exists (
        select 1 from public.profiles where id = auth.uid() and role = 'teacher'
      ))
      or
      (recipient_id = student_id and exists (
        select 1 from public.profiles where id = auth.uid() and role = 'student'
      ))
    )
  );

drop policy if exists "Kullanıcı kendi bağlı bildirimini okundu yapabilir" on public.account_notifications;
create policy "Kullanıcı kendi bağlı bildirimini okundu yapabilir"
  on public.account_notifications for update
  using (
    auth.uid() = recipient_id
    and exists (
      select 1 from public.teacher_students as link
       where link.teacher_id = account_notifications.teacher_id
         and link.student_id = account_notifications.student_id
         and link.status = 'active'
    )
  )
  with check (
    auth.uid() = recipient_id
    and exists (
      select 1 from public.teacher_students as link
       where link.teacher_id = account_notifications.teacher_id
         and link.student_id = account_notifications.student_id
         and link.status = 'active'
    )
  );

revoke insert, delete on table public.account_notifications from public, anon, authenticated;
revoke update on table public.account_notifications from public, anon, authenticated;
grant select on table public.account_notifications to authenticated;
grant update (read_at) on table public.account_notifications to authenticated;

-- Bu yardımcı yalnız tetikleyicilerden çağrılır. Öğrencinin adı başlığa
-- eklenir; not, mesaj metni veya soru içeriği gibi özel veri kopyalanmaz.
create or replace function notification_private.add_for_student(
  p_student_id uuid,
  p_kind text,
  p_source_table text,
  p_source_id text,
  p_event_key text,
  p_title_suffix text,
  p_body text,
  p_target_path text
) returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student_name text;
  v_inserted integer := 0;
begin
  if p_student_id is null or p_source_id is null then
    return 0;
  end if;

  select nullif(btrim(profile.full_name), '')
    into v_student_name
    from public.profiles as profile
   where profile.id = p_student_id and profile.role = 'student';

  if v_student_name is null then
    return 0;
  end if;

  insert into public.account_notifications (
    recipient_id, teacher_id, student_id, kind, source_table, source_id, event_key,
    title, body, target_path
  )
  select
    link.teacher_id,
    link.teacher_id,
    p_student_id,
    p_kind,
    p_source_table,
    p_source_id,
    coalesce(nullif(p_event_key, ''), 'created'),
    left(v_student_name || ' ' || p_title_suffix, 120),
    left(coalesce(p_body, ''), 240),
    coalesce(nullif(p_target_path, ''), '/ogretmen')
  from public.teacher_students as link
  join public.profiles as teacher
    on teacher.id = link.teacher_id and teacher.role = 'teacher'
  where link.student_id = p_student_id
    and link.status = 'active'
  on conflict (recipient_id, source_table, source_id, event_key) do nothing;

  get diagnostics v_inserted = row_count;
  return v_inserted;
end;
$$;

revoke all on function notification_private.add_for_student(
  uuid, text, text, text, text, text, text, text
) from public, anon, authenticated;

-- Öğretmenden ilgili öğrenciye giden bildirimlerin tek yardımcısı.
-- Öğretmen adı gösterilir; soru/mesaj gibi özel metin kopyalanmaz.
create or replace function notification_private.add_for_teacher_action(
  p_teacher_id uuid,
  p_student_id uuid,
  p_kind text,
  p_source_table text,
  p_source_id text,
  p_event_key text,
  p_title_suffix text,
  p_body text,
  p_target_path text
) returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_teacher_name text;
  v_inserted integer := 0;
begin
  if p_teacher_id is null or p_student_id is null or p_source_id is null then
    return false;
  end if;

  select nullif(btrim(profile.full_name), '')
    into v_teacher_name
    from public.profiles as profile
   where profile.id = p_teacher_id and profile.role = 'teacher';

  if v_teacher_name is null
     or not exists (
       select 1 from public.teacher_students as link
        where link.teacher_id = p_teacher_id
          and link.student_id = p_student_id
          and link.status = 'active'
     ) then
    return false;
  end if;

  insert into public.account_notifications (
    recipient_id, teacher_id, student_id, kind, source_table, source_id,
    event_key, title, body, target_path
  ) values (
    p_student_id, p_teacher_id, p_student_id, p_kind, p_source_table,
    p_source_id, coalesce(nullif(p_event_key, ''), 'created'),
    left(v_teacher_name || ' ' || p_title_suffix, 120),
    left(coalesce(p_body, ''), 240),
    coalesce(nullif(p_target_path, ''), '/')
  ) on conflict (recipient_id, source_table, source_id, event_key) do nothing;

  get diagnostics v_inserted = row_count;
  return v_inserted > 0;
end;
$$;

revoke all on function notification_private.add_for_teacher_action(
  uuid, uuid, text, text, text, text, text, text, text
) from public, anon, authenticated;

-- Mesaj iki yönlüdür: öğrenciden yalnızca alıcı öğretmene, öğretmenden
-- yalnızca alıcı öğrenciye gider. Aktif bağ yoksa bildirim üretilmez.
create or replace function notification_private.on_message_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_sender_role text;
  v_student_name text;
begin
  if auth.uid() is distinct from new.sender_id then
    return new;
  end if;

  select profile.role
    into v_sender_role
    from public.profiles as profile
   where profile.id = new.sender_id;

  if v_sender_role = 'teacher' then
    perform notification_private.add_for_teacher_action(
      new.sender_id, new.receiver_id, 'message', 'messages', new.id::text,
      'created', 'yeni bir mesaj gönderdi',
      'Mesajı güvenli sohbet ekranında görmek için dokun.',
      '/mesajlar?ogretmen=' || new.sender_id::text
    );
    return new;
  end if;

  select nullif(btrim(student.full_name), '')
    into v_student_name
    from public.profiles as student
   where student.id = new.sender_id and student.role = 'student';

  if v_student_name is null
     or not exists (
       select 1
         from public.teacher_students as link
         join public.profiles as teacher
           on teacher.id = link.teacher_id and teacher.role = 'teacher'
        where link.teacher_id = new.receiver_id
          and link.student_id = new.sender_id
          and link.status = 'active'
     ) then
    return new;
  end if;

  insert into public.account_notifications (
    recipient_id, teacher_id, student_id, kind, source_table, source_id, event_key,
    title, body, target_path
  ) values (
    new.receiver_id,
    new.receiver_id,
    new.sender_id,
    'message',
    'messages',
    new.id::text,
    'created',
    left(v_student_name || ' yeni bir mesaj gönderdi', 120),
    'Mesajı güvenli sohbet ekranında görmek için dokun.',
    '/mesajlar?ogrenci=' || new.sender_id::text
  ) on conflict (recipient_id, source_table, source_id, event_key) do nothing;

  return new;
end;
$$;

create or replace function notification_private.on_question_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is not distinct from new.student_id then
    perform notification_private.add_for_student(
      new.student_id, 'question', 'questions', new.id::text, 'created',
      'yeni bir soru gönderdi',
      'Soruyu incelemek için dokun.',
      '/sorular'
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_question_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_teacher uuid := auth.uid();
  v_new_reply text := nullif(btrim(coalesce(to_jsonb(new) ->> 'teacher_reply', '')), '');
  v_old_reply text := nullif(btrim(coalesce(to_jsonb(old) ->> 'teacher_reply', '')), '');
  v_new_image text := nullif(btrim(coalesce(to_jsonb(new) ->> 'teacher_reply_image_url', '')), '');
  v_old_image text := nullif(btrim(coalesce(to_jsonb(old) ->> 'teacher_reply_image_url', '')), '');
begin
  -- Yalnızca ilk gerçek çözüm/yanıt gelişi bildirilir. Sonraki yazım
  -- düzeltmeleri aynı kaynak + event_key sayesinde ikinci bildirim üretmez.
  if (v_new_reply is not null or v_new_image is not null)
     and (v_new_reply is distinct from v_old_reply or v_new_image is distinct from v_old_image)
     and exists (
       select 1 from public.profiles as teacher
        where teacher.id = v_teacher and teacher.role = 'teacher'
     ) then
    perform notification_private.add_for_teacher_action(
      v_teacher, new.student_id, 'question_replied', 'questions', new.id::text,
      'teacher_reply', 'soruna çözüm gönderdi',
      'Çözümü Sorular ekranında görmek için dokun.',
      '/sorular'
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_daily_log_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_total integer := coalesce(new.correct, 0) + coalesce(new.incorrect, 0) + coalesce(new.empty, 0);
  v_body text;
begin
  if auth.uid() is not distinct from new.student_id then
    v_body := coalesce(nullif(btrim(new.topic), ''), 'Çalışma kaydı')
      || case when coalesce(new.duration_minutes, 0) > 0
              then ' · ' || new.duration_minutes::text || ' dk' else '' end
      || case when v_total > 0 then ' · ' || v_total::text || ' soru' else '' end;

    perform notification_private.add_for_student(
      new.student_id, 'daily_log', 'daily_logs', new.id::text, 'created',
      'çalışma kaydı ekledi', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_branch_exam_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_total integer := coalesce(new.correct, 0) + coalesce(new.incorrect, 0) + coalesce(new.empty, 0);
  v_body text;
begin
  if auth.uid() is not distinct from new.student_id then
    v_body := coalesce(nullif(btrim(new.topic), ''), 'Branş denemesi')
      || case when v_total > 0 then ' · ' || v_total::text || ' soru' else '' end;

    perform notification_private.add_for_student(
      new.student_id, 'branch_exam', 'exams', new.id::text, 'created',
      'branş denemesi sonucu ekledi', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_mock_exam_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_body text;
begin
  if auth.uid() is not distinct from new.student_id then
    v_body := coalesce(nullif(btrim(new.exam_type), ''), 'Genel') || ' denemesi'
      || case when nullif(btrim(new.exam_name), '') is not null
              then ' · ' || btrim(new.exam_name) else '' end;

    perform notification_private.add_for_student(
      new.student_id, 'mock_exam', 'mock_exams', new.id::text, 'created',
      'genel deneme sonucu ekledi', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_homework_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if old.status is distinct from new.status
     and new.status = 'Tamamlandı'
     and auth.uid() is not distinct from new.student_id then
    perform notification_private.add_for_student(
      new.student_id, 'homework_completed', 'homeworks', new.id::text,
      'status:completed', 'ödevini tamamladı',
      coalesce(nullif(btrim(new.title), ''), 'Ödev tamamlandı'),
      '/odevler'
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_homework_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_teacher uuid := auth.uid();
begin
  if (new.teacher_id is null or new.teacher_id = v_teacher)
     and exists (
       select 1 from public.profiles as teacher
        where teacher.id = v_teacher and teacher.role = 'teacher'
     ) then
    perform notification_private.add_for_teacher_action(
      v_teacher, new.student_id, 'homework_assigned', 'homeworks', new.id::text,
      'assigned', 'yeni bir ödev verdi',
      coalesce(nullif(btrim(new.title), ''), 'Yeni ödev'),
      '/odevler'
    );
  end if;
  return new;
end;
$$;

-- Faz 3 tabloları kuruluysa ölçülebilir tamamlanmalar da bağlanır. Yalnız
-- tamamlanma olayı bildirilir; ders açma, ses başlatma ve ham tıklamalar
-- özellikle dışarıda bırakılır.
create or replace function notification_private.on_lesson_activity_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.event_name = 'lesson_completed'
     and auth.uid() is not distinct from new.student_id then
    perform notification_private.add_for_student(
      new.student_id, 'lesson_completed', tg_table_name, new.id::text,
      'lesson_completed', 'bir dersi tamamladı',
      'Tamamlanan dersi ve öğrencinin gelişimini görmek için dokun.',
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_assessment_status_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_body text;
begin
  if old.status is distinct from new.status
     and new.status = 'completed'
     and auth.uid() is not distinct from new.student_id then
    v_body := coalesce(new.correct_count, 0)::text || ' doğru · '
      || coalesce(new.wrong_count, 0)::text || ' yanlış';
    perform notification_private.add_for_student(
      new.student_id, 'assessment_completed', 'student_question_set_attempts', new.id::text,
      'completed', 'bir testi tamamladı', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_legacy_assessment_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_body text;
begin
  if old.completed_at is null
     and new.completed_at is not null
     and auth.uid() is not distinct from new.student_id then
    v_body := coalesce(new.correct_count, 0)::text || ' doğru · '
      || coalesce(new.wrong_count, 0)::text || ' yanlış';
    perform notification_private.add_for_student(
      new.student_id, 'assessment_completed', 'student_question_set_attempts', new.id::text,
      'completed', 'bir testi tamamladı', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_atlas_task_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.completed
     and (tg_op = 'INSERT' or old.completed is distinct from new.completed)
     and auth.uid() is not distinct from new.student_id then
    perform notification_private.add_for_student(
      new.student_id, 'atlas_task_completed', 'student_atlas_task_states', new.state_id::text,
      'completed:' || new.state_revision::text, 'bir atlas görevini tamamladı',
      'Atlas görevi · ' || replace(coalesce(new.source_code, 'atlas'), '_', ' '),
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

create or replace function notification_private.on_ai_solve_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_body text;
begin
  -- Çözümün ham sorusu, görseli, öğrenci notu ve yanıtı bildirim metnine
  -- girmez. Okunamayan/teknik hata olan yüklemeler de öğrenme sonucu değildir.
  if new.status = 'ok' and auth.uid() is not distinct from new.student_id then
    v_body := coalesce(nullif(btrim(new.subject), ''), 'Ders belirtilmedi')
      || case when nullif(btrim(new.canonical_topic), '') is not null
              then ' · ' || btrim(new.canonical_topic)
              when nullif(btrim(new.topic), '') is not null
              then ' · ' || btrim(new.topic)
              else '' end;
    perform notification_private.add_for_student(
      new.student_id, 'ai_solve_completed', 'ai_solution_sessions', new.id::text,
      'created', 'AI Soru Çöz ile bir soru çalıştı', v_body,
      '/ogretmen/ogrenci/' || new.student_id::text
    );
  end if;
  return new;
end;
$$;

-- Çekirdek kaynak tetikleyicileri.
drop trigger if exists teacher_notification_message_insert on public.messages;
create trigger teacher_notification_message_insert
  after insert on public.messages
  for each row execute function notification_private.on_message_insert();

drop trigger if exists teacher_notification_question_insert on public.questions;
create trigger teacher_notification_question_insert
  after insert on public.questions
  for each row execute function notification_private.on_question_insert();

drop trigger if exists account_notification_question_reply on public.questions;
create trigger account_notification_question_reply
  after update on public.questions
  for each row execute function notification_private.on_question_update();

drop trigger if exists teacher_notification_daily_log_insert on public.daily_logs;
create trigger teacher_notification_daily_log_insert
  after insert on public.daily_logs
  for each row execute function notification_private.on_daily_log_insert();

drop trigger if exists teacher_notification_branch_exam_insert on public.exams;
create trigger teacher_notification_branch_exam_insert
  after insert on public.exams
  for each row execute function notification_private.on_branch_exam_insert();

drop trigger if exists teacher_notification_mock_exam_insert on public.mock_exams;
create trigger teacher_notification_mock_exam_insert
  after insert on public.mock_exams
  for each row execute function notification_private.on_mock_exam_insert();

drop trigger if exists teacher_notification_homework_update on public.homeworks;
create trigger teacher_notification_homework_update
  after update of status on public.homeworks
  for each row execute function notification_private.on_homework_update();

drop trigger if exists account_notification_homework_insert on public.homeworks;
create trigger account_notification_homework_insert
  after insert on public.homeworks
  for each row execute function notification_private.on_homework_insert();

-- Eski doğrudan push tetikleyicileri aynı olayı ikinci kez göndermesin.
drop trigger if exists on_new_message_notify on public.messages;
drop trigger if exists on_new_question_notify on public.questions;

-- Faz 3 kurulmuşsa isteğe bağlı kaynakları bağla. Kolon denetimleri eski
-- soru kütüphanesi şemasıyla yeni şemanın ikisinde de güvenli çalışır.
do $$
begin
  if to_regclass('public.lesson_activity_events') is not null then
    execute 'drop trigger if exists teacher_notification_lesson_complete on public.lesson_activity_events';
    execute 'create trigger teacher_notification_lesson_complete after insert on public.lesson_activity_events for each row execute function notification_private.on_lesson_activity_insert()';
  end if;

  if to_regclass('public.bundled_lesson_activity_events') is not null then
    execute 'drop trigger if exists teacher_notification_bundled_lesson_complete on public.bundled_lesson_activity_events';
    execute 'create trigger teacher_notification_bundled_lesson_complete after insert on public.bundled_lesson_activity_events for each row execute function notification_private.on_lesson_activity_insert()';
  end if;

  if to_regclass('public.student_question_set_attempts') is not null then
    execute 'drop trigger if exists teacher_notification_assessment_complete on public.student_question_set_attempts';
    if exists (
      select 1 from information_schema.columns
       where table_schema = 'public'
         and table_name = 'student_question_set_attempts'
         and column_name = 'status'
    ) then
      execute 'create trigger teacher_notification_assessment_complete after update of status on public.student_question_set_attempts for each row execute function notification_private.on_assessment_status_update()';
    else
      execute 'create trigger teacher_notification_assessment_complete after update of completed_at on public.student_question_set_attempts for each row execute function notification_private.on_legacy_assessment_update()';
    end if;
  end if;

  if to_regclass('public.student_atlas_task_states') is not null then
    execute 'drop trigger if exists teacher_notification_atlas_complete on public.student_atlas_task_states';
    execute 'create trigger teacher_notification_atlas_complete after insert or update of completed on public.student_atlas_task_states for each row execute function notification_private.on_atlas_task_change()';
  end if;

  if to_regclass('public.ai_solution_sessions') is not null then
    execute 'drop trigger if exists teacher_notification_ai_solve_complete on public.ai_solution_sessions';
    execute 'create trigger teacher_notification_ai_solve_complete after insert on public.ai_solution_sessions for each row execute function notification_private.on_ai_solve_insert()';
  end if;
end
$$;

-- Edge Function aynı webhook'u iki kez alırsa ikinci push'ı engelleyen dar,
-- yalnız service_role tarafından çağrılabilen atomik hak talebi.
create or replace function public.claim_account_notification_push(p_notification_id uuid)
returns table (
  notification_id uuid,
  user_id uuid,
  title text,
  body text,
  url text
)
language sql
security definer
set search_path = ''
as $$
  update public.account_notifications as notification
     set push_attempted_at = now(),
         push_last_error = null
   where notification.id = p_notification_id
     and notification.push_sent_at is null
     and exists (
       select 1 from public.teacher_students as link
        where link.teacher_id = notification.teacher_id
          and link.student_id = notification.student_id
          and link.status = 'active'
     )
     and (
       notification.push_attempted_at is null
       or notification.push_attempted_at < now() - interval '5 minutes'
     )
  returning notification.id, notification.recipient_id, notification.title,
            notification.body, notification.target_path;
$$;

create or replace function public.finish_account_notification_push(
  p_notification_id uuid,
  p_delivered boolean,
  p_error text default null
) returns void
language sql
security definer
set search_path = ''
as $$
  update public.account_notifications
     set push_sent_at = case when p_delivered then now() else push_sent_at end,
         push_last_error = case when p_delivered then null else left(p_error, 500) end
   where id = p_notification_id;
$$;

revoke all on function public.claim_account_notification_push(uuid) from public, anon, authenticated;
revoke all on function public.finish_account_notification_push(uuid, boolean, text) from public, anon, authenticated;
grant execute on function public.claim_account_notification_push(uuid) to service_role;
grant execute on function public.finish_account_notification_push(uuid, boolean, text) to service_role;

-- Erken geliştirme sürümü uygulanmışsa artık kullanılmayan tek yönlü
-- RPC'leri kaldır. Bildirim verisi silinmez.
drop function if exists public.claim_teacher_notification_push(uuid);
drop function if exists public.finish_teacher_notification_push(uuid, boolean, text);

-- Var olan push abonelik tablosunu cihaz değişimi ve tekrar abonelik için
-- idempotent hâle getirir. Endpoint gizli değildir ama yüksek entropili olduğu
-- için yalnız oturumdaki kullanıcı sahiplenebilir.
alter table public.push_subscriptions
  add column if not exists user_agent text,
  add column if not exists updated_at timestamptz not null default now();

create or replace function public.save_push_subscription(
  p_endpoint text,
  p_p256dh text,
  p_auth text,
  p_user_agent text default null
) returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null then
    raise exception 'Oturum gerekli.' using errcode = '42501';
  end if;
  if p_endpoint !~ '^https://' or char_length(p_endpoint) > 2048
     or char_length(p_p256dh) not between 16 and 512
     or char_length(p_auth) not between 8 and 256 then
    raise exception 'Geçersiz push aboneliği.' using errcode = '22023';
  end if;

  insert into public.push_subscriptions (
    user_id, endpoint, p256dh, auth, user_agent, updated_at
  ) values (
    v_user, p_endpoint, p_p256dh, p_auth, left(p_user_agent, 300), now()
  )
  on conflict (endpoint) do update set
    p256dh = excluded.p256dh,
    auth = excluded.auth,
    user_agent = excluded.user_agent,
    updated_at = now()
  where public.push_subscriptions.user_id = v_user;

  if not found then
    raise exception 'Bu cihaz aboneliği başka bir hesaba bağlı.' using errcode = '23505';
  end if;
end;
$$;

create or replace function public.remove_push_subscription(p_endpoint text)
returns void
language sql
security definer
set search_path = ''
as $$
  delete from public.push_subscriptions
   where endpoint = p_endpoint and user_id = auth.uid();
$$;

revoke all on function public.save_push_subscription(text, text, text, text) from public, anon;
revoke all on function public.remove_push_subscription(text) from public, anon;
grant execute on function public.save_push_subscription(text, text, text, text) to authenticated;
grant execute on function public.remove_push_subscription(text) to authenticated;

do $$
begin
  alter publication supabase_realtime add table public.account_notifications;
exception when duplicate_object then null;
end $$;

commit;
