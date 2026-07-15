import type { MetadataRoute } from "next"

import { VARIANTS } from "./v1/variants"

const BASE = "https://cv.rj11.io"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/v1`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...VARIANTS.map((variant) => ({
      url: `${BASE}/v1/${variant.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: variant.slug === "max" ? 1 : 0.6,
    })),
  ]
}
