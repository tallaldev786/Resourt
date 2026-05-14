import { getPageBySlug } from "@/lib/payload"
import {
  Header,
  Hero,
  Destinations,
  Tours,
  Experiences,
  Features,
  Journal,
  ContactForm,
  Footer,
  BlockRenderer,
} from "@/components/blocks"

export default async function Home() {
  // Try to load the home page layout from Payload CMS
  const page = await getPageBySlug("home")

  return (
    <main className="min-h-screen">
      <Header />

      {page?.layout?.length ? (
        // CMS-driven: render blocks from Payload
        <BlockRenderer blocks={page.layout} />
      ) : (
        // Static fallback: shown when Payload is not running or has no data
        <>
          <Hero />
          <Destinations />
          <Tours />
          <Experiences />
          <Features />
          <Journal />
          <ContactForm />
        </>
      )}

      <Footer />
    </main>
  )
}
