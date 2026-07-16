import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold text-muted/50">404</p>
      <h1 className="mt-4 text-xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-1 text-sm text-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        Back to dashboard
      </Link>
    </div>
  )
}
