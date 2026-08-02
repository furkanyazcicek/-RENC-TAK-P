import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Bu uyarı sadece geliştiricinin (sizin) görmesi için konsola yazılır.
  console.warn(
    '[Supabase] .env dosyanızda VITE_SUPABASE_URL ve VITE_SUPABASE_ANON_KEY tanımlı değil. ' +
      'README.md dosyasındaki kurulum adımlarını takip edin.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
