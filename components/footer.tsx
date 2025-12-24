"use client"

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Footer() {
  const t = useTranslation()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                S
              </div>
              <span className="font-bold text-lg">
                Sayt<span className="text-primary">Tashkent</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">{t.services.websiteDev.title}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{t.services.telegramBot.title}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{t.services.mobileApps.title}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@sayt-tashkent.uz</li>
              <li>+998 (90) 055-55-11</li>
              <li>Tashkent, Uzbekistan</li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/innosoft_systems/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Powered by{" "}
              <a
                href="https://innosoft-systems.uz"
                target="_blank"
                rel="noreferrer"
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                Innosoft Systems
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
