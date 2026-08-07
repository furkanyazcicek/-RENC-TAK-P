import { SUBJECT_PRESETS } from '../lib/examHelpers'

export default function ExamTypeTabs({ value, onChange, counts = {} }) {
  const types = Object.keys(SUBJECT_PRESETS)

  return (
    <div className="flex flex-wrap gap-1.5">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onChange(type)}
          className={`focus-ring rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            value === type ? 'bg-brand-500 text-white shadow-sm' : 'bg-ink/5 text-ink/50 hover:bg-ink/10'
          }`}
        >
          {type}
          {counts[type] != null && (
            <span className={`ml-1 ${value === type ? 'text-white/70' : 'text-ink/30'}`}>({counts[type]})</span>
          )}
        </button>
      ))}
    </div>
  )
}
