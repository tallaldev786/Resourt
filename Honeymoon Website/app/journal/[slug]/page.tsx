import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getJournalArticleBySlug, getJournalArticles, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getJournalArticles(50)
  return articles
    .filter((a: Record<string, unknown>) => a.slug)
    .map((a: Record<string, unknown>) => ({ slug: String(a.slug) }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = await getJournalArticleBySlug(slug)
  if (!article) return { title: "Journal | Jacada Travel" }
  return {
    title: `${article.title} | Jacada Travel Journal`,
    description: article.excerpt ?? "",
  }
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  } catch {
    return ""
  }
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getJournalArticleBySlug(slug)

  if (!article) notFound()

  const coverImage = getMediaUrl(article.coverImage)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={coverImage || "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 w-full">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            ← The Journal
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 mt-6 text-white/70 text-sm">
            {article.author && <span>By {article.author}</span>}
            {article.publishedAt && <span>{formatDate(article.publishedAt)}</span>}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {article.excerpt && (
            <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed mb-12 pb-12 border-b border-[#f0f0f0]">
              {article.excerpt}
            </p>
          )}

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.map((t: { tag: string }, i: number) => (
                <span key={i} className="px-4 py-1.5 bg-[#f8f8f6] text-[#666] text-xs uppercase tracking-wider">
                  {t.tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Destinations */}
          {article.relatedDestinations?.length > 0 && (
            <div className="mt-16 pt-16 border-t border-[#f0f0f0]">
              <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Related Destinations</h2>
              <div className="flex flex-wrap gap-3">
                {article.relatedDestinations.map((dest: { id: string; name: string; slug?: string }) => (
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

          {/* CTA */}
          <div className="mt-20 bg-[#f8f8f6] p-10 text-center">
            <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4">Ready to experience it for yourself?</h3>
            <p className="text-[#666] mb-8 max-w-md mx-auto">
              Our specialists will craft a bespoke journey tailored entirely to you.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#0d7377] transition-colors"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
