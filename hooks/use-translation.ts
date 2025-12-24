"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { dictionary, type Dictionary } from "@/lib/i18n/dictionary"

export function useTranslation(): Dictionary {
  const { language } = useLanguage()
  return dictionary[language]
}
