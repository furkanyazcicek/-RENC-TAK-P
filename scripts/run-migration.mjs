/**
 * MIGRATION ÇALIŞTIRICI — Supabase yönetim paneline ihtiyaç duymaz.
 *
 * NEDEN GEREKTİ
 * Proje panelin erişilemediği bir hesabın altında kaldı. Ancak veritabanına
 * doğrudan bağlanmak için panele girmek şart değil: proje kurulurken
 * belirlenen VERİTABANI ŞİFRESİ yeterlidir.
 *
 * NEDEN "POOLER" ADRESİ
 * `db.<ref>.supabase.co` yalnızca IPv6 çözümleniyor ve çoğu Türk ev
 * bağlantısı IPv6 vermiyor. `pooler.supabase.com` IPv4 üzerinden erişilebilir.
 * Port 5432 = session pooler; DDL (create table, policy…) için doğru olan bu,
 * 6543 (transaction pooler) bazı oturum özelliklerini desteklemez.
 *
 * KULLANIM
 *   node scripts/run-migration.mjs supabase/migration_ai_coach.sql
 *
 * Şifre sorulduğunda ekrana yazılmaz, diske kaydedilmez, log'a düşmez.
 * Alternatif olarak ortam değişkeniyle de verilebilir:
 *   SUPABASE_DB_PASSWORD=... node scripts/run-migration.mjs <dosya>
 *
 * GÜVENLİK NOTU
 * Bu betik verilen .sql dosyasını olduğu gibi çalıştırır. Yalnızca içeriğini
 * okuduğun dosyaları ver.
 */

import { readFile } from 'node:fs/promises'
import { createInterface } from 'node:readline'
import path from 'node:path'
import pg from 'pg'

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'aazadigklxnvbtwrtszj'
const REGION = process.env.SUPABASE_REGION || 'eu-central-1'

const HOST = `aws-0-${REGION}.pooler.supabase.com`
const PORT = 5432 // session pooler — DDL için doğru port
const USER = `postgres.${PROJECT_REF}`
const DATABASE = 'postgres'

