"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-background mb-6">
          Stay inspired
        </h2>
        <p className="text-background/70 mb-12 max-w-xl mx-auto leading-relaxed">
          Subscribe to our newsletter for destination guides, travel inspiration, 
          and exclusive offers delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-background/30 text-background placeholder:text-background/50 rounded-none h-12 focus-visible:ring-background/50"
          />
          <Button 
            type="submit" 
            className="bg-background text-foreground hover:bg-background/90 rounded-none h-12 px-8"
          >
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
