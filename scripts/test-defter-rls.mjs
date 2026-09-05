/** Canlı ağa bağlanmaz. Yeni SQL dosyasını geçici PostgreSQL ortamında sınar. */
import { PGlite } from '@electric-sql/pglite'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { newNotebook, uid } from '../src/lib/defter/model.js'
const db=new PGlite()
const s1=uid(),s2=uid(),doc=newNotebook('Özel not'),request=uid()
try {
  await db.exec(`create schema auth;
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('app.uid',true),'')::uuid $$;
    create table auth.users(id uuid primary key);
    create role anon nologin; create role authenticated nologin;
    grant usage on schema public,auth to authenticated,anon;
    insert into auth.users values('${s1}'),('${s2}');`)
  const sql=await readFile(new URL('../supabase/migration_student_notebooks.sql',import.meta.url),'utf8')
  await db.exec(sql);await db.exec(sql)
  const as=async id=>{await db.exec('reset role');await db.query("select set_config('app.uid',$1,false)",[id]);await db.exec('set role authenticated')}
  const save=async(document,revision,req=uid())=>(await db.query('select public.save_student_notebook($1,$2::jsonb,$3,$4) as result',[document.id,JSON.stringify(document),revision,req])).rows[0].result
  await as(s1)
  assert.deepEqual(await save(doc,0,request),{conflict:false,revision:1})
  assert.deepEqual(await save(doc,0,request),{conflict:false,revision:1})
  assert.equal((await db.query('select * from public.student_notebooks')).rows.length,1)
  await assert.rejects(db.query("update public.student_notebooks set revision=100"))
  await assert.rejects(db.query('delete from public.student_notebooks'))
  await as(s2)
  assert.equal((await db.query('select * from public.student_notebooks')).rows.length,0)
  assert.equal((await save({...doc,title:'Başkasının kimliği'},1)).conflict,true)
  await as(s1)
  assert.deepEqual(await save({...doc,title:'Yeni sürüm'},1),{conflict:false,revision:2})
  assert.equal((await save({...doc,title:'Eski cihaz'},1)).conflict,true)
  assert.equal((await db.query('select document from public.student_notebooks')).rows[0].document.title,'Yeni sürüm')
  await assert.rejects(save({...doc,format:'bilinmeyen'},2))
  await assert.rejects(save({...doc,pages:[]},2))
  await db.exec('reset role; set role anon')
  await assert.rejects(save(doc,0))
  await assert.rejects(db.query('select * from public.student_notebooks'))
  console.log('Defter erişimi: tekrar kurulum, sahiplik, doğrudan yazma/silme engeli, revizyon çatışması, yinelenen istek, bozuk belge ve anonim erişim kontrolleri geçti.')
} finally { await db.close() }
