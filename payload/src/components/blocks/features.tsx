import { Sparkles, Heart, Leaf, Star, Globe, Shield } from "lucide-react"

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf,
  star: Star,
  globe: Globe,
  shield: Shield,
}

const defaultFeatures = [
  { icon: "sparkles" as const, title: "Original experiences", description: "We'll plan your trip around your personal interests and preferences. We get to know you first. So we can craft a luxury journey – and a story – that's uniquely yours." },
  { icon: "heart" as const, title: "The personal touch", description: "Our destination specialists, expert guides and brilliant concierges are hand-picked for their ability to bring your destination to life with care and passion." },
  { icon: "leaf" as const, title: "Responsible travel", description: "Guided by our Positive Impact Principles, we seek to ensure your trip can help preserve, support and regenerate culture, biodiversity and heritage." },
]

interface FeatureItem {
  icon: keyof typeof iconMap
  title: string
  description: string
}

interface FeaturesData {
  heading?: string
  subheading?: string
  features?: FeatureItem[]
}

export function Features({ data }: { data?: FeaturesData }) {
  const heading = data?.heading || "Why book with us?"
  const features = data?.features?.length ? data.features : defaultFeatures

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a]">{heading}</h2>
          {data?.subheading && <p className="mt-4 text-[#666] max-w-xl mx-auto">{data.subheading}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Sparkles
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-[#0d7377] rounded-full">
                  <IconComponent className="h-6 w-6 text-[#0d7377]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1a1a1a] mb-4">{feature.title}</h3>
                <p className="text-[#666] leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
