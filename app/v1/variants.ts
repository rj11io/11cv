// Registry of every CV variant under /v1. The index page and the sitemap
// both read from here, so adding a variant means: create its module folder
// and list it below.

import type { MiniRole } from "./_mini/types"
import { role as datavisEngMini } from "./datavis-eng-mini/content"
import { role as fePlatformEngMini } from "./fe-platform-eng-mini/content"
import { role as foundingProductEngMini } from "./founding-product-eng-mini/content"
import { role as mini } from "./mini/content"
import { role as productEngMini } from "./product-eng-mini/content"

export type Variant = {
  /** Route segment under /v1. */
  slug: string
  /** Short display name for the index ("Max", "Mini", ...). */
  name: string
  /** Role title the variant presents. */
  title: string
  /** One-line description for the index and meta tags. */
  description: string
}

export const MINI_ROLES: MiniRole[] = [
  mini,
  productEngMini,
  fePlatformEngMini,
  datavisEngMini,
  foundingProductEngMini,
]

export const VARIANTS: Variant[] = [
  {
    slug: "max",
    name: "Max",
    title: "AI Product Engineer",
    description: "The full CV: every role, project, and detail.",
  },
  ...MINI_ROLES.map(({ slug, name, title, description }) => ({
    slug,
    name,
    title,
    description,
  })),
]
