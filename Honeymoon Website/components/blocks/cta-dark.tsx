import Image from "next/image"
import Link from "next/link"
import { getMediaUrl } from "@/lib/payload"

interface CtaDarkData {
  heading?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  image?: string | { url?: string }
}

export function CtaDark({ data }: { data?: CtaDarkData } = {}) {
  const image = getMediaUrl(data?.image)

  return (
    <section className="py-20 lg:py-24 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2" : ""} gap-16 items-center`}>
          <div>
            {data?.heading && (
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                {data.heading}
              </h2>
            )}
            {data?.body && (
              <p className="text-white/60 leading-relaxed mb-10 text-lg">{data.body}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {data?.primaryLabel && data.primaryHref && (
                <Link
                  href={data.primaryHref}
                  className="inline-block bg-white text-[#1a1a1a] px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#e5e5e5] transition-colors text-center"
                >
                  {data.primaryLabel}
                </Link>
              )}
              {data?.secondaryLabel && data.secondaryHref && (
                <Link
                  href={data.secondaryHref}
                  className="inline-block border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.15em] hover:border-white transition-colors text-center"
                >
                  {data.secondaryLabel}
                </Link>
              )}
            </div>
          </div>
          {image && (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={image} alt={data?.heading ?? ""} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
