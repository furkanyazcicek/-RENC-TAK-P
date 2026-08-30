import LessonFigure from './LessonFigure'
import {
  CheckpointBlock,
  CauseEffectBlock,
  CompareBlock,
  ConceptMapBlock,
  ConceptBlock,
  ConnectionBlock,
  ExamBlock,
  ExampleBlock,
  FormulaBlock,
  MechanismBlock,
  MemoryBlock,
  NextStepBlock,
  PeriodSummaryBlock,
  HistoricalMapBlock,
  HistoricalFiguresBlock,
  ProcessBlock,
  ProseBlock,
  QuizBlock,
  SummaryBlock,
  TableBlock,
  TeacherNoteBlock,
  TimelineBlock,
  TrapBlock,
  WhyBlock,
  WorkedExampleBlock,
  ArgumentFlowBlock,
  OsyMInsightBlock,
  PhilosopherBlock,
  QuestionClueBlock,
  SentenceAnalysisBlock,
  DecisionTreeBlock,
  OsyMSimulationBlock,
} from './blocks'

/**
 * BLOK YÖNLENDİRİCİ
 * ==================================================================
 *
 * İçerik ne sunum bileşenini ne de yerleşimini seçer. İkisine de burası
 * karar verir (§14). Ders belgesi yalnızca "bu bir tuzaktır" der.
 *
 * İKİ KARAR VERİLİR
 *
 * 1) HANGİ BİLEŞEN — `PRESENTERS` tablosu.
 *    Tanınmayan tip sessizce atlanır; ders çökmez (§50).
 *
 * 2) HANGİ ŞERİT VE HANGİ RİTİM — `LAYOUT` ve `RHYTHM`.
 *    Hoca notu kenar şeridine, şekil ve tablo geniş şeride, geri kalanı
 *    okuma ölçüsüne gider. Dikey boşluk blok tipine göre DEĞİŞİR: iki
 *    paragraf arasındaki nefes ile bir şekilden önceki nefes aynı
 *    olmamalı. Sabit `gap` kullanmak, sayfayı "eşit aralıklı kutular
 *    listesi"ne çevirir — kaçındığımız görüntü tam olarak budur.
 *
 * NEDEN FLEX/GRID DEĞİL, NORMAL AKIŞ?
 * Kenar notları negatif kenar boşluklu float ile yerleşiyor. Flex ya da
 * grid kabında float çalışmaz. Bu yüzden aralıklar `margin-top` ile
 * verilir; kap normal blok akışında kalır.
 */

const PRESENTERS = {
  prose: ProseBlock,
  concept: ConceptBlock,
  why: WhyBlock,
  mechanism: MechanismBlock,
  process: ProcessBlock,
  teacher_note: TeacherNoteBlock,
  trap: TrapBlock,
  exam: ExamBlock,
  question_clue: QuestionClueBlock,
  osym_insight: OsyMInsightBlock,
  philosopher: PhilosopherBlock,
  argument_flow: ArgumentFlowBlock,
  connection: ConnectionBlock,
  memory: MemoryBlock,
  formula: FormulaBlock,
  table: TableBlock,
  compare: CompareBlock,
  concept_map: ConceptMapBlock,
  timeline: TimelineBlock,
  cause_effect: CauseEffectBlock,
  period_summary: PeriodSummaryBlock,
  historical_map: HistoricalMapBlock,
  historical_figures: HistoricalFiguresBlock,
  sentence_analysis: SentenceAnalysisBlock,
  decision_tree: DecisionTreeBlock,
  example: ExampleBlock,
  worked_example: WorkedExampleBlock,
  checkpoint: CheckpointBlock,
  quiz: QuizBlock,
  osym_simulation: OsyMSimulationBlock,
  summary: SummaryBlock,
  next_step: NextStepBlock,
}

const LAYOUT = {
  teacher_note: 'lesson-margin-item',
  table: 'lesson-wide',
  compare: 'lesson-wide',
  concept_map: 'lesson-wide',
  timeline: 'lesson-wide',
  cause_effect: 'lesson-wide',
  period_summary: 'lesson-wide',
  historical_map: 'lesson-wide',
  historical_figures: 'lesson-wide',
  sentence_analysis: 'lesson-wide',
  decision_tree: 'lesson-wide',
  osym_simulation: 'lesson-wide',
}

const RHYTHM = {
  prose: 'mt-5',
  concept: 'mt-8',
  why: 'mt-8',
  mechanism: 'mt-8',
  process: 'mt-8',
  example: 'mt-8',
  memory: 'mt-7',
  connection: 'mt-8',
  trap: 'mt-9',
  exam: 'mt-9',
  question_clue: 'mt-9',
  osym_insight: 'mt-9',
  philosopher: 'mt-8',
  argument_flow: 'mt-9',
  formula: 'mt-7',
  table: 'mt-8',
  compare: 'mt-9',
  concept_map: 'mt-9',
  timeline: 'mt-9',
  cause_effect: 'mt-9',
  period_summary: 'mt-8',
  historical_map: 'mt-9',
  historical_figures: 'mt-9',
  sentence_analysis: 'mt-9',
  decision_tree: 'mt-9',
  figure: 'mt-9',
  worked_example: 'mt-9',
  checkpoint: 'mt-9',
  quiz: 'mt-9',
  osym_simulation: 'mt-9',
  summary: 'mt-10',
  next_step: 'mt-10',
  teacher_note: '',
}

export default function LessonBlock({ block, first = false, figureIndex, onExplainFigure, onInteraction, activeNarration = false }) {
  if (!block?.type) return null
  if (block.type === 'audio_script') return null

  const rhythm = first ? '' : (RHYTHM[block.type] ?? 'mt-6')
  const layout = block.type === 'figure' ? (block.width === 'full' ? 'lesson-full' : 'lesson-wide') : (LAYOUT[block.type] ?? '')
  const className = [rhythm, layout, activeNarration ? 'lesson-narration-active' : ''].filter(Boolean).join(' ')
  const sharedProps = {
    id: `lesson-block-${block.id}`,
    className,
    'aria-current': activeNarration ? 'true' : undefined,
  }

  if (block.type === 'figure') {
    return (
      <div {...sharedProps}>
        <LessonFigure block={block} index={figureIndex} onExplain={onExplainFigure} />
      </div>
    )
  }

  const Presenter = PRESENTERS[block.type]
  if (!Presenter) return null

  return (
    <div {...sharedProps}>
      <Presenter block={block} onAnswered={onInteraction} />
    </div>
  )
}
