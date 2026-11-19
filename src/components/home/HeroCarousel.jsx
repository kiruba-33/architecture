import { useState, useEffect, useRef, useCallback } from 'react'
import Container from '../common/Container'
import SectionEyebrow from '../common/SectionEyebrow'
import Button from '../common/Button'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

/**
 * 5-Slide Architectural Design Carousel.
 * Reflects artistic architecture, sculptural/organic forms,
 * sand/sandstone/warm beige tones, and minimal sophisticated presentation.
 */
const HERO_SLIDES = [
  {
    id: '01',
    num: '01',
    kicker: 'PROPORTION & GEOMETRY',
    headline: 'Form in Dialogue',
    description:
      'Exploring proportion, geometry and the relationship between architectural forms.',
    image: '/images/hero-slide-1.jpg',
    theme: 'Sandstone & Cantilever Volumes',
    primaryCta: { label: 'Explore Services', to: '/services' },
    secondaryCta: { label: 'Discuss Your Project', to: '/contact' },
  },
  {
    id: '02',
    num: '02',
    kicker: 'BIOPHILIC EXPRESSION',
    headline: 'Sculpted by Nature',
    description:
      'Discovering organic shapes, natural textures and the beauty of spatial expression.',
    image: '/images/hero-slide-2.jpg',
    theme: 'Earthen Clay & Flowing Curves',
    primaryCta: { label: 'Explore Services', to: '/services' },
    secondaryCta: { label: 'Discuss Your Project', to: '/contact' },
  },
  {
    id: '03',
    num: '03',
    kicker: 'SPATIAL COMPOSITION',
    headline: 'Space Reimagined',
    description:
      'Exploring thoughtful spatial compositions through creativity and architectural design.',
    image: '/images/hero-slide-3.jpg',
    theme: 'Monolithic Travertine & Light Study',
    primaryCta: { label: 'Explore Services', to: '/services' },
    secondaryCta: { label: 'Discuss Your Project', to: '/contact' },
  },
  {
    id: '04',
    num: '04',
    kicker: 'TACTILE DETAIL',
    headline: 'Material & Meaning',
    description:
      'Bringing texture, material, light and architectural detail together.',
    image: '/images/hero-slide-4.jpg',
    theme: 'Fluted Mineral & Patinated Bronze',
    primaryCta: { label: 'Explore Services', to: '/services' },
    secondaryCta: { label: 'Discuss Your Project', to: '/contact' },
  },
  {
    id: '05',
    num: '05',
    kicker: 'CONCEPT TO REALITY',
    headline: 'Beyond the Blueprint',
    description:
      'Transforming early architectural ideas into meaningful design concepts.',
    image: '/images/hero-slide-5.jpg',
    theme: 'Structural Drafting & Pavilion Study',
    primaryCta: { label: 'Explore Services', to: '/services' },
    secondaryCta: { label: 'Discuss Your Project', to: '/contact' },
  },
]

const AUTO_PLAY_INTERVAL = 6000

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const autoPlayTimerRef = useRef(null)

  const totalSlides = HERO_SLIDES.length

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play timer with pause on hover/interaction & reduced motion support
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
      return
    }

    autoPlayTimerRef.current = setInterval(() => {
      goToNext()
    }, AUTO_PLAY_INTERVAL)

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
    }
  }, [isPaused, goToNext, currentIndex])

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current
      if (deltaX > 45) {
        goToNext()
      } else if (deltaX < -45) {
        goToPrev()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
    setIsPaused(false)
  }

  return (
    <section
      className="relative min-h-screen flex items-center bg-charcoal text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Architectural Concept Design Hero Slider"
      role="region"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND SLIDES WITH CROSS-FADE TRANSITIONS
      ───────────────────────────────────────────────────────────── */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
            }`}
            aria-hidden={!isActive}
          >
            {/* Visual Subject Image with subtle Ken Burns effect */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundColor: '#29252A',
              }}
            />

            {/* Deep Editorial Architectural Gradient Overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/45 lg:to-charcoal/30"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/70"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-coral/15 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        )
      })}

      {/* Subtle Architectural Drafting Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. SLIDE CONTENT AREA
      ───────────────────────────────────────────────────────────── */}
      <Container className="relative z-20 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:py-44 w-full">
        <div className="max-w-4xl">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex

            return (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-4 absolute pointer-events-none top-0 left-0 right-0'
                }`}
                aria-hidden={!isActive}
              >
                {/* Eyebrow Label with Decorative Coral Line */}
                <div className="mb-4 sm:mb-7">
                  <SectionEyebrow
                    theme="dark"
                    label={`${slide.num} • ${slide.kicker}`}
                    textColor="text-white"
                    lineColor="bg-coral"
                  />
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-condensed font-black tracking-tight text-white leading-[1.06] sm:leading-[1.02]">
                  {slide.headline}
                </h1>

                {/* Supporting Description */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-ivory/90 max-w-2xl leading-relaxed font-light">
                  {slide.description}
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="mt-7 sm:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Button
                    to={slide.primaryCta.to}
                    variant="primary"
                    size="lg"
                    icon={HiArrowRight}
                  >
                    {slide.primaryCta.label}
                  </Button>
                  <Button
                    to={slide.secondaryCta.to}
                    variant="outline-white"
                    size="lg"
                  >
                    {slide.secondaryCta.label}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      {/* ─────────────────────────────────────────────────────────────
          3. MANUAL NAVIGATION CONTROLS (DESKTOP / TABLET ARROWS)
      ───────────────────────────────────────────────────────────── */}
      <div className="hidden sm:flex items-center gap-2 absolute right-6 sm:right-10 lg:right-16 bottom-28 sm:bottom-32 z-30">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="p-3 bg-charcoal/70 backdrop-blur-md border border-white/20 text-white hover:border-coral hover:bg-charcoal hover:text-coral transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral active:translate-y-px rounded"
        >
          <HiChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="p-3 bg-charcoal/70 backdrop-blur-md border border-white/20 text-white hover:border-coral hover:bg-charcoal hover:text-coral transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral active:translate-y-px rounded"
        >
          <HiChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. FIVE NUMBERED SLIDE INDICATORS (DESKTOP & MOBILE)
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-30">
        <Container>
          <div
            className="flex items-center justify-between sm:justify-start gap-2 sm:gap-6 border-t border-white/15 pt-4 sm:pt-5"
            role="tablist"
            aria-label="Hero Carousel Slides"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex

              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${slide.num}: ${slide.headline}`}
                  onClick={() => goToSlide(index)}
                  className="group flex-1 sm:flex-initial text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral py-1"
                >
                  <div className="flex items-center gap-2.5">
                    {/* Number / Label */}
                    <span
                      className={`text-xs font-mono font-bold tracking-widest transition-colors duration-200 ${
                        isActive
                          ? 'text-coral'
                          : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {slide.num}
                    </span>
                    {/* Title preview on larger screens */}
                    <span
                      className={`hidden md:inline text-xs font-condensed uppercase tracking-wider transition-colors duration-200 ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-white/50 group-hover:text-white/80'
                      }`}
                    >
                      {slide.headline}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="mt-2 h-0.5 w-full sm:w-28 lg:w-36 bg-white/20 overflow-hidden rounded-full">
                    <div
                      className={`h-full bg-coral transition-all duration-500 ease-out rounded-full ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </Container>
      </div>

      {/* Subtle Bottom Transition Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-coral to-transparent opacity-80 z-20 pointer-events-none" />
    </section>
  )
}
