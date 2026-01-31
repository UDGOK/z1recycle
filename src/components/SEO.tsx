import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://www.z1recycle.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOProps) {
  const fullTitle = `${title} | Z1 Recycling`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Primary meta tags
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    if (noIndex) setMeta('robots', 'noindex, nofollow');

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Z1 Recycling Center', true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    if (canonicalUrl) setMeta('og:url', canonicalUrl, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Geo tags
    setMeta('geo.region', 'US-OK');
    setMeta('geo.placename', 'Mead, Oklahoma');

    // Canonical link
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, noIndex]);

  return null;
}
