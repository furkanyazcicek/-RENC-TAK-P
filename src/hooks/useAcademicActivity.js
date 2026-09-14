import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { createAcademicActivityClient } from '../lib/learning/academicActivity/client'

export default function useAcademicActivity() {
  const { user } = useAuth()
  return useMemo(
    () => user?.id ? createAcademicActivityClient({ supabase, userId: user.id }) : null,
    [user?.id],
  )
}
