interface StatItem {
  value: string
  label: string
}

interface StatsBarData {
  stats?: StatItem[]
  background?: "dark" | "light"
}

export function StatsBar({ data }: { data?: StatsBarData } = {}) {
  const isDark = (data?.background ?? "dark") === "dark"
  const stats = data?.stats?.length
    ? data.stats
    : [
        { value: "15+", label: "Years of expertise" },
        { value: "50+", label: "Destinations covered" },
        { value: "10,000+", label: "Trips crafted" },
        { value: "98%", label: "Client satisfaction" },
      ]

  return (
    <section className={`py-16 lg:py-20 ${isDark ? "bg-[#1a1a1a]" : "bg-[#f8f8f6]"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className={`font-serif text-4xl lg:text-5xl mb-3 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                {stat.value}
              </p>
              <p className={`text-sm uppercase tracking-wider ${isDark ? "text-white/50" : "text-[#999]"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
