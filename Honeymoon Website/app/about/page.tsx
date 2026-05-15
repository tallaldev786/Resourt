import { getPageBySlug } from "@/lib/payload"
import { BlockRenderer } from "@/components/blocks/block-renderer"
import { InnerHero } from "@/components/blocks/inner-hero"
import { Header } from "@/components/blocks/header"
import { Footer } from "@/components/blocks/footer"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Heart, Leaf, Star, Users, Award } from "lucide-react"
import { Testimonials } from "@/components/blocks/testimonials"
import { Newsletter } from "@/components/blocks/newsletter"
import { ContactForm } from "@/components/blocks/contact-form"

export const metadata = {
  title: "About Us | Jacada Travel",
  description: "Meet the award-winning specialists behind Jacada Travel — crafting exceptional luxury journeys since 2008.",
}

const defaultStats = [
  { value: "15+", label: "Years of expertise" },
  { value: "50+", label: "Destinations covered" },
  { value: "10,000+", label: "Trips crafted" },
  { value: "98%", label: "Client satisfaction" },
]

const defaultValues = [
  { icon: Sparkles, title: "Original experiences", description: "We'll plan your trip around your personal interests and preferences. We get to know you first — so we can craft a luxury journey, and a story, that's uniquely yours." },
  { icon: Heart, title: "The personal touch", description: "Our destination specialists, expert guides and brilliant concierges are hand-picked for their ability to bring your destination to life with care and passion." },
  { icon: Leaf, title: "Responsible travel", description: "Guided by our Positive Impact Principles, we seek to ensure your trip can help preserve, support and regenerate culture, biodiversity and heritage." },
  { icon: Star, title: "Award-winning service", description: "Recognised year after year for excellence in luxury travel. Our team has won multiple industry awards for exceptional client experience and destination knowledge." },
  { icon: Users, title: "Expert specialists", description: "Every member of our team has lived in or extensively travelled to the destinations they recommend. This first-hand knowledge is at the heart of everything we do." },
  { icon: Award, title: "Tailored to you", description: "No two trips are ever the same. Every itinerary we create is designed from scratch for you — your interests, your pace, your style of travel." },
]

const defaultTeam = [
  { name: "Alexandra Reed", role: "Africa Specialist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", bio: "15 years exploring Africa's wild places. Alexandra has visited every country on the continent and knows the best camps before anyone else." },
  { name: "Marcus Chen", role: "Asia Specialist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", bio: "Born in Singapore, Marcus spent a decade guiding luxury travel across Southeast Asia before joining our team." },
  { name: "Sophia Williams", role: "Latin America Specialist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800", bio: "From the Galapagos to Patagonia, Sophia has explored every corner of Latin America and speaks Spanish and Portuguese fluently." },
  { name: "James Okafor", role: "Indian Subcontinent Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800", bio: "James has spent years living and travelling across India, Nepal and Sri Lanka, building relationships with the finest local operators." },
]

function StaticAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074" alt="About Jacada Travel" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Our story</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white leading-none max-w-4xl">
            Crafting exceptional journeys since 2008
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-[#1a1a1a] leading-relaxed mb-8">
                We are an award-winning luxury travel company dedicated to creating deeply personal, remarkable journeys for discerning travellers.
              </p>
              <p className="text-[#666] leading-relaxed mb-6">
                Founded in 2008, Jacada Travel was built on a simple belief: that truly extraordinary travel is about far more than just the places you visit. It&apos;s about the stories you gather, the connections you make, and the moments that stay with you long after you return home.
              </p>
              <p className="text-[#666] leading-relaxed mb-10">
                Every member of our team is a passionate traveller with genuine, first-hand expertise in their specialist region. We don&apos;t just book travel — we live and breathe it.
              </p>
              <Link href="/#contact" className="inline-block bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#0d7377] transition-colors">
                Start Planning Your Trip
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2074" alt="Luxury travel" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {defaultStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-serif text-4xl lg:text-5xl text-white mb-3">{stat.value}</p>
                <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jacada */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-6">Why book with Jacada?</h2>
            <p className="text-[#666] leading-relaxed">We put you at the heart of every journey we plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {defaultValues.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-[#0d7377] rounded-full">
                    <Icon className="h-6 w-6 text-[#0d7377]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1a1a1a] mb-4">{value.title}</h3>
                  <p className="text-[#666] leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">The people behind your journey</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">Meet our specialists</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultTeam.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{member.name}</h3>
                <p className="text-[#0d7377] text-sm uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-[#666] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070" alt="Landscape" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl text-center leading-relaxed px-6">
            &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
          </p>
        </div>
      </section>

      <Testimonials />

      {/* Positive Impact callout */}
      <section className="py-20 lg:py-24 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?q=80&w=2074" alt="Positive Impact" fill className="object-cover" />
            </div>
            <div>
              <p className="text-[#0d7377] text-sm uppercase tracking-[0.2em] mb-4">Our commitment</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-6 leading-tight">Travel that gives back</h2>
              <p className="text-[#666] leading-relaxed mb-6">
                We believe travel should be a force for good. Every trip we arrange is guided by our Positive Impact Principles — ensuring the places you visit benefit from your presence.
              </p>
              <p className="text-[#666] leading-relaxed mb-10">
                From supporting conservation projects and community-owned lodges to reducing carbon footprints and empowering local guides, sustainability is embedded in how we travel.
              </p>
              <Link href="/positive-impact" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-all">
                Our Positive Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <ContactForm />
    </>
  )
}

export default async function AboutPage() {
  const page = await getPageBySlug("about")
  const heroBlock = page?.layout?.find((b: { blockType: string }) => b.blockType === "innerHero")
  const otherBlocks = (page?.layout ?? []).filter((b: { blockType: string }) => b.blockType !== "innerHero")

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {page?.layout?.length ? (
        <>
          <InnerHero data={{ ...heroBlock, fallbackImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074" }} />
          <BlockRenderer blocks={otherBlocks} />
        </>
      ) : (
        <StaticAboutPage />
      )}
      <Footer />
    </main>
  )
}
