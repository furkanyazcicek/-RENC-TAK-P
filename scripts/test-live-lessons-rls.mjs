/**
 * CANLI DERS GÖÇÜNÜN RLS TESTİ
 *
 *   npm run test:live-lessons
 *
 * Göçü ÜRETİM veritabanına dokunmadan, bellekte çalışan gerçek bir
 * PostgreSQL'de (PGlite/WASM) baştan sona çalıştırır ve şunları kanıtlar:
 *
 *   1. Öğretmen kendi öğrencisini görebiliyor
 *   2. Öğretmen başka öğretmenin öğrencisini göremiyor
 *   3. Öğrenci kendi dersini görebiliyor
 *   4. Öğrenci başka öğrencinin dersini göremiyor
 *   5. Öğrenci öğretmenin özel notunu okuyamıyor
 *   6. Yetkisiz kullanıcı katılım kaydı oluşturamıyor
 *   7. İptal edilmiş davet tekrar kullanılamıyor
 *
 * ve ek olarak: mevcut erişimin kaybolmadığını, oda kimliğinin istemciden
 * seçilemediğini, paylaşılmamış özetin öğrenciye kapalı olduğunu, ders
 * bittiğinde odanın kapandığını.
 *
 * Supabase'e özgü parçalar (auth.uid(), auth.users, anon/authenticated
 * rolleri, supabase_realtime yayını) burada taklit edilir; geri kalan her
 * şey gerçek şemadır.
 */
import { PGlite } from '@electric-sql/pglite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

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

/** Bir sorgunun HATA ile reddedildiğini doğrular. */
async function expectDenied(name, sql, params = []) {
  try {
    await db.query(sql, params)
    check(name, false, '(reddedilmesi gerekirken başarılı oldu)')
  } catch (e) {
    check(name, true)
    return e
  }
  return null
}

async function as(uid) {
  await db.exec('reset role;')
  await db.query(`select set_config('app.uid', $1, false)`, [uid ?? ''])
  await db.exec('set role authenticated;')
}
async function asAdmin() {
  await db.exec('reset role;')
  await db.query(`select set_config('app.uid', '', false)`)
}

console.log('\n=== 1) ŞEMA HAZIRLIĞI (Supabase taklidi) ===')

await db.exec(`
  create schema if not exists auth;

  create or replace function auth.uid() returns uuid
  language sql stable as $fn$
    select nullif(current_setting('app.uid', true), '')::uuid;
  $fn$;

  create table auth.users (id uuid primary key, email text);

  create role anon nologin;
  create role authenticated nologin;
  grant usage on schema public, auth to anon, authenticated;

  -- Supabase'de hazır gelen Realtime yayını
  create publication supabase_realtime;
`)

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
  create table questions (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    content text, image_url text, subject text, topic text,
    status text not null default 'İnceleniyor',
    teacher_reply text, teacher_reply_image_url text,
    created_at timestamptz default now()
  );
  create table homeworks (
    id uuid primary key default gen_random_uuid(),
    student_id uuid references profiles(id) on delete cascade not null,
    teacher_id uuid references profiles(id) on delete set null,
    title text not null, description text, due_date date,
    status text not null default 'Yapılıyor',
    created_at timestamptz default now()
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
    empty integer not null default 0
  );

  alter table profiles enable row level security;
  alter table daily_logs enable row level security;
  alter table exams enable row level security;
  alter table questions enable row level security;
  alter table homeworks enable row level security;
  alter table mock_exams enable row level security;
  alter table mock_exam_subjects enable row level security;
