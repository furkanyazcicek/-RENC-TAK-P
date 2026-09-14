// supabase/functions/send-push/index.ts
//
// Yalnızca account_notifications INSERT Database Webhook'unu kabul eder.
// Başlık, gövde ve hedef istekten değil veritabanındaki yetkili kayıttan
// okunur.
//
// Deploy:
//   supabase functions deploy send-push --no-verify-jwt
// Secrets:
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, WEBHOOK_SECRET, VAPID_SUBJECT

import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const VAPID_PUBLIC_KEY = Deno.env.get('VAPID_PUBLIC_KEY')!
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY')!
const VAPID_SUBJECT = Deno.env.get('VAPID_SUBJECT') ?? 'mailto:admin@example.com'
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET')!

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})
function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

function safePath(value: unknown) {
  const candidate = typeof value === 'string' ? value : '/'
  return /^\/[a-zA-Z0-9?&=_%/.-]*$/.test(candidate) ? candidate : '/'
}

function notificationIdFrom(payload: Record<string, unknown>) {
  const record = payload.record && typeof payload.record === 'object'
    ? payload.record as Record<string, unknown>
    : null

  if (record?.id && record?.recipient_id) {
    return String(record.id)
  }
  return undefined
}

async function finish(notificationId: string | undefined, delivered: boolean, error?: string) {
  if (!notificationId) return
  const { error: finishError } = await supabase.rpc('finish_account_notification_push', {
    p_notification_id: notificationId,
    p_delivered: delivered,
    p_error: error?.slice(0, 500) ?? null,
  })
  if (finishError) console.error('Push sonucu kaydedilemedi:', finishError.message)
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

  // Fonksiyon --no-verify-jwt yayımlanır; güven sınırı bu paylaşılan sırdır.
  if (!WEBHOOK_SECRET || req.headers.get('x-webhook-secret') !== WEBHOOK_SECRET) {
    return json({ error: 'unauthorized' }, 401)
  }

  let notificationId: string | undefined

  try {
    const raw = await req.json() as Record<string, unknown>
    notificationId = notificationIdFrom(raw)
    if (!notificationId) {
      return json({ error: 'invalid_account_notification_webhook' }, 400)
    }

    // Webhook kaydı yalnızca kimlik taşır. Güvenilen içerik atomik claim
    // sonucundan yeniden okunur; istek gövdesindeki metinler kullanılmaz.
    const { data: claimedRows, error: claimError } = await supabase
      .rpc('claim_account_notification_push', { p_notification_id: notificationId })
    if (claimError) throw claimError

    const claimed = Array.isArray(claimedRows) ? claimedRows[0] : claimedRows
    if (!claimed) return json({ sent: 0, reason: 'already_claimed_or_sent' })

    const userId = claimed.user_id as string | undefined
    let title = claimed.title as string | undefined
    let body = (claimed.body ?? '') as string
    const url = safePath(claimed.url)

    if (!userId || !title?.trim()) {
      await finish(notificationId, false, 'missing_user_or_title')
      return json({ error: 'missing_user_or_title' }, 400)
    }

    title = title.trim().slice(0, 120)
    body = body.slice(0, 240)

    const { data: subscriptions, error: subscriptionError } = await supabase
      .from('push_subscriptions')
      .select('id, endpoint, p256dh, auth')
      .eq('user_id', userId)

    if (subscriptionError) throw subscriptionError
    if (!subscriptions?.length) {
      // Şu an kayıtlı cihaz yoksa eski bildirim, ileride izin açıldığında
      // gecikmeli şekilde gönderilmez; uygulama içi merkezde zaten durur.
      await finish(notificationId, true)
      return json({ sent: 0, reason: 'no_subscriptions' })
    }

    const payload = JSON.stringify({
      title,
      body,
      url,
      notificationId: notificationId ?? null,
      timestamp: Date.now(),
    })

    const results = await Promise.allSettled(
      subscriptions.map((subscription) => webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: { p256dh: subscription.p256dh, auth: subscription.auth },
        },
        payload,
        { TTL: 86_400, urgency: 'normal' }
      ))
    )

    const invalidIds: string[] = []
    const transientErrors: string[] = []
    results.forEach((result, index) => {
      if (result.status !== 'rejected') return
      const reason = result.reason as { statusCode?: number; message?: string }
      if (reason?.statusCode === 404 || reason?.statusCode === 410) {
        invalidIds.push(subscriptions[index].id)
      } else {
        transientErrors.push(reason?.message ?? `push_${reason?.statusCode ?? 'failed'}`)
      }
    })

    if (invalidIds.length) {
      await supabase.from('push_subscriptions').delete().in('id', invalidIds)
    }

    const sent = results.filter((result) => result.status === 'fulfilled').length
    const terminal = sent > 0 || transientErrors.length === 0
    await finish(notificationId, terminal, transientErrors.join('; '))

    if (!terminal) {
      return json({ sent: 0, total: subscriptions.length, error: 'push_temporarily_failed' }, 502)
    }

    return json({ sent, total: subscriptions.length, removed: invalidIds.length })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error(message)
    await finish(notificationId, false, message)
    return json({ error: 'push_failed' }, 500)
  }
})
