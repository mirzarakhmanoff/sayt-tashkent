import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { isValidLanguage } from "@/lib/i18n/utils"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return [{ lang: "uz" }, { lang: "ru" }]
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <StructuredData />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
