-- ============================================================
-- MESAJLAŞMA: OKUNMAMIŞ SAYACI, DÜZENLEME VE SİLME
--
-- Güvenlik ilkesi:
-- - Alıcı yalnızca read_at alanını güncelleyebilir.
-- - Gönderen yalnızca kendi mesajını, aşağıdaki sınırlı işlevlerle
--   düzenleyebilir veya silebilir.
-- - Gönderen/alıcı kimliği istemciden değiştirilemez.
-- ============================================================

alter table public.messages
  add column if not exists edited_at timestamptz;

-- Genel tablo güncelleme yetkisi kimlik ve içerik alanlarını da kapsardı.
-- Alıcıya yalnızca okundu zamanı alanını güncelleme yetkisi verilir.
revoke update on table public.messages from public, anon, authenticated;
grant update (read_at) on table public.messages to authenticated;

-- Doğrudan silme kapalıdır; sahiplik denetimli işlev kullanılır.
revoke delete on table public.messages from public, anon, authenticated;

create or replace function public.edit_own_message(
  p_message_id uuid,
  p_content text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  has_attachment boolean;
  cleaned_content text := nullif(btrim(coalesce(p_content, '')), '');
begin
  if auth.uid() is null then
    raise exception 'Oturum gerekli' using errcode = '42501';
  end if;

  select attachment_url is not null
    into has_attachment
    from public.messages
   where id = p_message_id
     and sender_id = auth.uid();

  if not found then
    raise exception 'Mesaj bulunamadı veya bu mesaj size ait değil'
      using errcode = '42501';
  end if;

  if cleaned_content is null and not has_attachment then
    raise exception 'Mesaj metni boş olamaz' using errcode = '22023';
  end if;

  if char_length(coalesce(p_content, '')) > 4000 then
    raise exception 'Mesaj 4000 karakterden uzun olamaz' using errcode = '22023';
  end if;

  update public.messages
     set content = cleaned_content,
         edited_at = now()
   where id = p_message_id
     and sender_id = auth.uid();
end;
$$;

revoke all on function public.edit_own_message(uuid, text) from public;
grant execute on function public.edit_own_message(uuid, text) to authenticated;

create or replace function public.delete_own_message(p_message_id uuid)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  deleted_attachment_path text;
begin
  if auth.uid() is null then
    raise exception 'Oturum gerekli' using errcode = '42501';
  end if;

  delete from public.messages
   where id = p_message_id
     and sender_id = auth.uid()
  returning attachment_url into deleted_attachment_path;

  if not found then
    raise exception 'Mesaj bulunamadı veya bu mesaj size ait değil'
      using errcode = '42501';
  end if;

  return deleted_attachment_path;
end;
$$;

revoke all on function public.delete_own_message(uuid) from public;
grant execute on function public.delete_own_message(uuid) to authenticated;

-- Mesaj silindikten sonra gönderen kendi klasöründeki eki de temizleyebilir.
drop policy if exists "Gönderen kendi mesaj ekini silebilir" on storage.objects;
create policy "Gönderen kendi mesaj ekini silebilir"
  on storage.objects for delete
  using (
    bucket_id = 'chat-attachments'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
