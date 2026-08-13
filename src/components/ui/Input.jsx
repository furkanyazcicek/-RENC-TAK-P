import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

/**
 * Input / Textarea / Select — tek bir görsel dile sahip form alanları.
 * Hepsi `.input-base` sınıfını temel alır (bkz. src/index.css).
 */

const Input = forwardRef(function Input(
  { className, invalid = false, icon: Icon, suffix, type = 'text', ...props },
  ref
) {
  const field = (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cn(
        'input-base',
        Icon && 'pl-10',
        suffix && 'pr-12',
        invalid && 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/15',
        className
      )}
      {...props}
    />
  )

  if (!Icon && !suffix) return field

  return (
    <div className="relative">
      {Icon && (
        <Icon
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/55"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
      {field}
      {suffix && (
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-ink/55">
          {suffix}
        </span>
      )}
    </div>
  )
})

export default Input

export const Textarea = forwardRef(function Textarea(
  { className, invalid = false, rows = 3, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(
        'input-base resize-y min-h-[5rem] leading-relaxed',
        invalid && 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/15',
        className
      )}
      {...props}
    />
  )
})

export const Select = forwardRef(function Select({ className, invalid = false, children, ...props }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          'input-base appearance-none pr-10 cursor-pointer',
          invalid && 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/15',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/55"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
})
