"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

interface NewsletterData {
  heading?: string
  description?: string
  buttonText?: string
  placeholder?: string
}

export function Newsletter({ data }: { data?: NewsletterData } = {}) {
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
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-background mb-6">{heading}</h2>
        <p className="text-background/70 mb-12 max-w-xl mx-auto leading-relaxed">{description}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-background/30 text-background placeholder:text-background/50 rounded-none h-12 focus-visible:ring-background/50"
          />
          <Button type="submit" className="bg-background text-foreground hover:bg-background/90 rounded-none h-12 px-8">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
