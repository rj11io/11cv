// Registry of every CV variant under /v1. The index page and the sitemap
// both read from here, so adding a variant means: create its module folder
// and list it below.

import { role as mini } from "./mini/content"

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

export const VARIANTS: Variant[] = [
  mini,
  {
    slug: "max",
    name: "Max",
    title: "AI Product Engineer",
    description: "The full CV: every role, project, and detail.",
  },

]
