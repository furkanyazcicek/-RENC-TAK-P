/**
 * VELİ DOĞRULAMA GÖÇÜNÜN RLS TESTİ
 *
 *   node scripts/test-parent-rls.mjs
 *
 * Göçü ÜRETİM veritabanına dokunmadan, bellekte çalışan gerçek bir
 * PostgreSQL'de (PGlite/WASM) baştan sona çalıştırır ve şunları kanıtlar:
 *   • mevcut veli bağları kaybolmuyor
 *   • onaylanmamış veli TEK SATIR veri göremiyor
 *   • veli kendini bir öğrenciye bağlayamıyor (INSERT/UPDATE kapalı)
 *   • kullanıcı kendi rolünü 'teacher' yapamıyor
 *   • öğretmen ve öğrenci erişimi bozulmuyor
 *
 * Supabase'e özgü parçalar (auth.uid(), auth.users, anon/authenticated
 * rolleri) burada taklit edilir; geri kalan her şey gerçek şemadır.
 * RLS'in uygulanabilmesi için sorgular süper kullanıcı yerine
 * `authenticated` rolüyle koşar.
 */
import { PGlite } from '@electric-sql/pglite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

// Windows'ta `new URL(...).pathname` "/C:/..." döndürür ve fs bunu açamaz;
// fileURLToPath doğru platform yolunu verir.
const REPO = fileURLToPath(new URL('..', import.meta.url))
const db = new PGlite()

let pass = 0
let fail = 0
function check(name, cond, extra = '') {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.log(`  ✗ ${name} ${extra}`)
  }
}

/**
 * Oturumdaki kullanıcıyı taklit et (auth.uid() bu GUC'u okur).
 * NOT: `set local` / `set_config(..., true)` işlem dışında hemen sıfırlanır;
 * PGlite her ifadeyi otomatik commit ettiği için OTURUM düzeyi kullanılmalı.
 */
async function as(uid) {
  await db.exec(`reset role;`)
  await db.query(`select set_config('app.uid', $1, false)`, [uid ?? ''])
  await db.exec(`set role authenticated;`)
}
async function asAdmin() {
  await db.exec(`reset role;`)
  await db.query(`select set_config('app.uid', '', false)`)
}

console.log('\n=== 1) ŞEMA HAZIRLIĞI (Supabase taklidi) ===')

await db.exec(`
  create schema if not exists auth;

  -- Supabase'in auth.uid()'i yerine GUC okuyan eşdeğeri
  create or replace function auth.uid() returns uuid
  language sql stable as $fn$
    select nullif(current_setting('app.uid', true), '')::uuid;
  $fn$;

  create table auth.users (
    id uuid primary key,
    email text
  );

  -- Supabase'de hazır gelen roller (RLS'in gerçekten uygulanması için
  -- süper kullanıcı olmayan roller şart)
  create role anon nologin;
  create role authenticated nologin;
  grant usage on schema public, auth to anon, authenticated;
`)

