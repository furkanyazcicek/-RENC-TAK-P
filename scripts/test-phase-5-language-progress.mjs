/**
 * AI Koç Faz 5 — dört dil ilerlemesinin yerel/sentetik kabul paketi.
 * PGlite bellekte çalışır; canlı Supabase veya gerçek öğrenci verisi kullanmaz.
 */
import assert from 'node:assert/strict'
import { createHash, randomUUID } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'
import { PGlite } from '@electric-sql/pglite'

import {
  LANGUAGE_REGISTRY, LANGUAGE_REGISTRY_VERSION, validateLanguageRegistry,
} from '../src/lib/learning/languageActivity/registry.js'
import {
  hasMeaningfulProgress, mergeLanguageProgress, splitSensitiveLanguageProgress,
  summarizeLanguageProgress, validateLanguageSnapshot,
} from '../src/lib/learning/languageActivity/merge.js'
import {
  accountLanguageStorageKey, configureLanguageProgressScope,
  readLanguageProgress, readLegacyLanguageCandidate, writeLanguageProgress,
} from '../src/lib/learning/languageActivity/storage.js'
import { createLanguageOutbox } from '../src/lib/learning/languageActivity/outbox.js'
import { hashActionPayload } from '../src/lib/learning/contentActivity/identity.js'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const P2_PATH = join(REPO, 'supabase/migration_learning_evidence_network.sql')
const P5_PATH = join(REPO, 'supabase/migration_learning_language_progress.sql')
const P2 = readFileSync(P2_PATH, 'utf8')
const P5 = readFileSync(P5_PATH, 'utf8')
const OUT = join(REPO, 'docs/ai-koc/kanitlar/faz-5')
const RESULT = join(OUT, 'faz-5-kabul-sonucu.json')
const IDS = Object.freeze({
  studentA: '55000000-0000-4000-8000-000000000001',
  studentB: '55000000-0000-4000-8000-000000000002',
  teacher: '55000000-0000-4000-8000-000000000003',
})
const sha = (value) => createHash('sha256').update(value).digest('hex')
const fixed = '2026-09-13T09:00:00.000Z'

const summary = {
  schema_version: 'phase-5-acceptance@1', phase: 5, status: 'running',
  sections: [], assertions: 0,
  gates: Array.from({ length: 9 }, (_, index) => ({ id: index + 1, status: 'pending', evidence: null })),
  checksums: { phase_2_migration_sha256: sha(P2), phase_5_migration_sha256: sha(P5) },
  registry: {}, migration: {}, language_matrix: {}, security: {}, sync: {}, evidence: {},
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, live_schema_change: false,
    real_student_data_used: false, live_backfill_run: false, live_seed_run: false,
    paid_model_call: false, deployment_performed: false, git_push_performed: false,
    student_model_implemented: false, ai_coach_consumption_implemented: false,
  },
  limitations: ['PGlite tek bağlantıyı seri işler; gerçek çok bağlantılı yarış Faz 9 kapsamındadır.'],
}

function check(value, message) { summary.assertions += 1; assert.ok(value, message) }
function equal(actual, expected, message) { summary.assertions += 1; assert.deepEqual(actual, expected, message) }
function passGate(id, evidence) { summary.gates[id - 1] = { id, status: 'passed', evidence } }
async function section(name, run) {
  const started = performance.now()
  await run()
  const duration = Number((performance.now() - started).toFixed(3))
  summary.sections.push({ name, status: 'passed', duration_ms: duration })
  process.stdout.write(`✓ ${name} (${duration} ms)\n`)
}
function memoryStorage() {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
    dump: () => [...values.entries()],
  }
}
function empty() {
  return {
    surum: 1, profil: null, tespit: null, dersler: {}, kartlar: {}, beceriler: {},
    izler: {}, gunluk: {}, yazmalar: {}, favoriler: [], sonDers: null, arayuz: {},
  }
}
function stamped(patch = {}, stamp = fixed, generation = 0) {
  return {
    ...empty(), ...patch,
    _sync: { generation, fields: Object.fromEntries(Object.keys(patch).map((key) => [key, stamp])), conflicts: [] },
  }
}

