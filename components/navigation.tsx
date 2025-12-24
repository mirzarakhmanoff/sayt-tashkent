"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { useTranslation } from "@/hooks/use-translation";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // fixed header: h-16 => 64px. Yana biroz spacing qo‘shamiz
    const headerOffset = 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    // menu yopilgandan keyin scroll bo‘lsin
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg">
              Sayt-<span className="text-primary">Tashkent.uz</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => handleNavClick("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("why-us")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.whyUs}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("process")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.process}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.portfolio}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {language === "ru" ? "RU" : "UZ"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("ru")}>Русский (RU)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("uz")}>Ўзбек (UZ)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="rounded-full"
              onClick={() => handleNavClick("contact")} // masalan contactga olib boramiz
            >
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              type="button"
              className="block text-left w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick("services")}
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              className="block text-left w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick("why-us")}
            >
              {t.nav.whyUs}
            </button>

            <button
              type="button"
              className="block text-left w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick("process")}
            >
              {t.nav.process}
            </button>

            <button
              type="button"
              className="block text-left w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick("portfolio")}
            >
              {t.nav.portfolio}
            </button>

            <button
              type="button"
              className="block text-left w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick("contact")}
            >
              {t.nav.contact}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                  <Globe className="w-4 h-4" />
                  {language === "ru" ? "Русский (RU)" : "Ўзбек (UZ)"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-full">
                <DropdownMenuItem onClick={() => setLanguage("ru")}>Русский (RU)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("uz")}>Ўзбек (UZ)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="w-full rounded-full"
              onClick={() => handleNavClick("contact")}
            >
              {t.nav.getStarted}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