// Uygulamanın gerçek tabloları (setup_new_project.sql'in ilgili kısmı)
await db.exec(`
  create table profiles (
    id uuid references auth.users on delete cascade primary key,
    full_name text not null,
    role text not null check (role in ('teacher','student','parent')),
    student_id uuid references profiles(id) on delete set null,
    created_at timestamptz default now()
  );
  create table daily_logs (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    study_date date not null default current_date,
    topic text not null,
    duration_minutes int not null default 0,
    correct int not null default 0,
    incorrect int not null default 0,
    empty int not null default 0,
    notes text,
    created_at timestamptz default now()
  );
  create table exams (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    subject text, topic text not null,
    exam_date date not null default current_date,
    correct int, incorrect int, empty int
  );
  create table homeworks (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    title text not null, description text, due_date date,
    status text not null default 'Yapılıyor'
  );
  create table mock_exams (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    exam_type text not null, exam_name text,
    exam_date date not null default current_date
  );
  create table mock_exam_subjects (
    id uuid primary key default gen_random_uuid(),
    mock_exam_id uuid references mock_exams(id) on delete cascade not null,
    subject text not null,
    correct integer not null default 0,
    incorrect integer not null default 0,
    empty integer not null default 0,
    net numeric generated always as (correct - incorrect * 0.25) stored
  );

  alter table profiles enable row level security;
  alter table daily_logs enable row level security;
  alter table exams enable row level security;
  alter table homeworks enable row level security;
  alter table mock_exams enable row level security;
  alter table mock_exam_subjects enable row level security;

  -- Göçten ÖNCEKİ hâliyle mevcut politikalar
  create policy "Herkes tüm profilleri görebilir" on profiles for select using (true);
  create policy "Kullanıcı kendi profilini oluşturabilir" on profiles for insert with check (auth.uid() = id);
  create policy "Kullanıcı kendi profilini güncelleyebilir" on profiles for update using (auth.uid() = id);

  create policy "Kendi kayıtlarını veya öğretmen tümünü görebilir" on daily_logs for select using (
    auth.uid() = student_id or exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));
  create policy "Öğrenci kendi sonuçlarını görebilir" on exams for select using (
    auth.uid() = student_id or exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));
  create policy "Kendi ödevini veya öğretmen tümünü görebilir" on homeworks for select using (
    auth.uid() = student_id or exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));
  create policy "Kendi denemesini veya öğretmen tümünü görebilir" on mock_exams for select using (
    auth.uid() = student_id or exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));
  create policy "Deneme sahibinin ders sonuçlarını görme yetkisi" on mock_exam_subjects for select using (
    exists (select 1 from mock_exams where mock_exams.id = mock_exam_subjects.mock_exam_id
            and (mock_exams.student_id = auth.uid()
                 or exists (select 1 from profiles where id = auth.uid() and role='teacher'))));
`)
console.log('  ✓ taban şema kuruldu')

// ---- Göç ÖNCESİ veri: eski usul veli bağı ----
const S1 = '11111111-1111-1111-1111-111111111111' // öğrenci Emin
const S2 = '22222222-2222-2222-2222-222222222222' // öğrenci Ayşe (ilgisiz)
const P1 = '33333333-3333-3333-3333-333333333333' // eski veli (migre edilecek)
const P2 = '44444444-4444-4444-4444-444444444444' // yeni veli (kod ile bağlanacak)
const T1 = '55555555-5555-5555-5555-555555555555' // öğretmen

await db.exec(`
  insert into auth.users (id, email) values
    ('${S1}','emin@x.com'), ('${S2}','ayse@x.com'),
    ('${P1}','eskiveli@x.com'), ('${P2}','yeniveli@x.com'), ('${T1}','ogretmen@x.com');
  insert into profiles (id, full_name, role, student_id) values
    ('${S1}','Emin Efe Yazçiçek','student',null),
    ('${S2}','Ayşe Demir','student',null),
    ('${P1}','Şeyma Nur Yazçiçek','parent','${S1}'),
    ('${P2}','Yeni Veli','parent',null),
    ('${T1}','Furkan Hoca','teacher',null);

  insert into daily_logs (student_id, study_date, topic, duration_minutes, correct, incorrect, empty) values
    ('${S1}', current_date, 'Matematik - Türev', 90, 30, 8, 2),
    ('${S1}', current_date - 1, 'Fizik - Optik', 60, 20, 5, 5),
    ('${S2}', current_date, 'Kimya - Mol', 45, 10, 10, 0);
  insert into homeworks (student_id, title) values ('${S1}','Türev testi'), ('${S2}','Mol testi');
  insert into exams (student_id, subject, topic, correct, incorrect, empty)
    values ('${S1}','Matematik','Türev',15,3,2);
`)
const me1 = (await db.query(`insert into mock_exams (student_id, exam_type, exam_name) values ('${S1}','TYT','Deneme 1') returning id`)).rows[0].id
const me2 = (await db.query(`insert into mock_exams (student_id, exam_type, exam_name) values ('${S2}','TYT','Deneme 1') returning id`)).rows[0].id
await db.query(`insert into mock_exam_subjects (mock_exam_id, subject, correct, incorrect, empty) values ($1,'Matematik',30,8,2)`, [me1])
await db.query(`insert into mock_exam_subjects (mock_exam_id, subject, correct, incorrect, empty) values ($1,'Türkçe',25,5,10)`, [me2])
console.log('  ✓ göç öncesi veri yazıldı (eski usul veli bağı dahil)')

