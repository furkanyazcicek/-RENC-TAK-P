-- ============================================================
-- DÜZELTME: DERS OLUŞTURULAMIYOR ("Bu işlem için yetkiniz yok")
-- ============================================================
-- Çalıştırma: Supabase > SQL Editor > yapıştır > Run
--
-- SORUN
-- `lesson_sessions` tablosundaki oda kimliği tetikleyicisi, dersi
-- oluşturan kullanıcının yetkisiyle çalışıyordu ve içeriden
-- `generate_room_id()` fonksiyonunu çağırıyordu. O fonksiyon ise BİLEREK
-- istemciye kapalıdır — oda kimliğini kimse kendi seçemesin diye. Sonuç:
-- her ders oluşturma denemesi
--     permission denied for function generate_room_id
-- ile reddediliyor, arayüzde "Bu işlem için yetkiniz yok" yazıyordu.
--
-- ÇÖZÜM
-- Tetikleyici artık tanımlayıcı (SECURITY DEFINER) yetkisiyle çalışıyor.
-- Güvenlik özelliği DEĞİŞMİYOR: oda kimliği hâlâ sunucuda üretiliyor,
-- istemcinin gönderdiği değer hâlâ yok sayılıyor.
--
-- Bu dosya güvenle birden fazla kez çalıştırılabilir.
-- ============================================================

create or replace function public.lesson_sessions_force_room_id()
returns trigger
language plpgsql
security definer
set search_path = public
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

-- Tetikleyici zaten kurulu; yine de eksikse diye güvenceye alıyoruz.
drop trigger if exists lesson_sessions_force_room_id_trg on lesson_sessions;
create trigger lesson_sessions_force_room_id_trg
  before insert or update on lesson_sessions
  for each row
  execute function public.lesson_sessions_force_room_id();

-- ============================================================
-- DOĞRULAMA (çalıştırdıktan sonra "true" görmelisiniz)
-- ============================================================
-- select prosecdef as tanimlayici_yetkisiyle_calisiyor
--   from pg_proc where proname = 'lesson_sessions_force_room_id';
