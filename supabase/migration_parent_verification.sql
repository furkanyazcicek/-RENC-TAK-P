-- ============================================================
-- VELİ DOĞRULAMA SİSTEMİ + VELİ PANELİ VERİ ERİŞİMİ
-- ============================================================
-- Çalıştırma:
--   node scripts/run-migration.mjs supabase/migration_parent_verification.sql
--
-- Bu göç iki ayrı sorunu birlikte çözer, çünkü ikisinin de kaynağı aynı:
-- veli–öğrenci ilişkisinin `profiles.student_id` kolonunda, velinin kendi
-- yazabildiği bir alanda tutulması.
--
-- 1) VELİ PANELİ BOŞ/YANLIŞ VERİ GÖSTERİYORDU
--    Hiçbir tabloda `parent` rolüne SELECT izni yoktu. Veli sorguları hata
--    vermiyor, boş dönüyordu (200 + []). Panel öğrencinin adını `profiles`
--    tablosundan (politikası `using (true)`) okuyabildiği için "doğru isim,
--    sıfır metrik" tablosu çıkıyordu. Aşağıda veliye, YALNIZCA onaylı
--    bağlantısı olan öğrenciler için okuma izni veriliyor.
--
-- 2) VELİ KAYIT EKRANINDA İSTEDİĞİ ÖĞRENCİYİ SEÇEBİLİYORDU
--    Bağlantı artık öğrencinin ürettiği tek kullanımlık kodla başlar ve
--    öğrencinin onayıyla aktifleşir. `parent_links` tablosuna istemci
--    tarafından INSERT/UPDATE İZNİ YOKTUR — tüm geçişler aşağıdaki
--    SECURITY DEFINER fonksiyonlarından geçer.
--
-- YETKİLENDİRME ARTIK `profiles.student_id`'YE BAKMAZ.
-- Kolon veri kaybı olmasın diye duruyor ama hiçbir politika onu okumuyor;
-- birisi o kolonu değiştirse bile tek satır veri açılmaz. Mevcut bağlar
-- aşağıda `parent_links`e 'active' olarak taşınıyor.
--
-- ⚠ ARDINDAN ŞUNU DA ÇALIŞTIRIN:
--     supabase/migration_parent_verification_cleanup.sql
--   Canlı veritabanında bu depodaki hiçbir dosyada bulunmayan, panelden
--   elle eklenmiş eski politikalar vardı. PostgreSQL permissive
--   politikaları VEYA'ladığı için, onlar düşürülmeden aşağıdaki
--   sıkılaştırmaların HİÇBİRİ etkili olmaz.
--
-- ⚠ DAVRANIŞ DEĞİŞİKLİĞİ: Yeni ÖĞRETMEN hesabı artık kayıt ekranından
--   açılamaz (rol yükseltme açığıydı — herkes kendini öğretmen yapıp tüm
--   öğrencileri okuyabiliyordu). Öğretmen eklemek için SQL Editor'den:
--     update profiles set role = 'teacher' where id = '<uuid>';
--   Mevcut öğretmen hesapları bu göçten etkilenmez.
-- ============================================================

begin;

-- ============================================================
-- 1) TABLOLAR
--    Yardımcı fonksiyonlardan ÖNCE gelirler: `language sql` fonksiyonlar
--    oluşturulurken gövdeleri doğrulanır, dolayısıyla `is_linked_parent_of`
--    yazılmadan önce `parent_links` var olmalıdır.
-- ============================================================

