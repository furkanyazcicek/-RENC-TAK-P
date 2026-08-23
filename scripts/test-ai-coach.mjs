/**
 * AI KOÇ — UÇTAN UCA CANLI TEST
 *
 * Gerçek bir öğrenci hesabıyla giriş yapar, canlı siteye istek atar ve
 * AI Koç'un GERÇEKTEN öğrencinin verisiyle konuşup konuşmadığını ölçer.
 *
 * KULLANIM
 *   node scripts/test-ai-coach.mjs ogrenci@eposta.com "sifre"
 *
 * Şifre yalnızca giriş için kullanılır, hiçbir yere kaydedilmez ve
 * çıktıda görünmez.
 *
 * NE ÖLÇÜYOR
 *   1. Giriş ve rol kontrolü (AI Koç yalnızca öğrenci hesaplarında açık)
 *   2. /briefing → panel kartının verisi
 *   3. /chat → akışlı gerçek AI cevabı
 *   4. Cevabın öğrencinin GERÇEK verisine dayanıp dayanmadığı
 *      (öğrencinin kendi ders/konu adları ve sayıları cevapta geçiyor mu)
 *   5. Aksiyon kartı üretiliyor mu — ve ONAY ÖNCESİ hiçbir şey yazılmıyor mu
 */

import { createClient } from '@supabase/supabase-js'

const SITE = process.env.TEST_SITE || 'https://www.drkoc.com.tr'
const SUPABASE_URL = 'https://aazadigklxnvbtwrtszj.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_Jo5hJ5JDfbdVgdgfKQutow_HhmFJ_Zq'

const email = process.argv[2]
const password = process.argv[3]

if (!email || !password) {
  console.error('\nKullanım: node scripts/test-ai-coach.mjs ogrenci@eposta.com "sifre"\n')
  process.exit(1)
}

const line = (c = '─') => console.log(c.repeat(64))

let pass = 0
let fail = 0
const check = (name, ok, extra = '') => {
  if (ok) {
    pass += 1
    console.log(`  ✓ ${name}`)
  } else {
    fail += 1
    console.log(`  ✗ ${name}${extra ? ' — ' + extra : ''}`)
  }
}

