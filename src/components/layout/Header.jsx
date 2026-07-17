import { SearchIcon } from '../icons.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'

// Top bar. Holds a (decorative for now) search box, the theme toggle,
// and the current user.
export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-end border-b border-border bg-surface px-6">

      {/* Actions + current user */}
      <div className="flex items-center gap-3 pl-4">
        <ThemeToggle />
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-foreground">Rai Salim</p>
          <p className="text-xs text-muted">Student</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary-soft-foreground">
          RS
        </span>
      </div>
    </header>
  )
}
