// supabase/functions/send-push/index.ts
//
// Bu fonksiyon, veritabanı trigger'ından (pg_net) veya Dashboard'daki
// Database Webhook'tan çağrılır. Verilen user_id'ye ait TÜM cihaz
// aboneliklerine (push_subscriptions) Web Push bildirimi gönderir.
//
// Deploy: supabase functions deploy send-push
// Secrets: supabase secrets set VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... WEBHOOK_SECRET=... VAPID_SUBJECT=mailto:you@example.com

import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const VAPID_PUBLIC_KEY = Deno.env.get('VAPID_PUBLIC_KEY')!
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY')!
const VAPID_SUBJECT = Deno.env.get('VAPID_SUBJECT') ?? 'mailto:admin@example.com'
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET')!

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

Deno.serve(async (req) => {
  // pg_net / webhook'un beklediğimiz kaynaktan geldiğini doğrula
  if (req.headers.get('x-webhook-secret') !== WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    const { user_id, title, body, url } = await req.json()
    if (!user_id || !title) {
      return new Response('Missing user_id or title', { status: 400 })
    }

    const { data: subs, error } = await supabase
      .from('push_subscriptions')
      .select('*')
      .eq('user_id', user_id)

    if (error) throw error
    if (!subs || subs.length === 0) {
      return new Response(JSON.stringify({ sent: 0, reason: 'no subscriptions' }), { status: 200 })
    }

    const payload = JSON.stringify({ title, body: body ?? '', url: url ?? '/' })

    const results = await Promise.allSettled(
      subs.map((sub) =>
        webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload
        )
      )
    )

    // 410 Gone / 404 dönen (artık geçersiz) abonelikleri temizle
    const toRemove: string[] = []
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        const statusCode = (r.reason as { statusCode?: number })?.statusCode
        if (statusCode === 404 || statusCode === 410) toRemove.push(subs[i].endpoint)
      }
    })
    if (toRemove.length > 0) {
      await supabase.from('push_subscriptions').delete().in('endpoint', toRemove)
    }

    const sent = results.filter((r) => r.status === 'fulfilled').length
    return new Response(JSON.stringify({ sent, total: subs.length }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 })
  }
})
