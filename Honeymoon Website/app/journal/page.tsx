import Image from "next/image"
import Link from "next/link"
import { getJournalArticles, getPageBySlug, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"

const fallbackArticles = [
  { id: "1", title: "The Best Places to Visit in 2026", excerpt: "Our experts reveal the destinations topping their lists this year.", publishedAt: "2026-01-15", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068" },
  { id: "2", title: "19 Top Luxury Hotels for Stargazing", excerpt: "From Atacama Desert observatories to Maldivian glass-floored villas.", publishedAt: "2026-01-10", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070" },
  { id: "3", title: "The Best Hotels for Farm-to-Table Experiences", excerpt: "Where exceptional food meets extraordinary surroundings.", publishedAt: "2026-01-05", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" },
  { id: "4", title: "The Best Walking Safaris in Africa", excerpt: "Leave the vehicle behind and experience the wild at ground level.", publishedAt: "2025-12-20", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
  { id: "5", title: "The Best Wine Regions in South Africa", excerpt: "From Stellenbosch to Franschhoek — a vinous journey through the Cape.", publishedAt: "2025-12-15", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" },
  { id: "6", title: "Our Favourite Experiences in Africa", excerpt: "Ask the Experts: the moments that stay with you forever.", publishedAt: "2025-12-10", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071" },
  { id: "7", title: "An Introduction to Slow Travel", excerpt: "Why staying longer is the secret to travelling better.", publishedAt: "2025-12-01", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2069" },
  { id: "8", title: "The Best Places in South America in Winter", excerpt: "Patagonia in snow, Machu Picchu without the crowds.", publishedAt: "2025-11-20", author: "", slug: null, coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070" },
]

export const metadata = {
  title: "Journal | Jacada Travel",
  description: "Travel inspiration, expert guides and stories from the field.",
}

type ArticleItem = { id: string; title: string; excerpt: string; publishedAt: string; author: string; slug: string | null; coverImage: string }

function formatDate(dateStr: string) {
  try { return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) }
  catch { return "" }
}

export default async function JournalPage() {
  const [page, cmsArticles] = await Promise.all([
    getPageBySlug("journal"),
    getJournalArticles(50),
  ])

  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  const articles: ArticleItem[] = cmsArticles.length
    ? cmsArticles.map((a: Record<string, unknown>) => ({
        id: String(a.id),
        title: String(a.title ?? ""),
        excerpt: a.excerpt ? String(a.excerpt) : "",
        publishedAt: a.publishedAt ? String(a.publishedAt) : "",
        author: a.author ? String(a.author) : "",
        slug: a.slug ? String(a.slug) : null,
        coverImage: getMediaUrl(a.coverImage as string | { url?: string } | null),
      }))
    : fallbackArticles

  const [featured, ...rest] = articles

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      {heroBlock ? (
        <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070" }} />
      ) : (
        <section className="pt-36 pb-16 bg-[#f8f8f6]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">Travel Inspiration</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1a1a1a] leading-none">The Journal</h1>
          </div>
        </section>
      )}

      {/* Featured article */}
      {featured && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href={featured.slug ? `/journal/${featured.slug}` : "#"} className="group grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={featured.coverImage || "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068"} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="bg-[#f8f8f6] p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-[#999] text-xs uppercase tracking-[0.2em] mb-4">Featured Article</span>
                <h2 className="font-serif text-3xl lg:text-4xl text-[#1a1a1a] group-hover:text-[#0d7377] transition-colors mb-6 leading-snug">{featured.title}</h2>
                {featured.excerpt && <p className="text-[#666] leading-relaxed mb-8">{featured.excerpt}</p>}
                <div className="flex items-center justify-between text-sm text-[#999]">
                  {featured.author && <span>{featured.author}</span>}
                  {featured.publishedAt && <span>{formatDate(featured.publishedAt)}</span>}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {rest.map((article: ArticleItem) => (
              <Link key={article.id} href={article.slug ? `/journal/${article.slug}` : "#"} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image src={article.coverImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] group-hover:text-[#0d7377] transition-colors leading-snug mb-2">{article.title}</h3>
                {article.publishedAt && <p className="text-[#999] text-xs">{formatDate(article.publishedAt)}</p>}
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
