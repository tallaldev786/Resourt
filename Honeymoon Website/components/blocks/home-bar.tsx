import Link from "next/link"

export function HomeBar() {
  return (
    <div className="py-6 bg-[#f8f8f6] text-center">
      <Link
        href="http://localhost:3000"
        className="inline-flex items-center gap-2 text-[#0d7377] hover:text-[#0a5c5f] text-xs uppercase tracking-[0.18em] transition-colors"
      >
        ← Home
      </Link>
    </div>
  )
}
