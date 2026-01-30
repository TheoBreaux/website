import {useEffect, useMemo} from 'react'

/**
 * Custom hook for SEO optimization
 * @param {Object} options - SEO configuration
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.type - Schema.org type (default: 'WebPage')
 * @param {Object} options.structuredData - Additional structured data
 * @param {string} options.canonical - Canonical URL
 */
export const useSEO = ({
  title,
  description,
  type = 'WebPage',
  structuredData = {},
  canonical,
}) => {
  const pageTitle = useMemo(
    () => (title ? `${title} | Theo Breaux` : 'Theo Breaux | Mobile Developer, Actor, Podcaster'),
    [title]
  )

  const metaDescription = useMemo(
    () =>
      description ||
      'Theo Breaux - Mobile Developer, Actor, and Podcaster. Building apps, telling stories, and taking the mic.',
    [description]
  )

  const defaultStructuredData = useMemo(
    () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
      const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
      
      return {
        '@context': 'https://schema.org',
        '@type': type,
        name: title || 'Theo Breaux',
        description: metaDescription,
        url: currentUrl,
        mainEntity: {
          '@type': 'Person',
          name: 'Theo Breaux',
          jobTitle: ['Mobile Developer', 'Actor', 'Podcaster'],
          email: 'theobreaux@gmail.com',
          url: baseUrl,
        },
        ...structuredData,
      }
    },
    [title, metaDescription, type, structuredData]
  )

  useEffect(() => {
    // Update page title
    document.title = pageTitle

    // Update or create meta description
    let metaDescriptionEl = document.querySelector('meta[name="description"]')
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta')
      metaDescriptionEl.setAttribute('name', 'description')
      document.head.appendChild(metaDescriptionEl)
    }
    metaDescriptionEl.setAttribute('content', metaDescription)

    // Update or create Open Graph tags
    const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
    const ogTags = {
      'og:title': pageTitle,
      'og:description': metaDescription,
      'og:type': 'website',
      'og:url': currentUrl,
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (!ogTag) {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        document.head.appendChild(ogTag)
      }
      ogTag.setAttribute('content', content)
    })

    // Update or create Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': pageTitle,
      'twitter:description': metaDescription,
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if (!twitterTag) {
        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        document.head.appendChild(twitterTag)
      }
      twitterTag.setAttribute('content', content)
    })

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', canonical)
    }

    // Remove existing structured data script if present
    const existingScript = document.querySelector(
      'script[type="application/ld+json"][data-seo-script]'
    )
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-script', 'true')
    script.textContent = JSON.stringify(defaultStructuredData)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [pageTitle, metaDescription, defaultStructuredData, canonical])
}