-- 1a) VELİ–ÖĞRENCİ BAĞLANTILARI
-- Bir veli birden çok öğrenciye, bir öğrenci birden çok veliye bağlanabilir.
-- `unique (student_id, parent_id)` aynı çiftin ikinci kez oluşmasını engeller.
create table if not exists parent_links (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  parent_id uuid not null references profiles(id) on delete cascade,
  -- pending  : veli kodu kullandı, öğrenci henüz cevaplamadı → VERİ YOK
  -- active   : öğrenci onayladı → veli okuyabilir
  -- rejected : öğrenci reddetti → VERİ YOK
  -- revoked  : daha önce onaylıydı, sonradan kaldırıldı → VERİ YOK
  status text not null default 'pending'
    check (status in ('pending', 'active', 'rejected', 'revoked')),
  requested_at timestamptz not null default now(),
  responded_at timestamptz,
  -- 'code'   : yeni doğrulama akışından geldi
  -- 'legacy' : bu göçten önce profiles.student_id ile kurulmuştu
  created_via text not null default 'code' check (created_via in ('code', 'legacy')),
  constraint parent_links_not_self check (student_id <> parent_id),
  constraint parent_links_unique_pair unique (student_id, parent_id)
);

create index if not exists parent_links_parent_idx
  on parent_links (parent_id, status);
create index if not exists parent_links_student_idx
  on parent_links (student_id, status);

comment on table parent_links is
  'Veli–öğrenci ilişkisinin TEK kaynağı. İstemci buraya yazamaz; yalnızca parent_*/student_* RPC fonksiyonlarıyla değişir.';


-- 1b) DAVET KODLARI
-- Kod düz metin tutulur ama RLS ile yalnızca kodu ÜRETEN öğrenci okuyabilir.
-- Gerekçe: öğrenci sayfayı kapatıp geri döndüğünde aktif kodunu yeniden
-- görebilmeli. Kodun tek başına hiçbir yetkisi yok — en fazla "bekleyen
-- istek" üretir, veriyi açan şey öğrencinin onayıdır.
create table if not exists parent_link_codes (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  code text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  used_at timestamptz,
  used_by uuid references profiles(id) on delete set null
);

-- Aynı kod aynı anda iki kez "kullanılabilir" durumda olamaz.
create unique index if not exists parent_link_codes_active_code_idx
  on parent_link_codes (code)
  where used_at is null;

create index if not exists parent_link_codes_student_idx
  on parent_link_codes (student_id, created_at desc);

comment on table parent_link_codes is
  'Öğrencinin ürettiği tek kullanımlık veli davet kodları. 24 saat geçerli; kullanıldığında used_at dolar.';


-- 1c) KOD DENEME KAYDI (kaba kuvvet sınırı)
-- İstemciye hiçbir politika verilmez — yalnızca RPC'ler yazar/okur.
create table if not exists parent_link_attempts (
  id bigserial primary key,
  parent_id uuid not null references profiles(id) on delete cascade,
  attempted_at timestamptz not null default now(),
  success boolean not null default false
);

create index if not exists parent_link_attempts_idx
  on parent_link_attempts (parent_id, attempted_at desc);


-- ============================================================
-- 2) YARDIMCI FONKSİYONLAR
--    SECURITY DEFINER — politikaların içinden çağrıldıklarında RLS'e
--    takılmasınlar ve `profiles` politikası kendi kendini çağırıp
--    sonsuz özyinelemeye girmesin diye.
-- ============================================================

create or replace function public.is_teacher()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'teacher'
  );
$$;

comment on function public.is_teacher() is
  'Oturumdaki kullanıcı öğretmen mi? RLS politikalarında özyinelemeyi önlemek için SECURITY DEFINER.';

-- Veli, verilen öğrenciye ONAYLI (active) bir bağla bağlı mı?
-- Veli panelinin okuduğu her tablonun politikası bu tek fonksiyona dayanır;
-- kural değişirse tek yerde değişir.
create or replace function public.is_linked_parent_of(p_student uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from parent_links
     where parent_links.student_id = p_student
       and parent_links.parent_id = auth.uid()
       and parent_links.status = 'active'
  );
$$;

comment on function public.is_linked_parent_of(uuid) is
  'Oturumdaki veli, bu öğrenciyle ONAYLANMIŞ bir bağlantıya sahip mi? Bekleyen/reddedilen/kaldırılan bağ false döner.';


