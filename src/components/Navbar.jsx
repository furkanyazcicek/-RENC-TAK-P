import ProfileMenu from './ProfileMenu'
import Logo from './ui/Logo'

/**
 * Navbar — her sayfanın üstündeki yapışkan başlık şeridi.
 * Genellikle doğrudan değil, `ui/AppShell` üzerinden kullanılır.
 *
 * Masaüstünde solda sidebar olduğu için burada yalnızca sayfa başlığı ve
 * aksiyonlar durur; mobilde sidebar olmadığından marka işareti de görünür.
 *
 * Şerit cam (`glass`) — altındaki Aurora zemini hafifçe geçirir, böylece
 * sayfa kaydırıldığında içerik başlığın ardında yumuşakça kaybolur.
 */
export default function Navbar({ title, subtitle, action }) {
  return (
    <header className="sticky top-0 z-sticky border-b border-line glass pt-safe-top">
      <div className="flex h-header items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobilde sidebar yok — marka işareti buraya taşınır */}
          <span className="lg:hidden">
            <Logo size="sm" markOnly />
          </span>
          <div className="min-w-0">
            <h1 className="truncate font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
              {title}
            </h1>
            {subtitle && (
              <p className="truncate text-xs text-ink/60 sm:text-sm">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {action}
          <ProfileMenu />
        </div>
      </div>
    </header>
  )
}
