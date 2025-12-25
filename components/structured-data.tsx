"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function StructuredData() {
  const { language } = useLanguage()

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sayt Tashkent",
    alternateName: language === "uz" ? "Sayt Toshkent" : "Сайт Ташкент",
    url: "https://sayt-tashkent.uz",
    logo: "https://sayt-tashkent.uz/logo.png",
    description:
      language === "uz"
        ? "Toshkentda professional veb-ishlab chiqish xizmatlari"
        : "Профессиональная веб-разработка в Ташкенте",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tashkent",
      addressLocality: "Tashkent",
      addressRegion: "Tashkent",
      addressCountry: "UZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["uz", "ru", "en"],
    },
    sameAs: [
      "https://t.me/sayttashkent",
      "https://instagram.com/sayttashkent",
      "https://facebook.com/sayttashkent",
    ],
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sayt Tashkent",
    url: "https://sayt-tashkent.uz",
    description:
      language === "uz"
        ? "Toshkentda professional veb-ishlab chiqish xizmatlari"
        : "Профессиональная веб-разработка в Ташкенте",
    inLanguage: [language],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sayt-tashkent.uz/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sayt Tashkent",
    image: "https://sayt-tashkent.uz/logo.png",
    "@id": "https://sayt-tashkent.uz",
    url: "https://sayt-tashkent.uz",
    telephone: "+998901234567",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tashkent",
      addressLocality: "Tashkent",
      addressRegion: "Tashkent",
      postalCode: "100000",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2995,
      longitude: 69.2401,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://t.me/sayttashkent",
      "https://instagram.com/sayttashkent",
      "https://facebook.com/sayttashkent",
    ],
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Sayt Tashkent",
    },
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        language === "uz"
          ? "Veb ishlab chiqish xizmatlari"
          : "Услуги веб-разработки",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              language === "uz" ? "Sayt yaratish" : "Создание сайтов",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              language === "uz"
                ? "Telegram bot yaratish"
                : "Создание Telegram ботов",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              language === "uz"
                ? "Mobil ilova yaratish"
                : "Создание мобильных приложений",
          },
        },
      ],
    },
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: language === "uz" ? "Bosh sahifa" : "Главная",
        item: `https://sayt-tashkent.uz/${language}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}
