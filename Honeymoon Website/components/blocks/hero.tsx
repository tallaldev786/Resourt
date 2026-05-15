"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const heroVideos = [
  "https://media.istockphoto.com/id/1081679810/video/high-angle-view-of-couples-checking-into-hotel-at-the-front-desk.mp4?s=mp4-640x640-is&k=20&c=vOOL2wcKEkCcKf6wgFJc0m6207cQttYsmE_zQFtFNfw=",
  "https://cdn.pixabay.com/video/2022/06/29/122449-725502749_tiny.mp4",
  "https://cdn.pixabay.com/video/2022/07/04/123075-726838226_large.mp4",
  "https://cdn.pixabay.com/video/2024/02/29/202392-918066367_large.mp4",
]

const defaultDestinations = [
  { name: "Africa" },
  { name: "Central Asia" },
  { name: "Indian Subcontinent" },
  { name: "Latin America" },
  { name: "South Pacific" },
  { name: "Europe" },
  { name: "Middle East" },
]

interface HeroData {
  heading?: string
  subheading?: string
  destinations?: Array<{ label: string; value: string }>
  ctaText?: string
}

export function Hero({ data }: { data?: HeroData } = {}) {
  const [selectedDestination, setSelectedDestination] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const heading = data?.heading || "Exceptional Journeys"
  const subheading = data?.subheading || "Set off on remarkable, deeply personal trips planned by award-winning specialists"
  const destinations = data?.destinations?.length
    ? data.destinations.map((d) => ({ name: d.label }))
    : defaultDestinations

  const playNextVideo = () => {
    setCurrentVideoIndex((i) => (i + 1) % heroVideos.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          key={heroVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={playNextVideo}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-normal text-white leading-none tracking-[-0.02em] mb-8">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed font-light tracking-wide">
          {subheading}
        </p>

        <div className="inline-flex flex-col sm:flex-row items-stretch bg-white shadow-lg">
          <div className="hidden sm:flex items-center px-6 border-r border-[#e5e5e5]">
            <span className="text-sm text-[#666] whitespace-nowrap">Take me to</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-8 px-6 py-5 text-[#1a1a1a] hover:bg-[#fafafa] transition-colors min-w-[240px] text-left"
            >
              <span className="text-[15px]">{selectedDestination || "Not sure where?"}</span>
              <ChevronDown className={`h-4 w-4 text-[#999] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border-t border-[#e5e5e5] shadow-xl z-20 max-h-[300px] overflow-y-auto">
                {destinations.map((dest) => (
                  <button
                    key={dest.name}
                    onClick={() => {
                      setSelectedDestination(dest.name)
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-6 py-4 text-left text-[15px] text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors border-b border-[#f0f0f0] last:border-b-0"
                  >
                    {dest.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center text-white/80 hover:text-white text-sm transition-colors group"
          >
            <span className="border-b border-white/40 group-hover:border-white/80 pb-0.5">
              Unsure where? Get inspired with our trip planner
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
      </div>
    </section>
  )
}
