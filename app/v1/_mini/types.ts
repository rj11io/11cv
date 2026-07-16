// Config shape for a mini CV variant. Each variant module under app/v1/
// exports one MiniRole from its content.ts: the role-tailored title, summary,
// skills, and highlights. Identity (name, contacts) and education still come
// from content/ so they never drift between variants.

export type MiniSkillGroup = {
  name: string
  items: string[]
}

export type MiniEntry = {
  /** Role title as it appeared at that company. */
  role: string
  company: string
  period: string
  url?: string
  /** 2–3 tailored highlight lines. May contain inline markdown. */
  highlights: string[]
}

export type MiniProject = {
  name: string
  url: string
  blurb: string
}

export type MiniRole = {
  /** Route segment under /v1. */
  slug: string
  /** Short display name for the /v1 index ("Mini", "Datavis Eng Mini", ...). */
  name: string
  /** Role title shown under the name and in page metadata. */
  title: string
  /** One-line description for the /v1 index and meta tags. */
  description: string
  /**
   * Print budget in A4 pages. 1 switches the renderer to a denser print
   * layout (smaller type, tighter spacing); screen layout is unaffected.
   */
  pdfPages: 1 | 2
  /** Short intro paragraphs, ideally one or two. May contain inline markdown. */
  summary: string[]
  /** Optional short personal highlights shown after the summary. */
  funFacts?: string[]
  /** Skill groups, trimmed and ordered for the role. */
  skills: MiniSkillGroup[]
  /** Experience entries to show, most recent first. */
  experience: MiniEntry[]
  /** One-line wrap-up of the roles that didn't make the cut. */
  earlierRoles?: string
  /** Selected projects, rendered as one-liners. */
  projects?: MiniProject[]
}
