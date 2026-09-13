/** Canlı ağa bağlanmaz. Klasör ve ek SQL'ini geçici PostgreSQL ortamında sınar. */
import { PGlite } from '@electric-sql/pglite'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { uid } from '../src/lib/defter/model.js'
import { newFolder } from '../src/lib/defter/folders.js'

const db = new PGlite()
const s1 = uid(), s2 = uid()
const row = (f, extra = {}) => ({ id: f.id, name: f.name, color: f.color, parent_id: f.parentId, sort_order: f.order, deleted: f.deleted, client_updated_at: f.updatedAt, ...extra })
try {
  await db.exec(`create schema auth;
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('app.uid',true),'')::uuid $$;
    create table auth.users(id uuid primary key);
    create role anon nologin; create role authenticated nologin;
    grant usage on schema public,auth to authenticated,anon;
    insert into auth.users values('${s1}'),('${s2}');
    -- Supabase dosya deposunun sınanan kısmının küçük bir benzeri.
    create schema storage;
    create table storage.buckets(id text primary key, name text, public boolean, file_size_limit bigint, allowed_mime_types text[]);
    create table storage.objects(id uuid primary key default gen_random_uuid(), bucket_id text, name text);
    create function storage.foldername(name text) returns text[] language sql immutable as $$
      select (string_to_array(name,'/'))[1:array_length(string_to_array(name,'/'),1)-1] $$;
    alter table storage.objects enable row level security;
    grant usage on schema storage to authenticated, anon;
    grant select, insert, update, delete on storage.objects to authenticated;`)
  const notebooks = await readFile(new URL('../supabase/migration_student_notebooks.sql', import.meta.url), 'utf8')
  const folders = await readFile(new URL('../supabase/migration_student_notebook_folders.sql', import.meta.url), 'utf8')
  await db.exec(notebooks); await db.exec(folders); await db.exec(folders)

  const as = async id => { await db.exec('reset role'); await db.query("select set_config('app.uid',$1,false)", [id]); await db.exec('set role authenticated') }
  const save = async list => (await db.query('select public.save_student_notebook_folders($1::jsonb) as n', [JSON.stringify(list)])).rows[0].n

  const f = newFolder({ name: 'Ayşe Ders Notları', color: 'gri' })
  const t = Date.parse('2026-09-13T10:00:00Z')
  await as(s1)
  assert.equal(await save([row(f, { client_updated_at: new Date(t).toISOString() })]), 1)
  assert.equal(await save([row(f, { name: 'Eski cihaz', client_updated_at: new Date(t - 60000).toISOString() })]), 0)
  assert.equal((await db.query('select name from public.student_notebook_folders')).rows[0].name, 'Ayşe Ders Notları')
  assert.equal(await save([row(f, { name: 'Ayşe · 8. sınıf', client_updated_at: new Date(t + 60000).toISOString() })]), 1)
  const child = newFolder({ name: 'Üslü ifadeler', parentId: f.id, color: 'mavi' })
  assert.equal(await save([row(child)]), 1)
  assert.equal((await db.query('select * from public.student_notebook_folders')).rows.length, 2)

  // Silme mezar taşıdır; satır kalır.
  assert.equal(await save([row(f, { name: 'Ayşe · 8. sınıf', deleted: true, client_updated_at: new Date(t + 120000).toISOString() })]), 1)
  assert.equal((await db.query('select deleted from public.student_notebook_folders where id=$1', [f.id])).rows[0].deleted, true)

  await assert.rejects(db.query("update public.student_notebook_folders set name='x'"))
  await assert.rejects(db.query('delete from public.student_notebook_folders'))
  await assert.rejects(db.query(`insert into public.student_notebook_folders(owner_id,id,name,color,client_updated_at) values('${s1}','${uid()}','x','mor',now())`))
  await assert.rejects(save([row(newFolder({ name: 'Renk' }), { color: '#ff0000' })]))
  await assert.rejects(save([row(newFolder({ name: 'Boş' }), { name: '   ' })]))
  await assert.rejects(save([row(f, { parent_id: f.id })]))
  await assert.rejects(save(Array.from({ length: 201 }, () => row(newFolder({ name: 'Çok' })))))

  // Başka öğrenci klasörleri göremez; aynı kimlik onun kendi satırını açar.
  await as(s2)
  assert.equal((await db.query('select * from public.student_notebook_folders')).rows.length, 0)
  assert.equal(await save([row(f, { name: 'Başkasının kimliği', client_updated_at: new Date(t + 999999).toISOString() })]), 1)
  await as(s1)
  assert.equal((await db.query('select name from public.student_notebook_folders where id=$1', [f.id])).rows[0].name, 'Ayşe · 8. sınıf')

  // Dosya kovası: yalnız kendi klasörü.
  await db.exec('reset role')
  assert.equal((await db.query("select public from storage.buckets where id='defter-ekleri'")).rows[0].public, false)
  await as(s1)
  await db.query("insert into storage.objects(bucket_id,name) values('defter-ekleri',$1)", [`${s1}/${uid()}-1a.jpg`])
  await assert.rejects(db.query("insert into storage.objects(bucket_id,name) values('defter-ekleri',$1)", [`${s2}/${uid()}-1a.jpg`]))
  assert.equal((await db.query("select * from storage.objects where bucket_id='defter-ekleri'")).rows.length, 1)
  await as(s2)
  assert.equal((await db.query("select * from storage.objects where bucket_id='defter-ekleri'")).rows.length, 0)

  await db.exec('reset role; set role anon')
  await assert.rejects(save([row(newFolder({ name: 'Anonim' }))]))
  await assert.rejects(db.query('select * from public.student_notebook_folders'))
  console.log('Klasör ve ek erişimi: tekrar kurulum, son yazan kazanır, mezar taşı, doğrudan yazma engeli, bozuk klasör, 200 sınırı, sahiplik, özel kova ve anonim erişim kontrolleri geçti.')
} finally { await db.close() }
