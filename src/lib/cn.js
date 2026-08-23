/**
 * cn — koşullu className birleştirici.
 *
 * Harici bağımlılık (clsx / classnames) gerektirmez.
 *
 *   cn('p-2', isActive && 'bg-brand-500', ['a', 'b'], { 'text-white': isActive })
 */
export function cn(...inputs) {
  const out = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === 'string' || typeof input === 'number') {
      out.push(String(input))
    } else if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) out.push(nested)
    } else if (typeof input === 'object') {
      for (const key of Object.keys(input)) {
        if (input[key]) out.push(key)
      }
    }
  }

  return out.join(' ')
}

export default cn