-- ============================================================
-- 3) MEVCUT BAĞLARI KORU
--    profiles.student_id ile kurulmuş ilişkiler doğrulanmış sayılır ve
--    'active' olarak taşınır. Hiçbir veli erişimini kaybetmez.
-- ============================================================
insert into parent_links (student_id, parent_id, status, responded_at, created_via)
select p.student_id, p.id, 'active', now(), 'legacy'
  from profiles p
  join profiles s on s.id = p.student_id
 where p.role = 'parent'
   and p.student_id is not null
   and p.student_id <> p.id
   and s.role = 'student'
on conflict (student_id, parent_id) do nothing;


-- ============================================================
-- 4) RLS — YENİ TABLOLAR
-- ============================================================
alter table parent_links enable row level security;
alter table parent_link_codes enable row level security;
alter table parent_link_attempts enable row level security;

-- parent_links: yalnızca OKUMA. Yazma politikası bilerek yoktur —
-- veli kendi kendine 'active' satır ekleyememeli.
drop policy if exists "Bağlantıyı tarafları görebilir" on parent_links;
create policy "Bağlantıyı tarafları görebilir"
  on parent_links for select
  using (auth.uid() = student_id or auth.uid() = parent_id);

-- parent_link_codes: öğrenci yalnızca KENDİ kodlarını görür.
-- Veli bu tabloyu hiç okuyamaz (kod listesi sızmasın).
drop policy if exists "Öğrenci kendi kodlarını görebilir" on parent_link_codes;
create policy "Öğrenci kendi kodlarını görebilir"
  on parent_link_codes for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi kodunu silebilir" on parent_link_codes;
create policy "Öğrenci kendi kodunu silebilir"
  on parent_link_codes for delete
  using (auth.uid() = student_id);

-- parent_link_attempts: hiçbir istemci politikası yok (sadece RPC erişir).


-- ============================================================
-- 5) KOD ÜRETİMİ
--    Crockford Base32 alfabesi: I, L, O, U yok — okunurken karışan
--    harfler baştan elenmiş, çözerken de O→0, I/L→1 eşlenir.
--    8 karakter = 32^8 ≈ 1,1 trilyon olasılık.
--    Rastgelelik kaynağı gen_random_uuid() (kriptografik CSPRNG); md5
--    yalnızca bitleri karıştırmak için, gizlilik amacıyla değil.
--    256 sayısı 32'ye tam bölündüğü için mod alırken sapma oluşmaz.
-- ============================================================
create or replace function public.generate_link_code()
returns text
language plpgsql
volatile
as $$
declare
  alphabet constant text := '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  entropy text;
  out_code text := '';
  i int;
begin
  entropy := upper(md5(gen_random_uuid()::text || gen_random_uuid()::text));
  for i in 0..7 loop
    out_code := out_code || substr(
      alphabet,
      (('x' || substr(entropy, i * 2 + 1, 2))::bit(8)::int % 32) + 1,
      1
    );
  end loop;
  return out_code;
end;
$$;

-- Kullanıcının yazdığını kanonik biçime çevirir: tire/boşluk atılır,
-- büyük harfe çevrilir, karışan harfler rakama eşlenir.
create or replace function public.normalize_link_code(p_code text)
returns text
language sql
immutable
as $$
  select translate(
    regexp_replace(upper(coalesce(p_code, '')), '[^0-9A-Z]', '', 'g'),
    'OIL', '011'
  );
$$;


-- ============================================================
-- 6) ÖĞRENCİ TARAFI RPC'LERİ
-- ============================================================

