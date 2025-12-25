import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sayt Tashkent - Professional Web Development",
    short_name: "Sayt Tashkent",
    description: "Professional web development services in Tashkent. Creating modern websites, Telegram bots, and web & mobile applications.",
    start_url: "/uz",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066ff",
    orientation: "portrait-primary",
    categories: ["business", "technology", "productivity"],
    lang: "uz",
    dir: "ltr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  }
}
