import { createClient } from '@supabase/supabase-js'
import { config } from '../config.js'

let writer = null

export function getAcademicSolveWriter() {
  if (!config.supabaseServiceRoleKey) throw new Error('academic_solve_writer_not_configured')
  if (!writer) writer = createClient(config.supabaseUrl, config.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
  return writer
}
