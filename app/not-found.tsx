import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">Oops! Page Not Found</h2>
        <p className="text-primary-100 text-lg mb-8 max-w-md mx-auto">
          We can't seem to find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
