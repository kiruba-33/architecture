import { useParams, Link } from 'react-router-dom'
import Container from '../components/common/Container'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import NotFound from '../components/common/NotFound'
import BlogCard from '../components/blog/BlogCard'
import { getArticleBySlug, getRelatedArticles } from '../data/blog'
import { usePageMeta } from '../hooks/usePageMeta'
import { HiArrowLeft, HiClock, HiCalendar, HiTag } from 'react-icons/hi2'

/**
 * Editorial Article Detail Page (`/blog/:slug`).
 * Renders structured architectural essays with typography, quotes,
 * cover photography, related articles, and BlogPosting JSON-LD schema.
 */
export default function BlogDetailPage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  // SEO & Structured Data
  usePageMeta(
    article?.seoTitle || 'Article | The Architecture Journal',
    article?.seoDescription || article?.description,
    {
      ogImage: article?.coverImageJpg || article?.coverImage,
      canonical: article ? `https://eskyarchitects.com/blog/${article.slug}` : undefined,
      jsonLd: article
        ? {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.seoDescription || article.description,
            image: `https://eskyarchitects.com${article.coverImageJpg || article.coverImage}`,
            datePublished: article.publishedDate,
            dateModified: article.publishedDate,
            author: {
              '@type': 'Organization',
              name: 'Architecture One',
              url: 'https://eskyarchitects.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Architecture One',
              logo: {
                '@type': 'ImageObject',
                url: 'https://eskyarchitects.com/images/logo/logo-transparent.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://eskyarchitects.com/blog/${article.slug}`,
            },
          }
        : undefined,
    }
  )

  // 404 Fallback for unknown slugs
  if (!article) {
    return (
      <div className="flex-1 flex flex-col">
        <section className="bg-white pt-28 sm:pt-32 pb-14 border-b border-silver">
          <Container>
            <Breadcrumbs
              items={[
                { label: 'Blog', path: '/blog' },
                { label: 'Unknown Article' },
              ]}
              theme="light"
            />
          </Container>
        </section>
        <NotFound
          code="404"
          title="Article Not Located"
          message={`No published architectural essay matching "${slug}" could be located in The Architecture Journal.`}
          actionText="Return to Journal"
          actionTo="/blog"
          secondaryText="Explore Portfolio"
          secondaryTo="/projects"
        />
      </div>
    )
  }

  const relatedArticles = getRelatedArticles(slug)

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL ARTICLE HEADER
      ───────────────────────────────────────────────────────────── */}
      <header className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 bg-white border-b border-silver relative">
        <Container>
          {/* Breadcrumb Navigation Trail */}
          <Breadcrumbs
            items={[
              { label: 'Blog', path: '/blog' },
              { label: article.title },
            ]}
            theme="light"
            className="mb-8"
          />

          <div className="max-w-4xl">
            {/* Category Pill & Metadata */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-secondary mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral font-bold border border-coral/20 rounded-sm">
                <HiTag className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{article.category}</span>
              </span>

              {article.displayDate && (
                <span className="inline-flex items-center gap-1.5">
                  <HiCalendar className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                  <span>{article.displayDate}</span>
                </span>
              )}

              {article.readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <HiClock className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                  <span>{article.readTime}</span>
                </span>
              )}
            </div>

            {/* Article Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-black text-charcoal tracking-tight leading-[1.08] sm:leading-[1.1]">
              {article.title}
            </h1>

            {/* Sub-headline / Excerpt */}
            {article.description && (
              <p className="mt-6 text-lg sm:text-xl text-charcoal/80 font-light leading-relaxed max-w-3xl">
                {article.description}
              </p>
            )}
          </div>
        </Container>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. COVER PHOTOGRAPH HERO
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-ivory border-b border-silver py-8 sm:py-12">
        <Container>
          <div className="max-w-5xl mx-auto overflow-hidden bg-charcoal shadow-md border border-silver rounded-lg">
            <div className="relative aspect-[16/9] sm:aspect-[21/10] overflow-hidden">
              <picture>
                <source srcSet={article.coverImage} type="image/webp" />
                <img
                  src={article.coverImageJpg || article.coverImage}
                  alt={article.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="px-5 py-3 bg-white border-t border-silver text-[11px] font-mono text-secondary flex items-center justify-between">
              <span>Plate {article.id} &bull; Architectural Study Visual</span>
              <span className="uppercase">{article.category}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. ARTICLE NARRATIVE BODY
      ───────────────────────────────────────────────────────────── */}
      <article className="py-16 sm:py-20 lg:py-24 bg-white border-b border-silver">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Structured Sections */}
            <div className="prose prose-lg max-w-none text-charcoal">
              {article.sections.map((section, idx) => {
                if (section.type === 'lead') {
                  return (
                    <p
                      key={idx}
                      className="text-lg sm:text-xl text-charcoal/90 leading-relaxed font-light mb-8 pb-8 border-b border-silver/60"
                    >
                      {section.text}
                    </p>
                  )
                }

                if (section.type === 'heading2') {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-3xl font-condensed font-bold text-charcoal mt-12 mb-4 tracking-tight"
                    >
                      {section.text}
                    </h2>
                  )
                }

                if (section.type === 'heading3') {
                  return (
                    <h3
                      key={idx}
                      className="text-xl sm:text-2xl font-condensed font-bold text-charcoal mt-8 mb-3 tracking-tight"
                    >
                      {section.text}
                    </h3>
                  )
                }

                if (section.type === 'paragraph') {
                  return (
                    <p
                      key={idx}
                      className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal mb-6"
                    >
                      {section.text}
                    </p>
                  )
                }

                if (section.type === 'quote') {
                  return (
                    <figure
                      key={idx}
                      className="my-10 p-6 sm:p-8 bg-ivory border-l-4 border-l-coral border border-silver rounded-r-lg"
                    >
                      <blockquote className="text-lg sm:text-xl font-serif italic text-charcoal leading-relaxed">
                        &ldquo;{section.text}&rdquo;
                      </blockquote>
                      {section.author && (
                        <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                          &mdash; {section.author}
                        </figcaption>
                      )}
                    </figure>
                  )
                }

                return null
              })}
            </div>

            {/* Back to Blog Navigation & Share */}
            <div className="mt-14 pt-8 border-t border-silver flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-coral hover:text-charcoal transition-colors group"
              >
                <HiArrowLeft
                  className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                <span>Back to The Architecture Journal</span>
              </Link>

              <span className="text-xs font-mono text-secondary">
                Published by Architecture One Editorial
              </span>
            </div>
          </div>
        </Container>
      </article>

      {/* ─────────────────────────────────────────────────────────────
          4. RELATED ARTICLES
      ───────────────────────────────────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="relative py-16 sm:py-20 bg-ivory border-b border-silver overflow-hidden">
          {/* Architectural Background Artwork: Design C (Organic Sculptural Artwork) */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.20] mix-blend-multiply"
            style={{ backgroundImage: 'url(/images/backgrounds/bg-sculptural.webp)' }}
            aria-hidden="true"
          />

          <Container className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <SectionHeading
                kicker="FURTHER READING"
                title="Related Architectural Perspectives"
                subtitle="Continue exploring spatial volume, material investigations, and sustainable structural form."
              />
              <Link
                to="/blog"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-coral hover:text-secondary transition-colors shrink-0"
              >
                <span>View All Articles</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {relatedArticles.map((relArticle) => (
                <BlogCard key={relArticle.slug} article={relArticle} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START A CONVERSATION"
        title="Discuss Your Next Building Project"
        subtitle="Connect with our technical team to review blueprints, explore structural feasibility, or evaluate project timelines."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </div>
  )
}
