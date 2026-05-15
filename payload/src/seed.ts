import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding pages...')

  // Delete existing pages so we can re-seed cleanly
  const existing = await payload.find({ collection: 'pages', limit: 100 })
  for (const page of existing.docs) {
    await payload.delete({ collection: 'pages', id: page.id })
    console.log(`🗑  Deleted existing page: ${page.slug}`)
  }

  // ─────────────────────────────────────────────────────────────────────────
  // HOME PAGE
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Home',
      slug: 'home',
      layout: [
        {
          blockType: 'hero',
          heading: 'Exceptional Journeys',
          subheading:
            'Set off on remarkable, deeply personal trips planned by award-winning specialists',
          ctaText: 'Start Planning',
          destinations: [
            { label: 'Africa', value: 'africa' },
            { label: 'Central Asia', value: 'central-asia' },
            { label: 'Indian Subcontinent', value: 'indian-subcontinent' },
            { label: 'Latin America', value: 'latin-america' },
            { label: 'South Pacific', value: 'south-pacific' },
            { label: 'Europe', value: 'europe' },
            { label: 'Middle East', value: 'middle-east' },
          ],
        },
        {
          blockType: 'destinations',
          heading: 'Our destinations',
        },
        {
          blockType: 'tours',
          heading: 'Your trip, your story',
        },
        {
          blockType: 'experiences',
          heading: 'Find your journey',
        },
        {
          blockType: 'features',
          heading: 'Why book with Jacada?',
          features: [
            {
              icon: 'sparkles',
              title: 'Original experiences',
              description:
                "We'll plan your trip around your personal interests and preferences. We get to know you first. So we can craft a luxury journey — and a story — that's uniquely yours.",
            },
            {
              icon: 'heart',
              title: 'The personal touch',
              description:
                'Our destination specialists, expert guides and brilliant concierges are hand-picked for their ability to bring your destination to life with care and passion.',
            },
            {
              icon: 'leaf',
              title: 'Responsible travel',
              description:
                'Guided by our Positive Impact Principles, we seek to ensure your trip can help preserve, support and regenerate culture, biodiversity and heritage.',
            },
          ],
        },
        {
          blockType: 'journal',
          heading: 'Get inspired',
        },
        {
          blockType: 'testimonials',
          heading: 'What our travelers say',
          testimonials: [
            {
              authorName: 'Sarah & Michael',
              destination: 'Bali, Indonesia',
              quote:
                'Every detail was perfect, from the private villa in Bali to the sunset dinner on the beach. The team anticipated our every need and created moments we\'ll cherish forever.',
            },
            {
              authorName: 'Emma & James',
              destination: 'Maldives',
              quote:
                'We were blown away by the level of service. Our dedicated travel designer created an itinerary that perfectly matched our interests. The Maldives trip exceeded all expectations.',
            },
            {
              authorName: 'Jennifer & David',
              destination: 'Santorini, Greece',
              quote:
                'From the moment we reached out, we felt special. The VIP upgrades, the exclusive experiences — everything was world-class. An unforgettable honeymoon.',
            },
          ],
        },
        {
          blockType: 'contactForm',
          heading: 'Your adventure starts now',
          subheading:
            'Whatever you want your luxury private tour or safari itinerary to include, we\'ll create something fully bespoke for you… and only you.',
          submitButtonText: 'Start planning',
          destinationOptions: [
            { label: 'Africa', value: 'africa' },
            { label: 'Asia', value: 'asia' },
            { label: 'Central Asia', value: 'central-asia' },
            { label: 'Europe', value: 'europe' },
            { label: 'Indian Subcontinent', value: 'indian-subcontinent' },
            { label: 'Latin America', value: 'latin-america' },
            { label: 'South Pacific', value: 'south-pacific' },
            { label: 'Not sure yet', value: 'not-sure' },
          ],
        },
        {
          blockType: 'newsletter',
          heading: 'Stay inspired',
          description:
            'Subscribe to our newsletter for destination guides, travel inspiration, and exclusive offers delivered to your inbox.',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
        },
      ],
    },
  })
  console.log('✅ Created: Home page')

  // ─────────────────────────────────────────────────────────────────────────
  // ABOUT PAGE
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'About Us',
      slug: 'about',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Our story',
          heading: 'Crafting exceptional journeys since 2008',
          overlayOpacity: 'dark',
        },
        {
          blockType: 'stats',
          background: 'dark',
          stats: [
            { value: '15+', label: 'Years of expertise' },
            { value: '50+', label: 'Destinations covered' },
            { value: '10,000+', label: 'Trips crafted' },
            { value: '98%', label: 'Client satisfaction' },
          ],
        },
        {
          blockType: 'features',
          heading: 'Why book with Jacada?',
          features: [
            {
              icon: 'sparkles',
              title: 'Original experiences',
              description:
                "We'll plan your trip around your personal interests and preferences. We get to know you first — so we can craft a luxury journey, and a story, that's uniquely yours.",
            },
            {
              icon: 'heart',
              title: 'The personal touch',
              description:
                'Our destination specialists, expert guides and brilliant concierges are hand-picked for their ability to bring your destination to life with care and passion.',
            },
            {
              icon: 'leaf',
              title: 'Responsible travel',
              description:
                'Guided by our Positive Impact Principles, we seek to ensure your trip can help preserve, support and regenerate culture, biodiversity and heritage.',
            },
            {
              icon: 'star',
              title: 'Award-winning service',
              description:
                'Recognised year after year for excellence in luxury travel. Our team has won multiple industry awards for exceptional client experience and destination knowledge.',
            },
            {
              icon: 'globe',
              title: 'Expert specialists',
              description:
                'Every member of our team has lived in or extensively travelled to the destinations they recommend. This first-hand knowledge is at the heart of everything we do.',
            },
            {
              icon: 'shield',
              title: 'Tailored to you',
              description:
                "No two trips are ever the same. Every itinerary we create is designed from scratch for you — your interests, your pace, your style of travel.",
            },
          ],
        },
        {
          blockType: 'team',
          eyebrow: 'The people behind your journey',
          heading: 'Meet our specialists',
          members: [
            {
              name: 'Alexandra Reed',
              role: 'Africa Specialist',
              bio: "15 years exploring Africa's wild places. Alexandra has visited every country on the continent and knows the best camps before anyone else.",
            },
            {
              name: 'Marcus Chen',
              role: 'Asia Specialist',
              bio: 'Born in Singapore, Marcus spent a decade guiding luxury travel across Southeast Asia before joining our team.',
            },
            {
              name: 'Sophia Williams',
              role: 'Latin America Specialist',
              bio: 'From the Galapagos to Patagonia, Sophia has explored every corner of Latin America and speaks Spanish and Portuguese fluently.',
            },
            {
              name: 'James Okafor',
              role: 'Indian Subcontinent Specialist',
              bio: 'James has spent years living and travelling across India, Nepal and Sri Lanka, building relationships with the finest local operators.',
            },
          ],
        },
        {
          blockType: 'testimonials',
          heading: 'What our travelers say',
          testimonials: [
            {
              authorName: 'Sarah & Michael',
              destination: 'Bali, Indonesia',
              quote:
                "Every detail was perfect, from the private villa in Bali to the sunset dinner on the beach. The team anticipated our every need and created moments we'll cherish forever.",
            },
            {
              authorName: 'Emma & James',
              destination: 'Maldives',
              quote:
                'We were blown away by the level of service. Our dedicated travel designer created an itinerary that perfectly matched our interests.',
            },
            {
              authorName: 'Jennifer & David',
              destination: 'Santorini, Greece',
              quote:
                'From the moment we reached out, we felt special. The VIP upgrades, the exclusive experiences — everything was world-class. An unforgettable honeymoon.',
            },
          ],
        },
        {
          blockType: 'contactForm',
          heading: 'Your adventure starts now',
          subheading:
            "Whatever you want your luxury private tour or safari itinerary to include, we'll create something fully bespoke for you… and only you.",
          submitButtonText: 'Start planning',
          destinationOptions: [
            { label: 'Africa', value: 'africa' },
            { label: 'Asia', value: 'asia' },
            { label: 'Europe', value: 'europe' },
            { label: 'Latin America', value: 'latin-america' },
            { label: 'Not sure yet', value: 'not-sure' },
          ],
        },
        {
          blockType: 'newsletter',
          heading: 'Stay inspired',
          description:
            'Subscribe for destination guides, travel inspiration, and exclusive offers delivered to your inbox.',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
        },
      ],
    },
  })
  console.log('✅ Created: About page')

  // ─────────────────────────────────────────────────────────────────────────
  // POSITIVE IMPACT PAGE
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Positive Impact',
      slug: 'positive-impact',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Our commitment',
          heading: 'Travel that gives back',
          overlayOpacity: 'dark',
        },
        {
          blockType: 'principles',
          heading: 'Our Positive Impact Principles',
          subheading:
            'Six principles that guide how we travel, who we partner with, and what we stand for.',
          principles: [
            {
              icon: 'leaf',
              title: 'Preserve Biodiversity',
              description:
                'We partner exclusively with lodges and operators that actively contribute to conservation. A portion of every booking supports wildlife reserves and anti-poaching initiatives.',
            },
            {
              icon: 'users',
              title: 'Support Communities',
              description:
                'We prioritise locally-owned properties and community-run lodges, ensuring the economic benefits of tourism flow directly to the people who live there.',
            },
            {
              icon: 'globe',
              title: 'Regenerate Heritage',
              description:
                'From UNESCO sites to ancient trade routes, we advocate for responsible access policies that protect cultural heritage for future generations.',
            },
            {
              icon: 'heart',
              title: 'Empower Local Guides',
              description:
                'Our local guides are partners, not contractors. We pay fair wages, invest in their training, and celebrate their expertise as the cornerstone of every trip.',
            },
            {
              icon: 'tree',
              title: 'Offset & Reduce Carbon',
              description:
                'We calculate the carbon footprint of every trip and invest in verified offsetting projects — from reforestation in Kenya to clean cookstoves in Rwanda.',
            },
            {
              icon: 'droplets',
              title: 'Protect Water Sources',
              description:
                'In partnership with our lodge network, we support water conservation projects in water-stressed destinations across Africa and Asia.',
            },
          ],
        },
        {
          blockType: 'impactProjects',
          eyebrow: 'On the ground',
          heading: 'Projects we support',
          projects: [
            {
              title: 'Wilderness & Wildlife Fund',
              location: 'Botswana & Zimbabwe',
              stat: '$2.4M raised',
              description:
                "Supporting anti-poaching rangers and wildlife corridors in the Kavango-Zambezi Transfrontier Conservation Area — one of the world's largest.",
            },
            {
              title: 'Female Guides of the Future',
              location: 'East Africa',
              stat: '140 graduates',
              description:
                'A scholarship programme training the next generation of female safari guides — breaking barriers in a historically male-dominated industry.',
            },
            {
              title: 'Community Lodges Initiative',
              location: 'Namibia & Zambia',
              stat: '28 communities',
              description:
                'Directing bookings towards community-owned lodges where 100% of profits fund schools, clinics and water infrastructure in remote villages.',
            },
          ],
        },
        {
          blockType: 'ctaDark',
          heading: 'Travel with purpose.\nTravel with Jacada.',
          body: "Every trip we plan contributes directly to the conservation and community projects you've read about. Extraordinary travel and positive impact — they go hand in hand.",
          primaryLabel: 'Start Planning',
          primaryHref: '/#contact',
          secondaryLabel: 'About Us',
          secondaryHref: '/about',
        },
        {
          blockType: 'newsletter',
          heading: 'Stay inspired',
          description:
            'Subscribe for destination guides, travel inspiration, and exclusive offers delivered to your inbox.',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
        },
      ],
    },
  })
  console.log('✅ Created: Positive Impact page')

  // ─────────────────────────────────────────────────────────────────────────
  // DESTINATIONS PAGE
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Destinations',
      slug: 'destinations',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Explore the world',
          heading: 'Our Destinations',
          overlayOpacity: 'medium',
        },
        {
          blockType: 'features',
          heading: 'Why travel with us?',
          features: [
            {
              icon: 'globe',
              title: 'Every corner of the world',
              description:
                'From the savannahs of Africa to the temples of Asia — our specialists have first-hand knowledge of every destination we offer.',
            },
            {
              icon: 'sparkles',
              title: 'Handpicked experiences',
              description:
                'We work only with the finest lodges, guides and operators in each destination — chosen for their quality, authenticity and positive impact.',
            },
            {
              icon: 'heart',
              title: 'Tailored to you',
              description:
                'Every trip is designed from scratch around your interests, travel style and pace. No two itineraries are ever the same.',
            },
          ],
        },
        {
          blockType: 'ctaDark',
          heading: 'Not sure where to go?',
          body: "Our specialists will help you find the perfect destination based on your interests, travel dates and budget. There's a world of options — let us help you choose.",
          primaryLabel: 'Talk to a Specialist',
          primaryHref: '/#contact',
          secondaryLabel: 'Browse All Tours',
          secondaryHref: '/tours',
        },
        {
          blockType: 'newsletter',
          heading: 'Get destination inspiration',
          description:
            'Sign up for destination guides, expert tips and exclusive travel offers delivered to your inbox.',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
        },
      ],
    },
  })
  console.log('✅ Created: Destinations page')

  // ─────────────────────────────────────────────────────────────────────────
  // TOURS PAGE (Luxury Safaris)
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Luxury Safaris & Tours',
      slug: 'tours',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Your trip, your story',
          heading: 'Luxury Safaris & Tours',
          overlayOpacity: 'medium',
        },
        {
          blockType: 'features',
          heading: 'What makes our tours different?',
          features: [
            {
              icon: 'sparkles',
              title: '100% bespoke itineraries',
              description:
                "Every tour we create starts with a blank page. We don't use templates — your itinerary is built entirely around you.",
            },
            {
              icon: 'star',
              title: 'Award-winning specialists',
              description:
                "Our travel designers have lived in and extensively explored the regions they recommend. You get real expertise, not a brochure.",
            },
            {
              icon: 'shield',
              title: 'Fully supported journey',
              description:
                'From the moment you book to the day you return, our team is available around the clock to ensure everything runs perfectly.',
            },
          ],
        },
        {
          blockType: 'testimonials',
          heading: 'What our travellers say',
          testimonials: [
            {
              authorName: 'Sarah & Michael',
              destination: 'Kenya Safari',
              quote:
                "The safari exceeded every expectation. Seeing lions at sunrise from our private camp was something we'll never forget. The planning was flawless.",
            },
            {
              authorName: 'Emma & James',
              destination: 'Botswana & Zimbabwe',
              quote:
                "Our specialist understood exactly what we wanted — a real wilderness experience, not a tourist trail. The okavango delta was extraordinary.",
            },
            {
              authorName: 'Jennifer & David',
              destination: 'Tanzania & Zanzibar',
              quote:
                'From the Serengeti migration to snorkelling in Zanzibar — the combination was perfect. Every lodge was exceptional.',
            },
          ],
        },
        {
          blockType: 'contactForm',
          heading: 'Start planning your tour',
          subheading:
            "Tell us your dream trip and our specialists will create a bespoke itinerary tailored entirely to you.",
          submitButtonText: 'Send enquiry',
          destinationOptions: [
            { label: 'Africa', value: 'africa' },
            { label: 'Asia', value: 'asia' },
            { label: 'Latin America', value: 'latin-america' },
            { label: 'Europe', value: 'europe' },
            { label: 'South Pacific', value: 'south-pacific' },
            { label: 'Not sure yet', value: 'not-sure' },
          ],
        },
      ],
    },
  })
  console.log('✅ Created: Tours page')

  // ─────────────────────────────────────────────────────────────────────────
  // EXPERIENCES PAGE (Trip Types)
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Trip Types',
      slug: 'experiences',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Find your journey',
          heading: 'Trip Types',
          overlayOpacity: 'medium',
        },
        {
          blockType: 'features',
          heading: 'Every kind of journey',
          features: [
            {
              icon: 'sparkles',
              title: 'Active Adventures',
              description:
                'Experience the world\'s most beautiful hikes, dives and safaris. Push your limits in extraordinary places with expert guides at your side.',
            },
            {
              icon: 'heart',
              title: 'Romantic Escapes',
              description:
                'Unforgettable honeymoons and anniversary trips — private villas, sunset dinners and once-in-a-lifetime moments crafted for two.',
            },
            {
              icon: 'globe',
              title: 'Cultural Immersion',
              description:
                'Go beyond the surface. Meet local communities, learn ancient crafts, taste regional cuisine and connect with the places you visit.',
            },
          ],
        },
        {
          blockType: 'ctaDark',
          heading: 'Find your perfect trip type',
          body: "Not sure which style of travel suits you? Our specialists will ask the right questions to find the perfect match — and create an itinerary you'll love.",
          primaryLabel: 'Talk to a Specialist',
          primaryHref: '/#contact',
          secondaryLabel: 'Browse Destinations',
          secondaryHref: '/destinations',
        },
        {
          blockType: 'newsletter',
          heading: 'Stay inspired',
          description:
            'Sign up for travel inspiration, destination guides and exclusive offers from Jacada Travel.',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
        },
      ],
    },
  })
  console.log('✅ Created: Experiences page')

  // ─────────────────────────────────────────────────────────────────────────
  // JOURNAL PAGE (Inspiration)
  // ─────────────────────────────────────────────────────────────────────────
  await payload.create({
    collection: 'pages',
    data: {
      title: 'The Journal',
      slug: 'journal',
      layout: [
        {
          blockType: 'innerHero',
          eyebrow: 'Travel inspiration',
          heading: 'The Journal',
          overlayOpacity: 'medium',
        },
        {
          blockType: 'features',
          heading: 'Stories from the field',
          features: [
            {
              icon: 'globe',
              title: 'Destination guides',
              description:
                'In-depth guides to the world\'s most extraordinary destinations — written by specialists who have been there many times.',
            },
            {
              icon: 'sparkles',
              title: 'Expert tips',
              description:
                'Insider knowledge from our team of destination specialists — the best times to visit, where to stay and what not to miss.',
            },
            {
              icon: 'heart',
              title: 'Travel stories',
              description:
                'Real stories from real travellers. Be inspired by the experiences of those who have gone before you.',
            },
          ],
        },
        {
          blockType: 'newsletter',
          heading: 'Never miss a story',
          description:
            'Subscribe to the Jacada Journal for weekly travel inspiration, destination guides and exclusive offers.',
          buttonText: 'Subscribe now',
          placeholder: 'Your email address',
        },
      ],
    },
  })
  console.log('✅ Created: Journal page')

  console.log('\n🎉 Seeding complete! 7 pages created.')
  console.log('   → Home:            http://localhost:3001/admin/collections/pages')
  console.log('   → Destinations:    /destinations')
  console.log('   → Tours:           /tours')
  console.log('   → Experiences:     /experiences')
  console.log('   → Journal:         /journal')
  console.log('   → About:           /about')
  console.log('   → Positive Impact: /positive-impact')

  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
