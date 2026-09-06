import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { isProductCapture } from '../lib/productCapture'

export const MESSAGE_READ_EVENT = 'drkoc:message-read-state-changed'

/**
 * Kullanıcıya gelen ve henüz okunmamış mesajların toplamını tutar.
 * AppShell içinde tek kez çalışır; masaüstü ve mobil menü aynı
 * sayıyı kullandığı için iki ayrı gerçek zaman aboneliği oluşmaz.
 */
export default function useUnreadMessageCount() {
  const { user } = useAuth()
  const captureMode = isProductCapture()
  const [count, setCount] = useState(() => (captureMode ? 3 : 0))

  const refresh = useCallback(async () => {
    if (captureMode) return
    if (!user) {
      setCount(0)
      return
    }

    const { count: unreadCount, error } = await supabase
      .from('messages')
      .select('id', { count: 'exact', head: true })
      .eq('receiver_id', user.id)
      .is('read_at', null)

    if (!error) setCount(unreadCount ?? 0)
  }, [captureMode, user])

  useEffect(() => {
    refresh()
  }, [refresh])

  useEffect(() => {
    if (captureMode) {
      const clearCaptureCount = () => setCount(0)
      window.addEventListener(MESSAGE_READ_EVENT, clearCaptureCount)
      return () => window.removeEventListener(MESSAGE_READ_EVENT, clearCaptureCount)
    }

    if (!user) return undefined

    const channel = supabase
      .channel(`unread-messages-${user.id}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'messages' },
        refresh
      )
      .subscribe()

    window.addEventListener(MESSAGE_READ_EVENT, refresh)

    return () => {
      window.removeEventListener(MESSAGE_READ_EVENT, refresh)
      supabase.removeChannel(channel)
    }
  }, [captureMode, refresh, user])

  return count
}