`)
console.log('  ✓ taban şema kuruldu')

/* Kimlikler */
const T1 = '55555555-5555-5555-5555-555555555555' // Furkan Hoca (göç öncesi)
const T2 = '66666666-6666-6666-6666-666666666666' // İkinci öğretmen (göç sonrası)
const S1 = '11111111-1111-1111-1111-111111111111' // Emin  — T1'in öğrencisi
const S2 = '22222222-2222-2222-2222-222222222222' // Ayşe  — T2'nin öğrencisi olacak
const S3 = '33333333-3333-3333-3333-333333333333' // Deniz — göç SONRASI kayıt olan
const P1 = '44444444-4444-4444-4444-444444444444' // veli

await db.exec(`
  insert into auth.users (id, email) values
    ('${T1}','furkan@x.com'), ('${S1}','emin@x.com'),
    ('${S2}','ayse@x.com'), ('${P1}','veli@x.com');
  insert into profiles (id, full_name, role, student_id) values
    ('${T1}','Furkan Hoca','teacher',null),
    ('${S1}','Emin Efe','student',null),
    ('${S2}','Ayşe Demir','student',null),
    ('${P1}','Veli Kişi','parent','${S1}');

  insert into daily_logs (student_id, topic, duration_minutes) values
    ('${S1}','Matematik - Türev',90), ('${S2}','Kimya - Mol',45);
  insert into homeworks (student_id, teacher_id, title) values
    ('${S1}','${T1}','Türev testi'), ('${S2}','${T1}','Mol testi');
  insert into questions (student_id, content) values
    ('${S1}','Bu soruda takıldım'), ('${S2}','Ben de');
`)
console.log('  ✓ göç öncesi veri yazıldı (tek öğretmen, iki öğrenci)')

console.log('\n=== 2) ÖNCEKİ GÖÇLER + CANLI DERS GÖÇÜ ===')
// Veli göçü canlı ders göçünün dayandığı yardımcıları (is_teacher,
// is_linked_parent_of, sıkılaştırılmış profil politikası) kuruyor.
for (const file of ['migration_parent_verification.sql', 'migration_live_lessons.sql']) {
  try {
    await db.exec(readFileSync(join(REPO, 'supabase', file), 'utf8'))
    check(`${file} hatasız çalıştı`, true)
  } catch (e) {
    check(`${file} hatasız çalıştı`, false, e.message)
    console.log('\nGöç hatası — test durduruldu.')
    process.exit(1)
  }
}

await db.exec(`
  grant select, insert, update, delete on all tables in schema public to authenticated;
  grant usage, select on all sequences in schema public to authenticated;
  grant select on auth.users to authenticated;
  grant execute on all functions in schema public to authenticated;
  grant execute on function auth.uid() to authenticated;
`)
for (const t of [
  'profiles', 'daily_logs', 'exams', 'questions', 'homeworks', 'mock_exams',
  'mock_exam_subjects', 'teacher_students', 'teacher_invites', 'lesson_sessions',
  'lesson_private_notes', 'lesson_participants', 'lesson_materials',
  'lesson_board_pages', 'lesson_summaries',
]) {
  await db.exec(`alter table ${t} force row level security;`)
}

console.log('\n=== 3) MEVCUT ERİŞİM KORUNDU MU ===')
{
  const r = await db.query(`select count(*)::int n from teacher_students where status='active' and created_via='legacy'`)
  check('göç öncesi öğretmen–öğrenci çiftleri active taşındı (2)', r.rows[0].n === 2, `n=${r.rows[0].n}`)
}

// Göç SONRASI dünyaya yeni öğretmen ve yeni öğrenci katılıyor.
await asAdmin()
await db.exec(`
  insert into auth.users (id, email) values ('${T2}','ikinci@x.com'), ('${S3}','deniz@x.com');
  insert into profiles (id, full_name, role) values
    ('${T2}','İkinci Hoca','teacher'), ('${S3}','Deniz Yıldız','student');
