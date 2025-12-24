"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function HeroSection() {
  const t = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <a
              href="tel:+998900555511"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+998 (90) 055-55-11</span>
            </a>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full text-base gap-2 group">
                {t.hero.startProject}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">{t.hero.projectsDone}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">{t.hero.happyClients}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">{t.hero.yearsExperience}</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements with image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src="/image.png"
                  alt="Professional web development"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-6 border border-border animate-float max-w-[200px]">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl shadow-xl p-4 border border-primary animate-float [animation-delay:1s]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold">Sifat</div>
                    <div className="text-xs opacity-90">Kafolatlangan</div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="absolute top-0 left-0 w-2 h-2 bg-primary/30 rounded-full" />
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-primary/30 rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-primary/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
