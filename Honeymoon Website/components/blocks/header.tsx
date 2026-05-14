"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Destinations", href: "#destinations" },
  { name: "Luxury Safaris", href: "#tours" },
  { name: "Trip Types", href: "#experiences" },
  { name: "Inspiration", href: "#journal" },
  { name: "Positive Impact", href: "#features" },
  { name: "About Us", href: "#about" },
]

const destinationMenu = [
  "Africa",
  "Asia",
  "Australasia",
  "Central Asia",
  "Europe",
  "Indian Subcontinent",
  "Latin America",
  "Middle East",
  "Polar",
  "South Pacific",
]

const destinationSubmenus: Record<string, string[][]> = {
  Africa: [
    [
      "Grand Tours",
      "Botswana",
      "Congo",
      "Kenya",
      "Madagascar",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Rwanda",
      "Sao Tome and Principe",
    ],
    [
      "South Africa",
      "Tanzania",
      "The Seychelles",
      "Uganda",
      "Zambia",
      "Zanzibar",
      "Zimbabwe",
      "Gorilla Trekking",
    ],
  ],
  Asia: [
    [
      "Grand Tours",
      "Bali",
      "Borneo",
      "Cambodia",
      "China",
      "Indonesia",
      "Japan",
      "Laos",
      "Malaysia",
      "South Korea",
      "Thailand",
    ],
    ["Vietnam"],
  ],
  Australasia: [["Grand Tours", "Australia", "New Zealand"]],
  "Central Asia": [["Armenia", "Azerbaijan", "Georgia", "Mongolia"]],
  Europe: [
    [
      "Grand Tours",
      "Luxury Rail Journeys",
      "Austria",
      "Belgium",
      "Croatia",
      "Denmark",
      "England",
      "Finland",
      "France",
      "Germany",
      "Greece",
    ],
    [
      "Iceland",
      "Ireland",
      "Italy",
      "Netherlands",
      "Norway",
      "Portugal",
      "Romania",
      "Scotland",
      "Slovenia",
      "Spain",
      "Sweden",
    ],
    ["Switzerland", "Turkey"],
  ],
  "Indian Subcontinent": [["Bhutan", "India", "Maldives", "Nepal", "Sri Lanka"]],
  "Latin America": [
    [
      "Grand Tours",
      "Argentina",
      "Belize",
      "Bolivia",
      "Brazil",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Ecuador",
      "Galapagos",
      "Guatemala",
    ],
    ["Mexico", "Panama", "Patagonia", "Peru", "Uruguay"],
  ],
  "Middle East": [["Egypt", "Jordan", "Oman", "United Arab Emirates"]],
  Polar: [["Arctic", "Antarctica", "Greenland", "Svalbard"]],
  "South Pacific": [["Fiji", "French Polynesia"]],
}

