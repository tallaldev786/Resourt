"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const trips = [
  {
    id: 1,
    title: "Luxury Galapagos Vacation",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
  },
  {
    id: 2,
    title: "Discover the Desert Wildlife of Namibia",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068",
  },
  {
    id: 3,
    title: "The Best of Australia and New Zealand",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030",
  },
  {
    id: 4,
    title: "Summer in the Norwegian Fjords",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?q=80&w=2070",
  },
  {
    id: 5,
    title: "A Family Adventure to Egypt",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2071",
  },
  {
    id: 6,
    title: "Luxury Vietnam and Cambodia Honeymoon",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070",
  },
]

export function Tours() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="tours" className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] mb-5">
              Your trip, your story
            </h2>
            <p className="text-[#666] leading-relaxed">
              Every trip we plan is one of a kind. No matter where you want to go, our experts&apos; 
              honest advice and first-hand knowledge ensure each adventure you take is more 
              memorable than the last.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Trips Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href="#"
              className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-lg text-[#1a1a1a] group-hover:text-[#0d7377] transition-colors mb-2">
                {trip.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#666] group-hover:text-[#1a1a1a] transition-colors">
                View trip
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
