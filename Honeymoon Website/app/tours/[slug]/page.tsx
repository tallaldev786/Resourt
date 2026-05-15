import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTourBySlug, getAllTours, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const tours = await getAllTours()
  return tours
    .filter((t: Record<string, unknown>) => t.slug)
    .map((t: Record<string, unknown>) => ({ slug: String(t.slug) }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const tour = await getTourBySlug(slug)
  if (!tour) return { title: "Tour | Jacada Travel" }
  return {
    title: `${tour.title} | Jacada Travel`,
    description: tour.excerpt ?? `Luxury tour: ${tour.title}`,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = await getTourBySlug(slug)

  if (!tour) notFound()

  const coverImage = getMediaUrl(tour.coverImage)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={coverImage || "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070"}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            ← All Tours
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-white leading-tight max-w-4xl">
            {tour.title}
          </h1>
          <div className="flex items-center gap-8 mt-6">
            {tour.duration && (
              <span className="text-white/80 text-sm uppercase tracking-wider">{tour.duration}</span>
            )}
            {tour.priceFrom && (
              <span className="text-white font-medium">From ${Number(tour.priceFrom).toLocaleString()}</span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {tour.excerpt && (
                <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed mb-12">
                  {tour.excerpt}
                </p>
              )}

              {/* Itinerary */}
              {tour.itinerary?.length > 0 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-8">Your Itinerary</h2>
                  <div className="space-y-8">
                    {tour.itinerary.map((day: { day: number; title: string; description?: string }) => (
                      <div key={day.day} className="flex gap-6 pb-8 border-b border-[#f0f0f0] last:border-0">
                        <div className="flex-shrink-0 w-14 h-14 bg-[#1a1a1a] flex items-center justify-center">
                          <span className="text-white text-xs uppercase tracking-wider">Day {day.day}</span>
                        </div>
                        <div>
                          <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{day.title}</h3>
                          {day.description && (
                            <p className="text-[#666] leading-relaxed text-sm">{day.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related destinations */}
              {tour.destinations?.length > 0 && (
                <div className="mt-16">
                  <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Destinations Visited</h2>
                  <div className="flex flex-wrap gap-3">
                    {tour.destinations.map((dest: { id: string; name: string; slug?: string }) => (
                      <Link
                        key={dest.id}
                        href={dest.slug ? `/destinations/${dest.slug}` : "/destinations"}
                        className="px-5 py-2.5 border border-[#e5e5e5] text-sm text-[#444] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all"
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#f8f8f6] p-8 sticky top-24">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Enquire about this trip</h3>
                {tour.priceFrom && (
                  <p className="text-2xl font-serif text-[#0d7377] mb-6">
                    From ${Number(tour.priceFrom).toLocaleString()}
                    <span className="text-sm text-[#999] font-sans"> per person</span>
                  </p>
                )}
                <p className="text-[#666] text-sm leading-relaxed mb-8">
                  Every trip is 100% tailor-made. Our specialists will customise this itinerary to your exact preferences.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full bg-[#1a1a1a] text-white text-center py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#0d7377] transition-colors mb-3"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/tours"
                  className="block w-full border border-[#e5e5e5] text-[#1a1a1a] text-center py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#f5f5f5] transition-colors"
                >
                  View All Tours
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
