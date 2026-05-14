import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Active adventures",
    subtitle: "Action-packed trips",
    description: "Experience the world's most beautiful hikes, dives and safaris",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
  },
  {
    id: 2,
    title: "New perspectives",
    subtitle: "Family journeys",
    description: "Set off on a bespoke trip, guided by first-hand expertise",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038",
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <Link
              key={experience.id}
              href="#"
              className="group relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-serif text-2xl lg:text-3xl">
                    {experience.title}
                  </span>
                </div>
                <p className="text-sm text-white/80 mb-1">
                  {experience.subtitle}
                </p>
                <p className="text-white/70 text-sm max-w-md mb-4">
                  {experience.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition-colors">
                  Explore
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
