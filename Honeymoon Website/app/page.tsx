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
} from "@/components/blocks"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Tours />
      <Experiences />
      <Features />
      <Journal />
      <ContactForm />
      <Footer />
    </main>
  )
}
