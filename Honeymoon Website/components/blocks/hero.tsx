"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const heroVideos = [
  "/Hotel%20Video.mp4",
  "/Hotel-2.mp4",
  "/Hotel-3.mp4",
  "/Hotel-4.mp4",
]

const destinations = [
  { name: "Africa", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800" },
  { name: "Central Asia", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800" },
  { name: "Indian Subcontinent", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" },
  { name: "Latin America", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800" },
  { name: "South Pacific", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800" },
  { name: "Europe", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800" },
  { name: "Middle East", image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800" },
]

export function Hero() {
  const [selectedDestination, setSelectedDestination] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const playNextVideo = () => {
    setCurrentVideoIndex((currentIndex) => (currentIndex + 1) % heroVideos.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Exactly like Jacada */}
      <div className="absolute inset-0 z-0">
        <video
          key={heroVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={playNextVideo}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-6">
        {/* Main Heading */}
        <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-normal text-white leading-none tracking-[-0.02em] mb-8">
          Exceptional Journeys
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed font-light tracking-wide">
          Set off on remarkable, deeply personal trips planned by award-winning specialists
        </p>

        {/* Destination Selector Box - Exact Jacada Style */}
        <div className="inline-flex flex-col sm:flex-row items-stretch bg-white shadow-lg">
          {/* Take me to label */}
          <div className="hidden sm:flex items-center px-6 border-r border-[#e5e5e5]">
            <span className="text-sm text-[#666] whitespace-nowrap">Take me to</span>
          </div>
          
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-8 px-6 py-5 text-[#1a1a1a] hover:bg-[#fafafa] transition-colors min-w-[240px] text-left"
            >
              <span className="text-[15px]">{selectedDestination || "Not sure where?"}</span>
              <ChevronDown className={`h-4 w-4 text-[#999] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
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

        {/* Trip Planner Link */}
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

      {/* Scroll Indicator Line - Jacada Style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
      </div>
    </section>
  )
}
