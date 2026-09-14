/**
 * Öğretmen bildirim göçünü canlı veriye dokunmadan PGlite üzerinde sınar.
 *
 * Kapsam: aktif öğretmen bağı, olay sahipliği, başka öğretmene sızıntı,
 * okunma yetkisi, link kaldırma, push tekilleştirme ve cihaz aboneliği.
 */
import { PGlite } from '@electric-sql/pglite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const db = new PGlite()
let passed = 0
let failed = 0

function check(name, condition, detail = '') {
  if (condition) {
    passed++
    console.log(`  ✓ ${name}`)
  } else {
    failed++
    console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

async function expectDenied(name, query, params = []) {
  try {
    await db.query(query, params)
    check(name, false, 'işlem reddedilmedi')
  } catch {
    check(name, true)
  }
}

async function as(userId, role = 'authenticated') {
  await db.exec('reset role;')
  await db.query(`select set_config('app.uid', $1, false)`, [userId ?? ''])
  await db.exec(`set role ${role};`)
}

async function admin() {
  await db.exec('reset role;')
  await db.query(`select set_config('app.uid', '', false)`)
}

const T1 = '10000000-0000-0000-0000-000000000001'
const T2 = '10000000-0000-0000-0000-000000000002'
const S1 = '20000000-0000-0000-0000-000000000001'
const S2 = '20000000-0000-0000-0000-000000000002'

console.log('\n=== Çift yönlü bildirimler: yerel güvenlik testi ===')

await db.exec(`
  create schema auth;
  create or replace function auth.uid() returns uuid
  language sql stable as $fn$
    select nullif(current_setting('app.uid', true), '')::uuid;
  $fn$;

  create role anon nologin;
  create role authenticated nologin;
  create role service_role nologin bypassrls;
  grant usage on schema public, auth to anon, authenticated, service_role;
  grant execute on function auth.uid() to authenticated, service_role;
  create publication supabase_realtime;

  create table profiles (
    id uuid primary key,
    full_name text not null,
    role text not null
  );
  create table teacher_students (
    id uuid primary key default gen_random_uuid(),
    teacher_id uuid not null references profiles(id) on delete cascade,
    student_id uuid not null references profiles(id) on delete cascade,
    status text not null,
    unique (teacher_id, student_id)
  );
  create table messages (
    id uuid primary key default gen_random_uuid(),
    sender_id uuid not null references profiles(id),
    receiver_id uuid not null references profiles(id),
    content text,
    created_at timestamptz default now()
  );
  create table questions (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    content text,
    status text not null default 'İnceleniyor',
    teacher_reply text,
    teacher_reply_image_url text,
    created_at timestamptz default now()
  );
  create table daily_logs (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    topic text not null,
    duration_minutes integer default 0,
    correct integer default 0,
    incorrect integer default 0,
    empty integer default 0,
    created_at timestamptz default now()
  );
  create table exams (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    topic text not null,
    correct integer default 0,
    incorrect integer default 0,
    empty integer default 0
  );
  create table mock_exams (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    exam_type text not null,
    exam_name text,
    created_at timestamptz default now()
  );
  create table homeworks (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    teacher_id uuid references profiles(id),
    title text not null,
    status text not null default 'Yapılıyor'
  );
  create table push_subscriptions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references profiles(id),
    endpoint text not null unique,
    p256dh text not null,
    auth text not null,
    created_at timestamptz default now()
  );
  create table lesson_activity_events (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    event_name text not null
  );
  create table bundled_lesson_activity_events (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    event_name text not null
  );
  create table student_question_set_attempts (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    status text not null default 'in_progress',
    correct_count integer default 0,
    wrong_count integer default 0
  );
  create table student_atlas_task_states (
    state_id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    source_code text not null,
    state_revision integer not null default 1,
    completed boolean not null default false
  );
  create table ai_solution_sessions (
    id uuid primary key default gen_random_uuid(),
    student_id uuid not null references profiles(id),
    status text not null,
    subject text,
    canonical_topic text,
    topic text,
    question_text text
  );

  insert into profiles (id, full_name, role) values
    ('${T1}', 'Furkan Hoca', 'teacher'),
    ('${T2}', 'Başka Hoca', 'teacher'),
    ('${S1}', 'Emin Efe', 'student'),
    ('${S2}', 'Ayşe Demir', 'student');
  insert into teacher_students (teacher_id, student_id, status) values
    ('${T1}', '${S1}', 'active'),
    ('${T1}', '${S2}', 'removed'),
    ('${T2}', '${S1}', 'pending');

  grant select on profiles, teacher_students to authenticated;
  grant select, insert on messages, daily_logs, exams, mock_exams to authenticated;
  grant select, insert, update on questions to authenticated;
  grant select, insert, update on homeworks to authenticated;
  grant select, insert on lesson_activity_events, bundled_lesson_activity_events,
    student_atlas_task_states, ai_solution_sessions to authenticated;
  grant select, update on student_question_set_attempts to authenticated;
`)

const migration = readFileSync(join(REPO, 'supabase', 'migration_teacher_notifications.sql'), 'utf8')
try {
  await db.exec(migration)
  check('göç baştan sona uygulandı', true)
} catch (error) {
  check('göç baştan sona uygulandı', false, error.message)
  process.exit(1)
}

try {
  await db.exec(migration)
  check('göç ikinci uygulamada mevcut kurulumu bozmuyor', true)
} catch (error) {
  check('göç ikinci uygulamada mevcut kurulumu bozmuyor', false, error.message)
  process.exit(1)
}

await db.exec(`alter table account_notifications force row level security;`)

await as(S1)
const daily = await db.query(
  `insert into daily_logs (student_id, topic, duration_minutes, correct, incorrect, empty)
   values ($1, 'Matematik - Türev', 60, 12, 3, 1) returning id`,
  [S1]
)
const question = await db.query(
  `insert into questions (student_id, content) values ($1, 'Özel soru metni') returning id`,
  [S1]
)
await db.query(
  `insert into messages (sender_id, receiver_id, content) values ($1, $2, 'Özel mesaj metni')`,
  [S1, T1]
)
await db.query(
  `insert into messages (sender_id, receiver_id, content) values ($1, $2, 'Bağsız öğretmen')`,
  [S1, T2]
)
await db.query(
  `insert into exams (student_id, topic, correct, incorrect, empty)
   values ($1, 'Fizik', 8, 2, 0)`,
  [S1]
)
await db.query(
  `insert into mock_exams (student_id, exam_type, exam_name)
   values ($1, 'TYT', 'Deneme 4')`,
  [S1]
)
await db.query(
  `insert into lesson_activity_events (student_id, event_name)
   values ($1, 'lesson_completed')`,
  [S1]
)
await db.query(
  `insert into bundled_lesson_activity_events (student_id, event_name)
   values ($1, 'lesson_completed')`,
  [S1]
)
await db.query(
  `insert into student_atlas_task_states (student_id, source_code, completed)
   values ($1, 'physics_atlas', true)`,
  [S1]
)
await db.query(
  `insert into ai_solution_sessions (
     student_id, status, subject, canonical_topic, question_text
   ) values ($1, 'ok', 'Matematik', 'Türev', 'Özel AI soru metni')`,
  [S1]
)

await as(T1)
await db.query(
  `insert into messages (sender_id, receiver_id, content)
   values ($1, $2, 'Özel öğretmen mesajı')`,
  [T1, S1]
)
await db.query(
  `update questions
      set teacher_reply = 'Özel öğretmen çözümü', status = 'Çözüldü'
    where id = $1`,
  [question.rows[0].id]
)
const homework = await db.query(
  `insert into homeworks (student_id, teacher_id, title)
   values ($1, $2, 'Türev testi') returning id`,
  [S1, T1]
)
await as(T2)
await db.query(
  `insert into messages (sender_id, receiver_id, content)
   values ($1, $2, 'Bekleyen bağdan mesaj')`,
  [T2, S1]
)
await admin()
const assessment = await db.query(
  `insert into student_question_set_attempts (student_id, correct_count, wrong_count)
   values ($1, 7, 2) returning id`,
  [S1]
)

await as(S1)
await db.query(`update homeworks set status = 'Tamamlandı' where id = $1`, [homework.rows[0].id])
await db.query(
  `update student_question_set_attempts set status = 'completed' where id = $1`,
  [assessment.rows[0].id]
)

await as(T1)
let feed = await db.query(`select kind, title, body from account_notifications order by created_at`)
check('aktif öğretmen on bir anlamlı bildirimi görüyor', feed.rows.length === 11, `sayı=${feed.rows.length}`)
check('mesaj metni bildirim kopyasına alınmıyor', !JSON.stringify(feed.rows).includes('Özel mesaj metni'))
check('soru metni bildirim kopyasına alınmıyor', !JSON.stringify(feed.rows).includes('Özel soru metni'))
check('AI soru metni bildirim kopyasına alınmıyor', !JSON.stringify(feed.rows).includes('Özel AI soru metni'))
check('bildirimler öğrenci adını taşıyor', feed.rows.every((row) => row.title.startsWith('Emin Efe')))

await as(T2)
feed = await db.query(`select id from account_notifications`)
check('bekleyen bağdaki öğretmen bildirim göremiyor', feed.rows.length === 0)

await as(S1)
feed = await db.query(`select kind, title, body, recipient_id from account_notifications order by created_at`)
check('öğrenci mesaj, soru çözümü ve yeni ödevi görüyor', feed.rows.length === 3, `sayı=${feed.rows.length}`)
check('öğrenci yalnız kendi alıcı kayıtlarını görüyor', feed.rows.every((row) => row.recipient_id === S1))
check('bekleyen öğretmen bağı öğrenci bildirimi üretemiyor', !JSON.stringify(feed.rows).includes('Başka Hoca'))
check('öğretmen mesaj metni bildirim kopyasına alınmıyor', !JSON.stringify(feed.rows).includes('Özel öğretmen mesajı'))
check('öğretmen çözümü bildirim kopyasına alınmıyor', !JSON.stringify(feed.rows).includes('Özel öğretmen çözümü'))

await as(T1)
const firstUnread = await db.query(`select id from account_notifications where read_at is null limit 1`)
await db.query(`update account_notifications set read_at = now() where id = $1`, [firstUnread.rows[0].id])
const readCount = await db.query(`select count(*)::int count from account_notifications where read_at is not null`)
check('öğretmen kendi bildirimini okundu yapabiliyor', readCount.rows[0].count === 1)
await expectDenied(
  'istemci bildirim başlığını değiştiremiyor',
  `update account_notifications set title = 'değiştirildi' where id = $1`,
  [firstUnread.rows[0].id]
)

await as(S1)
const studentUnread = await db.query(`select id from account_notifications where read_at is null limit 1`)
await db.query(`update account_notifications set read_at = now() where id = $1`, [studentUnread.rows[0].id])
const studentReadCount = await db.query(`select count(*)::int count from account_notifications where read_at is not null`)
check('öğrenci kendi bildirimini okundu yapabiliyor', studentReadCount.rows[0].count === 1)

await admin()
await db.query(`update teacher_students set status = 'removed' where teacher_id = $1 and student_id = $2`, [T1, S1])
await as(T1)
feed = await db.query(`select id from account_notifications`)
check('bağ kaldırılınca geçmiş bildirim görünürlüğü kapanıyor', feed.rows.length === 0)
await as(S1)
feed = await db.query(`select id from account_notifications`)
check('bağ kaldırılınca öğrencideki geçmiş bildirimler de kapanıyor', feed.rows.length === 0)

await admin()
await db.query(`update teacher_students set status = 'active' where teacher_id = $1 and student_id = $2`, [T1, S1])
await as(S2)
await db.query(
  `insert into daily_logs (student_id, topic, duration_minutes) values ($1, 'Kimya - Mol', 30)`,
  [S2]
)
await as(T1)
const s2Notifications = await db.query(`select count(*)::int count from account_notifications where student_id = $1`, [S2])
check('kaldırılmış öğrenci yeni bildirim üretemiyor', s2Notifications.rows[0].count === 0)

await as(S1)
await db.query(
  `select save_push_subscription($1, $2, $3, $4)`,
  ['https://push.example.test/device-1', 'p'.repeat(65), 'a'.repeat(24), 'test-agent']
)
await as(S2)
await expectDenied(
  'başka hesap mevcut cihaz aboneliğini ele geçiremiyor',
  `select save_push_subscription($1, $2, $3, $4)`,
  ['https://push.example.test/device-1', 'q'.repeat(65), 'b'.repeat(24), 'other-agent']
)

await admin()
const pushCandidate = await db.query(
  `select id from account_notifications where recipient_id = $1 order by created_at limit 1`,
  [T1]
)
await as(null, 'service_role')
let claim = await db.query(`select * from claim_account_notification_push($1)`, [pushCandidate.rows[0].id])
check('service role bildirimi push için talep edebiliyor', claim.rows.length === 1 && claim.rows[0].user_id === T1)
claim = await db.query(`select * from claim_account_notification_push($1)`, [pushCandidate.rows[0].id])
check('aynı bildirim eşzamanlı ikinci kez talep edilemiyor', claim.rows.length === 0)
await db.query(`select finish_account_notification_push($1, true, null)`, [pushCandidate.rows[0].id])

await admin()
const studentPushCandidate = await db.query(
  `select id from account_notifications where recipient_id = $1 order by created_at limit 1`,
  [S1]
)
await as(null, 'service_role')
const studentClaim = await db.query(
  `select * from claim_account_notification_push($1)`,
  [studentPushCandidate.rows[0].id]
)
check('öğrenci bildirimi doğru hesaba push için talep ediliyor', studentClaim.rows.length === 1 && studentClaim.rows[0].user_id === S1)
await db.query(`select finish_account_notification_push($1, true, null)`, [studentPushCandidate.rows[0].id])

await admin()
const sourceCount = await db.query(
  `select count(*)::int count from account_notifications where source_table = 'daily_logs' and source_id = $1`,
  [daily.rows[0].id]
)
check('aynı kaynak olayı tek bildirim olarak saklanıyor', sourceCount.rows[0].count === 1)

console.log(`\nSonuç: ${passed} geçti, ${failed} başarısız.`)
if (failed) process.exit(1)