const navDropdowns: Record<string, Array<{ label: string; hasArrow?: boolean }>> = {
  "Luxury Safaris": [
    { label: "Birdwatching Safaris" },
    { label: "Family Safaris" },
    { label: "Green Season Safaris" },
    { label: "Honeymoon Safaris" },
    { label: "Photography Safaris" },
    { label: "Luxury Walking Safaris" },
  ],
  "Trip Types": [
    { label: "Active & Adventure" },
    { label: "Arts & Culture" },
    { label: "Family Trips", hasArrow: true },
    { label: "Food & Wine" },
    { label: "Groups & Reunions" },
    { label: "Hiking Tours" },
    { label: "Honeymoons", hasArrow: true },
    { label: "LGBTQ+" },
    { label: "Northern Lights" },
    { label: "Rail Tours" },
    { label: "Wellness Travel" },
  ],
  Inspiration: [
    { label: "Travel Guides" },
    { label: "The Journal" },
    { label: "The Explorer Magazine" },
    { label: "Restorative Journeys" },
  ],
  "Positive Impact": [
    { label: "Positive Impact Collection", hasArrow: true },
    { label: "Our Approach" },
    { label: "Your Impact" },
    { label: "Female Guides of the Future" },
    { label: "Positive Impact Trips" },
  ],
  "About Us": [
    { label: "Our Story" },
    { label: "What We Do" },
    { label: "Wilderness" },
    { label: "Testimonials" },
    { label: "Press" },
    { label: "Refer a Friend" },
    { label: "Meet The Team" },
    { label: "Careers" },
  ],
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null)
  const submenuColumns = hoveredDestination
    ? destinationSubmenus[hoveredDestination]
    : undefined
  const submenuPanelWidth =
    submenuColumns && submenuColumns.length >= 3
      ? "w-[640px]"
      : submenuColumns && submenuColumns.length === 2
        ? "w-[430px]"
        : "w-[330px]"
  const submenuGridColumns =
    submenuColumns && submenuColumns.length >= 3
      ? "grid-cols-3 gap-12"
      : submenuColumns && submenuColumns.length === 2
        ? "grid-cols-2 gap-14"
        : "grid-cols-1"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#202020]/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        {isScrolled ? (
          <nav className="mx-auto flex h-12 max-w-[1440px] items-center justify-between px-4 lg:px-6">
            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => {
                const dropdownItems = navDropdowns[item.name]

                if (item.name === "Destinations") {
                  return (
                  <div key={item.name} className="group flex h-12 items-center">
                    <Link
                      href={item.href}
                      className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/95 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>

                    <div
                      onMouseLeave={() => setHoveredDestination(null)}
                      className="invisible absolute left-0 top-full w-[216px] bg-[#151515] opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100"
                    >
                      <div className="border-t border-white/10 py-2">
                        {destinationMenu.map((destination) => (
                          <Link
                            key={destination}
                            href="#destinations"
                            onMouseEnter={() => setHoveredDestination(destination)}
                            className={`flex min-h-[39px] items-center justify-between px-4 text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors hover:bg-white/5 ${
                              hoveredDestination === destination
                                ? "text-white"
                                : "text-[#d6b77e] hover:text-[#f0d59b]"
                            }`}
                          >
                            {destination}
                            <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                          </Link>
                        ))}
                      </div>

                      {submenuColumns && (
                        <div
                          className={`absolute left-full top-0 min-h-full bg-[#151515] px-14 py-8 shadow-2xl ${submenuPanelWidth}`}
                        >
                          <div className={`grid ${submenuGridColumns}`}>
                            {submenuColumns.map((column, columnIndex) => (
                              <div key={columnIndex} className="space-y-3">
                                {column.map((item) => (
                                  <Link
                                    key={item}
                                    href="#destinations"
                                    className="block text-[13px] font-semibold leading-relaxed text-white transition-colors hover:text-[#d6b77e]"
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  )
                }

                if (dropdownItems) {
                  return (
                    <div key={item.name} className="group relative flex h-12 items-center">
                      <Link
                        href={item.href}
                        className="flex h-full items-center px-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/95 transition-colors hover:bg-[#2a2a2a] hover:text-white group-hover:bg-[#2a2a2a]"
                      >
                        {item.name}
                      </Link>

                      <div className="invisible absolute left-0 top-full w-[216px] bg-[#151515] opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        <div className="py-2">
                          {dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={item.href}
                              className="flex min-h-[39px] items-center justify-between gap-4 px-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d6b77e] transition-colors hover:bg-white/5 hover:text-white"
                            >
                              <span>{dropdownItem.label}</span>
                              {dropdownItem.hasArrow && (
                                <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/95 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            <Link href="/" className="lg:hidden">
              <span className="font-serif text-xl text-white">Jacada Travel</span>
            </Link>

            <div className="hidden items-center gap-5 lg:flex">
              <button
                type="button"
                aria-label="Search"
                className="text-white transition-colors hover:text-white/70"
              >
                <Search className="h-5 w-5" strokeWidth={2.4} />
              </button>
              <Link
                href="#contact"
                className="rounded-full bg-[#e7c9ff] px-7 py-3 text-[12px] font-semibold text-[#202020] transition-colors hover:bg-[#f0dcff]"
              >
                Start Planning
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-white lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
              <span>Menu</span>
            </button>
          </nav>
        ) : (
          <nav className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex h-20 lg:h-24 items-center justify-between">
              <div className="flex items-center gap-1.5 text-[13px] tracking-wide text-white/90 transition-colors">
                <span className="hidden sm:inline">Call us on</span>
                <a
                  href="tel:+1234567890"
                  className="font-medium text-white transition-colors hover:text-white/70"
                >
                  Call
                </a>
              </div>

              <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                <span className="font-serif text-[22px] font-normal tracking-[-0.01em] text-white transition-colors lg:text-[26px]">
                  Jacada Travel
                </span>
              </Link>

              <div className="w-[88px]" aria-hidden="true" />
            </div>
          </nav>
        )}
      </header>

      {/* Full Screen Menu Overlay - Jacada Style */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#1a1a1a] transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 lg:right-12 text-white/80 hover:text-white transition-colors"
        >
          <X className="h-7 w-7" strokeWidth={1.5} />
        </button>

        {/* Menu Content */}
        <div className="h-full flex flex-col justify-center px-8 lg:px-20 xl:px-32">
          <nav className="space-y-4 lg:space-y-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white hover:text-[#0d7377] transition-all duration-300 transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 80}ms` : "0ms" }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Contact Info */}
          <div className={`mt-16 pt-10 border-t border-white/10 transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`} style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}>
            <p className="text-white/50 text-sm tracking-wide mb-4">Get in touch</p>
            <a 
              href="tel:+1234567890" 
              className="text-xl lg:text-2xl text-white hover:text-[#0d7377] transition-colors"
            >
              +1 (234) 567-890
            </a>
            <p className="text-white/50 text-sm mt-4 tracking-wide">
              hello@jacadatravel.com
            </p>
          </div>
          
          {/* CTA Button */}
          <div className={`mt-10 transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`} style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}>
            <Button 
              className="bg-[#0d7377] hover:bg-[#0a5c5f] text-white rounded-none h-14 px-10 text-[15px] tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Plan Your Journey
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
