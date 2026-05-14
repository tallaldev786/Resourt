"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Destinations", href: "#destinations" },
  { name: "Luxury Safaris", href: "#tours" },
  { name: "Trip Types", href: "#experiences" },
  { name: "Inspiration", href: "#journal" },
  { name: "Positive Impact", href: "#features" },
  { name: "About Us", href: "#about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#202020]/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"}`}>
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 flex h-20 items-center justify-between">
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-[22px] font-normal tracking-[-0.01em] text-white lg:text-[26px]">Resourt</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/95 transition-colors hover:text-white">{item.name}</Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-5 ml-auto">
            <Link href="#contact" className="rounded-full bg-[#e7c9ff] px-7 py-3 text-[12px] font-semibold text-[#202020] transition-colors hover:bg-[#f0dcff]">Start Planning</Link>
          </div>
          <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-white lg:hidden ml-auto">
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </nav>
      </header>
      <div className={`fixed inset-0 z-[100] bg-[#1a1a1a] transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/80 hover:text-white">
          <X className="h-7 w-7" strokeWidth={1.5} />
        </button>
        <div className="h-full flex flex-col justify-center px-8 lg:px-20">
          <nav className="space-y-4 lg:space-y-6">
            {navigation.map((item, index) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                className={`block font-serif text-4xl sm:text-5xl text-white hover:text-[#0d7377] transition-all duration-300 transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                style={{ transitionDelay: isOpen ? `${index * 80}ms` : "0ms" }}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
