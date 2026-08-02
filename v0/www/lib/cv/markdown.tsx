// Renders the inline markdown allowed in content files: **bold**, *italic*,
// `code`, and [links](https://...). No nesting (e.g. bold inside a link).

import * as React from "react"

import { bareUrl } from "@/lib/utils"

// A printed page can't be clicked, so every link whose label hides its
// destination gets the bare URL appended — visible only in print, faded so
// it reads as a footnote to the label rather than part of the sentence.
export function PrintHref({ url }: { url: string }) {
  return (
    <span className="hidden font-mono text-[0.65em] font-normal text-muted-foreground/60 not-italic [overflow-wrap:anywhere] print:inline">
      {" "}
      {bareUrl(url)}
    </span>
  )
}

const TOKEN =
  /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g

const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

export function Inline({
  text,
  linkClassName,
}: {
  text: string
  linkClassName?: string
}) {
  const parts = text.split(TOKEN)
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        const link = part.match(LINK)
        if (link) {
          return (
            <React.Fragment key={i}>
              <a
                href={link[2]}
                className={linkClassName}
                target="_blank"
                rel="noreferrer"
              >
                {link[1]}
              </a>
              <PrintHref url={link[2]} />
            </React.Fragment>
          )
        }
        return <React.Fragment key={i}>{part}</React.Fragment>
      })}
    </>
  )
}