console.log('\n=== 2) GÖÇ ÇALIŞTIRILIYOR ===')
const sql = readFileSync(join(REPO, 'supabase', 'migration_parent_verification.sql'), 'utf8')
try {
  await db.exec(sql)
  console.log('  ✓ migration_parent_verification.sql hatasız çalıştı')
  pass++
} catch (e) {
  console.log('  ✗ GÖÇ HATASI:', e.message)
  fail++
  process.exit(1)
}

// authenticated rolüne tablo hakları (Supabase'de authenticated rolünde hazır gelir)
await db.exec(`
  grant select, insert, update, delete on all tables in schema public to authenticated;
  grant select on auth.users to authenticated;
  grant execute on all functions in schema public to authenticated;
  grant execute on function auth.uid() to authenticated;
  alter table profiles force row level security;
  alter table daily_logs force row level security;
  alter table exams force row level security;
  alter table homeworks force row level security;
  alter table mock_exams force row level security;
  alter table mock_exam_subjects force row level security;
  alter table parent_links force row level security;
  alter table parent_link_codes force row level security;
`)

console.log('\n=== 3) MEVCUT BAĞ KORUNDU MU ===')
{
  const r = await db.query(`select status, created_via from parent_links where parent_id=$1 and student_id=$2`, [P1, S1])
  check('eski veli bağı active olarak taşındı', r.rows[0]?.status === 'active' && r.rows[0]?.created_via === 'legacy', JSON.stringify(r.rows))
  const all = await db.query(`select count(*)::int n from parent_links`)
  check('yalnızca 1 bağ oluştu (yanlış eşleşme yok)', all.rows[0].n === 1, `n=${all.rows[0].n}`)
}

console.log('\n=== 4) MİGRE EDİLEN VELİ VERİYİ GÖREBİLİYOR MU ===')
await as(P1)
{
  const logs = await db.query(`select * from daily_logs`)
  check('kendi öğrencisinin çalışma kayıtlarını görüyor (2 satır)', logs.rows.length === 2, `n=${logs.rows.length}`)
  check('başka öğrencinin kaydı sızmıyor', logs.rows.every(r => r.student_id === S1))

  const mes = await db.query(`select * from mock_exam_subjects`)
  check('yalnızca kendi öğrencisinin ders netleri', mes.rows.length === 1 && mes.rows[0].subject === 'Matematik',
    JSON.stringify(mes.rows.map(r => r.subject)))

  const hw = await db.query(`select * from homeworks`)
  check('yalnızca kendi öğrencisinin ödevleri', hw.rows.length === 1, `n=${hw.rows.length}`)

  const ex = await db.query(`select * from exams`)
  check('branş denemeleri de görünüyor', ex.rows.length === 1, `n=${ex.rows.length}`)

  const prof = await db.query(`select id, full_name from profiles order by full_name`)
  const names = prof.rows.map(r => r.full_name)
  check('profillerde ilgisiz öğrenci (Ayşe) GÖRÜNMÜYOR', !names.includes('Ayşe Demir'), JSON.stringify(names))
  check('kendi öğrencisinin profili görünüyor', names.includes('Emin Efe Yazçiçek'), JSON.stringify(names))
}

console.log('\n=== 5) BAĞLANTISIZ VELİ HİÇBİR ŞEY GÖREMİYOR ===')
await as(P2)
{
  const logs = await db.query(`select * from daily_logs`)
  check('çalışma kaydı görmüyor', logs.rows.length === 0, `n=${logs.rows.length}`)
  const mes = await db.query(`select * from mock_exam_subjects`)
  check('deneme netlerini görmüyor', mes.rows.length === 0, `n=${mes.rows.length}`)
  const hw = await db.query(`select * from homeworks`)
  check('ödev görmüyor', hw.rows.length === 0, `n=${hw.rows.length}`)
  const prof = await db.query(`select full_name from profiles`)
  check('öğrenci adlarını listeleyemiyor', !prof.rows.map(r => r.full_name).some(n => n.includes('Emin') || n.includes('Ayşe')),
    JSON.stringify(prof.rows.map(r => r.full_name)))
}

