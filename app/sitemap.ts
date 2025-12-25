import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sayt-tashkent.uz"
  const currentDate = new Date()

  return [
    {
      url: `${baseUrl}/uz`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          uz: `${baseUrl}/uz`,
          ru: `${baseUrl}/ru`,
        },
      },
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          uz: `${baseUrl}/uz`,
          ru: `${baseUrl}/ru`,
        },
      },
    },
  ]
}
