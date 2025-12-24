import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/language-context"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sayt Tashkent - Web Development Company in Uzbekistan",
  description:
    "Professional web development services in Tashkent. We create modern websites, Telegram bots, and web & mobile applications.",
  generator: "innosoft-systems.uz",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`${inter.className} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
