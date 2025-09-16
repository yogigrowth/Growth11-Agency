interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  services: string[];
  foundingDate?: string;
  priceRange?: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  email,
  address,
  services,
  foundingDate,
  priceRange
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4499,
      "longitude": 74.6399
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ajmer"
      },
      {
        "@type": "State", 
        "name": "Rajasthan"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 26.4499,
        "longitude": 74.6399
      },
      "geoRadius": 50000
    },
    "foundingDate": foundingDate,
    "priceRange": priceRange,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    "sameAs": [
      "https://www.linkedin.com/company/growth11",
      "https://www.instagram.com/growth11official",
      "https://www.facebook.com/growth11"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": serviceType,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name,
            "description": description
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  url,
  image
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": headline,
    "description": description,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Growth11",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growth11.in/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    ...(image && {
      "image": {
        "@type": "ImageObject", 
        "url": image
      }
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization Schema for About page
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Growth11",
    "alternateName": "Growth11 Ajmer",
    "description": "Leading digital marketing agency in Ajmer, Rajasthan providing SEO, social media marketing, web development, and growth solutions.",
    "url": "https://growth11.in",
    "logo": "https://growth11.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70144-31277",
      "contactType": "customer service",
      "email": "Satya.yogigrowth@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ajmer",
      "addressRegion": "Rajasthan",
      "addressCountry": "India"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Satyaprem",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person", 
        "name": "Himanshu",
        "jobTitle": "Co-Founder"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ajmer",
        "addressRegion": "Rajasthan",
        "addressCountry": "India"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}