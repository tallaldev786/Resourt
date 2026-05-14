"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const defaultArticles = [
  { id: 1, title: "The Best Places to Visit in 2026", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068" },
  { id: 2, title: "19 Top Luxury Hotels Worldwide for Stargazing", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070" },
  { id: 3, title: "The Best Hotels and Lodges for Farm-to-Table Experiences", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" },
  { id: 4, title: "The Best Walking Safaris in Africa", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
  { id: 5, title: "The Best Wine Regions in South Africa", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" },
  { id: 6, title: "Ask the Experts: Our Favourite Experiences in Africa", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071" },
  { id: 7, title: "An Introduction to Slow Travel", image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2069" },
  { id: 8, title: "The Best Places to Visit in South America in Winter", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070" },
]

interface ArticleItem {
  title: string
  coverImage?: string | { url?: string }
  slug?: string
}

interface JournalData {
  heading?: string
  articles?: ArticleItem[]
}

function resolveImageUrl(image: string | { url?: string } | undefined): string {
  if (!image) return ""
  if (typeof image === "string") return image
  const url = image.url ?? ""
  return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"}${url}`
}

export function Journal({ data }: { data?: JournalData }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const heading = data?.heading || "Get inspired"

  const articles = data?.articles?.length
    ? data.articles.map((a, i) => ({ id: i, title: a.title, image: resolveImageUrl(a.coverImage), slug: a.slug }))
    : defaultArticles

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" })
    }
  }

  return (
    <section id="journal" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] mb-4">{heading}</h2>
            <p className="text-[#666] max-w-xl leading-relaxed">Let your imagination take flight and dream of incredible destinations, meaningful experiences and the memories you&apos;ll make. The world is waiting.</p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button onClick={() => scroll("left")} className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {articles.map((article) => (
            <Link key={article.id} href={("slug" in article && article.slug) ? `/journal/${article.slug}` : "#"} className="group flex-shrink-0 w-[260px] sm:w-[280px] snap-start">
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-base text-[#1a1a1a] group-hover:text-[#0d7377] transition-colors leading-snug">{article.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
