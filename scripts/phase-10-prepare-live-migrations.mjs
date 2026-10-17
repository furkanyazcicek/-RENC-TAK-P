import { readFileSync,writeFileSync,mkdtempSync,chmodSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { MIGRATIONS } from './test-phase-10-live-volume-rehearsal.mjs'
import { guardedMigrationSql } from './lib/phase-10-guarded-migration.mjs'
const archive=JSON.parse(readFileSync(process.argv[2],'utf8'))
const folder=mkdtempSync(join(tmpdir(),'drkoc-phase10-live-'))
chmodSync(folder,0o700)
const migrations=[...MIGRATIONS,...['migration_learning_coach_pilot_gate.sql','migration_learning_coaching_evidence_reconciliation.sql','migration_learning_free_coach_outcome.sql','migration_learning_free_coach_release_gate.sql'].map(path=>({path:join(process.cwd(),'supabase',path)}))]
const files=migrations.map((migration,i)=>{
 const path=join(folder,`${String(i+1).padStart(2,'0')}.sql`)
 writeFileSync(path,guardedMigrationSql(migration,archive),{mode:0o600})
 return {path,migration:migration.path.split('/').at(-1)}
})
writeFileSync(join(folder,'operations.json'),JSON.stringify(files),{mode:0o600})
console.log(JSON.stringify({folder,migrations:files.length,source_tables:archive.tables.length}))
