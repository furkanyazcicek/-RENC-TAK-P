/**
 * DERSLERİ VERİTABANINA YAZAR
 *
 * Kayıt defterindeki (`src/content/lessons/index.js`) bütün dersleri
 * okur, şemadan geçirir ve `structured_lessons` tablosuna yazar.
 *
 * KULLANIM
 *   node scripts/seed-lessons.mjs                 → hepsini yazar
 *   node scripts/seed-lessons.mjs --dry           → hiçbir şey yazmaz, planı gösterir
 *   node scripts/seed-lessons.mjs --slug=<slug>   → yalnızca bir dersi yazar
 *   SUPABASE_DB_PASSWORD=... node scripts/seed-lessons.mjs
 *
 * GÜVENLİK KURALLARI
 *
 * · Konu BULUNAMAZSA ders atlanır, yeni konu OLUŞTURULMAZ. Sebebi acı bir
 *   deneyim: bir dersin yerleşimi "AYT > Biyoloji > Hücre" yazıyordu ama
 *   AYT Biyoloji'de öyle bir konu yok (Hücre TYT'de). Betik eskiden
 *   eksik konuyu kendisi ekliyordu ve müfredat ağacına gerçekte olmayan
 *   bir başlık sessizce giriyordu. Artık uyarıp geçiyor.
 *
 * · Tekrar çalıştırmak güvenlidir: aynı başlıklı ve öğrenme modlu ders varsa üzerine yazar
 *   ve yeni bir revizyon ekler; eski sürüm `structured_lesson_revisions`
 *   içinde durmaya devam eder.
 *
 * · Şema doğrulamasından geçmeyen ders yazılmaz.
 */

import { createInterface } from 'node:readline'
import pg from 'pg'
import { LESSONS } from '../src/content/lessons/index.js'
import { auditLessonDepth, contentHash, validateLessonDocument } from '../src/lib/lesson/schema.js'

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'aazadigklxnvbtwrtszj'
const REGION = process.env.SUPABASE_REGION || 'eu-central-1'
const HOST = `aws-0-${REGION}.pooler.supabase.com`
const PORT = 5432
const USER = `postgres.${PROJECT_REF}`

const args = process.argv.slice(2)
const dryRun = args.includes('--dry')
const slugFilter = args.find((a) => a.startsWith('--slug='))?.slice(7) ?? null
const passwordArg = args.find((a) => !a.startsWith('--')) ?? null

