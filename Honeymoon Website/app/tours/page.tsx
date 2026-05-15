import Image from "next/image"
import Link from "next/link"
import { getAllTours, getPageBySlug, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"

const fallbackTours = [
  { id: "1", title: "Luxury Galapagos Vacation", duration: "12 days", priceFrom: 8500, slug: null, excerpt: "Encounter extraordinary wildlife in one of the world's last unspoiled places.", coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070" },
  { id: "2", title: "Discover the Desert Wildlife of Namibia", duration: "10 days", priceFrom: 6200, slug: null, excerpt: "Vast sand dunes, ancient rock art and extraordinary desert-adapted wildlife.", coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
  { id: "3", title: "The Best of Australia and New Zealand", duration: "21 days", priceFrom: 12000, slug: null, excerpt: "Two extraordinary countries, one unforgettable journey.", coverImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030" },
  { id: "4", title: "Summer in the Norwegian Fjords", duration: "8 days", priceFrom: 5800, slug: null, excerpt: "Sail through ancient waterways, hike glacier peaks and sleep under midnight sun.", coverImage: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?q=80&w=2070" },
  { id: "5", title: "A Family Adventure to Egypt", duration: "9 days", priceFrom: 4900, slug: null, excerpt: "Pyramids, pharaohs and felucca rides — history comes alive for the whole family.", coverImage: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2071" },
  { id: "6", title: "Luxury Vietnam and Cambodia Honeymoon", duration: "14 days", priceFrom: 7400, slug: null, excerpt: "Ancient temples, emerald bays and intimate riverside lodges.", coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070" },
]

export const metadata = {
  title: "Luxury Safaris & Tours | Jacada Travel",
  description: "Browse our collection of bespoke luxury tours — each one crafted by award-winning travel specialists.",
}

type TourItem = { id: string; title: string; duration: string | null; priceFrom: number | null; slug: string | null; excerpt: string; coverImage: string }

export default async function ToursPage() {
  const [page, cmsTours] = await Promise.all([
    getPageBySlug("tours"),
    getAllTours(),
  ])

  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  const tours: TourItem[] = cmsTours.length
    ? cmsTours.map((t: Record<string, unknown>) => ({
        id: String(t.id),
        title: String(t.title ?? ""),
        duration: t.duration ? String(t.duration) : null,
        priceFrom: t.priceFrom ? Number(t.priceFrom) : null,
        slug: t.slug ? String(t.slug) : null,
        excerpt: t.excerpt ? String(t.excerpt) : "",
        coverImage: getMediaUrl(t.coverImage as string | { url?: string } | null),
      }))
    : fallbackTours

  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      <Header />

      {/* Hero */}
      {heroBlock ? (
        <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070" }} />
      ) : (
        <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070" alt="Luxury Tours" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Your trip, your story</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-none">Luxury Safaris & Tours</h1>
          </div>
        </section>
      )}

      {/* Tours grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour: TourItem) => (
              <Link key={tour.id} href={tour.slug ? `/tours/${tour.slug}` : "#"} className="group bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={tour.coverImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"} alt={tour.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl text-[#1a1a1a] group-hover:text-[#0d7377] transition-colors mb-3 leading-snug">{tour.title}</h2>
                  {tour.excerpt && <p className="text-[#666] text-sm leading-relaxed line-clamp-2 mb-4">{tour.excerpt}</p>}
                  <div className="flex items-center justify-between text-sm text-[#999]">
                    {tour.duration && <span>{tour.duration}</span>}
                    {tour.priceFrom && <span className="text-[#1a1a1a] font-medium">From ${tour.priceFrom.toLocaleString()}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {otherBlocks.length > 0 && <BlockRenderer blocks={otherBlocks} />}

      <Footer />
    </main>
  )
}