console.log('\n=== 6) ANONİM ERİŞİM KAPANDI MI ===')
await as(null)
{
  const prof = await db.query(`select full_name from profiles`)
  check('giriş yapmamış ziyaretçi profil listeleyemiyor', prof.rows.length === 0, `n=${prof.rows.length}`)
}

console.log('\n=== 7) ROL YÜKSELTME ENGELLENDİ Mİ ===')
await as(P2)
{
  await db.query(`update profiles set role='teacher' where id=$1`, [P2])
  await asAdmin()
  const r = await db.query(`select role from profiles where id=$1`, [P2])
  check('veli kendini öğretmen yapamıyor', r.rows[0].role === 'parent', `role=${r.rows[0].role}`)
}
await as(P2)
{
  await db.query(`update profiles set student_id=$1 where id=$2`, [S2, P2])
  await asAdmin()
  const r = await db.query(`select student_id from profiles where id=$1`, [P2])
  check('veli student_id kolonunu değiştiremiyor', r.rows[0].student_id === null, `student_id=${r.rows[0].student_id}`)
}

console.log('\n=== 8) VELİ KENDİNE BAĞ EKLEYEMİYOR ===')
await as(P2)
{
  let blocked = false
  try {
    await db.query(`insert into parent_links (student_id, parent_id, status) values ($1,$2,'active')`, [S2, P2])
  } catch (e) { blocked = true }
  check('parent_links tablosuna doğrudan INSERT reddedildi', blocked)

  let blocked2 = false
  try {
    await db.query(`update parent_links set status='active' where parent_id=$1`, [P2])
    const r = await db.query(`select count(*)::int n from parent_links where parent_id=$1 and status='active'`, [P2])
    blocked2 = r.rows[0].n === 0
  } catch (e) { blocked2 = true }
  check('parent_links UPDATE ile kendini onaylayamıyor', blocked2)
}

console.log('\n=== 9) KOD AKIŞI: ÖĞRENCİ → VELİ → ONAY ===')
await as(S1)
const gen = await db.query(`select * from student_generate_parent_code()`)
const code = gen.rows[0].link_code
check('öğrenci 8 karakterli kod üretti', /^[0-9A-Z]{8}$/.test(code), `code=${code}`)
check('kodda karışan harf yok (I, L, O, U)', !/[ILOU]/.test(code), `code=${code}`)

await as(P2)
{
  // yanlış kod
  const bad = await db.query(`select * from parent_preview_code('AAAA-AAAA')`)
  check('yanlış kod reddedildi', bad.rows[0].ok === false, JSON.stringify(bad.rows[0]))

  // doğru kod, tire ve küçük harfle yazılmış
  const lower = code.slice(0, 4).toLowerCase() + '-' + code.slice(4).toLowerCase()
  const prev = await db.query(`select * from parent_preview_code($1)`, [lower])
  check('küçük harf + tireli kod tanındı', prev.rows[0].ok === true, JSON.stringify(prev.rows[0]))
  check('ön izleme öğrenci adını döndürdü', prev.rows[0].student_name === 'Emin Efe Yazçiçek', prev.rows[0].student_name)

  // ön izleme istek OLUŞTURMAMALI
  await asAdmin()
  const n = await db.query(`select count(*)::int n from parent_links where parent_id=$1`, [P2])
  check('ön izleme bağlantı isteği OLUŞTURMADI', n.rows[0].n === 0, `n=${n.rows[0].n}`)
}

await as(P2)
const red = await db.query(`select * from parent_redeem_code($1)`, [code])
check('kod kullanıldı, istek oluştu', red.rows[0].ok === true, JSON.stringify(red.rows[0]))
const linkId = red.rows[0].link_id

