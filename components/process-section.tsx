"use client"

import { MessageSquare, Palette, Code, TestTube, Rocket } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ProcessSection() {
  const t = useTranslation()

  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: t.process.consultation.title,
      description: t.process.consultation.description,
    },
    {
      number: 2,
      icon: Palette,
      title: t.process.design.title,
      description: t.process.design.description,
    },
    {
      number: 3,
      icon: Code,
      title: t.process.development.title,
      description: t.process.development.description,
    },
    {
      number: 4,
      icon: TestTube,
      title: t.process.testing.title,
      description: t.process.testing.description,
    },
    {
      number: 5,
      icon: Rocket,
      title: t.process.launch.title,
      description: t.process.launch.description,
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.process.title} <span className="text-primary">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.process.subtitle}</p>
        </div>

        {/* Desktop horizontal steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-border" />
            <div className="absolute top-12 left-0 h-1 bg-primary w-0 animate-[expand_2s_ease-in-out_forwards]" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="w-24 h-24 bg-background rounded-full border-4 border-primary flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  {/* Content */}
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-9 top-20 w-0.5 h-full bg-border">
                  <div className="w-full h-0 bg-primary animate-[expand-vertical_1s_ease-in-out_forwards]" />
                </div>
              )}

              {/* Step number circle */}
              <div className="flex-shrink-0 w-18 h-18 bg-background rounded-full border-4 border-primary flex items-center justify-center shadow-lg z-10">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>

              {/* Content card */}
              <div className="flex-1 bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
