import { AlertCircle, Check, CloudOff, LoaderCircle } from 'lucide-react'
import { ACTION_STATUS, actionStatusLabel } from '../../lib/learning/contentActivity/outbox.js'

export default function SaveStatus({ status = ACTION_STATUS.idle, onRetry = null, className = '' }) {
  const label = actionStatusLabel(status)
  if (!label) return null
  const Icon = status === ACTION_STATUS.saved
    ? Check
    : status === ACTION_STATUS.saving
      ? LoaderCircle
      : status === ACTION_STATUS.conflict
        ? AlertCircle
        : CloudOff
  return (
    <div className={`inline-flex min-h-6 items-center gap-1.5 text-xs text-muted ${className}`} role="status" aria-live="polite">
      <Icon className={`h-3.5 w-3.5 ${status === ACTION_STATUS.saving ? 'animate-spin' : ''}`} aria-hidden="true" />
      <span>{label}</span>
      {onRetry && [ACTION_STATUS.retrying, ACTION_STATUS.protected_local, ACTION_STATUS.unavailable].includes(status) && (
        <button type="button" onClick={onRetry} className="focus-ring min-h-8 rounded px-2 font-semibold text-brand-700 hover:bg-brand-50">
          Yeniden dene
        </button>
      )}
    </div>
  )
}
