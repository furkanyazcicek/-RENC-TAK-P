import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  describeContent,
  normalizeQuestionSetForIdentity,
} from '../lib/learning/contentActivity/identity.js'
import { isSuccessfulActionResult } from '../lib/learning/contentActivity/outbox.js'
import {
  clearSessionActionId,
  createClientActionId,
  sessionActionId,
  useContentActivity,
} from './useContentActivity.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function publicError(code) {
  if (code === 'content_revision_mismatch') return 'Bu testin içerik sürümü değişti. Yeni bir deneme başlatmalısın.'
  if (code === 'invalid_state') return 'Bu deneme artık yanıt kabul etmiyor.'
  if (code === 'not_found') return 'Bu denemeye artık erişilemiyor.'
  if (code === 'unauthorized') return 'Bu kayıt yalnızca öğrenci hesabıyla kullanılabilir.'
  if (code === 'idempotency_conflict' || code === 'ownership_conflict') return 'Kayıt çakıştı. Denemeyi yenileyip tekrar kontrol et.'
  return 'Kayıt servisine şu anda ulaşılamıyor. Seçimin bu cihazda korunuyor.'
}

/**
 * Kimya, Coğrafya ve Geometri değerlendirmelerinin ortak istemci yaşam
 * döngüsü. Tam kanıt zarfı kabul etmez; yalnızca kaynak-özel dar
 * eylemleri outbox'a yollar. Doğruluk ve toplamlar daima sunucudan gelir.
 */