console.log('\n=== 10) ONAY ÖNCESİ VELİ HÂLÂ VERİ GÖREMEZ ===')
await as(P2)
{
  const logs = await db.query(`select * from daily_logs`)
  check('bekleyen istekle çalışma kaydı görünmüyor', logs.rows.length === 0, `n=${logs.rows.length}`)
  const mine = await db.query(`select * from parent_linked_students()`)
  check('kendi listesinde pending olarak görünüyor', mine.rows.length === 1 && mine.rows[0].status === 'pending',
    JSON.stringify(mine.rows))
}

console.log('\n=== 11) KOD TEK KULLANIMLIK MI ===')
await as(P2)
{
  const again = await db.query(`select * from parent_redeem_code($1)`, [code])
  check('aynı kod ikinci kez kullanılamıyor', again.rows[0].ok === false, JSON.stringify(again.rows[0]))
}

console.log('\n=== 12) ÖĞRENCİ REDDEDERSE ===')
await as(S1)
{
  const list = await db.query(`select * from student_parent_links()`)
  check('öğrenci bekleyen isteği görüyor', list.rows.some(r => r.status === 'pending' && r.parent_name === 'Yeni Veli'),
    JSON.stringify(list.rows.map(r => [r.parent_name, r.status])))
  check('istek sahibinin e-postası görünüyor', list.rows.some(r => r.parent_email === 'yeniveli@x.com'))

  await db.query(`select student_respond_parent_link($1, false)`, [linkId])
}
await as(P2)
{
  const logs = await db.query(`select * from daily_logs`)
  check('REDDEDİLEN veli hiçbir veri göremiyor', logs.rows.length === 0, `n=${logs.rows.length}`)
  const mine = await db.query(`select * from parent_linked_students()`)
  check('reddedilen bağ velinin listesinden düştü', mine.rows.length === 0, JSON.stringify(mine.rows))
}

console.log('\n=== 13) YENİ KOD + ONAY ===')
await as(S1)
const code2 = (await db.query(`select * from student_generate_parent_code()`)).rows[0].link_code
await as(P2)
const red2 = await db.query(`select * from parent_redeem_code($1)`, [code2])
check('reddedilmiş veli yeni kodla tekrar istek gönderebiliyor', red2.rows[0].ok === true, JSON.stringify(red2.rows[0]))

await as(S1)
await db.query(`select student_respond_parent_link($1, true)`, [red2.rows[0].link_id])

await as(P2)
{
  const logs = await db.query(`select * from daily_logs`)
  check('onaydan sonra veli çalışma kayıtlarını görüyor', logs.rows.length === 2, `n=${logs.rows.length}`)
  const mes = await db.query(`select * from mock_exam_subjects`)
  check('onaydan sonra deneme netleri görünüyor', mes.rows.length === 1, `n=${mes.rows.length}`)
  check('yine de yalnızca kendi öğrencisi', mes.rows[0]?.subject === 'Matematik')
}

console.log('\n=== 14) İKİ ÇOCUKLU VELİ / İKİ VELİLİ ÖĞRENCİ ===')
await as(S2)
const code3 = (await db.query(`select * from student_generate_parent_code()`)).rows[0].link_code
await as(P2)
const red3 = await db.query(`select * from parent_redeem_code($1)`, [code3])
await as(S2)
await db.query(`select student_respond_parent_link($1, true)`, [red3.rows[0].link_id])
await as(P2)
{
  const mine = await db.query(`select * from parent_linked_students()`)
  check('veli iki öğrencinin de velisi olabiliyor', mine.rows.length === 2, JSON.stringify(mine.rows.map(r => r.student_name)))
  const logs = await db.query(`select student_id, count(*)::int n from daily_logs group by student_id`)
  check('iki öğrencinin kaydına da erişiyor', logs.rows.length === 2, JSON.stringify(logs.rows))
  const only1 = await db.query(`select count(*)::int n from daily_logs where student_id=$1`, [S1])
  check('öğrenci bazlı filtre karışmıyor (S1 = 2 kayıt)', only1.rows[0].n === 2, `n=${only1.rows[0].n}`)
}
// S1'in ikinci velisi
await as(S1)
const code4 = (await db.query(`select * from student_generate_parent_code()`)).rows[0].link_code
await as(P1)
const red4 = await db.query(`select * from parent_redeem_code($1)`, [code4])
check('bir öğrencinin ikinci velisi olabilir mi — zaten bağlıysa reddediliyor', red4.rows[0].ok === false, JSON.stringify(red4.rows[0]))
check('mesaj "zaten onaylı" diyor', /zaten onaylı/.test(red4.rows[0].message ?? ''), red4.rows[0].message)

