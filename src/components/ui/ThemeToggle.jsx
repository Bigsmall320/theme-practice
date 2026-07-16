import { useTheme } from '../context/ThemeContext.jsx'
import { SunIcon, MoonIcon } from '../icons.jsx'

// The single button that flips the whole app's theme.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label='Toggle theme'
      title='Toggle theme'
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      {theme === 'light' ? 
        <MoonIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" /> : 
        <SunIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />}
    </button>
  )
}
