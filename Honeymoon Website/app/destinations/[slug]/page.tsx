import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getDestinationBySlug, getAllDestinations, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const destinations = await getAllDestinations()
  return destinations
    .filter((d: Record<string, unknown>) => d.slug)
    .map((d: Record<string, unknown>) => ({ slug: String(d.slug) }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const destination = await getDestinationBySlug(slug)
  if (!destination) return { title: "Destination | Jacada Travel" }
  return {
    title: `${destination.name} | Jacada Travel`,
    description: destination.excerpt ?? `Luxury travel to ${destination.name}`,
  }
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params
  const destination = await getDestinationBySlug(slug)

  if (!destination) notFound()

  const heroImage = getMediaUrl(destination.heroImage)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            ← All Destinations
          </Link>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white leading-none">
            {destination.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              {destination.excerpt && (
                <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed mb-10">
                  {destination.excerpt}
                </p>
              )}

              {destination.highlights?.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    {destination.highlights.map((h: { text: string }, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-[#444]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0d7377] flex-shrink-0" />
                        {h.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-[#f8f8f6] p-8 sticky top-24">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Plan your trip to {destination.name}</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-8">
                  Our specialists have first-hand knowledge of {destination.name} and will create a journey tailored entirely to you.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full bg-[#1a1a1a] text-white text-center py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#0d7377] transition-colors"
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
