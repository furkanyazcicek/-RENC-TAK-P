/**
 * Öğretmen soru yanıtı ve dijital kalem istemcisini uygulamanın gerçek
 * Supabase/medya bağımlılıklarıyla kurar. Şema geçişi kararları ayrı,
 * test edilebilir uyumluluk modülündedir.
 */
import { supabase } from './supabaseClient'
import { stageAndUploadAcademicQuestionMedia } from './learning/academicActivity/media'
import { createSolutionReplyClient } from './solutionReplyCompatibility'

export { isMissingCanvasRpc, isMissingStrokesColumn } from './solutionReplyCompatibility'

const solutionReply = createSolutionReplyClient({
  client: supabase,
  stageMedia: stageAndUploadAcademicQuestionMedia,
  uuid: () => globalThis.crypto.randomUUID(),
  now: () => Date.now(),
})

export const saveStrokes = solutionReply.saveStrokes
export const sendSolution = solutionReply.sendSolution
export const sendReply = solutionReply.sendReply