-- 5a) Kod üret. Öğrencinin aynı anda tek bir aktif kodu olur; yeni kod
--     üretmek eskisini geçersizleştirir (öğrenci "yanlış kişiye verdim"
--     dediğinde yeni kod almak iptal etmenin yerine geçer).
-- OUT sütunları `link_code`/`code_expires_at` adında: `code` ve `expires_at`
-- deseydik plpgsql bunları `parent_link_codes` kolonlarıyla karıştırabilirdi.
create or replace function public.student_generate_parent_code()
returns table (link_code text, code_expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student uuid := auth.uid();
  v_code text;
  v_expires timestamptz := now() + interval '24 hours';
  v_try int := 0;
begin
  if v_student is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  if not exists (select 1 from profiles where id = v_student and role = 'student') then
    raise exception 'Veli daveti yalnızca öğrenci hesabından oluşturulabilir.' using errcode = '42501';
  end if;

  -- Önceki kullanılmamış kodları düşür — tek aktif kod kuralı.
  delete from parent_link_codes
   where student_id = v_student and used_at is null;

  loop
    v_try := v_try + 1;
    v_code := generate_link_code();
    begin
      insert into parent_link_codes (student_id, code, expires_at)
      values (v_student, v_code, v_expires);
      exit;
    exception when unique_violation then
      if v_try >= 5 then
        raise exception 'Kod üretilemedi, lütfen tekrar deneyin.';
      end if;
    end;
  end loop;

  return query select v_code, v_expires;
end;
$$;

-- 5b) Öğrencinin veli bağlantıları: bekleyen istekler + onaylı veliler.
--     E-posta bilerek dönülüyor — öğrenci "bu gerçekten annem mi?"
--     sorusunu ada bakarak yanıtlayamaz.
create or replace function public.student_parent_links()
returns table (
  link_id uuid,
  parent_id uuid,
  parent_name text,
  parent_email text,
  status text,
  requested_at timestamptz,
  responded_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select l.id,
         l.parent_id,
         p.full_name,
         u.email::text,
         l.status,
         l.requested_at,
         l.responded_at
    from parent_links l
    join profiles p on p.id = l.parent_id
    left join auth.users u on u.id = l.parent_id
   where l.student_id = auth.uid()
     and l.status in ('pending', 'active')
   order by (l.status = 'pending') desc, l.requested_at desc;
$$;

-- 5c) Bekleyen isteği onayla / reddet.
create or replace function public.student_respond_parent_link(
  p_link_id uuid,
  p_approve boolean
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_status text;
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  v_status := case when p_approve then 'active' else 'rejected' end;

  update parent_links
     set status = v_status,
         responded_at = now()
   where id = p_link_id
     and student_id = auth.uid()     -- sahiplik kontrolü politikada değil, burada
     and status = 'pending';

  if not found then
    raise exception 'Bekleyen bağlantı isteği bulunamadı.' using errcode = 'P0002';
  end if;

  return v_status;
end;
$$;

-- 5d) Onaylı bağlantıyı kaldır. Hem öğrenci hem veli çağırabilir:
--     veli de kendi bağını bırakabilmeli.
create or replace function public.revoke_parent_link(p_link_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;

  update parent_links
     set status = 'revoked',
         responded_at = now()
   where id = p_link_id
     and (student_id = auth.uid() or parent_id = auth.uid())
     and status in ('active', 'pending');

  if not found then
    raise exception 'Bağlantı bulunamadı.' using errcode = 'P0002';
  end if;
end;
$$;


-- ============================================================
-- 7) VELİ TARAFI RPC'LERİ
-- ============================================================

-- NEDEN `ok/message` DÖNÜYOR DA `raise` ETMİYOR:
-- Hatalı denemeyi `parent_link_attempts`e yazıp ardından exception atsaydık,
-- exception aynı işlemi geri alır ve hız sınırı sayacı HİÇ artmazdı — sınır
-- süs olurdu. Bu yüzden kullanıcıya dönük her sonuç normal bir satır olarak
-- döner; `raise` yalnızca oturum/rol gibi sayılmayacak durumlarda kullanılır.

