// Primary action button. Styling lives here once, so every button across the
// app stays consistent and re-themes automatically via the color tokens.
const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary/40',
  secondary:
    'border border-border bg-surface text-foreground hover:bg-surface-2 focus:ring-primary/40',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
