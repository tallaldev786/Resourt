import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  destinations: ["Africa", "Asia", "Central Asia", "Europe", "Indian Subcontinent", "Latin America", "South Pacific"],
  experiences: ["Active Adventures", "Family Journeys", "Honeymoons", "Safaris", "Luxury Tours"],
  company: ["About Us", "Our Team", "Responsible Travel", "Journal", "Contact", "Careers"],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="font-serif text-2xl font-normal tracking-tight text-white">Resourt</span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm text-sm">Award-winning luxury travel specialists crafting exceptional honeymoon journeys for discerning couples.</p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-white/50 hover:text-white transition-colors" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-white uppercase tracking-wider mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((name) => (
                  <li key={name}><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">{name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Resourt. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
              <Link key={text} href="#" className="text-white/40 hover:text-white transition-colors">{text}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
