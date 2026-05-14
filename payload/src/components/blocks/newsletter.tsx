"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface NewsletterData {
  heading?: string
  description?: string
  buttonText?: string
  placeholder?: string
}

export function Newsletter({ data }: { data?: NewsletterData }) {
  const [email, setEmail] = useState("")
  const heading = data?.heading || "Stay inspired"
  const description = data?.description || "Subscribe to our newsletter for destination guides, travel inspiration, and exclusive offers delivered to your inbox."
  const buttonText = data?.buttonText || "Subscribe"
  const placeholder = data?.placeholder || "Enter your email"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">{heading}</h2>
        <p className="text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">{description}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder={placeholder} value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 bg-transparent border border-white/30 text-white placeholder:text-white/50 px-4 h-12 focus:outline-none focus:border-white/60" />
          <button type="submit" className="bg-white text-[#1a1a1a] hover:bg-white/90 h-12 px-8 flex items-center justify-center gap-2 transition-colors font-medium">
            {buttonText} <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
