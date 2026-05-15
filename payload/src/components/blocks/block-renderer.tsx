import { Hero } from "./hero"
import { Destinations } from "./destinations"
import { Experiences } from "./experiences"
import { Features } from "./features"
import { Tours } from "./tours"
import { Journal } from "./journal"
import { ContactForm } from "./contact-form"
import { Testimonials } from "./testimonials"
import { Newsletter } from "./newsletter"
import { InnerHero } from "./inner-hero"
import { TextImage } from "./text-image"
import { StatsBar } from "./stats-bar"
import { TeamGrid } from "./team-grid"
import { QuoteImage } from "./quote-image"
import { PrinciplesGrid } from "./principles-grid"
import { ImpactProjects } from "./impact-projects"
import { CtaDark } from "./cta-dark"

type AnyBlock = {
  blockType: string
  [key: string]: unknown
}

export function BlockRenderer({ blocks }: { blocks: AnyBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case "hero":
            return <Hero key={index} data={block as Parameters<typeof Hero>[0]["data"]} />
          case "destinations":
            return <Destinations key={index} data={block as Parameters<typeof Destinations>[0]["data"]} />
          case "experiences":
            return <Experiences key={index} data={block as Parameters<typeof Experiences>[0]["data"]} />
          case "features":
            return <Features key={index} data={block as Parameters<typeof Features>[0]["data"]} />
          case "tours":
            return <Tours key={index} data={block as Parameters<typeof Tours>[0]["data"]} />
          case "journal":
            return <Journal key={index} data={block as Parameters<typeof Journal>[0]["data"]} />
          case "contactForm":
            return <ContactForm key={index} data={block as Parameters<typeof ContactForm>[0]["data"]} />
          case "testimonials":
            return <Testimonials key={index} data={block as Parameters<typeof Testimonials>[0]["data"]} />
          case "newsletter":
            return <Newsletter key={index} data={block as Parameters<typeof Newsletter>[0]["data"]} />
          case "innerHero":
            return <InnerHero key={index} data={block as Parameters<typeof InnerHero>[0]["data"]} />
          case "textImage":
            return <TextImage key={index} data={block as Parameters<typeof TextImage>[0]["data"]} />
          case "stats":
            return <StatsBar key={index} data={block as Parameters<typeof StatsBar>[0]["data"]} />
          case "team":
            return <TeamGrid key={index} data={block as Parameters<typeof TeamGrid>[0]["data"]} />
          case "quoteImage":
            return <QuoteImage key={index} data={block as Parameters<typeof QuoteImage>[0]["data"]} />
          case "principles":
            return <PrinciplesGrid key={index} data={block as Parameters<typeof PrinciplesGrid>[0]["data"]} />
          case "impactProjects":
            return <ImpactProjects key={index} data={block as Parameters<typeof ImpactProjects>[0]["data"]} />
          case "ctaDark":
            return <CtaDark key={index} data={block as Parameters<typeof CtaDark>[0]["data"]} />
          default:
            return null
        }
      })}
    </>
  )
}
