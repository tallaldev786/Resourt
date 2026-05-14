import Image from "next/image"
import Link from "next/link"
import { getMediaUrl } from "@/lib/payload"

const defaultDestinations = [
  { id: 1, name: "Africa", location: "Hwange National Park, Zimbabwe", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068", link: undefined },
  { id: 2, name: "Central Asia", location: "Kakheti Region, Georgia", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2069", link: undefined },
  { id: 3, name: "Indian Subcontinent", location: "Taj Mahal, India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071", link: undefined },
  { id: 4, name: "Latin America", location: "Amazon River, Brazil", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070", link: undefined },
  { id: 5, name: "South Pacific", location: "Tahiti, French Polynesia", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073", link: undefined },
]

interface DestinationItem {
  location: string
  name: string
  image: string | { url?: string }
  link?: string
}

interface DestinationsData {
  heading?: string
  destinations?: DestinationItem[]
}

export function Destinations({ data }: { data?: DestinationsData } = {}) {
  const heading = data?.heading || "Our destinations"
  const destinations = data?.destinations?.length
    ? data.destinations.map((d, i) => ({
        id: i,
        name: d.name,
        location: d.location,
        image: getMediaUrl(d.image),
        link: d.link,
      }))
    : defaultDestinations

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a]">{heading}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={destination.link || "#"}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs text-white/70 mb-1 leading-tight">{destination.location}</p>
                <h3 className="font-serif text-lg text-white">{destination.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