-- Son 15 dakikadaki başarısız deneme sayısı 10'u geçtiyse false döner.
-- 32^8 (≈1,1 trilyon) olasılık + bu sınır = kaba kuvvet pratikte imkânsız.
create or replace function public.code_attempt_allowed(p_parent uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select count(*) < 10
    from parent_link_attempts
   where parent_id = p_parent
     and success = false
     and attempted_at > now() - interval '15 minutes';
$$;

-- 6a) Kodu ÖN İZLE — bağlantı isteği OLUŞTURMAZ, sadece öğrencinin adını
--     döndürür ki veli "doğru kişiye mi bağlanıyorum" diye görebilsin.
create or replace function public.parent_preview_code(p_code text)
returns table (ok boolean, message text, student_name text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_parent uuid := auth.uid();
  v_code text := normalize_link_code(p_code);
  v_student uuid;
  v_name text;
begin
  if v_parent is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if not exists (select 1 from profiles where id = v_parent and role = 'parent') then
    raise exception 'Bu işlem yalnızca veli hesabıyla yapılabilir.' using errcode = '42501';
  end if;

  if not code_attempt_allowed(v_parent) then
    return query select false,
      'Çok fazla hatalı deneme yaptınız. Lütfen 15 dakika sonra tekrar deneyin.'::text,
      null::text;
    return;
  end if;

  select c.student_id into v_student
    from parent_link_codes c
   where c.code = v_code
     and c.used_at is null
     and c.expires_at > now();

  if v_student is null then
    insert into parent_link_attempts (parent_id, success) values (v_parent, false);
    return query select false, 'Kod geçersiz veya süresi dolmuş.'::text, null::text;
    return;
  end if;

  if v_student = v_parent then
    return query select false, 'Kendi kendinize bağlanamazsınız.'::text, null::text;
    return;
  end if;

  -- Ön izleme sayacı sıfırlamaz; sayaç yalnızca kod gerçekten kullanılınca temizlenir.
  select full_name into v_name from profiles where id = v_student;
  return query select true, null::text, v_name;
end;
$$;

-- 6b) Kodu KULLAN — kodu tüketir ve 'pending' bağlantı isteği açar.
--     Bu adım veriye erişim VERMEZ; erişimi açan şey öğrencinin onayıdır.
create or replace function public.parent_redeem_code(p_code text)
returns table (ok boolean, message text, link_id uuid, student_name text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_parent uuid := auth.uid();
  v_code text := normalize_link_code(p_code);
  v_code_id uuid;
  v_student uuid;
  v_name text;
  v_existing parent_links%rowtype;
  v_link_id uuid;
begin
  if v_parent is null then
    raise exception 'Oturum bulunamadı.' using errcode = '28000';
  end if;
  if not exists (select 1 from profiles where id = v_parent and role = 'parent') then
    raise exception 'Bu işlem yalnızca veli hesabıyla yapılabilir.' using errcode = '42501';
  end if;

  if not code_attempt_allowed(v_parent) then
    return query select false,
      'Çok fazla hatalı deneme yaptınız. Lütfen 15 dakika sonra tekrar deneyin.'::text,
      null::uuid, null::text;
    return;
  end if;

  -- Kodu kilitle: iki veli aynı kodu aynı anda kullanamasın.
  select c.id, c.student_id into v_code_id, v_student
    from parent_link_codes c
   where c.code = v_code
     and c.used_at is null
     and c.expires_at > now()
     for update;

  if v_code_id is null then
    insert into parent_link_attempts (parent_id, success) values (v_parent, false);
    return query select false, 'Kod geçersiz veya süresi dolmuş.'::text, null::uuid, null::text;
    return;
  end if;

  if v_student = v_parent then
    return query select false, 'Kendi kendinize bağlanamazsınız.'::text, null::uuid, null::text;
    return;
  end if;

  select full_name into v_name from profiles where id = v_student;

  select * into v_existing
    from parent_links
   where parent_links.student_id = v_student and parent_links.parent_id = v_parent;

  if found then
    if v_existing.status = 'active' then
      return query select false,
        'Bu öğrenciyle bağlantınız zaten onaylı.'::text, v_existing.id, v_name;
      return;
    elsif v_existing.status = 'pending' then
      return query select false,
        'Bu öğrenci için zaten onay bekleyen bir isteğiniz var.'::text, v_existing.id, v_name;
      return;
    else
      -- reddedilmiş/kaldırılmış bağ: öğrenci YENİ kod verdiğine göre
      -- yeniden davet etmiş demektir; istek tekrar onaya düşer.
      update parent_links
         set status = 'pending',
             requested_at = now(),
             responded_at = null,
             created_via = 'code'
       where id = v_existing.id
      returning id into v_link_id;
    end if;
  else
    insert into parent_links (student_id, parent_id, status, created_via)
    values (v_student, v_parent, 'pending', 'code')
    returning id into v_link_id;
  end if;

  update parent_link_codes
     set used_at = now(), used_by = v_parent
   where id = v_code_id;

  -- Kod doğru bilindiğine göre kaba kuvvet değil: sayacı temizle.
  delete from parent_link_attempts
   where parent_id = v_parent and success = false;

  return query select true, null::text, v_link_id, v_name;
end;
$$;

-- 6c) Velinin bağlantı listesi — panelin öğrenci seçicisi bunu kullanır.
--     Adı yalnızca 'active' ve 'pending' bağlar için döndürür; reddedilen
--     bir bağ velinin ekranından tamamen kaybolur.
create or replace function public.parent_linked_students()
returns table (
  link_id uuid,
  student_id uuid,
  student_name text,
  status text,
  requested_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.student_id, p.full_name, l.status, l.requested_at
    from parent_links l
    join profiles p on p.id = l.student_id
   where l.parent_id = auth.uid()
     and l.status in ('active', 'pending')
   order by (l.status = 'active') desc, p.full_name;
$$;


-- ============================================================
-- 8) YETKİLER
--    Fonksiyonların tamamı SECURITY DEFINER; anonim erişime kapalı.
-- ============================================================
revoke all on function public.student_generate_parent_code() from public, anon;
revoke all on function public.student_parent_links() from public, anon;
revoke all on function public.student_respond_parent_link(uuid, boolean) from public, anon;
revoke all on function public.revoke_parent_link(uuid) from public, anon;
revoke all on function public.parent_preview_code(text) from public, anon;
revoke all on function public.parent_redeem_code(text) from public, anon;
revoke all on function public.parent_linked_students() from public, anon;
revoke all on function public.code_attempt_allowed(uuid) from public, anon, authenticated;

