import { RefreshCw, Sparkles, TriangleAlert } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar, Button } from '../ui'
import ActionCard from './ActionCard'
import Markdown from './Markdown'

/**
 * ChatMessage — tek bir sohbet balonu.
 *
 * Tasarım notu: öğrencinin mesajı dolu Aurora gradient, AI'ınki düz beyaz
 * kart. Böylece uzun AI cevapları okunaklı kalır ve tasarım sistemindeki
 * "gradient bir vurgu aracıdır, gövde metni değildir" kuralı korunur.
 */

/** Cevap üretilirken yanıp sönen imleç. */
function Caret() {
  return (
    <span
      className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] animate-pulse rounded-full bg-brand-500"
      aria-hidden="true"
    />
  )
}

export function CoachAvatar({ className }) {
  return (
    <span
      className={cn(
        'grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-aurora-gradient text-white shadow-aurora',
        className
      )}
      aria-hidden="true"
    >
      <Sparkles className="h-4 w-4" strokeWidth={2.2} />
    </span>
  )
}

export default function ChatMessage({
  message,
  studentName,
  streaming = false,
  onRetry,
  onActionCompleted,
}) {
  const isUser = message.role === 'user'

  if (isUser) {
    return (
      <div className="flex items-start justify-end gap-3">
        <div
          className="max-w-[85%] rounded-panel rounded-tr-md bg-aurora-gradient px-4 py-3
                     text-sm leading-relaxed text-white shadow-aurora sm:max-w-[75%]"
        >
          {/* Kullanıcı metni markdown olarak yorumlanmaz — ne yazdıysa o görünür. */}
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>
        <Avatar name={studentName} size="sm" className="mt-0.5" />
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      <CoachAvatar className="mt-0.5" />

      <div className="min-w-0 max-w-[92%] flex-1 sm:max-w-[85%]">
        <div
          className={cn(
            'rounded-panel rounded-tl-md border px-4 py-3',
            message.error
              ? 'border-danger-500/25 bg-danger-500/[0.05]'
              : 'border-line bg-surface shadow-card'
          )}
        >
          {message.error ? (
            <div className="flex items-start gap-2.5">
              <TriangleAlert
                className="mt-0.5 h-4 w-4 shrink-0 text-danger-600"
                strokeWidth={2}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-sm text-ink/80">{message.content}</p>
                {onRetry && (
                  <Button
                    variant="secondary"
                    size="xs"
                    icon={RefreshCw}
                    className="mt-2.5"
                    onClick={onRetry}
                  >
                    Tekrar dene
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <>
              <Markdown>{message.content}</Markdown>
              {streaming && !message.content && (
                <p className="text-sm text-ink/50">
                  <Caret />
                </p>
              )}
              {streaming && message.content && <Caret />}
            </>
          )}
        </div>

        {/* Aksiyon kartları — gerçek işlemi kullanıcı onayı tetikler */}
        {(message.actions ?? []).map((action, i) => (
          <ActionCard
            key={`${action.type}-${i}`}
            action={action}
            onCompleted={onActionCompleted}
          />
        ))}
      </div>
    </div>
  )
}
