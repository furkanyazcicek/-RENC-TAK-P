-- ============================================================
-- MESAJLAŞMA: MEDYA/DOSYA EKİ DESTEĞİ
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- `created_at` zaten tabloda var (tarih/saat gösterimi için ek bir
-- kolon gerekmiyor, sadece arayüzde biçimlendireceğiz).
-- ============================================================

-- content artık tek başına zorunlu değil (sadece dosya da gönderilebilmeli)
alter table messages alter column content drop not null;

alter table messages add column if not exists attachment_url text;
alter table messages add column if not exists attachment_name text;
alter table messages add column if not exists attachment_type text
  check (attachment_type in ('image', 'pdf', 'file') or attachment_type is null);

-- ============================================================
-- STORAGE: mesaj ekleri (özel/private bucket — herkese açık DEĞİL)
-- Bu, "question-images" ve "library-files" bucket'larından farklı
-- olarak PRIVATE tutulur çünkü DM içerikleri özeldir. Dosya yolu
-- şu şekilde olacak: {gönderen_id}/{alıcı_id}/{timestamp}-dosyaadı
-- Böylece storage politikası, yalnızca o konuşmanın iki tarafından
-- birinin dosyayı görebilmesini garanti eder.
-- ============================================================
insert into storage.buckets (id, name, public)
values ('chat-attachments', 'chat-attachments', false)
on conflict (id) do nothing;

drop policy if exists "Konuşmanın tarafı dosyayı görebilir" on storage.objects;
create policy "Konuşmanın tarafı dosyayı görebilir"
  on storage.objects for select
  using (
    bucket_id = 'chat-attachments'
    and (
      auth.uid()::text = (storage.foldername(name))[1]
      or auth.uid()::text = (storage.foldername(name))[2]
    )
  );

drop policy if exists "Gönderen kendi adına dosya yükleyebilir" on storage.objects;
create policy "Gönderen kendi adına dosya yükleyebilir"
  on storage.objects for insert
  with check (
    bucket_id = 'chat-attachments'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
