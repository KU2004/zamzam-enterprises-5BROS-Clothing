import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl, getSchemaMarkup, getSeoConfigForPath, SITE_NAME, SITE_URL } from "../lib/seo";

export function Seo({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = "website",
  locale = "en_IN",
  section = "Business",
}: {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  locale?: string;
  section?: string;
}) {
  const location = useLocation();
  const currentPath = canonicalPath ?? location.pathname;
  const config = getSeoConfigForPath(currentPath);
  const resolvedTitle = title ?? config.title;
  const resolvedDescription = description ?? config.description;
  const resolvedKeywords = keywords ?? config.keywords;
  const canonical = getCanonicalUrl(currentPath);

  useEffect(() => {
    document.title = `${resolvedTitle} | ${SITE_NAME}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", resolvedDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", resolvedKeywords);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonical);
    }

    const updateMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    updateMeta("author", SITE_NAME);
    updateMeta("theme-color", "#0f0f0f");
    updateMeta("geo.region", "IN");
    updateMeta("geo.placename", "Mumbai, India");
    updateMeta("geo.position", "19.0760;72.8777");
    updateMeta("ICBM", "19.0760, 72.8777");
    updateMeta("language", "English");
    updateMeta("distribution", "global");
    updateMeta("rating", "general");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", resolvedTitle);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      tag.setAttribute("content", resolvedTitle);
      document.head.appendChild(tag);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", resolvedDescription);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      tag.setAttribute("content", resolvedDescription);
      document.head.appendChild(tag);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonical);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      tag.setAttribute("content", canonical);
      document.head.appendChild(tag);
    }

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) {
      ogTypeTag.setAttribute("content", ogType);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:type");
      tag.setAttribute("content", ogType);
      document.head.appendChild(tag);
    }

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      ogSiteName.setAttribute("content", SITE_NAME);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:site_name");
      tag.setAttribute("content", SITE_NAME);
      document.head.appendChild(tag);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", locale);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:locale");
      tag.setAttribute("content", locale);
      document.head.appendChild(tag);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageUrl = `${SITE_URL}/logo.png`;
    if (ogImage) {
      ogImage.setAttribute("content", ogImageUrl);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      tag.setAttribute("content", ogImageUrl);
      document.head.appendChild(tag);
    }

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:card");
      tag.setAttribute("content", "summary_large_image");
      document.head.appendChild(tag);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", resolvedTitle);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:title");
      tag.setAttribute("content", resolvedTitle);
      document.head.appendChild(tag);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", resolvedDescription);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:description");
      tag.setAttribute("content", resolvedDescription);
      document.head.appendChild(tag);
    }

    const twitterSite = document.querySelector('meta[name="twitter:site"]');
    if (twitterSite) {
      twitterSite.setAttribute("content", "@5brosclothing");
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:site");
      tag.setAttribute("content", "@5brosclothing");
      document.head.appendChild(tag);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImageUrl);
    } else {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:image");
      tag.setAttribute("content", ogImageUrl);
      document.head.appendChild(tag);
    }

    const existingScript = document.getElementById("seo-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "seo-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getSchemaMarkup(currentPath));
    document.head.appendChild(script);

    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("data-page-section", section);

    const link = document.querySelector('link[rel="alternate"]');
    if (!link) {
      const alternate = document.createElement("link");
      alternate.setAttribute("rel", "alternate");
      alternate.setAttribute("hreflang", "en-in");
      alternate.setAttribute("href", canonical);
      document.head.appendChild(alternate);
    }
  }, [canonical, currentPath, locale, ogType, resolvedDescription, resolvedKeywords, resolvedTitle, section]);

  return null;
}

export default Seo;
