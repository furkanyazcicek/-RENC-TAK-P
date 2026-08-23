import { useId } from 'react'
import { cn } from '../../lib/cn'

/**
 * Field — etiket + alan + ipucu/hata metnini tek bir tutarlı düzende toplar.
 *
 *   <Field label="Ödev Başlığı" hint="Kısa ve net yazın" required>
 *     <Input value={title} onChange={…} />
 *   </Field>
 *
 * `children` fonksiyon da olabilir: ({ id, describedBy, invalid }) => JSX
 */
export default function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  className,
  children,
}) {
  const generatedId = useId()
  const id = htmlFor ?? generatedId
  const messageId = `${id}-msg`
  const invalid = Boolean(error)
  const describedBy = hint || error ? messageId : undefined

  const content =
    typeof children === 'function' ? children({ id, describedBy, invalid }) : children

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label htmlFor={id} className="label-base">
          {label}
          {required && <span className="text-danger-500 ml-0.5">*</span>}
        </label>
      )}
      {content}
      {(error || hint) && (
        <p
          id={messageId}
          className={cn('mt-1.5 text-xs', error ? 'text-danger-600 font-medium' : 'text-ink/55')}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

export function Label({ className, children, ...props }) {
  return (
    <label className={cn('label-base', className)} {...props}>
      {children}
    </label>
  )
}
