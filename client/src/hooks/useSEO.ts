import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSEO({ title, description, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle || title);
    }

    // Update OG description
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription || description);
    }
  }, [title, description, ogTitle, ogDescription]);
}