function ask(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

/** Yazmadan önce her dersi doğrula; bozuk olan hiç sıraya girmesin. */
function prepare() {
  const ready = []
  const rejected = []

  for (const lesson of LESSONS) {
    if (slugFilter && lesson.slug !== slugFilter) continue
    const { document, errors } = validateLessonDocument(lesson.document)
    if (errors.length) {
      rejected.push({ lesson, errors })
      continue
    }
    ready.push({ lesson, document, audit: auditLessonDepth(document, { profile: lesson.qualityProfile }) })
  }

  return { ready, rejected }
}

async function main() {
  const { ready, rejected } = prepare()

  console.log('\n=== DrKoç ders yükleyici ===')
  console.log(`Kayıt defteri: ${LESSONS.length} ders${slugFilter ? ` · filtre: ${slugFilter}` : ''}\n`)

  ready.forEach(({ lesson, audit }) => {
    const place = `${lesson.placement.examType} · ${lesson.placement.subject} · ${lesson.placement.topic}`
    console.log(`  ✓ ${lesson.title}`)
    console.log(`    ${place} · sıra ${lesson.order ?? 0}`)
    console.log(`    ${audit.words.toLocaleString('tr-TR')} kelime · ${audit.sections} bölüm · puan ${audit.score}/100`)
    if (audit.warnings.length) console.log(`    ⚠ ${audit.warnings.length} derinlik uyarısı`)
  })

  rejected.forEach(({ lesson, errors }) => {
    console.error(`  ✗ ${lesson.title} — şema hatası, yazılmayacak`)
    errors.forEach((error) => console.error(`      ${error}`))
  })

  if (!ready.length) {
    console.error('\n✗ Yazılacak ders yok.\n')
    process.exit(1)
  }

  if (dryRun) {
    console.log('\n(--dry) Veritabanına hiçbir şey yazılmadı.\n')
    return
  }

  const password = passwordArg || process.env.SUPABASE_DB_PASSWORD || (await ask('\nVeritabanı şifresi: '))
  if (!password) {
    console.error('\n✗ Şifre girilmedi.\n')
    process.exit(1)
  }

  const client = new pg.Client({
    host: HOST,
    port: PORT,
    user: USER,
    password,
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 20_000,
  })

  try {
    process.stdout.write('Bağlanılıyor… ')
    await client.connect()
    console.log('✓\n')
  } catch (error) {
    console.log('✗')
    console.error(`\n✗ Bağlanılamadı: ${error?.message ?? error}\n`)
    process.exit(1)
  }

  let written = 0
  let skipped = 0

  try {
    for (const { lesson, document, audit } of ready) {
      const topicId = await findTopic(client, lesson.placement)
      if (!topicId) {
        console.error(`  ✗ ${lesson.title}`)
        console.error(
          `      Konu bulunamadı: ${lesson.placement.examType} > ${lesson.placement.subject} > ${lesson.placement.topic}`
        )
        console.error('      Konu adı kütüphanedekiyle birebir aynı olmalı. Ders atlandı.')
        skipped += 1
        continue
      }

      await client.query('begin')
      try {
        const lessonId = await upsertLesson(client, { lesson, document, audit, topicId })
        await client.query('commit')
        console.log(`  ✓ ${lesson.title}  →  /notlar/ders/${lessonId}`)
        written += 1
      } catch (error) {
        await client.query('rollback')
        console.error(`  ✗ ${lesson.title} — ${error?.message ?? error}`)
        skipped += 1
      }
    }
  } finally {
    await client.end().catch(() => {})
  }

  console.log(`\n${skipped ? '⚠' : '✅'} ${written} ders yazıldı · ${skipped} atlandı\n`)
  process.exitCode = skipped ? 1 : 0
}

async function findTopic(client, placement) {
  const { rows } = await client.query(
    `select t.id
       from library_topics t
       join library_subjects s on s.id = t.subject_id
      where s.exam_type = $1 and s.name = $2 and t.name = $3`,
    [placement.examType, placement.subject, placement.topic]
  )
  return rows[0]?.id ?? null
}

async function upsertLesson(client, { lesson, document, audit, topicId }) {
  const quality = { depth: audit.score, words: audit.words, warnings: audit.warnings.length }
  const hash = contentHash(document)

  const { rows: existing } = await client.query(
    'select id, current_revision from structured_lessons where topic_id = $1 and title = $2 and learning_mode = $3',
    [topicId, lesson.title, lesson.learningMode ?? 'interactive']
  )

  let lessonId
  let revision

  if (existing.length) {
    lessonId = existing[0].id
    revision = existing[0].current_revision + 1
    await client.query(
      `update structured_lessons
          set subtitle = $2, document = $3, status = 'published',
              is_gold_standard = $4, quality_scores = $5, content_hash = $6,
              current_revision = $7, order_index = $8, part_label = $9, learning_mode = $10,
              published_at = coalesce(published_at, now()), updated_at = now()
        where id = $1`,
      [
        lessonId,
        lesson.subtitle ?? null,
        document,
        Boolean(lesson.goldStandard),
        quality,
        hash,
        revision,
        lesson.order ?? 0,
        lesson.partLabel ?? null,
        lesson.learningMode ?? 'interactive',
      ]
    )
  } else {
    revision = 1
    const { rows } = await client.query(
      `insert into structured_lessons
         (topic_id, title, subtitle, document, status, is_gold_standard,
          quality_scores, content_hash, current_revision, order_index, part_label, learning_mode, published_at)
       values ($1, $2, $3, $4, 'published', $5, $6, $7, 1, $8, $9, $10, now())
       returning id`,
      [
        topicId,
        lesson.title,
        lesson.subtitle ?? null,
        document,
        Boolean(lesson.goldStandard),
        quality,
        hash,
        lesson.order ?? 0,
        lesson.partLabel ?? null,
        lesson.learningMode ?? 'interactive',
      ]
    )
    lessonId = rows[0].id
  }

  await client.query(
    `insert into structured_lesson_revisions (lesson_id, revision, document, change_note)
     values ($1, $2, $3, $4)
     on conflict (lesson_id, revision) do nothing`,
    [lessonId, revision, document, `İçerik kayıt defterinden yazıldı (${lesson.slug})`]
  )

  return lessonId
}

main().catch((error) => {
  console.error('\n✗ Beklenmedik hata:', error?.message ?? error)
  process.exit(1)
})
