import { Leaf, Globe, Heart, Users, TreePine, Droplets, Star, Sparkles, Shield } from "lucide-react"

const iconMap = {
  leaf: Leaf, globe: Globe, heart: Heart, users: Users,
  tree: TreePine, droplets: Droplets, star: Star, sparkles: Sparkles, shield: Shield,
} as const

interface PrincipleItem {
  title: string
  description: string
  icon?: keyof typeof iconMap
}

interface PrinciplesGridData {
  eyebrow?: string
  heading?: string
  subheading?: string
  principles?: PrincipleItem[]
}

const defaultPrinciples: PrincipleItem[] = [
  { icon: "leaf", title: "Preserve Biodiversity", description: "We partner exclusively with lodges and operators that actively contribute to conservation." },
  { icon: "users", title: "Support Communities", description: "We prioritise locally-owned properties ensuring economic benefits flow directly to local people." },
  { icon: "globe", title: "Regenerate Heritage", description: "We advocate for responsible access policies that protect cultural heritage for future generations." },
  { icon: "heart", title: "Empower Local Guides", description: "Our local guides are partners. We pay fair wages, invest in training, and celebrate their expertise." },
  { icon: "tree", title: "Offset & Reduce Carbon", description: "We calculate and offset the carbon footprint of every trip through verified projects." },
  { icon: "droplets", title: "Protect Water Sources", description: "We support water conservation projects in water-stressed destinations across Africa and Asia." },
]

export function PrinciplesGrid({ data }: { data?: PrinciplesGridData } = {}) {
  const principles = data?.principles?.length ? data.principles : defaultPrinciples

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          {data?.eyebrow && (
            <p className="text-[#999] text-sm uppercase tracking-[0.2em] mb-4">{data.eyebrow}</p>
          )}
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-4 leading-tight">
            {data?.heading ?? "Our Positive Impact Principles"}
          </h2>
          {data?.subheading && (
            <p className="text-[#666] leading-relaxed">{data.subheading}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {principles.map((p) => {
            const Icon = iconMap[p.icon ?? "leaf"] ?? Leaf
            return (
              <div key={p.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#0d7377] rounded-full">
                  <Icon className="h-5 w-5 text-[#0d7377]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#1a1a1a] mb-3">{p.title}</h3>
                  <p className="text-[#666] leading-relaxed text-sm">{p.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
