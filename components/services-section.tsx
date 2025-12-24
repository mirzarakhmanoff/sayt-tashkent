"use client"

import { Globe, Bot, Smartphone } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ServicesSection() {
  const t = useTranslation()

  const services = [
    {
      icon: Globe,
      title: t.services.websiteDev.title,
      description: t.services.websiteDev.description,
    },
    {
      icon: Bot,
      title: t.services.telegramBot.title,
      description: t.services.telegramBot.description,
    },
    {
      icon: Smartphone,
      title: t.services.mobileApps.title,
      description: t.services.mobileApps.description,
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.services.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
