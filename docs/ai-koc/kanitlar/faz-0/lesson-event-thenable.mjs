// Faz 0 gözlem deneyi: yalnız sentetik veri ve yerel istek taklidi.
// Ürün kodunu değiştirmez; hiçbir gerçek ağ isteği veya kayıt oluşmaz.
import assert from 'node:assert/strict'
import { createClient } from '@supabase/supabase-js'

let requestCount = 0
const client = createClient('https://faz0.invalid', 'faz0-synthetic-anon', {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  global: {
    fetch: async () => {
      requestCount += 1
      return new Response(null, { status: 201 })
    },
  },
})
const event = {
  lesson_id: '00000000-0000-4000-8000-000000000001',
  student_id: '00000000-0000-4000-8000-000000000002',
  event_name: 'lesson_opened',
}

void client.from('lesson_activity_events').insert(event)
await new Promise((resolve) => setTimeout(resolve, 20))
assert.equal(requestCount, 0)
console.log('DOĞRULANDI: void insert sonrasında istek taklidi çağrısı = 0.')

const result = await client.from('lesson_activity_events').insert(event)
assert.equal(requestCount, 1)
assert.equal(result.error, null)
console.log('KARŞILAŞTIRMA: await insert sonrasında istek taklidi çağrısı = 1.')
console.log('Sonuç: 3 kontrol geçti; mevcut LessonReader olay yazma biçimi isteği başlatmıyor. Gerçek ağ çağrısı = 0.')
