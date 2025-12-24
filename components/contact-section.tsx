"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function ContactSection() {
  const t = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.contactInfo}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{t.contact.contactDescription}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.email}</div>
                  <a
                    href="mailto:info@sayt-tashkent.uz"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@sayt-tashkent.uz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.phone}</div>
                  <a href="tel:+998900555511" className="text-muted-foreground hover:text-primary transition-colors">
                    +998 (90) 055-55-11
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.location}</div>
                  <p className="text-muted-foreground">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-3">{t.contact.businessHours}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t.contact.mondayFriday}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.saturday}</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.sunday}</span>
                  <span>{t.contact.closed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t.contact.fullName}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t.contact.emailAddress}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  {t.contact.phoneNumber}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t.contact.yourMessage}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.yourMessage}
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-xl text-base">
                {t.contact.sendMessage}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
