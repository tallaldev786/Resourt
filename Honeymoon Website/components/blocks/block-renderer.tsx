import { Hero } from "./hero"
import { Destinations } from "./destinations"
import { Experiences } from "./experiences"
import { Features } from "./features"
import { Tours } from "./tours"
import { Journal } from "./journal"
import { ContactForm } from "./contact-form"
import { Testimonials } from "./testimonials"
import { Newsletter } from "./newsletter"

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
          default:
            return null
        }
      })}
    </>
  )
}
