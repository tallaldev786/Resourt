import Image from "next/image"
import Link from "next/link"
import { getAllExperiences, getPageBySlug, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"

const fallbackExperiences = [
  { id: "1", title: "Active Adventures", slug: null, excerpt: "Experience the world's most beautiful hikes, dives and safaris.", heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070" },
  { id: "2", title: "Family Journeys", slug: null, excerpt: "Set off on a bespoke trip, guided by first-hand expertise.", heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038" },
  { id: "3", title: "Romantic Escapes", slug: null, excerpt: "Unforgettable honeymoons and romantic getaways for two.", heroImage: "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&w=2070" },
  { id: "4", title: "Cultural Immersion", slug: null, excerpt: "Connect deeply with local cultures, traditions and people.", heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070" },
  { id: "5", title: "Luxury Retreats", slug: null, excerpt: "Exceptional lodges and resorts in the world's most breathtaking settings.", heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080" },
]

export const metadata = {
  title: "Trip Types | Jacada Travel",
  description: "Explore our range of luxury travel experiences — from active adventures to romantic escapes.",
}

type ExperienceItem = { id: string; title: string; slug: string | null; excerpt: string; heroImage: string }

export default async function ExperiencesPage() {
  const [page, cmsExperiences] = await Promise.all([
    getPageBySlug("experiences"),
    getAllExperiences(),
  ])

  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  const experiences: ExperienceItem[] = cmsExperiences.length
    ? cmsExperiences.map((e: Record<string, unknown>) => ({
        id: String(e.id),
        title: String(e.title ?? ""),
        slug: e.slug ? String(e.slug) : null,
        excerpt: e.excerpt ? String(e.excerpt) : "",
        heroImage: getMediaUrl(e.heroImage as string | { url?: string } | null),
      }))
    : fallbackExperiences

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      {heroBlock ? (
        <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070" }} />
      ) : (
        <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070" alt="Trip Types" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Find your journey</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-none">Trip Types</h1>
          </div>
        </section>
      )}

      {/* Experiences grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((experience: ExperienceItem, index: number) => (
              <Link key={experience.id} href={experience.slug ? `/experiences/${experience.slug}` : "#"}
                className={`group relative overflow-hidden ${index === 0 ? "lg:col-span-2 aspect-[21/9]" : "aspect-[16/10]"}`}>
                <Image src={experience.heroImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"} alt={experience.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <h2 className="font-serif text-3xl lg:text-4xl text-white mb-3">{experience.title}</h2>
                  {experience.excerpt && <p className="text-white/75 max-w-lg leading-relaxed text-sm lg:text-base">{experience.excerpt}</p>}
                  <span className="inline-flex items-center gap-2 text-white/60 text-xs mt-4 uppercase tracking-wider group-hover:text-white transition-colors">
                    Explore <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
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
