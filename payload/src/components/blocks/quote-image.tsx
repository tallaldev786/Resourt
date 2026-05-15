import Image from "next/image"
import { getMediaUrl } from "@/lib/payload"

interface QuoteImageData {
  quote?: string
  backgroundImage?: string | { url?: string }
}

export function QuoteImage({ data }: { data?: QuoteImageData } = {}) {
  const image = getMediaUrl(data?.backgroundImage)

  return (
    <section className="relative h-[45vh] overflow-hidden">
      <div className="absolute inset-0">
        {image ? (
          <Image src={image} alt="Quote background" fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a]" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl text-center leading-relaxed">
          &ldquo;{data?.quote ?? ""}&rdquo;
        </p>
      </div>
    </section>
  )
}
