// Dashed empty-state card used by the stub pages.
// Replace each page's <Placeholder/> with real content as you build it out.
export default function Placeholder({ children }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface p-8 text-center">
      <p className="max-w-md text-sm text-muted">{children}</p>
    </div>
  )
}