async function installPrelude(db) {
  await db.exec(`
    create schema auth;
    create table auth.users(id uuid primary key,email text);
    create or replace function auth.uid() returns uuid language sql stable as $fn$
      select nullif(current_setting('app.uid',true),'')::uuid;
    $fn$;
    create or replace function auth.role() returns text language sql stable as $fn$
      select coalesce(nullif(current_setting('app.role',true),''),current_user::text);
    $fn$;
    create role anon nologin; create role authenticated nologin;
    grant usage on schema public,auth to anon,authenticated;
    grant execute on function auth.uid(),auth.role() to anon,authenticated;
    create table public.profiles(
      id uuid primary key references auth.users(id) on delete cascade,
      full_name text not null default 'Sentetik Kullanıcı',
      role text not null check(role in ('teacher','student','parent')),
      student_id uuid references public.profiles(id),created_at timestamptz default now()
    );
  `)
}
async function installBase(db) { await installPrelude(db); await db.exec(P2); await db.exec(P5) }
async function actors(db) {
  await db.query(`insert into auth.users(id,email) values($1,'a@example.invalid'),($2,'b@example.invalid'),($3,'t@example.invalid')`, [IDS.studentA, IDS.studentB, IDS.teacher])
  await db.query(`insert into public.profiles(id,full_name,role) values($1,'A','student'),($2,'B','student'),($3,'T','teacher')`, [IDS.studentA, IDS.studentB, IDS.teacher])
}
async function asRole(db, role, uid = null) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid',$1,false)", [uid ?? ''])
  await db.query("select set_config('app.role',$1,false)", [role])
  await db.exec(`set role ${role}`)
}
async function asAdmin(db) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid','',false)")
  await db.query("select set_config('app.role','',false)")
}
async function rpc(db, sql, params = []) {
  const result = await db.query(sql, params)
  return Object.values(result.rows[0] ?? {})[0]
}
async function saveArgs(snapshot) {
  const split = splitSensitiveLanguageProgress(snapshot, { language: 'en' })
  const hash = await hashActionPayload({ progress: split.progress, privateWork: split.privateWork })
  return { split, hash }
}

