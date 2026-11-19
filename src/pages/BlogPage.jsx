import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import FeaturedArticle from '../components/blog/FeaturedArticle'
import BlogGrid from '../components/blog/BlogGrid'
import { articles } from '../data/blog'
import { usePageMeta } from '../hooks/usePageMeta'

/**
 * The Architecture Journal Overview Page (`/blog`).
 * Editorial publication exploring architectural ideas, design perspectives,
 * natural materials, daylight, and sustainable structural engineering.
 */
export default function BlogPage() {
  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0]

  usePageMeta(
    'The Architecture Journal | Architectural Ideas, Design & Materials',
    'Explore critical architectural essays, spatial design perspectives, material investigations, and structural sustainability insights from Architecture One.',
    {
      ogImage: '/images/blog/blog-1.jpg',
      canonical: 'https://eskyarchitects.com/blog',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'The Architecture Journal',
        description:
          'Critical architectural essays, spatial design perspectives, and material investigations.',
        url: 'https://eskyarchitects.com/blog',
        publisher: {
          '@type': 'Organization',
          name: 'Architecture One',
        },
      },
    }
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL JOURNAL HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="THE ARCHITECTURE JOURNAL"
        title="The Architecture Journal"
        description="Exploring architectural ideas, design perspectives, material investigations, spatial volumes, and creative inspiration."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. FEATURED ARTICLE & JOURNAL GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-ivory flex-1 border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design C (Organic Sculptural Artwork) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.20] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-sculptural.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Editorial Journal Intro Banner */}
          <div className="mb-12 p-4 sm:p-5 bg-white border-l-4 border-l-coral border border-silver flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs rounded-r-lg">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal block mb-1">
                Studio Perspectives &amp; Architectural Research
              </span>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                An editorial collection of insights on architectural volume, natural materiality, daylight choreography, and sustainable structural permanence.
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-charcoal px-3 py-1 bg-ivory border border-silver rounded-sm">
              6 Articles Published
            </span>
          </div>

          {/* Featured Article Spotlight */}
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}

          {/* Section Heading for All Articles */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <SectionHeading
              kicker="ALL PERSPECTIVES"
              title="Architectural Essays & Studies"
              subtitle="Critical essays and design explorations into contemporary architectural space, material craftsmanship, and structural sustainability."
            />
          </div>

          {/* Filterable Blog Grid */}
          <BlogGrid articles={articles} />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START A CONVERSATION"
        title="Translate Architectural Vision into Reality"
        subtitle="Connect with our design and technical team to discuss concept development, structural engineering, or project feasibility."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Portfolio', to: '/projects' }}
      />
    </div>
  )
}
