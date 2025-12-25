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

  const titles = {
    uz: "Sayt Tashkent - Toshkentda sayt yaratish",
    ru: "Sayt Tashkent - Разработка сайтов в Ташкенте",
  }

  const descriptions = {
    uz: "Toshkentda professional veb-ishlab chiqish. Zamonaviy saytlar, Telegram-botlar va veb/mobil ilovalar yaratamiz.",
    ru: "Профессиональная веб-разработка в Ташкенте. Создаем современные сайты, Telegram-ботов и веб/мобильные приложения.",
  }

  return {
    title: titles[lang as Language] || titles.uz,
    description: descriptions[lang as Language] || descriptions.uz,
    generator: "innosoft-systems.uz",
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
