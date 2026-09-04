import { cn } from '../../lib/cn'

/**
 * Table — yatayda kaydırılabilen, tutarlı başlık/satır stiline sahip tablo.
 *
 *   <Card className="overflow-hidden">
 *     <Table>
 *       <THead><TH>Öğrenci</TH><TH align="right">Süre</TH></THead>
 *       <TBody>
 *         <TR onClick={…}><TD>Ali</TD><TD align="right">3s 20dk</TD></TR>
 *       </TBody>
 *     </Table>
 *   </Card>
 *
 * Yuvarlak köşe ve kenarlık dışarıdaki `Card`'a aittir; tablo yalnızca
 * satır düzeninden sorumludur. `stickyHeader` uzun listelerde başlığı
 * kaydırma sırasında görünür tutar.
 */
export default function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-x-auto overscroll-x-contain">
      <table className={cn('panel-data-table w-full min-w-full text-sm tabular', className)} {...props}>
        {children}
      </table>
    </div>
  )
}

export function THead({ sticky = false, className, children }) {
  return (
    <thead
      className={cn(
        'bg-surface-muted/80',
        sticky && 'sticky top-0 z-10 backdrop-blur-md',
        className
      )}
    >
      <tr className="border-b border-line">{children}</tr>
    </thead>
  )
}

export function TBody({ className, children }) {
  return <tbody className={cn('divide-y divide-line', className)}>{children}</tbody>
}

const ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export function TH({ align = 'left', className, children, ...props }) {
  return (
    <th
      scope="col"
      className={cn(
        'px-5 py-3.5 text-2xs font-semibold uppercase tracking-wider text-ink/60 whitespace-nowrap',
        ALIGN[align] ?? ALIGN.left,
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

export function TR({ onClick, className, children, ...props }) {
  const clickable = typeof onClick === 'function'
  return (
    <tr
      onClick={onClick}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick(e)
              }
            }
          : undefined
      }
      className={cn(
        'transition-colors duration-150',
        clickable &&
          'cursor-pointer hover:bg-brand-500/[0.05] focus-visible:bg-brand-500/[0.07] focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

export function TD({ align = 'left', className, children, ...props }) {
  return (
    <td className={cn('px-5 py-3.5 text-ink/80', ALIGN[align] ?? ALIGN.left, className)} {...props}>
      {children}
    </td>
  )
}
