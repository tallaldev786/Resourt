import Image from "next/image"
import { getMediaUrl } from "@/lib/payload"

interface TeamMember {
  name: string
  role: string
  bio?: string
  photo?: string | { url?: string }
}

interface TeamGridData {
  eyebrow?: string
  heading?: string
  members?: TeamMember[]
}

const defaultMembers: TeamMember[] = [
  { name: "Alexandra Reed", role: "Africa Specialist", bio: "15 years exploring Africa's wild places. Alexandra has visited every country on the continent.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
  { name: "Marcus Chen", role: "Asia Specialist", bio: "Born in Singapore, Marcus spent a decade guiding luxury travel across Southeast Asia.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" },
  { name: "Sophia Williams", role: "Latin America Specialist", bio: "From the Galapagos to Patagonia, Sophia speaks Spanish and Portuguese fluently.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800" },
  { name: "James Okafor", role: "Indian Subcontinent Specialist", bio: "James has spent years living and travelling across India, Nepal and Sri Lanka.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" },
]

export function TeamGrid({ data }: { data?: TeamGridData } = {}) {
  const members = data?.members?.length
    ? data.members.map((m, i) => ({ ...m, photo: getMediaUrl(m.photo) || defaultMembers[i % defaultMembers.length].photo as string }))
    : defaultMembers.map((m) => ({ ...m, photo: typeof m.photo === "string" ? m.photo : "" }))

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          {data?.eyebrow && (
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">{data.eyebrow}</p>
          )}
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">
            {data?.heading ?? "Meet our specialists"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[#e5e5e5]" />
                )}
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{member.name}</h3>
              <p className="text-[#0d7377] text-sm uppercase tracking-wider mb-3">{member.role}</p>
              {member.bio && <p className="text-[#666] text-sm leading-relaxed">{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
