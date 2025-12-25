import type { Language } from "./dictionary"

export const languages = ["uz", "ru"] as const
export const defaultLanguage: Language = "uz"

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language)
}

export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment
  }

  return defaultLanguage
}
