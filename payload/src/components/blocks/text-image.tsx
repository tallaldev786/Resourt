import Image from "next/image"
import Link from "next/link"
import { getMediaUrl } from "@/lib/payload"

interface TextImageData {
  eyebrow?: string
  heading?: string
  body?: unknown
  ctaLabel?: string
  ctaHref?: string
  image?: string | { url?: string }
  imagePosition?: "left" | "right"
  background?: "white" | "grey"
}

export function TextImage({ data }: { data?: TextImageData } = {}) {
  const imageUrl = getMediaUrl(data?.image)
  const isLeft = data?.imagePosition === "left"
  const bg = data?.background === "grey" ? "bg-[#f8f8f6]" : "bg-white"

  return (
    <section className={`py-20 lg:py-28 ${bg}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isLeft ? "lg:flex-row-reverse" : ""}`}>
          <div className={isLeft ? "lg:order-2" : ""}>
            {data?.eyebrow && (
              <p className="text-[#0d7377] text-sm uppercase tracking-[0.2em] mb-4">{data.eyebrow}</p>
            )}
            {data?.heading && (
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-6 leading-tight">
                {data.heading}
              </h2>
            )}
            {data?.ctaLabel && data.ctaHref && (
              <Link
                href={data.ctaHref}
                className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                {data.ctaLabel}
              </Link>
            )}
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden ${isLeft ? "lg:order-1" : ""}`}>
            {imageUrl ? (
              <Image src={imageUrl} alt={data?.heading ?? ""} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-[#e5e5e5]" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
