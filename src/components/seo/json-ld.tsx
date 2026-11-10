import { site } from "@/lib/site";
import { products } from "@/lib/products";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D'nest",
    alternateName: ["Dnest", "D'nest Chocolates", "Dnest Homemade Chocolates"],
    url: site.url,
    logo: `${site.url}/images/logo-lockup.png`,
    description: site.description,
    telephone: site.phone,
    slogan: "Homemade chocolates crafted with love",
    knowsAbout: [
      "Artisan Chocolates",
      "Homemade Confectionery",
      "Gourmet Chocolate Jars",
      "Gulkand Chocolate",
      "Peanut Chocolate",
      "Festive Gifting",
      "Vegetarian Chocolates",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "D'nest Chocolates",
    alternateName: "Dnest",
    url: site.url,
    description: site.description,
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "D'nest Homemade Chocolates",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `${site.url}${product.image}`,
        category: "Confectionery > Chocolate Jars",
        weight: product.weight,
        brand: {
          "@type": "Brand",
          name: "D'nest",
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${site.url}/#shop`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "48",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I order D'nest homemade chocolates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tap any Buy button to open our official WhatsApp catalog (+91 95291 76512). Select your flavours (Peanut, Gulkand, Mix Fruit) and quantity, then send your order directly in chat.",
        },
      },
      {
        "@type": "Question",
        name: "Are D'nest chocolates 100% vegetarian?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all D'nest chocolates are 100% vegetarian and handcrafted with pure cocoa and premium ingredients without preservatives.",
        },
      },
      {
        "@type": "Question",
        name: "What flavours of homemade chocolates does D'nest offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "D'nest offers three handcrafted flavours: Peanut Chocolate Jar, Gulkand Chocolate Jar (made with royal rose petal preserve), and Mix Fruit Chocolate Jar.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

