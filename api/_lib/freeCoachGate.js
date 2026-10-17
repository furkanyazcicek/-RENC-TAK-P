/** Ücretsiz Koç için ayrı durdurma kapısı; ücretli model kapısını açamaz. */
function enabled(value) {
  return value == null || value === '' || ['true','1','on','enabled'].includes(String(value).toLowerCase())
}
export const isFreeCoachEnabled = (env = process.env) => enabled(env.AI_COACH_FREE_ENABLED)
export const isFreeCoachWritesEnabled = (env = process.env) => isFreeCoachEnabled(env) && enabled(env.AI_COACH_FREE_WRITES_ENABLED)
export async function ownFreeCoachFlag(supabase, feature) {
  try {
    const result = await supabase.rpc('learning_coach_own_rollout', { p_feature_key: feature })
    return result?.error == null && result?.data === true
  } catch { return false }
}
export async function ownFreeCoachWrites(supabase) {
  return isFreeCoachWritesEnabled() && await ownFreeCoachFlag(supabase, 'coach_analysis')
    && await ownFreeCoachFlag(supabase, 'coach_writes')
}