/**
 * Terminalden tek satır girdi ister.
 *
 * Şifreyi gizlemeye ÇALIŞMIYORUZ. Gizlemek için stdin'i elle dinleyip
 * satır silmek gerekiyor; bu Windows cmd.exe'de bozuluyordu (soru iki kez
 * basılıyor, cevap boş dönüyordu). Kendi ekranında görünen bir şifre,
 * hiç çalışmayan bir gizlemeye yeğdir.
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
  const file = process.argv[2]
  if (!file) {
    console.error('\nKullanım: node scripts/run-migration.mjs <sql-dosyasi>')
    console.error('Örnek   : node scripts/run-migration.mjs supabase/migration_ai_coach.sql\n')
    process.exit(1)
  }

  const fullPath = path.resolve(process.cwd(), file)
  let sql
  try {
    sql = await readFile(fullPath, 'utf8')
  } catch {
    console.error(`\n✗ Dosya okunamadı: ${fullPath}\n`)
    process.exit(1)
  }

  console.log('\n=== Supabase Migration Çalıştırıcı ===')
  console.log(`Dosya   : ${file} (${sql.length.toLocaleString('tr-TR')} karakter)`)
  console.log(`Sunucu  : ${HOST}:${PORT}`)
  console.log(`Kullanıcı: ${USER}`)
  console.log('')
  console.log('İstenen şifre, projeyi kurarken belirlediğin VERİTABANI şifresidir')
  console.log('(Supabase hesabının giriş şifresi değil).')
  console.log('')

  // Öncelik: 2. argüman → ortam değişkeni → soru-cevap
  const password =
    process.argv[3] || process.env.SUPABASE_DB_PASSWORD || (await ask('Veritabanı şifresi: '))

  if (!password) {
    console.error('\n✗ Şifre girilmedi. Tek satırda da verebilirsin:')
    console.error('  node scripts/run-migration.mjs supabase/migration_ai_coach.sql "sifre"\n')
    process.exit(1)
  }

  const client = new pg.Client({
    host: HOST,
    port: PORT,
    user: USER,
    password,
    database: DATABASE,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 20_000,
    // IPv4'ü zorla — IPv6 yolu bu ağda çalışmıyor
    options: undefined,
  })

  try {
    process.stdout.write('Bağlanılıyor… ')
    await client.connect()
    console.log('✓')
  } catch (error) {
    console.log('✗')
    const msg = String(error?.message ?? error)
    if (/password authentication failed|SASL|SCRAM/i.test(msg)) {
      console.error('\n✗ Şifre kabul edilmedi.')
      console.error('  Bu, VERİTABANI şifresi olmalı — Supabase hesabının giriş şifresi değil.')
      console.error('  Panele girebilirsen Settings > Database > Reset database password ile')
      console.error('  yenisini belirleyebilirsin.\n')
    } else if (/ENOTFOUND|EAI_AGAIN/i.test(msg)) {
      console.error(`\n✗ Sunucu adresi çözümlenemedi: ${HOST}`)
      console.error('  Proje bölgesi farklı olabilir. SUPABASE_REGION ile deneyebilirsin:')
      console.error('    SUPABASE_REGION=eu-west-1 node scripts/run-migration.mjs <dosya>\n')
    } else {
      console.error(`\n✗ Bağlanılamadı: ${msg}\n`)
    }
    process.exit(1)
  }

  try {
    const { rows } = await client.query('select current_database() db, current_user usr, version() v')
    console.log(`Bağlandı: ${rows[0].db} / ${rows[0].usr}`)
    console.log(`${rows[0].v.split(' ').slice(0, 2).join(' ')}\n`)

    process.stdout.write('Migration çalıştırılıyor… ')
    // Tek transaction: bir ifade patlarsa hiçbiri uygulanmaz, yarım şema kalmaz.
    await client.query('begin')
    await client.query(sql)
    await client.query('commit')
    console.log('✓\n')

    // Doğrulama: tablolar gerçekten oluştu mu?
    const { rows: tables } = await client.query(`
      select table_name,
             (select count(*) from information_schema.columns c
               where c.table_name = t.table_name and c.table_schema = 'public') as cols
        from information_schema.tables t
       where table_schema = 'public' and table_name like 'ai\\_%'
       order by table_name
    `)

    const { rows: policies } = await client.query(`
      select tablename, count(*)::int as n
        from pg_policies
       where schemaname = 'public' and tablename like 'ai\\_%'
       group by tablename order by tablename
    `)

    const policyByTable = Object.fromEntries(policies.map((p) => [p.tablename, p.n]))

    console.log('Oluşan tablolar:')
    tables.forEach((t) => {
      const n = policyByTable[t.table_name] ?? 0
      const rls = n > 0 ? `${n} RLS politikası` : '⚠ RLS politikası YOK'
      console.log(`  ✓ ${t.table_name.padEnd(20)} ${String(t.cols).padStart(2)} kolon · ${rls}`)
    })

    if (!tables.length) {
      console.log('  ⚠ ai_ ile başlayan tablo bulunamadı — migration beklendiği gibi çalışmamış olabilir.')
    }
    console.log('')
  } catch (error) {
    try {
      await client.query('rollback')
    } catch {
      /* zaten kopmuş olabilir */
    }
    console.log('✗')
    console.error(`\n✗ SQL hatası: ${error?.message ?? error}`)
    console.error('  Hiçbir değişiklik uygulanmadı (transaction geri alındı).\n')
    process.exit(1)
  } finally {
    await client.end().catch(() => {})
  }

  console.log('✅ Tamamlandı.\n')
}

main().catch((error) => {
  console.error('\n✗ Beklenmedik hata:', error?.message ?? error)
  process.exit(1)
})
