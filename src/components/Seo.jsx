import { useEffect } from "react";
import { company, seo } from "../data/siteContent";

function upsertMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

function Seo() {
  useEffect(() => {
    document.title = seo.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });

    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: seo.keywords,
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: seo.url,
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: seo.image,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: seo.image,
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);

    let schemaTag = document.getElementById("org-schema");
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "org-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: company.name,
        url: seo.url,
        logo: `${seo.url}assets/img/favicon.png`,
        email: company.email,
        telephone: company.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          addressLocality: company.city,
          addressRegion: company.province,
          addressCountry: company.country,
        },
      },
      null,
      0
    );
  }, []);

  return null;
}

export default Seo;
