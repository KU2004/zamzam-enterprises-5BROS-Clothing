export const SITE_URL = "https://www.5brosclothing.com";
export const SITE_NAME = "5BROS Clothing";
export const BUSINESS_NAME = "5BROS Clothing";
export const DEFAULT_IMAGE = "/logo.png";

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string;
  ogType?: string;
  locale?: string;
  section?: string;
}

const seoRoutes: Record<string, SeoConfig> = {
  "/": {
    title: "Custom Clothing Manufacturer India | OEM & ODM Apparel Manufacturing",
    description: "5BROS Clothing is a trusted custom clothing manufacturer in India offering OEM, ODM, private label, uniform, sportswear, and bulk apparel manufacturing for global brands.",
    canonicalPath: "/",
    keywords: "clothing manufacturer india, apparel manufacturer india, custom clothing manufacturer, oem clothing manufacturer, private label clothing",
    ogType: "website",
    locale: "en_IN",
    section: "Home",
  },
  "/about": {
    title: "About 5BROS Clothing | Certified Apparel Manufacturer India",
    description: "Learn about 5BROS Clothing’s manufacturing capabilities, export readiness, quality control, and global apparel production experience.",
    canonicalPath: "/about",
    keywords: "apparel manufacturer india, garment manufacturer india, textile manufacturing company, export ready clothing manufacturer",
    ogType: "article",
    locale: "en_IN",
    section: "About",
  },
  "/products": {
    title: "Custom Apparel Products | T-Shirts, Polo, Hoodies, Activewear",
    description: "Explore 5BROS Clothing’s full catalog of round necks, polos, oversized wear, hoodies, activewear, and custom label apparel.",
    canonicalPath: "/products",
    keywords: "custom t shirt manufacturer, hoodie manufacturer, sportswear manufacturer, private label clothing",
    ogType: "website",
    locale: "en_IN",
    section: "Products",
  },
  "/products/round-neck": {
    title: "Round Neck T-Shirt Manufacturer India | Custom Cotton T-Shirts",
    description: "Discover premium round neck manufacturing with custom GSM, fabric options, print and embroidery services for wholesale and private label orders.",
    canonicalPath: "/products/round-neck",
    keywords: "round neck manufacturer, custom t shirt manufacturer, bulk t shirt supplier, cotton t shirt manufacturer",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/products/polo": {
    title: "Polo T-Shirt Manufacturer India | Custom Polo Shirts",
    description: "Source custom polo shirts from an India-based manufacturer with tailored fits, branding options, and flexible MOQs.",
    canonicalPath: "/products/polo",
    keywords: "polo t-shirt manufacturer, custom polo manufacturer, corporate polo supplier, bulk polo shirts",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/products/oversized": {
    title: "Oversized Clothing Manufacturer India | Streetwear Apparel",
    description: "Order oversized apparel with premium fabrics, custom labels, and low MOQ manufacturing for streetwear and retail brands.",
    canonicalPath: "/products/oversized",
    keywords: "oversized clothing manufacturer, oversized t shirt manufacturer, streetwear manufacturer india",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/products/hoodies": {
    title: "Hoodie Manufacturer India | Sweatshirt & Fleece Apparel",
    description: "Manufacture premium hoodies and sweatshirts in India with custom GSM, fleece options, embroidery, and private label packaging.",
    canonicalPath: "/products/hoodies",
    keywords: "hoodie manufacturer india, sweatshirt manufacturer india, fleece clothing manufacturer, custom hoodie supplier",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/products/activewear": {
    title: "Sportswear Manufacturer India | Performance Activewear",
    description: "Custom performance activewear manufacturing for teams, gyms, wellness brands, and retail distribution with flexible production runs.",
    canonicalPath: "/products/activewear",
    keywords: "sportswear manufacturer india, activewear manufacturer, gym wear manufacturer, performance clothing supplier",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/products/custom-label": {
    title: "Private Label Clothing Manufacturer India | OEM & ODM",
    description: "Build your apparel brand with our OEM, ODM, and private label manufacturing services for uniforms, workwear, and fashion basics.",
    canonicalPath: "/products/custom-label",
    keywords: "private label clothing manufacturer, oem clothing manufacturer, odm clothing manufacturer, custom label apparel manufacturer",
    ogType: "product",
    locale: "en_IN",
    section: "Products",
  },
  "/contact": {
    title: "Contact 5BROS Clothing | Request a Quote for Apparel Manufacturing",
    description: "Get in touch with 5BROS Clothing for OEM, ODM, private label, uniform, and bulk garment manufacturing inquiries from India and beyond.",
    canonicalPath: "/contact",
    keywords: "contact clothing manufacturer india, apparel manufacturing enquiry, request quote clothing manufacturer",
    ogType: "website",
    locale: "en_IN",
    section: "Contact",
  },
  "/faqs": {
    title: "Apparel Manufacturing FAQs | MOQ, Lead Time, Fabrics, Shipping",
    description: "Find answers about MOQs, lead times, fabric options, printing, embroidery, packaging, and international shipping for apparel manufacturing.",
    canonicalPath: "/faqs",
    keywords: "clothing manufacturer faq, apparel manufacturing faq, moq clothing manufacturer, lead time clothing manufacturer",
    ogType: "website",
    locale: "en_IN",
    section: "FAQs",
  },
  "/why-choose-us": {
    title: "Why Choose 5BROS Clothing | Certified Manufacturing Partner",
    description: "Discover why international brands choose 5BROS for quality control, capacity, export experience, and reliable apparel sourcing from India.",
    canonicalPath: "/why-choose-us",
    keywords: "garment manufacturer india, clothing exporter india, apparel supplier, quality control manufacturing",
    ogType: "website",
    locale: "en_IN",
    section: "Why Choose Us",
  },
  "/infrastructure": {
    title: "Manufacturing Infrastructure | Factory Capabilities & Production",
    description: "See how 5BROS Clothing supports scalable production, quality assurance, and export-ready packaging from a modern manufacturing setup.",
    canonicalPath: "/infrastructure",
    keywords: "garment factory india, apparel manufacturing facility, clothing factory infrastructure, production capacity",
    ogType: "website",
    locale: "en_IN",
    section: "Infrastructure",
  },
  "/india": {
    title: "Clothing Manufacturer India | Custom Apparel Manufacturing in India",
    description: "Partner with an established clothing manufacturer in India for custom apparel, private label, uniforms, bulk orders, and export-ready manufacturing.",
    canonicalPath: "/india",
    keywords: "clothing manufacturer india, garment manufacturer india, apparel manufacturer india, custom clothing manufacturer india",
    ogType: "website",
    locale: "en_IN",
    section: "India",
  },
  "/africa": {
    title: "Clothing Manufacturer Africa | Apparel Supplier for African Markets",
    description: "5BROS Clothing supports clothing, uniform, and private label procurement across Africa with competitive manufacturing and export support.",
    canonicalPath: "/africa",
    keywords: "clothing manufacturer africa, garment supplier africa, apparel exporter to africa, uniform supplier africa",
    ogType: "website",
    locale: "en_ZA",
    section: "Africa",
  },
  "/kenya": {
    title: "Clothing Manufacturer Kenya | Apparel Supply for Kenya",
    description: "Reliable clothing manufacturing and export support for Kenya, including uniforms, private label apparel, and bulk garments.",
    canonicalPath: "/kenya",
    keywords: "clothing manufacturer kenya, apparel supplier kenya, uniform manufacturer kenya",
    ogType: "website",
    locale: "en_KE",
    section: "Kenya",
  },
  "/uganda": {
    title: "Clothing Manufacturer Uganda | Custom Apparel Manufacturing",
    description: "Manufacture custom apparel for Uganda with low MOQ support, fast communication, and export-ready production from India.",
    canonicalPath: "/uganda",
    keywords: "clothing manufacturer uganda, apparel supplier uganda, private label clothing uganda",
    ogType: "website",
    locale: "en_UG",
    section: "Uganda",
  },
  "/tanzania": {
    title: "Clothing Manufacturer Tanzania | Uniform & Apparel Supply",
    description: "Source uniforms, cotton apparel, and private label clothing from a manufacturer serving Tanzania and East Africa.",
    canonicalPath: "/tanzania",
    keywords: "clothing manufacturer tanzania, apparel supplier tanzania, uniform manufacturer tanzania",
    ogType: "website",
    locale: "en_TZ",
    section: "Tanzania",
  },
  "/ethiopia": {
    title: "Clothing Manufacturer Ethiopia | Bulk Apparel & Uniforms",
    description: "5BROS supports Ethiopia with custom apparel manufacturing, uniforms, and bulk clothing for retailers and institutions.",
    canonicalPath: "/ethiopia",
    keywords: "clothing manufacturer ethiopia, apparel supplier ethiopia, bulk clothing ethiopia",
    ogType: "website",
    locale: "en_ET",
    section: "Ethiopia",
  },
  "/nigeria": {
    title: "Clothing Manufacturer Nigeria | Bulk Clothing Supplier",
    description: "Reliable clothing manufacturing and export solutions for Nigeria with custom branding, uniforms, and private label apparel.",
    canonicalPath: "/nigeria",
    keywords: "clothing manufacturer nigeria, garment supplier nigeria, wholesale clothing nigeria",
    ogType: "website",
    locale: "en_NG",
    section: "Nigeria",
  },
  "/south-africa": {
    title: "Clothing Manufacturer South Africa | Apparel Exporter",
    description: "Partner with a trusted apparel manufacturer for South Africa with quality control, scalable production, and export support.",
    canonicalPath: "/south-africa",
    keywords: "clothing manufacturer south africa, apparel exporter south africa, uniform supplier south africa",
    ogType: "website",
    locale: "en_ZA",
    section: "South Africa",
  },
  "/ghana": {
    title: "Clothing Manufacturer Ghana | Custom Apparel & Uniforms",
    description: "Find a dependable apparel manufacturing partner for Ghana with bulk production, branding, and export-ready logistics.",
    canonicalPath: "/ghana",
    keywords: "clothing manufacturer ghana, apparel supplier ghana, uniform manufacturer ghana",
    ogType: "website",
    locale: "en_GH",
    section: "Ghana",
  },
  "/uae": {
    title: "Clothing Manufacturer UAE | Apparel Supplier Dubai & Abu Dhabi",
    description: "Source custom apparel, uniforms, and bulk clothing from a manufacturing partner serving the UAE, Dubai, and Abu Dhabi.",
    canonicalPath: "/uae",
    keywords: "clothing manufacturer uae, apparel supplier uae, garment manufacturer dubai, bulk clothing supplier dubai",
    ogType: "website",
    locale: "en_AE",
    section: "UAE",
  },
  "/dubai": {
    title: "Garment Manufacturer Dubai | Uniform & Custom Apparel Supply",
    description: "Custom garment manufacturing and bulk apparel sourcing for Dubai with OEM, ODM, and private label support.",
    canonicalPath: "/dubai",
    keywords: "garment manufacturer dubai, clothing manufacturer dubai, uniform manufacturer dubai",
    ogType: "website",
    locale: "en_AE",
    section: "Dubai",
  },
  "/abu-dhabi": {
    title: "Apparel Supplier Abu Dhabi | Custom Uniform & Workwear",
    description: "Partner with a manufacturing specialist for Abu Dhabi with uniforms, custom apparel, and export-ready production from India.",
    canonicalPath: "/abu-dhabi",
    keywords: "apparel supplier abu dhabi, uniform manufacturer abu dhabi, custom apparel abu dhabi",
    ogType: "website",
    locale: "en_AE",
    section: "Abu Dhabi",
  },
  "/saudi-arabia": {
    title: "Clothing Manufacturer Saudi Arabia | Apparel & Uniform Supplier",
    description: "Manufacture custom clothing, uniforms, and workwear for Saudi Arabia with flexible MOQs and reliable export delivery.",
    canonicalPath: "/saudi-arabia",
    keywords: "clothing manufacturer saudi arabia, garment supplier saudi arabia, apparel manufacturer saudi arabia",
    ogType: "website",
    locale: "en_SA",
    section: "Saudi Arabia",
  },
  "/riyadh": {
    title: "Clothing Manufacturer Riyadh | Uniform & Bulk Apparel",
    description: "Custom apparel manufacturing for Riyadh with private label, uniforms, and bulk order support for local and regional brands.",
    canonicalPath: "/riyadh",
    keywords: "clothing manufacturer riyadh, uniform manufacturer saudi arabia, apparel supplier riyadh",
    ogType: "website",
    locale: "en_SA",
    section: "Riyadh",
  },
  "/jeddah": {
    title: "Clothing Manufacturer Jeddah | Apparel Manufacturing Saudi Arabia",
    description: "Source premium apparel, uniforms, and custom garments for Jeddah and the wider Saudi market through a trusted manufacturer.",
    canonicalPath: "/jeddah",
    keywords: "clothing manufacturer jeddah, apparel supplier jeddah, bulk clothing saudi arabia",
    ogType: "website",
    locale: "en_SA",
    section: "Jeddah",
  },
  "/dammam": {
    title: "Clothing Manufacturer Dammam | Workwear & Uniform Supplier",
    description: "Develop custom uniforms and workwear for Dammam with flexible production, branding, and efficient shipping from India.",
    canonicalPath: "/dammam",
    keywords: "clothing manufacturer dammam, workwear supplier saudi arabia, uniform manufacturer dammam",
    ogType: "website",
    locale: "en_SA",
    section: "Dammam",
  },
  "/blog": {
    title: "Apparel Manufacturing Blog | OEM, ODM, Private Label & Sustainability",
    description: "Read expert articles on private label clothing, OEM vs ODM, sustainable apparel, uniform manufacturing, and bulk production strategies.",
    canonicalPath: "/blog",
    keywords: "apparel manufacturing blog, private label clothing guide, oem vs odm manufacturing, garment manufacturing guide",
    ogType: "website",
    locale: "en_IN",
    section: "Blog",
  },
  "/blog/private-label-clothing-guide": {
    title: "Private Label Clothing Guide | How to Start Your Apparel Brand",
    description: "A complete guide to launching a private label clothing brand with reliable manufacturing, low MOQ options, and brand-ready packaging.",
    canonicalPath: "/blog/private-label-clothing-guide",
    keywords: "private label clothing guide, how to start clothing brand, clothing brand manufacturing",
    ogType: "article",
    locale: "en_IN",
    section: "Blog",
  },
  "/blog/oem-vs-odm-manufacturing": {
    title: "OEM vs ODM Manufacturing | Choosing the Right Apparel Partner",
    description: "Learn the difference between OEM and ODM apparel manufacturing, the pros and cons of each model, and how to choose the right partner.",
    canonicalPath: "/blog/oem-vs-odm-manufacturing",
    keywords: "oem vs odm manufacturing, odm clothing manufacturer, oem apparel manufacturer",
    ogType: "article",
    locale: "en_IN",
    section: "Blog",
  },
  "/blog/best-clothing-manufacturer-in-india": {
    title: "Best Clothing Manufacturer in India | What to Look For",
    description: "A practical guide to choosing the best clothing manufacturer in India for quality, export readiness, certifications, and production capacity.",
    canonicalPath: "/blog/best-clothing-manufacturer-in-india",
    keywords: "best clothing manufacturer in india, garment manufacturer india, apparel manufacturing company",
    ogType: "article",
    locale: "en_IN",
    section: "Blog",
  },
};

