/**
 * Faz 10 canlı hedef keşfi — yalnız herkese açık yayın ve şema metadatası.
 *
 * Öğrenci satırı okumaz, kimlik doğrulama oturumu açmaz, yedek/migration
 * oluşturmaz ve canlı yazma yapmaz. Üretim paketindeki Supabase hedefini depo
 * yapılandırmasıyla eşleştirir; public şemada yalnız tablo varlığını limit=0
 * sorgularıyla denetler.
 */
import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { config } from '../api/_lib/config.js'

const ROOT = process.cwd()
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hedef-kesfi.json')
const APP_URL = process.env.DRKOC_PHASE10_PRODUCTION_URL || 'https://www.drkoc.com.tr/'
const TIMEOUT_MS = 15_000

const PHASE_TABLES = Object.freeze([
  { phase: 2, table: 'learning_evidence_records' },
  { phase: 3, table: 'learning_content_revisions' },
  { phase: 4, table: 'learning_academic_media' },
  { phase: 5, table: 'student_language_progress_states' },
  { phase: 6, table: 'student_model_contracts' },
  { phase: 8, table: 'student_coaching_recommendations' },
])

function projectRefFromUrl(value) {
  const host = new URL(value).hostname
  const match = host.match(/^([a-z0-9]{20})\.supabase\.co$/)
  return match?.[1] ?? null
}

async function fetchWithTimeout(url, options = {}) {
  return fetch(url, { ...options, signal: AbortSignal.timeout(TIMEOUT_MS) })
}

async function probeTable(table, headers) {
  const response = await fetchWithTimeout(
    `${config.supabaseUrl}/rest/v1/${table}?select=*&limit=0`,
    { headers },
  )
  const body = await response.text()
  let code = null
  try {
    code = JSON.parse(body)?.code ?? null
  } catch {
    // Başarılı limit=0 yanıtında kod bulunmaz.
  }
  assert.ok(response.status === 200 || (response.status === 404 && code === 'PGRST205'))
  return {
    table,
    http_status: response.status,
    postgrest_code: code,
    present_in_public_schema: response.status === 200,
    row_limit: 0,
  }
}

const expectedProjectRef = projectRefFromUrl(config.supabaseUrl)
assert.ok(expectedProjectRef, 'Depo Supabase hedefi geçerli değil')

const homepageResponse = await fetchWithTimeout(APP_URL)
assert.equal(homepageResponse.status, 200, 'Üretim ana sayfası okunamadı')
const homepage = await homepageResponse.text()
const scriptUrls = [...homepage.matchAll(/<script[^>]+src=["']([^"']+)/g)]
  .map((match) => new URL(match[1], APP_URL).href)
assert.ok(scriptUrls.length > 0, 'Üretim paketinde script bulunamadı')

let matchedAsset = null
let productionProjectRefs = []
for (const scriptUrl of scriptUrls) {
  const response = await fetchWithTimeout(scriptUrl)
  if (!response.ok) continue
  const source = await response.text()
  const refs = [...new Set(
    [...source.matchAll(/([a-z0-9]{20})\.supabase\.co/g)].map((match) => match[1]),
  )]
  if (refs.length > 0) {
    matchedAsset = scriptUrl
    productionProjectRefs = refs
    break
  }
}

assert.ok(matchedAsset, 'Üretim paketinde Supabase hedefi bulunamadı')
assert.deepEqual(productionProjectRefs, [expectedProjectRef], 'Üretim ve depo Supabase hedefi farklı')

const headers = {
  apikey: config.supabaseAnonKey,
  Authorization: `Bearer ${config.supabaseAnonKey}`,
  Accept: 'application/json',
}
const authSettings = await fetchWithTimeout(`${config.supabaseUrl}/auth/v1/settings`, { headers })
assert.equal(authSettings.status, 200, 'Canlı Supabase Auth servisi doğrulanamadı')

const baselineResponse = await fetchWithTimeout(
  `${config.supabaseUrl}/rest/v1/profiles?select=id&limit=0`,
  { headers },
)
assert.equal(baselineResponse.status, 200, 'Canlı temel şema ulaşılamıyor')

const phaseTableProbes = []
for (const definition of PHASE_TABLES) {
  phaseTableProbes.push({
    phase: definition.phase,
    ...(await probeTable(definition.table, headers)),
  })
}
const missingPhaseTables = phaseTableProbes
  .filter((item) => !item.present_in_public_schema)
  .map((item) => item.phase)

const evidence = {
  schema_version: 'phase-10-live-target-discovery@1',
  phase: 10,
  status: 'passed_read_only_live_discovery',
  generated_at: new Date().toISOString(),
  production_deployment: {
    url: APP_URL,
    asset_url: matchedAsset,
    project_ref: expectedProjectRef,
    repository_and_deployment_match: true,
  },
  live_service: {
    auth_settings_http_status: authSettings.status,
    baseline_profiles_schema_http_status: baselineResponse.status,
    reachable: true,
  },
  phase_schema_probes: phaseTableProbes,
  conclusion: {
    live_target_identity_verified: true,
    representative_phase_tables_missing: missingPhaseTables,
    phase_9_private_schema_not_probed_with_publishable_key: true,
    dashboard_access: 'not_checked_by_public_metadata_probe',
    dashboard_access_observed_at: null,
    backup_and_recovery_evidence: 'unverified',
    ready_for_live_write: false,
  },
  live_schema: {
    dashboard_migration_history: 'unverified_by_public_metadata_probe',
    sql_editor_read_only_inventory_completed: false,
    baseline_tables_present: baselineResponse.status === 200,
    representative_phase_tables_present: false,
  },
  backup_and_recovery: {
    latest_scheduled_backup_at: null,
    backup_type: 'unverified_by_public_metadata_probe',
    restore_capability: 'unverified_by_public_metadata_probe',
    recovery_drill_completed: false,
    recovery_test_id: null,
  },
  privacy: {
    query_limit: 0,
    student_rows_requested: false,
    student_rows_read: false,
    auth_session_created: false,
    credentials_logged: false,
  },
  side_effects: {
    live_public_metadata_read: true,
    live_supabase_write: false,
    migration_executed: false,
    backup_created_or_restored: false,
    real_student_data_used: false,
  },
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(evidence, null, 2)}\n`)

console.log('Faz 10 canlı hedef keşfi geçti: üretim ve depo hedefi eşleşiyor.')
console.log(`Canlı temel şema erişilebilir; temsilî Faz tabloları eksik: ${missingPhaseTables.join(', ')}.`)
console.log('Canlı yazma, öğrenci satırı okuma, migration ve yedek işlemi yapılmadı.')
