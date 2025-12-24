"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { TelegramLeadModal } from "@/components/TelegramLeadModal";

export function CTASection() {
  const t = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA card with primary blue background */}
          <div className="relative bg-primary rounded-3xl p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
                {t.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty">
                {t.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  type="button"
                  size="lg"
                  variant="secondary"
                  onClick={() => setOpen(true)}
                  className="rounded-full text-base gap-2 group bg-background text-primary hover:bg-background/90"
                >
                  {t.cta.startProject}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => setOpen(true)}
                  className="rounded-full text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  {t.cta.scheduleCall}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TelegramLeadModal
        open={open}
        onClose={() => setOpen(false)}
        // xohlasang default type ber:
        // defaultProjectType="web"
      />
    </>
  );
}
