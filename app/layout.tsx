import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: Promise<{ lang?: string }>
}) {
  const lang = params ? (await params).lang : "uz"

  return (
    <html lang={lang || "uz"}>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
