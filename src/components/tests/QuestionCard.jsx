import React from 'react'
import { Button } from '../ui'
import { MathText } from '../aiSolve/MathRenderer'

export default function QuestionCard({ question, index, selectedOptionId, onSelectOption, disabled, showCorrect, correctOptionId, explanation }) {
  if (!question) return null

  const questionText = question.questionText || question.question || ''

  return (
    <div className="flex flex-col gap-6 p-6 bg-surface border border-line rounded-2xl">
      {/* Soru Metni */}
      <div className="flex gap-4">
        {index !== undefined && (
          <div className="flex-shrink-0 w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
        )}
        <div className="text-lg font-medium text-foreground pt-1.5 whitespace-pre-line">
          <MathText text={questionText} />
        </div>
      </div>

      {/* Şıklar */}
      <div className="flex flex-col gap-3 pl-0 sm:pl-14">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id
          const isCorrect = showCorrect && option.id === correctOptionId
          const isWrongSelected = showCorrect && isSelected && option.id !== correctOptionId

          let borderClass = 'border-line bg-surface hover:bg-surface-muted'
          let circleClass = 'bg-surface-muted text-muted border-line'

          if (showCorrect) {
            if (isCorrect) {
              borderClass = 'border-success bg-success/5 ring-1 ring-success/20'
              circleClass = 'bg-success text-white border-success'
            } else if (isWrongSelected) {
              borderClass = 'border-danger bg-danger/5 ring-1 ring-danger/20'
              circleClass = 'bg-danger text-white border-danger'
            } else {
              borderClass = 'border-line bg-surface opacity-50'
            }
          } else if (isSelected) {
            borderClass = 'border-brand bg-brand/5 ring-1 ring-brand/20'
            circleClass = 'bg-brand text-white border-brand'
          }

          return (
            <button
              key={option.id}
              disabled={disabled || showCorrect}
              onClick={() => onSelectOption && onSelectOption(option.id)}
              className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${borderClass}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-semibold border ${circleClass}`}>
                {option.id}
              </div>
              <div className="pt-1 text-foreground leading-relaxed">
                <MathText text={option.text} />
              </div>
            </button>
          )
        })}
      </div>
      
      {/* Çözüm / Açıklama */}
      {showCorrect && explanation && (
        <div className="mt-4 pl-0 sm:pl-14">
          <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl text-sm leading-relaxed text-foreground">
            <div className="font-semibold text-brand mb-1">Çözüm:</div>
            <MathText text={typeof explanation === 'string' ? explanation : ''} />
          </div>
        </div>
      )}
    </div>
  )
}