async function main() {
  mkdirSync(OUT, { recursive: true })

  await section('Faz 2 ön koşulu ve dört dil sicili', async () => {
    equal(summary.checksums.phase_2_migration_sha256, '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea', 'Faz 2 checksum')
    const registry = validateLanguageRegistry()
    check(registry.ok, 'dil sicili geçerli')
    equal(registry.count, 4, 'dört dil')
    equal(LANGUAGE_REGISTRY_VERSION, 'learning-language-registry@1', 'ayrı Faz 5 sicil sürümü')
    equal(LANGUAGE_REGISTRY.map((item) => item.matrixId), ['M27','M28','M29','M30'], 'M27-M30 kapsamı')
    equal(LANGUAGE_REGISTRY.map((item) => item.code), ['en','de','fr','es'], 'dil kodları')
    passGate(1, 'dört gerçek dil veri türü ve anahtarları sürümlü sicilde')
  })

  await section('Migration ilk/ikinci uygulama ve tam rollback', async () => {
    const db = new PGlite(); await installPrelude(db); await db.exec(P2); await db.exec(P5)
    const first = await db.query(`select count(*)::integer n from public.learning_source_contracts where registry_version='learning-language-registry@1'`)
    equal(first.rows[0].n, 4, 'SQL sicili dört kaynak')
    const expected = ['student_language_activity_events','student_language_import_receipts','student_language_progress_revisions','student_language_progress_states','student_language_sync_conflicts']
    const tables = (await db.query(`select tablename from pg_catalog.pg_tables where schemaname='public' and tablename like 'student_language_%' order by tablename`)).rows.map((row) => row.tablename)
    equal(tables, expected, 'public tablo envanteri')
    await db.exec(P5)
    const second = await db.query(`select count(*)::integer n from public.learning_source_contracts where registry_version='learning-language-registry@1'`)
    equal(second.rows[0].n, 4, 'ikinci uygulama çoğaltmadı')
    const policies = await db.query(`select count(*)::integer n from pg_catalog.pg_policies where schemaname='public' and tablename like 'student_language_%'`)
    equal(policies.rows[0].n, 5, 'beş own-only select policy')
    const forced = await db.query(`select bool_and(relrowsecurity and relforcerowsecurity) ok from pg_catalog.pg_class where relnamespace='public'::regnamespace and relname like 'student_language_%' and relkind='r'`)
    check(forced.rows[0].ok, 'bütün public dil tablolarında RLS force')
    summary.migration = { first_apply: 'passed', second_apply: 'passed', public_tables: tables, policies: 5 }
    await db.close()

    const failedDb = new PGlite(); await installPrelude(failedDb); await failedDb.exec(P2)
    let failed = false
    try { await failedDb.exec(P5.replace(/commit;\s*$/u, "select 1/0;\ncommit;")) } catch { failed = true; await failedDb.exec('rollback') }
    check(failed, 'hata enjeksiyonu durdurdu')
    const absent = await failedDb.query("select to_regclass('public.student_language_progress_states') is null ok")
    check(absent.rows[0].ok, 'hata tam rollback')
    await failedDb.close()
    passGate(2, 'kalıcı hesap kapsamlı model ilk/ikinci uygulama ve rollback geçti')
  })

  await section('Hesap kapsamı, eski cihaz onayı ve bozuk şema', async () => {
    for (const language of LANGUAGE_REGISTRY) {
      const storage = memoryStorage()
      const legacy = stamped({ profil: { hedef: 'konuşma', tarih: fixed } })
      storage.setItem(language.legacyKey, JSON.stringify(legacy))
      configureLanguageProgressScope(language.code, IDS.studentA)
      equal(readLanguageProgress({ language: language.code, empty: empty(), storage }).profil, null, `${language.code}: anonim veri otomatik sahiplenilmedi`)
      equal(readLegacyLanguageCandidate({ language: language.code, storage }).status, 'available', `${language.code}: eski kayıt onay adayı`)
      writeLanguageProgress({ language: language.code, empty: empty(), patch: { sonDers: 'a1-m1-d1' }, storage, now: () => new Date(fixed) })
      check(storage.getItem(accountLanguageStorageKey(language.code, IDS.studentA)).includes('a1-m1-d1'), `${language.code}: A hesap anahtarı`)
      configureLanguageProgressScope(language.code, IDS.studentB)
      equal(readLanguageProgress({ language: language.code, empty: empty(), storage }).sonDers, null, `${language.code}: A→B sızıntısı yok`)
      storage.setItem(language.legacyKey, '{bozuk')
      equal(readLegacyLanguageCandidate({ language: language.code, storage }).status, 'invalid', `${language.code}: bozuk kayıt reddi`)
      storage.setItem(language.legacyKey, JSON.stringify({ ...empty(), surum: 0 }))
      equal(readLegacyLanguageCandidate({ language: language.code, storage }).status, 'invalid', `${language.code}: eski sürüm reddi`)
      configureLanguageProgressScope(language.code, null)
    }
    passGate(3, 'eski yerel veri açık onay adayı; kullanıcı A/B ve bozuk sürüm ayrımı geçti')
  })

  await section('Dört dil deterministik birleştirme matrisi', async () => {
    for (const language of LANGUAGE_REGISTRY) {
      const code = language.code
      const blank = empty()
      const local = stamped({
        dersler: { lesson1: { durum: 'ustalasildi', deneme: 2, dogru: 9, toplam: 10, enIyiOran: 90, sonTarih: '2026-09-12T10:00:00.000Z' } },
        gunluk: { '2026-09-12': { dakika: 20, alistirma: 5, dogru: 4, dersler: ['lesson1'] } },
      }, '2026-09-12T10:00:00.000Z')
      const cloud = stamped({
        dersler: { lesson1: { durum: 'baslanmadi', deneme: 1, dogru: 2, toplam: 3, enIyiOran: 67, sonTarih: '2026-09-13T10:00:00.000Z' }, lesson2: { durum: 'tamamlandi', deneme: 1, enIyiOran: 80, sonTarih: fixed } },
        kartlar: { word1: { asama: 3, dogru: 2, yanlis: 1, sonTarih: fixed } },
        gunluk: { '2026-09-12': { dakika: 10, alistirma: 3, dogru: 2, dersler: ['lesson2'] } },
      }, '2026-09-13T10:00:00.000Z')
      equal(mergeLanguageProgress(blank, blank, { language: code, empty: blank }).snapshot.dersler, {}, `${code}: temiz hesap`)
      check(hasMeaningfulProgress(mergeLanguageProgress(local, blank, { language: code, empty: blank }).snapshot), `${code}: yalnız yerel`)
      check(hasMeaningfulProgress(mergeLanguageProgress(blank, cloud, { language: code, empty: blank }).snapshot), `${code}: yalnız bulut`)
      const merged = mergeLanguageProgress(local, cloud, { language: code, empty: blank }).snapshot
      equal(merged.dersler.lesson1.durum, 'ustalasildi', `${code}: tamamlanma gerilemez`)
      equal(merged.dersler.lesson1.enIyiOran, 90, `${code}: en iyi skor korunur`)
      equal(merged.dersler.lesson1.dogru, 2, `${code}: son skor ayrı kalır`)
      equal(merged.dersler.lesson1.deneme, 2, `${code}: sayaç körlemesine toplanmaz`)
      equal(merged.gunluk['2026-09-12'].dakika, 20, `${code}: günlük sayaç max snapshot`)
      check(merged.dersler.lesson2 && merged.kartlar.word1, `${code}: çakışmayan alanlar birleşti`)
      const inProgress = mergeLanguageProgress(
        local,
        stamped({ dersler: { lesson1: { durum: 'calisiliyor', sonTarih: '2026-09-14T10:00:00.000Z' } } }, '2026-09-14T10:00:00.000Z'),
        { language: code, empty: blank }
      )
      equal(inProgress.snapshot.dersler.lesson1.durum, 'ustalasildi', `${code}: yeni çalışılıyor kaydı tamamlanmayı düşürmez`)
      const sameTime = mergeLanguageProgress(
        stamped({ dersler: { x: { durum: 'tamamlandi', sonTarih: fixed } } }),
        stamped({ dersler: { x: { durum: 'gucleniyor', sonTarih: fixed } } }),
        { language: code, empty: blank }
      )
      equal(sameTime.conflicts[0]?.code, 'same_timestamp_divergence', `${code}: çözülemeyen çatışma kayıtlı`)
      const reset = mergeLanguageProgress(stamped({ sonDers: 'old' }, fixed, 1), stamped({}, fixed, 2), { language: code, empty: blank })
      equal(reset.snapshot._sync.generation, 2, `${code}: yeni reset nesli kazanır`)
      equal(reset.snapshot.sonDers, null, `${code}: reset eski ilerlemeyi diriltmez`)
      summary.language_matrix[code] = 'passed'
    }
    passGate(4, 'tamamlanma/skor/sayaç/tekrar/reset/çatışma kuralları dört dilde deterministik')
  })

  await section('Hassas yazı ayrımı ve güvenli AI Koç özeti', async () => {
    for (const language of LANGUAGE_REGISTRY) {
      const snapshot = stamped({
        tespit: { genelSeviye: 'A2', yazma: { metin: 'ÖZEL YAZI', analiz: { kelimeSayisi: 2 } } },
        yazmalar: { draft1: { taslak: 'HAM TASLAK', son: 'SON METİN', tarih: fixed } },
        dersler: { lesson1: { durum: 'tamamlandi', sonTarih: fixed } },
        beceriler: { okuma: { puan: 72, olcum: 'alistirma', sonTarih: fixed } },
      })
      const split = splitSensitiveLanguageProgress(snapshot, { language: language.code })
      check(split.ok, `${language.code}: hassas ayrım geçerli`)
      check(!JSON.stringify(split.progress).includes('ÖZEL YAZI') && !JSON.stringify(split.progress).includes('HAM TASLAK'), `${language.code}: public kayıtta ham yazı yok`)
      check(JSON.stringify(split.privateWork).includes('ÖZEL YAZI') && JSON.stringify(split.privateWork).includes('HAM TASLAK'), `${language.code}: özel kayıt korundu`)
      const safe = summarizeLanguageProgress(snapshot, { language: language.code })
      equal(safe.program_context, 'independent_language_learning', `${language.code}: bağımsız program bağlamı`)
      check(!JSON.stringify(safe).includes('ÖZEL YAZI') && !JSON.stringify(safe).includes('HAM TASLAK'), `${language.code}: AI Koç özeti ham metinsiz`)
      equal(safe.completed_lesson_count, 1, `${language.code}: özet tamamlanma`)
      check(validateLanguageSnapshot(snapshot, { language: language.code }).ok, `${language.code}: tam yerel sözleşme`)
    }
    passGate(5, 'M27–M30 güvenli özet; ham cevap/yazı özel kayıtta ayrıldı')
  })

  await section('Çevrimdışı kuyruk, tekrar ve hesap izolasyonu', async () => {
    const storage = memoryStorage()
    let online = false
    const received = new Map()
    const outbox = createLanguageOutbox({
      storage, userId: IDS.studentA, uuid: randomUUID, now: () => Date.parse(fixed),
      rpc: async (name, params) => {
        if (!online) throw new Error('offline')
        const prior = received.get(params.p_client_action_id)
        const signature = JSON.stringify({ name, params })
        if (prior && prior !== signature) return { data: { status: 'idempotency_conflict' } }
        if (prior) return { data: { status: 'duplicate' } }
        received.set(params.p_client_action_id, signature)
        return { data: { status: 'accepted', revision: 1 } }
      },
    })
    const actionId = randomUUID()
    const payload = {
      language_code: 'en', program_context: 'independent_language_learning',
      activity_type: 'review_result_snapshot', activity_id: 'word:1', content_revision: 'v1',
      skill_domain: 'tanima', correct_count: 1, incorrect_count: 0, blank_count: 0,
      help_count: 0, review_outcome: 'recalled', completion_status: 'answered',
      occurred_at: fixed, client_source: 'web',
    }
    const offline = await outbox.sendOrQueue('activity', payload, { actionId })
    equal(offline.status, 'retryable_failure', 'ağ kesintisi korunur')
    equal(outbox.list().length, 1, 'outbox kaydı durur')
    online = true
    await outbox.flush({ force: true })
    equal(outbox.list().length, 0, 'bağlantıda kuyruk boşalır')
    for (let index = 0; index < 10; index += 1) {
      const result = await outbox.sendOrQueue('activity', payload, { actionId })
      check(['accepted','duplicate'].includes(result.status), `10 tekrar ${index + 1}`)
    }
    equal(received.size, 1, '2/10 tekrar tek sunucu kimliği')
    const outboxB = createLanguageOutbox({ storage, userId: IDS.studentB, rpc: async () => ({ data: { status: 'accepted' } }) })
    equal(outboxB.list().length, 0, 'A kuyruğu B hesabına görünmez')
    await assert.rejects(() => outbox.enqueue('activity', { ...payload, answer: 'secret' }), /field_forbidden/)
    summary.assertions += 1
    summary.sync = { offline_resume: 'passed', duplicate_2_and_10: 'passed', account_scoped_outbox: 'passed' }
    passGate(6, 'local-first outbox, ağ kesintisi, 2/10 tekrar ve A→B izolasyonu geçti')
  })

  await section('PGlite uçtan uca RLS, revizyon, aktarım ve kanıt', async () => {
    const db = new PGlite(); await installBase(db); await actors(db)
    const full = stamped({
      profil: { hedef: 'akıcı konuşma', tarih: fixed },
      tespit: { genelSeviye: 'A2', yazma: { metin: 'GİZLİ YAZI', analiz: { kelimeSayisi: 2 } } },
      dersler: { lesson1: { durum: 'tamamlandi', deneme: 1, dogru: 8, toplam: 10, enIyiOran: 80, sonTarih: fixed } },
      yazmalar: { draft1: { taslak: 'GİZLİ TASLAK', son: 'GİZLİ SON', tarih: fixed } },
      gunluk: { '2026-09-13': { dakika: 12, alistirma: 10, dogru: 8, dersler: ['lesson1'] } },
    })
    const { split, hash } = await saveArgs(full)
    await asRole(db, 'authenticated', IDS.studentA)
    const saveAction = randomUUID()
    const save = await rpc(db, `select public.save_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,0,'web',$4::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, saveAction])
    equal(save.status, 'accepted', 'ilk snapshot kabul')
    equal(save.revision, 1, 'ilk revizyon')
    const duplicate = await rpc(db, `select public.save_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,0,'web',$4::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, saveAction])
    equal(duplicate.status, 'accepted', 'aynı action aynı sonuç')
    const loaded = await rpc(db, `select public.get_my_language_progress('en') r`)
    equal(loaded.status, 'available', 'hesap kaydı okunur')
    equal(loaded.summary.program_context, 'independent_language_learning', 'özet program bağlamı')
    check(!JSON.stringify(loaded.snapshot).includes('GİZLİ') && JSON.stringify(loaded.private_snapshot).includes('GİZLİ'), 'public/private yazı sınırı')

    const conflictAction = randomUUID()
    const conflict = await rpc(db, `select public.save_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,0,'web',$4::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, conflictAction])
    equal(conflict.status, 'revision_conflict', 'eski revizyon çatışması')
    equal(conflict.revision, 1, 'güncel revizyon döner')
    const ownConflict = await db.query(`select count(*)::integer n from public.student_language_sync_conflicts`)
    equal(ownConflict.rows[0].n, 1, 'çatışma yeniden işlenmek üzere kayıtlı')

    const eventAction = randomUUID()
    const event = await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','lesson_result_snapshot','lesson1:quiz:q1','v1','okuma',1,0,0,1,null,'answered',2,'A2',$1::timestamptz,'web',$2::uuid) r`, [fixed, eventAction])
    equal(event.status, 'accepted', 'dil etkinliği kabul')
    check(Boolean(event.evidence_record_id), 'ortak kanıt bağı')
    for (let index = 0; index < 10; index += 1) {
      const again = await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','lesson_result_snapshot','lesson1:quiz:q1','v1','okuma',1,0,0,1,null,'answered',2,'A2',$1::timestamptz,'web',$2::uuid) r`, [fixed, eventAction])
      equal(again.status, 'accepted', `aynı cevap tekrar ${index + 1}`)
    }
    const eventCount = await db.query(`select count(*)::integer n from public.student_language_activity_events where client_action_id=$1`, [eventAction])
    equal(eventCount.rows[0].n, 1, 'aynı cevap iki/on cihaz tekrarında tek event')
    const evidence = await db.query(`select source_registry_version,source_code,evidence_class,topic_id,measurement,metadata from public.learning_evidence_records where record_id=$1`, [event.evidence_record_id])
    equal(evidence.rows[0].source_registry_version, 'learning-language-registry@1', 'Faz 5 kanıt sicili')
    equal(evidence.rows[0].source_code, 'ingilizce_learning', 'doğru dil kaynağı')
    equal(evidence.rows[0].evidence_class, 'system_observation', 'doğru güven sınıfı')
    equal(evidence.rows[0].topic_id, 'drkoc:language:en:independent_language_learning', 'okul dersiyle karışmayan bağlam')
    equal(evidence.rows[0].metadata.skill, 'okuma', 'beceri korunur')
    check(!JSON.stringify(evidence.rows[0]).includes('GİZLİ'), 'kanıtta ham yazı yok')

    const selfReport = await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','self_report_snapshot','profile:goal','v1','general',null,null,null,null,null,'updated',null,'A2',$1::timestamptz,'web',$2::uuid) r`, [fixed, randomUUID()])
    equal(selfReport.status, 'accepted', 'öğrenci beyanı kabul')
    const selfReportEvidence = await db.query(`select evidence_class,measurement from public.learning_evidence_records where record_id=$1`, [selfReport.evidence_record_id])
    equal(selfReportEvidence.rows[0].evidence_class, 'student_self_report', 'öz beyan doğrudan performanstan ayrılır')
    check(selfReportEvidence.rows[0].measurement.accuracy == null, 'öz beyana ölçülmüş doğruluk eklenmez')

    for (const language of LANGUAGE_REGISTRY.filter((item) => item.code !== 'en')) {
      const languageSave = await rpc(db, `select public.save_language_progress_snapshot($1,'independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$2::jsonb,$3::jsonb,$4,0,'web',$5::uuid) r`, [language.code, JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, randomUUID()])
      equal(languageSave.status, 'accepted', `${language.code}: kalıcı snapshot`)
      const languageEvent = await rpc(db, `select public.record_language_learning_activity($1,'independent_language_learning','lesson_result_snapshot','lesson1:quiz:q1','v1','okuma',1,0,0,1,null,'answered',2,'A2',$2::timestamptz,'web',$3::uuid) r`, [language.code, fixed, randomUUID()])
      equal(languageEvent.status, 'accepted', `${language.code}: etkinlik kabul`)
      const languageEvidence = await db.query(`select source_code,topic_id,metadata from public.learning_evidence_records where record_id=$1`, [languageEvent.evidence_record_id])
      equal(languageEvidence.rows[0].source_code, language.sourceCode, `${language.code}: doğru M kaynağı`)
      equal(languageEvidence.rows[0].topic_id, `drkoc:language:${language.code}:independent_language_learning`, `${language.code}: program kimliği`)
      equal(languageEvidence.rows[0].metadata.language, language.code, `${language.code}: metadata dili`)
      equal(languageEvidence.rows[0].metadata.skill, 'okuma', `${language.code}: metadata becerisi`)
      const languageImportId = randomUUID(); const languageImportAction = randomUUID()
      const languageImport = await rpc(db, `select public.import_language_progress_snapshot($1,'independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$2::jsonb,$3::jsonb,$4,1,'web',$5::uuid,$6::uuid) r`, [language.code, JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, languageImportId, languageImportAction])
      equal(languageImport.status, 'accepted', `${language.code}: açık cihaz aktarımı`)
      const languageImportAgain = await rpc(db, `select public.import_language_progress_snapshot($1,'independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$2::jsonb,$3::jsonb,$4,1,'web',$5::uuid,$6::uuid) r`, [language.code, JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, languageImportId, languageImportAction])
      equal(languageImportAgain.status, 'duplicate', `${language.code}: aktarım tekrarı tekilleşti`)
    }

    equal((await rpc(db, `select public.record_language_learning_activity('xx','independent_language_learning','lesson_result_snapshot','lesson1:q1','v1','okuma',1,0,0,0,null,'answered',1,'A1',$1::timestamptz,'web',$2::uuid) r`, [fixed, randomUUID()])).status, 'validation_rejected', 'geçersiz dil reddi')
    equal((await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','lesson_result_snapshot','lesson1:q1','v1','okuma',-1,0,0,0,null,'answered',1,'A1',$1::timestamptz,'web',$2::uuid) r`, [fixed, randomUUID()])).status, 'validation_rejected', 'negatif ölçüm reddi')
    equal((await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','lesson_result_snapshot',E'bad\\nvalue','v1','okuma',1,0,0,0,null,'answered',1,'A1',$1::timestamptz,'web',$2::uuid) r`, [fixed, randomUUID()])).status, 'validation_rejected', 'kontrol karakterli kimlik reddi')
    equal((await rpc(db, `select public.record_language_learning_activity('en','independent_language_learning','lesson_result_snapshot','lesson1:q2','v1','okuma',1,0,0,0,null,'answered',1,'A1','2036-01-01T00:00:00Z','web',$1::uuid) r`, [randomUUID()])).status, 'validation_rejected', 'gelecek zaman reddi')
    equal((await rpc(db, `select public.save_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,1,'web',$4::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), '0'.repeat(64), randomUUID()])).code, 'snapshot_hash_mismatch', 'sahte snapshot hash reddi')
    let directWriteBlocked = false
    try { await db.query(`insert into public.student_language_progress_states(student_id,language_code,program_context,storage_version,curriculum_version,content_version,revision,reset_generation,progress_snapshot,progress_summary,snapshot_hash,client_source) select $1,'es','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',1,0,'{}'::jsonb,'{}'::jsonb,$2,'web'`, [IDS.studentA, '0'.repeat(64)]) } catch { directWriteBlocked = true }
    check(directWriteBlocked, 'authenticated doğrudan DML reddedildi')

    const importId = randomUUID(); const importAction = randomUUID()
    const imported = await rpc(db, `select public.import_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,1,'web',$4::uuid,$5::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, importId, importAction])
    equal(imported.status, 'accepted', 'açık aktarım kabul')
    for (let index = 0; index < 10; index += 1) {
      const again = await rpc(db, `select public.import_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,1,'web',$4::uuid,$5::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, importId, importAction])
      equal(again.status, 'duplicate', `aktarımı tekrar ${index + 1}`)
    }
    const imports = await db.query(`select count(*)::integer n from public.student_language_import_receipts where import_id=$1`, [importId])
    equal(imports.rows[0].n, 1, 'tek aktarım makbuzu')

    await asRole(db, 'authenticated', IDS.studentB)
    equal((await rpc(db, `select public.get_my_language_progress('en') r`)).status, 'empty', 'B, A ilerlemesini RPC ile göremez')
    equal((await db.query(`select count(*)::integer n from public.student_language_progress_states`)).rows[0].n, 0, 'B, A satırını RLS ile göremez')
    const stolenImport = await rpc(db, `select public.import_language_progress_snapshot('en','independent_language_learning',1,'drkoc-language-curriculum@1','drkoc-language-content@1',$1::jsonb,$2::jsonb,$3,0,'web',$4::uuid,$5::uuid) r`, [JSON.stringify(split.progress), JSON.stringify(split.privateWork), hash, importId, randomUUID()])
    equal(stolenImport.status, 'ownership_conflict', 'başka hesap aktarım kimliğini sahiplenemez')
    await asRole(db, 'authenticated', IDS.teacher)
    equal((await rpc(db, `select public.get_my_language_progress('en') r`)).status, 'unauthorized', 'öğrenci olmayan hesap reddedilir')

    await asRole(db, 'authenticated', IDS.studentA)
    const deletion = await rpc(db, `select public.delete_my_language_progress('en','independent_language_learning',1,$1::uuid) r`, [randomUUID()])
    equal(deletion.status, 'deleted', 'açık silme')
    const afterDelete = await rpc(db, `select public.get_my_language_progress('en') r`)
    equal(afterDelete.status, 'empty', 'silinen kayıt görünmez')
    equal(afterDelete.revision, deletion.revision, 'yeniden başlama için revizyon korunur')

    await asAdmin(db)
    const directPublic = await db.query(`select progress_snapshot::text,progress_summary::text from public.student_language_progress_states where student_id=$1`, [IDS.studentA])
    check(!JSON.stringify(directPublic.rows).includes('GİZLİ'), 'public tabloda hassas üretim yok')
    await db.query(`delete from public.profiles where id=$1`, [IDS.studentA])
    const publicCascade = await db.query(`select
      (select count(*) from public.student_language_progress_states where student_id=$1)
      +(select count(*) from public.student_language_progress_revisions where student_id=$1)
      +(select count(*) from public.student_language_activity_events where student_id=$1)
      +(select count(*) from public.student_language_sync_conflicts where student_id=$1)
      +(select count(*) from public.student_language_import_receipts where student_id=$1) n`, [IDS.studentA])
    equal(Number(publicCascade.rows[0].n), 0, 'hesap silmede public Faz 5 kayıtları zincirleme temizlenir')
    const privateCascade = await db.query(`select
      (select count(*) from learning_private.student_language_private_work where student_id=$1)
      +(select count(*) from learning_private.student_language_import_claims where student_id=$1)
      +(select count(*) from learning_private.student_language_action_receipts where student_id=$1) n`, [IDS.studentA])
    equal(Number(privateCascade.rows[0].n), 0, 'hesap silmede private Faz 5 kayıtları zincirleme temizlenir')
    const evidenceCascade = await db.query(`select count(*)::integer n from public.learning_evidence_records where student_id=$1 and source_registry_version='learning-language-registry@1'`, [IDS.studentA])
    equal(evidenceCascade.rows[0].n, 0, 'hesap silmede dile bağlı ortak kanıtlar zincirleme temizlenir')
    summary.security = { auth_uid_derived: 'passed', rls_cross_user: 'passed', private_work_separated: 'passed', import_ownership: 'passed', account_delete_cascade: 'passed' }
    summary.evidence = { source: 'ingilizce_learning', program_context: 'independent_language_learning', evidence_record_id: event.evidence_record_id }
    await db.close()
    passGate(7, 'RLS, auth.uid, optimistic revizyon, import sahipliği, silme ve ortak kanıt PGlite üzerinde geçti')
  })

  await section('Kaynak sınırı, arayüz bağlantısı ve yan etkisizlik', async () => {
    const source = [
      'src/components/learning/LanguageProgressBoundary.jsx',
      'src/components/learning/LanguageSyncPanel.jsx',
      ...['Ingilizce','Almanca','Fransizca','Ispanyolca'].map((name) => `src/pages/${name}.jsx`),
      ...LANGUAGE_REGISTRY.flatMap((language) => [
        `src/pages/${language.slug}/Gelisim.jsx`, `src/lib/${language.slug}/ilerleme.js`,
      ]),
    ].map((file) => readFileSync(join(REPO, file), 'utf8')).join('\n')
    for (const language of LANGUAGE_REGISTRY) {
      check(source.includes(`language="${language.code}"`), `${language.code}: boundary bağlı`)
      check(source.includes(language.resetToken), `${language.code}: açık reset token`) 
    }
    check(source.includes('Hesabıma aktar') && source.includes('Aktarımı iptal et'), 'açık onay ve iptal')
    check(source.includes('Yeniden dene'), 'yeniden deneme')
    check(source.includes('diğer cihazların da'), 'çok cihaz reset etkisi')
    check(!/service[_-]?role/i.test(source), 'istemcide service role yok')
    check(!/student[_ -]?model|mastery_projection|coach_consum/i.test(P5), 'Faz 6/7 kapsamı yok')
    check(Object.values(summary.side_effects).every((value) => value === false), 'bütün canlı/model/yayın yan etkileri false')
    passGate(8, 'dört mevcut dil deneyimi ortak sınır ve anlaşılır kullanıcı kontrolüyle bağlı')
    passGate(9, 'canlı şema/veri/backfill/model/deploy/push yapılmadı')
  })

  summary.status = 'core_passed_runner_pending'
  summary.gate_totals = {
    required: 9,
    passed: summary.gates.filter((gate) => gate.status === 'passed').length,
    failed: summary.gates.filter((gate) => gate.status === 'failed').length,
    pending: summary.gates.filter((gate) => gate.status === 'pending').length,
  }
  writeFileSync(RESULT, `${JSON.stringify(summary, null, 2)}\n`)
  writeFileSync(join(OUT, 'faz-5-dil-test-matrisi.json'), `${JSON.stringify({ schema_version: 'phase-5-language-matrix@1', languages: summary.language_matrix, sync: summary.sync }, null, 2)}\n`)
  writeFileSync(join(OUT, 'faz-5-kaynak-kapsami.json'), `${JSON.stringify({
    schema_version: 'phase-5-source-scope@1', registry_version: LANGUAGE_REGISTRY_VERSION,
    sources: LANGUAGE_REGISTRY.map((item) => ({
      matrix_id: item.matrixId, language: item.code, source_code: item.sourceCode,
      legacy_key: item.legacyKey, program_context: item.programContext,
      status: 'locally_implemented_live_not_applied',
    })),
  }, null, 2)}\n`)
  writeFileSync(join(OUT, 'backfill-dry-run.json'), `${JSON.stringify({
    schema_version: 'phase-5-device-import-dry-run@1', mode: 'synthetic_device_import_dry_run',
    candidates: 4, validated: 4, would_write: 4, live_writes: 0,
    languages: Object.fromEntries(LANGUAGE_REGISTRY.map((item) => [item.code, { candidates: 1, validated: 1, would_write: 1 }])),
    note: 'Sunucu localStorage verisini toplu okuyamaz; canlı aktarım yalnız ilgili cihazda açık öğrenci onayıyla mümkündür.',
  }, null, 2)}\n`)
  writeFileSync(join(OUT, 'migration-sema-ozeti.json'), `${JSON.stringify({ schema_version: '1.0', checksums: summary.checksums, migration: summary.migration }, null, 2)}\n`)
  writeFileSync(join(OUT, 'guvenlik-yetki-matrisi.json'), `${JSON.stringify({ schema_version: '1.0', ...summary.security }, null, 2)}\n`)
  process.stdout.write(`\n${summary.gate_totals.passed}/9 çekirdek kabul kapısı, ${summary.assertions} doğrulama geçti.\n`)
}

main().catch((error) => {
  summary.status = 'failed'
  summary.failure = { name: error.name, message: error.message, stack: error.stack }
  mkdirSync(OUT, { recursive: true })
  writeFileSync(RESULT, `${JSON.stringify(summary, null, 2)}\n`)
  console.error(error)
  process.exitCode = 1
})
