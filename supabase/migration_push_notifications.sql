-- ============================================================
-- PWA PUSH ABONELİKLERİ — UYUMLULUK GÖÇÜ
--
-- Bu dosya yalnızca eski kurulumlarda push_subscriptions tablosunu hazırlar.
-- Öğretmen bildirimleri için bundan sonra sırasıyla
-- migration_live_lessons.sql, migration_teacher_notifications.sql ve
-- account_notifications INSERT Database Webhook'u kullanılır.
-- Ayrıntı: docs/ogretmen-bildirimleri.md
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

-- Eski pg_net tetikleyicileri mesaj metnini bildirim gövdesine kopyalıyor
-- ve bir soruyu tüm öğretmenlere yolluyordu. Yeni bildirim merkezi yalnızca
-- aktif bağlı öğretmeni hedeflediği için eski yol kapatılır.
drop trigger if exists on_new_message_notify on messages;
drop trigger if exists on_new_question_notify on questions;
drop function if exists notify_new_message();
drop function if exists notify_new_question();