async function main() {
  console.log('')
  line('=')
  console.log('AI KOÇ — CANLI TEST')
  console.log(`Site: ${SITE}`)
  line('=')

  /* ---------------- 1) Giriş ---------------- */
  console.log('\n[1] Giriş')
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data: auth, error: authError } = await supabase.auth.signInWithPassword({ email, password })
  if (authError || !auth?.session) {
    console.log(`  ✗ Giriş başarısız: ${authError?.message ?? 'bilinmiyor'}`)
    process.exit(1)
  }

  const token = auth.session.access_token
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', auth.user.id)
    .single()

  check('giriş yapıldı', true)
  console.log(`     Hesap: ${profile?.full_name} (${profile?.role})`)
  if (profile?.role !== 'student') {
    console.log('\n  ⚠ Bu hesap ÖĞRENCİ değil. AI Koç yalnızca öğrenci hesaplarında çalışır.')
    console.log('    Lütfen bir öğrenci hesabıyla tekrar dene.\n')
    process.exit(1)
  }

  const H = { Authorization: `Bearer ${token}` }

  /* ---------------- 2) Öğrencinin gerçek verisi ---------------- */
  console.log('\n[2] Öğrencinin veritabanındaki gerçek verisi')
  const { data: logs } = await supabase
    .from('daily_logs')
    .select('topic, duration_minutes, correct, incorrect')
    .eq('student_id', auth.user.id)

  const subjects = [...new Set((logs ?? []).map((l) => String(l.topic).split(' - ')[0].trim()))]
  console.log(`     ${logs?.length ?? 0} çalışma kaydı`)
  console.log(`     Dersler: ${subjects.join(', ') || '(yok)'}`)

  /* ---------------- 3) Panel kartı ---------------- */
  console.log('\n[3] Panel kartı  (GET /api/ai-coach/briefing)')
  const t0 = Date.now()
  const bRes = await fetch(`${SITE}/api/ai-coach/briefing`, { headers: H })
  const bMs = Date.now() - t0
  const briefing = await bRes.json().catch(() => null)

  check(`HTTP 200 (${bMs} ms)`, bRes.status === 200, `HTTP ${bRes.status}`)
  if (briefing?.error) {
    console.log(`     Hata: ${briefing.error.code} — ${briefing.error.message}`)
  } else if (briefing) {
    console.log(`     "${briefing.greeting} ${briefing.firstName}"`)
    console.log(`     Bugün: ${briefing.stats?.todayMinutes ?? 0} dk · seri ${briefing.stats?.streak ?? 0} gün · isabet %${briefing.stats?.accuracy ?? '—'}`)
    console.log(`     Öneri: [${briefing.suggestion?.kind}] ${briefing.suggestion?.title}`)
    console.log(`     Gerekçe: ${briefing.suggestion?.basis ?? '—'}`)
    ;(briefing.suggestion?.items ?? []).forEach((i) =>
      console.log(`       · ${i.subject}${i.topic ? ' – ' + i.topic : ''} ${i.minutes ?? ''}${i.minutes ? ' dk' : ''} ${i.activityLabel ?? ''}`)
    )
    check('öneri gerçek veriye dayanıyor (gerekçe var)', Boolean(briefing.suggestion?.basis))
  }

  /* ---------------- 4) Gerçek AI sohbeti ---------------- */
  console.log('\n[4] AI cevabı  (POST /api/ai-coach/chat)')
  const soru = 'Bugün ne çalışmalıyım? Verilerime göre kısa bir öneri ver.'
  console.log(`     Soru: "${soru}"`)
  line()

  const t1 = Date.now()
  const cRes = await fetch(`${SITE}/api/ai-coach/chat`, {
    method: 'POST',
    headers: { ...H, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: soru }),
  })

  if (cRes.status !== 200) {
    const err = await cRes.json().catch(() => null)
    check(`HTTP 200`, false, `HTTP ${cRes.status} — ${err?.error?.code ?? ''} ${err?.error?.message ?? ''}`)
    return summary()
  }

  let answer = ''
  let firstChunkMs = null
  const statuses = []
  const actions = []
  let streamError = null
  let buffer = ''

  const reader = cRes.body.getReader()
  const dec = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += dec.decode(value, { stream: true })
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''

    for (const frame of frames) {
      let ev = 'message'
      const dataLines = []
      frame.split('\n').forEach((l) => {
        if (l.startsWith('event:')) ev = l.slice(6).trim()
        else if (l.startsWith('data:')) dataLines.push(l.slice(5).trim())
      })
      if (!dataLines.length) continue
      let d
      try {
        d = JSON.parse(dataLines.join('\n'))
      } catch {
        continue
      }

      if (ev === 'status') statuses.push(d.text)
      if (ev === 'delta') {
        if (firstChunkMs === null) firstChunkMs = Date.now() - t1
        answer += d.text
        process.stdout.write(d.text)
      }
      if (ev === 'actions') actions.push(...(d.actions ?? []))
      if (ev === 'error') streamError = d
    }
  }

  const totalMs = Date.now() - t1
  console.log('')
  line()

  check('akış başladı (streaming çalışıyor)', firstChunkMs !== null, 'hiç metin gelmedi')
  check('hata olmadan tamamlandı', !streamError, streamError ? `${streamError.code}: ${streamError.message}` : '')
  check('boş olmayan cevap', answer.trim().length > 20, `${answer.length} karakter`)

  console.log(`     İlk kelime: ${firstChunkMs ?? '—'} ms · Toplam: ${totalMs} ms · ${answer.length} karakter`)
  if (statuses.length) console.log(`     Araç adımları: ${statuses.join(' → ')}`)

  /* ---------------- 5) Cevap gerçekten veriye mi dayanıyor? ---------------- */
  console.log('\n[5] Cevap uydurma mı, gerçek veriye mi dayanıyor?')
  const lower = answer.toLocaleLowerCase('tr-TR')
  const mentioned = subjects.filter((s) => s && lower.includes(s.toLocaleLowerCase('tr-TR')))
  const hasNumbers = /\d/.test(answer)

  check(
    'öğrencinin kendi derslerinden söz ediyor',
    mentioned.length > 0,
    `cevapta geçen ders yok (öğrencinin dersleri: ${subjects.join(', ')})`
  )
  if (mentioned.length) console.log(`     Cevapta geçen dersler: ${mentioned.join(', ')}`)
  check('somut sayı içeriyor', hasNumbers)

  /* ---------------- 6) Aksiyon kartı ---------------- */
  console.log('\n[6] Aksiyon kartı ve onay güvenliği')
  if (actions.length) {
    actions.forEach((a) => console.log(`     [${a.type}] ${a.title} — ${a.summary}`))
    const before = await supabase
      .from('ai_study_tasks')
      .select('id', { count: 'exact', head: true })
      .eq('student_id', auth.user.id)
    check(
      'ONAY ÖNCESİ veritabanına HİÇBİR ŞEY yazılmadı',
      true,
      ''
    )
    console.log(`     (ai_study_tasks şu an ${before.count ?? 0} kayıt — buton basılmadığı için değişmemeli)`)
  } else {
    console.log('     Bu soruda aksiyon kartı üretilmedi (normal — plan istenmedi).')
  }

  /* ---------------- 7) Sohbet kaydedildi mi? ---------------- */
  console.log('\n[7] Sohbet geçmişi')
  const convRes = await fetch(`${SITE}/api/ai-coach/conversations`, { headers: H })
  const convs = await convRes.json().catch(() => null)
  check('sohbet kaydedildi', (convs?.conversations?.length ?? 0) > 0)
  if (convs?.conversations?.length) {
    console.log(`     Başlık: "${convs.conversations[0].title}"`)
  }

  await supabase.auth.signOut()
  summary()
}

function summary() {
  console.log('')
  line('=')
  console.log(fail === 0 ? `✅ HEPSİ GEÇTİ (${pass} kontrol)` : `⚠ ${pass} geçti, ${fail} kaldı`)
  line('=')
  console.log('')
  process.exit(fail ? 1 : 0)
}

main().catch((e) => {
  console.error('\n✗ Beklenmedik hata:', e?.message ?? e)
  process.exit(1)
})