export function getSeoConfigForPath(pathname: string): SeoConfig {
  const normalized = pathname.split("?")[0].split("#")[0] || "/";
  return seoRoutes[normalized] ?? seoRoutes["/"];
}

export function getCanonicalUrl(pathname: string): string {
  const config = getSeoConfigForPath(pathname);
  return `${SITE_URL}${config.canonicalPath}`;
}

export function getSchemaMarkup(pathname: string) {
  const config = getSeoConfigForPath(pathname);
  const breadcrumbItems = [{ name: "Home", item: SITE_URL + "/" }];
  const pathSegments = pathname.split("/").filter(Boolean);
  let currentPath = "";

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({ name: segment.replace(/-/g, " "), item: SITE_URL + currentPath });
  });

  const baseSchema: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      sameAs: [
        "https://www.facebook.com/share/164PnQtF1D5/",
        "https://www.instagram.com/5bros_clothing",
        "https://www.linkedin.com/company/5bros-clothing",
        "https://youtube.com/@simnani-enterprises-5",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7306-3333-12",
        contactType: "sales",
        areaServed: ["IN", "AE", "SA", "ZA", "KE", "UG", "TZ", "ET", "NG", "GH"],
        availableLanguage: ["English"],
      },
    } as Record<string, unknown>,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: BUSINESS_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    } as Record<string, unknown>,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: config.title,
      description: config.description,
      url: getCanonicalUrl(pathname),
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: `${SITE_URL}${DEFAULT_IMAGE}`,
      image: `${SITE_URL}${DEFAULT_IMAGE}`,
    } as Record<string, unknown>,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
        item: item.item,
      })),
    } as Record<string, unknown>,
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      telephone: "+91-7306-3333-12",
      address: {
        "@type": "PostalAddress",
        streetAddress: "PL Lokhande Marg, Chembur",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400089",
        addressCountry: "IN",
      },
      areaServed: ["India", "UAE", "Saudi Arabia", "Africa"],
      priceRange: "$$",
      description: "Custom apparel manufacturing, OEM, ODM, private label, and export-ready clothing production from India.",
    } as Record<string, unknown>,
  ];

  const extraSchemas: Array<Record<string, unknown>> = [];

  if (pathname.startsWith("/contact")) {
    extraSchemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: config.title,
      url: getCanonicalUrl(pathname),
      availableLanguage: ["English"],
    } as Record<string, unknown>);
  }

  if (pathname.startsWith("/blog/")) {
    extraSchemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: config.title,
      description: config.description,
      author: {
        "@type": "Organization",
        name: BUSINESS_NAME,
      },
      publisher: {
        "@type": "Organization",
        name: BUSINESS_NAME,
      },
      mainEntityOfPage: getCanonicalUrl(pathname),
    } as Record<string, unknown>);
  }

  if (pathname.startsWith("/products/")) {
    extraSchemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: config.title,
      description: config.description,
      brand: { "@type": "Brand", name: BUSINESS_NAME },
      manufacturer: { "@type": "Organization", name: BUSINESS_NAME },
      category: "Apparel",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        url: getCanonicalUrl(pathname),
      },
    } as Record<string, unknown>);
  }

  return [...baseSchema, ...extraSchemas];
}
