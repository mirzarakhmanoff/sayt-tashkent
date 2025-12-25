"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export type Language = "ru" | "uz"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode
  initialLanguage: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)
  const router = useRouter()
  const pathname = usePathname()

  // Sync language state with URL on mount
  useEffect(() => {
    setLanguageState(initialLanguage)
    document.documentElement.lang = initialLanguage
  }, [initialLanguage])

  // Handle language change: navigate to new route
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang

    // Replace current language in URL with new language
    const newPath = pathname.replace(/^\/(uz|ru)/, `/${lang}`)
    router.push(newPath)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
