import Image from "next/image"
import { getMediaUrl } from "@/lib/payload"

interface InnerHeroData {
  eyebrow?: string
  heading?: string
  backgroundImage?: string | { url?: string }
  overlayOpacity?: "light" | "medium" | "dark"
  fallbackImage?: string
}

const overlayMap = {
  light: "bg-black/25",
  medium: "bg-black/45",
  dark: "bg-black/65",
}

export function InnerHero({ data }: { data?: InnerHeroData } = {}) {
  const overlayClass = overlayMap[data?.overlayOpacity ?? "medium"]
  const image = getMediaUrl(data?.backgroundImage) || data?.fallbackImage || ""

  return (
    <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        {image && (
          <Image src={image} alt={data?.heading ?? ""} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className={`absolute inset-0 ${overlayClass}`} style={{ mixBlendMode: "multiply" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {data?.eyebrow && (
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">{data.eyebrow}</p>
        )}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-white leading-none max-w-4xl">
          {data?.heading ?? ""}
        </h1>
      </div>
    </section>
  )
}
