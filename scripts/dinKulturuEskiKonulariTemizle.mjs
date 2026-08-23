/**
 * TYT DİN KÜLTÜRÜ — ESKİ KONULARI TEMİZLER
 *
 * TYT Din Kültürü ve Ahlak Bilgisi dersinde, 2026 MEB programından ÖNCE
 * girilmiş 6 geniş başlık duruyor ("Bilgi ve İnanç", "İslam ve İbadet",
 * "Gençlik ve Değerler", "Din ve Hayat", "Ahlaki Tutum ve Davranışlar",
 * "Din, Kültür ve Sanat"). Ders içeriği kayıt defterinde 20 üniteye göre
 * yazıldığı için bu 6 başlık kütüphanede boş duruyor ve konu listesini
 * gereksiz uzatıyor.
 *
 * KULLANIM
 *   node scripts/dinKulturuEskiKonulariTemizle.mjs           → önce plan, sonra onay ister
 *   node scripts/dinKulturuEskiKonulariTemizle.mjs --dry     → hiçbir şey silmez, yalnız gösterir
 *   SUPABASE_DB_PASSWORD=... node scripts/... --onayla       → soru sormadan siler
 *
 * GÜVENLİK KURALLARI
 *
 * · Silme yalnızca ADI listede olan ve İÇİ BOŞ konular için yapılır. Konuya
 *   bağlı tek bir satır (ders notu, soru seti, ders) bile varsa betik durur;
 *   çünkü veritabanındaki bağlar "on delete cascade" — bir konuyu silmek
 *   altındaki içeriği de sessizce silerdi.
 *
 * · Bağlı tabloları elle listelemez: information_schema'dan library_topics'e
 *   bakan bütün yabancı anahtarları bulur ve her birini tek tek sayar. Sonra
 *   yeni bir tablo eklenirse bu kontrol kendiliğinden onu da kapsar.
 *
 * · Silmeden önce satırların tamamı `backup/` altına JSON olarak yazılır.
 *   Yanlışlıkla silinirse aynı kimliklerle geri eklenebilir.
 */

import { createInterface } from 'node:readline'
import { mkdirSync, writeFileSync } from 'node:fs'
import pg from 'pg'

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'aazadigklxnvbtwrtszj'
const REGION = process.env.SUPABASE_REGION || 'eu-central-1'
const HOST = `aws-0-${REGION}.pooler.supabase.com`
const PORT = 5432
const USER = `postgres.${PROJECT_REF}`

const SINAV = 'TYT'
const DERS = 'Din Kültürü ve Ahlak Bilgisi'
const SILINECEK_KONULAR = [
  'Bilgi ve İnanç',
  'İslam ve İbadet',
  'Gençlik ve Değerler',
  'Din ve Hayat',
  'Ahlaki Tutum ve Davranışlar',
  'Din, Kültür ve Sanat',
]

const args = process.argv.slice(2)
const kuruProva = args.includes('--dry')
const onayliCalistir = args.includes('--onayla')
const sifreArgumani = args.find((a) => !a.startsWith('--')) ?? null

function sor(soru) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    rl.question(soru, (cevap) => {
      rl.close()
      resolve(cevap.trim())
    })
  })
}

/** library_topics.id'ye bakan bütün yabancı anahtarları bulur. */
async function bagliTablolar(client) {
  const { rows } = await client.query(`
    select
      kcu.table_name  as tablo,
      kcu.column_name as sutun
    from information_schema.table_constraints tc
    join information_schema.key_column_usage kcu
      on kcu.constraint_name = tc.constraint_name
     and kcu.constraint_schema = tc.constraint_schema
    join information_schema.constraint_column_usage ccu
      on ccu.constraint_name = tc.constraint_name
     and ccu.constraint_schema = tc.constraint_schema
    where tc.constraint_type = 'FOREIGN KEY'
      and tc.table_schema = 'public'
      and ccu.table_name = 'library_topics'
      and ccu.column_name = 'id'
  `)
  return rows
}

async function main() {
  const sifre =
    sifreArgumani ||
    process.env.SUPABASE_DB_PASSWORD ||
    (await sor('\nVeritabanı şifresi: '))

  if (!sifre) {
    console.error('Şifre girilmedi, işlem iptal edildi.')
    process.exit(1)
  }

  const client = new pg.Client({
    host: HOST,
    port: PORT,
    user: USER,
    password: sifre,
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()

  try {
    const { rows: konular } = await client.query(
      `select t.id, t.name, t.order_index, t.created_at, t.subject_id
         from library_topics t
         join library_subjects s on s.id = t.subject_id
        where s.exam_type = $1 and s.name = $2 and t.name = any($3)
        order by t.order_index`,
      [SINAV, DERS, SILINECEK_KONULAR]
    )

    if (konular.length === 0) {
      console.log('\nSilinecek konu bulunamadı — muhtemelen daha önce temizlenmiş.')
      return
    }

    console.log(`\n${SINAV} · ${DERS} — silinmeye aday ${konular.length} konu:`)
    konular.forEach((k) => console.log(`  · ${k.name}`))

    // --- Bağlı içerik kontrolü ---
    const kimlikler = konular.map((k) => k.id)
    const bagimlilar = await bagliTablolar(client)
    let bagliToplam = 0

    console.log('\nBağlı içerik kontrolü:')
    for (const { tablo, sutun } of bagimlilar) {
      const { rows } = await client.query(
        `select count(*)::int as adet from public."${tablo}" where "${sutun}" = any($1)`,
        [kimlikler]
      )
      const adet = rows[0].adet
      bagliToplam += adet
      console.log(`  · ${tablo}.${sutun}: ${adet} satır`)
    }

    if (bagliToplam > 0) {
      console.error(
        `\nDURDURULDU: bu konulara bağlı ${bagliToplam} satır var. Konuyu silmek ` +
          'o içeriği de silerdi. Önce içeriği başka bir konuya taşıyın.'
      )
      process.exitCode = 1
      return
    }
    console.log('  → Bağlı içerik yok, silmek güvenli.')

    // --- Yedek ---
    const damga = new Date().toISOString().replace(/[:.]/g, '-')
    const yedekYolu = `backup/din-kulturu-eski-konular-${damga}.json`
    mkdirSync('backup', { recursive: true })
    writeFileSync(yedekYolu, JSON.stringify(konular, null, 2), 'utf8')
    console.log(`\nYedek yazıldı: ${yedekYolu}`)

    if (kuruProva) {
      console.log('\n--dry verildi: hiçbir şey silinmedi.')
      return
    }

    if (!onayliCalistir) {
      const cevap = await sor(`\n${konular.length} konu silinecek. Onaylıyorsan SİL yaz: `)
      if (cevap !== 'SİL') {
        console.log('İptal edildi, hiçbir şey silinmedi.')
        return
      }
    }

    const { rowCount } = await client.query(
      'delete from library_topics where id = any($1)',
      [kimlikler]
    )
    console.log(`\nSilindi: ${rowCount} konu.`)
  } finally {
    await client.end()
  }
}

main().catch((hata) => {
  console.error('\nHata:', hata.message)
  process.exit(1)
})
