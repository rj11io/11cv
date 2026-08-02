// Turns the free-form profile frontmatter meta (location, email, website,
// handles, anything else) into display labels + optional links, in a stable
// order. Shared by every CV variant so contact lines always match.

export type Contact = { label: string; href?: string }

export function contactList(meta: Record<string, string>): Contact[] {
  const bare = (url: string) =>
    url.replace(/^https?:\/\//, "").replace(/\/$/, "")
  const known: Record<string, (value: string) => Contact> = {
    location: (value) => ({ label: value }),
    email: (value) => ({ label: value, href: `mailto:${value}` }),
    website: (value) => ({
      label: bare(value).replace(/^www\./, ""),
      href: value,
    }),
    github: (value) => {
      const href = value.startsWith("http")
        ? value
        : `https://github.com/${value}`
      return { label: bare(href), href }
    },
    linkedin: (value) => {
      const href = value.startsWith("http")
        ? value
        : `https://www.linkedin.com/in/${value}`
      return { label: bare(href).replace(/^www\./, ""), href }
    },
  }
  const order = ["location", "email", "website", "github", "linkedin"]
  const rest = Object.keys(meta).filter((key) => !order.includes(key))
  return [...order, ...rest]
    .filter((key) => meta[key])
    .map((key) => {
      const build = known[key]
      if (build) return build(meta[key])
      return meta[key].startsWith("http")
        ? { label: bare(meta[key]), href: meta[key] }
        : { label: meta[key] }
    })
}