grant execute on function public.student_generate_parent_code() to authenticated;
grant execute on function public.student_parent_links() to authenticated;
grant execute on function public.student_respond_parent_link(uuid, boolean) to authenticated;
grant execute on function public.revoke_parent_link(uuid) to authenticated;
grant execute on function public.parent_preview_code(text) to authenticated;
grant execute on function public.parent_redeem_code(text) to authenticated;
grant execute on function public.parent_linked_students() to authenticated;


-- ============================================================
-- 9) VELİYE VERİ OKUMA İZNİ
--    Her politika `is_linked_parent_of(student_id)` üzerinden geçer:
--    yalnızca ONAYLI bağ okur. Bekleyen/reddedilen bağda tek satır gelmez.
--
--    KASTEN DIŞARIDA BIRAKILANLAR: `questions` (öğretmenle yazışma),
--    `messages` (özel mesajlaşma) ve `ai_*` tabloları (AI Koç sohbeti).
--    Veli akademik performansı görür, öğrencinin özel yazışmalarını değil.
-- ============================================================

drop policy if exists "Veli onaylı öğrencisinin kayıtlarını görebilir" on daily_logs;
create policy "Veli onaylı öğrencisinin kayıtlarını görebilir"
  on daily_logs for select
  using (public.is_linked_parent_of(student_id));

drop policy if exists "Veli onaylı öğrencisinin denemelerini görebilir" on mock_exams;
create policy "Veli onaylı öğrencisinin denemelerini görebilir"
  on mock_exams for select
  using (public.is_linked_parent_of(student_id));

drop policy if exists "Veli onaylı öğrencisinin ders netlerini görebilir" on mock_exam_subjects;
create policy "Veli onaylı öğrencisinin ders netlerini görebilir"
  on mock_exam_subjects for select
  using (
    exists (
      select 1 from mock_exams
       where mock_exams.id = mock_exam_subjects.mock_exam_id
         and public.is_linked_parent_of(mock_exams.student_id)
    )
  );

