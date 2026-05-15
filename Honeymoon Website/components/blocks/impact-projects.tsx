import Image from "next/image"
import { getMediaUrl } from "@/lib/payload"

interface ProjectItem {
  title: string
  location?: string
  description?: string
  stat?: string
  image?: string | { url?: string }
}

interface ImpactProjectsData {
  eyebrow?: string
  heading?: string
  projects?: ProjectItem[]
}

const defaultProjects: ProjectItem[] = [
  { title: "Wilderness & Wildlife Fund", location: "Botswana & Zimbabwe", description: "Supporting anti-poaching rangers and wildlife corridors in one of the world's largest conservation areas.", stat: "$2.4M raised", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071" },
  { title: "Female Guides of the Future", location: "East Africa", description: "A scholarship programme training the next generation of female safari guides.", stat: "140 graduates", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
  { title: "Community Lodges Initiative", location: "Namibia & Zambia", description: "Directing bookings towards community-owned lodges where 100% of profits fund local infrastructure.", stat: "28 communities", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068" },
]

export function ImpactProjects({ data }: { data?: ImpactProjectsData } = {}) {
  const projects = data?.projects?.length
    ? data.projects.map((p, i) => ({ ...p, image: getMediaUrl(p.image) || defaultProjects[i % defaultProjects.length].image as string }))
    : defaultProjects.map((p) => ({ ...p, image: typeof p.image === "string" ? p.image : "" }))

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          {data?.eyebrow && (
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">{data.eyebrow}</p>
          )}
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">
            {data?.heading ?? "Projects we support"}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[#e5e5e5]" />
                )}
                {project.stat && (
                  <div className="absolute top-4 right-4 bg-white px-4 py-2">
                    <span className="text-[#0d7377] font-medium text-sm">{project.stat}</span>
                  </div>
                )}
              </div>
              {project.location && (
                <p className="text-[#999] text-xs uppercase tracking-wider mb-2">{project.location}</p>
              )}
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">{project.title}</h3>
              {project.description && (
                <p className="text-[#666] leading-relaxed text-sm">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
