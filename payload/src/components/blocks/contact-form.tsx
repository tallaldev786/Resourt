"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const defaultDestinations = [
  "Africa", "Asia", "Central Asia", "Europe",
  "Indian Subcontinent", "Latin America", "South Pacific", "Not sure yet",
]

interface ContactFormData {
  heading?: string
  subheading?: string
  destinationOptions?: Array<{ label: string; value: string }>
  submitButtonText?: string
  successMessage?: string
}

export function ContactForm({ data }: { data?: ContactFormData }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", destination: "", message: "" })

  const heading = data?.heading || "Your adventure starts now"
  const subheading = data?.subheading || "Whatever you want your luxury private tour or safari itinerary to include, we'll create something fully bespoke for you... and only you."
  const destinations = data?.destinationOptions?.length
    ? data.destinationOptions.map((d) => d.label)
    : defaultDestinations
  const submitText = data?.submitButtonText || "Start planning"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] mb-5">{heading}</h2>
          <p className="text-[#666] leading-relaxed">{subheading}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(["firstName", "lastName"] as const).map((field) => (
              <div key={field} className="space-y-2">
                <label htmlFor={field} className="block text-xs uppercase tracking-wider text-[#666]">
                  {field === "firstName" ? "First name" : "Last name"}
                </label>
                <input
                  id={field}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                  className="w-full border-0 border-b border-[#ccc] bg-transparent px-0 h-12 focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#666]">Email</label>
              <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full border-0 border-b border-[#ccc] bg-transparent px-0 h-12 focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#666]">Phone (optional)</label>
              <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border-0 border-b border-[#ccc] bg-transparent px-0 h-12 focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-[#666]">Where would you like to travel?</label>
            <select value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="w-full border-0 border-b border-[#ccc] bg-transparent px-0 h-12 focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]">
              <option value="">Select a destination</option>
              {destinations.map((dest) => <option key={dest} value={dest}>{dest}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#666]">Tell us about your dream trip</label>
            <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border-0 border-b border-[#ccc] bg-transparent px-0 focus:outline-none focus:border-[#1a1a1a] resize-none text-[#1a1a1a]" />
          </div>
          <div className="pt-6">
            <button type="submit" className="bg-[#1a1a1a] text-white hover:bg-[#333] h-14 px-10 flex items-center gap-2 transition-colors">
              {submitText} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
