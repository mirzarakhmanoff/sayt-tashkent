"use client";

import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";

type Locale = "uz" | "ru" | "en";
type Localized = Partial<Record<Locale, string>> & Record<string, string>;

interface ApiProject {
  _id: string;
  title: Localized;
  description?: Localized;
  image?: string; // "/uploads/....webp"
  url?: string;
  order?: number;
  category?: {
    title?: Localized;
    slug?: string;
  };
}

interface ApiResponse {
  success: boolean;
  data: ApiProject[];
}

const API_URL = "https://admin.innosoft-systems.uz/api/projects?limit=100";
const FILE_BASE = "https://admin.innosoft-systems.uz";

function detectLocale(): Locale {
  const p = window.location.pathname.split("/")[1];
  if (p === "uz" || p === "ru" || p === "en") return p;
  const htmlLang = (document.documentElement.lang || "").toLowerCase();
  if (htmlLang.startsWith("ru")) return "ru";
  if (htmlLang.startsWith("en")) return "en";
  return "uz";
}

function pickLocalized(obj: Localized | undefined, locale: Locale) {
  if (!obj) return "";
  return obj[locale] ?? obj.uz ?? obj.ru ?? obj.en ?? "";
}

export function PortfolioSection() {
  const t = useTranslation();

  const [locale, setLocale] = useState<Locale>("uz");
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const thirdWidthRef = useRef(0);

  // drag-to-scroll
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`Projects fetch failed: ${res.status}`);
        const json = (await res.json()) as ApiResponse;

        if (!cancelled) {
          const items = Array.isArray(json?.data) ? json.data : [];
          const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
          setProjects(sorted);
        }
      } catch (e) {
        console.error(e);
        if (!cancelled) setProjects([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const cards = useMemo(() => {
    return projects.map((p) => {
      const title = pickLocalized(p.title, locale);
      const description = pickLocalized(p.description, locale);
      const category = pickLocalized(p.category?.title, locale);
      const imageUrl = p.image ? `${FILE_BASE}${p.image}` : "";
      const link = p.url || "";
      return { ...p, titleText: title, descText: description, categoryText: category, imageUrl, link };
    });
  }, [projects, locale]);

  // Infinite loop uchun 3 ta nusxa (chapga ham, o‘ngga ham bemalol)
  const loopCards = useMemo(() => {
    if (!cards.length) return [];
    return [...cards, ...cards, ...cards];
  }, [cards]);

  // Scroll width’larni hisoblab, middle (2-nusxa) ga olib qo‘yamiz
  useEffect(() => {
    if (!scrollerRef.current) return;
    if (!loopCards.length) return;

    const el = scrollerRef.current;

    const measure = () => {
      const total = el.scrollWidth;
      const third = total / 3;
      thirdWidthRef.current = third;

      // middle copy start’iga joylash
      // (agar allaqachon user scroll qilgan bo‘lsa, qayta “jump” bo‘lmasin)
      if (el.scrollLeft < third * 0.2 || el.scrollLeft > third * 2.8) {
        el.scrollLeft = third;
      }
    };

    // Render tugagandan keyin
    requestAnimationFrame(measure);

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    return () => ro.disconnect();
  }, [loopCards.length]);

  // Infinite scroll reset (seamless)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const third = thirdWidthRef.current;
        if (!third) return;

        // middle segmentdan chiqib ketsa, qaytarib qo‘yamiz
        if (el.scrollLeft <= third * 0.5) {
          el.scrollLeft += third;
        } else if (el.scrollLeft >= third * 1.5) {
          el.scrollLeft -= third;
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    // 1 card ~ width + gap (taxminiy)
    // Agar aniq bo‘lsin desang, birinchi child width’ini o‘lchab qo‘yish ham mumkin.
    const step = Math.min(480, el.clientWidth * 0.85);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  // drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDownRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    startScrollLeftRef.current = el.scrollLeft;
  };

  const onMouseLeave = () => {
    isDownRef.current = false;
  };

  const onMouseUp = () => {
    isDownRef.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (!isDownRef.current) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.2; // tezlik
    el.scrollLeft = startScrollLeftRef.current - walk;
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.portfolio.subtitle}</p>
        </div>

        {/* Controls + Slider */}
        <div className="relative">
          {/* Control buttons */}
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => scrollByCard("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur hover:bg-background shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next projects"
            onClick={() => scrollByCard("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur hover:bg-background shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-[1]"
            style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-[1]"
            style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          />

          {loading ? (
            <div className="flex gap-6 overflow-hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] bg-background rounded-2xl overflow-hidden border border-border animate-pulse"
                >
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 w-24 bg-muted rounded" />
                    <div className="h-5 w-2/3 bg-muted rounded" />
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-4/5 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={scrollerRef}
              className="overflow-x-auto no-scrollbar scroll-smooth select-none"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              // touch/trackpad scroll default ishlaydi
            >
              <div className="flex gap-6 pr-6">
                {loopCards.map((project, idx) => (
                  <a
                    key={`${project._id}-${idx}`}
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noreferrer" : undefined}
                    className="group shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 block"
                  >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.titleText}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-full bg-muted" />
                      )}

                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.categoryText}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.titleText}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.descText}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* local css */}
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
