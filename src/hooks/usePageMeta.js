import { useEffect } from 'react'

/**
 * Custom hook to dynamically manage page metadata, Open Graph tags, canonical links, and JSON-LD structured data.
 *
 * @param {string} title - Page title
 * @param {string} [description] - Meta description
 * @param {object} [options]
 * @param {string} [options.ogImage] - Open Graph image URL
 * @param {object} [options.jsonLd] - JSON-LD structured data object
 */
export function usePageMeta(title, description, options = {}) {
  const { ogImage, jsonLd, canonical } = options

  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title
    }

    // 2. Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }

    // 3. Open Graph Title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (!ogTitle) {
        ogTitle = document.createElement('meta')
        ogTitle.setAttribute('property', 'og:title')
        document.head.appendChild(ogTitle)
      }
      ogTitle.setAttribute('content', title)
    }

    // 4. Open Graph Description
    if (description) {
      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (!ogDesc) {
        ogDesc = document.createElement('meta')
        ogDesc.setAttribute('property', 'og:description')
        document.head.appendChild(ogDesc)
      }
      ogDesc.setAttribute('content', description)
    }

    // 5. Open Graph Image
    if (ogImage) {
      let metaOgImage = document.querySelector('meta[property="og:image"]')
      if (!metaOgImage) {
        metaOgImage = document.createElement('meta')
        metaOgImage.setAttribute('property', 'og:image')
        document.head.appendChild(metaOgImage)
      }
      metaOgImage.setAttribute('content', ogImage)
    }

    // 6. Canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonical)
    }

    // 7. JSON-LD Structured Data
    if (jsonLd) {
      let script = document.querySelector('#page-json-ld')
      if (!script) {
        script = document.createElement('script')
        script.id = 'page-json-ld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    return () => {
      // Clean up dynamic JSON-LD on unmount
      const existingScript = document.querySelector('#page-json-ld')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [title, description, ogImage, jsonLd, canonical])
}
