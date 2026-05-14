import Image from "next/image"
import { Quote } from "lucide-react"

const defaultTestimonials = [
  { id: 1, authorName: "Sarah & Michael", destination: "Bali, Indonesia", authorImage: "https://images.unsplash.com/photo-1621579311897-0f1a0a5c9d14?q=80&w=2070", quote: "Every detail was perfect, from the private villa in Bali to the sunset dinner on the beach. The team anticipated our every need and created moments we'll cherish forever." },
  { id: 2, authorName: "Emma & James", destination: "Maldives", authorImage: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2069", quote: "We were blown away by the level of service. Our dedicated travel designer created an itinerary that perfectly matched our interests. The Maldives trip exceeded all expectations." },
  { id: 3, authorName: "Jennifer & David", destination: "Santorini, Greece", authorImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070", quote: "From the moment we reached out, we felt special. The VIP upgrades, the exclusive experiences - everything was world-class. An unforgettable honeymoon." },
]

interface TestimonialItem {
  quote: string
  authorName: string
  authorImage?: string | { url?: string }
  destination?: string
}

interface TestimonialsData {
  heading?: string
  testimonials?: TestimonialItem[]
}

function resolveImageUrl(image: string | { url?: string } | undefined): string {
  if (!image) return ""
  if (typeof image === "string") return image
  const url = image.url ?? ""
  return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"}${url}`
}

export function Testimonials({ data }: { data?: TestimonialsData }) {
  const heading = data?.heading || "What our travelers say"
  const testimonials = data?.testimonials?.length
    ? data.testimonials.map((t, i) => ({ id: i, ...t, authorImage: resolveImageUrl(t.authorImage) }))
    : defaultTestimonials

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a]">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <Quote className="h-8 w-8 text-[#ccc] mb-6" strokeWidth={1} />
              <blockquote className="text-[#333] leading-relaxed mb-8 flex-1">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-[#e5e5e5]">
                {testimonial.authorImage && (
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={testimonial.authorImage} alt={testimonial.authorName} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-[#1a1a1a]">{testimonial.authorName}</p>
                  {testimonial.destination && <p className="text-sm text-[#666]">{testimonial.destination}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
