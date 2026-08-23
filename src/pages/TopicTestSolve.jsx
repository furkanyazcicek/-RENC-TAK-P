import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { AppShell, Button } from '../components/ui'
import QuestionCard from '../components/tests/QuestionCard'
import { ArrowLeft } from 'lucide-react'
import { loadQuestionSet } from '../lib/questionLibrary'

const DIFFICULTY_LABELS = {
  very_easy: 'Çok Kolay',
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
}

export default function TopicTestSolve() {
  const { topicSlug, testId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const returnTo = location.state?.returnTo ?? '/kutuphane/sorular'
  const [test, setTest] = useState(null)
  const [answers, setAnswers] = useState({}) // { questionId: selectedOptionId }
  const [isFinishing, setIsFinishing] = useState(false)

  useEffect(() => {
    let active = true
    loadQuestionSet(testId, topicSlug).then((foundTest) => { if (active) setTest(foundTest) })
    return () => { active = false }
  }, [topicSlug, testId])

  if (!test) return <AppShell loading />

  const handleSelect = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const handleFinish = () => {
    setIsFinishing(true)
    setTimeout(() => {
      navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result`, { state: { answers, test } })
    }, 400)
  }

  const answeredCount = Object.keys(answers).length
  const totalCount = test.questions.length

  return (
    <AppShell
      title={test.title}
      subtitle={test.description}
      headerAction={
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate(-1)}>
          Geri
        </Button>
      }
    >
      <div className="max-w-3xl mx-auto py-8 px-4">
        {/* Test Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="text-sm text-muted mb-1">Biyoloji · {topicSlug}</div>
            <div className="text-3xl font-bold text-foreground">{test.title}</div>
            <div className="text-muted mt-1">{test.description}</div>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-line px-4 py-2 rounded-xl">
            <div className="text-sm text-muted">
              Çözülen: <strong className="text-foreground">{answeredCount}</strong> / {totalCount}
            </div>
            <div className="h-4 w-px bg-line" />
            <div className="text-sm font-medium text-brand">
              {DIFFICULTY_LABELS[test.questions[0]?.difficulty] || 'Kavrama'}
            </div>
          </div>
        </div>

        {/* Sorular */}
        <div className="flex flex-col gap-8 mb-12">
          {test.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              selectedOptionId={answers[question.id]}
              onSelectOption={(optionId) => handleSelect(question.id, optionId)}
              disabled={isFinishing}
            />
          ))}
        </div>

        {/* Testi Bitir */}
        <div className="sticky bottom-6 z-10 flex justify-center bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-line shadow-xl">
          <Button 
            onClick={handleFinish} 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px]"
            loading={isFinishing}
          >
            {answeredCount === totalCount ? 'Testi Bitir ve Sonucu Gör' : 'Testi Bitir'}
          </Button>
        </div>
      </div>
    </AppShell>
  )
}
