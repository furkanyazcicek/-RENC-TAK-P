/** Faz 9 üretim paketi sır ve kaynak haritası sızıntı kapısı. */
import assert from 'node:assert/strict'
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-9')
const TEXT_FILE = /\.(?:html|js|css|json|txt|xml|webmanifest)$/i
const FORBIDDEN_NAMES = /SUPABASE_SERVICE_ROLE_KEY|OPENAI_API_KEY|AI_COACH_WRITES_ENABLED|LEARNING_SOURCE_EVENT_OVERRIDES/

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? filesUnder(path) : [path]
  })
}

assert.ok(statSync(DIST).isDirectory(), 'dist üretim paketi bulunamadı')
const files = filesUnder(DIST)
const maps = files.filter((path) => path.endsWith('.map'))
assert.equal(maps.length, 0, 'istemci kaynak haritası yayımlanmamalı')

const textFiles = files.filter((path) => TEXT_FILE.test(path))
const namedLeaks = []
const valueLeaks = []
const secretValues = ['SUPABASE_SERVICE_ROLE_KEY', 'OPENAI_API_KEY']
  .map((key) => process.env[key])
  .filter((value) => typeof value === 'string' && value.length >= 12)

for (const path of textFiles) {
  const content = readFileSync(path, 'utf8')
  if (FORBIDDEN_NAMES.test(content)) namedLeaks.push(relative(ROOT, path))
  if (secretValues.some((value) => content.includes(value))) valueLeaks.push(relative(ROOT, path))
}

assert.deepEqual(namedLeaks, [], 'sunucu sırrı veya bayrak adı istemci paketine sızdı')
assert.deepEqual(valueLeaks, [], 'ortam sırrı istemci paketine sızdı')

mkdirSync(OUT, { recursive: true })
const result = {
  schema_version: 'phase-9-build-security@1',
  generated_at: new Date().toISOString(),
  status: 'passed',
  scanned_files: files.length,
  scanned_text_files: textFiles.length,
  source_maps: maps.length,
  forbidden_name_leaks: namedLeaks.length,
  secret_value_leaks: valueLeaks.length,
  secret_values_recorded: false,
}
writeFileSync(join(OUT, 'uretim-paketi-guvenlik.json'), `${JSON.stringify(result, null, 2)}\n`)
process.stdout.write(`Faz 9 üretim paketi güvenlik kapısı geçti: ${textFiles.length} metin dosyası, 0 sızıntı.\n`)
