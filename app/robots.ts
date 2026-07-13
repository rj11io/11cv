import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cv.rj11.io/sitemap.xml",
    host: "https://cv.rj11.io",
  }
}
