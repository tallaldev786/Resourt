import Image from "next/image"
import Link from "next/link"
import { getAllDestinations, getPageBySlug, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"

const fallbackDestinations = [
  { id: "1", name: "Africa", slug: null, excerpt: "Sweeping savannahs, iconic wildlife and ancient cultures await.", heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
  { id: "2", name: "Central Asia", slug: null, excerpt: "Discover the Silk Road's timeless landscapes and hidden gems.", heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2069" },
  { id: "3", name: "Indian Subcontinent", slug: null, excerpt: "From the Taj Mahal to the Maldives — a world of contrast and colour.", heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071" },
  { id: "4", name: "Latin America", slug: null, excerpt: "Ancient ruins, Amazon rainforest and glacier-carved peaks.", heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070" },
  { id: "5", name: "South Pacific", slug: null, excerpt: "Turquoise lagoons, overwater bungalows and volcanic islands.", heroImage: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073" },
  { id: "6", name: "Europe", slug: null, excerpt: "From Alpine meadows to Mediterranean coastlines.", heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070" },
  { id: "7", name: "Asia", slug: null, excerpt: "Ancient temples, vibrant cities and pristine island retreats.", heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070" },
  { id: "8", name: "Middle East", slug: null, excerpt: "Desert fortresses, spice markets and extraordinary hospitality.", heroImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070" },
]

export const metadata = {
  title: "Destinations | Jacada Travel",
  description: "Explore our handpicked luxury destinations across the world — from African safaris to South Pacific islands.",
}

export default async function DestinationsPage() {
  const [page, cmsDestinations] = await Promise.all([
    getPageBySlug("destinations"),
    getAllDestinations(),
  ])

  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  const destinations = cmsDestinations.length
    ? cmsDestinations.map((d: Record<string, unknown>) => ({
        id: String(d.id),
        name: String(d.name ?? ""),
        slug: d.slug ? String(d.slug) : null,
        excerpt: d.excerpt ? String(d.excerpt) : "",
        heroImage: getMediaUrl(d.heroImage as string | { url?: string } | null),
      }))
    : fallbackDestinations

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero — from Payload or static fallback */}
      {heroBlock ? (
        <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070" }} />
      ) : (
        <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070" alt="Destinations" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Explore the world</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-none">Our Destinations</h1>
          </div>
        </section>
      )}

      {/* Destinations grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination: { id: string; name: string; slug: string | null; excerpt: string; heroImage: string }) => (
              <Link key={destination.id} href={destination.slug ? `/destinations/${destination.slug}` : "#"} className="group relative aspect-[3/4] overflow-hidden">
                <Image src={destination.heroImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"} alt={destination.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-serif text-2xl text-white mb-2">{destination.name}</h2>
                  {destination.excerpt && <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{destination.excerpt}</p>}
                  <span className="inline-flex items-center gap-2 text-white/60 text-xs mt-3 uppercase tracking-wider group-hover:text-white transition-colors">
                    Explore <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extra blocks from Payload (features, CTA, newsletter etc.) */}
      {otherBlocks.length > 0 && <BlockRenderer blocks={otherBlocks} />}

      <Footer />
    </main>
  )
}
