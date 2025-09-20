// SEO utility functions and configurations
export const seoConfig = {
  siteName: 'Vectorium',
  siteUrl: 'https://www.vectorium.co',
  defaultTitle: 'Vectorium - The Future of Crypto Energy',
  defaultDescription: 'Revolutionary blockchain technology powering sustainable energy solutions. Join Vectorium\'s innovative crypto-energy platform. Investment opportunities available.',
  defaultKeywords: [
    'cryptocurrency',
    'blockchain',
    'renewable energy',
    'sustainable technology',
    'investment opportunity',
    'crypto energy',
    'green energy',
    'blockchain energy',
    'sustainable crypto',
    'energy trading',
    'carbon credits',
    'clean energy investment',
    'crypto energy solutions',
    'blockchain renewable energy',
    'sustainable blockchain'
  ],
  social: {
    twitter: '@vectorium',
    linkedin: 'https://linkedin.com/company/vectorium',
    github: 'https://github.com/vectorium'
  },
  contact: {
    email: 'info@vectorium.ai'
  }
};

// Generate structured data for different page types
export const generateStructuredData = (type: 'organization' | 'website' | 'article', data?: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'organization' ? 'Organization' : type === 'website' ? 'WebSite' : 'Article',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo copy.jpg`,
    description: seoConfig.defaultDescription,
  };

  if (type === 'organization') {
    return {
      ...baseData,
      foundingDate: '2024',
      industry: 'Blockchain Technology, Renewable Energy, Cryptocurrency',
      slogan: 'In CryptoEnergy We Trust',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: seoConfig.contact.email
      },
      sameAs: [
        `https://twitter.com/${seoConfig.social.twitter}`,
        seoConfig.social.linkedin,
        seoConfig.social.github
      ],
      offers: {
        '@type': 'Offer',
        description: 'Investment opportunities in crypto-energy solutions',
        category: 'Financial Services'
      }
    };
  }

  if (type === 'website') {
    return {
      ...baseData,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  return baseData;
};

// Generate meta tags for different pages
export const generateMetaTags = (pageData?: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}) => {
  const title = pageData?.title ? `${pageData.title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const description = pageData?.description || seoConfig.defaultDescription;
  const keywords = pageData?.keywords ? [...seoConfig.defaultKeywords, ...pageData.keywords] : seoConfig.defaultKeywords;
  const image = pageData?.image || `${seoConfig.siteUrl}/logo copy.jpg`;
  const url = pageData?.url || seoConfig.siteUrl;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    image,
    url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:url': url,
  };
};

// Google Analytics configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

// Google Analytics script
export const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_TRACKING_ID}', {
    page_title: document.title,
    page_location: window.location.href,
  });
`;

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
