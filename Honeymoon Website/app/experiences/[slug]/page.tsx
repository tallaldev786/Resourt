import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getExperienceBySlug, getAllExperiences, getMediaUrl } from "@/lib/payload"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const experiences = await getAllExperiences()
  return experiences
    .filter((e: Record<string, unknown>) => e.slug)
    .map((e: Record<string, unknown>) => ({ slug: String(e.slug) }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const experience = await getExperienceBySlug(slug)
  if (!experience) return { title: "Experience | Jacada Travel" }
  return {
    title: `${experience.title} | Jacada Travel`,
    description: experience.excerpt ?? `Luxury ${experience.title} travel experiences`,
  }
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params
  const experience = await getExperienceBySlug(slug)

  if (!experience) notFound()

  const heroImage = getMediaUrl(experience.heroImage)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage || "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070"}
            alt={experience.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            ← All Experiences
          </Link>
          {experience.subtitle && (
            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">{experience.subtitle}</p>
          )}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white leading-none">
            {experience.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {experience.excerpt && (
                <p className="font-serif text-2xl text-[#1a1a1a] leading-relaxed mb-10">
                  {experience.excerpt}
                </p>
              )}

              {experience.relatedDestinations?.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Related Destinations</h2>
                  <div className="flex flex-wrap gap-3">
                    {experience.relatedDestinations.map((dest: { id: string; name: string; slug?: string }) => (
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

            <div className="lg:col-span-1">
              <div className="bg-[#f8f8f6] p-8 sticky top-24">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Plan your {experience.title} trip</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-8">
                  Our specialists will design a bespoke itinerary tailored entirely to you.
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
