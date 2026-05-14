const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"

export type MediaObject = {
  url?: string
  alt?: string
  filename?: string
  width?: number
  height?: number
}

export type PageBlock =
  | ({ blockType: "hero" } & Record<string, unknown>)
  | ({ blockType: "destinations" } & Record<string, unknown>)
  | ({ blockType: "experiences" } & Record<string, unknown>)
  | ({ blockType: "features" } & Record<string, unknown>)
  | ({ blockType: "tours" } & Record<string, unknown>)
  | ({ blockType: "journal" } & Record<string, unknown>)
  | ({ blockType: "contactForm" } & Record<string, unknown>)
  | ({ blockType: "testimonials" } & Record<string, unknown>)
  | ({ blockType: "newsletter" } & Record<string, unknown>)

export type Page = {
  id: string
  title: string
  slug: string
  layout: PageBlock[]
}

export function getMediaUrl(image: string | MediaObject | null | undefined): string {
  if (!image) return ""
  if (typeof image === "string") return image
  const url = image.url ?? ""
  if (!url) return ""
  return url.startsWith("http") ? url : `${PAYLOAD_URL}${url}`
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&depth=2`,
      {
        next: { revalidate: 60 },
        headers: { "Content-Type": "application/json" },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return (data.docs?.[0] as Page) ?? null
  } catch {
    return null
  }
}

export async function getDestinations(limit = 10) {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/destinations?limit=${limit}&where[featured][equals]=true&depth=1`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}

export async function getExperiences(limit = 10) {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/experiences?limit=${limit}&where[featured][equals]=true&depth=1`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}

export async function getTours(limit = 10) {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/tours?limit=${limit}&depth=1`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}

export async function getJournalArticles(limit = 8) {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/journal?limit=${limit}&sort=-publishedAt&depth=1`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}
