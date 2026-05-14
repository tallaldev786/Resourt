"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

const destinations = [
  "Africa",
  "Asia",
  "Central Asia",
  "Europe",
  "Indian Subcontinent",
  "Latin America",
  "South Pacific",
  "Not sure yet",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] mb-5">
            Your adventure starts now
          </h2>
          <p className="text-[#666] leading-relaxed">
            Whatever you want your luxury private tour or safari itinerary to include, 
            we&apos;ll create something fully bespoke for you... and only you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-[#666]">
                First name
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-[#1a1a1a] text-[#1a1a1a]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-[#666]">
                Last name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-[#1a1a1a] text-[#1a1a1a]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-[#666]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-[#1a1a1a] text-[#1a1a1a]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#666]">
                Phone (optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-[#1a1a1a] text-[#1a1a1a]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-[#666]">
              Where would you like to travel?
            </Label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
            >
              <SelectTrigger className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 h-12 focus:ring-0 [&>span]:text-left text-[#1a1a1a]">
                <SelectValue placeholder="Select a destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-wider text-[#666]">
              Tell us about your dream trip
            </Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-[#1a1a1a] resize-none text-[#1a1a1a]"
            />
          </div>

          <div className="pt-6">
            <Button 
              type="submit" 
              className="bg-[#1a1a1a] text-white hover:bg-[#333] rounded-none h-14 px-10"
            >
              Start planning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
