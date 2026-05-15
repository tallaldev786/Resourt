import { getPageBySlug } from "@/lib/payload"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import Image from "next/image"
import Link from "next/link"
import { Leaf, Globe, Heart, Users, TreePine, Droplets } from "lucide-react"
import { Newsletter } from "@/components/blocks/newsletter"

export const metadata = {
  title: "Positive Impact | Jacada Travel",
  description: "Discover how Jacada Travel is committed to responsible and sustainable luxury travel that gives back to local communities and preserves natural heritage.",
}

const defaultPrinciples = [
  { icon: Leaf, title: "Preserve Biodiversity", description: "We partner exclusively with lodges and operators that actively contribute to conservation. A portion of every booking supports wildlife reserves and anti-poaching initiatives." },
  { icon: Users, title: "Support Communities", description: "We prioritise locally-owned properties and community-run lodges, ensuring the economic benefits of tourism flow directly to the people who live there." },
  { icon: Globe, title: "Regenerate Heritage", description: "From UNESCO sites to ancient trade routes, we advocate for responsible access policies that protect cultural heritage for future generations." },
  { icon: Heart, title: "Empower Local Guides", description: "Our local guides are partners, not contractors. We pay fair wages, invest in their training, and celebrate their expertise as the cornerstone of every trip." },
  { icon: TreePine, title: "Offset & Reduce Carbon", description: "We calculate the carbon footprint of every trip and invest in verified offsetting projects — from reforestation in Kenya to clean cookstoves in Rwanda." },
  { icon: Droplets, title: "Protect Water Sources", description: "In partnership with our lodge network, we support water conservation projects in water-stressed destinations across Africa and Asia." },
]

const defaultProjects = [
  { title: "Wilderness & Wildlife Fund", location: "Botswana & Zimbabwe", description: "Supporting anti-poaching rangers and wildlife corridors in the Kavango-Zambezi Transfrontier Conservation Area.", stat: "$2.4M raised", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071" },
  { title: "Female Guides of the Future", location: "East Africa", description: "A scholarship programme training the next generation of female safari guides — breaking barriers in a historically male-dominated industry.", stat: "140 graduates", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
  { title: "Community Lodges Initiative", location: "Namibia & Zambia", description: "Directing bookings towards community-owned lodges where 100% of profits fund schools, clinics and water infrastructure.", stat: "28 communities", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
]

function StaticPositiveImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden bg-[#0d3d3f]">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?q=80&w=2074" alt="Positive Impact" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Our commitment</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white leading-none max-w-3xl">
            Travel that gives back
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl lg:text-3xl text-[#1a1a1a] leading-relaxed mb-8">
              We believe that luxury travel and responsible travel are not in conflict — they are one and the same.
            </p>
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              Every trip we craft is guided by our Positive Impact Principles. These aren&apos;t box-ticking policies — they are the deeply held values that inform every decision we make, from which lodges we partner with to how we train our guides.
            </p>
            <p className="text-[#666] leading-relaxed text-lg">
              When you travel with Jacada, you travel knowing that your journey is actively contributing to the places, people and wildlife that make it extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-4 leading-tight">Our Positive Impact Principles</h2>
            <p className="text-[#666] leading-relaxed">Six principles that guide how we travel, who we partner with, and what we stand for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {defaultPrinciples.map((principle) => {
              const Icon = principle.icon
              return (
                <div key={principle.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#0d7377] rounded-full">
                    <Icon className="h-5 w-5 text-[#0d7377]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#1a1a1a] mb-3">{principle.title}</h3>
                    <p className="text-[#666] leading-relaxed text-sm">{principle.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote image */}
      <section className="relative h-[45vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" alt="Wildlife conservation" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl text-center leading-relaxed px-6">
            &ldquo;The world is a book, and those who do not travel read only one page — but those who travel responsibly write a better one.&rdquo;
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">On the ground</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">Projects we support</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {defaultProjects.map((project) => (
              <div key={project.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2">
                    <span className="text-[#0d7377] font-medium text-sm">{project.stat}</span>
                  </div>
                </div>
                <p className="text-[#999] text-xs uppercase tracking-wider mb-2">{project.location}</p>
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">{project.title}</h3>
                <p className="text-[#666] leading-relaxed text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 lg:py-24 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                Travel with purpose.<br />Travel with Jacada.
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 text-lg">
                Every trip we plan contributes directly to the conservation and community projects you&apos;ve read about. Extraordinary travel and positive impact — they go hand in hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="inline-block bg-white text-[#1a1a1a] px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#e5e5e5] transition-colors text-center">
                  Start Planning
                </Link>
                <Link href="/about" className="inline-block border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.15em] hover:border-white transition-colors text-center">
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071" alt="Wildlife" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default async function PositiveImpactPage() {
  const page = await getPageBySlug("positive-impact")
  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {page?.layout?.length ? (
        <>
          <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?q=80&w=2074" }} />
          <BlockRenderer blocks={otherBlocks} />
        </>
      ) : (
        <StaticPositiveImpactPage />
      )}
      <Footer />
    </main>
  )
}
