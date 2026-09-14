import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { unsubscribeFromPush } from '../lib/push'
import { captureStudentProfile, isProductCapture } from '../lib/productCapture'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const captureProfile = isProductCapture() ? captureStudentProfile() : null
  const [session, setSession] = useState(() => captureProfile ? { user: { id: captureProfile.id } } : null)
  const [profile, setProfile] = useState(() => captureProfile)
  const [loading, setLoading] = useState(() => !captureProfile)

  async function loadProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (error) {
      console.error('Profil yüklenemedi:', error.message)
      setProfile(null)
    } else {
      setProfile(data)
    }
  }

  useEffect(() => {
    if (captureProfile) {
      setSession({ user: { id: captureProfile.id } })
      setProfile(captureProfile)
      setLoading(false)
      return undefined
    }
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      if (session?.user) await loadProfile(session.user.id)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      if (session?.user) {
        await loadProfile(session.user.id)
      } else {
        setProfile(null)
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [captureProfile?.id])

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  async function signUp({ email, password, fullName, role }) {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return { error }

    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: data.user.id,
        full_name: fullName,
        role,
      })
      if (profileError) return { error: profileError }
    }
    return { error: null }
  }

  async function signOut() {
    // Push aboneliği hesap sahibine bağlıdır. Aynı tablette başka bir hesap
    // açıldığında eski öğretmenin bildirimleri görünmesin diye çıkıştan önce
    // bu cihazın aboneliğini kaldırırız. Tarayıcı desteği/bağlantı yoksa çıkış
    // yine devam eder.
    try {
      await unsubscribeFromPush()
    } catch {
      // Oturum kapatma, bildirim temizliğindeki geçici hataya bağlanamaz.
    }
    await supabase.auth.signOut()
  }

  /**
   * Profili sunucudan yeniden okur. Profil sayfasında ad değiştirildiğinde
   * çağrılır — yoksa üst şeritteki isim ve baş harfler eski değerde kalır.
   */
  async function refreshProfile() {
    if (!session?.user) return
    await loadProfile(session.user.id)
  }

  const value = {
    session,
    user: session?.user ?? null,
    profile,
    role: profile?.role ?? null,
    loading,
    signIn,
    signUp,
    signOut,
    refreshProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth, AuthProvider içinde kullanılmalı')
  return ctx
}
