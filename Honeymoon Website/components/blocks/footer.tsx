import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  destinations: [
    { name: "Africa", href: "/destinations" },
    { name: "Asia", href: "/destinations" },
    { name: "Central Asia", href: "/destinations" },
    { name: "Europe", href: "/destinations" },
    { name: "Indian Subcontinent", href: "/destinations" },
    { name: "Latin America", href: "/destinations" },
    { name: "South Pacific", href: "/destinations" },
  ],
  experiences: [
    { name: "Active Adventures", href: "/experiences" },
    { name: "Family Journeys", href: "/experiences" },
    { name: "Honeymoons", href: "/experiences" },
    { name: "Safaris", href: "/tours" },
    { name: "Luxury Tours", href: "/tours" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Responsible Travel", href: "/positive-impact" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/#contact" },
    { name: "Careers", href: "/about" },
  ],
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
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="font-serif text-2xl font-normal tracking-tight text-white">
                Jacada Travel
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm text-sm">
              Award-winning luxury travel specialists crafting exceptional journeys 
              for discerning travelers since 2008.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-wider mb-6">
              Destinations
            </h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-wider mb-6">
              Experiences
            </h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Jacada Travel. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
