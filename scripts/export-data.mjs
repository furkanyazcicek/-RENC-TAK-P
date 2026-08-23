/**
 * VERİ DIŞA AKTARMA — Supabase yönetim paneline ihtiyaç duymaz.
 *
 * NEDEN ÇALIŞIR
 * Uygulamadaki ÖĞRETMEN hesabı, RLS politikaları gereği tüm öğrencilerin
 * kayıtlarını okuyabilir:
 *
 *   using (auth.uid() = student_id
 *          or exists (select 1 from profiles
 *                     where id = auth.uid() and role = 'teacher'))
 *
 * Yani Supabase paneline giremesen bile, kendi uygulamana öğretmen olarak
 * giriş yapabildiğin sürece verinin tamamını dışarı alabilirsin.
 *
 * KULLANIM — İKİ YOL
 *
 *   1) Tek satırda (en kolay):
 *        node scripts/export-data.mjs eposta@ornek.com "sifren"
 *
 *      Şifrende boşluk veya özel karakter varsa tırnak içinde yaz.
 *
 *   2) Soru-cevap:
 *        node scripts/export-data.mjs
 *      E-posta ve şifre AYRI AYRI sorulur, her birini yazıp Enter'a bas.
 *
 * Çıktı `backup/` klasörüne JSON olarak yazılır (.gitignore içindedir).
 * Şifre hiçbir dosyaya kaydedilmez.
 */

import { createClient } from '@supabase/supabase-js'
import { mkdir, writeFile } from 'node:fs/promises'
import { createInterface } from 'node:readline'
import path from 'node:path'

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || 'https://aazadigklxnvbtwrtszj.supabase.co'
const SUPABASE_ANON_KEY =
  process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Jo5hJ5JDfbdVgdgfKQutow_HhmFJ_Zq'

/**
 * Dışa aktarılacak tablolar.
 * `mock_exam_subjects` üst tablosuyla birlikte alınır (RLS yetkiyi oradan
 * miras aldığı için tek başına sorgulanamaz).
 */
const TABLES = [
  { name: 'profiles', select: '*' },
  { name: 'daily_logs', select: '*' },
  { name: 'mock_exams', select: '*, mock_exam_subjects(*)' },
  { name: 'exams', select: '*' },
  { name: 'homeworks', select: '*' },
  { name: 'questions', select: '*' },
  { name: 'messages', select: '*' },
  { name: 'library_subjects', select: '*' },
  { name: 'library_topics', select: '*' },
  { name: 'library_notes', select: '*' },
]

/* ------------------------------------------------------------------ */

/**
 * Terminalden tek satır girdi ister.
 *
 * Şifreyi gizlemeye ÇALIŞMIYORUZ: bunun için stdin'i elle kurcalamak
 * gerekiyor ve Windows terminallerinde (Git Bash / mintty) güvenilmez
 * biçimde bozuluyor — kullanıcı ne yazdığını göremeyince akış tıkanıyor.
 * Şifrenin kendi ekranında görünmesi, çalışmayan bir gizlemeye yeğdir.
 */
function ask(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

async function main() {
  console.log('\n=== Dr. Koç — Veri Yedekleme ===')
  console.log(`Sunucu: ${SUPABASE_URL}\n`)

  // Öncelik: komut satırı argümanları → ortam değişkenleri → soru-cevap
  let email = process.argv[2] || process.env.EXPORT_EMAIL || ''
  let password = process.argv[3] || process.env.EXPORT_PASSWORD || ''

  if (!email || !password) {
    console.log('Uygulamaya (Dr. Koç sitesine) girerken kullandığın bilgileri gir.')
    console.log('Supabase panelinin değil — sitenin giriş bilgileri.\n')
    if (!email) email = await ask('E-posta yaz ve Enter: ')
    if (!password) password = await ask('Şifre yaz ve Enter  : ')
    console.log('')
  }

  if (!email || !password) {
    console.error('✗ E-posta veya şifre boş. Şöyle de deneyebilirsin:')
    console.error('  node scripts/export-data.mjs eposta@ornek.com "sifren"\n')
    process.exit(1)
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  process.stdout.write('Giriş yapılıyor… ')
  const { data: auth, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (authError || !auth?.user) {
    console.log('✗')
    console.error(`\n✗ Giriş başarısız: ${authError?.message ?? 'bilinmeyen hata'}`)
    console.error('  drkoc sitesine girerken kullandığın e-posta/şifre olmalı.\n')
    process.exit(1)
  }
  console.log('✓')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', auth.user.id)
    .single()

  console.log(`Hesap: ${profile?.full_name ?? auth.user.email} (${profile?.role ?? '?'})`)
  if (profile?.role !== 'teacher') {
    console.log('⚠ Öğretmen değilsin — RLS gereği yalnızca KENDİ verilerin alınabilir.')
  }
  console.log('')

  const outDir = path.join(process.cwd(), 'backup')
  await mkdir(outDir, { recursive: true })

  const summary = {}
  let total = 0

  for (const table of TABLES) {
    process.stdout.write(`  ${table.name.padEnd(20)}`)

    // 1000 satırlık varsayılan sınırı aşmak için sayfalama
    const rows = []
    const pageSize = 1000
    let from = 0
    let failed = null

    while (true) {
      const { data, error } = await supabase
        .from(table.name)
        .select(table.select)
        .range(from, from + pageSize - 1)

      if (error) {
        failed = error.message
        break
      }
      rows.push(...(data ?? []))
      if (!data || data.length < pageSize) break
      from += pageSize
    }

    if (failed) {
      console.log(`✗ ${failed}`)
      summary[table.name] = { error: failed }
      continue
    }

    await writeFile(path.join(outDir, `${table.name}.json`), JSON.stringify(rows, null, 2), 'utf8')
    console.log(`✓ ${rows.length} kayıt`)
    summary[table.name] = { count: rows.length }
    total += rows.length
  }

  await writeFile(
    path.join(outDir, '_ozet.json'),
    JSON.stringify(
      { exportedAt: new Date().toISOString(), supabaseUrl: SUPABASE_URL, tables: summary },
      null,
      2
    ),
    'utf8'
  )

  await supabase.auth.signOut()

  console.log(`\n✅ Toplam ${total} kayıt kaydedildi:`)
  console.log(`   ${outDir}`)
  console.log('   Bu klasör .gitignore içindedir, kazara commit edilmez.\n')
}

main().catch((error) => {
  console.error('\n✗ Beklenmedik hata:', error?.message ?? error)
  process.exit(1)
})
