import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { isProductCapture } from '../lib/productCapture'

const FEED_LIMIT = 60

function isMissingMigration(error) {
  const message = `${error?.message ?? ''}`
  return error?.code === '42P01'
    || error?.code === 'PGRST205'
    || /account_notifications.*(does not exist|schema cache)/i.test(message)
}

/**
 * Öğretmen ve öğrencinin kalıcı bildirim akışını tek Realtime
 * aboneliğiyle tutar.
 * Mesaj sayacından ayrıdır: mesaj okununca sohbet rozeti, bildirim okununca
 * zil rozeti kapanır; iki farklı kullanıcı niyeti birbirine karışmaz.
 */
export default function useAccountNotifications() {
  const { user, role } = useAuth()
  const captureMode = isProductCapture()
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  const notificationRole = role === 'teacher' || role === 'student'
  const [loading, setLoading] = useState(notificationRole)
  const [available, setAvailable] = useState(null)
  const [error, setError] = useState('')

  const refresh = useCallback(async ({ silent = false } = {}) => {
    if (captureMode) {
      setNotifications([])
      setUnreadCount(0)
      setAvailable(true)
      setError('')
      setLoading(false)
      return
    }
    if (!user || !notificationRole) {
      setNotifications([])
      setUnreadCount(0)
      setAvailable(false)
      setLoading(false)
      return
    }

    if (!silent) setLoading(true)
    const [feedResult, countResult] = await Promise.all([
      supabase
        .from('account_notifications')
        .select(`
          id, recipient_id, teacher_id, student_id, kind, title, body,
          target_path, created_at, read_at
        `)
        .eq('recipient_id', user.id)
        .order('created_at', { ascending: false })
        .limit(FEED_LIMIT),
      supabase
        .from('account_notifications')
        .select('id', { count: 'exact', head: true })
        .eq('recipient_id', user.id)
        .is('read_at', null),
    ])

    const queryError = feedResult.error ?? countResult.error
    if (queryError) {
      if (isMissingMigration(queryError)) {
        setAvailable(false)
        setError('')
      } else {
        setAvailable(true)
        setError('Bildirimler şu anda alınamadı.')
      }
      setLoading(false)
      return
    }

    setNotifications(feedResult.data ?? [])
    setUnreadCount(countResult.count ?? 0)
    setAvailable(true)
    setError('')
    setLoading(false)
  }, [captureMode, notificationRole, user])

  useEffect(() => {
    refresh()
  }, [refresh])

  useEffect(() => {
    if (captureMode || !user || !notificationRole || available === false) return undefined

    const channel = supabase
      .channel(`account-notifications-${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'account_notifications',
          filter: `recipient_id=eq.${user.id}`,
        },
        () => refresh({ silent: true })
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [available, captureMode, notificationRole, refresh, user])

  // Kurulu PWA'larda uygulama simgesindeki rozet, zil sayacıyla aynı kalır.
  useEffect(() => {
    if (!notificationRole) return
    const badgeOperation = unreadCount > 0
      ? navigator.setAppBadge?.(unreadCount)
      : navigator.clearAppBadge?.()
    badgeOperation?.catch?.(() => {})
  }, [notificationRole, unreadCount])

  const markRead = useCallback(async (notificationId) => {
    if (!user || !notificationId) return
    const readAt = new Date().toISOString()

    if (captureMode) {
      setNotifications((current) => current.map((item) => (
        item.id === notificationId ? { ...item, read_at: readAt } : item
      )))
      setUnreadCount((count) => Math.max(0, count - 1))
      return
    }

    const { data: updatedRows, error: updateError } = await supabase
      .from('account_notifications')
      .update({ read_at: readAt })
      .eq('id', notificationId)
      .eq('recipient_id', user.id)
      .is('read_at', null)
      .select('id')

    if (updateError) {
      await refresh({ silent: true })
      return
    }

    if (updatedRows?.length) {
      setNotifications((current) => current.map((item) => (
        item.id === notificationId ? { ...item, read_at: readAt } : item
      )))
      setUnreadCount((count) => Math.max(0, count - 1))
    }
  }, [captureMode, refresh, user])

  const markAllRead = useCallback(async () => {
    if (!user || unreadCount === 0) return
    const readAt = new Date().toISOString()
    setNotifications((current) => current.map((item) => (
      item.read_at ? item : { ...item, read_at: readAt }
    )))
    setUnreadCount(0)

    if (captureMode) return

    const { error: updateError } = await supabase
      .from('account_notifications')
      .update({ read_at: readAt })
      .eq('recipient_id', user.id)
      .is('read_at', null)

    if (updateError) await refresh({ silent: true })
  }, [captureMode, refresh, unreadCount, user])

  return {
    notifications,
    unreadCount,
    loading,
    available,
    error,
    refresh,
    markRead,
    markAllRead,
  }
}
