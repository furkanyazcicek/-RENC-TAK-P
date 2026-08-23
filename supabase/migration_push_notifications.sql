-- ============================================================
-- PWA PUSH NOTIFICATIONS — Veritabanı Tarafı
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- Önce bu SQL'i çalıştırın, SONRA Edge Function'ı deploy edin
-- (talimatlar supabase/functions/send-push/README.md'de).
-- ============================================================

-- 1) Her cihazın push aboneliğini saklayan tablo
create table if not exists push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);

alter table push_subscriptions enable row level security;

drop policy if exists "Kullanıcı kendi aboneliğini ekleyebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini ekleyebilir"
  on push_subscriptions for insert
  with check (auth.uid() = user_id);

drop policy if exists "Kullanıcı kendi aboneliğini görebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini görebilir"
  on push_subscriptions for select
  using (auth.uid() = user_id);

drop policy if exists "Kullanıcı kendi aboneliğini silebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini silebilir"
  on push_subscriptions for delete
  using (auth.uid() = user_id);

-- ============================================================
-- 2) pg_net ile veritabanından doğrudan Edge Function tetikleme
--    (Dashboard > Database > Webhooks kullanmak isterseniz bu adımı
--    atlayıp aynısını arayüzden de kurabilirsiniz — ikisi aynı işi yapar.)
-- ============================================================
create extension if not exists pg_net;

-- AŞAĞIDAKİ İKİ YERİ KENDİ DEĞERLERİNİZLE DEĞİŞTİRİN:
--   <PROJECT_REF>      → Supabase proje referansınız (Project Settings > General)
--   <WEBHOOK_SECRET>   → kendi belirleyeceğiniz gizli bir metin (Edge Function'da da aynısını kullanacaksınız)

create or replace function notify_new_message() returns trigger as $$
begin
  perform net.http_post(
    url := 'https://<PROJECT_REF>.functions.supabase.co/send-push',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', '<WEBHOOK_SECRET>'
    ),
    body := jsonb_build_object(
      'user_id', new.receiver_id,
      'title', 'Yeni Mesaj',
      'body', coalesce(new.content, '📎 Bir dosya gönderildi'),
      'url', '/mesajlar'
    )
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_new_message_notify on messages;
create trigger on_new_message_notify
  after insert on messages
  for each row execute function notify_new_message();

-- Yeni "sorunlu soru" geldiğinde TÜM öğretmenlere bildirim gönderir
create or replace function notify_new_question() returns trigger as $$
declare
  teacher record;
  student_name text;
  preview text;
begin
  select full_name into student_name from profiles where id = new.student_id;

  -- Sorular tablosunda `title` yok, metin alanı `content` — önizleme için kısaltıyoruz
  preview := coalesce(new.content, '📎 Fotoğraflı bir soru');
  if length(preview) > 80 then
    preview := substring(preview from 1 for 80) || '...';
  end if;

  for teacher in select id from profiles where role = 'teacher' loop
    perform net.http_post(
      url := 'https://<PROJECT_REF>.functions.supabase.co/send-push',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'x-webhook-secret', '<WEBHOOK_SECRET>'
      ),
      body := jsonb_build_object(
        'user_id', teacher.id,
        'title', 'Yeni Sorunlu Soru',
        'body', coalesce(student_name, 'Bir öğrenci') || ': ' || preview,
        'url', '/sorular'
      )
    );
  end loop;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_new_question_notify on questions;
create trigger on_new_question_notify
  after insert on questions
  for each row execute function notify_new_question();