drop policy if exists "Veli onaylı öğrencisinin ödevlerini görebilir" on homeworks;
create policy "Veli onaylı öğrencisinin ödevlerini görebilir"
  on homeworks for select
  using (public.is_linked_parent_of(student_id));

drop policy if exists "Veli onaylı öğrencisinin branş denemelerini görebilir" on exams;
create policy "Veli onaylı öğrencisinin branş denemelerini görebilir"
  on exams for select
  using (public.is_linked_parent_of(student_id));


-- ============================================================
-- 10) PROFİL POLİTİKALARINI SIKILAŞTIR
-- ============================================================

-- 9a) SELECT — eskiden `using (true)` idi: publishable anahtara sahip
--     HERKES (giriş yapmamış ziyaretçiler dahil) tüm öğrenci adlarını ve
--     id'lerini listeleyebiliyordu. Bu, veli kayıt ekranındaki öğrenci
--     açılır listesi yüzünden böyleydi; o liste kaldırıldığı için artık
--     gerek yok.
--
--     Kimin neyi göreceği:
--       • herkes kendi profilini
--       • öğretmen tüm profilleri
--       • giriş yapmış herkes ÖĞRETMEN profillerini (Mesajlar sekmesi
--         öğretmen listesini çekiyor)
--       • veli, ONAYLI öğrencisinin profilini
drop policy if exists "Herkes tüm profilleri görebilir" on profiles;
drop policy if exists "Profil görünürlüğü" on profiles;
create policy "Profil görünürlüğü"
  on profiles for select
  using (
    auth.uid() is not null
    and (
      auth.uid() = id
      or public.is_teacher()
      or role = 'teacher'
      or public.is_linked_parent_of(id)
    )
  );

-- 9b) INSERT — kendi profilini oluşturabilir ama kendini ÖĞRETMEN
--     yapamaz. Eskiden `with check (auth.uid() = id)` idi ve rolü
--     serbestti: herkes kendini 'teacher' yazıp bütün öğrencilerin
--     verisini okuyabiliyordu.
drop policy if exists "Kullanıcı kendi profilini oluşturabilir" on profiles;
create policy "Kullanıcı kendi profilini oluşturabilir"
  on profiles for insert
  with check (auth.uid() = id and role in ('student', 'parent'));

-- 9c) UPDATE — satır sahipliği yetmez, `with check` de gerekiyordu.
--     `role` ve `student_id` ayrıca aşağıdaki tetikleyiciyle dondurulur.
drop policy if exists "Kullanıcı kendi profilini güncelleyebilir" on profiles;
create policy "Kullanıcı kendi profilini güncelleyebilir"
  on profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 9d) `role` ve `student_id` istemciden DEĞİŞTİRİLEMEZ.
--     RLS kolon bazında kısıtlayamadığı için tetikleyiciyle yapılıyor:
--     eski değerler sessizce geri yazılır. auth.uid() null olduğunda
--     (SQL Editor / service_role) dokunulmaz — yönetici işleri sürsün.
create or replace function public.profiles_freeze_privileged_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return new;
  end if;
  new.role := old.role;
  new.student_id := old.student_id;
  return new;
end;
$$;

drop trigger if exists profiles_freeze_privileged_columns_trg on profiles;
create trigger profiles_freeze_privileged_columns_trg
  before update on profiles
  for each row
  execute function public.profiles_freeze_privileged_columns();

comment on column profiles.student_id is
  'KULLANIM DIŞI — veli bağı artık parent_links tablosunda. Geriye dönük veri için duruyor, hiçbir RLS politikası bu kolonu okumaz.';

commit;


-- ============================================================
-- DOĞRULAMA (göçten sonra çalıştırıp gözle kontrol edin)
-- ============================================================
-- select status, count(*) from parent_links group by status;
--
-- select tablename, policyname
--   from pg_policies
--  where schemaname = 'public'
--    and (policyname ilike '%veli%' or tablename like 'parent%')
--  order by tablename, policyname;
