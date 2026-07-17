import { NavLink } from 'react-router-dom'
import { navItems } from './navItems.js'

// Left navigation rail. NavLink automatically applies an "active" state
// to the link whose `to` matches the current URL. Follows the theme:
// light panel in light mode, dark grey in dark mode.
export default function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-surface">
      {/* Brand */}
      <div className="flex h-16 items-center gap-2 px-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
          S
        </span>
        <span className="text-lg font-semibold text-foreground">Student Portal</span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted hover:bg-surface-2 hover:text-foreground',
              ].join(' ')
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border px-6 py-4 text-xs text-muted">
        Student Portal · v0.1.0
      </div>
    </aside>
  )
}
