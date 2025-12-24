"use client"

import { Shield, Zap, Users, Headphones } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function WhyChooseUsSection() {
  const t = useTranslation()

  const features = [
    {
      icon: Shield,
      title: t.whyChooseUs.reliable.title,
      description: t.whyChooseUs.reliable.description,
    },
    {
      icon: Zap,
      title: t.whyChooseUs.fastDelivery.title,
      description: t.whyChooseUs.fastDelivery.description,
    },
    {
      icon: Users,
      title: t.whyChooseUs.expertTeam.title,
      description: t.whyChooseUs.expertTeam.description,
    },
    {
      icon: Headphones,
      title: t.whyChooseUs.support247.title,
      description: t.whyChooseUs.support247.description,
    },
  ]

  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              {t.whyChooseUs.title} <span className="text-primary">{t.whyChooseUs.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.whyChooseUs.subtitle}</p>
            <div className="flex gap-4 pt-4">
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">{t.whyChooseUs.clientSatisfaction}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t.whyChooseUs.projectsCompleted}</div>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-muted/50 rounded-xl p-6 space-y-3 hover:bg-muted transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
