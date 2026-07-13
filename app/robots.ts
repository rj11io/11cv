import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.rj11.io/sitemap.xml",
    host: "https://www.rj11.io",
  }
}
