import type React from "react"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { isValidLanguage } from "@/lib/i18n/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Language } from "@/lib/i18n/dictionary"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const baseUrl = "https://sayt-tashkent.uz"
  const currentUrl = `${baseUrl}/${lang}`

  const titles = {
    uz: "Sayt Tashkent - Toshkentda Professional Sayt Yaratish | Web Development",
    ru: "Sayt Tashkent - Профессиональная Разработка Сайтов в Ташкенте | Web Development",
  }

  const descriptions = {
    uz: "Toshkentda professional veb-ishlab chiqish xizmatlari. Zamonaviy saytlar, Telegram-botlar, veb va mobil ilovalar yaratamiz. SEO optimizatsiya, responsive dizayn va 24/7 qo'llab-quvvatlash.",
    ru: "Профессиональная веб-разработка в Ташкенте. Создаем современные сайты, Telegram-ботов, веб и мобильные приложения. SEO оптимизация, адаптивный дизайн и поддержка 24/7.",
  }

  const keywords = {
    uz: "sayt yaratish toshkent, veb sayt toshkentda, sayt buyurtma qilish, telegram bot yaratish, veb dasturlash o'zbekistonda, mobil ilova yaratish, professional sayt, seo optimizatsiya, responsive dizayn, landing page",
    ru: "создание сайтов ташкент, веб сайт в ташкенте, заказать сайт, создание telegram ботов, веб разработка в узбекистане, создание мобильных приложений, профессиональный сайт, seo оптимизация, адаптивный дизайн, лендинг пейдж",
  }

  return {
    title: titles[lang as Language] || titles.uz,
    description: descriptions[lang as Language] || descriptions.uz,
    keywords: keywords[lang as Language] || keywords.uz,
    authors: [{ name: "Sayt Tashkent Team" }],
    creator: "Sayt Tashkent",
    publisher: "Sayt Tashkent",
    generator: "innosoft-systems.uz",
    applicationName: "Sayt Tashkent",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        uz: `${baseUrl}/uz`,
        ru: `${baseUrl}/ru`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "uz" ? "uz_UZ" : "ru_RU",
      alternateLocale: lang === "uz" ? ["ru_RU"] : ["uz_UZ"],
      url: currentUrl,
      title: titles[lang as Language] || titles.uz,
      description: descriptions[lang as Language] || descriptions.uz,
      siteName: "Sayt Tashkent",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: lang === "uz"
            ? "Sayt Tashkent - Professional Veb Ishlab Chiqish"
            : "Sayt Tashkent - Профессиональная Веб Разработка",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang as Language] || titles.uz,
      description: descriptions[lang as Language] || descriptions.uz,
      images: [`${baseUrl}/og-image.jpg`],
      creator: "@sayttashkent",
      site: "@sayttashkent",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    notFound()
  }

  return <LanguageProvider initialLanguage={lang as Language}>{children}</LanguageProvider>
}
