import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const repo = fileURLToPath(new URL('..', import.meta.url))
const root = join(repo, 'LGS_Turkce_Testleri')
const output = join(repo, 'src', 'generated', 'lgsQuestionAvailability.js')
const entries = []

for (const entry of await readdir(root, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.json')) continue
  const match = /^(Kolay|Orta|Zor)_Test_(\d+)\.json$/u.exec(entry.name)
  if (!match) continue
  const path = join(entry.parentPath, entry.name)
  let raw
  try {
    raw = JSON.parse(await readFile(path, 'utf8'))
  } catch {
    continue
  }
  const questions = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.sorular)
      ? raw.sorular
      : Array.isArray(raw?.questions)
        ? raw.questions
        : null
  if (!questions?.length) continue
  entries.push({
    folder: relative(root, entry.parentPath).replaceAll('\\', '/'),
    level: match[1],
    test: Number(match[2]),
    question_count: questions.length,
  })
}

entries.sort((a, b) => `${a.folder}|${a.level}|${String(a.test).padStart(3, '0')}`.localeCompare(`${b.folder}|${b.level}|${String(b.test).padStart(3, '0')}`))
await mkdir(dirname(output), { recursive: true })
await writeFile(
  output,
  `// Bu dosya scripts/build-lgs-question-availability.mjs tarafından üretilir.\nexport default Object.freeze(${JSON.stringify({ schema_version: '1.0', entries }, null, 2)})\n`,
)
process.stdout.write(`LGS kullanılabilirlik kaydı: ${entries.length} geçerli dosya.\n`)