console.log('\n=== 15) BAĞLANTIYI KALDIRMA ===')
await as(S1)
{
  const list = await db.query(`select * from student_parent_links()`)
  const active = list.rows.find(r => r.parent_name === 'Yeni Veli' && r.status === 'active')
  await db.query(`select revoke_parent_link($1)`, [active.link_id])
}
await as(P2)
{
  const logs = await db.query(`select count(*)::int n from daily_logs where student_id=$1`, [S1])
  check('bağ kaldırılınca veli o öğrencinin verisini göremiyor', logs.rows[0].n === 0, `n=${logs.rows[0].n}`)
  const other = await db.query(`select count(*)::int n from daily_logs where student_id=$1`, [S2])
  check('diğer öğrencinin verisi etkilenmedi', other.rows[0].n === 1, `n=${other.rows[0].n}`)
}

console.log('\n=== 16) KABA KUVVET SINIRI ===')
await as(P1)
{
  let last
  for (let i = 0; i < 12; i++) {
    last = await db.query(`select * from parent_preview_code('ZZZZZZZZ')`)
  }
  check('11+ hatalı denemeden sonra sınır devreye girdi', /Çok fazla hatalı/.test(last.rows[0].message ?? ''),
    JSON.stringify(last.rows[0]))
}

console.log('\n=== 17) VELİ KOD TABLOSUNU OKUYAMAZ ===')
await as(P2)
{
  const codes = await db.query(`select * from parent_link_codes`)
  check('veli davet kodlarını listeleyemiyor', codes.rows.length === 0, `n=${codes.rows.length}`)
}
await as(S1)
{
  const codes = await db.query(`select * from parent_link_codes`)
  check('öğrenci kendi kodlarını görebiliyor', codes.rows.length >= 1, `n=${codes.rows.length}`)
  const foreign = await db.query(`select count(*)::int n from parent_link_codes where student_id <> $1`, [S1])
  check('başkasının kodu görünmüyor', foreign.rows[0].n === 0, `n=${foreign.rows[0].n}`)
}

console.log('\n=== 18) ÖĞRETMEN ETKİLENMEDİ Mİ ===')
await as(T1)
{
  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('öğretmen tüm çalışma kayıtlarını görüyor (3)', logs.rows[0].n === 3, `n=${logs.rows[0].n}`)
  const prof = await db.query(`select count(*)::int n from profiles`)
  check('öğretmen tüm profilleri görüyor (5)', prof.rows[0].n === 5, `n=${prof.rows[0].n}`)
}

console.log('\n=== 19) ÖĞRENCİ KENDİ VERİSİNİ GÖRÜYOR / BAŞKASININKİNİ GÖRMÜYOR ===')
await as(S1)
{
  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('öğrenci kendi 2 kaydını görüyor', logs.rows[0].n === 2, `n=${logs.rows[0].n}`)
  const prof = await db.query(`select full_name from profiles`)
  const names = prof.rows.map(r => r.full_name)
  check('öğrenci başka öğrenciyi göremiyor', !names.includes('Ayşe Demir'), JSON.stringify(names))
  check('öğrenci öğretmeni görebiliyor (Mesajlar için)', names.includes('Furkan Hoca'), JSON.stringify(names))
}

console.log(`\n=== SONUÇ: ${pass} geçti, ${fail} başarısız ===\n`)
process.exit(fail > 0 ? 1 : 0)
