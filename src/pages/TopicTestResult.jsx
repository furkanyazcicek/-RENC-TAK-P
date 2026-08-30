import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { AppShell, Button } from '../components/ui'
import { CheckCircle, ArrowRight } from 'lucide-react'
import QuestionCard from '../components/tests/QuestionCard'

export default function TopicTestResult() {
  const { topicSlug, testId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  const { answers, test, returnTo = '/kutuphane/sorular' } = location.state || {}

  if (!test || !answers) {
    return (
      <AppShell title="Sonuç Bulunamadı">
        <Button onClick={() => navigate(-1)}>Geri Dön</Button>
      </AppShell>
    )
  }

  let correctCount = 0
  let wrongCount = 0
  let emptyCount = 0

  test.questions.forEach((q) => {
    const correct = q.correctOptionId || q.correctAnswer
    if (!answers[q.id]) {
      emptyCount++
    } else if (answers[q.id] === correct) {
      correctCount++
    } else {
      wrongCount++
    }
  })

  const successRate = Math.round((correctCount / test.questions.length) * 100)

  return (
    <AppShell title={`${test.title} Sonucu`}>
      <div className="max-w-3xl mx-auto py-12 px-4">
        
        {/* Başarı Özeti */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>

          <h1 className="text-3xl font-bold mb-2">Test Tamamlandı!</h1>
          <p className="text-lg text-muted mb-8">
            Performans analizini ve soru detaylarını aşağıdan inceleyebilirsin.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-6 bg-surface border border-line rounded-2xl">
              <div className="text-sm text-muted mb-1">Doğru</div>
              <div className="text-3xl font-bold text-success">{correctCount}</div>
            </div>
            <div className="p-6 bg-surface border border-line rounded-2xl">
              <div className="text-sm text-muted mb-1">Yanlış</div>
              <div className="text-3xl font-bold text-danger">{wrongCount}</div>
            </div>
            <div className="p-6 bg-surface border border-line rounded-2xl">
              <div className="text-sm text-muted mb-1">Boş</div>
              <div className="text-3xl font-bold text-ink/50">{emptyCount}</div>
            </div>
            <div className="p-6 bg-surface border border-line rounded-2xl">
              <div className="text-sm text-muted mb-1">Başarı</div>
              <div className="text-3xl font-bold text-brand">%{successRate}</div>
            </div>
          </div>

          {successRate < 70 && (
            <div className="bg-warning/10 text-warning-foreground border border-warning/20 p-4 rounded-xl mb-8 text-left">
              <div className="font-semibold mb-1">Tekrar Etmen Gereken Kavramlar</div>
              <p className="text-sm">
                Bazı temel kavramlarda yanlışların var. İlerideki testlerde zorlanmamak için
                ders notunun ilgili bölümüne kısaca göz atmanda fayda var.
              </p>
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => navigate(returnTo)}>
              Konu Sayfasına Dön
            </Button>
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" onClick={() => {
              navigate(returnTo)
            }}>
              Sonraki Teste Geç
            </Button>
          </div>
        </div>
        
        {/* Soru Detayları Analizi */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Soru Detayları ve Çözümler</h2>
          <div className="flex flex-col gap-8">
            {test.questions.map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={index}
                selectedOptionId={answers[question.id]}
                disabled={true}
                showCorrect={true}
                correctOptionId={question.correctOptionId || question.correctAnswer}
                explanation={question.explanation || question.solution}
              />
            ))}
          </div>
        </div>

      </div>
    </AppShell>
  )
}
