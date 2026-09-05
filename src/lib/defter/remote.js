import { supabase } from '../supabaseClient'
export function createNotebookRemote(ownerId) {
  // Yeni tablo canlıda onaylanıp kurulana kadar hiçbir defter ağdan yazılmaz.
  if (import.meta.env.VITE_NOTEBOOK_CLOUD_ENABLED !== 'true') return null
  const checkUser = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session?.user.id !== ownerId) throw new Error('Hesap değişti. Notların bu cihazda korunuyor.')
  }
  return {
    async list() {
      await checkUser()
      const { data, error } = await supabase.from('student_notebooks').select('document, revision').eq('owner_id', ownerId)
      if (error) throw error
      return data
    },
    async get(id) {
      await checkUser()
      const { data, error } = await supabase.from('student_notebooks').select('document, revision').eq('id', id).eq('owner_id', ownerId).maybeSingle()
      if (error) throw error
      return data
    },
    async save(record) {
      if(new TextEncoder().encode(JSON.stringify(record.document)).length>4*1024*1024)
        throw new Error('Ekli defter bu cihazda korunuyor. Büyük dosyalar için cihazlar arası kayıt henüz hazır değil; yedeğini indir.')
      await checkUser()
      const { data, error } = await supabase.rpc('save_student_notebook', {
        p_id: record.document.id, p_document: record.document,
        p_expected_revision: record.baseRevision, p_request_id: record.requestId,
      })
      if (error) throw error
      return data
    },
  }
}