export function useServerAssessment({
  sourceCode,
  contentKind,
  contentId,
  sourceOwner,
  questionSet,
  startAction,
  answerAction,
  finalizeAction,
  urlParam = 'attempt',
}) {
  const { user, role, loading: authLoading } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const attemptId = searchParams.get(urlParam)
  const studentId = role === 'student' ? user?.id : null
  const activity = useContentActivity(studentId)
  const [descriptor, setDescriptor] = useState(null)
  const [descriptorState, setDescriptorState] = useState('loading')
  const [attempt, setAttempt] = useState(null)
  const [attemptContentState, setAttemptContentState] = useState('unknown')
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(Boolean(attemptId))
  const [error, setError] = useState(null)
  const [starting, setStarting] = useState(false)
  const [finishing, setFinishing] = useState(false)
  const startingRef = useRef(false)
  const finishingRef = useRef(false)
  const retryingRef = useRef(false)
  const answerQueueRef = useRef(Promise.resolve())

  useEffect(() => {
    let alive = true
    setDescriptor(null)
    setDescriptorState('loading')
    describeContent({
      sourceCode,
      contentKind,
      contentId,
      value: questionSet,
      normalize: normalizeQuestionSetForIdentity,
      sourceOwner,
    }).then((value) => {
      if (!alive) return
      setDescriptor(value)
      setDescriptorState('ready')
    }).catch(() => {
      if (!alive) return
      setDescriptorState('error')
      setError('Test içeriği doğrulanamadı.')
    })
    return () => { alive = false }
  }, [contentId, contentKind, questionSet, sourceCode, sourceOwner])

  const pending = activity.pending
  const getAttempt = activity.getAttempt
  const perform = activity.perform
  const flush = activity.flush

  const classifyAttemptContent = useCallback((result) => {
    if (!descriptor || result?.content_revision !== descriptor.content_revision) return 'outdated'
    const questionIds = result?.question_ids
    const catalogIds = new Set(questionSet.questions.map((question) => question.id))
    if (!Array.isArray(questionIds) || questionIds.length === 0
      || new Set(questionIds).size !== questionIds.length
      || questionIds.some((questionId) => !catalogIds.has(questionId))
      || Number(result.total_count) !== questionIds.length) {
      return 'invalid'
    }
    return 'current'
  }, [descriptor, questionSet.questions])

  useEffect(() => {
    let alive = true
    if (!studentId || !attemptId || !UUID.test(attemptId)) {
      setLoading(false)
      if (attemptId && !UUID.test(attemptId)) {
        setAttempt(null)
        setAttemptContentState('invalid')
        setAnswers({})
        setError('Deneme bağlantısı geçersiz.')
      }
      return () => { alive = false }
    }
    if (!descriptor) {
      setLoading(descriptorState === 'loading')
      return () => { alive = false }
    }
    setLoading(true)
    setAttemptContentState('unknown')
    void getAttempt(attemptId).then(({ result }) => {
      if (!alive) return
      if (!result || result.status !== 'available') {
        setAttempt(null)
        setAnswers({})
        setAttemptContentState('invalid')
        setError(publicError(result?.status))
        setLoading(false)
        return
      }
      if (result.source_code !== sourceCode || result.content_id !== contentId) {
        setAttempt(null)
        setAnswers({})
        setAttemptContentState('invalid')
        setError('Bu deneme farklı bir içeriğe ait.')
        setLoading(false)
        return
      }
      const restored = Object.fromEntries(
        (result.answers ?? []).map((answer) => [answer.question_id, answer.selected_option_id])
      )
      // Sunucuya henüz ulaşmamış aynı kullanıcı kapsamındaki
      // seçimler, yenilemede kaybolmasın. Outbox cevap anahtarı taşımaz.
      for (const item of pending()) {
        if (item.type === answerAction && item.payload?.attempt_id === attemptId) {
          restored[item.payload.question_id] = item.payload.selected_option_id
        }
      }
      const contentState = classifyAttemptContent(result)
      setAnswers(restored)
      setAttempt(result)
      setAttemptContentState(contentState)
      setError(contentState === 'current'
        ? null
        : contentState === 'outdated'
          ? 'Bu deneme içeriğin önceki bir sürümüne ait. Kayıtlı sonuç korunur; bu sürümle devam edilemez.'
          : 'Bu denemenin sabitlenmiş soru listesi doğrulanamadı. Yeni bir deneme başlatmalısın.')
      setLoading(false)
    })
    return () => { alive = false }
  }, [answerAction, attemptId, classifyAttemptContent, contentId, descriptor,
    descriptorState, getAttempt, pending, sourceCode, studentId])

  const startScope = `${studentId ?? 'anonymous'}:${sourceCode}:${contentId}:${descriptor?.content_revision ?? 'pending'}:start`
  const start = useCallback(async () => {
    if (startingRef.current) return null
    if (!studentId || !descriptor) {
      setError('Sunucu kaydı için öğrenci hesabıyla giriş yapmalısın.')
      return null
    }
    startingRef.current = true
    setStarting(true)
    try {
      setError(null)
      const outcome = await perform(startAction, {
        content_id: descriptor.content_id,
        content_revision: descriptor.content_revision,
      }, { actionId: sessionActionId(startScope) })
      const result = outcome.result
      if (!isSuccessfulActionResult(result) || !result?.attempt_id) {
        setError(publicError(result?.status ?? result?.code))
        return null
      }
      const contentState = classifyAttemptContent(result)
      if (contentState !== 'current') {
        setError('Denemenin sabitlenmiş soru listesi doğrulanamadı. Yeni bir deneme başlatılmadı.')
        return null
      }
      const next = new URLSearchParams(searchParams)
      next.set(urlParam, result.attempt_id)
      setSearchParams(next, { replace: true })
      setAttempt(result)
      setAttemptContentState('current')
      setAnswers({})
      return result
    } finally {
      startingRef.current = false
      setStarting(false)
    }
  }, [classifyAttemptContent, descriptor, perform, searchParams, setSearchParams,
    startAction, startScope, studentId, urlParam])

  const answer = useCallback((questionId, selectedOptionId) => {
    if (!attemptId || attempt?.attempt_status === 'completed'
      || attemptContentState !== 'current' || finishingRef.current) return Promise.resolve(null)
    setAnswers((current) => ({ ...current, [questionId]: selectedOptionId }))
    setError(null)
    const actionId = createClientActionId()
    const queued = answerQueueRef.current.catch(() => null).then(async () => {
      const outcome = await perform(answerAction, {
        attempt_id: attemptId,
        question_id: questionId,
        selected_option_id: selectedOptionId,
      }, { actionId })
      if (!isSuccessfulActionResult(outcome.result)) {
        setError(publicError(outcome.result?.status ?? outcome.result?.code))
      }
      return outcome.result
    })
    answerQueueRef.current = queued.then(() => undefined, () => undefined)
    return queued
  }, [answerAction, attempt?.attempt_status, attemptContentState, attemptId, perform])

  const finalize = useCallback(async () => {
    if (!attemptId || finishingRef.current || attemptContentState !== 'current') return null
    finishingRef.current = true
    setFinishing(true)
    setError(null)
    try {
      // Son tıklama henüz hashlenip outbox'a eklenirken final isteğinin
      // onu geçmesini engelle; cevaplar kaynak sırasında gönderilir.
      await answerQueueRef.current
      await flush()
      const unresolvedAnswers = pending().filter((item) => (
        item.type === answerAction
        && item.payload?.attempt_id === attemptId
        && item.state !== 'acknowledged'
      ))
      if (unresolvedAnswers.length > 0) {
        setError('Son seçimin henüz sunucuya ulaşmadı. Yeniden denedikten sonra testi bitirebilirsin.')
        return null
      }
      const outcome = await perform(finalizeAction, {
        attempt_id: attemptId,
      }, { actionId: sessionActionId(`${studentId}:${sourceCode}:${attemptId}:finalize`) })
      if (!isSuccessfulActionResult(outcome.result)) {
        setError(publicError(outcome.result?.status ?? outcome.result?.code))
        return null
      }
      const refreshed = await getAttempt(attemptId)
      if (refreshed.result?.status === 'available') {
        const contentState = classifyAttemptContent(refreshed.result)
        setAttempt(refreshed.result)
        setAttemptContentState(contentState)
        setAnswers(Object.fromEntries((refreshed.result.answers ?? []).map((item) => [
          item.question_id, item.selected_option_id,
        ])))
        return refreshed.result
      }
      setError('Sonuç kaydedildi ancak ayrıntılar şu anda yüklenemedi.')
      return null
    } finally {
      finishingRef.current = false
      setFinishing(false)
    }
  }, [answerAction, attemptContentState, attemptId, classifyAttemptContent,
    finalizeAction, flush, getAttempt, pending, perform, sourceCode, studentId])

  const retry = useCallback(async () => {
    if (retryingRef.current) return []
    retryingRef.current = true
    try {
      // Yeniden deneme de cevaplarla aynı seri kuyruğa girer. Böylece kullanıcı
      // düğmeye basarken gelen yeni bir seçim, outbox flush yazımını ezemez.
      const flushTask = answerQueueRef.current.catch(() => null).then(() => flush())
      answerQueueRef.current = flushTask.then(() => undefined, () => undefined)
      const outcomes = await flushTask

      if (!attemptId) {
        const started = [...outcomes].reverse().find((item) => (
          item.type === startAction
          && isSuccessfulActionResult(item.result)
          && item.result?.attempt_id
        ))?.result
        if (started) {
          const contentState = classifyAttemptContent(started)
          if (contentState === 'current') {
            const next = new URLSearchParams(searchParams)
            next.set(urlParam, started.attempt_id)
            setSearchParams(next, { replace: true })
            setAttempt(started)
            setAttemptContentState('current')
            setAnswers({})
            setError(null)
            return outcomes
          }
        }
      } else {
        // Finalize isteği bağlantı yokken outbox'ta kalmış olabilir. Flush
        // başarıya ulaştığında yerel tahmine geçmeden sunucu sonucunu yenile.
        const refreshed = await getAttempt(attemptId)
        const result = refreshed.result
        if (refreshed.status === 'available' && result
          && result.source_code === sourceCode && result.content_id === contentId) {
          const contentState = classifyAttemptContent(result)
          const restored = Object.fromEntries((result.answers ?? []).map((item) => [
            item.question_id, item.selected_option_id,
          ]))
          if (result.attempt_status === 'in_progress') {
            for (const item of pending()) {
              if (item.type === answerAction && item.payload?.attempt_id === attemptId) {
                restored[item.payload.question_id] = item.payload.selected_option_id
              }
            }
          }
          setAttempt(result)
          setAttemptContentState(contentState)
          setAnswers(restored)
        }
      }

      const unresolved = pending().some((item) => (
        (!attemptId || item.payload?.attempt_id === attemptId)
        && [startAction, answerAction, finalizeAction].includes(item.type)
      ))
      if (!unresolved) setError(null)
      return outcomes
    } finally {
      retryingRef.current = false
    }
  }, [answerAction, attemptId, classifyAttemptContent, contentId, finalizeAction,
    flush, getAttempt, pending, searchParams, setSearchParams, sourceCode,
    startAction, urlParam])

  const restart = useCallback(() => {
    clearSessionActionId(startScope)
    if (attemptId) clearSessionActionId(`${studentId}:${sourceCode}:${attemptId}:finalize`)
    const next = new URLSearchParams(searchParams)
    next.delete(urlParam)
    setSearchParams(next, { replace: true })
    setAttempt(null)
    setAttemptContentState('unknown')
    setAnswers({})
    setError(null)
  }, [attemptId, searchParams, setSearchParams, sourceCode, startScope, studentId, urlParam])

  const questionIds = useMemo(() => {
    if (!attempt) return questionSet.questions.map((question) => question.id)
    return attemptContentState === 'current' ? attempt.question_ids : []
  }, [attempt, attemptContentState, questionSet.questions])
  const questions = useMemo(() => {
    const byId = new Map(questionSet.questions.map((question) => [question.id, question]))
    return questionIds.map((id) => byId.get(id)).filter(Boolean)
  }, [questionIds, questionSet.questions])

  return {
    authLoading,
    isStudent: Boolean(studentId),
    descriptor,
    attemptId,
    attempt,
    answers,
    questions,
    loading,
    error,
    detailsAvailable: attemptContentState === 'current' && attempt?.detail_available !== false,
    starting,
    finishing,
    saveStatus: activity.status,
    retry,
    start,
    answer,
    finalize,
    restart,
  }
}
