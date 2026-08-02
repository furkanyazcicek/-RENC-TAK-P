import ProfileMenu from './ProfileMenu'

export default function Navbar({ title, subtitle }) {
  return (
    <header className="sticky top-0 z-10 border-b border-ink/[0.06] bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-ink">{title}</h1>
          {subtitle && <p className="text-sm text-ink/50">{subtitle}</p>}
        </div>
        <ProfileMenu />
      </div>
    </header>
  )
}