`)

console.log('\n=== 4) ÖĞRETMEN KENDİ ÖĞRENCİSİNİ GÖRÜYOR, BAŞKASININKİNİ GÖRMÜYOR ===')
await as(T1)
{
  const p = await db.query(`select full_name from profiles where role='student' order by full_name`)
  const names = p.rows.map((r) => r.full_name)
  check('kendi öğrencilerini görüyor', names.includes('Emin Efe') && names.includes('Ayşe Demir'), JSON.stringify(names))
  check('göç sonrası kayıt olan öğrenci KENDİLİĞİNDEN görünmüyor', !names.includes('Deniz Yıldız'), JSON.stringify(names))

  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('kendi öğrencilerinin çalışma kayıtları görünüyor (2)', logs.rows[0].n === 2, `n=${logs.rows[0].n}`)
}

await as(T2)
{
  const p = await db.query(`select full_name from profiles where role='student'`)
  check('yeni öğretmen HİÇBİR öğrenci profili göremiyor', p.rows.length === 0, JSON.stringify(p.rows))
  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('yeni öğretmen hiçbir çalışma kaydı göremiyor', logs.rows[0].n === 0, `n=${logs.rows[0].n}`)
  const hw = await db.query(`select count(*)::int n from homeworks`)
  check('yeni öğretmen hiçbir ödev göremiyor', hw.rows[0].n === 0, `n=${hw.rows[0].n}`)
  const q = await db.query(`select count(*)::int n from questions`)
  check('yeni öğretmen hiçbir soru göremiyor', q.rows[0].n === 0, `n=${q.rows[0].n}`)
}

console.log('\n=== 5) DAVET AKIŞI ===')
await as(T2)
const invite = (await db.query(`select * from teacher_create_invite('Deniz için')`)).rows[0]
check('öğretmen davet bağlantısı üretebiliyor', !!invite?.invite_token && invite.invite_token.length === 64)
{
  await asAdmin()
  const stored = await db.query(`select token_hash, token_hint from teacher_invites where id=$1`, [invite.invite_id])
  check('belirteç veritabanında AÇIK METİN tutulmuyor', stored.rows[0].token_hash !== invite.invite_token)
  check('yalnızca SHA-256 özeti saklanıyor', /^[0-9a-f]{64}$/.test(stored.rows[0].token_hash))
}

await as(S1)
{
  const r = (await db.query(`select * from teacher_invite_preview($1)`, [invite.invite_token])).rows[0]
  check('öğrenci daveti ön izleyebiliyor ve öğretmenin adını görüyor', r.ok === true && r.teacher_name === 'İkinci Hoca', JSON.stringify(r))
  const bad = (await db.query(`select * from teacher_invite_preview('yanlisbelirtec')`)).rows[0]
  check('yanlış belirteçte anlaşılır Türkçe hata dönüyor', bad.ok === false && /geçersiz/i.test(bad.message), JSON.stringify(bad))
}

await as(S3)
{
  const r = (await db.query(`select * from student_respond_teacher_invite($1, true)`, [invite.invite_token])).rows[0]
  check('öğrenci daveti kabul edebiliyor', r.ok === true && r.code === 'active', JSON.stringify(r))
}
await as(T2)
{
  const list = await db.query(`select * from teacher_student_list()`)
  check('kabul sonrası öğretmen öğrencisini görüyor', list.rows.length === 1 && list.rows[0].student_name === 'Deniz Yıldız', JSON.stringify(list.rows))
  const p = await db.query(`select full_name from profiles where role='student'`)
  check('yeni öğretmen HÂLÂ diğer öğrencileri göremiyor', p.rows.length === 1 && p.rows[0].full_name === 'Deniz Yıldız', JSON.stringify(p.rows))
}

console.log('\n=== 6) İPTAL EDİLMİŞ / KULLANILMIŞ DAVET TEKRAR KULLANILAMIYOR ===')
await as(S1)
{
  const again = (await db.query(`select * from student_respond_teacher_invite($1, true)`, [invite.invite_token])).rows[0]
  check('kullanılmış davet ikinci kez kabul edilemiyor', again.ok === false && again.code === 'used', JSON.stringify(again))
}
await as(T2)
const invite2 = (await db.query(`select * from teacher_create_invite('İptal edilecek')`)).rows[0]
await db.query(`select teacher_revoke_invite($1)`, [invite2.invite_id])
await as(S1)
{
  const r = (await db.query(`select * from student_respond_teacher_invite($1, true)`, [invite2.invite_token])).rows[0]
  check('İPTAL EDİLMİŞ davet kullanılamıyor', r.ok === false && r.code === 'revoked', JSON.stringify(r))
  const pv = (await db.query(`select * from teacher_invite_preview($1)`, [invite2.invite_token])).rows[0]
  check('iptal edilmiş davet ön izlemede de reddediliyor', pv.ok === false && pv.code === 'revoked', JSON.stringify(pv))
}
await as(T2)
const invite3 = (await db.query(`select * from teacher_create_invite('Süresi dolacak', 1)`)).rows[0]
await asAdmin()
await db.query(`update teacher_invites set expires_at = now() - interval '1 hour' where id=$1`, [invite3.invite_id])
await as(S1)
{
  const r = (await db.query(`select * from student_respond_teacher_invite($1, true)`, [invite3.invite_token])).rows[0]
  check('SÜRESİ DOLMUŞ davet kullanılamıyor', r.ok === false && r.code === 'expired', JSON.stringify(r))
}

console.log('\n=== 7) DERS OLUŞTURMA VE GÖRÜNÜRLÜK ===')
await as(T1)
const lesson = (
  await db.query(
    `insert into lesson_sessions (teacher_id, student_id, title, subject, topic,
       scheduled_start, scheduled_end, agenda, prep_note, provider_room_id)
     values ($1,$2,'Türev Tekrarı','Matematik','Türev',
       now() + interval '1 hour', now() + interval '2 hours',
       'Zincir kuralı', 'Defterini yanına al', 'ISTEMCININ-SECTIGI-ODA')
     returning id, provider_room_id, status`,
    [T1, S1]
  )
).rows[0]
check('öğretmen kendi öğrencisine ders oluşturabiliyor', !!lesson?.id)
check('oda kimliği İSTEMCİDEN alınmıyor, sunucuda üretiliyor',
  lesson.provider_room_id !== 'ISTEMCININ-SECTIGI-ODA' && lesson.provider_room_id.startsWith('drk-'),
  lesson.provider_room_id)

await expectDenied(
  'öğretmen BAŞKASININ öğrencisine ders oluşturamıyor',
  `insert into lesson_sessions (teacher_id, student_id, title, scheduled_start, scheduled_end, provider_room_id)
   values ($1,$2,'İzinsiz ders', now(), now() + interval '1 hour','x')`,
  [T1, S3]
)

await as(S1)
{
  const r = await db.query(`select id, title, prep_note from lesson_sessions`)
  check('ÖĞRENCİ KENDİ DERSİNİ GÖREBİLİYOR', r.rows.length === 1 && r.rows[0].title === 'Türev Tekrarı', JSON.stringify(r.rows))
  check('öğrenciye açık hazırlık notu görünüyor', r.rows[0].prep_note === 'Defterini yanına al')
}
await as(S2)
{
  const r = await db.query(`select id from lesson_sessions`)
  check('ÖĞRENCİ BAŞKA ÖĞRENCİNİN DERSİNİ GÖREMİYOR', r.rows.length === 0, JSON.stringify(r.rows))
}
await as(T2)
{
  const r = await db.query(`select id from lesson_sessions`)
  check('başka öğretmen bu dersi göremiyor', r.rows.length === 0, JSON.stringify(r.rows))
}

console.log('\n=== 8) ÖĞRETMENİN ÖZEL NOTU ÖĞRENCİYE SIZMIYOR ===')
await as(T1)
await db.query(
  `insert into lesson_private_notes (lesson_session_id, teacher_id, prep_note, outcome_note)
   values ($1,$2,'Öğrenci zincir kuralında zayıf','Aile ile görüşülecek')`,
  [lesson.id, T1]
)
{
  const r = await db.query(`select outcome_note from lesson_private_notes`)
  check('öğretmen kendi özel notunu okuyabiliyor', r.rows[0]?.outcome_note === 'Aile ile görüşülecek')
}
await as(S1)
{
  const r = await db.query(`select * from lesson_private_notes`)
  check('ÖĞRENCİ ÖĞRETMENİN ÖZEL NOTUNU OKUYAMIYOR (0 satır)', r.rows.length === 0, JSON.stringify(r.rows))
  const cols = await db.query(
    `select column_name from information_schema.columns
      where table_name='lesson_sessions' and column_name like '%teacher_note%'`
  )
  check('özel not lesson_sessions içinde KOLON olarak da yok', cols.rows.length === 0, JSON.stringify(cols.rows))
}
await expectDenied(
  'öğrenci özel not YAZAMIYOR',
  `insert into lesson_private_notes (lesson_session_id, teacher_id, outcome_note) values ($1,$2,'sahte')`,
  [lesson.id, S1]
)

console.log('\n=== 9) KATILIM KAYDI ===')
await as(S1)
await expectDenied(
  'öğrenci ders odası AÇILMADAN katılamıyor',
  `select * from lesson_join($1)`,
  [lesson.id]
)
await as(T1)
{
  const r = (await db.query(`select * from lesson_join($1)`, [lesson.id])).rows[0]
  check('öğretmen katılınca bekleme odası açılıyor', r.participant_role === 'teacher' && r.lesson_status === 'lobby_open', JSON.stringify(r))
}
await as(S1)
{
  const r = (await db.query(`select * from lesson_join($1)`, [lesson.id])).rows[0]
  check('öğrenci oda açıldıktan sonra katılabiliyor', r.participant_role === 'student', JSON.stringify(r))
}
await as(S2)
await expectDenied('YETKİSİZ KULLANICI KATILAMIYOR', `select * from lesson_join($1)`, [lesson.id])
await expectDenied(
  'YETKİSİZ KULLANICI KATILIM KAYDI OLUŞTURAMIYOR (doğrudan INSERT)',
  `insert into lesson_participants (lesson_session_id, user_id, role) values ($1,$2,'student')`,
  [lesson.id, S2]
)
await as(S1)
await expectDenied(
  'katılımcı BAŞKASI ADINA katılım kaydı yazamıyor',
  `insert into lesson_participants (lesson_session_id, user_id, role) values ($1,$2,'teacher')`,
  [lesson.id, T1]
)
await expectDenied(
  'katılımcı kendi adına bile doğrudan INSERT yapamıyor (yalnız RPC)',
  `insert into lesson_participants (lesson_session_id, user_id, role) values ($1,$2,'student')`,
  [lesson.id, S1]
)
{
  await db.query(`select lesson_leave($1, $2)`, [lesson.id, 999999])
  await asAdmin()
  const r = await db.query(`select total_seconds from lesson_participants where user_id=$1`, [S1])
  check('şişirilmiş süre sunucuda kırpılıyor', r.rows[0].total_seconds <= 3600 + 14400, `saniye=${r.rows[0].total_seconds}`)
}

console.log('\n=== 10) TAHTA ===')
await as(S1)
await db.query(`select lesson_board_save($1, 0, $2::jsonb, '{}'::jsonb)`, [lesson.id, JSON.stringify({ v: 1, items: [] })])
{
  const r = await db.query(`select page_index from lesson_board_pages`)
  check('öğrenci canlı derste tahtaya yazabiliyor', r.rows.length === 1)
}
await as(S2)
await expectDenied(
  'yabancı kullanıcı tahtaya yazamıyor',
  `select lesson_board_save($1, 0, '{"v":1,"items":[]}'::jsonb, '{}'::jsonb)`,
  [lesson.id]
)
{
  const r = await db.query(`select * from lesson_board_pages`)
  check('yabancı kullanıcı tahtayı okuyamıyor', r.rows.length === 0)
}

console.log('\n=== 11) DERS SONU VE ÖZET ===')
await as(T1)
await db.query(`select lesson_set_status($1,'completed')`, [lesson.id])
await as(S1)
await expectDenied('DERS BİTTİKTEN SONRA ODAYA GİRİLEMİYOR', `select * from lesson_join($1)`, [lesson.id])

await as(T1)
await db.query(
  `insert into lesson_summaries (lesson_session_id, teacher_id, student_id, covered_topics, public_note, next_goal, completed_at)
   values ($1,$2,$3,'Zincir kuralı','Güzel ilerleme','Ters türev', now())`,
  [lesson.id, T1, S1]
)
await as(S1)
{
  const r = await db.query(`select * from lesson_summaries`)
  check('PAYLAŞILMAMIŞ özet öğrenciye kapalı', r.rows.length === 0, JSON.stringify(r.rows))
}
await as(T1)
await db.query(`update lesson_summaries set shared_with_student = true where lesson_session_id=$1`, [lesson.id])
await as(S1)
{
  const r = await db.query(`select public_note from lesson_summaries`)
  check('paylaşılan özeti öğrenci görebiliyor', r.rows.length === 1 && r.rows[0].public_note === 'Güzel ilerleme')
  await db.query(`select lesson_student_feedback($1,'tekrar_gerekli')`, [lesson.id])
  const fb = await db.query(`select student_feedback from lesson_summaries`)
  check('öğrenci geri bildirim bırakabiliyor', fb.rows[0].student_feedback === 'tekrar_gerekli')
}
{
  // Öğrenciye UPDATE politikası verilmediği için RLS satırı görünmez kılar:
  // sorgu hata atmaz, HİÇBİR SATIRI güncellemez. Doğrulanması gereken budur.
  const r = await db.query(
    `update lesson_summaries set public_note='ben yazdım' where lesson_session_id=$1`,
    [lesson.id]
  )
  check('öğrenci özetin ÖĞRETMEN metnini değiştiremiyor (0 satır)', (r.affectedRows ?? 0) === 0, `n=${r.affectedRows}`)

  await asAdmin()
  const kept = await db.query(`select public_note from lesson_summaries where lesson_session_id=$1`, [lesson.id])
  check('öğretmenin özet metni değişmedi', kept.rows[0].public_note === 'Güzel ilerleme', kept.rows[0].public_note)
}
await as(S2)
{
  const r = await db.query(`select * from lesson_summaries`)
  check('başka öğrenci paylaşılan özeti bile göremiyor', r.rows.length === 0)
}

console.log('\n=== 12) BAĞ SONLANDIRILINCA ERİŞİM KAPANIYOR ===')
await asAdmin()
const link = (await db.query(`select id from teacher_students where teacher_id=$1 and student_id=$2`, [T1, S2])).rows[0]
await as(T1)
await db.query(`select end_teacher_student_link($1)`, [link.id])
{
  const p = await db.query(`select full_name from profiles where role='student'`)
  check('bağ sonlandırılan öğrenci artık görünmüyor', !p.rows.map((r) => r.full_name).includes('Ayşe Demir'), JSON.stringify(p.rows))
  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('o öğrencinin çalışma kaydı da kapandı (1 satır kaldı)', logs.rows[0].n === 1, `n=${logs.rows[0].n}`)
}

console.log('\n=== 13) VELİ ERİŞİMİ BOZULMADI ===')
await as(P1)
{
  const logs = await db.query(`select count(*)::int n from daily_logs`)
  check('veli hâlâ kendi öğrencisinin kaydını görüyor', logs.rows[0].n === 1, `n=${logs.rows[0].n}`)
  const l = await db.query(`select count(*)::int n from lesson_sessions`)
  check('veli canlı ders kayıtlarını GÖREMİYOR', l.rows[0].n === 0, `n=${l.rows[0].n}`)
}

console.log(`\n=== SONUÇ: ${pass} geçti, ${fail} kaldı ===\n`)
process.exit(fail === 0 ? 0 : 1)
